import { Link, useParams} from "react-router-dom";
// import SidebarMenu from "../components/SidebarMenu";
import {getAll } from "../api/products";
import { useEffect, useState } from "react";
import { IProduct } from "../models";

const Dashboard = (props) => {
    const [products, setProducts] = useState<IProduct[]>([])

    const fetchProducts = async () => {
        try {
          const { data } = await getAll();
          setProducts(data);
        } catch (error) {
          console.log(error);
        }
      };
    const removeProduct = (id: IProduct) => {
        props.onRemove(id);
      };

    useEffect(() => {
        fetchProducts()
    }, [])

    return <>
        <h2>Product list</h2>
        <div className="overflow-x-auto rounded-lg border border-gray-200">
            <table className="min-w-full divide-y-2 divide-gray-200 text-sm">
                <thead>
                    <tr>
                        <th
                            className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                        >
                            Tên sản phẩm
                        </th>
                        <th
                            className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                        >
                            Giá
                        </th>
                        <th
                            className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                        >
                            Giá khuyến mãi
                        </th>
                        <th
                            className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                        >
                            Hình ảnh
                        </th>
                        <th
                            className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                        >
                            Thao tác
                        </th>
                    </tr>
                </thead>

                <tbody className="divide-y divide-gray-200">
                    {products.map(product => (
                        <tr>
                            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                <Link to={`/admin/product/${product.id}`}>
                                    {product.name}
                                </Link>
                            </td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">{product.price}</td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">{product.original_price}</td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                                <img className="w-[80%]" src={product.images?.[0].small_url} alt="" />
                            </td>
                            <td className="text-center">
                                {/* <button className="bg-red-600 text-white rounded-md p-2" onClick={() => removeProduct(product.id)}>Xoá</button> */}
                                <button className="px-3 py-[6.5px] ml-3 font-medium text-white bg-red-500 rounded-md shadow-red-500/50" onClick={() => removeProduct(product.id)}>
                  Remove
                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

    </>
}

export default Dashboard
