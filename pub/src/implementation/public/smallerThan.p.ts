import * as api from "../../api"
import { smallerThanImp } from "../private/smallerThanImp.p"

export const f_smallerThan: api.FSmallerThan = ($) => {
    return smallerThanImp($)
}
