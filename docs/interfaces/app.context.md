[koa-base-template](../README.md) › [Globals](../globals.md) › [App](../classes/app.md) › [Context](app.context.md)

# Interface: Context

## Hierarchy

* **Context**

## Indexable

* \[ **key**: *string*\]: any

Custom properties.

## Index

### Properties

* [accept](app.context.md#accept)
* [app](app.context.md#app)
* [cookies](app.context.md#cookies)
* [originalUrl](app.context.md#originalurl)
* [req](app.context.md#req)
* [request](app.context.md#request)
* [res](app.context.md#res)
* [respond](app.context.md#optional-respond)
* [response](app.context.md#response)
* [state](app.context.md#state)

## Properties

###  accept

• **accept**: *Accepts*

*Inherited from void*

Defined in node_modules/@types/koa/index.d.ts:717

___

###  app

• **app**: *Application*

*Inherited from void*

Defined in node_modules/@types/koa/index.d.ts:710

___

###  cookies

• **cookies**: *Cookies*

*Inherited from void*

Defined in node_modules/@types/koa/index.d.ts:716

___

###  originalUrl

• **originalUrl**: *string*

*Inherited from void*

Defined in node_modules/@types/koa/index.d.ts:715

___

###  req

• **req**: *IncomingMessage*

*Inherited from void*

Defined in node_modules/@types/koa/index.d.ts:713

___

###  request

• **request**: *Request*

*Inherited from void*

Defined in node_modules/@types/koa/index.d.ts:711

___

###  res

• **res**: *ServerResponse*

*Inherited from void*

Defined in node_modules/@types/koa/index.d.ts:714

___

### `Optional` respond

• **respond**? : *boolean*

*Inherited from void*

Defined in node_modules/@types/koa/index.d.ts:721

To bypass Koa's built-in response handling, you may explicitly set `ctx.respond = false;`

___

###  response

• **response**: *Response*

*Inherited from void*

Defined in node_modules/@types/koa/index.d.ts:712

___

###  state

• **state**: *StateT*

*Inherited from void*

Defined in node_modules/@types/koa/index.d.ts:728
