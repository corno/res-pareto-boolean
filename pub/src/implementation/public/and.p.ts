import * as api from "api-pareto-boolean"
import { andImp } from "../private/and.p"


export const f_and: api.FAnd = ($) => {
   return andImp($)
}