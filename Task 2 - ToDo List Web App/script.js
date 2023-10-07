document.addEventListener('DOMContentLoaded', function () {
    const taskInput = document.getElementById('task');
    const addTaskButton = document.getElementById('addTask');
    const taskList = document.getElementById('taskList');

    addTaskButton.addEventListener('click', function () {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const li = document.createElement('li');
            li.innerHTML = `
                <span>${taskText}</span>
                <div class="buttons">
                <button class="edit-button">Edit</button>
                <button class="delete-button">Delete</button>
                </div>
            `;
            taskList.appendChild(li);

            // Clear the input field
            taskInput.value = '';

            // Attach a click event listener to the delete button
            li.querySelector('.delete-button').addEventListener('click', function () {
                taskList.removeChild(li);
            });

            // Attach a click event listener to the edit button
            const editButton = li.querySelector('.edit-button');
            editButton.addEventListener('click', function () {
                const taskSpan = li.querySelector('span');
                const currentText = taskSpan.textContent;
                const newText = prompt('Edit task:', currentText);
                if (newText !== null) {
                    taskSpan.textContent = newText;
                }
            });
        }
    });

    taskInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            addTaskButton.click();
        }
    });
});
