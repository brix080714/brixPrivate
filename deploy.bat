@echo off
echo ======================================
echo  BRIX BRIONGOS - PORTFOLIO DEPLOYMENT
echo ======================================
echo.

REM Configure Git
echo [1/6] Configuring Git...
git config --global user.name "Brix Briongos"
git config --global user.email "brixbrionngos14@gmail.com"

REM Initialize repository
echo [2/6] Initializing Git repository...
cd /d "c:\Users\Default.DESKTOP-PTC23KT\Desktop\FolioOne"
git init

REM Add files
echo [3/6] Adding all files...
git add .

REM Create initial commit
echo [4/6] Creating initial commit...
git commit -m "Initial portfolio commit - January 27, 2026"

echo.
echo ======================================
echo  NEXT STEPS - COPY AND PASTE IN ORDER
echo ======================================
echo.
echo [STEP 1] Go to https://github.com and create account
echo.
echo [STEP 2] Create new repository named "brixbriongos"
echo.
echo [STEP 3] Copy your repository URL (HTTPS), then paste this:
echo.
echo git remote add origin [PASTE_YOUR_GITHUB_URL_HERE]
echo git branch -M main
echo git push -u origin main
echo.
echo [STEP 4] When prompted, enter your GitHub credentials
echo.
echo [STEP 5] Go to https://netlify.com
echo   - Click "Import from Git"
echo   - Connect GitHub
echo   - Select "brixbriongos" repository
echo   - Change site name to: brixbriongos
echo   - Deploy!
echo.
echo ======================================
echo Your site will be at: https://brixbriongos.netlify.app
echo ======================================
echo.
pause
