import * as pt from 'pareto-core-types'

import { T } from './types.generated'

import * as g_common from "glo-pareto-common"

export namespace B {}

export namespace C {}

export namespace F {
    
    export type And = ($: T.BooleanRange) => g_common.T.Boolean
    
    export type Equal = ($: T.NumberPair) => g_common.T.Boolean
    
    export type GreaterThan = ($: T.NumberPair) => g_common.T.Boolean
    
    export type IsZero = ($: g_common.T.Number) => g_common.T.Boolean
    
    export type Not = ($: g_common.T.Boolean) => g_common.T.Boolean
    
    export type Or = ($: T.BooleanRange) => g_common.T.Boolean
    
    export type SmallerThan = ($: T.NumberPair) => g_common.T.Boolean
}