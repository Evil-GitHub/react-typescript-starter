# Evil Pro 配置指南

## 环境变量配置

### 必需的环境变量

| 变量名                       | 描述         | 示例值                         | 默认值 |
| ---------------------------- | ------------ | ------------------------------ | ------ |
| `REACT_APP_API_BASE_URL`     | API 文档地址 | `http://192.168.100.102:32355` | -      |
| `REACT_APP_REQUEST_BASE_URL` | 请求地址     | `http://192.168.100.102:32355` | -      |

### 可选的环境变量

| 变量名                       | 描述           | 示例值                    | 默认值             |
| ---------------------------- | -------------- | ------------------------- | ------------------ |
| `REACT_APP_ENV`              | 应用环境       | `dev/test/pre/prod`       | `dev`              |
| `REACT_APP_TITLE`            | 应用标题       | `Evil Pro System`         | `Evil Pro`         |
| `REACT_APP_TOKEN_KEY`        | Token 存储键名 | `RKLINK_TOKEN`            | `RKLINK_TOKEN`     |
| `REACT_APP_LOGO_PATH`        | Logo 路径      | `/images/logo.png`        | `/images/logo.png` |
| `REACT_APP_ENABLE_PWA`       | 启用 PWA       | `true/false`              | `true`             |
| `REACT_APP_ENABLE_MOCK`      | 启用 Mock      | `true/false`              | `false`            |
| `REACT_APP_ENABLE_ANALYTICS` | 启用分析       | `true/false`              | `false`            |
| `APP_MODE`                   | 应用模式       | `microservice/standalone` | `standalone`       |
| `VERSION`                    | 版本号         | `v1.2.0`                  | `unknown`          |
| `FRONTEND_BRANCH_NAME`       | 分支名称       | `main`                    | `main`             |

### 第三方服务配置

| 变量名                   | 描述        | 示例值                      | 默认值 |
| ------------------------ | ----------- | --------------------------- | ------ |
| `REACT_APP_SENTRY_DSN`   | Sentry DSN  | `https://xxx@sentry.io/xxx` | -      |
| `REACT_APP_ANALYTICS_ID` | 分析服务 ID | `GA-XXXXXXXXX`              | -      |

## 环境配置文件

### 1. 创建环境配置文件

```bash
# 复制示例文件
cp .env.example .env.local

# 编辑配置
vim .env.local
```

### 2. 环境文件优先级

1. `.env.local` (最高优先级，不应提交到版本控制)
2. `.env.development` / `.env.production` (环境特定)
3. `.env` (通用配置)
4. `process.env` (系统环境变量，最高优先级)

### 3. 验证环境配置

```bash
# 验证环境变量
npm run env:validate
```

## Docker 配置

### 构建镜像

```bash
# 构建镜像
docker build -t evil-pro:latest .

# 带参数构建
docker build \
  --build-arg REACT_APP_API_BASE_URL=http://api.example.com \
  --build-arg REACT_APP_TITLE="Production App" \
  -t evil-pro:prod .
```

### 运行容器

```bash
# 运行容器
docker run -p 80:80 \
  -e API_BACKEND_URL=http://backend:8080 \
  evil-pro:latest
```

## Kubernetes 配置

### 部署到 Kubernetes

1. 更新 `k8s/configmap.yaml` 中的配置
2. 创建 secrets（如果需要）：

```bash
kubectl create secret generic evil-pro-secrets \
  --from-literal=REACT_APP_SENTRY_DSN=your-sentry-dsn \
  --from-literal=REACT_APP_ANALYTICS_ID=your-analytics-id
```

3. 部署应用：

```bash
kubectl apply -f k8s/
```

### 更新配置

```bash
# 更新 ConfigMap
kubectl apply -f k8s/configmap.yaml

# 重启 Deployment 以应用新配置
kubectl rollout restart deployment/evil-pro-frontend
```

## 性能优化配置

### 1. 构建优化

- 启用 `hash` 模式进行缓存控制
- 使用 `mfsu` 进行模块联邦优化
- 启用 `esbuildMinifyIIFE` 进行代码压缩

### 2. 运行时优化

- 配置 Nginx Gzip 压缩
- 设置静态资源缓存策略
- 启用 PWA 离线缓存

### 3. 监控配置

- 集成 Sentry 错误监控
- 配置性能分析工具
- 设置健康检查端点

## 故障排除

### 常见问题

1. **环境变量未生效**

   - 检查变量名是否以 `REACT_APP_` 开头
   - 确认 `.env` 文件格式正确
   - 重启开发服务器

2. **API 请求失败**

   - 检查代理配置
   - 确认后端服务可访问
   - 查看浏览器网络面板

3. **Docker 构建失败**
   - 检查 Dockerfile 语法
   - 确认构建参数正确
   - 查看构建日志

### 调试命令

```bash
# 检查环境变量
npm run env:validate

# 分析构建产物
npm run analyze

# 查看 Docker 日志
docker logs evil-pro

# 查看 Kubernetes 状态
kubectl get pods
kubectl logs deployment/evil-pro-frontend
```
