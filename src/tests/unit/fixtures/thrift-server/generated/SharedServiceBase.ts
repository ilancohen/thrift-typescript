/* tslint:disable */
/*
 * Autogenerated by @creditkarma/thrift-typescript v{{VERSION}}
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
*/
import * as thrift from "test-lib";
import * as SharedStruct from "./SharedStruct";
export const metadata: thrift.IServiceMetadata = {
    name: "SharedServiceBase",
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
        }
    }
};
export interface IGetStruct__Args {
    __name: "GetStruct__Args";
    key: number;
}
export interface IGetStruct__ArgsArgs {
    key: number;
}
export const GetStruct__ArgsCodec: thrift.IStructCodec<IGetStruct__ArgsArgs, IGetStruct__Args> = {
    encode(args: IGetStruct__ArgsArgs, output: thrift.TProtocol): void {
        const obj = {
            key: args.key
        };
        output.writeStructBegin("GetStruct__Args");
        if (obj.key != null) {
            output.writeFieldBegin("key", thrift.TType.I32, 1);
            output.writeI32(obj.key);
            output.writeFieldEnd();
        }
        else {
            throw new thrift.TProtocolException(thrift.TProtocolExceptionType.UNKNOWN, "Required field[key] is unset!");
        }
        output.writeFieldStop();
        output.writeStructEnd();
        return;
    },
    decode(input: thrift.TProtocol): IGetStruct__Args {
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
                        _args.key = value_1;
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
        if (_args.key !== undefined) {
            return {
                __name: "GetStruct__Args",
                key: _args.key
            };
        }
        else {
            throw new thrift.TProtocolException(thrift.TProtocolExceptionType.UNKNOWN, "Unable to read GetStruct__Args from input");
        }
    }
};
export class GetStruct__Args implements thrift.IStructLike, IGetStruct__Args {
    public key: number;
    public readonly __name = "GetStruct__Args";
    constructor(args: IGetStruct__ArgsArgs) {
        if (args.key != null) {
            const value_2: number = args.key;
            this.key = value_2;
        }
        else {
            throw new thrift.TProtocolException(thrift.TProtocolExceptionType.UNKNOWN, "Required field[key] is unset!");
        }
    }
    public static read(input: thrift.TProtocol): GetStruct__Args {
        return new GetStruct__Args(GetStruct__ArgsCodec.decode(input));
    }
    public static write(args: IGetStruct__ArgsArgs, output: thrift.TProtocol): void {
        return GetStruct__ArgsCodec.encode(args, output);
    }
    public write(output: thrift.TProtocol): void {
        return GetStruct__ArgsCodec.encode(this, output);
    }
}
export interface IGetStruct__Result {
    __name: "GetStruct__Result";
    success?: SharedStruct.ISharedStruct;
}
export interface IGetStruct__ResultArgs {
    success?: SharedStruct.ISharedStructArgs;
}
export const GetStruct__ResultCodec: thrift.IStructCodec<IGetStruct__ResultArgs, IGetStruct__Result> = {
    encode(args: IGetStruct__ResultArgs, output: thrift.TProtocol): void {
        const obj = {
            success: args.success
        };
        output.writeStructBegin("GetStruct__Result");
        if (obj.success != null) {
            output.writeFieldBegin("success", thrift.TType.STRUCT, 0);
            SharedStruct.SharedStructCodec.encode(obj.success, output);
            output.writeFieldEnd();
        }
        output.writeFieldStop();
        output.writeStructEnd();
        return;
    },
    decode(input: thrift.TProtocol): IGetStruct__Result {
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
                        const value_3: SharedStruct.ISharedStruct = SharedStruct.SharedStructCodec.decode(input);
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
            __name: "GetStruct__Result",
            success: _args.success
        };
    }
};
export class GetStruct__Result implements thrift.IStructLike, IGetStruct__Result {
    public success?: SharedStruct.ISharedStruct;
    public readonly __name = "GetStruct__Result";
    constructor(args: IGetStruct__ResultArgs = {}) {
        if (args.success != null) {
            const value_4: SharedStruct.ISharedStruct = new SharedStruct.SharedStruct(args.success);
            this.success = value_4;
        }
    }
    public static read(input: thrift.TProtocol): GetStruct__Result {
        return new GetStruct__Result(GetStruct__ResultCodec.decode(input));
    }
    public static write(args: IGetStruct__ResultArgs, output: thrift.TProtocol): void {
        return GetStruct__ResultCodec.encode(args, output);
    }
    public write(output: thrift.TProtocol): void {
        return GetStruct__ResultCodec.encode(this, output);
    }
}
export class Client<Context extends thrift.IRequestContext = thrift.IRequestContext> implements thrift.IThriftClient {
    public static readonly metadata: thrift.IServiceMetadata = metadata;
    public readonly __metadata: thrift.IServiceMetadata = metadata;
    protected _requestId: number;
    protected transport: thrift.ITransportConstructor;
    protected protocol: thrift.IProtocolConstructor;
    protected connection: thrift.IThriftConnection<Context>;
    constructor(connection: thrift.IThriftConnection<Context>) {
        this._requestId = 0;
        this.transport = connection.Transport;
        this.protocol = connection.Protocol;
        this.connection = connection;
    }
    protected incrementRequestId(): number {
        return this._requestId += 1;
    }
    public getStruct(key: number, context?: Context): Promise<SharedStruct.ISharedStruct> {
        const writer: thrift.TTransport = new this.transport();
        const output: thrift.TProtocol = new this.protocol(writer);
        output.writeMessageBegin("getStruct", thrift.MessageType.CALL, this.incrementRequestId());
        const args: IGetStruct__ArgsArgs = { key };
        GetStruct__ArgsCodec.encode(args, output);
        output.writeMessageEnd();
        return this.connection.send(writer.flush(), context).then((data: Buffer) => {
            const reader: thrift.TTransport = this.transport.receiver(data);
            const input: thrift.TProtocol = new this.protocol(reader);
            try {
                const { fieldName: fieldName, messageType: messageType }: thrift.IThriftMessage = input.readMessageBegin();
                if (fieldName === "getStruct") {
                    if (messageType === thrift.MessageType.EXCEPTION) {
                        const err: thrift.TApplicationException = thrift.TApplicationExceptionCodec.decode(input);
                        input.readMessageEnd();
                        return Promise.reject(err);
                    }
                    else {
                        const result: IGetStruct__Result = GetStruct__ResultCodec.decode(input);
                        input.readMessageEnd();
                        if (result.success != null) {
                            return Promise.resolve(result.success);
                        }
                        else {
                            return Promise.reject(new thrift.TApplicationException(thrift.TApplicationExceptionType.UNKNOWN, "getStruct failed: unknown result"));
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
export interface IHandler<Context extends object = {}> {
    getStruct(key: number, context: thrift.ThriftContext<Context>): SharedStruct.ISharedStructArgs | Promise<SharedStruct.ISharedStructArgs>;
}
export type ReadRequestData = {
    methodName: "getStruct";
    requestId: number;
    data: IGetStruct__Args;
};
export class Processor<Context extends object = {}> implements thrift.IThriftProcessor<Context> {
    protected readonly handler: IHandler<Context>;
    protected readonly transport: thrift.ITransportConstructor;
    protected readonly protocol: thrift.IProtocolConstructor;
    public static readonly metadata: thrift.IServiceMetadata = metadata;
    public readonly __metadata: thrift.IServiceMetadata = metadata;
    constructor(handler: IHandler<Context>, transport: thrift.ITransportConstructor = thrift.BufferedTransport, protocol: thrift.IProtocolConstructor = thrift.BinaryProtocol) {
        this.handler = handler;
        this.transport = transport;
        this.protocol = protocol;
    }
    public process(data: Buffer, context: thrift.ThriftContext<Context>): Promise<Buffer> {
        return new Promise<Buffer>((resolve, reject): void => {
            const metadata = this.readRequest(data);
            switch (metadata.methodName) {
                case "getStruct": {
                    resolve(this.process_getStruct(metadata.data, metadata.requestId, context));
                    break;
                }
                default: {
                    const failed: any = metadata;
                    const errMessage: string = "Unknown function " + failed.methodName;
                    const err: Error = new Error(errMessage);
                    resolve(this.writeError(failed.methodName, failed.requestId, err));
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
            case "getStruct": {
                const data: IGetStruct__Args = GetStruct__ArgsCodec.decode(input);
                input.readMessageEnd();
                return {
                    methodName: fieldName,
                    requestId: requestId,
                    data: data
                };
            }
            default: {
                input.skip(thrift.TType.STRUCT);
                input.readMessageEnd();
                throw new Error("Unable to read request for unknown function " + fieldName);
            }
        }
    }
    public writeResponse(methodName: string, data: any, requestId: number): Buffer {
        const output: thrift.TProtocol = new this.protocol(new this.transport());
        switch (methodName) {
            case "getStruct": {
                const result: IGetStruct__ResultArgs = { success: data };
                output.writeMessageBegin("getStruct", thrift.MessageType.REPLY, requestId);
                GetStruct__ResultCodec.encode(result, output);
                output.writeMessageEnd();
                return output.flush();
            }
            default: {
                throw new Error("Unable to write response for unknown function " + methodName);
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
    protected process_getStruct(args: IGetStruct__Args, requestId: number, context: thrift.ThriftContext<Context>): Promise<Buffer> {
        return new Promise<SharedStruct.ISharedStructArgs>((resolve, reject): void => {
            try {
                resolve(this.handler.getStruct(args.key, context));
            }
            catch (err) {
                reject(err);
            }
        }).then((data: SharedStruct.ISharedStructArgs): Buffer => {
            return this.writeResponse("getStruct", data, requestId);
        }).catch((err: Error): Buffer => {
            return this.writeError("getStruct", requestId, err);
        });
    }
}
