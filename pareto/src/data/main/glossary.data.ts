import * as pd from 'pareto-core-data'

import {
    nested, member, group,
    typeReference,
    data,
    boolean,
    sfunc,
    type,
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
    'asynchronous': {
        'interfaces': d({}),
        'constructors': d({}),
        'functions': d({}),
    },
    'synchronous': {
        'interfaces': d({}),
        'constructors': d({}),
        'functions': d({
            "And": sfunc(data(typeReference("BooleanRange")), externalTypeReference("common", "Boolean")),
            "Or": sfunc(data(typeReference("BooleanRange")), externalTypeReference("common", "Boolean")),
            "GreaterThan": sfunc(data(typeReference("NumberPair")), externalTypeReference("common", "Boolean")),
            "SmallerThan": sfunc(data(typeReference("NumberPair")), externalTypeReference("common", "Boolean")),
            "Not": sfunc(data(externalTypeReference("common", "Boolean")), externalTypeReference("common", "Boolean")),
            "IsZero": sfunc(data(externalTypeReference("common", "Number")), externalTypeReference("common", "Boolean")),
            "Equal": sfunc(data(typeReference("NumberPair")), externalTypeReference("common", "Boolean")),
        }),
    },

}