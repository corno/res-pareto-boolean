import * as pd from 'pareto-core-data'

import { algorithm, sfunction } from "lib-pareto-typescript-project/dist/submodules/project/shorthands"

import * as g_project from "lib-pareto-typescript-project/dist/submodules/project"
const d = pd.d

export const $: g_project.T.ModuleDefinition.api.root<pd.SourceLocation> = {
    'algorithms': d({
        "and": algorithm(sfunction("this", {}, "And")),
        "smallerThan": algorithm(sfunction("this", {}, "SmallerThan")),
        "greaterThan": algorithm(sfunction("this", {}, "GreaterThan")),
        "equal": algorithm(sfunction("this", {}, "Equal")),
        "or": algorithm(sfunction("this", {}, "Or")),
        "not": algorithm(sfunction("this", {}, "Not")),
        "isZero": algorithm(sfunction("this", {}, "IsZero")),
    }),
}