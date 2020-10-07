import React, {useState} from "react";
import {NavLink} from 'react-router-dom'
import styled from "styled-components";
import {SourceData} from "../../redux/actions";
import {useDispatch} from "react-redux";

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
const FormIndent = styled.form`
    margin-left:auto;
    .input{
        box-shadow:${props => props.currect ? 'none':'0 0 5px red'};
        margin:0 5px;
    }
    .button{
        margin:0 5px;
    }
`


export const Navbar = () => {
    const [source, setSource] = useState("");
    const [currect, setCurrect] = useState(true);
    const dispatch = useDispatch()

    const handlerSubmit = (evt) => {
        if (source.trim() || source.trim()!=='') {
            setCurrect(true)
            SourceData(dispatch, source)()
        }else{
            setCurrect(false)
        }
        evt.preventDefault()
    }

    return (
        <Header>
            <StyledLink to="/" exact>Home</StyledLink>
            <StyledLink to="/" exact>History</StyledLink>
            {/*<StyledLink to="/picture" exact>Picture</StyledLink>*/}
            <FormIndent onSubmit={handlerSubmit} currect={currect}>
                <input type="text" className='input' onChange={e => setSource(e.target.value)} />
                <button className='button' type="submit">Search</button>
            </FormIndent>
        </Header>
    )
}