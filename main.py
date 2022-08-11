import execjs
import re
import time
import requests
from lxpy import copy_headers_dict

class spider():
    def __init__(self):
        self.key = None

        self.url = "https://www.oklink.com/api/explorer/v1/btc/transactionsNoRestrict?"
        self.headers = copy_headers_dict("""
            Accept: application/json
            Accept-Encoding: gzip, deflate, br
            Accept-Language: zh-CN
            App-Type: web
            Connection: keep-alive
            devId: 304e23ad-0547-4ee4-9ac0-a0aff59d0b24
            Host: www.oklink.com
            Referer: https://www.oklink.com/zh-cn/btc/tx-list?limit=20&pageNum=2
            sec-ch-ua: "Chromium";v="104", " Not A;Brand";v="99", "Google Chrome";v="104"
            sec-ch-ua-mobile: ?0
            sec-ch-ua-platform: "Windows"
            Sec-Fetch-Dest: empty
            Sec-Fetch-Mode: cors
            Sec-Fetch-Site: same-origin
            User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36
            x-apiKey: {}
            x-cdn: https://static.oklink.com
            x-utc: 8
        """.format(self.key))
        self.time = None
        self.data = {
            't': self.time,
            "limit": 20,
            "offset": 20
        }

    def get_apikey(self):
        js_file = open("decode.js", "r", encoding="utf-8").read()
        ctx = execjs.compile(js_file)

        self.key = ctx.call("comb")
        print("生成密匙成功 值为{}".format(self.key))
        self.headers["x-apiKey"] = self.key

    def scrapy(self):

        print("正在爬取数据 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
        s = requests.session()
        print(self.headers)
        self.data["t"] = round(time.time()*1000)
        import json
        print(self.data)
        res = s.get(self.url, headers=self.headers, params=self.data)
        print(res.url)
        print(res.text)
        print(res.json())


Spider = spider()
Spider.get_apikey()
Spider.scrapy()


