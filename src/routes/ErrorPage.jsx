/** useRouteError é um hook do React Router que captura o erro lançado por uma rota.
Ele funciona dentro de um componente usado como elemento de erro (errorElement) no createBrowserRouter. */
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    // vou usar uma const para armazenar o erro
  const error = useRouteError();

  console.log(error);

  return (
    <div>
      <h1>Ops!</h1>
      <p>
        seus dados foram roubados, deseja recuperar? 100 reais em bitcoin para
        jd8suf348
      </p>
      {/** proprieddades de erro */}
      <p>{error.statusText}</p>
      <p>{error.error.message}</p>
      <p>{error.status}</p>
      <p>{error.data}</p>
    </div>
  );
};

export default ErrorPage;
