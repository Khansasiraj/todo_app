var content = document.getElementById("content");

function addItems() {
    var item = document.getElementById('addItem');

    if (item.value.replace(/\s/g, "") == "") {
        alert('Enter any text here..!');
    } else {

        var getItem = document.getElementById("addItem");

        var tr = document.createElement('tr');

        var tdItem = document.createElement('td');
        var tdText = document.createTextNode(getItem.value)

        tdItem.appendChild(tdText)
        tr.appendChild(tdItem)

        //editbutton
        var tdEdit = document.createElement('td');
        tdEdit.setAttribute('style', 'width: 10px')

        var eBtn = document.createElement('button')
        eBtn.setAttribute('class', 'btn btn-dark')
        eBtn.setAttribute('onclick', 'editItem(this)');

        var eIcon = document.createElement('i')
        eIcon.setAttribute('class', 'fa fa-pencil-square-o')
        eIcon.setAttribute('aria-hidden', 'true');

        eBtn.appendChild(eIcon)
        tdEdit.appendChild(eBtn)
        tr.appendChild(tdEdit)


        //delbutton
        var tdDel = document.createElement('td');
        tdDel.setAttribute('style', 'width: 10px')

        var dBtn = document.createElement('button')
        dBtn.setAttribute('class', 'btn btn-dark')
        dBtn.setAttribute('onclick', 'delItem(this)');

        var dIcon = document.createElement('i')
        dIcon.setAttribute('class', 'fa fa-trash');
        dIcon.setAttribute('aria-hidden', 'true');

        dBtn.appendChild(dIcon)
        tdDel.appendChild(dBtn)
        tr.appendChild(tdDel)

        content.appendChild(tr)

        getItem.value = "";
    }
}

function deleteAll() {
    content.innerHTML = "";
}

function delItem(delBtn) {
    content.deleteRow(delBtn.parentNode.parentNode.rowIndex);
}

function editItem(editBtn) {
    var val = editBtn.parentNode.parentNode.firstChild.innerText;
    var newVal = prompt("Enter new value", val);
    if (newVal.replace(/\s/g, "") == "") {
        alert('Enter any text here..!');
    } 
    else {
        editBtn.parentNode.parentNode.firstChild.innerText = newVal
    }

}
