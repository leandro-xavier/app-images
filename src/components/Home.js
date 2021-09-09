import React from 'react';
import ProductCard from '../containers/ProductCard';
import Navigation from './Navigation';



const Home = () => {
     
    return(
            <div className="Home">
                <header className="Home-header">
                    <Navigation/>
                    
                   <ProductCard/>
                </header>
            </div>
    );
}

export default Home;