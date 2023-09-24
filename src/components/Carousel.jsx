import { useEffect, useState } from "react";
import { HalfStarIcon, StarIcon, UsersIcon } from "../assets";

const Carousel = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [visibleItems, setVisibleItems] = useState(4);
    const [products, setProducts] = useState([]);
    const [currentCard, setCurrentCard] = useState(0);
    const [uniqueSchools, setUniqueSchools] = useState([]);
    const [filteredList, setFilteredList] = useState([]);
    const [selectedSchool, setSelectedSchool] = useState(""); 

/*Breakpoint */
const handleWindowResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

const isMobile = windowWidth <= 768;

/*Fetching list of products*/
const productList = async() => {
    const data = await fetch("https://staging.aprende.dev/wp-json/aprende/v2/content/product-pages?posts_per_page=-1")
    const productList = await data.json();
    const arrMapped = []
    for (let index in productList.results) {
        arrMapped.push(productList.results[index]);
    }
    setProducts(arrMapped);
    setFilteredList(arrMapped);
}

const rating = products.product_rating ? products.product_rating : 4.5; // Agregué este condicional ya que la API devuelve null para todos los casos.
const fullStarCount = Math.floor(rating);
const hasHalfStar = rating % 1 !== 0; 

useEffect(() => {
    productList()
}, [])

const handleShowMore = () => { 
    if(isMobile){
        if(visibleItems < filteredList.length){    
            setCurrentCard(0)       
            setVisibleItems(visibleItems + 4);
        }else{
            setCurrentCard(0)
            setVisibleItems(4);
        }
    }else{
        if(visibleItems < filteredList.length){
            setCurrentCard(visibleItems)
            setVisibleItems(visibleItems + 4);
        }else{
            setCurrentCard(0)
            setVisibleItems(4);
        }
    }
};



useEffect(() => {
    if (products.length > 0) {
    const schoolCountMap = products.reduce((countMap, product) => {
        const school = product.post_meta.school_name;
        countMap[school] = (countMap[school] || 0) + 1;
        return countMap;
    }, {});

    const uniqueSchoolsArray = Object.keys(schoolCountMap).map((school) => ({
        name: school,
        count: schoolCountMap[school],
    }));

    setUniqueSchools(uniqueSchoolsArray);
    }
}, [products]);


/*Filtered by school*/
const handleSchoolFilter = (school) => {
    if (school === "") {
        setFilteredList(products);
        setSelectedSchool("");
    } else {
        const filteredProducts = products.filter(
        (product) => product.post_meta.school_name === school.name
        );
        setVisibleItems(4)
        setCurrentCard(0)
        setFilteredList(filteredProducts);
        setSelectedSchool(school.name);
    }
};



return (
    <>
    <div className="btn-schools-slider">
        <div className="btn-schools-container">
            {uniqueSchools.map((school, index) => (
            <button
            key={index}
            onClick={() => handleSchoolFilter(school)}
            className={selectedSchool === school.name ? "btn-schools selected" : "btn-schools"}
            >
            <p className="p2">Escuela de {school.name} ({school.count})</p>
            </button>
            ))}
        </div>
    </div>
    <div className="carousel-container">
            <div className="carousel">  
                {filteredList.slice(currentCard, visibleItems).map((product, index) => (
                <div key={product.id} className="carousel-item">
                    <img src={product.post_meta.featured_image.medium.src} alt={`Image ${index}`} className="carousel-item_img"/>
                    <div className="Overlay"></div>
                    <div className="OverlayContent font-white">
                        <h3>{product.post_title}</h3>
                        <div className="dflex-row just-content-between">
                            <div className="dflex-row">
                                <div >
                                    <img src={UsersIcon} alt="Users"/>
                                </div>
                                {/* El campo estudiantes no existe en la API, por lo cual he harcodeado el valor. */}
                                <p className="carousel-item-p">12353 estudiantes</p>        
                            </div>
                            <div className="dflex-row">
                                <div className="dflex-row">
                                    {Array.from({ length: fullStarCount }, () => (
                                        <>
                                            <div >
                                                <img src={StarIcon} alt="Star"/>
                                            </div>
                                        </>
                                    ))}
                                    {hasHalfStar &&                          
                                    <>
                                        <div >
                                            <img src={HalfStarIcon} alt="HalfStar"/>
                                        </div>
                                    </>}
                                    {Array.from({ length: 5 - Math.ceil(rating) }, () => (
                                        <></>
                                    ))}
                                </div>                               
                                <p className="carousel-item-p">{product.product_rating ? product.product_rating : rating}</p>
                            </div>   
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
            <div className="show-more-button_desktop_container">
                <button className="show-more-button_desktop btn-small" onClick={handleShowMore}>
                    Cargar más
                </button>
            </div>
    </div>

    </>
);
};

export default Carousel;
