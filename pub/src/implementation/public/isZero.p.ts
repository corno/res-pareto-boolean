import * as api from "../../api"
import { isZeroImp } from "../private/isZeroImp.p"

export const f_isZero: api.FIsZero = ($) => {
    return isZeroImp($)
}