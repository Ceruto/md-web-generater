# 依赖

## 安装Nodejs

`brew install nodejs`

## 安装grunt-cli

`npm install -g grunt-cli`

## 初始化项目其他依赖

`npm install`
 或
`npm init`

## 执行全局 markdown 文件转换到 html 的 grunt 任务

`grunt`

---

## 如需手动，则安装以下几个依赖

> 安装 grunt-md2html （https://github.com/bylexus/grunt-md2html）

`npm install grunt-md2html --save-d`

> 安装 github-markdown-csc

`npm install github-markdown-css`

> 语法高亮

`npm install highlight`

> 代码行数字

`npm install highlightjs-line-numbers.js`

---

## 帮助类文件

- 用于创建MD的snippets（for vscode）
  **markdown.json**

- 用于创建html文件的模板文件
  **html/default-template.html**

- 用于执行md2html的grunt任务
  **Gruntfile.js**
