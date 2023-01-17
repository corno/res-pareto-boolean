
import * as pm from 'pareto-core-state'
import * as pl from 'pareto-core-lib'

import * as test from "lib-pareto-test"

import * as api from "../../interface"

import * as pub from "../../../../pub"

export const createGetTestset: api.FCreateGetTestset =  () => {
    return () => {

        const builder = pm.createUnsafeDictionaryBuilder<test.TTestElement>()
        function createTest(name: string, actual: boolean, expect: boolean) {
            builder.add(name, {
                type: ['test', {
                    type: ['boolean', actual === expect]
                }]
            })
        }

        createTest("not true", pub.$a.not(true), false)
        createTest("not false", pub.$a.not(false), true)

        createTest("and - empty", pub.$a.and([]), true)
        createTest("and - false", pub.$a.and([false]), false)
        createTest("and - trues", pub.$a.and([true, true]), true)

        createTest("or - empty", pub.$a.or([]), false)
        createTest("or - falses", pub.$a.or([false, false]), false)
        createTest("or - true", pub.$a.or([true]), true)

        createTest("isZero - not", pub.$a.isZero(1), false)
        createTest("isZero - yes", pub.$a.isZero(0), true)


        createTest("equal - yes", pub.$a.equal({ this: 42, that: 42 }), true)
        createTest("equal - not", pub.$a.equal({ this: 42, that: 5 }), false)

        createTest("smallerThan - not", pub.$a.smallerThan({ this: 42, that: 42 }), false)
        createTest("smallerThan - yes", pub.$a.smallerThan({ this: 41, that: 42 }), true)

        createTest("greaterThan - not", pub.$a.greaterThan({ this: 42, that: 42 }), false)
        createTest("greaterThan - yes", pub.$a.greaterThan({ this: 43, that: 42 }), true)

        return pl.asyncValue({
            elements: builder.getDictionary()
        })
    }
}