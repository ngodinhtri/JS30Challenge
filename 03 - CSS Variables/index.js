const inputELements = document.querySelectorAll(".controls input");
const root = document.documentElement;

inputELements.forEach((input) => {
  input.addEventListener("change", handleUpdate);
  input.addEventListener("mousemove", handleUpdate);
});

function handleUpdate(e) {
  let value = e.target.value;
  let unit = e.target.dataset.sizing ?? "";
  let name = e.target.name;
  root.style.setProperty(`--${name}`, `${value}${unit}`);
}
