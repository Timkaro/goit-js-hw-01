// Ширина елемента
function getElementWidth(content, padding, border) {
  return (
    (Number.parseFloat(content) * 10) / 10 +
    (Number.parseFloat(padding) * 10 * 2) / 10 +
    (Number.parseFloat(border) * 10 * 2) / 10
  );
}
console.log(getElementWidth("50px", "8px", "4px"));
console.log(getElementWidth("60px", "12px", "8.5px"));
console.log(getElementWidth("200px", "0px", "0px"));
