import Navbar from "@/components/nav-bar";
import Image from 'next/image';

const backgroundStyle = {
    backgroundImage: 'url(/images/wallpaper.jpg)', // Direct reference to the image in the public folder
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh', // This ensures that the background covers at least the full height of the viewport
    width: '100%' // Ensures the background covers the full width
  };
  

const SizeGuide = () => {
    return ( 
        <div className="flex flex-col justify-between" style={backgroundStyle}>
            <Navbar />
            <div className="flex-grow flex flex-col items-center justify-center">
                <h1 className="text-2xl font-bold text-center mb-8">Sticker Size Guide</h1>
                <div className="flex flex-col items-center justify-center space-y-6 w-96">
                    <div className="text-center">
                        <h2 className="text-lg font-semibold mb-3">Small (5.4cm x 5.4cm)</h2>
                        <Image
                            src="/images/size/sizeSmall.jpg"
                            alt="Small sticker size"
                            width={1000}
                            height={1000}
                            layout="responsive"
                        />
                    </div>
                    <div className="text-center">
                        <h2 className="text-lg font-semibold mb-3">Medium (6.97cm x 6.97cm)</h2>
                        <Image
                            src="/images/size/sizeMedium.jpg"
                            alt="Medium sticker size"
                            width={1000} // Replace with actual width
                            height={1000} // Replace with actual height
                            layout="responsive"
                        />
                    </div>
                    <div className="text-center">
                        <h2 className="text-lg font-semibold mb-3">Large (9.27cm x 9.27cm)</h2>
                        <Image
                            src="/images/size/sizeLarge.jpg"
                            alt="Large sticker size"
                            width={1000} // Replace with actual width
                            height={1000} // Replace with actual height
                            layout="responsive"
                        />
                    </div>
                </div>
            </div>
        </div>
     );
}

export default SizeGuide;
