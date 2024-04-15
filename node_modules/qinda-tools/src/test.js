// 导入依赖模块
const express = require('express');

// 配置应用程序
const app = express();
const port = 3000;

// 启动代码
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
