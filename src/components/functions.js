export const filterInputValue = (event) => {
  const allowedSymbols = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    ".",
  ];

  const symbolsValueArray = event.target.value.split("");
  const resultArray = [];
  symbolsValueArray.forEach((symbol) => {
    if (allowedSymbols.includes(symbol)) {
      resultArray.push(symbol);
    }
  });
  const resultValue = resultArray.join("");
  return resultValue;
};
