import Footer from "./footer";
import Header from "./header";
import styled from '@emotion/styled';
const Layout = (props) => {
    return (
        <>
            <Header />
            <Main>{props.children}</Main>
            <Footer />
        </>
    );
}

const Main = styled.main`
    /* display: block; */
    width: 1024px;
    margin: 0 auto;
`;

export default Layout;