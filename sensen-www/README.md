# 生生 (SenSen) 官网

这是一个基于 **Vue 3** + **Vite** + **TypeScript** + **Ant Design Vue** 构建的生生 (SenSen) 官方产品介绍网站。

## 项目简介

本项目旨在为用户展示“硅基灵魂”的理念、核心功能、应用场景，并引导用户加入生生社区或联系我们。

## 技术栈

- **前端框架**: [Vue 3](https://vuejs.org/) (Composition API)
- **构建工具**: [Vite](https://vitejs.dev/)
- **语言**: [TypeScript](https://www.typescriptlang.org/)
- **UI 组件库**: [Ant Design Vue](https://antdv.com/)
- **状态管理**: [Pinia](https://pinia.vuejs.org/)
- **路由**: [Vue Router](https://router.vuejs.org/)

## 开发指南

### 推荐 IDE 配置

- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (并禁用 Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

### 构建生产版本

```bash
npm run build
```

### 预览生产构建

```bash
npm run preview
```

## 目录结构

- `src/views/HomeView.vue`: 首页主文件，包含 Hero、Feature、Scenario、Contact 等部分。
- `src/App.vue`: 全局布局文件，包含顶部导航栏 (Navbar) 和移动端抽屉菜单 (Drawer)。
- `src/assets/`: 静态资源文件（图片、图标）。
- `public/`: 公共资源文件（如 `logo.svg`）。

## 贡献注意事项

- **样式**: 主要使用 Vue 单文件组件 (SFC) 内的 `<style scoped>`，结合 Ant Design Vue 的样式覆盖。
- **响应式**: 针对移动端 (max-width: 768px) 做了适配，开发新功能时请务必测试移动端显示效果。
