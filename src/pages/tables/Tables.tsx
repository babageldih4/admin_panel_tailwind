import { FC, ReactNode } from "react";
import nitrov15 from "../../assets/images/nitrov15.jpg";
import aspire_3 from "../../assets/images/aspire_3.jpg";
interface Product {
  name: string;
  image: string;
  category: string;
  price: string | number;
  sold: number;
  profit: number;
}

const productData: Product[] = [
  {
    name: "Acer Nitro",
    image: nitrov15,
    category: "Laptop",
    price: 13500,
    sold: 12,
    profit: 500,
  },
  {
    name: "Acer Aspire 3",
    image: aspire_3,
    category: "Laptop",
    price: 1200,
    sold: 24,
    profit: 400,
  },
  {
    name: "Acer Aspire 3",
    image: aspire_3,
    category: "Laptop",
    price: 1200,
    sold: 24,
    profit: 400,
  },
  {
    name: "Acer Aspire 3",
    image: aspire_3,
    category: "Laptop",
    price: 1200,
    sold: 24,
    profit: 400,
  },
  {
    name: "Acer Nitro",
    image: nitrov15,
    category: "Laptop",
    price: 13500,
    sold: 12,
    profit: 500,
  },
];
const Tables: FC = () => {
  return (
    <div className="mx-auto">
      <p className="dark:text-white">Tables</p>
      <div className="py-6 px-4 md:px-6 xl:px-7.5">
        <h4 className="text-xl font-semibold text-black dark:text-white">
          Top Products
        </h4>
      </div>
      <div className="grid grid-cols-5 border-t space-x-2 py-6">
        <div className="row-span-8 flex items-center space-x-2">
          <p className="dark:text-white  ">Name</p>
        </div>
        <div className="row-span-4 flex items-center">
          <p className="dark:text-white  ">Category</p>
        </div>
        <div className="row-span-2 flex items-center">
          <p className="dark:text-white  ">Price</p>
        </div>
        <div className="row-span-1 flex items-center">
          <p className="dark:text-white  ">Sold</p>
        </div>
        <div className="row-span- flex items-center">
          <p className="dark:text-white ">Profit</p>
        </div>
      </div>
      {productData.map((element, index) => {
        return (
          <div
            key={index}
            className="grid grid-cols-5 space-x-2 border-t border-b py-4"
          >
            <span className="flex flex-row space-x-3 items-center">
              <img
                src={element.image}
                alt=""
                className="h-121.5 w-14 rounded-md"
              />
              <p className="dark:text-white">{element.name}</p>
            </span>
            <p className="dark:text-white">{element.category}</p>
            <span className="dark:text-white">{element.price}</span>
            <span className="dark:text-white">{element.sold}</span>
            <span className="dark:text-meta-3">{element.profit} man</span>
          </div>
        );
      })}
    </div>
  );
};

export default Tables;
