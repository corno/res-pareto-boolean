import * as api from "../../interface"

export const equalImp: api.FEqual = ($) => {
    return $.this === $.that
}
