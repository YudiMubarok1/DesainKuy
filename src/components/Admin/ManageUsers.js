import React, { useState } from "react";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import "../../styles/OrdersTable.css"; // pakai CSS yg sama biar seragam

const ManageUsers = ({ users }) => {
  const [editingRole, setEditingRole] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleRoleChange = async (userId, newRole) => {
    try {
      setEditingRole(userId);
      const ref = doc(db, "users", userId);
      await updateDoc(ref, { role: newRole });
      alert("✅ Role berhasil diperbarui!");
      window.location.reload();
    } catch (err) {
      alert("❌ Gagal memperbarui role!");
    } finally {
      setEditingRole(null);
    }
  };

  return (
    <div className="orders-wrapper">
      <h2>👥 Manajemen Pengguna</h2>
      <table className="orders-table">
        <thead>
          <tr>
            <th>Nama</th>
            <th>Email</th>
            <th>Role</th>
            <th>Tanggal Bergabung</th>
            <th>📋 Detail</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u.id}>
              <td>{u.name || "-"}</td>
              <td>{u.email || "-"}</td>
              <td>
                <select
                  className="status-select"
                  value={u.role || "user"}
                  onChange={(e) => handleRoleChange(u.id, e.target.value)}
                  disabled={editingRole === u.id}
                >
                  <option value="user">User</option>
                  <option value="admin">Admin</option>
                </select>
              </td>
              <td>
                {u.createdAt?.seconds
                  ? new Date(u.createdAt.seconds * 1000).toLocaleDateString("id-ID")
                  : "-"}
              </td>
              <td>
                <button className="btn-detail" onClick={() => setSelectedUser(u)}>
                  👁️ Lihat
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal Detail User */}
      {selectedUser && (
        <div className="modal-overlay" onClick={() => setSelectedUser(null)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <h3>📋 Detail Pengguna</h3>
            <p><b>Nama:</b> {selectedUser.name || "-"}</p>
            <p><b>Email:</b> {selectedUser.email}</p>
            <p><b>Role:</b> {selectedUser.role || "user"}</p>
            <p>
              <b>Tanggal Gabung:</b>{" "}
              {selectedUser.createdAt?.seconds
                ? new Date(selectedUser.createdAt.seconds * 1000).toLocaleDateString("id-ID")
                : "-"}
            </p>
            <p><b>UID:</b> {selectedUser.id}</p>

            {selectedUser.phone && <p><b>No HP:</b> {selectedUser.phone}</p>}
            {selectedUser.address && <p><b>Alamat:</b> {selectedUser.address}</p>}

            <button className="btn-close" onClick={() => setSelectedUser(null)}>
              Tutup
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageUsers;
