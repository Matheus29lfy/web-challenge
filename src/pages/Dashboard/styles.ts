import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  width: 228px;
  height: 1024px;
  margin: 0 auto;
  background: #059d42;
  > a {
    position: absolute;
    width: 1115px;
    height: 72px;
    left: 353px;
    top: 829px;

    background: #d4e4db;

    text-decoration: none;
    font-family: Roboto;
    font-style: normal;
    font-weight: 900;
    font-size: 20px;
    line-height: 60px;
    text-align: center;
    color: #059d42;
  }
`;
export const LogoTitle = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 40px 20px;
`;

export const MenuLeft = styled.div`
  a {
    text-decoration: none;
    position: relative;
    width: 26px;
    height: 16px;
    left: 1px;
    top: 113px;
    display: flex;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;

    color: #fff;

    & + a {
      margin-top: 28px;
    }
  }

  div#submenu1 {
    margin-top: 15px;
  }

  h1 {
    position: absolute;
    width: 69px;
    height: 19px;
    left: 22px;
    top: 254px;
    display: flex;

    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;

    color: #93ffe8;

    & + h1 {
      margin-top: 30px;
    }
  }
`;

export const Titlel = styled.div`
  position: absolute;
  width: 183px;
  height: 84px;
  left: 22px;
  top: 29px;

  background: #ffffff;
  opacity: 0.6;
  border-radius: 34px;
`;

export const TextT = styled.div`
  position: absolute;
  width: 136.33px;
  height: 46.47px;
  left: 23.77px;
  top: 24px;

  font-family: Roboto;
  font-style: normal;
  font-weight: 900;
  font-size: 28.3666px;
  line-height: 36px;

  text-align: center;

  color: #059d42;
`;

export const Title = styled.h1`
  position: absolute;
  width: 424px;
  height: 33px;
  left: 350px;
  top: 29px;

  font-family: Roboto;
  font-style: normal;
  font-weight: 900;
  font-size: 28.3666px;
  line-height: 33px;

  color: rgba(0, 0, 0, 0.7);
`;

export const ListPeople = styled.div`
  position: absolute;
  width: 1115px;
  height: 196px;
  left: 350px;
  top: 130px;
  display: flex;
  flex-direction: column;

  background: #ffffff;
  box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.15);

  & + div{
    margin-top: 250px;
  }

 img{
     position: absolute;
      width: 42px;
      height: 42px;
      border-radius: 50%;
      left: 20px;
      top: 20px;

      color:#059D42;
    }

    div{
      margin: 0 16px;
      flex: 1;
    }

    strong{
    position: absolute;
    width: 439.79px;
    height: 23px;
    left: 80px;;
    top: 21px;


    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 140.62%;
    color: #059D42;
        }

    p{
      position: absolute;
      width: 666.04px;
      height: 34px;
      left: 80px;
      top: 52px;


      font-family: Roboto;
      font-style: normal;
      font-weight: normal;
      font-size: 12px;
      line-height: 17px;

      color: #63666A;

    }

    text{
      position: absolute;
      width: 763.91px;
      height: 16px;
      left: 80px;
      top: 80px;

      background: #E9E9E9;
      border-radius: 10px;
    }

   .value{
    position: absolute;
    height: 12px;
    left: 70.62%;
    right: 14.18%;
    top: 105px;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 10px;
    line-height: 12px;


    color: #778489;
    }

    .progress{
      position: absolute;
      width: 763.91px;
      height: 16px;
      border-radius: 50%;
      left:65px;
      top: 115px;
      background: #E9E9E9;
      border-radius: 10px;

    }
    .progress-done{
      opacity: 1;
      width: 70%;

      position: absolute;
      padding: 3px 2px;

      font-family: Roboto;
      font-style: normal;
      font-weight: normal;
      font-size: 11px;
      line-height: 12px;
      color: #778489;

    }

    a{
    text-decoration: none;
    position: absolute;
    width: 168px;
    height: 17px;
    left:100px;
    top: 160px;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 17px;

    color: #059D42;
    }

    img#add{
      position: absolute;
      width: 15px;
      height: 15px;
      border-radius: 50%;
      left:-20px;
      top: -2px;
    }
  }

  .close{
    position: absolute;
    right: 20px;
    text-decoration: none;
  }

`;

export const TitleRight = styled.div`
  position: absolute;

  width: 267px;
  height: 38px;
  left: 900px;
  top: -15px;

  background: #e14646;
  background-blend-mode: darken;

  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 140.62%;

  div {
    position: absolute;
    left: 50px;
    bottom: 10px;
  }
  > img {
    position: absolute;
    width: 22px;
    height: 22px;
    left: 20px;
    top: 6.5px;
  }

  color: #ffffff;
`;
