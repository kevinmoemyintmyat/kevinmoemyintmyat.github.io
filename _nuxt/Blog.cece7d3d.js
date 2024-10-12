import{i as It,f as Ft,j as Tt,k as At,l as $t,c as _,a as d,b as k,h as B,d as St,w as we,F as be,r as _e,_ as Ct,o as w,e as I,t as y,m as jt,p as Mt,n as xt}from"./entry.d768f6bc.js";import{b as Pt,f as ke}from"./data-blog.ad758b56.js";var H=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Ot(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function Et(e,t){for(var a=-1,n=e==null?0:e.length,r=Array(n);++a<n;)r[a]=t(e[a],a,e);return r}var et=Et,Bt=Array.isArray,b=Bt,zt=typeof H=="object"&&H&&H.Object===Object&&H,tt=zt,Dt=tt,Gt=typeof self=="object"&&self&&self.Object===Object&&self,Lt=Dt||Gt||Function("return this")(),F=Lt,qt=F,Ht=qt.Symbol,U=Ht,Ie=U,at=Object.prototype,Rt=at.hasOwnProperty,Jt=at.toString,z=Ie?Ie.toStringTag:void 0;function Nt(e){var t=Rt.call(e,z),a=e[z];try{e[z]=void 0;var n=!0}catch{}var r=Jt.call(e);return n&&(t?e[z]=a:delete e[z]),r}var Kt=Nt,Ut=Object.prototype,Wt=Ut.toString;function Zt(e){return Wt.call(e)}var Yt=Zt,Fe=U,Vt=Kt,Xt=Yt,Qt="[object Null]",ea="[object Undefined]",Te=Fe?Fe.toStringTag:void 0;function ta(e){return e==null?e===void 0?ea:Qt:Te&&Te in Object(e)?Vt(e):Xt(e)}var D=ta;function aa(e){return e!=null&&typeof e=="object"}var G=aa,na=D,oa=G,ra="[object Symbol]";function ia(e){return typeof e=="symbol"||oa(e)&&na(e)==ra}var W=ia,sa=b,ha=W,la=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,ca=/^\w*$/;function pa(e,t){if(sa(e))return!1;var a=typeof e;return a=="number"||a=="symbol"||a=="boolean"||e==null||ha(e)?!0:ca.test(e)||!la.test(e)||t!=null&&e in Object(t)}var le=pa;function da(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var ce=da,ua=D,ma=ce,ga="[object AsyncFunction]",fa="[object Function]",ya="[object GeneratorFunction]",va="[object Proxy]";function wa(e){if(!ma(e))return!1;var t=ua(e);return t==fa||t==ya||t==ga||t==va}var nt=wa,ba=F,_a=ba["__core-js_shared__"],ka=_a,ee=ka,Ae=function(){var e=/[^.]+$/.exec(ee&&ee.keys&&ee.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function Ia(e){return!!Ae&&Ae in e}var Fa=Ia,Ta=Function.prototype,Aa=Ta.toString;function $a(e){if(e!=null){try{return Aa.call(e)}catch{}try{return e+""}catch{}}return""}var ot=$a,Sa=nt,Ca=Fa,ja=ce,Ma=ot,xa=/[\\^$.*+?()[\]{}|]/g,Pa=/^\[object .+?Constructor\]$/,Oa=Function.prototype,Ea=Object.prototype,Ba=Oa.toString,za=Ea.hasOwnProperty,Da=RegExp("^"+Ba.call(za).replace(xa,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function Ga(e){if(!ja(e)||Ca(e))return!1;var t=Sa(e)?Da:Pa;return t.test(Ma(e))}var La=Ga;function qa(e,t){return e==null?void 0:e[t]}var Ha=qa,Ra=La,Ja=Ha;function Na(e,t){var a=Ja(e,t);return Ra(a)?a:void 0}var j=Na,Ka=j,Ua=Ka(Object,"create"),Z=Ua,$e=Z;function Wa(){this.__data__=$e?$e(null):{},this.size=0}var Za=Wa;function Ya(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}var Va=Ya,Xa=Z,Qa="__lodash_hash_undefined__",en=Object.prototype,tn=en.hasOwnProperty;function an(e){var t=this.__data__;if(Xa){var a=t[e];return a===Qa?void 0:a}return tn.call(t,e)?t[e]:void 0}var nn=an,on=Z,rn=Object.prototype,sn=rn.hasOwnProperty;function hn(e){var t=this.__data__;return on?t[e]!==void 0:sn.call(t,e)}var ln=hn,cn=Z,pn="__lodash_hash_undefined__";function dn(e,t){var a=this.__data__;return this.size+=this.has(e)?0:1,a[e]=cn&&t===void 0?pn:t,this}var un=dn,mn=Za,gn=Va,fn=nn,yn=ln,vn=un;function M(e){var t=-1,a=e==null?0:e.length;for(this.clear();++t<a;){var n=e[t];this.set(n[0],n[1])}}M.prototype.clear=mn;M.prototype.delete=gn;M.prototype.get=fn;M.prototype.has=yn;M.prototype.set=vn;var wn=M;function bn(){this.__data__=[],this.size=0}var _n=bn;function kn(e,t){return e===t||e!==e&&t!==t}var rt=kn,In=rt;function Fn(e,t){for(var a=e.length;a--;)if(In(e[a][0],t))return a;return-1}var Y=Fn,Tn=Y,An=Array.prototype,$n=An.splice;function Sn(e){var t=this.__data__,a=Tn(t,e);if(a<0)return!1;var n=t.length-1;return a==n?t.pop():$n.call(t,a,1),--this.size,!0}var Cn=Sn,jn=Y;function Mn(e){var t=this.__data__,a=jn(t,e);return a<0?void 0:t[a][1]}var xn=Mn,Pn=Y;function On(e){return Pn(this.__data__,e)>-1}var En=On,Bn=Y;function zn(e,t){var a=this.__data__,n=Bn(a,e);return n<0?(++this.size,a.push([e,t])):a[n][1]=t,this}var Dn=zn,Gn=_n,Ln=Cn,qn=xn,Hn=En,Rn=Dn;function x(e){var t=-1,a=e==null?0:e.length;for(this.clear();++t<a;){var n=e[t];this.set(n[0],n[1])}}x.prototype.clear=Gn;x.prototype.delete=Ln;x.prototype.get=qn;x.prototype.has=Hn;x.prototype.set=Rn;var V=x,Jn=j,Nn=F,Kn=Jn(Nn,"Map"),pe=Kn,Se=wn,Un=V,Wn=pe;function Zn(){this.size=0,this.__data__={hash:new Se,map:new(Wn||Un),string:new Se}}var Yn=Zn;function Vn(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}var Xn=Vn,Qn=Xn;function eo(e,t){var a=e.__data__;return Qn(t)?a[typeof t=="string"?"string":"hash"]:a.map}var X=eo,to=X;function ao(e){var t=to(this,e).delete(e);return this.size-=t?1:0,t}var no=ao,oo=X;function ro(e){return oo(this,e).get(e)}var io=ro,so=X;function ho(e){return so(this,e).has(e)}var lo=ho,co=X;function po(e,t){var a=co(this,e),n=a.size;return a.set(e,t),this.size+=a.size==n?0:1,this}var uo=po,mo=Yn,go=no,fo=io,yo=lo,vo=uo;function P(e){var t=-1,a=e==null?0:e.length;for(this.clear();++t<a;){var n=e[t];this.set(n[0],n[1])}}P.prototype.clear=mo;P.prototype.delete=go;P.prototype.get=fo;P.prototype.has=yo;P.prototype.set=vo;var de=P,it=de,wo="Expected a function";function ue(e,t){if(typeof e!="function"||t!=null&&typeof t!="function")throw new TypeError(wo);var a=function(){var n=arguments,r=t?t.apply(this,n):n[0],o=a.cache;if(o.has(r))return o.get(r);var i=e.apply(this,n);return a.cache=o.set(r,i)||o,i};return a.cache=new(ue.Cache||it),a}ue.Cache=it;var bo=ue,_o=bo,ko=500;function Io(e){var t=_o(e,function(n){return a.size===ko&&a.clear(),n}),a=t.cache;return t}var Fo=Io,To=Fo,Ao=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,$o=/\\(\\)?/g,So=To(function(e){var t=[];return e.charCodeAt(0)===46&&t.push(""),e.replace(Ao,function(a,n,r,o){t.push(r?o.replace($o,"$1"):n||a)}),t}),Co=So,Ce=U,jo=et,Mo=b,xo=W,Po=1/0,je=Ce?Ce.prototype:void 0,Me=je?je.toString:void 0;function st(e){if(typeof e=="string")return e;if(Mo(e))return jo(e,st)+"";if(xo(e))return Me?Me.call(e):"";var t=e+"";return t=="0"&&1/e==-Po?"-0":t}var Oo=st,Eo=Oo;function Bo(e){return e==null?"":Eo(e)}var zo=Bo,Do=b,Go=le,Lo=Co,qo=zo;function Ho(e,t){return Do(e)?e:Go(e,t)?[e]:Lo(qo(e))}var ht=Ho,Ro=W,Jo=1/0;function No(e){if(typeof e=="string"||Ro(e))return e;var t=e+"";return t=="0"&&1/e==-Jo?"-0":t}var Q=No,Ko=ht,Uo=Q;function Wo(e,t){t=Ko(t,e);for(var a=0,n=t.length;e!=null&&a<n;)e=e[Uo(t[a++])];return a&&a==n?e:void 0}var me=Wo,Zo=V;function Yo(){this.__data__=new Zo,this.size=0}var Vo=Yo;function Xo(e){var t=this.__data__,a=t.delete(e);return this.size=t.size,a}var Qo=Xo;function er(e){return this.__data__.get(e)}var tr=er;function ar(e){return this.__data__.has(e)}var nr=ar,or=V,rr=pe,ir=de,sr=200;function hr(e,t){var a=this.__data__;if(a instanceof or){var n=a.__data__;if(!rr||n.length<sr-1)return n.push([e,t]),this.size=++a.size,this;a=this.__data__=new ir(n)}return a.set(e,t),this.size=a.size,this}var lr=hr,cr=V,pr=Vo,dr=Qo,ur=tr,mr=nr,gr=lr;function O(e){var t=this.__data__=new cr(e);this.size=t.size}O.prototype.clear=pr;O.prototype.delete=dr;O.prototype.get=ur;O.prototype.has=mr;O.prototype.set=gr;var lt=O,fr="__lodash_hash_undefined__";function yr(e){return this.__data__.set(e,fr),this}var vr=yr;function wr(e){return this.__data__.has(e)}var br=wr,_r=de,kr=vr,Ir=br;function J(e){var t=-1,a=e==null?0:e.length;for(this.__data__=new _r;++t<a;)this.add(e[t])}J.prototype.add=J.prototype.push=kr;J.prototype.has=Ir;var Fr=J;function Tr(e,t){for(var a=-1,n=e==null?0:e.length;++a<n;)if(t(e[a],a,e))return!0;return!1}var Ar=Tr;function $r(e,t){return e.has(t)}var Sr=$r,Cr=Fr,jr=Ar,Mr=Sr,xr=1,Pr=2;function Or(e,t,a,n,r,o){var i=a&xr,s=e.length,h=t.length;if(s!=h&&!(i&&h>s))return!1;var l=o.get(e),m=o.get(t);if(l&&m)return l==t&&m==e;var c=-1,u=!0,g=a&Pr?new Cr:void 0;for(o.set(e,t),o.set(t,e);++c<s;){var f=e[c],v=t[c];if(n)var A=i?n(v,f,c,t,e,o):n(f,v,c,e,t,o);if(A!==void 0){if(A)continue;u=!1;break}if(g){if(!jr(t,function($,S){if(!Mr(g,S)&&(f===$||r(f,$,a,n,o)))return g.push(S)})){u=!1;break}}else if(!(f===v||r(f,v,a,n,o))){u=!1;break}}return o.delete(e),o.delete(t),u}var ct=Or,Er=F,Br=Er.Uint8Array,zr=Br;function Dr(e){var t=-1,a=Array(e.size);return e.forEach(function(n,r){a[++t]=[r,n]}),a}var Gr=Dr;function Lr(e){var t=-1,a=Array(e.size);return e.forEach(function(n){a[++t]=n}),a}var qr=Lr,xe=U,Pe=zr,Hr=rt,Rr=ct,Jr=Gr,Nr=qr,Kr=1,Ur=2,Wr="[object Boolean]",Zr="[object Date]",Yr="[object Error]",Vr="[object Map]",Xr="[object Number]",Qr="[object RegExp]",ei="[object Set]",ti="[object String]",ai="[object Symbol]",ni="[object ArrayBuffer]",oi="[object DataView]",Oe=xe?xe.prototype:void 0,te=Oe?Oe.valueOf:void 0;function ri(e,t,a,n,r,o,i){switch(a){case oi:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case ni:return!(e.byteLength!=t.byteLength||!o(new Pe(e),new Pe(t)));case Wr:case Zr:case Xr:return Hr(+e,+t);case Yr:return e.name==t.name&&e.message==t.message;case Qr:case ti:return e==t+"";case Vr:var s=Jr;case ei:var h=n&Kr;if(s||(s=Nr),e.size!=t.size&&!h)return!1;var l=i.get(e);if(l)return l==t;n|=Ur,i.set(e,t);var m=Rr(s(e),s(t),n,r,o,i);return i.delete(e),m;case ai:if(te)return te.call(e)==te.call(t)}return!1}var ii=ri;function si(e,t){for(var a=-1,n=t.length,r=e.length;++a<n;)e[r+a]=t[a];return e}var hi=si,li=hi,ci=b;function pi(e,t,a){var n=t(e);return ci(e)?n:li(n,a(e))}var di=pi;function ui(e,t){for(var a=-1,n=e==null?0:e.length,r=0,o=[];++a<n;){var i=e[a];t(i,a,e)&&(o[r++]=i)}return o}var mi=ui;function gi(){return[]}var fi=gi,yi=mi,vi=fi,wi=Object.prototype,bi=wi.propertyIsEnumerable,Ee=Object.getOwnPropertySymbols,_i=Ee?function(e){return e==null?[]:(e=Object(e),yi(Ee(e),function(t){return bi.call(e,t)}))}:vi,ki=_i;function Ii(e,t){for(var a=-1,n=Array(e);++a<e;)n[a]=t(a);return n}var Fi=Ii,Ti=D,Ai=G,$i="[object Arguments]";function Si(e){return Ai(e)&&Ti(e)==$i}var Ci=Si,Be=Ci,ji=G,pt=Object.prototype,Mi=pt.hasOwnProperty,xi=pt.propertyIsEnumerable,Pi=Be(function(){return arguments}())?Be:function(e){return ji(e)&&Mi.call(e,"callee")&&!xi.call(e,"callee")},dt=Pi,N={exports:{}};function Oi(){return!1}var Ei=Oi;N.exports;(function(e,t){var a=F,n=Ei,r=t&&!t.nodeType&&t,o=r&&!0&&e&&!e.nodeType&&e,i=o&&o.exports===r,s=i?a.Buffer:void 0,h=s?s.isBuffer:void 0,l=h||n;e.exports=l})(N,N.exports);var ut=N.exports,Bi=9007199254740991,zi=/^(?:0|[1-9]\d*)$/;function Di(e,t){var a=typeof e;return t=t??Bi,!!t&&(a=="number"||a!="symbol"&&zi.test(e))&&e>-1&&e%1==0&&e<t}var mt=Di,Gi=9007199254740991;function Li(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=Gi}var ge=Li,qi=D,Hi=ge,Ri=G,Ji="[object Arguments]",Ni="[object Array]",Ki="[object Boolean]",Ui="[object Date]",Wi="[object Error]",Zi="[object Function]",Yi="[object Map]",Vi="[object Number]",Xi="[object Object]",Qi="[object RegExp]",es="[object Set]",ts="[object String]",as="[object WeakMap]",ns="[object ArrayBuffer]",os="[object DataView]",rs="[object Float32Array]",is="[object Float64Array]",ss="[object Int8Array]",hs="[object Int16Array]",ls="[object Int32Array]",cs="[object Uint8Array]",ps="[object Uint8ClampedArray]",ds="[object Uint16Array]",us="[object Uint32Array]",p={};p[rs]=p[is]=p[ss]=p[hs]=p[ls]=p[cs]=p[ps]=p[ds]=p[us]=!0;p[Ji]=p[Ni]=p[ns]=p[Ki]=p[os]=p[Ui]=p[Wi]=p[Zi]=p[Yi]=p[Vi]=p[Xi]=p[Qi]=p[es]=p[ts]=p[as]=!1;function ms(e){return Ri(e)&&Hi(e.length)&&!!p[qi(e)]}var gs=ms;function fs(e){return function(t){return e(t)}}var gt=fs,K={exports:{}};K.exports;(function(e,t){var a=tt,n=t&&!t.nodeType&&t,r=n&&!0&&e&&!e.nodeType&&e,o=r&&r.exports===n,i=o&&a.process,s=function(){try{var h=r&&r.require&&r.require("util").types;return h||i&&i.binding&&i.binding("util")}catch{}}();e.exports=s})(K,K.exports);var ys=K.exports,vs=gs,ws=gt,ze=ys,De=ze&&ze.isTypedArray,bs=De?ws(De):vs,ft=bs,_s=Fi,ks=dt,Is=b,Fs=ut,Ts=mt,As=ft,$s=Object.prototype,Ss=$s.hasOwnProperty;function Cs(e,t){var a=Is(e),n=!a&&ks(e),r=!a&&!n&&Fs(e),o=!a&&!n&&!r&&As(e),i=a||n||r||o,s=i?_s(e.length,String):[],h=s.length;for(var l in e)(t||Ss.call(e,l))&&!(i&&(l=="length"||r&&(l=="offset"||l=="parent")||o&&(l=="buffer"||l=="byteLength"||l=="byteOffset")||Ts(l,h)))&&s.push(l);return s}var js=Cs,Ms=Object.prototype;function xs(e){var t=e&&e.constructor,a=typeof t=="function"&&t.prototype||Ms;return e===a}var Ps=xs;function Os(e,t){return function(a){return e(t(a))}}var Es=Os,Bs=Es,zs=Bs(Object.keys,Object),Ds=zs,Gs=Ps,Ls=Ds,qs=Object.prototype,Hs=qs.hasOwnProperty;function Rs(e){if(!Gs(e))return Ls(e);var t=[];for(var a in Object(e))Hs.call(e,a)&&a!="constructor"&&t.push(a);return t}var Js=Rs,Ns=nt,Ks=ge;function Us(e){return e!=null&&Ks(e.length)&&!Ns(e)}var fe=Us,Ws=js,Zs=Js,Ys=fe;function Vs(e){return Ys(e)?Ws(e):Zs(e)}var ye=Vs,Xs=di,Qs=ki,eh=ye;function th(e){return Xs(e,eh,Qs)}var ah=th,Ge=ah,nh=1,oh=Object.prototype,rh=oh.hasOwnProperty;function ih(e,t,a,n,r,o){var i=a&nh,s=Ge(e),h=s.length,l=Ge(t),m=l.length;if(h!=m&&!i)return!1;for(var c=h;c--;){var u=s[c];if(!(i?u in t:rh.call(t,u)))return!1}var g=o.get(e),f=o.get(t);if(g&&f)return g==t&&f==e;var v=!0;o.set(e,t),o.set(t,e);for(var A=i;++c<h;){u=s[c];var $=e[u],S=t[u];if(n)var ve=i?n(S,$,u,t,e,o):n($,S,u,e,t,o);if(!(ve===void 0?$===S||r($,S,a,n,o):ve)){v=!1;break}A||(A=u=="constructor")}if(v&&!A){var L=e.constructor,q=t.constructor;L!=q&&"constructor"in e&&"constructor"in t&&!(typeof L=="function"&&L instanceof L&&typeof q=="function"&&q instanceof q)&&(v=!1)}return o.delete(e),o.delete(t),v}var sh=ih,hh=j,lh=F,ch=hh(lh,"DataView"),ph=ch,dh=j,uh=F,mh=dh(uh,"Promise"),gh=mh,fh=j,yh=F,vh=fh(yh,"Set"),wh=vh,bh=j,_h=F,kh=bh(_h,"WeakMap"),Ih=kh,oe=ph,re=pe,ie=gh,se=wh,he=Ih,yt=D,E=ot,Le="[object Map]",Fh="[object Object]",qe="[object Promise]",He="[object Set]",Re="[object WeakMap]",Je="[object DataView]",Th=E(oe),Ah=E(re),$h=E(ie),Sh=E(se),Ch=E(he),C=yt;(oe&&C(new oe(new ArrayBuffer(1)))!=Je||re&&C(new re)!=Le||ie&&C(ie.resolve())!=qe||se&&C(new se)!=He||he&&C(new he)!=Re)&&(C=function(e){var t=yt(e),a=t==Fh?e.constructor:void 0,n=a?E(a):"";if(n)switch(n){case Th:return Je;case Ah:return Le;case $h:return qe;case Sh:return He;case Ch:return Re}return t});var jh=C,ae=lt,Mh=ct,xh=ii,Ph=sh,Ne=jh,Ke=b,Ue=ut,Oh=ft,Eh=1,We="[object Arguments]",Ze="[object Array]",R="[object Object]",Bh=Object.prototype,Ye=Bh.hasOwnProperty;function zh(e,t,a,n,r,o){var i=Ke(e),s=Ke(t),h=i?Ze:Ne(e),l=s?Ze:Ne(t);h=h==We?R:h,l=l==We?R:l;var m=h==R,c=l==R,u=h==l;if(u&&Ue(e)){if(!Ue(t))return!1;i=!0,m=!1}if(u&&!m)return o||(o=new ae),i||Oh(e)?Mh(e,t,a,n,r,o):xh(e,t,h,a,n,r,o);if(!(a&Eh)){var g=m&&Ye.call(e,"__wrapped__"),f=c&&Ye.call(t,"__wrapped__");if(g||f){var v=g?e.value():e,A=f?t.value():t;return o||(o=new ae),r(v,A,a,n,o)}}return u?(o||(o=new ae),Ph(e,t,a,n,r,o)):!1}var Dh=zh,Gh=Dh,Ve=G;function vt(e,t,a,n,r){return e===t?!0:e==null||t==null||!Ve(e)&&!Ve(t)?e!==e&&t!==t:Gh(e,t,a,n,vt,r)}var wt=vt,Lh=lt,qh=wt,Hh=1,Rh=2;function Jh(e,t,a,n){var r=a.length,o=r,i=!n;if(e==null)return!o;for(e=Object(e);r--;){var s=a[r];if(i&&s[2]?s[1]!==e[s[0]]:!(s[0]in e))return!1}for(;++r<o;){s=a[r];var h=s[0],l=e[h],m=s[1];if(i&&s[2]){if(l===void 0&&!(h in e))return!1}else{var c=new Lh;if(n)var u=n(l,m,h,e,t,c);if(!(u===void 0?qh(m,l,Hh|Rh,n,c):u))return!1}}return!0}var Nh=Jh,Kh=ce;function Uh(e){return e===e&&!Kh(e)}var bt=Uh,Wh=bt,Zh=ye;function Yh(e){for(var t=Zh(e),a=t.length;a--;){var n=t[a],r=e[n];t[a]=[n,r,Wh(r)]}return t}var Vh=Yh;function Xh(e,t){return function(a){return a==null?!1:a[e]===t&&(t!==void 0||e in Object(a))}}var _t=Xh,Qh=Nh,el=Vh,tl=_t;function al(e){var t=el(e);return t.length==1&&t[0][2]?tl(t[0][0],t[0][1]):function(a){return a===e||Qh(a,e,t)}}var nl=al,ol=me;function rl(e,t,a){var n=e==null?void 0:ol(e,t);return n===void 0?a:n}var il=rl;function sl(e,t){return e!=null&&t in Object(e)}var hl=sl,ll=ht,cl=dt,pl=b,dl=mt,ul=ge,ml=Q;function gl(e,t,a){t=ll(t,e);for(var n=-1,r=t.length,o=!1;++n<r;){var i=ml(t[n]);if(!(o=e!=null&&a(e,i)))break;e=e[i]}return o||++n!=r?o:(r=e==null?0:e.length,!!r&&ul(r)&&dl(i,r)&&(pl(e)||cl(e)))}var fl=gl,yl=hl,vl=fl;function wl(e,t){return e!=null&&vl(e,t,yl)}var bl=wl,_l=wt,kl=il,Il=bl,Fl=le,Tl=bt,Al=_t,$l=Q,Sl=1,Cl=2;function jl(e,t){return Fl(e)&&Tl(t)?Al($l(e),t):function(a){var n=kl(a,e);return n===void 0&&n===t?Il(a,e):_l(t,n,Sl|Cl)}}var Ml=jl;function xl(e){return e}var kt=xl;function Pl(e){return function(t){return t==null?void 0:t[e]}}var Ol=Pl,El=me;function Bl(e){return function(t){return El(t,e)}}var zl=Bl,Dl=Ol,Gl=zl,Ll=le,ql=Q;function Hl(e){return Ll(e)?Dl(ql(e)):Gl(e)}var Rl=Hl,Jl=nl,Nl=Ml,Kl=kt,Ul=b,Wl=Rl;function Zl(e){return typeof e=="function"?e:e==null?Kl:typeof e=="object"?Ul(e)?Nl(e[0],e[1]):Jl(e):Wl(e)}var Yl=Zl;function Vl(e){return function(t,a,n){for(var r=-1,o=Object(t),i=n(t),s=i.length;s--;){var h=i[e?s:++r];if(a(o[h],h,o)===!1)break}return t}}var Xl=Vl,Ql=Xl,ec=Ql(),tc=ec,ac=tc,nc=ye;function oc(e,t){return e&&ac(e,t,nc)}var rc=oc,ic=fe;function sc(e,t){return function(a,n){if(a==null)return a;if(!ic(a))return e(a,n);for(var r=a.length,o=t?r:-1,i=Object(a);(t?o--:++o<r)&&n(i[o],o,i)!==!1;);return a}}var hc=sc,lc=rc,cc=hc,pc=cc(lc),dc=pc,uc=dc,mc=fe;function gc(e,t){var a=-1,n=mc(e)?Array(e.length):[];return uc(e,function(r,o,i){n[++a]=t(r,o,i)}),n}var fc=gc;function yc(e,t){var a=e.length;for(e.sort(t);a--;)e[a]=e[a].value;return e}var vc=yc,Xe=W;function wc(e,t){if(e!==t){var a=e!==void 0,n=e===null,r=e===e,o=Xe(e),i=t!==void 0,s=t===null,h=t===t,l=Xe(t);if(!s&&!l&&!o&&e>t||o&&i&&h&&!s&&!l||n&&i&&h||!a&&h||!r)return 1;if(!n&&!o&&!l&&e<t||l&&a&&r&&!n&&!o||s&&a&&r||!i&&r||!h)return-1}return 0}var bc=wc,_c=bc;function kc(e,t,a){for(var n=-1,r=e.criteria,o=t.criteria,i=r.length,s=a.length;++n<i;){var h=_c(r[n],o[n]);if(h){if(n>=s)return h;var l=a[n];return h*(l=="desc"?-1:1)}}return e.index-t.index}var Ic=kc,ne=et,Fc=me,Tc=Yl,Ac=fc,$c=vc,Sc=gt,Cc=Ic,jc=kt,Mc=b;function xc(e,t,a){t.length?t=ne(t,function(o){return Mc(o)?function(i){return Fc(i,o.length===1?o[0]:o)}:o}):t=[jc];var n=-1;t=ne(t,Sc(Tc));var r=Ac(e,function(o,i,s){var h=ne(t,function(l){return l(o)});return{criteria:h,index:++n,value:o}});return $c(r,function(o,i){return Cc(o,i,a)})}var Pc=xc,Oc=Pc,Qe=b;function Ec(e,t,a,n){return e==null?[]:(Qe(t)||(t=t==null?[]:[t]),a=n?void 0:a,Qe(a)||(a=a==null?[]:[a]),Oc(e,t,a))}var Bc=Ec;const zc=Ot(Bc),Dc=[{type_of:"article",id:2035223,title:"a day in the life of a software engineer",description:'Woah, I finally have the time to write this blog that’s been on my mind recently!   "a day in the...',readable_publish_date:"Oct 12",slug:"a-day-in-the-life-of-a-software-engineer-1lmh",path:"/m3yevn/a-day-in-the-life-of-a-software-engineer-1lmh",url:"https://dev.to/m3yevn/a-day-in-the-life-of-a-software-engineer-1lmh",comments_count:0,public_reactions_count:1,collection_id:null,published_timestamp:"2024-10-12T06:35:01Z",positive_reactions_count:1,cover_image:"https://media.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fhegttjvo34a4cxob8x3f.jpg",social_image:"https://media.dev.to/dynamic/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fhegttjvo34a4cxob8x3f.jpg",canonical_url:"https://dev.to/m3yevn/a-day-in-the-life-of-a-software-engineer-1lmh",created_at:"2024-10-12T05:23:19Z",edited_at:null,crossposted_at:null,published_at:"2024-10-12T06:35:01Z",last_comment_at:"2024-10-12T06:35:01Z",reading_time_minutes:6,tag_list:"softwareengineering, softwaredevelopment, dayinthelifeofsoftwarengineer",tags:["softwareengineering","softwaredevelopment","dayinthelifeofsoftwarengineer"],body_html:`<p>Woah, I finally have the time to write this blog that’s been on my mind recently!</p>

<blockquote>
<p>"a day in the life of a software engineer"</p>
</blockquote>

<p>This phrase has changed the trajectory of my career and set me on the path to my current life. The first time I heard it was in a YouTube video that caught my attention right away. Yup, it was that <a href="https://www.youtube.com/watch?v=rqX8PFcOpxA" target="_blank" rel="noopener noreferrer">4-minute clip</a> from Mayuko’s channel.</p>

<p>I watched that video and thought, </p>

<blockquote>
<p>“Wow, that’s cool! I want to be a software engineer too!”</p>
</blockquote>

<p>Back then, I was working as an IT Support Analyst, clearing the queue of tickets raised by our manufacturing operators and engineers. I worked hard, did my 12-hour shifts, and then chilled at home with "How I Met Your Mother." Life was perfectly fine.</p>

<p><strong>But now that I think about it, the scariest thought to me, even to this day is , that could have been the rest of my life...</strong></p>

<p><a href="https://media.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fraur4kjvwvigtled8lfr.jpg" class="article-body-image-wrapper"><img src="https://media.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fraur4kjvwvigtled8lfr.jpg" alt="I thought I was trying hard" loading="lazy" width="736" height="736"></a></p>

<h2>
  <a name="i-thought-i-was-trying-hard" href="#i-thought-i-was-trying-hard">
  </a>
  I thought I was trying hard
</h2>

<p>So, what happened was that after earning my Bachelor’s Degree in 2018, I had already spent two years in my IT Support role, but I dared myself to start looking for opportunities. With a lot of dedication, humiliation, and embarrassment, I finally landed a software engineer position at a humble systems integration company, even though it meant a pay cut. I was a complete novice, totally new to writing code.</p>

<p>Six years have passed, and along the way, I’ve worked in multiple industries, on various products, and with different teams. Reflecting on what I’ve achieved over the years, one thought popped into my head a few days ago: I still need to write a blog about the rite of passage many fellow developers have shared that motivated me in the first place. So here’s <strong>a day in the life of a software engineer</strong> from my POV.</p>

<h3>
  <a name="disclaimer-the-following-information-is-based-on-my-experiences-at-multiple-companies" href="#disclaimer-the-following-information-is-based-on-my-experiences-at-multiple-companies">
  </a>
  DISCLAIMER: The following information is based on my experiences at multiple companies.
</h3>

<p><a href="https://media.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Ffupkx1y9kafx2vinokqv.jpg" class="article-body-image-wrapper"><img src="https://media.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Ffupkx1y9kafx2vinokqv.jpg" alt="Morning" loading="lazy" width="800" height="167"></a></p>

<h2>
  <a name="the-morning" href="#the-morning">
  </a>
  The Morning
</h2>

<p>I usually wake up around 7am but sometimes I toss and turn in my bed for that extra few minutes. I can still hear the <a href="https://open.spotify.com/playlist/37i9dQZF1DWZd79rJ6a7lp?si=dea6e34f6edf4f3f" target="_blank" rel="noopener noreferrer">Sleep music playlist</a> on my Spotify and with my eyes closed, think about the tasks I need to tackle today. I go through my morning routine—making my bed and switching the music to Buddhist chants to start my day. After a shower and getting dressed, I feed my cat <a href="https://www.instagram.com/jiemao_theblackcattt/" target="_blank" rel="noopener noreferrer">Jie Mao</a> and play with him for awhile.</p>

<p>I'm impatient naturally so I have my own <a href="https://www.tiktok.com/@m3_yevnnn/video/7421502840352312577" target="_blank" rel="noopener noreferrer">boiled eggs or tea eggs</a> that I've prepared over the weekends. I gulp down one or two, pack my laptop bag, and commute to the office.</p>

<p>Since I work hybrid, if it's on work-from-home day, I would straight away open my laptop to start working. The commute isn’t bad; public transport is smooth, and I usually arrive at the office around 9:45-10 AM. I see other coworkers coming in at that time too, so I’m not too late—phew!</p>

<p><a href="https://media.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F11u3w041yioc2967n5rk.jpg" class="article-body-image-wrapper"><img src="https://media.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F11u3w041yioc2967n5rk.jpg" alt="CBD" loading="lazy" width="800" height="532"></a></p>

<h2>
  <a name="the-office" href="#the-office">
  </a>
  The Office
</h2>

<p>My first task of the day is to read emails and check Slack, WhatsApp, Skype, or whatever communication tool the company uses. If there aren’t any major issues, great! Time to open my Kanban board.</p>

<p>Over the years, I’ve worked on agile scrum teams where we usually plan what to do in the next sprint on Mondays, groom the backlogs, clarify requirements, and estimate tickets—typically using Jira boards. It’s easy to track what’s done, what’s blocked, and what’s in progress.</p>

<p><a href="https://media.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F0icq8nye4rgfqc2t9367.jpeg" class="article-body-image-wrapper"><img src="https://media.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F0icq8nye4rgfqc2t9367.jpeg" alt="Kanban" loading="lazy" width="800" height="433"></a></p>

<p>I usually have an item in the "In Progress" column, so I dive into that task. Depending on the item, I put in the effort to solve the problem. If things aren’t clear, I ping the Product Manager or Business Analyst and call for a quick huddle. Time flies when you’re coding, and before I know it, it’s lunchtime around 11:30 AM-12 PM.</p>

<h2>
  <a name="the-lunch" href="#the-lunch">
  </a>
  The Lunch
</h2>

<p>Sometimes, I have lunch with my coworkers, but if most of them are remote, it’s an own-time, own-target lunch break for me. I head to the nearest food court or hawker center, listening to music while I chow down.</p>

<p>After a 30-minute lunch break, whether alone or with coworkers, I take some time to wind down, play, or just chill. Offices usually have a foosball or pool table for us to enjoy.</p>

<p><a href="https://media.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fbzwnmn2s4dnf2opeia5z.jpg" class="article-body-image-wrapper"><img src="https://media.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fbzwnmn2s4dnf2opeia5z.jpg" alt="Old photo of my co-workers and me playing pool" loading="lazy" width="720" height="529"></a></p>

<h2>
  <a name="the-standup" href="#the-standup">
  </a>
  The Standup
</h2>

<p>In scrum, we have a daily quick meeting called "Stand Up," where everyone shares what they did yesterday, what they’re doing today, and updates on their tickets. During this time, we also clarify details like the schema of a JSON response, styling, and technical discussions about upcoming features. Stand-ups can be quick or might extend into longer calls.</p>

<p>The term "Stand Up" comes from the fact that everyone stands during the meeting to keep it short and avoid tired legs. However, after the pandemic, stand-ups transitioned to Google Meet or Zoom, leading to some folks oversharing and prolonging meetings. A person from the team, called the "Scrum Master," leads the stand-up—this could be the lead engineer, product manager, or business analyst.</p>

<p><a href="https://media.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F5hpzga4jr8r539j7zaih.jpg" class="article-body-image-wrapper"><img src="https://media.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F5hpzga4jr8r539j7zaih.jpg" alt="Typical scrum flow" loading="lazy" width="800" height="383"></a></p>

<h2>
  <a name="finally-the-coding" href="#finally-the-coding">
  </a>
  Finally, the coding
</h2>

<p>After the stand-up, it’s time to write some code. I brainstorm and aim to finish my tasks by the end of the day. I push my code to Git, and that feeling of accomplishment is fulfilling. I review my work before assigning reviewers and also provide feedback on others' work so we can all align and improve. Once tickets are reviewed and approved, branches are merged to dev or staging, depending on urgency. Some quick bug fixes get merged straight to production to resolve issues promptly, with those fixes then synced to lower environments.</p>

<p>If a feature is complete, the Quality Assurance (QA) engineer usually tests it. If the QA role is missing, I inform the product manager or business analyst about the changes, and they confirm the features. Features get launched if everything runs smoothly and no major bugs are found during testing.</p>

<h2>
  <a name="bye-office" href="#bye-office">
  </a>
  Bye Office!
</h2>

<p>At the end of the day, I clock out and commute home. Sometimes, I walk around to stretch my legs or grab dinner on the way so I won’t need to cook when I get back.</p>

<p><a href="https://media.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fh4rqj8u2pv2duf71jbyp.jpg" class="article-body-image-wrapper"><img src="https://media.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fh4rqj8u2pv2duf71jbyp.jpg" alt="After office hour" loading="lazy" width="800" height="460"></a></p>

<p>6 PM to 7/7:30 PM flies by due to the commute and dinner. At home, I usually unwind by watching some series or movies. On some nights, I work on side projects, adding features and making updates. I would also paint or sing depending on my mood. Some of my paintings are <a href="https://kevinmoemyintmyat.github.io/art" target="_blank" rel="noopener noreferrer">here</a> and my karaoke covers are <a href="https://kevinmoemyintmyat.github.io/music" target="_blank" rel="noopener noreferrer">here</a>.</p>

<p>On days when I don’t feel sore or tired, I hit the nearby gym or go jogging or cycling around the neighborhood. Otherwise, I play with my cat and check his litter box—--- (talk about being a full-time cat dad!)</p>

<h2>
  <a name="this-is-the-end-hold-your-breath-and-count-to-ten" href="#this-is-the-end-hold-your-breath-and-count-to-ten">
  </a>
  this is the end hold your breath and count to ten
</h2>

<p>After 10:30-11 PM, I wind down, take a bath, brush my teeth—just my nighttime hygiene routine—while listening to some lo-fi beats. By 11:30 PM or sometimes midnight, I start to feel sleepy and play my sleep music playlist again. The air conditioning is cold, the bed looks cozy, and I tuck myself under the blanket, closing my eyes, ready to do it all over again the next day.</p>

<p><a href="https://media.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fyb1qvrcaa9iwcv7yris5.jpg" class="article-body-image-wrapper"><img src="https://media.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fyb1qvrcaa9iwcv7yris5.jpg" alt="Aesthetic bed" loading="lazy" width="800" height="600"></a></p>

<h2>
  <a name="alright-thats-it" href="#alright-thats-it">
  </a>
  Alright, that's it.
</h2>

<p>This is my take on <strong>a day in the life of a software engineer</strong>. In the end, being a software engineer isn’t just about writing code; it’s about keeping things consistent, managing time, balancing work-life, and taking pride in knowing that every line of code and every enhancement in our software products has the potential to make a difference in people’s lives.</p>

<p>So, as I close my eyes for the night, I look forward to tomorrow’s adventures. There will always be new challenges to tackle and ideas to explore. I hope my blog sparks some motivation for the next generation of developers too. And I just want to say one thing to the fellow developer who shaped my career with that simple 4-minute clip:</p>

<h2>
  <a name="yo-mayuko-i-did-it" href="#yo-mayuko-i-did-it">
  </a>
  Yo Mayuko!!! I DID IT!!!!
</h2>

<p><a href="https://media.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Flnrjqh8gn1qkrq8cg6oq.jpg" class="article-body-image-wrapper"><img src="https://media.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Flnrjqh8gn1qkrq8cg6oq.jpg" alt="I DID IT" loading="lazy" width="445" height="223"></a></p>

`,body_markdown:`Woah, I finally have the time to write this blog that’s been on my mind recently!


> "a day in the life of a software engineer"


This phrase has changed the trajectory of my career and set me on the path to my current life. The first time I heard it was in a YouTube video that caught my attention right away. Yup, it was that [4-minute clip](https://www.youtube.com/watch?v=rqX8PFcOpxA) from Mayuko’s channel.

I watched that video and thought, 

> “Wow, that’s cool! I want to be a software engineer too!”

 Back then, I was working as an IT Support Analyst, clearing the queue of tickets raised by our manufacturing operators and engineers. I worked hard, did my 12-hour shifts, and then chilled at home with "How I Met Your Mother." Life was perfectly fine.

**But now that I think about it, the scariest thought to me, even to this day is , that could have been the rest of my life...**


![I thought I was trying hard](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/raur4kjvwvigtled8lfr.jpg)

## I thought I was trying hard

So, what happened was that after earning my Bachelor’s Degree in 2018, I had already spent two years in my IT Support role, but I dared myself to start looking for opportunities. With a lot of dedication, humiliation, and embarrassment, I finally landed a software engineer position at a humble systems integration company, even though it meant a pay cut. I was a complete novice, totally new to writing code.

Six years have passed, and along the way, I’ve worked in multiple industries, on various products, and with different teams. Reflecting on what I’ve achieved over the years, one thought popped into my head a few days ago: I still need to write a blog about the rite of passage many fellow developers have shared that motivated me in the first place. So here’s **a day in the life of a software engineer** from my POV.

### DISCLAIMER: The following information is based on my experiences at multiple companies.


![Morning](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/fupkx1y9kafx2vinokqv.jpg)

## The Morning

I usually wake up around 7am but sometimes I toss and turn in my bed for that extra few minutes. I can still hear the [Sleep music playlist](https://open.spotify.com/playlist/37i9dQZF1DWZd79rJ6a7lp?si=dea6e34f6edf4f3f) on my Spotify and with my eyes closed, think about the tasks I need to tackle today. I go through my morning routine—making my bed and switching the music to Buddhist chants to start my day. After a shower and getting dressed, I feed my cat [Jie Mao](https://www.instagram.com/jiemao_theblackcattt/) and play with him for awhile.

I'm impatient naturally so I have my own [boiled eggs or tea eggs](https://www.tiktok.com/@m3_yevnnn/video/7421502840352312577) that I've prepared over the weekends. I gulp down one or two, pack my laptop bag, and commute to the office.

Since I work hybrid, if it's on work-from-home day, I would straight away open my laptop to start working. The commute isn’t bad; public transport is smooth, and I usually arrive at the office around 9:45-10 AM. I see other coworkers coming in at that time too, so I’m not too late—phew!


![CBD](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/11u3w041yioc2967n5rk.jpg)

## The Office

My first task of the day is to read emails and check Slack, WhatsApp, Skype, or whatever communication tool the company uses. If there aren’t any major issues, great! Time to open my Kanban board.

Over the years, I’ve worked on agile scrum teams where we usually plan what to do in the next sprint on Mondays, groom the backlogs, clarify requirements, and estimate tickets—typically using Jira boards. It’s easy to track what’s done, what’s blocked, and what’s in progress.

![Kanban](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/0icq8nye4rgfqc2t9367.jpeg)

I usually have an item in the "In Progress" column, so I dive into that task. Depending on the item, I put in the effort to solve the problem. If things aren’t clear, I ping the Product Manager or Business Analyst and call for a quick huddle. Time flies when you’re coding, and before I know it, it’s lunchtime around 11:30 AM-12 PM.

## The Lunch

Sometimes, I have lunch with my coworkers, but if most of them are remote, it’s an own-time, own-target lunch break for me. I head to the nearest food court or hawker center, listening to music while I chow down.

After a 30-minute lunch break, whether alone or with coworkers, I take some time to wind down, play, or just chill. Offices usually have a foosball or pool table for us to enjoy.


![Old photo of my co-workers and me playing pool](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/bzwnmn2s4dnf2opeia5z.jpg)

## The Standup

In scrum, we have a daily quick meeting called "Stand Up," where everyone shares what they did yesterday, what they’re doing today, and updates on their tickets. During this time, we also clarify details like the schema of a JSON response, styling, and technical discussions about upcoming features. Stand-ups can be quick or might extend into longer calls.

The term "Stand Up" comes from the fact that everyone stands during the meeting to keep it short and avoid tired legs. However, after the pandemic, stand-ups transitioned to Google Meet or Zoom, leading to some folks oversharing and prolonging meetings. A person from the team, called the "Scrum Master," leads the stand-up—this could be the lead engineer, product manager, or business analyst.

![Typical scrum flow](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/5hpzga4jr8r539j7zaih.jpg)

## Finally, the coding

After the stand-up, it’s time to write some code. I brainstorm and aim to finish my tasks by the end of the day. I push my code to Git, and that feeling of accomplishment is fulfilling. I review my work before assigning reviewers and also provide feedback on others' work so we can all align and improve. Once tickets are reviewed and approved, branches are merged to dev or staging, depending on urgency. Some quick bug fixes get merged straight to production to resolve issues promptly, with those fixes then synced to lower environments.

If a feature is complete, the Quality Assurance (QA) engineer usually tests it. If the QA role is missing, I inform the product manager or business analyst about the changes, and they confirm the features. Features get launched if everything runs smoothly and no major bugs are found during testing.

## Bye Office!

At the end of the day, I clock out and commute home. Sometimes, I walk around to stretch my legs or grab dinner on the way so I won’t need to cook when I get back.

![After office hour](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/h4rqj8u2pv2duf71jbyp.jpg)

6 PM to 7/7:30 PM flies by due to the commute and dinner. At home, I usually unwind by watching some series or movies. On some nights, I work on side projects, adding features and making updates. I would also paint or sing depending on my mood. Some of my paintings are [here](https://kevinmoemyintmyat.github.io/art) and my karaoke covers are [here](https://kevinmoemyintmyat.github.io/music).

On days when I don’t feel sore or tired, I hit the nearby gym or go jogging or cycling around the neighborhood. Otherwise, I play with my cat and check his litter box—--- (talk about being a full-time cat dad!)

## this is the end hold your breath and count to ten

After 10:30-11 PM, I wind down, take a bath, brush my teeth—just my nighttime hygiene routine—while listening to some lo-fi beats. By 11:30 PM or sometimes midnight, I start to feel sleepy and play my sleep music playlist again. The air conditioning is cold, the bed looks cozy, and I tuck myself under the blanket, closing my eyes, ready to do it all over again the next day.


![Aesthetic bed](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/yb1qvrcaa9iwcv7yris5.jpg)

## Alright, that's it.

This is my take on **a day in the life of a software engineer**. In the end, being a software engineer isn’t just about writing code; it’s about keeping things consistent, managing time, balancing work-life, and taking pride in knowing that every line of code and every enhancement in our software products has the potential to make a difference in people’s lives.

So, as I close my eyes for the night, I look forward to tomorrow’s adventures. There will always be new challenges to tackle and ideas to explore. I hope my blog sparks some motivation for the next generation of developers too. And I just want to say one thing to the fellow developer who shaped my career with that simple 4-minute clip:

## Yo Mayuko!!! I DID IT!!!!

![I DID IT](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/lnrjqh8gn1qkrq8cg6oq.jpg)
 

`,user:{name:"Kevin Moe Myint Myat 👨‍💻",username:"m3yevn",twitter_username:null,github_username:"m3yevn",user_id:217073,website_url:"https://kevinmoemyintmyat.github.io",profile_image:"https://media.dev.to/dynamic/image/width=640,height=640,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F217073%2F0f0c2cec-62f0-4ec6-b164-23e0a893e311.jpg",profile_image_90:"https://media.dev.to/dynamic/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F217073%2F0f0c2cec-62f0-4ec6-b164-23e0a893e311.jpg"}},{type_of:"article",id:774965,title:"PortokaLive - An opensource experimental platform for broadcasting live stream",description:"🎉🎉🎉 After years of procrastinating on working on this project, I'm finally proud to launch this...",readable_publish_date:"Jul 29 '21",slug:"portokalive-an-opensource-experimental-platform-for-broadcasting-live-stream-4b8j",path:"/m3yevn/portokalive-an-opensource-experimental-platform-for-broadcasting-live-stream-4b8j",url:"https://dev.to/m3yevn/portokalive-an-opensource-experimental-platform-for-broadcasting-live-stream-4b8j",comments_count:0,public_reactions_count:1,collection_id:null,published_timestamp:"2021-07-29T06:04:22Z",positive_reactions_count:1,cover_image:null,social_image:"https://media.dev.to/dynamic/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F7mmocpymsmn2udq3mv3c.png",canonical_url:"https://dev.to/m3yevn/portokalive-an-opensource-experimental-platform-for-broadcasting-live-stream-4b8j",created_at:"2021-07-29T06:04:22Z",edited_at:null,crossposted_at:null,published_at:"2021-07-29T06:04:22Z",last_comment_at:"2021-07-29T06:04:22Z",reading_time_minutes:3,tag_list:"portokalive, portoka, live, react",tags:["portokalive","portoka","live","react"],body_html:`<p>🎉🎉🎉 After years of procrastinating on working on this project, I'm finally proud to launch this platform PortokaLive to public. Hooray! Here's the link</p>

<ul>
<li>Web ( <a href="https://portokalive.vercel.app/" target="_blank" rel="noopener noreferrer">https://portokalive.vercel.app/</a> )</li>
<li>Mobile ( <a href="https://play.google.com/store/apps/details?id=com.portokalive" target="_blank" rel="noopener noreferrer">https://play.google.com/store/apps/details?id=com.portokalive</a>)</li>
</ul>

<h1>
  <a name="how-it-started-the-origin" href="#how-it-started-the-origin">
  </a>
  🌞 How it started (The origin)
</h1>

<p>PortokaLive was started off as a coding challenge by one of the company that I was interviewing back in 2019. The company requested me to showcase my coding ability and asked to create a proof-of-concept POC application which can do a live-streaming between Mobile Application and Web.</p>

<p>Since I'm proficient in Javascript, I've done my research and found that <a href="https://www.npmjs.com/package/node-media-server" target="_blank" rel="noopener noreferrer">https://www.npmjs.com/package/node-media-server</a> (Node Media Server) is a viable option for me to use to implement this kind of feature.</p>

<p>I've checked out their code, forked and changed some styling/navigation to the react-native application which will do the recording and broadcasting as well as the node-media-server using rtmp protocol.</p>

<p>There are lots of tutorials online on how to play the live stream in React web using videojs. Luckily, node-media-server provide option to play the video in flv format which directly suits our needs.</p>

<p>Eventually, after 2 or 3 days of self hackathon, the suite of Mobile Client, Web Client, Media Server and Auth API server written in node.js are completed and demonstrated to them. Anyway, I ended up not accepting their offer and this POC project was left behind as a byproduct hanging in my repository.</p>

<h1>
  <a name="rebranding-to-another-name" href="#rebranding-to-another-name">
  </a>
  💙 Rebranding to another name
</h1>

<p>When it was created it was given the company's name and logo, which is in Orange and white color theme. Considering to rebrand this project, I've decided to just stick to the original theme and also give the name as "OrangeLive" which I thought was pretty good. However, after searching on the Google, it seems that the name was taken by another company leading me to change it into something else. I tried to use Google Translate to search other names of Orange in other languages.</p>

<p>Finally, I found out Orange in Greek language is called <code>Portokali</code>.<br>
<a href="https://translate.google.com/?sl=el&amp;tl=en&amp;text=%CF%80%CE%BF%CF%81%CF%84%CE%BF%CE%BA%CE%AC%CE%BB%CE%B9&amp;op=translate&amp;hl=en" target="_blank" rel="noopener noreferrer">https://translate.google.com/?sl=el&amp;tl=en&amp;text=%CF%80%CE%BF%CF%81%CF%84%CE%BF%CE%BA%CE%AC%CE%BB%CE%B9&amp;op=translate&amp;hl=en</a></p>

<p>And fortunately, I can omit the "L" and "I" of the <code>Live</code> word if I merged them together. So, there it goes. "PortokaLive"</p>

<h1>
  <a name="tech-stack" href="#tech-stack">
  </a>
  📚 Tech Stack
</h1>

<p>The tech stack was initially a rush because I just want to quickly completed in a few days so I just went for my comfort stack which is </p>

<ol>
<li>React for Web UI</li>
<li>Bootstrap for Web theme</li>
<li>Node.JS (Typescript) for API</li>
<li>ReactNative for Mobile</li>
<li>Ui Kitten for Mobile theme</li>
</ol>

<p>There was a change in media server because media server with rtmp support cannot be deployed on any free backend hosting. (Or maybe at least I don't know, Give a comment below if you know how to 😉)<br>
Therefore, I changed it to using api.video(<a href="https://api.video" target="_blank" rel="noopener noreferrer">https://api.video</a>)  freemium which is great except the part they put watermark if you want to use it without paying premium charges.</p>

<p>api.video came with a cool REST api and iframe web player which makes my life easier so that I do not need to develop all the wrappers around it.</p>

<h1>
  <a name="illustration-design" href="#illustration-design">
  </a>
  💅 Illustration Design
</h1>

<p>To put some aesthetic design in my app, I've used Undraw's free illustrations which are not only attractive but also accurately designed to the context.</p>

<p>Please checkout <a href="https://undraw.co/" target="_blank" rel="noopener noreferrer">https://undraw.co/</a>  (❤️ Super cool illustration pack!)</p>

<h1>
  <a name="conclusion" href="#conclusion">
  </a>
  Conclusion
</h1>

<p>Disclaimer of this application is that it is not meant for production or public use but anyone who are interested in these tech stack can checkout and learn from it for educational purpose.</p>

<p>Stay safe and Thanks for the read! 🙇‍♂️🙇‍♂️</p>

<p>Author: Kevin Moe Myint Myat<br>
<a href="https://kevinmoemyintmyat.gitlab.io" target="_blank" rel="noopener noreferrer">https://kevinmoemyintmyat.gitlab.io</a></p>

`,body_markdown:`🎉🎉🎉 After years of procrastinating on working on this project, I'm finally proud to launch this platform PortokaLive to public. Hooray! Here's the link
 - Web ( https://portokalive.vercel.app/ )
 - Mobile ( https://play.google.com/store/apps/details?id=com.portokalive)

# 🌞 How it started (The origin)

PortokaLive was started off as a coding challenge by one of the company that I was interviewing back in 2019. The company requested me to showcase my coding ability and asked to create a proof-of-concept POC application which can do a live-streaming between Mobile Application and Web.

Since I'm proficient in Javascript, I've done my research and found that https://www.npmjs.com/package/node-media-server (Node Media Server) is a viable option for me to use to implement this kind of feature.

I've checked out their code, forked and changed some styling/navigation to the react-native application which will do the recording and broadcasting as well as the node-media-server using rtmp protocol.

There are lots of tutorials online on how to play the live stream in React web using videojs. Luckily, node-media-server provide option to play the video in flv format which directly suits our needs.

Eventually, after 2 or 3 days of self hackathon, the suite of Mobile Client, Web Client, Media Server and Auth API server written in node.js are completed and demonstrated to them. Anyway, I ended up not accepting their offer and this POC project was left behind as a byproduct hanging in my repository.

# 💙 Rebranding to another name

When it was created it was given the company's name and logo, which is in Orange and white color theme. Considering to rebrand this project, I've decided to just stick to the original theme and also give the name as "OrangeLive" which I thought was pretty good. However, after searching on the Google, it seems that the name was taken by another company leading me to change it into something else. I tried to use Google Translate to search other names of Orange in other languages.

Finally, I found out Orange in Greek language is called \`Portokali\`.
https://translate.google.com/?sl=el&tl=en&text=%CF%80%CE%BF%CF%81%CF%84%CE%BF%CE%BA%CE%AC%CE%BB%CE%B9&op=translate&hl=en

And fortunately, I can omit the "L" and "I" of the \`Live\` word if I merged them together. So, there it goes. "PortokaLive"

# 📚 Tech Stack

The tech stack was initially a rush because I just want to quickly completed in a few days so I just went for my comfort stack which is 

1. React for Web UI
2. Bootstrap for Web theme
3. Node.JS (Typescript) for API
4. ReactNative for Mobile
5. Ui Kitten for Mobile theme

There was a change in media server because media server with rtmp support cannot be deployed on any free backend hosting. (Or maybe at least I don't know, Give a comment below if you know how to 😉)
Therefore, I changed it to using api.video(https://api.video)  freemium which is great except the part they put watermark if you want to use it without paying premium charges.

api.video came with a cool REST api and iframe web player which makes my life easier so that I do not need to develop all the wrappers around it.

# 💅 Illustration Design

To put some aesthetic design in my app, I've used Undraw's free illustrations which are not only attractive but also accurately designed to the context.

Please checkout https://undraw.co/  (❤️ Super cool illustration pack!)

# Conclusion

Disclaimer of this application is that it is not meant for production or public use but anyone who are interested in these tech stack can checkout and learn from it for educational purpose.

Stay safe and Thanks for the read! 🙇‍♂️🙇‍♂️

Author: Kevin Moe Myint Myat
https://kevinmoemyintmyat.gitlab.io


`,user:{name:"Kevin Moe Myint Myat 👨‍💻",username:"m3yevn",twitter_username:null,github_username:"m3yevn",user_id:217073,website_url:"https://kevinmoemyintmyat.github.io",profile_image:"https://media.dev.to/dynamic/image/width=640,height=640,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F217073%2F0f0c2cec-62f0-4ec6-b164-23e0a893e311.jpg",profile_image_90:"https://media.dev.to/dynamic/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F217073%2F0f0c2cec-62f0-4ec6-b164-23e0a893e311.jpg"}},{type_of:"article",id:755467,title:"React Xper - A developer's guide to experiment React 👨‍🔬",description:"React Xper is a experimental website to test out the many concepts of ReactJS and its related...",readable_publish_date:"Jul 10 '21",slug:"react-xper-a-developer-s-guide-to-experiment-react-15i5",path:"/m3yevn/react-xper-a-developer-s-guide-to-experiment-react-15i5",url:"https://dev.to/m3yevn/react-xper-a-developer-s-guide-to-experiment-react-15i5",comments_count:0,public_reactions_count:0,collection_id:null,published_timestamp:"2021-07-10T10:13:28Z",positive_reactions_count:0,cover_image:"https://media.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F0yvn9awow1fbhteif6tq.PNG",social_image:"https://media.dev.to/dynamic/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F0yvn9awow1fbhteif6tq.PNG",canonical_url:"https://dev.to/m3yevn/react-xper-a-developer-s-guide-to-experiment-react-15i5",created_at:"2021-07-10T10:13:28Z",edited_at:null,crossposted_at:null,published_at:"2021-07-10T10:13:28Z",last_comment_at:"2021-07-10T10:13:28Z",reading_time_minutes:1,tag_list:"react, reactxper, experiments, javascript",tags:["react","reactxper","experiments","javascript"],body_html:`<p>React Xper is a experimental website to test out the<br>
many concepts of ReactJS and its related libraries.<br>
The beautiful UI is bootstrapped with Grommet v2 with a little bit of styled-components custom styling. Dark mode is available too 🧛‍♂️ .</p>

<blockquote>
<h4>
  <a name="the-main-purpose-of-this-website-is-to-experiment-almost-any-technologies-with-reactjs" href="#the-main-purpose-of-this-website-is-to-experiment-almost-any-technologies-with-reactjs">
  </a>
  The main purpose of this website is to experiment almost any technologies with ReactJS. 👨‍💻
</h4>
</blockquote>

<p>So far, it is currently focused mainly on the new React hooks such as useEffect, useReducer, useMemo and internationalization library such as react-intl. ㊗️</p>

<p>Whenever I have an idea or two and want to try it out as a proof-of-concept, I will use this boilerplate to add-on.<br>
Moreover, it has a brief technical explanation in every post so other people can also visit the pages and have an understanding. 👍🏻</p>

<p>Although there's only like 4 lab experiments , I expect it to grow in the future.</p>

<blockquote>
<h4>
  <a name="all-the-science-about-reactjs-will-be-happening-there-for-sure" href="#all-the-science-about-reactjs-will-be-happening-there-for-sure">
  </a>
  All the science about ReactJS will be happening there for sure.
</h4>
</blockquote>

<p>Please visit <a href="https://react-xper.vercel.app/" target="_blank" rel="noopener noreferrer">https://react-xper.vercel.app/</a> to check it out.<br>
Or if you would like to contribute or make experiments on your own, create a branch and pull request at <a href="https://github.com/m3yevn/react-xper" target="_blank" rel="noopener noreferrer">https://github.com/m3yevn/react-xper</a></p>

<p>Thanks for reading &amp; Stay safe! 😷</p>

`,body_markdown:`React Xper is a experimental website to test out the
many concepts of ReactJS and its related libraries.
The beautiful UI is bootstrapped with Grommet v2 with a little bit of styled-components custom styling. Dark mode is available too 🧛‍♂️ .

> #### The main purpose of this website is to experiment almost any technologies with ReactJS. 👨‍💻

So far, it is currently focused mainly on the new React hooks such as useEffect, useReducer, useMemo and internationalization library such as react-intl. ㊗️

Whenever I have an idea or two and want to try it out as a proof-of-concept, I will use this boilerplate to add-on.
Moreover, it has a brief technical explanation in every post so other people can also visit the pages and have an understanding. 👍🏻

Although there's only like 4 lab experiments , I expect it to grow in the future.

> #### All the science about ReactJS will be happening there for sure.

Please visit https://react-xper.vercel.app/ to check it out.
Or if you would like to contribute or make experiments on your own, create a branch and pull request at https://github.com/m3yevn/react-xper

Thanks for reading & Stay safe! 😷`,user:{name:"Kevin Moe Myint Myat 👨‍💻",username:"m3yevn",twitter_username:null,github_username:"m3yevn",user_id:217073,website_url:"https://kevinmoemyintmyat.github.io",profile_image:"https://media.dev.to/dynamic/image/width=640,height=640,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F217073%2F0f0c2cec-62f0-4ec6-b164-23e0a893e311.jpg",profile_image_90:"https://media.dev.to/dynamic/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F217073%2F0f0c2cec-62f0-4ec6-b164-23e0a893e311.jpg"}},{type_of:"article",id:550942,title:"👾 Krescent - My experience on participating Github Game Off 2020 Game Jam on Itch.io 👾",description:"😅 Last month I participated in a game jam on https://itch.io with a browser game that I've...",readable_publish_date:"Dec 23 '20",slug:"my-experience-on-participating-github-game-off-2020-game-jam-on-itch-io-4dff",path:"/m3yevn/my-experience-on-participating-github-game-off-2020-game-jam-on-itch-io-4dff",url:"https://dev.to/m3yevn/my-experience-on-participating-github-game-off-2020-game-jam-on-itch-io-4dff",comments_count:0,public_reactions_count:3,collection_id:null,published_timestamp:"2020-12-23T15:06:25Z",positive_reactions_count:3,cover_image:"https://media.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fi%2Fnisypnnl5ktwlvbdx1pp.png",social_image:"https://media.dev.to/dynamic/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fi%2Fnisypnnl5ktwlvbdx1pp.png",canonical_url:"https://dev.to/m3yevn/my-experience-on-participating-github-game-off-2020-game-jam-on-itch-io-4dff",created_at:"2020-12-23T15:06:25Z",edited_at:"2021-07-10T10:11:19Z",crossposted_at:null,published_at:"2020-12-23T15:06:25Z",last_comment_at:"2020-12-23T15:06:25Z",reading_time_minutes:3,tag_list:"gamedev, vue, babylonjs",tags:["gamedev","vue","babylonjs"],body_html:`<p>😅 Last month I participated in a game jam on <a href="https://itch.io" target="_blank" rel="noopener noreferrer">https://itch.io</a> with a browser game that I've co-developed with my colleague from work. It's called...</p>

<h1>
  <a name="krescent-moonshot-themed-game-" href="#krescent-moonshot-themed-game-">
  </a>
  Krescent ( 🚀 Moonshot Themed Game 🌙 )
</h1>

<p>The submission can be viewed here ... </p>

<p><a href="https://m3yevn.itch.io/krescent" target="_blank" rel="noopener noreferrer">https://m3yevn.itch.io/krescent</a></p>

<p>The actual link to the game is at ...</p>

<p><a href="https://krescent.vercel.app/" target="_blank" rel="noopener noreferrer">https://krescent.vercel.app/</a></p>

<h1>
  <a name="the-idea" href="#the-idea">
  </a>
  <strong>THE IDEA</strong> 💡
</h1>

<p>The theme is called <code>Moonshot</code>, so I was pretty sure I'm going to build a planetary theme. After that, as I came from web development background, I started research Javascript games and encountered this game tutorial called The Aviator which is created with ThreeJS.</p>

<p>Ref: <a href="https://tympanus.net/codrops/2016/04/26/the-aviator-animating-basic-3d-scene-threejs/" target="_blank" rel="noopener noreferrer">https://tympanus.net/codrops/2016/04/26/the-aviator-animating-basic-3d-scene-threejs/</a></p>

<p>This game has the basic idea of what I wanted to do which is an endless running game on the moon avoiding rocks and eating points. Very basic and easy for beginner game developer!</p>

<h1>
  <a name="the-tech-stack" href="#the-tech-stack">
  </a>
  <strong>THE TECH STACK</strong> 📚
</h1>

<ol>
<li>Programming - Javascript</li>
<li>Framework - Nuxt VueJS</li>
<li>3D WebGL Engine - BabylonJS</li>
<li>Hosting - Vercel</li>
<li>OS wrappers - ElectronJS</li>
</ol>

<p>Javascript as a core programming language is guaranteed since that's the one that I'm comfortable with and luckily my colleague who is a python developer agree to explore it. </p>

<p>For the framework, VueJS Nuxt is a choice because I'm used to work with React in professional life and that's why I took it up a notch and tried something different. However, I've got a few Vue experience on personal projects and hobby projects. Nuxt was chosen just for the quick scaffolding and famous DX (Developer Experience)</p>

<p>For 3D WebGL engine, I would like to try ThreeJS because it's well known across JS world and I'm interested to test it out. But then again, my colleague would like to explore BabylonJS and I also agree to it since BabylonJS has a good documentation as well as a good reputation comparable with ThreeJS.</p>

<h1>
  <a name="the-implementation" href="#the-implementation">
  </a>
  <strong>THE IMPLEMENTATION</strong> ⚒️
</h1>

<p>We have to used up our hard-earned weekends developing the game and researching. At first, coming up with a boilerplate was easy because of Nuxt 's excellent toolings. Vuex is also used to manage the state across different components. The difficulty came when we started touching on Canvas. </p>

<p>As for convenience I used Vue-Babylonjs wrapper initially which has a learning curve abit deeper that we expected. And the documentation doesn't seem to help us also. The wrapper library has done a great job in starting the scene and mesh objects but when it comes to real dirty job, it lacks the freedom to program. </p>

<p>That leads us to implement our actual game logic like collision, moving, rotation etc to use the vanilla babylonJS object approach since it has the playground and big community with lots of examples to play with. Surprisingly, when we were doing the development, BabylonJS just released the new documentation as well which is super helpful for us.</p>

<p>After 3 weeks of grinding our weekends and some weekday nights, the basic functions of game has done. I took it as a win. The last week, we just used it for improvements and garnishing with better game experience.</p>

<h1>
  <a name="the-lesson" href="#the-lesson">
  </a>
  <strong>THE LESSON</strong> 🎄
</h1>

<p>Although we didn't win, that was not our intension in the first place. Our intension was to try out game development in action and yes, we felt it. Game development, as fun as it is when the players are playing, the sweat and tears that the developers have to put in to details to create a good game is just admirable. I got a lot of fun working on that and it helps me to grow in my day-to-day developer career also. Hope you guys like my sharing!</p>

<p>How about you guys also? <br>
Have some game development experience? <br>
❓❓❓❓<br>
Please share in the comments below. 👇</p>

<p>The Github repo for the project <br>
<a href="https://github.com/m3yevn/krescent" target="_blank" rel="noopener noreferrer">https://github.com/m3yevn/krescent</a></p>

`,body_markdown:`😅 Last month I participated in a game jam on https://itch.io with a browser game that I've co-developed with my colleague from work. It's called...

# Krescent ( 🚀 Moonshot Themed Game 🌙 ) 

The submission can be viewed here ... 

https://m3yevn.itch.io/krescent

The actual link to the game is at ...

https://krescent.vercel.app/

# **THE IDEA** 💡

The theme is called \`Moonshot\`, so I was pretty sure I'm going to build a planetary theme. After that, as I came from web development background, I started research Javascript games and encountered this game tutorial called The Aviator which is created with ThreeJS.

Ref: https://tympanus.net/codrops/2016/04/26/the-aviator-animating-basic-3d-scene-threejs/

This game has the basic idea of what I wanted to do which is an endless running game on the moon avoiding rocks and eating points. Very basic and easy for beginner game developer!

# **THE TECH STACK** 📚

1. Programming - Javascript
2. Framework - Nuxt VueJS
3. 3D WebGL Engine - BabylonJS
4. Hosting - Vercel
4. OS wrappers - ElectronJS

Javascript as a core programming language is guaranteed since that's the one that I'm comfortable with and luckily my colleague who is a python developer agree to explore it. 

For the framework, VueJS Nuxt is a choice because I'm used to work with React in professional life and that's why I took it up a notch and tried something different. However, I've got a few Vue experience on personal projects and hobby projects. Nuxt was chosen just for the quick scaffolding and famous DX (Developer Experience)

For 3D WebGL engine, I would like to try ThreeJS because it's well known across JS world and I'm interested to test it out. But then again, my colleague would like to explore BabylonJS and I also agree to it since BabylonJS has a good documentation as well as a good reputation comparable with ThreeJS.

# **THE IMPLEMENTATION** ⚒️

We have to used up our hard-earned weekends developing the game and researching. At first, coming up with a boilerplate was easy because of Nuxt 's excellent toolings. Vuex is also used to manage the state across different components. The difficulty came when we started touching on Canvas. 

As for convenience I used Vue-Babylonjs wrapper initially which has a learning curve abit deeper that we expected. And the documentation doesn't seem to help us also. The wrapper library has done a great job in starting the scene and mesh objects but when it comes to real dirty job, it lacks the freedom to program. 

That leads us to implement our actual game logic like collision, moving, rotation etc to use the vanilla babylonJS object approach since it has the playground and big community with lots of examples to play with. Surprisingly, when we were doing the development, BabylonJS just released the new documentation as well which is super helpful for us.

After 3 weeks of grinding our weekends and some weekday nights, the basic functions of game has done. I took it as a win. The last week, we just used it for improvements and garnishing with better game experience.

# **THE LESSON** 🎄

Although we didn't win, that was not our intension in the first place. Our intension was to try out game development in action and yes, we felt it. Game development, as fun as it is when the players are playing, the sweat and tears that the developers have to put in to details to create a good game is just admirable. I got a lot of fun working on that and it helps me to grow in my day-to-day developer career also. Hope you guys like my sharing!

How about you guys also? 
Have some game development experience? 
❓❓❓❓
Please share in the comments below. 👇

The Github repo for the project 
https://github.com/m3yevn/krescent`,user:{name:"Kevin Moe Myint Myat 👨‍💻",username:"m3yevn",twitter_username:null,github_username:"m3yevn",user_id:217073,website_url:"https://kevinmoemyintmyat.github.io",profile_image:"https://media.dev.to/dynamic/image/width=640,height=640,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F217073%2F0f0c2cec-62f0-4ec6-b164-23e0a893e311.jpg",profile_image_90:"https://media.dev.to/dynamic/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F217073%2F0f0c2cec-62f0-4ec6-b164-23e0a893e311.jpg"}},{type_of:"article",id:294121,title:"FTP Seer API + FTP Seer Client Google SEO",description:"My open source project FTP Seer is on Google Search now. Yay!!! 🦄               Background o...",readable_publish_date:"Mar 29 '20",slug:"ftp-seer-api-ftp-seer-client-google-seo-3lf2",path:"/m3yevn/ftp-seer-api-ftp-seer-client-google-seo-3lf2",url:"https://dev.to/m3yevn/ftp-seer-api-ftp-seer-client-google-seo-3lf2",comments_count:0,public_reactions_count:6,collection_id:null,published_timestamp:"2020-03-29T02:13:08Z",positive_reactions_count:6,cover_image:"https://media.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fi%2Fliw75hbrte70vgzwwmhy.png",social_image:"https://media.dev.to/dynamic/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fi%2Fliw75hbrte70vgzwwmhy.png",canonical_url:"https://dev.to/m3yevn/ftp-seer-api-ftp-seer-client-google-seo-3lf2",created_at:"2020-03-29T01:56:37Z",edited_at:"2020-03-29T02:15:46Z",crossposted_at:null,published_at:"2020-03-29T02:13:08Z",last_comment_at:"2020-03-29T02:13:08Z",reading_time_minutes:2,tag_list:"ftpseer, ftpseerapi, ftpseerclient, seer",tags:["ftpseer","ftpseerapi","ftpseerclient","seer"],body_html:`<h1>
  <a name="my-open-source-project-ftp-seer-is-on-google-search-now-yay" href="#my-open-source-project-ftp-seer-is-on-google-search-now-yay">
  </a>
  My open source project FTP Seer is on Google Search now. Yay!!! 🦄
</h1>


<hr>

<h3>
  <a name="background-of-ftp-seer" href="#background-of-ftp-seer">
  </a>
  Background of FTP Seer 💎
</h3>

<p>Back in the days, when I was working on an in-house project where the client requirements are to gather application logs from remote server using FTP protocol and show it on their admin portal, I needed a backend API to fetch directory list and get file contents.</p>

<p>I found the <a href="https://www.npmjs.com/package/jsftp" target="_blank" rel="noopener noreferrer">JSFTP library</a> which is pretty useful for my case and decided to put that in my tech stack. After that, I use Node and ExpressJS to serve http server to create a RESTful API which has now become the <a href="https://ftpseer.herokuapp.com/" target="_blank" rel="noopener noreferrer">FTP Seer API</a></p>

<h3>
  <a name="continue-to-develop" href="#continue-to-develop">
  </a>
  Continue to develop 😎
</h3>

<p>The API serve its purpose and the in-house project was done. However, I felt the need to make it open-source and create a full-stack application so that other developers can utilise it as well. So, starting from three or four months back, I picked up the old API in my archived repository and  polished it by refactoring. I even wrote a landing page so that people can test the API just by the first visit.</p>

<h3>
  <a name="giving-it-a-demo-client-application" href="#giving-it-a-demo-client-application">
  </a>
  Giving it a demo client application 💄
</h3>

<p>In order to properly use it, I also created a frontend application with a framework that I was obsessed with back then which is Svelte and Sapper framework to serve it universally (Client, Server-Side, Service-Worker).<br>
The demo frontend application becomes <a href="https://ftpseerclient.herokuapp.com/" target="_blank" rel="noopener noreferrer">FTP Seer Client</a>.</p>

<h3>
  <a name="deploying-the-apps" href="#deploying-the-apps">
  </a>
  Deploying the apps ⚙️
</h3>

<p>For deployment, since I didn't intend to purchase a domain for it, I used Heroku to deploy on their domain. I set up a CircleCI CI/CD pipeline so that whenever I push my latest commit it will deploy to heroku. The pipeline is available below<br>
FTP Seer API - <a href="https://circleci.com/gh/m3yevn/ftp-seer" target="_blank" rel="noopener noreferrer">https://circleci.com/gh/m3yevn/ftp-seer</a><br>
FTP Seer Client - <a href="https://circleci.com/gh/m3yevn/ftp-seer-client" target="_blank" rel="noopener noreferrer">https://circleci.com/gh/m3yevn/ftp-seer-client</a></p>

<p>and the configuration is at <br>
<a href="https://github.com/m3yevn/ftp-seer/blob/master/.circleci/config.yml" target="_blank" rel="noopener noreferrer">https://github.com/m3yevn/ftp-seer/blob/master/.circleci/config.yml</a><br>
<a href="https://github.com/m3yevn/ftp-seer-client/blob/master/.circleci/config.yml" target="_blank" rel="noopener noreferrer">https://github.com/m3yevn/ftp-seer-client/blob/master/.circleci/config.yml</a></p>

<h3>
  <a name="making-them-available-on-google" href="#making-them-available-on-google">
  </a>
  Making them available on Google 🌎
</h3>

<p>However, Heroku domains are bad in SEO search results, therefore I used meta tags to provide suitable keywords, images, authors to make Google to crawl properly. I used Google Search Console and get verification meta tags , add them on the respective index.html and we're good to go.</p>

<h3>
  <a name="the-final-result-is-shown-in-the-cover-image-where-you-can-see-both-ftp-seer-applications-when-you-make-a-search-on-google" href="#the-final-result-is-shown-in-the-cover-image-where-you-can-see-both-ftp-seer-applications-when-you-make-a-search-on-google">
  </a>
  The final result is shown in the cover image where you can see both FTP Seer applications when you make a search on Google.
</h3>


<hr>

<h4>
  <a name="stay-safe-and-thanks-for-reading" href="#stay-safe-and-thanks-for-reading">
  </a>
  Stay safe and Thanks for reading! ❤️
</h4>

<h5>
  <a name="catch-up-with-me-at-httpskevinmoemyintmyatgitlabio" href="#catch-up-with-me-at-httpskevinmoemyintmyatgitlabio">
  </a>
  Catch up with me at <a href="https://kevinmoemyintmyat.gitlab.io" target="_blank" rel="noopener noreferrer">https://kevinmoemyintmyat.gitlab.io</a>
</h5>

`,body_markdown:`# My open source project FTP Seer is on Google Search now. Yay!!! 🦄
<hr/>
### Background of FTP Seer 💎

Back in the days, when I was working on an in-house project where the client requirements are to gather application logs from remote server using FTP protocol and show it on their admin portal, I needed a backend API to fetch directory list and get file contents.

I found the [JSFTP library](https://www.npmjs.com/package/jsftp) which is pretty useful for my case and decided to put that in my tech stack. After that, I use Node and ExpressJS to serve http server to create a RESTful API which has now become the [FTP Seer API](https://ftpseer.herokuapp.com/)

### Continue to develop 😎

The API serve its purpose and the in-house project was done. However, I felt the need to make it open-source and create a full-stack application so that other developers can utilise it as well. So, starting from three or four months back, I picked up the old API in my archived repository and  polished it by refactoring. I even wrote a landing page so that people can test the API just by the first visit.

### Giving it a demo client application 💄

In order to properly use it, I also created a frontend application with a framework that I was obsessed with back then which is Svelte and Sapper framework to serve it universally (Client, Server-Side, Service-Worker).
The demo frontend application becomes [FTP Seer Client](https://ftpseerclient.herokuapp.com/).

### Deploying the apps ⚙️


For deployment, since I didn't intend to purchase a domain for it, I used Heroku to deploy on their domain. I set up a CircleCI CI/CD pipeline so that whenever I push my latest commit it will deploy to heroku. The pipeline is available below
FTP Seer API - https://circleci.com/gh/m3yevn/ftp-seer
FTP Seer Client - https://circleci.com/gh/m3yevn/ftp-seer-client

and the configuration is at 
https://github.com/m3yevn/ftp-seer/blob/master/.circleci/config.yml
https://github.com/m3yevn/ftp-seer-client/blob/master/.circleci/config.yml

### Making them available on Google 🌎

However, Heroku domains are bad in SEO search results, therefore I used meta tags to provide suitable keywords, images, authors to make Google to crawl properly. I used Google Search Console and get verification meta tags , add them on the respective index.html and we're good to go.

### The final result is shown in the cover image where you can see both FTP Seer applications when you make a search on Google.
<hr/>

#### Stay safe and Thanks for reading! ❤️

##### Catch up with me at https://kevinmoemyintmyat.gitlab.io
`,user:{name:"Kevin Moe Myint Myat 👨‍💻",username:"m3yevn",twitter_username:null,github_username:"m3yevn",user_id:217073,website_url:"https://kevinmoemyintmyat.github.io",profile_image:"https://media.dev.to/dynamic/image/width=640,height=640,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F217073%2F0f0c2cec-62f0-4ec6-b164-23e0a893e311.jpg",profile_image_90:"https://media.dev.to/dynamic/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F217073%2F0f0c2cec-62f0-4ec6-b164-23e0a893e311.jpg"}},{type_of:"article",id:267096,title:"FTP Seer - A simple web based FTP file explorer",description:"I've developed a full stack app. 🎉 Yayy!!   If you need a full stack app which can explore F...",readable_publish_date:"Feb 23 '20",slug:"ftp-seer-a-simple-web-based-ftp-file-explorer-1e4m",path:"/m3yevn/ftp-seer-a-simple-web-based-ftp-file-explorer-1e4m",url:"https://dev.to/m3yevn/ftp-seer-a-simple-web-based-ftp-file-explorer-1e4m",comments_count:1,public_reactions_count:8,collection_id:null,published_timestamp:"2020-02-23T13:15:13Z",positive_reactions_count:8,cover_image:"https://media.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fi%2F02zlb2uu47n2zkgd6ge6.png",social_image:"https://media.dev.to/dynamic/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fi%2F02zlb2uu47n2zkgd6ge6.png",canonical_url:"https://dev.to/m3yevn/ftp-seer-a-simple-web-based-ftp-file-explorer-1e4m",created_at:"2020-02-23T13:15:13Z",edited_at:"2020-02-24T15:13:22Z",crossposted_at:null,published_at:"2020-02-23T13:15:13Z",last_comment_at:"2020-04-01T09:34:11Z",reading_time_minutes:1,tag_list:"node, fullstack, svelte, ftpseer",tags:["node","fullstack","svelte","ftpseer"],body_html:`<h1>
  <a name="ive-developed-a-full-stack-app-yayy" href="#ive-developed-a-full-stack-app-yayy">
  </a>
  I've developed a full stack app. 🎉 Yayy!!
</h1>

<p>If you need a full stack app which can explore FTP server directory and get file content through web, take a look at my project.</p>

<h2>
  <a name="demos-are-below" href="#demos-are-below">
  </a>
  Demos are below.💡
</h2>

<p>Backend API - <a href="https://ftpseer.herokuapp.com" target="_blank" rel="noopener noreferrer">https://ftpseer.herokuapp.com</a><br>
Frontend UI - <a href="https://ftpseerclient.herokuapp.com" target="_blank" rel="noopener noreferrer">https://ftpseerclient.herokuapp.com</a></p>

<h2>
  <a name="source-code-at" href="#source-code-at">
  </a>
  Source code at 👾
</h2>

<p><a href="https://github.com/m3yevn/ftp-seer" target="_blank" rel="noopener noreferrer">https://github.com/m3yevn/ftp-seer</a> and<br>
<a href="https://github.com/m3yevn/ftp-seer-client" target="_blank" rel="noopener noreferrer">https://github.com/m3yevn/ftp-seer-client</a></p>

<h1>
  <a name="tech-stack-nodejs-jsftp-svelte-sapper" href="#tech-stack-nodejs-jsftp-svelte-sapper">
  </a>
  Tech Stack : NodeJS, JsFtp, Svelte, Sapper
</h1>

<p>If you wish to contribute kindly create issues and pull requests.</p>

<p>Cheers! 🍺 🍺 🍺</p>

<p>Check me out @ <a href="https://kevinmoemyintmyat.gitlab.io" target="_blank" rel="noopener noreferrer">https://kevinmoemyintmyat.gitlab.io</a></p>

`,body_markdown:`# I've developed a full stack app. 🎉 Yayy!!


If you need a full stack app which can explore FTP server directory and get file content through web, take a look at my project.

## Demos are below.💡
Backend API - https://ftpseer.herokuapp.com
Frontend UI - https://ftpseerclient.herokuapp.com

## Source code at 👾
https://github.com/m3yevn/ftp-seer and
https://github.com/m3yevn/ftp-seer-client

# Tech Stack : NodeJS, JsFtp, Svelte, Sapper

If you wish to contribute kindly create issues and pull requests.

Cheers! 🍺 🍺 🍺

Check me out @ https://kevinmoemyintmyat.gitlab.io

`,user:{name:"Kevin Moe Myint Myat 👨‍💻",username:"m3yevn",twitter_username:null,github_username:"m3yevn",user_id:217073,website_url:"https://kevinmoemyintmyat.github.io",profile_image:"https://media.dev.to/dynamic/image/width=640,height=640,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F217073%2F0f0c2cec-62f0-4ec6-b164-23e0a893e311.jpg",profile_image_90:"https://media.dev.to/dynamic/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F217073%2F0f0c2cec-62f0-4ec6-b164-23e0a893e311.jpg"}}];const T=e=>(Mt("data-v-b13fed3b"),e=e(),xt(),e),Gc={class:"h-screen w-screen mt-5"},Lc={key:0,class:"title"},qc={key:1,class:"gallery-card w-full"},Hc=T(()=>d("br",null,null,-1)),Rc={class:"gallery-card-footer"},Jc={class:"date"},Nc=T(()=>d("b",null,"Category",-1)),Kc={class:"gallery-card-tag"},Uc=T(()=>d("b",null,", Language",-1)),Wc={class:"gallery-card-tag"},Zc=T(()=>d("span",{class:"read-more"}," ...Read more ",-1)),Yc=T(()=>d("div",{class:"title"},"Published Blogs",-1)),Vc={class:"gallery-card"},Xc={class:"tooltip title"},Qc={key:0,class:"tooltiptext"},ep=T(()=>d("br",null,null,-1)),tp={class:"tooltip description"},ap={key:0,class:"tooltiptext"},np={class:"gallery-card-footer"},op={class:"date"},rp=T(()=>d("b",null,"Category",-1)),ip={class:"gallery-card-tag"},sp=T(()=>d("b",null,", Language",-1)),hp={class:"gallery-card-tag"},lp=T(()=>d("span",{class:"read-more"}," ...Read more ",-1)),cp={__name:"Blog",setup(e){Ft({title:"Blogs and Articles by Kevin Moe Myint Myat",link:[{rel:"icon",type:"image/png",href:"https://kevinmoemyintmyat.github.io/favicon.png"}],meta:[{name:"description",content:`Kevin Moe Myint Myat is a software developer and an art hobbyist based in Singapore. He is also a full-time cat dad to JieMao (https://www.instagram.com/jiemao_theblackcattt).
            He spends most of his time working as a software engineer at DT One (https://www.dtone.com) and when he's on his annual leave, he pursues his passion "Travelling" and explore the world. He wrote his travel blogs on this
            personal website to share his vacation experiences with his audiences.`},{name:"keywords",content:"Kevin Moe Myint Myat,kevinmoemyintmyat,kevinmoemyintmyat.github.io,blog, stories, software developer, artist, cat dad,fullstack,software,kevin,moe,myint,myat,kevn,Kevn Moe Myint Myat,KevinMoeMyintMyat, Kevin Moe Myint Myat, Github, art, travel blogs, articles"},{property:"og:title",content:"Kevin Moe Myint Myat - a cat dad, a developer & an artist"},{property:"og:type",content:"profile"},{property:"og:url",content:"https://kevinmoemyintmyat.github.io/blog"},{property:"og:site:name",content:"Kevin Moe Myint Myat - a cat dad, a developer & an artist"},{property:"og:description",content:"Kevin Moe Myint Myat - a cat dad, a developer & an artist"},{name:"twitter:site",content:"https://kevinmoemyintmyat.github.io"},{name:"twitter:description",content:"Kevin Moe Myint Myat - a cat dad, a developer & an artist"}]});const t=Tt({latestBlog:{},blogs:Pt}),a=At(()=>{const i=[];let s=[];const h=zc(t.blogs,"date","desc");let l=[];return h.length%2===0?l=h.concat({isHidden:!0,date:new Date}):l=h,t.latestBlog=l.shift(),t.latestBlog={...t.latestBlog,date:ke(t.latestBlog.date,"do MMMM yyyy")},l.forEach((m,c)=>{(s==null?void 0:s.length)<=2&&s.push({...m,date:ke(m.date,"do MMMM yyyy")}),s.length===2?(i.push(s),s=[]):c===h.length-1&&(i.push(s),s=[])}),i});$t(()=>{n()});async function n(){t.blogs=t.blogs.concat(Dc.map(i=>({...i,date:new Date(i.published_at),route:`/blog/${i.slug}`,language:"English",type:"dev"})))}function r(i){return(i==null?void 0:i.length)>55?`${i.slice(0,55)}...`:i}function o(i){return i.language==="English"?{path:i.route,params:{slug:i.slug},query:{type:i.type}}:{path:i.route,query:{type:i.type}}}return(i,s)=>{const h=Ct;return w(),_("div",Gc,[d("div",null,[k(t).latestBlog.title?(w(),_("div",Lc,"Latest Blog")):B("",!0),k(t).latestBlog.title?(w(),_("div",qc,[St(h,{to:o(k(t).latestBlog)},{default:we(()=>[d("p",null,[I(' "'+y(k(t).latestBlog.title)+'" ',1),Hc,d("span",null,y(k(t).latestBlog.description),1)]),d("div",Rc,[d("span",Jc,[I(" Written on "+y(k(t).latestBlog.date)+", ",1),Nc,I(": "),d("b",Kc,y(k(t).latestBlog.category),1),Uc,I(": "),d("b",Wc,y(k(t).latestBlog.language),1)]),Zc])]),_:1},8,["to"])])):B("",!0),Yc,(w(!0),_(be,null,_e(k(a),(l,m)=>(w(),_("div",{key:m,class:"flex flex-col lg:flex-row justify-center items-center"},[(w(!0),_(be,null,_e(l,c=>(w(),_("div",{key:c.title,class:"w-full"},[c.isHidden?B("",!0):(w(),jt(h,{key:0,to:o(c)},{default:we(()=>{var u,g;return[d("div",Vc,[d("p",null,[d("span",Xc,[I('"'+y(r(c.title))+'" ',1),((u=c==null?void 0:c.title)==null?void 0:u.length)>55?(w(),_("span",Qc,y(c==null?void 0:c.title),1)):B("",!0)]),ep,d("span",tp,[I(y(r(c.description))+" ",1),((g=c==null?void 0:c.description)==null?void 0:g.length)>55?(w(),_("span",ap,y(c==null?void 0:c.description),1)):B("",!0)])]),d("div",np,[d("span",op,[I(" Written on "+y(c.date)+", ",1),rp,I(": "),d("b",ip,y(c.category),1),sp,I(": "),d("b",hp,y(c.language),1)]),lp])])]}),_:2},1032,["to"]))]))),128))]))),128))])])}}},up=It(cp,[["__scopeId","data-v-b13fed3b"]]);export{up as default};
