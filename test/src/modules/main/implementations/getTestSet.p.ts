
import * as ps from 'pareto-core-state'
import * as pa from 'pareto-core-async'

import * as gtest from "lib-pareto-test"

import * as gpub from "../../../../../pub"

import { CgetTestSet } from "../api"

export const $$:CgetTestSet = () => {

    const builder = ps.createUnsafeDictionaryBuilder<gtest.T.TestElement>()
    function createTest(name: string, actual: boolean, expect: boolean) {
        builder.add(name, {
            type: ['test', {
                type: ['boolean', actual === expect]
            }]
        })
    }

    createTest("not true", gpub.$a.not(true), false)
    createTest("not false", gpub.$a.not(false), true)

    createTest("and - empty", gpub.$a.and([]), true)
    createTest("and - false", gpub.$a.and([false]), false)
    createTest("and - trues", gpub.$a.and([true, true]), true)

    createTest("or - empty", gpub.$a.or([]), false)
    createTest("or - falses", gpub.$a.or([false, false]), false)
    createTest("or - true", gpub.$a.or([true]), true)

    createTest("isZero - not", gpub.$a.isZero(1), false)
    createTest("isZero - yes", gpub.$a.isZero(0), true)

    createTest("equal - yes", gpub.$a.equal({ this: 42, that: 42 }), true)
    createTest("equal - not", gpub.$a.equal({ this: 42, that: 5 }), false)

    createTest("smallerThan - not", gpub.$a.smallerThan({ this: 42, that: 42 }), false)
    createTest("smallerThan - yes", gpub.$a.smallerThan({ this: 41, that: 42 }), true)

    createTest("greaterThan - not", gpub.$a.greaterThan({ this: 42, that: 42 }), false)
    createTest("greaterThan - yes", gpub.$a.greaterThan({ this: 43, that: 42 }), true)

    return pa.asyncValue({
        elements: builder.getDictionary()
    })
}