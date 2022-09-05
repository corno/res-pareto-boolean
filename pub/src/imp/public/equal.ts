import * as api from "api-pareto-boolean"
import { equalImp } from "../private/equalImp"

export const equal: api.FEqual = ($) => {
    return equalImp($)
}
