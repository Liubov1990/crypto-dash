var ii=Object.defineProperty;var ai=(e,t,r)=>t in e?ii(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var dr=(e,t,r)=>ai(e,typeof t!="symbol"?t+"":t,r);import{R as te,r as T,f as ci,h as li,j as d,k as ot,l as Oo,N as ui,L as di,O as fi,m as pi,n as hi,o as mi,p as gi,P as yi}from"./@react-D2Q2W8xP.js";import{_ as $e,a as U,G as xi,b as bi,g as Xr,c as Ao,s as wi,o as _i,d as vi,e as Si,f as Ci,h as An,F as fr,i as Ei,j as ki,u as Ri}from"./@firebase-D0l7Sg2N.js";import{D as Ti}from"./@rc-dock-CCJK8Mi7.js";import{h as L}from"./@moment-C5S46NFB.js";import{d as $o}from"./@d3-format-CzD4bSOQ.js";import{u as Wt}from"./@use-resize-observer-B51Ok9-X.js";import{c as Qr}from"./@classnames-Nq95h12A.js";import{V as ji,a as Po,c as Oi,b as Do,d as No,e as Ai,f as Ot,g as $i,h as Pi}from"./@victory-CvFeZNzm.js";import{u as Di}from"./@react-hook-BxLKElv0.js";import{o as Ni}from"./@hookform-CV33w4so.js";import{c as Ii,a as pr,b as Bi}from"./@yup-Byvv1ZMI.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(o){if(o.ep)return;o.ep=!0;const s=r(o);fetch(o.href,s)}})();var D="-ms-",Je="-moz-",P="-webkit-",Io="comm",qt="rule",en="decl",Li="@import",Bo="@keyframes",Fi="@layer",Lo=Math.abs,tn=String.fromCharCode,Rr=Object.assign;function Mi(e,t){return F(e,0)^45?(((t<<2^F(e,0))<<2^F(e,1))<<2^F(e,2))<<2^F(e,3):0}function Fo(e){return e.trim()}function ae(e,t){return(e=t.exec(e))?e[0]:e}function A(e,t,r){return e.replace(t,r)}function _t(e,t,r){return e.indexOf(t,r)}function F(e,t){return e.charCodeAt(t)|0}function Pe(e,t,r){return e.slice(t,r)}function se(e){return e.length}function Mo(e){return e.length}function Ze(e,t){return t.push(e),e}function zi(e,t){return e.map(t).join("")}function $n(e,t){return e.filter(function(r){return!ae(r,t)})}var Vt=1,De=1,zo=0,X=0,I=0,Le="";function Kt(e,t,r,n,o,s,i,a){return{value:e,root:t,parent:r,type:n,props:o,children:s,line:Vt,column:De,length:i,return:"",siblings:a}}function he(e,t){return Rr(Kt("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function je(e){for(;e.root;)e=he(e.root,{children:[e]});Ze(e,e.siblings)}function Ui(){return I}function Hi(){return I=X>0?F(Le,--X):0,De--,I===10&&(De=1,Vt--),I}function re(){return I=X<zo?F(Le,X++):0,De++,I===10&&(De=1,Vt++),I}function ve(){return F(Le,X)}function vt(){return X}function Zt(e,t){return Pe(Le,e,t)}function Tr(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Gi(e){return Vt=De=1,zo=se(Le=e),X=0,[]}function Wi(e){return Le="",e}function hr(e){return Fo(Zt(X-1,jr(e===91?e+2:e===40?e+1:e)))}function qi(e){for(;(I=ve())&&I<33;)re();return Tr(e)>2||Tr(I)>3?"":" "}function Vi(e,t){for(;--t&&re()&&!(I<48||I>102||I>57&&I<65||I>70&&I<97););return Zt(e,vt()+(t<6&&ve()==32&&re()==32))}function jr(e){for(;re();)switch(I){case e:return X;case 34:case 39:e!==34&&e!==39&&jr(I);break;case 40:e===41&&jr(e);break;case 92:re();break}return X}function Ki(e,t){for(;re()&&e+I!==57;)if(e+I===84&&ve()===47)break;return"/*"+Zt(t,X-1)+"*"+tn(e===47?e:re())}function Zi(e){for(;!Tr(ve());)re();return Zt(e,X)}function Yi(e){return Wi(St("",null,null,null,[""],e=Gi(e),0,[0],e))}function St(e,t,r,n,o,s,i,a,l){for(var u=0,c=0,f=i,m=0,y=0,h=0,x=1,v=1,C=1,S=0,b="",g=o,R=s,E=n,_=b;v;)switch(h=S,S=re()){case 40:if(h!=108&&F(_,f-1)==58){_t(_+=A(hr(S),"&","&\f"),"&\f",Lo(u?a[u-1]:0))!=-1&&(C=-1);break}case 34:case 39:case 91:_+=hr(S);break;case 9:case 10:case 13:case 32:_+=qi(h);break;case 92:_+=Vi(vt()-1,7);continue;case 47:switch(ve()){case 42:case 47:Ze(Ji(Ki(re(),vt()),t,r,l),l);break;default:_+="/"}break;case 123*x:a[u++]=se(_)*C;case 125*x:case 59:case 0:switch(S){case 0:case 125:v=0;case 59+c:C==-1&&(_=A(_,/\f/g,"")),y>0&&se(_)-f&&Ze(y>32?Dn(_+";",n,r,f-1,l):Dn(A(_," ","")+";",n,r,f-2,l),l);break;case 59:_+=";";default:if(Ze(E=Pn(_,t,r,u,c,o,a,b,g=[],R=[],f,s),s),S===123)if(c===0)St(_,t,E,E,g,s,f,a,R);else switch(m===99&&F(_,3)===110?100:m){case 100:case 108:case 109:case 115:St(e,E,E,n&&Ze(Pn(e,E,E,0,0,o,a,b,o,g=[],f,R),R),o,R,f,a,n?g:R);break;default:St(_,E,E,E,[""],R,0,a,R)}}u=c=y=0,x=C=1,b=_="",f=i;break;case 58:f=1+se(_),y=h;default:if(x<1){if(S==123)--x;else if(S==125&&x++==0&&Hi()==125)continue}switch(_+=tn(S),S*x){case 38:C=c>0?1:(_+="\f",-1);break;case 44:a[u++]=(se(_)-1)*C,C=1;break;case 64:ve()===45&&(_+=hr(re())),m=ve(),c=f=se(b=_+=Zi(vt())),S++;break;case 45:h===45&&se(_)==2&&(x=0)}}return s}function Pn(e,t,r,n,o,s,i,a,l,u,c,f){for(var m=o-1,y=o===0?s:[""],h=Mo(y),x=0,v=0,C=0;x<n;++x)for(var S=0,b=Pe(e,m+1,m=Lo(v=i[x])),g=e;S<h;++S)(g=Fo(v>0?y[S]+" "+b:A(b,/&\f/g,y[S])))&&(l[C++]=g);return Kt(e,t,r,o===0?qt:a,l,u,c,f)}function Ji(e,t,r,n){return Kt(e,t,r,Io,tn(Ui()),Pe(e,2,-2),0,n)}function Dn(e,t,r,n,o){return Kt(e,t,r,en,Pe(e,0,n),Pe(e,n+1,-1),n,o)}function Uo(e,t,r){switch(Mi(e,t)){case 5103:return P+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return P+e+e;case 4789:return Je+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return P+e+Je+e+D+e+e;case 5936:switch(F(e,t+11)){case 114:return P+e+D+A(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return P+e+D+A(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return P+e+D+A(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return P+e+D+e+e;case 6165:return P+e+D+"flex-"+e+e;case 5187:return P+e+A(e,/(\w+).+(:[^]+)/,P+"box-$1$2"+D+"flex-$1$2")+e;case 5443:return P+e+D+"flex-item-"+A(e,/flex-|-self/g,"")+(ae(e,/flex-|baseline/)?"":D+"grid-row-"+A(e,/flex-|-self/g,""))+e;case 4675:return P+e+D+"flex-line-pack"+A(e,/align-content|flex-|-self/g,"")+e;case 5548:return P+e+D+A(e,"shrink","negative")+e;case 5292:return P+e+D+A(e,"basis","preferred-size")+e;case 6060:return P+"box-"+A(e,"-grow","")+P+e+D+A(e,"grow","positive")+e;case 4554:return P+A(e,/([^-])(transform)/g,"$1"+P+"$2")+e;case 6187:return A(A(A(e,/(zoom-|grab)/,P+"$1"),/(image-set)/,P+"$1"),e,"")+e;case 5495:case 3959:return A(e,/(image-set\([^]*)/,P+"$1$`$1");case 4968:return A(A(e,/(.+:)(flex-)?(.*)/,P+"box-pack:$3"+D+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+P+e+e;case 4200:if(!ae(e,/flex-|baseline/))return D+"grid-column-align"+Pe(e,t)+e;break;case 2592:case 3360:return D+A(e,"template-","")+e;case 4384:case 3616:return r&&r.some(function(n,o){return t=o,ae(n.props,/grid-\w+-end/)})?~_t(e+(r=r[t].value),"span",0)?e:D+A(e,"-start","")+e+D+"grid-row-span:"+(~_t(r,"span",0)?ae(r,/\d+/):+ae(r,/\d+/)-+ae(e,/\d+/))+";":D+A(e,"-start","")+e;case 4896:case 4128:return r&&r.some(function(n){return ae(n.props,/grid-\w+-start/)})?e:D+A(A(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return A(e,/(.+)-inline(.+)/,P+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(se(e)-1-t>6)switch(F(e,t+1)){case 109:if(F(e,t+4)!==45)break;case 102:return A(e,/(.+:)(.+)-([^]+)/,"$1"+P+"$2-$3$1"+Je+(F(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~_t(e,"stretch",0)?Uo(A(e,"stretch","fill-available"),t,r)+e:e}break;case 5152:case 5920:return A(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(n,o,s,i,a,l,u){return D+o+":"+s+u+(i?D+o+"-span:"+(a?l:+l-+s)+u:"")+e});case 4949:if(F(e,t+6)===121)return A(e,":",":"+P)+e;break;case 6444:switch(F(e,F(e,14)===45?18:11)){case 120:return A(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+P+(F(e,14)===45?"inline-":"")+"box$3$1"+P+"$2$3$1"+D+"$2box$3")+e;case 100:return A(e,":",":"+D)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return A(e,"scroll-","scroll-snap-")+e}return e}function At(e,t){for(var r="",n=0;n<e.length;n++)r+=t(e[n],n,e,t)||"";return r}function Xi(e,t,r,n){switch(e.type){case Fi:if(e.children.length)break;case Li:case en:return e.return=e.return||e.value;case Io:return"";case Bo:return e.return=e.value+"{"+At(e.children,n)+"}";case qt:if(!se(e.value=e.props.join(",")))return""}return se(r=At(e.children,n))?e.return=e.value+"{"+r+"}":""}function Qi(e){var t=Mo(e);return function(r,n,o,s){for(var i="",a=0;a<t;a++)i+=e[a](r,n,o,s)||"";return i}}function ea(e){return function(t){t.root||(t=t.return)&&e(t)}}function ta(e,t,r,n){if(e.length>-1&&!e.return)switch(e.type){case en:e.return=Uo(e.value,e.length,r);return;case Bo:return At([he(e,{value:A(e.value,"@","@"+P)})],n);case qt:if(e.length)return zi(r=e.props,function(o){switch(ae(o,n=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":je(he(e,{props:[A(o,/:(read-\w+)/,":"+Je+"$1")]})),je(he(e,{props:[o]})),Rr(e,{props:$n(r,n)});break;case"::placeholder":je(he(e,{props:[A(o,/:(plac\w+)/,":"+P+"input-$1")]})),je(he(e,{props:[A(o,/:(plac\w+)/,":"+Je+"$1")]})),je(he(e,{props:[A(o,/:(plac\w+)/,D+"input-$1")]})),je(he(e,{props:[o]})),Rr(e,{props:$n(r,n)});break}return""})}}var ra={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},K={},Ne=typeof process<"u"&&K!==void 0&&(K.REACT_APP_SC_ATTR||K.SC_ATTR)||"data-styled",Ho="active",Go="data-styled-version",Yt="6.1.11",rn=`/*!sc*/
`,nn=typeof window<"u"&&"HTMLElement"in window,na=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&K!==void 0&&K.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&K.REACT_APP_SC_DISABLE_SPEEDY!==""?K.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&K.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&K!==void 0&&K.SC_DISABLE_SPEEDY!==void 0&&K.SC_DISABLE_SPEEDY!==""&&K.SC_DISABLE_SPEEDY!=="false"&&K.SC_DISABLE_SPEEDY),oa={},Jt=Object.freeze([]),Ie=Object.freeze({});function Wo(e,t,r){return r===void 0&&(r=Ie),e.theme!==r.theme&&e.theme||t||r.theme}var qo=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),sa=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,ia=/(^-|-$)/g;function Nn(e){return e.replace(sa,"-").replace(ia,"")}var aa=/(a)(d)/gi,mt=52,In=function(e){return String.fromCharCode(e+(e>25?39:97))};function Or(e){var t,r="";for(t=Math.abs(e);t>mt;t=t/mt|0)r=In(t%mt)+r;return(In(t%mt)+r).replace(aa,"$1-$2")}var mr,Vo=5381,Ae=function(e,t){for(var r=t.length;r;)e=33*e^t.charCodeAt(--r);return e},Ko=function(e){return Ae(Vo,e)};function on(e){return Or(Ko(e)>>>0)}function ca(e){return e.displayName||e.name||"Component"}function gr(e){return typeof e=="string"&&!0}var Zo=typeof Symbol=="function"&&Symbol.for,Yo=Zo?Symbol.for("react.memo"):60115,la=Zo?Symbol.for("react.forward_ref"):60112,ua={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},da={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Jo={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},fa=((mr={})[la]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},mr[Yo]=Jo,mr);function Bn(e){return("type"in(t=e)&&t.type.$$typeof)===Yo?Jo:"$$typeof"in e?fa[e.$$typeof]:ua;var t}var pa=Object.defineProperty,ha=Object.getOwnPropertyNames,Ln=Object.getOwnPropertySymbols,ma=Object.getOwnPropertyDescriptor,ga=Object.getPrototypeOf,Fn=Object.prototype;function Xo(e,t,r){if(typeof t!="string"){if(Fn){var n=ga(t);n&&n!==Fn&&Xo(e,n,r)}var o=ha(t);Ln&&(o=o.concat(Ln(t)));for(var s=Bn(e),i=Bn(t),a=0;a<o.length;++a){var l=o[a];if(!(l in da||r&&r[l]||i&&l in i||s&&l in s)){var u=ma(t,l);try{pa(e,l,u)}catch{}}}}return e}function Ce(e){return typeof e=="function"}function sn(e){return typeof e=="object"&&"styledComponentId"in e}function _e(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function $t(e,t){if(e.length===0)return"";for(var r=e[0],n=1;n<e.length;n++)r+=e[n];return r}function Xe(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Ar(e,t,r){if(r===void 0&&(r=!1),!r&&!Xe(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var n=0;n<t.length;n++)e[n]=Ar(e[n],t[n]);else if(Xe(t))for(var n in t)e[n]=Ar(e[n],t[n]);return e}function an(e,t){Object.defineProperty(e,"toString",{value:t})}function Ee(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var ya=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var r=0,n=0;n<t;n++)r+=this.groupSizes[n];return r},e.prototype.insertRules=function(t,r){if(t>=this.groupSizes.length){for(var n=this.groupSizes,o=n.length,s=o;t>=s;)if((s<<=1)<0)throw Ee(16,"".concat(t));this.groupSizes=new Uint32Array(s),this.groupSizes.set(n),this.length=s;for(var i=o;i<s;i++)this.groupSizes[i]=0}for(var a=this.indexOfGroup(t+1),l=(i=0,r.length);i<l;i++)this.tag.insertRule(a,r[i])&&(this.groupSizes[t]++,a++)},e.prototype.clearGroup=function(t){if(t<this.length){var r=this.groupSizes[t],n=this.indexOfGroup(t),o=n+r;this.groupSizes[t]=0;for(var s=n;s<o;s++)this.tag.deleteRule(n)}},e.prototype.getGroup=function(t){var r="";if(t>=this.length||this.groupSizes[t]===0)return r;for(var n=this.groupSizes[t],o=this.indexOfGroup(t),s=o+n,i=o;i<s;i++)r+="".concat(this.tag.getRule(i)).concat(rn);return r},e}(),Ct=new Map,Pt=new Map,Et=1,gt=function(e){if(Ct.has(e))return Ct.get(e);for(;Pt.has(Et);)Et++;var t=Et++;return Ct.set(e,t),Pt.set(t,e),t},xa=function(e,t){Et=t+1,Ct.set(e,t),Pt.set(t,e)},ba="style[".concat(Ne,"][").concat(Go,'="').concat(Yt,'"]'),wa=new RegExp("^".concat(Ne,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),_a=function(e,t,r){for(var n,o=r.split(","),s=0,i=o.length;s<i;s++)(n=o[s])&&e.registerName(t,n)},va=function(e,t){for(var r,n=((r=t.textContent)!==null&&r!==void 0?r:"").split(rn),o=[],s=0,i=n.length;s<i;s++){var a=n[s].trim();if(a){var l=a.match(wa);if(l){var u=0|parseInt(l[1],10),c=l[2];u!==0&&(xa(c,u),_a(e,c,l[3]),e.getTag().insertRules(u,o)),o.length=0}else o.push(a)}}};function Sa(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Qo=function(e){var t=document.head,r=e||t,n=document.createElement("style"),o=function(a){var l=Array.from(a.querySelectorAll("style[".concat(Ne,"]")));return l[l.length-1]}(r),s=o!==void 0?o.nextSibling:null;n.setAttribute(Ne,Ho),n.setAttribute(Go,Yt);var i=Sa();return i&&n.setAttribute("nonce",i),r.insertBefore(n,s),n},Ca=function(){function e(t){this.element=Qo(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(r){if(r.sheet)return r.sheet;for(var n=document.styleSheets,o=0,s=n.length;o<s;o++){var i=n[o];if(i.ownerNode===r)return i}throw Ee(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,r){try{return this.sheet.insertRule(r,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var r=this.sheet.cssRules[t];return r&&r.cssText?r.cssText:""},e}(),Ea=function(){function e(t){this.element=Qo(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,r){if(t<=this.length&&t>=0){var n=document.createTextNode(r);return this.element.insertBefore(n,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),ka=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,r){return t<=this.length&&(this.rules.splice(t,0,r),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Mn=nn,Ra={isServer:!nn,useCSSOMInjection:!na},Dt=function(){function e(t,r,n){t===void 0&&(t=Ie),r===void 0&&(r={});var o=this;this.options=U(U({},Ra),t),this.gs=r,this.names=new Map(n),this.server=!!t.isServer,!this.server&&nn&&Mn&&(Mn=!1,function(s){for(var i=document.querySelectorAll(ba),a=0,l=i.length;a<l;a++){var u=i[a];u&&u.getAttribute(Ne)!==Ho&&(va(s,u),u.parentNode&&u.parentNode.removeChild(u))}}(this)),an(this,function(){return function(s){for(var i=s.getTag(),a=i.length,l="",u=function(f){var m=function(C){return Pt.get(C)}(f);if(m===void 0)return"continue";var y=s.names.get(m),h=i.getGroup(f);if(y===void 0||h.length===0)return"continue";var x="".concat(Ne,".g").concat(f,'[id="').concat(m,'"]'),v="";y!==void 0&&y.forEach(function(C){C.length>0&&(v+="".concat(C,","))}),l+="".concat(h).concat(x,'{content:"').concat(v,'"}').concat(rn)},c=0;c<a;c++)u(c);return l}(o)})}return e.registerId=function(t){return gt(t)},e.prototype.reconstructWithOptions=function(t,r){return r===void 0&&(r=!0),new e(U(U({},this.options),t),this.gs,r&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(r){var n=r.useCSSOMInjection,o=r.target;return r.isServer?new ka(o):n?new Ca(o):new Ea(o)}(this.options),new ya(t)));var t},e.prototype.hasNameForId=function(t,r){return this.names.has(t)&&this.names.get(t).has(r)},e.prototype.registerName=function(t,r){if(gt(t),this.names.has(t))this.names.get(t).add(r);else{var n=new Set;n.add(r),this.names.set(t,n)}},e.prototype.insertRules=function(t,r,n){this.registerName(t,r),this.getTag().insertRules(gt(t),n)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(gt(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),Ta=/&/g,ja=/^\s*\/\/.*$/gm;function es(e,t){return e.map(function(r){return r.type==="rule"&&(r.value="".concat(t," ").concat(r.value),r.value=r.value.replaceAll(",",",".concat(t," ")),r.props=r.props.map(function(n){return"".concat(t," ").concat(n)})),Array.isArray(r.children)&&r.type!=="@keyframes"&&(r.children=es(r.children,t)),r})}function Oa(e){var t,r,n,o=Ie,s=o.options,i=s===void 0?Ie:s,a=o.plugins,l=a===void 0?Jt:a,u=function(m,y,h){return h.startsWith(r)&&h.endsWith(r)&&h.replaceAll(r,"").length>0?".".concat(t):m},c=l.slice();c.push(function(m){m.type===qt&&m.value.includes("&")&&(m.props[0]=m.props[0].replace(Ta,r).replace(n,u))}),i.prefix&&c.push(ta),c.push(Xi);var f=function(m,y,h,x){y===void 0&&(y=""),h===void 0&&(h=""),x===void 0&&(x="&"),t=x,r=y,n=new RegExp("\\".concat(r,"\\b"),"g");var v=m.replace(ja,""),C=Yi(h||y?"".concat(h," ").concat(y," { ").concat(v," }"):v);i.namespace&&(C=es(C,i.namespace));var S=[];return At(C,Qi(c.concat(ea(function(b){return S.push(b)})))),S};return f.hash=l.length?l.reduce(function(m,y){return y.name||Ee(15),Ae(m,y.name)},Vo).toString():"",f}var Aa=new Dt,$r=Oa(),ts=te.createContext({shouldForwardProp:void 0,styleSheet:Aa,stylis:$r});ts.Consumer;te.createContext(void 0);function Pr(){return T.useContext(ts)}var rs=function(){function e(t,r){var n=this;this.inject=function(o,s){s===void 0&&(s=$r);var i=n.name+s.hash;o.hasNameForId(n.id,i)||o.insertRules(n.id,i,s(n.rules,i,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=r,an(this,function(){throw Ee(12,String(n.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=$r),this.name+t.hash},e}(),$a=function(e){return e>="A"&&e<="Z"};function zn(e){for(var t="",r=0;r<e.length;r++){var n=e[r];if(r===1&&n==="-"&&e[0]==="-")return e;$a(n)?t+="-"+n.toLowerCase():t+=n}return t.startsWith("ms-")?"-"+t:t}var ns=function(e){return e==null||e===!1||e===""},os=function(e){var t,r,n=[];for(var o in e){var s=e[o];e.hasOwnProperty(o)&&!ns(s)&&(Array.isArray(s)&&s.isCss||Ce(s)?n.push("".concat(zn(o),":"),s,";"):Xe(s)?n.push.apply(n,$e($e(["".concat(o," {")],os(s),!1),["}"],!1)):n.push("".concat(zn(o),": ").concat((t=o,(r=s)==null||typeof r=="boolean"||r===""?"":typeof r!="number"||r===0||t in ra||t.startsWith("--")?String(r).trim():"".concat(r,"px")),";")))}return n};function me(e,t,r,n){if(ns(e))return[];if(sn(e))return[".".concat(e.styledComponentId)];if(Ce(e)){if(!Ce(s=e)||s.prototype&&s.prototype.isReactComponent||!t)return[e];var o=e(t);return me(o,t,r,n)}var s;return e instanceof rs?r?(e.inject(r,n),[e.getName(n)]):[e]:Xe(e)?os(e):Array.isArray(e)?Array.prototype.concat.apply(Jt,e.map(function(i){return me(i,t,r,n)})):[e.toString()]}function ss(e){for(var t=0;t<e.length;t+=1){var r=e[t];if(Ce(r)&&!sn(r))return!1}return!0}var Pa=Ko(Yt),Da=function(){function e(t,r,n){this.rules=t,this.staticRulesId="",this.isStatic=(n===void 0||n.isStatic)&&ss(t),this.componentId=r,this.baseHash=Ae(Pa,r),this.baseStyle=n,Dt.registerId(r)}return e.prototype.generateAndInjectStyles=function(t,r,n){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,r,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&r.hasNameForId(this.componentId,this.staticRulesId))o=_e(o,this.staticRulesId);else{var s=$t(me(this.rules,t,r,n)),i=Or(Ae(this.baseHash,s)>>>0);if(!r.hasNameForId(this.componentId,i)){var a=n(s,".".concat(i),void 0,this.componentId);r.insertRules(this.componentId,i,a)}o=_e(o,i),this.staticRulesId=i}else{for(var l=Ae(this.baseHash,n.hash),u="",c=0;c<this.rules.length;c++){var f=this.rules[c];if(typeof f=="string")u+=f;else if(f){var m=$t(me(f,t,r,n));l=Ae(l,m+c),u+=m}}if(u){var y=Or(l>>>0);r.hasNameForId(this.componentId,y)||r.insertRules(this.componentId,y,n(u,".".concat(y),void 0,this.componentId)),o=_e(o,y)}}return o},e}(),Qe=te.createContext(void 0);Qe.Consumer;function Na(e){var t=te.useContext(Qe),r=T.useMemo(function(){return function(n,o){if(!n)throw Ee(14);if(Ce(n)){var s=n(o);return s}if(Array.isArray(n)||typeof n!="object")throw Ee(8);return o?U(U({},o),n):n}(e.theme,t)},[e.theme,t]);return e.children?te.createElement(Qe.Provider,{value:r},e.children):null}var yr={};function Ia(e,t,r){var n=sn(e),o=e,s=!gr(e),i=t.attrs,a=i===void 0?Jt:i,l=t.componentId,u=l===void 0?function(g,R){var E=typeof g!="string"?"sc":Nn(g);yr[E]=(yr[E]||0)+1;var _="".concat(E,"-").concat(on(Yt+E+yr[E]));return R?"".concat(R,"-").concat(_):_}(t.displayName,t.parentComponentId):l,c=t.displayName,f=c===void 0?function(g){return gr(g)?"styled.".concat(g):"Styled(".concat(ca(g),")")}(e):c,m=t.displayName&&t.componentId?"".concat(Nn(t.displayName),"-").concat(t.componentId):t.componentId||u,y=n&&o.attrs?o.attrs.concat(a).filter(Boolean):a,h=t.shouldForwardProp;if(n&&o.shouldForwardProp){var x=o.shouldForwardProp;if(t.shouldForwardProp){var v=t.shouldForwardProp;h=function(g,R){return x(g,R)&&v(g,R)}}else h=x}var C=new Da(r,m,n?o.componentStyle:void 0);function S(g,R){return function(E,_,k){var j=E.attrs,M=E.componentStyle,$=E.defaultProps,W=E.foldedComponentIds,ue=E.styledComponentId,xe=E.target,oi=te.useContext(Qe),si=Pr(),cr=E.shouldForwardProp||si.shouldForwardProp,jn=Wo(_,oi,$)||Ie,ie=function(ft,Ge,pt){for(var We,be=U(U({},Ge),{className:void 0,theme:pt}),ur=0;ur<ft.length;ur+=1){var ht=Ce(We=ft[ur])?We(be):We;for(var fe in ht)be[fe]=fe==="className"?_e(be[fe],ht[fe]):fe==="style"?U(U({},be[fe]),ht[fe]):ht[fe]}return Ge.className&&(be.className=_e(be.className,Ge.className)),be}(j,_,jn),dt=ie.as||xe,He={};for(var de in ie)ie[de]===void 0||de[0]==="$"||de==="as"||de==="theme"&&ie.theme===jn||(de==="forwardedAs"?He.as=ie.forwardedAs:cr&&!cr(de,dt)||(He[de]=ie[de]));var On=function(ft,Ge){var pt=Pr(),We=ft.generateAndInjectStyles(Ge,pt.styleSheet,pt.stylis);return We}(M,ie),lr=_e(W,ue);return On&&(lr+=" "+On),ie.className&&(lr+=" "+ie.className),He[gr(dt)&&!qo.has(dt)?"class":"className"]=lr,He.ref=k,T.createElement(dt,He)}(b,g,R)}S.displayName=f;var b=te.forwardRef(S);return b.attrs=y,b.componentStyle=C,b.displayName=f,b.shouldForwardProp=h,b.foldedComponentIds=n?_e(o.foldedComponentIds,o.styledComponentId):"",b.styledComponentId=m,b.target=n?o.target:e,Object.defineProperty(b,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(g){this._foldedDefaultProps=n?function(R){for(var E=[],_=1;_<arguments.length;_++)E[_-1]=arguments[_];for(var k=0,j=E;k<j.length;k++)Ar(R,j[k],!0);return R}({},o.defaultProps,g):g}}),an(b,function(){return".".concat(b.styledComponentId)}),s&&Xo(b,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),b}function Un(e,t){for(var r=[e[0]],n=0,o=t.length;n<o;n+=1)r.push(t[n],e[n+1]);return r}var Hn=function(e){return Object.assign(e,{isCss:!0})};function G(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];if(Ce(e)||Xe(e))return Hn(me(Un(Jt,$e([e],t,!0))));var n=e;return t.length===0&&n.length===1&&typeof n[0]=="string"?me(n):Hn(me(Un(n,t)))}function Dr(e,t,r){if(r===void 0&&(r=Ie),!t)throw Ee(1,t);var n=function(o){for(var s=[],i=1;i<arguments.length;i++)s[i-1]=arguments[i];return e(t,r,G.apply(void 0,$e([o],s,!1)))};return n.attrs=function(o){return Dr(e,t,U(U({},r),{attrs:Array.prototype.concat(r.attrs,o).filter(Boolean)}))},n.withConfig=function(o){return Dr(e,t,U(U({},r),o))},n}var is=function(e){return Dr(Ia,e)},w=is;qo.forEach(function(e){w[e]=is(e)});var Ba=function(){function e(t,r){this.rules=t,this.componentId=r,this.isStatic=ss(t),Dt.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,r,n,o){var s=o($t(me(this.rules,r,n,o)),""),i=this.componentId+t;n.insertRules(i,i,s)},e.prototype.removeStyles=function(t,r){r.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,r,n,o){t>2&&Dt.registerId(this.componentId+t),this.removeStyles(t,n),this.createStyles(t,r,n,o)},e}();function La(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];var n=G.apply(void 0,$e([e],t,!1)),o="sc-global-".concat(on(JSON.stringify(n))),s=new Ba(n,o),i=function(l){var u=Pr(),c=te.useContext(Qe),f=te.useRef(u.styleSheet.allocateGSInstance(o)).current;return u.styleSheet.server&&a(f,l,u.styleSheet,c,u.stylis),te.useLayoutEffect(function(){if(!u.styleSheet.server)return a(f,l,u.styleSheet,c,u.stylis),function(){return s.removeStyles(f,u.styleSheet)}},[f,l,u.styleSheet,c,u.stylis]),null};function a(l,u,c,f,m){if(s.isStatic)s.renderStyles(l,oa,c,m);else{var y=U(U({},u),{theme:Wo(u,f,i.defaultProps)});s.renderStyles(l,y,c,m)}}return te.memo(i)}function Fa(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];var n=$t(G.apply(void 0,$e([e],t,!1))),o=on(n);return new rs(o,n)}const Ma={},za=La`
 ${Ma};

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
`,Fe=li,V=ci;var Nt=(e=>(e.DARK="dark",e.LIGHT="light",e))(Nt||{});const Nr={USD:{id:"USD",symbol:"$"},EUR:{id:"EUR",symbol:"€"},GPB:{id:"GPB",symbol:"£"},CHF:{id:"CHF",symbol:"₣"},UAH:{id:"UAH",symbol:"₴"}},Ir=[{id:"bitcoin",symbol:"BTC"},{id:"ethereum",symbol:"ETH"},{id:"ripple",symbol:"XRP"},{id:"bitcoin-cash",symbol:"BCH"},{id:"chainlink",symbol:"LINK"},{id:"litecoin",symbol:"LTC"},{id:"cardano",symbol:"ADA"},{id:"binancecoin",symbol:"BNB"},{id:"stellar",symbol:"XLM"},{id:"monero",symbol:"XMR"},{id:"solana",symbol:"SOL"}],Ua={btc:",.2f",eth:",.2f",bnb:",.3f",sol:",.3f",xrp:",.4f",ada:",.4f",link:",.3f",bch:",.3f",ltc:",.4f",xlm:",.5f",xmr:",.3f"},Ha=[Nt.DARK,Nt.LIGHT],st=e=>new Promise(t=>setTimeout(t,e)),Ga=e=>e.map(([t,r,n,o,s])=>({x:t,open:r,high:n,low:o,close:s})),Wa=e=>e.map(({time:t,close:r})=>({x:L.unix(t),y:r})),qa=e=>e.reduce((t,{symbol:r,...n})=>({...t,[r]:{...n,symbol:r}}),{}),as=e=>{const t=e.toPrecision(5);return $o("~s")(Number(t))},Va=(e,t)=>$o(Ua[e])(t),Ka=e=>L(e).format("MMMM Do YYYY");function Za(e){const t=T.useRef();return T.useEffect(()=>{t.current=e},[e]),t.current}function cs(e,t){return function(){return e.apply(t,arguments)}}const{toString:Ya}=Object.prototype,{getPrototypeOf:cn}=Object,Xt=(e=>t=>{const r=Ya.call(t);return e[r]||(e[r]=r.slice(8,-1).toLowerCase())})(Object.create(null)),oe=e=>(e=e.toLowerCase(),t=>Xt(t)===e),Qt=e=>t=>typeof t===e,{isArray:Me}=Array,et=Qt("undefined");function Ja(e){return e!==null&&!et(e)&&e.constructor!==null&&!et(e.constructor)&&J(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const ls=oe("ArrayBuffer");function Xa(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&ls(e.buffer),t}const Qa=Qt("string"),J=Qt("function"),us=Qt("number"),er=e=>e!==null&&typeof e=="object",ec=e=>e===!0||e===!1,kt=e=>{if(Xt(e)!=="object")return!1;const t=cn(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},tc=oe("Date"),rc=oe("File"),nc=oe("Blob"),oc=oe("FileList"),sc=e=>er(e)&&J(e.pipe),ic=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||J(e.append)&&((t=Xt(e))==="formdata"||t==="object"&&J(e.toString)&&e.toString()==="[object FormData]"))},ac=oe("URLSearchParams"),[cc,lc,uc,dc]=["ReadableStream","Request","Response","Headers"].map(oe),fc=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function it(e,t,{allOwnKeys:r=!1}={}){if(e===null||typeof e>"u")return;let n,o;if(typeof e!="object"&&(e=[e]),Me(e))for(n=0,o=e.length;n<o;n++)t.call(null,e[n],n,e);else{const s=r?Object.getOwnPropertyNames(e):Object.keys(e),i=s.length;let a;for(n=0;n<i;n++)a=s[n],t.call(null,e[a],a,e)}}function ds(e,t){t=t.toLowerCase();const r=Object.keys(e);let n=r.length,o;for(;n-- >0;)if(o=r[n],t===o.toLowerCase())return o;return null}const fs=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,ps=e=>!et(e)&&e!==fs;function Br(){const{caseless:e}=ps(this)&&this||{},t={},r=(n,o)=>{const s=e&&ds(t,o)||o;kt(t[s])&&kt(n)?t[s]=Br(t[s],n):kt(n)?t[s]=Br({},n):Me(n)?t[s]=n.slice():t[s]=n};for(let n=0,o=arguments.length;n<o;n++)arguments[n]&&it(arguments[n],r);return t}const pc=(e,t,r,{allOwnKeys:n}={})=>(it(t,(o,s)=>{r&&J(o)?e[s]=cs(o,r):e[s]=o},{allOwnKeys:n}),e),hc=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),mc=(e,t,r,n)=>{e.prototype=Object.create(t.prototype,n),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),r&&Object.assign(e.prototype,r)},gc=(e,t,r,n)=>{let o,s,i;const a={};if(t=t||{},e==null)return t;do{for(o=Object.getOwnPropertyNames(e),s=o.length;s-- >0;)i=o[s],(!n||n(i,e,t))&&!a[i]&&(t[i]=e[i],a[i]=!0);e=r!==!1&&cn(e)}while(e&&(!r||r(e,t))&&e!==Object.prototype);return t},yc=(e,t,r)=>{e=String(e),(r===void 0||r>e.length)&&(r=e.length),r-=t.length;const n=e.indexOf(t,r);return n!==-1&&n===r},xc=e=>{if(!e)return null;if(Me(e))return e;let t=e.length;if(!us(t))return null;const r=new Array(t);for(;t-- >0;)r[t]=e[t];return r},bc=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&cn(Uint8Array)),wc=(e,t)=>{const n=(e&&e[Symbol.iterator]).call(e);let o;for(;(o=n.next())&&!o.done;){const s=o.value;t.call(e,s[0],s[1])}},_c=(e,t)=>{let r;const n=[];for(;(r=e.exec(t))!==null;)n.push(r);return n},vc=oe("HTMLFormElement"),Sc=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(r,n,o){return n.toUpperCase()+o}),Gn=(({hasOwnProperty:e})=>(t,r)=>e.call(t,r))(Object.prototype),Cc=oe("RegExp"),hs=(e,t)=>{const r=Object.getOwnPropertyDescriptors(e),n={};it(r,(o,s)=>{let i;(i=t(o,s,e))!==!1&&(n[s]=i||o)}),Object.defineProperties(e,n)},Ec=e=>{hs(e,(t,r)=>{if(J(e)&&["arguments","caller","callee"].indexOf(r)!==-1)return!1;const n=e[r];if(J(n)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+r+"'")})}})},kc=(e,t)=>{const r={},n=o=>{o.forEach(s=>{r[s]=!0})};return Me(e)?n(e):n(String(e).split(t)),r},Rc=()=>{},Tc=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t,xr="abcdefghijklmnopqrstuvwxyz",Wn="0123456789",ms={DIGIT:Wn,ALPHA:xr,ALPHA_DIGIT:xr+xr.toUpperCase()+Wn},jc=(e=16,t=ms.ALPHA_DIGIT)=>{let r="";const{length:n}=t;for(;e--;)r+=t[Math.random()*n|0];return r};function Oc(e){return!!(e&&J(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const Ac=e=>{const t=new Array(10),r=(n,o)=>{if(er(n)){if(t.indexOf(n)>=0)return;if(!("toJSON"in n)){t[o]=n;const s=Me(n)?[]:{};return it(n,(i,a)=>{const l=r(i,o+1);!et(l)&&(s[a]=l)}),t[o]=void 0,s}}return n};return r(e,0)},$c=oe("AsyncFunction"),Pc=e=>e&&(er(e)||J(e))&&J(e.then)&&J(e.catch),p={isArray:Me,isArrayBuffer:ls,isBuffer:Ja,isFormData:ic,isArrayBufferView:Xa,isString:Qa,isNumber:us,isBoolean:ec,isObject:er,isPlainObject:kt,isReadableStream:cc,isRequest:lc,isResponse:uc,isHeaders:dc,isUndefined:et,isDate:tc,isFile:rc,isBlob:nc,isRegExp:Cc,isFunction:J,isStream:sc,isURLSearchParams:ac,isTypedArray:bc,isFileList:oc,forEach:it,merge:Br,extend:pc,trim:fc,stripBOM:hc,inherits:mc,toFlatObject:gc,kindOf:Xt,kindOfTest:oe,endsWith:yc,toArray:xc,forEachEntry:wc,matchAll:_c,isHTMLForm:vc,hasOwnProperty:Gn,hasOwnProp:Gn,reduceDescriptors:hs,freezeMethods:Ec,toObjectSet:kc,toCamelCase:Sc,noop:Rc,toFiniteNumber:Tc,findKey:ds,global:fs,isContextDefined:ps,ALPHABET:ms,generateString:jc,isSpecCompliantForm:Oc,toJSONObject:Ac,isAsyncFn:$c,isThenable:Pc};function O(e,t,r,n,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),r&&(this.config=r),n&&(this.request=n),o&&(this.response=o)}p.inherits(O,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:p.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const gs=O.prototype,ys={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{ys[e]={value:e}});Object.defineProperties(O,ys);Object.defineProperty(gs,"isAxiosError",{value:!0});O.from=(e,t,r,n,o,s)=>{const i=Object.create(gs);return p.toFlatObject(e,i,function(l){return l!==Error.prototype},a=>a!=="isAxiosError"),O.call(i,e.message,t,r,n,o),i.cause=e,i.name=e.name,s&&Object.assign(i,s),i};const Dc=null;function Lr(e){return p.isPlainObject(e)||p.isArray(e)}function xs(e){return p.endsWith(e,"[]")?e.slice(0,-2):e}function qn(e,t,r){return e?e.concat(t).map(function(o,s){return o=xs(o),!r&&s?"["+o+"]":o}).join(r?".":""):t}function Nc(e){return p.isArray(e)&&!e.some(Lr)}const Ic=p.toFlatObject(p,{},null,function(t){return/^is[A-Z]/.test(t)});function tr(e,t,r){if(!p.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,r=p.toFlatObject(r,{metaTokens:!0,dots:!1,indexes:!1},!1,function(x,v){return!p.isUndefined(v[x])});const n=r.metaTokens,o=r.visitor||c,s=r.dots,i=r.indexes,l=(r.Blob||typeof Blob<"u"&&Blob)&&p.isSpecCompliantForm(t);if(!p.isFunction(o))throw new TypeError("visitor must be a function");function u(h){if(h===null)return"";if(p.isDate(h))return h.toISOString();if(!l&&p.isBlob(h))throw new O("Blob is not supported. Use a Buffer instead.");return p.isArrayBuffer(h)||p.isTypedArray(h)?l&&typeof Blob=="function"?new Blob([h]):Buffer.from(h):h}function c(h,x,v){let C=h;if(h&&!v&&typeof h=="object"){if(p.endsWith(x,"{}"))x=n?x:x.slice(0,-2),h=JSON.stringify(h);else if(p.isArray(h)&&Nc(h)||(p.isFileList(h)||p.endsWith(x,"[]"))&&(C=p.toArray(h)))return x=xs(x),C.forEach(function(b,g){!(p.isUndefined(b)||b===null)&&t.append(i===!0?qn([x],g,s):i===null?x:x+"[]",u(b))}),!1}return Lr(h)?!0:(t.append(qn(v,x,s),u(h)),!1)}const f=[],m=Object.assign(Ic,{defaultVisitor:c,convertValue:u,isVisitable:Lr});function y(h,x){if(!p.isUndefined(h)){if(f.indexOf(h)!==-1)throw Error("Circular reference detected in "+x.join("."));f.push(h),p.forEach(h,function(C,S){(!(p.isUndefined(C)||C===null)&&o.call(t,C,p.isString(S)?S.trim():S,x,m))===!0&&y(C,x?x.concat(S):[S])}),f.pop()}}if(!p.isObject(e))throw new TypeError("data must be an object");return y(e),t}function Vn(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(n){return t[n]})}function ln(e,t){this._pairs=[],e&&tr(e,this,t)}const bs=ln.prototype;bs.append=function(t,r){this._pairs.push([t,r])};bs.toString=function(t){const r=t?function(n){return t.call(this,n,Vn)}:Vn;return this._pairs.map(function(o){return r(o[0])+"="+r(o[1])},"").join("&")};function Bc(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function ws(e,t,r){if(!t)return e;const n=r&&r.encode||Bc,o=r&&r.serialize;let s;if(o?s=o(t,r):s=p.isURLSearchParams(t)?t.toString():new ln(t,r).toString(n),s){const i=e.indexOf("#");i!==-1&&(e=e.slice(0,i)),e+=(e.indexOf("?")===-1?"?":"&")+s}return e}class Kn{constructor(){this.handlers=[]}use(t,r,n){return this.handlers.push({fulfilled:t,rejected:r,synchronous:n?n.synchronous:!1,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){p.forEach(this.handlers,function(n){n!==null&&t(n)})}}const _s={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Lc=typeof URLSearchParams<"u"?URLSearchParams:ln,Fc=typeof FormData<"u"?FormData:null,Mc=typeof Blob<"u"?Blob:null,zc={isBrowser:!0,classes:{URLSearchParams:Lc,FormData:Fc,Blob:Mc},protocols:["http","https","file","blob","url","data"]},un=typeof window<"u"&&typeof document<"u",Uc=(e=>un&&["ReactNative","NativeScript","NS"].indexOf(e)<0)(typeof navigator<"u"&&navigator.product),Hc=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",Gc=un&&window.location.href||"http://localhost",Wc=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:un,hasStandardBrowserEnv:Uc,hasStandardBrowserWebWorkerEnv:Hc,origin:Gc},Symbol.toStringTag,{value:"Module"})),ne={...Wc,...zc};function qc(e,t){return tr(e,new ne.classes.URLSearchParams,Object.assign({visitor:function(r,n,o,s){return ne.isNode&&p.isBuffer(r)?(this.append(n,r.toString("base64")),!1):s.defaultVisitor.apply(this,arguments)}},t))}function Vc(e){return p.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function Kc(e){const t={},r=Object.keys(e);let n;const o=r.length;let s;for(n=0;n<o;n++)s=r[n],t[s]=e[s];return t}function vs(e){function t(r,n,o,s){let i=r[s++];if(i==="__proto__")return!0;const a=Number.isFinite(+i),l=s>=r.length;return i=!i&&p.isArray(o)?o.length:i,l?(p.hasOwnProp(o,i)?o[i]=[o[i],n]:o[i]=n,!a):((!o[i]||!p.isObject(o[i]))&&(o[i]=[]),t(r,n,o[i],s)&&p.isArray(o[i])&&(o[i]=Kc(o[i])),!a)}if(p.isFormData(e)&&p.isFunction(e.entries)){const r={};return p.forEachEntry(e,(n,o)=>{t(Vc(n),o,r,0)}),r}return null}function Zc(e,t,r){if(p.isString(e))try{return(t||JSON.parse)(e),p.trim(e)}catch(n){if(n.name!=="SyntaxError")throw n}return(r||JSON.stringify)(e)}const at={transitional:_s,adapter:["xhr","http","fetch"],transformRequest:[function(t,r){const n=r.getContentType()||"",o=n.indexOf("application/json")>-1,s=p.isObject(t);if(s&&p.isHTMLForm(t)&&(t=new FormData(t)),p.isFormData(t))return o?JSON.stringify(vs(t)):t;if(p.isArrayBuffer(t)||p.isBuffer(t)||p.isStream(t)||p.isFile(t)||p.isBlob(t)||p.isReadableStream(t))return t;if(p.isArrayBufferView(t))return t.buffer;if(p.isURLSearchParams(t))return r.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let a;if(s){if(n.indexOf("application/x-www-form-urlencoded")>-1)return qc(t,this.formSerializer).toString();if((a=p.isFileList(t))||n.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return tr(a?{"files[]":t}:t,l&&new l,this.formSerializer)}}return s||o?(r.setContentType("application/json",!1),Zc(t)):t}],transformResponse:[function(t){const r=this.transitional||at.transitional,n=r&&r.forcedJSONParsing,o=this.responseType==="json";if(p.isResponse(t)||p.isReadableStream(t))return t;if(t&&p.isString(t)&&(n&&!this.responseType||o)){const i=!(r&&r.silentJSONParsing)&&o;try{return JSON.parse(t)}catch(a){if(i)throw a.name==="SyntaxError"?O.from(a,O.ERR_BAD_RESPONSE,this,null,this.response):a}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:ne.classes.FormData,Blob:ne.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};p.forEach(["delete","get","head","post","put","patch"],e=>{at.headers[e]={}});const Yc=p.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Jc=e=>{const t={};let r,n,o;return e&&e.split(`
`).forEach(function(i){o=i.indexOf(":"),r=i.substring(0,o).trim().toLowerCase(),n=i.substring(o+1).trim(),!(!r||t[r]&&Yc[r])&&(r==="set-cookie"?t[r]?t[r].push(n):t[r]=[n]:t[r]=t[r]?t[r]+", "+n:n)}),t},Zn=Symbol("internals");function qe(e){return e&&String(e).trim().toLowerCase()}function Rt(e){return e===!1||e==null?e:p.isArray(e)?e.map(Rt):String(e)}function Xc(e){const t=Object.create(null),r=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let n;for(;n=r.exec(e);)t[n[1]]=n[2];return t}const Qc=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function br(e,t,r,n,o){if(p.isFunction(n))return n.call(this,t,r);if(o&&(t=r),!!p.isString(t)){if(p.isString(n))return t.indexOf(n)!==-1;if(p.isRegExp(n))return n.test(t)}}function el(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,r,n)=>r.toUpperCase()+n)}function tl(e,t){const r=p.toCamelCase(" "+t);["get","set","has"].forEach(n=>{Object.defineProperty(e,n+r,{value:function(o,s,i){return this[n].call(this,t,o,s,i)},configurable:!0})})}class q{constructor(t){t&&this.set(t)}set(t,r,n){const o=this;function s(a,l,u){const c=qe(l);if(!c)throw new Error("header name must be a non-empty string");const f=p.findKey(o,c);(!f||o[f]===void 0||u===!0||u===void 0&&o[f]!==!1)&&(o[f||l]=Rt(a))}const i=(a,l)=>p.forEach(a,(u,c)=>s(u,c,l));if(p.isPlainObject(t)||t instanceof this.constructor)i(t,r);else if(p.isString(t)&&(t=t.trim())&&!Qc(t))i(Jc(t),r);else if(p.isHeaders(t))for(const[a,l]of t.entries())s(l,a,n);else t!=null&&s(r,t,n);return this}get(t,r){if(t=qe(t),t){const n=p.findKey(this,t);if(n){const o=this[n];if(!r)return o;if(r===!0)return Xc(o);if(p.isFunction(r))return r.call(this,o,n);if(p.isRegExp(r))return r.exec(o);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,r){if(t=qe(t),t){const n=p.findKey(this,t);return!!(n&&this[n]!==void 0&&(!r||br(this,this[n],n,r)))}return!1}delete(t,r){const n=this;let o=!1;function s(i){if(i=qe(i),i){const a=p.findKey(n,i);a&&(!r||br(n,n[a],a,r))&&(delete n[a],o=!0)}}return p.isArray(t)?t.forEach(s):s(t),o}clear(t){const r=Object.keys(this);let n=r.length,o=!1;for(;n--;){const s=r[n];(!t||br(this,this[s],s,t,!0))&&(delete this[s],o=!0)}return o}normalize(t){const r=this,n={};return p.forEach(this,(o,s)=>{const i=p.findKey(n,s);if(i){r[i]=Rt(o),delete r[s];return}const a=t?el(s):String(s).trim();a!==s&&delete r[s],r[a]=Rt(o),n[a]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const r=Object.create(null);return p.forEach(this,(n,o)=>{n!=null&&n!==!1&&(r[o]=t&&p.isArray(n)?n.join(", "):n)}),r}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,r])=>t+": "+r).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...r){const n=new this(t);return r.forEach(o=>n.set(o)),n}static accessor(t){const n=(this[Zn]=this[Zn]={accessors:{}}).accessors,o=this.prototype;function s(i){const a=qe(i);n[a]||(tl(o,i),n[a]=!0)}return p.isArray(t)?t.forEach(s):s(t),this}}q.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);p.reduceDescriptors(q.prototype,({value:e},t)=>{let r=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(n){this[r]=n}}});p.freezeMethods(q);function wr(e,t){const r=this||at,n=t||r,o=q.from(n.headers);let s=n.data;return p.forEach(e,function(a){s=a.call(r,s,o.normalize(),t?t.status:void 0)}),o.normalize(),s}function Ss(e){return!!(e&&e.__CANCEL__)}function ze(e,t,r){O.call(this,e??"canceled",O.ERR_CANCELED,t,r),this.name="CanceledError"}p.inherits(ze,O,{__CANCEL__:!0});function Cs(e,t,r){const n=r.config.validateStatus;!r.status||!n||n(r.status)?e(r):t(new O("Request failed with status code "+r.status,[O.ERR_BAD_REQUEST,O.ERR_BAD_RESPONSE][Math.floor(r.status/100)-4],r.config,r.request,r))}function rl(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function nl(e,t){e=e||10;const r=new Array(e),n=new Array(e);let o=0,s=0,i;return t=t!==void 0?t:1e3,function(l){const u=Date.now(),c=n[s];i||(i=u),r[o]=l,n[o]=u;let f=s,m=0;for(;f!==o;)m+=r[f++],f=f%e;if(o=(o+1)%e,o===s&&(s=(s+1)%e),u-i<t)return;const y=c&&u-c;return y?Math.round(m*1e3/y):void 0}}function ol(e,t){let r=0;const n=1e3/t;let o=null;return function(){const i=this===!0,a=Date.now();if(i||a-r>n)return o&&(clearTimeout(o),o=null),r=a,e.apply(null,arguments);o||(o=setTimeout(()=>(o=null,r=Date.now(),e.apply(null,arguments)),n-(a-r)))}}const It=(e,t,r=3)=>{let n=0;const o=nl(50,250);return ol(s=>{const i=s.loaded,a=s.lengthComputable?s.total:void 0,l=i-n,u=o(l),c=i<=a;n=i;const f={loaded:i,total:a,progress:a?i/a:void 0,bytes:l,rate:u||void 0,estimated:u&&a&&c?(a-i)/u:void 0,event:s,lengthComputable:a!=null};f[t?"download":"upload"]=!0,e(f)},r)},sl=ne.hasStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");let n;function o(s){let i=s;return t&&(r.setAttribute("href",i),i=r.href),r.setAttribute("href",i),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:r.pathname.charAt(0)==="/"?r.pathname:"/"+r.pathname}}return n=o(window.location.href),function(i){const a=p.isString(i)?o(i):i;return a.protocol===n.protocol&&a.host===n.host}}():function(){return function(){return!0}}(),il=ne.hasStandardBrowserEnv?{write(e,t,r,n,o,s){const i=[e+"="+encodeURIComponent(t)];p.isNumber(r)&&i.push("expires="+new Date(r).toGMTString()),p.isString(n)&&i.push("path="+n),p.isString(o)&&i.push("domain="+o),s===!0&&i.push("secure"),document.cookie=i.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function al(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function cl(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function Es(e,t){return e&&!al(t)?cl(e,t):t}const Yn=e=>e instanceof q?{...e}:e;function ke(e,t){t=t||{};const r={};function n(u,c,f){return p.isPlainObject(u)&&p.isPlainObject(c)?p.merge.call({caseless:f},u,c):p.isPlainObject(c)?p.merge({},c):p.isArray(c)?c.slice():c}function o(u,c,f){if(p.isUndefined(c)){if(!p.isUndefined(u))return n(void 0,u,f)}else return n(u,c,f)}function s(u,c){if(!p.isUndefined(c))return n(void 0,c)}function i(u,c){if(p.isUndefined(c)){if(!p.isUndefined(u))return n(void 0,u)}else return n(void 0,c)}function a(u,c,f){if(f in t)return n(u,c);if(f in e)return n(void 0,u)}const l={url:s,method:s,data:s,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,withXSRFToken:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:a,headers:(u,c)=>o(Yn(u),Yn(c),!0)};return p.forEach(Object.keys(Object.assign({},e,t)),function(c){const f=l[c]||o,m=f(e[c],t[c],c);p.isUndefined(m)&&f!==a||(r[c]=m)}),r}const ks=e=>{const t=ke({},e);let{data:r,withXSRFToken:n,xsrfHeaderName:o,xsrfCookieName:s,headers:i,auth:a}=t;t.headers=i=q.from(i),t.url=ws(Es(t.baseURL,t.url),e.params,e.paramsSerializer),a&&i.set("Authorization","Basic "+btoa((a.username||"")+":"+(a.password?unescape(encodeURIComponent(a.password)):"")));let l;if(p.isFormData(r)){if(ne.hasStandardBrowserEnv||ne.hasStandardBrowserWebWorkerEnv)i.setContentType(void 0);else if((l=i.getContentType())!==!1){const[u,...c]=l?l.split(";").map(f=>f.trim()).filter(Boolean):[];i.setContentType([u||"multipart/form-data",...c].join("; "))}}if(ne.hasStandardBrowserEnv&&(n&&p.isFunction(n)&&(n=n(t)),n||n!==!1&&sl(t.url))){const u=o&&s&&il.read(s);u&&i.set(o,u)}return t},ll=typeof XMLHttpRequest<"u",ul=ll&&function(e){return new Promise(function(r,n){const o=ks(e);let s=o.data;const i=q.from(o.headers).normalize();let{responseType:a}=o,l;function u(){o.cancelToken&&o.cancelToken.unsubscribe(l),o.signal&&o.signal.removeEventListener("abort",l)}let c=new XMLHttpRequest;c.open(o.method.toUpperCase(),o.url,!0),c.timeout=o.timeout;function f(){if(!c)return;const y=q.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders()),x={data:!a||a==="text"||a==="json"?c.responseText:c.response,status:c.status,statusText:c.statusText,headers:y,config:e,request:c};Cs(function(C){r(C),u()},function(C){n(C),u()},x),c=null}"onloadend"in c?c.onloadend=f:c.onreadystatechange=function(){!c||c.readyState!==4||c.status===0&&!(c.responseURL&&c.responseURL.indexOf("file:")===0)||setTimeout(f)},c.onabort=function(){c&&(n(new O("Request aborted",O.ECONNABORTED,o,c)),c=null)},c.onerror=function(){n(new O("Network Error",O.ERR_NETWORK,o,c)),c=null},c.ontimeout=function(){let h=o.timeout?"timeout of "+o.timeout+"ms exceeded":"timeout exceeded";const x=o.transitional||_s;o.timeoutErrorMessage&&(h=o.timeoutErrorMessage),n(new O(h,x.clarifyTimeoutError?O.ETIMEDOUT:O.ECONNABORTED,o,c)),c=null},s===void 0&&i.setContentType(null),"setRequestHeader"in c&&p.forEach(i.toJSON(),function(h,x){c.setRequestHeader(x,h)}),p.isUndefined(o.withCredentials)||(c.withCredentials=!!o.withCredentials),a&&a!=="json"&&(c.responseType=o.responseType),typeof o.onDownloadProgress=="function"&&c.addEventListener("progress",It(o.onDownloadProgress,!0)),typeof o.onUploadProgress=="function"&&c.upload&&c.upload.addEventListener("progress",It(o.onUploadProgress)),(o.cancelToken||o.signal)&&(l=y=>{c&&(n(!y||y.type?new ze(null,e,c):y),c.abort(),c=null)},o.cancelToken&&o.cancelToken.subscribe(l),o.signal&&(o.signal.aborted?l():o.signal.addEventListener("abort",l)));const m=rl(o.url);if(m&&ne.protocols.indexOf(m)===-1){n(new O("Unsupported protocol "+m+":",O.ERR_BAD_REQUEST,e));return}c.send(s||null)})},dl=(e,t)=>{let r=new AbortController,n;const o=function(l){if(!n){n=!0,i();const u=l instanceof Error?l:this.reason;r.abort(u instanceof O?u:new ze(u instanceof Error?u.message:u))}};let s=t&&setTimeout(()=>{o(new O(`timeout ${t} of ms exceeded`,O.ETIMEDOUT))},t);const i=()=>{e&&(s&&clearTimeout(s),s=null,e.forEach(l=>{l&&(l.removeEventListener?l.removeEventListener("abort",o):l.unsubscribe(o))}),e=null)};e.forEach(l=>l&&l.addEventListener&&l.addEventListener("abort",o));const{signal:a}=r;return a.unsubscribe=i,[a,()=>{s&&clearTimeout(s),s=null}]},fl=function*(e,t){let r=e.byteLength;if(!t||r<t){yield e;return}let n=0,o;for(;n<r;)o=n+t,yield e.slice(n,o),n=o},pl=async function*(e,t,r){for await(const n of e)yield*fl(ArrayBuffer.isView(n)?n:await r(String(n)),t)},Jn=(e,t,r,n,o)=>{const s=pl(e,t,o);let i=0;return new ReadableStream({type:"bytes",async pull(a){const{done:l,value:u}=await s.next();if(l){a.close(),n();return}let c=u.byteLength;r&&r(i+=c),a.enqueue(new Uint8Array(u))},cancel(a){return n(a),s.return()}},{highWaterMark:2})},Xn=(e,t)=>{const r=e!=null;return n=>setTimeout(()=>t({lengthComputable:r,total:e,loaded:n}))},rr=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",Rs=rr&&typeof ReadableStream=="function",Fr=rr&&(typeof TextEncoder=="function"?(e=>t=>e.encode(t))(new TextEncoder):async e=>new Uint8Array(await new Response(e).arrayBuffer())),hl=Rs&&(()=>{let e=!1;const t=new Request(ne.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t})(),Qn=64*1024,Mr=Rs&&!!(()=>{try{return p.isReadableStream(new Response("").body)}catch{}})(),Bt={stream:Mr&&(e=>e.body)};rr&&(e=>{["text","arrayBuffer","blob","formData","stream"].forEach(t=>{!Bt[t]&&(Bt[t]=p.isFunction(e[t])?r=>r[t]():(r,n)=>{throw new O(`Response type '${t}' is not supported`,O.ERR_NOT_SUPPORT,n)})})})(new Response);const ml=async e=>{if(e==null)return 0;if(p.isBlob(e))return e.size;if(p.isSpecCompliantForm(e))return(await new Request(e).arrayBuffer()).byteLength;if(p.isArrayBufferView(e))return e.byteLength;if(p.isURLSearchParams(e)&&(e=e+""),p.isString(e))return(await Fr(e)).byteLength},gl=async(e,t)=>{const r=p.toFiniteNumber(e.getContentLength());return r??ml(t)},yl=rr&&(async e=>{let{url:t,method:r,data:n,signal:o,cancelToken:s,timeout:i,onDownloadProgress:a,onUploadProgress:l,responseType:u,headers:c,withCredentials:f="same-origin",fetchOptions:m}=ks(e);u=u?(u+"").toLowerCase():"text";let[y,h]=o||s||i?dl([o,s],i):[],x,v;const C=()=>{!x&&setTimeout(()=>{y&&y.unsubscribe()}),x=!0};let S;try{if(l&&hl&&r!=="get"&&r!=="head"&&(S=await gl(c,n))!==0){let E=new Request(t,{method:"POST",body:n,duplex:"half"}),_;p.isFormData(n)&&(_=E.headers.get("content-type"))&&c.setContentType(_),E.body&&(n=Jn(E.body,Qn,Xn(S,It(l)),null,Fr))}p.isString(f)||(f=f?"cors":"omit"),v=new Request(t,{...m,signal:y,method:r.toUpperCase(),headers:c.normalize().toJSON(),body:n,duplex:"half",withCredentials:f});let b=await fetch(v);const g=Mr&&(u==="stream"||u==="response");if(Mr&&(a||g)){const E={};["status","statusText","headers"].forEach(k=>{E[k]=b[k]});const _=p.toFiniteNumber(b.headers.get("content-length"));b=new Response(Jn(b.body,Qn,a&&Xn(_,It(a,!0)),g&&C,Fr),E)}u=u||"text";let R=await Bt[p.findKey(Bt,u)||"text"](b,e);return!g&&C(),h&&h(),await new Promise((E,_)=>{Cs(E,_,{data:R,headers:q.from(b.headers),status:b.status,statusText:b.statusText,config:e,request:v})})}catch(b){throw C(),b&&b.name==="TypeError"&&/fetch/i.test(b.message)?Object.assign(new O("Network Error",O.ERR_NETWORK,e,v),{cause:b.cause||b}):O.from(b,b&&b.code,e,v)}}),zr={http:Dc,xhr:ul,fetch:yl};p.forEach(zr,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const eo=e=>`- ${e}`,xl=e=>p.isFunction(e)||e===null||e===!1,Ts={getAdapter:e=>{e=p.isArray(e)?e:[e];const{length:t}=e;let r,n;const o={};for(let s=0;s<t;s++){r=e[s];let i;if(n=r,!xl(r)&&(n=zr[(i=String(r)).toLowerCase()],n===void 0))throw new O(`Unknown adapter '${i}'`);if(n)break;o[i||"#"+s]=n}if(!n){const s=Object.entries(o).map(([a,l])=>`adapter ${a} `+(l===!1?"is not supported by the environment":"is not available in the build"));let i=t?s.length>1?`since :
`+s.map(eo).join(`
`):" "+eo(s[0]):"as no adapter specified";throw new O("There is no suitable adapter to dispatch the request "+i,"ERR_NOT_SUPPORT")}return n},adapters:zr};function _r(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new ze(null,e)}function to(e){return _r(e),e.headers=q.from(e.headers),e.data=wr.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Ts.getAdapter(e.adapter||at.adapter)(e).then(function(n){return _r(e),n.data=wr.call(e,e.transformResponse,n),n.headers=q.from(n.headers),n},function(n){return Ss(n)||(_r(e),n&&n.response&&(n.response.data=wr.call(e,e.transformResponse,n.response),n.response.headers=q.from(n.response.headers))),Promise.reject(n)})}const js="1.7.2",dn={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{dn[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}});const ro={};dn.transitional=function(t,r,n){function o(s,i){return"[Axios v"+js+"] Transitional option '"+s+"'"+i+(n?". "+n:"")}return(s,i,a)=>{if(t===!1)throw new O(o(i," has been removed"+(r?" in "+r:"")),O.ERR_DEPRECATED);return r&&!ro[i]&&(ro[i]=!0,console.warn(o(i," has been deprecated since v"+r+" and will be removed in the near future"))),t?t(s,i,a):!0}};function bl(e,t,r){if(typeof e!="object")throw new O("options must be an object",O.ERR_BAD_OPTION_VALUE);const n=Object.keys(e);let o=n.length;for(;o-- >0;){const s=n[o],i=t[s];if(i){const a=e[s],l=a===void 0||i(a,s,e);if(l!==!0)throw new O("option "+s+" must be "+l,O.ERR_BAD_OPTION_VALUE);continue}if(r!==!0)throw new O("Unknown option "+s,O.ERR_BAD_OPTION)}}const Ur={assertOptions:bl,validators:dn},pe=Ur.validators;class Se{constructor(t){this.defaults=t,this.interceptors={request:new Kn,response:new Kn}}async request(t,r){try{return await this._request(t,r)}catch(n){if(n instanceof Error){let o;Error.captureStackTrace?Error.captureStackTrace(o={}):o=new Error;const s=o.stack?o.stack.replace(/^.+\n/,""):"";try{n.stack?s&&!String(n.stack).endsWith(s.replace(/^.+\n.+\n/,""))&&(n.stack+=`
`+s):n.stack=s}catch{}}throw n}}_request(t,r){typeof t=="string"?(r=r||{},r.url=t):r=t||{},r=ke(this.defaults,r);const{transitional:n,paramsSerializer:o,headers:s}=r;n!==void 0&&Ur.assertOptions(n,{silentJSONParsing:pe.transitional(pe.boolean),forcedJSONParsing:pe.transitional(pe.boolean),clarifyTimeoutError:pe.transitional(pe.boolean)},!1),o!=null&&(p.isFunction(o)?r.paramsSerializer={serialize:o}:Ur.assertOptions(o,{encode:pe.function,serialize:pe.function},!0)),r.method=(r.method||this.defaults.method||"get").toLowerCase();let i=s&&p.merge(s.common,s[r.method]);s&&p.forEach(["delete","get","head","post","put","patch","common"],h=>{delete s[h]}),r.headers=q.concat(i,s);const a=[];let l=!0;this.interceptors.request.forEach(function(x){typeof x.runWhen=="function"&&x.runWhen(r)===!1||(l=l&&x.synchronous,a.unshift(x.fulfilled,x.rejected))});const u=[];this.interceptors.response.forEach(function(x){u.push(x.fulfilled,x.rejected)});let c,f=0,m;if(!l){const h=[to.bind(this),void 0];for(h.unshift.apply(h,a),h.push.apply(h,u),m=h.length,c=Promise.resolve(r);f<m;)c=c.then(h[f++],h[f++]);return c}m=a.length;let y=r;for(f=0;f<m;){const h=a[f++],x=a[f++];try{y=h(y)}catch(v){x.call(this,v);break}}try{c=to.call(this,y)}catch(h){return Promise.reject(h)}for(f=0,m=u.length;f<m;)c=c.then(u[f++],u[f++]);return c}getUri(t){t=ke(this.defaults,t);const r=Es(t.baseURL,t.url);return ws(r,t.params,t.paramsSerializer)}}p.forEach(["delete","get","head","options"],function(t){Se.prototype[t]=function(r,n){return this.request(ke(n||{},{method:t,url:r,data:(n||{}).data}))}});p.forEach(["post","put","patch"],function(t){function r(n){return function(s,i,a){return this.request(ke(a||{},{method:t,headers:n?{"Content-Type":"multipart/form-data"}:{},url:s,data:i}))}}Se.prototype[t]=r(),Se.prototype[t+"Form"]=r(!0)});class fn{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let r;this.promise=new Promise(function(s){r=s});const n=this;this.promise.then(o=>{if(!n._listeners)return;let s=n._listeners.length;for(;s-- >0;)n._listeners[s](o);n._listeners=null}),this.promise.then=o=>{let s;const i=new Promise(a=>{n.subscribe(a),s=a}).then(o);return i.cancel=function(){n.unsubscribe(s)},i},t(function(s,i,a){n.reason||(n.reason=new ze(s,i,a),r(n.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const r=this._listeners.indexOf(t);r!==-1&&this._listeners.splice(r,1)}static source(){let t;return{token:new fn(function(o){t=o}),cancel:t}}}function wl(e){return function(r){return e.apply(null,r)}}function _l(e){return p.isObject(e)&&e.isAxiosError===!0}const Hr={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Hr).forEach(([e,t])=>{Hr[t]=e});function Os(e){const t=new Se(e),r=cs(Se.prototype.request,t);return p.extend(r,Se.prototype,t,{allOwnKeys:!0}),p.extend(r,t,null,{allOwnKeys:!0}),r.create=function(o){return Os(ke(e,o))},r}const B=Os(at);B.Axios=Se;B.CanceledError=ze;B.CancelToken=fn;B.isCancel=Ss;B.VERSION=js;B.toFormData=tr;B.AxiosError=O;B.Cancel=B.CanceledError;B.all=function(t){return Promise.all(t)};B.spread=wl;B.isAxiosError=_l;B.mergeConfig=ke;B.AxiosHeaders=q;B.formToJSON=e=>vs(p.isHTMLForm(e)?new FormData(e):e);B.getAdapter=Ts.getAdapter;B.HttpStatusCode=Hr;B.default=B;const vl=async({toCurrency:e,fromCurrencies:t})=>{try{const{data:r}=await B({method:"get",url:xi,params:{vs_currency:e,ids:t,x_cg_demo_api_key:bi}});return r}catch{throw new Error("API Server error")}},Sl=[{time:1721329200,close:63545.86},{time:1721332800,close:63819.3},{time:1721336400,close:63838.59},{time:172134e4,close:64022.45},{time:1721343600,close:63981.43},{time:1721347200,close:63594.29},{time:1721350800,close:63804.41},{time:1721354400,close:63818.92},{time:1721358e3,close:64318.7},{time:1721361600,close:64143.66},{time:1721365200,close:64164.28},{time:1721368800,close:64208.81}],Cl={ETH:[{x:L("2024-07-11T00:00:00.000Z"),y:3099.49},{x:L("2024-07-12T00:00:00.000Z"),y:3134.62},{x:L("2024-07-13T00:00:00.000Z"),y:3176.67},{x:L("2024-07-14T00:00:00.000Z"),y:3246.12},{x:L("2024-07-15T00:00:00.000Z"),y:3485.5},{x:L("2024-07-16T00:00:00.000Z"),y:3446.19},{x:L("2024-07-17T00:00:00.000Z"),y:3387.66},{x:L("2024-07-18T00:00:00.000Z"),y:3399.69}],BTC:[{x:L("2024-07-11T00:00:00.000Z"),y:57348.75},{x:L("2024-07-12T00:00:00.000Z"),y:57913.68},{x:L("2024-07-13T00:00:00.000Z"),y:59231.06},{x:L("2024-07-14T00:00:00.000Z"),y:60818.77},{x:L("2024-07-15T00:00:00.000Z"),y:64765.55},{x:L("2024-07-16T00:00:00.000Z"),y:65087.61},{x:L("2024-07-17T00:00:00.000Z"),y:64096.64},{x:L("2024-07-18T00:00:00.000Z"),y:63555.09}]},no=[{value:"1",label:"1D"},{value:"7",label:"1W"},{value:"30",label:"1M"}],oo=[{value:"7",label:"Weekly"},{value:"30",label:"Monthly"},{value:"90",label:"Quarterly"}],so=["#7517F8","#E323FF","#4DFFDF","#4DA1FF","#F5AC6E","#60B7FF","#007AFF","#e9d4ff","#d2e031","#68822a","#f9d637","#48174d"],ct=18e5,lt=w.button.attrs(e=>({$width:e.$width==="full"?"100%":"120px"}))`
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
`,nr=G`
  display: flex;
  flex-direction: column;
`,ut=G`
  ${nr};
  align-items: center;
`,tt=G`
  ${ut};
  justify-content: center;
`,pn=G`
  display: flex;
  align-items: center;
`,ye=G`
  ${pn};
  justify-content: space-between;
`,El=G`
  display: flex;
  justify-content: flex-end;
`,hn=G`
  ${ut};
  position: relative;
  width: 100%;
`,As=G`
  ${tt};
  background-color: transparent;
  width: 100%;
`,io=w.input`
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
`,$s=G`
  width: 21px;
  height: 23px;
  fill: ${({theme:e})=>e.color.navBarSvg};

  &:hover {
    fill: ${({theme:e})=>e.color.navBarSvgActive};
  }
`,Ps=w(lt)`
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
`,mn=G`
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
`,gn=G`
  background-color: #484545;

  &:not(:checked) {
    font-family: ${({theme:e})=>e.fonts.interBold}, sans-serif;
    color: ${({theme:e})=>e.sharedColors.textSecondary};
    font-weight: 700;
  }
`,Ds=G`
  height: 100%;
  padding-left: 10px;
`,yn=G`
  align-items: flex-start;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 0 15px 0 21px;
  z-index: 100;
`,Ns=w.div.attrs(e=>({$border:e.$border==="true"?"1px solid rgba(255, 255, 255, 0.5)":"none"}))`
  background: ${({theme:e})=>e.color.boxBackground};
  border-radius: ${({theme:e})=>e.borderRadius.large};
  width: ${e=>e.$width};
  border: ${e=>e.$border};
  padding: ${e=>e.$padding};
`,kl=Fa`
  0% {
    transform: rotateY(0deg);
  }

  50% {
    transform: rotateY(180deg);
  }

  100% {
    transform: rotateY(360deg);
  }
`,Rl=w.div`
  ${As};
  perspective: 1000px;
  height: ${({height:e})=>e||"100vh"};
`,Tl=w.svg`
  animation: ${kl} 1.5s linear infinite;
  background: transparent;
  width: 40px;
  height: 40px;
`;function Te({height:e}){return d.jsx(Rl,{height:e,children:d.jsx(Tl,{children:d.jsx("use",{xlinkHref:"svg/sprite.svg#loader"})})})}const jl=w.div`
  ${As};
  color: ${({theme:e})=>e.color.textMain};
  height: 100%;
`;function Ue(){return d.jsx(jl,{children:"Data is currently unavailable!"})}const Ol=w(Ns)`
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
`,Al=w.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50px;
  height: 50px;
`,$l=w.div`
  ${yn}
  ${ye}
  top: 30px;
  color: ${({theme:e})=>e.sharedColors.btnIcon};
  text-transform: uppercase;
`,Pl=w.svg`
  width: 13px;
  height: 17px;
  fill: ${({theme:e})=>e.sharedColors.btnIcon};
  vertical-align: top;
  margin: 0 3px;
`,Dl=w.span`
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
`,Nl=w.svg`
  width: 16px;
  height: 17px;

  &.positive {
    --fill-color: #e72d04;
  }

  &.negative {
    --fill-color: #00c287;
    transform: rotate(180deg);
  }
`;function Il({image:e,symbol:t,current_price:r,position:n}){const{ref:o,width:s=1}=Wt(),{id:i}=V(g=>g.config.exchangeCurrency),a=Za(r),[l,u]=T.useState([]),[c,f]=T.useState(!0),[m,y]=T.useState(!1),v=n==="even"?"#4DFFDF":"#E323FF",C=!m&&!c,S=T.useMemo(()=>Qr({positive:r<Number(a),negative:r>Number(a)}),[r,a]),b=async()=>{f(!0),await st(1e3),u(Wa(Sl)),f(!1)};return T.useEffect(()=>{b();const g=setInterval(()=>{b()},ct);return()=>{clearInterval(g)}},[t]),d.jsxs(Ol,{ref:o,children:[d.jsx(Al,{children:d.jsx("img",{src:e,alt:t,width:"50",height:"50"})}),d.jsxs($l,{children:[d.jsxs("span",{children:[t,d.jsx(Pl,{children:d.jsx("use",{xlinkHref:"svg/sprite.svg#arrow-right"})}),i]}),a&&d.jsx(d.Fragment,{children:d.jsx(Nl,{className:S,children:d.jsx("use",{xlinkHref:"svg/sprite.svg#circled-arrow"})})})]}),d.jsx(Dl,{className:S,children:Va(t,r)}),d.jsxs("div",{children:[C&&d.jsx(ji,{width:s,height:200,domainPadding:{y:[50,0]},color:v,children:d.jsx(Po,{data:l})}),c&&d.jsx(Te,{height:"150px"}),m&&d.jsx(Ue,{})]})]})}const Bl=w.div`
  ${pn};
  height: calc(100% - 1px);
  overflow-y: hidden;
  overflow-x: auto;
`;function Ll(){const{data:e,isLoading:t,error:r}=V(u=>u.cryptoData),[n,o]=T.useState({}),s=T.useCallback(u=>u%2===0?"even":"odd",[]),i=!t&&!r&&e.length,a=t&&!e.length,l=!t&&!e.length&&r;return T.useEffect(()=>{o(qa(e))},[e]),d.jsxs(Bl,{children:[i&&Object.entries(n).map(([u,c],f)=>d.jsx(Il,{position:s(f),...c},u)),a&&d.jsx(Te,{}),l&&d.jsx(Ue,{})]})}const Is=()=>{const e="#868B93",t="#372C44",r="#261E35",n="rgba(0, 0, 0, 0.8)",o={axis:{stroke:e,strokeWidth:1},ticks:{stroke:e,size:4},tickLabels:{fill:e,fontSize:10}};return{chartMT:{marginTop:"15px"},axisMain:{...o,grid:{stroke:0}},axisDependent:{...o,grid:{stroke:t}},flyoutTooltipStyle:{fill:n},candleStick:{data:{fillOpacity:.7,stroke:r,strokeWidth:1}}}},Fl=w.div`
  ${Ds};
`,Ml=w.div`
  ${El};
  ${yn};
  padding-bottom: 18px;
`,zl=w.select`
  ${mn};
`,Ul=w.option`
  ${gn};
`,Hl=Oi("voronoi","cursor");function Gl(){const e=Is(),{ref:t,width:r=1,height:n=1}=Wt(),{currenciesList:o,exchangeCurrency:s}=V(g=>g.config),[i,a]=T.useState({}),[l,u]=T.useState(!0),[c,f]=T.useState(!1),[m,y]=T.useState(oo[0].value),h=T.useMemo(()=>Object.getOwnPropertyNames(i).length,[i]),x="#c43a31",v=!c&&!l&&!!h,C=!l&&c,S=async()=>{u(!0),await st(500),a(Cl),u(!1)},b=({target:{value:g}})=>{y(g)};return T.useEffect(()=>{S();const g=setInterval(()=>{S()},ct);return()=>{clearInterval(g)}},[m]),d.jsxs(Fl,{ref:t,children:[d.jsx(Ml,{children:d.jsx(zl,{value:m,onChange:b,"aria-label":"Market period overview",children:oo.map(({value:g,label:R})=>d.jsx(Ul,{value:g,children:R},g))})}),v&&d.jsxs(Do,{theme:No.material,domainPadding:{x:r<600?40:110,y:10},scale:{x:"time"},width:r,height:n,containerComponent:d.jsx(Hl,{style:e.chartMT,cursorDimension:"x",voronoiDimension:"x",labelComponent:d.jsx(Ai,{centerOffset:{x:80,y:10},constrainToVisibleArea:!0,dy:-50,flyoutStyle:e.flyoutTooltipStyle}),labels:({datum:g})=>{const R=Object.entries(i).find(([E,_])=>_.find(({y:k})=>k===g.y));return`${R==null?void 0:R[0].toLocaleUpperCase()}: ${s.symbol}${g.y} (${Ka(g.x)})`}}),children:[d.jsx(Ot,{style:e.axisMain}),d.jsx(Ot,{dependentAxis:!0,style:e.axisDependent,tickFormat:as}),Object.entries(i).map(([g,R],E)=>d.jsx(Po,{interpolation:"basis",style:{data:{stroke:so[E]||x},labels:{fill:so[E]||x}},data:R},g))]},m),l&&d.jsx(Te,{height:`${n}px`}),C&&d.jsx(Ue,{})]})}const Wl=[{id:"31269784",guid:"https://en.coinotag.com/bitcoin-price-surges-to-67000-driven-by-institutional-interest-and-miners-accumulation/",published_on:1721485443,imageurl:"https://resources.cryptocompare.com/news/77/31269784.jpeg",title:"Bitcoin Price Surges to $67,000 Driven by Institutional Interest and Miners’ Accumulation",url:"https://en.coinotag.com/bitcoin-price-surges-to-67000-driven-by-institutional-interest-and-miners-accumulation/",body:"Bitcoin’s price has recently experienced a notable upswing, breaking through the $67,000 threshold after an extended period of fluctuation. Several influencing factors, such as governmental actions and investor behavior, are contributing to this upward trend. A compelling detail to consider is the recent accumulation of Bitcoin by miners, signaling potential long-term bullish sentiment. Discover the",tags:"News|BTC",lang:"EN",upvotes:"0",downvotes:"0",categories:"BTC|TRADING|BUSINESS",source_info:{name:"CoinOtag",img:"https://resources.cryptocompare.com/news/77/default.png",lang:"EN"},source:"coinotag"},{id:"31269664",guid:"https://coingape.com/?p=208640",published_on:1721485272,imageurl:"https://images.cryptocompare.com/news/default/coingape.png",title:"Crypto Titans Bet On Donald Trump’s Win For SEC Shake-Up",url:"https://coingape.com/crypto-titans-bet-on-donald-trumps-win-for-sec-shake-up/",body:"As the 2024 US presidential election approaches, crypto leaders are anticipating significant changes in regulatory oversight if Donald Trump returns to the White House. The crypto industry is dissatisfied with current administration’s stringent approach led by the Securities and Exchange Commission (SEC) under Chair Gary Gensler. This has prompted hopes among crypto advocates that a The post Crypto Titans Bet On Donald Trump’s Win For SEC Shake-Up appeared first on CoinGape .",tags:"24/7 Cryptocurrency News|Regulation News|Donald Trump Bitcoin|Donald Trump Crypto|Ripple vs SEC News|Securities and Exchange Commission",lang:"EN",upvotes:"0",downvotes:"0",categories:"REGULATION|EXCHANGE",source_info:{name:"CoinGape",img:"https://images.cryptocompare.com/news/default/coingape.png",lang:"EN"},source:"coingape"},{id:"31269524",guid:"https://en.coinotag.com/dogecoin-price-surge-whale-accumulation-and-bullish-metrics-point-to-0-2-target/",published_on:1721484943,imageurl:"https://resources.cryptocompare.com/news/77/31269524.jpeg",title:"Dogecoin Price Surge: Whale Accumulation and Bullish Metrics Point to $0.2 Target",url:"https://en.coinotag.com/dogecoin-price-surge-whale-accumulation-and-bullish-metrics-point-to-0-2-target/",body:"The recent rise in Dogecoin prices has sparked interest within the cryptocurrency community. There is growing speculation that Dogecoin’s value may continue to increase due to various market dynamics. Significant whale accumulation and promising on-chain metrics are bolstering a bullish outlook for Dogecoin. Dogecoin’s recent surge in price, boosted by whale transactions and on-chain data,",tags:"News|DOGE",lang:"EN",upvotes:"0",downvotes:"0",categories:"DOGE|TRADING|MARKET",source_info:{name:"CoinOtag",img:"https://resources.cryptocompare.com/news/77/default.png",lang:"EN"},source:"coinotag"}],Oe={xs:"375px",sm:"600px",md:"900px",lg:"1200px",xl:"1440px",xxl:"1920px"},N={xs:`(max-width: ${Oe.xs})`,sm:`(max-width: ${Oe.sm})`,md:`(max-width: ${Oe.md})`,lg:`(max-width: ${Oe.lg})`,xl:`(max-width: ${Oe.xl})`,xxl:`(max-width: ${Oe.xxl})`},ql=w.div`
  ${nr}
  height: 100%;
  padding: 10px;
  overflow: auto;
`,Vl=w.article`
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

  @media ${N.sm} {
    flex-direction: column;
    min-width: 100%;
    padding: 10px;
  }

  &:last-child {
    margin-bottom: 0;
  }
`,Kl=w.div`
  border-radius: ${({theme:e})=>e.borderRadius.extraSmall};
  min-width: 160px;
  max-width: 210px;
  flex-basis: 30%;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;

  @media ${N.sm} {
    /* min-width: 100%;
    max-height: 100px; */
    display: none;
  }

  img {
    border-radius: ${({theme:e})=>e.borderRadius.extraSmall};
    aspect-ratio: 10 / 9;
    transition: transform 0.3s linear;
  }
`,Zl=w.div`
  ${nr};
  flex-grow: 1;
`,Yl=w.h3`
  font-size: clamp(13.5px, 2vw, 16px);
  line-height: 1.1;
  color: ${({theme:e})=>e.sharedColors.searchText};
  text-shadow: 1px 1px black;
  margin-bottom: 20px;
  transition: color 0.3s ease-in-out;

  @media ${N.sm} {
    margin-bottom: 13px;
  }

  &:hover {
    color: ${({theme:e})=>e.sharedColors.accentLight};
  }
`,Jl=w.p`
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
`,Xl=w.div`
  ${ye};
  flex-wrap: wrap;
  font-size: 0.6875rem;
`,Ql=w.p`
  ${ye};
  color: ${({theme:e})=>e.color.articleTime};
  margin-right: 15px;
  margin-top: 5px;
`,eu=w.div`
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
`,tu=w.span`
  display: inline-block;
  color: ${({theme:e})=>e.sharedColors.btnIcon};
  border-radius: ${({theme:e})=>e.borderRadius.medium};
  background: ${({theme:e})=>e.sharedColors.accentColor};
  padding: 5px 7px;
  margin: 2px;
`;function ru(){const[e,t]=T.useState([]),[r,n]=T.useState(!0),[o,s]=T.useState(!1),i=async()=>{n(!0),await st(1e3),t(Wl),n(!1)},a=l=>L.unix(l).format("MMMM Do YYYY, h:mm a");return T.useEffect(()=>{i();const l=setInterval(()=>{i()},ct);return()=>{clearInterval(l)}},[]),d.jsxs(ql,{children:[e==null?void 0:e.map(({id:l,imageurl:u,title:c,url:f,categories:m,published_on:y,body:h})=>d.jsxs(Vl,{children:[d.jsx(Kl,{children:d.jsx("img",{src:u,width:"300",height:"300",alt:c})}),d.jsxs(Zl,{children:[d.jsx(Yl,{children:d.jsx("a",{href:f,target:"_blank",children:c})}),d.jsx(Jl,{children:h}),d.jsxs(Xl,{children:[d.jsx(Ql,{children:a(y)}),d.jsx(eu,{children:m.split("|").map(x=>d.jsx(tu,{children:x},x))})]})]})]},l)),r&&d.jsx(Te,{}),o&&d.jsx(Ue,{})]})}const nu=[[17093952e5,61942,62211,61721,61845],[17094096e5,61828,62139,61726,62139],[1709424e6,62171,62210,61821,62068]],ou=w.div`
  ${Ds};
`,su=w.div`
  ${ye};
  ${yn};
`,iu=w.div`
  display: flex;
  gap: 5px;
  margin-left: 5px;
`,au=w(lt)`
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
`,cu=w.select`
  ${mn};
`,lu=w.option`
  ${gn};
`;function uu(){const e=Is(),{ref:t,width:r=1,height:n=1}=Wt(),{currenciesList:o,exchangeCurrency:s}=V(g=>g.config),[i,a]=T.useState([]),[l,u]=T.useState(!0),[c,f]=T.useState(!1),[m,y]=T.useState(o[0].id),[h,x]=T.useState(no[0].value),v=!c&&!l&&!!i.length,C=async()=>{u(!0),await st(1e3);const g=Ga(nu);a(g),u(!1)},S=({target:{value:g}})=>{y(g)},b=g=>{const{value:R}=g.target;x(R)};return T.useEffect(()=>{C();const g=setInterval(()=>{C()},ct);return()=>{clearInterval(g)}},[m,h]),d.jsxs(ou,{ref:t,children:[d.jsxs(su,{children:[d.jsx(cu,{value:m,onChange:S,"aria-label":"Coin to currency",children:o.map(({id:g,symbol:R})=>d.jsxs(lu,{value:g,children:[R,"/",s.id]},g))}),d.jsx(iu,{children:no.map(({value:g,label:R})=>d.jsx(au,{value:g,className:Qr({active:h===g}),onClick:b,children:R},g))})]}),d.jsx("svg",{style:{position:"absolute"},children:d.jsxs("defs",{children:[d.jsxs("linearGradient",{id:"positiveGradient",x1:"0%",y1:"0%",x2:"0%",y2:"100%",children:[d.jsx("stop",{offset:"0%",stopColor:"#4DFFDF"}),d.jsx("stop",{offset:"100%",stopColor:"#4DA1FF"})]}),d.jsxs("linearGradient",{id:"negativeGradient",x1:"0%",y1:"0%",x2:"0%",y2:"100%",children:[d.jsx("stop",{offset:"0%",stopColor:"#E323FF"}),d.jsx("stop",{offset:"100%",stopColor:"#7517F8"})]})]})}),v&&d.jsxs(Do,{theme:No.material,domainPadding:{x:r<600?40:110},scale:{x:"time"},width:r,height:n,containerComponent:d.jsx($i,{style:e.chartMT}),children:[d.jsx(Ot,{style:e.axisMain}),d.jsx(Ot,{dependentAxis:!0,style:e.axisDependent,tickFormat:as}),d.jsx(Pi,{style:e.candleStick,candleColors:{positive:"url(#positiveGradient)",negative:"url(#negativeGradient)"},data:i})]},`${m}-${h}`),l&&d.jsx(Te,{height:`${n}px`}),c&&d.jsx(Ue,{})]})}function z(e){return`Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}var du=typeof Symbol=="function"&&Symbol.observable||"@@observable",ao=du,vr=()=>Math.random().toString(36).substring(7).split("").join("."),fu={INIT:`@@redux/INIT${vr()}`,REPLACE:`@@redux/REPLACE${vr()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${vr()}`},Lt=fu;function xn(e){if(typeof e!="object"||e===null)return!1;let t=e;for(;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t||Object.getPrototypeOf(e)===null}function Bs(e,t,r){if(typeof e!="function")throw new Error(z(2));if(typeof t=="function"&&typeof r=="function"||typeof r=="function"&&typeof arguments[3]=="function")throw new Error(z(0));if(typeof t=="function"&&typeof r>"u"&&(r=t,t=void 0),typeof r<"u"){if(typeof r!="function")throw new Error(z(1));return r(Bs)(e,t)}let n=e,o=t,s=new Map,i=s,a=0,l=!1;function u(){i===s&&(i=new Map,s.forEach((v,C)=>{i.set(C,v)}))}function c(){if(l)throw new Error(z(3));return o}function f(v){if(typeof v!="function")throw new Error(z(4));if(l)throw new Error(z(5));let C=!0;u();const S=a++;return i.set(S,v),function(){if(C){if(l)throw new Error(z(6));C=!1,u(),i.delete(S),s=null}}}function m(v){if(!xn(v))throw new Error(z(7));if(typeof v.type>"u")throw new Error(z(8));if(typeof v.type!="string")throw new Error(z(17));if(l)throw new Error(z(9));try{l=!0,o=n(o,v)}finally{l=!1}return(s=i).forEach(S=>{S()}),v}function y(v){if(typeof v!="function")throw new Error(z(10));n=v,m({type:Lt.REPLACE})}function h(){const v=f;return{subscribe(C){if(typeof C!="object"||C===null)throw new Error(z(11));function S(){const g=C;g.next&&g.next(c())}return S(),{unsubscribe:v(S)}},[ao](){return this}}}return m({type:Lt.INIT}),{dispatch:m,subscribe:f,getState:c,replaceReducer:y,[ao]:h}}function pu(e){Object.keys(e).forEach(t=>{const r=e[t];if(typeof r(void 0,{type:Lt.INIT})>"u")throw new Error(z(12));if(typeof r(void 0,{type:Lt.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(z(13))})}function Ls(e){const t=Object.keys(e),r={};for(let s=0;s<t.length;s++){const i=t[s];typeof e[i]=="function"&&(r[i]=e[i])}const n=Object.keys(r);let o;try{pu(r)}catch(s){o=s}return function(i={},a){if(o)throw o;let l=!1;const u={};for(let c=0;c<n.length;c++){const f=n[c],m=r[f],y=i[f],h=m(y,a);if(typeof h>"u")throw a&&a.type,new Error(z(14));u[f]=h,l=l||h!==y}return l=l||n.length!==Object.keys(i).length,l?u:i}}function Ft(...e){return e.length===0?t=>t:e.length===1?e[0]:e.reduce((t,r)=>(...n)=>t(r(...n)))}function hu(...e){return t=>(r,n)=>{const o=t(r,n);let s=()=>{throw new Error(z(15))};const i={getState:o.getState,dispatch:(l,...u)=>s(l,...u)},a=e.map(l=>l(i));return s=Ft(...a)(o.dispatch),{...o,dispatch:s}}}function mu(e){return xn(e)&&"type"in e&&typeof e.type=="string"}var Fs=Symbol.for("immer-nothing"),co=Symbol.for("immer-draftable"),Z=Symbol.for("immer-state");function Q(e,...t){throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var Be=Object.getPrototypeOf;function ge(e){return!!e&&!!e[Z]}function le(e){var t;return e?Ms(e)||Array.isArray(e)||!!e[co]||!!((t=e.constructor)!=null&&t[co])||sr(e)||ir(e):!1}var gu=Object.prototype.constructor.toString();function Ms(e){if(!e||typeof e!="object")return!1;const t=Be(e);if(t===null)return!0;const r=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return r===Object?!0:typeof r=="function"&&Function.toString.call(r)===gu}function Mt(e,t){or(e)===0?Reflect.ownKeys(e).forEach(r=>{t(r,e[r],e)}):e.forEach((r,n)=>t(n,r,e))}function or(e){const t=e[Z];return t?t.type_:Array.isArray(e)?1:sr(e)?2:ir(e)?3:0}function Gr(e,t){return or(e)===2?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function zs(e,t,r){const n=or(e);n===2?e.set(t,r):n===3?e.add(r):e[t]=r}function yu(e,t){return e===t?e!==0||1/e===1/t:e!==e&&t!==t}function sr(e){return e instanceof Map}function ir(e){return e instanceof Set}function we(e){return e.copy_||e.base_}function Wr(e,t){if(sr(e))return new Map(e);if(ir(e))return new Set(e);if(Array.isArray(e))return Array.prototype.slice.call(e);const r=Ms(e);if(t===!0||t==="class_only"&&!r){const n=Object.getOwnPropertyDescriptors(e);delete n[Z];let o=Reflect.ownKeys(n);for(let s=0;s<o.length;s++){const i=o[s],a=n[i];a.writable===!1&&(a.writable=!0,a.configurable=!0),(a.get||a.set)&&(n[i]={configurable:!0,writable:!0,enumerable:a.enumerable,value:e[i]})}return Object.create(Be(e),n)}else{const n=Be(e);if(n!==null&&r)return{...e};const o=Object.create(n);return Object.assign(o,e)}}function bn(e,t=!1){return ar(e)||ge(e)||!le(e)||(or(e)>1&&(e.set=e.add=e.clear=e.delete=xu),Object.freeze(e),t&&Object.entries(e).forEach(([r,n])=>bn(n,!0))),e}function xu(){Q(2)}function ar(e){return Object.isFrozen(e)}var bu={};function Re(e){const t=bu[e];return t||Q(0,e),t}var rt;function Us(){return rt}function wu(e,t){return{drafts_:[],parent_:e,immer_:t,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function lo(e,t){t&&(Re("Patches"),e.patches_=[],e.inversePatches_=[],e.patchListener_=t)}function qr(e){Vr(e),e.drafts_.forEach(_u),e.drafts_=null}function Vr(e){e===rt&&(rt=e.parent_)}function uo(e){return rt=wu(rt,e)}function _u(e){const t=e[Z];t.type_===0||t.type_===1?t.revoke_():t.revoked_=!0}function fo(e,t){t.unfinalizedDrafts_=t.drafts_.length;const r=t.drafts_[0];return e!==void 0&&e!==r?(r[Z].modified_&&(qr(t),Q(4)),le(e)&&(e=zt(t,e),t.parent_||Ut(t,e)),t.patches_&&Re("Patches").generateReplacementPatches_(r[Z].base_,e,t.patches_,t.inversePatches_)):e=zt(t,r,[]),qr(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),e!==Fs?e:void 0}function zt(e,t,r){if(ar(t))return t;const n=t[Z];if(!n)return Mt(t,(o,s)=>po(e,n,t,o,s,r)),t;if(n.scope_!==e)return t;if(!n.modified_)return Ut(e,n.base_,!0),n.base_;if(!n.finalized_){n.finalized_=!0,n.scope_.unfinalizedDrafts_--;const o=n.copy_;let s=o,i=!1;n.type_===3&&(s=new Set(o),o.clear(),i=!0),Mt(s,(a,l)=>po(e,n,o,a,l,r,i)),Ut(e,o,!1),r&&e.patches_&&Re("Patches").generatePatches_(n,r,e.patches_,e.inversePatches_)}return n.copy_}function po(e,t,r,n,o,s,i){if(ge(o)){const a=s&&t&&t.type_!==3&&!Gr(t.assigned_,n)?s.concat(n):void 0,l=zt(e,o,a);if(zs(r,n,l),ge(l))e.canAutoFreeze_=!1;else return}else i&&r.add(o);if(le(o)&&!ar(o)){if(!e.immer_.autoFreeze_&&e.unfinalizedDrafts_<1)return;zt(e,o),(!t||!t.scope_.parent_)&&typeof n!="symbol"&&Object.prototype.propertyIsEnumerable.call(r,n)&&Ut(e,o)}}function Ut(e,t,r=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&bn(t,r)}function vu(e,t){const r=Array.isArray(e),n={type_:r?1:0,scope_:t?t.scope_:Us(),modified_:!1,finalized_:!1,assigned_:{},parent_:t,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1};let o=n,s=wn;r&&(o=[n],s=nt);const{revoke:i,proxy:a}=Proxy.revocable(o,s);return n.draft_=a,n.revoke_=i,a}var wn={get(e,t){if(t===Z)return e;const r=we(e);if(!Gr(r,t))return Su(e,r,t);const n=r[t];return e.finalized_||!le(n)?n:n===Sr(e.base_,t)?(Cr(e),e.copy_[t]=Zr(n,e)):n},has(e,t){return t in we(e)},ownKeys(e){return Reflect.ownKeys(we(e))},set(e,t,r){const n=Hs(we(e),t);if(n!=null&&n.set)return n.set.call(e.draft_,r),!0;if(!e.modified_){const o=Sr(we(e),t),s=o==null?void 0:o[Z];if(s&&s.base_===r)return e.copy_[t]=r,e.assigned_[t]=!1,!0;if(yu(r,o)&&(r!==void 0||Gr(e.base_,t)))return!0;Cr(e),Kr(e)}return e.copy_[t]===r&&(r!==void 0||t in e.copy_)||Number.isNaN(r)&&Number.isNaN(e.copy_[t])||(e.copy_[t]=r,e.assigned_[t]=!0),!0},deleteProperty(e,t){return Sr(e.base_,t)!==void 0||t in e.base_?(e.assigned_[t]=!1,Cr(e),Kr(e)):delete e.assigned_[t],e.copy_&&delete e.copy_[t],!0},getOwnPropertyDescriptor(e,t){const r=we(e),n=Reflect.getOwnPropertyDescriptor(r,t);return n&&{writable:!0,configurable:e.type_!==1||t!=="length",enumerable:n.enumerable,value:r[t]}},defineProperty(){Q(11)},getPrototypeOf(e){return Be(e.base_)},setPrototypeOf(){Q(12)}},nt={};Mt(wn,(e,t)=>{nt[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}});nt.deleteProperty=function(e,t){return nt.set.call(this,e,t,void 0)};nt.set=function(e,t,r){return wn.set.call(this,e[0],t,r,e[0])};function Sr(e,t){const r=e[Z];return(r?we(r):e)[t]}function Su(e,t,r){var o;const n=Hs(t,r);return n?"value"in n?n.value:(o=n.get)==null?void 0:o.call(e.draft_):void 0}function Hs(e,t){if(!(t in e))return;let r=Be(e);for(;r;){const n=Object.getOwnPropertyDescriptor(r,t);if(n)return n;r=Be(r)}}function Kr(e){e.modified_||(e.modified_=!0,e.parent_&&Kr(e.parent_))}function Cr(e){e.copy_||(e.copy_=Wr(e.base_,e.scope_.immer_.useStrictShallowCopy_))}var Cu=class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(t,r,n)=>{if(typeof t=="function"&&typeof r!="function"){const s=r;r=t;const i=this;return function(l=s,...u){return i.produce(l,c=>r.call(this,c,...u))}}typeof r!="function"&&Q(6),n!==void 0&&typeof n!="function"&&Q(7);let o;if(le(t)){const s=uo(this),i=Zr(t,void 0);let a=!0;try{o=r(i),a=!1}finally{a?qr(s):Vr(s)}return lo(s,n),fo(o,s)}else if(!t||typeof t!="object"){if(o=r(t),o===void 0&&(o=t),o===Fs&&(o=void 0),this.autoFreeze_&&bn(o,!0),n){const s=[],i=[];Re("Patches").generateReplacementPatches_(t,o,s,i),n(s,i)}return o}else Q(1,t)},this.produceWithPatches=(t,r)=>{if(typeof t=="function")return(i,...a)=>this.produceWithPatches(i,l=>t(l,...a));let n,o;return[this.produce(t,r,(i,a)=>{n=i,o=a}),n,o]},typeof(e==null?void 0:e.autoFreeze)=="boolean"&&this.setAutoFreeze(e.autoFreeze),typeof(e==null?void 0:e.useStrictShallowCopy)=="boolean"&&this.setUseStrictShallowCopy(e.useStrictShallowCopy)}createDraft(e){le(e)||Q(8),ge(e)&&(e=Gs(e));const t=uo(this),r=Zr(e,void 0);return r[Z].isManual_=!0,Vr(t),r}finishDraft(e,t){const r=e&&e[Z];(!r||!r.isManual_)&&Q(9);const{scope_:n}=r;return lo(n,t),fo(void 0,n)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}applyPatches(e,t){let r;for(r=t.length-1;r>=0;r--){const o=t[r];if(o.path.length===0&&o.op==="replace"){e=o.value;break}}r>-1&&(t=t.slice(r+1));const n=Re("Patches").applyPatches_;return ge(e)?n(e,t):this.produce(e,o=>n(o,t))}};function Zr(e,t){const r=sr(e)?Re("MapSet").proxyMap_(e,t):ir(e)?Re("MapSet").proxySet_(e,t):vu(e,t);return(t?t.scope_:Us()).drafts_.push(r),r}function Gs(e){return ge(e)||Q(10,e),Ws(e)}function Ws(e){if(!le(e)||ar(e))return e;const t=e[Z];let r;if(t){if(!t.modified_)return t.base_;t.finalized_=!0,r=Wr(e,t.scope_.immer_.useStrictShallowCopy_)}else r=Wr(e,!0);return Mt(r,(n,o)=>{zs(r,n,Ws(o))}),t&&(t.finalized_=!1),r}var Y=new Cu,qs=Y.produce;Y.produceWithPatches.bind(Y);Y.setAutoFreeze.bind(Y);Y.setUseStrictShallowCopy.bind(Y);Y.applyPatches.bind(Y);Y.createDraft.bind(Y);Y.finishDraft.bind(Y);function Eu(e,t=`expected a function, instead received ${typeof e}`){if(typeof e!="function")throw new TypeError(t)}function ku(e,t=`expected an object, instead received ${typeof e}`){if(typeof e!="object")throw new TypeError(t)}function Ru(e,t="expected all items to be functions, instead received the following types: "){if(!e.every(r=>typeof r=="function")){const r=e.map(n=>typeof n=="function"?`function ${n.name||"unnamed"}()`:typeof n).join(", ");throw new TypeError(`${t}[${r}]`)}}var ho=e=>Array.isArray(e)?e:[e];function Tu(e){const t=Array.isArray(e[0])?e[0]:e;return Ru(t,"createSelector expects all input-selectors to be functions, but received the following types: "),t}function ju(e,t){const r=[],{length:n}=e;for(let o=0;o<n;o++)r.push(e[o].apply(null,t));return r}var Ou=class{constructor(e){this.value=e}deref(){return this.value}},Au=typeof WeakRef<"u"?WeakRef:Ou,$u=0,mo=1;function yt(){return{s:$u,v:void 0,o:null,p:null}}function _n(e,t={}){let r=yt();const{resultEqualityCheck:n}=t;let o,s=0;function i(){var f;let a=r;const{length:l}=arguments;for(let m=0,y=l;m<y;m++){const h=arguments[m];if(typeof h=="function"||typeof h=="object"&&h!==null){let x=a.o;x===null&&(a.o=x=new WeakMap);const v=x.get(h);v===void 0?(a=yt(),x.set(h,a)):a=v}else{let x=a.p;x===null&&(a.p=x=new Map);const v=x.get(h);v===void 0?(a=yt(),x.set(h,a)):a=v}}const u=a;let c;if(a.s===mo)c=a.v;else if(c=e.apply(null,arguments),s++,n){const m=((f=o==null?void 0:o.deref)==null?void 0:f.call(o))??o;m!=null&&n(m,c)&&(c=m,s!==0&&s--),o=typeof c=="object"&&c!==null||typeof c=="function"?new Au(c):c}return u.s=mo,u.v=c,c}return i.clearCache=()=>{r=yt(),i.resetResultsCount()},i.resultsCount=()=>s,i.resetResultsCount=()=>{s=0},i}function Vs(e,...t){const r=typeof e=="function"?{memoize:e,memoizeOptions:t}:e,n=(...o)=>{let s=0,i=0,a,l={},u=o.pop();typeof u=="object"&&(l=u,u=o.pop()),Eu(u,`createSelector expects an output function after the inputs, but received: [${typeof u}]`);const c={...r,...l},{memoize:f,memoizeOptions:m=[],argsMemoize:y=_n,argsMemoizeOptions:h=[],devModeChecks:x={}}=c,v=ho(m),C=ho(h),S=Tu(o),b=f(function(){return s++,u.apply(null,arguments)},...v),g=y(function(){i++;const E=ju(S,arguments);return a=b.apply(null,E),a},...C);return Object.assign(g,{resultFunc:u,memoizedResultFunc:b,dependencies:S,dependencyRecomputations:()=>i,resetDependencyRecomputations:()=>{i=0},lastResult:()=>a,recomputations:()=>s,resetRecomputations:()=>{s=0},memoize:f,argsMemoize:y})};return Object.assign(n,{withTypes:()=>n}),n}var Pu=Vs(_n),Du=Object.assign((e,t=Pu)=>{ku(e,`createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof e}`);const r=Object.keys(e),n=r.map(s=>e[s]);return t(n,(...s)=>s.reduce((i,a,l)=>(i[r[l]]=a,i),{}))},{withTypes:()=>Du});function Ks(e){return({dispatch:r,getState:n})=>o=>s=>typeof s=="function"?s(r,n,e):o(s)}var Nu=Ks(),Iu=Ks,Bu=(...e)=>{const t=Vs(...e),r=Object.assign((...n)=>{const o=t(...n),s=(i,...a)=>o(ge(i)?Gs(i):i,...a);return Object.assign(s,o),s},{withTypes:()=>r});return r};Bu(_n);var Lu=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?Ft:Ft.apply(null,arguments)},Fu=e=>e&&typeof e.match=="function";function ce(e,t){function r(...n){if(t){let o=t(...n);if(!o)throw new Error(H(0));return{type:e,payload:o.payload,..."meta"in o&&{meta:o.meta},..."error"in o&&{error:o.error}}}return{type:e,payload:n[0]}}return r.toString=()=>`${e}`,r.type=e,r.match=n=>mu(n)&&n.type===e,r}var Zs=class Ye extends Array{constructor(...t){super(...t),Object.setPrototypeOf(this,Ye.prototype)}static get[Symbol.species](){return Ye}concat(...t){return super.concat.apply(this,t)}prepend(...t){return t.length===1&&Array.isArray(t[0])?new Ye(...t[0].concat(this)):new Ye(...t.concat(this))}};function go(e){return le(e)?qs(e,()=>{}):e}function Yr(e,t,r){if(e.has(t)){let o=e.get(t);return r.update&&(o=r.update(o,t,e),e.set(t,o)),o}if(!r.insert)throw new Error(H(10));const n=r.insert(t,e);return e.set(t,n),n}function Mu(e){return typeof e=="boolean"}var zu=()=>function(t){const{thunk:r=!0,immutableCheck:n=!0,serializableCheck:o=!0,actionCreatorCheck:s=!0}=t??{};let i=new Zs;return r&&(Mu(r)?i.push(Nu):i.push(Iu(r.extraArgument))),i},Uu="RTK_autoBatch",Ys=e=>t=>{setTimeout(t,e)},Hu=typeof window<"u"&&window.requestAnimationFrame?window.requestAnimationFrame:Ys(10),Gu=(e={type:"raf"})=>t=>(...r)=>{const n=t(...r);let o=!0,s=!1,i=!1;const a=new Set,l=e.type==="tick"?queueMicrotask:e.type==="raf"?Hu:e.type==="callback"?e.queueNotification:Ys(e.timeout),u=()=>{i=!1,s&&(s=!1,a.forEach(c=>c()))};return Object.assign({},n,{subscribe(c){const f=()=>o&&c(),m=n.subscribe(f);return a.add(c),()=>{m(),a.delete(c)}},dispatch(c){var f;try{return o=!((f=c==null?void 0:c.meta)!=null&&f[Uu]),s=!o,s&&(i||(i=!0,l(u))),n.dispatch(c)}finally{o=!0}}})},Wu=e=>function(r){const{autoBatch:n=!0}=r??{};let o=new Zs(e);return n&&o.push(Gu(typeof n=="object"?n:void 0)),o},qu=!0;function Vu(e){const t=zu(),{reducer:r=void 0,middleware:n,devTools:o=!0,preloadedState:s=void 0,enhancers:i=void 0}=e||{};let a;if(typeof r=="function")a=r;else if(xn(r))a=Ls(r);else throw new Error(H(1));let l;typeof n=="function"?l=n(t):l=t();let u=Ft;o&&(u=Lu({trace:!qu,...typeof o=="object"&&o}));const c=hu(...l),f=Wu(c);let m=typeof i=="function"?i(f):f();const y=u(...m);return Bs(a,s,y)}function Js(e){const t={},r=[];let n;const o={addCase(s,i){const a=typeof s=="string"?s:s.type;if(!a)throw new Error(H(28));if(a in t)throw new Error(H(29));return t[a]=i,o},addMatcher(s,i){return r.push({matcher:s,reducer:i}),o},addDefaultCase(s){return n=s,o}};return e(o),[t,r,n]}function Ku(e){return typeof e=="function"}function Zu(e,t){let[r,n,o]=Js(t),s;if(Ku(e))s=()=>go(e());else{const a=go(e);s=()=>a}function i(a=s(),l){let u=[r[l.type],...n.filter(({matcher:c})=>c(l)).map(({reducer:c})=>c)];return u.filter(c=>!!c).length===0&&(u=[o]),u.reduce((c,f)=>{if(f)if(ge(c)){const y=f(c,l);return y===void 0?c:y}else{if(le(c))return qs(c,m=>f(m,l));{const m=f(c,l);if(m===void 0){if(c===null)return c;throw new Error(H(9))}return m}}return c},a)}return i.getInitialState=s,i}var Yu=(e,t)=>Fu(e)?e.match(t):e(t);function Ju(...e){return t=>e.some(r=>Yu(r,t))}var Xu="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",vn=(e=21)=>{let t="",r=e;for(;r--;)t+=Xu[Math.random()*64|0];return t},Qu=["name","message","stack","code"],Er=class{constructor(e,t){dr(this,"_type");this.payload=e,this.meta=t}},yo=class{constructor(e,t){dr(this,"_type");this.payload=e,this.meta=t}},ed=e=>{if(typeof e=="object"&&e!==null){const t={};for(const r of Qu)typeof e[r]=="string"&&(t[r]=e[r]);return t}return{message:String(e)}},td=(()=>{function e(t,r,n){const o=ce(t+"/fulfilled",(l,u,c,f)=>({payload:l,meta:{...f||{},arg:c,requestId:u,requestStatus:"fulfilled"}})),s=ce(t+"/pending",(l,u,c)=>({payload:void 0,meta:{...c||{},arg:u,requestId:l,requestStatus:"pending"}})),i=ce(t+"/rejected",(l,u,c,f,m)=>({payload:f,error:(n&&n.serializeError||ed)(l||"Rejected"),meta:{...m||{},arg:c,requestId:u,rejectedWithValue:!!f,requestStatus:"rejected",aborted:(l==null?void 0:l.name)==="AbortError",condition:(l==null?void 0:l.name)==="ConditionError"}}));function a(l){return(u,c,f)=>{const m=n!=null&&n.idGenerator?n.idGenerator(l):vn(),y=new AbortController;let h,x;function v(S){x=S,y.abort()}const C=async function(){var g,R;let S;try{let E=(g=n==null?void 0:n.condition)==null?void 0:g.call(n,l,{getState:c,extra:f});if(nd(E)&&(E=await E),E===!1||y.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};const _=new Promise((k,j)=>{h=()=>{j({name:"AbortError",message:x||"Aborted"})},y.signal.addEventListener("abort",h)});u(s(m,l,(R=n==null?void 0:n.getPendingMeta)==null?void 0:R.call(n,{requestId:m,arg:l},{getState:c,extra:f}))),S=await Promise.race([_,Promise.resolve(r(l,{dispatch:u,getState:c,extra:f,requestId:m,signal:y.signal,abort:v,rejectWithValue:(k,j)=>new Er(k,j),fulfillWithValue:(k,j)=>new yo(k,j)})).then(k=>{if(k instanceof Er)throw k;return k instanceof yo?o(k.payload,m,l,k.meta):o(k,m,l)})])}catch(E){S=E instanceof Er?i(null,m,l,E.payload,E.meta):i(E,m,l)}finally{h&&y.signal.removeEventListener("abort",h)}return n&&!n.dispatchConditionRejection&&i.match(S)&&S.meta.condition||u(S),S}();return Object.assign(C,{abort:v,requestId:m,arg:l,unwrap(){return C.then(rd)}})}}return Object.assign(a,{pending:s,rejected:i,fulfilled:o,settled:Ju(i,o),typePrefix:t})}return e.withTypes=()=>e,e})();function rd(e){if(e.meta&&e.meta.rejectedWithValue)throw e.payload;if(e.error)throw e.error;return e.payload}function nd(e){return e!==null&&typeof e=="object"&&typeof e.then=="function"}var od=Symbol.for("rtk-slice-createasyncthunk");function sd(e,t){return`${e}/${t}`}function id({creators:e}={}){var r;const t=(r=e==null?void 0:e.asyncThunk)==null?void 0:r[od];return function(o){const{name:s,reducerPath:i=s}=o;if(!s)throw new Error(H(11));typeof process<"u";const a=(typeof o.reducers=="function"?o.reducers(cd()):o.reducers)||{},l=Object.keys(a),u={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},c={addCase(b,g){const R=typeof b=="string"?b:b.type;if(!R)throw new Error(H(12));if(R in u.sliceCaseReducersByType)throw new Error(H(13));return u.sliceCaseReducersByType[R]=g,c},addMatcher(b,g){return u.sliceMatchers.push({matcher:b,reducer:g}),c},exposeAction(b,g){return u.actionCreators[b]=g,c},exposeCaseReducer(b,g){return u.sliceCaseReducersByName[b]=g,c}};l.forEach(b=>{const g=a[b],R={reducerName:b,type:sd(s,b),createNotation:typeof o.reducers=="function"};ud(g)?fd(R,g,c,t):ld(R,g,c)});function f(){const[b={},g=[],R=void 0]=typeof o.extraReducers=="function"?Js(o.extraReducers):[o.extraReducers],E={...b,...u.sliceCaseReducersByType};return Zu(o.initialState,_=>{for(let k in E)_.addCase(k,E[k]);for(let k of u.sliceMatchers)_.addMatcher(k.matcher,k.reducer);for(let k of g)_.addMatcher(k.matcher,k.reducer);R&&_.addDefaultCase(R)})}const m=b=>b,y=new Map;let h;function x(b,g){return h||(h=f()),h(b,g)}function v(){return h||(h=f()),h.getInitialState()}function C(b,g=!1){function R(_){let k=_[b];return typeof k>"u"&&g&&(k=v()),k}function E(_=m){const k=Yr(y,g,{insert:()=>new WeakMap});return Yr(k,_,{insert:()=>{const j={};for(const[M,$]of Object.entries(o.selectors??{}))j[M]=ad($,_,v,g);return j}})}return{reducerPath:b,getSelectors:E,get selectors(){return E(R)},selectSlice:R}}const S={name:s,reducer:x,actions:u.actionCreators,caseReducers:u.sliceCaseReducersByName,getInitialState:v,...C(i),injectInto(b,{reducerPath:g,...R}={}){const E=g??i;return b.inject({reducerPath:E,reducer:x},R),{...S,...C(E,!0)}}};return S}}function ad(e,t,r,n){function o(s,...i){let a=t(s);return typeof a>"u"&&n&&(a=r()),e(a,...i)}return o.unwrapped=e,o}var Sn=id();function cd(){function e(t,r){return{_reducerDefinitionType:"asyncThunk",payloadCreator:t,...r}}return e.withTypes=()=>e,{reducer(t){return Object.assign({[t.name](...r){return t(...r)}}[t.name],{_reducerDefinitionType:"reducer"})},preparedReducer(t,r){return{_reducerDefinitionType:"reducerWithPrepare",prepare:t,reducer:r}},asyncThunk:e}}function ld({type:e,reducerName:t,createNotation:r},n,o){let s,i;if("reducer"in n){if(r&&!dd(n))throw new Error(H(17));s=n.reducer,i=n.prepare}else s=n;o.addCase(e,s).exposeCaseReducer(t,s).exposeAction(t,i?ce(e,i):ce(e))}function ud(e){return e._reducerDefinitionType==="asyncThunk"}function dd(e){return e._reducerDefinitionType==="reducerWithPrepare"}function fd({type:e,reducerName:t},r,n,o){if(!o)throw new Error(H(18));const{payloadCreator:s,fulfilled:i,pending:a,rejected:l,settled:u,options:c}=r,f=o(e,s,c);n.exposeAction(t,f),i&&n.addCase(f.fulfilled,i),a&&n.addCase(f.pending,a),l&&n.addCase(f.rejected,l),u&&n.addMatcher(f.settled,u),n.exposeCaseReducer(t,{fulfilled:i||xt,pending:a||xt,rejected:l||xt,settled:u||xt})}function xt(){}var pd=(e,t)=>{if(typeof e!="function")throw new Error(H(32))},Cn="listenerMiddleware",hd=e=>{let{type:t,actionCreator:r,matcher:n,predicate:o,effect:s}=e;if(t)o=ce(t).match;else if(r)t=r.type,o=r.match;else if(n)o=n;else if(!o)throw new Error(H(21));return pd(s),{predicate:o,type:t,effect:s}},md=Object.assign(e=>{const{type:t,predicate:r,effect:n}=hd(e);return{id:vn(),effect:n,type:t,predicate:r,pending:new Set,unsubscribe:()=>{throw new Error(H(22))}}},{withTypes:()=>md}),gd=Object.assign(ce(`${Cn}/add`),{withTypes:()=>gd});ce(`${Cn}/removeAll`);var yd=Object.assign(ce(`${Cn}/remove`),{withTypes:()=>yd}),xd=e=>"reducerPath"in e&&typeof e.reducerPath=="string",bd=e=>e.flatMap(t=>xd(t)?[[t.reducerPath,t.reducer]]:Object.entries(t)),En=Symbol.for("rtk-state-proxy-original"),wd=e=>!!e&&!!e[En],_d=new WeakMap,vd=(e,t)=>Yr(_d,e,{insert:()=>new Proxy(e,{get:(r,n,o)=>{if(n===En)return r;const s=Reflect.get(r,n,o);if(typeof s>"u"){const i=t[n.toString()];if(i){const a=i(void 0,{type:vn()});if(typeof a>"u")throw new Error(H(24));return a}}return s}})}),Sd=e=>{if(!wd(e))throw new Error(H(25));return e[En]},Cd=(e={})=>e;function Ed(...e){const t=Object.fromEntries(bd(e)),r=()=>Object.keys(t).length?Ls(t):Cd;let n=r();function o(a,l){return n(a,l)}o.withLazyLoadedSlices=()=>o;const s=(a,l={})=>{const{reducerPath:u,reducer:c}=a,f=t[u];return!l.overrideExisting&&f&&f!==c?(typeof process<"u",o):(t[u]=c,n=r(),o)},i=Object.assign(function(l,u){return function(f,...m){return l(vd(u?u(f,...m):f,t),...m)}},{original:Sd});return Object.assign(o,{inject:s,selector:i})}function H(e){return`Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}const kd={data:[],isLoading:!0,error:!1},Tt=td("cryptoData/general",async({fromCurrencies:e,toCurrency:t})=>await vl({fromCurrencies:e,toCurrency:t})),kn=Sn({name:"cryptoData",initialState:kd,reducers:{setData:(e,t)=>{e.data=t.payload,e.isLoading=!1}},extraReducers:e=>{e.addCase(Tt.pending,t=>{t.isLoading=!0}),e.addCase(Tt.fulfilled,(t,r)=>{t.isLoading=!1,t.data=r.payload}),e.addCase(Tt.rejected,t=>{t.isLoading=!1,t.error=!0})}}),{setData:Rd}=kn.actions;kn.reducer;const Td=[{id:"bitcoin",symbol:"btc",name:"Bitcoin",image:"https://coin-images.coingecko.com/coins/images/1/large/bitcoin.png?1696501400",current_price:66465,market_cap:1311229155876,market_cap_rank:1,fully_diluted_valuation:1395754803979,total_volume:32208609804,high_24h:67386,low_24h:64895,price_change_24h:1569.74,price_change_percentage_24h:2.4189,market_cap_change_24h:31001014956,market_cap_change_percentage_24h:2.42152,circulating_supply:19728259,total_supply:21e6,max_supply:21e6,ath:73738,ath_change_percentage:-9.91102,ath_date:"2024-03-14T07:10:36.635Z",atl:67.81,atl_change_percentage:97865.98854,atl_date:"2013-07-06T00:00:00.000Z",roi:null,last_updated:"2024-07-20T13:47:33.747Z"},{id:"ethereum",symbol:"eth",name:"Ethereum",image:"https://coin-images.coingecko.com/coins/images/279/large/ethereum.png?1696501628",current_price:3486.84,market_cap:419322472899,market_cap_rank:2,fully_diluted_valuation:419322472899,total_volume:14864751273,high_24h:3538.41,low_24h:3431.31,price_change_24h:53.88,price_change_percentage_24h:1.56951,market_cap_change_24h:7736992997,market_cap_change_percentage_24h:1.8798,circulating_supply:120226035250706e-6,total_supply:120226035250706e-6,max_supply:null,ath:4878.26,ath_change_percentage:-28.52846,ath_date:"2021-11-10T14:24:19.604Z",atl:.432979,atl_change_percentage:805151.26155,atl_date:"2015-10-20T00:00:00.000Z",roi:{times:69.1293545571144,currency:"btc",percentage:6912.935455711439},last_updated:"2024-07-20T13:47:26.849Z"},{id:"binancecoin",symbol:"bnb",name:"BNB",image:"https://coin-images.coingecko.com/coins/images/825/large/bnb-icon2_2x.png?1696501970",current_price:589.36,market_cap:90676236322,market_cap_rank:4,fully_diluted_valuation:90676236322,total_volume:1200204985,high_24h:597.88,low_24h:577.33,price_change_24h:12.02,price_change_percentage_24h:2.08241,market_cap_change_24h:1858531538,market_cap_change_percentage_24h:2.09252,circulating_supply:153856150,total_supply:153856150,max_supply:2e8,ath:717.48,ath_change_percentage:-17.7536,ath_date:"2024-06-06T14:10:59.816Z",atl:.0398177,atl_change_percentage:148189837147e-5,atl_date:"2017-10-19T00:00:00.000Z",roi:null,last_updated:"2024-07-20T13:47:31.082Z"},{id:"solana",symbol:"sol",name:"Solana",image:"https://coin-images.coingecko.com/coins/images/4128/large/solana.png?1718769756",current_price:167.68,market_cap:77853239474,market_cap_rank:5,fully_diluted_valuation:97340981165,total_volume:2966020237,high_24h:171.53,low_24h:166.2,price_change_24h:1.48,price_change_percentage_24h:.88921,market_cap_change_24h:1127265173,market_cap_change_percentage_24h:1.46921,circulating_supply:464230227934943e-6,total_supply:580433469167155e-6,max_supply:null,ath:259.96,ath_change_percentage:-35.48797,ath_date:"2021-11-06T21:54:35.825Z",atl:.500801,atl_change_percentage:33387.33702,atl_date:"2020-05-11T19:35:23.449Z",roi:null,last_updated:"2024-07-20T13:47:50.398Z"},{id:"ripple",symbol:"xrp",name:"XRP",image:"https://coin-images.coingecko.com/coins/images/44/large/xrp-symbol-white-128.png?1696501442",current_price:.588847,market_cap:32949326878,market_cap_rank:8,fully_diluted_valuation:58925936376,total_volume:1921536330,high_24h:.602492,low_24h:.555925,price_change_24h:.0329225,price_change_percentage_24h:5.92211,market_cap_change_24h:1867861494,market_cap_change_percentage_24h:6.00957,circulating_supply:55909481874,total_supply:99987431729,max_supply:1e11,ath:3.4,ath_change_percentage:-82.64776,ath_date:"2018-01-07T00:00:00.000Z",atl:.00268621,atl_change_percentage:21853.15789,atl_date:"2014-05-22T00:00:00.000Z",roi:null,last_updated:"2024-07-20T13:47:39.564Z"},{id:"cardano",symbol:"ada",name:"Cardano",image:"https://coin-images.coingecko.com/coins/images/975/large/cardano.png?1696502090",current_price:.428721,market_cap:15268142401,market_cap_rank:11,fully_diluted_valuation:19317363715,total_volume:307470912,high_24h:.442978,low_24h:.424498,price_change_24h:.00422318,price_change_percentage_24h:.99486,market_cap_change_24h:209410176,market_cap_change_percentage_24h:1.39062,circulating_supply:355672967692652e-4,total_supply:45e9,max_supply:45e9,ath:3.09,ath_change_percentage:-86.06038,ath_date:"2021-09-02T06:00:10.474Z",atl:.01925275,atl_change_percentage:2135.02518,atl_date:"2020-03-13T02:22:55.044Z",roi:null,last_updated:"2024-07-20T13:47:27.327Z"},{id:"chainlink",symbol:"link",name:"Chainlink",image:"https://coin-images.coingecko.com/coins/images/877/large/chainlink-new-logo.png?1696502009",current_price:13.91,market_cap:8459386459,market_cap_rank:17,fully_diluted_valuation:13911177205,total_volume:356772770,high_24h:14.22,low_24h:13.61,price_change_24h:.300173,price_change_percentage_24h:2.20537,market_cap_change_24h:182535175,market_cap_change_percentage_24h:2.20537,circulating_supply:6080999713083414e-7,total_supply:1e9,max_supply:1e9,ath:52.7,ath_change_percentage:-73.56794,ath_date:"2021-05-10T00:13:57.214Z",atl:.148183,atl_change_percentage:9299.71435,atl_date:"2017-11-29T00:00:00.000Z",roi:null,last_updated:"2024-07-20T13:47:30.291Z"},{id:"bitcoin-cash",symbol:"bch",name:"Bitcoin Cash",image:"https://coin-images.coingecko.com/coins/images/780/large/bitcoin-cash-circle.png?1696501932",current_price:389.81,market_cap:7693122804,market_cap_rank:18,fully_diluted_valuation:8186070466,total_volume:219234592,high_24h:399.89,low_24h:380.45,price_change_24h:9.37,price_change_percentage_24h:2.46197,market_cap_change_24h:178881607,market_cap_change_percentage_24h:2.38057,circulating_supply:197354248966508e-7,total_supply:21e6,max_supply:21e6,ath:3785.82,ath_change_percentage:-89.69487,ath_date:"2017-12-20T00:00:00.000Z",atl:76.93,atl_change_percentage:407.09643,atl_date:"2018-12-16T00:00:00.000Z",roi:null,last_updated:"2024-07-20T13:47:37.799Z"},{id:"litecoin",symbol:"ltc",name:"Litecoin",image:"https://coin-images.coingecko.com/coins/images/2/large/litecoin.png?1696501400",current_price:72.67,market_cap:5435603099,market_cap_rank:21,fully_diluted_valuation:6106497072,total_volume:271153004,high_24h:74.08,low_24h:71.41,price_change_24h:1.048,price_change_percentage_24h:1.46346,market_cap_change_24h:105314884,market_cap_change_percentage_24h:1.97578,circulating_supply:747712894834713e-7,total_supply:84e6,max_supply:84e6,ath:410.26,ath_change_percentage:-82.28684,ath_date:"2021-05-10T03:13:07.904Z",atl:1.15,atl_change_percentage:6225.49513,atl_date:"2015-01-14T00:00:00.000Z",roi:null,last_updated:"2024-07-20T13:47:27.826Z"},{id:"stellar",symbol:"xlm",name:"Stellar",image:"https://coin-images.coingecko.com/coins/images/100/large/Stellar_symbol_black_RGB.png?1696501482",current_price:.104795,market_cap:3073299624,market_cap_rank:33,fully_diluted_valuation:5242608697,total_volume:78283435,high_24h:.106825,low_24h:.102678,price_change_24h:.00184523,price_change_percentage_24h:1.79236,market_cap_change_24h:64207035,market_cap_change_percentage_24h:2.13377,circulating_supply:293118334604794e-4,total_supply:500017869596824e-4,max_supply:500017869596824e-4,ath:.875563,ath_change_percentage:-88.02858,ath_date:"2018-01-03T00:00:00.000Z",atl:47612e-8,atl_change_percentage:21914.74833,atl_date:"2015-03-05T00:00:00.000Z",roi:null,last_updated:"2024-07-20T13:47:28.310Z"},{id:"monero",symbol:"xmr",name:"Monero",image:"https://coin-images.coingecko.com/coins/images/69/large/monero_logo.png?1696501460",current_price:162.85,market_cap:3003688477,market_cap_rank:34,fully_diluted_valuation:null,total_volume:85783814,high_24h:163.2,low_24h:159.76,price_change_24h:3.09,price_change_percentage_24h:1.93293,market_cap_change_24h:63333749,market_cap_change_percentage_24h:2.15395,circulating_supply:184453426021475e-7,total_supply:18444108,max_supply:null,ath:542.33,ath_change_percentage:-69.95952,ath_date:"2018-01-09T00:00:00.000Z",atl:.216177,atl_change_percentage:75262.98643,atl_date:"2015-01-14T00:00:00.000Z",roi:null,last_updated:"2024-07-20T13:47:24.250Z"}],jd=w.svg`
  fill: ${({theme:e})=>e.sharedColors.statusDown};
  width: 12px;
  height: 7px;
  @media ${N.sm} {
    margin-right: 3px;
  }

  &.up {
    fill: ${({theme:e})=>e.sharedColors.stausUp};
    transform: rotate(180deg);
  }
`,Od=w.div`
  display: grid;
  grid-template-columns: 3fr 2fr 1fr;
  grid-auto-rows: 48px;
  height: 100%;
  font-family: ${({theme:e})=>e.fonts.interRegular};
  font-size: 0.75rem;
  color: ${({theme:e})=>e.color.textMain};
  overflow: auto;

  @media ${N.sm} {
    grid-auto-rows: 35px;
  }

  & > div {
    ${pn};
    line-height: 0.714;
    padding: 15px 24px;

    @media ${N.sm} {
      padding: 0 0 0 10px;
    }
  }
`,kr=w.h3`
  position: sticky;
  top: 0;
  font-size: 0.625rem;
  color: ${({theme:e})=>e.color.trendHeading};
  background: ${({theme:e})=>e.color.boxBackground};
  white-space: nowrap;
  padding: 20px 24px;
  z-index: 1;

  @media ${N.sm} {
    padding: 0 0 0 10px;
  }
`,xo=w.div`
  grid-column: 1/-1;
  text-align: center;
`,Ad=w.div`
  text-transform: uppercase;

  span {
    color: ${({theme:e})=>e.sharedColors.trendCurrencyName};
    text-transform: capitalize;
    margin-left: 5px;
  }
`,$d=w.div`
  color: ${({theme:e})=>e.sharedColors.price};
`,Pd=w.div`
  ${ye};
  max-width: 130px;
  width: 100%;

  span {
    margin-left: 15px;

    @media ${N.sm} {
      margin-left: 5px;
    }
  }
`,Dd=e=>d.jsx(jd,{className:Qr({up:Math.sign(e)===-1}),children:d.jsx("use",{xlinkHref:"svg/sprite.svg#angle"})});function Nd(){const{ref:e,height:t=1}=Wt(),r=Fe(),{currenciesList:n,exchangeCurrency:o}=V(h=>h.config),{data:s,isLoading:i,error:a}=V(h=>h.cryptoData),l=T.useMemo(()=>n.map(({id:h})=>h).join(","),[n]),u=!i&&!a,c=!i&&a,f=i&&!a,m=T.useCallback(()=>r(Tt({fromCurrencies:l,toCurrency:o.id})),[l,o.id]),y=async()=>{await st(1e3),r(Rd(Td))};return T.useEffect(()=>{y();const h=setInterval(()=>{y()},ct);return()=>{clearInterval(h)}},[m]),d.jsxs(Od,{ref:e,children:[d.jsx(kr,{children:"Name"}),d.jsxs(kr,{children:["Average price(",o.symbol,")"]}),d.jsx(kr,{children:"Change(%)"}),u&&s.map(({id:h,name:x,symbol:v,current_price:C,price_change_percentage_24h:S})=>d.jsxs(T.Fragment,{children:[d.jsxs(Ad,{children:[v," ",d.jsx("span",{children:x})]}),d.jsx($d,{children:C}),d.jsxs(Pd,{children:[Math.abs(S),d.jsx("span",{children:Dd(S)})]})]},h)),f&&d.jsx(xo,{children:d.jsx(Te,{height:`${t/1.5}px`})}),c&&d.jsx(xo,{children:d.jsx(Ue,{})})]})}const Ve={minHeight:240,group:"shared",cached:!1},Ke={minWidth:315},ee=(e=!0)=>({news:{...Ve,...e&&Ke,id:"news",title:"News",content:d.jsx(ru,{})},history:{...Ve,...e&&Ke,id:"history",title:"Trade history",content:d.jsx(uu,{})},cryptocurrencies:{...Ve,...e&&Ke,id:"cryptocurrencies",title:"Cryptocurrencies",content:d.jsx(Ll,{})},overview:{...Ve,...e&&Ke,id:"overview",title:"Market overview",content:d.jsx(Gl,{})},trends:{...Ve,...e&&Ke,id:"trends",title:"Trends 24h",content:d.jsx(Nd,{})}}),bo={dockbox:{mode:"vertical",children:[{mode:"horizontal",size:260,children:[{tabs:[ee().news]},{tabs:[ee().history]}]},{size:180,tabs:[ee().cryptocurrencies]},{size:260,mode:"horizontal",children:[{tabs:[ee().overview]},{mode:"horizontal",tabs:[ee().trends]}]}]}},wo={dockbox:{mode:"vertical",children:[{tabs:[ee(!1).news,ee(!1).history,ee(!1).cryptocurrencies,ee(!1).overview,ee(!1).trends]}]}},_o={currenciesList:Ir.slice(0,6),exchangeCurrency:Nr.USD,theme:Nt.DARK,serializedDockbox:null,persistentDockbox:!1},Rn=Sn({name:"config",initialState:_o,reducers:{setCurrenciesList:(e,t)=>{e.currenciesList=t.payload},setExchangeCurrency:(e,t)=>{e.exchangeCurrency=t.payload},setTheme:(e,t)=>{e.theme=t.payload},setSerializedDockbox:(e,t)=>{e.serializedDockbox=t.payload},setPersistentDocbox:(e,t)=>{e.persistentDockbox=t.payload},resetConfig:()=>_o}}),{setCurrenciesList:Xs,setExchangeCurrency:Qs,setTheme:ei,setSerializedDockbox:Ht,setPersistentDocbox:ti,resetConfig:Id}=Rn.actions;Rn.reducer;function ri(){return Di()<=1200}function Bd(){const e=ri(),t=e?wo:bo,r=Fe(),n=V(f=>f.config.serializedDockbox),o=JSON.parse(String(n)),[s,i]=T.useState(o||t),a=ee(!e),l=T.useMemo(()=>({shared:{floatable:!1,maximizable:!e,disableDock:e}}),[e]),u=T.useCallback(({id:f})=>a[f],[a]),c=T.useCallback(f=>{i(f),r(Ht(JSON.stringify(f)))},[]);return T.useEffect(()=>{if(e)i(wo);else{const f=o||bo;i(f),r(Ht(JSON.stringify(f)))}},[e]),T.useEffect(()=>{n||i(t)},[n]),{dockbox:s,groups:l,loadTab:u,onDockboxChange:c}}const Ld=w.section`
  height: 100%;
  width: 100%;

  & .dock-layout {
    /* min-height: calc(100vh - 100px); */
    /* height: 100%; */
    margin: 0 30px;
    overflow: auto;

    @media ${N.lg} {
      margin-left: 20px;
      margin-right: 20px;
    }
    @media ${N.sm} {
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
`,Fd={position:"absolute",left:0,top:0,right:0,bottom:20};function Md(){const{dockbox:e,groups:t,loadTab:r,onDockboxChange:n}=Bd();return d.jsx(Ld,{className:"dockLayoutContainer",children:d.jsx(Ti,{layout:e,loadTab:r,onLayoutChange:n,groups:t,style:Fd},`${t.shared.maximizable}`)})}const zd=w.main`
  ${hn}
  height: 100vh;
`,Ud=w.section`
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
`,Hd=w.span`
  font-size: 6.25rem;
`,Gd=w.img`
  position: absolute;
  top: 21%;
  left: 51%;
  max-width: 280px;
  max-height: 260px;
  z-index: -1;
`;function Wd(){const e=ot(),t=()=>{e("/")};return d.jsx(zd,{children:d.jsxs(Ud,{children:[d.jsx(Hd,{children:"404"}),d.jsx("p",{children:"Page not found!"}),d.jsx(Gd,{src:"images/404.webp",alt:"Broken bitcoin",width:"280",height:"260"}),d.jsxs(Ps,{type:"button",onClick:t,children:[d.jsx("svg",{children:d.jsx("use",{xlinkHref:"svg/sprite.svg#home"})}),d.jsx("span",{children:"Home"})]})]})})}const qd={user:null},Tn=Sn({name:"auth",initialState:qd,reducers:{login:(e,t)=>{e.user=t.payload},logout:e=>{e.user=null}}}),{login:jt,logout:Vd}=Tn.actions;Tn.reducer;function Jr(e){return d.jsx(lt,{...e})}const Kd=w.header`
  ${ye};
  width: 100%;
  max-height: 100px;
  padding: 30px;

  @media ${N.lg} {
    max-height: 80px;
    padding: 20px;
  }
  @media ${N.sm} {
    padding-left: 10px;
    padding-right: 10px;
  }
`,Zd=w.div`
  ${ye}
  gap: 12px;
`,Yd=w.div`
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
`;function Jd(){var a,l;const e=ot(),t=Oo(),{user:r}=V(u=>u.auth),n=t.pathname==="/",o=t.pathname==="/settings",s=((a=r==null?void 0:r.displayName)==null?void 0:a.split(/\s+/).map(u=>u.substring(0,1).toUpperCase()).join(""))||((l=r==null?void 0:r.email)==null?void 0:l.substring(0,1).toUpperCase()),i=()=>{e("/auth")};return d.jsxs(Kd,{children:[n&&d.jsx("span",{children:"Home"}),o&&d.jsx("span",{children:"Settings"}),d.jsx(Zd,{children:r?d.jsx(Yd,{children:d.jsx("div",{children:s})}):d.jsx(Jr,{onClick:i,type:"button",children:d.jsx("span",{children:"Sign in"})})})]})}const Xd=w.nav`
  ${ut};
  gap: 30px;
`,vo=w(ui)`
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
    ${$s};
  }

  span {
    ${tt};
    width: 61px;
    height: 58px;
    text-align: center;

    @media ${N.lg} {
      width: 51px;
      height: 48px;
    }

    @media ${N.sm} {
      width: 41px;
      height: 38px;
    }
  }
`;function Qd(){const{user:e}=V(t=>t.auth);return d.jsxs(Xd,{children:[d.jsx(vo,{to:"/","aria-label":"Home page",children:d.jsx("span",{children:d.jsx("svg",{children:d.jsx("use",{xlinkHref:"svg/sprite.svg#home"})})})}),e&&d.jsx(vo,{to:"/settings","aria-label":"Settings",children:d.jsx("span",{children:d.jsx("svg",{children:d.jsx("use",{xlinkHref:"svg/sprite.svg#settings"})})})})]})}const ef=w.div`
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

  @media ${N.lg} {
    width: 80px;
    padding: 25px 10px 20px;
  }

  @media ${N.sm} {
    width: 60px;
    padding-left: 5px;
    padding-right: 5px;
  }
`,tf=w.div`
  svg {
    width: 42px;
    height: 46px;

    @media ${N.lg} {
      width: 37px;
      height: 41px;
    }

    @media ${N.sm} {
      width: 32px;
      height: 36px;
    }
  }
`,rf=w.div`
  margin-top: auto;
`,ni=w(lt)`
  text-align: center;
  background: transparent;
  border: none;
  width: auto;
  margin-top: 40px;
  &:hover {
    background: transparent;
  }

  @media ${N.lg} {
    margin-top: 30px;
  }

  @media ${N.sm} {
    margin-top: 20px;
  }

  svg {
    ${$s};
  }
`,nf=w(ni)`
  svg {
    width: 25px;
  }
`;function of(){const e=ot(),{user:t}=V(s=>s.auth),r=Fe(),n=Xr(Ao),o=async()=>{if(confirm("Logout confirmation"))try{await wi(n),r(Vd()),r(Id()),e("/")}catch{console.log("signOut fail")}};return d.jsxs(ef,{children:[d.jsx(tf,{children:d.jsx(di,{to:"/","aria-label":"Return to home page",children:d.jsx("svg",{children:d.jsx("use",{xlinkHref:"svg/sprite.svg#logo"})})})}),d.jsx(Qd,{}),d.jsxs(rf,{children:[d.jsx(nf,{onClick:()=>r(Ht(null)),"aria-label":"Reset layout",children:d.jsx("svg",{children:d.jsx("use",{xlinkHref:"svg/sprite.svg#reset"})})}),t&&d.jsx(ni,{onClick:o,"aria-label":"Log out",children:d.jsx("svg",{children:d.jsx("use",{xlinkHref:"svg/sprite.svg#log-out"})})})]})]})}const sf=w.div`
  display: flex;
`,af=w.div`
  ${ut};
  width: 100%;
  overflow: auto;
`,cf=w.main`
  ${hn};
  height: 100%;
`;function lf(){const e=Xr(),t=Fe(),[r,n]=T.useState(!0);return T.useEffect(()=>{n(!0),_i(e,async o=>{if(o&&o.email){t(jt({email:o.email,uid:o.uid,photoURL:o.photoURL||null,displayName:o.displayName}));const s=await vi(o);if(s){const{currenciesList:i,exchangeCurrency:a,theme:l,serializedDockbox:u}=s;i&&t(Xs(i)),a&&t(Qs(a)),l&&t(ei(l)),u&&(t(Ht(u)),t(ti(!0)))}}n(!1)})},[]),d.jsxs(d.Fragment,{children:[r&&d.jsx(Te,{}),!r&&d.jsxs(sf,{children:[d.jsx(of,{}),d.jsxs(af,{children:[d.jsx(Jd,{}),d.jsx(cf,{children:d.jsx(fi,{})})]})]})]})}const uf=/^(([^<>()\[\]\\.,;:\s@"]+(.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/,df=/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{6,}$/,ff=e=>Ii().shape({...!e&&{email:pr().email("Invalid email format.").matches(uf,"Email address is required.").required()},...!e&&{password:pr().matches(df,"Password must contain one digit from 0 to 6, one lowercase letter, one uppercase letter, one special character, no spaces and at least 6 characters long.").required("Pasword is required.")},...!e&&{repeatPassword:pr().oneOf([Bi("password")],"Passwords don't match.").required("Repeat password is required.")}}),pf=w.main`
  ${tt};
  position: relative;
  height: 100vh;
  padding: 10px;
`,hf=w(Ps)`
  position: absolute;
  top: 30px;
  right: 30px;

  @media ${N.lg} {
    top: 20px;
    right: 20px;
  }

  @media ${N.sm} {
    right: 10px;
  }
`,mf=w(Ns)`
  min-width: 300px;
  max-width: 375px;
  width: 100%;
`,gf=w.svg`
  width: 30px;
  height: 21px;
  vertical-align: middle;
`,yf=w.p`
  font-size: ${({theme:e})=>e.fontSize.small};
  color: ${({theme:e})=>e.sharedColors.statusDown};
  margin: 0;
`,So=w.div`
  margin-bottom: 10px;
`,Co=w.div`
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
`,xf=w.div`
  text-align: center;
  margin: 15px 0;
`,bf=w.span`
  transition: color 0.3s ease-in-out;

  &:hover {
    text-decoration: underline;
    color: ${({theme:e})=>e.sharedColors.accentColor};
    cursor: pointer;
  }
`,wf={email:"",password:"",repeatPassword:""};function _f(){var g,R,E;const e=ot(),t=Xr(Ao),{user:r}=V(_=>_.auth),n=Fe(),[o,s]=T.useState("login"),i=o==="login",a=ff(i),{register:l,handleSubmit:u,formState:{errors:c},reset:f,clearErrors:m}=pi({defaultValues:wf,resolver:Ni(a)}),y=[{typeName:"email",example:"email@example.com",fieldName:"email",err:c.email,errMsg:(g=c.email)==null?void 0:g.message},{typeName:"password",example:"********",fieldName:"password",err:c.password,errMsg:(R=c.password)==null?void 0:R.message},{typeName:"password",example:"repeat password",fieldName:"repeatPassword",err:c.repeatPassword,errMsg:(E=c.repeatPassword)==null?void 0:E.message}];T.useEffect(()=>{r&&e("/")},[r,e]),T.useEffect(()=>{f(),m()},[i]);const h=()=>{s(_=>_==="login"?"sign-up":"login")},x=()=>{e("/")},v=async({email:_,password:k})=>{try{const{user:j}=await Ei(t,_,k);return j&&j.email&&(An(j),n(jt({email:j.email,uid:j.uid,photoURL:j.photoURL||null,displayName:j.displayName}))),j}catch(j){if(j instanceof fr){const M=j.code;M==="auth/email-already-in-use"&&alert("Email already exists!"),console.error("Error:",M)}}},C=async({email:_,password:k})=>{try{const{user:j}=await ki(t,_,k);return j&&j.email&&n(jt({email:j.email,uid:j.uid,photoURL:j.photoURL||null,displayName:j.displayName})),j}catch(j){if(j instanceof fr){const M=j.code;console.log("error",M),M==="auth/user-not-found"&&alert("Sign up first!"),M==="auth/invalid-credential"&&alert("Check your credentials!"),console.error("Error:",M)}}},S=async _=>{const{email:k,password:j}=_;if(!i)return v({email:k,password:j});C({email:k,password:j})},b=async()=>{const _=new Si;try{const{user:k}=await Ci(t,_);return k&&k.email&&(An(k),n(jt({email:k.email,uid:k.uid,photoURL:k.photoURL||null,displayName:k.displayName}))),k}catch(k){return k instanceof fr&&k.code!=="auth/cancelled-popup-request"&&console.error("Error:",k),null}};return d.jsxs(pf,{children:[d.jsxs(hf,{type:"button",onClick:x,children:[d.jsx("svg",{children:d.jsx("use",{xlinkHref:"svg/sprite.svg#home"})}),d.jsx("span",{children:"Home"})]}),d.jsx(mf,{as:"section",$padding:"20px",$border:"true",children:d.jsxs("form",{name:"auth-form",onSubmit:u(S),children:[d.jsxs(Jr,{onClick:b,type:"button",$width:"full",children:[d.jsx("span",{children:"Sign with"}),d.jsx(gf,{children:d.jsx("use",{xlinkHref:"svg/sprite.svg#google"})})]}),d.jsxs(Co,{children:[d.jsx("hr",{})," ",d.jsx("span",{children:"or"}),d.jsx("hr",{})]}),d.jsx("div",{children:i?y.filter(_=>_.fieldName!=="repeatPassword").map(({typeName:_,example:k,fieldName:j},M)=>d.jsx(So,{children:d.jsx(io,{type:_,placeholder:k,...l(j)})},M)):y.map(({typeName:_,example:k,fieldName:j,err:M,errMsg:$},W)=>d.jsxs(So,{children:[d.jsx(io,{type:_,placeholder:k,...l(j)}),d.jsx(yf,{children:$})]},W))}),d.jsx(Jr,{type:"submit",$width:"full",children:d.jsxs("span",{children:["Sign ",i?"in":"up"," with Email"]})}),d.jsxs(xf,{children:[d.jsx("span",{children:i?"Don't have an account yet?":"Already have an account?"})," ",d.jsxs(bf,{onClick:h,children:["Sign ",i?"up":"in"]})]}),d.jsxs(Co,{children:[d.jsx("hr",{})," ",d.jsx("span",{children:"Forgot password?"}),d.jsx("hr",{})]})]})})]})}const vf=w.section`
  max-width: 450px;
  width: 100%;
  padding: 0 10px 10px;
`,bt=w.fieldset`
  background: ${({theme:e})=>e.color.boxBackground};
  border-radius: ${({theme:e})=>e.borderRadius.large};
  border: 1px solid ${({theme:e})=>e.color.border};
  padding: 6px 15px 10px 10px;
  margin-bottom: 7px;
`,wt=w.legend`
  font-size: 1rem;
  line-height: 1;
  color: ${({theme:e})=>e.sharedColors.accentLight};
`,Eo=w.div`
  margin-bottom: 3px;
`,Gt=w.label`
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
`,ko=w.input`
  padding: 0;
  height: initial;
  width: initial;
  margin-bottom: 0;
  display: none;
  cursor: pointer;

  &:checked + ${Gt}:after {
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

  &:checked + ${Gt} {
    color: ${({theme:e})=>e.color.textMain};
  }
`,Sf=w(lt)`
  margin-top: 10px;
`,Ro=w.select`
  ${mn};
`,To=w.option`
  ${gn};
`;function Cf(){const e=ot(),t=Oo(),r=ri(),n=Fe(),{user:o}=V($=>$.auth),{currenciesList:s,exchangeCurrency:i,theme:a,persistentDockbox:l,serializedDockbox:u}=V($=>$.config),[c,f]=T.useState(i),[m,y]=T.useState(s),[h,x]=T.useState(a),[v,C]=T.useState(l),[S,b]=T.useState(!1),g=t.pathname==="/settings"&&!o;T.useEffect(()=>{g&&e("/")},[]);const R=({target:{value:$}})=>{f(Nr[$])},E=({target:{id:$,checked:W}})=>{if(W){const ue=Ir.find(xe=>xe.id===$);y(xe=>[...xe,ue])}else{const ue=m.filter(xe=>xe.id!==$);ue.length?y(ue):alert("You should keep at least one currency")}},_=({target:{value:$}})=>{x($)},k=({target:{checked:$}})=>{C($)},j=$=>m.findIndex(W=>$===W.id)!==-1,M=async()=>{b(!0);const $={exchangeCurrency:c,currenciesList:m,theme:h,...v&&{serializedDockbox:u}};await Ri(o,$),n(Qs(c)),n(Xs(m)),n(ei(h)),v&&n(ti(!0)),b(!1)};return d.jsxs(vf,{children:[d.jsxs(bt,{children:[d.jsx(wt,{children:"Choose main exchange currency:"}),d.jsx(Ro,{value:c.id,onChange:R,"aria-label":"Exchange currencies",children:Object.entries(Nr).map(([$,{id:W,symbol:ue}])=>d.jsxs(To,{value:W,children:[W," (",ue,")"]},W))})]}),d.jsxs(bt,{children:[d.jsx(wt,{children:"Choose crypto currencies list:"}),Ir.map(({id:$,symbol:W})=>d.jsxs(Eo,{children:[d.jsx(ko,{type:"checkbox",id:$,name:W,onChange:E,checked:j($)}),d.jsxs(Gt,{htmlFor:$,children:[$," (",W,")"]})]},$))]}),d.jsxs(bt,{children:[d.jsx(wt,{children:"Choose app theme:"}),d.jsx(Ro,{value:h,onChange:_,"aria-label":"Theme",children:Ha.map($=>d.jsx(To,{value:$,children:$},$))})]}),!r&&d.jsxs(bt,{children:[d.jsx(wt,{children:"Choose layout settings:"}),d.jsxs(Eo,{children:[d.jsx(ko,{type:"checkbox",name:"persistentDockbox",id:"persistentDockbox",onChange:k,checked:v}),d.jsx(Gt,{htmlFor:"persistentDockbox",children:v?"layout settings will be kept after save":"layout settings will be removed after save"})]})]}),d.jsx(Sf,{onClick:M,disabled:S,$width:"full",children:S?"Saving":"Save changes"})]})}const jo={sharedColors:{textSecondary:"#868B93",price:"#9292C1",sortBackground:"rgba(26, 26, 29, 0.7)",selectBorder:"rgba(26, 26, 29, 0)",dropIndicator:"rgba(0, 0, 0, 0.7)",stausUp:"#00C287",statusDown:"#E72D04",searchBackground:"#2F293E",searchText:"#E2D8FD",btnIcon:"#ffffff",accentColor:"#EC5EB7",accentLight:"#B783EB",trendCurrencyName:"#9A9A9A"},fonts:{interRegular:"Inter-Regular",interMedium:"Inter-Medium",interSemiBold:"Inter-SemiBold",interBold:"Inter-Bold"},borderRadius:{extraSmall:"10px",small:"13px",medium:"15px",large:"20px",circle:"50%"},fontSize:{small:".625rem",medium:"0.875rem"}},Ef={mainBackground:"#261E35",boxBackground:"#3C354A",boxInnerBackground:"#4A435C",textMain:"#ffffff",userProfile:"#3F3655",iconActiveBackground:"#372C44",border:"rgba(255, 255, 255, 0.5)",articleTime:"#868B93",navBarSvg:"#8D8598",navBarSvgActive:"#D8BCFF",trendHeading:"#9A9A9A"},kf={mainBackground:"#e0e0e0",boxBackground:"#f5f5f5",boxInnerBackground:"#a7a7a7",textMain:"#1A111D",userProfile:"#a7a7a7",iconActiveBackground:"#a7a7a7",border:"#a7a7a7",articleTime:"#535353",navBarSvg:"#8D8598",navBarSvgActive:"#EC5EB7",trendHeading:"#BFB7B7"},Rf={dark:{color:Ef,...jo},light:{color:kf,...jo}},Tf=hi([{path:"/",element:d.jsx(lf,{}),children:[{path:"/",element:d.jsx(Md,{})},{path:"/settings",element:d.jsx(Cf,{})}],errorElement:d.jsx(Wd,{})},{path:"/auth",element:d.jsx(_f,{})}],{basename:"/crypto-dash/"});function jf(){const e=V(t=>t.config.theme);return d.jsxs(Na,{theme:Rf[e],children:[d.jsx(za,{}),d.jsx(mi,{router:Tf})]})}const Of=Ed(Tn,Rn,kn),Af=Vu({reducer:Of});gi.createRoot(document.getElementById("root")).render(d.jsx(yi,{store:Af,children:d.jsx(jf,{})}));
