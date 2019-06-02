/* tslint:disable */
/*
 * Autogenerated by @creditkarma/thrift-typescript v{{VERSION}}
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
*/
import * as thrift from "test-lib";
import * as FirstName from "./FirstName";
import * as LastName from "./LastName";
export enum ChoiceType {
    ChoiceWithFirstName = "firstName",
    ChoiceWithLastName = "lastName"
}
export type Choice = IChoiceWithFirstName | IChoiceWithLastName;
export interface IChoiceWithFirstName {
    __name: "Choice";
    __type: ChoiceType.ChoiceWithFirstName;
    firstName: FirstName.IFirstName;
    lastName?: undefined;
}
export interface IChoiceWithLastName {
    __name: "Choice";
    __type: ChoiceType.ChoiceWithLastName;
    firstName?: undefined;
    lastName: LastName.ILastName;
}
export type ChoiceArgs = IChoiceWithFirstNameArgs | IChoiceWithLastNameArgs;
export interface IChoiceWithFirstNameArgs {
    firstName: FirstName.IFirstNameArgs;
    lastName?: undefined;
}
export interface IChoiceWithLastNameArgs {
    firstName?: undefined;
    lastName: LastName.ILastNameArgs;
}
export const ChoiceCodec: thrift.IStructToolkit<ChoiceArgs, Choice> = {
    create(args: ChoiceArgs): Choice {
        let _fieldsSet: number = 0;
        let _returnValue: any = null;
        if (args.firstName != null) {
            _fieldsSet++;
            const value_1: FirstName.IFirstName = new FirstName.FirstName(args.firstName);
            _returnValue = { firstName: value_1 };
        }
        if (args.lastName != null) {
            _fieldsSet++;
            const value_2: LastName.ILastName = new LastName.LastName(args.lastName);
            _returnValue = { lastName: value_2 };
        }
        if (_fieldsSet > 1) {
            throw new thrift.TProtocolException(thrift.TProtocolExceptionType.INVALID_DATA, "TUnion cannot have more than one value");
        }
        else if (_fieldsSet < 1) {
            throw new thrift.TProtocolException(thrift.TProtocolExceptionType.INVALID_DATA, "TUnion must have one value set");
        }
        if (_returnValue !== null) {
            if (_returnValue.firstName !== undefined) {
                return {
                    __name: "Choice",
                    __type: ChoiceType.ChoiceWithFirstName,
                    firstName: _returnValue.firstName
                };
            }
            else {
                return {
                    __name: "Choice",
                    __type: ChoiceType.ChoiceWithLastName,
                    lastName: _returnValue.lastName
                };
            }
        }
        else {
            throw new thrift.TProtocolException(thrift.TProtocolExceptionType.UNKNOWN, "Unable to read data for TUnion");
        }
    },
    encode(args: ChoiceArgs, output: thrift.TProtocol): void {
        let _fieldsSet: number = 0;
        const obj = {
            firstName: args.firstName,
            lastName: args.lastName
        };
        output.writeStructBegin("Choice");
        if (obj.firstName != null) {
            _fieldsSet++;
            output.writeFieldBegin("firstName", thrift.TType.STRUCT, 1);
            FirstName.FirstNameCodec.encode(obj.firstName, output);
            output.writeFieldEnd();
        }
        if (obj.lastName != null) {
            _fieldsSet++;
            output.writeFieldBegin("lastName", thrift.TType.STRUCT, 2);
            LastName.LastNameCodec.encode(obj.lastName, output);
            output.writeFieldEnd();
        }
        output.writeFieldStop();
        output.writeStructEnd();
        if (_fieldsSet > 1) {
            throw new thrift.TProtocolException(thrift.TProtocolExceptionType.INVALID_DATA, "TUnion cannot have more than one value");
        }
        else if (_fieldsSet < 1) {
            throw new thrift.TProtocolException(thrift.TProtocolExceptionType.INVALID_DATA, "TUnion must have one value set");
        }
        return;
    },
    decode(input: thrift.TProtocol): Choice {
        let _fieldsSet: number = 0;
        let _returnValue: any = null;
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
                    if (fieldType === thrift.TType.STRUCT) {
                        _fieldsSet++;
                        const value_3: FirstName.IFirstName = FirstName.FirstNameCodec.decode(input);
                        _returnValue = { __name: "Choice", firstName: value_3 };
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 2:
                    if (fieldType === thrift.TType.STRUCT) {
                        _fieldsSet++;
                        const value_4: LastName.ILastName = LastName.LastNameCodec.decode(input);
                        _returnValue = { __name: "Choice", lastName: value_4 };
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
        if (_fieldsSet > 1) {
            throw new thrift.TProtocolException(thrift.TProtocolExceptionType.INVALID_DATA, "TUnion cannot have more than one value");
        }
        else if (_fieldsSet < 1) {
            throw new thrift.TProtocolException(thrift.TProtocolExceptionType.INVALID_DATA, "TUnion must have one value set");
        }
        if (_returnValue !== null) {
            if (_returnValue.firstName !== undefined) {
                return {
                    __name: "Choice",
                    __type: ChoiceType.ChoiceWithFirstName,
                    firstName: _returnValue.firstName
                };
            }
            else {
                return {
                    __name: "Choice",
                    __type: ChoiceType.ChoiceWithLastName,
                    lastName: _returnValue.lastName
                };
            }
        }
        else {
            throw new thrift.TProtocolException(thrift.TProtocolExceptionType.UNKNOWN, "Unable to read data for TUnion");
        }
    }
};
