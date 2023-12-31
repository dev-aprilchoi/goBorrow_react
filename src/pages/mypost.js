import styled from '@emotion/styled';
import Layout from "../component/common/layout";
import { Link } from 'react-router-dom';
import MyPostFooter from "../component/mypost/mypostfooter";
import StyledRadio from '../component/mypost/styledradio';
import GoodsCategory from '../component/mypost/goodscategory';
import Explanation from '../component/mypost/explanation';
import TagSection from '../component/mypost/tag';
import { useState } from 'react';


const PostsDiv = styled.div`
    font-size: 16px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;

const HeadDiv = styled.div`
    height: 4rem;
    border-bottom: 1px solid rgb(225, 225, 225);
    display: flex;
    justify-content: center;
`;

const NavDiv = styled.nav`
    width: 1024px;
    display: flex;
    height: 100%;
    font-size: 15px;
`;

const Firstheaddiv = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    margin-right: 2rem;
    margin-left: -0.5rem;

    &::after {
    content: "";
    width: 1px;
    height: 14px;
    border-right: 1px solid rgb(210, 210, 210);
    margin-left: 2rem;
    }
`;

const Secondheaddiv = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    margin-right: 2rem;

    &::after {
    content: "";
    width: 1px;
    height: 14px;
    border-right: 1px solid rgb(210, 210, 210);
    margin-left: 2rem;
    }   
`;

const BodyDiv = styled.div`
    font-size: 16px;
    position: relative;
`;

const Main = styled.main`
    display: block;
    width: 1024px;
    margin: auto;

    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    `;

const InfoHeader = styled.h2`
    height: 100px;
    color: rgb(25, 25, 25);
    font-size: 26px;
    font-weight: 400;
    display: flex;
    align-items: center;
    border-bottom: 2px solid rgb(25, 25, 25);

    & span {
    color: rgb(216, 12, 24);
    font-size: 1rem;
    margin-left: 2rem;
    }
`;

const UlTag = styled.ul`
    padding-top: 0.5rem;
    list-style: none;
`;

const GoodsImgLiTag = styled.li`
    width: 100%;
    display: flex;
    padding: 2rem 0px;
    border-bottom: 1px solid rgb(225, 225, 225);
`;

const GoodsImg = styled.div`
    width: 10.5rem;
    font-size: 18px;
    font-weight: 400;
    color: rgb(25, 25, 25);

    & span {
    color: rgb(216, 12, 24);
    }

    & small {
    color: rgb(178, 178, 178);
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    margin-left: 0.25rem;
    }
`;

const ImgPostDiv = styled.div`
    flex: 1 1 0%;
    position: relative;
`;

const ImgUlTag = styled.ul`
    display: flex;
    width: 856px;
    flex-wrap: wrap;
    overflow-x: hidden;
    list-style: none;
