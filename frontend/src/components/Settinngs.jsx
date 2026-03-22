import React, { useState } from "react";
import { FaUpload } from "react-icons/fa";

export default function AdminSettings() {
  const [, setLogo] = useState(null);
  const [preview, setPreview] = useState(null);

  const [hotelInfo, setHotelInfo] = useState({
    name: "ZN Palace Hotel",
    address: "Indore, MP, India",
    contact: "0755-1234567",
    email: "admin@znpalace.com",
  });

  const [timings, setTimings] = useState({
    checkIn: "12:00",
    checkOut: "10:00",
  });

  const [charges, setCharges] = useState({
    tax: 12,
    service: 100,
  });

  const [payment, setPayment] = useState({
    gateway: "Razorpay",
    key: "rzp_test_ABC123XYZ",
  });

  const [emailOtp, setEmailOtp] = useState({
    smtp: "smtp.znpalace.com",
    port: "587",
    user: "noreply@znpalace.com",
    pass: "*******",
  });

  const [password, setPassword] = useState({
    old: "",
    new: "",
    confirm: "",
  });

//   const [backup, setBackup] = useState(false);
  const [language, setLanguage] = useState("English");
  const [currency, setCurrency] = useState("INR");
  const [notifications, setNotifications] = useState({
    email: true,
    sms: false,
  });

  const handleLogoChange = (e) => {
    const file = e.target.files[0];
    setLogo(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleSave = () => {
    alert("All settings saved successfully!");
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">System Settings</h2>

      {/* HOTEL INFO & LOGO */}
      <div className="bg-white shadow rounded-xl p-5 mb-6 border border-gray-100">
        <h3 className="text-lg font-semibold mb-4">Hotel Info & Branding</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <input
            className="input-style"
            placeholder="Hotel Name"
            value={hotelInfo.name}
            onChange={(e) => setHotelInfo({ ...hotelInfo, name: e.target.value })}
          />
          <input
            className="input-style"
            placeholder="Address"
            value={hotelInfo.address}
            onChange={(e) => setHotelInfo({ ...hotelInfo, address: e.target.value })}
          />
          <input
            className="input-style"
            placeholder="Contact"
            value={hotelInfo.contact}
            onChange={(e) => setHotelInfo({ ...hotelInfo, contact: e.target.value })}
          />
          <input
            className="input-style"
            placeholder="Email"
            value={hotelInfo.email}
            onChange={(e) => setHotelInfo({ ...hotelInfo, email: e.target.value })}
          />
        </div>

        {/* LOGO UPLOAD */}
        <div className="mt-4 flex items-center space-x-4">
          <label className="cursor-pointer inline-flex items-center space-x-2 text-sm text-indigo-600 font-medium">
            <FaUpload />
            <span>Upload Logo</span>
            <input type="file" accept="image/*" className="hidden" onChange={handleLogoChange} />
          </label>
          {preview && (
            <img src={preview} alt="Logo Preview" className="h-12 rounded border" />
          )}
        </div>
      </div>

      {/* CHECK-IN/OUT */}
      <div className="card-section">
        <h3 className="section-title">Check-in / Check-out Timing</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="time"
            className="input-style"
            value={timings.checkIn}
            onChange={(e) => setTimings({ ...timings, checkIn: e.target.value })}
          />
          <input
            type="time"
            className="input-style"
            value={timings.checkOut}
            onChange={(e) => setTimings({ ...timings, checkOut: e.target.value })}
          />
        </div>
      </div>

      {/* TAX & CHARGES */}
      <div className="card-section">
        <h3 className="section-title">Tax & Service Charges</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="number"
            className="input-style"
            placeholder="Tax %"
            value={charges.tax}
            onChange={(e) => setCharges({ ...charges, tax: e.target.value })}
          />
          <input
            type="number"
            className="input-style"
            placeholder="Service Charge (₹)"
            value={charges.service}
            onChange={(e) => setCharges({ ...charges, service: e.target.value })}
          />
        </div>
      </div>

      {/* PAYMENT GATEWAY */}
      <div className="card-section">
        <h3 className="section-title">Payment Gateway</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <select
            className="input-style"
            value={payment.gateway}
            onChange={(e) => setPayment({ ...payment, gateway: e.target.value })}
          >
            <option>Razorpay</option>
            <option>Stripe</option>
            <option>Paytm</option>
          </select>
          <input
            className="input-style"
            placeholder="API Key"
            value={payment.key}
            onChange={(e) => setPayment({ ...payment, key: e.target.value })}
          />
        </div>
      </div>

      {/* EMAIL / OTP */}
      <div className="card-section">
        <h3 className="section-title">Email / OTP Configuration</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input className="input-style" placeholder="SMTP Server" value={emailOtp.smtp} onChange={(e) => setEmailOtp({ ...emailOtp, smtp: e.target.value })} />
          <input className="input-style" placeholder="Port" value={emailOtp.port} onChange={(e) => setEmailOtp({ ...emailOtp, port: e.target.value })} />
          <input className="input-style" placeholder="User Email" value={emailOtp.user} onChange={(e) => setEmailOtp({ ...emailOtp, user: e.target.value })} />
          <input className="input-style" type="password" placeholder="Password" value={emailOtp.pass} onChange={(e) => setEmailOtp({ ...emailOtp, pass: e.target.value })} />
        </div>
      </div>

      {/* ADMIN PASSWORD RESET */}
      <div className="card-section">
        <h3 className="section-title">Admin Password Reset</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input className="input-style" type="password" placeholder="Old Password" value={password.old} onChange={(e) => setPassword({ ...password, old: e.target.value })} />
          <input className="input-style" type="password" placeholder="New Password" value={password.new} onChange={(e) => setPassword({ ...password, new: e.target.value })} />
          <input className="input-style" type="password" placeholder="Confirm Password" value={password.confirm} onChange={(e) => setPassword({ ...password, confirm: e.target.value })} />
        </div>
      </div>

      {/* BACKUP & RESTORE */}
      <div className="card-section">
        <h3 className="section-title">Backup & Restore</h3>
        <div className="flex items-center space-x-4">
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md shadow">Download Backup</button>
          <input type="file" className="input-style w-auto" />
        </div>
      </div>

      {/* LANGUAGE / CURRENCY */}
      <div className="card-section">
        <h3 className="section-title">Multi-language / Currency</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <select className="input-style" value={language} onChange={(e) => setLanguage(e.target.value)}>
            <option>English</option>
            <option>Hindi</option>
            <option>French</option>
          </select>
          <select className="input-style" value={currency} onChange={(e) => setCurrency(e.target.value)}>
            <option>INR</option>
            <option>USD</option>
            <option>EUR</option>
          </select>
        </div>
      </div>

      {/* NOTIFICATIONS */}
      <div className="card-section">
        <h3 className="section-title">Notifications</h3>
        <div className="space-y-2">
          <label className="flex items-center space-x-2">
            <input type="checkbox" checked={notifications.email} onChange={(e) => setNotifications({ ...notifications, email: e.target.checked })} />
            <span>Email Notifications</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="checkbox" checked={notifications.sms} onChange={(e) => setNotifications({ ...notifications, sms: e.target.checked })} />
            <span>SMS Alerts</span>
          </label>
        </div>
      </div>

      {/* SAVE BUTTON */}
      <div className="text-right mt-6">
        <button onClick={handleSave} className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg shadow">
          Save All Settings
        </button>
      </div>
    </div>
  );
}
