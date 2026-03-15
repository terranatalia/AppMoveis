type UnidadeTemperatura = "celsius" | "fahrenheit";

function converterTemperatura(
  valor: number,
  unidade: UnidadeTemperatura
): number {
  if (unidade === "celsius") {

    return (valor * 9/5) + 32;
  } 
  
  else {

    return (valor - 32) * 5/9;
  }
}