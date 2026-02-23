type strNumNull = number | string | null;

function calculateTax(amount: number, format: boolean = false): strNumNull {
  if (amount === 0) {
    return null;
  }
  const calAmount = amount * 1.2;
  return format ? `${calAmount.toFixed(2)}` : calAmount;
}

let taxValue: strNumNull = calculateTax(100)!;
switch (typeof taxValue) {
  case "number":
    console.log(`Number Value: ${taxValue.toFixed(2)}`);
    break;
  case "string":
    console.log(`String Value: ${taxValue.charAt(0)}`);
    break;
  default:
    console.log(`Unexpected value ${typeof taxValue}}`);
}
