(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function e(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=e(r);fetch(r.href,i)}})();function p0(c,a){const e=Object.create(null),s=c.split(",");for(let r=0;r<s.length;r++)e[s[r]]=!0;return a?r=>!!e[r.toLowerCase()]:r=>!!e[r]}const h2={},o4=[],o1=()=>{},at=()=>!1,j3=c=>c.charCodeAt(0)===111&&c.charCodeAt(1)===110&&(c.charCodeAt(2)>122||c.charCodeAt(2)<97),v0=c=>c.startsWith("onUpdate:"),b2=Object.assign,z0=(c,a)=>{const e=c.indexOf(a);e>-1&&c.splice(e,1)},et=Object.prototype.hasOwnProperty,l2=(c,a)=>et.call(c,a),Q=Array.isArray,n4=c=>E3(c)==="[object Map]",t7=c=>E3(c)==="[object Set]",a2=c=>typeof c=="function",C2=c=>typeof c=="string",z4=c=>typeof c=="symbol",z2=c=>c!==null&&typeof c=="object",f7=c=>(z2(c)||a2(c))&&a2(c.then)&&a2(c.catch),m7=Object.prototype.toString,E3=c=>m7.call(c),st=c=>E3(c).slice(8,-1),u7=c=>E3(c)==="[object Object]",H0=c=>C2(c)&&c!=="NaN"&&c[0]!=="-"&&""+parseInt(c,10)===c,M3=p0(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),$3=c=>{const a=Object.create(null);return e=>a[e]||(a[e]=c(e))},rt=/-(\w)/g,t1=$3(c=>c.replace(rt,(a,e)=>e?e.toUpperCase():"")),it=/\B([A-Z])/g,H4=$3(c=>c.replace(it,"-$1").toLowerCase()),q3=$3(c=>c.charAt(0).toUpperCase()+c.slice(1)),b6=$3(c=>c?`on${q3(c)}`:""),J1=(c,a)=>!Object.is(c,a),C6=(c,a)=>{for(let e=0;e<c.length;e++)c[e](a)},w3=(c,a,e)=>{Object.defineProperty(c,a,{configurable:!0,enumerable:!1,value:e})},ot=c=>{const a=parseFloat(c);return isNaN(a)?c:a},nt=c=>{const a=C2(c)?Number(c):NaN;return isNaN(a)?c:a};let X8;const $6=()=>X8||(X8=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Y2(c){if(Q(c)){const a={};for(let e=0;e<c.length;e++){const s=c[e],r=C2(s)?mt(s):Y2(s);if(r)for(const i in r)a[i]=r[i]}return a}else if(C2(c)||z2(c))return c}const lt=/;(?![^(]*\))/g,tt=/:([^]+)/,ft=/\/\*[^]*?\*\//g;function mt(c){const a={};return c.replace(ft,"").split(lt).forEach(e=>{if(e){const s=e.split(tt);s.length>1&&(a[s[0].trim()]=s[1].trim())}}),a}function T1(c){let a="";if(C2(c))a=c;else if(Q(c))for(let e=0;e<c.length;e++){const s=T1(c[e]);s&&(a+=s+" ")}else if(z2(c))for(const e in c)c[e]&&(a+=e+" ");return a.trim()}const ut="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ht=p0(ut);function h7(c){return!!c||c===""}const R2=c=>C2(c)?c:c==null?"":Q(c)||z2(c)&&(c.toString===m7||!a2(c.toString))?JSON.stringify(c,d7,2):String(c),d7=(c,a)=>a&&a.__v_isRef?d7(c,a.value):n4(a)?{[`Map(${a.size})`]:[...a.entries()].reduce((e,[s,r],i)=>(e[L6(s,i)+" =>"]=r,e),{})}:t7(a)?{[`Set(${a.size})`]:[...a.values()].map(e=>L6(e))}:z4(a)?L6(a):z2(a)&&!Q(a)&&!u7(a)?String(a):a,L6=(c,a="")=>{var e;return z4(c)?`Symbol(${(e=c.description)!=null?e:a})`:c};let O2;class p7{constructor(a=!1){this.detached=a,this._active=!0,this.effects=[],this.cleanups=[],this.parent=O2,!a&&O2&&(this.index=(O2.scopes||(O2.scopes=[])).push(this)-1)}get active(){return this._active}run(a){if(this._active){const e=O2;try{return O2=this,a()}finally{O2=e}}}on(){O2=this}off(){O2=this.parent}stop(a){if(this._active){let e,s;for(e=0,s=this.effects.length;e<s;e++)this.effects[e].stop();for(e=0,s=this.cleanups.length;e<s;e++)this.cleanups[e]();if(this.scopes)for(e=0,s=this.scopes.length;e<s;e++)this.scopes[e].stop(!0);if(!this.detached&&this.parent&&!a){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function v7(c){return new p7(c)}function dt(c,a=O2){a&&a.active&&a.effects.push(c)}function z7(){return O2}function pt(c){O2&&O2.cleanups.push(c)}const g0=c=>{const a=new Set(c);return a.w=0,a.n=0,a},H7=c=>(c.w&P1)>0,g7=c=>(c.n&P1)>0,vt=({deps:c})=>{if(c.length)for(let a=0;a<c.length;a++)c[a].w|=P1},zt=c=>{const{deps:a}=c;if(a.length){let e=0;for(let s=0;s<a.length;s++){const r=a[s];H7(r)&&!g7(r)?r.delete(c):a[e++]=r,r.w&=~P1,r.n&=~P1}a.length=e}},x3=new WeakMap;let k4=0,P1=1;const q6=30;let Q2;const Y1=Symbol(""),O6=Symbol("");class V0{constructor(a,e=null,s){this.fn=a,this.scheduler=e,this.active=!0,this.deps=[],this.parent=void 0,dt(this,s)}run(){if(!this.active)return this.fn();let a=Q2,e=N1;for(;a;){if(a===this)return;a=a.parent}try{return this.parent=Q2,Q2=this,N1=!0,P1=1<<++k4,k4<=q6?vt(this):Q8(this),this.fn()}finally{k4<=q6&&zt(this),P1=1<<--k4,Q2=this.parent,N1=e,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Q2===this?this.deferStop=!0:this.active&&(Q8(this),this.onStop&&this.onStop(),this.active=!1)}}function Q8(c){const{deps:a}=c;if(a.length){for(let e=0;e<a.length;e++)a[e].delete(c);a.length=0}}let N1=!0;const V7=[];function g4(){V7.push(N1),N1=!1}function V4(){const c=V7.pop();N1=c===void 0?!0:c}function E2(c,a,e){if(N1&&Q2){let s=x3.get(c);s||x3.set(c,s=new Map);let r=s.get(e);r||s.set(e,r=g0()),M7(r)}}function M7(c,a){let e=!1;k4<=q6?g7(c)||(c.n|=P1,e=!H7(c)):e=!c.has(Q2),e&&(c.add(Q2),Q2.deps.push(c))}function h1(c,a,e,s,r,i){const o=x3.get(c);if(!o)return;let n=[];if(a==="clear")n=[...o.values()];else if(e==="length"&&Q(c)){const l=Number(s);o.forEach((t,f)=>{(f==="length"||!z4(f)&&f>=l)&&n.push(t)})}else switch(e!==void 0&&n.push(o.get(e)),a){case"add":Q(c)?H0(e)&&n.push(o.get("length")):(n.push(o.get(Y1)),n4(c)&&n.push(o.get(O6)));break;case"delete":Q(c)||(n.push(o.get(Y1)),n4(c)&&n.push(o.get(O6)));break;case"set":n4(c)&&n.push(o.get(Y1));break}if(n.length===1)n[0]&&U6(n[0]);else{const l=[];for(const t of n)t&&l.push(...t);U6(g0(l))}}function U6(c,a){const e=Q(c)?c:[...c];for(const s of e)s.computed&&J8(s);for(const s of e)s.computed||J8(s)}function J8(c,a){(c!==Q2||c.allowRecurse)&&(c.scheduler?c.scheduler():c.run())}function Ht(c,a){var e;return(e=x3.get(c))==null?void 0:e.get(a)}const gt=p0("__proto__,__v_isRef,__isVue"),y7=new Set(Object.getOwnPropertyNames(Symbol).filter(c=>c!=="arguments"&&c!=="caller").map(c=>Symbol[c]).filter(z4)),Z8=Vt();function Vt(){const c={};return["includes","indexOf","lastIndexOf"].forEach(a=>{c[a]=function(...e){const s=i2(this);for(let i=0,o=this.length;i<o;i++)E2(s,"get",i+"");const r=s[a](...e);return r===-1||r===!1?s[a](...e.map(i2)):r}}),["push","pop","shift","unshift","splice"].forEach(a=>{c[a]=function(...e){g4();const s=i2(this)[a].apply(this,e);return V4(),s}}),c}function Mt(c){const a=i2(this);return E2(a,"has",c),a.hasOwnProperty(c)}class b7{constructor(a=!1,e=!1){this._isReadonly=a,this._shallow=e}get(a,e,s){const r=this._isReadonly,i=this._shallow;if(e==="__v_isReactive")return!r;if(e==="__v_isReadonly")return r;if(e==="__v_isShallow")return i;if(e==="__v_raw")return s===(r?i?Ft:w7:i?k7:L7).get(a)||Object.getPrototypeOf(a)===Object.getPrototypeOf(s)?a:void 0;const o=Q(a);if(!r){if(o&&l2(Z8,e))return Reflect.get(Z8,e,s);if(e==="hasOwnProperty")return Mt}const n=Reflect.get(a,e,s);return(z4(e)?y7.has(e):gt(e))||(r||E2(a,"get",e),i)?n:V2(n)?o&&H0(e)?n:n.value:z2(n)?r?x7(n):U3(n):n}}class C7 extends b7{constructor(a=!1){super(!1,a)}set(a,e,s,r){let i=a[e];if(m4(i)&&V2(i)&&!V2(s))return!1;if(!this._shallow&&(!N3(s)&&!m4(s)&&(i=i2(i),s=i2(s)),!Q(a)&&V2(i)&&!V2(s)))return i.value=s,!0;const o=Q(a)&&H0(e)?Number(e)<a.length:l2(a,e),n=Reflect.set(a,e,s,r);return a===i2(r)&&(o?J1(s,i)&&h1(a,"set",e,s):h1(a,"add",e,s)),n}deleteProperty(a,e){const s=l2(a,e);a[e];const r=Reflect.deleteProperty(a,e);return r&&s&&h1(a,"delete",e,void 0),r}has(a,e){const s=Reflect.has(a,e);return(!z4(e)||!y7.has(e))&&E2(a,"has",e),s}ownKeys(a){return E2(a,"iterate",Q(a)?"length":Y1),Reflect.ownKeys(a)}}class yt extends b7{constructor(a=!1){super(!0,a)}set(a,e){return!0}deleteProperty(a,e){return!0}}const bt=new C7,Ct=new yt,Lt=new C7(!0),M0=c=>c,O3=c=>Reflect.getPrototypeOf(c);function i3(c,a,e=!1,s=!1){c=c.__v_raw;const r=i2(c),i=i2(a);e||(J1(a,i)&&E2(r,"get",a),E2(r,"get",i));const{has:o}=O3(r),n=s?M0:e?C0:D4;if(o.call(r,a))return n(c.get(a));if(o.call(r,i))return n(c.get(i));c!==r&&c.get(a)}function o3(c,a=!1){const e=this.__v_raw,s=i2(e),r=i2(c);return a||(J1(c,r)&&E2(s,"has",c),E2(s,"has",r)),c===r?e.has(c):e.has(c)||e.has(r)}function n3(c,a=!1){return c=c.__v_raw,!a&&E2(i2(c),"iterate",Y1),Reflect.get(c,"size",c)}function c5(c){c=i2(c);const a=i2(this);return O3(a).has.call(a,c)||(a.add(c),h1(a,"add",c,c)),this}function a5(c,a){a=i2(a);const e=i2(this),{has:s,get:r}=O3(e);let i=s.call(e,c);i||(c=i2(c),i=s.call(e,c));const o=r.call(e,c);return e.set(c,a),i?J1(a,o)&&h1(e,"set",c,a):h1(e,"add",c,a),this}function e5(c){const a=i2(this),{has:e,get:s}=O3(a);let r=e.call(a,c);r||(c=i2(c),r=e.call(a,c)),s&&s.call(a,c);const i=a.delete(c);return r&&h1(a,"delete",c,void 0),i}function s5(){const c=i2(this),a=c.size!==0,e=c.clear();return a&&h1(c,"clear",void 0,void 0),e}function l3(c,a){return function(s,r){const i=this,o=i.__v_raw,n=i2(o),l=a?M0:c?C0:D4;return!c&&E2(n,"iterate",Y1),o.forEach((t,f)=>s.call(r,l(t),l(f),i))}}function t3(c,a,e){return function(...s){const r=this.__v_raw,i=i2(r),o=n4(i),n=c==="entries"||c===Symbol.iterator&&o,l=c==="keys"&&o,t=r[c](...s),f=e?M0:a?C0:D4;return!a&&E2(i,"iterate",l?O6:Y1),{next(){const{value:u,done:d}=t.next();return d?{value:u,done:d}:{value:n?[f(u[0]),f(u[1])]:f(u),done:d}},[Symbol.iterator](){return this}}}}function M1(c){return function(...a){return c==="delete"?!1:c==="clear"?void 0:this}}function kt(){const c={get(i){return i3(this,i)},get size(){return n3(this)},has:o3,add:c5,set:a5,delete:e5,clear:s5,forEach:l3(!1,!1)},a={get(i){return i3(this,i,!1,!0)},get size(){return n3(this)},has:o3,add:c5,set:a5,delete:e5,clear:s5,forEach:l3(!1,!0)},e={get(i){return i3(this,i,!0)},get size(){return n3(this,!0)},has(i){return o3.call(this,i,!0)},add:M1("add"),set:M1("set"),delete:M1("delete"),clear:M1("clear"),forEach:l3(!0,!1)},s={get(i){return i3(this,i,!0,!0)},get size(){return n3(this,!0)},has(i){return o3.call(this,i,!0)},add:M1("add"),set:M1("set"),delete:M1("delete"),clear:M1("clear"),forEach:l3(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{c[i]=t3(i,!1,!1),e[i]=t3(i,!0,!1),a[i]=t3(i,!1,!0),s[i]=t3(i,!0,!0)}),[c,e,a,s]}const[wt,xt,Nt,St]=kt();function y0(c,a){const e=a?c?St:Nt:c?xt:wt;return(s,r,i)=>r==="__v_isReactive"?!c:r==="__v_isReadonly"?c:r==="__v_raw"?s:Reflect.get(l2(e,r)&&r in s?e:s,r,i)}const At={get:y0(!1,!1)},Tt={get:y0(!1,!0)},Pt={get:y0(!0,!1)},L7=new WeakMap,k7=new WeakMap,w7=new WeakMap,Ft=new WeakMap;function _t(c){switch(c){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Bt(c){return c.__v_skip||!Object.isExtensible(c)?0:_t(st(c))}function U3(c){return m4(c)?c:b0(c,!1,bt,At,L7)}function Dt(c){return b0(c,!1,Lt,Tt,k7)}function x7(c){return b0(c,!0,Ct,Pt,w7)}function b0(c,a,e,s,r){if(!z2(c)||c.__v_raw&&!(a&&c.__v_isReactive))return c;const i=r.get(c);if(i)return i;const o=Bt(c);if(o===0)return c;const n=new Proxy(c,o===2?s:e);return r.set(c,n),n}function S1(c){return m4(c)?S1(c.__v_raw):!!(c&&c.__v_isReactive)}function m4(c){return!!(c&&c.__v_isReadonly)}function N3(c){return!!(c&&c.__v_isShallow)}function N7(c){return S1(c)||m4(c)}function i2(c){const a=c&&c.__v_raw;return a?i2(a):c}function I3(c){return w3(c,"__v_skip",!0),c}const D4=c=>z2(c)?U3(c):c,C0=c=>z2(c)?x7(c):c;function S7(c){N1&&Q2&&(c=i2(c),M7(c.dep||(c.dep=g0())))}function A7(c,a){c=i2(c);const e=c.dep;e&&U6(e)}function V2(c){return!!(c&&c.__v_isRef===!0)}function p2(c){return Rt(c,!1)}function Rt(c,a){return V2(c)?c:new jt(c,a)}class jt{constructor(a,e){this.__v_isShallow=e,this.dep=void 0,this.__v_isRef=!0,this._rawValue=e?a:i2(a),this._value=e?a:D4(a)}get value(){return S7(this),this._value}set value(a){const e=this.__v_isShallow||N3(a)||m4(a);a=e?a:i2(a),J1(a,this._rawValue)&&(this._rawValue=a,this._value=e?a:D4(a),A7(this))}}function Z(c){return V2(c)?c.value:c}const Et={get:(c,a,e)=>Z(Reflect.get(c,a,e)),set:(c,a,e,s)=>{const r=c[a];return V2(r)&&!V2(e)?(r.value=e,!0):Reflect.set(c,a,e,s)}};function T7(c){return S1(c)?c:new Proxy(c,Et)}function $t(c){const a=Q(c)?new Array(c.length):{};for(const e in c)a[e]=Ot(c,e);return a}class qt{constructor(a,e,s){this._object=a,this._key=e,this._defaultValue=s,this.__v_isRef=!0}get value(){const a=this._object[this._key];return a===void 0?this._defaultValue:a}set value(a){this._object[this._key]=a}get dep(){return Ht(i2(this._object),this._key)}}function Ot(c,a,e){const s=c[a];return V2(s)?s:new qt(c,a,e)}class Ut{constructor(a,e,s,r){this._setter=e,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new V0(a,()=>{this._dirty||(this._dirty=!0,A7(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const a=i2(this);return S7(a),(a._dirty||!a._cacheable)&&(a._dirty=!1,a._value=a.effect.run()),a._value}set value(a){this._setter(a)}}function It(c,a,e=!1){let s,r;const i=a2(c);return i?(s=c,r=o1):(s=c.get,r=c.set),new Ut(s,r,i||!r,e)}function A1(c,a,e,s){let r;try{r=s?c(...s):c()}catch(i){W3(i,a,e)}return r}function K2(c,a,e,s){if(a2(c)){const i=A1(c,a,e,s);return i&&f7(i)&&i.catch(o=>{W3(o,a,e)}),i}const r=[];for(let i=0;i<c.length;i++)r.push(K2(c[i],a,e,s));return r}function W3(c,a,e,s=!0){const r=a?a.vnode:null;if(a){let i=a.parent;const o=a.proxy,n=e;for(;i;){const t=i.ec;if(t){for(let f=0;f<t.length;f++)if(t[f](c,o,n)===!1)return}i=i.parent}const l=a.appContext.config.errorHandler;if(l){A1(l,null,10,[c,o,n]);return}}Wt(c,e,r,s)}function Wt(c,a,e,s=!0){console.error(c)}let R4=!1,I6=!1;const T2=[];let r1=0;const l4=[];let m1=null,q1=0;const P7=Promise.resolve();let L0=null;function F7(c){const a=L0||P7;return c?a.then(this?c.bind(this):c):a}function Gt(c){let a=r1+1,e=T2.length;for(;a<e;){const s=a+e>>>1,r=T2[s],i=j4(r);i<c||i===c&&r.pre?a=s+1:e=s}return a}function k0(c){(!T2.length||!T2.includes(c,R4&&c.allowRecurse?r1+1:r1))&&(c.id==null?T2.push(c):T2.splice(Gt(c.id),0,c),_7())}function _7(){!R4&&!I6&&(I6=!0,L0=P7.then(D7))}function Kt(c){const a=T2.indexOf(c);a>r1&&T2.splice(a,1)}function Yt(c){Q(c)?l4.push(...c):(!m1||!m1.includes(c,c.allowRecurse?q1+1:q1))&&l4.push(c),_7()}function r5(c,a,e=R4?r1+1:0){for(;e<T2.length;e++){const s=T2[e];if(s&&s.pre){if(c&&s.id!==c.uid)continue;T2.splice(e,1),e--,s()}}}function B7(c){if(l4.length){const a=[...new Set(l4)];if(l4.length=0,m1){m1.push(...a);return}for(m1=a,m1.sort((e,s)=>j4(e)-j4(s)),q1=0;q1<m1.length;q1++)m1[q1]();m1=null,q1=0}}const j4=c=>c.id==null?1/0:c.id,Xt=(c,a)=>{const e=j4(c)-j4(a);if(e===0){if(c.pre&&!a.pre)return-1;if(a.pre&&!c.pre)return 1}return e};function D7(c){I6=!1,R4=!0,T2.sort(Xt);try{for(r1=0;r1<T2.length;r1++){const a=T2[r1];a&&a.active!==!1&&A1(a,null,14)}}finally{r1=0,T2.length=0,B7(),R4=!1,L0=null,(T2.length||l4.length)&&D7()}}function Qt(c,a,...e){if(c.isUnmounted)return;const s=c.vnode.props||h2;let r=e;const i=a.startsWith("update:"),o=i&&a.slice(7);if(o&&o in s){const f=`${o==="modelValue"?"model":o}Modifiers`,{number:u,trim:d}=s[f]||h2;d&&(r=e.map(v=>C2(v)?v.trim():v)),u&&(r=e.map(ot))}let n,l=s[n=b6(a)]||s[n=b6(t1(a))];!l&&i&&(l=s[n=b6(H4(a))]),l&&K2(l,c,6,r);const t=s[n+"Once"];if(t){if(!c.emitted)c.emitted={};else if(c.emitted[n])return;c.emitted[n]=!0,K2(t,c,6,r)}}function R7(c,a,e=!1){const s=a.emitsCache,r=s.get(c);if(r!==void 0)return r;const i=c.emits;let o={},n=!1;if(!a2(c)){const l=t=>{const f=R7(t,a,!0);f&&(n=!0,b2(o,f))};!e&&a.mixins.length&&a.mixins.forEach(l),c.extends&&l(c.extends),c.mixins&&c.mixins.forEach(l)}return!i&&!n?(z2(c)&&s.set(c,null),null):(Q(i)?i.forEach(l=>o[l]=null):b2(o,i),z2(c)&&s.set(c,o),o)}function G3(c,a){return!c||!j3(a)?!1:(a=a.slice(2).replace(/Once$/,""),l2(c,a[0].toLowerCase()+a.slice(1))||l2(c,H4(a))||l2(c,a))}let j2=null,K3=null;function S3(c){const a=j2;return j2=c,K3=c&&c.type.__scopeId||null,a}function w0(c){K3=c}function x0(){K3=null}function n1(c,a=j2,e){if(!a||c._n)return c;const s=(...r)=>{s._d&&v5(-1);const i=S3(a);let o;try{o=c(...r)}finally{S3(i),s._d&&v5(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function k6(c){const{type:a,vnode:e,proxy:s,withProxy:r,props:i,propsOptions:[o],slots:n,attrs:l,emit:t,render:f,renderCache:u,data:d,setupState:v,ctx:k,inheritAttrs:b}=c;let O,z;const g=S3(c);try{if(e.shapeFlag&4){const y=r||s,P=y;O=s1(f.call(P,y,u,i,v,d,k)),z=l}else{const y=a;O=s1(y.length>1?y(i,{attrs:l,slots:n,emit:t}):y(i,null)),z=a.props?l:Jt(l)}}catch(y){A4.length=0,W3(y,c,1),O=Y(c1)}let N=O;if(z&&b!==!1){const y=Object.keys(z),{shapeFlag:P}=N;y.length&&P&7&&(o&&y.some(v0)&&(z=Zt(z,o)),N=F1(N,z))}return e.dirs&&(N=F1(N),N.dirs=N.dirs?N.dirs.concat(e.dirs):e.dirs),e.transition&&(N.transition=e.transition),O=N,S3(g),O}const Jt=c=>{let a;for(const e in c)(e==="class"||e==="style"||j3(e))&&((a||(a={}))[e]=c[e]);return a},Zt=(c,a)=>{const e={};for(const s in c)(!v0(s)||!(s.slice(9)in a))&&(e[s]=c[s]);return e};function cf(c,a,e){const{props:s,children:r,component:i}=c,{props:o,children:n,patchFlag:l}=a,t=i.emitsOptions;if(a.dirs||a.transition)return!0;if(e&&l>=0){if(l&1024)return!0;if(l&16)return s?i5(s,o,t):!!o;if(l&8){const f=a.dynamicProps;for(let u=0;u<f.length;u++){const d=f[u];if(o[d]!==s[d]&&!G3(t,d))return!0}}}else return(r||n)&&(!n||!n.$stable)?!0:s===o?!1:s?o?i5(s,o,t):!0:!!o;return!1}function i5(c,a,e){const s=Object.keys(a);if(s.length!==Object.keys(c).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(a[i]!==c[i]&&!G3(e,i))return!0}return!1}function af({vnode:c,parent:a},e){for(;a&&a.subTree===c;)(c=a.vnode).el=e,a=a.parent}const j7="components";function M4(c,a){return sf(j7,c,!0,a)||c}const ef=Symbol.for("v-ndc");function sf(c,a,e=!0,s=!1){const r=j2||L2;if(r){const i=r.type;if(c===j7){const n=Jf(i,!1);if(n&&(n===a||n===t1(a)||n===q3(t1(a))))return i}const o=o5(r[c]||i[c],a)||o5(r.appContext[c],a);return!o&&s?i:o}}function o5(c,a){return c&&(c[a]||c[t1(a)]||c[q3(t1(a))])}const rf=c=>c.__isSuspense;function of(c,a){a&&a.pendingBranch?Q(c)?a.effects.push(...c):a.effects.push(c):Yt(c)}const f3={};function S2(c,a,e){return E7(c,a,e)}function E7(c,a,{immediate:e,deep:s,flush:r,onTrack:i,onTrigger:o}=h2){var n;const l=z7()===((n=L2)==null?void 0:n.scope)?L2:null;let t,f=!1,u=!1;if(V2(c)?(t=()=>c.value,f=N3(c)):S1(c)?(t=()=>c,s=!0):Q(c)?(u=!0,f=c.some(y=>S1(y)||N3(y)),t=()=>c.map(y=>{if(V2(y))return y.value;if(S1(y))return W1(y);if(a2(y))return A1(y,l,2)})):a2(c)?a?t=()=>A1(c,l,2):t=()=>{if(!(l&&l.isUnmounted))return d&&d(),K2(c,l,3,[v])}:t=o1,a&&s){const y=t;t=()=>W1(y())}let d,v=y=>{d=g.onStop=()=>{A1(y,l,4),d=g.onStop=void 0}},k;if(U4)if(v=o1,a?e&&K2(a,l,3,[t(),u?[]:void 0,v]):t(),r==="sync"){const y=am();k=y.__watcherHandles||(y.__watcherHandles=[])}else return o1;let b=u?new Array(c.length).fill(f3):f3;const O=()=>{if(g.active)if(a){const y=g.run();(s||f||(u?y.some((P,e2)=>J1(P,b[e2])):J1(y,b)))&&(d&&d(),K2(a,l,3,[y,b===f3?void 0:u&&b[0]===f3?[]:b,v]),b=y)}else g.run()};O.allowRecurse=!!a;let z;r==="sync"?z=O:r==="post"?z=()=>D2(O,l&&l.suspense):(O.pre=!0,l&&(O.id=l.uid),z=()=>k0(O));const g=new V0(t,z);a?e?O():b=g.run():r==="post"?D2(g.run.bind(g),l&&l.suspense):g.run();const N=()=>{g.stop(),l&&l.scope&&z0(l.scope.effects,g)};return k&&k.push(N),N}function nf(c,a,e){const s=this.proxy,r=C2(c)?c.includes(".")?$7(s,c):()=>s[c]:c.bind(s,s);let i;a2(a)?i=a:(i=a.handler,e=a);const o=L2;u4(this);const n=E7(r,i.bind(s),e);return o?u4(o):Q1(),n}function $7(c,a){const e=a.split(".");return()=>{let s=c;for(let r=0;r<e.length&&s;r++)s=s[e[r]];return s}}function W1(c,a){if(!z2(c)||c.__v_skip||(a=a||new Set,a.has(c)))return c;if(a.add(c),V2(c))W1(c.value,a);else if(Q(c))for(let e=0;e<c.length;e++)W1(c[e],a);else if(t7(c)||n4(c))c.forEach(e=>{W1(e,a)});else if(u7(c))for(const e in c)W1(c[e],a);return c}function W6(c,a){const e=j2;if(e===null)return c;const s=c6(e)||e.proxy,r=c.dirs||(c.dirs=[]);for(let i=0;i<a.length;i++){let[o,n,l,t=h2]=a[i];o&&(a2(o)&&(o={mounted:o,updated:o}),o.deep&&W1(n),r.push({dir:o,instance:s,value:n,oldValue:void 0,arg:l,modifiers:t}))}return c}function j1(c,a,e,s){const r=c.dirs,i=a&&a.dirs;for(let o=0;o<r.length;o++){const n=r[o];i&&(n.oldValue=i[o].value);let l=n.dir[s];l&&(g4(),K2(l,e,8,[c.el,n,c,a]),V4())}}const k1=Symbol("_leaveCb"),m3=Symbol("_enterCb");function q7(){const c={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Q3(()=>{c.isMounted=!0}),G7(()=>{c.isUnmounting=!0}),c}const G2=[Function,Array],O7={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:G2,onEnter:G2,onAfterEnter:G2,onEnterCancelled:G2,onBeforeLeave:G2,onLeave:G2,onAfterLeave:G2,onLeaveCancelled:G2,onBeforeAppear:G2,onAppear:G2,onAfterAppear:G2,onAppearCancelled:G2},lf={name:"BaseTransition",props:O7,setup(c,{slots:a}){const e=rc(),s=q7();let r;return()=>{const i=a.default&&N0(a.default(),!0);if(!i||!i.length)return;let o=i[0];if(i.length>1){for(const b of i)if(b.type!==c1){o=b;break}}const n=i2(c),{mode:l}=n;if(s.isLeaving)return w6(o);const t=n5(o);if(!t)return w6(o);const f=E4(t,n,s,e);$4(t,f);const u=e.subTree,d=u&&n5(u);let v=!1;const{getTransitionKey:k}=t.type;if(k){const b=k();r===void 0?r=b:b!==r&&(r=b,v=!0)}if(d&&d.type!==c1&&(!O1(t,d)||v)){const b=E4(d,n,s,e);if($4(d,b),l==="out-in")return s.isLeaving=!0,b.afterLeave=()=>{s.isLeaving=!1,e.update.active!==!1&&e.update()},w6(o);l==="in-out"&&t.type!==c1&&(b.delayLeave=(O,z,g)=>{const N=U7(s,d);N[String(d.key)]=d,O[k1]=()=>{z(),O[k1]=void 0,delete f.delayedLeave},f.delayedLeave=g})}return o}}},tf=lf;function U7(c,a){const{leavingVNodes:e}=c;let s=e.get(a.type);return s||(s=Object.create(null),e.set(a.type,s)),s}function E4(c,a,e,s){const{appear:r,mode:i,persisted:o=!1,onBeforeEnter:n,onEnter:l,onAfterEnter:t,onEnterCancelled:f,onBeforeLeave:u,onLeave:d,onAfterLeave:v,onLeaveCancelled:k,onBeforeAppear:b,onAppear:O,onAfterAppear:z,onAppearCancelled:g}=a,N=String(c.key),y=U7(e,c),P=(F,D)=>{F&&K2(F,s,9,D)},e2=(F,D)=>{const U=D[1];P(F,D),Q(F)?F.every(I=>I.length<=1)&&U():F.length<=1&&U()},o2={mode:i,persisted:o,beforeEnter(F){let D=n;if(!e.isMounted)if(r)D=b||n;else return;F[k1]&&F[k1](!0);const U=y[N];U&&O1(c,U)&&U.el[k1]&&U.el[k1](),P(D,[F])},enter(F){let D=l,U=t,I=f;if(!e.isMounted)if(r)D=O||l,U=z||t,I=g||f;else return;let R=!1;const f2=F[m3]=E=>{R||(R=!0,E?P(I,[F]):P(U,[F]),o2.delayedLeave&&o2.delayedLeave(),F[m3]=void 0)};D?e2(D,[F,f2]):f2()},leave(F,D){const U=String(c.key);if(F[m3]&&F[m3](!0),e.isUnmounting)return D();P(u,[F]);let I=!1;const R=F[k1]=f2=>{I||(I=!0,D(),f2?P(k,[F]):P(v,[F]),F[k1]=void 0,y[U]===c&&delete y[U])};y[U]=c,d?e2(d,[F,R]):R()},clone(F){return E4(F,a,e,s)}};return o2}function w6(c){if(Y3(c))return c=F1(c),c.children=null,c}function n5(c){return Y3(c)?c.children?c.children[0]:void 0:c}function $4(c,a){c.shapeFlag&6&&c.component?$4(c.component.subTree,a):c.shapeFlag&128?(c.ssContent.transition=a.clone(c.ssContent),c.ssFallback.transition=a.clone(c.ssFallback)):c.transition=a}function N0(c,a=!1,e){let s=[],r=0;for(let i=0;i<c.length;i++){let o=c[i];const n=e==null?o.key:String(e)+String(o.key!=null?o.key:i);o.type===y2?(o.patchFlag&128&&r++,s=s.concat(N0(o.children,a,n))):(a||o.type!==c1)&&s.push(n!=null?F1(o,{key:n}):o)}if(r>1)for(let i=0;i<s.length;i++)s[i].patchFlag=-2;return s}/*! #__NO_SIDE_EFFECTS__ */function ff(c,a){return a2(c)?b2({name:c.name},a,{setup:c}):c}const y3=c=>!!c.type.__asyncLoader,Y3=c=>c.type.__isKeepAlive;function mf(c,a){I7(c,"a",a)}function uf(c,a){I7(c,"da",a)}function I7(c,a,e=L2){const s=c.__wdc||(c.__wdc=()=>{let r=e;for(;r;){if(r.isDeactivated)return;r=r.parent}return c()});if(X3(a,s,e),e){let r=e.parent;for(;r&&r.parent;)Y3(r.parent.vnode)&&hf(s,a,e,r),r=r.parent}}function hf(c,a,e,s){const r=X3(a,c,s,!0);S0(()=>{z0(s[a],r)},e)}function X3(c,a,e=L2,s=!1){if(e){const r=e[c]||(e[c]=[]),i=a.__weh||(a.__weh=(...o)=>{if(e.isUnmounted)return;g4(),u4(e);const n=K2(a,e,c,o);return Q1(),V4(),n});return s?r.unshift(i):r.push(i),i}}const H1=c=>(a,e=L2)=>(!U4||c==="sp")&&X3(c,(...s)=>a(...s),e),df=H1("bm"),Q3=H1("m"),pf=H1("bu"),W7=H1("u"),G7=H1("bum"),S0=H1("um"),vf=H1("sp"),zf=H1("rtg"),Hf=H1("rtc");function gf(c,a=L2){X3("ec",c,a)}function d1(c,a,e,s){let r;const i=e&&e[s];if(Q(c)||C2(c)){r=new Array(c.length);for(let o=0,n=c.length;o<n;o++)r[o]=a(c[o],o,void 0,i&&i[o])}else if(typeof c=="number"){r=new Array(c);for(let o=0;o<c;o++)r[o]=a(o+1,o,void 0,i&&i[o])}else if(z2(c))if(c[Symbol.iterator])r=Array.from(c,(o,n)=>a(o,n,void 0,i&&i[n]));else{const o=Object.keys(c);r=new Array(o.length);for(let n=0,l=o.length;n<l;n++){const t=o[n];r[n]=a(c[t],t,n,i&&i[n])}}else r=[];return e&&(e[s]=r),r}const G6=c=>c?ic(c)?c6(c)||c.proxy:G6(c.parent):null,N4=b2(Object.create(null),{$:c=>c,$el:c=>c.vnode.el,$data:c=>c.data,$props:c=>c.props,$attrs:c=>c.attrs,$slots:c=>c.slots,$refs:c=>c.refs,$parent:c=>G6(c.parent),$root:c=>G6(c.root),$emit:c=>c.emit,$options:c=>A0(c),$forceUpdate:c=>c.f||(c.f=()=>k0(c.update)),$nextTick:c=>c.n||(c.n=F7.bind(c.proxy)),$watch:c=>nf.bind(c)}),x6=(c,a)=>c!==h2&&!c.__isScriptSetup&&l2(c,a),Vf={get({_:c},a){const{ctx:e,setupState:s,data:r,props:i,accessCache:o,type:n,appContext:l}=c;let t;if(a[0]!=="$"){const v=o[a];if(v!==void 0)switch(v){case 1:return s[a];case 2:return r[a];case 4:return e[a];case 3:return i[a]}else{if(x6(s,a))return o[a]=1,s[a];if(r!==h2&&l2(r,a))return o[a]=2,r[a];if((t=c.propsOptions[0])&&l2(t,a))return o[a]=3,i[a];if(e!==h2&&l2(e,a))return o[a]=4,e[a];K6&&(o[a]=0)}}const f=N4[a];let u,d;if(f)return a==="$attrs"&&E2(c,"get",a),f(c);if((u=n.__cssModules)&&(u=u[a]))return u;if(e!==h2&&l2(e,a))return o[a]=4,e[a];if(d=l.config.globalProperties,l2(d,a))return d[a]},set({_:c},a,e){const{data:s,setupState:r,ctx:i}=c;return x6(r,a)?(r[a]=e,!0):s!==h2&&l2(s,a)?(s[a]=e,!0):l2(c.props,a)||a[0]==="$"&&a.slice(1)in c?!1:(i[a]=e,!0)},has({_:{data:c,setupState:a,accessCache:e,ctx:s,appContext:r,propsOptions:i}},o){let n;return!!e[o]||c!==h2&&l2(c,o)||x6(a,o)||(n=i[0])&&l2(n,o)||l2(s,o)||l2(N4,o)||l2(r.config.globalProperties,o)},defineProperty(c,a,e){return e.get!=null?c._.accessCache[a]=0:l2(e,"value")&&this.set(c,a,e.value,null),Reflect.defineProperty(c,a,e)}};function l5(c){return Q(c)?c.reduce((a,e)=>(a[e]=null,a),{}):c}let K6=!0;function Mf(c){const a=A0(c),e=c.proxy,s=c.ctx;K6=!1,a.beforeCreate&&t5(a.beforeCreate,c,"bc");const{data:r,computed:i,methods:o,watch:n,provide:l,inject:t,created:f,beforeMount:u,mounted:d,beforeUpdate:v,updated:k,activated:b,deactivated:O,beforeDestroy:z,beforeUnmount:g,destroyed:N,unmounted:y,render:P,renderTracked:e2,renderTriggered:o2,errorCaptured:F,serverPrefetch:D,expose:U,inheritAttrs:I,components:R,directives:f2,filters:E}=a;if(t&&yf(t,s,null),o)for(const T in o){const L=o[T];a2(L)&&(s[T]=L.bind(e))}if(r){const T=r.call(e,e);z2(T)&&(c.data=U3(T))}if(K6=!0,i)for(const T in i){const L=i[T],X=a2(L)?L.bind(e,e):a2(L.get)?L.get.bind(e,e):o1,J=!a2(L)&&a2(L.set)?L.set.bind(e):o1,n2=x1({get:X,set:J});Object.defineProperty(s,T,{enumerable:!0,configurable:!0,get:()=>n2.value,set:t2=>n2.value=t2})}if(n)for(const T in n)K7(n[T],s,e,T);if(l){const T=a2(l)?l.call(e):l;Reflect.ownKeys(T).forEach(L=>{xf(L,T[L])})}f&&t5(f,c,"c");function H(T,L){Q(L)?L.forEach(X=>T(X.bind(e))):L&&T(L.bind(e))}if(H(df,u),H(Q3,d),H(pf,v),H(W7,k),H(mf,b),H(uf,O),H(gf,F),H(Hf,e2),H(zf,o2),H(G7,g),H(S0,y),H(vf,D),Q(U))if(U.length){const T=c.exposed||(c.exposed={});U.forEach(L=>{Object.defineProperty(T,L,{get:()=>e[L],set:X=>e[L]=X})})}else c.exposed||(c.exposed={});P&&c.render===o1&&(c.render=P),I!=null&&(c.inheritAttrs=I),R&&(c.components=R),f2&&(c.directives=f2)}function yf(c,a,e=o1){Q(c)&&(c=Y6(c));for(const s in c){const r=c[s];let i;z2(r)?"default"in r?i=S4(r.from||s,r.default,!0):i=S4(r.from||s):i=S4(r),V2(i)?Object.defineProperty(a,s,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):a[s]=i}}function t5(c,a,e){K2(Q(c)?c.map(s=>s.bind(a.proxy)):c.bind(a.proxy),a,e)}function K7(c,a,e,s){const r=s.includes(".")?$7(e,s):()=>e[s];if(C2(c)){const i=a[c];a2(i)&&S2(r,i)}else if(a2(c))S2(r,c.bind(e));else if(z2(c))if(Q(c))c.forEach(i=>K7(i,a,e,s));else{const i=a2(c.handler)?c.handler.bind(e):a[c.handler];a2(i)&&S2(r,i,c)}}function A0(c){const a=c.type,{mixins:e,extends:s}=a,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=c.appContext,n=i.get(a);let l;return n?l=n:!r.length&&!e&&!s?l=a:(l={},r.length&&r.forEach(t=>A3(l,t,o,!0)),A3(l,a,o)),z2(a)&&i.set(a,l),l}function A3(c,a,e,s=!1){const{mixins:r,extends:i}=a;i&&A3(c,i,e,!0),r&&r.forEach(o=>A3(c,o,e,!0));for(const o in a)if(!(s&&o==="expose")){const n=bf[o]||e&&e[o];c[o]=n?n(c[o],a[o]):a[o]}return c}const bf={data:f5,props:m5,emits:m5,methods:w4,computed:w4,beforeCreate:P2,created:P2,beforeMount:P2,mounted:P2,beforeUpdate:P2,updated:P2,beforeDestroy:P2,beforeUnmount:P2,destroyed:P2,unmounted:P2,activated:P2,deactivated:P2,errorCaptured:P2,serverPrefetch:P2,components:w4,directives:w4,watch:Lf,provide:f5,inject:Cf};function f5(c,a){return a?c?function(){return b2(a2(c)?c.call(this,this):c,a2(a)?a.call(this,this):a)}:a:c}function Cf(c,a){return w4(Y6(c),Y6(a))}function Y6(c){if(Q(c)){const a={};for(let e=0;e<c.length;e++)a[c[e]]=c[e];return a}return c}function P2(c,a){return c?[...new Set([].concat(c,a))]:a}function w4(c,a){return c?b2(Object.create(null),c,a):a}function m5(c,a){return c?Q(c)&&Q(a)?[...new Set([...c,...a])]:b2(Object.create(null),l5(c),l5(a??{})):a}function Lf(c,a){if(!c)return a;if(!a)return c;const e=b2(Object.create(null),c);for(const s in a)e[s]=P2(c[s],a[s]);return e}function Y7(){return{app:null,config:{isNativeTag:at,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let kf=0;function wf(c,a){return function(s,r=null){a2(s)||(s=b2({},s)),r!=null&&!z2(r)&&(r=null);const i=Y7(),o=new WeakSet;let n=!1;const l=i.app={_uid:kf++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:em,get config(){return i.config},set config(t){},use(t,...f){return o.has(t)||(t&&a2(t.install)?(o.add(t),t.install(l,...f)):a2(t)&&(o.add(t),t(l,...f))),l},mixin(t){return i.mixins.includes(t)||i.mixins.push(t),l},component(t,f){return f?(i.components[t]=f,l):i.components[t]},directive(t,f){return f?(i.directives[t]=f,l):i.directives[t]},mount(t,f,u){if(!n){const d=Y(s,r);return d.appContext=i,f&&a?a(d,t):c(d,t,u),n=!0,l._container=t,t.__vue_app__=l,c6(d.component)||d.component.proxy}},unmount(){n&&(c(null,l._container),delete l._container.__vue_app__)},provide(t,f){return i.provides[t]=f,l},runWithContext(t){q4=l;try{return t()}finally{q4=null}}};return l}}let q4=null;function xf(c,a){if(L2){let e=L2.provides;const s=L2.parent&&L2.parent.provides;s===e&&(e=L2.provides=Object.create(s)),e[c]=a}}function S4(c,a,e=!1){const s=L2||j2;if(s||q4){const r=s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:q4._context.provides;if(r&&c in r)return r[c];if(arguments.length>1)return e&&a2(a)?a.call(s&&s.proxy):a}}function Nf(){return!!(L2||j2||q4)}function Sf(c,a,e,s=!1){const r={},i={};w3(i,Z3,1),c.propsDefaults=Object.create(null),X7(c,a,r,i);for(const o in c.propsOptions[0])o in r||(r[o]=void 0);e?c.props=s?r:Dt(r):c.type.props?c.props=r:c.props=i,c.attrs=i}function Af(c,a,e,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=c,n=i2(r),[l]=c.propsOptions;let t=!1;if((s||o>0)&&!(o&16)){if(o&8){const f=c.vnode.dynamicProps;for(let u=0;u<f.length;u++){let d=f[u];if(G3(c.emitsOptions,d))continue;const v=a[d];if(l)if(l2(i,d))v!==i[d]&&(i[d]=v,t=!0);else{const k=t1(d);r[k]=X6(l,n,k,v,c,!1)}else v!==i[d]&&(i[d]=v,t=!0)}}}else{X7(c,a,r,i)&&(t=!0);let f;for(const u in n)(!a||!l2(a,u)&&((f=H4(u))===u||!l2(a,f)))&&(l?e&&(e[u]!==void 0||e[f]!==void 0)&&(r[u]=X6(l,n,u,void 0,c,!0)):delete r[u]);if(i!==n)for(const u in i)(!a||!l2(a,u))&&(delete i[u],t=!0)}t&&h1(c,"set","$attrs")}function X7(c,a,e,s){const[r,i]=c.propsOptions;let o=!1,n;if(a)for(let l in a){if(M3(l))continue;const t=a[l];let f;r&&l2(r,f=t1(l))?!i||!i.includes(f)?e[f]=t:(n||(n={}))[f]=t:G3(c.emitsOptions,l)||(!(l in s)||t!==s[l])&&(s[l]=t,o=!0)}if(i){const l=i2(e),t=n||h2;for(let f=0;f<i.length;f++){const u=i[f];e[u]=X6(r,l,u,t[u],c,!l2(t,u))}}return o}function X6(c,a,e,s,r,i){const o=c[e];if(o!=null){const n=l2(o,"default");if(n&&s===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&a2(l)){const{propsDefaults:t}=r;e in t?s=t[e]:(u4(r),s=t[e]=l.call(null,a),Q1())}else s=l}o[0]&&(i&&!n?s=!1:o[1]&&(s===""||s===H4(e))&&(s=!0))}return s}function Q7(c,a,e=!1){const s=a.propsCache,r=s.get(c);if(r)return r;const i=c.props,o={},n=[];let l=!1;if(!a2(c)){const f=u=>{l=!0;const[d,v]=Q7(u,a,!0);b2(o,d),v&&n.push(...v)};!e&&a.mixins.length&&a.mixins.forEach(f),c.extends&&f(c.extends),c.mixins&&c.mixins.forEach(f)}if(!i&&!l)return z2(c)&&s.set(c,o4),o4;if(Q(i))for(let f=0;f<i.length;f++){const u=t1(i[f]);u5(u)&&(o[u]=h2)}else if(i)for(const f in i){const u=t1(f);if(u5(u)){const d=i[f],v=o[u]=Q(d)||a2(d)?{type:d}:b2({},d);if(v){const k=p5(Boolean,v.type),b=p5(String,v.type);v[0]=k>-1,v[1]=b<0||k<b,(k>-1||l2(v,"default"))&&n.push(u)}}}const t=[o,n];return z2(c)&&s.set(c,t),t}function u5(c){return c[0]!=="$"}function h5(c){const a=c&&c.toString().match(/^\s*(function|class) (\w+)/);return a?a[2]:c===null?"null":""}function d5(c,a){return h5(c)===h5(a)}function p5(c,a){return Q(a)?a.findIndex(e=>d5(e,c)):a2(a)&&d5(a,c)?0:-1}const J7=c=>c[0]==="_"||c==="$stable",T0=c=>Q(c)?c.map(s1):[s1(c)],Tf=(c,a,e)=>{if(a._n)return a;const s=n1((...r)=>T0(a(...r)),e);return s._c=!1,s},Z7=(c,a,e)=>{const s=c._ctx;for(const r in c){if(J7(r))continue;const i=c[r];if(a2(i))a[r]=Tf(r,i,s);else if(i!=null){const o=T0(i);a[r]=()=>o}}},cc=(c,a)=>{const e=T0(a);c.slots.default=()=>e},Pf=(c,a)=>{if(c.vnode.shapeFlag&32){const e=a._;e?(c.slots=i2(a),w3(a,"_",e)):Z7(a,c.slots={})}else c.slots={},a&&cc(c,a);w3(c.slots,Z3,1)},Ff=(c,a,e)=>{const{vnode:s,slots:r}=c;let i=!0,o=h2;if(s.shapeFlag&32){const n=a._;n?e&&n===1?i=!1:(b2(r,a),!e&&n===1&&delete r._):(i=!a.$stable,Z7(a,r)),o=a}else a&&(cc(c,a),o={default:1});if(i)for(const n in r)!J7(n)&&o[n]==null&&delete r[n]};function Q6(c,a,e,s,r=!1){if(Q(c)){c.forEach((d,v)=>Q6(d,a&&(Q(a)?a[v]:a),e,s,r));return}if(y3(s)&&!r)return;const i=s.shapeFlag&4?c6(s.component)||s.component.proxy:s.el,o=r?null:i,{i:n,r:l}=c,t=a&&a.r,f=n.refs===h2?n.refs={}:n.refs,u=n.setupState;if(t!=null&&t!==l&&(C2(t)?(f[t]=null,l2(u,t)&&(u[t]=null)):V2(t)&&(t.value=null)),a2(l))A1(l,n,12,[o,f]);else{const d=C2(l),v=V2(l);if(d||v){const k=()=>{if(c.f){const b=d?l2(u,l)?u[l]:f[l]:l.value;r?Q(b)&&z0(b,i):Q(b)?b.includes(i)||b.push(i):d?(f[l]=[i],l2(u,l)&&(u[l]=f[l])):(l.value=[i],c.k&&(f[c.k]=l.value))}else d?(f[l]=o,l2(u,l)&&(u[l]=o)):v&&(l.value=o,c.k&&(f[c.k]=o))};o?(k.id=-1,D2(k,e)):k()}}}const D2=of;function _f(c){return Bf(c)}function Bf(c,a){const e=$6();e.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:n,createComment:l,setText:t,setElementText:f,parentNode:u,nextSibling:d,setScopeId:v=o1,insertStaticContent:k}=c,b=(m,h,p,V=null,M=null,x=null,_=!1,w=null,S=!!h.dynamicChildren)=>{if(m===h)return;m&&!O1(m,h)&&(V=I2(m),t2(m,M,x,!0),m=null),h.patchFlag===-2&&(S=!1,h.dynamicChildren=null);const{type:C,ref:W,shapeFlag:$}=h;switch(C){case J3:O(m,h,p,V);break;case c1:z(m,h,p,V);break;case b3:m==null&&g(h,p,V,_);break;case y2:R(m,h,p,V,M,x,_,w,S);break;default:$&1?P(m,h,p,V,M,x,_,w,S):$&6?f2(m,h,p,V,M,x,_,w,S):($&64||$&128)&&C.process(m,h,p,V,M,x,_,w,S,_2)}W!=null&&M&&Q6(W,m&&m.ref,x,h||m,!h)},O=(m,h,p,V)=>{if(m==null)s(h.el=n(h.children),p,V);else{const M=h.el=m.el;h.children!==m.children&&t(M,h.children)}},z=(m,h,p,V)=>{m==null?s(h.el=l(h.children||""),p,V):h.el=m.el},g=(m,h,p,V)=>{[m.el,m.anchor]=k(m.children,h,p,V,m.el,m.anchor)},N=({el:m,anchor:h},p,V)=>{let M;for(;m&&m!==h;)M=d(m),s(m,p,V),m=M;s(h,p,V)},y=({el:m,anchor:h})=>{let p;for(;m&&m!==h;)p=d(m),r(m),m=p;r(h)},P=(m,h,p,V,M,x,_,w,S)=>{_=_||h.type==="svg",m==null?e2(h,p,V,M,x,_,w,S):D(m,h,M,x,_,w,S)},e2=(m,h,p,V,M,x,_,w)=>{let S,C;const{type:W,props:$,shapeFlag:G,transition:c2,dirs:r2}=m;if(S=m.el=o(m.type,x,$&&$.is,$),G&8?f(S,m.children):G&16&&F(m.children,S,null,V,M,x&&W!=="foreignObject",_,w),r2&&j1(m,null,V,"created"),o2(S,m,m.scopeId,_,V),$){for(const m2 in $)m2!=="value"&&!M3(m2)&&i(S,m2,null,$[m2],x,m.children,V,M,A2);"value"in $&&i(S,"value",null,$.value),(C=$.onVnodeBeforeMount)&&e1(C,V,m)}r2&&j1(m,null,V,"beforeMount");const u2=Df(M,c2);u2&&c2.beforeEnter(S),s(S,h,p),((C=$&&$.onVnodeMounted)||u2||r2)&&D2(()=>{C&&e1(C,V,m),u2&&c2.enter(S),r2&&j1(m,null,V,"mounted")},M)},o2=(m,h,p,V,M)=>{if(p&&v(m,p),V)for(let x=0;x<V.length;x++)v(m,V[x]);if(M){let x=M.subTree;if(h===x){const _=M.vnode;o2(m,_,_.scopeId,_.slotScopeIds,M.parent)}}},F=(m,h,p,V,M,x,_,w,S=0)=>{for(let C=S;C<m.length;C++){const W=m[C]=w?w1(m[C]):s1(m[C]);b(null,W,h,p,V,M,x,_,w)}},D=(m,h,p,V,M,x,_)=>{const w=h.el=m.el;let{patchFlag:S,dynamicChildren:C,dirs:W}=h;S|=m.patchFlag&16;const $=m.props||h2,G=h.props||h2;let c2;p&&E1(p,!1),(c2=G.onVnodeBeforeUpdate)&&e1(c2,p,h,m),W&&j1(h,m,p,"beforeUpdate"),p&&E1(p,!0);const r2=M&&h.type!=="foreignObject";if(C?U(m.dynamicChildren,C,w,p,V,r2,x):_||L(m,h,w,null,p,V,r2,x,!1),S>0){if(S&16)I(w,h,$,G,p,V,M);else if(S&2&&$.class!==G.class&&i(w,"class",null,G.class,M),S&4&&i(w,"style",$.style,G.style,M),S&8){const u2=h.dynamicProps;for(let m2=0;m2<u2.length;m2++){const M2=u2[m2],X2=$[M2],a4=G[M2];(a4!==X2||M2==="value")&&i(w,M2,X2,a4,M,m.children,p,V,A2)}}S&1&&m.children!==h.children&&f(w,h.children)}else!_&&C==null&&I(w,h,$,G,p,V,M);((c2=G.onVnodeUpdated)||W)&&D2(()=>{c2&&e1(c2,p,h,m),W&&j1(h,m,p,"updated")},V)},U=(m,h,p,V,M,x,_)=>{for(let w=0;w<h.length;w++){const S=m[w],C=h[w],W=S.el&&(S.type===y2||!O1(S,C)||S.shapeFlag&70)?u(S.el):p;b(S,C,W,null,V,M,x,_,!0)}},I=(m,h,p,V,M,x,_)=>{if(p!==V){if(p!==h2)for(const w in p)!M3(w)&&!(w in V)&&i(m,w,p[w],null,_,h.children,M,x,A2);for(const w in V){if(M3(w))continue;const S=V[w],C=p[w];S!==C&&w!=="value"&&i(m,w,C,S,_,h.children,M,x,A2)}"value"in V&&i(m,"value",p.value,V.value)}},R=(m,h,p,V,M,x,_,w,S)=>{const C=h.el=m?m.el:n(""),W=h.anchor=m?m.anchor:n("");let{patchFlag:$,dynamicChildren:G,slotScopeIds:c2}=h;c2&&(w=w?w.concat(c2):c2),m==null?(s(C,p,V),s(W,p,V),F(h.children,p,W,M,x,_,w,S)):$>0&&$&64&&G&&m.dynamicChildren?(U(m.dynamicChildren,G,p,M,x,_,w),(h.key!=null||M&&h===M.subTree)&&ac(m,h,!0)):L(m,h,p,W,M,x,_,w,S)},f2=(m,h,p,V,M,x,_,w,S)=>{h.slotScopeIds=w,m==null?h.shapeFlag&512?M.ctx.activate(h,p,V,_,S):E(h,p,V,M,x,_,S):A(m,h,S)},E=(m,h,p,V,M,x,_)=>{const w=m.component=Gf(m,V,M);if(Y3(m)&&(w.ctx.renderer=_2),Kf(w),w.asyncDep){if(M&&M.registerDep(w,H),!m.el){const S=w.subTree=Y(c1);z(null,S,h,p)}return}H(w,m,h,p,M,x,_)},A=(m,h,p)=>{const V=h.component=m.component;if(cf(m,h,p))if(V.asyncDep&&!V.asyncResolved){T(V,h,p);return}else V.next=h,Kt(V.update),V.update();else h.el=m.el,V.vnode=h},H=(m,h,p,V,M,x,_)=>{const w=()=>{if(m.isMounted){let{next:W,bu:$,u:G,parent:c2,vnode:r2}=m,u2=W,m2;E1(m,!1),W?(W.el=r2.el,T(m,W,_)):W=r2,$&&C6($),(m2=W.props&&W.props.onVnodeBeforeUpdate)&&e1(m2,c2,W,r2),E1(m,!0);const M2=k6(m),X2=m.subTree;m.subTree=M2,b(X2,M2,u(X2.el),I2(X2),m,M,x),W.el=M2.el,u2===null&&af(m,M2.el),G&&D2(G,M),(m2=W.props&&W.props.onVnodeUpdated)&&D2(()=>e1(m2,c2,W,r2),M)}else{let W;const{el:$,props:G}=h,{bm:c2,m:r2,parent:u2}=m,m2=y3(h);if(E1(m,!1),c2&&C6(c2),!m2&&(W=G&&G.onVnodeBeforeMount)&&e1(W,u2,h),E1(m,!0),$&&W2){const M2=()=>{m.subTree=k6(m),W2($,m.subTree,m,M,null)};m2?h.type.__asyncLoader().then(()=>!m.isUnmounted&&M2()):M2()}else{const M2=m.subTree=k6(m);b(null,M2,p,V,m,M,x),h.el=M2.el}if(r2&&D2(r2,M),!m2&&(W=G&&G.onVnodeMounted)){const M2=h;D2(()=>e1(W,u2,M2),M)}(h.shapeFlag&256||u2&&y3(u2.vnode)&&u2.vnode.shapeFlag&256)&&m.a&&D2(m.a,M),m.isMounted=!0,h=p=V=null}},S=m.effect=new V0(w,()=>k0(C),m.scope),C=m.update=()=>S.run();C.id=m.uid,E1(m,!0),C()},T=(m,h,p)=>{h.component=m;const V=m.vnode.props;m.vnode=h,m.next=null,Af(m,h.props,V,p),Ff(m,h.children,p),g4(),r5(m),V4()},L=(m,h,p,V,M,x,_,w,S=!1)=>{const C=m&&m.children,W=m?m.shapeFlag:0,$=h.children,{patchFlag:G,shapeFlag:c2}=h;if(G>0){if(G&128){J(C,$,p,V,M,x,_,w,S);return}else if(G&256){X(C,$,p,V,M,x,_,w,S);return}}c2&8?(W&16&&A2(C,M,x),$!==C&&f(p,$)):W&16?c2&16?J(C,$,p,V,M,x,_,w,S):A2(C,M,x,!0):(W&8&&f(p,""),c2&16&&F($,p,V,M,x,_,w,S))},X=(m,h,p,V,M,x,_,w,S)=>{m=m||o4,h=h||o4;const C=m.length,W=h.length,$=Math.min(C,W);let G;for(G=0;G<$;G++){const c2=h[G]=S?w1(h[G]):s1(h[G]);b(m[G],c2,p,null,M,x,_,w,S)}C>W?A2(m,M,x,!0,!1,$):F(h,p,V,M,x,_,w,S,$)},J=(m,h,p,V,M,x,_,w,S)=>{let C=0;const W=h.length;let $=m.length-1,G=W-1;for(;C<=$&&C<=G;){const c2=m[C],r2=h[C]=S?w1(h[C]):s1(h[C]);if(O1(c2,r2))b(c2,r2,p,null,M,x,_,w,S);else break;C++}for(;C<=$&&C<=G;){const c2=m[$],r2=h[G]=S?w1(h[G]):s1(h[G]);if(O1(c2,r2))b(c2,r2,p,null,M,x,_,w,S);else break;$--,G--}if(C>$){if(C<=G){const c2=G+1,r2=c2<W?h[c2].el:V;for(;C<=G;)b(null,h[C]=S?w1(h[C]):s1(h[C]),p,r2,M,x,_,w,S),C++}}else if(C>G)for(;C<=$;)t2(m[C],M,x,!0),C++;else{const c2=C,r2=C,u2=new Map;for(C=r2;C<=G;C++){const q2=h[C]=S?w1(h[C]):s1(h[C]);q2.key!=null&&u2.set(q2.key,C)}let m2,M2=0;const X2=G-r2+1;let a4=!1,G8=0;const b4=new Array(X2);for(C=0;C<X2;C++)b4[C]=0;for(C=c2;C<=$;C++){const q2=m[C];if(M2>=X2){t2(q2,M,x,!0);continue}let a1;if(q2.key!=null)a1=u2.get(q2.key);else for(m2=r2;m2<=G;m2++)if(b4[m2-r2]===0&&O1(q2,h[m2])){a1=m2;break}a1===void 0?t2(q2,M,x,!0):(b4[a1-r2]=C+1,a1>=G8?G8=a1:a4=!0,b(q2,h[a1],p,null,M,x,_,w,S),M2++)}const K8=a4?Rf(b4):o4;for(m2=K8.length-1,C=X2-1;C>=0;C--){const q2=r2+C,a1=h[q2],Y8=q2+1<W?h[q2+1].el:V;b4[C]===0?b(null,a1,p,Y8,M,x,_,w,S):a4&&(m2<0||C!==K8[m2]?n2(a1,p,Y8,2):m2--)}}},n2=(m,h,p,V,M=null)=>{const{el:x,type:_,transition:w,children:S,shapeFlag:C}=m;if(C&6){n2(m.component.subTree,h,p,V);return}if(C&128){m.suspense.move(h,p,V);return}if(C&64){_.move(m,h,p,_2);return}if(_===y2){s(x,h,p);for(let $=0;$<S.length;$++)n2(S[$],h,p,V);s(m.anchor,h,p);return}if(_===b3){N(m,h,p);return}if(V!==2&&C&1&&w)if(V===0)w.beforeEnter(x),s(x,h,p),D2(()=>w.enter(x),M);else{const{leave:$,delayLeave:G,afterLeave:c2}=w,r2=()=>s(x,h,p),u2=()=>{$(x,()=>{r2(),c2&&c2()})};G?G(x,r2,u2):u2()}else s(x,h,p)},t2=(m,h,p,V=!1,M=!1)=>{const{type:x,props:_,ref:w,children:S,dynamicChildren:C,shapeFlag:W,patchFlag:$,dirs:G}=m;if(w!=null&&Q6(w,null,p,m,!0),W&256){h.ctx.deactivate(m);return}const c2=W&1&&G,r2=!y3(m);let u2;if(r2&&(u2=_&&_.onVnodeBeforeUnmount)&&e1(u2,h,m),W&6)F2(m.component,p,V);else{if(W&128){m.suspense.unmount(p,V);return}c2&&j1(m,null,h,"beforeUnmount"),W&64?m.type.remove(m,h,p,M,_2,V):C&&(x!==y2||$>0&&$&64)?A2(C,h,p,!1,!0):(x===y2&&$&384||!M&&W&16)&&A2(S,h,p),V&&g2(m)}(r2&&(u2=_&&_.onVnodeUnmounted)||c2)&&D2(()=>{u2&&e1(u2,h,m),c2&&j1(m,null,h,"unmounted")},p)},g2=m=>{const{type:h,el:p,anchor:V,transition:M}=m;if(h===y2){x2(p,V);return}if(h===b3){y(m);return}const x=()=>{r(p),M&&!M.persisted&&M.afterLeave&&M.afterLeave()};if(m.shapeFlag&1&&M&&!M.persisted){const{leave:_,delayLeave:w}=M,S=()=>_(p,x);w?w(m.el,x,S):S()}else x()},x2=(m,h)=>{let p;for(;m!==h;)p=d(m),r(m),m=p;r(h)},F2=(m,h,p)=>{const{bum:V,scope:M,update:x,subTree:_,um:w}=m;V&&C6(V),M.stop(),x&&(x.active=!1,t2(_,m,h,p)),w&&D2(w,h),D2(()=>{m.isUnmounted=!0},h),h&&h.pendingBranch&&!h.isUnmounted&&m.asyncDep&&!m.asyncResolved&&m.suspenseId===h.pendingId&&(h.deps--,h.deps===0&&h.resolve())},A2=(m,h,p,V=!1,M=!1,x=0)=>{for(let _=x;_<m.length;_++)t2(m[_],h,p,V,M)},I2=m=>m.shapeFlag&6?I2(m.component.subTree):m.shapeFlag&128?m.suspense.next():d(m.anchor||m.el),V1=(m,h,p)=>{m==null?h._vnode&&t2(h._vnode,null,null,!0):b(h._vnode||null,m,h,null,null,null,p),r5(),B7(),h._vnode=m},_2={p:b,um:t2,m:n2,r:g2,mt:E,mc:F,pc:L,pbc:U,n:I2,o:c};let N2,W2;return a&&([N2,W2]=a(_2)),{render:V1,hydrate:N2,createApp:wf(V1,N2)}}function E1({effect:c,update:a},e){c.allowRecurse=a.allowRecurse=e}function Df(c,a){return(!c||c&&!c.pendingBranch)&&a&&!a.persisted}function ac(c,a,e=!1){const s=c.children,r=a.children;if(Q(s)&&Q(r))for(let i=0;i<s.length;i++){const o=s[i];let n=r[i];n.shapeFlag&1&&!n.dynamicChildren&&((n.patchFlag<=0||n.patchFlag===32)&&(n=r[i]=w1(r[i]),n.el=o.el),e||ac(o,n)),n.type===J3&&(n.el=o.el)}}function Rf(c){const a=c.slice(),e=[0];let s,r,i,o,n;const l=c.length;for(s=0;s<l;s++){const t=c[s];if(t!==0){if(r=e[e.length-1],c[r]<t){a[s]=r,e.push(s);continue}for(i=0,o=e.length-1;i<o;)n=i+o>>1,c[e[n]]<t?i=n+1:o=n;t<c[e[i]]&&(i>0&&(a[s]=e[i-1]),e[i]=s)}}for(i=e.length,o=e[i-1];i-- >0;)e[i]=o,o=a[o];return e}const jf=c=>c.__isTeleport,y2=Symbol.for("v-fgt"),J3=Symbol.for("v-txt"),c1=Symbol.for("v-cmt"),b3=Symbol.for("v-stc"),A4=[];let J2=null;function K(c=!1){A4.push(J2=c?null:[])}function Ef(){A4.pop(),J2=A4[A4.length-1]||null}let O4=1;function v5(c){O4+=c}function ec(c){return c.dynamicChildren=O4>0?J2||o4:null,Ef(),O4>0&&J2&&J2.push(c),c}function s2(c,a,e,s,r,i){return ec(j(c,a,e,s,r,i,!0))}function l1(c,a,e,s,r){return ec(Y(c,a,e,s,r,!0))}function J6(c){return c?c.__v_isVNode===!0:!1}function O1(c,a){return c.type===a.type&&c.key===a.key}const Z3="__vInternal",sc=({key:c})=>c??null,C3=({ref:c,ref_key:a,ref_for:e})=>(typeof c=="number"&&(c=""+c),c!=null?C2(c)||V2(c)||a2(c)?{i:j2,r:c,k:a,f:!!e}:c:null);function j(c,a=null,e=null,s=0,r=null,i=c===y2?0:1,o=!1,n=!1){const l={__v_isVNode:!0,__v_skip:!0,type:c,props:a,key:a&&sc(a),ref:a&&C3(a),scopeId:K3,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:j2};return n?(P0(l,e),i&128&&c.normalize(l)):e&&(l.shapeFlag|=C2(e)?8:16),O4>0&&!o&&J2&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&J2.push(l),l}const Y=$f;function $f(c,a=null,e=null,s=0,r=null,i=!1){if((!c||c===ef)&&(c=c1),J6(c)){const n=F1(c,a,!0);return e&&P0(n,e),O4>0&&!i&&J2&&(n.shapeFlag&6?J2[J2.indexOf(c)]=n:J2.push(n)),n.patchFlag|=-2,n}if(Zf(c)&&(c=c.__vccOpts),a){a=qf(a);let{class:n,style:l}=a;n&&!C2(n)&&(a.class=T1(n)),z2(l)&&(N7(l)&&!Q(l)&&(l=b2({},l)),a.style=Y2(l))}const o=C2(c)?1:rf(c)?128:jf(c)?64:z2(c)?4:a2(c)?2:0;return j(c,a,e,s,r,o,i,!0)}function qf(c){return c?N7(c)||Z3 in c?b2({},c):c:null}function F1(c,a,e=!1){const{props:s,ref:r,patchFlag:i,children:o}=c,n=a?Uf(s||{},a):s;return{__v_isVNode:!0,__v_skip:!0,type:c.type,props:n,key:n&&sc(n),ref:a&&a.ref?e&&r?Q(r)?r.concat(C3(a)):[r,C3(a)]:C3(a):r,scopeId:c.scopeId,slotScopeIds:c.slotScopeIds,children:o,target:c.target,targetAnchor:c.targetAnchor,staticCount:c.staticCount,shapeFlag:c.shapeFlag,patchFlag:a&&c.type!==y2?i===-1?16:i|16:i,dynamicProps:c.dynamicProps,dynamicChildren:c.dynamicChildren,appContext:c.appContext,dirs:c.dirs,transition:c.transition,component:c.component,suspense:c.suspense,ssContent:c.ssContent&&F1(c.ssContent),ssFallback:c.ssFallback&&F1(c.ssFallback),el:c.el,anchor:c.anchor,ctx:c.ctx,ce:c.ce}}function X1(c=" ",a=0){return Y(J3,null,c,a)}function Of(c,a){const e=Y(b3,null,c);return e.staticCount=a,e}function T4(c="",a=!1){return a?(K(),l1(c1,null,c)):Y(c1,null,c)}function s1(c){return c==null||typeof c=="boolean"?Y(c1):Q(c)?Y(y2,null,c.slice()):typeof c=="object"?w1(c):Y(J3,null,String(c))}function w1(c){return c.el===null&&c.patchFlag!==-1||c.memo?c:F1(c)}function P0(c,a){let e=0;const{shapeFlag:s}=c;if(a==null)a=null;else if(Q(a))e=16;else if(typeof a=="object")if(s&65){const r=a.default;r&&(r._c&&(r._d=!1),P0(c,r()),r._c&&(r._d=!0));return}else{e=32;const r=a._;!r&&!(Z3 in a)?a._ctx=j2:r===3&&j2&&(j2.slots._===1?a._=1:(a._=2,c.patchFlag|=1024))}else a2(a)?(a={default:a,_ctx:j2},e=32):(a=String(a),s&64?(e=16,a=[X1(a)]):e=8);c.children=a,c.shapeFlag|=e}function Uf(...c){const a={};for(let e=0;e<c.length;e++){const s=c[e];for(const r in s)if(r==="class")a.class!==s.class&&(a.class=T1([a.class,s.class]));else if(r==="style")a.style=Y2([a.style,s.style]);else if(j3(r)){const i=a[r],o=s[r];o&&i!==o&&!(Q(i)&&i.includes(o))&&(a[r]=i?[].concat(i,o):o)}else r!==""&&(a[r]=s[r])}return a}function e1(c,a,e,s=null){K2(c,a,7,[e,s])}const If=Y7();let Wf=0;function Gf(c,a,e){const s=c.type,r=(a?a.appContext:c.appContext)||If,i={uid:Wf++,vnode:c,type:s,parent:a,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new p7(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:a?a.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Q7(s,r),emitsOptions:R7(s,r),emit:null,emitted:null,propsDefaults:h2,inheritAttrs:s.inheritAttrs,ctx:h2,data:h2,props:h2,attrs:h2,slots:h2,refs:h2,setupState:h2,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:e,suspenseId:e?e.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=a?a.root:i,i.emit=Qt.bind(null,i),c.ce&&c.ce(i),i}let L2=null;const rc=()=>L2||j2;let F0,e4,z5="__VUE_INSTANCE_SETTERS__";(e4=$6()[z5])||(e4=$6()[z5]=[]),e4.push(c=>L2=c),F0=c=>{e4.length>1?e4.forEach(a=>a(c)):e4[0](c)};const u4=c=>{F0(c),c.scope.on()},Q1=()=>{L2&&L2.scope.off(),F0(null)};function ic(c){return c.vnode.shapeFlag&4}let U4=!1;function Kf(c,a=!1){U4=a;const{props:e,children:s}=c.vnode,r=ic(c);Sf(c,e,r,a),Pf(c,s);const i=r?Yf(c,a):void 0;return U4=!1,i}function Yf(c,a){const e=c.type;c.accessCache=Object.create(null),c.proxy=I3(new Proxy(c.ctx,Vf));const{setup:s}=e;if(s){const r=c.setupContext=s.length>1?Qf(c):null;u4(c),g4();const i=A1(s,c,0,[c.props,r]);if(V4(),Q1(),f7(i)){if(i.then(Q1,Q1),a)return i.then(o=>{H5(c,o,a)}).catch(o=>{W3(o,c,0)});c.asyncDep=i}else H5(c,i,a)}else oc(c,a)}function H5(c,a,e){a2(a)?c.type.__ssrInlineRender?c.ssrRender=a:c.render=a:z2(a)&&(c.setupState=T7(a)),oc(c,e)}let g5;function oc(c,a,e){const s=c.type;if(!c.render){if(!a&&g5&&!s.render){const r=s.template||A0(c).template;if(r){const{isCustomElement:i,compilerOptions:o}=c.appContext.config,{delimiters:n,compilerOptions:l}=s,t=b2(b2({isCustomElement:i,delimiters:n},o),l);s.render=g5(r,t)}}c.render=s.render||o1}{u4(c),g4();try{Mf(c)}finally{V4(),Q1()}}}function Xf(c){return c.attrsProxy||(c.attrsProxy=new Proxy(c.attrs,{get(a,e){return E2(c,"get","$attrs"),a[e]}}))}function Qf(c){const a=e=>{c.exposed=e||{}};return{get attrs(){return Xf(c)},slots:c.slots,emit:c.emit,expose:a}}function c6(c){if(c.exposed)return c.exposeProxy||(c.exposeProxy=new Proxy(T7(I3(c.exposed)),{get(a,e){if(e in a)return a[e];if(e in N4)return N4[e](c)},has(a,e){return e in a||e in N4}}))}function Jf(c,a=!0){return a2(c)?c.displayName||c.name:c.name||a&&c.__name}function Zf(c){return a2(c)&&"__vccOpts"in c}const x1=(c,a)=>It(c,a,U4);function nc(c,a,e){const s=arguments.length;return s===2?z2(a)&&!Q(a)?J6(a)?Y(c,null,[a]):Y(c,a):Y(c,null,a):(s>3?e=Array.prototype.slice.call(arguments,2):s===3&&J6(e)&&(e=[e]),Y(c,a,e))}const cm=Symbol.for("v-scx"),am=()=>S4(cm),em="3.3.11",sm="http://www.w3.org/2000/svg",U1=typeof document<"u"?document:null,V5=U1&&U1.createElement("template"),rm={insert:(c,a,e)=>{a.insertBefore(c,e||null)},remove:c=>{const a=c.parentNode;a&&a.removeChild(c)},createElement:(c,a,e,s)=>{const r=a?U1.createElementNS(sm,c):U1.createElement(c,e?{is:e}:void 0);return c==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:c=>U1.createTextNode(c),createComment:c=>U1.createComment(c),setText:(c,a)=>{c.nodeValue=a},setElementText:(c,a)=>{c.textContent=a},parentNode:c=>c.parentNode,nextSibling:c=>c.nextSibling,querySelector:c=>U1.querySelector(c),setScopeId(c,a){c.setAttribute(a,"")},insertStaticContent(c,a,e,s,r,i){const o=e?e.previousSibling:a.lastChild;if(r&&(r===i||r.nextSibling))for(;a.insertBefore(r.cloneNode(!0),e),!(r===i||!(r=r.nextSibling)););else{V5.innerHTML=s?`<svg>${c}</svg>`:c;const n=V5.content;if(s){const l=n.firstChild;for(;l.firstChild;)n.appendChild(l.firstChild);n.removeChild(l)}a.insertBefore(n,e)}return[o?o.nextSibling:a.firstChild,e?e.previousSibling:a.lastChild]}},y1="transition",C4="animation",h4=Symbol("_vtc"),_1=(c,{slots:a})=>nc(tf,tc(c),a);_1.displayName="Transition";const lc={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},im=_1.props=b2({},O7,lc),$1=(c,a=[])=>{Q(c)?c.forEach(e=>e(...a)):c&&c(...a)},M5=c=>c?Q(c)?c.some(a=>a.length>1):c.length>1:!1;function tc(c){const a={};for(const R in c)R in lc||(a[R]=c[R]);if(c.css===!1)return a;const{name:e="v",type:s,duration:r,enterFromClass:i=`${e}-enter-from`,enterActiveClass:o=`${e}-enter-active`,enterToClass:n=`${e}-enter-to`,appearFromClass:l=i,appearActiveClass:t=o,appearToClass:f=n,leaveFromClass:u=`${e}-leave-from`,leaveActiveClass:d=`${e}-leave-active`,leaveToClass:v=`${e}-leave-to`}=c,k=om(r),b=k&&k[0],O=k&&k[1],{onBeforeEnter:z,onEnter:g,onEnterCancelled:N,onLeave:y,onLeaveCancelled:P,onBeforeAppear:e2=z,onAppear:o2=g,onAppearCancelled:F=N}=a,D=(R,f2,E)=>{C1(R,f2?f:n),C1(R,f2?t:o),E&&E()},U=(R,f2)=>{R._isLeaving=!1,C1(R,u),C1(R,v),C1(R,d),f2&&f2()},I=R=>(f2,E)=>{const A=R?o2:g,H=()=>D(f2,R,E);$1(A,[f2,H]),y5(()=>{C1(f2,R?l:i),f1(f2,R?f:n),M5(A)||b5(f2,s,b,H)})};return b2(a,{onBeforeEnter(R){$1(z,[R]),f1(R,i),f1(R,o)},onBeforeAppear(R){$1(e2,[R]),f1(R,l),f1(R,t)},onEnter:I(!1),onAppear:I(!0),onLeave(R,f2){R._isLeaving=!0;const E=()=>U(R,f2);f1(R,u),mc(),f1(R,d),y5(()=>{R._isLeaving&&(C1(R,u),f1(R,v),M5(y)||b5(R,s,O,E))}),$1(y,[R,E])},onEnterCancelled(R){D(R,!1),$1(N,[R])},onAppearCancelled(R){D(R,!0),$1(F,[R])},onLeaveCancelled(R){U(R),$1(P,[R])}})}function om(c){if(c==null)return null;if(z2(c))return[N6(c.enter),N6(c.leave)];{const a=N6(c);return[a,a]}}function N6(c){return nt(c)}function f1(c,a){a.split(/\s+/).forEach(e=>e&&c.classList.add(e)),(c[h4]||(c[h4]=new Set)).add(a)}function C1(c,a){a.split(/\s+/).forEach(s=>s&&c.classList.remove(s));const e=c[h4];e&&(e.delete(a),e.size||(c[h4]=void 0))}function y5(c){requestAnimationFrame(()=>{requestAnimationFrame(c)})}let nm=0;function b5(c,a,e,s){const r=c._endId=++nm,i=()=>{r===c._endId&&s()};if(e)return setTimeout(i,e);const{type:o,timeout:n,propCount:l}=fc(c,a);if(!o)return s();const t=o+"end";let f=0;const u=()=>{c.removeEventListener(t,d),i()},d=v=>{v.target===c&&++f>=l&&u()};setTimeout(()=>{f<l&&u()},n+1),c.addEventListener(t,d)}function fc(c,a){const e=window.getComputedStyle(c),s=k=>(e[k]||"").split(", "),r=s(`${y1}Delay`),i=s(`${y1}Duration`),o=C5(r,i),n=s(`${C4}Delay`),l=s(`${C4}Duration`),t=C5(n,l);let f=null,u=0,d=0;a===y1?o>0&&(f=y1,u=o,d=i.length):a===C4?t>0&&(f=C4,u=t,d=l.length):(u=Math.max(o,t),f=u>0?o>t?y1:C4:null,d=f?f===y1?i.length:l.length:0);const v=f===y1&&/\b(transform|all)(,|$)/.test(s(`${y1}Property`).toString());return{type:f,timeout:u,propCount:d,hasTransform:v}}function C5(c,a){for(;c.length<a.length;)c=c.concat(c);return Math.max(...a.map((e,s)=>L5(e)+L5(c[s])))}function L5(c){return c==="auto"?0:Number(c.slice(0,-1).replace(",","."))*1e3}function mc(){return document.body.offsetHeight}function lm(c,a,e){const s=c[h4];s&&(a=(a?[a,...s]:[...s]).join(" ")),a==null?c.removeAttribute("class"):e?c.setAttribute("class",a):c.className=a}const _0=Symbol("_vod"),Z6={beforeMount(c,{value:a},{transition:e}){c[_0]=c.style.display==="none"?"":c.style.display,e&&a?e.beforeEnter(c):L4(c,a)},mounted(c,{value:a},{transition:e}){e&&a&&e.enter(c)},updated(c,{value:a,oldValue:e},{transition:s}){!a!=!e&&(s?a?(s.beforeEnter(c),L4(c,!0),s.enter(c)):s.leave(c,()=>{L4(c,!1)}):L4(c,a))},beforeUnmount(c,{value:a}){L4(c,a)}};function L4(c,a){c.style.display=a?c[_0]:"none"}function tm(c,a,e){const s=c.style,r=C2(e);if(e&&!r){if(a&&!C2(a))for(const i in a)e[i]==null&&c0(s,i,"");for(const i in e)c0(s,i,e[i])}else{const i=s.display;r?a!==e&&(s.cssText=e):a&&c.removeAttribute("style"),_0 in c&&(s.display=i)}}const k5=/\s*!important$/;function c0(c,a,e){if(Q(e))e.forEach(s=>c0(c,a,s));else if(e==null&&(e=""),a.startsWith("--"))c.setProperty(a,e);else{const s=fm(c,a);k5.test(e)?c.setProperty(H4(s),e.replace(k5,""),"important"):c[s]=e}}const w5=["Webkit","Moz","ms"],S6={};function fm(c,a){const e=S6[a];if(e)return e;let s=t1(a);if(s!=="filter"&&s in c)return S6[a]=s;s=q3(s);for(let r=0;r<w5.length;r++){const i=w5[r]+s;if(i in c)return S6[a]=i}return a}const x5="http://www.w3.org/1999/xlink";function mm(c,a,e,s,r){if(s&&a.startsWith("xlink:"))e==null?c.removeAttributeNS(x5,a.slice(6,a.length)):c.setAttributeNS(x5,a,e);else{const i=ht(a);e==null||i&&!h7(e)?c.removeAttribute(a):c.setAttribute(a,i?"":e)}}function um(c,a,e,s,r,i,o){if(a==="innerHTML"||a==="textContent"){s&&o(s,r,i),c[a]=e??"";return}const n=c.tagName;if(a==="value"&&n!=="PROGRESS"&&!n.includes("-")){c._value=e;const t=n==="OPTION"?c.getAttribute("value"):c.value,f=e??"";t!==f&&(c.value=f),e==null&&c.removeAttribute(a);return}let l=!1;if(e===""||e==null){const t=typeof c[a];t==="boolean"?e=h7(e):e==null&&t==="string"?(e="",l=!0):t==="number"&&(e=0,l=!0)}try{c[a]=e}catch{}l&&c.removeAttribute(a)}function hm(c,a,e,s){c.addEventListener(a,e,s)}function dm(c,a,e,s){c.removeEventListener(a,e,s)}const N5=Symbol("_vei");function pm(c,a,e,s,r=null){const i=c[N5]||(c[N5]={}),o=i[a];if(s&&o)o.value=s;else{const[n,l]=vm(a);if(s){const t=i[a]=gm(s,r);hm(c,n,t,l)}else o&&(dm(c,n,o,l),i[a]=void 0)}}const S5=/(?:Once|Passive|Capture)$/;function vm(c){let a;if(S5.test(c)){a={};let s;for(;s=c.match(S5);)c=c.slice(0,c.length-s[0].length),a[s[0].toLowerCase()]=!0}return[c[2]===":"?c.slice(3):H4(c.slice(2)),a]}let A6=0;const zm=Promise.resolve(),Hm=()=>A6||(zm.then(()=>A6=0),A6=Date.now());function gm(c,a){const e=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=e.attached)return;K2(Vm(s,e.value),a,5,[s])};return e.value=c,e.attached=Hm(),e}function Vm(c,a){if(Q(a)){const e=c.stopImmediatePropagation;return c.stopImmediatePropagation=()=>{e.call(c),c._stopped=!0},a.map(s=>r=>!r._stopped&&s&&s(r))}else return a}const A5=c=>c.charCodeAt(0)===111&&c.charCodeAt(1)===110&&c.charCodeAt(2)>96&&c.charCodeAt(2)<123,Mm=(c,a,e,s,r=!1,i,o,n,l)=>{a==="class"?lm(c,s,r):a==="style"?tm(c,e,s):j3(a)?v0(a)||pm(c,a,e,s,o):(a[0]==="."?(a=a.slice(1),!0):a[0]==="^"?(a=a.slice(1),!1):ym(c,a,s,r))?um(c,a,s,i,o,n,l):(a==="true-value"?c._trueValue=s:a==="false-value"&&(c._falseValue=s),mm(c,a,s,r))};function ym(c,a,e,s){if(s)return!!(a==="innerHTML"||a==="textContent"||a in c&&A5(a)&&a2(e));if(a==="spellcheck"||a==="draggable"||a==="translate"||a==="form"||a==="list"&&c.tagName==="INPUT"||a==="type"&&c.tagName==="TEXTAREA")return!1;if(a==="width"||a==="height"){const r=c.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return A5(a)&&C2(e)?!1:a in c}const uc=new WeakMap,hc=new WeakMap,T3=Symbol("_moveCb"),T5=Symbol("_enterCb"),dc={name:"TransitionGroup",props:b2({},im,{tag:String,moveClass:String}),setup(c,{slots:a}){const e=rc(),s=q7();let r,i;return W7(()=>{if(!r.length)return;const o=c.moveClass||`${c.name||"v"}-move`;if(!wm(r[0].el,e.vnode.el,o))return;r.forEach(Cm),r.forEach(Lm);const n=r.filter(km);mc(),n.forEach(l=>{const t=l.el,f=t.style;f1(t,o),f.transform=f.webkitTransform=f.transitionDuration="";const u=t[T3]=d=>{d&&d.target!==t||(!d||/transform$/.test(d.propertyName))&&(t.removeEventListener("transitionend",u),t[T3]=null,C1(t,o))};t.addEventListener("transitionend",u)})}),()=>{const o=i2(c),n=tc(o);let l=o.tag||y2;r=i,i=a.default?N0(a.default()):[];for(let t=0;t<i.length;t++){const f=i[t];f.key!=null&&$4(f,E4(f,n,s,e))}if(r)for(let t=0;t<r.length;t++){const f=r[t];$4(f,E4(f,n,s,e)),uc.set(f,f.el.getBoundingClientRect())}return Y(l,null,i)}}},bm=c=>delete c.mode;dc.props;const T6=dc;function Cm(c){const a=c.el;a[T3]&&a[T3](),a[T5]&&a[T5]()}function Lm(c){hc.set(c,c.el.getBoundingClientRect())}function km(c){const a=uc.get(c),e=hc.get(c),s=a.left-e.left,r=a.top-e.top;if(s||r){const i=c.el.style;return i.transform=i.webkitTransform=`translate(${s}px,${r}px)`,i.transitionDuration="0s",c}}function wm(c,a,e){const s=c.cloneNode(),r=c[h4];r&&r.forEach(n=>{n.split(/\s+/).forEach(l=>l&&s.classList.remove(l))}),e.split(/\s+/).forEach(n=>n&&s.classList.add(n)),s.style.display="none";const i=a.nodeType===1?a:a.parentNode;i.appendChild(s);const{hasTransform:o}=fc(s);return i.removeChild(s),o}const xm=["ctrl","shift","alt","meta"],Nm={stop:c=>c.stopPropagation(),prevent:c=>c.preventDefault(),self:c=>c.target!==c.currentTarget,ctrl:c=>!c.ctrlKey,shift:c=>!c.shiftKey,alt:c=>!c.altKey,meta:c=>!c.metaKey,left:c=>"button"in c&&c.button!==0,middle:c=>"button"in c&&c.button!==1,right:c=>"button"in c&&c.button!==2,exact:(c,a)=>xm.some(e=>c[`${e}Key`]&&!a.includes(e))},P3=(c,a)=>c._withMods||(c._withMods=(e,...s)=>{for(let r=0;r<a.length;r++){const i=Nm[a[r]];if(i&&i(e,a))return}return c(e,...s)}),Sm=b2({patchProp:Mm},rm);let P5;function Am(){return P5||(P5=_f(Sm))}const Tm=(...c)=>{const a=Am().createApp(...c),{mount:e}=a;return a.mount=s=>{const r=Pm(s);if(!r)return;const i=a._component;!a2(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML="";const o=e(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},a};function Pm(c){return C2(c)?document.querySelector(c):c}var Fm=!1;/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let pc;const a6=c=>pc=c,vc=Symbol();function a0(c){return c&&typeof c=="object"&&Object.prototype.toString.call(c)==="[object Object]"&&typeof c.toJSON!="function"}var P4;(function(c){c.direct="direct",c.patchObject="patch object",c.patchFunction="patch function"})(P4||(P4={}));function _m(){const c=v7(!0),a=c.run(()=>p2({}));let e=[],s=[];const r=I3({install(i){a6(r),r._a=i,i.provide(vc,r),i.config.globalProperties.$pinia=r,s.forEach(o=>e.push(o)),s=[]},use(i){return!this._a&&!Fm?s.push(i):e.push(i),this},_p:e,_a:null,_e:c,_s:new Map,state:a});return r}const zc=()=>{};function F5(c,a,e,s=zc){c.push(a);const r=()=>{const i=c.indexOf(a);i>-1&&(c.splice(i,1),s())};return!e&&z7()&&pt(r),r}function s4(c,...a){c.slice().forEach(e=>{e(...a)})}const Bm=c=>c();function e0(c,a){c instanceof Map&&a instanceof Map&&a.forEach((e,s)=>c.set(s,e)),c instanceof Set&&a instanceof Set&&a.forEach(c.add,c);for(const e in a){if(!a.hasOwnProperty(e))continue;const s=a[e],r=c[e];a0(r)&&a0(s)&&c.hasOwnProperty(e)&&!V2(s)&&!S1(s)?c[e]=e0(r,s):c[e]=s}return c}const Dm=Symbol();function Rm(c){return!a0(c)||!c.hasOwnProperty(Dm)}const{assign:L1}=Object;function jm(c){return!!(V2(c)&&c.effect)}function Em(c,a,e,s){const{state:r,actions:i,getters:o}=a,n=e.state.value[c];let l;function t(){n||(e.state.value[c]=r?r():{});const f=$t(e.state.value[c]);return L1(f,i,Object.keys(o||{}).reduce((u,d)=>(u[d]=I3(x1(()=>{a6(e);const v=e._s.get(c);return o[d].call(v,v)})),u),{}))}return l=Hc(c,t,a,e,s,!0),l}function Hc(c,a,e={},s,r,i){let o;const n=L1({actions:{}},e),l={deep:!0};let t,f,u=[],d=[],v;const k=s.state.value[c];!i&&!k&&(s.state.value[c]={}),p2({});let b;function O(F){let D;t=f=!1,typeof F=="function"?(F(s.state.value[c]),D={type:P4.patchFunction,storeId:c,events:v}):(e0(s.state.value[c],F),D={type:P4.patchObject,payload:F,storeId:c,events:v});const U=b=Symbol();F7().then(()=>{b===U&&(t=!0)}),f=!0,s4(u,D,s.state.value[c])}const z=i?function(){const{state:D}=e,U=D?D():{};this.$patch(I=>{L1(I,U)})}:zc;function g(){o.stop(),u=[],d=[],s._s.delete(c)}function N(F,D){return function(){a6(s);const U=Array.from(arguments),I=[],R=[];function f2(H){I.push(H)}function E(H){R.push(H)}s4(d,{args:U,name:F,store:P,after:f2,onError:E});let A;try{A=D.apply(this&&this.$id===c?this:P,U)}catch(H){throw s4(R,H),H}return A instanceof Promise?A.then(H=>(s4(I,H),H)).catch(H=>(s4(R,H),Promise.reject(H))):(s4(I,A),A)}}const y={_p:s,$id:c,$onAction:F5.bind(null,d),$patch:O,$reset:z,$subscribe(F,D={}){const U=F5(u,F,D.detached,()=>I()),I=o.run(()=>S2(()=>s.state.value[c],R=>{(D.flush==="sync"?f:t)&&F({storeId:c,type:P4.direct,events:v},R)},L1({},l,D)));return U},$dispose:g},P=U3(y);s._s.set(c,P);const o2=(s._a&&s._a.runWithContext||Bm)(()=>s._e.run(()=>(o=v7()).run(a)));for(const F in o2){const D=o2[F];if(V2(D)&&!jm(D)||S1(D))i||(k&&Rm(D)&&(V2(D)?D.value=k[F]:e0(D,k[F])),s.state.value[c][F]=D);else if(typeof D=="function"){const U=N(F,D);o2[F]=U,n.actions[F]=D}}return L1(P,o2),L1(i2(P),o2),Object.defineProperty(P,"$state",{get:()=>s.state.value[c],set:F=>{O(D=>{L1(D,F)})}}),s._p.forEach(F=>{L1(P,o.run(()=>F({store:P,app:s._a,pinia:s,options:n})))}),k&&i&&e.hydrate&&e.hydrate(P.$state,k),t=!0,f=!0,P}function X4(c,a,e){let s,r;const i=typeof a=="function";typeof c=="string"?(s=c,r=i?e:a):(r=c,s=c.id);function o(n,l){const t=Nf();return n=n||(t?S4(vc,null):null),n&&a6(n),n=pc,n._s.has(s)||(i?Hc(s,a,r,n):Em(s,r,n)),n._s.get(s)}return o.$id=s,o}function _5(c,a){var e=Object.keys(c);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(c);a&&(s=s.filter(function(r){return Object.getOwnPropertyDescriptor(c,r).enumerable})),e.push.apply(e,s)}return e}function B(c){for(var a=1;a<arguments.length;a++){var e=arguments[a]!=null?arguments[a]:{};a%2?_5(Object(e),!0).forEach(function(s){w2(c,s,e[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(e)):_5(Object(e)).forEach(function(s){Object.defineProperty(c,s,Object.getOwnPropertyDescriptor(e,s))})}return c}function F3(c){"@babel/helpers - typeof";return F3=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},F3(c)}function $m(c,a){if(!(c instanceof a))throw new TypeError("Cannot call a class as a function")}function B5(c,a){for(var e=0;e<a.length;e++){var s=a[e];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(c,s.key,s)}}function qm(c,a,e){return a&&B5(c.prototype,a),e&&B5(c,e),Object.defineProperty(c,"prototype",{writable:!1}),c}function w2(c,a,e){return a in c?Object.defineProperty(c,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):c[a]=e,c}function B0(c,a){return Um(c)||Wm(c,a)||gc(c,a)||Km()}function Q4(c){return Om(c)||Im(c)||gc(c)||Gm()}function Om(c){if(Array.isArray(c))return s0(c)}function Um(c){if(Array.isArray(c))return c}function Im(c){if(typeof Symbol<"u"&&c[Symbol.iterator]!=null||c["@@iterator"]!=null)return Array.from(c)}function Wm(c,a){var e=c==null?null:typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(e!=null){var s=[],r=!0,i=!1,o,n;try{for(e=e.call(c);!(r=(o=e.next()).done)&&(s.push(o.value),!(a&&s.length===a));r=!0);}catch(l){i=!0,n=l}finally{try{!r&&e.return!=null&&e.return()}finally{if(i)throw n}}return s}}function gc(c,a){if(c){if(typeof c=="string")return s0(c,a);var e=Object.prototype.toString.call(c).slice(8,-1);if(e==="Object"&&c.constructor&&(e=c.constructor.name),e==="Map"||e==="Set")return Array.from(c);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return s0(c,a)}}function s0(c,a){(a==null||a>c.length)&&(a=c.length);for(var e=0,s=new Array(a);e<a;e++)s[e]=c[e];return s}function Gm(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Km(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var D5=function(){},D0={},Vc={},Mc=null,yc={mark:D5,measure:D5};try{typeof window<"u"&&(D0=window),typeof document<"u"&&(Vc=document),typeof MutationObserver<"u"&&(Mc=MutationObserver),typeof performance<"u"&&(yc=performance)}catch{}var Ym=D0.navigator||{},R5=Ym.userAgent,j5=R5===void 0?"":R5,B1=D0,v2=Vc,E5=Mc,u3=yc;B1.document;var g1=!!v2.documentElement&&!!v2.head&&typeof v2.addEventListener=="function"&&typeof v2.createElement=="function",bc=~j5.indexOf("MSIE")||~j5.indexOf("Trident/"),h3,d3,p3,v3,z3,p1="___FONT_AWESOME___",r0=16,Cc="fa",Lc="svg-inline--fa",Z1="data-fa-i2svg",i0="data-fa-pseudo-element",Xm="data-fa-pseudo-element-pending",R0="data-prefix",j0="data-icon",$5="fontawesome-i2svg",Qm="async",Jm=["HTML","HEAD","STYLE","SCRIPT"],kc=function(){try{return!0}catch{return!1}}(),d2="classic",H2="sharp",E0=[d2,H2];function J4(c){return new Proxy(c,{get:function(e,s){return s in e?e[s]:e[d2]}})}var I4=J4((h3={},w2(h3,d2,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),w2(h3,H2,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),h3)),W4=J4((d3={},w2(d3,d2,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),w2(d3,H2,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),d3)),G4=J4((p3={},w2(p3,d2,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),w2(p3,H2,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),p3)),Zm=J4((v3={},w2(v3,d2,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),w2(v3,H2,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),v3)),cu=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,wc="fa-layers-text",au=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,eu=J4((z3={},w2(z3,d2,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),w2(z3,H2,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),z3)),xc=[1,2,3,4,5,6,7,8,9,10],su=xc.concat([11,12,13,14,15,16,17,18,19,20]),ru=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],G1={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},K4=new Set;Object.keys(W4[d2]).map(K4.add.bind(K4));Object.keys(W4[H2]).map(K4.add.bind(K4));var iu=[].concat(E0,Q4(K4),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",G1.GROUP,G1.SWAP_OPACITY,G1.PRIMARY,G1.SECONDARY]).concat(xc.map(function(c){return"".concat(c,"x")})).concat(su.map(function(c){return"w-".concat(c)})),F4=B1.FontAwesomeConfig||{};function ou(c){var a=v2.querySelector("script["+c+"]");if(a)return a.getAttribute(c)}function nu(c){return c===""?!0:c==="false"?!1:c==="true"?!0:c}if(v2&&typeof v2.querySelector=="function"){var lu=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];lu.forEach(function(c){var a=B0(c,2),e=a[0],s=a[1],r=nu(ou(e));r!=null&&(F4[s]=r)})}var Nc={styleDefault:"solid",familyDefault:"classic",cssPrefix:Cc,replacementClass:Lc,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};F4.familyPrefix&&(F4.cssPrefix=F4.familyPrefix);var d4=B(B({},Nc),F4);d4.autoReplaceSvg||(d4.observeMutations=!1);var q={};Object.keys(Nc).forEach(function(c){Object.defineProperty(q,c,{enumerable:!0,set:function(e){d4[c]=e,_4.forEach(function(s){return s(q)})},get:function(){return d4[c]}})});Object.defineProperty(q,"familyPrefix",{enumerable:!0,set:function(a){d4.cssPrefix=a,_4.forEach(function(e){return e(q)})},get:function(){return d4.cssPrefix}});B1.FontAwesomeConfig=q;var _4=[];function tu(c){return _4.push(c),function(){_4.splice(_4.indexOf(c),1)}}var b1=r0,i1={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function fu(c){if(!(!c||!g1)){var a=v2.createElement("style");a.setAttribute("type","text/css"),a.innerHTML=c;for(var e=v2.head.childNodes,s=null,r=e.length-1;r>-1;r--){var i=e[r],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(s=i)}return v2.head.insertBefore(a,s),c}}var mu="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Y4(){for(var c=12,a="";c-- >0;)a+=mu[Math.random()*62|0];return a}function y4(c){for(var a=[],e=(c||[]).length>>>0;e--;)a[e]=c[e];return a}function $0(c){return c.classList?y4(c.classList):(c.getAttribute("class")||"").split(" ").filter(function(a){return a})}function Sc(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function uu(c){return Object.keys(c||{}).reduce(function(a,e){return a+"".concat(e,'="').concat(Sc(c[e]),'" ')},"").trim()}function e6(c){return Object.keys(c||{}).reduce(function(a,e){return a+"".concat(e,": ").concat(c[e].trim(),";")},"")}function q0(c){return c.size!==i1.size||c.x!==i1.x||c.y!==i1.y||c.rotate!==i1.rotate||c.flipX||c.flipY}function hu(c){var a=c.transform,e=c.containerWidth,s=c.iconWidth,r={transform:"translate(".concat(e/2," 256)")},i="translate(".concat(a.x*32,", ").concat(a.y*32,") "),o="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),n="rotate(".concat(a.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(n)},t={transform:"translate(".concat(s/2*-1," -256)")};return{outer:r,inner:l,path:t}}function du(c){var a=c.transform,e=c.width,s=e===void 0?r0:e,r=c.height,i=r===void 0?r0:r,o=c.startCentered,n=o===void 0?!1:o,l="";return n&&bc?l+="translate(".concat(a.x/b1-s/2,"em, ").concat(a.y/b1-i/2,"em) "):n?l+="translate(calc(-50% + ".concat(a.x/b1,"em), calc(-50% + ").concat(a.y/b1,"em)) "):l+="translate(".concat(a.x/b1,"em, ").concat(a.y/b1,"em) "),l+="scale(".concat(a.size/b1*(a.flipX?-1:1),", ").concat(a.size/b1*(a.flipY?-1:1),") "),l+="rotate(".concat(a.rotate,"deg) "),l}var pu=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Ac(){var c=Cc,a=Lc,e=q.cssPrefix,s=q.replacementClass,r=pu;if(e!==c||s!==a){var i=new RegExp("\\.".concat(c,"\\-"),"g"),o=new RegExp("\\--".concat(c,"\\-"),"g"),n=new RegExp("\\.".concat(a),"g");r=r.replace(i,".".concat(e,"-")).replace(o,"--".concat(e,"-")).replace(n,".".concat(s))}return r}var q5=!1;function P6(){q.autoAddCss&&!q5&&(fu(Ac()),q5=!0)}var vu={mixout:function(){return{dom:{css:Ac,insertCss:P6}}},hooks:function(){return{beforeDOMElementCreation:function(){P6()},beforeI2svg:function(){P6()}}}},v1=B1||{};v1[p1]||(v1[p1]={});v1[p1].styles||(v1[p1].styles={});v1[p1].hooks||(v1[p1].hooks={});v1[p1].shims||(v1[p1].shims=[]);var Z2=v1[p1],Tc=[],zu=function c(){v2.removeEventListener("DOMContentLoaded",c),_3=1,Tc.map(function(a){return a()})},_3=!1;g1&&(_3=(v2.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(v2.readyState),_3||v2.addEventListener("DOMContentLoaded",zu));function Hu(c){g1&&(_3?setTimeout(c,0):Tc.push(c))}function Z4(c){var a=c.tag,e=c.attributes,s=e===void 0?{}:e,r=c.children,i=r===void 0?[]:r;return typeof c=="string"?Sc(c):"<".concat(a," ").concat(uu(s),">").concat(i.map(Z4).join(""),"</").concat(a,">")}function O5(c,a,e){if(c&&c[a]&&c[a][e])return{prefix:a,iconName:e,icon:c[a][e]}}var gu=function(a,e){return function(s,r,i,o){return a.call(e,s,r,i,o)}},F6=function(a,e,s,r){var i=Object.keys(a),o=i.length,n=r!==void 0?gu(e,r):e,l,t,f;for(s===void 0?(l=1,f=a[i[0]]):(l=0,f=s);l<o;l++)t=i[l],f=n(f,a[t],t,a);return f};function Vu(c){for(var a=[],e=0,s=c.length;e<s;){var r=c.charCodeAt(e++);if(r>=55296&&r<=56319&&e<s){var i=c.charCodeAt(e++);(i&64512)==56320?a.push(((r&1023)<<10)+(i&1023)+65536):(a.push(r),e--)}else a.push(r)}return a}function o0(c){var a=Vu(c);return a.length===1?a[0].toString(16):null}function Mu(c,a){var e=c.length,s=c.charCodeAt(a),r;return s>=55296&&s<=56319&&e>a+1&&(r=c.charCodeAt(a+1),r>=56320&&r<=57343)?(s-55296)*1024+r-56320+65536:s}function U5(c){return Object.keys(c).reduce(function(a,e){var s=c[e],r=!!s.icon;return r?a[s.iconName]=s.icon:a[e]=s,a},{})}function n0(c,a){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},s=e.skipHooks,r=s===void 0?!1:s,i=U5(a);typeof Z2.hooks.addPack=="function"&&!r?Z2.hooks.addPack(c,U5(a)):Z2.styles[c]=B(B({},Z2.styles[c]||{}),i),c==="fas"&&n0("fa",a)}var H3,g3,V3,r4=Z2.styles,yu=Z2.shims,bu=(H3={},w2(H3,d2,Object.values(G4[d2])),w2(H3,H2,Object.values(G4[H2])),H3),O0=null,Pc={},Fc={},_c={},Bc={},Dc={},Cu=(g3={},w2(g3,d2,Object.keys(I4[d2])),w2(g3,H2,Object.keys(I4[H2])),g3);function Lu(c){return~iu.indexOf(c)}function ku(c,a){var e=a.split("-"),s=e[0],r=e.slice(1).join("-");return s===c&&r!==""&&!Lu(r)?r:null}var Rc=function(){var a=function(i){return F6(r4,function(o,n,l){return o[l]=F6(n,i,{}),o},{})};Pc=a(function(r,i,o){if(i[3]&&(r[i[3]]=o),i[2]){var n=i[2].filter(function(l){return typeof l=="number"});n.forEach(function(l){r[l.toString(16)]=o})}return r}),Fc=a(function(r,i,o){if(r[o]=o,i[2]){var n=i[2].filter(function(l){return typeof l=="string"});n.forEach(function(l){r[l]=o})}return r}),Dc=a(function(r,i,o){var n=i[2];return r[o]=o,n.forEach(function(l){r[l]=o}),r});var e="far"in r4||q.autoFetchSvg,s=F6(yu,function(r,i){var o=i[0],n=i[1],l=i[2];return n==="far"&&!e&&(n="fas"),typeof o=="string"&&(r.names[o]={prefix:n,iconName:l}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:n,iconName:l}),r},{names:{},unicodes:{}});_c=s.names,Bc=s.unicodes,O0=s6(q.styleDefault,{family:q.familyDefault})};tu(function(c){O0=s6(c.styleDefault,{family:q.familyDefault})});Rc();function U0(c,a){return(Pc[c]||{})[a]}function wu(c,a){return(Fc[c]||{})[a]}function K1(c,a){return(Dc[c]||{})[a]}function jc(c){return _c[c]||{prefix:null,iconName:null}}function xu(c){var a=Bc[c],e=U0("fas",c);return a||(e?{prefix:"fas",iconName:e}:null)||{prefix:null,iconName:null}}function D1(){return O0}var I0=function(){return{prefix:null,iconName:null,rest:[]}};function s6(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.family,s=e===void 0?d2:e,r=I4[s][c],i=W4[s][c]||W4[s][r],o=c in Z2.styles?c:null;return i||o||null}var I5=(V3={},w2(V3,d2,Object.keys(G4[d2])),w2(V3,H2,Object.keys(G4[H2])),V3);function r6(c){var a,e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=e.skipLookups,r=s===void 0?!1:s,i=(a={},w2(a,d2,"".concat(q.cssPrefix,"-").concat(d2)),w2(a,H2,"".concat(q.cssPrefix,"-").concat(H2)),a),o=null,n=d2;(c.includes(i[d2])||c.some(function(t){return I5[d2].includes(t)}))&&(n=d2),(c.includes(i[H2])||c.some(function(t){return I5[H2].includes(t)}))&&(n=H2);var l=c.reduce(function(t,f){var u=ku(q.cssPrefix,f);if(r4[f]?(f=bu[n].includes(f)?Zm[n][f]:f,o=f,t.prefix=f):Cu[n].indexOf(f)>-1?(o=f,t.prefix=s6(f,{family:n})):u?t.iconName=u:f!==q.replacementClass&&f!==i[d2]&&f!==i[H2]&&t.rest.push(f),!r&&t.prefix&&t.iconName){var d=o==="fa"?jc(t.iconName):{},v=K1(t.prefix,t.iconName);d.prefix&&(o=null),t.iconName=d.iconName||v||t.iconName,t.prefix=d.prefix||t.prefix,t.prefix==="far"&&!r4.far&&r4.fas&&!q.autoFetchSvg&&(t.prefix="fas")}return t},I0());return(c.includes("fa-brands")||c.includes("fab"))&&(l.prefix="fab"),(c.includes("fa-duotone")||c.includes("fad"))&&(l.prefix="fad"),!l.prefix&&n===H2&&(r4.fass||q.autoFetchSvg)&&(l.prefix="fass",l.iconName=K1(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=D1()||"fas"),l}var Nu=function(){function c(){$m(this,c),this.definitions={}}return qm(c,[{key:"add",value:function(){for(var e=this,s=arguments.length,r=new Array(s),i=0;i<s;i++)r[i]=arguments[i];var o=r.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(n){e.definitions[n]=B(B({},e.definitions[n]||{}),o[n]),n0(n,o[n]);var l=G4[d2][n];l&&n0(l,o[n]),Rc()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(e,s){var r=s.prefix&&s.iconName&&s.icon?{0:s}:s;return Object.keys(r).map(function(i){var o=r[i],n=o.prefix,l=o.iconName,t=o.icon,f=t[2];e[n]||(e[n]={}),f.length>0&&f.forEach(function(u){typeof u=="string"&&(e[n][u]=t)}),e[n][l]=t}),e}}]),c}(),W5=[],i4={},t4={},Su=Object.keys(t4);function Au(c,a){var e=a.mixoutsTo;return W5=c,i4={},Object.keys(t4).forEach(function(s){Su.indexOf(s)===-1&&delete t4[s]}),W5.forEach(function(s){var r=s.mixout?s.mixout():{};if(Object.keys(r).forEach(function(o){typeof r[o]=="function"&&(e[o]=r[o]),F3(r[o])==="object"&&Object.keys(r[o]).forEach(function(n){e[o]||(e[o]={}),e[o][n]=r[o][n]})}),s.hooks){var i=s.hooks();Object.keys(i).forEach(function(o){i4[o]||(i4[o]=[]),i4[o].push(i[o])})}s.provides&&s.provides(t4)}),e}function l0(c,a){for(var e=arguments.length,s=new Array(e>2?e-2:0),r=2;r<e;r++)s[r-2]=arguments[r];var i=i4[c]||[];return i.forEach(function(o){a=o.apply(null,[a].concat(s))}),a}function c4(c){for(var a=arguments.length,e=new Array(a>1?a-1:0),s=1;s<a;s++)e[s-1]=arguments[s];var r=i4[c]||[];r.forEach(function(i){i.apply(null,e)})}function z1(){var c=arguments[0],a=Array.prototype.slice.call(arguments,1);return t4[c]?t4[c].apply(null,a):void 0}function t0(c){c.prefix==="fa"&&(c.prefix="fas");var a=c.iconName,e=c.prefix||D1();if(a)return a=K1(e,a)||a,O5(Ec.definitions,e,a)||O5(Z2.styles,e,a)}var Ec=new Nu,Tu=function(){q.autoReplaceSvg=!1,q.observeMutations=!1,c4("noAuto")},Pu={i2svg:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return g1?(c4("beforeI2svg",a),z1("pseudoElements2svg",a),z1("i2svg",a)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=a.autoReplaceSvgRoot;q.autoReplaceSvg===!1&&(q.autoReplaceSvg=!0),q.observeMutations=!0,Hu(function(){_u({autoReplaceSvgRoot:e}),c4("watch",a)})}},Fu={icon:function(a){if(a===null)return null;if(F3(a)==="object"&&a.prefix&&a.iconName)return{prefix:a.prefix,iconName:K1(a.prefix,a.iconName)||a.iconName};if(Array.isArray(a)&&a.length===2){var e=a[1].indexOf("fa-")===0?a[1].slice(3):a[1],s=s6(a[0]);return{prefix:s,iconName:K1(s,e)||e}}if(typeof a=="string"&&(a.indexOf("".concat(q.cssPrefix,"-"))>-1||a.match(cu))){var r=r6(a.split(" "),{skipLookups:!0});return{prefix:r.prefix||D1(),iconName:K1(r.prefix,r.iconName)||r.iconName}}if(typeof a=="string"){var i=D1();return{prefix:i,iconName:K1(i,a)||a}}}},U2={noAuto:Tu,config:q,dom:Pu,parse:Fu,library:Ec,findIconDefinition:t0,toHtml:Z4},_u=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=a.autoReplaceSvgRoot,s=e===void 0?v2:e;(Object.keys(Z2.styles).length>0||q.autoFetchSvg)&&g1&&q.autoReplaceSvg&&U2.dom.i2svg({node:s})};function i6(c,a){return Object.defineProperty(c,"abstract",{get:a}),Object.defineProperty(c,"html",{get:function(){return c.abstract.map(function(s){return Z4(s)})}}),Object.defineProperty(c,"node",{get:function(){if(g1){var s=v2.createElement("div");return s.innerHTML=c.html,s.children}}}),c}function Bu(c){var a=c.children,e=c.main,s=c.mask,r=c.attributes,i=c.styles,o=c.transform;if(q0(o)&&e.found&&!s.found){var n=e.width,l=e.height,t={x:n/l/2,y:.5};r.style=e6(B(B({},i),{},{"transform-origin":"".concat(t.x+o.x/16,"em ").concat(t.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:a}]}function Du(c){var a=c.prefix,e=c.iconName,s=c.children,r=c.attributes,i=c.symbol,o=i===!0?"".concat(a,"-").concat(q.cssPrefix,"-").concat(e):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:B(B({},r),{},{id:o}),children:s}]}]}function W0(c){var a=c.icons,e=a.main,s=a.mask,r=c.prefix,i=c.iconName,o=c.transform,n=c.symbol,l=c.title,t=c.maskId,f=c.titleId,u=c.extra,d=c.watchable,v=d===void 0?!1:d,k=s.found?s:e,b=k.width,O=k.height,z=r==="fak",g=[q.replacementClass,i?"".concat(q.cssPrefix,"-").concat(i):""].filter(function(D){return u.classes.indexOf(D)===-1}).filter(function(D){return D!==""||!!D}).concat(u.classes).join(" "),N={children:[],attributes:B(B({},u.attributes),{},{"data-prefix":r,"data-icon":i,class:g,role:u.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(b," ").concat(O)})},y=z&&!~u.classes.indexOf("fa-fw")?{width:"".concat(b/O*16*.0625,"em")}:{};v&&(N.attributes[Z1]=""),l&&(N.children.push({tag:"title",attributes:{id:N.attributes["aria-labelledby"]||"title-".concat(f||Y4())},children:[l]}),delete N.attributes.title);var P=B(B({},N),{},{prefix:r,iconName:i,main:e,mask:s,maskId:t,transform:o,symbol:n,styles:B(B({},y),u.styles)}),e2=s.found&&e.found?z1("generateAbstractMask",P)||{children:[],attributes:{}}:z1("generateAbstractIcon",P)||{children:[],attributes:{}},o2=e2.children,F=e2.attributes;return P.children=o2,P.attributes=F,n?Du(P):Bu(P)}function G5(c){var a=c.content,e=c.width,s=c.height,r=c.transform,i=c.title,o=c.extra,n=c.watchable,l=n===void 0?!1:n,t=B(B(B({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(t[Z1]="");var f=B({},o.styles);q0(r)&&(f.transform=du({transform:r,startCentered:!0,width:e,height:s}),f["-webkit-transform"]=f.transform);var u=e6(f);u.length>0&&(t.style=u);var d=[];return d.push({tag:"span",attributes:t,children:[a]}),i&&d.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),d}function Ru(c){var a=c.content,e=c.title,s=c.extra,r=B(B(B({},s.attributes),e?{title:e}:{}),{},{class:s.classes.join(" ")}),i=e6(s.styles);i.length>0&&(r.style=i);var o=[];return o.push({tag:"span",attributes:r,children:[a]}),e&&o.push({tag:"span",attributes:{class:"sr-only"},children:[e]}),o}var _6=Z2.styles;function f0(c){var a=c[0],e=c[1],s=c.slice(4),r=B0(s,1),i=r[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(q.cssPrefix,"-").concat(G1.GROUP)},children:[{tag:"path",attributes:{class:"".concat(q.cssPrefix,"-").concat(G1.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(q.cssPrefix,"-").concat(G1.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:a,height:e,icon:o}}var ju={found:!1,width:512,height:512};function Eu(c,a){!kc&&!q.showMissingIcons&&c&&console.error('Icon with name "'.concat(c,'" and prefix "').concat(a,'" is missing.'))}function m0(c,a){var e=a;return a==="fa"&&q.styleDefault!==null&&(a=D1()),new Promise(function(s,r){if(z1("missingIconAbstract"),e==="fa"){var i=jc(c)||{};c=i.iconName||c,a=i.prefix||a}if(c&&a&&_6[a]&&_6[a][c]){var o=_6[a][c];return s(f0(o))}Eu(c,a),s(B(B({},ju),{},{icon:q.showMissingIcons&&c?z1("missingIconAbstract")||{}:{}}))})}var K5=function(){},u0=q.measurePerformance&&u3&&u3.mark&&u3.measure?u3:{mark:K5,measure:K5},x4='FA "6.5.1"',$u=function(a){return u0.mark("".concat(x4," ").concat(a," begins")),function(){return $c(a)}},$c=function(a){u0.mark("".concat(x4," ").concat(a," ends")),u0.measure("".concat(x4," ").concat(a),"".concat(x4," ").concat(a," begins"),"".concat(x4," ").concat(a," ends"))},G0={begin:$u,end:$c},L3=function(){};function Y5(c){var a=c.getAttribute?c.getAttribute(Z1):null;return typeof a=="string"}function qu(c){var a=c.getAttribute?c.getAttribute(R0):null,e=c.getAttribute?c.getAttribute(j0):null;return a&&e}function Ou(c){return c&&c.classList&&c.classList.contains&&c.classList.contains(q.replacementClass)}function Uu(){if(q.autoReplaceSvg===!0)return k3.replace;var c=k3[q.autoReplaceSvg];return c||k3.replace}function Iu(c){return v2.createElementNS("http://www.w3.org/2000/svg",c)}function Wu(c){return v2.createElement(c)}function qc(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.ceFn,s=e===void 0?c.tag==="svg"?Iu:Wu:e;if(typeof c=="string")return v2.createTextNode(c);var r=s(c.tag);Object.keys(c.attributes||[]).forEach(function(o){r.setAttribute(o,c.attributes[o])});var i=c.children||[];return i.forEach(function(o){r.appendChild(qc(o,{ceFn:s}))}),r}function Gu(c){var a=" ".concat(c.outerHTML," ");return a="".concat(a,"Font Awesome fontawesome.com "),a}var k3={replace:function(a){var e=a[0];if(e.parentNode)if(a[1].forEach(function(r){e.parentNode.insertBefore(qc(r),e)}),e.getAttribute(Z1)===null&&q.keepOriginalSource){var s=v2.createComment(Gu(e));e.parentNode.replaceChild(s,e)}else e.remove()},nest:function(a){var e=a[0],s=a[1];if(~$0(e).indexOf(q.replacementClass))return k3.replace(a);var r=new RegExp("".concat(q.cssPrefix,"-.*"));if(delete s[0].attributes.id,s[0].attributes.class){var i=s[0].attributes.class.split(" ").reduce(function(n,l){return l===q.replacementClass||l.match(r)?n.toSvg.push(l):n.toNode.push(l),n},{toNode:[],toSvg:[]});s[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",i.toNode.join(" "))}var o=s.map(function(n){return Z4(n)}).join(`
`);e.setAttribute(Z1,""),e.innerHTML=o}};function X5(c){c()}function Oc(c,a){var e=typeof a=="function"?a:L3;if(c.length===0)e();else{var s=X5;q.mutateApproach===Qm&&(s=B1.requestAnimationFrame||X5),s(function(){var r=Uu(),i=G0.begin("mutate");c.map(r),i(),e()})}}var K0=!1;function Uc(){K0=!0}function h0(){K0=!1}var B3=null;function Q5(c){if(E5&&q.observeMutations){var a=c.treeCallback,e=a===void 0?L3:a,s=c.nodeCallback,r=s===void 0?L3:s,i=c.pseudoElementsCallback,o=i===void 0?L3:i,n=c.observeMutationsRoot,l=n===void 0?v2:n;B3=new E5(function(t){if(!K0){var f=D1();y4(t).forEach(function(u){if(u.type==="childList"&&u.addedNodes.length>0&&!Y5(u.addedNodes[0])&&(q.searchPseudoElements&&o(u.target),e(u.target)),u.type==="attributes"&&u.target.parentNode&&q.searchPseudoElements&&o(u.target.parentNode),u.type==="attributes"&&Y5(u.target)&&~ru.indexOf(u.attributeName))if(u.attributeName==="class"&&qu(u.target)){var d=r6($0(u.target)),v=d.prefix,k=d.iconName;u.target.setAttribute(R0,v||f),k&&u.target.setAttribute(j0,k)}else Ou(u.target)&&r(u.target)})}}),g1&&B3.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Ku(){B3&&B3.disconnect()}function Yu(c){var a=c.getAttribute("style"),e=[];return a&&(e=a.split(";").reduce(function(s,r){var i=r.split(":"),o=i[0],n=i.slice(1);return o&&n.length>0&&(s[o]=n.join(":").trim()),s},{})),e}function Xu(c){var a=c.getAttribute("data-prefix"),e=c.getAttribute("data-icon"),s=c.innerText!==void 0?c.innerText.trim():"",r=r6($0(c));return r.prefix||(r.prefix=D1()),a&&e&&(r.prefix=a,r.iconName=e),r.iconName&&r.prefix||(r.prefix&&s.length>0&&(r.iconName=wu(r.prefix,c.innerText)||U0(r.prefix,o0(c.innerText))),!r.iconName&&q.autoFetchSvg&&c.firstChild&&c.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=c.firstChild.data)),r}function Qu(c){var a=y4(c.attributes).reduce(function(r,i){return r.name!=="class"&&r.name!=="style"&&(r[i.name]=i.value),r},{}),e=c.getAttribute("title"),s=c.getAttribute("data-fa-title-id");return q.autoA11y&&(e?a["aria-labelledby"]="".concat(q.replacementClass,"-title-").concat(s||Y4()):(a["aria-hidden"]="true",a.focusable="false")),a}function Ju(){return{iconName:null,title:null,titleId:null,prefix:null,transform:i1,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function J5(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},e=Xu(c),s=e.iconName,r=e.prefix,i=e.rest,o=Qu(c),n=l0("parseNodeAttributes",{},c),l=a.styleParser?Yu(c):[];return B({iconName:s,title:c.getAttribute("title"),titleId:c.getAttribute("data-fa-title-id"),prefix:r,transform:i1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},n)}var Zu=Z2.styles;function Ic(c){var a=q.autoReplaceSvg==="nest"?J5(c,{styleParser:!1}):J5(c);return~a.extra.classes.indexOf(wc)?z1("generateLayersText",c,a):z1("generateSvgReplacementMutation",c,a)}var R1=new Set;E0.map(function(c){R1.add("fa-".concat(c))});Object.keys(I4[d2]).map(R1.add.bind(R1));Object.keys(I4[H2]).map(R1.add.bind(R1));R1=Q4(R1);function Z5(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!g1)return Promise.resolve();var e=v2.documentElement.classList,s=function(u){return e.add("".concat($5,"-").concat(u))},r=function(u){return e.remove("".concat($5,"-").concat(u))},i=q.autoFetchSvg?R1:E0.map(function(f){return"fa-".concat(f)}).concat(Object.keys(Zu));i.includes("fa")||i.push("fa");var o=[".".concat(wc,":not([").concat(Z1,"])")].concat(i.map(function(f){return".".concat(f,":not([").concat(Z1,"])")})).join(", ");if(o.length===0)return Promise.resolve();var n=[];try{n=y4(c.querySelectorAll(o))}catch{}if(n.length>0)s("pending"),r("complete");else return Promise.resolve();var l=G0.begin("onTree"),t=n.reduce(function(f,u){try{var d=Ic(u);d&&f.push(d)}catch(v){kc||v.name==="MissingIcon"&&console.error(v)}return f},[]);return new Promise(function(f,u){Promise.all(t).then(function(d){Oc(d,function(){s("active"),s("complete"),r("pending"),typeof a=="function"&&a(),l(),f()})}).catch(function(d){l(),u(d)})})}function ch(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Ic(c).then(function(e){e&&Oc([e],a)})}function ah(c){return function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=(a||{}).icon?a:t0(a||{}),r=e.mask;return r&&(r=(r||{}).icon?r:t0(r||{})),c(s,B(B({},e),{},{mask:r}))}}var eh=function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=e.transform,r=s===void 0?i1:s,i=e.symbol,o=i===void 0?!1:i,n=e.mask,l=n===void 0?null:n,t=e.maskId,f=t===void 0?null:t,u=e.title,d=u===void 0?null:u,v=e.titleId,k=v===void 0?null:v,b=e.classes,O=b===void 0?[]:b,z=e.attributes,g=z===void 0?{}:z,N=e.styles,y=N===void 0?{}:N;if(a){var P=a.prefix,e2=a.iconName,o2=a.icon;return i6(B({type:"icon"},a),function(){return c4("beforeDOMElementCreation",{iconDefinition:a,params:e}),q.autoA11y&&(d?g["aria-labelledby"]="".concat(q.replacementClass,"-title-").concat(k||Y4()):(g["aria-hidden"]="true",g.focusable="false")),W0({icons:{main:f0(o2),mask:l?f0(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:P,iconName:e2,transform:B(B({},i1),r),symbol:o,title:d,maskId:f,titleId:k,extra:{attributes:g,styles:y,classes:O}})})}},sh={mixout:function(){return{icon:ah(eh)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=Z5,e.nodeCallback=ch,e}}},provides:function(a){a.i2svg=function(e){var s=e.node,r=s===void 0?v2:s,i=e.callback,o=i===void 0?function(){}:i;return Z5(r,o)},a.generateSvgReplacementMutation=function(e,s){var r=s.iconName,i=s.title,o=s.titleId,n=s.prefix,l=s.transform,t=s.symbol,f=s.mask,u=s.maskId,d=s.extra;return new Promise(function(v,k){Promise.all([m0(r,n),f.iconName?m0(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(b){var O=B0(b,2),z=O[0],g=O[1];v([e,W0({icons:{main:z,mask:g},prefix:n,iconName:r,transform:l,symbol:t,maskId:u,title:i,titleId:o,extra:d,watchable:!0})])}).catch(k)})},a.generateAbstractIcon=function(e){var s=e.children,r=e.attributes,i=e.main,o=e.transform,n=e.styles,l=e6(n);l.length>0&&(r.style=l);var t;return q0(o)&&(t=z1("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),s.push(t||i.icon),{children:s,attributes:r}}}},rh={mixout:function(){return{layer:function(e){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=s.classes,i=r===void 0?[]:r;return i6({type:"layer"},function(){c4("beforeDOMElementCreation",{assembler:e,params:s});var o=[];return e(function(n){Array.isArray(n)?n.map(function(l){o=o.concat(l.abstract)}):o=o.concat(n.abstract)}),[{tag:"span",attributes:{class:["".concat(q.cssPrefix,"-layers")].concat(Q4(i)).join(" ")},children:o}]})}}}},ih={mixout:function(){return{counter:function(e){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=s.title,i=r===void 0?null:r,o=s.classes,n=o===void 0?[]:o,l=s.attributes,t=l===void 0?{}:l,f=s.styles,u=f===void 0?{}:f;return i6({type:"counter",content:e},function(){return c4("beforeDOMElementCreation",{content:e,params:s}),Ru({content:e.toString(),title:i,extra:{attributes:t,styles:u,classes:["".concat(q.cssPrefix,"-layers-counter")].concat(Q4(n))}})})}}}},oh={mixout:function(){return{text:function(e){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=s.transform,i=r===void 0?i1:r,o=s.title,n=o===void 0?null:o,l=s.classes,t=l===void 0?[]:l,f=s.attributes,u=f===void 0?{}:f,d=s.styles,v=d===void 0?{}:d;return i6({type:"text",content:e},function(){return c4("beforeDOMElementCreation",{content:e,params:s}),G5({content:e,transform:B(B({},i1),i),title:n,extra:{attributes:u,styles:v,classes:["".concat(q.cssPrefix,"-layers-text")].concat(Q4(t))}})})}}},provides:function(a){a.generateLayersText=function(e,s){var r=s.title,i=s.transform,o=s.extra,n=null,l=null;if(bc){var t=parseInt(getComputedStyle(e).fontSize,10),f=e.getBoundingClientRect();n=f.width/t,l=f.height/t}return q.autoA11y&&!r&&(o.attributes["aria-hidden"]="true"),Promise.resolve([e,G5({content:e.innerHTML,width:n,height:l,transform:i,title:r,extra:o,watchable:!0})])}}},nh=new RegExp('"',"ug"),c7=[1105920,1112319];function lh(c){var a=c.replace(nh,""),e=Mu(a,0),s=e>=c7[0]&&e<=c7[1],r=a.length===2?a[0]===a[1]:!1;return{value:o0(r?a[0]:a),isSecondary:s||r}}function a7(c,a){var e="".concat(Xm).concat(a.replace(":","-"));return new Promise(function(s,r){if(c.getAttribute(e)!==null)return s();var i=y4(c.children),o=i.filter(function(o2){return o2.getAttribute(i0)===a})[0],n=B1.getComputedStyle(c,a),l=n.getPropertyValue("font-family").match(au),t=n.getPropertyValue("font-weight"),f=n.getPropertyValue("content");if(o&&!l)return c.removeChild(o),s();if(l&&f!=="none"&&f!==""){var u=n.getPropertyValue("content"),d=~["Sharp"].indexOf(l[2])?H2:d2,v=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?W4[d][l[2].toLowerCase()]:eu[d][t],k=lh(u),b=k.value,O=k.isSecondary,z=l[0].startsWith("FontAwesome"),g=U0(v,b),N=g;if(z){var y=xu(b);y.iconName&&y.prefix&&(g=y.iconName,v=y.prefix)}if(g&&!O&&(!o||o.getAttribute(R0)!==v||o.getAttribute(j0)!==N)){c.setAttribute(e,N),o&&c.removeChild(o);var P=Ju(),e2=P.extra;e2.attributes[i0]=a,m0(g,v).then(function(o2){var F=W0(B(B({},P),{},{icons:{main:o2,mask:I0()},prefix:v,iconName:N,extra:e2,watchable:!0})),D=v2.createElementNS("http://www.w3.org/2000/svg","svg");a==="::before"?c.insertBefore(D,c.firstChild):c.appendChild(D),D.outerHTML=F.map(function(U){return Z4(U)}).join(`

`+l};if(navigator.share)try{await navigator.share(f)}catch(u){console.error("error: ",u.message)}else if(navigator.clipboard)try{await navigator.clipboard.writeText(f.text),v4().handleAlert("Copied Result To Clipboard")}catch(u){console.error("error: ",u.message)}else v4().handleAlert("Error: Couldn't Share")}function i(){const l=k2().gameData.rows,t=["🟩","🟨","⬜"];let f=[];for(let u=0;u<l.length;u++){let d=[],v=o(l[u]);for(let k=0;k<s;k++)for(let b=0;b<v.length;b++)if(k<v[b]){d.push(t[b]);break}f.push(d.join(""))}return f.join(`
`)}function o(l){let t=0,f=0;const u=new Set(l);for(const d of u){t+=Math.min(n(d,l),n(d,e));for(let v=0;v<l.length;v++)d===l[v]&&d===e[v]&&(t-=1,f+=1)}return[f,t+f,s]}function n(l,t){return t.split(l).length-1}return(l,t)=>{const f=M4("font-awesome-icon");return K(),s2("button",{class:"button",tabindex:"-1",onClick:r},[Y(f,{icon:"fa-solid fa-share-nodes"})])}}},MU=$2(VU,[["__scopeId","data-v-4ee2d3ae"]]),yU=c=>(w0("data-v-9a14bbc5"),c=c(),x0(),c),bU={id:"heading",class:"linebreak"},CU={class:"buttons"},LU=yU(()=>j("div",{class:"title",readonly:""},"HARDLE",-1)),kU={class:"buttons"},wU={__name:"TheHeading",setup(c){const a=p4();return(e,s)=>{const r=M4("font-awesome-icon");return K(),s2("div",{id:"heading-wrapper",onMousedown:s[3]||(s[3]=P3(()=>{},["prevent"]))},[j("div",bU,[j("div",CU,[j("button",{class:"button",tabindex:"-1",onClick:s[0]||(s[0]=i=>Z(a).toggleOverlay("settings"))},[Y(r,{icon:"fa-solid fa-gear"})]),j("button",{class:"button",tabindex:"-1",onClick:s[1]||(s[1]=i=>Z(a).toggleOverlay("stats"))},[Y(r,{icon:"fa-solid fa-chart-simple"})])]),LU,j("div",kU,[j("button",{class:"button",tabindex:"-1",onClick:s[2]||(s[2]=i=>Z(a).toggleOverlay("tutorial"))},[Y(r,{icon:"fa-solid fa-circle-info"})]),Y(MU)])])],32)}}},xU=$2(wU,[["__scopeId","data-v-9a14bbc5"]]),NU={__name:"BoardTile",props:{rowNumber:{type:Number},tileId:{type:Number},char:{type:String},focused:{type:Boolean},isActive:{type:Boolean}},emits:["on-focus"],setup(c,{emit:a}){const e=k2(),s=c,r=a;function i(o){o.which===1&&(s.isActive?r("on-focus",s.tileId):e.gameData.finished||e.updateStyle(s.rowNumber-1,s.tileId))}return(o,n)=>(K(),s2("div",{class:T1(["tile",{flash:c.focused&&c.isActive}]),style:Y2([Z(e).readStyle(c.rowNumber-1,c.tileId),{cursor:Z(e).gameData.finished?"default":"pointer"}]),maxlength:"1",readonly:"",onMousedown:n[0]||(n[0]=l=>i(l))},R2(c.char.toUpperCase()),39))}},SU=$2(NU,[["__scopeId","data-v-5001412c"]]),f4=p2({isClicked:0,char:"",setChar(c){this.isClicked++,this.char=c}}),AU=["tabindex"],TU={__name:"BoardTiles",props:{rowNumber:{type:Number},currentGuess:{type:String},isActive:{type:Boolean}},emits:["on-enter","on-click"],setup(c,{emit:a}){const e=v4(),s=k2().numberOfTiles,r=a,i=c,o=p2(null),n=p2(Array.from(i.currentGuess)),l=p2(0),t=p2(new Set);Q3(()=>{i.rowNumber===k2().rowsToRender&&o.value.focus()}),S2(()=>k2().gameData.finished,()=>{o.value.blur()}),S2(()=>p4().isBeingToggled,z=>{z&&i.isActive&&o.value.focus()}),S2(()=>f4.value.isClicked,()=>{i.isActive&&document.activeElement===o.value&&(f(f4.value.char),k(f4.value.char))});function f(z,g=null){p4().overlayEnabled||!i.isActive||t.value.has(z)||(t.value.add(z),g!==null&&g.preventDefault(),/^[a-zA-Z]$/.test(z)?(n.value[l.value]=z,u()):/^[1-5]$/.test(z)?v(z-1):z==="Backspace"||z==="Delete"?(n.value[l.value]===" "&&d(),n.value[l.value]=" "):z==="Enter"?b(n.value):z==="Tab"||z==="ArrowRight"?u():z==="ArrowLeft"&&d())}function u(){l.value>=s-1||l.value++}function d(){l.value=l.value<=0?l.value:l.value-1}function v(z){l.value=z}function k(z){t.value.delete(z)}function b(z){if(z.some(N=>N===" ")){e.handleAlert("Not Enough Letters");return}const g=z.join("").toLowerCase();if(!O(g)){e.handleAlert("Not in Wordlist");return}l.value=-1,o.value.blur(),o.value.removeAttribute("tabindex"),r("on-enter",g)}function O(z){const g=R6.length;let N=0,y=g-1;for(;N<=y;){let P=N+Math.floor((y-N)/2);if(R6[P]===z)return!0;R6[P]<z?N=P+1:y=P-1}return!1}return(z,g)=>(K(),s2("div",{ref_key:"tilesRef",ref:o,class:"tiles",tabindex:c.isActive?1:-1,onKeydown:g[0]||(g[0]=N=>f(N.key,N)),onKeyup:g[1]||(g[1]=N=>k(N.key))},[(K(!0),s2(y2,null,d1(Z(s),N=>(K(),l1(SU,{key:N,rowNumber:c.rowNumber,tileId:N-1,char:n.value[N-1],focused:l.value===N-1,isActive:c.isActive,onOnFocus:v},null,8,["rowNumber","tileId","char","focused","isActive"]))),128))],40,AU))}},PU=$2(TU,[["__scopeId","data-v-1821dab5"]]),FU=c=>{const a={};for(let e=1;e<=c;e++)a[e]=0;return a},R3=X4("userStats",()=>{const c=p2({totalPlayed:0,guessDistribution:FU(k2().maxGuesses)}),a=p2(0),e=p2(0);localStorage.getItem("userStats")&&(c.value=JSON.parse(localStorage.getItem("userStats")));function s(){const i=c.value.guessDistribution,{wonTotal:o,guessSum:n}=Object.values(i).reduce((l,t,f)=>({wonTotal:l.wonTotal+t,guessSum:l.guessSum+t*(f+1)}),{wonTotal:0,guessSum:0});o&&(c.value.totalPlayed=o>c.value.totalPlayed?o:c.value.totalPlayed,a.value=o<c.value.totalPlayed?Math.floor(o/c.value.totalPlayed*100):100,e.value=(n/o).toFixed(1))}S2(c,i=>{localStorage.setItem("userStats",JSON.stringify(i))},{deep:!0}),s();function r(){const i=Object.values(c.value.guessDistribution),o=Math.max(...i);return i.map(n=>4+(n?n/o*80:0))}return{stats:c,avg:e,winRate:a,getPixelSpan:r,calculateAvg:s}}),_U={class:"hints"},BU={__name:"BoardHints",props:{currentGuess:{type:String}},emits:["game-finished"],setup(c,{emit:a}){const e=R3().stats,s=k2(),r=s.gameData,{target:i,numberOfTiles:o,tileColours:n}=s,l=a,t=c,f=p2(t.currentGuess==="     "?[0,0,0]:u(t.currentGuess));S2(()=>t.currentGuess,k=>{const b=s.rowsToRender;f.value=u(k),r.rows.push(k);const O=f.value[0]===o,z=b>=s.maxGuesses;(O||z)&&(e.totalPlayed++,r.finished=!0,l("game-finished")),O&&(e.guessDistribution[b]++,R3().calculateAvg()),s.addStyleRow(),setTimeout(()=>{s.updateRows()},800)});function u(k){let b=0,O=0;const z=new Set(k);for(const g of z){b+=Math.min(d(g,k),d(g,i));for(let N=0;N<k.length;N++)g===k[N]&&g===i[N]&&(b-=1,O+=1)}return[O,b+O,o]}function d(k,b){return b.split(k).length-1}function v(k){if(t.currentGuess==="     ")return{backgroundColor:"white",border:"0.1rem solid lightgrey"};for(let b=0;b<f.value.length;b++)if(k<=f.value[b])return{backgroundColor:n[3-b],border:"0.1rem solid "+n[3-b],transitionDelay:.1*k+"s"}}return(k,b)=>(K(),s2("div",_U,[(K(!0),s2(y2,null,d1(Z(o),O=>(K(),s2("div",{class:"hint",key:O,style:Y2(v(O))},null,4))),128))]))}},DU=$2(BU,[["__scopeId","data-v-d9737cd0"]]),RU={class:"parent-row"},jU={class:"placeholder"},EU={class:"row"},$U={__name:"BoardRow",props:{rowNumber:{type:Number},currentGuess:{type:String},isActive:{type:Boolean}},emits:["game-finished"],setup(c){const a=k2().gameData.tileStyleMap,e=c,s=p2(e.currentGuess),r=p2(o(a[e.rowNumber-1]));S2(a[e.rowNumber-1],l=>{r.value=o(l)});function i(l){k2().clearStyleRow(l)}function o(l){return!!l.some(t=>t!==0)}function n(l){s.value=l}return(l,t)=>{const f=M4("font-awesome-icon");return K(),s2("div",RU,[j("div",jU,[Y(_1,{name:"show-button"},{default:n1(()=>[W6(j("button",{onClick:t[0]||(t[0]=u=>i(c.rowNumber-1)),tabindex:"-1",class:"button"},[Y(f,{icon:"fa-solid fa-eraser"})],512),[[Z6,!Z(k2)().gameData.finished&&r.value]])]),_:1})]),j("div",EU,[Y(PU,{rowNumber:c.rowNumber,currentGuess:s.value,isActive:c.isActive,onOnEnter:n},null,8,["rowNumber","currentGuess","isActive"]),Y(DU,{currentGuess:s.value,onGameFinished:t[1]||(t[1]=u=>l.$emit("game-finished"))},null,8,["currentGuess"])])])}}},j6=$2($U,[["__scopeId","data-v-beb84474"]]),Jl=X4("settings",()=>{const c=p2({mmode:!1});localStorage.getItem("settings")&&(c.value=JSON.parse(localStorage.getItem("settings")));function a(){c.value.mmode=!c.value.mmode}return S2(c,e=>{localStorage.setItem("settings",JSON.stringify(e))},{deep:!0}),{settings:c,toggleMMode:a}}),qU={key:0,id:"timer"},OU={__name:"CounterTime",props:{enableTimer:{type:Boolean}},emits:["game-finished"],setup(c,{emit:a}){const e=k2(),s=a,r=c;return S2(()=>r.enableTimer,()=>{r.enableTimer||e.endTimer()}),S2(()=>e.gameData.rows.length,()=>{r.enableTimer&&e.startTimer()}),S2(()=>e.gameData.mmodeTime,i=>{i<=0&&s("game-finished")}),e.gameData.mmodeTime!=120&&r.enableTimer&&!e.gameData.finished&&e.startTimer(),(i,o)=>(K(),l1(_1,{mode:"out-in",name:"flip"},{default:n1(()=>[c.enableTimer?(K(),s2("div",qU,R2(Z(e).gameData.mmodeTime),1)):T4("",!0)]),_:1}))}},UU=$2(OU,[["__scopeId","data-v-d43e3ac1"]]),IU={__name:"CounterGuess",props:{remaining:{type:Number},enableTimer:{type:Boolean}},setup(c){return(a,e)=>(K(),s2("div",{id:"countdown-guess",style:Y2({transform:c.enableTimer?"translateX(-3rem)":"translateX(0rem)"})},[Y(_1,{mode:"out-in",name:"flip"},{default:n1(()=>[(K(),s2("div",{class:"number",key:c.remaining,style:Y2({"text-align":c.remaining<10?"center":"right"})},R2(c.remaining),5))]),_:1}),X1(" "+R2((c.remaining===1?"GUESS":"GUESSES")+" REMAINING"),1)],4))}},WU=$2(IU,[["__scopeId","data-v-e4b310b9"]]),GU={class:"countdown-wrapper"},KU={key:0,class:"countdown c"},YU={key:1,class:"countdown grats",style:{color:"transparent"}},XU={class:"msg"},QU={key:2,class:"countdown"},JU={class:"target"},ZU={__name:"TheCountdown",setup(c){const a=k2(),e=Jl(),s=a.target,r=p2(12-a.gameData.rows.length),i=[["VERY EASILY!",10],["AMAZING JOB!",8],["GREAT JOB!",5],["GOOD JOB!",1],["CLOSE ONE!",0]];function o(n){for(let l=0;l<i.length;l++)if(n>=i[l][1])return"YOU SOLVED IT, "+i[l][0]}return S2(()=>a.gameData.rows.length,n=>{r.value=12-n}),(n,l)=>(K(),s2("div",GU,[Y(_1,{mode:"out-in",name:"flip"},{default:n1(()=>[Z(a).gameData.finished?Z(a).gameData.rows.slice(-1)[0]===Z(s)?(K(),s2("div",YU,[j("div",XU,R2(o(r.value)),1),X1(" PLACEHOLDER ")])):(K(),s2("div",QU,[X1(" BAD LUCK, THE WORD IS "),j("div",JU,R2(Z(s).toUpperCase()),1)])):(K(),s2("div",KU,[Y(WU,{remaining:r.value,"enable-timer":Z(e).settings.mmode},null,8,["remaining","enable-timer"]),Y(UU,{"enable-timer":Z(e).settings.mmode,onGameFinished:l[0]||(l[0]=t=>n.$emit("game-finished"))},null,8,["enable-timer"])]))]),_:1})]))}},cI={__name:"KeyboardTile",props:{char:{type:String}},setup(c){return(a,e)=>(K(),s2("button",{class:"key-tile",style:Y2(Z(k2)().trackKeyboardTile(c.char)),onClick:e[0]||(e[0]=s=>Z(f4).setChar(c.char)),readonly:"",tabindex:"-1"},R2(c.char.toUpperCase()),5))}},aI={class:"key-row"},E6={__name:"KeyboardRow",props:{chars:{type:String}},setup(c){return(a,e)=>(K(),s2("div",aI,[(K(!0),s2(y2,null,d1(Array.from(c.chars),(s,r)=>(K(),l1(cI,{key:r,char:s},null,8,["char"]))),128))]))}},eI={id:"keyboard",tabindex:"-1"},sI={class:"key-row"},rI={__name:"TheKeyboard",setup(c){return(a,e)=>{const s=M4("font-awesome-icon");return K(),s2("div",eI,[Y(E6,{chars:"qwertyuiop"}),Y(E6,{chars:"asdfghjkl"}),j("div",sI,[j("button",{class:"key-tile tool",readonly:"",tabindex:"-1",onClick:e[0]||(e[0]=r=>Z(f4).setChar("Backspace"))},[Y(s,{icon:"fa-solid fa-delete-left"})]),Y(E6,{chars:"zxcvbnm"}),j("button",{class:"key-tile tool enter",readonly:"",tabindex:"-1",onClick:e[1]||(e[1]=r=>Z(f4).setChar("Enter"))}," ENTER ")])])}}},iI={id:"board"},oI={key:0,class:"rows snd"},nI={class:"rows"},lI={id:"footer"},tI={__name:"TheBoard",setup(c){const a=k2(),e=a.gameData,s=p4(),r=p2(window.innerWidth),i=()=>r.value=window.innerWidth;Q3(()=>window.addEventListener("resize",i)),S0(()=>window.removeEventListener("resize",i));const o=p2(null);S2(()=>a.rowsToRender,()=>{o.value!==null&&setTimeout(()=>{o.value.scrollTo({top:o.value.scrollHeight,behaviour:"smooth"})},0)});function n(f){return f-1<e.rows.length?e.rows[f-1]:"     "}function l(f){return!e.finished&&f===a.rowsToRender}function t(){k2().endTimer(),e.finished=!0,setTimeout(()=>{s.overlayEnabled||s.toggleOverlay("stats")},3200)}return R3().stats.totalPlayed<=0&&setTimeout(()=>{s.toggleOverlay("tutorial")},200),(f,u)=>(K(),s2("div",iI,[r.value>850?(K(),s2("div",{key:0,class:"table",style:Y2({transition:"width 2s ease, height 0.4s ease",height:Math.min(35,5+5*Z(a).rowsToRender)+"rem",width:Z(a).rowsToRender>6?"88rem":"42rem"})},[j("div",{class:"rows fst",style:Y2({"margin-right":Z(a).rowsToRender>6?"2.5rem":"auto"})},[Y(T6,{name:"add-row"},{default:n1(()=>[(K(!0),s2(y2,null,d1(Math.min(6,Z(a).rowsToRender),d=>(K(),l1(j6,{key:d,rowNumber:d,currentGuess:n(d),isActive:l(d),onGameFinished:t},null,8,["rowNumber","currentGuess","isActive"]))),128))]),_:1})],4),Z(a).rowsToRender>6?(K(),s2("div",oI,[Y(T6,{name:"add-row"},{default:n1(()=>[(K(!0),s2(y2,null,d1(Math.min(6,Z(a).rowsToRender-6),d=>(K(),l1(j6,{key:d,rowNumber:d+6,currentGuess:n(d+6),isActive:l(d+6),onGameFinished:t},null,8,["rowNumber","currentGuess","isActive"]))),128))]),_:1})])):T4("",!0)],4)):(K(),s2("div",{key:1,ref_key:"scrollTable",ref:o,class:"table mobile linebreak"},[j("div",nI,[Y(T6,{name:"add-row"},{default:n1(()=>[(K(!0),s2(y2,null,d1(Z(a).rowsToRender,d=>(K(),l1(j6,{key:d,rowNumber:d,currentGuess:n(d),isActive:l(d),onGameFinished:t},null,8,["rowNumber","currentGuess","isActive"]))),128))]),_:1})])],512)),j("div",lI,[Y(ZU,{onGameFinished:t}),Y(rI)])]))}},fI=$2(tI,[["__scopeId","data-v-916842c3"]]),Zl=c=>(w0("data-v-eb893330"),c=c(),x0(),c),mI={class:"stats"},uI=Zl(()=>j("div",{class:"title"},"Statistics",-1)),hI={class:"stat-grid"},dI={class:"stat"},pI={class:"stat"},vI={class:"stat"},zI=Zl(()=>j("div",{class:"guess"},"GUESS DISTRIBUTION",-1)),HI={class:"bars"},gI={class:"label"},VI={class:"number"},MI={__name:"TheStats",setup(c){const a=R3(),e=a.stats,s=a.getPixelSpan();let r=!1;function i(n){return n||"-"}function o(n){return!r&&n>=84?(r=!0,"rgb(110,110,110)"):"rgb(180,180,180)"}return(n,l)=>(K(),s2("div",mI,[uI,j("div",hI,[j("div",dI,[j("h1",null,R2(i(Z(e).totalPlayed)),1),X1(" PLAYED ")]),j("div",pI,[j("h1",null,R2(i(Z(a).winRate)),1),X1(" WIN %")]),j("div",vI,[j("h1",null,R2(i(Z(a).avg)),1),X1(" AVERAGE GUESS")])]),zI,j("div",HI,[(K(!0),s2(y2,null,d1(Z(s),(t,f)=>(K(),s2("div",{class:"bar",key:f},[j("div",gI,R2(f+1),1),j("div",{class:"tally",style:Y2({width:t+"%",backgroundColor:o(t)})},[j("h1",VI,R2(Object.values(Z(e).guessDistribution)[f]),1)],4)]))),128))])]))}},yI=$2(MI,[["__scopeId","data-v-eb893330"]]),bI={class:"row"},CI={class:"tiles"},LI={class:"hints"},kI={__name:"TutorialRow",props:{word:{type:String},code:{type:Array},styleMap:{type:Array}},setup(c){return(a,e)=>(K(),s2("div",bI,[j("div",CI,[(K(!0),s2(y2,null,d1(Array.from(c.word),(s,r)=>(K(),s2("div",{class:"tile",key:r,style:Y2(c.styleMap[0]===r?Z(k2)().getStyle(c.styleMap[1]):"")},R2(s),5))),128))]),j("div",LI,[(K(!0),s2(y2,null,d1(c.code,(s,r)=>(K(),s2("div",{class:T1(["tutorial-hint",s]),key:r},null,2))),128))])]))}},l7=$2(kI,[["__scopeId","data-v-6565ccc5"]]),wI={id:"tutorial"},xI=Of('<div id="intro"><h1>How To Play</h1><p> Played <a href="https://www.nytimes.com/games/wordle" tabindex="-1">Wordle</a>? This game is a lot harder! You have 12 attempts to guess the word, and each attempt will reveal five squares, marked with a certain colour. </p></div><div id="squares"><span><div class="tutorial-hint correct"></div><p>A green square means one of the letters is in the word, and in the correct position.</p></span><span><div class="tutorial-hint near"></div><p>An orange square means one of the letters is in the word, but not in the correct position.</p></span><span><div class="tutorial-hint incorrect"></div><p>A grey square means one of the letters is <b>not</b> in the word.</p></span></div><p id="order" class="linebreak"> However, the squares are always presented in the same order: first green, then orange, then grey. Therefore, the position of the squares <b>does not <i>necessarily</i> correspond</b> to the position of the letters in a guess. </p><p class="subtitle">Controls</p>',4),NI={id:"controls",class:"linebreak"},SI={class:"left-align"},AI=j("p",null," Use the arrow keys or click on a tile to enter a letter in a certain position. Press Return to submit a guess. ",-1),TI={class:"left-align"},PI=j("div",{class:"tutorial-hint rotate"},"H",-1),FI={id:"pointer"},_I=j("p",null,"Click on the tiles of your previous guesses to mark them with a colour. Click once to make a tile grey, twice for orange, and three times for green. ",-1),BI={class:"left-align"},DI=j("p",null," Click the eraser at the left of each guess to remove all marks from the tiles on that guess. ",-1),RI={id:"example"},jI=j("p",{class:"subtitle"},"An Example",-1),EI=j("p",{id:"logic"}," Since R is the only letter that has changed in the second guess, R must be in the word, and in the correct place, so it can be marked green. Conversely, as R was swapped for P, P cannot be in the word, and can be marked grey. ",-1),$I={__name:"TheTutorial",setup(c){return(a,e)=>{const s=M4("font-awesome-icon");return K(),s2("div",wI,[xI,j("div",NI,[j("span",null,[j("div",SI,[Y(s,{class:"caret",icon:"fa-solid fa-square-caret-left",size:"2x"}),Y(s,{class:"caret",icon:"fa-solid fa-square-caret-right",size:"2x"})]),AI]),j("span",null,[j("div",TI,[PI,j("div",FI,[Y(s,{class:"icon",icon:"fa-regular fa-border fa-hand-pointer",size:"2x"})])]),_I]),j("span",null,[j("div",BI,[Y(s,{style:{color:"var(--text-light)"},icon:"fa-solid fa-eraser",size:"2x"})]),DI])]),j("div",RI,[jI,Y(l7,{word:"SHARE",code:["correct","near","near","incorrect","incorrect"],styleMap:[3,3]}),Y(l7,{word:"SHAPE",code:["near","near","incorrect","incorrect","incorrect"],styleMap:[3,1]}),EI])])}}},ct=c=>(w0("data-v-f03aa370"),c=c(),x0(),c),qI={id:"settings"},OI=ct(()=>j("div",{class:"title"}," Settings ",-1)),UI={id:"mode"},II=ct(()=>j("div",{class:"wrapper"},[j("div",{class:"setting"},"Masochist Mode"),j("div",null," Removes all the 'fun' from the game by introducing a two minute timer. Word games have never been more stressful. ")],-1)),WI={__name:"TheSettings",setup(c){const a=Jl(),{gameData:e}=k2();function s(){a.settings.mmode||e.finished||e.rows.length===0?a.toggleMMode():v4().handleAlert("Cannot be Toggled as Game is in Progress")}return(r,i)=>(K(),s2("div",qI,[OI,j("span",UI,[II,j("label",{class:T1(["switch",{active:Z(a).settings.mmode}])},[j("input",{type:"checkbox",onChange:i[0]||(i[0]=o=>s())},null,32),j("span",{class:T1(["slider",Z(a).settings.mmode?"slider-right":"slider-left"])},null,2)],2)])]))}},GI=$2(WI,[["__scopeId","data-v-f03aa370"]]),KI={__name:"TheOverlay",setup(c){const a=p4();return(e,s)=>{const r=M4("font-awesome-icon");return K(),s2("div",{id:"overlay-wrapper",onClick:s[1]||(s[1]=P3(i=>Z(a).handleOverlayClick(),["self"]))},[j("div",{id:"overlay",class:T1({out:!Z(a).overlayEnabled})},[j("button",{class:"close",tabindex:"-1",onClick:s[0]||(s[0]=P3(i=>Z(a).handleOverlayClick(),["stop"]))},[Y(r,{icon:"fa-solid fa-x"})]),Z(a).overlayId==="stats"?(K(),l1(yI,{key:0})):T4("",!0),Z(a).overlayId==="tutorial"?(K(),l1($I,{key:1})):T4("",!0),Z(a).overlayId==="settings"?(K(),l1(GI,{key:2})):T4("",!0)],2)])}}},YI=$2(KI,[["__scopeId","data-v-e695fd71"]]),XI={id:"alert"},QI={__name:"BoardAlert",setup(c){return(a,e)=>(K(),s2("div",XI,[j("h1",null,R2(Z(v4)().message),1)]))}},JI={id:"body"},ZI={__name:"App",setup(c){return(a,e)=>(K(),s2("div",{id:"wrapper",onMousedown:e[0]||(e[0]=P3(()=>{},["prevent"]))},[j("div",JI,[Y(xU),Y(fI),Y(_1,{name:"overlay"},{default:n1(()=>[W6(Y(YI,null,null,512),[[Z6,Z(p4)().overlayEnabled]])]),_:1}),Y(_1,{name:"alert"},{default:n1(()=>[W6(Y(QI,null,null,512),[[Z6,Z(v4)().alertEnabled]])]),_:1})])],32))}},cW=$2(ZI,[["__scopeId","data-v-e51012d4"]]);Wc.add(UE);Wc.add(cU);const aW=_m(),W8=Tm(cW);W8.use(aW);W8.component("font-awesome-icon",uU);W8.mount("#app");