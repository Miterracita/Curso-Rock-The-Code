const mongoose = require('mongoose');

const libroSchema = new mongoose.Schema(
  {
    // id: { type: mongoose.Types.ObjectId, required: true},
    titulo: { type: String, required: true },
    autor: { type: String, required: false },
    idioma: { type: String, required: false },
    paginas: { type: Number },
    edicionBolsillo: { type: Boolean },
  },
  {
    timestamps: true,
  }
);

const Libro = mongoose.model('libros', libroSchema, 'libros');
module.exports = Libro;
