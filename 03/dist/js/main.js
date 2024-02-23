let inputs = document.querySelectorAll("input");

inputs.forEach((input) => {
  input.addEventListener("change", (e) => {
    let dataSet = e.target.dataset.size || "";
    console.log(e.target.value);
    document.documentElement.style.setProperty(
      `--${e.target.name}`,
      e.target.value + dataSet
    );
  });
});