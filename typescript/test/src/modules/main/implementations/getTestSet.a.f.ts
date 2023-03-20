
import * as ps from 'pareto-core-state'
import * as pa from 'pareto-core-async'

import * as g_test from "lib-pareto-test"

import * as g_pub from "../../../../../pub"

import { getTestSet } from "../api.generated"

export const $$: getTestSet = () => {

    const builder = ps.createUnsafeDictionaryBuilder<g_test.T.TestElement>()
    function createTest(name: string, actual: boolean, expect: boolean) {
        builder.add(name, {
            type: ['test', {
                type: ['boolean', actual === expect]
            }]
        })
    }

    createTest("not true", g_pub.$r.not(true), false)
    createTest("not false", g_pub.$r.not(false), true)

    createTest("and - empty", g_pub.$r.and([]), true)
    createTest("and - false", g_pub.$r.and([false]), false)
    createTest("and - trues", g_pub.$r.and([true, true]), true)

    createTest("or - empty", g_pub.$r.or([]), false)
    createTest("or - falses", g_pub.$r.or([false, false]), false)
    createTest("or - true", g_pub.$r.or([true]), true)

    createTest("isZero - not", g_pub.$r.isZero(1), false)
    createTest("isZero - yes", g_pub.$r.isZero(0), true)

    createTest("equal - yes", g_pub.$r.equal({ this: 42, that: 42 }), true)
    createTest("equal - not", g_pub.$r.equal({ this: 42, that: 5 }), false)

    createTest("smallerThan - not", g_pub.$r.smallerThan({ this: 42, that: 42 }), false)
    createTest("smallerThan - yes", g_pub.$r.smallerThan({ this: 41, that: 42 }), true)

    createTest("greaterThan - not", g_pub.$r.greaterThan({ this: 42, that: 42 }), false)
    createTest("greaterThan - yes", g_pub.$r.greaterThan({ this: 43, that: 42 }), true)

    return pa.asyncValue({
        elements: builder.getDictionary()
    })
}