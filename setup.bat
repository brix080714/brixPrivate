@echo off
echo Installing Git for Windows...
echo.

REM Download Git installer
powershell -Command "(New-Object System.Net.ServicePointManager).SecurityProtocol = [System.Net.SecurityProtocolType]::Tls12; Invoke-WebRequest -Uri 'https://github.com/git-for-windows/git/releases/download/v2.43.0.windows.1/Git-2.43.0-64-bit.exe' -OutFile '%TEMP%\GitInstaller.exe'"

echo Running Git installer...
"%TEMP%\GitInstaller.exe" /VERYSILENT /NORESTART

echo.
echo Git installation complete!
echo Please close and reopen your terminal, then run: deploy.bat
pause
