# oock

```
npm install oock -g
```

## #参数

* `-d directory`：mock数据文件路径
* `-c config`：配置文件路径
* `-h host`：服务启动host
* `-p port`：服务启动端口
* `-c cors`：是否支持跨域
* `-P proxy`：代理域名
* `-t to`：代理域名到
* `tls` ：支持https
* `key`：https key文件路径
* `cert`：https pem文件路径
* `httpsPort`：https服务端口
* `wechatConfig`：微信相关配置
* `-w watch`：是否监听文件改动

## #使用
#### 1. 使用配置文件启动服务
		oock -c ./config.json

##### 配置文件格式：
```
{
	directory: './mock',
	host: '0.0.0.0',
	port: 3344,
	cors: true,
	proxy: 'www.pandateacher.com',
	to: '127.0.0.1:8080',
	watch: true,
	...
}
```

#### 2. 使用命令行参数启动服务
		oock -p 80 -h 127.0.0.1 -d ./mock -w

## #mock数据格式
#### 1. 正常使用
```
{
	'get /a': {
		data: {}
	}
}
```

#### 2. 添加请求延时
```
{
	'get /a 200': {
		data: {}
	}
}
```

#### 3. 中间件
```
{
	'post /a': (ctx)=>{}
}
```

#### 4. 多个中间件
```
{
	'post /a': [
		(ctx, next)=>{},
		(ctx, next)=>{},
		(ctx, next)=>{}
	]
}
```