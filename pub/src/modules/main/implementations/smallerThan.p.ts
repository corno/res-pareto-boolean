import * as api from "../api"

export const ismallerThan: api.CsmallerThan = ($) => {
    return $.this < $.that
}
