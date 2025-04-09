import { useNavigate } from "react-router";
import "../css/ShopBy.scss";

import oilImg from "../images/lorealshampho1.avif"

const Base_URL = import.meta.env.VITE_API_BASE_URL;

const categories = [
    { name: "Shamphoo", image: `${Base_URL}/uploads/1744142383015-tresme1.avif` },
    { name: "oil", image: `https://images-static.nykaa.com/media/catalog/product/b/2/b2e2a976923700970449_1.jpg?tr=w-344,h-344,cm-pad_resize` },
    { name: "facewash", image: `https://images-static.nykaa.com/media/catalog/product/a/0/a0cf873FORES00000045_1.jpg?tr=w-344,h-344,cm-pad_resize` },
    { name: "cream", image: `https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/1/8/185023f20714215552_1.jpg` },
    { name: "serum", image: `https://images-static.nykaa.com/media/catalog/product/8/8/8806194009506.jpg?tr=w-344,h-344,cm-pad_resize` },
    { name: "shower Gel", image: `https://images-static.nykaa.com/media/catalog/product/6/e/6ecaa8fMCAFF00000583_1.jpg?tr=w-344,h-344,cm-pad_resize` },


];

const ShopBy = () => {

    const navigate = useNavigate()


    function shopByCat(itm) {


        navigate(`/category/?item=${itm}`)


    }


    return (
        <div className="category-container">
            {categories.map((item, idx) => (
                <div className="category-item" key={idx} onClick={() => { shopByCat(item.name) }}   >
                    <div className="icon-wrapper"   >
                        <img src={item.image} alt={item.name} />
                    </div>
                    <span   >{item.name}</span>
                </div>
            ))}
        </div>





    );
};

export default ShopBy;
