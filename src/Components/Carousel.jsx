import React, { useEffect } from "react";
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


export const Carousel = (props) => {

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(props.images[0]);
  const [loaded, setLoaded] = useState(false);
  const [isPink, setIsPink] = useState(false);


  useEffect(() => {
    if (props.autoPlay || !props.showButtons) {
      const interval = setInterval(() => {
        selectNewImage(selectedIndex, props.images);
        setIsPink(!isPink);
      }, 2000);
      return () => clearInterval(interval);
    }
  });

  const selectNewImage = (index, image, next = true) => {
    setLoaded(false);
    setTimeout(() => {
      const condition = next
        ? selectedIndex < props.images.length - 1
        : selectedIndex > 0;
      const nextIndex = next
        ? condition
          ? selectedIndex + 1
          : 0
        : condition
        ? selectedIndex - 1
        : props.images.length - 1;
      setSelectedImage(props.images[nextIndex]);
      setSelectedIndex(nextIndex);
    }, 500);
  };
  const previous = () => {
    selectNewImage(selectedIndex,props.images, false);
    setIsPink(!isPink)
  };

  const next = () => {
    selectNewImage(selectedIndex,props.images);
    setIsPink(!isPink)
  };

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
