import React, { Fragment } from 'react'
import { Navbar, Container, Columns, Button, Dropdown } from 'react-bulma-components'
import logoImage from '../../../assets/images/logo.png'
import styled from 'styled-components'
import { useLocation } from 'react-router-dom'
import { FaUserCog } from 'react-icons/fa'

const ColumnsFullWith = styled(Columns)`
  width: 100%;
  max-height: 120px;
  padding-top: 10px;
  padding-left: 10px;
  padding-bottom: 0px;
  height: auto;
  border-bottom-color: #FF3030 !important;
  border-bottom-style: solid;
  border-bottom-width: 1px;
`

const Logo = styled.img`
  max-width:100px;
  max-height:100px;
  width: auto;
  height: auto;
`

const Padding = styled.div`
  padding-top: 25px
`


const Menu = () => {
  let ActionButton;

  if (useLocation().pathname == '/') {
    ActionButton = <a href='/users/sign_in' className="is-pulled-right is-right">
      <Button className="button is-danger is-outlined">Logar</Button>
    </a>

  } else {
    ActionButton =  <Dropdown className='is-pulled-right is-right' color='black' label=      	
                      {<FaUserCog size="30px" />}>
                      <Dropdown.Item value="Editar Perfil">
                        <a href='/users/edit'>
                          Editar Perfil
                        </a>
                      </Dropdown.Item>
                      <Dropdown.Item value="LogOut">
                        <a href='/users/sign_out'>
                          LogOut
                        </a>
                      </Dropdown.Item>
                    </Dropdown>

  }


  return (
    <Fragment>
      <Navbar color="black">
        <Container>
          <ColumnsFullWith className='is-mobile'>
            <Columns.Column desktop={{ size: 2 }} mobile={{ size: 5 }}>
              <Logo src={logoImage} className='image'/>
            </Columns.Column>
            <Columns.Column>
              <Padding>
                {ActionButton}
              </Padding>
            </Columns.Column>
          </ColumnsFullWith>
        </Container>
      </Navbar>
    </Fragment>
  );
}
export default Menu;