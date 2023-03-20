import { A } from "../api.generated"

export const $$: A.greaterThan = () => {
    return ($) => {
        return $.this > $.that
    }
}