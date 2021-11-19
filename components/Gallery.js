import React, { useState, useEffect, useCallback } from "react";
import { PrevButton, NextButton } from "./EmblaCarouselButtons";
import useEmblaCarousel from "embla-carousel-react";

const nftList = [
  {
    id: 1,
    image: "/images/1.png",
  },
  {
    id: 2,
    image: "/images/2.png",
  },
  {
    id: 3,
    image: "/images/5.png",
  },
  {
    id: 4,
    image: "/images/7.png",
  },
  {
    id: 5,
    image: "/images/9.png",
  },
];

const Gallery = ({}) => {
  const [viewportRef, embla] = useEmblaCarousel({
    containScroll: "trimSnaps",
    dragFree: true,
  });

  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);

  const onSelect = useCallback(() => {
    if (!embla) return;
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla]);

  const onScroll = useCallback(() => {
    if (!embla) return;
    const progress = Math.max(0, Math.min(1, embla.scrollProgress()));
    setScrollProgress(progress * 100);
  }, [embla, setScrollProgress]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    onScroll();
    embla.on("select", onSelect);
    embla.on("scroll", onScroll);
  }, [embla, onSelect, onScroll]);

  return (
    <div id="gallery" className="py-20 mt-16 bg-secondary">
      <div className="container max-w-6xl mx-auto">
        <h2 className="mb-10 text-5xl font-bold text-center text-white">
          The Gallery
        </h2>
        <div className="embla">
          <div className="embla__viewport" ref={viewportRef}>
            <div className="embla__container">
              {nftList.map((nft, index) => (
                <div className="embla__slide" key={index}>
                  <div className="embla__slide__inner">
                    <img
                      className="embla__slide__img"
                      src={nft.image}
                      alt={"NFT"}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
          <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
        </div>
        <div className="embla__progress">
          <div
            className="embla__progress__bar"
            style={{ transform: `translateX(${scrollProgress}%)` }}
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
