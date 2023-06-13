function calculateInterest() {
    var principal = document.getElementById("principal").value;
    var interestRate = document.getElementById("interestRate").value;
    var time = document.getElementById("time").value;

    var yearlyInterest = (principal * interestRate * time) / 100;
    //var monthlyInterest = yearlyInterest / 12;
    ////////////////////////////////////////////////////////////
    let monthlyInterest;

    if (time == 1) {
        monthlyInterest = yearlyInterest / 12;
    }
    else if (time == 2) {
        monthlyInterest = yearlyInterest / 24;
    }
    else if (time == 3) {
        monthlyInterest = yearlyInterest / 36;
    }
    else if (time == 4) {
        monthlyInterest = yearlyInterest / 48;
    }
    else if (time == 5) {
        monthlyInterest = yearlyInterest / 60;
    }
    else if (time == 6) {
        monthlyInterest = yearlyInterest / 72;
    }
    else if (time == 7) {
        monthlyInterest = yearlyInterest / 84;
    }
    else if (time == 8) {
        monthlyInterest = yearlyInterest / 96;
    }
    else if (time == 9) {
        monthlyInterest = yearlyInterest / 108;
    }
    else if (time == 10) {
        monthlyInterest = yearlyInterest / 120;
    }

    ////////////////////////////////////////////////////////////
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