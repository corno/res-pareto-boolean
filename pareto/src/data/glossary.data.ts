import * as pd from 'pareto-core-data'

import {
    string,
    null_,
    nested,
    dictionary, member, taggedUnion, types, group,
    array,
    typeReference,
    data,
    boolean,
    func,
    type,
    optional,
    reference,
    number,
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import * as gglossary from "lib-pareto-typescript-project/dist/submodules/glossary"
const d = pd.d

export const $: gglossary.T.Glossary<pd.SourceLocation> =  {
    'parameters': d({}),
    'types': d({
        "BooleanRange": type(nested(boolean())),
        "NumberPair": type(group({
            "this": member(number()),
            "that": member(number()),
        })),
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
}