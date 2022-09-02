import * as api from "api-pareto-boolean"

import * as pi from "pareto-core-internals"

export const and: api.And = ($) => {
    let current = true
    pi.flatten($).forEach(($) => {
        current = current && $
    })
    return current
}

export const or: api.Or = ($) => {
    let current = false
    pi.flatten($).forEach(($) => {
        current = current || $
    })
    return current
}

export const not: api.Not = ($) => {

    return !$
}

export const greaterThan: api.GreaterThan = ($) => {
    return $.this > $.that
}

export const smallerThan: api.SmallerThan = ($) => {
    return $.this < $.that
}

export const equal: api.Equal = ($) => {
    return $.this === $.that
}

export const isZero: api.IsZero = ($) => {
    return $ === 0
}