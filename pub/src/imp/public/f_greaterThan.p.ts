import * as api from "api-pareto-boolean"
import { greaterThanImp } from "../private/greaterThanImp"

export const f_greaterThan: api.FGreaterThan = ($) => {
    return greaterThanImp($)
}