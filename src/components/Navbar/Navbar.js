import React, {useState} from "react";
import {Redirect,NavLink} from 'react-router-dom'
import styled from "styled-components";
import {useLocalStorage} from "../../hooks/storage_history.hook";

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
        box-shadow:${props => props.currect ? 'none' : '0 0 5px red'};
        margin:0 5px;
    }
    .button{
        margin:0 5px;
    }
`


export const Navbar = () => {
    const [source, setSource] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [currency, setCurrency] = useState(true);
    const [setValue] = useLocalStorage('history', [])

    const handlerSubmit = (evt) => {
        if (source.trim() || source.trim() !== '') {
            const item = JSON.parse(window.localStorage.getItem('history'));
            const actionSource = {
                id: (item[0]) ? item[item.length - 1].id + 1 : 1,
                text: source,
                date: new Date().toLocaleString()
            }
            setCurrency(true)
            setValue(actionSource)
            setSubmitted(true)
        } else {
            setCurrency(false)
        }
        evt.preventDefault()
    }

    return (
        <Header>
            <StyledLink to="/" exact>Home</StyledLink>
            <StyledLink to="/history" exact>History</StyledLink>
            <StyledLink to="/follows" exact>Follows</StyledLink>
            <FormIndent onSubmit={handlerSubmit} currect={currency}>
                <input type="text" className='input' onChange={e => setSource(e.target.value)} placeholder="Что ищем?"/>
                <button className='button' type="submit">Search</button>
            </FormIndent>
            {submitted && <Redirect to={{pathname: '/source/'+source,}}/>}
        </Header>
    )
}