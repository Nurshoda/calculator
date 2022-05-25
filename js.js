const nums = document.querySelectorAll(".num");
const typed = document.querySelector(".type");
const result = document.querySelector(".result");

let val = "0";

nums.forEach((num) => {
  num.addEventListener("click", (e) => {
    typed.classList.remove(".active");
    let char = e.target.innerText;
    if (val === "0" && !char.match(/[+-\/*.]/gi)) {
      val = char;
    } else {
      val += char;
    }

    if (val.match(/[0-9]+[+-\/*.]+/gi)) {
      const operator = val[val.length - 1];
      val = val.substring(0, val.length - 2) + operator;
    }

    typed.innerText = val.replace(/\*/g, "x").replace(/\//g, ":");
    if (!val.match(/[0-9]+[+-\/*]$/g)) {
      try {
        result.innerText = eval(val);
      } catch (error) {
        invalidExpression();
      }
    }
  });
});
