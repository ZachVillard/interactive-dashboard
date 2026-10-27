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
let detailedTasks = {}
let importantTask = document.getElementById("important");
function addTask(task) {
    detailedTasks[task] = { completed: false };
    let l = document.createElement("l");
    l.textContent = task;
    l.id = "task";
    document.getElementById("taskDiv").appendChild(l);
    document.getElementById("taskName").value = "";
    console.log(JSON.stringify(detailedTasks));
    console.log(l);
    if (document.getElementById("important").checked) {
        document.getElementById("task").style.fontWeight = "bold";
    }
    if (l = document.getElementById("highOrLow").value === "high") {
        document.getElementById("task").style.color = "red";
    }

};
function taskComplete(task) {
    detailedTasks[task].completed = true;
    document.getElementById("task").style.textDecoration = "line-through";
    console.log(JSON.stringify(detailedTasks));
};
function deleteList(task) {
    detailedTasks = {};
    document.getElementById("taskName").value = "";
    console.log(JSON.stringify(detailedTasks));
};
let newEl2 = document.createElement("u");
newEl2.id = "taskDiv";
document.getElementById("task-list").appendChild(newEl2);

const addTaskBtn = document.getElementById("submit-btn");
addTaskBtn.addEventListener("click", function(event){
    event.preventDefault();
    const task = document.getElementById("taskName").value;
    if (task) {
        addTask(task);
    }
    if (document.getElementById("completed").checked) {
        taskComplete(task);
    }
});
const deleteListBtn = document.getElementById("delete-btn");
deleteListBtn.addEventListener("click", function(event){
    event.preventDefault();
    const task = document.getElementById("taskName").value;
    deleteList(task);
});
