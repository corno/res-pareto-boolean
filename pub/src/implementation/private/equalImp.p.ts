import * as api from "../../api"

export const equalImp: api.FEqual = ($) => {
    return $.this === $.that
}
