## Deno DEMO

一个拥有页面渲染和数据库操作的简单测试用项目，增删查改也实现，数据验证搁置，因为本是测试用的。

![](https://github.com/mopiw/deno-demo/blob/main/static/img/2020-11-24_02-56-56.png)

**需要环境：**

- Deno 1.5
- MySQL 5.7

### SQL

```sql
CREATE TABLE `deno`.`Untitled`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `price` decimal(10, 2) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 14 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;
```

### RUN

```shell
deno run --allow-net --allow-read --allow-write main.ts
```
