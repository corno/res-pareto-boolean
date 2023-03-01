import * as pi from 'pareto-core-internals'

import { Cand } from "../api"

export const $$:Cand = ($) => {
   let current = true
   pi.flatten($).forEach(($) => {
       current = current && $
   })
   return current
}