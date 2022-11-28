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
    <script type="application/ld+json" dangerouslySetInnerHTML={{
      __html: `
      {
        "@context": "https://schema.org/",
        "@type": "Person",
        "name": "小倉 且也",
        "url": "https://ogura.biz/",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "JP",
          "addressRegion": "東京都",
          "addressLocality": "千代田区"
        },
        "alumniOf": {
          "@type": "CollegeOrUniversity",
          "name": "大阪大学",
          "url": "https://www.osaka-u.ac.jp/",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "JP",
            "addressRegion": "大阪府",
            "addressLocality": "吹田市",
            "streetAddress": "山田丘1-1",
            "postalCode": "565-0871"
          }

        },
        "award": "第6回学生スマートフォンアプリコンテスト 最優秀賞（2018）",
        "familyName": "小倉",
        "givenName": "且也",
        "jobTitle": "Web開発者, ブロガー",
        "publishingPrinciples": [
          {
            "@type": "WebSite",
            "name": "おぐえもん.com",
            "url": "https://oguemon.com/",
            "dateCreated": "2016-12-18"
          },
          {
            "@type": "WebSite",
            "name": "簡単！ザックリ手取り給料計算機",
            "url": "https://oguemon.com/tax-calc/",
            "dateCreated": "2018-12-07"
          },
          {
            "@type": "Book",
            "name": "大学1年生もバッチリ分かる線形代数入門",
            "url": "http://www.pleiades-publishing.co.jp/genre/sugaku.html",
            "author": "小倉 且也",
            "bookFormat": "Paperback",
            "dateCreated": "2021-06-18",
            "isbn": "9784903814148",
            "numberOfPages": "236",
            "publisher": {
              "@type": "Organization",
              "name": "プレアデス出版",
              "url": "http://www.pleiades-publishing.co.jp/"
            }
          }
        ],
        "worksFor": {
          "@type": "Organization",
          "name": "サイボウズ株式会社",
          "url": "https://cybozu.co.jp/",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "JP",
            "addressRegion": "東京都",
            "addressLocality": "中央区",
            "streetAddress": "日本橋二丁目7-1 東京日本橋タワー27階",
            "postalCode": "103-6027"
          }
        }
      }
      `
    }} />
  </>
}
