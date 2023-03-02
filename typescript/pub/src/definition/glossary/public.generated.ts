import * as pt from 'pareto-core-types'

import { T   } from './types.generated'

import * as gcommon from "glo-pareto-common"

export type FAnd = ($: T.BooleanRange,) => gcommon.T.Boolean

export type FEqual = ($: T.NumberPair,) => gcommon.T.Boolean

export type FGreaterThan = ($: T.NumberPair,) => gcommon.T.Boolean

export type FIsZero = ($: gcommon.T.Number,) => gcommon.T.Boolean

export type FNot = ($: gcommon.T.Boolean,) => gcommon.T.Boolean

export type FOr = ($: T.BooleanRange,) => gcommon.T.Boolean

export type FSmallerThan = ($: T.NumberPair,) => gcommon.T.Boolean