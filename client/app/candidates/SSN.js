let ssn = () => {
  return {
    require: "ngModel",
    link: (scope, element, attrs, ngModelController) => {
      ngModelController.$validators.ssn = function(viewValue, modelValue) {
        if (ngModelController.$isEmpty(modelValue)) {
          return true;
        }
        if (modelValue.match(/^\d{3}-?\d{2}-?\d{4}$/)) {
          return true;
        } else {
          return false;
        }
      };
    }
  };
};

export default ssn;
