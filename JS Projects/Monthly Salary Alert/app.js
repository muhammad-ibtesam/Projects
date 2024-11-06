var monthlySalary = prompt("What is your Monthly Salary")
var monthlyExpense = prompt("What is your Monthly Expense")

var calSavings = monthlySalary - monthlyExpense

Swal.fire({
    title: "Monthly Savings",
    text: "Your Monthly Savings is " +calSavings,
    icon: "info"
  });

// Swal.fire("Your monthly Savings is " + calSavings);

// alert("Your monthly savings is " + calSavings)
