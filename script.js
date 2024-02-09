function toggleAnswer(id) {
    var answer = document.getElementById("answer" + id);
    answer.classList.toggle("show");
}

// Set the year in the copyright
var year = new Date().getFullYear();
document.getElementById("20236").innerHTML = year;


