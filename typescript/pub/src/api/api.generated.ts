import * as pt from 'pareto-core-types'

import * as gthis from "./glossary"

export type Cand = gthis.FAnd

export type Cequal = gthis.FEqual

export type CgreaterThan = gthis.FGreaterThan

export type CisZero = gthis.FIsZero

export type Cnot = gthis.FNot

export type Cor = gthis.FOr

export type CsmallerThan = gthis.FSmallerThan

export type API = {
    and: Cand
    equal: Cequal
    greaterThan: CgreaterThan
    isZero: CisZero
    not: Cnot
    or: Cor
    smallerThan: CsmallerThan
}