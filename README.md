# 《superagent 与 cheerio 完成简单爬虫》

## 目标


>输出

```
[
{
"title":"中国最大的JavaScript开发者大会JSConf China 2016即宁JS 售票啦！",
"href":"/topic/575e70ef4a43c1cb159ffe25",
"author":"xeodou"
},
{
"title":"北京］8月21日 NodeParty@科技寺，报名从速 !",
"href":"/topic/57ab1ec5ba44d08f4c1ce01d",
"author":"Samurais"
}
]
```

>挑战

目前只爬出1页的数据
爬出https://cnodejs.org 分页计数10页的数据



## 依赖


我们这回需要用到三个依赖，分别是 express，superagent 和 cheerio（建议看看API）

superagent(http://visionmedia.github.io/superagent/ ) 是个 http 方面的库，可以发起 get 或 post 请求。

cheerio(https://github.com/cheeriojs/cheerio ) 大家可以理解成一个 Node.js 版的 jquery，用来从网页中以 css selector 取数据，使用方式差不多跟 jquery 一样一样的。

还记得我们怎么新建一个项目吗？

### 运行起来
第1步:`npm install`
第2步：`node app.js`


