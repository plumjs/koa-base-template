[koa-base-template](README.md) › [Globals](globals.md)

# koa-base-template

## Index

### Enumerations

* [EGender](enums/egender.md)
* [EStatus](enums/estatus.md)

### Classes

* [App](classes/app.md)
* [HttpError](classes/httperror.md)
* [StudentError](classes/studenterror.md)

### Interfaces

* [IStudent](interfaces/istudent.md)

### Variables

* [StudentModel](globals.md#const-studentmodel)
* [StudentSchema](globals.md#const-studentschema)
* [getSchema](globals.md#const-getschema)
* [postSchema](globals.md#const-postschema)
* [router](globals.md#const-router)
* [schema](globals.md#const-schema)

### Functions

* [add](globals.md#add)
* [capture](globals.md#capture)
* [create](globals.md#create)
* [del](globals.md#del)
* [findMany](globals.md#findmany)
* [findOne](globals.md#findone)
* [handle](globals.md#handle)
* [patch](globals.md#patch)
* [update](globals.md#update)
* [validate](globals.md#validate)

### Object literals

* [cors](globals.md#const-cors)
* [env](globals.md#const-env)
* [jwt](globals.md#const-jwt)

## Variables

### `Const` StudentModel

• **StudentModel**: *PaginateModel‹[IStudent](interfaces/istudent.md)›* =  model('student', StudentSchema)

Defined in src/api/student/models/model.ts:5

___

### `Const` StudentSchema

• **StudentSchema**: *Schema‹any›* =  new Schema(
  {
    serial: Number,
    name: String,
    gender: {
      type: String,
      enum: ['male', 'female'],
    },
    status: {
      type: String,
      enum: ['normal', 'unnormal'],
    },
  },
  {
    timestamps: {},
    versionKey: false,
  }
)

Defined in src/api/student/models/schema.ts:4

___

### `Const` getSchema

• **getSchema**: *StringSchema‹› | AnySchema‹› | ArraySchema‹› | AlternativesSchema‹› | BinarySchema‹› | BooleanSchema‹› | DateSchema‹› | FunctionSchema‹› | NumberSchema‹› | ObjectSchema‹any› | LinkSchema‹› | SymbolSchema‹›* =  schema.tailor('get')

Defined in src/api/student/validators/definition.ts:22

___

### `Const` postSchema

• **postSchema**: *StringSchema‹› | AnySchema‹› | ArraySchema‹› | AlternativesSchema‹› | BinarySchema‹› | BooleanSchema‹› | DateSchema‹› | FunctionSchema‹› | NumberSchema‹› | ObjectSchema‹any› | LinkSchema‹› | SymbolSchema‹›* =  schema.tailor('post')

Defined in src/api/student/validators/definition.ts:19

___

### `Const` router

• **router**: *any* =  new Router({
  prefix: '/v1/students',
})

Defined in src/api/student/router.ts:4

___

### `Const` schema

• **schema**: *ObjectSchema‹Object›* =  joi.object({
  _id: joi
    .string()
    .length(24)
    .alter({
      get: schema => schema.required(),
    }),
  serial: joi.number().alter({
    post: schema => schema.required(),
  }),
  name: joi.string(),
  gender: joi.string(),
  status: joi.string(),
})

Defined in src/api/student/validators/definition.ts:3

## Functions

###  add

▸ **add**(`a`: number, `b`: number): *number*

*Defined in [src/add.ts:1](https://github.com/shanfengliudd01/koa-base-template/blob/b3b7dd3/src/add.ts#L1)*

**Parameters:**

Name | Type |
------ | ------ |
`a` | number |
`b` | number |

**Returns:** *number*

___

###  capture

▸ **capture**(): *[Middleware](classes/app.md#static-middleware)*

*Defined in [src/error/capture.middle.ts:12](https://github.com/shanfengliudd01/koa-base-template/blob/b3b7dd3/src/error/capture.middle.ts#L12)*

a middleware for capture error
```ts
import * as koa from 'koa'
const app = new koa()
app.use(capture())
```

**Returns:** *[Middleware](classes/app.md#static-middleware)*

___

###  create

▸ **create**(`ctx`: Context, `next`: any): *Promise‹void›*

Defined in src/api/student/ctrls/create.ts:12

create one or many Student instance

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`ctx` | Context | - |
`next` | any |   |

**Returns:** *Promise‹void›*

___

###  del

▸ **del**(`ctx`: Context, `next`: any): *Promise‹void›*

Defined in src/api/student/ctrls/delete.ts:11

delete one

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`ctx` | Context | - |
`next` | any |   |

**Returns:** *Promise‹void›*

___

###  findMany

▸ **findMany**(`ctx`: Context, `next`: any): *Promise‹void›*

Defined in src/api/student/ctrls/find.ts:34

find many

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`ctx` | Context | - |
`next` | any |   |

**Returns:** *Promise‹void›*

___

###  findOne

▸ **findOne**(`ctx`: Context, `next`: any): *Promise‹void›*

Defined in src/api/student/ctrls/find.ts:11

find One by _id

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`ctx` | Context | - |
`next` | any |   |

**Returns:** *Promise‹void›*

___

###  handle

▸ **handle**(`e`: Error, `ctx`: Context): *void*

*Defined in [src/error/handle.ts:13](https://github.com/shanfengliudd01/koa-base-template/blob/b3b7dd3/src/error/handle.ts#L13)*

some operation for erros
```ts
import * as koa from 'koa'
const app = new koa()
app.on('error', (e, ctx)=>handle(e, ctx))
```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`e` | Error | instanceof Error |
`ctx` | Context | koa.Context  |

**Returns:** *void*

___

###  patch

▸ **patch**(`ctx`: Context, `next`: any): *Promise‹void›*

Defined in src/api/student/ctrls/patch.ts:11

update one or many Student instance

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`ctx` | Context | - |
`next` | any |   |

**Returns:** *Promise‹void›*

___

###  update

▸ **update**(`ctx`: Context, `next`: any): *Promise‹void›*

Defined in src/api/student/ctrls/update.ts:11

update one or many Student instance

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`ctx` | Context | - |
`next` | any |   |

**Returns:** *Promise‹void›*

___

###  validate

▸ **validate**(`data`: object[] | object, `strict`: boolean): *void*

Defined in src/api/student/validators/validate.ts:9

validate

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`data` | object[] &#124; object | - | data ready to check |
`strict` | boolean | false | set true while post or put, set false when patch/:id, get/:id, delete/:id  |

**Returns:** *void*

## Object literals

### `Const` cors

### ▪ **cors**: *object*

*Defined in [src/config/config.default.ts:7](https://github.com/shanfengliudd01/koa-base-template/blob/b3b7dd3/src/config/config.default.ts#L7)*

###  allowMethods

• **allowMethods**: *string* = "GET, POST, PUT, PATCH, DELETE"

*Defined in [src/config/config.default.ts:8](https://github.com/shanfengliudd01/koa-base-template/blob/b3b7dd3/src/config/config.default.ts#L8)*

___

### `Const` env

### ▪ **env**: *object*

*Defined in [src/env.ts:1](https://github.com/shanfengliudd01/koa-base-template/blob/b3b7dd3/src/env.ts#L1)*

###  deploy

• **deploy**: *string* = "local"

*Defined in [src/env.ts:5](https://github.com/shanfengliudd01/koa-base-template/blob/b3b7dd3/src/env.ts#L5)*

###  domain

• **domain**: *string* = "localhost"

*Defined in [src/env.ts:2](https://github.com/shanfengliudd01/koa-base-template/blob/b3b7dd3/src/env.ts#L2)*

###  mongoUri

• **mongoUri**: *string* = "mongodb://localhost:27017/koa-base-template"

*Defined in [src/env.ts:4](https://github.com/shanfengliudd01/koa-base-template/blob/b3b7dd3/src/env.ts#L4)*

###  port

• **port**: *string* = "3000"

*Defined in [src/env.ts:3](https://github.com/shanfengliudd01/koa-base-template/blob/b3b7dd3/src/env.ts#L3)*

___

### `Const` jwt

### ▪ **jwt**: *object*

*Defined in [src/config/config.default.ts:1](https://github.com/shanfengliudd01/koa-base-template/blob/b3b7dd3/src/config/config.default.ts#L1)*

###  expiresIn

• **expiresIn**: *string* = "30s"

*Defined in [src/config/config.default.ts:4](https://github.com/shanfengliudd01/koa-base-template/blob/b3b7dd3/src/config/config.default.ts#L4)*

###  key

• **key**: *string* = "key-koa-base-template"

*Defined in [src/config/config.default.ts:2](https://github.com/shanfengliudd01/koa-base-template/blob/b3b7dd3/src/config/config.default.ts#L2)*

###  secret

• **secret**: *string* = "secret-koa-base-template"

*Defined in [src/config/config.default.ts:3](https://github.com/shanfengliudd01/koa-base-template/blob/b3b7dd3/src/config/config.default.ts#L3)*
