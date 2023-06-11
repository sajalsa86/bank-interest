function calculateInterest() {
    var principal = document.getElementById("principal").value;
    var interestRate = document.getElementById("interestRate").value;
    var time = document.getElementById("time").value;

    var yearlyInterest = principal * (interestRate / 100);
    var monthlyInterest = yearlyInterest / 12;

    var yearlyDecreased = yearlyInterest * 0.9;
    var monthlyDecreased = monthlyInterest * 0.9;

    document.getElementById("yearlyResult").innerHTML = "Yearly Interest: $" + yearlyInterest.toFixed(2);
    document.getElementById("monthlyResult").innerHTML = "Monthly Interest: $" + monthlyInterest.toFixed(2);

    var yearlyDecreasedElement = document.createElement("p");
    yearlyDecreasedElement.innerHTML = "Yearly Decreased: $" + yearlyDecreased.toFixed(2);
    document.getElementById("yearlyResult").appendChild(yearlyDecreasedElement);

    var monthlyDecreasedElement = document.createElement("p");
    monthlyDecreasedElement.innerHTML = "Monthly Decreased: $" + monthlyDecreased.toFixed(2);
    document.getElementById("monthlyResult").appendChild(monthlyDecreasedElement);
}