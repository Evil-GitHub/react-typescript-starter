#!/usr/bin/env node

/**
 * 环境变量验证脚本
 * 用于验证必需的环境变量是否正确设置
 */

const fs = require('fs');
const path = require('path');

// 颜色输出
const colors = {
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  reset: '\x1b[0m',
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

// 必需的环境变量
const requiredEnvVars = ['REACT_APP_API_BASE_URL', 'REACT_APP_REQUEST_BASE_URL'];

// 可选但推荐的环境变量
const recommendedEnvVars = [
  'REACT_APP_TITLE',
  'REACT_APP_TOKEN_KEY',
  'APP_MODE',
  'VERSION',
  'FRONTEND_BRANCH_NAME',
];

// 验证环境变量格式
const validators = {
  REACT_APP_API_BASE_URL: (value) => {
    const urlPattern = /^https?:\/\/.+/;
    return urlPattern.test(value);
  },
  REACT_APP_REQUEST_BASE_URL: (value) => {
    const urlPattern = /^https?:\/\/.+/;
    return urlPattern.test(value);
  },
  APP_MODE: (value) => {
    return ['microservice', 'standalone'].includes(value);
  },
};

function validateEnvVar(name, value) {
  if (!value) {
    return { valid: false, message: 'Not set' };
  }

  const validator = validators[name];
  if (validator && !validator(value)) {
    return { valid: false, message: 'Invalid format' };
  }

  return { valid: true, message: 'OK' };
}

function loadEnvFile(filePath) {
  if (!fs.existsSync(filePath)) {
    return {};
  }

  const content = fs.readFileSync(filePath, 'utf8');
  const env = {};

  content.split('\n').forEach((line) => {
    const trimmed = line.trim();
    if (trimmed && !trimmed.startsWith('#')) {
      const [key, ...valueParts] = trimmed.split('=');
      if (key && valueParts.length > 0) {
        env[key.trim()] = valueParts.join('=').trim();
      }
    }
  });

  return env;
}

function main() {
  log('🔍 Validating environment variables...', 'blue');
  console.log();

  // 加载 .env 文件
  const envFiles = ['.env', '.env.local', '.env.development', '.env.production'];
  let fileEnv = {};

  envFiles.forEach((file) => {
    const filePath = path.join(process.cwd(), file);
    if (fs.existsSync(filePath)) {
      log(`📄 Loading ${file}`, 'blue');
      Object.assign(fileEnv, loadEnvFile(filePath));
    }
  });

  // 合并环境变量（process.env 优先）
  const allEnv = { ...fileEnv, ...process.env };

  let hasErrors = false;
  let hasWarnings = false;

  // 验证必需的环境变量
  log('\n✅ Required Environment Variables:', 'green');
  requiredEnvVars.forEach((name) => {
    const value = allEnv[name];
    const result = validateEnvVar(name, value);

    if (result.valid) {
      log(`  ${name}: ${result.message}`, 'green');
    } else {
      log(`  ${name}: ${result.message}`, 'red');
      hasErrors = true;
    }
  });

  // 验证推荐的环境变量
  log('\n⚠️  Recommended Environment Variables:', 'yellow');
  recommendedEnvVars.forEach((name) => {
    const value = allEnv[name];
    const result = validateEnvVar(name, value);

    if (result.valid) {
      log(`  ${name}: ${result.message}`, 'green');
    } else {
      log(`  ${name}: ${result.message}`, 'yellow');
      hasWarnings = true;
    }
  });

  // 显示当前环境信息
  log('\n📊 Current Environment Info:', 'blue');
  log(`  NODE_ENV: ${allEnv.NODE_ENV || 'not set'}`, 'blue');
  log(`  REACT_APP_ENV: ${allEnv.REACT_APP_ENV || 'not set'}`, 'blue');
  log(`  UMI_ENV: ${allEnv.UMI_ENV || 'not set'}`, 'blue');

  // 检查 .env.example 文件
  const examplePath = path.join(process.cwd(), '.env.example');
  if (fs.existsSync(examplePath)) {
    log('\n📋 .env.example file found', 'green');
  } else {
    log('\n📋 .env.example file not found', 'yellow');
    hasWarnings = true;
  }

  // 总结
  console.log();
  if (hasErrors) {
    log('❌ Validation failed! Please fix the required environment variables.', 'red');
    process.exit(1);
  } else if (hasWarnings) {
    log('⚠️  Validation passed with warnings. Consider setting recommended variables.', 'yellow');
  } else {
    log('✅ All environment variables are properly configured!', 'green');
  }
}

if (require.main === module) {
  main();
}

module.exports = { validateEnvVar, loadEnvFile };
