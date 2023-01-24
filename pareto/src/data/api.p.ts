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

import { definitionReference, externalDefinitionReference, constructor } from "lib-pareto-typescript-project/dist/modules/moduleDefinition/api/shorthands.p"


import * as mmoduleDefinition from "lib-pareto-typescript-project/dist/modules/moduleDefinition"


const d = pr.wrapRawDictionary

export const $: mmoduleDefinition.TModuleDefinition = {
    'glossary': {
        'imports': d({
            "common": "glo-pareto-common",
        }),
        'parameters': d({}),
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
            "And": _function( typeReference("BooleanRange"), externalTypeReference("common", "Boolean")),
            "Or": _function( typeReference("BooleanRange"),externalTypeReference("common", "Boolean")),
            "GreaterThan": _function( typeReference("NumberPair"), externalTypeReference("common", "Boolean")),
            "SmallerThan":_function( typeReference("NumberPair"), externalTypeReference("common", "Boolean")),
            "Not": _function( externalTypeReference("common", "Boolean"),externalTypeReference("common", "Boolean")),
            "IsZero":_function( externalTypeReference("common", "Number"),externalTypeReference("common", "Boolean")),
            "Equal": _function( typeReference("NumberPair"), externalTypeReference("common", "Boolean")),
        }),
    },
    'api': {
        'imports': d({}),
        'algorithms': d({
            "and": {
                'definition': {
                    'function': "And"
                },
                'type': ['reference', null],
            },
            "smallerThan": {
                'definition': {
                    'function': "SmallerThan"
                },
                'type': ['reference', null],
            },
            "greaterThan": {
                'definition': {
                    'function': "GreaterThan"
                },
                'type': ['reference', null],
            },
            "equal": {
                'definition': {
                    'function': "Equal"
                },
                'type': ['reference', null],
            },
            "or": {
                'definition': {
                    'function': "Or"
                },
                'type': ['reference', null],
            },
            "not": {
                'definition': {
                    'function': "Not"
                },
                'type': ['reference', null],
            },
            "isZero": {
                'definition': {
                    'function': "IsZero"
                },
                'type': ['reference', null],
            },
        })
    },
}