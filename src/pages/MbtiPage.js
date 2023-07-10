import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { Wrapper } from './Main';
import { RiChat1Line, RiUserLine, RiSettingsLine } from 'react-icons/ri';
import TypingEffect from '../components/TypingEffect';
import MainHeader from './Header';
import Footer from './Footer';
import MbtiSrc from '../assets/colorimg_2.png';

const MbtiInner = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 90vh;
  background-color: rgb(82, 88, 136);

  /* 반응형 스타일 추가 */
  ${props =>
        props.responsive &&
        css`
      @media (max-width: 768px) {
        height: 80vh;
      }
    `}
`;

const ButtonWrapper = styled.div`
  margin-bottom: 40px;

  /* 반응형 스타일 추가 */
  ${props =>
        props.responsive &&
        css`
      @media (max-width: 768px) {
        margin-bottom: 20px;
      }
    `}
`;

const Button = styled.button`
  width: 200px;
  height: 60px;
  background-color: #f2f2f2;
  color: #000000;
  border: none;
  border-radius: 10px;
  font-size: 18px;
  font-weight: bold;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #e6e6e6;
    cursor: pointer;
  }

  /* 반응형 스타일 추가 */
  ${props =>
        props.responsive &&
        css`
      @media (max-width: 768px) {
        width: 150px;
        height: 50px;
        font-size: 16px;
      }
    `}
`;

const IconStyle = {
    marginRight: '10px',
    fontSize: '24px',
};

const Heading = styled.h1`
  font-size: 48px;
  margin-bottom: -20px;
  color: #333333;
  font-weight: bold;

  /* 반응형 스타일 추가 */
  ${props =>
        props.responsive &&
        css`
      @media (max-width: 768px) {
        font-size: 36px;
        margin-bottom: 0;
      }
    `}
`;

const Image = styled.img`
  width: 400px;
  height: 400px;
  margin-bottom: 20px;

  /* 반응형 스타일 추가 */
  ${props =>
        props.responsive &&
        css`
      @media (max-width: 768px) {
        width: 330px;
        height: 300px;
      }
    `}
`;

function MbtiPage() {
    return (
        <>
            <MainHeader></MainHeader>
            <Wrapper>
                <MbtiInner responsive>
                    <Heading responsive>
                        <TypingEffect text="안녕하세요 MBTI TEST PAGE입니다" speed={60} fontSize="5vw" />
                    </Heading>
                    <Image src={MbtiSrc} responsive />
                    <ButtonWrapper responsive>
                        <Link to="/TravelTest">
                            <Button responsive>
                                <RiChat1Line style={IconStyle} />
                                여행
                            </Button>
                        </Link>
                    </ButtonWrapper>
                    <ButtonWrapper responsive>
                        <Link to="/YoutubeTest">
                            <Button responsive>
                                <RiUserLine style={IconStyle} />
                                유튜브
                            </Button>
                        </Link>
                    </ButtonWrapper>
                    <ButtonWrapper responsive>
                        <Link to="/JobTest">
                            <Button responsive>
                                <RiSettingsLine style={IconStyle} />
                                직업
                            </Button>
                        </Link>
                    </ButtonWrapper>
                </MbtiInner>
            </Wrapper>
            {/* <Footer /> */}
        </>
    );
}

export default MbtiPage;
