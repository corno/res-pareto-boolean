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
    typeReference,
    nested,
    boolean,
    func,
    data,
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands.p"

import { definitionReference, constructor, algorithm } from "lib-pareto-typescript-project/dist/submodules/moduleDefinition/shorthands.p"

import * as mmoduleDefinition from "lib-pareto-typescript-project/dist/submodules/moduleDefinition"

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
            "And": func(typeReference("BooleanRange"), null, null, data(typeReference("common", "Boolean"), false)),
            "Or": func(typeReference("BooleanRange"), null, null, data(typeReference("common", "Boolean"), false)),
            "GreaterThan": func(typeReference("NumberPair"), null, null, data(typeReference("common", "Boolean"), false)),
            "SmallerThan": func(typeReference("NumberPair"), null, null, data(typeReference("common", "Boolean"), false)),
            "Not": func(typeReference("common", "Boolean"), null, null, data(typeReference("common", "Boolean"), false)),
            "IsZero": func(typeReference("common", "Number"), null, null, data(typeReference("common", "Boolean"), false)),
            "Equal": func(typeReference("NumberPair"), null, null, data(typeReference("common", "Boolean"), false)),
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