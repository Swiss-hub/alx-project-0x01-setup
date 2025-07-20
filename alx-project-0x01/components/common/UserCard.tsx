import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({
  name,
  username,
  email,
  address,
  phone,
  website,
  company,
  id,
}) => {
  return (
    <div className="max-w-xl mx-auto my-6 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="mb-2 flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-gray-800">{name}</h2>
        <span className="text-sm text-gray-500">#{id}</span>
      </div>
      <p className="text-gray-600 mb-2">@{username}</p>
      <p className="text-gray-600 mb-2">📧 {email}</p>
      <p className="text-gray-600 mb-2">🏠 {address.street}, {address.city}</p>
      <p className="text-gray-600 mb-2">📞 {phone}</p>
      <p className="text-gray-600 mb-2">🌐 <a href={`http://${website}`} className="text-blue-700 underline" target="_blank" rel="noopener noreferrer">{website}</a></p>
      <div className="mt-4">
        <span className="block text-gray-700 font-semibold">{company.name}</span>
        <span className="block text-gray-500 italic">"{company.catchPhrase}"</span>
      </div>
    </div>
  );
};

export default UserCard;