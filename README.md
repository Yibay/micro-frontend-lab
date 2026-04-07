## Umi4 + qiankun + wujie 微前端 Demo

这个 Demo 包含 5 个应用：

- `host-umi-react`：主应用（Umi4 + React + qiankun + wujie）
- `sub-vue-vite`：子应用（Vue3 + Vite）
- `sub-vanilla`：子应用（原生 JS + HTML + Vite）
- `sub-umi-react`：子应用（Umi4 + React）
- `sub-react-vite`：子应用（React + Vite，通过 wujie 加载）

## 环境要求

- **Node**: 推荐使用 `24.14.1`（已在 `.nvmrc` 中指定，`engines` 要求为 `>=24.14.1 <25.0.0`）
- **包管理器**: `pnpm@10.33.0`（通过 `packageManager` 字段指定，`engines.pnpm` 要求 `>=10.0.0`）

## 准备环境

1. **切换 Node 版本（使用 nvm）**

```bash
nvm use
```

（确保当前目录下的 `.nvmrc` 生效，如果没有安装 `nvm`，请先安装 nvm 并重新打开终端。）

2. **启用 corepack**

```bash
corepack enable
```

> 启用后会自动根据 `package.json` 中的 `packageManager` 字段，使用对应版本的 `pnpm`。

## 目录结构

```txt
.
├── host-umi-react
├── sub-vue-vite
├── sub-vanilla
├── sub-umi-react
└── sub-react-vite
```

## 运行方式

分别打开 5 个终端：

先在根目录安装所有依赖：

```bash
pnpm install
```

1. 启动 Vue 子应用

```bash
cd sub-vue-vite
pnpm dev
```

2. 启动原生子应用

```bash
cd sub-vanilla
pnpm dev
```

3. 启动 Umi 子应用

```bash
cd sub-umi-react
pnpm dev
```

4. 启动 React Vite 子应用

```bash
cd sub-react-vite
pnpm dev
```

5. 启动 Umi 主应用

```bash
cd host-umi-react
pnpm dev
```

## 访问地址

- 主应用: `http://localhost:8000`
- 主应用内整合访问（qiankun/wujie）:
  - Vue 子应用: `http://localhost:8000/vue/home`
  - Umi 子应用: `http://localhost:8000/umi/home`
  - 原生子应用: `http://localhost:8000/vanilla`
  - React Vite 子应用: `http://localhost:8000/react`
- 子应用独立访问:
  - Vue 子应用: `http://localhost:7101/vue/home`
  - Umi 子应用: `http://localhost:8001`
  - 原生子应用: `http://localhost:7102`
  - React Vite 子应用: `http://localhost:7103`
