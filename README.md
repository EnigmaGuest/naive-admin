# 项目说明
比较简洁的vue3+ts+naive-ui+unocss的后台管理系统模板,适合再次开发。项目只有简单的页面，没有复杂的业务逻辑，只是一个简单的模板，适合新手学习。   
## 项目特点
- 使用pnpm管理依赖
- 使用vite构建项目
- 使用unocss进行样式管理
- 使用naive-ui组件库管理
- 使用vue-router进行路由管理
- 使用pinia进行状态管理,且实现加密持久化
- svg图标使用iconify进行管理
- 可显示本地svg图标且可动态修改颜色
- 动态标签页可左右拖动以及右键菜单
## 项目结构
```bash
├── README.md
├── package.json
├── 待添加
```
## 项目依赖
- [vue](https://cn.vuejs.org/)
- 待添加
## 项目运行
```bash
# 安装依赖
pnpm i
# 启动项目
pnpm run serve
```
# Tips
## svg动态颜色
需要把下载的svg填充的颜色数值替换成 currentColor 即可 fill="currentColor"

### 未完成
- [ ] keep-alive缓存未生效
- [ ] 未添加axios