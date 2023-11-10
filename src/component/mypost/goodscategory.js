import styled from '@emotion/styled';
import { useState, useEffect } from 'react';

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

const ErrMsg = styled.p`
    color: rgb(245, 126, 0);
    font-size: 14px;
    margin-top: 0.5rem;
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
    {
        id: 27,
        name: '번개나눔',
    },
    {
        id: 28,
        name: '구인구직',
    },
    {
        id: 29,
        name: '재능',
    },
    {
        id: 30,
        name: '커뮤니티',
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
                { id: 7, name: '방송/예능/캐릭터', },
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
                { id: 7, name: '기타(키덜트)', },
            ]
    },
    {
        firstCategoryId: 14,
        secondCategory:
            [
                { id: 1, name: '골동품', },
                { id: 2, name: '예술작품', },
            ]
    },
    {
        firstCategoryId: 15,
        secondCategory:
            [
                { id: 1, name: '악기', }
            ]
    },
    {
        firstCategoryId: 16,
        secondCategory:
            [
                { id: 1, name: '문구', },
                { id: 2, name: '기프트콘/쿠폰', },
                { id: 3, name: '상품권', },
                { id: 4, name: '티켓', },
            ]
    },
    {
        firstCategoryId: 17,
        secondCategory:
            [
                { id: 1, name: '스킨케어', },
                { id: 2, name: '색조메이크업', },
                { id: 3, name: '베이스메이크업', },
                { id: 4, name: '바디/헤어케어', },
                { id: 5, name: '향수/아로마', },
                { id: 6, name: '네일아트/케어', },
                { id: 7, name: '미용소품/기기', },
                { id: 8, name: '다이어트/이너뷰티', },
                { id: 9, name: '남성 화장품', },
            ]
    },
    {
        firstCategoryId: 18,
        secondCategory:
            [
                { id: 1, name: '가구', },
                { id: 2, name: '침구', },
                { id: 3, name: '수공예/수선', },
                { id: 4, name: '셀프 인테리어 용품', },
                { id: 5, name: '인테리어 소품', },
                { id: 6, name: '꽃/원예', },
                { id: 7, name: '조명', },
                { id: 8, name: '카페트/러그/매트', },
                { id: 9, name: '커튼/블라인드', },
            ]
    },
    {
        firstCategoryId: 19,
        secondCategory:
            [
                { id: 1, name: '주방용품', },
                { id: 2, name: '욕실용품', },
                { id: 3, name: '생활용품', },
            ]
    },
    {
        firstCategoryId: 20,
        secondCategory:
            [
                { id: 1, name: '드릴/전동공구', },
                { id: 2, name: '수공수/가정용 공구 ', },
                { id: 3, name: '공구함', },
                { id: 4, name: '산업용품/자재', },
                { id: 5, name: '측정/계측/레벨', },
                { id: 6, name: '공장기계/용접/가스', },
                { id: 7, name: '에어/유압공구', },
                { id: 8, name: '기타 산업용품', },
            ]
    },
    {
        firstCategoryId: 21,
        secondCategory:
            [
                { id: 1, name: '농수축산물', },
                { id: 2, name: '간식', },
                { id: 3, name: '커피/차', },
                { id: 4, name: '생수/음료', },
                { id: 5, name: '면/통조림', },
                { id: 6, name: '장/소스/오일', },
                { id: 7, name: '간편조리식품', },
                { id: 8, name: '기타 식품', },
            ]
    },
    {
        firstCategoryId: 22,
        secondCategory:
            [
                { id: 1, name: '베이비의류(0-2세)', },
                { id: 2, name: '여아의류(3-6세)', },
                { id: 3, name: '남아의류(3-6세)', },
                { id: 4, name: '여주니어의류(7세)', },
                { id: 5, name: '남주니어의류(7세)', },
                { id: 6, name: '신발/가방/잡화', },
                { id: 7, name: '유아동용품', },
                { id: 8, name: '임부 의류/용품', },
                { id: 8, name: '교구/완구/인형', },
                { id: 8, name: '수유/이유용품', },
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
    overflow-y: auto;
    font-size: 16px;
    font-weight: 400;
    border-left: 1px solid rgb(204, 204, 204);
`;

