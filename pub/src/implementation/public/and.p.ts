import * as api from "../../interface"
import { andImp } from "../private/and.p"


export const f_and: api.FAnd = ($) => {
   return andImp($)
}