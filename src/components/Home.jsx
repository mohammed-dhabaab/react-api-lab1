import axios from 'axios';
import React, { useEffect, useState } from 'react'

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
        <div>
            {data.map((item) => {
                return (
                    <div key={item.id}>
                        <h2>{item.title}</h2>
                        <p>Price: ${item.price}</p>
                        <img src={item.image} alt={item.title} style={{ width: '100px' }} />
                        <p>{item.description}</p>
                    </div>
                );
            })}
        </div>
    )
}

export default Home