`;

const ImgLiTag = styled.li`
    margin-bottom: 0px;
    width: 202px;
    height: 202px;
    position: relative;
    border-radius: 2px;
    border: 1px solid rgb(204, 204, 204);
    background: rgb(250, 250, 250);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: rgb(102, 102, 102);
    font-size: 1rem;
    font-weight: 400;
    margin-right: 1rem;
    margin-bottom: 1rem;

    ::before {
    content: "";
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 2rem;
    height: 2rem;
    background-image: url(https://i.pinimg.com/1200x/64/53/c8/6453c8226817e6ab85a6321aeee19e80.jpg);
    margin-bottom: 1rem;
    }


    & input {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    left: 0px;
    opacity: 0;
    cursor: pointer;
    font-size: 0px;
    }
`;

const Explaindiv = styled.div`
    margin-top: 20px;
    margin-left: 34px;
    color: rgb(102, 102, 102);
    line-height: 180%;
    font-size: 14px;
    font-weight: 400;
`;

const GoodsNameLiTag = styled.li`
    width: 100%;
    display: flex;
    padding: 2rem 0px;
    border-bottom: 1px solid rgb(210, 210, 210);
`;

const GoodsNameDiv = styled.div`
    width: 7.8rem;
    font-size: 18px;
    font-weight: 400;
    color: rgb(25, 25, 25);
    padding-top: 14px;

    & span {
    color: rgb(216, 12, 24);
    }
`;

const InputDiv = styled.div`
    flex: 1 1 0%;
    position: relative;
`;

const InputInsideDiv = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
`;

const GoodsInputDiv = styled.div`
    flex: 1 1 0%;
    position: relative;
    display: flex;
    align-items: center;
`;

const GoodsInput = styled.input`
    font-size: 16px;
    font-weight: 400;
    line-height: 125%;
    color: rgb(25, 25, 25);
    border-radius: 2px;
    border: 1px solid rgb(204, 204, 204);
    appearance: none;
    height: 3rem;
    padding: 0px 1rem;
    width: 100%;
    overflow: visible;
`;

const linkStyle = {
    position: 'absolute',
    right: '1rem',
    fontSize: '1rem',
    color: 'rgb(153, 153, 153)',
    fontWeight: 400,
    lineHeight: '125%',
    textDecoration: 'underline',
};
const ErrMsg = styled.p`
    color: rgb(245, 126, 0);
    font-size: 14px;
    margin-top: 0.5rem;

`

const MyPostPage = () => {
    const [img, setImg] = useState(null);
    const [goodsName, setGoodsName] = useState('');
    const [goodsCategory, setGoodsCategory] = useState('');
    const [priceOption, setPriceOption] = useState('');
    const [explanation, setExplanation] = useState('');
    const [tag, setTag] = useState('');
    const [quantity, setQuantity] = useState('');

    const [goodsErrMsg, setGoodsErrMsg] = useState('');


    const GoodsNameInputHandler = (e) => {
        setGoodsName(e.target.value);

        const goodsNameInput = e.target.value;
        if (goodsNameInput.length === 1) {
            setGoodsErrMsg('상품명을 입력해 주세요.');
        } else if (goodsNameInput.length >= 40) {
            setGoodsName(goodsNameInput);
            setGoodsErrMsg('40자 이내로 입력해 주세요.');
        } else {
            setGoodsErrMsg('');
        }

    }


    // const GoodsQuantityInputHandler = (e) => {
    //     const quantity = e.target.value;
    //     console.log(quantity);
        // if (isNaN(quantity)) {
        //     alert('가격을 입력해 주세요.');
        //     return;
        // } else if (quantity.length > 4) {
        //     alert('5자 이내로 입력해 주세요.');
        // } else {
        //     setQuantity(quantity);
        // }
    // }

    return (
        <Layout>
            <PostsDiv>
                <HeadDiv>
                    <NavDiv>
                        <Firstheaddiv>상품등록</Firstheaddiv>
                        <Secondheaddiv>상품관리</Secondheaddiv>
                        <Secondheaddiv>구매/판매내역</Secondheaddiv>
                    </NavDiv>
                </HeadDiv>
                <BodyDiv>
                    <Main>
                        <section>
                            <InfoHeader>
                                기본정보
                                <span>*필수항목</span>
                            </InfoHeader>
                            <UlTag>
                                <GoodsImgLiTag>
                                    <GoodsImg>상품이미지
                                        <span>*</span>
                                        <small>
                                            (0/12)
                                        </small>
                                    </GoodsImg>
                                    <ImgPostDiv>
                                        <ImgUlTag>
                                            <ImgLiTag>
                                                이미지 등록
                                                <input />
                                            </ImgLiTag>
                                        </ImgUlTag>
                                        <Explaindiv>
                                            상품 이미지는 PC에서는 1:1, 모바일에서는 1:1.23 비율로 보여져요.
                                        </Explaindiv>
                                    </ImgPostDiv>
                                </GoodsImgLiTag>
                                <GoodsNameLiTag>
                                    <GoodsNameDiv>상품명
                                        <span>*</span>
                                    </GoodsNameDiv>
                                    <InputDiv>
                                        <InputInsideDiv>
                                            <GoodsInputDiv>
                                                <GoodsInput
                                                    type="text"
                                                    onChange={GoodsNameInputHandler} placeholder="상품명을 입력해 주세요."
                                                    maxLength={40}
                                                />
                                                <Link to="/prohibitelists"
                                                    style={linkStyle}
                                                >거래금지 품목 보기</Link>
                                            </GoodsInputDiv>
                                            <div
                                                style={{
                                                    fontSize: '1rem',
                                                    textAlign: 'right',
                                                    marginLeft: '1.5rem',
                                                }}
                                            >
                                                {goodsName.length}/40
                                            </div>
                                        </InputInsideDiv>
                                        <div>
                                            <ErrMsg>
                                                {goodsErrMsg}
                                            </ErrMsg>
                                        </div>
                                    </InputDiv>
                                </GoodsNameLiTag>
                            </UlTag>
                            <GoodsCategory />
                            <StyledRadio
                                title="상품상태"
                                optionList={['중고상품', '새상품']}
                                name="goodsCondition"
                                showRadio={true}
                            />
                            <StyledRadio
                                title="교환"
                                optionList={['불가', '가능']}
                                name="exchangeOption"
                                showRadio={true}
                            />
                            <StyledRadio
                                title="가격"
                                optionList={['배송비포함', '배송비별도']}
                                name="priceOption"
                                showInput={true}
                                inputPlaceholder="가격만 입력해 주세요."
                                span="원"
                                showRadio={true}
                            // onChange={GoodsPriceInputHandler}

                            />
                            <Explanation />
                            <TagSection />
                            <StyledRadio
                                title="수량"
                                name="quantity"
                                showInput={true}
                                inputName="quantity"
                                inputPlaceholder="수량을 입력해 주세요."
                                span="개"
                                showRadio={false}
                            />
                        </section>
                        {/* <section>
                            빠른판매부터
                        </section> */}
                    </Main>
                </BodyDiv>
                <MyPostFooter />
            </PostsDiv>
        </Layout>
    );
}


export default MyPostPage;