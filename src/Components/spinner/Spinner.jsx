import "./Spinner.css"
const Spinner = () => {
  return (
    <div class="loader-circle">
      <p class="loader-content">LOADING</p>
      <div class="loader-line-mask">
        <div class="loader-line"></div>
      </div>
    </div>
  );
};

export default Spinner;
