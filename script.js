async function getProducts() {
    let url = (`https://makeup-api.herokuapp.com/api/v1/products.json/`);
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
  }
  
  // HTML Element 
  
  async function renderProducts() {
      let Products = await getProducts();
      let html = '';
      Products.forEach(product => {
          let htmlSegment = `<div class="product">
                            <a href = ${product.product_link} target = "_imgstyle">
                              <h2 class="brand">Brand: ${product.brand}</h2> 
                              <img class="imgstyle" src="${product.image_link}">  
                              <h6 class="brand-name">Product: ${product.name}</h6> 
                              <p class ="brand-price"><Strong>Price: $ ${product.price}</Strong></p>
                              <p class = "brand-descr">${product.description}</p>
                              <p class ="brand-link">${product.product_link}</p> 
                              
                        
 </div>`;
  
          html += htmlSegment;
      });
   
  //add all element html into class container
  
      let container = document.querySelector('.container');
      container.innerHTML = html;
  }
  
  renderProducts();