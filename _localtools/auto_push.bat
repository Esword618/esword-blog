@echo off
title Auto push hugo blog source
cd ..
git submodule update --remote 
git add public
git commit -m "Feat: Update public module commit id"
git add .
git commit -m "�����˱��L��Դ���Զ����£�%date%%time%"
git push

