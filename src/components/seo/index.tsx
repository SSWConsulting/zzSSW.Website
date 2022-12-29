import React from "react";
import { useSiteMetadata } from "../../hooks/useSiteMetadata";

export const SEO = ({ title, description, pathname, children }) => {
    const {
        title: defaultTitle,
        description: defaultDescription,
        image,
        siteUrl,
        twitterUsername,
    } = useSiteMetadata()

    const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        image: `${siteUrl}${image}`,
        url: `${siteUrl}${pathname || ``}`,
        twitterUsername,
    }

    return (
        <>
            <title>{seo.title}</title>
            <link rel="sitemap" type="application/xml" href="/ssw/sitemap.xml"></link>
            <meta name="description" content={seo.description} />
            <meta name="image" content={seo.image} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={seo.title} />
            <meta name="twitter:url" content={seo.url} />
            <meta name="twitter:description" content={seo.description} />
            <meta name="twitter:image" content={seo.image} />
            <meta name="twitter:creator" content={seo.twitterUsername} />
            <link rel="icon" href="/SSW_Squares.png" />
            {children}
        </>
    );
}