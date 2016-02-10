let starRating = () => {
  return {
    scope: {
      starRating: "="
    },
    require: "ngModel",
    link: (scope, element, attrs, ngModelController) => {
      $(element).raty({
        path: "/images",
        click: (score, event) => {
          ngModelController.$setViewValue(score);
        }
      });
      ngModelController.$render = () => {
        $(element).raty("score", ngModelController.$viewValue);
      };
    }
  };
};

export default starRating;
