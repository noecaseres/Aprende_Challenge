import { useEffect, useState } from "react";

const Carousel = () => {
  const [visibleItems, setVisibleItems] = useState(4);
  const [products, setProducts] = useState([]);


  const productList = async() => {
    const data = await fetch("https://staging.aprende.dev/wp-json/aprende/v2/content/product-pages?posts_per_page=-1")
    const productList = await data.json();
    
    const arrMapped = []
    for (let index in productList.results) {
        arrMapped.push(productList.results[index]);
    }
    setProducts(arrMapped);
}

useEffect(() => {
    productList()
}, [])
console.log(products)


const handleShowMore = () => {    
    if(visibleItems < products.length){
        setVisibleItems(visibleItems + 4);
    }else{
        setVisibleItems(4);
    }
};


return (
    <>
    <div>Filtros por escuela</div>
    <div className="carousel-container">
        <div className="carousel">
            {products.slice(0, visibleItems).map((product, index) => (
            <div key={product.id} className="carousel-item">
                <img src={product.post_meta.featured_image.mobile.src} alt={`Image ${index}`} className="carousel-item_img"/>
                <div className="Overlay"></div>
                <div className="OverlayContent font-white">
                    <h3>{product.post_title}</h3>
                    <div>
                        <div>estudiantes</div>
                        <div>rating</div>
                    </div>
                </div>
            </div>
            ))}
            <div className="show-more-button_mobile_container">
                <button className="show-more-button_mobile btn-small" onClick={handleShowMore}>
                    Cargar más
                </button>
            </div>
        </div>
        <button className="show-more-button_desktop btn-small" onClick={handleShowMore}>
            Cargar más
        </button>

    </div>

    </>
);
};

export default Carousel;
