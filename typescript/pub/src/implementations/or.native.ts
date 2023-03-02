import * as pi from 'pareto-core-internals'

import { Cor } from "../definition/api.generated"

export const $$: Cor = ($) => {
    let current = false
    pi.flatten($).forEach(($) => {
        current = current || $
    })
    return current
}
