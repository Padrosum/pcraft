(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Nc="165",tp=0,vl=1,ep=2,Kh=1,np=2,wn=3,ti=0,Pe=1,Qe=2,jn=0,fr=1,xl=2,yl=3,Sl=4,ip=5,gi=100,rp=101,sp=102,op=103,ap=104,cp=200,lp=201,up=202,hp=203,ic=204,rc=205,fp=206,dp=207,pp=208,mp=209,gp=210,_p=211,vp=212,xp=213,yp=214,Sp=0,Ep=1,Mp=2,vo=3,bp=4,wp=5,Tp=6,Ap=7,Oc=0,Rp=1,Cp=2,Zn=0,Lp=1,Pp=2,Dp=3,Ip=4,Up=5,Np=6,Op=7,$h=300,Sr=301,Er=302,sc=303,oc=304,zo=306,ac=1e3,vi=1001,cc=1002,Re=1003,Fp=1004,Ms=1005,tn=1006,ia=1007,xi=1008,ei=1009,Bp=1010,kp=1011,xo=1012,jh=1013,Mr=1014,Kn=1015,Ho=1016,Zh=1017,Jh=1018,br=1020,zp=35902,Hp=1021,Vp=1022,fn=1023,Gp=1024,Wp=1025,dr=1026,wr=1027,Xp=1028,Qh=1029,qp=1030,tf=1031,ef=1033,ra=33776,sa=33777,oa=33778,aa=33779,El=35840,Ml=35841,bl=35842,wl=35843,Tl=36196,Al=37492,Rl=37496,Cl=37808,Ll=37809,Pl=37810,Dl=37811,Il=37812,Ul=37813,Nl=37814,Ol=37815,Fl=37816,Bl=37817,kl=37818,zl=37819,Hl=37820,Vl=37821,ca=36492,Gl=36494,Wl=36495,Yp=36283,Xl=36284,ql=36285,Yl=36286,Kp=3200,$p=3201,nf=0,jp=1,Yn="",We="srgb",ii="srgb-linear",Fc="display-p3",Vo="display-p3-linear",yo="linear",ne="srgb",So="rec709",Eo="p3",Bi=7680,Kl=519,Zp=512,Jp=513,Qp=514,rf=515,tm=516,em=517,nm=518,im=519,lc=35044,$l="300 es",Cn=2e3,Mo=2001;class Dr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}}const xe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let jl=1234567;const pr=Math.PI/180,ss=180/Math.PI;function Pn(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(xe[i&255]+xe[i>>8&255]+xe[i>>16&255]+xe[i>>24&255]+"-"+xe[t&255]+xe[t>>8&255]+"-"+xe[t>>16&15|64]+xe[t>>24&255]+"-"+xe[e&63|128]+xe[e>>8&255]+"-"+xe[e>>16&255]+xe[e>>24&255]+xe[n&255]+xe[n>>8&255]+xe[n>>16&255]+xe[n>>24&255]).toLowerCase()}function we(i,t,e){return Math.max(t,Math.min(e,i))}function Bc(i,t){return(i%t+t)%t}function rm(i,t,e,n,r){return n+(i-t)*(r-n)/(e-t)}function sm(i,t,e){return i!==t?(e-i)/(t-i):0}function ns(i,t,e){return(1-e)*i+e*t}function om(i,t,e,n){return ns(i,t,1-Math.exp(-e*n))}function am(i,t=1){return t-Math.abs(Bc(i,t*2)-t)}function cm(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function lm(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function um(i,t){return i+Math.floor(Math.random()*(t-i+1))}function hm(i,t){return i+Math.random()*(t-i)}function fm(i){return i*(.5-Math.random())}function dm(i){i!==void 0&&(jl=i);let t=jl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function pm(i){return i*pr}function mm(i){return i*ss}function gm(i){return(i&i-1)===0&&i!==0}function _m(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function vm(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function xm(i,t,e,n,r){const s=Math.cos,o=Math.sin,a=s(e/2),c=o(e/2),l=s((t+n)/2),u=o((t+n)/2),f=s((t-n)/2),h=o((t-n)/2),d=s((n-t)/2),g=o((n-t)/2);switch(r){case"XYX":i.set(a*u,c*f,c*h,a*l);break;case"YZY":i.set(c*h,a*u,c*f,a*l);break;case"ZXZ":i.set(c*f,c*h,a*u,a*l);break;case"XZX":i.set(a*u,c*g,c*d,a*l);break;case"YXY":i.set(c*d,a*u,c*g,a*l);break;case"ZYZ":i.set(c*g,c*d,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function en(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function jt(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const uc={DEG2RAD:pr,RAD2DEG:ss,generateUUID:Pn,clamp:we,euclideanModulo:Bc,mapLinear:rm,inverseLerp:sm,lerp:ns,damp:om,pingpong:am,smoothstep:cm,smootherstep:lm,randInt:um,randFloat:hm,randFloatSpread:fm,seededRandom:dm,degToRad:pm,radToDeg:mm,isPowerOfTwo:gm,ceilPowerOfTwo:_m,floorPowerOfTwo:vm,setQuaternionFromProperEuler:xm,normalize:jt,denormalize:en};class kt{constructor(t=0,e=0){kt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(we(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*r+t.x,this.y=s*r+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Bt{constructor(t,e,n,r,s,o,a,c,l){Bt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,c,l)}set(t,e,n,r,s,o,a,c,l){const u=this.elements;return u[0]=t,u[1]=r,u[2]=a,u[3]=e,u[4]=s,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],f=n[7],h=n[2],d=n[5],g=n[8],_=r[0],m=r[3],p=r[6],T=r[1],E=r[4],R=r[7],G=r[2],I=r[5],D=r[8];return s[0]=o*_+a*T+c*G,s[3]=o*m+a*E+c*I,s[6]=o*p+a*R+c*D,s[1]=l*_+u*T+f*G,s[4]=l*m+u*E+f*I,s[7]=l*p+u*R+f*D,s[2]=h*_+d*T+g*G,s[5]=h*m+d*E+g*I,s[8]=h*p+d*R+g*D,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8];return e*o*u-e*a*l-n*s*u+n*a*c+r*s*l-r*o*c}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],f=u*o-a*l,h=a*c-u*s,d=l*s-o*c,g=e*f+n*h+r*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=f*_,t[1]=(r*l-u*n)*_,t[2]=(a*n-r*o)*_,t[3]=h*_,t[4]=(u*e-r*c)*_,t[5]=(r*s-a*e)*_,t[6]=d*_,t[7]=(n*c-l*e)*_,t[8]=(o*e-n*s)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-r*l,r*c,-r*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(la.makeScale(t,e)),this}rotate(t){return this.premultiply(la.makeRotation(-t)),this}translate(t,e){return this.premultiply(la.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const la=new Bt;function sf(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function bo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ym(){const i=bo("canvas");return i.style.display="block",i}const Zl={};function kc(i){i in Zl||(Zl[i]=!0,console.warn(i))}function Sm(i,t,e){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}const Jl=new Bt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Ql=new Bt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),bs={[ii]:{transfer:yo,primaries:So,toReference:i=>i,fromReference:i=>i},[We]:{transfer:ne,primaries:So,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Vo]:{transfer:yo,primaries:Eo,toReference:i=>i.applyMatrix3(Ql),fromReference:i=>i.applyMatrix3(Jl)},[Fc]:{transfer:ne,primaries:Eo,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Ql),fromReference:i=>i.applyMatrix3(Jl).convertLinearToSRGB()}},Em=new Set([ii,Vo]),Zt={enabled:!0,_workingColorSpace:ii,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Em.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=bs[t].toReference,r=bs[e].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return bs[i].primaries},getTransfer:function(i){return i===Yn?yo:bs[i].transfer}};function mr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ua(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ki;class Mm{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ki===void 0&&(ki=bo("canvas")),ki.width=t.width,ki.height=t.height;const n=ki.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ki}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=bo("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=mr(s[o]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(mr(e[n]/255)*255):e[n]=mr(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let bm=0;class of{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:bm++}),this.uuid=Pn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(ha(r[o].image)):s.push(ha(r[o]))}else s=ha(r);n.url=s}return e||(t.images[this.uuid]=n),n}}function ha(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Mm.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let wm=0;class Te extends Dr{constructor(t=Te.DEFAULT_IMAGE,e=Te.DEFAULT_MAPPING,n=vi,r=vi,s=tn,o=xi,a=fn,c=ei,l=Te.DEFAULT_ANISOTROPY,u=Yn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:wm++}),this.uuid=Pn(),this.name="",this.source=new of(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new kt(0,0),this.repeat=new kt(1,1),this.center=new kt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Bt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==$h)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ac:t.x=t.x-Math.floor(t.x);break;case vi:t.x=t.x<0?0:1;break;case cc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ac:t.y=t.y-Math.floor(t.y);break;case vi:t.y=t.y<0?0:1;break;case cc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Te.DEFAULT_IMAGE=null;Te.DEFAULT_MAPPING=$h;Te.DEFAULT_ANISOTROPY=1;class _e{constructor(t=0,e=0,n=0,r=1){_e.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*r+o[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s;const c=t.elements,l=c[0],u=c[4],f=c[8],h=c[1],d=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(u-h)<.01&&Math.abs(f-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const E=(l+1)/2,R=(d+1)/2,G=(p+1)/2,I=(u+h)/4,D=(f+_)/4,V=(g+m)/4;return E>R&&E>G?E<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(E),r=I/n,s=D/n):R>G?R<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(R),n=I/r,s=V/r):G<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(G),n=D/s,r=V/s),this.set(n,r,s,e),this}let T=Math.sqrt((m-g)*(m-g)+(f-_)*(f-_)+(h-u)*(h-u));return Math.abs(T)<.001&&(T=1),this.x=(m-g)/T,this.y=(f-_)/T,this.z=(h-u)/T,this.w=Math.acos((l+d+p-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Tm extends Dr{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new _e(0,0,t,e),this.scissorTest=!1,this.viewport=new _e(0,0,t,e);const r={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:tn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new Te(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,r=t.textures.length;n<r;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new of(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ci extends Tm{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class af extends Te{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Re,this.minFilter=Re,this.wrapR=vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Am extends Te{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Re,this.minFilter=Re,this.wrapR=vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class fs{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,o,a){let c=n[r+0],l=n[r+1],u=n[r+2],f=n[r+3];const h=s[o+0],d=s[o+1],g=s[o+2],_=s[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=u,t[e+3]=f;return}if(a===1){t[e+0]=h,t[e+1]=d,t[e+2]=g,t[e+3]=_;return}if(f!==_||c!==h||l!==d||u!==g){let m=1-a;const p=c*h+l*d+u*g+f*_,T=p>=0?1:-1,E=1-p*p;if(E>Number.EPSILON){const G=Math.sqrt(E),I=Math.atan2(G,p*T);m=Math.sin(m*I)/G,a=Math.sin(a*I)/G}const R=a*T;if(c=c*m+h*R,l=l*m+d*R,u=u*m+g*R,f=f*m+_*R,m===1-a){const G=1/Math.sqrt(c*c+l*l+u*u+f*f);c*=G,l*=G,u*=G,f*=G}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,r,s,o){const a=n[r],c=n[r+1],l=n[r+2],u=n[r+3],f=s[o],h=s[o+1],d=s[o+2],g=s[o+3];return t[e]=a*g+u*f+c*d-l*h,t[e+1]=c*g+u*h+l*f-a*d,t[e+2]=l*g+u*d+a*h-c*f,t[e+3]=u*g-a*f-c*h-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(r/2),f=a(s/2),h=c(n/2),d=c(r/2),g=c(s/2);switch(o){case"XYZ":this._x=h*u*f+l*d*g,this._y=l*d*f-h*u*g,this._z=l*u*g+h*d*f,this._w=l*u*f-h*d*g;break;case"YXZ":this._x=h*u*f+l*d*g,this._y=l*d*f-h*u*g,this._z=l*u*g-h*d*f,this._w=l*u*f+h*d*g;break;case"ZXY":this._x=h*u*f-l*d*g,this._y=l*d*f+h*u*g,this._z=l*u*g+h*d*f,this._w=l*u*f-h*d*g;break;case"ZYX":this._x=h*u*f-l*d*g,this._y=l*d*f+h*u*g,this._z=l*u*g-h*d*f,this._w=l*u*f+h*d*g;break;case"YZX":this._x=h*u*f+l*d*g,this._y=l*d*f+h*u*g,this._z=l*u*g-h*d*f,this._w=l*u*f-h*d*g;break;case"XZY":this._x=h*u*f-l*d*g,this._y=l*d*f-h*u*g,this._z=l*u*g+h*d*f,this._w=l*u*f+h*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],r=e[4],s=e[8],o=e[1],a=e[5],c=e[9],l=e[2],u=e[6],f=e[10],h=n+a+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-c)*d,this._y=(s-l)*d,this._z=(o-r)*d}else if(n>a&&n>f){const d=2*Math.sqrt(1+n-a-f);this._w=(u-c)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+l)/d}else if(a>f){const d=2*Math.sqrt(1+a-n-f);this._w=(s-l)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(c+u)/d}else{const d=2*Math.sqrt(1+f-n-a);this._w=(o-r)/d,this._x=(s+l)/d,this._y=(c+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(we(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,r=t._y,s=t._z,o=t._w,a=e._x,c=e._y,l=e._z,u=e._w;return this._x=n*u+o*a+r*l-s*c,this._y=r*u+o*c+s*a-n*l,this._z=s*u+o*l+n*c-r*a,this._w=o*u-n*a-r*c-s*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*t._w+n*t._x+r*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const d=1-e;return this._w=d*o+e*this._w,this._x=d*n+e*this._x,this._y=d*r+e*this._y,this._z=d*s+e*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),f=Math.sin((1-e)*u)/l,h=Math.sin(e*u)/l;return this._w=o*f+this._w*h,this._x=n*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class X{constructor(t=0,e=0,n=0){X.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(tu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(tu.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,r=this.z,s=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*r-a*n),u=2*(a*e-s*r),f=2*(s*n-o*e);return this.x=e+c*l+o*f-a*u,this.y=n+c*u+a*l-s*f,this.z=r+c*f+s*u-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,r=t.y,s=t.z,o=e.x,a=e.y,c=e.z;return this.x=r*c-s*a,this.y=s*o-n*c,this.z=n*a-r*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return fa.copy(this).projectOnVector(t),this.sub(fa)}reflect(t){return this.sub(fa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(we(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const fa=new X,tu=new fs;class ds{constructor(t=new X(1/0,1/0,1/0),e=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ke.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ke.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Ke.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Ke):Ke.fromBufferAttribute(s,o),Ke.applyMatrix4(t.matrixWorld),this.expandByPoint(Ke);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ws.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ws.copy(n.boundingBox)),ws.applyMatrix4(t.matrixWorld),this.union(ws)}const r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Ke),Ke.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Br),Ts.subVectors(this.max,Br),zi.subVectors(t.a,Br),Hi.subVectors(t.b,Br),Vi.subVectors(t.c,Br),Bn.subVectors(Hi,zi),kn.subVectors(Vi,Hi),oi.subVectors(zi,Vi);let e=[0,-Bn.z,Bn.y,0,-kn.z,kn.y,0,-oi.z,oi.y,Bn.z,0,-Bn.x,kn.z,0,-kn.x,oi.z,0,-oi.x,-Bn.y,Bn.x,0,-kn.y,kn.x,0,-oi.y,oi.x,0];return!da(e,zi,Hi,Vi,Ts)||(e=[1,0,0,0,1,0,0,0,1],!da(e,zi,Hi,Vi,Ts))?!1:(As.crossVectors(Bn,kn),e=[As.x,As.y,As.z],da(e,zi,Hi,Vi,Ts))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ke).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ke).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(_n[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),_n[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),_n[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),_n[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),_n[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),_n[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),_n[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),_n[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(_n),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const _n=[new X,new X,new X,new X,new X,new X,new X,new X],Ke=new X,ws=new ds,zi=new X,Hi=new X,Vi=new X,Bn=new X,kn=new X,oi=new X,Br=new X,Ts=new X,As=new X,ai=new X;function da(i,t,e,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){ai.fromArray(i,s);const a=r.x*Math.abs(ai.x)+r.y*Math.abs(ai.y)+r.z*Math.abs(ai.z),c=t.dot(ai),l=e.dot(ai),u=n.dot(ai);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const Rm=new ds,kr=new X,pa=new X;class Go{constructor(t=new X,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Rm.setFromPoints(t).getCenter(n);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;kr.subVectors(t,this.center);const e=kr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(kr,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(pa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(kr.copy(t.center).add(pa)),this.expandByPoint(kr.copy(t.center).sub(pa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const vn=new X,ma=new X,Rs=new X,zn=new X,ga=new X,Cs=new X,_a=new X;class cf{constructor(t=new X,e=new X(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,vn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=vn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(vn.copy(this.origin).addScaledVector(this.direction,e),vn.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){ma.copy(t).add(e).multiplyScalar(.5),Rs.copy(e).sub(t).normalize(),zn.copy(this.origin).sub(ma);const s=t.distanceTo(e)*.5,o=-this.direction.dot(Rs),a=zn.dot(this.direction),c=-zn.dot(Rs),l=zn.lengthSq(),u=Math.abs(1-o*o);let f,h,d,g;if(u>0)if(f=o*c-a,h=o*a-c,g=s*u,f>=0)if(h>=-g)if(h<=g){const _=1/u;f*=_,h*=_,d=f*(f+o*h+2*a)+h*(o*f+h+2*c)+l}else h=s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*c)+l;else h=-s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*c)+l;else h<=-g?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-c),s),d=-f*f+h*(h+2*c)+l):h<=g?(f=0,h=Math.min(Math.max(-s,-c),s),d=h*(h+2*c)+l):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-c),s),d=-f*f+h*(h+2*c)+l);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(ma).addScaledVector(Rs,h),d}intersectSphere(t,e){vn.subVectors(t.center,this.origin);const n=vn.dot(this.direction),r=vn.dot(vn)-n*n,s=t.radius*t.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return l>=0?(n=(t.min.x-h.x)*l,r=(t.max.x-h.x)*l):(n=(t.max.x-h.x)*l,r=(t.min.x-h.x)*l),u>=0?(s=(t.min.y-h.y)*u,o=(t.max.y-h.y)*u):(s=(t.max.y-h.y)*u,o=(t.min.y-h.y)*u),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(t.min.z-h.z)*f,c=(t.max.z-h.z)*f):(a=(t.max.z-h.z)*f,c=(t.min.z-h.z)*f),n>c||a>r)||((a>n||n!==n)&&(n=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,vn)!==null}intersectTriangle(t,e,n,r,s){ga.subVectors(e,t),Cs.subVectors(n,t),_a.crossVectors(ga,Cs);let o=this.direction.dot(_a),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;zn.subVectors(this.origin,t);const c=a*this.direction.dot(Cs.crossVectors(zn,Cs));if(c<0)return null;const l=a*this.direction.dot(ga.cross(zn));if(l<0||c+l>o)return null;const u=-a*zn.dot(_a);return u<0?null:this.at(u/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ie{constructor(t,e,n,r,s,o,a,c,l,u,f,h,d,g,_,m){ie.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,c,l,u,f,h,d,g,_,m)}set(t,e,n,r,s,o,a,c,l,u,f,h,d,g,_,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=f,p[14]=h,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ie().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,r=1/Gi.setFromMatrixColumn(t,0).length(),s=1/Gi.setFromMatrixColumn(t,1).length(),o=1/Gi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,r=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(t.order==="XYZ"){const h=o*u,d=o*f,g=a*u,_=a*f;e[0]=c*u,e[4]=-c*f,e[8]=l,e[1]=d+g*l,e[5]=h-_*l,e[9]=-a*c,e[2]=_-h*l,e[6]=g+d*l,e[10]=o*c}else if(t.order==="YXZ"){const h=c*u,d=c*f,g=l*u,_=l*f;e[0]=h+_*a,e[4]=g*a-d,e[8]=o*l,e[1]=o*f,e[5]=o*u,e[9]=-a,e[2]=d*a-g,e[6]=_+h*a,e[10]=o*c}else if(t.order==="ZXY"){const h=c*u,d=c*f,g=l*u,_=l*f;e[0]=h-_*a,e[4]=-o*f,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*u,e[9]=_-h*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const h=o*u,d=o*f,g=a*u,_=a*f;e[0]=c*u,e[4]=g*l-d,e[8]=h*l+_,e[1]=c*f,e[5]=_*l+h,e[9]=d*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const h=o*c,d=o*l,g=a*c,_=a*l;e[0]=c*u,e[4]=_-h*f,e[8]=g*f+d,e[1]=f,e[5]=o*u,e[9]=-a*u,e[2]=-l*u,e[6]=d*f+g,e[10]=h-_*f}else if(t.order==="XZY"){const h=o*c,d=o*l,g=a*c,_=a*l;e[0]=c*u,e[4]=-f,e[8]=l*u,e[1]=h*f+_,e[5]=o*u,e[9]=d*f-g,e[2]=g*f-d,e[6]=a*u,e[10]=_*f+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Cm,t,Lm)}lookAt(t,e,n){const r=this.elements;return Ue.subVectors(t,e),Ue.lengthSq()===0&&(Ue.z=1),Ue.normalize(),Hn.crossVectors(n,Ue),Hn.lengthSq()===0&&(Math.abs(n.z)===1?Ue.x+=1e-4:Ue.z+=1e-4,Ue.normalize(),Hn.crossVectors(n,Ue)),Hn.normalize(),Ls.crossVectors(Ue,Hn),r[0]=Hn.x,r[4]=Ls.x,r[8]=Ue.x,r[1]=Hn.y,r[5]=Ls.y,r[9]=Ue.y,r[2]=Hn.z,r[6]=Ls.z,r[10]=Ue.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],f=n[5],h=n[9],d=n[13],g=n[2],_=n[6],m=n[10],p=n[14],T=n[3],E=n[7],R=n[11],G=n[15],I=r[0],D=r[4],V=r[8],y=r[12],x=r[1],U=r[5],P=r[9],b=r[13],w=r[2],C=r[6],A=r[10],F=r[14],O=r[3],J=r[7],Z=r[11],et=r[15];return s[0]=o*I+a*x+c*w+l*O,s[4]=o*D+a*U+c*C+l*J,s[8]=o*V+a*P+c*A+l*Z,s[12]=o*y+a*b+c*F+l*et,s[1]=u*I+f*x+h*w+d*O,s[5]=u*D+f*U+h*C+d*J,s[9]=u*V+f*P+h*A+d*Z,s[13]=u*y+f*b+h*F+d*et,s[2]=g*I+_*x+m*w+p*O,s[6]=g*D+_*U+m*C+p*J,s[10]=g*V+_*P+m*A+p*Z,s[14]=g*y+_*b+m*F+p*et,s[3]=T*I+E*x+R*w+G*O,s[7]=T*D+E*U+R*C+G*J,s[11]=T*V+E*P+R*A+G*Z,s[15]=T*y+E*b+R*F+G*et,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],o=t[1],a=t[5],c=t[9],l=t[13],u=t[2],f=t[6],h=t[10],d=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+s*c*f-r*l*f-s*a*h+n*l*h+r*a*d-n*c*d)+_*(+e*c*d-e*l*h+s*o*h-r*o*d+r*l*u-s*c*u)+m*(+e*l*f-e*a*d-s*o*f+n*o*d+s*a*u-n*l*u)+p*(-r*a*u-e*c*f+e*a*h+r*o*f-n*o*h+n*c*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],f=t[9],h=t[10],d=t[11],g=t[12],_=t[13],m=t[14],p=t[15],T=f*m*l-_*h*l+_*c*d-a*m*d-f*c*p+a*h*p,E=g*h*l-u*m*l-g*c*d+o*m*d+u*c*p-o*h*p,R=u*_*l-g*f*l+g*a*d-o*_*d-u*a*p+o*f*p,G=g*f*c-u*_*c-g*a*h+o*_*h+u*a*m-o*f*m,I=e*T+n*E+r*R+s*G;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/I;return t[0]=T*D,t[1]=(_*h*s-f*m*s-_*r*d+n*m*d+f*r*p-n*h*p)*D,t[2]=(a*m*s-_*c*s+_*r*l-n*m*l-a*r*p+n*c*p)*D,t[3]=(f*c*s-a*h*s-f*r*l+n*h*l+a*r*d-n*c*d)*D,t[4]=E*D,t[5]=(u*m*s-g*h*s+g*r*d-e*m*d-u*r*p+e*h*p)*D,t[6]=(g*c*s-o*m*s-g*r*l+e*m*l+o*r*p-e*c*p)*D,t[7]=(o*h*s-u*c*s+u*r*l-e*h*l-o*r*d+e*c*d)*D,t[8]=R*D,t[9]=(g*f*s-u*_*s-g*n*d+e*_*d+u*n*p-e*f*p)*D,t[10]=(o*_*s-g*a*s+g*n*l-e*_*l-o*n*p+e*a*p)*D,t[11]=(u*a*s-o*f*s-u*n*l+e*f*l+o*n*d-e*a*d)*D,t[12]=G*D,t[13]=(u*_*r-g*f*r+g*n*h-e*_*h-u*n*m+e*f*m)*D,t[14]=(g*a*r-o*_*r-g*n*c+e*_*c+o*n*m-e*a*m)*D,t[15]=(o*f*r-u*a*r+u*n*c-e*f*c-o*n*h+e*a*h)*D,this}scale(t){const e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),r=Math.sin(e),s=1-n,o=t.x,a=t.y,c=t.z,l=s*o,u=s*a;return this.set(l*o+n,l*a-r*c,l*c+r*a,0,l*a+r*c,u*a+n,u*c-r*o,0,l*c-r*a,u*c+r*o,s*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,o){return this.set(1,n,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){const r=this.elements,s=e._x,o=e._y,a=e._z,c=e._w,l=s+s,u=o+o,f=a+a,h=s*l,d=s*u,g=s*f,_=o*u,m=o*f,p=a*f,T=c*l,E=c*u,R=c*f,G=n.x,I=n.y,D=n.z;return r[0]=(1-(_+p))*G,r[1]=(d+R)*G,r[2]=(g-E)*G,r[3]=0,r[4]=(d-R)*I,r[5]=(1-(h+p))*I,r[6]=(m+T)*I,r[7]=0,r[8]=(g+E)*D,r[9]=(m-T)*D,r[10]=(1-(h+_))*D,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){const r=this.elements;let s=Gi.set(r[0],r[1],r[2]).length();const o=Gi.set(r[4],r[5],r[6]).length(),a=Gi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],$e.copy(this);const l=1/s,u=1/o,f=1/a;return $e.elements[0]*=l,$e.elements[1]*=l,$e.elements[2]*=l,$e.elements[4]*=u,$e.elements[5]*=u,$e.elements[6]*=u,$e.elements[8]*=f,$e.elements[9]*=f,$e.elements[10]*=f,e.setFromRotationMatrix($e),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,r,s,o,a=Cn){const c=this.elements,l=2*s/(e-t),u=2*s/(n-r),f=(e+t)/(e-t),h=(n+r)/(n-r);let d,g;if(a===Cn)d=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Mo)d=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,r,s,o,a=Cn){const c=this.elements,l=1/(e-t),u=1/(n-r),f=1/(o-s),h=(e+t)*l,d=(n+r)*u;let g,_;if(a===Cn)g=(o+s)*f,_=-2*f;else if(a===Mo)g=s*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-h,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Gi=new X,$e=new ie,Cm=new X(0,0,0),Lm=new X(1,1,1),Hn=new X,Ls=new X,Ue=new X,eu=new ie,nu=new fs;class dn{constructor(t=0,e=0,n=0,r=dn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const r=t.elements,s=r[0],o=r[4],a=r[8],c=r[1],l=r[5],u=r[9],f=r[2],h=r[6],d=r[10];switch(e){case"XYZ":this._y=Math.asin(we(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-we(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(we(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-we(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(we(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-we(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return eu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(eu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return nu.setFromEuler(this),this.setFromQuaternion(nu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}dn.DEFAULT_ORDER="XYZ";class lf{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Pm=0;const iu=new X,Wi=new fs,xn=new ie,Ps=new X,zr=new X,Dm=new X,Im=new fs,ru=new X(1,0,0),su=new X(0,1,0),ou=new X(0,0,1),au={type:"added"},Um={type:"removed"},Xi={type:"childadded",child:null},va={type:"childremoved",child:null};class ve extends Dr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Pm++}),this.uuid=Pn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ve.DEFAULT_UP.clone();const t=new X,e=new dn,n=new fs,r=new X(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ie},normalMatrix:{value:new Bt}}),this.matrix=new ie,this.matrixWorld=new ie,this.matrixAutoUpdate=ve.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new lf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Wi.setFromAxisAngle(t,e),this.quaternion.multiply(Wi),this}rotateOnWorldAxis(t,e){return Wi.setFromAxisAngle(t,e),this.quaternion.premultiply(Wi),this}rotateX(t){return this.rotateOnAxis(ru,t)}rotateY(t){return this.rotateOnAxis(su,t)}rotateZ(t){return this.rotateOnAxis(ou,t)}translateOnAxis(t,e){return iu.copy(t).applyQuaternion(this.quaternion),this.position.add(iu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ru,t)}translateY(t){return this.translateOnAxis(su,t)}translateZ(t){return this.translateOnAxis(ou,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(xn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ps.copy(t):Ps.set(t,e,n);const r=this.parent;this.updateWorldMatrix(!0,!1),zr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xn.lookAt(zr,Ps,this.up):xn.lookAt(Ps,zr,this.up),this.quaternion.setFromRotationMatrix(xn),r&&(xn.extractRotation(r.matrixWorld),Wi.setFromRotationMatrix(xn),this.quaternion.premultiply(Wi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(au),Xi.child=t,this.dispatchEvent(Xi),Xi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Um),va.child=t,this.dispatchEvent(va),va.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),xn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),xn.multiply(t.parent.matrixWorld)),t.applyMatrix4(xn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(au),Xi.child=t,this.dispatchEvent(Xi),Xi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zr,t,Dm),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zr,Im,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,r=e.length;n<r;n++){const s=e[n];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const f=c[l];s(t.shapes,f)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(t.materials,this.material[c]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];r.animations.push(s(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),u=o(t.images),f=o(t.shapes),h=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=r,n;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const r=t.children[n];this.add(r.clone())}return this}}ve.DEFAULT_UP=new X(0,1,0);ve.DEFAULT_MATRIX_AUTO_UPDATE=!0;ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const je=new X,yn=new X,xa=new X,Sn=new X,qi=new X,Yi=new X,cu=new X,ya=new X,Sa=new X,Ea=new X;class Ye{constructor(t=new X,e=new X,n=new X){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),je.subVectors(t,e),r.cross(je);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){je.subVectors(r,e),yn.subVectors(n,e),xa.subVectors(t,e);const o=je.dot(je),a=je.dot(yn),c=je.dot(xa),l=yn.dot(yn),u=yn.dot(xa),f=o*l-a*a;if(f===0)return s.set(0,0,0),null;const h=1/f,d=(l*c-a*u)*h,g=(o*u-a*c)*h;return s.set(1-d-g,g,d)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,Sn)===null?!1:Sn.x>=0&&Sn.y>=0&&Sn.x+Sn.y<=1}static getInterpolation(t,e,n,r,s,o,a,c){return this.getBarycoord(t,e,n,r,Sn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Sn.x),c.addScaledVector(o,Sn.y),c.addScaledVector(a,Sn.z),c)}static isFrontFacing(t,e,n,r){return je.subVectors(n,e),yn.subVectors(t,e),je.cross(yn).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return je.subVectors(this.c,this.b),yn.subVectors(this.a,this.b),je.cross(yn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ye.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Ye.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return Ye.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return Ye.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ye.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,r=this.b,s=this.c;let o,a;qi.subVectors(r,n),Yi.subVectors(s,n),ya.subVectors(t,n);const c=qi.dot(ya),l=Yi.dot(ya);if(c<=0&&l<=0)return e.copy(n);Sa.subVectors(t,r);const u=qi.dot(Sa),f=Yi.dot(Sa);if(u>=0&&f<=u)return e.copy(r);const h=c*f-u*l;if(h<=0&&c>=0&&u<=0)return o=c/(c-u),e.copy(n).addScaledVector(qi,o);Ea.subVectors(t,s);const d=qi.dot(Ea),g=Yi.dot(Ea);if(g>=0&&d<=g)return e.copy(s);const _=d*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(Yi,a);const m=u*g-d*f;if(m<=0&&f-u>=0&&d-g>=0)return cu.subVectors(s,r),a=(f-u)/(f-u+(d-g)),e.copy(r).addScaledVector(cu,a);const p=1/(m+_+h);return o=_*p,a=h*p,e.copy(n).addScaledVector(qi,o).addScaledVector(Yi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const uf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vn={h:0,s:0,l:0},Ds={h:0,s:0,l:0};function Ma(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Nt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=We){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Zt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,r=Zt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Zt.toWorkingColorSpace(this,r),this}setHSL(t,e,n,r=Zt.workingColorSpace){if(t=Bc(t,1),e=we(e,0,1),n=we(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=Ma(o,s,t+1/3),this.g=Ma(o,s,t),this.b=Ma(o,s,t-1/3)}return Zt.toWorkingColorSpace(this,r),this}setStyle(t,e=We){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=We){const n=uf[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=mr(t.r),this.g=mr(t.g),this.b=mr(t.b),this}copyLinearToSRGB(t){return this.r=ua(t.r),this.g=ua(t.g),this.b=ua(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=We){return Zt.fromWorkingColorSpace(ye.copy(this),t),Math.round(we(ye.r*255,0,255))*65536+Math.round(we(ye.g*255,0,255))*256+Math.round(we(ye.b*255,0,255))}getHexString(t=We){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Zt.workingColorSpace){Zt.fromWorkingColorSpace(ye.copy(this),e);const n=ye.r,r=ye.g,s=ye.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const f=o-a;switch(l=u<=.5?f/(o+a):f/(2-o-a),o){case n:c=(r-s)/f+(r<s?6:0);break;case r:c=(s-n)/f+2;break;case s:c=(n-r)/f+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=Zt.workingColorSpace){return Zt.fromWorkingColorSpace(ye.copy(this),e),t.r=ye.r,t.g=ye.g,t.b=ye.b,t}getStyle(t=We){Zt.fromWorkingColorSpace(ye.copy(this),t);const e=ye.r,n=ye.g,r=ye.b;return t!==We?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(Vn),this.setHSL(Vn.h+t,Vn.s+e,Vn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Vn),t.getHSL(Ds);const n=ns(Vn.h,Ds.h,e),r=ns(Vn.s,Ds.s,e),s=ns(Vn.l,Ds.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ye=new Nt;Nt.NAMES=uf;let Nm=0;class Ii extends Dr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Nm++}),this.uuid=Pn(),this.name="",this.type="Material",this.blending=fr,this.side=ti,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ic,this.blendDst=rc,this.blendEquation=gi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Nt(0,0,0),this.blendAlpha=0,this.depthFunc=vo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Kl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Bi,this.stencilZFail=Bi,this.stencilZPass=Bi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==fr&&(n.blending=this.blending),this.side!==ti&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ic&&(n.blendSrc=this.blendSrc),this.blendDst!==rc&&(n.blendDst=this.blendDst),this.blendEquation!==gi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==vo&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Kl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Bi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Bi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Bi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(e){const s=r(t.textures),o=r(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class wo extends Ii{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new dn,this.combine=Oc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const le=new X,Is=new kt;class rn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=lc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Kn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return kc("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Is.fromBufferAttribute(this,e),Is.applyMatrix3(t),this.setXY(e,Is.x,Is.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)le.fromBufferAttribute(this,e),le.applyMatrix3(t),this.setXYZ(e,le.x,le.y,le.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)le.fromBufferAttribute(this,e),le.applyMatrix4(t),this.setXYZ(e,le.x,le.y,le.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)le.fromBufferAttribute(this,e),le.applyNormalMatrix(t),this.setXYZ(e,le.x,le.y,le.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)le.fromBufferAttribute(this,e),le.transformDirection(t),this.setXYZ(e,le.x,le.y,le.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=en(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=jt(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=en(e,this.array)),e}setX(t,e){return this.normalized&&(e=jt(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=en(e,this.array)),e}setY(t,e){return this.normalized&&(e=jt(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=en(e,this.array)),e}setZ(t,e){return this.normalized&&(e=jt(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=en(e,this.array)),e}setW(t,e){return this.normalized&&(e=jt(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=jt(e,this.array),n=jt(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=jt(e,this.array),n=jt(n,this.array),r=jt(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=jt(e,this.array),n=jt(n,this.array),r=jt(r,this.array),s=jt(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==lc&&(t.usage=this.usage),t}}class hf extends rn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class ff extends rn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Ce extends rn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Om=0;const He=new ie,ba=new ve,Ki=new X,Ne=new ds,Hr=new ds,me=new X;class sn extends Dr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Om++}),this.uuid=Pn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(sf(t)?ff:hf)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Bt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return He.makeRotationFromQuaternion(t),this.applyMatrix4(He),this}rotateX(t){return He.makeRotationX(t),this.applyMatrix4(He),this}rotateY(t){return He.makeRotationY(t),this.applyMatrix4(He),this}rotateZ(t){return He.makeRotationZ(t),this.applyMatrix4(He),this}translate(t,e,n){return He.makeTranslation(t,e,n),this.applyMatrix4(He),this}scale(t,e,n){return He.makeScale(t,e,n),this.applyMatrix4(He),this}lookAt(t){return ba.lookAt(t),ba.updateMatrix(),this.applyMatrix4(ba.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ki).negate(),this.translate(Ki.x,Ki.y,Ki.z),this}setFromPoints(t){const e=[];for(let n=0,r=t.length;n<r;n++){const s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Ce(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ds);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){const s=e[n];Ne.setFromBufferAttribute(s),this.morphTargetsRelative?(me.addVectors(this.boundingBox.min,Ne.min),this.boundingBox.expandByPoint(me),me.addVectors(this.boundingBox.max,Ne.max),this.boundingBox.expandByPoint(me)):(this.boundingBox.expandByPoint(Ne.min),this.boundingBox.expandByPoint(Ne.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Go);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(t){const n=this.boundingSphere.center;if(Ne.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];Hr.setFromBufferAttribute(a),this.morphTargetsRelative?(me.addVectors(Ne.min,Hr.min),Ne.expandByPoint(me),me.addVectors(Ne.max,Hr.max),Ne.expandByPoint(me)):(Ne.expandByPoint(Hr.min),Ne.expandByPoint(Hr.max))}Ne.getCenter(n);let r=0;for(let s=0,o=t.count;s<o;s++)me.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(me));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)me.fromBufferAttribute(a,l),c&&(Ki.fromBufferAttribute(t,l),me.add(Ki)),r=Math.max(r,n.distanceToSquared(me))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new rn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let V=0;V<n.count;V++)a[V]=new X,c[V]=new X;const l=new X,u=new X,f=new X,h=new kt,d=new kt,g=new kt,_=new X,m=new X;function p(V,y,x){l.fromBufferAttribute(n,V),u.fromBufferAttribute(n,y),f.fromBufferAttribute(n,x),h.fromBufferAttribute(s,V),d.fromBufferAttribute(s,y),g.fromBufferAttribute(s,x),u.sub(l),f.sub(l),d.sub(h),g.sub(h);const U=1/(d.x*g.y-g.x*d.y);isFinite(U)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(f,-d.y).multiplyScalar(U),m.copy(f).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(U),a[V].add(_),a[y].add(_),a[x].add(_),c[V].add(m),c[y].add(m),c[x].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:t.count}]);for(let V=0,y=T.length;V<y;++V){const x=T[V],U=x.start,P=x.count;for(let b=U,w=U+P;b<w;b+=3)p(t.getX(b+0),t.getX(b+1),t.getX(b+2))}const E=new X,R=new X,G=new X,I=new X;function D(V){G.fromBufferAttribute(r,V),I.copy(G);const y=a[V];E.copy(y),E.sub(G.multiplyScalar(G.dot(y))).normalize(),R.crossVectors(I,y);const U=R.dot(c[V])<0?-1:1;o.setXYZW(V,E.x,E.y,E.z,U)}for(let V=0,y=T.length;V<y;++V){const x=T[V],U=x.start,P=x.count;for(let b=U,w=U+P;b<w;b+=3)D(t.getX(b+0)),D(t.getX(b+1)),D(t.getX(b+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new rn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,d=n.count;h<d;h++)n.setXYZ(h,0,0,0);const r=new X,s=new X,o=new X,a=new X,c=new X,l=new X,u=new X,f=new X;if(t)for(let h=0,d=t.count;h<d;h+=3){const g=t.getX(h+0),_=t.getX(h+1),m=t.getX(h+2);r.fromBufferAttribute(e,g),s.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),a.add(u),c.add(u),l.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let h=0,d=e.count;h<d;h+=3)r.fromBufferAttribute(e,h+0),s.fromBufferAttribute(e,h+1),o.fromBufferAttribute(e,h+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)me.fromBufferAttribute(t,e),me.normalize(),t.setXYZ(e,me.x,me.y,me.z)}toNonIndexed(){function t(a,c){const l=a.array,u=a.itemSize,f=a.normalized,h=new l.constructor(c.length*u);let d=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?d=c[_]*a.data.stride+a.offset:d=c[_]*u;for(let p=0;p<u;p++)h[g++]=l[d++]}return new rn(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new sn,n=this.index.array,r=this.attributes;for(const a in r){const c=r[a],l=t(c,n);e.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let u=0,f=l.length;u<f;u++){const h=l[u],d=t(h,n);c.push(d)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let f=0,h=l.length;f<h;f++){const d=l[f];u.push(d.toJSON(t.data))}u.length>0&&(r[c]=u,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const r=t.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(e))}const s=t.morphAttributes;for(const l in s){const u=[],f=s[l];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,u=o.length;l<u;l++){const f=o[l];this.addGroup(f.start,f.count,f.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const lu=new ie,ci=new cf,Us=new Go,uu=new X,$i=new X,ji=new X,Zi=new X,wa=new X,Ns=new X,Os=new kt,Fs=new kt,Bs=new kt,hu=new X,fu=new X,du=new X,ks=new X,zs=new X;class Fe extends ve{constructor(t=new sn,e=new wo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(r,t);const a=this.morphTargetInfluences;if(s&&a){Ns.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=a[c],f=s[c];u!==0&&(wa.fromBufferAttribute(f,t),o?Ns.addScaledVector(wa,u):Ns.addScaledVector(wa.sub(e),u))}e.add(Ns)}return e}raycast(t,e){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Us.copy(n.boundingSphere),Us.applyMatrix4(s),ci.copy(t.ray).recast(t.near),!(Us.containsPoint(ci.origin)===!1&&(ci.intersectSphere(Us,uu)===null||ci.origin.distanceToSquared(uu)>(t.far-t.near)**2))&&(lu.copy(s).invert(),ci.copy(t.ray).applyMatrix4(lu),!(n.boundingBox!==null&&ci.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ci)))}_computeIntersections(t,e,n){let r;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const m=h[g],p=o[m.materialIndex],T=Math.max(m.start,d.start),E=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let R=T,G=E;R<G;R+=3){const I=a.getX(R),D=a.getX(R+1),V=a.getX(R+2);r=Hs(this,p,t,n,l,u,f,I,D,V),r&&(r.faceIndex=Math.floor(R/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const T=a.getX(m),E=a.getX(m+1),R=a.getX(m+2);r=Hs(this,o,t,n,l,u,f,T,E,R),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const m=h[g],p=o[m.materialIndex],T=Math.max(m.start,d.start),E=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let R=T,G=E;R<G;R+=3){const I=R,D=R+1,V=R+2;r=Hs(this,p,t,n,l,u,f,I,D,V),r&&(r.faceIndex=Math.floor(R/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const g=Math.max(0,d.start),_=Math.min(c.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const T=m,E=m+1,R=m+2;r=Hs(this,o,t,n,l,u,f,T,E,R),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}}}function Fm(i,t,e,n,r,s,o,a){let c;if(t.side===Pe?c=n.intersectTriangle(o,s,r,!0,a):c=n.intersectTriangle(r,s,o,t.side===ti,a),c===null)return null;zs.copy(a),zs.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(zs);return l<e.near||l>e.far?null:{distance:l,point:zs.clone(),object:i}}function Hs(i,t,e,n,r,s,o,a,c,l){i.getVertexPosition(a,$i),i.getVertexPosition(c,ji),i.getVertexPosition(l,Zi);const u=Fm(i,t,e,n,$i,ji,Zi,ks);if(u){r&&(Os.fromBufferAttribute(r,a),Fs.fromBufferAttribute(r,c),Bs.fromBufferAttribute(r,l),u.uv=Ye.getInterpolation(ks,$i,ji,Zi,Os,Fs,Bs,new kt)),s&&(Os.fromBufferAttribute(s,a),Fs.fromBufferAttribute(s,c),Bs.fromBufferAttribute(s,l),u.uv1=Ye.getInterpolation(ks,$i,ji,Zi,Os,Fs,Bs,new kt)),o&&(hu.fromBufferAttribute(o,a),fu.fromBufferAttribute(o,c),du.fromBufferAttribute(o,l),u.normal=Ye.getInterpolation(ks,$i,ji,Zi,hu,fu,du,new X),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:c,c:l,normal:new X,materialIndex:0};Ye.getNormal($i,ji,Zi,f.normal),u.face=f}return u}class Ui extends sn{constructor(t=1,e=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],u=[],f=[];let h=0,d=0;g("z","y","x",-1,-1,n,e,t,o,s,0),g("z","y","x",1,-1,n,e,-t,o,s,1),g("x","z","y",1,1,t,n,e,r,o,2),g("x","z","y",1,-1,t,n,-e,r,o,3),g("x","y","z",1,-1,t,e,n,r,s,4),g("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new Ce(l,3)),this.setAttribute("normal",new Ce(u,3)),this.setAttribute("uv",new Ce(f,2));function g(_,m,p,T,E,R,G,I,D,V,y){const x=R/D,U=G/V,P=R/2,b=G/2,w=I/2,C=D+1,A=V+1;let F=0,O=0;const J=new X;for(let Z=0;Z<A;Z++){const et=Z*U-b;for(let st=0;st<C;st++){const St=st*x-P;J[_]=St*T,J[m]=et*E,J[p]=w,l.push(J.x,J.y,J.z),J[_]=0,J[m]=0,J[p]=I>0?1:-1,u.push(J.x,J.y,J.z),f.push(st/D),f.push(1-Z/V),F+=1}}for(let Z=0;Z<V;Z++)for(let et=0;et<D;et++){const st=h+et+C*Z,St=h+et+C*(Z+1),q=h+(et+1)+C*(Z+1),j=h+(et+1)+C*Z;c.push(st,St,j),c.push(St,q,j),O+=6}a.addGroup(d,O,y),d+=O,h+=F}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ui(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Tr(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const r=i[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function be(i){const t={};for(let e=0;e<i.length;e++){const n=Tr(i[e]);for(const r in n)t[r]=n[r]}return t}function Bm(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function df(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Zt.workingColorSpace}const km={clone:Tr,merge:be};var zm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Hm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ni extends Ii{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=zm,this.fragmentShader=Hm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Tr(t.uniforms),this.uniformsGroups=Bm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class pf extends ve{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ie,this.projectionMatrix=new ie,this.projectionMatrixInverse=new ie,this.coordinateSystem=Cn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Gn=new X,pu=new kt,mu=new kt;class Xe extends pf{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ss*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(pr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ss*2*Math.atan(Math.tan(pr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Gn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Gn.x,Gn.y).multiplyScalar(-t/Gn.z),Gn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Gn.x,Gn.y).multiplyScalar(-t/Gn.z)}getViewSize(t,e){return this.getViewBounds(t,pu,mu),e.subVectors(mu,pu)}setViewOffset(t,e,n,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(pr*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,e-=o.offsetY*n/l,r*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ji=-90,Qi=1;class Vm extends ve{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Xe(Ji,Qi,t,e);r.layers=this.layers,this.add(r);const s=new Xe(Ji,Qi,t,e);s.layers=this.layers,this.add(s);const o=new Xe(Ji,Qi,t,e);o.layers=this.layers,this.add(o);const a=new Xe(Ji,Qi,t,e);a.layers=this.layers,this.add(a);const c=new Xe(Ji,Qi,t,e);c.layers=this.layers,this.add(c);const l=new Xe(Ji,Qi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,r,s,o,a,c]=e;for(const l of e)this.remove(l);if(t===Cn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Mo)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,c,l,u]=this.children,f=t.getRenderTarget(),h=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,r),t.render(e,s),t.setRenderTarget(n,1,r),t.render(e,o),t.setRenderTarget(n,2,r),t.render(e,a),t.setRenderTarget(n,3,r),t.render(e,c),t.setRenderTarget(n,4,r),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,r),t.render(e,u),t.setRenderTarget(f,h,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class mf extends Te{constructor(t,e,n,r,s,o,a,c,l,u){t=t!==void 0?t:[],e=e!==void 0?e:Sr,super(t,e,n,r,s,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Gm extends Ci{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new mf(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:tn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ui(5,5,5),s=new ni({name:"CubemapFromEquirect",uniforms:Tr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Pe,blending:jn});s.uniforms.tEquirect.value=e;const o=new Fe(r,s),a=e.minFilter;return e.minFilter===xi&&(e.minFilter=tn),new Vm(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,r){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,r);t.setRenderTarget(s)}}const Ta=new X,Wm=new X,Xm=new Bt;class di{constructor(t=new X(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const r=Ta.subVectors(n,e).cross(Wm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Ta),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Xm.getNormalMatrix(t),r=this.coplanarPoint(Ta).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const li=new Go,Vs=new X;class zc{constructor(t=new di,e=new di,n=new di,r=new di,s=new di,o=new di){this.planes=[t,e,n,r,s,o]}set(t,e,n,r,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Cn){const n=this.planes,r=t.elements,s=r[0],o=r[1],a=r[2],c=r[3],l=r[4],u=r[5],f=r[6],h=r[7],d=r[8],g=r[9],_=r[10],m=r[11],p=r[12],T=r[13],E=r[14],R=r[15];if(n[0].setComponents(c-s,h-l,m-d,R-p).normalize(),n[1].setComponents(c+s,h+l,m+d,R+p).normalize(),n[2].setComponents(c+o,h+u,m+g,R+T).normalize(),n[3].setComponents(c-o,h-u,m-g,R-T).normalize(),n[4].setComponents(c-a,h-f,m-_,R-E).normalize(),e===Cn)n[5].setComponents(c+a,h+f,m+_,R+E).normalize();else if(e===Mo)n[5].setComponents(a,f,_,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),li.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),li.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(li)}intersectsSprite(t){return li.center.set(0,0,0),li.radius=.7071067811865476,li.applyMatrix4(t.matrixWorld),this.intersectsSphere(li)}intersectsSphere(t){const e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const r=e[n];if(Vs.x=r.normal.x>0?t.max.x:t.min.x,Vs.y=r.normal.y>0?t.max.y:t.min.y,Vs.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Vs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function gf(){let i=null,t=!1,e=null,n=null;function r(s,o){e(s,o),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function qm(i){const t=new WeakMap;function e(a,c){const l=a.array,u=a.usage,f=l.byteLength,h=i.createBuffer();i.bindBuffer(c,h),i.bufferData(c,l,u),a.onUploadCallback();let d;if(l instanceof Float32Array)d=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=i.SHORT;else if(l instanceof Uint32Array)d=i.UNSIGNED_INT;else if(l instanceof Int32Array)d=i.INT;else if(l instanceof Int8Array)d=i.BYTE;else if(l instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,c,l){const u=c.array,f=c._updateRange,h=c.updateRanges;if(i.bindBuffer(l,a),f.count===-1&&h.length===0&&i.bufferSubData(l,0,u),h.length!==0){for(let d=0,g=h.length;d<g;d++){const _=h[d];i.bufferSubData(l,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}c.clearUpdateRanges()}f.count!==-1&&(i.bufferSubData(l,f.offset*u.BYTES_PER_ELEMENT,u,f.offset,f.count),f.count=-1),c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:r,remove:s,update:o}}class Ar extends sn{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};const s=t/2,o=e/2,a=Math.floor(n),c=Math.floor(r),l=a+1,u=c+1,f=t/a,h=e/c,d=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const T=p*h-o;for(let E=0;E<l;E++){const R=E*f-s;g.push(R,-T,0),_.push(0,0,1),m.push(E/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let T=0;T<a;T++){const E=T+l*p,R=T+l*(p+1),G=T+1+l*(p+1),I=T+1+l*p;d.push(E,R,I),d.push(R,G,I)}this.setIndex(d),this.setAttribute("position",new Ce(g,3)),this.setAttribute("normal",new Ce(_,3)),this.setAttribute("uv",new Ce(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ar(t.width,t.height,t.widthSegments,t.heightSegments)}}var Ym=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Km=`#ifdef USE_ALPHAHASH
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
#endif`,$m=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,jm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Jm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Qm=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,tg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,eg=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,ng=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,ig=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,rg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,sg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,og=`#ifdef USE_IRIDESCENCE
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
#endif`,ag=`#ifdef USE_BUMPMAP
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
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,cg=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,lg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ug=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,hg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,fg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,dg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,pg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,mg=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( batchId );
	vColor.xyz *= batchingColor.xyz;
#endif`,gg=`#define PI 3.141592653589793
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
} // validated`,_g=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
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
#endif`,vg=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,xg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,yg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Sg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Eg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Mg="gl_FragColor = linearToOutputTexel( gl_FragColor );",bg=`
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
}`,wg=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,Tg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ag=`#ifdef USE_ENVMAP
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
#endif`,Rg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Cg=`#ifdef USE_ENVMAP
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
#endif`,Lg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Pg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Dg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ig=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ug=`#ifdef USE_GRADIENTMAP
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
}`,Ng=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Og=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Fg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Bg=`uniform bool receiveShadow;
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
#endif`,kg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
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
#endif`,zg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Hg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Vg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Gg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Wg=`PhysicalMaterial material;
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Xg=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
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
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
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
}`,qg=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
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
#endif`,Yg=`#if defined( RE_IndirectDiffuse )
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
#endif`,Kg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$g=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,jg=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zg=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jg=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Qg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,t_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,e_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,n_=`#if defined( USE_POINTS_UV )
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
#endif`,i_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,r_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,s_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,o_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,a_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,c_=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,l_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,u_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,h_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,f_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,d_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,p_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,m_=`#ifdef USE_NORMALMAP
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
#endif`,g_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,__=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,v_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,x_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,y_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,S_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,E_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,M_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,b_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,w_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,T_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,A_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,R_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,C_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,L_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,P_=`float getShadowMask() {
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
}`,D_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,I_=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,U_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,N_=`#ifdef USE_SKINNING
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
#endif`,O_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,F_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,B_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,k_=`#ifndef saturate
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
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,z_=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,H_=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,V_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,G_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,W_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,X_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const q_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Y_=`uniform sampler2D t2D;
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
}`,K_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$_=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,j_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Z_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,J_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,Q_=`#if DEPTH_PACKING == 3200
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
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
}`,t0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,e0=`#define DISTANCE
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,n0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,i0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,r0=`uniform float scale;
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,s0=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,o0=`#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,a0=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,c0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,l0=`#define LAMBERT
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,u0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,h0=`#define MATCAP
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,f0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,d0=`#define NORMAL
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,p0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,m0=`#define PHONG
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,g0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,_0=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,v0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,x0=`#define TOON
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,y0=`uniform float size;
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
	#include <morphinstance_vertex>
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
}`,S0=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,E0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,M0=`uniform vec3 color;
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
}`,b0=`uniform float rotation;
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
}`,w0=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,Ot={alphahash_fragment:Ym,alphahash_pars_fragment:Km,alphamap_fragment:$m,alphamap_pars_fragment:jm,alphatest_fragment:Zm,alphatest_pars_fragment:Jm,aomap_fragment:Qm,aomap_pars_fragment:tg,batching_pars_vertex:eg,batching_vertex:ng,begin_vertex:ig,beginnormal_vertex:rg,bsdfs:sg,iridescence_fragment:og,bumpmap_pars_fragment:ag,clipping_planes_fragment:cg,clipping_planes_pars_fragment:lg,clipping_planes_pars_vertex:ug,clipping_planes_vertex:hg,color_fragment:fg,color_pars_fragment:dg,color_pars_vertex:pg,color_vertex:mg,common:gg,cube_uv_reflection_fragment:_g,defaultnormal_vertex:vg,displacementmap_pars_vertex:xg,displacementmap_vertex:yg,emissivemap_fragment:Sg,emissivemap_pars_fragment:Eg,colorspace_fragment:Mg,colorspace_pars_fragment:bg,envmap_fragment:wg,envmap_common_pars_fragment:Tg,envmap_pars_fragment:Ag,envmap_pars_vertex:Rg,envmap_physical_pars_fragment:kg,envmap_vertex:Cg,fog_vertex:Lg,fog_pars_vertex:Pg,fog_fragment:Dg,fog_pars_fragment:Ig,gradientmap_pars_fragment:Ug,lightmap_pars_fragment:Ng,lights_lambert_fragment:Og,lights_lambert_pars_fragment:Fg,lights_pars_begin:Bg,lights_toon_fragment:zg,lights_toon_pars_fragment:Hg,lights_phong_fragment:Vg,lights_phong_pars_fragment:Gg,lights_physical_fragment:Wg,lights_physical_pars_fragment:Xg,lights_fragment_begin:qg,lights_fragment_maps:Yg,lights_fragment_end:Kg,logdepthbuf_fragment:$g,logdepthbuf_pars_fragment:jg,logdepthbuf_pars_vertex:Zg,logdepthbuf_vertex:Jg,map_fragment:Qg,map_pars_fragment:t_,map_particle_fragment:e_,map_particle_pars_fragment:n_,metalnessmap_fragment:i_,metalnessmap_pars_fragment:r_,morphinstance_vertex:s_,morphcolor_vertex:o_,morphnormal_vertex:a_,morphtarget_pars_vertex:c_,morphtarget_vertex:l_,normal_fragment_begin:u_,normal_fragment_maps:h_,normal_pars_fragment:f_,normal_pars_vertex:d_,normal_vertex:p_,normalmap_pars_fragment:m_,clearcoat_normal_fragment_begin:g_,clearcoat_normal_fragment_maps:__,clearcoat_pars_fragment:v_,iridescence_pars_fragment:x_,opaque_fragment:y_,packing:S_,premultiplied_alpha_fragment:E_,project_vertex:M_,dithering_fragment:b_,dithering_pars_fragment:w_,roughnessmap_fragment:T_,roughnessmap_pars_fragment:A_,shadowmap_pars_fragment:R_,shadowmap_pars_vertex:C_,shadowmap_vertex:L_,shadowmask_pars_fragment:P_,skinbase_vertex:D_,skinning_pars_vertex:I_,skinning_vertex:U_,skinnormal_vertex:N_,specularmap_fragment:O_,specularmap_pars_fragment:F_,tonemapping_fragment:B_,tonemapping_pars_fragment:k_,transmission_fragment:z_,transmission_pars_fragment:H_,uv_pars_fragment:V_,uv_pars_vertex:G_,uv_vertex:W_,worldpos_vertex:X_,background_vert:q_,background_frag:Y_,backgroundCube_vert:K_,backgroundCube_frag:$_,cube_vert:j_,cube_frag:Z_,depth_vert:J_,depth_frag:Q_,distanceRGBA_vert:t0,distanceRGBA_frag:e0,equirect_vert:n0,equirect_frag:i0,linedashed_vert:r0,linedashed_frag:s0,meshbasic_vert:o0,meshbasic_frag:a0,meshlambert_vert:c0,meshlambert_frag:l0,meshmatcap_vert:u0,meshmatcap_frag:h0,meshnormal_vert:f0,meshnormal_frag:d0,meshphong_vert:p0,meshphong_frag:m0,meshphysical_vert:g0,meshphysical_frag:_0,meshtoon_vert:v0,meshtoon_frag:x0,points_vert:y0,points_frag:S0,shadow_vert:E0,shadow_frag:M0,sprite_vert:b0,sprite_frag:w0},ft={common:{diffuse:{value:new Nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Bt}},envmap:{envMap:{value:null},envMapRotation:{value:new Bt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Bt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Bt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Bt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Bt},normalScale:{value:new kt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Bt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Bt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Bt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Bt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0},uvTransform:{value:new Bt}},sprite:{diffuse:{value:new Nt(16777215)},opacity:{value:1},center:{value:new kt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}}},un={basic:{uniforms:be([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.fog]),vertexShader:Ot.meshbasic_vert,fragmentShader:Ot.meshbasic_frag},lambert:{uniforms:be([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new Nt(0)}}]),vertexShader:Ot.meshlambert_vert,fragmentShader:Ot.meshlambert_frag},phong:{uniforms:be([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new Nt(0)},specular:{value:new Nt(1118481)},shininess:{value:30}}]),vertexShader:Ot.meshphong_vert,fragmentShader:Ot.meshphong_frag},standard:{uniforms:be([ft.common,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.roughnessmap,ft.metalnessmap,ft.fog,ft.lights,{emissive:{value:new Nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ot.meshphysical_vert,fragmentShader:Ot.meshphysical_frag},toon:{uniforms:be([ft.common,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.gradientmap,ft.fog,ft.lights,{emissive:{value:new Nt(0)}}]),vertexShader:Ot.meshtoon_vert,fragmentShader:Ot.meshtoon_frag},matcap:{uniforms:be([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,{matcap:{value:null}}]),vertexShader:Ot.meshmatcap_vert,fragmentShader:Ot.meshmatcap_frag},points:{uniforms:be([ft.points,ft.fog]),vertexShader:Ot.points_vert,fragmentShader:Ot.points_frag},dashed:{uniforms:be([ft.common,ft.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ot.linedashed_vert,fragmentShader:Ot.linedashed_frag},depth:{uniforms:be([ft.common,ft.displacementmap]),vertexShader:Ot.depth_vert,fragmentShader:Ot.depth_frag},normal:{uniforms:be([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,{opacity:{value:1}}]),vertexShader:Ot.meshnormal_vert,fragmentShader:Ot.meshnormal_frag},sprite:{uniforms:be([ft.sprite,ft.fog]),vertexShader:Ot.sprite_vert,fragmentShader:Ot.sprite_frag},background:{uniforms:{uvTransform:{value:new Bt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ot.background_vert,fragmentShader:Ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Bt}},vertexShader:Ot.backgroundCube_vert,fragmentShader:Ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ot.cube_vert,fragmentShader:Ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ot.equirect_vert,fragmentShader:Ot.equirect_frag},distanceRGBA:{uniforms:be([ft.common,ft.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ot.distanceRGBA_vert,fragmentShader:Ot.distanceRGBA_frag},shadow:{uniforms:be([ft.lights,ft.fog,{color:{value:new Nt(0)},opacity:{value:1}}]),vertexShader:Ot.shadow_vert,fragmentShader:Ot.shadow_frag}};un.physical={uniforms:be([un.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Bt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Bt},clearcoatNormalScale:{value:new kt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Bt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Bt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Bt},sheen:{value:0},sheenColor:{value:new Nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Bt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Bt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Bt},transmissionSamplerSize:{value:new kt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Bt},attenuationDistance:{value:0},attenuationColor:{value:new Nt(0)},specularColor:{value:new Nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Bt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Bt},anisotropyVector:{value:new kt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Bt}}]),vertexShader:Ot.meshphysical_vert,fragmentShader:Ot.meshphysical_frag};const Gs={r:0,b:0,g:0},ui=new dn,T0=new ie;function A0(i,t,e,n,r,s,o){const a=new Nt(0);let c=s===!0?0:1,l,u,f=null,h=0,d=null;function g(T){let E=T.isScene===!0?T.background:null;return E&&E.isTexture&&(E=(T.backgroundBlurriness>0?e:t).get(E)),E}function _(T){let E=!1;const R=g(T);R===null?p(a,c):R&&R.isColor&&(p(R,1),E=!0);const G=i.xr.getEnvironmentBlendMode();G==="additive"?n.buffers.color.setClear(0,0,0,1,o):G==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||E)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(T,E){const R=g(E);R&&(R.isCubeTexture||R.mapping===zo)?(u===void 0&&(u=new Fe(new Ui(1,1,1),new ni({name:"BackgroundCubeMaterial",uniforms:Tr(un.backgroundCube.uniforms),vertexShader:un.backgroundCube.vertexShader,fragmentShader:un.backgroundCube.fragmentShader,side:Pe,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(G,I,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),ui.copy(E.backgroundRotation),ui.x*=-1,ui.y*=-1,ui.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(ui.y*=-1,ui.z*=-1),u.material.uniforms.envMap.value=R,u.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(T0.makeRotationFromEuler(ui)),u.material.toneMapped=Zt.getTransfer(R.colorSpace)!==ne,(f!==R||h!==R.version||d!==i.toneMapping)&&(u.material.needsUpdate=!0,f=R,h=R.version,d=i.toneMapping),u.layers.enableAll(),T.unshift(u,u.geometry,u.material,0,0,null)):R&&R.isTexture&&(l===void 0&&(l=new Fe(new Ar(2,2),new ni({name:"BackgroundMaterial",uniforms:Tr(un.background.uniforms),vertexShader:un.background.vertexShader,fragmentShader:un.background.fragmentShader,side:ti,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=R,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=Zt.getTransfer(R.colorSpace)!==ne,R.matrixAutoUpdate===!0&&R.updateMatrix(),l.material.uniforms.uvTransform.value.copy(R.matrix),(f!==R||h!==R.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,f=R,h=R.version,d=i.toneMapping),l.layers.enableAll(),T.unshift(l,l.geometry,l.material,0,0,null))}function p(T,E){T.getRGB(Gs,df(i)),n.buffers.color.setClear(Gs.r,Gs.g,Gs.b,E,o)}return{getClearColor:function(){return a},setClearColor:function(T,E=1){a.set(T),c=E,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(T){c=T,p(a,c)},render:_,addToRenderList:m}}function R0(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=h(null);let s=r,o=!1;function a(x,U,P,b,w){let C=!1;const A=f(b,P,U);s!==A&&(s=A,l(s.object)),C=d(x,b,P,w),C&&g(x,b,P,w),w!==null&&t.update(w,i.ELEMENT_ARRAY_BUFFER),(C||o)&&(o=!1,R(x,U,P,b),w!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(w).buffer))}function c(){return i.createVertexArray()}function l(x){return i.bindVertexArray(x)}function u(x){return i.deleteVertexArray(x)}function f(x,U,P){const b=P.wireframe===!0;let w=n[x.id];w===void 0&&(w={},n[x.id]=w);let C=w[U.id];C===void 0&&(C={},w[U.id]=C);let A=C[b];return A===void 0&&(A=h(c()),C[b]=A),A}function h(x){const U=[],P=[],b=[];for(let w=0;w<e;w++)U[w]=0,P[w]=0,b[w]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:P,attributeDivisors:b,object:x,attributes:{},index:null}}function d(x,U,P,b){const w=s.attributes,C=U.attributes;let A=0;const F=P.getAttributes();for(const O in F)if(F[O].location>=0){const Z=w[O];let et=C[O];if(et===void 0&&(O==="instanceMatrix"&&x.instanceMatrix&&(et=x.instanceMatrix),O==="instanceColor"&&x.instanceColor&&(et=x.instanceColor)),Z===void 0||Z.attribute!==et||et&&Z.data!==et.data)return!0;A++}return s.attributesNum!==A||s.index!==b}function g(x,U,P,b){const w={},C=U.attributes;let A=0;const F=P.getAttributes();for(const O in F)if(F[O].location>=0){let Z=C[O];Z===void 0&&(O==="instanceMatrix"&&x.instanceMatrix&&(Z=x.instanceMatrix),O==="instanceColor"&&x.instanceColor&&(Z=x.instanceColor));const et={};et.attribute=Z,Z&&Z.data&&(et.data=Z.data),w[O]=et,A++}s.attributes=w,s.attributesNum=A,s.index=b}function _(){const x=s.newAttributes;for(let U=0,P=x.length;U<P;U++)x[U]=0}function m(x){p(x,0)}function p(x,U){const P=s.newAttributes,b=s.enabledAttributes,w=s.attributeDivisors;P[x]=1,b[x]===0&&(i.enableVertexAttribArray(x),b[x]=1),w[x]!==U&&(i.vertexAttribDivisor(x,U),w[x]=U)}function T(){const x=s.newAttributes,U=s.enabledAttributes;for(let P=0,b=U.length;P<b;P++)U[P]!==x[P]&&(i.disableVertexAttribArray(P),U[P]=0)}function E(x,U,P,b,w,C,A){A===!0?i.vertexAttribIPointer(x,U,P,w,C):i.vertexAttribPointer(x,U,P,b,w,C)}function R(x,U,P,b){_();const w=b.attributes,C=P.getAttributes(),A=U.defaultAttributeValues;for(const F in C){const O=C[F];if(O.location>=0){let J=w[F];if(J===void 0&&(F==="instanceMatrix"&&x.instanceMatrix&&(J=x.instanceMatrix),F==="instanceColor"&&x.instanceColor&&(J=x.instanceColor)),J!==void 0){const Z=J.normalized,et=J.itemSize,st=t.get(J);if(st===void 0)continue;const St=st.buffer,q=st.type,j=st.bytesPerElement,it=q===i.INT||q===i.UNSIGNED_INT||J.gpuType===jh;if(J.isInterleavedBufferAttribute){const nt=J.data,vt=nt.stride,ht=J.offset;if(nt.isInstancedInterleavedBuffer){for(let xt=0;xt<O.locationSize;xt++)p(O.location+xt,nt.meshPerAttribute);x.isInstancedMesh!==!0&&b._maxInstanceCount===void 0&&(b._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let xt=0;xt<O.locationSize;xt++)m(O.location+xt);i.bindBuffer(i.ARRAY_BUFFER,St);for(let xt=0;xt<O.locationSize;xt++)E(O.location+xt,et/O.locationSize,q,Z,vt*j,(ht+et/O.locationSize*xt)*j,it)}else{if(J.isInstancedBufferAttribute){for(let nt=0;nt<O.locationSize;nt++)p(O.location+nt,J.meshPerAttribute);x.isInstancedMesh!==!0&&b._maxInstanceCount===void 0&&(b._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let nt=0;nt<O.locationSize;nt++)m(O.location+nt);i.bindBuffer(i.ARRAY_BUFFER,St);for(let nt=0;nt<O.locationSize;nt++)E(O.location+nt,et/O.locationSize,q,Z,et*j,et/O.locationSize*nt*j,it)}}else if(A!==void 0){const Z=A[F];if(Z!==void 0)switch(Z.length){case 2:i.vertexAttrib2fv(O.location,Z);break;case 3:i.vertexAttrib3fv(O.location,Z);break;case 4:i.vertexAttrib4fv(O.location,Z);break;default:i.vertexAttrib1fv(O.location,Z)}}}}T()}function G(){V();for(const x in n){const U=n[x];for(const P in U){const b=U[P];for(const w in b)u(b[w].object),delete b[w];delete U[P]}delete n[x]}}function I(x){if(n[x.id]===void 0)return;const U=n[x.id];for(const P in U){const b=U[P];for(const w in b)u(b[w].object),delete b[w];delete U[P]}delete n[x.id]}function D(x){for(const U in n){const P=n[U];if(P[x.id]===void 0)continue;const b=P[x.id];for(const w in b)u(b[w].object),delete b[w];delete P[x.id]}}function V(){y(),o=!0,s!==r&&(s=r,l(s.object))}function y(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:V,resetDefaultState:y,dispose:G,releaseStatesOfGeometry:I,releaseStatesOfProgram:D,initAttributes:_,enableAttribute:m,disableUnusedAttributes:T}}function C0(i,t,e){let n;function r(l){n=l}function s(l,u){i.drawArrays(n,l,u),e.update(u,n,1)}function o(l,u,f){f!==0&&(i.drawArraysInstanced(n,l,u,f),e.update(u,n,f))}function a(l,u,f){if(f===0)return;const h=t.get("WEBGL_multi_draw");if(h===null)for(let d=0;d<f;d++)this.render(l[d],u[d]);else{h.multiDrawArraysWEBGL(n,l,0,u,0,f);let d=0;for(let g=0;g<f;g++)d+=u[g];e.update(d,n,1)}}function c(l,u,f,h){if(f===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<l.length;g++)o(l[g],u[g],h[g]);else{d.multiDrawArraysInstancedWEBGL(n,l,0,u,0,h,0,f);let g=0;for(let _=0;_<f;_++)g+=u[_];for(let _=0;_<h.length;_++)e.update(g,n,h[_])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function L0(i,t,e,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const I=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(I){return!(I!==fn&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(I){const D=I===Ho&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(I!==ei&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==Kn&&!D)}function c(I){if(I==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const f=e.logarithmicDepthBuffer===!0,h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),_=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),p=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),E=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=d>0,G=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:f,maxTextures:h,maxVertexTextures:d,maxTextureSize:g,maxCubemapSize:_,maxAttributes:m,maxVertexUniforms:p,maxVaryings:T,maxFragmentUniforms:E,vertexTextures:R,maxSamples:G}}function P0(i){const t=this;let e=null,n=0,r=!1,s=!1;const o=new di,a=new Bt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||n!==0||r;return r=h,n=f.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){e=u(f,h,0)},this.setState=function(f,h,d){const g=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,p=i.get(f);if(!r||g===null||g.length===0||s&&!m)s?u(null):l();else{const T=s?0:n,E=T*4;let R=p.clippingState||null;c.value=R,R=u(g,h,E,d);for(let G=0;G!==E;++G)R[G]=e[G];p.clippingState=R,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=T}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(f,h,d,g){const _=f!==null?f.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const p=d+_*4,T=h.matrixWorldInverse;a.getNormalMatrix(T),(m===null||m.length<p)&&(m=new Float32Array(p));for(let E=0,R=d;E!==_;++E,R+=4)o.copy(f[E]).applyMatrix4(T,a),o.normal.toArray(m,R),m[R+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function D0(i){let t=new WeakMap;function e(o,a){return a===sc?o.mapping=Sr:a===oc&&(o.mapping=Er),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===sc||a===oc)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Gm(c.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",r),e(l.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class _f extends pf{constructor(t=-1,e=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-t,o=n+t,a=r+e,c=r-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const lr=4,gu=[.125,.215,.35,.446,.526,.582],_i=20,Aa=new _f,_u=new Nt;let Ra=null,Ca=0,La=0,Pa=!1;const pi=(1+Math.sqrt(5))/2,tr=1/pi,vu=[new X(-pi,tr,0),new X(pi,tr,0),new X(-tr,0,pi),new X(tr,0,pi),new X(0,pi,-tr),new X(0,pi,tr),new X(-1,1,-1),new X(1,1,-1),new X(-1,1,1),new X(1,1,1)];class xu{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,r=100){Ra=this._renderer.getRenderTarget(),Ca=this._renderer.getActiveCubeFace(),La=this._renderer.getActiveMipmapLevel(),Pa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Eu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Su(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ra,Ca,La),this._renderer.xr.enabled=Pa,t.scissorTest=!1,Ws(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Sr||t.mapping===Er?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ra=this._renderer.getRenderTarget(),Ca=this._renderer.getActiveCubeFace(),La=this._renderer.getActiveMipmapLevel(),Pa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:tn,minFilter:tn,generateMipmaps:!1,type:Ho,format:fn,colorSpace:ii,depthBuffer:!1},r=yu(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=yu(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=I0(s)),this._blurMaterial=U0(s,t,e)}return r}_compileMaterial(t){const e=new Fe(this._lodPlanes[0],t);this._renderer.compile(e,Aa)}_sceneToCubeUV(t,e,n,r){const a=new Xe(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(_u),u.toneMapping=Zn,u.autoClear=!1;const d=new wo({name:"PMREM.Background",side:Pe,depthWrite:!1,depthTest:!1}),g=new Fe(new Ui,d);let _=!1;const m=t.background;m?m.isColor&&(d.color.copy(m),t.background=null,_=!0):(d.color.copy(_u),_=!0);for(let p=0;p<6;p++){const T=p%3;T===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):T===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));const E=this._cubeSize;Ws(r,T*E,p>2?E:0,E,E),u.setRenderTarget(r),_&&u.render(g,a),u.render(t,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=f,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,r=t.mapping===Sr||t.mapping===Er;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Eu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Su());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Fe(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const c=this._cubeSize;Ws(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,Aa)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=vu[(r-s-1)%vu.length];this._blur(t,s-1,s,o,a)}e.autoClear=n}_blur(t,e,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,r,"latitudinal",s),this._halfBlur(o,t,n,n,r,"longitudinal",s)}_halfBlur(t,e,n,r,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Fe(this._lodPlanes[r],l),h=l.uniforms,d=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*_i-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):_i;m>_i&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${_i}`);const p=[];let T=0;for(let D=0;D<_i;++D){const V=D/_,y=Math.exp(-V*V/2);p.push(y),D===0?T+=y:D<m&&(T+=2*y)}for(let D=0;D<p.length;D++)p[D]=p[D]/T;h.envMap.value=t.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:E}=this;h.dTheta.value=g,h.mipInt.value=E-n;const R=this._sizeLods[r],G=3*R*(r>E-lr?r-E+lr:0),I=4*(this._cubeSize-R);Ws(e,G,I,3*R,2*R),c.setRenderTarget(e),c.render(f,Aa)}}function I0(i){const t=[],e=[],n=[];let r=i;const s=i-lr+1+gu.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let c=1/a;o>i-lr?c=gu[o-i+lr-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),u=-l,f=1+l,h=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,g=6,_=3,m=2,p=1,T=new Float32Array(_*g*d),E=new Float32Array(m*g*d),R=new Float32Array(p*g*d);for(let I=0;I<d;I++){const D=I%3*2/3-1,V=I>2?0:-1,y=[D,V,0,D+2/3,V,0,D+2/3,V+1,0,D,V,0,D+2/3,V+1,0,D,V+1,0];T.set(y,_*g*I),E.set(h,m*g*I);const x=[I,I,I,I,I,I];R.set(x,p*g*I)}const G=new sn;G.setAttribute("position",new rn(T,_)),G.setAttribute("uv",new rn(E,m)),G.setAttribute("faceIndex",new rn(R,p)),t.push(G),r>lr&&r--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function yu(i,t,e){const n=new Ci(i,t,e);return n.texture.mapping=zo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ws(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function U0(i,t,e){const n=new Float32Array(_i),r=new X(0,1,0);return new ni({name:"SphericalGaussianBlur",defines:{n:_i,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Hc(),fragmentShader:`

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
		`,blending:jn,depthTest:!1,depthWrite:!1})}function Su(){return new ni({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Hc(),fragmentShader:`

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
		`,blending:jn,depthTest:!1,depthWrite:!1})}function Eu(){return new ni({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Hc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:jn,depthTest:!1,depthWrite:!1})}function Hc(){return`

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
	`}function N0(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===sc||c===oc,u=c===Sr||c===Er;if(l||u){let f=t.get(a);const h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return e===null&&(e=new xu(i)),f=l?e.fromEquirectangular(a,f):e.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),f.texture;if(f!==void 0)return f.texture;{const d=a.image;return l&&d&&d.height>0||u&&d&&r(d)?(e===null&&(e=new xu(i)),f=l?e.fromEquirectangular(a):e.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function O0(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const r=e(n);return r===null&&kc("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function F0(i,t,e,n){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&t.remove(h.index);for(const g in h.attributes)t.remove(h.attributes[g]);for(const g in h.morphAttributes){const _=h.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)t.remove(_[m])}h.removeEventListener("dispose",o),delete r[h.id];const d=s.get(h);d&&(t.remove(d),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,e.memory.geometries++),h}function c(f){const h=f.attributes;for(const g in h)t.update(h[g],i.ARRAY_BUFFER);const d=f.morphAttributes;for(const g in d){const _=d[g];for(let m=0,p=_.length;m<p;m++)t.update(_[m],i.ARRAY_BUFFER)}}function l(f){const h=[],d=f.index,g=f.attributes.position;let _=0;if(d!==null){const T=d.array;_=d.version;for(let E=0,R=T.length;E<R;E+=3){const G=T[E+0],I=T[E+1],D=T[E+2];h.push(G,I,I,D,D,G)}}else if(g!==void 0){const T=g.array;_=g.version;for(let E=0,R=T.length/3-1;E<R;E+=3){const G=E+0,I=E+1,D=E+2;h.push(G,I,I,D,D,G)}}else return;const m=new(sf(h)?ff:hf)(h,1);m.version=_;const p=s.get(f);p&&t.remove(p),s.set(f,m)}function u(f){const h=s.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&l(f)}else l(f);return s.get(f)}return{get:a,update:c,getWireframeAttribute:u}}function B0(i,t,e){let n;function r(h){n=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function c(h,d){i.drawElements(n,d,s,h*o),e.update(d,n,1)}function l(h,d,g){g!==0&&(i.drawElementsInstanced(n,d,s,h*o,g),e.update(d,n,g))}function u(h,d,g){if(g===0)return;const _=t.get("WEBGL_multi_draw");if(_===null)for(let m=0;m<g;m++)this.render(h[m]/o,d[m]);else{_.multiDrawElementsWEBGL(n,d,0,s,h,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];e.update(m,n,1)}}function f(h,d,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<h.length;p++)l(h[p]/o,d[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,s,h,0,_,0,g);let p=0;for(let T=0;T<g;T++)p+=d[T];for(let T=0;T<_.length;T++)e.update(p,n,_[T])}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function k0(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(s/3);break;case i.LINES:e.lines+=a*(s/2);break;case i.LINE_STRIP:e.lines+=a*(s-1);break;case i.LINE_LOOP:e.lines+=a*s;break;case i.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function z0(i,t,e){const n=new WeakMap,r=new _e;function s(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let h=n.get(a);if(h===void 0||h.count!==f){let x=function(){V.dispose(),n.delete(a),a.removeEventListener("dispose",x)};var d=x;h!==void 0&&h.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],T=a.morphAttributes.normal||[],E=a.morphAttributes.color||[];let R=0;g===!0&&(R=1),_===!0&&(R=2),m===!0&&(R=3);let G=a.attributes.position.count*R,I=1;G>t.maxTextureSize&&(I=Math.ceil(G/t.maxTextureSize),G=t.maxTextureSize);const D=new Float32Array(G*I*4*f),V=new af(D,G,I,f);V.type=Kn,V.needsUpdate=!0;const y=R*4;for(let U=0;U<f;U++){const P=p[U],b=T[U],w=E[U],C=G*I*4*U;for(let A=0;A<P.count;A++){const F=A*y;g===!0&&(r.fromBufferAttribute(P,A),D[C+F+0]=r.x,D[C+F+1]=r.y,D[C+F+2]=r.z,D[C+F+3]=0),_===!0&&(r.fromBufferAttribute(b,A),D[C+F+4]=r.x,D[C+F+5]=r.y,D[C+F+6]=r.z,D[C+F+7]=0),m===!0&&(r.fromBufferAttribute(w,A),D[C+F+8]=r.x,D[C+F+9]=r.y,D[C+F+10]=r.z,D[C+F+11]=w.itemSize===4?r.w:1)}}h={count:f,texture:V,size:new kt(G,I)},n.set(a,h),a.addEventListener("dispose",x)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const _=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",_),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",h.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:s}}function H0(i,t,e,n){let r=new WeakMap;function s(c){const l=n.render.frame,u=c.geometry,f=t.get(c,u);if(r.get(f)!==l&&(t.update(f),r.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const h=c.skeleton;r.get(h)!==l&&(h.update(),r.set(h,l))}return f}function o(){r=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:s,dispose:o}}class vf extends Te{constructor(t,e,n,r,s,o,a,c,l,u=dr){if(u!==dr&&u!==wr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===dr&&(n=Mr),n===void 0&&u===wr&&(n=br),super(null,r,s,o,a,c,u,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Re,this.minFilter=c!==void 0?c:Re,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const xf=new Te,yf=new vf(1,1);yf.compareFunction=rf;const Sf=new af,Ef=new Am,Mf=new mf,Mu=[],bu=[],wu=new Float32Array(16),Tu=new Float32Array(9),Au=new Float32Array(4);function Ir(i,t,e){const n=i[0];if(n<=0||n>0)return i;const r=t*e;let s=Mu[r];if(s===void 0&&(s=new Float32Array(r),Mu[r]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(s,a)}return s}function he(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function fe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Wo(i,t){let e=bu[t];e===void 0&&(e=new Int32Array(t),bu[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function V0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function G0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(he(e,t))return;i.uniform2fv(this.addr,t),fe(e,t)}}function W0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(he(e,t))return;i.uniform3fv(this.addr,t),fe(e,t)}}function X0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(he(e,t))return;i.uniform4fv(this.addr,t),fe(e,t)}}function q0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(he(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),fe(e,t)}else{if(he(e,n))return;Au.set(n),i.uniformMatrix2fv(this.addr,!1,Au),fe(e,n)}}function Y0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(he(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),fe(e,t)}else{if(he(e,n))return;Tu.set(n),i.uniformMatrix3fv(this.addr,!1,Tu),fe(e,n)}}function K0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(he(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),fe(e,t)}else{if(he(e,n))return;wu.set(n),i.uniformMatrix4fv(this.addr,!1,wu),fe(e,n)}}function $0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function j0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(he(e,t))return;i.uniform2iv(this.addr,t),fe(e,t)}}function Z0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(he(e,t))return;i.uniform3iv(this.addr,t),fe(e,t)}}function J0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(he(e,t))return;i.uniform4iv(this.addr,t),fe(e,t)}}function Q0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function tv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(he(e,t))return;i.uniform2uiv(this.addr,t),fe(e,t)}}function ev(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(he(e,t))return;i.uniform3uiv(this.addr,t),fe(e,t)}}function nv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(he(e,t))return;i.uniform4uiv(this.addr,t),fe(e,t)}}function iv(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);const s=this.type===i.SAMPLER_2D_SHADOW?yf:xf;e.setTexture2D(t||s,r)}function rv(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||Ef,r)}function sv(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||Mf,r)}function ov(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||Sf,r)}function av(i){switch(i){case 5126:return V0;case 35664:return G0;case 35665:return W0;case 35666:return X0;case 35674:return q0;case 35675:return Y0;case 35676:return K0;case 5124:case 35670:return $0;case 35667:case 35671:return j0;case 35668:case 35672:return Z0;case 35669:case 35673:return J0;case 5125:return Q0;case 36294:return tv;case 36295:return ev;case 36296:return nv;case 35678:case 36198:case 36298:case 36306:case 35682:return iv;case 35679:case 36299:case 36307:return rv;case 35680:case 36300:case 36308:case 36293:return sv;case 36289:case 36303:case 36311:case 36292:return ov}}function cv(i,t){i.uniform1fv(this.addr,t)}function lv(i,t){const e=Ir(t,this.size,2);i.uniform2fv(this.addr,e)}function uv(i,t){const e=Ir(t,this.size,3);i.uniform3fv(this.addr,e)}function hv(i,t){const e=Ir(t,this.size,4);i.uniform4fv(this.addr,e)}function fv(i,t){const e=Ir(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function dv(i,t){const e=Ir(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function pv(i,t){const e=Ir(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function mv(i,t){i.uniform1iv(this.addr,t)}function gv(i,t){i.uniform2iv(this.addr,t)}function _v(i,t){i.uniform3iv(this.addr,t)}function vv(i,t){i.uniform4iv(this.addr,t)}function xv(i,t){i.uniform1uiv(this.addr,t)}function yv(i,t){i.uniform2uiv(this.addr,t)}function Sv(i,t){i.uniform3uiv(this.addr,t)}function Ev(i,t){i.uniform4uiv(this.addr,t)}function Mv(i,t,e){const n=this.cache,r=t.length,s=Wo(e,r);he(n,s)||(i.uniform1iv(this.addr,s),fe(n,s));for(let o=0;o!==r;++o)e.setTexture2D(t[o]||xf,s[o])}function bv(i,t,e){const n=this.cache,r=t.length,s=Wo(e,r);he(n,s)||(i.uniform1iv(this.addr,s),fe(n,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||Ef,s[o])}function wv(i,t,e){const n=this.cache,r=t.length,s=Wo(e,r);he(n,s)||(i.uniform1iv(this.addr,s),fe(n,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||Mf,s[o])}function Tv(i,t,e){const n=this.cache,r=t.length,s=Wo(e,r);he(n,s)||(i.uniform1iv(this.addr,s),fe(n,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||Sf,s[o])}function Av(i){switch(i){case 5126:return cv;case 35664:return lv;case 35665:return uv;case 35666:return hv;case 35674:return fv;case 35675:return dv;case 35676:return pv;case 5124:case 35670:return mv;case 35667:case 35671:return gv;case 35668:case 35672:return _v;case 35669:case 35673:return vv;case 5125:return xv;case 36294:return yv;case 36295:return Sv;case 36296:return Ev;case 35678:case 36198:case 36298:case 36306:case 35682:return Mv;case 35679:case 36299:case 36307:return bv;case 35680:case 36300:case 36308:case 36293:return wv;case 36289:case 36303:case 36311:case 36292:return Tv}}class Rv{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=av(e.type)}}class Cv{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Av(e.type)}}class Lv{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(t,e[a.id],n)}}}const Da=/(\w+)(\])?(\[|\.)?/g;function Ru(i,t){i.seq.push(t),i.map[t.id]=t}function Pv(i,t,e){const n=i.name,r=n.length;for(Da.lastIndex=0;;){const s=Da.exec(n),o=Da.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){Ru(e,l===void 0?new Rv(a,i,t):new Cv(a,i,t));break}else{let f=e.map[a];f===void 0&&(f=new Lv(a),Ru(e,f)),e=f}}}class lo{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=t.getActiveUniform(e,r),o=t.getUniformLocation(e,s.name);Pv(s,o,this)}}setValue(t,e,n,r){const s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){const r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,o=e.length;s!==o;++s){const a=e[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,r)}}static seqWithValue(t,e){const n=[];for(let r=0,s=t.length;r!==s;++r){const o=t[r];o.id in e&&n.push(o)}return n}}function Cu(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Dv=37297;let Iv=0;function Uv(i,t){const e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function Nv(i){const t=Zt.getPrimaries(Zt.workingColorSpace),e=Zt.getPrimaries(i);let n;switch(t===e?n="":t===Eo&&e===So?n="LinearDisplayP3ToLinearSRGB":t===So&&e===Eo&&(n="LinearSRGBToLinearDisplayP3"),i){case ii:case Vo:return[n,"LinearTransferOETF"];case We:case Fc:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Lu(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=i.getShaderInfoLog(t).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+Uv(i.getShaderSource(t),o)}else return r}function Ov(i,t){const e=Nv(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Fv(i,t){let e;switch(t){case Lp:e="Linear";break;case Pp:e="Reinhard";break;case Dp:e="OptimizedCineon";break;case Ip:e="ACESFilmic";break;case Np:e="AgX";break;case Op:e="Neutral";break;case Up:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Bv(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Jr).join(`
`)}function kv(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function zv(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(t,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Jr(i){return i!==""}function Pu(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Du(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Hv=/^[ \t]*#include +<([\w\d./]+)>/gm;function hc(i){return i.replace(Hv,Gv)}const Vv=new Map;function Gv(i,t){let e=Ot[t];if(e===void 0){const n=Vv.get(t);if(n!==void 0)e=Ot[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return hc(e)}const Wv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Iu(i){return i.replace(Wv,Xv)}function Xv(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Uu(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function qv(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Kh?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===np?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===wn&&(t="SHADOWMAP_TYPE_VSM"),t}function Yv(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Sr:case Er:t="ENVMAP_TYPE_CUBE";break;case zo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Kv(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Er:t="ENVMAP_MODE_REFRACTION";break}return t}function $v(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Oc:t="ENVMAP_BLENDING_MULTIPLY";break;case Rp:t="ENVMAP_BLENDING_MIX";break;case Cp:t="ENVMAP_BLENDING_ADD";break}return t}function jv(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Zv(i,t,e,n){const r=i.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=qv(e),l=Yv(e),u=Kv(e),f=$v(e),h=jv(e),d=Bv(e),g=kv(s),_=r.createProgram();let m,p,T=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Jr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Jr).join(`
`),p.length>0&&(p+=`
`)):(m=[Uu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Jr).join(`
`),p=[Uu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Zn?"#define TONE_MAPPING":"",e.toneMapping!==Zn?Ot.tonemapping_pars_fragment:"",e.toneMapping!==Zn?Fv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ot.colorspace_pars_fragment,Ov("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Jr).join(`
`)),o=hc(o),o=Pu(o,e),o=Du(o,e),a=hc(a),a=Pu(a,e),a=Du(a,e),o=Iu(o),a=Iu(a),e.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===$l?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===$l?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const E=T+m+o,R=T+p+a,G=Cu(r,r.VERTEX_SHADER,E),I=Cu(r,r.FRAGMENT_SHADER,R);r.attachShader(_,G),r.attachShader(_,I),e.index0AttributeName!==void 0?r.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function D(U){if(i.debug.checkShaderErrors){const P=r.getProgramInfoLog(_).trim(),b=r.getShaderInfoLog(G).trim(),w=r.getShaderInfoLog(I).trim();let C=!0,A=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(C=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,_,G,I);else{const F=Lu(r,G,"vertex"),O=Lu(r,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+P+`
`+F+`
`+O)}else P!==""?console.warn("THREE.WebGLProgram: Program Info Log:",P):(b===""||w==="")&&(A=!1);A&&(U.diagnostics={runnable:C,programLog:P,vertexShader:{log:b,prefix:m},fragmentShader:{log:w,prefix:p}})}r.deleteShader(G),r.deleteShader(I),V=new lo(r,_),y=zv(r,_)}let V;this.getUniforms=function(){return V===void 0&&D(this),V};let y;this.getAttributes=function(){return y===void 0&&D(this),y};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=r.getProgramParameter(_,Dv)),x},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Iv++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=G,this.fragmentShader=I,this}let Jv=0;class Qv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new tx(t),e.set(t,n)),n}}class tx{constructor(t){this.id=Jv++,this.code=t,this.usedTimes=0}}function ex(i,t,e,n,r,s,o){const a=new lf,c=new Qv,l=new Set,u=[],f=r.logarithmicDepthBuffer,h=r.vertexTextures;let d=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return l.add(y),y===0?"uv":`uv${y}`}function m(y,x,U,P,b){const w=P.fog,C=b.geometry,A=y.isMeshStandardMaterial?P.environment:null,F=(y.isMeshStandardMaterial?e:t).get(y.envMap||A),O=F&&F.mapping===zo?F.image.height:null,J=g[y.type];y.precision!==null&&(d=r.getMaxPrecision(y.precision),d!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",d,"instead."));const Z=C.morphAttributes.position||C.morphAttributes.normal||C.morphAttributes.color,et=Z!==void 0?Z.length:0;let st=0;C.morphAttributes.position!==void 0&&(st=1),C.morphAttributes.normal!==void 0&&(st=2),C.morphAttributes.color!==void 0&&(st=3);let St,q,j,it;if(J){const Qt=un[J];St=Qt.vertexShader,q=Qt.fragmentShader}else St=y.vertexShader,q=y.fragmentShader,c.update(y),j=c.getVertexShaderID(y),it=c.getFragmentShaderID(y);const nt=i.getRenderTarget(),vt=b.isInstancedMesh===!0,ht=b.isBatchedMesh===!0,xt=!!y.map,N=!!y.matcap,Rt=!!F,Ut=!!y.aoMap,Jt=!!y.lightMap,Tt=!!y.bumpMap,qt=!!y.normalMap,L=!!y.displacementMap,z=!!y.emissiveMap,Y=!!y.metalnessMap,M=!!y.roughnessMap,v=y.anisotropy>0,H=y.clearcoat>0,Q=y.dispersion>0,ot=y.iridescence>0,at=y.sheen>0,wt=y.transmission>0,dt=v&&!!y.anisotropyMap,pt=H&&!!y.clearcoatMap,zt=H&&!!y.clearcoatNormalMap,ct=H&&!!y.clearcoatRoughnessMap,Mt=ot&&!!y.iridescenceMap,Gt=ot&&!!y.iridescenceThicknessMap,Pt=at&&!!y.sheenColorMap,mt=at&&!!y.sheenRoughnessMap,Ht=!!y.specularMap,Wt=!!y.specularColorMap,ae=!!y.specularIntensityMap,B=wt&&!!y.transmissionMap,gt=wt&&!!y.thicknessMap,tt=!!y.gradientMap,rt=!!y.alphaMap,ut=y.alphaTest>0,Dt=!!y.alphaHash,Yt=!!y.extensions;let ce=Zn;y.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(ce=i.toneMapping);const de={shaderID:J,shaderType:y.type,shaderName:y.name,vertexShader:St,fragmentShader:q,defines:y.defines,customVertexShaderID:j,customFragmentShaderID:it,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:d,batching:ht,batchingColor:ht&&b._colorsTexture!==null,instancing:vt,instancingColor:vt&&b.instanceColor!==null,instancingMorph:vt&&b.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:nt===null?i.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:ii,alphaToCoverage:!!y.alphaToCoverage,map:xt,matcap:N,envMap:Rt,envMapMode:Rt&&F.mapping,envMapCubeUVHeight:O,aoMap:Ut,lightMap:Jt,bumpMap:Tt,normalMap:qt,displacementMap:h&&L,emissiveMap:z,normalMapObjectSpace:qt&&y.normalMapType===jp,normalMapTangentSpace:qt&&y.normalMapType===nf,metalnessMap:Y,roughnessMap:M,anisotropy:v,anisotropyMap:dt,clearcoat:H,clearcoatMap:pt,clearcoatNormalMap:zt,clearcoatRoughnessMap:ct,dispersion:Q,iridescence:ot,iridescenceMap:Mt,iridescenceThicknessMap:Gt,sheen:at,sheenColorMap:Pt,sheenRoughnessMap:mt,specularMap:Ht,specularColorMap:Wt,specularIntensityMap:ae,transmission:wt,transmissionMap:B,thicknessMap:gt,gradientMap:tt,opaque:y.transparent===!1&&y.blending===fr&&y.alphaToCoverage===!1,alphaMap:rt,alphaTest:ut,alphaHash:Dt,combine:y.combine,mapUv:xt&&_(y.map.channel),aoMapUv:Ut&&_(y.aoMap.channel),lightMapUv:Jt&&_(y.lightMap.channel),bumpMapUv:Tt&&_(y.bumpMap.channel),normalMapUv:qt&&_(y.normalMap.channel),displacementMapUv:L&&_(y.displacementMap.channel),emissiveMapUv:z&&_(y.emissiveMap.channel),metalnessMapUv:Y&&_(y.metalnessMap.channel),roughnessMapUv:M&&_(y.roughnessMap.channel),anisotropyMapUv:dt&&_(y.anisotropyMap.channel),clearcoatMapUv:pt&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:zt&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ct&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Mt&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:Gt&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:Pt&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:mt&&_(y.sheenRoughnessMap.channel),specularMapUv:Ht&&_(y.specularMap.channel),specularColorMapUv:Wt&&_(y.specularColorMap.channel),specularIntensityMapUv:ae&&_(y.specularIntensityMap.channel),transmissionMapUv:B&&_(y.transmissionMap.channel),thicknessMapUv:gt&&_(y.thicknessMap.channel),alphaMapUv:rt&&_(y.alphaMap.channel),vertexTangents:!!C.attributes.tangent&&(qt||v),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!C.attributes.color&&C.attributes.color.itemSize===4,pointsUvs:b.isPoints===!0&&!!C.attributes.uv&&(xt||rt),fog:!!w,useFog:y.fog===!0,fogExp2:!!w&&w.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:b.isSkinnedMesh===!0,morphTargets:C.morphAttributes.position!==void 0,morphNormals:C.morphAttributes.normal!==void 0,morphColors:C.morphAttributes.color!==void 0,morphTargetsCount:et,morphTextureStride:st,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&U.length>0,shadowMapType:i.shadowMap.type,toneMapping:ce,decodeVideoTexture:xt&&y.map.isVideoTexture===!0&&Zt.getTransfer(y.map.colorSpace)===ne,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Qe,flipSided:y.side===Pe,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Yt&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Yt&&y.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return de.vertexUv1s=l.has(1),de.vertexUv2s=l.has(2),de.vertexUv3s=l.has(3),l.clear(),de}function p(y){const x=[];if(y.shaderID?x.push(y.shaderID):(x.push(y.customVertexShaderID),x.push(y.customFragmentShaderID)),y.defines!==void 0)for(const U in y.defines)x.push(U),x.push(y.defines[U]);return y.isRawShaderMaterial===!1&&(T(x,y),E(x,y),x.push(i.outputColorSpace)),x.push(y.customProgramCacheKey),x.join()}function T(y,x){y.push(x.precision),y.push(x.outputColorSpace),y.push(x.envMapMode),y.push(x.envMapCubeUVHeight),y.push(x.mapUv),y.push(x.alphaMapUv),y.push(x.lightMapUv),y.push(x.aoMapUv),y.push(x.bumpMapUv),y.push(x.normalMapUv),y.push(x.displacementMapUv),y.push(x.emissiveMapUv),y.push(x.metalnessMapUv),y.push(x.roughnessMapUv),y.push(x.anisotropyMapUv),y.push(x.clearcoatMapUv),y.push(x.clearcoatNormalMapUv),y.push(x.clearcoatRoughnessMapUv),y.push(x.iridescenceMapUv),y.push(x.iridescenceThicknessMapUv),y.push(x.sheenColorMapUv),y.push(x.sheenRoughnessMapUv),y.push(x.specularMapUv),y.push(x.specularColorMapUv),y.push(x.specularIntensityMapUv),y.push(x.transmissionMapUv),y.push(x.thicknessMapUv),y.push(x.combine),y.push(x.fogExp2),y.push(x.sizeAttenuation),y.push(x.morphTargetsCount),y.push(x.morphAttributeCount),y.push(x.numDirLights),y.push(x.numPointLights),y.push(x.numSpotLights),y.push(x.numSpotLightMaps),y.push(x.numHemiLights),y.push(x.numRectAreaLights),y.push(x.numDirLightShadows),y.push(x.numPointLightShadows),y.push(x.numSpotLightShadows),y.push(x.numSpotLightShadowsWithMaps),y.push(x.numLightProbes),y.push(x.shadowMapType),y.push(x.toneMapping),y.push(x.numClippingPlanes),y.push(x.numClipIntersection),y.push(x.depthPacking)}function E(y,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),x.dispersion&&a.enable(20),x.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.skinning&&a.enable(4),x.morphTargets&&a.enable(5),x.morphNormals&&a.enable(6),x.morphColors&&a.enable(7),x.premultipliedAlpha&&a.enable(8),x.shadowMapEnabled&&a.enable(9),x.doubleSided&&a.enable(10),x.flipSided&&a.enable(11),x.useDepthPacking&&a.enable(12),x.dithering&&a.enable(13),x.transmission&&a.enable(14),x.sheen&&a.enable(15),x.opaque&&a.enable(16),x.pointsUvs&&a.enable(17),x.decodeVideoTexture&&a.enable(18),x.alphaToCoverage&&a.enable(19),y.push(a.mask)}function R(y){const x=g[y.type];let U;if(x){const P=un[x];U=km.clone(P.uniforms)}else U=y.uniforms;return U}function G(y,x){let U;for(let P=0,b=u.length;P<b;P++){const w=u[P];if(w.cacheKey===x){U=w,++U.usedTimes;break}}return U===void 0&&(U=new Zv(i,x,y,s),u.push(U)),U}function I(y){if(--y.usedTimes===0){const x=u.indexOf(y);u[x]=u[u.length-1],u.pop(),y.destroy()}}function D(y){c.remove(y)}function V(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:R,acquireProgram:G,releaseProgram:I,releaseShaderCache:D,programs:u,dispose:V}}function nx(){let i=new WeakMap;function t(s){let o=i.get(s);return o===void 0&&(o={},i.set(s,o)),o}function e(s){i.delete(s)}function n(s,o,a){i.get(s)[o]=a}function r(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:r}}function ix(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Nu(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Ou(){const i=[];let t=0;const e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function o(f,h,d,g,_,m){let p=i[t];return p===void 0?(p={id:f.id,object:f,geometry:h,material:d,groupOrder:g,renderOrder:f.renderOrder,z:_,group:m},i[t]=p):(p.id=f.id,p.object=f,p.geometry=h,p.material=d,p.groupOrder=g,p.renderOrder=f.renderOrder,p.z=_,p.group=m),t++,p}function a(f,h,d,g,_,m){const p=o(f,h,d,g,_,m);d.transmission>0?n.push(p):d.transparent===!0?r.push(p):e.push(p)}function c(f,h,d,g,_,m){const p=o(f,h,d,g,_,m);d.transmission>0?n.unshift(p):d.transparent===!0?r.unshift(p):e.unshift(p)}function l(f,h){e.length>1&&e.sort(f||ix),n.length>1&&n.sort(h||Nu),r.length>1&&r.sort(h||Nu)}function u(){for(let f=t,h=i.length;f<h;f++){const d=i[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:a,unshift:c,finish:u,sort:l}}function rx(){let i=new WeakMap;function t(n,r){const s=i.get(n);let o;return s===void 0?(o=new Ou,i.set(n,[o])):r>=s.length?(o=new Ou,s.push(o)):o=s[r],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function sx(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new X,color:new Nt};break;case"SpotLight":e={position:new X,direction:new X,color:new Nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new X,color:new Nt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new X,skyColor:new Nt,groundColor:new Nt};break;case"RectAreaLight":e={color:new Nt,position:new X,halfWidth:new X,halfHeight:new X};break}return i[t.id]=e,e}}}function ox(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let ax=0;function cx(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function lx(i){const t=new sx,e=ox(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new X);const r=new X,s=new ie,o=new ie;function a(l){let u=0,f=0,h=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let d=0,g=0,_=0,m=0,p=0,T=0,E=0,R=0,G=0,I=0,D=0;l.sort(cx);for(let y=0,x=l.length;y<x;y++){const U=l[y],P=U.color,b=U.intensity,w=U.distance,C=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)u+=P.r*b,f+=P.g*b,h+=P.b*b;else if(U.isLightProbe){for(let A=0;A<9;A++)n.probe[A].addScaledVector(U.sh.coefficients[A],b);D++}else if(U.isDirectionalLight){const A=t.get(U);if(A.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const F=U.shadow,O=e.get(U);O.shadowBias=F.bias,O.shadowNormalBias=F.normalBias,O.shadowRadius=F.radius,O.shadowMapSize=F.mapSize,n.directionalShadow[d]=O,n.directionalShadowMap[d]=C,n.directionalShadowMatrix[d]=U.shadow.matrix,T++}n.directional[d]=A,d++}else if(U.isSpotLight){const A=t.get(U);A.position.setFromMatrixPosition(U.matrixWorld),A.color.copy(P).multiplyScalar(b),A.distance=w,A.coneCos=Math.cos(U.angle),A.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),A.decay=U.decay,n.spot[_]=A;const F=U.shadow;if(U.map&&(n.spotLightMap[G]=U.map,G++,F.updateMatrices(U),U.castShadow&&I++),n.spotLightMatrix[_]=F.matrix,U.castShadow){const O=e.get(U);O.shadowBias=F.bias,O.shadowNormalBias=F.normalBias,O.shadowRadius=F.radius,O.shadowMapSize=F.mapSize,n.spotShadow[_]=O,n.spotShadowMap[_]=C,R++}_++}else if(U.isRectAreaLight){const A=t.get(U);A.color.copy(P).multiplyScalar(b),A.halfWidth.set(U.width*.5,0,0),A.halfHeight.set(0,U.height*.5,0),n.rectArea[m]=A,m++}else if(U.isPointLight){const A=t.get(U);if(A.color.copy(U.color).multiplyScalar(U.intensity),A.distance=U.distance,A.decay=U.decay,U.castShadow){const F=U.shadow,O=e.get(U);O.shadowBias=F.bias,O.shadowNormalBias=F.normalBias,O.shadowRadius=F.radius,O.shadowMapSize=F.mapSize,O.shadowCameraNear=F.camera.near,O.shadowCameraFar=F.camera.far,n.pointShadow[g]=O,n.pointShadowMap[g]=C,n.pointShadowMatrix[g]=U.shadow.matrix,E++}n.point[g]=A,g++}else if(U.isHemisphereLight){const A=t.get(U);A.skyColor.copy(U.color).multiplyScalar(b),A.groundColor.copy(U.groundColor).multiplyScalar(b),n.hemi[p]=A,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ft.LTC_FLOAT_1,n.rectAreaLTC2=ft.LTC_FLOAT_2):(n.rectAreaLTC1=ft.LTC_HALF_1,n.rectAreaLTC2=ft.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=h;const V=n.hash;(V.directionalLength!==d||V.pointLength!==g||V.spotLength!==_||V.rectAreaLength!==m||V.hemiLength!==p||V.numDirectionalShadows!==T||V.numPointShadows!==E||V.numSpotShadows!==R||V.numSpotMaps!==G||V.numLightProbes!==D)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=R,n.spotShadowMap.length=R,n.directionalShadowMatrix.length=T,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=R+G-I,n.spotLightMap.length=G,n.numSpotLightShadowsWithMaps=I,n.numLightProbes=D,V.directionalLength=d,V.pointLength=g,V.spotLength=_,V.rectAreaLength=m,V.hemiLength=p,V.numDirectionalShadows=T,V.numPointShadows=E,V.numSpotShadows=R,V.numSpotMaps=G,V.numLightProbes=D,n.version=ax++)}function c(l,u){let f=0,h=0,d=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,T=l.length;p<T;p++){const E=l[p];if(E.isDirectionalLight){const R=n.directional[f];R.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(m),f++}else if(E.isSpotLight){const R=n.spot[d];R.position.setFromMatrixPosition(E.matrixWorld),R.position.applyMatrix4(m),R.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(m),d++}else if(E.isRectAreaLight){const R=n.rectArea[g];R.position.setFromMatrixPosition(E.matrixWorld),R.position.applyMatrix4(m),o.identity(),s.copy(E.matrixWorld),s.premultiply(m),o.extractRotation(s),R.halfWidth.set(E.width*.5,0,0),R.halfHeight.set(0,E.height*.5,0),R.halfWidth.applyMatrix4(o),R.halfHeight.applyMatrix4(o),g++}else if(E.isPointLight){const R=n.point[h];R.position.setFromMatrixPosition(E.matrixWorld),R.position.applyMatrix4(m),h++}else if(E.isHemisphereLight){const R=n.hemi[_];R.direction.setFromMatrixPosition(E.matrixWorld),R.direction.transformDirection(m),_++}}}return{setup:a,setupView:c,state:n}}function Fu(i){const t=new lx(i),e=[],n=[];function r(u){l.camera=u,e.length=0,n.length=0}function s(u){e.push(u)}function o(u){n.push(u)}function a(){t.setup(e)}function c(u){t.setupView(e,u)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function ux(i){let t=new WeakMap;function e(r,s=0){const o=t.get(r);let a;return o===void 0?(a=new Fu(i),t.set(r,[a])):s>=o.length?(a=new Fu(i),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class hx extends Ii{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Kp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class fx extends Ii{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const dx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,px=`uniform sampler2D shadow_pass;
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
}`;function mx(i,t,e){let n=new zc;const r=new kt,s=new kt,o=new _e,a=new hx({depthPacking:$p}),c=new fx,l={},u=e.maxTextureSize,f={[ti]:Pe,[Pe]:ti,[Qe]:Qe},h=new ni({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new kt},radius:{value:4}},vertexShader:dx,fragmentShader:px}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const g=new sn;g.setAttribute("position",new rn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Fe(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Kh;let p=this.type;this.render=function(I,D,V){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||I.length===0)return;const y=i.getRenderTarget(),x=i.getActiveCubeFace(),U=i.getActiveMipmapLevel(),P=i.state;P.setBlending(jn),P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);const b=p!==wn&&this.type===wn,w=p===wn&&this.type!==wn;for(let C=0,A=I.length;C<A;C++){const F=I[C],O=F.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",F,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;r.copy(O.mapSize);const J=O.getFrameExtents();if(r.multiply(J),s.copy(O.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/J.x),r.x=s.x*J.x,O.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/J.y),r.y=s.y*J.y,O.mapSize.y=s.y)),O.map===null||b===!0||w===!0){const et=this.type!==wn?{minFilter:Re,magFilter:Re}:{};O.map!==null&&O.map.dispose(),O.map=new Ci(r.x,r.y,et),O.map.texture.name=F.name+".shadowMap",O.camera.updateProjectionMatrix()}i.setRenderTarget(O.map),i.clear();const Z=O.getViewportCount();for(let et=0;et<Z;et++){const st=O.getViewport(et);o.set(s.x*st.x,s.y*st.y,s.x*st.z,s.y*st.w),P.viewport(o),O.updateMatrices(F,et),n=O.getFrustum(),R(D,V,O.camera,F,this.type)}O.isPointLightShadow!==!0&&this.type===wn&&T(O,V),O.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(y,x,U)};function T(I,D){const V=t.update(_);h.defines.VSM_SAMPLES!==I.blurSamples&&(h.defines.VSM_SAMPLES=I.blurSamples,d.defines.VSM_SAMPLES=I.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new Ci(r.x,r.y)),h.uniforms.shadow_pass.value=I.map.texture,h.uniforms.resolution.value=I.mapSize,h.uniforms.radius.value=I.radius,i.setRenderTarget(I.mapPass),i.clear(),i.renderBufferDirect(D,null,V,h,_,null),d.uniforms.shadow_pass.value=I.mapPass.texture,d.uniforms.resolution.value=I.mapSize,d.uniforms.radius.value=I.radius,i.setRenderTarget(I.map),i.clear(),i.renderBufferDirect(D,null,V,d,_,null)}function E(I,D,V,y){let x=null;const U=V.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(U!==void 0)x=U;else if(x=V.isPointLight===!0?c:a,i.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0){const P=x.uuid,b=D.uuid;let w=l[P];w===void 0&&(w={},l[P]=w);let C=w[b];C===void 0&&(C=x.clone(),w[b]=C,D.addEventListener("dispose",G)),x=C}if(x.visible=D.visible,x.wireframe=D.wireframe,y===wn?x.side=D.shadowSide!==null?D.shadowSide:D.side:x.side=D.shadowSide!==null?D.shadowSide:f[D.side],x.alphaMap=D.alphaMap,x.alphaTest=D.alphaTest,x.map=D.map,x.clipShadows=D.clipShadows,x.clippingPlanes=D.clippingPlanes,x.clipIntersection=D.clipIntersection,x.displacementMap=D.displacementMap,x.displacementScale=D.displacementScale,x.displacementBias=D.displacementBias,x.wireframeLinewidth=D.wireframeLinewidth,x.linewidth=D.linewidth,V.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const P=i.properties.get(x);P.light=V}return x}function R(I,D,V,y,x){if(I.visible===!1)return;if(I.layers.test(D.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&x===wn)&&(!I.frustumCulled||n.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,I.matrixWorld);const b=t.update(I),w=I.material;if(Array.isArray(w)){const C=b.groups;for(let A=0,F=C.length;A<F;A++){const O=C[A],J=w[O.materialIndex];if(J&&J.visible){const Z=E(I,J,y,x);I.onBeforeShadow(i,I,D,V,b,Z,O),i.renderBufferDirect(V,null,b,Z,I,O),I.onAfterShadow(i,I,D,V,b,Z,O)}}}else if(w.visible){const C=E(I,w,y,x);I.onBeforeShadow(i,I,D,V,b,C,null),i.renderBufferDirect(V,null,b,C,I,null),I.onAfterShadow(i,I,D,V,b,C,null)}}const P=I.children;for(let b=0,w=P.length;b<w;b++)R(P[b],D,V,y,x)}function G(I){I.target.removeEventListener("dispose",G);for(const V in l){const y=l[V],x=I.target.uuid;x in y&&(y[x].dispose(),delete y[x])}}}function gx(i){function t(){let B=!1;const gt=new _e;let tt=null;const rt=new _e(0,0,0,0);return{setMask:function(ut){tt!==ut&&!B&&(i.colorMask(ut,ut,ut,ut),tt=ut)},setLocked:function(ut){B=ut},setClear:function(ut,Dt,Yt,ce,de){de===!0&&(ut*=ce,Dt*=ce,Yt*=ce),gt.set(ut,Dt,Yt,ce),rt.equals(gt)===!1&&(i.clearColor(ut,Dt,Yt,ce),rt.copy(gt))},reset:function(){B=!1,tt=null,rt.set(-1,0,0,0)}}}function e(){let B=!1,gt=null,tt=null,rt=null;return{setTest:function(ut){ut?it(i.DEPTH_TEST):nt(i.DEPTH_TEST)},setMask:function(ut){gt!==ut&&!B&&(i.depthMask(ut),gt=ut)},setFunc:function(ut){if(tt!==ut){switch(ut){case Sp:i.depthFunc(i.NEVER);break;case Ep:i.depthFunc(i.ALWAYS);break;case Mp:i.depthFunc(i.LESS);break;case vo:i.depthFunc(i.LEQUAL);break;case bp:i.depthFunc(i.EQUAL);break;case wp:i.depthFunc(i.GEQUAL);break;case Tp:i.depthFunc(i.GREATER);break;case Ap:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}tt=ut}},setLocked:function(ut){B=ut},setClear:function(ut){rt!==ut&&(i.clearDepth(ut),rt=ut)},reset:function(){B=!1,gt=null,tt=null,rt=null}}}function n(){let B=!1,gt=null,tt=null,rt=null,ut=null,Dt=null,Yt=null,ce=null,de=null;return{setTest:function(Qt){B||(Qt?it(i.STENCIL_TEST):nt(i.STENCIL_TEST))},setMask:function(Qt){gt!==Qt&&!B&&(i.stencilMask(Qt),gt=Qt)},setFunc:function(Qt,on,an){(tt!==Qt||rt!==on||ut!==an)&&(i.stencilFunc(Qt,on,an),tt=Qt,rt=on,ut=an)},setOp:function(Qt,on,an){(Dt!==Qt||Yt!==on||ce!==an)&&(i.stencilOp(Qt,on,an),Dt=Qt,Yt=on,ce=an)},setLocked:function(Qt){B=Qt},setClear:function(Qt){de!==Qt&&(i.clearStencil(Qt),de=Qt)},reset:function(){B=!1,gt=null,tt=null,rt=null,ut=null,Dt=null,Yt=null,ce=null,de=null}}}const r=new t,s=new e,o=new n,a=new WeakMap,c=new WeakMap;let l={},u={},f=new WeakMap,h=[],d=null,g=!1,_=null,m=null,p=null,T=null,E=null,R=null,G=null,I=new Nt(0,0,0),D=0,V=!1,y=null,x=null,U=null,P=null,b=null;const w=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let C=!1,A=0;const F=i.getParameter(i.VERSION);F.indexOf("WebGL")!==-1?(A=parseFloat(/^WebGL (\d)/.exec(F)[1]),C=A>=1):F.indexOf("OpenGL ES")!==-1&&(A=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),C=A>=2);let O=null,J={};const Z=i.getParameter(i.SCISSOR_BOX),et=i.getParameter(i.VIEWPORT),st=new _e().fromArray(Z),St=new _e().fromArray(et);function q(B,gt,tt,rt){const ut=new Uint8Array(4),Dt=i.createTexture();i.bindTexture(B,Dt),i.texParameteri(B,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(B,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Yt=0;Yt<tt;Yt++)B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY?i.texImage3D(gt,0,i.RGBA,1,1,rt,0,i.RGBA,i.UNSIGNED_BYTE,ut):i.texImage2D(gt+Yt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ut);return Dt}const j={};j[i.TEXTURE_2D]=q(i.TEXTURE_2D,i.TEXTURE_2D,1),j[i.TEXTURE_CUBE_MAP]=q(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[i.TEXTURE_2D_ARRAY]=q(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),j[i.TEXTURE_3D]=q(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),it(i.DEPTH_TEST),s.setFunc(vo),Tt(!1),qt(vl),it(i.CULL_FACE),Ut(jn);function it(B){l[B]!==!0&&(i.enable(B),l[B]=!0)}function nt(B){l[B]!==!1&&(i.disable(B),l[B]=!1)}function vt(B,gt){return u[B]!==gt?(i.bindFramebuffer(B,gt),u[B]=gt,B===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=gt),B===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=gt),!0):!1}function ht(B,gt){let tt=h,rt=!1;if(B){tt=f.get(gt),tt===void 0&&(tt=[],f.set(gt,tt));const ut=B.textures;if(tt.length!==ut.length||tt[0]!==i.COLOR_ATTACHMENT0){for(let Dt=0,Yt=ut.length;Dt<Yt;Dt++)tt[Dt]=i.COLOR_ATTACHMENT0+Dt;tt.length=ut.length,rt=!0}}else tt[0]!==i.BACK&&(tt[0]=i.BACK,rt=!0);rt&&i.drawBuffers(tt)}function xt(B){return d!==B?(i.useProgram(B),d=B,!0):!1}const N={[gi]:i.FUNC_ADD,[rp]:i.FUNC_SUBTRACT,[sp]:i.FUNC_REVERSE_SUBTRACT};N[op]=i.MIN,N[ap]=i.MAX;const Rt={[cp]:i.ZERO,[lp]:i.ONE,[up]:i.SRC_COLOR,[ic]:i.SRC_ALPHA,[gp]:i.SRC_ALPHA_SATURATE,[pp]:i.DST_COLOR,[fp]:i.DST_ALPHA,[hp]:i.ONE_MINUS_SRC_COLOR,[rc]:i.ONE_MINUS_SRC_ALPHA,[mp]:i.ONE_MINUS_DST_COLOR,[dp]:i.ONE_MINUS_DST_ALPHA,[_p]:i.CONSTANT_COLOR,[vp]:i.ONE_MINUS_CONSTANT_COLOR,[xp]:i.CONSTANT_ALPHA,[yp]:i.ONE_MINUS_CONSTANT_ALPHA};function Ut(B,gt,tt,rt,ut,Dt,Yt,ce,de,Qt){if(B===jn){g===!0&&(nt(i.BLEND),g=!1);return}if(g===!1&&(it(i.BLEND),g=!0),B!==ip){if(B!==_||Qt!==V){if((m!==gi||E!==gi)&&(i.blendEquation(i.FUNC_ADD),m=gi,E=gi),Qt)switch(B){case fr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case xl:i.blendFunc(i.ONE,i.ONE);break;case yl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Sl:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case fr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case xl:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case yl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Sl:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}p=null,T=null,R=null,G=null,I.set(0,0,0),D=0,_=B,V=Qt}return}ut=ut||gt,Dt=Dt||tt,Yt=Yt||rt,(gt!==m||ut!==E)&&(i.blendEquationSeparate(N[gt],N[ut]),m=gt,E=ut),(tt!==p||rt!==T||Dt!==R||Yt!==G)&&(i.blendFuncSeparate(Rt[tt],Rt[rt],Rt[Dt],Rt[Yt]),p=tt,T=rt,R=Dt,G=Yt),(ce.equals(I)===!1||de!==D)&&(i.blendColor(ce.r,ce.g,ce.b,de),I.copy(ce),D=de),_=B,V=!1}function Jt(B,gt){B.side===Qe?nt(i.CULL_FACE):it(i.CULL_FACE);let tt=B.side===Pe;gt&&(tt=!tt),Tt(tt),B.blending===fr&&B.transparent===!1?Ut(jn):Ut(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),s.setFunc(B.depthFunc),s.setTest(B.depthTest),s.setMask(B.depthWrite),r.setMask(B.colorWrite);const rt=B.stencilWrite;o.setTest(rt),rt&&(o.setMask(B.stencilWriteMask),o.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),o.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),z(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?it(i.SAMPLE_ALPHA_TO_COVERAGE):nt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Tt(B){y!==B&&(B?i.frontFace(i.CW):i.frontFace(i.CCW),y=B)}function qt(B){B!==tp?(it(i.CULL_FACE),B!==x&&(B===vl?i.cullFace(i.BACK):B===ep?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):nt(i.CULL_FACE),x=B}function L(B){B!==U&&(C&&i.lineWidth(B),U=B)}function z(B,gt,tt){B?(it(i.POLYGON_OFFSET_FILL),(P!==gt||b!==tt)&&(i.polygonOffset(gt,tt),P=gt,b=tt)):nt(i.POLYGON_OFFSET_FILL)}function Y(B){B?it(i.SCISSOR_TEST):nt(i.SCISSOR_TEST)}function M(B){B===void 0&&(B=i.TEXTURE0+w-1),O!==B&&(i.activeTexture(B),O=B)}function v(B,gt,tt){tt===void 0&&(O===null?tt=i.TEXTURE0+w-1:tt=O);let rt=J[tt];rt===void 0&&(rt={type:void 0,texture:void 0},J[tt]=rt),(rt.type!==B||rt.texture!==gt)&&(O!==tt&&(i.activeTexture(tt),O=tt),i.bindTexture(B,gt||j[B]),rt.type=B,rt.texture=gt)}function H(){const B=J[O];B!==void 0&&B.type!==void 0&&(i.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function Q(){try{i.compressedTexImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ot(){try{i.compressedTexImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function at(){try{i.texSubImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function wt(){try{i.texSubImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function dt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function pt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function zt(){try{i.texStorage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ct(){try{i.texStorage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Mt(){try{i.texImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Gt(){try{i.texImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Pt(B){st.equals(B)===!1&&(i.scissor(B.x,B.y,B.z,B.w),st.copy(B))}function mt(B){St.equals(B)===!1&&(i.viewport(B.x,B.y,B.z,B.w),St.copy(B))}function Ht(B,gt){let tt=c.get(gt);tt===void 0&&(tt=new WeakMap,c.set(gt,tt));let rt=tt.get(B);rt===void 0&&(rt=i.getUniformBlockIndex(gt,B.name),tt.set(B,rt))}function Wt(B,gt){const rt=c.get(gt).get(B);a.get(gt)!==rt&&(i.uniformBlockBinding(gt,rt,B.__bindingPointIndex),a.set(gt,rt))}function ae(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),l={},O=null,J={},u={},f=new WeakMap,h=[],d=null,g=!1,_=null,m=null,p=null,T=null,E=null,R=null,G=null,I=new Nt(0,0,0),D=0,V=!1,y=null,x=null,U=null,P=null,b=null,st.set(0,0,i.canvas.width,i.canvas.height),St.set(0,0,i.canvas.width,i.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:it,disable:nt,bindFramebuffer:vt,drawBuffers:ht,useProgram:xt,setBlending:Ut,setMaterial:Jt,setFlipSided:Tt,setCullFace:qt,setLineWidth:L,setPolygonOffset:z,setScissorTest:Y,activeTexture:M,bindTexture:v,unbindTexture:H,compressedTexImage2D:Q,compressedTexImage3D:ot,texImage2D:Mt,texImage3D:Gt,updateUBOMapping:Ht,uniformBlockBinding:Wt,texStorage2D:zt,texStorage3D:ct,texSubImage2D:at,texSubImage3D:wt,compressedTexSubImage2D:dt,compressedTexSubImage3D:pt,scissor:Pt,viewport:mt,reset:ae}}function _x(i,t,e,n,r,s,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new kt,u=new WeakMap;let f;const h=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(M,v){return d?new OffscreenCanvas(M,v):bo("canvas")}function _(M,v,H){let Q=1;const ot=Y(M);if((ot.width>H||ot.height>H)&&(Q=H/Math.max(ot.width,ot.height)),Q<1)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap||typeof VideoFrame<"u"&&M instanceof VideoFrame){const at=Math.floor(Q*ot.width),wt=Math.floor(Q*ot.height);f===void 0&&(f=g(at,wt));const dt=v?g(at,wt):f;return dt.width=at,dt.height=wt,dt.getContext("2d").drawImage(M,0,0,at,wt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ot.width+"x"+ot.height+") to ("+at+"x"+wt+")."),dt}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ot.width+"x"+ot.height+")."),M;return M}function m(M){return M.generateMipmaps&&M.minFilter!==Re&&M.minFilter!==tn}function p(M){i.generateMipmap(M)}function T(M,v,H,Q,ot=!1){if(M!==null){if(i[M]!==void 0)return i[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let at=v;if(v===i.RED&&(H===i.FLOAT&&(at=i.R32F),H===i.HALF_FLOAT&&(at=i.R16F),H===i.UNSIGNED_BYTE&&(at=i.R8)),v===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&(at=i.R8UI),H===i.UNSIGNED_SHORT&&(at=i.R16UI),H===i.UNSIGNED_INT&&(at=i.R32UI),H===i.BYTE&&(at=i.R8I),H===i.SHORT&&(at=i.R16I),H===i.INT&&(at=i.R32I)),v===i.RG&&(H===i.FLOAT&&(at=i.RG32F),H===i.HALF_FLOAT&&(at=i.RG16F),H===i.UNSIGNED_BYTE&&(at=i.RG8)),v===i.RG_INTEGER&&(H===i.UNSIGNED_BYTE&&(at=i.RG8UI),H===i.UNSIGNED_SHORT&&(at=i.RG16UI),H===i.UNSIGNED_INT&&(at=i.RG32UI),H===i.BYTE&&(at=i.RG8I),H===i.SHORT&&(at=i.RG16I),H===i.INT&&(at=i.RG32I)),v===i.RGB&&H===i.UNSIGNED_INT_5_9_9_9_REV&&(at=i.RGB9_E5),v===i.RGBA){const wt=ot?yo:Zt.getTransfer(Q);H===i.FLOAT&&(at=i.RGBA32F),H===i.HALF_FLOAT&&(at=i.RGBA16F),H===i.UNSIGNED_BYTE&&(at=wt===ne?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT_4_4_4_4&&(at=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&(at=i.RGB5_A1)}return(at===i.R16F||at===i.R32F||at===i.RG16F||at===i.RG32F||at===i.RGBA16F||at===i.RGBA32F)&&t.get("EXT_color_buffer_float"),at}function E(M,v){let H;return M?v===null||v===Mr||v===br?H=i.DEPTH24_STENCIL8:v===Kn?H=i.DEPTH32F_STENCIL8:v===xo&&(H=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Mr||v===br?H=i.DEPTH_COMPONENT24:v===Kn?H=i.DEPTH_COMPONENT32F:v===xo&&(H=i.DEPTH_COMPONENT16),H}function R(M,v){return m(M)===!0||M.isFramebufferTexture&&M.minFilter!==Re&&M.minFilter!==tn?Math.log2(Math.max(v.width,v.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?v.mipmaps.length:1}function G(M){const v=M.target;v.removeEventListener("dispose",G),D(v),v.isVideoTexture&&u.delete(v)}function I(M){const v=M.target;v.removeEventListener("dispose",I),y(v)}function D(M){const v=n.get(M);if(v.__webglInit===void 0)return;const H=M.source,Q=h.get(H);if(Q){const ot=Q[v.__cacheKey];ot.usedTimes--,ot.usedTimes===0&&V(M),Object.keys(Q).length===0&&h.delete(H)}n.remove(M)}function V(M){const v=n.get(M);i.deleteTexture(v.__webglTexture);const H=M.source,Q=h.get(H);delete Q[v.__cacheKey],o.memory.textures--}function y(M){const v=n.get(M);if(M.depthTexture&&M.depthTexture.dispose(),M.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(v.__webglFramebuffer[Q]))for(let ot=0;ot<v.__webglFramebuffer[Q].length;ot++)i.deleteFramebuffer(v.__webglFramebuffer[Q][ot]);else i.deleteFramebuffer(v.__webglFramebuffer[Q]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[Q])}else{if(Array.isArray(v.__webglFramebuffer))for(let Q=0;Q<v.__webglFramebuffer.length;Q++)i.deleteFramebuffer(v.__webglFramebuffer[Q]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let Q=0;Q<v.__webglColorRenderbuffer.length;Q++)v.__webglColorRenderbuffer[Q]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[Q]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const H=M.textures;for(let Q=0,ot=H.length;Q<ot;Q++){const at=n.get(H[Q]);at.__webglTexture&&(i.deleteTexture(at.__webglTexture),o.memory.textures--),n.remove(H[Q])}n.remove(M)}let x=0;function U(){x=0}function P(){const M=x;return M>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+r.maxTextures),x+=1,M}function b(M){const v=[];return v.push(M.wrapS),v.push(M.wrapT),v.push(M.wrapR||0),v.push(M.magFilter),v.push(M.minFilter),v.push(M.anisotropy),v.push(M.internalFormat),v.push(M.format),v.push(M.type),v.push(M.generateMipmaps),v.push(M.premultiplyAlpha),v.push(M.flipY),v.push(M.unpackAlignment),v.push(M.colorSpace),v.join()}function w(M,v){const H=n.get(M);if(M.isVideoTexture&&L(M),M.isRenderTargetTexture===!1&&M.version>0&&H.__version!==M.version){const Q=M.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{St(H,M,v);return}}e.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+v)}function C(M,v){const H=n.get(M);if(M.version>0&&H.__version!==M.version){St(H,M,v);return}e.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+v)}function A(M,v){const H=n.get(M);if(M.version>0&&H.__version!==M.version){St(H,M,v);return}e.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+v)}function F(M,v){const H=n.get(M);if(M.version>0&&H.__version!==M.version){q(H,M,v);return}e.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+v)}const O={[ac]:i.REPEAT,[vi]:i.CLAMP_TO_EDGE,[cc]:i.MIRRORED_REPEAT},J={[Re]:i.NEAREST,[Fp]:i.NEAREST_MIPMAP_NEAREST,[Ms]:i.NEAREST_MIPMAP_LINEAR,[tn]:i.LINEAR,[ia]:i.LINEAR_MIPMAP_NEAREST,[xi]:i.LINEAR_MIPMAP_LINEAR},Z={[Zp]:i.NEVER,[im]:i.ALWAYS,[Jp]:i.LESS,[rf]:i.LEQUAL,[Qp]:i.EQUAL,[nm]:i.GEQUAL,[tm]:i.GREATER,[em]:i.NOTEQUAL};function et(M,v){if(v.type===Kn&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===tn||v.magFilter===ia||v.magFilter===Ms||v.magFilter===xi||v.minFilter===tn||v.minFilter===ia||v.minFilter===Ms||v.minFilter===xi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(M,i.TEXTURE_WRAP_S,O[v.wrapS]),i.texParameteri(M,i.TEXTURE_WRAP_T,O[v.wrapT]),(M===i.TEXTURE_3D||M===i.TEXTURE_2D_ARRAY)&&i.texParameteri(M,i.TEXTURE_WRAP_R,O[v.wrapR]),i.texParameteri(M,i.TEXTURE_MAG_FILTER,J[v.magFilter]),i.texParameteri(M,i.TEXTURE_MIN_FILTER,J[v.minFilter]),v.compareFunction&&(i.texParameteri(M,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(M,i.TEXTURE_COMPARE_FUNC,Z[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Re||v.minFilter!==Ms&&v.minFilter!==xi||v.type===Kn&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const H=t.get("EXT_texture_filter_anisotropic");i.texParameterf(M,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function st(M,v){let H=!1;M.__webglInit===void 0&&(M.__webglInit=!0,v.addEventListener("dispose",G));const Q=v.source;let ot=h.get(Q);ot===void 0&&(ot={},h.set(Q,ot));const at=b(v);if(at!==M.__cacheKey){ot[at]===void 0&&(ot[at]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,H=!0),ot[at].usedTimes++;const wt=ot[M.__cacheKey];wt!==void 0&&(ot[M.__cacheKey].usedTimes--,wt.usedTimes===0&&V(v)),M.__cacheKey=at,M.__webglTexture=ot[at].texture}return H}function St(M,v,H){let Q=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(Q=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(Q=i.TEXTURE_3D);const ot=st(M,v),at=v.source;e.bindTexture(Q,M.__webglTexture,i.TEXTURE0+H);const wt=n.get(at);if(at.version!==wt.__version||ot===!0){e.activeTexture(i.TEXTURE0+H);const dt=Zt.getPrimaries(Zt.workingColorSpace),pt=v.colorSpace===Yn?null:Zt.getPrimaries(v.colorSpace),zt=v.colorSpace===Yn||dt===pt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,zt);let ct=_(v.image,!1,r.maxTextureSize);ct=z(v,ct);const Mt=s.convert(v.format,v.colorSpace),Gt=s.convert(v.type);let Pt=T(v.internalFormat,Mt,Gt,v.colorSpace,v.isVideoTexture);et(Q,v);let mt;const Ht=v.mipmaps,Wt=v.isVideoTexture!==!0,ae=wt.__version===void 0||ot===!0,B=at.dataReady,gt=R(v,ct);if(v.isDepthTexture)Pt=E(v.format===wr,v.type),ae&&(Wt?e.texStorage2D(i.TEXTURE_2D,1,Pt,ct.width,ct.height):e.texImage2D(i.TEXTURE_2D,0,Pt,ct.width,ct.height,0,Mt,Gt,null));else if(v.isDataTexture)if(Ht.length>0){Wt&&ae&&e.texStorage2D(i.TEXTURE_2D,gt,Pt,Ht[0].width,Ht[0].height);for(let tt=0,rt=Ht.length;tt<rt;tt++)mt=Ht[tt],Wt?B&&e.texSubImage2D(i.TEXTURE_2D,tt,0,0,mt.width,mt.height,Mt,Gt,mt.data):e.texImage2D(i.TEXTURE_2D,tt,Pt,mt.width,mt.height,0,Mt,Gt,mt.data);v.generateMipmaps=!1}else Wt?(ae&&e.texStorage2D(i.TEXTURE_2D,gt,Pt,ct.width,ct.height),B&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ct.width,ct.height,Mt,Gt,ct.data)):e.texImage2D(i.TEXTURE_2D,0,Pt,ct.width,ct.height,0,Mt,Gt,ct.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Wt&&ae&&e.texStorage3D(i.TEXTURE_2D_ARRAY,gt,Pt,Ht[0].width,Ht[0].height,ct.depth);for(let tt=0,rt=Ht.length;tt<rt;tt++)if(mt=Ht[tt],v.format!==fn)if(Mt!==null)if(Wt){if(B)if(v.layerUpdates.size>0){for(const ut of v.layerUpdates){const Dt=mt.width*mt.height;e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,tt,0,0,ut,mt.width,mt.height,1,Mt,mt.data.slice(Dt*ut,Dt*(ut+1)),0,0)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,tt,0,0,0,mt.width,mt.height,ct.depth,Mt,mt.data,0,0)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,tt,Pt,mt.width,mt.height,ct.depth,0,mt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Wt?B&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,tt,0,0,0,mt.width,mt.height,ct.depth,Mt,Gt,mt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,tt,Pt,mt.width,mt.height,ct.depth,0,Mt,Gt,mt.data)}else{Wt&&ae&&e.texStorage2D(i.TEXTURE_2D,gt,Pt,Ht[0].width,Ht[0].height);for(let tt=0,rt=Ht.length;tt<rt;tt++)mt=Ht[tt],v.format!==fn?Mt!==null?Wt?B&&e.compressedTexSubImage2D(i.TEXTURE_2D,tt,0,0,mt.width,mt.height,Mt,mt.data):e.compressedTexImage2D(i.TEXTURE_2D,tt,Pt,mt.width,mt.height,0,mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Wt?B&&e.texSubImage2D(i.TEXTURE_2D,tt,0,0,mt.width,mt.height,Mt,Gt,mt.data):e.texImage2D(i.TEXTURE_2D,tt,Pt,mt.width,mt.height,0,Mt,Gt,mt.data)}else if(v.isDataArrayTexture)if(Wt){if(ae&&e.texStorage3D(i.TEXTURE_2D_ARRAY,gt,Pt,ct.width,ct.height,ct.depth),B)if(v.layerUpdates.size>0){let tt;switch(Gt){case i.UNSIGNED_BYTE:switch(Mt){case i.ALPHA:tt=1;break;case i.LUMINANCE:tt=1;break;case i.LUMINANCE_ALPHA:tt=2;break;case i.RGB:tt=3;break;case i.RGBA:tt=4;break;default:throw new Error(`Unknown texel size for format ${Mt}.`)}break;case i.UNSIGNED_SHORT_4_4_4_4:case i.UNSIGNED_SHORT_5_5_5_1:case i.UNSIGNED_SHORT_5_6_5:tt=1;break;default:throw new Error(`Unknown texel size for type ${Gt}.`)}const rt=ct.width*ct.height*tt;for(const ut of v.layerUpdates)e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ut,ct.width,ct.height,1,Mt,Gt,ct.data.slice(rt*ut,rt*(ut+1)));v.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ct.width,ct.height,ct.depth,Mt,Gt,ct.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Pt,ct.width,ct.height,ct.depth,0,Mt,Gt,ct.data);else if(v.isData3DTexture)Wt?(ae&&e.texStorage3D(i.TEXTURE_3D,gt,Pt,ct.width,ct.height,ct.depth),B&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ct.width,ct.height,ct.depth,Mt,Gt,ct.data)):e.texImage3D(i.TEXTURE_3D,0,Pt,ct.width,ct.height,ct.depth,0,Mt,Gt,ct.data);else if(v.isFramebufferTexture){if(ae)if(Wt)e.texStorage2D(i.TEXTURE_2D,gt,Pt,ct.width,ct.height);else{let tt=ct.width,rt=ct.height;for(let ut=0;ut<gt;ut++)e.texImage2D(i.TEXTURE_2D,ut,Pt,tt,rt,0,Mt,Gt,null),tt>>=1,rt>>=1}}else if(Ht.length>0){if(Wt&&ae){const tt=Y(Ht[0]);e.texStorage2D(i.TEXTURE_2D,gt,Pt,tt.width,tt.height)}for(let tt=0,rt=Ht.length;tt<rt;tt++)mt=Ht[tt],Wt?B&&e.texSubImage2D(i.TEXTURE_2D,tt,0,0,Mt,Gt,mt):e.texImage2D(i.TEXTURE_2D,tt,Pt,Mt,Gt,mt);v.generateMipmaps=!1}else if(Wt){if(ae){const tt=Y(ct);e.texStorage2D(i.TEXTURE_2D,gt,Pt,tt.width,tt.height)}B&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Mt,Gt,ct)}else e.texImage2D(i.TEXTURE_2D,0,Pt,Mt,Gt,ct);m(v)&&p(Q),wt.__version=at.version,v.onUpdate&&v.onUpdate(v)}M.__version=v.version}function q(M,v,H){if(v.image.length!==6)return;const Q=st(M,v),ot=v.source;e.bindTexture(i.TEXTURE_CUBE_MAP,M.__webglTexture,i.TEXTURE0+H);const at=n.get(ot);if(ot.version!==at.__version||Q===!0){e.activeTexture(i.TEXTURE0+H);const wt=Zt.getPrimaries(Zt.workingColorSpace),dt=v.colorSpace===Yn?null:Zt.getPrimaries(v.colorSpace),pt=v.colorSpace===Yn||wt===dt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt);const zt=v.isCompressedTexture||v.image[0].isCompressedTexture,ct=v.image[0]&&v.image[0].isDataTexture,Mt=[];for(let rt=0;rt<6;rt++)!zt&&!ct?Mt[rt]=_(v.image[rt],!0,r.maxCubemapSize):Mt[rt]=ct?v.image[rt].image:v.image[rt],Mt[rt]=z(v,Mt[rt]);const Gt=Mt[0],Pt=s.convert(v.format,v.colorSpace),mt=s.convert(v.type),Ht=T(v.internalFormat,Pt,mt,v.colorSpace),Wt=v.isVideoTexture!==!0,ae=at.__version===void 0||Q===!0,B=ot.dataReady;let gt=R(v,Gt);et(i.TEXTURE_CUBE_MAP,v);let tt;if(zt){Wt&&ae&&e.texStorage2D(i.TEXTURE_CUBE_MAP,gt,Ht,Gt.width,Gt.height);for(let rt=0;rt<6;rt++){tt=Mt[rt].mipmaps;for(let ut=0;ut<tt.length;ut++){const Dt=tt[ut];v.format!==fn?Pt!==null?Wt?B&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,ut,0,0,Dt.width,Dt.height,Pt,Dt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,ut,Ht,Dt.width,Dt.height,0,Dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Wt?B&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,ut,0,0,Dt.width,Dt.height,Pt,mt,Dt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,ut,Ht,Dt.width,Dt.height,0,Pt,mt,Dt.data)}}}else{if(tt=v.mipmaps,Wt&&ae){tt.length>0&&gt++;const rt=Y(Mt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,gt,Ht,rt.width,rt.height)}for(let rt=0;rt<6;rt++)if(ct){Wt?B&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,Mt[rt].width,Mt[rt].height,Pt,mt,Mt[rt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,Ht,Mt[rt].width,Mt[rt].height,0,Pt,mt,Mt[rt].data);for(let ut=0;ut<tt.length;ut++){const Yt=tt[ut].image[rt].image;Wt?B&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,ut+1,0,0,Yt.width,Yt.height,Pt,mt,Yt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,ut+1,Ht,Yt.width,Yt.height,0,Pt,mt,Yt.data)}}else{Wt?B&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,Pt,mt,Mt[rt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,Ht,Pt,mt,Mt[rt]);for(let ut=0;ut<tt.length;ut++){const Dt=tt[ut];Wt?B&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,ut+1,0,0,Pt,mt,Dt.image[rt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,ut+1,Ht,Pt,mt,Dt.image[rt])}}}m(v)&&p(i.TEXTURE_CUBE_MAP),at.__version=ot.version,v.onUpdate&&v.onUpdate(v)}M.__version=v.version}function j(M,v,H,Q,ot,at){const wt=s.convert(H.format,H.colorSpace),dt=s.convert(H.type),pt=T(H.internalFormat,wt,dt,H.colorSpace);if(!n.get(v).__hasExternalTextures){const ct=Math.max(1,v.width>>at),Mt=Math.max(1,v.height>>at);ot===i.TEXTURE_3D||ot===i.TEXTURE_2D_ARRAY?e.texImage3D(ot,at,pt,ct,Mt,v.depth,0,wt,dt,null):e.texImage2D(ot,at,pt,ct,Mt,0,wt,dt,null)}e.bindFramebuffer(i.FRAMEBUFFER,M),qt(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,ot,n.get(H).__webglTexture,0,Tt(v)):(ot===i.TEXTURE_2D||ot>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ot<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Q,ot,n.get(H).__webglTexture,at),e.bindFramebuffer(i.FRAMEBUFFER,null)}function it(M,v,H){if(i.bindRenderbuffer(i.RENDERBUFFER,M),v.depthBuffer){const Q=v.depthTexture,ot=Q&&Q.isDepthTexture?Q.type:null,at=E(v.stencilBuffer,ot),wt=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,dt=Tt(v);qt(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,dt,at,v.width,v.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,dt,at,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,at,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,wt,i.RENDERBUFFER,M)}else{const Q=v.textures;for(let ot=0;ot<Q.length;ot++){const at=Q[ot],wt=s.convert(at.format,at.colorSpace),dt=s.convert(at.type),pt=T(at.internalFormat,wt,dt,at.colorSpace),zt=Tt(v);H&&qt(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,zt,pt,v.width,v.height):qt(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,zt,pt,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,pt,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function nt(M,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,M),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),w(v.depthTexture,0);const Q=n.get(v.depthTexture).__webglTexture,ot=Tt(v);if(v.depthTexture.format===dr)qt(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0,ot):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0);else if(v.depthTexture.format===wr)qt(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0,ot):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function vt(M){const v=n.get(M),H=M.isWebGLCubeRenderTarget===!0;if(M.depthTexture&&!v.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");nt(v.__webglFramebuffer,M)}else if(H){v.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[Q]),v.__webglDepthbuffer[Q]=i.createRenderbuffer(),it(v.__webglDepthbuffer[Q],M,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer=i.createRenderbuffer(),it(v.__webglDepthbuffer,M,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function ht(M,v,H){const Q=n.get(M);v!==void 0&&j(Q.__webglFramebuffer,M,M.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&vt(M)}function xt(M){const v=M.texture,H=n.get(M),Q=n.get(v);M.addEventListener("dispose",I);const ot=M.textures,at=M.isWebGLCubeRenderTarget===!0,wt=ot.length>1;if(wt||(Q.__webglTexture===void 0&&(Q.__webglTexture=i.createTexture()),Q.__version=v.version,o.memory.textures++),at){H.__webglFramebuffer=[];for(let dt=0;dt<6;dt++)if(v.mipmaps&&v.mipmaps.length>0){H.__webglFramebuffer[dt]=[];for(let pt=0;pt<v.mipmaps.length;pt++)H.__webglFramebuffer[dt][pt]=i.createFramebuffer()}else H.__webglFramebuffer[dt]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){H.__webglFramebuffer=[];for(let dt=0;dt<v.mipmaps.length;dt++)H.__webglFramebuffer[dt]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(wt)for(let dt=0,pt=ot.length;dt<pt;dt++){const zt=n.get(ot[dt]);zt.__webglTexture===void 0&&(zt.__webglTexture=i.createTexture(),o.memory.textures++)}if(M.samples>0&&qt(M)===!1){H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let dt=0;dt<ot.length;dt++){const pt=ot[dt];H.__webglColorRenderbuffer[dt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[dt]);const zt=s.convert(pt.format,pt.colorSpace),ct=s.convert(pt.type),Mt=T(pt.internalFormat,zt,ct,pt.colorSpace,M.isXRRenderTarget===!0),Gt=Tt(M);i.renderbufferStorageMultisample(i.RENDERBUFFER,Gt,Mt,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.RENDERBUFFER,H.__webglColorRenderbuffer[dt])}i.bindRenderbuffer(i.RENDERBUFFER,null),M.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),it(H.__webglDepthRenderbuffer,M,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(at){e.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture),et(i.TEXTURE_CUBE_MAP,v);for(let dt=0;dt<6;dt++)if(v.mipmaps&&v.mipmaps.length>0)for(let pt=0;pt<v.mipmaps.length;pt++)j(H.__webglFramebuffer[dt][pt],M,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,pt);else j(H.__webglFramebuffer[dt],M,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0);m(v)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(wt){for(let dt=0,pt=ot.length;dt<pt;dt++){const zt=ot[dt],ct=n.get(zt);e.bindTexture(i.TEXTURE_2D,ct.__webglTexture),et(i.TEXTURE_2D,zt),j(H.__webglFramebuffer,M,zt,i.COLOR_ATTACHMENT0+dt,i.TEXTURE_2D,0),m(zt)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let dt=i.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(dt=M.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(dt,Q.__webglTexture),et(dt,v),v.mipmaps&&v.mipmaps.length>0)for(let pt=0;pt<v.mipmaps.length;pt++)j(H.__webglFramebuffer[pt],M,v,i.COLOR_ATTACHMENT0,dt,pt);else j(H.__webglFramebuffer,M,v,i.COLOR_ATTACHMENT0,dt,0);m(v)&&p(dt),e.unbindTexture()}M.depthBuffer&&vt(M)}function N(M){const v=M.textures;for(let H=0,Q=v.length;H<Q;H++){const ot=v[H];if(m(ot)){const at=M.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,wt=n.get(ot).__webglTexture;e.bindTexture(at,wt),p(at),e.unbindTexture()}}}const Rt=[],Ut=[];function Jt(M){if(M.samples>0){if(qt(M)===!1){const v=M.textures,H=M.width,Q=M.height;let ot=i.COLOR_BUFFER_BIT;const at=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,wt=n.get(M),dt=v.length>1;if(dt)for(let pt=0;pt<v.length;pt++)e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,wt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,wt.__webglFramebuffer);for(let pt=0;pt<v.length;pt++){if(M.resolveDepthBuffer&&(M.depthBuffer&&(ot|=i.DEPTH_BUFFER_BIT),M.stencilBuffer&&M.resolveStencilBuffer&&(ot|=i.STENCIL_BUFFER_BIT)),dt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,wt.__webglColorRenderbuffer[pt]);const zt=n.get(v[pt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,zt,0)}i.blitFramebuffer(0,0,H,Q,0,0,H,Q,ot,i.NEAREST),c===!0&&(Rt.length=0,Ut.length=0,Rt.push(i.COLOR_ATTACHMENT0+pt),M.depthBuffer&&M.resolveDepthBuffer===!1&&(Rt.push(at),Ut.push(at),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ut)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Rt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),dt)for(let pt=0;pt<v.length;pt++){e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.RENDERBUFFER,wt.__webglColorRenderbuffer[pt]);const zt=n.get(v[pt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.TEXTURE_2D,zt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,wt.__webglMultisampledFramebuffer)}else if(M.depthBuffer&&M.resolveDepthBuffer===!1&&c){const v=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function Tt(M){return Math.min(r.maxSamples,M.samples)}function qt(M){const v=n.get(M);return M.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function L(M){const v=o.render.frame;u.get(M)!==v&&(u.set(M,v),M.update())}function z(M,v){const H=M.colorSpace,Q=M.format,ot=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||H!==ii&&H!==Yn&&(Zt.getTransfer(H)===ne?(Q!==fn||ot!==ei)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),v}function Y(M){return typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement?(l.width=M.naturalWidth||M.width,l.height=M.naturalHeight||M.height):typeof VideoFrame<"u"&&M instanceof VideoFrame?(l.width=M.displayWidth,l.height=M.displayHeight):(l.width=M.width,l.height=M.height),l}this.allocateTextureUnit=P,this.resetTextureUnits=U,this.setTexture2D=w,this.setTexture2DArray=C,this.setTexture3D=A,this.setTextureCube=F,this.rebindTextures=ht,this.setupRenderTarget=xt,this.updateRenderTargetMipmap=N,this.updateMultisampleRenderTarget=Jt,this.setupDepthRenderbuffer=vt,this.setupFrameBufferTexture=j,this.useMultisampledRTT=qt}function vx(i,t){function e(n,r=Yn){let s;const o=Zt.getTransfer(r);if(n===ei)return i.UNSIGNED_BYTE;if(n===Zh)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Jh)return i.UNSIGNED_SHORT_5_5_5_1;if(n===zp)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Bp)return i.BYTE;if(n===kp)return i.SHORT;if(n===xo)return i.UNSIGNED_SHORT;if(n===jh)return i.INT;if(n===Mr)return i.UNSIGNED_INT;if(n===Kn)return i.FLOAT;if(n===Ho)return i.HALF_FLOAT;if(n===Hp)return i.ALPHA;if(n===Vp)return i.RGB;if(n===fn)return i.RGBA;if(n===Gp)return i.LUMINANCE;if(n===Wp)return i.LUMINANCE_ALPHA;if(n===dr)return i.DEPTH_COMPONENT;if(n===wr)return i.DEPTH_STENCIL;if(n===Xp)return i.RED;if(n===Qh)return i.RED_INTEGER;if(n===qp)return i.RG;if(n===tf)return i.RG_INTEGER;if(n===ef)return i.RGBA_INTEGER;if(n===ra||n===sa||n===oa||n===aa)if(o===ne)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===ra)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===sa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===oa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===aa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===ra)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===sa)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===oa)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===aa)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===El||n===Ml||n===bl||n===wl)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===El)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ml)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===bl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===wl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Tl||n===Al||n===Rl)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Tl||n===Al)return o===ne?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Rl)return o===ne?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Cl||n===Ll||n===Pl||n===Dl||n===Il||n===Ul||n===Nl||n===Ol||n===Fl||n===Bl||n===kl||n===zl||n===Hl||n===Vl)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Cl)return o===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ll)return o===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Pl)return o===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Dl)return o===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Il)return o===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ul)return o===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Nl)return o===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ol)return o===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Fl)return o===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Bl)return o===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===kl)return o===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===zl)return o===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Hl)return o===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Vl)return o===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ca||n===Gl||n===Wl)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===ca)return o===ne?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Gl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Wl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Yp||n===Xl||n===ql||n===Yl)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===ca)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Xl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ql)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Yl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===br?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class xx extends Xe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class ur extends ve{constructor(){super(),this.isGroup=!0,this.type="Group"}}const yx={type:"move"};class Ia{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ur,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ur,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ur,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,g=.005;l.inputState.pinching&&h>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&h<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(yx)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new ur;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Sx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ex=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Mx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const r=new Te,s=t.properties.get(r);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new ni({vertexShader:Sx,fragmentShader:Ex,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Fe(new Ar(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}}class bx extends Dr{constructor(t,e){super();const n=this;let r=null,s=1,o=null,a="local-floor",c=1,l=null,u=null,f=null,h=null,d=null,g=null;const _=new Mx,m=e.getContextAttributes();let p=null,T=null;const E=[],R=[],G=new kt;let I=null;const D=new Xe;D.layers.enable(1),D.viewport=new _e;const V=new Xe;V.layers.enable(2),V.viewport=new _e;const y=[D,V],x=new xx;x.layers.enable(1),x.layers.enable(2);let U=null,P=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let j=E[q];return j===void 0&&(j=new Ia,E[q]=j),j.getTargetRaySpace()},this.getControllerGrip=function(q){let j=E[q];return j===void 0&&(j=new Ia,E[q]=j),j.getGripSpace()},this.getHand=function(q){let j=E[q];return j===void 0&&(j=new Ia,E[q]=j),j.getHandSpace()};function b(q){const j=R.indexOf(q.inputSource);if(j===-1)return;const it=E[j];it!==void 0&&(it.update(q.inputSource,q.frame,l||o),it.dispatchEvent({type:q.type,data:q.inputSource}))}function w(){r.removeEventListener("select",b),r.removeEventListener("selectstart",b),r.removeEventListener("selectend",b),r.removeEventListener("squeeze",b),r.removeEventListener("squeezestart",b),r.removeEventListener("squeezeend",b),r.removeEventListener("end",w),r.removeEventListener("inputsourceschange",C);for(let q=0;q<E.length;q++){const j=R[q];j!==null&&(R[q]=null,E[q].disconnect(j))}U=null,P=null,_.reset(),t.setRenderTarget(p),d=null,h=null,f=null,r=null,T=null,St.stop(),n.isPresenting=!1,t.setPixelRatio(I),t.setSize(G.width,G.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(q){l=q},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(q){if(r=q,r!==null){if(p=t.getRenderTarget(),r.addEventListener("select",b),r.addEventListener("selectstart",b),r.addEventListener("selectend",b),r.addEventListener("squeeze",b),r.addEventListener("squeezestart",b),r.addEventListener("squeezeend",b),r.addEventListener("end",w),r.addEventListener("inputsourceschange",C),m.xrCompatible!==!0&&await e.makeXRCompatible(),I=t.getPixelRatio(),t.getSize(G),r.renderState.layers===void 0){const j={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,e,j),r.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),T=new Ci(d.framebufferWidth,d.framebufferHeight,{format:fn,type:ei,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let j=null,it=null,nt=null;m.depth&&(nt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,j=m.stencil?wr:dr,it=m.stencil?br:Mr);const vt={colorFormat:e.RGBA8,depthFormat:nt,scaleFactor:s};f=new XRWebGLBinding(r,e),h=f.createProjectionLayer(vt),r.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),T=new Ci(h.textureWidth,h.textureHeight,{format:fn,type:ei,depthTexture:new vf(h.textureWidth,h.textureHeight,it,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(a),St.setContext(r),St.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function C(q){for(let j=0;j<q.removed.length;j++){const it=q.removed[j],nt=R.indexOf(it);nt>=0&&(R[nt]=null,E[nt].disconnect(it))}for(let j=0;j<q.added.length;j++){const it=q.added[j];let nt=R.indexOf(it);if(nt===-1){for(let ht=0;ht<E.length;ht++)if(ht>=R.length){R.push(it),nt=ht;break}else if(R[ht]===null){R[ht]=it,nt=ht;break}if(nt===-1)break}const vt=E[nt];vt&&vt.connect(it)}}const A=new X,F=new X;function O(q,j,it){A.setFromMatrixPosition(j.matrixWorld),F.setFromMatrixPosition(it.matrixWorld);const nt=A.distanceTo(F),vt=j.projectionMatrix.elements,ht=it.projectionMatrix.elements,xt=vt[14]/(vt[10]-1),N=vt[14]/(vt[10]+1),Rt=(vt[9]+1)/vt[5],Ut=(vt[9]-1)/vt[5],Jt=(vt[8]-1)/vt[0],Tt=(ht[8]+1)/ht[0],qt=xt*Jt,L=xt*Tt,z=nt/(-Jt+Tt),Y=z*-Jt;j.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Y),q.translateZ(z),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert();const M=xt+z,v=N+z,H=qt-Y,Q=L+(nt-Y),ot=Rt*N/v*M,at=Ut*N/v*M;q.projectionMatrix.makePerspective(H,Q,ot,at,M,v),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}function J(q,j){j===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(j.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(r===null)return;_.texture!==null&&(q.near=_.depthNear,q.far=_.depthFar),x.near=V.near=D.near=q.near,x.far=V.far=D.far=q.far,(U!==x.near||P!==x.far)&&(r.updateRenderState({depthNear:x.near,depthFar:x.far}),U=x.near,P=x.far,D.near=U,D.far=P,V.near=U,V.far=P,D.updateProjectionMatrix(),V.updateProjectionMatrix(),q.updateProjectionMatrix());const j=q.parent,it=x.cameras;J(x,j);for(let nt=0;nt<it.length;nt++)J(it[nt],j);it.length===2?O(x,D,V):x.projectionMatrix.copy(D.projectionMatrix),Z(q,x,j)};function Z(q,j,it){it===null?q.matrix.copy(j.matrixWorld):(q.matrix.copy(it.matrixWorld),q.matrix.invert(),q.matrix.multiply(j.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(j.projectionMatrix),q.projectionMatrixInverse.copy(j.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=ss*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(h===null&&d===null))return c},this.setFoveation=function(q){c=q,h!==null&&(h.fixedFoveation=q),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=q)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(x)};let et=null;function st(q,j){if(u=j.getViewerPose(l||o),g=j,u!==null){const it=u.views;d!==null&&(t.setRenderTargetFramebuffer(T,d.framebuffer),t.setRenderTarget(T));let nt=!1;it.length!==x.cameras.length&&(x.cameras.length=0,nt=!0);for(let ht=0;ht<it.length;ht++){const xt=it[ht];let N=null;if(d!==null)N=d.getViewport(xt);else{const Ut=f.getViewSubImage(h,xt);N=Ut.viewport,ht===0&&(t.setRenderTargetTextures(T,Ut.colorTexture,h.ignoreDepthValues?void 0:Ut.depthStencilTexture),t.setRenderTarget(T))}let Rt=y[ht];Rt===void 0&&(Rt=new Xe,Rt.layers.enable(ht),Rt.viewport=new _e,y[ht]=Rt),Rt.matrix.fromArray(xt.transform.matrix),Rt.matrix.decompose(Rt.position,Rt.quaternion,Rt.scale),Rt.projectionMatrix.fromArray(xt.projectionMatrix),Rt.projectionMatrixInverse.copy(Rt.projectionMatrix).invert(),Rt.viewport.set(N.x,N.y,N.width,N.height),ht===0&&(x.matrix.copy(Rt.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),nt===!0&&x.cameras.push(Rt)}const vt=r.enabledFeatures;if(vt&&vt.includes("depth-sensing")){const ht=f.getDepthInformation(it[0]);ht&&ht.isValid&&ht.texture&&_.init(t,ht,r.renderState)}}for(let it=0;it<E.length;it++){const nt=R[it],vt=E[it];nt!==null&&vt!==void 0&&vt.update(nt,j,l||o)}et&&et(q,j),j.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:j}),g=null}const St=new gf;St.setAnimationLoop(st),this.setAnimationLoop=function(q){et=q},this.dispose=function(){}}}const hi=new dn,wx=new ie;function Tx(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,df(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,T,E,R){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),f(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),h(m,p),p.isMeshPhysicalMaterial&&d(m,p,R)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,T,E):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Pe&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Pe&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const T=t.get(p),E=T.envMap,R=T.envMapRotation;E&&(m.envMap.value=E,hi.copy(R),hi.x*=-1,hi.y*=-1,hi.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(hi.y*=-1,hi.z*=-1),m.envMapRotation.value.setFromMatrix4(wx.makeRotationFromEuler(hi)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,T,E){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*T,m.scale.value=E*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,T){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Pe&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const T=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Ax(i,t,e,n){let r={},s={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(T,E){const R=E.program;n.uniformBlockBinding(T,R)}function l(T,E){let R=r[T.id];R===void 0&&(g(T),R=u(T),r[T.id]=R,T.addEventListener("dispose",m));const G=E.program;n.updateUBOMapping(T,G);const I=t.render.frame;s[T.id]!==I&&(h(T),s[T.id]=I)}function u(T){const E=f();T.__bindingPointIndex=E;const R=i.createBuffer(),G=T.__size,I=T.usage;return i.bindBuffer(i.UNIFORM_BUFFER,R),i.bufferData(i.UNIFORM_BUFFER,G,I),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,R),R}function f(){for(let T=0;T<a;T++)if(o.indexOf(T)===-1)return o.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(T){const E=r[T.id],R=T.uniforms,G=T.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let I=0,D=R.length;I<D;I++){const V=Array.isArray(R[I])?R[I]:[R[I]];for(let y=0,x=V.length;y<x;y++){const U=V[y];if(d(U,I,y,G)===!0){const P=U.__offset,b=Array.isArray(U.value)?U.value:[U.value];let w=0;for(let C=0;C<b.length;C++){const A=b[C],F=_(A);typeof A=="number"||typeof A=="boolean"?(U.__data[0]=A,i.bufferSubData(i.UNIFORM_BUFFER,P+w,U.__data)):A.isMatrix3?(U.__data[0]=A.elements[0],U.__data[1]=A.elements[1],U.__data[2]=A.elements[2],U.__data[3]=0,U.__data[4]=A.elements[3],U.__data[5]=A.elements[4],U.__data[6]=A.elements[5],U.__data[7]=0,U.__data[8]=A.elements[6],U.__data[9]=A.elements[7],U.__data[10]=A.elements[8],U.__data[11]=0):(A.toArray(U.__data,w),w+=F.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,P,U.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(T,E,R,G){const I=T.value,D=E+"_"+R;if(G[D]===void 0)return typeof I=="number"||typeof I=="boolean"?G[D]=I:G[D]=I.clone(),!0;{const V=G[D];if(typeof I=="number"||typeof I=="boolean"){if(V!==I)return G[D]=I,!0}else if(V.equals(I)===!1)return V.copy(I),!0}return!1}function g(T){const E=T.uniforms;let R=0;const G=16;for(let D=0,V=E.length;D<V;D++){const y=Array.isArray(E[D])?E[D]:[E[D]];for(let x=0,U=y.length;x<U;x++){const P=y[x],b=Array.isArray(P.value)?P.value:[P.value];for(let w=0,C=b.length;w<C;w++){const A=b[w],F=_(A),O=R%G;O!==0&&G-O<F.boundary&&(R+=G-O),P.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=R,R+=F.storage}}}const I=R%G;return I>0&&(R+=G-I),T.__size=R,T.__cache={},this}function _(T){const E={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(E.boundary=4,E.storage=4):T.isVector2?(E.boundary=8,E.storage=8):T.isVector3||T.isColor?(E.boundary=16,E.storage=12):T.isVector4?(E.boundary=16,E.storage=16):T.isMatrix3?(E.boundary=48,E.storage=48):T.isMatrix4?(E.boundary=64,E.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),E}function m(T){const E=T.target;E.removeEventListener("dispose",m);const R=o.indexOf(E.__bindingPointIndex);o.splice(R,1),i.deleteBuffer(r[E.id]),delete r[E.id],delete s[E.id]}function p(){for(const T in r)i.deleteBuffer(r[T]);o=[],r={},s={}}return{bind:c,update:l,dispose:p}}class Rx{constructor(t={}){const{canvas:e=ym(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=t;this.isWebGLRenderer=!0;let h;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=n.getContextAttributes().alpha}else h=o;const d=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const p=[],T=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=We,this.toneMapping=Zn,this.toneMappingExposure=1;const E=this;let R=!1,G=0,I=0,D=null,V=-1,y=null;const x=new _e,U=new _e;let P=null;const b=new Nt(0);let w=0,C=e.width,A=e.height,F=1,O=null,J=null;const Z=new _e(0,0,C,A),et=new _e(0,0,C,A);let st=!1;const St=new zc;let q=!1,j=!1;const it=new ie,nt=new X,vt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ht=!1;function xt(){return D===null?F:1}let N=n;function Rt(S,k){return e.getContext(S,k)}try{const S={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Nc}`),e.addEventListener("webglcontextlost",gt,!1),e.addEventListener("webglcontextrestored",tt,!1),e.addEventListener("webglcontextcreationerror",rt,!1),N===null){const k="webgl2";if(N=Rt(k,S),N===null)throw Rt(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let Ut,Jt,Tt,qt,L,z,Y,M,v,H,Q,ot,at,wt,dt,pt,zt,ct,Mt,Gt,Pt,mt,Ht,Wt;function ae(){Ut=new O0(N),Ut.init(),mt=new vx(N,Ut),Jt=new L0(N,Ut,t,mt),Tt=new gx(N),qt=new k0(N),L=new nx,z=new _x(N,Ut,Tt,L,Jt,mt,qt),Y=new D0(E),M=new N0(E),v=new qm(N),Ht=new R0(N,v),H=new F0(N,v,qt,Ht),Q=new H0(N,H,v,qt),Mt=new z0(N,Jt,z),pt=new P0(L),ot=new ex(E,Y,M,Ut,Jt,Ht,pt),at=new Tx(E,L),wt=new rx,dt=new ux(Ut),ct=new A0(E,Y,M,Tt,Q,h,c),zt=new mx(E,Q,Jt),Wt=new Ax(N,qt,Jt,Tt),Gt=new C0(N,Ut,qt),Pt=new B0(N,Ut,qt),qt.programs=ot.programs,E.capabilities=Jt,E.extensions=Ut,E.properties=L,E.renderLists=wt,E.shadowMap=zt,E.state=Tt,E.info=qt}ae();const B=new bx(E,N);this.xr=B,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const S=Ut.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=Ut.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return F},this.setPixelRatio=function(S){S!==void 0&&(F=S,this.setSize(C,A,!1))},this.getSize=function(S){return S.set(C,A)},this.setSize=function(S,k,K=!0){if(B.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}C=S,A=k,e.width=Math.floor(S*F),e.height=Math.floor(k*F),K===!0&&(e.style.width=S+"px",e.style.height=k+"px"),this.setViewport(0,0,S,k)},this.getDrawingBufferSize=function(S){return S.set(C*F,A*F).floor()},this.setDrawingBufferSize=function(S,k,K){C=S,A=k,F=K,e.width=Math.floor(S*K),e.height=Math.floor(k*K),this.setViewport(0,0,S,k)},this.getCurrentViewport=function(S){return S.copy(x)},this.getViewport=function(S){return S.copy(Z)},this.setViewport=function(S,k,K,$){S.isVector4?Z.set(S.x,S.y,S.z,S.w):Z.set(S,k,K,$),Tt.viewport(x.copy(Z).multiplyScalar(F).round())},this.getScissor=function(S){return S.copy(et)},this.setScissor=function(S,k,K,$){S.isVector4?et.set(S.x,S.y,S.z,S.w):et.set(S,k,K,$),Tt.scissor(U.copy(et).multiplyScalar(F).round())},this.getScissorTest=function(){return st},this.setScissorTest=function(S){Tt.setScissorTest(st=S)},this.setOpaqueSort=function(S){O=S},this.setTransparentSort=function(S){J=S},this.getClearColor=function(S){return S.copy(ct.getClearColor())},this.setClearColor=function(){ct.setClearColor.apply(ct,arguments)},this.getClearAlpha=function(){return ct.getClearAlpha()},this.setClearAlpha=function(){ct.setClearAlpha.apply(ct,arguments)},this.clear=function(S=!0,k=!0,K=!0){let $=0;if(S){let W=!1;if(D!==null){const lt=D.texture.format;W=lt===ef||lt===tf||lt===Qh}if(W){const lt=D.texture.type,_t=lt===ei||lt===Mr||lt===xo||lt===br||lt===Zh||lt===Jh,yt=ct.getClearColor(),Et=ct.getClearAlpha(),Ct=yt.r,Lt=yt.g,At=yt.b;_t?(d[0]=Ct,d[1]=Lt,d[2]=At,d[3]=Et,N.clearBufferuiv(N.COLOR,0,d)):(g[0]=Ct,g[1]=Lt,g[2]=At,g[3]=Et,N.clearBufferiv(N.COLOR,0,g))}else $|=N.COLOR_BUFFER_BIT}k&&($|=N.DEPTH_BUFFER_BIT),K&&($|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",gt,!1),e.removeEventListener("webglcontextrestored",tt,!1),e.removeEventListener("webglcontextcreationerror",rt,!1),wt.dispose(),dt.dispose(),L.dispose(),Y.dispose(),M.dispose(),Q.dispose(),Ht.dispose(),Wt.dispose(),ot.dispose(),B.dispose(),B.removeEventListener("sessionstart",on),B.removeEventListener("sessionend",an),ri.stop()};function gt(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function tt(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const S=qt.autoReset,k=zt.enabled,K=zt.autoUpdate,$=zt.needsUpdate,W=zt.type;ae(),qt.autoReset=S,zt.enabled=k,zt.autoUpdate=K,zt.needsUpdate=$,zt.type=W}function rt(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function ut(S){const k=S.target;k.removeEventListener("dispose",ut),Dt(k)}function Dt(S){Yt(S),L.remove(S)}function Yt(S){const k=L.get(S).programs;k!==void 0&&(k.forEach(function(K){ot.releaseProgram(K)}),S.isShaderMaterial&&ot.releaseShaderCache(S))}this.renderBufferDirect=function(S,k,K,$,W,lt){k===null&&(k=vt);const _t=W.isMesh&&W.matrixWorld.determinant()<0,yt=jd(S,k,K,$,W);Tt.setMaterial($,_t);let Et=K.index,Ct=1;if($.wireframe===!0){if(Et=H.getWireframeAttribute(K),Et===void 0)return;Ct=2}const Lt=K.drawRange,At=K.attributes.position;let Kt=Lt.start*Ct,se=(Lt.start+Lt.count)*Ct;lt!==null&&(Kt=Math.max(Kt,lt.start*Ct),se=Math.min(se,(lt.start+lt.count)*Ct)),Et!==null?(Kt=Math.max(Kt,0),se=Math.min(se,Et.count)):At!=null&&(Kt=Math.max(Kt,0),se=Math.min(se,At.count));const oe=se-Kt;if(oe<0||oe===1/0)return;Ht.setup(W,$,yt,K,Et);let Ie,$t=Gt;if(Et!==null&&(Ie=v.get(Et),$t=Pt,$t.setIndex(Ie)),W.isMesh)$.wireframe===!0?(Tt.setLineWidth($.wireframeLinewidth*xt()),$t.setMode(N.LINES)):$t.setMode(N.TRIANGLES);else if(W.isLine){let bt=$.linewidth;bt===void 0&&(bt=1),Tt.setLineWidth(bt*xt()),W.isLineSegments?$t.setMode(N.LINES):W.isLineLoop?$t.setMode(N.LINE_LOOP):$t.setMode(N.LINE_STRIP)}else W.isPoints?$t.setMode(N.POINTS):W.isSprite&&$t.setMode(N.TRIANGLES);if(W.isBatchedMesh)W._multiDrawInstances!==null?$t.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances):$t.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else if(W.isInstancedMesh)$t.renderInstances(Kt,oe,W.count);else if(K.isInstancedBufferGeometry){const bt=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Ee=Math.min(K.instanceCount,bt);$t.renderInstances(Kt,oe,Ee)}else $t.render(Kt,oe)};function ce(S,k,K){S.transparent===!0&&S.side===Qe&&S.forceSinglePass===!1?(S.side=Pe,S.needsUpdate=!0,Ss(S,k,K),S.side=ti,S.needsUpdate=!0,Ss(S,k,K),S.side=Qe):Ss(S,k,K)}this.compile=function(S,k,K=null){K===null&&(K=S),m=dt.get(K),m.init(k),T.push(m),K.traverseVisible(function(W){W.isLight&&W.layers.test(k.layers)&&(m.pushLight(W),W.castShadow&&m.pushShadow(W))}),S!==K&&S.traverseVisible(function(W){W.isLight&&W.layers.test(k.layers)&&(m.pushLight(W),W.castShadow&&m.pushShadow(W))}),m.setupLights();const $=new Set;return S.traverse(function(W){const lt=W.material;if(lt)if(Array.isArray(lt))for(let _t=0;_t<lt.length;_t++){const yt=lt[_t];ce(yt,K,W),$.add(yt)}else ce(lt,K,W),$.add(lt)}),T.pop(),m=null,$},this.compileAsync=function(S,k,K=null){const $=this.compile(S,k,K);return new Promise(W=>{function lt(){if($.forEach(function(_t){L.get(_t).currentProgram.isReady()&&$.delete(_t)}),$.size===0){W(S);return}setTimeout(lt,10)}Ut.get("KHR_parallel_shader_compile")!==null?lt():setTimeout(lt,10)})};let de=null;function Qt(S){de&&de(S)}function on(){ri.stop()}function an(){ri.start()}const ri=new gf;ri.setAnimationLoop(Qt),typeof self<"u"&&ri.setContext(self),this.setAnimationLoop=function(S){de=S,B.setAnimationLoop(S),S===null?ri.stop():ri.start()},B.addEventListener("sessionstart",on),B.addEventListener("sessionend",an),this.render=function(S,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),B.enabled===!0&&B.isPresenting===!0&&(B.cameraAutoUpdate===!0&&B.updateCamera(k),k=B.getCamera()),S.isScene===!0&&S.onBeforeRender(E,S,k,D),m=dt.get(S,T.length),m.init(k),T.push(m),it.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),St.setFromProjectionMatrix(it),j=this.localClippingEnabled,q=pt.init(this.clippingPlanes,j),_=wt.get(S,p.length),_.init(),p.push(_),B.enabled===!0&&B.isPresenting===!0){const lt=E.xr.getDepthSensingMesh();lt!==null&&Qo(lt,k,-1/0,E.sortObjects)}Qo(S,k,0,E.sortObjects),_.finish(),E.sortObjects===!0&&_.sort(O,J),ht=B.enabled===!1||B.isPresenting===!1||B.hasDepthSensing()===!1,ht&&ct.addToRenderList(_,S),this.info.render.frame++,q===!0&&pt.beginShadows();const K=m.state.shadowsArray;zt.render(K,S,k),q===!0&&pt.endShadows(),this.info.autoReset===!0&&this.info.reset();const $=_.opaque,W=_.transmissive;if(m.setupLights(),k.isArrayCamera){const lt=k.cameras;if(W.length>0)for(let _t=0,yt=lt.length;_t<yt;_t++){const Et=lt[_t];dl($,W,S,Et)}ht&&ct.render(S);for(let _t=0,yt=lt.length;_t<yt;_t++){const Et=lt[_t];fl(_,S,Et,Et.viewport)}}else W.length>0&&dl($,W,S,k),ht&&ct.render(S),fl(_,S,k);D!==null&&(z.updateMultisampleRenderTarget(D),z.updateRenderTargetMipmap(D)),S.isScene===!0&&S.onAfterRender(E,S,k),Ht.resetDefaultState(),V=-1,y=null,T.pop(),T.length>0?(m=T[T.length-1],q===!0&&pt.setGlobalState(E.clippingPlanes,m.state.camera)):m=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function Qo(S,k,K,$){if(S.visible===!1)return;if(S.layers.test(k.layers)){if(S.isGroup)K=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(k);else if(S.isLight)m.pushLight(S),S.castShadow&&m.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||St.intersectsSprite(S)){$&&nt.setFromMatrixPosition(S.matrixWorld).applyMatrix4(it);const _t=Q.update(S),yt=S.material;yt.visible&&_.push(S,_t,yt,K,nt.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||St.intersectsObject(S))){const _t=Q.update(S),yt=S.material;if($&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),nt.copy(S.boundingSphere.center)):(_t.boundingSphere===null&&_t.computeBoundingSphere(),nt.copy(_t.boundingSphere.center)),nt.applyMatrix4(S.matrixWorld).applyMatrix4(it)),Array.isArray(yt)){const Et=_t.groups;for(let Ct=0,Lt=Et.length;Ct<Lt;Ct++){const At=Et[Ct],Kt=yt[At.materialIndex];Kt&&Kt.visible&&_.push(S,_t,Kt,K,nt.z,At)}}else yt.visible&&_.push(S,_t,yt,K,nt.z,null)}}const lt=S.children;for(let _t=0,yt=lt.length;_t<yt;_t++)Qo(lt[_t],k,K,$)}function fl(S,k,K,$){const W=S.opaque,lt=S.transmissive,_t=S.transparent;m.setupLightsView(K),q===!0&&pt.setGlobalState(E.clippingPlanes,K),$&&Tt.viewport(x.copy($)),W.length>0&&ys(W,k,K),lt.length>0&&ys(lt,k,K),_t.length>0&&ys(_t,k,K),Tt.buffers.depth.setTest(!0),Tt.buffers.depth.setMask(!0),Tt.buffers.color.setMask(!0),Tt.setPolygonOffset(!1)}function dl(S,k,K,$){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[$.id]===void 0&&(m.state.transmissionRenderTarget[$.id]=new Ci(1,1,{generateMipmaps:!0,type:Ut.has("EXT_color_buffer_half_float")||Ut.has("EXT_color_buffer_float")?Ho:ei,minFilter:xi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Zt.workingColorSpace}));const lt=m.state.transmissionRenderTarget[$.id],_t=$.viewport||x;lt.setSize(_t.z,_t.w);const yt=E.getRenderTarget();E.setRenderTarget(lt),E.getClearColor(b),w=E.getClearAlpha(),w<1&&E.setClearColor(16777215,.5),ht?ct.render(K):E.clear();const Et=E.toneMapping;E.toneMapping=Zn;const Ct=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),m.setupLightsView($),q===!0&&pt.setGlobalState(E.clippingPlanes,$),ys(S,K,$),z.updateMultisampleRenderTarget(lt),z.updateRenderTargetMipmap(lt),Ut.has("WEBGL_multisampled_render_to_texture")===!1){let Lt=!1;for(let At=0,Kt=k.length;At<Kt;At++){const se=k[At],oe=se.object,Ie=se.geometry,$t=se.material,bt=se.group;if($t.side===Qe&&oe.layers.test($.layers)){const Ee=$t.side;$t.side=Pe,$t.needsUpdate=!0,pl(oe,K,$,Ie,$t,bt),$t.side=Ee,$t.needsUpdate=!0,Lt=!0}}Lt===!0&&(z.updateMultisampleRenderTarget(lt),z.updateRenderTargetMipmap(lt))}E.setRenderTarget(yt),E.setClearColor(b,w),Ct!==void 0&&($.viewport=Ct),E.toneMapping=Et}function ys(S,k,K){const $=k.isScene===!0?k.overrideMaterial:null;for(let W=0,lt=S.length;W<lt;W++){const _t=S[W],yt=_t.object,Et=_t.geometry,Ct=$===null?_t.material:$,Lt=_t.group;yt.layers.test(K.layers)&&pl(yt,k,K,Et,Ct,Lt)}}function pl(S,k,K,$,W,lt){S.onBeforeRender(E,k,K,$,W,lt),S.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),W.onBeforeRender(E,k,K,$,S,lt),W.transparent===!0&&W.side===Qe&&W.forceSinglePass===!1?(W.side=Pe,W.needsUpdate=!0,E.renderBufferDirect(K,k,$,W,S,lt),W.side=ti,W.needsUpdate=!0,E.renderBufferDirect(K,k,$,W,S,lt),W.side=Qe):E.renderBufferDirect(K,k,$,W,S,lt),S.onAfterRender(E,k,K,$,W,lt)}function Ss(S,k,K){k.isScene!==!0&&(k=vt);const $=L.get(S),W=m.state.lights,lt=m.state.shadowsArray,_t=W.state.version,yt=ot.getParameters(S,W.state,lt,k,K),Et=ot.getProgramCacheKey(yt);let Ct=$.programs;$.environment=S.isMeshStandardMaterial?k.environment:null,$.fog=k.fog,$.envMap=(S.isMeshStandardMaterial?M:Y).get(S.envMap||$.environment),$.envMapRotation=$.environment!==null&&S.envMap===null?k.environmentRotation:S.envMapRotation,Ct===void 0&&(S.addEventListener("dispose",ut),Ct=new Map,$.programs=Ct);let Lt=Ct.get(Et);if(Lt!==void 0){if($.currentProgram===Lt&&$.lightsStateVersion===_t)return gl(S,yt),Lt}else yt.uniforms=ot.getUniforms(S),S.onBuild(K,yt,E),S.onBeforeCompile(yt,E),Lt=ot.acquireProgram(yt,Et),Ct.set(Et,Lt),$.uniforms=yt.uniforms;const At=$.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(At.clippingPlanes=pt.uniform),gl(S,yt),$.needsLights=Jd(S),$.lightsStateVersion=_t,$.needsLights&&(At.ambientLightColor.value=W.state.ambient,At.lightProbe.value=W.state.probe,At.directionalLights.value=W.state.directional,At.directionalLightShadows.value=W.state.directionalShadow,At.spotLights.value=W.state.spot,At.spotLightShadows.value=W.state.spotShadow,At.rectAreaLights.value=W.state.rectArea,At.ltc_1.value=W.state.rectAreaLTC1,At.ltc_2.value=W.state.rectAreaLTC2,At.pointLights.value=W.state.point,At.pointLightShadows.value=W.state.pointShadow,At.hemisphereLights.value=W.state.hemi,At.directionalShadowMap.value=W.state.directionalShadowMap,At.directionalShadowMatrix.value=W.state.directionalShadowMatrix,At.spotShadowMap.value=W.state.spotShadowMap,At.spotLightMatrix.value=W.state.spotLightMatrix,At.spotLightMap.value=W.state.spotLightMap,At.pointShadowMap.value=W.state.pointShadowMap,At.pointShadowMatrix.value=W.state.pointShadowMatrix),$.currentProgram=Lt,$.uniformsList=null,Lt}function ml(S){if(S.uniformsList===null){const k=S.currentProgram.getUniforms();S.uniformsList=lo.seqWithValue(k.seq,S.uniforms)}return S.uniformsList}function gl(S,k){const K=L.get(S);K.outputColorSpace=k.outputColorSpace,K.batching=k.batching,K.batchingColor=k.batchingColor,K.instancing=k.instancing,K.instancingColor=k.instancingColor,K.instancingMorph=k.instancingMorph,K.skinning=k.skinning,K.morphTargets=k.morphTargets,K.morphNormals=k.morphNormals,K.morphColors=k.morphColors,K.morphTargetsCount=k.morphTargetsCount,K.numClippingPlanes=k.numClippingPlanes,K.numIntersection=k.numClipIntersection,K.vertexAlphas=k.vertexAlphas,K.vertexTangents=k.vertexTangents,K.toneMapping=k.toneMapping}function jd(S,k,K,$,W){k.isScene!==!0&&(k=vt),z.resetTextureUnits();const lt=k.fog,_t=$.isMeshStandardMaterial?k.environment:null,yt=D===null?E.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:ii,Et=($.isMeshStandardMaterial?M:Y).get($.envMap||_t),Ct=$.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,Lt=!!K.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),At=!!K.morphAttributes.position,Kt=!!K.morphAttributes.normal,se=!!K.morphAttributes.color;let oe=Zn;$.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(oe=E.toneMapping);const Ie=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,$t=Ie!==void 0?Ie.length:0,bt=L.get($),Ee=m.state.lights;if(q===!0&&(j===!0||S!==y)){const ze=S===y&&$.id===V;pt.setState($,S,ze)}let te=!1;$.version===bt.__version?(bt.needsLights&&bt.lightsStateVersion!==Ee.state.version||bt.outputColorSpace!==yt||W.isBatchedMesh&&bt.batching===!1||!W.isBatchedMesh&&bt.batching===!0||W.isBatchedMesh&&bt.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&bt.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&bt.instancing===!1||!W.isInstancedMesh&&bt.instancing===!0||W.isSkinnedMesh&&bt.skinning===!1||!W.isSkinnedMesh&&bt.skinning===!0||W.isInstancedMesh&&bt.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&bt.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&bt.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&bt.instancingMorph===!1&&W.morphTexture!==null||bt.envMap!==Et||$.fog===!0&&bt.fog!==lt||bt.numClippingPlanes!==void 0&&(bt.numClippingPlanes!==pt.numPlanes||bt.numIntersection!==pt.numIntersection)||bt.vertexAlphas!==Ct||bt.vertexTangents!==Lt||bt.morphTargets!==At||bt.morphNormals!==Kt||bt.morphColors!==se||bt.toneMapping!==oe||bt.morphTargetsCount!==$t)&&(te=!0):(te=!0,bt.__version=$.version);let gn=bt.currentProgram;te===!0&&(gn=Ss($,k,W));let Es=!1,si=!1,ta=!1;const pe=gn.getUniforms(),Fn=bt.uniforms;if(Tt.useProgram(gn.program)&&(Es=!0,si=!0,ta=!0),$.id!==V&&(V=$.id,si=!0),Es||y!==S){pe.setValue(N,"projectionMatrix",S.projectionMatrix),pe.setValue(N,"viewMatrix",S.matrixWorldInverse);const ze=pe.map.cameraPosition;ze!==void 0&&ze.setValue(N,nt.setFromMatrixPosition(S.matrixWorld)),Jt.logarithmicDepthBuffer&&pe.setValue(N,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&pe.setValue(N,"isOrthographic",S.isOrthographicCamera===!0),y!==S&&(y=S,si=!0,ta=!0)}if(W.isSkinnedMesh){pe.setOptional(N,W,"bindMatrix"),pe.setOptional(N,W,"bindMatrixInverse");const ze=W.skeleton;ze&&(ze.boneTexture===null&&ze.computeBoneTexture(),pe.setValue(N,"boneTexture",ze.boneTexture,z))}W.isBatchedMesh&&(pe.setOptional(N,W,"batchingTexture"),pe.setValue(N,"batchingTexture",W._matricesTexture,z),pe.setOptional(N,W,"batchingColorTexture"),W._colorsTexture!==null&&pe.setValue(N,"batchingColorTexture",W._colorsTexture,z));const ea=K.morphAttributes;if((ea.position!==void 0||ea.normal!==void 0||ea.color!==void 0)&&Mt.update(W,K,gn),(si||bt.receiveShadow!==W.receiveShadow)&&(bt.receiveShadow=W.receiveShadow,pe.setValue(N,"receiveShadow",W.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(Fn.envMap.value=Et,Fn.flipEnvMap.value=Et.isCubeTexture&&Et.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&k.environment!==null&&(Fn.envMapIntensity.value=k.environmentIntensity),si&&(pe.setValue(N,"toneMappingExposure",E.toneMappingExposure),bt.needsLights&&Zd(Fn,ta),lt&&$.fog===!0&&at.refreshFogUniforms(Fn,lt),at.refreshMaterialUniforms(Fn,$,F,A,m.state.transmissionRenderTarget[S.id]),lo.upload(N,ml(bt),Fn,z)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(lo.upload(N,ml(bt),Fn,z),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&pe.setValue(N,"center",W.center),pe.setValue(N,"modelViewMatrix",W.modelViewMatrix),pe.setValue(N,"normalMatrix",W.normalMatrix),pe.setValue(N,"modelMatrix",W.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const ze=$.uniformsGroups;for(let na=0,Qd=ze.length;na<Qd;na++){const _l=ze[na];Wt.update(_l,gn),Wt.bind(_l,gn)}}return gn}function Zd(S,k){S.ambientLightColor.needsUpdate=k,S.lightProbe.needsUpdate=k,S.directionalLights.needsUpdate=k,S.directionalLightShadows.needsUpdate=k,S.pointLights.needsUpdate=k,S.pointLightShadows.needsUpdate=k,S.spotLights.needsUpdate=k,S.spotLightShadows.needsUpdate=k,S.rectAreaLights.needsUpdate=k,S.hemisphereLights.needsUpdate=k}function Jd(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(S,k,K){L.get(S.texture).__webglTexture=k,L.get(S.depthTexture).__webglTexture=K;const $=L.get(S);$.__hasExternalTextures=!0,$.__autoAllocateDepthBuffer=K===void 0,$.__autoAllocateDepthBuffer||Ut.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),$.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,k){const K=L.get(S);K.__webglFramebuffer=k,K.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(S,k=0,K=0){D=S,G=k,I=K;let $=!0,W=null,lt=!1,_t=!1;if(S){const Et=L.get(S);Et.__useDefaultFramebuffer!==void 0?(Tt.bindFramebuffer(N.FRAMEBUFFER,null),$=!1):Et.__webglFramebuffer===void 0?z.setupRenderTarget(S):Et.__hasExternalTextures&&z.rebindTextures(S,L.get(S.texture).__webglTexture,L.get(S.depthTexture).__webglTexture);const Ct=S.texture;(Ct.isData3DTexture||Ct.isDataArrayTexture||Ct.isCompressedArrayTexture)&&(_t=!0);const Lt=L.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Lt[k])?W=Lt[k][K]:W=Lt[k],lt=!0):S.samples>0&&z.useMultisampledRTT(S)===!1?W=L.get(S).__webglMultisampledFramebuffer:Array.isArray(Lt)?W=Lt[K]:W=Lt,x.copy(S.viewport),U.copy(S.scissor),P=S.scissorTest}else x.copy(Z).multiplyScalar(F).floor(),U.copy(et).multiplyScalar(F).floor(),P=st;if(Tt.bindFramebuffer(N.FRAMEBUFFER,W)&&$&&Tt.drawBuffers(S,W),Tt.viewport(x),Tt.scissor(U),Tt.setScissorTest(P),lt){const Et=L.get(S.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+k,Et.__webglTexture,K)}else if(_t){const Et=L.get(S.texture),Ct=k||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,Et.__webglTexture,K||0,Ct)}V=-1},this.readRenderTargetPixels=function(S,k,K,$,W,lt,_t){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let yt=L.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&_t!==void 0&&(yt=yt[_t]),yt){Tt.bindFramebuffer(N.FRAMEBUFFER,yt);try{const Et=S.texture,Ct=Et.format,Lt=Et.type;if(!Jt.textureFormatReadable(Ct)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Jt.textureTypeReadable(Lt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=S.width-$&&K>=0&&K<=S.height-W&&N.readPixels(k,K,$,W,mt.convert(Ct),mt.convert(Lt),lt)}finally{const Et=D!==null?L.get(D).__webglFramebuffer:null;Tt.bindFramebuffer(N.FRAMEBUFFER,Et)}}},this.readRenderTargetPixelsAsync=async function(S,k,K,$,W,lt,_t){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let yt=L.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&_t!==void 0&&(yt=yt[_t]),yt){Tt.bindFramebuffer(N.FRAMEBUFFER,yt);try{const Et=S.texture,Ct=Et.format,Lt=Et.type;if(!Jt.textureFormatReadable(Ct))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Jt.textureTypeReadable(Lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=S.width-$&&K>=0&&K<=S.height-W){const At=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,At),N.bufferData(N.PIXEL_PACK_BUFFER,lt.byteLength,N.STREAM_READ),N.readPixels(k,K,$,W,mt.convert(Ct),mt.convert(Lt),0),N.flush();const Kt=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);await Sm(N,Kt,4);try{N.bindBuffer(N.PIXEL_PACK_BUFFER,At),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,lt)}finally{N.deleteBuffer(At),N.deleteSync(Kt)}return lt}}finally{const Et=D!==null?L.get(D).__webglFramebuffer:null;Tt.bindFramebuffer(N.FRAMEBUFFER,Et)}}},this.copyFramebufferToTexture=function(S,k=null,K=0){S.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,S=arguments[1]);const $=Math.pow(2,-K),W=Math.floor(S.image.width*$),lt=Math.floor(S.image.height*$),_t=k!==null?k.x:0,yt=k!==null?k.y:0;z.setTexture2D(S,0),N.copyTexSubImage2D(N.TEXTURE_2D,K,0,0,_t,yt,W,lt),Tt.unbindTexture()},this.copyTextureToTexture=function(S,k,K=null,$=null,W=0){S.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),$=arguments[0]||null,S=arguments[1],k=arguments[2],W=arguments[3]||0,K=null);let lt,_t,yt,Et,Ct,Lt;K!==null?(lt=K.max.x-K.min.x,_t=K.max.y-K.min.y,yt=K.min.x,Et=K.min.y):(lt=S.image.width,_t=S.image.height,yt=0,Et=0),$!==null?(Ct=$.x,Lt=$.y):(Ct=0,Lt=0);const At=mt.convert(k.format),Kt=mt.convert(k.type);z.setTexture2D(k,0),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,k.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,k.unpackAlignment);const se=N.getParameter(N.UNPACK_ROW_LENGTH),oe=N.getParameter(N.UNPACK_IMAGE_HEIGHT),Ie=N.getParameter(N.UNPACK_SKIP_PIXELS),$t=N.getParameter(N.UNPACK_SKIP_ROWS),bt=N.getParameter(N.UNPACK_SKIP_IMAGES),Ee=S.isCompressedTexture?S.mipmaps[W]:S.image;N.pixelStorei(N.UNPACK_ROW_LENGTH,Ee.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Ee.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,yt),N.pixelStorei(N.UNPACK_SKIP_ROWS,Et),S.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,W,Ct,Lt,lt,_t,At,Kt,Ee.data):S.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,W,Ct,Lt,Ee.width,Ee.height,At,Ee.data):N.texSubImage2D(N.TEXTURE_2D,W,Ct,Lt,At,Kt,Ee),N.pixelStorei(N.UNPACK_ROW_LENGTH,se),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,oe),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Ie),N.pixelStorei(N.UNPACK_SKIP_ROWS,$t),N.pixelStorei(N.UNPACK_SKIP_IMAGES,bt),W===0&&k.generateMipmaps&&N.generateMipmap(N.TEXTURE_2D),Tt.unbindTexture()},this.copyTextureToTexture3D=function(S,k,K=null,$=null,W=0){S.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),K=arguments[0]||null,$=arguments[1]||null,S=arguments[2],k=arguments[3],W=arguments[4]||0);let lt,_t,yt,Et,Ct,Lt,At,Kt,se;const oe=S.isCompressedTexture?S.mipmaps[W]:S.image;K!==null?(lt=K.max.x-K.min.x,_t=K.max.y-K.min.y,yt=K.max.z-K.min.z,Et=K.min.x,Ct=K.min.y,Lt=K.min.z):(lt=oe.width,_t=oe.height,yt=oe.depth,Et=0,Ct=0,Lt=0),$!==null?(At=$.x,Kt=$.y,se=$.z):(At=0,Kt=0,se=0);const Ie=mt.convert(k.format),$t=mt.convert(k.type);let bt;if(k.isData3DTexture)z.setTexture3D(k,0),bt=N.TEXTURE_3D;else if(k.isDataArrayTexture||k.isCompressedArrayTexture)z.setTexture2DArray(k,0),bt=N.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,k.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,k.unpackAlignment);const Ee=N.getParameter(N.UNPACK_ROW_LENGTH),te=N.getParameter(N.UNPACK_IMAGE_HEIGHT),gn=N.getParameter(N.UNPACK_SKIP_PIXELS),Es=N.getParameter(N.UNPACK_SKIP_ROWS),si=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,oe.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,oe.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Et),N.pixelStorei(N.UNPACK_SKIP_ROWS,Ct),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Lt),S.isDataTexture||S.isData3DTexture?N.texSubImage3D(bt,W,At,Kt,se,lt,_t,yt,Ie,$t,oe.data):k.isCompressedArrayTexture?N.compressedTexSubImage3D(bt,W,At,Kt,se,lt,_t,yt,Ie,oe.data):N.texSubImage3D(bt,W,At,Kt,se,lt,_t,yt,Ie,$t,oe),N.pixelStorei(N.UNPACK_ROW_LENGTH,Ee),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,te),N.pixelStorei(N.UNPACK_SKIP_PIXELS,gn),N.pixelStorei(N.UNPACK_SKIP_ROWS,Es),N.pixelStorei(N.UNPACK_SKIP_IMAGES,si),W===0&&k.generateMipmaps&&N.generateMipmap(bt),Tt.unbindTexture()},this.initRenderTarget=function(S){L.get(S).__webglFramebuffer===void 0&&z.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?z.setTextureCube(S,0):S.isData3DTexture?z.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?z.setTexture2DArray(S,0):z.setTexture2D(S,0),Tt.unbindTexture()},this.resetState=function(){G=0,I=0,D=null,Tt.reset(),Ht.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Cn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Fc?"display-p3":"srgb",e.unpackColorSpace=Zt.workingColorSpace===Vo?"display-p3":"srgb"}}class Vc{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Nt(t),this.near=e,this.far=n}clone(){return new Vc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Cx extends ve{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new dn,this.environmentIntensity=1,this.environmentRotation=new dn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Lx{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=lc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Pn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return kc("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let r=0,s=this.stride;r<s;r++)this.array[t+r]=e.array[n+r];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Pn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Pn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Me=new X;class To{constructor(t,e,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyMatrix4(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyNormalMatrix(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.transformDirection(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=en(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=jt(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=jt(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=jt(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=jt(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=jt(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=en(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=en(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=en(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=en(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=jt(e,this.array),n=jt(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=jt(e,this.array),n=jt(n,this.array),r=jt(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=jt(e,this.array),n=jt(n,this.array),r=jt(r,this.array),s=jt(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=r,this.data.array[t+3]=s,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return new rn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new To(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class bf extends Ii{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Nt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let er;const Vr=new X,nr=new X,ir=new X,rr=new kt,Gr=new kt,wf=new ie,Xs=new X,Wr=new X,qs=new X,Bu=new kt,Ua=new kt,ku=new kt;class Px extends ve{constructor(t=new bf){if(super(),this.isSprite=!0,this.type="Sprite",er===void 0){er=new sn;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Lx(e,5);er.setIndex([0,1,2,0,2,3]),er.setAttribute("position",new To(n,3,0,!1)),er.setAttribute("uv",new To(n,2,3,!1))}this.geometry=er,this.material=t,this.center=new kt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),nr.setFromMatrixScale(this.matrixWorld),wf.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ir.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&nr.multiplyScalar(-ir.z);const n=this.material.rotation;let r,s;n!==0&&(s=Math.cos(n),r=Math.sin(n));const o=this.center;Ys(Xs.set(-.5,-.5,0),ir,o,nr,r,s),Ys(Wr.set(.5,-.5,0),ir,o,nr,r,s),Ys(qs.set(.5,.5,0),ir,o,nr,r,s),Bu.set(0,0),Ua.set(1,0),ku.set(1,1);let a=t.ray.intersectTriangle(Xs,Wr,qs,!1,Vr);if(a===null&&(Ys(Wr.set(-.5,.5,0),ir,o,nr,r,s),Ua.set(0,1),a=t.ray.intersectTriangle(Xs,qs,Wr,!1,Vr),a===null))return;const c=t.ray.origin.distanceTo(Vr);c<t.near||c>t.far||e.push({distance:c,point:Vr.clone(),uv:Ye.getInterpolation(Vr,Xs,Wr,qs,Bu,Ua,ku,new kt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Ys(i,t,e,n,r,s){rr.subVectors(i,e).addScalar(.5).multiply(n),r!==void 0?(Gr.x=s*rr.x-r*rr.y,Gr.y=r*rr.x+s*rr.y):Gr.copy(rr),i.copy(t),i.x+=Gr.x,i.y+=Gr.y,i.applyMatrix4(wf)}class Tf extends Ii{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Nt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Ao=new X,Ro=new X,zu=new ie,Xr=new cf,Ks=new Go,Na=new X,Hu=new X;class Dx extends ve{constructor(t=new sn,e=new Tf){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let r=1,s=e.count;r<s;r++)Ao.fromBufferAttribute(e,r-1),Ro.fromBufferAttribute(e,r),n[r]=n[r-1],n[r]+=Ao.distanceTo(Ro);t.setAttribute("lineDistance",new Ce(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ks.copy(n.boundingSphere),Ks.applyMatrix4(r),Ks.radius+=s,t.ray.intersectsSphere(Ks)===!1)return;zu.copy(r).invert(),Xr.copy(t.ray).applyMatrix4(zu);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=n.index,h=n.attributes.position;if(u!==null){const d=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let _=d,m=g-1;_<m;_+=l){const p=u.getX(_),T=u.getX(_+1),E=$s(this,t,Xr,c,p,T);E&&e.push(E)}if(this.isLineLoop){const _=u.getX(g-1),m=u.getX(d),p=$s(this,t,Xr,c,_,m);p&&e.push(p)}}else{const d=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=d,m=g-1;_<m;_+=l){const p=$s(this,t,Xr,c,_,_+1);p&&e.push(p)}if(this.isLineLoop){const _=$s(this,t,Xr,c,g-1,d);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function $s(i,t,e,n,r,s){const o=i.geometry.attributes.position;if(Ao.fromBufferAttribute(o,r),Ro.fromBufferAttribute(o,s),e.distanceSqToSegment(Ao,Ro,Na,Hu)>n)return;Na.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Na);if(!(c<t.near||c>t.far))return{distance:c,point:Hu.clone().applyMatrix4(i.matrixWorld),index:r,face:null,faceIndex:null,object:i}}const Vu=new X,Gu=new X;class Ix extends Dx{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let r=0,s=e.count;r<s;r+=2)Vu.fromBufferAttribute(e,r),Gu.fromBufferAttribute(e,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Vu.distanceTo(Gu);t.setAttribute("lineDistance",new Ce(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Af extends Te{constructor(t,e,n,r,s,o,a,c,l){super(t,e,n,r,s,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}const js=new X,Zs=new X,Oa=new X,Js=new Ye;class Ux extends sn{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const r=Math.pow(10,4),s=Math.cos(pr*e),o=t.getIndex(),a=t.getAttribute("position"),c=o?o.count:a.count,l=[0,0,0],u=["a","b","c"],f=new Array(3),h={},d=[];for(let g=0;g<c;g+=3){o?(l[0]=o.getX(g),l[1]=o.getX(g+1),l[2]=o.getX(g+2)):(l[0]=g,l[1]=g+1,l[2]=g+2);const{a:_,b:m,c:p}=Js;if(_.fromBufferAttribute(a,l[0]),m.fromBufferAttribute(a,l[1]),p.fromBufferAttribute(a,l[2]),Js.getNormal(Oa),f[0]=`${Math.round(_.x*r)},${Math.round(_.y*r)},${Math.round(_.z*r)}`,f[1]=`${Math.round(m.x*r)},${Math.round(m.y*r)},${Math.round(m.z*r)}`,f[2]=`${Math.round(p.x*r)},${Math.round(p.y*r)},${Math.round(p.z*r)}`,!(f[0]===f[1]||f[1]===f[2]||f[2]===f[0]))for(let T=0;T<3;T++){const E=(T+1)%3,R=f[T],G=f[E],I=Js[u[T]],D=Js[u[E]],V=`${R}_${G}`,y=`${G}_${R}`;y in h&&h[y]?(Oa.dot(h[y].normal)<=s&&(d.push(I.x,I.y,I.z),d.push(D.x,D.y,D.z)),h[y]=null):V in h||(h[V]={index0:l[T],index1:l[E],normal:Oa.clone()})}}for(const g in h)if(h[g]){const{index0:_,index1:m}=h[g];js.fromBufferAttribute(a,_),Zs.fromBufferAttribute(a,m),d.push(js.x,js.y,js.z),d.push(Zs.x,Zs.y,Zs.z)}this.setAttribute("position",new Ce(d,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class uo extends Ii{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Nt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=nf,this.normalScale=new kt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new dn,this.combine=Oc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Rf extends ve{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Nt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}const Fa=new ie,Wu=new X,Xu=new X;class Nx{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new kt(512,512),this.map=null,this.mapPass=null,this.matrix=new ie,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new zc,this._frameExtents=new kt(1,1),this._viewportCount=1,this._viewports=[new _e(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Wu.setFromMatrixPosition(t.matrixWorld),e.position.copy(Wu),Xu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Xu),e.updateMatrixWorld(),Fa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Fa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Fa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Ox extends Nx{constructor(){super(new _f(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Fx extends Rf{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ve.DEFAULT_UP),this.updateMatrix(),this.target=new ve,this.shadow=new Ox}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Bx extends Rf{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class kx{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=qu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=qu();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function qu(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Nc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Nc);const Ft=16,Be=64,ho=22,En=4,zx=600,It={AIR:0,GRASS:1,DIRT:2,STONE:3,COBBLE:4,SAND:5,LOG:6,PLANKS:7,LEAVES:8,GLASS:9,WATER:10,BRICK:11,BEDROCK:12},De={[It.AIR]:{name:"Hava",solid:!1,opaque:!1},[It.GRASS]:{name:"Çimen",tiles:[0,1,2],solid:!0,opaque:!0,group:"opaque",place:!0,sound:"soft"},[It.DIRT]:{name:"Toprak",tiles:[2,2,2],solid:!0,opaque:!0,group:"opaque",place:!0,sound:"soft"},[It.STONE]:{name:"Taş",tiles:[3,3,3],solid:!0,opaque:!0,group:"opaque",place:!0,sound:"hard"},[It.COBBLE]:{name:"Kırıktaş",tiles:[4,4,4],solid:!0,opaque:!0,group:"opaque",place:!0,sound:"hard"},[It.SAND]:{name:"Kum",tiles:[5,5,5],solid:!0,opaque:!0,group:"opaque",place:!0,sound:"soft"},[It.LOG]:{name:"Kütük",tiles:[7,6,7],solid:!0,opaque:!0,group:"opaque",place:!0,sound:"wood"},[It.PLANKS]:{name:"Tahta",tiles:[8,8,8],solid:!0,opaque:!0,group:"opaque",place:!0,sound:"wood"},[It.LEAVES]:{name:"Yaprak",tiles:[9,9,9],solid:!0,opaque:!1,group:"cutout",place:!0,sound:"soft"},[It.GLASS]:{name:"Cam",tiles:[10,10,10],solid:!0,opaque:!1,group:"cutout",place:!0,sound:"hard"},[It.WATER]:{name:"Su",tiles:[11,11,11],solid:!1,opaque:!1,group:"water",liquid:!0,unbreakable:!0},[It.BRICK]:{name:"Tuğla",tiles:[12,12,12],solid:!0,opaque:!0,group:"opaque",place:!0,sound:"hard"},[It.BEDROCK]:{name:"Ana Kaya",tiles:[13,13,13],solid:!0,opaque:!0,group:"opaque",unbreakable:!0,sound:"hard"}},Hx=Object.keys(De).map(Number).filter(i=>De[i].place),Vx=[It.GRASS,It.DIRT,It.STONE,It.COBBLE,It.SAND,It.LOG,It.PLANKS,It.GLASS,It.BRICK],Vt=16,Tn=4,Ba=4;function Gx(i){let t=i;return()=>{t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function Je(i,t,e,n){i.fillStyle=n,i.fillRect(t,e,1,1)}function Oe(i,t){i.fillStyle=t,i.fillRect(0,0,Vt,Vt)}function Ze(i,t,e,n=.35){for(let r=0;r<Vt;r++)for(let s=0;s<Vt;s++)t()<n&&Je(i,s,r,e[t()*e.length|0])}const Wx=[(i,t)=>{Oe(i,"#5fae3a"),Ze(i,t,["#55a032","#6cbb45","#4e9430","#74c24e"],.5)},(i,t)=>{Oe(i,"#7a5538"),Ze(i,t,["#6e4b30","#86603f","#5f4129"],.45);for(let e=0;e<Vt;e++){const n=3+(t()*2|0);for(let r=0;r<n;r++)Je(i,e,r,t()<.5?"#5fae3a":"#55a032")}},(i,t)=>{Oe(i,"#7a5538"),Ze(i,t,["#6e4b30","#86603f","#5f4129","#8d6845"],.5)},(i,t)=>{Oe(i,"#8d8d8d"),Ze(i,t,["#828282","#979797","#777777"],.45)},(i,t)=>{Oe(i,"#6f6f6f"),Ze(i,t,["#7c7c7c","#666666"],.4),i.fillStyle="#4f4f4f";for(let e=0;e<10;e++)i.fillRect(t()*Vt|0,t()*Vt|0,1+(t()*3|0),1);i.fillStyle="#9a9a9a";for(let e=0;e<6;e++)i.fillRect(t()*Vt|0,t()*Vt|0,2,2)},(i,t)=>{Oe(i,"#dbd29a"),Ze(i,t,["#d2c890","#e3daa6","#c9bf85"],.5)},(i,t)=>{Oe(i,"#6b4a2b");for(let e=0;e<Vt;e++){const n=e%4===0||t()<.12;for(let r=0;r<Vt;r++)n&&t()<.85?Je(i,e,r,"#583c22"):t()<.18&&Je(i,e,r,"#795533")}},(i,t)=>{Oe(i,"#b08e58"),i.strokeStyle="#8a6c3e";for(let e=2;e<=7;e+=2)i.beginPath(),i.arc(8,8,e,0,Math.PI*2),i.stroke();i.strokeStyle="#583c22",i.strokeRect(.5,.5,Vt-1,Vt-1)},(i,t)=>{Oe(i,"#a8824e"),Ze(i,t,["#9e7944","#b28a55"],.3),i.fillStyle="#7d5e33";for(let e=3;e<Vt;e+=4)i.fillRect(0,e,Vt,1);Je(i,4,1,"#6e5128"),Je(i,11,5,"#6e5128"),Je(i,6,9,"#6e5128"),Je(i,13,13,"#6e5128")},(i,t)=>{Oe(i,"#2e7d1e"),Ze(i,t,["#266c18","#378f25","#1f5e12"],.6);for(let e=0;e<Vt;e++)for(let n=0;n<Vt;n++)t()<.12&&i.clearRect(n,e,1,1)},(i,t)=>{i.clearRect(0,0,Vt,Vt),i.fillStyle="rgba(220,240,250,0.9)",i.fillRect(0,0,Vt,1),i.fillRect(0,Vt-1,Vt,1),i.fillRect(0,0,1,Vt),i.fillRect(Vt-1,0,1,Vt),i.fillStyle="rgba(255,255,255,0.55)",Je(i,3,4,"rgba(255,255,255,0.6)");for(let e=0;e<5;e++)Je(i,11-e,3+e,"rgba(255,255,255,0.5)");for(let e=0;e<3;e++)Je(i,6-e,9+e,"rgba(255,255,255,0.4)")},(i,t)=>{Oe(i,"#3a6fd8"),Ze(i,t,["#3567cb","#4379e2","#2f5fbf"],.5),i.fillStyle="#5d8ceb";for(let e=0;e<4;e++)i.fillRect(t()*12|0,t()*Vt|0,3,1)},(i,t)=>{Oe(i,"#9c4a3a"),Ze(i,t,["#914437","#a7523f"],.3),i.fillStyle="#cfc6bd";for(let e=3;e<Vt;e+=4)i.fillRect(0,e,Vt,1);for(let e=0;e<4;e++){const n=e%2===0?4:0;for(let r=n;r<Vt;r+=8)i.fillRect(r,e*4,1,3)}},(i,t)=>{Oe(i,"#3a3a3a"),Ze(i,t,["#2c2c2c","#4a4a4a","#565656","#222222"],.7)}];function Xx(){const i=document.createElement("canvas");i.width=Tn*Vt,i.height=Ba*Vt;const t=i.getContext("2d");Wx.forEach((r,s)=>{const o=s%Tn*Vt,a=(s/Tn|0)*Vt;t.save(),t.translate(o,a),t.beginPath(),t.rect(0,0,Vt,Vt),t.clip(),r(t,Gx(1234+s*99)),t.restore()});const e=new Af(i);e.magFilter=Re,e.minFilter=Re,e.colorSpace=We,e.generateMipmaps=!1;function n(r){const s=r%Tn,o=r/Tn|0,a=s/Tn,c=(s+1)/Tn,l=1-o/Ba,u=1-(o+1)/Ba;return[a,u,c,l]}return{canvas:i,texture:e,tileUV:n}}function Cf(i,t,e=32){const n=document.createElement("canvas");n.width=e,n.height=e;const r=n.getContext("2d");r.imageSmoothingEnabled=!1;const s=t%Tn*Vt,o=(t/Tn|0)*Vt;return r.drawImage(i,s,o,Vt,Vt,0,0,e,e),n}const qx=new Nt("#87ceeb"),Yx=new Nt("#0b1026"),Kx=new Nt("#ff9e5e");class $x{constructor(t){this.scene=t,this.time=.08,this.ambient=new Bx(16777215,.6),this.sun=new Fx(16774102,1),t.add(this.ambient,this.sun,this.sun.target),this.sunMesh=new Fe(new Ar(36,36),new wo({color:16769357,fog:!1})),this.moonMesh=new Fe(new Ar(26,26),new wo({color:14673919,fog:!1})),t.add(this.sunMesh,this.moonMesh),t.background=new Nt,t.fog=new Vc(8900331,40,110),this._color=new Nt}update(t,e,n){this.time=(this.time+t/zx)%1;const r=this.time*Math.PI*2,s=Math.sin(r),o=Math.cos(r),a=uc.clamp(s*3+.1,0,1),c=uc.clamp(1-Math.abs(s)*4,0,1)*.8;this._color.copy(Yx).lerp(qx,a).lerp(Kx,c*a*.9+c*.15),this.scene.background.copy(this._color),this.scene.fog.color.copy(this._color),this.ambient.intensity=.22+a*.55,this.sun.intensity=a*1.1,this.sun.position.set(e.x+o*60,s*80+10,e.z+25),this.sun.target.position.copy(e);const l=350;this.sunMesh.position.set(e.x+o*l,s*l,e.z),this.moonMesh.position.set(e.x-o*l,-s*l,e.z),this.sunMesh.lookAt(n.position),this.moonMesh.lookAt(n.position)}}const Yu=(i,t,e)=>(i*Ft+e)*Be+t;class jx{constructor(t,e,n){this.cx=t,this.cz=e,this.data=n}get(t,e,n){return this.data[Yu(t,e,n)]}set(t,e,n,r){this.data[Yu(t,e,n)]=r}}const Lf=Math.sqrt(3),Zx=.5*(Lf-1),qr=(3-Lf)/6,Ku=i=>Math.floor(i)|0,$u=new Float64Array([1,1,-1,1,1,-1,-1,-1,1,0,-1,0,1,0,-1,0,0,1,0,-1,0,1,0,-1]);function ka(i=Math.random){const t=Jx(i),e=new Float64Array(t).map(r=>$u[r%12*2]),n=new Float64Array(t).map(r=>$u[r%12*2+1]);return function(s,o){let a=0,c=0,l=0;const u=(s+o)*Zx,f=Ku(s+u),h=Ku(o+u),d=(f+h)*qr,g=f-d,_=h-d,m=s-g,p=o-_;let T,E;m>p?(T=1,E=0):(T=0,E=1);const R=m-T+qr,G=p-E+qr,I=m-1+2*qr,D=p-1+2*qr,V=f&255,y=h&255;let x=.5-m*m-p*p;if(x>=0){const b=V+t[y],w=e[b],C=n[b];x*=x,a=x*x*(w*m+C*p)}let U=.5-R*R-G*G;if(U>=0){const b=V+T+t[y+E],w=e[b],C=n[b];U*=U,c=U*U*(w*R+C*G)}let P=.5-I*I-D*D;if(P>=0){const b=V+1+t[y+1],w=e[b],C=n[b];P*=P,l=P*P*(w*I+C*D)}return 70*(a+c+l)}}function Jx(i){const e=new Uint8Array(512);for(let n=0;n<512/2;n++)e[n]=n;for(let n=0;n<512/2-1;n++){const r=n+~~(i()*(256-n)),s=e[n];e[n]=e[r],e[r]=s}for(let n=256;n<512;n++)e[n]=e[n-256];return e}function za(i){return function(){i|=0,i=i+1831565813|0;let t=Math.imul(i^i>>>15,1|i);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function ju(i,t,e){let n=i^Math.imul(t,374761393)^Math.imul(e,668265263);return n=Math.imul(n^n>>>13,1274126177),((n^n>>>16)>>>0)/4294967296}function Qx(i){const t=ka(za(i)),e=ka(za(i+1337)),n=ka(za(i+9999));function r(a,c){let l=26+t(a/110,c/110)*16+e(a/34,c/34)*6+n(a/9,c/9)*1.6;return Math.max(2,Math.min(Be-12,Math.floor(l)))}function s(a,c){return ju(i,a,c)<.009}function o(a,c){return 4+(ju(i+77,a,c)*3|0)}return{seed:i,height:r,treeAt:s,treeHeight:o}}const Ha=(i,t,e)=>(i*Ft+e)*Be+t;function ty(i,t,e){const n=new Uint8Array(Ft*Ft*Be),r=t*Ft,s=e*Ft;for(let c=0;c<Ft;c++)for(let l=0;l<Ft;l++){const u=i.height(r+c,s+l),f=u<=ho+1;for(let h=0;h<=u;h++){let d;h===0?d=It.BEDROCK:h<u-3?d=It.STONE:h<u?d=f?It.SAND:It.DIRT:d=f?It.SAND:It.GRASS,n[Ha(c,h,l)]=d}for(let h=u+1;h<=ho;h++)n[Ha(c,h,l)]=It.WATER}const o=3,a=(c,l,u,f,h)=>{const d=c-r,g=u-s;if(d<0||d>=Ft||g<0||g>=Ft||l<0||l>=Be)return;const _=Ha(d,l,g);(h||n[_]===It.AIR)&&(n[_]=f)};for(let c=r-o;c<r+Ft+o;c++)for(let l=s-o;l<s+Ft+o;l++){if(!i.treeAt(c,l))continue;const u=i.height(c,l);if(u<=ho+1||u+7>=Be)continue;const f=i.treeHeight(c,l);for(let h=1;h<=f;h++)a(c,u+h,l,It.LOG,!0);for(let h=f-2;h<=f+1;h++){const d=h>=f?1:2;for(let g=-d;g<=d;g++)for(let _=-d;_<=d;_++)g===0&&_===0&&h<=f||Math.abs(g)===d&&Math.abs(_)===d&&d===2||a(c+g,u+h,l+_,It.LEAVES,!1)}}return n}function ey(i){const t=Math.random()*Math.PI*2;for(let e=2;e<64;e+=4)for(let n=0;n<8;n++){const r=t+n/8*Math.PI*2,s=Math.round(Math.cos(r)*e),o=Math.round(Math.sin(r)*e),a=i.height(s,o);if(a>ho+1)return[s+.5,a+2.5,o+.5]}return[.5,Be-10,.5]}const ny=[{dir:[-1,0,0],shade:.8,sideTex:!0,corners:[{pos:[0,1,0],uv:[0,1]},{pos:[0,0,0],uv:[0,0]},{pos:[0,1,1],uv:[1,1]},{pos:[0,0,1],uv:[1,0]}]},{dir:[1,0,0],shade:.8,sideTex:!0,corners:[{pos:[1,1,1],uv:[0,1]},{pos:[1,0,1],uv:[0,0]},{pos:[1,1,0],uv:[1,1]},{pos:[1,0,0],uv:[1,0]}]},{dir:[0,-1,0],shade:.5,texSlot:2,corners:[{pos:[1,0,1],uv:[1,0]},{pos:[0,0,1],uv:[0,0]},{pos:[1,0,0],uv:[1,1]},{pos:[0,0,0],uv:[0,1]}]},{dir:[0,1,0],shade:1,texSlot:0,corners:[{pos:[0,1,1],uv:[1,1]},{pos:[1,1,1],uv:[0,1]},{pos:[0,1,0],uv:[1,0]},{pos:[1,1,0],uv:[0,0]}]},{dir:[0,0,-1],shade:.65,sideTex:!0,corners:[{pos:[1,0,0],uv:[0,0]},{pos:[0,0,0],uv:[1,0]},{pos:[1,1,0],uv:[0,1]},{pos:[0,1,0],uv:[1,1]}]},{dir:[0,0,1],shade:.65,sideTex:!0,corners:[{pos:[0,0,1],uv:[0,0]},{pos:[1,0,1],uv:[1,0]},{pos:[0,1,1],uv:[0,1]},{pos:[1,1,1],uv:[1,1]}]}],iy=14/16;function Va(){return{positions:[],normals:[],uvs:[],colors:[],indices:[]}}function Ga(i){if(i.indices.length===0)return null;const t=new sn;return t.setAttribute("position",new Ce(i.positions,3)),t.setAttribute("normal",new Ce(i.normals,3)),t.setAttribute("uv",new Ce(i.uvs,2)),t.setAttribute("color",new Ce(i.colors,3)),t.setIndex(i.indices),t}function ry(i,t,e,n){const r={opaque:Va(),cutout:Va(),water:Va()},s=t*Ft,o=e*Ft,a=i.getChunk(t,e);for(let c=0;c<Ft;c++)for(let l=0;l<Ft;l++)for(let u=0;u<Be;u++){const f=a.get(c,u,l);if(f===It.AIR)continue;const h=De[f],d=r[h.group],g=f===It.WATER;for(const _ of ny){const m=s+c+_.dir[0],p=u+_.dir[1],T=o+l+_.dir[2];let E;if(p<0?E=It.BEDROCK:p>=Be?E=It.AIR:E=i.getBlock(m,p,T),De[E].opaque||E===f||g&&_.dir[1]===0&&E!==It.AIR&&De[E].liquid)continue;const G=_.texSlot??1,I=h.tiles[_.sideTex?1:G],[D,V,y,x]=n(I),U=d.positions.length/3,P=g&&_.dir[1]!==-1&&i.getBlock(s+c,u+1,o+l)!==It.WATER;for(const b of _.corners){let w=b.pos[1];P&&w===1&&(w=iy),d.positions.push(c+b.pos[0],u+w,l+b.pos[2]),d.normals.push(..._.dir),d.uvs.push(D+b.uv[0]*(y-D),V+b.uv[1]*(x-V)),d.colors.push(_.shade,_.shade,_.shade)}d.indices.push(U,U+1,U+2,U+2,U+1,U+3)}}return{opaque:Ga(r.opaque),cutout:Ga(r.cutout),water:Ga(r.water)}}const Mn=(i,t)=>`${i},${t}`;class sy{constructor(t,e){this.scene=t,this.atlas=e,this.chunks=new Map,this.meshes=new Map,this.edits=new Map,this.dirty=new Set,this.gen=null;const n=e.texture;this.materials={opaque:new uo({map:n,vertexColors:!0}),cutout:new uo({map:n,vertexColors:!0,transparent:!0,alphaTest:.4,side:Qe}),water:new uo({map:n,vertexColors:!0,transparent:!0,opacity:.7,depthWrite:!1,side:Qe})}}setSeed(t){this.seed=t,this.gen=Qx(t);for(const e of[...this.meshes.keys()])this.disposeMesh(e);this.chunks.clear(),this.dirty.clear()}getChunk(t,e){const n=Mn(t,e);let r=this.chunks.get(n);if(!r){r=new jx(t,e,ty(this.gen,t,e));const s=t*Ft,o=e*Ft;for(const[a,c]of this.edits){const[l,u,f]=a.split(",").map(Number);l>=s&&l<s+Ft&&f>=o&&f<o+Ft&&r.set(l-s,u,f-o,c)}this.chunks.set(n,r)}return r}getBlock(t,e,n){if(e<0||e>=Be)return It.AIR;const r=Math.floor(t/Ft),s=Math.floor(n/Ft);return this.getChunk(r,s).get(t-r*Ft,e,n-s*Ft)}setBlock(t,e,n,r,s=!0){if(e<=0||e>=Be)return!1;const o=Math.floor(t/Ft),a=Math.floor(n/Ft),c=t-o*Ft,l=n-a*Ft,u=this.getChunk(o,a);return u.get(c,e,l)===r?!1:(u.set(c,e,l,r),s&&this.edits.set(`${t},${e},${n}`,r),this.dirty.add(Mn(o,a)),c===0&&this.dirty.add(Mn(o-1,a)),c===Ft-1&&this.dirty.add(Mn(o+1,a)),l===0&&this.dirty.add(Mn(o,a-1)),l===Ft-1&&this.dirty.add(Mn(o,a+1)),!0)}editsArray(){return[...this.edits].map(([t,e])=>[...t.split(",").map(Number),e])}applyEdits(t){for(const[e,n,r,s]of t){this.edits.set(`${e},${n},${r}`,s);const o=Mn(Math.floor(e/Ft),Math.floor(r/Ft)),a=this.chunks.get(o);a&&(a.set(e-Math.floor(e/Ft)*Ft,n,r-Math.floor(r/Ft)*Ft,s),this.dirty.add(o))}}buildMesh(t,e){const n=Mn(t,e);this.disposeMesh(n);const r=ry(this,t,e,this.atlas.tileUV),s=new ur;s.position.set(t*Ft,0,e*Ft);const o={group:s};for(const a of["opaque","cutout","water"]){if(!r[a])continue;const c=new Fe(r[a],this.materials[a]);a==="water"&&(c.renderOrder=1),s.add(c),o[a]=c}this.scene.add(s),this.meshes.set(n,o)}disposeMesh(t){const e=this.meshes.get(t);if(e){for(const n of["opaque","cutout","water"])e[n]?.geometry.dispose();this.scene.remove(e.group),this.meshes.delete(t)}}update(t,e,n=2){const r=Math.floor(t/Ft),s=Math.floor(e/Ft);for(const a of[...this.dirty]){this.dirty.delete(a);const[c,l]=a.split(",").map(Number);if(Math.abs(c-r)<=En+1&&Math.abs(l-s)<=En+1&&this.buildMesh(c,l),--n<=0)return}const o=[];for(let a=-En;a<=En;a++)for(let c=-En;c<=En;c++){if(a*a+c*c>(En+.5)**2)continue;const l=r+a,u=s+c;this.meshes.has(Mn(l,u))||o.push([a*a+c*c,l,u])}o.sort((a,c)=>a[0]-c[0]);for(const[,a,c]of o)if(this.buildMesh(a,c),--n<=0)break;for(const a of[...this.meshes.keys()]){const[c,l]=a.split(",").map(Number);(Math.abs(c-r)>En+2||Math.abs(l-s)>En+2)&&this.disposeMesh(a)}}}const Wn=.3,Wa=1.8,Zu=1.62,oy=4.3,ay=2.6,cy=-24,ly=-5,uy=8.2,Ju=-3.2;class hy{constructor(t,e){this.camera=t,this.world=e,this.pos=new X(.5,Be-8,.5),this.vel=new X,this.yaw=0,this.pitch=0,this.onGround=!1,this.inWater=!1,this.keys=new Set,this.enabled=!1,this.onJump=null,this.onSplash=null,this._wasInWater=!1,document.addEventListener("keydown",n=>{this.enabled&&this.keys.add(n.code)}),document.addEventListener("keyup",n=>this.keys.delete(n.code)),document.addEventListener("mousemove",n=>{!this.enabled||document.pointerLockElement===null||(this.yaw-=n.movementX*.0024,this.pitch-=n.movementY*.0024,this.pitch=Math.max(-Math.PI/2+.01,Math.min(Math.PI/2-.01,this.pitch)))})}setPosition(t,e,n){this.pos.set(t,e,n),this.vel.set(0,0,0)}blockSolidAt(t,e,n){const r=this.world.getBlock(Math.floor(t),Math.floor(e),Math.floor(n));return De[r].solid}collides(t,e,n){for(const r of[-Wn,Wn])for(const s of[-Wn,Wn])for(let o=0;o<=Wa;o+=.9){const a=Math.min(o,Wa-.001);if(this.blockSolidAt(t+r,e+a,n+s))return!0}return!1}bodyInWater(){return this.world.getBlock(Math.floor(this.pos.x),Math.floor(this.pos.y+.6),Math.floor(this.pos.z))===It.WATER}headInWater(){return this.world.getBlock(Math.floor(this.pos.x),Math.floor(this.pos.y+Zu),Math.floor(this.pos.z))===It.WATER}update(t){this.inWater=this.bodyInWater(),this.inWater&&!this._wasInWater&&this.vel.y<-4&&this.onSplash?.(),this._wasInWater=this.inWater;let e=0,n=0;this.enabled&&(this.keys.has("KeyW")&&(e+=1),this.keys.has("KeyS")&&(e-=1),this.keys.has("KeyD")&&(n+=1),this.keys.has("KeyA")&&(n-=1));const r=Math.sin(this.yaw),s=Math.cos(this.yaw);let o=-r*e+s*n,a=-s*e-r*n;const c=Math.hypot(o,a);c>0&&(o/=c,a/=c);const l=this.inWater?ay:oy;this.vel.x=o*l,this.vel.z=a*l,this.inWater?(this.vel.y+=ly*t,this.vel.y<Ju&&(this.vel.y=Ju),this.enabled&&this.keys.has("Space")&&(this.vel.y=3.2)):(this.vel.y+=cy*t,this.enabled&&this.keys.has("Space")&&this.onGround&&(this.vel.y=uy,this.onGround=!1,this.onJump?.()));const u=(h,d)=>{if(d===0)return;const g=this.pos.clone();g[h]+=d,this.collides(g.x,g.y,g.z)?h==="y"&&(d<0&&(this.onGround=!0),this.vel.y=0):this.pos[h]=g[h]},f=Math.max(1,Math.ceil(Math.abs(this.vel.y)*t/.5));this.onGround=!1;for(let h=0;h<f;h++){const d=t/f;u("x",this.vel.x*d),u("z",this.vel.z*d),u("y",this.vel.y*d)}this.pos.y<-10&&(this.pos.y=Be),this.camera.position.set(this.pos.x,this.pos.y+Zu,this.pos.z),this.camera.rotation.set(0,0,0),this.camera.rotateY(this.yaw),this.camera.rotateX(this.pitch)}lookDir(){const t=new X(0,0,-1);return t.applyQuaternion(this.camera.quaternion),t}intersectsBlock(t,e,n){return t+1>this.pos.x-Wn&&t<this.pos.x+Wn&&n+1>this.pos.z-Wn&&n<this.pos.z+Wn&&e+1>this.pos.y&&e<this.pos.y+Wa}}function Pf(i,t,e,n=6){let r=Math.floor(t.x),s=Math.floor(t.y),o=Math.floor(t.z);const a=Math.sign(e.x),c=Math.sign(e.y),l=Math.sign(e.z),u=a!==0?Math.abs(1/e.x):1/0,f=c!==0?Math.abs(1/e.y):1/0,h=l!==0?Math.abs(1/e.z):1/0,d=G=>G-Math.floor(G);let g=a>0?u*(1-d(t.x)):u*d(t.x),_=c>0?f*(1-d(t.y)):f*d(t.y),m=l>0?h*(1-d(t.z)):h*d(t.z);a===0&&(g=1/0),c===0&&(_=1/0),l===0&&(m=1/0);let p=0,T=0,E=0,R=0;for(;R<=n;){const G=i.getBlock(r,s,o);if(G!==It.AIR&&De[G].solid)return{x:r,y:s,z:o,nx:p,ny:T,nz:E,id:G};g<_&&g<m?(r+=a,R=g,g+=u,p=-a,T=0,E=0):_<m?(s+=c,R=_,_+=f,p=0,T=-c,E=0):(o+=l,R=m,m+=h,p=0,T=0,E=-l)}return null}let Yr=null;function Gc(){return Yr||(Yr=new(window.AudioContext||window.webkitAudioContext)),Yr.state==="suspended"&&Yr.resume(),Yr}function Kr({dur:i=.1,freq:t=800,q:e=1,gain:n=.3,type:r="bandpass"}){const s=Gc(),o=Math.ceil(s.sampleRate*i),a=s.createBuffer(1,o,s.sampleRate),c=a.getChannelData(0);for(let h=0;h<o;h++)c[h]=Math.random()*2-1;const l=s.createBufferSource();l.buffer=a;const u=s.createBiquadFilter();u.type=r,u.frequency.value=t,u.Q.value=e;const f=s.createGain();f.gain.setValueAtTime(n,s.currentTime),f.gain.exponentialRampToValueAtTime(.001,s.currentTime+i),l.connect(u).connect(f).connect(s.destination),l.start()}function Qs({freq:i=220,end:t=null,dur:e=.1,type:n="square",gain:r=.12}){const s=Gc(),o=s.createOscillator();o.type=n,o.frequency.setValueAtTime(i,s.currentTime),t&&o.frequency.exponentialRampToValueAtTime(t,s.currentTime+e);const a=s.createGain();a.gain.setValueAtTime(r,s.currentTime),a.gain.exponentialRampToValueAtTime(.001,s.currentTime+e),o.connect(a).connect(s.destination),o.start(),o.stop(s.currentTime+e)}const wi={unlock(){Gc()},dig(i){Kr(i==="hard"?{dur:.09,freq:1400,gain:.25}:i==="wood"?{dur:.1,freq:600,q:2,gain:.25}:{dur:.1,freq:420,q:.8,gain:.28})},place(){Kr({dur:.06,freq:900,gain:.18}),Qs({freq:180,end:120,dur:.07,gain:.1})},jump(){Qs({freq:240,end:380,dur:.09,type:"sine",gain:.07})},splash(){Kr({dur:.35,freq:700,q:.5,gain:.3,type:"lowpass"})},join(){Qs({freq:440,end:660,dur:.15,type:"triangle",gain:.1})},leave(){Qs({freq:440,end:280,dur:.18,type:"triangle",gain:.1})}};class fy{constructor(t){this.atlasCanvas=t,this.slots=[...Vx],this.selected=0,this.el=document.getElementById("hud"),this.hotbarEl=document.getElementById("hotbar"),this.coordsEl=document.getElementById("coords"),this.countEl=document.getElementById("player-count"),this.toastEl=document.getElementById("toast"),this._toastTimer=null,this.renderHotbar(),window.addEventListener("wheel",e=>{document.pointerLockElement&&this.select((this.selected+(e.deltaY>0?1:-1)+9)%9)}),document.addEventListener("keydown",e=>{if(e.code.startsWith("Digit")){const n=Number(e.code.slice(5));n>=1&&n<=9&&this.select(n-1)}})}show(){this.el.hidden=!1}renderHotbar(){this.hotbarEl.innerHTML="",this.slots.forEach((t,e)=>{const n=document.createElement("div");n.className="slot"+(e===this.selected?" selected":"");const r=document.createElement("span");r.className="num",r.textContent=e+1,n.appendChild(r),t&&De[t]&&(n.appendChild(Cf(this.atlasCanvas,De[t].tiles[1],32)),n.title=De[t].name),this.hotbarEl.appendChild(n)})}select(t){this.selected=t,this.renderHotbar()}setSlot(t,e){this.slots[t]=e,this.renderHotbar()}currentBlock(){return this.slots[this.selected]}setCoords(t,e){this.coordsEl.textContent=`x ${t.x.toFixed(0)}  y ${t.y.toFixed(0)}  z ${t.z.toFixed(0)}  ·  ${e} fps`}setPlayerCount(t){this.countEl.textContent=`👤 ${t}`}toast(t,e=2500){this.toastEl.textContent=t,this.toastEl.hidden=!1,clearTimeout(this._toastTimer),this._toastTimer=setTimeout(()=>{this.toastEl.hidden=!0},e)}}class dy{constructor(t,e){this.el=document.getElementById("inventory"),this.open=!1;const n=document.getElementById("inv-grid");for(const r of Hx){const s=document.createElement("div");s.className="slot",s.appendChild(Cf(t,De[r].tiles[1],36));const o=document.createElement("span");o.className="label",o.textContent=De[r].name,s.appendChild(o),s.addEventListener("click",()=>{e.setSlot(e.selected,r),this.toggle(!1)}),n.appendChild(s)}}toggle(t=!this.open){this.open=t,this.el.hidden=!t,t&&document.exitPointerLock?.()}}function py(){const i=location.hash.match(/r=([A-Za-z0-9_-]+)/);return i?i[1]:null}function my(){const i="abcdefghjkmnpqrstuvwxyz23456789";let t="";for(let e=0;e<8;e++)t+=i[Math.random()*i.length|0];return t}function gy(i){history.replaceState(null,"",`#r=${i}`)}function Qu(i){return`${location.origin}${location.pathname}#r=${i}`}const Df=i=>`pcraft:save:${i}`;function th(i){try{const t=localStorage.getItem(Df(i));return t?JSON.parse(t):null}catch{return null}}function _y(i,{seed:t,edits:e,time:n}){try{localStorage.setItem(Df(i),JSON.stringify({seed:t,edits:e,time:n}))}catch{}}function vy(){return localStorage.getItem("pcraft:name")||""}function xy(i){localStorage.setItem("pcraft:name",i)}class yy{constructor(t){this.el=document.getElementById("menu"),this.input=document.getElementById("name-input"),this.btn=document.getElementById("start-btn"),this.statusEl=document.getElementById("menu-status"),this.input.value=vy(),t&&(this.btn.textContent=`Odaya Katıl (${t})`),this.input.focus()}onStart(t){const e=()=>{const n=this.input.value.trim().slice(0,16);if(!n){this.setStatus("Önce bir isim gir!"),this.input.focus();return}xy(n),this.btn.disabled=!0,t(n)};this.btn.addEventListener("click",e),this.input.addEventListener("keydown",n=>{n.key==="Enter"&&e()})}setStatus(t){this.statusEl.textContent=t}hide(){this.el.hidden=!0}}const sr=typeof globalThis=="object"&&"crypto"in globalThis?globalThis.crypto:void 0;/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */function Xo(i){return i instanceof Uint8Array||ArrayBuffer.isView(i)&&i.constructor.name==="Uint8Array"}function fc(i){if(!Number.isSafeInteger(i)||i<0)throw new Error("positive integer expected, got "+i)}function Ni(i,...t){if(!Xo(i))throw new Error("Uint8Array expected");if(t.length>0&&!t.includes(i.length))throw new Error("Uint8Array expected of length "+t+", got length="+i.length)}function If(i){if(typeof i!="function"||typeof i.create!="function")throw new Error("Hash should be wrapped by utils.createHasher");fc(i.outputLen),fc(i.blockLen)}function Co(i,t=!0){if(i.destroyed)throw new Error("Hash instance has been destroyed");if(t&&i.finished)throw new Error("Hash#digest() has already been called")}function Sy(i,t){Ni(i);const e=t.outputLen;if(i.length<e)throw new Error("digestInto() expects output buffer of length at least "+e)}function Lo(...i){for(let t=0;t<i.length;t++)i[t].fill(0)}function Xa(i){return new DataView(i.buffer,i.byteOffset,i.byteLength)}function cn(i,t){return i<<32-t|i>>>t}const Uf=typeof Uint8Array.from([]).toHex=="function"&&typeof Uint8Array.fromHex=="function",Ey=Array.from({length:256},(i,t)=>t.toString(16).padStart(2,"0"));function gr(i){if(Ni(i),Uf)return i.toHex();let t="";for(let e=0;e<i.length;e++)t+=Ey[i[e]];return t}const bn={_0:48,_9:57,A:65,F:70,a:97,f:102};function eh(i){if(i>=bn._0&&i<=bn._9)return i-bn._0;if(i>=bn.A&&i<=bn.F)return i-(bn.A-10);if(i>=bn.a&&i<=bn.f)return i-(bn.a-10)}function Po(i){if(typeof i!="string")throw new Error("hex string expected, got "+typeof i);if(Uf)return Uint8Array.fromHex(i);const t=i.length,e=t/2;if(t%2)throw new Error("hex string expected, got unpadded hex of length "+t);const n=new Uint8Array(e);for(let r=0,s=0;r<e;r++,s+=2){const o=eh(i.charCodeAt(s)),a=eh(i.charCodeAt(s+1));if(o===void 0||a===void 0){const c=i[s]+i[s+1];throw new Error('hex string expected, got non-hex character "'+c+'" at index '+s)}n[r]=o*16+a}return n}function Nf(i){if(typeof i!="string")throw new Error("string expected");return new Uint8Array(new TextEncoder().encode(i))}function Wc(i){return typeof i=="string"&&(i=Nf(i)),Ni(i),i}function hn(...i){let t=0;for(let n=0;n<i.length;n++){const r=i[n];Ni(r),t+=r.length}const e=new Uint8Array(t);for(let n=0,r=0;n<i.length;n++){const s=i[n];e.set(s,r),r+=s.length}return e}class Of{}function My(i){const t=n=>i().update(Wc(n)).digest(),e=i();return t.outputLen=e.outputLen,t.blockLen=e.blockLen,t.create=()=>i(),t}function qo(i=32){if(sr&&typeof sr.getRandomValues=="function")return sr.getRandomValues(new Uint8Array(i));if(sr&&typeof sr.randomBytes=="function")return Uint8Array.from(sr.randomBytes(i));throw new Error("crypto.getRandomValues must be defined")}function by(i,t,e,n){if(typeof i.setBigUint64=="function")return i.setBigUint64(t,e,n);const r=BigInt(32),s=BigInt(4294967295),o=Number(e>>r&s),a=Number(e&s),c=n?4:0,l=n?0:4;i.setUint32(t+c,o,n),i.setUint32(t+l,a,n)}function wy(i,t,e){return i&t^~i&e}function Ty(i,t,e){return i&t^i&e^t&e}class Ay extends Of{constructor(t,e,n,r){super(),this.finished=!1,this.length=0,this.pos=0,this.destroyed=!1,this.blockLen=t,this.outputLen=e,this.padOffset=n,this.isLE=r,this.buffer=new Uint8Array(t),this.view=Xa(this.buffer)}update(t){Co(this),t=Wc(t),Ni(t);const{view:e,buffer:n,blockLen:r}=this,s=t.length;for(let o=0;o<s;){const a=Math.min(r-this.pos,s-o);if(a===r){const c=Xa(t);for(;r<=s-o;o+=r)this.process(c,o);continue}n.set(t.subarray(o,o+a),this.pos),this.pos+=a,o+=a,this.pos===r&&(this.process(e,0),this.pos=0)}return this.length+=t.length,this.roundClean(),this}digestInto(t){Co(this),Sy(t,this),this.finished=!0;const{buffer:e,view:n,blockLen:r,isLE:s}=this;let{pos:o}=this;e[o++]=128,Lo(this.buffer.subarray(o)),this.padOffset>r-o&&(this.process(n,0),o=0);for(let f=o;f<r;f++)e[f]=0;by(n,r-8,BigInt(this.length*8),s),this.process(n,0);const a=Xa(t),c=this.outputLen;if(c%4)throw new Error("_sha2: outputLen should be aligned to 32bit");const l=c/4,u=this.get();if(l>u.length)throw new Error("_sha2: outputLen bigger than state");for(let f=0;f<l;f++)a.setUint32(4*f,u[f],s)}digest(){const{buffer:t,outputLen:e}=this;this.digestInto(t);const n=t.slice(0,e);return this.destroy(),n}_cloneInto(t){t||(t=new this.constructor),t.set(...this.get());const{blockLen:e,buffer:n,length:r,finished:s,destroyed:o,pos:a}=this;return t.destroyed=o,t.finished=s,t.length=r,t.pos=a,r%e&&t.buffer.set(n),t}clone(){return this._cloneInto()}}const Xn=Uint32Array.from([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]),Ry=Uint32Array.from([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),qn=new Uint32Array(64);class Cy extends Ay{constructor(t=32){super(64,t,8,!1),this.A=Xn[0]|0,this.B=Xn[1]|0,this.C=Xn[2]|0,this.D=Xn[3]|0,this.E=Xn[4]|0,this.F=Xn[5]|0,this.G=Xn[6]|0,this.H=Xn[7]|0}get(){const{A:t,B:e,C:n,D:r,E:s,F:o,G:a,H:c}=this;return[t,e,n,r,s,o,a,c]}set(t,e,n,r,s,o,a,c){this.A=t|0,this.B=e|0,this.C=n|0,this.D=r|0,this.E=s|0,this.F=o|0,this.G=a|0,this.H=c|0}process(t,e){for(let f=0;f<16;f++,e+=4)qn[f]=t.getUint32(e,!1);for(let f=16;f<64;f++){const h=qn[f-15],d=qn[f-2],g=cn(h,7)^cn(h,18)^h>>>3,_=cn(d,17)^cn(d,19)^d>>>10;qn[f]=_+qn[f-7]+g+qn[f-16]|0}let{A:n,B:r,C:s,D:o,E:a,F:c,G:l,H:u}=this;for(let f=0;f<64;f++){const h=cn(a,6)^cn(a,11)^cn(a,25),d=u+h+wy(a,c,l)+Ry[f]+qn[f]|0,_=(cn(n,2)^cn(n,13)^cn(n,22))+Ty(n,r,s)|0;u=l,l=c,c=a,a=o+d|0,o=s,s=r,r=n,n=d+_|0}n=n+this.A|0,r=r+this.B|0,s=s+this.C|0,o=o+this.D|0,a=a+this.E|0,c=c+this.F|0,l=l+this.G|0,u=u+this.H|0,this.set(n,r,s,o,a,c,l,u)}roundClean(){Lo(qn)}destroy(){this.set(0,0,0,0,0,0,0,0),Lo(this.buffer)}}const dc=My(()=>new Cy);class Ff extends Of{constructor(t,e){super(),this.finished=!1,this.destroyed=!1,If(t);const n=Wc(e);if(this.iHash=t.create(),typeof this.iHash.update!="function")throw new Error("Expected instance of class which extends utils.Hash");this.blockLen=this.iHash.blockLen,this.outputLen=this.iHash.outputLen;const r=this.blockLen,s=new Uint8Array(r);s.set(n.length>r?t.create().update(n).digest():n);for(let o=0;o<s.length;o++)s[o]^=54;this.iHash.update(s),this.oHash=t.create();for(let o=0;o<s.length;o++)s[o]^=106;this.oHash.update(s),Lo(s)}update(t){return Co(this),this.iHash.update(t),this}digestInto(t){Co(this),Ni(t,this.outputLen),this.finished=!0,this.iHash.digestInto(t),this.oHash.update(t),this.oHash.digestInto(t),this.destroy()}digest(){const t=new Uint8Array(this.oHash.outputLen);return this.digestInto(t),t}_cloneInto(t){t||(t=Object.create(Object.getPrototypeOf(this),{}));const{oHash:e,iHash:n,finished:r,destroyed:s,blockLen:o,outputLen:a}=this;return t=t,t.finished=r,t.destroyed=s,t.blockLen=o,t.outputLen=a,t.oHash=e._cloneInto(t.oHash),t.iHash=n._cloneInto(t.iHash),t}clone(){return this._cloneInto()}destroy(){this.destroyed=!0,this.oHash.destroy(),this.iHash.destroy()}}const Bf=(i,t,e)=>new Ff(i,t).update(e).digest();Bf.create=(i,t)=>new Ff(i,t);/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const Xc=BigInt(0),pc=BigInt(1);function Do(i,t=""){if(typeof i!="boolean"){const e=t&&`"${t}"`;throw new Error(e+"expected boolean, got type="+typeof i)}return i}function yi(i,t,e=""){const n=Xo(i),r=i?.length,s=t!==void 0;if(!n||s&&r!==t){const o=e&&`"${e}" `,a=s?` of length ${t}`:"",c=n?`length=${r}`:`type=${typeof i}`;throw new Error(o+"expected Uint8Array"+a+", got "+c)}return i}function to(i){const t=i.toString(16);return t.length&1?"0"+t:t}function kf(i){if(typeof i!="string")throw new Error("hex string expected, got "+typeof i);return i===""?Xc:BigInt("0x"+i)}function Ur(i){return kf(gr(i))}function zf(i){return Ni(i),kf(gr(Uint8Array.from(i).reverse()))}function Yo(i,t){return Po(i.toString(16).padStart(t*2,"0"))}function Hf(i,t){return Yo(i,t).reverse()}function ue(i,t,e){let n;if(typeof t=="string")try{n=Po(t)}catch(s){throw new Error(i+" must be hex string or Uint8Array, cause: "+s)}else if(Xo(t))n=Uint8Array.from(t);else throw new Error(i+" must be hex string or Uint8Array");const r=n.length;if(typeof e=="number"&&r!==e)throw new Error(i+" of length "+e+" expected, got "+r);return n}const qa=i=>typeof i=="bigint"&&Xc<=i;function mc(i,t,e){return qa(i)&&qa(t)&&qa(e)&&t<=i&&i<e}function Ly(i,t,e,n){if(!mc(t,e,n))throw new Error("expected valid "+i+": "+e+" <= n < "+n+", got "+t)}function Vf(i){let t;for(t=0;i>Xc;i>>=pc,t+=1);return t}const ps=i=>(pc<<BigInt(i))-pc;function Py(i,t,e){if(typeof i!="number"||i<2)throw new Error("hashLen must be a number");if(typeof t!="number"||t<2)throw new Error("qByteLen must be a number");if(typeof e!="function")throw new Error("hmacFn must be a function");const n=d=>new Uint8Array(d),r=d=>Uint8Array.of(d);let s=n(i),o=n(i),a=0;const c=()=>{s.fill(1),o.fill(0),a=0},l=(...d)=>e(o,s,...d),u=(d=n(0))=>{o=l(r(0),d),s=l(),d.length!==0&&(o=l(r(1),d),s=l())},f=()=>{if(a++>=1e3)throw new Error("drbg: tried 1000 values");let d=0;const g=[];for(;d<t;){s=l();const _=s.slice();g.push(_),d+=s.length}return hn(...g)};return(d,g)=>{c(),u(d);let _;for(;!(_=g(f()));)u();return c(),_}}function qc(i,t,e={}){if(!i||typeof i!="object")throw new Error("expected valid options object");function n(r,s,o){const a=i[r];if(o&&a===void 0)return;const c=typeof a;if(c!==s||a===null)throw new Error(`param "${r}" is invalid: expected ${s}, got ${c}`)}Object.entries(t).forEach(([r,s])=>n(r,s,!1)),Object.entries(e).forEach(([r,s])=>n(r,s,!0))}function nh(i){const t=new WeakMap;return(e,...n)=>{const r=t.get(e);if(r!==void 0)return r;const s=i(e,...n);return t.set(e,s),s}}/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const Le=BigInt(0),Ae=BigInt(1),Si=BigInt(2),Gf=BigInt(3),Wf=BigInt(4),Xf=BigInt(5),Dy=BigInt(7),qf=BigInt(8),Iy=BigInt(9),Yf=BigInt(16);function Ge(i,t){const e=i%t;return e>=Le?e:t+e}function Ve(i,t,e){let n=i;for(;t-- >Le;)n*=n,n%=e;return n}function ih(i,t){if(i===Le)throw new Error("invert: expected non-zero number");if(t<=Le)throw new Error("invert: expected positive modulus, got "+t);let e=Ge(i,t),n=t,r=Le,s=Ae;for(;e!==Le;){const a=n/e,c=n%e,l=r-s*a;n=e,e=c,r=s,s=l}if(n!==Ae)throw new Error("invert: does not exist");return Ge(r,t)}function Yc(i,t,e){if(!i.eql(i.sqr(t),e))throw new Error("Cannot find square root")}function Kf(i,t){const e=(i.ORDER+Ae)/Wf,n=i.pow(t,e);return Yc(i,n,t),n}function Uy(i,t){const e=(i.ORDER-Xf)/qf,n=i.mul(t,Si),r=i.pow(n,e),s=i.mul(t,r),o=i.mul(i.mul(s,Si),r),a=i.mul(s,i.sub(o,i.ONE));return Yc(i,a,t),a}function Ny(i){const t=ms(i),e=$f(i),n=e(t,t.neg(t.ONE)),r=e(t,n),s=e(t,t.neg(n)),o=(i+Dy)/Yf;return(a,c)=>{let l=a.pow(c,o),u=a.mul(l,n);const f=a.mul(l,r),h=a.mul(l,s),d=a.eql(a.sqr(u),c),g=a.eql(a.sqr(f),c);l=a.cmov(l,u,d),u=a.cmov(h,f,g);const _=a.eql(a.sqr(u),c),m=a.cmov(l,u,_);return Yc(a,m,c),m}}function $f(i){if(i<Gf)throw new Error("sqrt is not defined for small field");let t=i-Ae,e=0;for(;t%Si===Le;)t/=Si,e++;let n=Si;const r=ms(i);for(;rh(r,n)===1;)if(n++>1e3)throw new Error("Cannot find square root: probably non-prime P");if(e===1)return Kf;let s=r.pow(n,t);const o=(t+Ae)/Si;return function(c,l){if(c.is0(l))return l;if(rh(c,l)!==1)throw new Error("Cannot find square root");let u=e,f=c.mul(c.ONE,s),h=c.pow(l,t),d=c.pow(l,o);for(;!c.eql(h,c.ONE);){if(c.is0(h))return c.ZERO;let g=1,_=c.sqr(h);for(;!c.eql(_,c.ONE);)if(g++,_=c.sqr(_),g===u)throw new Error("Cannot find square root");const m=Ae<<BigInt(u-g-1),p=c.pow(f,m);u=g,f=c.sqr(p),h=c.mul(h,f),d=c.mul(d,p)}return d}}function Oy(i){return i%Wf===Gf?Kf:i%qf===Xf?Uy:i%Yf===Iy?Ny(i):$f(i)}const Fy=["create","isValid","is0","neg","inv","sqrt","sqr","eql","add","sub","mul","pow","div","addN","subN","mulN","sqrN"];function By(i){const t={ORDER:"bigint",MASK:"bigint",BYTES:"number",BITS:"number"},e=Fy.reduce((n,r)=>(n[r]="function",n),t);return qc(i,e),i}function ky(i,t,e){if(e<Le)throw new Error("invalid exponent, negatives unsupported");if(e===Le)return i.ONE;if(e===Ae)return t;let n=i.ONE,r=t;for(;e>Le;)e&Ae&&(n=i.mul(n,r)),r=i.sqr(r),e>>=Ae;return n}function jf(i,t,e=!1){const n=new Array(t.length).fill(e?i.ZERO:void 0),r=t.reduce((o,a,c)=>i.is0(a)?o:(n[c]=o,i.mul(o,a)),i.ONE),s=i.inv(r);return t.reduceRight((o,a,c)=>i.is0(a)?o:(n[c]=i.mul(o,n[c]),i.mul(o,a)),s),n}function rh(i,t){const e=(i.ORDER-Ae)/Si,n=i.pow(t,e),r=i.eql(n,i.ONE),s=i.eql(n,i.ZERO),o=i.eql(n,i.neg(i.ONE));if(!r&&!s&&!o)throw new Error("invalid Legendre symbol result");return r?1:s?0:-1}function Zf(i,t){t!==void 0&&fc(t);const e=t!==void 0?t:i.toString(2).length,n=Math.ceil(e/8);return{nBitLength:e,nByteLength:n}}function ms(i,t,e=!1,n={}){if(i<=Le)throw new Error("invalid field: expected ORDER > 0, got "+i);let r,s,o=!1,a;if(typeof t=="object"&&t!=null){if(n.sqrt||e)throw new Error("cannot specify opts in two arguments");const h=t;h.BITS&&(r=h.BITS),h.sqrt&&(s=h.sqrt),typeof h.isLE=="boolean"&&(e=h.isLE),typeof h.modFromBytes=="boolean"&&(o=h.modFromBytes),a=h.allowedLengths}else typeof t=="number"&&(r=t),n.sqrt&&(s=n.sqrt);const{nBitLength:c,nByteLength:l}=Zf(i,r);if(l>2048)throw new Error("invalid field: expected ORDER of <= 2048 bytes");let u;const f=Object.freeze({ORDER:i,isLE:e,BITS:c,BYTES:l,MASK:ps(c),ZERO:Le,ONE:Ae,allowedLengths:a,create:h=>Ge(h,i),isValid:h=>{if(typeof h!="bigint")throw new Error("invalid field element: expected bigint, got "+typeof h);return Le<=h&&h<i},is0:h=>h===Le,isValidNot0:h=>!f.is0(h)&&f.isValid(h),isOdd:h=>(h&Ae)===Ae,neg:h=>Ge(-h,i),eql:(h,d)=>h===d,sqr:h=>Ge(h*h,i),add:(h,d)=>Ge(h+d,i),sub:(h,d)=>Ge(h-d,i),mul:(h,d)=>Ge(h*d,i),pow:(h,d)=>ky(f,h,d),div:(h,d)=>Ge(h*ih(d,i),i),sqrN:h=>h*h,addN:(h,d)=>h+d,subN:(h,d)=>h-d,mulN:(h,d)=>h*d,inv:h=>ih(h,i),sqrt:s||(h=>(u||(u=Oy(i)),u(f,h))),toBytes:h=>e?Hf(h,l):Yo(h,l),fromBytes:(h,d=!0)=>{if(a){if(!a.includes(h.length)||h.length>l)throw new Error("Field.fromBytes: expected "+a+" bytes, got "+h.length);const _=new Uint8Array(l);_.set(h,e?0:_.length-h.length),h=_}if(h.length!==l)throw new Error("Field.fromBytes: expected "+l+" bytes, got "+h.length);let g=e?zf(h):Ur(h);if(o&&(g=Ge(g,i)),!d&&!f.isValid(g))throw new Error("invalid field element: outside of range 0..ORDER");return g},invertBatch:h=>jf(f,h),cmov:(h,d,g)=>g?d:h});return Object.freeze(f)}function Jf(i){if(typeof i!="bigint")throw new Error("field order must be bigint");const t=i.toString(2).length;return Math.ceil(t/8)}function Qf(i){const t=Jf(i);return t+Math.ceil(t/2)}function td(i,t,e=!1){const n=i.length,r=Jf(t),s=Qf(t);if(n<16||n<s||n>1024)throw new Error("expected "+s+"-1024 bytes of input, got "+n);const o=e?zf(i):Ur(i),a=Ge(o,t-Ae)+Ae;return e?Hf(a,r):Yo(a,r)}/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const Rr=BigInt(0),Ei=BigInt(1);function Io(i,t){const e=t.negate();return i?e:t}function Ya(i,t){const e=jf(i.Fp,t.map(n=>n.Z));return t.map((n,r)=>i.fromAffine(n.toAffine(e[r])))}function ed(i,t){if(!Number.isSafeInteger(i)||i<=0||i>t)throw new Error("invalid window size, expected [1.."+t+"], got W="+i)}function Ka(i,t){ed(i,t);const e=Math.ceil(t/i)+1,n=2**(i-1),r=2**i,s=ps(i),o=BigInt(i);return{windows:e,windowSize:n,mask:s,maxNumber:r,shiftBy:o}}function sh(i,t,e){const{windowSize:n,mask:r,maxNumber:s,shiftBy:o}=e;let a=Number(i&r),c=i>>o;a>n&&(a-=s,c+=Ei);const l=t*n,u=l+Math.abs(a)-1,f=a===0,h=a<0,d=t%2!==0;return{nextN:c,offset:u,isZero:f,isNeg:h,isNegF:d,offsetF:l}}function zy(i,t){if(!Array.isArray(i))throw new Error("array expected");i.forEach((e,n)=>{if(!(e instanceof t))throw new Error("invalid point at index "+n)})}function Hy(i,t){if(!Array.isArray(i))throw new Error("array of scalars expected");i.forEach((e,n)=>{if(!t.isValid(e))throw new Error("invalid scalar at index "+n)})}const $a=new WeakMap,nd=new WeakMap;function ja(i){return nd.get(i)||1}function oh(i){if(i!==Rr)throw new Error("invalid wNAF")}class Vy{constructor(t,e){this.BASE=t.BASE,this.ZERO=t.ZERO,this.Fn=t.Fn,this.bits=e}_unsafeLadder(t,e,n=this.ZERO){let r=t;for(;e>Rr;)e&Ei&&(n=n.add(r)),r=r.double(),e>>=Ei;return n}precomputeWindow(t,e){const{windows:n,windowSize:r}=Ka(e,this.bits),s=[];let o=t,a=o;for(let c=0;c<n;c++){a=o,s.push(a);for(let l=1;l<r;l++)a=a.add(o),s.push(a);o=a.double()}return s}wNAF(t,e,n){if(!this.Fn.isValid(n))throw new Error("invalid scalar");let r=this.ZERO,s=this.BASE;const o=Ka(t,this.bits);for(let a=0;a<o.windows;a++){const{nextN:c,offset:l,isZero:u,isNeg:f,isNegF:h,offsetF:d}=sh(n,a,o);n=c,u?s=s.add(Io(h,e[d])):r=r.add(Io(f,e[l]))}return oh(n),{p:r,f:s}}wNAFUnsafe(t,e,n,r=this.ZERO){const s=Ka(t,this.bits);for(let o=0;o<s.windows&&n!==Rr;o++){const{nextN:a,offset:c,isZero:l,isNeg:u}=sh(n,o,s);if(n=a,!l){const f=e[c];r=r.add(u?f.negate():f)}}return oh(n),r}getPrecomputes(t,e,n){let r=$a.get(e);return r||(r=this.precomputeWindow(e,t),t!==1&&(typeof n=="function"&&(r=n(r)),$a.set(e,r))),r}cached(t,e,n){const r=ja(t);return this.wNAF(r,this.getPrecomputes(r,t,n),e)}unsafe(t,e,n,r){const s=ja(t);return s===1?this._unsafeLadder(t,e,r):this.wNAFUnsafe(s,this.getPrecomputes(s,t,n),e,r)}createCache(t,e){ed(e,this.bits),nd.set(t,e),$a.delete(t)}hasCache(t){return ja(t)!==1}}function Gy(i,t,e,n){let r=t,s=i.ZERO,o=i.ZERO;for(;e>Rr||n>Rr;)e&Ei&&(s=s.add(r)),n&Ei&&(o=o.add(r)),r=r.double(),e>>=Ei,n>>=Ei;return{p1:s,p2:o}}function Wy(i,t,e,n){zy(e,i),Hy(n,t);const r=e.length,s=n.length;if(r!==s)throw new Error("arrays of points and scalars must have equal length");const o=i.ZERO,a=Vf(BigInt(r));let c=1;a>12?c=a-3:a>4?c=a-2:a>0&&(c=2);const l=ps(c),u=new Array(Number(l)+1).fill(o),f=Math.floor((t.BITS-1)/c)*c;let h=o;for(let d=f;d>=0;d-=c){u.fill(o);for(let _=0;_<s;_++){const m=n[_],p=Number(m>>BigInt(d)&l);u[p]=u[p].add(e[_])}let g=o;for(let _=u.length-1,m=o;_>0;_--)m=m.add(u[_]),g=g.add(m);if(h=h.add(g),d!==0)for(let _=0;_<c;_++)h=h.double()}return h}function ah(i,t,e){if(t){if(t.ORDER!==i)throw new Error("Field.ORDER must match order: Fp == p, Fn == n");return By(t),t}else return ms(i,{isLE:e})}function Xy(i,t,e={},n){if(n===void 0&&(n=i==="edwards"),!t||typeof t!="object")throw new Error(`expected valid ${i} CURVE object`);for(const c of["p","n","h"]){const l=t[c];if(!(typeof l=="bigint"&&l>Rr))throw new Error(`CURVE.${c} must be positive bigint`)}const r=ah(t.p,e.Fp,n),s=ah(t.n,e.Fn,n),a=["Gx","Gy","a","b"];for(const c of a)if(!r.isValid(t[c]))throw new Error(`CURVE.${c} must be valid field element of CURVE.Fp`);return t=Object.freeze(Object.assign({},t)),{CURVE:t,Fp:r,Fn:s}}/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const ch=(i,t)=>(i+(i>=0?t:-t)/id)/t;function qy(i,t,e){const[[n,r],[s,o]]=t,a=ch(o*i,e),c=ch(-r*i,e);let l=i-a*n-c*s,u=-a*r-c*o;const f=l<Ln,h=u<Ln;f&&(l=-l),h&&(u=-u);const d=ps(Math.ceil(Vf(e)/2))+_r;if(l<Ln||l>=d||u<Ln||u>=d)throw new Error("splitScalar (endomorphism): failed, k="+i);return{k1neg:f,k1:l,k2neg:h,k2:u}}function gc(i){if(!["compact","recovered","der"].includes(i))throw new Error('Signature format must be "compact", "recovered", or "der"');return i}function Za(i,t){const e={};for(let n of Object.keys(t))e[n]=i[n]===void 0?t[n]:i[n];return Do(e.lowS,"lowS"),Do(e.prehash,"prehash"),e.format!==void 0&&gc(e.format),e}class Yy extends Error{constructor(t=""){super(t)}}const An={Err:Yy,_tlv:{encode:(i,t)=>{const{Err:e}=An;if(i<0||i>256)throw new e("tlv.encode: wrong tag");if(t.length&1)throw new e("tlv.encode: unpadded data");const n=t.length/2,r=to(n);if(r.length/2&128)throw new e("tlv.encode: long form length too big");const s=n>127?to(r.length/2|128):"";return to(i)+s+r+t},decode(i,t){const{Err:e}=An;let n=0;if(i<0||i>256)throw new e("tlv.encode: wrong tag");if(t.length<2||t[n++]!==i)throw new e("tlv.decode: wrong tlv");const r=t[n++],s=!!(r&128);let o=0;if(!s)o=r;else{const c=r&127;if(!c)throw new e("tlv.decode(long): indefinite length not supported");if(c>4)throw new e("tlv.decode(long): byte length is too big");const l=t.subarray(n,n+c);if(l.length!==c)throw new e("tlv.decode: length bytes not complete");if(l[0]===0)throw new e("tlv.decode(long): zero leftmost byte");for(const u of l)o=o<<8|u;if(n+=c,o<128)throw new e("tlv.decode(long): not minimal encoding")}const a=t.subarray(n,n+o);if(a.length!==o)throw new e("tlv.decode: wrong value length");return{v:a,l:t.subarray(n+o)}}},_int:{encode(i){const{Err:t}=An;if(i<Ln)throw new t("integer: negative integers are not allowed");let e=to(i);if(Number.parseInt(e[0],16)&8&&(e="00"+e),e.length&1)throw new t("unexpected DER parsing assertion: unpadded hex");return e},decode(i){const{Err:t}=An;if(i[0]&128)throw new t("invalid signature integer: negative");if(i[0]===0&&!(i[1]&128))throw new t("invalid signature integer: unnecessary leading zero");return Ur(i)}},toSig(i){const{Err:t,_int:e,_tlv:n}=An,r=ue("signature",i),{v:s,l:o}=n.decode(48,r);if(o.length)throw new t("invalid signature: left bytes after parsing");const{v:a,l:c}=n.decode(2,s),{v:l,l:u}=n.decode(2,c);if(u.length)throw new t("invalid signature: left bytes after parsing");return{r:e.decode(a),s:e.decode(l)}},hexFromSig(i){const{_tlv:t,_int:e}=An,n=t.encode(2,e.encode(i.r)),r=t.encode(2,e.encode(i.s)),s=n+r;return t.encode(48,s)}},Ln=BigInt(0),_r=BigInt(1),id=BigInt(2),eo=BigInt(3),Ky=BigInt(4);function Mi(i,t){const{BYTES:e}=i;let n;if(typeof t=="bigint")n=t;else{let r=ue("private key",t);try{n=i.fromBytes(r)}catch{throw new Error(`invalid private key: expected ui8a of size ${e}, got ${typeof t}`)}}if(!i.isValidNot0(n))throw new Error("invalid private key: out of range [1..N-1]");return n}function $y(i,t={}){const e=Xy("weierstrass",i,t),{Fp:n,Fn:r}=e;let s=e.CURVE;const{h:o,n:a}=s;qc(t,{},{allowInfinityPoint:"boolean",clearCofactor:"function",isTorsionFree:"function",fromBytes:"function",toBytes:"function",endo:"object",wrapPrivateKey:"boolean"});const{endo:c}=t;if(c&&(!n.is0(s.a)||typeof c.beta!="bigint"||!Array.isArray(c.basises)))throw new Error('invalid endo: expected "beta": bigint and "basises": array');const l=sd(n,r);function u(){if(!n.isOdd)throw new Error("compression is not supported: Field does not have .isOdd()")}function f(P,b,w){const{x:C,y:A}=b.toAffine(),F=n.toBytes(C);if(Do(w,"isCompressed"),w){u();const O=!n.isOdd(A);return hn(rd(O),F)}else return hn(Uint8Array.of(4),F,n.toBytes(A))}function h(P){yi(P,void 0,"Point");const{publicKey:b,publicKeyUncompressed:w}=l,C=P.length,A=P[0],F=P.subarray(1);if(C===b&&(A===2||A===3)){const O=n.fromBytes(F);if(!n.isValid(O))throw new Error("bad point: is not on curve, wrong x");const J=_(O);let Z;try{Z=n.sqrt(J)}catch(St){const q=St instanceof Error?": "+St.message:"";throw new Error("bad point: is not on curve, sqrt error"+q)}u();const et=n.isOdd(Z);return(A&1)===1!==et&&(Z=n.neg(Z)),{x:O,y:Z}}else if(C===w&&A===4){const O=n.BYTES,J=n.fromBytes(F.subarray(0,O)),Z=n.fromBytes(F.subarray(O,O*2));if(!m(J,Z))throw new Error("bad point: is not on curve");return{x:J,y:Z}}else throw new Error(`bad point: got length ${C}, expected compressed=${b} or uncompressed=${w}`)}const d=t.toBytes||f,g=t.fromBytes||h;function _(P){const b=n.sqr(P),w=n.mul(b,P);return n.add(n.add(w,n.mul(P,s.a)),s.b)}function m(P,b){const w=n.sqr(b),C=_(P);return n.eql(w,C)}if(!m(s.Gx,s.Gy))throw new Error("bad curve params: generator point");const p=n.mul(n.pow(s.a,eo),Ky),T=n.mul(n.sqr(s.b),BigInt(27));if(n.is0(n.add(p,T)))throw new Error("bad curve params: a or b");function E(P,b,w=!1){if(!n.isValid(b)||w&&n.is0(b))throw new Error(`bad point coordinate ${P}`);return b}function R(P){if(!(P instanceof y))throw new Error("ProjectivePoint expected")}function G(P){if(!c||!c.basises)throw new Error("no endo");return qy(P,c.basises,r.ORDER)}const I=nh((P,b)=>{const{X:w,Y:C,Z:A}=P;if(n.eql(A,n.ONE))return{x:w,y:C};const F=P.is0();b==null&&(b=F?n.ONE:n.inv(A));const O=n.mul(w,b),J=n.mul(C,b),Z=n.mul(A,b);if(F)return{x:n.ZERO,y:n.ZERO};if(!n.eql(Z,n.ONE))throw new Error("invZ was invalid");return{x:O,y:J}}),D=nh(P=>{if(P.is0()){if(t.allowInfinityPoint&&!n.is0(P.Y))return;throw new Error("bad point: ZERO")}const{x:b,y:w}=P.toAffine();if(!n.isValid(b)||!n.isValid(w))throw new Error("bad point: x or y not field elements");if(!m(b,w))throw new Error("bad point: equation left != right");if(!P.isTorsionFree())throw new Error("bad point: not in prime-order subgroup");return!0});function V(P,b,w,C,A){return w=new y(n.mul(w.X,P),w.Y,w.Z),b=Io(C,b),w=Io(A,w),b.add(w)}class y{constructor(b,w,C){this.X=E("x",b),this.Y=E("y",w,!0),this.Z=E("z",C),Object.freeze(this)}static CURVE(){return s}static fromAffine(b){const{x:w,y:C}=b||{};if(!b||!n.isValid(w)||!n.isValid(C))throw new Error("invalid affine point");if(b instanceof y)throw new Error("projective point not allowed");return n.is0(w)&&n.is0(C)?y.ZERO:new y(w,C,n.ONE)}static fromBytes(b){const w=y.fromAffine(g(yi(b,void 0,"point")));return w.assertValidity(),w}static fromHex(b){return y.fromBytes(ue("pointHex",b))}get x(){return this.toAffine().x}get y(){return this.toAffine().y}precompute(b=8,w=!0){return U.createCache(this,b),w||this.multiply(eo),this}assertValidity(){D(this)}hasEvenY(){const{y:b}=this.toAffine();if(!n.isOdd)throw new Error("Field doesn't support isOdd");return!n.isOdd(b)}equals(b){R(b);const{X:w,Y:C,Z:A}=this,{X:F,Y:O,Z:J}=b,Z=n.eql(n.mul(w,J),n.mul(F,A)),et=n.eql(n.mul(C,J),n.mul(O,A));return Z&&et}negate(){return new y(this.X,n.neg(this.Y),this.Z)}double(){const{a:b,b:w}=s,C=n.mul(w,eo),{X:A,Y:F,Z:O}=this;let J=n.ZERO,Z=n.ZERO,et=n.ZERO,st=n.mul(A,A),St=n.mul(F,F),q=n.mul(O,O),j=n.mul(A,F);return j=n.add(j,j),et=n.mul(A,O),et=n.add(et,et),J=n.mul(b,et),Z=n.mul(C,q),Z=n.add(J,Z),J=n.sub(St,Z),Z=n.add(St,Z),Z=n.mul(J,Z),J=n.mul(j,J),et=n.mul(C,et),q=n.mul(b,q),j=n.sub(st,q),j=n.mul(b,j),j=n.add(j,et),et=n.add(st,st),st=n.add(et,st),st=n.add(st,q),st=n.mul(st,j),Z=n.add(Z,st),q=n.mul(F,O),q=n.add(q,q),st=n.mul(q,j),J=n.sub(J,st),et=n.mul(q,St),et=n.add(et,et),et=n.add(et,et),new y(J,Z,et)}add(b){R(b);const{X:w,Y:C,Z:A}=this,{X:F,Y:O,Z:J}=b;let Z=n.ZERO,et=n.ZERO,st=n.ZERO;const St=s.a,q=n.mul(s.b,eo);let j=n.mul(w,F),it=n.mul(C,O),nt=n.mul(A,J),vt=n.add(w,C),ht=n.add(F,O);vt=n.mul(vt,ht),ht=n.add(j,it),vt=n.sub(vt,ht),ht=n.add(w,A);let xt=n.add(F,J);return ht=n.mul(ht,xt),xt=n.add(j,nt),ht=n.sub(ht,xt),xt=n.add(C,A),Z=n.add(O,J),xt=n.mul(xt,Z),Z=n.add(it,nt),xt=n.sub(xt,Z),st=n.mul(St,ht),Z=n.mul(q,nt),st=n.add(Z,st),Z=n.sub(it,st),st=n.add(it,st),et=n.mul(Z,st),it=n.add(j,j),it=n.add(it,j),nt=n.mul(St,nt),ht=n.mul(q,ht),it=n.add(it,nt),nt=n.sub(j,nt),nt=n.mul(St,nt),ht=n.add(ht,nt),j=n.mul(it,ht),et=n.add(et,j),j=n.mul(xt,ht),Z=n.mul(vt,Z),Z=n.sub(Z,j),j=n.mul(vt,it),st=n.mul(xt,st),st=n.add(st,j),new y(Z,et,st)}subtract(b){return this.add(b.negate())}is0(){return this.equals(y.ZERO)}multiply(b){const{endo:w}=t;if(!r.isValidNot0(b))throw new Error("invalid scalar: out of range");let C,A;const F=O=>U.cached(this,O,J=>Ya(y,J));if(w){const{k1neg:O,k1:J,k2neg:Z,k2:et}=G(b),{p:st,f:St}=F(J),{p:q,f:j}=F(et);A=St.add(j),C=V(w.beta,st,q,O,Z)}else{const{p:O,f:J}=F(b);C=O,A=J}return Ya(y,[C,A])[0]}multiplyUnsafe(b){const{endo:w}=t,C=this;if(!r.isValid(b))throw new Error("invalid scalar: out of range");if(b===Ln||C.is0())return y.ZERO;if(b===_r)return C;if(U.hasCache(this))return this.multiply(b);if(w){const{k1neg:A,k1:F,k2neg:O,k2:J}=G(b),{p1:Z,p2:et}=Gy(y,C,F,J);return V(w.beta,Z,et,A,O)}else return U.unsafe(C,b)}multiplyAndAddUnsafe(b,w,C){const A=this.multiplyUnsafe(w).add(b.multiplyUnsafe(C));return A.is0()?void 0:A}toAffine(b){return I(this,b)}isTorsionFree(){const{isTorsionFree:b}=t;return o===_r?!0:b?b(y,this):U.unsafe(this,a).is0()}clearCofactor(){const{clearCofactor:b}=t;return o===_r?this:b?b(y,this):this.multiplyUnsafe(o)}isSmallOrder(){return this.multiplyUnsafe(o).is0()}toBytes(b=!0){return Do(b,"isCompressed"),this.assertValidity(),d(y,this,b)}toHex(b=!0){return gr(this.toBytes(b))}toString(){return`<Point ${this.is0()?"ZERO":this.toHex()}>`}get px(){return this.X}get py(){return this.X}get pz(){return this.Z}toRawBytes(b=!0){return this.toBytes(b)}_setWindowSize(b){this.precompute(b)}static normalizeZ(b){return Ya(y,b)}static msm(b,w){return Wy(y,r,b,w)}static fromPrivateKey(b){return y.BASE.multiply(Mi(r,b))}}y.BASE=new y(s.Gx,s.Gy,n.ONE),y.ZERO=new y(n.ZERO,n.ONE,n.ZERO),y.Fp=n,y.Fn=r;const x=r.BITS,U=new Vy(y,t.endo?Math.ceil(x/2):x);return y.BASE.precompute(8),y}function rd(i){return Uint8Array.of(i?2:3)}function sd(i,t){return{secretKey:t.BYTES,publicKey:1+i.BYTES,publicKeyUncompressed:1+2*i.BYTES,publicKeyHasPrefix:!0,signature:2*t.BYTES}}function jy(i,t={}){const{Fn:e}=i,n=t.randomBytes||qo,r=Object.assign(sd(i.Fp,e),{seed:Qf(e.ORDER)});function s(d){try{return!!Mi(e,d)}catch{return!1}}function o(d,g){const{publicKey:_,publicKeyUncompressed:m}=r;try{const p=d.length;return g===!0&&p!==_||g===!1&&p!==m?!1:!!i.fromBytes(d)}catch{return!1}}function a(d=n(r.seed)){return td(yi(d,r.seed,"seed"),e.ORDER)}function c(d,g=!0){return i.BASE.multiply(Mi(e,d)).toBytes(g)}function l(d){const g=a(d);return{secretKey:g,publicKey:c(g)}}function u(d){if(typeof d=="bigint")return!1;if(d instanceof i)return!0;const{secretKey:g,publicKey:_,publicKeyUncompressed:m}=r;if(e.allowedLengths||g===_)return;const p=ue("key",d).length;return p===_||p===m}function f(d,g,_=!0){if(u(d)===!0)throw new Error("first arg must be private key");if(u(g)===!1)throw new Error("second arg must be public key");const m=Mi(e,d);return i.fromHex(g).multiply(m).toBytes(_)}return Object.freeze({getPublicKey:c,getSharedSecret:f,keygen:l,Point:i,utils:{isValidSecretKey:s,isValidPublicKey:o,randomSecretKey:a,isValidPrivateKey:s,randomPrivateKey:a,normPrivateKeyToScalar:d=>Mi(e,d),precompute(d=8,g=i.BASE){return g.precompute(d,!1)}},lengths:r})}function Zy(i,t,e={}){If(t),qc(e,{},{hmac:"function",lowS:"boolean",randomBytes:"function",bits2int:"function",bits2int_modN:"function"});const n=e.randomBytes||qo,r=e.hmac||((w,...C)=>Bf(t,w,hn(...C))),{Fp:s,Fn:o}=i,{ORDER:a,BITS:c}=o,{keygen:l,getPublicKey:u,getSharedSecret:f,utils:h,lengths:d}=jy(i,e),g={prehash:!1,lowS:typeof e.lowS=="boolean"?e.lowS:!1,format:void 0,extraEntropy:!1},_="compact";function m(w){const C=a>>_r;return w>C}function p(w,C){if(!o.isValidNot0(C))throw new Error(`invalid signature ${w}: out of range 1..Point.Fn.ORDER`);return C}function T(w,C){gc(C);const A=d.signature,F=C==="compact"?A:C==="recovered"?A+1:void 0;return yi(w,F,`${C} signature`)}class E{constructor(C,A,F){this.r=p("r",C),this.s=p("s",A),F!=null&&(this.recovery=F),Object.freeze(this)}static fromBytes(C,A=_){T(C,A);let F;if(A==="der"){const{r:et,s:st}=An.toSig(yi(C));return new E(et,st)}A==="recovered"&&(F=C[0],A="compact",C=C.subarray(1));const O=o.BYTES,J=C.subarray(0,O),Z=C.subarray(O,O*2);return new E(o.fromBytes(J),o.fromBytes(Z),F)}static fromHex(C,A){return this.fromBytes(Po(C),A)}addRecoveryBit(C){return new E(this.r,this.s,C)}recoverPublicKey(C){const A=s.ORDER,{r:F,s:O,recovery:J}=this;if(J==null||![0,1,2,3].includes(J))throw new Error("recovery id invalid");if(a*id<A&&J>1)throw new Error("recovery id is ambiguous for h>1 curve");const et=J===2||J===3?F+a:F;if(!s.isValid(et))throw new Error("recovery id 2 or 3 invalid");const st=s.toBytes(et),St=i.fromBytes(hn(rd((J&1)===0),st)),q=o.inv(et),j=G(ue("msgHash",C)),it=o.create(-j*q),nt=o.create(O*q),vt=i.BASE.multiplyUnsafe(it).add(St.multiplyUnsafe(nt));if(vt.is0())throw new Error("point at infinify");return vt.assertValidity(),vt}hasHighS(){return m(this.s)}toBytes(C=_){if(gc(C),C==="der")return Po(An.hexFromSig(this));const A=o.toBytes(this.r),F=o.toBytes(this.s);if(C==="recovered"){if(this.recovery==null)throw new Error("recovery bit must be present");return hn(Uint8Array.of(this.recovery),A,F)}return hn(A,F)}toHex(C){return gr(this.toBytes(C))}assertValidity(){}static fromCompact(C){return E.fromBytes(ue("sig",C),"compact")}static fromDER(C){return E.fromBytes(ue("sig",C),"der")}normalizeS(){return this.hasHighS()?new E(this.r,o.neg(this.s),this.recovery):this}toDERRawBytes(){return this.toBytes("der")}toDERHex(){return gr(this.toBytes("der"))}toCompactRawBytes(){return this.toBytes("compact")}toCompactHex(){return gr(this.toBytes("compact"))}}const R=e.bits2int||function(C){if(C.length>8192)throw new Error("input is too large");const A=Ur(C),F=C.length*8-c;return F>0?A>>BigInt(F):A},G=e.bits2int_modN||function(C){return o.create(R(C))},I=ps(c);function D(w){return Ly("num < 2^"+c,w,Ln,I),o.toBytes(w)}function V(w,C){return yi(w,void 0,"message"),C?yi(t(w),void 0,"prehashed message"):w}function y(w,C,A){if(["recovered","canonical"].some(it=>it in A))throw new Error("sign() legacy options not supported");const{lowS:F,prehash:O,extraEntropy:J}=Za(A,g);w=V(w,O);const Z=G(w),et=Mi(o,C),st=[D(et),D(Z)];if(J!=null&&J!==!1){const it=J===!0?n(d.secretKey):J;st.push(ue("extraEntropy",it))}const St=hn(...st),q=Z;function j(it){const nt=R(it);if(!o.isValidNot0(nt))return;const vt=o.inv(nt),ht=i.BASE.multiply(nt).toAffine(),xt=o.create(ht.x);if(xt===Ln)return;const N=o.create(vt*o.create(q+xt*et));if(N===Ln)return;let Rt=(ht.x===xt?0:2)|Number(ht.y&_r),Ut=N;return F&&m(N)&&(Ut=o.neg(N),Rt^=1),new E(xt,Ut,Rt)}return{seed:St,k2sig:j}}function x(w,C,A={}){w=ue("message",w);const{seed:F,k2sig:O}=y(w,C,A);return Py(t.outputLen,o.BYTES,r)(F,O)}function U(w){let C;const A=typeof w=="string"||Xo(w),F=!A&&w!==null&&typeof w=="object"&&typeof w.r=="bigint"&&typeof w.s=="bigint";if(!A&&!F)throw new Error("invalid signature, expected Uint8Array, hex string or Signature instance");if(F)C=new E(w.r,w.s);else if(A){try{C=E.fromBytes(ue("sig",w),"der")}catch(O){if(!(O instanceof An.Err))throw O}if(!C)try{C=E.fromBytes(ue("sig",w),"compact")}catch{return!1}}return C||!1}function P(w,C,A,F={}){const{lowS:O,prehash:J,format:Z}=Za(F,g);if(A=ue("publicKey",A),C=V(ue("message",C),J),"strict"in F)throw new Error("options.strict was renamed to lowS");const et=Z===void 0?U(w):E.fromBytes(ue("sig",w),Z);if(et===!1)return!1;try{const st=i.fromBytes(A);if(O&&et.hasHighS())return!1;const{r:St,s:q}=et,j=G(C),it=o.inv(q),nt=o.create(j*it),vt=o.create(St*it),ht=i.BASE.multiplyUnsafe(nt).add(st.multiplyUnsafe(vt));return ht.is0()?!1:o.create(ht.x)===St}catch{return!1}}function b(w,C,A={}){const{prehash:F}=Za(A,g);return C=V(C,F),E.fromBytes(w,"recovered").recoverPublicKey(C).toBytes()}return Object.freeze({keygen:l,getPublicKey:u,getSharedSecret:f,utils:h,lengths:d,Point:i,sign:x,verify:P,recoverPublicKey:b,Signature:E,hash:t})}function Jy(i){const t={a:i.a,b:i.b,p:i.Fp.ORDER,n:i.n,h:i.h,Gx:i.Gx,Gy:i.Gy},e=i.Fp;let n=i.allowedPrivateKeyLengths?Array.from(new Set(i.allowedPrivateKeyLengths.map(o=>Math.ceil(o/2)))):void 0;const r=ms(t.n,{BITS:i.nBitLength,allowedLengths:n,modFromBytes:i.wrapPrivateKey}),s={Fp:e,Fn:r,allowInfinityPoint:i.allowInfinityPoint,endo:i.endo,isTorsionFree:i.isTorsionFree,clearCofactor:i.clearCofactor,fromBytes:i.fromBytes,toBytes:i.toBytes};return{CURVE:t,curveOpts:s}}function Qy(i){const{CURVE:t,curveOpts:e}=Jy(i),n={hmac:i.hmac,randomBytes:i.randomBytes,lowS:i.lowS,bits2int:i.bits2int,bits2int_modN:i.bits2int_modN};return{CURVE:t,curveOpts:e,hash:i.hash,ecdsaOpts:n}}function tS(i,t){const e=t.Point;return Object.assign({},t,{ProjectivePoint:e,CURVE:Object.assign({},i,Zf(e.Fn.ORDER,e.Fn.BITS))})}function eS(i){const{CURVE:t,curveOpts:e,hash:n,ecdsaOpts:r}=Qy(i),s=$y(t,e),o=Zy(s,n,r);return tS(i,o)}/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */function nS(i,t){const e=n=>eS({...i,hash:n});return{...e(t),create:e}}/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const Cr={p:BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"),n:BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"),h:BigInt(1),a:BigInt(0),b:BigInt(7),Gx:BigInt("0x79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798"),Gy:BigInt("0x483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8")},iS={beta:BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),basises:[[BigInt("0x3086d221a7d46bcde86c90e49284eb15"),-BigInt("0xe4437ed6010e88286f547fa90abfe4c3")],[BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"),BigInt("0x3086d221a7d46bcde86c90e49284eb15")]]},rS=BigInt(0),lh=BigInt(1),_c=BigInt(2);function sS(i){const t=Cr.p,e=BigInt(3),n=BigInt(6),r=BigInt(11),s=BigInt(22),o=BigInt(23),a=BigInt(44),c=BigInt(88),l=i*i*i%t,u=l*l*i%t,f=Ve(u,e,t)*u%t,h=Ve(f,e,t)*u%t,d=Ve(h,_c,t)*l%t,g=Ve(d,r,t)*d%t,_=Ve(g,s,t)*g%t,m=Ve(_,a,t)*_%t,p=Ve(m,c,t)*m%t,T=Ve(p,a,t)*_%t,E=Ve(T,e,t)*u%t,R=Ve(E,o,t)*g%t,G=Ve(R,n,t)*l%t,I=Ve(G,_c,t);if(!Uo.eql(Uo.sqr(I),i))throw new Error("Cannot find square root");return I}const Uo=ms(Cr.p,{sqrt:sS}),od=nS({...Cr,Fp:Uo,lowS:!0,endo:iS},dc),uh={};function No(i,...t){let e=uh[i];if(e===void 0){const n=dc(Nf(i));e=hn(n,n),uh[i]=e}return dc(hn(e,...t))}const Kc=i=>i.toBytes(!0).slice(1),Nr=od.Point,$c=i=>i%_c===rS;function vc(i){const{Fn:t,BASE:e}=Nr,n=Mi(t,i),r=e.multiply(n);return{scalar:$c(r.y)?n:t.neg(n),bytes:Kc(r)}}function ad(i){const t=Uo;if(!t.isValidNot0(i))throw new Error("invalid x: Fail if x ≥ p");const e=t.create(i*i),n=t.create(e*i+BigInt(7));let r=t.sqrt(n);$c(r)||(r=t.neg(r));const s=Nr.fromAffine({x:i,y:r});return s.assertValidity(),s}const is=Ur;function cd(...i){return Nr.Fn.create(is(No("BIP0340/challenge",...i)))}function hh(i){return vc(i).bytes}function oS(i,t,e=qo(32)){const{Fn:n}=Nr,r=ue("message",i),{bytes:s,scalar:o}=vc(t),a=ue("auxRand",e,32),c=n.toBytes(o^is(No("BIP0340/aux",a))),l=No("BIP0340/nonce",c,s,r),{bytes:u,scalar:f}=vc(l),h=cd(u,s,r),d=new Uint8Array(64);if(d.set(u,0),d.set(n.toBytes(n.create(f+h*o)),32),!ld(d,r,s))throw new Error("sign: Invalid signature produced");return d}function ld(i,t,e){const{Fn:n,BASE:r}=Nr,s=ue("signature",i,64),o=ue("message",t),a=ue("publicKey",e,32);try{const c=ad(is(a)),l=is(s.subarray(0,32));if(!mc(l,lh,Cr.p))return!1;const u=is(s.subarray(32,64));if(!mc(u,lh,Cr.n))return!1;const f=cd(n.toBytes(l),Kc(c),o),h=r.multiplyUnsafe(u).add(c.multiplyUnsafe(n.neg(f))),{x:d,y:g}=h.toAffine();return!(h.is0()||!$c(g)||d!==l)}catch{return!1}}const jc=(()=>{const e=(r=qo(48))=>td(r,Cr.n);od.utils.randomSecretKey;function n(r){const s=e(r);return{secretKey:s,publicKey:hh(s)}}return{keygen:n,getPublicKey:hh,sign:oS,verify:ld,Point:Nr,utils:{randomSecretKey:e,randomPrivateKey:e,taggedHash:No,lift_x:ad,pointToBytes:Kc,numberToBytesBE:Yo,bytesToNumberBE:Ur,mod:Ge},lengths:{secretKey:32,publicKey:32,publicKeyHasPrefix:!1,signature:32*2,seed:48}}})(),{floor:xc,random:aS,sin:cS}=Math,os="Trystero",as=(i,t)=>Array(i).fill().map(t),fh="0123456789AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz",yc=i=>as(i,()=>fh[xc(aS()*fh.length)]).join(""),ar=yc(20),cr=Promise.all.bind(Promise),Zc=typeof window<"u",{entries:dh,fromEntries:lS,keys:uS}=Object,mi=()=>{},Rn=i=>new Error(`${os}: ${i}`),hS=new TextEncoder,fS=new TextDecoder,Ti=i=>hS.encode(i),fo=i=>fS.decode(i),Sc=i=>i.reduce((t,e)=>t+e.toString(16).padStart(2,"0"),""),no=(...i)=>i.join("@"),dS=(i,t)=>{const e=[...i],n=()=>{const s=cS(t++)*1e4;return s-xc(s)};let r=e.length;for(;r;){const s=xc(n()*r--);[e[r],e[s]]=[e[s],e[r]]}return e},pS=(i,t,e,n)=>(i.relayUrls||dS(t,ud(i.appId))).slice(0,i.relayUrls?i.relayUrls.length:i.relayRedundancy||e),In=JSON.stringify,Oo=JSON.parse,ud=(i,t=Number.MAX_SAFE_INTEGER)=>i.split("").reduce((e,n)=>e+n.charCodeAt(0),0)%t,ph=3333,io={},mS=(i,t)=>{const e={},n=()=>{const r=new WebSocket(i);r.onclose=()=>{io[i]??=ph,setTimeout(n,io[i]),io[i]*=2},r.onmessage=s=>t(s.data),e.socket=r,e.url=r.url,e.ready=new Promise(s=>r.onopen=()=>{s(e),io[i]=ph}),e.send=s=>{r.readyState===1&&r.send(s)}};return n(),e},Jc="AES-GCM",Ja={},gS=i=>btoa(String.fromCharCode.apply(null,new Uint8Array(i))),_S=i=>{const t=atob(i);return new Uint8Array(t.length).map((e,n)=>t.charCodeAt(n)).buffer},ro=async i=>{if(Ja[i])return Ja[i];const t=Array.from(new Uint8Array(await crypto.subtle.digest("SHA-1",Ti(i)))).map(e=>e.toString(36)).join("");return Ja[i]=t,t},vS=async(i,t,e)=>crypto.subtle.importKey("raw",await crypto.subtle.digest({name:"SHA-256"},Ti(`${i}:${t}:${e}`)),{name:Jc},!1,["encrypt","decrypt"]),hd="$",fd=",",xS=async(i,t)=>{const e=crypto.getRandomValues(new Uint8Array(16));return e.join(fd)+hd+gS(await crypto.subtle.encrypt({name:Jc,iv:e},await i,Ti(t)))},yS=async(i,t)=>{const[e,n]=t.split(hd);return fo(await crypto.subtle.decrypt({name:Jc,iv:new Uint8Array(e.split(fd))},await i,_S(n)))};var SS=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function dd(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Ec={exports:{}},Qa,mh;function ES(){if(mh)return Qa;mh=1;var i=1e3,t=i*60,e=t*60,n=e*24,r=n*7,s=n*365.25;Qa=function(u,f){f=f||{};var h=typeof u;if(h==="string"&&u.length>0)return o(u);if(h==="number"&&isFinite(u))return f.long?c(u):a(u);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(u))};function o(u){if(u=String(u),!(u.length>100)){var f=/^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(u);if(f){var h=parseFloat(f[1]),d=(f[2]||"ms").toLowerCase();switch(d){case"years":case"year":case"yrs":case"yr":case"y":return h*s;case"weeks":case"week":case"w":return h*r;case"days":case"day":case"d":return h*n;case"hours":case"hour":case"hrs":case"hr":case"h":return h*e;case"minutes":case"minute":case"mins":case"min":case"m":return h*t;case"seconds":case"second":case"secs":case"sec":case"s":return h*i;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return h;default:return}}}}function a(u){var f=Math.abs(u);return f>=n?Math.round(u/n)+"d":f>=e?Math.round(u/e)+"h":f>=t?Math.round(u/t)+"m":f>=i?Math.round(u/i)+"s":u+"ms"}function c(u){var f=Math.abs(u);return f>=n?l(u,f,n,"day"):f>=e?l(u,f,e,"hour"):f>=t?l(u,f,t,"minute"):f>=i?l(u,f,i,"second"):u+" ms"}function l(u,f,h,d){var g=f>=h*1.5;return Math.round(u/h)+" "+d+(g?"s":"")}return Qa}function MS(i){e.debug=e,e.default=e,e.coerce=c,e.disable=o,e.enable=r,e.enabled=a,e.humanize=ES(),e.destroy=l,Object.keys(i).forEach(u=>{e[u]=i[u]}),e.names=[],e.skips=[],e.formatters={};function t(u){let f=0;for(let h=0;h<u.length;h++)f=(f<<5)-f+u.charCodeAt(h),f|=0;return e.colors[Math.abs(f)%e.colors.length]}e.selectColor=t;function e(u){let f,h=null,d,g;function _(...m){if(!_.enabled)return;const p=_,T=Number(new Date),E=T-(f||T);p.diff=E,p.prev=f,p.curr=T,f=T,m[0]=e.coerce(m[0]),typeof m[0]!="string"&&m.unshift("%O");let R=0;m[0]=m[0].replace(/%([a-zA-Z%])/g,(I,D)=>{if(I==="%%")return"%";R++;const V=e.formatters[D];if(typeof V=="function"){const y=m[R];I=V.call(p,y),m.splice(R,1),R--}return I}),e.formatArgs.call(p,m),(p.log||e.log).apply(p,m)}return _.namespace=u,_.useColors=e.useColors(),_.color=e.selectColor(u),_.extend=n,_.destroy=e.destroy,Object.defineProperty(_,"enabled",{enumerable:!0,configurable:!1,get:()=>h!==null?h:(d!==e.namespaces&&(d=e.namespaces,g=e.enabled(u)),g),set:m=>{h=m}}),typeof e.init=="function"&&e.init(_),_}function n(u,f){const h=e(this.namespace+(typeof f>"u"?":":f)+u);return h.log=this.log,h}function r(u){e.save(u),e.namespaces=u,e.names=[],e.skips=[];const f=(typeof u=="string"?u:"").trim().replace(/\s+/g,",").split(",").filter(Boolean);for(const h of f)h[0]==="-"?e.skips.push(h.slice(1)):e.names.push(h)}function s(u,f){let h=0,d=0,g=-1,_=0;for(;h<u.length;)if(d<f.length&&(f[d]===u[h]||f[d]==="*"))f[d]==="*"?(g=d,_=h,d++):(h++,d++);else if(g!==-1)d=g+1,_++,h=_;else return!1;for(;d<f.length&&f[d]==="*";)d++;return d===f.length}function o(){const u=[...e.names,...e.skips.map(f=>"-"+f)].join(",");return e.enable(""),u}function a(u){for(const f of e.skips)if(s(u,f))return!1;for(const f of e.names)if(s(u,f))return!0;return!1}function c(u){return u instanceof Error?u.stack||u.message:u}function l(){console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.")}return e.enable(e.load()),e}var bS=MS;(function(i,t){var e={};t.formatArgs=r,t.save=s,t.load=o,t.useColors=n,t.storage=a(),t.destroy=(()=>{let l=!1;return()=>{l||(l=!0,console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."))}})(),t.colors=["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33","#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF","#3399CC","#3399FF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF","#6633CC","#6633FF","#66CC00","#66CC33","#9900CC","#9900FF","#9933CC","#9933FF","#99CC00","#99CC33","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33","#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF","#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"];function n(){if(typeof window<"u"&&window.process&&(window.process.type==="renderer"||window.process.__nwjs))return!0;if(typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))return!1;let l;return typeof document<"u"&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||typeof window<"u"&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||typeof navigator<"u"&&navigator.userAgent&&(l=navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/))&&parseInt(l[1],10)>=31||typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)}function r(l){if(l[0]=(this.useColors?"%c":"")+this.namespace+(this.useColors?" %c":" ")+l[0]+(this.useColors?"%c ":" ")+"+"+i.exports.humanize(this.diff),!this.useColors)return;const u="color: "+this.color;l.splice(1,0,u,"color: inherit");let f=0,h=0;l[0].replace(/%[a-zA-Z%]/g,d=>{d!=="%%"&&(f++,d==="%c"&&(h=f))}),l.splice(h,0,u)}t.log=console.debug||console.log||(()=>{});function s(l){try{l?t.storage.setItem("debug",l):t.storage.removeItem("debug")}catch{}}function o(){let l;try{l=t.storage.getItem("debug")||t.storage.getItem("DEBUG")}catch{}return!l&&typeof process<"u"&&"env"in process&&(l=e.DEBUG),l}function a(){try{return localStorage}catch{}}i.exports=bS(t);const{formatters:c}=i.exports;c.j=function(l){try{return JSON.stringify(l)}catch(u){return"[UnexpectedJSONParseError]: "+u.message}}})(Ec,Ec.exports);var wS=Ec.exports;const TS=dd(wS),Dn=typeof window<"u"?window:self,Mc=Dn.RTCPeerConnection||Dn.mozRTCPeerConnection||Dn.webkitRTCPeerConnection,AS=Dn.RTCSessionDescription||Dn.mozRTCSessionDescription||Dn.webkitRTCSessionDescription,RS=Dn.RTCIceCandidate||Dn.mozRTCIceCandidate||Dn.webkitRTCIceCandidate;var Qc={exports:{}},vr=typeof Reflect=="object"?Reflect:null,gh=vr&&typeof vr.apply=="function"?vr.apply:function(t,e,n){return Function.prototype.apply.call(t,e,n)},po;vr&&typeof vr.ownKeys=="function"?po=vr.ownKeys:Object.getOwnPropertySymbols?po=function(t){return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))}:po=function(t){return Object.getOwnPropertyNames(t)};function CS(i){console&&console.warn&&console.warn(i)}var pd=Number.isNaN||function(t){return t!==t};function ee(){ee.init.call(this)}Qc.exports=ee;Qc.exports.once=IS;ee.EventEmitter=ee;ee.prototype._events=void 0;ee.prototype._eventsCount=0;ee.prototype._maxListeners=void 0;var _h=10;function Ko(i){if(typeof i!="function")throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof i)}Object.defineProperty(ee,"defaultMaxListeners",{enumerable:!0,get:function(){return _h},set:function(i){if(typeof i!="number"||i<0||pd(i))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+i+".");_h=i}});ee.init=function(){(this._events===void 0||this._events===Object.getPrototypeOf(this)._events)&&(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0};ee.prototype.setMaxListeners=function(t){if(typeof t!="number"||t<0||pd(t))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+t+".");return this._maxListeners=t,this};function md(i){return i._maxListeners===void 0?ee.defaultMaxListeners:i._maxListeners}ee.prototype.getMaxListeners=function(){return md(this)};ee.prototype.emit=function(t){for(var e=[],n=1;n<arguments.length;n++)e.push(arguments[n]);var r=t==="error",s=this._events;if(s!==void 0)r=r&&s.error===void 0;else if(!r)return!1;if(r){var o;if(e.length>0&&(o=e[0]),o instanceof Error)throw o;var a=new Error("Unhandled error."+(o?" ("+o.message+")":""));throw a.context=o,a}var c=s[t];if(c===void 0)return!1;if(typeof c=="function")gh(c,this,e);else for(var l=c.length,u=yd(c,l),n=0;n<l;++n)gh(u[n],this,e);return!0};function gd(i,t,e,n){var r,s,o;if(Ko(e),s=i._events,s===void 0?(s=i._events=Object.create(null),i._eventsCount=0):(s.newListener!==void 0&&(i.emit("newListener",t,e.listener?e.listener:e),s=i._events),o=s[t]),o===void 0)o=s[t]=e,++i._eventsCount;else if(typeof o=="function"?o=s[t]=n?[e,o]:[o,e]:n?o.unshift(e):o.push(e),r=md(i),r>0&&o.length>r&&!o.warned){o.warned=!0;var a=new Error("Possible EventEmitter memory leak detected. "+o.length+" "+String(t)+" listeners added. Use emitter.setMaxListeners() to increase limit");a.name="MaxListenersExceededWarning",a.emitter=i,a.type=t,a.count=o.length,CS(a)}return i}ee.prototype.addListener=function(t,e){return gd(this,t,e,!1)};ee.prototype.on=ee.prototype.addListener;ee.prototype.prependListener=function(t,e){return gd(this,t,e,!0)};function LS(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,arguments.length===0?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function _d(i,t,e){var n={fired:!1,wrapFn:void 0,target:i,type:t,listener:e},r=LS.bind(n);return r.listener=e,n.wrapFn=r,r}ee.prototype.once=function(t,e){return Ko(e),this.on(t,_d(this,t,e)),this};ee.prototype.prependOnceListener=function(t,e){return Ko(e),this.prependListener(t,_d(this,t,e)),this};ee.prototype.removeListener=function(t,e){var n,r,s,o,a;if(Ko(e),r=this._events,r===void 0)return this;if(n=r[t],n===void 0)return this;if(n===e||n.listener===e)--this._eventsCount===0?this._events=Object.create(null):(delete r[t],r.removeListener&&this.emit("removeListener",t,n.listener||e));else if(typeof n!="function"){for(s=-1,o=n.length-1;o>=0;o--)if(n[o]===e||n[o].listener===e){a=n[o].listener,s=o;break}if(s<0)return this;s===0?n.shift():PS(n,s),n.length===1&&(r[t]=n[0]),r.removeListener!==void 0&&this.emit("removeListener",t,a||e)}return this};ee.prototype.off=ee.prototype.removeListener;ee.prototype.removeAllListeners=function(t){var e,n,r;if(n=this._events,n===void 0)return this;if(n.removeListener===void 0)return arguments.length===0?(this._events=Object.create(null),this._eventsCount=0):n[t]!==void 0&&(--this._eventsCount===0?this._events=Object.create(null):delete n[t]),this;if(arguments.length===0){var s=Object.keys(n),o;for(r=0;r<s.length;++r)o=s[r],o!=="removeListener"&&this.removeAllListeners(o);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if(e=n[t],typeof e=="function")this.removeListener(t,e);else if(e!==void 0)for(r=e.length-1;r>=0;r--)this.removeListener(t,e[r]);return this};function vd(i,t,e){var n=i._events;if(n===void 0)return[];var r=n[t];return r===void 0?[]:typeof r=="function"?e?[r.listener||r]:[r]:e?DS(r):yd(r,r.length)}ee.prototype.listeners=function(t){return vd(this,t,!0)};ee.prototype.rawListeners=function(t){return vd(this,t,!1)};ee.listenerCount=function(i,t){return typeof i.listenerCount=="function"?i.listenerCount(t):xd.call(i,t)};ee.prototype.listenerCount=xd;function xd(i){var t=this._events;if(t!==void 0){var e=t[i];if(typeof e=="function")return 1;if(e!==void 0)return e.length}return 0}ee.prototype.eventNames=function(){return this._eventsCount>0?po(this._events):[]};function yd(i,t){for(var e=new Array(t),n=0;n<t;++n)e[n]=i[n];return e}function PS(i,t){for(;t+1<i.length;t++)i[t]=i[t+1];i.pop()}function DS(i){for(var t=new Array(i.length),e=0;e<t.length;++e)t[e]=i[e].listener||i[e];return t}function IS(i,t){return new Promise(function(e,n){function r(o){i.removeListener(t,s),n(o)}function s(){typeof i.removeListener=="function"&&i.removeListener("error",r),e([].slice.call(arguments))}Sd(i,t,s,{once:!0}),t!=="error"&&US(i,r,{once:!0})})}function US(i,t,e){typeof i.on=="function"&&Sd(i,"error",t,e)}function Sd(i,t,e,n){if(typeof i.on=="function")n.once?i.once(t,e):i.on(t,e);else if(typeof i.addEventListener=="function")i.addEventListener(t,function r(s){n.once&&i.removeEventListener(t,r),e(s)});else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof i)}var NS=Qc.exports,OS=NS,FS=class{constructor(t){if(!(t>0)||t-1&t)throw new Error("Max size for a FixedFIFO should be a power of two");this.buffer=new Array(t),this.mask=t-1,this.top=0,this.btm=0,this.next=null}clear(){this.top=this.btm=0,this.next=null,this.buffer.fill(void 0)}push(t){return this.buffer[this.top]!==void 0?!1:(this.buffer[this.top]=t,this.top=this.top+1&this.mask,!0)}shift(){const t=this.buffer[this.btm];if(t!==void 0)return this.buffer[this.btm]=void 0,this.btm=this.btm+1&this.mask,t}peek(){return this.buffer[this.btm]}isEmpty(){return this.buffer[this.btm]===void 0}};const vh=FS;var BS=class{constructor(t){this.hwm=t||16,this.head=new vh(this.hwm),this.tail=this.head,this.length=0}clear(){this.head=this.tail,this.head.clear(),this.length=0}push(t){if(this.length++,!this.head.push(t)){const e=this.head;this.head=e.next=new vh(2*this.head.buffer.length),this.head.push(t)}}shift(){this.length!==0&&this.length--;const t=this.tail.shift();if(t===void 0&&this.tail.next){const e=this.tail.next;return this.tail.next=null,this.tail=e,this.tail.shift()}return t}peek(){const t=this.tail.peek();return t===void 0&&this.tail.next?this.tail.next.peek():t}isEmpty(){return this.length===0}},bc={exports:{}};function kS(i){return i.length}function zS(i){const t=i.byteLength;let e="";for(let n=0;n<t;n++)e+=String.fromCharCode(i[n]&127);return e}function HS(i,t){const e=i.byteLength;for(let n=0;n<e;n++)i[n]=t.charCodeAt(n);return e}var VS={byteLength:kS,toString:zS,write:HS};const hr="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",bi=new Uint8Array(256);for(let i=0;i<hr.length;i++)bi[hr.charCodeAt(i)]=i;bi[45]=62;bi[95]=63;function GS(i){let t=i.length;return i.charCodeAt(t-1)===61&&t--,t>1&&i.charCodeAt(t-1)===61&&t--,t*3>>>2}function WS(i){const t=i.byteLength;let e="";for(let n=0;n<t;n+=3)e+=hr[i[n]>>2]+hr[(i[n]&3)<<4|i[n+1]>>4]+hr[(i[n+1]&15)<<2|i[n+2]>>6]+hr[i[n+2]&63];return t%3===2?e=e.substring(0,e.length-1)+"=":t%3===1&&(e=e.substring(0,e.length-2)+"=="),e}function XS(i,t){const e=i.byteLength;for(let n=0,r=0;r<e;n+=4){const s=bi[t.charCodeAt(n)],o=bi[t.charCodeAt(n+1)],a=bi[t.charCodeAt(n+2)],c=bi[t.charCodeAt(n+3)];i[r++]=s<<2|o>>4,i[r++]=(o&15)<<4|a>>2,i[r++]=(a&3)<<6|c&63}return e}var qS={byteLength:GS,toString:WS,write:XS};function YS(i){return i.length>>>1}function KS(i){const t=i.byteLength;i=new DataView(i.buffer,i.byteOffset,t);let e="",n=0;for(let r=t-t%4;n<r;n+=4)e+=i.getUint32(n).toString(16).padStart(8,"0");for(;n<t;n++)e+=i.getUint8(n).toString(16).padStart(2,"0");return e}function $S(i,t){const e=i.byteLength;for(let n=0;n<e;n++){const r=xh(t.charCodeAt(n*2)),s=xh(t.charCodeAt(n*2+1));if(r===void 0||s===void 0)return n;i[n]=r<<4|s}return e}var jS={byteLength:YS,toString:KS,write:$S};function xh(i){if(i>=48&&i<=57)return i-48;if(i>=65&&i<=70)return i-65+10;if(i>=97&&i<=102)return i-97+10}function ZS(i){return i.length}function JS(i){const t=i.byteLength;let e="";for(let n=0;n<t;n++)e+=String.fromCharCode(i[n]);return e}function QS(i,t){const e=i.byteLength;for(let n=0;n<e;n++)i[n]=t.charCodeAt(n);return e}var tE={byteLength:ZS,toString:JS,write:QS};function eE(i){let t=0;for(let e=0,n=i.length;e<n;e++){const r=i.charCodeAt(e);if(r>=55296&&r<=56319&&e+1<n){const s=i.charCodeAt(e+1);if(s>=56320&&s<=57343){t+=4,e++;continue}}r<=127?t+=1:r<=2047?t+=2:t+=3}return t}let wc;if(typeof TextDecoder<"u"){const i=new TextDecoder;wc=function(e){return i.decode(e)}}else wc=function(t){const e=t.byteLength;let n="",r=0;for(;r<e;){let s=t[r];if(s<=127){n+=String.fromCharCode(s),r++;continue}let o=0,a=0;if(s<=223?(o=1,a=s&31):s<=239?(o=2,a=s&15):s<=244&&(o=3,a=s&7),e-r-o>0){let c=0;for(;c<o;)s=t[r+c+1],a=a<<6|s&63,c+=1}else a=65533,o=e-r;n+=String.fromCodePoint(a),r+=o+1}return n};let Tc;if(typeof TextEncoder<"u"){const i=new TextEncoder;Tc=function(e,n){return i.encodeInto(n,e).written}}else Tc=function(t,e){const n=t.byteLength;let r=0,s=0;for(;r<e.length;){const o=e.codePointAt(r);if(o<=127){if(s+1>n)break;t[s++]=o,r++;continue}let a=0,c=0;if(o<=2047?(a=6,c=192):o<=65535?(a=12,c=224):o<=2097151&&(a=18,c=240),s+a/6+1>n)break;for(t[s++]=c|o>>a,a-=6;a>=0;)t[s++]=128|o>>a&63,a-=6;r+=o>=65536?2:1}return s};var nE={byteLength:eE,toString:wc,write:Tc};function iE(i){return i.length*2}function rE(i){const t=i.byteLength;let e="";for(let n=0;n<t-1;n+=2)e+=String.fromCharCode(i[n]+i[n+1]*256);return e}function sE(i,t){const e=i.byteLength;let n=e;for(let r=0;r<t.length&&!((n-=2)<0);++r){const s=t.charCodeAt(r),o=s>>8,a=s%256;i[r*2]=a,i[r*2+1]=o}return e}var oE={byteLength:iE,toString:rE,write:sE};(function(i,t){const e=VS,n=qS,r=jS,s=tE,o=nE,a=oE,c=new Uint8Array(Uint16Array.of(255).buffer)[0]===255;function l(L){switch(L){case"ascii":return e;case"base64":return n;case"hex":return r;case"binary":case"latin1":return s;case"utf8":case"utf-8":case void 0:case null:return o;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return a;default:throw new Error(`Unknown encoding '${L}'`)}}function u(L){return L instanceof Uint8Array}function f(L){try{return l(L),!0}catch{return!1}}function h(L,z,Y){const M=new Uint8Array(L);return z!==void 0&&t.fill(M,z,0,M.byteLength,Y),M}function d(L){return new Uint8Array(L)}function g(L){return new Uint8Array(L)}function _(L,z){return l(z).byteLength(L)}function m(L,z){if(L===z)return 0;const Y=Math.min(L.byteLength,z.byteLength);L=new DataView(L.buffer,L.byteOffset,L.byteLength),z=new DataView(z.buffer,z.byteOffset,z.byteLength);let M=0;for(let v=Y-Y%4;M<v;M+=4){const H=L.getUint32(M,c),Q=z.getUint32(M,c);if(H!==Q)break}for(;M<Y;M++){const v=L.getUint8(M),H=z.getUint8(M);if(v<H)return-1;if(v>H)return 1}return L.byteLength>z.byteLength?1:L.byteLength<z.byteLength?-1:0}function p(L,z){z===void 0&&(z=L.reduce((v,H)=>v+H.byteLength,0));const Y=new Uint8Array(z);let M=0;for(const v of L){if(M+v.byteLength>Y.byteLength)return Y.set(v.subarray(0,Y.byteLength-M),M),Y;Y.set(v,M),M+=v.byteLength}return Y}function T(L,z,Y=0,M=0,v=L.byteLength){if(Y<0&&(Y=0),Y>=z.byteLength)return 0;const H=z.byteLength-Y;if(M<0&&(M=0),M>=L.byteLength||v<=M)return 0;v>L.byteLength&&(v=L.byteLength),v-M>H&&(v=M+H);const Q=v-M;return L===z?z.copyWithin(Y,M,v):((M!==0||v!==L.byteLength)&&(L=L.subarray(M,v)),z.set(L,Y)),Q}function E(L,z){return L===z?!0:L.byteLength!==z.byteLength?!1:m(L,z)===0}function R(L,z,Y=0,M=L.byteLength,v="utf8"){if(typeof z=="string"?typeof Y=="string"?(v=Y,Y=0,M=L.byteLength):typeof M=="string"&&(v=M,M=L.byteLength):typeof z=="number"?z=z&255:typeof z=="boolean"&&(z=+z),Y<0&&(Y=0),Y>=L.byteLength||M<=Y)return L;if(M>L.byteLength&&(M=L.byteLength),typeof z=="number")return L.fill(z,Y,M);typeof z=="string"&&(z=t.from(z,v));const H=z.byteLength;for(let Q=0,ot=M-Y;Q<ot;++Q)L[Q+Y]=z[Q%H];return L}function G(L,z,Y){return typeof L=="string"?I(L,z):Array.isArray(L)?D(L):ArrayBuffer.isView(L)?V(L):y(L,z,Y)}function I(L,z){const Y=l(z),M=new Uint8Array(Y.byteLength(L));return Y.write(M,L),M}function D(L){const z=new Uint8Array(L.length);return z.set(L),z}function V(L){const z=new Uint8Array(L.byteLength);return z.set(L),z}function y(L,z,Y){return new Uint8Array(L,z,Y)}function x(L,z,Y,M){return U(L,z,Y,M)!==-1}function U(L,z,Y,M){return b(L,z,Y,M,!0)}function P(L,z,Y,M){return b(L,z,Y,M,!1)}function b(L,z,Y,M,v){if(L.byteLength===0)return-1;if(typeof Y=="string"?(M=Y,Y=0):Y===void 0?Y=v?0:L.length-1:Y<0&&(Y+=L.byteLength),Y>=L.byteLength){if(v)return-1;Y=L.byteLength-1}else if(Y<0)if(v)Y=0;else return-1;if(typeof z=="string")z=G(z,M);else if(typeof z=="number")return z=z&255,v?L.indexOf(z,Y):L.lastIndexOf(z,Y);if(z.byteLength===0)return-1;if(v){let H=-1;for(let Q=Y;Q<L.byteLength;Q++)if(L[Q]===z[H===-1?0:Q-H]){if(H===-1&&(H=Q),Q-H+1===z.byteLength)return H}else H!==-1&&(Q-=Q-H),H=-1}else{Y+z.byteLength>L.byteLength&&(Y=L.byteLength-z.byteLength);for(let H=Y;H>=0;H--){let Q=!0;for(let ot=0;ot<z.byteLength;ot++)if(L[H+ot]!==z[ot]){Q=!1;break}if(Q)return H}}return-1}function w(L,z,Y){const M=L[z];L[z]=L[Y],L[Y]=M}function C(L){const z=L.byteLength;if(z%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let Y=0;Y<z;Y+=2)w(L,Y,Y+1);return L}function A(L){const z=L.byteLength;if(z%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let Y=0;Y<z;Y+=4)w(L,Y,Y+3),w(L,Y+1,Y+2);return L}function F(L){const z=L.byteLength;if(z%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let Y=0;Y<z;Y+=8)w(L,Y,Y+7),w(L,Y+1,Y+6),w(L,Y+2,Y+5),w(L,Y+3,Y+4);return L}function O(L){return L}function J(L,z="utf8",Y=0,M=L.byteLength){return arguments.length===1?o.toString(L):arguments.length===2?l(z).toString(L):(Y<0&&(Y=0),Y>=L.byteLength||M<=Y?"":(M>L.byteLength&&(M=L.byteLength),(Y!==0||M!==L.byteLength)&&(L=L.subarray(Y,M)),l(z).toString(L)))}function Z(L,z,Y=0,M=L.byteLength,v){if(arguments.length===2)return o.write(L,z);typeof Y=="string"?(v=Y,Y=0,M=L.byteLength):typeof M=="string"&&(v=M,M=L.byteLength-Y),M=Math.min(M,t.byteLength(z,v));let H=Y;if(H<0&&(H=0),H>=L.byteLength)return 0;let Q=Y+M;return Q<=H?0:(Q>L.byteLength&&(Q=L.byteLength),(H!==0||Q!==L.byteLength)&&(L=L.subarray(H,Q)),l(v).write(L,z))}function et(L,z=0){return new DataView(L.buffer,L.byteOffset,L.byteLength).getFloat64(z,!1)}function st(L,z=0){return new DataView(L.buffer,L.byteOffset,L.byteLength).getFloat64(z,!0)}function St(L,z=0){return new DataView(L.buffer,L.byteOffset,L.byteLength).getFloat32(z,!1)}function q(L,z=0){return new DataView(L.buffer,L.byteOffset,L.byteLength).getFloat32(z,!0)}function j(L,z=0){return new DataView(L.buffer,L.byteOffset,L.byteLength).getInt32(z,!1)}function it(L,z=0){return new DataView(L.buffer,L.byteOffset,L.byteLength).getInt32(z,!0)}function nt(L,z=0){return new DataView(L.buffer,L.byteOffset,L.byteLength).getUint32(z,!1)}function vt(L,z=0){return new DataView(L.buffer,L.byteOffset,L.byteLength).getUint32(z,!0)}function ht(L,z,Y=0){return new DataView(L.buffer,L.byteOffset,L.byteLength).setFloat64(Y,z,!1),Y+8}function xt(L,z,Y=0){return new DataView(L.buffer,L.byteOffset,L.byteLength).setFloat64(Y,z,!0),Y+8}function N(L,z,Y=0){return new DataView(L.buffer,L.byteOffset,L.byteLength).setFloat32(Y,z,!1),Y+4}function Rt(L,z,Y=0){return new DataView(L.buffer,L.byteOffset,L.byteLength).setFloat32(Y,z,!0),Y+4}function Ut(L,z,Y=0){return new DataView(L.buffer,L.byteOffset,L.byteLength).setInt32(Y,z,!1),Y+4}function Jt(L,z,Y=0){return new DataView(L.buffer,L.byteOffset,L.byteLength).setInt32(Y,z,!0),Y+4}function Tt(L,z,Y=0){return new DataView(L.buffer,L.byteOffset,L.byteLength).setUint32(Y,z,!1),Y+4}function qt(L,z,Y=0){return new DataView(L.buffer,L.byteOffset,L.byteLength).setUint32(Y,z,!0),Y+4}i.exports=t={isBuffer:u,isEncoding:f,alloc:h,allocUnsafe:d,allocUnsafeSlow:g,byteLength:_,compare:m,concat:p,copy:T,equals:E,fill:R,from:G,includes:x,indexOf:U,lastIndexOf:P,swap16:C,swap32:A,swap64:F,toBuffer:O,toString:J,write:Z,readDoubleBE:et,readDoubleLE:st,readFloatBE:St,readFloatLE:q,readInt32BE:j,readInt32LE:it,readUInt32BE:nt,readUInt32LE:vt,writeDoubleBE:ht,writeDoubleLE:xt,writeFloatBE:N,writeFloatLE:Rt,writeInt32BE:Ut,writeInt32LE:Jt,writeUInt32BE:Tt,writeUInt32LE:qt}})(bc,bc.exports);var Ed=bc.exports;const aE=Ed;var cE=class{constructor(t){this.encoding=t}get remaining(){return 0}decode(t){return aE.toString(t,this.encoding)}flush(){return""}};const yh=Ed;var lE=class{constructor(){this._reset()}get remaining(){return this.bytesSeen}decode(t){if(t.byteLength===0)return"";if(this.bytesNeeded===0&&Sh(t,0)===0)return this.bytesSeen=uE(t),yh.toString(t,"utf8");let e="",n=0;if(this.bytesNeeded>0){for(;n<t.byteLength;){const o=t[n];if(o<this.lowerBoundary||o>this.upperBoundary){e+="�",this._reset();break}if(this.lowerBoundary=128,this.upperBoundary=191,this.codePoint=this.codePoint<<6|o&63,this.bytesSeen++,n++,this.bytesSeen===this.bytesNeeded){e+=String.fromCodePoint(this.codePoint),this._reset();break}}if(this.bytesNeeded>0)return e}const r=Sh(t,n),s=t.byteLength-r;s>n&&(e+=yh.toString(t,"utf8",n,s));for(let o=s;o<t.byteLength;o++){const a=t[o];if(this.bytesNeeded===0){a<=127?(this.bytesSeen=0,e+=String.fromCharCode(a)):a>=194&&a<=223?(this.bytesNeeded=2,this.bytesSeen=1,this.codePoint=a&31):a>=224&&a<=239?(a===224?this.lowerBoundary=160:a===237&&(this.upperBoundary=159),this.bytesNeeded=3,this.bytesSeen=1,this.codePoint=a&15):a>=240&&a<=244?(a===240?this.lowerBoundary=144:a===244&&(this.upperBoundary=143),this.bytesNeeded=4,this.bytesSeen=1,this.codePoint=a&7):(this.bytesSeen=1,e+="�");continue}if(a<this.lowerBoundary||a>this.upperBoundary){e+="�",o--,this._reset();continue}this.lowerBoundary=128,this.upperBoundary=191,this.codePoint=this.codePoint<<6|a&63,this.bytesSeen++,this.bytesSeen===this.bytesNeeded&&(e+=String.fromCodePoint(this.codePoint),this._reset())}return e}flush(){const t=this.bytesNeeded>0?"�":"";return this._reset(),t}_reset(){this.codePoint=0,this.bytesNeeded=0,this.bytesSeen=0,this.lowerBoundary=128,this.upperBoundary=191}};function Sh(i,t){const e=i.byteLength;if(e<=t)return 0;const n=Math.max(t,e-4);let r=e-1;for(;r>n&&(i[r]&192)===128;)r--;if(r<t)return 0;const s=i[r];let o;if(s<=127)return 0;if(s>=194&&s<=223)o=2;else if(s>=224&&s<=239)o=3;else if(s>=240&&s<=244)o=4;else return 0;const a=e-r;return a<o?a:0}function uE(i){const t=i.byteLength;if(t===0)return 0;const e=i[t-1];if(e<=127)return 0;if((e&192)!==128)return 1;const n=Math.max(0,t-4);let r=t-2;for(;r>=n&&(i[r]&192)===128;)r--;if(r<0)return 1;const s=i[r];let o;if(s>=194&&s<=223)o=2;else if(s>=224&&s<=239)o=3;else if(s>=240&&s<=244)o=4;else return 1;if(t-r!==o)return 1;if(o>=3){const a=i[r+1];if(s===224&&a<160||s===237&&a>159||s===240&&a<144||s===244&&a>143)return 1}return 0}const hE=cE,fE=lE;var dE=class{constructor(t="utf8"){switch(this.encoding=pE(t),this.encoding){case"utf8":this.decoder=new fE;break;case"utf16le":case"base64":throw new Error("Unsupported encoding: "+this.encoding);default:this.decoder=new hE(this.encoding)}}get remaining(){return this.decoder.remaining}push(t){return typeof t=="string"?t:this.decoder.decode(t)}write(t){return this.push(t)}end(t){let e="";return t&&(e=this.push(t)),e+=this.decoder.flush(),e}};function pE(i){switch(i=i.toLowerCase(),i){case"utf8":case"utf-8":return"utf8";case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return"utf16le";case"latin1":case"binary":return"latin1";case"base64":case"ascii":case"hex":return i;default:throw new Error("Unknown encoding: "+i)}}var mE=class ln extends Error{constructor(t,e,n=ln){super(t),this.code=e,Error.captureStackTrace&&Error.captureStackTrace(this,n)}static isStreamDestroyed(t){return t&&t.code==="STREAM_DESTROYED"}static isPrematureClose(t){return t&&t.code==="PREMATURE_CLOSE"}static isAborted(t){return t&&t.code==="ABORTED"}static isBadArgument(t){return t&&t.code==="BAD_ARGUMENT"}get name(){return"StreamError"}static STREAM_DESTROYED(){return new ln("Stream was destroyed","STREAM_DESTROYED",ln.STREAM_DESTROYED)}static PREMATURE_CLOSE(t="Premature close"){return new ln(t,"PREMATURE_CLOSE",ln.PREMATURE_CLOSE)}static ABORTED(){return new ln("Stream aborted","ABORTED",ln.ABORTED)}static BAD_ARGUMENT(t="Bad argument"){return new ln(t,"BAD_ARGUMENT",ln.BAD_ARGUMENT)}};const{EventEmitter:gE}=OS,Md=BS,_E=dE,nn=mE,Ac=typeof queueMicrotask>"u"?i=>SS.process.nextTick(i):queueMicrotask,re=(1<<29)-1,Oi=1,tl=2,Li=4,cs=8,bd=re^Oi,vE=re^tl,gs=16,xr=32,Or=64,Jn=128,_s=256,el=512,Qn=1024,Rc=2048,nl=4096,il=8192,pn=16384,$n=32768,$o=65536,Pi=131072,wd=_s|el,xE=gs|$o,yE=Or|gs,SE=nl|Jn,rl=_s|Pi,EE=re^gs,ME=re^Or,bE=re^(Or|$o),Eh=re^$o,wE=re^_s,TE=re^(Jn|il),AE=re^Qn,Mh=re^wd,Td=re^$n,RE=re^xr,Ad=re^Pi,CE=re^rl,On=1<<18,Lr=2<<18,vs=4<<18,Di=8<<18,jo=16<<18,Fi=32<<18,Cc=64<<18,yr=128<<18,Rd=256<<18,Ai=512<<18,sl=1024<<18,LE=re^(On|Rd),Cd=re^vs,PE=re^(On|Ai),DE=re^jo,IE=re^Di,Ld=re^yr,UE=re^Lr,NE=re^sl,ls=gs|On,Pd=re^ls,ol=pn|Fi,Un=Li|cs|tl,ke=Un|Oi,Dd=Un|ol,OE=Cd&ME,al=yr|$n,FE=al&Pd,Id=ke|FE,BE=ke|Qn|pn,bh=ke|pn|Jn,kE=ke|Qn|Jn,zE=ke|nl|Jn|il,HE=ke|gs|Qn|pn|$o|Pi,VE=Un|Qn|pn,GE=xr|ke|$n|Or,WE=$n|Oi,XE=ke|Ai|Fi,qE=Di|jo,Ud=Di|On,YE=Di|jo|ke|On,wh=ke|On|Di|sl,KE=vs|On,$E=On|Rd,jE=ke|Ai|Ud|Fi,ZE=Lr|ke|yr|vs,JE=Ai|Fi|Un,so=Symbol.asyncIterator||Symbol("asyncIterator");class QE{constructor(t,{highWaterMark:e=16384,map:n=null,mapWritable:r,byteLength:s,byteLengthWritable:o}={}){this.stream=t,this.queue=new Md,this.highWaterMark=e,this.buffered=0,this.error=null,this.pipeline=null,this.drains=null,this.byteLength=o||s||Bd,this.map=r||n,this.afterWrite=sM.bind(this),this.afterUpdateNextTick=cM.bind(this)}get ending(){return(this.stream._duplexState&Ai)!==0}get ended(){return(this.stream._duplexState&Fi)!==0}push(t){return this.stream._duplexState&JE?!1:(this.map!==null&&(t=this.map(t)),this.buffered+=this.byteLength(t),this.queue.push(t),this.buffered<this.highWaterMark?(this.stream._duplexState|=Di,!0):(this.stream._duplexState|=qE,!1))}shift(){const t=this.queue.shift();return this.buffered-=this.byteLength(t),this.buffered===0&&(this.stream._duplexState&=IE),t}end(t){typeof t=="function"?this.stream.once("finish",t):t!=null&&this.push(t),this.stream._duplexState=(this.stream._duplexState|Ai)&Cd}autoBatch(t,e){const n=[],r=this.stream;for(n.push(t);(r._duplexState&wh)===Ud;)n.push(r._writableState.shift());if(r._duplexState&ke)return e(null);r._writev(n,e)}update(){const t=this.stream;t._duplexState|=Lr;do{for(;(t._duplexState&wh)===Di;){const e=this.shift();t._duplexState|=$E,t._write(e,this.afterWrite)}t._duplexState&KE||this.updateNonPrimary()}while(this.continueUpdate()===!0);t._duplexState&=UE}updateNonPrimary(){const t=this.stream;if((t._duplexState&jE)===Ai){t._duplexState=t._duplexState|On,t._final(rM.bind(this));return}if((t._duplexState&Un)===Li){t._duplexState&al||(t._duplexState|=ls,t._destroy(Nd.bind(this)));return}(t._duplexState&Id)===Oi&&(t._duplexState=(t._duplexState|ls)&bd,t._open(Od.bind(this)))}continueUpdate(){return this.stream._duplexState&yr?(this.stream._duplexState&=Ld,!0):!1}updateCallback(){(this.stream._duplexState&ZE)===vs?this.update():this.updateNextTick()}updateNextTick(){this.stream._duplexState&yr||(this.stream._duplexState|=yr,this.stream._duplexState&Lr||Ac(this.afterUpdateNextTick))}}class tM{constructor(t,{highWaterMark:e=16384,map:n=null,mapReadable:r,byteLength:s,byteLengthReadable:o}={}){this.stream=t,this.queue=new Md,this.highWaterMark=e===0?1:e,this.buffered=0,this.readAhead=e>0,this.error=null,this.pipeline=null,this.byteLength=o||s||Bd,this.map=r||n,this.pipeTo=null,this.afterRead=oM.bind(this),this.afterUpdateNextTick=aM.bind(this)}get ending(){return(this.stream._duplexState&Qn)!==0}get ended(){return(this.stream._duplexState&pn)!==0}pipe(t,e){if(this.pipeTo!==null)throw nn.BAD_ARGUMENT("Can only pipe to one destination");if(typeof e!="function"&&(e=null),this.stream._duplexState|=el,this.pipeTo=t,this.pipeline=new nM(this.stream,t,e),e&&this.stream.on("error",Lc),Bo(t))t._writableState.pipeline=this.pipeline,e&&t.on("error",Lc),t.on("finish",this.pipeline.finished.bind(this.pipeline));else{const n=this.pipeline.done.bind(this.pipeline,t),r=this.pipeline.done.bind(this.pipeline,t,null);t.on("error",n),t.on("close",r),t.on("finish",this.pipeline.finished.bind(this.pipeline))}t.on("drain",iM.bind(this)),this.stream.emit("piping",t),t.emit("pipe",this.stream)}push(t){const e=this.stream;return t===null?(this.highWaterMark=0,e._duplexState=(e._duplexState|Qn)&bE,!1):this.map!==null&&(t=this.map(t),t===null)?(e._duplexState&=Eh,this.buffered<this.highWaterMark):(this.buffered+=this.byteLength(t),this.queue.push(t),e._duplexState=(e._duplexState|Jn)&Eh,this.buffered<this.highWaterMark)}shift(){const t=this.queue.shift();return this.buffered-=this.byteLength(t),this.buffered===0&&(this.stream._duplexState&=TE),t}unshift(t){const e=[this.map!==null?this.map(t):t];for(;this.buffered>0;)e.push(this.shift());for(let n=0;n<e.length-1;n++){const r=e[n];this.buffered+=this.byteLength(r),this.queue.push(r)}this.push(e[e.length-1])}read(){const t=this.stream;if((t._duplexState&bh)===Jn){const e=this.shift();return this.pipeTo!==null&&this.pipeTo.write(e)===!1&&(t._duplexState&=Mh),t._duplexState&Rc&&t.emit("data",e),e}return this.readAhead===!1&&(t._duplexState|=Pi,this.updateNextTick()),null}drain(){const t=this.stream;for(;(t._duplexState&bh)===Jn&&t._duplexState&wd;){const e=this.shift();this.pipeTo!==null&&this.pipeTo.write(e)===!1&&(t._duplexState&=Mh),t._duplexState&Rc&&t.emit("data",e)}}update(){const t=this.stream;t._duplexState|=xr;do{for(this.drain();this.buffered<this.highWaterMark&&(t._duplexState&HE)===Pi;)t._duplexState|=xE,t._read(this.afterRead),this.drain();(t._duplexState&zE)===SE&&(t._duplexState|=il,t.emit("readable")),t._duplexState&yE||this.updateNonPrimary()}while(this.continueUpdate()===!0);t._duplexState&=RE}updateNonPrimary(){const t=this.stream;if((t._duplexState&kE)===Qn&&(t._duplexState=(t._duplexState|pn)&AE,t.emit("end"),(t._duplexState&Dd)===ol&&(t._duplexState|=Li),this.pipeTo!==null&&this.pipeTo.end()),(t._duplexState&Un)===Li){t._duplexState&al||(t._duplexState|=ls,t._destroy(Nd.bind(this)));return}(t._duplexState&Id)===Oi&&(t._duplexState=(t._duplexState|ls)&bd,t._open(Od.bind(this)))}continueUpdate(){return this.stream._duplexState&$n?(this.stream._duplexState&=Td,!0):!1}updateCallback(){(this.stream._duplexState&GE)===Or?this.update():this.updateNextTick()}updateNextTickIfOpen(){this.stream._duplexState&WE||(this.stream._duplexState|=$n,this.stream._duplexState&xr||Ac(this.afterUpdateNextTick))}updateNextTick(){this.stream._duplexState&$n||(this.stream._duplexState|=$n,this.stream._duplexState&xr||Ac(this.afterUpdateNextTick))}}class eM{constructor(t){this.data=null,this.afterTransform=uM.bind(t),this.afterFinal=null}}class nM{constructor(t,e,n){this.from=t,this.to=e,this.afterPipe=n,this.error=null,this.pipeToFinished=!1}finished(){this.pipeToFinished=!0}done(t,e){if(e&&(this.error=e),t===this.to&&(this.to=null,this.from!==null)){(!(this.from._duplexState&pn)||!this.pipeToFinished)&&this.from.destroy(this.error||nn.PREMATURE_CLOSE("Writable stream closed"));return}if(t===this.from&&(this.from=null,this.to!==null)){t._duplexState&pn||this.to.destroy(this.error||nn.PREMATURE_CLOSE("Readable stream closed"));return}this.afterPipe!==null&&this.afterPipe(this.error),this.to=this.from=this.afterPipe=null}}function iM(){this.stream._duplexState|=el,this.updateCallback()}function rM(i){const t=this.stream;i&&t.destroy(i),t._duplexState&Un||(t._duplexState|=Fi,t.emit("finish")),(t._duplexState&Dd)===ol&&(t._duplexState|=Li),t._duplexState&=PE,t._duplexState&Lr?this.updateNextTick():this.update()}function Nd(i){const t=this.stream;!i&&!nn.isStreamDestroyed(this.error)&&(i=this.error),i&&t.emit("error",i),t._duplexState|=cs,t.emit("close");const e=t._readableState,n=t._writableState;if(e!==null&&e.pipeline!==null&&e.pipeline.done(t,i),n!==null){for(;n.drains!==null&&n.drains.length>0;)n.drains.shift().resolve(!1);n.pipeline!==null&&n.pipeline.done(t,i)}}function sM(i){const t=this.stream;i&&t.destroy(i),t._duplexState&=LE,this.drains!==null&&lM(this.drains),(t._duplexState&YE)===jo&&(t._duplexState&=DE,(t._duplexState&Cc)===Cc&&t.emit("drain")),this.updateCallback()}function oM(i){i&&this.stream.destroy(i),this.stream._duplexState&=EE,this.readAhead===!1&&!(this.stream._duplexState&_s)&&(this.stream._duplexState&=Ad),this.updateCallback()}function aM(){this.stream._duplexState&xr||(this.stream._duplexState&=Td,this.update())}function cM(){this.stream._duplexState&Lr||(this.stream._duplexState&=Ld,this.update())}function lM(i){for(let t=0;t<i.length;t++)--i[t].writes===0&&(i.shift().resolve(!0),t--)}function Od(i){const t=this.stream;i&&t.destroy(i),t._duplexState&Li||(t._duplexState&BE||(t._duplexState|=Or),t._duplexState&XE||(t._duplexState|=vs),t.emit("open")),t._duplexState&=Pd,t._writableState!==null&&t._writableState.updateCallback(),t._readableState!==null&&t._readableState.updateCallback()}function uM(i,t){t!=null&&this.push(t),this._writableState.afterWrite(i)}function hM(i){this._readableState!==null&&(i==="data"&&(this._duplexState|=Rc|rl,this._readableState.updateNextTick()),i==="readable"&&(this._duplexState|=nl,this._readableState.updateNextTick())),this._writableState!==null&&i==="drain"&&(this._duplexState|=Cc,this._writableState.updateNextTick())}class fM extends gE{constructor(t){super(),this._duplexState=0,this._readableState=null,this._writableState=null,t&&(t.open&&(this._open=t.open),t.destroy&&(this._destroy=t.destroy),t.predestroy&&(this._predestroy=t.predestroy),t.signal&&t.signal.addEventListener("abort",SM.bind(this))),this.on("newListener",hM)}_open(t){t(null)}_destroy(t){t(null)}_predestroy(){}get readable(){return this._readableState!==null?!0:void 0}get writable(){return this._writableState!==null?!0:void 0}get destroyed(){return(this._duplexState&cs)!==0}get destroying(){return(this._duplexState&Un)!==0}destroy(t){this._duplexState&Un||(t||(t=nn.STREAM_DESTROYED()),this._duplexState=(this._duplexState|Li)&OE,this._readableState!==null&&(this._readableState.highWaterMark=0,this._readableState.error=t),this._writableState!==null&&(this._writableState.highWaterMark=0,this._writableState.error=t),this._duplexState|=tl,this._predestroy(),this._duplexState&=vE,this._readableState!==null&&this._readableState.updateNextTick(),this._writableState!==null&&this._writableState.updateNextTick())}}class Fo extends fM{constructor(t){super(t),this._duplexState|=Oi|Fi|Pi,this._readableState=new tM(this,t),t&&(this._readableState.readAhead===!1&&(this._duplexState&=Ad),t.read&&(this._read=t.read),t.eagerOpen&&this._readableState.updateNextTick(),t.encoding&&this.setEncoding(t.encoding))}static deferred(t,e){const n=new pM(e);return t().then(r=>{if(r===null)return n.end();n.destroying||gM(r,n,Lc)}).catch(r=>n.destroy(r)),n}setEncoding(t){const e=new _E(t),n=this._readableState.map||_M;return this._readableState.map=r,this;function r(s){const o=e.push(s);return o===""&&(s.byteLength!==0||e.remaining>0)?null:n(o)}}_read(t){t(null)}pipe(t,e){return this._readableState.updateNextTick(),this._readableState.pipe(t,e),t}read(){return this._readableState.updateNextTick(),this._readableState.read()}push(t){return this._readableState.updateNextTickIfOpen(),this._readableState.push(t)}unshift(t){return this._readableState.updateNextTickIfOpen(),this._readableState.unshift(t)}resume(){return this._duplexState|=rl,this._readableState.updateNextTick(),this}pause(){return this._duplexState&=this._readableState.readAhead===!1?CE:wE,this}static _fromAsyncIterator(t,e){let n;const r=new Fo({...e,read(o){t.next().then(s).then(o.bind(null,null)).catch(o)},predestroy(){n=t.return()},destroy(o){if(!n)return o(null);n.then(o.bind(null,null)).catch(o)}});return r;function s(o){o.done?r.push(null):r.push(o.value)}}static from(t,e){if(xM(t))return t;if(t[so])return this._fromAsyncIterator(t[so](),e);Array.isArray(t)||(t=t===void 0?[]:[t]);let n=0;return new Fo({...e,read(r){this.push(n===t.length?null:t[n++]),r(null)}})}static isBackpressured(t){return(t._duplexState&VE)!==0||t._readableState.buffered>=t._readableState.highWaterMark}static isPaused(t){return(t._duplexState&_s)===0}[so](){const t=this;let e=null,n=null,r=null;return this.on("error",l=>{e=l}),this.on("readable",s),this.on("close",o),{[so](){return this},next(){return new Promise(function(l,u){n=l,r=u;const f=t.read();f!==null?a(f):t._duplexState&cs&&a(null)})},return(){return c(null)},throw(l){return c(l)}};function s(){n!==null&&a(t.read())}function o(){n!==null&&a(null)}function a(l){r!==null&&(e?r(e):l===null&&!(t._duplexState&pn)?r(nn.STREAM_DESTROYED()):n({value:l,done:l===null}),r=n=null)}function c(l){return t.destroy(l),new Promise((u,f)=>{if(t._duplexState&cs)return u({value:void 0,done:!0});t.once("close",function(){l?f(l):u({value:void 0,done:!0})})})}}}class Fd extends Fo{constructor(t){super(t),this._duplexState=Oi|this._duplexState&Pi,this._writableState=new QE(this,t),t&&(t.writev&&(this._writev=t.writev),t.write&&(this._write=t.write),t.final&&(this._final=t.final))}cork(){this._duplexState|=sl}uncork(){this._duplexState&=NE,this._writableState.updateNextTick()}_writev(t,e){e(null)}_write(t,e){this._writableState.autoBatch(t,e)}_final(t){t(null)}write(t){return this._writableState.updateNextTick(),this._writableState.push(t)}end(t){return this._writableState.updateNextTick(),this._writableState.end(t),this}}class dM extends Fd{constructor(t){super(t),this._transformState=new eM(this),t&&(t.transform&&(this._transform=t.transform),t.flush&&(this._flush=t.flush))}_write(t,e){this._readableState.buffered>=this._readableState.highWaterMark?this._transformState.data=t:this._transform(t,this._transformState.afterTransform)}_read(t){if(this._transformState.data!==null){const e=this._transformState.data;this._transformState.data=null,t(null),this._transform(e,this._transformState.afterTransform)}else t(null)}destroy(t){super.destroy(t),this._transformState.data!==null&&(this._transformState.data=null,this._transformState.afterTransform())}_transform(t,e){e(null,t)}_flush(t){t(null)}_final(t){this._transformState.afterFinal=t,this._flush(mM.bind(this))}}class pM extends dM{}function mM(i,t){const e=this._transformState.afterFinal;if(i)return e(i);t!=null&&this.push(t),this.push(null),e(null)}function gM(i,...t){const e=Array.isArray(i)?[...i,...t]:[i,...t],n=e.length&&typeof e[e.length-1]=="function"?e.pop():null;if(e.length<2)throw nn.BAD_ARGUMENT("Pipeline requires at least 2 streams");let r=e[0],s=null,o=null;for(let l=1;l<e.length;l++)s=e[l],Bo(r)?r.pipe(s,c):(a(r,!0,l>1,c),r.pipe(s)),r=s;if(n){let l=!1;const u=Bo(s)||!!(s._writableState&&s._writableState.autoDestroy);s.on("error",f=>{o===null&&(o=f)}),s.on("finish",()=>{l=!0,u||n(o)}),u&&s.on("close",()=>n(o||(l?null:nn.PREMATURE_CLOSE())))}return s;function a(l,u,f,h){l.on("error",h),l.on("close",d);function d(){if(l._readableState&&!l._readableState.ended||f&&l._writableState&&!l._writableState.ended)return h(nn.PREMATURE_CLOSE())}}function c(l){if(!(!l||o)){o=l;for(const u of e)u.destroy(l)}}}function _M(i){return i}function vM(i){return!!i._readableState||!!i._writableState}function Bo(i){return typeof i._duplexState=="number"&&vM(i)}function xM(i){return Bo(i)&&i.readable}function yM(i){return typeof i=="object"&&i!==null&&typeof i.byteLength=="number"}function Bd(i){return yM(i)?i.byteLength:1024}function Lc(){}function SM(){this.destroy(nn.ABORTED())}var EM={Duplex:Fd};function Th(i,t){for(const e in t)Object.defineProperty(i,e,{value:t[e],enumerable:!0,configurable:!0});return i}function MM(i,t,e){if(!i||typeof i=="string")throw new TypeError("Please pass an Error to err-code");e||(e={}),typeof t=="object"&&(e=t,t=""),t&&(e.code=t);try{return Th(i,e)}catch{e.message=i.message,e.stack=i.stack;const r=function(){};return r.prototype=Object.create(Object.getPrototypeOf(i)),Th(new r,e)}}var bM=MM;const Xt=dd(bM);/* Common package for dealing with hex/string/uint8 conversions (and sha1 hashing)
*
* @author   Jimmy Wärting <jimmy@warting.se> (https://jimmy.warting.se/opensource)
* @license  MIT
*/const Ah="0123456789abcdef",kd=[];for(let i=0;i<256;i++)kd[i]=Ah[i>>4&15]+Ah[i&15];const Rh=i=>{const t=i.length;let e="",n=0;for(;n<t;)e+=kd[i[n++]];return e};var Ch="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",wM=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(var oo=0;oo<Ch.length;oo++)wM[Ch.charCodeAt(oo)]=oo;new TextDecoder;const TM=new TextEncoder,AM=i=>TM.encode(i),Lh=typeof window<"u"?window:self,Pc=Lh.crypto||Lh.msCrypto||{};Pc.subtle||Pc.webkitSubtle;const Ph=i=>{const t=new Uint8Array(i);return Pc.getRandomValues(t)};/*! simple-peer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */const RM=TS("simple-peer"),tc=64*1024,CM=5*1e3,LM=5*1e3;function Dh(i){return i.replace(/a=ice-options:trickle\s\n/g,"")}function PM(i){console.warn(i)}function $r(i,t,...e){const n=setTimeout(i,t,...e);return n.unref?.(),n}function Ih(i,t,...e){const n=setInterval(i,t,...e);return n.unref?.(),n}let Zo=class Dc extends EM.Duplex{_pc;constructor(t){if(t=Object.assign({allowHalfOpen:!1},t),super(t),this.__objectMode=!!t.objectMode,this._id=Rh(Ph(4)).slice(0,7),this._debug("new peer %o",t),this.channelName=t.initiator?t.channelName||Rh(Ph(20)):null,this.initiator=t.initiator||!1,this.channelConfig=t.channelConfig||Dc.channelConfig,this.channelNegotiated=this.channelConfig.negotiated,this.config=Object.assign({},Dc.config,t.config),this.offerOptions=t.offerOptions||{},this.answerOptions=t.answerOptions||{},this.sdpTransform=t.sdpTransform||(e=>e),this.trickle=t.trickle!==void 0?t.trickle:!0,this.allowHalfTrickle=t.allowHalfTrickle!==void 0?t.allowHalfTrickle:!1,this.iceCompleteTimeout=t.iceCompleteTimeout||CM,this._destroying=!1,this._connected=!1,this.remoteAddress=void 0,this.remoteFamily=void 0,this.remotePort=void 0,this.localAddress=void 0,this.localFamily=void 0,this.localPort=void 0,!Mc)throw Xt(typeof window>"u"?new Error("No WebRTC support: Specify `opts.wrtc` option in this environment"):new Error("No WebRTC support: Not a supported browser"),"ERR_WEBRTC_SUPPORT");this._pcReady=!1,this._channelReady=!1,this._iceComplete=!1,this._iceCompleteTimer=null,this._channel=null,this._pendingCandidates=[],this._isNegotiating=!1,this._firstNegotiation=!0,this._batchedNegotiation=!1,this._queuedNegotiation=!1,this._sendersAwaitingStable=[],this._closingInterval=null,this._remoteTracks=[],this._remoteStreams=[],this._chunk=null,this._cb=null,this._interval=null;try{this._pc=new Mc(this.config)}catch(e){this.__destroy(Xt(e,"ERR_PC_CONSTRUCTOR"));return}this._isReactNativeWebrtc=typeof this._pc._peerConnectionId=="number",this._pc.oniceconnectionstatechange=()=>{this._onIceStateChange()},this._pc.onicegatheringstatechange=()=>{this._onIceStateChange()},this._pc.onconnectionstatechange=()=>{this._onConnectionStateChange()},this._pc.onsignalingstatechange=()=>{this._onSignalingStateChange()},this._pc.onicecandidate=e=>{this._onIceCandidate(e)},typeof this._pc.peerIdentity=="object"&&this._pc.peerIdentity.catch(e=>{this.__destroy(Xt(e,"ERR_PC_PEER_IDENTITY"))}),this.initiator||this.channelNegotiated?this._setupData({channel:this._pc.createDataChannel(this.channelName,this.channelConfig)}):this._pc.ondatachannel=e=>{this._setupData(e)},this._debug("initial negotiation"),this._needsNegotiation(),this._onFinishBound=()=>{this._onFinish()},this.once("finish",this._onFinishBound)}get bufferSize(){return this._channel&&this._channel.bufferedAmount||0}get connected(){return this._connected&&this._channel.readyState==="open"}address(){return{port:this.localPort,family:this.localFamily,address:this.localAddress}}signal(t){if(!this._destroying){if(this.destroyed)throw Xt(new Error("cannot signal after peer is destroyed"),"ERR_DESTROYED");if(typeof t=="string")try{t=JSON.parse(t)}catch{t={}}this._debug("signal()"),t.renegotiate&&this.initiator&&(this._debug("got request to renegotiate"),this._needsNegotiation()),t.transceiverRequest&&this.initiator&&(this._debug("got request for transceiver"),this.addTransceiver(t.transceiverRequest.kind,t.transceiverRequest.init)),t.candidate&&(this._pc.remoteDescription&&this._pc.remoteDescription.type?this._addIceCandidate(t.candidate):this._pendingCandidates.push(t.candidate)),t.sdp&&this._pc.setRemoteDescription(new AS(t)).then(()=>{this.destroyed||(this._pendingCandidates.forEach(e=>{this._addIceCandidate(e)}),this._pendingCandidates=[],this._pc.remoteDescription.type==="offer"&&this._createAnswer())}).catch(e=>{this.__destroy(Xt(e,"ERR_SET_REMOTE_DESCRIPTION"))}),!t.sdp&&!t.candidate&&!t.renegotiate&&!t.transceiverRequest&&this.__destroy(Xt(new Error("signal() called with invalid signal data"),"ERR_SIGNALING"))}}_addIceCandidate(t){const e=new RS(t);this._pc.addIceCandidate(e).catch(n=>{!e.address||e.address.endsWith(".local")?PM("Ignoring unsupported ICE candidate."):this.__destroy(Xt(n,"ERR_ADD_ICE_CANDIDATE"))})}send(t){if(!this._destroying){if(this.destroyed)throw Xt(new Error("cannot send after peer is destroyed"),"ERR_DESTROYED");this._channel.send(t)}}_needsNegotiation(){this._debug("_needsNegotiation"),!this._batchedNegotiation&&(this._batchedNegotiation=!0,queueMicrotask(()=>{this._batchedNegotiation=!1,this.initiator||!this._firstNegotiation?(this._debug("starting batched negotiation"),this.negotiate()):this._debug("non-initiator initial negotiation request discarded"),this._firstNegotiation=!1}))}negotiate(){if(!this._destroying){if(this.destroyed)throw Xt(new Error("cannot negotiate after peer is destroyed"),"ERR_DESTROYED");this.initiator?this._isNegotiating?(this._queuedNegotiation=!0,this._debug("already negotiating, queueing")):(this._debug("start negotiation"),$r(()=>{this._createOffer()},0)):this._isNegotiating?(this._queuedNegotiation=!0,this._debug("already negotiating, queueing")):(this._debug("requesting negotiation from initiator"),this.emit("signal",{type:"renegotiate",renegotiate:!0})),this._isNegotiating=!0}}_final(t){this._readableState.ended||this.push(null),t(null)}__destroy(t){this.end(),this._destroy(()=>{},t)}_destroy(t,e){this.destroyed||this._destroying||(this._destroying=!0,this._debug("destroying (error: %s)",e&&(e.message||e)),$r(()=>{if(this._connected&&this.emit("disconnect"),this._connected=!1,this._pcReady=!1,this._channelReady=!1,this._remoteTracks=null,this._remoteStreams=null,this._senderMap=null,clearInterval(this._closingInterval),this._closingInterval=null,clearInterval(this._interval),this._interval=null,this._chunk=null,this._cb=null,this._onFinishBound&&this.removeListener("finish",this._onFinishBound),this._onFinishBound=null,this._channel){try{this._channel.close()}catch{}this._channel.onmessage=null,this._channel.onopen=null,this._channel.onclose=null,this._channel.onerror=null}if(this._pc){try{this._pc.close()}catch{}this._pc.oniceconnectionstatechange=null,this._pc.onicegatheringstatechange=null,this._pc.onsignalingstatechange=null,this._pc.onicecandidate=null,this._pc.ontrack=null,this._pc.ondatachannel=null}this._pc=null,this._channel=null,e&&this.emit("error",e),t()},0))}_setupData(t){if(!t.channel)return this.__destroy(Xt(new Error("Data channel event is missing `channel` property"),"ERR_DATA_CHANNEL"));this._channel=t.channel,this._channel.binaryType="arraybuffer",typeof this._channel.bufferedAmountLowThreshold=="number"&&(this._channel.bufferedAmountLowThreshold=tc),this.channelName=this._channel.label,this._channel.onmessage=n=>{this._onChannelMessage(n)},this._channel.onbufferedamountlow=()=>{this._onChannelBufferedAmountLow()},this._channel.onopen=()=>{this._onChannelOpen()},this._channel.onclose=()=>{this._onChannelClose()},this._channel.onerror=n=>{const r=n.error instanceof Error?n.error:new Error(`Datachannel error: ${n.message} ${n.filename}:${n.lineno}:${n.colno}`);this.__destroy(Xt(r,"ERR_DATA_CHANNEL"))};let e=!1;this._closingInterval=Ih(()=>{this._channel&&this._channel.readyState==="closing"?(e&&this._onChannelClose(),e=!0):e=!1},LM)}_write(t,e){if(this.destroyed)return e(Xt(new Error("cannot write after peer is destroyed"),"ERR_DATA_CHANNEL"));if(this._connected){try{this.send(t)}catch(n){return this.__destroy(Xt(n,"ERR_DATA_CHANNEL"))}this._channel.bufferedAmount>tc?(this._debug("start backpressure: bufferedAmount %d",this._channel.bufferedAmount),this._cb=e):e(null)}else this._debug("write before connect"),this._chunk=t,this._cb=e}_onFinish(){if(this.destroyed)return;const t=()=>{$r(()=>this.__destroy(),1e3).unref?.()};this._connected?t():this.once("connect",t)}_startIceCompleteTimeout(){this.destroyed||this._iceCompleteTimer||(this._debug("started iceComplete timeout"),this._iceCompleteTimer=$r(()=>{this._iceComplete||(this._iceComplete=!0,this._debug("iceComplete timeout completed"),this.emit("iceTimeout"),this.emit("_iceComplete"))},this.iceCompleteTimeout))}_createOffer(){this.destroyed||this._pc.createOffer(this.offerOptions).then(t=>{if(this.destroyed)return;!this.trickle&&!this.allowHalfTrickle&&(t.sdp=Dh(t.sdp)),t.sdp=this.sdpTransform(t.sdp);const e=()=>{if(this.destroyed)return;const s=this._pc.localDescription||t;this._debug("signal"),this.emit("signal",{type:s.type,sdp:s.sdp})},n=()=>{this._debug("createOffer success"),!this.destroyed&&(this.trickle||this._iceComplete?e():this.once("_iceComplete",e))},r=s=>{this.__destroy(Xt(s,"ERR_SET_LOCAL_DESCRIPTION"))};this._pc.setLocalDescription(t).then(n).catch(r)}).catch(t=>{this.__destroy(Xt(t,"ERR_CREATE_OFFER"))})}_createAnswer(){this.destroyed||this._pc.createAnswer(this.answerOptions).then(t=>{if(this.destroyed)return;!this.trickle&&!this.allowHalfTrickle&&(t.sdp=Dh(t.sdp)),t.sdp=this.sdpTransform(t.sdp);const e=()=>{if(this.destroyed)return;const s=this._pc.localDescription||t;this._debug("signal"),this.emit("signal",{type:s.type,sdp:s.sdp}),this.initiator||this._requestMissingTransceivers?.()},n=()=>{this.destroyed||(this.trickle||this._iceComplete?e():this.once("_iceComplete",e))},r=s=>{this.__destroy(Xt(s,"ERR_SET_LOCAL_DESCRIPTION"))};this._pc.setLocalDescription(t).then(n).catch(r)}).catch(t=>{this.__destroy(Xt(t,"ERR_CREATE_ANSWER"))})}_onConnectionStateChange(){this.destroyed||this._destroying||this._pc.connectionState==="failed"&&this.__destroy(Xt(new Error("Connection failed."),"ERR_CONNECTION_FAILURE"))}_onIceStateChange(){if(this.destroyed)return;const t=this._pc.iceConnectionState,e=this._pc.iceGatheringState;this._debug("iceStateChange (connection: %s) (gathering: %s)",t,e),this.emit("iceStateChange",t,e),(t==="connected"||t==="completed")&&(this._pcReady=!0,this._maybeReady()),t==="failed"&&this.__destroy(Xt(new Error("Ice connection failed."),"ERR_ICE_CONNECTION_FAILURE")),t==="closed"&&this.__destroy(Xt(new Error("Ice connection closed."),"ERR_ICE_CONNECTION_CLOSED"))}getStats(t){const e=n=>(Object.prototype.toString.call(n.values)==="[object Array]"&&n.values.forEach(r=>{Object.assign(n,r)}),n);this._pc.getStats.length===0||this._isReactNativeWebrtc?this._pc.getStats().then(n=>{const r=[];n.forEach(s=>{r.push(e(s))}),t(null,r)},n=>t(n)):this._pc.getStats.length>0?this._pc.getStats(n=>{if(this.destroyed)return;const r=[];n.result().forEach(s=>{const o={};s.names().forEach(a=>{o[a]=s.stat(a)}),o.id=s.id,o.type=s.type,o.timestamp=s.timestamp,r.push(e(o))}),t(null,r)},n=>t(n)):t(null,[])}_maybeReady(){if(this._debug("maybeReady pc %s channel %s",this._pcReady,this._channelReady),this._connected||this._connecting||!this._pcReady||!this._channelReady)return;this._connecting=!0;const t=()=>{this.destroyed||this._destroying||this.getStats((e,n)=>{if(this.destroyed||this._destroying)return;e&&(n=[]);const r={},s={},o={};let a=!1;n.forEach(l=>{(l.type==="remotecandidate"||l.type==="remote-candidate")&&(r[l.id]=l),(l.type==="localcandidate"||l.type==="local-candidate")&&(s[l.id]=l),(l.type==="candidatepair"||l.type==="candidate-pair")&&(o[l.id]=l)});const c=l=>{a=!0;let u=s[l.localCandidateId];u&&(u.ip||u.address)?(this.localAddress=u.ip||u.address,this.localPort=Number(u.port)):u&&u.ipAddress?(this.localAddress=u.ipAddress,this.localPort=Number(u.portNumber)):typeof l.googLocalAddress=="string"&&(u=l.googLocalAddress.split(":"),this.localAddress=u[0],this.localPort=Number(u[1])),this.localAddress&&(this.localFamily=this.localAddress.includes(":")?"IPv6":"IPv4");let f=r[l.remoteCandidateId];f&&(f.ip||f.address)?(this.remoteAddress=f.ip||f.address,this.remotePort=Number(f.port)):f&&f.ipAddress?(this.remoteAddress=f.ipAddress,this.remotePort=Number(f.portNumber)):typeof l.googRemoteAddress=="string"&&(f=l.googRemoteAddress.split(":"),this.remoteAddress=f[0],this.remotePort=Number(f[1])),this.remoteAddress&&(this.remoteFamily=this.remoteAddress.includes(":")?"IPv6":"IPv4"),this._debug("connect local: %s:%s remote: %s:%s",this.localAddress,this.localPort,this.remoteAddress,this.remotePort)};if(n.forEach(l=>{l.type==="transport"&&l.selectedCandidatePairId&&c(o[l.selectedCandidatePairId]),(l.type==="googCandidatePair"&&l.googActiveConnection==="true"||(l.type==="candidatepair"||l.type==="candidate-pair")&&l.selected)&&c(l)}),!a&&(!Object.keys(o).length||Object.keys(s).length)){$r(t,100);return}else this._connecting=!1,this._connected=!0;if(this._chunk){try{this.send(this._chunk)}catch(u){return this.__destroy(Xt(u,"ERR_DATA_CHANNEL"))}this._chunk=null,this._debug('sent chunk from "write before connect"');const l=this._cb;this._cb=null,l(null)}typeof this._channel.bufferedAmountLowThreshold!="number"&&(this._interval=Ih(()=>this._onInterval(),150)),this._debug("connect"),this.emit("connect")})};t()}_onInterval(){!this._cb||!this._channel||this._channel.bufferedAmount>tc||this._onChannelBufferedAmountLow()}_onSignalingStateChange(){this.destroyed||(this._pc.signalingState==="stable"&&(this._isNegotiating=!1,this._debug("flushing sender queue",this._sendersAwaitingStable),this._sendersAwaitingStable.forEach(t=>{this._pc.removeTrack(t),this._queuedNegotiation=!0}),this._sendersAwaitingStable=[],this._queuedNegotiation?(this._debug("flushing negotiation queue"),this._queuedNegotiation=!1,this._needsNegotiation()):(this._debug("negotiated"),this.emit("negotiated"))),this._debug("signalingStateChange %s",this._pc.signalingState),this.emit("signalingStateChange",this._pc.signalingState))}_onIceCandidate(t){this.destroyed||(t.candidate&&this.trickle?this.emit("signal",{type:"candidate",candidate:{candidate:t.candidate.candidate,sdpMLineIndex:t.candidate.sdpMLineIndex,sdpMid:t.candidate.sdpMid}}):!t.candidate&&!this._iceComplete&&(this._iceComplete=!0,this.emit("_iceComplete")),t.candidate&&this._startIceCompleteTimeout())}_onChannelMessage(t){if(this.destroyed)return;let e=t.data;e instanceof ArrayBuffer?e=new Uint8Array(e):this.__objectMode===!1&&(e=AM(e)),this.push(e)}_onChannelBufferedAmountLow(){if(this.destroyed||!this._cb)return;this._debug("ending backpressure: bufferedAmount %d",this._channel.bufferedAmount);const t=this._cb;this._cb=null,t(null)}_onChannelOpen(){this._connected||this.destroyed||(this._debug("on channel open"),this._channelReady=!0,this._maybeReady())}_onChannelClose(){this.destroyed||(this._debug("on channel close"),this.__destroy())}_debug(){const t=[].slice.call(arguments);t[0]="["+this._id+"] "+t[0],RM.apply(null,t)}};Zo.WEBRTC_SUPPORT=!!Mc;Zo.config={iceServers:[{urls:["stun:stun.l.google.com:19302","stun:global.stun.twilio.com:3478"]}],sdpSemantics:"unified-plan"};Zo.channelConfig={};/*! simple-peer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */class DM extends Zo{constructor(t={}){super(t),this._pc&&(this.streams=t.streams||(t.stream?[t.stream]:[]),this._senderMap=new Map,this.streams&&this.streams.forEach(e=>{this.addStream(e)}),this._pc.ontrack=e=>{this._onTrack(e)})}addTransceiver(t,e){if(!this._destroying){if(this.destroyed)throw Xt(new Error("cannot addTransceiver after peer is destroyed"),"ERR_DESTROYED");if(this._debug("addTransceiver()"),this.initiator)try{this._pc.addTransceiver(t,e),this._needsNegotiation()}catch(n){this.__destroy(Xt(n,"ERR_ADD_TRANSCEIVER"))}else this.emit("signal",{type:"transceiverRequest",transceiverRequest:{kind:t,init:e}})}}addStream(t){if(!this._destroying){if(this.destroyed)throw Xt(new Error("cannot addStream after peer is destroyed"),"ERR_DESTROYED");this._debug("addStream()"),t.getTracks().forEach(e=>{this.addTrack(e,t)})}}addTrack(t,e){if(this._destroying)return;if(this.destroyed)throw Xt(new Error("cannot addTrack after peer is destroyed"),"ERR_DESTROYED");this._debug("addTrack()");const n=this._senderMap.get(t)||new Map;let r=n.get(e);if(!r)r=this._pc.addTrack(t,e),n.set(e,r),this._senderMap.set(t,n),this._needsNegotiation();else throw r.removed?Xt(new Error("Track has been removed. You should enable/disable tracks that you want to re-add."),"ERR_SENDER_REMOVED"):Xt(new Error("Track has already been added to that stream."),"ERR_SENDER_ALREADY_ADDED")}replaceTrack(t,e,n){if(this._destroying)return;if(this.destroyed)throw Xt(new Error("cannot replaceTrack after peer is destroyed"),"ERR_DESTROYED");this._debug("replaceTrack()");const r=this._senderMap.get(t),s=r?r.get(n):null;if(!s)throw Xt(new Error("Cannot replace track that was never added."),"ERR_TRACK_NOT_ADDED");e&&this._senderMap.set(e,r),s.replaceTrack!=null?s.replaceTrack(e):this.__destroy(Xt(new Error("replaceTrack is not supported in this browser"),"ERR_UNSUPPORTED_REPLACETRACK"))}removeTrack(t,e){if(this._destroying)return;if(this.destroyed)throw Xt(new Error("cannot removeTrack after peer is destroyed"),"ERR_DESTROYED");this._debug("removeSender()");const n=this._senderMap.get(t),r=n?n.get(e):null;if(!r)throw Xt(new Error("Cannot remove track that was never added."),"ERR_TRACK_NOT_ADDED");try{r.removed=!0,this._pc.removeTrack(r)}catch(s){s.name==="NS_ERROR_UNEXPECTED"?this._sendersAwaitingStable.push(r):this.__destroy(Xt(s,"ERR_REMOVE_TRACK"))}this._needsNegotiation()}removeStream(t){if(!this._destroying){if(this.destroyed)throw Xt(new Error("cannot removeStream after peer is destroyed"),"ERR_DESTROYED");this._debug("removeSenders()"),t.getTracks().forEach(e=>{this.removeTrack(e,t)})}}_requestMissingTransceivers(){this._pc.getTransceivers&&this._pc.getTransceivers().forEach(t=>{!t.mid&&t.sender.track&&!t.requested&&(t.requested=!0,this.addTransceiver(t.sender.track.kind))})}_onTrack(t){this.destroyed||t.streams.forEach(e=>{this._debug("on track"),this.emit("track",t.track,e),this._remoteTracks.push({track:t.track,stream:e}),!this._remoteStreams.some(n=>n.id===e.id)&&(this._remoteStreams.push(e),queueMicrotask(()=>{this._debug("on stream"),this.emit("stream",e)}))})}}const Uh="data",Nh="signal",Oh=(i,t)=>{const e=new DM({iceServers:[{urls:IM}],...t,initiator:i,trickle:!1}),n=s=>r.push(s);let r=[];return e.on(Uh,n),{id:e._id,created:Date.now(),connection:e._pc,get channel(){return e._channel},get isDead(){return e.destroyed},signal:s=>new Promise(o=>{i||e.on(Nh,o),e.signal(s)}),sendData:s=>e.send(s),destroy:()=>e.destroy(),setHandlers:s=>Object.entries(s).forEach(([o,a])=>e.on(o,a)),offerPromise:i?new Promise(s=>e.on(Nh,s)):Promise.resolve(),addStream:s=>e.addStream(s),removeStream:s=>e.removeStream(s),addTrack:(s,o)=>e.addTrack(s,o),removeTrack:(s,o)=>e.removeTrack(s,o),replaceTrack:(s,o,a)=>e.replaceTrack(s,o,a),drainEarlyData:s=>{e.off(Uh,n),r.forEach(s),r=null}}},IM=[...as(5,(i,t)=>`stun:stun${t||""}.l.google.com:19302`),"stun:global.stun.twilio.com:3478"],UM=Object.getPrototypeOf(Uint8Array),mo=12,zd=0,go=zd+mo,_o=go+1,Qr=_o+1,ts=Qr+1,fi=16*2**10-ts,ao=255,Fh="bufferedamountlow",or=i=>"@_"+i,NM=(i,t,e)=>{const n={},r={},s={},o={},a={},c={},l={},u={onPeerJoin:mi,onPeerLeave:mi,onPeerStream:mi,onPeerTrack:mi},f=(P,b)=>(P?Array.isArray(P)?P:[P]:uS(n)).flatMap(w=>{const C=n[w];return C?b(w,C):(console.warn(`${os}: no peer with id ${w} found`),[])}),h=P=>{n[P]&&(delete n[P],delete o[P],delete a[P],u.onPeerLeave(P),t(P))},d=P=>{if(r[P])return s[P];if(!P)throw Rn("action type argument is required");const b=Ti(P);if(b.byteLength>mo)throw Rn(`action type string "${P}" (${b.byteLength}b) exceeds byte limit (${mo}). Hint: choose a shorter name.`);const w=new Uint8Array(mo);w.set(b);let C=0;return r[P]={onComplete:mi,onProgress:mi,setOnComplete:A=>r[P]={...r[P],onComplete:A},setOnProgress:A=>r[P]={...r[P],onProgress:A},send:async(A,F,O,J)=>{if(O&&typeof O!="object")throw Rn("action meta argument must be an object");const Z=typeof A;if(Z==="undefined")throw Rn("action data cannot be undefined");const et=Z!=="string",st=A instanceof Blob,St=st||A instanceof ArrayBuffer||A instanceof UM;if(O&&!St)throw Rn("action meta argument can only be used with binary data");const q=St?new Uint8Array(st?await A.arrayBuffer():A):Ti(et?In(A):A),j=O?Ti(In(O)):null,it=Math.ceil(q.byteLength/fi)+(O?1:0)||1,nt=as(it,(vt,ht)=>{const xt=ht===it-1,N=O&&ht===0,Rt=new Uint8Array(ts+(N?j.byteLength:xt?q.byteLength-fi*(it-(O?2:1)):fi));return Rt.set(w),Rt.set([C],go),Rt.set([xt|N<<1|St<<2|et<<3],_o),Rt.set([Math.round((ht+1)/it*ao)],Qr),Rt.set(O?N?j:q.subarray((ht-1)*fi,ht*fi):q.subarray(ht*fi,(ht+1)*fi),ts),Rt});return C=C+1&ao,cr(f(F,async(vt,ht)=>{const{channel:xt}=ht;let N=0;for(;N<it;){const Rt=nt[N];if(xt.bufferedAmount>xt.bufferedAmountLowThreshold&&await new Promise(Ut=>{const Jt=()=>{xt.removeEventListener(Fh,Jt),Ut()};xt.addEventListener(Fh,Jt)}),!n[vt])break;ht.sendData(Rt),N++,J?.(Rt[Qr]/ao,vt,O)}}))}},s[P]||=[r[P].send,r[P].setOnComplete,r[P].setOnProgress]},g=(P,b)=>{const w=new Uint8Array(b),C=fo(w.subarray(zd,go)).replaceAll("\0",""),[A]=w.subarray(go,_o),[F]=w.subarray(_o,Qr),[O]=w.subarray(Qr,ts),J=w.subarray(ts),Z=!!(F&1),et=!!(F&2),st=!!(F&4),St=!!(F&8);if(!r[C]){console.warn(`${os}: received message with unregistered type (${C})`);return}o[P]||={},o[P][C]||={};const q=o[P][C][A]||={chunks:[]};if(et?q.meta=Oo(fo(J)):q.chunks.push(J),r[C].onProgress(O/ao,P,q.meta),!Z)return;const j=new Uint8Array(q.chunks.reduce((it,nt)=>it+nt.byteLength,0));if(q.chunks.reduce((it,nt)=>(j.set(nt,it),it+nt.byteLength),0),delete o[P][C][A],st)r[C].onComplete(j,P,q.meta);else{const it=fo(j);r[C].onComplete(St?Oo(it):it,P)}},_=async()=>{await x(""),await new Promise(P=>setTimeout(P,99)),dh(n).forEach(([P,b])=>{b.destroy(),delete n[P]}),e()},[m,p]=d(or("ping")),[T,E]=d(or("pong")),[R,G]=d(or("signal")),[I,D]=d(or("stream")),[V,y]=d(or("track")),[x,U]=d(or("leave"));return i((P,b)=>{n[b]||(n[b]=P,P.setHandlers({data:w=>g(b,w),stream:w=>{u.onPeerStream(w,b,c[b]),delete c[b]},track:(w,C)=>{u.onPeerTrack(w,C,b,l[b]),delete l[b]},signal:w=>R(w,b),close:()=>h(b),error:()=>h(b)}),u.onPeerJoin(b),P.drainEarlyData?.(w=>g(b,w)))}),p((P,b)=>T("",b)),E((P,b)=>{a[b]?.(),delete a[b]}),G((P,b)=>n[b]?.signal(P)),D((P,b)=>c[b]=P),y((P,b)=>l[b]=P),U((P,b)=>h(b)),Zc&&addEventListener("beforeunload",_),{makeAction:d,leave:_,ping:async P=>{if(!P)throw Rn("ping() must be called with target peer ID");const b=Date.now();return m("",P),await new Promise(w=>a[P]=w),Date.now()-b},getPeers:()=>lS(dh(n).map(([P,b])=>[P,b.connection])),addStream:(P,b,w)=>f(b,async(C,A)=>{w&&await I(w,C),A.addStream(P)}),removeStream:(P,b)=>f(b,(w,C)=>C.removeStream(P)),addTrack:(P,b,w,C)=>f(w,async(A,F)=>{C&&await V(C,A),F.addTrack(P,b)}),removeTrack:(P,b,w)=>f(w,(C,A)=>A.removeTrack(P,b)),replaceTrack:(P,b,w,C,A)=>f(C,async(F,O)=>{A&&await V(A,F),O.replaceTrack(P,b,w)}),onPeerJoin:P=>u.onPeerJoin=P,onPeerLeave:P=>u.onPeerLeave=P,onPeerStream:P=>u.onPeerStream=P,onPeerTrack:P=>u.onPeerTrack=P}},OM=20,FM=5333,Bh=57333,BM=({init:i,subscribe:t,announce:e})=>{const n={};let r=!1,s,o,a;return(c,l,u)=>{const{appId:f}=c;if(n[f]?.[l])return n[f][l];const h={},d={},g=no(os,f,l),_=ro(g),m=ro(no(g,ar)),p=vS(c.password||"",f,l),T=A=>async F=>({type:F.type,sdp:await A(p,F.sdp)}),E=T(yS),R=T(xS),G=()=>Oh(!0,c.rtcConfig),I=(A,F,O)=>{if(d[F]){d[F]!==A&&A.destroy();return}d[F]=A,C(A,F),h[F]?.forEach((J,Z)=>{Z!==O&&J.destroy()}),delete h[F]},D=(A,F)=>{d[F]===A&&delete d[F]},V=(A,F)=>{if(d[A])return;const O=h[A]?.[F];O&&(delete h[A][F],O.destroy())},y=A=>(o.push(...as(A,G)),cr(o.splice(0,A).map(F=>F.offerPromise.then(R).then(O=>({peer:F,offer:O}))))),x=(A,F)=>u?.({error:`incorrect password (${c.password}) when decrypting ${F}`,appId:f,peerId:A,roomId:l}),U=A=>async(F,O,J)=>{const[Z,et]=await cr([_,m]);if(F!==Z&&F!==et)return;const{peerId:st,offer:St,answer:q,peer:j}=typeof O=="string"?Oo(O):O;if(!(st===ar||d[st])){if(st&&!St&&!q){if(h[st]?.[A])return;const[[{peer:it,offer:nt}],vt]=await cr([y(1),ro(no(g,st))]);h[st]||=[],h[st][A]=it,setTimeout(()=>V(st,A),P[A]*.9),it.setHandlers({connect:()=>I(it,st,A),close:()=>D(it,st)}),J(vt,In({peerId:ar,offer:nt}))}else if(St){if(h[st]?.[A]&&ar>st)return;const nt=Oh(!1,c.rtcConfig);nt.setHandlers({connect:()=>I(nt,st,A),close:()=>D(nt,st)});let vt;try{vt=await E(St)}catch{x(st,"offer");return}if(nt.isDead)return;const[ht,xt]=await cr([ro(no(g,st)),nt.signal(vt)]);J(ht,In({peerId:ar,answer:await R(xt)}))}else if(q){let it;try{it=await E(q)}catch{x(st,"answer");return}if(j)j.setHandlers({connect:()=>I(j,st,A),close:()=>D(j,st)}),j.signal(it);else{const nt=h[st]?.[A];nt&&!nt.isDead&&nt.signal(it)}}}};if(!c)throw Rn("requires a config map as the first argument");if(!f&&!c.firebaseApp)throw Rn("config map is missing appId field");if(!l)throw Rn("roomId argument required");if(!r){const A=i(c);o=as(OM,G),s=Array.isArray(A)?A:[A],r=!0,a=setInterval(()=>o=o.filter(F=>{const O=Date.now()-F.created<Bh;return O||F.destroy(),O}),Bh*1.03)}const P=s.map(()=>FM),b=[],w=s.map(async(A,F)=>t(await A,await _,await m,U(F),y));cr([_,m]).then(([A,F])=>{const O=async(J,Z)=>{const et=await e(J,A,F);typeof et=="number"&&(P[Z]=et),b[Z]=setTimeout(()=>O(J,Z),P[Z])};w.forEach(async(J,Z)=>{await J,O(await s[Z],Z)})});let C=mi;return n[f]||={},n[f][l]=NM(A=>C=A,A=>delete d[A],()=>{delete n[f][l],b.forEach(clearTimeout),w.forEach(async A=>(await A)()),clearInterval(a)})}},kM=5,Hd="x",Vd="EVENT",Gd=Zc&&jc.utils.randomPrivateKey(),zM=Zc&&Sc(jc.getPublicKey(Gd)),cl={},jr={},kh={},Wd=()=>Math.floor(Date.now()/1e3),Xd=i=>kh[i]??(kh[i]=ud(i,1e4)+2e4),zh=async(i,t)=>{const e={kind:Xd(i),content:t,pubkey:zM,created_at:Wd(),tags:[[Hd,i]]},n=Sc(new Uint8Array(await crypto.subtle.digest("SHA-256",Ti(In([0,e.pubkey,e.created_at,e.kind,e.tags,e.content])))));return In([Vd,{...e,id:n,sig:Sc(await jc.sign(n,Gd))}])},Hh=(i,t)=>(cl[i]=t,In(["REQ",i,{kinds:[Xd(t)],since:Wd(),["#"+Hd]:[t]}])),Vh=i=>(delete cl[i],In(["CLOSE",i])),HM=BM({init:i=>pS(i,VM,kM).map(t=>{const e=mS(t,n=>{const[r,s,o,a]=Oo(n);if(r!==Vd){const c=`${os}: relay failure from ${e.url} - `;r==="NOTICE"?console.warn(c+s):r==="OK"&&!o&&console.warn(c+a);return}jr[s]?.(cl[s],o.content)});return e.ready}),subscribe:(i,t,e,n)=>{const r=yc(64),s=yc(64);return jr[r]=jr[s]=(o,a)=>n(o,a,async(c,l)=>i.send(await zh(c,l))),i.send(Hh(r,t)),i.send(Hh(s,e)),()=>{i.send(Vh(r)),i.send(Vh(s)),delete jr[r],delete jr[s]}},announce:async(i,t)=>i.send(await zh(t,In({peerId:ar})))}),VM=["eu.purplerelay.com","ftp.halifax.rwth-aachen.de/nostr","longhorn.bgp.rodeo","multiplexer.huszonegy.world","nfdb.noswhere.com","nostr-verified.wellorder.net","nostr.cool110.xyz","nostr.data.haus","nostr.grooveix.com","nostr.huszonegy.world","nostr.mom","nostr.openhoofd.nl","nostr.petrkr.net/strfry","nostr.sathoarder.com","nostr.stakey.net","nostr.vulpem.com","nostr2.sanhauf.com","nostrelay.circum.space","relay.fountain.fm","relay.nostraddress.com","relay.nostromo.social","relay.snort.social","relay.verified-nostr.com","strfry.openhoofd.nl","yabu.me/v2"].map(i=>"wss://"+i);function GM(i,t){const e=HM({appId:"padrosum-pcraft-v1"},i),[n,r]=e.makeAction("pos"),[s,o]=e.makeAction("blk"),[a,c]=e.makeAction("state"),[l,u]=e.makeAction("hello");return e.onPeerJoin(f=>{l({name:t.myName()},f);const h=t.worldState();h&&a(h,f),t.onPeerJoin?.(f)}),e.onPeerLeave(f=>t.onPeerLeave?.(f)),u((f,h)=>t.onHello?.(h,f)),c((f,h)=>t.onState?.(f,h)),r((f,h)=>t.onPos?.(h,f)),o((f,h)=>t.onBlock?.(f,h)),{sendPos:n,sendBlock:s,leave:()=>e.leave(),peerCount:()=>Object.keys(e.getPeers()).length}}function WM(i){let t=0;for(const e of i)t=t*31+e.charCodeAt(0)>>>0;return new Nt().setHSL(t%360/360,.65,.5)}function Gh(i){const t=document.createElement("canvas"),e=t.getContext("2d");e.font="bold 28px monospace";const n=Math.ceil(e.measureText(i).width)+20;t.width=n,t.height=40;const r=t.getContext("2d");r.fillStyle="rgba(0,0,0,0.45)",r.fillRect(0,0,n,40),r.font="bold 28px monospace",r.fillStyle="#fff",r.textAlign="center",r.textBaseline="middle",r.fillText(i,n/2,21);const s=new Af(t);s.colorSpace=We;const o=new Px(new bf({map:s,depthTest:!1}));return o.scale.set(n/80,.5,1),o.position.y=2.35,o}class XM{constructor(t,e,n){this.scene=t,this.target=new X(0,-100,0),this.targetYaw=0,this.targetPitch=0,this.walkPhase=0;const r=WM(e),s=r.clone().multiplyScalar(.45),o=new Nt("#d8a075"),a=h=>new uo({color:h}),c=(h,d,g,_)=>new Fe(new Ui(h,d,g),a(_));this.group=new ur,this.head=c(.48,.48,.48,o),this.head.position.y=1.74;const l=c(.52,.72,.28,r);l.position.y=1.14,this.armL=c(.2,.72,.2,r),this.armR=this.armL.clone(),this.armL.position.set(-.38,1.14,0),this.armR.position.set(.38,1.14,0),this.legL=c(.22,.78,.22,s),this.legR=this.legL.clone(),this.legL.position.set(-.13,.39,0),this.legR.position.set(.13,.39,0);const u=c(.07,.07,.02,"#2b1e66");u.position.set(-.1,.06,-.25);const f=u.clone();f.position.x=.1,this.head.add(u,f),this.nameTag=Gh(n||"oyuncu"),this.group.add(this.head,l,this.armL,this.armR,this.legL,this.legR,this.nameTag),this.group.position.copy(this.target),t.add(this.group)}setName(t){this.group.remove(this.nameTag),this.nameTag.material.map.dispose(),this.nameTag.material.dispose(),this.nameTag=Gh(t),this.group.add(this.nameTag)}setTarget(t,e,n){this.group.position.y<-50&&this.group.position.set(t[0],t[1],t[2]),this.target.set(t[0],t[1],t[2]),this.targetYaw=e,this.targetPitch=n}update(t){const e=this.group.position.clone();this.group.position.lerp(this.target,Math.min(1,t*12));let n=this.targetYaw-this.group.rotation.y;n=Math.atan2(Math.sin(n),Math.cos(n)),this.group.rotation.y+=n*Math.min(1,t*12),this.head.rotation.x=uc.lerp(this.head.rotation.x,-this.targetPitch,Math.min(1,t*12));const r=e.distanceTo(this.group.position)/Math.max(t,1e-4),s=Math.hypot(this.target.x-this.group.position.x,this.target.z-this.group.position.z);if(r>.4&&s>.05){this.walkPhase+=t*9;const o=Math.sin(this.walkPhase)*.7;this.legL.rotation.x=o,this.legR.rotation.x=-o,this.armL.rotation.x=-o*.8,this.armR.rotation.x=o*.8}else for(const o of[this.legL,this.legR,this.armL,this.armR])o.rotation.x*=.8}dispose(){this.scene.remove(this.group),this.group.traverse(t=>{t.geometry?.dispose(),t.material?.map?.dispose(),t.material?.dispose()})}}const mn=new Rx({antialias:!1});mn.setPixelRatio(Math.min(window.devicePixelRatio,2));mn.setSize(window.innerWidth,window.innerHeight);document.getElementById("app").appendChild(mn.domElement);const xs=new Cx,Ri=new Xe(75,window.innerWidth/window.innerHeight,.1,800);window.addEventListener("resize",()=>{Ri.aspect=window.innerWidth/window.innerHeight,Ri.updateProjectionMatrix(),mn.setSize(window.innerWidth,window.innerHeight)});const ll=Xx(),Se=new sy(xs,ll),Jo=new $x(xs),ge=new hy(Ri,Se);ge.onJump=()=>wi.jump();ge.onSplash=()=>wi.splash();const rs=new Ix(new Ux(new Ui(1.002,1.002,1.002)),new Tf({color:1118481}));rs.visible=!1;xs.add(rs);const Nn=new fy(ll.canvas),us=new dy(ll.canvas,Nn),Ic=document.getElementById("pause");let qe=py();const qM=!!qe,ul=new yy(qe);let Wh="",ko=null,hs=!1,Fr=!1,qd=null;const Pr=new Map,es=new Map;function Yd(){Nn.setPlayerCount(Pr.size+1)}function Xh(i){let t=Pr.get(i);return t||(t=new XM(xs,i,es.get(i)),Pr.set(i,t),Yd()),t}function YM(){return hs?{seed:Se.seed,edits:Se.editsArray(),time:Jo.time}:null}function Zr(i,t,e){if(hs)return;hs=!0,clearTimeout(qd),window.__pcraftSeed=i,Se.setSeed(i),t?.length&&Se.applyEdits(t),typeof e=="number"&&(Jo.time=e);const n=ey(Se.gen);ge.setPosition(...n),Se.update(n[0],n[2],12),ul.hide(),Nn.show(),Fr=!0,mn.domElement.requestPointerLock?.()}function KM(i){if(Wh=i,wi.unlock(),qe||(qe=my()),gy(qe),ko=GM(qe,{myName:()=>Wh,worldState:YM,onHello:(t,{name:e})=>{const n=!es.has(t);es.set(t,e),Xh(t).setName(e),n&&(Nn.toast(`${e} katıldı`),wi.join())},onState:t=>Zr(t.seed,t.edits,t.time),onPos:(t,e)=>Xh(t).setTarget(e.p,e.yaw,e.pitch),onBlock:([t,e,n,r])=>{Se.setBlock(t,e,n,r,!0)},onPeerLeave:t=>{Pr.get(t)?.dispose(),Pr.delete(t);const e=es.get(t);es.delete(t),e&&(Nn.toast(`${e} ayrıldı`),wi.leave()),Yd()}}),qM)ul.setStatus("Dünyaya bağlanılıyor…"),qd=setTimeout(()=>{const t=th(qe);t?Zr(t.seed,t.edits,t.time):Zr(Math.random()*4294967295|0,[],.08)},6e3);else{const t=th(qe);t?Zr(t.seed,t.edits,t.time):Zr(Math.random()*4294967295|0,[],.08)}}ul.onStart(KM);function Uc(i,t,e,n){Se.setBlock(i,t,e,n,!0),ko?.sendBlock([i,t,e,n]),$M()}window.__pcraft={getBlock:(i,t,e)=>Se.getBlock(i,t,e),setBlock:Uc,player:ge};document.addEventListener("mousedown",i=>{if(!Fr||!document.pointerLockElement)return;const t=Pf(Se,Ri.position,ge.lookDir(),6);if(t){if(i.button===0){const e=De[t.id];if(e.unbreakable)return;Uc(t.x,t.y,t.z,It.AIR),wi.dig(e.sound)}else if(i.button===2){const e=t.x+t.nx,n=t.y+t.ny,r=t.z+t.nz,s=Se.getBlock(e,n,r),o=Nn.currentBlock();if(!De[o]?.place||s!==It.AIR&&s!==It.WATER||ge.intersectsBlock(e,n,r))return;Uc(e,n,r,o),wi.place()}}});document.addEventListener("contextmenu",i=>i.preventDefault());document.addEventListener("keydown",i=>{Fr&&i.code==="KeyE"&&(us.toggle(),us.open||mn.domElement.requestPointerLock?.())});mn.domElement.addEventListener("click",()=>{Fr&&!us.open&&!document.pointerLockElement&&mn.domElement.requestPointerLock?.()});document.addEventListener("pointerlockchange",()=>{if(!Fr)return;!!!document.pointerLockElement&&!us.open?Ic.hidden=!1:Ic.hidden=!0});document.getElementById("resume-btn").addEventListener("click",()=>{Ic.hidden=!0,mn.domElement.requestPointerLock?.()});async function Kd(){try{await navigator.clipboard.writeText(Qu(qe)),Nn.toast("Link kopyalandı — arkadaşına gönder!")}catch{Nn.toast(Qu(qe),6e3)}}document.getElementById("copy-link").addEventListener("click",Kd);document.getElementById("copy-link-2").addEventListener("click",Kd);let qh=null;function $M(){clearTimeout(qh),qh=setTimeout(hl,1500)}function hl(){!hs||!qe||_y(qe,{seed:Se.seed,edits:Se.editsArray(),time:Jo.time})}setInterval(hl,15e3);window.addEventListener("beforeunload",hl);const jM=new kx;let ec=0,nc=0,co=0,Yh=0;function $d(){requestAnimationFrame($d);const i=Math.min(jM.getDelta(),.05);if(nc++,co+=i,co>=.5&&(Yh=Math.round(nc/co),nc=0,co=0),hs){ge.enabled=!!document.pointerLockElement&&!us.open,ge.update(i),Se.update(ge.pos.x,ge.pos.z,2),Jo.update(Fr?i:0,ge.pos,Ri);for(const e of Pr.values())e.update(i);const t=document.pointerLockElement?Pf(Se,Ri.position,ge.lookDir(),6):null;t?(rs.position.set(t.x+.5,t.y+.5,t.z+.5),rs.visible=!0):rs.visible=!1,ec+=i,ko&&ec>=.1&&(ec=0,ko.sendPos({p:[ge.pos.x,ge.pos.y,ge.pos.z],yaw:ge.yaw,pitch:ge.pitch})),Nn.setCoords(ge.pos,Yh)}mn.render(xs,Ri)}$d();
