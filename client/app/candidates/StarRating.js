let starRating = () => {
  return {
    scope: {
      starRating: "="
    },
    link: (scope, element, attrs) => {
      $(element).raty({
        path: "/images",
        click: (score, e) => {
          scope.starRating = score;
          scope.$apply();
        }
      });
      scope.$watch("starRating", (rating) => {
        $(element).raty("score", rating);
      });

    }
  };
};

export default starRating;
