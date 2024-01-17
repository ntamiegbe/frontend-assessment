import { ClipLoader } from 'react-spinners';

type Props = {
    loading: boolean;
    size?: number;
    text?: string
};

const LoadingSpinner: React.FC<Props> = ({ loading, size, text }) => {
    return (
        <div className='h-screen flex items-center space-x-5'>
            <ClipLoader color="#1E3C72" loading={loading} size={size} />
            <p className="text-primary text-center text-xl font-semibold mt-2">{text}</p>
        </div>
    );
};

export default LoadingSpinner;
