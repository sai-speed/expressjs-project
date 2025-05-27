const asyncHandler = (requestHandler) => async (req, res, next) => {
  Promise.resolve(requestHandler(req, res, next)).catch((error) => next(error));
};

export { asyncHandler };
