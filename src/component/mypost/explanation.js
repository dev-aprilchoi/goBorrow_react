import React, { useRef, useState } from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const ExplanationLi = styled.li`
    display: flex;
    margin-left: 35px;
    padding-bottom: 2rem;
    padding-top: 1.8rem;
    border-bottom: 1px solid rgb(210, 210, 210);
    list-style: none;
`;

const ExplanationDiv = styled.div`
    width: 10.5rem;
    font-size: 18px;
    font-weight: 400;
    color: rgb(25, 25, 25);
    & span {
        color: rgb(216, 12, 24);
    }
    `;

const InputDiv = styled.div`
    flex: 1 1 0%;
    position: relative;
`;

const Textarea = styled.textarea`
    padding-bottom: 1rem;
    width: 96%;
    line-height: 125%;
    border-radius: 2px;
    border: 1px solid rgb(204, 204, 204);
    `;

const TextDiv = styled.div`
    position: absolute;
    top: 0px;
    padding: 1rem;
    font-size: 16px;
    font-weight: 400;
    line-height: 150%;
    color: rgb(153, 153, 153);

    & span { 
    display: inline-block;
    margin-top: 8px;
    font-size: 12px;
    }
    `;

const KakaoIDHelpText = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 0.5rem;
    `;

const KakaoIDQuestionText = styled.span`
    color: rgb(102, 102, 102);
    font-size: 14px;
    font-weight: 200;
    `;

const CharacterCounterDiv = styled.div`
    font-size: 16px;
    color: rgb(25, 25, 25);
    margin-right: 33px;
`;

const ErrMsg = styled.p`
    color: rgb(245, 126, 0);
    font-size: 14px;
    margin-top: 0.5rem;
`

const Explanation = () => {
    const textAreaRef = useRef(null);
    const [textAreaInputValue, setTextAreaInputValue] = useState('');

    const [priceErrMsg, setPriceErrMsg] = useState('');


    const onTextAreaChange = (e) => {
        const value = e.target.value;
        if (value.length < 10) {
            setPriceErrMsg('10자 이상 입력해주세요.');
        } else if (value.length > 2000) {
            setPriceErrMsg('2000자 이내로 입력해주세요.');
        } else {
            setPriceErrMsg('');
        }
        setTextAreaInputValue(value);
    }

    return (
        <>
            <ExplanationLi>
                <ExplanationDiv>
                    설명
                    <span>*</span>
                </ExplanationDiv>
                <InputDiv>
                    <Textarea ref={textAreaRef} onChange={onTextAreaChange} value={textAreaInputValue} rows="6"></Textarea>
                    {
                        textAreaInputValue === '' &&
                        <TextDiv onClick={() => { textAreaRef.current.focus() }}>
                            구매시기, 브랜드/모델명, 제품의 상태 (사용감, 하자 유무) 등을 입력해 주세요.
                            <br />
                            서로가 믿고 거래할 수 있도록, 자세한 정보와 다양한 각도의 상품 사진을 올려주세요.
                            <br />
                            <span>* 안전하고 건전한 거래 환경을 위해 과학기술정보통신부, 한국인터넷진흥원과 번개장터(주)가 함께 합니다.</span>
                        </TextDiv>}
                    <KakaoIDHelpText>
                        <KakaoIDQuestionText> 혹시
                            <Link style={{
                                color: 'rgb(102, 102, 102)',
                                textDecoration: 'underline',
                                marginLeft: '0.3rem',

                            }} to="/mypost/faq">카카오톡 ID</Link>
                            를 적으셨나요?
                        </KakaoIDQuestionText>
                        <CharacterCounterDiv>
                            {textAreaInputValue.length}
                            /2000
                        </CharacterCounterDiv>
                    </KakaoIDHelpText>
                    <div>
                        <ErrMsg>
                            {priceErrMsg}
                        </ErrMsg>
                    </div>
                </InputDiv>
            </ExplanationLi>
        </>
    );
}
export default Explanation;