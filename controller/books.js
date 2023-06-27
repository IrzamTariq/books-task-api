const router = require("express").Router();
const Books = require("../entity/books");
const { paginatedResults } = require("../service/pagination");
const { createNewDoc } = require("../service/create");

router.get("/books", paginatedResults(Books), (req, res) => {
  res.json(res.paginatedResults);
});
router.post("/books", createNewDoc(Books), async (req, res) => {
  res.json(res.data);
});

module.exports = router;
