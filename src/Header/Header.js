import React from 'react'
import styled from 'styled-components'
import {BsSearch} from 'react-icons/bs'
import {AiFillHome, AiOutlineHeart} from 'react-icons/ai'
import {BiAddToQueue} from 'react-icons/bi'

const Header = () => {
  return (
    <>
        <Container>
            <Wrapper>
                <Hold>
                    <Logo>LuLu Social</Logo>
                    <SearchBar>
                        <Icon/>
                        <SearchInput placeholder='search'/>
                    </SearchBar>
                </Hold>

                <Hold>
                    <HomeIcon/>
                    <PostIcon/>
                    <LoveIcon/>
                    <Image src='/baby.jpg'/>
                </Hold>
            </Wrapper>
        </Container>
    </>
  )
}

export  default Header

const Container = styled.div`
width:100%;
height:70px;
display:flex;
justify-content: center;
border: 1px solid silver;
`
const Wrapper = styled.div`
width: 90%;
display: flex;
align-items: center;
height: 100%;
justify-content: space-between;
`
const Hold = styled.div`
display: flex;
height: 100%;
align-items: center;
`
const Logo = styled.div`
margin-right: 40px;
font-weight: 500;
font-size: 25px;
font-style: italic;

`
const SearchBar = styled.div`
display: flex;
align-items: center;
width: 350px;
border: 1px solid silver;
border-radius: 5px;
background-color: lightgray;
padding-left: 10px;
/* padding-right: 5px; */
`
const Icon = styled(BsSearch)`
font-size: 13px;
margin-right: 2px;
`
const SearchInput = styled.input`
outline: none;
border: 0;
background-color: transparent;
font-size: 20px;

:placeholder{
    font-family:  poppins;
}
`
const HomeIcon = styled(AiFillHome)`
font-size: 30px;
margin: 0 10px;
color: #000000;
cursor: pointer;
`
const Image = styled.img`
width: 50px;
height: 50px;
border-radius: 100%;
object-fit: cover;
background-position: center;
background-repeat: no-repeat;
`
const LoveIcon = styled(BiAddToQueue)`
font-size: 30px;
margin: 0 10px;
color: #000000;
cursor: pointer;
`
const PostIcon = styled(AiOutlineHeart)`
font-size: 30px;
margin: 0 10px;
color: #000000;
cursor: pointer;
`
// const Container = styled.div``
// const Container = styled.div``