import * as api from "api-pareto-boolean"
import { smallerThanImp } from "../private/smallerThanImp.p"

export const f_smallerThan: api.FSmallerThan = ($) => {
    return smallerThanImp($)
}