(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{139:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",function(){return g});n(34);var a=n(7),r=n.n(a),i=(n(170),n(145)),o=n(144),c=n(152),l=n(164),u=n.n(l),s=n(154),d=n(0),p=n.n(d),m=n(166),f=n.n(m),h=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data.markdownRemark,t=f()(this.props,"data.site.siteMetadata.title"),n=e.excerpt,a=this.props.pageContext,r=a.previous,l=a.next;return p.a.createElement(s.a,{location:this.props.location},p.a.createElement(u.a,{htmlAttributes:{lang:"en"},meta:[{name:"description",content:n}],title:e.frontmatter.title+" | "+t}),p.a.createElement("h1",null,e.frontmatter.title),p.a.createElement("p",{style:Object.assign({},Object(o.b)(-.2),{display:"block",marginBottom:Object(o.a)(1),marginTop:Object(o.a)(-1)})},e.frontmatter.date),p.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.html}}),p.a.createElement("hr",{style:{marginBottom:Object(o.a)(1)}}),p.a.createElement(c.a,null),p.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},p.a.createElement("li",null,r&&p.a.createElement(i.Link,{to:r.fields.slug,rel:"prev"},"← ",r.frontmatter.title)),p.a.createElement("li",null,l&&p.a.createElement(i.Link,{to:l.fields.slug,rel:"next"},l.frontmatter.title," →"))))},t}(p.a.Component);t.default=h;var g="3804820323"},144:function(e,t,n){"use strict";n.d(t,"a",function(){return l}),n.d(t,"b",function(){return u});var a=n(159),r=n.n(a),i=n(160),o=n.n(i);n(161),o.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"}}},delete o.a.googleFonts;var c=new r.a(o.a);var l=c.rhythm,u=c.scale},145:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return f}),n.d(t,"StaticQueryContext",function(){return p}),n.d(t,"StaticQuery",function(){return m});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=n(143),l=n.n(c);n.d(t,"Link",function(){return l.a}),n.d(t,"withPrefix",function(){return c.withPrefix}),n.d(t,"navigate",function(){return c.navigate}),n.d(t,"push",function(){return c.push}),n.d(t,"replace",function(){return c.replace}),n.d(t,"navigateTo",function(){return c.navigateTo});var u=n(146),s=n.n(u);n.d(t,"PageRenderer",function(){return s.a});var d=n(35);n.d(t,"parsePath",function(){return d.a});var p=r.a.createContext({}),m=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},146:function(e,t,n){var a;e.exports=(a=n(150))&&a.default||a},150:function(e,t,n){"use strict";n.r(t);n(34);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=n(52),l=n(2),u=function(e){var t=e.location,n=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:n},n.json))};u.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=u},152:function(e,t,n){"use strict";var a=n(7),r=n.n(a),i=(n(162),n(163),n(0)),o=n.n(i),c=n(153),l=n.n(c),u=n(144),s=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return o.a.createElement("div",{style:{display:"flex",marginBottom:Object(u.a)(2.5)}},o.a.createElement("img",{src:l.a,alt:"Alamgir Qazi",style:{borderRadius:"50%",marginRight:Object(u.a)(.5),marginBottom:0,width:Object(u.a)(2),height:Object(u.a)(2)}}),o.a.createElement("p",null,"Hey there, I'm Alamgir Qazi. I work as a full-stack JavaScript Developer. I'll be sharing what I've learned about Angular, Node, Docker, Kubernetes and other cool things."))},t}(o.a.Component);t.a=s},153:function(e,t,n){e.exports=n.p+"static/profile-pic-60e61d84dd39be91e838f8204343d0bc.jpg"},154:function(e,t,n){"use strict";n(34);var a=n(7),r=n.n(a),i=n(144),o=n(145),c=n(0),l=n.n(c),u=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e,t=this.props,n=t.location,a=t.children;return e="/tech-blog/"===n.pathname?l.a.createElement("h1",{style:Object.assign({},Object(i.b)(1.5),{marginBottom:Object(i.a)(1.5),marginTop:0})},l.a.createElement(o.Link,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},"tech-blog")):l.a.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",marginTop:0,marginBottom:Object(i.a)(-1)}},l.a.createElement(o.Link,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},"tech-blog")),l.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(i.a)(24),padding:Object(i.a)(1.5)+" "+Object(i.a)(.75)}},e,a)},t}(l.a.Component);t.a=u},170:function(e,t,n){}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-d0eb4ad88d7f7a9f5214.js.map