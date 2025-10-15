#!/bin/bash
set -e

# 替换环境变量
echo "Starting Evil Pro application..."

# 替换 nginx 配置中的环境变量
if [ -n "$API_BACKEND_URL" ]; then
    echo "Setting API backend URL to: $API_BACKEND_URL"
    sed -i "s|\${API_BACKEND_URL}|$API_BACKEND_URL|g" /etc/nginx/conf.d/default.conf
else
    echo "Warning: API_BACKEND_URL not set, using default"
    sed -i "s|\${API_BACKEND_URL}|http://localhost:8080|g" /etc/nginx/conf.d/default.conf
fi

# 检查 nginx 配置
nginx -t

# 启动 nginx
exec "$@"
