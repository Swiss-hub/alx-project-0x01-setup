import { UserData, UserModalProps } from "@/interfaces";
import React, { useState } from "react";

const initialUser: UserData = {
  id: 0,
  name: "",
  username: "",
  email: "",
  address: {
    street: "",
    suite: "",
    city: "",
    zipcode: "",
    geo: {
      lat: "",
      lng: "",
    },
  },
  phone: "",
  website: "",
  company: {
    name: "",
    catchPhrase: "",
    bs: "",
  },
};

const UserModal: React.FC<UserModalProps> = ({ onClose, onSubmit }) => {
  const [user, setUser] = useState<UserData>(initialUser);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name.startsWith("address.")) {
      const key = name.split(".")[1];
      setUser((prev) => ({
        ...prev,
        address: { ...prev.address, [key]: value },
      }));
    } else if (name.startsWith("geo.")) {
      const key = name.split(".")[1];
      setUser((prev) => ({
        ...prev,
        address: {
          ...prev.address,
          geo: { ...prev.address.geo, [key]: value },
        },
      }));
    } else if (name.startsWith("company.")) {
      const key = name.split(".")[1];
      setUser((prev) => ({
        ...prev,
        company: { ...prev.company, [key]: value },
      }));
    } else {
      setUser((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ ...user, id: Date.now() });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-8 shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Add New User</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4">
            <input name="name" value={user.name} onChange={handleChange} className="col-span-1 px-4 py-2 border rounded-lg" placeholder="Name" required />
            <input name="username" value={user.username} onChange={handleChange} className="col-span-1 px-4 py-2 border rounded-lg" placeholder="Username" required />
            <input name="email" value={user.email} onChange={handleChange} className="col-span-2 px-4 py-2 border rounded-lg" placeholder="Email" required />
            <input name="phone" value={user.phone} onChange={handleChange} className="col-span-2 px-4 py-2 border rounded-lg" placeholder="Phone" />
            <input name="website" value={user.website} onChange={handleChange} className="col-span-2 px-4 py-2 border rounded-lg" placeholder="Website" />
            <input name="address.street" value={user.address.street} onChange={handleChange} className="col-span-1 px-4 py-2 border rounded-lg" placeholder="Street" />
            <input name="address.suite" value={user.address.suite} onChange={handleChange} className="col-span-1 px-4 py-2 border rounded-lg" placeholder="Suite" />
            <input name="address.city" value={user.address.city} onChange={handleChange} className="col-span-1 px-4 py-2 border rounded-lg" placeholder="City" />
            <input name="address.zipcode" value={user.address.zipcode} onChange={handleChange} className="col-span-1 px-4 py-2 border rounded-lg" placeholder="Zipcode" />
            <input name="geo.lat" value={user.address.geo.lat} onChange={handleChange} className="col-span-1 px-4 py-2 border rounded-lg" placeholder="Geo Lat" />
            <input name="geo.lng" value={user.address.geo.lng} onChange={handleChange} className="col-span-1 px-4 py-2 border rounded-lg" placeholder="Geo Lng" />
            <input name="company.name" value={user.company.name} onChange={handleChange} className="col-span-2 px-4 py-2 border rounded-lg" placeholder="Company Name" />
            <input name="company.catchPhrase" value={user.company.catchPhrase} onChange={handleChange} className="col-span-2 px-4 py-2 border rounded-lg" placeholder="Catch Phrase" />
            <input name="company.bs" value={user.company.bs} onChange={handleChange} className="col-span-2 px-4 py-2 border rounded-lg" placeholder="BS" />
          </div>
          <div className="flex justify-between items-center mt-6">
            <button type="button" onClick={onClose} className="px-4 py-2 text-gray-600 hover:text-gray-800">Cancel</button>
            <button type="submit" className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">Add User</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserModal;

