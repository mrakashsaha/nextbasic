import Link from 'next/link';
import React from 'react';
import getproducts from '../../../database/products';



const Products = async () => {
    
    const products = getproducts();

    return (
        <div>
            <h1>This is the product page</h1>
            <div>
                {
                    products.map((prod)=> {
                        return (
                            <div className='m-4' key={prod.id}>
                                <Link href={`products/${prod.name}`}>{prod.name}</Link>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Products;