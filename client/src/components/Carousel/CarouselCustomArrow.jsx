import { Carousel, IconButton, Typography } from "@material-tailwind/react";
import CauroselOne from '../../assets/carousel_one.jpg';
import CauroselTwo from '../../assets/carousel_two.jpg';
import CauroselThree from '../../assets/carousel_three.jpg';
 
export function CarouselCustomArrows() {
  return (
    <Carousel
      className="rounded-xl"
      autoplay // Enable auto-play
      interval={5000}
      loop
      autoplayDelay={5000}
      prevArrow={({ handlePrev }) => (
        <IconButton
          variant="text"
          color="white"
          size="lg"
          onClick={handlePrev}
          className="!absolute top-2/4 left-4 -translate-y-2/4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
        </IconButton>
      )}
      nextArrow={({ handleNext }) => (
        <IconButton
          variant="text"
          color="white"
          size="lg"
          onClick={handleNext}
          className="!absolute top-2/4 !right-4 -translate-y-2/4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </IconButton>
      )}
    >
      <div className="relative">
        <img
          src={CauroselOne}
          alt="image 1"
          loading="lazy"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 grid">
          <Typography variant="h3" className=" md:mt-96 md:mr-72 text-left md:pl-10">Never Miss a Dose Again</Typography>
        </div>
      </div>
      <img
        src={CauroselTwo}
        alt="image 2"
        loading="lazy"
        className="object-cover w-full h-full"
      />
      <img
        src={CauroselThree}
        alt="image 3"
        loading="lazy"
        className="object-cover w-full h-full"
      />
    </Carousel>
  );
}