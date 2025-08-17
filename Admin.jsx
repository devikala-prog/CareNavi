import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

function Admin() {
  const data = {
    labels: ["Patients", "Completed", "Referred", "Escalated"],
    datasets: [
      {
        label: "Status Overview",
        data: [12, 7, 3, 2],
        backgroundColor: ["#6366f1", "#10b981", "#f59e0b", "#ef4444"],
      },
    ],
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl mx-auto">
      <h2 className="text-xl font-bold text-gray-800 mb-4">📊 Admin Dashboard</h2>
      <Bar data={data} />
    </div>
  );
}

export default Admin;
