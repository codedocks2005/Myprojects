document.addEventListener("DOMContentLoaded", () => 
{
    console.log(document.getElementById("todo-input"));

    const input = document.getElementById("todo-input");
    const addbutton = document.getElementById("add-input");
    const todolist = document.getElementById("todo-list");

    // Add a new task
    addbutton.addEventListener("click", () =>
    {
        const tasktext = input.value.trim();
        if(tasktext == "" ){
            alert("Please enter the task");
            return ;


        }
        const listitems = document.createElement("li");
        listitems.textContent = tasktext ;

        const deletebttn = document.createElement("button");
        deletebttn.textContent = "delete";
        deletebttn.addEventListener("click", () =>
        {
            todolist.removeChild(listitems);
        });

        listitems.appendChild(deletebttn);
        todolist.appendChild(listitems);

        input.value="";
    });

    input.addEventListener("keypress", (event) => {
        if(event.key == "Enter"){
            addbutton.click();
        }
    });
});