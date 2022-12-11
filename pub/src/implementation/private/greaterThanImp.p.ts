import * as api from "../../api"

export const greaterThanImp: api.FGreaterThan = ($) => {
    return $.this > $.that
}