export function showCategory(category) {
  switch (category) {
    case "buy":
      return "خرید املاک";
    case "rent":
      return "اجاره املاک";
    case "mortgage":
      return "رهن املاک";
    default:
      return "همه آگهی ها";
  }
}
