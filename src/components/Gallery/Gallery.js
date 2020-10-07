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
    picture{
        margin: 5px;
    }
`

export const Line=(props)=>{


    const photo=props.photo.map((el,index)=>{
        return(
            <picture key={index}>
                <img src={el.urls.small} alt={el.alt_description}/>
            </picture>
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