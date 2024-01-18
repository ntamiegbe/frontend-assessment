import { Link, useParams } from 'react-router-dom';
import { useFetchUserByIdQuery } from '../services/users';
import LoadingSpinner from '../components/LoadingSpinner';

const UserDetails = () => {
    const userId = useParams().userId || 0;
    const parsedUserId = Number(userId);

    // Handle invalid userIds
    if (isNaN(parsedUserId)) {
        return <div className="bg-red-500 p-4 text-white text-center font-bold rounded-lg">Invalid user ID</div>;
    }

    const { data: user, isLoading, refetch, isFetching } = useFetchUserByIdQuery(parsedUserId);

    const refreshUsers = () => {
        refetch();
    };

    return (
        <div className="h-screen">
            {isLoading || isFetching ? (
                <div className="flex items-center justify-center">
                    <LoadingSpinner loading={isLoading} size={30} text="Fetching User Details" />
                </div>
            ) : (
                user && (
                    <div className="p-8 lg:p-16 bg-white">
                        <div className="flex items-center justify-end mb-8 space-x-4">
                            <Link to="/" className="py-2 px-4 border rounded-md hover:scale-110 transition">
                                Back to Home
                            </Link>
                            <button onClick={refreshUsers} className="py-2 px-4 border rounded-md hover:scale-110 transition">Refresh</button>
                        </div>
                        <h1 className="text-[3rem] font-extrabold mb-6">{user.name}</h1>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="mb-8">
                                <p className="text-gray-600 font-medium">Username</p>
                                <p className="text-lg font-semibold">{user.username}</p>
                            </div>
                            <div className="mb-8">
                                <p className="text-gray-600 font-medium">Email</p>
                                <p className="text-lg font-semibold">{user.email}</p>
                            </div>
                        </div>
                        <div className="mb-8">
                            <p className="text-gray-600 font-medium">Address</p>
                            <div className="text-lg font-semibold">{user.address.street}</div>
                            <div className="text-lg font-semibold">{user.address.suite}</div>
                            <div className="text-lg font-semibold">{user.address.city}, {user.address.zipcode}</div>
                        </div>
                        <div className="mb-8">
                            <p className="text-gray-600 font-medium">Phone</p>
                            <p className="text-lg font-semibold">{user.phone}</p>
                        </div>
                        <div className="mb-8">
                            <p className="text-gray-600 font-medium">Website</p>
                            <a href={user.website} className="text-blue-500 hover:underline">{user.website}</a>
                        </div>
                        <div className="mb-8">
                            <p className="text-gray-600 font-medium">Company</p>
                            <div className="text-lg font-semibold">{user.company.name}</div>
                            <div className="text-lg font-semibold">{user.company.catchPhrase}</div>
                            <div className="text-lg font-semibold">{user.company.bs}</div>
                        </div>
                    </div>



                )
            )}
        </div>
    );
};

export default UserDetails;
