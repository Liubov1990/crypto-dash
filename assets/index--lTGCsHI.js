var ci=Object.defineProperty;var li=(e,t,r)=>t in e?ci(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var ur=(e,t,r)=>li(e,typeof t!="symbol"?t+"":t,r);import{R as te,r as O,f as ui,h as di,j as d,k as ot,l as Ao,N as fi,L as pi,O as hi,m as mi,n as gi,o as yi,p as xi,P as bi}from"./@react-D2Q2W8xP.js";import{_ as $e,a as z,G as wi,b as $o,c as Si,C as vi,d as Zr,e as Ci,f as Ei,g as Ri,h as Xr,i as Po,s as ki,o as ji,j as Oi,k as Ti,l as _i,m as $n,F as dr,n as Ai,p as $i,u as Pi}from"./@firebase-CqOa32Ie.js";import{D as Di}from"./@rc-dock-CCJK8Mi7.js";import{h as L}from"./@moment-C5S46NFB.js";import{d as Do}from"./@d3-format-CzD4bSOQ.js";import{u as qt}from"./@use-resize-observer-B51Ok9-X.js";import{c as Qr}from"./@classnames-Nq95h12A.js";import{V as Ni,a as No,c as Ii,b as Io,d as Lo,e as Li,f as Tt,g as Bi,h as Fi}from"./@victory-CvFeZNzm.js";import{u as Mi}from"./@react-hook-BxLKElv0.js";import{o as zi}from"./@hookform-CV33w4so.js";import{c as Ui,a as fr,b as Hi}from"./@yup-Byvv1ZMI.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(o){if(o.ep)return;o.ep=!0;const s=r(o);fetch(o.href,s)}})();var D="-ms-",Ze="-moz-",P="-webkit-",Bo="comm",Gt="rule",en="decl",qi="@import",Fo="@keyframes",Gi="@layer",Mo=Math.abs,tn=String.fromCharCode,kr=Object.assign;function Wi(e,t){return B(e,0)^45?(((t<<2^B(e,0))<<2^B(e,1))<<2^B(e,2))<<2^B(e,3):0}function zo(e){return e.trim()}function ae(e,t){return(e=t.exec(e))?e[0]:e}function A(e,t,r){return e.replace(t,r)}function wt(e,t,r){return e.indexOf(t,r)}function B(e,t){return e.charCodeAt(t)|0}function Pe(e,t,r){return e.slice(t,r)}function se(e){return e.length}function Uo(e){return e.length}function Je(e,t){return t.push(e),e}function Vi(e,t){return e.map(t).join("")}function Pn(e,t){return e.filter(function(r){return!ae(r,t)})}var Wt=1,De=1,Ho=0,X=0,I=0,Be="";function Vt(e,t,r,n,o,s,i,a){return{value:e,root:t,parent:r,type:n,props:o,children:s,line:Wt,column:De,length:i,return:"",siblings:a}}function he(e,t){return kr(Vt("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Te(e){for(;e.root;)e=he(e.root,{children:[e]});Je(e,e.siblings)}function Ki(){return I}function Ji(){return I=X>0?B(Be,--X):0,De--,I===10&&(De=1,Wt--),I}function re(){return I=X<Ho?B(Be,X++):0,De++,I===10&&(De=1,Wt++),I}function ve(){return B(Be,X)}function St(){return X}function Kt(e,t){return Pe(Be,e,t)}function jr(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Yi(e){return Wt=De=1,Ho=se(Be=e),X=0,[]}function Zi(e){return Be="",e}function pr(e){return zo(Kt(X-1,Or(e===91?e+2:e===40?e+1:e)))}function Xi(e){for(;(I=ve())&&I<33;)re();return jr(e)>2||jr(I)>3?"":" "}function Qi(e,t){for(;--t&&re()&&!(I<48||I>102||I>57&&I<65||I>70&&I<97););return Kt(e,St()+(t<6&&ve()==32&&re()==32))}function Or(e){for(;re();)switch(I){case e:return X;case 34:case 39:e!==34&&e!==39&&Or(I);break;case 40:e===41&&Or(e);break;case 92:re();break}return X}function ea(e,t){for(;re()&&e+I!==57;)if(e+I===84&&ve()===47)break;return"/*"+Kt(t,X-1)+"*"+tn(e===47?e:re())}function ta(e){for(;!jr(ve());)re();return Kt(e,X)}function ra(e){return Zi(vt("",null,null,null,[""],e=Yi(e),0,[0],e))}function vt(e,t,r,n,o,s,i,a,l){for(var u=0,c=0,f=i,m=0,g=0,h=0,y=1,v=1,k=1,R=0,x="",E=o,b=s,w=n,S=x;v;)switch(h=R,R=re()){case 40:if(h!=108&&B(S,f-1)==58){wt(S+=A(pr(R),"&","&\f"),"&\f",Mo(u?a[u-1]:0))!=-1&&(k=-1);break}case 34:case 39:case 91:S+=pr(R);break;case 9:case 10:case 13:case 32:S+=Xi(h);break;case 92:S+=Qi(St()-1,7);continue;case 47:switch(ve()){case 42:case 47:Je(na(ea(re(),St()),t,r,l),l);break;default:S+="/"}break;case 123*y:a[u++]=se(S)*k;case 125*y:case 59:case 0:switch(R){case 0:case 125:v=0;case 59+c:k==-1&&(S=A(S,/\f/g,"")),g>0&&se(S)-f&&Je(g>32?Nn(S+";",n,r,f-1,l):Nn(A(S," ","")+";",n,r,f-2,l),l);break;case 59:S+=";";default:if(Je(w=Dn(S,t,r,u,c,o,a,x,E=[],b=[],f,s),s),R===123)if(c===0)vt(S,t,w,w,E,s,f,a,b);else switch(m===99&&B(S,3)===110?100:m){case 100:case 108:case 109:case 115:vt(e,w,w,n&&Je(Dn(e,w,w,0,0,o,a,x,o,E=[],f,b),b),o,b,f,a,n?E:b);break;default:vt(S,w,w,w,[""],b,0,a,b)}}u=c=g=0,y=k=1,x=S="",f=i;break;case 58:f=1+se(S),g=h;default:if(y<1){if(R==123)--y;else if(R==125&&y++==0&&Ji()==125)continue}switch(S+=tn(R),R*y){case 38:k=c>0?1:(S+="\f",-1);break;case 44:a[u++]=(se(S)-1)*k,k=1;break;case 64:ve()===45&&(S+=pr(re())),m=ve(),c=f=se(x=S+=ta(St())),R++;break;case 45:h===45&&se(S)==2&&(y=0)}}return s}function Dn(e,t,r,n,o,s,i,a,l,u,c,f){for(var m=o-1,g=o===0?s:[""],h=Uo(g),y=0,v=0,k=0;y<n;++y)for(var R=0,x=Pe(e,m+1,m=Mo(v=i[y])),E=e;R<h;++R)(E=zo(v>0?g[R]+" "+x:A(x,/&\f/g,g[R])))&&(l[k++]=E);return Vt(e,t,r,o===0?Gt:a,l,u,c,f)}function na(e,t,r,n){return Vt(e,t,r,Bo,tn(Ki()),Pe(e,2,-2),0,n)}function Nn(e,t,r,n,o){return Vt(e,t,r,en,Pe(e,0,n),Pe(e,n+1,-1),n,o)}function qo(e,t,r){switch(Wi(e,t)){case 5103:return P+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return P+e+e;case 4789:return Ze+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return P+e+Ze+e+D+e+e;case 5936:switch(B(e,t+11)){case 114:return P+e+D+A(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return P+e+D+A(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return P+e+D+A(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return P+e+D+e+e;case 6165:return P+e+D+"flex-"+e+e;case 5187:return P+e+A(e,/(\w+).+(:[^]+)/,P+"box-$1$2"+D+"flex-$1$2")+e;case 5443:return P+e+D+"flex-item-"+A(e,/flex-|-self/g,"")+(ae(e,/flex-|baseline/)?"":D+"grid-row-"+A(e,/flex-|-self/g,""))+e;case 4675:return P+e+D+"flex-line-pack"+A(e,/align-content|flex-|-self/g,"")+e;case 5548:return P+e+D+A(e,"shrink","negative")+e;case 5292:return P+e+D+A(e,"basis","preferred-size")+e;case 6060:return P+"box-"+A(e,"-grow","")+P+e+D+A(e,"grow","positive")+e;case 4554:return P+A(e,/([^-])(transform)/g,"$1"+P+"$2")+e;case 6187:return A(A(A(e,/(zoom-|grab)/,P+"$1"),/(image-set)/,P+"$1"),e,"")+e;case 5495:case 3959:return A(e,/(image-set\([^]*)/,P+"$1$`$1");case 4968:return A(A(e,/(.+:)(flex-)?(.*)/,P+"box-pack:$3"+D+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+P+e+e;case 4200:if(!ae(e,/flex-|baseline/))return D+"grid-column-align"+Pe(e,t)+e;break;case 2592:case 3360:return D+A(e,"template-","")+e;case 4384:case 3616:return r&&r.some(function(n,o){return t=o,ae(n.props,/grid-\w+-end/)})?~wt(e+(r=r[t].value),"span",0)?e:D+A(e,"-start","")+e+D+"grid-row-span:"+(~wt(r,"span",0)?ae(r,/\d+/):+ae(r,/\d+/)-+ae(e,/\d+/))+";":D+A(e,"-start","")+e;case 4896:case 4128:return r&&r.some(function(n){return ae(n.props,/grid-\w+-start/)})?e:D+A(A(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return A(e,/(.+)-inline(.+)/,P+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(se(e)-1-t>6)switch(B(e,t+1)){case 109:if(B(e,t+4)!==45)break;case 102:return A(e,/(.+:)(.+)-([^]+)/,"$1"+P+"$2-$3$1"+Ze+(B(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~wt(e,"stretch",0)?qo(A(e,"stretch","fill-available"),t,r)+e:e}break;case 5152:case 5920:return A(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(n,o,s,i,a,l,u){return D+o+":"+s+u+(i?D+o+"-span:"+(a?l:+l-+s)+u:"")+e});case 4949:if(B(e,t+6)===121)return A(e,":",":"+P)+e;break;case 6444:switch(B(e,B(e,14)===45?18:11)){case 120:return A(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+P+(B(e,14)===45?"inline-":"")+"box$3$1"+P+"$2$3$1"+D+"$2box$3")+e;case 100:return A(e,":",":"+D)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return A(e,"scroll-","scroll-snap-")+e}return e}function _t(e,t){for(var r="",n=0;n<e.length;n++)r+=t(e[n],n,e,t)||"";return r}function oa(e,t,r,n){switch(e.type){case Gi:if(e.children.length)break;case qi:case en:return e.return=e.return||e.value;case Bo:return"";case Fo:return e.return=e.value+"{"+_t(e.children,n)+"}";case Gt:if(!se(e.value=e.props.join(",")))return""}return se(r=_t(e.children,n))?e.return=e.value+"{"+r+"}":""}function sa(e){var t=Uo(e);return function(r,n,o,s){for(var i="",a=0;a<t;a++)i+=e[a](r,n,o,s)||"";return i}}function ia(e){return function(t){t.root||(t=t.return)&&e(t)}}function aa(e,t,r,n){if(e.length>-1&&!e.return)switch(e.type){case en:e.return=qo(e.value,e.length,r);return;case Fo:return _t([he(e,{value:A(e.value,"@","@"+P)})],n);case Gt:if(e.length)return Vi(r=e.props,function(o){switch(ae(o,n=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Te(he(e,{props:[A(o,/:(read-\w+)/,":"+Ze+"$1")]})),Te(he(e,{props:[o]})),kr(e,{props:Pn(r,n)});break;case"::placeholder":Te(he(e,{props:[A(o,/:(plac\w+)/,":"+P+"input-$1")]})),Te(he(e,{props:[A(o,/:(plac\w+)/,":"+Ze+"$1")]})),Te(he(e,{props:[A(o,/:(plac\w+)/,D+"input-$1")]})),Te(he(e,{props:[o]})),kr(e,{props:Pn(r,n)});break}return""})}}var ca={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},K={},Ne=typeof process<"u"&&K!==void 0&&(K.REACT_APP_SC_ATTR||K.SC_ATTR)||"data-styled",Go="active",Wo="data-styled-version",Jt="6.1.11",rn=`/*!sc*/
`,nn=typeof window<"u"&&"HTMLElement"in window,la=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&K!==void 0&&K.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&K.REACT_APP_SC_DISABLE_SPEEDY!==""?K.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&K.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&K!==void 0&&K.SC_DISABLE_SPEEDY!==void 0&&K.SC_DISABLE_SPEEDY!==""&&K.SC_DISABLE_SPEEDY!=="false"&&K.SC_DISABLE_SPEEDY),ua={},Yt=Object.freeze([]),Ie=Object.freeze({});function Vo(e,t,r){return r===void 0&&(r=Ie),e.theme!==r.theme&&e.theme||t||r.theme}var Ko=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),da=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,fa=/(^-|-$)/g;function In(e){return e.replace(da,"-").replace(fa,"")}var pa=/(a)(d)/gi,ht=52,Ln=function(e){return String.fromCharCode(e+(e>25?39:97))};function Tr(e){var t,r="";for(t=Math.abs(e);t>ht;t=t/ht|0)r=Ln(t%ht)+r;return(Ln(t%ht)+r).replace(pa,"$1-$2")}var hr,Jo=5381,Ae=function(e,t){for(var r=t.length;r;)e=33*e^t.charCodeAt(--r);return e},Yo=function(e){return Ae(Jo,e)};function on(e){return Tr(Yo(e)>>>0)}function ha(e){return e.displayName||e.name||"Component"}function mr(e){return typeof e=="string"&&!0}var Zo=typeof Symbol=="function"&&Symbol.for,Xo=Zo?Symbol.for("react.memo"):60115,ma=Zo?Symbol.for("react.forward_ref"):60112,ga={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},ya={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Qo={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},xa=((hr={})[ma]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},hr[Xo]=Qo,hr);function Bn(e){return("type"in(t=e)&&t.type.$$typeof)===Xo?Qo:"$$typeof"in e?xa[e.$$typeof]:ga;var t}var ba=Object.defineProperty,wa=Object.getOwnPropertyNames,Fn=Object.getOwnPropertySymbols,Sa=Object.getOwnPropertyDescriptor,va=Object.getPrototypeOf,Mn=Object.prototype;function es(e,t,r){if(typeof t!="string"){if(Mn){var n=va(t);n&&n!==Mn&&es(e,n,r)}var o=wa(t);Fn&&(o=o.concat(Fn(t)));for(var s=Bn(e),i=Bn(t),a=0;a<o.length;++a){var l=o[a];if(!(l in ya||r&&r[l]||i&&l in i||s&&l in s)){var u=Sa(t,l);try{ba(e,l,u)}catch{}}}}return e}function Ee(e){return typeof e=="function"}function sn(e){return typeof e=="object"&&"styledComponentId"in e}function Se(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function At(e,t){if(e.length===0)return"";for(var r=e[0],n=1;n<e.length;n++)r+=e[n];return r}function Xe(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function _r(e,t,r){if(r===void 0&&(r=!1),!r&&!Xe(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var n=0;n<t.length;n++)e[n]=_r(e[n],t[n]);else if(Xe(t))for(var n in t)e[n]=_r(e[n],t[n]);return e}function an(e,t){Object.defineProperty(e,"toString",{value:t})}function Re(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Ca=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var r=0,n=0;n<t;n++)r+=this.groupSizes[n];return r},e.prototype.insertRules=function(t,r){if(t>=this.groupSizes.length){for(var n=this.groupSizes,o=n.length,s=o;t>=s;)if((s<<=1)<0)throw Re(16,"".concat(t));this.groupSizes=new Uint32Array(s),this.groupSizes.set(n),this.length=s;for(var i=o;i<s;i++)this.groupSizes[i]=0}for(var a=this.indexOfGroup(t+1),l=(i=0,r.length);i<l;i++)this.tag.insertRule(a,r[i])&&(this.groupSizes[t]++,a++)},e.prototype.clearGroup=function(t){if(t<this.length){var r=this.groupSizes[t],n=this.indexOfGroup(t),o=n+r;this.groupSizes[t]=0;for(var s=n;s<o;s++)this.tag.deleteRule(n)}},e.prototype.getGroup=function(t){var r="";if(t>=this.length||this.groupSizes[t]===0)return r;for(var n=this.groupSizes[t],o=this.indexOfGroup(t),s=o+n,i=o;i<s;i++)r+="".concat(this.tag.getRule(i)).concat(rn);return r},e}(),Ct=new Map,$t=new Map,Et=1,mt=function(e){if(Ct.has(e))return Ct.get(e);for(;$t.has(Et);)Et++;var t=Et++;return Ct.set(e,t),$t.set(t,e),t},Ea=function(e,t){Et=t+1,Ct.set(e,t),$t.set(t,e)},Ra="style[".concat(Ne,"][").concat(Wo,'="').concat(Jt,'"]'),ka=new RegExp("^".concat(Ne,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),ja=function(e,t,r){for(var n,o=r.split(","),s=0,i=o.length;s<i;s++)(n=o[s])&&e.registerName(t,n)},Oa=function(e,t){for(var r,n=((r=t.textContent)!==null&&r!==void 0?r:"").split(rn),o=[],s=0,i=n.length;s<i;s++){var a=n[s].trim();if(a){var l=a.match(ka);if(l){var u=0|parseInt(l[1],10),c=l[2];u!==0&&(Ea(c,u),ja(e,c,l[3]),e.getTag().insertRules(u,o)),o.length=0}else o.push(a)}}};function Ta(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var ts=function(e){var t=document.head,r=e||t,n=document.createElement("style"),o=function(a){var l=Array.from(a.querySelectorAll("style[".concat(Ne,"]")));return l[l.length-1]}(r),s=o!==void 0?o.nextSibling:null;n.setAttribute(Ne,Go),n.setAttribute(Wo,Jt);var i=Ta();return i&&n.setAttribute("nonce",i),r.insertBefore(n,s),n},_a=function(){function e(t){this.element=ts(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(r){if(r.sheet)return r.sheet;for(var n=document.styleSheets,o=0,s=n.length;o<s;o++){var i=n[o];if(i.ownerNode===r)return i}throw Re(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,r){try{return this.sheet.insertRule(r,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var r=this.sheet.cssRules[t];return r&&r.cssText?r.cssText:""},e}(),Aa=function(){function e(t){this.element=ts(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,r){if(t<=this.length&&t>=0){var n=document.createTextNode(r);return this.element.insertBefore(n,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),$a=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,r){return t<=this.length&&(this.rules.splice(t,0,r),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),zn=nn,Pa={isServer:!nn,useCSSOMInjection:!la},Pt=function(){function e(t,r,n){t===void 0&&(t=Ie),r===void 0&&(r={});var o=this;this.options=z(z({},Pa),t),this.gs=r,this.names=new Map(n),this.server=!!t.isServer,!this.server&&nn&&zn&&(zn=!1,function(s){for(var i=document.querySelectorAll(Ra),a=0,l=i.length;a<l;a++){var u=i[a];u&&u.getAttribute(Ne)!==Go&&(Oa(s,u),u.parentNode&&u.parentNode.removeChild(u))}}(this)),an(this,function(){return function(s){for(var i=s.getTag(),a=i.length,l="",u=function(f){var m=function(k){return $t.get(k)}(f);if(m===void 0)return"continue";var g=s.names.get(m),h=i.getGroup(f);if(g===void 0||h.length===0)return"continue";var y="".concat(Ne,".g").concat(f,'[id="').concat(m,'"]'),v="";g!==void 0&&g.forEach(function(k){k.length>0&&(v+="".concat(k,","))}),l+="".concat(h).concat(y,'{content:"').concat(v,'"}').concat(rn)},c=0;c<a;c++)u(c);return l}(o)})}return e.registerId=function(t){return mt(t)},e.prototype.reconstructWithOptions=function(t,r){return r===void 0&&(r=!0),new e(z(z({},this.options),t),this.gs,r&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(r){var n=r.useCSSOMInjection,o=r.target;return r.isServer?new $a(o):n?new _a(o):new Aa(o)}(this.options),new Ca(t)));var t},e.prototype.hasNameForId=function(t,r){return this.names.has(t)&&this.names.get(t).has(r)},e.prototype.registerName=function(t,r){if(mt(t),this.names.has(t))this.names.get(t).add(r);else{var n=new Set;n.add(r),this.names.set(t,n)}},e.prototype.insertRules=function(t,r,n){this.registerName(t,r),this.getTag().insertRules(mt(t),n)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(mt(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),Da=/&/g,Na=/^\s*\/\/.*$/gm;function rs(e,t){return e.map(function(r){return r.type==="rule"&&(r.value="".concat(t," ").concat(r.value),r.value=r.value.replaceAll(",",",".concat(t," ")),r.props=r.props.map(function(n){return"".concat(t," ").concat(n)})),Array.isArray(r.children)&&r.type!=="@keyframes"&&(r.children=rs(r.children,t)),r})}function Ia(e){var t,r,n,o=Ie,s=o.options,i=s===void 0?Ie:s,a=o.plugins,l=a===void 0?Yt:a,u=function(m,g,h){return h.startsWith(r)&&h.endsWith(r)&&h.replaceAll(r,"").length>0?".".concat(t):m},c=l.slice();c.push(function(m){m.type===Gt&&m.value.includes("&")&&(m.props[0]=m.props[0].replace(Da,r).replace(n,u))}),i.prefix&&c.push(aa),c.push(oa);var f=function(m,g,h,y){g===void 0&&(g=""),h===void 0&&(h=""),y===void 0&&(y="&"),t=y,r=g,n=new RegExp("\\".concat(r,"\\b"),"g");var v=m.replace(Na,""),k=ra(h||g?"".concat(h," ").concat(g," { ").concat(v," }"):v);i.namespace&&(k=rs(k,i.namespace));var R=[];return _t(k,sa(c.concat(ia(function(x){return R.push(x)})))),R};return f.hash=l.length?l.reduce(function(m,g){return g.name||Re(15),Ae(m,g.name)},Jo).toString():"",f}var La=new Pt,Ar=Ia(),ns=te.createContext({shouldForwardProp:void 0,styleSheet:La,stylis:Ar});ns.Consumer;te.createContext(void 0);function $r(){return O.useContext(ns)}var os=function(){function e(t,r){var n=this;this.inject=function(o,s){s===void 0&&(s=Ar);var i=n.name+s.hash;o.hasNameForId(n.id,i)||o.insertRules(n.id,i,s(n.rules,i,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=r,an(this,function(){throw Re(12,String(n.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Ar),this.name+t.hash},e}(),Ba=function(e){return e>="A"&&e<="Z"};function Un(e){for(var t="",r=0;r<e.length;r++){var n=e[r];if(r===1&&n==="-"&&e[0]==="-")return e;Ba(n)?t+="-"+n.toLowerCase():t+=n}return t.startsWith("ms-")?"-"+t:t}var ss=function(e){return e==null||e===!1||e===""},is=function(e){var t,r,n=[];for(var o in e){var s=e[o];e.hasOwnProperty(o)&&!ss(s)&&(Array.isArray(s)&&s.isCss||Ee(s)?n.push("".concat(Un(o),":"),s,";"):Xe(s)?n.push.apply(n,$e($e(["".concat(o," {")],is(s),!1),["}"],!1)):n.push("".concat(Un(o),": ").concat((t=o,(r=s)==null||typeof r=="boolean"||r===""?"":typeof r!="number"||r===0||t in ca||t.startsWith("--")?String(r).trim():"".concat(r,"px")),";")))}return n};function me(e,t,r,n){if(ss(e))return[];if(sn(e))return[".".concat(e.styledComponentId)];if(Ee(e)){if(!Ee(s=e)||s.prototype&&s.prototype.isReactComponent||!t)return[e];var o=e(t);return me(o,t,r,n)}var s;return e instanceof os?r?(e.inject(r,n),[e.getName(n)]):[e]:Xe(e)?is(e):Array.isArray(e)?Array.prototype.concat.apply(Yt,e.map(function(i){return me(i,t,r,n)})):[e.toString()]}function as(e){for(var t=0;t<e.length;t+=1){var r=e[t];if(Ee(r)&&!sn(r))return!1}return!0}var Fa=Yo(Jt),Ma=function(){function e(t,r,n){this.rules=t,this.staticRulesId="",this.isStatic=(n===void 0||n.isStatic)&&as(t),this.componentId=r,this.baseHash=Ae(Fa,r),this.baseStyle=n,Pt.registerId(r)}return e.prototype.generateAndInjectStyles=function(t,r,n){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,r,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&r.hasNameForId(this.componentId,this.staticRulesId))o=Se(o,this.staticRulesId);else{var s=At(me(this.rules,t,r,n)),i=Tr(Ae(this.baseHash,s)>>>0);if(!r.hasNameForId(this.componentId,i)){var a=n(s,".".concat(i),void 0,this.componentId);r.insertRules(this.componentId,i,a)}o=Se(o,i),this.staticRulesId=i}else{for(var l=Ae(this.baseHash,n.hash),u="",c=0;c<this.rules.length;c++){var f=this.rules[c];if(typeof f=="string")u+=f;else if(f){var m=At(me(f,t,r,n));l=Ae(l,m+c),u+=m}}if(u){var g=Tr(l>>>0);r.hasNameForId(this.componentId,g)||r.insertRules(this.componentId,g,n(u,".".concat(g),void 0,this.componentId)),o=Se(o,g)}}return o},e}(),Qe=te.createContext(void 0);Qe.Consumer;function za(e){var t=te.useContext(Qe),r=O.useMemo(function(){return function(n,o){if(!n)throw Re(14);if(Ee(n)){var s=n(o);return s}if(Array.isArray(n)||typeof n!="object")throw Re(8);return o?z(z({},o),n):n}(e.theme,t)},[e.theme,t]);return e.children?te.createElement(Qe.Provider,{value:r},e.children):null}var gr={};function Ua(e,t,r){var n=sn(e),o=e,s=!mr(e),i=t.attrs,a=i===void 0?Yt:i,l=t.componentId,u=l===void 0?function(E,b){var w=typeof E!="string"?"sc":In(E);gr[w]=(gr[w]||0)+1;var S="".concat(w,"-").concat(on(Jt+w+gr[w]));return b?"".concat(b,"-").concat(S):S}(t.displayName,t.parentComponentId):l,c=t.displayName,f=c===void 0?function(E){return mr(E)?"styled.".concat(E):"Styled(".concat(ha(E),")")}(e):c,m=t.displayName&&t.componentId?"".concat(In(t.displayName),"-").concat(t.componentId):t.componentId||u,g=n&&o.attrs?o.attrs.concat(a).filter(Boolean):a,h=t.shouldForwardProp;if(n&&o.shouldForwardProp){var y=o.shouldForwardProp;if(t.shouldForwardProp){var v=t.shouldForwardProp;h=function(E,b){return y(E,b)&&v(E,b)}}else h=y}var k=new Ma(r,m,n?o.componentStyle:void 0);function R(E,b){return function(w,S,j){var T=w.attrs,M=w.componentStyle,$=w.defaultProps,q=w.foldedComponentIds,ue=w.styledComponentId,xe=w.target,ii=te.useContext(Qe),ai=$r(),ar=w.shouldForwardProp||ai.shouldForwardProp,_n=Vo(S,ii,$)||Ie,ie=function(dt,qe,ft){for(var Ge,be=z(z({},qe),{className:void 0,theme:ft}),lr=0;lr<dt.length;lr+=1){var pt=Ee(Ge=dt[lr])?Ge(be):Ge;for(var fe in pt)be[fe]=fe==="className"?Se(be[fe],pt[fe]):fe==="style"?z(z({},be[fe]),pt[fe]):pt[fe]}return qe.className&&(be.className=Se(be.className,qe.className)),be}(T,S,_n),ut=ie.as||xe,He={};for(var de in ie)ie[de]===void 0||de[0]==="$"||de==="as"||de==="theme"&&ie.theme===_n||(de==="forwardedAs"?He.as=ie.forwardedAs:ar&&!ar(de,ut)||(He[de]=ie[de]));var An=function(dt,qe){var ft=$r(),Ge=dt.generateAndInjectStyles(qe,ft.styleSheet,ft.stylis);return Ge}(M,ie),cr=Se(q,ue);return An&&(cr+=" "+An),ie.className&&(cr+=" "+ie.className),He[mr(ut)&&!Ko.has(ut)?"class":"className"]=cr,He.ref=j,O.createElement(ut,He)}(x,E,b)}R.displayName=f;var x=te.forwardRef(R);return x.attrs=g,x.componentStyle=k,x.displayName=f,x.shouldForwardProp=h,x.foldedComponentIds=n?Se(o.foldedComponentIds,o.styledComponentId):"",x.styledComponentId=m,x.target=n?o.target:e,Object.defineProperty(x,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(E){this._foldedDefaultProps=n?function(b){for(var w=[],S=1;S<arguments.length;S++)w[S-1]=arguments[S];for(var j=0,T=w;j<T.length;j++)_r(b,T[j],!0);return b}({},o.defaultProps,E):E}}),an(x,function(){return".".concat(x.styledComponentId)}),s&&es(x,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),x}function Hn(e,t){for(var r=[e[0]],n=0,o=t.length;n<o;n+=1)r.push(t[n],e[n+1]);return r}var qn=function(e){return Object.assign(e,{isCss:!0})};function H(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];if(Ee(e)||Xe(e))return qn(me(Hn(Yt,$e([e],t,!0))));var n=e;return t.length===0&&n.length===1&&typeof n[0]=="string"?me(n):qn(me(Hn(n,t)))}function Pr(e,t,r){if(r===void 0&&(r=Ie),!t)throw Re(1,t);var n=function(o){for(var s=[],i=1;i<arguments.length;i++)s[i-1]=arguments[i];return e(t,r,H.apply(void 0,$e([o],s,!1)))};return n.attrs=function(o){return Pr(e,t,z(z({},r),{attrs:Array.prototype.concat(r.attrs,o).filter(Boolean)}))},n.withConfig=function(o){return Pr(e,t,z(z({},r),o))},n}var cs=function(e){return Pr(Ua,e)},C=cs;Ko.forEach(function(e){C[e]=cs(e)});var Ha=function(){function e(t,r){this.rules=t,this.componentId=r,this.isStatic=as(t),Pt.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,r,n,o){var s=o(At(me(this.rules,r,n,o)),""),i=this.componentId+t;n.insertRules(i,i,s)},e.prototype.removeStyles=function(t,r){r.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,r,n,o){t>2&&Pt.registerId(this.componentId+t),this.removeStyles(t,n),this.createStyles(t,r,n,o)},e}();function qa(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];var n=H.apply(void 0,$e([e],t,!1)),o="sc-global-".concat(on(JSON.stringify(n))),s=new Ha(n,o),i=function(l){var u=$r(),c=te.useContext(Qe),f=te.useRef(u.styleSheet.allocateGSInstance(o)).current;return u.styleSheet.server&&a(f,l,u.styleSheet,c,u.stylis),te.useLayoutEffect(function(){if(!u.styleSheet.server)return a(f,l,u.styleSheet,c,u.stylis),function(){return s.removeStyles(f,u.styleSheet)}},[f,l,u.styleSheet,c,u.stylis]),null};function a(l,u,c,f,m){if(s.isStatic)s.renderStyles(l,ua,c,m);else{var g=z(z({},u),{theme:Vo(u,f,i.defaultProps)});s.renderStyles(l,g,c,m)}}return te.memo(i)}function Ga(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];var n=At(H.apply(void 0,$e([e],t,!1))),o=on(n);return new os(o,n)}const Wa={},Va=qa`
 ${Wa};

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
`,Fe=di,G=ui;var Dt=(e=>(e.DARK="dark",e.LIGHT="light",e))(Dt||{});const Dr={USD:{id:"USD",symbol:"$"},EUR:{id:"EUR",symbol:"€"},GPB:{id:"GPB",symbol:"£"},CHF:{id:"CHF",symbol:"₣"},UAH:{id:"UAH",symbol:"₴"}},Nr=[{id:"bitcoin",symbol:"BTC"},{id:"ethereum",symbol:"ETH"},{id:"ripple",symbol:"XRP"},{id:"bitcoin-cash",symbol:"BCH"},{id:"chainlink",symbol:"LINK"},{id:"litecoin",symbol:"LTC"},{id:"cardano",symbol:"ADA"},{id:"binancecoin",symbol:"BNB"},{id:"stellar",symbol:"XLM"},{id:"monero",symbol:"XMR"},{id:"solana",symbol:"SOL"}],Ka={btc:",.2f",eth:",.2f",bnb:",.3f",sol:",.3f",xrp:",.4f",ada:",.4f",link:",.3f",bch:",.3f",ltc:",.4f",xlm:",.5f",xmr:",.3f"},Ja=[Dt.DARK,Dt.LIGHT],Ya=e=>new Promise(t=>setTimeout(t,e)),Za=e=>e.map(([t,r,n,o,s])=>({x:t,open:r,high:n,low:o,close:s})),ls=e=>e.map(({time:t,close:r})=>({x:L.unix(t),y:r})),Xa=e=>e.reduce((t,{symbol:r,...n})=>({...t,[r]:{...n,symbol:r}}),{}),us=e=>{const t=e.toPrecision(5);return Do("~s")(Number(t))},Qa=(e,t)=>Do(Ka[e])(t),ec=e=>L(e).format("MMMM Do YYYY");function tc(e){const t=O.useRef();return O.useEffect(()=>{t.current=e},[e]),t.current}function ds(e,t){return function(){return e.apply(t,arguments)}}const{toString:rc}=Object.prototype,{getPrototypeOf:cn}=Object,Zt=(e=>t=>{const r=rc.call(t);return e[r]||(e[r]=r.slice(8,-1).toLowerCase())})(Object.create(null)),oe=e=>(e=e.toLowerCase(),t=>Zt(t)===e),Xt=e=>t=>typeof t===e,{isArray:Me}=Array,et=Xt("undefined");function nc(e){return e!==null&&!et(e)&&e.constructor!==null&&!et(e.constructor)&&Z(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const fs=oe("ArrayBuffer");function oc(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&fs(e.buffer),t}const sc=Xt("string"),Z=Xt("function"),ps=Xt("number"),Qt=e=>e!==null&&typeof e=="object",ic=e=>e===!0||e===!1,Rt=e=>{if(Zt(e)!=="object")return!1;const t=cn(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},ac=oe("Date"),cc=oe("File"),lc=oe("Blob"),uc=oe("FileList"),dc=e=>Qt(e)&&Z(e.pipe),fc=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||Z(e.append)&&((t=Zt(e))==="formdata"||t==="object"&&Z(e.toString)&&e.toString()==="[object FormData]"))},pc=oe("URLSearchParams"),[hc,mc,gc,yc]=["ReadableStream","Request","Response","Headers"].map(oe),xc=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function st(e,t,{allOwnKeys:r=!1}={}){if(e===null||typeof e>"u")return;let n,o;if(typeof e!="object"&&(e=[e]),Me(e))for(n=0,o=e.length;n<o;n++)t.call(null,e[n],n,e);else{const s=r?Object.getOwnPropertyNames(e):Object.keys(e),i=s.length;let a;for(n=0;n<i;n++)a=s[n],t.call(null,e[a],a,e)}}function hs(e,t){t=t.toLowerCase();const r=Object.keys(e);let n=r.length,o;for(;n-- >0;)if(o=r[n],t===o.toLowerCase())return o;return null}const ms=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,gs=e=>!et(e)&&e!==ms;function Ir(){const{caseless:e}=gs(this)&&this||{},t={},r=(n,o)=>{const s=e&&hs(t,o)||o;Rt(t[s])&&Rt(n)?t[s]=Ir(t[s],n):Rt(n)?t[s]=Ir({},n):Me(n)?t[s]=n.slice():t[s]=n};for(let n=0,o=arguments.length;n<o;n++)arguments[n]&&st(arguments[n],r);return t}const bc=(e,t,r,{allOwnKeys:n}={})=>(st(t,(o,s)=>{r&&Z(o)?e[s]=ds(o,r):e[s]=o},{allOwnKeys:n}),e),wc=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),Sc=(e,t,r,n)=>{e.prototype=Object.create(t.prototype,n),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),r&&Object.assign(e.prototype,r)},vc=(e,t,r,n)=>{let o,s,i;const a={};if(t=t||{},e==null)return t;do{for(o=Object.getOwnPropertyNames(e),s=o.length;s-- >0;)i=o[s],(!n||n(i,e,t))&&!a[i]&&(t[i]=e[i],a[i]=!0);e=r!==!1&&cn(e)}while(e&&(!r||r(e,t))&&e!==Object.prototype);return t},Cc=(e,t,r)=>{e=String(e),(r===void 0||r>e.length)&&(r=e.length),r-=t.length;const n=e.indexOf(t,r);return n!==-1&&n===r},Ec=e=>{if(!e)return null;if(Me(e))return e;let t=e.length;if(!ps(t))return null;const r=new Array(t);for(;t-- >0;)r[t]=e[t];return r},Rc=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&cn(Uint8Array)),kc=(e,t)=>{const n=(e&&e[Symbol.iterator]).call(e);let o;for(;(o=n.next())&&!o.done;){const s=o.value;t.call(e,s[0],s[1])}},jc=(e,t)=>{let r;const n=[];for(;(r=e.exec(t))!==null;)n.push(r);return n},Oc=oe("HTMLFormElement"),Tc=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(r,n,o){return n.toUpperCase()+o}),Gn=(({hasOwnProperty:e})=>(t,r)=>e.call(t,r))(Object.prototype),_c=oe("RegExp"),ys=(e,t)=>{const r=Object.getOwnPropertyDescriptors(e),n={};st(r,(o,s)=>{let i;(i=t(o,s,e))!==!1&&(n[s]=i||o)}),Object.defineProperties(e,n)},Ac=e=>{ys(e,(t,r)=>{if(Z(e)&&["arguments","caller","callee"].indexOf(r)!==-1)return!1;const n=e[r];if(Z(n)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+r+"'")})}})},$c=(e,t)=>{const r={},n=o=>{o.forEach(s=>{r[s]=!0})};return Me(e)?n(e):n(String(e).split(t)),r},Pc=()=>{},Dc=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t,yr="abcdefghijklmnopqrstuvwxyz",Wn="0123456789",xs={DIGIT:Wn,ALPHA:yr,ALPHA_DIGIT:yr+yr.toUpperCase()+Wn},Nc=(e=16,t=xs.ALPHA_DIGIT)=>{let r="";const{length:n}=t;for(;e--;)r+=t[Math.random()*n|0];return r};function Ic(e){return!!(e&&Z(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const Lc=e=>{const t=new Array(10),r=(n,o)=>{if(Qt(n)){if(t.indexOf(n)>=0)return;if(!("toJSON"in n)){t[o]=n;const s=Me(n)?[]:{};return st(n,(i,a)=>{const l=r(i,o+1);!et(l)&&(s[a]=l)}),t[o]=void 0,s}}return n};return r(e,0)},Bc=oe("AsyncFunction"),Fc=e=>e&&(Qt(e)||Z(e))&&Z(e.then)&&Z(e.catch),p={isArray:Me,isArrayBuffer:fs,isBuffer:nc,isFormData:fc,isArrayBufferView:oc,isString:sc,isNumber:ps,isBoolean:ic,isObject:Qt,isPlainObject:Rt,isReadableStream:hc,isRequest:mc,isResponse:gc,isHeaders:yc,isUndefined:et,isDate:ac,isFile:cc,isBlob:lc,isRegExp:_c,isFunction:Z,isStream:dc,isURLSearchParams:pc,isTypedArray:Rc,isFileList:uc,forEach:st,merge:Ir,extend:bc,trim:xc,stripBOM:wc,inherits:Sc,toFlatObject:vc,kindOf:Zt,kindOfTest:oe,endsWith:Cc,toArray:Ec,forEachEntry:kc,matchAll:jc,isHTMLForm:Oc,hasOwnProperty:Gn,hasOwnProp:Gn,reduceDescriptors:ys,freezeMethods:Ac,toObjectSet:$c,toCamelCase:Tc,noop:Pc,toFiniteNumber:Dc,findKey:hs,global:ms,isContextDefined:gs,ALPHABET:xs,generateString:Nc,isSpecCompliantForm:Ic,toJSONObject:Lc,isAsyncFn:Bc,isThenable:Fc};function _(e,t,r,n,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),r&&(this.config=r),n&&(this.request=n),o&&(this.response=o)}p.inherits(_,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:p.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const bs=_.prototype,ws={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{ws[e]={value:e}});Object.defineProperties(_,ws);Object.defineProperty(bs,"isAxiosError",{value:!0});_.from=(e,t,r,n,o,s)=>{const i=Object.create(bs);return p.toFlatObject(e,i,function(l){return l!==Error.prototype},a=>a!=="isAxiosError"),_.call(i,e.message,t,r,n,o),i.cause=e,i.name=e.name,s&&Object.assign(i,s),i};const Mc=null;function Lr(e){return p.isPlainObject(e)||p.isArray(e)}function Ss(e){return p.endsWith(e,"[]")?e.slice(0,-2):e}function Vn(e,t,r){return e?e.concat(t).map(function(o,s){return o=Ss(o),!r&&s?"["+o+"]":o}).join(r?".":""):t}function zc(e){return p.isArray(e)&&!e.some(Lr)}const Uc=p.toFlatObject(p,{},null,function(t){return/^is[A-Z]/.test(t)});function er(e,t,r){if(!p.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,r=p.toFlatObject(r,{metaTokens:!0,dots:!1,indexes:!1},!1,function(y,v){return!p.isUndefined(v[y])});const n=r.metaTokens,o=r.visitor||c,s=r.dots,i=r.indexes,l=(r.Blob||typeof Blob<"u"&&Blob)&&p.isSpecCompliantForm(t);if(!p.isFunction(o))throw new TypeError("visitor must be a function");function u(h){if(h===null)return"";if(p.isDate(h))return h.toISOString();if(!l&&p.isBlob(h))throw new _("Blob is not supported. Use a Buffer instead.");return p.isArrayBuffer(h)||p.isTypedArray(h)?l&&typeof Blob=="function"?new Blob([h]):Buffer.from(h):h}function c(h,y,v){let k=h;if(h&&!v&&typeof h=="object"){if(p.endsWith(y,"{}"))y=n?y:y.slice(0,-2),h=JSON.stringify(h);else if(p.isArray(h)&&zc(h)||(p.isFileList(h)||p.endsWith(y,"[]"))&&(k=p.toArray(h)))return y=Ss(y),k.forEach(function(x,E){!(p.isUndefined(x)||x===null)&&t.append(i===!0?Vn([y],E,s):i===null?y:y+"[]",u(x))}),!1}return Lr(h)?!0:(t.append(Vn(v,y,s),u(h)),!1)}const f=[],m=Object.assign(Uc,{defaultVisitor:c,convertValue:u,isVisitable:Lr});function g(h,y){if(!p.isUndefined(h)){if(f.indexOf(h)!==-1)throw Error("Circular reference detected in "+y.join("."));f.push(h),p.forEach(h,function(k,R){(!(p.isUndefined(k)||k===null)&&o.call(t,k,p.isString(R)?R.trim():R,y,m))===!0&&g(k,y?y.concat(R):[R])}),f.pop()}}if(!p.isObject(e))throw new TypeError("data must be an object");return g(e),t}function Kn(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(n){return t[n]})}function ln(e,t){this._pairs=[],e&&er(e,this,t)}const vs=ln.prototype;vs.append=function(t,r){this._pairs.push([t,r])};vs.toString=function(t){const r=t?function(n){return t.call(this,n,Kn)}:Kn;return this._pairs.map(function(o){return r(o[0])+"="+r(o[1])},"").join("&")};function Hc(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Cs(e,t,r){if(!t)return e;const n=r&&r.encode||Hc,o=r&&r.serialize;let s;if(o?s=o(t,r):s=p.isURLSearchParams(t)?t.toString():new ln(t,r).toString(n),s){const i=e.indexOf("#");i!==-1&&(e=e.slice(0,i)),e+=(e.indexOf("?")===-1?"?":"&")+s}return e}class Jn{constructor(){this.handlers=[]}use(t,r,n){return this.handlers.push({fulfilled:t,rejected:r,synchronous:n?n.synchronous:!1,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){p.forEach(this.handlers,function(n){n!==null&&t(n)})}}const Es={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},qc=typeof URLSearchParams<"u"?URLSearchParams:ln,Gc=typeof FormData<"u"?FormData:null,Wc=typeof Blob<"u"?Blob:null,Vc={isBrowser:!0,classes:{URLSearchParams:qc,FormData:Gc,Blob:Wc},protocols:["http","https","file","blob","url","data"]},un=typeof window<"u"&&typeof document<"u",Kc=(e=>un&&["ReactNative","NativeScript","NS"].indexOf(e)<0)(typeof navigator<"u"&&navigator.product),Jc=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",Yc=un&&window.location.href||"http://localhost",Zc=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:un,hasStandardBrowserEnv:Kc,hasStandardBrowserWebWorkerEnv:Jc,origin:Yc},Symbol.toStringTag,{value:"Module"})),ne={...Zc,...Vc};function Xc(e,t){return er(e,new ne.classes.URLSearchParams,Object.assign({visitor:function(r,n,o,s){return ne.isNode&&p.isBuffer(r)?(this.append(n,r.toString("base64")),!1):s.defaultVisitor.apply(this,arguments)}},t))}function Qc(e){return p.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function el(e){const t={},r=Object.keys(e);let n;const o=r.length;let s;for(n=0;n<o;n++)s=r[n],t[s]=e[s];return t}function Rs(e){function t(r,n,o,s){let i=r[s++];if(i==="__proto__")return!0;const a=Number.isFinite(+i),l=s>=r.length;return i=!i&&p.isArray(o)?o.length:i,l?(p.hasOwnProp(o,i)?o[i]=[o[i],n]:o[i]=n,!a):((!o[i]||!p.isObject(o[i]))&&(o[i]=[]),t(r,n,o[i],s)&&p.isArray(o[i])&&(o[i]=el(o[i])),!a)}if(p.isFormData(e)&&p.isFunction(e.entries)){const r={};return p.forEachEntry(e,(n,o)=>{t(Qc(n),o,r,0)}),r}return null}function tl(e,t,r){if(p.isString(e))try{return(t||JSON.parse)(e),p.trim(e)}catch(n){if(n.name!=="SyntaxError")throw n}return(r||JSON.stringify)(e)}const it={transitional:Es,adapter:["xhr","http","fetch"],transformRequest:[function(t,r){const n=r.getContentType()||"",o=n.indexOf("application/json")>-1,s=p.isObject(t);if(s&&p.isHTMLForm(t)&&(t=new FormData(t)),p.isFormData(t))return o?JSON.stringify(Rs(t)):t;if(p.isArrayBuffer(t)||p.isBuffer(t)||p.isStream(t)||p.isFile(t)||p.isBlob(t)||p.isReadableStream(t))return t;if(p.isArrayBufferView(t))return t.buffer;if(p.isURLSearchParams(t))return r.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let a;if(s){if(n.indexOf("application/x-www-form-urlencoded")>-1)return Xc(t,this.formSerializer).toString();if((a=p.isFileList(t))||n.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return er(a?{"files[]":t}:t,l&&new l,this.formSerializer)}}return s||o?(r.setContentType("application/json",!1),tl(t)):t}],transformResponse:[function(t){const r=this.transitional||it.transitional,n=r&&r.forcedJSONParsing,o=this.responseType==="json";if(p.isResponse(t)||p.isReadableStream(t))return t;if(t&&p.isString(t)&&(n&&!this.responseType||o)){const i=!(r&&r.silentJSONParsing)&&o;try{return JSON.parse(t)}catch(a){if(i)throw a.name==="SyntaxError"?_.from(a,_.ERR_BAD_RESPONSE,this,null,this.response):a}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:ne.classes.FormData,Blob:ne.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};p.forEach(["delete","get","head","post","put","patch"],e=>{it.headers[e]={}});const rl=p.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),nl=e=>{const t={};let r,n,o;return e&&e.split(`
`).forEach(function(i){o=i.indexOf(":"),r=i.substring(0,o).trim().toLowerCase(),n=i.substring(o+1).trim(),!(!r||t[r]&&rl[r])&&(r==="set-cookie"?t[r]?t[r].push(n):t[r]=[n]:t[r]=t[r]?t[r]+", "+n:n)}),t},Yn=Symbol("internals");function We(e){return e&&String(e).trim().toLowerCase()}function kt(e){return e===!1||e==null?e:p.isArray(e)?e.map(kt):String(e)}function ol(e){const t=Object.create(null),r=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let n;for(;n=r.exec(e);)t[n[1]]=n[2];return t}const sl=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function xr(e,t,r,n,o){if(p.isFunction(n))return n.call(this,t,r);if(o&&(t=r),!!p.isString(t)){if(p.isString(n))return t.indexOf(n)!==-1;if(p.isRegExp(n))return n.test(t)}}function il(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,r,n)=>r.toUpperCase()+n)}function al(e,t){const r=p.toCamelCase(" "+t);["get","set","has"].forEach(n=>{Object.defineProperty(e,n+r,{value:function(o,s,i){return this[n].call(this,t,o,s,i)},configurable:!0})})}class V{constructor(t){t&&this.set(t)}set(t,r,n){const o=this;function s(a,l,u){const c=We(l);if(!c)throw new Error("header name must be a non-empty string");const f=p.findKey(o,c);(!f||o[f]===void 0||u===!0||u===void 0&&o[f]!==!1)&&(o[f||l]=kt(a))}const i=(a,l)=>p.forEach(a,(u,c)=>s(u,c,l));if(p.isPlainObject(t)||t instanceof this.constructor)i(t,r);else if(p.isString(t)&&(t=t.trim())&&!sl(t))i(nl(t),r);else if(p.isHeaders(t))for(const[a,l]of t.entries())s(l,a,n);else t!=null&&s(r,t,n);return this}get(t,r){if(t=We(t),t){const n=p.findKey(this,t);if(n){const o=this[n];if(!r)return o;if(r===!0)return ol(o);if(p.isFunction(r))return r.call(this,o,n);if(p.isRegExp(r))return r.exec(o);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,r){if(t=We(t),t){const n=p.findKey(this,t);return!!(n&&this[n]!==void 0&&(!r||xr(this,this[n],n,r)))}return!1}delete(t,r){const n=this;let o=!1;function s(i){if(i=We(i),i){const a=p.findKey(n,i);a&&(!r||xr(n,n[a],a,r))&&(delete n[a],o=!0)}}return p.isArray(t)?t.forEach(s):s(t),o}clear(t){const r=Object.keys(this);let n=r.length,o=!1;for(;n--;){const s=r[n];(!t||xr(this,this[s],s,t,!0))&&(delete this[s],o=!0)}return o}normalize(t){const r=this,n={};return p.forEach(this,(o,s)=>{const i=p.findKey(n,s);if(i){r[i]=kt(o),delete r[s];return}const a=t?il(s):String(s).trim();a!==s&&delete r[s],r[a]=kt(o),n[a]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const r=Object.create(null);return p.forEach(this,(n,o)=>{n!=null&&n!==!1&&(r[o]=t&&p.isArray(n)?n.join(", "):n)}),r}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,r])=>t+": "+r).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...r){const n=new this(t);return r.forEach(o=>n.set(o)),n}static accessor(t){const n=(this[Yn]=this[Yn]={accessors:{}}).accessors,o=this.prototype;function s(i){const a=We(i);n[a]||(al(o,i),n[a]=!0)}return p.isArray(t)?t.forEach(s):s(t),this}}V.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);p.reduceDescriptors(V.prototype,({value:e},t)=>{let r=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(n){this[r]=n}}});p.freezeMethods(V);function br(e,t){const r=this||it,n=t||r,o=V.from(n.headers);let s=n.data;return p.forEach(e,function(a){s=a.call(r,s,o.normalize(),t?t.status:void 0)}),o.normalize(),s}function ks(e){return!!(e&&e.__CANCEL__)}function ze(e,t,r){_.call(this,e??"canceled",_.ERR_CANCELED,t,r),this.name="CanceledError"}p.inherits(ze,_,{__CANCEL__:!0});function js(e,t,r){const n=r.config.validateStatus;!r.status||!n||n(r.status)?e(r):t(new _("Request failed with status code "+r.status,[_.ERR_BAD_REQUEST,_.ERR_BAD_RESPONSE][Math.floor(r.status/100)-4],r.config,r.request,r))}function cl(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function ll(e,t){e=e||10;const r=new Array(e),n=new Array(e);let o=0,s=0,i;return t=t!==void 0?t:1e3,function(l){const u=Date.now(),c=n[s];i||(i=u),r[o]=l,n[o]=u;let f=s,m=0;for(;f!==o;)m+=r[f++],f=f%e;if(o=(o+1)%e,o===s&&(s=(s+1)%e),u-i<t)return;const g=c&&u-c;return g?Math.round(m*1e3/g):void 0}}function ul(e,t){let r=0;const n=1e3/t;let o=null;return function(){const i=this===!0,a=Date.now();if(i||a-r>n)return o&&(clearTimeout(o),o=null),r=a,e.apply(null,arguments);o||(o=setTimeout(()=>(o=null,r=Date.now(),e.apply(null,arguments)),n-(a-r)))}}const Nt=(e,t,r=3)=>{let n=0;const o=ll(50,250);return ul(s=>{const i=s.loaded,a=s.lengthComputable?s.total:void 0,l=i-n,u=o(l),c=i<=a;n=i;const f={loaded:i,total:a,progress:a?i/a:void 0,bytes:l,rate:u||void 0,estimated:u&&a&&c?(a-i)/u:void 0,event:s,lengthComputable:a!=null};f[t?"download":"upload"]=!0,e(f)},r)},dl=ne.hasStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");let n;function o(s){let i=s;return t&&(r.setAttribute("href",i),i=r.href),r.setAttribute("href",i),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:r.pathname.charAt(0)==="/"?r.pathname:"/"+r.pathname}}return n=o(window.location.href),function(i){const a=p.isString(i)?o(i):i;return a.protocol===n.protocol&&a.host===n.host}}():function(){return function(){return!0}}(),fl=ne.hasStandardBrowserEnv?{write(e,t,r,n,o,s){const i=[e+"="+encodeURIComponent(t)];p.isNumber(r)&&i.push("expires="+new Date(r).toGMTString()),p.isString(n)&&i.push("path="+n),p.isString(o)&&i.push("domain="+o),s===!0&&i.push("secure"),document.cookie=i.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function pl(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function hl(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function Os(e,t){return e&&!pl(t)?hl(e,t):t}const Zn=e=>e instanceof V?{...e}:e;function ke(e,t){t=t||{};const r={};function n(u,c,f){return p.isPlainObject(u)&&p.isPlainObject(c)?p.merge.call({caseless:f},u,c):p.isPlainObject(c)?p.merge({},c):p.isArray(c)?c.slice():c}function o(u,c,f){if(p.isUndefined(c)){if(!p.isUndefined(u))return n(void 0,u,f)}else return n(u,c,f)}function s(u,c){if(!p.isUndefined(c))return n(void 0,c)}function i(u,c){if(p.isUndefined(c)){if(!p.isUndefined(u))return n(void 0,u)}else return n(void 0,c)}function a(u,c,f){if(f in t)return n(u,c);if(f in e)return n(void 0,u)}const l={url:s,method:s,data:s,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,withXSRFToken:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:a,headers:(u,c)=>o(Zn(u),Zn(c),!0)};return p.forEach(Object.keys(Object.assign({},e,t)),function(c){const f=l[c]||o,m=f(e[c],t[c],c);p.isUndefined(m)&&f!==a||(r[c]=m)}),r}const Ts=e=>{const t=ke({},e);let{data:r,withXSRFToken:n,xsrfHeaderName:o,xsrfCookieName:s,headers:i,auth:a}=t;t.headers=i=V.from(i),t.url=Cs(Os(t.baseURL,t.url),e.params,e.paramsSerializer),a&&i.set("Authorization","Basic "+btoa((a.username||"")+":"+(a.password?unescape(encodeURIComponent(a.password)):"")));let l;if(p.isFormData(r)){if(ne.hasStandardBrowserEnv||ne.hasStandardBrowserWebWorkerEnv)i.setContentType(void 0);else if((l=i.getContentType())!==!1){const[u,...c]=l?l.split(";").map(f=>f.trim()).filter(Boolean):[];i.setContentType([u||"multipart/form-data",...c].join("; "))}}if(ne.hasStandardBrowserEnv&&(n&&p.isFunction(n)&&(n=n(t)),n||n!==!1&&dl(t.url))){const u=o&&s&&fl.read(s);u&&i.set(o,u)}return t},ml=typeof XMLHttpRequest<"u",gl=ml&&function(e){return new Promise(function(r,n){const o=Ts(e);let s=o.data;const i=V.from(o.headers).normalize();let{responseType:a}=o,l;function u(){o.cancelToken&&o.cancelToken.unsubscribe(l),o.signal&&o.signal.removeEventListener("abort",l)}let c=new XMLHttpRequest;c.open(o.method.toUpperCase(),o.url,!0),c.timeout=o.timeout;function f(){if(!c)return;const g=V.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders()),y={data:!a||a==="text"||a==="json"?c.responseText:c.response,status:c.status,statusText:c.statusText,headers:g,config:e,request:c};js(function(k){r(k),u()},function(k){n(k),u()},y),c=null}"onloadend"in c?c.onloadend=f:c.onreadystatechange=function(){!c||c.readyState!==4||c.status===0&&!(c.responseURL&&c.responseURL.indexOf("file:")===0)||setTimeout(f)},c.onabort=function(){c&&(n(new _("Request aborted",_.ECONNABORTED,o,c)),c=null)},c.onerror=function(){n(new _("Network Error",_.ERR_NETWORK,o,c)),c=null},c.ontimeout=function(){let h=o.timeout?"timeout of "+o.timeout+"ms exceeded":"timeout exceeded";const y=o.transitional||Es;o.timeoutErrorMessage&&(h=o.timeoutErrorMessage),n(new _(h,y.clarifyTimeoutError?_.ETIMEDOUT:_.ECONNABORTED,o,c)),c=null},s===void 0&&i.setContentType(null),"setRequestHeader"in c&&p.forEach(i.toJSON(),function(h,y){c.setRequestHeader(y,h)}),p.isUndefined(o.withCredentials)||(c.withCredentials=!!o.withCredentials),a&&a!=="json"&&(c.responseType=o.responseType),typeof o.onDownloadProgress=="function"&&c.addEventListener("progress",Nt(o.onDownloadProgress,!0)),typeof o.onUploadProgress=="function"&&c.upload&&c.upload.addEventListener("progress",Nt(o.onUploadProgress)),(o.cancelToken||o.signal)&&(l=g=>{c&&(n(!g||g.type?new ze(null,e,c):g),c.abort(),c=null)},o.cancelToken&&o.cancelToken.subscribe(l),o.signal&&(o.signal.aborted?l():o.signal.addEventListener("abort",l)));const m=cl(o.url);if(m&&ne.protocols.indexOf(m)===-1){n(new _("Unsupported protocol "+m+":",_.ERR_BAD_REQUEST,e));return}c.send(s||null)})},yl=(e,t)=>{let r=new AbortController,n;const o=function(l){if(!n){n=!0,i();const u=l instanceof Error?l:this.reason;r.abort(u instanceof _?u:new ze(u instanceof Error?u.message:u))}};let s=t&&setTimeout(()=>{o(new _(`timeout ${t} of ms exceeded`,_.ETIMEDOUT))},t);const i=()=>{e&&(s&&clearTimeout(s),s=null,e.forEach(l=>{l&&(l.removeEventListener?l.removeEventListener("abort",o):l.unsubscribe(o))}),e=null)};e.forEach(l=>l&&l.addEventListener&&l.addEventListener("abort",o));const{signal:a}=r;return a.unsubscribe=i,[a,()=>{s&&clearTimeout(s),s=null}]},xl=function*(e,t){let r=e.byteLength;if(!t||r<t){yield e;return}let n=0,o;for(;n<r;)o=n+t,yield e.slice(n,o),n=o},bl=async function*(e,t,r){for await(const n of e)yield*xl(ArrayBuffer.isView(n)?n:await r(String(n)),t)},Xn=(e,t,r,n,o)=>{const s=bl(e,t,o);let i=0;return new ReadableStream({type:"bytes",async pull(a){const{done:l,value:u}=await s.next();if(l){a.close(),n();return}let c=u.byteLength;r&&r(i+=c),a.enqueue(new Uint8Array(u))},cancel(a){return n(a),s.return()}},{highWaterMark:2})},Qn=(e,t)=>{const r=e!=null;return n=>setTimeout(()=>t({lengthComputable:r,total:e,loaded:n}))},tr=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",_s=tr&&typeof ReadableStream=="function",Br=tr&&(typeof TextEncoder=="function"?(e=>t=>e.encode(t))(new TextEncoder):async e=>new Uint8Array(await new Response(e).arrayBuffer())),wl=_s&&(()=>{let e=!1;const t=new Request(ne.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t})(),eo=64*1024,Fr=_s&&!!(()=>{try{return p.isReadableStream(new Response("").body)}catch{}})(),It={stream:Fr&&(e=>e.body)};tr&&(e=>{["text","arrayBuffer","blob","formData","stream"].forEach(t=>{!It[t]&&(It[t]=p.isFunction(e[t])?r=>r[t]():(r,n)=>{throw new _(`Response type '${t}' is not supported`,_.ERR_NOT_SUPPORT,n)})})})(new Response);const Sl=async e=>{if(e==null)return 0;if(p.isBlob(e))return e.size;if(p.isSpecCompliantForm(e))return(await new Request(e).arrayBuffer()).byteLength;if(p.isArrayBufferView(e))return e.byteLength;if(p.isURLSearchParams(e)&&(e=e+""),p.isString(e))return(await Br(e)).byteLength},vl=async(e,t)=>{const r=p.toFiniteNumber(e.getContentLength());return r??Sl(t)},Cl=tr&&(async e=>{let{url:t,method:r,data:n,signal:o,cancelToken:s,timeout:i,onDownloadProgress:a,onUploadProgress:l,responseType:u,headers:c,withCredentials:f="same-origin",fetchOptions:m}=Ts(e);u=u?(u+"").toLowerCase():"text";let[g,h]=o||s||i?yl([o,s],i):[],y,v;const k=()=>{!y&&setTimeout(()=>{g&&g.unsubscribe()}),y=!0};let R;try{if(l&&wl&&r!=="get"&&r!=="head"&&(R=await vl(c,n))!==0){let w=new Request(t,{method:"POST",body:n,duplex:"half"}),S;p.isFormData(n)&&(S=w.headers.get("content-type"))&&c.setContentType(S),w.body&&(n=Xn(w.body,eo,Qn(R,Nt(l)),null,Br))}p.isString(f)||(f=f?"cors":"omit"),v=new Request(t,{...m,signal:g,method:r.toUpperCase(),headers:c.normalize().toJSON(),body:n,duplex:"half",withCredentials:f});let x=await fetch(v);const E=Fr&&(u==="stream"||u==="response");if(Fr&&(a||E)){const w={};["status","statusText","headers"].forEach(j=>{w[j]=x[j]});const S=p.toFiniteNumber(x.headers.get("content-length"));x=new Response(Xn(x.body,eo,a&&Qn(S,Nt(a,!0)),E&&k,Br),w)}u=u||"text";let b=await It[p.findKey(It,u)||"text"](x,e);return!E&&k(),h&&h(),await new Promise((w,S)=>{js(w,S,{data:b,headers:V.from(x.headers),status:x.status,statusText:x.statusText,config:e,request:v})})}catch(x){throw k(),x&&x.name==="TypeError"&&/fetch/i.test(x.message)?Object.assign(new _("Network Error",_.ERR_NETWORK,e,v),{cause:x.cause||x}):_.from(x,x&&x.code,e,v)}}),Mr={http:Mc,xhr:gl,fetch:Cl};p.forEach(Mr,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const to=e=>`- ${e}`,El=e=>p.isFunction(e)||e===null||e===!1,As={getAdapter:e=>{e=p.isArray(e)?e:[e];const{length:t}=e;let r,n;const o={};for(let s=0;s<t;s++){r=e[s];let i;if(n=r,!El(r)&&(n=Mr[(i=String(r)).toLowerCase()],n===void 0))throw new _(`Unknown adapter '${i}'`);if(n)break;o[i||"#"+s]=n}if(!n){const s=Object.entries(o).map(([a,l])=>`adapter ${a} `+(l===!1?"is not supported by the environment":"is not available in the build"));let i=t?s.length>1?`since :
`+s.map(to).join(`
`):" "+to(s[0]):"as no adapter specified";throw new _("There is no suitable adapter to dispatch the request "+i,"ERR_NOT_SUPPORT")}return n},adapters:Mr};function wr(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new ze(null,e)}function ro(e){return wr(e),e.headers=V.from(e.headers),e.data=br.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),As.getAdapter(e.adapter||it.adapter)(e).then(function(n){return wr(e),n.data=br.call(e,e.transformResponse,n),n.headers=V.from(n.headers),n},function(n){return ks(n)||(wr(e),n&&n.response&&(n.response.data=br.call(e,e.transformResponse,n.response),n.response.headers=V.from(n.response.headers))),Promise.reject(n)})}const $s="1.7.2",dn={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{dn[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}});const no={};dn.transitional=function(t,r,n){function o(s,i){return"[Axios v"+$s+"] Transitional option '"+s+"'"+i+(n?". "+n:"")}return(s,i,a)=>{if(t===!1)throw new _(o(i," has been removed"+(r?" in "+r:"")),_.ERR_DEPRECATED);return r&&!no[i]&&(no[i]=!0,console.warn(o(i," has been deprecated since v"+r+" and will be removed in the near future"))),t?t(s,i,a):!0}};function Rl(e,t,r){if(typeof e!="object")throw new _("options must be an object",_.ERR_BAD_OPTION_VALUE);const n=Object.keys(e);let o=n.length;for(;o-- >0;){const s=n[o],i=t[s];if(i){const a=e[s],l=a===void 0||i(a,s,e);if(l!==!0)throw new _("option "+s+" must be "+l,_.ERR_BAD_OPTION_VALUE);continue}if(r!==!0)throw new _("Unknown option "+s,_.ERR_BAD_OPTION)}}const zr={assertOptions:Rl,validators:dn},pe=zr.validators;class Ce{constructor(t){this.defaults=t,this.interceptors={request:new Jn,response:new Jn}}async request(t,r){try{return await this._request(t,r)}catch(n){if(n instanceof Error){let o;Error.captureStackTrace?Error.captureStackTrace(o={}):o=new Error;const s=o.stack?o.stack.replace(/^.+\n/,""):"";try{n.stack?s&&!String(n.stack).endsWith(s.replace(/^.+\n.+\n/,""))&&(n.stack+=`
`+s):n.stack=s}catch{}}throw n}}_request(t,r){typeof t=="string"?(r=r||{},r.url=t):r=t||{},r=ke(this.defaults,r);const{transitional:n,paramsSerializer:o,headers:s}=r;n!==void 0&&zr.assertOptions(n,{silentJSONParsing:pe.transitional(pe.boolean),forcedJSONParsing:pe.transitional(pe.boolean),clarifyTimeoutError:pe.transitional(pe.boolean)},!1),o!=null&&(p.isFunction(o)?r.paramsSerializer={serialize:o}:zr.assertOptions(o,{encode:pe.function,serialize:pe.function},!0)),r.method=(r.method||this.defaults.method||"get").toLowerCase();let i=s&&p.merge(s.common,s[r.method]);s&&p.forEach(["delete","get","head","post","put","patch","common"],h=>{delete s[h]}),r.headers=V.concat(i,s);const a=[];let l=!0;this.interceptors.request.forEach(function(y){typeof y.runWhen=="function"&&y.runWhen(r)===!1||(l=l&&y.synchronous,a.unshift(y.fulfilled,y.rejected))});const u=[];this.interceptors.response.forEach(function(y){u.push(y.fulfilled,y.rejected)});let c,f=0,m;if(!l){const h=[ro.bind(this),void 0];for(h.unshift.apply(h,a),h.push.apply(h,u),m=h.length,c=Promise.resolve(r);f<m;)c=c.then(h[f++],h[f++]);return c}m=a.length;let g=r;for(f=0;f<m;){const h=a[f++],y=a[f++];try{g=h(g)}catch(v){y.call(this,v);break}}try{c=ro.call(this,g)}catch(h){return Promise.reject(h)}for(f=0,m=u.length;f<m;)c=c.then(u[f++],u[f++]);return c}getUri(t){t=ke(this.defaults,t);const r=Os(t.baseURL,t.url);return Cs(r,t.params,t.paramsSerializer)}}p.forEach(["delete","get","head","options"],function(t){Ce.prototype[t]=function(r,n){return this.request(ke(n||{},{method:t,url:r,data:(n||{}).data}))}});p.forEach(["post","put","patch"],function(t){function r(n){return function(s,i,a){return this.request(ke(a||{},{method:t,headers:n?{"Content-Type":"multipart/form-data"}:{},url:s,data:i}))}}Ce.prototype[t]=r(),Ce.prototype[t+"Form"]=r(!0)});class fn{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let r;this.promise=new Promise(function(s){r=s});const n=this;this.promise.then(o=>{if(!n._listeners)return;let s=n._listeners.length;for(;s-- >0;)n._listeners[s](o);n._listeners=null}),this.promise.then=o=>{let s;const i=new Promise(a=>{n.subscribe(a),s=a}).then(o);return i.cancel=function(){n.unsubscribe(s)},i},t(function(s,i,a){n.reason||(n.reason=new ze(s,i,a),r(n.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const r=this._listeners.indexOf(t);r!==-1&&this._listeners.splice(r,1)}static source(){let t;return{token:new fn(function(o){t=o}),cancel:t}}}function kl(e){return function(r){return e.apply(null,r)}}function jl(e){return p.isObject(e)&&e.isAxiosError===!0}const Ur={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Ur).forEach(([e,t])=>{Ur[t]=e});function Ps(e){const t=new Ce(e),r=ds(Ce.prototype.request,t);return p.extend(r,Ce.prototype,t,{allOwnKeys:!0}),p.extend(r,t,null,{allOwnKeys:!0}),r.create=function(o){return Ps(ke(e,o))},r}const N=Ps(it);N.Axios=Ce;N.CanceledError=ze;N.CancelToken=fn;N.isCancel=ks;N.VERSION=$s;N.toFormData=er;N.AxiosError=_;N.Cancel=N.CanceledError;N.all=function(t){return Promise.all(t)};N.spread=kl;N.isAxiosError=jl;N.mergeConfig=ke;N.AxiosHeaders=V;N.formToJSON=e=>Rs(p.isHTMLForm(e)?new FormData(e):e);N.getAdapter=As.getAdapter;N.HttpStatusCode=Ur;N.default=N;const Ol=async({fromCurrency:e,toCurrency:t,timeRange:r})=>{try{const{data:n}=await N({method:"get",url:`${Si}/${e}/ohlc`,params:{vs_currency:t,days:r,x_cg_demo_api_key:$o}});return Za(n)}catch{throw new Error("API Server error")}},Tl=async({fromCurrency:e,toCurrency:t,timeRange:r})=>{try{const{data:{Data:{Data:n}}}=await N({method:"get",url:Ci,params:{api_key:Zr,fsym:e,tsym:t,aggregate:1,limit:r}});return{[e]:ls(n)}}catch{throw new Error("API Server error")}},_l=async({fromCurrency:e,toCurrency:t})=>{try{const{data:{Data:{Data:r}}}=await N({method:"get",url:Ei,params:{api_key:Zr,fsym:e,tsym:t,aggregate:1,limit:12}});return ls(r)}catch{throw new Error("API Server error")}},Al=async({toCurrency:e,fromCurrencies:t})=>{try{const{data:r}=await N({method:"get",url:wi,params:{vs_currency:e,ids:t,x_cg_demo_api_key:$o}});return r}catch{throw new Error("API Server error")}},$l=async()=>{try{const{data:{Data:e}}=await N({method:"get",url:vi,params:{api_key:Zr}});return e}catch{throw new Error("API Server error")}};L("2024-07-11T00:00:00.000Z"),L("2024-07-12T00:00:00.000Z"),L("2024-07-13T00:00:00.000Z"),L("2024-07-14T00:00:00.000Z"),L("2024-07-15T00:00:00.000Z"),L("2024-07-16T00:00:00.000Z"),L("2024-07-17T00:00:00.000Z"),L("2024-07-18T00:00:00.000Z"),L("2024-07-11T00:00:00.000Z"),L("2024-07-12T00:00:00.000Z"),L("2024-07-13T00:00:00.000Z"),L("2024-07-14T00:00:00.000Z"),L("2024-07-15T00:00:00.000Z"),L("2024-07-16T00:00:00.000Z"),L("2024-07-17T00:00:00.000Z"),L("2024-07-18T00:00:00.000Z");const oo=[{value:"1",label:"1D"},{value:"7",label:"1W"},{value:"30",label:"1M"}],so=[{value:"7",label:"Weekly"},{value:"30",label:"Monthly"},{value:"90",label:"Quarterly"}],io=["#7517F8","#E323FF","#4DFFDF","#4DA1FF","#F5AC6E","#60B7FF","#007AFF","#e9d4ff","#d2e031","#68822a","#f9d637","#48174d"],at=18e5,ct=C.button.attrs(e=>({$width:e.$width==="full"?"100%":"120px"}))`
  width: ${e=>e.$width};
  height: 40px;
  font-family: ${({theme:e})=>e.fonts.interSemiBold};
  text-align: center;
  color: inherit;
  text-shadow: 1px 1px black;
  border-radius: ${({theme:e})=>e.borderRadius.extraSmall};
  border: none;
  padding: 0 20px;
  background-color: #ac6aec;
  transition: background-color 0.5s ease-in;

  &:hover {
    background-color: #7517f8;
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
`,rr=H`
  display: flex;
  flex-direction: column;
`,lt=H`
  ${rr};
  align-items: center;
`,tt=H`
  ${lt};
  justify-content: center;
`,pn=H`
  display: flex;
  align-items: center;
`,ye=H`
  ${pn};
  justify-content: space-between;
`,Pl=H`
  display: flex;
  justify-content: flex-end;
`,hn=H`
  ${lt};
  position: relative;
  width: 100%;
`,Ds=H`
  ${tt};
  background-color: transparent;
  width: 100%;
`,ao=C.input`
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
`,Ns=H`
  width: 21px;
  height: 23px;
  fill: ${({theme:e})=>e.color.navBarSvg};

  &:hover {
    fill: ${({theme:e})=>e.color.navBarSvgActive};
  }
`,Is=C(ct)`
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
`,mn=H`
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
`,gn=H`
  background-color: #484545;

  &:not(:checked) {
    font-family: ${({theme:e})=>e.fonts.interBold}, sans-serif;
    color: ${({theme:e})=>e.sharedColors.textSecondary};
    font-weight: 700;
  }
`,Ls=H`
  height: 100%;
  padding-left: 10px;
`,yn=H`
  align-items: flex-start;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 0 15px 0 21px;
  z-index: 100;
`,Bs=C.div.attrs(e=>({$border:e.$border==="true"?"1px solid rgba(255, 255, 255, 0.5)":"none"}))`
  background: ${({theme:e})=>e.color.boxBackground};
  border-radius: ${({theme:e})=>e.borderRadius.large};
  width: ${e=>e.$width};
  border: ${e=>e.$border};
  padding: ${e=>e.$padding};
`,Dl=Ga`
  0% {
    transform: rotateY(0deg);
  }

  50% {
    transform: rotateY(180deg);
  }

  100% {
    transform: rotateY(360deg);
  }
`,Nl=C.div`
  ${Ds};
  perspective: 1000px;
  height: ${({height:e})=>e||"100vh"};
`,Il=C.svg`
  animation: ${Dl} 1.5s linear infinite;
  background: transparent;
  width: 40px;
  height: 40px;
`;function Oe({height:e}){return d.jsx(Nl,{height:e,children:d.jsx(Il,{children:d.jsx("use",{xlinkHref:"svg/sprite.svg#loader"})})})}const Ll=C.div`
  ${Ds};
  color: ${({theme:e})=>e.color.textMain};
  height: 100%;
`;function Ue(){return d.jsx(Ll,{children:"Data is currently unavailable!"})}const Bl=C(Bs)`
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
`,Fl=C.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50px;
  height: 50px;
`,Ml=C.div`
  ${yn}
  ${ye}
  top: 30px;
  color: ${({theme:e})=>e.sharedColors.btnIcon};
  text-transform: uppercase;
`,zl=C.svg`
  width: 13px;
  height: 17px;
  fill: ${({theme:e})=>e.sharedColors.btnIcon};
  vertical-align: top;
  margin: 0 3px;
`,Ul=C.span`
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
`,Hl=C.svg`
  width: 16px;
  height: 17px;

  &.positive {
    --fill-color: #e72d04;
  }

  &.negative {
    --fill-color: #00c287;
    transform: rotate(180deg);
  }
`;function ql({image:e,symbol:t,current_price:r,position:n}){const{ref:o,width:s=1}=qt(),{id:i}=G(E=>E.config.exchangeCurrency),a=tc(r),[l,u]=O.useState([]),[c,f]=O.useState(!0),[m,g]=O.useState(!1),v=n==="even"?"#4DFFDF":"#E323FF",k=!m&&!c,R=O.useMemo(()=>Qr({positive:r<Number(a),negative:r>Number(a)}),[r,a]),x=async()=>{g(!1),f(!0);try{const E=await _l({fromCurrency:t,toCurrency:i});u(E),f(!1)}catch(E){console.error(E),f(!1),g(!0)}};return O.useEffect(()=>{x();const E=setInterval(()=>{x()},at);return()=>{clearInterval(E)}},[t]),d.jsxs(Bl,{ref:o,children:[d.jsx(Fl,{children:d.jsx("img",{src:e,alt:t,width:"50",height:"50"})}),d.jsxs(Ml,{children:[d.jsxs("span",{children:[t,d.jsx(zl,{children:d.jsx("use",{xlinkHref:"svg/sprite.svg#arrow-right"})}),i]}),a&&d.jsx(d.Fragment,{children:d.jsx(Hl,{className:R,children:d.jsx("use",{xlinkHref:"svg/sprite.svg#circled-arrow"})})})]}),d.jsx(Ul,{className:R,children:Qa(t,r)}),d.jsxs("div",{children:[k&&d.jsx(Ni,{width:s,height:200,domainPadding:{y:[50,0]},color:v,children:d.jsx(No,{data:l})}),c&&d.jsx(Oe,{height:"150px"}),m&&d.jsx(Ue,{})]})]})}const Gl=C.div`
  ${pn};
  height: calc(100% - 1px);
  overflow-y: hidden;
  overflow-x: auto;
`;function Wl(){const{currenciesList:e,exchangeCurrency:t}=G(f=>f.config),{data:r,isLoading:n,error:o}=G(f=>f.cryptoData),[s,i]=O.useState({}),a=O.useCallback(f=>f%2===0?"even":"odd",[]),l=!n&&!o&&r.length,u=n&&!r.length,c=!n&&!r.length&&o;return O.useEffect(()=>{const f=new WebSocket(Ri);return f.onopen=function(){const g={action:"SubAdd",subs:e.map(({symbol:h})=>`5~CCCAGG~${h==null?void 0:h.toUpperCase()}~${t.id}`)};f.send(JSON.stringify(g))},f.onmessage=function(g){const{FROMSYMBOL:h,PRICE:y}=JSON.parse(g.data);h&&y&&i(v=>{const k=h.toLowerCase(),R=v[k];return{...v,...R&&{[k]:{...R,current_price:y}}}})},()=>{f.close()}},[]),O.useEffect(()=>{i(Xa(r))},[r]),d.jsxs(Gl,{children:[l&&Object.entries(s).map(([f,m],g)=>d.jsx(ql,{position:a(g),...m},f)),u&&d.jsx(Oe,{}),c&&d.jsx(Ue,{})]})}const Fs=()=>{const e="#868B93",t="#372C44",r="#261E35",n="rgba(0, 0, 0, 0.8)",o={axis:{stroke:e,strokeWidth:1},ticks:{stroke:e,size:4},tickLabels:{fill:e,fontSize:10}};return{chartMT:{marginTop:"15px"},axisMain:{...o,grid:{stroke:0}},axisDependent:{...o,grid:{stroke:t}},flyoutTooltipStyle:{fill:n},candleStick:{data:{fillOpacity:.7,stroke:r,strokeWidth:1}}}},Vl=C.div`
  ${Ls};
`,Kl=C.div`
  ${Pl};
  ${yn};
  padding-bottom: 18px;
`,Jl=C.select`
  ${mn};
`,Yl=C.option`
  ${gn};
`,Zl=Ii("voronoi","cursor");function Xl(){const e=Fs(),{ref:t,width:r=1,height:n=1}=qt(),{currenciesList:o,exchangeCurrency:s}=G(b=>b.config),[i,a]=O.useState({}),[l,u]=O.useState(!0),[c,f]=O.useState(!1),[m,g]=O.useState(so[0].value),h=O.useMemo(()=>Object.getOwnPropertyNames(i).length,[i]),y="#c43a31",v=!c&&!l&&!!h,k=!l&&c,R=async b=>{f(!1),u(!0);try{const w=await Tl({fromCurrency:b,toCurrency:s.id,timeRange:m});a(S=>({...S,...w}))}catch(w){console.error(w),u(!1),f(!0)}},x=async()=>{u(!0);for await(const b of o.map(({symbol:w})=>Ya(500).then(()=>{R(w)})));u(!1)},E=({target:{value:b}})=>{g(b)};return O.useEffect(()=>{x();const b=setInterval(()=>{x()},at);return()=>{clearInterval(b)}},[m]),d.jsxs(Vl,{ref:t,children:[d.jsx(Kl,{children:d.jsx(Jl,{value:m,onChange:E,"aria-label":"Market period overview",children:so.map(({value:b,label:w})=>d.jsx(Yl,{value:b,children:w},b))})}),v&&d.jsxs(Io,{theme:Lo.material,domainPadding:{x:50,y:10},scale:{x:"time"},width:r,height:n,containerComponent:d.jsx(Zl,{style:e.chartMT,cursorDimension:"x",voronoiDimension:"x",labelComponent:d.jsx(Li,{centerOffset:{x:80,y:10},constrainToVisibleArea:!0,dy:-50,flyoutStyle:e.flyoutTooltipStyle}),labels:({datum:b})=>{const w=Object.entries(i).find(([S,j])=>j.find(({y:T})=>T===b.y));return`${w==null?void 0:w[0].toLocaleUpperCase()}: ${s.symbol}${b.y} (${ec(b.x)})`}}),children:[d.jsx(Tt,{style:e.axisMain}),d.jsx(Tt,{dependentAxis:!0,style:e.axisDependent,tickFormat:us}),Object.entries(i).map(([b,w],S)=>d.jsx(No,{interpolation:"basis",style:{data:{stroke:io[S]||y},labels:{fill:io[S]||y}},data:w},b))]},m),l&&d.jsx(Oe,{height:`${n}px`}),k&&d.jsx(Ue,{})]})}const _e={xs:"375px",sm:"600px",md:"900px",lg:"1200px",xl:"1440px",xxl:"1920px"},W={xs:`(max-width: ${_e.xs})`,sm:`(max-width: ${_e.sm})`,md:`(max-width: ${_e.md})`,lg:`(max-width: ${_e.lg})`,xl:`(max-width: ${_e.xl})`,xxl:`(max-width: ${_e.xxl})`},Ql=C.div`
  ${rr}
  height: 100%;
  padding: 10px;
  overflow: auto;
`,eu=C.article`
  display: flex;
  gap: 20px;
  min-width: 500px;
  max-width: 900px;
  width: 100%;
  background: ${({theme:e})=>e.color.boxInnerBackground};
  border-radius: ${({theme:e})=>e.borderRadius.small};
  box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
    rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
    rgba(0, 0, 0, 0.09) 0px 32px 16px;
  padding: 20px;
  margin: 0 auto 30px;

  &:last-child {
    margin-bottom: 0;
  }
`,tu=C.div`
  border-radius: ${({theme:e})=>e.borderRadius.extraSmall};
  min-width: 180px;
  max-width: 210px;
  flex-basis: 30%;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;

  @media ${W.sm} {
    min-width: 140px;
  }

  img {
    border-radius: ${({theme:e})=>e.borderRadius.extraSmall};
    aspect-ratio: 10 / 9;
    transition: transform 0.3s linear;
  }
`,ru=C.div`
  ${rr};
  flex-grow: 1;
`,nu=C.h3`
  font-size: clamp(14px, 2vw, 16px);
  line-height: 1.1;
  color: ${({theme:e})=>e.sharedColors.searchText};
  text-shadow: 1px 1px black;
  margin-bottom: 20px;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: ${({theme:e})=>e.sharedColors.accentLight};
  }
`,ou=C.p`
  font-family: ${({theme:e})=>e.fonts.interRegular};
  font-size: 12px;
  color: ${({theme:e})=>e.sharedColors.btnIcon};
  margin-bottom: 10px;
`,su=C.div`
  ${ye};
  flex-wrap: wrap;
  font-size: 0.6875rem;
`,iu=C.p`
  ${ye};
  color: ${({theme:e})=>e.color.articleTime};
  margin-right: 15px;
  margin-top: 5px;
`,au=C.div`
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
`,cu=C.span`
  display: inline-block;
  color: ${({theme:e})=>e.sharedColors.btnIcon};
  border-radius: ${({theme:e})=>e.borderRadius.medium};
  background: ${({theme:e})=>e.sharedColors.accentColor};
  padding: 5px 7px;
  margin: 2px;
`;function lu(){const[e,t]=O.useState([]),[r,n]=O.useState(!0),[o,s]=O.useState(!1),i=async()=>{s(!1),n(!0);try{const l=await $l();t(l),n(!1)}catch(l){console.error(l),n(!1),s(!0)}},a=l=>L.unix(l).format("MMMM Do YYYY, h:mm a");return O.useEffect(()=>{i();const l=setInterval(()=>{i()},at);return()=>{clearInterval(l)}},[]),d.jsxs(Ql,{children:[e==null?void 0:e.map(({id:l,imageurl:u,title:c,url:f,categories:m,published_on:g,body:h})=>d.jsxs(eu,{children:[d.jsx(tu,{children:d.jsx("img",{src:u,width:"180",height:"100",alt:c})}),d.jsxs(ru,{children:[d.jsx(nu,{children:d.jsx("a",{href:f,target:"_blank",children:c})}),d.jsx(ou,{children:h}),d.jsxs(su,{children:[d.jsx(iu,{children:a(g)}),d.jsx(au,{children:m.split("|").map(y=>d.jsx(cu,{children:y},y))})]})]})]},l)),r&&d.jsx(Oe,{}),o&&d.jsx(Ue,{})]})}function xn(){return Mi()<=1200}const uu=C.div`
  ${Ls};
`,du=C.div`
  ${ye};
  ${yn};
`,fu=C.div`
  display: flex;
  gap: 5px;
  margin-left: 5px;
`,pu=C(ct)`
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
`,hu=C.select`
  ${mn};
`,mu=C.option`
  ${gn};
`;function gu(){const e=Fs(),t=xn(),{ref:r,width:n=1,height:o=1}=qt(),{currenciesList:s,exchangeCurrency:i}=G(b=>b.config),[a,l]=O.useState([]),[u,c]=O.useState(!0),[f,m]=O.useState(!1),[g,h]=O.useState(s[0].id),[y,v]=O.useState(oo[0].value),k=!f&&!u&&!!a.length,R=async()=>{m(!1),c(!0);try{const b=await Ol({fromCurrency:g,toCurrency:i.id,timeRange:y});l(b),c(!1)}catch(b){console.error(b),c(!1),m(!0)}},x=({target:{value:b}})=>{h(b)},E=b=>{const{value:w}=b.target;v(w)};return O.useEffect(()=>{R();const b=setInterval(()=>{R()},at);return()=>{clearInterval(b)}},[g,y]),d.jsxs(uu,{ref:r,children:[d.jsxs(du,{children:[d.jsx(hu,{value:g,onChange:x,"aria-label":"Coin to currency",children:s.map(({id:b,symbol:w})=>d.jsxs(mu,{value:b,children:[w,"/",i.id]},b))}),d.jsx(fu,{children:oo.map(({value:b,label:w})=>d.jsx(pu,{value:b,className:Qr({active:y===b}),onClick:E,children:w},b))})]}),d.jsx("svg",{style:{position:"absolute"},children:d.jsxs("defs",{children:[d.jsxs("linearGradient",{id:"positiveGradient",x1:"0%",y1:"0%",x2:"0%",y2:"100%",children:[d.jsx("stop",{offset:"0%",stopColor:"#4DFFDF"}),d.jsx("stop",{offset:"100%",stopColor:"#4DA1FF"})]}),d.jsxs("linearGradient",{id:"negativeGradient",x1:"0%",y1:"0%",x2:"0%",y2:"100%",children:[d.jsx("stop",{offset:"0%",stopColor:"#E323FF"}),d.jsx("stop",{offset:"100%",stopColor:"#7517F8"})]})]})}),k&&d.jsxs(Io,{theme:Lo.material,domainPadding:{x:t?40:110},scale:{x:"time"},width:n,height:o,containerComponent:d.jsx(Bi,{style:e.chartMT}),children:[d.jsx(Tt,{style:e.axisMain}),d.jsx(Tt,{dependentAxis:!0,style:e.axisDependent,tickFormat:us}),d.jsx(Fi,{style:e.candleStick,candleColors:{positive:"url(#positiveGradient)",negative:"url(#negativeGradient)"},data:a})]},`${g}-${y}`),u&&d.jsx(Oe,{height:`${o}px`}),f&&d.jsx(Ue,{})]})}function F(e){return`Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}var yu=typeof Symbol=="function"&&Symbol.observable||"@@observable",co=yu,Sr=()=>Math.random().toString(36).substring(7).split("").join("."),xu={INIT:`@@redux/INIT${Sr()}`,REPLACE:`@@redux/REPLACE${Sr()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${Sr()}`},Lt=xu;function bn(e){if(typeof e!="object"||e===null)return!1;let t=e;for(;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t||Object.getPrototypeOf(e)===null}function Ms(e,t,r){if(typeof e!="function")throw new Error(F(2));if(typeof t=="function"&&typeof r=="function"||typeof r=="function"&&typeof arguments[3]=="function")throw new Error(F(0));if(typeof t=="function"&&typeof r>"u"&&(r=t,t=void 0),typeof r<"u"){if(typeof r!="function")throw new Error(F(1));return r(Ms)(e,t)}let n=e,o=t,s=new Map,i=s,a=0,l=!1;function u(){i===s&&(i=new Map,s.forEach((v,k)=>{i.set(k,v)}))}function c(){if(l)throw new Error(F(3));return o}function f(v){if(typeof v!="function")throw new Error(F(4));if(l)throw new Error(F(5));let k=!0;u();const R=a++;return i.set(R,v),function(){if(k){if(l)throw new Error(F(6));k=!1,u(),i.delete(R),s=null}}}function m(v){if(!bn(v))throw new Error(F(7));if(typeof v.type>"u")throw new Error(F(8));if(typeof v.type!="string")throw new Error(F(17));if(l)throw new Error(F(9));try{l=!0,o=n(o,v)}finally{l=!1}return(s=i).forEach(R=>{R()}),v}function g(v){if(typeof v!="function")throw new Error(F(10));n=v,m({type:Lt.REPLACE})}function h(){const v=f;return{subscribe(k){if(typeof k!="object"||k===null)throw new Error(F(11));function R(){const E=k;E.next&&E.next(c())}return R(),{unsubscribe:v(R)}},[co](){return this}}}return m({type:Lt.INIT}),{dispatch:m,subscribe:f,getState:c,replaceReducer:g,[co]:h}}function bu(e){Object.keys(e).forEach(t=>{const r=e[t];if(typeof r(void 0,{type:Lt.INIT})>"u")throw new Error(F(12));if(typeof r(void 0,{type:Lt.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(F(13))})}function zs(e){const t=Object.keys(e),r={};for(let s=0;s<t.length;s++){const i=t[s];typeof e[i]=="function"&&(r[i]=e[i])}const n=Object.keys(r);let o;try{bu(r)}catch(s){o=s}return function(i={},a){if(o)throw o;let l=!1;const u={};for(let c=0;c<n.length;c++){const f=n[c],m=r[f],g=i[f],h=m(g,a);if(typeof h>"u")throw a&&a.type,new Error(F(14));u[f]=h,l=l||h!==g}return l=l||n.length!==Object.keys(i).length,l?u:i}}function Bt(...e){return e.length===0?t=>t:e.length===1?e[0]:e.reduce((t,r)=>(...n)=>t(r(...n)))}function wu(...e){return t=>(r,n)=>{const o=t(r,n);let s=()=>{throw new Error(F(15))};const i={getState:o.getState,dispatch:(l,...u)=>s(l,...u)},a=e.map(l=>l(i));return s=Bt(...a)(o.dispatch),{...o,dispatch:s}}}function Su(e){return bn(e)&&"type"in e&&typeof e.type=="string"}var Us=Symbol.for("immer-nothing"),lo=Symbol.for("immer-draftable"),J=Symbol.for("immer-state");function Q(e,...t){throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var Le=Object.getPrototypeOf;function ge(e){return!!e&&!!e[J]}function le(e){var t;return e?Hs(e)||Array.isArray(e)||!!e[lo]||!!((t=e.constructor)!=null&&t[lo])||or(e)||sr(e):!1}var vu=Object.prototype.constructor.toString();function Hs(e){if(!e||typeof e!="object")return!1;const t=Le(e);if(t===null)return!0;const r=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return r===Object?!0:typeof r=="function"&&Function.toString.call(r)===vu}function Ft(e,t){nr(e)===0?Reflect.ownKeys(e).forEach(r=>{t(r,e[r],e)}):e.forEach((r,n)=>t(n,r,e))}function nr(e){const t=e[J];return t?t.type_:Array.isArray(e)?1:or(e)?2:sr(e)?3:0}function Hr(e,t){return nr(e)===2?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function qs(e,t,r){const n=nr(e);n===2?e.set(t,r):n===3?e.add(r):e[t]=r}function Cu(e,t){return e===t?e!==0||1/e===1/t:e!==e&&t!==t}function or(e){return e instanceof Map}function sr(e){return e instanceof Set}function we(e){return e.copy_||e.base_}function qr(e,t){if(or(e))return new Map(e);if(sr(e))return new Set(e);if(Array.isArray(e))return Array.prototype.slice.call(e);const r=Hs(e);if(t===!0||t==="class_only"&&!r){const n=Object.getOwnPropertyDescriptors(e);delete n[J];let o=Reflect.ownKeys(n);for(let s=0;s<o.length;s++){const i=o[s],a=n[i];a.writable===!1&&(a.writable=!0,a.configurable=!0),(a.get||a.set)&&(n[i]={configurable:!0,writable:!0,enumerable:a.enumerable,value:e[i]})}return Object.create(Le(e),n)}else{const n=Le(e);if(n!==null&&r)return{...e};const o=Object.create(n);return Object.assign(o,e)}}function wn(e,t=!1){return ir(e)||ge(e)||!le(e)||(nr(e)>1&&(e.set=e.add=e.clear=e.delete=Eu),Object.freeze(e),t&&Object.entries(e).forEach(([r,n])=>wn(n,!0))),e}function Eu(){Q(2)}function ir(e){return Object.isFrozen(e)}var Ru={};function je(e){const t=Ru[e];return t||Q(0,e),t}var rt;function Gs(){return rt}function ku(e,t){return{drafts_:[],parent_:e,immer_:t,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function uo(e,t){t&&(je("Patches"),e.patches_=[],e.inversePatches_=[],e.patchListener_=t)}function Gr(e){Wr(e),e.drafts_.forEach(ju),e.drafts_=null}function Wr(e){e===rt&&(rt=e.parent_)}function fo(e){return rt=ku(rt,e)}function ju(e){const t=e[J];t.type_===0||t.type_===1?t.revoke_():t.revoked_=!0}function po(e,t){t.unfinalizedDrafts_=t.drafts_.length;const r=t.drafts_[0];return e!==void 0&&e!==r?(r[J].modified_&&(Gr(t),Q(4)),le(e)&&(e=Mt(t,e),t.parent_||zt(t,e)),t.patches_&&je("Patches").generateReplacementPatches_(r[J].base_,e,t.patches_,t.inversePatches_)):e=Mt(t,r,[]),Gr(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),e!==Us?e:void 0}function Mt(e,t,r){if(ir(t))return t;const n=t[J];if(!n)return Ft(t,(o,s)=>ho(e,n,t,o,s,r)),t;if(n.scope_!==e)return t;if(!n.modified_)return zt(e,n.base_,!0),n.base_;if(!n.finalized_){n.finalized_=!0,n.scope_.unfinalizedDrafts_--;const o=n.copy_;let s=o,i=!1;n.type_===3&&(s=new Set(o),o.clear(),i=!0),Ft(s,(a,l)=>ho(e,n,o,a,l,r,i)),zt(e,o,!1),r&&e.patches_&&je("Patches").generatePatches_(n,r,e.patches_,e.inversePatches_)}return n.copy_}function ho(e,t,r,n,o,s,i){if(ge(o)){const a=s&&t&&t.type_!==3&&!Hr(t.assigned_,n)?s.concat(n):void 0,l=Mt(e,o,a);if(qs(r,n,l),ge(l))e.canAutoFreeze_=!1;else return}else i&&r.add(o);if(le(o)&&!ir(o)){if(!e.immer_.autoFreeze_&&e.unfinalizedDrafts_<1)return;Mt(e,o),(!t||!t.scope_.parent_)&&typeof n!="symbol"&&Object.prototype.propertyIsEnumerable.call(r,n)&&zt(e,o)}}function zt(e,t,r=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&wn(t,r)}function Ou(e,t){const r=Array.isArray(e),n={type_:r?1:0,scope_:t?t.scope_:Gs(),modified_:!1,finalized_:!1,assigned_:{},parent_:t,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1};let o=n,s=Sn;r&&(o=[n],s=nt);const{revoke:i,proxy:a}=Proxy.revocable(o,s);return n.draft_=a,n.revoke_=i,a}var Sn={get(e,t){if(t===J)return e;const r=we(e);if(!Hr(r,t))return Tu(e,r,t);const n=r[t];return e.finalized_||!le(n)?n:n===vr(e.base_,t)?(Cr(e),e.copy_[t]=Kr(n,e)):n},has(e,t){return t in we(e)},ownKeys(e){return Reflect.ownKeys(we(e))},set(e,t,r){const n=Ws(we(e),t);if(n!=null&&n.set)return n.set.call(e.draft_,r),!0;if(!e.modified_){const o=vr(we(e),t),s=o==null?void 0:o[J];if(s&&s.base_===r)return e.copy_[t]=r,e.assigned_[t]=!1,!0;if(Cu(r,o)&&(r!==void 0||Hr(e.base_,t)))return!0;Cr(e),Vr(e)}return e.copy_[t]===r&&(r!==void 0||t in e.copy_)||Number.isNaN(r)&&Number.isNaN(e.copy_[t])||(e.copy_[t]=r,e.assigned_[t]=!0),!0},deleteProperty(e,t){return vr(e.base_,t)!==void 0||t in e.base_?(e.assigned_[t]=!1,Cr(e),Vr(e)):delete e.assigned_[t],e.copy_&&delete e.copy_[t],!0},getOwnPropertyDescriptor(e,t){const r=we(e),n=Reflect.getOwnPropertyDescriptor(r,t);return n&&{writable:!0,configurable:e.type_!==1||t!=="length",enumerable:n.enumerable,value:r[t]}},defineProperty(){Q(11)},getPrototypeOf(e){return Le(e.base_)},setPrototypeOf(){Q(12)}},nt={};Ft(Sn,(e,t)=>{nt[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}});nt.deleteProperty=function(e,t){return nt.set.call(this,e,t,void 0)};nt.set=function(e,t,r){return Sn.set.call(this,e[0],t,r,e[0])};function vr(e,t){const r=e[J];return(r?we(r):e)[t]}function Tu(e,t,r){var o;const n=Ws(t,r);return n?"value"in n?n.value:(o=n.get)==null?void 0:o.call(e.draft_):void 0}function Ws(e,t){if(!(t in e))return;let r=Le(e);for(;r;){const n=Object.getOwnPropertyDescriptor(r,t);if(n)return n;r=Le(r)}}function Vr(e){e.modified_||(e.modified_=!0,e.parent_&&Vr(e.parent_))}function Cr(e){e.copy_||(e.copy_=qr(e.base_,e.scope_.immer_.useStrictShallowCopy_))}var _u=class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(t,r,n)=>{if(typeof t=="function"&&typeof r!="function"){const s=r;r=t;const i=this;return function(l=s,...u){return i.produce(l,c=>r.call(this,c,...u))}}typeof r!="function"&&Q(6),n!==void 0&&typeof n!="function"&&Q(7);let o;if(le(t)){const s=fo(this),i=Kr(t,void 0);let a=!0;try{o=r(i),a=!1}finally{a?Gr(s):Wr(s)}return uo(s,n),po(o,s)}else if(!t||typeof t!="object"){if(o=r(t),o===void 0&&(o=t),o===Us&&(o=void 0),this.autoFreeze_&&wn(o,!0),n){const s=[],i=[];je("Patches").generateReplacementPatches_(t,o,s,i),n(s,i)}return o}else Q(1,t)},this.produceWithPatches=(t,r)=>{if(typeof t=="function")return(i,...a)=>this.produceWithPatches(i,l=>t(l,...a));let n,o;return[this.produce(t,r,(i,a)=>{n=i,o=a}),n,o]},typeof(e==null?void 0:e.autoFreeze)=="boolean"&&this.setAutoFreeze(e.autoFreeze),typeof(e==null?void 0:e.useStrictShallowCopy)=="boolean"&&this.setUseStrictShallowCopy(e.useStrictShallowCopy)}createDraft(e){le(e)||Q(8),ge(e)&&(e=Vs(e));const t=fo(this),r=Kr(e,void 0);return r[J].isManual_=!0,Wr(t),r}finishDraft(e,t){const r=e&&e[J];(!r||!r.isManual_)&&Q(9);const{scope_:n}=r;return uo(n,t),po(void 0,n)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}applyPatches(e,t){let r;for(r=t.length-1;r>=0;r--){const o=t[r];if(o.path.length===0&&o.op==="replace"){e=o.value;break}}r>-1&&(t=t.slice(r+1));const n=je("Patches").applyPatches_;return ge(e)?n(e,t):this.produce(e,o=>n(o,t))}};function Kr(e,t){const r=or(e)?je("MapSet").proxyMap_(e,t):sr(e)?je("MapSet").proxySet_(e,t):Ou(e,t);return(t?t.scope_:Gs()).drafts_.push(r),r}function Vs(e){return ge(e)||Q(10,e),Ks(e)}function Ks(e){if(!le(e)||ir(e))return e;const t=e[J];let r;if(t){if(!t.modified_)return t.base_;t.finalized_=!0,r=qr(e,t.scope_.immer_.useStrictShallowCopy_)}else r=qr(e,!0);return Ft(r,(n,o)=>{qs(r,n,Ks(o))}),t&&(t.finalized_=!1),r}var Y=new _u,Js=Y.produce;Y.produceWithPatches.bind(Y);Y.setAutoFreeze.bind(Y);Y.setUseStrictShallowCopy.bind(Y);Y.applyPatches.bind(Y);Y.createDraft.bind(Y);Y.finishDraft.bind(Y);function Au(e,t=`expected a function, instead received ${typeof e}`){if(typeof e!="function")throw new TypeError(t)}function $u(e,t=`expected an object, instead received ${typeof e}`){if(typeof e!="object")throw new TypeError(t)}function Pu(e,t="expected all items to be functions, instead received the following types: "){if(!e.every(r=>typeof r=="function")){const r=e.map(n=>typeof n=="function"?`function ${n.name||"unnamed"}()`:typeof n).join(", ");throw new TypeError(`${t}[${r}]`)}}var mo=e=>Array.isArray(e)?e:[e];function Du(e){const t=Array.isArray(e[0])?e[0]:e;return Pu(t,"createSelector expects all input-selectors to be functions, but received the following types: "),t}function Nu(e,t){const r=[],{length:n}=e;for(let o=0;o<n;o++)r.push(e[o].apply(null,t));return r}var Iu=class{constructor(e){this.value=e}deref(){return this.value}},Lu=typeof WeakRef<"u"?WeakRef:Iu,Bu=0,go=1;function gt(){return{s:Bu,v:void 0,o:null,p:null}}function vn(e,t={}){let r=gt();const{resultEqualityCheck:n}=t;let o,s=0;function i(){var f;let a=r;const{length:l}=arguments;for(let m=0,g=l;m<g;m++){const h=arguments[m];if(typeof h=="function"||typeof h=="object"&&h!==null){let y=a.o;y===null&&(a.o=y=new WeakMap);const v=y.get(h);v===void 0?(a=gt(),y.set(h,a)):a=v}else{let y=a.p;y===null&&(a.p=y=new Map);const v=y.get(h);v===void 0?(a=gt(),y.set(h,a)):a=v}}const u=a;let c;if(a.s===go)c=a.v;else if(c=e.apply(null,arguments),s++,n){const m=((f=o==null?void 0:o.deref)==null?void 0:f.call(o))??o;m!=null&&n(m,c)&&(c=m,s!==0&&s--),o=typeof c=="object"&&c!==null||typeof c=="function"?new Lu(c):c}return u.s=go,u.v=c,c}return i.clearCache=()=>{r=gt(),i.resetResultsCount()},i.resultsCount=()=>s,i.resetResultsCount=()=>{s=0},i}function Ys(e,...t){const r=typeof e=="function"?{memoize:e,memoizeOptions:t}:e,n=(...o)=>{let s=0,i=0,a,l={},u=o.pop();typeof u=="object"&&(l=u,u=o.pop()),Au(u,`createSelector expects an output function after the inputs, but received: [${typeof u}]`);const c={...r,...l},{memoize:f,memoizeOptions:m=[],argsMemoize:g=vn,argsMemoizeOptions:h=[],devModeChecks:y={}}=c,v=mo(m),k=mo(h),R=Du(o),x=f(function(){return s++,u.apply(null,arguments)},...v),E=g(function(){i++;const w=Nu(R,arguments);return a=x.apply(null,w),a},...k);return Object.assign(E,{resultFunc:u,memoizedResultFunc:x,dependencies:R,dependencyRecomputations:()=>i,resetDependencyRecomputations:()=>{i=0},lastResult:()=>a,recomputations:()=>s,resetRecomputations:()=>{s=0},memoize:f,argsMemoize:g})};return Object.assign(n,{withTypes:()=>n}),n}var Fu=Ys(vn),Mu=Object.assign((e,t=Fu)=>{$u(e,`createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof e}`);const r=Object.keys(e),n=r.map(s=>e[s]);return t(n,(...s)=>s.reduce((i,a,l)=>(i[r[l]]=a,i),{}))},{withTypes:()=>Mu});function Zs(e){return({dispatch:r,getState:n})=>o=>s=>typeof s=="function"?s(r,n,e):o(s)}var zu=Zs(),Uu=Zs,Hu=(...e)=>{const t=Ys(...e),r=Object.assign((...n)=>{const o=t(...n),s=(i,...a)=>o(ge(i)?Vs(i):i,...a);return Object.assign(s,o),s},{withTypes:()=>r});return r};Hu(vn);var qu=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?Bt:Bt.apply(null,arguments)},Gu=e=>e&&typeof e.match=="function";function ce(e,t){function r(...n){if(t){let o=t(...n);if(!o)throw new Error(U(0));return{type:e,payload:o.payload,..."meta"in o&&{meta:o.meta},..."error"in o&&{error:o.error}}}return{type:e,payload:n[0]}}return r.toString=()=>`${e}`,r.type=e,r.match=n=>Su(n)&&n.type===e,r}var Xs=class Ye extends Array{constructor(...t){super(...t),Object.setPrototypeOf(this,Ye.prototype)}static get[Symbol.species](){return Ye}concat(...t){return super.concat.apply(this,t)}prepend(...t){return t.length===1&&Array.isArray(t[0])?new Ye(...t[0].concat(this)):new Ye(...t.concat(this))}};function yo(e){return le(e)?Js(e,()=>{}):e}function Jr(e,t,r){if(e.has(t)){let o=e.get(t);return r.update&&(o=r.update(o,t,e),e.set(t,o)),o}if(!r.insert)throw new Error(U(10));const n=r.insert(t,e);return e.set(t,n),n}function Wu(e){return typeof e=="boolean"}var Vu=()=>function(t){const{thunk:r=!0,immutableCheck:n=!0,serializableCheck:o=!0,actionCreatorCheck:s=!0}=t??{};let i=new Xs;return r&&(Wu(r)?i.push(zu):i.push(Uu(r.extraArgument))),i},Ku="RTK_autoBatch",Qs=e=>t=>{setTimeout(t,e)},Ju=typeof window<"u"&&window.requestAnimationFrame?window.requestAnimationFrame:Qs(10),Yu=(e={type:"raf"})=>t=>(...r)=>{const n=t(...r);let o=!0,s=!1,i=!1;const a=new Set,l=e.type==="tick"?queueMicrotask:e.type==="raf"?Ju:e.type==="callback"?e.queueNotification:Qs(e.timeout),u=()=>{i=!1,s&&(s=!1,a.forEach(c=>c()))};return Object.assign({},n,{subscribe(c){const f=()=>o&&c(),m=n.subscribe(f);return a.add(c),()=>{m(),a.delete(c)}},dispatch(c){var f;try{return o=!((f=c==null?void 0:c.meta)!=null&&f[Ku]),s=!o,s&&(i||(i=!0,l(u))),n.dispatch(c)}finally{o=!0}}})},Zu=e=>function(r){const{autoBatch:n=!0}=r??{};let o=new Xs(e);return n&&o.push(Yu(typeof n=="object"?n:void 0)),o},Xu=!0;function Qu(e){const t=Vu(),{reducer:r=void 0,middleware:n,devTools:o=!0,preloadedState:s=void 0,enhancers:i=void 0}=e||{};let a;if(typeof r=="function")a=r;else if(bn(r))a=zs(r);else throw new Error(U(1));let l;typeof n=="function"?l=n(t):l=t();let u=Bt;o&&(u=qu({trace:!Xu,...typeof o=="object"&&o}));const c=wu(...l),f=Zu(c);let m=typeof i=="function"?i(f):f();const g=u(...m);return Ms(a,s,g)}function ei(e){const t={},r=[];let n;const o={addCase(s,i){const a=typeof s=="string"?s:s.type;if(!a)throw new Error(U(28));if(a in t)throw new Error(U(29));return t[a]=i,o},addMatcher(s,i){return r.push({matcher:s,reducer:i}),o},addDefaultCase(s){return n=s,o}};return e(o),[t,r,n]}function ed(e){return typeof e=="function"}function td(e,t){let[r,n,o]=ei(t),s;if(ed(e))s=()=>yo(e());else{const a=yo(e);s=()=>a}function i(a=s(),l){let u=[r[l.type],...n.filter(({matcher:c})=>c(l)).map(({reducer:c})=>c)];return u.filter(c=>!!c).length===0&&(u=[o]),u.reduce((c,f)=>{if(f)if(ge(c)){const g=f(c,l);return g===void 0?c:g}else{if(le(c))return Js(c,m=>f(m,l));{const m=f(c,l);if(m===void 0){if(c===null)return c;throw new Error(U(9))}return m}}return c},a)}return i.getInitialState=s,i}var rd=(e,t)=>Gu(e)?e.match(t):e(t);function nd(...e){return t=>e.some(r=>rd(r,t))}var od="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",Cn=(e=21)=>{let t="",r=e;for(;r--;)t+=od[Math.random()*64|0];return t},sd=["name","message","stack","code"],Er=class{constructor(e,t){ur(this,"_type");this.payload=e,this.meta=t}},xo=class{constructor(e,t){ur(this,"_type");this.payload=e,this.meta=t}},id=e=>{if(typeof e=="object"&&e!==null){const t={};for(const r of sd)typeof e[r]=="string"&&(t[r]=e[r]);return t}return{message:String(e)}},ad=(()=>{function e(t,r,n){const o=ce(t+"/fulfilled",(l,u,c,f)=>({payload:l,meta:{...f||{},arg:c,requestId:u,requestStatus:"fulfilled"}})),s=ce(t+"/pending",(l,u,c)=>({payload:void 0,meta:{...c||{},arg:u,requestId:l,requestStatus:"pending"}})),i=ce(t+"/rejected",(l,u,c,f,m)=>({payload:f,error:(n&&n.serializeError||id)(l||"Rejected"),meta:{...m||{},arg:c,requestId:u,rejectedWithValue:!!f,requestStatus:"rejected",aborted:(l==null?void 0:l.name)==="AbortError",condition:(l==null?void 0:l.name)==="ConditionError"}}));function a(l){return(u,c,f)=>{const m=n!=null&&n.idGenerator?n.idGenerator(l):Cn(),g=new AbortController;let h,y;function v(R){y=R,g.abort()}const k=async function(){var E,b;let R;try{let w=(E=n==null?void 0:n.condition)==null?void 0:E.call(n,l,{getState:c,extra:f});if(ld(w)&&(w=await w),w===!1||g.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};const S=new Promise((j,T)=>{h=()=>{T({name:"AbortError",message:y||"Aborted"})},g.signal.addEventListener("abort",h)});u(s(m,l,(b=n==null?void 0:n.getPendingMeta)==null?void 0:b.call(n,{requestId:m,arg:l},{getState:c,extra:f}))),R=await Promise.race([S,Promise.resolve(r(l,{dispatch:u,getState:c,extra:f,requestId:m,signal:g.signal,abort:v,rejectWithValue:(j,T)=>new Er(j,T),fulfillWithValue:(j,T)=>new xo(j,T)})).then(j=>{if(j instanceof Er)throw j;return j instanceof xo?o(j.payload,m,l,j.meta):o(j,m,l)})])}catch(w){R=w instanceof Er?i(null,m,l,w.payload,w.meta):i(w,m,l)}finally{h&&g.signal.removeEventListener("abort",h)}return n&&!n.dispatchConditionRejection&&i.match(R)&&R.meta.condition||u(R),R}();return Object.assign(k,{abort:v,requestId:m,arg:l,unwrap(){return k.then(cd)}})}}return Object.assign(a,{pending:s,rejected:i,fulfilled:o,settled:nd(i,o),typePrefix:t})}return e.withTypes=()=>e,e})();function cd(e){if(e.meta&&e.meta.rejectedWithValue)throw e.payload;if(e.error)throw e.error;return e.payload}function ld(e){return e!==null&&typeof e=="object"&&typeof e.then=="function"}var ud=Symbol.for("rtk-slice-createasyncthunk");function dd(e,t){return`${e}/${t}`}function fd({creators:e}={}){var r;const t=(r=e==null?void 0:e.asyncThunk)==null?void 0:r[ud];return function(o){const{name:s,reducerPath:i=s}=o;if(!s)throw new Error(U(11));typeof process<"u";const a=(typeof o.reducers=="function"?o.reducers(hd()):o.reducers)||{},l=Object.keys(a),u={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},c={addCase(x,E){const b=typeof x=="string"?x:x.type;if(!b)throw new Error(U(12));if(b in u.sliceCaseReducersByType)throw new Error(U(13));return u.sliceCaseReducersByType[b]=E,c},addMatcher(x,E){return u.sliceMatchers.push({matcher:x,reducer:E}),c},exposeAction(x,E){return u.actionCreators[x]=E,c},exposeCaseReducer(x,E){return u.sliceCaseReducersByName[x]=E,c}};l.forEach(x=>{const E=a[x],b={reducerName:x,type:dd(s,x),createNotation:typeof o.reducers=="function"};gd(E)?xd(b,E,c,t):md(b,E,c)});function f(){const[x={},E=[],b=void 0]=typeof o.extraReducers=="function"?ei(o.extraReducers):[o.extraReducers],w={...x,...u.sliceCaseReducersByType};return td(o.initialState,S=>{for(let j in w)S.addCase(j,w[j]);for(let j of u.sliceMatchers)S.addMatcher(j.matcher,j.reducer);for(let j of E)S.addMatcher(j.matcher,j.reducer);b&&S.addDefaultCase(b)})}const m=x=>x,g=new Map;let h;function y(x,E){return h||(h=f()),h(x,E)}function v(){return h||(h=f()),h.getInitialState()}function k(x,E=!1){function b(S){let j=S[x];return typeof j>"u"&&E&&(j=v()),j}function w(S=m){const j=Jr(g,E,{insert:()=>new WeakMap});return Jr(j,S,{insert:()=>{const T={};for(const[M,$]of Object.entries(o.selectors??{}))T[M]=pd($,S,v,E);return T}})}return{reducerPath:x,getSelectors:w,get selectors(){return w(b)},selectSlice:b}}const R={name:s,reducer:y,actions:u.actionCreators,caseReducers:u.sliceCaseReducersByName,getInitialState:v,...k(i),injectInto(x,{reducerPath:E,...b}={}){const w=E??i;return x.inject({reducerPath:w,reducer:y},b),{...R,...k(w,!0)}}};return R}}function pd(e,t,r,n){function o(s,...i){let a=t(s);return typeof a>"u"&&n&&(a=r()),e(a,...i)}return o.unwrapped=e,o}var En=fd();function hd(){function e(t,r){return{_reducerDefinitionType:"asyncThunk",payloadCreator:t,...r}}return e.withTypes=()=>e,{reducer(t){return Object.assign({[t.name](...r){return t(...r)}}[t.name],{_reducerDefinitionType:"reducer"})},preparedReducer(t,r){return{_reducerDefinitionType:"reducerWithPrepare",prepare:t,reducer:r}},asyncThunk:e}}function md({type:e,reducerName:t,createNotation:r},n,o){let s,i;if("reducer"in n){if(r&&!yd(n))throw new Error(U(17));s=n.reducer,i=n.prepare}else s=n;o.addCase(e,s).exposeCaseReducer(t,s).exposeAction(t,i?ce(e,i):ce(e))}function gd(e){return e._reducerDefinitionType==="asyncThunk"}function yd(e){return e._reducerDefinitionType==="reducerWithPrepare"}function xd({type:e,reducerName:t},r,n,o){if(!o)throw new Error(U(18));const{payloadCreator:s,fulfilled:i,pending:a,rejected:l,settled:u,options:c}=r,f=o(e,s,c);n.exposeAction(t,f),i&&n.addCase(f.fulfilled,i),a&&n.addCase(f.pending,a),l&&n.addCase(f.rejected,l),u&&n.addMatcher(f.settled,u),n.exposeCaseReducer(t,{fulfilled:i||yt,pending:a||yt,rejected:l||yt,settled:u||yt})}function yt(){}var bd=(e,t)=>{if(typeof e!="function")throw new Error(U(32))},Rn="listenerMiddleware",wd=e=>{let{type:t,actionCreator:r,matcher:n,predicate:o,effect:s}=e;if(t)o=ce(t).match;else if(r)t=r.type,o=r.match;else if(n)o=n;else if(!o)throw new Error(U(21));return bd(s),{predicate:o,type:t,effect:s}},Sd=Object.assign(e=>{const{type:t,predicate:r,effect:n}=wd(e);return{id:Cn(),effect:n,type:t,predicate:r,pending:new Set,unsubscribe:()=>{throw new Error(U(22))}}},{withTypes:()=>Sd}),vd=Object.assign(ce(`${Rn}/add`),{withTypes:()=>vd});ce(`${Rn}/removeAll`);var Cd=Object.assign(ce(`${Rn}/remove`),{withTypes:()=>Cd}),Ed=e=>"reducerPath"in e&&typeof e.reducerPath=="string",Rd=e=>e.flatMap(t=>Ed(t)?[[t.reducerPath,t.reducer]]:Object.entries(t)),kn=Symbol.for("rtk-state-proxy-original"),kd=e=>!!e&&!!e[kn],jd=new WeakMap,Od=(e,t)=>Jr(jd,e,{insert:()=>new Proxy(e,{get:(r,n,o)=>{if(n===kn)return r;const s=Reflect.get(r,n,o);if(typeof s>"u"){const i=t[n.toString()];if(i){const a=i(void 0,{type:Cn()});if(typeof a>"u")throw new Error(U(24));return a}}return s}})}),Td=e=>{if(!kd(e))throw new Error(U(25));return e[kn]},_d=(e={})=>e;function Ad(...e){const t=Object.fromEntries(Rd(e)),r=()=>Object.keys(t).length?zs(t):_d;let n=r();function o(a,l){return n(a,l)}o.withLazyLoadedSlices=()=>o;const s=(a,l={})=>{const{reducerPath:u,reducer:c}=a,f=t[u];return!l.overrideExisting&&f&&f!==c?(typeof process<"u",o):(t[u]=c,n=r(),o)},i=Object.assign(function(l,u){return function(f,...m){return l(Od(u?u(f,...m):f,t),...m)}},{original:Td});return Object.assign(o,{inject:s,selector:i})}function U(e){return`Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}const $d={data:[],isLoading:!0,error:!1},jt=ad("cryptoData/general",async({fromCurrencies:e,toCurrency:t})=>await Al({fromCurrencies:e,toCurrency:t})),jn=En({name:"cryptoData",initialState:$d,reducers:{setData:(e,t)=>{e.data=t.payload,e.isLoading=!1}},extraReducers:e=>{e.addCase(jt.pending,t=>{t.isLoading=!0}),e.addCase(jt.fulfilled,(t,r)=>{t.isLoading=!1,t.data=r.payload}),e.addCase(jt.rejected,t=>{t.isLoading=!1,t.error=!0})}});jn.actions;jn.reducer;const Pd=C.svg`
  fill: ${({theme:e})=>e.sharedColors.statusDown};
  width: 12px;
  height: 7px;

  &.up {
    fill: ${({theme:e})=>e.sharedColors.stausUp};
    transform: rotate(180deg);
  }
`,Dd=C.div`
  display: grid;
  grid-template-columns: 3fr 2fr 1fr;
  grid-auto-rows: 48px;
  height: 100%;
  font-family: ${({theme:e})=>e.fonts.interRegular};
  font-size: 0.75rem;
  color: ${({theme:e})=>e.color.textMain};
  overflow: auto;

  & > div {
    ${pn};
    line-height: 0.714;
    padding: 15px 24px;
  }
`,Rr=C.h3`
  position: sticky;
  top: 0;
  font-size: 0.625rem;
  color: ${({theme:e})=>e.color.trendHeading};
  background: ${({theme:e})=>e.color.boxBackground};
  white-space: nowrap;
  padding: 20px 24px;
  z-index: 1;
`,bo=C.div`
  grid-column: 1/-1;
  text-align: center;
`,Nd=C.div`
  text-transform: uppercase;

  span {
    color: ${({theme:e})=>e.sharedColors.trendCurrencyName};
    text-transform: capitalize;
    margin-left: 10px;
  }
`,Id=C.div`
  color: ${({theme:e})=>e.sharedColors.price};
`,Ld=C.div`
  ${ye};
  max-width: 130px;
  width: 100%;

  span {
    margin-left: 15px;
  }
`,Bd=e=>d.jsx(Pd,{className:Qr({up:Math.sign(e)===-1}),children:d.jsx("use",{xlinkHref:"svg/sprite.svg#angle"})});function Fd(){const{ref:e,height:t=1}=qt(),r=Fe(),{currenciesList:n,exchangeCurrency:o}=G(g=>g.config),{data:s,isLoading:i,error:a}=G(g=>g.cryptoData),l=O.useMemo(()=>n.map(({id:g})=>g).join(","),[n]),u=!i&&!a,c=!i&&a,f=i&&!a,m=O.useCallback(()=>r(jt({fromCurrencies:l,toCurrency:o.id})),[l,o.id]);return O.useEffect(()=>{m();const g=setInterval(()=>{m()},at);return()=>{clearInterval(g)}},[m]),d.jsxs(Dd,{ref:e,children:[d.jsx(Rr,{children:"Name"}),d.jsxs(Rr,{children:["24h Average price(",o.symbol,")"]}),d.jsx(Rr,{children:"24h Change(%)"}),u&&s.map(({id:g,name:h,symbol:y,current_price:v,price_change_percentage_24h:k})=>d.jsxs(O.Fragment,{children:[d.jsxs(Nd,{children:[y," ",d.jsx("span",{children:h})]}),d.jsx(Id,{children:v}),d.jsxs(Ld,{children:[Math.abs(k),d.jsx("span",{children:Bd(k)})]})]},g)),f&&d.jsx(bo,{children:d.jsx(Oe,{height:`${t/1.5}px`})}),c&&d.jsx(bo,{children:d.jsx(Ue,{})})]})}const Ve={minHeight:240,group:"shared",cached:!0},Ke={minWidth:240},ee=(e=!0)=>({news:{...Ve,...e&&Ke,id:"news",title:"News",content:d.jsx(lu,{})},history:{...Ve,...e&&Ke,id:"history",title:"Trade history",content:d.jsx(gu,{})},cryptocurrencies:{...Ve,...e&&Ke,id:"cryptocurrencies",title:"Cryptocurrencies",content:d.jsx(Wl,{})},overview:{...Ve,...e&&Ke,id:"overview",title:"Market overview",content:d.jsx(Xl,{})},trends:{...Ve,...e&&Ke,id:"trends",title:"Trends",content:d.jsx(Fd,{})}}),wo={dockbox:{mode:"vertical",children:[{mode:"horizontal",size:260,children:[{tabs:[ee().news]},{tabs:[ee().history]}]},{size:180,tabs:[ee().cryptocurrencies]},{size:260,mode:"horizontal",children:[{tabs:[ee().overview]},{mode:"horizontal",tabs:[ee().trends]}]}]}},So={dockbox:{mode:"vertical",children:[{tabs:[ee(!1).news]},{tabs:[ee(!1).history]},{tabs:[ee(!1).cryptocurrencies]},{tabs:[ee(!1).overview]},{tabs:[ee(!1).trends]}]}},vo={currenciesList:Nr.slice(0,6),exchangeCurrency:Dr.USD,theme:Dt.DARK,serializedDockbox:null,persistentDockbox:!1},On=En({name:"config",initialState:vo,reducers:{setCurrenciesList:(e,t)=>{e.currenciesList=t.payload},setExchangeCurrency:(e,t)=>{e.exchangeCurrency=t.payload},setTheme:(e,t)=>{e.theme=t.payload},setSerializedDockbox:(e,t)=>{e.serializedDockbox=t.payload},setPersistentDocbox:(e,t)=>{e.persistentDockbox=t.payload},resetConfig:()=>vo}}),{setCurrenciesList:ti,setExchangeCurrency:ri,setTheme:ni,setSerializedDockbox:Ut,setPersistentDocbox:oi,resetConfig:Md}=On.actions;On.reducer;function zd(){const e=xn(),t=e?So:wo,r=Fe(),n=G(f=>f.config.serializedDockbox),o=JSON.parse(String(n)),[s,i]=O.useState(o||t),a=ee(!e),l=O.useMemo(()=>({shared:{floatable:!1,maximizable:!0,disableDock:e}}),[e]),u=O.useCallback(({id:f})=>a[f],[a]),c=O.useCallback(f=>{i(f),r(Ut(JSON.stringify(f)))},[]);return O.useEffect(()=>{if(e)i(So);else{const f=o||wo;i(f),r(Ut(JSON.stringify(f)))}},[e]),O.useEffect(()=>{n||i(t)},[n]),{dockbox:s,groups:l,loadTab:u,onDockboxChange:c}}const Ud=C.section`
  height: 100%;
  width: 100%;

  & .dock-layout {
    /* min-height: calc(100vh - 100px); */
    /* height: 100%; */
    margin: 0 30px;
    overflow: auto;

    @media ${W.lg} {
      margin-left: 20px;
      margin-right: 20px;
    }
    @media ${W.sm} {
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
`,Hd={position:"absolute",left:0,top:0,right:0,bottom:20};function qd(){const{dockbox:e,groups:t,loadTab:r,onDockboxChange:n}=zd();return d.jsx(Ud,{className:"dockLayoutContainer",children:d.jsx(Di,{layout:e,loadTab:r,onLayoutChange:n,groups:t,style:Hd},`${t.shared.maximizable}`)})}const Gd=C.main`
  ${hn}
  height: 100vh;
`,Wd=C.section`
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
`,Vd=C.span`
  font-size: 6.25rem;
`,Kd=C.img`
  position: absolute;
  top: 21%;
  left: 51%;
  max-width: 280px;
  max-height: 260px;
  z-index: -1;
`;function Jd(){const e=ot(),t=()=>{e("/")};return d.jsx(Gd,{children:d.jsxs(Wd,{children:[d.jsx(Vd,{children:"404"}),d.jsx("p",{children:"Page not found!"}),d.jsx(Kd,{src:"images/404.webp",alt:"Broken bitcoin",width:"280",height:"260"}),d.jsxs(Is,{type:"button",onClick:t,children:[d.jsx("svg",{children:d.jsx("use",{xlinkHref:"svg/sprite.svg#home"})}),d.jsx("span",{children:"Home"})]})]})})}const Yd={user:null},Tn=En({name:"auth",initialState:Yd,reducers:{login:(e,t)=>{e.user=t.payload},logout:e=>{e.user=null}}}),{login:Ot,logout:Zd}=Tn.actions;Tn.reducer;function Yr(e){return d.jsx(ct,{...e})}const Xd=C.header`
  ${ye};
  width: 100%;
  max-height: 100px;
  padding: 30px;

  @media ${W.lg} {
    max-height: 80px;
    padding: 20px;
  }
  @media ${W.sm} {
    padding-left: 10px;
    padding-right: 10px;
  }
`,Qd=C.div`
  ${ye}
  gap: 12px;
`,ef=C.div`
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
`;function tf(){var a,l;const e=ot(),t=Ao(),{user:r}=G(u=>u.auth),n=t.pathname==="/",o=t.pathname==="/settings",s=((a=r==null?void 0:r.displayName)==null?void 0:a.split(/\s+/).map(u=>u.substring(0,1).toUpperCase()).join(""))||((l=r==null?void 0:r.email)==null?void 0:l.substring(0,1).toUpperCase()),i=()=>{e("/auth")};return d.jsxs(Xd,{children:[n&&d.jsx("span",{children:"Home"}),o&&d.jsx("span",{children:"Settings"}),d.jsx(Qd,{children:r?d.jsx(ef,{children:d.jsx("div",{children:s})}):d.jsx(Yr,{onClick:i,type:"button",children:d.jsx("span",{children:"Sign in"})})})]})}const rf=C.nav`
  ${lt};
  gap: 30px;
`,Co=C(fi)`
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

    @media ${W.lg} {
      width: 51px;
      height: 48px;
    }

    @media ${W.sm} {
      width: 41px;
      height: 38px;
    }
  }
`;function nf(){const{user:e}=G(t=>t.auth);return d.jsxs(rf,{children:[d.jsx(Co,{to:"/","aria-label":"Home page",children:d.jsx("span",{children:d.jsx("svg",{children:d.jsx("use",{xlinkHref:"svg/sprite.svg#home"})})})}),e&&d.jsx(Co,{to:"/settings","aria-label":"Settings",children:d.jsx("span",{children:d.jsx("svg",{children:d.jsx("use",{xlinkHref:"svg/sprite.svg#settings"})})})})]})}const of=C.div`
  ${lt};
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

  @media ${W.lg} {
    width: 80px;
    padding: 25px 10px 20px;
  }

  @media ${W.sm} {
    width: 60px;
    padding-left: 5px;
    padding-right: 5px;
  }
`,sf=C.div`
  svg {
    width: 42px;
    height: 46px;

    @media ${W.lg} {
      width: 37px;
      height: 41px;
    }

    @media ${W.sm} {
      width: 32px;
      height: 36px;
    }
  }
`,af=C.div`
  margin-top: auto;
`,si=C(ct)`
  text-align: center;
  background: transparent;
  border: none;
  width: auto;
  margin-top: 40px;

  @media ${W.lg} {
    margin-top: 30px;
  }

  @media ${W.sm} {
    margin-top: 20px;
  }

  svg {
    ${Ns};
  }
`,cf=C(si)`
  svg {
    width: 25px;
  }
`;function lf(){const e=ot(),{user:t}=G(s=>s.auth),r=Fe(),n=Xr(Po),o=async()=>{if(confirm("Logout confirmation"))try{await ki(n),r(Zd()),r(Md()),e("/")}catch{console.log("signOut fail")}};return d.jsxs(of,{children:[d.jsx(sf,{children:d.jsx(pi,{to:"/","aria-label":"Return to home page",children:d.jsx("svg",{children:d.jsx("use",{xlinkHref:"svg/sprite.svg#logo"})})})}),d.jsx(nf,{}),d.jsxs(af,{children:[d.jsx(cf,{onClick:()=>r(Ut(null)),"aria-label":"Reset layout",children:d.jsx("svg",{children:d.jsx("use",{xlinkHref:"svg/sprite.svg#reset"})})}),t&&d.jsx(si,{onClick:o,"aria-label":"Log out",children:d.jsx("svg",{children:d.jsx("use",{xlinkHref:"svg/sprite.svg#log-out"})})})]})]})}const uf=C.div`
  display: flex;
`,df=C.div`
  ${lt};
  width: 100%;
  overflow: auto;
`,ff=C.main`
  ${hn};
  height: 100%;
`;function pf(){const e=Xr(),t=Fe(),[r,n]=O.useState(!0);return O.useEffect(()=>{n(!0),ji(e,async o=>{if(o&&o.email){t(Ot({email:o.email,uid:o.uid,photoURL:o.photoURL||null,displayName:o.displayName}));const s=await Oi(o);if(s){const{currenciesList:i,exchangeCurrency:a,theme:l,serializedDockbox:u}=s;i&&t(ti(i)),a&&t(ri(a)),l&&t(ni(l)),u&&(t(Ut(u)),t(oi(!0)))}}n(!1)})},[]),d.jsxs(d.Fragment,{children:[r&&d.jsx(Oe,{}),!r&&d.jsxs(uf,{children:[d.jsx(lf,{}),d.jsxs(df,{children:[d.jsx(tf,{}),d.jsx(ff,{children:d.jsx(hi,{})})]})]})]})}const hf=/^(([^<>()\[\]\\.,;:\s@"]+(.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/,mf=/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{6,}$/,gf=e=>Ui().shape({email:fr().email("Invalid email format.").matches(hf,"Email address is required.").required(),password:fr().matches(mf,"Password must contain one digit from 0 to 6, one lowercase letter, one uppercase letter, one special character, no spaces and at least 6 characters long.").required("Pasword is required."),...!e&&{repeatPassword:fr().oneOf([Hi("password")],"Passwords don't match.").required("Repeat password is required.")}}),yf=C.main`
  ${tt};
  position: relative;
  height: 100vh;
  padding: 10px;
`,xf=C(Is)`
  position: absolute;
  top: 30px;
  right: 30px;

  @media ${W.lg} {
    top: 20px;
    right: 20px;
  }

  @media ${W.sm} {
    right: 10px;
  }
`,bf=C(Bs)`
  min-width: 300px;
  max-width: 375px;
  width: 100%;
`,wf=C.svg`
  width: 30px;
  height: 21px;
  vertical-align: middle;
`,Sf=C.p`
  font-size: ${({theme:e})=>e.fontSize.small};
  color: ${({theme:e})=>e.sharedColors.statusDown};
  margin: 0;
`,Eo=C.div`
  margin-bottom: 10px;
`,Ro=C.div`
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
`,vf=C.div`
  text-align: center;
  margin: 15px 0;
`,Cf=C.span`
  transition: color 0.3s ease-in-out;

  &:hover {
    text-decoration: underline;
    color: ${({theme:e})=>e.sharedColors.accentColor};
    cursor: pointer;
  }
`,Ef={email:"",password:"",repeatPassword:""};function Rf(){var E,b,w;const e=ot(),t=Xr(Po),{user:r}=G(S=>S.auth),n=Fe(),[o,s]=O.useState("login"),i=o==="login",a=gf(i),{register:l,handleSubmit:u,formState:{errors:c},reset:f,clearErrors:m}=mi({defaultValues:Ef,resolver:zi(a)}),g=[{typeName:"email",example:"email@example.com",fieldName:"email",err:c.email,errMsg:(E=c.email)==null?void 0:E.message},{typeName:"password",example:"********",fieldName:"password",err:c.password,errMsg:(b=c.password)==null?void 0:b.message},{typeName:"password",example:"repeat password",fieldName:"repeatPassword",err:c.repeatPassword,errMsg:(w=c.repeatPassword)==null?void 0:w.message}];O.useEffect(()=>{r&&e("/")},[r,e]),O.useEffect(()=>{f(),m()},[i]);const h=()=>{s(S=>S==="login"?"sign-up":"login")},y=()=>{e("/")},v=async({email:S,password:j})=>{try{const{user:T}=await Ai(t,S,j);return T&&T.email&&($n(T),n(Ot({email:T.email,uid:T.uid,photoURL:T.photoURL||null,displayName:T.displayName}))),T}catch(T){if(T instanceof dr){const M=T.code;M==="auth/email-already-in-use"&&alert("Email already exists!"),console.error("Error:",M)}}},k=async({email:S,password:j})=>{try{const{user:T}=await $i(t,S,j);return T&&T.email&&n(Ot({email:T.email,uid:T.uid,photoURL:T.photoURL||null,displayName:T.displayName})),T}catch(T){if(T instanceof dr){const M=T.code;M==="auth/user-not-found"&&alert("Sign up first!"),M==="auth/invalid-credential"&&alert("Check your credentials!"),console.error("Error:",M)}}},R=async S=>{const{email:j,password:T}=S;if(!i)return v({email:j,password:T});k({email:j,password:T})},x=async()=>{const S=new Ti;try{const{user:j}=await _i(t,S);return j&&j.email&&($n(j),n(Ot({email:j.email,uid:j.uid,photoURL:j.photoURL||null,displayName:j.displayName}))),j}catch(j){return j instanceof dr&&j.code!=="auth/cancelled-popup-request"&&console.error("Error:",j),null}};return d.jsxs(yf,{children:[d.jsxs(xf,{type:"button",onClick:y,children:[d.jsx("svg",{children:d.jsx("use",{xlinkHref:"svg/sprite.svg#home"})}),d.jsx("span",{children:"Home"})]}),d.jsx(bf,{as:"section",$padding:"20px",$border:"true",children:d.jsxs("form",{name:"auth-form",onSubmit:u(R),children:[d.jsxs(Yr,{onClick:x,type:"button",$width:"full",children:[d.jsx("span",{children:"Sign with"}),d.jsx(wf,{children:d.jsx("use",{xlinkHref:"svg/sprite.svg#google"})})]}),d.jsxs(Ro,{children:[d.jsx("hr",{})," ",d.jsx("span",{children:"or"}),d.jsx("hr",{})]}),d.jsx("div",{children:i?g.filter(S=>S.fieldName!=="repeatPassword").map(({typeName:S,example:j,fieldName:T},M)=>d.jsx(Eo,{children:d.jsx(ao,{type:S,placeholder:j,...l(T)})},M)):g.map(({typeName:S,example:j,fieldName:T,err:M,errMsg:$},q)=>d.jsxs(Eo,{children:[d.jsx(ao,{type:S,placeholder:j,...l(T)}),d.jsx(Sf,{children:$})]},q))}),d.jsx(Yr,{type:"submit",$width:"full",children:d.jsxs("span",{children:["Sign ",i?"in":"up"," with Email"]})}),d.jsxs(vf,{children:[d.jsx("span",{children:i?"Don't have an account yet?":"Already have an account?"})," ",d.jsxs(Cf,{onClick:h,children:["Sign ",i?"up":"in"]})]}),d.jsxs(Ro,{children:[d.jsx("hr",{})," ",d.jsx("span",{children:"Forgot password?"}),d.jsx("hr",{})]})]})})]})}const kf=C.section`
  max-width: 450px;
  width: 100%;
  padding: 0 10px 10px;
`,xt=C.fieldset`
  background: ${({theme:e})=>e.color.boxBackground};
  border-radius: ${({theme:e})=>e.borderRadius.large};
  border: 1px solid ${({theme:e})=>e.color.border};
  padding: 6px 15px 10px 10px;
  margin-bottom: 7px;
`,bt=C.legend`
  font-size: 1rem;
  line-height: 1;
  color: ${({theme:e})=>e.sharedColors.accentLight};
`,ko=C.div`
  margin-bottom: 3px;
`,Ht=C.label`
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
`,jo=C.input`
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
`,jf=C(ct)`
  margin-top: 10px;
`,Oo=C.select`
  ${mn};
`,To=C.option`
  ${gn};
`;function Of(){const e=ot(),t=Ao(),r=xn(),n=Fe(),{user:o}=G($=>$.auth),{currenciesList:s,exchangeCurrency:i,theme:a,persistentDockbox:l,serializedDockbox:u}=G($=>$.config),[c,f]=O.useState(i),[m,g]=O.useState(s),[h,y]=O.useState(a),[v,k]=O.useState(l),[R,x]=O.useState(!1),E=t.pathname==="/settings"&&!o;O.useEffect(()=>{E&&e("/")},[]);const b=({target:{value:$}})=>{f(Dr[$])},w=({target:{id:$,checked:q}})=>{if(q){const ue=Nr.find(xe=>xe.id===$);g(xe=>[...xe,ue])}else{const ue=m.filter(xe=>xe.id!==$);ue.length?g(ue):alert("You should keep at least one currency")}},S=({target:{value:$}})=>{y($)},j=({target:{checked:$}})=>{k($)},T=$=>m.findIndex(q=>$===q.id)!==-1,M=async()=>{x(!0);const $={exchangeCurrency:c,currenciesList:m,theme:h,...v&&{serializedDockbox:u}};await Pi(o,$),n(ri(c)),n(ti(m)),n(ni(h)),v&&n(oi(!0)),x(!1)};return d.jsxs(kf,{children:[d.jsxs(xt,{children:[d.jsx(bt,{children:"Choose main exchange currency:"}),d.jsx(Oo,{value:c.id,onChange:b,"aria-label":"Exchange currencies",children:Object.entries(Dr).map(([$,{id:q,symbol:ue}])=>d.jsxs(To,{value:q,children:[q," (",ue,")"]},q))})]}),d.jsxs(xt,{children:[d.jsx(bt,{children:"Choose crypto currencies list:"}),Nr.map(({id:$,symbol:q})=>d.jsxs(ko,{children:[d.jsx(jo,{type:"checkbox",id:$,name:q,onChange:w,checked:T($)}),d.jsxs(Ht,{htmlFor:$,children:[$," (",q,")"]})]},$))]}),d.jsxs(xt,{children:[d.jsx(bt,{children:"Choose app theme:"}),d.jsx(Oo,{value:h,onChange:S,"aria-label":"Theme",children:Ja.map($=>d.jsx(To,{value:$,children:$},$))})]}),!r&&d.jsxs(xt,{children:[d.jsx(bt,{children:"Choose layout settings:"}),d.jsxs(ko,{children:[d.jsx(jo,{type:"checkbox",name:"persistentDockbox",id:"persistentDockbox",onChange:j,checked:v}),d.jsx(Ht,{htmlFor:"persistentDockbox",children:v?"layout settings will be kept after save":"layout settings will be removed after save"})]})]}),d.jsx(jf,{onClick:M,disabled:R,$width:"full",children:R?"Saving":"Save changes"})]})}const _o={sharedColors:{textSecondary:"#868B93",price:"#9292C1",sortBackground:"rgba(26, 26, 29, 0.7)",selectBorder:"rgba(26, 26, 29, 0)",dropIndicator:"rgba(0, 0, 0, 0.7)",stausUp:"#00C287",statusDown:"#E72D04",searchBackground:"#2F293E",searchText:"#E2D8FD",btnIcon:"#ffffff",accentColor:"#EC5EB7",accentLight:"#B783EB",trendCurrencyName:"#9A9A9A"},fonts:{interRegular:"Inter-Regular",interMedium:"Inter-Medium",interSemiBold:"Inter-SemiBold",interBold:"Inter-Bold"},borderRadius:{extraSmall:"10px",small:"13px",medium:"15px",large:"20px",circle:"50%"},fontSize:{small:".625rem",medium:"0.875rem"}},Tf={mainBackground:"#261E35",boxBackground:"#3C354A",boxInnerBackground:"#4A435C",textMain:"#ffffff",userProfile:"#3F3655",iconActiveBackground:"#372C44",border:"rgba(255, 255, 255, 0.5)",articleTime:"#868B93",navBarSvg:"#8D8598",navBarSvgActive:"#D8BCFF",trendHeading:"#9A9A9A"},_f={mainBackground:"#e0e0e0",boxBackground:"#f5f5f5",boxInnerBackground:"#a7a7a7",textMain:"#1A111D",userProfile:"#a7a7a7",iconActiveBackground:"#a7a7a7",border:"#a7a7a7",articleTime:"#535353",navBarSvg:"#8D8598",navBarSvgActive:"#EC5EB7",trendHeading:"#BFB7B7"},Af={dark:{color:Tf,..._o},light:{color:_f,..._o}},$f=gi([{path:"/",element:d.jsx(pf,{}),children:[{path:"/",element:d.jsx(qd,{})},{path:"/settings",element:d.jsx(Of,{})}],errorElement:d.jsx(Jd,{})},{path:"/auth",element:d.jsx(Rf,{})}],{basename:"/crypto-dash/"});function Pf(){const e=G(t=>t.config.theme);return d.jsxs(za,{theme:Af[e],children:[d.jsx(Va,{}),d.jsx(yi,{router:$f})]})}const Df=Ad(Tn,On,jn),Nf=Qu({reducer:Df});xi.createRoot(document.getElementById("root")).render(d.jsx(bi,{store:Nf,children:d.jsx(Pf,{})}));
