import React, {useEffect, useState} from "react"
import {useParams} from "react-router-dom";
import styled from "styled-components"
import {useLocalStorage} from "../hooks/localstorage.hook";
import {Loader} from "../components/Loader";

const Wrapper = styled.div`
    padding: 1rem;
    height: calc(100vh - 150px);

`
const Orientation = styled.div`
    margin: 0 auto;
    width: max-content;
    display:flex;
    flex-direction:column;
    align-items:center; 

    .picture{
        position:relative;
        height: 90%;
        
        &:hover img{
            transition:.3s;
            filter: contrast(30%);
        }   
        
        &:hover .heart{
            opacity:1;
            transition:.3s;
            top:10px;
        }

        img{
            transition:.3s;
            width: auto;
            height: -webkit-fill-available;
        }
    }
    
    .desc{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content:space-between;
    }
    
    .desc_profile{
        display:flex;
        align-items: center;
        
        img{
            width: 32px;
            height: 32px;
            border-radius: 50px;
        }
        
        div{
            margin-left:5px;
            display:flex;
            flex-direction:column;
            align-items: flex-start;    
            
            span+span{
                font-size:12px;
                
                a{
                    color:#b7b7b7;
                    
                    &:hover{
                       color:black;
                    }
                }
            }
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
        filter: contrast(130%);
        color:${props => props.isred ? "red" : "black"};
        opacity:${props => props.isred ? "1" : "0"};
        
`

export const PiturePage = () => {
    const {id} = useParams()
    const [data, setData] = useState(undefined)

    const [setValue] = useLocalStorage('follows', [])
    const [follows, setFollows] = useState(() => JSON.parse(window.localStorage.getItem('follows')))

    useEffect(() => {
        const ac = new AbortController();
        const fetchData = async () => {
            try {
                const res = await fetch(`https://api.unsplash.com/photos/${id}/?&client_id=4kKJyVOE_v-8VRUmQCyz6t7dsTjwlraJYiHPAjBAVnU`, {signal: ac.signal})
                const data = await res.json()
                setData(data)
            } catch (e) {
                console.error(e)
            }
        }

        fetchData()
        return () => ac.abort();

    }, [])

    if (!data) {
        return <Loader/>
    }
    const handlerValue = (id, contains) => {
        if (contains) {
            const sorted = follows.filter((follow) => follow !== id)
            setFollows(sorted)
            setValue(sorted)
        } else {
            setFollows([...follows, id])
            setValue([...follows, id])
        }

    }
    console.log(data)


    return (
        <Wrapper>
            <Orientation>
                <picture className="picture">
                    <Heart className="heart" isred={follows.includes(id)}
                           onClick={() => handlerValue(id, follows.includes(id))}>
                        &#10084;
                    </Heart>
                    <img src={data.urls.regular} alt={data.alt_description}/>
                </picture>
                <div className="desc">
                    <div className="desc_profile">
                        <img src={data.user.profile_image.medium} alt={data.user.id}/>
                        <div>
                            <span>{data.user.name}</span>
                            <span><a href={'https://www.instagram.com/' + data.user.instagram_username}
                                     target="_blank">@{data.user.instagram_username}</a></span>
                        </div>
                    </div>
                    <div className="desc_load">
                        <a href={data.urls.regular} target="_blank" download>
                            Download
                        </a>
                    </div>
                </div>
            </Orientation>
        </Wrapper>

    )
}