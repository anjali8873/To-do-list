function addTask() {
            let taskInput = document.getElementById("taskInput");
            let taskText = taskInput.value.trim();
            if (taskText === "") return;

            let li = document.createElement("li");
            li.innerHTML = `<span>${taskText}</span>
                <button class="done" onclick="markDone(this)">Done</button>
                <button class="edit" onclick="editTask(this)">Edit</button>
                <button class="delete" onclick="deleteTask(this)">Delete</button>`;
            document.getElementById("taskList").appendChild(li);
            taskInput.value = "";
        }

        function deleteTask(button) {
            button.parentElement.remove();
        }

        function editTask(button) {
            let task = button.parentElement;
            let taskText = task.querySelector("span").innerText;
            let newTask = prompt("Edit task:", taskText);
            if (newTask) task.querySelector("span").innerText = newTask;
        }

        function markDone(button) {
            let task = button.parentElement;
            task.querySelector("span").classList.toggle("completed");
        }
