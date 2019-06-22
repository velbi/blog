import React from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery';

import './styles/styles.scss'
import 'normalize.css/normalize.css'
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom'

import MainPage from './MainPage/Mainpage.js'
import CategoryPage from './CategoryPage/CategoryPage.js'
import VideoPage from './VideoPage/VideoPage.js'
import PortfolioPage from './PortfolioPage/PortfolioPage.js'
import AboutPage from './AboutPage/AboutPage.js'



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

        <NavLink className="left" to="/category">
          <div className="header__name">velbi</div>
        </NavLink>



        <div className="right">
          <NavLink className="header__right__li" to="/category" activeClassName="is-active">Category</NavLink>
          <NavLink className="header__right__li" to="/video" activeClassName="is-active">Video</NavLink>
          <NavLink className="header__right__li" to="/portfolio" activeClassName="is-active">Portfolio</NavLink>
          <NavLink className="main__button" to="/about" activeClassName="is-active">About Me!</NavLink>
        </div>
      </div>



      <div className="navbar__mobile">
        <NavLink className="left" to="/category">
          <div className="header__name">velbi</div>
        </NavLink>
      <div className="mobile__right">
        <div className="mobile-menu-btn"><span></span></div>
      </div>
    </div>

    <nav className="mobile__nav">
      <NavLink className="mobile__link" to="/category">Category</NavLink>
      <NavLink className="mobile__link" to="/video" >Video</NavLink>
      <NavLink className="mobile__link" to="/portfolio">Portfolio</NavLink>
      <NavLink className="mobile__link" to="/about" >About Me!</NavLink>
    </nav>

    </header>
  )
    

  const Footer = () => (
    <footer className="footer">
      <p className="footer__text"> © 2019 velbi.io </p>
      <br />
      <p className="footer__text"> 이용약관 | 개인정보 보호 | 제안/의견 보내기 </p>
    </footer>
  )
  
  
  const NotFoundPage = () => (
    <h1>
      404! <Link to="/category">Go Home</Link>
    </h1>
  )


const routes = (
    <ScrollToTop>
        <BrowserRouter>
            <Header />
            <Switch>
              
                <Route path="/" component={MainPage} exact={true} />
                <Route path="/category" component={CategoryPage}  />
                <Route path="/video" component={VideoPage}  />
                <Route path="/portfolio" component={PortfolioPage}/>
                <Route path="/about" component={AboutPage}/>
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

