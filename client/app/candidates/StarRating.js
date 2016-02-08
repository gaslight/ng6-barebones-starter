let starRating = () => {
  return {
    link: (scope, element, attrs) => {
      $(element).raty({path: "/images"});
    }
  };
};

export default starRating;
