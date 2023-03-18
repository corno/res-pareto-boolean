import * as pi from 'pareto-core-internals'

import { A } from "../api.generated"

export const $$: A.and = ($) => {
   let current = true
   pi.flatten($).forEach(($) => {
       current = current && $
   })
   return current
}