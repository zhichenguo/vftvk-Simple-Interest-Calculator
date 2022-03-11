function compute()
{
    var principal = document.getElementById("principal").value;
    // Validate the input of principal
    if (!(Number(principal) > 0)) {
        alert("Enter a positive number");
        document.getElementById("principal").value = "";
        document.getElementById("principal").focus();
        document.getElementById("result").innerHTML = "";
        return
    }

    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;

    // The interest should be calculated with a formula:
    // principal * (1 + rate / 100) ** years
    // but keep it with the same as the original source
    // to make it get the same result as the instructions.
    var interest = principal * years * rate / 100;
    var year = new Date().getFullYear() + parseInt(years);

    // Calculate the amount by adding number type of the principal and interest.
    // The instructions display only the interest but not the amount.
    // So we keep it the same with instructions here.
    // var amount = Number(principal) + interest;
    var amount = interest;

    // Display the result base on the input
    document.getElementById("result")
        .innerHTML = `If you deposit <mark>${principal}</mark>,<br\>
            at an interest rate of <mark>${rate}%</mark>.<br\>
            You will receive an amount of <mark>${amount}</mark>,<br\>
            in the year <mark>${year}</mark><br\>`;
}

function updateRate() 
{
    var rateVal = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = `${rateVal} %`;
}
