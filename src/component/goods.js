import styled from '@emotion/styled';

const HeadOne = styled.h1`
  margin-bottom: 10px;
  font-family: 'Courier New', Courier, monospace;
`;

const Item = styled.div`
  border: 1px solid #ccc;
  width: calc(20% - 10px);
  //height: 250px;    
  margin-bottom: 5px;
  overflow: hidden;
  margin-right: 8px;
  margin-bottom: 10px;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  `;

const ItemWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  `;

const ItemImg = styled.div`
  position: relative;
  height: 150px;
  overflow: hidden;
  width : 100%;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
   `;

const NamePriceDiv = styled.div`
  padding: 10px 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
    `;

const ItemName = styled.div`
  font-size: 15px;
  padding-bottom: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  font-family: 'Courier New', Courier, monospace;
`;

const PriceDiv = styled.div`
  font-size: 15px;
  display: flex;
  justify-content: space-between;
  font-family: 'Courier New', Courier, monospace;
`;

const ItemPrice = styled.div`

`;

const ItemTimestamp = styled.div`
  font-size: 14px;
  color: #999;
  font-family: 'Courier New', Courier, monospace;
  `;

const goodsList = [
    {
        img: 'goods/goods1.jpeg',
        description: '소니 카메라 정품',
        price: '50,000원',
        time: '2시간전',
    },
    {
        img: 'goods/goods2.jpeg',
        description: '체크남방',
        price: '29,000원',
        time: '5시간전',
    },
    {
        img: 'goods/goods3.jpeg',
        description: '소라색 여자니트',
        price: '20,000원',
        time: '8시간전',
    },
    {
        img: 'goods/goods4.jpeg',
        description: '반팔 티셔츠',
        price: '19,000원',
        time: '7시간전',
    },
    {
        img: 'goods/goods5.jpeg',
        description: '남자 반팔티',
        price: '21,000원',
        time: '1시간전',
    },
    {
        img: 'goods/goods6.jpeg',
        description: '귀여운 장난감',
        price: '10,000원',
        time: '2시간전',
    },
    {
        img: 'goods/goods7.jpeg',
        description: '동물 여자옷',
        price: '23,000원',
        time: '2시간전',
    },
    {
        img: 'goods/goods8.jpeg',
        description: '여자바지 사이즈 26',
        price: '29,000원',
        time: '2시간전',
    },
    {
        img: 'goods/goods9.jpeg',
        description: '아동한복',
        price: '39,000원',
        time: '2시간전',
    },
    {
        img: 'goods/goods10.jpeg',
        description: '동물 파란옷',
        price: '18,000원',
        time: '20시간전',
    },
    {
        img: 'goods/goods11.jpeg',
        description: '반스신발 230',
        price: '20,000원',
        time: '2시간전',
    },
    {
        img: 'goods/goods12.jpeg',
        description: '컨버스 신발 280',
        price: '27,000원',
        time: '2시간전',
    },
    {
        img: 'goods/goods13.jpeg',
        description: '커플가방',
        price: '30,000원',
        time: '2시간전',
    },
    {
        img: 'goods/goods14.jpeg',
        description: '노란색 유치원가방',
        price: '12,000원',
        time: '2시간전',
    },
    {
        img: 'goods/goods15.jpeg',
        description: '뽀로로 가방',
        price: '11,000원',
        time: '23시간전',
    },
]

const Goods = () => {
    return (
        <>
            <HeadOne>오늘의 상품 추천</HeadOne>
            <ItemWrap>
                {goodsList.map((item, index) => (
                    <Item key={index}>
                        <ItemImg src={item.img}>
                        </ItemImg>
                        <NamePriceDiv>
                            <ItemName>
                                {item.description}
                            </ItemName>
                            <PriceDiv>
                                <ItemPrice>{item.price}</ItemPrice>
                                <ItemTimestamp>{item.time}</ItemTimestamp>
                            </PriceDiv>
                        </NamePriceDiv>
                    </Item>
                ))}
            </ItemWrap>
        </>
    );
}

export default Goods;