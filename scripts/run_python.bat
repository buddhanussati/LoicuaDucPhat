@echo off
cd /d "%~dp1"
start cmd /k python "%~nx1"
