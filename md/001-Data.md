# {数据指标}说明 (`{version}`)

> 简介blabla

## 文档面向群体

- 产品
- 研发

---

## 业务驱动方

- {公司} / 保险创新项目团队
- {公司} / 研发一部

## 业务使用方

- {公司} / [保险风控平台](http://ins.sinoiov.cn/)

> 关于保险风控平台

---

## 业务实现方式

- HTTP接口方式 [地址](http://wwww.baidu.com)
- SQOOP数据同步方式[数据库1]() -> [数据库2]()

## 定义

- 车辆静态数据

| 字段 | 具体含义                         |
| -------- | -------------------------------- |
| `sim卡号`    | 终端内置sim卡号                    |
| `车牌号`    | 黄色，车牌号       |
| `经度`    | 经度 |
| `维度`    | 纬度 |
| `速度`    | GPS/北斗 速度                      |
| `高程`    | 高度（单位米）                 |
| `时间`    | UTC时间         |

- 车辆轨迹数据

## 算法简介

> sssss

## 代码

```Python
from random import randint
from time import time, sleep


def download_task(filename):
    print('开始下载%s...' % filename)
    time_to_download = randint(5, 10)
    sleep(time_to_download)
    print('%s下载完成! 耗费了%d秒' % (filename, time_to_download))


def main():
    start = time()
    download_task('Python从入门到住院.pdf')
    download_task('Peking Hot.avi')
    end = time()
    print('总共耗费了%.2f秒.' % (end - start))


if __name__ == '__main__':
    main()
```

## 引用资料

- 引用资料1
- 引用资料2
- 引用资料3

---

## 文档版本

> {version} {author} {日期}

- 创建文件
- 增加基础模板
