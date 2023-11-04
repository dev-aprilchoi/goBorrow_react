import styled from '@emotion/styled';
import { useState } from 'react';

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
    // borderLeft: '1px solid rgb(204, 204, 204)' // 
}

const CategoryUlTag = styled.ul`
    padding: 0.5rem 0px;
`;

const FirstCategoryList = [
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
        name: '신발',
    },
    {
        id: 4,
        name: '가방/지갑',
    },
    {
        id: 5,
        name: '시계',
    },
    {
        id: 6,
        name: '쥬얼리',
    },
    {
        id: 7,
        name: '패션 액세서리',
    },
    {
        id: 8,
        name: '디지털',
    },
    {
        id: 9,
        name: '가전제품',
    },
    {
        id: 10,
        name: '스포츠/레저',
    },
    {
        id: 11,
        name: '차량/오토바이',
    },
    {
        id: 12,
        name: '스타굿즈',
    },
    {
        id: 13,
        name: '키덜트',
    },
    {
        id: 14,
        name: '예술/희귀/수집품',
    },
    {
        id: 15,
        name: '음반/악기',
    },
    {
        id: 16,
        name: '도서/티켓/문구',
    },
    {
        id: 17,
        name: '뷰티/미용',
    },
    {
        id: 18,
        name: '가구/인테리어',
    },
    {
        id: 19,
        name: '생활/주방용품',
    },
    {
        id: 20,
        name: '공구/산업용품',
    },
    {
        id: 21,
        name: '식품',
    },
    {
        id: 22,
        name: '유아동/출산',
    },
    {
        id: 23,
        name: '반려동물용품',
    },
    {
        id: 24,
        name: '기타',
    },
    {
        id: 25,
        name: '지역 서비스',
    },
    {
        id: 26,
        name: '원룸/함께살아요',
    },
];


