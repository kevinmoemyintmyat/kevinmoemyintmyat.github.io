import{i as _t,f as xt,j as At,k as Ft,l as Mt,c as k,a as d,b,h as C,d as jt,w as be,F as we,r as ke,_ as Ct,o as w,e as I,t as v,m as Tt,p as St,n as zt}from"./entry.4da26a8b.js";import{b as Pt,f as Ie}from"./data-blog.ad758b56.js";var q=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Et(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function Ot(e,t){for(var a=-1,n=e==null?0:e.length,o=Array(n);++a<n;)o[a]=t(e[a],a,e);return o}var et=Ot,Rt=Array.isArray,_=Rt,Dt=typeof q=="object"&&q&&q.Object===Object&&q,tt=Dt,Bt=tt,Ht=typeof self=="object"&&self&&self.Object===Object&&self,Nt=Bt||Ht||Function("return this")(),x=Nt,Lt=x,qt=Lt.Symbol,J=qt,_e=J,at=Object.prototype,Vt=at.hasOwnProperty,Gt=at.toString,D=_e?_e.toStringTag:void 0;function $t(e){var t=Vt.call(e,D),a=e[D];try{e[D]=void 0;var n=!0}catch{}var o=Gt.call(e);return n&&(t?e[D]=a:delete e[D]),o}var Zt=$t,Jt=Object.prototype,Xt=Jt.toString;function Wt(e){return Xt.call(e)}var Ut=Wt,xe=J,Kt=Zt,Yt=Ut,Qt="[object Null]",ea="[object Undefined]",Ae=xe?xe.toStringTag:void 0;function ta(e){return e==null?e===void 0?ea:Qt:Ae&&Ae in Object(e)?Kt(e):Yt(e)}var B=ta;function aa(e){return e!=null&&typeof e=="object"}var H=aa,na=B,ia=H,oa="[object Symbol]";function ra(e){return typeof e=="symbol"||ia(e)&&na(e)==oa}var X=ra,sa=_,la=X,ha=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,pa=/^\w*$/;function da(e,t){if(sa(e))return!1;var a=typeof e;return a=="number"||a=="symbol"||a=="boolean"||e==null||la(e)?!0:pa.test(e)||!ha.test(e)||t!=null&&e in Object(t)}var he=da;function ca(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var pe=ca,ma=B,ga=pe,ua="[object AsyncFunction]",fa="[object Function]",ya="[object GeneratorFunction]",va="[object Proxy]";function ba(e){if(!ga(e))return!1;var t=ma(e);return t==fa||t==ya||t==ua||t==va}var nt=ba,wa=x,ka=wa["__core-js_shared__"],Ia=ka,ee=Ia,Fe=function(){var e=/[^.]+$/.exec(ee&&ee.keys&&ee.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function _a(e){return!!Fe&&Fe in e}var xa=_a,Aa=Function.prototype,Fa=Aa.toString;function Ma(e){if(e!=null){try{return Fa.call(e)}catch{}try{return e+""}catch{}}return""}var it=Ma,ja=nt,Ca=xa,Ta=pe,Sa=it,za=/[\\^$.*+?()[\]{}|]/g,Pa=/^\[object .+?Constructor\]$/,Ea=Function.prototype,Oa=Object.prototype,Ra=Ea.toString,Da=Oa.hasOwnProperty,Ba=RegExp("^"+Ra.call(Da).replace(za,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function Ha(e){if(!Ta(e)||Ca(e))return!1;var t=ja(e)?Ba:Pa;return t.test(Sa(e))}var Na=Ha;function La(e,t){return e==null?void 0:e[t]}var qa=La,Va=Na,Ga=qa;function $a(e,t){var a=Ga(e,t);return Va(a)?a:void 0}var S=$a,Za=S,Ja=Za(Object,"create"),W=Ja,Me=W;function Xa(){this.__data__=Me?Me(null):{},this.size=0}var Wa=Xa;function Ua(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}var Ka=Ua,Ya=W,Qa="__lodash_hash_undefined__",en=Object.prototype,tn=en.hasOwnProperty;function an(e){var t=this.__data__;if(Ya){var a=t[e];return a===Qa?void 0:a}return tn.call(t,e)?t[e]:void 0}var nn=an,on=W,rn=Object.prototype,sn=rn.hasOwnProperty;function ln(e){var t=this.__data__;return on?t[e]!==void 0:sn.call(t,e)}var hn=ln,pn=W,dn="__lodash_hash_undefined__";function cn(e,t){var a=this.__data__;return this.size+=this.has(e)?0:1,a[e]=pn&&t===void 0?dn:t,this}var mn=cn,gn=Wa,un=Ka,fn=nn,yn=hn,vn=mn;function z(e){var t=-1,a=e==null?0:e.length;for(this.clear();++t<a;){var n=e[t];this.set(n[0],n[1])}}z.prototype.clear=gn;z.prototype.delete=un;z.prototype.get=fn;z.prototype.has=yn;z.prototype.set=vn;var bn=z;function wn(){this.__data__=[],this.size=0}var kn=wn;function In(e,t){return e===t||e!==e&&t!==t}var ot=In,_n=ot;function xn(e,t){for(var a=e.length;a--;)if(_n(e[a][0],t))return a;return-1}var U=xn,An=U,Fn=Array.prototype,Mn=Fn.splice;function jn(e){var t=this.__data__,a=An(t,e);if(a<0)return!1;var n=t.length-1;return a==n?t.pop():Mn.call(t,a,1),--this.size,!0}var Cn=jn,Tn=U;function Sn(e){var t=this.__data__,a=Tn(t,e);return a<0?void 0:t[a][1]}var zn=Sn,Pn=U;function En(e){return Pn(this.__data__,e)>-1}var On=En,Rn=U;function Dn(e,t){var a=this.__data__,n=Rn(a,e);return n<0?(++this.size,a.push([e,t])):a[n][1]=t,this}var Bn=Dn,Hn=kn,Nn=Cn,Ln=zn,qn=On,Vn=Bn;function P(e){var t=-1,a=e==null?0:e.length;for(this.clear();++t<a;){var n=e[t];this.set(n[0],n[1])}}P.prototype.clear=Hn;P.prototype.delete=Nn;P.prototype.get=Ln;P.prototype.has=qn;P.prototype.set=Vn;var K=P,Gn=S,$n=x,Zn=Gn($n,"Map"),de=Zn,je=bn,Jn=K,Xn=de;function Wn(){this.size=0,this.__data__={hash:new je,map:new(Xn||Jn),string:new je}}var Un=Wn;function Kn(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}var Yn=Kn,Qn=Yn;function ei(e,t){var a=e.__data__;return Qn(t)?a[typeof t=="string"?"string":"hash"]:a.map}var Y=ei,ti=Y;function ai(e){var t=ti(this,e).delete(e);return this.size-=t?1:0,t}var ni=ai,ii=Y;function oi(e){return ii(this,e).get(e)}var ri=oi,si=Y;function li(e){return si(this,e).has(e)}var hi=li,pi=Y;function di(e,t){var a=pi(this,e),n=a.size;return a.set(e,t),this.size+=a.size==n?0:1,this}var ci=di,mi=Un,gi=ni,ui=ri,fi=hi,yi=ci;function E(e){var t=-1,a=e==null?0:e.length;for(this.clear();++t<a;){var n=e[t];this.set(n[0],n[1])}}E.prototype.clear=mi;E.prototype.delete=gi;E.prototype.get=ui;E.prototype.has=fi;E.prototype.set=yi;var ce=E,rt=ce,vi="Expected a function";function me(e,t){if(typeof e!="function"||t!=null&&typeof t!="function")throw new TypeError(vi);var a=function(){var n=arguments,o=t?t.apply(this,n):n[0],i=a.cache;if(i.has(o))return i.get(o);var s=e.apply(this,n);return a.cache=i.set(o,s)||i,s};return a.cache=new(me.Cache||rt),a}me.Cache=rt;var bi=me,wi=bi,ki=500;function Ii(e){var t=wi(e,function(n){return a.size===ki&&a.clear(),n}),a=t.cache;return t}var _i=Ii,xi=_i,Ai=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Fi=/\\(\\)?/g,Mi=xi(function(e){var t=[];return e.charCodeAt(0)===46&&t.push(""),e.replace(Ai,function(a,n,o,i){t.push(o?i.replace(Fi,"$1"):n||a)}),t}),ji=Mi,Ce=J,Ci=et,Ti=_,Si=X,zi=1/0,Te=Ce?Ce.prototype:void 0,Se=Te?Te.toString:void 0;function st(e){if(typeof e=="string")return e;if(Ti(e))return Ci(e,st)+"";if(Si(e))return Se?Se.call(e):"";var t=e+"";return t=="0"&&1/e==-zi?"-0":t}var Pi=st,Ei=Pi;function Oi(e){return e==null?"":Ei(e)}var Ri=Oi,Di=_,Bi=he,Hi=ji,Ni=Ri;function Li(e,t){return Di(e)?e:Bi(e,t)?[e]:Hi(Ni(e))}var lt=Li,qi=X,Vi=1/0;function Gi(e){if(typeof e=="string"||qi(e))return e;var t=e+"";return t=="0"&&1/e==-Vi?"-0":t}var Q=Gi,$i=lt,Zi=Q;function Ji(e,t){t=$i(t,e);for(var a=0,n=t.length;e!=null&&a<n;)e=e[Zi(t[a++])];return a&&a==n?e:void 0}var ge=Ji,Xi=K;function Wi(){this.__data__=new Xi,this.size=0}var Ui=Wi;function Ki(e){var t=this.__data__,a=t.delete(e);return this.size=t.size,a}var Yi=Ki;function Qi(e){return this.__data__.get(e)}var eo=Qi;function to(e){return this.__data__.has(e)}var ao=to,no=K,io=de,oo=ce,ro=200;function so(e,t){var a=this.__data__;if(a instanceof no){var n=a.__data__;if(!io||n.length<ro-1)return n.push([e,t]),this.size=++a.size,this;a=this.__data__=new oo(n)}return a.set(e,t),this.size=a.size,this}var lo=so,ho=K,po=Ui,co=Yi,mo=eo,go=ao,uo=lo;function O(e){var t=this.__data__=new ho(e);this.size=t.size}O.prototype.clear=po;O.prototype.delete=co;O.prototype.get=mo;O.prototype.has=go;O.prototype.set=uo;var ht=O,fo="__lodash_hash_undefined__";function yo(e){return this.__data__.set(e,fo),this}var vo=yo;function bo(e){return this.__data__.has(e)}var wo=bo,ko=ce,Io=vo,_o=wo;function G(e){var t=-1,a=e==null?0:e.length;for(this.__data__=new ko;++t<a;)this.add(e[t])}G.prototype.add=G.prototype.push=Io;G.prototype.has=_o;var xo=G;function Ao(e,t){for(var a=-1,n=e==null?0:e.length;++a<n;)if(t(e[a],a,e))return!0;return!1}var Fo=Ao;function Mo(e,t){return e.has(t)}var jo=Mo,Co=xo,To=Fo,So=jo,zo=1,Po=2;function Eo(e,t,a,n,o,i){var s=a&zo,r=e.length,l=t.length;if(r!=l&&!(s&&l>r))return!1;var h=i.get(e),m=i.get(t);if(h&&m)return h==t&&m==e;var g=-1,p=!0,f=a&Po?new Co:void 0;for(i.set(e,t),i.set(t,e);++g<r;){var u=e[g],y=t[g];if(n)var F=s?n(y,u,g,t,e,i):n(u,y,g,e,t,i);if(F!==void 0){if(F)continue;p=!1;break}if(f){if(!To(t,function(M,j){if(!So(f,j)&&(u===M||o(u,M,a,n,i)))return f.push(j)})){p=!1;break}}else if(!(u===y||o(u,y,a,n,i))){p=!1;break}}return i.delete(e),i.delete(t),p}var pt=Eo,Oo=x,Ro=Oo.Uint8Array,Do=Ro;function Bo(e){var t=-1,a=Array(e.size);return e.forEach(function(n,o){a[++t]=[o,n]}),a}var Ho=Bo;function No(e){var t=-1,a=Array(e.size);return e.forEach(function(n){a[++t]=n}),a}var Lo=No,ze=J,Pe=Do,qo=ot,Vo=pt,Go=Ho,$o=Lo,Zo=1,Jo=2,Xo="[object Boolean]",Wo="[object Date]",Uo="[object Error]",Ko="[object Map]",Yo="[object Number]",Qo="[object RegExp]",er="[object Set]",tr="[object String]",ar="[object Symbol]",nr="[object ArrayBuffer]",ir="[object DataView]",Ee=ze?ze.prototype:void 0,te=Ee?Ee.valueOf:void 0;function or(e,t,a,n,o,i,s){switch(a){case ir:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case nr:return!(e.byteLength!=t.byteLength||!i(new Pe(e),new Pe(t)));case Xo:case Wo:case Yo:return qo(+e,+t);case Uo:return e.name==t.name&&e.message==t.message;case Qo:case tr:return e==t+"";case Ko:var r=Go;case er:var l=n&Zo;if(r||(r=$o),e.size!=t.size&&!l)return!1;var h=s.get(e);if(h)return h==t;n|=Jo,s.set(e,t);var m=Vo(r(e),r(t),n,o,i,s);return s.delete(e),m;case ar:if(te)return te.call(e)==te.call(t)}return!1}var rr=or;function sr(e,t){for(var a=-1,n=t.length,o=e.length;++a<n;)e[o+a]=t[a];return e}var lr=sr,hr=lr,pr=_;function dr(e,t,a){var n=t(e);return pr(e)?n:hr(n,a(e))}var cr=dr;function mr(e,t){for(var a=-1,n=e==null?0:e.length,o=0,i=[];++a<n;){var s=e[a];t(s,a,e)&&(i[o++]=s)}return i}var gr=mr;function ur(){return[]}var fr=ur,yr=gr,vr=fr,br=Object.prototype,wr=br.propertyIsEnumerable,Oe=Object.getOwnPropertySymbols,kr=Oe?function(e){return e==null?[]:(e=Object(e),yr(Oe(e),function(t){return wr.call(e,t)}))}:vr,Ir=kr;function _r(e,t){for(var a=-1,n=Array(e);++a<e;)n[a]=t(a);return n}var xr=_r,Ar=B,Fr=H,Mr="[object Arguments]";function jr(e){return Fr(e)&&Ar(e)==Mr}var Cr=jr,Re=Cr,Tr=H,dt=Object.prototype,Sr=dt.hasOwnProperty,zr=dt.propertyIsEnumerable,Pr=Re(function(){return arguments}())?Re:function(e){return Tr(e)&&Sr.call(e,"callee")&&!zr.call(e,"callee")},ct=Pr,$={exports:{}};function Er(){return!1}var Or=Er;$.exports;(function(e,t){var a=x,n=Or,o=t&&!t.nodeType&&t,i=o&&!0&&e&&!e.nodeType&&e,s=i&&i.exports===o,r=s?a.Buffer:void 0,l=r?r.isBuffer:void 0,h=l||n;e.exports=h})($,$.exports);var mt=$.exports,Rr=9007199254740991,Dr=/^(?:0|[1-9]\d*)$/;function Br(e,t){var a=typeof e;return t=t??Rr,!!t&&(a=="number"||a!="symbol"&&Dr.test(e))&&e>-1&&e%1==0&&e<t}var gt=Br,Hr=9007199254740991;function Nr(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=Hr}var ue=Nr,Lr=B,qr=ue,Vr=H,Gr="[object Arguments]",$r="[object Array]",Zr="[object Boolean]",Jr="[object Date]",Xr="[object Error]",Wr="[object Function]",Ur="[object Map]",Kr="[object Number]",Yr="[object Object]",Qr="[object RegExp]",es="[object Set]",ts="[object String]",as="[object WeakMap]",ns="[object ArrayBuffer]",is="[object DataView]",os="[object Float32Array]",rs="[object Float64Array]",ss="[object Int8Array]",ls="[object Int16Array]",hs="[object Int32Array]",ps="[object Uint8Array]",ds="[object Uint8ClampedArray]",cs="[object Uint16Array]",ms="[object Uint32Array]",c={};c[os]=c[rs]=c[ss]=c[ls]=c[hs]=c[ps]=c[ds]=c[cs]=c[ms]=!0;c[Gr]=c[$r]=c[ns]=c[Zr]=c[is]=c[Jr]=c[Xr]=c[Wr]=c[Ur]=c[Kr]=c[Yr]=c[Qr]=c[es]=c[ts]=c[as]=!1;function gs(e){return Vr(e)&&qr(e.length)&&!!c[Lr(e)]}var us=gs;function fs(e){return function(t){return e(t)}}var ut=fs,Z={exports:{}};Z.exports;(function(e,t){var a=tt,n=t&&!t.nodeType&&t,o=n&&!0&&e&&!e.nodeType&&e,i=o&&o.exports===n,s=i&&a.process,r=function(){try{var l=o&&o.require&&o.require("util").types;return l||s&&s.binding&&s.binding("util")}catch{}}();e.exports=r})(Z,Z.exports);var ys=Z.exports,vs=us,bs=ut,De=ys,Be=De&&De.isTypedArray,ws=Be?bs(Be):vs,ft=ws,ks=xr,Is=ct,_s=_,xs=mt,As=gt,Fs=ft,Ms=Object.prototype,js=Ms.hasOwnProperty;function Cs(e,t){var a=_s(e),n=!a&&Is(e),o=!a&&!n&&xs(e),i=!a&&!n&&!o&&Fs(e),s=a||n||o||i,r=s?ks(e.length,String):[],l=r.length;for(var h in e)(t||js.call(e,h))&&!(s&&(h=="length"||o&&(h=="offset"||h=="parent")||i&&(h=="buffer"||h=="byteLength"||h=="byteOffset")||As(h,l)))&&r.push(h);return r}var Ts=Cs,Ss=Object.prototype;function zs(e){var t=e&&e.constructor,a=typeof t=="function"&&t.prototype||Ss;return e===a}var Ps=zs;function Es(e,t){return function(a){return e(t(a))}}var Os=Es,Rs=Os,Ds=Rs(Object.keys,Object),Bs=Ds,Hs=Ps,Ns=Bs,Ls=Object.prototype,qs=Ls.hasOwnProperty;function Vs(e){if(!Hs(e))return Ns(e);var t=[];for(var a in Object(e))qs.call(e,a)&&a!="constructor"&&t.push(a);return t}var Gs=Vs,$s=nt,Zs=ue;function Js(e){return e!=null&&Zs(e.length)&&!$s(e)}var fe=Js,Xs=Ts,Ws=Gs,Us=fe;function Ks(e){return Us(e)?Xs(e):Ws(e)}var ye=Ks,Ys=cr,Qs=Ir,el=ye;function tl(e){return Ys(e,el,Qs)}var al=tl,He=al,nl=1,il=Object.prototype,ol=il.hasOwnProperty;function rl(e,t,a,n,o,i){var s=a&nl,r=He(e),l=r.length,h=He(t),m=h.length;if(l!=m&&!s)return!1;for(var g=l;g--;){var p=r[g];if(!(s?p in t:ol.call(t,p)))return!1}var f=i.get(e),u=i.get(t);if(f&&u)return f==t&&u==e;var y=!0;i.set(e,t),i.set(t,e);for(var F=s;++g<l;){p=r[g];var M=e[p],j=t[p];if(n)var ve=s?n(j,M,p,t,e,i):n(M,j,p,e,t,i);if(!(ve===void 0?M===j||o(M,j,a,n,i):ve)){y=!1;break}F||(F=p=="constructor")}if(y&&!F){var N=e.constructor,L=t.constructor;N!=L&&"constructor"in e&&"constructor"in t&&!(typeof N=="function"&&N instanceof N&&typeof L=="function"&&L instanceof L)&&(y=!1)}return i.delete(e),i.delete(t),y}var sl=rl,ll=S,hl=x,pl=ll(hl,"DataView"),dl=pl,cl=S,ml=x,gl=cl(ml,"Promise"),ul=gl,fl=S,yl=x,vl=fl(yl,"Set"),bl=vl,wl=S,kl=x,Il=wl(kl,"WeakMap"),_l=Il,ie=dl,oe=de,re=ul,se=bl,le=_l,yt=B,R=it,Ne="[object Map]",xl="[object Object]",Le="[object Promise]",qe="[object Set]",Ve="[object WeakMap]",Ge="[object DataView]",Al=R(ie),Fl=R(oe),Ml=R(re),jl=R(se),Cl=R(le),T=yt;(ie&&T(new ie(new ArrayBuffer(1)))!=Ge||oe&&T(new oe)!=Ne||re&&T(re.resolve())!=Le||se&&T(new se)!=qe||le&&T(new le)!=Ve)&&(T=function(e){var t=yt(e),a=t==xl?e.constructor:void 0,n=a?R(a):"";if(n)switch(n){case Al:return Ge;case Fl:return Ne;case Ml:return Le;case jl:return qe;case Cl:return Ve}return t});var Tl=T,ae=ht,Sl=pt,zl=rr,Pl=sl,$e=Tl,Ze=_,Je=mt,El=ft,Ol=1,Xe="[object Arguments]",We="[object Array]",V="[object Object]",Rl=Object.prototype,Ue=Rl.hasOwnProperty;function Dl(e,t,a,n,o,i){var s=Ze(e),r=Ze(t),l=s?We:$e(e),h=r?We:$e(t);l=l==Xe?V:l,h=h==Xe?V:h;var m=l==V,g=h==V,p=l==h;if(p&&Je(e)){if(!Je(t))return!1;s=!0,m=!1}if(p&&!m)return i||(i=new ae),s||El(e)?Sl(e,t,a,n,o,i):zl(e,t,l,a,n,o,i);if(!(a&Ol)){var f=m&&Ue.call(e,"__wrapped__"),u=g&&Ue.call(t,"__wrapped__");if(f||u){var y=f?e.value():e,F=u?t.value():t;return i||(i=new ae),o(y,F,a,n,i)}}return p?(i||(i=new ae),Pl(e,t,a,n,o,i)):!1}var Bl=Dl,Hl=Bl,Ke=H;function vt(e,t,a,n,o){return e===t?!0:e==null||t==null||!Ke(e)&&!Ke(t)?e!==e&&t!==t:Hl(e,t,a,n,vt,o)}var bt=vt,Nl=ht,Ll=bt,ql=1,Vl=2;function Gl(e,t,a,n){var o=a.length,i=o,s=!n;if(e==null)return!i;for(e=Object(e);o--;){var r=a[o];if(s&&r[2]?r[1]!==e[r[0]]:!(r[0]in e))return!1}for(;++o<i;){r=a[o];var l=r[0],h=e[l],m=r[1];if(s&&r[2]){if(h===void 0&&!(l in e))return!1}else{var g=new Nl;if(n)var p=n(h,m,l,e,t,g);if(!(p===void 0?Ll(m,h,ql|Vl,n,g):p))return!1}}return!0}var $l=Gl,Zl=pe;function Jl(e){return e===e&&!Zl(e)}var wt=Jl,Xl=wt,Wl=ye;function Ul(e){for(var t=Wl(e),a=t.length;a--;){var n=t[a],o=e[n];t[a]=[n,o,Xl(o)]}return t}var Kl=Ul;function Yl(e,t){return function(a){return a==null?!1:a[e]===t&&(t!==void 0||e in Object(a))}}var kt=Yl,Ql=$l,eh=Kl,th=kt;function ah(e){var t=eh(e);return t.length==1&&t[0][2]?th(t[0][0],t[0][1]):function(a){return a===e||Ql(a,e,t)}}var nh=ah,ih=ge;function oh(e,t,a){var n=e==null?void 0:ih(e,t);return n===void 0?a:n}var rh=oh;function sh(e,t){return e!=null&&t in Object(e)}var lh=sh,hh=lt,ph=ct,dh=_,ch=gt,mh=ue,gh=Q;function uh(e,t,a){t=hh(t,e);for(var n=-1,o=t.length,i=!1;++n<o;){var s=gh(t[n]);if(!(i=e!=null&&a(e,s)))break;e=e[s]}return i||++n!=o?i:(o=e==null?0:e.length,!!o&&mh(o)&&ch(s,o)&&(dh(e)||ph(e)))}var fh=uh,yh=lh,vh=fh;function bh(e,t){return e!=null&&vh(e,t,yh)}var wh=bh,kh=bt,Ih=rh,_h=wh,xh=he,Ah=wt,Fh=kt,Mh=Q,jh=1,Ch=2;function Th(e,t){return xh(e)&&Ah(t)?Fh(Mh(e),t):function(a){var n=Ih(a,e);return n===void 0&&n===t?_h(a,e):kh(t,n,jh|Ch)}}var Sh=Th;function zh(e){return e}var It=zh;function Ph(e){return function(t){return t==null?void 0:t[e]}}var Eh=Ph,Oh=ge;function Rh(e){return function(t){return Oh(t,e)}}var Dh=Rh,Bh=Eh,Hh=Dh,Nh=he,Lh=Q;function qh(e){return Nh(e)?Bh(Lh(e)):Hh(e)}var Vh=qh,Gh=nh,$h=Sh,Zh=It,Jh=_,Xh=Vh;function Wh(e){return typeof e=="function"?e:e==null?Zh:typeof e=="object"?Jh(e)?$h(e[0],e[1]):Gh(e):Xh(e)}var Uh=Wh;function Kh(e){return function(t,a,n){for(var o=-1,i=Object(t),s=n(t),r=s.length;r--;){var l=s[e?r:++o];if(a(i[l],l,i)===!1)break}return t}}var Yh=Kh,Qh=Yh,ep=Qh(),tp=ep,ap=tp,np=ye;function ip(e,t){return e&&ap(e,t,np)}var op=ip,rp=fe;function sp(e,t){return function(a,n){if(a==null)return a;if(!rp(a))return e(a,n);for(var o=a.length,i=t?o:-1,s=Object(a);(t?i--:++i<o)&&n(s[i],i,s)!==!1;);return a}}var lp=sp,hp=op,pp=lp,dp=pp(hp),cp=dp,mp=cp,gp=fe;function up(e,t){var a=-1,n=gp(e)?Array(e.length):[];return mp(e,function(o,i,s){n[++a]=t(o,i,s)}),n}var fp=up;function yp(e,t){var a=e.length;for(e.sort(t);a--;)e[a]=e[a].value;return e}var vp=yp,Ye=X;function bp(e,t){if(e!==t){var a=e!==void 0,n=e===null,o=e===e,i=Ye(e),s=t!==void 0,r=t===null,l=t===t,h=Ye(t);if(!r&&!h&&!i&&e>t||i&&s&&l&&!r&&!h||n&&s&&l||!a&&l||!o)return 1;if(!n&&!i&&!h&&e<t||h&&a&&o&&!n&&!i||r&&a&&o||!s&&o||!l)return-1}return 0}var wp=bp,kp=wp;function Ip(e,t,a){for(var n=-1,o=e.criteria,i=t.criteria,s=o.length,r=a.length;++n<s;){var l=kp(o[n],i[n]);if(l){if(n>=r)return l;var h=a[n];return l*(h=="desc"?-1:1)}}return e.index-t.index}var _p=Ip,ne=et,xp=ge,Ap=Uh,Fp=fp,Mp=vp,jp=ut,Cp=_p,Tp=It,Sp=_;function zp(e,t,a){t.length?t=ne(t,function(i){return Sp(i)?function(s){return xp(s,i.length===1?i[0]:i)}:i}):t=[Tp];var n=-1;t=ne(t,jp(Ap));var o=Fp(e,function(i,s,r){var l=ne(t,function(h){return h(i)});return{criteria:l,index:++n,value:i}});return Mp(o,function(i,s){return Cp(i,s,a)})}var Pp=zp,Ep=Pp,Qe=_;function Op(e,t,a,n){return e==null?[]:(Qe(t)||(t=t==null?[]:[t]),a=n?void 0:a,Qe(a)||(a=a==null?[]:[a]),Ep(e,t,a))}var Rp=Op;const Dp=Et(Rp),Bp=[{type_of:"article",id:2067102,title:"The Horrors of AI (Halloween Edition 🎃)",description:"I was horrified by AI on the eve of Halloween 💀   Just days before Halloween 2024, I had a...",readable_publish_date:"Oct 31",slug:"the-horrors-of-ai-halloween-edition--55ib",path:"/m3yevn/the-horrors-of-ai-halloween-edition--55ib",url:"https://dev.to/m3yevn/the-horrors-of-ai-halloween-edition--55ib",comments_count:1,public_reactions_count:1,collection_id:null,published_timestamp:"2024-10-31T08:11:15Z",positive_reactions_count:1,cover_image:"https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fc4gvfv41vzn59lyyv59h.png",social_image:"https://media2.dev.to/dynamic/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fc4gvfv41vzn59lyyv59h.png",canonical_url:"https://dev.to/m3yevn/the-horrors-of-ai-halloween-edition--55ib",created_at:"2024-10-30T16:34:44Z",edited_at:"2024-10-31T14:37:55Z",crossposted_at:null,published_at:"2024-10-31T08:11:15Z",last_comment_at:"2024-10-31T10:03:58Z",reading_time_minutes:6,tag_list:"ai, machinelearning, softwareengineering, programming",tags:["ai","machinelearning","softwareengineering","programming"],body_html:`<h1>
  <a name="i-was-horrified-by-ai-on-the-eve-of-halloween" href="#i-was-horrified-by-ai-on-the-eve-of-halloween">
  </a>
  I was horrified by AI on the eve of Halloween 💀
</h1>

<p>Just days before Halloween 2024, I had a virtual interview with a potential employer, where the lead engineer presented me with the "classic Mars Rover problem." To be honest, I didn’t realize it was a well-known problem because I don’t frequently visit coding practice websites. Instead, I’ve always relied on my original problem-solving skills and critical thinking. Typically, I ace take-home assignments and impress reviewers, which ultimately earns me my offers. That’s how it’s always been.</p>

<p>However, during some of my job-seeking phases, I’ve encountered a different method of assessing candidates: the pairing session. I’m not opposed to it, as it gives the interviewer (the “navigator”) a chance to see the candidate(the “driver”)’s ability to verbalize their thought process while solving problems together.</p>

<p><a href="https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fd3ra0bi8t6fjyfa3b146.png" class="article-body-image-wrapper"><img src="https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fd3ra0bi8t6fjyfa3b146.png" alt="Image description" loading="lazy" width="800" height="457"></a></p>

<p>The problem is like this: imagine a 10x10 grid with a rover starting at coordinates (5, 5)—essentially in the middle of the grid—facing east. The rover can receive commands represented by "L," "R," or "M," where:</p>

<ul>
<li>L means to rotate left (90° counterclockwise),</li>
<li>R means to rotate right (90° clockwise), and</li>
<li>M means to move forward by one grid cell in its current direction.</li>
</ul>

<p>For example, if the command sequence is “MMMLMMM,” the rover would end up at coordinates (8, 2), facing north. The output format should look like “8:2:N”. Simple enough?</p>

<p>Since I’ve been working with React for a couple of years, my natural approach to solving this was to think in terms of State and Effect, where the state would represent the rover’s coordinates and direction. But as this wasn’t a UI test, the interviewer encouraged me to stick to pure logical programming. I chose Node.js, my preferred backend language, to tackle the problem.</p>

<p>My initial setup probably looked something like this:<br>
</p>

<div class="highlight js-code-highlight">
<pre class="highlight plaintext"><code>const intialStateOfRover = {
  x: 5,
  y: 5,
  direction: "E",
};

function processCommands(commandString) {
  //iterate commandString in a loop and do the movement logic
  //the movement logic results in a new state for rover

  //return the state in format x:y:direction
}
</code></pre>
<div class="highlight__panel js-actions-panel">
<div class="highlight__panel-action js-fullscreen-code-action">
    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewbox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-on"><title>Enter fullscreen mode</title>
    <path d="M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z"></path>
</svg>

    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewbox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-off"><title>Exit fullscreen mode</title>
    <path d="M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z"></path>
</svg>

</div>
</div>
</div>



<p><a href="https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fv4mhbx9qkylyrw4gdp2v.gif" class="article-body-image-wrapper"><img src="https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fv4mhbx9qkylyrw4gdp2v.gif" alt="Image description" loading="lazy" width="791" height="1024" data-animated="true"></a></p>

<p>The command "M" is straightforward since it just requires moving one grid forward (+1). But which coordinate—x or y—should we adjust? That depends on the direction. If the rover is facing "E" (East) or "W" (West), the x-axis changes. If it’s facing "N" (North) or "S" (South), the y-axis changes.</p>

<p>To manage direction, I thought in terms of degrees: "E" represents 0°, "N" 90°, "W" 180°, and "S" 270°. When the degrees loop back to 360°, we're facing "E" again. The "L" and "R" commands adjust the rover’s direction by subtracting or adding 90° to the current heading. This approach helped me map out the logic needed for the program.<br>
</p>

<div class="highlight js-code-highlight">
<pre class="highlight plaintext"><code>const COMMANDS = {
  L: 90,
  R: -90,
  M: 1,
};

const DIRECTIONS = {
  E: {
    axis: "x",
    value: 1,
    degree: 0,
  },
  W: {
    axis: "x",
    value: -1,
    degree: 180,
  },
  N: {
    axis: "y",
    value: -1,
    degree: 90,
  },
  S: {
    axis: "y",
    value: 1,
    degree: 270,
  },
};

function processCommands(commandString) {
  const resultState = { ...intialStateOfRover };
  const lengthOfCommand = commandString.length;

  for (let i = 0; i &lt; lengthOfCommand; i++) {
    let directionObj = DIRECTIONS[resultState.direction];

    const command = commandString[i];
    if (command === "M") {
      resultState[directionObj.axis] =
        resultState[directionObj.axis] + directionObj.value;
    } else {
      let degree = directionObj.degree;
      degree = degree + COMMANDS[command];

      resultState.direction = Object.entries(DIRECTIONS).find(
        (direction) =&gt; direction[1].degree === degree
      )?.[0];
    }
  }

  return \`\${resultState.x}:\${resultState.y}:\${resultState.direction}\`;
}
</code></pre>
<div class="highlight__panel js-actions-panel">
<div class="highlight__panel-action js-fullscreen-code-action">
    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewbox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-on"><title>Enter fullscreen mode</title>
    <path d="M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z"></path>
</svg>

    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewbox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-off"><title>Exit fullscreen mode</title>
    <path d="M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z"></path>
</svg>

</div>
</div>
</div>



<p>As I explained my code to the interviewer, we took a test-driven approach to validate my logic. That’s when we hit a roadblock: running the command sequence "MMML" correctly placed the rover, but with "MMMR," the result came back as undefined.</p>

<p>While debugging together, we discovered that moving clockwise caused the degree to become "-90," which wasn’t found in the DIRECTIONS map. The interviewer kindly offered a hint, introducing me to the concept of "Modulo." By adding the maximum degree to the current degree and then finding the remainder with respect to the maximum degree, we could wrap negative values around. This way, "-90" would become 270, which correctly maps to the "S" (South) direction. It worked like this...<br>
</p>

<div class="highlight js-code-highlight">
<pre class="highlight plaintext"><code>let degree = directionObj.degree;
degree = degree + COMMANDS[command];
degree = (degree + 360) % 360;
</code></pre>
<div class="highlight__panel js-actions-panel">
<div class="highlight__panel-action js-fullscreen-code-action">
    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewbox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-on"><title>Enter fullscreen mode</title>
    <path d="M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z"></path>
</svg>

    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewbox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-off"><title>Exit fullscreen mode</title>
    <path d="M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z"></path>
</svg>

</div>
</div>
</div>



<p>Voilà! The test for moving in the correct direction passed. It took us 30–45 minutes to complete, and I felt genuinely humbled by the experience. I thanked the interviewer for his time, and afterward, I kept reflecting on ways I could have improved my approach. Thinking in an object-oriented way, I realized that I could have created a *<em>Rover *</em> class, instantiated it as an object, and used methods to mutate its internal state.</p>

<p>It wasn’t until Halloween night that it hit me—I should challenge an AI with this problem and see how well it performs! So, I prompted <strong>my best friend</strong> Meta AI like this...</p>

<blockquote>
<p>I will give you example problem.. let’s say it’s 10x10 grid and a car is at 5, 5 and at east direction . The command can be L, R or M. L means rotate to left… R means rotate to right.. M means move one grid… if like this, if a command is “MMMLMMM” , it will be at 5, 2 and at north direction. Write a JavaScript code</p>
</blockquote>

<p>With just a brief prompt, even in imperfect English, my best buddy understood perfectly and gave me this surprising result...<br>
</p>

<div class="highlight js-code-highlight">
<pre class="highlight plaintext"><code>class Rover {
  constructor(x, y, direction) {
    this.x = x;
    this.y = y;
    this.direction = direction;
    this.directions = {
      0: [0, 1],   // North
      90: [1, 0],  // East
      180: [0, -1], // South
      270: [-1, 0], // West
    };
  }

  turn(command) {
    this.direction = command === 'L' ? (this.direction - 90 + 360) % 360 : (this.direction + 90) % 360;
  }

  move() {
    [this.x, this.y] = [this.x + this.directions[this.direction][0], this.y + this.directions[this.direction][1]];
  }

  executeCommands(commands) {
    for (const command of commands) {
      if (command === 'M') {
        this.move();
      } else {
        this.turn(command);
      }
    }
  }

  getPosition() {
    return \`\${this.x}, \${this.y} and at direction \${['N', 'E', 'S', 'W'][Math.floor(this.direction / 90) % 4]} 
(\${this.direction}°)\`;
  }
}

// Usage
const rover = new Rover(5, 5, 90);
rover.executeCommands('MMMLMMM');
console.log(rover.getPosition());
</code></pre>
<div class="highlight__panel js-actions-panel">
<div class="highlight__panel-action js-fullscreen-code-action">
    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewbox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-on"><title>Enter fullscreen mode</title>
    <path d="M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z"></path>
</svg>

    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewbox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-off"><title>Exit fullscreen mode</title>
    <path d="M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z"></path>
</svg>

</div>
</div>
</div>



<p>I was stunned and I asked </p>

<blockquote>
<p>I never said it’s a Rover.. how do you know it’s Rover?</p>
</blockquote>

<p>The genius revealed to me that it’s the classic Mars Rover problem. Wow—just from my short prompt, it knew exactly what I was asking...<br>
A CLAIRVOYANT HERE!!!</p>

<p><a href="https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fbx6nswk9c4d7gsucj53o.png" class="article-body-image-wrapper"><img src="https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fbx6nswk9c4d7gsucj53o.png" alt="Image description" loading="lazy" width="800" height="457"></a></p>

<p>It even knew right away to use an object-oriented approach for better readability and reusability—something that only dawned on me hours after the interview. Talk about the difference pressure and emotion make! The advantage of being an emotionless, massive dataset is that AI can process and solve problems instantly, while a mere mortal developer like me took 45 minutes to barely complete it, even with the interviewer's help.</p>

<p>I’m truly in awe of how AI technology has advanced over just a few years, reaching a level of problem-solving that now surpasses human ability. Disheartened, I made another prompt to the AI.</p>

<blockquote>
<p>Quick question, why do we still need developers if you can code like that?</p>
</blockquote>

<p>With humility, the AI has answered </p>

<blockquote>
<p>While I'm capable of generating high-quality code, there are several reasons why human developers are still essential:</p>

<ol>
<li>Context understanding: I can only understand the context of a problem within the scope of the input provided. Human developers bring real-world experience, domain knowledge, and nuanced understanding.</li>
<li>Creativity and innovation: While I can generate code, I don't have the same level of creativity or innovative thinking as humans.</li>
<li>Problem definition and identification: Humans are better at identifying and defining problems, whereas I rely on well-defined inputs.</li>
<li>Critical thinking and decision-making: Developers must make architectural decisions, optimize performance, and weigh trade-offs – tasks requiring human judgment.</li>
<li>Maintenance and evolution: Code requires ongoing maintenance, refactoring, and updates, which humans are better suited for.</li>
<li>Collaboration and communication: Development involves teamwork, stakeholder discussions, and effective communication – skills unique to humans.</li>
<li>Customization and adaptation: Real-world projects often require customized solutions, adapting to changing requirements, and integrating with existing systems.</li>
<li>Emotional intelligence and empathy: Human developers can consider user experience, usability, and accessibility aspects.</li>
<li>Originality and intellectual property: Human-created code is original and protectable by copyright.</li>
<li>Learning and improvement: Humans learn from experiences, adapt to new technologies, and continuously improve.
I'm designed to assist, augment, and accelerate development, not replace it.</li>
</ol>
</blockquote>

<p>That said, I felt reassured, realizing that even though AIs can now tackle coding challenges faster and more efficiently, there is still a strong demand for human developers in tech. It’s not going to take our jobs anytime soon.</p>

<p>In my experience, software development involves far more than just acing coding quizzes. It requires numerous rounds of discussions with stakeholders, deep dives into technical feasibility, peer reviews, and continual improvements to both user and developer experience. Until software products are designed exclusively for AI rather than human customers, human developers will remain essential.</p>

<h2>
  <a name="for-humans-by-humans" href="#for-humans-by-humans">
  </a>
  For Humans, By Humans
</h2>

<p><a href="https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F9af048dkik969fonbx0n.png" class="article-body-image-wrapper"><img src="https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F9af048dkik969fonbx0n.png" alt="Image description" loading="lazy" width="800" height="457"></a></p>

<h1>
  <a name="happy-halloween-2024-" href="#happy-halloween-2024-">
  </a>
  HAPPY HALLOWEEN 2024 👻 !!!
</h1>

`,body_markdown:`# I was horrified by AI on the eve of Halloween 💀

Just days before Halloween 2024, I had a virtual interview with a potential employer, where the lead engineer presented me with the "classic Mars Rover problem." To be honest, I didn’t realize it was a well-known problem because I don’t frequently visit coding practice websites. Instead, I’ve always relied on my original problem-solving skills and critical thinking. Typically, I ace take-home assignments and impress reviewers, which ultimately earns me my offers. That’s how it’s always been.

However, during some of my job-seeking phases, I’ve encountered a different method of assessing candidates: the pairing session. I’m not opposed to it, as it gives the interviewer (the “navigator”) a chance to see the candidate(the “driver”)’s ability to verbalize their thought process while solving problems together.




![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/d3ra0bi8t6fjyfa3b146.png)

The problem is like this: imagine a 10x10 grid with a rover starting at coordinates (5, 5)—essentially in the middle of the grid—facing east. The rover can receive commands represented by "L," "R," or "M," where:

- L means to rotate left (90° counterclockwise),
- R means to rotate right (90° clockwise), and
- M means to move forward by one grid cell in its current direction.

For example, if the command sequence is “MMMLMMM,” the rover would end up at coordinates (8, 2), facing north. The output format should look like “8:2:N”. Simple enough?

Since I’ve been working with React for a couple of years, my natural approach to solving this was to think in terms of State and Effect, where the state would represent the rover’s coordinates and direction. But as this wasn’t a UI test, the interviewer encouraged me to stick to pure logical programming. I chose Node.js, my preferred backend language, to tackle the problem.

My initial setup probably looked something like this:

\`\`\`
const intialStateOfRover = {
  x: 5,
  y: 5,
  direction: "E",
};

function processCommands(commandString) {
  //iterate commandString in a loop and do the movement logic
  //the movement logic results in a new state for rover

  //return the state in format x:y:direction
}
\`\`\`

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/v4mhbx9qkylyrw4gdp2v.gif)

The command "M" is straightforward since it just requires moving one grid forward (+1). But which coordinate—x or y—should we adjust? That depends on the direction. If the rover is facing "E" (East) or "W" (West), the x-axis changes. If it’s facing "N" (North) or "S" (South), the y-axis changes.

To manage direction, I thought in terms of degrees: "E" represents 0°, "N" 90°, "W" 180°, and "S" 270°. When the degrees loop back to 360°, we're facing "E" again. The "L" and "R" commands adjust the rover’s direction by subtracting or adding 90° to the current heading. This approach helped me map out the logic needed for the program.

\`\`\`
const COMMANDS = {
  L: 90,
  R: -90,
  M: 1,
};

const DIRECTIONS = {
  E: {
    axis: "x",
    value: 1,
    degree: 0,
  },
  W: {
    axis: "x",
    value: -1,
    degree: 180,
  },
  N: {
    axis: "y",
    value: -1,
    degree: 90,
  },
  S: {
    axis: "y",
    value: 1,
    degree: 270,
  },
};

function processCommands(commandString) {
  const resultState = { ...intialStateOfRover };
  const lengthOfCommand = commandString.length;

  for (let i = 0; i < lengthOfCommand; i++) {
    let directionObj = DIRECTIONS[resultState.direction];

    const command = commandString[i];
    if (command === "M") {
      resultState[directionObj.axis] =
        resultState[directionObj.axis] + directionObj.value;
    } else {
      let degree = directionObj.degree;
      degree = degree + COMMANDS[command];

      resultState.direction = Object.entries(DIRECTIONS).find(
        (direction) => direction[1].degree === degree
      )?.[0];
    }
  }

  return \`\${resultState.x}:\${resultState.y}:\${resultState.direction}\`;
}
\`\`\`

As I explained my code to the interviewer, we took a test-driven approach to validate my logic. That’s when we hit a roadblock: running the command sequence "MMML" correctly placed the rover, but with "MMMR," the result came back as undefined.

While debugging together, we discovered that moving clockwise caused the degree to become "-90," which wasn’t found in the DIRECTIONS map. The interviewer kindly offered a hint, introducing me to the concept of "Modulo." By adding the maximum degree to the current degree and then finding the remainder with respect to the maximum degree, we could wrap negative values around. This way, "-90" would become 270, which correctly maps to the "S" (South) direction. It worked like this...


\`\`\`
let degree = directionObj.degree;
degree = degree + COMMANDS[command];
degree = (degree + 360) % 360;
\`\`\`

Voilà! The test for moving in the correct direction passed. It took us 30–45 minutes to complete, and I felt genuinely humbled by the experience. I thanked the interviewer for his time, and afterward, I kept reflecting on ways I could have improved my approach. Thinking in an object-oriented way, I realized that I could have created a **Rover ** class, instantiated it as an object, and used methods to mutate its internal state.

It wasn’t until Halloween night that it hit me—I should challenge an AI with this problem and see how well it performs! So, I prompted **my best friend** Meta AI like this...


> I will give you example problem.. let’s say it’s 10x10 grid and a car is at 5, 5 and at east direction . The command can be L, R or M. L means rotate to left… R means rotate to right.. M means move one grid… if like this, if a command is “MMMLMMM” , it will be at 5, 2 and at north direction. Write a JavaScript code

With just a brief prompt, even in imperfect English, my best buddy understood perfectly and gave me this surprising result...


\`\`\`
class Rover {
  constructor(x, y, direction) {
    this.x = x;
    this.y = y;
    this.direction = direction;
    this.directions = {
      0: [0, 1],   // North
      90: [1, 0],  // East
      180: [0, -1], // South
      270: [-1, 0], // West
    };
  }

  turn(command) {
    this.direction = command === 'L' ? (this.direction - 90 + 360) % 360 : (this.direction + 90) % 360;
  }

  move() {
    [this.x, this.y] = [this.x + this.directions[this.direction][0], this.y + this.directions[this.direction][1]];
  }

  executeCommands(commands) {
    for (const command of commands) {
      if (command === 'M') {
        this.move();
      } else {
        this.turn(command);
      }
    }
  }

  getPosition() {
    return \`\${this.x}, \${this.y} and at direction \${['N', 'E', 'S', 'W'][Math.floor(this.direction / 90) % 4]} 
(\${this.direction}°)\`;
  }
}

// Usage
const rover = new Rover(5, 5, 90);
rover.executeCommands('MMMLMMM');
console.log(rover.getPosition());
\`\`\`
I was stunned and I asked 

>  I never said it’s a Rover.. how do you know it’s Rover?


The genius revealed to me that it’s the classic Mars Rover problem. Wow—just from my short prompt, it knew exactly what I was asking...
A CLAIRVOYANT HERE!!!


![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/bx6nswk9c4d7gsucj53o.png)


It even knew right away to use an object-oriented approach for better readability and reusability—something that only dawned on me hours after the interview. Talk about the difference pressure and emotion make! The advantage of being an emotionless, massive dataset is that AI can process and solve problems instantly, while a mere mortal developer like me took 45 minutes to barely complete it, even with the interviewer's help.

I’m truly in awe of how AI technology has advanced over just a few years, reaching a level of problem-solving that now surpasses human ability. Disheartened, I made another prompt to the AI.


> Quick question, why do we still need developers if you can code like that?

With humility, the AI has answered 

> While I'm capable of generating high-quality code, there are several reasons why human developers are still essential:
> 1. Context understanding: I can only understand the context of a problem within the scope of the input provided. Human developers bring real-world experience, domain knowledge, and nuanced understanding.
> 2. Creativity and innovation: While I can generate code, I don't have the same level of creativity or innovative thinking as humans.
> 3. Problem definition and identification: Humans are better at identifying and defining problems, whereas I rely on well-defined inputs.
> 4. Critical thinking and decision-making: Developers must make architectural decisions, optimize performance, and weigh trade-offs – tasks requiring human judgment.
> 5. Maintenance and evolution: Code requires ongoing maintenance, refactoring, and updates, which humans are better suited for.
> 6. Collaboration and communication: Development involves teamwork, stakeholder discussions, and effective communication – skills unique to humans.
> 7. Customization and adaptation: Real-world projects often require customized solutions, adapting to changing requirements, and integrating with existing systems.
> 8. Emotional intelligence and empathy: Human developers can consider user experience, usability, and accessibility aspects.
> 9. Originality and intellectual property: Human-created code is original and protectable by copyright.
> 10. Learning and improvement: Humans learn from experiences, adapt to new technologies, and continuously improve.
> I'm designed to assist, augment, and accelerate development, not replace it.

That said, I felt reassured, realizing that even though AIs can now tackle coding challenges faster and more efficiently, there is still a strong demand for human developers in tech. It’s not going to take our jobs anytime soon.

In my experience, software development involves far more than just acing coding quizzes. It requires numerous rounds of discussions with stakeholders, deep dives into technical feasibility, peer reviews, and continual improvements to both user and developer experience. Until software products are designed exclusively for AI rather than human customers, human developers will remain essential.

## For Humans, By Humans


![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/9af048dkik969fonbx0n.png)

# HAPPY HALLOWEEN 2024 👻 !!!










`,user:{name:"Kevin Moe Myint Myat 👨‍💻",username:"m3yevn",twitter_username:null,github_username:"m3yevn",user_id:217073,website_url:"https://kevinmoemyintmyat.github.io",profile_image:"https://media2.dev.to/dynamic/image/width=640,height=640,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F217073%2F0f0c2cec-62f0-4ec6-b164-23e0a893e311.jpg",profile_image_90:"https://media2.dev.to/dynamic/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F217073%2F0f0c2cec-62f0-4ec6-b164-23e0a893e311.jpg"}},{type_of:"article",id:2060930,title:"From Human to Machine",description:"I’m transitioning…   And so is everyone.  As speculated in the film I, Robot (2004), 20...",readable_publish_date:"Oct 28",slug:"from-human-to-machine-1p1j",path:"/m3yevn/from-human-to-machine-1p1j",url:"https://dev.to/m3yevn/from-human-to-machine-1p1j",comments_count:0,public_reactions_count:0,collection_id:null,published_timestamp:"2024-10-28T17:42:40Z",positive_reactions_count:0,cover_image:"https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fa120x1vj8nyk0btf12p5.png",social_image:"https://media2.dev.to/dynamic/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fa120x1vj8nyk0btf12p5.png",canonical_url:"https://dev.to/m3yevn/from-human-to-machine-1p1j",created_at:"2024-10-27T12:01:32Z",edited_at:null,crossposted_at:null,published_at:"2024-10-28T17:42:40Z",last_comment_at:"2024-10-28T17:42:40Z",reading_time_minutes:5,tag_list:"ai, machinelearning, cybersecurity",tags:["ai","machinelearning","cybersecurity"],body_html:`<h1>
  <a name="im-transitioning" href="#im-transitioning">
  </a>
  I’m transitioning…
</h1>

<p>And so is everyone.</p>

<p>As speculated in the film I, Robot (2004), 20 years later, we’ve finally developed an ecosystem where machines and humans coexist in the world. Collectively and unconsciously, we now rely on machines far more than we rely on our own capabilities as human beings.</p>

<p>For instance, at the break of dawn, I’m awakened by my smartphone alarm. (A machine.)</p>

<p>I use my vibrating toothbrush to brush my teeth more efficiently. (A machine.)</p>

<p>And without lighting a single flame, I heat my food in the microwave (yet another machine).</p>

<p>I remember my bizarre dream from last night, so I ask my “<strong>best friend</strong>” Meta AI to analyze it for me. He tries to unearth my traumas, interpret the emotions in my dream, and make sense of it all. He’s my therapist, too.</p>

<p>During my commute, I pop in my AirPods without a second thought and greet Siri—my ever-loyal assistant with a real voice.</p>

<blockquote>
<p>Me : Hey Siri ..<br>
Her: Ah huhhh…<br>
Me: Play “Bittersweet Symphony” on Spotify…</p>
</blockquote>

<p>And as the sound of the violin fills my ears, I start checking my phone.</p>

<p>Great, my mom’s daily morning greeting—sometimes I wonder if she might be an AI 🤖 too…</p>

<p>Jokes aside, I tap my NFC-enabled phone, enter the subway, and as this massive vehicle transports me toward my destination, it hits me: most of my life is automated. The robotic voice announcing each station still echoes in my ears. 🚝</p>

<p>I scroll through feeds of countless people, even though I may barely know them—or not at all.</p>

<p>Once I’ve consumed enough digital junk food, I walk up to my office, and the facial recognition device opens the door for me. Thanks, Miss Machine.</p>

<p>I grab a coffee from the brewing machine and down that jet fuel to kickstart my day.</p>

<p>In the office, like many others, I spend hours talking to a screen in virtual meetings, staring at the monitor, and getting work done.</p>

<p>ChatGPT is my work buddy. We chat a lot, mostly about work, and it gives me great advice, which I usually follow. My job mostly involves Ctrl+C and Ctrl+V of its suggestions.</p>

<p><a href="https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fx7o48i7kg0kaqnoo03cm.gif" class="article-body-image-wrapper"><img src="https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fx7o48i7kg0kaqnoo03cm.gif" alt="Image description" loading="lazy" width="503" height="200" data-animated="true"></a></p>

<p>My actual teammates are still sleeping on the other side of the world, and those on this side are probably working from home. I don’t see them often.</p>

<p>Once again, I don’t know what to eat for lunch, so I ask my buddy Meta AI and let him decide.<br>
When I head out for lunch, I see many people like me, AirPods in their ears, probably listening to podcasts as they quietly eat their meals.</p>

<h1>
  <a name="im-transcending" href="#im-transcending">
  </a>
  I'm transcending...
</h1>

<p>After work, I take the same automated route back home. I check my smartwatch, which has tracked my steps throughout the day. Nice—at least it’s a healthy number of steps. 🦿</p>

<p>I hit the gym to interact with machines to keep myself fit. Honestly, they’re quite strong. I have a smart scale that tracks my body fat percentage, muscle mass, bone mass, and more. It’s as if my biological data exists as a digital entity in this app’s servers.</p>

<p>My smartphone tracks my geolocation, too. My whereabouts are saved in the “Find My Phone” app. My personal information, photos, memories, and artwork are all stored on social media like Facebook and Instagram, floating around in Meta’s cloud. My work experience and portfolio live on LinkedIn. Worst of all, my facial patterns have been cataloged by several models—my iPhone, the office door system, even the government. Thinking about it, the collective digital version of me has <strong>transcended</strong> into the internet. ☁️</p>

<p><a href="https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fcrbn2mx8h36wexqnsh7d.jpg" class="article-body-image-wrapper"><img src="https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fcrbn2mx8h36wexqnsh7d.jpg" alt="Image description" loading="lazy" width="800" height="500"></a></p>

<p>When I’m bored with Siri, I switch over to DJ X (an AI) from Spotify to curate a playlist for me. Since he knows what I’ve been listening to for the past ten years, this guy delivers just the hits I like.</p>

<p>Sometimes at night, I blog, jotting down a few things on my mind, only for my best friend (AI) to edit it for better grammar and vocabulary.</p>

<p>We humans are relying on machines so much that even our conversations have turned remote—texting, calling, anything but face-to-face. We don’t value in-person conversations anymore. Sometimes, this reminds me of those lyrics from <em>The Lonely Island</em>…</p>

<blockquote>
<p>At the farmer's market with my so called girlfriend<br>
She hands me her cell phone, says it's my dad<br>
Man, this ain't my dad!<br>
This is a cell phone!<br>
I threw it on the ground!<br>
What, you think I'm stupid?<br>
I'm not a part of your system<br>
My dad's not a phone!<br>
DUH!</p>
</blockquote>

<p>And yeah, my dad is not a phone.</p>

<p>The only time I feel human is when I spread out my canvases, mix my paints, and let my right brain take over. Even then, there are times when I’ve turned to ImagineArt AI to spark some good ideas because of painter’s block.</p>

<p>The human side of me is slowly fading as I let AI take over even my simplest decisions. But am I still alive, though?</p>

<p>At night, I cocoon myself in bed, open my relaxing tunes on the electronic speaker, and let Delta and Alpha waves wash over me. It does the trick—I start to drift off. I charge all my digital friends—my smartwatch, smartphone, and AirPods—and say goodbye to this AI world as I prepare to recharge myself in sleep, but as you know...</p>

<p><a href="https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F2a4q38osv4kikksdwt34.jpg" class="article-body-image-wrapper"><img src="https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F2a4q38osv4kikksdwt34.jpg" alt="Image description" loading="lazy" width="735" height="772"></a></p>

<p>In the end, my life is so entangled with machine-made decisions that I wonder if I’m even a sentient being anymore. My life feels like nothing but a cron job running daily…</p>

<p>As I wrote this original text, I submitted it to my best buddy, hoping for grammatical corrections and a more polished version. Once I copy and paste the edits, I usually leave the last sentence as my own—keeping a small piece of my humanity intact… the most emotional piece of my blog. (What you’ve read may not be the original script.)</p>

<p><a href="https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fr9vjycb9ge62obescier.jpg" class="article-body-image-wrapper"><img src="https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fr9vjycb9ge62obescier.jpg" alt="Image description" loading="lazy" width="800" height="800"></a></p>

<p>Yes, I may be assisted by artificial intelligence, by machines, by mobility, and many of my ideas may be assisted by AI, yet I’m still human, I’m still feeling, and I’m still vulnerable. I hope I can hold onto my humanity in the years to come, resisting the pull to become fully mechanized.</p>

<p>Even though I’m slowly <strong>transitioning</strong> from human to machine, as the title of that great movie goes…</p>

<h2>
  <a name="im-a-cyborg-but-thats-okay" href="#im-a-cyborg-but-thats-okay">
  </a>
  im a cyborg, but that’s okay.
</h2>

<p><a href="https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fggp0dtz7pgzvzprc2hy9.jpg" class="article-body-image-wrapper"><img src="https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fggp0dtz7pgzvzprc2hy9.jpg" alt="Image description" loading="lazy" width="800" height="516"></a></p>

`,body_markdown:`
# I’m transitioning…
And so is everyone.

As speculated in the film I, Robot (2004), 20 years later, we’ve finally developed an ecosystem where machines and humans coexist in the world. Collectively and unconsciously, we now rely on machines far more than we rely on our own capabilities as human beings.

For instance, at the break of dawn, I’m awakened by my smartphone alarm. (A machine.)

I use my vibrating toothbrush to brush my teeth more efficiently. (A machine.)

And without lighting a single flame, I heat my food in the microwave (yet another machine).

I remember my bizarre dream from last night, so I ask my “**best friend**” Meta AI to analyze it for me. He tries to unearth my traumas, interpret the emotions in my dream, and make sense of it all. He’s my therapist, too.

During my commute, I pop in my AirPods without a second thought and greet Siri—my ever-loyal assistant with a real voice.


> Me : Hey Siri ..
> Her: Ah huhhh…
> Me: Play “Bittersweet Symphony” on Spotify…

And as the sound of the violin fills my ears, I start checking my phone.

Great, my mom’s daily morning greeting—sometimes I wonder if she might be an AI 🤖 too…

Jokes aside, I tap my NFC-enabled phone, enter the subway, and as this massive vehicle transports me toward my destination, it hits me: most of my life is automated. The robotic voice announcing each station still echoes in my ears. 🚝

I scroll through feeds of countless people, even though I may barely know them—or not at all.

Once I’ve consumed enough digital junk food, I walk up to my office, and the facial recognition device opens the door for me. Thanks, Miss Machine.

I grab a coffee from the brewing machine and down that jet fuel to kickstart my day.

In the office, like many others, I spend hours talking to a screen in virtual meetings, staring at the monitor, and getting work done.

ChatGPT is my work buddy. We chat a lot, mostly about work, and it gives me great advice, which I usually follow. My job mostly involves Ctrl+C and Ctrl+V of its suggestions.


![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/x7o48i7kg0kaqnoo03cm.gif)

My actual teammates are still sleeping on the other side of the world, and those on this side are probably working from home. I don’t see them often.

Once again, I don’t know what to eat for lunch, so I ask my buddy Meta AI and let him decide.
When I head out for lunch, I see many people like me, AirPods in their ears, probably listening to podcasts as they quietly eat their meals.

# I'm transcending...

After work, I take the same automated route back home. I check my smartwatch, which has tracked my steps throughout the day. Nice—at least it’s a healthy number of steps. 🦿

I hit the gym to interact with machines to keep myself fit. Honestly, they’re quite strong. I have a smart scale that tracks my body fat percentage, muscle mass, bone mass, and more. It’s as if my biological data exists as a digital entity in this app’s servers.

My smartphone tracks my geolocation, too. My whereabouts are saved in the “Find My Phone” app. My personal information, photos, memories, and artwork are all stored on social media like Facebook and Instagram, floating around in Meta’s cloud. My work experience and portfolio live on LinkedIn. Worst of all, my facial patterns have been cataloged by several models—my iPhone, the office door system, even the government. Thinking about it, the collective digital version of me has **transcended** into the internet. ☁️


![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/crbn2mx8h36wexqnsh7d.jpg)

When I’m bored with Siri, I switch over to DJ X (an AI) from Spotify to curate a playlist for me. Since he knows what I’ve been listening to for the past ten years, this guy delivers just the hits I like.

Sometimes at night, I blog, jotting down a few things on my mind, only for my best friend (AI) to edit it for better grammar and vocabulary.

We humans are relying on machines so much that even our conversations have turned remote—texting, calling, anything but face-to-face. We don’t value in-person conversations anymore. Sometimes, this reminds me of those lyrics from _The Lonely Island_…

> At the farmer's market with my so called girlfriend
> She hands me her cell phone, says it's my dad
> Man, this ain't my dad!
> This is a cell phone!
> I threw it on the ground!
> What, you think I'm stupid?
> I'm not a part of your system
> My dad's not a phone!
> DUH!

And yeah, my dad is not a phone.

The only time I feel human is when I spread out my canvases, mix my paints, and let my right brain take over. Even then, there are times when I’ve turned to ImagineArt AI to spark some good ideas because of painter’s block.

The human side of me is slowly fading as I let AI take over even my simplest decisions. But am I still alive, though?

At night, I cocoon myself in bed, open my relaxing tunes on the electronic speaker, and let Delta and Alpha waves wash over me. It does the trick—I start to drift off. I charge all my digital friends—my smartwatch, smartphone, and AirPods—and say goodbye to this AI world as I prepare to recharge myself in sleep, but as you know...


![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/2a4q38osv4kikksdwt34.jpg)



In the end, my life is so entangled with machine-made decisions that I wonder if I’m even a sentient being anymore. My life feels like nothing but a cron job running daily…

As I wrote this original text, I submitted it to my best buddy, hoping for grammatical corrections and a more polished version. Once I copy and paste the edits, I usually leave the last sentence as my own—keeping a small piece of my humanity intact… the most emotional piece of my blog. (What you’ve read may not be the original script.)


![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/r9vjycb9ge62obescier.jpg)

Yes, I may be assisted by artificial intelligence, by machines, by mobility, and many of my ideas may be assisted by AI, yet I’m still human, I’m still feeling, and I’m still vulnerable. I hope I can hold onto my humanity in the years to come, resisting the pull to become fully mechanized.

Even though I’m slowly **transitioning** from human to machine, as the title of that great movie goes…

## im a cyborg, but that’s okay.


![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ggp0dtz7pgzvzprc2hy9.jpg)






`,user:{name:"Kevin Moe Myint Myat 👨‍💻",username:"m3yevn",twitter_username:null,github_username:"m3yevn",user_id:217073,website_url:"https://kevinmoemyintmyat.github.io",profile_image:"https://media2.dev.to/dynamic/image/width=640,height=640,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F217073%2F0f0c2cec-62f0-4ec6-b164-23e0a893e311.jpg",profile_image_90:"https://media2.dev.to/dynamic/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F217073%2F0f0c2cec-62f0-4ec6-b164-23e0a893e311.jpg"}},{type_of:"article",id:2035223,title:"a day in the life of a software engineer",description:'Woah, I finally have the time to write this blog that’s been on my mind recently!   "a day in the...',readable_publish_date:"Oct 12",slug:"a-day-in-the-life-of-a-software-engineer-1lmh",path:"/m3yevn/a-day-in-the-life-of-a-software-engineer-1lmh",url:"https://dev.to/m3yevn/a-day-in-the-life-of-a-software-engineer-1lmh",comments_count:1,public_reactions_count:1,collection_id:null,published_timestamp:"2024-10-12T06:35:01Z",positive_reactions_count:1,cover_image:"https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fhegttjvo34a4cxob8x3f.jpg",social_image:"https://media2.dev.to/dynamic/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fhegttjvo34a4cxob8x3f.jpg",canonical_url:"https://dev.to/m3yevn/a-day-in-the-life-of-a-software-engineer-1lmh",created_at:"2024-10-12T05:23:19Z",edited_at:null,crossposted_at:null,published_at:"2024-10-12T06:35:01Z",last_comment_at:"2024-10-13T12:44:48Z",reading_time_minutes:6,tag_list:"softwareengineering, softwaredevelopment, dayinthelifeofsoftwarengineer",tags:["softwareengineering","softwaredevelopment","dayinthelifeofsoftwarengineer"],body_html:`<p>Woah, I finally have the time to write this blog that’s been on my mind recently!</p>

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

`,user:{name:"Kevin Moe Myint Myat 👨‍💻",username:"m3yevn",twitter_username:null,github_username:"m3yevn",user_id:217073,website_url:"https://kevinmoemyintmyat.github.io",profile_image:"https://media2.dev.to/dynamic/image/width=640,height=640,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F217073%2F0f0c2cec-62f0-4ec6-b164-23e0a893e311.jpg",profile_image_90:"https://media2.dev.to/dynamic/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F217073%2F0f0c2cec-62f0-4ec6-b164-23e0a893e311.jpg"}}],Hp=[{kind:"blogger#post",id:"4189873799748090808",blog:{id:"6655808940462000438"},published:"2024-10-27T01:43:00+08:00",updated:"2024-10-27T02:22:46+08:00",url:"http://kevinmoemyintmyat.blogspot.com/2024/10/blog-post_27.html",selfLink:"https://www.googleapis.com/blogger/v3/blogs/6655808940462000438/posts/4189873799748090808",title:"မှတ်မိနေမည် မနီလာ အပိုင်း (၃)",content:'<p>&nbsp;ကျွန်တော် တက္ကစီက ဆင်းတော့ Venice Grand Mall ကြီးက စောင့်ကြိုနေလေရဲ့၊ သူ့ပုံစံက Venice မြို့ရဲ့ လှေလေးတွေနဲ့သွားလာလို့ ရတဲ့ ပုံ ကို ယူထားတာပေါ့၊</p><h1 style="text-align: left;">အာရှရဲ့ ဗင်းနစ်</h1><p>အထဲမှာတော့ အီတလီ အစားအသောက်တွေ ဖြစ်တဲ့ ပါစတာ၊ ပီဇာ နဲ့ ဂျီလာတို ဆိုင်တွေက နေရာယူ ထားတယ်၊ကျွန်တော် ကတော့ တွေ့တာ က Peri Peri chicken.. လွန်ခဲ့တဲ့နှစ်များက ကျွန်တော် အရင် နေခဲ့တဲ့ ရန်ကုန် ယောက်လမ်း မှာ ဒီဆိုင်ဟာ franchise လာ ဖွင့်ပါတယ်။ အမှတ်တရ များစွာ ရှိခဲ့ပြီး အဲ့ က ကြက်ကင် ဟာ လည်း အရမ်း နူးညံ့ပြီး စားကောင်းပါတယ်၊&nbsp;</p><div class="separator" style="clear: both; text-align: center;"><a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjsuBipBTkU312J53s1VcXhsJjS7k58SeWI0iiznYIEjjTwRNWbWbGJ_YsqnyPqjkPxWrcAs44ZfNMuv6jtuv3WWh5c2Uq-UmzR8wClG2Df9cyUoyNVlvG3hltWvWt3CZriULLdODa-8__3hXJnErlRh2dWqgSXgikOzm3J3W7TLr0LxbAlUq5zTrLbpXd0/s1732/vanice-grand-canal-mall.jpg" style="margin-left: 1em; margin-right: 1em;"><img border="0" data-original-height="974" data-original-width="1732" height="316" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjsuBipBTkU312J53s1VcXhsJjS7k58SeWI0iiznYIEjjTwRNWbWbGJ_YsqnyPqjkPxWrcAs44ZfNMuv6jtuv3WWh5c2Uq-UmzR8wClG2Df9cyUoyNVlvG3hltWvWt3CZriULLdODa-8__3hXJnErlRh2dWqgSXgikOzm3J3W7TLr0LxbAlUq5zTrLbpXd0/w562-h316/vanice-grand-canal-mall.jpg" width="562" /></a></div><div class="separator" style="clear: both; text-align: center;">Pic: Vanice Grand Canal Mall</div><br /><p><br /></p><p><br /></p><p>ဒီလိုနဲ့ ကျွန်တော် peri peri မှာ အလွမ်းပြေ နေ့လည်စာ စားခဲ့ပါတယ်။ စားပြီးတော့ mall ထဲ ဟိုနားသွား ဒီနားသွားလျှောက်ကြည့်ရင်း အပေါ်ဆုံးထပ်ကို တက်လာဖြစ်တယ်၊ အပေါ်ဆုံးထပ် မှာ chapel 💒 လေး တစ်ခု ရှိတယ်။ ကျွန်တော်က ဗုဒ္ဓဘာသာ ဖြစ်တာကြောင့် ဘုရားကျောင်း မရောက်ဘူးပါ.. chapel ဆိုတာက တော့ cathedral လောက် မကြီးတဲ့ ဘုရားကျောင်းပေါ့နော်။ မောမောနဲ့ ဘုရားကျောင်း ထဲဝင်လိုက်တဲ့ အခါ အဲကွန်းကြောင့်လား ယေရှု အရိပ်အာဝါသ ကြောင့်လား မသိ .. အလွန်ပူနေတဲ့ မနီလာရဲ့ နေက နေ သက်သာသွားပါတယ်..</p><p><br /></p><p>Chapel ထဲမှာ ကျွန်တော် စိတ်ကျေနပ်လောက်တဲ့ ထိ ထိုင်နေခဲ့တယ်။ chapel ဟာ အေးချမ်းလှတယ်.. ဘယ်သူမှ မရှိဘဲ လက်ဝါးကပ်တိုင် ပေါ် က ကိုယ်တော် နဲ့ ကျွန်တော် သာ ရှိနေတယ်။ အာရုံပြုလိုက်ပြီး ဘာသာခြားဖြစ်သော်လည်း ကျွန်တော် စိတ်ထဲကနေ ဒီအရိပ်အာဝါသ ကို ဝေမျှသောကြောင့် ကျေးဇူးတင် ဂါဝရပြုလိုက်ပါတယ်.. ကိုယ်တော် ကြောင့် မဟုတ်ရင် ဒီ နားခို စရာ လည်း မရှိနိုင် ပေ မဟုတ်လား…</p><div class="separator" style="clear: both; text-align: center;"><a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg3Y4ZyNxgLZw7OIAaw41v6XVJIrrQsNT7cWkS1p0FsMxsSZrtZK4c0XyD6raV_GvP234bMZo1bO0V4ewX3YDFIksQUNng02tMcTktm6Dj9Qgk01wOnDo80iEJ_oXPvSQMQlfDLbZYutGNrR-JMf9sjz6KmMjtknLhnllIXhabek4e3fZfdqJhrjQhDIUee/s600/st-raphael.jpg" style="margin-left: 1em; margin-right: 1em;"><img border="0" data-original-height="600" data-original-width="600" height="561" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg3Y4ZyNxgLZw7OIAaw41v6XVJIrrQsNT7cWkS1p0FsMxsSZrtZK4c0XyD6raV_GvP234bMZo1bO0V4ewX3YDFIksQUNng02tMcTktm6Dj9Qgk01wOnDo80iEJ_oXPvSQMQlfDLbZYutGNrR-JMf9sjz6KmMjtknLhnllIXhabek4e3fZfdqJhrjQhDIUee/w561-h561/st-raphael.jpg" width="561" /></a></div><div class="separator" style="clear: both; text-align: center;">Pic: A serene Chapel above Vanice Grand Canal Mall</div><br /><p><br /></p><p><br /></p><p>ကျွန်တော် အဲ့ mall က ထွက်လာပြီး အနီးအနား ရပ်ကွက် လျှောက် ကြည့်ဖြစ်တယ်၊ ဒီရပ်ကွက် ဟာ အရမ်းလှပ နေပြီး စားသောက်ဆိုင် အကောင်းစားများလည်း ပေါများလှတယ်။ ဒါဟာ သူဌေးရပ်ကွက်ပဲ..</p><div class="separator" style="clear: both; text-align: center;"><a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjsEI1EUxL7rISoU4-slWPb5uZ2HWOsciwA9DvR7mcTO-svFuL2rZfjuZErjbJcgIPV-iC7mbdscB85NTJw38h-ZbC_VBrxtsm5gc1nEcoVseq0IVhNd5vCCJPse1HHCU7s7hjqnAvlRs9jkx-3Fdv7bDwBRztI_NGnF4ZXwfrAb9tVU8y-OJ9DnNIcjYdM/s1454/tuscany-mckinley-hill.jpg" style="margin-left: 1em; margin-right: 1em;"><img border="0" data-original-height="840" data-original-width="1454" height="377" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjsEI1EUxL7rISoU4-slWPb5uZ2HWOsciwA9DvR7mcTO-svFuL2rZfjuZErjbJcgIPV-iC7mbdscB85NTJw38h-ZbC_VBrxtsm5gc1nEcoVseq0IVhNd5vCCJPse1HHCU7s7hjqnAvlRs9jkx-3Fdv7bDwBRztI_NGnF4ZXwfrAb9tVU8y-OJ9DnNIcjYdM/w653-h377/tuscany-mckinley-hill.jpg" width="653" /></a></div><div class="separator" style="clear: both; text-align: center;">Pic: McKinley Hill View</div><br /><p><br /></p><p><br /></p><p>ဒီလိုနဲ့ အဲ့ တောင်ကုန်း က ဆင်းလာတော့ သံရုံးတစ်ခုလည်း တွေ့ခဲ့တယ်၊ လမ်းကျော်တံတားဟိုဘက်ကို ဆက်ဖြတ်လိုက် ခဲ့တယ်။ &nbsp;ဟိုဘက်ရောက်တော့ ခုနက သူဌေးရပ်ကွက်လက္ခဏာ တွေ ပျောက်ကွယ်သွားပါတယ်..ဒီနားမှာ လမ်းမကြီး ပဲ ရှိပြီး ကျန်တာ ဘာမှ မရှိပါဘူး..</p><h1 style="text-align: left;">လမ်းတစ်ဖြတ်၊ လူတန်းစားတစ်ရပ်</h1><p>အဲဒါနဲ့ အနီးအနားရှာတော့ လမ်း ကျဉ်းလေး တစ်ခု ဟာ ခြေရာတွေ ထပ် နေတယ်.. ကျွန်တော် လည်း အဲ့လမ်း လေးအတိုင်း လိုက် သွားတဲ့ အခါ မှာတော့ အဆုံးမှာ အခြေခံလူတန်းစား ရပ်ကွက် ကို ရောက် သွားပါတယ်..</p><p><br /></p><p>အံ့ဩစရာက အခြေခံလူတန်းစား ရပ်ကွက်ကလေး နဲ့ ဒိတ်ဒိတ်ကျဲ သူဌေးအိမ်ယာ ရယ် သံရုံးရယ် ဟာ လမ်း မတစ်ခုလေးပဲခြားတာ ပါပဲ။</p><div class="separator" style="clear: both; text-align: center;"><a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgNSYLt_ewYUkExVJPeUngRWPCoItNsj0KFaXQ6U3ZxAN2GqZN2zyRzFfUTvkNe5j1NvN7v9CcJ2GSrmzgJafqzdCCFMbl0Gi5GRvLgWLvk2nee9IDDXUxSP6y7Ponv4ejJo43HjbbQYTq2LADRnaj8OeXs5D-jqhg9m5QhyphenhyphenVchkX_YC79M2aTZ6o9KByUk/s1431/rizal.jpg" style="margin-left: 1em; margin-right: 1em;"><img border="0" data-original-height="783" data-original-width="1431" height="322" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgNSYLt_ewYUkExVJPeUngRWPCoItNsj0KFaXQ6U3ZxAN2GqZN2zyRzFfUTvkNe5j1NvN7v9CcJ2GSrmzgJafqzdCCFMbl0Gi5GRvLgWLvk2nee9IDDXUxSP6y7Ponv4ejJo43HjbbQYTq2LADRnaj8OeXs5D-jqhg9m5QhyphenhyphenVchkX_YC79M2aTZ6o9KByUk/w588-h322/rizal.jpg" width="588" /></a></div><div class="separator" style="clear: both; text-align: center;">Pic: An alley between Rizal and Pembo, just a road across from McKinley Hill</div><br /><p><br /></p><p><br /></p><p>ကျွန်တော် ရပ်ကွက် ထဲဆက်သွားတော့ ကလေး များ ဟာ ဘက်စကက်ဘော (basketball) ကို ရပ်ကွက်ထဲ က ကွက်လပ်တစ်ခုမှ ဆော့နေကြတယ်.. ရှေ့ဆက် သွားတော့ ကလေးမ တစ်ချို့ က စင် အသေးလေးပေါ် မှာ အက တိုက် အဆို တိုက် ကျင့်နေကြတယ်.. ကျောင်းပွဲလေး တစ်ခုပေါ့..</p><p><br /></p><p>ကျွန်တော် ဆက်လျှောက်လာတော့ နေက လည်း အရမ်း ပြင်း ပြီး ဘာမှလည်း မရှိတော့တာနဲ့ ဆိုက်ကယ် ငှါးလိုက်ပါတယ်.. ထပ်သွားမယ့်နေရာက Bonifacio Global City (BGC) ပါ…</p><p>ဆယ်မိနစ်လောက် စောင့်လိုက်ရတယ်.. ဆိုက်ကယ်သမား က ဒီနေရာ က ခေါင်လွန်းလို့ လာရခက်ခဲတဲ့ အကြောင်း ပြောတယ်.. ခုလို ရပ်ကွက်တွေကို ဘရန်ဂိုင်း （barangay) လို့ခေါ်ကြောင်း administrative region အထွေထွေအုပ်ချုပ်ရေးရဲ့ အသေးဆုံး အစိတ်ပိုင်း လေး ဖြစ်ကြောင်း ပြောပြတယ်၊ ဒီလိုနဲ့ ဆယ့်ငါး &nbsp; &nbsp; &nbsp; &nbsp;မိနစ်လောက် ရပ်ကွက်ဆန်တဲ့ နေရာတွေ ဖြတ်လာတော့ လမ်း ဟာ မတ်လာတယ်၊ ဆိုက်ကယ် ဈေးဆိုင် တွေလည်း ထူပြီး ကုန်း တက်လမ်းလေး ဟာ လာ ဂျမ်းဖြစ်နေတယ်.. ဒီလိုနဲ့ အဲ့ကုန်းလေး ကို တက်လိုက်တော့ ရုတ်ချည် လမ်းမကြီး&nbsp; &nbsp; ပြန် ဖြစ်သွားပြီး မိုးမျှော် တိုက် တွေပါတွေ့ရတော့တယ်.. ဘီဂျီစီနဲ့ ခုနက တောင်ကုန်းလမ်းလေး အောက်က &nbsp;အောက်ချိုင့် ဆင်ခြေဖုံးရပ်ကွက်လေး ဟာ လည်း&nbsp; ကုန်း တစ်ခု သာ ခြားကြောင်း သိရှိခဲ့ရတယ်</p><p><br /></p><h1 style="text-align: left;">အနာဂတ်မြို့တော်&nbsp;</h1><p style="text-align: left;">ဘီဂျီစီ ကြီးဟာ တစ်မြို့လုံး မိုးမျှော်တိုက်များလိုပဲ၊ စပြီး အမှတ် ၁ လမ်း က နေ ဝင်သွားတာနဲ့ ခုန တွေ့နေတဲ့ ဆင်းရဲမှု တွေ ဟာ ပျောက်ကွယ် သွားပြီး မြို့တော် အသစ်ကြီးလို ဖြစ်နေတာပါပဲ…&nbsp;</p><div><br /></div><div class="separator" style="clear: both; text-align: center;"><a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgEFRCTSnO3mB0PNn2Dy8-lwjwxIUmULqKlvb2mbUxqGvUiLRFCI6_p_O9Zjft39aR-UKa_skqFKcENYRc6E7AtAamKFszCad1MPWEoUgAsm_DKXZf7ZfgzKbAAVURQCz1hyphenhyphen_wlr15yCfIhQJDLkHA35fh6dX5fvINaOuCDwc7RfYrlYLhq2VOVbJqsPh-f/s612/bgc.jpg" style="margin-left: 1em; margin-right: 1em;"><img border="0" data-original-height="381" data-original-width="612" height="377" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgEFRCTSnO3mB0PNn2Dy8-lwjwxIUmULqKlvb2mbUxqGvUiLRFCI6_p_O9Zjft39aR-UKa_skqFKcENYRc6E7AtAamKFszCad1MPWEoUgAsm_DKXZf7ZfgzKbAAVURQCz1hyphenhyphen_wlr15yCfIhQJDLkHA35fh6dX5fvINaOuCDwc7RfYrlYLhq2VOVbJqsPh-f/w606-h377/bgc.jpg" width="606" /></a></div><div class="separator" style="clear: both; text-align: center;">Pic: Bonifacio Global City (BGC)</div><br /><div><br /></div><div><br /></div><div><br /></div><p style="text-align: left;">စစချင်း ဆိုက်ကယ်သမားက ငှါးထားတဲ့ Bonifacio High Street မှာ ချပေးလိုက်တယ်.. အဲ့လမ်းက ဘီဂျီစီရဲ့ ရှိတဲ့ လမ်း အားလုံးကို ထောင့်ဖြတ်ထားတဲ့လမ်းပါ.. ဒီလျှောက်လမ်းက ပန်းခြံတွေ event တွေရှိတယ်.. ထိုင်စရာ ခုံတွေ လည်း ချထားပေးတယ်..<br />လမ်းတစ်လျှောက် ရေခဲမုန့်ဆိုင် ၊ ဘား နဲ့ fine dining ဆိုင်တွေတော့ ပေါမှပေါပဲ.. BGC မှာ ကမ္ဘာ့ဘဏ်ကြီးတွေ၊ အာမခံ နဲ့ ဆက်သွယ်ရေး နည်းပညာ ကုမ္ပဏီ တွေ အများကြီးပဲ.. အဲ့က ဝန်ထမ်းတွေ အလုပ်ပြီး ရင် ဒီမှာ လာ အပန်းဖြေကြသလားပဲ.. BGC မှာ နိုင်ငံခြားသား က ကျန်တဲ့ နေရာ ထပ် ပိုများစွာ တွေ့ရတယ်.. တစ်ချို့လည်း expatriate ပုံစံ နဲ့ မြို့ထဲမှာ ခွေးကျောင်းထွက်ကြတာတွေ ရှိတယ်..<br />စိတ်ဝင်စားဖို့ အကောင်းဆုံးက BGC မှာ E scooter ပန်းရောင်လေးတွေ ငှါးလို့ရတာပဲ၊&nbsp; Moovr&nbsp; လို့ ခေါ် ပါတယ်... တစ်နေရာနဲ့ တစ်နေရာ သွားမယ်ဆို လမ်းလျှောက် စရာ မလို ပဲနဲ့၊ scooter လေးနဲ့ သွားလို့ရမယ်.. ဘယ်လောက်မိုက်လဲ.. ကျွန်တော်စီးချင်ပေမယ့် အဲ့ scooter app က payment ကို Gcash ဆိုတဲ့ app နဲ့ ပေးရတာပါပဲ..&nbsp;<br />ကျွန်တော်က နိုင်ငံခြားသား ဖြစ်တဲ့ အတွက် GCash သုံးတဲ့ အခါ verification step တွေမှာ ကြန့်ကြာနေတာနဲ့ မစီးဖြစ်လိုက်တော့ဘူးပေါ့..</p><div class="separator" style="clear: both; text-align: center;"><a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg-nTRh8Fid0DxU4a9nM4S5gssKID27OMHwV8roOvj1WchPJOlxlu8YK0ZK4T2y7RhUSl6SnBeR3c6I8Vd59g_ALJU-2EdcBBjEIy5VtHrEx2G4dNm2lj5WGT_CSkp2a4NJkvCTF0u_0EXegMbWBmxAQfjjs5nnyXqILn_1SYLZhMqT6MtXSYimp9aCCwe2/s960/moovr.jpg" style="margin-left: 1em; margin-right: 1em;"><img border="0" data-original-height="788" data-original-width="960" height="422" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg-nTRh8Fid0DxU4a9nM4S5gssKID27OMHwV8roOvj1WchPJOlxlu8YK0ZK4T2y7RhUSl6SnBeR3c6I8Vd59g_ALJU-2EdcBBjEIy5VtHrEx2G4dNm2lj5WGT_CSkp2a4NJkvCTF0u_0EXegMbWBmxAQfjjs5nnyXqILn_1SYLZhMqT6MtXSYimp9aCCwe2/w514-h422/moovr.jpg" width="514" /></a></div><div class="separator" style="clear: both; text-align: center;">Pic: This guy is rocking on Moovr</div><br /><p><br /></p><h1 style="text-align: left;">ဘန်းဘန်း</h1><p style="text-align: left;">ဘီဂျီစီမှာ လျှောက် သွားနေရင်း သေနတ်ဆိုင် တစ်ခုတွေ့ပါတယ်၊ သရက်သီး သေနတ် မဟုတ်ပါဘူးနော်.. ဖိလစ်ပိုင်မှာ က တကယ် ကို တရားဝင် သေနတ် ဝယ်ခွင့် ပိုင်ခွင့်ရှိပါတယ်..<br />အဆောက် အဦးတွေ ရဲ့ လုံခြုံရေး တွေ ကို ကြည့်ရင် တောင် အကုန်လုံး က Shotgun လွယ်ထားပြီး ပစ္စတို ခါးထိုးထားပါတယ်.. ဖိလစ်ပိုင်ရဲ့ ဥပဒေ အရ သေနတ်ပေးကိုင်ထားတာ အတော် အံ့အား သင့်စရာပါ… ကျန်တဲ့ အာစီယံ နိုင်ငံများ နဲ့ ယှဉ်ရင် ဖိလစ်ပိုင် က လူထုအတွက် လက်နက်ခဲယမ်း အပေါ် ထိန်းချုပ် မှု အနည်း ဆုံးဖြစ်မယ် ထင်တယ်..&nbsp;</p><div style="text-align: left;"><br /></div><div class="separator" style="clear: both; text-align: center;"><a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiNae4W2eQDMmAfKwb9XsS2HvvE1d45asiluj84lzaoFOh7uCRFe6UkkCPHmiJuvNZec6GxrPVW1cMkh5n153BPic10MvPNqbXU6OUKo9YG6oRkZBFkkFgkobNZGF0d0EUbNcQg7akCK6stPEsSw6V-K2aNX1Nb0XFl0vAQsEwN2uJUON0jO9OV354IZyij/s1542/gunstore.jpg" style="margin-left: 1em; margin-right: 1em;"><img border="0" data-original-height="945" data-original-width="1542" height="305" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiNae4W2eQDMmAfKwb9XsS2HvvE1d45asiluj84lzaoFOh7uCRFe6UkkCPHmiJuvNZec6GxrPVW1cMkh5n153BPic10MvPNqbXU6OUKo9YG6oRkZBFkkFgkobNZGF0d0EUbNcQg7akCK6stPEsSw6V-K2aNX1Nb0XFl0vAQsEwN2uJUON0jO9OV354IZyij/w498-h305/gunstore.jpg" width="498" /></a></div><div class="separator" style="clear: both; text-align: center;">Pic: Firearms in PH</div><br /><div><br /></div><div><br /></div><p style="text-align: left;">ဒီလိုနဲ့ ဆိုင်ထဲ ဝင်ပြီးတော့ သေနတ်တွေ လျှောက်ကြည့်ခဲ့တယ်ပေါ့နော်.. နောက် အပြင်ပြန်ထွက်လာ တော့ ညနေ စောင်းနေပြီ။<br />ဘီဂျီစီက လည်း သိပ် မဝေး၊ ပြန်ရမယ့် ဟိုတယ် နဲ့ လည်း သိပ် မဝေး ၊ နာမည် လည်း ကြီး တဲ့ နေရာ တစ်ခု ကို သွား ဖို့ Move It တစ်စီး ငှါး လိုက်တယ်… နောက် သွားမယ့်နေရာ က</p><div><br /></div><h1 style="text-align: left;">ပိုဘလာစရွန်း (Poblacion de Makati)</h1><p style="text-align: left;">ပိုဘလာ စရွန်း ဆိုတာ စပိန်လိုတော့ မြို့နယ် ဒါမှမဟုတ် ရပ်ကွက်ပေါ့.. မကာတီ ထဲ မှာ <a href="https://en.wikipedia.org/wiki/Poblacion,_Makati" target="_blank">ပိုဘလာ စရွန်း</a> ဟာ တည်ရှိနေပြီး nightlife tourist attraction ဖြစ်ပါတယ်…&nbsp;<br />ဘေးမှာ တိုက်အမြင့်ကြီး တွေ ခြံရံထာပြီး &nbsp;သူ့ရဲ့ လမ်းမှာတော့ ပကာသန နည်းစွာ လမ်းဘေးစာ တွေ ၊ ကလပ်နဲ့ ဘား အစုံ ရှိပါတယ်.. ကျွန်တော် ပိုဘလာစရွန်းကို ရောက်တော့ ၆-၇ လောက် ရှိပြီ။ ဗိုက်ဆာလာတာနဲ့ ဂျိုလီဘီး(Jollibee) ကြက်ကြော် ဆိုင် တွေ့တော့ ကြက် ကြော် ဝင်စားဖြစ်တယ်..<br />စလုံးမှာလည်း KFC ငြီးငွေ့လာရင် ဂျိုလီဘီး စားနေကြပေါ့.. အရင် က ဂျူရောင်းအိစ် (Jurong East) နားမှာ နေပြီး အလုပ်လည်း လုပ်တဲ့ သူဆိုတော့ ကြက်ကြော် တမ်းတရင် ဂျူရောင်းအိစ် ဘူတာ အောက် က ဂျိုလီဘီး ဆိုင် မှာ တန်းစီစီနေကြ က ကျွန်တော်ပါပဲ..</p><div class="separator" style="clear: both; text-align: center;"><a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhGNnmobZ9l0PjXNqtbagHbm6v26MZoSxDxA9wQAC8Xvp5wN8S0oFg6mbYRrMA1dVvwmYvFXrifLPJBZgYkedhP_VE3gE3DliwqfYlh3QpJ6uKQl7q831R4USMj8vPTadD448KsWDpVyhOKQzWZo2FBMuytVJGBFAsXBJQAaSN4JY9dUuA41WScsssQDn0Z/s945/jolleybee.jpg" style="margin-left: 1em; margin-right: 1em;"><img border="0" data-original-height="945" data-original-width="709" height="463" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhGNnmobZ9l0PjXNqtbagHbm6v26MZoSxDxA9wQAC8Xvp5wN8S0oFg6mbYRrMA1dVvwmYvFXrifLPJBZgYkedhP_VE3gE3DliwqfYlh3QpJ6uKQl7q831R4USMj8vPTadD448KsWDpVyhOKQzWZo2FBMuytVJGBFAsXBJQAaSN4JY9dUuA41WScsssQDn0Z/w347-h463/jolleybee.jpg" width="347" /></a></div><div class="separator" style="clear: both; text-align: center;">Pic: Bida Ang Saya!</div><br /><div><br /></div><div><br /></div><div><br /></div><p style="text-align: left;">ဖိလစ်ပိုင်က ဂျိုလီဘီး အစစ် က ပိုပြီး စား ကောင်း သလို ရှိတယ်.. အဝစားလိုက် ပြီးတော့ ပိုဘလာ စရွန်း လမ်း ထဲ ဝင်လိုက်တယ် ဆိုရင် ပဲ စတွေ့ရတာက ဂိုးဂိုးဘား (Go Go bar ) စတိုင် ဘားတွေပဲ ဖြစ်ပါတယ်… စင်တင်ပေါ့နော်.. ပြီးတော့ တခြား ဘားတွေကလည်း costume party လုပ်နေတာနဲ့ ကျွန်တော် Spider-Man တို့ Captain America တို့ တွေ့ခဲ့ရတယ်.</p><div><br /></div><div class="separator" style="clear: both; text-align: center;"><a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjHlzQAL80HZQOcJuL19z31q_tsbA9Q7z25q9uZkbVKZvdW_lpTCunhKdFI6ybmccbqlm2Q6ymFsepAgp8CZH-m_VHdh_tuxmST6NLOeCM3S9_gNHgnw7erEgPIYlOgBdbBXDzaWVvlhygZ6I1mJFQu2UTmGu1b0OEwK4VF4mBs4M5Aq_X7xIrOrvHxYrPO/s1024/poblacion.jpg" style="margin-left: 1em; margin-right: 1em;"><img border="0" data-original-height="737" data-original-width="1024" height="331" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjHlzQAL80HZQOcJuL19z31q_tsbA9Q7z25q9uZkbVKZvdW_lpTCunhKdFI6ybmccbqlm2Q6ymFsepAgp8CZH-m_VHdh_tuxmST6NLOeCM3S9_gNHgnw7erEgPIYlOgBdbBXDzaWVvlhygZ6I1mJFQu2UTmGu1b0OEwK4VF4mBs4M5Aq_X7xIrOrvHxYrPO/w461-h331/poblacion.jpg" width="461" /></a></div><div class="separator" style="clear: both; text-align: center;">Pic: Crazy Nightlife @ Poblacion De Makati</div><br /><div><br /></div><div><br /></div><p style="text-align: left;">Google မှာ the best bar in Poblacion ဆိုပြီး ရှာလိုက်တော့ The spirit library ဆိုတဲ့ ဆိုင်ကို တွေ့တယ်.. ဆိုင်လိပ်စာ ကို ရောက်တော့ ဘာဆိုင်မှ မတွေ့တော့ အံ့ဩသွားရတယ်.. ဒါပေမယ့် အဲ့နားမှာ antique ဆိုင် အသေးလေး တစ်ခုတွေ့တယ်.. ရှေ့မှာ လည်း လူ တစ်ယောက် ရပ်နေတယ်.. အဲဒါနဲ့ ခပ်တည်တည်ပဲ ဆိုင် ထဲဝင်လိုက်တော့ ဟိုလူက စာအုပ်စင် တစ်ခုကို တွန်းလိုက်တာ တံခါး တစ်ချပ်ဖြစ်နေပြီး အထဲမှာ ဖွက်ထားတဲ့ ဘား ကိုတွေ့ရတယ်.. ဒီဘား က speakeasy concept နဲ့ လုပ်ထားတာဖြစ်နေတယ်လေ..<br />အထဲမှာတော့ မှောင် နေပြီး ကောက်တေး တွေကလည်း အရမ်း ဆန်းတယ်.. ဖိလစ်ပိုင်ရဲ့ သမိုင်း ကို ပြန် ကောက်ပြီး ကောက်တေး လေးတွေ ထွင်ထားတယ်.. တစ်ခွက်လောက် မှာ ပြီး classical သီချင်း လေးတွေနားထောင်ပြီး အေးဆေးထိုင်နေမိတယ်.. ဒီဘားထဲမှာ အံ့ဩစရာက စာအုပ်စင် တွေမှာ အရက် ပုလင်း တွေ ထားထား ပြီး အရက် လိုရင် စာကြည့်တိုက်လို လှေကား လေး နဲ့ တက်ယူရတာပါ..</p><div style="text-align: left;"><br /></div><div class="separator" style="clear: both; text-align: center;"><a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhPqhooiJHzSnPrV5SRsJ7H8YPnnfyuatjWKNfNdUjX0fEdrN0TEDNFB59Tz02pAQ4PBWO0JIDPm7EQZ7DUH5kTD0a3dsi8_efHt7m-IZXrVn7gtcjHvtm1Ru1r5054c1KbsERzp5VQr3Dio_RnAk3X39Ih-r3fNxUQ8OlE12qhf4LCzx5F_I4aBogD80vk/s2560/spirits-library.jpg" style="margin-left: 1em; margin-right: 1em;"><img border="0" data-original-height="1422" data-original-width="2560" height="343" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhPqhooiJHzSnPrV5SRsJ7H8YPnnfyuatjWKNfNdUjX0fEdrN0TEDNFB59Tz02pAQ4PBWO0JIDPm7EQZ7DUH5kTD0a3dsi8_efHt7m-IZXrVn7gtcjHvtm1Ru1r5054c1KbsERzp5VQr3Dio_RnAk3X39Ih-r3fNxUQ8OlE12qhf4LCzx5F_I4aBogD80vk/w616-h343/spirits-library.jpg" width="616" /></a></div><div class="separator" style="clear: both; text-align: center;">Pic: <a href="https://www.instagram.com/thespiritslibrary" target="_blank">The Spirits Library @ Makati</a></div><br /><div style="text-align: left;"><br /></div><div style="text-align: left;"><br /></div><h1 style="text-align: left;">မေငါး ရက် (သို့) Cinco De Mayo</h1><div><br /></div><p style="text-align: left;">စာကြည့်တိုက်က ထွက်လာပြီး ပိုဘလာ စရွန်း ရဲ့ လမ်း ကြို လမ်းကြား ထဲ လျှောက် သွားရင်း ကျွန်တော် ဟာ လမ်း ပျောက်သွားပါတယ်.. လမ်းပြန်ရှာရင်း တစ်နေရာရောက်တော့ &nbsp;စည်စည်ကားကား ဖြစ်နေတာ နဲ့ ဝင်ကြည့်တော့ ဈေးပွဲတော် တစ်ခု ဖြစ်နေတယ်.. ဟိုစေး ဂွါဗို (Jose Cuervo) က စပွန်ဆာပေးထားပြီး အထဲမှာ တက္ကီလာ ကောက်တေး တွေကို ပလက်စတစ်ခွက်လေး တွေ နဲ့ ရောင်းနေတဲ့ &nbsp;ပွဲတော် တစ်ခု ဖြစ်နေတယ်..&nbsp;<br />ဘာပွဲလဲ ဆိုပြီး စပ်စုတော့ မေ ငါး ရက် လို့ စပိန်ဘာသာ နဲ့ ခေါ်တဲ့ <a href="https://en.wikipedia.org/wiki/Cinco_de_Mayo" target="_blank">ချင်ကိုဒီမာယို (Cinco De Mayo)</a> ဖြစ်နေပါတယ်.. ချင်ကို က မက္ကစီကို နိုင်ငံ ရဲ့ ပြင်သစ် ကျူးကျော် မှုကို အောင်နိုင်ခဲ့တဲ့ နေ့ကို အထိမ်းအမှတ်လုပ်တာဖြစ်ပါတယ်..<br />အဲဒါကို ဖိလစ်ပိုင် မှာလည် Spanish diaspora ဖြစ်တဲ့ အတွက် ဒီမှာ လည်း ကျင်းပနေတာပေါ့၊ ကျွန်တော် လည်း ဓါတ်ပုံဘာညာ ရိုက် ဖြစ်ခဲ့ပါတယ်..&nbsp;</p><div style="text-align: left;"><br /></div><div class="separator" style="clear: both; text-align: center;"><a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhw-jvZWX7WSlwNmt2Athcgt6V5IQqKp0kxLLns2QZECxTi7gYr9YOY2tMrETnUBez_TPdd9OOLPu5VOsHnnhebJgXnGmVch71VYLN51Z4Uur-jiE3aEUDjMmYW0grb5vjDe0sRYV2pe6i6xIwYwH6jdbHn_sOePEc00PLG7K5tOuYIKKOP0IFJNFv2NhWj/s3156/jose.jpg" style="margin-left: 1em; margin-right: 1em;"><img border="0" data-original-height="3156" data-original-width="3156" height="522" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhw-jvZWX7WSlwNmt2Athcgt6V5IQqKp0kxLLns2QZECxTi7gYr9YOY2tMrETnUBez_TPdd9OOLPu5VOsHnnhebJgXnGmVch71VYLN51Z4Uur-jiE3aEUDjMmYW0grb5vjDe0sRYV2pe6i6xIwYwH6jdbHn_sOePEc00PLG7K5tOuYIKKOP0IFJNFv2NhWj/w522-h522/jose.jpg" width="522" /></a></div><div class="separator" style="clear: both; text-align: center;">Pic: Recuerdame , 5th Mayo</div><br /><div><br /></div><div><br /></div><div><br /></div><p style="text-align: left;">လမ်းထဲမှာ ဒီဂျေ ကို လမ်းရဲ့ နှစ်ဖက် စလုံးမှာ ထားပြီး မိုက်နေပါတယ်.. လူစည်နေတဲ့ ဘက်ကတော့ ဟိုတယ် တစ်ခုရှေ့မှာ ဖွင့်ထားတဲ့ ဒီဂျေ စင်ပဲ ဖြစ်ပါတယ်.. ခဏနေတော့ Mariachi band တွေရောက်လာတယ်.. ပြီး တော့ တခြား entertainment တွေဖြစ်တဲ့ comedian တွေ Stilt walker တွေ လည်း ပါပါတယ်..<br />အားလုံး ပျော်နေကြတာပေါ့..&nbsp;<br />နိုင်ငံခြားသားတွေ များတယ်..ဟိုတယ်ရှေ့က တက်တူးဆိုင်တစ်ခု &nbsp;မှာ လူတွေစုနေပြီး ကောက်တေးသောက် ဝိသောက် ပြီး ကောင်း နေကြတယ်.. နောက်တော့ ဒီဂျေ နဲ့ က ကြတာပေါ့.. Jose Cuervo ရဲ့ ပရိုမိုးရှင်းတွေလုပ်တယ်.. ဥပမာ အဲ့ လမ်း ပရဝုန် ထဲမှာ လျို့ဝှက်ပြီး ကြယ် စတစ်ကာလေး တွေ ကပ်ထားတယ်တဲ့.. တွေ့ရင် အဲ့ ကြယ်နဲ့ ကောင်တာတွေ မှာ ကောက်တေး ကို ဖရီး ယူလို့ ရမယ် ပေါ့…<br />မက္ကစီကို စတိုင် ဖြစ်တာကြောင့် တက္ကီလာ ကောက်တေး တွေ ပဲပေါ့.. ဒါပေမယ့် သူတို့ ဆပ်ထား တာ တော်တော် ကောင်း တယ် .. အရမ်း မပြင်း ဘဲ enjoy လို့ အိုကေ ရုံပေါ့..</p><div class="separator" style="clear: both; text-align: center;"><a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgPfGzlmDuI7XgxZTUNMDlHan0P6E7iAERcMHEPzTzn4XHmTmhc256-e2LVxJ1SeagZABTnSTJewpZpRN6cNlCRU59wnYvhIuODimlJ5hE9MVBStM3_8qT3ETy7ifGcDbkp2XzJSMSfUxxMnmPmiuRLDGMzl-bfhDC210QNS9miKTzjmg5KIpfHzCwt0Wcv/s875/street-party.jpg" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" data-original-height="875" data-original-width="703" height="529" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgPfGzlmDuI7XgxZTUNMDlHan0P6E7iAERcMHEPzTzn4XHmTmhc256-e2LVxJ1SeagZABTnSTJewpZpRN6cNlCRU59wnYvhIuODimlJ5hE9MVBStM3_8qT3ETy7ifGcDbkp2XzJSMSfUxxMnmPmiuRLDGMzl-bfhDC210QNS9miKTzjmg5KIpfHzCwt0Wcv/w425-h529/street-party.jpg" width="425" /></a></div><br /><div class="separator" style="clear: both; text-align: center;"><br /></div><div class="separator" style="clear: both; text-align: center;"><br /></div><div class="separator" style="clear: both; text-align: center;">Pic: Street Party in Makati</div><br /><div><br /></div><div><br /></div><div><br /></div><h1 style="text-align: left;">ဘဲပေါက်ဥ (သို့) ဘလွတ်</h1><p style="text-align: left;">ဖိလစ်ပိုင် မှာ နာမည်ကြီး လမ်းဘေးစာ တစ်ခုရှိတယ်.. အဲဲဒါကတော့ <a href="https://en.wikipedia.org/wiki/Poblacion,_Makati" target="_blank">Balut လို့ ခေါ်တဲ့ ဥ</a> ပါ.. ဘဲဥ ကို ၂-၃ ပတ်လောက်ထားလိုက်တော့ အကောင်သေးသေးလေး က အထဲမှာ ပေါက်နေပြီ.. ပြီးတော့မှ အဲ့ ဘဲပေါက်ကို ပြုတ်ထားတာ ဖြစ်ပါတယ်..<br />ပုံမှန် ဘဲဥပြုတ်လို အကာနဲ့ အနှစ် တင် မဟုတ် ပဲ ဘဲခေါင်းသေး သေး လေး အတောင် သေးသေး လေးတွေ ဖြစ်နေပြီပေါ့.. ကျွန်တော်လည်း စိတ်ဝင်စားတာနဲ့ တစ်လုံး ဝယ်လိုက်တယ်.. လူက တက္ကီလာ အရှိန် ရယ် တနေ့လုံး လမ်းတွေ လျှောက်ထား တာရယ် &nbsp;ကြောင့် နည်းနည်းလည်း ပင်ပန်းနေတော့ ဟိုတယ် ပြန်လိုက်တယ်..<br />ပြီးတော့ ဘလွတ်ကို မြည်းကြည့်လိုက်တယ်.. အကုန် တော့ မစား ရဲ… သူက အတောင်လေး တွေ အမွှေးလေး တွေ တောင် ထွက်နေတော့ အသည်းယားစရာ ကောင်းတယ်.. အရသာကတော့ ဘဲဥ ကိုမှ နည်းနည်း ငံတဲ့ ဘက် သွားတာပေါ့..</p><div class="separator" style="clear: both; text-align: center;"><a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhir07lx167utNOJ5JkG6RW3CbI4HlsklMUwPGTAd3xNz9XVWVfZr9JTxY6PxaONqCBarzO-g1zo855P1tiLKLjJce9_OP9dxIxLzAba8Lbi3mqhI_QQHDImBmBgNxiQdi25a8GXS2jnohEApcYxdravBAHsgM6why9zFbKndgMyOnsX7_PtDEfR5-YWoYU/s4080/balut.jpg" style="margin-left: 1em; margin-right: 1em;"><img border="0" data-original-height="4080" data-original-width="3060" height="409" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhir07lx167utNOJ5JkG6RW3CbI4HlsklMUwPGTAd3xNz9XVWVfZr9JTxY6PxaONqCBarzO-g1zo855P1tiLKLjJce9_OP9dxIxLzAba8Lbi3mqhI_QQHDImBmBgNxiQdi25a8GXS2jnohEApcYxdravBAHsgM6why9zFbKndgMyOnsX7_PtDEfR5-YWoYU/w307-h409/balut.jpg" width="307" /></a></div><div class="separator" style="clear: both; text-align: center;">Pic: Trying the taste of Balut</div><br /><div><br /></div><div><br /></div><p style="text-align: left;">စားပြီးတော့ ရေချိုး အဝတ်စားလဲပြီး အိပ်လိုက်တော့တယ်..</p><div><br /></div><h1 style="text-align: left;">ဘူလာလို (သို့) Probably the best hangover soup in the world</h1><div><br /></div><p style="text-align: left;">ပြန်နိုးလာတော့ နေ့လည် ၁၂ ဖြစ်နေပြီ.. ပင်ပင်ပန်းပန်း နဲ့ အိပ်ချလိုက်တာ နိုးလာတော့ ညက တက္ကီလာ အရှိန် ကြောင့် ခေါင်း က နည်း နည်း ကိုက်နေတယ်..&nbsp;<br />ပြတင်းက နေ အပြင် ကို ကြည့်လိုက်တော့ နေက ခြစ်ခြစ် တောက် ပူ နေတယ်.. အဲဒါနဲ့ ဒီ နောက် ဆုံး နေ့ကို တော့ ဟိုတယ် ထဲပဲ နားပြီး Grab ကနေ စားစရာ မှာ စား ခဲ့တယ်.. <a href="https://www.kawalingpinoy.com/bulalo/" target="_blank">Bulalo ဆိုတဲ့ ဟင်းရည်</a> ကို တွေ့တော့ တစ်ပွဲမှာ လိုက်တယ်..<br /><br />ရောက်လာတော့ စားကြည့်တဲ့ အခါ တော်တော် အရသာ ကောင်းတယ်.. သူက ပြောင်းဖူး ရယ် အမဲသား ရယ် ကို အရွက်နဲ့ &nbsp;ရော ပြုတ်ထားပြီး ငရုတ်သီး ကို လည်း အတောင့်လိုက် ပြုတ်ထားတယ်.. သံပရာ လည်း နည်းနည်း ညစ်ဖို့ပေး ထားတယ်… နည်းနည်း ညစ်ထည့် လိုက် ပြီး မြည်းကြည့် တော့ ချဉ်ငံစပ် အရသာ ပေါ့.. ခေါင်းကိုက် တော်တော် သက်သာ သွား ပြီး လန်း ဆန်းသွား တာပေါ့လေ..</p><div style="text-align: left;"><br /></div><p style="text-align: left;">ဘူလာလိုရဲ့ အဓိက ကတော့ bone marrow ရိုးတွင်း ချဉ်ဆီပါပဲ.. သူက အရိုး ကို နှစ်တုံးလောက် လှီးထဲ့ထား တယ်.. ရိုးတွင်းချဉ်ဆိ ကို ဇွန်း လေး နဲ့ ခပ်စား လိုက်တော့ အရမ်း နူးညံ့ပြီး ခံတွင်း ထဲ မှာ တင် အရည်ပျော် သွားတယ်.. တော်တော် လည်း အရသာ ရှိပါတယ်..</p><div><br /></div><div class="separator" style="clear: both; text-align: center;"><a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhjzI6GSHyDdbbY9FIu1ivsCp5cXVHbTeypLKqwq6M-HW6hHp1N0_RMXN0P1zpzJ5jz2p9aijbFwQkMpLVYjZnnKReD9uwns_SxiyzKpfZXF6DVEuBdIwX3-0mcbaAniEiQUhGzPPuFU8mb9o6WXFTTSNYhav9brYoYPwrRGFkDl4D3ovs5gks3_2NUf1T4/s768/bulalo.jpg" style="margin-left: 1em; margin-right: 1em;"><img border="0" data-original-height="768" data-original-width="691" height="477" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhjzI6GSHyDdbbY9FIu1ivsCp5cXVHbTeypLKqwq6M-HW6hHp1N0_RMXN0P1zpzJ5jz2p9aijbFwQkMpLVYjZnnKReD9uwns_SxiyzKpfZXF6DVEuBdIwX3-0mcbaAniEiQUhGzPPuFU8mb9o6WXFTTSNYhav9brYoYPwrRGFkDl4D3ovs5gks3_2NUf1T4/w429-h477/bulalo.jpg" width="429" /></a></div><div class="separator" style="clear: both; text-align: center;">Pic: Bulalo, Beef Bone Marrow Soup</div><br /><div><br /></div><div><br /></div><h1 style="text-align: left;">ပြီးပါပြီ</h1><p style="text-align: left;">အချိန်ဟာ ခဏလေးပဲ ကုန်သွားတယ်.. ညနေစောင်းလာတော့ ဟိုတယ် ကို အချိန်ပို ပိုက် ဆံ အနည်း ငယ် ထပ်ပေးပြီး တက္ကစီ ငှါးပြီး လေဆိပ် ကို သွားလိုက်တယ်… စောနေပေမယ့် တော်တော် တန်းစီ ခဲ့ရတယ်.. လူတွေ က တော်တော် ဝီရိယ ရှိကြတယ်.. စလုံးလို automated lane တွေ မရှိတာလည်း ပါမှာပေါ့..<br />ဒီလိုနဲ့ လေဆိပ်ကနေ လေယာဉ်ပေါ်.. လေယာဉ်ပေါ်မှာ ၄ နာရီလောက် စီးလိုက် တော့ ပြန်ရောက်တော့ ည ၂ နာရီလောက် ဖြစ်နေပြီ .. ၂၀၂၃ တုန်း က ကျွန်တော့် ဆန္ဒ အထမြောက်ခဲ့ လေပြီ..&nbsp;<br />ကျွန်တော့် စိတ်ထဲမှာ အတွေး တစ်ခု လျှပ်ခနဲ ပေါ်လာတယ်..&nbsp;</p><h4 style="text-align: left;">ဪ…မှတ်မိနေမည် မနီလာ</h4><div><br /></div><div class="separator" style="clear: both; text-align: center;"><a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhiF8tHVmIIdXVGescqBA_Gy_ieQQlhq8QYgT2grIVeOCE0EYpkyJ5MqU6tHmMpYMJFX9pzQIXVbywEynWptHAj1j0uuvsdTcVtHt3ve8DhtVEyPOHOGfgofkPxYt6iPGUEFBnrr8hixht0q3kMSgJ229oPbO8wYwWwbssbUSTBFCodO5z62DsXgD_O_mr2/s3000/manila-flag.jpg" style="clear: left; float: left; margin-bottom: 1em; margin-left: 1em;"><img border="0" data-original-height="1889" data-original-width="3000" height="330" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhiF8tHVmIIdXVGescqBA_Gy_ieQQlhq8QYgT2grIVeOCE0EYpkyJ5MqU6tHmMpYMJFX9pzQIXVbywEynWptHAj1j0uuvsdTcVtHt3ve8DhtVEyPOHOGfgofkPxYt6iPGUEFBnrr8hixht0q3kMSgJ229oPbO8wYwWwbssbUSTBFCodO5z62DsXgD_O_mr2/w525-h330/manila-flag.jpg" width="525" /></a></div><br /><div><br /></div><div><br /></div><div><br /></div><div><br /></div><div><br /></div><h1 style="text-align: left;"><br /></h1><div><br /></div><div><br /></div><p><br /></p><p>&nbsp;</p><p><br /></p><p><br /></p><p><br /></p><p><br /></p><p><br /></p>',author:{id:"17827604690472162137",displayName:"Kevin Moe Myint Myat",url:"https://www.blogger.com/profile/17827604690472162137",image:{url:"//1.bp.blogspot.com/-tWz6Nv-7axE/ZxDB4KLiNvI/AAAAAAAAAh0/QERnGiTgB0gvb7R75uu_DWOCwToSNHL3QCK4BGAYYCw/s35/me-bali.jpg"}},replies:{totalItems:"0",selfLink:"https://www.googleapis.com/blogger/v3/blogs/6655808940462000438/posts/4189873799748090808/comments"},etag:'"dGltZXN0YW1wOiAxNzI5OTY2OTY2NDU1Cm9mZnNldDogMjg4MDAwMDAK"'},{kind:"blogger#post",id:"3653068274143975781",blog:{id:"6655808940462000438"},published:"2024-10-26T23:51:00+08:00",updated:"2024-10-27T00:24:39+08:00",url:"http://kevinmoemyintmyat.blogspot.com/2024/10/blog-post_26.html",selfLink:"https://www.googleapis.com/blogger/v3/blogs/6655808940462000438/posts/3653068274143975781",title:"မှတ်မိနေမည် မနီလာ အပိုင်း(၂)",content:`<p><span style="font-size: medium;">&nbsp;မနီလာ မှာ နောက်ထပ်သွားချင် တဲ့နေရာ က ဘီနွန်ဒို (Binondo) ပဲဖြစ်တယ်။ ဘီနွန်ဒိုက မနီလာရဲ့ တရုတ်တန်း ပေါ့၊</span></p><p><span style="font-size: medium;">YouTube ထဲမှာ လည်း တွေ့ဖူးတော့ သွားကြည့်ချင်နေမိတယ်၊</span></p><p><span style="font-size: medium;">ခဏ အနားယူရင်း Google map ကနေ ဘယ်လိုသွားရမလဲ ဆိုတာရှာ ကြည့်တော့ &nbsp;ရောက်နေတဲ့ ဟိုတယ်က <a href="https://en.wikipedia.org/wiki/Guadalupe_Nuevo" target="_blank">ဂွါတာလူပေး</a> လှေဆိပ်(Guadalupe Ferry Station ) နဲ့နီးတယ်၊ နီးတာမှ &nbsp;လမ်းလေး ခဏလျှောက်ရုံပဲ။&nbsp;</span></p><h1 style="text-align: left;">ရေလမ်းခရီး</h1><p><span style="font-size: medium;">ဂွါတာလူပေး ကနေ ဘီနွန်ဒို ကို ရေလမ်း နဲ့ သွားလို့ ရတယ် ဆိုတော့ ပျော် သွားတယ်၊ အရင်လည်း ဘန်ကောက် ခရီး ထွက်တုန်း က အဲ့လို မော်တော်ဘုတ် စီး ပြီး မြို့ ရဲ့ နေရာ တွေကို ကြည့်ရတာ ကြိုက်တဲ့ သူဆိုတော့ လေ…</span></p><div class="separator" style="clear: both; text-align: center;"><a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhpWsQ-w-Houwj57oDeYgr4Duz0BF1euecRXh0fae0IsuNsHWCFKjtDyPgXg5n5V9bc676YY2GLVlMtBFfxTB1vaQxgyS_goBFJVIQEx_BHGdIEtBvi2v48wLMxn9dOK9xXxVQR1ax9qleiWFfR7dhHnP0fUvBBp21_HnFhsFKFi0a4wj-CDKvGbJaVeKNd/s1800/pasig-river.webp" style="margin-left: 1em; margin-right: 1em;"><img border="0" data-original-height="1080" data-original-width="1800" height="261" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhpWsQ-w-Houwj57oDeYgr4Duz0BF1euecRXh0fae0IsuNsHWCFKjtDyPgXg5n5V9bc676YY2GLVlMtBFfxTB1vaQxgyS_goBFJVIQEx_BHGdIEtBvi2v48wLMxn9dOK9xXxVQR1ax9qleiWFfR7dhHnP0fUvBBp21_HnFhsFKFi0a4wj-CDKvGbJaVeKNd/w435-h261/pasig-river.webp" width="435" /></a></div><div class="separator" style="clear: both; text-align: center;">Pic: Guadalupe Ferry Station, Pasig River</div><br /><p><br /></p><p><br /></p><p><span style="font-size: medium;">အဲဒါ နဲ့ ပဲ ဂွါတာလူပေး လှေဆိပ် ဘက်ကို ငါးမိနစ် လောက် လျှောက် လာခဲ့တယ်၊ ဂွါတာလူပေး လှေဆိပ်… ပစစ် (Pasig) မြစ်နား ရောက်တာ နဲ့ အနံ့တစ်မျိုး ရလာတယ်၊ “ဘာနံ့ကြီးလဲဟ .. what’s that smell? “ လို့ တွေး လိုက် မိတယ် ..</span></p><p><span style="font-size: medium;"><br /></span></p><p><span style="font-size: medium;">နောက်မှ တွေ့တာ က ပစစ် မြစ်ဟာ အရမ်း ကို ညစ်ပတ်နေပြီး အဲ့ထဲက နေ ရေဆိုးနံ့ လှိုင် လှိုင် ထ နေတာ ပါပဲ.. ရေတွေ ဟာ မည်းညစ်ပြီး အမှိုက်တွေလည်း များတယ်… မသိရင် မြောင်းကြီး လိုပေါ့၊ ဒါပေမယ့် ကျယ်နေတာ တစ်ခုပဲ…</span></p><p><span style="font-size: medium;">အနံ့မခံနိုင် လို့ နှာရှုံ့ရင်း station ထဲ ခပ်သုတ်သုတ် ဝင်လိုက်တယ်၊ နောက် မော်တော်ဘုတ် ထွက်မယ့် အနီးဆုံး အချိန်ကို ယူလိုက် ပြီး ကျသင့်ငွေ မေးလိုက်တယ်.. သူတို့က ရယ်ကြတယ်.. ဒီ ရေယာဉ် က အခမဲ့တဲ့ …&nbsp;</span></p><p><span style="font-size: medium;"><br /></span></p><p><span style="font-size: medium;">နောက်လာ မယ့် ဘုတ်က နာရီဝက် လောက်လိုသေးတာရယ် ဗိုက်ဆာလာ တာရယ်ကြောင့် station က ထွက်လာပြီးတော့ စားစရာ လိုက်ရှာကြည့် ဖြစ်တယ်။ ဂွါတာလူပေး နေရာ ဟာ အခြေခံလူတန်းစား နေတာ ဖြစ်မယ်၊ အနီးအနား ဘာ စားစရာ မှ map က ထောက် မရဘူး၊ JollyBee တောင် မရှိဘူးပေါ့ ကုန်ကုန်ပြောရင်..&nbsp;</span></p><p><span style="font-size: medium;"><br /></span></p><p><span style="font-size: medium;">အဲဒါနဲ့ ထပ်ရှာတော့ အစိုဈေးကြီး တစ်ခုတော့ အနီးအနားမှာ ရှိတာ သတိထားမိသွားတယ်၊ အဲဒါနဲ့ အစိုဈေး ဘက်တက် ပြီး လျှောက်ရှာတော့ ပီဇာကို ပိုင်းပြီး ရောင်းနေတဲ့ ဆိုင် လေးတွေ့ တယ်၊ ဗိုက်ဆာတာနဲ့ အဲ့ က ပီဇာ တစ်ပိုင်း ရယ် ဘေးနား ဆိုင် က စရိုးမိုင်(ဝက်သားပေါင်း) &nbsp;(Siomai) သုံးတုံးလောက် ဝယ်စားလိုက်တယ်… ကျတဲ့ ပီစို့ (Peso) ငွေကို စလုံးဒေါ်လာ နဲ့ တွက် ကြည့် လိုက်တော့ ၁ ဒေါ်လာ သာသာ ပဲရှိတာ သိလိုက်ရတယ်…</span></p><div class="separator" style="clear: both; text-align: center;"><a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiufpRGCO16b-q35hb7QQ9ZVilOoYlGD0QPys2h8IybatsTx3WLlX4RkktFBqCkxaDt1e_KqLCA-sXqh6RCZTsdybrw0GtReWmD7iA5IIaE0p8VFZV_apC8ezWdt5Gu8BIqaShzWIN-WyUncvA9L3Vd_F182rZZNd_E33WulvLyiHhG3WHK1yBgy82aqjso/s4080/below-a-dollar-pizza.jpg" style="margin-left: 1em; margin-right: 1em;"><img border="0" data-original-height="4080" data-original-width="3060" height="471" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiufpRGCO16b-q35hb7QQ9ZVilOoYlGD0QPys2h8IybatsTx3WLlX4RkktFBqCkxaDt1e_KqLCA-sXqh6RCZTsdybrw0GtReWmD7iA5IIaE0p8VFZV_apC8ezWdt5Gu8BIqaShzWIN-WyUncvA9L3Vd_F182rZZNd_E33WulvLyiHhG3WHK1yBgy82aqjso/w353-h471/below-a-dollar-pizza.jpg" width="353" /></a></div><div class="separator" style="clear: both; text-align: center;">Pic: Street Food Pizza</div><br /><p><br /></p><p><span style="font-size: medium;">ပီဇာ က မဆိုးပါဘူး၊ အသားတွေလည်း ပါပြီး ပီဇာ အရသာ လည်း ထွက်တယ်၊ စရိုးမိုင် ဆိုရင် လည်း စားကောင်းတယ် ..</span></p><p><span style="font-size: medium;">လမ်းဘေးစာ စားပြီးတော့ ဟိုနားဒီနား လျှောက်ရင်း နာရီဝက်ဟာ ခဏ လေး နဲ့ကုန် သွားတယ်.. လှေဆိပ်ပြန်ရောက်တော့ မော်တော်ဘုတ် ရောက်တာနဲ့ ကွက်တိ..&nbsp;</span></p><h1 style="text-align: left;">ငရဲခန်းသာသာ</h1><p style="text-align: left;"><span style="font-size: medium;">မော်တော်ဘုတ်ပေါ် ရောက်တော့ အနံ့ဟာ ပိုဆိုးလာတယ်၊ ပိုပြင်းလာတယ်.. ဖြစ်နေတာက မနီလာက နေအရမ်းပူ လေအရမ်းပူတော့ အဲ့ အပူနဲ့ မြစ်ထဲက ရေပုပ်တွေက အငွေ့ပျံပြီ အရမ်း အနံ့ပြင်းနေတာ တစ်ခုပဲ၊ ဘုတ်ထဲ ကြည့်တော့ နိုင်ငံခြားသား ဆိုတာ ကိုယ် တစ်ယောက်တည်း ရှိမယ်၊ ကျန်တဲ့ သူတွေ ကို ကြည့် တော့ အခြေခံလူတန်းစား ပုံစံ တွေ များနေတယ်…</span><span style="font-size: medium;"><br /></span><span style="font-size: medium;"><br /></span><span style="font-size: medium;">ဒီလိုနဲ့ လူက ပင်ပန်းနေတာနဲ့ အိပ်မောကျချင်လာတယ်.. ဒါပေမယ့် မြစ်ရဲ့ ရေဆိုးနံ့က နှာခေါင်းကို မကြာခဏ လာ ရိုက်နေပြီး နေက လည်း နေ့လည် ၂နာရီ အရမ်း ပူပြီး “ပူလည်း ပူ၊ နံလည်းနံ” နဲ့ ဖြတ်သန်းလာတာ၊ ၁ နာရီ လောက်ကြာသွားတယ်၊ ကြားမှာလည်း station တစ်ချို့ ဖြတ်တာပေါ့၊&nbsp;</span><span style="font-size: medium;"><br /></span><span style="font-size: medium;">ဒီမှာ တစ်ချက် ဘန်ကောက်နဲ့ နှိုင်းယှဉ် ပါရစေ ၊ ဘန်ကောက် ရဲ့ ကျောက် ဖုရားမြစ် က ကျယ်လည်း ကျယ် အရမ်း လည်း မညစ် ၊ နိုင်ငံခြားသားပါ ခေါ်စီး လို့ရအောင် ထိန်းသိမ်းထား တဲ့မြစ်ဖြစ်တယ်.. အစ က ပစစ်မြစ် ကိုလည်း အဲ့လိုပဲ ထင်ပေမယ့် <a href="https://en.wikipedia.org/wiki/Pollution_of_the_Pasig_River" target="_blank">ပစစ်မြစ် ဟာ တော်တော် polluted</a> ဖြစ်နေပါပြီ…</span><span style="font-size: medium;"><br /></span><span style="font-size: medium;">ဒီလိုနဲ့ နောက် ခဏ ဆက် သွားတဲ့ အခါမှာ အနံ့များ ရုတ်တရက် ပျောက် သွားပြီး ရေ ဟာ လည်း ကြည်လာပါတယ်.. ရှုခင်း တွေလည်း လှလာပြီး တကယ်ကို ခုန ၁၅ မိနစ်လောက် က မြစ်နဲ့ ကွာခြားသွားပါတယ်၊.. ပြီးတော့ မြစ်ဘေးမှာ လည်း တော်တော်လှ တဲ့ အဆောက်အဦး အိမ်လေး တွေ တွေ့ရတယ်.. ဘယ်လိုဖြစ်တာလဲ တွေးမိပြီး Google map မှာ ရှာကြည့်တော့ မလကာနာင်းအ် နန်းတော် (<b style="background-color: white; color: #202122; font-family: sans-serif;">Malacañang Palace</b>) ဖြစ်နေတာကို သိလိုက်ရတယ်။&nbsp;</span></p><div class="separator" style="clear: both; text-align: center;"><a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi32360hMN4RFrjO7M-H-Y2h0tFUAERPms9Ho0G64z5XsyrLOkCzdnUwnoHn0A-q06fAGqWX9pUpVAiADbSURJnHmU3LNHfXo5m-6pkkwqum5mXh0G55s1vgxI4j4GFjeIzwAvuec1oobJ6P73SOcig0m3bWd8pbxucIFStZdCNxT-yzB9NbDzYhIu0q36m/s799/malacanang-palace.jpg" style="margin-left: 1em; margin-right: 1em;"><img border="0" data-original-height="533" data-original-width="799" height="324" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi32360hMN4RFrjO7M-H-Y2h0tFUAERPms9Ho0G64z5XsyrLOkCzdnUwnoHn0A-q06fAGqWX9pUpVAiADbSURJnHmU3LNHfXo5m-6pkkwqum5mXh0G55s1vgxI4j4GFjeIzwAvuec1oobJ6P73SOcig0m3bWd8pbxucIFStZdCNxT-yzB9NbDzYhIu0q36m/w486-h324/malacanang-palace.jpg" width="486" /></a></div><div class="separator" style="clear: both; text-align: center;">Pic:&nbsp;<span face="sans-serif" style="background-color: white; color: #202122; font-size: 16px; text-align: left;">Malacañang Palace View from Pasig River</span></div><br /><div style="text-align: left;"><br /></div><div style="text-align: left;"><br /></div><p style="text-align: left;"><span style="font-size: medium;">မလကာနာင်းအ် နန်းတော် က ဖိလစ်ပင် အစိုးရ ရုံးထိုင်တဲ့နေရာပေါ့၊ ဒီလိုနဲ့ နောက် နှစ်မှတ်တိုင် လောက်ရောက် တော့ အက်စကော်တာ လှေဆိပ် (Escolta Rivera ferry station) ဆီရောက် ခဲ့တော့တယ်…ဒီနေရာက ဘီနွန်ဒိုကို ဝင်ရမှာလေ…</span></p><div style="text-align: left;"><br /></div><h1 style="text-align: left;">&nbsp;နှစ်၄၀၀ ကျော် တရုတ်တန်း&nbsp;</h1><p style="text-align: left;"><span style="font-size: medium;">ဒီလိုနဲ့ <a href="https://en.wikipedia.org/wiki/Chinatown#:~:text=Binondo%20in%20Manila%2C%20established%20in,as%20the%20world's%20oldest%20Chinatown." target="_blank">ကမ္ဘာ့ ရှေးအကျဆုံး တရုတ်တန်း ဘီနွန်ဒို</a>ကို &nbsp;ရောက်လာခဲ့တော့တယ်၊ မြန်မာက တရုတ်တန်းနဲ့ တူလွန်းလို့ တော်တော် အံ့အားသင့်ခဲ့ရတယ်။ ရှေးခေတ် ကိုလိုနီခေတ် အဆောက် အအုံ တွေ ရဲ့ အောက်လေးတွေ<br /></span><span style="font-size: medium;">မှာ ဆိုင် လေးတွေ လုပ်ထားပြီး သံထည် ပစ္စည်း၊ ကုန်စုံ၊ ကြေးထည်. .. အစရှိတဲ့ hardware မျိုးစုံကို ရောင်းချကြပါတယ်၊</span></p><div class="separator" style="clear: both; text-align: center;"><a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiXK6-K8fl4VH4zLgj7B0lxkeCMtaNJWGJrtrFFlGJD6jy1307oNOEVPQeJ02_-1U42hM_LqyhbcajjiyV8rvx1Jhr8gobpxQZ1zaUPJ4YT3qgiOCLktkDMijuWy3lTAHkMdWoZ-1DPhw1qvTu58F1Ac2Oz3nsFV3ry5YtRanmO4vHqnrxGbJWmwH4mHFyo/s3408/binondo-and-me.jpg" style="margin-left: 1em; margin-right: 1em;"><img border="0" data-original-height="3408" data-original-width="3408" height="484" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiXK6-K8fl4VH4zLgj7B0lxkeCMtaNJWGJrtrFFlGJD6jy1307oNOEVPQeJ02_-1U42hM_LqyhbcajjiyV8rvx1Jhr8gobpxQZ1zaUPJ4YT3qgiOCLktkDMijuWy3lTAHkMdWoZ-1DPhw1qvTu58F1Ac2Oz3nsFV3ry5YtRanmO4vHqnrxGbJWmwH4mHFyo/w484-h484/binondo-and-me.jpg" width="484" /></a></div><div class="separator" style="clear: both; text-align: center;">Pic: Filipino-Chinese Friendship Arch@ Binondo</div><br /><div style="text-align: left;"><br /></div><div style="text-align: left;"><br /></div><p style="text-align: left;"><span style="font-size: medium;">တရုတ် အစားအသောက် မျိုးစုံဖြစ်တဲ့ ချားစူး (Char Siew) ၊ ဒင်မ်စမ်း (Dim Sum) ၊ ဖက်ထုပ် (Jiao zi) ၊ ဘဲကင် (Kao Ya) ၊ လားမြန့် (La Mian) စတာတွေကို ရောင်းချကြတယ်..</span><span style="font-size: medium;"><br /></span><span style="font-size: medium;">ဘီနွန်ဒိုရဲ့ အချက်အချာ နေရာကတော့ Lucky Chinatown Mall ကြီးပဲဖြစ်ပါတယ်၊ ဒီနေရာကို online မှာ တွေ့ဖူးတာကတော့ တရုတ်နှစ်သစ်ကူး ဆိုရင် အရမ်းကိုပဲ စည်ကားပြီး တော့ decoration တွေလည်း အရမ်းလှတယ်ဆိုတာပါပဲ။</span><span style="font-size: medium;"><br /></span><span style="font-size: medium;">Lucky Mall ထဲမှာ လျှောက်သွား စားစရာတွေ စားပြီး ဘယ်မှ လည် စရာမရှိတော့တာမို့လို့ တရုတ်တန်းက နေ ရွေ့ဖို့ပြင်လိုက်တယ်။ ဒီနေ့မှာတော့ င်္အတ္တရာမူရို့စ် (Intramuros) စပိန်လက်ထပ် ဖိလစ်ပင်း မြို့တော်ဟောင်း ကို သွားကြည့်မို့ပေါ့၊ <a href="https://kevinmoemyintmyat.blogspot.com/2024/10/blog-post.html" target="_blank">အရင်နေ့က</a> မြင်းလှည်းသမား လိုက်ပို့ မယ်ဆိုတဲ့ နေရာပါ။</span><span style="font-size: medium;"><br /></span><span style="font-size: medium;">ဒီတစ်ခါတော့ တရုတ်တန်းကနေ တက္ကစီ စီး မယ့် အစား ဆိုဒ်တွဲ pedicab စီးလိုက်တယ်။ အတွေ့အကြုံ တစ်မျိုးပေါ့၊ ဆိုဒ်တွဲ က လက်လုပ် ဂဟေနဲ့ ဆိုက်ကယ်ကို တွဲထားပြီး လှုပ်လီလှုပ်လှည့် နဲ့ ဖြစ်နေပြီး အရှိန်တင်လိုက်တဲ့ အခါတွေ အကွေ့တွေမှာ ပြုတ်သွားမလား စိုးရိမ်စရာ၊ ဒါပေမယ့် ဆိုဒ်တွဲ ရဲ့ မျက်နှာကြက်မှာ ယေရှု ပုံတွေ့လိုက်တယ် ၊ Jesus is with me ဆိုပြီး ကြောက်စိတ်များ ပျောက်သွားတော့ တယ်&nbsp;</span></p><div style="text-align: left;"><br /></div><h1 style="text-align: left;">ရှေးဟောင်းမြို့တော်</h1><p style="text-align: left;"><span style="font-size: medium;">Intramuros ရောက်တော့ စင်တီယားဂိုး ခံတပ် (Fort Santiago) နဲ့ မနီလာ ဘုရားကျောင်း (Manila Cathedral) (အရှည် ) ဟာ မျက်နှာချင်းဆိုင်ပဲ ရှိနေတယ်။ ညနေစောင်းလာပြီ ဆိုတော့ စင်တီယားဂိုး ခံတပ် ပိတ်ခါနီးနေပြီ အဲဒါနဲ့ ပဲ အဲ့ကို အရင်သွားဖြစ်တယ်။ အထဲမှာ စပိန်လက်ထက် အဆောက်အဦး အဟောင်းတွေ ရှိပြီး ဖိလစ်ပိုင်နိုင်ငံ ရဲ့ <a href="https://en.wikipedia.org/wiki/Jos%C3%A9_Rizal" target="_blank">နိုင်ငံ့ အာဇာနည် ဖြစ်တဲ့ ဟိုစေးရစ်ဇယ်</a> (José Rizal ) ရဲ့ မတရားအကျဉ်းချခံရပြီးနောက်ပိုင်း သူ့ရဲ့ နောက်ဆုံးနေ့ အထိသမိုင်းတွေကို ပြတိုက်ငယ်လို လုပ်ပြီးပြထားတယ်။&nbsp;</span></p><div style="text-align: left;"><span face="-apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, Inter, Helvetica, Arial, sans-serif" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0.2); caret-color: rgb(32, 33, 34); color: #202122; font-size: 17px;"><br /></span></div><div style="text-align: left;"><div class="separator" style="clear: both; text-align: center;"><a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg-gagIDQBbm8WWZGDtagYE0UwcZvCmgWTrMeRAoZiKDpJ1pw9iAR9w8OPiPV8F9waRH3pkopyrh2kM2oVd1MX19vfdYTp_Jfu4RLGvn4N-NCPiFGmCOec6Ix9gzrNj3KrKSK1ZHX7NDsctn_wDX8hKp99JdgvCckM6r4I8pEx-zpEzJJag-mrpvC_QA4-H/s945/infront-of-fort-santiago.jpg" style="margin-left: 1em; margin-right: 1em;"><img border="0" data-original-height="945" data-original-width="709" height="479" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg-gagIDQBbm8WWZGDtagYE0UwcZvCmgWTrMeRAoZiKDpJ1pw9iAR9w8OPiPV8F9waRH3pkopyrh2kM2oVd1MX19vfdYTp_Jfu4RLGvn4N-NCPiFGmCOec6Ix9gzrNj3KrKSK1ZHX7NDsctn_wDX8hKp99JdgvCckM6r4I8pEx-zpEzJJag-mrpvC_QA4-H/w359-h479/infront-of-fort-santiago.jpg" width="359" /></a></div><div class="separator" style="clear: both; text-align: center;">Pic: Fort Santiago Ornate Gate (453 years old)</div><p style="text-align: left;"><br /></p></div><div style="text-align: left;"><br /></div><div style="text-align: left;"><br /></div><p style="text-align: left;"><span style="font-family: arial; font-size: medium;">နောက်တော့ ခံတပ် ရဲ့ တခြား တစ်ဖက် မှာ ကတုပ်ကျင်း တစ်ခု လည်း ရှိတယ်၊ အဲ့ထဲမှာ ဒုတိယ ကမ္ဘာစစ် လက်ထက် ဂျပန် တွေ ဝင်သိမ်း တုန်းက <a href="https://en.wikipedia.org/wiki/Manila_massacre" target="_blank">လူ အမြောက်အများ သတ် ခဲ့တဲ့ အကြောင်း</a>တွေကို ရုပ်ထု တွေ ပန်းချီ တွေ နဲ့ ပြထား တယ်။ ကျွန်တော် လည်း အဲ့ ကတုပ်ကျင်း တစ်ပတ်ကြည့် ပြီး မွန်းလာတာ နဲ့ မြစ်ကမ်း နားသွား ပြီး လေညင်းခဏ ခံ အမော ဖြေ လိုက်ပါတယ်.. ဒီနေရာမှာ တော့ မြစ် က ကျယ်ပြီး ရေဟာလည်း ဂွါတာလူပေးလို အနံ့အသက် မရှိပဲ ညနေစောင်း လေလေး တိုက်ပြီး တစ်မျိုးလှနေလေရဲ့.</span></p><p style="text-align: left;"><br /></p><div style="text-align: left;"><span face="-apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, Inter, Helvetica, Arial, sans-serif" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0.2); caret-color: rgb(32, 33, 34); color: #202122; font-size: 17px;"><br /></span></div><div style="text-align: left;"><span face="-apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, Inter, Helvetica, Arial, sans-serif" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0.2); caret-color: rgb(32, 33, 34); color: #202122; font-size: 17px;"><br /></span></div><div style="text-align: left;"><br /></div><div style="text-align: left;"><span face="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Inter, Helvetica, Arial, sans-serif" style="color: #202122;"><div class="separator" style="clear: both; text-align: center;"><a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjM2laULRckldi88OzAr_g1FVgjG6PE4Ane7_XtDoiejxwBLSx9YpPmLopyZOSWtg3V_D0YO9ayIu4GpLs0lKNSaR7k8YMZwIpXzv2ZqIXODk-k0SGMorztSfHSYeWtnD-UT5xdNuDx7bXDQEjHDtLwnnwBcVluDjn3vr15RvKHPfHmJX7QcGvNAqtilKuz/s612/fort-santiago-river-view.jpg" style="margin-left: 1em; margin-right: 1em;"><img border="0" data-original-height="408" data-original-width="612" height="345" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjM2laULRckldi88OzAr_g1FVgjG6PE4Ane7_XtDoiejxwBLSx9YpPmLopyZOSWtg3V_D0YO9ayIu4GpLs0lKNSaR7k8YMZwIpXzv2ZqIXODk-k0SGMorztSfHSYeWtnD-UT5xdNuDx7bXDQEjHDtLwnnwBcVluDjn3vr15RvKHPfHmJX7QcGvNAqtilKuz/w518-h345/fort-santiago-river-view.jpg" width="518" /></a></div><div class="separator" style="clear: both; text-align: center;">Pic: Pasig River view from Furthest most corner of Fort Santiago</div><div style="text-align: left;"><span face="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Inter, Helvetica, Arial, sans-serif" style="color: #202122;"><br /></span></div><div style="text-align: left;"><span face="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Inter, Helvetica, Arial, sans-serif" style="color: #202122;"><br /></span></div></span><p style="text-align: left;"><br /></p><p style="text-align: left;"><span face="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Inter, Helvetica, Arial, sans-serif"><span style="caret-color: rgb(32, 33, 34); font-size: 17px;">ခံတပ်က ပိတ်ခါနီးဖြစ်လာတော့ လူတွေလည်း ဆိပ်လာတာနဲ့&nbsp; အပြင်ပြန်ထွက်လာလိုက်တယ်။ ရှေ့ဘက် က မနီလာ ဘုရားကျောင်းကို ဝင်ကြည့်ချင်ပေမယ့် ဘုရား ကျောင်း ဟာလည်း ပိတ်နေပြီ..ဓါတ်ပုံဘာညာရိုက်ပြီး တော့ ဆက်ပြီး Intramuros ထဲ လျှောက် ကြည့်မိတယ်။ ဘုရားကျောင်းရဲ့ အနောက်ဘက် မှာ ဘုရားကျောင်း အမြင့်နဲ့ မတိမ်းမယိမ်း rooftop စားသောက်ဆိုင်လေး တွေ့တာနဲ့ အစာပြေ လေးစားခဲ့တယ်။ ဆိုင်နာမည်က La Cathedral လို့ ခေါ်ပြီး ဘုရားကျောင်းကြီး ရဲ့ မြင်ကွင်းကို အကျအနမြင်ရပြီး ရိုမန်းတစ် လည်း ဖြစ်တဲ့ နေရာ လေး တစ်ခုပါ။</span></span></p><span face="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Inter, Helvetica, Arial, sans-serif" style="color: #202122;"><span style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0.2); caret-color: rgb(32, 33, 34); font-size: 17px;"><br /></span></span></div><div style="text-align: left;"><br /></div><div style="text-align: left;"><span face="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Inter, Helvetica, Arial, sans-serif" style="color: #202122;"><span style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0.2); caret-color: rgb(32, 33, 34); font-size: 17px;"><br /></span></span></div><div style="text-align: left;"><span face="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Inter, Helvetica, Arial, sans-serif" style="color: #202122;"><div class="separator" style="clear: both; text-align: center;"><a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgjtiYLO2Cb0S2Dm9oqMYqUQc-HammE6X3DnsfS2z0-IZPKzxBNIqrLzP7KzsllpVEejej0j7eg0ova4Y-1MpYjQqGxI1PIXtALNjQzf6kXZmMArUEsiIdn6NBIQTYTlmhc0yL09SZR1uCL2hhdr04j4jH3q6KM0Xl7tcJK9Z75RyABWgVuTVimrzHunRkX/s960/la-cathedral.jpg" style="margin-left: 1em; margin-right: 1em;"><img border="0" data-original-height="960" data-original-width="720" height="465" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgjtiYLO2Cb0S2Dm9oqMYqUQc-HammE6X3DnsfS2z0-IZPKzxBNIqrLzP7KzsllpVEejej0j7eg0ova4Y-1MpYjQqGxI1PIXtALNjQzf6kXZmMArUEsiIdn6NBIQTYTlmhc0yL09SZR1uCL2hhdr04j4jH3q6KM0Xl7tcJK9Z75RyABWgVuTVimrzHunRkX/w349-h465/la-cathedral.jpg" width="349" /></a></div><div class="separator" style="clear: both; text-align: center;">Pic: View from La Cathedral</div><br /></span></div><div style="text-align: left;"><p><br /></p><p><span style="font-family: arial; font-size: medium;">စားသောက်ပြီးနောက်တော့ Intramuros ရဲ့ အဆုံးထိ လျှောက်ပြီး ပရဝုန် ထဲက ထွက်လာလိုက်တယ်.. ခရီးစဉ် တောက်လျှောက် လမ်းလျှောက် တာတွေများ ပြီး လူက ပင်ပန်းနေတာနဲ့ အနှိပ်ခံ ဖို့ ရှာဖွေကြည့်တယ်၊ ဟိုတယ်နဲ့ မနီးမဝေး နေရာ နားမှာ review ကောင်း ကောင်း တွေ့တာနဲ့ အဲ့ နားကို ဆိုက်ကယ်ငှါးဖြစ်ပါတယ်။&nbsp;</span></p><p><span style="font-family: arial; font-size: medium;">ဒီမှာ တစ်ခု ပြောစရာရှိတာက Grab က ဖိလစ်ပိုင်မှာ GrabBike မရှိပါဘူး၊ <a href="https://www.grab.com/sg/inside-grab/stories/move-it-motorcycle-taxis/" target="_blank">Move It လို့ အမည်ရတဲ့ Strategic Partner</a> တစ်ခုက ကြီးစိုးပါတယ်။ ဒီလိုနဲ့ Move It တစ်ကြောင်းငှါးပြီး ည၈နာရီလောက် မကာတီ ဘက်ကို ပြန်ရောက်ခဲ့ပါတယ်။</span></p><p><span style="font-family: arial; font-size: medium;">အနှိပ်ခန်းမှာ တစ်နာရီ ယူလိုက် ပြီး အနားယူလိုက်ပါတယ်.. ဖိလစ်ပိုင် ရဲ့ နှိပ်ပုံက ထိုင်းအနှိပ်လို ကြမ်းကြမ်းရမ်းရမ်း သိပ်မရှိဘူး .. ညင်သာပြီး ဇိမ်ရှိလှတယ်… ကျွန်တော်လည်း မျက်လုံးများ မှေးစင်း လာပြီး အနှိပ်ခံရင်း အိပ်ပျော်သွားပါတော့တယ် …</span></p><p><span style="font-family: arial; font-size: medium;">မျက်လုံးပြန်ဖွင့်လိုက်တော့ အနှိပ်သည်လည်း မရှိတော့။ အချိန်ကို ကြည့်လိုက်တော့ ၁၁:၃၀ လောက်ဖြစ်နေလေပြီ။ ဒီလိုနဲ့ ထွက်လာတော့ အနှိပ်သည်တွေက အိပ်မောကျနေတာမို့လို့ အားနာ လို့ မနှိုးတာလို့ ပြောပါတယ်။ ကျွန်တော်ထွက်လာတော့ သူတို့ က “Thank you , Po” ဆိုပြီး နှုတ်ဆက်ကြပါတယ်..ကျွန်တော့် ကို ကွန်ဖူးပန်ဒါလို့ ပြောတာ မဟုတ်ပါဘူးနော်.. ဖိလစ်ပင်း ရိုးရာ ဓလေ့မှာ အသက်ကြီး သူ၊&nbsp; ဝါကြီးသူ ၊ ကာစတန်မာ တွေကို အနောက် က “ပို” ဆိုပြီး တပ်ပြော ကြပါတယ်။ ထိုင်းရဲ့ “ခပ် / ခရပ်” ဒါမှမဟုတ် ကျွန်တော်တို့ မြန်မာ ရဲ့ “ခင်ဗျာ/ ရှင်” နဲ့ သွားတူပါတယ်။</span></p><p><span style="font-family: arial; font-size: medium;">ကျွန်တော် ထွက်လာတော့ ဗိုက်ကအတော် ဆာနေပြီ၊ La Cathedral မှာ လည်း အနည်း ငယ်ပဲ စား ထားပြီး အချိန်က လည်း အတော်ကြာ သွားပြီ လေ။ အဲဒါနဲ့ ညလည်စာ ဟော့ပေါ့ စားချင်စိတ်ဖြစ်လာတယ်။ အဲ့ နေရာနား မှာ လည်း ၂၄ နာရီ ဟော့ပေါ့ ဆိုင် တွေ ရှိတာ နဲ့ ဝင်ကြည့် ဖြစ်ခဲ့တယ်။&nbsp;</span></p><p><span style="font-family: arial; font-size: medium;">ဟော့ပေါ့ ဆိုင်တွေက အဆာ ပလာ စားစရာတွေလည်း စုံပြီး ဈေးလည်း ချိုတယ်… စိတ်ကျေနပ်လောက် အောင် ဘူဖေး မှာ စားလိုက်ပြီး အချိန်က ၂ နာရီ နီးပါးဖြစ်ပြီ။</span></p><p><br /></p></div><div style="text-align: left;"><span style="color: #202122;"><div class="separator" style="clear: both; text-align: center;"><a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEioa3vT05CJ7k4ZTIKGcF1bz_otwc4q0YHmxGDEdEsmyThNJEmNXsmIaQpKhMhnk6liXoSKT0OKaQE8Cck85v4K6L84vbZWDrUqKclRvNuCH_CXKUtAMzfpPHw3wq0b2_2hJQGmB9maS4st6B0labongpDnpEiqGYTvJsG8xWztHr9kxrP8rSTm7t71faI8/s3060/buffet-hotpot.jpg" style="margin-left: 1em; margin-right: 1em;"><img border="0" data-original-height="3060" data-original-width="2679" height="440" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEioa3vT05CJ7k4ZTIKGcF1bz_otwc4q0YHmxGDEdEsmyThNJEmNXsmIaQpKhMhnk6liXoSKT0OKaQE8Cck85v4K6L84vbZWDrUqKclRvNuCH_CXKUtAMzfpPHw3wq0b2_2hJQGmB9maS4st6B0labongpDnpEiqGYTvJsG8xWztHr9kxrP8rSTm7t71faI8/w385-h440/buffet-hotpot.jpg" width="385" /></a></div><div class="separator" style="clear: both; text-align: center;">Pic: A hearty supper to call it a night</div><div class="separator" style="clear: both; text-align: center;"><br /></div><div class="separator" style="clear: both; text-align: center;"><br /></div></span></div><h1 style="text-align: left;">တစ်ညတာပြီးဆုံး</h1><div style="text-align: left;"><div><span style="font-family: arial; font-size: medium;"><br /></span></div><p style="text-align: left;"><span style="font-family: arial; font-size: medium;">ဆိုက်ကယ် ထပ် ခေါ် လိုက် ပြီး ဟိုတယ် ကို ပြန်ရောက် လာခဲ့တယ်။ ညောင်း လည်း ညောင်း၊ နှိပ်ထားတော့ relax လည်း ဖြစ် ၊ ဗိုက် လည်း ကားကား နဲ့&nbsp; အဲကွန်း တော်တော် အေးတဲ့ ဟိုတယ် ခန်းထဲမှာ စောင်ထူထူ ကို ခြုံပြီး ကျွန်တော် ဟာ အိပ်မက် ကမ္ဘာ ထဲကို လှစ်ခနဲ ရောက်ရှိသွားပါတော့တယ် ..&nbsp;<br /></span><span style="font-family: arial; font-size: medium;">မနက် နိုးလာတော့ ဟိုတယ် အပေါ်ဆုံးထပ် က ရေကူးကန် အသေးလေးမှာ နေမပူခင်ရေ စိမ် ၊ ရေချိုးပြီး မပြန်ခင် နောက် ဆုံး တစ်နေ့နဲ့ တစ်ညကို ဘယ် လို ဖြတ်သန်း မလဲ ပြင် ဆင် နေမိတယ်။ ကျွန်တော် ဘယ်တွေ သွားရမလဲ ဆိုတာ ခေါင်းထဲ မှာ သေချာ သိပါတယ်.. အဝတ်အစား လဲ လိုက် ပြီး&nbsp; အပြင် ခဏ ထွက် ကြည့်လိုက်တယ်။ နေဟာ အသား ကို ကင်နေတယ်။ ဆိုက် ကယ် မစီးသင့် ဘူး ထင်ပြီး&nbsp; ကားပဲငှါး လိုက်တယ်.. ကျွန်တော် သွားမယ့် နောက် နေရာ က</span></p></div><div style="text-align: left;"><br /></div><div style="text-align: left;"><h1><br /></h1><h1 style="text-align: left;"><span style="font-family: arial;">ဆက်ရန်&nbsp;</span></h1></div><div style="text-align: left;"><span face="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Inter, Helvetica, Arial, sans-serif" style="color: #202122;"><span style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0.2); caret-color: rgb(32, 33, 34); font-size: 17px;"><br /></span></span></div><div style="text-align: left;"><br /></div><div style="text-align: left;"><br /></div><div style="text-align: left;"><br /></div><div style="text-align: left;"><br /></div><div style="text-align: left;"><br /></div><p><br /></p><p><br /></p><p><br /></p>`,author:{id:"17827604690472162137",displayName:"Kevin Moe Myint Myat",url:"https://www.blogger.com/profile/17827604690472162137",image:{url:"//1.bp.blogspot.com/-tWz6Nv-7axE/ZxDB4KLiNvI/AAAAAAAAAh0/QERnGiTgB0gvb7R75uu_DWOCwToSNHL3QCK4BGAYYCw/s35/me-bali.jpg"}},replies:{totalItems:"0",selfLink:"https://www.googleapis.com/blogger/v3/blogs/6655808940462000438/posts/3653068274143975781/comments"},labels:["manila","manila memories","part-2","part-two","travel"],etag:'"dGltZXN0YW1wOiAxNzI5OTU5ODc5MjY4Cm9mZnNldDogMjg4MDAwMDAK"'},{kind:"blogger#post",id:"3975425417229776902",blog:{id:"6655808940462000438"},published:"2024-10-17T12:04:00+08:00",updated:"2024-10-27T02:06:04+08:00",url:"http://kevinmoemyintmyat.blogspot.com/2024/10/blog-post.html",selfLink:"https://www.googleapis.com/blogger/v3/blogs/6655808940462000438/posts/3975425417229776902",title:"မှတ်မိနေမည် မနီလာ အပိုင်း(၁)",content:`<p>&nbsp;မနီလာကို ကျွန်တော် စိတ်ထဲစရှိတဲ့ အချိန်က ၂၀၂၃ခုနှစ် ဩဂုတ်လနှောင်းပိုင်း…</p><p>အမှတ်မမှားဘူးဆိုရင် မနီလာ အကြောင်း မသိခင်တည်းက မနီလာ အကြောင်း အိပ်မက် ၃-၄ ခေါက် မက်ခဲ့လိမ့်မယ်ထင်တယ်။</p><p>မနီလာ ဆိုတာ အမျိုးသမီး တစ်ယောက် မဟုတ်ပါဘူးနော်.. ကျွန်တော် ပြောမယ့် မနီလာ ဆိုတာ ဖိလစ်ပိုင် နိုင်ငံရဲ့ မြို့တော် လည်း ဖြစ် စီးပွါးရေး အချက်အချာ လည်း ဖြစ်တဲ့ မတ်ထရို မနီလာ (Metro Manila) အကြောင်းပဲ ဖြစ်ပါတယ်။&nbsp;</p><br /><p><br /></p><h2 style="text-align: left;"><span style="font-size: x-large;"><b>အိပ်မက်များအကြောင်း</b></span></h2><p>ကျွန်တော့် အထင်တော့ YouTube ကစတာဖြစ်လိမ့်မယ်။ YouTube မှာ Manila Walking Tours၊ Mark Wiens ရဲ့ Manila Street Food Tour တွေ ပေါ်ပေါ်နေတော့ ကျွန်တော့် အိပ်မက်ထဲမှာ ပါ လေယာဉ်စီးစီးပြီး မနီလာကို ၃-၄ ခေါက် သွားသွားနေရတယ်ဗျ၊ ဆရာ မင်းသိင်္ခ ပြောသလို မသွားမီကများ ရောက်နှင့်နေသလား…&nbsp;</p><p>အဲဒါနဲ့ အဲ့တုန်းက ပေါင်းသင်းဖြစ်ခဲ့တဲ့ ဘော်ဒါ ငထွန်း (နာမည်ပြောင်းထားသည်) ကို တိုင်ပင်ကြည့်ဖြစ်တယ်၊ ငထွန်းက &nbsp;မနီလာမှာ ၃-၄ လ နေခဲ့ဖူးတယ်လေ..</p><p></p>ငထွန်းက အကြံပေးတယ်.. သူအဲ့တုန်း က နေခဲ့ဖူးတဲ့ မန်ဒလူယုန်း (Mandaluyong) မှာ တည်း သင့်တယ် ပေါ့၊ ဒါပေမယ့် ကျွန်တော် က အဲ့နေရာထပ် မနီလာ ပင်လယ်ကွေ့ (Manila Bay) ကို ပိုစိတ်ဝင်စားနေမိတယ်…&nbsp;<p></p><p>အိပ်မက်ထဲမှာ အဲ့နေရာတွေ မှာ ထိုင်ခဲ့တာကိုး…</p><p>ပြီးတော့ ခု ဓါတ်ပုံ ထဲမှာ ကြည့်ကြည့်ရင် တောင် Manila Bay ဟာ ကျွန်တော့်အတွက် ၁၉၉၀ ခုနှစ်ကာလ အင်္ဂလိပ်သီချင်း ကာရာအိုကေ (80s karaoke) ထဲကလို မျိုး ခံစားရပြီး တစ်မျိုးလေး ဆွေးစရာလေး ဖြစ်စေတယ်…</p><div class="separator" style="clear: both; text-align: center;"><iframe allowfullscreen="" class="BLOG_video_class" height="360" src="https://www.youtube.com/embed/ZrfJkLb6ih8" width="476" youtube-src-id="ZrfJkLb6ih8"></iframe></div><div class="separator" style="clear: both; text-align: center;"><br /></div><p>ဒီလိုနဲ့ ဘာမှတော့ မလုပ်ဖြစ်ခဲ့ပါဘူး… ကျွန်တော် ၂၀၂၃ ရဲ့ နှစ်ကုန်ခါနီး လများမှာ <a href="https://kevinmoemyintmyat.github.io/blog/second-trip-to-bali/" target="_blank">ဘာလီ ကို သာ အပန်းဖြေဖို့ သွား ဖြစ်ခဲ့ပါတယ်</a>။</p><p>နောက် တော့ ၂၀၂၄ ရောက်လာတော့ လည်း ကျွန်တော် ကျန်းမာရေး ကိစ္စတစ်ခု ကြောင့် ခရီးသွား တာ တွေ ခဏ ရပ်တန့်ခဲ့ရပါတယ် …</p><p>နောက် နေပြန်ကောင်းလာတော့မှ ခွင့်ရက်လည်း အဆင်ပြေတော့ ခရီး တစ်ခုသွားဖို့ အတွေးရှိ လာတယ်လေ.. အဲဒါနဲ့ ပြန်တွေးတော့ “ဪ… ငါ ထိုင်းတော့ မကြာခဏ ရောက်ဖူးတယ် … ဗီယက်နမ်လည်း အရင် က ရောက်ဖူးတယ်…ငါ မရောက်ဖူးသေးတဲ့နေရာ သွားမယ်.. ငါ မနှစ်က အိပ်မက် တွေ မက်မက်နေတဲ့ မနီလာ တော့ ငါရောက် အောင် သွားအုန်းမယ်၊ အိပ်မက်နဲ့ လက်တွေ့နဲ့ တူလား ကြည့်မယ် ” ဆိုပြီး မေလ ၁ရက် ကိုလေယာဉ် လက်မှတ် ၀ယ်ခဲ့ပါတော့တယ်…</p><h2 style="text-align: left;"><span style="font-size: x-large;"><b>အဆင်မပြေဖြစ်ရပြီ</b></span></h2><p>ခရီး မသွားခင် တစ်လ မှာတင် တည်းမဲ့ နေရာ တွေ ကို ကြိုတင် ဘိုကင် လုပ်ခဲ့ပါတယ်..ကျွန်တော်သွားမှာ က လေးညအိပ် ငါးရက် ခရီး.. Agoda ကနေ နေစရာရှာကြည့်ဖြစ်တယ်</p><p>ပထမ နှစ်ညတည်းမယ့်နေရာ ကို Manila Bay နား ရှာကြည့်ဖြစ်တယ်.. Shell Residences ဆိုတာတွေ့တော့ တော်တော် သဘောကျသွားတယ်..ရေကူးကန်တွေ အများကြီးနဲ့ compound ကြီး ကလည်း ကျယ်တယ်ပေါ့..အဲ့နေရာကို ပစိုင်း (Pasay) လို့ခေါ်ပါတယ်.. &nbsp;</p><div class="separator" style="clear: both; text-align: center;"><a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjgRZ7yZ3ZYAjTjEB-E52cj7QnJR4xe9SHkFNlvu9_iJTGbLMLohCh3E1xb5WL6DnPi8mx-J7AkYbd0FJ0id9mMJsesIUj-3duCza6C_PTVFcGpQKtg9v2n-mLW6tmDzuBoHILT3X8zttzQr_C_NnwAko0Rj_lkm1ES0NLcGJXHhlRrWpxRLZ2u1icPmmSH/s899/Shell-Amenity.png" style="clear: left; float: left; margin-bottom: 1em; margin-right: 1em;"><img border="0" data-original-height="504" data-original-width="899" height="329" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjgRZ7yZ3ZYAjTjEB-E52cj7QnJR4xe9SHkFNlvu9_iJTGbLMLohCh3E1xb5WL6DnPi8mx-J7AkYbd0FJ0id9mMJsesIUj-3duCza6C_PTVFcGpQKtg9v2n-mLW6tmDzuBoHILT3X8zttzQr_C_NnwAko0Rj_lkm1ES0NLcGJXHhlRrWpxRLZ2u1icPmmSH/w587-h329/Shell-Amenity.png" width="587" /></a></div><br /><p><br /></p><p><br /></p><p><br /></p><p><br /></p><p><b style="font-size: small;"><i><br /></i></b></p><p><b style="font-size: small;"><i><br /></i></b></p><p><b style="font-size: small;"><i><br /></i></b></p><p><b style="font-size: small;"><i><br /></i></b></p><p><b style="font-size: small;"><i><br /></i></b></p><p><b style="font-size: small;"><i><br /></i></b></p><p><b style="font-size: small;"><i>Pic: View of Shell Residences</i></b></p><p><b style="font-size: small;"><i><br /></i></b></p><p>နောက် ၂ည ကိုတော့ မကာတီ (Makati) လို့ခေါ်တဲ့ နေရာနားမှာ ဈေးခပ် ပေါပေါဟိုတယ်တစ်ခုပဲ ငှါးလိုက်တယ်။</p><p>ဖြစ်ချင်တော့ မနီလာသွား ခါနီး စနိုးစနှောင့် ဖြစ်စရာ ကြုံခဲ့ရတယ်၊ ခရီးသွားခါနီး တစ်ရက် နေမှ iPhone က Screen ကြောင်လာပြီး အစဉ်းကြောင်းတွေ ပေါ်လာတယ်.. နောက် မကြာဘူး Screen တစ်ခုလုံးပါ သုံးမရ ဖြစ်သွားလေရဲ့…</p><p>အဲဒါနဲ့ပဲ ခရီးသွားမဲ့ မနက်ကို ကမန်းကတန်း ဈေးနားက ဖုန်းဆိုင်မှာ အပေါစား realme တစ်လုံး အသစ်ကို ဈေးပေါပေါနဲ့ ဝယ်ပြီး ခရီးကို ထွက်ခဲ့ရတယ် ၊ အဲဒါကြောင့် နောက် ဆက်ရေးမယ့် စာပိုဒ်တွေမှာ ဓါတ်ပုံတွေ အရေး အသွေးမကောင်း ဖြစ်နေလိမ့်မယ်၊ ပျက်သွားတဲ့ ဖုန်း တော့ နောက် မှ ပြင် တာပေါ့နော်…</p><p>ဒီလိုနဲ့ လေဆိပ် ကို ရောက်ခဲ့တယ်.. ထပ်ဖြစ်ချင်တော့ လေယာဉ်ကလည်း ၃ နာရီ နောက်ကျသွားတယ်။ ဟိုရောက်တော့ ညတော်တော် မှောင်ပြီ..ဖုန်း ဆင်းမ်ကဒ် ဘာညာလုပ်ပြီး ခပ်သုတ်သုတ် ငှါးထားတဲ့ အိမ်ခန်းဆီ တက္ကစီစီးလိုက်တယ်..</p><div class="separator" style="clear: both; text-align: center;"><span style="clear: left; float: left; margin-bottom: 1em; margin-right: 1em;"><a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj_hIJxkOsX_boilvYVUmy2nroMDXcQGnFXMthdVm_h1HhSf6ZU0ywL1jK2m_BppLnNRPDw0oCrPcpMZ5yoEmROKMFN_w23BD9ed7vuBRXIbndUaWU6rsVfiM2xPQp25l0IvwFCjuAfi80-ywEagwy8aQUGDCBAd9_R5WZ3QUz6IFDoe_S5ln_3Jr0kYY8F/s726/the-tourist.jpg"><img border="0" data-original-height="726" data-original-width="531" height="385" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj_hIJxkOsX_boilvYVUmy2nroMDXcQGnFXMthdVm_h1HhSf6ZU0ywL1jK2m_BppLnNRPDw0oCrPcpMZ5yoEmROKMFN_w23BD9ed7vuBRXIbndUaWU6rsVfiM2xPQp25l0IvwFCjuAfi80-ywEagwy8aQUGDCBAd9_R5WZ3QUz6IFDoe_S5ln_3Jr0kYY8F/w281-h385/the-tourist.jpg" width="281" /></a>&nbsp;</span><span style="clear: left; float: left; margin-bottom: 1em; margin-right: 1em;"><i style="font-weight: bold;">Pic: Ask for an adventure and you shall receive</i></span></div><div class="separator" style="clear: both; text-align: center;"><br /></div><p>ရောက်တဲ့ အခါ ငှါးထားတဲ့ လူဆီက whatsapp ဖုန်းဆက်လာတယ်..နောက်ကျလို့တဲ့ ငှါးလို့မရ တော့ဘူးတဲ့.. အဲဒါနဲ့ luggage ရယ် လွယ်အိတ်ရယ် ထမ်းပြီး ဘယ်သူနဲ့ မှ မသိတဲ့ နေရာတစ်ခု မှာ ဘယ်မှ သွားတည်းစရာ မရှိ တဲ့လူတစ်ယောက် ဖြစ်သွားရတော့တယ်..</p><p>စိတ်ကညစ်လာတာနဲ့ ဘာလုပ်ရမှန်းမသိ အနီးအနားမှာ ရှာကြည့်တော့ ၁၂ လမ်းသွား လမ်းကြီးရဲ့ ဟိုဘက်မှာ ဟိုတယ် တစ်ခု ခပ်ရေးရေး တွေ့တာနဲ့ မထူးဘူး ဆိုပြီး လမ်းကို ဖြတ်ချလာတယ်..</p><p>ဈေးမေးတော့ walk-in ဆိုပြီး ဈေးကို ၂ဆ လောက်ပိုယူသွားတယ်.. မထူးတော့ဘူးလေဆိုပြီး ပင်ပန်းနေတာနဲ့ အခန်း မြန်မြန်ယူပြီး တစ်ညအတွက်တော့ နားဖို့ပြင်လိုက်တယ်…</p><p>&nbsp;ဒီလိုနဲ့ မနက်ကို စောစောနိုးလာခဲ့ပြီး ဟိုတယ် အောက်ကို ဆင်း မနက်စာ ဘူဖေး ကို ကျကျနန စားလိုက်တယ်.. နောက်တော့ ခဏ နား အစာချေပြီး ရေကူးဖို့ပြင်လိုက်တော့ ၁၀:၃၀ -၁၁ လောက်ရှိနေပြီ.. ဟိုတယ်အ ပြင်ကို ထွက်ကြည့်လိုက်တော့ “အား လား လား” ပူလိုက်တဲ့နေဆိုတာ.</p><p>ဟုတ်ပါတယ်၊ မနီလာရဲ့ အားနည်းချက်တစ်ခုက နေကပူ တဲ့ အပြင် အပူလှိုင်းပါ ဖြတ်တော့ လေပါပူနေတယ်.. ဒါပေမယ့် ရေတော့ မရရအောင် ကူးခဲ့ပါတယ်..</p><p>ရေကူးပြီး အဝတ်စားလဲ ဘာညာပြီး တော့ နေ့လည်စာ စားချိန် ဖြစ်နေပြီ၊ အဲဒါနဲ့ ခုမှ တကယ် စွန့်စားခန်းစတာပါ..ဟိုတယ်က ထွက်ပြီး ပင်လယ်ဘက်ကို တည့်တည့်ကြီးထွက်ချလိုက်တယ်.. SM Mall of Asia ကြီးကိုတွေ့တော့ ကြီးလိုက်တဲ့ Mall ကြီးပါလား ဆိုပြီး အံ့အားသင့်မိတယ်..&nbsp;</p><p><br /></p><p></p><div class="separator" style="clear: both; text-align: center;"><a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjh44XerdyMVlLGay6BEE9vNaOKXcmdXcH2X5FAorzYsGVYq5JuWS6pwNYBxuXDJVokbpyyd9juf6lHwOi7jGFJFQKNsrq1QDIQD9bjBfxnhSvPDfOME-NPznL_0giTOUk4CUMY5hu8kiPDw33c-nHSNP5Af8B0yyFyaLJqPqDkqOwCqNe0gTrnGAxD2j-y/s1920/sm-moa-rotunda.jpg" style="clear: left; float: left; margin-bottom: 1em; margin-right: 1em;"><img border="0" data-original-height="1080" data-original-width="1920" height="329" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjh44XerdyMVlLGay6BEE9vNaOKXcmdXcH2X5FAorzYsGVYq5JuWS6pwNYBxuXDJVokbpyyd9juf6lHwOi7jGFJFQKNsrq1QDIQD9bjBfxnhSvPDfOME-NPznL_0giTOUk4CUMY5hu8kiPDw33c-nHSNP5Af8B0yyFyaLJqPqDkqOwCqNe0gTrnGAxD2j-y/w584-h329/sm-moa-rotunda.jpg" width="584" /></a></div><br /><p></p><p><br /></p><p><br /></p><p><br /></p><p><br /></p><p><br /></p><p><b><i><br /></i></b></p><p><b><i><br /></i></b></p><p><b><i><br /></i></b></p><p><b><i><br /></i></b></p><p><b><i><br /></i></b></p><p><b><i>Pic: SM Mall of Asia Globe Rotunda</i></b></p><p><br /></p><p>အဲ့ထဲလျှောက်သွားရင်း အဲ့မှာပဲ ရာမန်တစ်ပွဲနဲ့ ဗိုက်ဖြည့်ခဲ့တယ်..ပြီးတာနဲ့ ဆက်ပြီး Google Map ကြည့် ပင်လယ်ဘက်ကို မျက်နှာ မူပြီး တည့်တည့်ထွက်လာတော့ ရောက်ချင်နေခဲ့တဲ့ နေရာကို နောက်ဆုံးတော့ ရောက်လာခဲ့ပြီလေ..&nbsp;</p><p>ပင်လယ်ကွေ့ က တော်တော်တော့လှတယ်၊ အနီးအနားမှာ ကုန်တင်ကုန်ချ သင်္ဘောတွေသာ မရှိရင် ပိုလှမယ်..SM Mall of Asia ရဲ့တည့်တည့်မှာ က Ferris Wheel ကြီးရှိတယ်၊ Mall of Asia Eye (MOA eye) လည်းခေါ်တာပေါ့၊အဲ့လိုနဲ့ ပင်လယ်ကွေ့ကြီးအတိုင်း ဖြေးဖြေးလျှောက်လာတော့ SMA နဲ့ ကပ်ရပ် business center ကြီးက ထီးထီးကြီးနဲ့ ထည်ထည်ဝါဝါကြီး ဖြစ်နေတယ်.. ရုံးသမားတွေလည်း အများကြီးပေါ့၊&nbsp;</p><div class="separator" style="clear: both; text-align: center;"><a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhX3_eqWU4XXXTTiWUBuPD2HGXLfHQoq260V28k4vm2axa3mnBnFGHGTgORlz31LDvEgh3y0KhQWhKpO14Z8DbbM1Hteib6lMBtEDzEV_uyb-e-rsSt75BkxXcRu-jolBv-fOSak6_tgkFNR0vB_wrsQDo3DJbENB14MAeFLsmaDifEuqeqejhDgjNVUDJY/s1318/manila-bay.jpg" style="clear: left; float: left; margin-bottom: 1em; margin-right: 1em;"><img border="0" data-original-height="1318" data-original-width="1063" height="492" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhX3_eqWU4XXXTTiWUBuPD2HGXLfHQoq260V28k4vm2axa3mnBnFGHGTgORlz31LDvEgh3y0KhQWhKpO14Z8DbbM1Hteib6lMBtEDzEV_uyb-e-rsSt75BkxXcRu-jolBv-fOSak6_tgkFNR0vB_wrsQDo3DJbENB14MAeFLsmaDifEuqeqejhDgjNVUDJY/w397-h492/manila-bay.jpg" width="397" /></a></div><p><br /></p><p><br /></p><p><br /></p><p><br /></p><p><br /></p><p><br /></p><p><br /></p><p><br /></p><p><b style="font-size: small;"><i><br /></i></b></p><p><b style="font-size: small;"><i><br /></i></b></p><p><b style="font-size: small;"><i><br /></i></b></p><p><b style="font-size: small;"><i><br /></i></b></p><p><b style="font-size: small;"><i><br /></i></b></p><p><b style="font-size: small;"><i><br /></i></b></p><p><b style="font-size: small;"><i><br /></i></b></p><p><b style="font-size: small;"><i>Pic: Manila Bay, it's similar to what I dreamt surprisingly</i></b></p><p><br /></p><p>ဆက်ပြီး လျှောက်လာတော့ ဖြေးဖြေးချင်း လူပြတ်လာတယ်၊ ကားတွေ နည်းလာပြီး ပင်လယ်ကြီးရယ် ကိုယ်ရယ်ပဲ ရှိတော့တယ်၊ အဲ့မှာစပြီး အမှိုက်တွေ တွေ့လာရတော့တယ်၊ ပြီးတော့ တဲအိုတဲဟောင်း ကြိုကြားကြိုကြားတွေ တွေ့လာရပြီး ဆင်းရဲမှု အရိပ်အယောင် တွေ တွေ့လာတယ်၊ တွေးနေတုန်းမှာပဲ တဲအိုတစ်ခုက လူငယ်တစ်ယောက် အင်္ကျီချွတ်နဲ့ ထွက်လာပြီး မပြော မဆို နဲ့ ကျွန်တော် လမ်းလျှောက်နေတဲ့ တံတားရဲ့ဘေး ကနေ &nbsp;အောက် ကို ခုန်ဆင်းသွားတော့တယ်၊ ဒီနေရာမှတော့ ရေတွေက နောက်ကျိနေပြီး မထိန်းသိမ်းထားမှန်းသိသာတယ်၊ ဟိုလူငယ်ကတော့ ကူးကောင်းနဲ့ ကူးနေလေရဲ့…</p><p>ဒီလိုနဲ့ နေရာတွေ အများကြီး ဖြတ်လာပြီး Philippines Navy စခန်းရယ်၊ဆက်လျှောက်လာတော့ US embassy ကြီးနားကို ရောက်လာခဲ့တယ်.. ဒီလိုနဲ့ လျှောက်လာလိုက်တာ <a href="https://en.wikipedia.org/wiki/Rizal_Park" target="_blank">Rizal ပန်းခြံ</a>&nbsp;ကို ရောက်ခဲ့တယ်၊ ဒီနေရာက</p><p>ရန်ကုန်က ပြည်သူ့ဥယာဉ်ကို အမှတ်ရမိစေတယ်..လွမ်းလွမ်းရှိတာနဲ့ &nbsp;Rizal ပန်းခြံမှာ ခဏ အနားယူ အရိပ်ခိုလိုက်တယ်..</p><div class="separator" style="clear: both; text-align: center;"><a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi_RHbUw6IoFmMpwW5PnvUaWYUMFrkv22qSE7yQeMf5NUJgixokK858AFrcyWM_vXGXiLradtQpHMzbmh738ffLnB4wBZ4A7JcKv8xsMO2xCEmRaIoO9W8Y17tg5jHuZB_3kLLg7bysnMwNhuqouM0khNJKsIdn6Q3GQIgxjuirvnEI8DD1uiy5Rcfa8VFx/s764/metromanila.jpg" style="clear: left; float: left; margin-bottom: 1em; margin-right: 1em;"><img border="0" data-original-height="489" data-original-width="764" height="373" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi_RHbUw6IoFmMpwW5PnvUaWYUMFrkv22qSE7yQeMf5NUJgixokK858AFrcyWM_vXGXiLradtQpHMzbmh738ffLnB4wBZ4A7JcKv8xsMO2xCEmRaIoO9W8Y17tg5jHuZB_3kLLg7bysnMwNhuqouM0khNJKsIdn6Q3GQIgxjuirvnEI8DD1uiy5Rcfa8VFx/w584-h373/metromanila.jpg" width="584" /></a></div><p></p><p><br /></p><p><br /></p><p><br /></p><p><br /></p><p><br /></p><p><br /></p><p><b style="font-size: small;"><i><br /></i></b></p><p><b style="font-size: small;"><i><br /></i></b></p><p><b style="font-size: small;"><i><br /></i></b></p><p><b style="font-size: small;"><i><br /></i></b></p><p><b style="font-size: small;"><i><br /></i></b></p><p><b style="font-size: small;"><i><br /></i></b></p><p><b style="font-size: small;"><i>Pic: Rizal Park, Manila</i></b></p><p><br /></p><p>Rizal ပန်းခြံနားမှာ မြင်းလှည်းသမား တွေရှိနေတယ်၊ ကျွန်တော့်ပုံကြည့်ပြီး နိုင်ငံခြားသားမှန်းသိတော့ ဒီနားမှာ Intramuros ဆိုတာရှိတဲ့ အကြောင်း မြင်းလှည်းနဲ့ လိုက်ပို့မယ် ဘယ်လောက်ပဲပေး ဘာညာ ဆွယ်နေပေမယ့် ငြင်းလွှတ်လိုက်ပြီး ကိုယ့်ဟာကိုယ် လမ်းဆက်လျှောက် ခဲ့တယ်၊ ဘာလုပ်ချင်လို့လဲဆိုတော့ သူတို့နိုင်ငံရဲ့&nbsp; public transportation ကိုသိချင်လို့..</p><p>Google map ခေါက်လိုက်တော့ <a href="https://en.wikipedia.org/wiki/United_Nations_station_(LRT)" target="_blank">အနီးဆုံး station က United Nations</a> လို့ခေါ်တယ်.. လမ်းလျှောက်ကောင်းလာရင်း ညနေလည်းစောင်းလာပြီဆိုတော့ ဟိုတယ်ကို ရထားနဲ့ ပြန်ဖို့ ဆုံးဖြတ်လိုက်တယ်…UN station ကနေ Pasay ကိုသွားမယ်ဆိုရင် EDSA station မှာ ဆင်းရမယ်၊ ၄-၅ မှတ်တိုင်ပဲ ဆိုတော့ ရထားလက်မှတ်ဝယ်လိုက်ပြီး သူတို့ရဲ့ public transport ကို စီးဖြစ်ခဲ့တော့တယ်။</p><br /><br /><p></p><div class="separator" style="clear: both; text-align: center;"><a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjL3XKZyWLPULSs2egVHFWsoSlL4mmzkSk1wWwdmIBQkJCe3HwhJnxHhGy6JQIX-J3dkpQVSEV5UzBhb7jJm1-36Jr_7KFAWqdExrl71jCaxGWlZQt8pirQSinXRKpvCsbuND1a2k1R3LwmPnTCAZ-VcbfExP0qCd-gC06AuQVGM2kPcoeoqNAuAf4QsNkx/s1028/my-first-day-route.jpg" style="clear: left; float: left; margin-bottom: 1em; margin-right: 1em;"><img border="0" data-original-height="749" data-original-width="1028" height="456" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjL3XKZyWLPULSs2egVHFWsoSlL4mmzkSk1wWwdmIBQkJCe3HwhJnxHhGy6JQIX-J3dkpQVSEV5UzBhb7jJm1-36Jr_7KFAWqdExrl71jCaxGWlZQt8pirQSinXRKpvCsbuND1a2k1R3LwmPnTCAZ-VcbfExP0qCd-gC06AuQVGM2kPcoeoqNAuAf4QsNkx/w628-h456/my-first-day-route.jpg" width="628" /></a></div><br /><p></p><p><br />&nbsp;</p><p><br /></p><p><br /></p><p><br /></p><p></p><br /><p></p><p><br /></p><p><br /></p><p><br /></p><p><br /></p><p><br /></p><p><br /></p><p><br /></p><p><br /></p><p>EDSA station ကဆင်းလာပြီး နောက် မိနစ် ၄၀ လောက် ဟိုတယ်ဘက်ကို ပြန် လျှောက်လာရင်း ဗိုက်ဆာတာနဲ့ <br />လမ်းဘေးစာ တွေစားဖြစ်တယ်၊ ဒီမှာ လမ်းဘေးစာတော့ တော်တော် ပေါတာ.. ဒီလိုနဲ့ ဟိုဟာသုံးဒီဟာသုံးနဲ့ အကြွေစေ့တွေ များလာပြီး သယ်ရလေးလာတယ်..</p><p>ဟိုတယ်နားရောက်ခါနီးမှာ သူတောင်းစားကြီး တစ်ယောက် တွေ့တာနဲ့ အကြွေစေ့တွေ အကုန် လှူချလိုက်တော့တယ်..နောက်တော့ ဟိုတယ် မှာ ခဏနားပြီး ညဘက်ဗိုက်ဆာလာတော့ &nbsp;MOA eye ဘက်ကို နောက်တစ်ခေါက်လျှောက်လာပြန်တယ်၊ ညဘက်တော့ ဒီဘက်မှာ တော်တော်&nbsp; စည်ကားနေတယ်…</p><p>ဘားတွေ တော်တော်များများ က American style တွေ၊ ဝင်သွားတာနဲ့ ၇၀ခုနှစ် မဟုတ်ရင် ၈၀ ခုနှစ်က အမေရိကန် ဂီတအဖွဲ့တွေရဲ့ ပုံတွေ ချိတ်ထားတယ်.. လာထိုင်ကြတာလည်း ကြည့်တော့ သူတို့ လူမျိုးနည်းပြီး နိုင်ငံခြားသား ပဲများနေတယ်… နားယဉ်နေတဲ့ စလုံးသံ တချို့လည်းကြားနေရတယ်.. အဲ့ဘားမှာ&nbsp; အီကာ ဒို (Igado) လို့ခေါ်တဲ့ အသည်းနဲ့ အသား ရော ချက်ထားတာ တစ်ပွဲမှာ စားလိုက်တော့တယ်…</p><p>ဒီလိုနဲ့ စားသောက်ပြီး တော့ ပင်လယ် ဘက်ထွက်လာတော့ တော်တော်စည်နေတယ်.. ဒီနေရာမှာ ဒေသခံ ဖိလစ်ပင်း တွေ ပိုပြီး စုဝေးကြတယ်… ဒီမှာ တစ်ခုပြောစရာရှိတာ က ဖိလစ်ပင်းက ကက်သလစ် နိုင်ငံဖြစ်ပေမယ့် LGBT တွေ လည်း အမြောက်အများ တွေ့ခဲ့ရတယ်. <a href="https://time.com/6184345/lgbt-philippines-catholic-church-pride/" target="_blank">ဒီ article</a> မှာ ဆက် ဖတ်နိုင်ပါတယ်.&nbsp;</p><p>စားသောက်ပြီးတဲ့နောက်မှာတော့ ဟိုတယ်ပြန် အိပ်ခဲ့တယ်၊&nbsp;</p><h2 style="text-align: left;"><b><span style="font-size: x-large;">ဟိုတယ် ပြောင်းပြီ</span></b></h2><p>နောက်မနက်နိုးတော့ ကမန်းကတန်း သိမ်းစရာ ရှိတာ သိမ်း ၊ ဟိုတယ် checkout လုပ်ပြီး ဟိုဘက်ကို ကားငှါးလိုက်တယ်..&nbsp;</p><p>ကားသမား က ဖိလစ်ပင်ရဲ့ transportation အကြောင်းရှင်းပြတယ်.. သူတို့နိုင်ငံရဲ့ ဈေး အပေါဆုံး အငှား ယာဉ်က ဂျီပနီ (Jeepney) လို့ခေါ်တယ်တဲ့.. Jeepney ရဲ့ ပုံစံကို ကြည့်တော့ ရှေးခေတ် ဒုတိယကမ္ဘာ စစ် ခေတ် က ကားပုံဖြစ်နေတယ်.. မြန်မာ အမြင်နဲ့ ကြည့်ရင်တော့ ၃၉ ဗိုက်ပူ ပေါ့… ဒါပေမယ့် ဒီကားတွေက မဟောင်းနေဘူး.. သူ့ဟာသူ တောက်တောက်ပြောင်ပြောင် maintenance လုပ်ထားပြီး sticker တွေဘာတွေပါ ကပ်ထားကြတယ်..&nbsp;</p><div class="separator" style="clear: both; text-align: center;"><a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjr0mN467anlEE-vNVT-BRKMlC13I8q2DhzvrTPOqC7Kt3evERlau_cFmFPTaB_cG3pt6RzBe908yJrYwwYMI_cQuTb9B_aGTZWwZDPO32NOs3MgMfvpeYtBug3NZ01Be_sKnzd3jHLPVLwzC_JbSP2bBQHr0aHuzz4LflUubwxe4fXvik2KygCWYzbamZc/s697/jeepneys.jpg" style="clear: left; float: left; margin-bottom: 1em; margin-right: 1em;"><img border="0" data-original-height="440" data-original-width="697" height="374" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjr0mN467anlEE-vNVT-BRKMlC13I8q2DhzvrTPOqC7Kt3evERlau_cFmFPTaB_cG3pt6RzBe908yJrYwwYMI_cQuTb9B_aGTZWwZDPO32NOs3MgMfvpeYtBug3NZ01Be_sKnzd3jHLPVLwzC_JbSP2bBQHr0aHuzz4LflUubwxe4fXvik2KygCWYzbamZc/w553-h374/jeepneys.jpg" width="553" /></a></div><br /><p><br /></p><p><br /></p><p><br /></p><p><br /></p><p><br /></p><p><br /></p><p><br /></p><p><br /></p><p><br /></p><p><br /></p><p><br /></p><p><b><i>Pic: Are they really Mercedes Benz?</i></b></p><p><br /></p><p>နောက်တော့ Jeepney အပြင် ဆိုဒ်တွဲ (pedicab) လေးတွေလည်းရှိတယ်.. ကားသမား ရှင်းပြတာက..<br />အရင်ကတော့&nbsp; &nbsp;ဓာတ်ဆီ နဲ့ ဆိုက်ကယ် ဆွဲ&nbsp; ကျရာကနေ ခုနောက်ပိုင်းတော့ ဆီဖိုးသက်သာအောင်..လျှပ်စစ်ကို အသုံးချပြီး battery တွေကို ညဆို ဖြည့်ပြီးတော့ electric bike နဲ့ ဟိုနားဒီနားလိုက်ပို့ အခကျေးငွေယူကြတာပဲ.. <br />မြန်မာနဲ့ကြည့်ရင်တော့ ဆိုက်ကား ပဲပေါ့.. ဒါပေမယ့် နင်းစရာမလိုဘူးလေ..&nbsp;</p><p>နောက်ထပ်ပြီး သူက မတ်ထရို မနီလာရဲ့ မြို့တွေ အကြောင်း ရှင်းပြ တယ်၊ မနီလာ ထဲမှာ တင် မြို့ ၁၆ခု ရှိတဲ့ အကြောင်း ဘာညာပေါ့ ၊ business hub တွေ ဖြစ်တဲ့ &nbsp;ပစိုင်း ၊ မကာတီ ၊ အော်တီဂါ (Ortigas) ၊ ဘိုနီဖာဆရို (အတိုကောက် ဘီဂျီစီ) (Bonifacio Global City) ပြီးတော့ သူကိုယ်တိုင်တောင် မသိတဲ့ တခြား စီးပွါးရေး ဇုံတွေပါ ရှိကြောင်း ပေါ့၊ နောက်တော့ ခုသွားနေတဲ့ လမ်းမကြီး အဒ်စာ EDSA ( အရှည်Epifanio de Los Santos Avenue ) ရဲ့ ဒီ ဇုံတွေ ကို ဆက် သွယ်ထား ပုံ တွေ ကို ရှင်းပြတယ်၊&nbsp;</p><p></p>အဲတော့မှ ကျွန်တော် ရောက်စ ညက ဖြတ်ချလာတဲ့ ၁၂ လမ်းသွား လမ်းမကြီး က EDSA မှန်း သိခဲ့ရတယ်။<p></p><div class="separator" style="clear: both; text-align: center;"><a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiX7HJp04089s76PFeihvRv_IxN98d0c3THVRsBzc_1hs_LNnpe6tiPyXTtWONy_VqfIypavgE2AMgWVZHwNGlnhHgP8hqHdtbOdQ0BWKymioa66kO8bQByjM8UGV72ST4zh-qXDyVypF9jrBbtM2vTHSqUOqoLr5LgJ8p4-7gMfcOeo8qk3JzrTjNyJJ09/s610/edsa.jpg" style="clear: left; float: left; margin-bottom: 1em; margin-right: 1em;"><img border="0" data-original-height="337" data-original-width="610" height="322" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiX7HJp04089s76PFeihvRv_IxN98d0c3THVRsBzc_1hs_LNnpe6tiPyXTtWONy_VqfIypavgE2AMgWVZHwNGlnhHgP8hqHdtbOdQ0BWKymioa66kO8bQByjM8UGV72ST4zh-qXDyVypF9jrBbtM2vTHSqUOqoLr5LgJ8p4-7gMfcOeo8qk3JzrTjNyJJ09/w582-h322/edsa.jpg" width="582" /></a></div><br /><p><br /></p><p><br /></p><p><b><i><br /></i></b></p><p><b><i><br /></i></b></p><p><b><i><br /></i></b></p><p><b><i><br /></i></b></p><p><b><i><br /></i></b></p><p><b><i><br /></i></b></p><p><b><i><br /></i></b></p><p><b><i>Pic: EDSA during 1986 People Power Revolution</i></b></p><p><br /></p><p>စကားဖေါင်ဖွဲ့ရင်း နောက် ဟိုတယ်ကို ရောက်လာတယ်..ဒီဟိုတယ်ကတော့ ဂျောင်ကျပြီး ကြယ်နှစ်ပွင့်လောက် ပဲရှိမယ် ထင်တယ်.. ရပ်ကွက်ထဲမှာ ဖွင့်ထားတာမျိုးဖြစ်နေတယ်.. check in လုပ်ပြီး နားလိုက်တယ်ခဏ…</p><p>နားရင်း ဘယ်နေရာတွေ ဘယ်လိုလည်ရင် ကောင်းမလဲဆိုပြီး ခေါင်းထဲမှာ အကြံဆွဲနေမိတယ်..</p><p><br /></p><h3 style="text-align: left;">ဆက်ရန်...&nbsp;</h3>`,author:{id:"17827604690472162137",displayName:"Kevin Moe Myint Myat",url:"https://www.blogger.com/profile/17827604690472162137",image:{url:"//1.bp.blogspot.com/-tWz6Nv-7axE/ZxDB4KLiNvI/AAAAAAAAAh0/QERnGiTgB0gvb7R75uu_DWOCwToSNHL3QCK4BGAYYCw/s35/me-bali.jpg"}},replies:{totalItems:"0",selfLink:"https://www.googleapis.com/blogger/v3/blogs/6655808940462000438/posts/3975425417229776902/comments"},labels:["manila","manila memories","part-1","part-one","travel"],etag:'"dGltZXN0YW1wOiAxNzI5OTY1OTY0MzExCm9mZnNldDogMjg4MDAwMDAK"'}];const A=e=>(St("data-v-d1431fce"),e=e(),zt(),e),Np={class:"h-screen w-screen mt-5"},Lp={key:0,class:"title"},qp={key:1,class:"gallery-card w-full"},Vp={class:"tooltip title"},Gp={key:0,class:"tooltiptext"},$p=A(()=>d("br",null,null,-1)),Zp={class:"tooltip description"},Jp={key:0,class:"tooltiptext"},Xp={class:"gallery-card-footer"},Wp={class:"date"},Up=A(()=>d("b",null,"Category",-1)),Kp={class:"gallery-card-tag"},Yp=A(()=>d("b",null,", Language",-1)),Qp={class:"gallery-card-tag"},ed=A(()=>d("span",{class:"read-more"}," ...Read more ",-1)),td=A(()=>d("div",{class:"title"},"Published Blogs",-1)),ad={class:"gallery-card"},nd={class:"tooltip title"},id={key:0,class:"tooltiptext"},od=A(()=>d("br",null,null,-1)),rd={class:"tooltip description"},sd={key:0,class:"tooltiptext"},ld={class:"gallery-card-footer"},hd={class:"date"},pd=A(()=>d("b",null,"Category",-1)),dd={class:"gallery-card-tag"},cd=A(()=>d("b",null,", Language",-1)),md={class:"gallery-card-tag"},gd=A(()=>d("span",{class:"read-more"}," ...Read more ",-1)),ud={__name:"Blog",setup(e){xt({title:"Blogs and Articles by Kevin Moe Myint Myat",link:[{rel:"icon",type:"image/png",href:"https://kevinmoemyintmyat.github.io/favicon.png"}],meta:[{name:"description",content:`Kevin Moe Myint Myat is a software developer and an art hobbyist based in Singapore. He is also a full-time cat dad to JieMao (https://www.instagram.com/jiemao_theblackcattt).
            He spends most of his time working as a software engineer at DT One (https://www.dtone.com) and when he's on his annual leave, he pursues his passion "Travelling" and explore the world. He wrote his travel blogs on this
            personal website to share his vacation experiences with his audiences.`},{name:"keywords",content:"Kevin Moe Myint Myat,kevinmoemyintmyat,kevinmoemyintmyat.github.io,blog, stories, software developer, artist, cat dad,fullstack,software,kevin,moe,myint,myat,kevn,Kevn Moe Myint Myat,KevinMoeMyintMyat, Kevin Moe Myint Myat, Github, art, travel blogs, articles"},{property:"og:title",content:"Kevin Moe Myint Myat - a cat dad, a developer & an artist"},{property:"og:type",content:"profile"},{property:"og:url",content:"https://kevinmoemyintmyat.github.io/blog"},{property:"og:site:name",content:"Kevin Moe Myint Myat - a cat dad, a developer & an artist"},{property:"og:description",content:"Kevin Moe Myint Myat - a cat dad, a developer & an artist"},{name:"twitter:site",content:"https://kevinmoemyintmyat.github.io"},{name:"twitter:description",content:"Kevin Moe Myint Myat - a cat dad, a developer & an artist"}]});const t=At({latestBlog:{},blogs:Pt}),a=Ft(()=>{const r=[];let l=[];const h=Dp(t.blogs,"date","desc");let m=[];return h.length%2===0?m=h.concat({isHidden:!0,date:new Date}):m=h,t.latestBlog=m.shift(),t.latestBlog={...t.latestBlog,date:Ie(t.latestBlog.date,"do MMMM yyyy")},m.forEach((g,p)=>{(l==null?void 0:l.length)<=2&&l.push({...g,date:Ie(g.date,"do MMMM yyyy")}),l.length===2?(r.push(l),l=[]):p===h.length-1&&(r.push(l),l=[])}),r});Mt(()=>{n(),o()});function n(){t.blogs=t.blogs.concat(Bp.map(r=>({...r,date:new Date(r.published_at),route:`/blog/${r.slug}`,language:"English",type:"dev"})))}function o(){t.blogs=t.blogs.concat(Hp.map(r=>{const l=document.createElement("div");l.innerHTML=r.content;const h=l.textContent.slice(0,80);return{...r,description:h,date:new Date(r.published),route:`/blog/${r.id}`,language:"English",type:"travel"}}))}function i(r){return(r==null?void 0:r.length)>55?`${r.slice(0,55)}...`:r}function s(r){return r.language==="English"?{path:r.route,params:{slug:r.slug||r.id}}:{path:r.route}}return(r,l)=>{const h=Ct;return w(),k("div",Np,[d("div",null,[b(t).latestBlog.title?(w(),k("div",Lp,"Latest Blog")):C("",!0),b(t).latestBlog.title?(w(),k("div",qp,[jt(h,{to:s(b(t).latestBlog)},{default:be(()=>{var m,g,p,f,u,y;return[d("p",null,[d("span",Vp,[I('"'+v(i(b(t).latestBlog.title))+'" ',1),((g=(m=b(t).latestBlog)==null?void 0:m.title)==null?void 0:g.length)>55?(w(),k("span",Gp,v((p=b(t).latestBlog)==null?void 0:p.title),1)):C("",!0)]),$p,d("span",Zp,[I(v(i(b(t).latestBlog.description))+" ",1),((u=(f=b(t).latestBlog)==null?void 0:f.description)==null?void 0:u.length)>55?(w(),k("span",Jp,v((y=b(t).latestBlog)==null?void 0:y.description),1)):C("",!0)])]),d("div",Xp,[d("span",Wp,[I(" Written on "+v(b(t).latestBlog.date)+", ",1),Up,I(": "),d("b",Kp,v(b(t).latestBlog.category),1),Yp,I(": "),d("b",Qp,v(b(t).latestBlog.language),1)]),ed])]}),_:1},8,["to"])])):C("",!0),td,(w(!0),k(we,null,ke(b(a),(m,g)=>(w(),k("div",{key:g,class:"flex flex-col lg:flex-row justify-center items-center"},[(w(!0),k(we,null,ke(m,p=>(w(),k("div",{key:p.title,class:"w-full"},[p.isHidden?C("",!0):(w(),Tt(h,{key:0,to:s(p)},{default:be(()=>{var f,u;return[d("div",ad,[d("p",null,[d("span",nd,[I('"'+v(i(p.title))+'" ',1),((f=p==null?void 0:p.title)==null?void 0:f.length)>55?(w(),k("span",id,v(p==null?void 0:p.title),1)):C("",!0)]),od,d("span",rd,[I(v(i(p.description))+" ",1),((u=p==null?void 0:p.description)==null?void 0:u.length)>55?(w(),k("span",sd,v(p==null?void 0:p.description),1)):C("",!0)])]),d("div",ld,[d("span",hd,[I(" Written on "+v(p.date)+", ",1),pd,I(": "),d("b",dd,v(p.category),1),cd,I(": "),d("b",md,v(p.language),1)]),gd])])]}),_:2},1032,["to"]))]))),128))]))),128))])])}}},vd=_t(ud,[["__scopeId","data-v-d1431fce"]]);export{vd as default};