function calcularValorHora(){
let wage = document.getElementById('ganho-mes');
let hours = document.getElementById('horas-dia');
let result = document.getElementById('resposta');
let footer = document.querySelector('.secao__rodape__legenda');
let salary = Number(wage.value);
let work_hours = Number(hours.value);
const DAYS = 22;

if(salary <= 0 || work_hours == 0) {
    alert('Valor inválido para salário ou hora. Revise os dados e tente novamente!');
    }else {
    let firstCalc = work_hours * DAYS;
    let calculation = salary/firstCalc;
    result.textContent = 'R$' + calculation.toFixed(2);
    }
}
