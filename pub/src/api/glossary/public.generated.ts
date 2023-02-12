import * as pt from 'pareto-core-types'

import { T   } from './types.generated'

import * as mcommon from "glo-pareto-common"

export type FAnd = ($: T.BooleanRange,) => mcommon.T.Boolean

export type FEqual = ($: T.NumberPair,) => mcommon.T.Boolean

export type FGreaterThan = ($: T.NumberPair,) => mcommon.T.Boolean

export type FIsZero = ($: mcommon.T.Number,) => mcommon.T.Boolean

export type FNot = ($: mcommon.T.Boolean,) => mcommon.T.Boolean

export type FOr = ($: T.BooleanRange,) => mcommon.T.Boolean

export type FSmallerThan = ($: T.NumberPair,) => mcommon.T.Boolean