const Libro = require("../models/Libro");

//CONTROLADORES (endpoint) --> funciones que queremos que nuestro servidor realice (CRUD)

//consultar todos los libros en bbdd
const getLibros = async (req, res, next) => {
    try {
        const libros = await Libro.find();
        return res.status(200).json(libros);
    } catch (error){
        return res.estatus(400).json("error");
    }
}

//publicar un libro
const postLibros = async (req, res, next) => {
    try {
    // Crearemos una instancia de libros con los datos enviados
    // const newLibro = new Libro({
    //     titulo: req.body.titulo,
    //     autor: req.body.autor,
    //     idioma: req.body.idioma,
    //     paginas: req.body.paginas,
    //     edicionBolsillo: req.body.edicionBolsillo
    // });
        const newLibro = new Libro(req.body);
        const libroGuardado = await newLibro.save();
        return res.status(201).json(libroGuardado);
    } catch (error){
        return res.estatus(400).json("error");
    }
}

//actualizar un libro (por ID pero se puede hacer con cualquier dato)
const updateLibros = async (req, res, next) => {
    try {
        const { id } = req.params;  
        const newLibro = new Libro(req.body);
        newLibro._id = id;
        const libroActualizado = await Libro.findByIdAndUpdate(id, newLibro, { new: true, });
        return res.status(201).json(libroActualizado);
    } catch (error){
        return res.estatus(400).json("error");
    }
}

//borrar un libro
const deleteLibros = async (req, res, next) => {
    try {
        const { id } = req.params;
        const libroDelete = await Libro.findByIdAndDelete(id);
        return res.status(200).json(libroDelete);
    } catch (error){
        return res.estatus(400).json("error");
    }
}

// //endpoint para consultar un libro con determinado id en la bbdd
const getLibroById = async (req, res) => {
	const id = req.params.id;
	try {
		const libro = await Libro.findById(id);
		if (libro) {
			return res.status(200).json(libro);
		} else {
			return res.status(404).json('No se ha encontrado ningún libro con este id');
		}
	} catch (err) {
		return res.status(500).json(err);
	}
}

// router.get('/libros/:id', getLibroById);
// //fin endpoint

// //endpoint para consultar un libro por su título
const getLibrosByTitulo = async (req, res) => {
	const { titulo } = req.params;

	try {
		const libroByTitulo = await Libro.find({ titulo: titulo });
		return res.status(200).json(libroByTitulo);
	} catch (err) {
		return res.status(500).json(err);
	}
}

// router.get('/libros/titulo/:titulo', getLibrosByTitulo);

module.exports = {
    getLibros,
    getLibroById,
    getLibrosByTitulo,
    postLibros,
    updateLibros,
    deleteLibros
}