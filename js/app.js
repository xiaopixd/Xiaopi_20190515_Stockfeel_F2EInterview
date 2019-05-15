var isAsc = false;
var sortBy = 'reward';
var onlyShowSpecialStock = false;

window.onload = function(){
    sortResults(sortBy, isAsc);
	
    document.getElementById('order').addEventListener('change', function(){
		isAsc = this.value == 'asc' ? true : false ;
		sortResults(sortBy, isAsc);
	});
	
	 document.getElementById('specialStock').addEventListener('change', function(){
		onlyShowSpecialStock = this.checked;
		sortResults(sortBy, isAsc);
	});
	
	document.getElementById('orderBy').addEventListener('change', function(){
		var newValue = '';
		switch(this.value){
			case 'relevance':
				newValue = 'reward';
			break;
			
			case 'price':
				newValue = 'closePrice';
			break;
			
			default:
				newValue = 'reward';
			break;
		}
		sortBy = newValue;
		sortResults(sortBy, isAsc);
	});
}

function sortResults(prop, asc) {
	document.getElementsByTagName('tbody')[0].innerHTML = '';
	
	var tempData = DATA_TABLE;
	
    tempData = tempData.sort(function(a, b) {
        if (asc) {
            return (a[prop] > b[prop]) ? 1 : ((a[prop] < b[prop]) ? -1 : 0);
        } else {
            return (b[prop] > a[prop]) ? 1 : ((b[prop] < a[prop]) ? -1 : 0);
        }
    });
	
	for(i=0;i<tempData.length;i++){
		appendData(tempData[i]);
	}
}

function appendData(obj) {
	var tableRef = document.getElementsByTagName('tbody')[0];
	
	if(onlyShowSpecialStock && !obj.specialStock){
		return;
	}

	var newRow   = tableRef.insertRow(tableRef.rows.length);

	var newCell  = newRow.insertCell(0);
	var newText  = document.createTextNode(obj.id);
	newCell.appendChild(newText);
	
	var newCell  = newRow.insertCell(1);
	var newText  = document.createTextNode(obj.name);
	newCell.appendChild(newText);
	
	var newCell  = newRow.insertCell(2);
	var newText  = document.createTextNode(obj.reward);
	newCell.appendChild(newText);
	
	var newCell  = newRow.insertCell(3);
	var newText  = document.createTextNode(obj.specialStock);
	newCell.appendChild(newText);
	
	var newCell  = newRow.insertCell(4);
	var newText  = document.createTextNode(obj.closePrice);
	newCell.appendChild(newText);
}

