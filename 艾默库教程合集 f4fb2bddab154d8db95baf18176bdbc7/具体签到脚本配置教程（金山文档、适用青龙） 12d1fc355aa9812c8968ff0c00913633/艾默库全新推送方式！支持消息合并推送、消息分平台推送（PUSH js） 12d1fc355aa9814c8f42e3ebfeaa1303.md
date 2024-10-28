# 艾默库全新推送方式！支持消息合并推送、消息分平台推送（PUSH.js）

仅用于测试和学习研究，禁止用于商业用途，不能保证其合法性，准确性，完整性和有效性，请根据情况自行判断。本人对任何脚本问题概不负责，包括但不限于由任何脚本错误导致的任何损失或损害。

**简述**

聚合脚本新增新脚本步骤：

1.复制并运行最新的更新脚本（UPDATE.js)脚本自动新增最新表格及配置

2.复制最新的签到脚本，并添加网络API服务和加入定时任务（若需要邮箱推送需添加邮箱API）

文章中的代码已放入github仓库中

```
https://github.com/imoki
```

(文末会用临时文本的方式附上代码，以利于访问github较慢的使用者采用。由于后期会不定期更新代码功能，因此建议使用者从github上复制最新的代码)

# **说明**

[https://mmbiz.qpic.cn/sz_mmbiz_png/zZAR4YnqicpicxHL02WzO5KXpNiaHcZMAQDnRO0SH3uHicSaGVuqiaZic9Omw8zSR4Nhtk8SNXpRIul2mTNqhExxHomw/640?wx_fmt=png&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1](https://mmbiz.qpic.cn/sz_mmbiz_png/zZAR4YnqicpicxHL02WzO5KXpNiaHcZMAQDnRO0SH3uHicSaGVuqiaZic9Omw8zSR4Nhtk8SNXpRIul2mTNqhExxHomw/640?wx_fmt=png&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

本次更新针对金山文档。本次更新新增功能独立多平台推送、消息池整合推送、只生成存活的表格配置。

**推送方式：**

**@all方式代表在PUSH表内的消息推送平台都推送（bark、pushplus、钉钉等等）**

**bark方式代表，仅用推送bark**

**dingtalk方式代表，仅用推送钉钉**

**bark&pushplus方式，同时推送bark和pushplus。用&连接**

**bark&email&pushplus方式，同时推送bark、email和pushplus。**

**加入消息池：**

这个的意思是“加入消息池”选项勾选“是”的就会**合并为一条消息进行通知**，以@all方式推送。例如你运行了8个签到任务，那么在某个时刻只收到1条通知消息。

默认为“否”，代表每个签到结果都用**独立的一条**消息通知。例如你运行了8个签到任务，那么在某个时刻会同时收到8条通知消息。

# 如何使用（三步走，已使用原签到脚本，也需更新具体签到脚本）

1. **更新UPDATE脚本**

从github复制最新UPDATE.js脚本，并运行，即可生成最新的CONFIG表格。

[https://mmbiz.qpic.cn/sz_mmbiz_png/zZAR4Ynqicp9KWIjLlsFk7Vhjs2icvfNp0MwsciaEA8wUlxaRPATzfFN4ozlpMn7qUkvxxtWW1urQu6K7Mz6GNbgQ/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp](https://mmbiz.qpic.cn/sz_mmbiz_png/zZAR4Ynqicp9KWIjLlsFk7Vhjs2icvfNp0MwsciaEA8wUlxaRPATzfFN4ozlpMn7qUkvxxtWW1urQu6K7Mz6GNbgQ/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

[https://mmbiz.qpic.cn/sz_mmbiz_png/zZAR4Ynqicp9KWIjLlsFk7Vhjs2icvfNp0ooVEnOwU08HWSAEtzUUg5LYqOHu1b7LbQqoQnaa7dZjIQs2SDww4Wg/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp](https://mmbiz.qpic.cn/sz_mmbiz_png/zZAR4Ynqicp9KWIjLlsFk7Vhjs2icvfNp0ooVEnOwU08HWSAEtzUUg5LYqOHu1b7LbQqoQnaa7dZjIQs2SDww4Wg/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

[https://mmbiz.qpic.cn/sz_mmbiz_png/zZAR4Ynqicp9KWIjLlsFk7Vhjs2icvfNp0STUucDT2YjfuRBE7QmKcn4ZyaF3OE9VVAEJs41iap7OaibskvZPrZUfw/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp](https://mmbiz.qpic.cn/sz_mmbiz_png/zZAR4Ynqicp9KWIjLlsFk7Vhjs2icvfNp0STUucDT2YjfuRBE7QmKcn4ZyaF3OE9VVAEJs41iap7OaibskvZPrZUfw/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

进入github中复制最新的UPDATE.js的代码（此为更新脚本，运行则会自动新增表格配置、不会覆盖原有信息）

[https://mmbiz.qpic.cn/sz_mmbiz_png/zZAR4Ynqicp9KWIjLlsFk7Vhjs2icvfNp0qx3wrL78IvziaZrMsJN61TAKV0ncYlQJ3v0lciannI9vEibGBnZLlA5oA/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp](https://mmbiz.qpic.cn/sz_mmbiz_png/zZAR4Ynqicp9KWIjLlsFk7Vhjs2icvfNp0qx3wrL78IvziaZrMsJN61TAKV0ncYlQJ3v0lciannI9vEibGBnZLlA5oA/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

[https://mmbiz.qpic.cn/sz_mmbiz_png/zZAR4Ynqicp9KWIjLlsFk7Vhjs2icvfNp0sH4zmwftO9B4wfwDbn2qdcVzxSAsTc1nr00ibeWickJcPIO7OvkfN4kw/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp](https://mmbiz.qpic.cn/sz_mmbiz_png/zZAR4Ynqicp9KWIjLlsFk7Vhjs2icvfNp0sH4zmwftO9B4wfwDbn2qdcVzxSAsTc1nr00ibeWickJcPIO7OvkfN4kw/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

将复制的UPDATE.js代码粘贴到脚本编辑器中，点击"保存"，再点击运行。当UPDATE脚本运行完后，会自动生成配置表格。

[https://mmbiz.qpic.cn/sz_mmbiz_png/zZAR4Ynqicp9KWIjLlsFk7Vhjs2icvfNp0XTA8lziaGEgQRePuVJDBAE9RicEUYoRdCricCwMIe7hMYrjSicF20xNzrQ/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp](https://mmbiz.qpic.cn/sz_mmbiz_png/zZAR4Ynqicp9KWIjLlsFk7Vhjs2icvfNp0XTA8lziaGEgQRePuVJDBAE9RicEUYoRdCricCwMIe7hMYrjSicF20xNzrQ/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

**2.加PUSH脚本**

从github复制最新的PUSH.js脚本。添加API

[https://mmbiz.qpic.cn/sz_mmbiz_png/zZAR4YnqicpicxHL02WzO5KXpNiaHcZMAQDe083Zmvbq5MWfV63wEtZRRQRozmh1niccJyyCFYxa2brYncTAlcLF3w/640?wx_fmt=png&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1](https://mmbiz.qpic.cn/sz_mmbiz_png/zZAR4YnqicpicxHL02WzO5KXpNiaHcZMAQDe083Zmvbq5MWfV63wEtZRRQRozmh1niccJyyCFYxa2brYncTAlcLF3w/640?wx_fmt=png&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

（如果第一次用PUSH脚本，记得添加服务，网络API和邮箱API。按图所示，点击“服务”-“添加服务”，再点击“网络API”、“邮箱API”对应的“添加”按钮。）

[https://mmbiz.qpic.cn/sz_mmbiz_png/zZAR4Ynqicp9KWIjLlsFk7Vhjs2icvfNp03f9qwApDzHjekmflOHiamnibPkpE3plAicmSFGkK5iarZ13KozPxJxqGqg/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp](https://mmbiz.qpic.cn/sz_mmbiz_png/zZAR4Ynqicp9KWIjLlsFk7Vhjs2icvfNp03f9qwApDzHjekmflOHiamnibPkpE3plAicmSFGkK5iarZ13KozPxJxqGqg/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

**3.将PUSH脚本加入定时任务**。

PUSH定时任务的时间可以定在所有任务执行完后的时间。

也可以一天定多个PUSH定时任务，时间任意，例如：8:00、12:00、16:00。时间到后会检查哪些脚本没推送，就会进行推送了。

[https://mmbiz.qpic.cn/sz_mmbiz_png/zZAR4YnqicpicxHL02WzO5KXpNiaHcZMAQD5DJj3DS6eAMNbMNcXug0TOuF5iaRuLgSdTUOPWhibVXZEb2F84yzx9vg/640?wx_fmt=png&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1](https://mmbiz.qpic.cn/sz_mmbiz_png/zZAR4YnqicpicxHL02WzO5KXpNiaHcZMAQD5DJj3DS6eAMNbMNcXug0TOuF5iaRuLgSdTUOPWhibVXZEb2F84yzx9vg/640?wx_fmt=png&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

依次点击“高级开发”-“定时任务”，将刚刚的脚本添加到定时任务中。

[https://mmbiz.qpic.cn/sz_mmbiz_png/zZAR4Ynqicp9KWIjLlsFk7Vhjs2icvfNp08gsd9S83P6MjibUiaaAHbdm4VHzOMMUatKXEBYUL47agF985f7BLQkqg/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp](https://mmbiz.qpic.cn/sz_mmbiz_png/zZAR4Ynqicp9KWIjLlsFk7Vhjs2icvfNp08gsd9S83P6MjibUiaaAHbdm4VHzOMMUatKXEBYUL47agF985f7BLQkqg/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

[https://mmbiz.qpic.cn/sz_mmbiz_png/zZAR4Ynqicp9RicR4Ek2MYvy0Nll9Sh21x16UDEgnAO4jPSoOj8ukFd0B9f1149G0nic0uices5ECFibmgtmLCvgicUA/640?wx_fmt=other&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp](https://mmbiz.qpic.cn/sz_mmbiz_png/zZAR4Ynqicp9RicR4Ek2MYvy0Nll9Sh21x16UDEgnAO4jPSoOj8ukFd0B9f1149G0nic0uices5ECFibmgtmLCvgicUA/640?wx_fmt=other&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

点击“创建任务”-“每天”，选择此脚本。此时就完成了，每天指定时间将会进行推送。

# **问题**

**问：推送方式填的英文字母哪里来的。PUSH表第一列的推送类型。如bark。**

[https://mmbiz.qpic.cn/sz_mmbiz_png/zZAR4YnqicpicxHL02WzO5KXpNiaHcZMAQDD4zAve7qOrBs9VLOVriamWMd9dpJopDJmcWYibDibdq9rHG4bQk3j23XA/640?wx_fmt=png&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1](https://mmbiz.qpic.cn/sz_mmbiz_png/zZAR4YnqicpicxHL02WzO5KXpNiaHcZMAQDD4zAve7qOrBs9VLOVriamWMd9dpJopDJmcWYibDibdq9rHG4bQk3j23XA/640?wx_fmt=png&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

**问：CONFIG和PUSH推送的优先级**

PUSH表作为某个推送类型的总开关，例如PUSH表中bark选择了“否”，其他推送方式选择了“是”。

那么即使CONFIG表”是否通知“选择”是“且推送方式为“bark”，都不会进行推送bark推送。

但是如果推送方式为@all，那么仅”bark“方式不推送，PUSH表其他选择“是”的推送方式都推送

如果CONFIG的“是否通知”选择“否”，那么就完全不推送

**问：我想所有消息都合为一条推送怎么弄**

CONFIG表，“加入消息池”全部选择“是”即可