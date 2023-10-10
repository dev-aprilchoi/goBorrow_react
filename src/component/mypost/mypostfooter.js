import styled from '@emotion/styled';

const FooterDiv = styled.footer`
    /* width: 100%; */
    height: 4.5rem;
    background: rgb(246, 246, 246);
    box-shadow: rgb(229, 229, 229) 0px -1px 0px 0px;
    /* position: absolute; */
    left: 0px;
    bottom: 0px;
    z-index: 10;
`;

const ButtonDiv = styled.div`
    display: flex;
    height: 100%;
    justify-content: flex-end;
    align-items: center;
    gap: 14px;
    width: 1020px;
    `;

const SaveButton = styled.button`
    box-sizing: border-box;
    padding: 13px 40px;
    border-radius: 2px;
    border: 1px solid rgb(229, 229, 229);
    background: rgb(255, 255, 255);
    color: rgb(102, 102, 102);
    font-size: 18px;
    font-weight: 500;
    `;

const PostButton = styled.button`
    /* height: 3.5rem;
    width: 10rem; */
    padding: 12px 38px;
    color: rgb(255, 255, 255);
    font-size: 18px;
    font-weight: 500;
    background: rgb(216, 12, 24);
`;

const MyPostFooter = () => {
    return (
        <FooterDiv>
            <ButtonDiv>
                <SaveButton>임시저장</SaveButton>
                <PostButton>등록하기</PostButton>
            </ButtonDiv>
        </FooterDiv>

    );
}

export default MyPostFooter;