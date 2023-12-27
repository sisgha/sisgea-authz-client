/* eslint-disable */
import type { CallContext, CallOptions } from 'nice-grpc-common';
import * as _m0 from 'protobufjs/minimal';

export const protobufPackage = 'sisgea.authz';

export interface GenericCanRequest {
  action: string;
  resource: string;
  resourceIdJson: string;
}

export interface UserCanRequest {
  action: string;
  resource: string;
  resourceIdJson: string;
  userId: string;
}

export interface CanResponse {
  can: boolean;
}

export interface AllowedResourceResponse {
  resourceIdJson: string;
}

function createBaseGenericCanRequest(): GenericCanRequest {
  return { action: '', resource: '', resourceIdJson: '' };
}

export const GenericCanRequest = {
  encode(message: GenericCanRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.action !== '') {
      writer.uint32(10).string(message.action);
    }
    if (message.resource !== '') {
      writer.uint32(18).string(message.resource);
    }
    if (message.resourceIdJson !== '') {
      writer.uint32(26).string(message.resourceIdJson);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenericCanRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenericCanRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.action = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.resource = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.resourceIdJson = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GenericCanRequest {
    return {
      action: isSet(object.action) ? globalThis.String(object.action) : '',
      resource: isSet(object.resource) ? globalThis.String(object.resource) : '',
      resourceIdJson: isSet(object.resourceIdJson) ? globalThis.String(object.resourceIdJson) : '',
    };
  },

  toJSON(message: GenericCanRequest): unknown {
    const obj: any = {};
    if (message.action !== '') {
      obj.action = message.action;
    }
    if (message.resource !== '') {
      obj.resource = message.resource;
    }
    if (message.resourceIdJson !== '') {
      obj.resourceIdJson = message.resourceIdJson;
    }
    return obj;
  },

  create(base?: DeepPartial<GenericCanRequest>): GenericCanRequest {
    return GenericCanRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GenericCanRequest>): GenericCanRequest {
    const message = createBaseGenericCanRequest();
    message.action = object.action ?? '';
    message.resource = object.resource ?? '';
    message.resourceIdJson = object.resourceIdJson ?? '';
    return message;
  },
};

function createBaseUserCanRequest(): UserCanRequest {
  return { action: '', resource: '', resourceIdJson: '', userId: '' };
}

export const UserCanRequest = {
  encode(message: UserCanRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.action !== '') {
      writer.uint32(10).string(message.action);
    }
    if (message.resource !== '') {
      writer.uint32(18).string(message.resource);
    }
    if (message.resourceIdJson !== '') {
      writer.uint32(26).string(message.resourceIdJson);
    }
    if (message.userId !== '') {
      writer.uint32(34).string(message.userId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserCanRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserCanRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.action = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.resource = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.resourceIdJson = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.userId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UserCanRequest {
    return {
      action: isSet(object.action) ? globalThis.String(object.action) : '',
      resource: isSet(object.resource) ? globalThis.String(object.resource) : '',
      resourceIdJson: isSet(object.resourceIdJson) ? globalThis.String(object.resourceIdJson) : '',
      userId: isSet(object.userId) ? globalThis.String(object.userId) : '',
    };
  },

  toJSON(message: UserCanRequest): unknown {
    const obj: any = {};
    if (message.action !== '') {
      obj.action = message.action;
    }
    if (message.resource !== '') {
      obj.resource = message.resource;
    }
    if (message.resourceIdJson !== '') {
      obj.resourceIdJson = message.resourceIdJson;
    }
    if (message.userId !== '') {
      obj.userId = message.userId;
    }
    return obj;
  },

  create(base?: DeepPartial<UserCanRequest>): UserCanRequest {
    return UserCanRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<UserCanRequest>): UserCanRequest {
    const message = createBaseUserCanRequest();
    message.action = object.action ?? '';
    message.resource = object.resource ?? '';
    message.resourceIdJson = object.resourceIdJson ?? '';
    message.userId = object.userId ?? '';
    return message;
  },
};

function createBaseCanResponse(): CanResponse {
  return { can: false };
}

export const CanResponse = {
  encode(message: CanResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.can === true) {
      writer.uint32(8).bool(message.can);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CanResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCanResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.can = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CanResponse {
    return { can: isSet(object.can) ? globalThis.Boolean(object.can) : false };
  },

  toJSON(message: CanResponse): unknown {
    const obj: any = {};
    if (message.can === true) {
      obj.can = message.can;
    }
    return obj;
  },

  create(base?: DeepPartial<CanResponse>): CanResponse {
    return CanResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<CanResponse>): CanResponse {
    const message = createBaseCanResponse();
    message.can = object.can ?? false;
    return message;
  },
};

function createBaseAllowedResourceResponse(): AllowedResourceResponse {
  return { resourceIdJson: '' };
}

export const AllowedResourceResponse = {
  encode(message: AllowedResourceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.resourceIdJson !== '') {
      writer.uint32(10).string(message.resourceIdJson);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AllowedResourceResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAllowedResourceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.resourceIdJson = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AllowedResourceResponse {
    return { resourceIdJson: isSet(object.resourceIdJson) ? globalThis.String(object.resourceIdJson) : '' };
  },

  toJSON(message: AllowedResourceResponse): unknown {
    const obj: any = {};
    if (message.resourceIdJson !== '') {
      obj.resourceIdJson = message.resourceIdJson;
    }
    return obj;
  },

  create(base?: DeepPartial<AllowedResourceResponse>): AllowedResourceResponse {
    return AllowedResourceResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<AllowedResourceResponse>): AllowedResourceResponse {
    const message = createBaseAllowedResourceResponse();
    message.resourceIdJson = object.resourceIdJson ?? '';
    return message;
  },
};

export type SisgeaAuthzCheckerDefinition = typeof SisgeaAuthzCheckerDefinition;
export const SisgeaAuthzCheckerDefinition = {
  name: 'SisgeaAuthzChecker',
  fullName: 'sisgea.authz.SisgeaAuthzChecker',
  methods: {
    anonymousCan: {
      name: 'AnonymousCan',
      requestType: GenericCanRequest,
      requestStream: false,
      responseType: CanResponse,
      responseStream: false,
      options: {},
    },
    anonymousAllowedResources: {
      name: 'AnonymousAllowedResources',
      requestType: GenericCanRequest,
      requestStream: false,
      responseType: AllowedResourceResponse,
      responseStream: true,
      options: {},
    },
    internalSystemCan: {
      name: 'InternalSystemCan',
      requestType: GenericCanRequest,
      requestStream: false,
      responseType: CanResponse,
      responseStream: false,
      options: {},
    },
    internalSystemAllowedResources: {
      name: 'InternalSystemAllowedResources',
      requestType: GenericCanRequest,
      requestStream: false,
      responseType: AllowedResourceResponse,
      responseStream: true,
      options: {},
    },
    userCan: {
      name: 'UserCan',
      requestType: UserCanRequest,
      requestStream: false,
      responseType: CanResponse,
      responseStream: false,
      options: {},
    },
    userAllowedResources: {
      name: 'UserAllowedResources',
      requestType: UserCanRequest,
      requestStream: false,
      responseType: AllowedResourceResponse,
      responseStream: true,
      options: {},
    },
  },
} as const;

export interface SisgeaAuthzCheckerServiceImplementation<CallContextExt = {}> {
  anonymousCan(request: GenericCanRequest, context: CallContext & CallContextExt): Promise<DeepPartial<CanResponse>>;
  anonymousAllowedResources(
    request: GenericCanRequest,
    context: CallContext & CallContextExt,
  ): ServerStreamingMethodResult<DeepPartial<AllowedResourceResponse>>;
  internalSystemCan(request: GenericCanRequest, context: CallContext & CallContextExt): Promise<DeepPartial<CanResponse>>;
  internalSystemAllowedResources(
    request: GenericCanRequest,
    context: CallContext & CallContextExt,
  ): ServerStreamingMethodResult<DeepPartial<AllowedResourceResponse>>;
  userCan(request: UserCanRequest, context: CallContext & CallContextExt): Promise<DeepPartial<CanResponse>>;
  userAllowedResources(
    request: UserCanRequest,
    context: CallContext & CallContextExt,
  ): ServerStreamingMethodResult<DeepPartial<AllowedResourceResponse>>;
}

export interface SisgeaAuthzCheckerClient<CallOptionsExt = {}> {
  anonymousCan(request: DeepPartial<GenericCanRequest>, options?: CallOptions & CallOptionsExt): Promise<CanResponse>;
  anonymousAllowedResources(
    request: DeepPartial<GenericCanRequest>,
    options?: CallOptions & CallOptionsExt,
  ): AsyncIterable<AllowedResourceResponse>;
  internalSystemCan(request: DeepPartial<GenericCanRequest>, options?: CallOptions & CallOptionsExt): Promise<CanResponse>;
  internalSystemAllowedResources(
    request: DeepPartial<GenericCanRequest>,
    options?: CallOptions & CallOptionsExt,
  ): AsyncIterable<AllowedResourceResponse>;
  userCan(request: DeepPartial<UserCanRequest>, options?: CallOptions & CallOptionsExt): Promise<CanResponse>;
  userAllowedResources(
    request: DeepPartial<UserCanRequest>,
    options?: CallOptions & CallOptionsExt,
  ): AsyncIterable<AllowedResourceResponse>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends globalThis.Array<infer U>
    ? globalThis.Array<DeepPartial<U>>
    : T extends ReadonlyArray<infer U>
      ? ReadonlyArray<DeepPartial<U>>
      : T extends {}
        ? { [K in keyof T]?: DeepPartial<T[K]> }
        : Partial<T>;

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}

export type ServerStreamingMethodResult<Response> = { [Symbol.asyncIterator](): AsyncIterator<Response, void> };
