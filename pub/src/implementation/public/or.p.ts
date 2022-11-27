import * as api from "../../interface"

import { orImp } from "../private/orImp.p"

export const f_or: api.FOr = ($) => {
    return orImp($)
}
