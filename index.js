let ul = document.getElementById('list')
let li;

let addButton = document.getElementById('add');
addButton.addEventListener('click', addItem);

let removeButton = document.getElementById('remove');
removeButton.addEventListener('click', removeItem);

let removeAllButton = document.getElementById('remove-all');
removeAllButton.addEventListener('click', removeAll);

function addItem(){
    let input = document.getElementById('input');
    let item = input.value;
    let textNode = document.createTextNode(item);

    if (item == ''){
        //return false
        //add a p tag and assign a value of 'enter your todo'
        let p = document.createElement('p')
        let warn = document.createTextNode('Please Enter Your Todo')
        p.appendChild(warn);
        document.querySelector('p').appendChild(p)
    }else{
        //create li
        li = document.createElement('li')

        //create checkbox
        let checkbox = document.createElement('input')
        checkbox.type = 'checkbox'
        checkbox.setAttribute('id', 'check')

        // create label
        let label = document.createElement('label');
        label.setAttribute('for', 'item') 
        
        //add these elements on webpage
        ul.appendChild(label);
        li.appendChild(checkbox);
        label.appendChild(textNode);
        li.appendChild(label);
        ul.insertBefore(li, ul.childNodes[0])

        setTimeout(() => {
            li.className = 'visual';
        }, 10);
        input.value = '';
    }
}

function removeItem(){
    li = ul.children
    for (let index = 0; index < li.length; index++){
        while (li[index] && li[index].children[0].checked){
            ul.removeChild(li[index])
        }
    }
}

function removeAll(){
    //ul.innerHTML = '';
    while (ul.firstChild) {
        ul.removeChild(ul.firstChild);
    }
}