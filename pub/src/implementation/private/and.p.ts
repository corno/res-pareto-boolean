import * as api from "../../api"

import * as pi from "pareto-core-internals"

export const andImp: api.FAnd = ($) => {
    let current = true
    pi.flatten($).forEach(($) => {
        current = current && $
    })
    return current
}