function Carousel() {
  return (
    <img
      className="d-block w-100 h-120 mt-5"
      src={process.env.PUBLIC_URL + "/assets/header-option.png"}
      alt="First slide"
    />
  );
}

export default Carousel;
