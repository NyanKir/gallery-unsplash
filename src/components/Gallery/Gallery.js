import React, {useState} from "react"
import styled from "styled-components";
import {useSelector} from "react-redux";
import {Loader} from "../Loader";
import {Error} from "../Error";
import {useLocalStorage} from "../../hooks/localstorage.hook";
import {NavLink} from "react-router-dom";


const GalleryGrid = styled.section`
    display:flex;
    justify-content:center;
`
const LineOrientation = styled.div`
    margin: 2.5px;
    display:flex;
    flex-direction:column;
        
    .wrapper{
        overflow:hidden;
        position:relative;
        transition:.3s;
        margin: 5px;
        .picture{
            cursor:zoom-in;
        }
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
const Heart = styled.span`
        z-index:1;
        cursor:pointer;
        font-size:36px; 
        position:absolute;
        top:${props => props.isred ? "10px" : "-10px"};
        right:20px;
        transition:.3s;
        filter: contrast(100%);
        color:${props => props.isred ? "red" : "black"};
        opacity:${props => props.isred ? "1" : "0"};
        
`

export const Line = (props) => {

    const photo = props.photo.map((el, index) => {
        return (
            <div className="wrapper" key={index}>
                <Heart className="heart" onClick={() => props.handlerValue(el.id, props.follows.includes(el.id))}
                       isred={props.follows.includes(el.id)}>
                    &#10084;
                </Heart>
                <NavLink to={'picture/'+el.id}>
                    <picture className="picture">
                        <img src={el.urls.small} alt={el.alt_description}/>
                    </picture>
                </NavLink>
            </div>
        )
    })
    return (
        <LineOrientation>
            {photo}
        </LineOrientation>
    )
}

export const Gallery = (props) => {
    const status = useSelector((state) => state.galleryReducer.fetchedData.status)

    const [setValue] = useLocalStorage('follows', [])
    const [follows, setFollows] = useState(() => JSON.parse(window.localStorage.getItem('follows')))

    const handlerValue = (id, contains) => {
        if (contains) {
            const sorted = follows.filter((follow) => follow !== id)
            setFollows(sorted)
            setValue(sorted)
            if (props.handlerFollows) {
                const sorted = props.data.flat().filter((follow) => follow.id !== id)
                props.handlerFollows(sorted.flat())
            }
        } else {
            setFollows([...follows, id])
            setValue([...follows, id])
        }

    }

    if (status === 'loading') {
        return <Loader/>
    }
    if (status === 'failed') {
        return <Error error={'Попробуйте подключить VPN, либо это проблема Unsplash'}/>
    }
    if (props.data[0].length === 0) {
        return <Error error={'Ничего не найдено'}/>
    }

    const pictures = props.data.map((el, index) => {
        return (
            <Line photo={el} key={index} handlerValue={handlerValue} follows={follows}/>
        )
    })

    return (
        <GalleryGrid>
            {pictures}
        </GalleryGrid>
    )
}