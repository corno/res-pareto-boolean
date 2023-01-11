import * as pt from "pareto-core-types"

import * as glo from "./types.generated"


export type Cand = glo.FAnd

export type Cequal = glo.FEqual

export type CgreaterThan = glo.FGreaterThan

export type CisZero = glo.FIsZero

export type Cnot = glo.FNot

export type Cor = glo.FOr

export type CsmallerThan = glo.FSmallerThan

export type API = {
    and: Cand
    equal: Cequal
    greaterThan: CgreaterThan
    isZero: CisZero
    not: Cnot
    or: Cor
    smallerThan: CsmallerThan
}