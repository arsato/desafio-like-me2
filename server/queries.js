const pool = require("./config");

const getPosts = async () => {
  try {
    const posts = await pool.query("SELECT * FROM posts");
    return posts.rows;
  } catch (error) {
    console.log(error);
  }
};

const addPost = async (titulo, img, descripcion) => {
  try {
    const query = "INSERT INTO posts VALUES (DEFAULT, $1, $2, $3, $4)";
    const values = [titulo, img, descripcion, 0];
    const post = await pool.query(query, values);
    console.log("Post agregado");
    return post;
  } catch (error) {
    console.log(error);
  }
};

const editPost = async (id) => {
  try {
    const query =
      "UPDATE posts SET likes = likes + 1 WHERE id = $1";
    const values = [id];
    const resultado = await pool.query(query, values);
    console.log("Like agregado");
    return resultado;
  } catch (error) {
    console.log(error);
  }
};

const deletePost = async (id) => {
  try {
    const query = "DELETE FROM posts WHERE id = $1";
    const value = [id];
    const result = await pool.query(query, value);
    console.log("Post eliminado")
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getPosts, addPost, editPost, deletePost };
