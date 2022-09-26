
import * as pm from "pareto-core-state"
import * as pl from "pareto-core-lib"

import * as test from "lib-pareto-test"

import * as api from "../../interface"

import * as pub from "../../../../pub"

export const createGetTestset: api.FCreateGetTestset =  () => {
    return () => {

        const builder = pm.createUnsafeDictionaryBuilder<test.TTestElement>()
        function createTest(name: string, actual: boolean, expect: boolean) {
            builder.add(name, {
                type: ["test", {
                    type: ["boolean", {
                        test: actual === expect,
                    }]
                }]
            })
        }

        createTest("not true", pub.f_not(true), false)
        createTest("not false", pub.f_not(false), true)

        createTest("and - empty", pub.f_and([]), true)
        createTest("and - false", pub.f_and([false]), false)
        createTest("and - trues", pub.f_and([true, true]), true)

        createTest("or - empty", pub.f_or([]), false)
        createTest("or - falses", pub.f_or([false, false]), false)
        createTest("or - true", pub.f_or([true]), true)

        createTest("isZero - not", pub.f_isZero(1), false)
        createTest("isZero - yes", pub.f_isZero(0), true)


        createTest("equal - yes", pub.f_equal({ this: 42, that: 42 }), true)
        createTest("equal - not", pub.f_equal({ this: 42, that: 5 }), false)

        createTest("smallerThan - not", pub.f_smallerThan({ this: 42, that: 42 }), false)
        createTest("smallerThan - yes", pub.f_smallerThan({ this: 41, that: 42 }), true)

        createTest("greaterThan - not", pub.f_greaterThan({ this: 42, that: 42 }), false)
        createTest("greaterThan - yes", pub.f_greaterThan({ this: 43, that: 42 }), true)

        return pl.asyncValue({
            elements: builder.getDictionary()
        })
    }
}