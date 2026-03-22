
// Handler de erro para retornar status 500 e o motivo do erro, caso seja usado o ambiente de desenvolviemnto
export const errorHandler = (err, req, res, next) => {
  const status = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  
  if (process.env.NODE_ENV === "development") {
    res.status(status).json({
      status: status,
      message: message,
      path: req.originalUrl,
      stack: err.stack,
    });
  }
  else {
    // Produção: Não expor detalhes técnicos
    res.status(err.statusCode).json({
      status: status,
      message: message,
      path: req.originalUrl
    });
  }
};