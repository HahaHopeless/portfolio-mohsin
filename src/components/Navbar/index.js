import "./styles.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";
import { setGlobalLanguage } from "../../store/actionTypes";
import { useLocation } from "react-router-dom";

const Navbar = (props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const setLang = (e) => {
    props.setGlobalLanguage(e);
    // Close language menu if it's open
    setIsLangMenuOpen(false);
  };

  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('.navbar-menu') && 
          !event.target.closest('.menu-toggle')) {
        setIsMenuOpen(false);
      }
      
      if (isLangMenuOpen && !event.target.closest('.lang-selector')) {
        setIsLangMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen, isLangMenuOpen]);

  return (
    <header className={`modern-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="nav-center">
          <nav className="nav-links">
            <Link 
              to="/" 
              className={location.pathname === "/" ? "nav-item active" : "nav-item"}
            >
              <FormattedMessage id="home" />
            </Link>
            <Link 
              to="/projects" 
              className={location.pathname === "/projects" ? "nav-item active" : "nav-item"}
            >
              <FormattedMessage id="projects" />
            </Link>
          </nav>
        </div>
        
        <div className="desktop-menu">
          
          <div className="lang-selector animated" onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}>
            <img
              src={require(`../../assets/icons/${props.lang}.svg`)}
              className="lang-icon"
              alt={props.lang}
            />
            <span className="lang-current">{props.lang.toUpperCase()}</span>
            
            <div className={`lang-dropdown ${isLangMenuOpen ? 'visible' : ''}`}>
              <div 
                className={`lang-option ${props.lang === "en" ? "active" : ""}`}
                onClick={(e) => {
                  e.stopPropagation();
                  setLang("en");
                }}
              >
                <img
                  src={require("../../assets/icons/en.svg")}
                  className="lang-icon"
                  alt="English"
                />
                <span>EN</span>
              </div>
              <div 
                className={`lang-option ${props.lang === "de" ? "active" : ""}`}
                onClick={(e) => {
                  e.stopPropagation();
                  setLang("de");
                }}
              >
                <img
                  src={require("../../assets/icons/de.svg")}
                  className="lang-icon"
                  alt="Deutsch"
                />
                <span>DE</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Mobile menu toggle */}
        <button 
          className={`menu-toggle ${isMenuOpen ? 'active' : ''}`} 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        
        {/* Mobile menu */}
        <div className={`navbar-menu ${isMenuOpen ? 'open' : ''}`}>
          <nav className="mobile-nav-links">
            <Link 
              to="/" 
              className={location.pathname === "/" ? "mobile-nav-item active" : "mobile-nav-item"}
              onClick={() => setIsMenuOpen(false)}
            >
              <FormattedMessage id="home" />
            </Link>
            <Link 
              to="/projects" 
              className={location.pathname === "/projects" ? "mobile-nav-item active" : "mobile-nav-item"}
              onClick={() => setIsMenuOpen(false)}
            >
              <FormattedMessage id="projects" />
            </Link>
            
            <div className="mobile-lang-selector">
              <div className="mobile-lang-title">
                <FormattedMessage id="language" defaultMessage="Language" />
              </div>
              <div className="mobile-lang-options">
                <div 
                  className={`mobile-lang-option ${props.lang === "en" ? "active" : ""}`}
                  onClick={() => setLang("en")}
                >
                  <img
                    src={require("../../assets/icons/en.svg")}
                    className="lang-icon"
                    alt="English"
                  />
                  <span>English</span>
                </div>
                <div 
                  className={`mobile-lang-option ${props.lang === "de" ? "active" : ""}`}
                  onClick={() => setLang("de")}
                >
                  <img
                    src={require("../../assets/icons/de.svg")}
                    className="lang-icon"
                    alt="Deutsch"
                  />
                  <span>Deutsch</span>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    lang: state.languageReducer.lang,
  };
};

export default connect(mapStateToProps, { setGlobalLanguage })(Navbar);
