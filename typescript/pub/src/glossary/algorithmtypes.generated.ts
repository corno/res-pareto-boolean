import * as pt from 'pareto-core-types'

import { T } from "./datatypes.generated"

import * as g_common from "glo-pareto-common"

export namespace ASYNC {
    
    export namespace I {}
    
    export namespace A {}
}

export namespace SYNC {
    
    export namespace I {}
    
    export namespace IW {}
    
    export namespace A {
        
        
        export namespace F {
            export type And = ($: T.BooleanRange) => g_common.T.Boolean
        }
        
        
        export namespace F {
            export type Equal = ($: T.NumberPair) => g_common.T.Boolean
        }
        
        
        export namespace F {
            export type GreaterThan = ($: T.NumberPair) => g_common.T.Boolean
        }
        
        
        export namespace F {
            export type IsZero = ($: g_common.T.Number) => g_common.T.Boolean
        }
        
        
        export namespace F {
            export type Not = ($: g_common.T.Boolean) => g_common.T.Boolean
        }
        
        
        export namespace F {
            export type Or = ($: T.BooleanRange) => g_common.T.Boolean
        }
        
        
        export namespace F {
            export type SmallerThan = ($: T.NumberPair) => g_common.T.Boolean
        }
    }
}