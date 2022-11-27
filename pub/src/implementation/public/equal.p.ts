import * as api from "../../interface"
import { equalImp } from "../private/equalImp.p"

export const f_equal: api.FEqual = ($) => {
    return equalImp($)
}
