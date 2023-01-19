import * as pr from 'pareto-core-raw'
import {
    array,
    dictionary,
    externalReference,
    group,
    member,
    number as nr,
    boolean as bln,
    reference as ref,
    string,
    taggedUnion,
    types,
    _function,
    typeReference,
    externalTypeReference,
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
        'imports': d({
            "common": "glo-pareto-common",
        }),
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
                "data": typeReference("BooleanRange"),
                "return value": externalTypeReference("common", "Boolean"),
            },
            "Or": {
                "data": typeReference("BooleanRange"),
                "return value": externalTypeReference("common", "Boolean"),
            },
            "GreaterThan": {
                "data": typeReference("NumberPair"),
                "return value": externalTypeReference("common", "Boolean"),
            },
            "SmallerThan": {
                "data": typeReference("NumberPair"),
                "return value": externalTypeReference("common", "Boolean"),
            },
            "Not": {
                "data": externalTypeReference("common", "Boolean"),
                "return value": externalTypeReference("common", "Boolean"),
            },
            "IsZero": {
                "data": externalTypeReference("common", "Number"),
                "return value": externalTypeReference("common", "Boolean"),
            },
            "Equal": {
                "data": typeReference("NumberPair"),
                "return value": externalTypeReference("common", "Boolean"),
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