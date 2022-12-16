export const convertSpliterToNumber = (priceWithSpliter) => {
  let price = "";
  priceWithSpliter = priceWithSpliter.trim();
  priceWithSpliter.split(",").map((item) => {
    price += item;
  });
  return Number(price);
};
