//Convert values to Br currency
export const convertMoney = (money) => {
  let formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
  });
  return formatter.format(money);
}


//Convert time to h/m format
export const  timeConvert=(num)=>
 { 
  const hours = Math.floor(num / 60);  
  const minutes = num % 60;
  return `${hours}h:${minutes}m`;         
}
