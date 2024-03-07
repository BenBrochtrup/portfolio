'use client'
  
const Equalizer: React.FC = () => {
    return (
        <div className="flex rotate-180 justify-center space-x-1 h-12">
            <div className="w-4 bg-bay-leaf-950 animate-[equalize_750ms_linear_infinite]"/>
            <div className="w-4 bg-bay-leaf-950 animate-[equalize_1000ms_linear_infinite]"/>
            <div className="w-4 bg-bay-leaf-950 animate-[equalize_1250ms_linear_infinite]"/>
        </div>
    );
};

export default Equalizer
