import * as api from "../../interface"

import * as pi from "pareto-core-internals"

export const orImp: api.FOr = ($) => {
    let current = false
    pi.flatten($).forEach(($) => {
        current = current || $
    })
    return current
}
