var answers = ["Yes", "No", "Maybe", "Ask again", "It depends", "I don't know"];
function displayAnswer() {
    let index = Math.floor(Math.random() * answers.length);
    document.getElementById("circle").innerHTML = answers[index];
    document.getElementById("circle").style.display = "inline";
}
let ballMouseDown = document.getElementById("ball");
ballMouseDown.addEventListener("mousedown", function(event) {
    event.preventDefault();
    const input = document.getElementById("question");
    if (input.value === "") {
        alert("Please ask a yes/no question before shaking the Magic 8 Ball.");
    } else {
        displayAnswer();
    }
    let rset = document.getElementById("reset");
    rset.addEventListener("click", function(event) {
        event.preventDefault();
        input.value = "";
        document.getElementById("circle").style.display = "none";
    });
});
