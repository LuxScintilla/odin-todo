const toggleButton = document.querySelector(".theme-toggle");

const storedTheme =
  localStorage.getItem("theme") ||
  (window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light");
if (storedTheme) {
  document.documentElement.setAttribute("data-theme", storedTheme);
}

export default function themeModeToggle() {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  let targetTheme = "light";
  toggleButton.classList.remove("theme-toggle-active");

  if (currentTheme === "light") {
    toggleButton.classList.add("theme-toggle-active");
    targetTheme = "dark";
  }

  document.documentElement.setAttribute("data-theme", targetTheme);
  localStorage.setItem("theme", targetTheme);
}
