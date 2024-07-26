document.addEventListener("DOMContentLoaded", () => {
  const menuIcon = document.getElementById("menu-icon");
  const closeIcon = document.getElementById("close-icon");
  const sidebar = document.createElement("div");
  sidebar.classList.add("sidebar");
  document.body.appendChild(sidebar);

  const links = document.querySelectorAll(".header .navbar a");
  links.forEach((link) => {
    const clonedLink = link.cloneNode(true);
    sidebar.appendChild(clonedLink);
  });

  menuIcon.addEventListener("click", function () {
    sidebar.classList.add("show");
    menuIcon.style.opacity = 0;
    closeIcon.classList.add("show");
  });

  closeIcon.addEventListener("click", function () {
    sidebar.classList.remove("show");
    closeIcon.classList.remove("show");
    menuIcon.style.opacity = 1;
  });
});


