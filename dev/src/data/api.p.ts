import * as pr from "pareto-core-raw"
import {
    array,
    dictionary,
    externalReference,
    group,
    member,
    nullType,
    number as nr,
    boolean as bln,
    type,
    reference as ref,
    string,
    taggedUnion,
    types,
    _function,
} from "lib-pareto-typescript-project/dist/modules/glossary/api/shorthands.p"

import {
    number,
    reference,
    string as str,
    boolean,
} from "lib-pareto-typescript-project/dist/modules/moduleDefinition/api/shorthands.p"

import * as mmoduleDefinition from "lib-pareto-typescript-project/dist/modules/moduleDefinition"


const d = pr.wrapRawDictionary

export const $: mmoduleDefinition.TModuleDefinition = {
    'glossary': {
        'imports': d({}),
        'namespace': {
            'types': types({
                "BooleanRange": ['nested', bln()],
                "NumberPair": group({
                    "this": member(nr()),
                    "that": member(nr()),
                }),
            }),
            'interfaces': d({}),

        },
        'functions': d({
            "And": {
                "data": reference("BooleanRange"),
                "return value": boolean()
            },
            "Or": {
                "data": reference("BooleanRange"),
                "return value": boolean()
            },
            "GreaterThan": {
                "data": reference("NumberPair"),
                "return value": boolean()
            },
            "SmallerThan": {
                "data": reference("NumberPair"),
                "return value": boolean()
            },
            "Not": {
                "data": boolean(),
                "return value": boolean()
            },
            "IsZero": {
                "data": number(),
                "return value": boolean()
            },
            "Equal": {
                "data": reference("NumberPair"),
                "return value": boolean()
            },
        }),
        'callbacks': d({}),
        'pipes': d({}),
    },
    'api': {
        'imports': d({}),
        'algorithms': d({
            "and": {
                'definition': ['function', {
                    'function': "And"
                }],
                'type': ['reference', null],
            },
            "smallerThan": {
                'definition': ['function', {
                    'function': "SmallerThan"
                }],
                'type': ['reference', null],
            },
            "greaterThan": {
                'definition': ['function', {
                    'function': "GreaterThan"
                }],
                'type': ['reference', null],
            },
            "equal": {
                'definition': ['function', {
                    'function': "Equal"
                }],
                'type': ['reference', null],
            },
            "or": {
                'definition': ['function', {
                    'function': "Or"
                }],
                'type': ['reference', null],
            },
            "not": {
                'definition': ['function', {
                    'function': "Not"
                }],
                'type': ['reference', null],
            },
            "isZero": {
                'definition': ['function', {
                    'function': "IsZero"
                }],
                'type': ['reference', null],
            },
        })
    },
}