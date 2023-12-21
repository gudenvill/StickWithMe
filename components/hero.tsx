import styles from './featured.module.css';


const Hero = () => {
  return (
    <div className={styles.textBorder}>
      <div className="relative w-full" style={{ height: '50vh' }}> {/* Set the height to 50vh for a larger banner */}
        <img
          src="/images/chrismas-banner.jpg"
          alt="Merry Christmas!"
          className="w-full h-full object-cover" // Use h-full to make the image take up the full height of the div
        />
        <div className="flex flex-col justify-center items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          {/* Flex container centered both horizontally and vertically */}
          <div className={styles.myCustomFontClass}>
            <p className="text-black text-4xl md:text-6xl mb-4 font-extrabold shadow-lg">
              Save up to 30% during Christmas
            </p> {/* Increased text size and margin for spacing */}
          </div>
          <button className="text-white bg-green-500 hover:bg-red-500 font-bold py-2 px-4 border-4 border-green-700 rounded shadow">
            Click Here!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
