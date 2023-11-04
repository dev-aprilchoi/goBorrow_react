import styled from '@emotion/styled';

const TagLi = styled.li`
    display: flex;
    margin-left: 35px;
    padding-bottom: 2rem;
    padding-top: 1.8rem;
    border-bottom: 1px solid rgb(210, 210, 210);
    list-style: none;

    li::before {
    content: "- ";
    }
`;

const TagDiv = styled.div`
    width: 10.5rem;
    font-size: 18px;
    font-weight: 400;
    color: rgb(25, 25, 25);
    padding-top: 18px;
`;

const InputDetailsDiv = styled.div`
    flex: 1 1 0%;
    position: relative;
    `;

const FirstInputDiv = styled.div`
    display: flex;

    & input{
    width: 380%;
    font-size: 16px;
    color: rgb(25, 25, 25);
    border-radius: 2px;
    border: 1px solid rgb(204, 204, 204);
    height: 3rem;
    padding: 0px 1rem;
    }
    `;

const ExplainUl = styled.ul`
    color: rgb(136, 136, 136);
    padding: 0px;
     `;

const ExplainLi = styled.li`
    display: flex;
    font-size: 14px;
    `;


const tagExplanations = [
    '태그는 띄어쓰기로 구분되며 최대 9자까지 입력할 수 있어요.',
    '내 상품을 다양한 태그로 표현해 보세요.',
    '사람들이 내 상품을 더 잘 찾을 수 있어요.',
    '상품과 관련 없는 태그를 입력할 경우, 판매에 제재를 받을 수 있어요.'
];

const TagSection = () => {
    return (
        <TagLi>
            <TagDiv>
                태그
            </TagDiv>

            <InputDetailsDiv>
                <FirstInputDiv>
                    <div>
                        <div>
                            <input type="text" name="tag" placeholder="태그를 입력해 주세요. (최대 5개)" />
                        </div>
                    </div>
                </FirstInputDiv>

                <ExplainUl>
                    {
                        tagExplanations.map((tagExplanation, index) => {
                            return (
                                <ExplainLi key={index}>
                                    <p style={{
                                        margin: '0.5px',
                                        padding: '1.5px',
                                    }}
                                    >
                                        {tagExplanation}</p>
                                </ExplainLi>
                            )
                        })
                    }
                </ExplainUl>
            </InputDetailsDiv>
        </TagLi>
    )
}
export default TagSection;