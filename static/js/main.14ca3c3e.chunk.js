(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{25:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),i=a(7),c=a.n(i),o=(a(20),a(3)),s=a(4),l=a(6),p=a(5),u=a(10),h=a(2);var d=Object(h.a)("form",{target:"e19atvrw4"})({name:"kbgsnr",styles:"display:flex;align-items:center;width:100%;max-width:600px;background-color:#fff;border-radius:3px;overflow:hidden"}),g=Object(h.a)("button",{target:"e19atvrw3"})({name:"1a3m8tj",styles:"display:inline-block;width:48px;height:48px;border:0;background-image:url('https://image.flaticon.com/icons/svg/149/149852.svg');background-size:40%;background-repeat:no-repeat;background-position:center;opacity:0.6;transition:opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);cursor:pointer;outline:none;&:hover{opacity:1;}"}),b=Object(h.a)("span",{target:"e19atvrw2"})({name:"jnnlmv",styles:"position:absolute;width:1px;height:1px;padding:0;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;clip-path:inset(50%);border:0"}),x=Object(h.a)("input",{target:"e19atvrw1"})({name:"g6sr3k",styles:"display:inline-block;width:100%;font:inherit;font-size:20px;border:none;outline:none;padding-left:4px;padding-right:4px;&::placeholder{font:inherit;font-size:18px;}"}),m=Object(h.a)("header",{target:"e19atvrw0"})({name:"1ssw7nl",styles:"top:0;left:0;position:sticky;z-index:1100;display:flex;justify-content:center;align-items:center;min-height:64px;padding-right:24px;padding-left:24px;padding-top:12px;padding-bottom:12px;color:#fff;background-color:#3f51b5;box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0, 0, 0, 0.12)"}),f=a(1),j=function(e){Object(l.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(o.a)(this,a);for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).state={searchQuery:""},e.handleSearchQueryChange=function(t){e.setState({searchQuery:t.currentTarget.value.toLowerCase()})},e.handleSubmit=function(t){t.preventDefault(),""!==e.state.searchQuery.trim()?e.props.onSubmit(e.state.searchQuery):u.b.error("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u043e\u0438\u0441\u043a\u043e\u0432\u044b\u0439 \u0437\u0430\u043f\u0440\u043e\u0441.")},e}return Object(s.a)(a,[{key:"render",value:function(){return Object(f.jsx)(m,{children:Object(f.jsxs)(d,{onSubmit:this.handleSubmit,children:[Object(f.jsx)(g,{type:"submit",children:Object(f.jsx)(b,{children:"Search"})}),Object(f.jsx)(x,{type:"text",name:"searchQuery",autocomplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:this.state.searchQuery,onChange:this.handleSearchQueryChange})]})})}}]),a}(r.Component),v=a(8),y=a.n(v),O=a(12),w=a(9);var k=Object(h.a)("li",{target:"e1ret3ds1"})({name:"ia8atm",styles:"border-radius:2px;box-shadow:0px 1px 3px 0px rgba(0, 0, 0, 0.2),0px 1px 1px 0px rgba(0, 0, 0, 0.14),0px 2px 1px -1px rgba(0, 0, 0, 0.12)"}),C=Object(h.a)("img",{target:"e1ret3ds0"})({name:"1plt1o8",styles:"width:100%;height:260px;object-fit:cover;transition:transform 250ms cubic-bezier(0.4, 0, 0.2, 1);&:hover{transform:scale(1.03);cursor:zoom-in;}"});var S=function(e){var t=e.webformatURL,a=e.largeImageURL,r=e.tags,n=e.handleImageClick;return Object(f.jsx)(k,{children:Object(f.jsx)(C,{src:t,alt:r,onClick:function(){n(a,r)}})})};var I=Object(h.a)("ul",{target:"ejhmao70"})({name:"1bhb8yv",styles:"display:grid;max-width:calc(100vw - 48px);grid-template-columns:repeat(auto-fill, minmax(320px, 1fr));grid-gap:16px;margin-top:0;margin-bottom:0;padding:0;list-style:none;margin-left:auto;margin-right:auto"});var L=function(e){var t=e.pictures,a=e.handleImageClick;return Object(f.jsx)(I,{children:t.map((function(e){var t=e.id,r=e.webformatURL,n=e.largeImageURL,i=e.tags;return Object(f.jsx)(S,{webformatURL:r,largeImageURL:n,tags:i,handleImageClick:a},t)}))})},Q="https://pixabay.com/api",U="21396115-cf31dc04a3ddd307b254525ae";function z(){return(z=Object(w.a)(y.a.mark((function e(t,a){var r,n,i,c,o;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(Q,"/?image_type=photo&orientation=horizontal&q=").concat(t,"&page=").concat(a,"&per_page=12&key=").concat(U),e.next=3,fetch(r);case 3:if(!(n=e.sent).ok){e.next=13;break}return e.next=7,n.json();case 7:return i=e.sent,e.next=10,i;case 10:return c=e.sent,o=c.hits,e.abrupt("return",o);case 13:throw new Error("\u041d\u0435\u0442 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0439 \u043f\u043e \u043a\u043b\u044e\u0447\u0435\u0432\u043e\u043c\u0443 \u0441\u043b\u043e\u0432\u0443 ".concat(t));case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var M={ApiService:function(e,t){return z.apply(this,arguments)}},R=a(13),D=a(15);var A=Object(h.a)("button",{target:"e7cvmpk0"})({name:"129wpx6",styles:"padding:8px 16px;border-radius:2px;background-color:#3f51b5;transition:all 250ms cubic-bezier(0.4, 0, 0.2, 1);text-align:center;display:inline-block;color:#fff;border:0;text-decoration:none;cursor:pointer;font-family:inherit;font-size:18px;line-height:24px;font-style:normal;font-weight:500;min-width:180px;box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 1px 5px 0px rgba(0, 0, 0, 0.12);&:hover,&:focus{background-color:#303f9f;}"}),E=["children","onClick"];var F=function(e){var t=e.children,a=e.onClick,r=Object(D.a)(e,E);return Object(f.jsx)(A,Object(R.a)(Object(R.a)({type:"button",onClick:a},r),{},{children:t}))},T="idle",q="pending",P="resolved",B="rejected",K=function(e){Object(l.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(o.a)(this,a);for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).state={pictures:[],error:null,status:T,page:1},e.onLoadMore=function(t){t.preventDefault(),e.fetchPictures()},e}return Object(s.a)(a,[{key:"componentDidUpdate",value:function(e,t){e.searchQuery!==this.props.searchQuery&&(this.setState({pictures:[],page:1,status:q}),this.fetchPictures())}},{key:"fetchPictures",value:function(){var e=Object(w.a)(y.a.mark((function e(){var t,a,r;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.searchQuery,a=this.state.page,e.prev=2,e.next=5,M.ApiService(t,a);case 5:0!==(r=e.sent).length?this.setState((function(e){return{pictures:[].concat(Object(O.a)(e.pictures),Object(O.a)(r)),page:e.page+1,status:P}})):this.setState({error:"\u041d\u0435\u0442 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0439 \u043f\u043e \u043a\u043b\u044e\u0447\u0435\u0432\u043e\u043c\u0443 \u0441\u043b\u043e\u0432\u0443 ".concat(t),status:B}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),this.setState({error:e.t0,status:B});case 12:case"end":return e.stop()}}),e,this,[[2,9]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.status,a=e.pictures,r=this.props.handleImageClick;return"idle"===t?Object(f.jsx)(L,{pictures:a}):"pending"===t||"rejected"===t?Object(f.jsx)("div",{}):"resolved"===t?Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(L,{pictures:a,handleImageClick:r}),Object(f.jsx)(F,{onClick:this.onLoadMore,"aria-label":"add contact",children:"Load more"})]}):void 0}}]),a}(r.Component);var J=Object(h.a)("div",{target:"e1lekqbj1"})({name:"8i9ttg",styles:"position:fixed;top:0;left:0;width:100vw;height:100vh;display:flex;justify-content:center;align-items:center;background-color:rgba(0, 0, 0, 0.8);z-index:1200"}),_=Object(h.a)("div",{target:"e1lekqbj0"})({name:"sve88p",styles:"max-width:calc(100vw - 48px);max-height:calc(100vh - 24px)"}),W=document.querySelector("#modal-root"),G=function(e){Object(l.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(o.a)(this,a);for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).handleKeyDown=function(t){"Escape"===t.code&&e.props.onClose()},e.handleBackdropClick=function(t){t.currentTarget===t.target&&e.props.onClose()},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return Object(i.createPortal)(Object(f.jsx)(J,{onClick:this.handleBackdropClick,children:Object(f.jsx)(_,{children:this.props.children})}),W)}}]),a}(r.Component),H=function(e){Object(l.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(o.a)(this,a);for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).state={searchQuery:"",showModal:!1,largeImageURL:null,imgTags:""},e.handleFormSubmit=function(t){e.setState({searchQuery:t})},e.handleImageClick=function(t,a){e.setState({largeImageURL:t,imgTags:a})},e.toggleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e}return Object(s.a)(a,[{key:"componentDidUpdate",value:function(e,t){this.state.largeImageURL!==t.largeImageURL&&this.toggleModal()}},{key:"render",value:function(){var e=this.state,t=e.searchQuery,a=e.showModal,r=e.largeImageURL,n=e.imgTags;return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(j,{onSubmit:this.handleFormSubmit}),Object(f.jsx)(K,{searchQuery:t,handleImageClick:this.handleImageClick}),Object(f.jsx)(u.a,{autoClose:3e3}),a&&Object(f.jsx)(G,{onClose:this.toggleModal,children:Object(f.jsx)("img",{src:r,alt:n})})]})}}]),a}(r.Component);c.a.render(Object(f.jsx)(n.a.StrictMode,{children:Object(f.jsx)(H,{})}),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.14ca3c3e.chunk.js.map