import React from 'react'

const Wiki = () => {

  // .htaccess
  // RewriteEngine on
  // RewriteRule ^wiki/(.*)$ https://w.atwiki.jp/jpsgg/$1 [L,R=301]
  //
  return (
      <div>redirect to <a href={"https://w.atwiki.jp/jpsgg/"}>https://w.atwiki.jp/jpsgg/</a></div>
  )
}

export default Wiki
