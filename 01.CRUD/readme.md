1. 运行

```
deno run --allow-net server.ts
```

2. 地址：http://localhost:8000

3. API请求

- 请求全部数据：http://localhost:8000/games
- 请求单个数据：http://localhost:8000/game/:id
- 增加数据（POST）：http://localhost:8000/game
- 修改数据（PUT）：http://localhost:8000/game
- 删除数据（DELETE）：http://localhost:8000/game