import * as api from "../../api"
import { greaterThanImp } from "../private/greaterThanImp.p"

export const f_greaterThan: api.FGreaterThan = ($) => {
    return greaterThanImp($)
}