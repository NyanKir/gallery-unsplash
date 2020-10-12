import React from "react"
import styled from "styled-components";
import photo from './../assets/cry-smile.png'

const Container = styled.section`
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
   
   .header{
    color:#929292;
    font-size:24px;
    font-weight:bold;
    }
    .desc{
        color:#929292;
    }
    img{
        width:350px;
    }
`
export const Error = (props) => {
    return (
        <Container>
            <h1 className="header">OOPS!</h1>
            <p className="desc">{props.error}</p>
            {/*<button>Reload</button>*/}
            {/*<p><a href="https://unsplash.com/">unspalsh.com</a></p>*/}
            <img src={photo} alt="oops"/>
        </Container>
    )
}