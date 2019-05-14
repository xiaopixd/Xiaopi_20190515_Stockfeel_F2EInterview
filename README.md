
# 股感前端面試迷你測驗

# 題目

這份專案需要你將商品資料顯示成表格，並且實作排序、篩選等功能。
1. clone 整個專案下來
2. 完成所有需求後，建一個`英文名字_日期_Stockfeel_F2EInterview`分支，並發一個 PR (e.g.,`LemonBear_20190514_Stockfeel_F2EInterview`)

# 先決條件

1. 請確保在 Chrome上能夠執行
2. 請勿使用任何 library
3. 只能修改`js/app.js`

# 需求

需要的資料會存在名為`DATA＿TABLE`的陣列中，請將資料 render 成表格

`DATA＿TABLE`中的商品資料格式如下：

```javascript
{
  "id": 5, // Id
  "name": "股感歡迎你基金", // 商品名稱
  "reward": 80, // 報酬率
  "closePrice": 88, // 收盤價
  "specialStock": true // 是否為特選商品
}
```

請你修改`js/app.js`，以滿足以下條件：

1. 資料可用下拉式選單調整排序：選擇`報酬率`時，依據資料的`reward`屬性排序；選擇`收盤價`時，依據資料的`closePrice`屬性排序。
2. 選擇`高至低`時，依照當下所選屬性(報酬率/收盤價))的數值高至低排序，`低至高`則反之。
3. 當 `只顯示特選商品` 勾選時，只顯示 `specialStock` 屬性為 `true` 的商品。
4. 頁面載入時，請按照`報酬率高至低`排序。


![lemon](https://www.stockfeel.com.tw/wp-content/themes/stockfeel_2016_theme/images/index/bear@2x.png)
