var li=Object.defineProperty;var ui=(e,t,r)=>t in e?li(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var ur=(e,t,r)=>ui(e,typeof t!="symbol"?t+"":t,r);import{R as te,r as T,f as di,h as fi,j as d,k as st,l as Oo,N as pi,L as hi,O as mi,m as gi,n as yi,o as xi,p as bi,P as wi}from"./@react-D2Q2W8xP.js";import{_ as $e,a as U,G as _i,b as Ao,c as Si,C as vi,d as Yr,e as Ci,f as ki,g as Ei,h as Xr,i as $o,s as Ri,o as Ti,j as ji,k as Oi,l as Ai,m as An,F as dr,n as $i,p as Pi,u as Di}from"./@firebase-CqOa32Ie.js";import{D as Ni}from"./@rc-dock-CCJK8Mi7.js";import{h as B}from"./@moment-C5S46NFB.js";import{d as Po}from"./@d3-format-CzD4bSOQ.js";import{u as qt}from"./@use-resize-observer-B51Ok9-X.js";import{c as Qr}from"./@classnames-Nq95h12A.js";import{V as Li,a as Do,c as Ii,b as No,d as Lo,e as Bi,f as Ot,g as Fi,h as Mi}from"./@victory-CvFeZNzm.js";import{u as zi}from"./@react-hook-BxLKElv0.js";import{o as Ui}from"./@hookform-CV33w4so.js";import{c as Hi,a as fr,b as qi}from"./@yup-Byvv1ZMI.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(o){if(o.ep)return;o.ep=!0;const s=r(o);fetch(o.href,s)}})();var D="-ms-",Ye="-moz-",P="-webkit-",Io="comm",Gt="rule",en="decl",Gi="@import",Bo="@keyframes",Wi="@layer",Fo=Math.abs,tn=String.fromCharCode,Er=Object.assign;function Vi(e,t){return F(e,0)^45?(((t<<2^F(e,0))<<2^F(e,1))<<2^F(e,2))<<2^F(e,3):0}function Mo(e){return e.trim()}function ae(e,t){return(e=t.exec(e))?e[0]:e}function A(e,t,r){return e.replace(t,r)}function _t(e,t,r){return e.indexOf(t,r)}function F(e,t){return e.charCodeAt(t)|0}function Pe(e,t,r){return e.slice(t,r)}function se(e){return e.length}function zo(e){return e.length}function Ke(e,t){return t.push(e),e}function Zi(e,t){return e.map(t).join("")}function $n(e,t){return e.filter(function(r){return!ae(r,t)})}var Wt=1,De=1,Uo=0,X=0,I=0,Be="";function Vt(e,t,r,n,o,s,i,a){return{value:e,root:t,parent:r,type:n,props:o,children:s,line:Wt,column:De,length:i,return:"",siblings:a}}function he(e,t){return Er(Vt("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function je(e){for(;e.root;)e=he(e.root,{children:[e]});Ke(e,e.siblings)}function Ki(){return I}function Ji(){return I=X>0?F(Be,--X):0,De--,I===10&&(De=1,Wt--),I}function re(){return I=X<Uo?F(Be,X++):0,De++,I===10&&(De=1,Wt++),I}function Se(){return F(Be,X)}function St(){return X}function Zt(e,t){return Pe(Be,e,t)}function Rr(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Yi(e){return Wt=De=1,Uo=se(Be=e),X=0,[]}function Xi(e){return Be="",e}function pr(e){return Mo(Zt(X-1,Tr(e===91?e+2:e===40?e+1:e)))}function Qi(e){for(;(I=Se())&&I<33;)re();return Rr(e)>2||Rr(I)>3?"":" "}function ea(e,t){for(;--t&&re()&&!(I<48||I>102||I>57&&I<65||I>70&&I<97););return Zt(e,St()+(t<6&&Se()==32&&re()==32))}function Tr(e){for(;re();)switch(I){case e:return X;case 34:case 39:e!==34&&e!==39&&Tr(I);break;case 40:e===41&&Tr(e);break;case 92:re();break}return X}function ta(e,t){for(;re()&&e+I!==57;)if(e+I===84&&Se()===47)break;return"/*"+Zt(t,X-1)+"*"+tn(e===47?e:re())}function ra(e){for(;!Rr(Se());)re();return Zt(e,X)}function na(e){return Xi(vt("",null,null,null,[""],e=Yi(e),0,[0],e))}function vt(e,t,r,n,o,s,i,a,l){for(var u=0,c=0,f=i,m=0,g=0,p=0,y=1,_=1,k=1,C=0,b="",x=o,E=s,v=n,w=b;_;)switch(p=C,C=re()){case 40:if(p!=108&&F(w,f-1)==58){_t(w+=A(pr(C),"&","&\f"),"&\f",Fo(u?a[u-1]:0))!=-1&&(k=-1);break}case 34:case 39:case 91:w+=pr(C);break;case 9:case 10:case 13:case 32:w+=Qi(p);break;case 92:w+=ea(St()-1,7);continue;case 47:switch(Se()){case 42:case 47:Ke(oa(ta(re(),St()),t,r,l),l);break;default:w+="/"}break;case 123*y:a[u++]=se(w)*k;case 125*y:case 59:case 0:switch(C){case 0:case 125:_=0;case 59+c:k==-1&&(w=A(w,/\f/g,"")),g>0&&se(w)-f&&Ke(g>32?Dn(w+";",n,r,f-1,l):Dn(A(w," ","")+";",n,r,f-2,l),l);break;case 59:w+=";";default:if(Ke(v=Pn(w,t,r,u,c,o,a,b,x=[],E=[],f,s),s),C===123)if(c===0)vt(w,t,v,v,x,s,f,a,E);else switch(m===99&&F(w,3)===110?100:m){case 100:case 108:case 109:case 115:vt(e,v,v,n&&Ke(Pn(e,v,v,0,0,o,a,b,o,x=[],f,E),E),o,E,f,a,n?x:E);break;default:vt(w,v,v,v,[""],E,0,a,E)}}u=c=g=0,y=k=1,b=w="",f=i;break;case 58:f=1+se(w),g=p;default:if(y<1){if(C==123)--y;else if(C==125&&y++==0&&Ji()==125)continue}switch(w+=tn(C),C*y){case 38:k=c>0?1:(w+="\f",-1);break;case 44:a[u++]=(se(w)-1)*k,k=1;break;case 64:Se()===45&&(w+=pr(re())),m=Se(),c=f=se(b=w+=ra(St())),C++;break;case 45:p===45&&se(w)==2&&(y=0)}}return s}function Pn(e,t,r,n,o,s,i,a,l,u,c,f){for(var m=o-1,g=o===0?s:[""],p=zo(g),y=0,_=0,k=0;y<n;++y)for(var C=0,b=Pe(e,m+1,m=Fo(_=i[y])),x=e;C<p;++C)(x=Mo(_>0?g[C]+" "+b:A(b,/&\f/g,g[C])))&&(l[k++]=x);return Vt(e,t,r,o===0?Gt:a,l,u,c,f)}function oa(e,t,r,n){return Vt(e,t,r,Io,tn(Ki()),Pe(e,2,-2),0,n)}function Dn(e,t,r,n,o){return Vt(e,t,r,en,Pe(e,0,n),Pe(e,n+1,-1),n,o)}function Ho(e,t,r){switch(Vi(e,t)){case 5103:return P+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return P+e+e;case 4789:return Ye+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return P+e+Ye+e+D+e+e;case 5936:switch(F(e,t+11)){case 114:return P+e+D+A(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return P+e+D+A(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return P+e+D+A(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return P+e+D+e+e;case 6165:return P+e+D+"flex-"+e+e;case 5187:return P+e+A(e,/(\w+).+(:[^]+)/,P+"box-$1$2"+D+"flex-$1$2")+e;case 5443:return P+e+D+"flex-item-"+A(e,/flex-|-self/g,"")+(ae(e,/flex-|baseline/)?"":D+"grid-row-"+A(e,/flex-|-self/g,""))+e;case 4675:return P+e+D+"flex-line-pack"+A(e,/align-content|flex-|-self/g,"")+e;case 5548:return P+e+D+A(e,"shrink","negative")+e;case 5292:return P+e+D+A(e,"basis","preferred-size")+e;case 6060:return P+"box-"+A(e,"-grow","")+P+e+D+A(e,"grow","positive")+e;case 4554:return P+A(e,/([^-])(transform)/g,"$1"+P+"$2")+e;case 6187:return A(A(A(e,/(zoom-|grab)/,P+"$1"),/(image-set)/,P+"$1"),e,"")+e;case 5495:case 3959:return A(e,/(image-set\([^]*)/,P+"$1$`$1");case 4968:return A(A(e,/(.+:)(flex-)?(.*)/,P+"box-pack:$3"+D+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+P+e+e;case 4200:if(!ae(e,/flex-|baseline/))return D+"grid-column-align"+Pe(e,t)+e;break;case 2592:case 3360:return D+A(e,"template-","")+e;case 4384:case 3616:return r&&r.some(function(n,o){return t=o,ae(n.props,/grid-\w+-end/)})?~_t(e+(r=r[t].value),"span",0)?e:D+A(e,"-start","")+e+D+"grid-row-span:"+(~_t(r,"span",0)?ae(r,/\d+/):+ae(r,/\d+/)-+ae(e,/\d+/))+";":D+A(e,"-start","")+e;case 4896:case 4128:return r&&r.some(function(n){return ae(n.props,/grid-\w+-start/)})?e:D+A(A(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return A(e,/(.+)-inline(.+)/,P+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(se(e)-1-t>6)switch(F(e,t+1)){case 109:if(F(e,t+4)!==45)break;case 102:return A(e,/(.+:)(.+)-([^]+)/,"$1"+P+"$2-$3$1"+Ye+(F(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~_t(e,"stretch",0)?Ho(A(e,"stretch","fill-available"),t,r)+e:e}break;case 5152:case 5920:return A(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(n,o,s,i,a,l,u){return D+o+":"+s+u+(i?D+o+"-span:"+(a?l:+l-+s)+u:"")+e});case 4949:if(F(e,t+6)===121)return A(e,":",":"+P)+e;break;case 6444:switch(F(e,F(e,14)===45?18:11)){case 120:return A(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+P+(F(e,14)===45?"inline-":"")+"box$3$1"+P+"$2$3$1"+D+"$2box$3")+e;case 100:return A(e,":",":"+D)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return A(e,"scroll-","scroll-snap-")+e}return e}function At(e,t){for(var r="",n=0;n<e.length;n++)r+=t(e[n],n,e,t)||"";return r}function sa(e,t,r,n){switch(e.type){case Wi:if(e.children.length)break;case Gi:case en:return e.return=e.return||e.value;case Io:return"";case Bo:return e.return=e.value+"{"+At(e.children,n)+"}";case Gt:if(!se(e.value=e.props.join(",")))return""}return se(r=At(e.children,n))?e.return=e.value+"{"+r+"}":""}function ia(e){var t=zo(e);return function(r,n,o,s){for(var i="",a=0;a<t;a++)i+=e[a](r,n,o,s)||"";return i}}function aa(e){return function(t){t.root||(t=t.return)&&e(t)}}function ca(e,t,r,n){if(e.length>-1&&!e.return)switch(e.type){case en:e.return=Ho(e.value,e.length,r);return;case Bo:return At([he(e,{value:A(e.value,"@","@"+P)})],n);case Gt:if(e.length)return Zi(r=e.props,function(o){switch(ae(o,n=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":je(he(e,{props:[A(o,/:(read-\w+)/,":"+Ye+"$1")]})),je(he(e,{props:[o]})),Er(e,{props:$n(r,n)});break;case"::placeholder":je(he(e,{props:[A(o,/:(plac\w+)/,":"+P+"input-$1")]})),je(he(e,{props:[A(o,/:(plac\w+)/,":"+Ye+"$1")]})),je(he(e,{props:[A(o,/:(plac\w+)/,D+"input-$1")]})),je(he(e,{props:[o]})),Er(e,{props:$n(r,n)});break}return""})}}var la={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Z={},Ne=typeof process<"u"&&Z!==void 0&&(Z.REACT_APP_SC_ATTR||Z.SC_ATTR)||"data-styled",qo="active",Go="data-styled-version",Kt="6.1.11",rn=`/*!sc*/
`,nn=typeof window<"u"&&"HTMLElement"in window,ua=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Z!==void 0&&Z.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Z.REACT_APP_SC_DISABLE_SPEEDY!==""?Z.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Z.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Z!==void 0&&Z.SC_DISABLE_SPEEDY!==void 0&&Z.SC_DISABLE_SPEEDY!==""&&Z.SC_DISABLE_SPEEDY!=="false"&&Z.SC_DISABLE_SPEEDY),da={},Jt=Object.freeze([]),Le=Object.freeze({});function Wo(e,t,r){return r===void 0&&(r=Le),e.theme!==r.theme&&e.theme||t||r.theme}var Vo=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),fa=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,pa=/(^-|-$)/g;function Nn(e){return e.replace(fa,"-").replace(pa,"")}var ha=/(a)(d)/gi,mt=52,Ln=function(e){return String.fromCharCode(e+(e>25?39:97))};function jr(e){var t,r="";for(t=Math.abs(e);t>mt;t=t/mt|0)r=Ln(t%mt)+r;return(Ln(t%mt)+r).replace(ha,"$1-$2")}var hr,Zo=5381,Ae=function(e,t){for(var r=t.length;r;)e=33*e^t.charCodeAt(--r);return e},Ko=function(e){return Ae(Zo,e)};function on(e){return jr(Ko(e)>>>0)}function ma(e){return e.displayName||e.name||"Component"}function mr(e){return typeof e=="string"&&!0}var Jo=typeof Symbol=="function"&&Symbol.for,Yo=Jo?Symbol.for("react.memo"):60115,ga=Jo?Symbol.for("react.forward_ref"):60112,ya={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},xa={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Xo={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},ba=((hr={})[ga]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},hr[Yo]=Xo,hr);function In(e){return("type"in(t=e)&&t.type.$$typeof)===Yo?Xo:"$$typeof"in e?ba[e.$$typeof]:ya;var t}var wa=Object.defineProperty,_a=Object.getOwnPropertyNames,Bn=Object.getOwnPropertySymbols,Sa=Object.getOwnPropertyDescriptor,va=Object.getPrototypeOf,Fn=Object.prototype;function Qo(e,t,r){if(typeof t!="string"){if(Fn){var n=va(t);n&&n!==Fn&&Qo(e,n,r)}var o=_a(t);Bn&&(o=o.concat(Bn(t)));for(var s=In(e),i=In(t),a=0;a<o.length;++a){var l=o[a];if(!(l in xa||r&&r[l]||i&&l in i||s&&l in s)){var u=Sa(t,l);try{wa(e,l,u)}catch{}}}}return e}function Ce(e){return typeof e=="function"}function sn(e){return typeof e=="object"&&"styledComponentId"in e}function _e(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function $t(e,t){if(e.length===0)return"";for(var r=e[0],n=1;n<e.length;n++)r+=e[n];return r}function Xe(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Or(e,t,r){if(r===void 0&&(r=!1),!r&&!Xe(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var n=0;n<t.length;n++)e[n]=Or(e[n],t[n]);else if(Xe(t))for(var n in t)e[n]=Or(e[n],t[n]);return e}function an(e,t){Object.defineProperty(e,"toString",{value:t})}function ke(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Ca=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var r=0,n=0;n<t;n++)r+=this.groupSizes[n];return r},e.prototype.insertRules=function(t,r){if(t>=this.groupSizes.length){for(var n=this.groupSizes,o=n.length,s=o;t>=s;)if((s<<=1)<0)throw ke(16,"".concat(t));this.groupSizes=new Uint32Array(s),this.groupSizes.set(n),this.length=s;for(var i=o;i<s;i++)this.groupSizes[i]=0}for(var a=this.indexOfGroup(t+1),l=(i=0,r.length);i<l;i++)this.tag.insertRule(a,r[i])&&(this.groupSizes[t]++,a++)},e.prototype.clearGroup=function(t){if(t<this.length){var r=this.groupSizes[t],n=this.indexOfGroup(t),o=n+r;this.groupSizes[t]=0;for(var s=n;s<o;s++)this.tag.deleteRule(n)}},e.prototype.getGroup=function(t){var r="";if(t>=this.length||this.groupSizes[t]===0)return r;for(var n=this.groupSizes[t],o=this.indexOfGroup(t),s=o+n,i=o;i<s;i++)r+="".concat(this.tag.getRule(i)).concat(rn);return r},e}(),Ct=new Map,Pt=new Map,kt=1,gt=function(e){if(Ct.has(e))return Ct.get(e);for(;Pt.has(kt);)kt++;var t=kt++;return Ct.set(e,t),Pt.set(t,e),t},ka=function(e,t){kt=t+1,Ct.set(e,t),Pt.set(t,e)},Ea="style[".concat(Ne,"][").concat(Go,'="').concat(Kt,'"]'),Ra=new RegExp("^".concat(Ne,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Ta=function(e,t,r){for(var n,o=r.split(","),s=0,i=o.length;s<i;s++)(n=o[s])&&e.registerName(t,n)},ja=function(e,t){for(var r,n=((r=t.textContent)!==null&&r!==void 0?r:"").split(rn),o=[],s=0,i=n.length;s<i;s++){var a=n[s].trim();if(a){var l=a.match(Ra);if(l){var u=0|parseInt(l[1],10),c=l[2];u!==0&&(ka(c,u),Ta(e,c,l[3]),e.getTag().insertRules(u,o)),o.length=0}else o.push(a)}}};function Oa(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var es=function(e){var t=document.head,r=e||t,n=document.createElement("style"),o=function(a){var l=Array.from(a.querySelectorAll("style[".concat(Ne,"]")));return l[l.length-1]}(r),s=o!==void 0?o.nextSibling:null;n.setAttribute(Ne,qo),n.setAttribute(Go,Kt);var i=Oa();return i&&n.setAttribute("nonce",i),r.insertBefore(n,s),n},Aa=function(){function e(t){this.element=es(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(r){if(r.sheet)return r.sheet;for(var n=document.styleSheets,o=0,s=n.length;o<s;o++){var i=n[o];if(i.ownerNode===r)return i}throw ke(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,r){try{return this.sheet.insertRule(r,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var r=this.sheet.cssRules[t];return r&&r.cssText?r.cssText:""},e}(),$a=function(){function e(t){this.element=es(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,r){if(t<=this.length&&t>=0){var n=document.createTextNode(r);return this.element.insertBefore(n,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),Pa=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,r){return t<=this.length&&(this.rules.splice(t,0,r),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Mn=nn,Da={isServer:!nn,useCSSOMInjection:!ua},Dt=function(){function e(t,r,n){t===void 0&&(t=Le),r===void 0&&(r={});var o=this;this.options=U(U({},Da),t),this.gs=r,this.names=new Map(n),this.server=!!t.isServer,!this.server&&nn&&Mn&&(Mn=!1,function(s){for(var i=document.querySelectorAll(Ea),a=0,l=i.length;a<l;a++){var u=i[a];u&&u.getAttribute(Ne)!==qo&&(ja(s,u),u.parentNode&&u.parentNode.removeChild(u))}}(this)),an(this,function(){return function(s){for(var i=s.getTag(),a=i.length,l="",u=function(f){var m=function(k){return Pt.get(k)}(f);if(m===void 0)return"continue";var g=s.names.get(m),p=i.getGroup(f);if(g===void 0||p.length===0)return"continue";var y="".concat(Ne,".g").concat(f,'[id="').concat(m,'"]'),_="";g!==void 0&&g.forEach(function(k){k.length>0&&(_+="".concat(k,","))}),l+="".concat(p).concat(y,'{content:"').concat(_,'"}').concat(rn)},c=0;c<a;c++)u(c);return l}(o)})}return e.registerId=function(t){return gt(t)},e.prototype.reconstructWithOptions=function(t,r){return r===void 0&&(r=!0),new e(U(U({},this.options),t),this.gs,r&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(r){var n=r.useCSSOMInjection,o=r.target;return r.isServer?new Pa(o):n?new Aa(o):new $a(o)}(this.options),new Ca(t)));var t},e.prototype.hasNameForId=function(t,r){return this.names.has(t)&&this.names.get(t).has(r)},e.prototype.registerName=function(t,r){if(gt(t),this.names.has(t))this.names.get(t).add(r);else{var n=new Set;n.add(r),this.names.set(t,n)}},e.prototype.insertRules=function(t,r,n){this.registerName(t,r),this.getTag().insertRules(gt(t),n)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(gt(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),Na=/&/g,La=/^\s*\/\/.*$/gm;function ts(e,t){return e.map(function(r){return r.type==="rule"&&(r.value="".concat(t," ").concat(r.value),r.value=r.value.replaceAll(",",",".concat(t," ")),r.props=r.props.map(function(n){return"".concat(t," ").concat(n)})),Array.isArray(r.children)&&r.type!=="@keyframes"&&(r.children=ts(r.children,t)),r})}function Ia(e){var t,r,n,o=Le,s=o.options,i=s===void 0?Le:s,a=o.plugins,l=a===void 0?Jt:a,u=function(m,g,p){return p.startsWith(r)&&p.endsWith(r)&&p.replaceAll(r,"").length>0?".".concat(t):m},c=l.slice();c.push(function(m){m.type===Gt&&m.value.includes("&")&&(m.props[0]=m.props[0].replace(Na,r).replace(n,u))}),i.prefix&&c.push(ca),c.push(sa);var f=function(m,g,p,y){g===void 0&&(g=""),p===void 0&&(p=""),y===void 0&&(y="&"),t=y,r=g,n=new RegExp("\\".concat(r,"\\b"),"g");var _=m.replace(La,""),k=na(p||g?"".concat(p," ").concat(g," { ").concat(_," }"):_);i.namespace&&(k=ts(k,i.namespace));var C=[];return At(k,ia(c.concat(aa(function(b){return C.push(b)})))),C};return f.hash=l.length?l.reduce(function(m,g){return g.name||ke(15),Ae(m,g.name)},Zo).toString():"",f}var Ba=new Dt,Ar=Ia(),rs=te.createContext({shouldForwardProp:void 0,styleSheet:Ba,stylis:Ar});rs.Consumer;te.createContext(void 0);function $r(){return T.useContext(rs)}var ns=function(){function e(t,r){var n=this;this.inject=function(o,s){s===void 0&&(s=Ar);var i=n.name+s.hash;o.hasNameForId(n.id,i)||o.insertRules(n.id,i,s(n.rules,i,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=r,an(this,function(){throw ke(12,String(n.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Ar),this.name+t.hash},e}(),Fa=function(e){return e>="A"&&e<="Z"};function zn(e){for(var t="",r=0;r<e.length;r++){var n=e[r];if(r===1&&n==="-"&&e[0]==="-")return e;Fa(n)?t+="-"+n.toLowerCase():t+=n}return t.startsWith("ms-")?"-"+t:t}var os=function(e){return e==null||e===!1||e===""},ss=function(e){var t,r,n=[];for(var o in e){var s=e[o];e.hasOwnProperty(o)&&!os(s)&&(Array.isArray(s)&&s.isCss||Ce(s)?n.push("".concat(zn(o),":"),s,";"):Xe(s)?n.push.apply(n,$e($e(["".concat(o," {")],ss(s),!1),["}"],!1)):n.push("".concat(zn(o),": ").concat((t=o,(r=s)==null||typeof r=="boolean"||r===""?"":typeof r!="number"||r===0||t in la||t.startsWith("--")?String(r).trim():"".concat(r,"px")),";")))}return n};function me(e,t,r,n){if(os(e))return[];if(sn(e))return[".".concat(e.styledComponentId)];if(Ce(e)){if(!Ce(s=e)||s.prototype&&s.prototype.isReactComponent||!t)return[e];var o=e(t);return me(o,t,r,n)}var s;return e instanceof ns?r?(e.inject(r,n),[e.getName(n)]):[e]:Xe(e)?ss(e):Array.isArray(e)?Array.prototype.concat.apply(Jt,e.map(function(i){return me(i,t,r,n)})):[e.toString()]}function is(e){for(var t=0;t<e.length;t+=1){var r=e[t];if(Ce(r)&&!sn(r))return!1}return!0}var Ma=Ko(Kt),za=function(){function e(t,r,n){this.rules=t,this.staticRulesId="",this.isStatic=(n===void 0||n.isStatic)&&is(t),this.componentId=r,this.baseHash=Ae(Ma,r),this.baseStyle=n,Dt.registerId(r)}return e.prototype.generateAndInjectStyles=function(t,r,n){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,r,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&r.hasNameForId(this.componentId,this.staticRulesId))o=_e(o,this.staticRulesId);else{var s=$t(me(this.rules,t,r,n)),i=jr(Ae(this.baseHash,s)>>>0);if(!r.hasNameForId(this.componentId,i)){var a=n(s,".".concat(i),void 0,this.componentId);r.insertRules(this.componentId,i,a)}o=_e(o,i),this.staticRulesId=i}else{for(var l=Ae(this.baseHash,n.hash),u="",c=0;c<this.rules.length;c++){var f=this.rules[c];if(typeof f=="string")u+=f;else if(f){var m=$t(me(f,t,r,n));l=Ae(l,m+c),u+=m}}if(u){var g=jr(l>>>0);r.hasNameForId(this.componentId,g)||r.insertRules(this.componentId,g,n(u,".".concat(g),void 0,this.componentId)),o=_e(o,g)}}return o},e}(),Qe=te.createContext(void 0);Qe.Consumer;function Ua(e){var t=te.useContext(Qe),r=T.useMemo(function(){return function(n,o){if(!n)throw ke(14);if(Ce(n)){var s=n(o);return s}if(Array.isArray(n)||typeof n!="object")throw ke(8);return o?U(U({},o),n):n}(e.theme,t)},[e.theme,t]);return e.children?te.createElement(Qe.Provider,{value:r},e.children):null}var gr={};function Ha(e,t,r){var n=sn(e),o=e,s=!mr(e),i=t.attrs,a=i===void 0?Jt:i,l=t.componentId,u=l===void 0?function(x,E){var v=typeof x!="string"?"sc":Nn(x);gr[v]=(gr[v]||0)+1;var w="".concat(v,"-").concat(on(Kt+v+gr[v]));return E?"".concat(E,"-").concat(w):w}(t.displayName,t.parentComponentId):l,c=t.displayName,f=c===void 0?function(x){return mr(x)?"styled.".concat(x):"Styled(".concat(ma(x),")")}(e):c,m=t.displayName&&t.componentId?"".concat(Nn(t.displayName),"-").concat(t.componentId):t.componentId||u,g=n&&o.attrs?o.attrs.concat(a).filter(Boolean):a,p=t.shouldForwardProp;if(n&&o.shouldForwardProp){var y=o.shouldForwardProp;if(t.shouldForwardProp){var _=t.shouldForwardProp;p=function(x,E){return y(x,E)&&_(x,E)}}else p=y}var k=new za(r,m,n?o.componentStyle:void 0);function C(x,E){return function(v,w,R){var j=v.attrs,M=v.componentStyle,$=v.defaultProps,G=v.foldedComponentIds,ue=v.styledComponentId,xe=v.target,ai=te.useContext(Qe),ci=$r(),ar=v.shouldForwardProp||ci.shouldForwardProp,jn=Wo(w,ai,$)||Le,ie=function(ft,qe,pt){for(var Ge,be=U(U({},qe),{className:void 0,theme:pt}),lr=0;lr<ft.length;lr+=1){var ht=Ce(Ge=ft[lr])?Ge(be):Ge;for(var fe in ht)be[fe]=fe==="className"?_e(be[fe],ht[fe]):fe==="style"?U(U({},be[fe]),ht[fe]):ht[fe]}return qe.className&&(be.className=_e(be.className,qe.className)),be}(j,w,jn),dt=ie.as||xe,He={};for(var de in ie)ie[de]===void 0||de[0]==="$"||de==="as"||de==="theme"&&ie.theme===jn||(de==="forwardedAs"?He.as=ie.forwardedAs:ar&&!ar(de,dt)||(He[de]=ie[de]));var On=function(ft,qe){var pt=$r(),Ge=ft.generateAndInjectStyles(qe,pt.styleSheet,pt.stylis);return Ge}(M,ie),cr=_e(G,ue);return On&&(cr+=" "+On),ie.className&&(cr+=" "+ie.className),He[mr(dt)&&!Vo.has(dt)?"class":"className"]=cr,He.ref=R,T.createElement(dt,He)}(b,x,E)}C.displayName=f;var b=te.forwardRef(C);return b.attrs=g,b.componentStyle=k,b.displayName=f,b.shouldForwardProp=p,b.foldedComponentIds=n?_e(o.foldedComponentIds,o.styledComponentId):"",b.styledComponentId=m,b.target=n?o.target:e,Object.defineProperty(b,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(x){this._foldedDefaultProps=n?function(E){for(var v=[],w=1;w<arguments.length;w++)v[w-1]=arguments[w];for(var R=0,j=v;R<j.length;R++)Or(E,j[R],!0);return E}({},o.defaultProps,x):x}}),an(b,function(){return".".concat(b.styledComponentId)}),s&&Qo(b,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),b}function Un(e,t){for(var r=[e[0]],n=0,o=t.length;n<o;n+=1)r.push(t[n],e[n+1]);return r}var Hn=function(e){return Object.assign(e,{isCss:!0})};function q(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];if(Ce(e)||Xe(e))return Hn(me(Un(Jt,$e([e],t,!0))));var n=e;return t.length===0&&n.length===1&&typeof n[0]=="string"?me(n):Hn(me(Un(n,t)))}function Pr(e,t,r){if(r===void 0&&(r=Le),!t)throw ke(1,t);var n=function(o){for(var s=[],i=1;i<arguments.length;i++)s[i-1]=arguments[i];return e(t,r,q.apply(void 0,$e([o],s,!1)))};return n.attrs=function(o){return Pr(e,t,U(U({},r),{attrs:Array.prototype.concat(r.attrs,o).filter(Boolean)}))},n.withConfig=function(o){return Pr(e,t,U(U({},r),o))},n}var as=function(e){return Pr(Ha,e)},S=as;Vo.forEach(function(e){S[e]=as(e)});var qa=function(){function e(t,r){this.rules=t,this.componentId=r,this.isStatic=is(t),Dt.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,r,n,o){var s=o($t(me(this.rules,r,n,o)),""),i=this.componentId+t;n.insertRules(i,i,s)},e.prototype.removeStyles=function(t,r){r.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,r,n,o){t>2&&Dt.registerId(this.componentId+t),this.removeStyles(t,n),this.createStyles(t,r,n,o)},e}();function Ga(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];var n=q.apply(void 0,$e([e],t,!1)),o="sc-global-".concat(on(JSON.stringify(n))),s=new qa(n,o),i=function(l){var u=$r(),c=te.useContext(Qe),f=te.useRef(u.styleSheet.allocateGSInstance(o)).current;return u.styleSheet.server&&a(f,l,u.styleSheet,c,u.stylis),te.useLayoutEffect(function(){if(!u.styleSheet.server)return a(f,l,u.styleSheet,c,u.stylis),function(){return s.removeStyles(f,u.styleSheet)}},[f,l,u.styleSheet,c,u.stylis]),null};function a(l,u,c,f,m){if(s.isStatic)s.renderStyles(l,da,c,m);else{var g=U(U({},u),{theme:Wo(u,f,i.defaultProps)});s.renderStyles(l,g,c,m)}}return te.memo(i)}function Wa(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];var n=$t(q.apply(void 0,$e([e],t,!1))),o=on(n);return new ns(o,n)}const Va={},Za=Ga`
 ${Va};

  * {
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  body {
    font-family: ${({theme:e})=>e.fonts.interBold};
    font-size: ${({theme:e})=>e.fontSize.medium};
    color: ${({theme:e})=>e.color.textMain};
    background-color: ${({theme:e})=>e.color.mainBackground};
    min-width: 375px;
    padding: 0;
    margin: 0;
  }

  h1,
  h2,
  h3,
  p {
    margin: 0;
  }

  ul {
    list-style: none;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  svg {
    display: inline-block;
  }

  button {
    cursor: pointer
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover; 
  }

  /* scroll bar */

  *::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    color: #261E35;
  }

  *::-webkit-scrollbar-corner {
      background: transparent;
      display: none;
  }

  *::-webkit-scrollbar-track {
    background: transparent;
  }

  *::-webkit-scrollbar-thumb {
      background: ${({theme:e})=>e.sharedColors.mainBackground};
      border-radius: ${({theme:e})=>e.borderRadius.extraSmall} !important;
  }

  @-moz-document url-prefix() {
    * {
      scrollbar-width: thin;
      scrollbar-color: #261E35 transparent;
    }
  }
`,Fe=fi,W=di;var Nt=(e=>(e.DARK="dark",e.LIGHT="light",e))(Nt||{});const Dr={USD:{id:"USD",symbol:"$"},EUR:{id:"EUR",symbol:"€"},GPB:{id:"GPB",symbol:"£"},CHF:{id:"CHF",symbol:"₣"},UAH:{id:"UAH",symbol:"₴"}},Nr=[{id:"bitcoin",symbol:"BTC"},{id:"ethereum",symbol:"ETH"},{id:"ripple",symbol:"XRP"},{id:"bitcoin-cash",symbol:"BCH"},{id:"chainlink",symbol:"LINK"},{id:"litecoin",symbol:"LTC"},{id:"cardano",symbol:"ADA"},{id:"binancecoin",symbol:"BNB"},{id:"stellar",symbol:"XLM"},{id:"monero",symbol:"XMR"},{id:"solana",symbol:"SOL"}],Ka={btc:",.2f",eth:",.2f",bnb:",.3f",sol:",.3f",xrp:",.4f",ada:",.4f",link:",.3f",bch:",.3f",ltc:",.4f",xlm:",.5f",xmr:",.3f"},Ja=[Nt.DARK,Nt.LIGHT],cs=e=>new Promise(t=>setTimeout(t,e)),Ya=e=>e.map(([t,r,n,o,s])=>({x:t,open:r,high:n,low:o,close:s})),ls=e=>e.map(({time:t,close:r})=>({x:B.unix(t),y:r})),Xa=e=>e.reduce((t,{symbol:r,...n})=>({...t,[r]:{...n,symbol:r}}),{}),us=e=>{const t=e.toPrecision(5);return Po("~s")(Number(t))},Qa=(e,t)=>Po(Ka[e])(t),ec=e=>B(e).format("MMMM Do YYYY");function tc(e){const t=T.useRef();return T.useEffect(()=>{t.current=e},[e]),t.current}function ds(e,t){return function(){return e.apply(t,arguments)}}const{toString:rc}=Object.prototype,{getPrototypeOf:cn}=Object,Yt=(e=>t=>{const r=rc.call(t);return e[r]||(e[r]=r.slice(8,-1).toLowerCase())})(Object.create(null)),oe=e=>(e=e.toLowerCase(),t=>Yt(t)===e),Xt=e=>t=>typeof t===e,{isArray:Me}=Array,et=Xt("undefined");function nc(e){return e!==null&&!et(e)&&e.constructor!==null&&!et(e.constructor)&&Y(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const fs=oe("ArrayBuffer");function oc(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&fs(e.buffer),t}const sc=Xt("string"),Y=Xt("function"),ps=Xt("number"),Qt=e=>e!==null&&typeof e=="object",ic=e=>e===!0||e===!1,Et=e=>{if(Yt(e)!=="object")return!1;const t=cn(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},ac=oe("Date"),cc=oe("File"),lc=oe("Blob"),uc=oe("FileList"),dc=e=>Qt(e)&&Y(e.pipe),fc=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||Y(e.append)&&((t=Yt(e))==="formdata"||t==="object"&&Y(e.toString)&&e.toString()==="[object FormData]"))},pc=oe("URLSearchParams"),[hc,mc,gc,yc]=["ReadableStream","Request","Response","Headers"].map(oe),xc=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function it(e,t,{allOwnKeys:r=!1}={}){if(e===null||typeof e>"u")return;let n,o;if(typeof e!="object"&&(e=[e]),Me(e))for(n=0,o=e.length;n<o;n++)t.call(null,e[n],n,e);else{const s=r?Object.getOwnPropertyNames(e):Object.keys(e),i=s.length;let a;for(n=0;n<i;n++)a=s[n],t.call(null,e[a],a,e)}}function hs(e,t){t=t.toLowerCase();const r=Object.keys(e);let n=r.length,o;for(;n-- >0;)if(o=r[n],t===o.toLowerCase())return o;return null}const ms=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,gs=e=>!et(e)&&e!==ms;function Lr(){const{caseless:e}=gs(this)&&this||{},t={},r=(n,o)=>{const s=e&&hs(t,o)||o;Et(t[s])&&Et(n)?t[s]=Lr(t[s],n):Et(n)?t[s]=Lr({},n):Me(n)?t[s]=n.slice():t[s]=n};for(let n=0,o=arguments.length;n<o;n++)arguments[n]&&it(arguments[n],r);return t}const bc=(e,t,r,{allOwnKeys:n}={})=>(it(t,(o,s)=>{r&&Y(o)?e[s]=ds(o,r):e[s]=o},{allOwnKeys:n}),e),wc=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),_c=(e,t,r,n)=>{e.prototype=Object.create(t.prototype,n),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),r&&Object.assign(e.prototype,r)},Sc=(e,t,r,n)=>{let o,s,i;const a={};if(t=t||{},e==null)return t;do{for(o=Object.getOwnPropertyNames(e),s=o.length;s-- >0;)i=o[s],(!n||n(i,e,t))&&!a[i]&&(t[i]=e[i],a[i]=!0);e=r!==!1&&cn(e)}while(e&&(!r||r(e,t))&&e!==Object.prototype);return t},vc=(e,t,r)=>{e=String(e),(r===void 0||r>e.length)&&(r=e.length),r-=t.length;const n=e.indexOf(t,r);return n!==-1&&n===r},Cc=e=>{if(!e)return null;if(Me(e))return e;let t=e.length;if(!ps(t))return null;const r=new Array(t);for(;t-- >0;)r[t]=e[t];return r},kc=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&cn(Uint8Array)),Ec=(e,t)=>{const n=(e&&e[Symbol.iterator]).call(e);let o;for(;(o=n.next())&&!o.done;){const s=o.value;t.call(e,s[0],s[1])}},Rc=(e,t)=>{let r;const n=[];for(;(r=e.exec(t))!==null;)n.push(r);return n},Tc=oe("HTMLFormElement"),jc=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(r,n,o){return n.toUpperCase()+o}),qn=(({hasOwnProperty:e})=>(t,r)=>e.call(t,r))(Object.prototype),Oc=oe("RegExp"),ys=(e,t)=>{const r=Object.getOwnPropertyDescriptors(e),n={};it(r,(o,s)=>{let i;(i=t(o,s,e))!==!1&&(n[s]=i||o)}),Object.defineProperties(e,n)},Ac=e=>{ys(e,(t,r)=>{if(Y(e)&&["arguments","caller","callee"].indexOf(r)!==-1)return!1;const n=e[r];if(Y(n)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+r+"'")})}})},$c=(e,t)=>{const r={},n=o=>{o.forEach(s=>{r[s]=!0})};return Me(e)?n(e):n(String(e).split(t)),r},Pc=()=>{},Dc=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t,yr="abcdefghijklmnopqrstuvwxyz",Gn="0123456789",xs={DIGIT:Gn,ALPHA:yr,ALPHA_DIGIT:yr+yr.toUpperCase()+Gn},Nc=(e=16,t=xs.ALPHA_DIGIT)=>{let r="";const{length:n}=t;for(;e--;)r+=t[Math.random()*n|0];return r};function Lc(e){return!!(e&&Y(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const Ic=e=>{const t=new Array(10),r=(n,o)=>{if(Qt(n)){if(t.indexOf(n)>=0)return;if(!("toJSON"in n)){t[o]=n;const s=Me(n)?[]:{};return it(n,(i,a)=>{const l=r(i,o+1);!et(l)&&(s[a]=l)}),t[o]=void 0,s}}return n};return r(e,0)},Bc=oe("AsyncFunction"),Fc=e=>e&&(Qt(e)||Y(e))&&Y(e.then)&&Y(e.catch),h={isArray:Me,isArrayBuffer:fs,isBuffer:nc,isFormData:fc,isArrayBufferView:oc,isString:sc,isNumber:ps,isBoolean:ic,isObject:Qt,isPlainObject:Et,isReadableStream:hc,isRequest:mc,isResponse:gc,isHeaders:yc,isUndefined:et,isDate:ac,isFile:cc,isBlob:lc,isRegExp:Oc,isFunction:Y,isStream:dc,isURLSearchParams:pc,isTypedArray:kc,isFileList:uc,forEach:it,merge:Lr,extend:bc,trim:xc,stripBOM:wc,inherits:_c,toFlatObject:Sc,kindOf:Yt,kindOfTest:oe,endsWith:vc,toArray:Cc,forEachEntry:Ec,matchAll:Rc,isHTMLForm:Tc,hasOwnProperty:qn,hasOwnProp:qn,reduceDescriptors:ys,freezeMethods:Ac,toObjectSet:$c,toCamelCase:jc,noop:Pc,toFiniteNumber:Dc,findKey:hs,global:ms,isContextDefined:gs,ALPHABET:xs,generateString:Nc,isSpecCompliantForm:Lc,toJSONObject:Ic,isAsyncFn:Bc,isThenable:Fc};function O(e,t,r,n,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),r&&(this.config=r),n&&(this.request=n),o&&(this.response=o)}h.inherits(O,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:h.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const bs=O.prototype,ws={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{ws[e]={value:e}});Object.defineProperties(O,ws);Object.defineProperty(bs,"isAxiosError",{value:!0});O.from=(e,t,r,n,o,s)=>{const i=Object.create(bs);return h.toFlatObject(e,i,function(l){return l!==Error.prototype},a=>a!=="isAxiosError"),O.call(i,e.message,t,r,n,o),i.cause=e,i.name=e.name,s&&Object.assign(i,s),i};const Mc=null;function Ir(e){return h.isPlainObject(e)||h.isArray(e)}function _s(e){return h.endsWith(e,"[]")?e.slice(0,-2):e}function Wn(e,t,r){return e?e.concat(t).map(function(o,s){return o=_s(o),!r&&s?"["+o+"]":o}).join(r?".":""):t}function zc(e){return h.isArray(e)&&!e.some(Ir)}const Uc=h.toFlatObject(h,{},null,function(t){return/^is[A-Z]/.test(t)});function er(e,t,r){if(!h.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,r=h.toFlatObject(r,{metaTokens:!0,dots:!1,indexes:!1},!1,function(y,_){return!h.isUndefined(_[y])});const n=r.metaTokens,o=r.visitor||c,s=r.dots,i=r.indexes,l=(r.Blob||typeof Blob<"u"&&Blob)&&h.isSpecCompliantForm(t);if(!h.isFunction(o))throw new TypeError("visitor must be a function");function u(p){if(p===null)return"";if(h.isDate(p))return p.toISOString();if(!l&&h.isBlob(p))throw new O("Blob is not supported. Use a Buffer instead.");return h.isArrayBuffer(p)||h.isTypedArray(p)?l&&typeof Blob=="function"?new Blob([p]):Buffer.from(p):p}function c(p,y,_){let k=p;if(p&&!_&&typeof p=="object"){if(h.endsWith(y,"{}"))y=n?y:y.slice(0,-2),p=JSON.stringify(p);else if(h.isArray(p)&&zc(p)||(h.isFileList(p)||h.endsWith(y,"[]"))&&(k=h.toArray(p)))return y=_s(y),k.forEach(function(b,x){!(h.isUndefined(b)||b===null)&&t.append(i===!0?Wn([y],x,s):i===null?y:y+"[]",u(b))}),!1}return Ir(p)?!0:(t.append(Wn(_,y,s),u(p)),!1)}const f=[],m=Object.assign(Uc,{defaultVisitor:c,convertValue:u,isVisitable:Ir});function g(p,y){if(!h.isUndefined(p)){if(f.indexOf(p)!==-1)throw Error("Circular reference detected in "+y.join("."));f.push(p),h.forEach(p,function(k,C){(!(h.isUndefined(k)||k===null)&&o.call(t,k,h.isString(C)?C.trim():C,y,m))===!0&&g(k,y?y.concat(C):[C])}),f.pop()}}if(!h.isObject(e))throw new TypeError("data must be an object");return g(e),t}function Vn(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(n){return t[n]})}function ln(e,t){this._pairs=[],e&&er(e,this,t)}const Ss=ln.prototype;Ss.append=function(t,r){this._pairs.push([t,r])};Ss.toString=function(t){const r=t?function(n){return t.call(this,n,Vn)}:Vn;return this._pairs.map(function(o){return r(o[0])+"="+r(o[1])},"").join("&")};function Hc(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function vs(e,t,r){if(!t)return e;const n=r&&r.encode||Hc,o=r&&r.serialize;let s;if(o?s=o(t,r):s=h.isURLSearchParams(t)?t.toString():new ln(t,r).toString(n),s){const i=e.indexOf("#");i!==-1&&(e=e.slice(0,i)),e+=(e.indexOf("?")===-1?"?":"&")+s}return e}class Zn{constructor(){this.handlers=[]}use(t,r,n){return this.handlers.push({fulfilled:t,rejected:r,synchronous:n?n.synchronous:!1,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){h.forEach(this.handlers,function(n){n!==null&&t(n)})}}const Cs={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},qc=typeof URLSearchParams<"u"?URLSearchParams:ln,Gc=typeof FormData<"u"?FormData:null,Wc=typeof Blob<"u"?Blob:null,Vc={isBrowser:!0,classes:{URLSearchParams:qc,FormData:Gc,Blob:Wc},protocols:["http","https","file","blob","url","data"]},un=typeof window<"u"&&typeof document<"u",Zc=(e=>un&&["ReactNative","NativeScript","NS"].indexOf(e)<0)(typeof navigator<"u"&&navigator.product),Kc=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",Jc=un&&window.location.href||"http://localhost",Yc=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:un,hasStandardBrowserEnv:Zc,hasStandardBrowserWebWorkerEnv:Kc,origin:Jc},Symbol.toStringTag,{value:"Module"})),ne={...Yc,...Vc};function Xc(e,t){return er(e,new ne.classes.URLSearchParams,Object.assign({visitor:function(r,n,o,s){return ne.isNode&&h.isBuffer(r)?(this.append(n,r.toString("base64")),!1):s.defaultVisitor.apply(this,arguments)}},t))}function Qc(e){return h.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function el(e){const t={},r=Object.keys(e);let n;const o=r.length;let s;for(n=0;n<o;n++)s=r[n],t[s]=e[s];return t}function ks(e){function t(r,n,o,s){let i=r[s++];if(i==="__proto__")return!0;const a=Number.isFinite(+i),l=s>=r.length;return i=!i&&h.isArray(o)?o.length:i,l?(h.hasOwnProp(o,i)?o[i]=[o[i],n]:o[i]=n,!a):((!o[i]||!h.isObject(o[i]))&&(o[i]=[]),t(r,n,o[i],s)&&h.isArray(o[i])&&(o[i]=el(o[i])),!a)}if(h.isFormData(e)&&h.isFunction(e.entries)){const r={};return h.forEachEntry(e,(n,o)=>{t(Qc(n),o,r,0)}),r}return null}function tl(e,t,r){if(h.isString(e))try{return(t||JSON.parse)(e),h.trim(e)}catch(n){if(n.name!=="SyntaxError")throw n}return(r||JSON.stringify)(e)}const at={transitional:Cs,adapter:["xhr","http","fetch"],transformRequest:[function(t,r){const n=r.getContentType()||"",o=n.indexOf("application/json")>-1,s=h.isObject(t);if(s&&h.isHTMLForm(t)&&(t=new FormData(t)),h.isFormData(t))return o?JSON.stringify(ks(t)):t;if(h.isArrayBuffer(t)||h.isBuffer(t)||h.isStream(t)||h.isFile(t)||h.isBlob(t)||h.isReadableStream(t))return t;if(h.isArrayBufferView(t))return t.buffer;if(h.isURLSearchParams(t))return r.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let a;if(s){if(n.indexOf("application/x-www-form-urlencoded")>-1)return Xc(t,this.formSerializer).toString();if((a=h.isFileList(t))||n.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return er(a?{"files[]":t}:t,l&&new l,this.formSerializer)}}return s||o?(r.setContentType("application/json",!1),tl(t)):t}],transformResponse:[function(t){const r=this.transitional||at.transitional,n=r&&r.forcedJSONParsing,o=this.responseType==="json";if(h.isResponse(t)||h.isReadableStream(t))return t;if(t&&h.isString(t)&&(n&&!this.responseType||o)){const i=!(r&&r.silentJSONParsing)&&o;try{return JSON.parse(t)}catch(a){if(i)throw a.name==="SyntaxError"?O.from(a,O.ERR_BAD_RESPONSE,this,null,this.response):a}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:ne.classes.FormData,Blob:ne.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};h.forEach(["delete","get","head","post","put","patch"],e=>{at.headers[e]={}});const rl=h.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),nl=e=>{const t={};let r,n,o;return e&&e.split(`
`).forEach(function(i){o=i.indexOf(":"),r=i.substring(0,o).trim().toLowerCase(),n=i.substring(o+1).trim(),!(!r||t[r]&&rl[r])&&(r==="set-cookie"?t[r]?t[r].push(n):t[r]=[n]:t[r]=t[r]?t[r]+", "+n:n)}),t},Kn=Symbol("internals");function We(e){return e&&String(e).trim().toLowerCase()}function Rt(e){return e===!1||e==null?e:h.isArray(e)?e.map(Rt):String(e)}function ol(e){const t=Object.create(null),r=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let n;for(;n=r.exec(e);)t[n[1]]=n[2];return t}const sl=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function xr(e,t,r,n,o){if(h.isFunction(n))return n.call(this,t,r);if(o&&(t=r),!!h.isString(t)){if(h.isString(n))return t.indexOf(n)!==-1;if(h.isRegExp(n))return n.test(t)}}function il(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,r,n)=>r.toUpperCase()+n)}function al(e,t){const r=h.toCamelCase(" "+t);["get","set","has"].forEach(n=>{Object.defineProperty(e,n+r,{value:function(o,s,i){return this[n].call(this,t,o,s,i)},configurable:!0})})}class V{constructor(t){t&&this.set(t)}set(t,r,n){const o=this;function s(a,l,u){const c=We(l);if(!c)throw new Error("header name must be a non-empty string");const f=h.findKey(o,c);(!f||o[f]===void 0||u===!0||u===void 0&&o[f]!==!1)&&(o[f||l]=Rt(a))}const i=(a,l)=>h.forEach(a,(u,c)=>s(u,c,l));if(h.isPlainObject(t)||t instanceof this.constructor)i(t,r);else if(h.isString(t)&&(t=t.trim())&&!sl(t))i(nl(t),r);else if(h.isHeaders(t))for(const[a,l]of t.entries())s(l,a,n);else t!=null&&s(r,t,n);return this}get(t,r){if(t=We(t),t){const n=h.findKey(this,t);if(n){const o=this[n];if(!r)return o;if(r===!0)return ol(o);if(h.isFunction(r))return r.call(this,o,n);if(h.isRegExp(r))return r.exec(o);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,r){if(t=We(t),t){const n=h.findKey(this,t);return!!(n&&this[n]!==void 0&&(!r||xr(this,this[n],n,r)))}return!1}delete(t,r){const n=this;let o=!1;function s(i){if(i=We(i),i){const a=h.findKey(n,i);a&&(!r||xr(n,n[a],a,r))&&(delete n[a],o=!0)}}return h.isArray(t)?t.forEach(s):s(t),o}clear(t){const r=Object.keys(this);let n=r.length,o=!1;for(;n--;){const s=r[n];(!t||xr(this,this[s],s,t,!0))&&(delete this[s],o=!0)}return o}normalize(t){const r=this,n={};return h.forEach(this,(o,s)=>{const i=h.findKey(n,s);if(i){r[i]=Rt(o),delete r[s];return}const a=t?il(s):String(s).trim();a!==s&&delete r[s],r[a]=Rt(o),n[a]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const r=Object.create(null);return h.forEach(this,(n,o)=>{n!=null&&n!==!1&&(r[o]=t&&h.isArray(n)?n.join(", "):n)}),r}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,r])=>t+": "+r).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...r){const n=new this(t);return r.forEach(o=>n.set(o)),n}static accessor(t){const n=(this[Kn]=this[Kn]={accessors:{}}).accessors,o=this.prototype;function s(i){const a=We(i);n[a]||(al(o,i),n[a]=!0)}return h.isArray(t)?t.forEach(s):s(t),this}}V.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);h.reduceDescriptors(V.prototype,({value:e},t)=>{let r=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(n){this[r]=n}}});h.freezeMethods(V);function br(e,t){const r=this||at,n=t||r,o=V.from(n.headers);let s=n.data;return h.forEach(e,function(a){s=a.call(r,s,o.normalize(),t?t.status:void 0)}),o.normalize(),s}function Es(e){return!!(e&&e.__CANCEL__)}function ze(e,t,r){O.call(this,e??"canceled",O.ERR_CANCELED,t,r),this.name="CanceledError"}h.inherits(ze,O,{__CANCEL__:!0});function Rs(e,t,r){const n=r.config.validateStatus;!r.status||!n||n(r.status)?e(r):t(new O("Request failed with status code "+r.status,[O.ERR_BAD_REQUEST,O.ERR_BAD_RESPONSE][Math.floor(r.status/100)-4],r.config,r.request,r))}function cl(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function ll(e,t){e=e||10;const r=new Array(e),n=new Array(e);let o=0,s=0,i;return t=t!==void 0?t:1e3,function(l){const u=Date.now(),c=n[s];i||(i=u),r[o]=l,n[o]=u;let f=s,m=0;for(;f!==o;)m+=r[f++],f=f%e;if(o=(o+1)%e,o===s&&(s=(s+1)%e),u-i<t)return;const g=c&&u-c;return g?Math.round(m*1e3/g):void 0}}function ul(e,t){let r=0;const n=1e3/t;let o=null;return function(){const i=this===!0,a=Date.now();if(i||a-r>n)return o&&(clearTimeout(o),o=null),r=a,e.apply(null,arguments);o||(o=setTimeout(()=>(o=null,r=Date.now(),e.apply(null,arguments)),n-(a-r)))}}const Lt=(e,t,r=3)=>{let n=0;const o=ll(50,250);return ul(s=>{const i=s.loaded,a=s.lengthComputable?s.total:void 0,l=i-n,u=o(l),c=i<=a;n=i;const f={loaded:i,total:a,progress:a?i/a:void 0,bytes:l,rate:u||void 0,estimated:u&&a&&c?(a-i)/u:void 0,event:s,lengthComputable:a!=null};f[t?"download":"upload"]=!0,e(f)},r)},dl=ne.hasStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");let n;function o(s){let i=s;return t&&(r.setAttribute("href",i),i=r.href),r.setAttribute("href",i),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:r.pathname.charAt(0)==="/"?r.pathname:"/"+r.pathname}}return n=o(window.location.href),function(i){const a=h.isString(i)?o(i):i;return a.protocol===n.protocol&&a.host===n.host}}():function(){return function(){return!0}}(),fl=ne.hasStandardBrowserEnv?{write(e,t,r,n,o,s){const i=[e+"="+encodeURIComponent(t)];h.isNumber(r)&&i.push("expires="+new Date(r).toGMTString()),h.isString(n)&&i.push("path="+n),h.isString(o)&&i.push("domain="+o),s===!0&&i.push("secure"),document.cookie=i.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function pl(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function hl(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function Ts(e,t){return e&&!pl(t)?hl(e,t):t}const Jn=e=>e instanceof V?{...e}:e;function Ee(e,t){t=t||{};const r={};function n(u,c,f){return h.isPlainObject(u)&&h.isPlainObject(c)?h.merge.call({caseless:f},u,c):h.isPlainObject(c)?h.merge({},c):h.isArray(c)?c.slice():c}function o(u,c,f){if(h.isUndefined(c)){if(!h.isUndefined(u))return n(void 0,u,f)}else return n(u,c,f)}function s(u,c){if(!h.isUndefined(c))return n(void 0,c)}function i(u,c){if(h.isUndefined(c)){if(!h.isUndefined(u))return n(void 0,u)}else return n(void 0,c)}function a(u,c,f){if(f in t)return n(u,c);if(f in e)return n(void 0,u)}const l={url:s,method:s,data:s,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,withXSRFToken:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:a,headers:(u,c)=>o(Jn(u),Jn(c),!0)};return h.forEach(Object.keys(Object.assign({},e,t)),function(c){const f=l[c]||o,m=f(e[c],t[c],c);h.isUndefined(m)&&f!==a||(r[c]=m)}),r}const js=e=>{const t=Ee({},e);let{data:r,withXSRFToken:n,xsrfHeaderName:o,xsrfCookieName:s,headers:i,auth:a}=t;t.headers=i=V.from(i),t.url=vs(Ts(t.baseURL,t.url),e.params,e.paramsSerializer),a&&i.set("Authorization","Basic "+btoa((a.username||"")+":"+(a.password?unescape(encodeURIComponent(a.password)):"")));let l;if(h.isFormData(r)){if(ne.hasStandardBrowserEnv||ne.hasStandardBrowserWebWorkerEnv)i.setContentType(void 0);else if((l=i.getContentType())!==!1){const[u,...c]=l?l.split(";").map(f=>f.trim()).filter(Boolean):[];i.setContentType([u||"multipart/form-data",...c].join("; "))}}if(ne.hasStandardBrowserEnv&&(n&&h.isFunction(n)&&(n=n(t)),n||n!==!1&&dl(t.url))){const u=o&&s&&fl.read(s);u&&i.set(o,u)}return t},ml=typeof XMLHttpRequest<"u",gl=ml&&function(e){return new Promise(function(r,n){const o=js(e);let s=o.data;const i=V.from(o.headers).normalize();let{responseType:a}=o,l;function u(){o.cancelToken&&o.cancelToken.unsubscribe(l),o.signal&&o.signal.removeEventListener("abort",l)}let c=new XMLHttpRequest;c.open(o.method.toUpperCase(),o.url,!0),c.timeout=o.timeout;function f(){if(!c)return;const g=V.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders()),y={data:!a||a==="text"||a==="json"?c.responseText:c.response,status:c.status,statusText:c.statusText,headers:g,config:e,request:c};Rs(function(k){r(k),u()},function(k){n(k),u()},y),c=null}"onloadend"in c?c.onloadend=f:c.onreadystatechange=function(){!c||c.readyState!==4||c.status===0&&!(c.responseURL&&c.responseURL.indexOf("file:")===0)||setTimeout(f)},c.onabort=function(){c&&(n(new O("Request aborted",O.ECONNABORTED,o,c)),c=null)},c.onerror=function(){n(new O("Network Error",O.ERR_NETWORK,o,c)),c=null},c.ontimeout=function(){let p=o.timeout?"timeout of "+o.timeout+"ms exceeded":"timeout exceeded";const y=o.transitional||Cs;o.timeoutErrorMessage&&(p=o.timeoutErrorMessage),n(new O(p,y.clarifyTimeoutError?O.ETIMEDOUT:O.ECONNABORTED,o,c)),c=null},s===void 0&&i.setContentType(null),"setRequestHeader"in c&&h.forEach(i.toJSON(),function(p,y){c.setRequestHeader(y,p)}),h.isUndefined(o.withCredentials)||(c.withCredentials=!!o.withCredentials),a&&a!=="json"&&(c.responseType=o.responseType),typeof o.onDownloadProgress=="function"&&c.addEventListener("progress",Lt(o.onDownloadProgress,!0)),typeof o.onUploadProgress=="function"&&c.upload&&c.upload.addEventListener("progress",Lt(o.onUploadProgress)),(o.cancelToken||o.signal)&&(l=g=>{c&&(n(!g||g.type?new ze(null,e,c):g),c.abort(),c=null)},o.cancelToken&&o.cancelToken.subscribe(l),o.signal&&(o.signal.aborted?l():o.signal.addEventListener("abort",l)));const m=cl(o.url);if(m&&ne.protocols.indexOf(m)===-1){n(new O("Unsupported protocol "+m+":",O.ERR_BAD_REQUEST,e));return}c.send(s||null)})},yl=(e,t)=>{let r=new AbortController,n;const o=function(l){if(!n){n=!0,i();const u=l instanceof Error?l:this.reason;r.abort(u instanceof O?u:new ze(u instanceof Error?u.message:u))}};let s=t&&setTimeout(()=>{o(new O(`timeout ${t} of ms exceeded`,O.ETIMEDOUT))},t);const i=()=>{e&&(s&&clearTimeout(s),s=null,e.forEach(l=>{l&&(l.removeEventListener?l.removeEventListener("abort",o):l.unsubscribe(o))}),e=null)};e.forEach(l=>l&&l.addEventListener&&l.addEventListener("abort",o));const{signal:a}=r;return a.unsubscribe=i,[a,()=>{s&&clearTimeout(s),s=null}]},xl=function*(e,t){let r=e.byteLength;if(!t||r<t){yield e;return}let n=0,o;for(;n<r;)o=n+t,yield e.slice(n,o),n=o},bl=async function*(e,t,r){for await(const n of e)yield*xl(ArrayBuffer.isView(n)?n:await r(String(n)),t)},Yn=(e,t,r,n,o)=>{const s=bl(e,t,o);let i=0;return new ReadableStream({type:"bytes",async pull(a){const{done:l,value:u}=await s.next();if(l){a.close(),n();return}let c=u.byteLength;r&&r(i+=c),a.enqueue(new Uint8Array(u))},cancel(a){return n(a),s.return()}},{highWaterMark:2})},Xn=(e,t)=>{const r=e!=null;return n=>setTimeout(()=>t({lengthComputable:r,total:e,loaded:n}))},tr=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",Os=tr&&typeof ReadableStream=="function",Br=tr&&(typeof TextEncoder=="function"?(e=>t=>e.encode(t))(new TextEncoder):async e=>new Uint8Array(await new Response(e).arrayBuffer())),wl=Os&&(()=>{let e=!1;const t=new Request(ne.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t})(),Qn=64*1024,Fr=Os&&!!(()=>{try{return h.isReadableStream(new Response("").body)}catch{}})(),It={stream:Fr&&(e=>e.body)};tr&&(e=>{["text","arrayBuffer","blob","formData","stream"].forEach(t=>{!It[t]&&(It[t]=h.isFunction(e[t])?r=>r[t]():(r,n)=>{throw new O(`Response type '${t}' is not supported`,O.ERR_NOT_SUPPORT,n)})})})(new Response);const _l=async e=>{if(e==null)return 0;if(h.isBlob(e))return e.size;if(h.isSpecCompliantForm(e))return(await new Request(e).arrayBuffer()).byteLength;if(h.isArrayBufferView(e))return e.byteLength;if(h.isURLSearchParams(e)&&(e=e+""),h.isString(e))return(await Br(e)).byteLength},Sl=async(e,t)=>{const r=h.toFiniteNumber(e.getContentLength());return r??_l(t)},vl=tr&&(async e=>{let{url:t,method:r,data:n,signal:o,cancelToken:s,timeout:i,onDownloadProgress:a,onUploadProgress:l,responseType:u,headers:c,withCredentials:f="same-origin",fetchOptions:m}=js(e);u=u?(u+"").toLowerCase():"text";let[g,p]=o||s||i?yl([o,s],i):[],y,_;const k=()=>{!y&&setTimeout(()=>{g&&g.unsubscribe()}),y=!0};let C;try{if(l&&wl&&r!=="get"&&r!=="head"&&(C=await Sl(c,n))!==0){let v=new Request(t,{method:"POST",body:n,duplex:"half"}),w;h.isFormData(n)&&(w=v.headers.get("content-type"))&&c.setContentType(w),v.body&&(n=Yn(v.body,Qn,Xn(C,Lt(l)),null,Br))}h.isString(f)||(f=f?"cors":"omit"),_=new Request(t,{...m,signal:g,method:r.toUpperCase(),headers:c.normalize().toJSON(),body:n,duplex:"half",withCredentials:f});let b=await fetch(_);const x=Fr&&(u==="stream"||u==="response");if(Fr&&(a||x)){const v={};["status","statusText","headers"].forEach(R=>{v[R]=b[R]});const w=h.toFiniteNumber(b.headers.get("content-length"));b=new Response(Yn(b.body,Qn,a&&Xn(w,Lt(a,!0)),x&&k,Br),v)}u=u||"text";let E=await It[h.findKey(It,u)||"text"](b,e);return!x&&k(),p&&p(),await new Promise((v,w)=>{Rs(v,w,{data:E,headers:V.from(b.headers),status:b.status,statusText:b.statusText,config:e,request:_})})}catch(b){throw k(),b&&b.name==="TypeError"&&/fetch/i.test(b.message)?Object.assign(new O("Network Error",O.ERR_NETWORK,e,_),{cause:b.cause||b}):O.from(b,b&&b.code,e,_)}}),Mr={http:Mc,xhr:gl,fetch:vl};h.forEach(Mr,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const eo=e=>`- ${e}`,Cl=e=>h.isFunction(e)||e===null||e===!1,As={getAdapter:e=>{e=h.isArray(e)?e:[e];const{length:t}=e;let r,n;const o={};for(let s=0;s<t;s++){r=e[s];let i;if(n=r,!Cl(r)&&(n=Mr[(i=String(r)).toLowerCase()],n===void 0))throw new O(`Unknown adapter '${i}'`);if(n)break;o[i||"#"+s]=n}if(!n){const s=Object.entries(o).map(([a,l])=>`adapter ${a} `+(l===!1?"is not supported by the environment":"is not available in the build"));let i=t?s.length>1?`since :
`+s.map(eo).join(`
`):" "+eo(s[0]):"as no adapter specified";throw new O("There is no suitable adapter to dispatch the request "+i,"ERR_NOT_SUPPORT")}return n},adapters:Mr};function wr(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new ze(null,e)}function to(e){return wr(e),e.headers=V.from(e.headers),e.data=br.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),As.getAdapter(e.adapter||at.adapter)(e).then(function(n){return wr(e),n.data=br.call(e,e.transformResponse,n),n.headers=V.from(n.headers),n},function(n){return Es(n)||(wr(e),n&&n.response&&(n.response.data=br.call(e,e.transformResponse,n.response),n.response.headers=V.from(n.response.headers))),Promise.reject(n)})}const $s="1.7.2",dn={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{dn[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}});const ro={};dn.transitional=function(t,r,n){function o(s,i){return"[Axios v"+$s+"] Transitional option '"+s+"'"+i+(n?". "+n:"")}return(s,i,a)=>{if(t===!1)throw new O(o(i," has been removed"+(r?" in "+r:"")),O.ERR_DEPRECATED);return r&&!ro[i]&&(ro[i]=!0,console.warn(o(i," has been deprecated since v"+r+" and will be removed in the near future"))),t?t(s,i,a):!0}};function kl(e,t,r){if(typeof e!="object")throw new O("options must be an object",O.ERR_BAD_OPTION_VALUE);const n=Object.keys(e);let o=n.length;for(;o-- >0;){const s=n[o],i=t[s];if(i){const a=e[s],l=a===void 0||i(a,s,e);if(l!==!0)throw new O("option "+s+" must be "+l,O.ERR_BAD_OPTION_VALUE);continue}if(r!==!0)throw new O("Unknown option "+s,O.ERR_BAD_OPTION)}}const zr={assertOptions:kl,validators:dn},pe=zr.validators;class ve{constructor(t){this.defaults=t,this.interceptors={request:new Zn,response:new Zn}}async request(t,r){try{return await this._request(t,r)}catch(n){if(n instanceof Error){let o;Error.captureStackTrace?Error.captureStackTrace(o={}):o=new Error;const s=o.stack?o.stack.replace(/^.+\n/,""):"";try{n.stack?s&&!String(n.stack).endsWith(s.replace(/^.+\n.+\n/,""))&&(n.stack+=`
`+s):n.stack=s}catch{}}throw n}}_request(t,r){typeof t=="string"?(r=r||{},r.url=t):r=t||{},r=Ee(this.defaults,r);const{transitional:n,paramsSerializer:o,headers:s}=r;n!==void 0&&zr.assertOptions(n,{silentJSONParsing:pe.transitional(pe.boolean),forcedJSONParsing:pe.transitional(pe.boolean),clarifyTimeoutError:pe.transitional(pe.boolean)},!1),o!=null&&(h.isFunction(o)?r.paramsSerializer={serialize:o}:zr.assertOptions(o,{encode:pe.function,serialize:pe.function},!0)),r.method=(r.method||this.defaults.method||"get").toLowerCase();let i=s&&h.merge(s.common,s[r.method]);s&&h.forEach(["delete","get","head","post","put","patch","common"],p=>{delete s[p]}),r.headers=V.concat(i,s);const a=[];let l=!0;this.interceptors.request.forEach(function(y){typeof y.runWhen=="function"&&y.runWhen(r)===!1||(l=l&&y.synchronous,a.unshift(y.fulfilled,y.rejected))});const u=[];this.interceptors.response.forEach(function(y){u.push(y.fulfilled,y.rejected)});let c,f=0,m;if(!l){const p=[to.bind(this),void 0];for(p.unshift.apply(p,a),p.push.apply(p,u),m=p.length,c=Promise.resolve(r);f<m;)c=c.then(p[f++],p[f++]);return c}m=a.length;let g=r;for(f=0;f<m;){const p=a[f++],y=a[f++];try{g=p(g)}catch(_){y.call(this,_);break}}try{c=to.call(this,g)}catch(p){return Promise.reject(p)}for(f=0,m=u.length;f<m;)c=c.then(u[f++],u[f++]);return c}getUri(t){t=Ee(this.defaults,t);const r=Ts(t.baseURL,t.url);return vs(r,t.params,t.paramsSerializer)}}h.forEach(["delete","get","head","options"],function(t){ve.prototype[t]=function(r,n){return this.request(Ee(n||{},{method:t,url:r,data:(n||{}).data}))}});h.forEach(["post","put","patch"],function(t){function r(n){return function(s,i,a){return this.request(Ee(a||{},{method:t,headers:n?{"Content-Type":"multipart/form-data"}:{},url:s,data:i}))}}ve.prototype[t]=r(),ve.prototype[t+"Form"]=r(!0)});class fn{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let r;this.promise=new Promise(function(s){r=s});const n=this;this.promise.then(o=>{if(!n._listeners)return;let s=n._listeners.length;for(;s-- >0;)n._listeners[s](o);n._listeners=null}),this.promise.then=o=>{let s;const i=new Promise(a=>{n.subscribe(a),s=a}).then(o);return i.cancel=function(){n.unsubscribe(s)},i},t(function(s,i,a){n.reason||(n.reason=new ze(s,i,a),r(n.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const r=this._listeners.indexOf(t);r!==-1&&this._listeners.splice(r,1)}static source(){let t;return{token:new fn(function(o){t=o}),cancel:t}}}function El(e){return function(r){return e.apply(null,r)}}function Rl(e){return h.isObject(e)&&e.isAxiosError===!0}const Ur={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Ur).forEach(([e,t])=>{Ur[t]=e});function Ps(e){const t=new ve(e),r=ds(ve.prototype.request,t);return h.extend(r,ve.prototype,t,{allOwnKeys:!0}),h.extend(r,t,null,{allOwnKeys:!0}),r.create=function(o){return Ps(Ee(e,o))},r}const N=Ps(at);N.Axios=ve;N.CanceledError=ze;N.CancelToken=fn;N.isCancel=Es;N.VERSION=$s;N.toFormData=er;N.AxiosError=O;N.Cancel=N.CanceledError;N.all=function(t){return Promise.all(t)};N.spread=El;N.isAxiosError=Rl;N.mergeConfig=Ee;N.AxiosHeaders=V;N.formToJSON=e=>ks(h.isHTMLForm(e)?new FormData(e):e);N.getAdapter=As.getAdapter;N.HttpStatusCode=Ur;N.default=N;const Tl=async({fromCurrency:e,toCurrency:t,timeRange:r})=>{try{const{data:n}=await N({method:"get",url:`${Si}/${e}/ohlc`,params:{vs_currency:t,days:r,x_cg_demo_api_key:Ao}});return Ya(n)}catch{throw new Error("API Server error")}},jl=async({fromCurrency:e,toCurrency:t,timeRange:r})=>{try{const{data:{Data:{Data:n}}}=await N({method:"get",url:Ci,params:{api_key:Yr,fsym:e,tsym:t,aggregate:1,limit:r}});return{[e]:ls(n)}}catch{throw new Error("API Server error")}},Ol=async({fromCurrency:e,toCurrency:t})=>{try{const{data:{Data:{Data:r}}}=await N({method:"get",url:ki,params:{api_key:Yr,fsym:e,tsym:t,aggregate:1,limit:12}});return ls(r)}catch{throw new Error("API Server error")}},Al=async({toCurrency:e,fromCurrencies:t})=>{try{const{data:r}=await N({method:"get",url:_i,params:{vs_currency:e,ids:t,x_cg_demo_api_key:Ao}});return r}catch{throw new Error("API Server error")}},$l=async()=>{try{const{data:{Data:e}}=await N({method:"get",url:vi,params:{api_key:Yr}});return e}catch{throw new Error("API Server error")}};B("2024-07-11T00:00:00.000Z"),B("2024-07-12T00:00:00.000Z"),B("2024-07-13T00:00:00.000Z"),B("2024-07-14T00:00:00.000Z"),B("2024-07-15T00:00:00.000Z"),B("2024-07-16T00:00:00.000Z"),B("2024-07-17T00:00:00.000Z"),B("2024-07-18T00:00:00.000Z"),B("2024-07-11T00:00:00.000Z"),B("2024-07-12T00:00:00.000Z"),B("2024-07-13T00:00:00.000Z"),B("2024-07-14T00:00:00.000Z"),B("2024-07-15T00:00:00.000Z"),B("2024-07-16T00:00:00.000Z"),B("2024-07-17T00:00:00.000Z"),B("2024-07-18T00:00:00.000Z");const no=[{value:"1",label:"1D"},{value:"7",label:"1W"},{value:"30",label:"1M"}],oo=[{value:"7",label:"Weekly"},{value:"30",label:"Monthly"},{value:"90",label:"Quarterly"}],so=["#7517F8","#E323FF","#4DFFDF","#4DA1FF","#F5AC6E","#60B7FF","#007AFF","#e9d4ff","#d2e031","#68822a","#f9d637","#48174d"],ct=18e5,lt=S.button.attrs(e=>({$width:e.$width==="full"?"100%":"120px"}))`
  width: ${e=>e.$width};
  height: 40px;
  font-family: ${({theme:e})=>e.fonts.interSemiBold};
  text-align: center;
  color: ${({theme:e})=>e.sharedColors.btnIcon};
  text-shadow: 1px 1px black;
  border-radius: ${({theme:e})=>e.borderRadius.extraSmall};
  border: none;
  padding: 0 20px;
  background-color: #ac6aec;
  transition: background-color 0.5s ease-in;

  &:hover {
    background-color: #8130f1;
  }

  /* experimental! causes validation errors! */

  /* @property --color1 {
    syntax: "<color>";
    initial-value: rgba(172, 106, 236, 1);
    inherits: false;
  }

  @property --color2 {
    syntax: "<color>";
    initial-value: rgba(187, 127, 245, 1);
    inherits: false;
  }

  background-color: #ac6aec;
  background: linear-gradient(var(--color1), var(--color2));
  transition: --color1 0.5s, --color2 0.5s;

  &:hover {
    --color1: rgba(172, 106, 236, 0.5);
    --color2: rgba(187, 127, 245, 0.5);
  }

  @-moz-document url-prefix() {
    & {
      background-color: #ac6aec;
      transition: background-color 0.5s ease-in;
    }

    &:hover {
      background-color: #7517f8;
    }
  } */
`,rr=q`
  display: flex;
  flex-direction: column;
`,ut=q`
  ${rr};
  align-items: center;
`,tt=q`
  ${ut};
  justify-content: center;
`,pn=q`
  display: flex;
  align-items: center;
`,ye=q`
  ${pn};
  justify-content: space-between;
`,Pl=q`
  display: flex;
  justify-content: flex-end;
`,hn=q`
  ${ut};
  position: relative;
  width: 100%;
`,Ds=q`
  ${tt};
  background-color: transparent;
  width: 100%;
`,io=S.input`
  width: 100%;
  height: 47px;
  font-family: ${({theme:e})=>e.fonts.interRegular};
  color: ${({theme:e})=>e.sharedColors.searchText};
  background: ${({theme:e})=>e.sharedColors.searchBackground};
  border-radius: ${({theme:e})=>e.borderRadius.medium};
  border: none;
  outline: none;
  padding: 5px 10px;
  margin: 5px 0;
  caret-color: ${({theme:e})=>e.sharedColors.searchText};

  &:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 1000px
      ${({theme:e})=>e.sharedColors.searchBackground} inset !important;
    -webkit-text-fill-color: ${({theme:e})=>e.sharedColors.searchText} !important;
    border: 1px solid ${({theme:e})=>e.sharedColors.searchBackground};
    transition: background-color 5000s ease-in-out 0s;
  }

  &::placeholder {
    color: ${({theme:e})=>e.color.border};
  }

  &:focus {
    box-shadow: inset 0px 0px 5px
      ${({theme:e})=>e.sharedColors.accentColor};
  }
`,Ns=q`
  width: 21px;
  height: 23px;
  fill: ${({theme:e})=>e.color.navBarSvg};

  &:hover {
    fill: ${({theme:e})=>e.color.navBarSvgActive};
  }
`,Ls=S(lt)`
  svg {
    width: 28px;
    height: 24px;
    vertical-align: middle;
    fill: ${({theme:e})=>e.sharedColors.btnIcon};
    transition: fill 0.3s ease-in-out;
  }

  &:hover svg {
    fill: ${({theme:e})=>e.sharedColors.accentColor};
  }
`,mn=q`
  position: relative;
  width: auto;
  padding: 10px 13px;
  font-family: ${({theme:e})=>e.fonts.interBold};
  color: ${({theme:e})=>e.sharedColors.btnIcon};
  background: ${({theme:e})=>e.sharedColors.sortBackground};
  border-radius: ${({theme:e})=>e.borderRadius.extraSmall};
  border: none;
  border-right: 10px solid ${({theme:e})=>e.sharedColors.selectBorder};
  outline: none;

  &::-ms-expand {
    display: none;
  }
`,gn=q`
  background-color: #484545;

  &:not(:checked) {
    font-family: ${({theme:e})=>e.fonts.interBold}, sans-serif;
    color: ${({theme:e})=>e.sharedColors.textSecondary};
    font-weight: 700;
  }
`,Is=q`
  height: 100%;
  padding-left: 10px;
`,yn=q`
  align-items: flex-start;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 0 15px 0 21px;
  z-index: 100;
`,Bs=S.div.attrs(e=>({$border:e.$border==="true"?"1px solid rgba(255, 255, 255, 0.5)":"none"}))`
  background: ${({theme:e})=>e.color.boxBackground};
  border-radius: ${({theme:e})=>e.borderRadius.large};
  width: ${e=>e.$width};
  border: ${e=>e.$border};
  padding: ${e=>e.$padding};
`,Dl=Wa`
  0% {
    transform: rotateY(0deg);
  }

  50% {
    transform: rotateY(180deg);
  }

  100% {
    transform: rotateY(360deg);
  }
`,Nl=S.div`
  ${Ds};
  perspective: 1000px;
  height: ${({height:e})=>e||"100vh"};
`,Ll=S.svg`
  animation: ${Dl} 1.5s linear infinite;
  background: transparent;
  width: 40px;
  height: 40px;
`;function Te({height:e}){return d.jsx(Nl,{height:e,children:d.jsx(Ll,{children:d.jsx("use",{xlinkHref:"svg/sprite.svg#loader"})})})}const Il=S.div`
  ${Ds};
  color: ${({theme:e})=>e.color.textMain};
  height: 100%;
`;function Ue(){return d.jsx(Il,{children:"Data is currently unavailable!"})}const Bl=S(Bs)`
  ${rr};
  position: relative;
  min-width: 240px;
  width: 100%;
  height: 155px;
  font-family: ${({theme:e})=>e.fonts.interSemiBold};
  background: ${({theme:e})=>e.color.boxInnerBackground};
  border: none;
  padding: 30px 0 15px;
  margin: 30px 10px 10px;
`,Fl=S.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50px;
  height: 50px;
`,Ml=S.div`
  ${yn}
  ${ye}
  top: 30px;
  color: ${({theme:e})=>e.sharedColors.btnIcon};
  text-transform: uppercase;
`,zl=S.svg`
  width: 13px;
  height: 17px;
  fill: ${({theme:e})=>e.sharedColors.btnIcon};
  vertical-align: top;
  margin: 0 3px;
`,Ul=S.span`
  position: absolute;
  top: 53px;
  font-size: 1rem;
  color: ${({theme:e})=>e.color.textMain};
  margin-left: 20px;

  &.positive {
    color: #e72d04;
    text-shadow: 1px 1px black;
  }

  &.negative {
    color: #00c287;
    text-shadow: 1px 1px black;
  }
`,Hl=S.svg`
  width: 16px;
  height: 17px;

  &.positive {
    --fill-color: #e72d04;
  }

  &.negative {
    --fill-color: #00c287;
    transform: rotate(180deg);
  }
`;function ql({image:e,symbol:t,current_price:r,position:n}){const{ref:o,width:s=1}=qt(),{id:i}=W(x=>x.config.exchangeCurrency),a=tc(r),[l,u]=T.useState([]),[c,f]=T.useState(!0),[m,g]=T.useState(!1),_=n==="even"?"#4DFFDF":"#E323FF",k=!m&&!c,C=T.useMemo(()=>Qr({positive:r<Number(a),negative:r>Number(a)}),[r,a]),b=async()=>{g(!1),f(!0);try{const x=await Ol({fromCurrency:t,toCurrency:i});u(x),f(!1)}catch(x){console.error(x),f(!1),g(!0)}};return T.useEffect(()=>{b();const x=setInterval(()=>{b()},ct);return()=>{clearInterval(x)}},[t]),d.jsxs(Bl,{ref:o,children:[d.jsx(Fl,{children:d.jsx("img",{src:e,alt:t,width:"50",height:"50"})}),d.jsxs(Ml,{children:[d.jsxs("span",{children:[t,d.jsx(zl,{children:d.jsx("use",{xlinkHref:"svg/sprite.svg#arrow-right"})}),i]}),a&&d.jsx(d.Fragment,{children:d.jsx(Hl,{className:C,children:d.jsx("use",{xlinkHref:"svg/sprite.svg#circled-arrow"})})})]}),d.jsx(Ul,{className:C,children:Qa(t,r)}),d.jsxs("div",{children:[k&&d.jsx(Li,{width:s,height:200,domainPadding:{y:[50,0]},color:_,children:d.jsx(Do,{data:l})}),c&&d.jsx(Te,{height:"150px"}),m&&d.jsx(Ue,{})]})]})}const Gl=S.div`
  ${pn};
  height: calc(100% - 1px);
  overflow-y: hidden;
  overflow-x: auto;
`;function Wl(){const{currenciesList:e,exchangeCurrency:t}=W(f=>f.config),{data:r,isLoading:n,error:o}=W(f=>f.cryptoData),[s,i]=T.useState({}),a=T.useCallback(f=>f%2===0?"even":"odd",[]),l=!n&&!o&&r.length,u=n&&!r.length,c=!n&&!r.length&&o;return T.useEffect(()=>{const f=new WebSocket(Ei);return f.onopen=function(){const g={action:"SubAdd",subs:e.map(({symbol:p})=>`5~CCCAGG~${p==null?void 0:p.toUpperCase()}~${t.id}`)};f.send(JSON.stringify(g))},f.onmessage=function(g){const{FROMSYMBOL:p,PRICE:y}=JSON.parse(g.data);p&&y&&i(_=>{const k=p.toLowerCase(),C=_[k];return{..._,...C&&{[k]:{...C,current_price:y}}}})},()=>{f.close()}},[]),T.useEffect(()=>{i(Xa(r))},[r]),d.jsxs(Gl,{children:[l&&Object.entries(s).map(([f,m],g)=>d.jsx(ql,{position:a(g),...m},f)),u&&d.jsx(Te,{}),c&&d.jsx(Ue,{})]})}const Fs=()=>{const e="#868B93",t="#372C44",r="#261E35",n="rgba(0, 0, 0, 0.8)",o={axis:{stroke:e,strokeWidth:1},ticks:{stroke:e,size:4},tickLabels:{fill:e,fontSize:10}};return{chartMT:{marginTop:"15px"},axisMain:{...o,grid:{stroke:0}},axisDependent:{...o,grid:{stroke:t}},flyoutTooltipStyle:{fill:n},candleStick:{data:{fillOpacity:.7,stroke:r,strokeWidth:1}}}},Vl=S.div`
  ${Is};
`,Zl=S.div`
  ${Pl};
  ${yn};
  padding-bottom: 18px;
`,Kl=S.select`
  ${mn};
`,Jl=S.option`
  ${gn};
`,Yl=Ii("voronoi","cursor");function Xl(){const e=Fs(),{ref:t,width:r=1,height:n=1}=qt(),{currenciesList:o,exchangeCurrency:s}=W(E=>E.config),[i,a]=T.useState({}),[l,u]=T.useState(!0),[c,f]=T.useState(!1),[m,g]=T.useState(oo[0].value),p=T.useMemo(()=>Object.getOwnPropertyNames(i).length,[i]),y="#c43a31",_=!c&&!l&&!!p,k=!l&&c,C=async E=>{f(!1),u(!0);try{const v=await jl({fromCurrency:E,toCurrency:s.id,timeRange:m});a(w=>({...w,...v}))}catch(v){console.error(v),u(!1),f(!0)}},b=async()=>{u(!0);for await(const E of o.map(({symbol:v})=>cs(500).then(()=>{C(v)})));u(!1)},x=({target:{value:E}})=>{g(E)};return T.useEffect(()=>{b();const E=setInterval(()=>{b()},ct);return()=>{clearInterval(E)}},[m]),d.jsxs(Vl,{ref:t,children:[d.jsx(Zl,{children:d.jsx(Kl,{value:m,onChange:x,"aria-label":"Market period overview",children:oo.map(({value:E,label:v})=>d.jsx(Jl,{value:E,children:v},E))})}),_&&d.jsxs(No,{theme:Lo.material,domainPadding:{x:r<600?40:110,y:10},scale:{x:"time"},width:r,height:n,containerComponent:d.jsx(Yl,{style:e.chartMT,cursorDimension:"x",voronoiDimension:"x",labelComponent:d.jsx(Bi,{centerOffset:{x:80,y:10},constrainToVisibleArea:!0,dy:-50,flyoutStyle:e.flyoutTooltipStyle}),labels:({datum:E})=>{const v=Object.entries(i).find(([w,R])=>R.find(({y:j})=>j===E.y));return`${v==null?void 0:v[0].toLocaleUpperCase()}: ${s.symbol}${E.y} (${ec(E.x)})`}}),children:[d.jsx(Ot,{style:e.axisMain}),d.jsx(Ot,{dependentAxis:!0,style:e.axisDependent,tickFormat:us}),Object.entries(i).map(([E,v],w)=>d.jsx(Do,{interpolation:"basis",style:{data:{stroke:so[w]||y},labels:{fill:so[w]||y}},data:v},E))]},m),l&&d.jsx(Te,{height:`${n}px`}),k&&d.jsx(Ue,{})]})}const Oe={xs:"375px",sm:"600px",md:"900px",lg:"1200px",xl:"1440px",xxl:"1920px"},L={xs:`(max-width: ${Oe.xs})`,sm:`(max-width: ${Oe.sm})`,md:`(max-width: ${Oe.md})`,lg:`(max-width: ${Oe.lg})`,xl:`(max-width: ${Oe.xl})`,xxl:`(max-width: ${Oe.xxl})`},Ql=S.div`
  ${rr}
  height: 100%;
  padding: 10px;
  overflow: auto;
`,eu=S.article`
  display: flex;
  gap: 20px;
  min-width: 450px;
  max-width: 900px;
  width: 100%;
  background: ${({theme:e})=>e.color.boxInnerBackground};
  border-radius: ${({theme:e})=>e.borderRadius.small};
  box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
    rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
    rgba(0, 0, 0, 0.09) 0px 32px 16px;
  padding: 20px;
  margin: 0 auto 30px;

  @media ${L.sm} {
    flex-direction: column;
    min-width: 100%;
    padding: 10px;
  }

  &:last-child {
    margin-bottom: 0;
  }
`,tu=S.div`
  border-radius: ${({theme:e})=>e.borderRadius.extraSmall};
  min-width: 160px;
  max-width: 210px;
  flex-basis: 30%;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;

  @media ${L.sm} {
    /* min-width: 100%;
    max-height: 100px; */
    display: none;
  }

  img {
    border-radius: ${({theme:e})=>e.borderRadius.extraSmall};
    aspect-ratio: 10 / 9;
    transition: transform 0.3s linear;
  }
`,ru=S.div`
  ${rr};
  flex-grow: 1;
`,nu=S.h3`
  font-size: clamp(13.5px, 2vw, 16px);
  line-height: 1.1;
  color: ${({theme:e})=>e.sharedColors.searchText};
  text-shadow: 1px 1px black;
  margin-bottom: 20px;
  transition: color 0.3s ease-in-out;

  @media ${L.sm} {
    margin-bottom: 13px;
  }

  &:hover {
    color: ${({theme:e})=>e.sharedColors.accentLight};
  }
`,ou=S.p`
  font-family: ${({theme:e})=>e.fonts.interRegular};
  font-size: 12px;
  color: ${({theme:e})=>e.sharedColors.btnIcon};
  margin-bottom: 10px;

  -webkit-box-orient: vertical;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
`,su=S.div`
  ${ye};
  flex-wrap: wrap;
  font-size: 0.6875rem;
`,iu=S.p`
  ${ye};
  color: ${({theme:e})=>e.color.articleTime};
  margin-right: 15px;
  margin-top: 5px;
`,au=S.div`
  ${ye};
  gap: 7px;
  margin-top: 5px;

  span {
    display: inline-block;
    color: ${({theme:e})=>e.sharedColors.btnIcon};
    border-radius: ${({theme:e})=>e.borderRadius.medium};
    background: ${({theme:e})=>e.sharedColors.accentColor};
    padding: 5px 7px;
    margin: 2px;
  }
`,cu=S.span`
  display: inline-block;
  color: ${({theme:e})=>e.sharedColors.btnIcon};
  border-radius: ${({theme:e})=>e.borderRadius.medium};
  background: ${({theme:e})=>e.sharedColors.accentColor};
  padding: 5px 7px;
  margin: 2px;
`;function lu(){const[e,t]=T.useState([]),[r,n]=T.useState(!0),[o,s]=T.useState(!1),i=async()=>{s(!1),n(!0);try{const l=await $l();t(l),n(!1)}catch(l){console.error(l),n(!1),s(!0)}},a=l=>B.unix(l).format("MMMM Do YYYY, h:mm a");return T.useEffect(()=>{i();const l=setInterval(()=>{i()},ct);return()=>{clearInterval(l)}},[]),d.jsxs(Ql,{children:[e==null?void 0:e.map(({id:l,imageurl:u,title:c,url:f,categories:m,published_on:g,body:p})=>d.jsxs(eu,{children:[d.jsx(tu,{children:d.jsx("img",{src:u,width:"300",height:"300",alt:c})}),d.jsxs(ru,{children:[d.jsx(nu,{children:d.jsx("a",{href:f,target:"_blank",children:c})}),d.jsx(ou,{children:p}),d.jsxs(su,{children:[d.jsx(iu,{children:a(g)}),d.jsx(au,{children:m.split("|").map(y=>d.jsx(cu,{children:y},y))})]})]})]},l)),r&&d.jsx(Te,{}),o&&d.jsx(Ue,{})]})}const uu=S.div`
  ${Is};
`,du=S.div`
  ${ye};
  ${yn};
`,fu=S.div`
  display: flex;
  gap: 5px;
  margin-left: 5px;
`,pu=S(lt)`
  width: 38px;
  height: 37px;
  padding: 0;
  font-family: ${({theme:e})=>e.fonts.interBold};
  background: ${({theme:e})=>e.sharedColors.sortBackground};
  color: ${({theme:e})=>e.sharedColors.textSecondary};
  border-radius: ${({theme:e})=>e.borderRadius.extraSmall};

  &.active {
    color: ${({theme:e})=>e.sharedColors.btnIcon};
  }
`,hu=S.select`
  ${mn};
`,mu=S.option`
  ${gn};
`;function gu(){const e=Fs(),{ref:t,width:r=1,height:n=1}=qt(),{currenciesList:o,exchangeCurrency:s}=W(x=>x.config),[i,a]=T.useState([]),[l,u]=T.useState(!0),[c,f]=T.useState(!1),[m,g]=T.useState(o[0].id),[p,y]=T.useState(no[0].value),_=!c&&!l&&!!i.length,k=async()=>{f(!1),u(!0);try{const x=await Tl({fromCurrency:m,toCurrency:s.id,timeRange:p});a(x),u(!1)}catch(x){console.error(x),u(!1),f(!0)}},C=({target:{value:x}})=>{g(x)},b=x=>{const{value:E}=x.target;y(E)};return T.useEffect(()=>{k();const x=setInterval(()=>{k()},ct);return()=>{clearInterval(x)}},[m,p]),d.jsxs(uu,{ref:t,children:[d.jsxs(du,{children:[d.jsx(hu,{value:m,onChange:C,"aria-label":"Coin to currency",children:o.map(({id:x,symbol:E})=>d.jsxs(mu,{value:x,children:[E,"/",s.id]},x))}),d.jsx(fu,{children:no.map(({value:x,label:E})=>d.jsx(pu,{value:x,className:Qr({active:p===x}),onClick:b,children:E},x))})]}),d.jsx("svg",{style:{position:"absolute"},children:d.jsxs("defs",{children:[d.jsxs("linearGradient",{id:"positiveGradient",x1:"0%",y1:"0%",x2:"0%",y2:"100%",children:[d.jsx("stop",{offset:"0%",stopColor:"#4DFFDF"}),d.jsx("stop",{offset:"100%",stopColor:"#4DA1FF"})]}),d.jsxs("linearGradient",{id:"negativeGradient",x1:"0%",y1:"0%",x2:"0%",y2:"100%",children:[d.jsx("stop",{offset:"0%",stopColor:"#E323FF"}),d.jsx("stop",{offset:"100%",stopColor:"#7517F8"})]})]})}),_&&d.jsxs(No,{theme:Lo.material,domainPadding:{x:r<600?40:110},scale:{x:"time"},width:r,height:n,containerComponent:d.jsx(Fi,{style:e.chartMT}),children:[d.jsx(Ot,{style:e.axisMain}),d.jsx(Ot,{dependentAxis:!0,style:e.axisDependent,tickFormat:us}),d.jsx(Mi,{style:e.candleStick,candleColors:{positive:"url(#positiveGradient)",negative:"url(#negativeGradient)"},data:i})]},`${m}-${p}`),l&&d.jsx(Te,{height:`${n}px`}),c&&d.jsx(Ue,{})]})}function z(e){return`Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}var yu=typeof Symbol=="function"&&Symbol.observable||"@@observable",ao=yu,_r=()=>Math.random().toString(36).substring(7).split("").join("."),xu={INIT:`@@redux/INIT${_r()}`,REPLACE:`@@redux/REPLACE${_r()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${_r()}`},Bt=xu;function xn(e){if(typeof e!="object"||e===null)return!1;let t=e;for(;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t||Object.getPrototypeOf(e)===null}function Ms(e,t,r){if(typeof e!="function")throw new Error(z(2));if(typeof t=="function"&&typeof r=="function"||typeof r=="function"&&typeof arguments[3]=="function")throw new Error(z(0));if(typeof t=="function"&&typeof r>"u"&&(r=t,t=void 0),typeof r<"u"){if(typeof r!="function")throw new Error(z(1));return r(Ms)(e,t)}let n=e,o=t,s=new Map,i=s,a=0,l=!1;function u(){i===s&&(i=new Map,s.forEach((_,k)=>{i.set(k,_)}))}function c(){if(l)throw new Error(z(3));return o}function f(_){if(typeof _!="function")throw new Error(z(4));if(l)throw new Error(z(5));let k=!0;u();const C=a++;return i.set(C,_),function(){if(k){if(l)throw new Error(z(6));k=!1,u(),i.delete(C),s=null}}}function m(_){if(!xn(_))throw new Error(z(7));if(typeof _.type>"u")throw new Error(z(8));if(typeof _.type!="string")throw new Error(z(17));if(l)throw new Error(z(9));try{l=!0,o=n(o,_)}finally{l=!1}return(s=i).forEach(C=>{C()}),_}function g(_){if(typeof _!="function")throw new Error(z(10));n=_,m({type:Bt.REPLACE})}function p(){const _=f;return{subscribe(k){if(typeof k!="object"||k===null)throw new Error(z(11));function C(){const x=k;x.next&&x.next(c())}return C(),{unsubscribe:_(C)}},[ao](){return this}}}return m({type:Bt.INIT}),{dispatch:m,subscribe:f,getState:c,replaceReducer:g,[ao]:p}}function bu(e){Object.keys(e).forEach(t=>{const r=e[t];if(typeof r(void 0,{type:Bt.INIT})>"u")throw new Error(z(12));if(typeof r(void 0,{type:Bt.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(z(13))})}function zs(e){const t=Object.keys(e),r={};for(let s=0;s<t.length;s++){const i=t[s];typeof e[i]=="function"&&(r[i]=e[i])}const n=Object.keys(r);let o;try{bu(r)}catch(s){o=s}return function(i={},a){if(o)throw o;let l=!1;const u={};for(let c=0;c<n.length;c++){const f=n[c],m=r[f],g=i[f],p=m(g,a);if(typeof p>"u")throw a&&a.type,new Error(z(14));u[f]=p,l=l||p!==g}return l=l||n.length!==Object.keys(i).length,l?u:i}}function Ft(...e){return e.length===0?t=>t:e.length===1?e[0]:e.reduce((t,r)=>(...n)=>t(r(...n)))}function wu(...e){return t=>(r,n)=>{const o=t(r,n);let s=()=>{throw new Error(z(15))};const i={getState:o.getState,dispatch:(l,...u)=>s(l,...u)},a=e.map(l=>l(i));return s=Ft(...a)(o.dispatch),{...o,dispatch:s}}}function _u(e){return xn(e)&&"type"in e&&typeof e.type=="string"}var Us=Symbol.for("immer-nothing"),co=Symbol.for("immer-draftable"),K=Symbol.for("immer-state");function Q(e,...t){throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var Ie=Object.getPrototypeOf;function ge(e){return!!e&&!!e[K]}function le(e){var t;return e?Hs(e)||Array.isArray(e)||!!e[co]||!!((t=e.constructor)!=null&&t[co])||or(e)||sr(e):!1}var Su=Object.prototype.constructor.toString();function Hs(e){if(!e||typeof e!="object")return!1;const t=Ie(e);if(t===null)return!0;const r=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return r===Object?!0:typeof r=="function"&&Function.toString.call(r)===Su}function Mt(e,t){nr(e)===0?Reflect.ownKeys(e).forEach(r=>{t(r,e[r],e)}):e.forEach((r,n)=>t(n,r,e))}function nr(e){const t=e[K];return t?t.type_:Array.isArray(e)?1:or(e)?2:sr(e)?3:0}function Hr(e,t){return nr(e)===2?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function qs(e,t,r){const n=nr(e);n===2?e.set(t,r):n===3?e.add(r):e[t]=r}function vu(e,t){return e===t?e!==0||1/e===1/t:e!==e&&t!==t}function or(e){return e instanceof Map}function sr(e){return e instanceof Set}function we(e){return e.copy_||e.base_}function qr(e,t){if(or(e))return new Map(e);if(sr(e))return new Set(e);if(Array.isArray(e))return Array.prototype.slice.call(e);const r=Hs(e);if(t===!0||t==="class_only"&&!r){const n=Object.getOwnPropertyDescriptors(e);delete n[K];let o=Reflect.ownKeys(n);for(let s=0;s<o.length;s++){const i=o[s],a=n[i];a.writable===!1&&(a.writable=!0,a.configurable=!0),(a.get||a.set)&&(n[i]={configurable:!0,writable:!0,enumerable:a.enumerable,value:e[i]})}return Object.create(Ie(e),n)}else{const n=Ie(e);if(n!==null&&r)return{...e};const o=Object.create(n);return Object.assign(o,e)}}function bn(e,t=!1){return ir(e)||ge(e)||!le(e)||(nr(e)>1&&(e.set=e.add=e.clear=e.delete=Cu),Object.freeze(e),t&&Object.entries(e).forEach(([r,n])=>bn(n,!0))),e}function Cu(){Q(2)}function ir(e){return Object.isFrozen(e)}var ku={};function Re(e){const t=ku[e];return t||Q(0,e),t}var rt;function Gs(){return rt}function Eu(e,t){return{drafts_:[],parent_:e,immer_:t,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function lo(e,t){t&&(Re("Patches"),e.patches_=[],e.inversePatches_=[],e.patchListener_=t)}function Gr(e){Wr(e),e.drafts_.forEach(Ru),e.drafts_=null}function Wr(e){e===rt&&(rt=e.parent_)}function uo(e){return rt=Eu(rt,e)}function Ru(e){const t=e[K];t.type_===0||t.type_===1?t.revoke_():t.revoked_=!0}function fo(e,t){t.unfinalizedDrafts_=t.drafts_.length;const r=t.drafts_[0];return e!==void 0&&e!==r?(r[K].modified_&&(Gr(t),Q(4)),le(e)&&(e=zt(t,e),t.parent_||Ut(t,e)),t.patches_&&Re("Patches").generateReplacementPatches_(r[K].base_,e,t.patches_,t.inversePatches_)):e=zt(t,r,[]),Gr(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),e!==Us?e:void 0}function zt(e,t,r){if(ir(t))return t;const n=t[K];if(!n)return Mt(t,(o,s)=>po(e,n,t,o,s,r)),t;if(n.scope_!==e)return t;if(!n.modified_)return Ut(e,n.base_,!0),n.base_;if(!n.finalized_){n.finalized_=!0,n.scope_.unfinalizedDrafts_--;const o=n.copy_;let s=o,i=!1;n.type_===3&&(s=new Set(o),o.clear(),i=!0),Mt(s,(a,l)=>po(e,n,o,a,l,r,i)),Ut(e,o,!1),r&&e.patches_&&Re("Patches").generatePatches_(n,r,e.patches_,e.inversePatches_)}return n.copy_}function po(e,t,r,n,o,s,i){if(ge(o)){const a=s&&t&&t.type_!==3&&!Hr(t.assigned_,n)?s.concat(n):void 0,l=zt(e,o,a);if(qs(r,n,l),ge(l))e.canAutoFreeze_=!1;else return}else i&&r.add(o);if(le(o)&&!ir(o)){if(!e.immer_.autoFreeze_&&e.unfinalizedDrafts_<1)return;zt(e,o),(!t||!t.scope_.parent_)&&typeof n!="symbol"&&Object.prototype.propertyIsEnumerable.call(r,n)&&Ut(e,o)}}function Ut(e,t,r=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&bn(t,r)}function Tu(e,t){const r=Array.isArray(e),n={type_:r?1:0,scope_:t?t.scope_:Gs(),modified_:!1,finalized_:!1,assigned_:{},parent_:t,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1};let o=n,s=wn;r&&(o=[n],s=nt);const{revoke:i,proxy:a}=Proxy.revocable(o,s);return n.draft_=a,n.revoke_=i,a}var wn={get(e,t){if(t===K)return e;const r=we(e);if(!Hr(r,t))return ju(e,r,t);const n=r[t];return e.finalized_||!le(n)?n:n===Sr(e.base_,t)?(vr(e),e.copy_[t]=Zr(n,e)):n},has(e,t){return t in we(e)},ownKeys(e){return Reflect.ownKeys(we(e))},set(e,t,r){const n=Ws(we(e),t);if(n!=null&&n.set)return n.set.call(e.draft_,r),!0;if(!e.modified_){const o=Sr(we(e),t),s=o==null?void 0:o[K];if(s&&s.base_===r)return e.copy_[t]=r,e.assigned_[t]=!1,!0;if(vu(r,o)&&(r!==void 0||Hr(e.base_,t)))return!0;vr(e),Vr(e)}return e.copy_[t]===r&&(r!==void 0||t in e.copy_)||Number.isNaN(r)&&Number.isNaN(e.copy_[t])||(e.copy_[t]=r,e.assigned_[t]=!0),!0},deleteProperty(e,t){return Sr(e.base_,t)!==void 0||t in e.base_?(e.assigned_[t]=!1,vr(e),Vr(e)):delete e.assigned_[t],e.copy_&&delete e.copy_[t],!0},getOwnPropertyDescriptor(e,t){const r=we(e),n=Reflect.getOwnPropertyDescriptor(r,t);return n&&{writable:!0,configurable:e.type_!==1||t!=="length",enumerable:n.enumerable,value:r[t]}},defineProperty(){Q(11)},getPrototypeOf(e){return Ie(e.base_)},setPrototypeOf(){Q(12)}},nt={};Mt(wn,(e,t)=>{nt[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}});nt.deleteProperty=function(e,t){return nt.set.call(this,e,t,void 0)};nt.set=function(e,t,r){return wn.set.call(this,e[0],t,r,e[0])};function Sr(e,t){const r=e[K];return(r?we(r):e)[t]}function ju(e,t,r){var o;const n=Ws(t,r);return n?"value"in n?n.value:(o=n.get)==null?void 0:o.call(e.draft_):void 0}function Ws(e,t){if(!(t in e))return;let r=Ie(e);for(;r;){const n=Object.getOwnPropertyDescriptor(r,t);if(n)return n;r=Ie(r)}}function Vr(e){e.modified_||(e.modified_=!0,e.parent_&&Vr(e.parent_))}function vr(e){e.copy_||(e.copy_=qr(e.base_,e.scope_.immer_.useStrictShallowCopy_))}var Ou=class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(t,r,n)=>{if(typeof t=="function"&&typeof r!="function"){const s=r;r=t;const i=this;return function(l=s,...u){return i.produce(l,c=>r.call(this,c,...u))}}typeof r!="function"&&Q(6),n!==void 0&&typeof n!="function"&&Q(7);let o;if(le(t)){const s=uo(this),i=Zr(t,void 0);let a=!0;try{o=r(i),a=!1}finally{a?Gr(s):Wr(s)}return lo(s,n),fo(o,s)}else if(!t||typeof t!="object"){if(o=r(t),o===void 0&&(o=t),o===Us&&(o=void 0),this.autoFreeze_&&bn(o,!0),n){const s=[],i=[];Re("Patches").generateReplacementPatches_(t,o,s,i),n(s,i)}return o}else Q(1,t)},this.produceWithPatches=(t,r)=>{if(typeof t=="function")return(i,...a)=>this.produceWithPatches(i,l=>t(l,...a));let n,o;return[this.produce(t,r,(i,a)=>{n=i,o=a}),n,o]},typeof(e==null?void 0:e.autoFreeze)=="boolean"&&this.setAutoFreeze(e.autoFreeze),typeof(e==null?void 0:e.useStrictShallowCopy)=="boolean"&&this.setUseStrictShallowCopy(e.useStrictShallowCopy)}createDraft(e){le(e)||Q(8),ge(e)&&(e=Vs(e));const t=uo(this),r=Zr(e,void 0);return r[K].isManual_=!0,Wr(t),r}finishDraft(e,t){const r=e&&e[K];(!r||!r.isManual_)&&Q(9);const{scope_:n}=r;return lo(n,t),fo(void 0,n)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}applyPatches(e,t){let r;for(r=t.length-1;r>=0;r--){const o=t[r];if(o.path.length===0&&o.op==="replace"){e=o.value;break}}r>-1&&(t=t.slice(r+1));const n=Re("Patches").applyPatches_;return ge(e)?n(e,t):this.produce(e,o=>n(o,t))}};function Zr(e,t){const r=or(e)?Re("MapSet").proxyMap_(e,t):sr(e)?Re("MapSet").proxySet_(e,t):Tu(e,t);return(t?t.scope_:Gs()).drafts_.push(r),r}function Vs(e){return ge(e)||Q(10,e),Zs(e)}function Zs(e){if(!le(e)||ir(e))return e;const t=e[K];let r;if(t){if(!t.modified_)return t.base_;t.finalized_=!0,r=qr(e,t.scope_.immer_.useStrictShallowCopy_)}else r=qr(e,!0);return Mt(r,(n,o)=>{qs(r,n,Zs(o))}),t&&(t.finalized_=!1),r}var J=new Ou,Ks=J.produce;J.produceWithPatches.bind(J);J.setAutoFreeze.bind(J);J.setUseStrictShallowCopy.bind(J);J.applyPatches.bind(J);J.createDraft.bind(J);J.finishDraft.bind(J);function Au(e,t=`expected a function, instead received ${typeof e}`){if(typeof e!="function")throw new TypeError(t)}function $u(e,t=`expected an object, instead received ${typeof e}`){if(typeof e!="object")throw new TypeError(t)}function Pu(e,t="expected all items to be functions, instead received the following types: "){if(!e.every(r=>typeof r=="function")){const r=e.map(n=>typeof n=="function"?`function ${n.name||"unnamed"}()`:typeof n).join(", ");throw new TypeError(`${t}[${r}]`)}}var ho=e=>Array.isArray(e)?e:[e];function Du(e){const t=Array.isArray(e[0])?e[0]:e;return Pu(t,"createSelector expects all input-selectors to be functions, but received the following types: "),t}function Nu(e,t){const r=[],{length:n}=e;for(let o=0;o<n;o++)r.push(e[o].apply(null,t));return r}var Lu=class{constructor(e){this.value=e}deref(){return this.value}},Iu=typeof WeakRef<"u"?WeakRef:Lu,Bu=0,mo=1;function yt(){return{s:Bu,v:void 0,o:null,p:null}}function _n(e,t={}){let r=yt();const{resultEqualityCheck:n}=t;let o,s=0;function i(){var f;let a=r;const{length:l}=arguments;for(let m=0,g=l;m<g;m++){const p=arguments[m];if(typeof p=="function"||typeof p=="object"&&p!==null){let y=a.o;y===null&&(a.o=y=new WeakMap);const _=y.get(p);_===void 0?(a=yt(),y.set(p,a)):a=_}else{let y=a.p;y===null&&(a.p=y=new Map);const _=y.get(p);_===void 0?(a=yt(),y.set(p,a)):a=_}}const u=a;let c;if(a.s===mo)c=a.v;else if(c=e.apply(null,arguments),s++,n){const m=((f=o==null?void 0:o.deref)==null?void 0:f.call(o))??o;m!=null&&n(m,c)&&(c=m,s!==0&&s--),o=typeof c=="object"&&c!==null||typeof c=="function"?new Iu(c):c}return u.s=mo,u.v=c,c}return i.clearCache=()=>{r=yt(),i.resetResultsCount()},i.resultsCount=()=>s,i.resetResultsCount=()=>{s=0},i}function Js(e,...t){const r=typeof e=="function"?{memoize:e,memoizeOptions:t}:e,n=(...o)=>{let s=0,i=0,a,l={},u=o.pop();typeof u=="object"&&(l=u,u=o.pop()),Au(u,`createSelector expects an output function after the inputs, but received: [${typeof u}]`);const c={...r,...l},{memoize:f,memoizeOptions:m=[],argsMemoize:g=_n,argsMemoizeOptions:p=[],devModeChecks:y={}}=c,_=ho(m),k=ho(p),C=Du(o),b=f(function(){return s++,u.apply(null,arguments)},..._),x=g(function(){i++;const v=Nu(C,arguments);return a=b.apply(null,v),a},...k);return Object.assign(x,{resultFunc:u,memoizedResultFunc:b,dependencies:C,dependencyRecomputations:()=>i,resetDependencyRecomputations:()=>{i=0},lastResult:()=>a,recomputations:()=>s,resetRecomputations:()=>{s=0},memoize:f,argsMemoize:g})};return Object.assign(n,{withTypes:()=>n}),n}var Fu=Js(_n),Mu=Object.assign((e,t=Fu)=>{$u(e,`createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof e}`);const r=Object.keys(e),n=r.map(s=>e[s]);return t(n,(...s)=>s.reduce((i,a,l)=>(i[r[l]]=a,i),{}))},{withTypes:()=>Mu});function Ys(e){return({dispatch:r,getState:n})=>o=>s=>typeof s=="function"?s(r,n,e):o(s)}var zu=Ys(),Uu=Ys,Hu=(...e)=>{const t=Js(...e),r=Object.assign((...n)=>{const o=t(...n),s=(i,...a)=>o(ge(i)?Vs(i):i,...a);return Object.assign(s,o),s},{withTypes:()=>r});return r};Hu(_n);var qu=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?Ft:Ft.apply(null,arguments)},Gu=e=>e&&typeof e.match=="function";function ce(e,t){function r(...n){if(t){let o=t(...n);if(!o)throw new Error(H(0));return{type:e,payload:o.payload,..."meta"in o&&{meta:o.meta},..."error"in o&&{error:o.error}}}return{type:e,payload:n[0]}}return r.toString=()=>`${e}`,r.type=e,r.match=n=>_u(n)&&n.type===e,r}var Xs=class Je extends Array{constructor(...t){super(...t),Object.setPrototypeOf(this,Je.prototype)}static get[Symbol.species](){return Je}concat(...t){return super.concat.apply(this,t)}prepend(...t){return t.length===1&&Array.isArray(t[0])?new Je(...t[0].concat(this)):new Je(...t.concat(this))}};function go(e){return le(e)?Ks(e,()=>{}):e}function Kr(e,t,r){if(e.has(t)){let o=e.get(t);return r.update&&(o=r.update(o,t,e),e.set(t,o)),o}if(!r.insert)throw new Error(H(10));const n=r.insert(t,e);return e.set(t,n),n}function Wu(e){return typeof e=="boolean"}var Vu=()=>function(t){const{thunk:r=!0,immutableCheck:n=!0,serializableCheck:o=!0,actionCreatorCheck:s=!0}=t??{};let i=new Xs;return r&&(Wu(r)?i.push(zu):i.push(Uu(r.extraArgument))),i},Zu="RTK_autoBatch",Qs=e=>t=>{setTimeout(t,e)},Ku=typeof window<"u"&&window.requestAnimationFrame?window.requestAnimationFrame:Qs(10),Ju=(e={type:"raf"})=>t=>(...r)=>{const n=t(...r);let o=!0,s=!1,i=!1;const a=new Set,l=e.type==="tick"?queueMicrotask:e.type==="raf"?Ku:e.type==="callback"?e.queueNotification:Qs(e.timeout),u=()=>{i=!1,s&&(s=!1,a.forEach(c=>c()))};return Object.assign({},n,{subscribe(c){const f=()=>o&&c(),m=n.subscribe(f);return a.add(c),()=>{m(),a.delete(c)}},dispatch(c){var f;try{return o=!((f=c==null?void 0:c.meta)!=null&&f[Zu]),s=!o,s&&(i||(i=!0,l(u))),n.dispatch(c)}finally{o=!0}}})},Yu=e=>function(r){const{autoBatch:n=!0}=r??{};let o=new Xs(e);return n&&o.push(Ju(typeof n=="object"?n:void 0)),o},Xu=!0;function Qu(e){const t=Vu(),{reducer:r=void 0,middleware:n,devTools:o=!0,preloadedState:s=void 0,enhancers:i=void 0}=e||{};let a;if(typeof r=="function")a=r;else if(xn(r))a=zs(r);else throw new Error(H(1));let l;typeof n=="function"?l=n(t):l=t();let u=Ft;o&&(u=qu({trace:!Xu,...typeof o=="object"&&o}));const c=wu(...l),f=Yu(c);let m=typeof i=="function"?i(f):f();const g=u(...m);return Ms(a,s,g)}function ei(e){const t={},r=[];let n;const o={addCase(s,i){const a=typeof s=="string"?s:s.type;if(!a)throw new Error(H(28));if(a in t)throw new Error(H(29));return t[a]=i,o},addMatcher(s,i){return r.push({matcher:s,reducer:i}),o},addDefaultCase(s){return n=s,o}};return e(o),[t,r,n]}function ed(e){return typeof e=="function"}function td(e,t){let[r,n,o]=ei(t),s;if(ed(e))s=()=>go(e());else{const a=go(e);s=()=>a}function i(a=s(),l){let u=[r[l.type],...n.filter(({matcher:c})=>c(l)).map(({reducer:c})=>c)];return u.filter(c=>!!c).length===0&&(u=[o]),u.reduce((c,f)=>{if(f)if(ge(c)){const g=f(c,l);return g===void 0?c:g}else{if(le(c))return Ks(c,m=>f(m,l));{const m=f(c,l);if(m===void 0){if(c===null)return c;throw new Error(H(9))}return m}}return c},a)}return i.getInitialState=s,i}var rd=(e,t)=>Gu(e)?e.match(t):e(t);function nd(...e){return t=>e.some(r=>rd(r,t))}var od="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",Sn=(e=21)=>{let t="",r=e;for(;r--;)t+=od[Math.random()*64|0];return t},sd=["name","message","stack","code"],Cr=class{constructor(e,t){ur(this,"_type");this.payload=e,this.meta=t}},yo=class{constructor(e,t){ur(this,"_type");this.payload=e,this.meta=t}},id=e=>{if(typeof e=="object"&&e!==null){const t={};for(const r of sd)typeof e[r]=="string"&&(t[r]=e[r]);return t}return{message:String(e)}},ad=(()=>{function e(t,r,n){const o=ce(t+"/fulfilled",(l,u,c,f)=>({payload:l,meta:{...f||{},arg:c,requestId:u,requestStatus:"fulfilled"}})),s=ce(t+"/pending",(l,u,c)=>({payload:void 0,meta:{...c||{},arg:u,requestId:l,requestStatus:"pending"}})),i=ce(t+"/rejected",(l,u,c,f,m)=>({payload:f,error:(n&&n.serializeError||id)(l||"Rejected"),meta:{...m||{},arg:c,requestId:u,rejectedWithValue:!!f,requestStatus:"rejected",aborted:(l==null?void 0:l.name)==="AbortError",condition:(l==null?void 0:l.name)==="ConditionError"}}));function a(l){return(u,c,f)=>{const m=n!=null&&n.idGenerator?n.idGenerator(l):Sn(),g=new AbortController;let p,y;function _(C){y=C,g.abort()}const k=async function(){var x,E;let C;try{let v=(x=n==null?void 0:n.condition)==null?void 0:x.call(n,l,{getState:c,extra:f});if(ld(v)&&(v=await v),v===!1||g.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};const w=new Promise((R,j)=>{p=()=>{j({name:"AbortError",message:y||"Aborted"})},g.signal.addEventListener("abort",p)});u(s(m,l,(E=n==null?void 0:n.getPendingMeta)==null?void 0:E.call(n,{requestId:m,arg:l},{getState:c,extra:f}))),C=await Promise.race([w,Promise.resolve(r(l,{dispatch:u,getState:c,extra:f,requestId:m,signal:g.signal,abort:_,rejectWithValue:(R,j)=>new Cr(R,j),fulfillWithValue:(R,j)=>new yo(R,j)})).then(R=>{if(R instanceof Cr)throw R;return R instanceof yo?o(R.payload,m,l,R.meta):o(R,m,l)})])}catch(v){C=v instanceof Cr?i(null,m,l,v.payload,v.meta):i(v,m,l)}finally{p&&g.signal.removeEventListener("abort",p)}return n&&!n.dispatchConditionRejection&&i.match(C)&&C.meta.condition||u(C),C}();return Object.assign(k,{abort:_,requestId:m,arg:l,unwrap(){return k.then(cd)}})}}return Object.assign(a,{pending:s,rejected:i,fulfilled:o,settled:nd(i,o),typePrefix:t})}return e.withTypes=()=>e,e})();function cd(e){if(e.meta&&e.meta.rejectedWithValue)throw e.payload;if(e.error)throw e.error;return e.payload}function ld(e){return e!==null&&typeof e=="object"&&typeof e.then=="function"}var ud=Symbol.for("rtk-slice-createasyncthunk");function dd(e,t){return`${e}/${t}`}function fd({creators:e}={}){var r;const t=(r=e==null?void 0:e.asyncThunk)==null?void 0:r[ud];return function(o){const{name:s,reducerPath:i=s}=o;if(!s)throw new Error(H(11));typeof process<"u";const a=(typeof o.reducers=="function"?o.reducers(hd()):o.reducers)||{},l=Object.keys(a),u={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},c={addCase(b,x){const E=typeof b=="string"?b:b.type;if(!E)throw new Error(H(12));if(E in u.sliceCaseReducersByType)throw new Error(H(13));return u.sliceCaseReducersByType[E]=x,c},addMatcher(b,x){return u.sliceMatchers.push({matcher:b,reducer:x}),c},exposeAction(b,x){return u.actionCreators[b]=x,c},exposeCaseReducer(b,x){return u.sliceCaseReducersByName[b]=x,c}};l.forEach(b=>{const x=a[b],E={reducerName:b,type:dd(s,b),createNotation:typeof o.reducers=="function"};gd(x)?xd(E,x,c,t):md(E,x,c)});function f(){const[b={},x=[],E=void 0]=typeof o.extraReducers=="function"?ei(o.extraReducers):[o.extraReducers],v={...b,...u.sliceCaseReducersByType};return td(o.initialState,w=>{for(let R in v)w.addCase(R,v[R]);for(let R of u.sliceMatchers)w.addMatcher(R.matcher,R.reducer);for(let R of x)w.addMatcher(R.matcher,R.reducer);E&&w.addDefaultCase(E)})}const m=b=>b,g=new Map;let p;function y(b,x){return p||(p=f()),p(b,x)}function _(){return p||(p=f()),p.getInitialState()}function k(b,x=!1){function E(w){let R=w[b];return typeof R>"u"&&x&&(R=_()),R}function v(w=m){const R=Kr(g,x,{insert:()=>new WeakMap});return Kr(R,w,{insert:()=>{const j={};for(const[M,$]of Object.entries(o.selectors??{}))j[M]=pd($,w,_,x);return j}})}return{reducerPath:b,getSelectors:v,get selectors(){return v(E)},selectSlice:E}}const C={name:s,reducer:y,actions:u.actionCreators,caseReducers:u.sliceCaseReducersByName,getInitialState:_,...k(i),injectInto(b,{reducerPath:x,...E}={}){const v=x??i;return b.inject({reducerPath:v,reducer:y},E),{...C,...k(v,!0)}}};return C}}function pd(e,t,r,n){function o(s,...i){let a=t(s);return typeof a>"u"&&n&&(a=r()),e(a,...i)}return o.unwrapped=e,o}var vn=fd();function hd(){function e(t,r){return{_reducerDefinitionType:"asyncThunk",payloadCreator:t,...r}}return e.withTypes=()=>e,{reducer(t){return Object.assign({[t.name](...r){return t(...r)}}[t.name],{_reducerDefinitionType:"reducer"})},preparedReducer(t,r){return{_reducerDefinitionType:"reducerWithPrepare",prepare:t,reducer:r}},asyncThunk:e}}function md({type:e,reducerName:t,createNotation:r},n,o){let s,i;if("reducer"in n){if(r&&!yd(n))throw new Error(H(17));s=n.reducer,i=n.prepare}else s=n;o.addCase(e,s).exposeCaseReducer(t,s).exposeAction(t,i?ce(e,i):ce(e))}function gd(e){return e._reducerDefinitionType==="asyncThunk"}function yd(e){return e._reducerDefinitionType==="reducerWithPrepare"}function xd({type:e,reducerName:t},r,n,o){if(!o)throw new Error(H(18));const{payloadCreator:s,fulfilled:i,pending:a,rejected:l,settled:u,options:c}=r,f=o(e,s,c);n.exposeAction(t,f),i&&n.addCase(f.fulfilled,i),a&&n.addCase(f.pending,a),l&&n.addCase(f.rejected,l),u&&n.addMatcher(f.settled,u),n.exposeCaseReducer(t,{fulfilled:i||xt,pending:a||xt,rejected:l||xt,settled:u||xt})}function xt(){}var bd=(e,t)=>{if(typeof e!="function")throw new Error(H(32))},Cn="listenerMiddleware",wd=e=>{let{type:t,actionCreator:r,matcher:n,predicate:o,effect:s}=e;if(t)o=ce(t).match;else if(r)t=r.type,o=r.match;else if(n)o=n;else if(!o)throw new Error(H(21));return bd(s),{predicate:o,type:t,effect:s}},_d=Object.assign(e=>{const{type:t,predicate:r,effect:n}=wd(e);return{id:Sn(),effect:n,type:t,predicate:r,pending:new Set,unsubscribe:()=>{throw new Error(H(22))}}},{withTypes:()=>_d}),Sd=Object.assign(ce(`${Cn}/add`),{withTypes:()=>Sd});ce(`${Cn}/removeAll`);var vd=Object.assign(ce(`${Cn}/remove`),{withTypes:()=>vd}),Cd=e=>"reducerPath"in e&&typeof e.reducerPath=="string",kd=e=>e.flatMap(t=>Cd(t)?[[t.reducerPath,t.reducer]]:Object.entries(t)),kn=Symbol.for("rtk-state-proxy-original"),Ed=e=>!!e&&!!e[kn],Rd=new WeakMap,Td=(e,t)=>Kr(Rd,e,{insert:()=>new Proxy(e,{get:(r,n,o)=>{if(n===kn)return r;const s=Reflect.get(r,n,o);if(typeof s>"u"){const i=t[n.toString()];if(i){const a=i(void 0,{type:Sn()});if(typeof a>"u")throw new Error(H(24));return a}}return s}})}),jd=e=>{if(!Ed(e))throw new Error(H(25));return e[kn]},Od=(e={})=>e;function Ad(...e){const t=Object.fromEntries(kd(e)),r=()=>Object.keys(t).length?zs(t):Od;let n=r();function o(a,l){return n(a,l)}o.withLazyLoadedSlices=()=>o;const s=(a,l={})=>{const{reducerPath:u,reducer:c}=a,f=t[u];return!l.overrideExisting&&f&&f!==c?(typeof process<"u",o):(t[u]=c,n=r(),o)},i=Object.assign(function(l,u){return function(f,...m){return l(Td(u?u(f,...m):f,t),...m)}},{original:jd});return Object.assign(o,{inject:s,selector:i})}function H(e){return`Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}const $d={data:[],isLoading:!0,error:!1},Tt=ad("cryptoData/general",async({fromCurrencies:e,toCurrency:t})=>await Al({fromCurrencies:e,toCurrency:t})),En=vn({name:"cryptoData",initialState:$d,reducers:{setData:(e,t)=>{e.data=t.payload,e.isLoading=!1}},extraReducers:e=>{e.addCase(Tt.pending,t=>{t.isLoading=!0}),e.addCase(Tt.fulfilled,(t,r)=>{t.isLoading=!1,t.data=r.payload}),e.addCase(Tt.rejected,t=>{t.isLoading=!1,t.error=!0})}}),{setData:Pd}=En.actions;En.reducer;const Dd=[{id:"bitcoin",symbol:"btc",name:"Bitcoin",image:"https://coin-images.coingecko.com/coins/images/1/large/bitcoin.png?1696501400",current_price:66465,market_cap:1311229155876,market_cap_rank:1,fully_diluted_valuation:1395754803979,total_volume:32208609804,high_24h:67386,low_24h:64895,price_change_24h:1569.74,price_change_percentage_24h:2.4189,market_cap_change_24h:31001014956,market_cap_change_percentage_24h:2.42152,circulating_supply:19728259,total_supply:21e6,max_supply:21e6,ath:73738,ath_change_percentage:-9.91102,ath_date:"2024-03-14T07:10:36.635Z",atl:67.81,atl_change_percentage:97865.98854,atl_date:"2013-07-06T00:00:00.000Z",roi:null,last_updated:"2024-07-20T13:47:33.747Z"},{id:"ethereum",symbol:"eth",name:"Ethereum",image:"https://coin-images.coingecko.com/coins/images/279/large/ethereum.png?1696501628",current_price:3486.84,market_cap:419322472899,market_cap_rank:2,fully_diluted_valuation:419322472899,total_volume:14864751273,high_24h:3538.41,low_24h:3431.31,price_change_24h:53.88,price_change_percentage_24h:1.56951,market_cap_change_24h:7736992997,market_cap_change_percentage_24h:1.8798,circulating_supply:120226035250706e-6,total_supply:120226035250706e-6,max_supply:null,ath:4878.26,ath_change_percentage:-28.52846,ath_date:"2021-11-10T14:24:19.604Z",atl:.432979,atl_change_percentage:805151.26155,atl_date:"2015-10-20T00:00:00.000Z",roi:{times:69.1293545571144,currency:"btc",percentage:6912.935455711439},last_updated:"2024-07-20T13:47:26.849Z"},{id:"binancecoin",symbol:"bnb",name:"BNB",image:"https://coin-images.coingecko.com/coins/images/825/large/bnb-icon2_2x.png?1696501970",current_price:589.36,market_cap:90676236322,market_cap_rank:4,fully_diluted_valuation:90676236322,total_volume:1200204985,high_24h:597.88,low_24h:577.33,price_change_24h:12.02,price_change_percentage_24h:2.08241,market_cap_change_24h:1858531538,market_cap_change_percentage_24h:2.09252,circulating_supply:153856150,total_supply:153856150,max_supply:2e8,ath:717.48,ath_change_percentage:-17.7536,ath_date:"2024-06-06T14:10:59.816Z",atl:.0398177,atl_change_percentage:148189837147e-5,atl_date:"2017-10-19T00:00:00.000Z",roi:null,last_updated:"2024-07-20T13:47:31.082Z"},{id:"solana",symbol:"sol",name:"Solana",image:"https://coin-images.coingecko.com/coins/images/4128/large/solana.png?1718769756",current_price:167.68,market_cap:77853239474,market_cap_rank:5,fully_diluted_valuation:97340981165,total_volume:2966020237,high_24h:171.53,low_24h:166.2,price_change_24h:1.48,price_change_percentage_24h:.88921,market_cap_change_24h:1127265173,market_cap_change_percentage_24h:1.46921,circulating_supply:464230227934943e-6,total_supply:580433469167155e-6,max_supply:null,ath:259.96,ath_change_percentage:-35.48797,ath_date:"2021-11-06T21:54:35.825Z",atl:.500801,atl_change_percentage:33387.33702,atl_date:"2020-05-11T19:35:23.449Z",roi:null,last_updated:"2024-07-20T13:47:50.398Z"},{id:"ripple",symbol:"xrp",name:"XRP",image:"https://coin-images.coingecko.com/coins/images/44/large/xrp-symbol-white-128.png?1696501442",current_price:.588847,market_cap:32949326878,market_cap_rank:8,fully_diluted_valuation:58925936376,total_volume:1921536330,high_24h:.602492,low_24h:.555925,price_change_24h:.0329225,price_change_percentage_24h:5.92211,market_cap_change_24h:1867861494,market_cap_change_percentage_24h:6.00957,circulating_supply:55909481874,total_supply:99987431729,max_supply:1e11,ath:3.4,ath_change_percentage:-82.64776,ath_date:"2018-01-07T00:00:00.000Z",atl:.00268621,atl_change_percentage:21853.15789,atl_date:"2014-05-22T00:00:00.000Z",roi:null,last_updated:"2024-07-20T13:47:39.564Z"},{id:"cardano",symbol:"ada",name:"Cardano",image:"https://coin-images.coingecko.com/coins/images/975/large/cardano.png?1696502090",current_price:.428721,market_cap:15268142401,market_cap_rank:11,fully_diluted_valuation:19317363715,total_volume:307470912,high_24h:.442978,low_24h:.424498,price_change_24h:.00422318,price_change_percentage_24h:.99486,market_cap_change_24h:209410176,market_cap_change_percentage_24h:1.39062,circulating_supply:355672967692652e-4,total_supply:45e9,max_supply:45e9,ath:3.09,ath_change_percentage:-86.06038,ath_date:"2021-09-02T06:00:10.474Z",atl:.01925275,atl_change_percentage:2135.02518,atl_date:"2020-03-13T02:22:55.044Z",roi:null,last_updated:"2024-07-20T13:47:27.327Z"},{id:"chainlink",symbol:"link",name:"Chainlink",image:"https://coin-images.coingecko.com/coins/images/877/large/chainlink-new-logo.png?1696502009",current_price:13.91,market_cap:8459386459,market_cap_rank:17,fully_diluted_valuation:13911177205,total_volume:356772770,high_24h:14.22,low_24h:13.61,price_change_24h:.300173,price_change_percentage_24h:2.20537,market_cap_change_24h:182535175,market_cap_change_percentage_24h:2.20537,circulating_supply:6080999713083414e-7,total_supply:1e9,max_supply:1e9,ath:52.7,ath_change_percentage:-73.56794,ath_date:"2021-05-10T00:13:57.214Z",atl:.148183,atl_change_percentage:9299.71435,atl_date:"2017-11-29T00:00:00.000Z",roi:null,last_updated:"2024-07-20T13:47:30.291Z"},{id:"bitcoin-cash",symbol:"bch",name:"Bitcoin Cash",image:"https://coin-images.coingecko.com/coins/images/780/large/bitcoin-cash-circle.png?1696501932",current_price:389.81,market_cap:7693122804,market_cap_rank:18,fully_diluted_valuation:8186070466,total_volume:219234592,high_24h:399.89,low_24h:380.45,price_change_24h:9.37,price_change_percentage_24h:2.46197,market_cap_change_24h:178881607,market_cap_change_percentage_24h:2.38057,circulating_supply:197354248966508e-7,total_supply:21e6,max_supply:21e6,ath:3785.82,ath_change_percentage:-89.69487,ath_date:"2017-12-20T00:00:00.000Z",atl:76.93,atl_change_percentage:407.09643,atl_date:"2018-12-16T00:00:00.000Z",roi:null,last_updated:"2024-07-20T13:47:37.799Z"},{id:"litecoin",symbol:"ltc",name:"Litecoin",image:"https://coin-images.coingecko.com/coins/images/2/large/litecoin.png?1696501400",current_price:72.67,market_cap:5435603099,market_cap_rank:21,fully_diluted_valuation:6106497072,total_volume:271153004,high_24h:74.08,low_24h:71.41,price_change_24h:1.048,price_change_percentage_24h:1.46346,market_cap_change_24h:105314884,market_cap_change_percentage_24h:1.97578,circulating_supply:747712894834713e-7,total_supply:84e6,max_supply:84e6,ath:410.26,ath_change_percentage:-82.28684,ath_date:"2021-05-10T03:13:07.904Z",atl:1.15,atl_change_percentage:6225.49513,atl_date:"2015-01-14T00:00:00.000Z",roi:null,last_updated:"2024-07-20T13:47:27.826Z"},{id:"stellar",symbol:"xlm",name:"Stellar",image:"https://coin-images.coingecko.com/coins/images/100/large/Stellar_symbol_black_RGB.png?1696501482",current_price:.104795,market_cap:3073299624,market_cap_rank:33,fully_diluted_valuation:5242608697,total_volume:78283435,high_24h:.106825,low_24h:.102678,price_change_24h:.00184523,price_change_percentage_24h:1.79236,market_cap_change_24h:64207035,market_cap_change_percentage_24h:2.13377,circulating_supply:293118334604794e-4,total_supply:500017869596824e-4,max_supply:500017869596824e-4,ath:.875563,ath_change_percentage:-88.02858,ath_date:"2018-01-03T00:00:00.000Z",atl:47612e-8,atl_change_percentage:21914.74833,atl_date:"2015-03-05T00:00:00.000Z",roi:null,last_updated:"2024-07-20T13:47:28.310Z"},{id:"monero",symbol:"xmr",name:"Monero",image:"https://coin-images.coingecko.com/coins/images/69/large/monero_logo.png?1696501460",current_price:162.85,market_cap:3003688477,market_cap_rank:34,fully_diluted_valuation:null,total_volume:85783814,high_24h:163.2,low_24h:159.76,price_change_24h:3.09,price_change_percentage_24h:1.93293,market_cap_change_24h:63333749,market_cap_change_percentage_24h:2.15395,circulating_supply:184453426021475e-7,total_supply:18444108,max_supply:null,ath:542.33,ath_change_percentage:-69.95952,ath_date:"2018-01-09T00:00:00.000Z",atl:.216177,atl_change_percentage:75262.98643,atl_date:"2015-01-14T00:00:00.000Z",roi:null,last_updated:"2024-07-20T13:47:24.250Z"}],Nd=S.svg`
  fill: ${({theme:e})=>e.sharedColors.statusDown};
  width: 12px;
  height: 7px;
  @media ${L.sm} {
    margin-right: 3px;
  }

  &.up {
    fill: ${({theme:e})=>e.sharedColors.stausUp};
    transform: rotate(180deg);
  }
`,Ld=S.div`
  display: grid;
  grid-template-columns: 3fr 2fr 1fr;
  grid-auto-rows: 48px;
  height: 100%;
  font-family: ${({theme:e})=>e.fonts.interRegular};
  font-size: 0.75rem;
  color: ${({theme:e})=>e.color.textMain};
  overflow: auto;

  @media ${L.sm} {
    grid-auto-rows: 35px;
  }

  & > div {
    ${pn};
    line-height: 0.714;
    padding: 15px 24px;

    @media ${L.sm} {
      padding: 0 0 0 10px;
    }
  }
`,kr=S.h3`
  position: sticky;
  top: 0;
  font-size: 0.625rem;
  color: ${({theme:e})=>e.color.trendHeading};
  background: ${({theme:e})=>e.color.boxBackground};
  white-space: nowrap;
  padding: 20px 24px;
  z-index: 1;

  @media ${L.sm} {
    padding: 0 0 0 10px;
  }
`,xo=S.div`
  grid-column: 1/-1;
  text-align: center;
`,Id=S.div`
  text-transform: uppercase;

  span {
    color: ${({theme:e})=>e.sharedColors.trendCurrencyName};
    text-transform: capitalize;
    margin-left: 5px;
  }
`,Bd=S.div`
  color: ${({theme:e})=>e.sharedColors.price};
`,Fd=S.div`
  ${ye};
  max-width: 130px;
  width: 100%;

  span {
    margin-left: 15px;

    @media ${L.sm} {
      margin-left: 5px;
    }
  }
`,Md=e=>d.jsx(Nd,{className:Qr({up:Math.sign(e)===-1}),children:d.jsx("use",{xlinkHref:"svg/sprite.svg#angle"})});function zd(){const{ref:e,height:t=1}=qt(),r=Fe(),{currenciesList:n,exchangeCurrency:o}=W(p=>p.config),{data:s,isLoading:i,error:a}=W(p=>p.cryptoData),l=T.useMemo(()=>n.map(({id:p})=>p).join(","),[n]),u=!i&&!a,c=!i&&a,f=i&&!a,m=T.useCallback(()=>r(Tt({fromCurrencies:l,toCurrency:o.id})),[l,o.id]),g=async()=>{await cs(1e3),r(Pd(Dd))};return T.useEffect(()=>{g();const p=setInterval(()=>{g()},ct);return()=>{clearInterval(p)}},[m]),d.jsxs(Ld,{ref:e,children:[d.jsx(kr,{children:"Name"}),d.jsxs(kr,{children:["Average price(",o.symbol,")"]}),d.jsx(kr,{children:"Change(%)"}),u&&s.map(({id:p,name:y,symbol:_,current_price:k,price_change_percentage_24h:C})=>d.jsxs(T.Fragment,{children:[d.jsxs(Id,{children:[_," ",d.jsx("span",{children:y})]}),d.jsx(Bd,{children:k}),d.jsxs(Fd,{children:[Math.abs(C),d.jsx("span",{children:Md(C)})]})]},p)),f&&d.jsx(xo,{children:d.jsx(Te,{height:`${t/1.5}px`})}),c&&d.jsx(xo,{children:d.jsx(Ue,{})})]})}const Ve={minHeight:240,group:"shared",cached:!1},Ze={minWidth:315,cached:!0},ee=(e=!0)=>({news:{...Ve,...e&&Ze,id:"news",title:"News",content:d.jsx(lu,{})},history:{...Ve,...e&&Ze,id:"history",title:"Trade history",content:d.jsx(gu,{})},cryptocurrencies:{...Ve,...e&&Ze,id:"cryptocurrencies",title:"Cryptocurrencies",content:d.jsx(Wl,{})},overview:{...Ve,...e&&Ze,id:"overview",title:"Market overview",content:d.jsx(Xl,{})},trends:{...Ve,...e&&Ze,id:"trends",title:"Trends 24h",content:d.jsx(zd,{})}}),bo={dockbox:{mode:"vertical",children:[{mode:"horizontal",size:260,children:[{tabs:[ee().news]},{tabs:[ee().history]}]},{size:180,tabs:[ee().cryptocurrencies]},{size:260,mode:"horizontal",children:[{tabs:[ee().overview]},{mode:"horizontal",tabs:[ee().trends]}]}]}},wo={dockbox:{mode:"vertical",children:[{tabs:[ee(!1).trends,ee(!1).news,ee(!1).history,ee(!1).overview,ee(!1).cryptocurrencies]}]}},_o={currenciesList:Nr.slice(0,6),exchangeCurrency:Dr.USD,theme:Nt.DARK,serializedDockbox:null,persistentDockbox:!1},Rn=vn({name:"config",initialState:_o,reducers:{setCurrenciesList:(e,t)=>{e.currenciesList=t.payload},setExchangeCurrency:(e,t)=>{e.exchangeCurrency=t.payload},setTheme:(e,t)=>{e.theme=t.payload},setSerializedDockbox:(e,t)=>{e.serializedDockbox=t.payload},setPersistentDocbox:(e,t)=>{e.persistentDockbox=t.payload},resetConfig:()=>_o}}),{setCurrenciesList:ti,setExchangeCurrency:ri,setTheme:ni,setSerializedDockbox:ot,setPersistentDocbox:oi,resetConfig:Ud}=Rn.actions;Rn.reducer;function si(){return zi()<=1200}function Hd(){const e=si(),t=e?wo:bo,r=Fe(),n=W(f=>f.config.serializedDockbox),o=JSON.parse(String(n)),[s,i]=T.useState(o||t),a=ee(!e),l=T.useMemo(()=>({shared:{floatable:!1,maximizable:!e,disableDock:e}}),[e]),u=T.useCallback(({id:f})=>a[f],[a]),c=T.useCallback(f=>{i(f),r(ot(JSON.stringify(f)))},[]);return T.useEffect(()=>{if(e)i(wo);else{const f=o||bo;i(f),r(ot(JSON.stringify(f)))}},[e]),T.useEffect(()=>{n||i(t)},[n]),{dockbox:s,groups:l,loadTab:u,onDockboxChange:c}}const qd=S.section`
  height: 100%;
  width: 100%;

  & .dock-layout {
    /* min-height: calc(100vh - 100px); */
    /* height: 100%; */
    margin: 0 30px;
    overflow: auto;

    @media ${L.lg} {
      margin-left: 20px;
      margin-right: 20px;
    }
    @media ${L.sm} {
      margin-left: 10px;
      margin-right: 10px;
    }

    &::-webkit-scrollbar-thumb {
      background: ${({theme:e})=>e.sharedColors.accentColor};
      border-radius: 10px;
    }

    .dock-vbox > .dock-divider {
      transform: scaleY(1);
    }

    .dock.dock-top {
      background: transparent;
    }

    .dock-divider {
      flex: 0 0 20px;
      transform: initial;
    }

    .dock-drop-indicator {
      border: solid 1px ${({theme:e})=>e.sharedColors.accentColor};
      box-shadow: inset 0 0 10px
        ${({theme:e})=>e.sharedColors.accentColor}; 
      border-radius: 20px;
      background: ${({theme:e})=>e.sharedColors.dropIndicator};
    }

    .dock-drop-layer {
      &:has(.dock-drop-square-dropping) .dock-drop-square {
        border-color: ${({theme:e})=>e.sharedColors.searchText};
      }

      .dock-drop-square {
        color: ${({theme:e})=>e.sharedColors.accentLight};
        border-color: ${({theme:e})=>e.sharedColors.searchText};
        background: ${({theme:e})=>e.sharedColors.btnIcon};
        border-radius: 4px;
        box-shadow: inset 2px 2px 2px;
        box-shadow: inset 0 0 2px;

        .dock-drop-square-box {
          border-color: ${({theme:e})=>e.sharedColors.searchText};
          border-radius: 4px;
          border-width: 2px;
          box-shadow: inset 2px 2px 2px;
        }
      }

      .dock-drop-square-dropping {
        color: ${({theme:e})=>e.sharedColors.accentLight};
        background: ${({theme:e})=>e.sharedColors.dropIndicator};
        border: ${({theme:e})=>e.sharedColors.searchText};
        border-width: 2px;
        box-shadow: 0 0 2px;
      }
    }

    .dock-panel *::-webkit-scrollbar-thumb {
      background: #261e35;
      border-radius: 10px;
    }

    .dock-panel.dock-style-shared {
      border-radius: 20px;
      border: 1px solid ${({theme:e})=>e.sharedColors.textSecondary};
      background: ${({theme:e})=>e.color.boxBackground};
      overflow: hidden;

      &:focus-within {
        border: 1px solid ${({theme:e})=>e.sharedColors.accentLight};
      }

      .dock-bar {
        background: ${({theme:e})=>e.color.boxBackground};
        border-bottom: none;
        margin-bottom: 10px;
      }

      .dock-tab {
        color: ${({theme:e})=>e.color.textMain};
        background: transparent;
        transition: color 0.3s ease-out;
        border-bottom: none;

        &-active,
        &:hover {
          color: ${({theme:e})=>e.sharedColors.accentColor};
        }

        & > div {
          padding-top: 7px;
          padding-bottom: 7px;
        }

        .dragging {
          background: transparent;
          padding-top: 7px;
          padding-bottom: 7px;
        }
      }

      .dock-panel-max-btn,
      .dock-panel-min-btn {
        margin: 2px 9px 2px 0;
        padding: 8px 8px 4px 2px;

        &:hover {
          transform: none;
          &::before {
            color: ${({theme:e})=>e.sharedColors.accentLight}; 
            border-color: ${({theme:e})=>e.sharedColors.accentLight}; 
          }
        }

        &:focus::before {
          color: ${({theme:e})=>e.sharedColors.accentLight}; 
          border-color: ${({theme:e})=>e.sharedColors.accentLight}; 
        }

        &:before {
          color: ${({theme:e})=>e.sharedColors.searchText};
          border-color: ${({theme:e})=>e.sharedColors.searchText};
        }
      }

      .dock-ink-bar.dock-ink-bar-animated {
        background: transparent;
      }
    }
  }

  &:has(.dock-mbox-show) .dock-layout {
    border-radius: 20px;
    overflow: hidden;
  }

  @-moz-document url-prefix() {
    .dock-layout {
      scrollbar-color: ${({theme:e})=>e.sharedColors.accentColor};
        transparent;
    }
  }
`,Gd={position:"absolute",left:0,top:0,right:0,bottom:20};function Wd(){const{dockbox:e,groups:t,loadTab:r,onDockboxChange:n}=Hd();return d.jsx(qd,{className:"dockLayoutContainer",children:d.jsx(Ni,{layout:e,loadTab:r,onLayoutChange:n,groups:t,style:Gd},`${t.shared.maximizable}`)})}const Vd=S.main`
  ${hn}
  height: 100vh;
`,Zd=S.section`
  ${hn};
  justify-content: center;
  height: 100%;
  color: ${({theme:e})=>e.sharedColors.searchText};
  padding: 10px;
  overflow: hidden;

  p {
    font-size: 2.5rem;
    margin-bottom: 40px;
  }
`,Kd=S.span`
  font-size: 6.25rem;
`,Jd=S.img`
  position: absolute;
  top: 21%;
  left: 51%;
  max-width: 280px;
  max-height: 260px;
  z-index: -1;
`;function Yd(){const e=st(),t=()=>{e("/")};return d.jsx(Vd,{children:d.jsxs(Zd,{children:[d.jsx(Kd,{children:"404"}),d.jsx("p",{children:"Page not found!"}),d.jsx(Jd,{src:"images/404.webp",alt:"Broken bitcoin",width:"280",height:"260"}),d.jsxs(Ls,{type:"button",onClick:t,children:[d.jsx("svg",{children:d.jsx("use",{xlinkHref:"svg/sprite.svg#home"})}),d.jsx("span",{children:"Home"})]})]})})}const Xd={user:null},Tn=vn({name:"auth",initialState:Xd,reducers:{login:(e,t)=>{e.user=t.payload},logout:e=>{e.user=null}}}),{login:jt,logout:Qd}=Tn.actions;Tn.reducer;function Jr(e){return d.jsx(lt,{...e})}const ef=S.header`
  ${ye};
  width: 100%;
  max-height: 100px;
  padding: 30px;

  @media ${L.lg} {
    max-height: 80px;
    padding: 20px;
  }
  @media ${L.sm} {
    padding-left: 10px;
    padding-right: 10px;
  }
`,tf=S.div`
  ${ye}
  gap: 12px;
`,rf=S.div`
  color: ${({theme:e})=>e.sharedColors.btnIcon};
  padding: 5px;

  & > div {
    ${tt};
    width: 47px;
    height: 47px;
    border-radius: ${({theme:e})=>e.borderRadius.circle};
    background: ${({theme:e})=>e.color.userProfile};
    cursor: pointer;
  }
`;function nf(){var a,l;const e=st(),t=Oo(),{user:r}=W(u=>u.auth),n=t.pathname==="/",o=t.pathname==="/settings",s=((a=r==null?void 0:r.displayName)==null?void 0:a.split(/\s+/).map(u=>u.substring(0,1).toUpperCase()).join(""))||((l=r==null?void 0:r.email)==null?void 0:l.substring(0,1).toUpperCase()),i=()=>{e("/auth")};return d.jsxs(ef,{children:[n&&d.jsx("span",{children:"Home"}),o&&d.jsx("span",{children:"Settings"}),d.jsx(tf,{children:r?d.jsx(rf,{children:d.jsx("div",{children:s})}):d.jsx(Jr,{onClick:i,type:"button",children:d.jsx("span",{children:"Sign in"})})})]})}const of=S.nav`
  ${ut};
  gap: 30px;
`,So=S(pi)`
  border-radius: ${({theme:e})=>e.borderRadius.small};
  transition: background 0.2s ease-in;

  &.active,
  &:hover {
    ${tt};
    background: ${({theme:e})=>e.color.iconActiveBackground};

    svg {
      fill: ${({theme:e})=>e.color.navBarSvgActive};
    }
  }

  svg {
    ${Ns};
  }

  span {
    ${tt};
    width: 61px;
    height: 58px;
    text-align: center;

    @media ${L.lg} {
      width: 51px;
      height: 48px;
    }

    @media ${L.sm} {
      width: 41px;
      height: 38px;
    }
  }
`;function sf(){const{user:e}=W(t=>t.auth);return d.jsxs(of,{children:[d.jsx(So,{to:"/","aria-label":"Home page",children:d.jsx("span",{children:d.jsx("svg",{children:d.jsx("use",{xlinkHref:"svg/sprite.svg#home"})})})}),e&&d.jsx(So,{to:"/settings","aria-label":"Settings",children:d.jsx("span",{children:d.jsx("svg",{children:d.jsx("use",{xlinkHref:"svg/sprite.svg#settings"})})})})]})}const af=S.div`
  ${ut};
  position: sticky;
  top: 0;
  left: 0;
  gap: 30px;
  width: 100px;
  height: 100vh;
  border-right: 1px solid ${({theme:e})=>e.color.iconActiveBackground};
  padding: 30px 15px;
  overflow-x: hidden;
  overflow-y: auto;

  @media ${L.lg} {
    width: 80px;
    padding: 25px 10px 20px;
  }

  @media ${L.sm} {
    width: 60px;
    padding-left: 5px;
    padding-right: 5px;
  }
`,cf=S.div`
  svg {
    width: 42px;
    height: 46px;

    @media ${L.lg} {
      width: 37px;
      height: 41px;
    }

    @media ${L.sm} {
      width: 32px;
      height: 36px;
    }
  }
`,lf=S.div`
  margin-top: auto;
`,ii=S(lt)`
  text-align: center;
  background: transparent;
  border: none;
  width: auto;
  margin-top: 40px;
  &:hover {
    background: transparent;
  }

  @media ${L.lg} {
    margin-top: 30px;
  }

  @media ${L.sm} {
    margin-top: 20px;
  }

  svg {
    ${Ns};
  }
`,uf=S(ii)`
  svg {
    width: 25px;
  }
`;function df(){const e=st(),{user:t}=W(s=>s.auth),r=Fe(),n=Xr($o),o=async()=>{if(confirm("Logout confirmation"))try{await Ri(n),r(Qd()),r(Ud()),e("/")}catch{console.log("signOut fail")}};return d.jsxs(af,{children:[d.jsx(cf,{children:d.jsx(hi,{to:"/","aria-label":"Return to home page",children:d.jsx("svg",{children:d.jsx("use",{xlinkHref:"svg/sprite.svg#logo"})})})}),d.jsx(sf,{}),d.jsxs(lf,{children:[d.jsx(uf,{onClick:()=>r(ot(null)),"aria-label":"Reset layout",children:d.jsx("svg",{children:d.jsx("use",{xlinkHref:"svg/sprite.svg#reset"})})}),t&&d.jsx(ii,{onClick:o,"aria-label":"Log out",children:d.jsx("svg",{children:d.jsx("use",{xlinkHref:"svg/sprite.svg#log-out"})})})]})]})}const ff=S.div`
  display: flex;
`,pf=S.div`
  ${ut};
  width: 100%;
  overflow: auto;
`,hf=S.main`
  ${hn};
  height: 100%;
`;function mf(){const e=Xr(),t=Fe(),[r,n]=T.useState(!0);return T.useEffect(()=>{n(!0),Ti(e,async o=>{if(o&&o.email){t(jt({email:o.email,uid:o.uid,photoURL:o.photoURL||null,displayName:o.displayName}));const s=await ji(o);if(s){const{currenciesList:i,exchangeCurrency:a,theme:l,serializedDockbox:u}=s;i&&t(ti(i)),a&&t(ri(a)),l&&t(ni(l)),u&&(t(ot(u)),t(oi(!0)))}}n(!1)})},[]),d.jsxs(d.Fragment,{children:[r&&d.jsx(Te,{}),!r&&d.jsxs(ff,{children:[d.jsx(df,{}),d.jsxs(pf,{children:[d.jsx(nf,{}),d.jsx(hf,{children:d.jsx(mi,{})})]})]})]})}const gf=/^(([^<>()\[\]\\.,;:\s@"]+(.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/,yf=/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{6,}$/,xf=e=>Hi().shape({...!e&&{email:fr().email("Invalid email format.").matches(gf,"Email address is required.").required()},...!e&&{password:fr().matches(yf,"Password must contain one digit from 0 to 6, one lowercase letter, one uppercase letter, one special character, no spaces and at least 6 characters long.").required("Pasword is required.")},...!e&&{repeatPassword:fr().oneOf([qi("password")],"Passwords don't match.").required("Repeat password is required.")}}),bf=S.main`
  ${tt};
  position: relative;
  height: 100vh;
  padding: 10px;
`,wf=S(Ls)`
  position: absolute;
  top: 30px;
  right: 30px;

  @media ${L.lg} {
    top: 20px;
    right: 20px;
  }

  @media ${L.sm} {
    right: 10px;
  }
`,_f=S(Bs)`
  min-width: 300px;
  max-width: 375px;
  width: 100%;
`,Sf=S.svg`
  width: 30px;
  height: 21px;
  vertical-align: middle;
`,vf=S.p`
  font-size: ${({theme:e})=>e.fontSize.small};
  color: ${({theme:e})=>e.sharedColors.statusDown};
  margin: 0;
`,vo=S.div`
  margin-bottom: 10px;
`,Co=S.div`
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  text-align: center;
  margin: 15px 0 10px;

  &:last-child {
    margin-bottom: 0;
    cursor: pointer;
    transition: color 0.3s ease-in-out;

    &:hover {
      color: ${({theme:e})=>e.sharedColors.searchText};
    }
  }

  hr {
    width: 100%;
    border: none;
    border-top: 1px solid ${({theme:e})=>e.color.border};
  }

  span {
    font-family: ${({theme:e})=>e.fonts.interRegular};
    margin: 0 10px;
  }
`,Cf=S.div`
  text-align: center;
  margin: 15px 0;
`,kf=S.span`
  transition: color 0.3s ease-in-out;

  &:hover {
    text-decoration: underline;
    color: ${({theme:e})=>e.sharedColors.accentColor};
    cursor: pointer;
  }
`,Ef={email:"",password:"",repeatPassword:""};function Rf(){var x,E,v;const e=st(),t=Xr($o),{user:r}=W(w=>w.auth),n=Fe(),[o,s]=T.useState("login"),i=o==="login",a=xf(i),{register:l,handleSubmit:u,formState:{errors:c},reset:f,clearErrors:m}=gi({defaultValues:Ef,resolver:Ui(a)}),g=[{typeName:"email",example:"email@example.com",fieldName:"email",err:c.email,errMsg:(x=c.email)==null?void 0:x.message},{typeName:"password",example:"********",fieldName:"password",err:c.password,errMsg:(E=c.password)==null?void 0:E.message},{typeName:"password",example:"repeat password",fieldName:"repeatPassword",err:c.repeatPassword,errMsg:(v=c.repeatPassword)==null?void 0:v.message}];T.useEffect(()=>{r&&e("/")},[r,e]),T.useEffect(()=>{f(),m()},[i]);const p=()=>{s(w=>w==="login"?"sign-up":"login")},y=()=>{e("/")},_=async({email:w,password:R})=>{try{const{user:j}=await $i(t,w,R);return j&&j.email&&(An(j),n(jt({email:j.email,uid:j.uid,photoURL:j.photoURL||null,displayName:j.displayName}))),j}catch(j){if(j instanceof dr){const M=j.code;M==="auth/email-already-in-use"&&alert("Email already exists!"),console.error("Error:",M)}}},k=async({email:w,password:R})=>{try{const{user:j}=await Pi(t,w,R);return j&&j.email&&n(jt({email:j.email,uid:j.uid,photoURL:j.photoURL||null,displayName:j.displayName})),j}catch(j){if(j instanceof dr){const M=j.code;console.log("error",M),M==="auth/user-not-found"&&alert("Sign up first!"),M==="auth/invalid-credential"&&alert("Check your credentials!"),console.error("Error:",M)}}},C=async w=>{const{email:R,password:j}=w;if(!i)return _({email:R,password:j});k({email:R,password:j})},b=async()=>{const w=new Oi;try{const{user:R}=await Ai(t,w);return R&&R.email&&(An(R),n(jt({email:R.email,uid:R.uid,photoURL:R.photoURL||null,displayName:R.displayName}))),R}catch(R){return R instanceof dr&&R.code!=="auth/cancelled-popup-request"&&console.error("Error:",R),null}};return d.jsxs(bf,{children:[d.jsxs(wf,{type:"button",onClick:y,children:[d.jsx("svg",{children:d.jsx("use",{xlinkHref:"svg/sprite.svg#home"})}),d.jsx("span",{children:"Home"})]}),d.jsx(_f,{as:"section",$padding:"20px",$border:"true",children:d.jsxs("form",{name:"auth-form",onSubmit:u(C),children:[d.jsxs(Jr,{onClick:b,type:"button",$width:"full",children:[d.jsx("span",{children:"Sign with"}),d.jsx(Sf,{children:d.jsx("use",{xlinkHref:"svg/sprite.svg#google"})})]}),d.jsxs(Co,{children:[d.jsx("hr",{})," ",d.jsx("span",{children:"or"}),d.jsx("hr",{})]}),d.jsx("div",{children:i?g.filter(w=>w.fieldName!=="repeatPassword").map(({typeName:w,example:R,fieldName:j},M)=>d.jsx(vo,{children:d.jsx(io,{type:w,placeholder:R,...l(j)})},M)):g.map(({typeName:w,example:R,fieldName:j,err:M,errMsg:$},G)=>d.jsxs(vo,{children:[d.jsx(io,{type:w,placeholder:R,...l(j)}),d.jsx(vf,{children:$})]},G))}),d.jsx(Jr,{type:"submit",$width:"full",children:d.jsxs("span",{children:["Sign ",i?"in":"up"," with Email"]})}),d.jsxs(Cf,{children:[d.jsx("span",{children:i?"Don't have an account yet?":"Already have an account?"})," ",d.jsxs(kf,{onClick:p,children:["Sign ",i?"up":"in"]})]}),d.jsxs(Co,{children:[d.jsx("hr",{})," ",d.jsx("span",{children:"Forgot password?"}),d.jsx("hr",{})]})]})})]})}const Tf=S.section`
  max-width: 450px;
  width: 100%;
  padding: 0 10px 10px;
`,bt=S.fieldset`
  background: ${({theme:e})=>e.color.boxBackground};
  border-radius: ${({theme:e})=>e.borderRadius.large};
  border: 1px solid ${({theme:e})=>e.color.border};
  padding: 6px 15px 10px 10px;
  margin-bottom: 7px;
`,wt=S.legend`
  font-size: 1rem;
  line-height: 1;
  color: ${({theme:e})=>e.sharedColors.accentLight};
`,ko=S.div`
  margin-bottom: 3px;
`,Ht=S.label`
  position: relative;
  font-family: ${({theme:e})=>e.fonts.interSemiBold};
  font-size: 0.8125rem;
  color: ${({theme:e})=>e.sharedColors.textSecondary};
  cursor: pointer;

  &:before {
    content: "";
    position: relative;
    display: inline-block;
    background-color: transparent;
    background: ${({theme:e})=>e.sharedColors.sortBackground};
    border-radius: 4px;
    vertical-align: middle;
    padding: 10px;
    margin-right: 7px;
    cursor: pointer;
  }
`,Eo=S.input`
  padding: 0;
  height: initial;
  width: initial;
  margin-bottom: 0;
  display: none;
  cursor: pointer;

  &:checked + ${Ht}:after {
    content: "";
    display: block;
    position: absolute;
    top: 1px;
    left: 7px;
    width: 5px;
    height: 12px;
    border: solid ${({theme:e})=>e.sharedColors.accentColor};
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }

  &:checked + ${Ht} {
    color: ${({theme:e})=>e.color.textMain};
  }
`,jf=S(lt)`
  margin-top: 10px;
`,Ro=S.select`
  ${mn};
`,To=S.option`
  ${gn};
`;function Of(){const e=st(),t=Oo(),r=si(),n=Fe(),{user:o}=W($=>$.auth),{currenciesList:s,exchangeCurrency:i,theme:a,persistentDockbox:l,serializedDockbox:u}=W($=>$.config),[c,f]=T.useState(i),[m,g]=T.useState(s),[p,y]=T.useState(a),[_,k]=T.useState(l),[C,b]=T.useState(!1),x=t.pathname==="/settings"&&!o;T.useEffect(()=>{x&&e("/")},[]);const E=({target:{value:$}})=>{f(Dr[$])},v=({target:{id:$,checked:G}})=>{if(G){const ue=Nr.find(xe=>xe.id===$);g(xe=>[...xe,ue])}else{const ue=m.filter(xe=>xe.id!==$);ue.length?g(ue):alert("You should keep at least one currency")}},w=({target:{value:$}})=>{y($)},R=({target:{checked:$}})=>{k($)},j=$=>m.findIndex(G=>$===G.id)!==-1,M=async()=>{b(!0);const $={exchangeCurrency:c,currenciesList:m,theme:p,..._&&{serializedDockbox:u}};await Di(o,$),n(ri(c)),n(ti(m)),n(ni(p)),n(_?oi(!0):ot(null)),b(!1)};return d.jsxs(Tf,{children:[d.jsxs(bt,{children:[d.jsx(wt,{children:"Choose main exchange currency:"}),d.jsx(Ro,{value:c.id,onChange:E,"aria-label":"Exchange currencies",children:Object.entries(Dr).map(([$,{id:G,symbol:ue}])=>d.jsxs(To,{value:G,children:[G," (",ue,")"]},G))})]}),d.jsxs(bt,{children:[d.jsx(wt,{children:"Choose crypto currencies list:"}),Nr.map(({id:$,symbol:G})=>d.jsxs(ko,{children:[d.jsx(Eo,{type:"checkbox",id:$,name:G,onChange:v,checked:j($)}),d.jsxs(Ht,{htmlFor:$,children:[$," (",G,")"]})]},$))]}),d.jsxs(bt,{children:[d.jsx(wt,{children:"Choose app theme:"}),d.jsx(Ro,{value:p,onChange:w,"aria-label":"Theme",children:Ja.map($=>d.jsx(To,{value:$,children:$},$))})]}),!r&&d.jsxs(bt,{children:[d.jsx(wt,{children:"Choose layout settings:"}),d.jsxs(ko,{children:[d.jsx(Eo,{type:"checkbox",name:"persistentDockbox",id:"persistentDockbox",onChange:R,checked:_}),d.jsx(Ht,{htmlFor:"persistentDockbox",children:_?"layout settings will be kept after save":"layout settings will be removed after save"})]})]}),d.jsx(jf,{onClick:M,disabled:C,$width:"full",children:C?"Saving":"Save changes"})]})}const jo={sharedColors:{textSecondary:"#868B93",price:"#9292C1",sortBackground:"rgba(26, 26, 29, 0.7)",selectBorder:"rgba(26, 26, 29, 0)",dropIndicator:"rgba(0, 0, 0, 0.7)",stausUp:"#00C287",statusDown:"#E72D04",searchBackground:"#2F293E",searchText:"#E2D8FD",btnIcon:"#ffffff",accentColor:"#EC5EB7",accentLight:"#B783EB",trendCurrencyName:"#9A9A9A"},fonts:{interRegular:"Inter-Regular",interMedium:"Inter-Medium",interSemiBold:"Inter-SemiBold",interBold:"Inter-Bold"},borderRadius:{extraSmall:"10px",small:"13px",medium:"15px",large:"20px",circle:"50%"},fontSize:{small:".625rem",medium:"0.875rem"}},Af={mainBackground:"#261E35",boxBackground:"#3C354A",boxInnerBackground:"#4A435C",textMain:"#ffffff",userProfile:"#3F3655",iconActiveBackground:"#372C44",border:"rgba(255, 255, 255, 0.5)",articleTime:"#868B93",navBarSvg:"#8D8598",navBarSvgActive:"#D8BCFF",trendHeading:"#9A9A9A"},$f={mainBackground:"#e0e0e0",boxBackground:"#f5f5f5",boxInnerBackground:"#a7a7a7",textMain:"#1A111D",userProfile:"#a7a7a7",iconActiveBackground:"#a7a7a7",border:"#a7a7a7",articleTime:"#535353",navBarSvg:"#8D8598",navBarSvgActive:"#EC5EB7",trendHeading:"#BFB7B7"},Pf={dark:{color:Af,...jo},light:{color:$f,...jo}},Df=yi([{path:"/",element:d.jsx(mf,{}),children:[{path:"/",element:d.jsx(Wd,{})},{path:"/settings",element:d.jsx(Of,{})}],errorElement:d.jsx(Yd,{})},{path:"/auth",element:d.jsx(Rf,{})}],{basename:"/crypto-dash/"});function Nf(){const e=W(t=>t.config.theme);return d.jsxs(Ua,{theme:Pf[e],children:[d.jsx(Za,{}),d.jsx(xi,{router:Df})]})}const Lf=Ad(Tn,Rn,En),If=Qu({reducer:Lf});bi.createRoot(document.getElementById("root")).render(d.jsx(wi,{store:If,children:d.jsx(Nf,{})}));
