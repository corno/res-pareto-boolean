import * as pt from "pareto-core-types"

import { TBooleanRange } from "../types/types.p"

export type FAnd = pt.Function<TBooleanRange, boolean>

export type FOr = pt.Function<TBooleanRange, boolean>

export type FNot = pt.Function<boolean, boolean>

export type FGreaterThan = pt.Function<
    {
        readonly this: number,
        readonly that: number
    },
    boolean
>

export type FSmallerThan = pt.Function<
    {
        readonly this: number,
        readonly that: number
    },
    boolean
>

export type FEqual = pt.Function<
    {
        readonly this: number,
        readonly that: number
    },
    boolean
>


export type FIsZero = pt.Function<
    number,
    boolean
>