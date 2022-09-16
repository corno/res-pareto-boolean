import * as api from "api-pareto-boolean"

import { orImp } from "../private/orImp.p"

export const f_or: api.FOr = ($) => {
    return orImp($)
}
