# eslint-config-next
eslint-config-next是中台DPL Next组件库默认的[eslint](http://eslint.org/)配置。

**Note:**

* 0.x版本将eslint/babel-eslint/eslint plugins作为dependencies，安装方便，但是依赖node_modules结构，README请参考[这里](http://gitlab.alibaba-inc.com/next/eslint-config-next/blob/0.x/README.md)。
* 1.x版本将eslint/babel-eslint/eslint plugins作为peerDependencies，只包含配置的规则。

## 代码风格指南

* [javascript](./docs/code-guide/javascript.md)
* [jsx](./docs/code-guide/jsx.md)

## 如何使用

1. package.json中添加开发依赖，通过tnpm安装

    ```
    devDependencies": {
        ...
        "@ali/eslint-config-next": "^1.x",
        "@ali/eslint-plugin-next-md": "^0.1.1",
        "babel-eslint": "^6.1.2",
        "eslint": "^3.0.1",
        "eslint-plugin-babel": "^3.3.0",
        "eslint-plugin-import": "^1.12.0",
        "eslint-plugin-react": "^5.2.2"
    }
    ```

    ```
    tnpm install
    ```
2. 在项目根目录添加`.eslintrc`文件

    ```
    {
      "extends": [
        "@ali/eslint-config-next"
      ],
      "rules": {
        // add some custom rules
      }
    }
    ```

3. 在package.json的`scripts`中添加lint命令

    ```
    ...
    "scripts": {
        ...
        "lint": "eslint . --ext .js,.jsx"
    }
    ```

4. 执行lint命令

    ```
    tnpm run lint
    ```

## 规则配置原则

* **browser**，目前配置的规则主要针对浏览器端代码的检查
* **es6+**，支持对es6+语法规则的检查
* **react**，扩展对jsx语法规则的检查
* **ie9+**，不包括对兼容ie低版本特殊代码书写方式规则的检查

## 常见代码风格配置

* 缩进使用4个空格 `"indent": [2, 4, { "SwitchCase": 1 }]`,
* 使用单引号 `"quotes": [2, "single"]`
* 语句结尾保有分号 `"semi": 2`

**Note:**
* next组件统一采用以上风格书写代码，其他项目中如果想采用其他风格，请在`.eslintrc`中配置相应规则进行覆盖。
* ESlint支持在代码中通过添加注释忽略掉某些规则对代码的检查，详情请查看[这里](http://eslint.cn/docs/user-guide/configuring#disabling-rules-with-inline-comments)

## IDE配置
* [Atom](./docs/ide-usage/atom.md)
* [Sublime](./docs/ide-usage/sublime.md)
* [VSCode](./docs/ide-usage/vscode.md)
* [WebStorm](./docs/ide-usage/webstorm.md)

## 参考

* [eslint rules](http://eslint.org/docs/rules/)
* [eslint rules(中文)](http://eslint.cn/docs/rules/)
* [eslint-plugin-import rules](https://github.com/benmosher/eslint-plugin-import)
* [eslint-plugin-babel rules](https://github.com/babel/eslint-plugin-babel)
* [eslint-plugin-react rules](https://github.com/yannickcr/eslint-plugin-react)
