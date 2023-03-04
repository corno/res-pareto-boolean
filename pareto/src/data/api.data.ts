import * as pd from 'pareto-core-data'

import { functionReference, constructor, algorithm, typeReference } from "lib-pareto-typescript-project/dist/submodules/api/shorthands"

import * as gapi from "lib-pareto-typescript-project/dist/submodules/api"
const d = pd.d

export const $: gapi.T.API<pd.SourceLocation> = {
    'algorithms': d({
        "and": algorithm(functionReference("this", {}, "And")),
        "smallerThan": algorithm(functionReference("this", {}, "SmallerThan")),
        "greaterThan": algorithm(functionReference("this", {}, "GreaterThan")),
        "equal": algorithm(functionReference("this", {}, "Equal")),
        "or": algorithm(functionReference("this", {}, "Or")),
        "not": algorithm(functionReference("this", {}, "Not")),
        "isZero": algorithm(functionReference("this", {}, "IsZero")),
    })
}