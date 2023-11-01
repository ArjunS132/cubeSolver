var Wa=(n,t)=>()=>(t||n((t={exports:{}}).exports,t),t.exports);var Op=Wa(Yt=>{(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const lo="157",wi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Ui={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Ha=0,yo=1,Va=2,na=1,Xa=2,Ye=3,hi=0,ve=1,xe=2,ai=0,$i=1,Ao=2,To=3,Ro=4,qa=5,qi=100,Ya=101,ja=102,wo=103,Uo=104,Ka=200,Za=201,$a=202,Ja=203,sa=204,oa=205,Qa=206,tl=207,el=208,il=209,nl=210,sl=0,ol=1,rl=2,Js=3,al=4,ll=5,cl=6,hl=7,ra=0,ul=1,fl=2,li=0,dl=1,pl=2,ml=3,_l=4,gl=5,aa=300,ln=301,cn=302,Qs=303,to=304,us=306,eo=1e3,ke=1001,io=1002,ge=1003,Co=1004,Ms=1005,Re=1006,xl=1007,yn=1008,ci=1009,vl=1010,bl=1011,co=1012,la=1013,oi=1014,ri=1015,An=1016,ca=1017,ha=1018,bi=1020,Ml=1021,De=1023,Sl=1024,El=1025,Mi=1026,hn=1027,yl=1028,ua=1029,Al=1030,fa=1031,da=1033,Ss=33776,Es=33777,ys=33778,As=33779,Lo=35840,Po=35841,ko=35842,Do=35843,Tl=36196,Io=37492,Fo=37496,Oo=37808,No=37809,Bo=37810,Go=37811,zo=37812,Wo=37813,Ho=37814,Vo=37815,Xo=37816,qo=37817,Yo=37818,jo=37819,Ko=37820,Zo=37821,Ts=36492,$o=36494,Jo=36495,Rl=36283,Qo=36284,tr=36285,er=36286,pa=3e3,Si=3001,wl=3200,Ul=3201,Cl=0,Ll=1,Ce="",le="srgb",$e="srgb-linear",ho="display-p3",fs="display-p3-linear",os="linear",qt="srgb",rs="rec709",as="p3",Rs=7680,Pl=519,kl=512,Dl=513,Il=514,Fl=515,Ol=516,Nl=517,Bl=518,Gl=519,ir=35044,nr="300 es",no=1035,Ke=2e3,ls=2001;class Ti{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const o=s.indexOf(e);o!==-1&&s.splice(o,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let o=0,r=s.length;o<r;o++)s[o].call(this,t);t.target=null}}}const he=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let sr=1234567;const Ji=Math.PI/180,Tn=180/Math.PI;function fn(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(he[n&255]+he[n>>8&255]+he[n>>16&255]+he[n>>24&255]+"-"+he[t&255]+he[t>>8&255]+"-"+he[t>>16&15|64]+he[t>>24&255]+"-"+he[e&63|128]+he[e>>8&255]+"-"+he[e>>16&255]+he[e>>24&255]+he[i&255]+he[i>>8&255]+he[i>>16&255]+he[i>>24&255]).toLowerCase()}function fe(n,t,e){return Math.max(t,Math.min(e,n))}function uo(n,t){return(n%t+t)%t}function zl(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function Wl(n,t,e){return n!==t?(e-n)/(t-n):0}function Sn(n,t,e){return(1-e)*n+e*t}function Hl(n,t,e,i){return Sn(n,t,1-Math.exp(-e*i))}function Vl(n,t=1){return t-Math.abs(uo(n,t*2)-t)}function Xl(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function ql(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function Yl(n,t){return n+Math.floor(Math.random()*(t-n+1))}function jl(n,t){return n+Math.random()*(t-n)}function Kl(n){return n*(.5-Math.random())}function Zl(n){n!==void 0&&(sr=n);let t=sr+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function $l(n){return n*Ji}function Jl(n){return n*Tn}function so(n){return(n&n-1)===0&&n!==0}function Ql(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function cs(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function tc(n,t,e,i,s){const o=Math.cos,r=Math.sin,a=o(e/2),l=r(e/2),h=o((t+i)/2),c=r((t+i)/2),d=o((t-i)/2),f=r((t-i)/2),m=o((i-t)/2),_=r((i-t)/2);switch(s){case"XYX":n.set(a*c,l*d,l*f,a*h);break;case"YZY":n.set(l*f,a*c,l*d,a*h);break;case"ZXZ":n.set(l*d,l*f,a*c,a*h);break;case"XZX":n.set(a*c,l*_,l*m,a*h);break;case"YXY":n.set(l*m,a*c,l*_,a*h);break;case"ZYZ":n.set(l*_,l*m,a*c,a*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Yi(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function me(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const ec={DEG2RAD:Ji,RAD2DEG:Tn,generateUUID:fn,clamp:fe,euclideanModulo:uo,mapLinear:zl,inverseLerp:Wl,lerp:Sn,damp:Hl,pingpong:Vl,smoothstep:Xl,smootherstep:ql,randInt:Yl,randFloat:jl,randFloatSpread:Kl,seededRandom:Zl,degToRad:$l,radToDeg:Jl,isPowerOfTwo:so,ceilPowerOfTwo:Ql,floorPowerOfTwo:cs,setQuaternionFromProperEuler:tc,normalize:me,denormalize:Yi};class Ot{constructor(t=0,e=0){Ot.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(fe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),o=this.x-t.x,r=this.y-t.y;return this.x=o*i-r*s+t.x,this.y=o*s+r*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ft{constructor(t,e,i,s,o,r,a,l,h){Ft.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,o,r,a,l,h)}set(t,e,i,s,o,r,a,l,h){const c=this.elements;return c[0]=t,c[1]=s,c[2]=a,c[3]=e,c[4]=o,c[5]=l,c[6]=i,c[7]=r,c[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,o=this.elements,r=i[0],a=i[3],l=i[6],h=i[1],c=i[4],d=i[7],f=i[2],m=i[5],_=i[8],x=s[0],p=s[3],u=s[6],A=s[1],v=s[4],E=s[7],y=s[2],C=s[5],w=s[8];return o[0]=r*x+a*A+l*y,o[3]=r*p+a*v+l*C,o[6]=r*u+a*E+l*w,o[1]=h*x+c*A+d*y,o[4]=h*p+c*v+d*C,o[7]=h*u+c*E+d*w,o[2]=f*x+m*A+_*y,o[5]=f*p+m*v+_*C,o[8]=f*u+m*E+_*w,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],o=t[3],r=t[4],a=t[5],l=t[6],h=t[7],c=t[8];return e*r*c-e*a*h-i*o*c+i*a*l+s*o*h-s*r*l}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],o=t[3],r=t[4],a=t[5],l=t[6],h=t[7],c=t[8],d=c*r-a*h,f=a*l-c*o,m=h*o-r*l,_=e*d+i*f+s*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/_;return t[0]=d*x,t[1]=(s*h-c*i)*x,t[2]=(a*i-s*r)*x,t[3]=f*x,t[4]=(c*e-s*l)*x,t[5]=(s*o-a*e)*x,t[6]=m*x,t[7]=(i*l-h*e)*x,t[8]=(r*e-i*o)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,o,r,a){const l=Math.cos(o),h=Math.sin(o);return this.set(i*l,i*h,-i*(l*r+h*a)+r+t,-s*h,s*l,-s*(-h*r+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(ws.makeScale(t,e)),this}rotate(t){return this.premultiply(ws.makeRotation(-t)),this}translate(t,e){return this.premultiply(ws.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ws=new Ft;function ma(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function hs(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function ic(){const n=hs("canvas");return n.style.display="block",n}const or={};function En(n){n in or||(or[n]=!0,console.warn(n))}const rr=new Ft().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),ar=new Ft().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Pn={[$e]:{transfer:os,primaries:rs,toReference:n=>n,fromReference:n=>n},[le]:{transfer:qt,primaries:rs,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[fs]:{transfer:os,primaries:as,toReference:n=>n.applyMatrix3(ar),fromReference:n=>n.applyMatrix3(rr)},[ho]:{transfer:qt,primaries:as,toReference:n=>n.convertSRGBToLinear().applyMatrix3(ar),fromReference:n=>n.applyMatrix3(rr).convertLinearToSRGB()}},nc=new Set([$e,fs]),Wt={enabled:!0,_workingColorSpace:$e,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(n){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!n},get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!nc.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,t,e){if(this.enabled===!1||t===e||!t||!e)return n;const i=Pn[t].toReference,s=Pn[e].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,t){return this.convert(n,this._workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this._workingColorSpace)},getPrimaries:function(n){return Pn[n].primaries},getTransfer:function(n){return n===Ce?os:Pn[n].transfer}};function Qi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Us(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Ci;class _a{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ci===void 0&&(Ci=hs("canvas")),Ci.width=t.width,Ci.height=t.height;const i=Ci.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Ci}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=hs("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),o=s.data;for(let r=0;r<o.length;r++)o[r]=Qi(o[r]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Qi(e[i]/255)*255):e[i]=Qi(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let sc=0;class ga{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:sc++}),this.uuid=fn(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let o;if(Array.isArray(s)){o=[];for(let r=0,a=s.length;r<a;r++)s[r].isDataTexture?o.push(Cs(s[r].image)):o.push(Cs(s[r]))}else o=Cs(s);i.url=o}return e||(t.images[this.uuid]=i),i}}function Cs(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?_a.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let oc=0;class ye extends Ti{constructor(t=ye.DEFAULT_IMAGE,e=ye.DEFAULT_MAPPING,i=ke,s=ke,o=Re,r=yn,a=De,l=ci,h=ye.DEFAULT_ANISOTROPY,c=Ce){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:oc++}),this.uuid=fn(),this.name="",this.source=new ga(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=o,this.minFilter=r,this.anisotropy=h,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ot(0,0),this.repeat=new Ot(1,1),this.center=new Ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof c=="string"?this.colorSpace=c:(En("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=c===Si?le:Ce),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==aa)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case eo:t.x=t.x-Math.floor(t.x);break;case ke:t.x=t.x<0?0:1;break;case io:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case eo:t.y=t.y-Math.floor(t.y);break;case ke:t.y=t.y<0?0:1;break;case io:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return En("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===le?Si:pa}set encoding(t){En("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Si?le:Ce}}ye.DEFAULT_IMAGE=null;ye.DEFAULT_MAPPING=aa;ye.DEFAULT_ANISOTROPY=1;class ce{constructor(t=0,e=0,i=0,s=1){ce.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,o=this.w,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s+r[12]*o,this.y=r[1]*e+r[5]*i+r[9]*s+r[13]*o,this.z=r[2]*e+r[6]*i+r[10]*s+r[14]*o,this.w=r[3]*e+r[7]*i+r[11]*s+r[15]*o,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,o;const l=t.elements,h=l[0],c=l[4],d=l[8],f=l[1],m=l[5],_=l[9],x=l[2],p=l[6],u=l[10];if(Math.abs(c-f)<.01&&Math.abs(d-x)<.01&&Math.abs(_-p)<.01){if(Math.abs(c+f)<.1&&Math.abs(d+x)<.1&&Math.abs(_+p)<.1&&Math.abs(h+m+u-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(h+1)/2,E=(m+1)/2,y=(u+1)/2,C=(c+f)/4,w=(d+x)/4,W=(_+p)/4;return v>E&&v>y?v<.01?(i=0,s=.707106781,o=.707106781):(i=Math.sqrt(v),s=C/i,o=w/i):E>y?E<.01?(i=.707106781,s=0,o=.707106781):(s=Math.sqrt(E),i=C/s,o=W/s):y<.01?(i=.707106781,s=.707106781,o=0):(o=Math.sqrt(y),i=w/o,s=W/o),this.set(i,s,o,e),this}let A=Math.sqrt((p-_)*(p-_)+(d-x)*(d-x)+(f-c)*(f-c));return Math.abs(A)<.001&&(A=1),this.x=(p-_)/A,this.y=(d-x)/A,this.z=(f-c)/A,this.w=Math.acos((h+m+u-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class rc extends Ti{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ce(0,0,t,e),this.scissorTest=!1,this.viewport=new ce(0,0,t,e);const s={width:t,height:e,depth:1};i.encoding!==void 0&&(En("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Si?le:Ce),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Re,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new ye(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(t,e,i=1){(this.width!==t||this.height!==e||this.depth!==i)&&(this.width=t,this.height=e,this.depth=i,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new ga(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ei extends rc{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class xa extends ye{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=ge,this.minFilter=ge,this.wrapR=ke,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ac extends ye{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=ge,this.minFilter=ge,this.wrapR=ke,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class yi{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,o,r,a){let l=i[s+0],h=i[s+1],c=i[s+2],d=i[s+3];const f=o[r+0],m=o[r+1],_=o[r+2],x=o[r+3];if(a===0){t[e+0]=l,t[e+1]=h,t[e+2]=c,t[e+3]=d;return}if(a===1){t[e+0]=f,t[e+1]=m,t[e+2]=_,t[e+3]=x;return}if(d!==x||l!==f||h!==m||c!==_){let p=1-a;const u=l*f+h*m+c*_+d*x,A=u>=0?1:-1,v=1-u*u;if(v>Number.EPSILON){const y=Math.sqrt(v),C=Math.atan2(y,u*A);p=Math.sin(p*C)/y,a=Math.sin(a*C)/y}const E=a*A;if(l=l*p+f*E,h=h*p+m*E,c=c*p+_*E,d=d*p+x*E,p===1-a){const y=1/Math.sqrt(l*l+h*h+c*c+d*d);l*=y,h*=y,c*=y,d*=y}}t[e]=l,t[e+1]=h,t[e+2]=c,t[e+3]=d}static multiplyQuaternionsFlat(t,e,i,s,o,r){const a=i[s],l=i[s+1],h=i[s+2],c=i[s+3],d=o[r],f=o[r+1],m=o[r+2],_=o[r+3];return t[e]=a*_+c*d+l*m-h*f,t[e+1]=l*_+c*f+h*d-a*m,t[e+2]=h*_+c*m+a*f-l*d,t[e+3]=c*_-a*d-l*f-h*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e){const i=t._x,s=t._y,o=t._z,r=t._order,a=Math.cos,l=Math.sin,h=a(i/2),c=a(s/2),d=a(o/2),f=l(i/2),m=l(s/2),_=l(o/2);switch(r){case"XYZ":this._x=f*c*d+h*m*_,this._y=h*m*d-f*c*_,this._z=h*c*_+f*m*d,this._w=h*c*d-f*m*_;break;case"YXZ":this._x=f*c*d+h*m*_,this._y=h*m*d-f*c*_,this._z=h*c*_-f*m*d,this._w=h*c*d+f*m*_;break;case"ZXY":this._x=f*c*d-h*m*_,this._y=h*m*d+f*c*_,this._z=h*c*_+f*m*d,this._w=h*c*d-f*m*_;break;case"ZYX":this._x=f*c*d-h*m*_,this._y=h*m*d+f*c*_,this._z=h*c*_-f*m*d,this._w=h*c*d+f*m*_;break;case"YZX":this._x=f*c*d+h*m*_,this._y=h*m*d+f*c*_,this._z=h*c*_-f*m*d,this._w=h*c*d-f*m*_;break;case"XZY":this._x=f*c*d-h*m*_,this._y=h*m*d-f*c*_,this._z=h*c*_+f*m*d,this._w=h*c*d+f*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],o=e[8],r=e[1],a=e[5],l=e[9],h=e[2],c=e[6],d=e[10],f=i+a+d;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(c-l)*m,this._y=(o-h)*m,this._z=(r-s)*m}else if(i>a&&i>d){const m=2*Math.sqrt(1+i-a-d);this._w=(c-l)/m,this._x=.25*m,this._y=(s+r)/m,this._z=(o+h)/m}else if(a>d){const m=2*Math.sqrt(1+a-i-d);this._w=(o-h)/m,this._x=(s+r)/m,this._y=.25*m,this._z=(l+c)/m}else{const m=2*Math.sqrt(1+d-i-a);this._w=(r-s)/m,this._x=(o+h)/m,this._y=(l+c)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(fe(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,o=t._z,r=t._w,a=e._x,l=e._y,h=e._z,c=e._w;return this._x=i*c+r*a+s*h-o*l,this._y=s*c+r*l+o*a-i*h,this._z=o*c+r*h+i*l-s*a,this._w=r*c-i*a-s*l-o*h,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,s=this._y,o=this._z,r=this._w;let a=r*t._w+i*t._x+s*t._y+o*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=r,this._x=i,this._y=s,this._z=o,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-e;return this._w=m*r+e*this._w,this._x=m*i+e*this._x,this._y=m*s+e*this._y,this._z=m*o+e*this._z,this.normalize(),this._onChangeCallback(),this}const h=Math.sqrt(l),c=Math.atan2(h,a),d=Math.sin((1-e)*c)/h,f=Math.sin(e*c)/h;return this._w=r*d+this._w*f,this._x=i*d+this._x*f,this._y=s*d+this._y*f,this._z=o*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=Math.random(),e=Math.sqrt(1-t),i=Math.sqrt(t),s=2*Math.PI*Math.random(),o=2*Math.PI*Math.random();return this.set(e*Math.cos(s),i*Math.sin(o),i*Math.cos(o),e*Math.sin(s))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(t=0,e=0,i=0){L.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(lr.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(lr.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[3]*i+o[6]*s,this.y=o[1]*e+o[4]*i+o[7]*s,this.z=o[2]*e+o[5]*i+o[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,o=t.elements,r=1/(o[3]*e+o[7]*i+o[11]*s+o[15]);return this.x=(o[0]*e+o[4]*i+o[8]*s+o[12])*r,this.y=(o[1]*e+o[5]*i+o[9]*s+o[13])*r,this.z=(o[2]*e+o[6]*i+o[10]*s+o[14])*r,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,o=t.x,r=t.y,a=t.z,l=t.w,h=l*e+r*s-a*i,c=l*i+a*e-o*s,d=l*s+o*i-r*e,f=-o*e-r*i-a*s;return this.x=h*l+f*-o+c*-a-d*-r,this.y=c*l+f*-r+d*-o-h*-a,this.z=d*l+f*-a+h*-r-c*-o,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s,this.y=o[1]*e+o[5]*i+o[9]*s,this.z=o[2]*e+o[6]*i+o[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,o=t.z,r=e.x,a=e.y,l=e.z;return this.x=s*l-o*a,this.y=o*r-i*l,this.z=i*a-s*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Ls.copy(this).projectOnVector(t),this.sub(Ls)}reflect(t){return this.sub(Ls.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(fe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,i=Math.sqrt(1-t**2);return this.x=i*Math.cos(e),this.y=i*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ls=new L,lr=new yi;class Rn{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(We.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(We.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=We.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){if(t.updateWorldMatrix(!1,!1),t.boundingBox!==void 0)t.boundingBox===null&&t.computeBoundingBox(),Li.copy(t.boundingBox),Li.applyMatrix4(t.matrixWorld),this.union(Li);else{const s=t.geometry;if(s!==void 0)if(e&&s.attributes!==void 0&&s.attributes.position!==void 0){const o=s.attributes.position;for(let r=0,a=o.count;r<a;r++)We.fromBufferAttribute(o,r).applyMatrix4(t.matrixWorld),this.expandByPoint(We)}else s.boundingBox===null&&s.computeBoundingBox(),Li.copy(s.boundingBox),Li.applyMatrix4(t.matrixWorld),this.union(Li)}const i=t.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,We),We.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(_n),kn.subVectors(this.max,_n),Pi.subVectors(t.a,_n),ki.subVectors(t.b,_n),Di.subVectors(t.c,_n),Qe.subVectors(ki,Pi),ti.subVectors(Di,ki),di.subVectors(Pi,Di);let e=[0,-Qe.z,Qe.y,0,-ti.z,ti.y,0,-di.z,di.y,Qe.z,0,-Qe.x,ti.z,0,-ti.x,di.z,0,-di.x,-Qe.y,Qe.x,0,-ti.y,ti.x,0,-di.y,di.x,0];return!Ps(e,Pi,ki,Di,kn)||(e=[1,0,0,0,1,0,0,0,1],!Ps(e,Pi,ki,Di,kn))?!1:(Dn.crossVectors(Qe,ti),e=[Dn.x,Dn.y,Dn.z],Ps(e,Pi,ki,Di,kn))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,We).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(We).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ze[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ze[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ze[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ze[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ze[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ze[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ze[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ze[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ze),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const ze=[new L,new L,new L,new L,new L,new L,new L,new L],We=new L,Li=new Rn,Pi=new L,ki=new L,Di=new L,Qe=new L,ti=new L,di=new L,_n=new L,kn=new L,Dn=new L,pi=new L;function Ps(n,t,e,i,s){for(let o=0,r=n.length-3;o<=r;o+=3){pi.fromArray(n,o);const a=s.x*Math.abs(pi.x)+s.y*Math.abs(pi.y)+s.z*Math.abs(pi.z),l=t.dot(pi),h=e.dot(pi),c=i.dot(pi);if(Math.max(-Math.max(l,h,c),Math.min(l,h,c))>a)return!1}return!0}const lc=new Rn,gn=new L,ks=new L;class ds{constructor(t=new L,e=-1){this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):lc.setFromPoints(t).getCenter(i);let s=0;for(let o=0,r=t.length;o<r;o++)s=Math.max(s,i.distanceToSquared(t[o]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;gn.subVectors(t,this.center);const e=gn.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(gn,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ks.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(gn.copy(t.center).add(ks)),this.expandByPoint(gn.copy(t.center).sub(ks))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const He=new L,Ds=new L,In=new L,ei=new L,Is=new L,Fn=new L,Fs=new L;class ps{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,He)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=He.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(He.copy(this.origin).addScaledVector(this.direction,e),He.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){Ds.copy(t).add(e).multiplyScalar(.5),In.copy(e).sub(t).normalize(),ei.copy(this.origin).sub(Ds);const o=t.distanceTo(e)*.5,r=-this.direction.dot(In),a=ei.dot(this.direction),l=-ei.dot(In),h=ei.lengthSq(),c=Math.abs(1-r*r);let d,f,m,_;if(c>0)if(d=r*l-a,f=r*a-l,_=o*c,d>=0)if(f>=-_)if(f<=_){const x=1/c;d*=x,f*=x,m=d*(d+r*f+2*a)+f*(r*d+f+2*l)+h}else f=o,d=Math.max(0,-(r*f+a)),m=-d*d+f*(f+2*l)+h;else f=-o,d=Math.max(0,-(r*f+a)),m=-d*d+f*(f+2*l)+h;else f<=-_?(d=Math.max(0,-(-r*o+a)),f=d>0?-o:Math.min(Math.max(-o,-l),o),m=-d*d+f*(f+2*l)+h):f<=_?(d=0,f=Math.min(Math.max(-o,-l),o),m=f*(f+2*l)+h):(d=Math.max(0,-(r*o+a)),f=d>0?o:Math.min(Math.max(-o,-l),o),m=-d*d+f*(f+2*l)+h);else f=r>0?-o:o,d=Math.max(0,-(r*f+a)),m=-d*d+f*(f+2*l)+h;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Ds).addScaledVector(In,f),m}intersectSphere(t,e){He.subVectors(t.center,this.origin);const i=He.dot(this.direction),s=He.dot(He)-i*i,o=t.radius*t.radius;if(s>o)return null;const r=Math.sqrt(o-s),a=i-r,l=i+r;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,o,r,a,l;const h=1/this.direction.x,c=1/this.direction.y,d=1/this.direction.z,f=this.origin;return h>=0?(i=(t.min.x-f.x)*h,s=(t.max.x-f.x)*h):(i=(t.max.x-f.x)*h,s=(t.min.x-f.x)*h),c>=0?(o=(t.min.y-f.y)*c,r=(t.max.y-f.y)*c):(o=(t.max.y-f.y)*c,r=(t.min.y-f.y)*c),i>r||o>s||((o>i||isNaN(i))&&(i=o),(r<s||isNaN(s))&&(s=r),d>=0?(a=(t.min.z-f.z)*d,l=(t.max.z-f.z)*d):(a=(t.max.z-f.z)*d,l=(t.min.z-f.z)*d),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,He)!==null}intersectTriangle(t,e,i,s,o){Is.subVectors(e,t),Fn.subVectors(i,t),Fs.crossVectors(Is,Fn);let r=this.direction.dot(Fs),a;if(r>0){if(s)return null;a=1}else if(r<0)a=-1,r=-r;else return null;ei.subVectors(this.origin,t);const l=a*this.direction.dot(Fn.crossVectors(ei,Fn));if(l<0)return null;const h=a*this.direction.dot(Is.cross(ei));if(h<0||l+h>r)return null;const c=-a*ei.dot(Fs);return c<0?null:this.at(c/r,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class re{constructor(t,e,i,s,o,r,a,l,h,c,d,f,m,_,x,p){re.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,o,r,a,l,h,c,d,f,m,_,x,p)}set(t,e,i,s,o,r,a,l,h,c,d,f,m,_,x,p){const u=this.elements;return u[0]=t,u[4]=e,u[8]=i,u[12]=s,u[1]=o,u[5]=r,u[9]=a,u[13]=l,u[2]=h,u[6]=c,u[10]=d,u[14]=f,u[3]=m,u[7]=_,u[11]=x,u[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new re().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,s=1/Ii.setFromMatrixColumn(t,0).length(),o=1/Ii.setFromMatrixColumn(t,1).length(),r=1/Ii.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*o,e[5]=i[5]*o,e[6]=i[6]*o,e[7]=0,e[8]=i[8]*r,e[9]=i[9]*r,e[10]=i[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,o=t.z,r=Math.cos(i),a=Math.sin(i),l=Math.cos(s),h=Math.sin(s),c=Math.cos(o),d=Math.sin(o);if(t.order==="XYZ"){const f=r*c,m=r*d,_=a*c,x=a*d;e[0]=l*c,e[4]=-l*d,e[8]=h,e[1]=m+_*h,e[5]=f-x*h,e[9]=-a*l,e[2]=x-f*h,e[6]=_+m*h,e[10]=r*l}else if(t.order==="YXZ"){const f=l*c,m=l*d,_=h*c,x=h*d;e[0]=f+x*a,e[4]=_*a-m,e[8]=r*h,e[1]=r*d,e[5]=r*c,e[9]=-a,e[2]=m*a-_,e[6]=x+f*a,e[10]=r*l}else if(t.order==="ZXY"){const f=l*c,m=l*d,_=h*c,x=h*d;e[0]=f-x*a,e[4]=-r*d,e[8]=_+m*a,e[1]=m+_*a,e[5]=r*c,e[9]=x-f*a,e[2]=-r*h,e[6]=a,e[10]=r*l}else if(t.order==="ZYX"){const f=r*c,m=r*d,_=a*c,x=a*d;e[0]=l*c,e[4]=_*h-m,e[8]=f*h+x,e[1]=l*d,e[5]=x*h+f,e[9]=m*h-_,e[2]=-h,e[6]=a*l,e[10]=r*l}else if(t.order==="YZX"){const f=r*l,m=r*h,_=a*l,x=a*h;e[0]=l*c,e[4]=x-f*d,e[8]=_*d+m,e[1]=d,e[5]=r*c,e[9]=-a*c,e[2]=-h*c,e[6]=m*d+_,e[10]=f-x*d}else if(t.order==="XZY"){const f=r*l,m=r*h,_=a*l,x=a*h;e[0]=l*c,e[4]=-d,e[8]=h*c,e[1]=f*d+x,e[5]=r*c,e[9]=m*d-_,e[2]=_*d-m,e[6]=a*c,e[10]=x*d+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(cc,t,hc)}lookAt(t,e,i){const s=this.elements;return Se.subVectors(t,e),Se.lengthSq()===0&&(Se.z=1),Se.normalize(),ii.crossVectors(i,Se),ii.lengthSq()===0&&(Math.abs(i.z)===1?Se.x+=1e-4:Se.z+=1e-4,Se.normalize(),ii.crossVectors(i,Se)),ii.normalize(),On.crossVectors(Se,ii),s[0]=ii.x,s[4]=On.x,s[8]=Se.x,s[1]=ii.y,s[5]=On.y,s[9]=Se.y,s[2]=ii.z,s[6]=On.z,s[10]=Se.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,o=this.elements,r=i[0],a=i[4],l=i[8],h=i[12],c=i[1],d=i[5],f=i[9],m=i[13],_=i[2],x=i[6],p=i[10],u=i[14],A=i[3],v=i[7],E=i[11],y=i[15],C=s[0],w=s[4],W=s[8],b=s[12],R=s[1],V=s[5],Z=s[9],J=s[13],P=s[2],z=s[6],q=s[10],H=s[14],nt=s[3],K=s[7],Y=s[11],k=s[15];return o[0]=r*C+a*R+l*P+h*nt,o[4]=r*w+a*V+l*z+h*K,o[8]=r*W+a*Z+l*q+h*Y,o[12]=r*b+a*J+l*H+h*k,o[1]=c*C+d*R+f*P+m*nt,o[5]=c*w+d*V+f*z+m*K,o[9]=c*W+d*Z+f*q+m*Y,o[13]=c*b+d*J+f*H+m*k,o[2]=_*C+x*R+p*P+u*nt,o[6]=_*w+x*V+p*z+u*K,o[10]=_*W+x*Z+p*q+u*Y,o[14]=_*b+x*J+p*H+u*k,o[3]=A*C+v*R+E*P+y*nt,o[7]=A*w+v*V+E*z+y*K,o[11]=A*W+v*Z+E*q+y*Y,o[15]=A*b+v*J+E*H+y*k,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],o=t[12],r=t[1],a=t[5],l=t[9],h=t[13],c=t[2],d=t[6],f=t[10],m=t[14],_=t[3],x=t[7],p=t[11],u=t[15];return _*(+o*l*d-s*h*d-o*a*f+i*h*f+s*a*m-i*l*m)+x*(+e*l*m-e*h*f+o*r*f-s*r*m+s*h*c-o*l*c)+p*(+e*h*d-e*a*m-o*r*d+i*r*m+o*a*c-i*h*c)+u*(-s*a*c-e*l*d+e*a*f+s*r*d-i*r*f+i*l*c)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],o=t[3],r=t[4],a=t[5],l=t[6],h=t[7],c=t[8],d=t[9],f=t[10],m=t[11],_=t[12],x=t[13],p=t[14],u=t[15],A=d*p*h-x*f*h+x*l*m-a*p*m-d*l*u+a*f*u,v=_*f*h-c*p*h-_*l*m+r*p*m+c*l*u-r*f*u,E=c*x*h-_*d*h+_*a*m-r*x*m-c*a*u+r*d*u,y=_*d*l-c*x*l-_*a*f+r*x*f+c*a*p-r*d*p,C=e*A+i*v+s*E+o*y;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/C;return t[0]=A*w,t[1]=(x*f*o-d*p*o-x*s*m+i*p*m+d*s*u-i*f*u)*w,t[2]=(a*p*o-x*l*o+x*s*h-i*p*h-a*s*u+i*l*u)*w,t[3]=(d*l*o-a*f*o-d*s*h+i*f*h+a*s*m-i*l*m)*w,t[4]=v*w,t[5]=(c*p*o-_*f*o+_*s*m-e*p*m-c*s*u+e*f*u)*w,t[6]=(_*l*o-r*p*o-_*s*h+e*p*h+r*s*u-e*l*u)*w,t[7]=(r*f*o-c*l*o+c*s*h-e*f*h-r*s*m+e*l*m)*w,t[8]=E*w,t[9]=(_*d*o-c*x*o-_*i*m+e*x*m+c*i*u-e*d*u)*w,t[10]=(r*x*o-_*a*o+_*i*h-e*x*h-r*i*u+e*a*u)*w,t[11]=(c*a*o-r*d*o-c*i*h+e*d*h+r*i*m-e*a*m)*w,t[12]=y*w,t[13]=(c*x*s-_*d*s+_*i*f-e*x*f-c*i*p+e*d*p)*w,t[14]=(_*a*s-r*x*s-_*i*l+e*x*l+r*i*p-e*a*p)*w,t[15]=(r*d*s-c*a*s+c*i*l-e*d*l-r*i*f+e*a*f)*w,this}scale(t){const e=this.elements,i=t.x,s=t.y,o=t.z;return e[0]*=i,e[4]*=s,e[8]*=o,e[1]*=i,e[5]*=s,e[9]*=o,e[2]*=i,e[6]*=s,e[10]*=o,e[3]*=i,e[7]*=s,e[11]*=o,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),o=1-i,r=t.x,a=t.y,l=t.z,h=o*r,c=o*a;return this.set(h*r+i,h*a-s*l,h*l+s*a,0,h*a+s*l,c*a+i,c*l-s*r,0,h*l-s*a,c*l+s*r,o*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,o,r){return this.set(1,i,o,0,t,1,r,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,o=e._x,r=e._y,a=e._z,l=e._w,h=o+o,c=r+r,d=a+a,f=o*h,m=o*c,_=o*d,x=r*c,p=r*d,u=a*d,A=l*h,v=l*c,E=l*d,y=i.x,C=i.y,w=i.z;return s[0]=(1-(x+u))*y,s[1]=(m+E)*y,s[2]=(_-v)*y,s[3]=0,s[4]=(m-E)*C,s[5]=(1-(f+u))*C,s[6]=(p+A)*C,s[7]=0,s[8]=(_+v)*w,s[9]=(p-A)*w,s[10]=(1-(f+x))*w,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;let o=Ii.set(s[0],s[1],s[2]).length();const r=Ii.set(s[4],s[5],s[6]).length(),a=Ii.set(s[8],s[9],s[10]).length();this.determinant()<0&&(o=-o),t.x=s[12],t.y=s[13],t.z=s[14],Le.copy(this);const h=1/o,c=1/r,d=1/a;return Le.elements[0]*=h,Le.elements[1]*=h,Le.elements[2]*=h,Le.elements[4]*=c,Le.elements[5]*=c,Le.elements[6]*=c,Le.elements[8]*=d,Le.elements[9]*=d,Le.elements[10]*=d,e.setFromRotationMatrix(Le),i.x=o,i.y=r,i.z=a,this}makePerspective(t,e,i,s,o,r,a=Ke){const l=this.elements,h=2*o/(e-t),c=2*o/(i-s),d=(e+t)/(e-t),f=(i+s)/(i-s);let m,_;if(a===Ke)m=-(r+o)/(r-o),_=-2*r*o/(r-o);else if(a===ls)m=-r/(r-o),_=-r*o/(r-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=c,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,o,r,a=Ke){const l=this.elements,h=1/(e-t),c=1/(i-s),d=1/(r-o),f=(e+t)*h,m=(i+s)*c;let _,x;if(a===Ke)_=(r+o)*d,x=-2*d;else if(a===ls)_=o*d,x=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*h,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=x,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Ii=new L,Le=new re,cc=new L(0,0,0),hc=new L(1,1,1),ii=new L,On=new L,Se=new L,cr=new re,hr=new yi;class ms{constructor(t=0,e=0,i=0,s=ms.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,o=s[0],r=s[4],a=s[8],l=s[1],h=s[5],c=s[9],d=s[2],f=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin(fe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,m),this._z=Math.atan2(-r,o)):(this._x=Math.atan2(f,h),this._z=0);break;case"YXZ":this._x=Math.asin(-fe(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-d,o),this._z=0);break;case"ZXY":this._x=Math.asin(fe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-r,h)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-fe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-r,h));break;case"YZX":this._z=Math.asin(fe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,h),this._y=Math.atan2(-d,o)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-fe(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(f,h),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-c,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return cr.makeRotationFromQuaternion(t),this.setFromRotationMatrix(cr,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return hr.setFromEuler(this),this.setFromQuaternion(hr,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ms.DEFAULT_ORDER="XYZ";class fo{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let uc=0;const ur=new L,Fi=new yi,Ve=new re,Nn=new L,xn=new L,fc=new L,dc=new yi,fr=new L(1,0,0),dr=new L(0,1,0),pr=new L(0,0,1),pc={type:"added"},mc={type:"removed"};class be extends Ti{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:uc++}),this.uuid=fn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=be.DEFAULT_UP.clone();const t=new L,e=new ms,i=new yi,s=new L(1,1,1);function o(){i.setFromEuler(e,!1)}function r(){e.setFromQuaternion(i,void 0,!1)}e._onChange(o),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new re},normalMatrix:{value:new Ft}}),this.matrix=new re,this.matrixWorld=new re,this.matrixAutoUpdate=be.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=be.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new fo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Fi.setFromAxisAngle(t,e),this.quaternion.multiply(Fi),this}rotateOnWorldAxis(t,e){return Fi.setFromAxisAngle(t,e),this.quaternion.premultiply(Fi),this}rotateX(t){return this.rotateOnAxis(fr,t)}rotateY(t){return this.rotateOnAxis(dr,t)}rotateZ(t){return this.rotateOnAxis(pr,t)}translateOnAxis(t,e){return ur.copy(t).applyQuaternion(this.quaternion),this.position.add(ur.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(fr,t)}translateY(t){return this.translateOnAxis(dr,t)}translateZ(t){return this.translateOnAxis(pr,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ve.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Nn.copy(t):Nn.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),xn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ve.lookAt(xn,Nn,this.up):Ve.lookAt(Nn,xn,this.up),this.quaternion.setFromRotationMatrix(Ve),s&&(Ve.extractRotation(s.matrixWorld),Fi.setFromRotationMatrix(Ve),this.quaternion.premultiply(Fi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(pc)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(mc)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ve.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ve.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ve),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const r=this.children[i].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e){let i=[];this[t]===e&&i.push(this);for(let s=0,o=this.children.length;s<o;s++){const r=this.children[s].getObjectsByProperty(t,e);r.length>0&&(i=i.concat(r))}return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xn,t,fc),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xn,dc,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++){const o=e[i];(o.matrixWorldAutoUpdate===!0||t===!0)&&o.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const s=this.children;for(let o=0,r=s.length;o<r;o++){const a=s[o];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON()));function o(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let h=0,c=l.length;h<c;h++){const d=l[h];o(t.shapes,d)}else o(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,h=this.material.length;l<h;l++)a.push(o(t.materials,this.material[l]));s.material=a}else s.material=o(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(o(t.animations,l))}}if(e){const a=r(t.geometries),l=r(t.materials),h=r(t.textures),c=r(t.images),d=r(t.shapes),f=r(t.skeletons),m=r(t.animations),_=r(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),h.length>0&&(i.textures=h),c.length>0&&(i.images=c),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),m.length>0&&(i.animations=m),_.length>0&&(i.nodes=_)}return i.object=s,i;function r(a){const l=[];for(const h in a){const c=a[h];delete c.metadata,l.push(c)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}be.DEFAULT_UP=new L(0,1,0);be.DEFAULT_MATRIX_AUTO_UPDATE=!0;be.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Pe=new L,Xe=new L,Os=new L,qe=new L,Oi=new L,Ni=new L,mr=new L,Ns=new L,Bs=new L,Gs=new L;let Bn=!1;class we{constructor(t=new L,e=new L,i=new L){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Pe.subVectors(t,e),s.cross(Pe);const o=s.lengthSq();return o>0?s.multiplyScalar(1/Math.sqrt(o)):s.set(0,0,0)}static getBarycoord(t,e,i,s,o){Pe.subVectors(s,e),Xe.subVectors(i,e),Os.subVectors(t,e);const r=Pe.dot(Pe),a=Pe.dot(Xe),l=Pe.dot(Os),h=Xe.dot(Xe),c=Xe.dot(Os),d=r*h-a*a;if(d===0)return o.set(-2,-1,-1);const f=1/d,m=(h*l-a*c)*f,_=(r*c-a*l)*f;return o.set(1-m-_,_,m)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,qe),qe.x>=0&&qe.y>=0&&qe.x+qe.y<=1}static getUV(t,e,i,s,o,r,a,l){return Bn===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Bn=!0),this.getInterpolation(t,e,i,s,o,r,a,l)}static getInterpolation(t,e,i,s,o,r,a,l){return this.getBarycoord(t,e,i,s,qe),l.setScalar(0),l.addScaledVector(o,qe.x),l.addScaledVector(r,qe.y),l.addScaledVector(a,qe.z),l}static isFrontFacing(t,e,i,s){return Pe.subVectors(i,e),Xe.subVectors(t,e),Pe.cross(Xe).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Pe.subVectors(this.c,this.b),Xe.subVectors(this.a,this.b),Pe.cross(Xe).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return we.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return we.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,i,s,o){return Bn===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Bn=!0),we.getInterpolation(t,this.a,this.b,this.c,e,i,s,o)}getInterpolation(t,e,i,s,o){return we.getInterpolation(t,this.a,this.b,this.c,e,i,s,o)}containsPoint(t){return we.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return we.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,o=this.c;let r,a;Oi.subVectors(s,i),Ni.subVectors(o,i),Ns.subVectors(t,i);const l=Oi.dot(Ns),h=Ni.dot(Ns);if(l<=0&&h<=0)return e.copy(i);Bs.subVectors(t,s);const c=Oi.dot(Bs),d=Ni.dot(Bs);if(c>=0&&d<=c)return e.copy(s);const f=l*d-c*h;if(f<=0&&l>=0&&c<=0)return r=l/(l-c),e.copy(i).addScaledVector(Oi,r);Gs.subVectors(t,o);const m=Oi.dot(Gs),_=Ni.dot(Gs);if(_>=0&&m<=_)return e.copy(o);const x=m*h-l*_;if(x<=0&&h>=0&&_<=0)return a=h/(h-_),e.copy(i).addScaledVector(Ni,a);const p=c*_-m*d;if(p<=0&&d-c>=0&&m-_>=0)return mr.subVectors(o,s),a=(d-c)/(d-c+(m-_)),e.copy(s).addScaledVector(mr,a);const u=1/(p+x+f);return r=x*u,a=f*u,e.copy(i).addScaledVector(Oi,r).addScaledVector(Ni,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}let _c=0;class wn extends Ti{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_c++}),this.uuid=fn(),this.name="",this.type="Material",this.blending=$i,this.side=hi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=sa,this.blendDst=oa,this.blendEquation=qi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Js,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Pl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Rs,this.stencilZFail=Rs,this.stencilZPass=Rs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==$i&&(i.blending=this.blending),this.side!==hi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(o){const r=[];for(const a in o){const l=o[a];delete l.metadata,r.push(l)}return r}if(e){const o=s(t.textures),r=s(t.images);o.length>0&&(i.textures=o),r.length>0&&(i.images=r)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let o=0;o!==s;++o)i[o]=e[o].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const va={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ni={h:0,s:0,l:0},Gn={h:0,s:0,l:0};function zs(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class Ht{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=le){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Wt.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=Wt.workingColorSpace){return this.r=t,this.g=e,this.b=i,Wt.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=Wt.workingColorSpace){if(t=uo(t,1),e=fe(e,0,1),i=fe(i,0,1),e===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+e):i+e-i*e,r=2*i-o;this.r=zs(r,o,t+1/3),this.g=zs(r,o,t),this.b=zs(r,o,t-1/3)}return Wt.toWorkingColorSpace(this,s),this}setStyle(t,e=le){function i(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let o;const r=s[1],a=s[2];switch(r){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const o=s[1],r=o.length;if(r===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(o,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=le){const i=va[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Qi(t.r),this.g=Qi(t.g),this.b=Qi(t.b),this}copyLinearToSRGB(t){return this.r=Us(t.r),this.g=Us(t.g),this.b=Us(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=le){return Wt.fromWorkingColorSpace(ue.copy(this),t),Math.round(fe(ue.r*255,0,255))*65536+Math.round(fe(ue.g*255,0,255))*256+Math.round(fe(ue.b*255,0,255))}getHexString(t=le){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Wt.workingColorSpace){Wt.fromWorkingColorSpace(ue.copy(this),e);const i=ue.r,s=ue.g,o=ue.b,r=Math.max(i,s,o),a=Math.min(i,s,o);let l,h;const c=(a+r)/2;if(a===r)l=0,h=0;else{const d=r-a;switch(h=c<=.5?d/(r+a):d/(2-r-a),r){case i:l=(s-o)/d+(s<o?6:0);break;case s:l=(o-i)/d+2;break;case o:l=(i-s)/d+4;break}l/=6}return t.h=l,t.s=h,t.l=c,t}getRGB(t,e=Wt.workingColorSpace){return Wt.fromWorkingColorSpace(ue.copy(this),e),t.r=ue.r,t.g=ue.g,t.b=ue.b,t}getStyle(t=le){Wt.fromWorkingColorSpace(ue.copy(this),t);const e=ue.r,i=ue.g,s=ue.b;return t!==le?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(ni),this.setHSL(ni.h+t,ni.s+e,ni.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(ni),t.getHSL(Gn);const i=Sn(ni.h,Gn.h,e),s=Sn(ni.s,Gn.s,e),o=Sn(ni.l,Gn.l,e);return this.setHSL(i,s,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,o=t.elements;return this.r=o[0]*e+o[3]*i+o[6]*s,this.g=o[1]*e+o[4]*i+o[7]*s,this.b=o[2]*e+o[5]*i+o[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ue=new Ht;Ht.NAMES=va;class je extends wn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ra,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Qt=new L,zn=new Ot;class Oe{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=ir,this.updateRange={offset:0,count:-1},this.gpuType=ri,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,o=this.itemSize;s<o;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)zn.fromBufferAttribute(this,e),zn.applyMatrix3(t),this.setXY(e,zn.x,zn.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Qt.fromBufferAttribute(this,e),Qt.applyMatrix3(t),this.setXYZ(e,Qt.x,Qt.y,Qt.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Qt.fromBufferAttribute(this,e),Qt.applyMatrix4(t),this.setXYZ(e,Qt.x,Qt.y,Qt.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Qt.fromBufferAttribute(this,e),Qt.applyNormalMatrix(t),this.setXYZ(e,Qt.x,Qt.y,Qt.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Qt.fromBufferAttribute(this,e),Qt.transformDirection(t),this.setXYZ(e,Qt.x,Qt.y,Qt.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Yi(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=me(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Yi(e,this.array)),e}setX(t,e){return this.normalized&&(e=me(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Yi(e,this.array)),e}setY(t,e){return this.normalized&&(e=me(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Yi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=me(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Yi(e,this.array)),e}setW(t,e){return this.normalized&&(e=me(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=me(e,this.array),i=me(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=me(e,this.array),i=me(i,this.array),s=me(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,o){return t*=this.itemSize,this.normalized&&(e=me(e,this.array),i=me(i,this.array),s=me(s,this.array),o=me(o,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ir&&(t.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(t.updateRange=this.updateRange),t}}class ba extends Oe{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Ma extends Oe{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Ne extends Oe{constructor(t,e,i){super(new Float32Array(t),e,i)}}let gc=0;const Te=new re,Ws=new be,Bi=new L,Ee=new Rn,vn=new Rn,oe=new L;class Je extends Ti{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:gc++}),this.uuid=fn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ma(t)?Ma:ba)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new Ft().getNormalMatrix(t);i.applyNormalMatrix(o),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Te.makeRotationFromQuaternion(t),this.applyMatrix4(Te),this}rotateX(t){return Te.makeRotationX(t),this.applyMatrix4(Te),this}rotateY(t){return Te.makeRotationY(t),this.applyMatrix4(Te),this}rotateZ(t){return Te.makeRotationZ(t),this.applyMatrix4(Te),this}translate(t,e,i){return Te.makeTranslation(t,e,i),this.applyMatrix4(Te),this}scale(t,e,i){return Te.makeScale(t,e,i),this.applyMatrix4(Te),this}lookAt(t){return Ws.lookAt(t),Ws.updateMatrix(),this.applyMatrix4(Ws.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Bi).negate(),this.translate(Bi.x,Bi.y,Bi.z),this}setFromPoints(t){const e=[];for(let i=0,s=t.length;i<s;i++){const o=t[i];e.push(o.x,o.y,o.z||0)}return this.setAttribute("position",new Ne(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Rn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const o=e[i];Ee.setFromBufferAttribute(o),this.morphTargetsRelative?(oe.addVectors(this.boundingBox.min,Ee.min),this.boundingBox.expandByPoint(oe),oe.addVectors(this.boundingBox.max,Ee.max),this.boundingBox.expandByPoint(oe)):(this.boundingBox.expandByPoint(Ee.min),this.boundingBox.expandByPoint(Ee.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ds);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new L,1/0);return}if(t){const i=this.boundingSphere.center;if(Ee.setFromBufferAttribute(t),e)for(let o=0,r=e.length;o<r;o++){const a=e[o];vn.setFromBufferAttribute(a),this.morphTargetsRelative?(oe.addVectors(Ee.min,vn.min),Ee.expandByPoint(oe),oe.addVectors(Ee.max,vn.max),Ee.expandByPoint(oe)):(Ee.expandByPoint(vn.min),Ee.expandByPoint(vn.max))}Ee.getCenter(i);let s=0;for(let o=0,r=t.count;o<r;o++)oe.fromBufferAttribute(t,o),s=Math.max(s,i.distanceToSquared(oe));if(e)for(let o=0,r=e.length;o<r;o++){const a=e[o],l=this.morphTargetsRelative;for(let h=0,c=a.count;h<c;h++)oe.fromBufferAttribute(a,h),l&&(Bi.fromBufferAttribute(t,h),oe.add(Bi)),s=Math.max(s,i.distanceToSquared(oe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.array,s=e.position.array,o=e.normal.array,r=e.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Oe(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,h=[],c=[];for(let R=0;R<a;R++)h[R]=new L,c[R]=new L;const d=new L,f=new L,m=new L,_=new Ot,x=new Ot,p=new Ot,u=new L,A=new L;function v(R,V,Z){d.fromArray(s,R*3),f.fromArray(s,V*3),m.fromArray(s,Z*3),_.fromArray(r,R*2),x.fromArray(r,V*2),p.fromArray(r,Z*2),f.sub(d),m.sub(d),x.sub(_),p.sub(_);const J=1/(x.x*p.y-p.x*x.y);isFinite(J)&&(u.copy(f).multiplyScalar(p.y).addScaledVector(m,-x.y).multiplyScalar(J),A.copy(m).multiplyScalar(x.x).addScaledVector(f,-p.x).multiplyScalar(J),h[R].add(u),h[V].add(u),h[Z].add(u),c[R].add(A),c[V].add(A),c[Z].add(A))}let E=this.groups;E.length===0&&(E=[{start:0,count:i.length}]);for(let R=0,V=E.length;R<V;++R){const Z=E[R],J=Z.start,P=Z.count;for(let z=J,q=J+P;z<q;z+=3)v(i[z+0],i[z+1],i[z+2])}const y=new L,C=new L,w=new L,W=new L;function b(R){w.fromArray(o,R*3),W.copy(w);const V=h[R];y.copy(V),y.sub(w.multiplyScalar(w.dot(V))).normalize(),C.crossVectors(W,V);const J=C.dot(c[R])<0?-1:1;l[R*4]=y.x,l[R*4+1]=y.y,l[R*4+2]=y.z,l[R*4+3]=J}for(let R=0,V=E.length;R<V;++R){const Z=E[R],J=Z.start,P=Z.count;for(let z=J,q=J+P;z<q;z+=3)b(i[z+0]),b(i[z+1]),b(i[z+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Oe(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,m=i.count;f<m;f++)i.setXYZ(f,0,0,0);const s=new L,o=new L,r=new L,a=new L,l=new L,h=new L,c=new L,d=new L;if(t)for(let f=0,m=t.count;f<m;f+=3){const _=t.getX(f+0),x=t.getX(f+1),p=t.getX(f+2);s.fromBufferAttribute(e,_),o.fromBufferAttribute(e,x),r.fromBufferAttribute(e,p),c.subVectors(r,o),d.subVectors(s,o),c.cross(d),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,x),h.fromBufferAttribute(i,p),a.add(c),l.add(c),h.add(c),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(p,h.x,h.y,h.z)}else for(let f=0,m=e.count;f<m;f+=3)s.fromBufferAttribute(e,f+0),o.fromBufferAttribute(e,f+1),r.fromBufferAttribute(e,f+2),c.subVectors(r,o),d.subVectors(s,o),c.cross(d),i.setXYZ(f+0,c.x,c.y,c.z),i.setXYZ(f+1,c.x,c.y,c.z),i.setXYZ(f+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)oe.fromBufferAttribute(t,e),oe.normalize(),t.setXYZ(e,oe.x,oe.y,oe.z)}toNonIndexed(){function t(a,l){const h=a.array,c=a.itemSize,d=a.normalized,f=new h.constructor(l.length*c);let m=0,_=0;for(let x=0,p=l.length;x<p;x++){a.isInterleavedBufferAttribute?m=l[x]*a.data.stride+a.offset:m=l[x]*c;for(let u=0;u<c;u++)f[_++]=h[m++]}return new Oe(f,c,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Je,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],h=t(l,i);e.setAttribute(a,h)}const o=this.morphAttributes;for(const a in o){const l=[],h=o[a];for(let c=0,d=h.length;c<d;c++){const f=h[c],m=t(f,i);l.push(m)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let a=0,l=r.length;a<l;a++){const h=r[a];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const h in l)l[h]!==void 0&&(t[h]=l[h]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const h=i[l];t.data.attributes[l]=h.toJSON(t.data)}const s={};let o=!1;for(const l in this.morphAttributes){const h=this.morphAttributes[l],c=[];for(let d=0,f=h.length;d<f;d++){const m=h[d];c.push(m.toJSON(t.data))}c.length>0&&(s[l]=c,o=!0)}o&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const s=t.attributes;for(const h in s){const c=s[h];this.setAttribute(h,c.clone(e))}const o=t.morphAttributes;for(const h in o){const c=[],d=o[h];for(let f=0,m=d.length;f<m;f++)c.push(d[f].clone(e));this.morphAttributes[h]=c}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let h=0,c=r.length;h<c;h++){const d=r[h];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const _r=new re,mi=new ps,Wn=new ds,gr=new L,Gi=new L,zi=new L,Wi=new L,Hs=new L,Hn=new L,Vn=new Ot,Xn=new Ot,qn=new Ot,xr=new L,vr=new L,br=new L,Yn=new L,jn=new L;class Ze extends be{constructor(t=new Je,e=new je){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){const a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,o=i.morphAttributes.position,r=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(o&&a){Hn.set(0,0,0);for(let l=0,h=o.length;l<h;l++){const c=a[l],d=o[l];c!==0&&(Hs.fromBufferAttribute(d,t),r?Hn.addScaledVector(Hs,c):Hn.addScaledVector(Hs.sub(e),c))}e.add(Hn)}return e}raycast(t,e){const i=this.geometry,s=this.material,o=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Wn.copy(i.boundingSphere),Wn.applyMatrix4(o),mi.copy(t.ray).recast(t.near),!(Wn.containsPoint(mi.origin)===!1&&(mi.intersectSphere(Wn,gr)===null||mi.origin.distanceToSquared(gr)>(t.far-t.near)**2))&&(_r.copy(o).invert(),mi.copy(t.ray).applyMatrix4(_r),!(i.boundingBox!==null&&mi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,mi)))}_computeIntersections(t,e,i){let s;const o=this.geometry,r=this.material,a=o.index,l=o.attributes.position,h=o.attributes.uv,c=o.attributes.uv1,d=o.attributes.normal,f=o.groups,m=o.drawRange;if(a!==null)if(Array.isArray(r))for(let _=0,x=f.length;_<x;_++){const p=f[_],u=r[p.materialIndex],A=Math.max(p.start,m.start),v=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let E=A,y=v;E<y;E+=3){const C=a.getX(E),w=a.getX(E+1),W=a.getX(E+2);s=Kn(this,u,t,i,h,c,d,C,w,W),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const _=Math.max(0,m.start),x=Math.min(a.count,m.start+m.count);for(let p=_,u=x;p<u;p+=3){const A=a.getX(p),v=a.getX(p+1),E=a.getX(p+2);s=Kn(this,r,t,i,h,c,d,A,v,E),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(r))for(let _=0,x=f.length;_<x;_++){const p=f[_],u=r[p.materialIndex],A=Math.max(p.start,m.start),v=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let E=A,y=v;E<y;E+=3){const C=E,w=E+1,W=E+2;s=Kn(this,u,t,i,h,c,d,C,w,W),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const _=Math.max(0,m.start),x=Math.min(l.count,m.start+m.count);for(let p=_,u=x;p<u;p+=3){const A=p,v=p+1,E=p+2;s=Kn(this,r,t,i,h,c,d,A,v,E),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}}function xc(n,t,e,i,s,o,r,a){let l;if(t.side===ve?l=i.intersectTriangle(r,o,s,!0,a):l=i.intersectTriangle(s,o,r,t.side===hi,a),l===null)return null;jn.copy(a),jn.applyMatrix4(n.matrixWorld);const h=e.ray.origin.distanceTo(jn);return h<e.near||h>e.far?null:{distance:h,point:jn.clone(),object:n}}function Kn(n,t,e,i,s,o,r,a,l,h){n.getVertexPosition(a,Gi),n.getVertexPosition(l,zi),n.getVertexPosition(h,Wi);const c=xc(n,t,e,i,Gi,zi,Wi,Yn);if(c){s&&(Vn.fromBufferAttribute(s,a),Xn.fromBufferAttribute(s,l),qn.fromBufferAttribute(s,h),c.uv=we.getInterpolation(Yn,Gi,zi,Wi,Vn,Xn,qn,new Ot)),o&&(Vn.fromBufferAttribute(o,a),Xn.fromBufferAttribute(o,l),qn.fromBufferAttribute(o,h),c.uv1=we.getInterpolation(Yn,Gi,zi,Wi,Vn,Xn,qn,new Ot),c.uv2=c.uv1),r&&(xr.fromBufferAttribute(r,a),vr.fromBufferAttribute(r,l),br.fromBufferAttribute(r,h),c.normal=we.getInterpolation(Yn,Gi,zi,Wi,xr,vr,br,new L),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const d={a,b:l,c:h,normal:new L,materialIndex:0};we.getNormal(Gi,zi,Wi,d.normal),c.face=d}return c}class dn extends Je{constructor(t=1,e=1,i=1,s=1,o=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:o,depthSegments:r};const a=this;s=Math.floor(s),o=Math.floor(o),r=Math.floor(r);const l=[],h=[],c=[],d=[];let f=0,m=0;_("z","y","x",-1,-1,i,e,t,r,o,0),_("z","y","x",1,-1,i,e,-t,r,o,1),_("x","z","y",1,1,t,i,e,s,r,2),_("x","z","y",1,-1,t,i,-e,s,r,3),_("x","y","z",1,-1,t,e,i,s,o,4),_("x","y","z",-1,-1,t,e,-i,s,o,5),this.setIndex(l),this.setAttribute("position",new Ne(h,3)),this.setAttribute("normal",new Ne(c,3)),this.setAttribute("uv",new Ne(d,2));function _(x,p,u,A,v,E,y,C,w,W,b){const R=E/w,V=y/W,Z=E/2,J=y/2,P=C/2,z=w+1,q=W+1;let H=0,nt=0;const K=new L;for(let Y=0;Y<q;Y++){const k=Y*V-J;for(let N=0;N<z;N++){const ct=N*R-Z;K[x]=ct*A,K[p]=k*v,K[u]=P,h.push(K.x,K.y,K.z),K[x]=0,K[p]=0,K[u]=C>0?1:-1,c.push(K.x,K.y,K.z),d.push(N/w),d.push(1-Y/W),H+=1}}for(let Y=0;Y<W;Y++)for(let k=0;k<w;k++){const N=f+k+z*Y,ct=f+k+z*(Y+1),ut=f+(k+1)+z*(Y+1),ft=f+(k+1)+z*Y;l.push(N,ct,ft),l.push(ct,ut,ft),nt+=6}a.addGroup(m,nt,b),m+=nt,f+=H}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new dn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function un(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function _e(n){const t={};for(let e=0;e<n.length;e++){const i=un(n[e]);for(const s in i)t[s]=i[s]}return t}function vc(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Sa(n){return n.getRenderTarget()===null?n.outputColorSpace:Wt.workingColorSpace}const bc={clone:un,merge:_e};var Mc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Sc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ai extends wn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Mc,this.fragmentShader=Sc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=un(t.uniforms),this.uniformsGroups=vc(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const r=this.uniforms[s].value;r&&r.isTexture?e.uniforms[s]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[s]={type:"m4",value:r.toArray()}:e.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class Ea extends be{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new re,this.projectionMatrix=new re,this.projectionMatrixInverse=new re,this.coordinateSystem=Ke}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Ue extends Ea{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Tn*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ji*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Tn*2*Math.atan(Math.tan(Ji*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,i,s,o,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ji*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,o=-.5*s;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,h=r.fullHeight;o+=r.offsetX*s/l,e-=r.offsetY*i/h,s*=r.width/l,i*=r.height/h}const a=this.filmOffset;a!==0&&(o+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Hi=-90,Vi=1;class Ec extends be{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Ue(Hi,Vi,t,e);s.layers=this.layers,this.add(s);const o=new Ue(Hi,Vi,t,e);o.layers=this.layers,this.add(o);const r=new Ue(Hi,Vi,t,e);r.layers=this.layers,this.add(r);const a=new Ue(Hi,Vi,t,e);a.layers=this.layers,this.add(a);const l=new Ue(Hi,Vi,t,e);l.layers=this.layers,this.add(l);const h=new Ue(Hi,Vi,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,o,r,a,l]=e;for(const h of e)this.remove(h);if(t===Ke)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ls)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[o,r,a,l,h,c]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,o),t.setRenderTarget(i,1,s),t.render(e,r),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,h),i.texture.generateMipmaps=x,t.setRenderTarget(i,5,s),t.render(e,c),t.setRenderTarget(d,f,m),t.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class ya extends ye{constructor(t,e,i,s,o,r,a,l,h,c){t=t!==void 0?t:[],e=e!==void 0?e:ln,super(t,e,i,s,o,r,a,l,h,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class yc extends Ei{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];e.encoding!==void 0&&(En("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===Si?le:Ce),this.texture=new ya(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Re}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new dn(5,5,5),o=new Ai({name:"CubemapFromEquirect",uniforms:un(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ve,blending:ai});o.uniforms.tEquirect.value=e;const r=new Ze(s,o),a=e.minFilter;return e.minFilter===yn&&(e.minFilter=Re),new Ec(1,10,this).update(t,r),e.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(t,e,i,s){const o=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,i,s);t.setRenderTarget(o)}}const Vs=new L,Ac=new L,Tc=new Ft;class si{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=Vs.subVectors(i,e).cross(Ac.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(Vs),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/s;return o<0||o>1?null:e.copy(t.start).addScaledVector(i,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||Tc.getNormalMatrix(t),s=this.coplanarPoint(Vs).applyMatrix4(t),o=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const _i=new ds,Zn=new L;class Aa{constructor(t=new si,e=new si,i=new si,s=new si,o=new si,r=new si){this.planes=[t,e,i,s,o,r]}set(t,e,i,s,o,r){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(o),a[5].copy(r),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Ke){const i=this.planes,s=t.elements,o=s[0],r=s[1],a=s[2],l=s[3],h=s[4],c=s[5],d=s[6],f=s[7],m=s[8],_=s[9],x=s[10],p=s[11],u=s[12],A=s[13],v=s[14],E=s[15];if(i[0].setComponents(l-o,f-h,p-m,E-u).normalize(),i[1].setComponents(l+o,f+h,p+m,E+u).normalize(),i[2].setComponents(l+r,f+c,p+_,E+A).normalize(),i[3].setComponents(l-r,f-c,p-_,E-A).normalize(),i[4].setComponents(l-a,f-d,p-x,E-v).normalize(),e===Ke)i[5].setComponents(l+a,f+d,p+x,E+v).normalize();else if(e===ls)i[5].setComponents(a,d,x,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),_i.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),_i.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(_i)}intersectsSprite(t){return _i.center.set(0,0,0),_i.radius=.7071067811865476,_i.applyMatrix4(t.matrixWorld),this.intersectsSphere(_i)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(Zn.x=s.normal.x>0?t.max.x:t.min.x,Zn.y=s.normal.y>0?t.max.y:t.min.y,Zn.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Zn)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ta(){let n=null,t=!1,e=null,i=null;function s(o,r){e(o,r),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){n=o}}}function Rc(n,t){const e=t.isWebGL2,i=new WeakMap;function s(h,c){const d=h.array,f=h.usage,m=n.createBuffer();n.bindBuffer(c,m),n.bufferData(c,d,f),h.onUploadCallback();let _;if(d instanceof Float32Array)_=n.FLOAT;else if(d instanceof Uint16Array)if(h.isFloat16BufferAttribute)if(e)_=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=n.UNSIGNED_SHORT;else if(d instanceof Int16Array)_=n.SHORT;else if(d instanceof Uint32Array)_=n.UNSIGNED_INT;else if(d instanceof Int32Array)_=n.INT;else if(d instanceof Int8Array)_=n.BYTE;else if(d instanceof Uint8Array)_=n.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)_=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:m,type:_,bytesPerElement:d.BYTES_PER_ELEMENT,version:h.version}}function o(h,c,d){const f=c.array,m=c.updateRange;n.bindBuffer(d,h),m.count===-1?n.bufferSubData(d,0,f):(e?n.bufferSubData(d,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):n.bufferSubData(d,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1),c.onUploadCallback()}function r(h){return h.isInterleavedBufferAttribute&&(h=h.data),i.get(h)}function a(h){h.isInterleavedBufferAttribute&&(h=h.data);const c=i.get(h);c&&(n.deleteBuffer(c.buffer),i.delete(h))}function l(h,c){if(h.isGLBufferAttribute){const f=i.get(h);(!f||f.version<h.version)&&i.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}h.isInterleavedBufferAttribute&&(h=h.data);const d=i.get(h);d===void 0?i.set(h,s(h,c)):d.version<h.version&&(o(d.buffer,h,c),d.version=h.version)}return{get:r,remove:a,update:l}}class po extends Je{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const o=t/2,r=e/2,a=Math.floor(i),l=Math.floor(s),h=a+1,c=l+1,d=t/a,f=e/l,m=[],_=[],x=[],p=[];for(let u=0;u<c;u++){const A=u*f-r;for(let v=0;v<h;v++){const E=v*d-o;_.push(E,-A,0),x.push(0,0,1),p.push(v/a),p.push(1-u/l)}}for(let u=0;u<l;u++)for(let A=0;A<a;A++){const v=A+h*u,E=A+h*(u+1),y=A+1+h*(u+1),C=A+1+h*u;m.push(v,E,C),m.push(E,y,C)}this.setIndex(m),this.setAttribute("position",new Ne(_,3)),this.setAttribute("normal",new Ne(x,3)),this.setAttribute("uv",new Ne(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new po(t.width,t.height,t.widthSegments,t.heightSegments)}}var wc=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Uc=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Cc=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Lc=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Pc=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,kc=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Dc=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ic=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Fc=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Oc=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Nc=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Bc=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Gc=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,zc=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Wc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Hc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Vc=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Xc=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,qc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Yc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,jc=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Kc=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Zc=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,$c=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Jc=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Qc=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,th=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,eh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ih="gl_FragColor = linearToOutputTexel( gl_FragColor );",nh=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,sh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,oh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,rh=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ah=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,lh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ch=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,hh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,uh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,dh=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,ph=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,mh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,_h=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,gh=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,xh=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,vh=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,bh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Mh=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Sh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Eh=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,yh=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,Ah=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Th=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal;
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Rh=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,wh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Uh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ch=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Lh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Ph=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,kh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Dh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ih=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Fh=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Oh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Nh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Bh=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Gh=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,zh=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Wh=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Hh=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Vh=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Xh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yh=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,jh=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Kh=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Zh=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$h=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Jh=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Qh=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,tu=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,eu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,iu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,nu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,su=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ou=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ru=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,au=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,lu=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,cu=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,hu=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,uu=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,fu=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,du=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,pu=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,mu=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_u=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,gu=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,xu=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,vu=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,bu=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Mu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Su=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Eu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,yu=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Au=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Tu=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ru=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wu=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Uu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cu=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lu=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Pu=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,ku=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Du=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Iu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Fu=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ou=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Nu=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Bu=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Gu=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zu=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Wu=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hu=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Vu=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xu=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,qu=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Yu=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ju=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ku=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Zu=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$u=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ju=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qu=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,tf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ef=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,nf=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,sf=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,of=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Dt={alphahash_fragment:wc,alphahash_pars_fragment:Uc,alphamap_fragment:Cc,alphamap_pars_fragment:Lc,alphatest_fragment:Pc,alphatest_pars_fragment:kc,aomap_fragment:Dc,aomap_pars_fragment:Ic,begin_vertex:Fc,beginnormal_vertex:Oc,bsdfs:Nc,iridescence_fragment:Bc,bumpmap_pars_fragment:Gc,clipping_planes_fragment:zc,clipping_planes_pars_fragment:Wc,clipping_planes_pars_vertex:Hc,clipping_planes_vertex:Vc,color_fragment:Xc,color_pars_fragment:qc,color_pars_vertex:Yc,color_vertex:jc,common:Kc,cube_uv_reflection_fragment:Zc,defaultnormal_vertex:$c,displacementmap_pars_vertex:Jc,displacementmap_vertex:Qc,emissivemap_fragment:th,emissivemap_pars_fragment:eh,colorspace_fragment:ih,colorspace_pars_fragment:nh,envmap_fragment:sh,envmap_common_pars_fragment:oh,envmap_pars_fragment:rh,envmap_pars_vertex:ah,envmap_physical_pars_fragment:vh,envmap_vertex:lh,fog_vertex:ch,fog_pars_vertex:hh,fog_fragment:uh,fog_pars_fragment:fh,gradientmap_pars_fragment:dh,lightmap_fragment:ph,lightmap_pars_fragment:mh,lights_lambert_fragment:_h,lights_lambert_pars_fragment:gh,lights_pars_begin:xh,lights_toon_fragment:bh,lights_toon_pars_fragment:Mh,lights_phong_fragment:Sh,lights_phong_pars_fragment:Eh,lights_physical_fragment:yh,lights_physical_pars_fragment:Ah,lights_fragment_begin:Th,lights_fragment_maps:Rh,lights_fragment_end:wh,logdepthbuf_fragment:Uh,logdepthbuf_pars_fragment:Ch,logdepthbuf_pars_vertex:Lh,logdepthbuf_vertex:Ph,map_fragment:kh,map_pars_fragment:Dh,map_particle_fragment:Ih,map_particle_pars_fragment:Fh,metalnessmap_fragment:Oh,metalnessmap_pars_fragment:Nh,morphcolor_vertex:Bh,morphnormal_vertex:Gh,morphtarget_pars_vertex:zh,morphtarget_vertex:Wh,normal_fragment_begin:Hh,normal_fragment_maps:Vh,normal_pars_fragment:Xh,normal_pars_vertex:qh,normal_vertex:Yh,normalmap_pars_fragment:jh,clearcoat_normal_fragment_begin:Kh,clearcoat_normal_fragment_maps:Zh,clearcoat_pars_fragment:$h,iridescence_pars_fragment:Jh,opaque_fragment:Qh,packing:tu,premultiplied_alpha_fragment:eu,project_vertex:iu,dithering_fragment:nu,dithering_pars_fragment:su,roughnessmap_fragment:ou,roughnessmap_pars_fragment:ru,shadowmap_pars_fragment:au,shadowmap_pars_vertex:lu,shadowmap_vertex:cu,shadowmask_pars_fragment:hu,skinbase_vertex:uu,skinning_pars_vertex:fu,skinning_vertex:du,skinnormal_vertex:pu,specularmap_fragment:mu,specularmap_pars_fragment:_u,tonemapping_fragment:gu,tonemapping_pars_fragment:xu,transmission_fragment:vu,transmission_pars_fragment:bu,uv_pars_fragment:Mu,uv_pars_vertex:Su,uv_vertex:Eu,worldpos_vertex:yu,background_vert:Au,background_frag:Tu,backgroundCube_vert:Ru,backgroundCube_frag:wu,cube_vert:Uu,cube_frag:Cu,depth_vert:Lu,depth_frag:Pu,distanceRGBA_vert:ku,distanceRGBA_frag:Du,equirect_vert:Iu,equirect_frag:Fu,linedashed_vert:Ou,linedashed_frag:Nu,meshbasic_vert:Bu,meshbasic_frag:Gu,meshlambert_vert:zu,meshlambert_frag:Wu,meshmatcap_vert:Hu,meshmatcap_frag:Vu,meshnormal_vert:Xu,meshnormal_frag:qu,meshphong_vert:Yu,meshphong_frag:ju,meshphysical_vert:Ku,meshphysical_frag:Zu,meshtoon_vert:$u,meshtoon_frag:Ju,points_vert:Qu,points_frag:tf,shadow_vert:ef,shadow_frag:nf,sprite_vert:sf,sprite_frag:of},at={common:{diffuse:{value:new Ht(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ft}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ft},normalScale:{value:new Ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ht(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ht(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0},uvTransform:{value:new Ft}},sprite:{diffuse:{value:new Ht(16777215)},opacity:{value:1},center:{value:new Ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}}},Fe={basic:{uniforms:_e([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.fog]),vertexShader:Dt.meshbasic_vert,fragmentShader:Dt.meshbasic_frag},lambert:{uniforms:_e([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.fog,at.lights,{emissive:{value:new Ht(0)}}]),vertexShader:Dt.meshlambert_vert,fragmentShader:Dt.meshlambert_frag},phong:{uniforms:_e([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.fog,at.lights,{emissive:{value:new Ht(0)},specular:{value:new Ht(1118481)},shininess:{value:30}}]),vertexShader:Dt.meshphong_vert,fragmentShader:Dt.meshphong_frag},standard:{uniforms:_e([at.common,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.roughnessmap,at.metalnessmap,at.fog,at.lights,{emissive:{value:new Ht(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Dt.meshphysical_vert,fragmentShader:Dt.meshphysical_frag},toon:{uniforms:_e([at.common,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.gradientmap,at.fog,at.lights,{emissive:{value:new Ht(0)}}]),vertexShader:Dt.meshtoon_vert,fragmentShader:Dt.meshtoon_frag},matcap:{uniforms:_e([at.common,at.bumpmap,at.normalmap,at.displacementmap,at.fog,{matcap:{value:null}}]),vertexShader:Dt.meshmatcap_vert,fragmentShader:Dt.meshmatcap_frag},points:{uniforms:_e([at.points,at.fog]),vertexShader:Dt.points_vert,fragmentShader:Dt.points_frag},dashed:{uniforms:_e([at.common,at.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Dt.linedashed_vert,fragmentShader:Dt.linedashed_frag},depth:{uniforms:_e([at.common,at.displacementmap]),vertexShader:Dt.depth_vert,fragmentShader:Dt.depth_frag},normal:{uniforms:_e([at.common,at.bumpmap,at.normalmap,at.displacementmap,{opacity:{value:1}}]),vertexShader:Dt.meshnormal_vert,fragmentShader:Dt.meshnormal_frag},sprite:{uniforms:_e([at.sprite,at.fog]),vertexShader:Dt.sprite_vert,fragmentShader:Dt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Dt.background_vert,fragmentShader:Dt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Dt.backgroundCube_vert,fragmentShader:Dt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Dt.cube_vert,fragmentShader:Dt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Dt.equirect_vert,fragmentShader:Dt.equirect_frag},distanceRGBA:{uniforms:_e([at.common,at.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Dt.distanceRGBA_vert,fragmentShader:Dt.distanceRGBA_frag},shadow:{uniforms:_e([at.lights,at.fog,{color:{value:new Ht(0)},opacity:{value:1}}]),vertexShader:Dt.shadow_vert,fragmentShader:Dt.shadow_frag}};Fe.physical={uniforms:_e([Fe.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ft},clearcoatNormalScale:{value:new Ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ft},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ft},sheen:{value:0},sheenColor:{value:new Ht(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ft},transmissionSamplerSize:{value:new Ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ft},attenuationDistance:{value:0},attenuationColor:{value:new Ht(0)},specularColor:{value:new Ht(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ft},anisotropyVector:{value:new Ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ft}}]),vertexShader:Dt.meshphysical_vert,fragmentShader:Dt.meshphysical_frag};const $n={r:0,b:0,g:0};function rf(n,t,e,i,s,o,r){const a=new Ht(0);let l=o===!0?0:1,h,c,d=null,f=0,m=null;function _(p,u){let A=!1,v=u.isScene===!0?u.background:null;v&&v.isTexture&&(v=(u.backgroundBlurriness>0?e:t).get(v)),v===null?x(a,l):v&&v.isColor&&(x(v,1),A=!0);const E=n.xr.getEnvironmentBlendMode();E==="additive"?i.buffers.color.setClear(0,0,0,1,r):E==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,r),(n.autoClear||A)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),v&&(v.isCubeTexture||v.mapping===us)?(c===void 0&&(c=new Ze(new dn(1,1,1),new Ai({name:"BackgroundCubeMaterial",uniforms:un(Fe.backgroundCube.uniforms),vertexShader:Fe.backgroundCube.vertexShader,fragmentShader:Fe.backgroundCube.fragmentShader,side:ve,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(y,C,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=u.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,c.material.toneMapped=Wt.getTransfer(v.colorSpace)!==qt,(d!==v||f!==v.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,d=v,f=v.version,m=n.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(h===void 0&&(h=new Ze(new po(2,2),new Ai({name:"BackgroundMaterial",uniforms:un(Fe.background.uniforms),vertexShader:Fe.background.vertexShader,fragmentShader:Fe.background.fragmentShader,side:hi,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(h)),h.material.uniforms.t2D.value=v,h.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,h.material.toneMapped=Wt.getTransfer(v.colorSpace)!==qt,v.matrixAutoUpdate===!0&&v.updateMatrix(),h.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||f!==v.version||m!==n.toneMapping)&&(h.material.needsUpdate=!0,d=v,f=v.version,m=n.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null))}function x(p,u){p.getRGB($n,Sa(n)),i.buffers.color.setClear($n.r,$n.g,$n.b,u,r)}return{getClearColor:function(){return a},setClearColor:function(p,u=1){a.set(p),l=u,x(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,x(a,l)},render:_}}function af(n,t,e,i){const s=n.getParameter(n.MAX_VERTEX_ATTRIBS),o=i.isWebGL2?null:t.get("OES_vertex_array_object"),r=i.isWebGL2||o!==null,a={},l=p(null);let h=l,c=!1;function d(P,z,q,H,nt){let K=!1;if(r){const Y=x(H,q,z);h!==Y&&(h=Y,m(h.object)),K=u(P,H,q,nt),K&&A(P,H,q,nt)}else{const Y=z.wireframe===!0;(h.geometry!==H.id||h.program!==q.id||h.wireframe!==Y)&&(h.geometry=H.id,h.program=q.id,h.wireframe=Y,K=!0)}nt!==null&&e.update(nt,n.ELEMENT_ARRAY_BUFFER),(K||c)&&(c=!1,W(P,z,q,H),nt!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(nt).buffer))}function f(){return i.isWebGL2?n.createVertexArray():o.createVertexArrayOES()}function m(P){return i.isWebGL2?n.bindVertexArray(P):o.bindVertexArrayOES(P)}function _(P){return i.isWebGL2?n.deleteVertexArray(P):o.deleteVertexArrayOES(P)}function x(P,z,q){const H=q.wireframe===!0;let nt=a[P.id];nt===void 0&&(nt={},a[P.id]=nt);let K=nt[z.id];K===void 0&&(K={},nt[z.id]=K);let Y=K[H];return Y===void 0&&(Y=p(f()),K[H]=Y),Y}function p(P){const z=[],q=[],H=[];for(let nt=0;nt<s;nt++)z[nt]=0,q[nt]=0,H[nt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:q,attributeDivisors:H,object:P,attributes:{},index:null}}function u(P,z,q,H){const nt=h.attributes,K=z.attributes;let Y=0;const k=q.getAttributes();for(const N in k)if(k[N].location>=0){const ut=nt[N];let ft=K[N];if(ft===void 0&&(N==="instanceMatrix"&&P.instanceMatrix&&(ft=P.instanceMatrix),N==="instanceColor"&&P.instanceColor&&(ft=P.instanceColor)),ut===void 0||ut.attribute!==ft||ft&&ut.data!==ft.data)return!0;Y++}return h.attributesNum!==Y||h.index!==H}function A(P,z,q,H){const nt={},K=z.attributes;let Y=0;const k=q.getAttributes();for(const N in k)if(k[N].location>=0){let ut=K[N];ut===void 0&&(N==="instanceMatrix"&&P.instanceMatrix&&(ut=P.instanceMatrix),N==="instanceColor"&&P.instanceColor&&(ut=P.instanceColor));const ft={};ft.attribute=ut,ut&&ut.data&&(ft.data=ut.data),nt[N]=ft,Y++}h.attributes=nt,h.attributesNum=Y,h.index=H}function v(){const P=h.newAttributes;for(let z=0,q=P.length;z<q;z++)P[z]=0}function E(P){y(P,0)}function y(P,z){const q=h.newAttributes,H=h.enabledAttributes,nt=h.attributeDivisors;q[P]=1,H[P]===0&&(n.enableVertexAttribArray(P),H[P]=1),nt[P]!==z&&((i.isWebGL2?n:t.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,z),nt[P]=z)}function C(){const P=h.newAttributes,z=h.enabledAttributes;for(let q=0,H=z.length;q<H;q++)z[q]!==P[q]&&(n.disableVertexAttribArray(q),z[q]=0)}function w(P,z,q,H,nt,K,Y){Y===!0?n.vertexAttribIPointer(P,z,q,nt,K):n.vertexAttribPointer(P,z,q,H,nt,K)}function W(P,z,q,H){if(i.isWebGL2===!1&&(P.isInstancedMesh||H.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;v();const nt=H.attributes,K=q.getAttributes(),Y=z.defaultAttributeValues;for(const k in K){const N=K[k];if(N.location>=0){let ct=nt[k];if(ct===void 0&&(k==="instanceMatrix"&&P.instanceMatrix&&(ct=P.instanceMatrix),k==="instanceColor"&&P.instanceColor&&(ct=P.instanceColor)),ct!==void 0){const ut=ct.normalized,ft=ct.itemSize,St=e.get(ct);if(St===void 0)continue;const Ut=St.buffer,vt=St.type,Gt=St.bytesPerElement,ae=i.isWebGL2===!0&&(vt===n.INT||vt===n.UNSIGNED_INT||ct.gpuType===la);if(ct.isInterleavedBufferAttribute){const Pt=ct.data,I=Pt.stride,te=ct.offset;if(Pt.isInstancedInterleavedBuffer){for(let bt=0;bt<N.locationSize;bt++)y(N.location+bt,Pt.meshPerAttribute);P.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=Pt.meshPerAttribute*Pt.count)}else for(let bt=0;bt<N.locationSize;bt++)E(N.location+bt);n.bindBuffer(n.ARRAY_BUFFER,Ut);for(let bt=0;bt<N.locationSize;bt++)w(N.location+bt,ft/N.locationSize,vt,ut,I*Gt,(te+ft/N.locationSize*bt)*Gt,ae)}else{if(ct.isInstancedBufferAttribute){for(let Pt=0;Pt<N.locationSize;Pt++)y(N.location+Pt,ct.meshPerAttribute);P.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let Pt=0;Pt<N.locationSize;Pt++)E(N.location+Pt);n.bindBuffer(n.ARRAY_BUFFER,Ut);for(let Pt=0;Pt<N.locationSize;Pt++)w(N.location+Pt,ft/N.locationSize,vt,ut,ft*Gt,ft/N.locationSize*Pt*Gt,ae)}}else if(Y!==void 0){const ut=Y[k];if(ut!==void 0)switch(ut.length){case 2:n.vertexAttrib2fv(N.location,ut);break;case 3:n.vertexAttrib3fv(N.location,ut);break;case 4:n.vertexAttrib4fv(N.location,ut);break;default:n.vertexAttrib1fv(N.location,ut)}}}}C()}function b(){Z();for(const P in a){const z=a[P];for(const q in z){const H=z[q];for(const nt in H)_(H[nt].object),delete H[nt];delete z[q]}delete a[P]}}function R(P){if(a[P.id]===void 0)return;const z=a[P.id];for(const q in z){const H=z[q];for(const nt in H)_(H[nt].object),delete H[nt];delete z[q]}delete a[P.id]}function V(P){for(const z in a){const q=a[z];if(q[P.id]===void 0)continue;const H=q[P.id];for(const nt in H)_(H[nt].object),delete H[nt];delete q[P.id]}}function Z(){J(),c=!0,h!==l&&(h=l,m(h.object))}function J(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:Z,resetDefaultState:J,dispose:b,releaseStatesOfGeometry:R,releaseStatesOfProgram:V,initAttributes:v,enableAttribute:E,disableUnusedAttributes:C}}function lf(n,t,e,i){const s=i.isWebGL2;let o;function r(h){o=h}function a(h,c){n.drawArrays(o,h,c),e.update(c,o,1)}function l(h,c,d){if(d===0)return;let f,m;if(s)f=n,m="drawArraysInstanced";else if(f=t.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[m](o,h,c,d),e.update(c,o,d)}this.setMode=r,this.render=a,this.renderInstances=l}function cf(n,t,e){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const w=t.get("EXT_texture_filter_anisotropic");i=n.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(w){if(w==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const r=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let a=e.precision!==void 0?e.precision:"highp";const l=o(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const h=r||t.has("WEBGL_draw_buffers"),c=e.logarithmicDepthBuffer===!0,d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),f=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_TEXTURE_SIZE),_=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),x=n.getParameter(n.MAX_VERTEX_ATTRIBS),p=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),u=n.getParameter(n.MAX_VARYING_VECTORS),A=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),v=f>0,E=r||t.has("OES_texture_float"),y=v&&E,C=r?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:r,drawBuffers:h,getMaxAnisotropy:s,getMaxPrecision:o,precision:a,logarithmicDepthBuffer:c,maxTextures:d,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:_,maxAttributes:x,maxVertexUniforms:p,maxVaryings:u,maxFragmentUniforms:A,vertexTextures:v,floatFragmentTextures:E,floatVertexTextures:y,maxSamples:C}}function hf(n){const t=this;let e=null,i=0,s=!1,o=!1;const r=new si,a=new Ft,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const m=d.length!==0||f||i!==0||s;return s=f,i=d.length,m},this.beginShadows=function(){o=!0,c(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(d,f){e=c(d,f,0)},this.setState=function(d,f,m){const _=d.clippingPlanes,x=d.clipIntersection,p=d.clipShadows,u=n.get(d);if(!s||_===null||_.length===0||o&&!p)o?c(null):h();else{const A=o?0:i,v=A*4;let E=u.clippingState||null;l.value=E,E=c(_,f,v,m);for(let y=0;y!==v;++y)E[y]=e[y];u.clippingState=E,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=A}};function h(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function c(d,f,m,_){const x=d!==null?d.length:0;let p=null;if(x!==0){if(p=l.value,_!==!0||p===null){const u=m+x*4,A=f.matrixWorldInverse;a.getNormalMatrix(A),(p===null||p.length<u)&&(p=new Float32Array(u));for(let v=0,E=m;v!==x;++v,E+=4)r.copy(d[v]).applyMatrix4(A,a),r.normal.toArray(p,E),p[E+3]=r.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,p}}function uf(n){let t=new WeakMap;function e(r,a){return a===Qs?r.mapping=ln:a===to&&(r.mapping=cn),r}function i(r){if(r&&r.isTexture&&r.isRenderTargetTexture===!1){const a=r.mapping;if(a===Qs||a===to)if(t.has(r)){const l=t.get(r).texture;return e(l,r.mapping)}else{const l=r.image;if(l&&l.height>0){const h=new yc(l.height/2);return h.fromEquirectangularTexture(n,r),t.set(r,h),r.addEventListener("dispose",s),e(h.texture,r.mapping)}else return null}}return r}function s(r){const a=r.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function o(){t=new WeakMap}return{get:i,dispose:o}}class ff extends Ea{constructor(t=-1,e=1,i=1,s=-1,o=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=o,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,o,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let o=i-t,r=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=h*this.view.offsetX,r=o+h*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(o,r,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const ji=4,Mr=[.125,.215,.35,.446,.526,.582],xi=20,Xs=new ff,Sr=new Ht;let qs=null;const gi=(1+Math.sqrt(5))/2,Xi=1/gi,Er=[new L(1,1,1),new L(-1,1,1),new L(1,1,-1),new L(-1,1,-1),new L(0,gi,Xi),new L(0,gi,-Xi),new L(Xi,0,gi),new L(-Xi,0,gi),new L(gi,Xi,0),new L(-gi,Xi,0)];class yr{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){qs=this._renderer.getRenderTarget(),this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(t,i,s,o),e>0&&this._blur(o,0,0,e),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Rr(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Tr(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(qs),t.scissorTest=!1,Jn(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ln||t.mapping===cn?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),qs=this._renderer.getRenderTarget();const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Re,minFilter:Re,generateMipmaps:!1,type:An,format:De,colorSpace:$e,depthBuffer:!1},s=Ar(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ar(t,e,i);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=df(o)),this._blurMaterial=pf(o,t,e)}return s}_compileMaterial(t){const e=new Ze(this._lodPlanes[0],t);this._renderer.compile(e,Xs)}_sceneToCubeUV(t,e,i,s){const a=new Ue(90,1,e,i),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],c=this._renderer,d=c.autoClear,f=c.toneMapping;c.getClearColor(Sr),c.toneMapping=li,c.autoClear=!1;const m=new je({name:"PMREM.Background",side:ve,depthWrite:!1,depthTest:!1}),_=new Ze(new dn,m);let x=!1;const p=t.background;p?p.isColor&&(m.color.copy(p),t.background=null,x=!0):(m.color.copy(Sr),x=!0);for(let u=0;u<6;u++){const A=u%3;A===0?(a.up.set(0,l[u],0),a.lookAt(h[u],0,0)):A===1?(a.up.set(0,0,l[u]),a.lookAt(0,h[u],0)):(a.up.set(0,l[u],0),a.lookAt(0,0,h[u]));const v=this._cubeSize;Jn(s,A*v,u>2?v:0,v,v),c.setRenderTarget(s),x&&c.render(_,a),c.render(t,a)}_.geometry.dispose(),_.material.dispose(),c.toneMapping=f,c.autoClear=d,t.background=p}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===ln||t.mapping===cn;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Rr()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Tr());const o=s?this._cubemapMaterial:this._equirectMaterial,r=new Ze(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=t;const l=this._cubeSize;Jn(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(r,Xs)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),r=Er[(s-1)%Er.length];this._blur(t,s-1,s,o,r)}e.autoClear=i}_blur(t,e,i,s,o){const r=this._pingPongRenderTarget;this._halfBlur(t,r,e,i,s,"latitudinal",o),this._halfBlur(r,t,i,i,s,"longitudinal",o)}_halfBlur(t,e,i,s,o,r,a){const l=this._renderer,h=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,d=new Ze(this._lodPlanes[s],h),f=h.uniforms,m=this._sizeLods[i]-1,_=isFinite(o)?Math.PI/(2*m):2*Math.PI/(2*xi-1),x=o/_,p=isFinite(o)?1+Math.floor(c*x):xi;p>xi&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${xi}`);const u=[];let A=0;for(let w=0;w<xi;++w){const W=w/x,b=Math.exp(-W*W/2);u.push(b),w===0?A+=b:w<p&&(A+=2*b)}for(let w=0;w<u.length;w++)u[w]=u[w]/A;f.envMap.value=t.texture,f.samples.value=p,f.weights.value=u,f.latitudinal.value=r==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:v}=this;f.dTheta.value=_,f.mipInt.value=v-i;const E=this._sizeLods[s],y=3*E*(s>v-ji?s-v+ji:0),C=4*(this._cubeSize-E);Jn(e,y,C,3*E,2*E),l.setRenderTarget(e),l.render(d,Xs)}}function df(n){const t=[],e=[],i=[];let s=n;const o=n-ji+1+Mr.length;for(let r=0;r<o;r++){const a=Math.pow(2,s);e.push(a);let l=1/a;r>n-ji?l=Mr[r-n+ji-1]:r===0&&(l=0),i.push(l);const h=1/(a-2),c=-h,d=1+h,f=[c,c,d,c,d,d,c,c,d,d,c,d],m=6,_=6,x=3,p=2,u=1,A=new Float32Array(x*_*m),v=new Float32Array(p*_*m),E=new Float32Array(u*_*m);for(let C=0;C<m;C++){const w=C%3*2/3-1,W=C>2?0:-1,b=[w,W,0,w+2/3,W,0,w+2/3,W+1,0,w,W,0,w+2/3,W+1,0,w,W+1,0];A.set(b,x*_*C),v.set(f,p*_*C);const R=[C,C,C,C,C,C];E.set(R,u*_*C)}const y=new Je;y.setAttribute("position",new Oe(A,x)),y.setAttribute("uv",new Oe(v,p)),y.setAttribute("faceIndex",new Oe(E,u)),t.push(y),s>ji&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Ar(n,t,e){const i=new Ei(n,t,e);return i.texture.mapping=us,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Jn(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function pf(n,t,e){const i=new Float32Array(xi),s=new L(0,1,0);return new Ai({name:"SphericalGaussianBlur",defines:{n:xi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:mo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ai,depthTest:!1,depthWrite:!1})}function Tr(){return new Ai({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:mo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ai,depthTest:!1,depthWrite:!1})}function Rr(){return new Ai({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:mo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ai,depthTest:!1,depthWrite:!1})}function mo(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function mf(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const l=a.mapping,h=l===Qs||l===to,c=l===ln||l===cn;if(h||c)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=t.get(a);return e===null&&(e=new yr(n)),d=h?e.fromEquirectangular(a,d):e.fromCubemap(a,d),t.set(a,d),d.texture}else{if(t.has(a))return t.get(a).texture;{const d=a.image;if(h&&d&&d.height>0||c&&d&&s(d)){e===null&&(e=new yr(n));const f=h?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,f),a.addEventListener("dispose",o),f.texture}else return null}}}return a}function s(a){let l=0;const h=6;for(let c=0;c<h;c++)a[c]!==void 0&&l++;return l===h}function o(a){const l=a.target;l.removeEventListener("dispose",o);const h=t.get(l);h!==void 0&&(t.delete(l),h.dispose())}function r(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:r}}function _f(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(i){i.isWebGL2?e("EXT_color_buffer_float"):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(i){const s=e(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function gf(n,t,e,i){const s={},o=new WeakMap;function r(d){const f=d.target;f.index!==null&&t.remove(f.index);for(const _ in f.attributes)t.remove(f.attributes[_]);for(const _ in f.morphAttributes){const x=f.morphAttributes[_];for(let p=0,u=x.length;p<u;p++)t.remove(x[p])}f.removeEventListener("dispose",r),delete s[f.id];const m=o.get(f);m&&(t.remove(m),o.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(d,f){return s[f.id]===!0||(f.addEventListener("dispose",r),s[f.id]=!0,e.memory.geometries++),f}function l(d){const f=d.attributes;for(const _ in f)t.update(f[_],n.ARRAY_BUFFER);const m=d.morphAttributes;for(const _ in m){const x=m[_];for(let p=0,u=x.length;p<u;p++)t.update(x[p],n.ARRAY_BUFFER)}}function h(d){const f=[],m=d.index,_=d.attributes.position;let x=0;if(m!==null){const A=m.array;x=m.version;for(let v=0,E=A.length;v<E;v+=3){const y=A[v+0],C=A[v+1],w=A[v+2];f.push(y,C,C,w,w,y)}}else if(_!==void 0){const A=_.array;x=_.version;for(let v=0,E=A.length/3-1;v<E;v+=3){const y=v+0,C=v+1,w=v+2;f.push(y,C,C,w,w,y)}}else return;const p=new(ma(f)?Ma:ba)(f,1);p.version=x;const u=o.get(d);u&&t.remove(u),o.set(d,p)}function c(d){const f=o.get(d);if(f){const m=d.index;m!==null&&f.version<m.version&&h(d)}else h(d);return o.get(d)}return{get:a,update:l,getWireframeAttribute:c}}function xf(n,t,e,i){const s=i.isWebGL2;let o;function r(f){o=f}let a,l;function h(f){a=f.type,l=f.bytesPerElement}function c(f,m){n.drawElements(o,m,a,f*l),e.update(m,o,1)}function d(f,m,_){if(_===0)return;let x,p;if(s)x=n,p="drawElementsInstanced";else if(x=t.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",x===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}x[p](o,m,a,f*l,_),e.update(m,o,_)}this.setMode=r,this.setIndex=h,this.render=c,this.renderInstances=d}function vf(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,r,a){switch(e.calls++,r){case n.TRIANGLES:e.triangles+=a*(o/3);break;case n.LINES:e.lines+=a*(o/2);break;case n.LINE_STRIP:e.lines+=a*(o-1);break;case n.LINE_LOOP:e.lines+=a*o;break;case n.POINTS:e.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function bf(n,t){return n[0]-t[0]}function Mf(n,t){return Math.abs(t[1])-Math.abs(n[1])}function Sf(n,t,e){const i={},s=new Float32Array(8),o=new WeakMap,r=new ce,a=[];for(let h=0;h<8;h++)a[h]=[h,0];function l(h,c,d){const f=h.morphTargetInfluences;if(t.isWebGL2===!0){const _=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,x=_!==void 0?_.length:0;let p=o.get(c);if(p===void 0||p.count!==x){let z=function(){J.dispose(),o.delete(c),c.removeEventListener("dispose",z)};var m=z;p!==void 0&&p.texture.dispose();const v=c.morphAttributes.position!==void 0,E=c.morphAttributes.normal!==void 0,y=c.morphAttributes.color!==void 0,C=c.morphAttributes.position||[],w=c.morphAttributes.normal||[],W=c.morphAttributes.color||[];let b=0;v===!0&&(b=1),E===!0&&(b=2),y===!0&&(b=3);let R=c.attributes.position.count*b,V=1;R>t.maxTextureSize&&(V=Math.ceil(R/t.maxTextureSize),R=t.maxTextureSize);const Z=new Float32Array(R*V*4*x),J=new xa(Z,R,V,x);J.type=ri,J.needsUpdate=!0;const P=b*4;for(let q=0;q<x;q++){const H=C[q],nt=w[q],K=W[q],Y=R*V*4*q;for(let k=0;k<H.count;k++){const N=k*P;v===!0&&(r.fromBufferAttribute(H,k),Z[Y+N+0]=r.x,Z[Y+N+1]=r.y,Z[Y+N+2]=r.z,Z[Y+N+3]=0),E===!0&&(r.fromBufferAttribute(nt,k),Z[Y+N+4]=r.x,Z[Y+N+5]=r.y,Z[Y+N+6]=r.z,Z[Y+N+7]=0),y===!0&&(r.fromBufferAttribute(K,k),Z[Y+N+8]=r.x,Z[Y+N+9]=r.y,Z[Y+N+10]=r.z,Z[Y+N+11]=K.itemSize===4?r.w:1)}}p={count:x,texture:J,size:new Ot(R,V)},o.set(c,p),c.addEventListener("dispose",z)}let u=0;for(let v=0;v<f.length;v++)u+=f[v];const A=c.morphTargetsRelative?1:1-u;d.getUniforms().setValue(n,"morphTargetBaseInfluence",A),d.getUniforms().setValue(n,"morphTargetInfluences",f),d.getUniforms().setValue(n,"morphTargetsTexture",p.texture,e),d.getUniforms().setValue(n,"morphTargetsTextureSize",p.size)}else{const _=f===void 0?0:f.length;let x=i[c.id];if(x===void 0||x.length!==_){x=[];for(let E=0;E<_;E++)x[E]=[E,0];i[c.id]=x}for(let E=0;E<_;E++){const y=x[E];y[0]=E,y[1]=f[E]}x.sort(Mf);for(let E=0;E<8;E++)E<_&&x[E][1]?(a[E][0]=x[E][0],a[E][1]=x[E][1]):(a[E][0]=Number.MAX_SAFE_INTEGER,a[E][1]=0);a.sort(bf);const p=c.morphAttributes.position,u=c.morphAttributes.normal;let A=0;for(let E=0;E<8;E++){const y=a[E],C=y[0],w=y[1];C!==Number.MAX_SAFE_INTEGER&&w?(p&&c.getAttribute("morphTarget"+E)!==p[C]&&c.setAttribute("morphTarget"+E,p[C]),u&&c.getAttribute("morphNormal"+E)!==u[C]&&c.setAttribute("morphNormal"+E,u[C]),s[E]=w,A+=w):(p&&c.hasAttribute("morphTarget"+E)===!0&&c.deleteAttribute("morphTarget"+E),u&&c.hasAttribute("morphNormal"+E)===!0&&c.deleteAttribute("morphNormal"+E),s[E]=0)}const v=c.morphTargetsRelative?1:1-A;d.getUniforms().setValue(n,"morphTargetBaseInfluence",v),d.getUniforms().setValue(n,"morphTargetInfluences",s)}}return{update:l}}function Ef(n,t,e,i){let s=new WeakMap;function o(l){const h=i.render.frame,c=l.geometry,d=t.get(l,c);if(s.get(d)!==h&&(t.update(d),s.set(d,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==h&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,h))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==h&&(f.update(),s.set(f,h))}return d}function r(){s=new WeakMap}function a(l){const h=l.target;h.removeEventListener("dispose",a),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:r}}const Ra=new ye,wa=new xa,Ua=new ac,Ca=new ya,wr=[],Ur=[],Cr=new Float32Array(16),Lr=new Float32Array(9),Pr=new Float32Array(4);function pn(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let o=wr[s];if(o===void 0&&(o=new Float32Array(s),wr[s]=o),t!==0){i.toArray(o,0);for(let r=1,a=0;r!==t;++r)a+=e,n[r].toArray(o,a)}return o}function ie(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function ne(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function _s(n,t){let e=Ur[t];e===void 0&&(e=new Int32Array(t),Ur[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function yf(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function Af(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ie(e,t))return;n.uniform2fv(this.addr,t),ne(e,t)}}function Tf(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ie(e,t))return;n.uniform3fv(this.addr,t),ne(e,t)}}function Rf(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ie(e,t))return;n.uniform4fv(this.addr,t),ne(e,t)}}function wf(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(ie(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),ne(e,t)}else{if(ie(e,i))return;Pr.set(i),n.uniformMatrix2fv(this.addr,!1,Pr),ne(e,i)}}function Uf(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(ie(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),ne(e,t)}else{if(ie(e,i))return;Lr.set(i),n.uniformMatrix3fv(this.addr,!1,Lr),ne(e,i)}}function Cf(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(ie(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),ne(e,t)}else{if(ie(e,i))return;Cr.set(i),n.uniformMatrix4fv(this.addr,!1,Cr),ne(e,i)}}function Lf(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function Pf(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ie(e,t))return;n.uniform2iv(this.addr,t),ne(e,t)}}function kf(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ie(e,t))return;n.uniform3iv(this.addr,t),ne(e,t)}}function Df(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ie(e,t))return;n.uniform4iv(this.addr,t),ne(e,t)}}function If(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function Ff(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ie(e,t))return;n.uniform2uiv(this.addr,t),ne(e,t)}}function Of(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ie(e,t))return;n.uniform3uiv(this.addr,t),ne(e,t)}}function Nf(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ie(e,t))return;n.uniform4uiv(this.addr,t),ne(e,t)}}function Bf(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2D(t||Ra,s)}function Gf(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Ua,s)}function zf(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||Ca,s)}function Wf(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||wa,s)}function Hf(n){switch(n){case 5126:return yf;case 35664:return Af;case 35665:return Tf;case 35666:return Rf;case 35674:return wf;case 35675:return Uf;case 35676:return Cf;case 5124:case 35670:return Lf;case 35667:case 35671:return Pf;case 35668:case 35672:return kf;case 35669:case 35673:return Df;case 5125:return If;case 36294:return Ff;case 36295:return Of;case 36296:return Nf;case 35678:case 36198:case 36298:case 36306:case 35682:return Bf;case 35679:case 36299:case 36307:return Gf;case 35680:case 36300:case 36308:case 36293:return zf;case 36289:case 36303:case 36311:case 36292:return Wf}}function Vf(n,t){n.uniform1fv(this.addr,t)}function Xf(n,t){const e=pn(t,this.size,2);n.uniform2fv(this.addr,e)}function qf(n,t){const e=pn(t,this.size,3);n.uniform3fv(this.addr,e)}function Yf(n,t){const e=pn(t,this.size,4);n.uniform4fv(this.addr,e)}function jf(n,t){const e=pn(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Kf(n,t){const e=pn(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Zf(n,t){const e=pn(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function $f(n,t){n.uniform1iv(this.addr,t)}function Jf(n,t){n.uniform2iv(this.addr,t)}function Qf(n,t){n.uniform3iv(this.addr,t)}function td(n,t){n.uniform4iv(this.addr,t)}function ed(n,t){n.uniform1uiv(this.addr,t)}function id(n,t){n.uniform2uiv(this.addr,t)}function nd(n,t){n.uniform3uiv(this.addr,t)}function sd(n,t){n.uniform4uiv(this.addr,t)}function od(n,t,e){const i=this.cache,s=t.length,o=_s(e,s);ie(i,o)||(n.uniform1iv(this.addr,o),ne(i,o));for(let r=0;r!==s;++r)e.setTexture2D(t[r]||Ra,o[r])}function rd(n,t,e){const i=this.cache,s=t.length,o=_s(e,s);ie(i,o)||(n.uniform1iv(this.addr,o),ne(i,o));for(let r=0;r!==s;++r)e.setTexture3D(t[r]||Ua,o[r])}function ad(n,t,e){const i=this.cache,s=t.length,o=_s(e,s);ie(i,o)||(n.uniform1iv(this.addr,o),ne(i,o));for(let r=0;r!==s;++r)e.setTextureCube(t[r]||Ca,o[r])}function ld(n,t,e){const i=this.cache,s=t.length,o=_s(e,s);ie(i,o)||(n.uniform1iv(this.addr,o),ne(i,o));for(let r=0;r!==s;++r)e.setTexture2DArray(t[r]||wa,o[r])}function cd(n){switch(n){case 5126:return Vf;case 35664:return Xf;case 35665:return qf;case 35666:return Yf;case 35674:return jf;case 35675:return Kf;case 35676:return Zf;case 5124:case 35670:return $f;case 35667:case 35671:return Jf;case 35668:case 35672:return Qf;case 35669:case 35673:return td;case 5125:return ed;case 36294:return id;case 36295:return nd;case 36296:return sd;case 35678:case 36198:case 36298:case 36306:case 35682:return od;case 35679:case 36299:case 36307:return rd;case 35680:case 36300:case 36308:case 36293:return ad;case 36289:case 36303:case 36311:case 36292:return ld}}class hd{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.setValue=Hf(e.type)}}class ud{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.size=e.size,this.setValue=cd(e.type)}}class fd{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let o=0,r=s.length;o!==r;++o){const a=s[o];a.setValue(t,e[a.id],i)}}}const Ys=/(\w+)(\])?(\[|\.)?/g;function kr(n,t){n.seq.push(t),n.map[t.id]=t}function dd(n,t,e){const i=n.name,s=i.length;for(Ys.lastIndex=0;;){const o=Ys.exec(i),r=Ys.lastIndex;let a=o[1];const l=o[2]==="]",h=o[3];if(l&&(a=a|0),h===void 0||h==="["&&r+2===s){kr(e,h===void 0?new hd(a,n,t):new ud(a,n,t));break}else{let d=e.map[a];d===void 0&&(d=new fd(a),kr(e,d)),e=d}}}class ss{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const o=t.getActiveUniform(e,s),r=t.getUniformLocation(e,o.name);dd(o,r,this)}}setValue(t,e,i,s){const o=this.map[e];o!==void 0&&o.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let o=0,r=e.length;o!==r;++o){const a=e[o],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,o=t.length;s!==o;++s){const r=t[s];r.id in e&&i.push(r)}return i}}function Dr(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}let pd=0;function md(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let r=s;r<o;r++){const a=r+1;i.push(`${a===t?">":" "} ${a}: ${e[r]}`)}return i.join(`
`)}function _d(n){const t=Wt.getPrimaries(Wt.workingColorSpace),e=Wt.getPrimaries(n);let i;switch(t===e?i="":t===as&&e===rs?i="LinearDisplayP3ToLinearSRGB":t===rs&&e===as&&(i="LinearSRGBToLinearDisplayP3"),n){case $e:case fs:return[i,"LinearTransferOETF"];case le:case ho:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Ir(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const r=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+md(n.getShaderSource(t),r)}else return s}function gd(n,t){const e=_d(t);return`vec4 ${n}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function xd(n,t){let e;switch(t){case dl:e="Linear";break;case pl:e="Reinhard";break;case ml:e="OptimizedCineon";break;case _l:e="ACESFilmic";break;case gl:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function vd(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(bn).join(`
`)}function bd(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Md(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const o=n.getActiveAttrib(t,s),r=o.name;let a=1;o.type===n.FLOAT_MAT2&&(a=2),o.type===n.FLOAT_MAT3&&(a=3),o.type===n.FLOAT_MAT4&&(a=4),e[r]={type:o.type,location:n.getAttribLocation(t,r),locationSize:a}}return e}function bn(n){return n!==""}function Fr(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Or(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Sd=/^[ \t]*#include +<([\w\d./]+)>/gm;function oo(n){return n.replace(Sd,yd)}const Ed=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function yd(n,t){let e=Dt[t];if(e===void 0){const i=Ed.get(t);if(i!==void 0)e=Dt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return oo(e)}const Ad=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Nr(n){return n.replace(Ad,Td)}function Td(n,t,e,i){let s="";for(let o=parseInt(t);o<parseInt(e);o++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return s}function Br(n){let t="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Rd(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===na?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===Xa?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Ye&&(t="SHADOWMAP_TYPE_VSM"),t}function wd(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ln:case cn:t="ENVMAP_TYPE_CUBE";break;case us:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Ud(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case cn:t="ENVMAP_MODE_REFRACTION";break}return t}function Cd(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case ra:t="ENVMAP_BLENDING_MULTIPLY";break;case ul:t="ENVMAP_BLENDING_MIX";break;case fl:t="ENVMAP_BLENDING_ADD";break}return t}function Ld(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function Pd(n,t,e,i){const s=n.getContext(),o=e.defines;let r=e.vertexShader,a=e.fragmentShader;const l=Rd(e),h=wd(e),c=Ud(e),d=Cd(e),f=Ld(e),m=e.isWebGL2?"":vd(e),_=bd(o),x=s.createProgram();let p,u,A=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(bn).join(`
`),p.length>0&&(p+=`
`),u=[m,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(bn).join(`
`),u.length>0&&(u+=`
`)):(p=[Br(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(bn).join(`
`),u=[m,Br(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+c:"",e.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==li?"#define TONE_MAPPING":"",e.toneMapping!==li?Dt.tonemapping_pars_fragment:"",e.toneMapping!==li?xd("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Dt.colorspace_pars_fragment,gd("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(bn).join(`
`)),r=oo(r),r=Fr(r,e),r=Or(r,e),a=oo(a),a=Fr(a,e),a=Or(a,e),r=Nr(r),a=Nr(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,u=["#define varying in",e.glslVersion===nr?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===nr?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const v=A+p+r,E=A+u+a,y=Dr(s,s.VERTEX_SHADER,v),C=Dr(s,s.FRAGMENT_SHADER,E);if(s.attachShader(x,y),s.attachShader(x,C),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x),n.debug.checkShaderErrors){const b=s.getProgramInfoLog(x).trim(),R=s.getShaderInfoLog(y).trim(),V=s.getShaderInfoLog(C).trim();let Z=!0,J=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(Z=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,x,y,C);else{const P=Ir(s,y,"vertex"),z=Ir(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Program Info Log: `+b+`
`+P+`
`+z)}else b!==""?console.warn("THREE.WebGLProgram: Program Info Log:",b):(R===""||V==="")&&(J=!1);J&&(this.diagnostics={runnable:Z,programLog:b,vertexShader:{log:R,prefix:p},fragmentShader:{log:V,prefix:u}})}s.deleteShader(y),s.deleteShader(C);let w;this.getUniforms=function(){return w===void 0&&(w=new ss(s,x)),w};let W;return this.getAttributes=function(){return W===void 0&&(W=Md(s,x)),W},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=pd++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=y,this.fragmentShader=C,this}let kd=0;class Dd{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),o=this._getShaderStage(i),r=this._getShaderCacheForMaterial(t);return r.has(s)===!1&&(r.add(s),s.usedTimes++),r.has(o)===!1&&(r.add(o),o.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new Id(t),e.set(t,i)),i}}class Id{constructor(t){this.id=kd++,this.code=t,this.usedTimes=0}}function Fd(n,t,e,i,s,o,r){const a=new fo,l=new Dd,h=[],c=s.isWebGL2,d=s.logarithmicDepthBuffer,f=s.vertexTextures;let m=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(b){return b===0?"uv":`uv${b}`}function p(b,R,V,Z,J){const P=Z.fog,z=J.geometry,q=b.isMeshStandardMaterial?Z.environment:null,H=(b.isMeshStandardMaterial?e:t).get(b.envMap||q),nt=H&&H.mapping===us?H.image.height:null,K=_[b.type];b.precision!==null&&(m=s.getMaxPrecision(b.precision),m!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",m,"instead."));const Y=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,k=Y!==void 0?Y.length:0;let N=0;z.morphAttributes.position!==void 0&&(N=1),z.morphAttributes.normal!==void 0&&(N=2),z.morphAttributes.color!==void 0&&(N=3);let ct,ut,ft,St;if(K){const Xt=Fe[K];ct=Xt.vertexShader,ut=Xt.fragmentShader}else ct=b.vertexShader,ut=b.fragmentShader,l.update(b),ft=l.getVertexShaderID(b),St=l.getFragmentShaderID(b);const Ut=n.getRenderTarget(),vt=J.isInstancedMesh===!0,Gt=!!b.map,ae=!!b.matcap,Pt=!!H,I=!!b.aoMap,te=!!b.lightMap,bt=!!b.bumpMap,Ct=!!b.normalMap,Tt=!!b.displacementMap,Vt=!!b.emissiveMap,It=!!b.metalnessMap,Lt=!!b.roughnessMap,zt=b.anisotropy>0,ee=b.clearcoat>0,se=b.iridescence>0,S=b.sheen>0,g=b.transmission>0,O=zt&&!!b.anisotropyMap,Q=ee&&!!b.clearcoatMap,$=ee&&!!b.clearcoatNormalMap,tt=ee&&!!b.clearcoatRoughnessMap,_t=se&&!!b.iridescenceMap,st=se&&!!b.iridescenceThicknessMap,ht=S&&!!b.sheenColorMap,U=S&&!!b.sheenRoughnessMap,et=!!b.specularMap,X=!!b.specularColorMap,Et=!!b.specularIntensityMap,gt=g&&!!b.transmissionMap,xt=g&&!!b.thicknessMap,mt=!!b.gradientMap,T=!!b.alphaMap,ot=b.alphaTest>0,it=!!b.alphaHash,lt=!!b.extensions,rt=!!z.attributes.uv1,j=!!z.attributes.uv2,pt=!!z.attributes.uv3;let yt=li;return b.toneMapped&&(Ut===null||Ut.isXRRenderTarget===!0)&&(yt=n.toneMapping),{isWebGL2:c,shaderID:K,shaderType:b.type,shaderName:b.name,vertexShader:ct,fragmentShader:ut,defines:b.defines,customVertexShaderID:ft,customFragmentShaderID:St,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:m,instancing:vt,instancingColor:vt&&J.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:Ut===null?n.outputColorSpace:Ut.isXRRenderTarget===!0?Ut.texture.colorSpace:$e,map:Gt,matcap:ae,envMap:Pt,envMapMode:Pt&&H.mapping,envMapCubeUVHeight:nt,aoMap:I,lightMap:te,bumpMap:bt,normalMap:Ct,displacementMap:f&&Tt,emissiveMap:Vt,normalMapObjectSpace:Ct&&b.normalMapType===Ll,normalMapTangentSpace:Ct&&b.normalMapType===Cl,metalnessMap:It,roughnessMap:Lt,anisotropy:zt,anisotropyMap:O,clearcoat:ee,clearcoatMap:Q,clearcoatNormalMap:$,clearcoatRoughnessMap:tt,iridescence:se,iridescenceMap:_t,iridescenceThicknessMap:st,sheen:S,sheenColorMap:ht,sheenRoughnessMap:U,specularMap:et,specularColorMap:X,specularIntensityMap:Et,transmission:g,transmissionMap:gt,thicknessMap:xt,gradientMap:mt,opaque:b.transparent===!1&&b.blending===$i,alphaMap:T,alphaTest:ot,alphaHash:it,combine:b.combine,mapUv:Gt&&x(b.map.channel),aoMapUv:I&&x(b.aoMap.channel),lightMapUv:te&&x(b.lightMap.channel),bumpMapUv:bt&&x(b.bumpMap.channel),normalMapUv:Ct&&x(b.normalMap.channel),displacementMapUv:Tt&&x(b.displacementMap.channel),emissiveMapUv:Vt&&x(b.emissiveMap.channel),metalnessMapUv:It&&x(b.metalnessMap.channel),roughnessMapUv:Lt&&x(b.roughnessMap.channel),anisotropyMapUv:O&&x(b.anisotropyMap.channel),clearcoatMapUv:Q&&x(b.clearcoatMap.channel),clearcoatNormalMapUv:$&&x(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:tt&&x(b.clearcoatRoughnessMap.channel),iridescenceMapUv:_t&&x(b.iridescenceMap.channel),iridescenceThicknessMapUv:st&&x(b.iridescenceThicknessMap.channel),sheenColorMapUv:ht&&x(b.sheenColorMap.channel),sheenRoughnessMapUv:U&&x(b.sheenRoughnessMap.channel),specularMapUv:et&&x(b.specularMap.channel),specularColorMapUv:X&&x(b.specularColorMap.channel),specularIntensityMapUv:Et&&x(b.specularIntensityMap.channel),transmissionMapUv:gt&&x(b.transmissionMap.channel),thicknessMapUv:xt&&x(b.thicknessMap.channel),alphaMapUv:T&&x(b.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(Ct||zt),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,vertexUv1s:rt,vertexUv2s:j,vertexUv3s:pt,pointsUvs:J.isPoints===!0&&!!z.attributes.uv&&(Gt||T),fog:!!P,useFog:b.fog===!0,fogExp2:P&&P.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:J.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:k,morphTextureStride:N,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:b.dithering,shadowMapEnabled:n.shadowMap.enabled&&V.length>0,shadowMapType:n.shadowMap.type,toneMapping:yt,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Gt&&b.map.isVideoTexture===!0&&Wt.getTransfer(b.map.colorSpace)===qt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===xe,flipSided:b.side===ve,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionDerivatives:lt&&b.extensions.derivatives===!0,extensionFragDepth:lt&&b.extensions.fragDepth===!0,extensionDrawBuffers:lt&&b.extensions.drawBuffers===!0,extensionShaderTextureLOD:lt&&b.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:c||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:c||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:c||i.has("EXT_shader_texture_lod"),customProgramCacheKey:b.customProgramCacheKey()}}function u(b){const R=[];if(b.shaderID?R.push(b.shaderID):(R.push(b.customVertexShaderID),R.push(b.customFragmentShaderID)),b.defines!==void 0)for(const V in b.defines)R.push(V),R.push(b.defines[V]);return b.isRawShaderMaterial===!1&&(A(R,b),v(R,b),R.push(n.outputColorSpace)),R.push(b.customProgramCacheKey),R.join()}function A(b,R){b.push(R.precision),b.push(R.outputColorSpace),b.push(R.envMapMode),b.push(R.envMapCubeUVHeight),b.push(R.mapUv),b.push(R.alphaMapUv),b.push(R.lightMapUv),b.push(R.aoMapUv),b.push(R.bumpMapUv),b.push(R.normalMapUv),b.push(R.displacementMapUv),b.push(R.emissiveMapUv),b.push(R.metalnessMapUv),b.push(R.roughnessMapUv),b.push(R.anisotropyMapUv),b.push(R.clearcoatMapUv),b.push(R.clearcoatNormalMapUv),b.push(R.clearcoatRoughnessMapUv),b.push(R.iridescenceMapUv),b.push(R.iridescenceThicknessMapUv),b.push(R.sheenColorMapUv),b.push(R.sheenRoughnessMapUv),b.push(R.specularMapUv),b.push(R.specularColorMapUv),b.push(R.specularIntensityMapUv),b.push(R.transmissionMapUv),b.push(R.thicknessMapUv),b.push(R.combine),b.push(R.fogExp2),b.push(R.sizeAttenuation),b.push(R.morphTargetsCount),b.push(R.morphAttributeCount),b.push(R.numDirLights),b.push(R.numPointLights),b.push(R.numSpotLights),b.push(R.numSpotLightMaps),b.push(R.numHemiLights),b.push(R.numRectAreaLights),b.push(R.numDirLightShadows),b.push(R.numPointLightShadows),b.push(R.numSpotLightShadows),b.push(R.numSpotLightShadowsWithMaps),b.push(R.numLightProbes),b.push(R.shadowMapType),b.push(R.toneMapping),b.push(R.numClippingPlanes),b.push(R.numClipIntersection),b.push(R.depthPacking)}function v(b,R){a.disableAll(),R.isWebGL2&&a.enable(0),R.supportsVertexTextures&&a.enable(1),R.instancing&&a.enable(2),R.instancingColor&&a.enable(3),R.matcap&&a.enable(4),R.envMap&&a.enable(5),R.normalMapObjectSpace&&a.enable(6),R.normalMapTangentSpace&&a.enable(7),R.clearcoat&&a.enable(8),R.iridescence&&a.enable(9),R.alphaTest&&a.enable(10),R.vertexColors&&a.enable(11),R.vertexAlphas&&a.enable(12),R.vertexUv1s&&a.enable(13),R.vertexUv2s&&a.enable(14),R.vertexUv3s&&a.enable(15),R.vertexTangents&&a.enable(16),R.anisotropy&&a.enable(17),b.push(a.mask),a.disableAll(),R.fog&&a.enable(0),R.useFog&&a.enable(1),R.flatShading&&a.enable(2),R.logarithmicDepthBuffer&&a.enable(3),R.skinning&&a.enable(4),R.morphTargets&&a.enable(5),R.morphNormals&&a.enable(6),R.morphColors&&a.enable(7),R.premultipliedAlpha&&a.enable(8),R.shadowMapEnabled&&a.enable(9),R.useLegacyLights&&a.enable(10),R.doubleSided&&a.enable(11),R.flipSided&&a.enable(12),R.useDepthPacking&&a.enable(13),R.dithering&&a.enable(14),R.transmission&&a.enable(15),R.sheen&&a.enable(16),R.opaque&&a.enable(17),R.pointsUvs&&a.enable(18),R.decodeVideoTexture&&a.enable(19),b.push(a.mask)}function E(b){const R=_[b.type];let V;if(R){const Z=Fe[R];V=bc.clone(Z.uniforms)}else V=b.uniforms;return V}function y(b,R){let V;for(let Z=0,J=h.length;Z<J;Z++){const P=h[Z];if(P.cacheKey===R){V=P,++V.usedTimes;break}}return V===void 0&&(V=new Pd(n,R,b,o),h.push(V)),V}function C(b){if(--b.usedTimes===0){const R=h.indexOf(b);h[R]=h[h.length-1],h.pop(),b.destroy()}}function w(b){l.remove(b)}function W(){l.dispose()}return{getParameters:p,getProgramCacheKey:u,getUniforms:E,acquireProgram:y,releaseProgram:C,releaseShaderCache:w,programs:h,dispose:W}}function Od(){let n=new WeakMap;function t(o){let r=n.get(o);return r===void 0&&(r={},n.set(o,r)),r}function e(o){n.delete(o)}function i(o,r,a){n.get(o)[r]=a}function s(){n=new WeakMap}return{get:t,remove:e,update:i,dispose:s}}function Nd(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Gr(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function zr(){const n=[];let t=0;const e=[],i=[],s=[];function o(){t=0,e.length=0,i.length=0,s.length=0}function r(d,f,m,_,x,p){let u=n[t];return u===void 0?(u={id:d.id,object:d,geometry:f,material:m,groupOrder:_,renderOrder:d.renderOrder,z:x,group:p},n[t]=u):(u.id=d.id,u.object=d,u.geometry=f,u.material=m,u.groupOrder=_,u.renderOrder=d.renderOrder,u.z=x,u.group=p),t++,u}function a(d,f,m,_,x,p){const u=r(d,f,m,_,x,p);m.transmission>0?i.push(u):m.transparent===!0?s.push(u):e.push(u)}function l(d,f,m,_,x,p){const u=r(d,f,m,_,x,p);m.transmission>0?i.unshift(u):m.transparent===!0?s.unshift(u):e.unshift(u)}function h(d,f){e.length>1&&e.sort(d||Nd),i.length>1&&i.sort(f||Gr),s.length>1&&s.sort(f||Gr)}function c(){for(let d=t,f=n.length;d<f;d++){const m=n[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:i,transparent:s,init:o,push:a,unshift:l,finish:c,sort:h}}function Bd(){let n=new WeakMap;function t(i,s){const o=n.get(i);let r;return o===void 0?(r=new zr,n.set(i,[r])):s>=o.length?(r=new zr,o.push(r)):r=o[s],r}function e(){n=new WeakMap}return{get:t,dispose:e}}function Gd(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new Ht};break;case"SpotLight":e={position:new L,direction:new L,color:new Ht,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new Ht,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new Ht,groundColor:new Ht};break;case"RectAreaLight":e={color:new Ht,position:new L,halfWidth:new L,halfHeight:new L};break}return n[t.id]=e,e}}}function zd(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let Wd=0;function Hd(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function Vd(n,t){const e=new Gd,i=zd(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)s.probe.push(new L);const o=new L,r=new re,a=new re;function l(c,d){let f=0,m=0,_=0;for(let Z=0;Z<9;Z++)s.probe[Z].set(0,0,0);let x=0,p=0,u=0,A=0,v=0,E=0,y=0,C=0,w=0,W=0,b=0;c.sort(Hd);const R=d===!0?Math.PI:1;for(let Z=0,J=c.length;Z<J;Z++){const P=c[Z],z=P.color,q=P.intensity,H=P.distance,nt=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)f+=z.r*q*R,m+=z.g*q*R,_+=z.b*q*R;else if(P.isLightProbe){for(let K=0;K<9;K++)s.probe[K].addScaledVector(P.sh.coefficients[K],q);b++}else if(P.isDirectionalLight){const K=e.get(P);if(K.color.copy(P.color).multiplyScalar(P.intensity*R),P.castShadow){const Y=P.shadow,k=i.get(P);k.shadowBias=Y.bias,k.shadowNormalBias=Y.normalBias,k.shadowRadius=Y.radius,k.shadowMapSize=Y.mapSize,s.directionalShadow[x]=k,s.directionalShadowMap[x]=nt,s.directionalShadowMatrix[x]=P.shadow.matrix,E++}s.directional[x]=K,x++}else if(P.isSpotLight){const K=e.get(P);K.position.setFromMatrixPosition(P.matrixWorld),K.color.copy(z).multiplyScalar(q*R),K.distance=H,K.coneCos=Math.cos(P.angle),K.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),K.decay=P.decay,s.spot[u]=K;const Y=P.shadow;if(P.map&&(s.spotLightMap[w]=P.map,w++,Y.updateMatrices(P),P.castShadow&&W++),s.spotLightMatrix[u]=Y.matrix,P.castShadow){const k=i.get(P);k.shadowBias=Y.bias,k.shadowNormalBias=Y.normalBias,k.shadowRadius=Y.radius,k.shadowMapSize=Y.mapSize,s.spotShadow[u]=k,s.spotShadowMap[u]=nt,C++}u++}else if(P.isRectAreaLight){const K=e.get(P);K.color.copy(z).multiplyScalar(q),K.halfWidth.set(P.width*.5,0,0),K.halfHeight.set(0,P.height*.5,0),s.rectArea[A]=K,A++}else if(P.isPointLight){const K=e.get(P);if(K.color.copy(P.color).multiplyScalar(P.intensity*R),K.distance=P.distance,K.decay=P.decay,P.castShadow){const Y=P.shadow,k=i.get(P);k.shadowBias=Y.bias,k.shadowNormalBias=Y.normalBias,k.shadowRadius=Y.radius,k.shadowMapSize=Y.mapSize,k.shadowCameraNear=Y.camera.near,k.shadowCameraFar=Y.camera.far,s.pointShadow[p]=k,s.pointShadowMap[p]=nt,s.pointShadowMatrix[p]=P.shadow.matrix,y++}s.point[p]=K,p++}else if(P.isHemisphereLight){const K=e.get(P);K.skyColor.copy(P.color).multiplyScalar(q*R),K.groundColor.copy(P.groundColor).multiplyScalar(q*R),s.hemi[v]=K,v++}}A>0&&(t.isWebGL2||n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=at.LTC_FLOAT_1,s.rectAreaLTC2=at.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=at.LTC_HALF_1,s.rectAreaLTC2=at.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=f,s.ambient[1]=m,s.ambient[2]=_;const V=s.hash;(V.directionalLength!==x||V.pointLength!==p||V.spotLength!==u||V.rectAreaLength!==A||V.hemiLength!==v||V.numDirectionalShadows!==E||V.numPointShadows!==y||V.numSpotShadows!==C||V.numSpotMaps!==w||V.numLightProbes!==b)&&(s.directional.length=x,s.spot.length=u,s.rectArea.length=A,s.point.length=p,s.hemi.length=v,s.directionalShadow.length=E,s.directionalShadowMap.length=E,s.pointShadow.length=y,s.pointShadowMap.length=y,s.spotShadow.length=C,s.spotShadowMap.length=C,s.directionalShadowMatrix.length=E,s.pointShadowMatrix.length=y,s.spotLightMatrix.length=C+w-W,s.spotLightMap.length=w,s.numSpotLightShadowsWithMaps=W,s.numLightProbes=b,V.directionalLength=x,V.pointLength=p,V.spotLength=u,V.rectAreaLength=A,V.hemiLength=v,V.numDirectionalShadows=E,V.numPointShadows=y,V.numSpotShadows=C,V.numSpotMaps=w,V.numLightProbes=b,s.version=Wd++)}function h(c,d){let f=0,m=0,_=0,x=0,p=0;const u=d.matrixWorldInverse;for(let A=0,v=c.length;A<v;A++){const E=c[A];if(E.isDirectionalLight){const y=s.directional[f];y.direction.setFromMatrixPosition(E.matrixWorld),o.setFromMatrixPosition(E.target.matrixWorld),y.direction.sub(o),y.direction.transformDirection(u),f++}else if(E.isSpotLight){const y=s.spot[_];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(u),y.direction.setFromMatrixPosition(E.matrixWorld),o.setFromMatrixPosition(E.target.matrixWorld),y.direction.sub(o),y.direction.transformDirection(u),_++}else if(E.isRectAreaLight){const y=s.rectArea[x];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(u),a.identity(),r.copy(E.matrixWorld),r.premultiply(u),a.extractRotation(r),y.halfWidth.set(E.width*.5,0,0),y.halfHeight.set(0,E.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),x++}else if(E.isPointLight){const y=s.point[m];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(u),m++}else if(E.isHemisphereLight){const y=s.hemi[p];y.direction.setFromMatrixPosition(E.matrixWorld),y.direction.transformDirection(u),p++}}}return{setup:l,setupView:h,state:s}}function Wr(n,t){const e=new Vd(n,t),i=[],s=[];function o(){i.length=0,s.length=0}function r(d){i.push(d)}function a(d){s.push(d)}function l(d){e.setup(i,d)}function h(d){e.setupView(i,d)}return{init:o,state:{lightsArray:i,shadowsArray:s,lights:e},setupLights:l,setupLightsView:h,pushLight:r,pushShadow:a}}function Xd(n,t){let e=new WeakMap;function i(o,r=0){const a=e.get(o);let l;return a===void 0?(l=new Wr(n,t),e.set(o,[l])):r>=a.length?(l=new Wr(n,t),a.push(l)):l=a[r],l}function s(){e=new WeakMap}return{get:i,dispose:s}}class qd extends wn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=wl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Yd extends wn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const jd=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Kd=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Zd(n,t,e){let i=new Aa;const s=new Ot,o=new Ot,r=new ce,a=new qd({depthPacking:Ul}),l=new Yd,h={},c=e.maxTextureSize,d={[hi]:ve,[ve]:hi,[xe]:xe},f=new Ai({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ot},radius:{value:4}},vertexShader:jd,fragmentShader:Kd}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const _=new Je;_.setAttribute("position",new Oe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Ze(_,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=na;let u=this.type;this.render=function(y,C,w){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||y.length===0)return;const W=n.getRenderTarget(),b=n.getActiveCubeFace(),R=n.getActiveMipmapLevel(),V=n.state;V.setBlending(ai),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const Z=u!==Ye&&this.type===Ye,J=u===Ye&&this.type!==Ye;for(let P=0,z=y.length;P<z;P++){const q=y[P],H=q.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);const nt=H.getFrameExtents();if(s.multiply(nt),o.copy(H.mapSize),(s.x>c||s.y>c)&&(s.x>c&&(o.x=Math.floor(c/nt.x),s.x=o.x*nt.x,H.mapSize.x=o.x),s.y>c&&(o.y=Math.floor(c/nt.y),s.y=o.y*nt.y,H.mapSize.y=o.y)),H.map===null||Z===!0||J===!0){const Y=this.type!==Ye?{minFilter:ge,magFilter:ge}:{};H.map!==null&&H.map.dispose(),H.map=new Ei(s.x,s.y,Y),H.map.texture.name=q.name+".shadowMap",H.camera.updateProjectionMatrix()}n.setRenderTarget(H.map),n.clear();const K=H.getViewportCount();for(let Y=0;Y<K;Y++){const k=H.getViewport(Y);r.set(o.x*k.x,o.y*k.y,o.x*k.z,o.y*k.w),V.viewport(r),H.updateMatrices(q,Y),i=H.getFrustum(),E(C,w,H.camera,q,this.type)}H.isPointLightShadow!==!0&&this.type===Ye&&A(H,w),H.needsUpdate=!1}u=this.type,p.needsUpdate=!1,n.setRenderTarget(W,b,R)};function A(y,C){const w=t.update(x);f.defines.VSM_SAMPLES!==y.blurSamples&&(f.defines.VSM_SAMPLES=y.blurSamples,m.defines.VSM_SAMPLES=y.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),y.mapPass===null&&(y.mapPass=new Ei(s.x,s.y)),f.uniforms.shadow_pass.value=y.map.texture,f.uniforms.resolution.value=y.mapSize,f.uniforms.radius.value=y.radius,n.setRenderTarget(y.mapPass),n.clear(),n.renderBufferDirect(C,null,w,f,x,null),m.uniforms.shadow_pass.value=y.mapPass.texture,m.uniforms.resolution.value=y.mapSize,m.uniforms.radius.value=y.radius,n.setRenderTarget(y.map),n.clear(),n.renderBufferDirect(C,null,w,m,x,null)}function v(y,C,w,W){let b=null;const R=w.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(R!==void 0)b=R;else if(b=w.isPointLight===!0?l:a,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const V=b.uuid,Z=C.uuid;let J=h[V];J===void 0&&(J={},h[V]=J);let P=J[Z];P===void 0&&(P=b.clone(),J[Z]=P),b=P}if(b.visible=C.visible,b.wireframe=C.wireframe,W===Ye?b.side=C.shadowSide!==null?C.shadowSide:C.side:b.side=C.shadowSide!==null?C.shadowSide:d[C.side],b.alphaMap=C.alphaMap,b.alphaTest=C.alphaTest,b.map=C.map,b.clipShadows=C.clipShadows,b.clippingPlanes=C.clippingPlanes,b.clipIntersection=C.clipIntersection,b.displacementMap=C.displacementMap,b.displacementScale=C.displacementScale,b.displacementBias=C.displacementBias,b.wireframeLinewidth=C.wireframeLinewidth,b.linewidth=C.linewidth,w.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const V=n.properties.get(b);V.light=w}return b}function E(y,C,w,W,b){if(y.visible===!1)return;if(y.layers.test(C.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&b===Ye)&&(!y.frustumCulled||i.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,y.matrixWorld);const Z=t.update(y),J=y.material;if(Array.isArray(J)){const P=Z.groups;for(let z=0,q=P.length;z<q;z++){const H=P[z],nt=J[H.materialIndex];if(nt&&nt.visible){const K=v(y,nt,W,b);n.renderBufferDirect(w,null,Z,K,y,H)}}}else if(J.visible){const P=v(y,J,W,b);n.renderBufferDirect(w,null,Z,P,y,null)}}const V=y.children;for(let Z=0,J=V.length;Z<J;Z++)E(V[Z],C,w,W,b)}}function $d(n,t,e){const i=e.isWebGL2;function s(){let T=!1;const ot=new ce;let it=null;const lt=new ce(0,0,0,0);return{setMask:function(rt){it!==rt&&!T&&(n.colorMask(rt,rt,rt,rt),it=rt)},setLocked:function(rt){T=rt},setClear:function(rt,j,pt,yt,Zt){Zt===!0&&(rt*=yt,j*=yt,pt*=yt),ot.set(rt,j,pt,yt),lt.equals(ot)===!1&&(n.clearColor(rt,j,pt,yt),lt.copy(ot))},reset:function(){T=!1,it=null,lt.set(-1,0,0,0)}}}function o(){let T=!1,ot=null,it=null,lt=null;return{setTest:function(rt){rt?Ut(n.DEPTH_TEST):vt(n.DEPTH_TEST)},setMask:function(rt){ot!==rt&&!T&&(n.depthMask(rt),ot=rt)},setFunc:function(rt){if(it!==rt){switch(rt){case sl:n.depthFunc(n.NEVER);break;case ol:n.depthFunc(n.ALWAYS);break;case rl:n.depthFunc(n.LESS);break;case Js:n.depthFunc(n.LEQUAL);break;case al:n.depthFunc(n.EQUAL);break;case ll:n.depthFunc(n.GEQUAL);break;case cl:n.depthFunc(n.GREATER);break;case hl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}it=rt}},setLocked:function(rt){T=rt},setClear:function(rt){lt!==rt&&(n.clearDepth(rt),lt=rt)},reset:function(){T=!1,ot=null,it=null,lt=null}}}function r(){let T=!1,ot=null,it=null,lt=null,rt=null,j=null,pt=null,yt=null,Zt=null;return{setTest:function(Xt){T||(Xt?Ut(n.STENCIL_TEST):vt(n.STENCIL_TEST))},setMask:function(Xt){ot!==Xt&&!T&&(n.stencilMask(Xt),ot=Xt)},setFunc:function(Xt,Ie,de){(it!==Xt||lt!==Ie||rt!==de)&&(n.stencilFunc(Xt,Ie,de),it=Xt,lt=Ie,rt=de)},setOp:function(Xt,Ie,de){(j!==Xt||pt!==Ie||yt!==de)&&(n.stencilOp(Xt,Ie,de),j=Xt,pt=Ie,yt=de)},setLocked:function(Xt){T=Xt},setClear:function(Xt){Zt!==Xt&&(n.clearStencil(Xt),Zt=Xt)},reset:function(){T=!1,ot=null,it=null,lt=null,rt=null,j=null,pt=null,yt=null,Zt=null}}}const a=new s,l=new o,h=new r,c=new WeakMap,d=new WeakMap;let f={},m={},_=new WeakMap,x=[],p=null,u=!1,A=null,v=null,E=null,y=null,C=null,w=null,W=null,b=!1,R=null,V=null,Z=null,J=null,P=null;const z=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,H=0;const nt=n.getParameter(n.VERSION);nt.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(nt)[1]),q=H>=1):nt.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(nt)[1]),q=H>=2);let K=null,Y={};const k=n.getParameter(n.SCISSOR_BOX),N=n.getParameter(n.VIEWPORT),ct=new ce().fromArray(k),ut=new ce().fromArray(N);function ft(T,ot,it,lt){const rt=new Uint8Array(4),j=n.createTexture();n.bindTexture(T,j),n.texParameteri(T,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(T,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let pt=0;pt<it;pt++)i&&(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)?n.texImage3D(ot,0,n.RGBA,1,1,lt,0,n.RGBA,n.UNSIGNED_BYTE,rt):n.texImage2D(ot+pt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,rt);return j}const St={};St[n.TEXTURE_2D]=ft(n.TEXTURE_2D,n.TEXTURE_2D,1),St[n.TEXTURE_CUBE_MAP]=ft(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(St[n.TEXTURE_2D_ARRAY]=ft(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),St[n.TEXTURE_3D]=ft(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),h.setClear(0),Ut(n.DEPTH_TEST),l.setFunc(Js),Tt(!1),Vt(yo),Ut(n.CULL_FACE),bt(ai);function Ut(T){f[T]!==!0&&(n.enable(T),f[T]=!0)}function vt(T){f[T]!==!1&&(n.disable(T),f[T]=!1)}function Gt(T,ot){return m[T]!==ot?(n.bindFramebuffer(T,ot),m[T]=ot,i&&(T===n.DRAW_FRAMEBUFFER&&(m[n.FRAMEBUFFER]=ot),T===n.FRAMEBUFFER&&(m[n.DRAW_FRAMEBUFFER]=ot)),!0):!1}function ae(T,ot){let it=x,lt=!1;if(T)if(it=_.get(ot),it===void 0&&(it=[],_.set(ot,it)),T.isWebGLMultipleRenderTargets){const rt=T.texture;if(it.length!==rt.length||it[0]!==n.COLOR_ATTACHMENT0){for(let j=0,pt=rt.length;j<pt;j++)it[j]=n.COLOR_ATTACHMENT0+j;it.length=rt.length,lt=!0}}else it[0]!==n.COLOR_ATTACHMENT0&&(it[0]=n.COLOR_ATTACHMENT0,lt=!0);else it[0]!==n.BACK&&(it[0]=n.BACK,lt=!0);lt&&(e.isWebGL2?n.drawBuffers(it):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(it))}function Pt(T){return p!==T?(n.useProgram(T),p=T,!0):!1}const I={[qi]:n.FUNC_ADD,[Ya]:n.FUNC_SUBTRACT,[ja]:n.FUNC_REVERSE_SUBTRACT};if(i)I[wo]=n.MIN,I[Uo]=n.MAX;else{const T=t.get("EXT_blend_minmax");T!==null&&(I[wo]=T.MIN_EXT,I[Uo]=T.MAX_EXT)}const te={[Ka]:n.ZERO,[Za]:n.ONE,[$a]:n.SRC_COLOR,[sa]:n.SRC_ALPHA,[nl]:n.SRC_ALPHA_SATURATE,[el]:n.DST_COLOR,[Qa]:n.DST_ALPHA,[Ja]:n.ONE_MINUS_SRC_COLOR,[oa]:n.ONE_MINUS_SRC_ALPHA,[il]:n.ONE_MINUS_DST_COLOR,[tl]:n.ONE_MINUS_DST_ALPHA};function bt(T,ot,it,lt,rt,j,pt,yt){if(T===ai){u===!0&&(vt(n.BLEND),u=!1);return}if(u===!1&&(Ut(n.BLEND),u=!0),T!==qa){if(T!==A||yt!==b){if((v!==qi||C!==qi)&&(n.blendEquation(n.FUNC_ADD),v=qi,C=qi),yt)switch(T){case $i:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ao:n.blendFunc(n.ONE,n.ONE);break;case To:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ro:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",T);break}else switch(T){case $i:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ao:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case To:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ro:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",T);break}E=null,y=null,w=null,W=null,A=T,b=yt}return}rt=rt||ot,j=j||it,pt=pt||lt,(ot!==v||rt!==C)&&(n.blendEquationSeparate(I[ot],I[rt]),v=ot,C=rt),(it!==E||lt!==y||j!==w||pt!==W)&&(n.blendFuncSeparate(te[it],te[lt],te[j],te[pt]),E=it,y=lt,w=j,W=pt),A=T,b=!1}function Ct(T,ot){T.side===xe?vt(n.CULL_FACE):Ut(n.CULL_FACE);let it=T.side===ve;ot&&(it=!it),Tt(it),T.blending===$i&&T.transparent===!1?bt(ai):bt(T.blending,T.blendEquation,T.blendSrc,T.blendDst,T.blendEquationAlpha,T.blendSrcAlpha,T.blendDstAlpha,T.premultipliedAlpha),l.setFunc(T.depthFunc),l.setTest(T.depthTest),l.setMask(T.depthWrite),a.setMask(T.colorWrite);const lt=T.stencilWrite;h.setTest(lt),lt&&(h.setMask(T.stencilWriteMask),h.setFunc(T.stencilFunc,T.stencilRef,T.stencilFuncMask),h.setOp(T.stencilFail,T.stencilZFail,T.stencilZPass)),Lt(T.polygonOffset,T.polygonOffsetFactor,T.polygonOffsetUnits),T.alphaToCoverage===!0?Ut(n.SAMPLE_ALPHA_TO_COVERAGE):vt(n.SAMPLE_ALPHA_TO_COVERAGE)}function Tt(T){R!==T&&(T?n.frontFace(n.CW):n.frontFace(n.CCW),R=T)}function Vt(T){T!==Ha?(Ut(n.CULL_FACE),T!==V&&(T===yo?n.cullFace(n.BACK):T===Va?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):vt(n.CULL_FACE),V=T}function It(T){T!==Z&&(q&&n.lineWidth(T),Z=T)}function Lt(T,ot,it){T?(Ut(n.POLYGON_OFFSET_FILL),(J!==ot||P!==it)&&(n.polygonOffset(ot,it),J=ot,P=it)):vt(n.POLYGON_OFFSET_FILL)}function zt(T){T?Ut(n.SCISSOR_TEST):vt(n.SCISSOR_TEST)}function ee(T){T===void 0&&(T=n.TEXTURE0+z-1),K!==T&&(n.activeTexture(T),K=T)}function se(T,ot,it){it===void 0&&(K===null?it=n.TEXTURE0+z-1:it=K);let lt=Y[it];lt===void 0&&(lt={type:void 0,texture:void 0},Y[it]=lt),(lt.type!==T||lt.texture!==ot)&&(K!==it&&(n.activeTexture(it),K=it),n.bindTexture(T,ot||St[T]),lt.type=T,lt.texture=ot)}function S(){const T=Y[K];T!==void 0&&T.type!==void 0&&(n.bindTexture(T.type,null),T.type=void 0,T.texture=void 0)}function g(){try{n.compressedTexImage2D.apply(n,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function O(){try{n.compressedTexImage3D.apply(n,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function Q(){try{n.texSubImage2D.apply(n,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function $(){try{n.texSubImage3D.apply(n,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function tt(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function _t(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function st(){try{n.texStorage2D.apply(n,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function ht(){try{n.texStorage3D.apply(n,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function U(){try{n.texImage2D.apply(n,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function et(){try{n.texImage3D.apply(n,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function X(T){ct.equals(T)===!1&&(n.scissor(T.x,T.y,T.z,T.w),ct.copy(T))}function Et(T){ut.equals(T)===!1&&(n.viewport(T.x,T.y,T.z,T.w),ut.copy(T))}function gt(T,ot){let it=d.get(ot);it===void 0&&(it=new WeakMap,d.set(ot,it));let lt=it.get(T);lt===void 0&&(lt=n.getUniformBlockIndex(ot,T.name),it.set(T,lt))}function xt(T,ot){const lt=d.get(ot).get(T);c.get(ot)!==lt&&(n.uniformBlockBinding(ot,lt,T.__bindingPointIndex),c.set(ot,lt))}function mt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),f={},K=null,Y={},m={},_=new WeakMap,x=[],p=null,u=!1,A=null,v=null,E=null,y=null,C=null,w=null,W=null,b=!1,R=null,V=null,Z=null,J=null,P=null,ct.set(0,0,n.canvas.width,n.canvas.height),ut.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),h.reset()}return{buffers:{color:a,depth:l,stencil:h},enable:Ut,disable:vt,bindFramebuffer:Gt,drawBuffers:ae,useProgram:Pt,setBlending:bt,setMaterial:Ct,setFlipSided:Tt,setCullFace:Vt,setLineWidth:It,setPolygonOffset:Lt,setScissorTest:zt,activeTexture:ee,bindTexture:se,unbindTexture:S,compressedTexImage2D:g,compressedTexImage3D:O,texImage2D:U,texImage3D:et,updateUBOMapping:gt,uniformBlockBinding:xt,texStorage2D:st,texStorage3D:ht,texSubImage2D:Q,texSubImage3D:$,compressedTexSubImage2D:tt,compressedTexSubImage3D:_t,scissor:X,viewport:Et,reset:mt}}function Jd(n,t,e,i,s,o,r){const a=s.isWebGL2,l=s.maxTextures,h=s.maxCubemapSize,c=s.maxTextureSize,d=s.maxSamples,f=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap;let x;const p=new WeakMap;let u=!1;try{u=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(S,g){return u?new OffscreenCanvas(S,g):hs("canvas")}function v(S,g,O,Q){let $=1;if((S.width>Q||S.height>Q)&&($=Q/Math.max(S.width,S.height)),$<1||g===!0)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap){const tt=g?cs:Math.floor,_t=tt($*S.width),st=tt($*S.height);x===void 0&&(x=A(_t,st));const ht=O?A(_t,st):x;return ht.width=_t,ht.height=st,ht.getContext("2d").drawImage(S,0,0,_t,st),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+S.width+"x"+S.height+") to ("+_t+"x"+st+")."),ht}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+S.width+"x"+S.height+")."),S;return S}function E(S){return so(S.width)&&so(S.height)}function y(S){return a?!1:S.wrapS!==ke||S.wrapT!==ke||S.minFilter!==ge&&S.minFilter!==Re}function C(S,g){return S.generateMipmaps&&g&&S.minFilter!==ge&&S.minFilter!==Re}function w(S){n.generateMipmap(S)}function W(S,g,O,Q,$=!1){if(a===!1)return g;if(S!==null){if(n[S]!==void 0)return n[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let tt=g;if(g===n.RED&&(O===n.FLOAT&&(tt=n.R32F),O===n.HALF_FLOAT&&(tt=n.R16F),O===n.UNSIGNED_BYTE&&(tt=n.R8)),g===n.RED_INTEGER&&(O===n.UNSIGNED_BYTE&&(tt=n.R8UI),O===n.UNSIGNED_SHORT&&(tt=n.R16UI),O===n.UNSIGNED_INT&&(tt=n.R32UI),O===n.BYTE&&(tt=n.R8I),O===n.SHORT&&(tt=n.R16I),O===n.INT&&(tt=n.R32I)),g===n.RG&&(O===n.FLOAT&&(tt=n.RG32F),O===n.HALF_FLOAT&&(tt=n.RG16F),O===n.UNSIGNED_BYTE&&(tt=n.RG8)),g===n.RGBA){const _t=$?os:Wt.getTransfer(Q);O===n.FLOAT&&(tt=n.RGBA32F),O===n.HALF_FLOAT&&(tt=n.RGBA16F),O===n.UNSIGNED_BYTE&&(tt=_t===qt?n.SRGB8_ALPHA8:n.RGBA8),O===n.UNSIGNED_SHORT_4_4_4_4&&(tt=n.RGBA4),O===n.UNSIGNED_SHORT_5_5_5_1&&(tt=n.RGB5_A1)}return(tt===n.R16F||tt===n.R32F||tt===n.RG16F||tt===n.RG32F||tt===n.RGBA16F||tt===n.RGBA32F)&&t.get("EXT_color_buffer_float"),tt}function b(S,g,O){return C(S,O)===!0||S.isFramebufferTexture&&S.minFilter!==ge&&S.minFilter!==Re?Math.log2(Math.max(g.width,g.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?g.mipmaps.length:1}function R(S){return S===ge||S===Co||S===Ms?n.NEAREST:n.LINEAR}function V(S){const g=S.target;g.removeEventListener("dispose",V),J(g),g.isVideoTexture&&_.delete(g)}function Z(S){const g=S.target;g.removeEventListener("dispose",Z),z(g)}function J(S){const g=i.get(S);if(g.__webglInit===void 0)return;const O=S.source,Q=p.get(O);if(Q){const $=Q[g.__cacheKey];$.usedTimes--,$.usedTimes===0&&P(S),Object.keys(Q).length===0&&p.delete(O)}i.remove(S)}function P(S){const g=i.get(S);n.deleteTexture(g.__webglTexture);const O=S.source,Q=p.get(O);delete Q[g.__cacheKey],r.memory.textures--}function z(S){const g=S.texture,O=i.get(S),Q=i.get(g);if(Q.__webglTexture!==void 0&&(n.deleteTexture(Q.__webglTexture),r.memory.textures--),S.depthTexture&&S.depthTexture.dispose(),S.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(O.__webglFramebuffer[$]))for(let tt=0;tt<O.__webglFramebuffer[$].length;tt++)n.deleteFramebuffer(O.__webglFramebuffer[$][tt]);else n.deleteFramebuffer(O.__webglFramebuffer[$]);O.__webglDepthbuffer&&n.deleteRenderbuffer(O.__webglDepthbuffer[$])}else{if(Array.isArray(O.__webglFramebuffer))for(let $=0;$<O.__webglFramebuffer.length;$++)n.deleteFramebuffer(O.__webglFramebuffer[$]);else n.deleteFramebuffer(O.__webglFramebuffer);if(O.__webglDepthbuffer&&n.deleteRenderbuffer(O.__webglDepthbuffer),O.__webglMultisampledFramebuffer&&n.deleteFramebuffer(O.__webglMultisampledFramebuffer),O.__webglColorRenderbuffer)for(let $=0;$<O.__webglColorRenderbuffer.length;$++)O.__webglColorRenderbuffer[$]&&n.deleteRenderbuffer(O.__webglColorRenderbuffer[$]);O.__webglDepthRenderbuffer&&n.deleteRenderbuffer(O.__webglDepthRenderbuffer)}if(S.isWebGLMultipleRenderTargets)for(let $=0,tt=g.length;$<tt;$++){const _t=i.get(g[$]);_t.__webglTexture&&(n.deleteTexture(_t.__webglTexture),r.memory.textures--),i.remove(g[$])}i.remove(g),i.remove(S)}let q=0;function H(){q=0}function nt(){const S=q;return S>=l&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+l),q+=1,S}function K(S){const g=[];return g.push(S.wrapS),g.push(S.wrapT),g.push(S.wrapR||0),g.push(S.magFilter),g.push(S.minFilter),g.push(S.anisotropy),g.push(S.internalFormat),g.push(S.format),g.push(S.type),g.push(S.generateMipmaps),g.push(S.premultiplyAlpha),g.push(S.flipY),g.push(S.unpackAlignment),g.push(S.colorSpace),g.join()}function Y(S,g){const O=i.get(S);if(S.isVideoTexture&&ee(S),S.isRenderTargetTexture===!1&&S.version>0&&O.__version!==S.version){const Q=S.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Gt(O,S,g);return}}e.bindTexture(n.TEXTURE_2D,O.__webglTexture,n.TEXTURE0+g)}function k(S,g){const O=i.get(S);if(S.version>0&&O.__version!==S.version){Gt(O,S,g);return}e.bindTexture(n.TEXTURE_2D_ARRAY,O.__webglTexture,n.TEXTURE0+g)}function N(S,g){const O=i.get(S);if(S.version>0&&O.__version!==S.version){Gt(O,S,g);return}e.bindTexture(n.TEXTURE_3D,O.__webglTexture,n.TEXTURE0+g)}function ct(S,g){const O=i.get(S);if(S.version>0&&O.__version!==S.version){ae(O,S,g);return}e.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture,n.TEXTURE0+g)}const ut={[eo]:n.REPEAT,[ke]:n.CLAMP_TO_EDGE,[io]:n.MIRRORED_REPEAT},ft={[ge]:n.NEAREST,[Co]:n.NEAREST_MIPMAP_NEAREST,[Ms]:n.NEAREST_MIPMAP_LINEAR,[Re]:n.LINEAR,[xl]:n.LINEAR_MIPMAP_NEAREST,[yn]:n.LINEAR_MIPMAP_LINEAR},St={[kl]:n.NEVER,[Gl]:n.ALWAYS,[Dl]:n.LESS,[Fl]:n.LEQUAL,[Il]:n.EQUAL,[Bl]:n.GEQUAL,[Ol]:n.GREATER,[Nl]:n.NOTEQUAL};function Ut(S,g,O){if(O?(n.texParameteri(S,n.TEXTURE_WRAP_S,ut[g.wrapS]),n.texParameteri(S,n.TEXTURE_WRAP_T,ut[g.wrapT]),(S===n.TEXTURE_3D||S===n.TEXTURE_2D_ARRAY)&&n.texParameteri(S,n.TEXTURE_WRAP_R,ut[g.wrapR]),n.texParameteri(S,n.TEXTURE_MAG_FILTER,ft[g.magFilter]),n.texParameteri(S,n.TEXTURE_MIN_FILTER,ft[g.minFilter])):(n.texParameteri(S,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(S,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(S===n.TEXTURE_3D||S===n.TEXTURE_2D_ARRAY)&&n.texParameteri(S,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(g.wrapS!==ke||g.wrapT!==ke)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(S,n.TEXTURE_MAG_FILTER,R(g.magFilter)),n.texParameteri(S,n.TEXTURE_MIN_FILTER,R(g.minFilter)),g.minFilter!==ge&&g.minFilter!==Re&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),g.compareFunction&&(n.texParameteri(S,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(S,n.TEXTURE_COMPARE_FUNC,St[g.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const Q=t.get("EXT_texture_filter_anisotropic");if(g.magFilter===ge||g.minFilter!==Ms&&g.minFilter!==yn||g.type===ri&&t.has("OES_texture_float_linear")===!1||a===!1&&g.type===An&&t.has("OES_texture_half_float_linear")===!1)return;(g.anisotropy>1||i.get(g).__currentAnisotropy)&&(n.texParameterf(S,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,s.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy)}}function vt(S,g){let O=!1;S.__webglInit===void 0&&(S.__webglInit=!0,g.addEventListener("dispose",V));const Q=g.source;let $=p.get(Q);$===void 0&&($={},p.set(Q,$));const tt=K(g);if(tt!==S.__cacheKey){$[tt]===void 0&&($[tt]={texture:n.createTexture(),usedTimes:0},r.memory.textures++,O=!0),$[tt].usedTimes++;const _t=$[S.__cacheKey];_t!==void 0&&($[S.__cacheKey].usedTimes--,_t.usedTimes===0&&P(g)),S.__cacheKey=tt,S.__webglTexture=$[tt].texture}return O}function Gt(S,g,O){let Q=n.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(Q=n.TEXTURE_2D_ARRAY),g.isData3DTexture&&(Q=n.TEXTURE_3D);const $=vt(S,g),tt=g.source;e.bindTexture(Q,S.__webglTexture,n.TEXTURE0+O);const _t=i.get(tt);if(tt.version!==_t.__version||$===!0){e.activeTexture(n.TEXTURE0+O);const st=Wt.getPrimaries(Wt.workingColorSpace),ht=g.colorSpace===Ce?null:Wt.getPrimaries(g.colorSpace),U=g.colorSpace===Ce||st===ht?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,U);const et=y(g)&&E(g.image)===!1;let X=v(g.image,et,!1,c);X=se(g,X);const Et=E(X)||a,gt=o.convert(g.format,g.colorSpace);let xt=o.convert(g.type),mt=W(g.internalFormat,gt,xt,g.colorSpace,g.isVideoTexture);Ut(Q,g,Et);let T;const ot=g.mipmaps,it=a&&g.isVideoTexture!==!0,lt=_t.__version===void 0||$===!0,rt=b(g,X,Et);if(g.isDepthTexture)mt=n.DEPTH_COMPONENT,a?g.type===ri?mt=n.DEPTH_COMPONENT32F:g.type===oi?mt=n.DEPTH_COMPONENT24:g.type===bi?mt=n.DEPTH24_STENCIL8:mt=n.DEPTH_COMPONENT16:g.type===ri&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),g.format===Mi&&mt===n.DEPTH_COMPONENT&&g.type!==co&&g.type!==oi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),g.type=oi,xt=o.convert(g.type)),g.format===hn&&mt===n.DEPTH_COMPONENT&&(mt=n.DEPTH_STENCIL,g.type!==bi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),g.type=bi,xt=o.convert(g.type))),lt&&(it?e.texStorage2D(n.TEXTURE_2D,1,mt,X.width,X.height):e.texImage2D(n.TEXTURE_2D,0,mt,X.width,X.height,0,gt,xt,null));else if(g.isDataTexture)if(ot.length>0&&Et){it&&lt&&e.texStorage2D(n.TEXTURE_2D,rt,mt,ot[0].width,ot[0].height);for(let j=0,pt=ot.length;j<pt;j++)T=ot[j],it?e.texSubImage2D(n.TEXTURE_2D,j,0,0,T.width,T.height,gt,xt,T.data):e.texImage2D(n.TEXTURE_2D,j,mt,T.width,T.height,0,gt,xt,T.data);g.generateMipmaps=!1}else it?(lt&&e.texStorage2D(n.TEXTURE_2D,rt,mt,X.width,X.height),e.texSubImage2D(n.TEXTURE_2D,0,0,0,X.width,X.height,gt,xt,X.data)):e.texImage2D(n.TEXTURE_2D,0,mt,X.width,X.height,0,gt,xt,X.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){it&&lt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,rt,mt,ot[0].width,ot[0].height,X.depth);for(let j=0,pt=ot.length;j<pt;j++)T=ot[j],g.format!==De?gt!==null?it?e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,j,0,0,0,T.width,T.height,X.depth,gt,T.data,0,0):e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,j,mt,T.width,T.height,X.depth,0,T.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):it?e.texSubImage3D(n.TEXTURE_2D_ARRAY,j,0,0,0,T.width,T.height,X.depth,gt,xt,T.data):e.texImage3D(n.TEXTURE_2D_ARRAY,j,mt,T.width,T.height,X.depth,0,gt,xt,T.data)}else{it&&lt&&e.texStorage2D(n.TEXTURE_2D,rt,mt,ot[0].width,ot[0].height);for(let j=0,pt=ot.length;j<pt;j++)T=ot[j],g.format!==De?gt!==null?it?e.compressedTexSubImage2D(n.TEXTURE_2D,j,0,0,T.width,T.height,gt,T.data):e.compressedTexImage2D(n.TEXTURE_2D,j,mt,T.width,T.height,0,T.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):it?e.texSubImage2D(n.TEXTURE_2D,j,0,0,T.width,T.height,gt,xt,T.data):e.texImage2D(n.TEXTURE_2D,j,mt,T.width,T.height,0,gt,xt,T.data)}else if(g.isDataArrayTexture)it?(lt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,rt,mt,X.width,X.height,X.depth),e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,X.width,X.height,X.depth,gt,xt,X.data)):e.texImage3D(n.TEXTURE_2D_ARRAY,0,mt,X.width,X.height,X.depth,0,gt,xt,X.data);else if(g.isData3DTexture)it?(lt&&e.texStorage3D(n.TEXTURE_3D,rt,mt,X.width,X.height,X.depth),e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,X.width,X.height,X.depth,gt,xt,X.data)):e.texImage3D(n.TEXTURE_3D,0,mt,X.width,X.height,X.depth,0,gt,xt,X.data);else if(g.isFramebufferTexture){if(lt)if(it)e.texStorage2D(n.TEXTURE_2D,rt,mt,X.width,X.height);else{let j=X.width,pt=X.height;for(let yt=0;yt<rt;yt++)e.texImage2D(n.TEXTURE_2D,yt,mt,j,pt,0,gt,xt,null),j>>=1,pt>>=1}}else if(ot.length>0&&Et){it&&lt&&e.texStorage2D(n.TEXTURE_2D,rt,mt,ot[0].width,ot[0].height);for(let j=0,pt=ot.length;j<pt;j++)T=ot[j],it?e.texSubImage2D(n.TEXTURE_2D,j,0,0,gt,xt,T):e.texImage2D(n.TEXTURE_2D,j,mt,gt,xt,T);g.generateMipmaps=!1}else it?(lt&&e.texStorage2D(n.TEXTURE_2D,rt,mt,X.width,X.height),e.texSubImage2D(n.TEXTURE_2D,0,0,0,gt,xt,X)):e.texImage2D(n.TEXTURE_2D,0,mt,gt,xt,X);C(g,Et)&&w(Q),_t.__version=tt.version,g.onUpdate&&g.onUpdate(g)}S.__version=g.version}function ae(S,g,O){if(g.image.length!==6)return;const Q=vt(S,g),$=g.source;e.bindTexture(n.TEXTURE_CUBE_MAP,S.__webglTexture,n.TEXTURE0+O);const tt=i.get($);if($.version!==tt.__version||Q===!0){e.activeTexture(n.TEXTURE0+O);const _t=Wt.getPrimaries(Wt.workingColorSpace),st=g.colorSpace===Ce?null:Wt.getPrimaries(g.colorSpace),ht=g.colorSpace===Ce||_t===st?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ht);const U=g.isCompressedTexture||g.image[0].isCompressedTexture,et=g.image[0]&&g.image[0].isDataTexture,X=[];for(let j=0;j<6;j++)!U&&!et?X[j]=v(g.image[j],!1,!0,h):X[j]=et?g.image[j].image:g.image[j],X[j]=se(g,X[j]);const Et=X[0],gt=E(Et)||a,xt=o.convert(g.format,g.colorSpace),mt=o.convert(g.type),T=W(g.internalFormat,xt,mt,g.colorSpace),ot=a&&g.isVideoTexture!==!0,it=tt.__version===void 0||Q===!0;let lt=b(g,Et,gt);Ut(n.TEXTURE_CUBE_MAP,g,gt);let rt;if(U){ot&&it&&e.texStorage2D(n.TEXTURE_CUBE_MAP,lt,T,Et.width,Et.height);for(let j=0;j<6;j++){rt=X[j].mipmaps;for(let pt=0;pt<rt.length;pt++){const yt=rt[pt];g.format!==De?xt!==null?ot?e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,pt,0,0,yt.width,yt.height,xt,yt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,pt,T,yt.width,yt.height,0,yt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ot?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,pt,0,0,yt.width,yt.height,xt,mt,yt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,pt,T,yt.width,yt.height,0,xt,mt,yt.data)}}}else{rt=g.mipmaps,ot&&it&&(rt.length>0&&lt++,e.texStorage2D(n.TEXTURE_CUBE_MAP,lt,T,X[0].width,X[0].height));for(let j=0;j<6;j++)if(et){ot?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,X[j].width,X[j].height,xt,mt,X[j].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,T,X[j].width,X[j].height,0,xt,mt,X[j].data);for(let pt=0;pt<rt.length;pt++){const Zt=rt[pt].image[j].image;ot?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,pt+1,0,0,Zt.width,Zt.height,xt,mt,Zt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,pt+1,T,Zt.width,Zt.height,0,xt,mt,Zt.data)}}else{ot?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,xt,mt,X[j]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,T,xt,mt,X[j]);for(let pt=0;pt<rt.length;pt++){const yt=rt[pt];ot?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,pt+1,0,0,xt,mt,yt.image[j]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,pt+1,T,xt,mt,yt.image[j])}}}C(g,gt)&&w(n.TEXTURE_CUBE_MAP),tt.__version=$.version,g.onUpdate&&g.onUpdate(g)}S.__version=g.version}function Pt(S,g,O,Q,$,tt){const _t=o.convert(O.format,O.colorSpace),st=o.convert(O.type),ht=W(O.internalFormat,_t,st,O.colorSpace);if(!i.get(g).__hasExternalTextures){const et=Math.max(1,g.width>>tt),X=Math.max(1,g.height>>tt);$===n.TEXTURE_3D||$===n.TEXTURE_2D_ARRAY?e.texImage3D($,tt,ht,et,X,g.depth,0,_t,st,null):e.texImage2D($,tt,ht,et,X,0,_t,st,null)}e.bindFramebuffer(n.FRAMEBUFFER,S),zt(g)?f.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Q,$,i.get(O).__webglTexture,0,Lt(g)):($===n.TEXTURE_2D||$>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Q,$,i.get(O).__webglTexture,tt),e.bindFramebuffer(n.FRAMEBUFFER,null)}function I(S,g,O){if(n.bindRenderbuffer(n.RENDERBUFFER,S),g.depthBuffer&&!g.stencilBuffer){let Q=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(O||zt(g)){const $=g.depthTexture;$&&$.isDepthTexture&&($.type===ri?Q=n.DEPTH_COMPONENT32F:$.type===oi&&(Q=n.DEPTH_COMPONENT24));const tt=Lt(g);zt(g)?f.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,tt,Q,g.width,g.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,tt,Q,g.width,g.height)}else n.renderbufferStorage(n.RENDERBUFFER,Q,g.width,g.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,S)}else if(g.depthBuffer&&g.stencilBuffer){const Q=Lt(g);O&&zt(g)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Q,n.DEPTH24_STENCIL8,g.width,g.height):zt(g)?f.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Q,n.DEPTH24_STENCIL8,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,g.width,g.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,S)}else{const Q=g.isWebGLMultipleRenderTargets===!0?g.texture:[g.texture];for(let $=0;$<Q.length;$++){const tt=Q[$],_t=o.convert(tt.format,tt.colorSpace),st=o.convert(tt.type),ht=W(tt.internalFormat,_t,st,tt.colorSpace),U=Lt(g);O&&zt(g)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,U,ht,g.width,g.height):zt(g)?f.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,U,ht,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,ht,g.width,g.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function te(S,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,S),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(g.depthTexture).__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),Y(g.depthTexture,0);const Q=i.get(g.depthTexture).__webglTexture,$=Lt(g);if(g.depthTexture.format===Mi)zt(g)?f.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Q,0,$):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Q,0);else if(g.depthTexture.format===hn)zt(g)?f.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Q,0,$):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function bt(S){const g=i.get(S),O=S.isWebGLCubeRenderTarget===!0;if(S.depthTexture&&!g.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");te(g.__webglFramebuffer,S)}else if(O){g.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)e.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[Q]),g.__webglDepthbuffer[Q]=n.createRenderbuffer(),I(g.__webglDepthbuffer[Q],S,!1)}else e.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer=n.createRenderbuffer(),I(g.__webglDepthbuffer,S,!1);e.bindFramebuffer(n.FRAMEBUFFER,null)}function Ct(S,g,O){const Q=i.get(S);g!==void 0&&Pt(Q.__webglFramebuffer,S,S.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),O!==void 0&&bt(S)}function Tt(S){const g=S.texture,O=i.get(S),Q=i.get(g);S.addEventListener("dispose",Z),S.isWebGLMultipleRenderTargets!==!0&&(Q.__webglTexture===void 0&&(Q.__webglTexture=n.createTexture()),Q.__version=g.version,r.memory.textures++);const $=S.isWebGLCubeRenderTarget===!0,tt=S.isWebGLMultipleRenderTargets===!0,_t=E(S)||a;if($){O.__webglFramebuffer=[];for(let st=0;st<6;st++)if(a&&g.mipmaps&&g.mipmaps.length>0){O.__webglFramebuffer[st]=[];for(let ht=0;ht<g.mipmaps.length;ht++)O.__webglFramebuffer[st][ht]=n.createFramebuffer()}else O.__webglFramebuffer[st]=n.createFramebuffer()}else{if(a&&g.mipmaps&&g.mipmaps.length>0){O.__webglFramebuffer=[];for(let st=0;st<g.mipmaps.length;st++)O.__webglFramebuffer[st]=n.createFramebuffer()}else O.__webglFramebuffer=n.createFramebuffer();if(tt)if(s.drawBuffers){const st=S.texture;for(let ht=0,U=st.length;ht<U;ht++){const et=i.get(st[ht]);et.__webglTexture===void 0&&(et.__webglTexture=n.createTexture(),r.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&S.samples>0&&zt(S)===!1){const st=tt?g:[g];O.__webglMultisampledFramebuffer=n.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let ht=0;ht<st.length;ht++){const U=st[ht];O.__webglColorRenderbuffer[ht]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,O.__webglColorRenderbuffer[ht]);const et=o.convert(U.format,U.colorSpace),X=o.convert(U.type),Et=W(U.internalFormat,et,X,U.colorSpace,S.isXRRenderTarget===!0),gt=Lt(S);n.renderbufferStorageMultisample(n.RENDERBUFFER,gt,Et,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ht,n.RENDERBUFFER,O.__webglColorRenderbuffer[ht])}n.bindRenderbuffer(n.RENDERBUFFER,null),S.depthBuffer&&(O.__webglDepthRenderbuffer=n.createRenderbuffer(),I(O.__webglDepthRenderbuffer,S,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if($){e.bindTexture(n.TEXTURE_CUBE_MAP,Q.__webglTexture),Ut(n.TEXTURE_CUBE_MAP,g,_t);for(let st=0;st<6;st++)if(a&&g.mipmaps&&g.mipmaps.length>0)for(let ht=0;ht<g.mipmaps.length;ht++)Pt(O.__webglFramebuffer[st][ht],S,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+st,ht);else Pt(O.__webglFramebuffer[st],S,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+st,0);C(g,_t)&&w(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(tt){const st=S.texture;for(let ht=0,U=st.length;ht<U;ht++){const et=st[ht],X=i.get(et);e.bindTexture(n.TEXTURE_2D,X.__webglTexture),Ut(n.TEXTURE_2D,et,_t),Pt(O.__webglFramebuffer,S,et,n.COLOR_ATTACHMENT0+ht,n.TEXTURE_2D,0),C(et,_t)&&w(n.TEXTURE_2D)}e.unbindTexture()}else{let st=n.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(a?st=S.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(st,Q.__webglTexture),Ut(st,g,_t),a&&g.mipmaps&&g.mipmaps.length>0)for(let ht=0;ht<g.mipmaps.length;ht++)Pt(O.__webglFramebuffer[ht],S,g,n.COLOR_ATTACHMENT0,st,ht);else Pt(O.__webglFramebuffer,S,g,n.COLOR_ATTACHMENT0,st,0);C(g,_t)&&w(st),e.unbindTexture()}S.depthBuffer&&bt(S)}function Vt(S){const g=E(S)||a,O=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let Q=0,$=O.length;Q<$;Q++){const tt=O[Q];if(C(tt,g)){const _t=S.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,st=i.get(tt).__webglTexture;e.bindTexture(_t,st),w(_t),e.unbindTexture()}}}function It(S){if(a&&S.samples>0&&zt(S)===!1){const g=S.isWebGLMultipleRenderTargets?S.texture:[S.texture],O=S.width,Q=S.height;let $=n.COLOR_BUFFER_BIT;const tt=[],_t=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,st=i.get(S),ht=S.isWebGLMultipleRenderTargets===!0;if(ht)for(let U=0;U<g.length;U++)e.bindFramebuffer(n.FRAMEBUFFER,st.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+U,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,st.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+U,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,st.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,st.__webglFramebuffer);for(let U=0;U<g.length;U++){tt.push(n.COLOR_ATTACHMENT0+U),S.depthBuffer&&tt.push(_t);const et=st.__ignoreDepthValues!==void 0?st.__ignoreDepthValues:!1;if(et===!1&&(S.depthBuffer&&($|=n.DEPTH_BUFFER_BIT),S.stencilBuffer&&($|=n.STENCIL_BUFFER_BIT)),ht&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,st.__webglColorRenderbuffer[U]),et===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[_t]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_t])),ht){const X=i.get(g[U]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,X,0)}n.blitFramebuffer(0,0,O,Q,0,0,O,Q,$,n.NEAREST),m&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,tt)}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ht)for(let U=0;U<g.length;U++){e.bindFramebuffer(n.FRAMEBUFFER,st.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+U,n.RENDERBUFFER,st.__webglColorRenderbuffer[U]);const et=i.get(g[U]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,st.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+U,n.TEXTURE_2D,et,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,st.__webglMultisampledFramebuffer)}}function Lt(S){return Math.min(d,S.samples)}function zt(S){const g=i.get(S);return a&&S.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function ee(S){const g=r.render.frame;_.get(S)!==g&&(_.set(S,g),S.update())}function se(S,g){const O=S.colorSpace,Q=S.format,$=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||S.format===no||O!==$e&&O!==Ce&&(Wt.getTransfer(O)===qt?a===!1?t.has("EXT_sRGB")===!0&&Q===De?(S.format=no,S.minFilter=Re,S.generateMipmaps=!1):g=_a.sRGBToLinear(g):(Q!==De||$!==ci)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),g}this.allocateTextureUnit=nt,this.resetTextureUnits=H,this.setTexture2D=Y,this.setTexture2DArray=k,this.setTexture3D=N,this.setTextureCube=ct,this.rebindTextures=Ct,this.setupRenderTarget=Tt,this.updateRenderTargetMipmap=Vt,this.updateMultisampleRenderTarget=It,this.setupDepthRenderbuffer=bt,this.setupFrameBufferTexture=Pt,this.useMultisampledRTT=zt}function Qd(n,t,e){const i=e.isWebGL2;function s(o,r=Ce){let a;const l=Wt.getTransfer(r);if(o===ci)return n.UNSIGNED_BYTE;if(o===ca)return n.UNSIGNED_SHORT_4_4_4_4;if(o===ha)return n.UNSIGNED_SHORT_5_5_5_1;if(o===vl)return n.BYTE;if(o===bl)return n.SHORT;if(o===co)return n.UNSIGNED_SHORT;if(o===la)return n.INT;if(o===oi)return n.UNSIGNED_INT;if(o===ri)return n.FLOAT;if(o===An)return i?n.HALF_FLOAT:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(o===Ml)return n.ALPHA;if(o===De)return n.RGBA;if(o===Sl)return n.LUMINANCE;if(o===El)return n.LUMINANCE_ALPHA;if(o===Mi)return n.DEPTH_COMPONENT;if(o===hn)return n.DEPTH_STENCIL;if(o===no)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(o===yl)return n.RED;if(o===ua)return n.RED_INTEGER;if(o===Al)return n.RG;if(o===fa)return n.RG_INTEGER;if(o===da)return n.RGBA_INTEGER;if(o===Ss||o===Es||o===ys||o===As)if(l===qt)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(o===Ss)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(o===Es)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(o===ys)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(o===As)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(o===Ss)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(o===Es)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(o===ys)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(o===As)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(o===Lo||o===Po||o===ko||o===Do)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(o===Lo)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(o===Po)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(o===ko)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(o===Do)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(o===Tl)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(o===Io||o===Fo)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(o===Io)return l===qt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(o===Fo)return l===qt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(o===Oo||o===No||o===Bo||o===Go||o===zo||o===Wo||o===Ho||o===Vo||o===Xo||o===qo||o===Yo||o===jo||o===Ko||o===Zo)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(o===Oo)return l===qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(o===No)return l===qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(o===Bo)return l===qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(o===Go)return l===qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(o===zo)return l===qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(o===Wo)return l===qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(o===Ho)return l===qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(o===Vo)return l===qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(o===Xo)return l===qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(o===qo)return l===qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(o===Yo)return l===qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(o===jo)return l===qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(o===Ko)return l===qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(o===Zo)return l===qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(o===Ts||o===$o||o===Jo)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(o===Ts)return l===qt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(o===$o)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(o===Jo)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(o===Rl||o===Qo||o===tr||o===er)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(o===Ts)return a.COMPRESSED_RED_RGTC1_EXT;if(o===Qo)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(o===tr)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(o===er)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return o===bi?i?n.UNSIGNED_INT_24_8:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[o]!==void 0?n[o]:null}return{convert:s}}class tp extends Ue{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}let Ki=class extends be{constructor(){super(),this.isGroup=!0,this.type="Group"}};const ep={type:"move"};class js{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ki,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ki,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ki,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,o=null,r=null;const a=this._targetRay,l=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){r=!0;for(const x of t.hand.values()){const p=e.getJointPose(x,i),u=this._getHandJoint(h,x);p!==null&&(u.matrix.fromArray(p.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=p.radius),u.visible=p!==null}const c=h.joints["index-finger-tip"],d=h.joints["thumb-tip"],f=c.position.distanceTo(d.position),m=.02,_=.005;h.inputState.pinching&&f>m+_?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&f<=m-_&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,i),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&o!==null&&(s=o),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ep)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=o!==null),h!==null&&(h.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Ki;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}class ip extends ye{constructor(t,e,i,s,o,r,a,l,h,c){if(c=c!==void 0?c:Mi,c!==Mi&&c!==hn)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===Mi&&(i=oi),i===void 0&&c===hn&&(i=bi),super(null,s,o,r,a,l,c,i,h),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:ge,this.minFilter=l!==void 0?l:ge,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class np extends Ti{constructor(t,e){super();const i=this;let s=null,o=1,r=null,a="local-floor",l=1,h=null,c=null,d=null,f=null,m=null,_=null;const x=e.getContextAttributes();let p=null,u=null;const A=[],v=[],E=new Ue;E.layers.enable(1),E.viewport=new ce;const y=new Ue;y.layers.enable(2),y.viewport=new ce;const C=[E,y],w=new tp;w.layers.enable(1),w.layers.enable(2);let W=null,b=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let N=A[k];return N===void 0&&(N=new js,A[k]=N),N.getTargetRaySpace()},this.getControllerGrip=function(k){let N=A[k];return N===void 0&&(N=new js,A[k]=N),N.getGripSpace()},this.getHand=function(k){let N=A[k];return N===void 0&&(N=new js,A[k]=N),N.getHandSpace()};function R(k){const N=v.indexOf(k.inputSource);if(N===-1)return;const ct=A[N];ct!==void 0&&(ct.update(k.inputSource,k.frame,h||r),ct.dispatchEvent({type:k.type,data:k.inputSource}))}function V(){s.removeEventListener("select",R),s.removeEventListener("selectstart",R),s.removeEventListener("selectend",R),s.removeEventListener("squeeze",R),s.removeEventListener("squeezestart",R),s.removeEventListener("squeezeend",R),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",Z);for(let k=0;k<A.length;k++){const N=v[k];N!==null&&(v[k]=null,A[k].disconnect(N))}W=null,b=null,t.setRenderTarget(p),m=null,f=null,d=null,s=null,u=null,Y.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){o=k,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){a=k,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||r},this.setReferenceSpace=function(k){h=k},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return d},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(k){if(s=k,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",R),s.addEventListener("selectstart",R),s.addEventListener("selectend",R),s.addEventListener("squeeze",R),s.addEventListener("squeezestart",R),s.addEventListener("squeezeend",R),s.addEventListener("end",V),s.addEventListener("inputsourceschange",Z),x.xrCompatible!==!0&&await e.makeXRCompatible(),s.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const N={antialias:s.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:o};m=new XRWebGLLayer(s,e,N),s.updateRenderState({baseLayer:m}),u=new Ei(m.framebufferWidth,m.framebufferHeight,{format:De,type:ci,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil})}else{let N=null,ct=null,ut=null;x.depth&&(ut=x.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,N=x.stencil?hn:Mi,ct=x.stencil?bi:oi);const ft={colorFormat:e.RGBA8,depthFormat:ut,scaleFactor:o};d=new XRWebGLBinding(s,e),f=d.createProjectionLayer(ft),s.updateRenderState({layers:[f]}),u=new Ei(f.textureWidth,f.textureHeight,{format:De,type:ci,depthTexture:new ip(f.textureWidth,f.textureHeight,ct,void 0,void 0,void 0,void 0,void 0,void 0,N),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0});const St=t.properties.get(u);St.__ignoreDepthValues=f.ignoreDepthValues}u.isXRRenderTarget=!0,this.setFoveation(l),h=null,r=await s.requestReferenceSpace(a),Y.setContext(s),Y.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function Z(k){for(let N=0;N<k.removed.length;N++){const ct=k.removed[N],ut=v.indexOf(ct);ut>=0&&(v[ut]=null,A[ut].disconnect(ct))}for(let N=0;N<k.added.length;N++){const ct=k.added[N];let ut=v.indexOf(ct);if(ut===-1){for(let St=0;St<A.length;St++)if(St>=v.length){v.push(ct),ut=St;break}else if(v[St]===null){v[St]=ct,ut=St;break}if(ut===-1)break}const ft=A[ut];ft&&ft.connect(ct)}}const J=new L,P=new L;function z(k,N,ct){J.setFromMatrixPosition(N.matrixWorld),P.setFromMatrixPosition(ct.matrixWorld);const ut=J.distanceTo(P),ft=N.projectionMatrix.elements,St=ct.projectionMatrix.elements,Ut=ft[14]/(ft[10]-1),vt=ft[14]/(ft[10]+1),Gt=(ft[9]+1)/ft[5],ae=(ft[9]-1)/ft[5],Pt=(ft[8]-1)/ft[0],I=(St[8]+1)/St[0],te=Ut*Pt,bt=Ut*I,Ct=ut/(-Pt+I),Tt=Ct*-Pt;N.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(Tt),k.translateZ(Ct),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert();const Vt=Ut+Ct,It=vt+Ct,Lt=te-Tt,zt=bt+(ut-Tt),ee=Gt*vt/It*Vt,se=ae*vt/It*Vt;k.projectionMatrix.makePerspective(Lt,zt,ee,se,Vt,It),k.projectionMatrixInverse.copy(k.projectionMatrix).invert()}function q(k,N){N===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(N.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(s===null)return;w.near=y.near=E.near=k.near,w.far=y.far=E.far=k.far,(W!==w.near||b!==w.far)&&(s.updateRenderState({depthNear:w.near,depthFar:w.far}),W=w.near,b=w.far);const N=k.parent,ct=w.cameras;q(w,N);for(let ut=0;ut<ct.length;ut++)q(ct[ut],N);ct.length===2?z(w,E,y):w.projectionMatrix.copy(E.projectionMatrix),H(k,w,N)};function H(k,N,ct){ct===null?k.matrix.copy(N.matrixWorld):(k.matrix.copy(ct.matrixWorld),k.matrix.invert(),k.matrix.multiply(N.matrixWorld)),k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0),k.projectionMatrix.copy(N.projectionMatrix),k.projectionMatrixInverse.copy(N.projectionMatrixInverse),k.isPerspectiveCamera&&(k.fov=Tn*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(k){l=k,f!==null&&(f.fixedFoveation=k),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=k)};let nt=null;function K(k,N){if(c=N.getViewerPose(h||r),_=N,c!==null){const ct=c.views;m!==null&&(t.setRenderTargetFramebuffer(u,m.framebuffer),t.setRenderTarget(u));let ut=!1;ct.length!==w.cameras.length&&(w.cameras.length=0,ut=!0);for(let ft=0;ft<ct.length;ft++){const St=ct[ft];let Ut=null;if(m!==null)Ut=m.getViewport(St);else{const Gt=d.getViewSubImage(f,St);Ut=Gt.viewport,ft===0&&(t.setRenderTargetTextures(u,Gt.colorTexture,f.ignoreDepthValues?void 0:Gt.depthStencilTexture),t.setRenderTarget(u))}let vt=C[ft];vt===void 0&&(vt=new Ue,vt.layers.enable(ft),vt.viewport=new ce,C[ft]=vt),vt.matrix.fromArray(St.transform.matrix),vt.matrix.decompose(vt.position,vt.quaternion,vt.scale),vt.projectionMatrix.fromArray(St.projectionMatrix),vt.projectionMatrixInverse.copy(vt.projectionMatrix).invert(),vt.viewport.set(Ut.x,Ut.y,Ut.width,Ut.height),ft===0&&(w.matrix.copy(vt.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),ut===!0&&w.cameras.push(vt)}}for(let ct=0;ct<A.length;ct++){const ut=v[ct],ft=A[ct];ut!==null&&ft!==void 0&&ft.update(ut,N,h||r)}nt&&nt(k,N),N.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:N}),_=null}const Y=new Ta;Y.setAnimationLoop(K),this.setAnimationLoop=function(k){nt=k},this.dispose=function(){}}}function sp(n,t){function e(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function i(p,u){u.color.getRGB(p.fogColor.value,Sa(n)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function s(p,u,A,v,E){u.isMeshBasicMaterial||u.isMeshLambertMaterial?o(p,u):u.isMeshToonMaterial?(o(p,u),d(p,u)):u.isMeshPhongMaterial?(o(p,u),c(p,u)):u.isMeshStandardMaterial?(o(p,u),f(p,u),u.isMeshPhysicalMaterial&&m(p,u,E)):u.isMeshMatcapMaterial?(o(p,u),_(p,u)):u.isMeshDepthMaterial?o(p,u):u.isMeshDistanceMaterial?(o(p,u),x(p,u)):u.isMeshNormalMaterial?o(p,u):u.isLineBasicMaterial?(r(p,u),u.isLineDashedMaterial&&a(p,u)):u.isPointsMaterial?l(p,u,A,v):u.isSpriteMaterial?h(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function o(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,e(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,e(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,e(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===ve&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,e(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===ve&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,e(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,e(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,e(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);const A=t.get(u).envMap;if(A&&(p.envMap.value=A,p.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap){p.lightMap.value=u.lightMap;const v=n._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=u.lightMapIntensity*v,e(u.lightMap,p.lightMapTransform)}u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,e(u.aoMap,p.aoMapTransform))}function r(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,e(u.map,p.mapTransform))}function a(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function l(p,u,A,v){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*A,p.scale.value=v*.5,u.map&&(p.map.value=u.map,e(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,e(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function h(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,e(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,e(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function c(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function d(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function f(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,e(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,e(u.roughnessMap,p.roughnessMapTransform)),t.get(u).envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function m(p,u,A){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,e(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,e(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,e(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,e(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,e(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===ve&&p.clearcoatNormalScale.value.negate())),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,e(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,e(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=A.texture,p.transmissionSamplerSize.value.set(A.width,A.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,e(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,e(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(p.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(p.anisotropyMap.value=u.anisotropyMap,e(u.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,e(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,e(u.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,u){u.matcap&&(p.matcap.value=u.matcap)}function x(p,u){const A=t.get(u).light;p.referencePosition.value.setFromMatrixPosition(A.matrixWorld),p.nearDistance.value=A.shadow.camera.near,p.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function op(n,t,e,i){let s={},o={},r=[];const a=e.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(A,v){const E=v.program;i.uniformBlockBinding(A,E)}function h(A,v){let E=s[A.id];E===void 0&&(_(A),E=c(A),s[A.id]=E,A.addEventListener("dispose",p));const y=v.program;i.updateUBOMapping(A,y);const C=t.render.frame;o[A.id]!==C&&(f(A),o[A.id]=C)}function c(A){const v=d();A.__bindingPointIndex=v;const E=n.createBuffer(),y=A.__size,C=A.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,y,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,E),E}function d(){for(let A=0;A<a;A++)if(r.indexOf(A)===-1)return r.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(A){const v=s[A.id],E=A.uniforms,y=A.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let C=0,w=E.length;C<w;C++){const W=E[C];if(m(W,C,y)===!0){const b=W.__offset,R=Array.isArray(W.value)?W.value:[W.value];let V=0;for(let Z=0;Z<R.length;Z++){const J=R[Z],P=x(J);typeof J=="number"?(W.__data[0]=J,n.bufferSubData(n.UNIFORM_BUFFER,b+V,W.__data)):J.isMatrix3?(W.__data[0]=J.elements[0],W.__data[1]=J.elements[1],W.__data[2]=J.elements[2],W.__data[3]=J.elements[0],W.__data[4]=J.elements[3],W.__data[5]=J.elements[4],W.__data[6]=J.elements[5],W.__data[7]=J.elements[0],W.__data[8]=J.elements[6],W.__data[9]=J.elements[7],W.__data[10]=J.elements[8],W.__data[11]=J.elements[0]):(J.toArray(W.__data,V),V+=P.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,b,W.__data)}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(A,v,E){const y=A.value;if(E[v]===void 0){if(typeof y=="number")E[v]=y;else{const C=Array.isArray(y)?y:[y],w=[];for(let W=0;W<C.length;W++)w.push(C[W].clone());E[v]=w}return!0}else if(typeof y=="number"){if(E[v]!==y)return E[v]=y,!0}else{const C=Array.isArray(E[v])?E[v]:[E[v]],w=Array.isArray(y)?y:[y];for(let W=0;W<C.length;W++){const b=C[W];if(b.equals(w[W])===!1)return b.copy(w[W]),!0}}return!1}function _(A){const v=A.uniforms;let E=0;const y=16;let C=0;for(let w=0,W=v.length;w<W;w++){const b=v[w],R={boundary:0,storage:0},V=Array.isArray(b.value)?b.value:[b.value];for(let Z=0,J=V.length;Z<J;Z++){const P=V[Z],z=x(P);R.boundary+=z.boundary,R.storage+=z.storage}if(b.__data=new Float32Array(R.storage/Float32Array.BYTES_PER_ELEMENT),b.__offset=E,w>0){C=E%y;const Z=y-C;C!==0&&Z-R.boundary<0&&(E+=y-C,b.__offset=E)}E+=R.storage}return C=E%y,C>0&&(E+=y-C),A.__size=E,A.__cache={},this}function x(A){const v={boundary:0,storage:0};return typeof A=="number"?(v.boundary=4,v.storage=4):A.isVector2?(v.boundary=8,v.storage=8):A.isVector3||A.isColor?(v.boundary=16,v.storage=12):A.isVector4?(v.boundary=16,v.storage=16):A.isMatrix3?(v.boundary=48,v.storage=48):A.isMatrix4?(v.boundary=64,v.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),v}function p(A){const v=A.target;v.removeEventListener("dispose",p);const E=r.indexOf(v.__bindingPointIndex);r.splice(E,1),n.deleteBuffer(s[v.id]),delete s[v.id],delete o[v.id]}function u(){for(const A in s)n.deleteBuffer(s[A]);r=[],s={},o={}}return{bind:l,update:h,dispose:u}}class La{constructor(t={}){const{canvas:e=ic(),context:i=null,depth:s=!0,stencil:o=!0,alpha:r=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:h=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:d=!1}=t;this.isWebGLRenderer=!0;let f;i!==null?f=i.getContextAttributes().alpha:f=r;const m=new Uint32Array(4),_=new Int32Array(4);let x=null,p=null;const u=[],A=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=le,this._useLegacyLights=!1,this.toneMapping=li,this.toneMappingExposure=1;const v=this;let E=!1,y=0,C=0,w=null,W=-1,b=null;const R=new ce,V=new ce;let Z=null;const J=new Ht(0);let P=0,z=e.width,q=e.height,H=1,nt=null,K=null;const Y=new ce(0,0,z,q),k=new ce(0,0,z,q);let N=!1;const ct=new Aa;let ut=!1,ft=!1,St=null;const Ut=new re,vt=new Ot,Gt=new L,ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Pt(){return w===null?H:1}let I=i;function te(M,D){for(let B=0;B<M.length;B++){const F=M[B],G=e.getContext(F,D);if(G!==null)return G}return null}try{const M={alpha:!0,depth:s,stencil:o,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:h,powerPreference:c,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${lo}`),e.addEventListener("webglcontextlost",ot,!1),e.addEventListener("webglcontextrestored",it,!1),e.addEventListener("webglcontextcreationerror",lt,!1),I===null){const D=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&D.shift(),I=te(D,M),I===null)throw te(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&I instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),I.getShaderPrecisionFormat===void 0&&(I.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let bt,Ct,Tt,Vt,It,Lt,zt,ee,se,S,g,O,Q,$,tt,_t,st,ht,U,et,X,Et,gt,xt;function mt(){bt=new _f(I),Ct=new cf(I,bt,t),bt.init(Ct),Et=new Qd(I,bt,Ct),Tt=new $d(I,bt,Ct),Vt=new vf(I),It=new Od,Lt=new Jd(I,bt,Tt,It,Ct,Et,Vt),zt=new uf(v),ee=new mf(v),se=new Rc(I,Ct),gt=new af(I,bt,se,Ct),S=new gf(I,se,Vt,gt),g=new Ef(I,S,se,Vt),U=new Sf(I,Ct,Lt),_t=new hf(It),O=new Fd(v,zt,ee,bt,Ct,gt,_t),Q=new sp(v,It),$=new Bd,tt=new Xd(bt,Ct),ht=new rf(v,zt,ee,Tt,g,f,l),st=new Zd(v,g,Ct),xt=new op(I,Vt,Ct,Tt),et=new lf(I,bt,Vt,Ct),X=new xf(I,bt,Vt,Ct),Vt.programs=O.programs,v.capabilities=Ct,v.extensions=bt,v.properties=It,v.renderLists=$,v.shadowMap=st,v.state=Tt,v.info=Vt}mt();const T=new np(v,I);this.xr=T,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const M=bt.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=bt.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(M){M!==void 0&&(H=M,this.setSize(z,q,!1))},this.getSize=function(M){return M.set(z,q)},this.setSize=function(M,D,B=!0){if(T.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=M,q=D,e.width=Math.floor(M*H),e.height=Math.floor(D*H),B===!0&&(e.style.width=M+"px",e.style.height=D+"px"),this.setViewport(0,0,M,D)},this.getDrawingBufferSize=function(M){return M.set(z*H,q*H).floor()},this.setDrawingBufferSize=function(M,D,B){z=M,q=D,H=B,e.width=Math.floor(M*B),e.height=Math.floor(D*B),this.setViewport(0,0,M,D)},this.getCurrentViewport=function(M){return M.copy(R)},this.getViewport=function(M){return M.copy(Y)},this.setViewport=function(M,D,B,F){M.isVector4?Y.set(M.x,M.y,M.z,M.w):Y.set(M,D,B,F),Tt.viewport(R.copy(Y).multiplyScalar(H).floor())},this.getScissor=function(M){return M.copy(k)},this.setScissor=function(M,D,B,F){M.isVector4?k.set(M.x,M.y,M.z,M.w):k.set(M,D,B,F),Tt.scissor(V.copy(k).multiplyScalar(H).floor())},this.getScissorTest=function(){return N},this.setScissorTest=function(M){Tt.setScissorTest(N=M)},this.setOpaqueSort=function(M){nt=M},this.setTransparentSort=function(M){K=M},this.getClearColor=function(M){return M.copy(ht.getClearColor())},this.setClearColor=function(){ht.setClearColor.apply(ht,arguments)},this.getClearAlpha=function(){return ht.getClearAlpha()},this.setClearAlpha=function(){ht.setClearAlpha.apply(ht,arguments)},this.clear=function(M=!0,D=!0,B=!0){let F=0;if(M){let G=!1;if(w!==null){const dt=w.texture.format;G=dt===da||dt===fa||dt===ua}if(G){const dt=w.texture.type,Mt=dt===ci||dt===oi||dt===co||dt===bi||dt===ca||dt===ha,Rt=ht.getClearColor(),wt=ht.getClearAlpha(),Nt=Rt.r,At=Rt.g,kt=Rt.b;Mt?(m[0]=Nt,m[1]=At,m[2]=kt,m[3]=wt,I.clearBufferuiv(I.COLOR,0,m)):(_[0]=Nt,_[1]=At,_[2]=kt,_[3]=wt,I.clearBufferiv(I.COLOR,0,_))}else F|=I.COLOR_BUFFER_BIT}D&&(F|=I.DEPTH_BUFFER_BIT),B&&(F|=I.STENCIL_BUFFER_BIT),I.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ot,!1),e.removeEventListener("webglcontextrestored",it,!1),e.removeEventListener("webglcontextcreationerror",lt,!1),$.dispose(),tt.dispose(),It.dispose(),zt.dispose(),ee.dispose(),g.dispose(),gt.dispose(),xt.dispose(),O.dispose(),T.dispose(),T.removeEventListener("sessionstart",Xt),T.removeEventListener("sessionend",Ie),St&&(St.dispose(),St=null),de.stop()};function ot(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function it(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const M=Vt.autoReset,D=st.enabled,B=st.autoUpdate,F=st.needsUpdate,G=st.type;mt(),Vt.autoReset=M,st.enabled=D,st.autoUpdate=B,st.needsUpdate=F,st.type=G}function lt(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function rt(M){const D=M.target;D.removeEventListener("dispose",rt),j(D)}function j(M){pt(M),It.remove(M)}function pt(M){const D=It.get(M).programs;D!==void 0&&(D.forEach(function(B){O.releaseProgram(B)}),M.isShaderMaterial&&O.releaseShaderCache(M))}this.renderBufferDirect=function(M,D,B,F,G,dt){D===null&&(D=ae);const Mt=G.isMesh&&G.matrixWorld.determinant()<0,Rt=Na(M,D,B,F,G);Tt.setMaterial(F,Mt);let wt=B.index,Nt=1;if(F.wireframe===!0){if(wt=S.getWireframeAttribute(B),wt===void 0)return;Nt=2}const At=B.drawRange,kt=B.attributes.position;let jt=At.start*Nt,Kt=(At.start+At.count)*Nt;dt!==null&&(jt=Math.max(jt,dt.start*Nt),Kt=Math.min(Kt,(dt.start+dt.count)*Nt)),wt!==null?(jt=Math.max(jt,0),Kt=Math.min(Kt,wt.count)):kt!=null&&(jt=Math.max(jt,0),Kt=Math.min(Kt,kt.count));const Ae=Kt-jt;if(Ae<0||Ae===1/0)return;gt.setup(G,F,Rt,B,wt);let Ge,$t=et;if(wt!==null&&(Ge=se.get(wt),$t=X,$t.setIndex(Ge)),G.isMesh)F.wireframe===!0?(Tt.setLineWidth(F.wireframeLinewidth*Pt()),$t.setMode(I.LINES)):$t.setMode(I.TRIANGLES);else if(G.isLine){let Bt=F.linewidth;Bt===void 0&&(Bt=1),Tt.setLineWidth(Bt*Pt()),G.isLineSegments?$t.setMode(I.LINES):G.isLineLoop?$t.setMode(I.LINE_LOOP):$t.setMode(I.LINE_STRIP)}else G.isPoints?$t.setMode(I.POINTS):G.isSprite&&$t.setMode(I.TRIANGLES);if(G.isInstancedMesh)$t.renderInstances(jt,Ae,G.count);else if(B.isInstancedBufferGeometry){const Bt=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,gs=Math.min(B.instanceCount,Bt);$t.renderInstances(jt,Ae,gs)}else $t.render(jt,Ae)},this.compile=function(M,D){function B(F,G,dt){F.transparent===!0&&F.side===xe&&F.forceSinglePass===!1?(F.side=ve,F.needsUpdate=!0,Ln(F,G,dt),F.side=hi,F.needsUpdate=!0,Ln(F,G,dt),F.side=xe):Ln(F,G,dt)}p=tt.get(M),p.init(),A.push(p),M.traverseVisible(function(F){F.isLight&&F.layers.test(D.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),p.setupLights(v._useLegacyLights),M.traverse(function(F){const G=F.material;if(G)if(Array.isArray(G))for(let dt=0;dt<G.length;dt++){const Mt=G[dt];B(Mt,M,F)}else B(G,M,F)}),A.pop(),p=null};let yt=null;function Zt(M){yt&&yt(M)}function Xt(){de.stop()}function Ie(){de.start()}const de=new Ta;de.setAnimationLoop(Zt),typeof self<"u"&&de.setContext(self),this.setAnimationLoop=function(M){yt=M,T.setAnimationLoop(M),M===null?de.stop():de.start()},T.addEventListener("sessionstart",Xt),T.addEventListener("sessionend",Ie),this.render=function(M,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),T.enabled===!0&&T.isPresenting===!0&&(T.cameraAutoUpdate===!0&&T.updateCamera(D),D=T.getCamera()),M.isScene===!0&&M.onBeforeRender(v,M,D,w),p=tt.get(M,A.length),p.init(),A.push(p),Ut.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),ct.setFromProjectionMatrix(Ut),ft=this.localClippingEnabled,ut=_t.init(this.clippingPlanes,ft),x=$.get(M,u.length),x.init(),u.push(x),xo(M,D,0,v.sortObjects),x.finish(),v.sortObjects===!0&&x.sort(nt,K),this.info.render.frame++,ut===!0&&_t.beginShadows();const B=p.state.shadowsArray;if(st.render(B,M,D),ut===!0&&_t.endShadows(),this.info.autoReset===!0&&this.info.reset(),ht.render(x,M),p.setupLights(v._useLegacyLights),D.isArrayCamera){const F=D.cameras;for(let G=0,dt=F.length;G<dt;G++){const Mt=F[G];vo(x,M,Mt,Mt.viewport)}}else vo(x,M,D);w!==null&&(Lt.updateMultisampleRenderTarget(w),Lt.updateRenderTargetMipmap(w)),M.isScene===!0&&M.onAfterRender(v,M,D),gt.resetDefaultState(),W=-1,b=null,A.pop(),A.length>0?p=A[A.length-1]:p=null,u.pop(),u.length>0?x=u[u.length-1]:x=null};function xo(M,D,B,F){if(M.visible===!1)return;if(M.layers.test(D.layers)){if(M.isGroup)B=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(D);else if(M.isLight)p.pushLight(M),M.castShadow&&p.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||ct.intersectsSprite(M)){F&&Gt.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Ut);const Mt=g.update(M),Rt=M.material;Rt.visible&&x.push(M,Mt,Rt,B,Gt.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||ct.intersectsObject(M))){const Mt=g.update(M),Rt=M.material;if(F&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Gt.copy(M.boundingSphere.center)):(Mt.boundingSphere===null&&Mt.computeBoundingSphere(),Gt.copy(Mt.boundingSphere.center)),Gt.applyMatrix4(M.matrixWorld).applyMatrix4(Ut)),Array.isArray(Rt)){const wt=Mt.groups;for(let Nt=0,At=wt.length;Nt<At;Nt++){const kt=wt[Nt],jt=Rt[kt.materialIndex];jt&&jt.visible&&x.push(M,Mt,jt,B,Gt.z,kt)}}else Rt.visible&&x.push(M,Mt,Rt,B,Gt.z,null)}}const dt=M.children;for(let Mt=0,Rt=dt.length;Mt<Rt;Mt++)xo(dt[Mt],D,B,F)}function vo(M,D,B,F){const G=M.opaque,dt=M.transmissive,Mt=M.transparent;p.setupLightsView(B),ut===!0&&_t.setGlobalState(v.clippingPlanes,B),dt.length>0&&Oa(G,dt,D,B),F&&Tt.viewport(R.copy(F)),G.length>0&&Cn(G,D,B),dt.length>0&&Cn(dt,D,B),Mt.length>0&&Cn(Mt,D,B),Tt.buffers.depth.setTest(!0),Tt.buffers.depth.setMask(!0),Tt.buffers.color.setMask(!0),Tt.setPolygonOffset(!1)}function Oa(M,D,B,F){const G=Ct.isWebGL2;St===null&&(St=new Ei(1,1,{generateMipmaps:!0,type:bt.has("EXT_color_buffer_half_float")?An:ci,minFilter:yn,samples:G?4:0})),v.getDrawingBufferSize(vt),G?St.setSize(vt.x,vt.y):St.setSize(cs(vt.x),cs(vt.y));const dt=v.getRenderTarget();v.setRenderTarget(St),v.getClearColor(J),P=v.getClearAlpha(),P<1&&v.setClearColor(16777215,.5),v.clear();const Mt=v.toneMapping;v.toneMapping=li,Cn(M,B,F),Lt.updateMultisampleRenderTarget(St),Lt.updateRenderTargetMipmap(St);let Rt=!1;for(let wt=0,Nt=D.length;wt<Nt;wt++){const At=D[wt],kt=At.object,jt=At.geometry,Kt=At.material,Ae=At.group;if(Kt.side===xe&&kt.layers.test(F.layers)){const Ge=Kt.side;Kt.side=ve,Kt.needsUpdate=!0,bo(kt,B,F,jt,Kt,Ae),Kt.side=Ge,Kt.needsUpdate=!0,Rt=!0}}Rt===!0&&(Lt.updateMultisampleRenderTarget(St),Lt.updateRenderTargetMipmap(St)),v.setRenderTarget(dt),v.setClearColor(J,P),v.toneMapping=Mt}function Cn(M,D,B){const F=D.isScene===!0?D.overrideMaterial:null;for(let G=0,dt=M.length;G<dt;G++){const Mt=M[G],Rt=Mt.object,wt=Mt.geometry,Nt=F===null?Mt.material:F,At=Mt.group;Rt.layers.test(B.layers)&&bo(Rt,D,B,wt,Nt,At)}}function bo(M,D,B,F,G,dt){M.onBeforeRender(v,D,B,F,G,dt),M.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),G.onBeforeRender(v,D,B,F,M,dt),G.transparent===!0&&G.side===xe&&G.forceSinglePass===!1?(G.side=ve,G.needsUpdate=!0,v.renderBufferDirect(B,D,F,G,M,dt),G.side=hi,G.needsUpdate=!0,v.renderBufferDirect(B,D,F,G,M,dt),G.side=xe):v.renderBufferDirect(B,D,F,G,M,dt),M.onAfterRender(v,D,B,F,G,dt)}function Ln(M,D,B){D.isScene!==!0&&(D=ae);const F=It.get(M),G=p.state.lights,dt=p.state.shadowsArray,Mt=G.state.version,Rt=O.getParameters(M,G.state,dt,D,B),wt=O.getProgramCacheKey(Rt);let Nt=F.programs;F.environment=M.isMeshStandardMaterial?D.environment:null,F.fog=D.fog,F.envMap=(M.isMeshStandardMaterial?ee:zt).get(M.envMap||F.environment),Nt===void 0&&(M.addEventListener("dispose",rt),Nt=new Map,F.programs=Nt);let At=Nt.get(wt);if(At!==void 0){if(F.currentProgram===At&&F.lightsStateVersion===Mt)return Mo(M,Rt),At}else Rt.uniforms=O.getUniforms(M),M.onBuild(B,Rt,v),M.onBeforeCompile(Rt,v),At=O.acquireProgram(Rt,wt),Nt.set(wt,At),F.uniforms=Rt.uniforms;const kt=F.uniforms;(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(kt.clippingPlanes=_t.uniform),Mo(M,Rt),F.needsLights=Ga(M),F.lightsStateVersion=Mt,F.needsLights&&(kt.ambientLightColor.value=G.state.ambient,kt.lightProbe.value=G.state.probe,kt.directionalLights.value=G.state.directional,kt.directionalLightShadows.value=G.state.directionalShadow,kt.spotLights.value=G.state.spot,kt.spotLightShadows.value=G.state.spotShadow,kt.rectAreaLights.value=G.state.rectArea,kt.ltc_1.value=G.state.rectAreaLTC1,kt.ltc_2.value=G.state.rectAreaLTC2,kt.pointLights.value=G.state.point,kt.pointLightShadows.value=G.state.pointShadow,kt.hemisphereLights.value=G.state.hemi,kt.directionalShadowMap.value=G.state.directionalShadowMap,kt.directionalShadowMatrix.value=G.state.directionalShadowMatrix,kt.spotShadowMap.value=G.state.spotShadowMap,kt.spotLightMatrix.value=G.state.spotLightMatrix,kt.spotLightMap.value=G.state.spotLightMap,kt.pointShadowMap.value=G.state.pointShadowMap,kt.pointShadowMatrix.value=G.state.pointShadowMatrix);const jt=At.getUniforms(),Kt=ss.seqWithValue(jt.seq,kt);return F.currentProgram=At,F.uniformsList=Kt,At}function Mo(M,D){const B=It.get(M);B.outputColorSpace=D.outputColorSpace,B.instancing=D.instancing,B.instancingColor=D.instancingColor,B.skinning=D.skinning,B.morphTargets=D.morphTargets,B.morphNormals=D.morphNormals,B.morphColors=D.morphColors,B.morphTargetsCount=D.morphTargetsCount,B.numClippingPlanes=D.numClippingPlanes,B.numIntersection=D.numClipIntersection,B.vertexAlphas=D.vertexAlphas,B.vertexTangents=D.vertexTangents,B.toneMapping=D.toneMapping}function Na(M,D,B,F,G){D.isScene!==!0&&(D=ae),Lt.resetTextureUnits();const dt=D.fog,Mt=F.isMeshStandardMaterial?D.environment:null,Rt=w===null?v.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:$e,wt=(F.isMeshStandardMaterial?ee:zt).get(F.envMap||Mt),Nt=F.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,At=!!B.attributes.tangent&&(!!F.normalMap||F.anisotropy>0),kt=!!B.morphAttributes.position,jt=!!B.morphAttributes.normal,Kt=!!B.morphAttributes.color;let Ae=li;F.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(Ae=v.toneMapping);const Ge=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,$t=Ge!==void 0?Ge.length:0,Bt=It.get(F),gs=p.state.lights;if(ut===!0&&(ft===!0||M!==b)){const Me=M===b&&F.id===W;_t.setState(F,M,Me)}let Jt=!1;F.version===Bt.__version?(Bt.needsLights&&Bt.lightsStateVersion!==gs.state.version||Bt.outputColorSpace!==Rt||G.isInstancedMesh&&Bt.instancing===!1||!G.isInstancedMesh&&Bt.instancing===!0||G.isSkinnedMesh&&Bt.skinning===!1||!G.isSkinnedMesh&&Bt.skinning===!0||G.isInstancedMesh&&Bt.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Bt.instancingColor===!1&&G.instanceColor!==null||Bt.envMap!==wt||F.fog===!0&&Bt.fog!==dt||Bt.numClippingPlanes!==void 0&&(Bt.numClippingPlanes!==_t.numPlanes||Bt.numIntersection!==_t.numIntersection)||Bt.vertexAlphas!==Nt||Bt.vertexTangents!==At||Bt.morphTargets!==kt||Bt.morphNormals!==jt||Bt.morphColors!==Kt||Bt.toneMapping!==Ae||Ct.isWebGL2===!0&&Bt.morphTargetsCount!==$t)&&(Jt=!0):(Jt=!0,Bt.__version=F.version);let ui=Bt.currentProgram;Jt===!0&&(ui=Ln(F,D,G));let So=!1,mn=!1,xs=!1;const pe=ui.getUniforms(),fi=Bt.uniforms;if(Tt.useProgram(ui.program)&&(So=!0,mn=!0,xs=!0),F.id!==W&&(W=F.id,mn=!0),So||b!==M){pe.setValue(I,"projectionMatrix",M.projectionMatrix),pe.setValue(I,"viewMatrix",M.matrixWorldInverse);const Me=pe.map.cameraPosition;Me!==void 0&&Me.setValue(I,Gt.setFromMatrixPosition(M.matrixWorld)),Ct.logarithmicDepthBuffer&&pe.setValue(I,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&pe.setValue(I,"isOrthographic",M.isOrthographicCamera===!0),b!==M&&(b=M,mn=!0,xs=!0)}if(G.isSkinnedMesh){pe.setOptional(I,G,"bindMatrix"),pe.setOptional(I,G,"bindMatrixInverse");const Me=G.skeleton;Me&&(Ct.floatVertexTextures?(Me.boneTexture===null&&Me.computeBoneTexture(),pe.setValue(I,"boneTexture",Me.boneTexture,Lt),pe.setValue(I,"boneTextureSize",Me.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const vs=B.morphAttributes;if((vs.position!==void 0||vs.normal!==void 0||vs.color!==void 0&&Ct.isWebGL2===!0)&&U.update(G,B,ui),(mn||Bt.receiveShadow!==G.receiveShadow)&&(Bt.receiveShadow=G.receiveShadow,pe.setValue(I,"receiveShadow",G.receiveShadow)),F.isMeshGouraudMaterial&&F.envMap!==null&&(fi.envMap.value=wt,fi.flipEnvMap.value=wt.isCubeTexture&&wt.isRenderTargetTexture===!1?-1:1),mn&&(pe.setValue(I,"toneMappingExposure",v.toneMappingExposure),Bt.needsLights&&Ba(fi,xs),dt&&F.fog===!0&&Q.refreshFogUniforms(fi,dt),Q.refreshMaterialUniforms(fi,F,H,q,St),ss.upload(I,Bt.uniformsList,fi,Lt)),F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(ss.upload(I,Bt.uniformsList,fi,Lt),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&pe.setValue(I,"center",G.center),pe.setValue(I,"modelViewMatrix",G.modelViewMatrix),pe.setValue(I,"normalMatrix",G.normalMatrix),pe.setValue(I,"modelMatrix",G.matrixWorld),F.isShaderMaterial||F.isRawShaderMaterial){const Me=F.uniformsGroups;for(let bs=0,za=Me.length;bs<za;bs++)if(Ct.isWebGL2){const Eo=Me[bs];xt.update(Eo,ui),xt.bind(Eo,ui)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ui}function Ba(M,D){M.ambientLightColor.needsUpdate=D,M.lightProbe.needsUpdate=D,M.directionalLights.needsUpdate=D,M.directionalLightShadows.needsUpdate=D,M.pointLights.needsUpdate=D,M.pointLightShadows.needsUpdate=D,M.spotLights.needsUpdate=D,M.spotLightShadows.needsUpdate=D,M.rectAreaLights.needsUpdate=D,M.hemisphereLights.needsUpdate=D}function Ga(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return y},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(M,D,B){It.get(M.texture).__webglTexture=D,It.get(M.depthTexture).__webglTexture=B;const F=It.get(M);F.__hasExternalTextures=!0,F.__hasExternalTextures&&(F.__autoAllocateDepthBuffer=B===void 0,F.__autoAllocateDepthBuffer||bt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),F.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(M,D){const B=It.get(M);B.__webglFramebuffer=D,B.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(M,D=0,B=0){w=M,y=D,C=B;let F=!0,G=null,dt=!1,Mt=!1;if(M){const wt=It.get(M);wt.__useDefaultFramebuffer!==void 0?(Tt.bindFramebuffer(I.FRAMEBUFFER,null),F=!1):wt.__webglFramebuffer===void 0?Lt.setupRenderTarget(M):wt.__hasExternalTextures&&Lt.rebindTextures(M,It.get(M.texture).__webglTexture,It.get(M.depthTexture).__webglTexture);const Nt=M.texture;(Nt.isData3DTexture||Nt.isDataArrayTexture||Nt.isCompressedArrayTexture)&&(Mt=!0);const At=It.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(At[D])?G=At[D][B]:G=At[D],dt=!0):Ct.isWebGL2&&M.samples>0&&Lt.useMultisampledRTT(M)===!1?G=It.get(M).__webglMultisampledFramebuffer:Array.isArray(At)?G=At[B]:G=At,R.copy(M.viewport),V.copy(M.scissor),Z=M.scissorTest}else R.copy(Y).multiplyScalar(H).floor(),V.copy(k).multiplyScalar(H).floor(),Z=N;if(Tt.bindFramebuffer(I.FRAMEBUFFER,G)&&Ct.drawBuffers&&F&&Tt.drawBuffers(M,G),Tt.viewport(R),Tt.scissor(V),Tt.setScissorTest(Z),dt){const wt=It.get(M.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+D,wt.__webglTexture,B)}else if(Mt){const wt=It.get(M.texture),Nt=D||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,wt.__webglTexture,B||0,Nt)}W=-1},this.readRenderTargetPixels=function(M,D,B,F,G,dt,Mt){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Rt=It.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Mt!==void 0&&(Rt=Rt[Mt]),Rt){Tt.bindFramebuffer(I.FRAMEBUFFER,Rt);try{const wt=M.texture,Nt=wt.format,At=wt.type;if(Nt!==De&&Et.convert(Nt)!==I.getParameter(I.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const kt=At===An&&(bt.has("EXT_color_buffer_half_float")||Ct.isWebGL2&&bt.has("EXT_color_buffer_float"));if(At!==ci&&Et.convert(At)!==I.getParameter(I.IMPLEMENTATION_COLOR_READ_TYPE)&&!(At===ri&&(Ct.isWebGL2||bt.has("OES_texture_float")||bt.has("WEBGL_color_buffer_float")))&&!kt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=M.width-F&&B>=0&&B<=M.height-G&&I.readPixels(D,B,F,G,Et.convert(Nt),Et.convert(At),dt)}finally{const wt=w!==null?It.get(w).__webglFramebuffer:null;Tt.bindFramebuffer(I.FRAMEBUFFER,wt)}}},this.copyFramebufferToTexture=function(M,D,B=0){const F=Math.pow(2,-B),G=Math.floor(D.image.width*F),dt=Math.floor(D.image.height*F);Lt.setTexture2D(D,0),I.copyTexSubImage2D(I.TEXTURE_2D,B,0,0,M.x,M.y,G,dt),Tt.unbindTexture()},this.copyTextureToTexture=function(M,D,B,F=0){const G=D.image.width,dt=D.image.height,Mt=Et.convert(B.format),Rt=Et.convert(B.type);Lt.setTexture2D(B,0),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,B.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,B.unpackAlignment),D.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,F,M.x,M.y,G,dt,Mt,Rt,D.image.data):D.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,F,M.x,M.y,D.mipmaps[0].width,D.mipmaps[0].height,Mt,D.mipmaps[0].data):I.texSubImage2D(I.TEXTURE_2D,F,M.x,M.y,Mt,Rt,D.image),F===0&&B.generateMipmaps&&I.generateMipmap(I.TEXTURE_2D),Tt.unbindTexture()},this.copyTextureToTexture3D=function(M,D,B,F,G=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const dt=M.max.x-M.min.x+1,Mt=M.max.y-M.min.y+1,Rt=M.max.z-M.min.z+1,wt=Et.convert(F.format),Nt=Et.convert(F.type);let At;if(F.isData3DTexture)Lt.setTexture3D(F,0),At=I.TEXTURE_3D;else if(F.isDataArrayTexture)Lt.setTexture2DArray(F,0),At=I.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,F.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,F.unpackAlignment);const kt=I.getParameter(I.UNPACK_ROW_LENGTH),jt=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Kt=I.getParameter(I.UNPACK_SKIP_PIXELS),Ae=I.getParameter(I.UNPACK_SKIP_ROWS),Ge=I.getParameter(I.UNPACK_SKIP_IMAGES),$t=B.isCompressedTexture?B.mipmaps[0]:B.image;I.pixelStorei(I.UNPACK_ROW_LENGTH,$t.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,$t.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,M.min.x),I.pixelStorei(I.UNPACK_SKIP_ROWS,M.min.y),I.pixelStorei(I.UNPACK_SKIP_IMAGES,M.min.z),B.isDataTexture||B.isData3DTexture?I.texSubImage3D(At,G,D.x,D.y,D.z,dt,Mt,Rt,wt,Nt,$t.data):B.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),I.compressedTexSubImage3D(At,G,D.x,D.y,D.z,dt,Mt,Rt,wt,$t.data)):I.texSubImage3D(At,G,D.x,D.y,D.z,dt,Mt,Rt,wt,Nt,$t),I.pixelStorei(I.UNPACK_ROW_LENGTH,kt),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,jt),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Kt),I.pixelStorei(I.UNPACK_SKIP_ROWS,Ae),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Ge),G===0&&F.generateMipmaps&&I.generateMipmap(At),Tt.unbindTexture()},this.initTexture=function(M){M.isCubeTexture?Lt.setTextureCube(M,0):M.isData3DTexture?Lt.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?Lt.setTexture2DArray(M,0):Lt.setTexture2D(M,0),Tt.unbindTexture()},this.resetState=function(){y=0,C=0,w=null,Tt.reset(),gt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ke}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===ho?"display-p3":"srgb",e.unpackColorSpace=Wt.workingColorSpace===fs?"display-p3":"srgb"}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(t){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!t}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===le?Si:pa}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Si?le:$e}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class rp extends La{}rp.prototype.isWebGL1Renderer=!0;class ap extends be{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class lp extends wn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ht(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Hr=new L,Vr=new L,Xr=new re,Ks=new ps,Qn=new ds;class cp extends be{constructor(t=new Je,e=new lp){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let s=1,o=e.count;s<o;s++)Hr.fromBufferAttribute(e,s-1),Vr.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=Hr.distanceTo(Vr);t.setAttribute("lineDistance",new Ne(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,o=t.params.Line.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Qn.copy(i.boundingSphere),Qn.applyMatrix4(s),Qn.radius+=o,t.ray.intersectsSphere(Qn)===!1)return;Xr.copy(s).invert(),Ks.copy(t.ray).applyMatrix4(Xr);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,h=new L,c=new L,d=new L,f=new L,m=this.isLineSegments?2:1,_=i.index,p=i.attributes.position;if(_!==null){const u=Math.max(0,r.start),A=Math.min(_.count,r.start+r.count);for(let v=u,E=A-1;v<E;v+=m){const y=_.getX(v),C=_.getX(v+1);if(h.fromBufferAttribute(p,y),c.fromBufferAttribute(p,C),Ks.distanceSqToSegment(h,c,f,d)>l)continue;f.applyMatrix4(this.matrixWorld);const W=t.ray.origin.distanceTo(f);W<t.near||W>t.far||e.push({distance:W,point:d.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const u=Math.max(0,r.start),A=Math.min(p.count,r.start+r.count);for(let v=u,E=A-1;v<E;v+=m){if(h.fromBufferAttribute(p,v),c.fromBufferAttribute(p,v+1),Ks.distanceSqToSegment(h,c,f,d)>l)continue;f.applyMatrix4(this.matrixWorld);const C=t.ray.origin.distanceTo(f);C<t.near||C>t.far||e.push({distance:C,point:d.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){const a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}const qr=new L,Yr=new L;class hp extends cp{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let s=0,o=e.count;s<o;s+=2)qr.fromBufferAttribute(e,s),Yr.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+qr.distanceTo(Yr);t.setAttribute("lineDistance",new Ne(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}const ts=new L,es=new L,Zs=new L,is=new we;class up extends Je{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const s=Math.pow(10,4),o=Math.cos(Ji*e),r=t.getIndex(),a=t.getAttribute("position"),l=r?r.count:a.count,h=[0,0,0],c=["a","b","c"],d=new Array(3),f={},m=[];for(let _=0;_<l;_+=3){r?(h[0]=r.getX(_),h[1]=r.getX(_+1),h[2]=r.getX(_+2)):(h[0]=_,h[1]=_+1,h[2]=_+2);const{a:x,b:p,c:u}=is;if(x.fromBufferAttribute(a,h[0]),p.fromBufferAttribute(a,h[1]),u.fromBufferAttribute(a,h[2]),is.getNormal(Zs),d[0]=`${Math.round(x.x*s)},${Math.round(x.y*s)},${Math.round(x.z*s)}`,d[1]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,d[2]=`${Math.round(u.x*s)},${Math.round(u.y*s)},${Math.round(u.z*s)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let A=0;A<3;A++){const v=(A+1)%3,E=d[A],y=d[v],C=is[c[A]],w=is[c[v]],W=`${E}_${y}`,b=`${y}_${E}`;b in f&&f[b]?(Zs.dot(f[b].normal)<=o&&(m.push(C.x,C.y,C.z),m.push(w.x,w.y,w.z)),f[b]=null):W in f||(f[W]={index0:h[A],index1:h[v],normal:Zs.clone()})}}for(const _ in f)if(f[_]){const{index0:x,index1:p}=f[_];ts.fromBufferAttribute(a,x),es.fromBufferAttribute(a,p),m.push(ts.x,ts.y,ts.z),m.push(es.x,es.y,es.z)}this.setAttribute("position",new Ne(m,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class jr{constructor(t,e,i=0,s=1/0){this.ray=new ps(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new fo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,i=[]){return ro(t,this,i,e),i.sort(Kr),i}intersectObjects(t,e=!0,i=[]){for(let s=0,o=t.length;s<o;s++)ro(t[s],this,i,e);return i.sort(Kr),i}}function Kr(n,t){return n.distance-t.distance}function ro(n,t,e,i){if(n.layers.test(t.layers)&&n.raycast(t,e),i===!0){const s=n.children;for(let o=0,r=s.length;o<r;o++)ro(s[o],t,e,!0)}}class Zr{constructor(t=1,e=0,i=0){return this.radius=t,this.phi=e,this.theta=i,this}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(fe(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:lo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=lo);class fp{constructor(t,e,i){this.blockGroup=new Ki;const s=new dn(1,1,1);let o=[new je({color:11997748,side:xe}),new je({color:16734208,side:xe}),new je({color:16777215,side:xe}),new je({color:16768768,side:xe}),new je({color:39768,side:xe}),new je({color:18093,side:xe})];this.blockMesh=new Ze(s,o);const r=new up(this.blockMesh.geometry),a=new je({color:0});this.lineMesh=new hp(r,a),this.blockGroup.add(this.blockMesh),this.blockGroup.add(this.lineMesh),this.blockGroup.position.x=t,this.blockGroup.position.y=e,this.blockGroup.position.z=i}}var tn=Object.freeze({Linear:Object.freeze({None:function(n){return n},In:function(n){return this.None(n)},Out:function(n){return this.None(n)},InOut:function(n){return this.None(n)}}),Quadratic:Object.freeze({In:function(n){return n*n},Out:function(n){return n*(2-n)},InOut:function(n){return(n*=2)<1?.5*n*n:-.5*(--n*(n-2)-1)}}),Cubic:Object.freeze({In:function(n){return n*n*n},Out:function(n){return--n*n*n+1},InOut:function(n){return(n*=2)<1?.5*n*n*n:.5*((n-=2)*n*n+2)}}),Quartic:Object.freeze({In:function(n){return n*n*n*n},Out:function(n){return 1- --n*n*n*n},InOut:function(n){return(n*=2)<1?.5*n*n*n*n:-.5*((n-=2)*n*n*n-2)}}),Quintic:Object.freeze({In:function(n){return n*n*n*n*n},Out:function(n){return--n*n*n*n*n+1},InOut:function(n){return(n*=2)<1?.5*n*n*n*n*n:.5*((n-=2)*n*n*n*n+2)}}),Sinusoidal:Object.freeze({In:function(n){return 1-Math.sin((1-n)*Math.PI/2)},Out:function(n){return Math.sin(n*Math.PI/2)},InOut:function(n){return .5*(1-Math.sin(Math.PI*(.5-n)))}}),Exponential:Object.freeze({In:function(n){return n===0?0:Math.pow(1024,n-1)},Out:function(n){return n===1?1:1-Math.pow(2,-10*n)},InOut:function(n){return n===0?0:n===1?1:(n*=2)<1?.5*Math.pow(1024,n-1):.5*(-Math.pow(2,-10*(n-1))+2)}}),Circular:Object.freeze({In:function(n){return 1-Math.sqrt(1-n*n)},Out:function(n){return Math.sqrt(1- --n*n)},InOut:function(n){return(n*=2)<1?-.5*(Math.sqrt(1-n*n)-1):.5*(Math.sqrt(1-(n-=2)*n)+1)}}),Elastic:Object.freeze({In:function(n){return n===0?0:n===1?1:-Math.pow(2,10*(n-1))*Math.sin((n-1.1)*5*Math.PI)},Out:function(n){return n===0?0:n===1?1:Math.pow(2,-10*n)*Math.sin((n-.1)*5*Math.PI)+1},InOut:function(n){return n===0?0:n===1?1:(n*=2,n<1?-.5*Math.pow(2,10*(n-1))*Math.sin((n-1.1)*5*Math.PI):.5*Math.pow(2,-10*(n-1))*Math.sin((n-1.1)*5*Math.PI)+1)}}),Back:Object.freeze({In:function(n){var t=1.70158;return n===1?1:n*n*((t+1)*n-t)},Out:function(n){var t=1.70158;return n===0?0:--n*n*((t+1)*n+t)+1},InOut:function(n){var t=2.5949095;return(n*=2)<1?.5*(n*n*((t+1)*n-t)):.5*((n-=2)*n*((t+1)*n+t)+2)}}),Bounce:Object.freeze({In:function(n){return 1-tn.Bounce.Out(1-n)},Out:function(n){return n<1/2.75?7.5625*n*n:n<2/2.75?7.5625*(n-=1.5/2.75)*n+.75:n<2.5/2.75?7.5625*(n-=2.25/2.75)*n+.9375:7.5625*(n-=2.625/2.75)*n+.984375},InOut:function(n){return n<.5?tn.Bounce.In(n*2)*.5:tn.Bounce.Out(n*2-1)*.5+.5}}),generatePow:function(n){return n===void 0&&(n=4),n=n<Number.EPSILON?Number.EPSILON:n,n=n>1e4?1e4:n,{In:function(t){return Math.pow(t,n)},Out:function(t){return 1-Math.pow(1-t,n)},InOut:function(t){return t<.5?Math.pow(t*2,n)/2:(1-Math.pow(2-t*2,n))/2+.5}}}}),Zi=function(){return performance.now()},Pa=function(){function n(){this._tweens={},this._tweensAddedDuringUpdate={}}return n.prototype.getAll=function(){var t=this;return Object.keys(this._tweens).map(function(e){return t._tweens[e]})},n.prototype.removeAll=function(){this._tweens={}},n.prototype.add=function(t){this._tweens[t.getId()]=t,this._tweensAddedDuringUpdate[t.getId()]=t},n.prototype.remove=function(t){delete this._tweens[t.getId()],delete this._tweensAddedDuringUpdate[t.getId()]},n.prototype.update=function(t,e){t===void 0&&(t=Zi()),e===void 0&&(e=!1);var i=Object.keys(this._tweens);if(i.length===0)return!1;for(;i.length>0;){this._tweensAddedDuringUpdate={};for(var s=0;s<i.length;s++){var o=this._tweens[i[s]],r=!e;o&&o.update(t,r)===!1&&!e&&delete this._tweens[i[s]]}i=Object.keys(this._tweensAddedDuringUpdate)}return!0},n}(),vi={Linear:function(n,t){var e=n.length-1,i=e*t,s=Math.floor(i),o=vi.Utils.Linear;return t<0?o(n[0],n[1],i):t>1?o(n[e],n[e-1],e-i):o(n[s],n[s+1>e?e:s+1],i-s)},Bezier:function(n,t){for(var e=0,i=n.length-1,s=Math.pow,o=vi.Utils.Bernstein,r=0;r<=i;r++)e+=s(1-t,i-r)*s(t,r)*n[r]*o(i,r);return e},CatmullRom:function(n,t){var e=n.length-1,i=e*t,s=Math.floor(i),o=vi.Utils.CatmullRom;return n[0]===n[e]?(t<0&&(s=Math.floor(i=e*(1+t))),o(n[(s-1+e)%e],n[s],n[(s+1)%e],n[(s+2)%e],i-s)):t<0?n[0]-(o(n[0],n[0],n[1],n[1],-i)-n[0]):t>1?n[e]-(o(n[e],n[e],n[e-1],n[e-1],i-e)-n[e]):o(n[s?s-1:0],n[s],n[e<s+1?e:s+1],n[e<s+2?e:s+2],i-s)},Utils:{Linear:function(n,t,e){return(t-n)*e+n},Bernstein:function(n,t){var e=vi.Utils.Factorial;return e(n)/e(t)/e(n-t)},Factorial:function(){var n=[1];return function(t){var e=1;if(n[t])return n[t];for(var i=t;i>1;i--)e*=i;return n[t]=e,e}}(),CatmullRom:function(n,t,e,i,s){var o=(e-n)*.5,r=(i-t)*.5,a=s*s,l=s*a;return(2*t-2*e+o+r)*l+(-3*t+3*e-2*o-r)*a+o*s+t}}},_o=function(){function n(){}return n.nextId=function(){return n._nextId++},n._nextId=0,n}(),ao=new Pa,dp=function(){function n(t,e){e===void 0&&(e=ao),this._object=t,this._group=e,this._isPaused=!1,this._pauseStart=0,this._valuesStart={},this._valuesEnd={},this._valuesStartRepeat={},this._duration=1e3,this._isDynamic=!1,this._initialRepeat=0,this._repeat=0,this._yoyo=!1,this._isPlaying=!1,this._reversed=!1,this._delayTime=0,this._startTime=0,this._easingFunction=tn.Linear.None,this._interpolationFunction=vi.Linear,this._chainedTweens=[],this._onStartCallbackFired=!1,this._onEveryStartCallbackFired=!1,this._id=_o.nextId(),this._isChainStopped=!1,this._propertiesAreSetUp=!1,this._goToEnd=!1}return n.prototype.getId=function(){return this._id},n.prototype.isPlaying=function(){return this._isPlaying},n.prototype.isPaused=function(){return this._isPaused},n.prototype.to=function(t,e){if(e===void 0&&(e=1e3),this._isPlaying)throw new Error("Can not call Tween.to() while Tween is already started or paused. Stop the Tween first.");return this._valuesEnd=t,this._propertiesAreSetUp=!1,this._duration=e,this},n.prototype.duration=function(t){return t===void 0&&(t=1e3),this._duration=t,this},n.prototype.dynamic=function(t){return t===void 0&&(t=!1),this._isDynamic=t,this},n.prototype.start=function(t,e){if(t===void 0&&(t=Zi()),e===void 0&&(e=!1),this._isPlaying)return this;if(this._group&&this._group.add(this),this._repeat=this._initialRepeat,this._reversed){this._reversed=!1;for(var i in this._valuesStartRepeat)this._swapEndStartRepeatValues(i),this._valuesStart[i]=this._valuesStartRepeat[i]}if(this._isPlaying=!0,this._isPaused=!1,this._onStartCallbackFired=!1,this._onEveryStartCallbackFired=!1,this._isChainStopped=!1,this._startTime=t,this._startTime+=this._delayTime,!this._propertiesAreSetUp||e){if(this._propertiesAreSetUp=!0,!this._isDynamic){var s={};for(var o in this._valuesEnd)s[o]=this._valuesEnd[o];this._valuesEnd=s}this._setupProperties(this._object,this._valuesStart,this._valuesEnd,this._valuesStartRepeat,e)}return this},n.prototype.startFromCurrentValues=function(t){return this.start(t,!0)},n.prototype._setupProperties=function(t,e,i,s,o){for(var r in i){var a=t[r],l=Array.isArray(a),h=l?"array":typeof a,c=!l&&Array.isArray(i[r]);if(!(h==="undefined"||h==="function")){if(c){var d=i[r];if(d.length===0)continue;for(var f=[a],m=0,_=d.length;m<_;m+=1){var x=this._handleRelativeValue(a,d[m]);if(isNaN(x)){c=!1,console.warn("Found invalid interpolation list. Skipping.");break}f.push(x)}c&&(i[r]=f)}if((h==="object"||l)&&a&&!c){e[r]=l?[]:{};var p=a;for(var u in p)e[r][u]=p[u];s[r]=l?[]:{};var d=i[r];if(!this._isDynamic){var A={};for(var u in d)A[u]=d[u];i[r]=d=A}this._setupProperties(p,e[r],d,s[r],o)}else(typeof e[r]>"u"||o)&&(e[r]=a),l||(e[r]*=1),c?s[r]=i[r].slice().reverse():s[r]=e[r]||0}}},n.prototype.stop=function(){return this._isChainStopped||(this._isChainStopped=!0,this.stopChainedTweens()),this._isPlaying?(this._group&&this._group.remove(this),this._isPlaying=!1,this._isPaused=!1,this._onStopCallback&&this._onStopCallback(this._object),this):this},n.prototype.end=function(){return this._goToEnd=!0,this.update(1/0),this},n.prototype.pause=function(t){return t===void 0&&(t=Zi()),this._isPaused||!this._isPlaying?this:(this._isPaused=!0,this._pauseStart=t,this._group&&this._group.remove(this),this)},n.prototype.resume=function(t){return t===void 0&&(t=Zi()),!this._isPaused||!this._isPlaying?this:(this._isPaused=!1,this._startTime+=t-this._pauseStart,this._pauseStart=0,this._group&&this._group.add(this),this)},n.prototype.stopChainedTweens=function(){for(var t=0,e=this._chainedTweens.length;t<e;t++)this._chainedTweens[t].stop();return this},n.prototype.group=function(t){return t===void 0&&(t=ao),this._group=t,this},n.prototype.delay=function(t){return t===void 0&&(t=0),this._delayTime=t,this},n.prototype.repeat=function(t){return t===void 0&&(t=0),this._initialRepeat=t,this._repeat=t,this},n.prototype.repeatDelay=function(t){return this._repeatDelayTime=t,this},n.prototype.yoyo=function(t){return t===void 0&&(t=!1),this._yoyo=t,this},n.prototype.easing=function(t){return t===void 0&&(t=tn.Linear.None),this._easingFunction=t,this},n.prototype.interpolation=function(t){return t===void 0&&(t=vi.Linear),this._interpolationFunction=t,this},n.prototype.chain=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return this._chainedTweens=t,this},n.prototype.onStart=function(t){return this._onStartCallback=t,this},n.prototype.onEveryStart=function(t){return this._onEveryStartCallback=t,this},n.prototype.onUpdate=function(t){return this._onUpdateCallback=t,this},n.prototype.onRepeat=function(t){return this._onRepeatCallback=t,this},n.prototype.onComplete=function(t){return this._onCompleteCallback=t,this},n.prototype.onStop=function(t){return this._onStopCallback=t,this},n.prototype.update=function(t,e){if(t===void 0&&(t=Zi()),e===void 0&&(e=!0),this._isPaused)return!0;var i,s,o=this._startTime+this._duration;if(!this._goToEnd&&!this._isPlaying){if(t>o)return!1;e&&this.start(t,!0)}if(this._goToEnd=!1,t<this._startTime)return!0;this._onStartCallbackFired===!1&&(this._onStartCallback&&this._onStartCallback(this._object),this._onStartCallbackFired=!0),this._onEveryStartCallbackFired===!1&&(this._onEveryStartCallback&&this._onEveryStartCallback(this._object),this._onEveryStartCallbackFired=!0),s=(t-this._startTime)/this._duration,s=this._duration===0||s>1?1:s;var r=this._easingFunction(s);if(this._updateProperties(this._object,this._valuesStart,this._valuesEnd,r),this._onUpdateCallback&&this._onUpdateCallback(this._object,s),s===1)if(this._repeat>0){isFinite(this._repeat)&&this._repeat--;for(i in this._valuesStartRepeat)!this._yoyo&&typeof this._valuesEnd[i]=="string"&&(this._valuesStartRepeat[i]=this._valuesStartRepeat[i]+parseFloat(this._valuesEnd[i])),this._yoyo&&this._swapEndStartRepeatValues(i),this._valuesStart[i]=this._valuesStartRepeat[i];return this._yoyo&&(this._reversed=!this._reversed),this._repeatDelayTime!==void 0?this._startTime=t+this._repeatDelayTime:this._startTime=t+this._delayTime,this._onRepeatCallback&&this._onRepeatCallback(this._object),this._onEveryStartCallbackFired=!1,!0}else{this._onCompleteCallback&&this._onCompleteCallback(this._object);for(var a=0,l=this._chainedTweens.length;a<l;a++)this._chainedTweens[a].start(this._startTime+this._duration,!1);return this._isPlaying=!1,!1}return!0},n.prototype._updateProperties=function(t,e,i,s){for(var o in i)if(e[o]!==void 0){var r=e[o]||0,a=i[o],l=Array.isArray(t[o]),h=Array.isArray(a),c=!l&&h;c?t[o]=this._interpolationFunction(a,s):typeof a=="object"&&a?this._updateProperties(t[o],r,a,s):(a=this._handleRelativeValue(r,a),typeof a=="number"&&(t[o]=r+(a-r)*s))}},n.prototype._handleRelativeValue=function(t,e){return typeof e!="string"?e:e.charAt(0)==="+"||e.charAt(0)==="-"?t+parseFloat(e):parseFloat(e)},n.prototype._swapEndStartRepeatValues=function(t){var e=this._valuesStartRepeat[t],i=this._valuesEnd[t];typeof i=="string"?this._valuesStartRepeat[t]=this._valuesStartRepeat[t]+parseFloat(i):this._valuesStartRepeat[t]=this._valuesEnd[t],this._valuesEnd[t]=e},n}(),pp="21.0.0",mp=_o.nextId,Be=ao,_p=Be.getAll.bind(Be),gp=Be.removeAll.bind(Be),xp=Be.add.bind(Be),vp=Be.remove.bind(Be),bp=Be.update.bind(Be),Yt={Easing:tn,Group:Pa,Interpolation:vi,now:Zi,Sequence:_o,nextId:mp,Tween:dp,VERSION:pp,getAll:_p,removeAll:gp,add:xp,remove:vp,update:bp};class Mp{constructor(t){this.xAxis=new L(1,0,0),this.yAxis=new L(0,1,0),this.zAxis=new L(0,0,1),this.cubeGroup=new Ki,this.tween=null,this.isRotating=!1,this.blocks=[];let e=0;for(let i=0;i<t;i++)for(let s=1;s<t+1;s++)for(let o=0;o<t;o++)this.blocks[e]=new fp(i,s,o),e+=1;this.blocks.forEach(i=>{this.cubeGroup.add(i.blockGroup)})}rotateLeft(t){this.blocks[9].blockGroup.children[0].materials;let e=[this.blocks[0].blockGroup,this.blocks[1].blockGroup,this.blocks[2].blockGroup,this.blocks[5].blockGroup,this.blocks[8].blockGroup,this.blocks[7].blockGroup,this.blocks[6].blockGroup,this.blocks[3].blockGroup],i=e.slice(-2).concat(e.slice(0,-2)),s=0;const o=new Yt.Tween({ele1position:e[0].position,ele2position:e[1].position,ele3position:e[2].position,ele4position:e[3].position,ele5position:e[4].position,ele6position:e[5].position,ele7position:e[6].position,ele8position:e[7].position,rotation:0}).to({ele1position:i[0].position,ele2position:i[1].position,ele3position:i[2].position,ele4position:i[3].position,ele5position:i[4].position,ele6position:i[5].position,ele7position:i[6].position,ele8position:i[7].position,rotation:Math.PI/2},t).onUpdate(r=>{e[0].rotateOnWorldAxis(this.xAxis,r.rotation-s),e[1].rotateOnWorldAxis(this.xAxis,r.rotation-s),e[2].rotateOnWorldAxis(this.xAxis,r.rotation-s),e[3].rotateOnWorldAxis(this.xAxis,r.rotation-s),e[4].rotateOnWorldAxis(this.xAxis,r.rotation-s),e[5].rotateOnWorldAxis(this.xAxis,r.rotation-s),e[6].rotateOnWorldAxis(this.xAxis,r.rotation-s),e[7].rotateOnWorldAxis(this.xAxis,r.rotation-s),this.blocks[4].blockGroup.rotateOnWorldAxis(this.xAxis,r.rotation-s),s=r.rotation}).onComplete(()=>{let r=this.blocks[0];this.blocks[0]=this.blocks[2],this.blocks[2]=this.blocks[8],this.blocks[8]=this.blocks[6],this.blocks[6]=r,r=this.blocks[1],this.blocks[1]=this.blocks[5],this.blocks[5]=this.blocks[7],this.blocks[7]=this.blocks[3],this.blocks[3]=r,o.stop()});return o}rotateLeftInverted(t){let e=[this.blocks[0].blockGroup,this.blocks[1].blockGroup,this.blocks[2].blockGroup,this.blocks[5].blockGroup,this.blocks[8].blockGroup,this.blocks[7].blockGroup,this.blocks[6].blockGroup,this.blocks[3].blockGroup],i=e.slice(2).concat(e.slice(0,2)),s=0;const o=new Yt.Tween({ele1position:e[0].position,ele2position:e[1].position,ele3position:e[2].position,ele4position:e[3].position,ele5position:e[4].position,ele6position:e[5].position,ele7position:e[6].position,ele8position:e[7].position,rotation:0}).to({ele1position:i[0].position,ele2position:i[1].position,ele3position:i[2].position,ele4position:i[3].position,ele5position:i[4].position,ele6position:i[5].position,ele7position:i[6].position,ele8position:i[7].position,rotation:-Math.PI/2},t).onUpdate(r=>{e[0].rotateOnWorldAxis(this.xAxis,r.rotation-s),e[1].rotateOnWorldAxis(this.xAxis,r.rotation-s),e[2].rotateOnWorldAxis(this.xAxis,r.rotation-s),e[3].rotateOnWorldAxis(this.xAxis,r.rotation-s),e[4].rotateOnWorldAxis(this.xAxis,r.rotation-s),e[5].rotateOnWorldAxis(this.xAxis,r.rotation-s),e[6].rotateOnWorldAxis(this.xAxis,r.rotation-s),e[7].rotateOnWorldAxis(this.xAxis,r.rotation-s),this.blocks[4].blockGroup.rotateOnWorldAxis(this.xAxis,r.rotation-s),s=r.rotation}).onComplete(()=>{let r=this.blocks[0];this.blocks[0]=this.blocks[6],this.blocks[6]=this.blocks[8],this.blocks[8]=this.blocks[2],this.blocks[2]=r,r=this.blocks[1],this.blocks[1]=this.blocks[3],this.blocks[3]=this.blocks[7],this.blocks[7]=this.blocks[5],this.blocks[5]=r,o.stop()});return o}rotateDown(t){let e=[this.blocks[0].blockGroup,this.blocks[9].blockGroup,this.blocks[18].blockGroup,this.blocks[19].blockGroup,this.blocks[20].blockGroup,this.blocks[11].blockGroup,this.blocks[2].blockGroup,this.blocks[1].blockGroup],i=e.slice(-2).concat(e.slice(0,-2)),s=0;const o=new Yt.Tween({ele1position:e[0].position,ele2position:e[1].position,ele3position:e[2].position,ele4position:e[3].position,ele5position:e[4].position,ele6position:e[5].position,ele7position:e[6].position,ele8position:e[7].position,rotation:0}).to({ele1position:i[0].position,ele2position:i[1].position,ele3position:i[2].position,ele4position:i[3].position,ele5position:i[4].position,ele6position:i[5].position,ele7position:i[6].position,ele8position:i[7].position,rotation:Math.PI/2},t).onUpdate(r=>{e[0].rotateOnWorldAxis(this.yAxis,r.rotation-s),e[1].rotateOnWorldAxis(this.yAxis,r.rotation-s),e[2].rotateOnWorldAxis(this.yAxis,r.rotation-s),e[3].rotateOnWorldAxis(this.yAxis,r.rotation-s),e[4].rotateOnWorldAxis(this.yAxis,r.rotation-s),e[5].rotateOnWorldAxis(this.yAxis,r.rotation-s),e[6].rotateOnWorldAxis(this.yAxis,r.rotation-s),e[7].rotateOnWorldAxis(this.yAxis,r.rotation-s),this.blocks[10].blockGroup.rotateOnWorldAxis(this.yAxis,r.rotation-s),s=r.rotation}).onComplete(()=>{let r=this.blocks[0];this.blocks[0]=this.blocks[18],this.blocks[18]=this.blocks[20],this.blocks[20]=this.blocks[2],this.blocks[2]=r,r=this.blocks[1],this.blocks[1]=this.blocks[9],this.blocks[9]=this.blocks[19],this.blocks[19]=this.blocks[11],this.blocks[11]=r,o.stop()});return o}rotateDownInverted(t){let e=[this.blocks[0].blockGroup,this.blocks[9].blockGroup,this.blocks[18].blockGroup,this.blocks[19].blockGroup,this.blocks[20].blockGroup,this.blocks[11].blockGroup,this.blocks[2].blockGroup,this.blocks[1].blockGroup],i=e.slice(2).concat(e.slice(0,2)),s=0;const o=new Yt.Tween({ele1position:e[0].position,ele2position:e[1].position,ele3position:e[2].position,ele4position:e[3].position,ele5position:e[4].position,ele6position:e[5].position,ele7position:e[6].position,ele8position:e[7].position,rotation:0}).to({ele1position:i[0].position,ele2position:i[1].position,ele3position:i[2].position,ele4position:i[3].position,ele5position:i[4].position,ele6position:i[5].position,ele7position:i[6].position,ele8position:i[7].position,rotation:-Math.PI/2},t).onUpdate(r=>{e[0].rotateOnWorldAxis(this.yAxis,r.rotation-s),e[1].rotateOnWorldAxis(this.yAxis,r.rotation-s),e[2].rotateOnWorldAxis(this.yAxis,r.rotation-s),e[3].rotateOnWorldAxis(this.yAxis,r.rotation-s),e[4].rotateOnWorldAxis(this.yAxis,r.rotation-s),e[5].rotateOnWorldAxis(this.yAxis,r.rotation-s),e[6].rotateOnWorldAxis(this.yAxis,r.rotation-s),e[7].rotateOnWorldAxis(this.yAxis,r.rotation-s),this.blocks[10].blockGroup.rotateOnWorldAxis(this.yAxis,r.rotation-s),s=r.rotation}).onComplete(()=>{let r=this.blocks[0];this.blocks[0]=this.blocks[2],this.blocks[2]=this.blocks[20],this.blocks[20]=this.blocks[18],this.blocks[18]=r,r=this.blocks[9],this.blocks[9]=this.blocks[1],this.blocks[1]=this.blocks[11],this.blocks[11]=this.blocks[19],this.blocks[19]=r,o.stop()});return o}rotateUp(t){let e=[this.blocks[6].blockGroup,this.blocks[15].blockGroup,this.blocks[24].blockGroup,this.blocks[25].blockGroup,this.blocks[26].blockGroup,this.blocks[17].blockGroup,this.blocks[8].blockGroup,this.blocks[7].blockGroup],i=e.slice(2).concat(e.slice(0,2)),s=0;const o=new Yt.Tween({ele1position:e[0].position,ele2position:e[1].position,ele3position:e[2].position,ele4position:e[3].position,ele5position:e[4].position,ele6position:e[5].position,ele7position:e[6].position,ele8position:e[7].position,rotation:0}).to({ele1position:i[0].position,ele2position:i[1].position,ele3position:i[2].position,ele4position:i[3].position,ele5position:i[4].position,ele6position:i[5].position,ele7position:i[6].position,ele8position:i[7].position,rotation:-Math.PI/2},t).onUpdate(r=>{e[0].rotateOnWorldAxis(this.yAxis,r.rotation-s),e[1].rotateOnWorldAxis(this.yAxis,r.rotation-s),e[2].rotateOnWorldAxis(this.yAxis,r.rotation-s),e[3].rotateOnWorldAxis(this.yAxis,r.rotation-s),e[4].rotateOnWorldAxis(this.yAxis,r.rotation-s),e[5].rotateOnWorldAxis(this.yAxis,r.rotation-s),e[6].rotateOnWorldAxis(this.yAxis,r.rotation-s),e[7].rotateOnWorldAxis(this.yAxis,r.rotation-s),this.blocks[16].blockGroup.rotateOnWorldAxis(this.yAxis,r.rotation-s),s=r.rotation}).onComplete(()=>{let r=this.blocks[6];this.blocks[6]=this.blocks[8],this.blocks[8]=this.blocks[26],this.blocks[26]=this.blocks[24],this.blocks[24]=r,r=this.blocks[7],this.blocks[7]=this.blocks[17],this.blocks[17]=this.blocks[25],this.blocks[25]=this.blocks[15],this.blocks[15]=r,o.stop()});return o}rotateUpInverted(t){let e=[this.blocks[6].blockGroup,this.blocks[15].blockGroup,this.blocks[24].blockGroup,this.blocks[25].blockGroup,this.blocks[26].blockGroup,this.blocks[17].blockGroup,this.blocks[8].blockGroup,this.blocks[7].blockGroup],i=e.slice(-2).concat(e.slice(0,-2)),s=0;const o=new Yt.Tween({ele1position:e[0].position,ele2position:e[1].position,ele3position:e[2].position,ele4position:e[3].position,ele5position:e[4].position,ele6position:e[5].position,ele7position:e[6].position,ele8position:e[7].position,rotation:0}).to({ele1position:i[0].position,ele2position:i[1].position,ele3position:i[2].position,ele4position:i[3].position,ele5position:i[4].position,ele6position:i[5].position,ele7position:i[6].position,ele8position:i[7].position,rotation:Math.PI/2},t).onUpdate(r=>{e[0].rotateOnWorldAxis(this.yAxis,r.rotation-s),e[1].rotateOnWorldAxis(this.yAxis,r.rotation-s),e[2].rotateOnWorldAxis(this.yAxis,r.rotation-s),e[3].rotateOnWorldAxis(this.yAxis,r.rotation-s),e[4].rotateOnWorldAxis(this.yAxis,r.rotation-s),e[5].rotateOnWorldAxis(this.yAxis,r.rotation-s),e[6].rotateOnWorldAxis(this.yAxis,r.rotation-s),e[7].rotateOnWorldAxis(this.yAxis,r.rotation-s),this.blocks[16].blockGroup.rotateOnWorldAxis(this.yAxis,r.rotation-s),s=r.rotation}).onComplete(()=>{let r=this.blocks[6];this.blocks[6]=this.blocks[24],this.blocks[24]=this.blocks[26],this.blocks[26]=this.blocks[8],this.blocks[8]=r,r=this.blocks[7],this.blocks[7]=this.blocks[15],this.blocks[15]=this.blocks[25],this.blocks[25]=this.blocks[17],this.blocks[17]=r,o.stop()});return o}rotateRight(t){let e=[this.blocks[18].blockGroup,this.blocks[19].blockGroup,this.blocks[20].blockGroup,this.blocks[23].blockGroup,this.blocks[26].blockGroup,this.blocks[25].blockGroup,this.blocks[24].blockGroup,this.blocks[21].blockGroup],i=e.slice(2).concat(e.slice(0,2)),s=0;const o=new Yt.Tween({ele1position:e[0].position,ele2position:e[1].position,ele3position:e[2].position,ele4position:e[3].position,ele5position:e[4].position,ele6position:e[5].position,ele7position:e[6].position,ele8position:e[7].position,rotation:0}).to({ele1position:i[0].position,ele2position:i[1].position,ele3position:i[2].position,ele4position:i[3].position,ele5position:i[4].position,ele6position:i[5].position,ele7position:i[6].position,ele8position:i[7].position,rotation:-Math.PI/2},t).onUpdate(r=>{e[0].rotateOnWorldAxis(this.xAxis,r.rotation-s),e[1].rotateOnWorldAxis(this.xAxis,r.rotation-s),e[2].rotateOnWorldAxis(this.xAxis,r.rotation-s),e[3].rotateOnWorldAxis(this.xAxis,r.rotation-s),e[4].rotateOnWorldAxis(this.xAxis,r.rotation-s),e[5].rotateOnWorldAxis(this.xAxis,r.rotation-s),e[6].rotateOnWorldAxis(this.xAxis,r.rotation-s),e[7].rotateOnWorldAxis(this.xAxis,r.rotation-s),this.blocks[22].blockGroup.rotateOnWorldAxis(this.xAxis,r.rotation-s),s=r.rotation}).onComplete(()=>{let r=this.blocks[18];this.blocks[18]=this.blocks[24],this.blocks[24]=this.blocks[26],this.blocks[26]=this.blocks[20],this.blocks[20]=r,r=this.blocks[19],this.blocks[19]=this.blocks[21],this.blocks[21]=this.blocks[25],this.blocks[25]=this.blocks[23],this.blocks[23]=r,o.stop()});return o}rotateRightInverted(t){let e=[this.blocks[18].blockGroup,this.blocks[19].blockGroup,this.blocks[20].blockGroup,this.blocks[23].blockGroup,this.blocks[26].blockGroup,this.blocks[25].blockGroup,this.blocks[24].blockGroup,this.blocks[21].blockGroup],i=e.slice(-2).concat(e.slice(0,-2)),s=0;const o=new Yt.Tween({ele1position:e[0].position,ele2position:e[1].position,ele3position:e[2].position,ele4position:e[3].position,ele5position:e[4].position,ele6position:e[5].position,ele7position:e[6].position,ele8position:e[7].position,rotation:0}).to({ele1position:i[0].position,ele2position:i[1].position,ele3position:i[2].position,ele4position:i[3].position,ele5position:i[4].position,ele6position:i[5].position,ele7position:i[6].position,ele8position:i[7].position,rotation:Math.PI/2},t).onUpdate(r=>{e[0].rotateOnWorldAxis(this.xAxis,r.rotation-s),e[1].rotateOnWorldAxis(this.xAxis,r.rotation-s),e[2].rotateOnWorldAxis(this.xAxis,r.rotation-s),e[3].rotateOnWorldAxis(this.xAxis,r.rotation-s),e[4].rotateOnWorldAxis(this.xAxis,r.rotation-s),e[5].rotateOnWorldAxis(this.xAxis,r.rotation-s),e[6].rotateOnWorldAxis(this.xAxis,r.rotation-s),e[7].rotateOnWorldAxis(this.xAxis,r.rotation-s),this.blocks[22].blockGroup.rotateOnWorldAxis(this.xAxis,r.rotation-s),s=r.rotation}).onComplete(()=>{let r=this.blocks[18];this.blocks[18]=this.blocks[20],this.blocks[20]=this.blocks[26],this.blocks[26]=this.blocks[24],this.blocks[24]=r,r=this.blocks[19],this.blocks[19]=this.blocks[23],this.blocks[23]=this.blocks[25],this.blocks[25]=this.blocks[21],this.blocks[21]=r,o.stop()});return o}rotateBack(t){let e=[this.blocks[0].blockGroup,this.blocks[9].blockGroup,this.blocks[18].blockGroup,this.blocks[21].blockGroup,this.blocks[24].blockGroup,this.blocks[15].blockGroup,this.blocks[6].blockGroup,this.blocks[3].blockGroup],i=e.slice(2).concat(e.slice(0,2)),s=0;const o=new Yt.Tween({ele1position:e[0].position,ele2position:e[1].position,ele3position:e[2].position,ele4position:e[3].position,ele5position:e[4].position,ele6position:e[5].position,ele7position:e[6].position,ele8position:e[7].position,rotation:0}).to({ele1position:i[0].position,ele2position:i[1].position,ele3position:i[2].position,ele4position:i[3].position,ele5position:i[4].position,ele6position:i[5].position,ele7position:i[6].position,ele8position:i[7].position,rotation:Math.PI/2},t).onUpdate(r=>{e[0].rotateOnWorldAxis(this.zAxis,r.rotation-s),e[1].rotateOnWorldAxis(this.zAxis,r.rotation-s),e[2].rotateOnWorldAxis(this.zAxis,r.rotation-s),e[3].rotateOnWorldAxis(this.zAxis,r.rotation-s),e[4].rotateOnWorldAxis(this.zAxis,r.rotation-s),e[5].rotateOnWorldAxis(this.zAxis,r.rotation-s),e[6].rotateOnWorldAxis(this.zAxis,r.rotation-s),e[7].rotateOnWorldAxis(this.zAxis,r.rotation-s),this.blocks[12].blockGroup.rotateOnWorldAxis(this.zAxis,r.rotation-s),s=r.rotation}).onComplete(()=>{let r=this.blocks[0];this.blocks[0]=this.blocks[6],this.blocks[6]=this.blocks[24],this.blocks[24]=this.blocks[18],this.blocks[18]=r,r=this.blocks[3],this.blocks[3]=this.blocks[15],this.blocks[15]=this.blocks[21],this.blocks[21]=this.blocks[9],this.blocks[9]=r,o.stop()});return o}rotateBackInverted(t){let e=[this.blocks[0].blockGroup,this.blocks[9].blockGroup,this.blocks[18].blockGroup,this.blocks[21].blockGroup,this.blocks[24].blockGroup,this.blocks[15].blockGroup,this.blocks[6].blockGroup,this.blocks[3].blockGroup],i=e.slice(-2).concat(e.slice(0,-2)),s=0;const o=new Yt.Tween({ele1position:e[0].position,ele2position:e[1].position,ele3position:e[2].position,ele4position:e[3].position,ele5position:e[4].position,ele6position:e[5].position,ele7position:e[6].position,ele8position:e[7].position,rotation:0}).to({ele1position:i[0].position,ele2position:i[1].position,ele3position:i[2].position,ele4position:i[3].position,ele5position:i[4].position,ele6position:i[5].position,ele7position:i[6].position,ele8position:i[7].position,rotation:-Math.PI/2},t).onUpdate(r=>{e[0].rotateOnWorldAxis(this.zAxis,r.rotation-s),e[1].rotateOnWorldAxis(this.zAxis,r.rotation-s),e[2].rotateOnWorldAxis(this.zAxis,r.rotation-s),e[3].rotateOnWorldAxis(this.zAxis,r.rotation-s),e[4].rotateOnWorldAxis(this.zAxis,r.rotation-s),e[5].rotateOnWorldAxis(this.zAxis,r.rotation-s),e[6].rotateOnWorldAxis(this.zAxis,r.rotation-s),e[7].rotateOnWorldAxis(this.zAxis,r.rotation-s),this.blocks[12].blockGroup.rotateOnWorldAxis(this.zAxis,r.rotation-s),s=r.rotation}).onComplete(()=>{let r=this.blocks[0];this.blocks[0]=this.blocks[18],this.blocks[18]=this.blocks[24],this.blocks[24]=this.blocks[6],this.blocks[6]=r,r=this.blocks[3],this.blocks[3]=this.blocks[9],this.blocks[9]=this.blocks[21],this.blocks[21]=this.blocks[15],this.blocks[15]=r,o.stop()});return o}rotateFront(t){let e=[this.blocks[8].blockGroup,this.blocks[17].blockGroup,this.blocks[26].blockGroup,this.blocks[23].blockGroup,this.blocks[20].blockGroup,this.blocks[11].blockGroup,this.blocks[2].blockGroup,this.blocks[5].blockGroup],i=e.slice(2).concat(e.slice(0,2)),s=0;const o=new Yt.Tween({ele1position:e[0].position,ele2position:e[1].position,ele3position:e[2].position,ele4position:e[3].position,ele5position:e[4].position,ele6position:e[5].position,ele7position:e[6].position,ele8position:e[7].position,rotation:0}).to({ele1position:i[0].position,ele2position:i[1].position,ele3position:i[2].position,ele4position:i[3].position,ele5position:i[4].position,ele6position:i[5].position,ele7position:i[6].position,ele8position:i[7].position,rotation:-Math.PI/2},t).onUpdate(r=>{e[0].rotateOnWorldAxis(this.zAxis,r.rotation-s),e[1].rotateOnWorldAxis(this.zAxis,r.rotation-s),e[2].rotateOnWorldAxis(this.zAxis,r.rotation-s),e[3].rotateOnWorldAxis(this.zAxis,r.rotation-s),e[4].rotateOnWorldAxis(this.zAxis,r.rotation-s),e[5].rotateOnWorldAxis(this.zAxis,r.rotation-s),e[6].rotateOnWorldAxis(this.zAxis,r.rotation-s),e[7].rotateOnWorldAxis(this.zAxis,r.rotation-s),this.blocks[14].blockGroup.rotateOnWorldAxis(this.zAxis,r.rotation-s),s=r.rotation}).onComplete(()=>{let r=this.blocks[2];this.blocks[2]=this.blocks[20],this.blocks[20]=this.blocks[26],this.blocks[26]=this.blocks[8],this.blocks[8]=r,r=this.blocks[5],this.blocks[5]=this.blocks[11],this.blocks[11]=this.blocks[23],this.blocks[23]=this.blocks[17],this.blocks[17]=r,o.stop()});return o}rotateFrontInverted(t){let e=[this.blocks[8].blockGroup,this.blocks[17].blockGroup,this.blocks[26].blockGroup,this.blocks[23].blockGroup,this.blocks[20].blockGroup,this.blocks[11].blockGroup,this.blocks[2].blockGroup,this.blocks[5].blockGroup],i=e.slice(-2).concat(e.slice(0,-2)),s=0;const o=new Yt.Tween({ele1position:e[0].position,ele2position:e[1].position,ele3position:e[2].position,ele4position:e[3].position,ele5position:e[4].position,ele6position:e[5].position,ele7position:e[6].position,ele8position:e[7].position,rotation:0}).to({ele1position:i[0].position,ele2position:i[1].position,ele3position:i[2].position,ele4position:i[3].position,ele5position:i[4].position,ele6position:i[5].position,ele7position:i[6].position,ele8position:i[7].position,rotation:Math.PI/2},t).onUpdate(r=>{e[0].rotateOnWorldAxis(this.zAxis,r.rotation-s),e[1].rotateOnWorldAxis(this.zAxis,r.rotation-s),e[2].rotateOnWorldAxis(this.zAxis,r.rotation-s),e[3].rotateOnWorldAxis(this.zAxis,r.rotation-s),e[4].rotateOnWorldAxis(this.zAxis,r.rotation-s),e[5].rotateOnWorldAxis(this.zAxis,r.rotation-s),e[6].rotateOnWorldAxis(this.zAxis,r.rotation-s),e[7].rotateOnWorldAxis(this.zAxis,r.rotation-s),this.blocks[14].blockGroup.rotateOnWorldAxis(this.zAxis,r.rotation-s),s=r.rotation}).onComplete(()=>{let r=this.blocks[2];this.blocks[2]=this.blocks[8],this.blocks[8]=this.blocks[26],this.blocks[26]=this.blocks[20],this.blocks[20]=r,r=this.blocks[5],this.blocks[5]=this.blocks[17],this.blocks[17]=this.blocks[23],this.blocks[23]=this.blocks[11],this.blocks[11]=r,o.stop()});return o}rotateYInvert(t){let e=[this.blocks[6].blockGroup,this.blocks[15].blockGroup,this.blocks[24].blockGroup,this.blocks[25].blockGroup,this.blocks[26].blockGroup,this.blocks[17].blockGroup,this.blocks[8].blockGroup,this.blocks[7].blockGroup],i=e.slice(-2).concat(e.slice(0,-2)),s=[this.blocks[0].blockGroup,this.blocks[9].blockGroup,this.blocks[18].blockGroup,this.blocks[19].blockGroup,this.blocks[20].blockGroup,this.blocks[11].blockGroup,this.blocks[2].blockGroup,this.blocks[1].blockGroup],o=s.slice(-2).concat(s.slice(0,-2)),r=[this.blocks[3].blockGroup,this.blocks[12].blockGroup,this.blocks[21].blockGroup,this.blocks[22].blockGroup,this.blocks[23].blockGroup,this.blocks[14].blockGroup,this.blocks[5].blockGroup,this.blocks[4].blockGroup],a=r.slice(-2).concat(r.slice(0,-2)),l=0;const h=new Yt.Tween({ele1:e[0].position,ele2:e[1].position,ele3:e[2].position,ele4:e[3].position,ele5:e[4].position,ele6:e[5].position,ele7:e[6].position,ele8:e[7].position,ele9:s[0].position,ele10:s[1].position,ele11:s[2].position,ele12:s[3].position,ele13:s[4].position,ele14:s[5].position,ele15:s[6].position,ele16:s[7].position,ele17:r[0].position,ele18:r[1].position,ele19:r[2].position,ele20:r[3].position,ele21:r[4].position,ele22:r[5].position,ele23:r[6].position,ele24:r[7].position,rotation:0}).to({ele1:i[0].position,ele2:i[1].position,ele3:i[2].position,ele4:i[3].position,ele5:i[4].position,ele6:i[5].position,ele7:i[6].position,ele8:i[7].position,ele9:o[0].position,ele10:o[1].position,ele11:o[2].position,ele12:o[3].position,ele13:o[4].position,ele14:o[5].position,ele15:o[6].position,ele16:o[7].position,ele17:a[0].position,ele18:a[1].position,ele19:a[2].position,ele20:a[3].position,ele21:a[4].position,ele22:a[5].position,ele23:a[6].position,ele24:a[7].position,rotation:Math.PI/2},t).onUpdate(c=>{e[0].rotateOnWorldAxis(this.yAxis,c.rotation-l),e[1].rotateOnWorldAxis(this.yAxis,c.rotation-l),e[2].rotateOnWorldAxis(this.yAxis,c.rotation-l),e[3].rotateOnWorldAxis(this.yAxis,c.rotation-l),e[4].rotateOnWorldAxis(this.yAxis,c.rotation-l),e[5].rotateOnWorldAxis(this.yAxis,c.rotation-l),e[6].rotateOnWorldAxis(this.yAxis,c.rotation-l),e[7].rotateOnWorldAxis(this.yAxis,c.rotation-l),r[0].rotateOnWorldAxis(this.yAxis,c.rotation-l),r[1].rotateOnWorldAxis(this.yAxis,c.rotation-l),r[2].rotateOnWorldAxis(this.yAxis,c.rotation-l),r[3].rotateOnWorldAxis(this.yAxis,c.rotation-l),r[4].rotateOnWorldAxis(this.yAxis,c.rotation-l),r[5].rotateOnWorldAxis(this.yAxis,c.rotation-l),r[6].rotateOnWorldAxis(this.yAxis,c.rotation-l),r[7].rotateOnWorldAxis(this.yAxis,c.rotation-l),s[0].rotateOnWorldAxis(this.yAxis,c.rotation-l),s[1].rotateOnWorldAxis(this.yAxis,c.rotation-l),s[2].rotateOnWorldAxis(this.yAxis,c.rotation-l),s[3].rotateOnWorldAxis(this.yAxis,c.rotation-l),s[4].rotateOnWorldAxis(this.yAxis,c.rotation-l),s[5].rotateOnWorldAxis(this.yAxis,c.rotation-l),s[6].rotateOnWorldAxis(this.yAxis,c.rotation-l),s[7].rotateOnWorldAxis(this.yAxis,c.rotation-l),this.blocks[16].blockGroup.rotateOnWorldAxis(this.yAxis,c.rotation-l),this.blocks[10].blockGroup.rotateOnWorldAxis(this.yAxis,c.rotation-l),l=c.rotation}).onComplete(()=>{let c=this.blocks[6];this.blocks[6]=this.blocks[24],this.blocks[24]=this.blocks[26],this.blocks[26]=this.blocks[8],this.blocks[8]=c,c=this.blocks[7],this.blocks[7]=this.blocks[15],this.blocks[15]=this.blocks[25],this.blocks[25]=this.blocks[17],this.blocks[17]=c,c=this.blocks[3],this.blocks[3]=this.blocks[21],this.blocks[21]=this.blocks[23],this.blocks[23]=this.blocks[5],this.blocks[5]=c,c=this.blocks[4],this.blocks[4]=this.blocks[12],this.blocks[12]=this.blocks[22],this.blocks[22]=this.blocks[14],this.blocks[14]=c,c=this.blocks[0],this.blocks[0]=this.blocks[18],this.blocks[18]=this.blocks[20],this.blocks[20]=this.blocks[2],this.blocks[2]=c,c=this.blocks[1],this.blocks[1]=this.blocks[9],this.blocks[9]=this.blocks[19],this.blocks[19]=this.blocks[11],this.blocks[11]=c,h.stop()});return h}rotateY(t){let e=[this.blocks[6].blockGroup,this.blocks[15].blockGroup,this.blocks[24].blockGroup,this.blocks[25].blockGroup,this.blocks[26].blockGroup,this.blocks[17].blockGroup,this.blocks[8].blockGroup,this.blocks[7].blockGroup],i=e.slice(2).concat(e.slice(0,2)),s=[this.blocks[0].blockGroup,this.blocks[9].blockGroup,this.blocks[18].blockGroup,this.blocks[19].blockGroup,this.blocks[20].blockGroup,this.blocks[11].blockGroup,this.blocks[2].blockGroup,this.blocks[1].blockGroup],o=s.slice(2).concat(s.slice(0,2)),r=[this.blocks[3].blockGroup,this.blocks[12].blockGroup,this.blocks[21].blockGroup,this.blocks[22].blockGroup,this.blocks[23].blockGroup,this.blocks[14].blockGroup,this.blocks[5].blockGroup,this.blocks[4].blockGroup],a=r.slice(2).concat(r.slice(0,2)),l=0;const h=new Yt.Tween({ele1:e[0].position,ele2:e[1].position,ele3:e[2].position,ele4:e[3].position,ele5:e[4].position,ele6:e[5].position,ele7:e[6].position,ele8:e[7].position,ele9:s[0].position,ele10:s[1].position,ele11:s[2].position,ele12:s[3].position,ele13:s[4].position,ele14:s[5].position,ele15:s[6].position,ele16:s[7].position,ele17:r[0].position,ele18:r[1].position,ele19:r[2].position,ele20:r[3].position,ele21:r[4].position,ele22:r[5].position,ele23:r[6].position,ele24:r[7].position,rotation:0}).to({ele1:i[0].position,ele2:i[1].position,ele3:i[2].position,ele4:i[3].position,ele5:i[4].position,ele6:i[5].position,ele7:i[6].position,ele8:i[7].position,ele9:o[0].position,ele10:o[1].position,ele11:o[2].position,ele12:o[3].position,ele13:o[4].position,ele14:o[5].position,ele15:o[6].position,ele16:o[7].position,ele17:a[0].position,ele18:a[1].position,ele19:a[2].position,ele20:a[3].position,ele21:a[4].position,ele22:a[5].position,ele23:a[6].position,ele24:a[7].position,rotation:-Math.PI/2},t).onUpdate(c=>{e[0].rotateOnWorldAxis(this.yAxis,c.rotation-l),e[1].rotateOnWorldAxis(this.yAxis,c.rotation-l),e[2].rotateOnWorldAxis(this.yAxis,c.rotation-l),e[3].rotateOnWorldAxis(this.yAxis,c.rotation-l),e[4].rotateOnWorldAxis(this.yAxis,c.rotation-l),e[5].rotateOnWorldAxis(this.yAxis,c.rotation-l),e[6].rotateOnWorldAxis(this.yAxis,c.rotation-l),e[7].rotateOnWorldAxis(this.yAxis,c.rotation-l),r[0].rotateOnWorldAxis(this.yAxis,c.rotation-l),r[1].rotateOnWorldAxis(this.yAxis,c.rotation-l),r[2].rotateOnWorldAxis(this.yAxis,c.rotation-l),r[3].rotateOnWorldAxis(this.yAxis,c.rotation-l),r[4].rotateOnWorldAxis(this.yAxis,c.rotation-l),r[5].rotateOnWorldAxis(this.yAxis,c.rotation-l),r[6].rotateOnWorldAxis(this.yAxis,c.rotation-l),r[7].rotateOnWorldAxis(this.yAxis,c.rotation-l),s[0].rotateOnWorldAxis(this.yAxis,c.rotation-l),s[1].rotateOnWorldAxis(this.yAxis,c.rotation-l),s[2].rotateOnWorldAxis(this.yAxis,c.rotation-l),s[3].rotateOnWorldAxis(this.yAxis,c.rotation-l),s[4].rotateOnWorldAxis(this.yAxis,c.rotation-l),s[5].rotateOnWorldAxis(this.yAxis,c.rotation-l),s[6].rotateOnWorldAxis(this.yAxis,c.rotation-l),s[7].rotateOnWorldAxis(this.yAxis,c.rotation-l),this.blocks[16].blockGroup.rotateOnWorldAxis(this.yAxis,c.rotation-l),this.blocks[10].blockGroup.rotateOnWorldAxis(this.yAxis,c.rotation-l),l=c.rotation}).onComplete(()=>{let c=this.blocks[6];this.blocks[6]=this.blocks[8],this.blocks[8]=this.blocks[26],this.blocks[26]=this.blocks[24],this.blocks[24]=c,c=this.blocks[7],this.blocks[7]=this.blocks[17],this.blocks[17]=this.blocks[25],this.blocks[25]=this.blocks[15],this.blocks[15]=c,c=this.blocks[3],this.blocks[3]=this.blocks[5],this.blocks[5]=this.blocks[23],this.blocks[23]=this.blocks[21],this.blocks[21]=c,c=this.blocks[4],this.blocks[4]=this.blocks[14],this.blocks[14]=this.blocks[22],this.blocks[22]=this.blocks[12],this.blocks[12]=c,c=this.blocks[0],this.blocks[0]=this.blocks[2],this.blocks[2]=this.blocks[20],this.blocks[20]=this.blocks[18],this.blocks[18]=c,c=this.blocks[1],this.blocks[1]=this.blocks[11],this.blocks[11]=this.blocks[19],this.blocks[19]=this.blocks[9],this.blocks[9]=c,h.stop()});return h}rotateMiddle(t){let e=[this.blocks[9].blockGroup,this.blocks[10].blockGroup,this.blocks[11].blockGroup,this.blocks[14].blockGroup,this.blocks[17].blockGroup,this.blocks[16].blockGroup,this.blocks[15].blockGroup,this.blocks[12].blockGroup],i=e.slice(-2).concat(e.slice(0,-2)),s=0;const o=new Yt.Tween({ele1position:e[0].position,ele2position:e[1].position,ele3position:e[2].position,ele4position:e[3].position,ele5position:e[4].position,ele6position:e[5].position,ele7position:e[6].position,ele8position:e[7].position,rotation:0}).to({ele1position:i[0].position,ele2position:i[1].position,ele3position:i[2].position,ele4position:i[3].position,ele5position:i[4].position,ele6position:i[5].position,ele7position:i[6].position,ele8position:i[7].position,rotation:Math.PI/2},t).onUpdate(r=>{e[0].rotateOnWorldAxis(this.xAxis,r.rotation-s),e[1].rotateOnWorldAxis(this.xAxis,r.rotation-s),e[2].rotateOnWorldAxis(this.xAxis,r.rotation-s),e[3].rotateOnWorldAxis(this.xAxis,r.rotation-s),e[4].rotateOnWorldAxis(this.xAxis,r.rotation-s),e[5].rotateOnWorldAxis(this.xAxis,r.rotation-s),e[6].rotateOnWorldAxis(this.xAxis,r.rotation-s),e[7].rotateOnWorldAxis(this.xAxis,r.rotation-s),s=r.rotation}).onComplete(()=>{let r=this.blocks[9];this.blocks[9]=this.blocks[11],this.blocks[11]=this.blocks[17],this.blocks[17]=this.blocks[15],this.blocks[15]=r,r=this.blocks[10],this.blocks[10]=this.blocks[14],this.blocks[14]=this.blocks[16],this.blocks[16]=this.blocks[12],this.blocks[12]=r,o.stop()});return o}rotateMiddleInverted(t){let e=[this.blocks[9].blockGroup,this.blocks[10].blockGroup,this.blocks[11].blockGroup,this.blocks[14].blockGroup,this.blocks[17].blockGroup,this.blocks[16].blockGroup,this.blocks[15].blockGroup,this.blocks[12].blockGroup],i=e.slice(2).concat(e.slice(0,2)),s=0;const o=new Yt.Tween({ele1position:e[0].position,ele2position:e[1].position,ele3position:e[2].position,ele4position:e[3].position,ele5position:e[4].position,ele6position:e[5].position,ele7position:e[6].position,ele8position:e[7].position,rotation:0}).to({ele1position:i[0].position,ele2position:i[1].position,ele3position:i[2].position,ele4position:i[3].position,ele5position:i[4].position,ele6position:i[5].position,ele7position:i[6].position,ele8position:i[7].position,rotation:-Math.PI/2},t).onUpdate(r=>{e[0].rotateOnWorldAxis(this.xAxis,r.rotation-s),e[1].rotateOnWorldAxis(this.xAxis,r.rotation-s),e[2].rotateOnWorldAxis(this.xAxis,r.rotation-s),e[3].rotateOnWorldAxis(this.xAxis,r.rotation-s),e[4].rotateOnWorldAxis(this.xAxis,r.rotation-s),e[5].rotateOnWorldAxis(this.xAxis,r.rotation-s),e[6].rotateOnWorldAxis(this.xAxis,r.rotation-s),e[7].rotateOnWorldAxis(this.xAxis,r.rotation-s),s=r.rotation}).onComplete(()=>{let r=this.blocks[9];this.blocks[9]=this.blocks[15],this.blocks[15]=this.blocks[17],this.blocks[17]=this.blocks[11],this.blocks[11]=r,r=this.blocks[10],this.blocks[10]=this.blocks[12],this.blocks[12]=this.blocks[16],this.blocks[16]=this.blocks[14],this.blocks[14]=r,o.stop()});return o}rotater(t){let e=[this.blocks[18].blockGroup,this.blocks[19].blockGroup,this.blocks[20].blockGroup,this.blocks[23].blockGroup,this.blocks[26].blockGroup,this.blocks[25].blockGroup,this.blocks[24].blockGroup,this.blocks[21].blockGroup],i=e.slice(2).concat(e.slice(0,2)),s=[this.blocks[9].blockGroup,this.blocks[10].blockGroup,this.blocks[11].blockGroup,this.blocks[14].blockGroup,this.blocks[17].blockGroup,this.blocks[16].blockGroup,this.blocks[15].blockGroup,this.blocks[12].blockGroup],o=s.slice(2).concat(s.slice(0,2)),r=0;const a=new Yt.Tween({ele1:e[0].position,ele2:e[1].position,ele3:e[2].position,ele4:e[3].position,ele5:e[4].position,ele6:e[5].position,ele7:e[6].position,ele8:e[7].position,ele9:s[0].position,ele10:s[1].position,ele11:s[2].position,ele12:s[3].position,ele13:s[4].position,ele14:s[5].position,ele15:s[6].position,ele16:s[7].position,rotation:0}).to({ele1:i[0].position,ele2:i[1].position,ele3:i[2].position,ele4:i[3].position,ele5:i[4].position,ele6:i[5].position,ele7:i[6].position,ele8:i[7].position,ele9:o[0].position,ele10:o[1].position,ele11:o[2].position,ele12:o[3].position,ele13:o[4].position,ele14:o[5].position,ele15:o[6].position,ele16:o[7].position,rotation:-Math.PI/2},t).onUpdate(l=>{e[0].rotateOnWorldAxis(this.xAxis,l.rotation-r),e[1].rotateOnWorldAxis(this.xAxis,l.rotation-r),e[2].rotateOnWorldAxis(this.xAxis,l.rotation-r),e[3].rotateOnWorldAxis(this.xAxis,l.rotation-r),e[4].rotateOnWorldAxis(this.xAxis,l.rotation-r),e[5].rotateOnWorldAxis(this.xAxis,l.rotation-r),e[6].rotateOnWorldAxis(this.xAxis,l.rotation-r),e[7].rotateOnWorldAxis(this.xAxis,l.rotation-r),s[0].rotateOnWorldAxis(this.xAxis,l.rotation-r),s[1].rotateOnWorldAxis(this.xAxis,l.rotation-r),s[2].rotateOnWorldAxis(this.xAxis,l.rotation-r),s[3].rotateOnWorldAxis(this.xAxis,l.rotation-r),s[4].rotateOnWorldAxis(this.xAxis,l.rotation-r),s[5].rotateOnWorldAxis(this.xAxis,l.rotation-r),s[6].rotateOnWorldAxis(this.xAxis,l.rotation-r),s[7].rotateOnWorldAxis(this.xAxis,l.rotation-r),this.blocks[22].blockGroup.rotateOnWorldAxis(this.xAxis,l.rotation-r),r=l.rotation}).onComplete(()=>{let l=this.blocks[18];this.blocks[18]=this.blocks[24],this.blocks[24]=this.blocks[26],this.blocks[26]=this.blocks[20],this.blocks[20]=l,l=this.blocks[19],this.blocks[19]=this.blocks[21],this.blocks[21]=this.blocks[25],this.blocks[25]=this.blocks[23],this.blocks[23]=l,l=this.blocks[9],this.blocks[9]=this.blocks[15],this.blocks[15]=this.blocks[17],this.blocks[17]=this.blocks[11],this.blocks[11]=l,l=this.blocks[10],this.blocks[10]=this.blocks[12],this.blocks[12]=this.blocks[16],this.blocks[16]=this.blocks[14],this.blocks[14]=l,a.stop()});return a}rotaterI(t){let e=[this.blocks[18].blockGroup,this.blocks[19].blockGroup,this.blocks[20].blockGroup,this.blocks[23].blockGroup,this.blocks[26].blockGroup,this.blocks[25].blockGroup,this.blocks[24].blockGroup,this.blocks[21].blockGroup],i=e.slice(-2).concat(e.slice(0,-2)),s=[this.blocks[9].blockGroup,this.blocks[10].blockGroup,this.blocks[11].blockGroup,this.blocks[14].blockGroup,this.blocks[17].blockGroup,this.blocks[16].blockGroup,this.blocks[15].blockGroup,this.blocks[12].blockGroup],o=s.slice(-2).concat(s.slice(0,-2)),r=0;const a=new Yt.Tween({ele1:e[0].position,ele2:e[1].position,ele3:e[2].position,ele4:e[3].position,ele5:e[4].position,ele6:e[5].position,ele7:e[6].position,ele8:e[7].position,ele9:s[0].position,ele10:s[1].position,ele11:s[2].position,ele12:s[3].position,ele13:s[4].position,ele14:s[5].position,ele15:s[6].position,ele16:s[7].position,rotation:0}).to({ele1:i[0].position,ele2:i[1].position,ele3:i[2].position,ele4:i[3].position,ele5:i[4].position,ele6:i[5].position,ele7:i[6].position,ele8:i[7].position,ele9:o[0].position,ele10:o[1].position,ele11:o[2].position,ele12:o[3].position,ele13:o[4].position,ele14:o[5].position,ele15:o[6].position,ele16:o[7].position,rotation:Math.PI/2},t).onUpdate(l=>{e[0].rotateOnWorldAxis(this.xAxis,l.rotation-r),e[1].rotateOnWorldAxis(this.xAxis,l.rotation-r),e[2].rotateOnWorldAxis(this.xAxis,l.rotation-r),e[3].rotateOnWorldAxis(this.xAxis,l.rotation-r),e[4].rotateOnWorldAxis(this.xAxis,l.rotation-r),e[5].rotateOnWorldAxis(this.xAxis,l.rotation-r),e[6].rotateOnWorldAxis(this.xAxis,l.rotation-r),e[7].rotateOnWorldAxis(this.xAxis,l.rotation-r),s[0].rotateOnWorldAxis(this.xAxis,l.rotation-r),s[1].rotateOnWorldAxis(this.xAxis,l.rotation-r),s[2].rotateOnWorldAxis(this.xAxis,l.rotation-r),s[3].rotateOnWorldAxis(this.xAxis,l.rotation-r),s[4].rotateOnWorldAxis(this.xAxis,l.rotation-r),s[5].rotateOnWorldAxis(this.xAxis,l.rotation-r),s[6].rotateOnWorldAxis(this.xAxis,l.rotation-r),s[7].rotateOnWorldAxis(this.xAxis,l.rotation-r),this.blocks[22].blockGroup.rotateOnWorldAxis(this.xAxis,l.rotation-r),r=l.rotation}).onComplete(()=>{let l=this.blocks[18];this.blocks[18]=this.blocks[20],this.blocks[20]=this.blocks[26],this.blocks[26]=this.blocks[24],this.blocks[24]=l,l=this.blocks[19],this.blocks[19]=this.blocks[23],this.blocks[23]=this.blocks[25],this.blocks[25]=this.blocks[21],this.blocks[21]=l,l=this.blocks[9],this.blocks[9]=this.blocks[11],this.blocks[11]=this.blocks[17],this.blocks[17]=this.blocks[15],this.blocks[15]=l,l=this.blocks[10],this.blocks[10]=this.blocks[14],this.blocks[14]=this.blocks[16],this.blocks[16]=this.blocks[12],this.blocks[12]=l,a.stop()});return a}rotatel(t){let e=[this.blocks[0].blockGroup,this.blocks[1].blockGroup,this.blocks[2].blockGroup,this.blocks[5].blockGroup,this.blocks[8].blockGroup,this.blocks[7].blockGroup,this.blocks[6].blockGroup,this.blocks[3].blockGroup],i=e.slice(-2).concat(e.slice(0,-2)),s=[this.blocks[9].blockGroup,this.blocks[10].blockGroup,this.blocks[11].blockGroup,this.blocks[14].blockGroup,this.blocks[17].blockGroup,this.blocks[16].blockGroup,this.blocks[15].blockGroup,this.blocks[12].blockGroup],o=s.slice(-2).concat(s.slice(0,-2)),r=0;const a=new Yt.Tween({ele1:e[0].position,ele2:e[1].position,ele3:e[2].position,ele4:e[3].position,ele5:e[4].position,ele6:e[5].position,ele7:e[6].position,ele8:e[7].position,ele9:s[0].position,ele10:s[1].position,ele11:s[2].position,ele12:s[3].position,ele13:s[4].position,ele14:s[5].position,ele15:s[6].position,ele16:s[7].position,rotation:0}).to({ele1:i[0].position,ele2:i[1].position,ele3:i[2].position,ele4:i[3].position,ele5:i[4].position,ele6:i[5].position,ele7:i[6].position,ele8:i[7].position,ele9:o[0].position,ele10:o[1].position,ele11:o[2].position,ele12:o[3].position,ele13:o[4].position,ele14:o[5].position,ele15:o[6].position,ele16:o[7].position,rotation:Math.PI/2},t).onUpdate(l=>{e[0].rotateOnWorldAxis(this.xAxis,l.rotation-r),e[1].rotateOnWorldAxis(this.xAxis,l.rotation-r),e[2].rotateOnWorldAxis(this.xAxis,l.rotation-r),e[3].rotateOnWorldAxis(this.xAxis,l.rotation-r),e[4].rotateOnWorldAxis(this.xAxis,l.rotation-r),e[5].rotateOnWorldAxis(this.xAxis,l.rotation-r),e[6].rotateOnWorldAxis(this.xAxis,l.rotation-r),e[7].rotateOnWorldAxis(this.xAxis,l.rotation-r),s[0].rotateOnWorldAxis(this.xAxis,l.rotation-r),s[1].rotateOnWorldAxis(this.xAxis,l.rotation-r),s[2].rotateOnWorldAxis(this.xAxis,l.rotation-r),s[3].rotateOnWorldAxis(this.xAxis,l.rotation-r),s[4].rotateOnWorldAxis(this.xAxis,l.rotation-r),s[5].rotateOnWorldAxis(this.xAxis,l.rotation-r),s[6].rotateOnWorldAxis(this.xAxis,l.rotation-r),s[7].rotateOnWorldAxis(this.xAxis,l.rotation-r),this.blocks[4].blockGroup.rotateOnWorldAxis(this.xAxis,l.rotation-r),r=l.rotation}).onComplete(()=>{let l=this.blocks[0];this.blocks[0]=this.blocks[2],this.blocks[2]=this.blocks[8],this.blocks[8]=this.blocks[6],this.blocks[6]=l,l=this.blocks[1],this.blocks[1]=this.blocks[5],this.blocks[5]=this.blocks[7],this.blocks[7]=this.blocks[3],this.blocks[3]=l,l=this.blocks[9],this.blocks[9]=this.blocks[11],this.blocks[11]=this.blocks[17],this.blocks[17]=this.blocks[15],this.blocks[15]=l,l=this.blocks[10],this.blocks[10]=this.blocks[14],this.blocks[14]=this.blocks[16],this.blocks[16]=this.blocks[12],this.blocks[12]=l,a.stop()});return a}rotatelI(t){let e=[this.blocks[0].blockGroup,this.blocks[1].blockGroup,this.blocks[2].blockGroup,this.blocks[5].blockGroup,this.blocks[8].blockGroup,this.blocks[7].blockGroup,this.blocks[6].blockGroup,this.blocks[3].blockGroup],i=e.slice(2).concat(e.slice(0,2)),s=[this.blocks[9].blockGroup,this.blocks[10].blockGroup,this.blocks[11].blockGroup,this.blocks[14].blockGroup,this.blocks[17].blockGroup,this.blocks[16].blockGroup,this.blocks[15].blockGroup,this.blocks[12].blockGroup],o=s.slice(2).concat(s.slice(0,2)),r=0;const a=new Yt.Tween({ele1:e[0].position,ele2:e[1].position,ele3:e[2].position,ele4:e[3].position,ele5:e[4].position,ele6:e[5].position,ele7:e[6].position,ele8:e[7].position,ele9:s[0].position,ele10:s[1].position,ele11:s[2].position,ele12:s[3].position,ele13:s[4].position,ele14:s[5].position,ele15:s[6].position,ele16:s[7].position,rotation:0}).to({ele1:i[0].position,ele2:i[1].position,ele3:i[2].position,ele4:i[3].position,ele5:i[4].position,ele6:i[5].position,ele7:i[6].position,ele8:i[7].position,ele9:o[0].position,ele10:o[1].position,ele11:o[2].position,ele12:o[3].position,ele13:o[4].position,ele14:o[5].position,ele15:o[6].position,ele16:o[7].position,rotation:-Math.PI/2},t).onUpdate(l=>{e[0].rotateOnWorldAxis(this.xAxis,l.rotation-r),e[1].rotateOnWorldAxis(this.xAxis,l.rotation-r),e[2].rotateOnWorldAxis(this.xAxis,l.rotation-r),e[3].rotateOnWorldAxis(this.xAxis,l.rotation-r),e[4].rotateOnWorldAxis(this.xAxis,l.rotation-r),e[5].rotateOnWorldAxis(this.xAxis,l.rotation-r),e[6].rotateOnWorldAxis(this.xAxis,l.rotation-r),e[7].rotateOnWorldAxis(this.xAxis,l.rotation-r),s[0].rotateOnWorldAxis(this.xAxis,l.rotation-r),s[1].rotateOnWorldAxis(this.xAxis,l.rotation-r),s[2].rotateOnWorldAxis(this.xAxis,l.rotation-r),s[3].rotateOnWorldAxis(this.xAxis,l.rotation-r),s[4].rotateOnWorldAxis(this.xAxis,l.rotation-r),s[5].rotateOnWorldAxis(this.xAxis,l.rotation-r),s[6].rotateOnWorldAxis(this.xAxis,l.rotation-r),s[7].rotateOnWorldAxis(this.xAxis,l.rotation-r),this.blocks[22].blockGroup.rotateOnWorldAxis(this.xAxis,l.rotation-r),r=l.rotation}).onComplete(()=>{let l=this.blocks[0];this.blocks[0]=this.blocks[6],this.blocks[6]=this.blocks[8],this.blocks[8]=this.blocks[2],this.blocks[2]=l,l=this.blocks[1],this.blocks[1]=this.blocks[3],this.blocks[3]=this.blocks[7],this.blocks[7]=this.blocks[5],this.blocks[5]=l,l=this.blocks[9],this.blocks[9]=this.blocks[15],this.blocks[15]=this.blocks[17],this.blocks[17]=this.blocks[11],this.blocks[11]=l,l=this.blocks[10],this.blocks[10]=this.blocks[12],this.blocks[12]=this.blocks[16],this.blocks[16]=this.blocks[14],this.blocks[14]=l,a.stop()});return a}async parseRotations(t,e){function i(a){const l=h=>{a()?h():setTimeout(c=>l(h),10)};return new Promise(l)}function s(a){return a=a.replace(/([A-Za-z])2/g,"$1 $1"),a.trim().split(" ")}let o=s(t);this.tween!=null&&await i(a=>this.isRotating===!1&&this.tween.isPlaying()===!1),this.isRotating=!0;let r=document.createElement("div");for(let a=0;a<o.length;a++){let l=o[a],h=!0;switch(e=document.getElementById("speedValue").innerText,l){case"F":this.tween=this.rotateFront(e);break;case"F'":this.tween=this.rotateFrontInverted(e);break;case"R":this.tween=this.rotateRight(e);break;case"R'":this.tween=this.rotateRightInverted(e);break;case"L":this.tween=this.rotateLeft(e);break;case"L'":this.tween=this.rotateLeftInverted(e);break;case"D":this.tween=this.rotateDown(e);break;case"D'":this.tween=this.rotateDownInverted(e);break;case"U":this.tween=this.rotateUp(e);break;case"U'":this.tween=this.rotateUpInverted(e);break;case"B":this.tween=this.rotateBack(e);break;case"B'":this.tween=this.rotateBackInverted(e);break;case"y":this.tween=this.rotateY(e);break;case"y'":this.tween=this.rotateYInvert(e);break;case"M":this.tween=this.rotateMiddle(e);break;case"M'":this.tween=this.rotateMiddleInverted(e);break;case"r":this.tween=this.rotater(e);break;case"r'":this.tween=this.rotaterI(e);break;case"l":this.tween=this.rotatel(e);break;case"l'":this.tween=this.rotatelI(e);break;case"":h=!1;break;default:h=!1,console.log("unknown rotation",o)}if(h){let c=document.getElementById("console");r.textContent+=l+" ",c.appendChild(r),this.tween.start(),await i(d=>this.tween.isPlaying()===!1)}}this.isRotating=!1}getSides(){const t=new jr,e=new L(1,0,0),i=new L(-1,0,0),s=new L(0,1,0),o=new L(0,-1,0),r=new L(0,0,1),a=new L(0,0,-1),l=["red","orange","white","yellow","green","blue"],h=new Map;let c=[],d,f,m;c.push(this.blocks[6]),c.push(this.blocks[15]),c.push(this.blocks[24]),c.push(this.blocks[7]),c.push(this.blocks[16]),c.push(this.blocks[25]),c.push(this.blocks[8]),c.push(this.blocks[17]),c.push(this.blocks[26]);const _=[];c.forEach(E=>{let y=E.blockGroup.children[0];t.ray.origin.copy(y.parent.position),t.ray.direction.copy(s),d=t.intersectObject(y),f=d[0].face.materialIndex,m=l[f],_.push(m)}),h.set("up",_),c.length=0,c.push(this.blocks[6]),c.push(this.blocks[7]),c.push(this.blocks[8]),c.push(this.blocks[3]),c.push(this.blocks[4]),c.push(this.blocks[5]),c.push(this.blocks[0]),c.push(this.blocks[1]),c.push(this.blocks[2]);const x=[];c.forEach(E=>{let y=E.blockGroup.children[0];t.ray.origin.copy(y.parent.position),t.ray.direction.copy(i),d=t.intersectObject(y),f=d[0].face.materialIndex,m=l[f],x.push(m)}),h.set("left",x),c.length=0,c.push(this.blocks[8]),c.push(this.blocks[17]),c.push(this.blocks[26]),c.push(this.blocks[5]),c.push(this.blocks[14]),c.push(this.blocks[23]),c.push(this.blocks[2]),c.push(this.blocks[11]),c.push(this.blocks[20]);const p=[];c.forEach(E=>{let y=E.blockGroup.children[0];t.ray.origin.copy(y.parent.position),t.ray.direction.copy(r),d=t.intersectObject(y),f=d[0].face.materialIndex,m=l[f],p.push(m)}),h.set("front",p),c.length=0,c.push(this.blocks[26]),c.push(this.blocks[25]),c.push(this.blocks[24]),c.push(this.blocks[23]),c.push(this.blocks[22]),c.push(this.blocks[21]),c.push(this.blocks[20]),c.push(this.blocks[19]),c.push(this.blocks[18]);const u=[];c.forEach(E=>{let y=E.blockGroup.children[0];t.ray.origin.copy(y.parent.position),t.ray.direction.copy(e),d=t.intersectObject(y),f=d[0].face.materialIndex,m=l[f],u.push(m)}),h.set("right",u),c.length=0,c.push(this.blocks[24]),c.push(this.blocks[15]),c.push(this.blocks[6]),c.push(this.blocks[21]),c.push(this.blocks[12]),c.push(this.blocks[3]),c.push(this.blocks[18]),c.push(this.blocks[9]),c.push(this.blocks[0]);const A=[];c.forEach(E=>{let y=E.blockGroup.children[0];t.ray.origin.copy(y.parent.position),t.ray.direction.copy(a),d=t.intersectObject(y),f=d[0].face.materialIndex,m=l[f],A.push(m)}),h.set("back",A),c.length=0,c.push(this.blocks[2]),c.push(this.blocks[11]),c.push(this.blocks[20]),c.push(this.blocks[1]),c.push(this.blocks[10]),c.push(this.blocks[19]),c.push(this.blocks[0]),c.push(this.blocks[9]),c.push(this.blocks[18]);const v=[];return c.forEach(E=>{let y=E.blockGroup.children[0];t.ray.origin.copy(y.parent.position),t.ray.direction.copy(o),d=t.intersectObject(y),f=d[0].face.materialIndex,m=l[f],v.push(m)}),h.set("down",v),h}findPiece(t){const e=new jr,i=new L(1,0,0),s=new L(-1,0,0),o=new L(0,1,0),r=new L(0,-1,0),a=new L(0,0,1),l=new L(0,0,-1),h=["red","orange","white","yellow","green","blue"];let c=[];const d=[[s,l,r],[s,r],[s,r,a],[s,l],[s],[s,a],[s,l,o],[s,o],[s,o,a],[r,l],[r],[r,a],[l],[],[a],[l,o],[o],[o,a],[r,i,l],[r,i],[r,i,a],[i,l],[i],[i,a],[i,l,o],[i,o],[i,o,a]];this.blocks.forEach((m,_)=>{let x=m.blockGroup.children[0];e.ray.origin.copy(x.parent.position);let p=[];d.at(_).forEach(u=>{e.ray.direction.copy(u);let v=e.intersectObject(x)[0].face.materialIndex,E=h[v];p.push(E)}),c.push(p)});let f=-1;return c.forEach((m,_)=>{t.every(x=>m.includes(x))&&m.length===t.length&&(f=_)}),f}}async function Sp(n,t,e){let i="";for(let s=0;s<t;s++)switch(Math.floor(Math.random()*11)){case 0:i+="R' ";break;case 1:i+="R ";break;case 2:i+="L ";break;case 3:i+="L' ";break;case 4:i+="U ";break;case 5:i+="U' ";break;case 6:i+="D ";break;case 7:i+="D' ";break;case 8:i+="F ";break;case 9:i+="F' ";break;case 10:i+="B ";break;case 11:i+="B' ";break}await n.parseRotations(i,e)}const $r=[[[0,0,2,3,1,0,1,2,1,2,3,3],"R' F R' B2 R F' R' B2 R2"],[[0,0,1,2,1,2,3,2,0,1,3,3],"R2 B2 R F R' B2 R F' R"],[[1,0,3,0,1,2,3,2,1,2,3,0],"R2 U R' U' y R U R' U' R U R' U' R U R' y' R U' R2"],[[3,3,3,0,2,1,2,1,0,1,0,2],"R' U R U' R2 F' U' F U R F R' F' R2"],[[0,1,1,2,3,0,1,0,2,3,2,3],"R2 U R' U R' U' R U' R2 D U' R' U R D'"],[[0,2,1,2,0,0,1,3,2,3,1,3],"R' U' R U D' R2 U R' U R U' R U' R2 D"],[[0,2,1,2,3,0,1,1,2,3,0,3],"R2 U' R U' R U R' U R2 D' U R U' R' D"],[[0,3,1,2,2,0,1,0,2,3,1,3],"R U R' U' D R2 U' R U' R' U R' U R2 D'"],[[0,2,0,1,3,1,2,0,2,3,1,3],"M2 U M2 U2 M2 U M2"],[[3,3,0,1,1,1,2,2,3,0,0,2],"y R' U L' U2 R U' R' U2 R L"],[[0,1,1,2,0,0,1,2,2,3,3,3],"R U R' F' R U R' U' R' F R2 U' R'"],[[1,3,3,0,2,2,3,1,1,2,0,0],"L U' R U2 L' U R' L U' R U2 L' U R'"],[[1,1,3,0,0,2,3,3,1,2,2,0],"R' U R U' R' F' U' F R U R' F R' F' R U' R"],[[1,0,1,2,2,3,0,3,2,3,1,0],"L U2 L' U2 L F' L' U' L U L F L2"],[[3,0,3,0,3,1,2,1,0,1,2,2],"R' U2 R U2 R' F R U R' U' R' F' R2"],[[0,0,1,2,3,0,1,2,2,3,1,3],"R U R' U' R' F R2 U' R' U' R U R' F'"],[[0,0,0,1,2,1,2,3,2,3,1,3],"M2 U M' U2 M U M2"],[[0,0,0,1,3,1,2,1,2,3,2,3],"R' U R' U' R' U' R' U R U R2"],[[3,3,1,2,1,0,1,0,3,0,2,2],"R' U R' U' y R' F' R2 U' R' U R' F R F"],[[0,0,2,3,1,1,2,3,0,1,2,3],"F R U' R' U' R U R' F' R U R' U' R' F R F'"],[[2,3,2,3,2,3,0,1,0,1,0,1],"M2 U M2 U M' U2 M2 U2 M'"]],Jr=[[[0,0,0,0,1,0,0,0,0],[0,1,0,1,1,1,0,1,0,1,1,1],"R U2 R2 F R F' U2 R' F R F'"],[[0,0,0,0,1,0,0,0,0],[0,1,0,1,1,0,1,1,1,0,1,1],"r U r' U2 r U2 R' U2 R U' r'"],[[0,0,0,0,1,0,1,0,0],[0,1,1,0,1,1,0,1,1,0,1,0],"r' R2 U R' U r U2 r' U M'"],[[0,0,0,0,1,0,0,0,1],[1,1,0,0,1,0,1,1,0,1,1,0],"M U' r U2 r' U' R U' R' M'"],[[1,1,0,1,1,0,0,0,0],[0,1,1,0,1,1,0,0,0,0,0,1],"l' U2 L U L' U l"],[[0,1,1,0,1,1,0,0,0],[1,1,0,1,0,0,0,0,0,1,1,0],"r U2 R' U' R U' r'"],[[0,1,0,1,1,0,1,0,0],[0,1,1,0,1,1,0,0,1,0,0,0],"r U R' U R U2 r'"],[[0,1,0,0,1,1,0,0,1],[1,1,0,0,0,0,1,0,0,1,1,0],"l' U' L U' L' U2 l"],[[0,1,0,1,1,0,0,0,1],[1,1,0,0,1,0,1,0,0,1,0,0],"R U R' U' R' F R2 U R' U' F'"],[[0,0,1,1,1,0,0,1,0],[0,0,1,0,1,0,0,1,1,0,0,1],"R U R' U R' F R F' R U2 R'"],[[0,1,1,1,1,0,0,0,0],[0,1,1,0,1,0,0,0,1,0,0,1],"r U R' U R' F R F' R U2 r'"],[[1,1,0,0,1,1,0,0,0],[1,1,0,1,0,0,1,0,0,0,1,0],"M' R' U' R U' R' U2 R U' R r'"],[[0,0,0,1,1,1,1,0,0],[0,1,1,0,0,1,0,1,1,0,0,0],"F U R U' R2 F' R U R U' R'"],[[0,0,0,1,1,1,0,0,1],[1,1,0,0,0,0,1,1,0,1,0,0],"R' F R U R' F' R F U' F'"],[[1,0,0,1,1,1,0,0,0],[0,1,1,0,0,1,0,1,0,0,0,1],"l' U' l L' U' L U l' U l"],[[0,0,1,1,1,1,0,0,0],[1,1,0,1,0,0,0,1,0,1,0,0],"r U r' R U R' U' r U' r'"],[[1,0,0,0,1,0,0,0,1],[1,1,0,0,1,1,0,1,0,0,1,0],"F R' F' R2 r' U R U' R' U' M'"],[[1,0,1,0,1,0,0,0,0],[1,1,1,0,1,0,0,1,0,0,1,0],"r U R' U R U2 r2 U' R U' R' U2 r"],[[1,0,1,0,1,0,0,0,0],[0,1,0,1,1,0,0,1,0,0,1,1],"r' R U R U R' U' M' R' F R F'"],[[1,0,1,0,1,0,1,0,1],[0,1,0,0,1,0,0,1,0,0,1,0],"r U R' U' M2 U R U' R' U' M'"],[[0,1,0,1,1,1,0,1,0],[1,0,1,0,0,0,1,0,1,0,0,0],"R U2 R' U' R U R' U' R U' R'"],[[0,1,0,1,1,1,0,1,0],[0,0,1,0,0,0,1,0,0,1,0,1],"R U2 R2 U' R2 U' R2 U2 R"],[[0,1,0,1,1,1,1,1,1],[0,0,0,0,0,0,1,0,1,0,0,0],"R2 D' R U2 R' D R U2 R"],[[0,1,1,1,1,1,0,1,1],[1,0,0,0,0,0,0,0,1,0,0,0],"r U R' U' r' F R F'"],[[0,1,1,1,1,1,1,1,0],[0,0,1,0,0,0,0,0,0,1,0,0],"F' r U R' U' r' F R"],[[0,1,1,1,1,1,0,1,0],[1,0,0,1,0,0,0,0,0,1,0,0],"R U2 R' U' R U' R'"],[[0,1,0,1,1,1,1,1,0],[0,0,1,0,0,1,0,0,1,0,0,0],"R U R' U R U2 R'"],[[1,1,1,1,1,0,1,0,1],[0,1,0,0,1,0,0,0,0,0,0,0],"r U R' U' r' R U R U' R'"],[[0,1,1,1,1,0,0,0,1],[1,1,0,0,1,0,0,0,1,0,0,0],"R U R' U' R U' R' F' U' F R U R'"],[[0,1,0,1,1,0,1,0,1],[0,1,0,0,1,1,0,0,0,1,0,0],"F R' F R2 U' R' U' R U R' F2"],[[0,1,1,0,1,1,0,0,1],[1,1,0,0,0,0,0,0,1,0,1,0],"R' U' F U R U' R' F' R"],[[1,1,0,1,1,0,1,0,0],[0,1,1,0,1,0,1,0,0,0,0,0],"L U F' U' L' U L F L'"],[[0,0,1,1,1,1,0,0,1],[1,1,0,0,0,0,0,1,1,0,0,0],"R U R' U' R' F R F'"],[[0,0,0,1,1,1,1,0,1],[0,1,0,0,0,1,0,1,0,1,0,0],"R U R2 U' R' F R U R U' F'"],[[1,0,0,0,1,1,0,1,1],[1,0,0,0,0,1,0,1,0,0,1,0],"R U2 R2 F R F' R U2 R'"],[[1,1,0,0,1,1,0,0,1],[0,1,0,0,0,0,1,0,0,0,1,1],"L' U' L U' L' U L U L F' L' F"],[[1,1,0,1,1,0,0,0,1],[1,1,0,0,1,1,0,0,0,0,0,0],"F R' F' R U R U' R'"],[[0,1,1,1,1,0,1,0,0],[0,1,0,1,1,0,0,0,1,0,0,0],"R U R' U R U' R' U' R' F R F'"],[[0,0,1,1,1,1,1,0,0],[0,1,0,1,0,0,0,1,1,0,0,0],"L F' L' U' L U F U' L'"],[[1,0,0,1,1,1,0,0,1],[0,1,0,0,0,0,1,1,0,0,0,1],"R' F R U R' U' F' U R"],[[0,1,0,1,1,0,1,0,1],[0,1,0,0,1,0,1,0,1,0,0,0],"R U R' U R U2 R' F R U R' U' F'"],[[1,0,1,1,1,0,0,1,0],[1,0,1,0,1,0,0,1,0,0,0,0],"R' U' R U' R' U2 R F R U R' U' F'"],[[0,1,1,0,1,1,0,0,1],[0,1,0,0,0,0,0,0,0,1,1,1],"F' U' L' U L F"],[[1,1,0,1,1,0,1,0,0],[0,1,0,1,1,1,0,0,0,0,0,0],"F U R U' R' F'"],[[0,0,1,1,1,1,0,0,1],[0,1,0,0,0,0,0,1,0,1,0,1],"F R U R' U' F'"],[[1,1,0,0,1,0,1,1,0],[0,0,0,1,1,1,0,0,0,0,1,0],"R' U' R' F R F' U R"],[[0,1,0,0,1,1,0,0,0],[1,1,0,1,0,1,0,0,1,0,1,0],"R' U' R' F R F' R' F R F' U R"],[[0,1,0,1,1,0,0,0,0],[0,1,1,0,1,0,1,0,0,1,0,1],"F R U R' U' R U R' U' F'"],[[0,1,0,0,1,1,0,0,0],[0,1,1,0,0,0,1,0,0,1,1,1],"r U' r2 U r2 U r2 U' r"],[[0,0,0,0,1,1,0,1,0],[0,0,1,0,0,0,1,1,0,1,1,1],"r' U r2 U' r2 U' r2 U r'"],[[0,0,0,1,1,1,0,0,0],[1,1,0,1,0,1,0,1,1,0,0,0],"F U R U' R' U R U' R' F'"],[[0,1,0,0,1,0,0,1,0],[1,0,0,1,1,1,0,0,1,0,1,0],"R U R' U R U' B U' B' R'"],[[0,1,0,0,1,1,0,0,0],[1,1,1,0,0,0,1,0,1,0,1,0],"l' U2 L U L' U' L U L' U l"],[[0,1,0,1,1,0,0,0,0],[1,1,1,0,1,0,1,0,1,0,0,0],"r U2 R' U' R U R' U' R U' r'"],[[0,0,0,1,1,1,0,0,0],[1,1,1,0,0,0,1,1,1,0,0,0],"R' F R U R U' R2 F' R2 U' R' U R U R'"],[[0,0,0,1,1,1,0,0,0],[0,1,0,1,0,1,0,1,0,1,0,1],"r' U' r U' R' U R U' R' U R r' U r"],[[1,0,1,1,1,1,1,0,1],[0,1,0,0,0,0,0,1,0,0,0,0],"R U R' U' M' U R U' r'"]];function Ep(n,t=yp,e=Ap,i=Tp,s=kp){let o=s(n),r=[];for(;;){const a=ka(n,t,e,i,s,0,o,r);if(Array.isArray(a))return a;if(a===Number.POSITIVE_INFINITY)return null;o=a}}function ka(n,t,e,i,s,o,r,a){const l=o+s(n);if(l>r)return l;if(t(n))return a;let h=Number.POSITIVE_INFINITY;for(const c of e(n)){const d=i(n,c),f=ka(d,t,e,i,s,o+1,r,a);if(Array.isArray(f))return a.unshift(c),a;f<h&&(h=f)}return h}function yp(n){let t=n.get("down"),e=n.get("front"),i=n.get("right"),s=n.get("back"),o=n.get("left");return t[1]===t[4]&&t[3]===t[4]&&t[5]===t[4]&&t[7]===t[4]&&e[4]===e[7]&&i[4]===i[7]&&s[4]===s[7]&&o[7]===o[4]}function Ap(n){let t=n.get("previous"),e;switch(t){case"F ":e=["R ","R' ","R R ","B ","B' ","B B ","L ","L' ","L L ","U ","U' ","U U ","D ","D' ","D D "];break;case"F' ":e=["R ","R' ","R R ","B ","B' ","B B ","L ","L' ","L L ","U ","U' ","U U ","D ","D' ","D D "];break;case"F F ":e=["R ","R' ","R R ","B ","B' ","B B ","L ","L' ","L L ","U ","U' ","U U ","D ","D' ","D D "];break;case"R ":e=["F ","F' ","F F ","B ","B' ","B B ","L ","L' ","L L ","U ","U' ","U U ","D ","D' ","D D "];break;case"R' ":e=["F ","F' ","F F ","B ","B' ","B B ","L ","L' ","L L ","U ","U' ","U U ","D ","D' ","D D "];break;case"R R ":e=["F ","F' ","F F ","B ","B' ","B B ","L ","L' ","L L ","U ","U' ","U U ","D ","D' ","D D "];break;case"L ":e=["F ","F' ","F F ","R ","R' ","R R ","B ","B' ","B B ","U ","U' ","U U ","D ","D' ","D D "];break;case"L' ":e=["F ","F' ","F F ","R ","R' ","R R ","B ","B' ","B B ","U ","U' ","U U ","D ","D' ","D D "];break;case"L L ":e=["F ","F' ","F F ","R ","R' ","R R ","B ","B' ","B B ","U ","U' ","U U ","D ","D' ","D D "];break;case"B ":e=["F ","F' ","F F ","R ","R' ","R R ","L ","L' ","L L ","U ","U' ","U U ","D ","D' ","D D "];break;case"B' ":e=["F ","F' ","F F ","R ","R' ","R R ","L ","L' ","L L ","U ","U' ","U U ","D ","D' ","D D "];break;case"B B ":e=["F ","F' ","F F ","R ","R' ","R R ","L ","L' ","L L ","U ","U' ","U U ","D ","D' ","D D "];break;case"U ":e=["F ","F' ","F F ","R ","R' ","R R ","B ","B' ","B B ","L ","L' ","L L ","D ","D' ","D D "];break;case"U' ":e=["F ","F' ","F F ","R ","R' ","R R ","B ","B' ","B B ","L ","L' ","L L ","D ","D' ","D D "];break;case"U U ":e=["F ","F' ","F F ","R ","R' ","R R ","B ","B' ","B B ","L ","L' ","L L ","D ","D' ","D D "];break;case"D ":e=["F ","F' ","F F ","R ","R' ","R R ","B ","B' ","B B ","L ","L' ","L L ","U ","U' ","U U "];break;case"D' ":e=["F ","F' ","F F ","R ","R' ","R R ","B ","B' ","B B ","L ","L' ","L L ","U ","U' ","U U "];break;case"D D ":e=["F ","F' ","F F ","R ","R' ","R R ","B ","B' ","B B ","L ","L' ","L L ","U ","U' ","U U "];break;default:e=["F ","F' ","F F ","R ","R' ","R R ","B ","B' ","B B ","L ","L' ","L L ","U ","U' ","U U ","D ","D' ","D D "];break}return e}function Tp(n,t){let e;switch(t){case"F ":e=en(n);break;case"F' ":e=Rp(n);break;case"F F ":e=en(n),e=en(e);break;case"R ":e=sn(n);break;case"R' ":e=Up(n);break;case"R R ":e=sn(n),e=sn(e);break;case"L ":e=nn(n);break;case"L' ":e=wp(n);break;case"L L ":e=nn(n),e=nn(e);break;case"B ":e=on(n);break;case"B' ":e=Cp(n);break;case"B B ":e=on(n),e=on(e);break;case"U ":e=rn(n);break;case"U' ":e=Lp(n);break;case"U U ":e=rn(n),e=rn(e);break;case"D ":e=an(n);break;case"D' ":e=Pp(n);break;case"D D ":e=an(n),e=an(e);break}return e.set("previous",t),e}function en(n){let t=new Map,e=n.get("down").slice(0),i=n.get("front").slice(0),s=n.get("right").slice(0),o=n.get("back").slice(0),r=n.get("left").slice(0),a=n.get("up").slice(0);return t.set("back",o),t.set("front",[i[6],i[3],i[0],i[7],i[4],i[1],i[8],i[5],i[2]]),t.set("right",s.slice(0)),t.get("right")[0]=a[6],t.get("right")[3]=a[7],t.get("right")[6]=a[8],t.set("down",e.slice(0)),t.get("down")[0]=s[0],t.get("down")[1]=s[3],t.get("down")[2]=s[6],t.set("left",r.slice(0)),t.get("left")[2]=e[0],t.get("left")[5]=e[1],t.get("left")[8]=e[2],t.set("up",a.slice(0)),t.get("up")[6]=r[8],t.get("up")[7]=r[5],t.get("up")[8]=r[2],t}function Rp(n){let t=en(n);return t=en(t),t=en(t),t}function nn(n){let t=new Map,e=n.get("down").slice(0),i=n.get("front").slice(0),s=n.get("right").slice(0),o=n.get("back").slice(0),r=n.get("left").slice(0),a=n.get("up").slice(0);return t.set("right",s),t.set("left",[r[6],r[3],r[0],r[7],r[4],r[1],r[8],r[5],r[2]]),t.set("front",i.slice(0)),t.get("front")[0]=a[0],t.get("front")[3]=a[3],t.get("front")[6]=a[6],t.set("down",e.slice(0)),t.get("down")[0]=i[0],t.get("down")[3]=i[3],t.get("down")[6]=i[6],t.set("back",o.slice(0)),t.get("back")[2]=e[0],t.get("back")[5]=e[3],t.get("back")[8]=e[6],t.set("up",a.slice(0)),t.get("up")[0]=o[2],t.get("up")[3]=o[5],t.get("up")[6]=o[8],t}function wp(n){let t=nn(n);return t=nn(t),t=nn(t),t}function sn(n){let t=new Map,e=n.get("down").slice(0),i=n.get("front").slice(0),s=n.get("right").slice(0),o=n.get("back").slice(0),r=n.get("left").slice(0),a=n.get("up").slice(0);return t.set("left",r),t.set("right",[s[6],s[3],s[0],s[7],s[4],s[1],s[8],s[5],s[2]]),t.set("front",i.slice(0)),t.get("front")[2]=e[2],t.get("front")[5]=e[5],t.get("front")[8]=e[8],t.set("down",e.slice(0)),t.get("down")[2]=o[6],t.get("down")[5]=o[3],t.get("down")[8]=o[0],t.set("back",o.slice(0)),t.get("back")[6]=a[2],t.get("back")[3]=a[5],t.get("back")[0]=a[8],t.set("up",a.slice(0)),t.get("up")[2]=i[2],t.get("up")[5]=i[5],t.get("up")[8]=i[8],t}function Up(n){let t=sn(n);return t=sn(t),t=sn(t),t}function on(n){let t=new Map,e=n.get("down").slice(0),i=n.get("front").slice(0),s=n.get("right").slice(0),o=n.get("back").slice(0),r=n.get("left").slice(0),a=n.get("up").slice(0);return t.set("front",i),t.set("back",[o[6],o[3],o[0],o[7],o[4],o[1],o[8],o[5],o[2]]),t.set("right",s.slice(0)),t.get("right")[2]=e[8],t.get("right")[5]=e[7],t.get("right")[8]=e[6],t.set("down",e.slice(0)),t.get("down")[8]=r[6],t.get("down")[7]=r[3],t.get("down")[6]=r[0],t.set("left",r.slice(0)),t.get("left")[6]=a[0],t.get("left")[3]=a[1],t.get("left")[0]=a[2],t.set("up",a.slice(0)),t.get("up")[0]=s[2],t.get("up")[1]=s[5],t.get("up")[2]=s[8],t}function Cp(n){let t=on(n);return t=on(t),t=on(t),t}function rn(n){let t=new Map,e=n.get("down").slice(0),i=n.get("front").slice(0),s=n.get("right").slice(0),o=n.get("back").slice(0),r=n.get("left").slice(0),a=n.get("up").slice(0);return t.set("down",e),t.set("up",[a[6],a[3],a[0],a[7],a[4],a[1],a[8],a[5],a[2]]),t.set("front",i.slice(0)),t.get("front")[0]=s[0],t.get("front")[1]=s[1],t.get("front")[2]=s[2],t.set("right",s.slice(0)),t.get("right")[0]=o[0],t.get("right")[1]=o[1],t.get("right")[2]=o[2],t.set("back",o.slice(0)),t.get("back")[0]=r[0],t.get("back")[1]=r[1],t.get("back")[2]=r[2],t.set("left",r.slice(0)),t.get("left")[0]=i[0],t.get("left")[1]=i[1],t.get("left")[2]=i[2],t}function Lp(n){let t=rn(n);return t=rn(t),t=rn(t),t}function an(n){let t=new Map,e=n.get("down").slice(0),i=n.get("front").slice(0),s=n.get("right").slice(0),o=n.get("back").slice(0),r=n.get("left").slice(0),a=n.get("up").slice(0);return t.set("up",a),t.set("down",[e[6],e[3],e[0],e[7],e[4],e[1],e[8],e[5],e[2]]),t.set("front",i.slice(0)),t.get("front")[6]=r[6],t.get("front")[7]=r[7],t.get("front")[8]=r[8],t.set("left",r.slice(0)),t.get("left")[6]=o[6],t.get("left")[7]=o[7],t.get("left")[8]=o[8],t.set("back",o.slice(0)),t.get("back")[6]=s[6],t.get("back")[7]=s[7],t.get("back")[8]=s[8],t.set("right",s.slice(0)),t.get("right")[6]=i[6],t.get("right")[7]=i[7],t.get("right")[8]=i[8],t}function Pp(n){let t=an(n);return t=an(t),t=an(t),t}function kp(n){let t=0,e=n.get("down");return e[1]!==e[4]&&t++,e[3]!==e[4]&&t++,e[5]!==e[4]&&t++,e[7]!==e[4]&&t++,t}class Dp{constructor(){this.terminal=document.getElementById("console"),this.rotations=""}async Solve(t,e){const i=document.getElementById("astarCheckbox");await t.parseRotations(""),i.checked?await this.aStarBottomCross(t,e):await this.bottomCross(t,e),await t.parseRotations(""),await this.f2l(t,e),await t.parseRotations(""),await this.oll(t,e),await t.parseRotations(""),await this.pll(t,e)}async solveNextStep(t,e){const i=document.getElementById("astarCheckbox");await this.solved(t)||(await this.solvedOll(t,e)?await this.pll(t,e):await this.solvedF2L(t,e)?await this.oll(t,e):await this.solvedCross(t,e)?await this.f2l(t,e):i.checked?await this.aStarBottomCross(t,e):await this.bottomCross(t,e))}async aStarBottomCross(t,e){let i=Ep(t.getSides()),s=document.createElement("b");s.textContent="Bottom Cross",this.terminal.appendChild(s),this.terminal.appendChild(document.createElement("br")),await t.parseRotations(i.join(" "),e)}async bottomCross(t,e){let i=t.getSides().get("down")[4],s=t.getSides().get("front")[4],o=t.getSides().get("right")[4],r=t.getSides().get("left")[4],a=t.getSides().get("back")[4],l=t.findPiece([i,s]),h=t.getSides(),c="",d=document.createElement("b");switch(d.textContent="Bottom Cross",this.terminal.appendChild(d),this.terminal.appendChild(document.createElement("br")),l){case 1:h.get("down")[3]===i?c+="L L U' F F":c+="L' F'";break;case 3:h.get("left")[3]===s?c+="L U' L' F F":c+="B' U U B F F";break;case 5:h.get("front")[3]===s?c+="F'":c+="D' L D";break;case 7:h.get("left")[1]===s?c+="U' F F":c+="L F' L'";break;case 9:h.get("down")[7]===i?c+="D D":c+="D' R F";break;case 11:h.get("down")[1]===s&&(c+="F D' L D");break;case 15:h.get("back")[1]===s?c+="U U F F":c+="B' D R D' R'";break;case 17:h.get("front")[1]===s?c+="F F":c+="F' D' L D";break;case 19:h.get("right")[7]===s?c+="R' D R D'":c+="R F";break;case 21:h.get("right")[5]===s?c+="D R D'":c+="D D B' D D";break;case 23:h.get("front")[5]===s?c+="F":c+="D R' D'";break;case 25:h.get("right")[1]===s?c+="U F F":c+="R' F R";break}switch(await t.parseRotations(c,e),l=t.findPiece([i,o]),h=t.getSides(),c="",l){case 1:h.get("down")[3]===i?c+="L L U' U' R' R'":c+="L L U' U' R' D' F D";break;case 3:h.get("left")[3]===o?c+="L U' L' U' R R":c+="B' U B R R";break;case 5:h.get("front")[3]===o?c+="F U' F' R R":c+="F F R' F F";break;case 7:h.get("left")[1]===o?c+="U' U' R R":c+="U' U' R' D' F D";break;case 9:h.get("down")[7]===i?c+="B B U R R":c+="B R";break;case 15:h.get("back")[1]===o?c+="U R R":c+="B' R B";break;case 17:h.get("front")[1]===o?c+="U' R R":c+="F R' F'";break;case 19:h.get("right")[7]===i&&(c+="R D' F D");break;case 21:h.get("right")[5]===o?c+="R":c+="D B' D'";break;case 23:h.get("front")[5]===i?c+="R'":c+="D' F D";break;case 25:h.get("right")[1]===o?c+="R R":c+="R' D' F D";break}switch(await t.parseRotations(c,e),l=t.findPiece([i,a]),h=t.getSides(),c="",l){case 1:h.get("down")[3]===i?c+="L L U B B":c+="L B";break;case 3:h.get("back")[5]===a?c+="B":c+="D L' D'";break;case 5:h.get("front")[3]===a?c+="F U U F' B B":c+="F U U F' B' D' R D";break;case 7:h.get("left")[1]===a?c+="U B B":c+="L' B L";break;case 9:h.get("down")[7]===a&&(c+="B D' R D");break;case 15:h.get("back")[1]===a?c+="B B":c+="B' D' R D";break;case 17:h.get("front")[1]===a?c+="U U B B":c+="U U B' D' R D";break;case 21:h.get("back")[3]===a?c+="B'":c+="D' R D";break;case 23:h.get("right")[3]===a?c+="R U' R' B B":c+="R R B' R R";break;case 25:h.get("right")[1]===a?c+="U' B B":c+="U' B' D' R D";break}switch(await t.parseRotations(c,e),l=t.findPiece([i,r]),h=t.getSides(),c="",l){case 1:h.get("down")[3]===r&&(c+="L' D F' D'");break;case 3:h.get("left")[3]===r?c+="L'":c+="D' B D";break;case 5:h.get("left")[5]===r?c+="L":c+="D F' D'";break;case 7:h.get("left")[1]===r?c+="L L":c+="L D F' D'";break;case 15:h.get("back")[1]===r?c+="U' L L":c+="U' L D F' D'";break;case 17:h.get("front")[1]===r?c+="U L L":c+="U L D F' D'";break;case 21:h.get("back")[3]===r?c+="D' B' D":c+="D D R D D";break;case 23:h.get("right")[3]===r?c+="D D R' D D":c+="D F D'";break;case 25:h.get("right")[1]===r?c+="U U L L":c+="U U L D F' D'";break}return await t.parseRotations(c,e),l+c}async f2l(t,e){let i=document.createElement("b");i.textContent="First Two Layers",this.terminal.appendChild(i),this.terminal.appendChild(document.createElement("br"));for(let s=0;s<4;s++)await this.f2lHelper(t,e),await t.parseRotations("y",e)}async f2lHelper(t,e){let i=t.getSides().get("down")[4];t.getSides().get("up")[4];let s=t.getSides().get("front")[4],o=t.getSides().get("right")[4];t.getSides().get("left")[4],t.getSides().get("back")[4];let r=t.findPiece([i,o,s]),a=t.findPiece([o,s]),l="",h=[];switch(r){case 0:l+="L U L'";break;case 2:l+="L' U L";break;case 18:l+="R' U R";break}switch(await t.parseRotations(l,e),l="",r=t.findPiece([i,o,s]),r){case 6:l+="U U";break;case 24:l+="U";break;case 8:l+="U'";break}switch(await t.parseRotations(l,e),a=await t.findPiece([o,s]),l="",a){case 3:l+="L U' L' U";break;case 5:l+="L' U' L U";break;case 21:l+="B U B' U'";break}await t.parseRotations(l,e),a=await t.findPiece([o,s]),r=t.findPiece([i,o,s]);let c=t.getSides();if(l="",a===23&&r===20)c.get("front")[5]===s?c.get("front")[8]===i?l+="R U' R' U' R U R' U2 R U' R'":c.get("front")[8]===o&&(l+="R U' R' U R U2 R' U R U' R'"):c.get("front")[8]===i?l+="F' L' U2 L F R U R'":c.get("front")[8]===o?l+="R U' R' F' L' U2 L F":l+="R' R' U' U' F R2 F' U' U' R' U R'",await t.parseRotations(l,e),h.push("misoriented"+a+l);else if(a===23)c.get("front")[5]===s?c.get("up")[8]===i?l+="U R U' R' U R U' R' U R U' R'":c.get("up")[8]===s?l+="U' R U' R' U2 R U' R'":l+="U R U R' U2 R U R'":c.get("up")[8]===i?l+="R U' R' F' U2 F":c.get("up")[8]===s?l+="U2 R U R' F R' F' R":l+="U F' U' F U' R U R'",await t.parseRotations(l,e),h.push("edge in place "+a+l);else if(r===20){switch(a){case 7:c.get("up")[3]===s?l+="U U ":l+="U' ";break;case 15:c.get("up")[1]===s?l+="U ":l+="U U ";break;case 17:c.get("up")[7]===s&&(l+="U' ");break;case 25:c.get("up")[5]===o&&(l+="U ");break}await t.parseRotations(l,e),a=await t.findPiece([o,s]),l="",c.get("front")[8]===i?a===25?l+="R U' R' U R U' R'":l+="R' F R F' R' F R F'":c.get("front")[8]===s?a===25?l+="U' R' F R F' R U R'":l+="U R U' R' F R' F' R":a===25?l+="R U R' U' R U R'":l+="y L' U L U' L' U L y'",await t.parseRotations(l,e),h.push("corner in place"+a+l)}else if(c.get("up")[8]===i){switch(a){case 7:c.get("up")[3]===s?l+="y F R U U R' F' y'":l+="y U' L' U2 L U' L' U L y'";break;case 15:c.get("up")[1]===s?l+="U R U2 R' U R U' R'":l+="F' L' U U L F";break;case 25:c.get("up")[5]===s?l+="R U U R' U' R U R'":l+="F U R U' R' F' R U' R'";break;case 17:c.get("up")[7]===s?l+="U F R' F' R U R U R'":l+="y L' U2 L U L' U' L y'";break}await t.parseRotations(l,e),h.push("white up"+a+l)}else if(c.get("up")[8]===s){switch(a){case 7:c.get("up")[3]===o?l+="y L' U' L y'":l+="U' R U2 R' U2 R U' R'";break;case 15:c.get("up")[1]===o?l+="y U L' U' L U' L' U' L y'":l+="U' R U R' U2 R U' R'";break;case 25:c.get("up")[5]===o?l+="y L' U L U' L' U L U2 L' U L y'":l+="U R U' R'";break;case 17:c.get("up")[7]===o?l+="y U L' U L U' L' U' L y'":l+="y L' U L y' U2 R U R'";break}await t.parseRotations(l,e),h.push("green up"+a+l)}else if(c.get("up")[8]===o){switch(a){case 7:c.get("up")[3]===o?l+="y U L' U' L U2 L' U L y'":l+="U' R U R' U R U R'";break;case 15:c.get("up")[1]===o?l+="y U L' U2 L U2 L' U L y'":l+="R U R'";break;case 25:c.get("up")[5]===o?l+="R U' R' y U2 L' U' L y'":l+="U' R U' R' U R U R'";break;case 17:c.get("up")[7]===o?l+="y U' L' U L y'":l+="R' U2 R2 U R' R' U R";break}await t.parseRotations(l,e),h.push("red up"+a+l)}return h}async oll(t,e){let i=document.createElement("b");i.textContent="OLL",this.terminal.appendChild(i),this.terminal.appendChild(document.createElement("br"));let s=t.getSides(),o=[],r="";for(const a in Jr){let l=Jr[a],h=this.findOll(s,l);if(h[0]){for(let c=0;c<h[1];c++)r+="U ";r+=l[2],o[0]=a+l[2],o[1]=t.getSides()}}return await t.parseRotations(r,e),o}async pll(t,e){let i=document.createElement("b");i.textContent="PLL",this.terminal.appendChild(i),this.terminal.appendChild(document.createElement("br"));let s="",o=t.getSides(),r=[];for(const a in $r){let l=$r[a],h=this.findPll(o,l);if(h[0]){switch(h[1]){case 1:s+="U ";break;case 2:s+="U U ";break;case 3:s="U' ";break}s+=l[1],r[0]=a+l[1],r[1]=t.getSides()}}await t.parseRotations(s,e);for(let a=0;!await this.solved(t)&&a<4;a++)await t.parseRotations("U",e);return r}findOll(t,e){let i=!1,s=t.get("up")[4],o=e[1],r=t.get("front").slice(0,3),a=t.get("right").slice(0,3),l=t.get("back").slice(0,3),h=t.get("left").slice(0,3),c=r.concat(a,l,h),d=0;for(let f=0;!i&&f<4;f++){i=!0,d=f;for(let m=0;m<o.length;m++){const _=c[m],x=o[m];_===s&&x===0&&(i=!1),_!=s&&x===1&&(i=!1)}o=o.slice(-3).concat(o.slice(0,-3))}return[i,d]}findPll(t,e){let i=!1,s=t.get("front")[4],o=t.get("right")[4],r=t.get("back")[4],a=t.get("left")[4],l=e[0],h=t.get("front").slice(0,3),c=t.get("right").slice(0,3),d=t.get("back").slice(0,3),f=t.get("left").slice(0,3),m=h.concat(c,d,f),_=new Map;_.set(s,0),_.set(o,1),_.set(r,2),_.set(a,3);let x=-1;for(let p=0;p<5&&!i;p++){for(let A=0;A<4&&!i;A++){i=!0,x=A;for(let v=0;v<l.length;v++){const E=m[v],y=l[v];_.get(E)!=y&&(i=!1)}l=l.slice(-3).concat(l.slice(0,-3))}let u=_.get(s);_.set(s,_.get(o)),_.set(o,_.get(r)),_.set(r,_.get(a)),_.set(a,u)}return[i,x]}async solved(t){return t.getSides().get("up").every((e,i,s)=>e===s[0])&&t.getSides().get("down").every((e,i,s)=>e===s[0])&&t.getSides().get("left").every((e,i,s)=>e===s[0])&&t.getSides().get("right").every((e,i,s)=>e===s[0])&&t.getSides().get("front").every((e,i,s)=>e===s[0])&&t.getSides().get("back").every((e,i,s)=>e===s[0])}async solvedCross(t){let e=t.getSides().get("down"),i=t.getSides().get("front"),s=t.getSides().get("right"),o=t.getSides().get("back"),r=t.getSides().get("left");return e[1]===e[4]&&e[3]===e[4]&&e[5]===e[4]&&e[7]===e[4]&&i[4]===i[7]&&s[4]===s[7]&&o[4]===o[7]&&r[7]===r[4]}async solvedF2L(t){let e=t.getSides().get("front");return t.getSides().get("right"),t.getSides().get("back"),t.getSides().get("left"),e[3]===e[4]&&e[5]===e[4]&&e[6]===e[4]&&e[7]===e[4]&&e[8]===e[4]&&t.getSides().get("down").every((i,s,o)=>i===o[0])}async solvedOll(t){return t.getSides().get("up").every((e,i,s)=>e===s[0])}}const Qr={type:"change"},$s={type:"start"},ta={type:"end"},ns=new ps,ea=new si,Ip=Math.cos(70*ec.DEG2RAD);class Fp extends Ti{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new L,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:wi.ROTATE,MIDDLE:wi.DOLLY,RIGHT:wi.PAN},this.touches={ONE:Ui.ROTATE,TWO:Ui.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(U){U.addEventListener("keydown",g),this._domElementKeyEvents=U},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",g),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(Qr),i.update(),o=s.NONE},this.update=function(){const U=new L,et=new yi().setFromUnitVectors(t.up,new L(0,1,0)),X=et.clone().invert(),Et=new L,gt=new yi,xt=new L,mt=2*Math.PI;return function(ot=null){const it=i.object.position;U.copy(it).sub(i.target),U.applyQuaternion(et),a.setFromVector3(U),i.autoRotate&&o===s.NONE&&V(b(ot)),i.enableDamping?(a.theta+=l.theta*i.dampingFactor,a.phi+=l.phi*i.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let lt=i.minAzimuthAngle,rt=i.maxAzimuthAngle;isFinite(lt)&&isFinite(rt)&&(lt<-Math.PI?lt+=mt:lt>Math.PI&&(lt-=mt),rt<-Math.PI?rt+=mt:rt>Math.PI&&(rt-=mt),lt<=rt?a.theta=Math.max(lt,Math.min(rt,a.theta)):a.theta=a.theta>(lt+rt)/2?Math.max(lt,a.theta):Math.min(rt,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(c,i.dampingFactor):i.target.add(c),i.zoomToCursor&&C||i.object.isOrthographicCamera?a.radius=K(a.radius):a.radius=K(a.radius*h),U.setFromSpherical(a),U.applyQuaternion(X),it.copy(i.target).add(U),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,c.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),c.set(0,0,0));let j=!1;if(i.zoomToCursor&&C){let pt=null;if(i.object.isPerspectiveCamera){const yt=U.length();pt=K(yt*h);const Zt=yt-pt;i.object.position.addScaledVector(E,Zt),i.object.updateMatrixWorld()}else if(i.object.isOrthographicCamera){const yt=new L(y.x,y.y,0);yt.unproject(i.object),i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/h)),i.object.updateProjectionMatrix(),j=!0;const Zt=new L(y.x,y.y,0);Zt.unproject(i.object),i.object.position.sub(Zt).add(yt),i.object.updateMatrixWorld(),pt=U.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;pt!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(pt).add(i.object.position):(ns.origin.copy(i.object.position),ns.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(ns.direction))<Ip?t.lookAt(i.target):(ea.setFromNormalAndCoplanarPoint(i.object.up,i.target),ns.intersectPlane(ea,i.target))))}else i.object.isOrthographicCamera&&(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/h)),i.object.updateProjectionMatrix(),j=!0);return h=1,C=!1,j||Et.distanceToSquared(i.object.position)>r||8*(1-gt.dot(i.object.quaternion))>r||xt.distanceToSquared(i.target)>0?(i.dispatchEvent(Qr),Et.copy(i.object.position),gt.copy(i.object.quaternion),xt.copy(i.target),j=!1,!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",$),i.domElement.removeEventListener("pointerdown",It),i.domElement.removeEventListener("pointercancel",zt),i.domElement.removeEventListener("wheel",S),i.domElement.removeEventListener("pointermove",Lt),i.domElement.removeEventListener("pointerup",zt),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",g),i._domElementKeyEvents=null)};const i=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let o=s.NONE;const r=1e-6,a=new Zr,l=new Zr;let h=1;const c=new L,d=new Ot,f=new Ot,m=new Ot,_=new Ot,x=new Ot,p=new Ot,u=new Ot,A=new Ot,v=new Ot,E=new L,y=new Ot;let C=!1;const w=[],W={};function b(U){return U!==null?2*Math.PI/60*i.autoRotateSpeed*U:2*Math.PI/60/60*i.autoRotateSpeed}function R(){return Math.pow(.95,i.zoomSpeed)}function V(U){l.theta-=U}function Z(U){l.phi-=U}const J=function(){const U=new L;return function(X,Et){U.setFromMatrixColumn(Et,0),U.multiplyScalar(-X),c.add(U)}}(),P=function(){const U=new L;return function(X,Et){i.screenSpacePanning===!0?U.setFromMatrixColumn(Et,1):(U.setFromMatrixColumn(Et,0),U.crossVectors(i.object.up,U)),U.multiplyScalar(X),c.add(U)}}(),z=function(){const U=new L;return function(X,Et){const gt=i.domElement;if(i.object.isPerspectiveCamera){const xt=i.object.position;U.copy(xt).sub(i.target);let mt=U.length();mt*=Math.tan(i.object.fov/2*Math.PI/180),J(2*X*mt/gt.clientHeight,i.object.matrix),P(2*Et*mt/gt.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(J(X*(i.object.right-i.object.left)/i.object.zoom/gt.clientWidth,i.object.matrix),P(Et*(i.object.top-i.object.bottom)/i.object.zoom/gt.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function q(U){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?h/=U:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function H(U){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?h*=U:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function nt(U){if(!i.zoomToCursor)return;C=!0;const et=i.domElement.getBoundingClientRect(),X=U.clientX-et.left,Et=U.clientY-et.top,gt=et.width,xt=et.height;y.x=X/gt*2-1,y.y=-(Et/xt)*2+1,E.set(y.x,y.y,1).unproject(i.object).sub(i.object.position).normalize()}function K(U){return Math.max(i.minDistance,Math.min(i.maxDistance,U))}function Y(U){d.set(U.clientX,U.clientY)}function k(U){nt(U),u.set(U.clientX,U.clientY)}function N(U){_.set(U.clientX,U.clientY)}function ct(U){f.set(U.clientX,U.clientY),m.subVectors(f,d).multiplyScalar(i.rotateSpeed);const et=i.domElement;V(2*Math.PI*m.x/et.clientHeight),Z(2*Math.PI*m.y/et.clientHeight),d.copy(f),i.update()}function ut(U){A.set(U.clientX,U.clientY),v.subVectors(A,u),v.y>0?q(R()):v.y<0&&H(R()),u.copy(A),i.update()}function ft(U){x.set(U.clientX,U.clientY),p.subVectors(x,_).multiplyScalar(i.panSpeed),z(p.x,p.y),_.copy(x),i.update()}function St(U){nt(U),U.deltaY<0?H(R()):U.deltaY>0&&q(R()),i.update()}function Ut(U){let et=!1;switch(U.code){case i.keys.UP:U.ctrlKey||U.metaKey||U.shiftKey?Z(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):z(0,i.keyPanSpeed),et=!0;break;case i.keys.BOTTOM:U.ctrlKey||U.metaKey||U.shiftKey?Z(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):z(0,-i.keyPanSpeed),et=!0;break;case i.keys.LEFT:U.ctrlKey||U.metaKey||U.shiftKey?V(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):z(i.keyPanSpeed,0),et=!0;break;case i.keys.RIGHT:U.ctrlKey||U.metaKey||U.shiftKey?V(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):z(-i.keyPanSpeed,0),et=!0;break}et&&(U.preventDefault(),i.update())}function vt(){if(w.length===1)d.set(w[0].pageX,w[0].pageY);else{const U=.5*(w[0].pageX+w[1].pageX),et=.5*(w[0].pageY+w[1].pageY);d.set(U,et)}}function Gt(){if(w.length===1)_.set(w[0].pageX,w[0].pageY);else{const U=.5*(w[0].pageX+w[1].pageX),et=.5*(w[0].pageY+w[1].pageY);_.set(U,et)}}function ae(){const U=w[0].pageX-w[1].pageX,et=w[0].pageY-w[1].pageY,X=Math.sqrt(U*U+et*et);u.set(0,X)}function Pt(){i.enableZoom&&ae(),i.enablePan&&Gt()}function I(){i.enableZoom&&ae(),i.enableRotate&&vt()}function te(U){if(w.length==1)f.set(U.pageX,U.pageY);else{const X=ht(U),Et=.5*(U.pageX+X.x),gt=.5*(U.pageY+X.y);f.set(Et,gt)}m.subVectors(f,d).multiplyScalar(i.rotateSpeed);const et=i.domElement;V(2*Math.PI*m.x/et.clientHeight),Z(2*Math.PI*m.y/et.clientHeight),d.copy(f)}function bt(U){if(w.length===1)x.set(U.pageX,U.pageY);else{const et=ht(U),X=.5*(U.pageX+et.x),Et=.5*(U.pageY+et.y);x.set(X,Et)}p.subVectors(x,_).multiplyScalar(i.panSpeed),z(p.x,p.y),_.copy(x)}function Ct(U){const et=ht(U),X=U.pageX-et.x,Et=U.pageY-et.y,gt=Math.sqrt(X*X+Et*Et);A.set(0,gt),v.set(0,Math.pow(A.y/u.y,i.zoomSpeed)),q(v.y),u.copy(A)}function Tt(U){i.enableZoom&&Ct(U),i.enablePan&&bt(U)}function Vt(U){i.enableZoom&&Ct(U),i.enableRotate&&te(U)}function It(U){i.enabled!==!1&&(w.length===0&&(i.domElement.setPointerCapture(U.pointerId),i.domElement.addEventListener("pointermove",Lt),i.domElement.addEventListener("pointerup",zt)),tt(U),U.pointerType==="touch"?O(U):ee(U))}function Lt(U){i.enabled!==!1&&(U.pointerType==="touch"?Q(U):se(U))}function zt(U){_t(U),w.length===0&&(i.domElement.releasePointerCapture(U.pointerId),i.domElement.removeEventListener("pointermove",Lt),i.domElement.removeEventListener("pointerup",zt)),i.dispatchEvent(ta),o=s.NONE}function ee(U){let et;switch(U.button){case 0:et=i.mouseButtons.LEFT;break;case 1:et=i.mouseButtons.MIDDLE;break;case 2:et=i.mouseButtons.RIGHT;break;default:et=-1}switch(et){case wi.DOLLY:if(i.enableZoom===!1)return;k(U),o=s.DOLLY;break;case wi.ROTATE:if(U.ctrlKey||U.metaKey||U.shiftKey){if(i.enablePan===!1)return;N(U),o=s.PAN}else{if(i.enableRotate===!1)return;Y(U),o=s.ROTATE}break;case wi.PAN:if(U.ctrlKey||U.metaKey||U.shiftKey){if(i.enableRotate===!1)return;Y(U),o=s.ROTATE}else{if(i.enablePan===!1)return;N(U),o=s.PAN}break;default:o=s.NONE}o!==s.NONE&&i.dispatchEvent($s)}function se(U){switch(o){case s.ROTATE:if(i.enableRotate===!1)return;ct(U);break;case s.DOLLY:if(i.enableZoom===!1)return;ut(U);break;case s.PAN:if(i.enablePan===!1)return;ft(U);break}}function S(U){i.enabled===!1||i.enableZoom===!1||o!==s.NONE||(U.preventDefault(),i.dispatchEvent($s),St(U),i.dispatchEvent(ta))}function g(U){i.enabled===!1||i.enablePan===!1||Ut(U)}function O(U){switch(st(U),w.length){case 1:switch(i.touches.ONE){case Ui.ROTATE:if(i.enableRotate===!1)return;vt(),o=s.TOUCH_ROTATE;break;case Ui.PAN:if(i.enablePan===!1)return;Gt(),o=s.TOUCH_PAN;break;default:o=s.NONE}break;case 2:switch(i.touches.TWO){case Ui.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Pt(),o=s.TOUCH_DOLLY_PAN;break;case Ui.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;I(),o=s.TOUCH_DOLLY_ROTATE;break;default:o=s.NONE}break;default:o=s.NONE}o!==s.NONE&&i.dispatchEvent($s)}function Q(U){switch(st(U),o){case s.TOUCH_ROTATE:if(i.enableRotate===!1)return;te(U),i.update();break;case s.TOUCH_PAN:if(i.enablePan===!1)return;bt(U),i.update();break;case s.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Tt(U),i.update();break;case s.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Vt(U),i.update();break;default:o=s.NONE}}function $(U){i.enabled!==!1&&U.preventDefault()}function tt(U){w.push(U)}function _t(U){delete W[U.pointerId];for(let et=0;et<w.length;et++)if(w[et].pointerId==U.pointerId){w.splice(et,1);return}}function st(U){let et=W[U.pointerId];et===void 0&&(et=new Ot,W[U.pointerId]=et),et.set(U.pageX,U.pageY)}function ht(U){const et=U.pointerId===w[0].pointerId?w[1]:w[0];return W[et.pointerId]}i.domElement.addEventListener("contextmenu",$),i.domElement.addEventListener("pointerdown",It),i.domElement.addEventListener("pointercancel",zt),i.domElement.addEventListener("wheel",S,{passive:!1}),this.update()}}const go=new ap,Ri=new Ue(75,window.innerWidth*.8/window.innerHeight,.1,1e3),Un=new La({canvas:document.querySelector("#cube-canvas")});Un.setPixelRatio(window.devicePixelRatio);Un.setSize(window.innerWidth*.8,window.innerHeight);Ri.position.setZ(5);Ri.position.setX(5);Ri.position.setY(5);Un.render(go,Ri);const Da=new L(1,1,1),Ia=new Fp(Ri,Un.domElement);Ia.target.copy(Da);Ri.lookAt(Da);const Mn=new Mp(3);go.add(Mn.cubeGroup);function Fa(n){requestAnimationFrame(Fa),Ia.update,Yt.update(n),Un.render(go,Ri)}Fa();let ia=new Dp;document.addEventListener("DOMContentLoaded",function(){const n=document.getElementById("scrambleButton"),t=document.getElementById("solveButton");document.getElementById("backButton");const e=document.getElementById("forwardButton"),i=document.getElementById("speedSlider"),s=document.getElementById("speedValue"),o=document.getElementById("customScramble"),r=document.getElementById("console");n.addEventListener("click",async function(){let a=document.createElement("b");if(a.textContent="Scramble",r.appendChild(a),r.appendChild(document.createElement("br")),o.value==="")Sp(Mn,20,s.innerText);else{let l=o.value;await Mn.parseRotations(l,s.innerHTML)}}),t.addEventListener("click",function(){ia.Solve(Mn,s.innerText)}),i.addEventListener("change",function(){s.innerText=i.value}),e.addEventListener("click",async function(){ia.solveNextStep(Mn,s.innerText)})})});export default Op();
