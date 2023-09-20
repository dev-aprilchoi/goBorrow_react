import styled from '@emotion/styled';
import SidebarComponent from './sidebar';

const Header = () => {
    return (
        <HeaderWrap>
            헤더영역입니다.
            <SidebarComponent/>
        </HeaderWrap>
    );
}

export default Header;

const HeaderWrap = styled.header`  
    border: 5px solid red;  
    height: 100px;
    position: sticky;
    top:-40px;
    z-index: 1;
`;