const firstAndSecondLevelCategories = [
    {
        firstCategoryId: 1,
        secondCategory:
            [
                { id: 1, name: '아우터', },
                { id: 2, name: '상의', },
                { id: 3, name: '바지', },
                { id: 4, name: '치마', },
                { id: 5, name: '원피스', },
                { id: 6, name: '점프수트', },
                { id: 7, name: '상의', },
                { id: 8, name: '셋업/세트', },
                { id: 9, name: '언더웨어/홈웨어', },
                { id: 10, name: '테마/이벤트', },]
    },
    {
        firstCategoryId: 2,
        secondCategory:
            [
                { id: 1, name: '아우터', },
                { id: 2, name: '상의', },
                { id: 3, name: '바지', },
                { id: 4, name: '점프수트', },
                { id: 5, name: '셋업/세트', },
                { id: 6, name: '언더웨어/홈웨어', },
                { id: 7, name: '테마/이벤트', }
            ]
    },
    {
        firstCategoryId: 3,
        secondCategory:
            [
                { id: 1, name: '스니커즈', },
                { id: 2, name: '남성화', },
                { id: 3, name: '여성화', },
                { id: 4, name: '스포츠화', }
            ]
    },
    {
        firstCategoryId: 4,
        secondCategory:
            [
                { id: 1, name: '여성가방', },
                { id: 2, name: '남성가방', },
                { id: 3, name: '여행용 가방', },
                { id: 4, name: '여성지갑', },
                { id: 5, name: '남성지갑', },
                { id: 6, name: '기타 지갑', }
            ]
    },
    {
        firstCategoryId: 5,
        secondCategory:
            [
                { id: 1, name: '남성시계', },
                { id: 2, name: '여성시계', },
                { id: 3, name: '시계용품', }
            ]
    },
    {
        firstCategoryId: 6,
        secondCategory:
            [
                { id: 1, name: '귀걸이', },
                { id: 2, name: '목걸이', },
                { id: 3, name: '팔찌', },
                { id: 4, name: '발찌', },
                { id: 5, name: '반지', },
                { id: 6, name: '쥬얼리 세트', },
                { id: 7, name: '기타 쥬얼리', }
            ]
    },
    {
        firstCategoryId: 7,
        secondCategory:
            [
                { id: 1, name: '모자', },
                { id: 2, name: '안경/선글라스', },
                { id: 3, name: '목도리/장갑', },
                { id: 4, name: '스카프/넥타이', },
                { id: 5, name: '벨트', },
                { id: 6, name: '양말/스타킹', },
                { id: 7, name: '우산/양산', },
                { id: 8, name: '키링/키케이스', },
                { id: 9, name: '기타 액세서리', },

            ]
    },
    {
        firstCategoryId: 8,
        secondCategory:
            [
                { id: 1, name: '태블릿', },
                { id: 2, name: '웨어러블(워치/밴드)', },
                { id: 3, name: '오디오/영상/관련기기', },
                { id: 4, name: 'PC/노트북', },
                { id: 5, name: '게임/타이틀', },
                { id: 6, name: '카메라/DSLR', },
                { id: 7, name: 'PC부품/저장장치', }
            ]
    },
    {
        firstCategoryId: 9,
        secondCategory:
            [
                { id: 1, name: '주방가전', },
                { id: 2, name: '미용가전', },
                { id: 3, name: '냉장고', },
                { id: 4, name: '에어컨', },
                { id: 5, name: '세탁기/건조기', },
                { id: 6, name: 'TV', },
                { id: 7, name: '사무기기(복사기/팩스 등)', },
                { id: 8, name: '기타 가전제품', }
            ]
    },
    {
        firstCategoryId: 10,
        secondCategory:
            [
                { id: 1, name: '골프', },
                { id: 2, name: '캠핑', },
                { id: 3, name: '낚시', },
                { id: 4, name: '축구', },
                { id: 5, name: '야구', },
                { id: 6, name: '농구', },
                { id: 7, name: '자전거', },
                { id: 8, name: '등산/클라이밍', },
                { id: 9, name: '헬스/요가/필라테스', },
                { id: 10, name: '인라인/스케이트보드', },
                { id: 11, name: '전동킥보드/전동휠', },
                { id: 12, name: '테니스', },
                { id: 13, name: '배드민턴', },
                { id: 14, name: '볼링', },
                { id: 15, name: '탁구', },
                { id: 16, name: '당구', },
                { id: 17, name: '겨울 스포츠', },
                { id: 18, name: '수상 스포츠', },
                { id: 19, name: '격투/무술', },
                { id: 20, name: '기타 스포츠', },
            ]
    },
    {
        firstCategoryId: 11,
        secondCategory:
            [
                { id: 1, name: '국산차', },
                { id: 2, name: '수입차', },
                { id: 3, name: '차량 용품/부품', },
                { id: 4, name: '오토바이/스쿠터', },
                { id: 5, name: '오토바이 용품/부품', },
                { id: 6, name: '산업용 차량/장비', },
            ]
    },
    {
        firstCategoryId: 12,
        secondCategory:
            [
                { id: 1, name: '보이그룹', },
                { id: 2, name: '걸그룹', },
                { id: 3, name: '솔로(남)', },
                { id: 4, name: '솔로(여)', },
                { id: 5, name: '배우(남)', },
                { id: 6, name: '배우(여)', },
                { id: 6, name: '방송/예능/캐릭터', },
            ]
    },
    {
        firstCategoryId: 13,
        secondCategory:
            [
                { id: 1, name: '피규어/인형', },
                { id: 2, name: '레고/블럭', },
                { id: 3, name: '프라모델', },
                { id: 4, name: 'RC/드론', },
                { id: 5, name: '보드게임', },
                { id: 6, name: '서바이벌건', },
                { id: 6, name: '기타(키덜트)', },
            ]
    },

];

