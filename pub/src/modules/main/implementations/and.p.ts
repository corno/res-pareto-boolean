import * as pi from "pareto-core-internals"

import * as api from "../api"

export const iand: api.Cand = ($) => {
   let current = true
   pi.flatten($).forEach(($) => {
       current = current && $
   })
   return current
}