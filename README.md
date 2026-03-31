## Umi4 + qiankun 微前端 Demo

这个 Demo 包含 3 个应用：

- `host-umi-react`：主应用（Umi4 + React + qiankun）
- `sub-vue-vite`：子应用（Vue3 + Vite）
- `sub-vanilla`：子应用（原生 JS + HTML + Vite）

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
└── sub-vanilla
```

## 运行方式

分别打开 3 个终端：

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

3. 启动 Umi 主应用

```bash
cd host-umi-react
pnpm dev
```

## 访问地址

- 主应用: `http://localhost:8000`
- 主应用内整合访问（qiankun）:
  - Vue 子应用: `http://localhost:8000/vue`
  - 原生子应用: `http://localhost:8000/vanilla`
- 子应用独立访问:
  - Vue 子应用: `http://localhost:7101`
  - 原生子应用: `http://localhost:7102`
