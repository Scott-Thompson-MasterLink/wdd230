const button = document.querySelector('div button');
const chapList = document.querySelector('.list')
const input = document.querySelector('#favchap');

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
button.addEventListener('click', addToList);



// const listText = document.createElement('span');
//         const listBtn = document.createElement('button');

//         listItem.appendChild(listText);
//         listText.textContent = myItem;
//         listItem.appendChild(listBtn);
//         listBtn.textContent = 'Delete';
//         list.appendChild(listItem);