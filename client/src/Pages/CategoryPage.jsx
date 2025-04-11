import React, { useEffect, useState } from 'react'
import "../css/CategoryPage.scss"
import "../css/AddCart.scss"
import { useLocation } from 'react-router'
import { CiHeart } from "react-icons/ci"
import { useDispatch, useSelector } from 'react-redux'
import { MdDelete } from "react-icons/md";
import { useNavigate } from 'react-router'
import { addtoCart, qntyIncrease, qntyDecrease, productRemove } from "../redux/slices/cartSlice"

const CategoryPage = () => {
    const [allBrands, setAllBrands] = useState([]);
    const [selectedBrands, setSelectedBrands] = useState([]);
    const [priceRange, setPriceRange] = useState(0);
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(1000);
    const [sortOption, setSortOption] = useState("Popularity");

    const Base_URL = import.meta.env.VITE_API_BASE_URL;
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const item = queryParams.get('item');
    const [categoryData, setCategoryData] = useState([]);
    const dispatch = useDispatch();
    const selectit = useSelector((state) => state.setit.alldata);

    const navigate = useNavigate()

    const ProductHandle = async (id) => {

        try {

            navigate(`/product/${id}`);

        } catch (error) {

        }
    }




    async function GetCategory() {
        try {
            let newcat = selectit.flat();
            let filterIt = newcat.filter((ele) => ele.category === item.toLowerCase());
            if (filterIt) {
                console.log(filterIt);
                
                setCategoryData(filterIt);
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        GetCategory();
    }, []);

    useEffect(() => {
        const brands = [...new Set(categoryData.map((item) => item.brand))];
        setAllBrands(brands);

        if (categoryData.length > 0) {
            const prices = categoryData.map(item => item.price);
            const min = Math.min(...prices);
            const max = Math.max(...prices);
            setMinPrice(min);
            setMaxPrice(max);
            setPriceRange(max);
        }
    }, [categoryData]);

    const handleBrandChange = (brand) => {
        if (selectedBrands.includes(brand)) {
            setSelectedBrands(selectedBrands.filter(b => b !== brand));
        } else {
            setSelectedBrands([...selectedBrands, brand]);
        }
    };

    const handlePriceChange = (e) => {
        setPriceRange(Number(e.target.value));
    };

    const handleSortChange = (e) => {
        setSortOption(e.target.value);
    };

    // Filtering and sorting
    let filteredProducts = categoryData.filter((product) => {
        const matchBrand = selectedBrands.length === 0 || selectedBrands.includes(product.brand);
        const matchPrice = product.price <= priceRange;
        return matchBrand && matchPrice;
    });

    if (sortOption === "Price -- Low to High") {
        filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
    } else if (sortOption === "Price -- High to Low") {
        filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price);
    }

    const CatDataDisplay = filteredProducts.map((ele, idx) => (
        <div class="product-card" key={idx}>
            <div class="product-image">
                <img src={`${Base_URL}/uploads/${ele.dfaultImage}`} alt="product" />
            </div>
            <div class="product-details">
                <h2>{ele.description}</h2>
                <p> <span className='realPrice'  >{ele.price + 300}   </span>   <span class="discount">{ele.price}</span> <span class="offer">70% off</span></p>
                <div class="product-color">
                    <span>Color: <strong>olive</strong></span>
                    <div class="colors">
                        <span class="color olive selected"></span>
                        <span class="color peach"></span>
                        <span class="color purple"></span>
                    </div>
                </div>
                {/* <div class="product-size">
                    <span>Size: <strong>37</strong></span>
                    <div class="sizes">
                        <span class="size">35</span>
                        <span class="size">36</span>
                        <span class="size selected">37</span>
                        <span class="size">38</span>
                        <span class="size">39</span>
                        <span class="size">40</span>
                    </div>
                </div> */}
                <div class="product-actions">
                    <button class="add-to-cart"  onClick={() => { dispatch(addtoCart({...ele,qty:1})) }}   >Add to cart</button>
                    <button class="more-details" onClick={() => { ProductHandle(ele._id) }}    >More details</button>
                      <span class="wishlist"  onClick={()=>{dispatch(productRemove(ele._id))}}    ><MdDelete /></span>
                    <span class="wishlist"   ></span>
                </div>
            </div>
        </div>
    ));

    return (
        <div class="listing-page">
            <aside class="sidebar">
                <h2>Filters</h2>

                <div class="filter-section">
                    <h4>Price</h4>
                    <input type="range" min={minPrice} max={maxPrice} value={priceRange} onChange={handlePriceChange} />
                    <div class="price-values">
                        <span>₹{minPrice}</span>
                        <span>₹{priceRange}+</span>
                    </div>
                </div>

                <div class="filter-section">
                    <h4>Brand</h4>
                    {allBrands.map((brand, index) => (
                        <label key={index}>
                            <input
                                type="checkbox"
                                checked={selectedBrands.includes(brand)}
                                onChange={() => handleBrandChange(brand)}
                            /> {brand}
                        </label>
                    ))}
                </div>

                <div class="filter-section">
                    <h4>Customer Rating</h4>
                    <label><input type="checkbox" /> 4★ & above</label>
                    <label><input type="checkbox" /> 3★ & above</label>
                </div>
            </aside>

            <main class="product-listing">
                <div class="sort-bar">
                    <span>Sort by:</span>
                    <select value={sortOption} onChange={handleSortChange}>
                        <option>Popularity</option>
                        <option>Price -- Low to High</option>
                        <option>Price -- High to Low</option>
                        <option>Newest First</option>
                    </select>
                </div>

                <div class="section4Image">
                    <div class="section4grid">
                        {CatDataDisplay}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default CategoryPage;
