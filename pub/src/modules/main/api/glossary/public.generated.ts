import * as pt from 'pareto-core-types'

import * as t from './types.generated'

import * as mcommon from "glo-pareto-common"

export type TBooleanRange = t.UBooleanRange

export type TNumberPair = t.UNumberPair

export type FAnd = ($: TBooleanRange,) => mcommon.TBoolean

export type FEqual = ($: TNumberPair,) => mcommon.TBoolean

export type FGreaterThan = ($: TNumberPair,) => mcommon.TBoolean

export type FIsZero = ($: mcommon.TNumber,) => mcommon.TBoolean

export type FNot = ($: mcommon.TBoolean,) => mcommon.TBoolean

export type FOr = ($: TBooleanRange,) => mcommon.TBoolean

export type FSmallerThan = ($: TNumberPair,) => mcommon.TBoolean