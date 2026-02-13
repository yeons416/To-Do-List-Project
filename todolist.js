const input = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');
const todoCount = document.getElementById('todo-count');

// 개수 업데이트 함수
function updateCount() {
    // 전체 할 일 중 'completed' 아닌 것들만 가져오기
    const activeTasks = todoList.querySelectorAll('li:not(.completed)').length;
    todoCount.textContent = activeTasks;
}

function addTodo() {
    const value = input.value.trim();
    if (value === '') return;

    const li = document.createElement('li');
    li.innerHTML = `
        <div class="todo-content todo-left">
            <span class="star">☆</span>
            <span class="checkbox">☐</span>
            <span class="text">${value}</span>
        </div>
        <button class="delete-btn">X</button>
        `;

    todoList.appendChild(li);
    input.value = '';
    input.focus();
    updateCount();
}

addBtn.addEventListener('click', addTodo);

// 엔터키 지원
input.addEventListener('keypress',(e) => {
    if (e.key === 'Enter') addTodo();
});

function toggleImportance(e, li, star) {
    e.stopPropagation();
    li.classList.toggle('important');
    star.textContent = li.classList.contains('important') ? '★' : '☆';
}

function toggleComplete(li) {
    li.classList.toggle('completed');

    const checkboxElement = li.querySelector('.checkbox');
    checkboxElement.textContent = li.classList.contains('completed') ? '☑' : '☐';
    updateCount();
}

function deleteTodo(li) {
    li.remove();
    updateCount();
}

todoList.addEventListener('click', (e) => {
    const target = e.target;
    const li = target.closest('li');
    if (!li) return;

    if (target.classList.contains('star')) {
        toggleImportance(e, li, target);
    }

    else if (target.classList.contains('delete-btn')) {
        deleteTodo(li);
    }

    else if (target.closest('.todo-content')) {
        toggleComplete(li);
    }

})

