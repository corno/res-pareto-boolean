import * as pt from 'pareto-core-types'

import * as g_this from "./glossary"

export type and = g_this.F.And

export type equal = g_this.F.Equal

export type greaterThan = g_this.F.GreaterThan

export type isZero = g_this.F.IsZero

export type not = g_this.F.Not

export type or = g_this.F.Or

export type smallerThan = g_this.F.SmallerThan

export type API = {
    and: and
    equal: equal
    greaterThan: greaterThan
    isZero: isZero
    not: not
    or: or
    smallerThan: smallerThan
}