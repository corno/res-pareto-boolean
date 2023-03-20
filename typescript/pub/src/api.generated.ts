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
    readonly 'and': A.and
    readonly 'equal': A.equal
    readonly 'greaterThan': A.greaterThan
    readonly 'isZero': A.isZero
    readonly 'not': A.not
    readonly 'or': A.or
    readonly 'smallerThan': A.smallerThan
}