const libros = require("../../data/libros");
const Libro = require("../../api/models/Libro");
const mongoose = require("mongoose");


// const lanzarSemilla = async () => {
//   try {
//     await mongoose.connect("mongodb+srv://anadiseny:Lle16VtjphKiuXoS@cluster0.golx2lf.mongodb.net/?retryWrites=true&w=majority");
    
//     // Buscamos todos los libros de nuestra colección
//     // const allLibros = await Libro.find();
  
//     // Si existen libros previamente, dropearemos (borramos) la colección
//       // if (allLibros.length) {
//         await Libro.collection.drop(); //La función drop borra la colección
//         console.log("peliculas eliminadas en bbdd");
//       // } else {
//         await Libro.insertMany(libros);
//         console.log("peliculas insertadas en bbdd");
//       // }
//       await mongoose.disconnect();
//       console.log("desconexión de la bbdd");
  
//   } catch (error){
//     console.log("Ha ocurrido un error");
//   }
// }

// lanzarSemilla();

// Conexión a la base de datos
mongoose.connect("mongodb+srv://anadiseny:Lle16VtjphKiuXoS@cluster0.golx2lf.mongodb.net/?retryWrites=true&w=majority")
  .then(async () => {
    try {
      // Buscamos todos los libros
      const allLibros = await Libro.find();

      // Si existen libros previamente, dropearemos (borraremos) la colección
      if (allLibros.length) {
        await Libro.collection.drop(); // La función drop borra la colección
        console.log("Libros existentes eliminados de la base de datos.");
      }

      // Insertamos muchos libros
      await Libro.insertMany(libros);
      console.log("Libros insertados correctamente!");
    } catch (error) {
      console.error(`Error: ${error}`);
    } finally {
      // Nos desconectamos de la base de datos
      await mongoose.disconnect();
      console.log("Desconectamos de la BBDD");
    }
  })
  .catch((err) => console.error(`Error conectando a la base de datos: ${err}`));