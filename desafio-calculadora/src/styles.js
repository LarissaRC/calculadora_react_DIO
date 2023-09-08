import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #121212;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    p {
        color: white;
        font-size: 16px;
        margin-top: 10px;
    }
`

export const Content = styled.div`
    background-color: #FFFFFF;
    width: 400px;
    border: 2px solid white;
    border-radius: 20px;
    overflow: hidden;
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`