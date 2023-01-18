import * as pt from 'pareto-core-types'
import * as pr from 'pareto-core-raw'
import * as pl from 'pareto-core-lib'
import * as tst from "lib-pareto-test"

import { test as main_and } from "../modules/main/and.generated"
import { test as main_equal } from "../modules/main/equal.generated"
import { test as main_greaterThan } from "../modules/main/greaterThan.generated"
import { test as main_isZero } from "../modules/main/isZero.generated"
import { test as main_not } from "../modules/main/not.generated"
import { test as main_or } from "../modules/main/or.generated"
import { test as main_smallerThan } from "../modules/main/smallerThan.generated"

const x = pr.wrapRawDictionary<pt.Dictionary<() => pt.AsyncValue<tst.TTestElement>>>({
    'main': pr.wrapRawDictionary({
        'and': main_and,
        'equal': main_equal,
        'greaterThan': main_greaterThan,
        'isZero': main_isZero,
        'not': main_not,
        'or': main_or,
        'smallerThan': main_smallerThan,
    }),
}).asyncMap(($, key) => $.asyncMap(($, key) => $()))