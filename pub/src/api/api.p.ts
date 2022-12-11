import { FAnd, FEqual, FGreaterThan, FIsZero, FNot, FOr, FSmallerThan } from "./glossary"


export type API = {
    and: FAnd
    or: FOr,
    not: FNot,
    greaterThan: FGreaterThan,
    smallerThan: FSmallerThan,
    equal: FEqual,
    isZero: FIsZero,
}