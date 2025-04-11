import React from 'react'

import "../css/Board.scss"


import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from "recharts";
import { Outlet } from 'react-router';

const barData = [
    { name: "Jan", visits: 8 }, { name: "Feb", visits: 18 }, { name: "Mar", visits: 30 },
    { name: "Apr", visits: 20 }, { name: "May", visits: 10 }, { name: "Jun", visits: 20 },
    { name: "Jul", visits: 30 }, { name: "Aug", visits: 20 }, { name: "Sep", visits: 10 },
    { name: "Oct", visits: 20 }, { name: "Nov", visits: 28 }, { name: "Dec", visits: 22 },
];

const pieData = [
    { name: "Europe", value: 30 },
    { name: "Asia", value: 45 },
    { name: "America", value: 25 },
];

const COLORS = ["#8884d8", "#82ca9d", "#ffc658"];

const Board = () => {
    return (
        <div className="dashboard">
            <aside className="sidebar">
                <h2>Admin</h2>
                <nav>
                    <button className="active">Dashboard</button>
                    <button>Add Product</button>
                    <button>Track Order</button>
                    <button>Total Revenue </button>
                </nav>
            </aside>


            <Outlet/>

            <main className="main-content">
                <section className="stats">
                    <div className="card">Profile Views <strong>112,000</strong></div>
                    <div className="card">Followers <strong>183,000</strong></div>
                    <div className="card">Following <strong>80,000</strong></div>
                    <div className="card">Saved Posts <strong>112</strong></div>
                </section>

                <section className="charts">
                    <div className="bar-chart">
                        <h3>Profile Visit</h3>
                        <ResponsiveContainer width="100%" height={250}>
                            <BarChart data={barData}>
                                <XAxis dataKey="name" stroke="#ccc" />
                                <YAxis stroke="#ccc" />
                                <Tooltip />
                                <Bar dataKey="visits" fill="#4F7CFD" />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>

                    <div className="pie-chart">
                        <h3>Visitors Profile</h3>
                        <PieChart width={250} height={250}>
                            <Pie
                                data={pieData}
                                cx="50%"
                                cy="50%"
                                outerRadius={80}
                                fill="#8884d8"
                                dataKey="value"
                            >
                                {pieData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Legend />
                        </PieChart>
                    </div>
                </section>

                <section className="messages">
                    <h3>Recent Messages</h3>
                    <ul>
                        <li><strong>Hank Schrader</strong> @johnducky</li>
                        <li><strong>Dean Winchester</strong> @imdean</li>
                        <li><strong>John Dodol</strong> @dodoljohn</li>
                    </ul>
                </section>
            </main>
        </div>
    );
};

export default Board;
