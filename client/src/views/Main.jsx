import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import MainForm from '../components/MainForm'
import MainDashboard from '../components/MainDashboard'

const Main = () => {
    const [productList, setProductList] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products`)
            .then(response => setProductList(response.data))
            .catch(err => console.log(err))
    }, [])

    const receiveNewProduct = (newProduct) => {
        setProductList([...productList, newProduct])
    }

    return (
        <div>
            <MainForm onCreate={receiveNewProduct} />
            <MainDashboard productList={productList} />
        </div>
    )
}

export default Main