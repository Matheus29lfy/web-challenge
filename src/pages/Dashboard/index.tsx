import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';

import Money from '../../assets/Money.svg';
import Union from '../../assets/Union.svg';
import Add from '../../assets/Add.svg';

import {
  Container,
  LogoTitle,
  Titlel,
  TextT,
  MenuLeft,
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
          <Titlel>
            <TextT>LOGOTIPO</TextT>
          </Titlel>

          <MenuLeft>
            <a href="place">Link</a>
            <a href="place">Link</a>
            <a href="place">Link</a>
            <a href="place">Link</a>

            <div id="submenu1">
              <h1>Submenu</h1>
              <a href="place">Link</a>
              <a href="place">Link</a>
              <a href="place">Link</a>
              <a href="place">Link</a>
            </div>

            <div id="submenu2">
              <h1>Submenu</h1>
              <a href="place">Link</a>
              <a href="place">Link</a>
              <a href="place">Link</a>
              <a href="place">Link</a>
            </div>
          </MenuLeft>
        </LogoTitle>

        <Title>Pessoas que vão ganhar dinheiro</Title>

        <ListPeople>
          <img src={Union} alt="title" />
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
                R$0,00
              </div>
            </div>
            <Link to="/" onClick={handleOpen}>
              <img id="add" src={Add} alt="add" />
              Clique para adicionar reais
            </Link>
            <Modal isOpen={modalIsOpen} style={customStyle}>
              <Link className="close" to="/" onClick={handleClose}>
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
          <TitleRight>
            <img src={Money} id="right-money" alt="money" />
            <div>Você ainda não adicionou nada</div>
          </TitleRight>
        </ListPeople>

        <ListPeople>
          <img src={Union} alt="title" />
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
                R$0,00
              </div>
            </div>
            <a href="/">
              <img id="add" src={Add} alt="add" />
              Clique para adicionar reais
            </a>
          </div>
          <TitleRight>
            <img src={Money} id="right-money" alt="money" />
            <div>Você ainda não adicionou nada</div>
          </TitleRight>
        </ListPeople>

        <ListPeople>
          <img src={Union} alt="title" />
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
                R$0,00
              </div>
            </div>
            <a href="reload">
              <img id="add" src={Add} alt="add" />
              Clique para adicionar reais
            </a>
          </div>
          <TitleRight>
            <img src={Money} id="right-money" alt="money" />
            <div>Você ainda não adicionou nada</div>
          </TitleRight>
        </ListPeople>

        <a href="/dashmobile">IR PARA VERSÃO MOBILE</a>
      </Container>
    </>
  );
};

export default Dashboard;
