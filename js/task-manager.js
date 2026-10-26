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
    let l = document.createElement("li");
    l.textContent = task;
    document.getElementById("user-tasks").appendChild(l);
    console.log(JSON.stringify(myTasks));
};
function taskComplete(task) {
    task.style.textDecoration = "line-through";
    console.log(JSON.stringify(myTasks));
};
function deleteTask(task) {
    task.remove();
    console.log(JSON.stringify(myTasks));
};
const addTaskBtn = document.getElementById("submit-btn");
addTaskBtn.addEventListener("click", function(event){
    event.preventDefault();
    console.log(myTasks[0]);
    if (myTasks.length > 0) {
        addTask(myTasks[0]);
    }
    if (myTasks[0] = document.getElementById("highOrLow").value === "high") {
        myTasks[0].style.color = "red";
    }
    if (myTasks.length > 0) {
        taskComplete(myTasks[0]);
    }});
const deleteTaskBtn = document.getElementById("delete-btn");
deleteTaskBtn.addEventListener("click", function(event){
    event.preventDefault();
    if (myTasks.length > 0) {
        deleteTask(myTasks[0]);
    }});
