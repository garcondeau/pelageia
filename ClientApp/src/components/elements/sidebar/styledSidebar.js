import styled from "styled-components";

export const StyledSidebarWrapper = styled.div`
    max-width: 400px;
    width: 100%;
    height: 100vh;
    padding: 10px 0 0 15px;
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(30px);
    background-clip: padding-box;
    box-shadow: 5px 0 10px rgba(46, 54, 68, 0.1);
    
    .sidebar {
        &__header {
            width: 100%;
            max-height: 40px;
            margin-right: 15px;
            display: flex;
            justify-content: space-between;
        }
    }
`
