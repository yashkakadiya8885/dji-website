import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Single = () => {
    const [data,setData]= useState("")
    const {id} = useParams()
    useEffect(()=>{
        axios.get(`https://api-0aa9.onrender.com/product/${id}`)
        .then((res)=>{
            setData(res.data);
        })
        .catch((err)=>{
            console.log(err);
        })
    },[])
  return (
    <div>
        <img src={data.image} alt=""/>
        <h2>Name:{data.name}</h2>
        <h3>Price:{data.price}</h3>
        <h4>Category:{data.category}</h4>
        <h6>Description:{data.description}</h6>
        <button>Where to Buy</button>
    </div>
  )
}

export default Single