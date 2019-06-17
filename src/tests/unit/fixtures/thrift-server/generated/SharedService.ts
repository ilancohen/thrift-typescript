/* tslint:disable */
/*
 * Autogenerated by @creditkarma/thrift-typescript v{{VERSION}}
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
*/
import * as thrift from "test-lib";
import * as SharedServiceBase from "./SharedServiceBase";
import * as SharedUnion from "./SharedUnion";
import * as SharedEnum from "./SharedEnum";
export const metadata: thrift.IServiceMetadata = {
    name: "SharedService",
    annotations: {},
    methods: {
        getStruct: {
            name: "getStruct",
            annotations: {},
            arguments: [
                {
                    name: "key",
                    fieldId: 1,
                    annotations: {},
                    definitionType: {
                        type: thrift.DefinitionMetadataType.BaseType
                    }
                }
            ]
        },
        getUnion: {
            name: "getUnion",
            annotations: {},
            arguments: [
                {
                    name: "index",
                    fieldId: 1,
                    annotations: {},
                    definitionType: {
                        type: thrift.DefinitionMetadataType.BaseType
                    }
                }
            ]
        },
        getEnum: {
            name: "getEnum",
            annotations: {},
            arguments: []
        }
    }
};
export interface IGetUnion__Args {
    __name: "GetUnion__Args";
    index: number;
}
export interface IGetUnion__ArgsArgs {
    index: number;
}
export const GetUnion__ArgsCodec: thrift.IStructCodec<IGetUnion__ArgsArgs, IGetUnion__Args> = {
    encode(args: IGetUnion__ArgsArgs, output: thrift.TProtocol): void {
        const obj = {
            index: args.index
        };
        output.writeStructBegin("GetUnion__Args");
        if (obj.index != null) {
            output.writeFieldBegin("index", thrift.TType.I32, 1);
            output.writeI32(obj.index);
            output.writeFieldEnd();
        }
        else {
            throw new thrift.TProtocolException(thrift.TProtocolExceptionType.UNKNOWN, "Required field[index] is unset!");
        }
        output.writeFieldStop();
        output.writeStructEnd();
        return;
    },
    decode(input: thrift.TProtocol): IGetUnion__Args {
        let _args: any = {};
        input.readStructBegin();
        while (true) {
            const ret: thrift.IThriftField = input.readFieldBegin();
            const fieldType: thrift.TType = ret.fieldType;
            const fieldId: number = ret.fieldId;
            if (fieldType === thrift.TType.STOP) {
                break;
            }
            switch (fieldId) {
                case 1:
                    if (fieldType === thrift.TType.I32) {
                        const value_1: number = input.readI32();
                        _args.index = value_1;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                default: {
                    input.skip(fieldType);
                }
            }
            input.readFieldEnd();
        }
        input.readStructEnd();
        if (_args.index !== undefined) {
            return {
                __name: "GetUnion__Args",
                index: _args.index
            };
        }
        else {
            throw new thrift.TProtocolException(thrift.TProtocolExceptionType.UNKNOWN, "Unable to read GetUnion__Args from input");
        }
    }
};
export class GetUnion__Args implements thrift.IStructLike, IGetUnion__Args {
    public index: number;
    public readonly __name = "GetUnion__Args";
    constructor(args: IGetUnion__ArgsArgs) {
        if (args.index != null) {
            const value_2: number = args.index;
            this.index = value_2;
        }
        else {
            throw new thrift.TProtocolException(thrift.TProtocolExceptionType.UNKNOWN, "Required field[index] is unset!");
        }
    }
    public static read(input: thrift.TProtocol): GetUnion__Args {
        return new GetUnion__Args(GetUnion__ArgsCodec.decode(input));
    }
    public static write(args: IGetUnion__ArgsArgs, output: thrift.TProtocol): void {
        return GetUnion__ArgsCodec.encode(args, output);
    }
    public write(output: thrift.TProtocol): void {
        return GetUnion__ArgsCodec.encode(this, output);
    }
}
export interface IGetEnum__Args {
    __name: "GetEnum__Args";
}
export interface IGetEnum__ArgsArgs {
}
export const GetEnum__ArgsCodec: thrift.IStructCodec<IGetEnum__ArgsArgs, IGetEnum__Args> = {
    encode(args: IGetEnum__ArgsArgs, output: thrift.TProtocol): void {
        output.writeStructBegin("GetEnum__Args");
        output.writeFieldStop();
        output.writeStructEnd();
        return;
    },
    decode(input: thrift.TProtocol): IGetEnum__Args {
        input.readStructBegin();
        while (true) {
            const ret: thrift.IThriftField = input.readFieldBegin();
            const fieldType: thrift.TType = ret.fieldType;
            const fieldId: number = ret.fieldId;
            if (fieldType === thrift.TType.STOP) {
                break;
            }
            switch (fieldId) {
                default: {
                    input.skip(fieldType);
                }
            }
            input.readFieldEnd();
        }
        input.readStructEnd();
        return {
            __name: "GetEnum__Args"
        };
    }
};
export class GetEnum__Args implements thrift.IStructLike, IGetEnum__Args {
    public readonly __name = "GetEnum__Args";
    constructor(args: IGetEnum__ArgsArgs = {}) {
    }
    public static read(input: thrift.TProtocol): GetEnum__Args {
        return new GetEnum__Args(GetEnum__ArgsCodec.decode(input));
    }
    public static write(args: IGetEnum__ArgsArgs, output: thrift.TProtocol): void {
        return GetEnum__ArgsCodec.encode(args, output);
    }
    public write(output: thrift.TProtocol): void {
        return GetEnum__ArgsCodec.encode(this, output);
    }
}
export interface IGetUnion__Result {
    __name: "GetUnion__Result";
    success?: SharedUnion.ISharedUnion;
}
export interface IGetUnion__ResultArgs {
    success?: SharedUnion.ISharedUnionArgs;
}
export const GetUnion__ResultCodec: thrift.IStructCodec<IGetUnion__ResultArgs, IGetUnion__Result> = {
    encode(args: IGetUnion__ResultArgs, output: thrift.TProtocol): void {
        const obj = {
            success: args.success
        };
        output.writeStructBegin("GetUnion__Result");
        if (obj.success != null) {
            output.writeFieldBegin("success", thrift.TType.STRUCT, 0);
            SharedUnion.SharedUnionCodec.encode(obj.success, output);
            output.writeFieldEnd();
        }
        output.writeFieldStop();
        output.writeStructEnd();
        return;
    },
    decode(input: thrift.TProtocol): IGetUnion__Result {
        let _args: any = {};
        input.readStructBegin();
        while (true) {
            const ret: thrift.IThriftField = input.readFieldBegin();
            const fieldType: thrift.TType = ret.fieldType;
            const fieldId: number = ret.fieldId;
            if (fieldType === thrift.TType.STOP) {
                break;
            }
            switch (fieldId) {
                case 0:
                    if (fieldType === thrift.TType.STRUCT) {
                        const value_3: SharedUnion.ISharedUnion = SharedUnion.SharedUnionCodec.decode(input);
                        _args.success = value_3;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                default: {
                    input.skip(fieldType);
                }
            }
            input.readFieldEnd();
        }
        input.readStructEnd();
        return {
            __name: "GetUnion__Result",
            success: _args.success
        };
    }
};
export class GetUnion__Result implements thrift.IStructLike, IGetUnion__Result {
    public success?: SharedUnion.ISharedUnion;
    public readonly __name = "GetUnion__Result";
    constructor(args: IGetUnion__ResultArgs = {}) {
        if (args.success != null) {
            const value_4: SharedUnion.ISharedUnion = new SharedUnion.SharedUnion(args.success);
            this.success = value_4;
        }
    }
    public static read(input: thrift.TProtocol): GetUnion__Result {
        return new GetUnion__Result(GetUnion__ResultCodec.decode(input));
    }
    public static write(args: IGetUnion__ResultArgs, output: thrift.TProtocol): void {
        return GetUnion__ResultCodec.encode(args, output);
    }
    public write(output: thrift.TProtocol): void {
        return GetUnion__ResultCodec.encode(this, output);
    }
}
export interface IGetEnum__Result {
    __name: "GetEnum__Result";
    success?: SharedEnum.SharedEnum;
}
export interface IGetEnum__ResultArgs {
    success?: SharedEnum.SharedEnum;
}
export const GetEnum__ResultCodec: thrift.IStructCodec<IGetEnum__ResultArgs, IGetEnum__Result> = {
    encode(args: IGetEnum__ResultArgs, output: thrift.TProtocol): void {
        const obj = {
            success: args.success
        };
        output.writeStructBegin("GetEnum__Result");
        if (obj.success != null) {
            output.writeFieldBegin("success", thrift.TType.I32, 0);
            output.writeI32(obj.success);
            output.writeFieldEnd();
        }
        output.writeFieldStop();
        output.writeStructEnd();
        return;
    },
    decode(input: thrift.TProtocol): IGetEnum__Result {
        let _args: any = {};
        input.readStructBegin();
        while (true) {
            const ret: thrift.IThriftField = input.readFieldBegin();
            const fieldType: thrift.TType = ret.fieldType;
            const fieldId: number = ret.fieldId;
            if (fieldType === thrift.TType.STOP) {
                break;
            }
            switch (fieldId) {
                case 0:
                    if (fieldType === thrift.TType.I32) {
                        const value_5: SharedEnum.SharedEnum = input.readI32();
                        _args.success = value_5;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                default: {
                    input.skip(fieldType);
                }
            }
            input.readFieldEnd();
        }
        input.readStructEnd();
        return {
            __name: "GetEnum__Result",
            success: _args.success
        };
    }
};
export class GetEnum__Result implements thrift.IStructLike, IGetEnum__Result {
    public success?: SharedEnum.SharedEnum;
    public readonly __name = "GetEnum__Result";
    constructor(args: IGetEnum__ResultArgs = {}) {
        if (args.success != null) {
            const value_6: SharedEnum.SharedEnum = args.success;
            this.success = value_6;
        }
    }
    public static read(input: thrift.TProtocol): GetEnum__Result {
        return new GetEnum__Result(GetEnum__ResultCodec.decode(input));
    }
    public static write(args: IGetEnum__ResultArgs, output: thrift.TProtocol): void {
        return GetEnum__ResultCodec.encode(args, output);
    }
    public write(output: thrift.TProtocol): void {
        return GetEnum__ResultCodec.encode(this, output);
    }
}
export class Client<Context extends thrift.IRequestContext = thrift.IRequestContext> extends SharedServiceBase.Client<Context> {
    public static readonly metadata: thrift.IServiceMetadata = metadata;
    public readonly __metadata: thrift.IServiceMetadata = metadata;
    constructor(connection: thrift.IThriftConnection<Context>) {
        super(connection);
    }
    protected incrementRequestId(): number {
        return this._requestId += 1;
    }
    public getUnion(index: number, context?: Context): Promise<SharedUnion.ISharedUnion> {
        const writer: thrift.TTransport = new this.transport();
        const output: thrift.TProtocol = new this.protocol(writer);
        output.writeMessageBegin("getUnion", thrift.MessageType.CALL, this.incrementRequestId());
        const args: IGetUnion__ArgsArgs = { index };
        GetUnion__ArgsCodec.encode(args, output);
        output.writeMessageEnd();
        return this.connection.send(writer.flush(), context).then((data: Buffer) => {
            const reader: thrift.TTransport = this.transport.receiver(data);
            const input: thrift.TProtocol = new this.protocol(reader);
            try {
                const { fieldName: fieldName, messageType: messageType }: thrift.IThriftMessage = input.readMessageBegin();
                if (fieldName === "getUnion") {
                    if (messageType === thrift.MessageType.EXCEPTION) {
                        const err: thrift.TApplicationException = thrift.TApplicationExceptionCodec.decode(input);
                        input.readMessageEnd();
                        return Promise.reject(err);
                    }
                    else {
                        const result: IGetUnion__Result = GetUnion__ResultCodec.decode(input);
                        input.readMessageEnd();
                        if (result.success != null) {
                            return Promise.resolve(result.success);
                        }
                        else {
                            return Promise.reject(new thrift.TApplicationException(thrift.TApplicationExceptionType.UNKNOWN, "getUnion failed: unknown result"));
                        }
                    }
                }
                else {
                    return Promise.reject(new thrift.TApplicationException(thrift.TApplicationExceptionType.WRONG_METHOD_NAME, "Received a response to an unknown RPC function: " + fieldName));
                }
            }
            catch (err) {
                return Promise.reject(err);
            }
        });
    }
    public getEnum(context?: Context): Promise<SharedEnum.SharedEnum> {
        const writer: thrift.TTransport = new this.transport();
        const output: thrift.TProtocol = new this.protocol(writer);
        output.writeMessageBegin("getEnum", thrift.MessageType.CALL, this.incrementRequestId());
        const args: IGetEnum__ArgsArgs = {};
        GetEnum__ArgsCodec.encode(args, output);
        output.writeMessageEnd();
        return this.connection.send(writer.flush(), context).then((data: Buffer) => {
            const reader: thrift.TTransport = this.transport.receiver(data);
            const input: thrift.TProtocol = new this.protocol(reader);
            try {
                const { fieldName: fieldName, messageType: messageType }: thrift.IThriftMessage = input.readMessageBegin();
                if (fieldName === "getEnum") {
                    if (messageType === thrift.MessageType.EXCEPTION) {
                        const err: thrift.TApplicationException = thrift.TApplicationExceptionCodec.decode(input);
                        input.readMessageEnd();
                        return Promise.reject(err);
                    }
                    else {
                        const result: IGetEnum__Result = GetEnum__ResultCodec.decode(input);
                        input.readMessageEnd();
                        if (result.success != null) {
                            return Promise.resolve(result.success);
                        }
                        else {
                            return Promise.reject(new thrift.TApplicationException(thrift.TApplicationExceptionType.UNKNOWN, "getEnum failed: unknown result"));
                        }
                    }
                }
                else {
                    return Promise.reject(new thrift.TApplicationException(thrift.TApplicationExceptionType.WRONG_METHOD_NAME, "Received a response to an unknown RPC function: " + fieldName));
                }
            }
            catch (err) {
                return Promise.reject(err);
            }
        });
    }
}
export interface ILocalHandler<Context extends object = {}> {
    getUnion(index: number, context: thrift.ThriftContext<Context>): SharedUnion.ISharedUnionArgs | Promise<SharedUnion.ISharedUnionArgs>;
    getEnum(context: thrift.ThriftContext<Context>): SharedEnum.SharedEnum | Promise<SharedEnum.SharedEnum>;
}
export type IHandler<Context extends object = {}> = ILocalHandler<Context> & SharedServiceBase.IHandler<Context>;
export type ReadRequestData = {
    methodName: "getUnion";
    requestId: number;
    data: IGetUnion__Args;
} | {
    methodName: "getEnum";
    requestId: number;
    data: IGetEnum__Args;
} | SharedServiceBase.ReadRequestData;
export class Processor<Context extends object = {}> implements thrift.IThriftProcessor<Context> {
    protected readonly parent: SharedServiceBase.Processor<Context>;
    protected readonly handler: IHandler<Context>;
    protected readonly transport: thrift.ITransportConstructor;
    protected readonly protocol: thrift.IProtocolConstructor;
    public static readonly metadata: thrift.IServiceMetadata = metadata;
    public readonly __metadata: thrift.IServiceMetadata = metadata;
    constructor(handler: IHandler<Context>, transport: thrift.ITransportConstructor = thrift.BufferedTransport, protocol: thrift.IProtocolConstructor = thrift.BinaryProtocol) {
        this.parent = new SharedServiceBase.Processor<Context>({
            getStruct: handler.getStruct
        }, transport, protocol);
        this.handler = handler;
        this.transport = transport;
        this.protocol = protocol;
    }
    public process(data: Buffer, context: thrift.ThriftContext<Context>): Promise<Buffer> {
        return new Promise<Buffer>((resolve, reject): void => {
            const metadata = this.readRequest(data);
            switch (metadata.methodName) {
                case "getUnion": {
                    resolve(this.process_getUnion(metadata.data, metadata.requestId, context));
                    break;
                }
                case "getEnum": {
                    resolve(this.process_getEnum(metadata.data, metadata.requestId, context));
                    break;
                }
                default: {
                    resolve(this.parent.process(data, context));
                    break;
                }
            }
        });
    }
    public readRequest(data: Buffer): ReadRequestData {
        const transportWithData: thrift.TTransport = this.transport.receiver(data);
        const input: thrift.TProtocol = new this.protocol(transportWithData);
        const metadata: thrift.IThriftMessage = input.readMessageBegin();
        const fieldName: string = metadata.fieldName;
        const requestId: number = metadata.requestId;
        switch (fieldName) {
            case "getUnion": {
                const data: IGetUnion__Args = GetUnion__ArgsCodec.decode(input);
                input.readMessageEnd();
                return {
                    methodName: fieldName,
                    requestId: requestId,
                    data: data
                };
            }
            case "getEnum": {
                const data: IGetEnum__Args = GetEnum__ArgsCodec.decode(input);
                input.readMessageEnd();
                return {
                    methodName: fieldName,
                    requestId: requestId,
                    data: data
                };
            }
            default: {
                return this.parent.readRequest(data);
            }
        }
    }
    public writeResponse(methodName: string, data: any, requestId: number): Buffer {
        const output: thrift.TProtocol = new this.protocol(new this.transport());
        switch (methodName) {
            case "getUnion": {
                const result: IGetUnion__ResultArgs = { success: data };
                output.writeMessageBegin("getUnion", thrift.MessageType.REPLY, requestId);
                GetUnion__ResultCodec.encode(result, output);
                output.writeMessageEnd();
                return output.flush();
            }
            case "getEnum": {
                const result: IGetEnum__ResultArgs = { success: data };
                output.writeMessageBegin("getEnum", thrift.MessageType.REPLY, requestId);
                GetEnum__ResultCodec.encode(result, output);
                output.writeMessageEnd();
                return output.flush();
            }
            default: {
                return this.parent.writeResponse(methodName, data, requestId);
            }
        }
    }
    public writeError(methodName: string, requestId: number, err: Error): Buffer {
        const output: thrift.TProtocol = new this.protocol(new this.transport());
        const result: thrift.TApplicationException = new thrift.TApplicationException(thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin(methodName, thrift.MessageType.EXCEPTION, requestId);
        thrift.TApplicationExceptionCodec.encode(result, output);
        output.writeMessageEnd();
        return output.flush();
    }
    protected process_getUnion(args: IGetUnion__Args, requestId: number, context: thrift.ThriftContext<Context>): Promise<Buffer> {
        return new Promise<SharedUnion.ISharedUnionArgs>((resolve, reject): void => {
            try {
                resolve(this.handler.getUnion(args.index, context));
            }
            catch (err) {
                reject(err);
            }
        }).then((data: SharedUnion.ISharedUnionArgs): Buffer => {
            return this.writeResponse("getUnion", data, requestId);
        }).catch((err: Error): Buffer => {
            return this.writeError("getUnion", requestId, err);
        });
    }
    protected process_getEnum(args: IGetEnum__Args, requestId: number, context: thrift.ThriftContext<Context>): Promise<Buffer> {
        return new Promise<SharedEnum.SharedEnum>((resolve, reject): void => {
            try {
                resolve(this.handler.getEnum(context));
            }
            catch (err) {
                reject(err);
            }
        }).then((data: SharedEnum.SharedEnum): Buffer => {
            return this.writeResponse("getEnum", data, requestId);
        }).catch((err: Error): Buffer => {
            return this.writeError("getEnum", requestId, err);
        });
    }
}
