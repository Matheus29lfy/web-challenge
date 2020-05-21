import styled from 'styled-components';

interface CardProps {
  total?: boolean;
}

export const Container = styled.div`
  position: absolute;
  width: 375px;
  height: 667px;
  top: 100px;

  > a {
    position: absolute;
    width: 330px;
    height: 72px;
    left: 23px;
    top: 550px;

    background: #d4e4db;

    text-decoration: none;
    font-family: Roboto;
    font-style: normal;
    font-weight: 900;
    font-size: 20px;
    line-height: 63px;
    text-align: center;

    color: #059d42;
  }
`;
export const LogoTitle = styled.div`
  position: absolute;
  width: 375px;
  left: 0px;
  padding: 40px 20px;
  background: #059d42;
`;

export const Titlel = styled.div`
  position: absolute;
  width: 128px;
  height: 60px;
  left: 120px;
  top: 25px;

  background: #ffffff;
  opacity: 0.6;
  border-radius: 34px;
`;

export const TextT = styled.div`
  position: absolute;
  width: 69.28px;
  height: 18.53px;
  left: 15.54px;
  top: 18.08px;

  font-family: Roboto;
  font-style: normal;
  font-weight: 900;
  font-size: 20.4158px;
  line-height: 19px;
  /* identical to box height, or 129% */

  text-align: center;

  color: #059d42;
`;

export const Title = styled.h1`
  position: absolute;
  width: 312px;
  height: 66px;
  left: 22px;
  top: 128px;

  font-family: Roboto;
  font-style: normal;
  font-weight: 900;
  font-size: 28.3666px;
  line-height: 33px;

  /* text-dark */

  color: rgba(0, 0, 0, 0.7);
`;

export const ListPeople = styled.div`

    position: absolute;
    width: 330px;
    height: 275.75px;
    left: calc(50% - 330px/2 - 0.5px);
    top: 233px;


    background: #FFFFFF;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.15);
    div{
      margin: 0 16px;
      flex: 1;
    }

    strong{
      position: absolute;
      width: 239px;
      height: 63px;
      left: calc(50% - 239px/2 - 23px);
      top: 30px;

      font-family: Roboto;
      font-style: normal;
      font-weight: bold;
      font-size: 16px;
      line-height: 140.62%;


      color: #059D42;
    }

    p{
      position: absolute;
      width: 284px;
      height: 96px;
      left: calc(50% - 284px/2 - 0.5px);
      top: 60px;

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
      left: 30px;
      top: 50px;

      background: #E9E9E9;
      border-radius: 10px;
    }

    .value{
      position: absolute;
      height: 12px;
      left: 72.27%;
      right: 9.07%;
      top: 147px;

      font-family: Roboto;
      font-style: normal;
      font-weight: normal;
      font-size: 10px;
      line-height: 12px;

      color: #778489;
    }

    .progress{
      position: absolute;
      width: 278.55px;
      height: 22.51px;
      left: 5.91px;
      top: 160.57px;

      background: #E9E9E9;
      border-radius: 22px;
    }
    .progress-done{
      opacity: 1;
      width: 70%;
      position: absolute;
      height: 12px;
      left: 1.87%;
      right: 80.8%;
      top: 6px;


      font-family: Roboto;
      font-style: normal;
      font-weight: normal;
      font-size: 10px;
      line-height: 12px;


      color: rgba(0, 0, 0, 0.7);
    }
    a{
    text-decoration: none;

    position: absolute;
    width: 168px;
    height: 17px;
    left: 44px;
    top: 230px;


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
`;

export const TitleRight = styled.div`
  position: absolute;
  width: 267px;
  height: 38px;
  left: 101px;
  top: 220px;

  /* danger */

  background: #e14646;
  background-blend-mode: darken;

  /* Title3-16px */

  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 140.62%;

  /* text-light */

  color: #ffffff;

  div {
    position: absolute;
    left: 40px;
    bottom: 7px;
  }
  > img {
    position: absolute;
    width: 22px;
    height: 22px;
    left: 10px;
    top: 6.5px;
  }

  color: #ffffff;
`;
export const Card = styled.div`
  background: ${({ total }: CardProps): string => (total ? '#FF872C' : '#fff')};
  padding: 22px 32px;
  border-radius: 5px;
  color: ${({ total }: CardProps): string => (total ? '#fff' : '#363F5F')};

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
      font-size: 16px;
    }
  }

  h1 {
    margin-top: 14px;
    font-size: 36px;
    font-weight: normal;
    line-height: 54px;
  }
`;

export const TableContainer = styled.section`
  margin-top: 64px;

  table {
    width: 100%;
    border-spacing: 0 8px;

    th {
      color: #969cb3;
      font-weight: normal;
      padding: 20px 32px;
      text-align: left;
      font-size: 16px;
      line-height: 24px;
    }

    td {
      padding: 20px 32px;
      border: 0;
      background: #fff;
      font-size: 16px;
      font-weight: normal;
      color: #969cb3;

      &.title {
        color: #363f5f;
      }

      &.income {
        color: #12a454;
      }

      &.outcome {
        color: #e83f5b;
      }
    }

    td:first-child {
      border-radius: 8px 0 0 8px;
    }

    td:last-child {
      border-radius: 0 8px 8px 0;
    }
  }
`;
