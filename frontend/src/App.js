import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="grid-container">
        <header className="header">
            <div className="brand">
                <button onclick="openMenu()">
                    &#9776;
                </button>
                <a href="index.html">amazonia</a>
            </div>
            <div className="header-links">
                <a href="cart.html">Cart</a>
                <a href="signin.html">Sign In</a>
                <a href=""></a>
            </div>
        </header>
        <aside className="sidebar">
            <h3>Shopping Categories</h3>
            <button className="sidebar-close-button" onclick="closeMenu()">x</button>
            <ul>
                <li>
                    <a href="index.html">Shirts</a>
                </li>
                <li>
                    <a href="index.html">Pants</a>
                </li>
            </ul>
        </aside>
        <main className="main">
            <div>
                <ul className="products">
                    <li>
                        <div className="product">
                            <img className="product-image" src="/images/d1.jpg" alt="product"/>
                            <div className="product-name"><a href="product.html">Fit Shirt</a></div>
                            <div className="product-brand">Adidas</div>
                            <div className="product-price">$60</div>
                            <div className="product-rating">4.5 Stars (10 Reviews)</div>
                        </div>
                    </li>
                    <li>
                        <div className="product">
                            <img className="product-image" src="/images/d2.jpg" alt="product"/>
                            <div className="product-name"><a href="product.html">Slim Blazer</a></div>
                            <div className="product-brand">Adidas</div>
                            <div className="product-price">$60</div>
                            <div className="product-rating">4.5 Stars (10 Reviews)</div>
                        </div>
                    </li>
                    <li>
                        <div className="product">
                            <img className="product-image" src="/images/d3.jpg" alt="product"/>
                            <div className="product-name"><a href="product.html">Slim Shirt</a></div>
                            <div className="product-brand">Adidas</div>
                            <div className="product-price">$60</div>
                            <div className="product-rating">4.5 Stars (10 Reviews)</div>
                        </div>
                    </li>
                    <li>
                        <div className="product">
                            <img className="product-image" src="/images/d4.jpg" alt="product"/>
                            <div className="product-name"><a href="product.html">Fit Hoodie</a></div>
                            <div className="product-brand">Adidas</div>
                            <div className="product-price">$60</div>
                            <div className="product-rating">4.5 Stars (10 Reviews)</div>
                        </div>
                    </li>
                    <li>
                        <div className="product">
                            <img className="product-image" src="/images/d5.jpg" alt="product"/>
                            <div className="product-name"><a href="product.html">Slim Cardigan</a></div>
                            <div className="product-brand">Adidas</div>
                            <div className="product-price">$60</div>
                            <div className="product-rating">4.5 Stars (10 Reviews)</div>
                        </div>
                    </li>
                </ul>
            </div>
        </main>
        <footer className="footer">
            All right reserved.
        </footer>
    </div>
  );
}

export default App;
