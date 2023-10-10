import styled from '@emotion/styled';

const GoodsConditionLi = styled.li`
    display: flex;
    margin-left: 35px;
    padding-bottom: 2rem;
    padding-top: 1.8rem;
    border-bottom: 1px solid rgb(210, 210, 210);
    `;

const ConditionDiv = styled.div`
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


}

const GoodsCondition = (props) => {
    return (
        <>
            <GoodsConditionLi>
                <ConditionDiv>
                    상태상품
                    <span>*</span>
                </ConditionDiv>
                <InputDiv>
                    <div
                        style={{
                            flex: '1 1 0%',
                            position: 'relative'
                        }}
                    >
                        <label
                            style={labelStyle}
                        >
                            <input type="radio" name="goodsCondition" value="new" />중고상품
                        </label>
                        <label
                            style={labelStyle}
                        >
                            <input type="radio" name="goodsCondition" value="used" />
                            새상품
                        </label>
                    </div>
                </InputDiv>
            </GoodsConditionLi>
        </>
    );
}




export default GoodsCondition;