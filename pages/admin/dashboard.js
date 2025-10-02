import ProtectedRoute from "../../components/ProtectedRoute";

export default function AdminDashboard() {
  return (
    <ProtectedRoute allowedRoles={["admin", "teacher"]}>
      <div>Admin/Teacher Panel</div>
    </ProtectedRoute>
  );
}
