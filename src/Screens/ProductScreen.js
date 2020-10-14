import React from 'react';
import data from '../data';
import {Link} from 'react-router-dom';

function ProductScreen (props) {
    console.log(props.match.params.id);   
     /* product screem will have access to product id in its console*/
    const product = data.products.find(x=> x._id === props.match.params.id);
    return <div className = "return-sign">
        <div>
            <Link to ="/">&#8592;</Link>

        </div>
        <div className = "details">
            <div className = "details-image">
                <img src = {product.image} alt="product"></img>
            </div>
            <div className="details-info">
                <ul>
                    <li>
                        <h4>{product.name}</h4>
                    </li>
                    <li>
                        <b>{product.price}</b>
                    </li>
                    <li>
                        Description
                        <div>
                            {product.description}
                        </div>
                    </li>
                </ul>
            </div>


        </div>
        <div className = "details-action">
            <ul>
                `<li>
                    Price: {product.price}
                </li>`
                <li>
                    Availability: {product.status}
                </li>
                <li>
                    Qty: <select>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                </li>
                <li>
                    <button className="button">ADD TO CART</button>
                
                </li>

            </ul>

        </div>

        
    </div>
}
export default ProductScreen;