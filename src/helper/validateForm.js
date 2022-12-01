const validateForm = (form, data) => {
  let validate = {};
  if (form === "register") {
    validate = {
      license: false,
      name: false,
      nationalCode: false,
      password: false,
      confirmPassword: false,
    };
    if (data.license.trim().length === 10) {
      validate = {
        ...validate,
        license: true,
      };
    }
    if (data.name.trim().length > 0) {
      validate = {
        ...validate,
        name: true,
      };
    }
    if (data.nationalCode.trim().length === 10) {
      validate = {
        ...validate,
        nationalCode: true,
      };
    }
    if (data.password.trim().length >= 4) {
      validate = {
        ...validate,
        password: true,
      };
    }
    if (
      data.confirmPassword.trim() >= 4 &&
      data.confirmPassword.trim() === data.password.trim()
    ) {
      validate = {
        ...validate,
        confirmPassword: true,
      };
    }
  } else {
    validate = {
      license: false,
      password: false,
    };
    if (data.license.trim().length === 10) {
      validate = {
        ...validate,
        license: data.license.trim(),
      };
    }
    if (data.password.trim().length >= 4) {
      validate = {
        ...validate,
        password: data.password.trim(),
      };
    }
  }
  return validate;
};

export default validateForm;
