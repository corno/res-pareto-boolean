import * as api from "api-pareto-boolean"
import { greaterThanImp } from "../private/greaterThanImp"

export const greaterThan: api.FGreaterThan = ($) => {
    return greaterThanImp($)
}