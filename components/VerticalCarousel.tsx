'use client'

interface VerticalCarousel {
    items: Array<String>
}
  
const VerticalCarousel: React.FC = () => {
    return (
        <div className="relative w-full flex justify-center flex-col">
            <div className="flex items-center absolute w-full p-12 opacity-0 drop-shadow-md animate">
                
            </div>
        </div>
    );
};

export default VerticalCarousel