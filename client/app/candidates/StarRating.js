let starRating = () => {
  return {
    scope: {
      starRating: "="
    },
    link: (scope, element, attrs) => {
      $(element).raty({path: "/images"});
      scope.$watch("starRating", (rating) => {
        $(element).raty("score", rating);
      });

    }
  };
};

export default starRating;
