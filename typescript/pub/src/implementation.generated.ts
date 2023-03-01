import { API } from "./api"
import { $$ as iand } from "./implementations/and.native"
import { $$ as iequal } from "./implementations/equal.native"
import { $$ as igreaterThan } from "./implementations/greaterThan.native"
import { $$ as iisZero } from "./implementations/isZero.native"
import { $$ as inot } from "./implementations/not.native"
import { $$ as ior } from "./implementations/or.native"
import { $$ as ismallerThan } from "./implementations/smallerThan.native"

export const $a: API = {
    'and': iand,
    'equal': iequal,
    'greaterThan': igreaterThan,
    'isZero': iisZero,
    'not': inot,
    'or': ior,
    'smallerThan': ismallerThan,
}