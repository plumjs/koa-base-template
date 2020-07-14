## description

- server template based on koa2

## details

- via koa2
- unit test by jest
- use eslint and prettier
- generate document by typedoc

## scripts

- test: unit test

```bash
npm run test
```

- test: unit test with coverage

```bash
npm run test-cov
```

- build: build

```bash
npm run build
```

- lint,lint:fix : code analysis by eslint and prettier

```bash
npm run lint
npm run lint:fix
```

- docs: genarate document by typedoc

```bash
npm run docs
```

- dev: via nodemon

```bash
npm run dev
```

## directory list

```bash
|-- koa-sso     # 工程目录
    |-- bin     # 命令行
    |-- docs    # 代码文档
    |-- src     # 源码
    |   |-- app.ts      # app实例
    |   |-- env.ts      # 环境变量
    |   |-- index.ts      # index
    |   |-- swagger.json      #swagger文档, 目前手动维护，之后自动转换
    |   |-- api     # api
    |   |   |-- resource        # 模块名，这里是资源
    |   |   |   |-- index.ts      # 入口
    |   |   |   |-- router.ts     # 路由
    |   |   |   |-- ctrls      # 控制器，一般存放api的入口
    |   |   |   |   |-- create.ts     #  下面是RESTful CURD基础API, 一般自动生成
    |   |   |   |   |-- delete.ts
    |   |   |   |   |-- find.ts
    |   |   |   |   |-- index.ts
    |   |   |   |   |-- patch.ts
    |   |   |   |   |-- update.ts
    |   |   |   |-- error     # 异常实例，根模块管辖业务相关
    |   |   |   |   |-- index.ts
    |   |   |   |   |-- resource.error.ts
    |   |   |   |-- models      # model， monggo || mysql
    |   |   |   |   |-- index.ts
    |   |   |   |   |-- interface.ts
    |   |   |   |   |-- model.ts
    |   |   |   |   |-- schema.ts
    |   |   |   |-- validators      # 校验器
    |   |   |       |-- definition.ts
    |   |   |       |-- index.ts
    |   |   |       |-- validate.ts
    |   |-- config      # 全局配置文件
    |   |   |-- config.default.ts
    |   |   |-- index.ts
    |   |-- error     # 全局异常
    |       |-- capture.middle.ts     # 异常捕获中间件
    |       |-- handle.ts     # 异常后续处理逻辑
    |       |-- http.error.ts     # 异常基类，供业务异常继承
    |       |-- index.ts  #入口
    |-- templates     # 模板，减少重复工作量用，现只维护api的自动生成
    |   |-- api
    |       |-- api.ts
    |       |-- template
    |-- test      # 单元测试文件目录
    |-- .eslintrc.js      # eslint 配置文件
    |-- .gitignore      # gitignore
    |-- .prettierrc.yml     # prettier配置文件
    |-- README.md
    |-- jest.config.js      # jest单元测试配置文件
    |-- nodemon.json        # nodemon 配置文件
    |-- package-lock.json     # 版本锁定，防止^v形式下引用出现版本不一致
    |-- package.json
    |-- tsconfig.json     # ts配置文件
    |-- typedoc.json      # typedoc 配置文件
    |-- yarn.lock
```

## todo list

- [x] lint
- [x] test
- [x] curd template
- [x] code doc
- [x] errors handle
- [ ] swagger
- [ ] api template cli
- [ ] deploy scripts
- [ ] authorization

## documents

- [document](./docs/globals.md)
