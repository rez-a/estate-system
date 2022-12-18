const validatePostData = (postData) => {
  const {
    build_in,
    category,
    document,
    metrage,
    mortgage,
    number,
    parking,
    price,
    rent,
    room,
    title,
    warehouse,
  } = postData;
  let result = {
    build_in: true,
    category: true,
    document: true,
    metrage: true,
    mortgage: true,
    number: true,
    parking: true,
    price: true,
    rent: true,
    room: true,
    title: true,
    user_id: true,
    warehouse: true,
  };
  if (String(build_in).trim() === "") {
    result = {
      ...result,
      build_in: false,
    };
  }
  if (String(category).trim() === "") {
    result = {
      ...result,
      category: false,
    };
  }
  if (String(document).trim() === "") {
    result = {
      ...result,
      document: false,
    };
  }
  if (String(metrage).trim() === "") {
    result = {
      ...result,
      metrage: false,
    };
  }
  if (String(category) === "buy") {
    if (String(price).trim() === "") {
      result = {
        ...result,
        price: false,
      };
    }
  } else if (String(category) === "mortgage") {
    if (String(mortgage).trim() === "") {
      result = {
        ...result,
        mortgage: false,
      };
    }
  } else if (String(category) === "rent") {
    if (String(mortgage).trim() === "") {
      result = {
        ...result,
        mortgage: false,
      };
    }
    if (String(rent).trim() === "") {
      result = {
        ...result,
        rent: false,
      };
    }
  }
  if (String(number).trim() === "") {
    result = {
      ...result,
      number: false,
    };
  }
  if (String(parking).trim() === "") {
    result = {
      ...result,
      parking: false,
    };
  }
  if (String(room).trim() === "") {
    result = {
      ...result,
      room: false,
    };
  }
  if (String(title).trim() === "") {
    result = {
      ...result,
      title: false,
    };
  }
  if (String(warehouse).trim() === "") {
    result = {
      ...result,
      warehouse: false,
    };
  }
  return result;
};

export default validatePostData;
