import React from 'react'

export default function Slider() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const images = ['images/image1.png', 'images/image2.png', 'images/image3.png'];

  
    const nextImage = () => {
      setCurrentImageIndex(currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1);
    };
  
    useEffect(() => {
      const intervalId = setInterval(nextImage, 30000);
      return () => clearInterval(intervalId);
    }, []);
  
    return (
      <div>
        <img src={images[currentImageIndex]} alt="slider" />
      </div>
    );
}
