/**
 * 环境变量配置管理
 * 统一管理所有环境变量的获取和默认值
 */

// 获取环境变量的辅助函数
const getEnvVar = (key: string, defaultValue: string = ''): string => {
  return process.env[key] || defaultValue;
};

const getBooleanEnvVar = (key: string, defaultValue: boolean = false): boolean => {
  const value = process.env[key];
  if (value === undefined) return defaultValue;
  return value.toLowerCase() === 'true';
};

// 环境配置
export const ENV_CONFIG = {
  // 基础环境
  NODE_ENV: getEnvVar('NODE_ENV', 'development'),
  REACT_APP_ENV: getEnvVar('REACT_APP_ENV', 'dev'),
  UMI_ENV: getEnvVar('UMI_ENV', 'dev'),

  // API 配置
  API_BASE_URL: getEnvVar('REACT_APP_API_BASE_URL', 'http://localhost:8000'),
  REQUEST_BASE_URL: getEnvVar('REACT_APP_REQUEST_BASE_URL', 'http://localhost:8000'),

  // 应用配置
  APP_TITLE: getEnvVar('REACT_APP_TITLE', 'Evil Pro'),
  TOKEN_KEY: getEnvVar('REACT_APP_TOKEN_KEY', 'RKLINK_TOKEN'),
  LOGO_PATH: getEnvVar('REACT_APP_LOGO_PATH', '/images/logo.png'),

  // 构建信息
  BUILD_VERSION: getEnvVar('REACT_APP_BUILD_VERSION', '1.0.0'),
  BUILD_TIME: getEnvVar('REACT_APP_BUILD_TIME', new Date().toISOString()),
  FRONTEND_BRANCH_NAME: getEnvVar('FRONTEND_BRANCH_NAME', 'main'),
  COMMIT_HASH: getEnvVar('VERSION', 'unknown'),
  APP_MODE: getEnvVar('APP_MODE', 'standalone'),

  // 功能开关
  ENABLE_PWA: getBooleanEnvVar('REACT_APP_ENABLE_PWA', true),
  ENABLE_MOCK: getBooleanEnvVar('REACT_APP_ENABLE_MOCK', false),
  ENABLE_ANALYTICS: getBooleanEnvVar('REACT_APP_ENABLE_ANALYTICS', false),

  // 第三方服务
  SENTRY_DSN: getEnvVar('REACT_APP_SENTRY_DSN'),
  ANALYTICS_ID: getEnvVar('REACT_APP_ANALYTICS_ID'),

  // 开发配置
  ANALYZE: getBooleanEnvVar('ANALYZE', false),
  MOCK: getEnvVar('MOCK', 'none'),
};

// 环境检查函数
export const isDevelopment = () => ENV_CONFIG.NODE_ENV === 'development';
export const isProduction = () => ENV_CONFIG.NODE_ENV === 'production';
export const isTest = () => ENV_CONFIG.NODE_ENV === 'test';

// 验证必需的环境变量
export const validateEnvVars = () => {
  const requiredVars = ['REACT_APP_API_BASE_URL', 'REACT_APP_REQUEST_BASE_URL'];

  const missingVars = requiredVars.filter((varName) => !process.env[varName]);

  if (missingVars.length > 0) {
    console.warn('Missing required environment variables:', missingVars);
  }

  return missingVars.length === 0;
};

export default ENV_CONFIG;
