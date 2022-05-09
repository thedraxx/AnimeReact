import React from "react";
import { useState } from "react";
import styled from "styled-components";

const DIV = styled.div`
  margin: 15px auto;
  background-color: ${(props) => (props.isPink ? "pink" : "#3c7f8b")};
  transition: 1s;
  width: 100%;
`;

const CarouselImg = styled.img`
  display: block;
  max-width: 1000px;
  width: 100%;
  height: auto;
  margin: 15px auto;
  opacity: 0;
  transition: 1s;
  &.loaded {
    opacity: 1;
  }
`;

const CarouselButtonContainer = styled.div`
  display: block;
  max-width: 1000px;
  width: 100%;
  margin: 15px auto;
`;

const CarrierouselButton = styled.button`
position: relative;
  color: #fff;
  background-color: transparent;
  top: 50%;
  left: 50%;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  &:hover {
    color: #000000;
    background-color: rgba(61, 61, 61, 0.5);
  }
`;

export const Carousel = () => {
  const images = ["a.png", "k.png", "c.png"];
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [loaded, setLoaded] = useState(false);
  const [isPink, setIsPink] = useState(false);

  const selectNewImage = (index, image, next = true) => {
    setLoaded(false);
    setTimeout(() => {
      const condition = next
        ? selectedIndex < images.length - 1
        : selectedIndex > 0;
      const nextIndex = next
        ? condition
          ? selectedIndex + 1
          : 0
        : condition
        ? selectedIndex - 1
        : images.length - 1;
      setSelectedImage(images[nextIndex]);
      setSelectedIndex(nextIndex);
    }, 500);
  };
  const previous = () => {
    selectNewImage(selectedIndex, images, false);
    setIsPink(!isPink)
  };

  const next = () => {
    selectNewImage(selectedIndex, images);
    setIsPink(!isPink)
  };

  console.log(loaded);
  return (
    <>
      <DIV isPink={isPink}>
        <CarouselImg
          src={require(`../assets/img/${selectedImage}`)}
          alt="generic"
          className={loaded ? "loaded" : ""}
          onLoad={() => setLoaded(true)}
        />

        <CarouselButtonContainer>
          <CarrierouselButton onClick={previous}> {`<`} </CarrierouselButton>
          <CarrierouselButton onClick={next}> {`>`} </CarrierouselButton>
        </CarouselButtonContainer>
      </DIV>
    </>
  );
};
