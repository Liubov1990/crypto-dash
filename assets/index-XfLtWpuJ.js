import{h as ut,u as gt,a as mt,f as Ke,b as j,r as i,c as Y,p as o,d as B,e as ft,j as t,g as ae,i as me,V as bt,k as Ze,l as yt,m as qe,n as Je,o as vt,q as re,s as Ct,t as kt,v as wt,w as $t,x as fe,D as jt,y as K,z as St,A as Et,B as Dt,C as be,E as Rt,F as Lt,G as Tt,H as At,I as Bt,J as It,K as Ot,L as Xe,N as Mt,M as ye,O as Pt,P as Nt,Q as _t,R as Ft,S as Ht,T as de,U as Gt,W as zt,X as Ut,Y as Vt,Z as Wt,_ as pe,$ as Yt,a0 as Kt,a1 as Zt,a2 as qt,a3 as Jt,a4 as Xt,a5 as Qt,a6 as er,a7 as tr}from"./vendor-DTZJHe8R.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function s(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function n(a){if(a.ep)return;a.ep=!0;const l=s(a);fetch(a.href,l)}})();const rr={},or=ut`
 ${rr};

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
`,H=mt,L=gt,sr="AIzaSyAYfMaOGA1I37oEQ-aGjl9hlTx13u67hUo",nr="crypto-dash-4c7c3.firebaseapp.com",ar="crypto-dash-4c7c3",ir="crypto-dash-4c7c3.appspot.com",cr="681616415293",lr="1:681616415293:web:240fcabb8f946ab3cae854",Qe="CG-SyhLbJYz1Pc5HsgbcLbefwaq",et="https://api.coingecko.com/api/v3/coins",dr=`${et}/markets`,ie="93f14bb9c11c7dfa3d6272e2ccdfc736e8048d3e16e03c2ca0054c05162d6ac3",ve="https://min-api.cryptocompare.com/data/v2",pr=`${ve}/news/?lang=EN`,hr=`${ve}/histohour`,xr=`${ve}/histoday`,ur=`https://streamer.cryptocompare.com/v2?api_key=${ie}`;var oe=(e=>(e.DARK="dark",e.LIGHT="light",e))(oe||{});const xe={USD:{id:"USD",symbol:"$"},EUR:{id:"EUR",symbol:"€"},GPB:{id:"GPB",symbol:"£"},CHF:{id:"CHF",symbol:"₣"},UAH:{id:"UAH",symbol:"₴"}},ue=[{id:"bitcoin",symbol:"BTC"},{id:"ethereum",symbol:"ETH"},{id:"ripple",symbol:"XRP"},{id:"bitcoin-cash",symbol:"BCH"},{id:"chainlink",symbol:"LINK"},{id:"litecoin",symbol:"LTC"},{id:"cardano",symbol:"ADA"},{id:"binancecoin",symbol:"BNB"},{id:"stellar",symbol:"XLM"},{id:"monero",symbol:"XMR"},{id:"solana",symbol:"SOL"}],gr={btc:",.2f",eth:",.2f",bnb:",.3f",sol:",.3f",xrp:",.4f",ada:",.4f",link:",.3f",bch:",.3f",ltc:",.4f",xlm:",.5f",xmr:",.3f"},mr=[oe.DARK,oe.LIGHT],fr=e=>new Promise(r=>setTimeout(r,e)),br=e=>e.map(([r,s,n,a,l])=>({x:r,open:s,high:n,low:a,close:l})),tt=e=>e.map(({time:r,close:s})=>({x:j.unix(r),y:s})),yr=e=>e.reduce((r,{symbol:s,...n})=>({...r,[s]:{...n,symbol:s}}),{}),rt=e=>{const r=e.toPrecision(5);return Ke("~s")(Number(r))},vr=(e,r)=>Ke(gr[e])(r),Cr=e=>j(e).format("MMMM Do YYYY");function kr(e){const r=i.useRef();return i.useEffect(()=>{r.current=e},[e]),r.current}const wr=async({fromCurrency:e,toCurrency:r,timeRange:s})=>{try{const{data:n}=await Y({method:"get",url:`${et}/${e}/ohlc`,params:{vs_currency:r,days:s,x_cg_demo_api_key:Qe}});return br(n)}catch{throw new Error("API Server error")}},$r=async({fromCurrency:e,toCurrency:r,timeRange:s})=>{try{const{data:{Data:{Data:n}}}=await Y({method:"get",url:xr,params:{api_key:ie,fsym:e,tsym:r,aggregate:1,limit:s}});return{[e]:tt(n)}}catch{throw new Error("API Server error")}},jr=async({fromCurrency:e,toCurrency:r})=>{try{const{data:{Data:{Data:s}}}=await Y({method:"get",url:hr,params:{api_key:ie,fsym:e,tsym:r,aggregate:1,limit:12}});return tt(s)}catch{throw new Error("API Server error")}},Sr=async({toCurrency:e,fromCurrencies:r})=>{try{const{data:s}=await Y({method:"get",url:dr,params:{vs_currency:e,ids:r,x_cg_demo_api_key:Qe}});return s}catch{throw new Error("API Server error")}},Er=async()=>{try{const{data:{Data:e}}=await Y({method:"get",url:pr,params:{api_key:ie}});return e}catch{throw new Error("API Server error")}};j("2024-07-11T00:00:00.000Z"),j("2024-07-12T00:00:00.000Z"),j("2024-07-13T00:00:00.000Z"),j("2024-07-14T00:00:00.000Z"),j("2024-07-15T00:00:00.000Z"),j("2024-07-16T00:00:00.000Z"),j("2024-07-17T00:00:00.000Z"),j("2024-07-18T00:00:00.000Z"),j("2024-07-11T00:00:00.000Z"),j("2024-07-12T00:00:00.000Z"),j("2024-07-13T00:00:00.000Z"),j("2024-07-14T00:00:00.000Z"),j("2024-07-15T00:00:00.000Z"),j("2024-07-16T00:00:00.000Z"),j("2024-07-17T00:00:00.000Z"),j("2024-07-18T00:00:00.000Z");const Te=[{value:"1",label:"1D"},{value:"7",label:"1W"},{value:"30",label:"1M"}],Ae=[{value:"7",label:"Weekly"},{value:"30",label:"Monthly"},{value:"90",label:"Quarterly"}],Be=["#7517F8","#E323FF","#4DFFDF","#4DA1FF","#F5AC6E","#60B7FF","#007AFF","#e9d4ff","#d2e031","#68822a","#f9d637","#48174d"],Z=18e5,q=o.button.attrs(e=>({$width:e.$width==="full"?"100%":"120px"}))`
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
`,ce=B`
  display: flex;
  flex-direction: column;
