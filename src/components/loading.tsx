import Lottie from "lottie-react";
import loadingAnimation from '@/assets/animations/basketball_loading.json';

export default function Loading() {

    return (
        <div className='flex w-full h-full items-center justify-center bg-gray-100'>
            <Lottie animationData={loadingAnimation} style={{ width: 100, height: 100 }} />
        </div>
    );
}