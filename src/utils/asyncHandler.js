// return added on own

const asyncHandler = (requirementHandler) => {
  return (req, res, next) => {
    Promise.resolve(requirementHandler(req, res, next)).catch((error) =>
      next(error)
    );
  };
};

export { asyncHandler };

// const asyncHandler = (fn) => async (err, req, res, next) => {
//   try {
//     await fn(req, res, next);
//   } catch (error) {
//     res.status(error.code || 500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };
