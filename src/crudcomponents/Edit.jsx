import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "./create.css";

const Edit = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const navigate = useNavigate();
  const data = useParams();

  // ✅ useEffect with the corrected dependency array
  useEffect(() => {

      axios.get(`http://localhost:8000/users/${data.userId}`).then((res) => {
          setName(res.data.name);
          setEmail(res.data.email);
          setPhone(res.data.phone);
        })
        .catch((err) => console.error("Error fetching user data:", err));
    
  }, []); // ✅ Fix: Added data.userId as a dependency

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = { name, email, phone };

    axios
      .put(`http://localhost:8000/users/${data.userId}`, payload)
      .then((res) => {
        toast.success("User updated successfully");
        navigate("/");
      })
      .catch(() => toast.error("User not updated"));
  };

  return (
    <div className="formBlock">
      <h1>Update User</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />{" "}
        <br />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />{" "}
        <br />
        <input
          type="tel"
          placeholder="Phone Number"
          maxLength={10}
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />{" "}
        <br />
        <input type="submit" value="Update User" />
        <Link to="/">Back to Homepage</Link>
      </form>
    </div>
  );
};

export default Edit;