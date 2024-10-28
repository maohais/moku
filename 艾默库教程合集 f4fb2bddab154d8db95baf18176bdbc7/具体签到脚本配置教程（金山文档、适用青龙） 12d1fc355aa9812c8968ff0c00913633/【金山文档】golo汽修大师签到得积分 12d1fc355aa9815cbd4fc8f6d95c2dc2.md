# 【金山文档】golo汽修大师签到得积分

仅用于测试和学习研究，禁止用于商业用途，不能保证其合法性，准确性，完整性和有效性，请根据情况自行判断。本人对任何脚本问题概不负责，包括但不限于由任何脚本错误导致的任何损失或损害。

# **简述**

聚合脚本新增新脚本步骤：

1.复制并运行最新的更新脚本（UPDATE.js)脚本自动新增最新表格及配置

2.复制最新的签到脚本，并添加网络API服务和加入定时任务（若需要邮箱推送需添加邮箱API）

文章中的代码已放入github仓库中

```
https://github.com/imoki
```

(文末会用临时文本的方式附上代码，以利于访问github较慢的使用者采用。由于后期会不定期更新代码功能，因此建议使用者从github上复制最新的代码)

# **准备工作**

[https://mmbiz.qpic.cn/sz_mmbiz_jpg/zZAR4Ynqicp8L1gZvAzrqjOdJjCzlMiaOXRRBFtmWhL8ZibXrel9xurEwu4XbQic3LBRMStDcDEuroQ19TvcdibWXZQ/640?wx_fmt=jpeg&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1](https://mmbiz.qpic.cn/sz_mmbiz_jpg/zZAR4Ynqicp8L1gZvAzrqjOdJjCzlMiaOXRRBFtmWhL8ZibXrel9xurEwu4XbQic3LBRMStDcDEuroQ19TvcdibWXZQ/640?wx_fmt=jpeg&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

需要这个app的登录用户名和密码。后面表格中需要用到。

也可以是下面这个网站的登录用户名和密码。

```
https://cicp.cnlaunch.com
```

注意！因为脚本是利用网站的api进行签到的，因此使用此脚本签到时app会自动退出登录！但是网站的依旧是正常的登录状态，网站签到的积分和app签到的积分是互通的。是否要使用脚本，请自行考虑。

# **实际操作**

[https://mmbiz.qpic.cn/sz_mmbiz_png/zZAR4Ynqicp98I13QI6n2Mu1lXliaJtqnE5ACylDgMhv8w9ibnrP8cY1zX2dqKJmoAMUoJy6FqRspk4TAMzVs719g/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1](https://mmbiz.qpic.cn/sz_mmbiz_png/zZAR4Ynqicp98I13QI6n2Mu1lXliaJtqnE5ACylDgMhv8w9ibnrP8cY1zX2dqKJmoAMUoJy6FqRspk4TAMzVs719g/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

[https://mmbiz.qpic.cn/sz_mmbiz_png/zZAR4Ynqicp98I13QI6n2Mu1lXliaJtqnERvic1HQcq1jPp6EBH3eW7t1Qcr9S2N7nVcBUwbDw0lltHwsdJ4Dw3Hw/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1](https://mmbiz.qpic.cn/sz_mmbiz_png/zZAR4Ynqicp98I13QI6n2Mu1lXliaJtqnERvic1HQcq1jPp6EBH3eW7t1Qcr9S2N7nVcBUwbDw0lltHwsdJ4Dw3Hw/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

[https://mmbiz.qpic.cn/sz_mmbiz_png/zZAR4Ynqicp98I13QI6n2Mu1lXliaJtqnEJhCs93dUHK2bnctSfALCDCLJeIUgVsicpWzXhNMM9ELxhfZ6WtbiaQNw/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1](https://mmbiz.qpic.cn/sz_mmbiz_png/zZAR4Ynqicp98I13QI6n2Mu1lXliaJtqnEJhCs93dUHK2bnctSfALCDCLJeIUgVsicpWzXhNMM9ELxhfZ6WtbiaQNw/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

1.进入github中复制最新的UPDATE.js的代码（此为更新脚本，运行则会自动新增表格配置、不会覆盖原有信息）

```
https://github.com/imoki/sign_script/tree/main/polymerization
```

[https://mmbiz.qpic.cn/sz_mmbiz_png/zZAR4Ynqicp8LoicEcnTWS9ZKajq8j6CSOqoT3YwROtpObvljibFjVaODRJgubfwbKzia0bbdHDzichtRPxFVU7efLw/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1](https://mmbiz.qpic.cn/sz_mmbiz_png/zZAR4Ynqicp8LoicEcnTWS9ZKajq8j6CSOqoT3YwROtpObvljibFjVaODRJgubfwbKzia0bbdHDzichtRPxFVU7efLw/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

[https://mmbiz.qpic.cn/sz_mmbiz_png/zZAR4Ynqicpictnj7jiciaa6uice2fu4bb1DbZnnicUUMTgbFlFub5icIWVTuwdZ8kurbqAeRRQicCHBxRjyagNia9mia51A/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1](https://mmbiz.qpic.cn/sz_mmbiz_png/zZAR4Ynqicpictnj7jiciaa6uice2fu4bb1DbZnnicUUMTgbFlFub5icIWVTuwdZ8kurbqAeRRQicCHBxRjyagNia9mia51A/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

2.将复制的UPDATE.js代码粘贴到脚本编辑器中，点击"保存"，再点击运行。当UPDATE脚本运行完后，会自动生成配置表格。

[https://mmbiz.qpic.cn/sz_mmbiz_png/zZAR4YnqicpiblRSJYR7DaBmFTl8vBnuDsms4iaMEdNV0wJfr8sjgxhDC6jwqp9sXyXmLNVA8KeLWXLibtia60mQvmQ/640?wx_fmt=png&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1](https://mmbiz.qpic.cn/sz_mmbiz_png/zZAR4YnqicpiblRSJYR7DaBmFTl8vBnuDsms4iaMEdNV0wJfr8sjgxhDC6jwqp9sXyXmLNVA8KeLWXLibtia60mQvmQ/640?wx_fmt=png&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

[https://mmbiz.qpic.cn/sz_mmbiz_png/zZAR4YnqicpiblRSJYR7DaBmFTl8vBnuDsKq7JaDOKibmibUtCFn0dputo3ibXicCkjFx2JcmOicKYGjoHl5ntq3A9Z7w/640?wx_fmt=png&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1](https://mmbiz.qpic.cn/sz_mmbiz_png/zZAR4YnqicpiblRSJYR7DaBmFTl8vBnuDsKq7JaDOKibmibUtCFn0dputo3ibXicCkjFx2JcmOicKYGjoHl5ntq3A9Z7w/640?wx_fmt=png&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

[https://mmbiz.qpic.cn/sz_mmbiz_png/zZAR4Ynqicp8LoicEcnTWS9ZKajq8j6CSOZ7aekT0okW0s5F0AfJ9dIN3bpEhLQEczIuhWo3BmhgtE4tbm6n06Vw/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1](https://mmbiz.qpic.cn/sz_mmbiz_png/zZAR4Ynqicp8LoicEcnTWS9ZKajq8j6CSOZ7aekT0okW0s5F0AfJ9dIN3bpEhLQEczIuhWo3BmhgtE4tbm6n06Vw/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

[https://mmbiz.qpic.cn/sz_mmbiz_png/zZAR4Ynqicp8L1gZvAzrqjOdJjCzlMiaOXZXkd8ibJ8iatHldLicPaL8E6LyFPK5F1oVN15h71BbgdFm81zxEtFyQDA/640?wx_fmt=png&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1](https://mmbiz.qpic.cn/sz_mmbiz_png/zZAR4Ynqicp8L1gZvAzrqjOdJjCzlMiaOXZXkd8ibJ8iatHldLicPaL8E6LyFPK5F1oVN15h71BbgdFm81zxEtFyQDA/640?wx_fmt=png&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

3.进入github中，复制所需脚本代码，如golo.js。点击"+"将代码粘贴到编辑器内，并点击保存。

[https://mmbiz.qpic.cn/sz_mmbiz_png/zZAR4Ynqicp9RicR4Ek2MYvy0Nll9Sh21x1mwkasvMgWlsFnbicibyYPbiaqvMfYxpEEiaNtxyqcbJWEYpeGZ5sbNZjQ/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1](https://mmbiz.qpic.cn/sz_mmbiz_png/zZAR4Ynqicp9RicR4Ek2MYvy0Nll9Sh21x1mwkasvMgWlsFnbicibyYPbiaqvMfYxpEEiaNtxyqcbJWEYpeGZ5sbNZjQ/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

4.按图所示，点击“服务”-“添加服务”，再点击“网络API”对应的“添加”按钮。

[https://mmbiz.qpic.cn/sz_mmbiz_png/zZAR4Ynqicp8L1gZvAzrqjOdJjCzlMiaOXZXkd8ibJ8iatHldLicPaL8E6LyFPK5F1oVN15h71BbgdFm81zxEtFyQDA/640?wx_fmt=png&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1](https://mmbiz.qpic.cn/sz_mmbiz_png/zZAR4Ynqicp8L1gZvAzrqjOdJjCzlMiaOXZXkd8ibJ8iatHldLicPaL8E6LyFPK5F1oVN15h71BbgdFm81zxEtFyQDA/640?wx_fmt=png&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

5.填写分配置表的内容，如golo表中第一列填的上述准备工作中获得到的所需要的值，只填用户名和密码就可以了。

（5.1. 可对点击“运行”进行测试。此测试步骤可忽略）

[https://mmbiz.qpic.cn/sz_mmbiz_png/zZAR4Ynqicp9RicR4Ek2MYvy0Nll9Sh21xNzjWDls3KRtB3Okf2RkWKzC1qAuaG36wNXx67IGjgYbJwWzU5rSLPA/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1](https://mmbiz.qpic.cn/sz_mmbiz_png/zZAR4Ynqicp9RicR4Ek2MYvy0Nll9Sh21xNzjWDls3KRtB3Okf2RkWKzC1qAuaG36wNXx67IGjgYbJwWzU5rSLPA/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

6.依次点击“高级开发”-“定时任务”，将刚刚的脚本添加到定时任务中。

[https://mmbiz.qpic.cn/sz_mmbiz_png/zZAR4Ynqicp8LoicEcnTWS9ZKajq8j6CSO61Q7bS6xh6gfwfS0WlW7fh9cOYa3H0QcDZsvtdR7BSibaBZjfbNY2Ig/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1](https://mmbiz.qpic.cn/sz_mmbiz_png/zZAR4Ynqicp8LoicEcnTWS9ZKajq8j6CSO61Q7bS6xh6gfwfS0WlW7fh9cOYa3H0QcDZsvtdR7BSibaBZjfbNY2Ig/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

[https://mmbiz.qpic.cn/sz_mmbiz_png/zZAR4Ynqicp9RicR4Ek2MYvy0Nll9Sh21x16UDEgnAO4jPSoOj8ukFd0B9f1149G0nic0uices5ECFibmgtmLCvgicUA/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1](https://mmbiz.qpic.cn/sz_mmbiz_png/zZAR4Ynqicp9RicR4Ek2MYvy0Nll9Sh21x16UDEgnAO4jPSoOj8ukFd0B9f1149G0nic0uices5ECFibmgtmLCvgicUA/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

7.点击“创建任务”-“每天”，选择此脚本。此时就完成了，每天指定时间将会执行脚本。