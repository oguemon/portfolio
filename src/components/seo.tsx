import React from "react";
import { useLocation } from "@reach/router"
import { Helmet } from "react-helmet";
import { site_title, site_baseurl } from "../components/constant";
import default_ogpimg from "../assets/ogp.png";

export default function SEO({ title, description, ogpimg = "" }) {

  const location = useLocation();
  const defailt_ogpimg_url = site_baseurl + default_ogpimg;

  return <>
    <Helmet
      htmlAttributes={
        {
          lang: "ja-jp",
        }
      }
      title = { title }
      titleTemplate = { "%s｜" + site_title }
      meta = {[
        {
          name: "description",
          content: description,
        },
        {
          property: "og:title",
          content: title + "|" + site_title,
        },
        {
          property: "og:type",
          content: (location.pathname == "/")? "website" : "article",
        },
        {
          property: "og:url",
          content: location.href,
        },
        {
          property: "og:image",
          content: (ogpimg !== "")? ogpimg : defailt_ogpimg_url,
        },
        {
          property: "og:site_name",
          content: site_title,
        },
        {
          property: "og:description",
          content: description,
        },
        {
          name: "twitter:card",
          content: "summary_large_image",
        },
        {
          name: "twitter:site",
          content: "@oguemon_com",
        },
      ]}
    />
  </>
}
