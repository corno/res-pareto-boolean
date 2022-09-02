
import * as pa from "pareto-core-async"
import * as pm from "pareto-core-state"
import * as pl from "pareto-core-lib"

import * as test from "lib-pareto-test"

import * as pub from "../../../pub"

export function createGetTestSet($d: {}): test.GetTestSet {
    return () => {

        const builder = pm.createDictionaryBuilder<test.TTestElement>(
            ["ignore", {}],
            () => {
                pl.panic("duplicate key")
            }
        )
        function createTest(name: string, actual: boolean, expect: boolean) {
            builder.add(name, {
                type: ["test", {
                    type: ["boolean", {
                        test: actual === expect,
                    }]
                }]
            })
        }

        createTest("not true", pub.not(true), false)
        createTest("not false", pub.not(false), true)

        createTest("and - empty", pub.and([]), true)
        createTest("and - false", pub.and([false]), false)
        createTest("and - trues", pub.and([true, true]), true)

        createTest("or - empty", pub.or([]), false)
        createTest("or - falses", pub.or([false, false]), false)
        createTest("or - true", pub.or([true]), true)

        createTest("isZero - not", pub.isZero(1), false)
        createTest("isZero - yes", pub.isZero(0), true)


        createTest("equals - yes", pub.equal({ this: 42, that: 42 }), true)
        createTest("equals - not", pub.equal({ this: 42, that: 5 }), true)

        createTest("smallerThan - not", pub.smallerThan({ this: 42, that: 42 }), false)
        createTest("smallerThan - yes", pub.smallerThan({ this: 41, that: 42 }), true)

        createTest("greaterThan - not", pub.greaterThan({ this: 42, that: 42 }), false)
        createTest("greaterThan - yes", pub.greaterThan({ this: 43, that: 42 }), true)

        return pa.value({
            elements: builder.getDictionary()
        })
    }
}