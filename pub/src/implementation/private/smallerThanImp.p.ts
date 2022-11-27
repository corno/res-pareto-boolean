import * as api from "../../interface"

export const smallerThanImp: api.FSmallerThan = ($) => {
    return $.this < $.that
}
