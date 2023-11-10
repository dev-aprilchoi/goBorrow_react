import React from 'react';
import styled from '@emotion/styled';
import { useState } from 'react';

const StyledRadioLi = styled.li`
    display: flex;
    margin-left: 35px;
    padding-bottom: 2rem;
    padding-top: 1.8rem;
    border-bottom: 1px solid rgb(210, 210, 210);
`;

const StyledRadioDiv = styled.div`
    width: 10.5rem;
    font-size: 18px;
    color: rgb(25, 25, 25);

    & span {
        color: rgb(216, 12, 24);
    }
`;

const InputDiv = styled.div`
    flex: 1 1 0%;
    position: relative;
`;

const labelStyle = {
    marginRight: '2rem',
    cursor: 'pointer',
};

const PriceInput = styled.input`
    padding: 0.5px 0.5rem;
    margin-bottom: 1rem;
    height: 3rem;
    border: 1px solid rgb(204, 204, 204);
    appearance: none;
    font-size: 16px;
    font-weight: 400;
    line-height: 125%;
    box-sizing: border-box;
    width: 300px;
    color: rgb(153, 153, 153);
    border-radius: 2px;
`;

const ErrMsg = styled.p`
    color: rgb(245, 126, 0);
    font-size: 14px;
    margin-top: -0.5rem;
`
const GoodsCondition = (props) => {
    const [priceErrMsg, setPriceErrMsg] = useState('');
    const [price, setPrice] = useState('');

    const GoodsPriceInputHandler = (e) => {
        const rawPrice = e.target.value;
        const numericPrice = rawPrice.replace(/\D/g, '');

        if (isNaN(numericPrice)) {
            setPriceErrMsg('숫자만 입력해 주세요.');
            setPrice('');
        } else {
            const formattedPrice = numericPrice.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
            setPriceErrMsg('');
            setPrice(formattedPrice);
        }
    }

    return (
        <>
            <StyledRadioLi>
                <StyledRadioDiv>
                    {props.title}
                    <span>*</span>
                </StyledRadioDiv>
                <InputDiv>
                    {props.showInput && (
                        <div>
                            <PriceInput
                                value={price}
                                type="text"
                                maxLength={props.name === 'quantity' ? 3 : 11}
                                name={props.inputName}
                                placeholder={props.inputPlaceholder}
                                onChange={props.onChange
                                    ? props.onChange
                                    : GoodsPriceInputHandler
                                }
                            >
                            </PriceInput>
                            <span
                                style={{
                                    color: 'rgb(153, 153, 153)',
                                }}
                            >{props.span}</span>
                            <div>
                                <ErrMsg>
                                    {priceErrMsg}
                                </ErrMsg>
                            </div>
                        </div>

                    )}

                    {props.showRadio && (
                        <div
                            style={{
                                flex: '1 1 0%',
                                position: 'relative',
                            }}
                        >
                            {props.optionList.map((e, idx) => (
                                <label key={e}
                                    style={labelStyle}>
                                    <input
                                        defaultChecked={idx === 0}
                                        type="radio"
                                        name={props.name}
                                        value={e} />
                                    {e}
                                </label>
                            ))}
                        </div>
                    )}
                </InputDiv>
            </StyledRadioLi>
        </>
    );
};

export default GoodsCondition;
