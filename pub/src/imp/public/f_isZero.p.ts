import * as api from "api-pareto-boolean"
import { isZeroImp } from "../private/isZeroImp"

export const f_isZero: api.FIsZero = ($) => {
    return isZeroImp($)
}