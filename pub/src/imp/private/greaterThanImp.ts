import * as api from "api-pareto-boolean"

export const greaterThanImp: api.FGreaterThan = ($) => {
    return $.this > $.that
}