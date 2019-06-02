import * as ts from 'typescript'

import { ServiceDefinition } from '@creditkarma/thrift-parser'

import { DefinitionType, INamespace, IRenderState } from '../../types'

export function renderIndex(state: IRenderState): Array<ts.Statement> {
    const currentNamespace: INamespace = state.currentNamespace
    const results: Array<ts.Statement> = []
    if (currentNamespace.constants.length > 0) {
        results.push(
            ts.createExportDeclaration(
                undefined,
                undefined,
                undefined,
                ts.createLiteral(`./constants`),
            ),
        )
    }

    ;[
        ...currentNamespace.enums,
        ...currentNamespace.typedefs,
        ...currentNamespace.structs,
        ...currentNamespace.unions,
        ...currentNamespace.exceptions,
    ].forEach((next: DefinitionType) => {
        results.push(
            ts.createExportDeclaration(
                undefined,
                undefined,
                undefined,
                ts.createLiteral(`./${next.name.value}`),
            ),
        )
    })

    currentNamespace.services.forEach((next: ServiceDefinition) => {
        results.push(
            ts.createImportDeclaration(
                undefined,
                undefined,
                ts.createImportClause(
                    undefined,
                    ts.createNamespaceImport(
                        ts.createIdentifier(next.name.value),
                    ),
                ),
                ts.createLiteral(`./${next.name.value}`),
            ),
        )

        results.push(
            ts.createExportDeclaration(
                undefined,
                undefined,
                ts.createNamedExports([
                    ts.createExportSpecifier(next.name.value, next.name.value),
                ]),
            ),
        )
    })

    return results
}
