import * as pt from 'pareto-core-types'

import { T } from "./datatypes.generated"

import * as g_common from "glo-pareto-common"

export namespace ASYNC {
    
    export namespace I {}
    
    export namespace C {}
    
    export namespace F {}
}

export namespace SYNC {
    
    export namespace I {}
    
    export namespace I2 {}
    
    export namespace I3 {}
    
    export namespace C {}
    
    export namespace C2 {}
    
    export namespace C3 {}
    
    export namespace F {
        
        export type And = ($: T.BooleanRange) => g_common.T.Boolean
        
        export type Equal = ($: T.NumberPair) => g_common.T.Boolean
        
        export type GreaterThan = ($: T.NumberPair) => g_common.T.Boolean
        
        export type IsZero = ($: g_common.T.Number) => g_common.T.Boolean
        
        export type Not = ($: g_common.T.Boolean) => g_common.T.Boolean
        
        export type Or = ($: T.BooleanRange) => g_common.T.Boolean
        
        export type SmallerThan = ($: T.NumberPair) => g_common.T.Boolean
    }
}