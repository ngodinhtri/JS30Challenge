const switchElement = document.querySelector("#theme");
const currentTheme = localStorage.getItem("themeMode");

if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);

  if (currentTheme === "dark") {
    switchElement.checked = true;
  }
}

switchElement.onchange = (e) => {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("themeMode", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("themeMode", "light");
  }
};
