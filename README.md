# Evil Pro

一个基于 Ant Design Pro 的企业级前端应用解决方案，支持微服务架构和多环境部署。

## ✨ 特性

- 🎯 **现代化技术栈**：基于 React 18 + UmiJS 4 + Ant Design 5
- 🚀 **微服务支持**：支持微服务和单体应用两种模式
- 🌍 **多环境部署**：完善的环境变量管理和多环境配置
- 📦 **容器化部署**：提供 Docker 和 Kubernetes 部署方案
- 🔧 **开发体验**：完整的开发工具链和代码规范
- 🛡️ **类型安全**：完整的 TypeScript 支持
- 📱 **PWA 支持**：渐进式 Web 应用支持

## 🚀 快速开始

### 环境要求

- Node.js >= 18.0.0
- Yarn >= 1.22.0 或 npm >= 8.0.0

### 安装依赖

```bash
# 使用 yarn (推荐)
yarn install

# 或使用 npm
npm install
```

### 环境配置

```bash
# 复制环境变量示例文件
cp .env.example .env.local

# 编辑环境变量
vim .env.local
```

### 启动开发服务器

```bash
# 开发环境
npm run start:dev

# 测试环境
npm run start:test

# 预发布环境
npm run start:pre
```

### 构建项目

```bash
# 开发环境构建
npm run build:dev

# 测试环境构建
npm run build:test

# 预发布环境构建
npm run build:pre

# 生产环境构建
npm run build:prod
```

## 🔧 开发

### 代码规范检查

```bash
# 检查代码风格
npm run lint

# 自动修复代码风格问题
npm run lint:fix

# TypeScript 类型检查
npm run tsc
```

### 测试

```bash
# 运行测试
npm test

# 运行测试并生成覆盖率报告
npm run test:coverage

# 更新测试快照
npm run test:update
```

### 环境变量验证

```bash
# 验证环境变量配置
npm run env:validate
```

## 🐳 Docker 部署

### 构建镜像

```bash
# 构建生产镜像
npm run docker:build

# 或使用 Docker 命令
docker build -t evil-pro:latest .
```

### 运行容器

```bash
# 生产环境
npm run docker:prod

# 开发环境
npm run docker:dev

# 或直接运行
docker run -p 80:80 evil-pro:latest
```

## ☸️ Kubernetes 部署

```bash
# 部署到 Kubernetes
npm run k8s:deploy

# 删除部署
npm run k8s:delete
```

## 📁 项目结构

```
Evil-Pro/
├── config/                 # 配置文件
│   ├── defaultSettings.ts  # 默认设置
│   ├── env.ts              # 环境变量管理
│   ├── proxy.ts            # 代理配置
│   └── routes.ts           # 路由配置
├── docs/                   # 文档
│   └── CONFIGURATION.md    # 配置指南
├── docker/                 # Docker 配置
│   ├── nginx.conf          # Nginx 配置
│   ├── default.conf        # 站点配置
│   └── docker-entrypoint.sh # 启动脚本
├── k8s/                    # Kubernetes 配置
│   ├── configmap.yaml      # 配置映射
│   └── deployment.yaml     # 部署配置
├── scripts/                # 脚本文件
│   └── validate-env.js     # 环境验证脚本
├── src/                    # 源代码
│   ├── components/         # 组件
│   ├── pages/             # 页面
│   ├── services/          # 服务
│   └── utils/             # 工具函数
├── .env.example           # 环境变量示例
├── Dockerfile             # 生产环境 Docker 文件
├── Dockerfile.dev         # 开发环境 Docker 文件
├── docker-compose.yml     # Docker Compose 配置
└── package.json           # 项目配置
```

## 🌍 环境变量

### 必需的环境变量

| 变量名                       | 描述         | 示例值                         |
| ---------------------------- | ------------ | ------------------------------ |
| `REACT_APP_API_BASE_URL`     | API 文档地址 | `http://192.168.100.102:32355` |
| `REACT_APP_REQUEST_BASE_URL` | 请求地址     | `http://192.168.100.102:32355` |

### 可选的环境变量

| 变量名            | 描述     | 默认值       |
| ----------------- | -------- | ------------ |
| `REACT_APP_ENV`   | 应用环境 | `dev`        |
| `REACT_APP_TITLE` | 应用标题 | `Evil Pro`   |
| `APP_MODE`        | 应用模式 | `standalone` |

详细配置请参考 [配置指南](./docs/CONFIGURATION.md)。

## 📄 许可证

本项目基于 MIT 许可证开源 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 🔗 相关链接

- [Ant Design Pro](https://pro.ant.design/)
- [UmiJS](https://umijs.org/)
- [Ant Design](https://ant.design/)
- [React](https://reactjs.org/)
