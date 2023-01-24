import * as api from "../api"

export const $$: api.Cequal = ($) => {
    return $.this === $.that
}
