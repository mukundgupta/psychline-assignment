document.addEventListener("DOMContentLoaded", () => {
  const trailer = document.getElementById("trailer");

  if (!trailer) return;

  window.addEventListener("mousemove", (e) => {
    const x = e.clientX - trailer.offsetWidth / 2;
    const y = e.clientY - trailer.offsetHeight / 2;

    trailer.style.left = `${x}px`;
    trailer.style.top = `${y}px`;
  });
});
