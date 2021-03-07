function calcular(){
    let priceWork = document.getElementById('valor-hora');
    let projectHours = document.getElementById('horas-projeto');
    let result = document.getElementById('resposta');
    
    if(priceWork.value == '' || projectHours.value == '') {
        alert('Você precisa inserir valores para calcular. Revise os dados e tente novamente');
    }else{
        let priceByHour = Number(priceWork.value);
        let quantityHours = Number(projectHours.value);
        let calculation = priceByHour * quantityHours;
        result.textContent = `Seu valor/hora custa ${priceByHour} reais. `;
        result.textContent += `Você irá dedicar ${quantityHours} horas a esse projeto. `;
        result.textContent += `Portanto, seu trabalho tem o custo total de: R$ `+ calculation.toFixed(2);
        }
    }