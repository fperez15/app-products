"use client";

export default function ErrorPage({ error }: { error: Error }) {

  console.log('error: ', error)

  const isNotFound = error.message.includes("404");
  const isServerError = error.message.includes("500");

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      {isNotFound ? (
        <>
          <h1 className="text-4xl font-bold text-blue-600">404 - Producto no encontrado</h1>
          <p className="text-gray-500 mt-2">
            Lo sentimos, el producto que buscas no existe.
          </p>
        </>
      ) : isServerError ? (
        <>
          <h1 className="text-4xl font-bold text-red-600">500 - Error del servidor</h1>
          <p className="text-gray-500 mt-2">
            Hubo un problema interno en la aplicación. Inténtalo más tarde.
          </p>
        </>
      ) : (
        <>
          <h1 className="text-4xl font-bold text-red-600">Oops! Algo salió mal.</h1>
          <p className="text-gray-500 mt-2">{error.message || "No se pudo cargar el producto."}</p>
        </>
      )}
    </div>
  );
}
