import {Link} from 'react-router-dom'
import { IProduct } from "../models";

type Props = {
    data: IProduct
}

const Product = ({data}: Props) => {
    return <Link to={`product/${data.id}`} className="block">
        <img
            alt="Art"
            src={data.images?.[0].base_url}
            className="h-64 object-cover sm:h-80 lg:h-96s"
        />

        <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
            {data?.name}
        </h3>

        {/* <p className="mt-2 max-w-sm text-gray-700">
            {data.description.substring(0, 40)}
        </p> */}
        
        <div className="flex space-x-5">
        <p className="mt-2 max-w-sm text-red-500 font-bold">
            {data?.price} <span className='underline'>đ</span>
        </p>
        <p className="mt-2 max-w-sm font-bold text-[#707070]">
            {data?.original_price} <span className='underline'>đ</span>
        </p>
        </div>
        <div className='flex pt-2'>
            <img src="/Vector.png" alt="" />
            <img src="/Vector.png" alt="" />
            <img src="/Vector.png" alt="" />
            <img src="/Vector.png" alt="" />
            <img src="/Vector.png" alt="" />
        </div>
    </Link>
}

export default Product;