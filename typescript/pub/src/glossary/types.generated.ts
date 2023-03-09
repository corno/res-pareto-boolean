import * as pt from 'pareto-core-types'

import * as g_common from "glo-pareto-common"

export namespace T {
    
    export namespace BooleanRange {
        
        export type N = boolean
    }
    
    export type BooleanRange = pt.Nested<boolean>
    
    export namespace NumberPair {
        
        export type that = number
        
        export type _lthis = number
    }
    
    export type NumberPair = {
        readonly 'that': number
        readonly 'this': number
    }
}