import { useState } from "react";
import LoadingSpinner from "../components/LoadingSpinner";
import { useFetchAllUsersQuery } from "../services/users";
import { Link } from "react-router-dom";
import { User } from "../../types/users";

const UserList: React.FC<{ users: User[]; handleUserClick: (userId: number) => void }> = ({ users, handleUserClick }) => (
    <div className="md:hidden rounded border border-slate-200">
        {users.map((user: User) => (
            <div key={user.id} className="mb-2 w-full rounded-md bg-white p-4">
                <div className="flex items-center justify-between border-b pb-4">
                    <div>
                        <div className="mb-2 flex items-center">
                            <Link to={`/user/${user.id}`} onClick={() => handleUserClick(user.id)}>
                                <p>{user.name}</p>
                            </Link>
                        </div>
                        <p className="text-sm text-gray-500">{user.email}</p>
                    </div>
                </div>
            </div>
        ))}
    </div>
);

const UserTable: React.FC<{ users: User[]; handleUserClick: (userId: number) => void }> = ({ users, handleUserClick }) => (
    <table className="hidden min-w-full text-gray-900 md:table rounded border border-slate-200">
        <thead className="rounded-lg text-left text-md font-normal bg-slate-200">
            <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                    Full Name
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                    Email
                </th>
            </tr>
        </thead>
        <tbody className="bg-white">
            {users.map((user: User) => (
                <tr
                    key={user.id}
                    className="w-full border-b py-3 text-base last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                    <td className="whitespace-nowrap px-3 py-3">
                        <Link to={`/user/${user.id}`} onClick={() => handleUserClick(user.id)}>
                            <p>{user.name}</p>
                        </Link>
                    </td>
                    <td className="whitespace-nowrap px-3 py-3">{user.email}</td>
                </tr>
            ))}
        </tbody>
    </table>
);

export default function Home() {
    const { data: users, isLoading } = useFetchAllUsersQuery("");
    const [selectedUserId, setSelectedUserId] = useState(0);

    const handleUserClick = (userId: number) => {
        setSelectedUserId(userId);
    };

    return (
        <div className="mt-20 flow-root p-10">
            {isLoading && (
                <div className="h-screen flex items-center justify-center">
                    <LoadingSpinner loading={isLoading} size={30} text="Fetching all users" />
                </div>
            )}

            <h3 className="text-lg lg:text-2xl font-semibold text-center mb-5">ALL USERS</h3>

            <div className="inline-block min-w-full align-middle">
                <div className="rounded-lg bg-gray-10 p-2 md:pt-0">
                    <UserList users={users || []} handleUserClick={handleUserClick} />
                    <UserTable users={users || []} handleUserClick={handleUserClick} />
                </div>
            </div>
        </div>
    );
}
