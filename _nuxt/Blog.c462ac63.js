import{i as It,f as At,j as Ft,k as xt,l as Tt,c as _,a as c,b,h as M,d as St,w as be,F as we,r as _e,_ as Mt,o as w,e as k,t as v,m as jt,p as Ct,n as Pt}from"./entry.99f72b02.js";import{b as zt,f as ke}from"./data-blog.ad758b56.js";var H=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function $t(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function Et(e,t){for(var a=-1,n=e==null?0:e.length,r=Array(n);++a<n;)r[a]=t(e[a],a,e);return r}var et=Et,Bt=Array.isArray,I=Bt,Ot=typeof H=="object"&&H&&H.Object===Object&&H,tt=Ot,Dt=tt,Rt=typeof self=="object"&&self&&self.Object===Object&&self,Lt=Dt||Rt||Function("return this")(),A=Lt,Gt=A,Ht=Gt.Symbol,Z=Ht,Ie=Z,at=Object.prototype,qt=at.hasOwnProperty,Nt=at.toString,O=Ie?Ie.toStringTag:void 0;function Jt(e){var t=qt.call(e,O),a=e[O];try{e[O]=void 0;var n=!0}catch{}var r=Nt.call(e);return n&&(t?e[O]=a:delete e[O]),r}var Kt=Jt,Zt=Object.prototype,Xt=Zt.toString;function Wt(e){return Xt.call(e)}var Vt=Wt,Ae=Z,Ut=Kt,Qt=Vt,Yt="[object Null]",ea="[object Undefined]",Fe=Ae?Ae.toStringTag:void 0;function ta(e){return e==null?e===void 0?ea:Yt:Fe&&Fe in Object(e)?Ut(e):Qt(e)}var D=ta;function aa(e){return e!=null&&typeof e=="object"}var R=aa,na=D,oa=R,ra="[object Symbol]";function ia(e){return typeof e=="symbol"||oa(e)&&na(e)==ra}var X=ia,sa=I,la=X,pa=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,ha=/^\w*$/;function ca(e,t){if(sa(e))return!1;var a=typeof e;return a=="number"||a=="symbol"||a=="boolean"||e==null||la(e)?!0:ha.test(e)||!pa.test(e)||t!=null&&e in Object(t)}var pe=ca;function da(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var he=da,ma=D,ga=he,ua="[object AsyncFunction]",fa="[object Function]",ya="[object GeneratorFunction]",va="[object Proxy]";function ba(e){if(!ga(e))return!1;var t=ma(e);return t==fa||t==ya||t==ua||t==va}var nt=ba,wa=A,_a=wa["__core-js_shared__"],ka=_a,ee=ka,xe=function(){var e=/[^.]+$/.exec(ee&&ee.keys&&ee.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function Ia(e){return!!xe&&xe in e}var Aa=Ia,Fa=Function.prototype,xa=Fa.toString;function Ta(e){if(e!=null){try{return xa.call(e)}catch{}try{return e+""}catch{}}return""}var ot=Ta,Sa=nt,Ma=Aa,ja=he,Ca=ot,Pa=/[\\^$.*+?()[\]{}|]/g,za=/^\[object .+?Constructor\]$/,$a=Function.prototype,Ea=Object.prototype,Ba=$a.toString,Oa=Ea.hasOwnProperty,Da=RegExp("^"+Ba.call(Oa).replace(Pa,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function Ra(e){if(!ja(e)||Ma(e))return!1;var t=Sa(e)?Da:za;return t.test(Ca(e))}var La=Ra;function Ga(e,t){return e==null?void 0:e[t]}var Ha=Ga,qa=La,Na=Ha;function Ja(e,t){var a=Na(e,t);return qa(a)?a:void 0}var C=Ja,Ka=C,Za=Ka(Object,"create"),W=Za,Te=W;function Xa(){this.__data__=Te?Te(null):{},this.size=0}var Wa=Xa;function Va(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}var Ua=Va,Qa=W,Ya="__lodash_hash_undefined__",en=Object.prototype,tn=en.hasOwnProperty;function an(e){var t=this.__data__;if(Qa){var a=t[e];return a===Ya?void 0:a}return tn.call(t,e)?t[e]:void 0}var nn=an,on=W,rn=Object.prototype,sn=rn.hasOwnProperty;function ln(e){var t=this.__data__;return on?t[e]!==void 0:sn.call(t,e)}var pn=ln,hn=W,cn="__lodash_hash_undefined__";function dn(e,t){var a=this.__data__;return this.size+=this.has(e)?0:1,a[e]=hn&&t===void 0?cn:t,this}var mn=dn,gn=Wa,un=Ua,fn=nn,yn=pn,vn=mn;function P(e){var t=-1,a=e==null?0:e.length;for(this.clear();++t<a;){var n=e[t];this.set(n[0],n[1])}}P.prototype.clear=gn;P.prototype.delete=un;P.prototype.get=fn;P.prototype.has=yn;P.prototype.set=vn;var bn=P;function wn(){this.__data__=[],this.size=0}var _n=wn;function kn(e,t){return e===t||e!==e&&t!==t}var rt=kn,In=rt;function An(e,t){for(var a=e.length;a--;)if(In(e[a][0],t))return a;return-1}var V=An,Fn=V,xn=Array.prototype,Tn=xn.splice;function Sn(e){var t=this.__data__,a=Fn(t,e);if(a<0)return!1;var n=t.length-1;return a==n?t.pop():Tn.call(t,a,1),--this.size,!0}var Mn=Sn,jn=V;function Cn(e){var t=this.__data__,a=jn(t,e);return a<0?void 0:t[a][1]}var Pn=Cn,zn=V;function $n(e){return zn(this.__data__,e)>-1}var En=$n,Bn=V;function On(e,t){var a=this.__data__,n=Bn(a,e);return n<0?(++this.size,a.push([e,t])):a[n][1]=t,this}var Dn=On,Rn=_n,Ln=Mn,Gn=Pn,Hn=En,qn=Dn;function z(e){var t=-1,a=e==null?0:e.length;for(this.clear();++t<a;){var n=e[t];this.set(n[0],n[1])}}z.prototype.clear=Rn;z.prototype.delete=Ln;z.prototype.get=Gn;z.prototype.has=Hn;z.prototype.set=qn;var U=z,Nn=C,Jn=A,Kn=Nn(Jn,"Map"),ce=Kn,Se=bn,Zn=U,Xn=ce;function Wn(){this.size=0,this.__data__={hash:new Se,map:new(Xn||Zn),string:new Se}}var Vn=Wn;function Un(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}var Qn=Un,Yn=Qn;function eo(e,t){var a=e.__data__;return Yn(t)?a[typeof t=="string"?"string":"hash"]:a.map}var Q=eo,to=Q;function ao(e){var t=to(this,e).delete(e);return this.size-=t?1:0,t}var no=ao,oo=Q;function ro(e){return oo(this,e).get(e)}var io=ro,so=Q;function lo(e){return so(this,e).has(e)}var po=lo,ho=Q;function co(e,t){var a=ho(this,e),n=a.size;return a.set(e,t),this.size+=a.size==n?0:1,this}var mo=co,go=Vn,uo=no,fo=io,yo=po,vo=mo;function $(e){var t=-1,a=e==null?0:e.length;for(this.clear();++t<a;){var n=e[t];this.set(n[0],n[1])}}$.prototype.clear=go;$.prototype.delete=uo;$.prototype.get=fo;$.prototype.has=yo;$.prototype.set=vo;var de=$,it=de,bo="Expected a function";function me(e,t){if(typeof e!="function"||t!=null&&typeof t!="function")throw new TypeError(bo);var a=function(){var n=arguments,r=t?t.apply(this,n):n[0],o=a.cache;if(o.has(r))return o.get(r);var s=e.apply(this,n);return a.cache=o.set(r,s)||o,s};return a.cache=new(me.Cache||it),a}me.Cache=it;var wo=me,_o=wo,ko=500;function Io(e){var t=_o(e,function(n){return a.size===ko&&a.clear(),n}),a=t.cache;return t}var Ao=Io,Fo=Ao,xo=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,To=/\\(\\)?/g,So=Fo(function(e){var t=[];return e.charCodeAt(0)===46&&t.push(""),e.replace(xo,function(a,n,r,o){t.push(r?o.replace(To,"$1"):n||a)}),t}),Mo=So,Me=Z,jo=et,Co=I,Po=X,zo=1/0,je=Me?Me.prototype:void 0,Ce=je?je.toString:void 0;function st(e){if(typeof e=="string")return e;if(Co(e))return jo(e,st)+"";if(Po(e))return Ce?Ce.call(e):"";var t=e+"";return t=="0"&&1/e==-zo?"-0":t}var $o=st,Eo=$o;function Bo(e){return e==null?"":Eo(e)}var Oo=Bo,Do=I,Ro=pe,Lo=Mo,Go=Oo;function Ho(e,t){return Do(e)?e:Ro(e,t)?[e]:Lo(Go(e))}var lt=Ho,qo=X,No=1/0;function Jo(e){if(typeof e=="string"||qo(e))return e;var t=e+"";return t=="0"&&1/e==-No?"-0":t}var Y=Jo,Ko=lt,Zo=Y;function Xo(e,t){t=Ko(t,e);for(var a=0,n=t.length;e!=null&&a<n;)e=e[Zo(t[a++])];return a&&a==n?e:void 0}var ge=Xo,Wo=U;function Vo(){this.__data__=new Wo,this.size=0}var Uo=Vo;function Qo(e){var t=this.__data__,a=t.delete(e);return this.size=t.size,a}var Yo=Qo;function er(e){return this.__data__.get(e)}var tr=er;function ar(e){return this.__data__.has(e)}var nr=ar,or=U,rr=ce,ir=de,sr=200;function lr(e,t){var a=this.__data__;if(a instanceof or){var n=a.__data__;if(!rr||n.length<sr-1)return n.push([e,t]),this.size=++a.size,this;a=this.__data__=new ir(n)}return a.set(e,t),this.size=a.size,this}var pr=lr,hr=U,cr=Uo,dr=Yo,mr=tr,gr=nr,ur=pr;function E(e){var t=this.__data__=new hr(e);this.size=t.size}E.prototype.clear=cr;E.prototype.delete=dr;E.prototype.get=mr;E.prototype.has=gr;E.prototype.set=ur;var pt=E,fr="__lodash_hash_undefined__";function yr(e){return this.__data__.set(e,fr),this}var vr=yr;function br(e){return this.__data__.has(e)}var wr=br,_r=de,kr=vr,Ir=wr;function N(e){var t=-1,a=e==null?0:e.length;for(this.__data__=new _r;++t<a;)this.add(e[t])}N.prototype.add=N.prototype.push=kr;N.prototype.has=Ir;var Ar=N;function Fr(e,t){for(var a=-1,n=e==null?0:e.length;++a<n;)if(t(e[a],a,e))return!0;return!1}var xr=Fr;function Tr(e,t){return e.has(t)}var Sr=Tr,Mr=Ar,jr=xr,Cr=Sr,Pr=1,zr=2;function $r(e,t,a,n,r,o){var s=a&Pr,i=e.length,l=t.length;if(i!=l&&!(s&&l>i))return!1;var p=o.get(e),m=o.get(t);if(p&&m)return p==t&&m==e;var g=-1,h=!0,f=a&zr?new Mr:void 0;for(o.set(e,t),o.set(t,e);++g<i;){var u=e[g],y=t[g];if(n)var x=s?n(y,u,g,t,e,o):n(u,y,g,e,t,o);if(x!==void 0){if(x)continue;h=!1;break}if(f){if(!jr(t,function(T,S){if(!Cr(f,S)&&(u===T||r(u,T,a,n,o)))return f.push(S)})){h=!1;break}}else if(!(u===y||r(u,y,a,n,o))){h=!1;break}}return o.delete(e),o.delete(t),h}var ht=$r,Er=A,Br=Er.Uint8Array,Or=Br;function Dr(e){var t=-1,a=Array(e.size);return e.forEach(function(n,r){a[++t]=[r,n]}),a}var Rr=Dr;function Lr(e){var t=-1,a=Array(e.size);return e.forEach(function(n){a[++t]=n}),a}var Gr=Lr,Pe=Z,ze=Or,Hr=rt,qr=ht,Nr=Rr,Jr=Gr,Kr=1,Zr=2,Xr="[object Boolean]",Wr="[object Date]",Vr="[object Error]",Ur="[object Map]",Qr="[object Number]",Yr="[object RegExp]",ei="[object Set]",ti="[object String]",ai="[object Symbol]",ni="[object ArrayBuffer]",oi="[object DataView]",$e=Pe?Pe.prototype:void 0,te=$e?$e.valueOf:void 0;function ri(e,t,a,n,r,o,s){switch(a){case oi:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case ni:return!(e.byteLength!=t.byteLength||!o(new ze(e),new ze(t)));case Xr:case Wr:case Qr:return Hr(+e,+t);case Vr:return e.name==t.name&&e.message==t.message;case Yr:case ti:return e==t+"";case Ur:var i=Nr;case ei:var l=n&Kr;if(i||(i=Jr),e.size!=t.size&&!l)return!1;var p=s.get(e);if(p)return p==t;n|=Zr,s.set(e,t);var m=qr(i(e),i(t),n,r,o,s);return s.delete(e),m;case ai:if(te)return te.call(e)==te.call(t)}return!1}var ii=ri;function si(e,t){for(var a=-1,n=t.length,r=e.length;++a<n;)e[r+a]=t[a];return e}var li=si,pi=li,hi=I;function ci(e,t,a){var n=t(e);return hi(e)?n:pi(n,a(e))}var di=ci;function mi(e,t){for(var a=-1,n=e==null?0:e.length,r=0,o=[];++a<n;){var s=e[a];t(s,a,e)&&(o[r++]=s)}return o}var gi=mi;function ui(){return[]}var fi=ui,yi=gi,vi=fi,bi=Object.prototype,wi=bi.propertyIsEnumerable,Ee=Object.getOwnPropertySymbols,_i=Ee?function(e){return e==null?[]:(e=Object(e),yi(Ee(e),function(t){return wi.call(e,t)}))}:vi,ki=_i;function Ii(e,t){for(var a=-1,n=Array(e);++a<e;)n[a]=t(a);return n}var Ai=Ii,Fi=D,xi=R,Ti="[object Arguments]";function Si(e){return xi(e)&&Fi(e)==Ti}var Mi=Si,Be=Mi,ji=R,ct=Object.prototype,Ci=ct.hasOwnProperty,Pi=ct.propertyIsEnumerable,zi=Be(function(){return arguments}())?Be:function(e){return ji(e)&&Ci.call(e,"callee")&&!Pi.call(e,"callee")},dt=zi,J={exports:{}};function $i(){return!1}var Ei=$i;J.exports;(function(e,t){var a=A,n=Ei,r=t&&!t.nodeType&&t,o=r&&!0&&e&&!e.nodeType&&e,s=o&&o.exports===r,i=s?a.Buffer:void 0,l=i?i.isBuffer:void 0,p=l||n;e.exports=p})(J,J.exports);var mt=J.exports,Bi=9007199254740991,Oi=/^(?:0|[1-9]\d*)$/;function Di(e,t){var a=typeof e;return t=t??Bi,!!t&&(a=="number"||a!="symbol"&&Oi.test(e))&&e>-1&&e%1==0&&e<t}var gt=Di,Ri=9007199254740991;function Li(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=Ri}var ue=Li,Gi=D,Hi=ue,qi=R,Ni="[object Arguments]",Ji="[object Array]",Ki="[object Boolean]",Zi="[object Date]",Xi="[object Error]",Wi="[object Function]",Vi="[object Map]",Ui="[object Number]",Qi="[object Object]",Yi="[object RegExp]",es="[object Set]",ts="[object String]",as="[object WeakMap]",ns="[object ArrayBuffer]",os="[object DataView]",rs="[object Float32Array]",is="[object Float64Array]",ss="[object Int8Array]",ls="[object Int16Array]",ps="[object Int32Array]",hs="[object Uint8Array]",cs="[object Uint8ClampedArray]",ds="[object Uint16Array]",ms="[object Uint32Array]",d={};d[rs]=d[is]=d[ss]=d[ls]=d[ps]=d[hs]=d[cs]=d[ds]=d[ms]=!0;d[Ni]=d[Ji]=d[ns]=d[Ki]=d[os]=d[Zi]=d[Xi]=d[Wi]=d[Vi]=d[Ui]=d[Qi]=d[Yi]=d[es]=d[ts]=d[as]=!1;function gs(e){return qi(e)&&Hi(e.length)&&!!d[Gi(e)]}var us=gs;function fs(e){return function(t){return e(t)}}var ut=fs,K={exports:{}};K.exports;(function(e,t){var a=tt,n=t&&!t.nodeType&&t,r=n&&!0&&e&&!e.nodeType&&e,o=r&&r.exports===n,s=o&&a.process,i=function(){try{var l=r&&r.require&&r.require("util").types;return l||s&&s.binding&&s.binding("util")}catch{}}();e.exports=i})(K,K.exports);var ys=K.exports,vs=us,bs=ut,Oe=ys,De=Oe&&Oe.isTypedArray,ws=De?bs(De):vs,ft=ws,_s=Ai,ks=dt,Is=I,As=mt,Fs=gt,xs=ft,Ts=Object.prototype,Ss=Ts.hasOwnProperty;function Ms(e,t){var a=Is(e),n=!a&&ks(e),r=!a&&!n&&As(e),o=!a&&!n&&!r&&xs(e),s=a||n||r||o,i=s?_s(e.length,String):[],l=i.length;for(var p in e)(t||Ss.call(e,p))&&!(s&&(p=="length"||r&&(p=="offset"||p=="parent")||o&&(p=="buffer"||p=="byteLength"||p=="byteOffset")||Fs(p,l)))&&i.push(p);return i}var js=Ms,Cs=Object.prototype;function Ps(e){var t=e&&e.constructor,a=typeof t=="function"&&t.prototype||Cs;return e===a}var zs=Ps;function $s(e,t){return function(a){return e(t(a))}}var Es=$s,Bs=Es,Os=Bs(Object.keys,Object),Ds=Os,Rs=zs,Ls=Ds,Gs=Object.prototype,Hs=Gs.hasOwnProperty;function qs(e){if(!Rs(e))return Ls(e);var t=[];for(var a in Object(e))Hs.call(e,a)&&a!="constructor"&&t.push(a);return t}var Ns=qs,Js=nt,Ks=ue;function Zs(e){return e!=null&&Ks(e.length)&&!Js(e)}var fe=Zs,Xs=js,Ws=Ns,Vs=fe;function Us(e){return Vs(e)?Xs(e):Ws(e)}var ye=Us,Qs=di,Ys=ki,el=ye;function tl(e){return Qs(e,el,Ys)}var al=tl,Re=al,nl=1,ol=Object.prototype,rl=ol.hasOwnProperty;function il(e,t,a,n,r,o){var s=a&nl,i=Re(e),l=i.length,p=Re(t),m=p.length;if(l!=m&&!s)return!1;for(var g=l;g--;){var h=i[g];if(!(s?h in t:rl.call(t,h)))return!1}var f=o.get(e),u=o.get(t);if(f&&u)return f==t&&u==e;var y=!0;o.set(e,t),o.set(t,e);for(var x=s;++g<l;){h=i[g];var T=e[h],S=t[h];if(n)var ve=s?n(S,T,h,t,e,o):n(T,S,h,e,t,o);if(!(ve===void 0?T===S||r(T,S,a,n,o):ve)){y=!1;break}x||(x=h=="constructor")}if(y&&!x){var L=e.constructor,G=t.constructor;L!=G&&"constructor"in e&&"constructor"in t&&!(typeof L=="function"&&L instanceof L&&typeof G=="function"&&G instanceof G)&&(y=!1)}return o.delete(e),o.delete(t),y}var sl=il,ll=C,pl=A,hl=ll(pl,"DataView"),cl=hl,dl=C,ml=A,gl=dl(ml,"Promise"),ul=gl,fl=C,yl=A,vl=fl(yl,"Set"),bl=vl,wl=C,_l=A,kl=wl(_l,"WeakMap"),Il=kl,oe=cl,re=ce,ie=ul,se=bl,le=Il,yt=D,B=ot,Le="[object Map]",Al="[object Object]",Ge="[object Promise]",He="[object Set]",qe="[object WeakMap]",Ne="[object DataView]",Fl=B(oe),xl=B(re),Tl=B(ie),Sl=B(se),Ml=B(le),j=yt;(oe&&j(new oe(new ArrayBuffer(1)))!=Ne||re&&j(new re)!=Le||ie&&j(ie.resolve())!=Ge||se&&j(new se)!=He||le&&j(new le)!=qe)&&(j=function(e){var t=yt(e),a=t==Al?e.constructor:void 0,n=a?B(a):"";if(n)switch(n){case Fl:return Ne;case xl:return Le;case Tl:return Ge;case Sl:return He;case Ml:return qe}return t});var jl=j,ae=pt,Cl=ht,Pl=ii,zl=sl,Je=jl,Ke=I,Ze=mt,$l=ft,El=1,Xe="[object Arguments]",We="[object Array]",q="[object Object]",Bl=Object.prototype,Ve=Bl.hasOwnProperty;function Ol(e,t,a,n,r,o){var s=Ke(e),i=Ke(t),l=s?We:Je(e),p=i?We:Je(t);l=l==Xe?q:l,p=p==Xe?q:p;var m=l==q,g=p==q,h=l==p;if(h&&Ze(e)){if(!Ze(t))return!1;s=!0,m=!1}if(h&&!m)return o||(o=new ae),s||$l(e)?Cl(e,t,a,n,r,o):Pl(e,t,l,a,n,r,o);if(!(a&El)){var f=m&&Ve.call(e,"__wrapped__"),u=g&&Ve.call(t,"__wrapped__");if(f||u){var y=f?e.value():e,x=u?t.value():t;return o||(o=new ae),r(y,x,a,n,o)}}return h?(o||(o=new ae),zl(e,t,a,n,r,o)):!1}var Dl=Ol,Rl=Dl,Ue=R;function vt(e,t,a,n,r){return e===t?!0:e==null||t==null||!Ue(e)&&!Ue(t)?e!==e&&t!==t:Rl(e,t,a,n,vt,r)}var bt=vt,Ll=pt,Gl=bt,Hl=1,ql=2;function Nl(e,t,a,n){var r=a.length,o=r,s=!n;if(e==null)return!o;for(e=Object(e);r--;){var i=a[r];if(s&&i[2]?i[1]!==e[i[0]]:!(i[0]in e))return!1}for(;++r<o;){i=a[r];var l=i[0],p=e[l],m=i[1];if(s&&i[2]){if(p===void 0&&!(l in e))return!1}else{var g=new Ll;if(n)var h=n(p,m,l,e,t,g);if(!(h===void 0?Gl(m,p,Hl|ql,n,g):h))return!1}}return!0}var Jl=Nl,Kl=he;function Zl(e){return e===e&&!Kl(e)}var wt=Zl,Xl=wt,Wl=ye;function Vl(e){for(var t=Wl(e),a=t.length;a--;){var n=t[a],r=e[n];t[a]=[n,r,Xl(r)]}return t}var Ul=Vl;function Ql(e,t){return function(a){return a==null?!1:a[e]===t&&(t!==void 0||e in Object(a))}}var _t=Ql,Yl=Jl,ep=Ul,tp=_t;function ap(e){var t=ep(e);return t.length==1&&t[0][2]?tp(t[0][0],t[0][1]):function(a){return a===e||Yl(a,e,t)}}var np=ap,op=ge;function rp(e,t,a){var n=e==null?void 0:op(e,t);return n===void 0?a:n}var ip=rp;function sp(e,t){return e!=null&&t in Object(e)}var lp=sp,pp=lt,hp=dt,cp=I,dp=gt,mp=ue,gp=Y;function up(e,t,a){t=pp(t,e);for(var n=-1,r=t.length,o=!1;++n<r;){var s=gp(t[n]);if(!(o=e!=null&&a(e,s)))break;e=e[s]}return o||++n!=r?o:(r=e==null?0:e.length,!!r&&mp(r)&&dp(s,r)&&(cp(e)||hp(e)))}var fp=up,yp=lp,vp=fp;function bp(e,t){return e!=null&&vp(e,t,yp)}var wp=bp,_p=bt,kp=ip,Ip=wp,Ap=pe,Fp=wt,xp=_t,Tp=Y,Sp=1,Mp=2;function jp(e,t){return Ap(e)&&Fp(t)?xp(Tp(e),t):function(a){var n=kp(a,e);return n===void 0&&n===t?Ip(a,e):_p(t,n,Sp|Mp)}}var Cp=jp;function Pp(e){return e}var kt=Pp;function zp(e){return function(t){return t==null?void 0:t[e]}}var $p=zp,Ep=ge;function Bp(e){return function(t){return Ep(t,e)}}var Op=Bp,Dp=$p,Rp=Op,Lp=pe,Gp=Y;function Hp(e){return Lp(e)?Dp(Gp(e)):Rp(e)}var qp=Hp,Np=np,Jp=Cp,Kp=kt,Zp=I,Xp=qp;function Wp(e){return typeof e=="function"?e:e==null?Kp:typeof e=="object"?Zp(e)?Jp(e[0],e[1]):Np(e):Xp(e)}var Vp=Wp;function Up(e){return function(t,a,n){for(var r=-1,o=Object(t),s=n(t),i=s.length;i--;){var l=s[e?i:++r];if(a(o[l],l,o)===!1)break}return t}}var Qp=Up,Yp=Qp,eh=Yp(),th=eh,ah=th,nh=ye;function oh(e,t){return e&&ah(e,t,nh)}var rh=oh,ih=fe;function sh(e,t){return function(a,n){if(a==null)return a;if(!ih(a))return e(a,n);for(var r=a.length,o=t?r:-1,s=Object(a);(t?o--:++o<r)&&n(s[o],o,s)!==!1;);return a}}var lh=sh,ph=rh,hh=lh,ch=hh(ph),dh=ch,mh=dh,gh=fe;function uh(e,t){var a=-1,n=gh(e)?Array(e.length):[];return mh(e,function(r,o,s){n[++a]=t(r,o,s)}),n}var fh=uh;function yh(e,t){var a=e.length;for(e.sort(t);a--;)e[a]=e[a].value;return e}var vh=yh,Qe=X;function bh(e,t){if(e!==t){var a=e!==void 0,n=e===null,r=e===e,o=Qe(e),s=t!==void 0,i=t===null,l=t===t,p=Qe(t);if(!i&&!p&&!o&&e>t||o&&s&&l&&!i&&!p||n&&s&&l||!a&&l||!r)return 1;if(!n&&!o&&!p&&e<t||p&&a&&r&&!n&&!o||i&&a&&r||!s&&r||!l)return-1}return 0}var wh=bh,_h=wh;function kh(e,t,a){for(var n=-1,r=e.criteria,o=t.criteria,s=r.length,i=a.length;++n<s;){var l=_h(r[n],o[n]);if(l){if(n>=i)return l;var p=a[n];return l*(p=="desc"?-1:1)}}return e.index-t.index}var Ih=kh,ne=et,Ah=ge,Fh=Vp,xh=fh,Th=vh,Sh=ut,Mh=Ih,jh=kt,Ch=I;function Ph(e,t,a){t.length?t=ne(t,function(o){return Ch(o)?function(s){return Ah(s,o.length===1?o[0]:o)}:o}):t=[jh];var n=-1;t=ne(t,Sh(Fh));var r=xh(e,function(o,s,i){var l=ne(t,function(p){return p(o)});return{criteria:l,index:++n,value:o}});return Th(r,function(o,s){return Mh(o,s,a)})}var zh=Ph,$h=zh,Ye=I;function Eh(e,t,a,n){return e==null?[]:(Ye(t)||(t=t==null?[]:[t]),a=n?void 0:a,Ye(a)||(a=a==null?[]:[a]),$h(e,t,a))}var Bh=Eh;const Oh=$t(Bh),Dh=[{type_of:"article",id:2035223,title:"a day in the life of a software engineer",description:'Woah, I finally have the time to write this blog that’s been on my mind recently!   "a day in the...',readable_publish_date:"Oct 12",slug:"a-day-in-the-life-of-a-software-engineer-1lmh",path:"/m3yevn/a-day-in-the-life-of-a-software-engineer-1lmh",url:"https://dev.to/m3yevn/a-day-in-the-life-of-a-software-engineer-1lmh",comments_count:1,public_reactions_count:1,collection_id:null,published_timestamp:"2024-10-12T06:35:01Z",positive_reactions_count:1,cover_image:"https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fhegttjvo34a4cxob8x3f.jpg",social_image:"https://media2.dev.to/dynamic/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fhegttjvo34a4cxob8x3f.jpg",canonical_url:"https://dev.to/m3yevn/a-day-in-the-life-of-a-software-engineer-1lmh",created_at:"2024-10-12T05:23:19Z",edited_at:null,crossposted_at:null,published_at:"2024-10-12T06:35:01Z",last_comment_at:"2024-10-13T12:44:48Z",reading_time_minutes:6,tag_list:"softwareengineering, softwaredevelopment, dayinthelifeofsoftwarengineer",tags:["softwareengineering","softwaredevelopment","dayinthelifeofsoftwarengineer"],body_html:`<p>Woah, I finally have the time to write this blog that’s been on my mind recently!</p>

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
 

`,user:{name:"Kevin Moe Myint Myat 👨‍💻",username:"m3yevn",twitter_username:null,github_username:"m3yevn",user_id:217073,website_url:"https://kevinmoemyintmyat.github.io",profile_image:"https://media2.dev.to/dynamic/image/width=640,height=640,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F217073%2F0f0c2cec-62f0-4ec6-b164-23e0a893e311.jpg",profile_image_90:"https://media2.dev.to/dynamic/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F217073%2F0f0c2cec-62f0-4ec6-b164-23e0a893e311.jpg"}},{type_of:"article",id:774965,title:"PortokaLive - An opensource experimental platform for broadcasting live stream",description:"🎉🎉🎉 After years of procrastinating on working on this project, I'm finally proud to launch this...",readable_publish_date:"Jul 29 '21",slug:"portokalive-an-opensource-experimental-platform-for-broadcasting-live-stream-4b8j",path:"/m3yevn/portokalive-an-opensource-experimental-platform-for-broadcasting-live-stream-4b8j",url:"https://dev.to/m3yevn/portokalive-an-opensource-experimental-platform-for-broadcasting-live-stream-4b8j",comments_count:0,public_reactions_count:1,collection_id:null,published_timestamp:"2021-07-29T06:04:22Z",positive_reactions_count:1,cover_image:null,social_image:"https://media2.dev.to/dynamic/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F7mmocpymsmn2udq3mv3c.png",canonical_url:"https://dev.to/m3yevn/portokalive-an-opensource-experimental-platform-for-broadcasting-live-stream-4b8j",created_at:"2021-07-29T06:04:22Z",edited_at:null,crossposted_at:null,published_at:"2021-07-29T06:04:22Z",last_comment_at:"2021-07-29T06:04:22Z",reading_time_minutes:3,tag_list:"portokalive, portoka, live, react",tags:["portokalive","portoka","live","react"],body_html:`<p>🎉🎉🎉 After years of procrastinating on working on this project, I'm finally proud to launch this platform PortokaLive to public. Hooray! Here's the link</p>

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


`,user:{name:"Kevin Moe Myint Myat 👨‍💻",username:"m3yevn",twitter_username:null,github_username:"m3yevn",user_id:217073,website_url:"https://kevinmoemyintmyat.github.io",profile_image:"https://media2.dev.to/dynamic/image/width=640,height=640,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F217073%2F0f0c2cec-62f0-4ec6-b164-23e0a893e311.jpg",profile_image_90:"https://media2.dev.to/dynamic/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F217073%2F0f0c2cec-62f0-4ec6-b164-23e0a893e311.jpg"}},{type_of:"article",id:755467,title:"React Xper - A developer's guide to experiment React 👨‍🔬",description:"React Xper is a experimental website to test out the many concepts of ReactJS and its related...",readable_publish_date:"Jul 10 '21",slug:"react-xper-a-developer-s-guide-to-experiment-react-15i5",path:"/m3yevn/react-xper-a-developer-s-guide-to-experiment-react-15i5",url:"https://dev.to/m3yevn/react-xper-a-developer-s-guide-to-experiment-react-15i5",comments_count:0,public_reactions_count:0,collection_id:null,published_timestamp:"2021-07-10T10:13:28Z",positive_reactions_count:0,cover_image:"https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F0yvn9awow1fbhteif6tq.PNG",social_image:"https://media2.dev.to/dynamic/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F0yvn9awow1fbhteif6tq.PNG",canonical_url:"https://dev.to/m3yevn/react-xper-a-developer-s-guide-to-experiment-react-15i5",created_at:"2021-07-10T10:13:28Z",edited_at:null,crossposted_at:null,published_at:"2021-07-10T10:13:28Z",last_comment_at:"2021-07-10T10:13:28Z",reading_time_minutes:1,tag_list:"react, reactxper, experiments, javascript",tags:["react","reactxper","experiments","javascript"],body_html:`<p>React Xper is a experimental website to test out the<br>
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

Thanks for reading & Stay safe! 😷`,user:{name:"Kevin Moe Myint Myat 👨‍💻",username:"m3yevn",twitter_username:null,github_username:"m3yevn",user_id:217073,website_url:"https://kevinmoemyintmyat.github.io",profile_image:"https://media2.dev.to/dynamic/image/width=640,height=640,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F217073%2F0f0c2cec-62f0-4ec6-b164-23e0a893e311.jpg",profile_image_90:"https://media2.dev.to/dynamic/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F217073%2F0f0c2cec-62f0-4ec6-b164-23e0a893e311.jpg"}},{type_of:"article",id:550942,title:"👾 Krescent - My experience on participating Github Game Off 2020 Game Jam on Itch.io 👾",description:"😅 Last month I participated in a game jam on https://itch.io with a browser game that I've...",readable_publish_date:"Dec 23 '20",slug:"my-experience-on-participating-github-game-off-2020-game-jam-on-itch-io-4dff",path:"/m3yevn/my-experience-on-participating-github-game-off-2020-game-jam-on-itch-io-4dff",url:"https://dev.to/m3yevn/my-experience-on-participating-github-game-off-2020-game-jam-on-itch-io-4dff",comments_count:0,public_reactions_count:3,collection_id:null,published_timestamp:"2020-12-23T15:06:25Z",positive_reactions_count:3,cover_image:"https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fi%2Fnisypnnl5ktwlvbdx1pp.png",social_image:"https://media2.dev.to/dynamic/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fi%2Fnisypnnl5ktwlvbdx1pp.png",canonical_url:"https://dev.to/m3yevn/my-experience-on-participating-github-game-off-2020-game-jam-on-itch-io-4dff",created_at:"2020-12-23T15:06:25Z",edited_at:"2021-07-10T10:11:19Z",crossposted_at:null,published_at:"2020-12-23T15:06:25Z",last_comment_at:"2020-12-23T15:06:25Z",reading_time_minutes:3,tag_list:"gamedev, vue, babylonjs",tags:["gamedev","vue","babylonjs"],body_html:`<p>😅 Last month I participated in a game jam on <a href="https://itch.io" target="_blank" rel="noopener noreferrer">https://itch.io</a> with a browser game that I've co-developed with my colleague from work. It's called...</p>

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
https://github.com/m3yevn/krescent`,user:{name:"Kevin Moe Myint Myat 👨‍💻",username:"m3yevn",twitter_username:null,github_username:"m3yevn",user_id:217073,website_url:"https://kevinmoemyintmyat.github.io",profile_image:"https://media2.dev.to/dynamic/image/width=640,height=640,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F217073%2F0f0c2cec-62f0-4ec6-b164-23e0a893e311.jpg",profile_image_90:"https://media2.dev.to/dynamic/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F217073%2F0f0c2cec-62f0-4ec6-b164-23e0a893e311.jpg"}},{type_of:"article",id:294121,title:"FTP Seer API + FTP Seer Client Google SEO",description:"My open source project FTP Seer is on Google Search now. Yay!!! 🦄               Background o...",readable_publish_date:"Mar 29 '20",slug:"ftp-seer-api-ftp-seer-client-google-seo-3lf2",path:"/m3yevn/ftp-seer-api-ftp-seer-client-google-seo-3lf2",url:"https://dev.to/m3yevn/ftp-seer-api-ftp-seer-client-google-seo-3lf2",comments_count:0,public_reactions_count:6,collection_id:null,published_timestamp:"2020-03-29T02:13:08Z",positive_reactions_count:6,cover_image:"https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fi%2Fliw75hbrte70vgzwwmhy.png",social_image:"https://media2.dev.to/dynamic/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fi%2Fliw75hbrte70vgzwwmhy.png",canonical_url:"https://dev.to/m3yevn/ftp-seer-api-ftp-seer-client-google-seo-3lf2",created_at:"2020-03-29T01:56:37Z",edited_at:"2020-03-29T02:15:46Z",crossposted_at:null,published_at:"2020-03-29T02:13:08Z",last_comment_at:"2020-03-29T02:13:08Z",reading_time_minutes:2,tag_list:"ftpseer, ftpseerapi, ftpseerclient, seer",tags:["ftpseer","ftpseerapi","ftpseerclient","seer"],body_html:`<h1>
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
`,user:{name:"Kevin Moe Myint Myat 👨‍💻",username:"m3yevn",twitter_username:null,github_username:"m3yevn",user_id:217073,website_url:"https://kevinmoemyintmyat.github.io",profile_image:"https://media2.dev.to/dynamic/image/width=640,height=640,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F217073%2F0f0c2cec-62f0-4ec6-b164-23e0a893e311.jpg",profile_image_90:"https://media2.dev.to/dynamic/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F217073%2F0f0c2cec-62f0-4ec6-b164-23e0a893e311.jpg"}},{type_of:"article",id:267096,title:"FTP Seer - A simple web based FTP file explorer",description:"I've developed a full stack app. 🎉 Yayy!!   If you need a full stack app which can explore F...",readable_publish_date:"Feb 23 '20",slug:"ftp-seer-a-simple-web-based-ftp-file-explorer-1e4m",path:"/m3yevn/ftp-seer-a-simple-web-based-ftp-file-explorer-1e4m",url:"https://dev.to/m3yevn/ftp-seer-a-simple-web-based-ftp-file-explorer-1e4m",comments_count:1,public_reactions_count:8,collection_id:null,published_timestamp:"2020-02-23T13:15:13Z",positive_reactions_count:8,cover_image:"https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fi%2F02zlb2uu47n2zkgd6ge6.png",social_image:"https://media2.dev.to/dynamic/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fi%2F02zlb2uu47n2zkgd6ge6.png",canonical_url:"https://dev.to/m3yevn/ftp-seer-a-simple-web-based-ftp-file-explorer-1e4m",created_at:"2020-02-23T13:15:13Z",edited_at:"2020-02-24T15:13:22Z",crossposted_at:null,published_at:"2020-02-23T13:15:13Z",last_comment_at:"2020-04-01T09:34:11Z",reading_time_minutes:1,tag_list:"node, fullstack, svelte, ftpseer",tags:["node","fullstack","svelte","ftpseer"],body_html:`<h1>
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

`,user:{name:"Kevin Moe Myint Myat 👨‍💻",username:"m3yevn",twitter_username:null,github_username:"m3yevn",user_id:217073,website_url:"https://kevinmoemyintmyat.github.io",profile_image:"https://media2.dev.to/dynamic/image/width=640,height=640,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F217073%2F0f0c2cec-62f0-4ec6-b164-23e0a893e311.jpg",profile_image_90:"https://media2.dev.to/dynamic/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F217073%2F0f0c2cec-62f0-4ec6-b164-23e0a893e311.jpg"}}],Rh=[{kind:"blogger#post",id:"3653068274143975781",blog:{id:"6655808940462000438"},published:"2024-10-26T23:51:00+08:00",updated:"2024-10-26T23:51:53+08:00",url:"http://kevinmoemyintmyat.blogspot.com/2024/10/blog-post_26.html",selfLink:"https://www.googleapis.com/blogger/v3/blogs/6655808940462000438/posts/3653068274143975781",title:"မှတ်မိနေမည် မနီလာ အပိုင်း(၂)",content:`<p><span style="font-size: medium;">&nbsp;မနီလာ မှာ နောက်ထပ်သွားချင် တဲ့နေရာ က ဘီနွန်ဒို (Binondo) ပဲဖြစ်တယ်။ ဘီနွန်ဒိုက မနီလာရဲ့ တရုတ်တန်း ပေါ့၊</span></p><p><span style="font-size: medium;">YouTube ထဲမှာ လည်း တွေ့ဖူးတော့ သွားကြည့်ချင်နေမိတယ်၊</span></p><p><span style="font-size: medium;">ခဏ အနားယူရင်း Google map ကနေ ဘယ်လိုသွားရမလဲ ဆိုတာရှာ ကြည့်တော့ &nbsp;ရောက်နေတဲ့ ဟိုတယ်က <a href="https://en.wikipedia.org/wiki/Guadalupe_Nuevo" target="_blank">ဂွါတာလူပေး</a> လှေဆိပ်(Guadalupe Ferry Station ) နဲ့နီးတယ်၊ နီးတာမှ &nbsp;လမ်းလေး ခဏလျှောက်ရုံပဲ။&nbsp;</span></p><h1 style="text-align: left;">ရေလမ်းခရီး</h1><p><span style="font-size: medium;">ဂွါတာလူပေး ကနေ ဘီနွန်ဒို ကို ရေလမ်း နဲ့ သွားလို့ ရတယ် ဆိုတော့ ပျော် သွားတယ်၊ အရင်လည်း ဘန်ကောက် ခရီး ထွက်တုန်း က အဲ့လို မော်တော်ဘုတ် စီး ပြီး မြို့ ရဲ့ နေရာ တွေကို ကြည့်ရတာ ကြိုက်တဲ့ သူဆိုတော့ လေ…</span></p><div class="separator" style="clear: both; text-align: center;"><a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhpWsQ-w-Houwj57oDeYgr4Duz0BF1euecRXh0fae0IsuNsHWCFKjtDyPgXg5n5V9bc676YY2GLVlMtBFfxTB1vaQxgyS_goBFJVIQEx_BHGdIEtBvi2v48wLMxn9dOK9xXxVQR1ax9qleiWFfR7dhHnP0fUvBBp21_HnFhsFKFi0a4wj-CDKvGbJaVeKNd/s1800/pasig-river.webp" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" data-original-height="1080" data-original-width="1800" height="261" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhpWsQ-w-Houwj57oDeYgr4Duz0BF1euecRXh0fae0IsuNsHWCFKjtDyPgXg5n5V9bc676YY2GLVlMtBFfxTB1vaQxgyS_goBFJVIQEx_BHGdIEtBvi2v48wLMxn9dOK9xXxVQR1ax9qleiWFfR7dhHnP0fUvBBp21_HnFhsFKFi0a4wj-CDKvGbJaVeKNd/w435-h261/pasig-river.webp" width="435" /></a></div><div class="separator" style="clear: both; text-align: center;">Pic: Guadalupe Ferry Station, Pasig River</div><br /><p><br /></p><p><br /></p><p><span style="font-size: medium;">အဲဒါ နဲ့ ပဲ ဂွါတာလူပေး လှေဆိပ် ဘက်ကို ငါးမိနစ် လောက် လျှောက် လာခဲ့တယ်၊ ဂွါတာလူပေး လှေဆိပ်… ပစစ် (Pasig) မြစ်နား ရောက်တာ နဲ့ အနံ့တစ်မျိုး ရလာတယ်၊ “ဘာနံ့ကြီးလဲဟ .. what’s that smell? “ လို့ တွေး လိုက် မိတယ် ..</span></p><p><span style="font-size: medium;"><br /></span></p><p><span style="font-size: medium;">နောက်မှ တွေ့တာ က ပစစ် မြစ်ဟာ အရမ်း ကို ညစ်ပတ်နေပြီး အဲ့ထဲက နေ ရေဆိုးနံ့ လှိုင် လှိုင် ထ နေတာ ပါပဲ.. ရေတွေ ဟာ မည်းညစ်ပြီး အမှိုက်တွေလည်း များတယ်… မသိရင် မြောင်းကြီး လိုပေါ့၊ ဒါပေမယ့် ကျယ်နေတာ တစ်ခုပဲ…</span></p><p><span style="font-size: medium;">အနံ့မခံနိုင် လို့ နှာရှုံ့ရင်း station ထဲ ခပ်သုတ်သုတ် ဝင်လိုက်တယ်၊ နောက် မော်တော်ဘုတ် ထွက်မယ့် အနီးဆုံး အချိန်ကို ယူလိုက် ပြီး ကျသင့်ငွေ မေးလိုက်တယ်.. သူတို့က ရယ်ကြတယ်.. ဒီ ရေယာဉ် က အခမဲ့တဲ့ …&nbsp;</span></p><p><span style="font-size: medium;"><br /></span></p><p><span style="font-size: medium;">နောက်လာ မယ့် ဘုတ်က နာရီဝက် လောက်လိုသေးတာရယ် ဗိုက်ဆာလာ တာရယ်ကြောင့် station က ထွက်လာပြီးတော့ စားစရာ လိုက်ရှာကြည့် ဖြစ်တယ်။ ဂွါတာလူပေး နေရာ ဟာ အခြေခံလူတန်းစား နေတာ ဖြစ်မယ်၊ အနီးအနား ဘာ စားစရာ မှ map က ထောက် မရဘူး၊ JollyBee တောင် မရှိဘူးပေါ့ ကုန်ကုန်ပြောရင်..&nbsp;</span></p><p><span style="font-size: medium;"><br /></span></p><p><span style="font-size: medium;">အဲဒါနဲ့ ထပ်ရှာတော့ အစိုဈေးကြီး တစ်ခုတော့ အနီးအနားမှာ ရှိတာ သတိထားမိသွားတယ်၊ အဲဒါနဲ့ အစိုဈေး ဘက်တက် ပြီး လျှောက်ရှာတော့ ပီဇာကို ပိုင်းပြီး ရောင်းနေတဲ့ ဆိုင် လေးတွေ့ တယ်၊ ဗိုက်ဆာတာနဲ့ အဲ့ က ပီဇာ တစ်ပိုင်း ရယ် ဘေးနား ဆိုင် က စရိုးမိုင်(ဝက်သားပေါင်း) &nbsp;(Siomai) သုံးတုံးလောက် ဝယ်စားလိုက်တယ်… ကျတဲ့ ပီစို့ (Peso) ငွေကို စလုံးဒေါ်လာ နဲ့ တွက် ကြည့် လိုက်တော့ ၁ ဒေါ်လာ သာသာ ပဲရှိတာ သိလိုက်ရတယ်…</span></p><div class="separator" style="clear: both; text-align: center;"><a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiufpRGCO16b-q35hb7QQ9ZVilOoYlGD0QPys2h8IybatsTx3WLlX4RkktFBqCkxaDt1e_KqLCA-sXqh6RCZTsdybrw0GtReWmD7iA5IIaE0p8VFZV_apC8ezWdt5Gu8BIqaShzWIN-WyUncvA9L3Vd_F182rZZNd_E33WulvLyiHhG3WHK1yBgy82aqjso/s4080/below-a-dollar-pizza.jpg" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" data-original-height="4080" data-original-width="3060" height="471" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiufpRGCO16b-q35hb7QQ9ZVilOoYlGD0QPys2h8IybatsTx3WLlX4RkktFBqCkxaDt1e_KqLCA-sXqh6RCZTsdybrw0GtReWmD7iA5IIaE0p8VFZV_apC8ezWdt5Gu8BIqaShzWIN-WyUncvA9L3Vd_F182rZZNd_E33WulvLyiHhG3WHK1yBgy82aqjso/w353-h471/below-a-dollar-pizza.jpg" width="353" /></a></div><div class="separator" style="clear: both; text-align: center;">Pic: Street Food Pizza</div><br /><p><br /></p><p><span style="font-size: medium;">ပီဇာ က မဆိုးပါဘူး၊ အသားတွေလည်း ပါပြီး ပီဇာ အရသာ လည်း ထွက်တယ်၊ စရိုးမိုင် ဆိုရင် လည်း စားကောင်းတယ် ..</span></p><p><span style="font-size: medium;">လမ်းဘေးစာ စားပြီးတော့ ဟိုနားဒီနား လျှောက်ရင်း နာရီဝက်ဟာ ခဏ လေး နဲ့ကုန် သွားတယ်.. လှေဆိပ်ပြန်ရောက်တော့ မော်တော်ဘုတ် ရောက်တာနဲ့ ကွက်တိ..&nbsp;</span></p><h1 style="text-align: left;">ငရဲခန်းသာသာ</h1><div><span style="font-size: medium;">မော်တော်ဘုတ်ပေါ် ရောက်တော့ အနံ့ဟာ ပိုဆိုးလာတယ်၊ ပိုပြင်းလာတယ်.. ဖြစ်နေတာက မနီလာက နေအရမ်းပူ လေအရမ်းပူတော့ အဲ့ အပူနဲ့ မြစ်ထဲက ရေပုပ်တွေက အငွေ့ပျံပြီ အရမ်း အနံ့ပြင်းနေတာ တစ်ခုပဲ၊ ဘုတ်ထဲ ကြည့်တော့ နိုင်ငံခြားသား ဆိုတာ ကိုယ် တစ်ယောက်တည်း ရှိမယ်၊ ကျန်တဲ့ သူတွေ ကို ကြည့် တော့ အခြေခံလူတန်းစား ပုံစံ တွေ များနေတယ်…</span></div><div><span style="font-size: medium;"><br /></span></div><div><span style="font-size: medium;"><br /></span></div><div><span style="font-size: medium;">ဒီလိုနဲ့ လူက ပင်ပန်းနေတာနဲ့ အိပ်မောကျချင်လာတယ်.. ဒါပေမယ့် မြစ်ရဲ့ ရေဆိုးနံ့က နှာခေါင်းကို မကြာခဏ လာ ရိုက်နေပြီး နေက လည်း နေ့လည် ၂နာရီ အရမ်း ပူပြီး “ပူလည်း ပူ၊ နံလည်းနံ” နဲ့ ဖြတ်သန်းလာတာ၊ ၁ နာရီ လောက်ကြာသွားတယ်၊ ကြားမှာလည်း station တစ်ချို့ ဖြတ်တာပေါ့၊&nbsp;</span></div><div><span style="font-size: medium;"><br /></span></div><div><span style="font-size: medium;">ဒီမှာ တစ်ချက် ဘန်ကောက်နဲ့ နှိုင်းယှဉ် ပါရစေ ၊ ဘန်ကောက် ရဲ့ ကျောက် ဖုရားမြစ် က ကျယ်လည်း ကျယ် အရမ်း လည်း မညစ် ၊ နိုင်ငံခြားသားပါ ခေါ်စီး လို့ရအောင် ထိန်းသိမ်းထား တဲ့မြစ်ဖြစ်တယ်.. အစ က ပစစ်မြစ် ကိုလည်း အဲ့လိုပဲ ထင်ပေမယ့် <a href="https://en.wikipedia.org/wiki/Pollution_of_the_Pasig_River" target="_blank">ပစစ်မြစ် ဟာ တော်တော် polluted</a> ဖြစ်နေပါပြီ…</span></div><div><span style="font-size: medium;"><br /></span></div><div style="text-align: left;"><span style="font-size: medium;">ဒီလိုနဲ့ နောက် ခဏ ဆက် သွားတဲ့ အခါမှာ အနံ့များ ရုတ်တရက် ပျောက် သွားပြီး ရေ ဟာ လည်း ကြည်လာပါတယ်.. ရှုခင်း တွေလည်း လှလာပြီး တကယ်ကို ခုန ၁၅ မိနစ်လောက် က မြစ်နဲ့ ကွာခြားသွားပါတယ်၊.. ပြီးတော့ မြစ်ဘေးမှာ လည်း တော်တော်လှ တဲ့ အဆောက်အဦး အိမ်လေး တွေ တွေ့ရတယ်.. ဘယ်လိုဖြစ်တာလဲ တွေးမိပြီး Google map မှာ ရှာကြည့်တော့ မလကာနာင်းအ် နန်းတော် (<b style="background-color: white; color: #202122; font-family: sans-serif;">Malacañang Palace</b>) ဖြစ်နေတာကို သိလိုက်ရတယ်။&nbsp;</span></div><div class="separator" style="clear: both; text-align: center;"><a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi32360hMN4RFrjO7M-H-Y2h0tFUAERPms9Ho0G64z5XsyrLOkCzdnUwnoHn0A-q06fAGqWX9pUpVAiADbSURJnHmU3LNHfXo5m-6pkkwqum5mXh0G55s1vgxI4j4GFjeIzwAvuec1oobJ6P73SOcig0m3bWd8pbxucIFStZdCNxT-yzB9NbDzYhIu0q36m/s799/malacanang-palace.jpg" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" data-original-height="533" data-original-width="799" height="324" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi32360hMN4RFrjO7M-H-Y2h0tFUAERPms9Ho0G64z5XsyrLOkCzdnUwnoHn0A-q06fAGqWX9pUpVAiADbSURJnHmU3LNHfXo5m-6pkkwqum5mXh0G55s1vgxI4j4GFjeIzwAvuec1oobJ6P73SOcig0m3bWd8pbxucIFStZdCNxT-yzB9NbDzYhIu0q36m/w486-h324/malacanang-palace.jpg" width="486" /></a></div><div class="separator" style="clear: both; text-align: center;">Pic:&nbsp;<span style="background-color: white; color: #202122; font-family: sans-serif; font-size: 16px; text-align: left;">Malacañang Palace View from Pasig River</span></div><br /><div style="text-align: left;"><br /></div><div style="text-align: left;"><br /></div><div style="text-align: left;"><span style="font-size: medium;">မလကာနာင်းအ် နန်းတော် က ဖိလစ်ပင် အစိုးရ ရုံးထိုင်တဲ့နေရာပေါ့၊ ဒီလိုနဲ့ နောက် နှစ်မှတ်တိုင် လောက်ရောက် တော့ အက်စကော်တာ လှေဆိပ် (Escolta Rivera ferry station) ဆီရောက် ခဲ့တော့တယ်…ဒီနေရာက ဘီနွန်ဒိုကို ဝင်ရမှာလေ…</span></div><div style="text-align: left;"><br /></div><h1 style="text-align: left;">&nbsp;နှစ်၄၀၀ ကျော် တရုတ်တန်း&nbsp;</h1><div><span style="font-size: medium;">ဒီလိုနဲ့ <a href="https://en.wikipedia.org/wiki/Chinatown#:~:text=Binondo%20in%20Manila%2C%20established%20in,as%20the%20world's%20oldest%20Chinatown." target="_blank">ကမ္ဘာ့ ရှေးအကျဆုံး တရုတ်တန်း ဘီနွန်ဒို</a>ကို &nbsp;ရောက်လာခဲ့တော့တယ်၊ မြန်မာက တရုတ်တန်းနဲ့ တူလွန်းလို့ တော်တော် အံ့အားသင့်ခဲ့ရတယ်။ ရှေးခေတ် ကိုလိုနီခေတ် အဆောက် အအုံ တွေ ရဲ့ အောက်လေးတွေ</span></div><div style="text-align: left;"><span style="font-size: medium;">မှာ ဆိုင် လေးတွေ လုပ်ထားပြီး သံထည် ပစ္စည်း၊ ကုန်စုံ၊ ကြေးထည်. .. အစရှိတဲ့ hardware မျိုးစုံကို ရောင်းချကြပါတယ်၊</span></div><div class="separator" style="clear: both; text-align: center;"><a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiXK6-K8fl4VH4zLgj7B0lxkeCMtaNJWGJrtrFFlGJD6jy1307oNOEVPQeJ02_-1U42hM_LqyhbcajjiyV8rvx1Jhr8gobpxQZ1zaUPJ4YT3qgiOCLktkDMijuWy3lTAHkMdWoZ-1DPhw1qvTu58F1Ac2Oz3nsFV3ry5YtRanmO4vHqnrxGbJWmwH4mHFyo/s3408/binondo-and-me.jpg" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" data-original-height="3408" data-original-width="3408" height="484" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiXK6-K8fl4VH4zLgj7B0lxkeCMtaNJWGJrtrFFlGJD6jy1307oNOEVPQeJ02_-1U42hM_LqyhbcajjiyV8rvx1Jhr8gobpxQZ1zaUPJ4YT3qgiOCLktkDMijuWy3lTAHkMdWoZ-1DPhw1qvTu58F1Ac2Oz3nsFV3ry5YtRanmO4vHqnrxGbJWmwH4mHFyo/w484-h484/binondo-and-me.jpg" width="484" /></a></div><div class="separator" style="clear: both; text-align: center;">Pic: Filipino-Chinese Friendship Arch@ Binondo</div><br /><div style="text-align: left;"><br /></div><div style="text-align: left;"><br /></div><div style="text-align: left;"><span style="font-size: medium;">တရုတ် အစားအသောက် မျိုးစုံဖြစ်တဲ့ ချားစူး (Char Siew) ၊ ဒင်မ်စမ်း (Dim Sum) ၊ ဖက်ထုပ် (Jiao zi) ၊ ဘဲကင် (Kao Ya) ၊ လားမြန့် (La Mian) စတာတွေကို ရောင်းချကြတယ်..</span></div><div style="text-align: left;"><span style="font-size: medium;"><br /></span></div><div style="text-align: left;"><span style="font-size: medium;">ဘီနွန်ဒိုရဲ့ အချက်အချာ နေရာကတော့ Lucky Chinatown Mall ကြီးပဲဖြစ်ပါတယ်၊ ဒီနေရာကို online မှာ တွေ့ဖူးတာကတော့ တရုတ်နှစ်သစ်ကူး ဆိုရင် အရမ်းကိုပဲ စည်ကားပြီး တော့ decoration တွေလည်း အရမ်းလှတယ်ဆိုတာပါပဲ။</span></div><div style="text-align: left;"><span style="font-size: medium;"><br /></span></div><div style="text-align: left;"><span style="font-size: medium;">Lucky Mall ထဲမှာ လျှောက်သွား စားစရာတွေ စားပြီး ဘယ်မှ လည် စရာမရှိတော့တာမို့လို့ တရုတ်တန်းက နေ ရွေ့ဖို့ပြင်လိုက်တယ်။ ဒီနေ့မှာတော့ င်္အတ္တရာမူရို့စ် (Intramuros) စပိန်လက်ထပ် ဖိလစ်ပင်း မြို့တော်ဟောင်း ကို သွားကြည့်မို့ပေါ့၊ <a href="https://kevinmoemyintmyat.blogspot.com/2024/10/blog-post.html" target="_blank">အရင်နေ့က</a> မြင်းလှည်းသမား လိုက်ပို့ မယ်ဆိုတဲ့ နေရာပါ။</span></div><div style="text-align: left;"><span style="font-size: medium;"><br /></span></div><div style="text-align: left;"><span style="font-size: medium;">ဒီတစ်ခါတော့ တရုတ်တန်းကနေ တက္ကစီ စီး မယ့် အစား ဆိုဒ်တွဲ pedicab စီးလိုက်တယ်။ အတွေ့အကြုံ တစ်မျိုးပေါ့၊ ဆိုဒ်တွဲ က လက်လုပ် ဂဟေနဲ့ ဆိုက်ကယ်ကို တွဲထားပြီး လှုပ်လီလှုပ်လှည့် နဲ့ ဖြစ်နေပြီး အရှိန်တင်လိုက်တဲ့ အခါတွေ အကွေ့တွေမှာ ပြုတ်သွားမလား စိုးရိမ်စရာ၊ ဒါပေမယ့် ဆိုဒ်တွဲ ရဲ့ မျက်နှာကြက်မှာ ယေရှု ပုံတွေ့လိုက်တယ် ၊ Jesus is with me ဆိုပြီး ကြောက်စိတ်များ ပျောက်သွားတော့ တယ်&nbsp;</span></div><div style="text-align: left;"><br /></div><h1 style="text-align: left;">ရှေးဟောင်းမြို့တော်</h1><div style="text-align: left;"><span style="font-size: medium;">Intramuros ရောက်တော့ စင်တီယားဂိုး ခံတပ် (Fort Santiago) နဲ့ မနီလာ ဘုရားကျောင်း (Manila Cathedral) (အရှည် ) ဟာ မျက်နှာချင်းဆိုင်ပဲ ရှိနေတယ်။ ညနေစောင်းလာပြီ ဆိုတော့ စင်တီယားဂိုး ခံတပ် ပိတ်ခါနီးနေပြီ အဲဒါနဲ့ ပဲ အဲ့ကို အရင်သွားဖြစ်တယ်။ အထဲမှာ စပိန်လက်ထက် အဆောက်အဦး အဟောင်းတွေ ရှိပြီး ဖိလစ်ပိုင်နိုင်ငံ ရဲ့ <a href="https://en.wikipedia.org/wiki/Jos%C3%A9_Rizal" target="_blank">နိုင်ငံ့ အာဇာနည် ဖြစ်တဲ့ ဟိုစေးရစ်ဇယ်</a> (José Rizal ) ရဲ့ မတရားအကျဉ်းချခံရပြီးနောက်ပိုင်း သူ့ရဲ့ နောက်ဆုံးနေ့ အထိသမိုင်းတွေကို ပြတိုက်ငယ်လို လုပ်ပြီးပြထားတယ်။&nbsp;</span></div><div style="text-align: left;"><span face="-apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, Inter, Helvetica, Arial, sans-serif" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0.2); caret-color: rgb(32, 33, 34); color: #202122; font-size: 17px;"><br /></span></div><div style="text-align: left;"><div class="separator" style="clear: both; text-align: center;"><a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg-gagIDQBbm8WWZGDtagYE0UwcZvCmgWTrMeRAoZiKDpJ1pw9iAR9w8OPiPV8F9waRH3pkopyrh2kM2oVd1MX19vfdYTp_Jfu4RLGvn4N-NCPiFGmCOec6Ix9gzrNj3KrKSK1ZHX7NDsctn_wDX8hKp99JdgvCckM6r4I8pEx-zpEzJJag-mrpvC_QA4-H/s945/infront-of-fort-santiago.jpg" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" data-original-height="945" data-original-width="709" height="479" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg-gagIDQBbm8WWZGDtagYE0UwcZvCmgWTrMeRAoZiKDpJ1pw9iAR9w8OPiPV8F9waRH3pkopyrh2kM2oVd1MX19vfdYTp_Jfu4RLGvn4N-NCPiFGmCOec6Ix9gzrNj3KrKSK1ZHX7NDsctn_wDX8hKp99JdgvCckM6r4I8pEx-zpEzJJag-mrpvC_QA4-H/w359-h479/infront-of-fort-santiago.jpg" width="359" /></a></div><div class="separator" style="clear: both; text-align: center;">Pic: Fort Santiago Ornate Gate (453 years old)</div><p style="text-align: left;"><br /></p></div><div style="text-align: left;"><br /></div><div style="text-align: left;"><br /></div><div style="text-align: left;"><span style="font-family: arial; font-size: medium;">နောက်တော့ ခံတပ် ရဲ့ တခြား တစ်ဖက် မှာ ကတုပ်ကျင်း တစ်ခု လည်း ရှိတယ်၊ အဲ့ထဲမှာ ဒုတိယ ကမ္ဘာစစ် လက်ထက် ဂျပန် တွေ ဝင်သိမ်း တုန်းက <a href="https://en.wikipedia.org/wiki/Manila_massacre" target="_blank">လူ အမြောက်အများ သတ် ခဲ့တဲ့ အကြောင်း</a>တွေကို ရုပ်ထု တွေ ပန်းချီ တွေ နဲ့ ပြထား တယ်။ ကျွန်တော် လည်း အဲ့ ကတုပ်ကျင်း တစ်ပတ်ကြည့် ပြီး မွန်းလာတာ နဲ့ မြစ်ကမ်း နားသွား ပြီး လေညင်းခဏ ခံ အမော ဖြေ လိုက်ပါတယ်.. ဒီနေရာမှာ တော့ မြစ် က ကျယ်ပြီး ရေဟာလည်း ဂွါတာလူပေးလို အနံ့အသက် မရှိပဲ ညနေစောင်း လေလေး တိုက်ပြီး တစ်မျိုးလှနေလေရဲ့.</span></div><p style="text-align: left;"><br /></p><div style="text-align: left;"><span face="-apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, Inter, Helvetica, Arial, sans-serif" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0.2); caret-color: rgb(32, 33, 34); color: #202122; font-size: 17px;"><br /></span></div><div style="text-align: left;"><span face="-apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, Inter, Helvetica, Arial, sans-serif" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0.2); caret-color: rgb(32, 33, 34); color: #202122; font-size: 17px;"><br /></span></div><div style="text-align: left;"><br /></div><div style="text-align: left;"><span face="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Inter, Helvetica, Arial, sans-serif" style="color: #202122;"><div class="separator" style="clear: both; text-align: center;"><a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjM2laULRckldi88OzAr_g1FVgjG6PE4Ane7_XtDoiejxwBLSx9YpPmLopyZOSWtg3V_D0YO9ayIu4GpLs0lKNSaR7k8YMZwIpXzv2ZqIXODk-k0SGMorztSfHSYeWtnD-UT5xdNuDx7bXDQEjHDtLwnnwBcVluDjn3vr15RvKHPfHmJX7QcGvNAqtilKuz/s612/fort-santiago-river-view.jpg" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" data-original-height="408" data-original-width="612" height="345" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjM2laULRckldi88OzAr_g1FVgjG6PE4Ane7_XtDoiejxwBLSx9YpPmLopyZOSWtg3V_D0YO9ayIu4GpLs0lKNSaR7k8YMZwIpXzv2ZqIXODk-k0SGMorztSfHSYeWtnD-UT5xdNuDx7bXDQEjHDtLwnnwBcVluDjn3vr15RvKHPfHmJX7QcGvNAqtilKuz/w518-h345/fort-santiago-river-view.jpg" width="518" /></a></div><div class="separator" style="clear: both; text-align: center;">Pic: Pasig River view from Furthest most corner of Fort Santiago</div><div style="text-align: left;"><span face="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Inter, Helvetica, Arial, sans-serif" style="color: #202122;"><br /></span></div><div style="text-align: left;"><span face="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Inter, Helvetica, Arial, sans-serif" style="color: #202122;"><br /></span></div></span><p style="text-align: left;"><br /></p><p style="text-align: left;"><span face="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Inter, Helvetica, Arial, sans-serif"><span style="caret-color: rgb(32, 33, 34); font-size: 17px;">ခံတပ်က ပိတ်ခါနီးဖြစ်လာတော့ လူတွေလည်း ဆိပ်လာတာနဲ့&nbsp; အပြင်ပြန်ထွက်လာလိုက်တယ်။ ရှေ့ဘက် က မနီလာ ဘုရားကျောင်းကို ဝင်ကြည့်ချင်ပေမယ့် ဘုရား ကျောင်း ဟာလည်း ပိတ်နေပြီ..ဓါတ်ပုံဘာညာရိုက်ပြီး တော့ ဆက်ပြီး Intramuros ထဲ လျှောက် ကြည့်မိတယ်။ ဘုရားကျောင်းရဲ့ အနောက်ဘက် မှာ ဘုရားကျောင်း အမြင့်နဲ့ မတိမ်းမယိမ်း rooftop စားသောက်ဆိုင်လေး တွေ့တာနဲ့ အစာပြေ လေးစားခဲ့တယ်။ ဆိုင်နာမည်က La Cathedral လို့ ခေါ်ပြီး ဘုရားကျောင်းကြီး ရဲ့ မြင်ကွင်းကို အကျအနမြင်ရပြီး ရိုမန်းတစ် လည်း ဖြစ်တဲ့ နေရာ လေး တစ်ခုပါ။</span></span></p><span face="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Inter, Helvetica, Arial, sans-serif" style="color: #202122;"><span style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0.2); caret-color: rgb(32, 33, 34); font-size: 17px;"><br /></span></span></div><div style="text-align: left;"><br /></div><div style="text-align: left;"><span face="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Inter, Helvetica, Arial, sans-serif" style="color: #202122;"><span style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0.2); caret-color: rgb(32, 33, 34); font-size: 17px;"><br /></span></span></div><div style="text-align: left;"><span face="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Inter, Helvetica, Arial, sans-serif" style="color: #202122;"><div class="separator" style="clear: both; text-align: center;"><a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgjtiYLO2Cb0S2Dm9oqMYqUQc-HammE6X3DnsfS2z0-IZPKzxBNIqrLzP7KzsllpVEejej0j7eg0ova4Y-1MpYjQqGxI1PIXtALNjQzf6kXZmMArUEsiIdn6NBIQTYTlmhc0yL09SZR1uCL2hhdr04j4jH3q6KM0Xl7tcJK9Z75RyABWgVuTVimrzHunRkX/s960/la-cathedral.jpg" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" data-original-height="960" data-original-width="720" height="465" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgjtiYLO2Cb0S2Dm9oqMYqUQc-HammE6X3DnsfS2z0-IZPKzxBNIqrLzP7KzsllpVEejej0j7eg0ova4Y-1MpYjQqGxI1PIXtALNjQzf6kXZmMArUEsiIdn6NBIQTYTlmhc0yL09SZR1uCL2hhdr04j4jH3q6KM0Xl7tcJK9Z75RyABWgVuTVimrzHunRkX/w349-h465/la-cathedral.jpg" width="349" /></a></div><div class="separator" style="clear: both; text-align: center;">Pic: View from La Cathedral</div><br /></span></div><div style="text-align: left;"><p><br /></p><p><span style="font-family: arial; font-size: medium;">စားသောက်ပြီးနောက်တော့ Intramuros ရဲ့ အဆုံးထိ လျှောက်ပြီး ပရဝုန် ထဲက ထွက်လာလိုက်တယ်.. ခရီးစဉ် တောက်လျှောက် လမ်းလျှောက် တာတွေများ ပြီး လူက ပင်ပန်းနေတာနဲ့ အနှိပ်ခံ ဖို့ ရှာဖွေကြည့်တယ်၊ ဟိုတယ်နဲ့ မနီးမဝေး နေရာ နားမှာ review ကောင်း ကောင်း တွေ့တာနဲ့ အဲ့ နားကို ဆိုက်ကယ်ငှါးဖြစ်ပါတယ်။&nbsp;</span></p><p><span style="font-family: arial; font-size: medium;">ဒီမှာ တစ်ခု ပြောစရာရှိတာက Grab က ဖိလစ်ပိုင်မှာ GrabBike မရှိပါဘူး၊ <a href="https://www.grab.com/sg/inside-grab/stories/move-it-motorcycle-taxis/" target="_blank">Move It လို့ အမည်ရတဲ့ Strategic Partner</a> တစ်ခုက ကြီးစိုးပါတယ်။ ဒီလိုနဲ့ Move It တစ်ကြောင်းငှါးပြီး ည၈နာရီလောက် မကာတီ ဘက်ကို ပြန်ရောက်ခဲ့ပါတယ်။</span></p><p><span style="font-family: arial; font-size: medium;">အနှိပ်ခန်းမှာ တစ်နာရီ ယူလိုက် ပြီး အနားယူလိုက်ပါတယ်.. ဖိလစ်ပိုင် ရဲ့ နှိပ်ပုံက ထိုင်းအနှိပ်လို ကြမ်းကြမ်းရမ်းရမ်း သိပ်မရှိဘူး .. ညင်သာပြီး ဇိမ်ရှိလှတယ်… ကျွန်တော်လည်း မျက်လုံးများ မှေးစင်း လာပြီး အနှိပ်ခံရင်း အိပ်ပျော်သွားပါတော့တယ် …</span></p><p><span style="font-family: arial; font-size: medium;">မျက်လုံးပြန်ဖွင့်လိုက်တော့ အနှိပ်သည်လည်း မရှိတော့။ အချိန်ကို ကြည့်လိုက်တော့ ၁၁:၃၀ လောက်ဖြစ်နေလေပြီ။ ဒီလိုနဲ့ ထွက်လာတော့ အနှိပ်သည်တွေက အိပ်မောကျနေတာမို့လို့ အားနာ လို့ မနှိုးတာလို့ ပြောပါတယ်။ ကျွန်တော်ထွက်လာတော့ သူတို့ က “Thank you , Po” ဆိုပြီး နှုတ်ဆက်ကြပါတယ်..ကျွန်တော့် ကို ကွန်ဖူးပန်ဒါလို့ ပြောတာ မဟုတ်ပါဘူးနော်.. ဖိလစ်ပင်း ရိုးရာ ဓလေ့မှာ အသက်ကြီး သူ၊&nbsp; ဝါကြီးသူ ၊ ကာစတန်မာ တွေကို အနောက် က “ပို” ဆိုပြီး တပ်ပြော ကြပါတယ်။ ထိုင်းရဲ့ “ခပ် / ခရပ်” ဒါမှမဟုတ် ကျွန်တော်တို့ မြန်မာ ရဲ့ “ခင်ဗျာ/ ရှင်” နဲ့ သွားတူပါတယ်။</span></p><p><span style="font-family: arial; font-size: medium;">ကျွန်တော် ထွက်လာတော့ ဗိုက်ကအတော် ဆာနေပြီ၊ La Cathedral မှာ လည်း အနည်း ငယ်ပဲ စား ထားပြီး အချိန်က လည်း အတော်ကြာ သွားပြီ လေ။ အဲဒါနဲ့ ညလည်စာ ဟော့ပေါ့ စားချင်စိတ်ဖြစ်လာတယ်။ အဲ့ နေရာနား မှာ လည်း ၂၄ နာရီ ဟော့ပေါ့ ဆိုင် တွေ ရှိတာ နဲ့ ဝင်ကြည့် ဖြစ်ခဲ့တယ်။&nbsp;</span></p><p><span style="font-family: arial; font-size: medium;">ဟော့ပေါ့ ဆိုင်တွေက အဆာ ပလာ စားစရာတွေလည်း စုံပြီး ဈေးလည်း ချိုတယ်… စိတ်ကျေနပ်လောက် အောင် ဘူဖေး မှာ စားလိုက်ပြီး အချိန်က ၂ နာရီ နီးပါးဖြစ်ပြီ။</span></p><p><br /></p></div><div style="text-align: left;"><span style="color: #202122;"><div class="separator" style="clear: both; text-align: center;"><a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEioa3vT05CJ7k4ZTIKGcF1bz_otwc4q0YHmxGDEdEsmyThNJEmNXsmIaQpKhMhnk6liXoSKT0OKaQE8Cck85v4K6L84vbZWDrUqKclRvNuCH_CXKUtAMzfpPHw3wq0b2_2hJQGmB9maS4st6B0labongpDnpEiqGYTvJsG8xWztHr9kxrP8rSTm7t71faI8/s3060/buffet-hotpot.jpg" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" data-original-height="3060" data-original-width="2679" height="440" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEioa3vT05CJ7k4ZTIKGcF1bz_otwc4q0YHmxGDEdEsmyThNJEmNXsmIaQpKhMhnk6liXoSKT0OKaQE8Cck85v4K6L84vbZWDrUqKclRvNuCH_CXKUtAMzfpPHw3wq0b2_2hJQGmB9maS4st6B0labongpDnpEiqGYTvJsG8xWztHr9kxrP8rSTm7t71faI8/w385-h440/buffet-hotpot.jpg" width="385" /></a></div><div class="separator" style="clear: both; text-align: center;">Pic: A hearty supper to call it a night</div><div class="separator" style="clear: both; text-align: center;"><br /></div><div class="separator" style="clear: both; text-align: center;"><br /></div></span></div><h1 style="text-align: left;">တစ်ညတာပြီးဆုံး</h1><div style="text-align: left;"><div><span style="font-family: arial; font-size: medium;"><br /></span></div><div><span style="font-family: arial; font-size: medium;">ဆိုက်ကယ် ထပ် ခေါ် လိုက် ပြီး ဟိုတယ် ကို ပြန်ရောက် လာခဲ့တယ်။ ညောင်း လည်း ညောင်း၊ နှိပ်ထားတော့ relax လည်း ဖြစ် ၊ ဗိုက် လည်း ကားကား နဲ့&nbsp; အဲကွန်း တော်တော် အေးတဲ့ ဟိုတယ် ခန်းထဲမှာ စောင်ထူထူ ကို ခြုံပြီး ကျွန်တော် ဟာ အိပ်မက် ကမ္ဘာ ထဲကို လှစ်ခနဲ ရောက်ရှိသွားပါတော့တယ် ..&nbsp;</span></div><div><span style="font-family: arial; font-size: medium;">မနက် နိုးလာတော့ ဟိုတယ် အပေါ်ဆုံးထပ် က ရေကူးကန် အသေးလေးမှာ နေမပူခင်ရေ စိမ် ၊ ရေချိုးပြီး မပြန်ခင် နောက် ဆုံး တစ်နေ့နဲ့ တစ်ညကို ဘယ် လို ဖြတ်သန်း မလဲ ပြင် ဆင် နေမိတယ်။ ကျွန်တော် ဘယ်တွေ သွားရမလဲ ဆိုတာ ခေါင်းထဲ မှာ သေချာ သိပါတယ်.. အဝတ်အစား လဲ လိုက် ပြီး&nbsp; အပြင် ခဏ ထွက် ကြည့်လိုက်တယ်။ နေဟာ အသား ကို ကင်နေတယ်။ ဆိုက် ကယ် မစီးသင့် ဘူး ထင်ပြီး&nbsp; ကားပဲငှါး လိုက်တယ်.. ကျွန်တော် သွားမယ့် နောက် နေရာ က</span></div></div><div style="text-align: left;"><br /></div><div style="text-align: left;"><h1><br /></h1><h1 style="text-align: left;"><span style="font-family: arial;">ဆက်ရန်&nbsp;</span></h1></div><div style="text-align: left;"><span face="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Inter, Helvetica, Arial, sans-serif" style="color: #202122;"><span style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0.2); caret-color: rgb(32, 33, 34); font-size: 17px;"><br /></span></span></div><div style="text-align: left;"><br /></div><div style="text-align: left;"><br /></div><div style="text-align: left;"><br /></div><div style="text-align: left;"><br /></div><div style="text-align: left;"><br /></div><p><br /></p><p><br /></p><p><br /></p>`,author:{id:"17827604690472162137",displayName:"Kevin Moe Myint Myat",url:"https://www.blogger.com/profile/17827604690472162137",image:{url:"//1.bp.blogspot.com/-tWz6Nv-7axE/ZxDB4KLiNvI/AAAAAAAAAh0/QERnGiTgB0gvb7R75uu_DWOCwToSNHL3QCK4BGAYYCw/s35/me-bali.jpg"}},replies:{totalItems:"0",selfLink:"https://www.googleapis.com/blogger/v3/blogs/6655808940462000438/posts/3653068274143975781/comments"},labels:["manila","manila memories","part-2","part-two","travel"],etag:'"dGltZXN0YW1wOiAxNzI5OTU3OTEzMTY4Cm9mZnNldDogMjg4MDAwMDAK"'},{kind:"blogger#post",id:"3975425417229776902",blog:{id:"6655808940462000438"},published:"2024-10-17T12:04:00+08:00",updated:"2024-10-17T17:31:31+08:00",url:"http://kevinmoemyintmyat.blogspot.com/2024/10/blog-post.html",selfLink:"https://www.googleapis.com/blogger/v3/blogs/6655808940462000438/posts/3975425417229776902",title:"မှတ်မိနေမည် မနီလာ အပိုင်း(၁)",content:`<p>&nbsp;မနီလာကို ကျွန်တော် စိတ်ထဲစရှိတဲ့ အချိန်က ၂၀၂၃ခုနှစ် ဩဂုတ်လနှောင်းပိုင်း…</p><p>အမှတ်မမှားဘူးဆိုရင် မနီလာ အကြောင်း မသိခင်တည်းက မနီလာ အကြောင်း အိပ်မက် ၃-၄ ခေါက် မက်ခဲ့လိမ့်မယ်ထင်တယ်။</p><p>မနီလာ ဆိုတာ အမျိုးသမီး တစ်ယောက် မဟုတ်ပါဘူးနော်.. ကျွန်တော် ပြောမယ့် မနီလာ ဆိုတာ ဖိလစ်ပိုင် နိုင်ငံရဲ့ မြို့တော် လည်း ဖြစ် စီးပွါးရေး အချက်အချာ လည်း ဖြစ်တဲ့ မတ်ထရို မနီလာ (Metro Manila) အကြောင်းပဲ ဖြစ်ပါတယ်။&nbsp;</p><br /><p><br /></p><h2 style="text-align: left;"><span style="font-size: x-large;"><b>အိပ်မက်များအကြောင်း</b></span></h2><p>ကျွန်တော့် အထင်တော့ YouTube ကစတာဖြစ်လိမ့်မယ်။ YouTube မှာ Manila Walking Tours၊ Mark Wiens ရဲ့ Manila Street Food Tour တွေ ပေါ်ပေါ်နေတော့ ကျွန်တော့် အိပ်မက်ထဲမှာ ပါ လေယာဉ်စီးစီးပြီး မနီလာကို ၃-၄ ခေါက် သွားသွားနေရတယ်ဗျ၊ ဆရာ မင်းသိင်္ခ ပြောသလို မသွားမီကများ ရောက်နှင့်နေသလား…&nbsp;</p><p>အဲဒါနဲ့ အဲ့တုန်းက ပေါင်းသင်းဖြစ်ခဲ့တဲ့ ဘော်ဒါ ငထွန်း (နာမည်ပြောင်းထားသည်) ကို တိုင်ပင်ကြည့်ဖြစ်တယ်၊ ငထွန်းက &nbsp;မနီလာမှာ ၃-၄ လ နေခဲ့ဖူးတယ်လေ..</p><p></p>ငထွန်းက အကြံပေးတယ်.. သူအဲ့တုန်း က နေခဲ့ဖူးတဲ့ မန်ဒလူယုန်း (Mandaluyong) မှာ တည်း သင့်တယ် ပေါ့၊ ဒါပေမယ့် ကျွန်တော် က အဲ့နေရာထပ် မနီလာ ပင်လယ်ကွေ့ (Manila Bay) ကို ပိုစိတ်ဝင်စားနေမိတယ်…&nbsp;<p></p><p>အိပ်မက်ထဲမှာ အဲ့နေရာတွေ မှာ ထိုင်ခဲ့တာကိုး…</p><p>ပြီးတော့ ခု ဓါတ်ပုံ ထဲမှာ ကြည့်ကြည့်ရင် တောင် Manila Bay ဟာ ကျွန်တော့်အတွက် ၁၉၉၀ ခုနှစ်ကာလ အင်္ဂလိပ်သီချင်း ကာရာအိုကေ (80s karaoke) ထဲကလို မျိုး ခံစားရပြီး တစ်မျိုးလေး ဆွေးစရာလေး ဖြစ်စေတယ်…</p><div class="separator" style="clear: both; text-align: center;"><iframe allowfullscreen="" class="BLOG_video_class" height="360" src="https://www.youtube.com/embed/ZrfJkLb6ih8" width="476" youtube-src-id="ZrfJkLb6ih8"></iframe></div><div class="separator" style="clear: both; text-align: center;"><br /></div><p>ဒီလိုနဲ့ ဘာမှတော့ မလုပ်ဖြစ်ခဲ့ပါဘူး… ကျွန်တော် ၂၀၂၃ ရဲ့ နှစ်ကုန်ခါနီး လများမှာ <a href="https://kevinmoemyintmyat.github.io/blog/second-trip-to-bali/" target="_blank">ဘာလီ ကို သာ အပန်းဖြေဖို့ သွား ဖြစ်ခဲ့ပါတယ်</a>။</p><p>နောက် တော့ ၂၀၂၄ ရောက်လာတော့ လည်း ကျွန်တော် ကျန်းမာရေး ကိစ္စတစ်ခု ကြောင့် ခရီးသွား တာ တွေ ခဏ ရပ်တန့်ခဲ့ရပါတယ် …</p><p>နောက် နေပြန်ကောင်းလာတော့မှ ခွင့်ရက်လည်း အဆင်ပြေတော့ ခရီး တစ်ခုသွားဖို့ အတွေးရှိ လာတယ်လေ.. အဲဒါနဲ့ ပြန်တွေးတော့ “ဪ… ငါ ထိုင်းတော့ မကြာခဏ ရောက်ဖူးတယ် … ဗီယက်နမ်လည်း အရင် က ရောက်ဖူးတယ်…ငါ မရောက်ဖူးသေးတဲ့နေရာ သွားမယ်.. ငါ မနှစ်က အိပ်မက် တွေ မက်မက်နေတဲ့ မနီလာ တော့ ငါရောက် အောင် သွားအုန်းမယ်၊ အိပ်မက်နဲ့ လက်တွေ့နဲ့ တူလား ကြည့်မယ် ” ဆိုပြီး မေလ ၁ရက် ကိုလေယာဉ် လက်မှတ် ၀ယ်ခဲ့ပါတော့တယ်…</p><h2 style="text-align: left;"><span style="font-size: x-large;"><b>အဆင်မပြေဖြစ်ရပြီ</b></span></h2><p>ခရီး မသွားခင် တစ်လ မှာတင် တည်းမဲ့ နေရာ တွေ ကို ကြိုတင် ဘိုကင် လုပ်ခဲ့ပါတယ်..ကျွန်တော်သွားမှာ က လေးညအိပ် ငါးရက် ခရီး.. Agoda ကနေ နေစရာရှာကြည့်ဖြစ်တယ်</p><p>ပထမ နှစ်ညတည်းမယ့်နေရာ ကို Manila Bay နား ရှာကြည့်ဖြစ်တယ်.. Shell Residences ဆိုတာတွေ့တော့ တော်တော် သဘောကျသွားတယ်..ရေကူးကန်တွေ အများကြီးနဲ့ compound ကြီး ကလည်း ကျယ်တယ်ပေါ့..အဲ့နေရာကို ပစိုင်း (Pasay) လို့ခေါ်ပါတယ်.. &nbsp;</p><div class="separator" style="clear: both; text-align: center;"><a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjgRZ7yZ3ZYAjTjEB-E52cj7QnJR4xe9SHkFNlvu9_iJTGbLMLohCh3E1xb5WL6DnPi8mx-J7AkYbd0FJ0id9mMJsesIUj-3duCza6C_PTVFcGpQKtg9v2n-mLW6tmDzuBoHILT3X8zttzQr_C_NnwAko0Rj_lkm1ES0NLcGJXHhlRrWpxRLZ2u1icPmmSH/s899/Shell-Amenity.png" style="clear: left; float: left; margin-bottom: 1em; margin-right: 1em;"><img border="0" data-original-height="504" data-original-width="899" height="329" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjgRZ7yZ3ZYAjTjEB-E52cj7QnJR4xe9SHkFNlvu9_iJTGbLMLohCh3E1xb5WL6DnPi8mx-J7AkYbd0FJ0id9mMJsesIUj-3duCza6C_PTVFcGpQKtg9v2n-mLW6tmDzuBoHILT3X8zttzQr_C_NnwAko0Rj_lkm1ES0NLcGJXHhlRrWpxRLZ2u1icPmmSH/w587-h329/Shell-Amenity.png" width="587" /></a></div><br /><p><br /></p><p><br /></p><p><br /></p><p><br /></p><p><b style="font-size: small;"><i><br /></i></b></p><p><b style="font-size: small;"><i><br /></i></b></p><p><b style="font-size: small;"><i><br /></i></b></p><p><b style="font-size: small;"><i><br /></i></b></p><p><b style="font-size: small;"><i><br /></i></b></p><p><b style="font-size: small;"><i><br /></i></b></p><p><b style="font-size: small;"><i>Pic: View of Shell Residences</i></b></p><p><b style="font-size: small;"><i><br /></i></b></p><p>နောက် ၂ည ကိုတော့ မကာတီ (Makati) လို့ခေါ်တဲ့ နေရာနားမှာ ဈေးခပ် ပေါပေါဟိုတယ်တစ်ခုပဲ ငှါးလိုက်တယ်။</p><p>ဖြစ်ချင်တော့ မနီလာသွား ခါနီး စနိုးစနှောင့် ဖြစ်စရာ ကြုံခဲ့ရတယ်၊ ခရီးသွားခါနီး တစ်ရက် နေမှ iPhone က Screen ကြောင်လာပြီး အစဉ်းကြောင်းတွေ ပေါ်လာတယ်.. နောက် မကြာဘူး Screen တစ်ခုလုံးပါ သုံးမရ ဖြစ်သွားလေရဲ့…</p><p>အဲဒါနဲ့ပဲ ခရီးသွားမဲ့ မနက်ကို ကမန်းကတန်း ဈေးနားက ဖုန်းဆိုင်မှာ အပေါစား realme တစ်လုံး အသစ်ကို ဈေးပေါပေါနဲ့ ဝယ်ပြီး ခရီးကို ထွက်ခဲ့ရတယ် ၊ အဲဒါကြောင့် နောက် ဆက်ရေးမယ့် စာပိုဒ်တွေမှာ ဓါတ်ပုံတွေ အရေး အသွေးမကောင်း ဖြစ်နေလိမ့်မယ်၊ ပျက်သွားတဲ့ ဖုန်း တော့ နောက် မှ ပြင် တာပေါ့နော်…</p><p>ဒီလိုနဲ့ လေဆိပ် ကို ရောက်ခဲ့တယ်.. ထပ်ဖြစ်ချင်တော့ လေယာဉ်ကလည်း ၃ နာရီ နောက်ကျသွားတယ်။ ဟိုရောက်တော့ ညတော်တော် မှောင်ပြီ..ဖုန်း ဆင်းမ်ကဒ် ဘာညာလုပ်ပြီး ခပ်သုတ်သုတ် ငှါးထားတဲ့ အိမ်ခန်းဆီ တက္ကစီစီးလိုက်တယ်..</p><div class="separator" style="clear: both; text-align: center;"><span style="clear: left; float: left; margin-bottom: 1em; margin-right: 1em;"><a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj_hIJxkOsX_boilvYVUmy2nroMDXcQGnFXMthdVm_h1HhSf6ZU0ywL1jK2m_BppLnNRPDw0oCrPcpMZ5yoEmROKMFN_w23BD9ed7vuBRXIbndUaWU6rsVfiM2xPQp25l0IvwFCjuAfi80-ywEagwy8aQUGDCBAd9_R5WZ3QUz6IFDoe_S5ln_3Jr0kYY8F/s726/the-tourist.jpg"><img border="0" data-original-height="726" data-original-width="531" height="385" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj_hIJxkOsX_boilvYVUmy2nroMDXcQGnFXMthdVm_h1HhSf6ZU0ywL1jK2m_BppLnNRPDw0oCrPcpMZ5yoEmROKMFN_w23BD9ed7vuBRXIbndUaWU6rsVfiM2xPQp25l0IvwFCjuAfi80-ywEagwy8aQUGDCBAd9_R5WZ3QUz6IFDoe_S5ln_3Jr0kYY8F/w281-h385/the-tourist.jpg" width="281" /></a>&nbsp;</span><span style="clear: left; float: left; margin-bottom: 1em; margin-right: 1em;"><i style="font-weight: bold;">Pic: Ask for an adventure and you shall receive</i></span></div><div class="separator" style="clear: both; text-align: center;"><br /></div><p>ရောက်တဲ့ အခါ ငှါးထားတဲ့ လူဆီက whatsapp ဖုန်းဆက်လာတယ်..နောက်ကျလို့တဲ့ ငှါးလို့မရ တော့ဘူးတဲ့.. အဲဒါနဲ့ luggage ရယ် လွယ်အိတ်ရယ် ထမ်းပြီး ဘယ်သူနဲ့ မှ မသိတဲ့ နေရာတစ်ခု မှာ ဘယ်မှ သွားတည်းစရာ မရှိ တဲ့လူတစ်ယောက် ဖြစ်သွားရတော့တယ်..</p><p>စိတ်ကညစ်လာတာနဲ့ ဘာလုပ်ရမှန်းမသိ အနီးအနားမှာ ရှာကြည့်တော့ ၁၂ လမ်းသွား လမ်းကြီးရဲ့ ဟိုဘက်မှာ ဟိုတယ် တစ်ခု ခပ်ရေးရေး တွေ့တာနဲ့ မထူးဘူး ဆိုပြီး လမ်းကို ဖြတ်ချလာတယ်..</p><p>ဈေးမေးတော့ walk-in ဆိုပြီး ဈေးကို ၂ဆ လောက်ပိုယူသွားတယ်.. မထူးတော့ဘူးလေဆိုပြီး ပင်ပန်းနေတာနဲ့ အခန်း မြန်မြန်ယူပြီး တစ်ညအတွက်တော့ နားဖို့ပြင်လိုက်တယ်…</p><p>&nbsp;ဒီလိုနဲ့ မနက်ကို စောစောနိုးလာခဲ့ပြီး ဟိုတယ် အောက်ကို ဆင်း မနက်စာ ဘူဖေး ကို ကျကျနန စားလိုက်တယ်.. နောက်တော့ ခဏ နား အစာချေပြီး ရေကူးဖို့ပြင်လိုက်တော့ ၁၀:၃၀ -၁၁ လောက်ရှိနေပြီ.. ဟိုတယ်အ ပြင်ကို ထွက်ကြည့်လိုက်တော့ “အား လား လား” ပူလိုက်တဲ့နေဆိုတာ.</p><p>ဟုတ်ပါတယ်၊ မနီလာရဲ့ အားနည်းချက်တစ်ခုက နေကပူ တဲ့ အပြင် အပူလှိုင်းပါ ဖြတ်တော့ လေပါပူနေတယ်.. ဒါပေမယ့် ရေတော့ မရရအောင် ကူးခဲ့ပါတယ်..</p><p>ရေကူးပြီး အဝတ်စားလဲ ဘာညာပြီး တော့ နေ့လည်စာ စားချိန် ဖြစ်နေပြီ၊ အဲဒါနဲ့ ခုမှ တကယ် စွန့်စားခန်းစတာပါ..ဟိုတယ်က ထွက်ပြီး ပင်လယ်ဘက်ကို တည့်တည့်ကြီးထွက်ချလိုက်တယ်.. SM Mall of Asia ကြီးကိုတွေ့တော့ ကြီးလိုက်တဲ့ Mall ကြီးပါလား ဆိုပြီး အံ့အားသင့်မိတယ်..&nbsp;</p><p><br /></p><p></p><div class="separator" style="clear: both; text-align: center;"><a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjh44XerdyMVlLGay6BEE9vNaOKXcmdXcH2X5FAorzYsGVYq5JuWS6pwNYBxuXDJVokbpyyd9juf6lHwOi7jGFJFQKNsrq1QDIQD9bjBfxnhSvPDfOME-NPznL_0giTOUk4CUMY5hu8kiPDw33c-nHSNP5Af8B0yyFyaLJqPqDkqOwCqNe0gTrnGAxD2j-y/s1920/sm-moa-rotunda.jpg" style="clear: left; float: left; margin-bottom: 1em; margin-right: 1em;"><img border="0" data-original-height="1080" data-original-width="1920" height="329" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjh44XerdyMVlLGay6BEE9vNaOKXcmdXcH2X5FAorzYsGVYq5JuWS6pwNYBxuXDJVokbpyyd9juf6lHwOi7jGFJFQKNsrq1QDIQD9bjBfxnhSvPDfOME-NPznL_0giTOUk4CUMY5hu8kiPDw33c-nHSNP5Af8B0yyFyaLJqPqDkqOwCqNe0gTrnGAxD2j-y/w584-h329/sm-moa-rotunda.jpg" width="584" /></a></div><br /><p></p><p><br /></p><p><br /></p><p><br /></p><p><br /></p><p><br /></p><p><b><i><br /></i></b></p><p><b><i><br /></i></b></p><p><b><i><br /></i></b></p><p><b><i><br /></i></b></p><p><b><i><br /></i></b></p><p><b><i>Pic: SM Mall of Asia Globe Rotunda</i></b></p><p><br /></p><p>အဲ့ထဲလျှောက်သွားရင်း အဲ့မှာပဲ ရာမန်တစ်ပွဲနဲ့ ဗိုက်ဖြည့်ခဲ့တယ်..ပြီးတာနဲ့ ဆက်ပြီး Google Map ကြည့် ပင်လယ်ဘက်ကို မျက်နှာ မူပြီး တည့်တည့်ထွက်လာတော့ ရောက်ချင်နေခဲ့တဲ့ နေရာကို နောက်ဆုံးတော့ ရောက်လာခဲ့ပြီလေ..&nbsp;</p><p>ပင်လယ်ကွေ့ က တော်တော်တော့လှတယ်၊ အနီးအနားမှာ ကုန်တင်ကုန်ချ သင်္ဘောတွေသာ မရှိရင် ပိုလှမယ်..SM Mall of Asia ရဲ့တည့်တည့်မှာ က Ferris Wheel ကြီးရှိတယ်၊ Mall of Asia Eye (MOA eye) လည်းခေါ်တာပေါ့၊အဲ့လိုနဲ့ ပင်လယ်ကွေ့ကြီးအတိုင်း ဖြေးဖြေးလျှောက်လာတော့ SMA နဲ့ ကပ်ရပ် business center ကြီးက ထီးထီးကြီးနဲ့ ထည်ထည်ဝါဝါကြီး ဖြစ်နေတယ်.. ရုံးသမားတွေလည်း အများကြီးပေါ့၊&nbsp;</p><div class="separator" style="clear: both; text-align: center;"><a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhX3_eqWU4XXXTTiWUBuPD2HGXLfHQoq260V28k4vm2axa3mnBnFGHGTgORlz31LDvEgh3y0KhQWhKpO14Z8DbbM1Hteib6lMBtEDzEV_uyb-e-rsSt75BkxXcRu-jolBv-fOSak6_tgkFNR0vB_wrsQDo3DJbENB14MAeFLsmaDifEuqeqejhDgjNVUDJY/s1318/manila-bay.jpg" style="clear: left; float: left; margin-bottom: 1em; margin-right: 1em;"><img border="0" data-original-height="1318" data-original-width="1063" height="492" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhX3_eqWU4XXXTTiWUBuPD2HGXLfHQoq260V28k4vm2axa3mnBnFGHGTgORlz31LDvEgh3y0KhQWhKpO14Z8DbbM1Hteib6lMBtEDzEV_uyb-e-rsSt75BkxXcRu-jolBv-fOSak6_tgkFNR0vB_wrsQDo3DJbENB14MAeFLsmaDifEuqeqejhDgjNVUDJY/w397-h492/manila-bay.jpg" width="397" /></a></div><p><br /></p><p><br /></p><p><br /></p><p><br /></p><p><br /></p><p><br /></p><p><br /></p><p><br /></p><p><b style="font-size: small;"><i><br /></i></b></p><p><b style="font-size: small;"><i><br /></i></b></p><p><b style="font-size: small;"><i><br /></i></b></p><p><b style="font-size: small;"><i><br /></i></b></p><p><b style="font-size: small;"><i><br /></i></b></p><p><b style="font-size: small;"><i><br /></i></b></p><p><b style="font-size: small;"><i><br /></i></b></p><p><b style="font-size: small;"><i>Pic: Manila Bay, it's similar to what I dreamt surprisingly</i></b></p><p><br /></p><p>ဆက်ပြီး လျှောက်လာတော့ ဖြေးဖြေးချင်း လူပြတ်လာတယ်၊ ကားတွေ နည်းလာပြီး ပင်လယ်ကြီးရယ် ကိုယ်ရယ်ပဲ ရှိတော့တယ်၊ အဲ့မှာစပြီး အမှိုက်တွေ တွေ့လာရတော့တယ်၊ ပြီးတော့ တဲအိုတဲဟောင်း ကြိုကြားကြိုကြားတွေ တွေ့လာရပြီး ဆင်းရဲမှု အရိပ်အယောင် တွေ တွေ့လာတယ်၊ တွေးနေတုန်းမှာပဲ တဲအိုတစ်ခုက လူငယ်တစ်ယောက် အင်္ကျီချွတ်နဲ့ ထွက်လာပြီး မပြော မဆို နဲ့ ကျွန်တော် လမ်းလျှောက်နေတဲ့ တံတားရဲ့ဘေး ကနေ &nbsp;အောက် ကို ခုန်ဆင်းသွားတော့တယ်၊ ဒီနေရာမှတော့ ရေတွေက နောက်ကျိနေပြီး မထိန်းသိမ်းထားမှန်းသိသာတယ်၊ ဟိုလူငယ်ကတော့ ကူးကောင်းနဲ့ ကူးနေလေရဲ့…</p><p>ဒီလိုနဲ့ နေရာတွေ အများကြီး ဖြတ်လာပြီး Philippines Navy စခန်းရယ်၊ဆက်လျှောက်လာတော့ US embassy ကြီးနားကို ရောက်လာခဲ့တယ်.. ဒီလိုနဲ့ လျှောက်လာလိုက်တာ <a href="https://en.wikipedia.org/wiki/Rizal_Park" target="_blank">Rizal ပန်းခြံ</a>&nbsp;ကို ရောက်ခဲ့တယ်၊ ဒီနေရာက</p><p>ရန်ကုန်က ပြည်သူ့ဥယာဉ်ကို အမှတ်ရမိစေတယ်..လွမ်းလွမ်းရှိတာနဲ့ &nbsp;Rizal ပန်းခြံမှာ ခဏ အနားယူ အရိပ်ခိုလိုက်တယ်..</p><div class="separator" style="clear: both; text-align: center;"><a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi_RHbUw6IoFmMpwW5PnvUaWYUMFrkv22qSE7yQeMf5NUJgixokK858AFrcyWM_vXGXiLradtQpHMzbmh738ffLnB4wBZ4A7JcKv8xsMO2xCEmRaIoO9W8Y17tg5jHuZB_3kLLg7bysnMwNhuqouM0khNJKsIdn6Q3GQIgxjuirvnEI8DD1uiy5Rcfa8VFx/s764/metromanila.jpg" style="clear: left; float: left; margin-bottom: 1em; margin-right: 1em;"><img border="0" data-original-height="489" data-original-width="764" height="373" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi_RHbUw6IoFmMpwW5PnvUaWYUMFrkv22qSE7yQeMf5NUJgixokK858AFrcyWM_vXGXiLradtQpHMzbmh738ffLnB4wBZ4A7JcKv8xsMO2xCEmRaIoO9W8Y17tg5jHuZB_3kLLg7bysnMwNhuqouM0khNJKsIdn6Q3GQIgxjuirvnEI8DD1uiy5Rcfa8VFx/w584-h373/metromanila.jpg" width="584" /></a></div><p></p><p><br /></p><p><br /></p><p><br /></p><p><br /></p><p><br /></p><p><br /></p><p><b style="font-size: small;"><i><br /></i></b></p><p><b style="font-size: small;"><i><br /></i></b></p><p><b style="font-size: small;"><i><br /></i></b></p><p><b style="font-size: small;"><i><br /></i></b></p><p><b style="font-size: small;"><i><br /></i></b></p><p><b style="font-size: small;"><i><br /></i></b></p><p><b style="font-size: small;"><i>Pic: Rizal Park, Manila</i></b></p><p><br /></p><p>Rizal ပန်းခြံနားမှာ မြင်းလှည်းသမား တွေရှိနေတယ်၊ ကျွန်တော့်ပုံကြည့်ပြီး နိုင်ငံခြားသားမှန်းသိတော့ ဒီနားမှာ Intramuros ဆိုတာရှိတဲ့ အကြောင်း မြင်းလှည်းနဲ့ လိုက်ပို့မယ် ဘယ်လောက်ပဲပေး ဘာညာ ဆွယ်နေပေမယ့် ငြင်းလွှတ်လိုက်ပြီး ကိုယ့်ဟာကိုယ် လမ်းဆက်လျှောက် ခဲ့တယ်၊ ဘာလုပ်ချင်လို့လဲဆိုတော့ သူတို့နိုင်ငံရဲ့&nbsp; public transportation ကိုသိချင်လို့..</p><p>Google map ခေါက်လိုက်တော့ <a href="https://en.wikipedia.org/wiki/United_Nations_station_(LRT)" target="_blank">အနီးဆုံး station က United Nations</a> လို့ခေါ်တယ်.. လမ်းလျှောက်ကောင်းလာရင်း ညနေလည်းစောင်းလာပြီဆိုတော့ ဟိုတယ်ကို ရထားနဲ့ ပြန်ဖို့ ဆုံးဖြတ်လိုက်တယ်…UN station ကနေ Pasay ကိုသွားမယ်ဆိုရင် EDSA station မှာ ဆင်းရမယ်၊ ၄-၅ မှတ်တိုင်ပဲ ဆိုတော့ ရထားလက်မှတ်ဝယ်လိုက်ပြီး သူတို့ရဲ့ public transport ကို စီးဖြစ်ခဲ့တော့တယ်။</p><br /><br /><p></p><div class="separator" style="clear: both; text-align: center;"><a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjL3XKZyWLPULSs2egVHFWsoSlL4mmzkSk1wWwdmIBQkJCe3HwhJnxHhGy6JQIX-J3dkpQVSEV5UzBhb7jJm1-36Jr_7KFAWqdExrl71jCaxGWlZQt8pirQSinXRKpvCsbuND1a2k1R3LwmPnTCAZ-VcbfExP0qCd-gC06AuQVGM2kPcoeoqNAuAf4QsNkx/s1028/my-first-day-route.jpg" style="clear: left; float: left; margin-bottom: 1em; margin-right: 1em;"><img border="0" data-original-height="749" data-original-width="1028" height="456" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjL3XKZyWLPULSs2egVHFWsoSlL4mmzkSk1wWwdmIBQkJCe3HwhJnxHhGy6JQIX-J3dkpQVSEV5UzBhb7jJm1-36Jr_7KFAWqdExrl71jCaxGWlZQt8pirQSinXRKpvCsbuND1a2k1R3LwmPnTCAZ-VcbfExP0qCd-gC06AuQVGM2kPcoeoqNAuAf4QsNkx/w628-h456/my-first-day-route.jpg" width="628" /></a></div><br /><p></p><p><br />&nbsp;</p><p><br /></p><p><br /></p><p><br /></p><p></p><br /><p></p><p><br /></p><p><br /></p><p><br /></p><p><br /></p><p><br /></p><p><br /></p><p><br /></p><p><br /></p><p>EDSA station ကဆင်းလာပြီး နောက် မိနစ် ၄၀ လောက် ဟိုတယ်ဘက်ကို ပြန် လျှောက်လာရင်း ဗိုက်ဆာတာနဲ့ <br />လမ်းဘေးစာ တွေစားဖြစ်တယ်၊ ဒီမှာ လမ်းဘေးစာတော့ တော်တော် ပေါတာ.. ဒီလိုနဲ့ ဟိုဟာသုံးဒီဟာသုံးနဲ့ အကြွေစေ့တွေ များလာပြီး သယ်ရလေးလာတယ်..</p><p>ဟိုတယ်နားရောက်ခါနီးမှာ သူတောင်းစားကြီး တစ်ယောက် တွေ့တာနဲ့ အကြွေစေ့တွေ အကုန် လှူချလိုက်တော့တယ်..နောက်တော့ ဟိုတယ် မှာ ခဏနားပြီး ညဘက်ဗိုက်ဆာလာတော့ &nbsp;MOA eye ဘက်ကို နောက်တစ်ခေါက်လျှောက်လာပြန်တယ်၊ ညဘက်တော့ ဒီဘက်မှာ တော်တော်&nbsp; စည်ကားနေတယ်…</p><p>ဘားတွေ တော်တော်များများ က American style တွေ၊ ဝင်သွားတာနဲ့ ၇၀ခုနှစ် မဟုတ်ရင် ၈၀ ခုနှစ်က အမေရိကန် ဂီတအဖွဲ့တွေရဲ့ ပုံတွေ ချိတ်ထားတယ်.. လာထိုင်ကြတာလည်း ကြည့်တော့ သူတို့ လူမျိုးနည်းပြီး နိုင်ငံခြားသား ပဲများနေတယ်… နားယဉ်နေတဲ့ စလုံးသံ တချို့လည်းကြားနေရတယ်.. အဲ့ဘားမှာ&nbsp; အီကာ ဒို (Igado) လို့ခေါ်တဲ့ အသည်းနဲ့ အသား ရော ချက်ထားတာ တစ်ပွဲမှာ စားလိုက်တော့တယ်…</p><p>ဒီလိုနဲ့ စားသောက်ပြီး တော့ ပင်လယ် ဘက်ထွက်လာတော့ တော်တော်စည်နေတယ်.. ဒီနေရာမှာ ဒေသခံ ဖိလစ်ပင်း တွေ ပိုပြီး စုဝေးကြတယ်… ဒီမှာ တစ်ခုပြောစရာရှိတာ က ဖိလစ်ပင်းက ကက်သလစ် နိုင်ငံဖြစ်ပေမယ့် LGBT တွေ လည်း အမြောက်အများ တွေ့ခဲ့ရတယ်. <a href="https://time.com/6184345/lgbt-philippines-catholic-church-pride/" target="_blank">ဒီ article</a> မှာ ဆက် ဖတ်နိုင်ပါတယ်.&nbsp;</p><p>စားသောက်ပြီးတဲ့နောက်မှာတော့ ဟိုတယ်ပြန် အိပ်ခဲ့တယ်၊&nbsp;</p><h2 style="text-align: left;"><b><span style="font-size: x-large;">ဟိုတယ် ပြောင်းပြီ</span></b></h2><p>နောက်မနက်နိုးတော့ ကမန်းကတန်း သိမ်းစရာ ရှိတာ သိမ်း ၊ ဟိုတယ် checkout လုပ်ပြီး ဟိုဘက်ကို ကားငှါးလိုက်တယ်..&nbsp;</p><p>ကားသမား က ဖိလစ်ပင်ရဲ့ transportation အကြောင်းရှင်းပြတယ်.. သူတို့နိုင်ငံရဲ့ ဈေး အပေါဆုံး အငှား ယာဉ်က ဂျီပနီ (Jeepney) လို့ခေါ်တယ်တဲ့.. Jeepney ရဲ့ ပုံစံကို ကြည့်တော့ ရှေးခေတ် ဒုတိယကမ္ဘာ စစ် ခေတ် က ကားပုံဖြစ်နေတယ်.. မြန်မာ အမြင်နဲ့ ကြည့်ရင်တော့ ၃၉ ဗိုက်ပူ ပေါ့… ဒါပေမယ့် ဒီကားတွေက မဟောင်းနေဘူး.. သူ့ဟာသူ တောက်တောက်ပြောင်ပြောင် maintenance လုပ်ထားပြီး sticker တွေဘာတွေပါ ကပ်ထားကြတယ်..&nbsp;</p><div class="separator" style="clear: both; text-align: center;"><a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjr0mN467anlEE-vNVT-BRKMlC13I8q2DhzvrTPOqC7Kt3evERlau_cFmFPTaB_cG3pt6RzBe908yJrYwwYMI_cQuTb9B_aGTZWwZDPO32NOs3MgMfvpeYtBug3NZ01Be_sKnzd3jHLPVLwzC_JbSP2bBQHr0aHuzz4LflUubwxe4fXvik2KygCWYzbamZc/s697/jeepneys.jpg" style="clear: left; float: left; margin-bottom: 1em; margin-right: 1em;"><img border="0" data-original-height="440" data-original-width="697" height="374" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjr0mN467anlEE-vNVT-BRKMlC13I8q2DhzvrTPOqC7Kt3evERlau_cFmFPTaB_cG3pt6RzBe908yJrYwwYMI_cQuTb9B_aGTZWwZDPO32NOs3MgMfvpeYtBug3NZ01Be_sKnzd3jHLPVLwzC_JbSP2bBQHr0aHuzz4LflUubwxe4fXvik2KygCWYzbamZc/w553-h374/jeepneys.jpg" width="553" /></a></div><br /><p><br /></p><p><br /></p><p><br /></p><p><br /></p><p><br /></p><p><br /></p><p><br /></p><p><br /></p><p><br /></p><p><br /></p><p><br /></p><p><b><i>Pic: Are they really Mercedes Benz?</i></b></p><p><br /></p><p>နောက်တော့ Jeepney အပြင် ဆိုဒ်တွဲ (pedicab) လေးတွေလည်းရှိတယ်.. ကားသမား ရှင်းပြတာက..<br />အရင်ကတော့&nbsp; &nbsp;ဓာတ်ဆီ နဲ့ ဆိုက်ကယ် ဆွဲ&nbsp; ကျရာကနေ ခုနောက်ပိုင်းတော့ ဆီဖိုးသက်သာအောင်..လျှပ်စစ်ကို အသုံးချပြီး battery တွေကို ညဆို ဖြည့်ပြီးတော့ electric bike နဲ့ ဟိုနားဒီနားလိုက်ပို့ အခကျေးငွေယူကြတာပဲ.. <br />မြန်မာနဲ့ကြည့်ရင်တော့ ဆိုက်ကား ပဲပေါ့.. ဒါပေမယ့် နင်းစရာမလိုဘူးလေ..&nbsp;</p><p>နောက်ထပ်ပြီး သူက မတ်ထရို မနီလာရဲ့ မြို့တွေ အကြောင်း ရှင်းပြ တယ်၊ မနီလာ ထဲမှာ တင် မြို့ ၁၆ခု ရှိတဲ့ အကြောင်း ဘာညာပေါ့ ၊ business hub တွေ ဖြစ်တဲ့ &nbsp;ပစိုင်း ၊ မကာတီ ၊ အော်တီဂါ (Ortigas) ၊ ဘိုနီဖာဆရို (အတိုကောက် ဘီဂျီစီ) (Bonifacio Global City) ပြီးတော့ သူကိုယ်တိုင်တောင် မသိတဲ့ တခြား စီးပွါးရေး ဇုံတွေပါ ရှိကြောင်း ပေါ့၊ နောက်တော့ ခုသွားနေတဲ့ လမ်းမကြီး အဒ်စာ EDSA ( အရှည်Epifanio de Los Santos Avenue ) ရဲ့ ဒီ ဇုံတွေ ကို ဆက် သွယ်ထား ပုံ တွေ ကို ရှင်းပြတယ်၊&nbsp;</p><p></p>အဲတော့မှ ကျွန်တော် ရောက်စ ညက ဖြတ်ချလာတဲ့ ၁၂ လမ်းသွား လမ်းမကြီး က EDSA မှန်း သိခဲ့ရတယ်။<p></p><div class="separator" style="clear: both; text-align: center;"><a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiX7HJp04089s76PFeihvRv_IxN98d0c3THVRsBzc_1hs_LNnpe6tiPyXTtWONy_VqfIypavgE2AMgWVZHwNGlnhHgP8hqHdtbOdQ0BWKymioa66kO8bQByjM8UGV72ST4zh-qXDyVypF9jrBbtM2vTHSqUOqoLr5LgJ8p4-7gMfcOeo8qk3JzrTjNyJJ09/s610/edsa.jpg" style="clear: left; float: left; margin-bottom: 1em; margin-right: 1em;"><img border="0" data-original-height="337" data-original-width="610" height="322" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiX7HJp04089s76PFeihvRv_IxN98d0c3THVRsBzc_1hs_LNnpe6tiPyXTtWONy_VqfIypavgE2AMgWVZHwNGlnhHgP8hqHdtbOdQ0BWKymioa66kO8bQByjM8UGV72ST4zh-qXDyVypF9jrBbtM2vTHSqUOqoLr5LgJ8p4-7gMfcOeo8qk3JzrTjNyJJ09/w582-h322/edsa.jpg" width="582" /></a></div><br /><p><br /></p><p><br /></p><p><b><i><br /></i></b></p><p><b><i><br /></i></b></p><p><b><i><br /></i></b></p><p><b><i><br /></i></b></p><p><b><i><br /></i></b></p><p><b><i><br /></i></b></p><p><b><i><br /></i></b></p><p><b><i>Pic: EDSA during 1986 People Power Revolution</i></b></p><p><br /></p><p>စကားဖေါင်ဖွဲ့ရင်း နောက် ဟိုတယ်ကို ရောက်လာတယ်..ဒီဟိုတယ်ကတော့ ဂျောင်ကျပြီး ကြယ်နှစ်ပွင့်လောက် ပဲရှိမယ် ထင်တယ်.. ရပ်ကွက်ထဲမှာ ဖွင့်ထားတာမျိုးဖြစ်နေတယ်.. check in လုပ်ပြီး နားလိုက်တယ်ခဏ…</p><p>နားရင်း ဘယ်နေရာတွေ ဘယ်လိုလည်ရင် ကောင်းမလဲဆိုပြီး ခေါင်းထဲမှာ အကြံဆွဲနေမိတယ်..</p><p><br /></p><h3 style="text-align: left;">ဆက်ရန်...&nbsp;</h3>`,author:{id:"17827604690472162137",displayName:"Kevin Moe Myint Myat",url:"https://www.blogger.com/profile/17827604690472162137",image:{url:"//1.bp.blogspot.com/-tWz6Nv-7axE/ZxDB4KLiNvI/AAAAAAAAAh0/QERnGiTgB0gvb7R75uu_DWOCwToSNHL3QCK4BGAYYCw/s35/me-bali.jpg"}},replies:{totalItems:"0",selfLink:"https://www.googleapis.com/blogger/v3/blogs/6655808940462000438/posts/3975425417229776902/comments"},labels:["manila","manila memories","part-1","part-one","travel"],etag:'"dGltZXN0YW1wOiAxNzI5MTU3NDkxOTYyCm9mZnNldDogMjg4MDAwMDAK"'}];const F=e=>(Ct("data-v-d1431fce"),e=e(),Pt(),e),Lh={class:"h-screen w-screen mt-5"},Gh={key:0,class:"title"},Hh={key:1,class:"gallery-card w-full"},qh={class:"tooltip title"},Nh={key:0,class:"tooltiptext"},Jh=F(()=>c("br",null,null,-1)),Kh={class:"tooltip description"},Zh={key:0,class:"tooltiptext"},Xh={class:"gallery-card-footer"},Wh={class:"date"},Vh=F(()=>c("b",null,"Category",-1)),Uh={class:"gallery-card-tag"},Qh=F(()=>c("b",null,", Language",-1)),Yh={class:"gallery-card-tag"},ec=F(()=>c("span",{class:"read-more"}," ...Read more ",-1)),tc=F(()=>c("div",{class:"title"},"Published Blogs",-1)),ac={class:"gallery-card"},nc={class:"tooltip title"},oc={key:0,class:"tooltiptext"},rc=F(()=>c("br",null,null,-1)),ic={class:"tooltip description"},sc={key:0,class:"tooltiptext"},lc={class:"gallery-card-footer"},pc={class:"date"},hc=F(()=>c("b",null,"Category",-1)),cc={class:"gallery-card-tag"},dc=F(()=>c("b",null,", Language",-1)),mc={class:"gallery-card-tag"},gc=F(()=>c("span",{class:"read-more"}," ...Read more ",-1)),uc={__name:"Blog",setup(e){At({title:"Blogs and Articles by Kevin Moe Myint Myat",link:[{rel:"icon",type:"image/png",href:"https://kevinmoemyintmyat.github.io/favicon.png"}],meta:[{name:"description",content:`Kevin Moe Myint Myat is a software developer and an art hobbyist based in Singapore. He is also a full-time cat dad to JieMao (https://www.instagram.com/jiemao_theblackcattt).
            He spends most of his time working as a software engineer at DT One (https://www.dtone.com) and when he's on his annual leave, he pursues his passion "Travelling" and explore the world. He wrote his travel blogs on this
            personal website to share his vacation experiences with his audiences.`},{name:"keywords",content:"Kevin Moe Myint Myat,kevinmoemyintmyat,kevinmoemyintmyat.github.io,blog, stories, software developer, artist, cat dad,fullstack,software,kevin,moe,myint,myat,kevn,Kevn Moe Myint Myat,KevinMoeMyintMyat, Kevin Moe Myint Myat, Github, art, travel blogs, articles"},{property:"og:title",content:"Kevin Moe Myint Myat - a cat dad, a developer & an artist"},{property:"og:type",content:"profile"},{property:"og:url",content:"https://kevinmoemyintmyat.github.io/blog"},{property:"og:site:name",content:"Kevin Moe Myint Myat - a cat dad, a developer & an artist"},{property:"og:description",content:"Kevin Moe Myint Myat - a cat dad, a developer & an artist"},{name:"twitter:site",content:"https://kevinmoemyintmyat.github.io"},{name:"twitter:description",content:"Kevin Moe Myint Myat - a cat dad, a developer & an artist"}]});const t=Ft({latestBlog:{},blogs:zt}),a=xt(()=>{const i=[];let l=[];const p=Oh(t.blogs,"date","desc");let m=[];return p.length%2===0?m=p.concat({isHidden:!0,date:new Date}):m=p,t.latestBlog=m.shift(),t.latestBlog={...t.latestBlog,date:ke(t.latestBlog.date,"do MMMM yyyy")},m.forEach((g,h)=>{(l==null?void 0:l.length)<=2&&l.push({...g,date:ke(g.date,"do MMMM yyyy")}),l.length===2?(i.push(l),l=[]):h===p.length-1&&(i.push(l),l=[])}),i});Tt(()=>{n(),r()});function n(){t.blogs=t.blogs.concat(Dh.map(i=>({...i,date:new Date(i.published_at),route:`/blog/${i.slug}`,language:"English",type:"dev"})))}function r(){t.blogs=t.blogs.concat(Rh.map(i=>{const l=document.createElement("div");l.innerHTML=i.content;const p=l.textContent.slice(0,80);return{...i,description:p,date:new Date(i.published),route:`/blog/${i.id}`,language:"English",type:"travel"}}))}function o(i){return(i==null?void 0:i.length)>55?`${i.slice(0,55)}...`:i}function s(i){return i.language==="English"?{path:i.route,params:{slug:i.slug||i.id}}:{path:i.route}}return(i,l)=>{const p=Mt;return w(),_("div",Lh,[c("div",null,[b(t).latestBlog.title?(w(),_("div",Gh,"Latest Blog")):M("",!0),b(t).latestBlog.title?(w(),_("div",Hh,[St(p,{to:s(b(t).latestBlog)},{default:be(()=>{var m,g,h,f,u,y;return[c("p",null,[c("span",qh,[k('"'+v(o(b(t).latestBlog.title))+'" ',1),((g=(m=b(t).latestBlog)==null?void 0:m.title)==null?void 0:g.length)>55?(w(),_("span",Nh,v((h=b(t).latestBlog)==null?void 0:h.title),1)):M("",!0)]),Jh,c("span",Kh,[k(v(o(b(t).latestBlog.description))+" ",1),((u=(f=b(t).latestBlog)==null?void 0:f.description)==null?void 0:u.length)>55?(w(),_("span",Zh,v((y=b(t).latestBlog)==null?void 0:y.description),1)):M("",!0)])]),c("div",Xh,[c("span",Wh,[k(" Written on "+v(b(t).latestBlog.date)+", ",1),Vh,k(": "),c("b",Uh,v(b(t).latestBlog.category),1),Qh,k(": "),c("b",Yh,v(b(t).latestBlog.language),1)]),ec])]}),_:1},8,["to"])])):M("",!0),tc,(w(!0),_(we,null,_e(b(a),(m,g)=>(w(),_("div",{key:g,class:"flex flex-col lg:flex-row justify-center items-center"},[(w(!0),_(we,null,_e(m,h=>(w(),_("div",{key:h.title,class:"w-full"},[h.isHidden?M("",!0):(w(),jt(p,{key:0,to:s(h)},{default:be(()=>{var f,u;return[c("div",ac,[c("p",null,[c("span",nc,[k('"'+v(o(h.title))+'" ',1),((f=h==null?void 0:h.title)==null?void 0:f.length)>55?(w(),_("span",oc,v(h==null?void 0:h.title),1)):M("",!0)]),rc,c("span",ic,[k(v(o(h.description))+" ",1),((u=h==null?void 0:h.description)==null?void 0:u.length)>55?(w(),_("span",sc,v(h==null?void 0:h.description),1)):M("",!0)])]),c("div",lc,[c("span",pc,[k(" Written on "+v(h.date)+", ",1),hc,k(": "),c("b",cc,v(h.category),1),dc,k(": "),c("b",mc,v(h.language),1)]),gc])])]}),_:2},1032,["to"]))]))),128))]))),128))])])}}},vc=It(uc,[["__scopeId","data-v-d1431fce"]]);export{vc as default};
