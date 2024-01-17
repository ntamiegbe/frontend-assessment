import { useParams } from 'react-router-dom';

const UserDetails = () => {
    const { userId } = useParams();

    return (
        <div>{userId}</div>
    )
}

export default UserDetails