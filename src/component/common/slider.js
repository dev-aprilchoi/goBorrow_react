import React from 'react';
import { useState, useRef, useEffect } from 'react';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import styled from '@emotion/styled';

let images = [
  '/image1.jpg',
  '/image2.jpg',
  '/image3.png',
  '/image4.jpg',
  '/image5.jpg',
  '/image6.jpg',
  '/image7.jpg',
  '/image8.jpg',
  '/image9.jpg',
  '/image10.jpg',
  '/image11.png'
];

const TotalSlides = 11; // 전체 슬라이드 개수(총 11개. 배열로 계산)

export default function SliderComponent() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);

//   useEffect(()=>{
//     setInterval(()=>{
//         if(currentSlide === images.length-1){
//             setCurrentSlide(0);
//             return;
//         }
//         setCurrentSlide(currentSlide + 1);

//     }, 2000)
//   } ,[currentSlide]);
  // Forward 버튼 클릭 시
  const forwardSlide = () =>{
    if(currentSlide >= images.length - 1) {
      // 더 이상 넘어갈 슬라이드가 없으면
      setCurrentSlide(0); // 1번째 사진으로 넘어갑니다
      // return; // 클릭이 작동하지 않습니다
    }else {
      setCurrentSlide(currentSlide + 1); 
    }
  };
  // Back 버튼 클릭 시
  const backSlide = () =>{
    if(currentSlide === 0) {
      setCurrentSlide(images.length-1); // 마지막 사진으로 넘어갑니다
      // return; // 클릭이 작동하지 않습니다
    }else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  useEffect(() => {
    if(slideRef.current === null) return;
    slideRef.current.style.transition = 'all 0.5s ease-in-out';
    slideRef.current.style.transform = `translateX(-${currentSlide}00%)`; // 백틱을 사용하여 슬라이드로 이동하는 에니메이션을 만듭니다
  }, [currentSlide]);

  
 
  return (

    <SliderContainer>
        <ArrowBtn onClick={backSlide} left={true} ><ArrowBackIosNewRoundedIcon color="disabled"/></ArrowBtn>
        <ArrowBtn onClick={forwardSlide} left={false} ><ArrowForwardIosRoundedIcon color="disabled"/></ArrowBtn>
        <BannerWrap  ref={slideRef}>
        {images.map(
            (e)=><BannerImg src ={e} alt="banner"/>
        )}
        </BannerWrap>
    </SliderContainer>
  );
}


const BannerImg = styled.img`
    width: 100%;
`;



const BannerWrap = styled.div`
    display: flex;
    /* border: 5px solid blue; */

`;

const ArrowBtn =  styled.div`
    z-index: 1;
    cursor: pointer;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    border-radius: 20px;   
    ${(props) => props.left?'left:10px':'right:10px' }  
`;

const SliderContainer = styled.div`
  /* border:5px solid red; */
  position: relative;
  overflow: hidden;
`;

