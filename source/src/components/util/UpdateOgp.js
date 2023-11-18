import { useEffect } from "react";

function UpdateOgp({pageMeta}) {

    let funcGetPageUrl = function(input){
        try{
            new URL(input);
            return input;
        }catch(err){
            return document.URL;
        }
    }

    let funcGetImgUrl = function(input){
        try{
            new URL(input);
            return input;
        }catch(err){
            return 'https://jps.gg/logo.png';
        }
    }

    const pageTitle = pageMeta.title || 'Japan PvP Server (JPS)';
    const pageDescription = pageMeta.description || 'JPS';
    const pageOgTitle = pageTitle;
    const pageOgSiteName = 'JPS';
    const pageOgUrl = funcGetPageUrl(pageMeta.url);
    const pageOgImg = funcGetImgUrl(pageMeta.img);

    useEffect(() => {
        document.title = pageTitle;
        //
        const descEle = document.querySelector('META[name="description"]');
        descEle.setAttribute('content', pageDescription);
        //
        const ogpTitle = document.querySelector('META[property="og:title"]');
        ogpTitle.setAttribute('content', pageOgTitle);
        //
        const ogpDesc = document.querySelector('META[property="og:description"]');
        ogpDesc.setAttribute('content', pageDescription);
        //
        const ogpSiteName = document.querySelector('META[property="og:site_name"]');
        ogpSiteName.setAttribute('content', pageOgSiteName);
        //
        const ogpUrl = document.querySelector('META[property="og:url"]');
        ogpUrl.setAttribute('content', pageOgUrl);
        //
        const ogpImage = document.querySelector('META[property="og:image"]');
        ogpImage.setAttribute('content', pageOgImg);
    }, [pageTitle, pageDescription, pageOgTitle, pageOgSiteName, pageOgUrl, pageOgImg]);

    return null;
}

export default UpdateOgp;