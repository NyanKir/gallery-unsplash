import React, {useState} from "react"
import styled from "styled-components";
import {NavLink} from "react-router-dom";
import {Error} from "../components/Error";


const HistoryWrapper = styled.section`
    display:flex;
    flex-direction: column;
    align-items:center;
`

const Container = styled.div`
    display:flex;
    align-items:center;
    border-radius:3px;
    width:700px;
    padding:10px;
    background:#b7b7b7;
    margin:10px 0;
    
    .info{
        display:flex;
        flex-direction: column;
    }
    .info_time{
        font-size:12px;
    }
    .button{
        cursor:pointer;
        border:2px solid white;
        background:transparent;
        color:white;
        margin-left:auto;
        padding: 8px;
        width:15px;
        height:15px;
        display:flex;
        align-items: center;
        justify-content: center;
        transition:.3s;


        &:hover{
                border:2px solid tomato;
            background:tomato;
            transition:.3s;
        }
        
    }

`
export const HistoryPage = () => {
    const [history, setHistory] = useState(() => {
        return JSON.parse(window.localStorage.getItem('history'))
    })


    const removeHistory = (id) => {
        const sorted=history.filter((el)=> el.id!==id)
        window.localStorage.setItem('history',JSON.stringify(sorted))
        setHistory(sorted)
    }
    if(!history.length){
        return <Error error="Ничего нету"/>
    }

    const list = history.map((el,index) => {
        return (
            <Container key={index}>

                <div className="info">

                    <span className="info_name">
                        <NavLink to={'/source/'+el.text}>{el.text}</NavLink>
                    </span>
                    <span className="info_time">
                        Time: {el.date}
                    </span>
                </div>

                <button className="button" onClick={()=>removeHistory(el.id)}>&#10005;</button>
            </Container>
        )
    })

    return (
        <HistoryWrapper>
            {list}
        </HistoryWrapper>
    )
}