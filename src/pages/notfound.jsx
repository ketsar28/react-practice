import { useRouteError } from "react-router-dom";
export const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="flex justify-center min-h-screen items-center flex-col">
      <h1 className="text-3xl font-bold text-red-600"> 404</h1>
      <h1 className="text-3xl font-bold text-red-600">
        {error.statusText || error.message}
      </h1>
      <p className="my-3 text-2xl">Sorry, an unexpected error has accured</p>
    </div>
  );
};
