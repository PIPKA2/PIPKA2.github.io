const renderPopUp = function (element) {
  const popup = `
  <div class="popup">
    <div class="progress-bar">
      <div class="bar"></div>
    </div>
    <div class="wrapper-popup">
      <div class="subtitle">Отправлено ${element} из ${3} заявок</div>
      <p class="text">
        Получите персональное предложение с максимальной вероятностью
        одобрения
      </p>
      <div class="btn-wrapper">
        <a href="${""}" target="_blank" class="btn-popup">Оформить займ</a>
      </div>
    </div>
  </div>`;

  document.querySelector("section").insertAdjacentHTML("beforeend", popup);
};

const renderCard = function (element, type) {
  const htmlItem = `
  <div class="card${type === "single" ? " c-active" : ""}" data-id="${
    element.id
  }">
  <div class="top">
    <div class="logo--loans">
    <img src='${"https://yescash.ru" + element.logo}' alt='${
    element.title
  }' title='${element.title}'></img>
    </div>
    <div class="price">${element.header} ₽</div>
  </div>
  <div class="bottom">
    <div class="percent"><span>${element.chance}%</span> одобрения</div>
    <div class="years">${element.subHeader}</div>
  </div>
  <div class="btn--wrapper">
    <a target="_blank" href="${element.link}" class="${
    type === "single" ? "active btn" : "unactive btn"
  }">${type === "single" ? "Отменить" : "Получить деньги"}
    </a>
  </div>
</div>
   `;

  document.querySelector(".wrapper").insertAdjacentHTML("beforeend", htmlItem);
};

let sortedArr = [];

const FetchingData = async () => {
  const res = await fetch("https://yescash.ru/api/final");
  const { targets } = await res.json();
  const arrLoans = targets.default;

  sortedArr = arrLoans.sort((e1, e2) => +e2.chance - +e1.chance);

  sortedArr.forEach((element) => {
    renderCard(element);
  });
};
FetchingData();

document.querySelector(".wrapper").addEventListener("click", function (e) {
  if (e.target.classList.contains("btn")) {
    const cardTarget = e.target.closest(".card");
    if (!cardTarget.classList.contains("c-active")) {
      const deletedItem = [...sortedArr].filter(
        (item) => item.id === +cardTarget.getAttribute("data-id")
      );

      cardTarget.remove();
      renderCard(deletedItem[0], "single");
      renderPopUp();
    } else {
      e.preventDefault();

      e.target.textContent =
        e.target.textContent === "Получить деньги"
          ? "Отменить"
          : "Получить деньги";
      e.target.className =
        e.target.className === "active btn" ? "unactive btn" : "active btn";
      cardTarget.className =
        cardTarget.className === "card" ? "c-active" : "card";
    }
  }
});
