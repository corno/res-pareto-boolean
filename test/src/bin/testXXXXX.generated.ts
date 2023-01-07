import * as pt from "pareto-core-types"
import * as pr from "pareto-core-raw"
import * as pl from "pareto-core-lib"

import { test as main_and } from "../modules/main/and.p"
import { test as main_equal } from "../modules/main/equal.p"
import { test as main_greaterThan } from "../modules/main/greaterThan.p"
import { test as main_isZero } from "../modules/main/isZero.p"
import { test as main_not } from "../modules/main/not.p"
import { test as main_or } from "../modules/main/or.p"
import { test as main_smallerThan } from "../modules/main/smallerThan.p"

const x = pr.wrapRawDictionary({
    "main": pr.wrapRawDictionary({
        "and": main_and,
        "equal": main_equal,
        "greaterThan": main_greaterThan,
        "isZero": main_isZero,
        "not": main_not,
        "or": main_or,
        "smallerThan": main_smallerThan,
    }),
}).asyncMap(($, key) => $.asyncMap(($, key) => $()))