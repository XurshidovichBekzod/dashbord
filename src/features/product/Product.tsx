import { Tabs } from "antd";
import type { TabsProps } from "antd";
import Categories from "./child/Categories"; // 🟢 alohida chaqiramiz

const Product = () => {
  const onChange = (key: string) => {
    console.log("Active Tab:", key);
  };

  const productTable = (
    <div className="bg-white mt-8 rounded-2xl p-6 shadow-sm">
      <h2 className="text-lg font-semibold mb-4">All Products</h2>
      <table className="w-full text-left text-sm">
        <thead>
          <tr className="text-gray-500 border-b border-[#EEEEEE]">
            <th className="py-3">Title</th>
            <th className="py-3">Description</th>
            <th className="py-3">Price (USD)</th>
            <th className="py-3">Category ID</th>
            <th className="py-3">Stock</th>
            <th className="py-3">Brand</th>
          </tr>
        </thead>
        <tbody>
          {[
            {
              title: "iPhone 14 Pro",
              description: "Apple flagship smartphone",
              price: 1199,
              categoryId: 1,
              stock: 50,
              brand: "Apple",
            },
            {
              title: "Samsung Galaxy S23",
              description: "High-end Android smartphone",
              price: 999,
              categoryId: 1,
              stock: 75,
              brand: "Samsung",
            },
          ].map((product, idx) => (
            <tr
              key={idx}
              className="border-b last:border-none border-[#EEEEEE]"
            >
              <td className="py-3">{product.title}</td>
              <td className="max-w-[200px] truncate">{product.description}</td>
              <td>${product.price}</td>
              <td>{product.categoryId}</td>
              <td>{product.stock}</td>
              <td>{product.brand}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  const items: TabsProps["items"] = [
    {
      key: "2",
      label: "Products",
      children: productTable,
    },
    {
      key: "1",
      label: "Categories",
      children: <Categories />, // 🟢 endi alohida component ishlayapti
    },
  ];

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-xl font-semibold">Hello Evano</h1>
        <input
          type="text"
          placeholder="Search"
          className="border border-gray-300 rounded-lg px-3 py-1 text-sm outline-none"
        />
      </div>

      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    </div>
  );
};

export default Product;
