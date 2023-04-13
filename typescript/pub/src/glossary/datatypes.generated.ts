import * as pt from 'pareto-core-types'

import * as g_common from "glo-pareto-common"

export namespace N {}

export namespace T {
    
    export namespace BooleanRange {
        
        export type A = boolean
    }
    
    export type BooleanRange = pt.Array<boolean>
    
    export namespace NumberPair {
        
        export type that = number
        
        export type _lthis = number
    }
    
    export type NumberPair = {
        readonly 'that': number
        readonly 'this': number
    }
}