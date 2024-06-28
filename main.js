const listContainer = document.getElementById('list-container');
const input = document.getElementById('input');

function addTask(){
    if(input.value == ''){
        alert('Empty Task.');
    }else{
        let li = document.createElement('li');
        li.innerHTML = input.value;
        listContainer.appendChild(li)

        let span = document.createElement('span')
        span.innerHTML = "\u00d7";
        li.appendChild(span)
    }
    
    input.value = ''
    saveTask()
}

listContainer.addEventListener('click', function(e){
    if(e.target.tagName == 'LI'){
        e.target.classList.toggle('checked');
        saveTask();
    }else if(e.target.tagName == 'SPAN'){
        e.target.parentElement.remove();
        saveTask();
    }
})

function saveTask(){
    localStorage.setItem("task", listContainer.innerHTML)
}

function getTask(){
    listContainer.innerHTML = localStorage.getItem('task')
}

getTask();