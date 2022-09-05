import * as api from "api-pareto-boolean"

export const equalImp: api.FEqual = ($) => {
    return $.this === $.that
}
