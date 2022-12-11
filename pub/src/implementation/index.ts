import { API } from "../api"
import { f_and } from "./public/and.p"
import { f_equal } from "./public/equal.p"
import { f_greaterThan } from "./public/greaterThan.p"
import { f_isZero } from "./public/isZero.p"
import { f_not } from "./public/not.p"
import { f_or } from "./public/or.p"
import { f_smallerThan } from "./public/smallerThan.p"

export const $a: API = {
    and: f_and,
    or: f_or,
    not: f_not,
    greaterThan: f_greaterThan,

    smallerThan: f_smallerThan,
    equal: f_equal,
    isZero: f_isZero,
}