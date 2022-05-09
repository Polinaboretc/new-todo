const task1 = new ToDo('Compra il latte ', ToDo.PRIORITY.medium, ['spesa ', 'frigo']);

const task2 = new ToDo('Compra la focaccia', ToDo.PRIORITY.high, ['spesa ', 'casa']);

const task3 = new DeadLineToDo('Fai gli auguri a Nonna', new Date(2022, 6, 9), ToDo.PRIORITY.high, ['famiglia ', 'compleanni']);

const toDoList = [task1, task2, task3];



function displayToDoWithTemplate() {
     const template = `
        <span class="title">#TODOTITLE</span>
        </div>
        <div class="tags">

        </div>
        <div class="dates">
            <span class="creation-date">
                #CREATIONDATE
            </span>
        </div>
        <button class="todo-button">FATTO</button>
        `;

    const toDoContainer = document.getElementById('todo-container');

    for (let i = 0; i < toDoList.length; i++) {
        const todo = toDoList[i];


        const div = document.createElement('div')
        div.classList.add('first-container');
        const todoTemplate = template.replace('#TODOTITLE', todo.name)
                                     .replace('#CREATIONDATE', todo.creationDate.toISOString());

        div.innerHTML = todoTemplate;
        toDoContainer.appendChild(div);

        const tagContainer = div.querySelector('.tags');
        for (const tag of todo.tags) {
            const tagSpan = document.createElement('span');
            tagSpan.classList.add('tag')
            const node = document.createTextNode(tag);
            tagSpan.appendChild(node);
            tagContainer.appendChild(tagSpan);
        }

        if (todo.deadLineDate) {

            const dateContainer = div.querySelector('.dates');
 
            const dateSpan = document.createElement('span');
            const dateNode = document.createTextNode(todo.deadLineDate.toISOString());
            dateSpan.appendChild(dateNode);
            dateContainer.appendChild(dateSpan);
         }
        
        // const todoContainer = div.querySelector('.todo-container');
        // todoContainer.style.borderColor = todo.priority.color;
        
        


   
    }
}


displayToDoWithTemplate();



const doneList = [];