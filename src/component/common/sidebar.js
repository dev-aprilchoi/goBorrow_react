import styled from '@emotion/styled';
import FavoriteIcon from '@mui/icons-material/Favorite';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

const Sidebar = styled.div`
    position: absolute;
    top: 102px;
    right: calc(50% - 617px);
    z-index: 20;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color : rgb(102, 102, 102);
    font-size: 13px;
    position: absolute;
    width: 100px;
`;

const Likegoods = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
    border: 1px solid rgb(102, 102, 102);
    background: rgb(255, 255, 255);
    margin-bottom: 6px;
    font-weight: 600;
    /* color: 'rgb(204, 204, 204)'; */
    `;

const RecentviewgoodsDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
    border: 1px solid rgb(204, 204, 204);
    background: rgb(255, 255, 255);
    margin-bottom: 7px;
    height: 150px;
    font-weight: 600;
`;

const Heartimgdiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    color: 'rgb(204, 204, 204)';
    margin-top: 5px;
    `;

const Countdiv = styled.div`
    font-size: 10px;
    color: 'rgb(204, 204, 204)';
    font-weight: 100;
    `;

const Topgoods = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    font-weight: 600;
    font-size: 13px;
    color: rgb(102, 102, 102);
    border: 1px solid rgb(229, 229, 229);
    font-family: 'Courier New', Courier, monospace;
    `;

const Recentview = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    color: rgb(204, 204, 204);
    margin-top: 5px;
    `;

const EyeRecentDiv = styled.div`
    justify-content: center;
    align-items: center;
    padding-top: 30px;
    display: flex;
    flex-direction: column;
    `;

const heartIconStyle = {
    fontSize: '10px',
    marginRight: '5px',
    color: 'rgb(204, 204, 204)'
}

const eyeIconStyle = {
    fontSize: '20px',
    color: 'rgb(204, 204, 204)',
}

const SidebarComponent = () => {
    return (
        <Sidebar>
            <Likegoods>
                찜한상품
                <Heartimgdiv>
                    <FavoriteIcon style={heartIconStyle} />
                    <Countdiv>0</Countdiv>
                </Heartimgdiv>
            </Likegoods>
            <RecentviewgoodsDiv>최근본상품
                <EyeRecentDiv>
                    <RemoveRedEyeIcon style={eyeIconStyle} />
                    <Recentview>
                        최근 본 상품이
                        <br />
                        없습니다.
                    </Recentview>
                </EyeRecentDiv>
            </RecentviewgoodsDiv>
            <Topgoods>TOP</Topgoods>
        </Sidebar>
    )
}
export default SidebarComponent;