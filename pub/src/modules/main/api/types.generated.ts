import * as pt from "pareto-core-types"

export type TBooleanRange = pt.Nested<boolean>

export type TNumberPair = {
    readonly "that": number
    readonly "this": number
}

export type FAnd = ($: TBooleanRange) => boolean

export type FEqual = ($: TNumberPair) => boolean

export type FGreaterThan = ($: TNumberPair) => boolean

export type FIsZero = ($: number) => boolean

export type FNot = ($: boolean) => boolean

export type FOr = ($: TBooleanRange) => boolean

export type FSmallerThan = ($: TNumberPair) => boolean