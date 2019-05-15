var isAsc = false; //是否倒序
var sortBy = 'reward'; //排序鍵
var onlyShowSpecialStock = false; //只顯示特選商品
var rowStruc = { //表格結構
	0 : 'id',
	1 : 'name',
	2 : 'reward',
	3 : 'specialStock',
	4 : 'closePrice',
}

var orderMeaning = { //選單Key映射資料Key
	'relevance' : 'reward',
	'price' : 'closePrice'
}

window.onload = function(){
	//頁面載入時，請按照報酬率高至低排序
    sortResults(sortBy, isAsc);
	
	//選擇高至低時，依照當下所選屬性(報酬率/收盤價))的數值高至低排序，低至高則反之
    document.getElementById('order').addEventListener('change', function(){
		isAsc = this.value == 'asc' ? true : false ;
		sortResults(sortBy, isAsc);
	});
	
	//當 只顯示特選商品 勾選時，只顯示 specialStock 屬性為 true 的商品
	 document.getElementById('specialStock').addEventListener('change', function(){
		onlyShowSpecialStock = this.checked;
		sortResults(sortBy, isAsc);
	});
	
	//資料可用下拉式選單調整排序：選擇報酬率時，依據資料的reward屬性排序；選擇收盤價時，依據資料的closePrice屬性排序。
	document.getElementById('orderBy').addEventListener('change', function(){
		sortBy = orderMeaning[this.value];
		sortResults(sortBy, isAsc);
	});
}

function sortResults(prop, asc) {
	//清空表格
	document.getElementsByTagName('tbody')[0].innerHTML = '';
	
	//暫時不動原本資料
	var tempData = DATA_TABLE;
	
	//排序
    tempData = tempData.sort(function(a, b) {
        if (asc) { //正排
            return (a[prop] > b[prop]) ? 1 : ((a[prop] < b[prop]) ? -1 : 0);
        } else {   //倒排
            return (b[prop] > a[prop]) ? 1 : ((b[prop] < a[prop]) ? -1 : 0);
        }
    });
	
	//渲染資料
	for(i=0; i < tempData.length ; i++){
		appendData(tempData[i]);
	}
}

function appendData(obj) {
	//抓表身
	var tableRef = document.getElementsByTagName('tbody')[0];
	
	//過濾特選商品
	if(onlyShowSpecialStock && !obj.specialStock){
		return;
	}

	//偵測最新一列位置
	var newRow  = tableRef.insertRow(tableRef.rows.length);

	//利用映射表決定要取哪個資料
	for(j=0;j<5;j++){	
		var newCell  = newRow.insertCell(j);
		var newText  = document.createTextNode(obj[rowStruc[j]]);
		newCell.appendChild(newText);
	}

}
