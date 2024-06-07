from TransmissionAPI import TransmissionParser

host = 'localhost'
port = 9091
username = ''
pwd = ''
tp = TransmissionParser(host, port, username, pwd) # 此处传入参数可留空，若留空则使用上述默认参数
tp.to_excel()
print(tp.to_json())