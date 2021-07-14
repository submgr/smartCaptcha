(self.webpackChunksmartcaptcha=self.webpackChunksmartcaptcha||[]).push([[918],{2631:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return C}});var n=a(7294),l=a(6742),r=a(4973);var i=function(e){var t=e.metadata;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,r.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},n.createElement("div",{className:"pagination-nav__item"},t.previous&&n.createElement(l.Z,{className:"pagination-nav__link",to:t.previous.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(r.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")),n.createElement("div",{className:"pagination-nav__label"},"\xab ",t.previous.title))),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t.next&&n.createElement(l.Z,{className:"pagination-nav__link",to:t.next.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(r.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next")),n.createElement("div",{className:"pagination-nav__label"},t.next.title," \xbb"))))},s=a(2263),o=a(907),d=a(9306);var c={unreleased:function(e){var t=e.siteTitle,a=e.versionMetadata;return n.createElement(r.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){var t=e.siteTitle,a=e.versionMetadata;return n.createElement(r.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function m(e){var t=c[e.versionMetadata.banner];return n.createElement(t,e)}function u(e){var t=e.versionLabel,a=e.to,i=e.onClick;return n.createElement(r.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:n.createElement("b",null,n.createElement(l.Z,{to:a,onClick:i},n.createElement(r.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function v(e){var t,a=e.versionMetadata,l=(0,s.Z)().siteConfig.title,r=(0,o.gA)({failfast:!0}).pluginId,i=(0,d.J)(r).savePreferredVersionName,c=(0,o.Jo)(r),v=c.latestDocSuggestion,p=c.latestVersionSuggestion,h=null!=v?v:(t=p).docs.find((function(e){return e.id===t.mainDocId}));return n.createElement("div",{className:"alert alert--warning margin-bottom--md",role:"alert"},n.createElement("div",null,n.createElement(m,{siteTitle:l,versionMetadata:a})),n.createElement("div",{className:"margin-top--md"},n.createElement(u,{versionLabel:p.label,to:h.path,onClick:function(){return i(p.name)}})))}var p=function(e){var t=e.versionMetadata;return"none"===t.banner?n.createElement(n.Fragment,null):n.createElement(v,{versionMetadata:t})},h=a(1217);function E(e){var t=e.lastUpdatedAt,a=e.formattedLastUpdatedAt;return n.createElement(r.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:n.createElement("b",null,n.createElement("time",{dateTime:new Date(1e3*t).toISOString()},a))}}," on {date}")}function b(e){var t=e.lastUpdatedBy;return n.createElement(r.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:n.createElement("b",null,t)}}," by {user}")}function g(e){var t=e.lastUpdatedAt,a=e.formattedLastUpdatedAt,l=e.lastUpdatedBy;return n.createElement(n.Fragment,null,n.createElement(r.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&a?n.createElement(E,{lastUpdatedAt:t,formattedLastUpdatedAt:a}):"",byUser:l?n.createElement(b,{lastUpdatedBy:l}):""}},"Last updated{atDate}{byUser}"),!1)}var f=a(571),_=a(2122),N=a(9756),U=a(6010),T="iconEdit_2_ui",L=["className"],k=function(e){var t=e.className,a=(0,N.Z)(e,L);return n.createElement("svg",(0,_.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,U.Z)(T,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))};function Z(e){var t=e.editUrl;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener"},n.createElement(k,null),n.createElement(r.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}var w=a(6159),y="docItemContainer_33ec",A="lastUpdated_3DPF",M="docItemCol_3FnS";var C=function(e){var t,a=e.content,l=e.versionMetadata,r=a.metadata,s=a.frontMatter,d=s.image,c=s.keywords,m=s.hide_title,u=s.hide_table_of_contents,v=r.description,E=r.title,b=r.editUrl,_=r.lastUpdatedAt,N=r.formattedLastUpdatedAt,T=r.lastUpdatedBy,L=(0,o.gA)({failfast:!0}).pluginId,k=(0,o.gB)(L).length>1,C=!m&&void 0===a.contentTitle;return n.createElement(n.Fragment,null,n.createElement(h.Z,{title:E,description:v,keywords:c,image:d}),n.createElement("div",{className:"row"},n.createElement("div",{className:(0,U.Z)("col",(t={},t[M]=!u,t))},n.createElement(p,{versionMetadata:l}),n.createElement("div",{className:y},n.createElement("article",null,k&&n.createElement("span",{className:"badge badge--secondary"},"Version: ",l.label),n.createElement("div",{className:"markdown"},C&&n.createElement(w.N,null,E),n.createElement(a,null)),(b||_||T)&&n.createElement("footer",{className:"row docusaurus-mt-lg"},n.createElement("div",{className:"col"},b&&n.createElement(Z,{editUrl:b})),n.createElement("div",{className:(0,U.Z)("col",A)},(_||T)&&n.createElement(g,{lastUpdatedAt:_,formattedLastUpdatedAt:N,lastUpdatedBy:T})))),n.createElement(i,{metadata:r}))),!u&&a.toc&&n.createElement("div",{className:"col col--3"},n.createElement(f.Z,{toc:a.toc}))))}}}]);