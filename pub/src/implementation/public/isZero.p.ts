import * as api from "../../interface"
import { isZeroImp } from "../private/isZeroImp.p"

export const f_isZero: api.FIsZero = ($) => {
    return isZeroImp($)
}