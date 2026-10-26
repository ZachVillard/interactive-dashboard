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
    document.getElementById("user-tasks").appendChild(task);
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
const addTaskBtn = document.getElementById("add-task");
addTaskBtn.addEventListener("click", function(event){
    event.preventDefault();
    console.log(myTasks.value);
    if (myTasks.length > 0) {
        addTask(myTasks.value);
    }
    if (myTasks[0] = document.getElementById("highOrLow").value === "high") {
        myTasks[0].style.color = "red";
    }});
const completeTaskBtn = document.getElementById("complete-task");
completeTaskBtn.addEventListener("click", function(event){
    event.preventDefault();
    if (myTasks.length > 0) {
        taskComplete(myTasks.value);
    }});
const deleteTaskBtn = document.getElementById("delete-task");
deleteTaskBtn.addEventListener("click", function(event){
    event.preventDefault();
    if (myTasks.length > 0) {
        deleteTask(myTasks.value);
    }});
