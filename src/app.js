import React from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery';

import './styles/styles.scss'
import 'normalize.css/normalize.css'
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom'

import MainPage from './MainPage/Mainpage.js'
import StudyPage from './StudyPage/StudyPage.js'
import TechTreePage from './TechTreePage/TechTreePage.js'
import LoginPage from './LoginPage/LoginPage.js'


class ScrollToTop extends React.Component {
    componentDidUpdate(prevProps) {
      if (this.props.location !== prevProps.location) {
        window.scrollTo(0, 0)
      }
    }
    render() {
      return this.props.children
    }
}

  const Header = () => (
    <header className="header">
      <div className="navbar">

        <NavLink className="left" to="/">
          <div className="header__name">velbi</div>
        </NavLink>



        <div className="right">
          <NavLink className="header__right__li" to="/study" activeClassName="is-active">스터디</NavLink>
          <NavLink className="header__right__li" to="/techtree" activeClassName="is-active">테크트리</NavLink>
          <NavLink className="header__right__li" to="/login" activeClassName="is-active">가입하기</NavLink>
          <NavLink className="main__button" to="/login" activeClassName="is-active">로그인</NavLink>
        </div>
      </div>



      <div className="navbar__mobile">
        <NavLink className="left" to="/">
          <div className="header__name">velbi</div>
        </NavLink>
      <div className="mobile__right">
        <div className="mobile-menu-btn"><span></span></div>
      </div>
    </div>

    <nav className="mobile__nav">
      <NavLink className="mobile__link" to="/study">스터디</NavLink>
      <NavLink className="mobile__link" to="/techtree" >테크트리</NavLink>
      <NavLink className="mobile__link" to="/login">가입하기</NavLink>
      <NavLink className="mobile__link" to="login" >로그인</NavLink>
    </nav>

    </header>
  )
  

  const Footer = () => (
    <footer className="footer">
      <p className="footer__text"> © velbi.io </p>
      <br />
      <p className="footer__text"> 이용약관 | 개인정보 보호 | 제안/의견 보내기 </p>
    </footer>
  )
  
  
  const NotFoundPage = () => (
    <h1>
      404! <Link to="/">Go Home</Link>
    </h1>
  )


const routes = (
    <ScrollToTop>
        <BrowserRouter>
            <Header />
            
            <Switch>
            
                <Route path="/" component={MainPage} exact={true} />
                <Route path="/study" component={StudyPage} />
                <Route path="/techtree" component={TechTreePage} />
                <Route path="/login" component={LoginPage} />
                <Route component={NotFoundPage} />
    
            
            </Switch>

            <Footer />
        </BrowserRouter>
    </ScrollToTop>

  )
  
  
const appRoot = document.getElementById('app')
ReactDOM.render(routes, appRoot)

// Animation menu icon & mobile menu bar
$('.mobile__right').click(function () {
    $('.mobile-menu-btn').toggleClass('open');
    $('.mobile__nav').slideToggle(200);
  });

