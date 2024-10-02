import axios from 'axios';
import React, { useEffect, useState } from 'react'
import styles from '../styles'
function Home() {
    const [data, setData] = useState([])

    const fetchData = async () => {
        try {
            const response = await axios.get('https://fakestoreapi.com/products'); // Adjust endpoint as needed  
            console.log(response.data)
            setData(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);
    return (
        <main className={``}>
            <h1 class="main-title">Clotherz</h1>
            <p class="sub-title">Your New Way of Style!</p>

            <div className='main-container'>
                {data.map((item) => {
                    return (
                        <div className='card-container' key={item.id} >
                            <div className='card-container-image'>
                                <img className='card-image' src={item.image} alt={item.title} />

                            </div>
                            <div className='card-text-container'>
                                <h2 className='product-title'>{item.title}</h2>
                                <p className='product-des'>{item.description.slice(0, 100)}...</p>
                                <p className='product-price'>Price: ${item.price}</p>
                            </div>
                        </div>
                    );
                })}
            </div>

        </main>
    )
}

export default Home