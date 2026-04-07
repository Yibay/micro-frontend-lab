FROM node:24-alpine AS builder

WORKDIR /app

# 复制根目录的 pnpm-lock.yaml 和 pnpm-workspace.yaml
COPY pnpm-lock.yaml pnpm-workspace.yaml ./
# 复制子项目的文件
COPY sub-react-vite/ ./

RUN npm install -g pnpm@10.33.0

# 在子项目目录中安装依赖
RUN pnpm install

# 构建子项目
RUN pnpm build

FROM nginx:alpine

COPY --from=builder /app/dist /usr/share/nginx/html

COPY sub-react-vite/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]