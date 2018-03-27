/**
 * UTILS
 *
 * This module contains abstractions around the TypeScript factory functions to make them more
 * concise.
 */
import * as ts from 'typescript'

import {
    FieldDefinition,
    SyntaxType,
} from '@creditkarma/thrift-parser'

import {
    TApplicationException,
    TProtocolException,
} from './types'

import {
    renderValue,
} from '../shared/values'

import {
    createNotNullCheck,
} from './utils'

import {
    THRIFT_IDENTIFIERS,
    PROTOCOL_EXCEPTION,
    APPLICATION_EXCEPTION,
    COMMON_IDENTIFIERS,
} from './identifiers'

export * from '../shared/utils'

function coerceType(objName: string, field: FieldDefinition): ts.Expression {
    switch (field.fieldType.type) {
        case SyntaxType.I64Keyword:
            return ts.createParen(ts.createConditional(
                ts.createBinary(
                    ts.createTypeOf(ts.createIdentifier(`${objName}.${field.name.value}`)),
                    ts.SyntaxKind.EqualsEqualsEqualsToken,
                    ts.createLiteral('number')
                ),
                ts.createNew(
                    COMMON_IDENTIFIERS.Int64,
                    undefined,
                    [ ts.createIdentifier(`${objName}.${field.name.value}`) ]
                ),
                ts.createIdentifier(`${objName}.${field.name.value}`),
            ))

        case SyntaxType.BinaryKeyword:
            return ts.createParen(ts.createConditional(
                ts.createBinary(
                    ts.createTypeOf(ts.createIdentifier(`${objName}.${field.name.value}`)),
                    ts.SyntaxKind.EqualsEqualsEqualsToken,
                    ts.createLiteral('string')
                ),
                ts.createCall(
                    ts.createIdentifier('Buffer.from'),
                    undefined,
                    [ ts.createIdentifier(`${objName}.${field.name.value}`) ]
                ),
                ts.createIdentifier(`${objName}.${field.name.value}`),
            ))

        default:
            return ts.createIdentifier(`${objName}.${field.name.value}`)
    }
}

export function getInitializerForField(objName: string, field: FieldDefinition, loose: boolean = false): ts.Expression {
    if (field.defaultValue !== null && field.defaultValue !== undefined) {
        return ts.createParen(ts.createConditional(
            createNotNullCheck(
                ts.createIdentifier(`${objName}.${field.name.value}`)
            ),
            (
                (loose === true) ?
                    coerceType(objName, field) :
                    ts.createIdentifier(`${objName}.${field.name.value}`)
            ),
            renderValue(field.fieldType, field.defaultValue),
        ))

    } else {
        return (
            (loose === true) ?
                coerceType(objName, field) :
                ts.createIdentifier(`${objName}.${field.name.value}`)
        )
    }
}

export function isNotVoid(field: FieldDefinition): boolean {
    return field.fieldType.type !== SyntaxType.VoidKeyword;
}

export function createProtocolException(
    type: TProtocolException,
    message: string,
): ts.NewExpression {
    const errCtor = THRIFT_IDENTIFIERS.TProtocolException
    const errType = PROTOCOL_EXCEPTION[type]
    const errArgs = [ errType, ts.createLiteral(message) ]
    return ts.createNew(errCtor, undefined, errArgs)
}

export function throwProtocolException(
    type: TProtocolException,
    message: string,
): ts.ThrowStatement {
    return ts.createThrow(createProtocolException(type, message))
}

export function createApplicationException(
    type: TApplicationException,
    message: string | ts.Expression,
): ts.NewExpression {
    const errCtor = THRIFT_IDENTIFIERS.TApplicationException
    const errType = APPLICATION_EXCEPTION[type]
    const errArgs = [
        errType,
        (typeof message === 'string' ? ts.createLiteral(message) : message),
    ]
    return ts.createNew(errCtor, undefined, errArgs)
}

export function throwApplicationException(
    type: TApplicationException,
    message: string,
): ts.ThrowStatement {
    return ts.createThrow(createApplicationException(type, message))
}
