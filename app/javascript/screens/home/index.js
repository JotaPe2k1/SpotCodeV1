import React, { Fragment } from 'react';
import { Button, Columns, Heading } from 'react-bulma-components';
import styled from 'styled-components'
import SectionWrapper from '../../components/common/section_wrapper/'
 
const MainHeading = styled(Heading)`
  margin-top: 50px;
`
 
const ButtonSubscribe = styled(Button)`
  border-width: 2px;
  margin-top: 50px;
`
 
const DescriptionList = styled.ul`
  margin-top: 50px;
  font-size: 20px;
  margin-left: auto;
  list-style-type: square;
`
 
 
const HomeScreen = () => {
  return (
    <SectionWrapper>
      <Columns>
        <Columns.Column>
          <MainHeading className='has-text-weight-light has-text-centered has-text-white' size={1}>
            SEU APP DE <br /><span className='has-text-danger'><font color="dark">MÚSICA</font></span>
          </MainHeading>
        </Columns.Column>
      </Columns>
      <Columns className="is-centered is-mobile">
        <Columns.Column mobile={{ size: 8, offset: 1 }} desktop={{ size: 4, offset: 2 }}>
          <DescriptionList className='has-text-white'>
            <li>Suas <b>Músicas</b> em um só lugar</li>
            <li>Seus <b>Podcasts</b></li>
            <li>Os melhores <b>Lançamentos</b> você encontra aqui</li>
            <li>As novas <b>Descobertas</b> da musica</li>
          </DescriptionList>
        </Columns.Column>
      </Columns>
      <Columns className="has-text-centered">
        <Columns.Column>
            <a href='users/sign_up'>
            <ButtonSubscribe className="button is-danger is-outlined is-large">CADASTRE-SE</ButtonSubscribe>
            </a>
        </Columns.Column>
      </Columns>
    </SectionWrapper>
  );
}
export default HomeScreen;