import * as pt from 'pareto-core-types'

import * as gglo from "./glossary"


export type Cand = gglo.FAnd

export type Cequal = gglo.FEqual

export type CgreaterThan = gglo.FGreaterThan

export type CisZero = gglo.FIsZero

export type Cnot = gglo.FNot

export type Cor = gglo.FOr

export type CsmallerThan = gglo.FSmallerThan

export type API = {
    and: Cand
    equal: Cequal
    greaterThan: CgreaterThan
    isZero: CisZero
    not: Cnot
    or: Cor
    smallerThan: CsmallerThan
}