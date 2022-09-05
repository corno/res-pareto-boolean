import * as api from "api-pareto-boolean"
import { smallerThanImp } from "../private/smallerThanImp"

export const smallerThan: api.FSmallerThan = ($) => {
    return smallerThanImp($)
}