const GoodsCategory = () => {
    const [userClicked, setUserClicked] = useState(false);
    const [selectedFirstCategory, setSelectedFirstCategory] = useState(null);
    const [secondCategoryList, setSecondCategoryList] = useState(null);
    const [selectedSecondCategory, setSelectedSecondCategory] = useState(null);
    const [thirdCategoryList, setThirdCategoryList] = useState(null);
    const [selectedThirdCategory, setSelectedThirdCategory] = useState(null);
    const [selectedLast, setSelectedLast] = useState(null);

    const [selectedCategoryColor, setSelectedCategoryColor] = useState(null);

    const categoryErrMsg = '상세 카테고리를 선택해 주세요.';

    const handleFirstCategoryClick = (category) => {
        setSelectedFirstCategory(category);
        setUserClicked(true);
        setSecondCategoryList(firstAndSecondLevelCategories.filter((e) => e.firstCategoryId === category.id)[0].secondCategory);
        setSelectedSecondCategory(null);
        setSelectedThirdCategory(null);
        setSelectedCategoryColor(category.name);
    };

    const handleSecondCategoryClick = (category) => {
        setSelectedSecondCategory(category);
        setUserClicked(true);
        setThirdCategoryList(secondAndThirdLevelCategories.filter((e) => e.secondCategoryId === category.id)[0].thirdCategory);
        setSelectedThirdCategory(null);
        setSelectedCategoryColor(category.name);
    }

    const handleThirdCategoryClick = (category) => {
        setSelectedThirdCategory(category);
        setUserClicked(true);
        setSelectedLast(null);
        setSelectedCategoryColor(category.name);
    }




    useEffect(() => {
        // This effect will run after selectedCategoryColor has been updated
        console.log(selectedCategoryColor, 'selectedCategoryColor');
        // You can perform any actions here that depend on selectedCategoryColor
    }, [selectedCategoryColor]);

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
                                        style={{
                                            ...categoryButtons,
                                            color: selectedCategoryColor === category.name && 'rgb(216, 12, 24)',
                                        }}
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
                                            style={{
                                                ...categoryButtons,
                                                color: selectedCategoryColor === category.name && 'rgb(216, 12, 24)',
                                            }}
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
                    <ThirdCategoryDiv>
                        {userClicked && selectedSecondCategory ? (
                            <CategoryUlTag>
                                {thirdCategoryList.map((category, index) => (
                                    <li
                                        style={categoryLists}
                                        key={index}
                                        onClick={() => handleThirdCategoryClick(category)}
                                    >
                                        <input
                                            style={{
                                                ...categoryButtons,
                                                color: selectedCategoryColor === category.name && 'rgb(216, 12, 24)',
                                            }}
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
                                소분류 선택
                            </div>
                        )
                        }
                    </ThirdCategoryDiv>
                </CategoryBoxDiv>
                <div>
                    <div>
                        <div>
                            <ErrMsg>
                                {userClicked && !selectedThirdCategory && categoryErrMsg}
                            </ErrMsg>
                        </div>

                    </div>

                </div>
                <div>
                    <span
                        style={{
                            color: 'rgb(216, 12, 24)',
                            marginRight: '0.3rem'
                        }}
                    >
                        선택한 카테고리:
                    </span>
                    <span
                        style={{
                            color: 'rgb(216, 12, 24)',
                            fontWeight: 'bold'
                        }}
                    >
                        {selectedFirstCategory && selectedFirstCategory.name}
                        {selectedSecondCategory && ` > ${selectedSecondCategory.name}`}
                        {selectedThirdCategory && ` > ${selectedThirdCategory.name}`}
                        {selectedLast && ` > ${selectedLast && selectedLast.name}`}
                    </span>
                </div>
            </CardDiv>
        </CategoryLiTag >
    );
};


export default GoodsCategory;

// 스페이스가 생기면 ui로 생긴거로 바뀌기하고 
//map li 태그를 사용 하면됨


//카테고리는 userclicked가 필요없음  그냥 바로 selectedFirstCategory 가 클릭되면, 