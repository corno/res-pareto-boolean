import * as pi from 'pareto-core-internals'

import { A } from "../api.generated"

export const $$: A.and = () => {
    return ($) => {
        let current = true
        $.__forEach(($) => {
            current = current && $
        })
        return current
    }
}