const secondAndThirdLevelCategories = [
    {
        secondCategoryId: 1,
        thirdCategory:
            [
                { id: 1, name: '패딩', },
                { id: 2, name: '점퍼', },
                { id: 3, name: '코트', },
                { id: 4, name: '자켓', },
                { id: 5, name: '가디건', },
                { id: 6, name: '조끼/베스트', },
            ]
    },
    {
        secondCategoryId: 2,
        thirdCategory:
            [
                { id: 1, name: '니트/스웨터', },
                { id: 2, name: '후드티/후드집업', },
                { id: 3, name: '맨투맨', },
                { id: 4, name: '블라우스', },
                { id: 5, name: '셔츠', },
                { id: 6, name: '반팔 티셔츠', },
                { id: 7, name: '긴팔 티셔츠', },
                { id: 7, name: '민소매 티셔츠', }

            ]
    },
    {
        secondCategoryId: 3,
        thirdCategory:
            [
                { id: 1, name: '데님/청바지', },
                { id: 2, name: '슬랙스', },
                { id: 3, name: '면바지', },
                { id: 4, name: '반바지', },
                { id: 5, name: '트레이닝/조거팬츠', },
                { id: 6, name: '레깅스', },
                { id: 7, name: '기타 바지', }

            ]
    },
    {
        secondCategoryId: 4,
        thirdCategory:
            [
                { id: 1, name: '롱 스커트', },
                { id: 2, name: '미디 스커트', },
                { id: 3, name: '미니 스커트', }

            ]
    },
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
    overflow-y: auto;
    font-size: 16px;
    font-weight: 400;
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
    const [userClicked, setUserClicked] = useState(false);
    const [selectedFirstCategory, setSelectedFirstCategory] = useState(null);
    const [secondCategoryList, setSecondCategoryList] = useState(null);
    const [selectedSecondCategory, setSelectedSecondCategory] = useState(null);
    const [thirdCategoryList, setThirdCategoryList] = useState(null);

    const handleFirstCategoryClick = (category) => {
        setSelectedFirstCategory(category);
        setUserClicked(true);
        setSecondCategoryList(firstAndSecondLevelCategories.filter((e) => e.firstCategoryId === category.id)[0].secondCategory);
    };

    const handleSecondCategoryClick = (category) => {
        // console.log(category);
        console.log(selectedSecondCategory);
        setSelectedSecondCategory(category);
        setUserClicked(true);
        setThirdCategoryList(secondAndThirdLevelCategories.filter((e) => e.secondCategoryId === category.id)[0].thirdCategory);
        console.log(thirdCategoryList);
    }

    return (
        <CategoryLiTag>
            <CategoryDiv>카테고리
                <span>*</span>
            </CategoryDiv>
            <CardDiv>
                <CategoryBoxDiv>
                    <ListWrapperDiv>
                        <CategoryUlTag>
                            {FirstCategoryList.map((category) => (
                                <li
                                    style={categoryLists}
                                    key={category.id}
                                    onClick={() => handleFirstCategoryClick(category)}
                                >
                                    <input
                                        style={categoryButtons}
                                        type="button"
                                        value={category.name}
                                    />
                                </li>
                            ))}
                        </CategoryUlTag>
                    </ListWrapperDiv>
                    <SecondCategoryDiv>
                        {userClicked && selectedFirstCategory ? (
                            <CategoryUlTag>
                                {secondCategoryList.map((category, index) => (
                                    <li
                                        style={categoryLists}
                                        key={index}
                                        onClick={() => handleSecondCategoryClick(category)}
                                    >
                                        <input
                                            style={categoryButtons}
                                            type="button"
                                            value={category.name}
                                        />
                                    </li>
                                ))}
                            </CategoryUlTag>

                        ) : (
                            <div
                                style={{
                                    width: '284px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    overflowY: 'auto',
                                    fontSize: '16px',
                                    fontWeight: '400',
                                    color: 'rgb(153, 153, 153)',
                                    borderLeft: '1px solid rgb(204, 204, 204)',
                                }}
                            >
                                중분류 선택
                            </div>
                        )}
                    </SecondCategoryDiv>
                    <ThirdCategoryDiv>소분류 선택</ThirdCategoryDiv>
                </CategoryBoxDiv>
                <ChooseDiv>
                    <h3
                        style={{
                            fontSize: '16px',
                            fontWeight: '400',
                            color: 'rgb(216, 12, 24)'
                        }}
                    > 선택한 카테고리:
                    </h3>
                </ChooseDiv>
            </CardDiv>
        </CategoryLiTag >
    );
};


export default GoodsCategory;