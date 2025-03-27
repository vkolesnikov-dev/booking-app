import { useForm } from "react-hook-form";
import "./../assets/styles/global.css";

const AppLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange", // Валидация при изменении
  });

  const onSubmit = (data) => {
    console.log("Данные авторизации:", data);
    // Здесь можно добавить отправку данных на сервер
    /*
    fetch('https://your-api-endpoint/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(result => console.log(result))
      .catch(error => console.error(error));
    */
  };

  return (
    <div className="login-form border max-w-96 m-auto mt-20 p-10">
      <h2 className="title-login">Вход</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            {...register("email", {
              required: "Email обязателен",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Введите корректный email",
              },
            })}
            placeholder="Введите email"
          />
          {errors.email && (
            <span className="error">{errors.email.message}</span>
          )}
        </div>

        <div>
          <label>Пароль:</label>
          <input
            type="password"
            {...register("password", {
              required: "Пароль обязателен",
              minLength: {
                value: 6,
                message: "Пароль должен содержать минимум 6 символов",
              },
            })}
            placeholder="Введите пароль"
          />
          {errors.password && (
            <span className="error">{errors.password.message}</span>
          )}
        </div>

        <button type="submit">Войти</button>

        <p className="register-link">
          Нет аккаунта? <a href="/register">Зарегистрироваться</a>
        </p>
      </form>
    </div>
  );
};

export default AppLogin;
