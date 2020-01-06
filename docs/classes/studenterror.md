[koa-base-template](../README.md) › [Globals](../globals.md) › [StudentError](studenterror.md)

# Class: StudentError

error instance of student

## Hierarchy

  ↳ [HttpError](httperror.md)

  ↳ **StudentError**

## Index

### Constructors

* [constructor](studenterror.md#constructor)

### Properties

* [code](studenterror.md#code)
* [detail](studenterror.md#detail)
* [details](studenterror.md#details)
* [message](studenterror.md#message)
* [name](studenterror.md#name)
* [refer](studenterror.md#refer)
* [stack](studenterror.md#optional-stack)
* [status](studenterror.md#status)
* [busiCode](studenterror.md#static-private-busicode)

## Constructors

###  constructor

\+ **new StudentError**(`code`: string, `message`: string, `detail`: object): *[StudentError](studenterror.md)*

*Overrides [HttpError](httperror.md).[constructor](httperror.md#constructor)*

Defined in src/api/student/error/student.error.ts:7

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`code` | string | - |
`message` | string | - |
`detail` | object |  {} |

**Returns:** *[StudentError](studenterror.md)*

## Properties

###  code

• **code**: *string*

*Overrides [HttpError](httperror.md).[code](httperror.md#code)*

Defined in src/api/student/error/student.error.ts:9

___

###  detail

• **detail**: *object*

Defined in src/api/student/error/student.error.ts:11

#### Type declaration:

* \[ **x**: *string*\]: any

___

###  details

• **details**: *object*

*Inherited from [HttpError](httperror.md).[details](httperror.md#details)*

*Defined in [src/error/http.error.ts:19](https://github.com/shanfengliudd01/koa-base-template/blob/b3b7dd3/src/error/http.error.ts#L19)*

detail about error

#### Type declaration:

* \[ **x**: *string*\]: any

___

###  message

• **message**: *string*

*Overrides [HttpError](httperror.md).[message](httperror.md#message)*

Defined in src/api/student/error/student.error.ts:10

___

###  name

• **name**: *string*

*Inherited from void*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:973

___

###  refer

• **refer**: *string*

*Inherited from [HttpError](httperror.md).[refer](httperror.md#refer)*

*Defined in [src/error/http.error.ts:20](https://github.com/shanfengliudd01/koa-base-template/blob/b3b7dd3/src/error/http.error.ts#L20)*

error reference link, such as a swagger html

___

### `Optional` stack

• **stack**? : *string*

*Inherited from void*

*Overrides void*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:975

___

###  status

• **status**: *number*

*Inherited from [HttpError](httperror.md).[status](httperror.md#status)*

*Defined in [src/error/http.error.ts:16](https://github.com/shanfengliudd01/koa-base-template/blob/b3b7dd3/src/error/http.error.ts#L16)*

http status_code ,such as 200, 201, 401, 403 and so on

___

### `Static` `Private` busiCode

▪ **busiCode**: *string* = "10"

Defined in src/api/student/error/student.error.ts:7
