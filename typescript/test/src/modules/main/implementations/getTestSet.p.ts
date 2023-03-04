
import * as ps from 'pareto-core-state'
import * as pa from 'pareto-core-async'

import * as gtest from "lib-pareto-test"

import * as gpub from "../../../../../pub"

import { getTestSet } from "../definition/api.generated"

export const $$: getTestSet = () => {

    const builder = ps.createUnsafeDictionaryBuilder<gtest.T.TestElement>()
    function createTest(name: string, actual: boolean, expect: boolean) {
        builder.add(name, {
            type: ['test', {
                type: ['boolean', actual === expect]
            }]
        })
    }

    createTest("not true", gpub.$r.not(true), false)
    createTest("not false", gpub.$r.not(false), true)

    createTest("and - empty", gpub.$r.and([]), true)
    createTest("and - false", gpub.$r.and([false]), false)
    createTest("and - trues", gpub.$r.and([true, true]), true)

    createTest("or - empty", gpub.$r.or([]), false)
    createTest("or - falses", gpub.$r.or([false, false]), false)
    createTest("or - true", gpub.$r.or([true]), true)

    createTest("isZero - not", gpub.$r.isZero(1), false)
    createTest("isZero - yes", gpub.$r.isZero(0), true)

    createTest("equal - yes", gpub.$r.equal({ this: 42, that: 42 }), true)
    createTest("equal - not", gpub.$r.equal({ this: 42, that: 5 }), false)

    createTest("smallerThan - not", gpub.$r.smallerThan({ this: 42, that: 42 }), false)
    createTest("smallerThan - yes", gpub.$r.smallerThan({ this: 41, that: 42 }), true)

    createTest("greaterThan - not", gpub.$r.greaterThan({ this: 42, that: 42 }), false)
    createTest("greaterThan - yes", gpub.$r.greaterThan({ this: 43, that: 42 }), true)

    return pa.asyncValue({
        elements: builder.getDictionary()
    })
}