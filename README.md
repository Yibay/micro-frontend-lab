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
- **构建工具**: `turbo`（已配置为 monorepo 构建工具）
- **Docker**: 可选，用于生产环境部署

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
├── apps/
│   ├── host-umi-react    # 主应用（Umi4 + React + qiankun + wujie）
│   ├── sub-vue-vite      # 子应用（Vue3 + Vite）
│   ├── sub-vanilla       # 子应用（原生 JS + HTML + Vite）
│   ├── sub-umi-react     # 子应用（Umi4 + React）
│   └── sub-react-vite    # 子应用（React + Vite，通过 wujie 加载）
└── packages/
    └── types             # 共享类型定义
```

## Turborepo 使用

本项目已接入 **Turborepo**，用于 monorepo 管理和智能构建缓存。

### 快速命令

```bash
# 安装所有依赖
pnpm install

# 启动所有应用（开发模式）
pnpm dev

# 构建所有应用（带智能缓存）
pnpm build

# 代码检查
pnpm lint
```

### 命令说明

| 命令 | 说明 |
|------|------|
| `pnpm dev` | 启动所有应用（开发模式） |
| `pnpm build` | 构建所有应用（自动处理依赖关系） |
| `pnpm lint` | 运行所有应用的 lint 检查 |
| `pnpm dev:host` | 启动主应用 |
| `pnpm dev:vue` | 启动 Vue 子应用 |
| `pnpm dev:vanilla` | 启动原生子应用 |
| `pnpm dev:react` | 启动 Umi 子应用 |
| `pnpm dev:react-vite` | 启动 React Vite 子应用 |
| `pnpm clean` | 清理所有缓存和构建产物 |

## Docker 部署

项目已配置 Docker 和 Docker Compose，用于生产环境部署。

### Docker 命令

| 命令 | 说明 |
|------|------|
| `pnpm docker:prod:build` | 构建并启动所有容器（推荐首次使用） |
| `pnpm docker:prod` | 启动已构建的容器 |
| `pnpm docker:build` | 仅构建镜像（不启动） |
| `pnpm docker:prod:down` | 停止并移除所有容器 |
| `pnpm docker:clean` | 清理所有 Docker 资源（容器、镜像、卷） |

### 快速部署

```bash
# 首次部署（构建并启动）
pnpm docker:prod:build

# 后续启动（已构建过）
pnpm docker:prod

# 停止服务
pnpm docker:prod:down
```

## 运行方式

### 方式一：一键启动所有应用（推荐）

在根目录执行：

```bash
pnpm dev
```

### 方式二：单独启动某个应用

分别打开 5 个终端，在根目录执行：

先在根目录安装所有依赖：

```bash
pnpm install
```

1. 启动 Vue 子应用

```bash
pnpm dev:vue
```

2. 启动原生子应用

```bash
pnpm dev:vanilla
```

3. 启动 Umi 子应用

```bash
pnpm dev:react
```

4. 启动 React Vite 子应用

```bash
pnpm dev:react-vite
```

5. 启动 Umi 主应用

```bash
pnpm dev:host
```

## 访问地址

- 主应用内整合访问（qiankun/wujie）:
  - Vue 子应用: `http://localhost:8000/vue/home`
  - Umi 子应用: `http://localhost:8000/sub-umi-react/Home`
  - React Vite 子应用: `http://localhost:8000/react/home`
  - 原生子应用: `http://localhost:8000/vanilla`
- 子应用独立访问:
  - Vue 子应用: `http://localhost:7101/vue/home`
  - Umi 子应用: `http://localhost:8001/sub-umi-react/Home`
  - React Vite 子应用: `http://localhost:7103/react/home`
  - 原生子应用: `http://localhost:7102`