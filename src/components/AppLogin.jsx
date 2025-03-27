import { useForm } from "react-hook-form";

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
      <h2 className="text-sky-500 font-bold text-center mb-5">Вход</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col items-center gap-5">
          <label>Email:</label>
          <input
            className="p-3 border-solid border-2"
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

        <div className="flex flex-col items-center gap-5">
          <label className="mt-5">Пароль:</label>
          <input
            className="p-3 border-solid border-2"
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

        <button
          className="m-0 m-auto block mt-5  bg-blue-500 p-2 border text-white"
          type="submit"
        >
          Войти
        </button>

        <p className="register-link mt-5 text-center">
          Нет аккаунта?{" "}
          <a className="text-blue-500" href="/login">
            Зарегистрироваться
          </a>
        </p>
      </form>
    </div>
  );
};

export default AppLogin;
