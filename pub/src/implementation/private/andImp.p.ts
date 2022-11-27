import * as api from "../../interface"

import * as pi from "pareto-core-internals"

export const and: api.FAnd = ($) => {
    let current = true
    pi.flatten($).forEach(($) => {
        current = current && $
    })
    return current
}