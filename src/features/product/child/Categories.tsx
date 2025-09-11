import { memo, useState } from "react";
import { Button, Form, Input, Modal, Space, Table } from "antd";
import { useCategory } from "../store/useCategory";

const Categories = () => {
    const { getCategorys, createCategory, editCategory, deleteCategory } = useCategory();
    const { data, isLoading } = getCategorys();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editing, setEditing] = useState<any>(null);
    const [form] = Form.useForm();

    const handleCreate = () => {
        setEditing(null);
        form.resetFields();
        setIsModalOpen(true);
    };

    const handleEdit = (item: any) => {
        setEditing(item);
        form.setFieldsValue({ name: item.name });
        setIsModalOpen(true);
    };

    const handleSubmit = () => {
        form.validateFields().then((values) => {
            if (editing) {
                editCategory.mutate(
                    { id: editing.id, ...values },
                    {
                        onSuccess: () => {
                            setIsModalOpen(false);
                        },
                    }
                );
            } else {
                createCategory.mutate(values, {
                    onSuccess: () => {
                        setIsModalOpen(false);
                    },
                });
            }
        });
    };

    const handleDelete = (id: string) => {
        deleteCategory.mutate({ id });
    };

    const columns = [
        {
            title: "Category",
            dataIndex: "name",
            render: (text: string) => <span>{text}</span>,
        },
        {
            title: "Action",
            key: "action",
            width: 200,
            render: (_: any, categories: any) => (
                <Space>
                    <Button
                        type="primary"
                        ghost
                        onClick={() => handleEdit(categories)}
                    >
                        Edit
                    </Button>

                    <Button
                        danger
                        onClick={() => handleDelete(categories.id)}
                    >
                        Delete
                    </Button>
                </Space>
            ),
        },
    ];

    return (
        <>
        <div className="flex justify-between items-center mb-4 p-[5px]">
                <h2 className="text-xl font-bold">Category</h2>
                <Button type="primary" onClick={handleCreate}>
                    Add
                </Button>
            </div>
        <div className="p-3 bg-white rounded-xl shadow-md">
            

            <Table
                columns={columns}
                dataSource={data?.data || []}
                rowKey="id"
                loading={isLoading}
                className="rounded-lg overflow-hidden"
                pagination={{pageSize: 5}}
            />


            <Modal className="mt-[100px]"
                title={editing ? "Category Edit" : "Category Add"}
                open={isModalOpen}
                onCancel={() => setIsModalOpen(false)}
                onOk={handleSubmit}
                okText="Save"
                cancelText="Cancel"
                style={{ marginTop: 170 }}  
            >
                <Form  form={form} layout="vertical">
                    <Form.Item
                        label="You Categories Name"
                        name="name"
                    >
                        <Input placeholder="Enter you category name" />
                    </Form.Item>
                </Form>
            </Modal>
        </div>
        </>
    );
};

export default memo(Categories);