import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db, auth } from "../../firebase/firebaseConfig";
import OrdersTable from "./OrdersTable";
import ManageUsers from "./ManageUsers";
import "../../styles/AdminDashboard.css";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const [orders, setOrders] = useState([]);
  const [users, setUsers] = useState([]);
  const [activeMenu, setActiveMenu] = useState("dashboard");

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const orderSnap = await getDocs(collection(db, "orders"));
        const userSnap = await getDocs(collection(db, "users"));
        setOrders(orderSnap.docs.map((d) => ({ id: d.id, ...d.data() })));
        setUsers(userSnap.docs.map((d) => ({ id: d.id, ...d.data() })));
      } catch (err) {
        console.error("Gagal memuat data:", err);
      }
    };
    fetchData();
  }, []);

  const totalOrders = orders.length;
  const totalUsers = users.length;
  const finishedProjects = orders.filter((o) => o.status === "Selesai").length;

  const totalIncome = orders
    .filter((o) => o.status === "Selesai")
    .reduce((sum, o) => sum + (parseFloat(o.price) || 0), 0);

  const weeklyData = [
    { name: "Minggu 1", total: Math.floor(totalOrders * 0.25) },
    { name: "Minggu 2", total: Math.floor(totalOrders * 0.35) },
    { name: "Minggu 3", total: Math.floor(totalOrders * 0.2) },
    { name: "Minggu 4", total: Math.floor(totalOrders * 0.2) },
  ];

  const handleViewOrderDetail = (id) => navigate(`/admin/order/${id}`);

  const renderContent = () => {
    if (activeMenu === "orders")
      return <OrdersTable orders={orders} onViewDetail={handleViewOrderDetail} />;

    if (activeMenu === "users") return <ManageUsers users={users} />;

    return (
      <>
        <h1 className="page-title">📊 Admin Dashboard</h1>

        <div className="stats-grid">
          <div className="stat-card">
            <h3>Total Pesanan</h3>
            <p>{totalOrders}</p>
          </div>
          <div className="stat-card">
            <h3>Jumlah User</h3>
            <p>{totalUsers}</p>
          </div>
          <div className="stat-card">
            <h3>Proyek Selesai</h3>
            <p>{finishedProjects}</p>
          </div>
          <div className="stat-card">
            <h3>Total Pendapatan</h3>
            <p>Rp {totalIncome.toLocaleString("id-ID")}</p>
          </div>
        </div>

        <div className="chart-box">
          <h2>Grafik Pesanan per Minggu</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={weeklyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="total" fill="#3b82f6" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </>
    );
  };

  return (
    <div className="admin-dashboard-layout">
      <aside className="sidebar">
        <h2 className="logo">🎨 Admin Panel</h2>

        <nav>
          <button
            className={activeMenu === "dashboard" ? "active" : ""}
            onClick={() => setActiveMenu("dashboard")}
          >
            📊 Dashboard
          </button>

          <button
            className={activeMenu === "orders" ? "active" : ""}
            onClick={() => setActiveMenu("orders")}
          >
            🧾 Pesanan
          </button>

          <button
            className={activeMenu === "users" ? "active" : ""}
            onClick={() => setActiveMenu("users")}
          >
            👥 Pengguna
          </button>

          <button
            onClick={async () => {
              await auth.signOut();
              window.location.href = "/login";
            }}
          >
            🚪 Logout
          </button>
        </nav>
      </aside>

      <main className="admin-main">{renderContent()}</main>
    </div>
  );
};

export default AdminDashboard;
