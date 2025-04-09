import React from 'react'
import "../../css/Admin.scss"

import { useState } from "react";
import Card from "./Card";
import Button from "./Button";
import Input from "./Input";
import Dialog from "./Dialog";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { Users, Package, ShoppingCart } from "lucide-react";

import axios from "axios";

const Dashboard = () => {
    const [orders, setOrders] = useState(0);
    const [products, setProducts] = useState([]);
    const [users, setUsers] = useState(0);
    const [showForm, setShowForm] = useState(false);
    const [editingProduct, setEditingProduct] = useState(null);
    const [productData, setProductData] = useState({});

    const [productImage, setProductImage] = useState([]);
    const data = [
        { name: "Jan", sales: 400 },
        { name: "Feb", sales: 300 },
        { name: "Mar", sales: 500 },
        { name: "Apr", sales: 700 },
    ];

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProductData({ ...productData, [name]: value });
        console.log(productData);
        
    };

    const handleImageChange = (e) => {
        const file = e.target.files;
        const files = Array.from(e.target.files); // Convert FileList to Array
        setProductImage(files);
      
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        const baseUrl = import.meta.env.VITE_API_BASE_URL;

        let api = `${baseUrl}/admin/addproduct`
        console.log(api);
        

        try {


            let formData = new FormData();
            for (let key in productData) {
                formData.append(key, productData[key]);
            }

            for (let i = 0; i < productImage.length; i++) {
                formData.append('image', productImage[i]);
            }



            const response = await axios.post(api, formData);



            console.log(response.data);

            setShowForm(false);

            setProductData({});
            alert("file upload!!!");


            

        } catch (error) {
            
            console.log(error);
            
        }


    
    
    };

    const handleEdit = (product) => {
        setEditingProduct(product);
        setProductData(product);
        setShowForm(true);
    };

    const handleDelete = (id) => {
        setProducts(products.filter(p => p.id !== id));
    };

    const handleDropAll = () => {
        setProducts([]);
    };

    return (
        <div className="dashboard-container">
            <h1 className="dashboard-title">Admin Dashboard</h1>
            <div className="dashboard-grid">
                <Card className="dashboard-card">
                    <ShoppingCart className="dashboard-icon orders" />
                    <div className="dashboard-content">
                        <p className="dashboard-label">Orders</p>
                        <p className="dashboard-value">{orders}</p>
                    </div>
                </Card>
                <Card className="dashboard-card">
                    <Users className="dashboard-icon users" />
                    <div className="dashboard-content">
                        <p className="dashboard-label">Users</p>
                        <p className="dashboard-value">{users}</p>
                    </div>
                </Card>
            </div>
            <div className="sales-overview">
                <h2 className="sales-title">Sales Overview</h2>
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={data}>
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="sales" fill="#4F46E5" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
            <div className="dashboard-actions">
                <Button className="add-product" onClick={() => setShowForm(true)}>Add Product</Button>
                <Button className="drop-all" onClick={handleDropAll}>Drop All Products</Button>
            </div>
            <div className="product-list">
                {products.map(product => (
                    <Card key={product.id} className="product-card">
                        <p>{product.name} - ${product.price}</p>
                        <Button className="edit-product" onClick={() => handleEdit(product)}>Edit</Button>
                        <Button className="delete-product" onClick={() => handleDelete(product.id)}>Delete</Button>
                    </Card>
                ))}
            </div>
            <Dialog open={showForm} onOpenChange={setShowForm}>
                <div className="dialog-content">
                    <h2 className="dialog-title">{editingProduct ? "Edit Product" : "Add Product"}</h2>
                    <form onSubmit={handleSubmit} className="product-form">
                        <div>
                            <label>Product Name</label>
                            <Input name="name" value={productData.name} onChange={handleInputChange} required />
                        </div>
                        <div>
                            <label>Description</label>
                            <Input name="description" value={productData.description} onChange={handleInputChange} required />
                        </div>
                        <div>
                            <label>Price</label>
                            <Input name="price" type="number" value={productData.price} onChange={handleInputChange} required />
                        </div>
                        <div>
                            <label>Brand</label>
                            <Input name="brand" value={productData.brand} onChange={handleInputChange} required />
                        </div>
                        <div>
                            <label>Category</label>
                            <Input name="category" value={productData.category} onChange={handleInputChange} required />
                        </div>
                        <div>
                            <label>Product Image</label>
                            <input type="file" multiple    name="files"  onChange={handleImageChange} />
                        </div>
                    </form>
                    <div className="dialog-footer">
                        <Button type="submit" className="save-product" onClick={handleSubmit}>Save</Button>
                        <Button type="button" className="cancel-product" onClick={() => setShowForm(false)}>Cancel</Button>
                    </div>
                </div>
            </Dialog>
        </div>
    );
};

export default Dashboard;
