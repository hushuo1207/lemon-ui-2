#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
pnpm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果发布到 gitee
git push -f git@gitee.com:axing-website/lemon-ui-2.git master:gh-pages

# 如果发布到 github.io
git push -f git@github.com:hushuo1207/lemon-ui-2.git master:gh-pages

cd -