title: 这是一个测试页
date: 2015-10-29 18:44:12
permalink: hello
tags:
- SQL
categories:
- 这是一个测试页

---

这个博客系统用到了 nodejs/hexo，github，七牛云存储，markdown，HTML

**本博客系统使用markdown语法编辑**

SQL查询相关 bash块
```{bash}
INSERT INTO table(field1,field2,field3) VALUES(value1,value2,value3)
SELECT * FROM table WHERE id=1
UPDATE table SET field1=value1 WHERE id=1
DELETE FROM table WHERE id=3
```
## SQL查询相关 代码块
{% codeblock PHP http://php.net php %}
INSERT INTO table(field1,field2,field3) VALUES(value1,value2,value3)
SELECT * FROM table WHERE id=1
UPDATE table SET field1=value1 WHERE id=1
DELETE FROM table WHERE id=3
{% endcodeblock %}

## 引用
{% blockquote Seth Godin http://piniing.github.io/blog/ Welcome to Island Marketing %}
这是引用
{% endblockquote %}

## 代码块
{% codeblock PHP http://php.net php %}
$array = array(
    'key1' => 'value1',
    'key2' => 'value3',
    'key3' => 'value3'
);
{% endcodeblock %}

## 链接
{% link 我的博客 http://piniing.github.io/blog/ true 我的博客 %}

## 用七牛云存储的图片
{% img http://7xnw9f.com1.z0.glb.clouddn.com/IMG_0241.JPG?imageView2/1/w/600/h/800 600 800 花 %}
{% img http://7xnw9f.com1.z0.glb.clouddn.com/IMG_0229.JPG?imageView2/1/w/600/h/800 600 800 宝贝 %}
{% img http://7xnw9f.com1.z0.glb.clouddn.com/IMG_0230.JPG?imageView2/1/w/600/h/800 600 800 宝贝 %}

