import React from 'react';
import data from '../data';

function ProductScreen(props) {
    console.log(props.match.params.id);   
     /* product screem will have access to product id in its console*/
     const product = data.products.find(x=> x._id === props.match.params.id);
    return <div>
        <h1>{product.name}</h1>
    </div>
}
export default ProductScreen;