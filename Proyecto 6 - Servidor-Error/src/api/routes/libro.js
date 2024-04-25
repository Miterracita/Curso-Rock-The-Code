const librosRouter = require("express").Router();
const { getLibros, getLibroById, getLibrosByTitulo, postLibros, updateLibros, deleteLibros } = require("../controllers/libro");


librosRouter.get("/", getLibros);
librosRouter.post("/", postLibros);
librosRouter.put("/:id", updateLibros);
librosRouter.delete("/:id", deleteLibros);

librosRouter.get('/libros/:id', getLibroById);
librosRouter.get('/libros/titulo/:titulo', getLibrosByTitulo);

module.exports = librosRouter;