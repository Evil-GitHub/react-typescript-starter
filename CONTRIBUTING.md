# 贡献指南

感谢您对 Evil Pro 项目的关注！我们欢迎任何形式的贡献。

## 🤝 如何贡献

### 报告问题

如果您发现了 bug 或有功能建议，请：

1. 检查 [Issues](https://github.com/your-username/evil-pro/issues) 确保问题未被报告
2. 使用清晰的标题和详细的描述创建新 Issue
3. 提供复现步骤、预期行为和实际行为
4. 包含相关的环境信息（操作系统、Node.js 版本等）

### 提交代码

1. **Fork 项目**

   ```bash
   git clone https://github.com/your-username/evil-pro.git
   cd evil-pro
   ```

2. **创建分支**

   ```bash
   git checkout -b feature/your-feature-name
   # 或
   git checkout -b fix/your-bug-fix
   ```

3. **安装依赖**

   ```bash
   yarn install
   ```

4. **开发和测试**

   ```bash
   # 启动开发服务器
   npm run start:dev

   # 运行测试
   npm test

   # 检查代码风格
   npm run lint
   ```

5. **提交更改**

   ```bash
   git add .
   git commit -m "feat: add your feature description"
   ```

6. **推送分支**

   ```bash
   git push origin feature/your-feature-name
   ```

7. **创建 Pull Request**

## 📝 代码规范

### 提交信息规范

我们使用 [Conventional Commits](https://www.conventionalcommits.org/) 规范：

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

**类型 (type)：**

- `feat`: 新功能
- `fix`: 修复 bug
- `docs`: 文档更新
- `style`: 代码格式调整
- `refactor`: 代码重构
- `test`: 测试相关
- `chore`: 构建过程或辅助工具的变动

**示例：**

```
feat(auth): add user login functionality
fix(api): resolve timeout issue in data fetching
docs(readme): update installation instructions
```

### 代码风格

- 使用 ESLint 和 Prettier 进行代码格式化
- 遵循 TypeScript 最佳实践
- 组件使用 PascalCase 命名
- 文件和目录使用 kebab-case 命名
- 常量使用 UPPER_SNAKE_CASE 命名

### 测试要求

- 新功能必须包含相应的测试
- 确保所有测试通过
- 保持测试覆盖率在 80% 以上

## 🔧 开发环境设置

### 环境要求

- Node.js >= 18.0.0
- Yarn >= 1.22.0 或 npm >= 8.0.0

### 本地开发

```bash
# 克隆项目
git clone https://github.com/your-username/evil-pro.git
cd evil-pro

# 安装依赖
yarn install

# 配置环境变量
cp .env.example .env.local

# 启动开发服务器
npm run start:dev
```

### 调试

- 使用浏览器开发者工具进行前端调试
- 使用 VS Code 的调试功能
- 查看控制台输出和网络请求

## 📋 Pull Request 检查清单

在提交 PR 之前，请确保：

- [ ] 代码遵循项目的编码规范
- [ ] 所有测试通过
- [ ] 添加了必要的测试
- [ ] 更新了相关文档
- [ ] 提交信息遵循规范
- [ ] 没有合并冲突
- [ ] 功能完整且可用

## 🎯 开发指南

### 添加新功能

1. 在 `src/pages/` 中创建新页面
2. 在 `src/components/` 中创建可复用组件
3. 在 `src/services/` 中添加 API 服务
4. 更新路由配置 `config/routes.ts`
5. 添加相应的测试文件

### 环境变量

- 新的环境变量需要添加到 `.env.example`
- 在 `config/env.ts` 中添加类型定义
- 更新 `docs/CONFIGURATION.md` 文档

### 样式规范

- 使用 Ant Design 组件和主题
- 自定义样式使用 CSS Modules 或 styled-components
- 遵循响应式设计原则

## 🚀 发布流程

1. 更新版本号 (`package.json`)
2. 更新 `CHANGELOG.md`
3. 创建 Git 标签
4. 发布到 npm (如适用)

## 📞 联系我们

如果您有任何问题，可以通过以下方式联系我们：

- 提交 [Issue](https://github.com/your-username/evil-pro/issues)
- 发送邮件至：your-email@example.com

感谢您的贡献！🎉
