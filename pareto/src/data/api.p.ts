import * as pr from 'pareto-core-raw'
import {
    array,
    dictionary,
    group,
    member,
    number,
    string,
    taggedUnion,
    types,
    _function,
    typeReference,
    nested,
    boolean,
} from "lib-pareto-typescript-project/dist/modules/glossary/api/shorthands.p"

import { definitionReference, constructor, algorithm } from "lib-pareto-typescript-project/dist/modules/moduleDefinition/api/shorthands.p"

import * as mmoduleDefinition from "lib-pareto-typescript-project/dist/modules/moduleDefinition"

const d = pr.wrapRawDictionary

export const $: mmoduleDefinition.TModuleDefinition = {
    'glossary': {
        'imports': d({
            "common": "glo-pareto-common",
        }),
        'parameters': d({}),
        'templates': d({}),
        'types': types({
            "BooleanRange": nested(boolean()),
            "NumberPair": group({
                "this": member(number()),
                "that": member(number()),
            }),
        }),
        'interfaces': d({}),
        'functions': d({
            "And": _function(typeReference("BooleanRange"), typeReference("common", "Boolean")),
            "Or": _function(typeReference("BooleanRange"), typeReference("common", "Boolean")),
            "GreaterThan": _function(typeReference("NumberPair"), typeReference("common", "Boolean")),
            "SmallerThan": _function(typeReference("NumberPair"), typeReference("common", "Boolean")),
            "Not": _function(typeReference("common", "Boolean"), typeReference("common", "Boolean")),
            "IsZero": _function(typeReference("common", "Number"), typeReference("common", "Boolean")),
            "Equal": _function(typeReference("NumberPair"), typeReference("common", "Boolean")),
        }),
    },
    'api': {
        'imports': d({}),
        'algorithms': d({
            "and": algorithm(definitionReference("And")),
            "smallerThan": algorithm(definitionReference("SmallerThan")),
            "greaterThan": algorithm(definitionReference("GreaterThan")),
            "equal": algorithm(definitionReference("Equal")),
            "or": algorithm(definitionReference("Or")),
            "not": algorithm(definitionReference("Not")),
            "isZero": algorithm(definitionReference("IsZero")),
        })
    },
}