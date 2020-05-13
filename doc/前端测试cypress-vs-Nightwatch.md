## 有用的文章

cypress https://www.pangjian.me/2019/05/17/how-to-do-e2e-test-with-cypress/ 

cypress是js世界的原生居民，但对[wsl不友好？](https://github.com/cypress-io/cypress/issues/444)，nightwatch需要同时了解selenium

## 和webpack的支持

热更新？

在Webpack中的调用。

第一次能跑一遍，然后pause，能够热更新？Console的支持。

## 支持的浏览器

cypress更简洁，不需要配置selenium，缺点是不支持多浏览器。nightwatch需要配置selenium，支持多浏览器。

## nightwatch的优势

支持phantomjs，[无头模式速度更快](https://www.cnblogs.com/yinn/p/9729258.html)，但也可能会导致只在无头模式产生的难解决的bug

## 元素选择的快捷程度

同时支持css选择器

cypress支持contains

nightwatch支持xpath选择

## 语句简洁程度

cypress更加简洁，先选后用

nightwatch需要边选边用

## 交互式编程

## 上传文件

cypress有https://www.npmjs.com/package/cypress-file-upload

nightwatch有https://stackoverflow.com/questions/25919673/file-upload-testing-in-nightwatch-js

cypress更简洁
