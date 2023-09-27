import styled from '@emotion/styled';

const Sidebar = styled.div`
    /* background-color: red;
    color: blue;
    position: absolute;
    right: 0;
    top: 102px;
    display: flex;
    flex-direction: column;
    row-gap: 6px; */
    position: absolute;
    top: 102px;
    right: calc(50% - 617px);
    z-index: 20;
`;

const Likegoods = styled.div`
    padding: 10px;
    width: 100%;
    border: 1px solid rgb(204, 204, 204);
    background: rgb(255, 255, 255);
    margin-bottom: 6px;
    `;


const SidebarComponent = () => {
    return (
        <Sidebar>
            <Likegoods>
                찜한상품
            </Likegoods>
            <div>최근본상품</div>
            <div>TOP</div>
        </Sidebar>
    )
}  
export default SidebarComponent;