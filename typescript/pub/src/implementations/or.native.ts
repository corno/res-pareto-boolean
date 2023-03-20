import * as pi from 'pareto-core-internals'

import { A } from "../api.generated"

export const $$: A.or = () => {
    return ($) => {
        let current = false
        pi.flatten($).forEach(($) => {
            current = current || $
        })
        return current
    }
}