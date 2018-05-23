# React-cli

> 创建 react 项目初始化脚手架搭建

## 目录结构
```
|----------------------------------
| - bin
|   - react-cli.js
| - command
|   - init.js
| - package.json
|----------------------------------
```

## 核心模块 commander
> 一个帮助快速开发Nodejs命令行工具的package

### commander的API
| API                        | text                                                                    |
| :------------------------- | :---------------------------------------------------------------------- |
|  Option()                  | 初始化自定义参数对象，设置“关键字”和“描述”                                       |
|  Command()                 | 初始化命令行参数对象，直接获得命令行输入                                         |
|  Command#command()         | 定义一个命令名字                                                             |
|  Command#action()          | 注册一个callback函数                                                         |
|  Command#option()          | 定义参数，需要设置“关键字”和“描述”，关键字包括“简写”和“全写”两部分，以”,”,”|”,”空格”做分隔。|
|  Command#parse()           | 解析命令行参数argv                                                           |
|  Command#description()     | 设置description值                                                            |
|  Command#usage()           | 设置usage值                                                                  |