`,J=B`
  ${ce};
  align-items: center;
`,W=B`
  ${J};
  justify-content: center;
`,Ce=B`
  display: flex;
  align-items: center;
`,P=B`
  ${Ce};
  justify-content: space-between;
`,Dr=B`
  display: flex;
  justify-content: flex-end;
`,ke=B`
  ${J};
  position: relative;
  width: 100%;
`,ot=B`
  ${W};
  background-color: transparent;
  width: 100%;
`,Ie=o.input`
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
`,st=B`
  width: 21px;
  height: 23px;
  fill: ${({theme:e})=>e.color.navBarSvg};

  &:hover {
    fill: ${({theme:e})=>e.color.navBarSvgActive};
  }
`,nt=o(q)`
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
`,we=B`
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
`,$e=B`
  background-color: #484545;

  &:not(:checked) {
    font-family: ${({theme:e})=>e.fonts.interBold}, sans-serif;
    color: ${({theme:e})=>e.sharedColors.textSecondary};
    font-weight: 700;
  }
`,at=B`
  height: 100%;
  padding-left: 10px;
`,je=B`
  align-items: flex-start;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 0 15px 0 21px;
  z-index: 100;
`,it=o.div.attrs(e=>({$border:e.$border==="true"?"1px solid rgba(255, 255, 255, 0.5)":"none"}))`
  background: ${({theme:e})=>e.color.boxBackground};
  border-radius: ${({theme:e})=>e.borderRadius.large};
  width: ${e=>e.$width};
  border: ${e=>e.$border};
  padding: ${e=>e.$padding};
`,Rr=ft`
  0% {
    transform: rotateY(0deg);
  }

  50% {
    transform: rotateY(180deg);
  }

  100% {
    transform: rotateY(360deg);
  }
`,Lr=o.div`
  ${ot};
  perspective: 1000px;
  height: ${({height:e})=>e||"100vh"};
`,Tr=o.svg`
  animation: ${Rr} 1.5s linear infinite;
  background: transparent;
  width: 40px;
  height: 40px;
`;function N({height:e}){return t.jsx(Lr,{height:e,children:t.jsx(Tr,{children:t.jsx("use",{xlinkHref:"svg/sprite.svg#loader"})})})}const Ar=o.div`
  ${ot};
  color: ${({theme:e})=>e.color.textMain};
  height: 100%;
`;function G(){return t.jsx(Ar,{children:"Data is currently unavailable!"})}const Br=o(it)`
  ${ce};
  position: relative;
  min-width: 240px;
  width: 100%;
  height: 155px;
  font-family: ${({theme:e})=>e.fonts.interSemiBold};
  background: ${({theme:e})=>e.color.boxInnerBackground};
  border: none;
  padding: 30px 0 15px;
  margin: 30px 10px 10px;
