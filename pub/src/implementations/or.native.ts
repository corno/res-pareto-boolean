import * as pi from "pareto-core-internals"

import * as api from "../api"


export const $$: api.Cor = ($) => {
    let current = false
    pi.flatten($).forEach(($) => {
        current = current || $
    })
    return current
}
