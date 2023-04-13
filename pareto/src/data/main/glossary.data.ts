import * as pd from 'pareto-core-data'

import {
    array,
    boolean,
    data,
    externalTypeReference,
    group,
    imp,
    member,
    number,
    sfunction,
    type,
    typeReference,
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import * as g_glossary from "lib-pareto-typescript-project/dist/submodules/glossary"
const d = pd.d

export const $: g_glossary.T.Glossary<pd.SourceLocation> = {
    'parameters': d({}),
    'imports': d({
        "common": imp({}),
    }),
    'root': {
        'namespaces': d({}),
        'types': d({
            "BooleanRange": type(array(boolean())),
            "NumberPair": type(group({
                "this": member(number()),
                "that": member(number()),
            })),
        }),
    },
    'asynchronous': {
        'interfaces': d({}),
        'algorithms': d({}),

    },
    'synchronous': {
        'interfaces': d({}),
        'algorithms': d({
            "And": sfunction(externalTypeReference("common", "Boolean"), data(typeReference("BooleanRange"))),
            "Or": sfunction(externalTypeReference("common", "Boolean"), data(typeReference("BooleanRange"))),
            "GreaterThan": sfunction(externalTypeReference("common", "Boolean"), data(typeReference("NumberPair"))),
            "SmallerThan": sfunction(externalTypeReference("common", "Boolean"), data(typeReference("NumberPair"))),
            "Not": sfunction(externalTypeReference("common", "Boolean"), data(externalTypeReference("common", "Boolean"))),
            "IsZero": sfunction(externalTypeReference("common", "Boolean"), data(externalTypeReference("common", "Number"))),
            "Equal": sfunction(externalTypeReference("common", "Boolean"), data(typeReference("NumberPair"))),
        }),
    },

}