import * as pi from 'pareto-core-internals'

import { or } from "../api.generated"

export const $$: or = ($) => {
    let current = false
    pi.flatten($).forEach(($) => {
        current = current || $
    })
    return current
}
