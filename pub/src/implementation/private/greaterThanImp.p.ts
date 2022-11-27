import * as api from "../../interface"

export const greaterThanImp: api.FGreaterThan = ($) => {
    return $.this > $.that
}