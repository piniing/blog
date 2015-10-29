title: 新的开始
date: 2015-10-29 18:44:12
permalink: abc
tags:
- hexo
categories:
- 日志
- 第一天

---

这是**新的开始**，我用hexo创建了第一篇文章。

通过下面的命令，就可以创建新文章
```{bash}
D:\workspace\javascript\nodejs-hexo>hexo new 新的开始
[info] File created at D:\workspace\javascript\nodejs-hexo\source\_posts\新的开始.md
```

感觉非常好。


## 引用
{% blockquote Seth Godin http://sethgodin.typepad.com/seths_blog/2009/07/welcome-to-island-marketing.html Welcome to Island Marketing %}
Every interaction is both precious and an opportunity to delight.
{% endblockquote %}

## 代码块
{% codeblock .compact http://underscorejs.org/#compact Underscore.js %}
.compact([0, 1, false, 2, ‘’, 3]);
=> [1, 2, 3]
{% endcodeblock %}

## 链接
{% link 粉丝日志 http://blog.fens.me true 粉丝日志 %}

## 图片
{% img /images/fens.me.png 400 600 这是一张图片 %}