import * as pi from 'pareto-core-internals'

import { and } from "../api.generated"

export const $$: and = ($) => {
   let current = true
   pi.flatten($).forEach(($) => {
       current = current && $
   })
   return current
}