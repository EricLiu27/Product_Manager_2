import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const DashboardPage = () => {
    const [productList, setProductList] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products`)
            .then(response => setProductList(response.data))
            .catch(err => console.log(err))
    }, [])

    return (
        <div>
            <div className='card'>
                <div className='card-body'>
                    <h3>All Products</h3>
                    {productList.map((eachProduct, idx) => {
                        return (
                            <Link to={`/products/${eachProduct._id}`} key={eachProduct._id} className='card-text d-flex flex-column'>{eachProduct.title}</Link>

                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default DashboardPage