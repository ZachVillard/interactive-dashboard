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

const addTaskBtn = document.getElementById("add-task");
addTaskBtn.addEventListener("click", function(event){
    event.preventDefault();
    const taskName = document.getElementById("task-name").value;
    if(taskName) {
        myTasks.push(taskName);
        let li = document.createElement("li");
        li.textContent = taskName;
        document.getElementById("user-tasks").appendChild(li);
        document.getElementById("task-name").value = "";
    }
});
