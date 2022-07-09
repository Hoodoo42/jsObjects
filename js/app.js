// variable as an object  let variable = { key:value, key:value,}

let company = {
    companyName: `Car Tunes`,
    yearlyRevenue: 2500000,
    ceo: `Harmony`,
    numberOfEmployees: 42,
    
    // Before object --> managers: [`Abigail`, `Betty`, `Claire`, `Darla`]
    
    // Managers is still an array - just containing more complicated data structures
    managers:[
        {
            name: `Abigail`,
            salary: 30000,
            isSenior: false,
        },
        {
            name: `Betty`,
            salary: 40000,
            isSenior: false,
        },
        {
            name: `Claire`,
            salary: 50000,
            isSenior: true,
        },
        {
            name:`Darla` ,
            salary: 60000,
            isSenior: true,
        }]
};

// I had [`managers.length])
let managerCount = 0;
while(managerCount < company[`managers`].length){
    // console.log(company[`managers`][managerCount]);
    console.log(company[`managers`][managerCount][`name`])
    console.log(company[`managers`][managerCount][`salary`])
if(company[`managers`][managerCount][`isSenior`]){
        console.log(`Welcome Senior`)
    }

    managerCount++;
}






// MAKE SURE everything inside the []are backticked, even if the value of the variable is a number, as you are accessing the KEY not the VALUE, and it prints the value of that key
if(company[`yearlyRevenue`] >= 1000000){
    console.log(`Congratulations: ${company[`ceo`]} of ${company[`companyName`]} and the ${company[`numberOfEmployees`]} employees for breaking 1000000`);
}else{
    console.log(`Keep trying!`);
}


