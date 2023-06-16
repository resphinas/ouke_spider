

# 爬取 OKLink 网站的 BTC 交易记录

本代码文件 `main.py` 实现了通过爬取 OKLink 网站的 BTC 交易记录来获取区块链数据的功能。该程序使用 Python 3 语言编写，并使用了 `requests` 库和 `execjs` 库来实现爬取和加密等功能。

## 程序文件和依赖库

* `main.py`：程序主文件。
* `decode.js`：包含用于生成密匙的 JavaScript 代码。
* `requests` 库：用于向 OKLink 网站发送 HTTP 请求。
* `execjs` 库：用于在 Python 中运行 JavaScript 代码。

## 使用方法

1. 下载并安装 Python 3。
2. 下载本代码文件及其依赖库。
3. 在 Python 环境中安装 `requests` 库和 `execjs` 库。可以使用以下命令安装：

   ```
   pip install requests execjs
   ```

4. 运行 `main.py` 文件。

## 主要功能

本程序实现了以下功能：

* 生成用于向 OKLink 网站发送请求的密匙。
* 向 OKLink 网站发送 HTTP 请求，获取 BTC 交易记录。
* 解析返回的 JSON 格式数据，获取交易信息。

## 实现原理

本程序通过以下步骤实现了爬取 BTC 交易记录的功能：

1. 使用 JavaScript 代码生成密匙。JavaScript 代码包含在 `decode.js` 文件中。
2. 在 Python 程序中调用 JavaScript 代码，生成密匙。
3. 构造 HTTP 请求头部和请求参数，包括密匙和时间戳等信息。
4. 使用 `requests` 库向 OKLink 网站发送 HTTP 请求。
5. 解析返回的 JSON 格式数据，获取 BTC 交易记录。

## 注意事项

* 本程序仅用于学习和研究区块链技术，禁止用于任何违法用途。
* OKLink 网站可能会不定期更新其 API 接口，导致本程序无法正常运行。如果程序不能正常运行，请检查 API 接口是否发生了变化，并根据需要更新程序代码。
* 程序在发送请求时需要使用代理服务器，请自行购买和配置代理服务器，并在程序中设置代理服务器的地址和端口号。

## 参考资料

* [Python requests 库使用教程](https://www.runoob.com/w3cnote/python-requests-detail.html)
* [Python execjs 库使用教程](https://blog.csdn.net/weixin_45757302/article/details/108310556)
