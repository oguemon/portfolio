import React, { useState } from "react";
import { Link } from "gatsby";
import { sns_url } from "./constant";
import "../styles/header.scss";
import "../styles/spmenu.scss";

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
            <Link to="//forms.gle/SDnHnzGLH5Y4ynzz6" target="_blank" className="menu-item">CONTACT</Link>
          </div>
          <div className="sns-btn-list">
            <a href={sns_url.twitter}   target="_blank" rel="noreferrer" className="sns-btn twitter"></a>
            <a href={sns_url.instagram} target="_blank" rel="noreferrer" className="sns-btn instagram"></a>
            <a href={sns_url.github}    target="_blank" rel="noreferrer" className="sns-btn github"></a>
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
          <Link to="//forms.gle/SDnHnzGLH5Y4ynzz6" target="_blank" className="menu-item">
            <span className="en">CONTACT</span>
            <span className="ja">お問い合わせ</span>
          </Link>
        </div>
        <div className="sns-btn-list">
          <a href={sns_url.twitter}   target="_blank" rel="noreferrer" className="sns-btn twitter"></a>
          <a href={sns_url.instagram} target="_blank" rel="noreferrer" className="sns-btn instagram"></a>
          <a href={sns_url.github}    target="_blank" rel="noreferrer" className="sns-btn github"></a>
        </div>
      </div>
    </div>
  </>
}
