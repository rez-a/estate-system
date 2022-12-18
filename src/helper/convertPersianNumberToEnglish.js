const convertPersianNumberToEnglish = (string) => {
  let number = string.split("");
  number = number.map((item) => {
    switch (item) {
      case "۰":
        return "0";
      case "۱":
        return "1";
      case "۲":
        return "2";
      case "۳":
        return "3";
      case "۴":
        return "4";
      case "۵":
        return "5";
      case "۶":
        return "6";
      case "۷":
        return "7";
      case "۸":
        return "8";
      case "۹":
        return "9";
    }
  });
  let newNumber = "";
  number = number.forEach((item) => (newNumber += item));
  return newNumber;
};

export default convertPersianNumberToEnglish;
