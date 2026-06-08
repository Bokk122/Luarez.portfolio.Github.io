# DEVLOG.md — 鄭洛斯 Christopher John Curro Luarez
# 網頁設計 期末專題 設計日誌
# Luarez.portfolio.Github.io
 
---
 
## 05.25.26 Monday | 環境建置 Setup
 
Made a GitHub account and set up the project repo today.
Got GitHub Pages running — felt good when the live URL actually loaded.
 
原本想法：直接在 GitHub 網頁上編輯
遇到問題：每次改完要等頁面重新整理，太慢
改用方案：安裝 Git + VS Code，clone 到本機編輯
學到的事：`git clone`、`git push`、`git commit` 的基本流程
AI 協助：有，請 Claude 說明 `@import` 與 `<link>` 的差異，連結方式自己決定
 
---
 
## 05.27.26 Wednesday | 履歷內容 Resume
 
Worked on the resume content — figured out what to include for a portfolio vs a regular job resume.
 
原本想法：直接複製一般求職履歷格式
遇到問題：內容太多，放進網頁版面會很雜亂
改用方案：只保留學歷、專案、技能、語言證照四個區塊
學到的事：作品集履歷和求職履歷的側重點不一樣
AI 協助：無，內容全部自己決定
 
---
 
## 05.28.26 Thursday | 網站開發 Development
 
Big day — actually started building the site. Got the full single-page structure up with nav, hero, projects, skills, and resume.
 
原本想法：用 float 排版導覽列
遇到問題：float 難以垂直置中
改用方案：Flexbox（justify-content: space-between）
學到的事：flex-shrink 的作用與預設值；`position: sticky` 讓導覽列固定在頂部
AI 協助：有，請 Claude 解釋 flex-shrink，版型配色是自己決定的
 
---
 
## 06.01.26 Monday | 修正與優化 Fixes
 
Found a repo naming error so had to migrate everything. Also added the graduation photo and bilingual content.
 
原本想法：全英文網站，單一 repo
遇到問題：repo 名稱格式錯誤；照片裁切位置跑版
改用方案：建立新 repo 並遷移；用 `object-position: center top` 修正照片
學到的事：`border-radius: 50%` 製作圓形圖片；CSS `object-fit` 與 `object-position` 的差異
AI 協助：有，請 Claude 協助 Flexbox 照片排版語法，比例與大小自己調整
 
---
 
## 06.02.26 Tuesday | 再次遷移 Migration
 
Had to move repos again because the format was still wrong.
 
原本想法：沿用舊 repo 修改名稱
遇到問題：GitHub 不允許直接重新命名並保留 Pages 設定
改用方案：重新建立正確格式的 repo，手動遷移所有檔案
學到的事：GitHub repo 名稱與 Pages URL 直接掛鉤，命名要一開始就確認清楚
AI 協助：無，遷移與除錯自己完成
 
---
 
## 06.03.26 Wednesday | 最終整理 Final Cleanup 今天 Today
 
Last push before the deadline. Restructured the file folders, added JS, updated README and DEVLOG.
 
原本想法：CSS 全部內嵌在 `index.html`
遇到問題：單一檔案超過 400 行，難以維護；教授要求外部 CSS 結構
改用方案：將 CSS 移至 `css/style.css`，JS 移至 `js/main.js`
學到的事：外部樣式表讓程式碼更好維護；`window.scrollY` 偵測捲動位置控制回到頂部按鈕
AI 協助：有，請 Claude 協助整理 DEVLOG 格式與評估作品集完整度，內容與決策均由自己確認
