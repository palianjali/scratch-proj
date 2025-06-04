// Load tasks from localStorage on page load
window.onload = function () {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks.forEach(task => renderTask(task.text, task.completed));
};

function addTask() {
  const input = document.getElementById('task-input');
  const taskText = input.value.trim();

  if (taskText === '') {
    alert('Please enter a task!');
    return;
  }

  renderTask(taskText, false);
  saveTasks();
  input.value = '';
}

function renderTask(text, completed) {
  const li = document.createElement('li');
  li.textContent = text;
  if (completed) li.classList.add('completed');

  li.addEventListener('click', () => {
    li.classList.toggle('completed');
    saveTasks();
  });

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.onclick = () => {
    li.remove();
    saveTasks();
  };

  li.appendChild(deleteBtn);
  document.getElementById('task-list').appendChild(li);
}

function saveTasks() {
  const taskList = document.querySelectorAll('#task-list li');
  const tasks = [];

  taskList.forEach(li => {
    const text = li.childNodes[0].nodeValue.trim();
    const completed = li.classList.contains('completed');
    tasks.push({ text, completed });
  });

  localStorage.setItem('tasks', JSON.stringify(tasks));
}
