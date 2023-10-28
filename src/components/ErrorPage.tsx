import { useRouteError, isRouteErrorResponse } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError(); // provides the error that was thrown.
  console.error(error);

  let errorMessage: string = '';

  if(isRouteErrorResponse(error)) {
    errorMessage = error.statusText //status text is "Not Found" when user navigates to page that does not exist
  }else if(error instanceof Error){
    errorMessage = error.message
  }

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{ errorMessage }</i>
      </p>
    </div>
  );
}