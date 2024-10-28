# IOS端免费的Stream抓包工具

# 简述

Stream可在苹果的App Store中免费下载，免费使用，不需要后续付费购买服务。以下是官方的功能介绍。

Stream 用于客户端本地抓包，仅用于QA&开发本地网络调试。只是利用了iOS 9+的 Network Extension Api，其实不具备连接 vpn的功能

1.抓取 HTTP&HTTPS 请求，其中HTTPS 请求需要配置 CA 证书

2.访问抓包历史，预览请求体(request body)以及响应体(response body),目前支持文本/JSON/文件/表单。

3.支持构建请求和请求重放

4.支持配置 Hosts，实现在电脑端的Hosts 功能，用于前端开发以及移动端开发便捷的切换测试环境和线上环境。

5.比较简单的支持打开HAR 通用标准文件，可以将 Charles/Fiddler/Chrome/Firefox 等网络记录导出 HAR然后在 Stream 打开并重放请求

6.完美适配iPhone x 以及支持 iPadMutiTask。

# **准备工作**

[https://mmbiz.qpic.cn/sz_mmbiz_jpg/zZAR4Ynqicp94jK2YM32KZYBTOxibfwC4SnYxWfmR49DKJ2bMbqE4yu1EWgueFrVOY8Djv1JQDUxb5INgDicI5MGw/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1](https://mmbiz.qpic.cn/sz_mmbiz_jpg/zZAR4Ynqicp94jK2YM32KZYBTOxibfwC4SnYxWfmR49DKJ2bMbqE4yu1EWgueFrVOY8Djv1JQDUxb5INgDicI5MGw/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

App Store中搜索并下载Stream，第一次下载完后按照软件的提示进行配置即可。

下面以抓取阿里云盘签到接口api为例进行展示。

# **实际操作**

[https://mmbiz.qpic.cn/sz_mmbiz_png/zZAR4Ynqicp94jK2YM32KZYBTOxibfwC4SUDvMQdGX3NxoQbLNnFRhC8CkfqctCcjgKF5h2ZHibZT4Ch7I5nutMtA/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1](https://mmbiz.qpic.cn/sz_mmbiz_png/zZAR4Ynqicp94jK2YM32KZYBTOxibfwC4SUDvMQdGX3NxoQbLNnFRhC8CkfqctCcjgKF5h2ZHibZT4Ch7I5nutMtA/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

[https://mmbiz.qpic.cn/sz_mmbiz_png/zZAR4Ynqicp94jK2YM32KZYBTOxibfwC4S3XNHcs7JCzXTjc8dCthYE8KJia0HXHXxcxHH1YLyuBUM87p7geWBe1w/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1](https://mmbiz.qpic.cn/sz_mmbiz_png/zZAR4Ynqicp94jK2YM32KZYBTOxibfwC4S3XNHcs7JCzXTjc8dCthYE8KJia0HXHXxcxHH1YLyuBUM87p7geWBe1w/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

[https://mmbiz.qpic.cn/sz_mmbiz_png/zZAR4Ynqicp94jK2YM32KZYBTOxibfwC4Sxk2019bWmR1TXwV4nYSvEX5XuDtloqicI17HZEmXA7TkfWfuB3PysZQ/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1](https://mmbiz.qpic.cn/sz_mmbiz_png/zZAR4Ynqicp94jK2YM32KZYBTOxibfwC4Sxk2019bWmR1TXwV4nYSvEX5XuDtloqicI17HZEmXA7TkfWfuB3PysZQ/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

进入Stream中点击“开始抓包”，然后在抓包历史中就能看到正在抓包了

[https://mmbiz.qpic.cn/sz_mmbiz_png/zZAR4Ynqicp94jK2YM32KZYBTOxibfwC4Sia5sF3KV9jCYB6EQypx6XrfKLPd5RkX9vpCCuBFcHsm6an7SFyhV2Bw/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1](https://mmbiz.qpic.cn/sz_mmbiz_png/zZAR4Ynqicp94jK2YM32KZYBTOxibfwC4Sia5sF3KV9jCYB6EQypx6XrfKLPd5RkX9vpCCuBFcHsm6an7SFyhV2Bw/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

[https://mmbiz.qpic.cn/sz_mmbiz_png/zZAR4Ynqicp94jK2YM32KZYBTOxibfwC4SzdF3KnLVMtcMIrz7L0gWkTEQvUabrYkUQQ850AVGObdWwBZStuWxdA/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1](https://mmbiz.qpic.cn/sz_mmbiz_png/zZAR4Ynqicp94jK2YM32KZYBTOxibfwC4SzdF3KnLVMtcMIrz7L0gWkTEQvUabrYkUQQ850AVGObdWwBZStuWxdA/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

[https://mmbiz.qpic.cn/sz_mmbiz_jpg/zZAR4Ynqicp94jK2YM32KZYBTOxibfwC4SC5jEG4SLvRD9rhmmibI7KZZlOsoIGXzibH1Yjl94Ac4RAHHU56a77O5g/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1](https://mmbiz.qpic.cn/sz_mmbiz_jpg/zZAR4Ynqicp94jK2YM32KZYBTOxibfwC4SC5jEG4SLvRD9rhmmibI7KZZlOsoIGXzibH1Yjl94Ac4RAHHU56a77O5g/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

进入到待抓包的阿里云盘应用中，进行签到领取奖励操作。

[https://mmbiz.qpic.cn/sz_mmbiz_png/zZAR4Ynqicp94jK2YM32KZYBTOxibfwC4S5eRU5L3FrDibhAuqV0BZUuuYdpQSmaicTLYTKAqmicicM16rGRxynczBicQ/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1](https://mmbiz.qpic.cn/sz_mmbiz_png/zZAR4Ynqicp94jK2YM32KZYBTOxibfwC4S5eRU5L3FrDibhAuqV0BZUuuYdpQSmaicTLYTKAqmicicM16rGRxynczBicQ/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

[https://mmbiz.qpic.cn/sz_mmbiz_jpg/zZAR4Ynqicp94jK2YM32KZYBTOxibfwC4ScCyDCCd6jRcIcMQMKfCDEyic0nYnTdVKoIjNvtCJzhURv2NswXJFy5w/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1](https://mmbiz.qpic.cn/sz_mmbiz_jpg/zZAR4Ynqicp94jK2YM32KZYBTOxibfwC4ScCyDCCd6jRcIcMQMKfCDEyic0nYnTdVKoIjNvtCJzhURv2NswXJFy5w/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

此时可以看到域名为member.aliyundrive.com被抓到了，里面包含了刚刚签到操作的包

[https://mmbiz.qpic.cn/sz_mmbiz_jpg/zZAR4Ynqicp94jK2YM32KZYBTOxibfwC4SKOl2rxO8pBoA8ZNeK09dl86t5W8GvHWrVjVvYdMk4xSqq0NZrHUqtg/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1](https://mmbiz.qpic.cn/sz_mmbiz_jpg/zZAR4Ynqicp94jK2YM32KZYBTOxibfwC4SKOl2rxO8pBoA8ZNeK09dl86t5W8GvHWrVjVvYdMk4xSqq0NZrHUqtg/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

[https://mmbiz.qpic.cn/sz_mmbiz_jpg/zZAR4Ynqicp94jK2YM32KZYBTOxibfwC4S0vjdegFYdwq6AZewF9iaKUeQn4uR29M5TQHOludSjBMqicUiaL7Tkb8uw/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1](https://mmbiz.qpic.cn/sz_mmbiz_jpg/zZAR4Ynqicp94jK2YM32KZYBTOxibfwC4S0vjdegFYdwq6AZewF9iaKUeQn4uR29M5TQHOludSjBMqicUiaL7Tkb8uw/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

例如可以看到获取签到列表的POST请求，以及能看到对应的响应数据。

[https://mmbiz.qpic.cn/sz_mmbiz_jpg/zZAR4Ynqicp94jK2YM32KZYBTOxibfwC4SUkgfSsGq3ibgtEBKS6g2pcPNmvTJtDkFFO5shtzrVZ241uabVlPQQWg/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1](https://mmbiz.qpic.cn/sz_mmbiz_jpg/zZAR4Ynqicp94jK2YM32KZYBTOxibfwC4SUkgfSsGq3ibgtEBKS6g2pcPNmvTJtDkFFO5shtzrVZ241uabVlPQQWg/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

这是领取奖励的POST请求，将网址进行拼接就可以获取到api了。

```
https://member.aliyundrive.com/v1/activity/sign_in_reward?_rx-s=mobile
```

[https://mmbiz.qpic.cn/sz_mmbiz_png/zZAR4Ynqicp94jK2YM32KZYBTOxibfwC4Siaia90VmhlRboVYJQnpNqgA4FW4ZrrrDRWO9WU9Ktb9kg7tFD8EiaKcHA/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1](https://mmbiz.qpic.cn/sz_mmbiz_png/zZAR4Ynqicp94jK2YM32KZYBTOxibfwC4Siaia90VmhlRboVYJQnpNqgA4FW4ZrrrDRWO9WU9Ktb9kg7tFD8EiaKcHA/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

当不需要继续抓包时，回到Stream首页点击“停止抓包”即可