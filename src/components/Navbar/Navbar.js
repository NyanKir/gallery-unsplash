import React from "react";
import {NavLink} from 'react-router-dom'
import styled from "styled-components";

const Header = styled.header`
    width:100%;
    background:#525050;
    padding: 20px 0;
    display:flex;
    justify-content:center;
`;

const StyledLink = styled(NavLink)`
    margin:0 10px;
    color:white;
    
    &.active {
        text-decoration: none;
    }
`;


export const Navbar = () => {
    return (
        <Header>
            <StyledLink to="/" exact>Home</StyledLink>
            {/*<StyledLink to="/picture" exact>Picture</StyledLink>*/}
        </Header>
    )
}