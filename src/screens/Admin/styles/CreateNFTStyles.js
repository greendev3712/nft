import styled from "styled-components"

export const MainContainer = styled.div`
  width: 100vw;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 2rem;
`

export const LeftSide = styled.div`
  width: 15%;
  position: relative;
  height: 100%;
`
export const RightSide = styled.div`
  width: 75%;
  height: 100%;
`

export const BackOption = styled.button`
  font-size: 1rem;
  color: #242424;
  font-size: 1.2rem;
  font-weight: 200;
  padding-left: 1rem;
  padding-top: 1.5rem;
  background-color: transparent;
  border: none;
  outline: none;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`

export const MainHeading = styled.h1`
  font-size: 3rem;
  color: #242424;
  font-weight: bold;
  letter-spacing: 2px;
`
export const NftTypeButtonsContainer = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const NftTypeButton = styled.button`
  border: 1px solid white;
  color: white;
  border-radius: 12px;
  background-color: #242424;
  transition: 0.3s;
  padding: 12px 30px;
  cursor: pointer;
  &:hover {
    background-color: #b9fd02;
    color: black;
  }
  &:focus {
    background-color: #b9fd02;
    color: black;
  }
`

export const FormStyling = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 100%;
  border: none;

  span {
    font-size: 1.2rem;
    color: white;
  }
`

export const FormLabelContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 30%;
  margin: 0.5rem 0rem;
`

export const FormLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-size: 0.8rem;
    color: #242424;
    margin-left: 10px;
  }
`

export const SelectLabel = styled.label`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;

  span {
    margin-bottom: 0.8rem;
  }
`

export const SelectField = styled.select`
  width: 60%;
  padding: 0.5rem;
  background-color: #242424;
  border-radius: 5px;
  margin-bottom: 1rem;
  border: none;
  outline: none;
  color: white;
`

export const TitleField = styled.p`
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  color: #242424;
  font-size: 1.2rem;

  span {
    font-size: 0.8rem;
    color: #aaa;
  }
`

export const InputField = styled.input`
  width: 60%;
  padding: 0.5rem;
  background-color: #242424;
  border-radius: 5px;
  margin-bottom: 1rem;
  border: none;
  color: #fff;
`
export const TextAreaField = styled.textarea`
  width: 70%;
  padding: 1rem;
  background-color: #242424;
  border-radius: 5px;
  margin-bottom: 2rem;
  border: none;
  margin-top: 0.8rem;
  color: #fff;
`

export const DropFileStyle = styled.div`
  width: 60%;
  height: 190px;
  padding: 0.5rem;
  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='30' ry='30' stroke='%23333' stroke-width='4' stroke-dasharray='19%2c 14%2c 15%2c 24' stroke-dashoffset='38' stroke-linecap='round'/%3e%3c/svg%3e");
  border-radius: 30px;

  p {
    text-align: center;
    padding-top: 3rem;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #b9fd02;
    width: 40%;
    margin: 0 auto;
    margin-top: 1rem;
    outline: none;
    border: none;
    padding: 5px;
    border-radius: 5px;
  }

  img {
    margin-right: 10px;
  }

  span {
    color: #000;
  }
`

export const TitleSeparator = styled.p`
  font-size: 2rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #242424;
  margin-top: 2rem;
`

export const AttrsBoxStyling = styled.div`
  width: 100%;
  height: 4.5rem;
  border: 1px solid #787876;
  border-radius: 5px;

  p {
    padding: 0.5rem;
    padding-left: 1rem;
    background-color: #242424;
    color: #fff;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    height: 2rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`

export const AttrsGrid = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;
  margin-bottom: 2rem;
`

export const SubmitBtn = styled.input`
  width: 70%;
  color: black;
  background-color: #b9fd02;
  border-radius: 5px;
  padding: 0.7rem 0rem;
  border: none;
  cursor: pointer;
  outline: none;
  font-size: 1rem;
  margin-top: 30px;

  &:hover {
    background-color: #242424;
    color: #b9fd02;
  }
`
