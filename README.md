# 紫荆加油站官网模板

这是一个可直接部署到 GitHub Pages 的纯静态企业官网模板，不需要 Node.js、数据库或后端。

## 页面
- `index.html`：首页
- `about.html`：关于紫荆
- `chairman.html`：董事长 / 法人重点介绍
- `honors.html`：企业荣誉与社会责任
- `contact.html`：联系方式

## GitHub Pages 发布
1. 新建 GitHub 仓库，例如 `zijing-gas-station`。
2. 把本目录所有文件上传到仓库根目录。
3. GitHub 仓库进入 `Settings -> Pages`。
4. `Build and deployment` 选择 `Deploy from a branch`。
5. Branch 选择 `main`，目录选择 `/ (root)`，保存。
6. 等待 1-3 分钟后即可通过 GitHub Pages 地址访问。

## 上线前建议核对
- 站名：当前使用“紫荆加油站”。如果你实际要用“紫金加油站”，全局替换“紫荆”为“紫金”即可。
- 董事长 / 法人：当前按提供资料写为“周敬霞”，请以最新工商登记为准。
- 地址、电话、营业时间：请由油站负责人再次确认。
- 图片：站区图片中有 AI 生成示意图。正式企业官网建议逐步替换为现场实拍。
- 荣誉：保留原始证书照片，其他荣誉建议补充扫描件或正式照片。
- ICP：GitHub Pages 通常用于境外托管演示；若后续使用中国大陆服务器和独立域名，请按实际情况处理备案及相关合规事项。

## 替换董事长照片
`chairman.html` 和首页使用了文字型照片占位区。拿到正式肖像后，可将占位区替换为：

```html
<div class="image-frame">
  <img src="assets/images/chairman.jpg" alt="董事长周敬霞">
</div>
```

## 设计说明
整体结构参考成熟能源企业官网常见的信息架构：大图品牌首屏、主营业务、企业简介、人物与文化、企业动态、联系方式；未复制参考网站的具体代码、文案或视觉素材。
