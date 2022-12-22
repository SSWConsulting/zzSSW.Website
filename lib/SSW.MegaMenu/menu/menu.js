import React from "react";
import {
  MegaMenu,
  menuContent,
  menuMobile,
  visibleXs,
  visibleSm,
  sbToggleLeft,
  menuSearch,
  searchBox,
} from "./menu.module.css";
import { Menu } from 'ssw.megamenu';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import cs from "classnames";
import axios from "axios";

const searchUrl = `https://www.google.com.au/search?q=site:ssw.com.au%20`;
class TopMenu extends React.Component {
  menu_Search(search) {
    if (window) {
      window.open(searchUrl + search);
    }
  }

  handleKeyDownOnMenuSearchInput(event) {
    if (event.key === "Enter") {
      this.menu_Search(event.target.value);
    }
  }

  render() {
    const { menuModel } = this.props;
    return (
      // this.state.menuModel &&
      <div className={MegaMenu}>
        <div className={menuContent}>
          <div className={cs(menuMobile, visibleXs, visibleSm)}>
            <div
              className={sbToggleLeft}
              onClick={() => this.props.onClickToggle()}
            >
              <FontAwesomeIcon icon={faBars} />
            </div>
          </div>
          <Menu
            prefix={this.props.prefix}
            menuModel={menuModel}
          ></Menu>
          <div className={menuSearch}>
            <input
              type="text"
              className={searchBox}
              onKeyDown={(event) => this.handleKeyDownOnMenuSearchInput(event)}
            />
          </div>
        </div>
      </div>
    );
  }
}
class Wrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuModel: require("../data/menu.json"),
      menuLoaded: false,
    };
  }

  componentDidMount() {
    let currentComponent = this;
    axios
      .get("https://SSWConsulting.github.io/SSW.Website.Menu.json/menu.json")
      .then(function (response) {
        currentComponent.setState({ menuModel: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    const { menuModel, menuLoaded } = this.state;

    return (
      <TopMenu menuModel={menuModel} menuLoaded={menuLoaded} {...this.props} />
    );
  }
}

export default Wrapper;
