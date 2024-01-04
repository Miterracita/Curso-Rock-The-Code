  document.addEventListener('DOMContentLoaded', function() {

    const products = [
      {
        name: 'Aspidistra',
        price: 23.95,
        seller: 'Sa Fronda',
        image: 'image-2.jpg',
        maceta: '15 cm altura / 18 cm diámetro',
        descripcion: 'Conocida con muchos nombres coloquiales como pilistra, hojalata u oreja de burro, la aspidistra eliator se caracteriza por sus impresionantes hojas verdes y brillantes. Es muy fuerte y resistente y no necesita mucha humedad, ni mucha luz para sobrevivir',
      },
      {
        name: 'Sansevieria trifasciata "Laurentii"',
        price: 17.95,
        seller: 'Sa Fronda',
        image: 'image-3.jpg',
        maceta: '15 cm altura / 18 cm diámetro',
        descripcion: 'Conocida popularmente como Lengua de Tigre o Espada de San Jorge, la Sansevieria es una planta muy solicitada para interiores por su gran resistencia. Es longeva y fuerte, de manera que necesita pocos cuidados para sobrevivir.',
      },
      {
        name: 'Pachira aquatica Mini',
        price: 13.95,
        seller: 'El Corte Inglés',
        image: 'image-8.jpg',
        maceta: '9,5 cm altura / 12 cm diámetro',
        descripcion: 'Conocido como árbol del dinero mini o castaño de Guinea mini, este árbol es una versión en miniatura del popular árbol del dinero, ideal para interiores. Su tronco trenzado y su abundante follaje lo hacen perfecto para espacios pequeños, conservando toda la estética de su versión más grande.',
      },
      {
        name: 'Orquídea Phalaenopsis Ikaria',
        price: 19.95,
        seller: 'Edeen',
        image: 'image-9.jpg',
        maceta: '15 cm altura / 12 cm diámetro',
        descripcion: 'Las orquídeas Phalaenopsis son uno de los tipos de orquídea más comunes que existen en el mundo. Se trata de un género de las comúnmente llamadas orquídeas alevilla, orquídeas boca, y también, orquídeas mariposa debido a las inflorescencias que posee y que nos recuerdan a mariposas en vuelo.',
      },
      {
        name: 'Syringa Vulgaris',
        price: 11.95,
        seller: 'El Corte Inglés',
        image: 'image-6.jpg',
        maceta: '9,5 cm altura / 12 cm diámetro',
        descripcion: 'La Syringa Vulgaris, conocida popularmente como lilo común es un arbusto vigoroso ornamental gracias a sus perfumadas flores violáceas, blancas o purpúreas. Florece en primavera sobre las ramas del año anterior, lo que es importante tener en cuenta al podar.',
      },
      {
        name: 'Codiaeum variegatum',
        price: 12.95,
        seller: 'Edeen',
        image: 'image-0.jpg',
        maceta: '15 cm altura / 17 cm diámetro',
        descripcion: 'Uno de los atractivos del Crotón son los colores vivos de sus hojas. Según la variedad, van desde el amarillo anaranjado hasta los tonos rojos. Su porte vertical y la partircular forma de sus hojas la convierten en protagonista allá donde se encuentre.',
      },
      {
        name: 'Fotinia petit red robin',
        price: 10.95,
        seller: 'El Corte Inglés',
        image: 'image-8.jpg',
        maceta: '12,5 cm altura / 10 cm diámetro',
        descripcion: 'Arbusto vigoroso que se puede podar en forma de arbolito. Las hojas son de color rojo al principio, tornándose luego verde brillante. Brotan en panículas, son blancas y pequeñas. Esta fotinia se utiliza a menudo para fines ornamentales por el bonito colorido de su follaje.',
      },
      {
        name: 'Magnolio Perenne Grandiflora',
        price: 19.95,
        seller: 'Carrefour',
        image: 'image-9.jpg',
        maceta: '84 cm altura / 20 cm diámetro',
        descripcion: 'De gran belleza ornamental, sus hojas son de color verde brillante por el haz y de color hierro oxidado por el envés. Sus flores son grandes, de color blanco, muy vistosas y con un intenso y agradable aroma.',
      },
      {
        name: 'Passiflora violacea',
        price: 24.95,
        seller: 'Carrefour',
        image: 'image-0.jpg',
        maceta: '18 cm altura / 22 cm diámetro',
        descripcion: 'La Passiflora violácea, más conocida como la Flor de la Pasión, es una trepadora muy resistente. Sus coloridas y exóticas flores púrpuras, la convierten en una planta muy decorativa. Además, poseen un intenso aroma.',
      },
      {
          name: 'Laurel',
          price: 13.95,
          seller: 'Edeen',
          image: 'image-2.jpg',
          maceta: '19 cm altura / 20,5 cm diámetro',
          descripcion: 'El Laurel es un arbusto de porte piramidal compacto. Hojas de color verde oscuro, de gran fragancia. Sus hojas se usan como condimento. Es muy rústico y admite bien la poda.',
      },
    ];

    // listado de vendedores sin repeticiones
    const vendedoresUnicos = [];

    for ( let i = 0; i < products.length; i++ ){

      const seller = products[i].seller;
    
      if (!vendedoresUnicos.includes(seller)) {
        vendedoresUnicos.push(seller);
      }
    }

    // incluir vendedores en el select de filtros
    let selectElement  = document.getElementById('seller');

    for ( let i = 0; i < vendedoresUnicos.length; i++ ){

      let optionElement = document.createElement ('option');

      optionElement.value = vendedoresUnicos[i];
      optionElement.text = vendedoresUnicos[i];
      selectElement.appendChild(optionElement);
    }

    // Aquí pintamos x defecto TODOS los productos de la array products

    let divProducts  = document.getElementById('products');
    let ul = document.createElement ('ul');
    ul.setAttribute("id", "ulSellers");
    divProducts.appendChild(ul);

    for ( let i = 0; i < products.length; i++ ){

      let li = document.createElement ('li');

      //título
      let h4 = document.createElement ('h4');
      let textH4 = document.createTextNode (products[i].name);
      h4.appendChild(textH4);
      li.appendChild(h4);

      // imagen producto
      let divImage = document.createElement ('div');
      divImage.classList.add('cont-img');
      li.appendChild(divImage);
      let image = document.createElement ('img');
      image.src = `img/${products[i].image}`;
      divImage.appendChild(image);

      // descripción producto
      let descripcion = document.createElement ('p');
      descripcion.classList.add('products-descripcion');
      let textDescripcion = document.createTextNode( products[i].descripcion );
      descripcion.appendChild(textDescripcion);
      li.appendChild(descripcion);

      // medidas producto
      let medidas = document.createElement ('p');    
      medidas.classList.add('products-medidas');
      let textMedidas = document.createTextNode (`Maceta: ${products[i].maceta}`);
      medidas.appendChild(textMedidas);
      li.appendChild(medidas);

      // precio producto

      let divContPrecio = document.createElement('div');
      divContPrecio.classList.add('cont-precio');
      li.appendChild(divContPrecio);

      let precio = document.createElement('p');
      precio.classList.add('products-precio');
      let textPrecio = document.createTextNode (`Precio: ${products[i].price} €`);
      precio.appendChild(textPrecio);
      divContPrecio.appendChild(precio);

      // botón comprar
      let btnComprar = document.createElement('input');
      btnComprar.value = "Comprar";
      btnComprar.type = "button";
      btnComprar.classList.add('boton');
      divContPrecio.appendChild(btnComprar);

      ul.appendChild(li);
      divProducts.appendChild(ul);
    }

      // APLICAR FILTROS SELLER   

      // Agrega un evento de cambio al <select>
      selectElement.addEventListener('change', function() {
        // Obtén el valor seleccionado
        const sellerActive = selectElement.value;

        // Llama a tu función con el valor seleccionado
        PrintFilterSeller(products, sellerActive);
      });

      function PrintFilterSeller (products, sellerActive) {

        const ulToDelete = document.getElementById('ulSellers');
        //eliminar todo lo pintado anteriormente
        ulToDelete.innerHTML = '';

        for ( let i = 0; i < products.length; i++ ){
  
          if (sellerActive === 'todos' || products[i].seller === sellerActive){
            
            let li = document.createElement ('li');
    
            //título
            let h4 = document.createElement ('h4');
            let textH4 = document.createTextNode (products[i].name);
            h4.appendChild(textH4);
            li.appendChild(h4);
    
            // imagen producto
            let divImage = document.createElement ('div');
            divImage.classList.add('cont-img');
            li.appendChild(divImage);
            let image = document.createElement ('img');
            image.src = `img/${products[i].image}`;
            divImage.appendChild(image);
    
            // descripción producto
            let descripcion = document.createElement ('p');
            descripcion.classList.add('products-descripcion');
            let textDescripcion = document.createTextNode( products[i].descripcion );
            descripcion.appendChild(textDescripcion);
            li.appendChild(descripcion);
    
            // medidas producto
            let medidas = document.createElement ('p');    
            medidas.classList.add('products-medidas');
            let textMedidas = document.createTextNode (`Maceta: ${products[i].maceta}`);
            medidas.appendChild(textMedidas);
            li.appendChild(medidas);
    
            // precio producto
    
            let divContPrecio = document.createElement('div');
            divContPrecio.classList.add('cont-precio');
            li.appendChild(divContPrecio);
    
            let precio = document.createElement('p');
            precio.classList.add('products-precio');
            let textPrecio = document.createTextNode (`Precio: ${products[i].price} €`);
            precio.appendChild(textPrecio);
            divContPrecio.appendChild(precio);
    
            // botón comprar
            let btnComprar = document.createElement('input');
            btnComprar.value = "Comprar";
            btnComprar.type = "button";
            btnComprar.classList.add('boton');
            divContPrecio.appendChild(btnComprar);
    
            ul.appendChild(li);
    
          }
        }
      }

      //aplicar filtro precio     
      let priceButton = document.getElementById('btn-precio');

      priceButton.addEventListener('click', function() {

        let priceFilter = document.getElementById('precio-max');
        let priceFilterValue = priceFilter.value;

        priceFilterValue > 0 ? PrintPriceProducts(products, priceFilterValue) : alert("no has indicado ningún precio");
      });
      
      function PrintPriceProducts (products, priceFilterValue) {

        const ulToDelete = document.getElementById('ulSellers');
        //eliminar todo lo pintado anteriormente
        ulToDelete.innerHTML = '';

        for ( let i = 0; i < products.length; i++ ){
  
          if (priceFilterValue >= products[i].price){
            
            let li = document.createElement ('li');
    
            //título
            let h4 = document.createElement ('h4');
            let textH4 = document.createTextNode (products[i].name);
            h4.appendChild(textH4);
            li.appendChild(h4);
    
            // imagen producto
            let divImage = document.createElement ('div');
            divImage.classList.add('cont-img');
            li.appendChild(divImage);
            let image = document.createElement ('img');
            image.src = `img/${products[i].image}`;
            divImage.appendChild(image);
    
            // descripción producto
            let descripcion = document.createElement ('p');
            descripcion.classList.add('products-descripcion');
            let textDescripcion = document.createTextNode( products[i].descripcion );
            descripcion.appendChild(textDescripcion);
            li.appendChild(descripcion);
    
            // medidas producto
            let medidas = document.createElement ('p');    
            medidas.classList.add('products-medidas');
            let textMedidas = document.createTextNode (`Maceta: ${products[i].maceta}`);
            medidas.appendChild(textMedidas);
            li.appendChild(medidas);
    
            // precio producto
    
            let divContPrecio = document.createElement('div');
            divContPrecio.classList.add('cont-precio');
            li.appendChild(divContPrecio);
    
            let precio = document.createElement('p');
            precio.classList.add('products-precio');
            let textPrecio = document.createTextNode (`Precio: ${products[i].price} €`);
            precio.appendChild(textPrecio);
            divContPrecio.appendChild(precio);
    
            // botón comprar
            let btnComprar = document.createElement('input');
            btnComprar.value = "Comprar";
            btnComprar.type = "button";
            btnComprar.classList.add('boton');
            divContPrecio.appendChild(btnComprar);
    
            ul.appendChild(li);
    
          }
        }
      }

      
      //limpiar filtros
      let limpiarFiltros = document.getElementById('btn-limpiar-filtro');

      limpiarFiltros.addEventListener('click', function() {

        PrintAllProducts (products);
      });

      function PrintAllProducts (products){

        const ulToDelete = document.getElementById('ulSellers');
        //eliminar todo lo pintado anteriormente
        ulToDelete.innerHTML = '';

        for ( let i = 0; i < products.length; i++ ){

          let li = document.createElement ('li');
    
          //título
          let h4 = document.createElement ('h4');
          let textH4 = document.createTextNode (products[i].name);
          h4.appendChild(textH4);
          li.appendChild(h4);
    
          // imagen producto
          let divImage = document.createElement ('div');
          divImage.classList.add('cont-img');
          li.appendChild(divImage);
          let image = document.createElement ('img');
          image.src = `img/${products[i].image}`;
          divImage.appendChild(image);
    
          // descripción producto
          let descripcion = document.createElement ('p');
          descripcion.classList.add('products-descripcion');
          let textDescripcion = document.createTextNode( products[i].descripcion );
          descripcion.appendChild(textDescripcion);
          li.appendChild(descripcion);
    
          // medidas producto
          let medidas = document.createElement ('p');    
          medidas.classList.add('products-medidas');
          let textMedidas = document.createTextNode (`Maceta: ${products[i].maceta}`);
          medidas.appendChild(textMedidas);
          li.appendChild(medidas);
    
          // precio producto
    
          let divContPrecio = document.createElement('div');
          divContPrecio.classList.add('cont-precio');
          li.appendChild(divContPrecio);
    
          let precio = document.createElement('p');
          precio.classList.add('products-precio');
          let textPrecio = document.createTextNode (`Precio: ${products[i].price} €`);
          precio.appendChild(textPrecio);
          divContPrecio.appendChild(precio);
    
          // botón comprar
          let btnComprar = document.createElement('input');
          btnComprar.value = "Comprar";
          btnComprar.type = "button";
          btnComprar.classList.add('boton');
          divContPrecio.appendChild(btnComprar);
    
          ul.appendChild(li);
          divProducts.appendChild(ul);
        }
      }
  });