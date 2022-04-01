import Link from 'next/link';
import styles from './Layout.module.css';
import gradeTopicChallenges from "../constants/gradeTopicChallenges";
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { AppContext } from 'next/app';
import { useAppContext } from '../context/state';
import { connected } from 'process';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faSquareRootVariable, faAt, faUserPen, faCircleQuestion, faLaptopCode } from '@fortawesome/free-solid-svg-icons';

const Layout: React.FC<{}> = ({ children }) => {

  return <>
    <Navbar bg="light" expand="md">
      <Container>
        <Link href='/' passHref><Navbar.Brand href="#home">
          <FontAwesomeIcon icon={faSquareRootVariable}></FontAwesomeIcon>{'   '}
          SA Math Challenge
        </Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Grades" id="basic-nav-dropdown">
              {gradeTopicChallenges.map((grade, gradeIndex) => {
                return <Link key={gradeIndex} href={`/challenges/grade/${Number(gradeIndex) + 1}`} passHref>
                  <NavDropdown.Item>{grade.name}</NavDropdown.Item>
                </Link>
              })}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    {children}

  </>
}

export default Layout;

