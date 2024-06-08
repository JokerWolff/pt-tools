命令行执行 `pip install -r requirements.txt`安装需要的依赖包

执行以下代码进行使用(以下代码包含于`test.py`之中)
```python3
from TransmissionAPI import TransmissionParser

host = 'localhost'
port = 9091
username = ''
pwd = ''
tp = TransmissionParser(host, port, username, pwd) # 此处传入参数可留空，若留空则使用上述默认参数
tp.toExcel()

```