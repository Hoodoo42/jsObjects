// variable as an object  let variable = { key:value, key:value,}

let company = {
    companyName: `Car Tunes`,
    yearlyRevenue: 2500000,
    ceo: `Harmony`,
    numberOfEmployees: 42,
};

if(company[`yearlyRevenue`] >= 1000000){
    console.log(`Congratulations`, company[`ceo`] `of`, company[`companyName`] `and the`, company[numberOfEmployees] `employees for breaking 1000000`);
}else{
    console.log(`Keep trying!`);
}