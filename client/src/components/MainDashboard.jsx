import React from 'react'
import { Link } from 'react-router-dom'

const MainDashboard = (props) => {
    return (
        <div>
            <div className='card'>
                <div className='card-body'>
                    <h3>All Products</h3>
                    {props.productList.map((eachProduct, idx) => {
                        return (
                            <Link to={`/products/${eachProduct._id}`} key={eachProduct._id} className='card-text d-flex flex-column'>{eachProduct.title}</Link>

                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default MainDashboard