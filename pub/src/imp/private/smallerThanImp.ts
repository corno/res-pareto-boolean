import * as api from "api-pareto-boolean"

export const smallerThanImp: api.FSmallerThan = ($) => {
    return $.this < $.that
}
