import React from "react";
import { Helmet } from "react-helmet";
import { site_title } from "../components/constant";

export default function SEO({ title, description }) {

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
      ]}
    />
  </>
}
