let myTasks = [];
function weeklyGoal(userName, dailyGoal, bonusTasks) {
    // Weekly Goal: Calculate the total weekly task goal for a user.
        
    // Output message to console
    console.log("Checking status for: " + userName); 

    // Calculate weekly goal based on number of workdays (5) per week
    let weeklyGoal = dailyGoal * 5; 

    // Add bonusTasks to weeklyGoal. 
    let totalGoal = weeklyGoal + bonusTasks; 

    // Output results to web page
    let output = "User: " + userName + "<br>" + 
    "Total Weekly Goal: " + totalGoal + "<br>"; 
    document.getElementById("goal-message").innerHTML = output;
};
const btn = document.getElementById("goal-btn");
btn.addEventListener("click", function(event){
    event.preventDefault();

    // Declare variables and values
    userName = document.getElementById("myName").value;
    dailyGoal = parseInt(document.getElementById("dtg").value); 
    bonusTasks = parseInt(document.getElementById("wbt").value);

    weeklyGoal(userName, dailyGoal, bonusTasks);
});
let newEl = document.createElement("ul");
newEl.id = "user-tasks";
document.getElementById("task-list").appendChild(newEl);

const sbmtTaskBtn = document.getElementById("submit-task");
sbmtTaskBtn.addEventListener("click", function(event){
    event.preventDefault();
    const enterTask = document.getElementById("enter-task").value;
    if(enterTask) {
        myTasks.push(enterTask);
        let li = document.createElement("li");
        li.textContent = enterTask;
        document.getElementById("user-tasks").appendChild(li);
        document.getElementById("enter-task").value = "";
    }});

function addTask(task) {
    myTasks.push(task);
    let l = document.createElement("l");
    l.textContent = task;
    l.id = "task";
    document.getElementById("taskName").appendChild(l);
    console.log(JSON.stringify(myTasks));
    console.log(l);
    if (l = document.getElementById("highOrLow").value === "high") {
        document.getElementById("task").style.color = "red";
    }
};
function taskComplete(task) {
    document.getElementById("task").style.textDecoration = "line-through";
    console.log(JSON.stringify(myTasks));
};
function deleteTask(task) {
    task.remove();
    console.log(JSON.stringify(myTasks));
};
const addTaskBtn = document.getElementById("submit-btn");
addTaskBtn.addEventListener("click", function(event){
    event.preventDefault();
    const task = document.getElementById("taskName").value;
    if (task != "") {
        addTask(task);
    }
    if (task != "") {
        taskComplete(task);
    }});
const deleteTaskBtn = document.getElementById("delete-btn");
deleteTaskBtn.addEventListener("click", function(event){
    event.preventDefault();
    if (myTasks.length > 0) {
        deleteTask(myTasks[0]);
    }});
