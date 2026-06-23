import Link from 'next/link';
import React from 'react';

const Products = async () => {
    await new Promise (resolve=>setTimeout(resolve, 2000))

    const post = await fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res=>res.json())
    .then (data=> data)
    return (
        <div>
            <h1>This is the product page</h1>
            <Link href={"/products/apple"}>Apple</Link>
            <Link href={"/products/orange"}>Orange</Link>
            <p>{JSON.stringify(post)}</p>
        </div>
    );
};

export default Products;