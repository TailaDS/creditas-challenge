import styled from "styled-components";

export const Main = styled.main`
  background-color: #d3ffc0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const Result = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const SimulationForm = styled.form`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  align-content: space-around;
  max-width: 450px;
  min-width: 400px;
  height: fit-content;
  text-align: left;
  padding: 24px;
  margin: 24px 24px 0;
  gap: 16px;
  border-radius: 12px;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.05);
`

export const Title = styled.h1`
  text-align: center;
  padding: 24px 24px 0;
`

export const Subtitle = styled.label`
  text-align: center;
  font-weight: 600;
`

export const Label = styled.label`
  text-align: center;
  font-weight: 400;
`

export const Input = styled.input`
  width: 100%;
  border-color: #27ae60;
  border-top: none;
  border-left: none;
  border-right: none;
  margin-top: 8px;
  margin-bottom: 5%;
  font-size: large;
  cursor: pointer;
`

export const SubimitButton = styled.button`
  background-color: #27ae60;
  border-radius: 8px;
  border-style: none;
  box-shadow: rgba(39, 174, 96, .15) 0 4px 9px;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  font-family: Inter,-apple-system,system-ui,"Segoe UI",Helvetica,Arial,sans-serif;
  font-size: 16px;
  font-weight: 600;
  padding: 13px 20px;
  position: relative;
  text-align: center;
  transition: all .10s;

  &:hover{
    background-color: #1e8449;
    opacity: 1;
    transform: translateY(0);
    transition-duration: .35s;
  }
`
