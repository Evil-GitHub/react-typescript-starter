# 多阶段构建 Dockerfile
# 第一阶段：构建应用
FROM node:18-alpine AS builder

# 设置工作目录
WORKDIR /app

# 复制 package 文件
COPY package*.json yarn.lock ./

# 安装依赖
RUN yarn install --frozen-lockfile --production=false

# 复制源代码
COPY . .

# 构建应用
ARG REACT_APP_ENV=prod
ARG REACT_APP_API_BASE_URL
ARG REACT_APP_REQUEST_BASE_URL
ARG REACT_APP_TITLE
ARG APP_MODE=microservice
ARG VERSION
ARG FRONTEND_BRANCH_NAME

ENV REACT_APP_ENV=${REACT_APP_ENV}
ENV REACT_APP_API_BASE_URL=${REACT_APP_API_BASE_URL}
ENV REACT_APP_REQUEST_BASE_URL=${REACT_APP_REQUEST_BASE_URL}
ENV REACT_APP_TITLE=${REACT_APP_TITLE}
ENV APP_MODE=${APP_MODE}
ENV VERSION=${VERSION}
ENV FRONTEND_BRANCH_NAME=${FRONTEND_BRANCH_NAME}

RUN yarn build

# 第二阶段：运行时环境
FROM nginx:alpine

# 安装必要的工具
RUN apk add --no-cache bash

# 复制 nginx 配置
COPY docker/nginx.conf /etc/nginx/nginx.conf
COPY docker/default.conf /etc/nginx/conf.d/default.conf

# 复制构建产物
COPY --from=builder /app/dist /usr/share/nginx/html

# 复制启动脚本
COPY docker/docker-entrypoint.sh /docker-entrypoint.sh
RUN chmod +x /docker-entrypoint.sh

# 暴露端口
EXPOSE 80

# 健康检查
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD curl -f http://localhost/health || exit 1

# 启动命令
ENTRYPOINT ["/docker-entrypoint.sh"]
CMD ["nginx", "-g", "daemon off;"]
