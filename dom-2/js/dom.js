const button = document.querySelector('div button');
const chapList = document.querySelector('.list')
const input = document.querySelector('#favchap');


const emptyCheck = () =>{
    if (input.value == null || input.value == ''){

    }
    else{
        addToList();
    };

}

const addToList = () =>{
    let myItem = input.value;
    input.value = '';
    
    const listItem = document.createElement("li");
    const listText = document.createElement('span');
    const listBtn = document.createElement('button');


    listItem.appendChild(listText);
    listText.textContent = myItem;
    listItem.appendChild(listBtn);
    listBtn.textContent = 'Delete';
    chapList.appendChild(listItem);

    //superficial change

    // listItem.appendChild(listText);
    // listItem.textContent = listText;
    // listText.textContent = input;
    // listBtn.textContent = 'Delete';
    // chapList.append(listItem)

    listBtn.onclick = function(e) {
        chapList.removeChild(listItem);
    }

    input.focus();


}


button.addEventListener('click', emptyCheck);



// const listText = document.createElement('span');
//         const listBtn = document.createElement('button');

//         listItem.appendChild(listText);
//         listText.textContent = myItem;
//         listItem.appendChild(listBtn);
//         listBtn.textContent = 'Delete';
//         list.appendChild(listItem);