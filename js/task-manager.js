function weeklyGoal(userName, dailyGoal, bonusTasks) {
    // Weekly Goal: Calculate the total weekly task goal for a user.
        
    // Declare variables and values
    userName = document.getElementById("myName").value;
    dailyGoal = document.getElementById("dtg").value; 
    bonusTasks = document.getElementById("wbt").value; 
        
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
    return output;
};
document.getElementById("goal-btn").addEventListener("click", function(event){
    event.preventDefault();
    weeklyGoal();
});