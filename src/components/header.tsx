import React, { useState } from "react";
import { Link } from "gatsby";
import "../styles/header.scss";
import "../styles/spmenu.scss";
import { SnsButtonList } from "./sns-button-list";
import { contact_url } from "./constant";

export default function Header() {

  const [sp_menu_opened, setSpMenuOpened] = useState(false);
  const [sp_menu_display, setSpMenuDisplay] = useState(false);

  const openSpMenu = () => {
    setSpMenuDisplay(true);
    setTimeout(() => {
      setSpMenuOpened(true);
    }, 100) // わずかな時間差を置く
  };

  const closeSpMenu = () => {
    setSpMenuOpened(false);
    setTimeout(() => {
      setSpMenuDisplay(false);
    }, 300)
  };

  return <>
    <header>
      <div className="wrapper">
        <Link to="/" className="header-title-container">
          <div className="title-main">OGURA KATSUYA</div>
          <div className="title-sub">Web Designer / Engineer</div>
        </Link>
        <div className="pc-only-container">
          <div className="menu-list">
            <Link to="/" className="menu-item">TOP</Link>
            <Link to="/profile" className="menu-item">PROFILE</Link>
            <Link to="/presentation" className="menu-item">PRESENTATION</Link>
            <a href={contact_url} target="_blank" className="menu-item">CONTACT</a>
          </div>
          <div className="sns-btn-list-container">
            <SnsButtonList />
          </div>
        </div>
        <div className="sp-menu-btn" onClick={openSpMenu}></div>
      </div>
    </header>
    {/* スマホメニュー */}
    <div className={"sp-menu" + (sp_menu_opened? " open" : "")} style={{display: sp_menu_display? "block" : "none"}}>
      <div className="sp-menu-close-btn" onClick={closeSpMenu}></div>
      <div className="sp-menu-container">
        <div className="header-title-container">
          <div className="title-main">OGURA KATSUYA</div>
          <div className="title-sub">Web Designer / Engineer</div>
        </div>
        <div className="menu-list">
          <Link to="/" className="menu-item">
            <span className="en">TOP</span>
            <span className="ja">トップページ</span>
          </Link>
          <Link to="/profile" className="menu-item">
            <span className="en">PROFILE</span>
            <span className="ja">自己紹介</span>
          </Link>
          <Link to="/presentation" className="menu-item">
            <span className="en">PRESENTATION</span>
            <span className="ja">登壇実績</span>
          </Link>
          <a href={contact_url} target="_blank" className="menu-item">
            <span className="en">CONTACT</span>
            <span className="ja">お問い合わせ</span>
          </a>
        </div>
        <SnsButtonList />
      </div>
    </div>
  </>
}
