import React from "react";
import "../styles/footer.scss";

export default function Footer() {
  const year = (new Date()).getFullYear();

  return <>
    <footer>
      <div className="wrapper">
        <div className="copyright">Copyright © 2021-{year} OGURA KATSUYA All Rights Reserved.</div>
      </div>
    </footer>
  </>
}
