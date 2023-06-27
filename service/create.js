function createNewDoc(model) {
  return async (req, res, next) => {
    try {
      const result = new model({
        ...req.body,
      });
      await result.save();
      res.data = result;
      next();
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  };
}
module.exports.createNewDoc = createNewDoc;
