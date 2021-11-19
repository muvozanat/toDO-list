// 2021-yil, 18-noyabr
const form = document.querySelector("form"),
  qiymat = document.querySelector("input"),
  tbody = document.querySelector("tbody"),
  baza = document.querySelector("div .baza"),
  p = document.createElement('p'),
  qaydlar = JSON.parse(localStorage.getItem("qaydlar"));

if (qaydlar) {
  qaydlar.forEach((qayd) => {
    qabulQilish(qayd);
  });
}
form.addEventListener("submit", (e) => {
  e.preventDefault();
  qabulQilish();
  yangilashLX();
  form.reset();
});

function qabulQilish(qayd) {
  let qiymatAniqligi = qiymat.value;
  if (qayd) {
    qiymatAniqligi = qayd.text;
  }
  if (qiymatAniqligi !== "") {
    let tr = document.createElement("tr");
    td = `<td>${qiymatAniqligi} </td>`;
    p.innerHTML =
    "Ma'lumotni o'chirish uchun kiritgan matning ustiga 1 marta bosing";
    baza.appendChild(p);
    tr.innerHTML = td;
    tbody.appendChild(tr);
      tr.addEventListener("click", (e) => {
      e.preventDefault;
      tr.remove();
      p.remove();
      yangilashLX();
    });
    qiymatAniqligi = "";
  }
}

function yangilashLX() {
  const qaydlarEl = document.querySelectorAll("tbody tr td");
  const qaydlar = [];
  qaydlarEl.forEach((qaydlarEl) => {
    qaydlar.push({
      text: qaydlarEl.innerHTML,
    });
  });

  localStorage.setItem("qaydlar", JSON.stringify(qaydlar));
}
