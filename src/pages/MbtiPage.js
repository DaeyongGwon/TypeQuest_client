import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Wrapper } from './Main';
import { RiChat1Line, RiUserLine, RiSettingsLine } from 'react-icons/ri';

const MbtiInner = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f9f9f9;
`;

const ButtonWrapper = styled.div`
  margin: 10px;
`;

const Button = styled.button`
  width: 200px;
  height: 60px;
  background-color: #F2F2F2;
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
`;

const IconStyle = {
    marginRight: '10px',
    fontSize: '24px',
};

const Heading = styled.h1`
  font-size: 28px;
  margin-bottom: 30px;
  color: #333333;
  font-weight: bold;
`;

function MbtiPage() {
    return (
        <Wrapper>
            <MbtiInner>
                <Heading>MBTI 테스트</Heading>
                <ButtonWrapper>
                    <Link to="/TravelTest">
                        <Button>
                            <RiChat1Line style={IconStyle} />
                            여행
                        </Button>
                    </Link>
                </ButtonWrapper>
                <ButtonWrapper>
                    <Link to="/TravelTest">
                        <Button>
                            <RiUserLine style={IconStyle} />
                            유튜브
                        </Button>
                    </Link>
                </ButtonWrapper>
                <ButtonWrapper>
                    <Link to="/TravelTest">
                        <Button>
                            <RiSettingsLine style={IconStyle} />
                            랜덤
                        </Button>
                    </Link>
                </ButtonWrapper>
            </MbtiInner>
        </Wrapper>
    );
}

export default MbtiPage;
