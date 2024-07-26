var li=Object.defineProperty;var ui=(e,t,r)=>t in e?li(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var dr=(e,t,r)=>ui(e,typeof t!="symbol"?t+"":t,r);import{R as te,r as O,f as di,h as fi,j as u,k as it,l as Ao,N as pi,L as hi,O as mi,m as gi,H as yi,n as xi,o as We,p as bi,P as wi}from"./@react-B2fpRxtj.js";import{_ as $e,a as U,G as Si,b as $o,c as vi,C as Ci,d as Xr,e as Ei,f as Ri,g as ki,h as Qr,i as Po,s as ji,o as Oi,j as Ti,k as _i,l as Ai,m as $n,F as fr,n as $i,p as Pi,u as Di}from"./@firebase-CqOa32Ie.js";import{D as Ni}from"./@rc-dock-KuiI-Aqq.js";import{h as B}from"./@moment-C5S46NFB.js";import{d as Do}from"./@d3-format-CzD4bSOQ.js";import{u as Gt}from"./@use-resize-observer-DhCbMyQA.js";import{c as en}from"./@classnames-Nq95h12A.js";import{V as Ii,a as No,c as Li,b as Io,d as Lo,e as Bi,f as At,g as Fi,h as Mi}from"./@victory-OGjp6biK.js";import{u as zi}from"./@react-hook-a8qBCQSf.js";import{o as Ui}from"./@hookform-prSRFcat.js";import{c as Hi,a as pr,b as qi}from"./@yup-Byvv1ZMI.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(o){if(o.ep)return;o.ep=!0;const s=r(o);fetch(o.href,s)}})();var D="-ms-",Xe="-moz-",P="-webkit-",Bo="comm",Wt="rule",tn="decl",Gi="@import",Fo="@keyframes",Wi="@layer",Mo=Math.abs,rn=String.fromCharCode,jr=Object.assign;function Vi(e,t){return F(e,0)^45?(((t<<2^F(e,0))<<2^F(e,1))<<2^F(e,2))<<2^F(e,3):0}function zo(e){return e.trim()}function ae(e,t){return(e=t.exec(e))?e[0]:e}function A(e,t,r){return e.replace(t,r)}function vt(e,t,r){return e.indexOf(t,r)}function F(e,t){return e.charCodeAt(t)|0}function Pe(e,t,r){return e.slice(t,r)}function se(e){return e.length}function Uo(e){return e.length}function Ye(e,t){return t.push(e),e}function Ki(e,t){return e.map(t).join("")}function Pn(e,t){return e.filter(function(r){return!ae(r,t)})}var Vt=1,De=1,Ho=0,X=0,L=0,Be="";function Kt(e,t,r,n,o,s,i,a){return{value:e,root:t,parent:r,type:n,props:o,children:s,line:Vt,column:De,length:i,return:"",siblings:a}}function he(e,t){return jr(Kt("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Te(e){for(;e.root;)e=he(e.root,{children:[e]});Ye(e,e.siblings)}function Ji(){return L}function Yi(){return L=X>0?F(Be,--X):0,De--,L===10&&(De=1,Vt--),L}function re(){return L=X<Ho?F(Be,X++):0,De++,L===10&&(De=1,Vt++),L}function ve(){return F(Be,X)}function Ct(){return X}function Jt(e,t){return Pe(Be,e,t)}function Or(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Zi(e){return Vt=De=1,Ho=se(Be=e),X=0,[]}function Xi(e){return Be="",e}function hr(e){return zo(Jt(X-1,Tr(e===91?e+2:e===40?e+1:e)))}function Qi(e){for(;(L=ve())&&L<33;)re();return Or(e)>2||Or(L)>3?"":" "}function ea(e,t){for(;--t&&re()&&!(L<48||L>102||L>57&&L<65||L>70&&L<97););return Jt(e,Ct()+(t<6&&ve()==32&&re()==32))}function Tr(e){for(;re();)switch(L){case e:return X;case 34:case 39:e!==34&&e!==39&&Tr(L);break;case 40:e===41&&Tr(e);break;case 92:re();break}return X}function ta(e,t){for(;re()&&e+L!==57;)if(e+L===84&&ve()===47)break;return"/*"+Jt(t,X-1)+"*"+rn(e===47?e:re())}function ra(e){for(;!Or(ve());)re();return Jt(e,X)}function na(e){return Xi(Et("",null,null,null,[""],e=Zi(e),0,[0],e))}function Et(e,t,r,n,o,s,i,a,l){for(var d=0,c=0,f=i,m=0,g=0,h=0,y=1,S=1,E=1,R=0,b="",x=o,k=s,C=n,w=b;S;)switch(h=R,R=re()){case 40:if(h!=108&&F(w,f-1)==58){vt(w+=A(hr(R),"&","&\f"),"&\f",Mo(d?a[d-1]:0))!=-1&&(E=-1);break}case 34:case 39:case 91:w+=hr(R);break;case 9:case 10:case 13:case 32:w+=Qi(h);break;case 92:w+=ea(Ct()-1,7);continue;case 47:switch(ve()){case 42:case 47:Ye(oa(ta(re(),Ct()),t,r,l),l);break;default:w+="/"}break;case 123*y:a[d++]=se(w)*E;case 125*y:case 59:case 0:switch(R){case 0:case 125:S=0;case 59+c:E==-1&&(w=A(w,/\f/g,"")),g>0&&se(w)-f&&Ye(g>32?Nn(w+";",n,r,f-1,l):Nn(A(w," ","")+";",n,r,f-2,l),l);break;case 59:w+=";";default:if(Ye(C=Dn(w,t,r,d,c,o,a,b,x=[],k=[],f,s),s),R===123)if(c===0)Et(w,t,C,C,x,s,f,a,k);else switch(m===99&&F(w,3)===110?100:m){case 100:case 108:case 109:case 115:Et(e,C,C,n&&Ye(Dn(e,C,C,0,0,o,a,b,o,x=[],f,k),k),o,k,f,a,n?x:k);break;default:Et(w,C,C,C,[""],k,0,a,k)}}d=c=g=0,y=E=1,b=w="",f=i;break;case 58:f=1+se(w),g=h;default:if(y<1){if(R==123)--y;else if(R==125&&y++==0&&Yi()==125)continue}switch(w+=rn(R),R*y){case 38:E=c>0?1:(w+="\f",-1);break;case 44:a[d++]=(se(w)-1)*E,E=1;break;case 64:ve()===45&&(w+=hr(re())),m=ve(),c=f=se(b=w+=ra(Ct())),R++;break;case 45:h===45&&se(w)==2&&(y=0)}}return s}function Dn(e,t,r,n,o,s,i,a,l,d,c,f){for(var m=o-1,g=o===0?s:[""],h=Uo(g),y=0,S=0,E=0;y<n;++y)for(var R=0,b=Pe(e,m+1,m=Mo(S=i[y])),x=e;R<h;++R)(x=zo(S>0?g[R]+" "+b:A(b,/&\f/g,g[R])))&&(l[E++]=x);return Kt(e,t,r,o===0?Wt:a,l,d,c,f)}function oa(e,t,r,n){return Kt(e,t,r,Bo,rn(Ji()),Pe(e,2,-2),0,n)}function Nn(e,t,r,n,o){return Kt(e,t,r,tn,Pe(e,0,n),Pe(e,n+1,-1),n,o)}function qo(e,t,r){switch(Vi(e,t)){case 5103:return P+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return P+e+e;case 4789:return Xe+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return P+e+Xe+e+D+e+e;case 5936:switch(F(e,t+11)){case 114:return P+e+D+A(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return P+e+D+A(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return P+e+D+A(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return P+e+D+e+e;case 6165:return P+e+D+"flex-"+e+e;case 5187:return P+e+A(e,/(\w+).+(:[^]+)/,P+"box-$1$2"+D+"flex-$1$2")+e;case 5443:return P+e+D+"flex-item-"+A(e,/flex-|-self/g,"")+(ae(e,/flex-|baseline/)?"":D+"grid-row-"+A(e,/flex-|-self/g,""))+e;case 4675:return P+e+D+"flex-line-pack"+A(e,/align-content|flex-|-self/g,"")+e;case 5548:return P+e+D+A(e,"shrink","negative")+e;case 5292:return P+e+D+A(e,"basis","preferred-size")+e;case 6060:return P+"box-"+A(e,"-grow","")+P+e+D+A(e,"grow","positive")+e;case 4554:return P+A(e,/([^-])(transform)/g,"$1"+P+"$2")+e;case 6187:return A(A(A(e,/(zoom-|grab)/,P+"$1"),/(image-set)/,P+"$1"),e,"")+e;case 5495:case 3959:return A(e,/(image-set\([^]*)/,P+"$1$`$1");case 4968:return A(A(e,/(.+:)(flex-)?(.*)/,P+"box-pack:$3"+D+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+P+e+e;case 4200:if(!ae(e,/flex-|baseline/))return D+"grid-column-align"+Pe(e,t)+e;break;case 2592:case 3360:return D+A(e,"template-","")+e;case 4384:case 3616:return r&&r.some(function(n,o){return t=o,ae(n.props,/grid-\w+-end/)})?~vt(e+(r=r[t].value),"span",0)?e:D+A(e,"-start","")+e+D+"grid-row-span:"+(~vt(r,"span",0)?ae(r,/\d+/):+ae(r,/\d+/)-+ae(e,/\d+/))+";":D+A(e,"-start","")+e;case 4896:case 4128:return r&&r.some(function(n){return ae(n.props,/grid-\w+-start/)})?e:D+A(A(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return A(e,/(.+)-inline(.+)/,P+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(se(e)-1-t>6)switch(F(e,t+1)){case 109:if(F(e,t+4)!==45)break;case 102:return A(e,/(.+:)(.+)-([^]+)/,"$1"+P+"$2-$3$1"+Xe+(F(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~vt(e,"stretch",0)?qo(A(e,"stretch","fill-available"),t,r)+e:e}break;case 5152:case 5920:return A(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(n,o,s,i,a,l,d){return D+o+":"+s+d+(i?D+o+"-span:"+(a?l:+l-+s)+d:"")+e});case 4949:if(F(e,t+6)===121)return A(e,":",":"+P)+e;break;case 6444:switch(F(e,F(e,14)===45?18:11)){case 120:return A(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+P+(F(e,14)===45?"inline-":"")+"box$3$1"+P+"$2$3$1"+D+"$2box$3")+e;case 100:return A(e,":",":"+D)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return A(e,"scroll-","scroll-snap-")+e}return e}function $t(e,t){for(var r="",n=0;n<e.length;n++)r+=t(e[n],n,e,t)||"";return r}function sa(e,t,r,n){switch(e.type){case Wi:if(e.children.length)break;case Gi:case tn:return e.return=e.return||e.value;case Bo:return"";case Fo:return e.return=e.value+"{"+$t(e.children,n)+"}";case Wt:if(!se(e.value=e.props.join(",")))return""}return se(r=$t(e.children,n))?e.return=e.value+"{"+r+"}":""}function ia(e){var t=Uo(e);return function(r,n,o,s){for(var i="",a=0;a<t;a++)i+=e[a](r,n,o,s)||"";return i}}function aa(e){return function(t){t.root||(t=t.return)&&e(t)}}function ca(e,t,r,n){if(e.length>-1&&!e.return)switch(e.type){case tn:e.return=qo(e.value,e.length,r);return;case Fo:return $t([he(e,{value:A(e.value,"@","@"+P)})],n);case Wt:if(e.length)return Ki(r=e.props,function(o){switch(ae(o,n=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Te(he(e,{props:[A(o,/:(read-\w+)/,":"+Xe+"$1")]})),Te(he(e,{props:[o]})),jr(e,{props:Pn(r,n)});break;case"::placeholder":Te(he(e,{props:[A(o,/:(plac\w+)/,":"+P+"input-$1")]})),Te(he(e,{props:[A(o,/:(plac\w+)/,":"+Xe+"$1")]})),Te(he(e,{props:[A(o,/:(plac\w+)/,D+"input-$1")]})),Te(he(e,{props:[o]})),jr(e,{props:Pn(r,n)});break}return""})}}var la={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},K={},Ne=typeof process<"u"&&K!==void 0&&(K.REACT_APP_SC_ATTR||K.SC_ATTR)||"data-styled",Go="active",Wo="data-styled-version",Yt="6.1.11",nn=`/*!sc*/
`,on=typeof window<"u"&&"HTMLElement"in window,ua=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&K!==void 0&&K.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&K.REACT_APP_SC_DISABLE_SPEEDY!==""?K.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&K.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&K!==void 0&&K.SC_DISABLE_SPEEDY!==void 0&&K.SC_DISABLE_SPEEDY!==""&&K.SC_DISABLE_SPEEDY!=="false"&&K.SC_DISABLE_SPEEDY),da={},Zt=Object.freeze([]),Ie=Object.freeze({});function Vo(e,t,r){return r===void 0&&(r=Ie),e.theme!==r.theme&&e.theme||t||r.theme}var Ko=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),fa=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,pa=/(^-|-$)/g;function In(e){return e.replace(fa,"-").replace(pa,"")}var ha=/(a)(d)/gi,gt=52,Ln=function(e){return String.fromCharCode(e+(e>25?39:97))};function _r(e){var t,r="";for(t=Math.abs(e);t>gt;t=t/gt|0)r=Ln(t%gt)+r;return(Ln(t%gt)+r).replace(ha,"$1-$2")}var mr,Jo=5381,Ae=function(e,t){for(var r=t.length;r;)e=33*e^t.charCodeAt(--r);return e},Yo=function(e){return Ae(Jo,e)};function sn(e){return _r(Yo(e)>>>0)}function ma(e){return e.displayName||e.name||"Component"}function gr(e){return typeof e=="string"&&!0}var Zo=typeof Symbol=="function"&&Symbol.for,Xo=Zo?Symbol.for("react.memo"):60115,ga=Zo?Symbol.for("react.forward_ref"):60112,ya={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},xa={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Qo={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},ba=((mr={})[ga]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},mr[Xo]=Qo,mr);function Bn(e){return("type"in(t=e)&&t.type.$$typeof)===Xo?Qo:"$$typeof"in e?ba[e.$$typeof]:ya;var t}var wa=Object.defineProperty,Sa=Object.getOwnPropertyNames,Fn=Object.getOwnPropertySymbols,va=Object.getOwnPropertyDescriptor,Ca=Object.getPrototypeOf,Mn=Object.prototype;function es(e,t,r){if(typeof t!="string"){if(Mn){var n=Ca(t);n&&n!==Mn&&es(e,n,r)}var o=Sa(t);Fn&&(o=o.concat(Fn(t)));for(var s=Bn(e),i=Bn(t),a=0;a<o.length;++a){var l=o[a];if(!(l in xa||r&&r[l]||i&&l in i||s&&l in s)){var d=va(t,l);try{wa(e,l,d)}catch{}}}}return e}function Ee(e){return typeof e=="function"}function an(e){return typeof e=="object"&&"styledComponentId"in e}function Se(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Pt(e,t){if(e.length===0)return"";for(var r=e[0],n=1;n<e.length;n++)r+=e[n];return r}function Qe(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Ar(e,t,r){if(r===void 0&&(r=!1),!r&&!Qe(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var n=0;n<t.length;n++)e[n]=Ar(e[n],t[n]);else if(Qe(t))for(var n in t)e[n]=Ar(e[n],t[n]);return e}function cn(e,t){Object.defineProperty(e,"toString",{value:t})}function Re(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Ea=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var r=0,n=0;n<t;n++)r+=this.groupSizes[n];return r},e.prototype.insertRules=function(t,r){if(t>=this.groupSizes.length){for(var n=this.groupSizes,o=n.length,s=o;t>=s;)if((s<<=1)<0)throw Re(16,"".concat(t));this.groupSizes=new Uint32Array(s),this.groupSizes.set(n),this.length=s;for(var i=o;i<s;i++)this.groupSizes[i]=0}for(var a=this.indexOfGroup(t+1),l=(i=0,r.length);i<l;i++)this.tag.insertRule(a,r[i])&&(this.groupSizes[t]++,a++)},e.prototype.clearGroup=function(t){if(t<this.length){var r=this.groupSizes[t],n=this.indexOfGroup(t),o=n+r;this.groupSizes[t]=0;for(var s=n;s<o;s++)this.tag.deleteRule(n)}},e.prototype.getGroup=function(t){var r="";if(t>=this.length||this.groupSizes[t]===0)return r;for(var n=this.groupSizes[t],o=this.indexOfGroup(t),s=o+n,i=o;i<s;i++)r+="".concat(this.tag.getRule(i)).concat(nn);return r},e}(),Rt=new Map,Dt=new Map,kt=1,yt=function(e){if(Rt.has(e))return Rt.get(e);for(;Dt.has(kt);)kt++;var t=kt++;return Rt.set(e,t),Dt.set(t,e),t},Ra=function(e,t){kt=t+1,Rt.set(e,t),Dt.set(t,e)},ka="style[".concat(Ne,"][").concat(Wo,'="').concat(Yt,'"]'),ja=new RegExp("^".concat(Ne,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Oa=function(e,t,r){for(var n,o=r.split(","),s=0,i=o.length;s<i;s++)(n=o[s])&&e.registerName(t,n)},Ta=function(e,t){for(var r,n=((r=t.textContent)!==null&&r!==void 0?r:"").split(nn),o=[],s=0,i=n.length;s<i;s++){var a=n[s].trim();if(a){var l=a.match(ja);if(l){var d=0|parseInt(l[1],10),c=l[2];d!==0&&(Ra(c,d),Oa(e,c,l[3]),e.getTag().insertRules(d,o)),o.length=0}else o.push(a)}}};function _a(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var ts=function(e){var t=document.head,r=e||t,n=document.createElement("style"),o=function(a){var l=Array.from(a.querySelectorAll("style[".concat(Ne,"]")));return l[l.length-1]}(r),s=o!==void 0?o.nextSibling:null;n.setAttribute(Ne,Go),n.setAttribute(Wo,Yt);var i=_a();return i&&n.setAttribute("nonce",i),r.insertBefore(n,s),n},Aa=function(){function e(t){this.element=ts(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(r){if(r.sheet)return r.sheet;for(var n=document.styleSheets,o=0,s=n.length;o<s;o++){var i=n[o];if(i.ownerNode===r)return i}throw Re(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,r){try{return this.sheet.insertRule(r,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var r=this.sheet.cssRules[t];return r&&r.cssText?r.cssText:""},e}(),$a=function(){function e(t){this.element=ts(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,r){if(t<=this.length&&t>=0){var n=document.createTextNode(r);return this.element.insertBefore(n,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),Pa=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,r){return t<=this.length&&(this.rules.splice(t,0,r),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),zn=on,Da={isServer:!on,useCSSOMInjection:!ua},Nt=function(){function e(t,r,n){t===void 0&&(t=Ie),r===void 0&&(r={});var o=this;this.options=U(U({},Da),t),this.gs=r,this.names=new Map(n),this.server=!!t.isServer,!this.server&&on&&zn&&(zn=!1,function(s){for(var i=document.querySelectorAll(ka),a=0,l=i.length;a<l;a++){var d=i[a];d&&d.getAttribute(Ne)!==Go&&(Ta(s,d),d.parentNode&&d.parentNode.removeChild(d))}}(this)),cn(this,function(){return function(s){for(var i=s.getTag(),a=i.length,l="",d=function(f){var m=function(E){return Dt.get(E)}(f);if(m===void 0)return"continue";var g=s.names.get(m),h=i.getGroup(f);if(g===void 0||h.length===0)return"continue";var y="".concat(Ne,".g").concat(f,'[id="').concat(m,'"]'),S="";g!==void 0&&g.forEach(function(E){E.length>0&&(S+="".concat(E,","))}),l+="".concat(h).concat(y,'{content:"').concat(S,'"}').concat(nn)},c=0;c<a;c++)d(c);return l}(o)})}return e.registerId=function(t){return yt(t)},e.prototype.reconstructWithOptions=function(t,r){return r===void 0&&(r=!0),new e(U(U({},this.options),t),this.gs,r&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(r){var n=r.useCSSOMInjection,o=r.target;return r.isServer?new Pa(o):n?new Aa(o):new $a(o)}(this.options),new Ea(t)));var t},e.prototype.hasNameForId=function(t,r){return this.names.has(t)&&this.names.get(t).has(r)},e.prototype.registerName=function(t,r){if(yt(t),this.names.has(t))this.names.get(t).add(r);else{var n=new Set;n.add(r),this.names.set(t,n)}},e.prototype.insertRules=function(t,r,n){this.registerName(t,r),this.getTag().insertRules(yt(t),n)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(yt(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),Na=/&/g,Ia=/^\s*\/\/.*$/gm;function rs(e,t){return e.map(function(r){return r.type==="rule"&&(r.value="".concat(t," ").concat(r.value),r.value=r.value.replaceAll(",",",".concat(t," ")),r.props=r.props.map(function(n){return"".concat(t," ").concat(n)})),Array.isArray(r.children)&&r.type!=="@keyframes"&&(r.children=rs(r.children,t)),r})}function La(e){var t,r,n,o=Ie,s=o.options,i=s===void 0?Ie:s,a=o.plugins,l=a===void 0?Zt:a,d=function(m,g,h){return h.startsWith(r)&&h.endsWith(r)&&h.replaceAll(r,"").length>0?".".concat(t):m},c=l.slice();c.push(function(m){m.type===Wt&&m.value.includes("&")&&(m.props[0]=m.props[0].replace(Na,r).replace(n,d))}),i.prefix&&c.push(ca),c.push(sa);var f=function(m,g,h,y){g===void 0&&(g=""),h===void 0&&(h=""),y===void 0&&(y="&"),t=y,r=g,n=new RegExp("\\".concat(r,"\\b"),"g");var S=m.replace(Ia,""),E=na(h||g?"".concat(h," ").concat(g," { ").concat(S," }"):S);i.namespace&&(E=rs(E,i.namespace));var R=[];return $t(E,ia(c.concat(aa(function(b){return R.push(b)})))),R};return f.hash=l.length?l.reduce(function(m,g){return g.name||Re(15),Ae(m,g.name)},Jo).toString():"",f}var Ba=new Nt,$r=La(),ns=te.createContext({shouldForwardProp:void 0,styleSheet:Ba,stylis:$r});ns.Consumer;te.createContext(void 0);function Pr(){return O.useContext(ns)}var os=function(){function e(t,r){var n=this;this.inject=function(o,s){s===void 0&&(s=$r);var i=n.name+s.hash;o.hasNameForId(n.id,i)||o.insertRules(n.id,i,s(n.rules,i,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=r,cn(this,function(){throw Re(12,String(n.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=$r),this.name+t.hash},e}(),Fa=function(e){return e>="A"&&e<="Z"};function Un(e){for(var t="",r=0;r<e.length;r++){var n=e[r];if(r===1&&n==="-"&&e[0]==="-")return e;Fa(n)?t+="-"+n.toLowerCase():t+=n}return t.startsWith("ms-")?"-"+t:t}var ss=function(e){return e==null||e===!1||e===""},is=function(e){var t,r,n=[];for(var o in e){var s=e[o];e.hasOwnProperty(o)&&!ss(s)&&(Array.isArray(s)&&s.isCss||Ee(s)?n.push("".concat(Un(o),":"),s,";"):Qe(s)?n.push.apply(n,$e($e(["".concat(o," {")],is(s),!1),["}"],!1)):n.push("".concat(Un(o),": ").concat((t=o,(r=s)==null||typeof r=="boolean"||r===""?"":typeof r!="number"||r===0||t in la||t.startsWith("--")?String(r).trim():"".concat(r,"px")),";")))}return n};function me(e,t,r,n){if(ss(e))return[];if(an(e))return[".".concat(e.styledComponentId)];if(Ee(e)){if(!Ee(s=e)||s.prototype&&s.prototype.isReactComponent||!t)return[e];var o=e(t);return me(o,t,r,n)}var s;return e instanceof os?r?(e.inject(r,n),[e.getName(n)]):[e]:Qe(e)?is(e):Array.isArray(e)?Array.prototype.concat.apply(Zt,e.map(function(i){return me(i,t,r,n)})):[e.toString()]}function as(e){for(var t=0;t<e.length;t+=1){var r=e[t];if(Ee(r)&&!an(r))return!1}return!0}var Ma=Yo(Yt),za=function(){function e(t,r,n){this.rules=t,this.staticRulesId="",this.isStatic=(n===void 0||n.isStatic)&&as(t),this.componentId=r,this.baseHash=Ae(Ma,r),this.baseStyle=n,Nt.registerId(r)}return e.prototype.generateAndInjectStyles=function(t,r,n){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,r,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&r.hasNameForId(this.componentId,this.staticRulesId))o=Se(o,this.staticRulesId);else{var s=Pt(me(this.rules,t,r,n)),i=_r(Ae(this.baseHash,s)>>>0);if(!r.hasNameForId(this.componentId,i)){var a=n(s,".".concat(i),void 0,this.componentId);r.insertRules(this.componentId,i,a)}o=Se(o,i),this.staticRulesId=i}else{for(var l=Ae(this.baseHash,n.hash),d="",c=0;c<this.rules.length;c++){var f=this.rules[c];if(typeof f=="string")d+=f;else if(f){var m=Pt(me(f,t,r,n));l=Ae(l,m+c),d+=m}}if(d){var g=_r(l>>>0);r.hasNameForId(this.componentId,g)||r.insertRules(this.componentId,g,n(d,".".concat(g),void 0,this.componentId)),o=Se(o,g)}}return o},e}(),et=te.createContext(void 0);et.Consumer;function Ua(e){var t=te.useContext(et),r=O.useMemo(function(){return function(n,o){if(!n)throw Re(14);if(Ee(n)){var s=n(o);return s}if(Array.isArray(n)||typeof n!="object")throw Re(8);return o?U(U({},o),n):n}(e.theme,t)},[e.theme,t]);return e.children?te.createElement(et.Provider,{value:r},e.children):null}var yr={};function Ha(e,t,r){var n=an(e),o=e,s=!gr(e),i=t.attrs,a=i===void 0?Zt:i,l=t.componentId,d=l===void 0?function(x,k){var C=typeof x!="string"?"sc":In(x);yr[C]=(yr[C]||0)+1;var w="".concat(C,"-").concat(sn(Yt+C+yr[C]));return k?"".concat(k,"-").concat(w):w}(t.displayName,t.parentComponentId):l,c=t.displayName,f=c===void 0?function(x){return gr(x)?"styled.".concat(x):"Styled(".concat(ma(x),")")}(e):c,m=t.displayName&&t.componentId?"".concat(In(t.displayName),"-").concat(t.componentId):t.componentId||d,g=n&&o.attrs?o.attrs.concat(a).filter(Boolean):a,h=t.shouldForwardProp;if(n&&o.shouldForwardProp){var y=o.shouldForwardProp;if(t.shouldForwardProp){var S=t.shouldForwardProp;h=function(x,k){return y(x,k)&&S(x,k)}}else h=y}var E=new za(r,m,n?o.componentStyle:void 0);function R(x,k){return function(C,w,j){var T=C.attrs,M=C.componentStyle,$=C.defaultProps,G=C.foldedComponentIds,ue=C.styledComponentId,xe=C.target,ai=te.useContext(et),ci=Pr(),cr=C.shouldForwardProp||ci.shouldForwardProp,_n=Vo(w,ai,$)||Ie,ie=function(pt,qe,ht){for(var Ge,be=U(U({},qe),{className:void 0,theme:ht}),ur=0;ur<pt.length;ur+=1){var mt=Ee(Ge=pt[ur])?Ge(be):Ge;for(var fe in mt)be[fe]=fe==="className"?Se(be[fe],mt[fe]):fe==="style"?U(U({},be[fe]),mt[fe]):mt[fe]}return qe.className&&(be.className=Se(be.className,qe.className)),be}(T,w,_n),ft=ie.as||xe,He={};for(var de in ie)ie[de]===void 0||de[0]==="$"||de==="as"||de==="theme"&&ie.theme===_n||(de==="forwardedAs"?He.as=ie.forwardedAs:cr&&!cr(de,ft)||(He[de]=ie[de]));var An=function(pt,qe){var ht=Pr(),Ge=pt.generateAndInjectStyles(qe,ht.styleSheet,ht.stylis);return Ge}(M,ie),lr=Se(G,ue);return An&&(lr+=" "+An),ie.className&&(lr+=" "+ie.className),He[gr(ft)&&!Ko.has(ft)?"class":"className"]=lr,He.ref=j,O.createElement(ft,He)}(b,x,k)}R.displayName=f;var b=te.forwardRef(R);return b.attrs=g,b.componentStyle=E,b.displayName=f,b.shouldForwardProp=h,b.foldedComponentIds=n?Se(o.foldedComponentIds,o.styledComponentId):"",b.styledComponentId=m,b.target=n?o.target:e,Object.defineProperty(b,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(x){this._foldedDefaultProps=n?function(k){for(var C=[],w=1;w<arguments.length;w++)C[w-1]=arguments[w];for(var j=0,T=C;j<T.length;j++)Ar(k,T[j],!0);return k}({},o.defaultProps,x):x}}),cn(b,function(){return".".concat(b.styledComponentId)}),s&&es(b,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),b}function Hn(e,t){for(var r=[e[0]],n=0,o=t.length;n<o;n+=1)r.push(t[n],e[n+1]);return r}var qn=function(e){return Object.assign(e,{isCss:!0})};function q(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];if(Ee(e)||Qe(e))return qn(me(Hn(Zt,$e([e],t,!0))));var n=e;return t.length===0&&n.length===1&&typeof n[0]=="string"?me(n):qn(me(Hn(n,t)))}function Dr(e,t,r){if(r===void 0&&(r=Ie),!t)throw Re(1,t);var n=function(o){for(var s=[],i=1;i<arguments.length;i++)s[i-1]=arguments[i];return e(t,r,q.apply(void 0,$e([o],s,!1)))};return n.attrs=function(o){return Dr(e,t,U(U({},r),{attrs:Array.prototype.concat(r.attrs,o).filter(Boolean)}))},n.withConfig=function(o){return Dr(e,t,U(U({},r),o))},n}var cs=function(e){return Dr(Ha,e)},v=cs;Ko.forEach(function(e){v[e]=cs(e)});var qa=function(){function e(t,r){this.rules=t,this.componentId=r,this.isStatic=as(t),Nt.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,r,n,o){var s=o(Pt(me(this.rules,r,n,o)),""),i=this.componentId+t;n.insertRules(i,i,s)},e.prototype.removeStyles=function(t,r){r.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,r,n,o){t>2&&Nt.registerId(this.componentId+t),this.removeStyles(t,n),this.createStyles(t,r,n,o)},e}();function Ga(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];var n=q.apply(void 0,$e([e],t,!1)),o="sc-global-".concat(sn(JSON.stringify(n))),s=new qa(n,o),i=function(l){var d=Pr(),c=te.useContext(et),f=te.useRef(d.styleSheet.allocateGSInstance(o)).current;return d.styleSheet.server&&a(f,l,d.styleSheet,c,d.stylis),te.useLayoutEffect(function(){if(!d.styleSheet.server)return a(f,l,d.styleSheet,c,d.stylis),function(){return s.removeStyles(f,d.styleSheet)}},[f,l,d.styleSheet,c,d.stylis]),null};function a(l,d,c,f,m){if(s.isStatic)s.renderStyles(l,da,c,m);else{var g=U(U({},d),{theme:Vo(d,f,i.defaultProps)});s.renderStyles(l,g,c,m)}}return te.memo(i)}function Wa(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];var n=Pt(q.apply(void 0,$e([e],t,!1))),o=sn(n);return new os(o,n)}const Va={},Ka=Ga`
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
`,Fe=fi,W=di;var It=(e=>(e.DARK="dark",e.LIGHT="light",e))(It||{});const Nr={USD:{id:"USD",symbol:"$"},EUR:{id:"EUR",symbol:"€"},GPB:{id:"GPB",symbol:"£"},CHF:{id:"CHF",symbol:"₣"},UAH:{id:"UAH",symbol:"₴"}},Ir=[{id:"bitcoin",symbol:"BTC"},{id:"ethereum",symbol:"ETH"},{id:"ripple",symbol:"XRP"},{id:"bitcoin-cash",symbol:"BCH"},{id:"chainlink",symbol:"LINK"},{id:"litecoin",symbol:"LTC"},{id:"cardano",symbol:"ADA"},{id:"binancecoin",symbol:"BNB"},{id:"stellar",symbol:"XLM"},{id:"monero",symbol:"XMR"},{id:"solana",symbol:"SOL"}],Ja={btc:",.2f",eth:",.2f",bnb:",.3f",sol:",.3f",xrp:",.4f",ada:",.4f",link:",.3f",bch:",.3f",ltc:",.4f",xlm:",.5f",xmr:",.3f"},Ya=[It.DARK,It.LIGHT],Za=e=>new Promise(t=>setTimeout(t,e)),Xa=e=>e.map(([t,r,n,o,s])=>({x:t,open:r,high:n,low:o,close:s})),ls=e=>e.map(({time:t,close:r})=>({x:B.unix(t),y:r})),Qa=e=>e.reduce((t,{symbol:r,...n})=>({...t,[r]:{...n,symbol:r}}),{}),us=e=>{const t=e.toPrecision(5);return Do("~s")(Number(t))},ec=(e,t)=>Do(Ja[e])(t),tc=e=>B(e).format("MMMM Do YYYY");function rc(e){const t=O.useRef();return O.useEffect(()=>{t.current=e},[e]),t.current}function ds(e,t){return function(){return e.apply(t,arguments)}}const{toString:nc}=Object.prototype,{getPrototypeOf:ln}=Object,Xt=(e=>t=>{const r=nc.call(t);return e[r]||(e[r]=r.slice(8,-1).toLowerCase())})(Object.create(null)),oe=e=>(e=e.toLowerCase(),t=>Xt(t)===e),Qt=e=>t=>typeof t===e,{isArray:Me}=Array,tt=Qt("undefined");function oc(e){return e!==null&&!tt(e)&&e.constructor!==null&&!tt(e.constructor)&&Z(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const fs=oe("ArrayBuffer");function sc(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&fs(e.buffer),t}const ic=Qt("string"),Z=Qt("function"),ps=Qt("number"),er=e=>e!==null&&typeof e=="object",ac=e=>e===!0||e===!1,jt=e=>{if(Xt(e)!=="object")return!1;const t=ln(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},cc=oe("Date"),lc=oe("File"),uc=oe("Blob"),dc=oe("FileList"),fc=e=>er(e)&&Z(e.pipe),pc=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||Z(e.append)&&((t=Xt(e))==="formdata"||t==="object"&&Z(e.toString)&&e.toString()==="[object FormData]"))},hc=oe("URLSearchParams"),[mc,gc,yc,xc]=["ReadableStream","Request","Response","Headers"].map(oe),bc=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function at(e,t,{allOwnKeys:r=!1}={}){if(e===null||typeof e>"u")return;let n,o;if(typeof e!="object"&&(e=[e]),Me(e))for(n=0,o=e.length;n<o;n++)t.call(null,e[n],n,e);else{const s=r?Object.getOwnPropertyNames(e):Object.keys(e),i=s.length;let a;for(n=0;n<i;n++)a=s[n],t.call(null,e[a],a,e)}}function hs(e,t){t=t.toLowerCase();const r=Object.keys(e);let n=r.length,o;for(;n-- >0;)if(o=r[n],t===o.toLowerCase())return o;return null}const ms=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,gs=e=>!tt(e)&&e!==ms;function Lr(){const{caseless:e}=gs(this)&&this||{},t={},r=(n,o)=>{const s=e&&hs(t,o)||o;jt(t[s])&&jt(n)?t[s]=Lr(t[s],n):jt(n)?t[s]=Lr({},n):Me(n)?t[s]=n.slice():t[s]=n};for(let n=0,o=arguments.length;n<o;n++)arguments[n]&&at(arguments[n],r);return t}const wc=(e,t,r,{allOwnKeys:n}={})=>(at(t,(o,s)=>{r&&Z(o)?e[s]=ds(o,r):e[s]=o},{allOwnKeys:n}),e),Sc=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),vc=(e,t,r,n)=>{e.prototype=Object.create(t.prototype,n),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),r&&Object.assign(e.prototype,r)},Cc=(e,t,r,n)=>{let o,s,i;const a={};if(t=t||{},e==null)return t;do{for(o=Object.getOwnPropertyNames(e),s=o.length;s-- >0;)i=o[s],(!n||n(i,e,t))&&!a[i]&&(t[i]=e[i],a[i]=!0);e=r!==!1&&ln(e)}while(e&&(!r||r(e,t))&&e!==Object.prototype);return t},Ec=(e,t,r)=>{e=String(e),(r===void 0||r>e.length)&&(r=e.length),r-=t.length;const n=e.indexOf(t,r);return n!==-1&&n===r},Rc=e=>{if(!e)return null;if(Me(e))return e;let t=e.length;if(!ps(t))return null;const r=new Array(t);for(;t-- >0;)r[t]=e[t];return r},kc=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&ln(Uint8Array)),jc=(e,t)=>{const n=(e&&e[Symbol.iterator]).call(e);let o;for(;(o=n.next())&&!o.done;){const s=o.value;t.call(e,s[0],s[1])}},Oc=(e,t)=>{let r;const n=[];for(;(r=e.exec(t))!==null;)n.push(r);return n},Tc=oe("HTMLFormElement"),_c=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(r,n,o){return n.toUpperCase()+o}),Gn=(({hasOwnProperty:e})=>(t,r)=>e.call(t,r))(Object.prototype),Ac=oe("RegExp"),ys=(e,t)=>{const r=Object.getOwnPropertyDescriptors(e),n={};at(r,(o,s)=>{let i;(i=t(o,s,e))!==!1&&(n[s]=i||o)}),Object.defineProperties(e,n)},$c=e=>{ys(e,(t,r)=>{if(Z(e)&&["arguments","caller","callee"].indexOf(r)!==-1)return!1;const n=e[r];if(Z(n)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+r+"'")})}})},Pc=(e,t)=>{const r={},n=o=>{o.forEach(s=>{r[s]=!0})};return Me(e)?n(e):n(String(e).split(t)),r},Dc=()=>{},Nc=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t,xr="abcdefghijklmnopqrstuvwxyz",Wn="0123456789",xs={DIGIT:Wn,ALPHA:xr,ALPHA_DIGIT:xr+xr.toUpperCase()+Wn},Ic=(e=16,t=xs.ALPHA_DIGIT)=>{let r="";const{length:n}=t;for(;e--;)r+=t[Math.random()*n|0];return r};function Lc(e){return!!(e&&Z(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const Bc=e=>{const t=new Array(10),r=(n,o)=>{if(er(n)){if(t.indexOf(n)>=0)return;if(!("toJSON"in n)){t[o]=n;const s=Me(n)?[]:{};return at(n,(i,a)=>{const l=r(i,o+1);!tt(l)&&(s[a]=l)}),t[o]=void 0,s}}return n};return r(e,0)},Fc=oe("AsyncFunction"),Mc=e=>e&&(er(e)||Z(e))&&Z(e.then)&&Z(e.catch),p={isArray:Me,isArrayBuffer:fs,isBuffer:oc,isFormData:pc,isArrayBufferView:sc,isString:ic,isNumber:ps,isBoolean:ac,isObject:er,isPlainObject:jt,isReadableStream:mc,isRequest:gc,isResponse:yc,isHeaders:xc,isUndefined:tt,isDate:cc,isFile:lc,isBlob:uc,isRegExp:Ac,isFunction:Z,isStream:fc,isURLSearchParams:hc,isTypedArray:kc,isFileList:dc,forEach:at,merge:Lr,extend:wc,trim:bc,stripBOM:Sc,inherits:vc,toFlatObject:Cc,kindOf:Xt,kindOfTest:oe,endsWith:Ec,toArray:Rc,forEachEntry:jc,matchAll:Oc,isHTMLForm:Tc,hasOwnProperty:Gn,hasOwnProp:Gn,reduceDescriptors:ys,freezeMethods:$c,toObjectSet:Pc,toCamelCase:_c,noop:Dc,toFiniteNumber:Nc,findKey:hs,global:ms,isContextDefined:gs,ALPHABET:xs,generateString:Ic,isSpecCompliantForm:Lc,toJSONObject:Bc,isAsyncFn:Fc,isThenable:Mc};function _(e,t,r,n,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),r&&(this.config=r),n&&(this.request=n),o&&(this.response=o)}p.inherits(_,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:p.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const bs=_.prototype,ws={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{ws[e]={value:e}});Object.defineProperties(_,ws);Object.defineProperty(bs,"isAxiosError",{value:!0});_.from=(e,t,r,n,o,s)=>{const i=Object.create(bs);return p.toFlatObject(e,i,function(l){return l!==Error.prototype},a=>a!=="isAxiosError"),_.call(i,e.message,t,r,n,o),i.cause=e,i.name=e.name,s&&Object.assign(i,s),i};const zc=null;function Br(e){return p.isPlainObject(e)||p.isArray(e)}function Ss(e){return p.endsWith(e,"[]")?e.slice(0,-2):e}function Vn(e,t,r){return e?e.concat(t).map(function(o,s){return o=Ss(o),!r&&s?"["+o+"]":o}).join(r?".":""):t}function Uc(e){return p.isArray(e)&&!e.some(Br)}const Hc=p.toFlatObject(p,{},null,function(t){return/^is[A-Z]/.test(t)});function tr(e,t,r){if(!p.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,r=p.toFlatObject(r,{metaTokens:!0,dots:!1,indexes:!1},!1,function(y,S){return!p.isUndefined(S[y])});const n=r.metaTokens,o=r.visitor||c,s=r.dots,i=r.indexes,l=(r.Blob||typeof Blob<"u"&&Blob)&&p.isSpecCompliantForm(t);if(!p.isFunction(o))throw new TypeError("visitor must be a function");function d(h){if(h===null)return"";if(p.isDate(h))return h.toISOString();if(!l&&p.isBlob(h))throw new _("Blob is not supported. Use a Buffer instead.");return p.isArrayBuffer(h)||p.isTypedArray(h)?l&&typeof Blob=="function"?new Blob([h]):Buffer.from(h):h}function c(h,y,S){let E=h;if(h&&!S&&typeof h=="object"){if(p.endsWith(y,"{}"))y=n?y:y.slice(0,-2),h=JSON.stringify(h);else if(p.isArray(h)&&Uc(h)||(p.isFileList(h)||p.endsWith(y,"[]"))&&(E=p.toArray(h)))return y=Ss(y),E.forEach(function(b,x){!(p.isUndefined(b)||b===null)&&t.append(i===!0?Vn([y],x,s):i===null?y:y+"[]",d(b))}),!1}return Br(h)?!0:(t.append(Vn(S,y,s),d(h)),!1)}const f=[],m=Object.assign(Hc,{defaultVisitor:c,convertValue:d,isVisitable:Br});function g(h,y){if(!p.isUndefined(h)){if(f.indexOf(h)!==-1)throw Error("Circular reference detected in "+y.join("."));f.push(h),p.forEach(h,function(E,R){(!(p.isUndefined(E)||E===null)&&o.call(t,E,p.isString(R)?R.trim():R,y,m))===!0&&g(E,y?y.concat(R):[R])}),f.pop()}}if(!p.isObject(e))throw new TypeError("data must be an object");return g(e),t}function Kn(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(n){return t[n]})}function un(e,t){this._pairs=[],e&&tr(e,this,t)}const vs=un.prototype;vs.append=function(t,r){this._pairs.push([t,r])};vs.toString=function(t){const r=t?function(n){return t.call(this,n,Kn)}:Kn;return this._pairs.map(function(o){return r(o[0])+"="+r(o[1])},"").join("&")};function qc(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Cs(e,t,r){if(!t)return e;const n=r&&r.encode||qc,o=r&&r.serialize;let s;if(o?s=o(t,r):s=p.isURLSearchParams(t)?t.toString():new un(t,r).toString(n),s){const i=e.indexOf("#");i!==-1&&(e=e.slice(0,i)),e+=(e.indexOf("?")===-1?"?":"&")+s}return e}class Jn{constructor(){this.handlers=[]}use(t,r,n){return this.handlers.push({fulfilled:t,rejected:r,synchronous:n?n.synchronous:!1,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){p.forEach(this.handlers,function(n){n!==null&&t(n)})}}const Es={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Gc=typeof URLSearchParams<"u"?URLSearchParams:un,Wc=typeof FormData<"u"?FormData:null,Vc=typeof Blob<"u"?Blob:null,Kc={isBrowser:!0,classes:{URLSearchParams:Gc,FormData:Wc,Blob:Vc},protocols:["http","https","file","blob","url","data"]},dn=typeof window<"u"&&typeof document<"u",Jc=(e=>dn&&["ReactNative","NativeScript","NS"].indexOf(e)<0)(typeof navigator<"u"&&navigator.product),Yc=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",Zc=dn&&window.location.href||"http://localhost",Xc=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:dn,hasStandardBrowserEnv:Jc,hasStandardBrowserWebWorkerEnv:Yc,origin:Zc},Symbol.toStringTag,{value:"Module"})),ne={...Xc,...Kc};function Qc(e,t){return tr(e,new ne.classes.URLSearchParams,Object.assign({visitor:function(r,n,o,s){return ne.isNode&&p.isBuffer(r)?(this.append(n,r.toString("base64")),!1):s.defaultVisitor.apply(this,arguments)}},t))}function el(e){return p.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function tl(e){const t={},r=Object.keys(e);let n;const o=r.length;let s;for(n=0;n<o;n++)s=r[n],t[s]=e[s];return t}function Rs(e){function t(r,n,o,s){let i=r[s++];if(i==="__proto__")return!0;const a=Number.isFinite(+i),l=s>=r.length;return i=!i&&p.isArray(o)?o.length:i,l?(p.hasOwnProp(o,i)?o[i]=[o[i],n]:o[i]=n,!a):((!o[i]||!p.isObject(o[i]))&&(o[i]=[]),t(r,n,o[i],s)&&p.isArray(o[i])&&(o[i]=tl(o[i])),!a)}if(p.isFormData(e)&&p.isFunction(e.entries)){const r={};return p.forEachEntry(e,(n,o)=>{t(el(n),o,r,0)}),r}return null}function rl(e,t,r){if(p.isString(e))try{return(t||JSON.parse)(e),p.trim(e)}catch(n){if(n.name!=="SyntaxError")throw n}return(r||JSON.stringify)(e)}const ct={transitional:Es,adapter:["xhr","http","fetch"],transformRequest:[function(t,r){const n=r.getContentType()||"",o=n.indexOf("application/json")>-1,s=p.isObject(t);if(s&&p.isHTMLForm(t)&&(t=new FormData(t)),p.isFormData(t))return o?JSON.stringify(Rs(t)):t;if(p.isArrayBuffer(t)||p.isBuffer(t)||p.isStream(t)||p.isFile(t)||p.isBlob(t)||p.isReadableStream(t))return t;if(p.isArrayBufferView(t))return t.buffer;if(p.isURLSearchParams(t))return r.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let a;if(s){if(n.indexOf("application/x-www-form-urlencoded")>-1)return Qc(t,this.formSerializer).toString();if((a=p.isFileList(t))||n.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return tr(a?{"files[]":t}:t,l&&new l,this.formSerializer)}}return s||o?(r.setContentType("application/json",!1),rl(t)):t}],transformResponse:[function(t){const r=this.transitional||ct.transitional,n=r&&r.forcedJSONParsing,o=this.responseType==="json";if(p.isResponse(t)||p.isReadableStream(t))return t;if(t&&p.isString(t)&&(n&&!this.responseType||o)){const i=!(r&&r.silentJSONParsing)&&o;try{return JSON.parse(t)}catch(a){if(i)throw a.name==="SyntaxError"?_.from(a,_.ERR_BAD_RESPONSE,this,null,this.response):a}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:ne.classes.FormData,Blob:ne.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};p.forEach(["delete","get","head","post","put","patch"],e=>{ct.headers[e]={}});const nl=p.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),ol=e=>{const t={};let r,n,o;return e&&e.split(`
`).forEach(function(i){o=i.indexOf(":"),r=i.substring(0,o).trim().toLowerCase(),n=i.substring(o+1).trim(),!(!r||t[r]&&nl[r])&&(r==="set-cookie"?t[r]?t[r].push(n):t[r]=[n]:t[r]=t[r]?t[r]+", "+n:n)}),t},Yn=Symbol("internals");function Ve(e){return e&&String(e).trim().toLowerCase()}function Ot(e){return e===!1||e==null?e:p.isArray(e)?e.map(Ot):String(e)}function sl(e){const t=Object.create(null),r=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let n;for(;n=r.exec(e);)t[n[1]]=n[2];return t}const il=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function br(e,t,r,n,o){if(p.isFunction(n))return n.call(this,t,r);if(o&&(t=r),!!p.isString(t)){if(p.isString(n))return t.indexOf(n)!==-1;if(p.isRegExp(n))return n.test(t)}}function al(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,r,n)=>r.toUpperCase()+n)}function cl(e,t){const r=p.toCamelCase(" "+t);["get","set","has"].forEach(n=>{Object.defineProperty(e,n+r,{value:function(o,s,i){return this[n].call(this,t,o,s,i)},configurable:!0})})}class V{constructor(t){t&&this.set(t)}set(t,r,n){const o=this;function s(a,l,d){const c=Ve(l);if(!c)throw new Error("header name must be a non-empty string");const f=p.findKey(o,c);(!f||o[f]===void 0||d===!0||d===void 0&&o[f]!==!1)&&(o[f||l]=Ot(a))}const i=(a,l)=>p.forEach(a,(d,c)=>s(d,c,l));if(p.isPlainObject(t)||t instanceof this.constructor)i(t,r);else if(p.isString(t)&&(t=t.trim())&&!il(t))i(ol(t),r);else if(p.isHeaders(t))for(const[a,l]of t.entries())s(l,a,n);else t!=null&&s(r,t,n);return this}get(t,r){if(t=Ve(t),t){const n=p.findKey(this,t);if(n){const o=this[n];if(!r)return o;if(r===!0)return sl(o);if(p.isFunction(r))return r.call(this,o,n);if(p.isRegExp(r))return r.exec(o);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,r){if(t=Ve(t),t){const n=p.findKey(this,t);return!!(n&&this[n]!==void 0&&(!r||br(this,this[n],n,r)))}return!1}delete(t,r){const n=this;let o=!1;function s(i){if(i=Ve(i),i){const a=p.findKey(n,i);a&&(!r||br(n,n[a],a,r))&&(delete n[a],o=!0)}}return p.isArray(t)?t.forEach(s):s(t),o}clear(t){const r=Object.keys(this);let n=r.length,o=!1;for(;n--;){const s=r[n];(!t||br(this,this[s],s,t,!0))&&(delete this[s],o=!0)}return o}normalize(t){const r=this,n={};return p.forEach(this,(o,s)=>{const i=p.findKey(n,s);if(i){r[i]=Ot(o),delete r[s];return}const a=t?al(s):String(s).trim();a!==s&&delete r[s],r[a]=Ot(o),n[a]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const r=Object.create(null);return p.forEach(this,(n,o)=>{n!=null&&n!==!1&&(r[o]=t&&p.isArray(n)?n.join(", "):n)}),r}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,r])=>t+": "+r).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...r){const n=new this(t);return r.forEach(o=>n.set(o)),n}static accessor(t){const n=(this[Yn]=this[Yn]={accessors:{}}).accessors,o=this.prototype;function s(i){const a=Ve(i);n[a]||(cl(o,i),n[a]=!0)}return p.isArray(t)?t.forEach(s):s(t),this}}V.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);p.reduceDescriptors(V.prototype,({value:e},t)=>{let r=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(n){this[r]=n}}});p.freezeMethods(V);function wr(e,t){const r=this||ct,n=t||r,o=V.from(n.headers);let s=n.data;return p.forEach(e,function(a){s=a.call(r,s,o.normalize(),t?t.status:void 0)}),o.normalize(),s}function ks(e){return!!(e&&e.__CANCEL__)}function ze(e,t,r){_.call(this,e??"canceled",_.ERR_CANCELED,t,r),this.name="CanceledError"}p.inherits(ze,_,{__CANCEL__:!0});function js(e,t,r){const n=r.config.validateStatus;!r.status||!n||n(r.status)?e(r):t(new _("Request failed with status code "+r.status,[_.ERR_BAD_REQUEST,_.ERR_BAD_RESPONSE][Math.floor(r.status/100)-4],r.config,r.request,r))}function ll(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function ul(e,t){e=e||10;const r=new Array(e),n=new Array(e);let o=0,s=0,i;return t=t!==void 0?t:1e3,function(l){const d=Date.now(),c=n[s];i||(i=d),r[o]=l,n[o]=d;let f=s,m=0;for(;f!==o;)m+=r[f++],f=f%e;if(o=(o+1)%e,o===s&&(s=(s+1)%e),d-i<t)return;const g=c&&d-c;return g?Math.round(m*1e3/g):void 0}}function dl(e,t){let r=0;const n=1e3/t;let o=null;return function(){const i=this===!0,a=Date.now();if(i||a-r>n)return o&&(clearTimeout(o),o=null),r=a,e.apply(null,arguments);o||(o=setTimeout(()=>(o=null,r=Date.now(),e.apply(null,arguments)),n-(a-r)))}}const Lt=(e,t,r=3)=>{let n=0;const o=ul(50,250);return dl(s=>{const i=s.loaded,a=s.lengthComputable?s.total:void 0,l=i-n,d=o(l),c=i<=a;n=i;const f={loaded:i,total:a,progress:a?i/a:void 0,bytes:l,rate:d||void 0,estimated:d&&a&&c?(a-i)/d:void 0,event:s,lengthComputable:a!=null};f[t?"download":"upload"]=!0,e(f)},r)},fl=ne.hasStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");let n;function o(s){let i=s;return t&&(r.setAttribute("href",i),i=r.href),r.setAttribute("href",i),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:r.pathname.charAt(0)==="/"?r.pathname:"/"+r.pathname}}return n=o(window.location.href),function(i){const a=p.isString(i)?o(i):i;return a.protocol===n.protocol&&a.host===n.host}}():function(){return function(){return!0}}(),pl=ne.hasStandardBrowserEnv?{write(e,t,r,n,o,s){const i=[e+"="+encodeURIComponent(t)];p.isNumber(r)&&i.push("expires="+new Date(r).toGMTString()),p.isString(n)&&i.push("path="+n),p.isString(o)&&i.push("domain="+o),s===!0&&i.push("secure"),document.cookie=i.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function hl(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function ml(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function Os(e,t){return e&&!hl(t)?ml(e,t):t}const Zn=e=>e instanceof V?{...e}:e;function ke(e,t){t=t||{};const r={};function n(d,c,f){return p.isPlainObject(d)&&p.isPlainObject(c)?p.merge.call({caseless:f},d,c):p.isPlainObject(c)?p.merge({},c):p.isArray(c)?c.slice():c}function o(d,c,f){if(p.isUndefined(c)){if(!p.isUndefined(d))return n(void 0,d,f)}else return n(d,c,f)}function s(d,c){if(!p.isUndefined(c))return n(void 0,c)}function i(d,c){if(p.isUndefined(c)){if(!p.isUndefined(d))return n(void 0,d)}else return n(void 0,c)}function a(d,c,f){if(f in t)return n(d,c);if(f in e)return n(void 0,d)}const l={url:s,method:s,data:s,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,withXSRFToken:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:a,headers:(d,c)=>o(Zn(d),Zn(c),!0)};return p.forEach(Object.keys(Object.assign({},e,t)),function(c){const f=l[c]||o,m=f(e[c],t[c],c);p.isUndefined(m)&&f!==a||(r[c]=m)}),r}const Ts=e=>{const t=ke({},e);let{data:r,withXSRFToken:n,xsrfHeaderName:o,xsrfCookieName:s,headers:i,auth:a}=t;t.headers=i=V.from(i),t.url=Cs(Os(t.baseURL,t.url),e.params,e.paramsSerializer),a&&i.set("Authorization","Basic "+btoa((a.username||"")+":"+(a.password?unescape(encodeURIComponent(a.password)):"")));let l;if(p.isFormData(r)){if(ne.hasStandardBrowserEnv||ne.hasStandardBrowserWebWorkerEnv)i.setContentType(void 0);else if((l=i.getContentType())!==!1){const[d,...c]=l?l.split(";").map(f=>f.trim()).filter(Boolean):[];i.setContentType([d||"multipart/form-data",...c].join("; "))}}if(ne.hasStandardBrowserEnv&&(n&&p.isFunction(n)&&(n=n(t)),n||n!==!1&&fl(t.url))){const d=o&&s&&pl.read(s);d&&i.set(o,d)}return t},gl=typeof XMLHttpRequest<"u",yl=gl&&function(e){return new Promise(function(r,n){const o=Ts(e);let s=o.data;const i=V.from(o.headers).normalize();let{responseType:a}=o,l;function d(){o.cancelToken&&o.cancelToken.unsubscribe(l),o.signal&&o.signal.removeEventListener("abort",l)}let c=new XMLHttpRequest;c.open(o.method.toUpperCase(),o.url,!0),c.timeout=o.timeout;function f(){if(!c)return;const g=V.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders()),y={data:!a||a==="text"||a==="json"?c.responseText:c.response,status:c.status,statusText:c.statusText,headers:g,config:e,request:c};js(function(E){r(E),d()},function(E){n(E),d()},y),c=null}"onloadend"in c?c.onloadend=f:c.onreadystatechange=function(){!c||c.readyState!==4||c.status===0&&!(c.responseURL&&c.responseURL.indexOf("file:")===0)||setTimeout(f)},c.onabort=function(){c&&(n(new _("Request aborted",_.ECONNABORTED,o,c)),c=null)},c.onerror=function(){n(new _("Network Error",_.ERR_NETWORK,o,c)),c=null},c.ontimeout=function(){let h=o.timeout?"timeout of "+o.timeout+"ms exceeded":"timeout exceeded";const y=o.transitional||Es;o.timeoutErrorMessage&&(h=o.timeoutErrorMessage),n(new _(h,y.clarifyTimeoutError?_.ETIMEDOUT:_.ECONNABORTED,o,c)),c=null},s===void 0&&i.setContentType(null),"setRequestHeader"in c&&p.forEach(i.toJSON(),function(h,y){c.setRequestHeader(y,h)}),p.isUndefined(o.withCredentials)||(c.withCredentials=!!o.withCredentials),a&&a!=="json"&&(c.responseType=o.responseType),typeof o.onDownloadProgress=="function"&&c.addEventListener("progress",Lt(o.onDownloadProgress,!0)),typeof o.onUploadProgress=="function"&&c.upload&&c.upload.addEventListener("progress",Lt(o.onUploadProgress)),(o.cancelToken||o.signal)&&(l=g=>{c&&(n(!g||g.type?new ze(null,e,c):g),c.abort(),c=null)},o.cancelToken&&o.cancelToken.subscribe(l),o.signal&&(o.signal.aborted?l():o.signal.addEventListener("abort",l)));const m=ll(o.url);if(m&&ne.protocols.indexOf(m)===-1){n(new _("Unsupported protocol "+m+":",_.ERR_BAD_REQUEST,e));return}c.send(s||null)})},xl=(e,t)=>{let r=new AbortController,n;const o=function(l){if(!n){n=!0,i();const d=l instanceof Error?l:this.reason;r.abort(d instanceof _?d:new ze(d instanceof Error?d.message:d))}};let s=t&&setTimeout(()=>{o(new _(`timeout ${t} of ms exceeded`,_.ETIMEDOUT))},t);const i=()=>{e&&(s&&clearTimeout(s),s=null,e.forEach(l=>{l&&(l.removeEventListener?l.removeEventListener("abort",o):l.unsubscribe(o))}),e=null)};e.forEach(l=>l&&l.addEventListener&&l.addEventListener("abort",o));const{signal:a}=r;return a.unsubscribe=i,[a,()=>{s&&clearTimeout(s),s=null}]},bl=function*(e,t){let r=e.byteLength;if(!t||r<t){yield e;return}let n=0,o;for(;n<r;)o=n+t,yield e.slice(n,o),n=o},wl=async function*(e,t,r){for await(const n of e)yield*bl(ArrayBuffer.isView(n)?n:await r(String(n)),t)},Xn=(e,t,r,n,o)=>{const s=wl(e,t,o);let i=0;return new ReadableStream({type:"bytes",async pull(a){const{done:l,value:d}=await s.next();if(l){a.close(),n();return}let c=d.byteLength;r&&r(i+=c),a.enqueue(new Uint8Array(d))},cancel(a){return n(a),s.return()}},{highWaterMark:2})},Qn=(e,t)=>{const r=e!=null;return n=>setTimeout(()=>t({lengthComputable:r,total:e,loaded:n}))},rr=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",_s=rr&&typeof ReadableStream=="function",Fr=rr&&(typeof TextEncoder=="function"?(e=>t=>e.encode(t))(new TextEncoder):async e=>new Uint8Array(await new Response(e).arrayBuffer())),Sl=_s&&(()=>{let e=!1;const t=new Request(ne.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t})(),eo=64*1024,Mr=_s&&!!(()=>{try{return p.isReadableStream(new Response("").body)}catch{}})(),Bt={stream:Mr&&(e=>e.body)};rr&&(e=>{["text","arrayBuffer","blob","formData","stream"].forEach(t=>{!Bt[t]&&(Bt[t]=p.isFunction(e[t])?r=>r[t]():(r,n)=>{throw new _(`Response type '${t}' is not supported`,_.ERR_NOT_SUPPORT,n)})})})(new Response);const vl=async e=>{if(e==null)return 0;if(p.isBlob(e))return e.size;if(p.isSpecCompliantForm(e))return(await new Request(e).arrayBuffer()).byteLength;if(p.isArrayBufferView(e))return e.byteLength;if(p.isURLSearchParams(e)&&(e=e+""),p.isString(e))return(await Fr(e)).byteLength},Cl=async(e,t)=>{const r=p.toFiniteNumber(e.getContentLength());return r??vl(t)},El=rr&&(async e=>{let{url:t,method:r,data:n,signal:o,cancelToken:s,timeout:i,onDownloadProgress:a,onUploadProgress:l,responseType:d,headers:c,withCredentials:f="same-origin",fetchOptions:m}=Ts(e);d=d?(d+"").toLowerCase():"text";let[g,h]=o||s||i?xl([o,s],i):[],y,S;const E=()=>{!y&&setTimeout(()=>{g&&g.unsubscribe()}),y=!0};let R;try{if(l&&Sl&&r!=="get"&&r!=="head"&&(R=await Cl(c,n))!==0){let C=new Request(t,{method:"POST",body:n,duplex:"half"}),w;p.isFormData(n)&&(w=C.headers.get("content-type"))&&c.setContentType(w),C.body&&(n=Xn(C.body,eo,Qn(R,Lt(l)),null,Fr))}p.isString(f)||(f=f?"cors":"omit"),S=new Request(t,{...m,signal:g,method:r.toUpperCase(),headers:c.normalize().toJSON(),body:n,duplex:"half",withCredentials:f});let b=await fetch(S);const x=Mr&&(d==="stream"||d==="response");if(Mr&&(a||x)){const C={};["status","statusText","headers"].forEach(j=>{C[j]=b[j]});const w=p.toFiniteNumber(b.headers.get("content-length"));b=new Response(Xn(b.body,eo,a&&Qn(w,Lt(a,!0)),x&&E,Fr),C)}d=d||"text";let k=await Bt[p.findKey(Bt,d)||"text"](b,e);return!x&&E(),h&&h(),await new Promise((C,w)=>{js(C,w,{data:k,headers:V.from(b.headers),status:b.status,statusText:b.statusText,config:e,request:S})})}catch(b){throw E(),b&&b.name==="TypeError"&&/fetch/i.test(b.message)?Object.assign(new _("Network Error",_.ERR_NETWORK,e,S),{cause:b.cause||b}):_.from(b,b&&b.code,e,S)}}),zr={http:zc,xhr:yl,fetch:El};p.forEach(zr,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const to=e=>`- ${e}`,Rl=e=>p.isFunction(e)||e===null||e===!1,As={getAdapter:e=>{e=p.isArray(e)?e:[e];const{length:t}=e;let r,n;const o={};for(let s=0;s<t;s++){r=e[s];let i;if(n=r,!Rl(r)&&(n=zr[(i=String(r)).toLowerCase()],n===void 0))throw new _(`Unknown adapter '${i}'`);if(n)break;o[i||"#"+s]=n}if(!n){const s=Object.entries(o).map(([a,l])=>`adapter ${a} `+(l===!1?"is not supported by the environment":"is not available in the build"));let i=t?s.length>1?`since :
`+s.map(to).join(`
`):" "+to(s[0]):"as no adapter specified";throw new _("There is no suitable adapter to dispatch the request "+i,"ERR_NOT_SUPPORT")}return n},adapters:zr};function Sr(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new ze(null,e)}function ro(e){return Sr(e),e.headers=V.from(e.headers),e.data=wr.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),As.getAdapter(e.adapter||ct.adapter)(e).then(function(n){return Sr(e),n.data=wr.call(e,e.transformResponse,n),n.headers=V.from(n.headers),n},function(n){return ks(n)||(Sr(e),n&&n.response&&(n.response.data=wr.call(e,e.transformResponse,n.response),n.response.headers=V.from(n.response.headers))),Promise.reject(n)})}const $s="1.7.2",fn={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{fn[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}});const no={};fn.transitional=function(t,r,n){function o(s,i){return"[Axios v"+$s+"] Transitional option '"+s+"'"+i+(n?". "+n:"")}return(s,i,a)=>{if(t===!1)throw new _(o(i," has been removed"+(r?" in "+r:"")),_.ERR_DEPRECATED);return r&&!no[i]&&(no[i]=!0,console.warn(o(i," has been deprecated since v"+r+" and will be removed in the near future"))),t?t(s,i,a):!0}};function kl(e,t,r){if(typeof e!="object")throw new _("options must be an object",_.ERR_BAD_OPTION_VALUE);const n=Object.keys(e);let o=n.length;for(;o-- >0;){const s=n[o],i=t[s];if(i){const a=e[s],l=a===void 0||i(a,s,e);if(l!==!0)throw new _("option "+s+" must be "+l,_.ERR_BAD_OPTION_VALUE);continue}if(r!==!0)throw new _("Unknown option "+s,_.ERR_BAD_OPTION)}}const Ur={assertOptions:kl,validators:fn},pe=Ur.validators;class Ce{constructor(t){this.defaults=t,this.interceptors={request:new Jn,response:new Jn}}async request(t,r){try{return await this._request(t,r)}catch(n){if(n instanceof Error){let o;Error.captureStackTrace?Error.captureStackTrace(o={}):o=new Error;const s=o.stack?o.stack.replace(/^.+\n/,""):"";try{n.stack?s&&!String(n.stack).endsWith(s.replace(/^.+\n.+\n/,""))&&(n.stack+=`
`+s):n.stack=s}catch{}}throw n}}_request(t,r){typeof t=="string"?(r=r||{},r.url=t):r=t||{},r=ke(this.defaults,r);const{transitional:n,paramsSerializer:o,headers:s}=r;n!==void 0&&Ur.assertOptions(n,{silentJSONParsing:pe.transitional(pe.boolean),forcedJSONParsing:pe.transitional(pe.boolean),clarifyTimeoutError:pe.transitional(pe.boolean)},!1),o!=null&&(p.isFunction(o)?r.paramsSerializer={serialize:o}:Ur.assertOptions(o,{encode:pe.function,serialize:pe.function},!0)),r.method=(r.method||this.defaults.method||"get").toLowerCase();let i=s&&p.merge(s.common,s[r.method]);s&&p.forEach(["delete","get","head","post","put","patch","common"],h=>{delete s[h]}),r.headers=V.concat(i,s);const a=[];let l=!0;this.interceptors.request.forEach(function(y){typeof y.runWhen=="function"&&y.runWhen(r)===!1||(l=l&&y.synchronous,a.unshift(y.fulfilled,y.rejected))});const d=[];this.interceptors.response.forEach(function(y){d.push(y.fulfilled,y.rejected)});let c,f=0,m;if(!l){const h=[ro.bind(this),void 0];for(h.unshift.apply(h,a),h.push.apply(h,d),m=h.length,c=Promise.resolve(r);f<m;)c=c.then(h[f++],h[f++]);return c}m=a.length;let g=r;for(f=0;f<m;){const h=a[f++],y=a[f++];try{g=h(g)}catch(S){y.call(this,S);break}}try{c=ro.call(this,g)}catch(h){return Promise.reject(h)}for(f=0,m=d.length;f<m;)c=c.then(d[f++],d[f++]);return c}getUri(t){t=ke(this.defaults,t);const r=Os(t.baseURL,t.url);return Cs(r,t.params,t.paramsSerializer)}}p.forEach(["delete","get","head","options"],function(t){Ce.prototype[t]=function(r,n){return this.request(ke(n||{},{method:t,url:r,data:(n||{}).data}))}});p.forEach(["post","put","patch"],function(t){function r(n){return function(s,i,a){return this.request(ke(a||{},{method:t,headers:n?{"Content-Type":"multipart/form-data"}:{},url:s,data:i}))}}Ce.prototype[t]=r(),Ce.prototype[t+"Form"]=r(!0)});class pn{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let r;this.promise=new Promise(function(s){r=s});const n=this;this.promise.then(o=>{if(!n._listeners)return;let s=n._listeners.length;for(;s-- >0;)n._listeners[s](o);n._listeners=null}),this.promise.then=o=>{let s;const i=new Promise(a=>{n.subscribe(a),s=a}).then(o);return i.cancel=function(){n.unsubscribe(s)},i},t(function(s,i,a){n.reason||(n.reason=new ze(s,i,a),r(n.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const r=this._listeners.indexOf(t);r!==-1&&this._listeners.splice(r,1)}static source(){let t;return{token:new pn(function(o){t=o}),cancel:t}}}function jl(e){return function(r){return e.apply(null,r)}}function Ol(e){return p.isObject(e)&&e.isAxiosError===!0}const Hr={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Hr).forEach(([e,t])=>{Hr[t]=e});function Ps(e){const t=new Ce(e),r=ds(Ce.prototype.request,t);return p.extend(r,Ce.prototype,t,{allOwnKeys:!0}),p.extend(r,t,null,{allOwnKeys:!0}),r.create=function(o){return Ps(ke(e,o))},r}const N=Ps(ct);N.Axios=Ce;N.CanceledError=ze;N.CancelToken=pn;N.isCancel=ks;N.VERSION=$s;N.toFormData=tr;N.AxiosError=_;N.Cancel=N.CanceledError;N.all=function(t){return Promise.all(t)};N.spread=jl;N.isAxiosError=Ol;N.mergeConfig=ke;N.AxiosHeaders=V;N.formToJSON=e=>Rs(p.isHTMLForm(e)?new FormData(e):e);N.getAdapter=As.getAdapter;N.HttpStatusCode=Hr;N.default=N;const Tl=async({fromCurrency:e,toCurrency:t,timeRange:r})=>{try{const{data:n}=await N({method:"get",url:`${vi}/${e}/ohlc`,params:{vs_currency:t,days:r,x_cg_demo_api_key:$o}});return Xa(n)}catch{throw new Error("API Server error")}},_l=async({fromCurrency:e,toCurrency:t,timeRange:r})=>{try{const{data:{Data:{Data:n}}}=await N({method:"get",url:Ei,params:{api_key:Xr,fsym:e,tsym:t,aggregate:1,limit:r}});return{[e]:ls(n)}}catch{throw new Error("API Server error")}},Al=async({fromCurrency:e,toCurrency:t})=>{try{const{data:{Data:{Data:r}}}=await N({method:"get",url:Ri,params:{api_key:Xr,fsym:e,tsym:t,aggregate:1,limit:12}});return ls(r)}catch{throw new Error("API Server error")}},$l=async({toCurrency:e,fromCurrencies:t})=>{try{const{data:r}=await N({method:"get",url:Si,params:{vs_currency:e,ids:t,x_cg_demo_api_key:$o}});return r}catch{throw new Error("API Server error")}},Pl=async()=>{try{const{data:{Data:e}}=await N({method:"get",url:Ci,params:{api_key:Xr}});return e}catch{throw new Error("API Server error")}};B("2024-07-11T00:00:00.000Z"),B("2024-07-12T00:00:00.000Z"),B("2024-07-13T00:00:00.000Z"),B("2024-07-14T00:00:00.000Z"),B("2024-07-15T00:00:00.000Z"),B("2024-07-16T00:00:00.000Z"),B("2024-07-17T00:00:00.000Z"),B("2024-07-18T00:00:00.000Z"),B("2024-07-11T00:00:00.000Z"),B("2024-07-12T00:00:00.000Z"),B("2024-07-13T00:00:00.000Z"),B("2024-07-14T00:00:00.000Z"),B("2024-07-15T00:00:00.000Z"),B("2024-07-16T00:00:00.000Z"),B("2024-07-17T00:00:00.000Z"),B("2024-07-18T00:00:00.000Z");const oo=[{value:"1",label:"1D"},{value:"7",label:"1W"},{value:"30",label:"1M"}],so=[{value:"7",label:"Weekly"},{value:"30",label:"Monthly"},{value:"90",label:"Quarterly"}],io=["#7517F8","#E323FF","#4DFFDF","#4DA1FF","#F5AC6E","#60B7FF","#007AFF","#e9d4ff","#d2e031","#68822a","#f9d637","#48174d"],lt=18e5,ut=v.button.attrs(e=>({$width:e.$width==="full"?"100%":"120px"}))`
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
`,nr=q`
  display: flex;
  flex-direction: column;
`,dt=q`
  ${nr};
  align-items: center;
`,rt=q`
  ${dt};
  justify-content: center;
`,hn=q`
  display: flex;
  align-items: center;
`,ye=q`
  ${hn};
  justify-content: space-between;
`,Dl=q`
  display: flex;
  justify-content: flex-end;
`,mn=q`
  ${dt};
  position: relative;
  width: 100%;
`,Ds=q`
  ${rt};
  background-color: transparent;
  width: 100%;
`,ao=v.input`
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
`,Is=v(ut)`
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
`,gn=q`
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
`,yn=q`
  background-color: #484545;

  &:not(:checked) {
    font-family: ${({theme:e})=>e.fonts.interBold}, sans-serif;
    color: ${({theme:e})=>e.sharedColors.textSecondary};
    font-weight: 700;
  }
`,Ls=q`
  height: 100%;
  padding-left: 10px;
`,xn=q`
  align-items: flex-start;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 0 15px 0 21px;
  z-index: 100;
`,Bs=v.div.attrs(e=>({$border:e.$border==="true"?"1px solid rgba(255, 255, 255, 0.5)":"none"}))`
  background: ${({theme:e})=>e.color.boxBackground};
  border-radius: ${({theme:e})=>e.borderRadius.large};
  width: ${e=>e.$width};
  border: ${e=>e.$border};
  padding: ${e=>e.$padding};
`,Nl=Wa`
  0% {
    transform: rotateY(0deg);
  }

  50% {
    transform: rotateY(180deg);
  }

  100% {
    transform: rotateY(360deg);
  }
`,Il=v.div`
  ${Ds};
  perspective: 1000px;
  height: ${({height:e})=>e||"100vh"};
`,Ll=v.svg`
  animation: ${Nl} 1.5s linear infinite;
  background: transparent;
  width: 40px;
  height: 40px;
`;function Oe({height:e}){return u.jsx(Il,{height:e,children:u.jsx(Ll,{children:u.jsx("use",{xlinkHref:"svg/sprite.svg#loader"})})})}const Bl=v.div`
  ${Ds};
  color: ${({theme:e})=>e.color.textMain};
  height: 100%;
`;function Ue(){return u.jsx(Bl,{children:"Data is currently unavailable!"})}const Fl=v(Bs)`
  ${nr};
  position: relative;
  min-width: 240px;
  width: 100%;
  height: 155px;
  font-family: ${({theme:e})=>e.fonts.interSemiBold};
  background: ${({theme:e})=>e.color.boxInnerBackground};
  border: none;
  padding: 30px 0 15px;
  margin: 30px 10px 10px;
`,Ml=v.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50px;
  height: 50px;
`,zl=v.div`
  ${xn}
  ${ye}
  top: 30px;
  color: ${({theme:e})=>e.sharedColors.btnIcon};
  text-transform: uppercase;
`,Ul=v.svg`
  width: 13px;
  height: 17px;
  fill: ${({theme:e})=>e.sharedColors.btnIcon};
  vertical-align: top;
  margin: 0 3px;
`,Hl=v.span`
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
`,ql=v.svg`
  width: 16px;
  height: 17px;

  &.positive {
    --fill-color: #e72d04;
  }

  &.negative {
    --fill-color: #00c287;
    transform: rotate(180deg);
  }
`;function Gl({image:e,symbol:t,current_price:r,position:n}){const{ref:o,width:s=1}=Gt(),{id:i}=W(x=>x.config.exchangeCurrency),a=rc(r),[l,d]=O.useState([]),[c,f]=O.useState(!0),[m,g]=O.useState(!1),S=n==="even"?"#4DFFDF":"#E323FF",E=!m&&!c,R=O.useMemo(()=>en({positive:r<Number(a),negative:r>Number(a)}),[r,a]),b=async()=>{g(!1),f(!0);try{const x=await Al({fromCurrency:t,toCurrency:i});d(x),f(!1)}catch(x){console.error(x),f(!1),g(!0)}};return O.useEffect(()=>{b();const x=setInterval(()=>{b()},lt);return()=>{clearInterval(x)}},[t]),u.jsxs(Fl,{ref:o,children:[u.jsx(Ml,{children:u.jsx("img",{src:e,alt:t,width:"50",height:"50"})}),u.jsxs(zl,{children:[u.jsxs("span",{children:[t,u.jsx(Ul,{children:u.jsx("use",{xlinkHref:"svg/sprite.svg#arrow-right"})}),i]}),a&&u.jsx(u.Fragment,{children:u.jsx(ql,{className:R,children:u.jsx("use",{xlinkHref:"svg/sprite.svg#circled-arrow"})})})]}),u.jsx(Hl,{className:R,children:ec(t,r)}),u.jsxs("div",{children:[E&&u.jsx(Ii,{width:s,height:200,domainPadding:{y:[50,0]},color:S,children:u.jsx(No,{data:l})}),c&&u.jsx(Oe,{height:"150px"}),m&&u.jsx(Ue,{})]})]})}const Wl=v.div`
  ${hn};
  height: calc(100% - 1px);
  overflow-y: hidden;
  overflow-x: auto;
`;function Vl(){const{currenciesList:e,exchangeCurrency:t}=W(f=>f.config),{data:r,isLoading:n,error:o}=W(f=>f.cryptoData),[s,i]=O.useState({}),a=O.useCallback(f=>f%2===0?"even":"odd",[]),l=!n&&!o&&r.length,d=n&&!r.length,c=!n&&!r.length&&o;return O.useEffect(()=>{const f=new WebSocket(ki);return f.onopen=function(){const g={action:"SubAdd",subs:e.map(({symbol:h})=>`5~CCCAGG~${h==null?void 0:h.toUpperCase()}~${t.id}`)};f.send(JSON.stringify(g))},f.onmessage=function(g){const{FROMSYMBOL:h,PRICE:y}=JSON.parse(g.data);h&&y&&i(S=>{const E=h.toLowerCase(),R=S[E];return{...S,...R&&{[E]:{...R,current_price:y}}}})},()=>{f.close()}},[]),O.useEffect(()=>{i(Qa(r))},[r]),u.jsxs(Wl,{children:[l&&Object.entries(s).map(([f,m],g)=>u.jsx(Gl,{position:a(g),...m},f)),d&&u.jsx(Oe,{}),c&&u.jsx(Ue,{})]})}const Fs=()=>{const e="#868B93",t="#372C44",r="#261E35",n="rgba(0, 0, 0, 0.8)",o={axis:{stroke:e,strokeWidth:1},ticks:{stroke:e,size:4},tickLabels:{fill:e,fontSize:10}};return{chartMT:{marginTop:"15px"},axisMain:{...o,grid:{stroke:0}},axisDependent:{...o,grid:{stroke:t}},flyoutTooltipStyle:{fill:n},candleStick:{data:{fillOpacity:.7,stroke:r,strokeWidth:1}}}},Kl=v.div`
  ${Ls};
`,Jl=v.div`
  ${Dl};
  ${xn};
  padding-bottom: 18px;
`,Yl=v.select`
  ${gn};
`,Zl=v.option`
  ${yn};
`,Xl=Li("voronoi","cursor");function Ql(){const e=Fs(),{ref:t,width:r=1,height:n=1}=Gt(),{currenciesList:o,exchangeCurrency:s}=W(k=>k.config),[i,a]=O.useState({}),[l,d]=O.useState(!0),[c,f]=O.useState(!1),[m,g]=O.useState(so[0].value),h=O.useMemo(()=>Object.getOwnPropertyNames(i).length,[i]),y="#c43a31",S=!c&&!l&&!!h,E=!l&&c,R=async k=>{f(!1),d(!0);try{const C=await _l({fromCurrency:k,toCurrency:s.id,timeRange:m});a(w=>({...w,...C}))}catch(C){console.error(C),d(!1),f(!0)}},b=async()=>{d(!0);for await(const k of o.map(({symbol:C})=>Za(500).then(()=>{R(C)})));d(!1)},x=({target:{value:k}})=>{g(k)};return O.useEffect(()=>{b();const k=setInterval(()=>{b()},lt);return()=>{clearInterval(k)}},[m]),u.jsxs(Kl,{ref:t,children:[u.jsx(Jl,{children:u.jsx(Yl,{value:m,onChange:x,"aria-label":"Market period overview",children:so.map(({value:k,label:C})=>u.jsx(Zl,{value:k,children:C},k))})}),S&&u.jsxs(Io,{theme:Lo.material,domainPadding:{x:r<600?40:110,y:10},scale:{x:"time"},width:r,height:n,containerComponent:u.jsx(Xl,{style:e.chartMT,cursorDimension:"x",voronoiDimension:"x",labelComponent:u.jsx(Bi,{centerOffset:{x:80,y:10},constrainToVisibleArea:!0,dy:-50,flyoutStyle:e.flyoutTooltipStyle}),labels:({datum:k})=>{const C=Object.entries(i).find(([w,j])=>j.find(({y:T})=>T===k.y));return`${C==null?void 0:C[0].toLocaleUpperCase()}: ${s.symbol}${k.y} (${tc(k.x)})`}}),children:[u.jsx(At,{style:e.axisMain}),u.jsx(At,{dependentAxis:!0,style:e.axisDependent,tickFormat:us}),Object.entries(i).map(([k,C],w)=>u.jsx(No,{interpolation:"basis",style:{data:{stroke:io[w]||y},labels:{fill:io[w]||y}},data:C},k))]},m),l&&u.jsx(Oe,{height:`${n}px`}),E&&u.jsx(Ue,{})]})}const _e={xs:"375px",sm:"600px",md:"900px",lg:"1200px",xl:"1440px",xxl:"1920px"},I={xs:`(max-width: ${_e.xs})`,sm:`(max-width: ${_e.sm})`,md:`(max-width: ${_e.md})`,lg:`(max-width: ${_e.lg})`,xl:`(max-width: ${_e.xl})`,xxl:`(max-width: ${_e.xxl})`},eu=v.div`
  ${nr}
  height: 100%;
  padding: 10px;
  overflow: auto;
`,tu=v.article`
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

  @media ${I.sm} {
    flex-direction: column;
    min-width: 100%;
    padding: 10px;
  }

  &:last-child {
    margin-bottom: 0;
  }
`,ru=v.div`
  border-radius: ${({theme:e})=>e.borderRadius.extraSmall};
  min-width: 160px;
  max-width: 210px;
  flex-basis: 30%;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;

  @media ${I.sm} {
    /* min-width: 100%;
    max-height: 100px; */
    display: none;
  }

  img {
    border-radius: ${({theme:e})=>e.borderRadius.extraSmall};
    aspect-ratio: 10 / 9;
    transition: transform 0.3s linear;
  }
`,nu=v.div`
  ${nr};
  flex-grow: 1;
`,ou=v.h3`
  font-size: clamp(13.5px, 2vw, 16px);
  line-height: 1.1;
  color: ${({theme:e})=>e.sharedColors.searchText};
  text-shadow: 1px 1px black;
  margin-bottom: 20px;
  transition: color 0.3s ease-in-out;

  @media ${I.sm} {
    margin-bottom: 13px;
  }

  &:hover {
    color: ${({theme:e})=>e.sharedColors.accentLight};
  }
`,su=v.p`
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
`,iu=v.div`
  ${ye};
  flex-wrap: wrap;
  font-size: 0.6875rem;
`,au=v.p`
  ${ye};
  color: ${({theme:e})=>e.color.articleTime};
  margin-right: 15px;
  margin-top: 5px;
`,cu=v.div`
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
`,lu=v.span`
  display: inline-block;
  color: ${({theme:e})=>e.sharedColors.btnIcon};
  border-radius: ${({theme:e})=>e.borderRadius.medium};
  background: ${({theme:e})=>e.sharedColors.accentColor};
  padding: 5px 7px;
  margin: 2px;
`;function uu(){const[e,t]=O.useState([]),[r,n]=O.useState(!0),[o,s]=O.useState(!1),i=async()=>{s(!1),n(!0);try{const l=await Pl();t(l),n(!1)}catch(l){console.error(l),n(!1),s(!0)}},a=l=>B.unix(l).format("MMMM Do YYYY, h:mm a");return O.useEffect(()=>{i();const l=setInterval(()=>{i()},lt);return()=>{clearInterval(l)}},[]),u.jsxs(eu,{children:[e==null?void 0:e.map(({id:l,imageurl:d,title:c,url:f,categories:m,published_on:g,body:h})=>u.jsxs(tu,{children:[u.jsx(ru,{children:u.jsx("img",{src:d,width:"300",height:"300",alt:c})}),u.jsxs(nu,{children:[u.jsx(ou,{children:u.jsx("a",{href:f,target:"_blank",children:c})}),u.jsx(su,{children:h}),u.jsxs(iu,{children:[u.jsx(au,{children:a(g)}),u.jsx(cu,{children:m.split("|").map(y=>u.jsx(lu,{children:y},y))})]})]})]},l)),r&&u.jsx(Oe,{}),o&&u.jsx(Ue,{})]})}const du=v.div`
  ${Ls};
`,fu=v.div`
  ${ye};
  ${xn};
`,pu=v.div`
  display: flex;
  gap: 5px;
  margin-left: 5px;
`,hu=v(ut)`
  width: 38px;
  height: 37px;
  padding: 0;
  font-family: ${({theme:e})=>e.fonts.interBold};
  color: ${({theme:e})=>e.sharedColors.textSecondary};
  background: ${({theme:e})=>e.sharedColors.sortBackground};
  border-radius: ${({theme:e})=>e.borderRadius.extraSmall};

  &:hover {
    background: ${({theme:e})=>e.sharedColors.sortBackground};
  }

  &.active {
    color: ${({theme:e})=>e.sharedColors.btnIcon};
  }
`,mu=v.select`
  ${gn};
`,gu=v.option`
  ${yn};
`;function yu(){const e=Fs(),{ref:t,width:r=1,height:n=1}=Gt(),{currenciesList:o,exchangeCurrency:s}=W(x=>x.config),[i,a]=O.useState([]),[l,d]=O.useState(!0),[c,f]=O.useState(!1),[m,g]=O.useState(o[0].id),[h,y]=O.useState(oo[0].value),S=!c&&!l&&!!i.length,E=async()=>{f(!1),d(!0);try{const x=await Tl({fromCurrency:m,toCurrency:s.id,timeRange:h});a(x),d(!1)}catch(x){console.error(x),d(!1),f(!0)}},R=({target:{value:x}})=>{g(x)},b=x=>{const{value:k}=x.target;y(k)};return O.useEffect(()=>{E();const x=setInterval(()=>{E()},lt);return()=>{clearInterval(x)}},[m,h]),u.jsxs(du,{ref:t,children:[u.jsxs(fu,{children:[u.jsx(mu,{value:m,onChange:R,"aria-label":"Coin to currency",children:o.map(({id:x,symbol:k})=>u.jsxs(gu,{value:x,children:[k,"/",s.id]},x))}),u.jsx(pu,{children:oo.map(({value:x,label:k})=>u.jsx(hu,{value:x,className:en({active:h===x}),onClick:b,children:k},x))})]}),u.jsx("svg",{style:{position:"absolute"},children:u.jsxs("defs",{children:[u.jsxs("linearGradient",{id:"positiveGradient",x1:"0%",y1:"0%",x2:"0%",y2:"100%",children:[u.jsx("stop",{offset:"0%",stopColor:"#4DFFDF"}),u.jsx("stop",{offset:"100%",stopColor:"#4DA1FF"})]}),u.jsxs("linearGradient",{id:"negativeGradient",x1:"0%",y1:"0%",x2:"0%",y2:"100%",children:[u.jsx("stop",{offset:"0%",stopColor:"#E323FF"}),u.jsx("stop",{offset:"100%",stopColor:"#7517F8"})]})]})}),S&&u.jsxs(Io,{theme:Lo.material,domainPadding:{x:r<600?40:110},scale:{x:"time"},width:r,height:n,containerComponent:u.jsx(Fi,{style:e.chartMT}),children:[u.jsx(At,{style:e.axisMain}),u.jsx(At,{dependentAxis:!0,style:e.axisDependent,tickFormat:us}),u.jsx(Mi,{style:e.candleStick,candleColors:{positive:"url(#positiveGradient)",negative:"url(#negativeGradient)"},data:i})]},`${m}-${h}`),l&&u.jsx(Oe,{height:`${n}px`}),c&&u.jsx(Ue,{})]})}function z(e){return`Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}var xu=typeof Symbol=="function"&&Symbol.observable||"@@observable",co=xu,vr=()=>Math.random().toString(36).substring(7).split("").join("."),bu={INIT:`@@redux/INIT${vr()}`,REPLACE:`@@redux/REPLACE${vr()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${vr()}`},Ft=bu;function bn(e){if(typeof e!="object"||e===null)return!1;let t=e;for(;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t||Object.getPrototypeOf(e)===null}function Ms(e,t,r){if(typeof e!="function")throw new Error(z(2));if(typeof t=="function"&&typeof r=="function"||typeof r=="function"&&typeof arguments[3]=="function")throw new Error(z(0));if(typeof t=="function"&&typeof r>"u"&&(r=t,t=void 0),typeof r<"u"){if(typeof r!="function")throw new Error(z(1));return r(Ms)(e,t)}let n=e,o=t,s=new Map,i=s,a=0,l=!1;function d(){i===s&&(i=new Map,s.forEach((S,E)=>{i.set(E,S)}))}function c(){if(l)throw new Error(z(3));return o}function f(S){if(typeof S!="function")throw new Error(z(4));if(l)throw new Error(z(5));let E=!0;d();const R=a++;return i.set(R,S),function(){if(E){if(l)throw new Error(z(6));E=!1,d(),i.delete(R),s=null}}}function m(S){if(!bn(S))throw new Error(z(7));if(typeof S.type>"u")throw new Error(z(8));if(typeof S.type!="string")throw new Error(z(17));if(l)throw new Error(z(9));try{l=!0,o=n(o,S)}finally{l=!1}return(s=i).forEach(R=>{R()}),S}function g(S){if(typeof S!="function")throw new Error(z(10));n=S,m({type:Ft.REPLACE})}function h(){const S=f;return{subscribe(E){if(typeof E!="object"||E===null)throw new Error(z(11));function R(){const x=E;x.next&&x.next(c())}return R(),{unsubscribe:S(R)}},[co](){return this}}}return m({type:Ft.INIT}),{dispatch:m,subscribe:f,getState:c,replaceReducer:g,[co]:h}}function wu(e){Object.keys(e).forEach(t=>{const r=e[t];if(typeof r(void 0,{type:Ft.INIT})>"u")throw new Error(z(12));if(typeof r(void 0,{type:Ft.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(z(13))})}function zs(e){const t=Object.keys(e),r={};for(let s=0;s<t.length;s++){const i=t[s];typeof e[i]=="function"&&(r[i]=e[i])}const n=Object.keys(r);let o;try{wu(r)}catch(s){o=s}return function(i={},a){if(o)throw o;let l=!1;const d={};for(let c=0;c<n.length;c++){const f=n[c],m=r[f],g=i[f],h=m(g,a);if(typeof h>"u")throw a&&a.type,new Error(z(14));d[f]=h,l=l||h!==g}return l=l||n.length!==Object.keys(i).length,l?d:i}}function Mt(...e){return e.length===0?t=>t:e.length===1?e[0]:e.reduce((t,r)=>(...n)=>t(r(...n)))}function Su(...e){return t=>(r,n)=>{const o=t(r,n);let s=()=>{throw new Error(z(15))};const i={getState:o.getState,dispatch:(l,...d)=>s(l,...d)},a=e.map(l=>l(i));return s=Mt(...a)(o.dispatch),{...o,dispatch:s}}}function vu(e){return bn(e)&&"type"in e&&typeof e.type=="string"}var Us=Symbol.for("immer-nothing"),lo=Symbol.for("immer-draftable"),J=Symbol.for("immer-state");function Q(e,...t){throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var Le=Object.getPrototypeOf;function ge(e){return!!e&&!!e[J]}function le(e){var t;return e?Hs(e)||Array.isArray(e)||!!e[lo]||!!((t=e.constructor)!=null&&t[lo])||sr(e)||ir(e):!1}var Cu=Object.prototype.constructor.toString();function Hs(e){if(!e||typeof e!="object")return!1;const t=Le(e);if(t===null)return!0;const r=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return r===Object?!0:typeof r=="function"&&Function.toString.call(r)===Cu}function zt(e,t){or(e)===0?Reflect.ownKeys(e).forEach(r=>{t(r,e[r],e)}):e.forEach((r,n)=>t(n,r,e))}function or(e){const t=e[J];return t?t.type_:Array.isArray(e)?1:sr(e)?2:ir(e)?3:0}function qr(e,t){return or(e)===2?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function qs(e,t,r){const n=or(e);n===2?e.set(t,r):n===3?e.add(r):e[t]=r}function Eu(e,t){return e===t?e!==0||1/e===1/t:e!==e&&t!==t}function sr(e){return e instanceof Map}function ir(e){return e instanceof Set}function we(e){return e.copy_||e.base_}function Gr(e,t){if(sr(e))return new Map(e);if(ir(e))return new Set(e);if(Array.isArray(e))return Array.prototype.slice.call(e);const r=Hs(e);if(t===!0||t==="class_only"&&!r){const n=Object.getOwnPropertyDescriptors(e);delete n[J];let o=Reflect.ownKeys(n);for(let s=0;s<o.length;s++){const i=o[s],a=n[i];a.writable===!1&&(a.writable=!0,a.configurable=!0),(a.get||a.set)&&(n[i]={configurable:!0,writable:!0,enumerable:a.enumerable,value:e[i]})}return Object.create(Le(e),n)}else{const n=Le(e);if(n!==null&&r)return{...e};const o=Object.create(n);return Object.assign(o,e)}}function wn(e,t=!1){return ar(e)||ge(e)||!le(e)||(or(e)>1&&(e.set=e.add=e.clear=e.delete=Ru),Object.freeze(e),t&&Object.entries(e).forEach(([r,n])=>wn(n,!0))),e}function Ru(){Q(2)}function ar(e){return Object.isFrozen(e)}var ku={};function je(e){const t=ku[e];return t||Q(0,e),t}var nt;function Gs(){return nt}function ju(e,t){return{drafts_:[],parent_:e,immer_:t,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function uo(e,t){t&&(je("Patches"),e.patches_=[],e.inversePatches_=[],e.patchListener_=t)}function Wr(e){Vr(e),e.drafts_.forEach(Ou),e.drafts_=null}function Vr(e){e===nt&&(nt=e.parent_)}function fo(e){return nt=ju(nt,e)}function Ou(e){const t=e[J];t.type_===0||t.type_===1?t.revoke_():t.revoked_=!0}function po(e,t){t.unfinalizedDrafts_=t.drafts_.length;const r=t.drafts_[0];return e!==void 0&&e!==r?(r[J].modified_&&(Wr(t),Q(4)),le(e)&&(e=Ut(t,e),t.parent_||Ht(t,e)),t.patches_&&je("Patches").generateReplacementPatches_(r[J].base_,e,t.patches_,t.inversePatches_)):e=Ut(t,r,[]),Wr(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),e!==Us?e:void 0}function Ut(e,t,r){if(ar(t))return t;const n=t[J];if(!n)return zt(t,(o,s)=>ho(e,n,t,o,s,r)),t;if(n.scope_!==e)return t;if(!n.modified_)return Ht(e,n.base_,!0),n.base_;if(!n.finalized_){n.finalized_=!0,n.scope_.unfinalizedDrafts_--;const o=n.copy_;let s=o,i=!1;n.type_===3&&(s=new Set(o),o.clear(),i=!0),zt(s,(a,l)=>ho(e,n,o,a,l,r,i)),Ht(e,o,!1),r&&e.patches_&&je("Patches").generatePatches_(n,r,e.patches_,e.inversePatches_)}return n.copy_}function ho(e,t,r,n,o,s,i){if(ge(o)){const a=s&&t&&t.type_!==3&&!qr(t.assigned_,n)?s.concat(n):void 0,l=Ut(e,o,a);if(qs(r,n,l),ge(l))e.canAutoFreeze_=!1;else return}else i&&r.add(o);if(le(o)&&!ar(o)){if(!e.immer_.autoFreeze_&&e.unfinalizedDrafts_<1)return;Ut(e,o),(!t||!t.scope_.parent_)&&typeof n!="symbol"&&Object.prototype.propertyIsEnumerable.call(r,n)&&Ht(e,o)}}function Ht(e,t,r=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&wn(t,r)}function Tu(e,t){const r=Array.isArray(e),n={type_:r?1:0,scope_:t?t.scope_:Gs(),modified_:!1,finalized_:!1,assigned_:{},parent_:t,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1};let o=n,s=Sn;r&&(o=[n],s=ot);const{revoke:i,proxy:a}=Proxy.revocable(o,s);return n.draft_=a,n.revoke_=i,a}var Sn={get(e,t){if(t===J)return e;const r=we(e);if(!qr(r,t))return _u(e,r,t);const n=r[t];return e.finalized_||!le(n)?n:n===Cr(e.base_,t)?(Er(e),e.copy_[t]=Jr(n,e)):n},has(e,t){return t in we(e)},ownKeys(e){return Reflect.ownKeys(we(e))},set(e,t,r){const n=Ws(we(e),t);if(n!=null&&n.set)return n.set.call(e.draft_,r),!0;if(!e.modified_){const o=Cr(we(e),t),s=o==null?void 0:o[J];if(s&&s.base_===r)return e.copy_[t]=r,e.assigned_[t]=!1,!0;if(Eu(r,o)&&(r!==void 0||qr(e.base_,t)))return!0;Er(e),Kr(e)}return e.copy_[t]===r&&(r!==void 0||t in e.copy_)||Number.isNaN(r)&&Number.isNaN(e.copy_[t])||(e.copy_[t]=r,e.assigned_[t]=!0),!0},deleteProperty(e,t){return Cr(e.base_,t)!==void 0||t in e.base_?(e.assigned_[t]=!1,Er(e),Kr(e)):delete e.assigned_[t],e.copy_&&delete e.copy_[t],!0},getOwnPropertyDescriptor(e,t){const r=we(e),n=Reflect.getOwnPropertyDescriptor(r,t);return n&&{writable:!0,configurable:e.type_!==1||t!=="length",enumerable:n.enumerable,value:r[t]}},defineProperty(){Q(11)},getPrototypeOf(e){return Le(e.base_)},setPrototypeOf(){Q(12)}},ot={};zt(Sn,(e,t)=>{ot[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}});ot.deleteProperty=function(e,t){return ot.set.call(this,e,t,void 0)};ot.set=function(e,t,r){return Sn.set.call(this,e[0],t,r,e[0])};function Cr(e,t){const r=e[J];return(r?we(r):e)[t]}function _u(e,t,r){var o;const n=Ws(t,r);return n?"value"in n?n.value:(o=n.get)==null?void 0:o.call(e.draft_):void 0}function Ws(e,t){if(!(t in e))return;let r=Le(e);for(;r;){const n=Object.getOwnPropertyDescriptor(r,t);if(n)return n;r=Le(r)}}function Kr(e){e.modified_||(e.modified_=!0,e.parent_&&Kr(e.parent_))}function Er(e){e.copy_||(e.copy_=Gr(e.base_,e.scope_.immer_.useStrictShallowCopy_))}var Au=class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(t,r,n)=>{if(typeof t=="function"&&typeof r!="function"){const s=r;r=t;const i=this;return function(l=s,...d){return i.produce(l,c=>r.call(this,c,...d))}}typeof r!="function"&&Q(6),n!==void 0&&typeof n!="function"&&Q(7);let o;if(le(t)){const s=fo(this),i=Jr(t,void 0);let a=!0;try{o=r(i),a=!1}finally{a?Wr(s):Vr(s)}return uo(s,n),po(o,s)}else if(!t||typeof t!="object"){if(o=r(t),o===void 0&&(o=t),o===Us&&(o=void 0),this.autoFreeze_&&wn(o,!0),n){const s=[],i=[];je("Patches").generateReplacementPatches_(t,o,s,i),n(s,i)}return o}else Q(1,t)},this.produceWithPatches=(t,r)=>{if(typeof t=="function")return(i,...a)=>this.produceWithPatches(i,l=>t(l,...a));let n,o;return[this.produce(t,r,(i,a)=>{n=i,o=a}),n,o]},typeof(e==null?void 0:e.autoFreeze)=="boolean"&&this.setAutoFreeze(e.autoFreeze),typeof(e==null?void 0:e.useStrictShallowCopy)=="boolean"&&this.setUseStrictShallowCopy(e.useStrictShallowCopy)}createDraft(e){le(e)||Q(8),ge(e)&&(e=Vs(e));const t=fo(this),r=Jr(e,void 0);return r[J].isManual_=!0,Vr(t),r}finishDraft(e,t){const r=e&&e[J];(!r||!r.isManual_)&&Q(9);const{scope_:n}=r;return uo(n,t),po(void 0,n)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}applyPatches(e,t){let r;for(r=t.length-1;r>=0;r--){const o=t[r];if(o.path.length===0&&o.op==="replace"){e=o.value;break}}r>-1&&(t=t.slice(r+1));const n=je("Patches").applyPatches_;return ge(e)?n(e,t):this.produce(e,o=>n(o,t))}};function Jr(e,t){const r=sr(e)?je("MapSet").proxyMap_(e,t):ir(e)?je("MapSet").proxySet_(e,t):Tu(e,t);return(t?t.scope_:Gs()).drafts_.push(r),r}function Vs(e){return ge(e)||Q(10,e),Ks(e)}function Ks(e){if(!le(e)||ar(e))return e;const t=e[J];let r;if(t){if(!t.modified_)return t.base_;t.finalized_=!0,r=Gr(e,t.scope_.immer_.useStrictShallowCopy_)}else r=Gr(e,!0);return zt(r,(n,o)=>{qs(r,n,Ks(o))}),t&&(t.finalized_=!1),r}var Y=new Au,Js=Y.produce;Y.produceWithPatches.bind(Y);Y.setAutoFreeze.bind(Y);Y.setUseStrictShallowCopy.bind(Y);Y.applyPatches.bind(Y);Y.createDraft.bind(Y);Y.finishDraft.bind(Y);function $u(e,t=`expected a function, instead received ${typeof e}`){if(typeof e!="function")throw new TypeError(t)}function Pu(e,t=`expected an object, instead received ${typeof e}`){if(typeof e!="object")throw new TypeError(t)}function Du(e,t="expected all items to be functions, instead received the following types: "){if(!e.every(r=>typeof r=="function")){const r=e.map(n=>typeof n=="function"?`function ${n.name||"unnamed"}()`:typeof n).join(", ");throw new TypeError(`${t}[${r}]`)}}var mo=e=>Array.isArray(e)?e:[e];function Nu(e){const t=Array.isArray(e[0])?e[0]:e;return Du(t,"createSelector expects all input-selectors to be functions, but received the following types: "),t}function Iu(e,t){const r=[],{length:n}=e;for(let o=0;o<n;o++)r.push(e[o].apply(null,t));return r}var Lu=class{constructor(e){this.value=e}deref(){return this.value}},Bu=typeof WeakRef<"u"?WeakRef:Lu,Fu=0,go=1;function xt(){return{s:Fu,v:void 0,o:null,p:null}}function vn(e,t={}){let r=xt();const{resultEqualityCheck:n}=t;let o,s=0;function i(){var f;let a=r;const{length:l}=arguments;for(let m=0,g=l;m<g;m++){const h=arguments[m];if(typeof h=="function"||typeof h=="object"&&h!==null){let y=a.o;y===null&&(a.o=y=new WeakMap);const S=y.get(h);S===void 0?(a=xt(),y.set(h,a)):a=S}else{let y=a.p;y===null&&(a.p=y=new Map);const S=y.get(h);S===void 0?(a=xt(),y.set(h,a)):a=S}}const d=a;let c;if(a.s===go)c=a.v;else if(c=e.apply(null,arguments),s++,n){const m=((f=o==null?void 0:o.deref)==null?void 0:f.call(o))??o;m!=null&&n(m,c)&&(c=m,s!==0&&s--),o=typeof c=="object"&&c!==null||typeof c=="function"?new Bu(c):c}return d.s=go,d.v=c,c}return i.clearCache=()=>{r=xt(),i.resetResultsCount()},i.resultsCount=()=>s,i.resetResultsCount=()=>{s=0},i}function Ys(e,...t){const r=typeof e=="function"?{memoize:e,memoizeOptions:t}:e,n=(...o)=>{let s=0,i=0,a,l={},d=o.pop();typeof d=="object"&&(l=d,d=o.pop()),$u(d,`createSelector expects an output function after the inputs, but received: [${typeof d}]`);const c={...r,...l},{memoize:f,memoizeOptions:m=[],argsMemoize:g=vn,argsMemoizeOptions:h=[],devModeChecks:y={}}=c,S=mo(m),E=mo(h),R=Nu(o),b=f(function(){return s++,d.apply(null,arguments)},...S),x=g(function(){i++;const C=Iu(R,arguments);return a=b.apply(null,C),a},...E);return Object.assign(x,{resultFunc:d,memoizedResultFunc:b,dependencies:R,dependencyRecomputations:()=>i,resetDependencyRecomputations:()=>{i=0},lastResult:()=>a,recomputations:()=>s,resetRecomputations:()=>{s=0},memoize:f,argsMemoize:g})};return Object.assign(n,{withTypes:()=>n}),n}var Mu=Ys(vn),zu=Object.assign((e,t=Mu)=>{Pu(e,`createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof e}`);const r=Object.keys(e),n=r.map(s=>e[s]);return t(n,(...s)=>s.reduce((i,a,l)=>(i[r[l]]=a,i),{}))},{withTypes:()=>zu});function Zs(e){return({dispatch:r,getState:n})=>o=>s=>typeof s=="function"?s(r,n,e):o(s)}var Uu=Zs(),Hu=Zs,qu=(...e)=>{const t=Ys(...e),r=Object.assign((...n)=>{const o=t(...n),s=(i,...a)=>o(ge(i)?Vs(i):i,...a);return Object.assign(s,o),s},{withTypes:()=>r});return r};qu(vn);var Gu=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?Mt:Mt.apply(null,arguments)},Wu=e=>e&&typeof e.match=="function";function ce(e,t){function r(...n){if(t){let o=t(...n);if(!o)throw new Error(H(0));return{type:e,payload:o.payload,..."meta"in o&&{meta:o.meta},..."error"in o&&{error:o.error}}}return{type:e,payload:n[0]}}return r.toString=()=>`${e}`,r.type=e,r.match=n=>vu(n)&&n.type===e,r}var Xs=class Ze extends Array{constructor(...t){super(...t),Object.setPrototypeOf(this,Ze.prototype)}static get[Symbol.species](){return Ze}concat(...t){return super.concat.apply(this,t)}prepend(...t){return t.length===1&&Array.isArray(t[0])?new Ze(...t[0].concat(this)):new Ze(...t.concat(this))}};function yo(e){return le(e)?Js(e,()=>{}):e}function Yr(e,t,r){if(e.has(t)){let o=e.get(t);return r.update&&(o=r.update(o,t,e),e.set(t,o)),o}if(!r.insert)throw new Error(H(10));const n=r.insert(t,e);return e.set(t,n),n}function Vu(e){return typeof e=="boolean"}var Ku=()=>function(t){const{thunk:r=!0,immutableCheck:n=!0,serializableCheck:o=!0,actionCreatorCheck:s=!0}=t??{};let i=new Xs;return r&&(Vu(r)?i.push(Uu):i.push(Hu(r.extraArgument))),i},Ju="RTK_autoBatch",Qs=e=>t=>{setTimeout(t,e)},Yu=typeof window<"u"&&window.requestAnimationFrame?window.requestAnimationFrame:Qs(10),Zu=(e={type:"raf"})=>t=>(...r)=>{const n=t(...r);let o=!0,s=!1,i=!1;const a=new Set,l=e.type==="tick"?queueMicrotask:e.type==="raf"?Yu:e.type==="callback"?e.queueNotification:Qs(e.timeout),d=()=>{i=!1,s&&(s=!1,a.forEach(c=>c()))};return Object.assign({},n,{subscribe(c){const f=()=>o&&c(),m=n.subscribe(f);return a.add(c),()=>{m(),a.delete(c)}},dispatch(c){var f;try{return o=!((f=c==null?void 0:c.meta)!=null&&f[Ju]),s=!o,s&&(i||(i=!0,l(d))),n.dispatch(c)}finally{o=!0}}})},Xu=e=>function(r){const{autoBatch:n=!0}=r??{};let o=new Xs(e);return n&&o.push(Zu(typeof n=="object"?n:void 0)),o},Qu=!0;function ed(e){const t=Ku(),{reducer:r=void 0,middleware:n,devTools:o=!0,preloadedState:s=void 0,enhancers:i=void 0}=e||{};let a;if(typeof r=="function")a=r;else if(bn(r))a=zs(r);else throw new Error(H(1));let l;typeof n=="function"?l=n(t):l=t();let d=Mt;o&&(d=Gu({trace:!Qu,...typeof o=="object"&&o}));const c=Su(...l),f=Xu(c);let m=typeof i=="function"?i(f):f();const g=d(...m);return Ms(a,s,g)}function ei(e){const t={},r=[];let n;const o={addCase(s,i){const a=typeof s=="string"?s:s.type;if(!a)throw new Error(H(28));if(a in t)throw new Error(H(29));return t[a]=i,o},addMatcher(s,i){return r.push({matcher:s,reducer:i}),o},addDefaultCase(s){return n=s,o}};return e(o),[t,r,n]}function td(e){return typeof e=="function"}function rd(e,t){let[r,n,o]=ei(t),s;if(td(e))s=()=>yo(e());else{const a=yo(e);s=()=>a}function i(a=s(),l){let d=[r[l.type],...n.filter(({matcher:c})=>c(l)).map(({reducer:c})=>c)];return d.filter(c=>!!c).length===0&&(d=[o]),d.reduce((c,f)=>{if(f)if(ge(c)){const g=f(c,l);return g===void 0?c:g}else{if(le(c))return Js(c,m=>f(m,l));{const m=f(c,l);if(m===void 0){if(c===null)return c;throw new Error(H(9))}return m}}return c},a)}return i.getInitialState=s,i}var nd=(e,t)=>Wu(e)?e.match(t):e(t);function od(...e){return t=>e.some(r=>nd(r,t))}var sd="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",Cn=(e=21)=>{let t="",r=e;for(;r--;)t+=sd[Math.random()*64|0];return t},id=["name","message","stack","code"],Rr=class{constructor(e,t){dr(this,"_type");this.payload=e,this.meta=t}},xo=class{constructor(e,t){dr(this,"_type");this.payload=e,this.meta=t}},ad=e=>{if(typeof e=="object"&&e!==null){const t={};for(const r of id)typeof e[r]=="string"&&(t[r]=e[r]);return t}return{message:String(e)}},cd=(()=>{function e(t,r,n){const o=ce(t+"/fulfilled",(l,d,c,f)=>({payload:l,meta:{...f||{},arg:c,requestId:d,requestStatus:"fulfilled"}})),s=ce(t+"/pending",(l,d,c)=>({payload:void 0,meta:{...c||{},arg:d,requestId:l,requestStatus:"pending"}})),i=ce(t+"/rejected",(l,d,c,f,m)=>({payload:f,error:(n&&n.serializeError||ad)(l||"Rejected"),meta:{...m||{},arg:c,requestId:d,rejectedWithValue:!!f,requestStatus:"rejected",aborted:(l==null?void 0:l.name)==="AbortError",condition:(l==null?void 0:l.name)==="ConditionError"}}));function a(l){return(d,c,f)=>{const m=n!=null&&n.idGenerator?n.idGenerator(l):Cn(),g=new AbortController;let h,y;function S(R){y=R,g.abort()}const E=async function(){var x,k;let R;try{let C=(x=n==null?void 0:n.condition)==null?void 0:x.call(n,l,{getState:c,extra:f});if(ud(C)&&(C=await C),C===!1||g.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};const w=new Promise((j,T)=>{h=()=>{T({name:"AbortError",message:y||"Aborted"})},g.signal.addEventListener("abort",h)});d(s(m,l,(k=n==null?void 0:n.getPendingMeta)==null?void 0:k.call(n,{requestId:m,arg:l},{getState:c,extra:f}))),R=await Promise.race([w,Promise.resolve(r(l,{dispatch:d,getState:c,extra:f,requestId:m,signal:g.signal,abort:S,rejectWithValue:(j,T)=>new Rr(j,T),fulfillWithValue:(j,T)=>new xo(j,T)})).then(j=>{if(j instanceof Rr)throw j;return j instanceof xo?o(j.payload,m,l,j.meta):o(j,m,l)})])}catch(C){R=C instanceof Rr?i(null,m,l,C.payload,C.meta):i(C,m,l)}finally{h&&g.signal.removeEventListener("abort",h)}return n&&!n.dispatchConditionRejection&&i.match(R)&&R.meta.condition||d(R),R}();return Object.assign(E,{abort:S,requestId:m,arg:l,unwrap(){return E.then(ld)}})}}return Object.assign(a,{pending:s,rejected:i,fulfilled:o,settled:od(i,o),typePrefix:t})}return e.withTypes=()=>e,e})();function ld(e){if(e.meta&&e.meta.rejectedWithValue)throw e.payload;if(e.error)throw e.error;return e.payload}function ud(e){return e!==null&&typeof e=="object"&&typeof e.then=="function"}var dd=Symbol.for("rtk-slice-createasyncthunk");function fd(e,t){return`${e}/${t}`}function pd({creators:e}={}){var r;const t=(r=e==null?void 0:e.asyncThunk)==null?void 0:r[dd];return function(o){const{name:s,reducerPath:i=s}=o;if(!s)throw new Error(H(11));typeof process<"u";const a=(typeof o.reducers=="function"?o.reducers(md()):o.reducers)||{},l=Object.keys(a),d={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},c={addCase(b,x){const k=typeof b=="string"?b:b.type;if(!k)throw new Error(H(12));if(k in d.sliceCaseReducersByType)throw new Error(H(13));return d.sliceCaseReducersByType[k]=x,c},addMatcher(b,x){return d.sliceMatchers.push({matcher:b,reducer:x}),c},exposeAction(b,x){return d.actionCreators[b]=x,c},exposeCaseReducer(b,x){return d.sliceCaseReducersByName[b]=x,c}};l.forEach(b=>{const x=a[b],k={reducerName:b,type:fd(s,b),createNotation:typeof o.reducers=="function"};yd(x)?bd(k,x,c,t):gd(k,x,c)});function f(){const[b={},x=[],k=void 0]=typeof o.extraReducers=="function"?ei(o.extraReducers):[o.extraReducers],C={...b,...d.sliceCaseReducersByType};return rd(o.initialState,w=>{for(let j in C)w.addCase(j,C[j]);for(let j of d.sliceMatchers)w.addMatcher(j.matcher,j.reducer);for(let j of x)w.addMatcher(j.matcher,j.reducer);k&&w.addDefaultCase(k)})}const m=b=>b,g=new Map;let h;function y(b,x){return h||(h=f()),h(b,x)}function S(){return h||(h=f()),h.getInitialState()}function E(b,x=!1){function k(w){let j=w[b];return typeof j>"u"&&x&&(j=S()),j}function C(w=m){const j=Yr(g,x,{insert:()=>new WeakMap});return Yr(j,w,{insert:()=>{const T={};for(const[M,$]of Object.entries(o.selectors??{}))T[M]=hd($,w,S,x);return T}})}return{reducerPath:b,getSelectors:C,get selectors(){return C(k)},selectSlice:k}}const R={name:s,reducer:y,actions:d.actionCreators,caseReducers:d.sliceCaseReducersByName,getInitialState:S,...E(i),injectInto(b,{reducerPath:x,...k}={}){const C=x??i;return b.inject({reducerPath:C,reducer:y},k),{...R,...E(C,!0)}}};return R}}function hd(e,t,r,n){function o(s,...i){let a=t(s);return typeof a>"u"&&n&&(a=r()),e(a,...i)}return o.unwrapped=e,o}var En=pd();function md(){function e(t,r){return{_reducerDefinitionType:"asyncThunk",payloadCreator:t,...r}}return e.withTypes=()=>e,{reducer(t){return Object.assign({[t.name](...r){return t(...r)}}[t.name],{_reducerDefinitionType:"reducer"})},preparedReducer(t,r){return{_reducerDefinitionType:"reducerWithPrepare",prepare:t,reducer:r}},asyncThunk:e}}function gd({type:e,reducerName:t,createNotation:r},n,o){let s,i;if("reducer"in n){if(r&&!xd(n))throw new Error(H(17));s=n.reducer,i=n.prepare}else s=n;o.addCase(e,s).exposeCaseReducer(t,s).exposeAction(t,i?ce(e,i):ce(e))}function yd(e){return e._reducerDefinitionType==="asyncThunk"}function xd(e){return e._reducerDefinitionType==="reducerWithPrepare"}function bd({type:e,reducerName:t},r,n,o){if(!o)throw new Error(H(18));const{payloadCreator:s,fulfilled:i,pending:a,rejected:l,settled:d,options:c}=r,f=o(e,s,c);n.exposeAction(t,f),i&&n.addCase(f.fulfilled,i),a&&n.addCase(f.pending,a),l&&n.addCase(f.rejected,l),d&&n.addMatcher(f.settled,d),n.exposeCaseReducer(t,{fulfilled:i||bt,pending:a||bt,rejected:l||bt,settled:d||bt})}function bt(){}var wd=(e,t)=>{if(typeof e!="function")throw new Error(H(32))},Rn="listenerMiddleware",Sd=e=>{let{type:t,actionCreator:r,matcher:n,predicate:o,effect:s}=e;if(t)o=ce(t).match;else if(r)t=r.type,o=r.match;else if(n)o=n;else if(!o)throw new Error(H(21));return wd(s),{predicate:o,type:t,effect:s}},vd=Object.assign(e=>{const{type:t,predicate:r,effect:n}=Sd(e);return{id:Cn(),effect:n,type:t,predicate:r,pending:new Set,unsubscribe:()=>{throw new Error(H(22))}}},{withTypes:()=>vd}),Cd=Object.assign(ce(`${Rn}/add`),{withTypes:()=>Cd});ce(`${Rn}/removeAll`);var Ed=Object.assign(ce(`${Rn}/remove`),{withTypes:()=>Ed}),Rd=e=>"reducerPath"in e&&typeof e.reducerPath=="string",kd=e=>e.flatMap(t=>Rd(t)?[[t.reducerPath,t.reducer]]:Object.entries(t)),kn=Symbol.for("rtk-state-proxy-original"),jd=e=>!!e&&!!e[kn],Od=new WeakMap,Td=(e,t)=>Yr(Od,e,{insert:()=>new Proxy(e,{get:(r,n,o)=>{if(n===kn)return r;const s=Reflect.get(r,n,o);if(typeof s>"u"){const i=t[n.toString()];if(i){const a=i(void 0,{type:Cn()});if(typeof a>"u")throw new Error(H(24));return a}}return s}})}),_d=e=>{if(!jd(e))throw new Error(H(25));return e[kn]},Ad=(e={})=>e;function $d(...e){const t=Object.fromEntries(kd(e)),r=()=>Object.keys(t).length?zs(t):Ad;let n=r();function o(a,l){return n(a,l)}o.withLazyLoadedSlices=()=>o;const s=(a,l={})=>{const{reducerPath:d,reducer:c}=a,f=t[d];return!l.overrideExisting&&f&&f!==c?(typeof process<"u",o):(t[d]=c,n=r(),o)},i=Object.assign(function(l,d){return function(f,...m){return l(Td(d?d(f,...m):f,t),...m)}},{original:_d});return Object.assign(o,{inject:s,selector:i})}function H(e){return`Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}const Pd={data:[],isLoading:!0,error:!1},Tt=cd("cryptoData/general",async({fromCurrencies:e,toCurrency:t})=>await $l({fromCurrencies:e,toCurrency:t})),jn=En({name:"cryptoData",initialState:Pd,reducers:{setData:(e,t)=>{e.data=t.payload,e.isLoading=!1}},extraReducers:e=>{e.addCase(Tt.pending,t=>{t.isLoading=!0}),e.addCase(Tt.fulfilled,(t,r)=>{t.isLoading=!1,t.data=r.payload}),e.addCase(Tt.rejected,t=>{t.isLoading=!1,t.error=!0})}});jn.actions;jn.reducer;const Dd=v.svg`
  fill: ${({theme:e})=>e.sharedColors.statusDown};
  width: 12px;
  height: 7px;
  @media ${I.sm} {
    margin-right: 3px;
  }

  &.up {
    fill: ${({theme:e})=>e.sharedColors.stausUp};
    transform: rotate(180deg);
  }
`,Nd=v.div`
  display: grid;
  grid-template-columns: 3fr 2fr 1fr;
  grid-auto-rows: 48px;
  height: 100%;
  font-family: ${({theme:e})=>e.fonts.interRegular};
  font-size: 0.75rem;
  color: ${({theme:e})=>e.color.textMain};
  overflow: auto;

  @media ${I.sm} {
    grid-auto-rows: 35px;
  }

  & > div {
    ${hn};
    line-height: 0.714;
    padding: 15px 24px;

    @media ${I.sm} {
      padding: 0 0 0 10px;
    }
  }
`,kr=v.h3`
  position: sticky;
  top: 0;
  font-size: 0.625rem;
  color: ${({theme:e})=>e.color.trendHeading};
  background: ${({theme:e})=>e.color.boxBackground};
  white-space: nowrap;
  padding: 20px 24px;
  z-index: 1;

  @media ${I.sm} {
    padding: 0 0 0 10px;
  }
`,bo=v.div`
  grid-column: 1/-1;
  text-align: center;
`,Id=v.div`
  text-transform: uppercase;

  span {
    color: ${({theme:e})=>e.sharedColors.trendCurrencyName};
    text-transform: capitalize;
    margin-left: 5px;
  }
`,Ld=v.div`
  color: ${({theme:e})=>e.sharedColors.price};
`,Bd=v.div`
  ${ye};
  max-width: 130px;
  width: 100%;

  span {
    margin-left: 15px;

    @media ${I.sm} {
      margin-left: 5px;
    }
  }
`,Fd=e=>u.jsx(Dd,{className:en({up:Math.sign(e)===-1}),children:u.jsx("use",{xlinkHref:"svg/sprite.svg#angle"})});function Md(){const{ref:e,height:t=1}=Gt(),r=Fe(),{currenciesList:n,exchangeCurrency:o}=W(g=>g.config),{data:s,isLoading:i,error:a}=W(g=>g.cryptoData),l=O.useMemo(()=>n.map(({id:g})=>g).join(","),[n]),d=!i&&!a,c=!i&&a,f=i&&!a,m=O.useCallback(()=>r(Tt({fromCurrencies:l,toCurrency:o.id})),[l,o.id]);return O.useEffect(()=>{m();const g=setInterval(()=>{m()},lt);return()=>{clearInterval(g)}},[m]),u.jsxs(Nd,{ref:e,children:[u.jsx(kr,{children:"Name"}),u.jsxs(kr,{children:["Average price(",o.symbol,")"]}),u.jsx(kr,{children:"24h Change(%)"}),d&&s.map(({id:g,name:h,symbol:y,current_price:S,price_change_percentage_24h:E})=>u.jsxs(O.Fragment,{children:[u.jsxs(Id,{children:[y," ",u.jsx("span",{children:h})]}),u.jsx(Ld,{children:S}),u.jsxs(Bd,{children:[Math.abs(E),u.jsx("span",{children:Fd(E)})]})]},g)),f&&u.jsx(bo,{children:u.jsx(Oe,{height:`${t/1.5}px`})}),c&&u.jsx(bo,{children:u.jsx(Ue,{})})]})}const Ke={minHeight:240,group:"shared",cached:!1},Je={minWidth:315,cached:!0},ee=(e=!0)=>({news:{...Ke,...e&&Je,id:"news",title:"News",content:u.jsx(uu,{})},history:{...Ke,...e&&Je,id:"history",title:"Trade history",content:u.jsx(yu,{})},cryptocurrencies:{...Ke,...e&&Je,id:"cryptocurrencies",title:"Cryptocurrencies",content:u.jsx(Vl,{})},overview:{...Ke,...e&&Je,id:"overview",title:"Market overview",content:u.jsx(Ql,{})},trends:{...Ke,...e&&Je,id:"trends",title:"Trends 24h",content:u.jsx(Md,{})}}),wo={dockbox:{mode:"vertical",children:[{mode:"horizontal",size:260,children:[{tabs:[ee().news]},{tabs:[ee().history]}]},{size:180,tabs:[ee().cryptocurrencies]},{size:260,mode:"horizontal",children:[{tabs:[ee().overview]},{mode:"horizontal",tabs:[ee().trends]}]}]}},So={dockbox:{mode:"vertical",children:[{tabs:[ee(!1).trends,ee(!1).news,ee(!1).history,ee(!1).overview,ee(!1).cryptocurrencies]}]}},vo={currenciesList:Ir.slice(0,6),exchangeCurrency:Nr.USD,theme:It.DARK,serializedDockbox:null,persistentDockbox:!1},On=En({name:"config",initialState:vo,reducers:{setCurrenciesList:(e,t)=>{e.currenciesList=t.payload},setExchangeCurrency:(e,t)=>{e.exchangeCurrency=t.payload},setTheme:(e,t)=>{e.theme=t.payload},setSerializedDockbox:(e,t)=>{e.serializedDockbox=t.payload},setPersistentDocbox:(e,t)=>{e.persistentDockbox=t.payload},resetConfig:()=>vo}}),{setCurrenciesList:ti,setExchangeCurrency:ri,setTheme:ni,setSerializedDockbox:st,setPersistentDocbox:oi,resetConfig:zd}=On.actions;On.reducer;function si(){return zi()<=1200}function Ud(){const e=si(),t=e?So:wo,r=Fe(),n=W(f=>f.config.serializedDockbox),o=JSON.parse(String(n)),[s,i]=O.useState(o||t),a=ee(!e),l=O.useMemo(()=>({shared:{floatable:!1,maximizable:!e,disableDock:e}}),[e]),d=O.useCallback(({id:f})=>a[f],[a]),c=O.useCallback(f=>{i(f),r(st(JSON.stringify(f)))},[]);return O.useEffect(()=>{if(e)i(So);else{const f=o||wo;i(f),r(st(JSON.stringify(f)))}},[e]),O.useEffect(()=>{n||i(t)},[n]),{dockbox:s,groups:l,loadTab:d,onDockboxChange:c}}const Hd=v.section`
  height: 100%;
  width: 100%;

  & .dock-layout {
    /* min-height: calc(100vh - 100px); */
    /* height: 100%; */
    margin: 0 30px;
    overflow: auto;

    @media ${I.lg} {
      margin-left: 20px;
      margin-right: 20px;
    }
    @media ${I.sm} {
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
`,qd={position:"absolute",left:0,top:0,right:0,bottom:20};function Gd(){const{dockbox:e,groups:t,loadTab:r,onDockboxChange:n}=Ud();return u.jsx(Hd,{className:"dockLayoutContainer",children:u.jsx(Ni,{layout:e,loadTab:r,onLayoutChange:n,groups:t,style:qd},`${t.shared.maximizable}`)})}const Wd=v.main`
  ${mn}
  height: 100vh;
`,Vd=v.section`
  ${mn};
  justify-content: center;
  height: 100%;
  color: ${({theme:e})=>e.sharedColors.searchText};
  padding: 10px;
  overflow: hidden;

  p {
    font-size: 2.5rem;
    margin-bottom: 40px;
  }
`,Kd=v.span`
  font-size: 6.25rem;
`,Jd=v.img`
  position: absolute;
  top: 21%;
  left: 51%;
  max-width: 280px;
  max-height: 260px;
  z-index: -1;
`;function Yd(){const e=it(),t=()=>{e("/")};return u.jsx(Wd,{children:u.jsxs(Vd,{children:[u.jsx(Kd,{children:"404"}),u.jsx("p",{children:"Page not found!"}),u.jsx(Jd,{src:"images/404.webp",alt:"Broken bitcoin",width:"280",height:"260"}),u.jsxs(Is,{type:"button",onClick:t,children:[u.jsx("svg",{children:u.jsx("use",{xlinkHref:"svg/sprite.svg#home"})}),u.jsx("span",{children:"Home"})]})]})})}const Zd={user:null},Tn=En({name:"auth",initialState:Zd,reducers:{login:(e,t)=>{e.user=t.payload},logout:e=>{e.user=null}}}),{login:_t,logout:Xd}=Tn.actions;Tn.reducer;function Zr(e){return u.jsx(ut,{...e})}const Qd=v.header`
  ${ye};
  width: 100%;
  max-height: 100px;
  padding: 30px;

  @media ${I.lg} {
    max-height: 80px;
    padding: 20px;
  }
  @media ${I.sm} {
    padding-left: 10px;
    padding-right: 10px;
  }
`,ef=v.div`
  ${ye}
  gap: 12px;
`,tf=v.div`
  color: ${({theme:e})=>e.sharedColors.btnIcon};
  padding: 5px;

  & > div {
    ${rt};
    width: 47px;
    height: 47px;
    border-radius: ${({theme:e})=>e.borderRadius.circle};
    background: ${({theme:e})=>e.color.userProfile};
    cursor: pointer;
  }
`;function rf(){var a,l;const e=it(),t=Ao(),{user:r}=W(d=>d.auth),n=t.pathname==="/",o=t.pathname==="/settings",s=((a=r==null?void 0:r.displayName)==null?void 0:a.split(/\s+/).map(d=>d.substring(0,1).toUpperCase()).join(""))||((l=r==null?void 0:r.email)==null?void 0:l.substring(0,1).toUpperCase()),i=()=>{e("/auth")};return u.jsxs(Qd,{children:[n&&u.jsx("span",{children:"Home"}),o&&u.jsx("span",{children:"Settings"}),u.jsx(ef,{children:r?u.jsx(tf,{children:u.jsx("div",{children:s})}):u.jsx(Zr,{onClick:i,type:"button",children:u.jsx("span",{children:"Sign in"})})})]})}const nf=v.nav`
  ${dt};
  gap: 30px;
`,Co=v(pi)`
  border-radius: ${({theme:e})=>e.borderRadius.small};
  transition: background 0.2s ease-in;

  &.active,
  &:hover {
    ${rt};
    background: ${({theme:e})=>e.color.iconActiveBackground};

    svg {
      fill: ${({theme:e})=>e.color.navBarSvgActive};
    }
  }

  svg {
    ${Ns};
  }

  span {
    ${rt};
    width: 61px;
    height: 58px;
    text-align: center;

    @media ${I.lg} {
      width: 51px;
      height: 48px;
    }

    @media ${I.sm} {
      width: 41px;
      height: 38px;
    }
  }
`;function of(){const{user:e}=W(t=>t.auth);return u.jsxs(nf,{children:[u.jsx(Co,{to:"/","aria-label":"Home page",children:u.jsx("span",{children:u.jsx("svg",{children:u.jsx("use",{xlinkHref:"svg/sprite.svg#home"})})})}),e&&u.jsx(Co,{to:"/settings","aria-label":"Settings",children:u.jsx("span",{children:u.jsx("svg",{children:u.jsx("use",{xlinkHref:"svg/sprite.svg#settings"})})})})]})}const sf=v.div`
  ${dt};
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

  @media ${I.lg} {
    width: 80px;
    padding: 25px 10px 20px;
  }

  @media ${I.sm} {
    width: 60px;
    padding-left: 5px;
    padding-right: 5px;
  }
`,af=v.div`
  svg {
    width: 42px;
    height: 46px;

    @media ${I.lg} {
      width: 37px;
      height: 41px;
    }

    @media ${I.sm} {
      width: 32px;
      height: 36px;
    }
  }
`,cf=v.div`
  margin-top: auto;
`,ii=v(ut)`
  text-align: center;
  background: transparent;
  border: none;
  width: auto;
  margin-top: 40px;
  &:hover {
    background: transparent;
  }

  @media ${I.lg} {
    margin-top: 30px;
  }

  @media ${I.sm} {
    margin-top: 20px;
  }

  svg {
    ${Ns};
  }
`,lf=v(ii)`
  svg {
    width: 25px;
  }
`;function uf(){const e=it(),{user:t}=W(s=>s.auth),r=Fe(),n=Qr(Po),o=async()=>{if(confirm("Logout confirmation"))try{await ji(n),r(Xd()),r(zd()),e("/")}catch{console.log("signOut fail")}};return u.jsxs(sf,{children:[u.jsx(af,{children:u.jsx(hi,{to:"/","aria-label":"Return to home page",children:u.jsx("svg",{children:u.jsx("use",{xlinkHref:"svg/sprite.svg#logo"})})})}),u.jsx(of,{}),u.jsxs(cf,{children:[u.jsx(lf,{onClick:()=>r(st(null)),"aria-label":"Reset layout",children:u.jsx("svg",{children:u.jsx("use",{xlinkHref:"svg/sprite.svg#reset"})})}),t&&u.jsx(ii,{onClick:o,"aria-label":"Log out",children:u.jsx("svg",{children:u.jsx("use",{xlinkHref:"svg/sprite.svg#log-out"})})})]})]})}const df=v.div`
  display: flex;
`,ff=v.div`
  ${dt};
  width: 100%;
  overflow: auto;
`,pf=v.main`
  ${mn};
  height: 100%;
`;function hf(){const e=Qr(),t=Fe(),[r,n]=O.useState(!0);return O.useEffect(()=>{n(!0),Oi(e,async o=>{if(o&&o.email){t(_t({email:o.email,uid:o.uid,photoURL:o.photoURL||null,displayName:o.displayName}));const s=await Ti(o);if(s){const{currenciesList:i,exchangeCurrency:a,theme:l,serializedDockbox:d}=s;i&&t(ti(i)),a&&t(ri(a)),l&&t(ni(l)),d&&(t(st(d)),t(oi(!0)))}}n(!1)})},[]),u.jsxs(u.Fragment,{children:[r&&u.jsx(Oe,{}),!r&&u.jsxs(df,{children:[u.jsx(uf,{}),u.jsxs(ff,{children:[u.jsx(rf,{}),u.jsx(pf,{children:u.jsx(mi,{})})]})]})]})}const mf=/^(([^<>()\[\]\\.,;:\s@"]+(.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/,gf=/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{6,}$/,yf=e=>Hi().shape({...!e&&{email:pr().email("Invalid email format.").matches(mf,"Email address is required.").required()},...!e&&{password:pr().matches(gf,"Password must contain one digit from 0 to 6, one lowercase letter, one uppercase letter, one special character, no spaces and at least 6 characters long.").required("Pasword is required.")},...!e&&{repeatPassword:pr().oneOf([qi("password")],"Passwords don't match.").required("Repeat password is required.")}}),xf=v.main`
  ${rt};
  position: relative;
  height: 100vh;
  padding: 10px;
`,bf=v(Is)`
  position: absolute;
  top: 30px;
  right: 30px;

  @media ${I.lg} {
    top: 20px;
    right: 20px;
  }

  @media ${I.sm} {
    right: 10px;
  }
`,wf=v(Bs)`
  min-width: 300px;
  max-width: 375px;
  width: 100%;
`,Sf=v.svg`
  width: 30px;
  height: 21px;
  vertical-align: middle;
`,vf=v.p`
  font-size: ${({theme:e})=>e.fontSize.small};
  color: ${({theme:e})=>e.sharedColors.statusDown};
  margin: 0;
`,Eo=v.div`
  margin-bottom: 10px;
`,Ro=v.div`
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
`,Cf=v.div`
  text-align: center;
  margin: 15px 0;
`,Ef=v.span`
  transition: color 0.3s ease-in-out;

  &:hover {
    text-decoration: underline;
    color: ${({theme:e})=>e.sharedColors.accentColor};
    cursor: pointer;
  }
`,Rf={email:"",password:"",repeatPassword:""};function kf(){var x,k,C;const e=it(),t=Qr(Po),{user:r}=W(w=>w.auth),n=Fe(),[o,s]=O.useState("login"),i=o==="login",a=yf(i),{register:l,handleSubmit:d,formState:{errors:c},reset:f,clearErrors:m}=gi({defaultValues:Rf,resolver:Ui(a)}),g=[{typeName:"email",example:"email@example.com",fieldName:"email",err:c.email,errMsg:(x=c.email)==null?void 0:x.message},{typeName:"password",example:"********",fieldName:"password",err:c.password,errMsg:(k=c.password)==null?void 0:k.message},{typeName:"password",example:"repeat password",fieldName:"repeatPassword",err:c.repeatPassword,errMsg:(C=c.repeatPassword)==null?void 0:C.message}];O.useEffect(()=>{r&&e("/")},[r,e]),O.useEffect(()=>{f(),m()},[i]);const h=()=>{s(w=>w==="login"?"sign-up":"login")},y=()=>{e("/")},S=async({email:w,password:j})=>{try{const{user:T}=await $i(t,w,j);return T&&T.email&&($n(T),n(_t({email:T.email,uid:T.uid,photoURL:T.photoURL||null,displayName:T.displayName}))),T}catch(T){if(T instanceof fr){const M=T.code;M==="auth/email-already-in-use"&&alert("Email already exists!"),console.error("Error:",M)}}},E=async({email:w,password:j})=>{try{const{user:T}=await Pi(t,w,j);return T&&T.email&&n(_t({email:T.email,uid:T.uid,photoURL:T.photoURL||null,displayName:T.displayName})),T}catch(T){if(T instanceof fr){const M=T.code;console.log("error",M),M==="auth/user-not-found"&&alert("Sign up first!"),M==="auth/invalid-credential"&&alert("Check your credentials!"),console.error("Error:",M)}}},R=async w=>{const{email:j,password:T}=w;if(!i)return S({email:j,password:T});E({email:j,password:T})},b=async()=>{const w=new _i;try{const{user:j}=await Ai(t,w);return j&&j.email&&($n(j),n(_t({email:j.email,uid:j.uid,photoURL:j.photoURL||null,displayName:j.displayName}))),j}catch(j){return j instanceof fr&&j.code!=="auth/cancelled-popup-request"&&console.error("Error:",j),null}};return u.jsxs(xf,{children:[u.jsxs(bf,{type:"button",onClick:y,children:[u.jsx("svg",{children:u.jsx("use",{xlinkHref:"svg/sprite.svg#home"})}),u.jsx("span",{children:"Home"})]}),u.jsx(wf,{as:"section",$padding:"20px",$border:"true",children:u.jsxs("form",{name:"auth-form",onSubmit:d(R),children:[u.jsxs(Zr,{onClick:b,type:"button",$width:"full",children:[u.jsx("span",{children:"Sign with"}),u.jsx(Sf,{children:u.jsx("use",{xlinkHref:"svg/sprite.svg#google"})})]}),u.jsxs(Ro,{children:[u.jsx("hr",{})," ",u.jsx("span",{children:"or"}),u.jsx("hr",{})]}),u.jsx("div",{children:i?g.filter(w=>w.fieldName!=="repeatPassword").map(({typeName:w,example:j,fieldName:T},M)=>u.jsx(Eo,{children:u.jsx(ao,{type:w,placeholder:j,...l(T)})},M)):g.map(({typeName:w,example:j,fieldName:T,err:M,errMsg:$},G)=>u.jsxs(Eo,{children:[u.jsx(ao,{type:w,placeholder:j,...l(T)}),u.jsx(vf,{children:$})]},G))}),u.jsx(Zr,{type:"submit",$width:"full",children:u.jsxs("span",{children:["Sign ",i?"in":"up"," with Email"]})}),u.jsxs(Cf,{children:[u.jsx("span",{children:i?"Don't have an account yet?":"Already have an account?"})," ",u.jsxs(Ef,{onClick:h,children:["Sign ",i?"up":"in"]})]}),u.jsxs(Ro,{children:[u.jsx("hr",{})," ",u.jsx("span",{children:"Forgot password?"}),u.jsx("hr",{})]})]})})]})}const jf=v.section`
  max-width: 450px;
  width: 100%;
  padding: 0 10px 10px;
`,wt=v.fieldset`
  background: ${({theme:e})=>e.color.boxBackground};
  border-radius: ${({theme:e})=>e.borderRadius.large};
  border: 1px solid ${({theme:e})=>e.color.border};
  padding: 6px 15px 10px 10px;
  margin-bottom: 7px;
`,St=v.legend`
  font-size: 1rem;
  line-height: 1;
  color: ${({theme:e})=>e.sharedColors.accentLight};
`,ko=v.div`
  margin-bottom: 3px;
`,qt=v.label`
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
`,jo=v.input`
  padding: 0;
  height: initial;
  width: initial;
  margin-bottom: 0;
  display: none;
  cursor: pointer;

  &:checked + ${qt}:after {
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

  &:checked + ${qt} {
    color: ${({theme:e})=>e.color.textMain};
  }
`,Of=v(ut)`
  margin-top: 10px;
`,Oo=v.select`
  ${gn};
`,To=v.option`
  ${yn};
`;function Tf(){const e=it(),t=Ao(),r=si(),n=Fe(),{user:o}=W($=>$.auth),{currenciesList:s,exchangeCurrency:i,theme:a,persistentDockbox:l,serializedDockbox:d}=W($=>$.config),[c,f]=O.useState(i),[m,g]=O.useState(s),[h,y]=O.useState(a),[S,E]=O.useState(l),[R,b]=O.useState(!1),x=t.pathname==="/settings"&&!o;O.useEffect(()=>{x&&e("/")},[]);const k=({target:{value:$}})=>{f(Nr[$])},C=({target:{id:$,checked:G}})=>{if(G){const ue=Ir.find(xe=>xe.id===$);g(xe=>[...xe,ue])}else{const ue=m.filter(xe=>xe.id!==$);ue.length?g(ue):alert("You should keep at least one currency")}},w=({target:{value:$}})=>{y($)},j=({target:{checked:$}})=>{E($)},T=$=>m.findIndex(G=>$===G.id)!==-1,M=async()=>{b(!0);const $={exchangeCurrency:c,currenciesList:m,theme:h,...S&&{serializedDockbox:d}};await Di(o,$),n(ri(c)),n(ti(m)),n(ni(h)),n(S?oi(!0):st(null)),b(!1)};return u.jsxs(jf,{children:[u.jsxs(wt,{children:[u.jsx(St,{children:"Choose main exchange currency:"}),u.jsx(Oo,{value:c.id,onChange:k,"aria-label":"Exchange currencies",children:Object.entries(Nr).map(([$,{id:G,symbol:ue}])=>u.jsxs(To,{value:G,children:[G," (",ue,")"]},G))})]}),u.jsxs(wt,{children:[u.jsx(St,{children:"Choose crypto currencies list:"}),Ir.map(({id:$,symbol:G})=>u.jsxs(ko,{children:[u.jsx(jo,{type:"checkbox",id:$,name:G,onChange:C,checked:T($)}),u.jsxs(qt,{htmlFor:$,children:[$," (",G,")"]})]},$))]}),u.jsxs(wt,{children:[u.jsx(St,{children:"Choose app theme:"}),u.jsx(Oo,{value:h,onChange:w,"aria-label":"Theme",children:Ya.map($=>u.jsx(To,{value:$,children:$},$))})]}),!r&&u.jsxs(wt,{children:[u.jsx(St,{children:"Choose layout settings:"}),u.jsxs(ko,{children:[u.jsx(jo,{type:"checkbox",name:"persistentDockbox",id:"persistentDockbox",onChange:j,checked:S}),u.jsx(qt,{htmlFor:"persistentDockbox",children:S?"layout settings will be kept after save":"layout settings will be removed after save"})]})]}),u.jsx(Of,{onClick:M,disabled:R,$width:"full",children:R?"Saving":"Save changes"})]})}const _o={sharedColors:{textSecondary:"#868B93",price:"#9292C1",sortBackground:"rgba(26, 26, 29, 0.7)",selectBorder:"rgba(26, 26, 29, 0)",dropIndicator:"rgba(0, 0, 0, 0.7)",stausUp:"#00C287",statusDown:"#E72D04",searchBackground:"#2F293E",searchText:"#E2D8FD",btnIcon:"#ffffff",accentColor:"#EC5EB7",accentLight:"#B783EB",trendCurrencyName:"#9A9A9A"},fonts:{interRegular:"Inter-Regular",interMedium:"Inter-Medium",interSemiBold:"Inter-SemiBold",interBold:"Inter-Bold"},borderRadius:{extraSmall:"10px",small:"13px",medium:"15px",large:"20px",circle:"50%"},fontSize:{small:".625rem",medium:"0.875rem"}},_f={mainBackground:"#261E35",boxBackground:"#3C354A",boxInnerBackground:"#4A435C",textMain:"#ffffff",userProfile:"#3F3655",iconActiveBackground:"#372C44",border:"rgba(255, 255, 255, 0.5)",articleTime:"#868B93",navBarSvg:"#8D8598",navBarSvgActive:"#D8BCFF",trendHeading:"#9A9A9A"},Af={mainBackground:"#e0e0e0",boxBackground:"#f5f5f5",boxInnerBackground:"#a7a7a7",textMain:"#1A111D",userProfile:"#a7a7a7",iconActiveBackground:"#a7a7a7",border:"#a7a7a7",articleTime:"#535353",navBarSvg:"#8D8598",navBarSvgActive:"#EC5EB7",trendHeading:"#BFB7B7"},$f={dark:{color:_f,..._o},light:{color:Af,..._o}};function Pf(){const e=W(t=>t.config.theme);return u.jsxs(Ua,{theme:$f[e],children:[u.jsx(Ka,{}),u.jsx(yi,{children:u.jsxs(xi,{children:[u.jsxs(We,{element:u.jsx(hf,{}),children:[u.jsx(We,{path:"/settings",element:u.jsx(Tf,{})}),u.jsx(We,{path:"/",element:u.jsx(Gd,{})})]}),u.jsx(We,{path:"/auth",element:u.jsx(kf,{})}),u.jsx(We,{path:"*",element:u.jsx(Yd,{})})]})})]})}const Df=$d(Tn,On,jn),Nf=ed({reducer:Df});bi.createRoot(document.getElementById("root")).render(u.jsx(wi,{store:Nf,children:u.jsx(Pf,{})}));
