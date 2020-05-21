import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Modal from 'react-modal';
import Money from '../../assets/Money.svg';
import Vector from '../../assets/Vector.svg';
import Add from '../../assets/Add.svg';

import {
  Container,
  LogoTitle,
  Titlel,
  TextT,
  Title,
  ListPeople,
  TitleRight,
} from './styles';

const Dashboard: React.FC = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const customStyle = {
    content: {
      width: '600px',
      height: '391px',
      backgroundColor: '#FFFFFF',
      decoration: 'none',

      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  function handleOpen() {
    return setModalIsOpen(true);
  }

  function handleClose() {
    return setModalIsOpen(false);
  }
  return (
    <>
      <Container>
        <LogoTitle>
          <img src={Vector} alt="vector" />
          <Titlel>
            <TextT>LOGOTIPO</TextT>
          </Titlel>
        </LogoTitle>
        <Title>Pessoas que vão ganhar dinheiro</Title>

        <ListPeople>
          <div>
            <strong>TITLE</strong>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco
            </p>
            <p className="value">Total R$200,00</p>
            <div className="progress">
              <div className="progress-done" data-done="70">
                R$ 0,00
              </div>
            </div>
            <Link to="/dashmobile" onClick={handleOpen}>
              <img id="add" src={Add} alt="add" />
              Clique para adicionar reais
            </Link>
            <Modal isOpen={modalIsOpen} style={customStyle}>
              <Link className="close" to="/dashmobile" onClick={handleClose}>
                X
              </Link>
              <Link className="close" to="/">
                R$25,00
              </Link>
              <Link to="/">R$25,00</Link>
              <Link to="/">R$25,00</Link>
              <Link to="/">R$25,00</Link>
            </Modal>
          </div>
        </ListPeople>
        <TitleRight>
          <img src={Money} id="right-money" alt="money" />
          <div>Você não adicionou nada</div>
        </TitleRight>
        <a href="/">IR PARA VERSÃO DESKTOP</a>
      </Container>
    </>
  );
};

export default Dashboard;
