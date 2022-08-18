import React from "react";

const CardError = () => {
  return (
    <div className="hero min-h-screen bg-white-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold text-error">Error de conexión ⚠</h1>
          <p className="py-6">
            Es posible que esté en mal estado el serivdor, intententelo más
            tarde.
          </p>
          <button
            className="btn btn-primary"
            onClick={() => window.location.reload()}
          >
            reconectar
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardError;
