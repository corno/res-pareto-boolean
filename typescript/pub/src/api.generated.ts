import * as pt from 'pareto-core-types'

import * as g_this from "./glossary"

export namespace A {
    
    export type and = g_this.SYNC.A.F.And
    
    export type equal = g_this.SYNC.A.F.Equal
    
    export type greaterThan = g_this.SYNC.A.F.GreaterThan
    
    export type isZero = g_this.SYNC.A.F.IsZero
    
    export type not = g_this.SYNC.A.F.Not
    
    export type or = g_this.SYNC.A.F.Or
    
    export type smallerThan = g_this.SYNC.A.F.SmallerThan
}

export type API = {
    and: A.and
    equal: A.equal
    greaterThan: A.greaterThan
    isZero: A.isZero
    not: A.not
    or: A.or
    smallerThan: A.smallerThan
}