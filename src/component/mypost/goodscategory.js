import styled from '@emotion/styled';

const CategoryLiTag = styled.li`
    display: flex;
    padding: 2rem 0px;
    margin-left: 35px;
    border-bottom: 1px solid rgb(210, 210, 210);
`;

const CategoryDiv = styled.div`
    width: 10.5rem;
    font-size: 18px;
    font-weight: 400;
    color: rgb(25, 25, 25);
    padding-top: 8px;

    & span {
    color: rgb(216, 12, 24);
    }
`;

const CardDiv = styled.div`
    flex: 1 1 0%;
    position: relative;
`;

const CategoryBoxDiv = styled.div`
    display: flex;
    height: 19rem;
    overflow: hidden;
    border: 1px solid rgb(204, 204, 204);
 `;

const ListWrapperDiv = styled.div`
    width: 284px;
    display: flex;
    overflow-y: auto;
    font-size: 16px;
    font-weight: 400;
 `;

const categoryLists = {
    display: 'flex',
    width: '100%',
    height: '40px',
    alignItems: 'center',
}

const CategoryUlTag = styled.ul`
    padding: 0.5rem 0px;
`;

const CategoryList = [
    {
        id: 1,
        name: '여성의류',
    },
    {
        id: 2,
        name: '남성의류',
    },
    {
        id: 3,
        name: '가방/지갑',
    },
    {
        id: 4,
        name: '시계',
    },
    {
        id: 5,
        name: '쥬얼리',
    },
    {
        id: 6,
        name: '패션 액세서리',
    },
    {
        id: 7,
        name: '디지털',
    },
    {
        id: 8,
        name: '가전제품',
    },
    {
        id: 9,
        name: '스포츠/레저',
    },
    {
        id: 10,
        name: '차량/오토바이',
    }
]

const categoryButtons = {
    padding: '0px 1.5rem',
    backgroundColor: 'transparent',
    cursor: 'pointer',
    border: 'none',
}

const SecondCategoryDiv = styled.div`
    width: 284px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow-y: auto;
    font-size: 16px;
    font-weight: 400;
    color: rgb(153, 153, 153);
    border-left: 1px solid rgb(204, 204, 204);
`;

const ThirdCategoryDiv = styled.div`
    width: 284px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow-y: auto;
    font-size: 16px;
    font-weight: 400;
    color: rgb(153, 153, 153);
    border-left: 1px solid rgb(204, 204, 204);
`;

const ChooseDiv = styled.div`
    margin-top: 1.5rem;
    `;

const GoodsCategory = () => {
    return (
        <CategoryLiTag>
            <CategoryDiv>카테고리
                <span>*</span>
            </CategoryDiv>
            <CardDiv>
                <CategoryBoxDiv>
                    <ListWrapperDiv>
                        <CategoryUlTag>
                            {CategoryList.map((category) => (
                                <li
                                    style={categoryLists}
                                    key={category.id}
                                >
                                    <button
                                        style={categoryButtons}
                                    >{category.name}</button>
                                </li>
                            ))}
                        </CategoryUlTag>
                    </ListWrapperDiv>
                    <SecondCategoryDiv>중분류 선택</SecondCategoryDiv>
                    <ThirdCategoryDiv>소분류 선택</ThirdCategoryDiv>
                </CategoryBoxDiv>
                <ChooseDiv>
                    <h3
                        style={{
                            fontSize: '16px', fontWeight: '400', color: 'rgb(216, 12, 24)'
                        }}
                    > 선택한 카테고리:
                    </h3>
                </ChooseDiv>
            </CardDiv>
        </CategoryLiTag>
    );
}

export default GoodsCategory;