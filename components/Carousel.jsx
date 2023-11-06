import { Carousel } from "@material-tailwind/react";
import Image from "next/image";
import * as React from "react";

export default function CustomCarousel() {
  const [imageHeight, setImageHeight] = React.useState(0);
  const [imageWidth, setImageWidth] = React.useState(0);
  const heightRef = React.useRef(null);
  const widthRef = React.useRef(null);

  const clientHeight = heightRef.current
    ? heightRef.current.clientHeight
    : null;
  const clientWidth = widthRef.current ? widthRef.current.clientWidth : null;

  React.useEffect(() => {
    if (heightRef.current && widthRef.current) {
      setImageHeight(heightRef.current.clientHeight);
      setImageWidth(widthRef.current.clientWidth);
      console.log(clientHeight, clientWidth, imageHeight, imageWidth);
    }
  }, [imageHeight, clientHeight, imageWidth, clientWidth]);

  const setRefs = (element) => {
    heightRef.current = element;
    widthRef.current = element;
  }

  return (
    <Carousel
      ref={setRefs}
      className="rounded-xl max-w-[600px] max-h-[325px] relative overflow-hidden"
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      <Image
        src="/image1.jpg"
        alt="image 1"
        width={imageWidth}
        height={imageHeight}
        loading="lazy"
        className={`h-[${imageHeight}px] w-[${imageWidth}px] object-cover pointer-events-none`}
      />
      <Image
        src="/image2.jpg"
        alt="image 2"
        width={imageWidth}
        height={imageHeight}
        loading="lazy"
        className={`h-[${imageHeight}px] w-[${imageWidth}px] object-cover pointer-events-none`}
      />
      <Image
        src="/image3.jpg"
        alt="image 3"
        width={imageWidth}
        height={imageHeight}
        loading="lazy"
        className={`h-[${imageHeight}px] w-[${imageWidth}px] object-cover pointer-events-none`}
      />
      <Image
        src="/image4.png"
        alt="image 4"
        width={imageWidth}
        height={imageHeight}
        loading="lazy"
        className={`h-[${imageHeight}px] w-[${imageWidth}px] object-cover pointer-events-none`}
      />
      <Image
        src="/image5.jpg"
        alt="image 5"
        width={imageWidth}
        height={imageHeight}
        loading="lazy"
        className={`h-[${imageHeight}px] w-[${imageWidth}px] object-cover pointer-events-none`}
      />
    </Carousel>
  );
}
