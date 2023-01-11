import { API } from "./api"
import { iand } from "./implementations/and.p"
import { iequal } from "./implementations/equal.p"
import { igreaterThan } from "./implementations/greaterThan.p"
import { iisZero } from "./implementations/isZero.p"
import { inot } from "./implementations/not.p"
import { ior } from "./implementations/or.p"
import { ismallerThan } from "./implementations/smallerThan.p"

export * from "./api"

export const $a: API = {
    "and": iand,
    "equal": iequal,
    "greaterThan": igreaterThan,
    "isZero": iisZero,
    "not": inot,
    "or": ior,
    "smallerThan": ismallerThan,
}