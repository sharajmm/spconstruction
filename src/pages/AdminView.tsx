import React, { useEffect, useState } from "react";
import { db } from "../config/firebase";
import { collection, getDocs } from "firebase/firestore";

interface UserInterest {
  uid: string;
  email: string;
  name: string;
  age: string;
  location: string;
  needs: string;
  interestedCategories: string[];
}

const AdminView: React.FC = () => {
  const [users, setUsers] = useState<UserInterest[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "userDetails"));
        const userList: UserInterest[] = [];
        querySnapshot.forEach((doc) => {
          userList.push(doc.data() as UserInterest);
        });
        setUsers(userList);
      } catch (err) {
        // handle error
      } finally {
        setLoading(false);
      }
    };
    fetchUserDetails();
  }, []);

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-8">
      <h2 className="text-2xl font-bold mb-4 text-blue-700 text-center">
        All Users Interests
      </h2>
      {loading ? (
        <div className="text-center">Loading...</div>
      ) : users.length === 0 ? (
        <div className="text-center text-gray-500">
          No user interests found.
        </div>
      ) : (
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-blue-50">
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">Email</th>
              <th className="border px-4 py-2">Location</th>
              <th className="border px-4 py-2">Needs</th>
              <th className="border px-4 py-2">Categories</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.uid}>
                <td className="border px-4 py-2">{user.name}</td>
                <td className="border px-4 py-2">{user.email}</td>
                <td className="border px-4 py-2">{user.location}</td>
                <td className="border px-4 py-2">{user.needs}</td>
                <td className="border px-4 py-2">
                  {user.interestedCategories.join(", ")}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AdminView;
