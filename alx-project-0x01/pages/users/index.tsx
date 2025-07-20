import UserCard from "@/components/common/UserCard";
import UserModal from "@/components/common/UserModal";
import Header from "@/components/layout/Header";
import { UserProps, UserData } from "@/interfaces";
import { useState } from "react";

interface UsersPageProps {
  posts: UserProps[];
}

const Users: React.FC<UsersPageProps> = ({ posts }) => {
  const [users, setUsers] = useState<UserProps[]>(posts);
  const [isModalOpen, setModalOpen] = useState(false);

  const handleAddUser = (user: UserData) => {
    setUsers((prev) => [...prev, user]);
  };

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="p-4">
        <div className="flex justify-between mb-4">
          <h1 className="text-2xl font-semibold">Users</h1>
          <button
            className="bg-blue-700 px-4 py-2 rounded-full text-white"
            onClick={() => setModalOpen(true)}
          >
            Add User
          </button>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {users.map((user: UserProps) => (
            <UserCard key={user.id} {...user} />
          ))}
        </div>
        {isModalOpen && (
          <UserModal onClose={() => setModalOpen(false)} onSubmit={handleAddUser} />
        )}
      </main>
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const posts = await response.json();

  return {
    props: {
      posts,
    },
  };
}

export default Users;