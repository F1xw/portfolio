(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{26:function(e,t,a){},27:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a.n(c),i=a(8),n=a.n(i),r=(a(26),a(2)),o=a(3),l=a(6),j=a(5),d=a(4),b=a.p+"static/media/logo.e2188ddf.svg",h=(a(27),a(9)),u=a.n(h),m=(a(38),a.p+"static/media/easterEgg.fc9c48fa.bmp"),p=(a(39),a(0)),O=function(e){Object(j.a)(a,e);var t=Object(d.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(p.jsx)("div",{className:"FwEasterEgg container",children:Object(p.jsx)("img",{className:"FwEasterEgg__egg",src:m,alt:""})})}}]),a}(s.a.Component),x=O,f=function(e){Object(j.a)(a,e);var t=Object(d.a)(a);function a(e){var c;return Object(r.a)(this,a),(c=t.call(this,e)).state={hiddenNav:!1,prevScrollPos:0,logoClickCounter:0},c.handleScroll=c.handleScroll.bind(Object(l.a)(c)),c.scrollTo=c.scrollTo.bind(Object(l.a)(c)),c}return Object(o.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleScroll)}},{key:"handleScroll",value:function(e){var t,a=document.documentElement.scrollTop;t=!(a<=400)&&this.state.prevScrollPos<=a,this.setState({hiddenNav:t,prevScrollPos:a}),console.log(a)}},{key:"scrollTo",value:function(){if(7===this.state.logoClickCounter){var e=document.createElement("div");n.a.render(Object(p.jsx)(x,{}),e),document.body.innerHTML=e.querySelector(".FwEasterEgg").outerHTML}else this.setState({logoClickCounter:this.state.logoClickCounter+1});u.a.animateScroll.scrollTo(0)}},{key:"render",value:function(){var e=this.state.hiddenNav?"FwNavbar FwNavbar--hidden":"FwNavbar";return Object(p.jsxs)("div",{className:e,children:[Object(p.jsx)("div",{onClick:this.scrollTo,className:"FwNavbar__logo",children:Object(p.jsx)("img",{src:this.props.logo,alt:""})}),Object(p.jsx)("ul",{className:"FwNavbar__links",children:this.props.children})]})}}]),a}(s.a.Component),g=(a(41),function(e){Object(j.a)(a,e);var t=Object(d.a)(a);function a(e){var c;return Object(r.a)(this,a),(c=t.call(this,e)).state={activeTab:c.props.activeTabId},c.handleClick=c.handleClick.bind(Object(l.a)(c)),c}return Object(o.a)(a,[{key:"handleClick",value:function(){this.props.onClick(this.props.id,this.props.target)}},{key:"componentDidUpdate",value:function(e){e.activeTabId!==this.props.activeTabId&&this.setState({activeTab:this.props.activeTabId})}},{key:"render",value:function(){var e=this.state.activeTab===this.props.id?"FwNavbarLink active":"FwNavbarLink";return Object(p.jsx)("li",{className:e,onClick:this.handleClick,children:Object(p.jsx)("p",{className:"FwNavbarLink__anchor",children:this.props.children})})}}]),a}(s.a.Component)),v=(a(42),function(e){Object(j.a)(a,e);var t=Object(d.a)(a);function a(e){var c;return Object(r.a)(this,a),(c=t.call(this,e)).processClick=c.processClick.bind(Object(l.a)(c)),c}return Object(o.a)(a,[{key:"processClick",value:function(){if(void 0!==this.props.href)window.open(this.props.href,"_self");else{if(void 0===this.props.onClick)return!1;this.props.onClick()}}},{key:"render",value:function(){return Object(p.jsx)("button",{onClick:this.processClick,className:"FwButton",children:this.props.children})}}]),a}(s.a.Component)),w=a.p+"static/media/bubbleAboutMe.ac65490e.svg",k=(a(43),function(e){Object(j.a)(a,e);var t=Object(d.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"scrollTo",value:function(){h.animateScroll.scrollTo(2*window.innerHeight)}},{key:"render",value:function(){return Object(p.jsxs)("div",{className:"FwAboutMe",name:"about",children:[Object(p.jsx)("img",{src:w,alt:""}),Object(p.jsxs)("div",{className:"FwAboutMe__text",children:[Object(p.jsx)("h1",{children:"About Me"}),Object(p.jsxs)("p",{children:["I am an ongoing developer with skills in several different fields. I made coding my hobby and am developing programs and websites just for fun. Currently, I am still attending school but I am aiming at finishing school in Q2 2022. I am looking forward to a job in IT as I really enjoy writing code. I publish most of my work on ",Object(p.jsx)("a",{href:"https://github.com/F1xw",target:"_blank",rel:"noreferrer",children:"GitHub"})," but my current problem is that I tend to start projects that are way to overkill, so I almost never finish anything.",Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),"If you are interested in my skills, click the button below. If you are interested in reading my paper on Peer-to-Peer Networking click ",Object(p.jsx)("a",{href:"/Facharbeit-Florian_Weissmeier.pdf",children:"here"})," (written in german)."]}),Object(p.jsx)(v,{onClick:this.scrollTo,children:"Next"})]})]})}}]),a}(s.a.Component)),y=k,_=a.p+"static/media/bubbleLanding.08b9dfc0.svg",I=(a(44),function(e){Object(j.a)(a,e);var t=Object(d.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"scrollTo",value:function(){h.animateScroll.scrollTo(window.innerHeight)}},{key:"render",value:function(){return Object(p.jsxs)("div",{className:"landingBubble",children:[Object(p.jsx)("img",{src:_,alt:""}),Object(p.jsxs)("div",{className:"landingBubble__text",children:[Object(p.jsxs)("h1",{children:["Hi! My name is ",Object(p.jsx)("br",{}),Object(p.jsxs)("span",{children:[Object(p.jsx)("l",{children:"F"}),Object(p.jsx)("l",{children:"l"}),Object(p.jsx)("l",{children:"o"}),Object(p.jsx)("l",{children:"r"}),Object(p.jsx)("l",{children:"i"}),Object(p.jsx)("l",{children:"a"}),Object(p.jsx)("l",{children:"n"})]})]}),Object(p.jsx)(v,{onClick:this.scrollTo,children:"About Me"})]})]})}}]),a}(s.a.Component)),C=I,P=a.p+"static/media/bubbleProfile.95bc2ffb.svg",F=a.p+"static/media/imageProfile.d5bc317c.bmp",N=(a(45),function(e){Object(j.a)(a,e);var t=Object(d.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(p.jsxs)("div",{className:"profileBubble",children:[Object(p.jsx)("img",{src:P,alt:""}),Object(p.jsx)("div",{className:"profileBubble__img",children:Object(p.jsx)("img",{src:F,alt:""})})]})}}]),a}(s.a.Component)),T=N,S=a(21),L=(a(52),function(e){Object(j.a)(a,e);var t=Object(d.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(p.jsxs)("div",{className:"FwSkills",children:[Object(p.jsx)("div",{className:"FwSkills__title",name:"skills",children:Object(p.jsxs)("h1",{children:["A selection of ",Object(p.jsx)("br",{}),Object(p.jsx)("span",{children:"My Skills"})]})}),Object(p.jsx)("div",{className:"FwSkills__skills",children:Object(p.jsx)(S.TagCloud,{minSize:15,maxSize:55,tags:[{value:"JavaScript",count:25},{value:"React",count:5},{value:"NodeJS",count:20},{value:"CSS3",count:30},{value:"HTML5",count:30},{value:"SQL",count:25},{value:"PHP",count:35},{value:"Python",count:30},{value:"Flutter",count:15},{value:"Unity",count:10}],shuffle:!0,colorOptions:{luminosity:"dark",hue:"purple"},onClick:function(e){return alert("'".concat(e.value,"' was selected!"))}})})]})}}]),a}(s.a.Component)),H=L,q=(a(53),function(e){Object(j.a)(a,e);var t=Object(d.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(p.jsxs)("div",{className:"wrapper",children:[Object(p.jsxs)("div",{className:"content",children:[Object(p.jsx)(C,{}),Object(p.jsx)(T,{})]}),Object(p.jsx)("div",{className:"content",children:Object(p.jsx)(y,{})}),Object(p.jsx)("div",{className:"content",children:Object(p.jsx)(H,{})})]})}}]),a}(s.a.Component)),A=q,M=a.p+"static/media/exampleProject.c2f7526c.jpg",E=a.p+"static/media/samcamProject.8e954eb7.jpg",B=a.p+"static/media/humcastProject.0507254f.jpg",G=(a(54),function(e){Object(j.a)(a,e);var t=Object(d.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(p.jsx)("div",{className:"FwProjectsPage content",children:Object(p.jsxs)("div",{className:"FwProjectsPage_projectContainer",children:[Object(p.jsxs)("div",{className:"FwProjectsPage__projectItem projectItem--long",children:[Object(p.jsxs)("div",{className:"FwProjectsPage__projectItemText",children:[Object(p.jsx)("h1",{children:"Humcast"}),Object(p.jsx)("hr",{}),Object(p.jsxs)("p",{children:["Humcast is a podcast made by students at my school (Humboldt-Gymnasium Solingen). I took it upon myself to design (and manage) not only the logos and cover arts or the Instagram page but the website aswell. I designed the graphics in a way, so that they would match across platforms. While this portfolio was made using ReactJS I stuck with basic HTML, CSS and JS for the Humcast website. I used Material Design Bootstrap to assist me in alignment and responsiveness and JQuery to ease my JavaScript workflow. I also wrote a tiny CMS for Humcast, so that they could easily rewrite the whole site without touching any code.",Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),Object(p.jsxs)("p",{class:"FwProjectsPage__projectItemLinks",children:[Object(p.jsx)("a",{href:"https://humcast.de",target:"_blank",rel:"noreferrer",children:"Humcast Website"}),"\xa0\u2022\xa0",Object(p.jsx)("a",{href:"https://open.spotify.com/show/567asgppRfjg9ApKZ77IHH",target:"_blank",rel:"noreferrer",children:"Humcast Spotify"})]})]})]}),Object(p.jsx)("div",{className:"FwProjectsPage__projectItemImage",children:Object(p.jsx)("img",{src:B,alt:""})})]}),Object(p.jsxs)("div",{className:"FwProjectsPage__projectItem projectItem--tall",children:[Object(p.jsx)("div",{className:"FwProjectsPage__projectItemImage",children:Object(p.jsx)("img",{src:E,alt:""})}),Object(p.jsxs)("div",{className:"FwProjectsPage__projectItemText",children:[Object(p.jsx)("h1",{children:"SamCam"}),Object(p.jsx)("hr",{}),Object(p.jsxs)("p",{children:["SamCam is a project that I made for my sisters birthday. I made an app using flutter to log data about my sister's hamster. I also used a Raspberry Pi Zero and its camera component to create a security camera of some kind. It streams the camera's view to my server encrypted with SSL and using SSH Tunnels to avoid port forwarding madness. For interaction between these two components I made an API using NodeJS and Express. All in all this was my first IoT project and I enjoied the process of coding, desingning and building it.",Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),Object(p.jsxs)("p",{class:"FwProjectsPage__projectItemLinks",children:[Object(p.jsx)("a",{href:"https://github.com/F1xw/samcam",target:"_blank",rel:"noreferrer",children:"GitHub Repo"}),"\xa0\u2022\xa0",Object(p.jsx)("a",{href:"https://github.com/F1xw/samcam",target:"_blank",rel:"noreferrer",children:"Pi Case"})]})]})]})]}),Object(p.jsxs)("div",{className:"FwProjectsPage__projectItem projectItem--tall",children:[Object(p.jsx)("div",{className:"FwProjectsPage__projectItemImage",children:Object(p.jsx)("img",{src:M,alt:""})}),Object(p.jsxs)("div",{className:"FwProjectsPage__projectItemText",children:[Object(p.jsx)("h1",{children:"Shareli.me"}),Object(p.jsx)("hr",{}),Object(p.jsxs)("p",{children:["This is an idea I came up with before knowing about WeTransfer. I wanted to transfer data from my Phone to my PC or to my friends easily. Shareli.me was a file sharing website that alowed you to upload your file and get a link in return. You could give this link to your friends or open it on your PC to simply download the file again. Shareli would host the file for a day and delete it after. I planned on adding subscriptions for longer storage and custom links but then decided to take it down as the domain ran out and I had security concerns about possible reverse shells or even just spamming.",Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),Object(p.jsx)("p",{class:"FwProjectsPage__projectItemLinks",children:Object(p.jsx)("a",{href:"https://github.com/F1xw/shareli.me",target:"_blank",rel:"noreferrer",children:"GitHub Repo"})})]})]})]}),Object(p.jsx)("div",{className:"FwProjectsPage__projectItem",children:Object(p.jsxs)("div",{className:"FwProjectsPage__projectItemText",children:[Object(p.jsx)("h1",{children:"Small Projects"}),Object(p.jsx)("hr",{}),Object(p.jsxs)("p",{children:["I have made several small projects that don't deserve their own article. For example I made a script to sync my lights with my PC screen because apparently Phillips Hue Entertainment only works on first party bulbs. Another example would be my Discord Bot that recommends Gucci products when asked. I made this bot to learn the Discord Bot API for larger projects. I you want to see more, all of my projects are published on GitHub!",Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),Object(p.jsxs)("p",{class:"FwProjectsPage__projectItemLinks",children:[Object(p.jsx)("a",{href:"https://github.com/F1xw",target:"_blank",rel:"noreferrer",children:"GitHub Profile"}),"\xa0\u2022\xa0",Object(p.jsx)("a",{href:"https://github.com/F1xw/hue-pc-sync",target:"_blank",rel:"noreferrer",children:"GitHub Light Sync"}),"\xa0\u2022\xa0",Object(p.jsx)("a",{href:"https://github.com/F1xw/guccibot",target:"_blank",rel:"noreferrer",children:"GitHub Gucci Bot"})]})]})]})}),Object(p.jsxs)("div",{className:"FwProjectsPage__projectItem projectItem--long",children:[Object(p.jsxs)("div",{className:"FwProjectsPage__projectItemText",children:[Object(p.jsx)("h1",{children:"Peer-to-Peer Chat"}),Object(p.jsx)("hr",{}),Object(p.jsxs)("p",{children:["This project was part of my paper on Peer-to-Peer networking. I created a 2 person chatroom to visualize the concept of Peer-to-Peer.",Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),Object(p.jsx)("p",{class:"FwProjectsPage__projectItemLinks",children:Object(p.jsx)("a",{href:"https://github.com/F1xw/p2p-chat",target:"_blank",rel:"noreferrer",children:"GitHub Repo"})})]})]}),Object(p.jsx)("div",{className:"FwProjectsPage__projectItemImage",children:Object(p.jsx)("img",{src:M,alt:""})})]})]})})}}]),a}(s.a.Component)),J=G,R=a(7),D=(a(55),function(e){Object(j.a)(a,e);var t=Object(d.a)(a);function a(e){var c;return Object(r.a)(this,a),(c=t.call(this,e)).handleClick=c.handleClick.bind(Object(l.a)(c)),c.state={activeIndex:null},c}return Object(o.a)(a,[{key:"handleClick",value:function(e){this.state.activeIndex===e.target.dataset.index?this.setState({activeIndex:null}):this.setState({activeIndex:e.target.dataset.index})}},{key:"render",value:function(){return Object(p.jsxs)("div",{className:"FwContactPage content",children:[Object(p.jsx)("div",{className:"FwContactPage__faq",children:Object(p.jsxs)("ul",{className:"FwContactPage__faqList",children:[Object(p.jsxs)("li",{className:0===parseInt(this.state.activeIndex)?"FwContactPage__faqListItem active":"FwContactPage__faqListItem",onClick:this.handleClick,"data-index":0,children:[Object(p.jsx)("span",{className:"FwContactPage__faqListItemTitle",children:"Freelance job inquiry"}),Object(p.jsx)(R.a,{})]}),Object(p.jsx)("div",{className:"FwContactPage__faqListItemContent",children:Object(p.jsx)("div",{className:"text",children:Object(p.jsxs)("p",{children:["Thank you for being interested in my work. I will happily help you out, given that I have enough time on hand. I don't have any fixed prices or work schedules, so I'll set these individually. For more information please send an E-Mail to ",Object(p.jsx)("a",{href:"mailto:freelance@flowei.tech",children:"freelance@flowei.tech"}),". I will try to respond as quickly as possible."]})})}),Object(p.jsxs)("li",{className:1===parseInt(this.state.activeIndex)?"FwContactPage__faqListItem active":"FwContactPage__faqListItem",onClick:this.handleClick,"data-index":1,children:[Object(p.jsx)("span",{className:"FwContactPage__faqListItemTitle",children:"Report a bug"}),Object(p.jsx)(R.a,{})]}),Object(p.jsx)("div",{className:"FwContactPage__faqListItemContent",children:Object(p.jsx)("div",{className:"text",children:Object(p.jsxs)("p",{children:["If you found a bug in any of my projects and would like to disclose it, please message me at ",Object(p.jsx)("a",{href:"mailto:bugs@flowei.tech",children:"bugs@flowei.tech"}),". Please add a description of what happened, as well as the steps to take for recreation. If possible, please add screenshots. Thank you very much for wanting to disclose the bug properly. I will try to fix it as quickly as possible or answer if I have any questions."]})})}),Object(p.jsxs)("li",{className:2===parseInt(this.state.activeIndex)?"FwContactPage__faqListItem active":"FwContactPage__faqListItem",onClick:this.handleClick,"data-index":2,children:[Object(p.jsx)("span",{className:"FwContactPage__faqListItemTitle",children:"Anything else"}),Object(p.jsx)(R.a,{})]}),Object(p.jsx)("div",{className:"FwContactPage__faqListItemContent",children:Object(p.jsx)("div",{className:"text",children:Object(p.jsx)("p",{children:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur hic in voluptas odio adipisci, modi quae quas obcaecati illo architecto fuga deleniti aut possimus magni ad, officiis iste? Provident, sequi?"})})})]})}),Object(p.jsx)("div",{className:"FwContactPage__links",children:Object(p.jsxs)("ul",{className:"FwContactPage__linksList",children:[Object(p.jsx)("li",{onClick:function(){window.open("https://github.com/F1xw","_blank")},className:"FwContactPage__linksListItem",children:Object(p.jsxs)("h4",{children:[Object(p.jsx)(R.d,{})," \xa0 GitHub"]})}),Object(p.jsx)("li",{onClick:function(){window.open("mailto:flo@flowei.tech","_blank")},className:"FwContactPage__linksListItem",children:Object(p.jsxs)("h4",{children:[Object(p.jsx)(R.c,{})," \xa0 E-Mail"]})}),Object(p.jsx)("li",{onClick:function(){window.open("https://twitter.com/flowei_","_blank")},className:"FwContactPage__linksListItem",children:Object(p.jsxs)("h4",{children:[Object(p.jsx)(R.f,{})," \xa0 Twitter"]})}),Object(p.jsx)("li",{onClick:function(){window.open("https://discord.gg/6fNn2htBuj","_blank")},className:"FwContactPage__linksListItem",children:Object(p.jsxs)("h4",{children:[Object(p.jsx)(R.b,{})," \xa0 Discord"]})}),Object(p.jsx)("li",{onClick:function(){window.open("https://paypal.me/f1xw","_blank")},className:"FwContactPage__linksListItem",children:Object(p.jsxs)("h4",{children:[Object(p.jsx)(R.e,{})," \xa0 Donate"]})})]})})]})}}]),a}(s.a.Component)),W=(a(56),function(e){Object(j.a)(a,e);var t=Object(d.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(p.jsx)("div",{className:"FwBackgroundAnimation",children:Object(p.jsxs)("ul",{className:"FwBackgroundAnimation__list bg-animation-box",children:[Object(p.jsx)("li",{class:"circle-box"}),Object(p.jsx)("li",{class:"corners-box-20"}),Object(p.jsx)("li",{class:"circle-box"}),Object(p.jsx)("li",{class:"corners-box-20"}),Object(p.jsx)("li",{}),Object(p.jsx)("li",{class:"corners-box-35"}),Object(p.jsx)("li",{class:"circle-box"}),Object(p.jsx)("li",{})]})})}}]),a}(s.a.Component)),z=W,Q=function(e){Object(j.a)(a,e);var t=Object(d.a)(a);function a(e){var c;return Object(r.a)(this,a),(c=t.call(this,e)).state={activeTab:0,activeSite:"landing"},c.handleTabClick=c.handleTabClick.bind(Object(l.a)(c)),c.ActiveSite=c.ActiveSite.bind(Object(l.a)(c)),c}return Object(o.a)(a,[{key:"handleTabClick",value:function(e,t){this.setState({activeTab:e,activeSite:t}),console.log("Changed Tab!"),console.log(e),console.log(this.state.activeTab)}},{key:"ActiveSite",value:function(){switch(this.state.activeSite){default:return Object(p.jsx)(A,{});case"projects":return Object(p.jsx)(J,{});case"contact":return Object(p.jsx)(D,{})}}},{key:"render",value:function(){return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)(z,{}),Object(p.jsxs)(f,{logo:b,children:[Object(p.jsx)(g,{activeTabId:this.state.activeTab,id:0,onClick:this.handleTabClick,target:"landing",children:"About Me"}),Object(p.jsx)(g,{activeTabId:this.state.activeTab,id:1,onClick:this.handleTabClick,target:"projects",children:"Projects"}),Object(p.jsx)(g,{activeTabId:this.state.activeTab,id:2,onClick:this.handleTabClick,target:"contact",children:"Contact"})]}),Object(p.jsx)(this.ActiveSite,{})]})}}]),a}(s.a.Component);n.a.render(Object(p.jsx)(s.a.StrictMode,{children:Object(p.jsx)(Q,{})}),document.getElementById("root"))}},[[57,1,2]]]);
//# sourceMappingURL=main.ce7a76fb.chunk.js.map