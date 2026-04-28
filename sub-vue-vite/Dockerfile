FROM node:24-alpine AS builder

WORKDIR /app

# 设置 npm 镜像
RUN npm config set registry https://registry.npmmirror.com

# 复制根目录的 pnpm-lock.yaml 和 pnpm-workspace.yaml
COPY pnpm-lock.yaml pnpm-workspace.yaml ./
# 复制 packages 目录（共享包）
COPY packages/ ./packages/
# 复制子项目的文件到子目录（保持目录结构）
COPY sub-vue-vite/ ./sub-vue-vite/

RUN npm install -g pnpm@10.33.0

# 设置 pnpm 镜像
RUN pnpm config set registry https://registry.npmmirror.com

# 在子项目目录中安装依赖
RUN pnpm install

# 构建 types 包
RUN cd packages/types && pnpm build

# 切换到子项目目录并构建
WORKDIR /app/sub-vue-vite
RUN pnpm build

FROM nginx:alpine

COPY --from=builder /app/sub-vue-vite/dist /usr/share/nginx/html

COPY sub-vue-vite/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]