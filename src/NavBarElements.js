import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

export const Nav = styled.nav`
    background: white;
    height: 80px;
    display: flex;
    width: 100%;
    z-index: 10;
    float: left;
    margin-top: 18px;
`;

export const NavLink = styled(Link)`
    color: black;   
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 20px;
    height: 100%;
    cursor: pointer;
    
    &.active {
        color#15cdfc;
    }
`;

export const Bars = styled(FaBars)`
    display: none;
    color: #fff;
    @media screen and (max-width: 768px) {
        display: block;
        position: absolute,
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        cursor: pointer;
    }
`;

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -24px;
    @media screen and (max-with: 768px) {
        display: none;
    }
`;