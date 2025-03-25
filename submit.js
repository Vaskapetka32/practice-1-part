const form = document.getElementById("form");

function retrieveFormValue(event) {
  event.preventDefault();

  const name = form.querySelector("#name"),
    surname = form.querySelector("#surname"),
    email = form.querySelector("#email"),
    password = form.querySelector("#password");

  if (!name.value || !surname.value || !email.value || !password.value) {
    alert("Пожалуйста, заполните все поля!");
    return;
  }

  const values = {
    name: name.value,
    surname: surname.value,
    email: email.value,
    password: password.value,
  };

  console.log("submit", values);

  // Выводим данные на страницу
  const output = document.getElementById("output");
  output.innerHTML = `
    <h2>Данные формы:</h2>
    <p><strong>Имя:</strong> ${values.name}</p>
    <p><strong>Фамилия:</strong> ${values.surname}</p>
    <p><strong>Email:</strong> ${values.email}</p>
    <p><strong>Пароль:</strong> ${values.password}</p>
  `;

  // Очищаем поля формы
  form.reset();
}

form.addEventListener("submit", retrieveFormValue);
