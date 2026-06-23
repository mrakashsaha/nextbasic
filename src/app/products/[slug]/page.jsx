import React from 'react';

const Product = async ({params}) => {


    return (
        <div>
            <div>
                This is a dynamic product page
                <h2>Product is : {(await params).slug}</h2>
            </div>
        </div>
    );
};

export default Product;