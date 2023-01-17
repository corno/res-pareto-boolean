import { API } from "./api"
import { $$ as iand } from "./implementations/and.p"
import { $$ as iequal } from "./implementations/equal.p"
import { $$ as igreaterThan } from "./implementations/greaterThan.p"
import { $$ as iisZero } from "./implementations/isZero.p"
import { $$ as inot } from "./implementations/not.p"
import { $$ as ior } from "./implementations/or.p"
import { $$ as ismallerThan } from "./implementations/smallerThan.p"

export * from "./api"

export const $a: API = {
    'and': iand,
    'equal': iequal,
    'greaterThan': igreaterThan,
    'isZero': iisZero,
    'not': inot,
    'or': ior,
    'smallerThan': ismallerThan,
}