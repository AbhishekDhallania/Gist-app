const express = require('express');
const app = express();
const router = express.Router();
const gistController = require("../controllers/gistController");

router.get("/",gistController.getAllGist);
router.post("/",gistController.createGist);
router.get("/:id",gistController.getGist);
router.put("/:id",gistController.updateGist);
router.delete("/:id",gistController.deleteGist);
// router.route('/gists').get(getAllGists).post(createGist);


module.exports = router;