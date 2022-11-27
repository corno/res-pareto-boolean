import { TBooleanRange } from "../types/BooleanRange.p"

export type FAnd = ($: TBooleanRange) => boolean

export type FOr = ($: TBooleanRange) => boolean

export type FNot = ($: boolean) => boolean

export type FGreaterThan = ($: {
    readonly this: number,
    readonly that: number
}) => boolean

export type FSmallerThan = ($: {
    readonly this: number,
    readonly that: number
}) => boolean

export type FEqual = ($: {
    readonly this: number,
    readonly that: number
}) => boolean

export type FIsZero = ($: number) => boolean