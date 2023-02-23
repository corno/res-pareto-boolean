
import * as ps from 'pareto-core-state'
import * as pa from 'pareto-core-async'

import * as mtest from "lib-pareto-test"
import * as mapi from "../api"
import * as mpub from "../../../../../pub"

export const $$: mapi.CgetTestSet = () => {

    const builder = ps.createUnsafeDictionaryBuilder<mtest.T.TestElement>()
    function createTest(name: string, actual: boolean, expect: boolean) {
        builder.add(name, {
            type: ['test', {
                type: ['boolean', actual === expect]
            }]
        })
    }

    createTest("not true", mpub.$a.not(true), false)
    createTest("not false", mpub.$a.not(false), true)

    createTest("and - empty", mpub.$a.and([]), true)
    createTest("and - false", mpub.$a.and([false]), false)
    createTest("and - trues", mpub.$a.and([true, true]), true)

    createTest("or - empty", mpub.$a.or([]), false)
    createTest("or - falses", mpub.$a.or([false, false]), false)
    createTest("or - true", mpub.$a.or([true]), true)

    createTest("isZero - not", mpub.$a.isZero(1), false)
    createTest("isZero - yes", mpub.$a.isZero(0), true)


    createTest("equal - yes", mpub.$a.equal({ this: 42, that: 42 }), true)
    createTest("equal - not", mpub.$a.equal({ this: 42, that: 5 }), false)

    createTest("smallerThan - not", mpub.$a.smallerThan({ this: 42, that: 42 }), false)
    createTest("smallerThan - yes", mpub.$a.smallerThan({ this: 41, that: 42 }), true)

    createTest("greaterThan - not", mpub.$a.greaterThan({ this: 42, that: 42 }), false)
    createTest("greaterThan - yes", mpub.$a.greaterThan({ this: 43, that: 42 }), true)

    return pa.asyncValue({
        elements: builder.getDictionary()
    })
}