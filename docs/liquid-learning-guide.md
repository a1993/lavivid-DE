# Liquid 学习指南（给 JS/TS/React/Vue 开发者）

## 0. 先建立映射关系

- Liquid ~= 服务端模板语言（类似 SSR 阶段的 JSX 模板）
- `{{ ... }}` ~= 输出表达式
- `{% ... %}` ~= 控制语句（if/for/assign/render）
- `|` 过滤器 ~= 函数管道

## 1. 先跑通示例页面

1. 进入 Shopify Admin -> Online Store -> Pages，新建页面：`Liquid Learning`
2. 右侧 `Theme template` 选择：`page.liquid-learning`
3. 打开 Theme Editor，进入这个页面
4. 在 `Liquid learning playground` section 里选择 `Sample product`
5. 打开/关闭 `Show debug info` 观察输出变化

## 2. 每天练习路线

- Day 1：改 `assign`、`upcase`、`replace` 的字符串，确认输出变化
- Day 2：把 if/else 条件改成不同字段（如 `selected_product.available`）
- Day 3：循环 `selected_product.variants`，增加 `limit` 和 `offset`
- Day 4：复制一个卡片，自己写一个“collection 对象”示例
- Day 5：拆出一个 snippet，然后在 section 里 `render` 它
- Day 6：输出 JSON 给 JS 读取（`| json`）
- Day 7：自己新建一个 section + schema（至少 3 个 setting + 1 个 block）

## 3. 推荐重点（按收益排序）

- 对象：`product`、`collection`、`cart`、`customer`
- 标签：`assign`、`if`、`for`、`capture`、`render`
- 过滤器：`money`、`default`、`json`、`escape`、`img_url`/`image_url`
- 结构：`templates` -> `sections` -> `snippets`
- 调试习惯：先输出对象关键字段，再逐步收窄逻辑

## 4. 常见坑

- Liquid 不是 JS，不能直接写 JS 表达式风格
- 空值判断优先用 `blank`
- 注意 `product` 作用域：有些模板里没有 `product` 对象
- `all_products[...]` 能用，但不宜滥用（影响性能/可维护性）

## 5. 下一步进阶任务

做一个“可配置产品卖点” section：
- setting：标题、副标题、选择商品
- blocks：每个 block 一个卖点（图标+文案）
- 页面展示：商品信息 + 卖点列表

做完后你基本就能独立读写多数 Shopify 主题 Liquid 代码。
