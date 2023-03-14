import * as pd from 'pareto-core-data'

import {
    string,
    null_,
    nested,
    dictionary, member, taggedUnion, types, group,
    array,
    typeReference,
    sdata,
    boolean,
    sfunc,
    type,
    optional,
    number,
    externalTypeReference,
    imp,
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import * as g_glossary from "lib-pareto-typescript-project/dist/submodules/glossary"
const d = pd.d

export const $: g_glossary.T.Glossary<pd.SourceLocation> = {
    'parameters': d({}),
    'imports': d({
        "common": imp({}),
    }),
    'types': d({
        "BooleanRange": type(nested(boolean())),
        "NumberPair": type(group({
            "this": member(number()),
            "that": member(number()),
        })),
    }),
    'type': ['synchronous', {
        'builders': d({}),
        'functions': d({
            "And": sfunc(sdata(typeReference("BooleanRange")), sdata(externalTypeReference("common", "Boolean"))),
            "Or": sfunc(sdata(typeReference("BooleanRange")), sdata(externalTypeReference("common", "Boolean"))),
            "GreaterThan": sfunc(sdata(typeReference("NumberPair")), sdata(externalTypeReference("common", "Boolean"))),
            "SmallerThan": sfunc(sdata(typeReference("NumberPair")), sdata(externalTypeReference("common", "Boolean"))),
            "Not": sfunc(sdata(externalTypeReference("common", "Boolean")), sdata(externalTypeReference("common", "Boolean"))),
            "IsZero": sfunc(sdata(externalTypeReference("common", "Number")), sdata(externalTypeReference("common", "Boolean"))),
            "Equal": sfunc(sdata(typeReference("NumberPair")), sdata(externalTypeReference("common", "Boolean"))),
        }),

    }],
}