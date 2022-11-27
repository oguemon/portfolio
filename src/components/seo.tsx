import React from "react";
import { useLocation } from "@reach/router"
import { site_title, site_baseurl } from "../components/constant";
import default_ogpimg from "../assets/ogp.png";

export default function SEO({ title, description, ogpimg = "" }) {

  const location = useLocation();
  const defailt_ogpimg_url = site_baseurl + default_ogpimg;

  return <>
    <title>{`${title}｜${site_title}`}</title>
    <meta name="description" content={description}/>
    <meta property="og:title" content={`${title}｜${site_title}`}/>
    <meta property="og:type" content={(location.pathname == "/")? "website" : "article"}/>
    <meta property="og:url" content={location.href}/>
    <meta property="og:image" content={(ogpimg !== "")? ogpimg : defailt_ogpimg_url}/>
    <meta property="og:site_name" content={site_title}/>
    <meta property="og:description" content={description}/>
    <meta name="twitter:card" content="summary_large_image"/>
    <meta name="twitter:site" content="@oguemon_com"/>
  </>
}
