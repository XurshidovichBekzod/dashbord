import { Button, Image, Modal, Space, Table, Tag, Tooltip, message, Tabs } from 'antd';
import { memo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { useProduct } from '../product/service/useProducts';
import ProductForm from '../product/components/ProductsForm';


import type { TabsProps } from "antd";
import Categories from './child/Categories';

const Dashboard = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category") || "all";

  const { getProducts, deleteProduct } = useProduct();
  const { data: productRes, isLoading } = getProducts();

  const [open, setOpen] = useState(false);

  // backenddan keladigan productlar
  console.log("Product Response:", productRes);
  const allProducts = productRes?.data?.allProducts || [];

  // filter qilingan productlar
  const filteredProducts =
    category === "all"
      ? allProducts
      : allProducts.filter((p: any) => p.category?.name === category);

  const handleDelete = async (id: number) => {
    try {
      await deleteProduct.mutateAsync({ id: String(id) }); // 🔥 shu yerda string qilib yuboramiz
      message.success("Product deleted successfully");
    } catch (err: any) {
      console.error("Delete error:", err);
      message.error(err?.response?.data?.message || "Failed to delete product");
    }
  };


  const columns = [
    {
      title: "Image",
      dataIndex: "images",
      key: "images",
      width: 100,
      render: (images: any[]) => (
        <div className="flex justify-center items-center">
          {images?.length ? (
            <Image
              src={`https://api.errorchi.uz/product/image/${images[0]}`}
              alt="product"
              className="w-12 h-12 rounded-lg border object-contain border-gray-300 shadow-sm"
              fallback="https://placehold.co/100x100?text=No+Image"
            />
          ) : (
            <span>No image</span>
          )}
        </div>
      ),
    },
    {
      title: "Product Name",
      dataIndex: "title",
      key: "title",
      width: 220,
      render: (_: any, record: any) => (
        <Tooltip
          title={
            <>
              <div><b>Created by:</b> {record?.user?.fname || "Unknown"}</div>
              <div><b>Email:</b> {record?.user?.email || "no email"}</div>
            </>
          }
        >
          <span className="font-semibold text-gray-800 cursor-pointer">
            {record.title}
          </span>
        </Tooltip>
      ),
    },
    {
      title: "Category",
      dataIndex: ["category", "name"],
      key: "category",
      width: 160,
      render: (category: string) => (
        <Tag
          className="px-3 py-1 rounded-full text-sm"
          color={
            category === "Shoes"
              ? "blue"
              : category === "Electronics"
                ? "purple"
                : "geekblue"
          }
        >
          {category}
        </Tag>
      ),
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      width: 150,
      render: (price: number) => (
        <span className="text-green-600 font-medium">{price.toLocaleString()} USD</span>
      ),
    },
    {
      title: "Stock",
      dataIndex: "stock",
      key: "stock",
      width: 100,
    },
    {
      title: "Brand",
      dataIndex: "brand",
      key: "brand",
      width: 150,
      render: (brand: string) => brand || "-",
    },
    {
      title: "Action",
      key: "action",
      width: 180,
      render: (_: any, record: any) => (
        <Space>
          <Button
            type="link"
            danger
            className="hover:text-red-700"
            onClick={() => handleDelete(record.id)}
          >
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Products",
      children: (
        <>

          <div className="flex justify-between items-center mb-3 p-[5px]">
            <h2 className="text-xl font-bold">Products</h2>
            <Button className="mb-[12px]" type="primary" onClick={() => setOpen(true)}>
              Add
            </Button>
          </div>

          <div className="p-3 bg-white rounded-xl shadow-md">
            <Modal open={open} footer={null} onCancel={() => setOpen(false)}>
              <ProductForm setOpen={setOpen} />
            </Modal>

            <Table
              columns={columns}
              dataSource={filteredProducts}
              rowKey="id"
              bordered
              tableLayout="fixed"
              pagination={{ pageSize: 5 }}
              loading={isLoading}
              rowClassName={(_, index) =>
                index % 2 === 0
                  ? "bg-white hover:bg-gray-50 transition-colors"
                  : "bg-gray-50 hover:bg-gray-100 transition-colors"
              }
            />
          </div>


        </>
      ),
    },
    {
      key: "2",
      label: "Categories",
      children: <Categories />,
    },
  ];


  return (
    <>


      <Modal open={open} footer={null} onCancel={() => setOpen(false)}>
        <h2>Products</h2>
        <Button className="mb-[12px]" type="primary" onClick={() => setOpen(true)}>
          Add Product
        </Button>
        <ProductForm setOpen={setOpen} />
      </Modal>

      <Tabs items={items} />

    </>
  );
};

export default memo(Dashboard);
