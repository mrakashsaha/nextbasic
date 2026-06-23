import Link from 'next/link';
import React from 'react';
import headerStyles from "../components/header.module.css"

const Header = () => {
    return (
        <div id={headerStyles.navbar}>
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
          <Link href="/about">About</Link>
        </div>
    );
};

export default Header;