//async await way
const asyncHandler = (func) => async (req, res, next) => {
  try {
    await func(req, res, next);
  } catch (error) {
    res.status(error.code || 500).json({
      success: false,
      message: error.message,
    });
  }
};

//promises way
// const asyncHandler = (requestHandler) => (req, res, next) => {
//   Promise.resolve(requestHandler(req, res, next).catch((err) => next(err)));
// };

export { asyncHandler };
