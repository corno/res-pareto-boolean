import * as pr from "pareto-core-raw"
import {
    externalReference as er,
    string as str,
    reference as ref,
    boolean as bln,
    number as nr,
} from "lib-pareto-typescript-project/dist/modules/glossary/api/shorthands.p"
import { dictionary, group, member, taggedUnion, types, _function } from "lib-pareto-typescript-project/dist/modules/glossary/api/shorthands.p"


import { string, reference, externalReference, number, boolean } from "lib-pareto-typescript-project/dist/modules/api/api/shorthands.p"
import * as NProject from "lib-pareto-typescript-project/dist/modules/project"
const wd = pr.wrapRawDictionary
export const project: NProject.TProject = {
    'type': ['resource', null],
    'modules': wd({
        "main": {
            'definition': {
                'glossary': {
                    'imports': wd({}),
                    'types': types({
                        "BooleanRange": ['nested', bln()],
                        "NumberPair": group({
                            "this": member(nr()),
                            "that": member(nr()),
                        }),
                    }),
                    'functions': wd({
                        "And": {
                            "data": reference("BooleanRange"),
                            "return value": boolean()
                        },
                        "Or": {
                            "data": reference("BooleanRange"),
                            "return value": boolean()
                        },
                        "GreaterThan": {
                            "data": reference("NumberPair"),
                            "return value": boolean()
                        },
                        "SmallerThan": {
                            "data": reference("NumberPair"),
                            "return value": boolean()
                        },
                        "Not": {
                            "data": boolean(),
                            "return value": boolean()
                        },
                        "IsZero": {
                            "data": number(),
                            "return value": boolean()
                        },
                        "Equal": {
                            "data": reference("NumberPair"),
                            "return value": boolean()
                        },
                    }),
                    'interfaces': wd({}),
                    'callbacks': wd({}),
                    'pipes': wd({}),
                },
                'api': {
                    'imports': wd({}),
                    'algorithms': wd({
                        "and": {
                            'definition': ['function', {
                                'function': "And"
                            }],
                            'type': ['reference', null],
                        },
                        "smallerThan": {
                            'definition': ['function', {
                                'function': "SmallerThan"
                            }],
                            'type': ['reference', null],
                        },
                        "greaterThan": {
                            'definition': ['function', {
                                'function': "GreaterThan"
                            }],
                            'type': ['reference', null],
                        },
                        "equal": {
                            'definition': ['function', {
                                'function': "Equal"
                            }],
                            'type': ['reference', null],
                        },
                        "or": {
                            'definition': ['function', {
                                'function': "Or"
                            }],
                            'type': ['reference', null],
                        },
                        "not": {
                            'definition': ['function', {
                                'function': "Not"
                            }],
                            'type': ['reference', null],
                        },
                        "isZero":{
                            'definition': ['function', {
                                'function': "IsZero"
                            }],
                            'type': ['reference', null],
                        },
                    })
                },
            },
            'implementation': {}

        },
    }),
    'main': "main"
}