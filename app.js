var content = document.getElementById("content");

function addItems(){
    var getItem = document.getElementById("addItem");
    
    var li = document.createElement('li')
    var liText = document.createTextNode(getItem.value)
    li.setAttribute("class","list-group-item text-align-left ml-2 mt-2");

    li.appendChild(liText)
    

    //editbutton
    var eBtn = document.createElement('button')
    eBtn.setAttribute('class' , 'btn btn-dark float-right ml-3')
    eBtn.setAttribute('onclick', 'editItem(this)');
   
    var eIcon = document.createElement('i')
    eIcon.setAttribute('class', 'fa fa-pencil-square-o')
    eIcon.setAttribute('aria-hidden', 'true');
    
    eBtn.appendChild(eIcon)
    li.appendChild(eBtn)

    //delbutton
    var dBtn = document.createElement('button')
    dBtn.setAttribute('class' , 'btn btn-dark float-right ml-3')
    dBtn.setAttribute('onclick', 'delItem(this)');
   
    var dIcon = document.createElement('i')
    dIcon.setAttribute('class', 'fa fa-trash');
    dIcon.setAttribute('aria-hidden', 'true');
    
    dBtn.appendChild(dIcon)
    li.appendChild(dBtn)

    content.appendChild(li)

    getItem.value = "";
}


function deleteAll(){
    content.innerHTML = "";  
}

function delItem(e) {
    e.parentNode.remove();
}

function editItem(e){
	var val = e.parentNode.firstChild.nodeValue;
	var editValue = prompt("Enter the value",val);
	e.parentNode.firstChild.nodeValue = editValue;

}
