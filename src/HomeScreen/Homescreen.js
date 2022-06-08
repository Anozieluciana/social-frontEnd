import React from 'react'
import styled from 'styled-components'
import BuildMainScreen from './BuildMainScreen'
import SideScreenn from './SideScreen'

 const Homescreen = () => {
  return (
    <Container>
        <Wrapper>
            <Maincon>
                <BuildMainScreen/>
            </Maincon>
            <SideScreen>
                <SideScreenn/>
            </SideScreen>
        </Wrapper>
        </Container>
  )
}

export default Homescreen
const Maincon = styled.div`
width:600px;
/* background-color: pink; */
display: flex;
/* height: 700px; */
justify-content: center;
@media screen and (max-width:1200px){
    display: flex;
    justify-content: center;
    width: 600px;
}


`

const SideScreen = styled.div`
width: 300px;
display: flex;
justify-content: flex-start;
/* background-color: red; */
@media screen and (max-width:786px){
    display: none;
}
`

const Container = styled.div`
    width: 100%;
    min-height: calc(100vh - 70px);
    height:100% ;
    background-color: lightgray;
    display: flex;
  justify-content: center;
  padding-top: 70px;
`

const Wrapper = styled.div`
width: 1000px;
display: flex;
justify-content: space-between;
padding-top: 50px;
/* height: 80; */

@media screen and (max-width: 1000px){
    display: flex;
    justify-content: center;
}
`