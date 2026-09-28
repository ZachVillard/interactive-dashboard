var answer = Answers(6);
function displayAnswer() {
    let index = Math.floor(Math.random() * Answers.length);
    document.getElementById("circle").innerHTML = index;
}
let ballMouseDown = document.getElementById("ball");
ballMouseDown.addEventListener("mousedown", function() {
    if (document.getElementById("question").innerHTML === "") {
        alert("Please enter a question before shaking the Magic 8 Ball.");
    } else {
        displayAnswer();
    }
    let rset = document.getElementById("reset");
    rset.addEventListener("click", function() {
        index = "";
    });
});
