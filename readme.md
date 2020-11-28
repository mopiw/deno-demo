## Deno DEMO

一个拥有页面渲染和数据库操作的简单测试用项目，增删查改也实现，数据验证搁置，因为本是测试用的。

![](https://github.com/mopiw/deno-demo/blob/main/static/img/2020-11-24_02-56-56.png)

**使用到的模块和环境：**

- [Deno](https://github.com/denoland/deno/releases/tag/v1.5.4) 1.5+
- [MySQL](https://dev.mysql.com/downloads/installer/) 5.7+ (※ 注意 Deno 暂时不支持 MySQL 8.0+ 新加入的身份验证，但也提供老版本身份验证选择)
- [oak](https://deno.land/x/oak) 6.3.2+
- [view-engine](https://deno.land/x/view_engine) 1.4.5 (※ 老版本配合新版本 oak 会报错，说的就是你 1.3.0)

### SQL

```sql
CREATE TABLE `deno`.`Untitled`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `price` decimal(10, 2) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 14 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;
```

### 运行

需要读/写/网络权限

```shell
deno run --allow-net --allow-read --allow-write main.ts
```
