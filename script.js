function calculateInterest() {
    var principal = document.getElementById("principal").value;
    var interestRate = document.getElementById("interestRate").value;
    var time = document.getElementById("time").value;

    var yearlyInterest = (principal * interestRate * time) / 100;
    var monthlyInterest = yearlyInterest / 12;

    // var yearlyDecreased = yearlyInterest * 0.9;
    // var monthlyDecreased = monthlyInterest * 0.9;
    //or
    var yearlyDecreased = yearlyInterest - (yearlyInterest * 0.1);
    var monthlyDecreased = monthlyInterest - (monthlyInterest * 0.1);

    document.getElementById("yearlyResult").innerHTML = "Total Profit: = " + yearlyInterest.toFixed(2) + " Taka in " + time + " Years";
    document.getElementById("monthlyResult").innerHTML = "Total Profit: = " + monthlyInterest.toFixed(2) + " Taka in 1 Month";

    var yearlyDecreasedElement = document.createElement("p");
    yearlyDecreasedElement.innerHTML = "Without Govt 10% Vat: = " + yearlyDecreased.toFixed(2);
    document.getElementById("yearlyResult").appendChild(yearlyDecreasedElement);

    var monthlyDecreasedElement = document.createElement("p");
    monthlyDecreasedElement.innerHTML = "Without Govt 10% Vat: = " + monthlyDecreased.toFixed(2);
    document.getElementById("monthlyResult").appendChild(monthlyDecreasedElement);
}