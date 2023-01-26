import * as pt from 'pareto-core-types'

import * as mcommon from "glo-pareto-common"

export namespace GBooleanRange {}
export type GBooleanRange = pt.Nested<boolean>
export type UBooleanRange = GBooleanRange

export namespace GNumberPair {}
export type GNumberPair = {
    readonly 'that': number
    readonly 'this': number
}
export type UNumberPair = GNumberPair