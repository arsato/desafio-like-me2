const express = require("express");
const router = express.Router();
const { getPosts, addPost, editPost, deletePost } = require("../queries");

router.use(express.json());

router.get("/posts", async (req, res) => {
  const post = await getPosts();
  res.json(post);
});

router.post("/posts", async (req, res) => {
  const { titulo, img, descripcion } = req.body;
  await addPost(titulo, img, descripcion);
  res.send("Post agregado con exito");
});

router.put("/posts/likes/:id", async (req, res) => {
  const { id } = req.params;
  await editPost(id);
  res.send("Like dado con exito");
});

router.delete("/posts/:id", async (req, res) => {
  const { id } = req.params;
  await deletePost(id);
  res.send("Post eliminado con exito");
});

module.exports = router;
