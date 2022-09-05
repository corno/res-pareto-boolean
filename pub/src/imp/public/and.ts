import * as api from "api-pareto-boolean"
import { andImp } from "../private/and"


export const and: api.FAnd = ($) => {
   return andImp($)
}