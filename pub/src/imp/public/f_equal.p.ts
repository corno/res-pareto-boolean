import * as api from "api-pareto-boolean"
import { equalImp } from "../private/equalImp"

export const f_equal: api.FEqual = ($) => {
    return equalImp($)
}
