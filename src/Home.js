import React from 'react';
import './Home.css';
import Product from './Product';
function Home() {
    return (
        <div className="home">
            <img src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                alt="banner"
                className="home__image" />

            <div className="home__row">
                <Product
                    id={12312}
                    title="Amazon Echo"
                    price={10.99}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/61%2BQNG8IiPL._SX679_.jpg"
                />
                <Product
                    id={12312}
                    title="Amazon Echo"
                    price={10.99}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/61%2BQNG8IiPL._SX679_.jpg"
                />
            </div>
            <div className="home__row">
                <Product
                    id={12312}
                    title="Amazon Echo"
                    price={10.99}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/61%2BQNG8IiPL._SX679_.jpg"
                />
                <Product
                    id={12312}
                    title="Amazon Echo"
                    price={10.99}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/61%2BQNG8IiPL._SX679_.jpg"
                />
                <Product
                    id={12312}
                    title="Amazon Echo"
                    price={10.99}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/61%2BQNG8IiPL._SX679_.jpg"
                />
            </div>
            <div className="home__row">
                <Product
                    id={12312}
                    title="Amazon Echo"
                    price={10.99}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/61%2BQNG8IiPL._SX679_.jpg"
                />
            </div>
        </div>
    )
}

export default Home
