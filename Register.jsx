import React, { useState } from "react";

function Register() {
  const [form, setForm] = useState({ name: "", age: "", symptoms: "" });
  const [response, setResponse] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("http://127.0.0.1:8000/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        message: `Patient Name: ${form.name}, Age: ${form.age}, Symptoms: ${form.symptoms}`,
      }),
    });
    const data = await res.json();
    setResponse(data.response);
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 shadow-xl rounded-lg space-y-4">
      <h2 className="text-xl font-bold text-indigo-800">Register Patient 📝</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Patient Name"
          className="w-full border border-gray-300 rounded px-3 py-2"
          required
        />
        <input
          type="number"
          name="age"
          value={form.age}
          onChange={handleChange}
          placeholder="Age"
          className="w-full border border-gray-300 rounded px-3 py-2"
          required
        />
        <textarea
          name="symptoms"
          value={form.symptoms}
          onChange={handleChange}
          placeholder="Describe symptoms"
          className="w-full border border-gray-300 rounded px-3 py-2"
          required
        />
        <button className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded">Register</button>
      </form>
      {response && (
        <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded">
          <p className="text-green-700 text-sm">{response}</p>
        </div>
      )}
    </div>
  );
}

export default Register;
