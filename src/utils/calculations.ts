const calculate = (previousValue: string, newValue: string, operator: string): string => {
  switch(operator) {
    case '+':
      return (parseFloat(previousValue) + parseFloat(newValue)).toString()
      break;
    case '-':
      return (parseFloat(previousValue) - parseFloat(newValue)).toString()
      break;
    case 'x':
      // todo
      return '0'
      break;
    case '/':
      // todo
      return '0'
      break;
    case '%':
      // todo
      return '0'
      break;
    default:
      return '0';
  }
}

const updateDisplay = (value: string, currentValue: string): string => {
  if (currentValue === '0') {
    return value;
  } else if( value === '.' && currentValue.match(/\./g)){
    return currentValue;
  }

  return currentValue + value;
}

export {
  updateDisplay,
  calculate
}
