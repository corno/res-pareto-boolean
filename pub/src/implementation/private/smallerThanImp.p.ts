import * as api from "../../api"

export const smallerThanImp: api.FSmallerThan = ($) => {
    return $.this < $.that
}
