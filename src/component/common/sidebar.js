import styled from '@emotion/styled';

const Sidebar = styled.div`
    background-color: red;
    color: blue;
    position: absolute;
    right: 0;
    top: 102px;
    display: flex;
    flex-direction: column;
    row-gap: 6px;
`;

const SidebarComponent = () => {
    return (
        
            <Sidebar>
                <div>
                    찜한상품
                </div>
                <div>최근본상품</div>
                <div>TOP</div>
            </Sidebar>

    )
}
export default SidebarComponent;