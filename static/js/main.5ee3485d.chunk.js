(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{107:function(e,t,n){"use strict";n(0);var i=n(2);t.a=function(e){return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("video",{className:e.className,autoPlay:e.autoPlay,loop:e.loop,muted:e.muted,style:e.style,controls:e.controls,children:[Object(i.jsx)("source",{src:e.src,type:e.type}),"Your browser does not support the video tag."]})})}},138:function(e,t,n){},141:function(e,t,n){},153:function(e,t,n){"use strict";n.r(t);var i,a,c=n(0),s=n.n(c),o=n(36),r=n.n(o),l=(n(138),n(23)),d=n(24),h=n(20),m=n(26),j=n(25),u=n(116),b=n.n(u),A=(n(139),n(84)),p=n.n(A),O=(n(140),n(166)),g=(n(141),n(171)),x=n(172),v=n(168),f=n(165),k=n(117),I=n.n(k),C=n(2),y=["https://twitter.com/MaoChe1","https://www.facebook.com/maochemike","https://www.youtube.com/channel/UCOPg0E_8NruOo3Xo_gfoojw","https://www.instagram.com/mike.codetech/"],w=function(e){Object(m.a)(n,e);var t=Object(j.a)(n);function n(e){var i;return Object(l.a)(this,n),(i=t.call(this,e)).state={id:e.id},i}return Object(d.a)(n,[{key:"render",value:function(){return Object(C.jsx)("div",{id:this.state.id,children:Object(C.jsxs)("div",{className:"footer",children:[Object(C.jsxs)(g.a,{stackable:!0,inverted:!0,children:[Object(C.jsxs)(g.a.Column,{width:4,children:[Object(C.jsx)(x.a,{inverted:!0,as:"h4",textAlign:"left",content:"Interest in"}),Object(C.jsx)("p",{children:"Design & 3D Modelling"})]}),Object(C.jsxs)(g.a.Column,{width:4,children:[Object(C.jsx)(x.a,{inverted:!0,as:"h4",textAlign:"left",content:"View Source Code on Github"}),Object(C.jsxs)(v.a,{link:!0,inverted:!0,style:{textAlign:"left"},children:[Object(C.jsx)(v.a.Item,{as:"a",href:"https://github.com/mikemaoche/RecipeFinder",children:"Recipe Finder"}),Object(C.jsx)(v.a.Item,{as:"a",href:"https://github.com/mikemaoche/ReduxOnBoarding",children:"Redux OnBoarding"}),Object(C.jsx)(v.a.Item,{as:"a",href:"https://github.com/mikemaoche/PHPWebsiteEnglishVersion",children:"Streaming Website"}),Object(C.jsx)(v.a.Item,{as:"a",href:"https://github.com/mikemaoche/Xmas",children:"Christmas Website"}),Object(C.jsx)(v.a.Item,{as:"a",href:"https://github.com/mikemaoche/PHPWebsiteEnglishVersion",children:"Automated Appartment Seeker"})]})]}),Object(C.jsxs)(g.a.Column,{width:6,children:[Object(C.jsx)(x.a,{inverted:!0,as:"h4",textAlign:window.matchMedia("(max-width: 1024px)").matches?"left":"center",content:"Stay Connected With Me"}),Object(C.jsx)("p",{style:{textAlign:window.matchMedia("(max-width: 1024px)").matches?"left":"center"},children:"Follow me through social media. If you appreciate leave me a like !"})]})]}),Object(C.jsx)(f.a,{inverted:!0,section:!0}),Object(C.jsx)(I.a,{links:y,color:"rgba(230,130,220,1)",hoverColor:"white"}),Object(C.jsxs)(v.a,{horizontal:!0,inverted:!0,divided:!0,link:!0,size:"small",children:[Object(C.jsx)(v.a.Item,{as:"a",href:"#",children:"Site Map"}),Object(C.jsx)(v.a.Item,{as:"a",href:"#",children:"Terms and Conditions"}),Object(C.jsx)(v.a.Item,{as:"a",href:"#",children:"Privacy Policy"})]})]})})}}]),n}(c.Component),B=n(167),S=n(170),H=n(122),P={hireMe:{position:"absolute",zIndex:4,top:"43%",left:"43.5%",width:"200px"},logo:{position:"absolute",top:0,left:"40%",zIndex:4},buttonFooter:{position:"fixed",zIndex:10,bottom:"5%",right:"2%"}},M=function(e){Object(m.a)(n,e);var t=Object(j.a)(n);function n(e){var i;return Object(l.a)(this,n),(i=t.call(this,e)).handleItemClick=function(e,t){var n=t.name;i.setState({activeItem:n},i.props.handleIndex(n))},i.state={id:e.id,activeItem:e.pageName,menu:!1,prevScrollY:window.pageYOffset},i.handleItemClick=i.handleItemClick.bind(Object(h.a)(i)),i.changeBgMenu=i.changeBgMenu.bind(Object(h.a)(i)),i}return Object(d.a)(n,[{key:"changeBgMenu",value:function(){var e=window.pageYOffset;this.state.prevScrollY>=e?document.getElementsByClassName("menuHeader")[0].style.top="0px":document.getElementsByClassName("menuHeader")[0].style.top="-50px",this.setState({prevScrollY:e})}},{key:"render",value:function(){window.addEventListener("scroll",this.changeBgMenu);var e=this.state.activeItem;return Object(C.jsxs)("div",{id:this.state.id,children:[Object(C.jsxs)(B.a,{className:"menuHeader",inverted:!0,pointing:!0,secondary:!0,stackable:!0,children:[Object(C.jsx)(B.a.Item,{name:"Home",active:"Home"===e,onClick:this.handleItemClick,position:"left",children:"Home"}),Object(C.jsx)(B.a.Item,{name:"Introduction",active:"Introduction"===e,onClick:this.handleItemClick,children:"My Story"}),Object(C.jsx)(B.a.Item,{name:"Projects",active:"Projects"===e,onClick:this.handleItemClick,children:"View My Projects"}),Object(C.jsx)(B.a.Item,{name:"Values",active:"Values"===e,onClick:this.handleItemClick,children:"My Values"}),Object(C.jsx)(B.a.Item,{name:"Contact",active:"Contact"===e,onClick:this.handleItemClick,position:"right",children:"Contact Me"})]}),Object(C.jsx)(S.a,{name:"Contact",onClick:this.handleItemClick,className:"hireMe",style:P.hireMe,color:"purple",children:"Contact Me"}),Object(C.jsx)(S.a,{name:"Footer",className:"buttonFooter",onClick:this.handleItemClick,style:P.buttonFooter,circular:!0,icon:"arrow alternate circle down",size:"big",color:"purple"}),Object(C.jsx)(H.a,{style:P.logo,alt:"logo",src:"data:image/png;base64,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",size:"medium"})]})}}]),n}(c.Component),R=n(107),U=n.p+"static/media/video.caff665e.mp4",F=function(e){return Object(C.jsxs)("div",{id:"banner",style:{background:"rgb(0,0,0)"},children:[Object(C.jsx)(x.a,{inverted:!0,className:"bannerGreeting personalFont",children:"Welcome, my name is Mike."}),Object(C.jsx)(x.a,{inverted:!0,className:"bannerIam personalFont",children:"The technologies that are used to create this Website"}),Object(C.jsx)("p",{className:"randomWords personalFont",children:e.word}),Object(C.jsx)(R.a,{src:U,type:"video/mp4",className:"videoBanner",autoPlay:!0,loop:!0,muted:!0,style:{outline:"4px solid rgba(240,130,240,1)"}})]})},N=n(86),T=n(55),E=n(121),J=n.n(E),L=n(120),z=n.n(L),Y=Object(T.css)(i||(i=Object(N.a)(["\n    position:absolute;\n    top: 45%;\n    left: 50%;\n"]))),W=Object(T.css)(a||(a=Object(N.a)(["\n    position:absolute;\n    bottom: 2.1%;\n    right: 1%;\n"]))),G="rgba(200,90,250,1)";function Q(){return Object(C.jsxs)("div",{children:[Object(C.jsx)(x.a,{as:"h1",style:{position:"absolute",fontSize:30,bottom:0,right:"4%"},color:"purple",children:"LOADING"}),Object(C.jsx)(z.a,{loading:!0,css:W,size:6,color:G}),Object(C.jsx)(J.a,{loading:!0,css:Y,size:10,color:G})]})}var q=Object(c.lazy)((function(){return Promise.all([n.e(5),n.e(8)]).then(n.bind(null,328))})),K=Object(c.lazy)((function(){return Promise.all([n.e(4),n.e(7)]).then(n.bind(null,322))})),V=Object(c.lazy)((function(){return Promise.all([n.e(3),n.e(9)]).then(n.bind(null,326))})),X=Object(c.lazy)((function(){return n.e(6).then(n.bind(null,331))})),D=window,Z=function(e){Object(m.a)(n,e);var t=Object(j.a)(n);function n(e){var i;return Object(l.a)(this,n),(i=t.call(this,e)).state={pageName:"Home",isLoading:!0,wordsToDescribeMe:["HTMl5/CSS3/JS/jQuery","ReactJS/Semantic UI/NodeJS","AOS/EmailJS/FiberJS/GoogleMap API"],word:"",isScrolling:!1},i.handleIndex=i.handleIndex.bind(Object(h.a)(i)),i.randomWords=i.randomWords.bind(Object(h.a)(i)),i.handleScroll=i.handleScroll.bind(Object(h.a)(i)),i}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=this;D.addEventListener("scroll",this.handleScroll),setInterval((function(){e.randomWords()}),3e3),setTimeout((function(){p()(".preload").fadeOut(50),e.setState({isLoading:!1},(function(){e.state.isLoading||p()(".preload").fadeIn(50)}))}),1500)}},{key:"componentDidUpdate",value:function(){b.a.init({duration:1e3})}},{key:"handleScroll",value:function(e){e.preventDefault(),0===D.scrollY&&this.setState({isScrolling:!1}),D.scrollY>0&&this.setState({isScrolling:!0})}},{key:"randomWords",value:function(){var e=this.state.wordsToDescribeMe,t=e[Math.floor(Math.random()*e.length)];this.setState({word:t})}},{key:"handleIndex",value:function(e){this.setState({pageName:e,isScrolling:!0}),document.getElementById(e).scrollIntoView({behavior:"smooth"})}},{key:"renderPage",value:function(){var e=this.state.components;return s.a.createElement(e[this.state.pageName])}},{key:"render",value:function(){var e=this.state.isLoading?Object(C.jsx)(Q,{}):Object(C.jsx)("div",{children:Object(C.jsxs)(c.Suspense,{fallback:Object(C.jsx)("p",{children:"Loading"}),children:[Object(C.jsx)(M,{id:"Home",pageName:this.state.pageName,handleIndex:this.handleIndex}),Object(C.jsx)(F,{className:"heroSection",handleIndex:this.handleIndex,word:this.state.word}),Object(C.jsxs)(O.a,{style:{flexGrow:1,width:"100%"},children:[Object(C.jsx)(q,{id:"Introduction"}),Object(C.jsx)(V,{id:"Projects"}),Object(C.jsx)(X,{id:"Values"}),Object(C.jsx)(K,{id:"Contact"})]}),Object(C.jsx)(w,{id:"Footer"})]})});return Object(C.jsx)("div",{className:"App",children:e})}}]),n}(c.Component),_=function(e){e&&e instanceof Function&&n.e(10).then(n.bind(null,324)).then((function(t){var n=t.getCLS,i=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),i(e),a(e),c(e),s(e)}))},$=function(e){Object(m.a)(n,e);var t=Object(j.a)(n);function n(e){var i;return Object(l.a)(this,n),(i=t.call(this,e)).state={hasError:!1,error:""},i}return Object(d.a)(n,[{key:"componentDidCatch",value:function(e,t){console.log("hey",e),this.setState({hasError:!0,error:e})}},{key:"render",value:function(){return this.state.hasError?Object(C.jsxs)(x.a,{as:"h1",children:["Error found: ",this.state.error]}):this.props.children}}]),n}(c.Component);r.a.render(Object(C.jsx)(s.a.Fragment,{children:Object(C.jsx)($,{children:Object(C.jsx)(Z,{})})}),document.getElementById("root")),_()}},[[153,1,2]]]);
//# sourceMappingURL=main.5ee3485d.chunk.js.map