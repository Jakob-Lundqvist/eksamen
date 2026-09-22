document.querySelectorAll(".job").forEach((job) => {
  job.addEventListener("click", () => {
    const content = job.nextElementSibling;
    content.classList.toggle("open");
    job.classList.toggle("active");
  });

  // Så det også kan betjenes med tastatur (Enter), ligesom summary kunne
  job.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      job.click();
    }
  });
});
