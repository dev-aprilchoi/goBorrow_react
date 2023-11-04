import React from 'react';
import styled from '@emotion/styled';

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
const GoodsCondition = (props) => {
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
                                type="text"
                                name={props.inputName}
                                placeholder={props.inputPlaceholder}
                            >
                            </PriceInput>
                            <span
                                style={{
                                    color: 'rgb(153, 153, 153)',
                                }}
                            >{props.span}</span>
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
