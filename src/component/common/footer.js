import styled from '@emotion/styled';

const Footer = () => {
    return (
        <FooterWrap>
            푸터영역입니
        </FooterWrap>
    );
}
export default Footer;

// footer 담당자 바꾸기
const FooterWrap = styled.footer`
    border: 5px solid blue;
    padding: 20px;
`;