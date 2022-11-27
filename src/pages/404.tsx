import React from "react";
import { Link } from "gatsby";
import Header from "../components/header";
import Footer from "../components/footer";
import SEO from "../components/seo";

export const Head = () => <SEO title="404 Not Found" description="お探しのページは見つかりませんでした。" />

export default function NotFound() {

  return <>
    <Header />
    <main>
      <div className="wrapper">
        <h1>404 Not Found</h1>
        <Link to="/">トップページへ</Link>
      </div>
    </main>
    <Footer />
  </>
}
