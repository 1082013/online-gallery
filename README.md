# We got art
## 作品說明
We got art 為線上觀賞畫展的網頁，當中包含Da vinci、Jan Vermeer、Raphael、Sandro Botticelli及van Gogh五位畫家的畫作，除了認識畫家外，畫作的展示及說明同時提供線上參展的民眾在疫情期間以另類的方式感受文藝氣息的薰陶。

## 畫面
![We got art 首頁](https://github.com/1082013/README-Image/blob/40c4aaa17849b17c0c7c33b991d116f278c275c3/%E4%BD%9C%E5%93%81/We%20got%20art%E7%B6%B2%E9%A0%81%E6%88%AA%E5%9C%96/%E9%A6%96%E9%A0%81.png)

![We got art 分頁](https://github.com/1082013/README-Image/blob/40c4aaa17849b17c0c7c33b991d116f278c275c3/%E4%BD%9C%E5%93%81/We%20got%20art%E7%B6%B2%E9%A0%81%E6%88%AA%E5%9C%96/%E5%88%86%E9%A0%81.png)

## 專案的使用效果圖
在此使用行動裝置呈現
| 首頁 - 畫家介紹 | 分頁 - 畫家 Menu Bar | 分頁 - 畫作介紹 |
| :--: | :--: |:--:|
| <img src="https://github.com/1082013/README-Image/blob/800a54a970c9a76c437cd27c95e328a6b8630daf/%E4%BD%9C%E5%93%81/We%20got%20art%E7%B6%B2%E9%A0%81%E6%88%AA%E5%9C%96/Painter%20Intro.jpg" alt="畫家介紹" width="275"> | <img src="https://github.com/1082013/README-Image/blob/800a54a970c9a76c437cd27c95e328a6b8630daf/%E4%BD%9C%E5%93%81/We%20got%20art%E7%B6%B2%E9%A0%81%E6%88%AA%E5%9C%96/menubar.jpg" alt="畫家介紹" width="275"> |  <img src="https://github.com/1082013/README-Image/blob/800a54a970c9a76c437cd27c95e328a6b8630daf/%E4%BD%9C%E5%93%81/We%20got%20art%E7%B6%B2%E9%A0%81%E6%88%AA%E5%9C%96/Painting%20Intro.jpg" alt="畫作介紹" width="275"> |

| 分頁 - 蒐藏畫作購物車 | 分頁 - 與畫家對話視窗 |
| :--: |:--:|
| <img src="https://github.com/1082013/README-Image/blob/800a54a970c9a76c437cd27c95e328a6b8630daf/%E4%BD%9C%E5%93%81/We%20got%20art%E7%B6%B2%E9%A0%81%E6%88%AA%E5%9C%96/HeartCart.jpg" alt="畫家介紹" width="275">  |  <img src="https://github.com/1082013/README-Image/blob/800a54a970c9a76c437cd27c95e328a6b8630daf/%E4%BD%9C%E5%93%81/We%20got%20art%E7%B6%B2%E9%A0%81%E6%88%AA%E5%9C%96/conversation.jpg" alt="畫作介紹" width="275"> |


## 資料夾說明
-  SRC - 靜態資源放置處
    -  AUDIO - 音檔放置處
    -  Font - 字型放置處
    -  icon - icon放置處
    -  IMG - 圖片放置處

## 主要檔案
-  首頁
    -  index.html - 首頁畫家介紹
    -  index.css - 首頁 CSS 樣式檔
    -  index.js - 首頁 JavaScript 檔
-  分頁
    -  PaintPage.html - 分頁畫作介紹
    -  PaintPage.css - 分頁 CSS 樣式檔
    -  PaintPage.js - 分頁 JavaScript 檔

## 整合方式
-  SCSS 檔案個別檔案用途
    -  _reset.scss，清除瀏覽器預設格式
    -  _variable.scss，儲存變數
    -  index.scss，首頁 CSS 樣式表
    -  PaintPage.scss，分頁 CSS 樣式表
-  將上述檔案分別引入至 index.scss 及 PaintPage.scss 中，方便管理不同類型的樣式，編譯後分別整合至 index.css 及 PaintPage.css 兩個檔案

## 專案技術
HTML、SCSS（Sass）、JavaScript、RWD（響應式網頁設計）、Git 版本控制

## 第三方資源
-  jQuery
    - 處理互動元素
-  Boostrap
    -  Carousel輪播，使用於首頁最下方的畫作輪播，可透過左右箭頭進行輪播畫作的切換。
-  jQuery UI
    -  Tabs，使用於分頁畫作介紹之畫家作品頁切換，當觸滑鼠點及或是移動到Tabs中的畫家名稱上，可將內容切換至該畫家之作品。
    -  Dialog，使用於分頁畫作介紹之作品介紹，當點擊畫作introduction之按鈕，可開啟dialog觀看該作品介紹。

## 版本歷史
-  V6.0
    -  變更: 分頁-愛心購物車圖片來源調整、愛心購物車高度與圖層調整
-  V5.0
    -  變更: 分頁RWD-初始化作品介紹對話框、愛心購物車及畫家對話框滑鼠移動到的事件、畫作介紹按鈕滑鼠滑到的事件
-  V4.0
    -  變更: 分頁-初始化作家對話框之對話按鈕的點擊事件、作家作品頁選項卡切換後回到最頂端
-  V3.0
    -  變更: 首頁-畫家介紹的文字修改、分頁-作品介紹對話框的排版、愛心購物車畫作的排版
-  V2.3
    -  變更: 字型的匯入方式
-  V2.2
    -  變更: 字型的匯入方式
-  V2.1
    -  變更: 字型的匯入方式
-  V2.0
    -  新增: 瀏覽器LOGO
    -  變更: 字型的匯入方式
-  V1.0
    -  初次上傳專案

## 關於作者
**姓名：** 蔡容安 Rung-An Tsai  
**電子郵件：** yhjhs92929.2016@gmail.com  

## License
online-gallery is released under MIT license. © 2023 Rung-An Tsai