`,Ir=o.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50px;
  height: 50px;
`,Or=o.div`
  ${je}
  ${P}
  top: 30px;
  color: ${({theme:e})=>e.sharedColors.btnIcon};
  text-transform: uppercase;
`,Mr=o.svg`
  width: 13px;
  height: 17px;
  fill: ${({theme:e})=>e.sharedColors.btnIcon};
  vertical-align: top;
  margin: 0 3px;
`,Pr=o.span`
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
`,Nr=o.svg`
  width: 16px;
  height: 17px;

  &.positive {
    --fill-color: #e72d04;
  }

  &.negative {
    --fill-color: #00c287;
    transform: rotate(180deg);
  }
`;function _r({image:e,symbol:r,current_price:s,position:n}){const{ref:a,width:l=1}=ae(),{id:c}=L(E=>E.config.exchangeCurrency),g=kr(s),[h,b]=i.useState([]),[m,p]=i.useState(!0),[y,x]=i.useState(!1),S=n==="even"?"#4DFFDF":"#E323FF",D=!y&&!m,R=i.useMemo(()=>me({positive:s<Number(g),negative:s>Number(g)}),[s,g]),I=async()=>{x(!1),p(!0);try{const E=await jr({fromCurrency:r,toCurrency:c});b(E),p(!1)}catch(E){console.error(E),p(!1),x(!0)}};return i.useEffect(()=>{I();const E=setInterval(()=>{I()},Z);return()=>{clearInterval(E)}},[r]),t.jsxs(Br,{ref:a,children:[t.jsx(Ir,{children:t.jsx("img",{src:e,alt:r,width:"50",height:"50"})}),t.jsxs(Or,{children:[t.jsxs("span",{children:[r,t.jsx(Mr,{children:t.jsx("use",{xlinkHref:"svg/sprite.svg#arrow-right"})}),c]}),g&&t.jsx(t.Fragment,{children:t.jsx(Nr,{className:R,children:t.jsx("use",{xlinkHref:"svg/sprite.svg#circled-arrow"})})})]}),t.jsx(Pr,{className:R,children:vr(r,s)}),t.jsxs("div",{children:[D&&t.jsx(bt,{width:l,height:200,domainPadding:{y:[50,0]},color:S,children:t.jsx(Ze,{data:h})}),m&&t.jsx(N,{height:"150px"}),y&&t.jsx(G,{})]})]})}const Fr=o.div`
  ${Ce};
  height: calc(100% - 1px);
  overflow-y: hidden;
  overflow-x: auto;
`;function Hr(){const{currenciesList:e,exchangeCurrency:r}=L(p=>p.config),{data:s,isLoading:n,error:a}=L(p=>p.cryptoData),[l,c]=i.useState({}),g=i.useCallback(p=>p%2===0?"even":"odd",[]),h=!n&&!a&&s.length,b=n&&!s.length,m=!n&&!s.length&&a;return i.useEffect(()=>{const p=new WebSocket(ur);return p.onopen=function(){const x={action:"SubAdd",subs:e.map(({symbol:w})=>`5~CCCAGG~${w==null?void 0:w.toUpperCase()}~${r.id}`)};p.send(JSON.stringify(x))},p.onmessage=function(x){const{FROMSYMBOL:w,PRICE:$}=JSON.parse(x.data);w&&$&&c(S=>{const D=w.toLowerCase(),R=S[D];return{...S,...R&&{[D]:{...R,current_price:$}}}})},()=>{p.close()}},[]),i.useEffect(()=>{c(yr(s))},[s]),t.jsxs(Fr,{children:[h&&Object.entries(l).map(([p,y],x)=>t.jsx(_r,{position:g(x),...y},p)),b&&t.jsx(N,{}),m&&t.jsx(G,{})]})}const ct=()=>{const e="#868B93",r="#372C44",s="#261E35",n="rgba(0, 0, 0, 0.8)",a={axis:{stroke:e,strokeWidth:1},ticks:{stroke:e,size:4},tickLabels:{fill:e,fontSize:10}};return{chartMT:{marginTop:"15px"},axisMain:{...a,grid:{stroke:0}},axisDependent:{...a,grid:{stroke:r}},flyoutTooltipStyle:{fill:n},candleStick:{data:{fillOpacity:.7,stroke:s,strokeWidth:1}}}},Gr=o.div`
  ${at};
`,zr=o.div`
  ${Dr};
  ${je};
  padding-bottom: 18px;
`,Ur=o.select`
  ${we};
`,Vr=o.option`
  ${$e};
`,Wr=yt("voronoi","cursor");function Yr(){const e=ct(),{ref:r,width:s=1,height:n=1}=ae(),{currenciesList:a,exchangeCurrency:l}=L(d=>d.config),[c,g]=i.useState({}),[h,b]=i.useState(!0),[m,p]=i.useState(!1),[y,x]=i.useState(Ae[0].value),w=i.useMemo(()=>Object.getOwnPropertyNames(c).length,[c]),$="#c43a31",S=!m&&!h&&!!w,D=!h&&m,R=async d=>{p(!1),b(!0);try{const k=await $r({fromCurrency:d,toCurrency:l.id,timeRange:y});g(C=>({...C,...k}))}catch(k){console.error(k),b(!1),p(!0)}},I=async()=>{b(!0);for await(const d of a.map(({symbol:k})=>fr(500).then(()=>{R(k)})));b(!1)},E=({target:{value:d}})=>{x(d)};return i.useEffect(()=>{I();const d=setInterval(()=>{I()},Z);return()=>{clearInterval(d)}},[y]),t.jsxs(Gr,{ref:r,children:[t.jsx(zr,{children:t.jsx(Ur,{value:y,onChange:E,"aria-label":"Market period overview",children:Ae.map(({value:d,label:k})=>t.jsx(Vr,{value:d,children:k},d))})}),S&&t.jsxs(qe,{theme:Je.material,domainPadding:{x:50,y:10},scale:{x:"time"},width:s,height:n,containerComponent:t.jsx(Wr,{style:e.chartMT,cursorDimension:"x",voronoiDimension:"x",labelComponent:t.jsx(vt,{centerOffset:{x:80,y:10},constrainToVisibleArea:!0,dy:-50,flyoutStyle:e.flyoutTooltipStyle}),labels:({datum:d})=>{const k=Object.entries(c).find(([C,v])=>v.find(({y:u})=>u===d.y));return`${k==null?void 0:k[0].toLocaleUpperCase()}: ${l.symbol}${d.y} (${Cr(d.x)})`}}),children:[t.jsx(re,{style:e.axisMain}),t.jsx(re,{dependentAxis:!0,style:e.axisDependent,tickFormat:rt}),Object.entries(c).map(([d,k],C)=>t.jsx(Ze,{interpolation:"basis",style:{data:{stroke:Be[C]||$},labels:{fill:Be[C]||$}},data:k},d))]},y),h&&t.jsx(N,{height:`${n}px`}),D&&t.jsx(G,{})]})}const F={xs:"375px",sm:"600px",md:"900px",lg:"1200px",xl:"1440px",xxl:"1920px"},T={xs:`(max-width: ${F.xs})`,sm:`(max-width: ${F.sm})`,md:`(max-width: ${F.md})`,lg:`(max-width: ${F.lg})`,xl:`(max-width: ${F.xl})`,xxl:`(max-width: ${F.xxl})`},Kr=o.div`
  ${ce}
  height: 100%;
  padding: 10px;
  overflow: auto;
`,Zr=o.article`
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
`,qr=o.div`
  border-radius: ${({theme:e})=>e.borderRadius.extraSmall};
  min-width: 180px;
  max-width: 210px;
  flex-basis: 30%;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;

  @media ${T.sm} {
    min-width: 140px;
  }

  img {
    border-radius: ${({theme:e})=>e.borderRadius.extraSmall};
    aspect-ratio: 10 / 9;
    transition: transform 0.3s linear;
  }
`,Jr=o.div`
  ${ce};
  flex-grow: 1;
`,Xr=o.h3`
  font-size: clamp(14px, 2vw, 16px);
  line-height: 1.1;
  color: ${({theme:e})=>e.sharedColors.searchText};
  text-shadow: 1px 1px black;
  margin-bottom: 20px;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: ${({theme:e})=>e.sharedColors.accentLight};
  }
`,Qr=o.p`
  font-family: ${({theme:e})=>e.fonts.interRegular};
  font-size: 12px;
  color: ${({theme:e})=>e.sharedColors.btnIcon};
  margin-bottom: 10px;
`,eo=o.div`
  ${P};
  flex-wrap: wrap;
  font-size: 0.6875rem;
`,to=o.p`
  ${P};
  color: ${({theme:e})=>e.color.articleTime};
  margin-right: 15px;
  margin-top: 5px;
`,ro=o.div`
  ${P};
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
`,oo=o.span`
  display: inline-block;
  color: ${({theme:e})=>e.sharedColors.btnIcon};
  border-radius: ${({theme:e})=>e.borderRadius.medium};
  background: ${({theme:e})=>e.sharedColors.accentColor};
  padding: 5px 7px;
  margin: 2px;
`;function so(){const[e,r]=i.useState([]),[s,n]=i.useState(!0),[a,l]=i.useState(!1),c=async()=>{l(!1),n(!0);try{const h=await Er();r(h),n(!1)}catch(h){console.error(h),n(!1),l(!0)}},g=h=>j.unix(h).format("MMMM Do YYYY, h:mm a");return i.useEffect(()=>{c();const h=setInterval(()=>{c()},Z);return()=>{clearInterval(h)}},[]),t.jsxs(Kr,{children:[e==null?void 0:e.map(({id:h,imageurl:b,title:m,url:p,categories:y,published_on:x,body:w})=>t.jsxs(Zr,{children:[t.jsx(qr,{children:t.jsx("img",{src:b,width:"180",height:"100",alt:m})}),t.jsxs(Jr,{children:[t.jsx(Xr,{children:t.jsx("a",{href:p,target:"_blank",children:m})}),t.jsx(Qr,{children:w}),t.jsxs(eo,{children:[t.jsx(to,{children:g(x)}),t.jsx(ro,{children:y.split("|").map($=>t.jsx(oo,{children:$},$))})]})]})]},h)),s&&t.jsx(N,{}),a&&t.jsx(G,{})]})}function Se(){return Ct()<=1200}const no=o.div`
  ${at};
`,ao=o.div`
  ${P};
  ${je};
`,io=o.div`
  display: flex;
  gap: 5px;
  margin-left: 5px;
`,co=o(q)`
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
`,lo=o.select`
  ${we};
`,po=o.option`
  ${$e};
`;function ho(){const e=ct(),r=Se(),{ref:s,width:n=1,height:a=1}=ae(),{currenciesList:l,exchangeCurrency:c}=L(d=>d.config),[g,h]=i.useState([]),[b,m]=i.useState(!0),[p,y]=i.useState(!1),[x,w]=i.useState(l[0].id),[$,S]=i.useState(Te[0].value),D=!p&&!b&&!!g.length,R=async()=>{y(!1),m(!0);try{const d=await wr({fromCurrency:x,toCurrency:c.id,timeRange:$});h(d),m(!1)}catch(d){console.error(d),m(!1),y(!0)}},I=({target:{value:d}})=>{w(d)},E=d=>{const{value:k}=d.target;S(k)};return i.useEffect(()=>{R();const d=setInterval(()=>{R()},Z);return()=>{clearInterval(d)}},[x,$]),t.jsxs(no,{ref:s,children:[t.jsxs(ao,{children:[t.jsx(lo,{value:x,onChange:I,"aria-label":"Coin to currency",children:l.map(({id:d,symbol:k})=>t.jsxs(po,{value:d,children:[k,"/",c.id]},d))}),t.jsx(io,{children:Te.map(({value:d,label:k})=>t.jsx(co,{value:d,className:me({active:$===d}),onClick:E,children:k},d))})]}),t.jsx("svg",{style:{position:"absolute"},children:t.jsxs("defs",{children:[t.jsxs("linearGradient",{id:"positiveGradient",x1:"0%",y1:"0%",x2:"0%",y2:"100%",children:[t.jsx("stop",{offset:"0%",stopColor:"#4DFFDF"}),t.jsx("stop",{offset:"100%",stopColor:"#4DA1FF"})]}),t.jsxs("linearGradient",{id:"negativeGradient",x1:"0%",y1:"0%",x2:"0%",y2:"100%",children:[t.jsx("stop",{offset:"0%",stopColor:"#E323FF"}),t.jsx("stop",{offset:"100%",stopColor:"#7517F8"})]})]})}),D&&t.jsxs(qe,{theme:Je.material,domainPadding:{x:r?40:110},scale:{x:"time"},width:n,height:a,containerComponent:t.jsx(kt,{style:e.chartMT}),children:[t.jsx(re,{style:e.axisMain}),t.jsx(re,{dependentAxis:!0,style:e.axisDependent,tickFormat:rt}),t.jsx(wt,{style:e.candleStick,candleColors:{positive:"url(#positiveGradient)",negative:"url(#negativeGradient)"},data:g})]},`${x}-${$}`),b&&t.jsx(N,{height:`${a}px`}),p&&t.jsx(G,{})]})}const xo={data:[],isLoading:!0,error:!1},ee=$t("cryptoData/general",async({fromCurrencies:e,toCurrency:r})=>await Sr({fromCurrencies:e,toCurrency:r})),Ee=fe({name:"cryptoData",initialState:xo,reducers:{setData:(e,r)=>{e.data=r.payload,e.isLoading=!1}},extraReducers:e=>{e.addCase(ee.pending,r=>{r.isLoading=!0}),e.addCase(ee.fulfilled,(r,s)=>{r.isLoading=!1,r.data=s.payload}),e.addCase(ee.rejected,r=>{r.isLoading=!1,r.error=!0})}});Ee.actions;Ee.reducer;const uo=o.svg`
  fill: ${({theme:e})=>e.sharedColors.statusDown};
  width: 12px;
  height: 7px;

  &.up {
    fill: ${({theme:e})=>e.sharedColors.stausUp};
    transform: rotate(180deg);
  }
`,go=o.div`
  display: grid;
  grid-template-columns: 3fr 2fr 1fr;
  grid-auto-rows: 48px;
  height: 100%;
  font-family: ${({theme:e})=>e.fonts.interRegular};
  font-size: 0.75rem;
  color: ${({theme:e})=>e.color.textMain};
  overflow: auto;

  & > div {
    ${Ce};
    line-height: 0.714;
    padding: 15px 24px;
  }
`,he=o.h3`
  position: sticky;
  top: 0;
  font-size: 0.625rem;
  color: ${({theme:e})=>e.color.trendHeading};
  background: ${({theme:e})=>e.color.boxBackground};
  white-space: nowrap;
  padding: 20px 24px;
  z-index: 1;
`,Oe=o.div`
  grid-column: 1/-1;
  text-align: center;
`,mo=o.div`
  text-transform: uppercase;

  span {
    color: ${({theme:e})=>e.sharedColors.trendCurrencyName};
    text-transform: capitalize;
    margin-left: 10px;
  }
`,fo=o.div`
  color: ${({theme:e})=>e.sharedColors.price};
`,bo=o.div`
  ${P};
  max-width: 130px;
  width: 100%;

  span {
    margin-left: 15px;
  }
`,yo=e=>t.jsx(uo,{className:me({up:Math.sign(e)===-1}),children:t.jsx("use",{xlinkHref:"svg/sprite.svg#angle"})});function vo(){const{ref:e,height:r=1}=ae(),s=H(),{currenciesList:n,exchangeCurrency:a}=L(x=>x.config),{data:l,isLoading:c,error:g}=L(x=>x.cryptoData),h=i.useMemo(()=>n.map(({id:x})=>x).join(","),[n]),b=!c&&!g,m=!c&&g,p=c&&!g,y=i.useCallback(()=>s(ee({fromCurrencies:h,toCurrency:a.id})),[h,a.id]);return i.useEffect(()=>{y();const x=setInterval(()=>{y()},Z);return()=>{clearInterval(x)}},[y]),t.jsxs(go,{ref:e,children:[t.jsx(he,{children:"Name"}),t.jsxs(he,{children:["24h Average price(",a.symbol,")"]}),t.jsx(he,{children:"24h Change(%)"}),b&&l.map(({id:x,name:w,symbol:$,current_price:S,price_change_percentage_24h:D})=>t.jsxs(i.Fragment,{children:[t.jsxs(mo,{children:[$," ",t.jsx("span",{children:w})]}),t.jsx(fo,{children:S}),t.jsxs(bo,{children:[Math.abs(D),t.jsx("span",{children:yo(D)})]})]},x)),p&&t.jsx(Oe,{children:t.jsx(N,{height:`${r/1.5}px`})}),m&&t.jsx(Oe,{children:t.jsx(G,{})})]})}const U={minHeight:240,group:"shared",cached:!0},V={minWidth:240},M=(e=!0)=>({news:{...U,...e&&V,id:"news",title:"News",content:t.jsx(so,{})},history:{...U,...e&&V,id:"history",title:"Trade history",content:t.jsx(ho,{})},cryptocurrencies:{...U,...e&&V,id:"cryptocurrencies",title:"Cryptocurrencies",content:t.jsx(Hr,{})},overview:{...U,...e&&V,id:"overview",title:"Market overview",content:t.jsx(Yr,{})},trends:{...U,...e&&V,id:"trends",title:"Trends",content:t.jsx(vo,{})}}),Me={dockbox:{mode:"vertical",children:[{mode:"horizontal",size:260,children:[{tabs:[M().news]},{tabs:[M().history]}]},{size:180,tabs:[M().cryptocurrencies]},{size:260,mode:"horizontal",children:[{tabs:[M().overview]},{mode:"horizontal",tabs:[M().trends]}]}]}},Pe={dockbox:{mode:"vertical",children:[{tabs:[M(!1).news]},{tabs:[M(!1).history]},{tabs:[M(!1).cryptocurrencies]},{tabs:[M(!1).overview]},{tabs:[M(!1).trends]}]}},Ne={currenciesList:ue.slice(0,6),exchangeCurrency:xe.USD,theme:oe.DARK,serializedDockbox:null,persistentDockbox:!1},De=fe({name:"config",initialState:Ne,reducers:{setCurrenciesList:(e,r)=>{e.currenciesList=r.payload},setExchangeCurrency:(e,r)=>{e.exchangeCurrency=r.payload},setTheme:(e,r)=>{e.theme=r.payload},setSerializedDockbox:(e,r)=>{e.serializedDockbox=r.payload},setPersistentDocbox:(e,r)=>{e.persistentDockbox=r.payload},resetConfig:()=>Ne}}),{setCurrenciesList:lt,setExchangeCurrency:dt,setTheme:pt,setSerializedDockbox:se,setPersistentDocbox:ht,resetConfig:Co}=De.actions;De.reducer;function ko(){const e=Se(),r=e?Pe:Me,s=H(),n=L(p=>p.config.serializedDockbox),a=JSON.parse(String(n)),[l,c]=i.useState(a||r),g=M(!e),h=i.useMemo(()=>({shared:{floatable:!1,maximizable:!0,disableDock:e}}),[e]),b=i.useCallback(({id:p})=>g[p],[g]),m=i.useCallback(p=>{c(p),s(se(JSON.stringify(p)))},[]);return i.useEffect(()=>{if(e)c(Pe);else{const p=a||Me;c(p),s(se(JSON.stringify(p)))}},[e]),i.useEffect(()=>{n||c(r)},[n]),{dockbox:l,groups:h,loadTab:b,onDockboxChange:m}}const wo=o.section`
  height: 100%;
  width: 100%;

  & .dock-layout {
    /* min-height: calc(100vh - 100px); */
    /* height: 100%; */
    margin: 0 30px;
    overflow: auto;

    @media ${T.lg} {
      margin-left: 20px;
      margin-right: 20px;
    }
    @media ${T.sm} {
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
`,$o={position:"absolute",left:0,top:0,right:0,bottom:20};function jo(){const{dockbox:e,groups:r,loadTab:s,onDockboxChange:n}=ko();return t.jsx(wo,{className:"dockLayoutContainer",children:t.jsx(jt,{layout:e,loadTab:s,onLayoutChange:n,groups:r,style:$o},`${r.shared.maximizable}`)})}const So=o.main`
  ${ke}
  height: 100vh;
`,Eo=o.section`
  ${ke};
  justify-content: center;
  height: 100%;
  color: ${({theme:e})=>e.sharedColors.searchText};
  padding: 10px;
  overflow: hidden;

  p {
    font-size: 2.5rem;
    margin-bottom: 40px;
  }
`,Do=o.span`
  font-size: 6.25rem;
`,Ro=o.img`
  position: absolute;
  top: 21%;
  left: 51%;
  max-width: 280px;
  max-height: 260px;
  z-index: -1;
`;function Lo(){const e=K(),r=()=>{e("/")};return t.jsx(So,{children:t.jsxs(Eo,{children:[t.jsx(Do,{children:"404"}),t.jsx("p",{children:"Page not found!"}),t.jsx(Ro,{src:"images/404.webp",alt:"Broken bitcoin",width:"280",height:"260"}),t.jsxs(nt,{type:"button",onClick:r,children:[t.jsx("svg",{children:t.jsx("use",{xlinkHref:"svg/sprite.svg#home"})}),t.jsx("span",{children:"Home"})]})]})})}const To={apiKey:sr,authDomain:nr,projectId:ar,storageBucket:ir,messagingSenderId:cr,appId:lr},Re=St(To),le=Et(Re),Ao=async e=>!(await Tt(At(Ot(le,"users"),It("email","==",e),Bt(1)))).empty,_e=async({email:e,uid:r})=>{await Ao(e)||await Dt(be(le,"users",r),{email:e})},Bo=async({uid:e},r)=>{await Rt(be(le,"users",e),{config:{...r}})},Io=async({uid:e})=>{var n;const r=be(le,"users",e),s=await Lt(r);return s.exists()&&((n=s.data())==null?void 0:n.config)||null},Oo={user:null},Le=fe({name:"auth",initialState:Oo,reducers:{login:(e,r)=>{e.user=r.payload},logout:e=>{e.user=null}}}),{login:te,logout:Mo}=Le.actions;Le.reducer;function ge(e){return t.jsx(q,{...e})}const Po=o.header`
  ${P};
  width: 100%;
  max-height: 100px;
  padding: 30px;

  @media ${T.lg} {
    max-height: 80px;
    padding: 20px;
  }
  @media ${T.sm} {
    padding-left: 10px;
    padding-right: 10px;
  }
`,No=o.div`
  ${P}
  gap: 12px;
`,_o=o.div`
  color: ${({theme:e})=>e.sharedColors.btnIcon};
  padding: 5px;

  & > div {
    ${W};
    width: 47px;
    height: 47px;
    border-radius: ${({theme:e})=>e.borderRadius.circle};
    background: ${({theme:e})=>e.color.userProfile};
    cursor: pointer;
  }
`;function Fo(){var g,h;const e=K(),r=Xe(),{user:s}=L(b=>b.auth),n=r.pathname==="/",a=r.pathname==="/settings",l=((g=s==null?void 0:s.displayName)==null?void 0:g.split(/\s+/).map(b=>b.substring(0,1).toUpperCase()).join(""))||((h=s==null?void 0:s.email)==null?void 0:h.substring(0,1).toUpperCase()),c=()=>{e("/auth")};return t.jsxs(Po,{children:[n&&t.jsx("span",{children:"Home"}),a&&t.jsx("span",{children:"Settings"}),t.jsx(No,{children:s?t.jsx(_o,{children:t.jsx("div",{children:l})}):t.jsx(ge,{onClick:c,type:"button",children:t.jsx("span",{children:"Sign in"})})})]})}const Ho=o.nav`
  ${J};
  gap: 30px;
`,Fe=o(Mt)`
  border-radius: ${({theme:e})=>e.borderRadius.small};
  transition: background 0.2s ease-in;

  &.active,
  &:hover {
    ${W};
    background: ${({theme:e})=>e.color.iconActiveBackground};

    svg {
      fill: ${({theme:e})=>e.color.navBarSvgActive};
    }
  }

  svg {
    ${st};
  }

  span {
    ${W};
    width: 61px;
    height: 58px;
    text-align: center;

    @media ${T.lg} {
      width: 51px;
      height: 48px;
    }

    @media ${T.sm} {
      width: 41px;
      height: 38px;
    }
  }
`;function Go(){const{user:e}=L(r=>r.auth);return t.jsxs(Ho,{children:[t.jsx(Fe,{to:"/","aria-label":"Home page",children:t.jsx("span",{children:t.jsx("svg",{children:t.jsx("use",{xlinkHref:"svg/sprite.svg#home"})})})}),e&&t.jsx(Fe,{to:"/settings","aria-label":"Settings",children:t.jsx("span",{children:t.jsx("svg",{children:t.jsx("use",{xlinkHref:"svg/sprite.svg#settings"})})})})]})}const zo=o.div`
  ${J};
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

  @media ${T.lg} {
    width: 80px;
    padding: 25px 10px 20px;
  }

  @media ${T.sm} {
    width: 60px;
    padding-left: 5px;
    padding-right: 5px;
  }
`,Uo=o.div`
  svg {
    width: 42px;
    height: 46px;

    @media ${T.lg} {
      width: 37px;
      height: 41px;
    }

    @media ${T.sm} {
      width: 32px;
      height: 36px;
    }
  }
`,Vo=o.div`
  margin-top: auto;
`,xt=o(q)`
  text-align: center;
  background: transparent;
  border: none;
  width: auto;
  margin-top: 40px;

  @media ${T.lg} {
    margin-top: 30px;
  }

  @media ${T.sm} {
    margin-top: 20px;
  }

  svg {
    ${st};
  }
`,Wo=o(xt)`
  svg {
    width: 25px;
  }
`;function Yo(){const e=K(),{user:r}=L(l=>l.auth),s=H(),n=ye(Re),a=async()=>{if(confirm("Logout confirmation"))try{await Nt(n),s(Mo()),s(Co()),e("/")}catch{console.log("signOut fail")}};return t.jsxs(zo,{children:[t.jsx(Uo,{children:t.jsx(Pt,{to:"/","aria-label":"Return to home page",children:t.jsx("svg",{children:t.jsx("use",{xlinkHref:"svg/sprite.svg#logo"})})})}),t.jsx(Go,{}),t.jsxs(Vo,{children:[t.jsx(Wo,{onClick:()=>s(se(null)),"aria-label":"Reset layout",children:t.jsx("svg",{children:t.jsx("use",{xlinkHref:"svg/sprite.svg#reset"})})}),r&&t.jsx(xt,{onClick:a,"aria-label":"Log out",children:t.jsx("svg",{children:t.jsx("use",{xlinkHref:"svg/sprite.svg#log-out"})})})]})]})}const Ko=o.div`
  display: flex;
`,Zo=o.div`
  ${J};
  width: 100%;
  overflow: auto;
`,qo=o.main`
  ${ke};
  height: 100%;
`;function Jo(){const e=ye(),r=H(),[s,n]=i.useState(!0);return i.useEffect(()=>{n(!0),_t(e,async a=>{if(a&&a.email){r(te({email:a.email,uid:a.uid,photoURL:a.photoURL||null,displayName:a.displayName}));const l=await Io(a);if(l){const{currenciesList:c,exchangeCurrency:g,theme:h,serializedDockbox:b}=l;c&&r(lt(c)),g&&r(dt(g)),h&&r(pt(h)),b&&(r(se(b)),r(ht(!0)))}}n(!1)})},[]),t.jsxs(t.Fragment,{children:[s&&t.jsx(N,{}),!s&&t.jsxs(Ko,{children:[t.jsx(Yo,{}),t.jsxs(Zo,{children:[t.jsx(Fo,{}),t.jsx(qo,{children:t.jsx(Ft,{})})]})]})]})}const Xo=/^(([^<>()\[\]\\.,;:\s@"]+(.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/,Qo=/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{6,}$/,es=e=>Ht().shape({email:de().email("Invalid email format.").matches(Xo,"Email address is required.").required(),password:de().matches(Qo,"Password must contain one digit from 0 to 6, one lowercase letter, one uppercase letter, one special character, no spaces and at least 6 characters long.").required("Pasword is required."),...!e&&{repeatPassword:de().oneOf([Gt("password")],"Passwords don't match.").required("Repeat password is required.")}}),ts=o.main`
  ${W};
  position: relative;
  height: 100vh;
  padding: 10px;
`,rs=o(nt)`
  position: absolute;
  top: 30px;
  right: 30px;

  @media ${T.lg} {
    top: 20px;
    right: 20px;
  }

  @media ${T.sm} {
    right: 10px;
  }
`,os=o(it)`
  min-width: 300px;
  max-width: 375px;
  width: 100%;
`,ss=o.svg`
  width: 30px;
  height: 21px;
  vertical-align: middle;
`,ns=o.p`
  font-size: ${({theme:e})=>e.fontSize.small};
  color: ${({theme:e})=>e.sharedColors.statusDown};
  margin: 0;
`,He=o.div`
  margin-bottom: 10px;
`,Ge=o.div`
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
`,as=o.div`
  text-align: center;
  margin: 15px 0;
`,is=o.span`
  transition: color 0.3s ease-in-out;

  &:hover {
    text-decoration: underline;
    color: ${({theme:e})=>e.sharedColors.accentColor};
    cursor: pointer;
  }
`,cs={email:"",password:"",repeatPassword:""};function ls(){var E,d,k;const e=K(),r=ye(Re),{user:s}=L(C=>C.auth),n=H(),[a,l]=i.useState("login"),c=a==="login",g=es(c),{register:h,handleSubmit:b,formState:{errors:m},reset:p,clearErrors:y}=zt({defaultValues:cs,resolver:Ut(g)}),x=[{typeName:"email",example:"email@example.com",fieldName:"email",err:m.email,errMsg:(E=m.email)==null?void 0:E.message},{typeName:"password",example:"********",fieldName:"password",err:m.password,errMsg:(d=m.password)==null?void 0:d.message},{typeName:"password",example:"repeat password",fieldName:"repeatPassword",err:m.repeatPassword,errMsg:(k=m.repeatPassword)==null?void 0:k.message}];i.useEffect(()=>{s&&e("/")},[s,e]),i.useEffect(()=>{p(),y()},[c]);const w=()=>{l(C=>C==="login"?"sign-up":"login")},$=()=>{e("/")},S=async({email:C,password:v})=>{try{const{user:u}=await Yt(r,C,v);return u&&u.email&&(_e(u),n(te({email:u.email,uid:u.uid,photoURL:u.photoURL||null,displayName:u.displayName}))),u}catch(u){if(u instanceof pe){const O=u.code;O==="auth/email-already-in-use"&&alert("Email already exists!"),console.error("Error:",O)}}},D=async({email:C,password:v})=>{try{const{user:u}=await Kt(r,C,v);return u&&u.email&&n(te({email:u.email,uid:u.uid,photoURL:u.photoURL||null,displayName:u.displayName})),u}catch(u){if(u instanceof pe){const O=u.code;O==="auth/user-not-found"&&alert("Sign up first!"),O==="auth/invalid-credential"&&alert("Check your credentials!"),console.error("Error:",O)}}},R=async C=>{const{email:v,password:u}=C;if(!c)return S({email:v,password:u});D({email:v,password:u})},I=async()=>{const C=new Vt;try{const{user:v}=await Wt(r,C);return v&&v.email&&(_e(v),n(te({email:v.email,uid:v.uid,photoURL:v.photoURL||null,displayName:v.displayName}))),v}catch(v){return v instanceof pe&&v.code!=="auth/cancelled-popup-request"&&console.error("Error:",v),null}};return t.jsxs(ts,{children:[t.jsxs(rs,{type:"button",onClick:$,children:[t.jsx("svg",{children:t.jsx("use",{xlinkHref:"svg/sprite.svg#home"})}),t.jsx("span",{children:"Home"})]}),t.jsx(os,{as:"section",$padding:"20px",$border:"true",children:t.jsxs("form",{name:"auth-form",onSubmit:b(R),children:[t.jsxs(ge,{onClick:I,type:"button",$width:"full",children:[t.jsx("span",{children:"Sign with"}),t.jsx(ss,{children:t.jsx("use",{xlinkHref:"svg/sprite.svg#google"})})]}),t.jsxs(Ge,{children:[t.jsx("hr",{})," ",t.jsx("span",{children:"or"}),t.jsx("hr",{})]}),t.jsx("div",{children:c?x.filter(C=>C.fieldName!=="repeatPassword").map(({typeName:C,example:v,fieldName:u},O)=>t.jsx(He,{children:t.jsx(Ie,{type:C,placeholder:v,...h(u)})},O)):x.map(({typeName:C,example:v,fieldName:u,err:O,errMsg:f},A)=>t.jsxs(He,{children:[t.jsx(Ie,{type:C,placeholder:v,...h(u)}),t.jsx(ns,{children:f})]},A))}),t.jsx(ge,{type:"submit",$width:"full",children:t.jsxs("span",{children:["Sign ",c?"in":"up"," with Email"]})}),t.jsxs(as,{children:[t.jsx("span",{children:c?"Don't have an account yet?":"Already have an account?"})," ",t.jsxs(is,{onClick:w,children:["Sign ",c?"up":"in"]})]}),t.jsxs(Ge,{children:[t.jsx("hr",{})," ",t.jsx("span",{children:"Forgot password?"}),t.jsx("hr",{})]})]})})]})}const ds=o.section`
  max-width: 450px;
  width: 100%;
  padding: 0 10px 10px;
`,X=o.fieldset`
  background: ${({theme:e})=>e.color.boxBackground};
  border-radius: ${({theme:e})=>e.borderRadius.large};
  border: 1px solid ${({theme:e})=>e.color.border};
  padding: 6px 15px 10px 10px;
  margin-bottom: 7px;
`,Q=o.legend`
  font-size: 1rem;
  line-height: 1;
  color: ${({theme:e})=>e.sharedColors.accentLight};
`,ze=o.div`
  margin-bottom: 3px;
`,ne=o.label`
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
`,Ue=o.input`
  padding: 0;
  height: initial;
  width: initial;
  margin-bottom: 0;
  display: none;
  cursor: pointer;

  &:checked + ${ne}:after {
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

  &:checked + ${ne} {
    color: ${({theme:e})=>e.color.textMain};
  }
`,ps=o(q)`
  margin-top: 10px;
`,Ve=o.select`
  ${we};
`,We=o.option`
  ${$e};
`;function hs(){const e=K(),r=Xe(),s=Se(),n=H(),{user:a}=L(f=>f.auth),{currenciesList:l,exchangeCurrency:c,theme:g,persistentDockbox:h,serializedDockbox:b}=L(f=>f.config),[m,p]=i.useState(c),[y,x]=i.useState(l),[w,$]=i.useState(g),[S,D]=i.useState(h),[R,I]=i.useState(!1),E=r.pathname==="/settings"&&!a;i.useEffect(()=>{E&&e("/")},[]);const d=({target:{value:f}})=>{p(xe[f])},k=({target:{id:f,checked:A}})=>{if(A){const _=ue.find(z=>z.id===f);x(z=>[...z,_])}else{const _=y.filter(z=>z.id!==f);_.length?x(_):alert("You should keep at least one currency")}},C=({target:{value:f}})=>{$(f)},v=({target:{checked:f}})=>{D(f)},u=f=>y.findIndex(A=>f===A.id)!==-1,O=async()=>{I(!0);const f={exchangeCurrency:m,currenciesList:y,theme:w,...S&&{serializedDockbox:b}};await Bo(a,f),n(dt(m)),n(lt(y)),n(pt(w)),S&&n(ht(!0)),I(!1)};return t.jsxs(ds,{children:[t.jsxs(X,{children:[t.jsx(Q,{children:"Choose main exchange currency:"}),t.jsx(Ve,{value:m.id,onChange:d,"aria-label":"Exchange currencies",children:Object.entries(xe).map(([f,{id:A,symbol:_}])=>t.jsxs(We,{value:A,children:[A," (",_,")"]},A))})]}),t.jsxs(X,{children:[t.jsx(Q,{children:"Choose crypto currencies list:"}),ue.map(({id:f,symbol:A})=>t.jsxs(ze,{children:[t.jsx(Ue,{type:"checkbox",id:f,name:A,onChange:k,checked:u(f)}),t.jsxs(ne,{htmlFor:f,children:[f," (",A,")"]})]},f))]}),t.jsxs(X,{children:[t.jsx(Q,{children:"Choose app theme:"}),t.jsx(Ve,{value:w,onChange:C,"aria-label":"Theme",children:mr.map(f=>t.jsx(We,{value:f,children:f},f))})]}),!s&&t.jsxs(X,{children:[t.jsx(Q,{children:"Choose layout settings:"}),t.jsxs(ze,{children:[t.jsx(Ue,{type:"checkbox",name:"persistentDockbox",id:"persistentDockbox",onChange:v,checked:S}),t.jsx(ne,{htmlFor:"persistentDockbox",children:S?"layout settings will be kept after save":"layout settings will be removed after save"})]})]}),t.jsx(ps,{onClick:O,disabled:R,$width:"full",children:R?"Saving":"Save changes"})]})}const Ye={sharedColors:{textSecondary:"#868B93",price:"#9292C1",sortBackground:"rgba(26, 26, 29, 0.7)",selectBorder:"rgba(26, 26, 29, 0)",dropIndicator:"rgba(0, 0, 0, 0.7)",stausUp:"#00C287",statusDown:"#E72D04",searchBackground:"#2F293E",searchText:"#E2D8FD",btnIcon:"#ffffff",accentColor:"#EC5EB7",accentLight:"#B783EB",trendCurrencyName:"#9A9A9A"},fonts:{interRegular:"Inter-Regular",interMedium:"Inter-Medium",interSemiBold:"Inter-SemiBold",interBold:"Inter-Bold"},borderRadius:{extraSmall:"10px",small:"13px",medium:"15px",large:"20px",circle:"50%"},fontSize:{small:".625rem",medium:"0.875rem"}},xs={mainBackground:"#261E35",boxBackground:"#3C354A",boxInnerBackground:"#4A435C",textMain:"#ffffff",userProfile:"#3F3655",iconActiveBackground:"#372C44",border:"rgba(255, 255, 255, 0.5)",articleTime:"#868B93",navBarSvg:"#8D8598",navBarSvgActive:"#D8BCFF",trendHeading:"#9A9A9A"},us={mainBackground:"#e0e0e0",boxBackground:"#f5f5f5",boxInnerBackground:"#a7a7a7",textMain:"#1A111D",userProfile:"#a7a7a7",iconActiveBackground:"#a7a7a7",border:"#a7a7a7",articleTime:"#535353",navBarSvg:"#8D8598",navBarSvgActive:"#EC5EB7",trendHeading:"#BFB7B7"},gs={dark:{color:xs,...Ye},light:{color:us,...Ye}},ms=Zt([{path:"/",element:t.jsx(Jo,{}),children:[{path:"/",element:t.jsx(jo,{})},{path:"/settings",element:t.jsx(hs,{})}],errorElement:t.jsx(Lo,{})},{path:"/auth",element:t.jsx(ls,{})}],{basename:"/crypto-dash/"});function fs(){const e=L(r=>r.config.theme);return t.jsxs(qt,{theme:gs[e],children:[t.jsx(or,{}),t.jsx(Jt,{router:ms})]})}const bs=Xt(Le,De,Ee),ys=Qt({reducer:bs});er.createRoot(document.getElementById("root")).render(t.jsx(tr,{store:ys,children:t.jsx(fs,{})}));
