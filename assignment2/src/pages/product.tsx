import {useParams} from 'react-router-dom'
import { IProduct } from "../models"
import { useEffect, useState } from "react"
import { getAll, getById } from "../api/products"
import { Link } from 'react-router-dom'
import { ISpecification } from '../models'

const ProductDetail = () => {
    const {id} = useParams()
    const [product, setProduct] = useState<IProduct>({} as IProduct)
    const fetchProducts = async () => {
        if(id){
            const { data } = await getById(id)
            setProduct(data)
        }
    }

    useEffect(() => {
        fetchProducts()
    }, [])
    return <div>
        <div className='border-b-2 py-1'>
        <ul className='flex space-x-5'>
            <li className=''><a href="/">Trang chủ</a></li>
            <li className=''>Điện thoại</li>
            <li className=''>Samsung</li>
            <li className=''>{product.name}</li>
        </ul>
    </div>
    <h1 className='pt-2 font-bold'>{product.name}</h1>
    <div className='flex space-x-5'>
        <div>
        <img  alt="Art" src={product.images?.[0].medium_url}/>
        <div className='flex space-x-2'>
        <img className='w-[100px] h-[100px]' src={product.images?.[1].thumbnail_url}/>
        <img className='w-[100px] h-[100px]'  src={product.images?.[0].thumbnail_url}/>
        <img className='w-[100px] h-[100px]' src={product.images?.[0].thumbnail_url}/>
        <img  className='w-[100px] h-[100px]' src={product.images?.[0].small_url}/>
        </div>
        </div>

        <div className='pl-14'>
            <div className='flex space-x-8 items-center'>
                <h1 className=' text-red-500 font-bold text-2xl'>{product.price} <span className='underline'>đ</span></h1>
                <h1 className='font-bold text-[#707070]'>{product.original_price} <span className='underline'>đ</span></h1>
            </div>
            <div>
                <h1>Mô tả ngắn: {product?.description?.substring(0, 150)}</h1>
            </div>
            <div className='pt-[225px]'>
                <button className=' border bg-red-600 w-[200px] text-white rounded-lg px-2 py-2' type="submit">Mua ngay</button>
            </div>
        </div>
    </div>
    
    <div className='border w-[1191px] h-[155px] bg-[#F2F2F2;]'>
        <h1 className='font-bold text-red-600'>Đặc điểm nổi bật</h1>
        <h1 className=''>{product?.description?.substring(50, 820)}</h1>
        {/* <h1 className=''>{product?.specifications}</h1> */}
    </div>
    </div>
   
}

export default ProductDetail