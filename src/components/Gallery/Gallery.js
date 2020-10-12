import React from "react"
import styled from "styled-components";
import {useSelector} from "react-redux";
import {Loader} from "../Loader";
import {Error} from "../Error";

const GalleryGrid=styled.section`
    display:flex;
    justify-content:center;
`
const LineOrientation=styled.div`
    margin: 2.5px;
    display:flex;
    flex-direction:column;
    
    .heart{
        z-index:1;
        cursor:pointer;
        font-size:36px; 
        position:absolute;
        top:-10px;
        right:20px;
        transition:.3s;
        filter: contrast(100%);
        opacity:0;
        
        &:hover{
            transition:.3s;
            color:red;
        }
    }
    
    .wrapper{
        overflow:hidden;
        position:relative;
        transition:.3s;
        margin: 5px;
        
        &:hover .picture{
            transition:.3s;
            filter: contrast(30%);
        }
        
        &:hover .heart{
            opacity:1;
            transition:.3s;
            top:10px;
        }
    }
    

`

export const Line=(props)=>{


    const photo=props.photo.map((el,index)=>{
        return(
            <div className="wrapper" key={index}>
                <span className="heart">
                    &#10084;
                </span>
                <picture  className="picture">
                    <img src={el.urls.small} alt={el.alt_description}/>
                </picture>
            </div>
        )
    })
    return(
        <LineOrientation>
            {photo}
        </LineOrientation>
    )
}

export const Gallery=(props)=>{
    const status = useSelector((state) => state.galleryReducer.fetchedData.status)


    if (status === 'loading') {
        return <Loader/>
    }
    if (status === 'failed') {
        return <Error error={'Попробуйте подключить VPN, либо это проблема Unsplash'}/>
    }
    if (props.data[0].length===0){
        return <Error error={'Ничего не найдено'}/>
    }


    const pictures=props.data.map((el,index)=>{
        return(
            <Line photo={el} key={index}/>
        )
    })

    return(
            <GalleryGrid>
                {pictures}
            </GalleryGrid>
    )
}