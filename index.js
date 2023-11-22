document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("button");
  const idadv = document.getElementById("advice-id");
  const advicehtml = document.getElementById("advice-text");

  button.addEventListener("click", () => {
    fetch("https://api.adviceslip.com/advice")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Network response was not ok: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        if (data && data.slip && data.slip.id) {
          idadv.innerText = "#" + data.slip.id;
        } else {
          console.error("Data, data.slip, or data.slip.id is undefined");
        }
        if (data && data.slip && data.slip.id) {
          advicehtml.innerText = data.slip.advice;
        } else {
          console.error("Data, data.slip, or data.slip.id is undefined");
        }
      })
      .catch((error) => console.error("Fetch error:", error));
  });
});
