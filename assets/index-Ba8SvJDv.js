(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function uE(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Cx={exports:{}},Jc={},Rx={exports:{}},Ke={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bo=Symbol.for("react.element"),dE=Symbol.for("react.portal"),fE=Symbol.for("react.fragment"),hE=Symbol.for("react.strict_mode"),pE=Symbol.for("react.profiler"),mE=Symbol.for("react.provider"),gE=Symbol.for("react.context"),vE=Symbol.for("react.forward_ref"),xE=Symbol.for("react.suspense"),yE=Symbol.for("react.memo"),_E=Symbol.for("react.lazy"),ig=Symbol.iterator;function SE(t){return t===null||typeof t!="object"?null:(t=ig&&t[ig]||t["@@iterator"],typeof t=="function"?t:null)}var Px={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Nx=Object.assign,Lx={};function va(t,e,n){this.props=t,this.context=e,this.refs=Lx,this.updater=n||Px}va.prototype.isReactComponent={};va.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};va.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Dx(){}Dx.prototype=va.prototype;function Jh(t,e,n){this.props=t,this.context=e,this.refs=Lx,this.updater=n||Px}var Qh=Jh.prototype=new Dx;Qh.constructor=Jh;Nx(Qh,va.prototype);Qh.isPureReactComponent=!0;var rg=Array.isArray,Ix=Object.prototype.hasOwnProperty,ep={current:null},Ux={key:!0,ref:!0,__self:!0,__source:!0};function Fx(t,e,n){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)Ix.call(e,i)&&!Ux.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var l=Array(o),c=0;c<o;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:Bo,type:t,key:s,ref:a,props:r,_owner:ep.current}}function ME(t,e){return{$$typeof:Bo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function tp(t){return typeof t=="object"&&t!==null&&t.$$typeof===Bo}function EE(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var sg=/\/+/g;function Ru(t,e){return typeof t=="object"&&t!==null&&t.key!=null?EE(""+t.key):e.toString(36)}function Yl(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case Bo:case dE:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+Ru(a,0):i,rg(r)?(n="",t!=null&&(n=t.replace(sg,"$&/")+"/"),Yl(r,e,n,"",function(c){return c})):r!=null&&(tp(r)&&(r=ME(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(sg,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",rg(t))for(var o=0;o<t.length;o++){s=t[o];var l=i+Ru(s,o);a+=Yl(s,e,n,l,r)}else if(l=SE(t),typeof l=="function")for(t=l.call(t),o=0;!(s=t.next()).done;)s=s.value,l=i+Ru(s,o++),a+=Yl(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function Qo(t,e,n){if(t==null)return t;var i=[],r=0;return Yl(t,i,"","",function(s){return e.call(n,s,r++)}),i}function TE(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var mn={current:null},$l={transition:null},wE={ReactCurrentDispatcher:mn,ReactCurrentBatchConfig:$l,ReactCurrentOwner:ep};function Ox(){throw Error("act(...) is not supported in production builds of React.")}Ke.Children={map:Qo,forEach:function(t,e,n){Qo(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Qo(t,function(){e++}),e},toArray:function(t){return Qo(t,function(e){return e})||[]},only:function(t){if(!tp(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ke.Component=va;Ke.Fragment=fE;Ke.Profiler=pE;Ke.PureComponent=Jh;Ke.StrictMode=hE;Ke.Suspense=xE;Ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=wE;Ke.act=Ox;Ke.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Nx({},t.props),r=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=ep.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(l in e)Ix.call(e,l)&&!Ux.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){o=Array(l);for(var c=0;c<l;c++)o[c]=arguments[c+2];i.children=o}return{$$typeof:Bo,type:t.type,key:r,ref:s,props:i,_owner:a}};Ke.createContext=function(t){return t={$$typeof:gE,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:mE,_context:t},t.Consumer=t};Ke.createElement=Fx;Ke.createFactory=function(t){var e=Fx.bind(null,t);return e.type=t,e};Ke.createRef=function(){return{current:null}};Ke.forwardRef=function(t){return{$$typeof:vE,render:t}};Ke.isValidElement=tp;Ke.lazy=function(t){return{$$typeof:_E,_payload:{_status:-1,_result:t},_init:TE}};Ke.memo=function(t,e){return{$$typeof:yE,type:t,compare:e===void 0?null:e}};Ke.startTransition=function(t){var e=$l.transition;$l.transition={};try{t()}finally{$l.transition=e}};Ke.unstable_act=Ox;Ke.useCallback=function(t,e){return mn.current.useCallback(t,e)};Ke.useContext=function(t){return mn.current.useContext(t)};Ke.useDebugValue=function(){};Ke.useDeferredValue=function(t){return mn.current.useDeferredValue(t)};Ke.useEffect=function(t,e){return mn.current.useEffect(t,e)};Ke.useId=function(){return mn.current.useId()};Ke.useImperativeHandle=function(t,e,n){return mn.current.useImperativeHandle(t,e,n)};Ke.useInsertionEffect=function(t,e){return mn.current.useInsertionEffect(t,e)};Ke.useLayoutEffect=function(t,e){return mn.current.useLayoutEffect(t,e)};Ke.useMemo=function(t,e){return mn.current.useMemo(t,e)};Ke.useReducer=function(t,e,n){return mn.current.useReducer(t,e,n)};Ke.useRef=function(t){return mn.current.useRef(t)};Ke.useState=function(t){return mn.current.useState(t)};Ke.useSyncExternalStore=function(t,e,n){return mn.current.useSyncExternalStore(t,e,n)};Ke.useTransition=function(){return mn.current.useTransition()};Ke.version="18.3.1";Rx.exports=Ke;var se=Rx.exports;const ag=uE(se);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var AE=se,bE=Symbol.for("react.element"),CE=Symbol.for("react.fragment"),RE=Object.prototype.hasOwnProperty,PE=AE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,NE={key:!0,ref:!0,__self:!0,__source:!0};function kx(t,e,n){var i,r={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)RE.call(e,i)&&!NE.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:bE,type:t,key:s,ref:a,props:r,_owner:PE.current}}Jc.Fragment=CE;Jc.jsx=kx;Jc.jsxs=kx;Cx.exports=Jc;var m=Cx.exports,Bx={exports:{}},On={},Vx={exports:{}},zx={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(z,V){var b=z.length;z.push(V);e:for(;0<b;){var C=b-1>>>1,J=z[C];if(0<r(J,V))z[C]=V,z[b]=J,b=C;else break e}}function n(z){return z.length===0?null:z[0]}function i(z){if(z.length===0)return null;var V=z[0],b=z.pop();if(b!==V){z[0]=b;e:for(var C=0,J=z.length,ne=J>>>1;C<ne;){var de=2*(C+1)-1,pe=z[de],me=de+1,I=z[me];if(0>r(pe,b))me<J&&0>r(I,pe)?(z[C]=I,z[me]=b,C=me):(z[C]=pe,z[de]=b,C=de);else if(me<J&&0>r(I,b))z[C]=I,z[me]=b,C=me;else break e}}return V}function r(z,V){var b=z.sortIndex-V.sortIndex;return b!==0?b:z.id-V.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();t.unstable_now=function(){return a.now()-o}}var l=[],c=[],d=1,f=null,u=3,p=!1,x=!1,M=!1,v=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function S(z){for(var V=n(c);V!==null;){if(V.callback===null)i(c);else if(V.startTime<=z)i(c),V.sortIndex=V.expirationTime,e(l,V);else break;V=n(c)}}function _(z){if(M=!1,S(z),!x)if(n(l)!==null)x=!0,ee(T);else{var V=n(c);V!==null&&W(_,V.startTime-z)}}function T(z,V){x=!1,M&&(M=!1,h(y),y=-1),p=!0;var b=u;try{for(S(V),f=n(l);f!==null&&(!(f.expirationTime>V)||z&&!D());){var C=f.callback;if(typeof C=="function"){f.callback=null,u=f.priorityLevel;var J=C(f.expirationTime<=V);V=t.unstable_now(),typeof J=="function"?f.callback=J:f===n(l)&&i(l),S(V)}else i(l);f=n(l)}if(f!==null)var ne=!0;else{var de=n(c);de!==null&&W(_,de.startTime-V),ne=!1}return ne}finally{f=null,u=b,p=!1}}var w=!1,R=null,y=-1,P=5,L=-1;function D(){return!(t.unstable_now()-L<P)}function B(){if(R!==null){var z=t.unstable_now();L=z;var V=!0;try{V=R(!0,z)}finally{V?Y():(w=!1,R=null)}}else w=!1}var Y;if(typeof g=="function")Y=function(){g(B)};else if(typeof MessageChannel<"u"){var k=new MessageChannel,X=k.port2;k.port1.onmessage=B,Y=function(){X.postMessage(null)}}else Y=function(){v(B,0)};function ee(z){R=z,w||(w=!0,Y())}function W(z,V){y=v(function(){z(t.unstable_now())},V)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(z){z.callback=null},t.unstable_continueExecution=function(){x||p||(x=!0,ee(T))},t.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<z?Math.floor(1e3/z):5},t.unstable_getCurrentPriorityLevel=function(){return u},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(z){switch(u){case 1:case 2:case 3:var V=3;break;default:V=u}var b=u;u=V;try{return z()}finally{u=b}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(z,V){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var b=u;u=z;try{return V()}finally{u=b}},t.unstable_scheduleCallback=function(z,V,b){var C=t.unstable_now();switch(typeof b=="object"&&b!==null?(b=b.delay,b=typeof b=="number"&&0<b?C+b:C):b=C,z){case 1:var J=-1;break;case 2:J=250;break;case 5:J=1073741823;break;case 4:J=1e4;break;default:J=5e3}return J=b+J,z={id:d++,callback:V,priorityLevel:z,startTime:b,expirationTime:J,sortIndex:-1},b>C?(z.sortIndex=b,e(c,z),n(l)===null&&z===n(c)&&(M?(h(y),y=-1):M=!0,W(_,b-C))):(z.sortIndex=J,e(l,z),x||p||(x=!0,ee(T))),z},t.unstable_shouldYield=D,t.unstable_wrapCallback=function(z){var V=u;return function(){var b=u;u=V;try{return z.apply(this,arguments)}finally{u=b}}}})(zx);Vx.exports=zx;var LE=Vx.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var DE=se,Un=LE;function ce(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Hx=new Set,fo={};function fs(t,e){sa(t,e),sa(t+"Capture",e)}function sa(t,e){for(fo[t]=e,t=0;t<e.length;t++)Hx.add(e[t])}var $i=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Kd=Object.prototype.hasOwnProperty,IE=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,og={},lg={};function UE(t){return Kd.call(lg,t)?!0:Kd.call(og,t)?!1:IE.test(t)?lg[t]=!0:(og[t]=!0,!1)}function FE(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function OE(t,e,n,i){if(e===null||typeof e>"u"||FE(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function gn(t,e,n,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var Zt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Zt[t]=new gn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Zt[e]=new gn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Zt[t]=new gn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Zt[t]=new gn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Zt[t]=new gn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Zt[t]=new gn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Zt[t]=new gn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Zt[t]=new gn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Zt[t]=new gn(t,5,!1,t.toLowerCase(),null,!1,!1)});var np=/[\-:]([a-z])/g;function ip(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(np,ip);Zt[e]=new gn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(np,ip);Zt[e]=new gn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(np,ip);Zt[e]=new gn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Zt[t]=new gn(t,1,!1,t.toLowerCase(),null,!1,!1)});Zt.xlinkHref=new gn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Zt[t]=new gn(t,1,!1,t.toLowerCase(),null,!0,!0)});function rp(t,e,n,i){var r=Zt.hasOwnProperty(e)?Zt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(OE(e,n,r,i)&&(n=null),i||r===null?UE(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var er=DE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,el=Symbol.for("react.element"),Ds=Symbol.for("react.portal"),Is=Symbol.for("react.fragment"),sp=Symbol.for("react.strict_mode"),Zd=Symbol.for("react.profiler"),Gx=Symbol.for("react.provider"),Wx=Symbol.for("react.context"),ap=Symbol.for("react.forward_ref"),Jd=Symbol.for("react.suspense"),Qd=Symbol.for("react.suspense_list"),op=Symbol.for("react.memo"),dr=Symbol.for("react.lazy"),jx=Symbol.for("react.offscreen"),cg=Symbol.iterator;function Aa(t){return t===null||typeof t!="object"?null:(t=cg&&t[cg]||t["@@iterator"],typeof t=="function"?t:null)}var bt=Object.assign,Pu;function Ha(t){if(Pu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Pu=e&&e[1]||""}return`
`+Pu+t}var Nu=!1;function Lu(t,e){if(!t||Nu)return"";Nu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var l=`
`+r[a].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=a&&0<=o);break}}}finally{Nu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ha(t):""}function kE(t){switch(t.tag){case 5:return Ha(t.type);case 16:return Ha("Lazy");case 13:return Ha("Suspense");case 19:return Ha("SuspenseList");case 0:case 2:case 15:return t=Lu(t.type,!1),t;case 11:return t=Lu(t.type.render,!1),t;case 1:return t=Lu(t.type,!0),t;default:return""}}function ef(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Is:return"Fragment";case Ds:return"Portal";case Zd:return"Profiler";case sp:return"StrictMode";case Jd:return"Suspense";case Qd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Wx:return(t.displayName||"Context")+".Consumer";case Gx:return(t._context.displayName||"Context")+".Provider";case ap:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case op:return e=t.displayName||null,e!==null?e:ef(t.type)||"Memo";case dr:e=t._payload,t=t._init;try{return ef(t(e))}catch{}}return null}function BE(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ef(e);case 8:return e===sp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Cr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Xx(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function VE(t){var e=Xx(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function tl(t){t._valueTracker||(t._valueTracker=VE(t))}function Yx(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Xx(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function pc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function tf(t,e){var n=e.checked;return bt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function ug(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Cr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function $x(t,e){e=e.checked,e!=null&&rp(t,"checked",e,!1)}function nf(t,e){$x(t,e);var n=Cr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?rf(t,e.type,n):e.hasOwnProperty("defaultValue")&&rf(t,e.type,Cr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function dg(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function rf(t,e,n){(e!=="number"||pc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ga=Array.isArray;function Zs(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Cr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function sf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ce(91));return bt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function fg(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ce(92));if(Ga(n)){if(1<n.length)throw Error(ce(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Cr(n)}}function qx(t,e){var n=Cr(e.value),i=Cr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function hg(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Kx(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function af(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Kx(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var nl,Zx=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(nl=nl||document.createElement("div"),nl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=nl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ho(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Za={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},zE=["Webkit","ms","Moz","O"];Object.keys(Za).forEach(function(t){zE.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Za[e]=Za[t]})});function Jx(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Za.hasOwnProperty(t)&&Za[t]?(""+e).trim():e+"px"}function Qx(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Jx(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var HE=bt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function of(t,e){if(e){if(HE[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ce(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ce(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ce(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ce(62))}}function lf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var cf=null;function lp(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var uf=null,Js=null,Qs=null;function pg(t){if(t=Ho(t)){if(typeof uf!="function")throw Error(ce(280));var e=t.stateNode;e&&(e=iu(e),uf(t.stateNode,t.type,e))}}function ey(t){Js?Qs?Qs.push(t):Qs=[t]:Js=t}function ty(){if(Js){var t=Js,e=Qs;if(Qs=Js=null,pg(t),e)for(t=0;t<e.length;t++)pg(e[t])}}function ny(t,e){return t(e)}function iy(){}var Du=!1;function ry(t,e,n){if(Du)return t(e,n);Du=!0;try{return ny(t,e,n)}finally{Du=!1,(Js!==null||Qs!==null)&&(iy(),ty())}}function po(t,e){var n=t.stateNode;if(n===null)return null;var i=iu(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ce(231,e,typeof n));return n}var df=!1;if($i)try{var ba={};Object.defineProperty(ba,"passive",{get:function(){df=!0}}),window.addEventListener("test",ba,ba),window.removeEventListener("test",ba,ba)}catch{df=!1}function GE(t,e,n,i,r,s,a,o,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var Ja=!1,mc=null,gc=!1,ff=null,WE={onError:function(t){Ja=!0,mc=t}};function jE(t,e,n,i,r,s,a,o,l){Ja=!1,mc=null,GE.apply(WE,arguments)}function XE(t,e,n,i,r,s,a,o,l){if(jE.apply(this,arguments),Ja){if(Ja){var c=mc;Ja=!1,mc=null}else throw Error(ce(198));gc||(gc=!0,ff=c)}}function hs(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function sy(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function mg(t){if(hs(t)!==t)throw Error(ce(188))}function YE(t){var e=t.alternate;if(!e){if(e=hs(t),e===null)throw Error(ce(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return mg(r),t;if(s===i)return mg(r),e;s=s.sibling}throw Error(ce(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===n){a=!0,n=r,i=s;break}if(o===i){a=!0,i=r,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,i=r;break}if(o===i){a=!0,i=s,n=r;break}o=o.sibling}if(!a)throw Error(ce(189))}}if(n.alternate!==i)throw Error(ce(190))}if(n.tag!==3)throw Error(ce(188));return n.stateNode.current===n?t:e}function ay(t){return t=YE(t),t!==null?oy(t):null}function oy(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=oy(t);if(e!==null)return e;t=t.sibling}return null}var ly=Un.unstable_scheduleCallback,gg=Un.unstable_cancelCallback,$E=Un.unstable_shouldYield,qE=Un.unstable_requestPaint,It=Un.unstable_now,KE=Un.unstable_getCurrentPriorityLevel,cp=Un.unstable_ImmediatePriority,cy=Un.unstable_UserBlockingPriority,vc=Un.unstable_NormalPriority,ZE=Un.unstable_LowPriority,uy=Un.unstable_IdlePriority,Qc=null,Ti=null;function JE(t){if(Ti&&typeof Ti.onCommitFiberRoot=="function")try{Ti.onCommitFiberRoot(Qc,t,void 0,(t.current.flags&128)===128)}catch{}}var li=Math.clz32?Math.clz32:tT,QE=Math.log,eT=Math.LN2;function tT(t){return t>>>=0,t===0?32:31-(QE(t)/eT|0)|0}var il=64,rl=4194304;function Wa(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function xc(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var o=a&~r;o!==0?i=Wa(o):(s&=a,s!==0&&(i=Wa(s)))}else a=n&~r,a!==0?i=Wa(a):s!==0&&(i=Wa(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-li(e),r=1<<n,i|=t[n],e&=~r;return i}function nT(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function iT(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-li(s),o=1<<a,l=r[a];l===-1?(!(o&n)||o&i)&&(r[a]=nT(o,e)):l<=e&&(t.expiredLanes|=o),s&=~o}}function hf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function dy(){var t=il;return il<<=1,!(il&4194240)&&(il=64),t}function Iu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Vo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-li(e),t[e]=n}function rT(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-li(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function up(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-li(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var lt=0;function fy(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var hy,dp,py,my,gy,pf=!1,sl=[],yr=null,_r=null,Sr=null,mo=new Map,go=new Map,pr=[],sT="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function vg(t,e){switch(t){case"focusin":case"focusout":yr=null;break;case"dragenter":case"dragleave":_r=null;break;case"mouseover":case"mouseout":Sr=null;break;case"pointerover":case"pointerout":mo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":go.delete(e.pointerId)}}function Ca(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Ho(e),e!==null&&dp(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function aT(t,e,n,i,r){switch(e){case"focusin":return yr=Ca(yr,t,e,n,i,r),!0;case"dragenter":return _r=Ca(_r,t,e,n,i,r),!0;case"mouseover":return Sr=Ca(Sr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return mo.set(s,Ca(mo.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,go.set(s,Ca(go.get(s)||null,t,e,n,i,r)),!0}return!1}function vy(t){var e=$r(t.target);if(e!==null){var n=hs(e);if(n!==null){if(e=n.tag,e===13){if(e=sy(n),e!==null){t.blockedOn=e,gy(t.priority,function(){py(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ql(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=mf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);cf=i,n.target.dispatchEvent(i),cf=null}else return e=Ho(n),e!==null&&dp(e),t.blockedOn=n,!1;e.shift()}return!0}function xg(t,e,n){ql(t)&&n.delete(e)}function oT(){pf=!1,yr!==null&&ql(yr)&&(yr=null),_r!==null&&ql(_r)&&(_r=null),Sr!==null&&ql(Sr)&&(Sr=null),mo.forEach(xg),go.forEach(xg)}function Ra(t,e){t.blockedOn===e&&(t.blockedOn=null,pf||(pf=!0,Un.unstable_scheduleCallback(Un.unstable_NormalPriority,oT)))}function vo(t){function e(r){return Ra(r,t)}if(0<sl.length){Ra(sl[0],t);for(var n=1;n<sl.length;n++){var i=sl[n];i.blockedOn===t&&(i.blockedOn=null)}}for(yr!==null&&Ra(yr,t),_r!==null&&Ra(_r,t),Sr!==null&&Ra(Sr,t),mo.forEach(e),go.forEach(e),n=0;n<pr.length;n++)i=pr[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<pr.length&&(n=pr[0],n.blockedOn===null);)vy(n),n.blockedOn===null&&pr.shift()}var ea=er.ReactCurrentBatchConfig,yc=!0;function lT(t,e,n,i){var r=lt,s=ea.transition;ea.transition=null;try{lt=1,fp(t,e,n,i)}finally{lt=r,ea.transition=s}}function cT(t,e,n,i){var r=lt,s=ea.transition;ea.transition=null;try{lt=4,fp(t,e,n,i)}finally{lt=r,ea.transition=s}}function fp(t,e,n,i){if(yc){var r=mf(t,e,n,i);if(r===null)Wu(t,e,i,_c,n),vg(t,i);else if(aT(r,t,e,n,i))i.stopPropagation();else if(vg(t,i),e&4&&-1<sT.indexOf(t)){for(;r!==null;){var s=Ho(r);if(s!==null&&hy(s),s=mf(t,e,n,i),s===null&&Wu(t,e,i,_c,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Wu(t,e,i,null,n)}}var _c=null;function mf(t,e,n,i){if(_c=null,t=lp(i),t=$r(t),t!==null)if(e=hs(t),e===null)t=null;else if(n=e.tag,n===13){if(t=sy(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return _c=t,null}function xy(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(KE()){case cp:return 1;case cy:return 4;case vc:case ZE:return 16;case uy:return 536870912;default:return 16}default:return 16}}var vr=null,hp=null,Kl=null;function yy(){if(Kl)return Kl;var t,e=hp,n=e.length,i,r="value"in vr?vr.value:vr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return Kl=r.slice(t,1<i?1-i:void 0)}function Zl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function al(){return!0}function yg(){return!1}function kn(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?al:yg,this.isPropagationStopped=yg,this}return bt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=al)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=al)},persist:function(){},isPersistent:al}),e}var xa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},pp=kn(xa),zo=bt({},xa,{view:0,detail:0}),uT=kn(zo),Uu,Fu,Pa,eu=bt({},zo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:mp,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Pa&&(Pa&&t.type==="mousemove"?(Uu=t.screenX-Pa.screenX,Fu=t.screenY-Pa.screenY):Fu=Uu=0,Pa=t),Uu)},movementY:function(t){return"movementY"in t?t.movementY:Fu}}),_g=kn(eu),dT=bt({},eu,{dataTransfer:0}),fT=kn(dT),hT=bt({},zo,{relatedTarget:0}),Ou=kn(hT),pT=bt({},xa,{animationName:0,elapsedTime:0,pseudoElement:0}),mT=kn(pT),gT=bt({},xa,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),vT=kn(gT),xT=bt({},xa,{data:0}),Sg=kn(xT),yT={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},_T={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ST={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function MT(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=ST[t])?!!e[t]:!1}function mp(){return MT}var ET=bt({},zo,{key:function(t){if(t.key){var e=yT[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Zl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?_T[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:mp,charCode:function(t){return t.type==="keypress"?Zl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Zl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),TT=kn(ET),wT=bt({},eu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Mg=kn(wT),AT=bt({},zo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:mp}),bT=kn(AT),CT=bt({},xa,{propertyName:0,elapsedTime:0,pseudoElement:0}),RT=kn(CT),PT=bt({},eu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),NT=kn(PT),LT=[9,13,27,32],gp=$i&&"CompositionEvent"in window,Qa=null;$i&&"documentMode"in document&&(Qa=document.documentMode);var DT=$i&&"TextEvent"in window&&!Qa,_y=$i&&(!gp||Qa&&8<Qa&&11>=Qa),Eg=" ",Tg=!1;function Sy(t,e){switch(t){case"keyup":return LT.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function My(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Us=!1;function IT(t,e){switch(t){case"compositionend":return My(e);case"keypress":return e.which!==32?null:(Tg=!0,Eg);case"textInput":return t=e.data,t===Eg&&Tg?null:t;default:return null}}function UT(t,e){if(Us)return t==="compositionend"||!gp&&Sy(t,e)?(t=yy(),Kl=hp=vr=null,Us=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return _y&&e.locale!=="ko"?null:e.data;default:return null}}var FT={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function wg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!FT[t.type]:e==="textarea"}function Ey(t,e,n,i){ey(i),e=Sc(e,"onChange"),0<e.length&&(n=new pp("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var eo=null,xo=null;function OT(t){Iy(t,0)}function tu(t){var e=ks(t);if(Yx(e))return t}function kT(t,e){if(t==="change")return e}var Ty=!1;if($i){var ku;if($i){var Bu="oninput"in document;if(!Bu){var Ag=document.createElement("div");Ag.setAttribute("oninput","return;"),Bu=typeof Ag.oninput=="function"}ku=Bu}else ku=!1;Ty=ku&&(!document.documentMode||9<document.documentMode)}function bg(){eo&&(eo.detachEvent("onpropertychange",wy),xo=eo=null)}function wy(t){if(t.propertyName==="value"&&tu(xo)){var e=[];Ey(e,xo,t,lp(t)),ry(OT,e)}}function BT(t,e,n){t==="focusin"?(bg(),eo=e,xo=n,eo.attachEvent("onpropertychange",wy)):t==="focusout"&&bg()}function VT(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return tu(xo)}function zT(t,e){if(t==="click")return tu(e)}function HT(t,e){if(t==="input"||t==="change")return tu(e)}function GT(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var fi=typeof Object.is=="function"?Object.is:GT;function yo(t,e){if(fi(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Kd.call(e,r)||!fi(t[r],e[r]))return!1}return!0}function Cg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Rg(t,e){var n=Cg(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Cg(n)}}function Ay(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Ay(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function by(){for(var t=window,e=pc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=pc(t.document)}return e}function vp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function WT(t){var e=by(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Ay(n.ownerDocument.documentElement,n)){if(i!==null&&vp(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Rg(n,s);var a=Rg(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var jT=$i&&"documentMode"in document&&11>=document.documentMode,Fs=null,gf=null,to=null,vf=!1;function Pg(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;vf||Fs==null||Fs!==pc(i)||(i=Fs,"selectionStart"in i&&vp(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),to&&yo(to,i)||(to=i,i=Sc(gf,"onSelect"),0<i.length&&(e=new pp("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Fs)))}function ol(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Os={animationend:ol("Animation","AnimationEnd"),animationiteration:ol("Animation","AnimationIteration"),animationstart:ol("Animation","AnimationStart"),transitionend:ol("Transition","TransitionEnd")},Vu={},Cy={};$i&&(Cy=document.createElement("div").style,"AnimationEvent"in window||(delete Os.animationend.animation,delete Os.animationiteration.animation,delete Os.animationstart.animation),"TransitionEvent"in window||delete Os.transitionend.transition);function nu(t){if(Vu[t])return Vu[t];if(!Os[t])return t;var e=Os[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Cy)return Vu[t]=e[n];return t}var Ry=nu("animationend"),Py=nu("animationiteration"),Ny=nu("animationstart"),Ly=nu("transitionend"),Dy=new Map,Ng="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Dr(t,e){Dy.set(t,e),fs(e,[t])}for(var zu=0;zu<Ng.length;zu++){var Hu=Ng[zu],XT=Hu.toLowerCase(),YT=Hu[0].toUpperCase()+Hu.slice(1);Dr(XT,"on"+YT)}Dr(Ry,"onAnimationEnd");Dr(Py,"onAnimationIteration");Dr(Ny,"onAnimationStart");Dr("dblclick","onDoubleClick");Dr("focusin","onFocus");Dr("focusout","onBlur");Dr(Ly,"onTransitionEnd");sa("onMouseEnter",["mouseout","mouseover"]);sa("onMouseLeave",["mouseout","mouseover"]);sa("onPointerEnter",["pointerout","pointerover"]);sa("onPointerLeave",["pointerout","pointerover"]);fs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));fs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));fs("onBeforeInput",["compositionend","keypress","textInput","paste"]);fs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));fs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));fs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ja="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),$T=new Set("cancel close invalid load scroll toggle".split(" ").concat(ja));function Lg(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,XE(i,e,void 0,t),t.currentTarget=null}function Iy(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==s&&r.isPropagationStopped())break e;Lg(r,o,c),s=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,c=o.currentTarget,o=o.listener,l!==s&&r.isPropagationStopped())break e;Lg(r,o,c),s=l}}}if(gc)throw t=ff,gc=!1,ff=null,t}function xt(t,e){var n=e[Mf];n===void 0&&(n=e[Mf]=new Set);var i=t+"__bubble";n.has(i)||(Uy(e,t,2,!1),n.add(i))}function Gu(t,e,n){var i=0;e&&(i|=4),Uy(n,t,i,e)}var ll="_reactListening"+Math.random().toString(36).slice(2);function _o(t){if(!t[ll]){t[ll]=!0,Hx.forEach(function(n){n!=="selectionchange"&&($T.has(n)||Gu(n,!1,t),Gu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ll]||(e[ll]=!0,Gu("selectionchange",!1,e))}}function Uy(t,e,n,i){switch(xy(e)){case 1:var r=lT;break;case 4:r=cT;break;default:r=fp}n=r.bind(null,e,n,t),r=void 0,!df||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Wu(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;o!==null;){if(a=$r(o),a===null)return;if(l=a.tag,l===5||l===6){i=s=a;continue e}o=o.parentNode}}i=i.return}ry(function(){var c=s,d=lp(n),f=[];e:{var u=Dy.get(t);if(u!==void 0){var p=pp,x=t;switch(t){case"keypress":if(Zl(n)===0)break e;case"keydown":case"keyup":p=TT;break;case"focusin":x="focus",p=Ou;break;case"focusout":x="blur",p=Ou;break;case"beforeblur":case"afterblur":p=Ou;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=_g;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=fT;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=bT;break;case Ry:case Py:case Ny:p=mT;break;case Ly:p=RT;break;case"scroll":p=uT;break;case"wheel":p=NT;break;case"copy":case"cut":case"paste":p=vT;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Mg}var M=(e&4)!==0,v=!M&&t==="scroll",h=M?u!==null?u+"Capture":null:u;M=[];for(var g=c,S;g!==null;){S=g;var _=S.stateNode;if(S.tag===5&&_!==null&&(S=_,h!==null&&(_=po(g,h),_!=null&&M.push(So(g,_,S)))),v)break;g=g.return}0<M.length&&(u=new p(u,x,null,n,d),f.push({event:u,listeners:M}))}}if(!(e&7)){e:{if(u=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",u&&n!==cf&&(x=n.relatedTarget||n.fromElement)&&($r(x)||x[qi]))break e;if((p||u)&&(u=d.window===d?d:(u=d.ownerDocument)?u.defaultView||u.parentWindow:window,p?(x=n.relatedTarget||n.toElement,p=c,x=x?$r(x):null,x!==null&&(v=hs(x),x!==v||x.tag!==5&&x.tag!==6)&&(x=null)):(p=null,x=c),p!==x)){if(M=_g,_="onMouseLeave",h="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(M=Mg,_="onPointerLeave",h="onPointerEnter",g="pointer"),v=p==null?u:ks(p),S=x==null?u:ks(x),u=new M(_,g+"leave",p,n,d),u.target=v,u.relatedTarget=S,_=null,$r(d)===c&&(M=new M(h,g+"enter",x,n,d),M.target=S,M.relatedTarget=v,_=M),v=_,p&&x)t:{for(M=p,h=x,g=0,S=M;S;S=xs(S))g++;for(S=0,_=h;_;_=xs(_))S++;for(;0<g-S;)M=xs(M),g--;for(;0<S-g;)h=xs(h),S--;for(;g--;){if(M===h||h!==null&&M===h.alternate)break t;M=xs(M),h=xs(h)}M=null}else M=null;p!==null&&Dg(f,u,p,M,!1),x!==null&&v!==null&&Dg(f,v,x,M,!0)}}e:{if(u=c?ks(c):window,p=u.nodeName&&u.nodeName.toLowerCase(),p==="select"||p==="input"&&u.type==="file")var T=kT;else if(wg(u))if(Ty)T=HT;else{T=VT;var w=BT}else(p=u.nodeName)&&p.toLowerCase()==="input"&&(u.type==="checkbox"||u.type==="radio")&&(T=zT);if(T&&(T=T(t,c))){Ey(f,T,n,d);break e}w&&w(t,u,c),t==="focusout"&&(w=u._wrapperState)&&w.controlled&&u.type==="number"&&rf(u,"number",u.value)}switch(w=c?ks(c):window,t){case"focusin":(wg(w)||w.contentEditable==="true")&&(Fs=w,gf=c,to=null);break;case"focusout":to=gf=Fs=null;break;case"mousedown":vf=!0;break;case"contextmenu":case"mouseup":case"dragend":vf=!1,Pg(f,n,d);break;case"selectionchange":if(jT)break;case"keydown":case"keyup":Pg(f,n,d)}var R;if(gp)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else Us?Sy(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(_y&&n.locale!=="ko"&&(Us||y!=="onCompositionStart"?y==="onCompositionEnd"&&Us&&(R=yy()):(vr=d,hp="value"in vr?vr.value:vr.textContent,Us=!0)),w=Sc(c,y),0<w.length&&(y=new Sg(y,t,null,n,d),f.push({event:y,listeners:w}),R?y.data=R:(R=My(n),R!==null&&(y.data=R)))),(R=DT?IT(t,n):UT(t,n))&&(c=Sc(c,"onBeforeInput"),0<c.length&&(d=new Sg("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:c}),d.data=R))}Iy(f,e)})}function So(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Sc(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=po(t,n),s!=null&&i.unshift(So(t,s,r)),s=po(t,e),s!=null&&i.push(So(t,s,r))),t=t.return}return i}function xs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Dg(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&c!==null&&(o=c,r?(l=po(n,s),l!=null&&a.unshift(So(n,l,o))):r||(l=po(n,s),l!=null&&a.push(So(n,l,o)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var qT=/\r\n?/g,KT=/\u0000|\uFFFD/g;function Ig(t){return(typeof t=="string"?t:""+t).replace(qT,`
`).replace(KT,"")}function cl(t,e,n){if(e=Ig(e),Ig(t)!==e&&n)throw Error(ce(425))}function Mc(){}var xf=null,yf=null;function _f(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Sf=typeof setTimeout=="function"?setTimeout:void 0,ZT=typeof clearTimeout=="function"?clearTimeout:void 0,Ug=typeof Promise=="function"?Promise:void 0,JT=typeof queueMicrotask=="function"?queueMicrotask:typeof Ug<"u"?function(t){return Ug.resolve(null).then(t).catch(QT)}:Sf;function QT(t){setTimeout(function(){throw t})}function ju(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),vo(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);vo(e)}function Mr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Fg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ya=Math.random().toString(36).slice(2),_i="__reactFiber$"+ya,Mo="__reactProps$"+ya,qi="__reactContainer$"+ya,Mf="__reactEvents$"+ya,ew="__reactListeners$"+ya,tw="__reactHandles$"+ya;function $r(t){var e=t[_i];if(e)return e;for(var n=t.parentNode;n;){if(e=n[qi]||n[_i]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Fg(t);t!==null;){if(n=t[_i])return n;t=Fg(t)}return e}t=n,n=t.parentNode}return null}function Ho(t){return t=t[_i]||t[qi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ks(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ce(33))}function iu(t){return t[Mo]||null}var Ef=[],Bs=-1;function Ir(t){return{current:t}}function yt(t){0>Bs||(t.current=Ef[Bs],Ef[Bs]=null,Bs--)}function pt(t,e){Bs++,Ef[Bs]=t.current,t.current=e}var Rr={},ln=Ir(Rr),_n=Ir(!1),rs=Rr;function aa(t,e){var n=t.type.contextTypes;if(!n)return Rr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function Sn(t){return t=t.childContextTypes,t!=null}function Ec(){yt(_n),yt(ln)}function Og(t,e,n){if(ln.current!==Rr)throw Error(ce(168));pt(ln,e),pt(_n,n)}function Fy(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ce(108,BE(t)||"Unknown",r));return bt({},n,i)}function Tc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Rr,rs=ln.current,pt(ln,t),pt(_n,_n.current),!0}function kg(t,e,n){var i=t.stateNode;if(!i)throw Error(ce(169));n?(t=Fy(t,e,rs),i.__reactInternalMemoizedMergedChildContext=t,yt(_n),yt(ln),pt(ln,t)):yt(_n),pt(_n,n)}var ki=null,ru=!1,Xu=!1;function Oy(t){ki===null?ki=[t]:ki.push(t)}function nw(t){ru=!0,Oy(t)}function Ur(){if(!Xu&&ki!==null){Xu=!0;var t=0,e=lt;try{var n=ki;for(lt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}ki=null,ru=!1}catch(r){throw ki!==null&&(ki=ki.slice(t+1)),ly(cp,Ur),r}finally{lt=e,Xu=!1}}return null}var Vs=[],zs=0,wc=null,Ac=0,Wn=[],jn=0,ss=null,Vi=1,zi="";function Wr(t,e){Vs[zs++]=Ac,Vs[zs++]=wc,wc=t,Ac=e}function ky(t,e,n){Wn[jn++]=Vi,Wn[jn++]=zi,Wn[jn++]=ss,ss=t;var i=Vi;t=zi;var r=32-li(i)-1;i&=~(1<<r),n+=1;var s=32-li(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,Vi=1<<32-li(e)+r|n<<r|i,zi=s+t}else Vi=1<<s|n<<r|i,zi=t}function xp(t){t.return!==null&&(Wr(t,1),ky(t,1,0))}function yp(t){for(;t===wc;)wc=Vs[--zs],Vs[zs]=null,Ac=Vs[--zs],Vs[zs]=null;for(;t===ss;)ss=Wn[--jn],Wn[jn]=null,zi=Wn[--jn],Wn[jn]=null,Vi=Wn[--jn],Wn[jn]=null}var Dn=null,Pn=null,St=!1,ri=null;function By(t,e){var n=Xn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Bg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Dn=t,Pn=Mr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Dn=t,Pn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ss!==null?{id:Vi,overflow:zi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Xn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Dn=t,Pn=null,!0):!1;default:return!1}}function Tf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function wf(t){if(St){var e=Pn;if(e){var n=e;if(!Bg(t,e)){if(Tf(t))throw Error(ce(418));e=Mr(n.nextSibling);var i=Dn;e&&Bg(t,e)?By(i,n):(t.flags=t.flags&-4097|2,St=!1,Dn=t)}}else{if(Tf(t))throw Error(ce(418));t.flags=t.flags&-4097|2,St=!1,Dn=t}}}function Vg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Dn=t}function ul(t){if(t!==Dn)return!1;if(!St)return Vg(t),St=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!_f(t.type,t.memoizedProps)),e&&(e=Pn)){if(Tf(t))throw Vy(),Error(ce(418));for(;e;)By(t,e),e=Mr(e.nextSibling)}if(Vg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ce(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Pn=Mr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Pn=null}}else Pn=Dn?Mr(t.stateNode.nextSibling):null;return!0}function Vy(){for(var t=Pn;t;)t=Mr(t.nextSibling)}function oa(){Pn=Dn=null,St=!1}function _p(t){ri===null?ri=[t]:ri.push(t)}var iw=er.ReactCurrentBatchConfig;function Na(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ce(309));var i=n.stateNode}if(!i)throw Error(ce(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(ce(284));if(!n._owner)throw Error(ce(290,t))}return t}function dl(t,e){throw t=Object.prototype.toString.call(e),Error(ce(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function zg(t){var e=t._init;return e(t._payload)}function zy(t){function e(h,g){if(t){var S=h.deletions;S===null?(h.deletions=[g],h.flags|=16):S.push(g)}}function n(h,g){if(!t)return null;for(;g!==null;)e(h,g),g=g.sibling;return null}function i(h,g){for(h=new Map;g!==null;)g.key!==null?h.set(g.key,g):h.set(g.index,g),g=g.sibling;return h}function r(h,g){return h=Ar(h,g),h.index=0,h.sibling=null,h}function s(h,g,S){return h.index=S,t?(S=h.alternate,S!==null?(S=S.index,S<g?(h.flags|=2,g):S):(h.flags|=2,g)):(h.flags|=1048576,g)}function a(h){return t&&h.alternate===null&&(h.flags|=2),h}function o(h,g,S,_){return g===null||g.tag!==6?(g=Qu(S,h.mode,_),g.return=h,g):(g=r(g,S),g.return=h,g)}function l(h,g,S,_){var T=S.type;return T===Is?d(h,g,S.props.children,_,S.key):g!==null&&(g.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===dr&&zg(T)===g.type)?(_=r(g,S.props),_.ref=Na(h,g,S),_.return=h,_):(_=rc(S.type,S.key,S.props,null,h.mode,_),_.ref=Na(h,g,S),_.return=h,_)}function c(h,g,S,_){return g===null||g.tag!==4||g.stateNode.containerInfo!==S.containerInfo||g.stateNode.implementation!==S.implementation?(g=ed(S,h.mode,_),g.return=h,g):(g=r(g,S.children||[]),g.return=h,g)}function d(h,g,S,_,T){return g===null||g.tag!==7?(g=ns(S,h.mode,_,T),g.return=h,g):(g=r(g,S),g.return=h,g)}function f(h,g,S){if(typeof g=="string"&&g!==""||typeof g=="number")return g=Qu(""+g,h.mode,S),g.return=h,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case el:return S=rc(g.type,g.key,g.props,null,h.mode,S),S.ref=Na(h,null,g),S.return=h,S;case Ds:return g=ed(g,h.mode,S),g.return=h,g;case dr:var _=g._init;return f(h,_(g._payload),S)}if(Ga(g)||Aa(g))return g=ns(g,h.mode,S,null),g.return=h,g;dl(h,g)}return null}function u(h,g,S,_){var T=g!==null?g.key:null;if(typeof S=="string"&&S!==""||typeof S=="number")return T!==null?null:o(h,g,""+S,_);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case el:return S.key===T?l(h,g,S,_):null;case Ds:return S.key===T?c(h,g,S,_):null;case dr:return T=S._init,u(h,g,T(S._payload),_)}if(Ga(S)||Aa(S))return T!==null?null:d(h,g,S,_,null);dl(h,S)}return null}function p(h,g,S,_,T){if(typeof _=="string"&&_!==""||typeof _=="number")return h=h.get(S)||null,o(g,h,""+_,T);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case el:return h=h.get(_.key===null?S:_.key)||null,l(g,h,_,T);case Ds:return h=h.get(_.key===null?S:_.key)||null,c(g,h,_,T);case dr:var w=_._init;return p(h,g,S,w(_._payload),T)}if(Ga(_)||Aa(_))return h=h.get(S)||null,d(g,h,_,T,null);dl(g,_)}return null}function x(h,g,S,_){for(var T=null,w=null,R=g,y=g=0,P=null;R!==null&&y<S.length;y++){R.index>y?(P=R,R=null):P=R.sibling;var L=u(h,R,S[y],_);if(L===null){R===null&&(R=P);break}t&&R&&L.alternate===null&&e(h,R),g=s(L,g,y),w===null?T=L:w.sibling=L,w=L,R=P}if(y===S.length)return n(h,R),St&&Wr(h,y),T;if(R===null){for(;y<S.length;y++)R=f(h,S[y],_),R!==null&&(g=s(R,g,y),w===null?T=R:w.sibling=R,w=R);return St&&Wr(h,y),T}for(R=i(h,R);y<S.length;y++)P=p(R,h,y,S[y],_),P!==null&&(t&&P.alternate!==null&&R.delete(P.key===null?y:P.key),g=s(P,g,y),w===null?T=P:w.sibling=P,w=P);return t&&R.forEach(function(D){return e(h,D)}),St&&Wr(h,y),T}function M(h,g,S,_){var T=Aa(S);if(typeof T!="function")throw Error(ce(150));if(S=T.call(S),S==null)throw Error(ce(151));for(var w=T=null,R=g,y=g=0,P=null,L=S.next();R!==null&&!L.done;y++,L=S.next()){R.index>y?(P=R,R=null):P=R.sibling;var D=u(h,R,L.value,_);if(D===null){R===null&&(R=P);break}t&&R&&D.alternate===null&&e(h,R),g=s(D,g,y),w===null?T=D:w.sibling=D,w=D,R=P}if(L.done)return n(h,R),St&&Wr(h,y),T;if(R===null){for(;!L.done;y++,L=S.next())L=f(h,L.value,_),L!==null&&(g=s(L,g,y),w===null?T=L:w.sibling=L,w=L);return St&&Wr(h,y),T}for(R=i(h,R);!L.done;y++,L=S.next())L=p(R,h,y,L.value,_),L!==null&&(t&&L.alternate!==null&&R.delete(L.key===null?y:L.key),g=s(L,g,y),w===null?T=L:w.sibling=L,w=L);return t&&R.forEach(function(B){return e(h,B)}),St&&Wr(h,y),T}function v(h,g,S,_){if(typeof S=="object"&&S!==null&&S.type===Is&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case el:e:{for(var T=S.key,w=g;w!==null;){if(w.key===T){if(T=S.type,T===Is){if(w.tag===7){n(h,w.sibling),g=r(w,S.props.children),g.return=h,h=g;break e}}else if(w.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===dr&&zg(T)===w.type){n(h,w.sibling),g=r(w,S.props),g.ref=Na(h,w,S),g.return=h,h=g;break e}n(h,w);break}else e(h,w);w=w.sibling}S.type===Is?(g=ns(S.props.children,h.mode,_,S.key),g.return=h,h=g):(_=rc(S.type,S.key,S.props,null,h.mode,_),_.ref=Na(h,g,S),_.return=h,h=_)}return a(h);case Ds:e:{for(w=S.key;g!==null;){if(g.key===w)if(g.tag===4&&g.stateNode.containerInfo===S.containerInfo&&g.stateNode.implementation===S.implementation){n(h,g.sibling),g=r(g,S.children||[]),g.return=h,h=g;break e}else{n(h,g);break}else e(h,g);g=g.sibling}g=ed(S,h.mode,_),g.return=h,h=g}return a(h);case dr:return w=S._init,v(h,g,w(S._payload),_)}if(Ga(S))return x(h,g,S,_);if(Aa(S))return M(h,g,S,_);dl(h,S)}return typeof S=="string"&&S!==""||typeof S=="number"?(S=""+S,g!==null&&g.tag===6?(n(h,g.sibling),g=r(g,S),g.return=h,h=g):(n(h,g),g=Qu(S,h.mode,_),g.return=h,h=g),a(h)):n(h,g)}return v}var la=zy(!0),Hy=zy(!1),bc=Ir(null),Cc=null,Hs=null,Sp=null;function Mp(){Sp=Hs=Cc=null}function Ep(t){var e=bc.current;yt(bc),t._currentValue=e}function Af(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function ta(t,e){Cc=t,Sp=Hs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(yn=!0),t.firstContext=null)}function $n(t){var e=t._currentValue;if(Sp!==t)if(t={context:t,memoizedValue:e,next:null},Hs===null){if(Cc===null)throw Error(ce(308));Hs=t,Cc.dependencies={lanes:0,firstContext:t}}else Hs=Hs.next=t;return e}var qr=null;function Tp(t){qr===null?qr=[t]:qr.push(t)}function Gy(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Tp(e)):(n.next=r.next,r.next=n),e.interleaved=n,Ki(t,i)}function Ki(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var fr=!1;function wp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Wy(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Gi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Er(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,nt&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Ki(t,n)}return r=i.interleaved,r===null?(e.next=e,Tp(i)):(e.next=r.next,r.next=e),i.interleaved=e,Ki(t,n)}function Jl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,up(t,n)}}function Hg(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Rc(t,e,n,i){var r=t.updateQueue;fr=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,c=l.next;l.next=null,a===null?s=c:a.next=c,a=l;var d=t.alternate;d!==null&&(d=d.updateQueue,o=d.lastBaseUpdate,o!==a&&(o===null?d.firstBaseUpdate=c:o.next=c,d.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;a=0,d=c=l=null,o=s;do{var u=o.lane,p=o.eventTime;if((i&u)===u){d!==null&&(d=d.next={eventTime:p,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var x=t,M=o;switch(u=e,p=n,M.tag){case 1:if(x=M.payload,typeof x=="function"){f=x.call(p,f,u);break e}f=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=M.payload,u=typeof x=="function"?x.call(p,f,u):x,u==null)break e;f=bt({},f,u);break e;case 2:fr=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,u=r.effects,u===null?r.effects=[o]:u.push(o))}else p={eventTime:p,lane:u,tag:o.tag,payload:o.payload,callback:o.callback,next:null},d===null?(c=d=p,l=f):d=d.next=p,a|=u;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;u=o,o=u.next,u.next=null,r.lastBaseUpdate=u,r.shared.pending=null}}while(!0);if(d===null&&(l=f),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=d,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);os|=a,t.lanes=a,t.memoizedState=f}}function Gg(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ce(191,r));r.call(i)}}}var Go={},wi=Ir(Go),Eo=Ir(Go),To=Ir(Go);function Kr(t){if(t===Go)throw Error(ce(174));return t}function Ap(t,e){switch(pt(To,e),pt(Eo,t),pt(wi,Go),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:af(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=af(e,t)}yt(wi),pt(wi,e)}function ca(){yt(wi),yt(Eo),yt(To)}function jy(t){Kr(To.current);var e=Kr(wi.current),n=af(e,t.type);e!==n&&(pt(Eo,t),pt(wi,n))}function bp(t){Eo.current===t&&(yt(wi),yt(Eo))}var Mt=Ir(0);function Pc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Yu=[];function Cp(){for(var t=0;t<Yu.length;t++)Yu[t]._workInProgressVersionPrimary=null;Yu.length=0}var Ql=er.ReactCurrentDispatcher,$u=er.ReactCurrentBatchConfig,as=0,wt=null,Bt=null,Wt=null,Nc=!1,no=!1,wo=0,rw=0;function Qt(){throw Error(ce(321))}function Rp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!fi(t[n],e[n]))return!1;return!0}function Pp(t,e,n,i,r,s){if(as=s,wt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ql.current=t===null||t.memoizedState===null?lw:cw,t=n(i,r),no){s=0;do{if(no=!1,wo=0,25<=s)throw Error(ce(301));s+=1,Wt=Bt=null,e.updateQueue=null,Ql.current=uw,t=n(i,r)}while(no)}if(Ql.current=Lc,e=Bt!==null&&Bt.next!==null,as=0,Wt=Bt=wt=null,Nc=!1,e)throw Error(ce(300));return t}function Np(){var t=wo!==0;return wo=0,t}function xi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Wt===null?wt.memoizedState=Wt=t:Wt=Wt.next=t,Wt}function qn(){if(Bt===null){var t=wt.alternate;t=t!==null?t.memoizedState:null}else t=Bt.next;var e=Wt===null?wt.memoizedState:Wt.next;if(e!==null)Wt=e,Bt=t;else{if(t===null)throw Error(ce(310));Bt=t,t={memoizedState:Bt.memoizedState,baseState:Bt.baseState,baseQueue:Bt.baseQueue,queue:Bt.queue,next:null},Wt===null?wt.memoizedState=Wt=t:Wt=Wt.next=t}return Wt}function Ao(t,e){return typeof e=="function"?e(t):e}function qu(t){var e=qn(),n=e.queue;if(n===null)throw Error(ce(311));n.lastRenderedReducer=t;var i=Bt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,l=null,c=s;do{var d=c.lane;if((as&d)===d)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(o=l=f,a=i):l=l.next=f,wt.lanes|=d,os|=d}c=c.next}while(c!==null&&c!==s);l===null?a=i:l.next=o,fi(i,e.memoizedState)||(yn=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,wt.lanes|=s,os|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Ku(t){var e=qn(),n=e.queue;if(n===null)throw Error(ce(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);fi(s,e.memoizedState)||(yn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Xy(){}function Yy(t,e){var n=wt,i=qn(),r=e(),s=!fi(i.memoizedState,r);if(s&&(i.memoizedState=r,yn=!0),i=i.queue,Lp(Ky.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Wt!==null&&Wt.memoizedState.tag&1){if(n.flags|=2048,bo(9,qy.bind(null,n,i,r,e),void 0,null),jt===null)throw Error(ce(349));as&30||$y(n,e,r)}return r}function $y(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=wt.updateQueue,e===null?(e={lastEffect:null,stores:null},wt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function qy(t,e,n,i){e.value=n,e.getSnapshot=i,Zy(e)&&Jy(t)}function Ky(t,e,n){return n(function(){Zy(e)&&Jy(t)})}function Zy(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!fi(t,n)}catch{return!0}}function Jy(t){var e=Ki(t,1);e!==null&&ci(e,t,1,-1)}function Wg(t){var e=xi();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ao,lastRenderedState:t},e.queue=t,t=t.dispatch=ow.bind(null,wt,t),[e.memoizedState,t]}function bo(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=wt.updateQueue,e===null?(e={lastEffect:null,stores:null},wt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Qy(){return qn().memoizedState}function ec(t,e,n,i){var r=xi();wt.flags|=t,r.memoizedState=bo(1|e,n,void 0,i===void 0?null:i)}function su(t,e,n,i){var r=qn();i=i===void 0?null:i;var s=void 0;if(Bt!==null){var a=Bt.memoizedState;if(s=a.destroy,i!==null&&Rp(i,a.deps)){r.memoizedState=bo(e,n,s,i);return}}wt.flags|=t,r.memoizedState=bo(1|e,n,s,i)}function jg(t,e){return ec(8390656,8,t,e)}function Lp(t,e){return su(2048,8,t,e)}function e_(t,e){return su(4,2,t,e)}function t_(t,e){return su(4,4,t,e)}function n_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function i_(t,e,n){return n=n!=null?n.concat([t]):null,su(4,4,n_.bind(null,e,t),n)}function Dp(){}function r_(t,e){var n=qn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Rp(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function s_(t,e){var n=qn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Rp(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function a_(t,e,n){return as&21?(fi(n,e)||(n=dy(),wt.lanes|=n,os|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,yn=!0),t.memoizedState=n)}function sw(t,e){var n=lt;lt=n!==0&&4>n?n:4,t(!0);var i=$u.transition;$u.transition={};try{t(!1),e()}finally{lt=n,$u.transition=i}}function o_(){return qn().memoizedState}function aw(t,e,n){var i=wr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},l_(t))c_(e,n);else if(n=Gy(t,e,n,i),n!==null){var r=fn();ci(n,t,i,r),u_(n,e,i)}}function ow(t,e,n){var i=wr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(l_(t))c_(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,n);if(r.hasEagerState=!0,r.eagerState=o,fi(o,a)){var l=e.interleaved;l===null?(r.next=r,Tp(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Gy(t,e,r,i),n!==null&&(r=fn(),ci(n,t,i,r),u_(n,e,i))}}function l_(t){var e=t.alternate;return t===wt||e!==null&&e===wt}function c_(t,e){no=Nc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function u_(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,up(t,n)}}var Lc={readContext:$n,useCallback:Qt,useContext:Qt,useEffect:Qt,useImperativeHandle:Qt,useInsertionEffect:Qt,useLayoutEffect:Qt,useMemo:Qt,useReducer:Qt,useRef:Qt,useState:Qt,useDebugValue:Qt,useDeferredValue:Qt,useTransition:Qt,useMutableSource:Qt,useSyncExternalStore:Qt,useId:Qt,unstable_isNewReconciler:!1},lw={readContext:$n,useCallback:function(t,e){return xi().memoizedState=[t,e===void 0?null:e],t},useContext:$n,useEffect:jg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,ec(4194308,4,n_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return ec(4194308,4,t,e)},useInsertionEffect:function(t,e){return ec(4,2,t,e)},useMemo:function(t,e){var n=xi();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=xi();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=aw.bind(null,wt,t),[i.memoizedState,t]},useRef:function(t){var e=xi();return t={current:t},e.memoizedState=t},useState:Wg,useDebugValue:Dp,useDeferredValue:function(t){return xi().memoizedState=t},useTransition:function(){var t=Wg(!1),e=t[0];return t=sw.bind(null,t[1]),xi().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=wt,r=xi();if(St){if(n===void 0)throw Error(ce(407));n=n()}else{if(n=e(),jt===null)throw Error(ce(349));as&30||$y(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,jg(Ky.bind(null,i,s,t),[t]),i.flags|=2048,bo(9,qy.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=xi(),e=jt.identifierPrefix;if(St){var n=zi,i=Vi;n=(i&~(1<<32-li(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=wo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=rw++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},cw={readContext:$n,useCallback:r_,useContext:$n,useEffect:Lp,useImperativeHandle:i_,useInsertionEffect:e_,useLayoutEffect:t_,useMemo:s_,useReducer:qu,useRef:Qy,useState:function(){return qu(Ao)},useDebugValue:Dp,useDeferredValue:function(t){var e=qn();return a_(e,Bt.memoizedState,t)},useTransition:function(){var t=qu(Ao)[0],e=qn().memoizedState;return[t,e]},useMutableSource:Xy,useSyncExternalStore:Yy,useId:o_,unstable_isNewReconciler:!1},uw={readContext:$n,useCallback:r_,useContext:$n,useEffect:Lp,useImperativeHandle:i_,useInsertionEffect:e_,useLayoutEffect:t_,useMemo:s_,useReducer:Ku,useRef:Qy,useState:function(){return Ku(Ao)},useDebugValue:Dp,useDeferredValue:function(t){var e=qn();return Bt===null?e.memoizedState=t:a_(e,Bt.memoizedState,t)},useTransition:function(){var t=Ku(Ao)[0],e=qn().memoizedState;return[t,e]},useMutableSource:Xy,useSyncExternalStore:Yy,useId:o_,unstable_isNewReconciler:!1};function ni(t,e){if(t&&t.defaultProps){e=bt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function bf(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:bt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var au={isMounted:function(t){return(t=t._reactInternals)?hs(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=fn(),r=wr(t),s=Gi(i,r);s.payload=e,n!=null&&(s.callback=n),e=Er(t,s,r),e!==null&&(ci(e,t,r,i),Jl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=fn(),r=wr(t),s=Gi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Er(t,s,r),e!==null&&(ci(e,t,r,i),Jl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=fn(),i=wr(t),r=Gi(n,i);r.tag=2,e!=null&&(r.callback=e),e=Er(t,r,i),e!==null&&(ci(e,t,i,n),Jl(e,t,i))}};function Xg(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!yo(n,i)||!yo(r,s):!0}function d_(t,e,n){var i=!1,r=Rr,s=e.contextType;return typeof s=="object"&&s!==null?s=$n(s):(r=Sn(e)?rs:ln.current,i=e.contextTypes,s=(i=i!=null)?aa(t,r):Rr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=au,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Yg(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&au.enqueueReplaceState(e,e.state,null)}function Cf(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},wp(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=$n(s):(s=Sn(e)?rs:ln.current,r.context=aa(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(bf(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&au.enqueueReplaceState(r,r.state,null),Rc(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function ua(t,e){try{var n="",i=e;do n+=kE(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Zu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Rf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var dw=typeof WeakMap=="function"?WeakMap:Map;function f_(t,e,n){n=Gi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Ic||(Ic=!0,Bf=i),Rf(t,e)},n}function h_(t,e,n){n=Gi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Rf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Rf(t,e),typeof i!="function"&&(Tr===null?Tr=new Set([this]):Tr.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function $g(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new dw;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=ww.bind(null,t,e,n),e.then(t,t))}function qg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Kg(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Gi(-1,1),e.tag=2,Er(n,e,1))),n.lanes|=1),t)}var fw=er.ReactCurrentOwner,yn=!1;function dn(t,e,n,i){e.child=t===null?Hy(e,null,n,i):la(e,t.child,n,i)}function Zg(t,e,n,i,r){n=n.render;var s=e.ref;return ta(e,r),i=Pp(t,e,n,i,s,r),n=Np(),t!==null&&!yn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Zi(t,e,r)):(St&&n&&xp(e),e.flags|=1,dn(t,e,i,r),e.child)}function Jg(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!zp(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,p_(t,e,s,i,r)):(t=rc(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:yo,n(a,i)&&t.ref===e.ref)return Zi(t,e,r)}return e.flags|=1,t=Ar(s,i),t.ref=e.ref,t.return=e,e.child=t}function p_(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(yo(s,i)&&t.ref===e.ref)if(yn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(yn=!0);else return e.lanes=t.lanes,Zi(t,e,r)}return Pf(t,e,n,i,r)}function m_(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},pt(Ws,bn),bn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,pt(Ws,bn),bn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,pt(Ws,bn),bn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,pt(Ws,bn),bn|=i;return dn(t,e,r,n),e.child}function g_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Pf(t,e,n,i,r){var s=Sn(n)?rs:ln.current;return s=aa(e,s),ta(e,r),n=Pp(t,e,n,i,s,r),i=Np(),t!==null&&!yn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Zi(t,e,r)):(St&&i&&xp(e),e.flags|=1,dn(t,e,n,r),e.child)}function Qg(t,e,n,i,r){if(Sn(n)){var s=!0;Tc(e)}else s=!1;if(ta(e,r),e.stateNode===null)tc(t,e),d_(e,n,i),Cf(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var l=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=$n(c):(c=Sn(n)?rs:ln.current,c=aa(e,c));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof a.getSnapshotBeforeUpdate=="function";f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||l!==c)&&Yg(e,a,i,c),fr=!1;var u=e.memoizedState;a.state=u,Rc(e,i,a,r),l=e.memoizedState,o!==i||u!==l||_n.current||fr?(typeof d=="function"&&(bf(e,n,d,i),l=e.memoizedState),(o=fr||Xg(e,n,o,i,u,l,c))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=c,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,Wy(t,e),o=e.memoizedProps,c=e.type===e.elementType?o:ni(e.type,o),a.props=c,f=e.pendingProps,u=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=$n(l):(l=Sn(n)?rs:ln.current,l=aa(e,l));var p=n.getDerivedStateFromProps;(d=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==f||u!==l)&&Yg(e,a,i,l),fr=!1,u=e.memoizedState,a.state=u,Rc(e,i,a,r);var x=e.memoizedState;o!==f||u!==x||_n.current||fr?(typeof p=="function"&&(bf(e,n,p,i),x=e.memoizedState),(c=fr||Xg(e,n,c,i,u,x,l)||!1)?(d||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,x,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,x,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&u===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&u===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=x),a.props=i,a.state=x,a.context=l,i=c):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&u===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&u===t.memoizedState||(e.flags|=1024),i=!1)}return Nf(t,e,n,i,s,r)}function Nf(t,e,n,i,r,s){g_(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&kg(e,n,!1),Zi(t,e,s);i=e.stateNode,fw.current=e;var o=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=la(e,t.child,null,s),e.child=la(e,null,o,s)):dn(t,e,o,s),e.memoizedState=i.state,r&&kg(e,n,!0),e.child}function v_(t){var e=t.stateNode;e.pendingContext?Og(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Og(t,e.context,!1),Ap(t,e.containerInfo)}function e0(t,e,n,i,r){return oa(),_p(r),e.flags|=256,dn(t,e,n,i),e.child}var Lf={dehydrated:null,treeContext:null,retryLane:0};function Df(t){return{baseLanes:t,cachePool:null,transitions:null}}function x_(t,e,n){var i=e.pendingProps,r=Mt.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),pt(Mt,r&1),t===null)return wf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=cu(a,i,0,null),t=ns(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Df(n),e.memoizedState=Lf,t):Ip(e,a));if(r=t.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return hw(t,e,a,i,o,r,n);if(s){s=i.fallback,a=e.mode,r=t.child,o=r.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Ar(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=Ar(o,s):(s=ns(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=t.child.memoizedState,a=a===null?Df(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=Lf,i}return s=t.child,t=s.sibling,i=Ar(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Ip(t,e){return e=cu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function fl(t,e,n,i){return i!==null&&_p(i),la(e,t.child,null,n),t=Ip(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function hw(t,e,n,i,r,s,a){if(n)return e.flags&256?(e.flags&=-257,i=Zu(Error(ce(422))),fl(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=cu({mode:"visible",children:i.children},r,0,null),s=ns(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&la(e,t.child,null,a),e.child.memoizedState=Df(a),e.memoizedState=Lf,s);if(!(e.mode&1))return fl(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(ce(419)),i=Zu(s,i,void 0),fl(t,e,a,i)}if(o=(a&t.childLanes)!==0,yn||o){if(i=jt,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Ki(t,r),ci(i,t,r,-1))}return Vp(),i=Zu(Error(ce(421))),fl(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=Aw.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Pn=Mr(r.nextSibling),Dn=e,St=!0,ri=null,t!==null&&(Wn[jn++]=Vi,Wn[jn++]=zi,Wn[jn++]=ss,Vi=t.id,zi=t.overflow,ss=e),e=Ip(e,i.children),e.flags|=4096,e)}function t0(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Af(t.return,e,n)}function Ju(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function y_(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(dn(t,e,i.children,n),i=Mt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&t0(t,n,e);else if(t.tag===19)t0(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(pt(Mt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Pc(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Ju(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Pc(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Ju(e,!0,n,null,s);break;case"together":Ju(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function tc(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Zi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),os|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ce(153));if(e.child!==null){for(t=e.child,n=Ar(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Ar(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function pw(t,e,n){switch(e.tag){case 3:v_(e),oa();break;case 5:jy(e);break;case 1:Sn(e.type)&&Tc(e);break;case 4:Ap(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;pt(bc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(pt(Mt,Mt.current&1),e.flags|=128,null):n&e.child.childLanes?x_(t,e,n):(pt(Mt,Mt.current&1),t=Zi(t,e,n),t!==null?t.sibling:null);pt(Mt,Mt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return y_(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),pt(Mt,Mt.current),i)break;return null;case 22:case 23:return e.lanes=0,m_(t,e,n)}return Zi(t,e,n)}var __,If,S_,M_;__=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};If=function(){};S_=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Kr(wi.current);var s=null;switch(n){case"input":r=tf(t,r),i=tf(t,i),s=[];break;case"select":r=bt({},r,{value:void 0}),i=bt({},i,{value:void 0}),s=[];break;case"textarea":r=sf(t,r),i=sf(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Mc)}of(n,i);var a;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var o=r[c];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(fo.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(o=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==o&&(l!=null||o!=null))if(c==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(fo.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&xt("scroll",t),s||o===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};M_=function(t,e,n,i){n!==i&&(e.flags|=4)};function La(t,e){if(!St)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function en(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function mw(t,e,n){var i=e.pendingProps;switch(yp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return en(e),null;case 1:return Sn(e.type)&&Ec(),en(e),null;case 3:return i=e.stateNode,ca(),yt(_n),yt(ln),Cp(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(ul(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ri!==null&&(Hf(ri),ri=null))),If(t,e),en(e),null;case 5:bp(e);var r=Kr(To.current);if(n=e.type,t!==null&&e.stateNode!=null)S_(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ce(166));return en(e),null}if(t=Kr(wi.current),ul(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[_i]=e,i[Mo]=s,t=(e.mode&1)!==0,n){case"dialog":xt("cancel",i),xt("close",i);break;case"iframe":case"object":case"embed":xt("load",i);break;case"video":case"audio":for(r=0;r<ja.length;r++)xt(ja[r],i);break;case"source":xt("error",i);break;case"img":case"image":case"link":xt("error",i),xt("load",i);break;case"details":xt("toggle",i);break;case"input":ug(i,s),xt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},xt("invalid",i);break;case"textarea":fg(i,s),xt("invalid",i)}of(n,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&cl(i.textContent,o,t),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&cl(i.textContent,o,t),r=["children",""+o]):fo.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&xt("scroll",i)}switch(n){case"input":tl(i),dg(i,s,!0);break;case"textarea":tl(i),hg(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Mc)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Kx(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[_i]=e,t[Mo]=i,__(t,e,!1,!1),e.stateNode=t;e:{switch(a=lf(n,i),n){case"dialog":xt("cancel",t),xt("close",t),r=i;break;case"iframe":case"object":case"embed":xt("load",t),r=i;break;case"video":case"audio":for(r=0;r<ja.length;r++)xt(ja[r],t);r=i;break;case"source":xt("error",t),r=i;break;case"img":case"image":case"link":xt("error",t),xt("load",t),r=i;break;case"details":xt("toggle",t),r=i;break;case"input":ug(t,i),r=tf(t,i),xt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=bt({},i,{value:void 0}),xt("invalid",t);break;case"textarea":fg(t,i),r=sf(t,i),xt("invalid",t);break;default:r=i}of(n,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?Qx(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Zx(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ho(t,l):typeof l=="number"&&ho(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(fo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&xt("scroll",t):l!=null&&rp(t,s,l,a))}switch(n){case"input":tl(t),dg(t,i,!1);break;case"textarea":tl(t),hg(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Cr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Zs(t,!!i.multiple,s,!1):i.defaultValue!=null&&Zs(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Mc)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return en(e),null;case 6:if(t&&e.stateNode!=null)M_(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ce(166));if(n=Kr(To.current),Kr(wi.current),ul(e)){if(i=e.stateNode,n=e.memoizedProps,i[_i]=e,(s=i.nodeValue!==n)&&(t=Dn,t!==null))switch(t.tag){case 3:cl(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&cl(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[_i]=e,e.stateNode=i}return en(e),null;case 13:if(yt(Mt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(St&&Pn!==null&&e.mode&1&&!(e.flags&128))Vy(),oa(),e.flags|=98560,s=!1;else if(s=ul(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ce(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ce(317));s[_i]=e}else oa(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;en(e),s=!1}else ri!==null&&(Hf(ri),ri=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||Mt.current&1?Vt===0&&(Vt=3):Vp())),e.updateQueue!==null&&(e.flags|=4),en(e),null);case 4:return ca(),If(t,e),t===null&&_o(e.stateNode.containerInfo),en(e),null;case 10:return Ep(e.type._context),en(e),null;case 17:return Sn(e.type)&&Ec(),en(e),null;case 19:if(yt(Mt),s=e.memoizedState,s===null)return en(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)La(s,!1);else{if(Vt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=Pc(t),a!==null){for(e.flags|=128,La(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return pt(Mt,Mt.current&1|2),e.child}t=t.sibling}s.tail!==null&&It()>da&&(e.flags|=128,i=!0,La(s,!1),e.lanes=4194304)}else{if(!i)if(t=Pc(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),La(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!St)return en(e),null}else 2*It()-s.renderingStartTime>da&&n!==1073741824&&(e.flags|=128,i=!0,La(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=It(),e.sibling=null,n=Mt.current,pt(Mt,i?n&1|2:n&1),e):(en(e),null);case 22:case 23:return Bp(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?bn&1073741824&&(en(e),e.subtreeFlags&6&&(e.flags|=8192)):en(e),null;case 24:return null;case 25:return null}throw Error(ce(156,e.tag))}function gw(t,e){switch(yp(e),e.tag){case 1:return Sn(e.type)&&Ec(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ca(),yt(_n),yt(ln),Cp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return bp(e),null;case 13:if(yt(Mt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ce(340));oa()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return yt(Mt),null;case 4:return ca(),null;case 10:return Ep(e.type._context),null;case 22:case 23:return Bp(),null;case 24:return null;default:return null}}var hl=!1,sn=!1,vw=typeof WeakSet=="function"?WeakSet:Set,Re=null;function Gs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Pt(t,e,i)}else n.current=null}function Uf(t,e,n){try{n()}catch(i){Pt(t,e,i)}}var n0=!1;function xw(t,e){if(xf=yc,t=by(),vp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,l=-1,c=0,d=0,f=t,u=null;t:for(;;){for(var p;f!==n||r!==0&&f.nodeType!==3||(o=a+r),f!==s||i!==0&&f.nodeType!==3||(l=a+i),f.nodeType===3&&(a+=f.nodeValue.length),(p=f.firstChild)!==null;)u=f,f=p;for(;;){if(f===t)break t;if(u===n&&++c===r&&(o=a),u===s&&++d===i&&(l=a),(p=f.nextSibling)!==null)break;f=u,u=f.parentNode}f=p}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(yf={focusedElem:t,selectionRange:n},yc=!1,Re=e;Re!==null;)if(e=Re,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Re=t;else for(;Re!==null;){e=Re;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var M=x.memoizedProps,v=x.memoizedState,h=e.stateNode,g=h.getSnapshotBeforeUpdate(e.elementType===e.type?M:ni(e.type,M),v);h.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var S=e.stateNode.containerInfo;S.nodeType===1?S.textContent="":S.nodeType===9&&S.documentElement&&S.removeChild(S.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ce(163))}}catch(_){Pt(e,e.return,_)}if(t=e.sibling,t!==null){t.return=e.return,Re=t;break}Re=e.return}return x=n0,n0=!1,x}function io(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Uf(e,n,s)}r=r.next}while(r!==i)}}function ou(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Ff(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function E_(t){var e=t.alternate;e!==null&&(t.alternate=null,E_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[_i],delete e[Mo],delete e[Mf],delete e[ew],delete e[tw])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function T_(t){return t.tag===5||t.tag===3||t.tag===4}function i0(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||T_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Of(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Mc));else if(i!==4&&(t=t.child,t!==null))for(Of(t,e,n),t=t.sibling;t!==null;)Of(t,e,n),t=t.sibling}function kf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(kf(t,e,n),t=t.sibling;t!==null;)kf(t,e,n),t=t.sibling}var Yt=null,ii=!1;function rr(t,e,n){for(n=n.child;n!==null;)w_(t,e,n),n=n.sibling}function w_(t,e,n){if(Ti&&typeof Ti.onCommitFiberUnmount=="function")try{Ti.onCommitFiberUnmount(Qc,n)}catch{}switch(n.tag){case 5:sn||Gs(n,e);case 6:var i=Yt,r=ii;Yt=null,rr(t,e,n),Yt=i,ii=r,Yt!==null&&(ii?(t=Yt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Yt.removeChild(n.stateNode));break;case 18:Yt!==null&&(ii?(t=Yt,n=n.stateNode,t.nodeType===8?ju(t.parentNode,n):t.nodeType===1&&ju(t,n),vo(t)):ju(Yt,n.stateNode));break;case 4:i=Yt,r=ii,Yt=n.stateNode.containerInfo,ii=!0,rr(t,e,n),Yt=i,ii=r;break;case 0:case 11:case 14:case 15:if(!sn&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&Uf(n,e,a),r=r.next}while(r!==i)}rr(t,e,n);break;case 1:if(!sn&&(Gs(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){Pt(n,e,o)}rr(t,e,n);break;case 21:rr(t,e,n);break;case 22:n.mode&1?(sn=(i=sn)||n.memoizedState!==null,rr(t,e,n),sn=i):rr(t,e,n);break;default:rr(t,e,n)}}function r0(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new vw),e.forEach(function(i){var r=bw.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Zn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:Yt=o.stateNode,ii=!1;break e;case 3:Yt=o.stateNode.containerInfo,ii=!0;break e;case 4:Yt=o.stateNode.containerInfo,ii=!0;break e}o=o.return}if(Yt===null)throw Error(ce(160));w_(s,a,r),Yt=null,ii=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Pt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)A_(e,t),e=e.sibling}function A_(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Zn(e,t),mi(t),i&4){try{io(3,t,t.return),ou(3,t)}catch(M){Pt(t,t.return,M)}try{io(5,t,t.return)}catch(M){Pt(t,t.return,M)}}break;case 1:Zn(e,t),mi(t),i&512&&n!==null&&Gs(n,n.return);break;case 5:if(Zn(e,t),mi(t),i&512&&n!==null&&Gs(n,n.return),t.flags&32){var r=t.stateNode;try{ho(r,"")}catch(M){Pt(t,t.return,M)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,o=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&$x(r,s),lf(o,a);var c=lf(o,s);for(a=0;a<l.length;a+=2){var d=l[a],f=l[a+1];d==="style"?Qx(r,f):d==="dangerouslySetInnerHTML"?Zx(r,f):d==="children"?ho(r,f):rp(r,d,f,c)}switch(o){case"input":nf(r,s);break;case"textarea":qx(r,s);break;case"select":var u=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Zs(r,!!s.multiple,p,!1):u!==!!s.multiple&&(s.defaultValue!=null?Zs(r,!!s.multiple,s.defaultValue,!0):Zs(r,!!s.multiple,s.multiple?[]:"",!1))}r[Mo]=s}catch(M){Pt(t,t.return,M)}}break;case 6:if(Zn(e,t),mi(t),i&4){if(t.stateNode===null)throw Error(ce(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(M){Pt(t,t.return,M)}}break;case 3:if(Zn(e,t),mi(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{vo(e.containerInfo)}catch(M){Pt(t,t.return,M)}break;case 4:Zn(e,t),mi(t);break;case 13:Zn(e,t),mi(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Op=It())),i&4&&r0(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(sn=(c=sn)||d,Zn(e,t),sn=c):Zn(e,t),mi(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(Re=t,d=t.child;d!==null;){for(f=Re=d;Re!==null;){switch(u=Re,p=u.child,u.tag){case 0:case 11:case 14:case 15:io(4,u,u.return);break;case 1:Gs(u,u.return);var x=u.stateNode;if(typeof x.componentWillUnmount=="function"){i=u,n=u.return;try{e=i,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(M){Pt(i,n,M)}}break;case 5:Gs(u,u.return);break;case 22:if(u.memoizedState!==null){a0(f);continue}}p!==null?(p.return=u,Re=p):a0(f)}d=d.sibling}e:for(d=null,f=t;;){if(f.tag===5){if(d===null){d=f;try{r=f.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=f.stateNode,l=f.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=Jx("display",a))}catch(M){Pt(t,t.return,M)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(M){Pt(t,t.return,M)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Zn(e,t),mi(t),i&4&&r0(t);break;case 21:break;default:Zn(e,t),mi(t)}}function mi(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(T_(n)){var i=n;break e}n=n.return}throw Error(ce(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(ho(r,""),i.flags&=-33);var s=i0(t);kf(t,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=i0(t);Of(t,o,a);break;default:throw Error(ce(161))}}catch(l){Pt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function yw(t,e,n){Re=t,b_(t)}function b_(t,e,n){for(var i=(t.mode&1)!==0;Re!==null;){var r=Re,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||hl;if(!a){var o=r.alternate,l=o!==null&&o.memoizedState!==null||sn;o=hl;var c=sn;if(hl=a,(sn=l)&&!c)for(Re=r;Re!==null;)a=Re,l=a.child,a.tag===22&&a.memoizedState!==null?o0(r):l!==null?(l.return=a,Re=l):o0(r);for(;s!==null;)Re=s,b_(s),s=s.sibling;Re=r,hl=o,sn=c}s0(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Re=s):s0(t)}}function s0(t){for(;Re!==null;){var e=Re;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:sn||ou(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!sn)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:ni(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Gg(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Gg(e,a,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&vo(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ce(163))}sn||e.flags&512&&Ff(e)}catch(u){Pt(e,e.return,u)}}if(e===t){Re=null;break}if(n=e.sibling,n!==null){n.return=e.return,Re=n;break}Re=e.return}}function a0(t){for(;Re!==null;){var e=Re;if(e===t){Re=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Re=n;break}Re=e.return}}function o0(t){for(;Re!==null;){var e=Re;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{ou(4,e)}catch(l){Pt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Pt(e,r,l)}}var s=e.return;try{Ff(e)}catch(l){Pt(e,s,l)}break;case 5:var a=e.return;try{Ff(e)}catch(l){Pt(e,a,l)}}}catch(l){Pt(e,e.return,l)}if(e===t){Re=null;break}var o=e.sibling;if(o!==null){o.return=e.return,Re=o;break}Re=e.return}}var _w=Math.ceil,Dc=er.ReactCurrentDispatcher,Up=er.ReactCurrentOwner,Yn=er.ReactCurrentBatchConfig,nt=0,jt=null,Ot=null,Kt=0,bn=0,Ws=Ir(0),Vt=0,Co=null,os=0,lu=0,Fp=0,ro=null,xn=null,Op=0,da=1/0,Oi=null,Ic=!1,Bf=null,Tr=null,pl=!1,xr=null,Uc=0,so=0,Vf=null,nc=-1,ic=0;function fn(){return nt&6?It():nc!==-1?nc:nc=It()}function wr(t){return t.mode&1?nt&2&&Kt!==0?Kt&-Kt:iw.transition!==null?(ic===0&&(ic=dy()),ic):(t=lt,t!==0||(t=window.event,t=t===void 0?16:xy(t.type)),t):1}function ci(t,e,n,i){if(50<so)throw so=0,Vf=null,Error(ce(185));Vo(t,n,i),(!(nt&2)||t!==jt)&&(t===jt&&(!(nt&2)&&(lu|=n),Vt===4&&mr(t,Kt)),Mn(t,i),n===1&&nt===0&&!(e.mode&1)&&(da=It()+500,ru&&Ur()))}function Mn(t,e){var n=t.callbackNode;iT(t,e);var i=xc(t,t===jt?Kt:0);if(i===0)n!==null&&gg(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&gg(n),e===1)t.tag===0?nw(l0.bind(null,t)):Oy(l0.bind(null,t)),JT(function(){!(nt&6)&&Ur()}),n=null;else{switch(fy(i)){case 1:n=cp;break;case 4:n=cy;break;case 16:n=vc;break;case 536870912:n=uy;break;default:n=vc}n=U_(n,C_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function C_(t,e){if(nc=-1,ic=0,nt&6)throw Error(ce(327));var n=t.callbackNode;if(na()&&t.callbackNode!==n)return null;var i=xc(t,t===jt?Kt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Fc(t,i);else{e=i;var r=nt;nt|=2;var s=P_();(jt!==t||Kt!==e)&&(Oi=null,da=It()+500,ts(t,e));do try{Ew();break}catch(o){R_(t,o)}while(!0);Mp(),Dc.current=s,nt=r,Ot!==null?e=0:(jt=null,Kt=0,e=Vt)}if(e!==0){if(e===2&&(r=hf(t),r!==0&&(i=r,e=zf(t,r))),e===1)throw n=Co,ts(t,0),mr(t,i),Mn(t,It()),n;if(e===6)mr(t,i);else{if(r=t.current.alternate,!(i&30)&&!Sw(r)&&(e=Fc(t,i),e===2&&(s=hf(t),s!==0&&(i=s,e=zf(t,s))),e===1))throw n=Co,ts(t,0),mr(t,i),Mn(t,It()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ce(345));case 2:jr(t,xn,Oi);break;case 3:if(mr(t,i),(i&130023424)===i&&(e=Op+500-It(),10<e)){if(xc(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){fn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Sf(jr.bind(null,t,xn,Oi),e);break}jr(t,xn,Oi);break;case 4:if(mr(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-li(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=It()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*_w(i/1960))-i,10<i){t.timeoutHandle=Sf(jr.bind(null,t,xn,Oi),i);break}jr(t,xn,Oi);break;case 5:jr(t,xn,Oi);break;default:throw Error(ce(329))}}}return Mn(t,It()),t.callbackNode===n?C_.bind(null,t):null}function zf(t,e){var n=ro;return t.current.memoizedState.isDehydrated&&(ts(t,e).flags|=256),t=Fc(t,e),t!==2&&(e=xn,xn=n,e!==null&&Hf(e)),t}function Hf(t){xn===null?xn=t:xn.push.apply(xn,t)}function Sw(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!fi(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function mr(t,e){for(e&=~Fp,e&=~lu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-li(e),i=1<<n;t[n]=-1,e&=~i}}function l0(t){if(nt&6)throw Error(ce(327));na();var e=xc(t,0);if(!(e&1))return Mn(t,It()),null;var n=Fc(t,e);if(t.tag!==0&&n===2){var i=hf(t);i!==0&&(e=i,n=zf(t,i))}if(n===1)throw n=Co,ts(t,0),mr(t,e),Mn(t,It()),n;if(n===6)throw Error(ce(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,jr(t,xn,Oi),Mn(t,It()),null}function kp(t,e){var n=nt;nt|=1;try{return t(e)}finally{nt=n,nt===0&&(da=It()+500,ru&&Ur())}}function ls(t){xr!==null&&xr.tag===0&&!(nt&6)&&na();var e=nt;nt|=1;var n=Yn.transition,i=lt;try{if(Yn.transition=null,lt=1,t)return t()}finally{lt=i,Yn.transition=n,nt=e,!(nt&6)&&Ur()}}function Bp(){bn=Ws.current,yt(Ws)}function ts(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,ZT(n)),Ot!==null)for(n=Ot.return;n!==null;){var i=n;switch(yp(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Ec();break;case 3:ca(),yt(_n),yt(ln),Cp();break;case 5:bp(i);break;case 4:ca();break;case 13:yt(Mt);break;case 19:yt(Mt);break;case 10:Ep(i.type._context);break;case 22:case 23:Bp()}n=n.return}if(jt=t,Ot=t=Ar(t.current,null),Kt=bn=e,Vt=0,Co=null,Fp=lu=os=0,xn=ro=null,qr!==null){for(e=0;e<qr.length;e++)if(n=qr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}n.pending=i}qr=null}return t}function R_(t,e){do{var n=Ot;try{if(Mp(),Ql.current=Lc,Nc){for(var i=wt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Nc=!1}if(as=0,Wt=Bt=wt=null,no=!1,wo=0,Up.current=null,n===null||n.return===null){Vt=1,Co=e,Ot=null;break}e:{var s=t,a=n.return,o=n,l=e;if(e=Kt,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,d=o,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var u=d.alternate;u?(d.updateQueue=u.updateQueue,d.memoizedState=u.memoizedState,d.lanes=u.lanes):(d.updateQueue=null,d.memoizedState=null)}var p=qg(a);if(p!==null){p.flags&=-257,Kg(p,a,o,s,e),p.mode&1&&$g(s,c,e),e=p,l=c;var x=e.updateQueue;if(x===null){var M=new Set;M.add(l),e.updateQueue=M}else x.add(l);break e}else{if(!(e&1)){$g(s,c,e),Vp();break e}l=Error(ce(426))}}else if(St&&o.mode&1){var v=qg(a);if(v!==null){!(v.flags&65536)&&(v.flags|=256),Kg(v,a,o,s,e),_p(ua(l,o));break e}}s=l=ua(l,o),Vt!==4&&(Vt=2),ro===null?ro=[s]:ro.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var h=f_(s,l,e);Hg(s,h);break e;case 1:o=l;var g=s.type,S=s.stateNode;if(!(s.flags&128)&&(typeof g.getDerivedStateFromError=="function"||S!==null&&typeof S.componentDidCatch=="function"&&(Tr===null||!Tr.has(S)))){s.flags|=65536,e&=-e,s.lanes|=e;var _=h_(s,o,e);Hg(s,_);break e}}s=s.return}while(s!==null)}L_(n)}catch(T){e=T,Ot===n&&n!==null&&(Ot=n=n.return);continue}break}while(!0)}function P_(){var t=Dc.current;return Dc.current=Lc,t===null?Lc:t}function Vp(){(Vt===0||Vt===3||Vt===2)&&(Vt=4),jt===null||!(os&268435455)&&!(lu&268435455)||mr(jt,Kt)}function Fc(t,e){var n=nt;nt|=2;var i=P_();(jt!==t||Kt!==e)&&(Oi=null,ts(t,e));do try{Mw();break}catch(r){R_(t,r)}while(!0);if(Mp(),nt=n,Dc.current=i,Ot!==null)throw Error(ce(261));return jt=null,Kt=0,Vt}function Mw(){for(;Ot!==null;)N_(Ot)}function Ew(){for(;Ot!==null&&!$E();)N_(Ot)}function N_(t){var e=I_(t.alternate,t,bn);t.memoizedProps=t.pendingProps,e===null?L_(t):Ot=e,Up.current=null}function L_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=gw(n,e),n!==null){n.flags&=32767,Ot=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Vt=6,Ot=null;return}}else if(n=mw(n,e,bn),n!==null){Ot=n;return}if(e=e.sibling,e!==null){Ot=e;return}Ot=e=t}while(e!==null);Vt===0&&(Vt=5)}function jr(t,e,n){var i=lt,r=Yn.transition;try{Yn.transition=null,lt=1,Tw(t,e,n,i)}finally{Yn.transition=r,lt=i}return null}function Tw(t,e,n,i){do na();while(xr!==null);if(nt&6)throw Error(ce(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ce(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(rT(t,s),t===jt&&(Ot=jt=null,Kt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||pl||(pl=!0,U_(vc,function(){return na(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Yn.transition,Yn.transition=null;var a=lt;lt=1;var o=nt;nt|=4,Up.current=null,xw(t,n),A_(n,t),WT(yf),yc=!!xf,yf=xf=null,t.current=n,yw(n),qE(),nt=o,lt=a,Yn.transition=s}else t.current=n;if(pl&&(pl=!1,xr=t,Uc=r),s=t.pendingLanes,s===0&&(Tr=null),JE(n.stateNode),Mn(t,It()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Ic)throw Ic=!1,t=Bf,Bf=null,t;return Uc&1&&t.tag!==0&&na(),s=t.pendingLanes,s&1?t===Vf?so++:(so=0,Vf=t):so=0,Ur(),null}function na(){if(xr!==null){var t=fy(Uc),e=Yn.transition,n=lt;try{if(Yn.transition=null,lt=16>t?16:t,xr===null)var i=!1;else{if(t=xr,xr=null,Uc=0,nt&6)throw Error(ce(331));var r=nt;for(nt|=4,Re=t.current;Re!==null;){var s=Re,a=s.child;if(Re.flags&16){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var c=o[l];for(Re=c;Re!==null;){var d=Re;switch(d.tag){case 0:case 11:case 15:io(8,d,s)}var f=d.child;if(f!==null)f.return=d,Re=f;else for(;Re!==null;){d=Re;var u=d.sibling,p=d.return;if(E_(d),d===c){Re=null;break}if(u!==null){u.return=p,Re=u;break}Re=p}}}var x=s.alternate;if(x!==null){var M=x.child;if(M!==null){x.child=null;do{var v=M.sibling;M.sibling=null,M=v}while(M!==null)}}Re=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,Re=a;else e:for(;Re!==null;){if(s=Re,s.flags&2048)switch(s.tag){case 0:case 11:case 15:io(9,s,s.return)}var h=s.sibling;if(h!==null){h.return=s.return,Re=h;break e}Re=s.return}}var g=t.current;for(Re=g;Re!==null;){a=Re;var S=a.child;if(a.subtreeFlags&2064&&S!==null)S.return=a,Re=S;else e:for(a=g;Re!==null;){if(o=Re,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:ou(9,o)}}catch(T){Pt(o,o.return,T)}if(o===a){Re=null;break e}var _=o.sibling;if(_!==null){_.return=o.return,Re=_;break e}Re=o.return}}if(nt=r,Ur(),Ti&&typeof Ti.onPostCommitFiberRoot=="function")try{Ti.onPostCommitFiberRoot(Qc,t)}catch{}i=!0}return i}finally{lt=n,Yn.transition=e}}return!1}function c0(t,e,n){e=ua(n,e),e=f_(t,e,1),t=Er(t,e,1),e=fn(),t!==null&&(Vo(t,1,e),Mn(t,e))}function Pt(t,e,n){if(t.tag===3)c0(t,t,n);else for(;e!==null;){if(e.tag===3){c0(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Tr===null||!Tr.has(i))){t=ua(n,t),t=h_(e,t,1),e=Er(e,t,1),t=fn(),e!==null&&(Vo(e,1,t),Mn(e,t));break}}e=e.return}}function ww(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=fn(),t.pingedLanes|=t.suspendedLanes&n,jt===t&&(Kt&n)===n&&(Vt===4||Vt===3&&(Kt&130023424)===Kt&&500>It()-Op?ts(t,0):Fp|=n),Mn(t,e)}function D_(t,e){e===0&&(t.mode&1?(e=rl,rl<<=1,!(rl&130023424)&&(rl=4194304)):e=1);var n=fn();t=Ki(t,e),t!==null&&(Vo(t,e,n),Mn(t,n))}function Aw(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),D_(t,n)}function bw(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ce(314))}i!==null&&i.delete(e),D_(t,n)}var I_;I_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||_n.current)yn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return yn=!1,pw(t,e,n);yn=!!(t.flags&131072)}else yn=!1,St&&e.flags&1048576&&ky(e,Ac,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;tc(t,e),t=e.pendingProps;var r=aa(e,ln.current);ta(e,n),r=Pp(null,e,i,t,r,n);var s=Np();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Sn(i)?(s=!0,Tc(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,wp(e),r.updater=au,e.stateNode=r,r._reactInternals=e,Cf(e,i,t,n),e=Nf(null,e,i,!0,s,n)):(e.tag=0,St&&s&&xp(e),dn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(tc(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Rw(i),t=ni(i,t),r){case 0:e=Pf(null,e,i,t,n);break e;case 1:e=Qg(null,e,i,t,n);break e;case 11:e=Zg(null,e,i,t,n);break e;case 14:e=Jg(null,e,i,ni(i.type,t),n);break e}throw Error(ce(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ni(i,r),Pf(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ni(i,r),Qg(t,e,i,r,n);case 3:e:{if(v_(e),t===null)throw Error(ce(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Wy(t,e),Rc(e,i,null,n);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=ua(Error(ce(423)),e),e=e0(t,e,i,n,r);break e}else if(i!==r){r=ua(Error(ce(424)),e),e=e0(t,e,i,n,r);break e}else for(Pn=Mr(e.stateNode.containerInfo.firstChild),Dn=e,St=!0,ri=null,n=Hy(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(oa(),i===r){e=Zi(t,e,n);break e}dn(t,e,i,n)}e=e.child}return e;case 5:return jy(e),t===null&&wf(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,_f(i,r)?a=null:s!==null&&_f(i,s)&&(e.flags|=32),g_(t,e),dn(t,e,a,n),e.child;case 6:return t===null&&wf(e),null;case 13:return x_(t,e,n);case 4:return Ap(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=la(e,null,i,n):dn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ni(i,r),Zg(t,e,i,r,n);case 7:return dn(t,e,e.pendingProps,n),e.child;case 8:return dn(t,e,e.pendingProps.children,n),e.child;case 12:return dn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,pt(bc,i._currentValue),i._currentValue=a,s!==null)if(fi(s.value,a)){if(s.children===r.children&&!_n.current){e=Zi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Gi(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?l.next=l:(l.next=d.next,d.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Af(s.return,n,e),o.lanes|=n;break}l=l.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(ce(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),Af(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}dn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,ta(e,n),r=$n(r),i=i(r),e.flags|=1,dn(t,e,i,n),e.child;case 14:return i=e.type,r=ni(i,e.pendingProps),r=ni(i.type,r),Jg(t,e,i,r,n);case 15:return p_(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ni(i,r),tc(t,e),e.tag=1,Sn(i)?(t=!0,Tc(e)):t=!1,ta(e,n),d_(e,i,r),Cf(e,i,r,n),Nf(null,e,i,!0,t,n);case 19:return y_(t,e,n);case 22:return m_(t,e,n)}throw Error(ce(156,e.tag))};function U_(t,e){return ly(t,e)}function Cw(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Xn(t,e,n,i){return new Cw(t,e,n,i)}function zp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Rw(t){if(typeof t=="function")return zp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===ap)return 11;if(t===op)return 14}return 2}function Ar(t,e){var n=t.alternate;return n===null?(n=Xn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function rc(t,e,n,i,r,s){var a=2;if(i=t,typeof t=="function")zp(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case Is:return ns(n.children,r,s,e);case sp:a=8,r|=8;break;case Zd:return t=Xn(12,n,e,r|2),t.elementType=Zd,t.lanes=s,t;case Jd:return t=Xn(13,n,e,r),t.elementType=Jd,t.lanes=s,t;case Qd:return t=Xn(19,n,e,r),t.elementType=Qd,t.lanes=s,t;case jx:return cu(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Gx:a=10;break e;case Wx:a=9;break e;case ap:a=11;break e;case op:a=14;break e;case dr:a=16,i=null;break e}throw Error(ce(130,t==null?t:typeof t,""))}return e=Xn(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function ns(t,e,n,i){return t=Xn(7,t,i,e),t.lanes=n,t}function cu(t,e,n,i){return t=Xn(22,t,i,e),t.elementType=jx,t.lanes=n,t.stateNode={isHidden:!1},t}function Qu(t,e,n){return t=Xn(6,t,null,e),t.lanes=n,t}function ed(t,e,n){return e=Xn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Pw(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Iu(0),this.expirationTimes=Iu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Iu(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Hp(t,e,n,i,r,s,a,o,l){return t=new Pw(t,e,n,o,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Xn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},wp(s),t}function Nw(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ds,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function F_(t){if(!t)return Rr;t=t._reactInternals;e:{if(hs(t)!==t||t.tag!==1)throw Error(ce(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Sn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ce(171))}if(t.tag===1){var n=t.type;if(Sn(n))return Fy(t,n,e)}return e}function O_(t,e,n,i,r,s,a,o,l){return t=Hp(n,i,!0,t,r,s,a,o,l),t.context=F_(null),n=t.current,i=fn(),r=wr(n),s=Gi(i,r),s.callback=e??null,Er(n,s,r),t.current.lanes=r,Vo(t,r,i),Mn(t,i),t}function uu(t,e,n,i){var r=e.current,s=fn(),a=wr(r);return n=F_(n),e.context===null?e.context=n:e.pendingContext=n,e=Gi(s,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Er(r,e,a),t!==null&&(ci(t,r,a,s),Jl(t,r,a)),a}function Oc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function u0(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Gp(t,e){u0(t,e),(t=t.alternate)&&u0(t,e)}function Lw(){return null}var k_=typeof reportError=="function"?reportError:function(t){console.error(t)};function Wp(t){this._internalRoot=t}du.prototype.render=Wp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ce(409));uu(t,e,null,null)};du.prototype.unmount=Wp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ls(function(){uu(null,t,null,null)}),e[qi]=null}};function du(t){this._internalRoot=t}du.prototype.unstable_scheduleHydration=function(t){if(t){var e=my();t={blockedOn:null,target:t,priority:e};for(var n=0;n<pr.length&&e!==0&&e<pr[n].priority;n++);pr.splice(n,0,t),n===0&&vy(t)}};function jp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function fu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function d0(){}function Dw(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Oc(a);s.call(c)}}var a=O_(e,i,t,0,null,!1,!1,"",d0);return t._reactRootContainer=a,t[qi]=a.current,_o(t.nodeType===8?t.parentNode:t),ls(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var c=Oc(l);o.call(c)}}var l=Hp(t,0,!1,null,null,!1,!1,"",d0);return t._reactRootContainer=l,t[qi]=l.current,_o(t.nodeType===8?t.parentNode:t),ls(function(){uu(e,l,n,i)}),l}function hu(t,e,n,i,r){var s=n._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var l=Oc(a);o.call(l)}}uu(e,a,t,r)}else a=Dw(n,e,t,r,i);return Oc(a)}hy=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Wa(e.pendingLanes);n!==0&&(up(e,n|1),Mn(e,It()),!(nt&6)&&(da=It()+500,Ur()))}break;case 13:ls(function(){var i=Ki(t,1);if(i!==null){var r=fn();ci(i,t,1,r)}}),Gp(t,1)}};dp=function(t){if(t.tag===13){var e=Ki(t,134217728);if(e!==null){var n=fn();ci(e,t,134217728,n)}Gp(t,134217728)}};py=function(t){if(t.tag===13){var e=wr(t),n=Ki(t,e);if(n!==null){var i=fn();ci(n,t,e,i)}Gp(t,e)}};my=function(){return lt};gy=function(t,e){var n=lt;try{return lt=t,e()}finally{lt=n}};uf=function(t,e,n){switch(e){case"input":if(nf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=iu(i);if(!r)throw Error(ce(90));Yx(i),nf(i,r)}}}break;case"textarea":qx(t,n);break;case"select":e=n.value,e!=null&&Zs(t,!!n.multiple,e,!1)}};ny=kp;iy=ls;var Iw={usingClientEntryPoint:!1,Events:[Ho,ks,iu,ey,ty,kp]},Da={findFiberByHostInstance:$r,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Uw={bundleType:Da.bundleType,version:Da.version,rendererPackageName:Da.rendererPackageName,rendererConfig:Da.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:er.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=ay(t),t===null?null:t.stateNode},findFiberByHostInstance:Da.findFiberByHostInstance||Lw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ml=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ml.isDisabled&&ml.supportsFiber)try{Qc=ml.inject(Uw),Ti=ml}catch{}}On.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Iw;On.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!jp(e))throw Error(ce(200));return Nw(t,e,null,n)};On.createRoot=function(t,e){if(!jp(t))throw Error(ce(299));var n=!1,i="",r=k_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Hp(t,1,!1,null,null,n,!1,i,r),t[qi]=e.current,_o(t.nodeType===8?t.parentNode:t),new Wp(e)};On.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ce(188)):(t=Object.keys(t).join(","),Error(ce(268,t)));return t=ay(e),t=t===null?null:t.stateNode,t};On.flushSync=function(t){return ls(t)};On.hydrate=function(t,e,n){if(!fu(e))throw Error(ce(200));return hu(null,t,e,!0,n)};On.hydrateRoot=function(t,e,n){if(!jp(t))throw Error(ce(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",a=k_;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=O_(e,null,t,1,n??null,r,!1,s,a),t[qi]=e.current,_o(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new du(e)};On.render=function(t,e,n){if(!fu(e))throw Error(ce(200));return hu(null,t,e,!1,n)};On.unmountComponentAtNode=function(t){if(!fu(t))throw Error(ce(40));return t._reactRootContainer?(ls(function(){hu(null,null,t,!1,function(){t._reactRootContainer=null,t[qi]=null})}),!0):!1};On.unstable_batchedUpdates=kp;On.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!fu(n))throw Error(ce(200));if(t==null||t._reactInternals===void 0)throw Error(ce(38));return hu(t,e,n,!1,i)};On.version="18.3.1-next-f1338f8080-20240426";function B_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(B_)}catch(t){console.error(t)}}B_(),Bx.exports=On;var Fw=Bx.exports,V_,f0=Fw;V_=f0.createRoot,f0.hydrateRoot;const Xp=se.createContext({});function Yp(t){const e=se.useRef(null);return e.current===null&&(e.current=t()),e.current}const pu=se.createContext(null),$p=se.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"});class Ow extends se.Component{getSnapshotBeforeUpdate(e){const n=this.props.childRef.current;if(n&&e.isPresent&&!this.props.isPresent){const i=this.props.sizeRef.current;i.height=n.offsetHeight||0,i.width=n.offsetWidth||0,i.top=n.offsetTop,i.left=n.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function kw({children:t,isPresent:e}){const n=se.useId(),i=se.useRef(null),r=se.useRef({width:0,height:0,top:0,left:0}),{nonce:s}=se.useContext($p);return se.useInsertionEffect(()=>{const{width:a,height:o,top:l,left:c}=r.current;if(e||!i.current||!a||!o)return;i.current.dataset.motionPopId=n;const d=document.createElement("style");return s&&(d.nonce=s),document.head.appendChild(d),d.sheet&&d.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${a}px !important;
            height: ${o}px !important;
            top: ${l}px !important;
            left: ${c}px !important;
          }
        `),()=>{document.head.removeChild(d)}},[e]),m.jsx(Ow,{isPresent:e,childRef:i,sizeRef:r,children:se.cloneElement(t,{ref:i})})}const Bw=({children:t,initial:e,isPresent:n,onExitComplete:i,custom:r,presenceAffectsLayout:s,mode:a})=>{const o=Yp(Vw),l=se.useId(),c=se.useCallback(f=>{o.set(f,!0);for(const u of o.values())if(!u)return;i&&i()},[o,i]),d=se.useMemo(()=>({id:l,initial:e,isPresent:n,custom:r,onExitComplete:c,register:f=>(o.set(f,!1),()=>o.delete(f))}),s?[Math.random(),c]:[n,c]);return se.useMemo(()=>{o.forEach((f,u)=>o.set(u,!1))},[n]),se.useEffect(()=>{!n&&!o.size&&i&&i()},[n]),a==="popLayout"&&(t=m.jsx(kw,{isPresent:n,children:t})),m.jsx(pu.Provider,{value:d,children:t})};function Vw(){return new Map}function z_(t=!0){const e=se.useContext(pu);if(e===null)return[!0,null];const{isPresent:n,onExitComplete:i,register:r}=e,s=se.useId();se.useEffect(()=>{t&&r(s)},[t]);const a=se.useCallback(()=>t&&i&&i(s),[s,i,t]);return!n&&i?[!1,a]:[!0]}const gl=t=>t.key||"";function h0(t){const e=[];return se.Children.forEach(t,n=>{se.isValidElement(n)&&e.push(n)}),e}const qp=typeof window<"u",H_=qp?se.useLayoutEffect:se.useEffect,mu=({children:t,custom:e,initial:n=!0,onExitComplete:i,presenceAffectsLayout:r=!0,mode:s="sync",propagate:a=!1})=>{const[o,l]=z_(a),c=se.useMemo(()=>h0(t),[t]),d=a&&!o?[]:c.map(gl),f=se.useRef(!0),u=se.useRef(c),p=Yp(()=>new Map),[x,M]=se.useState(c),[v,h]=se.useState(c);H_(()=>{f.current=!1,u.current=c;for(let _=0;_<v.length;_++){const T=gl(v[_]);d.includes(T)?p.delete(T):p.get(T)!==!0&&p.set(T,!1)}},[v,d.length,d.join("-")]);const g=[];if(c!==x){let _=[...c];for(let T=0;T<v.length;T++){const w=v[T],R=gl(w);d.includes(R)||(_.splice(T,0,w),g.push(w))}s==="wait"&&g.length&&(_=g),h(h0(_)),M(c);return}const{forceRender:S}=se.useContext(Xp);return m.jsx(m.Fragment,{children:v.map(_=>{const T=gl(_),w=a&&!o?!1:c===v||d.includes(T),R=()=>{if(p.has(T))p.set(T,!0);else return;let y=!0;p.forEach(P=>{P||(y=!1)}),y&&(S==null||S(),h(u.current),a&&(l==null||l()),i&&i())};return m.jsx(Bw,{isPresent:w,initial:!f.current||n?void 0:!1,custom:w?void 0:e,presenceAffectsLayout:r,mode:s,onExitComplete:w?void 0:R,children:_},T)})})},In=t=>t;let G_=In;function Kp(t){let e;return()=>(e===void 0&&(e=t()),e)}const fa=(t,e,n)=>{const i=e-t;return i===0?1:(n-t)/i},Wi=t=>t*1e3,ji=t=>t/1e3,zw={useManualTiming:!1};function Hw(t){let e=new Set,n=new Set,i=!1,r=!1;const s=new WeakSet;let a={delta:0,timestamp:0,isProcessing:!1};function o(c){s.has(c)&&(l.schedule(c),t()),c(a)}const l={schedule:(c,d=!1,f=!1)=>{const p=f&&i?e:n;return d&&s.add(c),p.has(c)||p.add(c),c},cancel:c=>{n.delete(c),s.delete(c)},process:c=>{if(a=c,i){r=!0;return}i=!0,[e,n]=[n,e],e.forEach(o),e.clear(),i=!1,r&&(r=!1,l.process(c))}};return l}const vl=["read","resolveKeyframes","update","preRender","render","postRender"],Gw=40;function W_(t,e){let n=!1,i=!0;const r={delta:0,timestamp:0,isProcessing:!1},s=()=>n=!0,a=vl.reduce((h,g)=>(h[g]=Hw(s),h),{}),{read:o,resolveKeyframes:l,update:c,preRender:d,render:f,postRender:u}=a,p=()=>{const h=performance.now();n=!1,r.delta=i?1e3/60:Math.max(Math.min(h-r.timestamp,Gw),1),r.timestamp=h,r.isProcessing=!0,o.process(r),l.process(r),c.process(r),d.process(r),f.process(r),u.process(r),r.isProcessing=!1,n&&e&&(i=!1,t(p))},x=()=>{n=!0,i=!0,r.isProcessing||t(p)};return{schedule:vl.reduce((h,g)=>{const S=a[g];return h[g]=(_,T=!1,w=!1)=>(n||x(),S.schedule(_,T,w)),h},{}),cancel:h=>{for(let g=0;g<vl.length;g++)a[vl[g]].cancel(h)},state:r,steps:a}}const{schedule:_t,cancel:Pr,state:$t,steps:td}=W_(typeof requestAnimationFrame<"u"?requestAnimationFrame:In,!0),j_=se.createContext({strict:!1}),p0={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},ha={};for(const t in p0)ha[t]={isEnabled:e=>p0[t].some(n=>!!e[n])};function Ww(t){for(const e in t)ha[e]={...ha[e],...t[e]}}const jw=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function kc(t){return t.startsWith("while")||t.startsWith("drag")&&t!=="draggable"||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||jw.has(t)}let X_=t=>!kc(t);function Xw(t){t&&(X_=e=>e.startsWith("on")?!kc(e):t(e))}try{Xw(require("@emotion/is-prop-valid").default)}catch{}function Yw(t,e,n){const i={};for(const r in t)r==="values"&&typeof t.values=="object"||(X_(r)||n===!0&&kc(r)||!e&&!kc(r)||t.draggable&&r.startsWith("onDrag"))&&(i[r]=t[r]);return i}function $w(t){if(typeof Proxy>"u")return t;const e=new Map,n=(...i)=>t(...i);return new Proxy(n,{get:(i,r)=>r==="create"?t:(e.has(r)||e.set(r,t(r)),e.get(r))})}const gu=se.createContext({});function Ro(t){return typeof t=="string"||Array.isArray(t)}function vu(t){return t!==null&&typeof t=="object"&&typeof t.start=="function"}const Zp=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Jp=["initial",...Zp];function xu(t){return vu(t.animate)||Jp.some(e=>Ro(t[e]))}function Y_(t){return!!(xu(t)||t.variants)}function qw(t,e){if(xu(t)){const{initial:n,animate:i}=t;return{initial:n===!1||Ro(n)?n:void 0,animate:Ro(i)?i:void 0}}return t.inherit!==!1?e:{}}function Kw(t){const{initial:e,animate:n}=qw(t,se.useContext(gu));return se.useMemo(()=>({initial:e,animate:n}),[m0(e),m0(n)])}function m0(t){return Array.isArray(t)?t.join(" "):t}const Zw=Symbol.for("motionComponentSymbol");function js(t){return t&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,"current")}function Jw(t,e,n){return se.useCallback(i=>{i&&t.onMount&&t.onMount(i),e&&(i?e.mount(i):e.unmount()),n&&(typeof n=="function"?n(i):js(n)&&(n.current=i))},[e])}const Qp=t=>t.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),Qw="framerAppearId",$_="data-"+Qp(Qw),{schedule:em}=W_(queueMicrotask,!1),q_=se.createContext({});function e1(t,e,n,i,r){var s,a;const{visualElement:o}=se.useContext(gu),l=se.useContext(j_),c=se.useContext(pu),d=se.useContext($p).reducedMotion,f=se.useRef(null);i=i||l.renderer,!f.current&&i&&(f.current=i(t,{visualState:e,parent:o,props:n,presenceContext:c,blockInitialAnimation:c?c.initial===!1:!1,reducedMotionConfig:d}));const u=f.current,p=se.useContext(q_);u&&!u.projection&&r&&(u.type==="html"||u.type==="svg")&&t1(f.current,n,r,p);const x=se.useRef(!1);se.useInsertionEffect(()=>{u&&x.current&&u.update(n,c)});const M=n[$_],v=se.useRef(!!M&&!(!((s=window.MotionHandoffIsComplete)===null||s===void 0)&&s.call(window,M))&&((a=window.MotionHasOptimisedAnimation)===null||a===void 0?void 0:a.call(window,M)));return H_(()=>{u&&(x.current=!0,window.MotionIsMounted=!0,u.updateFeatures(),em.render(u.render),v.current&&u.animationState&&u.animationState.animateChanges())}),se.useEffect(()=>{u&&(!v.current&&u.animationState&&u.animationState.animateChanges(),v.current&&(queueMicrotask(()=>{var h;(h=window.MotionHandoffMarkAsComplete)===null||h===void 0||h.call(window,M)}),v.current=!1))}),u}function t1(t,e,n,i){const{layoutId:r,layout:s,drag:a,dragConstraints:o,layoutScroll:l,layoutRoot:c}=e;t.projection=new n(t.latestValues,e["data-framer-portal-id"]?void 0:K_(t.parent)),t.projection.setOptions({layoutId:r,layout:s,alwaysMeasureLayout:!!a||o&&js(o),visualElement:t,animationType:typeof s=="string"?s:"both",initialPromotionConfig:i,layoutScroll:l,layoutRoot:c})}function K_(t){if(t)return t.options.allowProjection!==!1?t.projection:K_(t.parent)}function n1({preloadedFeatures:t,createVisualElement:e,useRender:n,useVisualState:i,Component:r}){var s,a;t&&Ww(t);function o(c,d){let f;const u={...se.useContext($p),...c,layoutId:i1(c)},{isStatic:p}=u,x=Kw(c),M=i(c,p);if(!p&&qp){r1();const v=s1(u);f=v.MeasureLayout,x.visualElement=e1(r,M,u,e,v.ProjectionNode)}return m.jsxs(gu.Provider,{value:x,children:[f&&x.visualElement?m.jsx(f,{visualElement:x.visualElement,...u}):null,n(r,c,Jw(M,x.visualElement,d),M,p,x.visualElement)]})}o.displayName=`motion.${typeof r=="string"?r:`create(${(a=(s=r.displayName)!==null&&s!==void 0?s:r.name)!==null&&a!==void 0?a:""})`}`;const l=se.forwardRef(o);return l[Zw]=r,l}function i1({layoutId:t}){const e=se.useContext(Xp).id;return e&&t!==void 0?e+"-"+t:t}function r1(t,e){se.useContext(j_).strict}function s1(t){const{drag:e,layout:n}=ha;if(!e&&!n)return{};const i={...e,...n};return{MeasureLayout:e!=null&&e.isEnabled(t)||n!=null&&n.isEnabled(t)?i.MeasureLayout:void 0,ProjectionNode:i.ProjectionNode}}const a1=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function tm(t){return typeof t!="string"||t.includes("-")?!1:!!(a1.indexOf(t)>-1||/[A-Z]/u.test(t))}function g0(t){const e=[{},{}];return t==null||t.values.forEach((n,i)=>{e[0][i]=n.get(),e[1][i]=n.getVelocity()}),e}function nm(t,e,n,i){if(typeof e=="function"){const[r,s]=g0(i);e=e(n!==void 0?n:t.custom,r,s)}if(typeof e=="string"&&(e=t.variants&&t.variants[e]),typeof e=="function"){const[r,s]=g0(i);e=e(n!==void 0?n:t.custom,r,s)}return e}const Gf=t=>Array.isArray(t),o1=t=>!!(t&&typeof t=="object"&&t.mix&&t.toValue),l1=t=>Gf(t)?t[t.length-1]||0:t,an=t=>!!(t&&t.getVelocity);function sc(t){const e=an(t)?t.get():t;return o1(e)?e.toValue():e}function c1({scrapeMotionValuesFromProps:t,createRenderState:e,onUpdate:n},i,r,s){const a={latestValues:u1(i,r,s,t),renderState:e()};return n&&(a.onMount=o=>n({props:i,current:o,...a}),a.onUpdate=o=>n(o)),a}const Z_=t=>(e,n)=>{const i=se.useContext(gu),r=se.useContext(pu),s=()=>c1(t,e,i,r);return n?s():Yp(s)};function u1(t,e,n,i){const r={},s=i(t,{});for(const u in s)r[u]=sc(s[u]);let{initial:a,animate:o}=t;const l=xu(t),c=Y_(t);e&&c&&!l&&t.inherit!==!1&&(a===void 0&&(a=e.initial),o===void 0&&(o=e.animate));let d=n?n.initial===!1:!1;d=d||a===!1;const f=d?o:a;if(f&&typeof f!="boolean"&&!vu(f)){const u=Array.isArray(f)?f:[f];for(let p=0;p<u.length;p++){const x=nm(t,u[p]);if(x){const{transitionEnd:M,transition:v,...h}=x;for(const g in h){let S=h[g];if(Array.isArray(S)){const _=d?S.length-1:0;S=S[_]}S!==null&&(r[g]=S)}for(const g in M)r[g]=M[g]}}}return r}const _a=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],ps=new Set(_a),J_=t=>e=>typeof e=="string"&&e.startsWith(t),Q_=J_("--"),d1=J_("var(--"),im=t=>d1(t)?f1.test(t.split("/*")[0].trim()):!1,f1=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,eS=(t,e)=>e&&typeof t=="number"?e.transform(t):t,Ji=(t,e,n)=>n>e?e:n<t?t:n,Sa={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},Po={...Sa,transform:t=>Ji(0,1,t)},xl={...Sa,default:1},Wo=t=>({test:e=>typeof e=="string"&&e.endsWith(t)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${t}`}),ur=Wo("deg"),Ai=Wo("%"),ke=Wo("px"),h1=Wo("vh"),p1=Wo("vw"),v0={...Ai,parse:t=>Ai.parse(t)/100,transform:t=>Ai.transform(t*100)},m1={borderWidth:ke,borderTopWidth:ke,borderRightWidth:ke,borderBottomWidth:ke,borderLeftWidth:ke,borderRadius:ke,radius:ke,borderTopLeftRadius:ke,borderTopRightRadius:ke,borderBottomRightRadius:ke,borderBottomLeftRadius:ke,width:ke,maxWidth:ke,height:ke,maxHeight:ke,top:ke,right:ke,bottom:ke,left:ke,padding:ke,paddingTop:ke,paddingRight:ke,paddingBottom:ke,paddingLeft:ke,margin:ke,marginTop:ke,marginRight:ke,marginBottom:ke,marginLeft:ke,backgroundPositionX:ke,backgroundPositionY:ke},g1={rotate:ur,rotateX:ur,rotateY:ur,rotateZ:ur,scale:xl,scaleX:xl,scaleY:xl,scaleZ:xl,skew:ur,skewX:ur,skewY:ur,distance:ke,translateX:ke,translateY:ke,translateZ:ke,x:ke,y:ke,z:ke,perspective:ke,transformPerspective:ke,opacity:Po,originX:v0,originY:v0,originZ:ke},x0={...Sa,transform:Math.round},rm={...m1,...g1,zIndex:x0,size:ke,fillOpacity:Po,strokeOpacity:Po,numOctaves:x0},v1={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},x1=_a.length;function y1(t,e,n){let i="",r=!0;for(let s=0;s<x1;s++){const a=_a[s],o=t[a];if(o===void 0)continue;let l=!0;if(typeof o=="number"?l=o===(a.startsWith("scale")?1:0):l=parseFloat(o)===0,!l||n){const c=eS(o,rm[a]);if(!l){r=!1;const d=v1[a]||a;i+=`${d}(${c}) `}n&&(e[a]=c)}}return i=i.trim(),n?i=n(e,r?"":i):r&&(i="none"),i}function sm(t,e,n){const{style:i,vars:r,transformOrigin:s}=t;let a=!1,o=!1;for(const l in e){const c=e[l];if(ps.has(l)){a=!0;continue}else if(Q_(l)){r[l]=c;continue}else{const d=eS(c,rm[l]);l.startsWith("origin")?(o=!0,s[l]=d):i[l]=d}}if(e.transform||(a||n?i.transform=y1(e,t.transform,n):i.transform&&(i.transform="none")),o){const{originX:l="50%",originY:c="50%",originZ:d=0}=s;i.transformOrigin=`${l} ${c} ${d}`}}const _1={offset:"stroke-dashoffset",array:"stroke-dasharray"},S1={offset:"strokeDashoffset",array:"strokeDasharray"};function M1(t,e,n=1,i=0,r=!0){t.pathLength=1;const s=r?_1:S1;t[s.offset]=ke.transform(-i);const a=ke.transform(e),o=ke.transform(n);t[s.array]=`${a} ${o}`}function y0(t,e,n){return typeof t=="string"?t:ke.transform(e+n*t)}function E1(t,e,n){const i=y0(e,t.x,t.width),r=y0(n,t.y,t.height);return`${i} ${r}`}function am(t,{attrX:e,attrY:n,attrScale:i,originX:r,originY:s,pathLength:a,pathSpacing:o=1,pathOffset:l=0,...c},d,f){if(sm(t,c,f),d){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};const{attrs:u,style:p,dimensions:x}=t;u.transform&&(x&&(p.transform=u.transform),delete u.transform),x&&(r!==void 0||s!==void 0||p.transform)&&(p.transformOrigin=E1(x,r!==void 0?r:.5,s!==void 0?s:.5)),e!==void 0&&(u.x=e),n!==void 0&&(u.y=n),i!==void 0&&(u.scale=i),a!==void 0&&M1(u,a,o,l,!1)}const om=()=>({style:{},transform:{},transformOrigin:{},vars:{}}),tS=()=>({...om(),attrs:{}}),lm=t=>typeof t=="string"&&t.toLowerCase()==="svg";function nS(t,{style:e,vars:n},i,r){Object.assign(t.style,e,r&&r.getProjectionStyles(i));for(const s in n)t.style.setProperty(s,n[s])}const iS=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function rS(t,e,n,i){nS(t,e,void 0,i);for(const r in e.attrs)t.setAttribute(iS.has(r)?r:Qp(r),e.attrs[r])}const Bc={};function T1(t){Object.assign(Bc,t)}function sS(t,{layout:e,layoutId:n}){return ps.has(t)||t.startsWith("origin")||(e||n!==void 0)&&(!!Bc[t]||t==="opacity")}function cm(t,e,n){var i;const{style:r}=t,s={};for(const a in r)(an(r[a])||e.style&&an(e.style[a])||sS(a,t)||((i=n==null?void 0:n.getValue(a))===null||i===void 0?void 0:i.liveStyle)!==void 0)&&(s[a]=r[a]);return s}function aS(t,e,n){const i=cm(t,e,n);for(const r in t)if(an(t[r])||an(e[r])){const s=_a.indexOf(r)!==-1?"attr"+r.charAt(0).toUpperCase()+r.substring(1):r;i[s]=t[r]}return i}function w1(t,e){try{e.dimensions=typeof t.getBBox=="function"?t.getBBox():t.getBoundingClientRect()}catch{e.dimensions={x:0,y:0,width:0,height:0}}}const _0=["x","y","width","height","cx","cy","r"],A1={useVisualState:Z_({scrapeMotionValuesFromProps:aS,createRenderState:tS,onUpdate:({props:t,prevProps:e,current:n,renderState:i,latestValues:r})=>{if(!n)return;let s=!!t.drag;if(!s){for(const o in r)if(ps.has(o)){s=!0;break}}if(!s)return;let a=!e;if(e)for(let o=0;o<_0.length;o++){const l=_0[o];t[l]!==e[l]&&(a=!0)}a&&_t.read(()=>{w1(n,i),_t.render(()=>{am(i,r,lm(n.tagName),t.transformTemplate),rS(n,i)})})}})},b1={useVisualState:Z_({scrapeMotionValuesFromProps:cm,createRenderState:om})};function oS(t,e,n){for(const i in e)!an(e[i])&&!sS(i,n)&&(t[i]=e[i])}function C1({transformTemplate:t},e){return se.useMemo(()=>{const n=om();return sm(n,e,t),Object.assign({},n.vars,n.style)},[e])}function R1(t,e){const n=t.style||{},i={};return oS(i,n,t),Object.assign(i,C1(t,e)),i}function P1(t,e){const n={},i=R1(t,e);return t.drag&&t.dragListener!==!1&&(n.draggable=!1,i.userSelect=i.WebkitUserSelect=i.WebkitTouchCallout="none",i.touchAction=t.drag===!0?"none":`pan-${t.drag==="x"?"y":"x"}`),t.tabIndex===void 0&&(t.onTap||t.onTapStart||t.whileTap)&&(n.tabIndex=0),n.style=i,n}function N1(t,e,n,i){const r=se.useMemo(()=>{const s=tS();return am(s,e,lm(i),t.transformTemplate),{...s.attrs,style:{...s.style}}},[e]);if(t.style){const s={};oS(s,t.style,t),r.style={...s,...r.style}}return r}function L1(t=!1){return(n,i,r,{latestValues:s},a)=>{const l=(tm(n)?N1:P1)(i,s,a,n),c=Yw(i,typeof n=="string",t),d=n!==se.Fragment?{...c,...l,ref:r}:{},{children:f}=i,u=se.useMemo(()=>an(f)?f.get():f,[f]);return se.createElement(n,{...d,children:u})}}function D1(t,e){return function(i,{forwardMotionProps:r}={forwardMotionProps:!1}){const a={...tm(i)?A1:b1,preloadedFeatures:t,useRender:L1(r),createVisualElement:e,Component:i};return n1(a)}}function lS(t,e){if(!Array.isArray(e))return!1;const n=e.length;if(n!==t.length)return!1;for(let i=0;i<n;i++)if(e[i]!==t[i])return!1;return!0}function yu(t,e,n){const i=t.getProps();return nm(i,e,n!==void 0?n:i.custom,t)}const I1=Kp(()=>window.ScrollTimeline!==void 0);class U1{constructor(e){this.stop=()=>this.runAll("stop"),this.animations=e.filter(Boolean)}get finished(){return Promise.all(this.animations.map(e=>"finished"in e?e.finished:e))}getAll(e){return this.animations[0][e]}setAll(e,n){for(let i=0;i<this.animations.length;i++)this.animations[i][e]=n}attachTimeline(e,n){const i=this.animations.map(r=>{if(I1()&&r.attachTimeline)return r.attachTimeline(e);if(typeof n=="function")return n(r)});return()=>{i.forEach((r,s)=>{r&&r(),this.animations[s].stop()})}}get time(){return this.getAll("time")}set time(e){this.setAll("time",e)}get speed(){return this.getAll("speed")}set speed(e){this.setAll("speed",e)}get startTime(){return this.getAll("startTime")}get duration(){let e=0;for(let n=0;n<this.animations.length;n++)e=Math.max(e,this.animations[n].duration);return e}runAll(e){this.animations.forEach(n=>n[e]())}flatten(){this.runAll("flatten")}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}class F1 extends U1{then(e,n){return Promise.all(this.animations).then(e).catch(n)}}function um(t,e){return t?t[e]||t.default||t:void 0}const Wf=2e4;function cS(t){let e=0;const n=50;let i=t.next(e);for(;!i.done&&e<Wf;)e+=n,i=t.next(e);return e>=Wf?1/0:e}function dm(t){return typeof t=="function"}function S0(t,e){t.timeline=e,t.onfinish=null}const fm=t=>Array.isArray(t)&&typeof t[0]=="number",O1={linearEasing:void 0};function k1(t,e){const n=Kp(t);return()=>{var i;return(i=O1[e])!==null&&i!==void 0?i:n()}}const Vc=k1(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),uS=(t,e,n=10)=>{let i="";const r=Math.max(Math.round(e/n),2);for(let s=0;s<r;s++)i+=t(fa(0,r-1,s))+", ";return`linear(${i.substring(0,i.length-2)})`};function dS(t){return!!(typeof t=="function"&&Vc()||!t||typeof t=="string"&&(t in jf||Vc())||fm(t)||Array.isArray(t)&&t.every(dS))}const Xa=([t,e,n,i])=>`cubic-bezier(${t}, ${e}, ${n}, ${i})`,jf={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Xa([0,.65,.55,1]),circOut:Xa([.55,0,1,.45]),backIn:Xa([.31,.01,.66,-.59]),backOut:Xa([.33,1.53,.69,.99])};function fS(t,e){if(t)return typeof t=="function"&&Vc()?uS(t,e):fm(t)?Xa(t):Array.isArray(t)?t.map(n=>fS(n,e)||jf.easeOut):jf[t]}const ti={x:!1,y:!1};function hS(){return ti.x||ti.y}function B1(t,e,n){var i;if(t instanceof Element)return[t];if(typeof t=="string"){let r=document;const s=(i=void 0)!==null&&i!==void 0?i:r.querySelectorAll(t);return s?Array.from(s):[]}return Array.from(t)}function pS(t,e){const n=B1(t),i=new AbortController,r={passive:!0,...e,signal:i.signal};return[n,r,()=>i.abort()]}function M0(t){return e=>{e.pointerType==="touch"||hS()||t(e)}}function V1(t,e,n={}){const[i,r,s]=pS(t,n),a=M0(o=>{const{target:l}=o,c=e(o);if(typeof c!="function"||!l)return;const d=M0(f=>{c(f),l.removeEventListener("pointerleave",d)});l.addEventListener("pointerleave",d,r)});return i.forEach(o=>{o.addEventListener("pointerenter",a,r)}),s}const mS=(t,e)=>e?t===e?!0:mS(t,e.parentElement):!1,hm=t=>t.pointerType==="mouse"?typeof t.button!="number"||t.button<=0:t.isPrimary!==!1,z1=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function H1(t){return z1.has(t.tagName)||t.tabIndex!==-1}const Ya=new WeakSet;function E0(t){return e=>{e.key==="Enter"&&t(e)}}function nd(t,e){t.dispatchEvent(new PointerEvent("pointer"+e,{isPrimary:!0,bubbles:!0}))}const G1=(t,e)=>{const n=t.currentTarget;if(!n)return;const i=E0(()=>{if(Ya.has(n))return;nd(n,"down");const r=E0(()=>{nd(n,"up")}),s=()=>nd(n,"cancel");n.addEventListener("keyup",r,e),n.addEventListener("blur",s,e)});n.addEventListener("keydown",i,e),n.addEventListener("blur",()=>n.removeEventListener("keydown",i),e)};function T0(t){return hm(t)&&!hS()}function W1(t,e,n={}){const[i,r,s]=pS(t,n),a=o=>{const l=o.currentTarget;if(!T0(o)||Ya.has(l))return;Ya.add(l);const c=e(o),d=(p,x)=>{window.removeEventListener("pointerup",f),window.removeEventListener("pointercancel",u),!(!T0(p)||!Ya.has(l))&&(Ya.delete(l),typeof c=="function"&&c(p,{success:x}))},f=p=>{d(p,n.useGlobalTarget||mS(l,p.target))},u=p=>{d(p,!1)};window.addEventListener("pointerup",f,r),window.addEventListener("pointercancel",u,r)};return i.forEach(o=>{!H1(o)&&o.getAttribute("tabindex")===null&&(o.tabIndex=0),(n.useGlobalTarget?window:o).addEventListener("pointerdown",a,r),o.addEventListener("focus",c=>G1(c,r),r)}),s}function j1(t){return t==="x"||t==="y"?ti[t]?null:(ti[t]=!0,()=>{ti[t]=!1}):ti.x||ti.y?null:(ti.x=ti.y=!0,()=>{ti.x=ti.y=!1})}const gS=new Set(["width","height","top","left","right","bottom",..._a]);let ac;function X1(){ac=void 0}const bi={now:()=>(ac===void 0&&bi.set($t.isProcessing||zw.useManualTiming?$t.timestamp:performance.now()),ac),set:t=>{ac=t,queueMicrotask(X1)}};function pm(t,e){t.indexOf(e)===-1&&t.push(e)}function mm(t,e){const n=t.indexOf(e);n>-1&&t.splice(n,1)}class gm{constructor(){this.subscriptions=[]}add(e){return pm(this.subscriptions,e),()=>mm(this.subscriptions,e)}notify(e,n,i){const r=this.subscriptions.length;if(r)if(r===1)this.subscriptions[0](e,n,i);else for(let s=0;s<r;s++){const a=this.subscriptions[s];a&&a(e,n,i)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}function vS(t,e){return e?t*(1e3/e):0}const w0=30,Y1=t=>!isNaN(parseFloat(t));class $1{constructor(e,n={}){this.version="11.18.2",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(i,r=!0)=>{const s=bi.now();this.updatedAt!==s&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(i),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),r&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(e),this.owner=n.owner}setCurrent(e){this.current=e,this.updatedAt=bi.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=Y1(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,n){this.events[e]||(this.events[e]=new gm);const i=this.events[e].add(n);return e==="change"?()=>{i(),_t.read(()=>{this.events.change.getSize()||this.stop()})}:i}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,n){this.passiveEffect=e,this.stopPassiveEffect=n}set(e,n=!0){!n||!this.passiveEffect?this.updateAndNotify(e,n):this.passiveEffect(e,this.updateAndNotify)}setWithVelocity(e,n,i){this.set(n),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-i}jump(e,n=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const e=bi.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>w0)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,w0);return vS(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(e){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=e(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function No(t,e){return new $1(t,e)}function q1(t,e,n){t.hasValue(e)?t.getValue(e).set(n):t.addValue(e,No(n))}function K1(t,e){const n=yu(t,e);let{transitionEnd:i={},transition:r={},...s}=n||{};s={...s,...i};for(const a in s){const o=l1(s[a]);q1(t,a,o)}}function Z1(t){return!!(an(t)&&t.add)}function Xf(t,e){const n=t.getValue("willChange");if(Z1(n))return n.add(e)}function xS(t){return t.props[$_]}const yS=(t,e,n)=>(((1-3*n+3*e)*t+(3*n-6*e))*t+3*e)*t,J1=1e-7,Q1=12;function eA(t,e,n,i,r){let s,a,o=0;do a=e+(n-e)/2,s=yS(a,i,r)-t,s>0?n=a:e=a;while(Math.abs(s)>J1&&++o<Q1);return a}function jo(t,e,n,i){if(t===e&&n===i)return In;const r=s=>eA(s,0,1,t,n);return s=>s===0||s===1?s:yS(r(s),e,i)}const _S=t=>e=>e<=.5?t(2*e)/2:(2-t(2*(1-e)))/2,SS=t=>e=>1-t(1-e),MS=jo(.33,1.53,.69,.99),vm=SS(MS),ES=_S(vm),TS=t=>(t*=2)<1?.5*vm(t):.5*(2-Math.pow(2,-10*(t-1))),xm=t=>1-Math.sin(Math.acos(t)),wS=SS(xm),AS=_S(xm),bS=t=>/^0[^.\s]+$/u.test(t);function tA(t){return typeof t=="number"?t===0:t!==null?t==="none"||t==="0"||bS(t):!0}const ao=t=>Math.round(t*1e5)/1e5,ym=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function nA(t){return t==null}const iA=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,_m=(t,e)=>n=>!!(typeof n=="string"&&iA.test(n)&&n.startsWith(t)||e&&!nA(n)&&Object.prototype.hasOwnProperty.call(n,e)),CS=(t,e,n)=>i=>{if(typeof i!="string")return i;const[r,s,a,o]=i.match(ym);return{[t]:parseFloat(r),[e]:parseFloat(s),[n]:parseFloat(a),alpha:o!==void 0?parseFloat(o):1}},rA=t=>Ji(0,255,t),id={...Sa,transform:t=>Math.round(rA(t))},Zr={test:_m("rgb","red"),parse:CS("red","green","blue"),transform:({red:t,green:e,blue:n,alpha:i=1})=>"rgba("+id.transform(t)+", "+id.transform(e)+", "+id.transform(n)+", "+ao(Po.transform(i))+")"};function sA(t){let e="",n="",i="",r="";return t.length>5?(e=t.substring(1,3),n=t.substring(3,5),i=t.substring(5,7),r=t.substring(7,9)):(e=t.substring(1,2),n=t.substring(2,3),i=t.substring(3,4),r=t.substring(4,5),e+=e,n+=n,i+=i,r+=r),{red:parseInt(e,16),green:parseInt(n,16),blue:parseInt(i,16),alpha:r?parseInt(r,16)/255:1}}const Yf={test:_m("#"),parse:sA,transform:Zr.transform},Xs={test:_m("hsl","hue"),parse:CS("hue","saturation","lightness"),transform:({hue:t,saturation:e,lightness:n,alpha:i=1})=>"hsla("+Math.round(t)+", "+Ai.transform(ao(e))+", "+Ai.transform(ao(n))+", "+ao(Po.transform(i))+")"},rn={test:t=>Zr.test(t)||Yf.test(t)||Xs.test(t),parse:t=>Zr.test(t)?Zr.parse(t):Xs.test(t)?Xs.parse(t):Yf.parse(t),transform:t=>typeof t=="string"?t:t.hasOwnProperty("red")?Zr.transform(t):Xs.transform(t)},aA=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function oA(t){var e,n;return isNaN(t)&&typeof t=="string"&&(((e=t.match(ym))===null||e===void 0?void 0:e.length)||0)+(((n=t.match(aA))===null||n===void 0?void 0:n.length)||0)>0}const RS="number",PS="color",lA="var",cA="var(",A0="${}",uA=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Lo(t){const e=t.toString(),n=[],i={color:[],number:[],var:[]},r=[];let s=0;const o=e.replace(uA,l=>(rn.test(l)?(i.color.push(s),r.push(PS),n.push(rn.parse(l))):l.startsWith(cA)?(i.var.push(s),r.push(lA),n.push(l)):(i.number.push(s),r.push(RS),n.push(parseFloat(l))),++s,A0)).split(A0);return{values:n,split:o,indexes:i,types:r}}function NS(t){return Lo(t).values}function LS(t){const{split:e,types:n}=Lo(t),i=e.length;return r=>{let s="";for(let a=0;a<i;a++)if(s+=e[a],r[a]!==void 0){const o=n[a];o===RS?s+=ao(r[a]):o===PS?s+=rn.transform(r[a]):s+=r[a]}return s}}const dA=t=>typeof t=="number"?0:t;function fA(t){const e=NS(t);return LS(t)(e.map(dA))}const Nr={test:oA,parse:NS,createTransformer:LS,getAnimatableNone:fA},hA=new Set(["brightness","contrast","saturate","opacity"]);function pA(t){const[e,n]=t.slice(0,-1).split("(");if(e==="drop-shadow")return t;const[i]=n.match(ym)||[];if(!i)return t;const r=n.replace(i,"");let s=hA.has(e)?1:0;return i!==n&&(s*=100),e+"("+s+r+")"}const mA=/\b([a-z-]*)\(.*?\)/gu,$f={...Nr,getAnimatableNone:t=>{const e=t.match(mA);return e?e.map(pA).join(" "):t}},gA={...rm,color:rn,backgroundColor:rn,outlineColor:rn,fill:rn,stroke:rn,borderColor:rn,borderTopColor:rn,borderRightColor:rn,borderBottomColor:rn,borderLeftColor:rn,filter:$f,WebkitFilter:$f},Sm=t=>gA[t];function DS(t,e){let n=Sm(t);return n!==$f&&(n=Nr),n.getAnimatableNone?n.getAnimatableNone(e):void 0}const vA=new Set(["auto","none","0"]);function xA(t,e,n){let i=0,r;for(;i<t.length&&!r;){const s=t[i];typeof s=="string"&&!vA.has(s)&&Lo(s).values.length&&(r=t[i]),i++}if(r&&n)for(const s of e)t[s]=DS(n,r)}const b0=t=>t===Sa||t===ke,C0=(t,e)=>parseFloat(t.split(", ")[e]),R0=(t,e)=>(n,{transform:i})=>{if(i==="none"||!i)return 0;const r=i.match(/^matrix3d\((.+)\)$/u);if(r)return C0(r[1],e);{const s=i.match(/^matrix\((.+)\)$/u);return s?C0(s[1],t):0}},yA=new Set(["x","y","z"]),_A=_a.filter(t=>!yA.has(t));function SA(t){const e=[];return _A.forEach(n=>{const i=t.getValue(n);i!==void 0&&(e.push([n,i.get()]),i.set(n.startsWith("scale")?1:0))}),e}const pa={width:({x:t},{paddingLeft:e="0",paddingRight:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),height:({y:t},{paddingTop:e="0",paddingBottom:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),top:(t,{top:e})=>parseFloat(e),left:(t,{left:e})=>parseFloat(e),bottom:({y:t},{top:e})=>parseFloat(e)+(t.max-t.min),right:({x:t},{left:e})=>parseFloat(e)+(t.max-t.min),x:R0(4,13),y:R0(5,14)};pa.translateX=pa.x;pa.translateY=pa.y;const is=new Set;let qf=!1,Kf=!1;function IS(){if(Kf){const t=Array.from(is).filter(i=>i.needsMeasurement),e=new Set(t.map(i=>i.element)),n=new Map;e.forEach(i=>{const r=SA(i);r.length&&(n.set(i,r),i.render())}),t.forEach(i=>i.measureInitialState()),e.forEach(i=>{i.render();const r=n.get(i);r&&r.forEach(([s,a])=>{var o;(o=i.getValue(s))===null||o===void 0||o.set(a)})}),t.forEach(i=>i.measureEndState()),t.forEach(i=>{i.suspendedScrollY!==void 0&&window.scrollTo(0,i.suspendedScrollY)})}Kf=!1,qf=!1,is.forEach(t=>t.complete()),is.clear()}function US(){is.forEach(t=>{t.readKeyframes(),t.needsMeasurement&&(Kf=!0)})}function MA(){US(),IS()}class Mm{constructor(e,n,i,r,s,a=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...e],this.onComplete=n,this.name=i,this.motionValue=r,this.element=s,this.isAsync=a}scheduleResolve(){this.isScheduled=!0,this.isAsync?(is.add(this),qf||(qf=!0,_t.read(US),_t.resolveKeyframes(IS))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:n,element:i,motionValue:r}=this;for(let s=0;s<e.length;s++)if(e[s]===null)if(s===0){const a=r==null?void 0:r.get(),o=e[e.length-1];if(a!==void 0)e[0]=a;else if(i&&n){const l=i.readValue(n,o);l!=null&&(e[0]=l)}e[0]===void 0&&(e[0]=o),r&&a===void 0&&r.set(e[0])}else e[s]=e[s-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),is.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,is.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const FS=t=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t),EA=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function TA(t){const e=EA.exec(t);if(!e)return[,];const[,n,i,r]=e;return[`--${n??i}`,r]}function OS(t,e,n=1){const[i,r]=TA(t);if(!i)return;const s=window.getComputedStyle(e).getPropertyValue(i);if(s){const a=s.trim();return FS(a)?parseFloat(a):a}return im(r)?OS(r,e,n+1):r}const kS=t=>e=>e.test(t),wA={test:t=>t==="auto",parse:t=>t},BS=[Sa,ke,Ai,ur,p1,h1,wA],P0=t=>BS.find(kS(t));class VS extends Mm{constructor(e,n,i,r,s){super(e,n,i,r,s,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:n,name:i}=this;if(!n||!n.current)return;super.readKeyframes();for(let l=0;l<e.length;l++){let c=e[l];if(typeof c=="string"&&(c=c.trim(),im(c))){const d=OS(c,n.current);d!==void 0&&(e[l]=d),l===e.length-1&&(this.finalKeyframe=c)}}if(this.resolveNoneKeyframes(),!gS.has(i)||e.length!==2)return;const[r,s]=e,a=P0(r),o=P0(s);if(a!==o)if(b0(a)&&b0(o))for(let l=0;l<e.length;l++){const c=e[l];typeof c=="string"&&(e[l]=parseFloat(c))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:n}=this,i=[];for(let r=0;r<e.length;r++)tA(e[r])&&i.push(r);i.length&&xA(e,i,n)}measureInitialState(){const{element:e,unresolvedKeyframes:n,name:i}=this;if(!e||!e.current)return;i==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=pa[i](e.measureViewportBox(),window.getComputedStyle(e.current)),n[0]=this.measuredOrigin;const r=n[n.length-1];r!==void 0&&e.getValue(i,r).jump(r,!1)}measureEndState(){var e;const{element:n,name:i,unresolvedKeyframes:r}=this;if(!n||!n.current)return;const s=n.getValue(i);s&&s.jump(this.measuredOrigin,!1);const a=r.length-1,o=r[a];r[a]=pa[i](n.measureViewportBox(),window.getComputedStyle(n.current)),o!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=o),!((e=this.removedTransforms)===null||e===void 0)&&e.length&&this.removedTransforms.forEach(([l,c])=>{n.getValue(l).set(c)}),this.resolveNoneKeyframes()}}const N0=(t,e)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(Nr.test(t)||t==="0")&&!t.startsWith("url("));function AA(t){const e=t[0];if(t.length===1)return!0;for(let n=0;n<t.length;n++)if(t[n]!==e)return!0}function bA(t,e,n,i){const r=t[0];if(r===null)return!1;if(e==="display"||e==="visibility")return!0;const s=t[t.length-1],a=N0(r,e),o=N0(s,e);return!a||!o?!1:AA(t)||(n==="spring"||dm(n))&&i}const CA=t=>t!==null;function _u(t,{repeat:e,repeatType:n="loop"},i){const r=t.filter(CA),s=e&&n!=="loop"&&e%2===1?0:r.length-1;return!s||i===void 0?r[s]:i}const RA=40;class zS{constructor({autoplay:e=!0,delay:n=0,type:i="keyframes",repeat:r=0,repeatDelay:s=0,repeatType:a="loop",...o}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=bi.now(),this.options={autoplay:e,delay:n,type:i,repeat:r,repeatDelay:s,repeatType:a,...o},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt?this.resolvedAt-this.createdAt>RA?this.resolvedAt:this.createdAt:this.createdAt}get resolved(){return!this._resolved&&!this.hasAttemptedResolve&&MA(),this._resolved}onKeyframesResolved(e,n){this.resolvedAt=bi.now(),this.hasAttemptedResolve=!0;const{name:i,type:r,velocity:s,delay:a,onComplete:o,onUpdate:l,isGenerator:c}=this.options;if(!c&&!bA(e,i,r,s))if(a)this.options.duration=0;else{l&&l(_u(e,this.options,n)),o&&o(),this.resolveFinishedPromise();return}const d=this.initPlayback(e,n);d!==!1&&(this._resolved={keyframes:e,finalKeyframe:n,...d},this.onPostResolved())}onPostResolved(){}then(e,n){return this.currentFinishedPromise.then(e,n)}flatten(){this.options.type="keyframes",this.options.ease="linear"}updateFinishedPromise(){this.currentFinishedPromise=new Promise(e=>{this.resolveFinishedPromise=e})}}const Et=(t,e,n)=>t+(e-t)*n;function rd(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*(2/3-n)*6:t}function PA({hue:t,saturation:e,lightness:n,alpha:i}){t/=360,e/=100,n/=100;let r=0,s=0,a=0;if(!e)r=s=a=n;else{const o=n<.5?n*(1+e):n+e-n*e,l=2*n-o;r=rd(l,o,t+1/3),s=rd(l,o,t),a=rd(l,o,t-1/3)}return{red:Math.round(r*255),green:Math.round(s*255),blue:Math.round(a*255),alpha:i}}function zc(t,e){return n=>n>0?e:t}const sd=(t,e,n)=>{const i=t*t,r=n*(e*e-i)+i;return r<0?0:Math.sqrt(r)},NA=[Yf,Zr,Xs],LA=t=>NA.find(e=>e.test(t));function L0(t){const e=LA(t);if(!e)return!1;let n=e.parse(t);return e===Xs&&(n=PA(n)),n}const D0=(t,e)=>{const n=L0(t),i=L0(e);if(!n||!i)return zc(t,e);const r={...n};return s=>(r.red=sd(n.red,i.red,s),r.green=sd(n.green,i.green,s),r.blue=sd(n.blue,i.blue,s),r.alpha=Et(n.alpha,i.alpha,s),Zr.transform(r))},DA=(t,e)=>n=>e(t(n)),Xo=(...t)=>t.reduce(DA),Zf=new Set(["none","hidden"]);function IA(t,e){return Zf.has(t)?n=>n<=0?t:e:n=>n>=1?e:t}function UA(t,e){return n=>Et(t,e,n)}function Em(t){return typeof t=="number"?UA:typeof t=="string"?im(t)?zc:rn.test(t)?D0:kA:Array.isArray(t)?HS:typeof t=="object"?rn.test(t)?D0:FA:zc}function HS(t,e){const n=[...t],i=n.length,r=t.map((s,a)=>Em(s)(s,e[a]));return s=>{for(let a=0;a<i;a++)n[a]=r[a](s);return n}}function FA(t,e){const n={...t,...e},i={};for(const r in n)t[r]!==void 0&&e[r]!==void 0&&(i[r]=Em(t[r])(t[r],e[r]));return r=>{for(const s in i)n[s]=i[s](r);return n}}function OA(t,e){var n;const i=[],r={color:0,var:0,number:0};for(let s=0;s<e.values.length;s++){const a=e.types[s],o=t.indexes[a][r[a]],l=(n=t.values[o])!==null&&n!==void 0?n:0;i[s]=l,r[a]++}return i}const kA=(t,e)=>{const n=Nr.createTransformer(e),i=Lo(t),r=Lo(e);return i.indexes.var.length===r.indexes.var.length&&i.indexes.color.length===r.indexes.color.length&&i.indexes.number.length>=r.indexes.number.length?Zf.has(t)&&!r.values.length||Zf.has(e)&&!i.values.length?IA(t,e):Xo(HS(OA(i,r),r.values),n):zc(t,e)};function GS(t,e,n){return typeof t=="number"&&typeof e=="number"&&typeof n=="number"?Et(t,e,n):Em(t)(t,e)}const BA=5;function WS(t,e,n){const i=Math.max(e-BA,0);return vS(n-t(i),e-i)}const Rt={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},ad=.001;function VA({duration:t=Rt.duration,bounce:e=Rt.bounce,velocity:n=Rt.velocity,mass:i=Rt.mass}){let r,s,a=1-e;a=Ji(Rt.minDamping,Rt.maxDamping,a),t=Ji(Rt.minDuration,Rt.maxDuration,ji(t)),a<1?(r=c=>{const d=c*a,f=d*t,u=d-n,p=Jf(c,a),x=Math.exp(-f);return ad-u/p*x},s=c=>{const f=c*a*t,u=f*n+n,p=Math.pow(a,2)*Math.pow(c,2)*t,x=Math.exp(-f),M=Jf(Math.pow(c,2),a);return(-r(c)+ad>0?-1:1)*((u-p)*x)/M}):(r=c=>{const d=Math.exp(-c*t),f=(c-n)*t+1;return-ad+d*f},s=c=>{const d=Math.exp(-c*t),f=(n-c)*(t*t);return d*f});const o=5/t,l=HA(r,s,o);if(t=Wi(t),isNaN(l))return{stiffness:Rt.stiffness,damping:Rt.damping,duration:t};{const c=Math.pow(l,2)*i;return{stiffness:c,damping:a*2*Math.sqrt(i*c),duration:t}}}const zA=12;function HA(t,e,n){let i=n;for(let r=1;r<zA;r++)i=i-t(i)/e(i);return i}function Jf(t,e){return t*Math.sqrt(1-e*e)}const GA=["duration","bounce"],WA=["stiffness","damping","mass"];function I0(t,e){return e.some(n=>t[n]!==void 0)}function jA(t){let e={velocity:Rt.velocity,stiffness:Rt.stiffness,damping:Rt.damping,mass:Rt.mass,isResolvedFromDuration:!1,...t};if(!I0(t,WA)&&I0(t,GA))if(t.visualDuration){const n=t.visualDuration,i=2*Math.PI/(n*1.2),r=i*i,s=2*Ji(.05,1,1-(t.bounce||0))*Math.sqrt(r);e={...e,mass:Rt.mass,stiffness:r,damping:s}}else{const n=VA(t);e={...e,...n,mass:Rt.mass},e.isResolvedFromDuration=!0}return e}function jS(t=Rt.visualDuration,e=Rt.bounce){const n=typeof t!="object"?{visualDuration:t,keyframes:[0,1],bounce:e}:t;let{restSpeed:i,restDelta:r}=n;const s=n.keyframes[0],a=n.keyframes[n.keyframes.length-1],o={done:!1,value:s},{stiffness:l,damping:c,mass:d,duration:f,velocity:u,isResolvedFromDuration:p}=jA({...n,velocity:-ji(n.velocity||0)}),x=u||0,M=c/(2*Math.sqrt(l*d)),v=a-s,h=ji(Math.sqrt(l/d)),g=Math.abs(v)<5;i||(i=g?Rt.restSpeed.granular:Rt.restSpeed.default),r||(r=g?Rt.restDelta.granular:Rt.restDelta.default);let S;if(M<1){const T=Jf(h,M);S=w=>{const R=Math.exp(-M*h*w);return a-R*((x+M*h*v)/T*Math.sin(T*w)+v*Math.cos(T*w))}}else if(M===1)S=T=>a-Math.exp(-h*T)*(v+(x+h*v)*T);else{const T=h*Math.sqrt(M*M-1);S=w=>{const R=Math.exp(-M*h*w),y=Math.min(T*w,300);return a-R*((x+M*h*v)*Math.sinh(y)+T*v*Math.cosh(y))/T}}const _={calculatedDuration:p&&f||null,next:T=>{const w=S(T);if(p)o.done=T>=f;else{let R=0;M<1&&(R=T===0?Wi(x):WS(S,T,w));const y=Math.abs(R)<=i,P=Math.abs(a-w)<=r;o.done=y&&P}return o.value=o.done?a:w,o},toString:()=>{const T=Math.min(cS(_),Wf),w=uS(R=>_.next(T*R).value,T,30);return T+"ms "+w}};return _}function U0({keyframes:t,velocity:e=0,power:n=.8,timeConstant:i=325,bounceDamping:r=10,bounceStiffness:s=500,modifyTarget:a,min:o,max:l,restDelta:c=.5,restSpeed:d}){const f=t[0],u={done:!1,value:f},p=y=>o!==void 0&&y<o||l!==void 0&&y>l,x=y=>o===void 0?l:l===void 0||Math.abs(o-y)<Math.abs(l-y)?o:l;let M=n*e;const v=f+M,h=a===void 0?v:a(v);h!==v&&(M=h-f);const g=y=>-M*Math.exp(-y/i),S=y=>h+g(y),_=y=>{const P=g(y),L=S(y);u.done=Math.abs(P)<=c,u.value=u.done?h:L};let T,w;const R=y=>{p(u.value)&&(T=y,w=jS({keyframes:[u.value,x(u.value)],velocity:WS(S,y,u.value),damping:r,stiffness:s,restDelta:c,restSpeed:d}))};return R(0),{calculatedDuration:null,next:y=>{let P=!1;return!w&&T===void 0&&(P=!0,_(y),R(y)),T!==void 0&&y>=T?w.next(y-T):(!P&&_(y),u)}}}const XA=jo(.42,0,1,1),YA=jo(0,0,.58,1),XS=jo(.42,0,.58,1),$A=t=>Array.isArray(t)&&typeof t[0]!="number",qA={linear:In,easeIn:XA,easeInOut:XS,easeOut:YA,circIn:xm,circInOut:AS,circOut:wS,backIn:vm,backInOut:ES,backOut:MS,anticipate:TS},F0=t=>{if(fm(t)){G_(t.length===4);const[e,n,i,r]=t;return jo(e,n,i,r)}else if(typeof t=="string")return qA[t];return t};function KA(t,e,n){const i=[],r=n||GS,s=t.length-1;for(let a=0;a<s;a++){let o=r(t[a],t[a+1]);if(e){const l=Array.isArray(e)?e[a]||In:e;o=Xo(l,o)}i.push(o)}return i}function ZA(t,e,{clamp:n=!0,ease:i,mixer:r}={}){const s=t.length;if(G_(s===e.length),s===1)return()=>e[0];if(s===2&&e[0]===e[1])return()=>e[1];const a=t[0]===t[1];t[0]>t[s-1]&&(t=[...t].reverse(),e=[...e].reverse());const o=KA(e,i,r),l=o.length,c=d=>{if(a&&d<t[0])return e[0];let f=0;if(l>1)for(;f<t.length-2&&!(d<t[f+1]);f++);const u=fa(t[f],t[f+1],d);return o[f](u)};return n?d=>c(Ji(t[0],t[s-1],d)):c}function JA(t,e){const n=t[t.length-1];for(let i=1;i<=e;i++){const r=fa(0,e,i);t.push(Et(n,1,r))}}function QA(t){const e=[0];return JA(e,t.length-1),e}function eb(t,e){return t.map(n=>n*e)}function tb(t,e){return t.map(()=>e||XS).splice(0,t.length-1)}function Hc({duration:t=300,keyframes:e,times:n,ease:i="easeInOut"}){const r=$A(i)?i.map(F0):F0(i),s={done:!1,value:e[0]},a=eb(n&&n.length===e.length?n:QA(e),t),o=ZA(a,e,{ease:Array.isArray(r)?r:tb(e,r)});return{calculatedDuration:t,next:l=>(s.value=o(l),s.done=l>=t,s)}}const nb=t=>{const e=({timestamp:n})=>t(n);return{start:()=>_t.update(e,!0),stop:()=>Pr(e),now:()=>$t.isProcessing?$t.timestamp:bi.now()}},ib={decay:U0,inertia:U0,tween:Hc,keyframes:Hc,spring:jS},rb=t=>t/100;class Tm extends zS{constructor(e){super(e),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:l}=this.options;l&&l()};const{name:n,motionValue:i,element:r,keyframes:s}=this.options,a=(r==null?void 0:r.KeyframeResolver)||Mm,o=(l,c)=>this.onKeyframesResolved(l,c);this.resolver=new a(s,o,n,i,r),this.resolver.scheduleResolve()}flatten(){super.flatten(),this._resolved&&Object.assign(this._resolved,this.initPlayback(this._resolved.keyframes))}initPlayback(e){const{type:n="keyframes",repeat:i=0,repeatDelay:r=0,repeatType:s,velocity:a=0}=this.options,o=dm(n)?n:ib[n]||Hc;let l,c;o!==Hc&&typeof e[0]!="number"&&(l=Xo(rb,GS(e[0],e[1])),e=[0,100]);const d=o({...this.options,keyframes:e});s==="mirror"&&(c=o({...this.options,keyframes:[...e].reverse(),velocity:-a})),d.calculatedDuration===null&&(d.calculatedDuration=cS(d));const{calculatedDuration:f}=d,u=f+r,p=u*(i+1)-r;return{generator:d,mirroredGenerator:c,mapPercentToKeyframes:l,calculatedDuration:f,resolvedDuration:u,totalDuration:p}}onPostResolved(){const{autoplay:e=!0}=this.options;this.play(),this.pendingPlayState==="paused"||!e?this.pause():this.state=this.pendingPlayState}tick(e,n=!1){const{resolved:i}=this;if(!i){const{keyframes:y}=this.options;return{done:!0,value:y[y.length-1]}}const{finalKeyframe:r,generator:s,mirroredGenerator:a,mapPercentToKeyframes:o,keyframes:l,calculatedDuration:c,totalDuration:d,resolvedDuration:f}=i;if(this.startTime===null)return s.next(0);const{delay:u,repeat:p,repeatType:x,repeatDelay:M,onUpdate:v}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-d/this.speed,this.startTime)),n?this.currentTime=e:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(e-this.startTime)*this.speed;const h=this.currentTime-u*(this.speed>=0?1:-1),g=this.speed>=0?h<0:h>d;this.currentTime=Math.max(h,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=d);let S=this.currentTime,_=s;if(p){const y=Math.min(this.currentTime,d)/f;let P=Math.floor(y),L=y%1;!L&&y>=1&&(L=1),L===1&&P--,P=Math.min(P,p+1),!!(P%2)&&(x==="reverse"?(L=1-L,M&&(L-=M/f)):x==="mirror"&&(_=a)),S=Ji(0,1,L)*f}const T=g?{done:!1,value:l[0]}:_.next(S);o&&(T.value=o(T.value));let{done:w}=T;!g&&c!==null&&(w=this.speed>=0?this.currentTime>=d:this.currentTime<=0);const R=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&w);return R&&r!==void 0&&(T.value=_u(l,this.options,r)),v&&v(T.value),R&&this.finish(),T}get duration(){const{resolved:e}=this;return e?ji(e.calculatedDuration):0}get time(){return ji(this.currentTime)}set time(e){e=Wi(e),this.currentTime=e,this.holdTime!==null||this.speed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.speed)}get speed(){return this.playbackSpeed}set speed(e){const n=this.playbackSpeed!==e;this.playbackSpeed=e,n&&(this.time=ji(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;const{driver:e=nb,onPlay:n,startTime:i}=this.options;this.driver||(this.driver=e(s=>this.tick(s))),n&&n();const r=this.driver.now();this.holdTime!==null?this.startTime=r-this.holdTime:this.startTime?this.state==="finished"&&(this.startTime=r):this.startTime=i??this.calcStartTime(),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var e;if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=(e=this.currentTime)!==null&&e!==void 0?e:0}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:e}=this.options;e&&e()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}}const sb=new Set(["opacity","clipPath","filter","transform"]);function ab(t,e,n,{delay:i=0,duration:r=300,repeat:s=0,repeatType:a="loop",ease:o="easeInOut",times:l}={}){const c={[e]:n};l&&(c.offset=l);const d=fS(o,r);return Array.isArray(d)&&(c.easing=d),t.animate(c,{delay:i,duration:r,easing:Array.isArray(d)?"linear":d,fill:"both",iterations:s+1,direction:a==="reverse"?"alternate":"normal"})}const ob=Kp(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),Gc=10,lb=2e4;function cb(t){return dm(t.type)||t.type==="spring"||!dS(t.ease)}function ub(t,e){const n=new Tm({...e,keyframes:t,repeat:0,delay:0,isGenerator:!0});let i={done:!1,value:t[0]};const r=[];let s=0;for(;!i.done&&s<lb;)i=n.sample(s),r.push(i.value),s+=Gc;return{times:void 0,keyframes:r,duration:s-Gc,ease:"linear"}}const YS={anticipate:TS,backInOut:ES,circInOut:AS};function db(t){return t in YS}class O0 extends zS{constructor(e){super(e);const{name:n,motionValue:i,element:r,keyframes:s}=this.options;this.resolver=new VS(s,(a,o)=>this.onKeyframesResolved(a,o),n,i,r),this.resolver.scheduleResolve()}initPlayback(e,n){let{duration:i=300,times:r,ease:s,type:a,motionValue:o,name:l,startTime:c}=this.options;if(!o.owner||!o.owner.current)return!1;if(typeof s=="string"&&Vc()&&db(s)&&(s=YS[s]),cb(this.options)){const{onComplete:f,onUpdate:u,motionValue:p,element:x,...M}=this.options,v=ub(e,M);e=v.keyframes,e.length===1&&(e[1]=e[0]),i=v.duration,r=v.times,s=v.ease,a="keyframes"}const d=ab(o.owner.current,l,e,{...this.options,duration:i,times:r,ease:s});return d.startTime=c??this.calcStartTime(),this.pendingTimeline?(S0(d,this.pendingTimeline),this.pendingTimeline=void 0):d.onfinish=()=>{const{onComplete:f}=this.options;o.set(_u(e,this.options,n)),f&&f(),this.cancel(),this.resolveFinishedPromise()},{animation:d,duration:i,times:r,type:a,ease:s,keyframes:e}}get duration(){const{resolved:e}=this;if(!e)return 0;const{duration:n}=e;return ji(n)}get time(){const{resolved:e}=this;if(!e)return 0;const{animation:n}=e;return ji(n.currentTime||0)}set time(e){const{resolved:n}=this;if(!n)return;const{animation:i}=n;i.currentTime=Wi(e)}get speed(){const{resolved:e}=this;if(!e)return 1;const{animation:n}=e;return n.playbackRate}set speed(e){const{resolved:n}=this;if(!n)return;const{animation:i}=n;i.playbackRate=e}get state(){const{resolved:e}=this;if(!e)return"idle";const{animation:n}=e;return n.playState}get startTime(){const{resolved:e}=this;if(!e)return null;const{animation:n}=e;return n.startTime}attachTimeline(e){if(!this._resolved)this.pendingTimeline=e;else{const{resolved:n}=this;if(!n)return In;const{animation:i}=n;S0(i,e)}return In}play(){if(this.isStopped)return;const{resolved:e}=this;if(!e)return;const{animation:n}=e;n.playState==="finished"&&this.updateFinishedPromise(),n.play()}pause(){const{resolved:e}=this;if(!e)return;const{animation:n}=e;n.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:e}=this;if(!e)return;const{animation:n,keyframes:i,duration:r,type:s,ease:a,times:o}=e;if(n.playState==="idle"||n.playState==="finished")return;if(this.time){const{motionValue:c,onUpdate:d,onComplete:f,element:u,...p}=this.options,x=new Tm({...p,keyframes:i,duration:r,type:s,ease:a,times:o,isGenerator:!0}),M=Wi(this.time);c.setWithVelocity(x.sample(M-Gc).value,x.sample(M).value,Gc)}const{onStop:l}=this.options;l&&l(),this.cancel()}complete(){const{resolved:e}=this;e&&e.animation.finish()}cancel(){const{resolved:e}=this;e&&e.animation.cancel()}static supports(e){const{motionValue:n,name:i,repeatDelay:r,repeatType:s,damping:a,type:o}=e;if(!n||!n.owner||!(n.owner.current instanceof HTMLElement))return!1;const{onUpdate:l,transformTemplate:c}=n.owner.getProps();return ob()&&i&&sb.has(i)&&!l&&!c&&!r&&s!=="mirror"&&a!==0&&o!=="inertia"}}const fb={type:"spring",stiffness:500,damping:25,restSpeed:10},hb=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restSpeed:10}),pb={type:"keyframes",duration:.8},mb={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},gb=(t,{keyframes:e})=>e.length>2?pb:ps.has(t)?t.startsWith("scale")?hb(e[1]):fb:mb;function vb({when:t,delay:e,delayChildren:n,staggerChildren:i,staggerDirection:r,repeat:s,repeatType:a,repeatDelay:o,from:l,elapsed:c,...d}){return!!Object.keys(d).length}const wm=(t,e,n,i={},r,s)=>a=>{const o=um(i,t)||{},l=o.delay||i.delay||0;let{elapsed:c=0}=i;c=c-Wi(l);let d={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:e.getVelocity(),...o,delay:-c,onUpdate:u=>{e.set(u),o.onUpdate&&o.onUpdate(u)},onComplete:()=>{a(),o.onComplete&&o.onComplete()},name:t,motionValue:e,element:s?void 0:r};vb(o)||(d={...d,...gb(t,d)}),d.duration&&(d.duration=Wi(d.duration)),d.repeatDelay&&(d.repeatDelay=Wi(d.repeatDelay)),d.from!==void 0&&(d.keyframes[0]=d.from);let f=!1;if((d.type===!1||d.duration===0&&!d.repeatDelay)&&(d.duration=0,d.delay===0&&(f=!0)),f&&!s&&e.get()!==void 0){const u=_u(d.keyframes,o);if(u!==void 0)return _t.update(()=>{d.onUpdate(u),d.onComplete()}),new F1([])}return!s&&O0.supports(d)?new O0(d):new Tm(d)};function xb({protectedKeys:t,needsAnimating:e},n){const i=t.hasOwnProperty(n)&&e[n]!==!0;return e[n]=!1,i}function $S(t,e,{delay:n=0,transitionOverride:i,type:r}={}){var s;let{transition:a=t.getDefaultTransition(),transitionEnd:o,...l}=e;i&&(a=i);const c=[],d=r&&t.animationState&&t.animationState.getState()[r];for(const f in l){const u=t.getValue(f,(s=t.latestValues[f])!==null&&s!==void 0?s:null),p=l[f];if(p===void 0||d&&xb(d,f))continue;const x={delay:n,...um(a||{},f)};let M=!1;if(window.MotionHandoffAnimation){const h=xS(t);if(h){const g=window.MotionHandoffAnimation(h,f,_t);g!==null&&(x.startTime=g,M=!0)}}Xf(t,f),u.start(wm(f,u,p,t.shouldReduceMotion&&gS.has(f)?{type:!1}:x,t,M));const v=u.animation;v&&c.push(v)}return o&&Promise.all(c).then(()=>{_t.update(()=>{o&&K1(t,o)})}),c}function Qf(t,e,n={}){var i;const r=yu(t,e,n.type==="exit"?(i=t.presenceContext)===null||i===void 0?void 0:i.custom:void 0);let{transition:s=t.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(s=n.transitionOverride);const a=r?()=>Promise.all($S(t,r,n)):()=>Promise.resolve(),o=t.variantChildren&&t.variantChildren.size?(c=0)=>{const{delayChildren:d=0,staggerChildren:f,staggerDirection:u}=s;return yb(t,e,d+c,f,u,n)}:()=>Promise.resolve(),{when:l}=s;if(l){const[c,d]=l==="beforeChildren"?[a,o]:[o,a];return c().then(()=>d())}else return Promise.all([a(),o(n.delay)])}function yb(t,e,n=0,i=0,r=1,s){const a=[],o=(t.variantChildren.size-1)*i,l=r===1?(c=0)=>c*i:(c=0)=>o-c*i;return Array.from(t.variantChildren).sort(_b).forEach((c,d)=>{c.notify("AnimationStart",e),a.push(Qf(c,e,{...s,delay:n+l(d)}).then(()=>c.notify("AnimationComplete",e)))}),Promise.all(a)}function _b(t,e){return t.sortNodePosition(e)}function Sb(t,e,n={}){t.notify("AnimationStart",e);let i;if(Array.isArray(e)){const r=e.map(s=>Qf(t,s,n));i=Promise.all(r)}else if(typeof e=="string")i=Qf(t,e,n);else{const r=typeof e=="function"?yu(t,e,n.custom):e;i=Promise.all($S(t,r,n))}return i.then(()=>{t.notify("AnimationComplete",e)})}const Mb=Jp.length;function qS(t){if(!t)return;if(!t.isControllingVariants){const n=t.parent?qS(t.parent)||{}:{};return t.props.initial!==void 0&&(n.initial=t.props.initial),n}const e={};for(let n=0;n<Mb;n++){const i=Jp[n],r=t.props[i];(Ro(r)||r===!1)&&(e[i]=r)}return e}const Eb=[...Zp].reverse(),Tb=Zp.length;function wb(t){return e=>Promise.all(e.map(({animation:n,options:i})=>Sb(t,n,i)))}function Ab(t){let e=wb(t),n=k0(),i=!0;const r=l=>(c,d)=>{var f;const u=yu(t,d,l==="exit"?(f=t.presenceContext)===null||f===void 0?void 0:f.custom:void 0);if(u){const{transition:p,transitionEnd:x,...M}=u;c={...c,...M,...x}}return c};function s(l){e=l(t)}function a(l){const{props:c}=t,d=qS(t.parent)||{},f=[],u=new Set;let p={},x=1/0;for(let v=0;v<Tb;v++){const h=Eb[v],g=n[h],S=c[h]!==void 0?c[h]:d[h],_=Ro(S),T=h===l?g.isActive:null;T===!1&&(x=v);let w=S===d[h]&&S!==c[h]&&_;if(w&&i&&t.manuallyAnimateOnMount&&(w=!1),g.protectedKeys={...p},!g.isActive&&T===null||!S&&!g.prevProp||vu(S)||typeof S=="boolean")continue;const R=bb(g.prevProp,S);let y=R||h===l&&g.isActive&&!w&&_||v>x&&_,P=!1;const L=Array.isArray(S)?S:[S];let D=L.reduce(r(h),{});T===!1&&(D={});const{prevResolvedValues:B={}}=g,Y={...B,...D},k=W=>{y=!0,u.has(W)&&(P=!0,u.delete(W)),g.needsAnimating[W]=!0;const z=t.getValue(W);z&&(z.liveStyle=!1)};for(const W in Y){const z=D[W],V=B[W];if(p.hasOwnProperty(W))continue;let b=!1;Gf(z)&&Gf(V)?b=!lS(z,V):b=z!==V,b?z!=null?k(W):u.add(W):z!==void 0&&u.has(W)?k(W):g.protectedKeys[W]=!0}g.prevProp=S,g.prevResolvedValues=D,g.isActive&&(p={...p,...D}),i&&t.blockInitialAnimation&&(y=!1),y&&(!(w&&R)||P)&&f.push(...L.map(W=>({animation:W,options:{type:h}})))}if(u.size){const v={};u.forEach(h=>{const g=t.getBaseTarget(h),S=t.getValue(h);S&&(S.liveStyle=!0),v[h]=g??null}),f.push({animation:v})}let M=!!f.length;return i&&(c.initial===!1||c.initial===c.animate)&&!t.manuallyAnimateOnMount&&(M=!1),i=!1,M?e(f):Promise.resolve()}function o(l,c){var d;if(n[l].isActive===c)return Promise.resolve();(d=t.variantChildren)===null||d===void 0||d.forEach(u=>{var p;return(p=u.animationState)===null||p===void 0?void 0:p.setActive(l,c)}),n[l].isActive=c;const f=a(l);for(const u in n)n[u].protectedKeys={};return f}return{animateChanges:a,setActive:o,setAnimateFunction:s,getState:()=>n,reset:()=>{n=k0(),i=!0}}}function bb(t,e){return typeof e=="string"?e!==t:Array.isArray(e)?!lS(e,t):!1}function kr(t=!1){return{isActive:t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function k0(){return{animate:kr(!0),whileInView:kr(),whileHover:kr(),whileTap:kr(),whileDrag:kr(),whileFocus:kr(),exit:kr()}}class Fr{constructor(e){this.isMounted=!1,this.node=e}update(){}}class Cb extends Fr{constructor(e){super(e),e.animationState||(e.animationState=Ab(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();vu(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:n}=this.node.prevProps||{};e!==n&&this.updateAnimationControlsSubscription()}unmount(){var e;this.node.animationState.reset(),(e=this.unmountControls)===null||e===void 0||e.call(this)}}let Rb=0;class Pb extends Fr{constructor(){super(...arguments),this.id=Rb++}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:n}=this.node.presenceContext,{isPresent:i}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===i)return;const r=this.node.animationState.setActive("exit",!e);n&&!e&&r.then(()=>n(this.id))}mount(){const{register:e}=this.node.presenceContext||{};e&&(this.unmount=e(this.id))}unmount(){}}const Nb={animation:{Feature:Cb},exit:{Feature:Pb}};function Do(t,e,n,i={passive:!0}){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n)}function Yo(t){return{point:{x:t.pageX,y:t.pageY}}}const Lb=t=>e=>hm(e)&&t(e,Yo(e));function oo(t,e,n,i){return Do(t,e,Lb(n),i)}const B0=(t,e)=>Math.abs(t-e);function Db(t,e){const n=B0(t.x,e.x),i=B0(t.y,e.y);return Math.sqrt(n**2+i**2)}class KS{constructor(e,n,{transformPagePoint:i,contextWindow:r,dragSnapToOrigin:s=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const f=ld(this.lastMoveEventInfo,this.history),u=this.startEvent!==null,p=Db(f.offset,{x:0,y:0})>=3;if(!u&&!p)return;const{point:x}=f,{timestamp:M}=$t;this.history.push({...x,timestamp:M});const{onStart:v,onMove:h}=this.handlers;u||(v&&v(this.lastMoveEvent,f),this.startEvent=this.lastMoveEvent),h&&h(this.lastMoveEvent,f)},this.handlePointerMove=(f,u)=>{this.lastMoveEvent=f,this.lastMoveEventInfo=od(u,this.transformPagePoint),_t.update(this.updatePoint,!0)},this.handlePointerUp=(f,u)=>{this.end();const{onEnd:p,onSessionEnd:x,resumeAnimation:M}=this.handlers;if(this.dragSnapToOrigin&&M&&M(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const v=ld(f.type==="pointercancel"?this.lastMoveEventInfo:od(u,this.transformPagePoint),this.history);this.startEvent&&p&&p(f,v),x&&x(f,v)},!hm(e))return;this.dragSnapToOrigin=s,this.handlers=n,this.transformPagePoint=i,this.contextWindow=r||window;const a=Yo(e),o=od(a,this.transformPagePoint),{point:l}=o,{timestamp:c}=$t;this.history=[{...l,timestamp:c}];const{onSessionStart:d}=n;d&&d(e,ld(o,this.history)),this.removeListeners=Xo(oo(this.contextWindow,"pointermove",this.handlePointerMove),oo(this.contextWindow,"pointerup",this.handlePointerUp),oo(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),Pr(this.updatePoint)}}function od(t,e){return e?{point:e(t.point)}:t}function V0(t,e){return{x:t.x-e.x,y:t.y-e.y}}function ld({point:t},e){return{point:t,delta:V0(t,ZS(e)),offset:V0(t,Ib(e)),velocity:Ub(e,.1)}}function Ib(t){return t[0]}function ZS(t){return t[t.length-1]}function Ub(t,e){if(t.length<2)return{x:0,y:0};let n=t.length-1,i=null;const r=ZS(t);for(;n>=0&&(i=t[n],!(r.timestamp-i.timestamp>Wi(e)));)n--;if(!i)return{x:0,y:0};const s=ji(r.timestamp-i.timestamp);if(s===0)return{x:0,y:0};const a={x:(r.x-i.x)/s,y:(r.y-i.y)/s};return a.x===1/0&&(a.x=0),a.y===1/0&&(a.y=0),a}const JS=1e-4,Fb=1-JS,Ob=1+JS,QS=.01,kb=0-QS,Bb=0+QS;function Fn(t){return t.max-t.min}function Vb(t,e,n){return Math.abs(t-e)<=n}function z0(t,e,n,i=.5){t.origin=i,t.originPoint=Et(e.min,e.max,t.origin),t.scale=Fn(n)/Fn(e),t.translate=Et(n.min,n.max,t.origin)-t.originPoint,(t.scale>=Fb&&t.scale<=Ob||isNaN(t.scale))&&(t.scale=1),(t.translate>=kb&&t.translate<=Bb||isNaN(t.translate))&&(t.translate=0)}function lo(t,e,n,i){z0(t.x,e.x,n.x,i?i.originX:void 0),z0(t.y,e.y,n.y,i?i.originY:void 0)}function H0(t,e,n){t.min=n.min+e.min,t.max=t.min+Fn(e)}function zb(t,e,n){H0(t.x,e.x,n.x),H0(t.y,e.y,n.y)}function G0(t,e,n){t.min=e.min-n.min,t.max=t.min+Fn(e)}function co(t,e,n){G0(t.x,e.x,n.x),G0(t.y,e.y,n.y)}function Hb(t,{min:e,max:n},i){return e!==void 0&&t<e?t=i?Et(e,t,i.min):Math.max(t,e):n!==void 0&&t>n&&(t=i?Et(n,t,i.max):Math.min(t,n)),t}function W0(t,e,n){return{min:e!==void 0?t.min+e:void 0,max:n!==void 0?t.max+n-(t.max-t.min):void 0}}function Gb(t,{top:e,left:n,bottom:i,right:r}){return{x:W0(t.x,n,r),y:W0(t.y,e,i)}}function j0(t,e){let n=e.min-t.min,i=e.max-t.max;return e.max-e.min<t.max-t.min&&([n,i]=[i,n]),{min:n,max:i}}function Wb(t,e){return{x:j0(t.x,e.x),y:j0(t.y,e.y)}}function jb(t,e){let n=.5;const i=Fn(t),r=Fn(e);return r>i?n=fa(e.min,e.max-i,t.min):i>r&&(n=fa(t.min,t.max-r,e.min)),Ji(0,1,n)}function Xb(t,e){const n={};return e.min!==void 0&&(n.min=e.min-t.min),e.max!==void 0&&(n.max=e.max-t.min),n}const eh=.35;function Yb(t=eh){return t===!1?t=0:t===!0&&(t=eh),{x:X0(t,"left","right"),y:X0(t,"top","bottom")}}function X0(t,e,n){return{min:Y0(t,e),max:Y0(t,n)}}function Y0(t,e){return typeof t=="number"?t:t[e]||0}const $0=()=>({translate:0,scale:1,origin:0,originPoint:0}),Ys=()=>({x:$0(),y:$0()}),q0=()=>({min:0,max:0}),Dt=()=>({x:q0(),y:q0()});function Hn(t){return[t("x"),t("y")]}function eM({top:t,left:e,right:n,bottom:i}){return{x:{min:e,max:n},y:{min:t,max:i}}}function $b({x:t,y:e}){return{top:e.min,right:t.max,bottom:e.max,left:t.min}}function qb(t,e){if(!e)return t;const n=e({x:t.left,y:t.top}),i=e({x:t.right,y:t.bottom});return{top:n.y,left:n.x,bottom:i.y,right:i.x}}function cd(t){return t===void 0||t===1}function th({scale:t,scaleX:e,scaleY:n}){return!cd(t)||!cd(e)||!cd(n)}function Xr(t){return th(t)||tM(t)||t.z||t.rotate||t.rotateX||t.rotateY||t.skewX||t.skewY}function tM(t){return K0(t.x)||K0(t.y)}function K0(t){return t&&t!=="0%"}function Wc(t,e,n){const i=t-n,r=e*i;return n+r}function Z0(t,e,n,i,r){return r!==void 0&&(t=Wc(t,r,i)),Wc(t,n,i)+e}function nh(t,e=0,n=1,i,r){t.min=Z0(t.min,e,n,i,r),t.max=Z0(t.max,e,n,i,r)}function nM(t,{x:e,y:n}){nh(t.x,e.translate,e.scale,e.originPoint),nh(t.y,n.translate,n.scale,n.originPoint)}const J0=.999999999999,Q0=1.0000000000001;function Kb(t,e,n,i=!1){const r=n.length;if(!r)return;e.x=e.y=1;let s,a;for(let o=0;o<r;o++){s=n[o],a=s.projectionDelta;const{visualElement:l}=s.options;l&&l.props.style&&l.props.style.display==="contents"||(i&&s.options.layoutScroll&&s.scroll&&s!==s.root&&qs(t,{x:-s.scroll.offset.x,y:-s.scroll.offset.y}),a&&(e.x*=a.x.scale,e.y*=a.y.scale,nM(t,a)),i&&Xr(s.latestValues)&&qs(t,s.latestValues))}e.x<Q0&&e.x>J0&&(e.x=1),e.y<Q0&&e.y>J0&&(e.y=1)}function $s(t,e){t.min=t.min+e,t.max=t.max+e}function ev(t,e,n,i,r=.5){const s=Et(t.min,t.max,r);nh(t,e,n,s,i)}function qs(t,e){ev(t.x,e.x,e.scaleX,e.scale,e.originX),ev(t.y,e.y,e.scaleY,e.scale,e.originY)}function iM(t,e){return eM(qb(t.getBoundingClientRect(),e))}function Zb(t,e,n){const i=iM(t,n),{scroll:r}=e;return r&&($s(i.x,r.offset.x),$s(i.y,r.offset.y)),i}const rM=({current:t})=>t?t.ownerDocument.defaultView:null,Jb=new WeakMap;class Qb{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Dt(),this.visualElement=e}start(e,{snapToCursor:n=!1}={}){const{presenceContext:i}=this.visualElement;if(i&&i.isPresent===!1)return;const r=d=>{const{dragSnapToOrigin:f}=this.getProps();f?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor(Yo(d).point)},s=(d,f)=>{const{drag:u,dragPropagation:p,onDragStart:x}=this.getProps();if(u&&!p&&(this.openDragLock&&this.openDragLock(),this.openDragLock=j1(u),!this.openDragLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Hn(v=>{let h=this.getAxisMotionValue(v).get()||0;if(Ai.test(h)){const{projection:g}=this.visualElement;if(g&&g.layout){const S=g.layout.layoutBox[v];S&&(h=Fn(S)*(parseFloat(h)/100))}}this.originPoint[v]=h}),x&&_t.postRender(()=>x(d,f)),Xf(this.visualElement,"transform");const{animationState:M}=this.visualElement;M&&M.setActive("whileDrag",!0)},a=(d,f)=>{const{dragPropagation:u,dragDirectionLock:p,onDirectionLock:x,onDrag:M}=this.getProps();if(!u&&!this.openDragLock)return;const{offset:v}=f;if(p&&this.currentDirection===null){this.currentDirection=eC(v),this.currentDirection!==null&&x&&x(this.currentDirection);return}this.updateAxis("x",f.point,v),this.updateAxis("y",f.point,v),this.visualElement.render(),M&&M(d,f)},o=(d,f)=>this.stop(d,f),l=()=>Hn(d=>{var f;return this.getAnimationState(d)==="paused"&&((f=this.getAxisMotionValue(d).animation)===null||f===void 0?void 0:f.play())}),{dragSnapToOrigin:c}=this.getProps();this.panSession=new KS(e,{onSessionStart:r,onStart:s,onMove:a,onSessionEnd:o,resumeAnimation:l},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:c,contextWindow:rM(this.visualElement)})}stop(e,n){const i=this.isDragging;if(this.cancel(),!i)return;const{velocity:r}=n;this.startAnimation(r);const{onDragEnd:s}=this.getProps();s&&_t.postRender(()=>s(e,n))}cancel(){this.isDragging=!1;const{projection:e,animationState:n}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:i}=this.getProps();!i&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(e,n,i){const{drag:r}=this.getProps();if(!i||!yl(e,r,this.currentDirection))return;const s=this.getAxisMotionValue(e);let a=this.originPoint[e]+i[e];this.constraints&&this.constraints[e]&&(a=Hb(a,this.constraints[e],this.elastic[e])),s.set(a)}resolveConstraints(){var e;const{dragConstraints:n,dragElastic:i}=this.getProps(),r=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(e=this.visualElement.projection)===null||e===void 0?void 0:e.layout,s=this.constraints;n&&js(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&r?this.constraints=Gb(r.layoutBox,n):this.constraints=!1,this.elastic=Yb(i),s!==this.constraints&&r&&this.constraints&&!this.hasMutatedConstraints&&Hn(a=>{this.constraints!==!1&&this.getAxisMotionValue(a)&&(this.constraints[a]=Xb(r.layoutBox[a],this.constraints[a]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:n}=this.getProps();if(!e||!js(e))return!1;const i=e.current,{projection:r}=this.visualElement;if(!r||!r.layout)return!1;const s=Zb(i,r.root,this.visualElement.getTransformPagePoint());let a=Wb(r.layout.layoutBox,s);if(n){const o=n($b(a));this.hasMutatedConstraints=!!o,o&&(a=eM(o))}return a}startAnimation(e){const{drag:n,dragMomentum:i,dragElastic:r,dragTransition:s,dragSnapToOrigin:a,onDragTransitionEnd:o}=this.getProps(),l=this.constraints||{},c=Hn(d=>{if(!yl(d,n,this.currentDirection))return;let f=l&&l[d]||{};a&&(f={min:0,max:0});const u=r?200:1e6,p=r?40:1e7,x={type:"inertia",velocity:i?e[d]:0,bounceStiffness:u,bounceDamping:p,timeConstant:750,restDelta:1,restSpeed:10,...s,...f};return this.startAxisValueAnimation(d,x)});return Promise.all(c).then(o)}startAxisValueAnimation(e,n){const i=this.getAxisMotionValue(e);return Xf(this.visualElement,e),i.start(wm(e,i,0,n,this.visualElement,!1))}stopAnimation(){Hn(e=>this.getAxisMotionValue(e).stop())}pauseAnimation(){Hn(e=>{var n;return(n=this.getAxisMotionValue(e).animation)===null||n===void 0?void 0:n.pause()})}getAnimationState(e){var n;return(n=this.getAxisMotionValue(e).animation)===null||n===void 0?void 0:n.state}getAxisMotionValue(e){const n=`_drag${e.toUpperCase()}`,i=this.visualElement.getProps(),r=i[n];return r||this.visualElement.getValue(e,(i.initial?i.initial[e]:void 0)||0)}snapToCursor(e){Hn(n=>{const{drag:i}=this.getProps();if(!yl(n,i,this.currentDirection))return;const{projection:r}=this.visualElement,s=this.getAxisMotionValue(n);if(r&&r.layout){const{min:a,max:o}=r.layout.layoutBox[n];s.set(e[n]-Et(a,o,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:n}=this.getProps(),{projection:i}=this.visualElement;if(!js(n)||!i||!this.constraints)return;this.stopAnimation();const r={x:0,y:0};Hn(a=>{const o=this.getAxisMotionValue(a);if(o&&this.constraints!==!1){const l=o.get();r[a]=jb({min:l,max:l},this.constraints[a])}});const{transformTemplate:s}=this.visualElement.getProps();this.visualElement.current.style.transform=s?s({},""):"none",i.root&&i.root.updateScroll(),i.updateLayout(),this.resolveConstraints(),Hn(a=>{if(!yl(a,e,null))return;const o=this.getAxisMotionValue(a),{min:l,max:c}=this.constraints[a];o.set(Et(l,c,r[a]))})}addListeners(){if(!this.visualElement.current)return;Jb.set(this.visualElement,this);const e=this.visualElement.current,n=oo(e,"pointerdown",l=>{const{drag:c,dragListener:d=!0}=this.getProps();c&&d&&this.start(l)}),i=()=>{const{dragConstraints:l}=this.getProps();js(l)&&l.current&&(this.constraints=this.resolveRefConstraints())},{projection:r}=this.visualElement,s=r.addEventListener("measure",i);r&&!r.layout&&(r.root&&r.root.updateScroll(),r.updateLayout()),_t.read(i);const a=Do(window,"resize",()=>this.scalePositionWithinConstraints()),o=r.addEventListener("didUpdate",({delta:l,hasLayoutChanged:c})=>{this.isDragging&&c&&(Hn(d=>{const f=this.getAxisMotionValue(d);f&&(this.originPoint[d]+=l[d].translate,f.set(f.get()+l[d].translate))}),this.visualElement.render())});return()=>{a(),n(),s(),o&&o()}}getProps(){const e=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:i=!1,dragPropagation:r=!1,dragConstraints:s=!1,dragElastic:a=eh,dragMomentum:o=!0}=e;return{...e,drag:n,dragDirectionLock:i,dragPropagation:r,dragConstraints:s,dragElastic:a,dragMomentum:o}}}function yl(t,e,n){return(e===!0||e===t)&&(n===null||n===t)}function eC(t,e=10){let n=null;return Math.abs(t.y)>e?n="y":Math.abs(t.x)>e&&(n="x"),n}class tC extends Fr{constructor(e){super(e),this.removeGroupControls=In,this.removeListeners=In,this.controls=new Qb(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||In}unmount(){this.removeGroupControls(),this.removeListeners()}}const tv=t=>(e,n)=>{t&&_t.postRender(()=>t(e,n))};class nC extends Fr{constructor(){super(...arguments),this.removePointerDownListener=In}onPointerDown(e){this.session=new KS(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:rM(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:n,onPan:i,onPanEnd:r}=this.node.getProps();return{onSessionStart:tv(e),onStart:tv(n),onMove:i,onEnd:(s,a)=>{delete this.session,r&&_t.postRender(()=>r(s,a))}}}mount(){this.removePointerDownListener=oo(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const oc={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function nv(t,e){return e.max===e.min?0:t/(e.max-e.min)*100}const Ia={correct:(t,e)=>{if(!e.target)return t;if(typeof t=="string")if(ke.test(t))t=parseFloat(t);else return t;const n=nv(t,e.target.x),i=nv(t,e.target.y);return`${n}% ${i}%`}},iC={correct:(t,{treeScale:e,projectionDelta:n})=>{const i=t,r=Nr.parse(t);if(r.length>5)return i;const s=Nr.createTransformer(t),a=typeof r[0]!="number"?1:0,o=n.x.scale*e.x,l=n.y.scale*e.y;r[0+a]/=o,r[1+a]/=l;const c=Et(o,l,.5);return typeof r[2+a]=="number"&&(r[2+a]/=c),typeof r[3+a]=="number"&&(r[3+a]/=c),s(r)}};class rC extends se.Component{componentDidMount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:i,layoutId:r}=this.props,{projection:s}=e;T1(sC),s&&(n.group&&n.group.add(s),i&&i.register&&r&&i.register(s),s.root.didUpdate(),s.addEventListener("animationComplete",()=>{this.safeToRemove()}),s.setOptions({...s.options,onExitComplete:()=>this.safeToRemove()})),oc.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:n,visualElement:i,drag:r,isPresent:s}=this.props,a=i.projection;return a&&(a.isPresent=s,r||e.layoutDependency!==n||n===void 0?a.willUpdate():this.safeToRemove(),e.isPresent!==s&&(s?a.promote():a.relegate()||_t.postRender(()=>{const o=a.getStack();(!o||!o.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),em.postRender(()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:i}=this.props,{projection:r}=e;r&&(r.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(r),i&&i.deregister&&i.deregister(r))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function sM(t){const[e,n]=z_(),i=se.useContext(Xp);return m.jsx(rC,{...t,layoutGroup:i,switchLayoutGroup:se.useContext(q_),isPresent:e,safeToRemove:n})}const sC={borderRadius:{...Ia,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Ia,borderTopRightRadius:Ia,borderBottomLeftRadius:Ia,borderBottomRightRadius:Ia,boxShadow:iC};function aC(t,e,n){const i=an(t)?t:No(t);return i.start(wm("",i,e,n)),i.animation}function oC(t){return t instanceof SVGElement&&t.tagName!=="svg"}const lC=(t,e)=>t.depth-e.depth;class cC{constructor(){this.children=[],this.isDirty=!1}add(e){pm(this.children,e),this.isDirty=!0}remove(e){mm(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(lC),this.isDirty=!1,this.children.forEach(e)}}function uC(t,e){const n=bi.now(),i=({timestamp:r})=>{const s=r-n;s>=e&&(Pr(i),t(s-e))};return _t.read(i,!0),()=>Pr(i)}const aM=["TopLeft","TopRight","BottomLeft","BottomRight"],dC=aM.length,iv=t=>typeof t=="string"?parseFloat(t):t,rv=t=>typeof t=="number"||ke.test(t);function fC(t,e,n,i,r,s){r?(t.opacity=Et(0,n.opacity!==void 0?n.opacity:1,hC(i)),t.opacityExit=Et(e.opacity!==void 0?e.opacity:1,0,pC(i))):s&&(t.opacity=Et(e.opacity!==void 0?e.opacity:1,n.opacity!==void 0?n.opacity:1,i));for(let a=0;a<dC;a++){const o=`border${aM[a]}Radius`;let l=sv(e,o),c=sv(n,o);if(l===void 0&&c===void 0)continue;l||(l=0),c||(c=0),l===0||c===0||rv(l)===rv(c)?(t[o]=Math.max(Et(iv(l),iv(c),i),0),(Ai.test(c)||Ai.test(l))&&(t[o]+="%")):t[o]=c}(e.rotate||n.rotate)&&(t.rotate=Et(e.rotate||0,n.rotate||0,i))}function sv(t,e){return t[e]!==void 0?t[e]:t.borderRadius}const hC=oM(0,.5,wS),pC=oM(.5,.95,In);function oM(t,e,n){return i=>i<t?0:i>e?1:n(fa(t,e,i))}function av(t,e){t.min=e.min,t.max=e.max}function Vn(t,e){av(t.x,e.x),av(t.y,e.y)}function ov(t,e){t.translate=e.translate,t.scale=e.scale,t.originPoint=e.originPoint,t.origin=e.origin}function lv(t,e,n,i,r){return t-=e,t=Wc(t,1/n,i),r!==void 0&&(t=Wc(t,1/r,i)),t}function mC(t,e=0,n=1,i=.5,r,s=t,a=t){if(Ai.test(e)&&(e=parseFloat(e),e=Et(a.min,a.max,e/100)-a.min),typeof e!="number")return;let o=Et(s.min,s.max,i);t===s&&(o-=e),t.min=lv(t.min,e,n,o,r),t.max=lv(t.max,e,n,o,r)}function cv(t,e,[n,i,r],s,a){mC(t,e[n],e[i],e[r],e.scale,s,a)}const gC=["x","scaleX","originX"],vC=["y","scaleY","originY"];function uv(t,e,n,i){cv(t.x,e,gC,n?n.x:void 0,i?i.x:void 0),cv(t.y,e,vC,n?n.y:void 0,i?i.y:void 0)}function dv(t){return t.translate===0&&t.scale===1}function lM(t){return dv(t.x)&&dv(t.y)}function fv(t,e){return t.min===e.min&&t.max===e.max}function xC(t,e){return fv(t.x,e.x)&&fv(t.y,e.y)}function hv(t,e){return Math.round(t.min)===Math.round(e.min)&&Math.round(t.max)===Math.round(e.max)}function cM(t,e){return hv(t.x,e.x)&&hv(t.y,e.y)}function pv(t){return Fn(t.x)/Fn(t.y)}function mv(t,e){return t.translate===e.translate&&t.scale===e.scale&&t.originPoint===e.originPoint}class yC{constructor(){this.members=[]}add(e){pm(this.members,e),e.scheduleRender()}remove(e){if(mm(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(e){const n=this.members.findIndex(r=>e===r);if(n===0)return!1;let i;for(let r=n;r>=0;r--){const s=this.members[r];if(s.isPresent!==!1){i=s;break}}return i?(this.promote(i),!0):!1}promote(e,n){const i=this.lead;if(e!==i&&(this.prevLead=i,this.lead=e,e.show(),i)){i.instance&&i.scheduleRender(),e.scheduleRender(),e.resumeFrom=i,n&&(e.resumeFrom.preserveOpacity=!0),i.snapshot&&(e.snapshot=i.snapshot,e.snapshot.latestValues=i.animationValues||i.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);const{crossfade:r}=e.options;r===!1&&i.hide()}}exitAnimationComplete(){this.members.forEach(e=>{const{options:n,resumingFrom:i}=e;n.onExitComplete&&n.onExitComplete(),i&&i.options.onExitComplete&&i.options.onExitComplete()})}scheduleRender(){this.members.forEach(e=>{e.instance&&e.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function _C(t,e,n){let i="";const r=t.x.translate/e.x,s=t.y.translate/e.y,a=(n==null?void 0:n.z)||0;if((r||s||a)&&(i=`translate3d(${r}px, ${s}px, ${a}px) `),(e.x!==1||e.y!==1)&&(i+=`scale(${1/e.x}, ${1/e.y}) `),n){const{transformPerspective:c,rotate:d,rotateX:f,rotateY:u,skewX:p,skewY:x}=n;c&&(i=`perspective(${c}px) ${i}`),d&&(i+=`rotate(${d}deg) `),f&&(i+=`rotateX(${f}deg) `),u&&(i+=`rotateY(${u}deg) `),p&&(i+=`skewX(${p}deg) `),x&&(i+=`skewY(${x}deg) `)}const o=t.x.scale*e.x,l=t.y.scale*e.y;return(o!==1||l!==1)&&(i+=`scale(${o}, ${l})`),i||"none"}const Yr={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0},$a=typeof window<"u"&&window.MotionDebug!==void 0,ud=["","X","Y","Z"],SC={visibility:"hidden"},gv=1e3;let MC=0;function dd(t,e,n,i){const{latestValues:r}=e;r[t]&&(n[t]=r[t],e.setStaticValue(t,0),i&&(i[t]=0))}function uM(t){if(t.hasCheckedOptimisedAppear=!0,t.root===t)return;const{visualElement:e}=t.options;if(!e)return;const n=xS(e);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:r,layoutId:s}=t.options;window.MotionCancelOptimisedAnimation(n,"transform",_t,!(r||s))}const{parent:i}=t;i&&!i.hasCheckedOptimisedAppear&&uM(i)}function dM({attachResizeListener:t,defaultParent:e,measureScroll:n,checkIsScrollRoot:i,resetTransform:r}){return class{constructor(a={},o=e==null?void 0:e()){this.id=MC++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,$a&&(Yr.totalNodes=Yr.resolvedTargetDeltas=Yr.recalculatedProjection=0),this.nodes.forEach(wC),this.nodes.forEach(PC),this.nodes.forEach(NC),this.nodes.forEach(AC),$a&&window.MotionDebug.record(Yr)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=a,this.root=o?o.root||o:this,this.path=o?[...o.path,o]:[],this.parent=o,this.depth=o?o.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new cC)}addEventListener(a,o){return this.eventHandlers.has(a)||this.eventHandlers.set(a,new gm),this.eventHandlers.get(a).add(o)}notifyListeners(a,...o){const l=this.eventHandlers.get(a);l&&l.notify(...o)}hasListeners(a){return this.eventHandlers.has(a)}mount(a,o=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=oC(a),this.instance=a;const{layoutId:l,layout:c,visualElement:d}=this.options;if(d&&!d.current&&d.mount(a),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),o&&(c||l)&&(this.isLayoutDirty=!0),t){let f;const u=()=>this.root.updateBlockedByResize=!1;t(a,()=>{this.root.updateBlockedByResize=!0,f&&f(),f=uC(u,250),oc.hasAnimatedSinceResize&&(oc.hasAnimatedSinceResize=!1,this.nodes.forEach(xv))})}l&&this.root.registerSharedNode(l,this),this.options.animate!==!1&&d&&(l||c)&&this.addEventListener("didUpdate",({delta:f,hasLayoutChanged:u,hasRelativeTargetChanged:p,layout:x})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const M=this.options.transition||d.getDefaultTransition()||FC,{onLayoutAnimationStart:v,onLayoutAnimationComplete:h}=d.getProps(),g=!this.targetLayout||!cM(this.targetLayout,x)||p,S=!u&&p;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||S||u&&(g||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(f,S);const _={...um(M,"layout"),onPlay:v,onComplete:h};(d.shouldReduceMotion||this.options.layoutRoot)&&(_.delay=0,_.type=!1),this.startAnimation(_)}else u||xv(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=x})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const a=this.getStack();a&&a.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,Pr(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(LC),this.animationId++)}getTransformTemplate(){const{visualElement:a}=this.options;return a&&a.getProps().transformTemplate}willUpdate(a=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&uM(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let d=0;d<this.path.length;d++){const f=this.path[d];f.shouldResetTransform=!0,f.updateScroll("snapshot"),f.options.layoutRoot&&f.willUpdate(!1)}const{layoutId:o,layout:l}=this.options;if(o===void 0&&!l)return;const c=this.getTransformTemplate();this.prevTransformTemplateValue=c?c(this.latestValues,""):void 0,this.updateSnapshot(),a&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(vv);return}this.isUpdating||this.nodes.forEach(CC),this.isUpdating=!1,this.nodes.forEach(RC),this.nodes.forEach(EC),this.nodes.forEach(TC),this.clearAllSnapshots();const o=bi.now();$t.delta=Ji(0,1e3/60,o-$t.timestamp),$t.timestamp=o,$t.isProcessing=!0,td.update.process($t),td.preRender.process($t),td.render.process($t),$t.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,em.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(bC),this.sharedNodes.forEach(DC)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,_t.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){_t.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const a=this.layout;this.layout=this.measure(!1),this.layoutCorrected=Dt(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:o}=this.options;o&&o.notify("LayoutMeasure",this.layout.layoutBox,a?a.layoutBox:void 0)}updateScroll(a="measure"){let o=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===a&&(o=!1),o){const l=i(this.instance);this.scroll={animationId:this.root.animationId,phase:a,isRoot:l,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:l}}}resetTransform(){if(!r)return;const a=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,o=this.projectionDelta&&!lM(this.projectionDelta),l=this.getTransformTemplate(),c=l?l(this.latestValues,""):void 0,d=c!==this.prevTransformTemplateValue;a&&(o||Xr(this.latestValues)||d)&&(r(this.instance,c),this.shouldResetTransform=!1,this.scheduleRender())}measure(a=!0){const o=this.measurePageBox();let l=this.removeElementScroll(o);return a&&(l=this.removeTransform(l)),OC(l),{animationId:this.root.animationId,measuredBox:o,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){var a;const{visualElement:o}=this.options;if(!o)return Dt();const l=o.measureViewportBox();if(!(((a=this.scroll)===null||a===void 0?void 0:a.wasRoot)||this.path.some(kC))){const{scroll:d}=this.root;d&&($s(l.x,d.offset.x),$s(l.y,d.offset.y))}return l}removeElementScroll(a){var o;const l=Dt();if(Vn(l,a),!((o=this.scroll)===null||o===void 0)&&o.wasRoot)return l;for(let c=0;c<this.path.length;c++){const d=this.path[c],{scroll:f,options:u}=d;d!==this.root&&f&&u.layoutScroll&&(f.wasRoot&&Vn(l,a),$s(l.x,f.offset.x),$s(l.y,f.offset.y))}return l}applyTransform(a,o=!1){const l=Dt();Vn(l,a);for(let c=0;c<this.path.length;c++){const d=this.path[c];!o&&d.options.layoutScroll&&d.scroll&&d!==d.root&&qs(l,{x:-d.scroll.offset.x,y:-d.scroll.offset.y}),Xr(d.latestValues)&&qs(l,d.latestValues)}return Xr(this.latestValues)&&qs(l,this.latestValues),l}removeTransform(a){const o=Dt();Vn(o,a);for(let l=0;l<this.path.length;l++){const c=this.path[l];if(!c.instance||!Xr(c.latestValues))continue;th(c.latestValues)&&c.updateSnapshot();const d=Dt(),f=c.measurePageBox();Vn(d,f),uv(o,c.latestValues,c.snapshot?c.snapshot.layoutBox:void 0,d)}return Xr(this.latestValues)&&uv(o,this.latestValues),o}setTargetDelta(a){this.targetDelta=a,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(a){this.options={...this.options,...a,crossfade:a.crossfade!==void 0?a.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==$t.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(a=!1){var o;const l=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=l.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=l.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=l.isSharedProjectionDirty);const c=!!this.resumingFrom||this!==l;if(!(a||c&&this.isSharedProjectionDirty||this.isProjectionDirty||!((o=this.parent)===null||o===void 0)&&o.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:f,layoutId:u}=this.options;if(!(!this.layout||!(f||u))){if(this.resolvedRelativeTargetAt=$t.timestamp,!this.targetDelta&&!this.relativeTarget){const p=this.getClosestProjectingParent();p&&p.layout&&this.animationProgress!==1?(this.relativeParent=p,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Dt(),this.relativeTargetOrigin=Dt(),co(this.relativeTargetOrigin,this.layout.layoutBox,p.layout.layoutBox),Vn(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=Dt(),this.targetWithTransforms=Dt()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),zb(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Vn(this.target,this.layout.layoutBox),nM(this.target,this.targetDelta)):Vn(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const p=this.getClosestProjectingParent();p&&!!p.resumingFrom==!!this.resumingFrom&&!p.options.layoutScroll&&p.target&&this.animationProgress!==1?(this.relativeParent=p,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Dt(),this.relativeTargetOrigin=Dt(),co(this.relativeTargetOrigin,this.target,p.target),Vn(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}$a&&Yr.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||th(this.parent.latestValues)||tM(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var a;const o=this.getLead(),l=!!this.resumingFrom||this!==o;let c=!0;if((this.isProjectionDirty||!((a=this.parent)===null||a===void 0)&&a.isProjectionDirty)&&(c=!1),l&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(c=!1),this.resolvedRelativeTargetAt===$t.timestamp&&(c=!1),c)return;const{layout:d,layoutId:f}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(d||f))return;Vn(this.layoutCorrected,this.layout.layoutBox);const u=this.treeScale.x,p=this.treeScale.y;Kb(this.layoutCorrected,this.treeScale,this.path,l),o.layout&&!o.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(o.target=o.layout.layoutBox,o.targetWithTransforms=Dt());const{target:x}=o;if(!x){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(ov(this.prevProjectionDelta.x,this.projectionDelta.x),ov(this.prevProjectionDelta.y,this.projectionDelta.y)),lo(this.projectionDelta,this.layoutCorrected,x,this.latestValues),(this.treeScale.x!==u||this.treeScale.y!==p||!mv(this.projectionDelta.x,this.prevProjectionDelta.x)||!mv(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",x)),$a&&Yr.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(a=!0){var o;if((o=this.options.visualElement)===null||o===void 0||o.scheduleRender(),a){const l=this.getStack();l&&l.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Ys(),this.projectionDelta=Ys(),this.projectionDeltaWithTransform=Ys()}setAnimationOrigin(a,o=!1){const l=this.snapshot,c=l?l.latestValues:{},d={...this.latestValues},f=Ys();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!o;const u=Dt(),p=l?l.source:void 0,x=this.layout?this.layout.source:void 0,M=p!==x,v=this.getStack(),h=!v||v.members.length<=1,g=!!(M&&!h&&this.options.crossfade===!0&&!this.path.some(UC));this.animationProgress=0;let S;this.mixTargetDelta=_=>{const T=_/1e3;yv(f.x,a.x,T),yv(f.y,a.y,T),this.setTargetDelta(f),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(co(u,this.layout.layoutBox,this.relativeParent.layout.layoutBox),IC(this.relativeTarget,this.relativeTargetOrigin,u,T),S&&xC(this.relativeTarget,S)&&(this.isProjectionDirty=!1),S||(S=Dt()),Vn(S,this.relativeTarget)),M&&(this.animationValues=d,fC(d,c,this.latestValues,T,g,h)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=T},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(a){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(Pr(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=_t.update(()=>{oc.hasAnimatedSinceResize=!0,this.currentAnimation=aC(0,gv,{...a,onUpdate:o=>{this.mixTargetDelta(o),a.onUpdate&&a.onUpdate(o)},onComplete:()=>{a.onComplete&&a.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const a=this.getStack();a&&a.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(gv),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const a=this.getLead();let{targetWithTransforms:o,target:l,layout:c,latestValues:d}=a;if(!(!o||!l||!c)){if(this!==a&&this.layout&&c&&fM(this.options.animationType,this.layout.layoutBox,c.layoutBox)){l=this.target||Dt();const f=Fn(this.layout.layoutBox.x);l.x.min=a.target.x.min,l.x.max=l.x.min+f;const u=Fn(this.layout.layoutBox.y);l.y.min=a.target.y.min,l.y.max=l.y.min+u}Vn(o,l),qs(o,d),lo(this.projectionDeltaWithTransform,this.layoutCorrected,o,d)}}registerSharedNode(a,o){this.sharedNodes.has(a)||this.sharedNodes.set(a,new yC),this.sharedNodes.get(a).add(o);const c=o.options.initialPromotionConfig;o.promote({transition:c?c.transition:void 0,preserveFollowOpacity:c&&c.shouldPreserveFollowOpacity?c.shouldPreserveFollowOpacity(o):void 0})}isLead(){const a=this.getStack();return a?a.lead===this:!0}getLead(){var a;const{layoutId:o}=this.options;return o?((a=this.getStack())===null||a===void 0?void 0:a.lead)||this:this}getPrevLead(){var a;const{layoutId:o}=this.options;return o?(a=this.getStack())===null||a===void 0?void 0:a.prevLead:void 0}getStack(){const{layoutId:a}=this.options;if(a)return this.root.sharedNodes.get(a)}promote({needsReset:a,transition:o,preserveFollowOpacity:l}={}){const c=this.getStack();c&&c.promote(this,l),a&&(this.projectionDelta=void 0,this.needsReset=!0),o&&this.setOptions({transition:o})}relegate(){const a=this.getStack();return a?a.relegate(this):!1}resetSkewAndRotation(){const{visualElement:a}=this.options;if(!a)return;let o=!1;const{latestValues:l}=a;if((l.z||l.rotate||l.rotateX||l.rotateY||l.rotateZ||l.skewX||l.skewY)&&(o=!0),!o)return;const c={};l.z&&dd("z",a,c,this.animationValues);for(let d=0;d<ud.length;d++)dd(`rotate${ud[d]}`,a,c,this.animationValues),dd(`skew${ud[d]}`,a,c,this.animationValues);a.render();for(const d in c)a.setStaticValue(d,c[d]),this.animationValues&&(this.animationValues[d]=c[d]);a.scheduleRender()}getProjectionStyles(a){var o,l;if(!this.instance||this.isSVG)return;if(!this.isVisible)return SC;const c={visibility:""},d=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,c.opacity="",c.pointerEvents=sc(a==null?void 0:a.pointerEvents)||"",c.transform=d?d(this.latestValues,""):"none",c;const f=this.getLead();if(!this.projectionDelta||!this.layout||!f.target){const M={};return this.options.layoutId&&(M.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,M.pointerEvents=sc(a==null?void 0:a.pointerEvents)||""),this.hasProjected&&!Xr(this.latestValues)&&(M.transform=d?d({},""):"none",this.hasProjected=!1),M}const u=f.animationValues||f.latestValues;this.applyTransformsToTarget(),c.transform=_C(this.projectionDeltaWithTransform,this.treeScale,u),d&&(c.transform=d(u,c.transform));const{x:p,y:x}=this.projectionDelta;c.transformOrigin=`${p.origin*100}% ${x.origin*100}% 0`,f.animationValues?c.opacity=f===this?(l=(o=u.opacity)!==null&&o!==void 0?o:this.latestValues.opacity)!==null&&l!==void 0?l:1:this.preserveOpacity?this.latestValues.opacity:u.opacityExit:c.opacity=f===this?u.opacity!==void 0?u.opacity:"":u.opacityExit!==void 0?u.opacityExit:0;for(const M in Bc){if(u[M]===void 0)continue;const{correct:v,applyTo:h}=Bc[M],g=c.transform==="none"?u[M]:v(u[M],f);if(h){const S=h.length;for(let _=0;_<S;_++)c[h[_]]=g}else c[M]=g}return this.options.layoutId&&(c.pointerEvents=f===this?sc(a==null?void 0:a.pointerEvents)||"":"none"),c}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(a=>{var o;return(o=a.currentAnimation)===null||o===void 0?void 0:o.stop()}),this.root.nodes.forEach(vv),this.root.sharedNodes.clear()}}}function EC(t){t.updateLayout()}function TC(t){var e;const n=((e=t.resumeFrom)===null||e===void 0?void 0:e.snapshot)||t.snapshot;if(t.isLead()&&t.layout&&n&&t.hasListeners("didUpdate")){const{layoutBox:i,measuredBox:r}=t.layout,{animationType:s}=t.options,a=n.source!==t.layout.source;s==="size"?Hn(f=>{const u=a?n.measuredBox[f]:n.layoutBox[f],p=Fn(u);u.min=i[f].min,u.max=u.min+p}):fM(s,n.layoutBox,i)&&Hn(f=>{const u=a?n.measuredBox[f]:n.layoutBox[f],p=Fn(i[f]);u.max=u.min+p,t.relativeTarget&&!t.currentAnimation&&(t.isProjectionDirty=!0,t.relativeTarget[f].max=t.relativeTarget[f].min+p)});const o=Ys();lo(o,i,n.layoutBox);const l=Ys();a?lo(l,t.applyTransform(r,!0),n.measuredBox):lo(l,i,n.layoutBox);const c=!lM(o);let d=!1;if(!t.resumeFrom){const f=t.getClosestProjectingParent();if(f&&!f.resumeFrom){const{snapshot:u,layout:p}=f;if(u&&p){const x=Dt();co(x,n.layoutBox,u.layoutBox);const M=Dt();co(M,i,p.layoutBox),cM(x,M)||(d=!0),f.options.layoutRoot&&(t.relativeTarget=M,t.relativeTargetOrigin=x,t.relativeParent=f)}}}t.notifyListeners("didUpdate",{layout:i,snapshot:n,delta:l,layoutDelta:o,hasLayoutChanged:c,hasRelativeTargetChanged:d})}else if(t.isLead()){const{onExitComplete:i}=t.options;i&&i()}t.options.transition=void 0}function wC(t){$a&&Yr.totalNodes++,t.parent&&(t.isProjecting()||(t.isProjectionDirty=t.parent.isProjectionDirty),t.isSharedProjectionDirty||(t.isSharedProjectionDirty=!!(t.isProjectionDirty||t.parent.isProjectionDirty||t.parent.isSharedProjectionDirty)),t.isTransformDirty||(t.isTransformDirty=t.parent.isTransformDirty))}function AC(t){t.isProjectionDirty=t.isSharedProjectionDirty=t.isTransformDirty=!1}function bC(t){t.clearSnapshot()}function vv(t){t.clearMeasurements()}function CC(t){t.isLayoutDirty=!1}function RC(t){const{visualElement:e}=t.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),t.resetTransform()}function xv(t){t.finishAnimation(),t.targetDelta=t.relativeTarget=t.target=void 0,t.isProjectionDirty=!0}function PC(t){t.resolveTargetDelta()}function NC(t){t.calcProjection()}function LC(t){t.resetSkewAndRotation()}function DC(t){t.removeLeadSnapshot()}function yv(t,e,n){t.translate=Et(e.translate,0,n),t.scale=Et(e.scale,1,n),t.origin=e.origin,t.originPoint=e.originPoint}function _v(t,e,n,i){t.min=Et(e.min,n.min,i),t.max=Et(e.max,n.max,i)}function IC(t,e,n,i){_v(t.x,e.x,n.x,i),_v(t.y,e.y,n.y,i)}function UC(t){return t.animationValues&&t.animationValues.opacityExit!==void 0}const FC={duration:.45,ease:[.4,0,.1,1]},Sv=t=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(t),Mv=Sv("applewebkit/")&&!Sv("chrome/")?Math.round:In;function Ev(t){t.min=Mv(t.min),t.max=Mv(t.max)}function OC(t){Ev(t.x),Ev(t.y)}function fM(t,e,n){return t==="position"||t==="preserve-aspect"&&!Vb(pv(e),pv(n),.2)}function kC(t){var e;return t!==t.root&&((e=t.scroll)===null||e===void 0?void 0:e.wasRoot)}const BC=dM({attachResizeListener:(t,e)=>Do(t,"resize",e),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),fd={current:void 0},hM=dM({measureScroll:t=>({x:t.scrollLeft,y:t.scrollTop}),defaultParent:()=>{if(!fd.current){const t=new BC({});t.mount(window),t.setOptions({layoutScroll:!0}),fd.current=t}return fd.current},resetTransform:(t,e)=>{t.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:t=>window.getComputedStyle(t).position==="fixed"}),VC={pan:{Feature:nC},drag:{Feature:tC,ProjectionNode:hM,MeasureLayout:sM}};function Tv(t,e,n){const{props:i}=t;t.animationState&&i.whileHover&&t.animationState.setActive("whileHover",n==="Start");const r="onHover"+n,s=i[r];s&&_t.postRender(()=>s(e,Yo(e)))}class zC extends Fr{mount(){const{current:e}=this.node;e&&(this.unmount=V1(e,n=>(Tv(this.node,n,"Start"),i=>Tv(this.node,i,"End"))))}unmount(){}}class HC extends Fr{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Xo(Do(this.node.current,"focus",()=>this.onFocus()),Do(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function wv(t,e,n){const{props:i}=t;t.animationState&&i.whileTap&&t.animationState.setActive("whileTap",n==="Start");const r="onTap"+(n==="End"?"":n),s=i[r];s&&_t.postRender(()=>s(e,Yo(e)))}class GC extends Fr{mount(){const{current:e}=this.node;e&&(this.unmount=W1(e,n=>(wv(this.node,n,"Start"),(i,{success:r})=>wv(this.node,i,r?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const ih=new WeakMap,hd=new WeakMap,WC=t=>{const e=ih.get(t.target);e&&e(t)},jC=t=>{t.forEach(WC)};function XC({root:t,...e}){const n=t||document;hd.has(n)||hd.set(n,{});const i=hd.get(n),r=JSON.stringify(e);return i[r]||(i[r]=new IntersectionObserver(jC,{root:t,...e})),i[r]}function YC(t,e,n){const i=XC(e);return ih.set(t,n),i.observe(t),()=>{ih.delete(t),i.unobserve(t)}}const $C={some:0,all:1};class qC extends Fr{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:e={}}=this.node.getProps(),{root:n,margin:i,amount:r="some",once:s}=e,a={root:n?n.current:void 0,rootMargin:i,threshold:typeof r=="number"?r:$C[r]},o=l=>{const{isIntersecting:c}=l;if(this.isInView===c||(this.isInView=c,s&&!c&&this.hasEnteredView))return;c&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",c);const{onViewportEnter:d,onViewportLeave:f}=this.node.getProps(),u=c?d:f;u&&u(l)};return YC(this.node.current,a,o)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:n}=this.node;["amount","margin","root"].some(KC(e,n))&&this.startObserver()}unmount(){}}function KC({viewport:t={}},{viewport:e={}}={}){return n=>t[n]!==e[n]}const ZC={inView:{Feature:qC},tap:{Feature:GC},focus:{Feature:HC},hover:{Feature:zC}},JC={layout:{ProjectionNode:hM,MeasureLayout:sM}},rh={current:null},pM={current:!1};function QC(){if(pM.current=!0,!!qp)if(window.matchMedia){const t=window.matchMedia("(prefers-reduced-motion)"),e=()=>rh.current=t.matches;t.addListener(e),e()}else rh.current=!1}const eR=[...BS,rn,Nr],tR=t=>eR.find(kS(t)),Av=new WeakMap;function nR(t,e,n){for(const i in e){const r=e[i],s=n[i];if(an(r))t.addValue(i,r);else if(an(s))t.addValue(i,No(r,{owner:t}));else if(s!==r)if(t.hasValue(i)){const a=t.getValue(i);a.liveStyle===!0?a.jump(r):a.hasAnimated||a.set(r)}else{const a=t.getStaticValue(i);t.addValue(i,No(a!==void 0?a:r,{owner:t}))}}for(const i in n)e[i]===void 0&&t.removeValue(i);return e}const bv=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class iR{scrapeMotionValuesFromProps(e,n,i){return{}}constructor({parent:e,props:n,presenceContext:i,reducedMotionConfig:r,blockInitialAnimation:s,visualState:a},o={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=Mm,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const p=bi.now();this.renderScheduledAt<p&&(this.renderScheduledAt=p,_t.render(this.render,!1,!0))};const{latestValues:l,renderState:c,onUpdate:d}=a;this.onUpdate=d,this.latestValues=l,this.baseTarget={...l},this.initialValues=n.initial?{...l}:{},this.renderState=c,this.parent=e,this.props=n,this.presenceContext=i,this.depth=e?e.depth+1:0,this.reducedMotionConfig=r,this.options=o,this.blockInitialAnimation=!!s,this.isControllingVariants=xu(n),this.isVariantNode=Y_(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:f,...u}=this.scrapeMotionValuesFromProps(n,{},this);for(const p in u){const x=u[p];l[p]!==void 0&&an(x)&&x.set(l[p],!1)}}mount(e){this.current=e,Av.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,i)=>this.bindToMotionValue(i,n)),pM.current||QC(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:rh.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){Av.delete(this.current),this.projection&&this.projection.unmount(),Pr(this.notifyUpdate),Pr(this.render),this.valueSubscriptions.forEach(e=>e()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const e in this.events)this.events[e].clear();for(const e in this.features){const n=this.features[e];n&&(n.unmount(),n.isMounted=!1)}this.current=null}bindToMotionValue(e,n){this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)();const i=ps.has(e),r=n.on("change",o=>{this.latestValues[e]=o,this.props.onUpdate&&_t.preRender(this.notifyUpdate),i&&this.projection&&(this.projection.isTransformDirty=!0)}),s=n.on("renderRequest",this.scheduleRender);let a;window.MotionCheckAppearSync&&(a=window.MotionCheckAppearSync(this,e,n)),this.valueSubscriptions.set(e,()=>{r(),s(),a&&a(),n.owner&&n.stop()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e="animation";for(e in ha){const n=ha[e];if(!n)continue;const{isEnabled:i,Feature:r}=n;if(!this.features[e]&&r&&i(this.props)&&(this.features[e]=new r(this)),this.features[e]){const s=this.features[e];s.isMounted?s.update():(s.mount(),s.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Dt()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,n){this.latestValues[e]=n}update(e,n){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let i=0;i<bv.length;i++){const r=bv[i];this.propEventSubscriptions[r]&&(this.propEventSubscriptions[r](),delete this.propEventSubscriptions[r]);const s="on"+r,a=e[s];a&&(this.propEventSubscriptions[r]=this.on(r,a))}this.prevMotionValues=nR(this,this.scrapeMotionValuesFromProps(e,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue(),this.onUpdate&&this.onUpdate(this)}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(e),()=>n.variantChildren.delete(e)}addValue(e,n){const i=this.values.get(e);n!==i&&(i&&this.removeValue(e),this.bindToMotionValue(e,n),this.values.set(e,n),this.latestValues[e]=n.get())}removeValue(e){this.values.delete(e);const n=this.valueSubscriptions.get(e);n&&(n(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,n){if(this.props.values&&this.props.values[e])return this.props.values[e];let i=this.values.get(e);return i===void 0&&n!==void 0&&(i=No(n===null?void 0:n,{owner:this}),this.addValue(e,i)),i}readValue(e,n){var i;let r=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:(i=this.getBaseTargetFromProps(this.props,e))!==null&&i!==void 0?i:this.readValueFromInstance(this.current,e,this.options);return r!=null&&(typeof r=="string"&&(FS(r)||bS(r))?r=parseFloat(r):!tR(r)&&Nr.test(n)&&(r=DS(e,n)),this.setBaseTarget(e,an(r)?r.get():r)),an(r)?r.get():r}setBaseTarget(e,n){this.baseTarget[e]=n}getBaseTarget(e){var n;const{initial:i}=this.props;let r;if(typeof i=="string"||typeof i=="object"){const a=nm(this.props,i,(n=this.presenceContext)===null||n===void 0?void 0:n.custom);a&&(r=a[e])}if(i&&r!==void 0)return r;const s=this.getBaseTargetFromProps(this.props,e);return s!==void 0&&!an(s)?s:this.initialValues[e]!==void 0&&r===void 0?void 0:this.baseTarget[e]}on(e,n){return this.events[e]||(this.events[e]=new gm),this.events[e].add(n)}notify(e,...n){this.events[e]&&this.events[e].notify(...n)}}class mM extends iR{constructor(){super(...arguments),this.KeyframeResolver=VS}sortInstanceNodePosition(e,n){return e.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(e,n){return e.style?e.style[n]:void 0}removeValueFromRenderState(e,{vars:n,style:i}){delete n[e],delete i[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;an(e)&&(this.childSubscription=e.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}function rR(t){return window.getComputedStyle(t)}class sR extends mM{constructor(){super(...arguments),this.type="html",this.renderInstance=nS}readValueFromInstance(e,n){if(ps.has(n)){const i=Sm(n);return i&&i.default||0}else{const i=rR(e),r=(Q_(n)?i.getPropertyValue(n):i[n])||0;return typeof r=="string"?r.trim():r}}measureInstanceViewportBox(e,{transformPagePoint:n}){return iM(e,n)}build(e,n,i){sm(e,n,i.transformTemplate)}scrapeMotionValuesFromProps(e,n,i){return cm(e,n,i)}}class aR extends mM{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Dt}getBaseTargetFromProps(e,n){return e[n]}readValueFromInstance(e,n){if(ps.has(n)){const i=Sm(n);return i&&i.default||0}return n=iS.has(n)?n:Qp(n),e.getAttribute(n)}scrapeMotionValuesFromProps(e,n,i){return aS(e,n,i)}build(e,n,i){am(e,n,this.isSVGTag,i.transformTemplate)}renderInstance(e,n,i,r){rS(e,n,i,r)}mount(e){this.isSVGTag=lm(e.tagName),super.mount(e)}}const oR=(t,e)=>tm(t)?new aR(e):new sR(e,{allowProjection:t!==se.Fragment}),lR=D1({...Nb,...ZC,...VC,...JC},oR),Nt=$w(lR),_l=[{label:"Home",href:"#home",id:"home"},{label:"About",href:"#about",id:"about"},{label:"Experience",href:"#experience",id:"experience"},{label:"Skills",href:"#skills",id:"skills"},{label:"Projects",href:"#projects",id:"projects"},{label:"Education",href:"#education",id:"education"},{label:"Contact",href:"#contact",id:"contact"}];function cR(){const[t,e]=se.useState(!1),[n,i]=se.useState("home"),[r,s]=se.useState(!1);return se.useEffect(()=>{const a=()=>{e(window.scrollY>40);const o=_l.map(c=>document.getElementById(c.id)),l=window.scrollY+200;for(let c=o.length-1;c>=0;c--){const d=o[c];if(d&&d.offsetTop<=l){i(_l[c].id);break}}};return window.addEventListener("scroll",a,{passive:!0}),()=>window.removeEventListener("scroll",a)},[]),m.jsxs("header",{className:`navbar-header ${t?"scrolled":""}`,children:[m.jsxs("div",{className:"navbar-container",children:[m.jsxs("a",{href:"#home",className:"nav-brand",children:[m.jsx("span",{className:"brand-bracket",children:"<"}),m.jsx("span",{className:"brand-name",children:"Sourabh"}),m.jsx("span",{className:"brand-dot",children:"."}),m.jsx("span",{className:"brand-bracket",children:"/>"})]}),m.jsx("div",{className:"nav-status-wrapper",children:m.jsxs("div",{className:"status-pill",children:[m.jsx("span",{className:"status-dot"}),m.jsx("span",{className:"status-text",children:"Available for Work"})]})}),m.jsx("nav",{className:"nav-desktop",children:m.jsx("ul",{className:"nav-pills",children:_l.map(a=>{const o=n===a.id;return m.jsx("li",{children:m.jsxs("a",{href:a.href,className:`nav-link ${o?"active":""}`,onClick:()=>i(a.id),children:[a.label,o&&m.jsx(Nt.span,{layoutId:"active-nav-glow",className:"active-indicator",transition:{type:"spring",stiffness:380,damping:30}})]})},a.id)})})}),m.jsxs("div",{className:"nav-actions",children:[m.jsxs("a",{href:"#contact",className:"btn btn-sm btn-primary nav-cta",children:[m.jsx("span",{children:"Let's Talk"}),m.jsx("i",{className:"fas fa-arrow-right"})]}),m.jsxs("button",{className:`mobile-toggle ${r?"open":""}`,onClick:()=>s(!r),"aria-label":"Toggle navigation menu",children:[m.jsx("span",{}),m.jsx("span",{}),m.jsx("span",{})]})]})]}),m.jsx(mu,{children:r&&m.jsx(Nt.div,{className:"mobile-drawer",initial:{opacity:0,y:-20,scale:.96},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:-20,scale:.96},transition:{duration:.2},children:m.jsxs("div",{className:"mobile-drawer-content",children:[_l.map((a,o)=>m.jsxs("a",{href:a.href,className:`mobile-nav-link ${n===a.id?"active":""}`,onClick:()=>{i(a.id),s(!1)},children:[m.jsxs("span",{className:"mobile-idx",children:["0",o+1,"."]}),m.jsx("span",{children:a.label})]},a.id)),m.jsx("div",{className:"mobile-drawer-footer",children:m.jsx("a",{href:"#contact",className:"btn btn-primary btn-sm",style:{width:"100%"},onClick:()=>s(!1),children:"Contact Me"})})]})})})]})}function Su(t,e,n,i){return new(n||(n=Promise))(function(r,s){function a(c){try{l(i.next(c))}catch(d){s(d)}}function o(c){try{l(i.throw(c))}catch(d){s(d)}}function l(c){var d;c.done?r(c.value):(d=c.value,d instanceof n?d:new n(function(f){f(d)})).then(a,o)}l((i=i.apply(t,[])).next())})}function br(t,e){var n,i,r,s,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return s={next:o(0),throw:o(1),return:o(2)},typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function o(l){return function(c){return function(d){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,i&&(r=2&d[0]?i.return:d[0]?i.throw||((r=i.return)&&r.call(i),0):i.next)&&!(r=r.call(i,d[1])).done)return r;switch(i=0,r&&(d=[2&d[0],r.value]),d[0]){case 0:case 1:r=d;break;case 4:return a.label++,{value:d[1],done:!1};case 5:a.label++,i=d[1],d=[0];continue;case 7:d=a.ops.pop(),a.trys.pop();continue;default:if(r=a.trys,!((r=r.length>0&&r[r.length-1])||d[0]!==6&&d[0]!==2)){a=0;continue}if(d[0]===3&&(!r||d[1]>r[0]&&d[1]<r[3])){a.label=d[1];break}if(d[0]===6&&a.label<r[1]){a.label=r[1],r=d;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(d);break}r[2]&&a.ops.pop(),a.trys.pop();continue}d=e.call(t,a)}catch(f){d=[6,f],i=0}finally{n=r=0}if(5&d[0])throw d[1];return{value:d[0]?d[1]:void 0,done:!0}}([l,c])}}}function sh(t){var e=typeof Symbol=="function"&&Symbol.iterator,n=e&&t[e],i=0;if(n)return n.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&i>=t.length&&(t=void 0),{value:t&&t[i++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function si(t,e){var n=typeof Symbol=="function"&&t[Symbol.iterator];if(!n)return t;var i,r,s=n.call(t),a=[];try{for(;(e===void 0||e-- >0)&&!(i=s.next()).done;)a.push(i.value)}catch(o){r={error:o}}finally{try{i&&!i.done&&(n=s.return)&&n.call(s)}finally{if(r)throw r.error}}return a}function Si(t,e,n){if(arguments.length===2)for(var i,r=0,s=e.length;r<s;r++)!i&&r in e||(i||(i=Array.prototype.slice.call(e,0,r)),i[r]=e[r]);return t.concat(i||Array.prototype.slice.call(e))}function Cv(t,e,n,i,r){for(var s=[],a=5;a<arguments.length;a++)s[a-5]=arguments[a];return Su(this,void 0,void 0,function(){var o,l,c,d,f,u;return br(this,function(p){switch(p.label){case 0:p.trys.push([0,12,13,14]),o=sh(s),l=o.next(),p.label=1;case 1:if(l.done)return[3,11];switch(c=l.value,typeof c){case"string":return[3,2];case"number":return[3,4];case"function":return[3,6]}return[3,8];case 2:return[4,uR(t,e,c,n,i,r)];case 3:return p.sent(),[3,10];case 4:return[4,gM(c)];case 5:return p.sent(),[3,10];case 6:return[4,c.apply(void 0,Si([t,e,n,i,r],si(s),!1))];case 7:return p.sent(),[3,10];case 8:return[4,c];case 9:p.sent(),p.label=10;case 10:return l=o.next(),[3,1];case 11:return[3,14];case 12:return d=p.sent(),f={error:d},[3,14];case 13:try{l&&!l.done&&(u=o.return)&&u.call(o)}finally{if(f)throw f.error}return[7];case 14:return[2]}})})}function uR(t,e,n,i,r,s){return Su(this,void 0,void 0,function(){var a,o;return br(this,function(l){switch(l.label){case 0:return a=t.textContent||"",o=function(c,d){var f=si(d).slice(0);return Si(Si([],si(c),!1),[NaN],!1).findIndex(function(u,p){return f[p]!==u})}(a,n),[4,dR(t,Si(Si([],si(hR(a,e,o)),!1),si(fR(n,e,o)),!1),i,r,s)];case 1:return l.sent(),[2]}})})}function gM(t){return Su(this,void 0,void 0,function(){return br(this,function(e){switch(e.label){case 0:return[4,new Promise(function(n){return setTimeout(n,t)})];case 1:return e.sent(),[2]}})})}function dR(t,e,n,i,r){return Su(this,void 0,void 0,function(){var s,a,o,l,c,d,f,u,p,x,M,v,h;return br(this,function(g){switch(g.label){case 0:if(s=e,r){for(a=0,o=1;o<e.length;o++)if(l=si([e[o-1],e[o]],2),c=l[0],(d=l[1]).length>c.length||d===""){a=o;break}s=e.slice(a,e.length)}g.label=1;case 1:g.trys.push([1,6,7,8]),f=sh(function(S){var _,T,w,R,y,P,L;return br(this,function(D){switch(D.label){case 0:_=function(B){return br(this,function(Y){switch(Y.label){case 0:return[4,{op:function(k){return requestAnimationFrame(function(){return k.textContent=B})},opCode:function(k){var X=k.textContent||"";return B===""||X.length>B.length?"DELETE":"WRITING"}}];case 1:return Y.sent(),[2]}})},D.label=1;case 1:D.trys.push([1,6,7,8]),T=sh(S),w=T.next(),D.label=2;case 2:return w.done?[3,5]:(R=w.value,[5,_(R)]);case 3:D.sent(),D.label=4;case 4:return w=T.next(),[3,2];case 5:return[3,8];case 6:return y=D.sent(),P={error:y},[3,8];case 7:try{w&&!w.done&&(L=T.return)&&L.call(T)}finally{if(P)throw P.error}return[7];case 8:return[2]}})}(s)),u=f.next(),g.label=2;case 2:return u.done?[3,5]:(p=u.value,x=p.opCode(t)==="WRITING"?n+n*(Math.random()-.5):i+i*(Math.random()-.5),p.op(t),[4,gM(x)]);case 3:g.sent(),g.label=4;case 4:return u=f.next(),[3,2];case 5:return[3,8];case 6:return M=g.sent(),v={error:M},[3,8];case 7:try{u&&!u.done&&(h=f.return)&&h.call(f)}finally{if(v)throw v.error}return[7];case 8:return[2]}})})}function fR(t,e,n){var i,r;return n===void 0&&(n=0),br(this,function(s){switch(s.label){case 0:i=e(t),r=i.length,s.label=1;case 1:return n<r?[4,i.slice(0,++n).join("")]:[3,3];case 2:return s.sent(),[3,1];case 3:return[2]}})}function hR(t,e,n){var i,r;return n===void 0&&(n=0),br(this,function(s){switch(s.label){case 0:i=e(t),r=i.length,s.label=1;case 1:return r>n?[4,i.slice(0,--r).join("")]:[3,3];case 2:return s.sent(),[3,1];case 3:return[2]}})}var pR="index-module_type__E-SaG";(function(t,e){e===void 0&&(e={});var n=e.insertAt;if(typeof document<"u"){var i=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css",n==="top"&&i.firstChild?i.insertBefore(r,i.firstChild):i.appendChild(r),r.styleSheet?r.styleSheet.cssText=t:r.appendChild(document.createTextNode(t))}})(`.index-module_type__E-SaG::after {
  content: '|';
  animation: index-module_cursor__PQg0P 1.1s infinite step-start;
}

@keyframes index-module_cursor__PQg0P {
  50% {
    opacity: 0;
  }
}
`);var mR=se.memo(se.forwardRef(function(t,e){var n=t.sequence,i=t.repeat,r=t.className,s=t.speed,a=s===void 0?40:s,o=t.deletionSpeed,l=t.omitDeletionAnimation,c=l!==void 0&&l,d=t.preRenderFirstString,f=d!==void 0&&d,u=t.wrapper,p=u===void 0?"span":u,x=t.splitter,M=x===void 0?function(b){return Si([],si(b),!1)}:x,v=t.cursor,h=v===void 0||v,g=t.style,S=function(b,C){var J={};for(var ne in b)Object.prototype.hasOwnProperty.call(b,ne)&&C.indexOf(ne)<0&&(J[ne]=b[ne]);if(b!=null&&typeof Object.getOwnPropertySymbols=="function"){var de=0;for(ne=Object.getOwnPropertySymbols(b);de<ne.length;de++)C.indexOf(ne[de])<0&&Object.prototype.propertyIsEnumerable.call(b,ne[de])&&(J[ne[de]]=b[ne[de]])}return J}(t,["sequence","repeat","className","speed","deletionSpeed","omitDeletionAnimation","preRenderFirstString","wrapper","splitter","cursor","style"]),_=S["aria-label"],T=S["aria-hidden"],w=S.role;o||(o=a);var R=new Array(2).fill(40);[a,o].forEach(function(b,C){switch(typeof b){case"number":R[C]=Math.abs(b-100);break;case"object":var J=b.type,ne=b.value;if(typeof ne!="number")break;J==="keyStrokeDelayInMs"&&(R[C]=ne)}});var y,P,L,D,B,Y,k=R[0],X=R[1],ee=function(b,C){C===void 0&&(C=null);var J=se.useRef(C);return se.useEffect(function(){b&&(typeof b=="function"?b(J.current):b.current=J.current)},[b]),J}(e),W=pR;y=r?"".concat(h?W+" ":"").concat(r):h?W:"",P=se.useRef(function(){var b,C=n;i===1/0?b=Cv:typeof i=="number"&&(C=Array(1+i).fill(n).flat());var J=b?Si(Si([],si(C),!1),[b],!1):Si([],si(C),!1);return Cv.apply(void 0,Si([ee.current,M,k,X,c],si(J),!1)),function(){ee.current}}),L=se.useRef(),D=se.useRef(!1),B=se.useRef(!1),Y=si(se.useState(0),2)[1],D.current&&(B.current=!0),se.useEffect(function(){return D.current||(L.current=P.current(),D.current=!0),Y(function(b){return b+1}),function(){B.current&&L.current&&L.current()}},[]);var z=p,V=f?n.find(function(b){return typeof b=="string"})||"":null;return ag.createElement(z,{"aria-hidden":T,"aria-label":_,role:w,style:g,className:y,children:_?ag.createElement("span",{"aria-hidden":"true",ref:ee,children:V}):V,ref:_?void 0:ee})}),function(t,e){return!0});/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Am="186",gR=0,Rv=1,vR=2,lc=1,xR=2,qa=3,cs=0,En=1,Bi=2,Xi=0,uo=1,ah=2,Pv=3,Nv=4,yR=5,Ls=100,_R=101,SR=102,MR=103,ER=104,TR=200,wR=201,AR=202,bR=203,vM=204,xM=205,CR=206,RR=207,PR=208,NR=209,LR=210,DR=211,IR=212,UR=213,FR=214,oh=0,lh=1,ch=2,Io=3,uh=4,dh=5,fh=6,hh=7,yM=0,OR=1,kR=2,Ci=0,_M=1,SM=2,MM=3,EM=4,TM=5,wM=6,AM=7,bM=300,us=301,ma=302,pd=303,md=304,Mu=306,ph=1e3,Hi=1001,mh=1002,qt=1003,BR=1004,Sl=1005,on=1006,gd=1007,Jr=1008,Rn=1009,CM=1010,RM=1011,Uo=1012,bm=1013,Ri=1014,Mi=1015,Pi=1016,Cm=1017,Rm=1018,Fo=1020,PM=35902,NM=35899,LM=1021,DM=1022,oi=1023,Qi=1026,Qr=1027,IM=1028,Pm=1029,ds=1030,Nm=1031,Lm=1033,cc=33776,uc=33777,dc=33778,fc=33779,gh=35840,vh=35841,xh=35842,yh=35843,_h=36196,Sh=37492,Mh=37496,Eh=37488,Th=37489,jc=37490,wh=37491,Ah=37808,bh=37809,Ch=37810,Rh=37811,Ph=37812,Nh=37813,Lh=37814,Dh=37815,Ih=37816,Uh=37817,Fh=37818,Oh=37819,kh=37820,Bh=37821,Vh=36492,zh=36494,Hh=36495,Gh=36283,Wh=36284,Xc=36285,jh=36286,VR=3200,Xh=0,zR=1,gr="",Gn="srgb",Yc="srgb-linear",$c="linear",ot="srgb",vd=7680,HR=519,GR=512,WR=513,jR=514,Dm=515,XR=516,YR=517,Im=518,$R=519,qR=35044,Lv="300 es",Ei=2e3,Oo=2001;function KR(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function qc(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function ZR(){const t=qc("canvas");return t.style.display="block",t}const Dv={};function Iv(...t){const e="THREE."+t.shift();console.log(e,...t)}function UM(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function ze(...t){t=UM(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function it(...t){t=UM(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function ia(...t){const e=t.join(" ");e in Dv||(Dv[e]=!0,ze(...t))}function JR(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const QR={[oh]:lh,[ch]:fh,[uh]:hh,[Io]:dh,[lh]:oh,[fh]:ch,[hh]:uh,[dh]:Io};class ms{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],xd=Math.PI/180,Yh=180/Math.PI;function $o(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(tn[t&255]+tn[t>>8&255]+tn[t>>16&255]+tn[t>>24&255]+"-"+tn[e&255]+tn[e>>8&255]+"-"+tn[e>>16&15|64]+tn[e>>24&255]+"-"+tn[n&63|128]+tn[n>>8&255]+"-"+tn[n>>16&255]+tn[n>>24&255]+tn[i&255]+tn[i>>8&255]+tn[i>>16&255]+tn[i>>24&255]).toLowerCase()}function Qe(t,e,n){return Math.max(e,Math.min(n,t))}function eP(t,e){return(t%e+e)%e}function yd(t,e,n){return(1-n)*t+n*e}function Ua(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:case Uint8ClampedArray:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function vn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Hm=class Hm{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Qe(this.x,e.x,n.x),this.y=Qe(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Qe(this.x,e,n),this.y=Qe(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Qe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Hm.prototype.isVector2=!0;let qe=Hm;class Ma{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],c=i[r+1],d=i[r+2],f=i[r+3],u=s[a+0],p=s[a+1],x=s[a+2],M=s[a+3];if(f!==M||l!==u||c!==p||d!==x){let v=l*u+c*p+d*x+f*M;v<0&&(u=-u,p=-p,x=-x,M=-M,v=-v);let h=1-o;if(v<.9995){const g=Math.acos(v),S=Math.sin(g);h=Math.sin(h*g)/S,o=Math.sin(o*g)/S,l=l*h+u*o,c=c*h+p*o,d=d*h+x*o,f=f*h+M*o}else{l=l*h+u*o,c=c*h+p*o,d=d*h+x*o,f=f*h+M*o;const g=1/Math.sqrt(l*l+c*c+d*d+f*f);l*=g,c*=g,d*=g,f*=g}}e[n]=l,e[n+1]=c,e[n+2]=d,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],d=i[r+3],f=s[a],u=s[a+1],p=s[a+2],x=s[a+3];return e[n]=o*x+d*f+l*p-c*u,e[n+1]=l*x+d*u+c*f-o*p,e[n+2]=c*x+d*p+o*u-l*f,e[n+3]=d*x-o*f-l*u-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),d=o(r/2),f=o(s/2),u=l(i/2),p=l(r/2),x=l(s/2);switch(a){case"XYZ":this._x=u*d*f+c*p*x,this._y=c*p*f-u*d*x,this._z=c*d*x+u*p*f,this._w=c*d*f-u*p*x;break;case"YXZ":this._x=u*d*f+c*p*x,this._y=c*p*f-u*d*x,this._z=c*d*x-u*p*f,this._w=c*d*f+u*p*x;break;case"ZXY":this._x=u*d*f-c*p*x,this._y=c*p*f+u*d*x,this._z=c*d*x+u*p*f,this._w=c*d*f-u*p*x;break;case"ZYX":this._x=u*d*f-c*p*x,this._y=c*p*f+u*d*x,this._z=c*d*x-u*p*f,this._w=c*d*f+u*p*x;break;case"YZX":this._x=u*d*f+c*p*x,this._y=c*p*f+u*d*x,this._z=c*d*x-u*p*f,this._w=c*d*f-u*p*x;break;case"XZY":this._x=u*d*f-c*p*x,this._y=c*p*f-u*d*x,this._z=c*d*x+u*p*f,this._w=c*d*f+u*p*x;break;default:ze("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],c=n[2],d=n[6],f=n[10],u=i+o+f;if(u>0){const p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(d-l)*p,this._y=(s-c)*p,this._z=(a-r)*p}else if(i>o&&i>f){const p=2*Math.sqrt(1+i-o-f);this._w=(d-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+c)/p}else if(o>f){const p=2*Math.sqrt(1+o-i-f);this._w=(s-c)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+d)/p}else{const p=2*Math.sqrt(1+f-i-o);this._w=(a-r)/p,this._x=(s+c)/p,this._y=(l+d)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Qe(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,c=n._z,d=n._w;return this._x=i*d+a*o+r*c-s*l,this._y=r*d+a*l+s*o-i*c,this._z=s*d+a*c+i*l-r*o,this._w=a*d-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let l=1-n;if(o<.9995){const c=Math.acos(o),d=Math.sin(c);l=Math.sin(l*c)/d,n=Math.sin(n*c)/d,this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+a*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+a*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Gm=class Gm{constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Uv.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Uv.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),d=2*(o*n-s*r),f=2*(s*i-a*n);return this.x=n+l*c+a*f-o*d,this.y=i+l*d+o*c-s*f,this.z=r+l*f+s*d-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Qe(this.x,e.x,n.x),this.y=Qe(this.y,e.y,n.y),this.z=Qe(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Qe(this.x,e,n),this.y=Qe(this.y,e,n),this.z=Qe(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Qe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return _d.copy(this).projectOnVector(e),this.sub(_d)}reflect(e){return this.sub(_d.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Gm.prototype.isVector3=!0;let j=Gm;const _d=new j,Uv=new Ma,Wm=class Wm{constructor(e,n,i,r,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c)}set(e,n,i,r,s,a,o,l,c){const d=this.elements;return d[0]=e,d[1]=r,d[2]=o,d[3]=n,d[4]=s,d[5]=l,d[6]=i,d[7]=a,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],d=i[4],f=i[7],u=i[2],p=i[5],x=i[8],M=r[0],v=r[3],h=r[6],g=r[1],S=r[4],_=r[7],T=r[2],w=r[5],R=r[8];return s[0]=a*M+o*g+l*T,s[3]=a*v+o*S+l*w,s[6]=a*h+o*_+l*R,s[1]=c*M+d*g+f*T,s[4]=c*v+d*S+f*w,s[7]=c*h+d*_+f*R,s[2]=u*M+p*g+x*T,s[5]=u*v+p*S+x*w,s[8]=u*h+p*_+x*R,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8];return n*a*d-n*o*c-i*s*d+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],f=d*a-o*c,u=o*l-d*s,p=c*s-a*l,x=n*f+i*u+r*p;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/x;return e[0]=f*M,e[1]=(r*c-d*i)*M,e[2]=(o*i-r*a)*M,e[3]=u*M,e[4]=(d*n-r*l)*M,e[5]=(r*s-o*n)*M,e[6]=p*M,e[7]=(i*l-c*n)*M,e[8]=(a*n-i*s)*M,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+n,0,0,1),this}scale(e,n){return ia("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Sd.makeScale(e,n)),this}rotate(e){return ia("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Sd.makeRotation(-e)),this}translate(e,n){return ia("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Sd.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Wm.prototype.isMatrix3=!0;let He=Wm;const Sd=new He,Fv=new He().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ov=new He().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function tP(){const t={enabled:!0,workingColorSpace:Yc,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===ot&&(r.r=Yi(r.r),r.g=Yi(r.g),r.b=Yi(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ot&&(r.r=ra(r.r),r.g=ra(r.g),r.b=ra(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===gr?$c:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return ia("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return ia("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[Yc]:{primaries:e,whitePoint:i,transfer:$c,toXYZ:Fv,fromXYZ:Ov,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Gn},outputColorSpaceConfig:{drawingBufferColorSpace:Gn}},[Gn]:{primaries:e,whitePoint:i,transfer:ot,toXYZ:Fv,fromXYZ:Ov,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Gn}}}),t}const Je=tP();function Yi(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function ra(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let ys;class nP{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ys===void 0&&(ys=qc("canvas")),ys.width=e.width,ys.height=e.height;const r=ys.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=ys}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=qc("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Yi(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Yi(n[i]/255)*255):n[i]=Yi(n[i]);return{data:n,width:e.width,height:e.height}}else return ze("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let iP=0;class Um{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:iP++}),this.uuid=$o(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Md(r[a].image)):s.push(Md(r[a]))}else s=Md(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Md(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?nP.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(ze("Texture: Unable to serialize Texture."),{})}let rP=0;const Ed=new j;class hn extends ms{constructor(e=hn.DEFAULT_IMAGE,n=hn.DEFAULT_MAPPING,i=Hi,r=Hi,s=on,a=Jr,o=oi,l=Rn,c=hn.DEFAULT_ANISOTROPY,d=gr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:rP++}),this.uuid=$o(),this.name="",this.source=new Um(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new qe(0,0),this.repeat=new qe(1,1),this.center=new qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ed).x}get height(){return this.source.getSize(Ed).y}get depth(){return this.source.getSize(Ed).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){ze(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){ze(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==bM)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ph:e.x=e.x-Math.floor(e.x);break;case Hi:e.x=e.x<0?0:1;break;case mh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ph:e.y=e.y-Math.floor(e.y);break;case Hi:e.y=e.y<0?0:1;break;case mh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}hn.DEFAULT_IMAGE=null;hn.DEFAULT_MAPPING=bM;hn.DEFAULT_ANISOTROPY=1;const jm=class jm{constructor(e=0,n=0,i=0,r=1){this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],d=l[4],f=l[8],u=l[1],p=l[5],x=l[9],M=l[2],v=l[6],h=l[10];if(Math.abs(d-u)<.01&&Math.abs(f-M)<.01&&Math.abs(x-v)<.01){if(Math.abs(d+u)<.1&&Math.abs(f+M)<.1&&Math.abs(x+v)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const S=(c+1)/2,_=(p+1)/2,T=(h+1)/2,w=(d+u)/4,R=(f+M)/4,y=(x+v)/4;return S>_&&S>T?S<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(S),r=w/i,s=R/i):_>T?_<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(_),i=w/r,s=y/r):T<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(T),i=R/s,r=y/s),this.set(i,r,s,n),this}let g=Math.sqrt((v-x)*(v-x)+(f-M)*(f-M)+(u-d)*(u-d));return Math.abs(g)<.001&&(g=1),this.x=(v-x)/g,this.y=(f-M)/g,this.z=(u-d)/g,this.w=Math.acos((c+p+h-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Qe(this.x,e.x,n.x),this.y=Qe(this.y,e.y,n.y),this.z=Qe(this.z,e.z,n.z),this.w=Qe(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Qe(this.x,e,n),this.y=Qe(this.y,e,n),this.z=Qe(this.z,e,n),this.w=Qe(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Qe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};jm.prototype.isVector4=!0;let Tt=jm;class sP extends ms{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:on,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new Tt(0,0,e,n),this.scissorTest=!1,this.viewport=new Tt(0,0,e,n),this.textures=[];const r={width:e,height:n,depth:i.depth},s=new hn(r),a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const n={minFilter:on,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new Um(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const n=e.depthTexture.clone();n.renderTarget=null,this.depthTexture=n}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ui extends sP{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class FM extends hn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=qt,this.minFilter=qt,this.wrapR=Hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class aP extends hn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=qt,this.minFilter=qt,this.wrapR=Hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const Zc=class Zc{constructor(e,n,i,r,s,a,o,l,c,d,f,u,p,x,M,v){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c,d,f,u,p,x,M,v)}set(e,n,i,r,s,a,o,l,c,d,f,u,p,x,M,v){const h=this.elements;return h[0]=e,h[4]=n,h[8]=i,h[12]=r,h[1]=s,h[5]=a,h[9]=o,h[13]=l,h[2]=c,h[6]=d,h[10]=f,h[14]=u,h[3]=p,h[7]=x,h[11]=M,h[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Zc().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const n=this.elements,i=e.elements,r=1/_s.setFromMatrixColumn(e,0).length(),s=1/_s.setFromMatrixColumn(e,1).length(),a=1/_s.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),d=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const u=a*d,p=a*f,x=o*d,M=o*f;n[0]=l*d,n[4]=-l*f,n[8]=c,n[1]=p+x*c,n[5]=u-M*c,n[9]=-o*l,n[2]=M-u*c,n[6]=x+p*c,n[10]=a*l}else if(e.order==="YXZ"){const u=l*d,p=l*f,x=c*d,M=c*f;n[0]=u+M*o,n[4]=x*o-p,n[8]=a*c,n[1]=a*f,n[5]=a*d,n[9]=-o,n[2]=p*o-x,n[6]=M+u*o,n[10]=a*l}else if(e.order==="ZXY"){const u=l*d,p=l*f,x=c*d,M=c*f;n[0]=u-M*o,n[4]=-a*f,n[8]=x+p*o,n[1]=p+x*o,n[5]=a*d,n[9]=M-u*o,n[2]=-a*c,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const u=a*d,p=a*f,x=o*d,M=o*f;n[0]=l*d,n[4]=x*c-p,n[8]=u*c+M,n[1]=l*f,n[5]=M*c+u,n[9]=p*c-x,n[2]=-c,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const u=a*l,p=a*c,x=o*l,M=o*c;n[0]=l*d,n[4]=M-u*f,n[8]=x*f+p,n[1]=f,n[5]=a*d,n[9]=-o*d,n[2]=-c*d,n[6]=p*f+x,n[10]=u-M*f}else if(e.order==="XZY"){const u=a*l,p=a*c,x=o*l,M=o*c;n[0]=l*d,n[4]=-f,n[8]=c*d,n[1]=u*f+M,n[5]=a*d,n[9]=p*f-x,n[2]=x*f-p,n[6]=o*d,n[10]=M*f+u}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(oP,e,lP)}lookAt(e,n,i){const r=this.elements;return wn.subVectors(e,n),wn.lengthSq()===0&&(wn.z=1),wn.normalize(),sr.crossVectors(i,wn),sr.lengthSq()===0&&(Math.abs(i.z)===1?wn.x+=1e-4:wn.z+=1e-4,wn.normalize(),sr.crossVectors(i,wn)),sr.normalize(),Ml.crossVectors(wn,sr),r[0]=sr.x,r[4]=Ml.x,r[8]=wn.x,r[1]=sr.y,r[5]=Ml.y,r[9]=wn.y,r[2]=sr.z,r[6]=Ml.z,r[10]=wn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],d=i[1],f=i[5],u=i[9],p=i[13],x=i[2],M=i[6],v=i[10],h=i[14],g=i[3],S=i[7],_=i[11],T=i[15],w=r[0],R=r[4],y=r[8],P=r[12],L=r[1],D=r[5],B=r[9],Y=r[13],k=r[2],X=r[6],ee=r[10],W=r[14],z=r[3],V=r[7],b=r[11],C=r[15];return s[0]=a*w+o*L+l*k+c*z,s[4]=a*R+o*D+l*X+c*V,s[8]=a*y+o*B+l*ee+c*b,s[12]=a*P+o*Y+l*W+c*C,s[1]=d*w+f*L+u*k+p*z,s[5]=d*R+f*D+u*X+p*V,s[9]=d*y+f*B+u*ee+p*b,s[13]=d*P+f*Y+u*W+p*C,s[2]=x*w+M*L+v*k+h*z,s[6]=x*R+M*D+v*X+h*V,s[10]=x*y+M*B+v*ee+h*b,s[14]=x*P+M*Y+v*W+h*C,s[3]=g*w+S*L+_*k+T*z,s[7]=g*R+S*D+_*X+T*V,s[11]=g*y+S*B+_*ee+T*b,s[15]=g*P+S*Y+_*W+T*C,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],d=e[2],f=e[6],u=e[10],p=e[14],x=e[3],M=e[7],v=e[11],h=e[15],g=l*p-c*u,S=o*p-c*f,_=o*u-l*f,T=a*p-c*d,w=a*u-l*d,R=a*f-o*d;return n*(M*g-v*S+h*_)-i*(x*g-v*T+h*w)+r*(x*S-M*T+h*R)-s*(x*_-M*w+v*R)}determinantAffine(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[1],a=e[5],o=e[9],l=e[2],c=e[6],d=e[10];return n*(a*d-o*c)-i*(s*d-o*l)+r*(s*c-a*l)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],f=e[9],u=e[10],p=e[11],x=e[12],M=e[13],v=e[14],h=e[15],g=n*o-i*a,S=n*l-r*a,_=n*c-s*a,T=i*l-r*o,w=i*c-s*o,R=r*c-s*l,y=d*M-f*x,P=d*v-u*x,L=d*h-p*x,D=f*v-u*M,B=f*h-p*M,Y=u*h-p*v,k=g*Y-S*B+_*D+T*L-w*P+R*y;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const X=1/k;return e[0]=(o*Y-l*B+c*D)*X,e[1]=(r*B-i*Y-s*D)*X,e[2]=(M*R-v*w+h*T)*X,e[3]=(u*w-f*R-p*T)*X,e[4]=(l*L-a*Y-c*P)*X,e[5]=(n*Y-r*L+s*P)*X,e[6]=(v*_-x*R-h*S)*X,e[7]=(d*R-u*_+p*S)*X,e[8]=(a*B-o*L+c*y)*X,e[9]=(i*L-n*B-s*y)*X,e[10]=(x*w-M*_+h*g)*X,e[11]=(f*_-d*w-p*g)*X,e[12]=(o*P-a*D-l*y)*X,e[13]=(n*D-i*P+r*y)*X,e[14]=(M*S-x*T-v*g)*X,e[15]=(d*T-f*S+u*g)*X,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,d=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,d*o+i,d*l-r*a,0,c*l-r*o,d*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,c=s+s,d=a+a,f=o+o,u=s*c,p=s*d,x=s*f,M=a*d,v=a*f,h=o*f,g=l*c,S=l*d,_=l*f,T=i.x,w=i.y,R=i.z;return r[0]=(1-(M+h))*T,r[1]=(p+_)*T,r[2]=(x-S)*T,r[3]=0,r[4]=(p-_)*w,r[5]=(1-(u+h))*w,r[6]=(v+g)*w,r[7]=0,r[8]=(x+S)*R,r[9]=(v-g)*R,r[10]=(1-(u+M))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),n.identity(),this;let a=_s.set(r[0],r[1],r[2]).length();const o=_s.set(r[4],r[5],r[6]).length(),l=_s.set(r[8],r[9],r[10]).length();s<0&&(a=-a),Jn.copy(this);const c=1/a,d=1/o,f=1/l;return Jn.elements[0]*=c,Jn.elements[1]*=c,Jn.elements[2]*=c,Jn.elements[4]*=d,Jn.elements[5]*=d,Jn.elements[6]*=d,Jn.elements[8]*=f,Jn.elements[9]*=f,Jn.elements[10]*=f,n.setFromRotationMatrix(Jn),i.x=a,i.y=o,i.z=l,this}makePerspective(e,n,i,r,s,a,o=Ei,l=!1){const c=this.elements,d=2*s/(n-e),f=2*s/(i-r),u=(n+e)/(n-e),p=(i+r)/(i-r);let x,M;if(l)x=s/(a-s),M=a*s/(a-s);else if(o===Ei)x=-(a+s)/(a-s),M=-2*a*s/(a-s);else if(o===Oo)x=-a/(a-s),M=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=f,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=x,c[14]=M,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=Ei,l=!1){const c=this.elements,d=2/(n-e),f=2/(i-r),u=-(n+e)/(n-e),p=-(i+r)/(i-r);let x,M;if(l)x=1/(a-s),M=a/(a-s);else if(o===Ei)x=-2/(a-s),M=-(a+s)/(a-s);else if(o===Oo)x=-1/(a-s),M=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=f,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=x,c[14]=M,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}};Zc.prototype.isMatrix4=!0;let At=Zc;const _s=new j,Jn=new At,oP=new j(0,0,0),lP=new j(1,1,1),sr=new j,Ml=new j,wn=new j,kv=new At,Bv=new Ma;class Lr{constructor(e=0,n=0,i=0,r=Lr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],d=r[9],f=r[2],u=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(Qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Qe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Qe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Qe(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-d,p),this._y=0);break;default:ze("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return kv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(kv,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Bv.setFromEuler(this),this.setFromQuaternion(Bv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Lr.DEFAULT_ORDER="XYZ";class OM{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let cP=0;const Vv=new j,Ss=new Ma,Li=new At,El=new j,Fa=new j,uP=new j,dP=new Ma,zv=new j(1,0,0),Hv=new j(0,1,0),Gv=new j(0,0,1),Wv={type:"added"},fP={type:"removed"},Ms={type:"childadded",child:null},Td={type:"childremoved",child:null};class pn extends ms{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:cP++}),this.uuid=$o(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=pn.DEFAULT_UP.clone();const e=new j,n=new Lr,i=new Ma,r=new j(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new At},normalMatrix:{value:new He}}),this.matrix=new At,this.matrixWorld=new At,this.matrixAutoUpdate=pn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new OM,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ss.setFromAxisAngle(e,n),this.quaternion.multiply(Ss),this}rotateOnWorldAxis(e,n){return Ss.setFromAxisAngle(e,n),this.quaternion.premultiply(Ss),this}rotateX(e){return this.rotateOnAxis(zv,e)}rotateY(e){return this.rotateOnAxis(Hv,e)}rotateZ(e){return this.rotateOnAxis(Gv,e)}translateOnAxis(e,n){return Vv.copy(e).applyQuaternion(this.quaternion),this.position.add(Vv.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(zv,e)}translateY(e){return this.translateOnAxis(Hv,e)}translateZ(e){return this.translateOnAxis(Gv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Li.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?El.copy(e):El.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Fa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Li.lookAt(Fa,El,this.up):Li.lookAt(El,Fa,this.up),this.quaternion.setFromRotationMatrix(Li),r&&(Li.extractRotation(r.matrixWorld),Ss.setFromRotationMatrix(Li),this.quaternion.premultiply(Ss.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(it("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Wv),Ms.child=e,this.dispatchEvent(Ms),Ms.child=null):it("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(fP),Td.child=e,this.dispatchEvent(Td),Td.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Li.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Li.multiply(e.parent.matrixWorld)),e.applyMatrix4(Li),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Wv),Ms.child=e,this.dispatchEvent(Ms),Ms.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fa,e,uP),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fa,dP,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*r,s[13]+=i-s[1]*n-s[5]*i-s[9]*r,s[14]+=r-s[2]*n-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n,i=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),d=a(e.images),f=a(e.shapes),u=a(e.skeletons),p=a(e.animations),x=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),f.length>0&&(i.shapes=f),u.length>0&&(i.skeletons=u),p.length>0&&(i.animations=p),x.length>0&&(i.nodes=x)}return i.object=r,i;function a(o){const l=[];for(const c in o){const d=o[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}pn.DEFAULT_UP=new j(0,1,0);pn.DEFAULT_MATRIX_AUTO_UPDATE=!0;pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class es extends pn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const hP={type:"move"};class wd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new es,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new es,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new es,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const M of e.hand.values()){const v=n.getJointPose(M,i),h=this._getHandJoint(c,M);v!==null&&(h.matrix.fromArray(v.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=v.radius),h.visible=v!==null}const d=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=d.position.distanceTo(f.position),p=.02,x=.005;c.inputState.pinching&&u>p+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=p-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(hP)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new es;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const kM={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ar={h:0,s:0,l:0},Tl={h:0,s:0,l:0};function Ad(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Ze{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Gn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=Je.workingColorSpace){return this.r=e,this.g=n,this.b=i,Je.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=Je.workingColorSpace){if(e=eP(e,1),n=Qe(n,0,1),i=Qe(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=Ad(a,s,e+1/3),this.g=Ad(a,s,e),this.b=Ad(a,s,e-1/3)}return Je.colorSpaceToWorking(this,r),this}setStyle(e,n=Gn){function i(s){s!==void 0&&parseFloat(s)<1&&ze("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:ze("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);ze("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Gn){const i=kM[e.toLowerCase()];return i!==void 0?this.setHex(i,n):ze("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Yi(e.r),this.g=Yi(e.g),this.b=Yi(e.b),this}copyLinearToSRGB(e){return this.r=ra(e.r),this.g=ra(e.g),this.b=ra(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Gn){return Je.workingToColorSpace(nn.copy(this),e),Math.round(Qe(nn.r*255,0,255))*65536+Math.round(Qe(nn.g*255,0,255))*256+Math.round(Qe(nn.b*255,0,255))}getHexString(e=Gn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Je.workingColorSpace){Je.workingToColorSpace(nn.copy(this),n);const i=nn.r,r=nn.g,s=nn.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const d=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=d<=.5?f/(a+o):f/(2-a-o),a){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,n=Je.workingColorSpace){return Je.workingToColorSpace(nn.copy(this),n),e.r=nn.r,e.g=nn.g,e.b=nn.b,e}getStyle(e=Gn){Je.workingToColorSpace(nn.copy(this),e);const n=nn.r,i=nn.g,r=nn.b;return e!==Gn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(ar),this.setHSL(ar.h+e,ar.s+n,ar.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(ar),e.getHSL(Tl);const i=yd(ar.h,Tl.h,n),r=yd(ar.s,Tl.s,n),s=yd(ar.l,Tl.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const nn=new Ze;Ze.NAMES=kM;class pP extends pn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Lr,this.environmentIntensity=1,this.environmentRotation=new Lr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),n.object.backgroundBlurriness=this.backgroundBlurriness,n.object.backgroundIntensity=this.backgroundIntensity,n.object.backgroundRotation=this.backgroundRotation.toArray(),n.object.environmentIntensity=this.environmentIntensity,n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Qn=new j,Di=new j,bd=new j,Ii=new j,Es=new j,Ts=new j,jv=new j,Cd=new j,Rd=new j,Pd=new j,Nd=new Tt,Ld=new Tt,Dd=new Tt;class ai{constructor(e=new j,n=new j,i=new j){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Qn.subVectors(e,n),r.cross(Qn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Qn.subVectors(r,n),Di.subVectors(i,n),bd.subVectors(e,n);const a=Qn.dot(Qn),o=Qn.dot(Di),l=Qn.dot(bd),c=Di.dot(Di),d=Di.dot(bd),f=a*c-o*o;if(f===0)return s.set(0,0,0),null;const u=1/f,p=(c*l-o*d)*u,x=(a*d-o*l)*u;return s.set(1-p-x,x,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Ii)===null?!1:Ii.x>=0&&Ii.y>=0&&Ii.x+Ii.y<=1}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,Ii)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ii.x),l.addScaledVector(a,Ii.y),l.addScaledVector(o,Ii.z),l)}static getInterpolatedAttribute(e,n,i,r,s,a){return Nd.setScalar(0),Ld.setScalar(0),Dd.setScalar(0),Nd.fromBufferAttribute(e,n),Ld.fromBufferAttribute(e,i),Dd.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Nd,s.x),a.addScaledVector(Ld,s.y),a.addScaledVector(Dd,s.z),a}static isFrontFacing(e,n,i,r){return Qn.subVectors(i,n),Di.subVectors(e,n),Qn.cross(Di).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Qn.subVectors(this.c,this.b),Di.subVectors(this.a,this.b),Qn.cross(Di).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ai.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ai.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return ai.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return ai.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ai.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;Es.subVectors(r,i),Ts.subVectors(s,i),Cd.subVectors(e,i);const l=Es.dot(Cd),c=Ts.dot(Cd);if(l<=0&&c<=0)return n.copy(i);Rd.subVectors(e,r);const d=Es.dot(Rd),f=Ts.dot(Rd);if(d>=0&&f<=d)return n.copy(r);const u=l*f-d*c;if(u<=0&&l>=0&&d<=0)return a=l/(l-d),n.copy(i).addScaledVector(Es,a);Pd.subVectors(e,s);const p=Es.dot(Pd),x=Ts.dot(Pd);if(x>=0&&p<=x)return n.copy(s);const M=p*c-l*x;if(M<=0&&c>=0&&x<=0)return o=c/(c-x),n.copy(i).addScaledVector(Ts,o);const v=d*x-p*f;if(v<=0&&f-d>=0&&p-x>=0)return jv.subVectors(s,r),o=(f-d)/(f-d+(p-x)),n.copy(r).addScaledVector(jv,o);const h=1/(v+M+u);return a=M*h,o=u*h,n.copy(i).addScaledVector(Es,a).addScaledVector(Ts,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class qo{constructor(e=new j(1/0,1/0,1/0),n=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(ei.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(ei.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=ei.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,ei):ei.fromBufferAttribute(s,a),ei.applyMatrix4(e.matrixWorld),this.expandByPoint(ei);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),wl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),wl.copy(i.boundingBox)),wl.applyMatrix4(e.matrixWorld),this.union(wl)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ei),ei.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Oa),Al.subVectors(this.max,Oa),ws.subVectors(e.a,Oa),As.subVectors(e.b,Oa),bs.subVectors(e.c,Oa),or.subVectors(As,ws),lr.subVectors(bs,As),Br.subVectors(ws,bs);let n=[0,-or.z,or.y,0,-lr.z,lr.y,0,-Br.z,Br.y,or.z,0,-or.x,lr.z,0,-lr.x,Br.z,0,-Br.x,-or.y,or.x,0,-lr.y,lr.x,0,-Br.y,Br.x,0];return!Id(n,ws,As,bs,Al)||(n=[1,0,0,0,1,0,0,0,1],!Id(n,ws,As,bs,Al))?!1:(bl.crossVectors(or,lr),n=[bl.x,bl.y,bl.z],Id(n,ws,As,bs,Al))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ei).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ei).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ui[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ui[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ui[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ui[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ui[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ui[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ui[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ui[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ui),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ui=[new j,new j,new j,new j,new j,new j,new j,new j],ei=new j,wl=new qo,ws=new j,As=new j,bs=new j,or=new j,lr=new j,Br=new j,Oa=new j,Al=new j,bl=new j,Vr=new j;function Id(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){Vr.fromArray(t,s);const o=r.x*Math.abs(Vr.x)+r.y*Math.abs(Vr.y)+r.z*Math.abs(Vr.z),l=e.dot(Vr),c=n.dot(Vr),d=i.dot(Vr);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}const Ft=new j,Cl=new qe;let mP=0;class di extends ms{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:mP++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=qR,this.updateRanges=[],this.gpuType=Mi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Cl.fromBufferAttribute(this,n),Cl.applyMatrix3(e),this.setXY(n,Cl.x,Cl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Ft.fromBufferAttribute(this,n),Ft.applyMatrix3(e),this.setXYZ(n,Ft.x,Ft.y,Ft.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Ft.fromBufferAttribute(this,n),Ft.applyMatrix4(e),this.setXYZ(n,Ft.x,Ft.y,Ft.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Ft.fromBufferAttribute(this,n),Ft.applyNormalMatrix(e),this.setXYZ(n,Ft.x,Ft.y,Ft.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Ft.fromBufferAttribute(this,n),Ft.transformDirection(e),this.setXYZ(n,Ft.x,Ft.y,Ft.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Ua(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=vn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Ua(n,this.array)),n}setX(e,n){return this.normalized&&(n=vn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Ua(n,this.array)),n}setY(e,n){return this.normalized&&(n=vn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Ua(n,this.array)),n}setZ(e,n){return this.normalized&&(n=vn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Ua(n,this.array)),n}setW(e,n){return this.normalized&&(n=vn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=vn(n,this.array),i=vn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=vn(n,this.array),i=vn(i,this.array),r=vn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=vn(n,this.array),i=vn(i,this.array),r=vn(r,this.array),s=vn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class BM extends di{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class VM extends di{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Xt extends di{constructor(e,n,i){super(new Float32Array(e),n,i)}}const gP=new qo,ka=new j,Ud=new j;class Eu{constructor(e=new j,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):gP.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ka.subVectors(e,this.center);const n=ka.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(ka,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ud.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ka.copy(e.center).add(Ud)),this.expandByPoint(ka.copy(e.center).sub(Ud))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let vP=0;const zn=new At,Fd=new pn,Cs=new j,An=new qo,Ba=new qo,Gt=new j;class Tn extends ms{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:vP++}),this.uuid=$o(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(KR(e)?VM:BM)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new He().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return zn.makeRotationFromQuaternion(e),this.applyMatrix4(zn),this}rotateX(e){return zn.makeRotationX(e),this.applyMatrix4(zn),this}rotateY(e){return zn.makeRotationY(e),this.applyMatrix4(zn),this}rotateZ(e){return zn.makeRotationZ(e),this.applyMatrix4(zn),this}translate(e,n,i){return zn.makeTranslation(e,n,i),this.applyMatrix4(zn),this}scale(e,n,i){return zn.makeScale(e,n,i),this.applyMatrix4(zn),this}lookAt(e){return Fd.lookAt(e),Fd.updateMatrix(),this.applyMatrix4(Fd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Cs).negate(),this.translate(Cs.x,Cs.y,Cs.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Xt(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&ze("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){it("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];An.setFromBufferAttribute(s),this.morphTargetsRelative?(Gt.addVectors(this.boundingBox.min,An.min),this.boundingBox.expandByPoint(Gt),Gt.addVectors(this.boundingBox.max,An.max),this.boundingBox.expandByPoint(Gt)):(this.boundingBox.expandByPoint(An.min),this.boundingBox.expandByPoint(An.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&it('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Eu);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){it("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new j,1/0);return}if(e){const i=this.boundingSphere.center;if(An.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];Ba.setFromBufferAttribute(o),this.morphTargetsRelative?(Gt.addVectors(An.min,Ba.min),An.expandByPoint(Gt),Gt.addVectors(An.max,Ba.max),An.expandByPoint(Gt)):(An.expandByPoint(Ba.min),An.expandByPoint(Ba.max))}An.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Gt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Gt));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)Gt.fromBufferAttribute(o,c),l&&(Cs.fromBufferAttribute(e,c),Gt.add(Cs)),r=Math.max(r,i.distanceToSquared(Gt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&it('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){it("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new di(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const o=[],l=[];for(let y=0;y<i.count;y++)o[y]=new j,l[y]=new j;const c=new j,d=new j,f=new j,u=new qe,p=new qe,x=new qe,M=new j,v=new j;function h(y,P,L){c.fromBufferAttribute(i,y),d.fromBufferAttribute(i,P),f.fromBufferAttribute(i,L),u.fromBufferAttribute(s,y),p.fromBufferAttribute(s,P),x.fromBufferAttribute(s,L),d.sub(c),f.sub(c),p.sub(u),x.sub(u);const D=1/(p.x*x.y-x.x*p.y);isFinite(D)&&(M.copy(d).multiplyScalar(x.y).addScaledVector(f,-p.y).multiplyScalar(D),v.copy(f).multiplyScalar(p.x).addScaledVector(d,-x.x).multiplyScalar(D),o[y].add(M),o[P].add(M),o[L].add(M),l[y].add(v),l[P].add(v),l[L].add(v))}let g=this.groups;g.length===0&&(g=[{start:0,count:e.count}]);for(let y=0,P=g.length;y<P;++y){const L=g[y],D=L.start,B=L.count;for(let Y=D,k=D+B;Y<k;Y+=3)h(e.getX(Y+0),e.getX(Y+1),e.getX(Y+2))}const S=new j,_=new j,T=new j,w=new j;function R(y){T.fromBufferAttribute(r,y),w.copy(T);const P=o[y];S.copy(P),S.sub(T.multiplyScalar(T.dot(P))).normalize(),_.crossVectors(w,P);const D=_.dot(l[y])<0?-1:1;a.setXYZW(y,S.x,S.y,S.z,D)}for(let y=0,P=g.length;y<P;++y){const L=g[y],D=L.start,B=L.count;for(let Y=D,k=D+B;Y<k;Y+=3)R(e.getX(Y+0)),R(e.getX(Y+1)),R(e.getX(Y+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new di(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let u=0,p=i.count;u<p;u++)i.setXYZ(u,0,0,0);const r=new j,s=new j,a=new j,o=new j,l=new j,c=new j,d=new j,f=new j;if(e)for(let u=0,p=e.count;u<p;u+=3){const x=e.getX(u+0),M=e.getX(u+1),v=e.getX(u+2);r.fromBufferAttribute(n,x),s.fromBufferAttribute(n,M),a.fromBufferAttribute(n,v),d.subVectors(a,s),f.subVectors(r,s),d.cross(f),o.fromBufferAttribute(i,x),l.fromBufferAttribute(i,M),c.fromBufferAttribute(i,v),o.add(d),l.add(d),c.add(d),i.setXYZ(x,o.x,o.y,o.z),i.setXYZ(M,l.x,l.y,l.z),i.setXYZ(v,c.x,c.y,c.z)}else for(let u=0,p=n.count;u<p;u+=3)r.fromBufferAttribute(n,u+0),s.fromBufferAttribute(n,u+1),a.fromBufferAttribute(n,u+2),d.subVectors(a,s),f.subVectors(r,s),d.cross(f),i.setXYZ(u+0,d.x,d.y,d.z),i.setXYZ(u+1,d.x,d.y,d.z),i.setXYZ(u+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Gt.fromBufferAttribute(e,n),Gt.normalize(),e.setXYZ(n,Gt.x,Gt.y,Gt.z)}toNonIndexed(){function e(o,l){const c=o.array,d=o.itemSize,f=o.normalized,u=new c.constructor(l.length*d);let p=0,x=0;for(let M=0,v=l.length;M<v;M++){o.isInterleavedBufferAttribute?p=l[M]*o.data.stride+o.offset:p=l[M]*d;for(let h=0;h<d;h++)u[x++]=c[p++]}return new di(u,d,f)}if(this.index===null)return ze("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Tn,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);n.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let d=0,f=c.length;d<f;d++){const u=c[d],p=e(u,i);l.push(p)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let f=0,u=c.length;f<u;f++){const p=c[f];d.push(p.toJSON(e.data))}d.length>0&&(r[l]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const d=r[c];this.setAttribute(c,d.clone(n))}const s=e.morphAttributes;for(const c in s){const d=[],f=s[c];for(let u=0,p=f.length;u<p;u++)d.push(f[u].clone(n));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,d=a.length;c<d;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Od=new j,xP=new j,yP=new He;class hr{constructor(e=new j(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Od.subVectors(i,n).cross(xP.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){const r=e.delta(Od),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(a<0||a>1)?null:n.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||yP.getNormalMatrix(e),r=this.coplanarPoint(Od).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let _P=0;class Ea extends ms{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_P++}),this.uuid=$o(),this.name="",this.type="Material",this.blending=uo,this.side=cs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=vM,this.blendDst=xM,this.blendEquation=Ls,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ze(0,0,0),this.blendAlpha=0,this.depthFunc=Io,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=HR,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=vd,this.stencilZFail=vd,this.stencilZPass=vd,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){ze(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){ze(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ze().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new hr().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new qe().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new qe().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Fi=new j,kd=new j,Rl=new j,Pl=new j;class zM{constructor(e=new j,n=new j(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Fi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Fi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Fi.copy(this.origin).addScaledVector(this.direction,n),Fi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){kd.copy(e).add(n).multiplyScalar(.5),Rl.copy(n).sub(e).normalize(),Pl.copy(this.origin).sub(kd);const s=e.distanceTo(n)*.5,a=-this.direction.dot(Rl),o=Pl.dot(this.direction),l=-Pl.dot(Rl),c=Pl.lengthSq(),d=Math.abs(1-a*a);let f,u,p,x;if(d>0)if(f=a*l-o,u=a*o-l,x=s*d,f>=0)if(u>=-x)if(u<=x){const M=1/d;f*=M,u*=M,p=f*(f+a*u+2*o)+u*(a*f+u+2*l)+c}else u=s,f=Math.max(0,-(a*u+o)),p=-f*f+u*(u+2*l)+c;else u=-s,f=Math.max(0,-(a*u+o)),p=-f*f+u*(u+2*l)+c;else u<=-x?(f=Math.max(0,-(-a*s+o)),u=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+u*(u+2*l)+c):u<=x?(f=0,u=Math.min(Math.max(-s,-l),s),p=u*(u+2*l)+c):(f=Math.max(0,-(a*s+o)),u=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+u*(u+2*l)+c);else u=a>0?-s:s,f=Math.max(0,-(a*u+o)),p=-f*f+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(kd).addScaledVector(Rl,u),p}intersectSphere(e,n){if(e.radius<0)return null;Fi.subVectors(e.center,this.origin);const i=Fi.dot(this.direction),r=Fi.dot(Fi)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l;const c=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,r=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,r=(e.min.x-u.x)*c),d>=0?(s=(e.min.y-u.y)*d,a=(e.max.y-u.y)*d):(s=(e.max.y-u.y)*d,a=(e.min.y-u.y)*d),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-u.z)*f,l=(e.max.z-u.z)*f):(o=(e.max.z-u.z)*f,l=(e.min.z-u.z)*f),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Fi)!==null}intersectTriangle(e,n,i,r,s){const a=this.origin,o=this.direction,l=o.x,c=o.y,d=o.z,f=e.x-a.x,u=e.y-a.y,p=e.z-a.z,x=n.x-a.x,M=n.y-a.y,v=n.z-a.z,h=i.x-a.x,g=i.y-a.y,S=i.z-a.z,_=Math.abs(l),T=Math.abs(c),w=Math.abs(d);let R,y,P,L,D,B,Y,k,X,ee,W,z;if(_>=T&&_>=w?(P=l,B=f,X=x,z=h,l>=0?(R=c,y=d,L=u,D=p,Y=M,k=v,ee=g,W=S):(R=d,y=c,L=p,D=u,Y=v,k=M,ee=S,W=g)):T>=w?(P=c,B=u,X=M,z=g,c>=0?(R=d,y=l,L=p,D=f,Y=v,k=x,ee=S,W=h):(R=l,y=d,L=f,D=p,Y=x,k=v,ee=h,W=S)):(P=d,B=p,X=v,z=S,d>=0?(R=l,y=c,L=f,D=u,Y=x,k=M,ee=h,W=g):(R=c,y=l,L=u,D=f,Y=M,k=x,ee=g,W=h)),P===0)return null;const V=R/P,b=y/P,C=1/P,J=L-V*B,ne=D-b*B,de=Y-V*X,pe=k-b*X,me=ee-V*z,I=W-b*z,H=me*pe-I*de,le=J*I-ne*me,fe=de*ne-pe*J;if(r){if(H<0||le<0||fe<0)return null}else if((H<0||le<0||fe<0)&&(H>0||le>0||fe>0))return null;const oe=H+le+fe;if(oe===0)return null;const Ae=C*(H*B+le*X+fe*z);return(oe>0?Ae<0:Ae>0)?null:this.at(Ae/oe,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Fm extends Ea{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Lr,this.combine=yM,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Xv=new At,zr=new zM,Nl=new Eu,Yv=new j,Ll=new j,Dl=new j,Il=new j,Bd=new j,Ul=new j,$v=new j,Fl=new j;class Nn extends pn{constructor(e=new Tn,n=new Fm){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Ul.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const d=o[l],f=s[l];d!==0&&(Bd.fromBufferAttribute(f,e),a?Ul.addScaledVector(Bd,d):Ul.addScaledVector(Bd.sub(n),d))}n.add(Ul)}return n}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Nl.copy(i.boundingSphere),Nl.applyMatrix4(s),zr.copy(e.ray).recast(e.near),!(Nl.containsPoint(zr.origin)===!1&&(zr.intersectSphere(Nl,Yv)===null||zr.origin.distanceToSquared(Yv)>(e.far-e.near)**2))&&(Xv.copy(s).invert(),zr.copy(e.ray).applyMatrix4(Xv),!(i.boundingBox!==null&&zr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,zr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,f=s.attributes.normal,u=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,M=u.length;x<M;x++){const v=u[x],h=a[v.materialIndex],g=Math.max(v.start,p.start),S=Math.min(o.count,Math.min(v.start+v.count,p.start+p.count));for(let _=g,T=S;_<T;_+=3){const w=o.getX(_),R=o.getX(_+1),y=o.getX(_+2);r=Ol(this,h,e,i,c,d,f,w,R,y),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=v.materialIndex,n.push(r))}}else{const x=Math.max(0,p.start),M=Math.min(o.count,p.start+p.count);for(let v=x,h=M;v<h;v+=3){const g=o.getX(v),S=o.getX(v+1),_=o.getX(v+2);r=Ol(this,a,e,i,c,d,f,g,S,_),r&&(r.faceIndex=Math.floor(v/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let x=0,M=u.length;x<M;x++){const v=u[x],h=a[v.materialIndex],g=Math.max(v.start,p.start),S=Math.min(l.count,Math.min(v.start+v.count,p.start+p.count));for(let _=g,T=S;_<T;_+=3){const w=_,R=_+1,y=_+2;r=Ol(this,h,e,i,c,d,f,w,R,y),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=v.materialIndex,n.push(r))}}else{const x=Math.max(0,p.start),M=Math.min(l.count,p.start+p.count);for(let v=x,h=M;v<h;v+=3){const g=v,S=v+1,_=v+2;r=Ol(this,a,e,i,c,d,f,g,S,_),r&&(r.faceIndex=Math.floor(v/3),n.push(r))}}}}function SP(t,e,n,i,r,s,a,o){let l;if(e.side===En?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===cs,o),l===null)return null;Fl.copy(o),Fl.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Fl);return c<n.near||c>n.far?null:{distance:c,point:Fl.clone(),object:t}}function Ol(t,e,n,i,r,s,a,o,l,c){t.getVertexPosition(o,Ll),t.getVertexPosition(l,Dl),t.getVertexPosition(c,Il);const d=SP(t,e,n,i,Ll,Dl,Il,$v);if(d){const f=new j;ai.getBarycoord($v,Ll,Dl,Il,f),r&&(d.uv=ai.getInterpolatedAttribute(r,o,l,c,f,new qe)),s&&(d.uv1=ai.getInterpolatedAttribute(s,o,l,c,f,new qe)),a&&(d.normal=ai.getInterpolatedAttribute(a,o,l,c,f,new j),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new j,materialIndex:0};ai.getNormal(Ll,Dl,Il,u.normal),d.face=u,d.barycoord=f}return d}class MP extends hn{constructor(e=null,n=1,i=1,r,s,a,o,l,c=qt,d=qt,f,u){super(null,a,o,l,c,d,r,s,f,u),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Hr=new Eu,EP=new qe(.5,.5),kl=new j;class Om{constructor(e=new hr,n=new hr,i=new hr,r=new hr,s=new hr,a=new hr){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Ei,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],d=s[4],f=s[5],u=s[6],p=s[7],x=s[8],M=s[9],v=s[10],h=s[11],g=s[12],S=s[13],_=s[14],T=s[15];if(r[0].setComponents(c-a,p-d,h-x,T-g).normalize(),r[1].setComponents(c+a,p+d,h+x,T+g).normalize(),r[2].setComponents(c+o,p+f,h+M,T+S).normalize(),r[3].setComponents(c-o,p-f,h-M,T-S).normalize(),i)r[4].setComponents(l,u,v,_).normalize(),r[5].setComponents(c-l,p-u,h-v,T-_).normalize();else if(r[4].setComponents(c-l,p-u,h-v,T-_).normalize(),n===Ei)r[5].setComponents(c+l,p+u,h+v,T+_).normalize();else if(n===Oo)r[5].setComponents(l,u,v,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Hr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Hr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Hr)}intersectsSprite(e){Hr.center.set(0,0,0);const n=EP.distanceTo(e.center);return Hr.radius=.7071067811865476+n,Hr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Hr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(kl.x=r.normal.x>0?e.max.x:e.min.x,kl.y=r.normal.y>0?e.max.y:e.min.y,kl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(kl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class HM extends Ea{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ze(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const qv=new At,$h=new zM,Bl=new Eu,Vl=new j;class TP extends pn{constructor(e=new Tn,n=new HM){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Bl.copy(i.boundingSphere),Bl.applyMatrix4(r),Bl.radius+=s,e.ray.intersectsSphere(Bl)===!1)return;qv.copy(r).invert(),$h.copy(e.ray).applyMatrix4(qv);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,f=i.attributes.position;if(c!==null){const u=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let x=u,M=p;x<M;x++){const v=c.getX(x);Vl.fromBufferAttribute(f,v),Kv(Vl,v,l,r,e,n,this)}}else{const u=Math.max(0,a.start),p=Math.min(f.count,a.start+a.count);for(let x=u,M=p;x<M;x++)Vl.fromBufferAttribute(f,x),Kv(Vl,x,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Kv(t,e,n,i,r,s,a){const o=$h.distanceSqToPoint(t);if(o<n){const l=new j;$h.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class GM extends hn{constructor(e=[],n=us,i,r,s,a,o,l,c,d){super(e,n,i,r,s,a,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ko extends hn{constructor(e,n,i=Ri,r,s,a,o=qt,l=qt,c,d=Qi,f=1){if(d!==Qi&&d!==Qr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:n,depth:f};super(u,r,s,a,o,l,d,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Um(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return n.compareFunction=this.compareFunction,n}}class wP extends ko{constructor(e,n=Ri,i=us,r,s,a=qt,o=qt,l,c=Qi){const d={width:e,height:e,depth:1},f=[d,d,d,d,d,d];super(e,e,n,i,r,s,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class WM extends hn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ko extends Tn{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],d=[],f=[];let u=0,p=0;x("z","y","x",-1,-1,i,n,e,a,s,0),x("z","y","x",1,-1,i,n,-e,a,s,1),x("x","z","y",1,1,e,i,n,r,a,2),x("x","z","y",1,-1,e,i,-n,r,a,3),x("x","y","z",1,-1,e,n,i,r,s,4),x("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Xt(c,3)),this.setAttribute("normal",new Xt(d,3)),this.setAttribute("uv",new Xt(f,2));function x(M,v,h,g,S,_,T,w,R,y,P){const L=_/R,D=T/y,B=_/2,Y=T/2,k=w/2,X=R+1,ee=y+1;let W=0,z=0;const V=new j;for(let b=0;b<ee;b++){const C=b*D-Y;for(let J=0;J<X;J++){const ne=J*L-B;V[M]=ne*g,V[v]=C*S,V[h]=k,c.push(V.x,V.y,V.z),V[M]=0,V[v]=0,V[h]=w>0?1:-1,d.push(V.x,V.y,V.z),f.push(J/R),f.push(1-b/y),W+=1}}for(let b=0;b<y;b++)for(let C=0;C<R;C++){const J=u+C+X*b,ne=u+C+X*(b+1),de=u+(C+1)+X*(b+1),pe=u+(C+1)+X*b;l.push(J,ne,pe),l.push(ne,de,pe),z+=6}o.addGroup(p,z,P),p+=z,u+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ko(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class km extends Tn{constructor(e=[],n=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r};const s=[],a=[];o(r),c(i),d(),this.setAttribute("position",new Xt(s,3)),this.setAttribute("normal",new Xt(s.slice(),3)),this.setAttribute("uv",new Xt(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(g){const S=new j,_=new j,T=new j;for(let w=0;w<n.length;w+=3)p(n[w+0],S),p(n[w+1],_),p(n[w+2],T),l(S,_,T,g)}function l(g,S,_,T){const w=T+1,R=[];for(let y=0;y<=w;y++){R[y]=[];const P=g.clone().lerp(_,y/w),L=S.clone().lerp(_,y/w),D=w-y;for(let B=0;B<=D;B++)B===0&&y===w?R[y][B]=P:R[y][B]=P.clone().lerp(L,B/D)}for(let y=0;y<w;y++)for(let P=0;P<2*(w-y)-1;P++){const L=Math.floor(P/2);P%2===0?(u(R[y][L+1]),u(R[y+1][L]),u(R[y][L])):(u(R[y][L+1]),u(R[y+1][L+1]),u(R[y+1][L]))}}function c(g){const S=new j;for(let _=0;_<s.length;_+=3)S.x=s[_+0],S.y=s[_+1],S.z=s[_+2],S.normalize().multiplyScalar(g),s[_+0]=S.x,s[_+1]=S.y,s[_+2]=S.z}function d(){const g=new j;for(let S=0;S<s.length;S+=3){g.x=s[S+0],g.y=s[S+1],g.z=s[S+2];const _=v(g)/2/Math.PI+.5,T=h(g)/Math.PI+.5;a.push(_,1-T)}x(),f()}function f(){for(let g=0;g<a.length;g+=6){const S=a[g+0],_=a[g+2],T=a[g+4],w=Math.max(S,_,T),R=Math.min(S,_,T);w>.9&&R<.1&&(S<.2&&(a[g+0]+=1),_<.2&&(a[g+2]+=1),T<.2&&(a[g+4]+=1))}}function u(g){s.push(g.x,g.y,g.z)}function p(g,S){const _=g*3;S.x=e[_+0],S.y=e[_+1],S.z=e[_+2]}function x(){const g=new j,S=new j,_=new j,T=new j,w=new qe,R=new qe,y=new qe;for(let P=0,L=0;P<s.length;P+=9,L+=6){g.set(s[P+0],s[P+1],s[P+2]),S.set(s[P+3],s[P+4],s[P+5]),_.set(s[P+6],s[P+7],s[P+8]),w.set(a[L+0],a[L+1]),R.set(a[L+2],a[L+3]),y.set(a[L+4],a[L+5]),T.copy(g).add(S).add(_).divideScalar(3);const D=v(T);M(w,L+0,g,D),M(R,L+2,S,D),M(y,L+4,_,D)}}function M(g,S,_,T){T<0&&g.x===1&&(a[S]=g.x-1),_.x===0&&_.z===0&&(a[S]=T/2/Math.PI+.5)}function v(g){return Math.atan2(g.z,-g.x)}function h(g){return Math.atan2(-g.y,Math.sqrt(g.x*g.x+g.z*g.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new km(e.vertices,e.indices,e.radius,e.detail)}}class Kc extends km{constructor(e=1,n=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,n),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new Kc(e.radius,e.detail)}}class Tu extends Tn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),c=o+1,d=l+1,f=e/o,u=n/l,p=[],x=[],M=[],v=[];for(let h=0;h<d;h++){const g=h*u-a;for(let S=0;S<c;S++){const _=S*f-s;x.push(_,-g,0),M.push(0,0,1),v.push(S/o),v.push(1-h/l)}}for(let h=0;h<l;h++)for(let g=0;g<o;g++){const S=g+c*h,_=g+c*(h+1),T=g+1+c*(h+1),w=g+1+c*h;p.push(S,_,w),p.push(_,T,w)}this.setIndex(p),this.setAttribute("position",new Xt(x,3)),this.setAttribute("normal",new Xt(M,3)),this.setAttribute("uv",new Xt(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Tu(e.width,e.height,e.widthSegments,e.heightSegments)}}class Bm extends Tn{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const d=[],f=new j,u=new j,p=[],x=[],M=[],v=[];for(let h=0;h<=i;h++){const g=[],S=h/i,_=a+S*o,T=e*Math.cos(_),w=Math.sqrt(e*e-T*T);let R=0;h===0&&a===0?R=.5/n:h===i&&l===Math.PI&&(R=-.5/n);for(let y=0;y<=n;y++){const P=y/n,L=r+P*s;f.x=-w*Math.cos(L),f.y=T,f.z=w*Math.sin(L),x.push(f.x,f.y,f.z),u.copy(f).normalize(),M.push(u.x,u.y,u.z),v.push(P+R,1-S),g.push(c++)}d.push(g)}for(let h=0;h<i;h++)for(let g=0;g<n;g++){const S=d[h][g+1],_=d[h][g],T=d[h+1][g],w=d[h+1][g+1];(h!==0||a>0)&&p.push(S,_,w),(h!==i-1||l<Math.PI)&&p.push(_,T,w)}this.setIndex(p),this.setAttribute("position",new Xt(x,3)),this.setAttribute("normal",new Xt(M,3)),this.setAttribute("uv",new Xt(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bm(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Vm extends Tn{constructor(e=1,n=.4,i=12,r=48,s=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:s,thetaStart:a,thetaLength:o},i=Math.floor(i),r=Math.floor(r);const l=[],c=[],d=[],f=[],u=new j,p=new j,x=new j;for(let M=0;M<=i;M++){const v=a+M/i*o;for(let h=0;h<=r;h++){const g=h/r*s;p.x=(e+n*Math.cos(v))*Math.cos(g),p.y=(e+n*Math.cos(v))*Math.sin(g),p.z=n*Math.sin(v),c.push(p.x,p.y,p.z),u.x=e*Math.cos(g),u.y=e*Math.sin(g),x.subVectors(p,u).normalize(),d.push(x.x,x.y,x.z),f.push(h/r),f.push(M/i)}}for(let M=1;M<=i;M++)for(let v=1;v<=r;v++){const h=(r+1)*M+v-1,g=(r+1)*(M-1)+v-1,S=(r+1)*(M-1)+v,_=(r+1)*M+v;l.push(h,g,_),l.push(g,S,_)}this.setIndex(l),this.setAttribute("position",new Xt(c,3)),this.setAttribute("normal",new Xt(d,3)),this.setAttribute("uv",new Xt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vm(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}function ga(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];if(Zv(r))r.isRenderTargetTexture?(ze("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone();else if(Array.isArray(r))if(Zv(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[n][i]=s}else e[n][i]=r.slice();else e[n][i]=r}}return e}function un(t){const e={};for(let n=0;n<t.length;n++){const i=ga(t[n]);for(const r in i)e[r]=i[r]}return e}function Zv(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function AP(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function jM(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Je.workingColorSpace}const bP={clone:ga,merge:un};var CP=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,RP=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ni extends Ea{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=CP,this.fragmentShader=RP,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ga(e.uniforms),this.uniformsGroups=AP(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(const i in e.uniforms){const r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=n[r.value]||null;break;case"c":this.uniforms[i].value=new Ze().setHex(r.value);break;case"v2":this.uniforms[i].value=new qe().fromArray(r.value);break;case"v3":this.uniforms[i].value=new j().fromArray(r.value);break;case"v4":this.uniforms[i].value=new Tt().fromArray(r.value);break;case"m3":this.uniforms[i].value=new He().fromArray(r.value);break;case"m4":this.uniforms[i].value=new At().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class PP extends Ni{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Vd extends Ea{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Xh,this.normalScale=new qe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Lr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class NP extends Ea{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=VR,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class LP extends Ea{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class XM extends pn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Ze(e),this.intensity=n}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}const zd=new At,Jv=new j,Qv=new j;class DP{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new qe(512,512),this.mapType=Rn,this.map=null,this.mapPass=null,this.matrix=new At,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Om,this._frameExtents=new qe(1,1),this._viewportCount=1,this._viewports=[new Tt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera;Jv.setFromMatrixPosition(e.matrixWorld),n.position.copy(Jv),Qv.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Qv),n.updateMatrixWorld(),this._updateMatrix(n,this.matrix,this._frustum)}_updateMatrix(e,n,i,r){zd.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(zd,e.coordinateSystem,e.reversedDepth);const s=this._frameExtents,a=r?r.z/s.x:1,o=r?r.w/s.y:1,l=r?r.x/s.x:0,c=r?r.y/s.y:0;e.coordinateSystem===Oo||e.reversedDepth?n.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):n.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),n.multiply(zd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const zl=new j,Hl=new Ma,gi=new j;class YM extends pn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new At,this.projectionMatrix=new At,this.projectionMatrixInverse=new At,this.coordinateSystem=Ei,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(zl,Hl,gi),gi.x===1&&gi.y===1&&gi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(zl,Hl,gi.set(1,1,1)).invert()}updateWorldMatrix(e,n,i=!1){super.updateWorldMatrix(e,n,i),this.matrixWorld.decompose(zl,Hl,gi),gi.x===1&&gi.y===1&&gi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(zl,Hl,gi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const cr=new j,ex=new qe,tx=new qe;class Cn extends YM{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Yh*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(xd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Yh*2*Math.atan(Math.tan(xd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){cr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(cr.x,cr.y).multiplyScalar(-e/cr.z),cr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(cr.x,cr.y).multiplyScalar(-e/cr.z)}getViewSize(e,n){return this.getViewBounds(e,ex,tx),n.subVectors(tx,ex)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(xd*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class IP extends DP{constructor(){super(new Cn(90,1,.5,500)),this.isPointLightShadow=!0}}class Hd extends XM{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new IP}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.distance=this.distance,n.object.decay=this.decay,n.object.shadow=this.shadow.toJSON(),n}}class $M extends YM{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class UP extends XM{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}const Rs=-90,Ps=1;class FP extends pn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Cn(Rs,Ps,e,n);r.layers=this.layers,this.add(r);const s=new Cn(Rs,Ps,e,n);s.layers=this.layers,this.add(s);const a=new Cn(Rs,Ps,e,n);a.layers=this.layers,this.add(a);const o=new Cn(Rs,Ps,e,n);o.layers=this.layers,this.add(o);const l=new Cn(Rs,Ps,e,n);l.layers=this.layers,this.add(l);const c=new Cn(Rs,Ps,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(const c of n)this.remove(c);if(e===Ei)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Oo)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,d]=this.children,f=e.getRenderTarget(),u=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let v=!1;e.isWebGLRenderer===!0?v=e.state.buffers.depth.getReversed():v=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),v&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,1,r),v&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,2,r),v&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,3,r),v&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,r),v&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),i.texture.generateMipmaps=M,e.setRenderTarget(i,5,r),v&&e.autoClear===!1&&e.clearDepth(),e.render(n,d),e.setRenderTarget(f,u,p),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class OP extends Cn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class kP{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,ze("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}const Xm=class Xm{constructor(e,n,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let i=0;i<4;i++)this.elements[i]=e[i+n];return this}set(e,n,i,r){const s=this.elements;return s[0]=e,s[2]=n,s[1]=i,s[3]=r,this}};Xm.prototype.isMatrix2=!0;let nx=Xm;function ix(t,e,n,i){const r=BP(i);switch(n){case LM:return t*e;case IM:return t*e/r.components*r.byteLength;case Pm:return t*e/r.components*r.byteLength;case ds:return t*e*2/r.components*r.byteLength;case Nm:return t*e*2/r.components*r.byteLength;case DM:return t*e*3/r.components*r.byteLength;case oi:return t*e*4/r.components*r.byteLength;case Lm:return t*e*4/r.components*r.byteLength;case cc:case uc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case dc:case fc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case vh:case yh:return Math.max(t,16)*Math.max(e,8)/4;case gh:case xh:return Math.max(t,8)*Math.max(e,8)/2;case _h:case Sh:case Eh:case Th:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Mh:case jc:case wh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Ah:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case bh:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Ch:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Rh:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Ph:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Nh:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Lh:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Dh:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Ih:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Uh:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Fh:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Oh:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case kh:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Bh:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Vh:case zh:case Hh:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Gh:case Wh:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Xc:case jh:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function BP(t){switch(t){case Rn:case CM:return{byteLength:1,components:1};case Uo:case RM:case Pi:return{byteLength:2,components:1};case Cm:case Rm:return{byteLength:2,components:4};case Ri:case bm:case Mi:return{byteLength:4,components:1};case PM:case NM:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Am}}));typeof window<"u"&&(window.__THREE__?ze("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Am);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function qM(){let t=null,e=!1,n=null,i=null;function r(s,a){i=t.requestAnimationFrame(r),n(s,a)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function VP(t){const e=new WeakMap;function n(o,l){const c=o.array,d=o.usage,f=c.byteLength,u=t.createBuffer();t.bindBuffer(l,u),t.bufferData(l,c,d),o.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=t.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,l,c){const d=l.array,f=l.updateRanges;if(t.bindBuffer(c,o),f.length===0)t.bufferSubData(c,0,d);else{f.sort((p,x)=>p.start-x.start);let u=0;for(let p=1;p<f.length;p++){const x=f[u],M=f[p];M.start<=x.start+x.count+1?x.count=Math.max(x.count,M.start+M.count-x.start):(++u,f[u]=M)}f.length=u+1;for(let p=0,x=f.length;p<x;p++){const M=f[p];t.bufferSubData(c,M.start*d.BYTES_PER_ELEMENT,d,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var zP=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,HP=`#ifdef USE_ALPHAHASH
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
#endif`,GP=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,WP=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jP=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,XP=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,YP=`#ifdef USE_AOMAP
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
#endif`,$P=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,qP=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
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
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,KP=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ZP=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,JP=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,QP=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,e2=`#ifdef USE_IRIDESCENCE
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
#endif`,t2=`#ifdef USE_BUMPMAP
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
#endif`,n2=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,i2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,r2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,s2=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,a2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,o2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,l2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,c2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,u2=`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,d2=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,f2=`vec3 transformedNormal = objectNormal;
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
#endif`,h2=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,p2=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,m2=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,g2=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,v2="gl_FragColor = linearToOutputTexel( gl_FragColor );",x2=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,y2=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,_2=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,S2=`#ifdef USE_ENVMAP
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
#endif`,M2=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,E2=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,T2=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,w2=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,A2=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,b2=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,C2=`#ifdef USE_GRADIENTMAP
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
}`,R2=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,P2=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,N2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,L2=`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#endif
#include <lightprobes_pars_fragment>`,D2=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
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
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,I2=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,U2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,F2=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,O2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,k2=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,B2=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
		return 0.5 / max( gv + gl, EPSILON );
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,V2=`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,z2=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,H2=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,G2=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,W2=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,j2=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,X2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Y2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,$2=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,q2=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,K2=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Z2=`#if defined( USE_POINTS_UV )
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
#endif`,J2=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Q2=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,e3=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,t3=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,n3=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,i3=`#ifdef USE_MORPHTARGETS
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
#endif`,r3=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,s3=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,a3=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,o3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,l3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,c3=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,u3=`#ifdef USE_NORMALMAP
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
#endif`,d3=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,f3=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,h3=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,p3=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,m3=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,g3=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,v3=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,x3=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,y3=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,_3=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,S3=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,M3=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,E3=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,T3=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,w3=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,A3=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,b3=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,C3=`#ifdef USE_SKINNING
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
#endif`,R3=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,P3=`#ifdef USE_SKINNING
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
#endif`,N3=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,L3=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,D3=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,I3=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,U3=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,F3=`#ifdef USE_TRANSMISSION
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
#endif`,O3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,k3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,B3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,V3=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const z3=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,H3=`uniform sampler2D t2D;
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
}`,G3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,W3=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,j3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,X3=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Y3=`#include <common>
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
}`,$3=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,q3=`#define DISTANCE
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
}`,K3=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Z3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,J3=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Q3=`uniform float scale;
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
}`,eN=`uniform vec3 diffuse;
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
}`,tN=`#include <common>
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
}`,nN=`uniform vec3 diffuse;
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
}`,iN=`#define LAMBERT
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
}`,rN=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,sN=`#define MATCAP
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
}`,aN=`#define MATCAP
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
}`,oN=`#define NORMAL
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
}`,lN=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,cN=`#define PHONG
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
}`,uN=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,dN=`#define STANDARD
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
}`,fN=`#define STANDARD
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
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,hN=`#define TOON
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
}`,pN=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,mN=`uniform float size;
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
}`,gN=`uniform vec3 diffuse;
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
}`,vN=`#include <common>
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
}`,xN=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,yN=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,_N=`uniform vec3 diffuse;
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
}`,je={alphahash_fragment:zP,alphahash_pars_fragment:HP,alphamap_fragment:GP,alphamap_pars_fragment:WP,alphatest_fragment:jP,alphatest_pars_fragment:XP,aomap_fragment:YP,aomap_pars_fragment:$P,batching_pars_vertex:qP,batching_vertex:KP,begin_vertex:ZP,beginnormal_vertex:JP,bsdfs:QP,iridescence_fragment:e2,bumpmap_pars_fragment:t2,clipping_planes_fragment:n2,clipping_planes_pars_fragment:i2,clipping_planes_pars_vertex:r2,clipping_planes_vertex:s2,color_fragment:a2,color_pars_fragment:o2,color_pars_vertex:l2,color_vertex:c2,common:u2,cube_uv_reflection_fragment:d2,defaultnormal_vertex:f2,displacementmap_pars_vertex:h2,displacementmap_vertex:p2,emissivemap_fragment:m2,emissivemap_pars_fragment:g2,colorspace_fragment:v2,colorspace_pars_fragment:x2,envmap_fragment:y2,envmap_common_pars_fragment:_2,envmap_pars_fragment:S2,envmap_pars_vertex:M2,envmap_physical_pars_fragment:D2,envmap_vertex:E2,fog_vertex:T2,fog_pars_vertex:w2,fog_fragment:A2,fog_pars_fragment:b2,gradientmap_pars_fragment:C2,lightmap_pars_fragment:R2,lights_lambert_fragment:P2,lights_lambert_pars_fragment:N2,lights_pars_begin:L2,lights_toon_fragment:I2,lights_toon_pars_fragment:U2,lights_phong_fragment:F2,lights_phong_pars_fragment:O2,lights_physical_fragment:k2,lights_physical_pars_fragment:B2,lights_fragment_begin:V2,lights_fragment_maps:z2,lights_fragment_end:H2,lightprobes_pars_fragment:G2,logdepthbuf_fragment:W2,logdepthbuf_pars_fragment:j2,logdepthbuf_pars_vertex:X2,logdepthbuf_vertex:Y2,map_fragment:$2,map_pars_fragment:q2,map_particle_fragment:K2,map_particle_pars_fragment:Z2,metalnessmap_fragment:J2,metalnessmap_pars_fragment:Q2,morphinstance_vertex:e3,morphcolor_vertex:t3,morphnormal_vertex:n3,morphtarget_pars_vertex:i3,morphtarget_vertex:r3,normal_fragment_begin:s3,normal_fragment_maps:a3,normal_pars_fragment:o3,normal_pars_vertex:l3,normal_vertex:c3,normalmap_pars_fragment:u3,clearcoat_normal_fragment_begin:d3,clearcoat_normal_fragment_maps:f3,clearcoat_pars_fragment:h3,iridescence_pars_fragment:p3,opaque_fragment:m3,packing:g3,premultiplied_alpha_fragment:v3,project_vertex:x3,dithering_fragment:y3,dithering_pars_fragment:_3,roughnessmap_fragment:S3,roughnessmap_pars_fragment:M3,shadowmap_pars_fragment:E3,shadowmap_pars_vertex:T3,shadowmap_vertex:w3,shadowmask_pars_fragment:A3,skinbase_vertex:b3,skinning_pars_vertex:C3,skinning_vertex:R3,skinnormal_vertex:P3,specularmap_fragment:N3,specularmap_pars_fragment:L3,tonemapping_fragment:D3,tonemapping_pars_fragment:I3,transmission_fragment:U3,transmission_pars_fragment:F3,uv_pars_fragment:O3,uv_pars_vertex:k3,uv_vertex:B3,worldpos_vertex:V3,background_vert:z3,background_frag:H3,backgroundCube_vert:G3,backgroundCube_frag:W3,cube_vert:j3,cube_frag:X3,depth_vert:Y3,depth_frag:$3,distance_vert:q3,distance_frag:K3,equirect_vert:Z3,equirect_frag:J3,linedashed_vert:Q3,linedashed_frag:eN,meshbasic_vert:tN,meshbasic_frag:nN,meshlambert_vert:iN,meshlambert_frag:rN,meshmatcap_vert:sN,meshmatcap_frag:aN,meshnormal_vert:oN,meshnormal_frag:lN,meshphong_vert:cN,meshphong_frag:uN,meshphysical_vert:dN,meshphysical_frag:fN,meshtoon_vert:hN,meshtoon_frag:pN,points_vert:mN,points_frag:gN,shadow_vert:vN,shadow_frag:xN,sprite_vert:yN,sprite_frag:_N},Me={common:{diffuse:{value:new Ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},envMapRotation:{value:new He},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new j},probesMax:{value:new j},probesResolution:{value:new j}},points:{diffuse:{value:new Ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new Ze(16777215)},opacity:{value:1},center:{value:new qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},yi={basic:{uniforms:un([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.fog]),vertexShader:je.meshbasic_vert,fragmentShader:je.meshbasic_frag},lambert:{uniforms:un([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new Ze(0)},envMapIntensity:{value:1}}]),vertexShader:je.meshlambert_vert,fragmentShader:je.meshlambert_frag},phong:{uniforms:un([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new Ze(0)},specular:{value:new Ze(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:je.meshphong_vert,fragmentShader:je.meshphong_frag},standard:{uniforms:un([Me.common,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.roughnessmap,Me.metalnessmap,Me.fog,Me.lights,{emissive:{value:new Ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag},toon:{uniforms:un([Me.common,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.gradientmap,Me.fog,Me.lights,{emissive:{value:new Ze(0)}}]),vertexShader:je.meshtoon_vert,fragmentShader:je.meshtoon_frag},matcap:{uniforms:un([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,{matcap:{value:null}}]),vertexShader:je.meshmatcap_vert,fragmentShader:je.meshmatcap_frag},points:{uniforms:un([Me.points,Me.fog]),vertexShader:je.points_vert,fragmentShader:je.points_frag},dashed:{uniforms:un([Me.common,Me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:je.linedashed_vert,fragmentShader:je.linedashed_frag},depth:{uniforms:un([Me.common,Me.displacementmap]),vertexShader:je.depth_vert,fragmentShader:je.depth_frag},normal:{uniforms:un([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,{opacity:{value:1}}]),vertexShader:je.meshnormal_vert,fragmentShader:je.meshnormal_frag},sprite:{uniforms:un([Me.sprite,Me.fog]),vertexShader:je.sprite_vert,fragmentShader:je.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:je.background_vert,fragmentShader:je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new He}},vertexShader:je.backgroundCube_vert,fragmentShader:je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:je.cube_vert,fragmentShader:je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:je.equirect_vert,fragmentShader:je.equirect_frag},distance:{uniforms:un([Me.common,Me.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:je.distance_vert,fragmentShader:je.distance_frag},shadow:{uniforms:un([Me.lights,Me.fog,{color:{value:new Ze(0)},opacity:{value:1}}]),vertexShader:je.shadow_vert,fragmentShader:je.shadow_frag}};yi.physical={uniforms:un([yi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new Ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new Ze(0)},specularColor:{value:new Ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag};const Gl={r:0,b:0,g:0},SN=new At,KM=new He;KM.set(-1,0,0,0,1,0,0,0,1);function MN(t,e,n,i,r,s){const a=new Ze(0);let o=r===!0?0:1,l,c,d=null,f=0,u=null;function p(g){let S=g.isScene===!0?g.background:null;if(S&&S.isTexture){const _=g.backgroundBlurriness>0;S=e.get(S,_)}return S}function x(g){let S=!1;const _=p(g);_===null?v(a,o):_&&_.isColor&&(v(_,1),S=!0);const T=t.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,s):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(t.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function M(g,S){const _=p(S);_&&(_.isCubeTexture||_.mapping===Mu)?(c===void 0&&(c=new Nn(new Ko(1,1,1),new Ni({name:"BackgroundCubeMaterial",uniforms:ga(yi.backgroundCube.uniforms),vertexShader:yi.backgroundCube.vertexShader,fragmentShader:yi.backgroundCube.fragmentShader,side:En,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,w,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=_,c.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(SN.makeRotationFromEuler(S.backgroundRotation)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(KM),c.material.toneMapped=Je.getTransfer(_.colorSpace)!==ot,(d!==_||f!==_.version||u!==t.toneMapping)&&(c.material.needsUpdate=!0,d=_,f=_.version,u=t.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new Nn(new Tu(2,2),new Ni({name:"BackgroundMaterial",uniforms:ga(yi.background.uniforms),vertexShader:yi.background.vertexShader,fragmentShader:yi.background.fragmentShader,side:cs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=Je.getTransfer(_.colorSpace)!==ot,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(d!==_||f!==_.version||u!==t.toneMapping)&&(l.material.needsUpdate=!0,d=_,f=_.version,u=t.toneMapping),l.layers.enableAll(),g.unshift(l,l.geometry,l.material,0,0,null))}function v(g,S){g.getRGB(Gl,jM(t)),n.buffers.color.setClear(Gl.r,Gl.g,Gl.b,S,s)}function h(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(g,S=1){a.set(g),o=S,v(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(g){o=g,v(a,o)},render:x,addToRenderList:M,dispose:h}}function EN(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=u(null);let s=r,a=!1;function o(D,B,Y,k,X){let ee=!1;const W=f(D,k,Y,B);s!==W&&(s=W,c(s.object)),ee=p(D,k,Y,X),ee&&x(D,k,Y,X),X!==null&&e.update(X,t.ELEMENT_ARRAY_BUFFER),(ee||a)&&(a=!1,_(D,B,Y,k),X!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function l(){return t.createVertexArray()}function c(D){return t.bindVertexArray(D)}function d(D){return t.deleteVertexArray(D)}function f(D,B,Y,k){const X=k.wireframe===!0;let ee=i[B.id];ee===void 0&&(ee={},i[B.id]=ee);const W=D.isInstancedMesh===!0?D.id:0;let z=ee[W];z===void 0&&(z={},ee[W]=z);let V=z[Y.id];V===void 0&&(V={},z[Y.id]=V);let b=V[X];return b===void 0&&(b=u(l()),V[X]=b),b}function u(D){const B=[],Y=[],k=[];for(let X=0;X<n;X++)B[X]=0,Y[X]=0,k[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:Y,attributeDivisors:k,object:D,attributes:{},index:null}}function p(D,B,Y,k){const X=s.attributes,ee=B.attributes;let W=0;const z=Y.getAttributes();for(const V in z)if(z[V].location>=0){const C=X[V];let J=ee[V];if(J===void 0&&(V==="instanceMatrix"&&D.instanceMatrix&&(J=D.instanceMatrix),V==="instanceColor"&&D.instanceColor&&(J=D.instanceColor)),C===void 0||C.attribute!==J||J&&C.data!==J.data)return!0;W++}return s.attributesNum!==W||s.index!==k}function x(D,B,Y,k){const X={},ee=B.attributes;let W=0;const z=Y.getAttributes();for(const V in z)if(z[V].location>=0){let C=ee[V];C===void 0&&(V==="instanceMatrix"&&D.instanceMatrix&&(C=D.instanceMatrix),V==="instanceColor"&&D.instanceColor&&(C=D.instanceColor));const J={};J.attribute=C,C&&C.data&&(J.data=C.data),X[V]=J,W++}s.attributes=X,s.attributesNum=W,s.index=k}function M(){const D=s.newAttributes;for(let B=0,Y=D.length;B<Y;B++)D[B]=0}function v(D){h(D,0)}function h(D,B){const Y=s.newAttributes,k=s.enabledAttributes,X=s.attributeDivisors;Y[D]=1,k[D]===0&&(t.enableVertexAttribArray(D),k[D]=1),X[D]!==B&&(t.vertexAttribDivisor(D,B),X[D]=B)}function g(){const D=s.newAttributes,B=s.enabledAttributes;for(let Y=0,k=B.length;Y<k;Y++)B[Y]!==D[Y]&&(t.disableVertexAttribArray(Y),B[Y]=0)}function S(D,B,Y,k,X,ee,W){W===!0?t.vertexAttribIPointer(D,B,Y,X,ee):t.vertexAttribPointer(D,B,Y,k,X,ee)}function _(D,B,Y,k){M();const X=k.attributes,ee=Y.getAttributes(),W=B.defaultAttributeValues;for(const z in ee){const V=ee[z];if(V.location>=0){let b=X[z];if(b===void 0&&(z==="instanceMatrix"&&D.instanceMatrix&&(b=D.instanceMatrix),z==="instanceColor"&&D.instanceColor&&(b=D.instanceColor)),b!==void 0){const C=b.normalized,J=b.itemSize,ne=e.get(b);if(ne===void 0)continue;const de=ne.buffer,pe=ne.type,me=ne.bytesPerElement,I=pe===t.INT||pe===t.UNSIGNED_INT||b.gpuType===bm;if(b.isInterleavedBufferAttribute){const H=b.data,le=H.stride,fe=b.offset;if(H.isInstancedInterleavedBuffer){for(let oe=0;oe<V.locationSize;oe++)h(V.location+oe,H.meshPerAttribute);D.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let oe=0;oe<V.locationSize;oe++)v(V.location+oe);t.bindBuffer(t.ARRAY_BUFFER,de);for(let oe=0;oe<V.locationSize;oe++)S(V.location+oe,J/V.locationSize,pe,C,le*me,(fe+J/V.locationSize*oe)*me,I)}else{if(b.isInstancedBufferAttribute){for(let H=0;H<V.locationSize;H++)h(V.location+H,b.meshPerAttribute);D.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=b.meshPerAttribute*b.count)}else for(let H=0;H<V.locationSize;H++)v(V.location+H);t.bindBuffer(t.ARRAY_BUFFER,de);for(let H=0;H<V.locationSize;H++)S(V.location+H,J/V.locationSize,pe,C,J*me,J/V.locationSize*H*me,I)}}else if(W!==void 0){const C=W[z];if(C!==void 0)switch(C.length){case 2:t.vertexAttrib2fv(V.location,C);break;case 3:t.vertexAttrib3fv(V.location,C);break;case 4:t.vertexAttrib4fv(V.location,C);break;default:t.vertexAttrib1fv(V.location,C)}}}}g()}function T(){P();for(const D in i){const B=i[D];for(const Y in B){const k=B[Y];for(const X in k){const ee=k[X];for(const W in ee)d(ee[W].object),delete ee[W];delete k[X]}}delete i[D]}}function w(D){if(i[D.id]===void 0)return;const B=i[D.id];for(const Y in B){const k=B[Y];for(const X in k){const ee=k[X];for(const W in ee)d(ee[W].object),delete ee[W];delete k[X]}}delete i[D.id]}function R(D){for(const B in i){const Y=i[B];for(const k in Y){const X=Y[k];if(X[D.id]===void 0)continue;const ee=X[D.id];for(const W in ee)d(ee[W].object),delete ee[W];delete X[D.id]}}}function y(D){for(const B in i){const Y=i[B],k=D.isInstancedMesh===!0?D.id:0,X=Y[k];if(X!==void 0){for(const ee in X){const W=X[ee];for(const z in W)d(W[z].object),delete W[z];delete X[ee]}delete Y[k],Object.keys(Y).length===0&&delete i[B]}}}function P(){L(),a=!0,s!==r&&(s=r,c(s.object))}function L(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:P,resetDefaultState:L,dispose:T,releaseStatesOfGeometry:w,releaseStatesOfObject:y,releaseStatesOfProgram:R,initAttributes:M,enableAttribute:v,disableUnusedAttributes:g}}function TN(t,e,n){let i;function r(l){i=l}function s(l,c){t.drawArrays(i,l,c),n.update(c,i,1)}function a(l,c,d){d!==0&&(t.drawArraysInstanced(i,l,c,d),n.update(c,i,d))}function o(l,c,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,d);let u=0;for(let p=0;p<d;p++)u+=c[p];n.update(u,i,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function wN(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(R){return!(R!==oi&&i.convert(R)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const y=R===Pi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Rn&&R!==Mi&&!y&&i.convert(R)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE))}function l(R){if(R==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const d=l(c);d!==c&&(ze("WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const f=n.logarithmicDepthBuffer===!0,u=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&u===!1&&ze("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),x=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=t.getParameter(t.MAX_TEXTURE_SIZE),v=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),h=t.getParameter(t.MAX_VERTEX_ATTRIBS),g=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),S=t.getParameter(t.MAX_VARYING_VECTORS),_=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),T=t.getParameter(t.MAX_SAMPLES),w=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:p,maxVertexTextures:x,maxTextureSize:M,maxCubemapSize:v,maxAttributes:h,maxVertexUniforms:g,maxVaryings:S,maxFragmentUniforms:_,maxSamples:T,samples:w}}function AN(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new hr,o=new He,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){const p=f.length!==0||u||i!==0||r;return r=u,i=f.length,p},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,u){n=d(f,u,0)},this.setState=function(f,u,p){const x=f.clippingPlanes,M=f.clipIntersection,v=f.clipShadows,h=t.get(f);if(!r||x===null||x.length===0||s&&!v)s?d(null):c();else{const g=s?0:i,S=g*4;let _=h.clippingState||null;l.value=_,_=d(x,u,S,p);for(let T=0;T!==S;++T)_[T]=n[T];h.clippingState=_,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=g}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(f,u,p,x){const M=f!==null?f.length:0;let v=null;if(M!==0){if(v=l.value,x!==!0||v===null){const h=p+M*4,g=u.matrixWorldInverse;o.getNormalMatrix(g),(v===null||v.length<h)&&(v=new Float32Array(h));for(let S=0,_=p;S!==M;++S,_+=4)a.copy(f[S]).applyMatrix4(g,o),a.normal.toArray(v,_),v[_+3]=a.constant}l.value=v,l.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,v}}const Ks=4,bN=6,CN=20,RN=256,Va=new $M,rx=new Ze;let Gd=null,Wd=0,jd=0,Xd=!1;const PN=new j,Gr=new j;class sx{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:a=256,position:o=PN}=s;Gd=this._renderer.getRenderTarget(),Wd=this._renderer.getActiveCubeFace(),jd=this._renderer.getActiveMipmapLevel(),Xd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=lx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ox(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Gd,Wd,jd),this._renderer.xr.enabled=Xd,e.scissorTest=!1,Ns(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===us||e.mapping===ma?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Gd=this._renderer.getRenderTarget(),Wd=this._renderer.getActiveCubeFace(),jd=this._renderer.getActiveMipmapLevel(),Xd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:on,minFilter:on,generateMipmaps:!1,type:Pi,format:oi,colorSpace:Yc,depthBuffer:!1},r=ax(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ax(e,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=NN(s)),this._blurMaterial=DN(s,e,n),this._ggxMaterial=LN(s,e,n)}return r}_compileMaterial(e){const n=new Nn(new Tn,e);this._renderer.compile(n,Va)}_sceneToCubeUV(e,n,i,r,s){const l=new Cn(90,1,n,i),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],f=this._renderer,u=f.autoClear,p=f.toneMapping;f.getClearColor(rx),f.toneMapping=Ci,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Nn(new Ko,new Fm({name:"PMREM.Background",side:En,depthWrite:!1,depthTest:!1})));const M=this._backgroundBox,v=M.material;let h=!1;const g=e.background;g?g.isColor&&(v.color.copy(g),e.background=null,h=!0):(v.color.copy(rx),h=!0);for(let S=0;S<6;S++){const _=S%3;_===0?(l.up.set(0,c[S],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+d[S],s.y,s.z)):_===1?(l.up.set(0,0,c[S]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+d[S],s.z)):(l.up.set(0,c[S],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+d[S]));const T=this._cubeSize;Ns(r,_*T,S>2?T:0,T,T),f.setRenderTarget(r),h&&f.render(M,l),f.render(e,l)}f.toneMapping=p,f.autoClear=u,e.background=g}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===us||e.mapping===ma;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=lx()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ox());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Ns(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,Va)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);n.autoClear=i}_applyGGXFilter(e,n,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,c=i/(this._lodMeshes.length-1),d=n/(this._lodMeshes.length-1),f=Math.sqrt(c*c-d*d),u=c*1.25,p=f*u,{_lodMax:x}=this,M=this._sizeLods[i],v=3*M*(i>x-Ks?i-x+Ks:0),h=4*(this._cubeSize-M);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=x-n,Ns(s,v,h,3*M,2*M),r.setRenderTarget(s),r.render(o,Va),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=x-i,Ns(e,v,h,3*M,2*M),r.setRenderTarget(e),r.render(o,Va)}_blur(e,n,i,r){const s=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,s,n,i,a),this._blurPass(s,e,i,i,a)}_blurPass(e,n,i,r,s){const a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[r];l.material=o;const c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=s,c.mipInt.value=this._lodMax-i;const d=this._sizeLods[r],f=3*d*(r>this._lodMax-Ks?r-this._lodMax+Ks:0),u=4*(this._cubeSize-d);Ns(n,f,u,3*d,2*d),a.setRenderTarget(n),a.render(l,Va)}}function NN(t){const e=[],n=[];let i=t;const r=t-Ks+1+bN;for(let s=0;s<r;s++){const a=Math.pow(2,i);e.push(a);const o=1/(a-2),l=-o,c=1+o,d=[l,l,c,l,c,c,l,l,c,c,l,c],f=6,u=6,p=3,x=new Float32Array(p*u*f),M=new Float32Array(p*u*f);for(let h=0;h<f;h++){const g=h%3*2/3-1,S=h>2?0:-1,_=[g,S,0,g+2/3,S,0,g+2/3,S+1,0,g,S,0,g+2/3,S+1,0,g,S+1,0];x.set(_,p*u*h);for(let T=0;T<u;T++){const w=d[T*2]*2-1,R=d[T*2+1]*2-1;h===0?Gr.set(1,R,w):h===1?Gr.set(-w,1,-R):h===2?Gr.set(-w,R,1):h===3?Gr.set(-1,R,-w):h===4?Gr.set(-w,-1,R):Gr.set(w,R,-1),Gr.toArray(M,(h*u+T)*p)}}const v=new Tn;v.setAttribute("position",new di(x,p)),v.setAttribute("outputDirection",new di(M,p)),n.push(new Nn(v,null)),i>Ks&&i--}return{lodMeshes:n,sizeLods:e}}function ax(t,e,n){const i=new ui(t,e,n);return i.texture.mapping=Mu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ns(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function LN(t,e,n){return new Ni({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:RN,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:wu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function DN(t,e,n){return new Ni({name:"SphericalGaussianBlur",defines:{SAMPLES:CN,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:wu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function ox(){return new Ni({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:wu(),fragmentShader:`

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
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function lx(){return new Ni({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function wu(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class ZM extends ui{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new GM(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ko(5,5,5),s=new Ni({name:"CubemapFromEquirect",uniforms:ga(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:En,blending:Xi});s.uniforms.tEquirect.value=n;const a=new Nn(r,s),o=n.minFilter;return n.minFilter===Jr&&(n.minFilter=on),new FP(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}function IN(t){let e=new WeakMap,n=new WeakMap,i=null;function r(u,p=!1){return u==null?null:p?a(u):s(u)}function s(u){if(u&&u.isTexture){const p=u.mapping;if(p===pd||p===md)if(e.has(u)){const x=e.get(u).texture;return o(x,u.mapping)}else{const x=u.image;if(x&&x.height>0){const M=new ZM(x.height);return M.fromEquirectangularTexture(t,u),e.set(u,M),u.addEventListener("dispose",c),o(M.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){const p=u.mapping,x=p===pd||p===md,M=p===us||p===ma;if(x||M){let v=n.get(u);const h=v!==void 0?v.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==h)return i===null&&(i=new sx(t)),v=x?i.fromEquirectangular(u,v):i.fromCubemap(u,v),v.texture.pmremVersion=u.pmremVersion,n.set(u,v),v.texture;if(v!==void 0)return v.texture;{const g=u.image;return x&&g&&g.height>0||M&&g&&l(g)?(i===null&&(i=new sx(t)),v=x?i.fromEquirectangular(u):i.fromCubemap(u),v.texture.pmremVersion=u.pmremVersion,n.set(u,v),u.addEventListener("dispose",d),v.texture):null}}}return u}function o(u,p){return p===pd?u.mapping=us:p===md&&(u.mapping=ma),u}function l(u){let p=0;const x=6;for(let M=0;M<x;M++)u[M]!==void 0&&p++;return p===x}function c(u){const p=u.target;p.removeEventListener("dispose",c);const x=e.get(p);x!==void 0&&(e.delete(p),x.dispose())}function d(u){const p=u.target;p.removeEventListener("dispose",d);const x=n.get(p);x!==void 0&&(n.delete(p),x.dispose())}function f(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:f}}function UN(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&ia("WebGLRenderer: "+i+" extension not supported."),r}}}function FN(t,e,n,i){const r={},s=new WeakMap;function a(f){const u=f.target;u.index!==null&&e.remove(u.index);for(const x in u.attributes)e.remove(u.attributes[x]);u.removeEventListener("dispose",a),delete r[u.id];const p=s.get(u);p&&(e.remove(p),s.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,n.memory.geometries--}function o(f,u){return r[u.id]===!0||(u.addEventListener("dispose",a),r[u.id]=!0,n.memory.geometries++),u}function l(f){const u=f.attributes;for(const p in u)e.update(u[p],t.ARRAY_BUFFER)}function c(f){const u=[],p=f.index,x=f.attributes.position;let M=0;if(x===void 0)return;if(p!==null){const g=p.array;M=p.version;for(let S=0,_=g.length;S<_;S+=3){const T=g[S+0],w=g[S+1],R=g[S+2];u.push(T,w,w,R,R,T)}}else{const g=x.array;M=x.version;for(let S=0,_=g.length/3-1;S<_;S+=3){const T=S+0,w=S+1,R=S+2;u.push(T,w,w,R,R,T)}}const v=new(x.count>=65535?VM:BM)(u,1);v.version=M;const h=s.get(f);h&&e.remove(h),s.set(f,v)}function d(f){const u=s.get(f);if(u){const p=f.index;p!==null&&u.version<p.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:d}}function ON(t,e,n){let i;function r(f){i=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function l(f,u){t.drawElements(i,u,s,f*a),n.update(u,i,1)}function c(f,u,p){p!==0&&(t.drawElementsInstanced(i,u,s,f*a,p),n.update(u,i,p))}function d(f,u,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,s,f,0,p);let M=0;for(let v=0;v<p;v++)M+=u[v];n.update(M,i,1)}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d}function kN(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:it("WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function BN(t,e,n){const i=new WeakMap,r=new Tt;function s(a,o,l){const c=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=d!==void 0?d.length:0;let u=i.get(o);if(u===void 0||u.count!==f){let L=function(){y.dispose(),i.delete(o),o.removeEventListener("dispose",L)};var p=L;u!==void 0&&u.texture.dispose();const x=o.morphAttributes.position!==void 0,M=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,h=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],S=o.morphAttributes.color||[];let _=0;x===!0&&(_=1),M===!0&&(_=2),v===!0&&(_=3);let T=o.attributes.position.count*_,w=1;T>e.maxTextureSize&&(w=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const R=new Float32Array(T*w*4*f),y=new FM(R,T,w,f);y.type=Mi,y.needsUpdate=!0;const P=_*4;for(let D=0;D<f;D++){const B=h[D],Y=g[D],k=S[D],X=T*w*4*D;for(let ee=0;ee<B.count;ee++){const W=ee*P;x===!0&&(r.fromBufferAttribute(B,ee),R[X+W+0]=r.x,R[X+W+1]=r.y,R[X+W+2]=r.z,R[X+W+3]=0),M===!0&&(r.fromBufferAttribute(Y,ee),R[X+W+4]=r.x,R[X+W+5]=r.y,R[X+W+6]=r.z,R[X+W+7]=0),v===!0&&(r.fromBufferAttribute(k,ee),R[X+W+8]=r.x,R[X+W+9]=r.y,R[X+W+10]=r.z,R[X+W+11]=k.itemSize===4?r.w:1)}}u={count:f,texture:y,size:new qe(T,w)},i.set(o,u),o.addEventListener("dispose",L)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let x=0;for(let v=0;v<c.length;v++)x+=c[v];const M=o.morphTargetsRelative?1:1-x;l.getUniforms().setValue(t,"morphTargetBaseInfluence",M),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",u.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",u.size)}return{update:s}}function VN(t,e,n,i,r){let s=new WeakMap;function a(c){const d=r.render.frame,f=c.geometry,u=e.get(c,f);if(s.get(u)!==d&&(e.update(u),s.set(u,d)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==d&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),s.set(c,d))),c.isSkinnedMesh){const p=c.skeleton;s.get(p)!==d&&(p.update(),s.set(p,d))}return u}function o(){s=new WeakMap}function l(c){const d=c.target;d.removeEventListener("dispose",l),i.releaseStatesOfObject(d),n.remove(d.instanceMatrix),d.instanceColor!==null&&n.remove(d.instanceColor)}return{update:a,dispose:o}}const zN={[_M]:"LINEAR_TONE_MAPPING",[SM]:"REINHARD_TONE_MAPPING",[MM]:"CINEON_TONE_MAPPING",[EM]:"ACES_FILMIC_TONE_MAPPING",[wM]:"AGX_TONE_MAPPING",[AM]:"NEUTRAL_TONE_MAPPING",[TM]:"CUSTOM_TONE_MAPPING"};function HN(t,e,n,i,r,s){const a=new ui(e,n,{type:t,depthBuffer:r,stencilBuffer:s,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null;const c=new Tn;c.setAttribute("position",new Xt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Xt([0,2,0,0,2,0],2));const d=new PP({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new Nn(c,d),u=new $M(-1,1,1,-1,0,1);let p=null,x=null,M=!1,v,h=null,g=[],S=!1;this.setSize=function(_,T){a.setSize(_,T),o!==null&&o.setSize(_,T),l!==null&&l.setSize(_,T);for(let w=0;w<g.length;w++){const R=g[w];R.setSize&&R.setSize(_,T)}},this.setEffects=function(_){g=_,S=g.length>0&&g[0].isRenderPass===!0;const T=a.width,w=a.height;g.length>0&&o===null&&(o=new ui(T,w,{type:Pi,depthBuffer:!1,stencilBuffer:!1}),l=new ui(T,w,{type:Pi,depthBuffer:!1,stencilBuffer:!1}));for(let R=0;R<g.length;R++){const y=g[R];y.setSize&&y.setSize(T,w)}},this.begin=function(_,T){if(M||_.toneMapping===Ci&&g.length===0)return!1;if(h=T,T!==null){const w=T.width,R=T.height;(a.width!==w||a.height!==R)&&this.setSize(w,R)}return S===!1&&_.setRenderTarget(a),v=_.toneMapping,_.toneMapping=Ci,!0},this.hasRenderPass=function(){return S},this.end=function(_,T){_.toneMapping=v,M=!0;let w=a,R=o;for(let y=0;y<g.length;y++){const P=g[y];P.enabled!==!1&&(P.render(_,R,w,T),P.needsSwap!==!1&&(w=R,R=R===o?l:o))}if(p!==_.outputColorSpace||x!==_.toneMapping){p=_.outputColorSpace,x=_.toneMapping,d.defines={},Je.getTransfer(p)===ot&&(d.defines.SRGB_TRANSFER="");const y=zN[x];y&&(d.defines[y]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=w.texture,_.setRenderTarget(h),_.render(f,u),h=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),d.dispose()}}const JM=new hn,qh=new ko(1,1),QM=new FM,eE=new aP,tE=new GM,cx=[],ux=[],dx=new Float32Array(16),fx=new Float32Array(9),hx=new Float32Array(4);function Ta(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=cx[r];if(s===void 0&&(s=new Float32Array(r),cx[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function zt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Ht(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Au(t,e){let n=ux[e];n===void 0&&(n=new Int32Array(e),ux[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function GN(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function WN(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(zt(n,e))return;t.uniform2fv(this.addr,e),Ht(n,e)}}function jN(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(zt(n,e))return;t.uniform3fv(this.addr,e),Ht(n,e)}}function XN(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(zt(n,e))return;t.uniform4fv(this.addr,e),Ht(n,e)}}function YN(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(zt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Ht(n,e)}else{if(zt(n,i))return;hx.set(i),t.uniformMatrix2fv(this.addr,!1,hx),Ht(n,i)}}function $N(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(zt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Ht(n,e)}else{if(zt(n,i))return;fx.set(i),t.uniformMatrix3fv(this.addr,!1,fx),Ht(n,i)}}function qN(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(zt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Ht(n,e)}else{if(zt(n,i))return;dx.set(i),t.uniformMatrix4fv(this.addr,!1,dx),Ht(n,i)}}function KN(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function ZN(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(zt(n,e))return;t.uniform2iv(this.addr,e),Ht(n,e)}}function JN(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(zt(n,e))return;t.uniform3iv(this.addr,e),Ht(n,e)}}function QN(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(zt(n,e))return;t.uniform4iv(this.addr,e),Ht(n,e)}}function eL(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function tL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(zt(n,e))return;t.uniform2uiv(this.addr,e),Ht(n,e)}}function nL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(zt(n,e))return;t.uniform3uiv(this.addr,e),Ht(n,e)}}function iL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(zt(n,e))return;t.uniform4uiv(this.addr,e),Ht(n,e)}}function rL(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(qh.compareFunction=n.isReversedDepthBuffer()?Im:Dm,s=qh):s=JM,n.setTexture2D(e||s,r)}function sL(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||eE,r)}function aL(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||tE,r)}function oL(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||QM,r)}function lL(t){switch(t){case 5126:return GN;case 35664:return WN;case 35665:return jN;case 35666:return XN;case 35674:return YN;case 35675:return $N;case 35676:return qN;case 5124:case 35670:return KN;case 35667:case 35671:return ZN;case 35668:case 35672:return JN;case 35669:case 35673:return QN;case 5125:return eL;case 36294:return tL;case 36295:return nL;case 36296:return iL;case 35678:case 36198:case 36298:case 36306:case 35682:return rL;case 35679:case 36299:case 36307:return sL;case 35680:case 36300:case 36308:case 36293:return aL;case 36289:case 36303:case 36311:case 36292:return oL}}function cL(t,e){t.uniform1fv(this.addr,e)}function uL(t,e){const n=Ta(e,this.size,2);t.uniform2fv(this.addr,n)}function dL(t,e){const n=Ta(e,this.size,3);t.uniform3fv(this.addr,n)}function fL(t,e){const n=Ta(e,this.size,4);t.uniform4fv(this.addr,n)}function hL(t,e){const n=Ta(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function pL(t,e){const n=Ta(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function mL(t,e){const n=Ta(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function gL(t,e){t.uniform1iv(this.addr,e)}function vL(t,e){t.uniform2iv(this.addr,e)}function xL(t,e){t.uniform3iv(this.addr,e)}function yL(t,e){t.uniform4iv(this.addr,e)}function _L(t,e){t.uniform1uiv(this.addr,e)}function SL(t,e){t.uniform2uiv(this.addr,e)}function ML(t,e){t.uniform3uiv(this.addr,e)}function EL(t,e){t.uniform4uiv(this.addr,e)}function TL(t,e,n){const i=this.cache,r=e.length,s=Au(n,r);zt(i,s)||(t.uniform1iv(this.addr,s),Ht(i,s));let a;this.type===t.SAMPLER_2D_SHADOW?a=qh:a=JM;for(let o=0;o!==r;++o)n.setTexture2D(e[o]||a,s[o])}function wL(t,e,n){const i=this.cache,r=e.length,s=Au(n,r);zt(i,s)||(t.uniform1iv(this.addr,s),Ht(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||eE,s[a])}function AL(t,e,n){const i=this.cache,r=e.length,s=Au(n,r);zt(i,s)||(t.uniform1iv(this.addr,s),Ht(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||tE,s[a])}function bL(t,e,n){const i=this.cache,r=e.length,s=Au(n,r);zt(i,s)||(t.uniform1iv(this.addr,s),Ht(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||QM,s[a])}function CL(t){switch(t){case 5126:return cL;case 35664:return uL;case 35665:return dL;case 35666:return fL;case 35674:return hL;case 35675:return pL;case 35676:return mL;case 5124:case 35670:return gL;case 35667:case 35671:return vL;case 35668:case 35672:return xL;case 35669:case 35673:return yL;case 5125:return _L;case 36294:return SL;case 36295:return ML;case 36296:return EL;case 35678:case 36198:case 36298:case 36306:case 35682:return TL;case 35679:case 36299:case 36307:return wL;case 35680:case 36300:case 36308:case 36293:return AL;case 36289:case 36303:case 36311:case 36292:return bL}}class RL{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=lL(n.type)}}class PL{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=CL(n.type)}}class NL{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const Yd=/(\w+)(\])?(\[|\.)?/g;function px(t,e){t.seq.push(e),t.map[e.id]=e}function LL(t,e,n){const i=t.name,r=i.length;for(Yd.lastIndex=0;;){const s=Yd.exec(i),a=Yd.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){px(n,c===void 0?new RL(o,t,e):new PL(o,t,e));break}else{let f=n.map[o];f===void 0&&(f=new NL(o),px(n,f)),n=f}}}class hc{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(n,a),l=e.getUniformLocation(n,o.name);LL(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function mx(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const DL=37297;let IL=0;function UL(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}const gx=new He;function FL(t){Je._getMatrix(gx,Je.workingColorSpace,t);const e=`mat3( ${gx.elements.map(n=>n.toFixed(4))} )`;switch(Je.getTransfer(t)){case $c:return[e,"LinearTransferOETF"];case ot:return[e,"sRGBTransferOETF"];default:return ze("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function vx(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return n.toUpperCase()+`

`+s+`

`+UL(t.getShaderSource(e),o)}else return s}function OL(t,e){const n=FL(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const kL={[_M]:"Linear",[SM]:"Reinhard",[MM]:"Cineon",[EM]:"ACESFilmic",[wM]:"AgX",[AM]:"Neutral",[TM]:"Custom"};function BL(t,e){const n=kL[e];return n===void 0?(ze("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Wl=new j;function VL(){Je.getLuminanceCoefficients(Wl);const t=Wl.x.toFixed(4),e=Wl.y.toFixed(4),n=Wl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function zL(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ka).join(`
`)}function HL(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function GL(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function Ka(t){return t!==""}function xx(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function yx(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const WL=/^[ \t]*#include +<([\w\d./]+)>/gm;function Kh(t){return t.replace(WL,XL)}const jL=new Map;function XL(t,e){let n=je[e];if(n===void 0){const i=jL.get(e);if(i!==void 0)n=je[i],ze('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Kh(n)}const YL=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _x(t){return t.replace(YL,$L)}function $L(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Sx(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const qL={[lc]:"SHADOWMAP_TYPE_PCF",[qa]:"SHADOWMAP_TYPE_VSM"};function KL(t){return qL[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const ZL={[us]:"ENVMAP_TYPE_CUBE",[ma]:"ENVMAP_TYPE_CUBE",[Mu]:"ENVMAP_TYPE_CUBE_UV"};function JL(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":ZL[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const QL={[ma]:"ENVMAP_MODE_REFRACTION"};function eD(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":QL[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const tD={[yM]:"ENVMAP_BLENDING_MULTIPLY",[OR]:"ENVMAP_BLENDING_MIX",[kR]:"ENVMAP_BLENDING_ADD"};function nD(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":tD[t.combine]||"ENVMAP_BLENDING_NONE"}function iD(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function rD(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=KL(n),c=JL(n),d=eD(n),f=nD(n),u=iD(n),p=zL(n),x=HL(s),M=r.createProgram();let v,h,g=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(v=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(Ka).join(`
`),v.length>0&&(v+=`
`),h=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(Ka).join(`
`),h.length>0&&(h+=`
`)):(v=[Sx(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ka).join(`
`),h=[Sx(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",n.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.retroreflection?"#define USE_RETROREFLECTION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Ci?"#define TONE_MAPPING":"",n.toneMapping!==Ci?je.tonemapping_pars_fragment:"",n.toneMapping!==Ci?BL("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",je.colorspace_pars_fragment,OL("linearToOutputTexel",n.outputColorSpace),VL(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ka).join(`
`)),a=Kh(a),a=xx(a,n),a=yx(a,n),o=Kh(o),o=xx(o,n),o=yx(o,n),a=_x(a),o=_x(o),n.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,v=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,h=["#define varying in",n.glslVersion===Lv?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Lv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const S=g+v+a,_=g+h+o,T=mx(r,r.VERTEX_SHADER,S),w=mx(r,r.FRAGMENT_SHADER,_);r.attachShader(M,T),r.attachShader(M,w),n.index0AttributeName!==void 0?r.bindAttribLocation(M,0,n.index0AttributeName):n.hasPositionAttribute===!0&&r.bindAttribLocation(M,0,"position"),r.linkProgram(M);function R(D){if(t.debug.checkShaderErrors){const B=r.getProgramInfoLog(M)||"",Y=r.getShaderInfoLog(T)||"",k=r.getShaderInfoLog(w)||"",X=B.trim(),ee=Y.trim(),W=k.trim();let z=!0,V=!0;if(r.getProgramParameter(M,r.LINK_STATUS)===!1)if(z=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,M,T,w);else{const b=vx(r,T,"vertex"),C=vx(r,w,"fragment");it("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(M,r.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+X+`
`+b+`
`+C)}else X!==""?ze("WebGLProgram: Program Info Log:",X):(ee===""||W==="")&&(V=!1);V&&(D.diagnostics={runnable:z,programLog:X,vertexShader:{log:ee,prefix:v},fragmentShader:{log:W,prefix:h}})}r.deleteShader(T),r.deleteShader(w),y=new hc(r,M),P=GL(r,M)}let y;this.getUniforms=function(){return y===void 0&&R(this),y};let P;this.getAttributes=function(){return P===void 0&&R(this),P};let L=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=r.getProgramParameter(M,DL)),L},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(M),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=IL++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=T,this.fragmentShader=w,this}let sD=0;class aD{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,i){const r=this._getShaderCacheForMaterial(e);return r.has(n)===!1&&(r.add(n),n.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new oD(e),n.set(e,i)),i}}class oD{constructor(e){this.id=sD++,this.code=e,this.usedTimes=0}}function lD(t){return t===ds||t===jc||t===Xc}function cD(t,e,n,i,r,s){const a=new OM,o=new aD,l=new Set,c=[],d=new Map,f=i.logarithmicDepthBuffer;let u=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(y){return l.add(y),y===0?"uv":`uv${y}`}function M(y,P,L,D,B,Y){const k=D.fog,X=B.geometry,ee=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?D.environment:null,W=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,z=e.get(y.envMap||ee,W),V=z&&z.mapping===Mu?z.image.height:null,b=p[y.type];y.precision!==null&&(u=i.getMaxPrecision(y.precision),u!==y.precision&&ze("WebGLProgram.getParameters:",y.precision,"not supported, using",u,"instead."));const C=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,J=C!==void 0?C.length:0;let ne=0;X.morphAttributes.position!==void 0&&(ne=1),X.morphAttributes.normal!==void 0&&(ne=2),X.morphAttributes.color!==void 0&&(ne=3);let de,pe,me,I;if(b){const ft=yi[b];de=ft.vertexShader,pe=ft.fragmentShader}else{de=y.vertexShader,pe=y.fragmentShader;const ft=o.getVertexShaderStage(y),st=o.getFragmentShaderStage(y);o.update(y,ft,st),me=ft.id,I=st.id}const H=t.getRenderTarget(),le=t.state.buffers.depth.getReversed(),fe=B.isInstancedMesh===!0,oe=B.isBatchedMesh===!0,Ae=!!y.map,Xe=!!y.matcap,_e=!!z,Ve=!!y.aoMap,Ye=!!y.lightMap,Be=!!y.bumpMap&&y.wireframe===!1,et=!!y.normalMap,dt=!!y.displacementMap,mt=!!y.emissiveMap,gt=!!y.metalnessMap,Ct=!!y.roughnessMap,O=y.anisotropy>0,kt=y.clearcoat>0,rt=y.dispersion>0,N=y.retroreflectivity>0,E=y.iridescence>0,G=y.sheen>0,K=y.transmission>0,Q=O&&!!y.anisotropyMap,ue=kt&&!!y.clearcoatMap,he=kt&&!!y.clearcoatNormalMap,te=kt&&!!y.clearcoatRoughnessMap,re=E&&!!y.iridescenceMap,ge=E&&!!y.iridescenceThicknessMap,Ie=G&&!!y.sheenColorMap,Se=G&&!!y.sheenRoughnessMap,ve=!!y.specularMap,Ue=!!y.specularColorMap,Oe=!!y.specularIntensityMap,Ge=K&&!!y.transmissionMap,F=K&&!!y.thicknessMap,xe=!!y.gradientMap,ie=!!y.alphaMap,ye=y.alphaTest>0,we=!!y.alphaHash,ae=!!y.extensions;let Fe=Ci;y.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(Fe=t.toneMapping);const Le={shaderID:b,shaderType:y.type,shaderName:y.name,vertexShader:de,fragmentShader:pe,defines:y.defines,customVertexShaderID:me,customFragmentShaderID:I,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:u,batching:oe,batchingColor:oe&&B._colorsTexture!==null,instancing:fe,instancingColor:fe&&B.instanceColor!==null,instancingMorph:fe&&B.morphTexture!==null,outputColorSpace:H===null?t.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:Je.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:Ae,matcap:Xe,envMap:_e,envMapMode:_e&&z.mapping,envMapCubeUVHeight:V,aoMap:Ve,lightMap:Ye,bumpMap:Be,normalMap:et,displacementMap:dt,emissiveMap:mt,normalMapObjectSpace:et&&y.normalMapType===zR,normalMapTangentSpace:et&&y.normalMapType===Xh,packedNormalMap:et&&y.normalMapType===Xh&&lD(y.normalMap.format),metalnessMap:gt,roughnessMap:Ct,anisotropy:O,anisotropyMap:Q,clearcoat:kt,clearcoatMap:ue,clearcoatNormalMap:he,clearcoatRoughnessMap:te,dispersion:rt,retroreflection:N,iridescence:E,iridescenceMap:re,iridescenceThicknessMap:ge,sheen:G,sheenColorMap:Ie,sheenRoughnessMap:Se,specularMap:ve,specularColorMap:Ue,specularIntensityMap:Oe,transmission:K,transmissionMap:Ge,thicknessMap:F,gradientMap:xe,opaque:y.transparent===!1&&y.blending===uo&&y.alphaToCoverage===!1,alphaMap:ie,alphaTest:ye,alphaHash:we,combine:y.combine,mapUv:Ae&&x(y.map.channel),aoMapUv:Ve&&x(y.aoMap.channel),lightMapUv:Ye&&x(y.lightMap.channel),bumpMapUv:Be&&x(y.bumpMap.channel),normalMapUv:et&&x(y.normalMap.channel),displacementMapUv:dt&&x(y.displacementMap.channel),emissiveMapUv:mt&&x(y.emissiveMap.channel),metalnessMapUv:gt&&x(y.metalnessMap.channel),roughnessMapUv:Ct&&x(y.roughnessMap.channel),anisotropyMapUv:Q&&x(y.anisotropyMap.channel),clearcoatMapUv:ue&&x(y.clearcoatMap.channel),clearcoatNormalMapUv:he&&x(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:te&&x(y.clearcoatRoughnessMap.channel),iridescenceMapUv:re&&x(y.iridescenceMap.channel),iridescenceThicknessMapUv:ge&&x(y.iridescenceThicknessMap.channel),sheenColorMapUv:Ie&&x(y.sheenColorMap.channel),sheenRoughnessMapUv:Se&&x(y.sheenRoughnessMap.channel),specularMapUv:ve&&x(y.specularMap.channel),specularColorMapUv:Ue&&x(y.specularColorMap.channel),specularIntensityMapUv:Oe&&x(y.specularIntensityMap.channel),transmissionMapUv:Ge&&x(y.transmissionMap.channel),thicknessMapUv:F&&x(y.thicknessMap.channel),alphaMapUv:ie&&x(y.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(et||O),vertexNormals:!!X.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!X.attributes.uv&&(Ae||ie),fog:!!k,useFog:y.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||X.attributes.normal===void 0&&et===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:le,skinning:B.isSkinnedMesh===!0,hasPositionAttribute:X.attributes.position!==void 0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:ne,numSunLights:P.sun.length,numDirLights:P.directional.length,numPointLights:P.point.length,numSpotLights:P.spot.length,numSpotLightMaps:P.spotLightMap.length,numRectAreaLights:P.rectArea.length,numHemiLights:P.hemi.length,numSunLightShadows:P.sunShadowMap.length,numDirLightShadows:P.directionalShadowMap.length,numPointLightShadows:P.pointShadowMap.length,numSpotLightShadows:P.spotShadowMap.length,numSpotLightShadowsWithMaps:P.numSpotLightShadowsWithMaps,numLightProbes:P.numLightProbes,numLightProbeGrids:Y.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:y.dithering,shadowMapEnabled:t.shadowMap.enabled&&L.length>0,shadowMapType:t.shadowMap.type,toneMapping:Fe,decodeVideoTexture:Ae&&y.map.isVideoTexture===!0&&Je.getTransfer(y.map.colorSpace)===ot,decodeVideoTextureEmissive:mt&&y.emissiveMap.isVideoTexture===!0&&Je.getTransfer(y.emissiveMap.colorSpace)===ot,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Bi,flipSided:y.side===En,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:ae&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ae&&y.extensions.multiDraw===!0||oe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Le.vertexUv1s=l.has(1),Le.vertexUv2s=l.has(2),Le.vertexUv3s=l.has(3),l.clear(),Le}function v(y){const P=[];if(y.shaderID?P.push(y.shaderID):(P.push(y.customVertexShaderID),P.push(y.customFragmentShaderID)),y.defines!==void 0)for(const L in y.defines)P.push(L),P.push(y.defines[L]);return y.isRawShaderMaterial===!1&&(h(P,y),g(P,y),P.push(t.outputColorSpace)),P.push(y.customProgramCacheKey),P.join()}function h(y,P){y.push(P.precision),y.push(P.outputColorSpace),y.push(P.envMapMode),y.push(P.envMapCubeUVHeight),y.push(P.mapUv),y.push(P.alphaMapUv),y.push(P.lightMapUv),y.push(P.aoMapUv),y.push(P.bumpMapUv),y.push(P.normalMapUv),y.push(P.displacementMapUv),y.push(P.emissiveMapUv),y.push(P.metalnessMapUv),y.push(P.roughnessMapUv),y.push(P.anisotropyMapUv),y.push(P.clearcoatMapUv),y.push(P.clearcoatNormalMapUv),y.push(P.clearcoatRoughnessMapUv),y.push(P.iridescenceMapUv),y.push(P.iridescenceThicknessMapUv),y.push(P.sheenColorMapUv),y.push(P.sheenRoughnessMapUv),y.push(P.specularMapUv),y.push(P.specularColorMapUv),y.push(P.specularIntensityMapUv),y.push(P.transmissionMapUv),y.push(P.thicknessMapUv),y.push(P.combine),y.push(P.fogExp2),y.push(P.sizeAttenuation),y.push(P.morphTargetsCount),y.push(P.morphAttributeCount),y.push(P.numSunLights),y.push(P.numDirLights),y.push(P.numPointLights),y.push(P.numSpotLights),y.push(P.numSpotLightMaps),y.push(P.numHemiLights),y.push(P.numRectAreaLights),y.push(P.numSunLightShadows),y.push(P.numDirLightShadows),y.push(P.numPointLightShadows),y.push(P.numSpotLightShadows),y.push(P.numSpotLightShadowsWithMaps),y.push(P.numLightProbes),y.push(P.shadowMapType),y.push(P.toneMapping),y.push(P.numClippingPlanes),y.push(P.numClipIntersection),y.push(P.depthPacking)}function g(y,P){a.disableAll(),P.instancing&&a.enable(0),P.instancingColor&&a.enable(1),P.instancingMorph&&a.enable(2),P.matcap&&a.enable(3),P.envMap&&a.enable(4),P.normalMapObjectSpace&&a.enable(5),P.normalMapTangentSpace&&a.enable(6),P.clearcoat&&a.enable(7),P.iridescence&&a.enable(8),P.alphaTest&&a.enable(9),P.vertexColors&&a.enable(10),P.vertexAlphas&&a.enable(11),P.vertexUv1s&&a.enable(12),P.vertexUv2s&&a.enable(13),P.vertexUv3s&&a.enable(14),P.vertexTangents&&a.enable(15),P.anisotropy&&a.enable(16),P.alphaHash&&a.enable(17),P.batching&&a.enable(18),P.dispersion&&a.enable(19),P.retroreflection&&a.enable(24),P.batchingColor&&a.enable(20),P.gradientMap&&a.enable(21),P.packedNormalMap&&a.enable(22),P.vertexNormals&&a.enable(23),y.push(a.mask),a.disableAll(),P.fog&&a.enable(0),P.useFog&&a.enable(1),P.flatShading&&a.enable(2),P.logarithmicDepthBuffer&&a.enable(3),P.reversedDepthBuffer&&a.enable(4),P.skinning&&a.enable(5),P.morphTargets&&a.enable(6),P.morphNormals&&a.enable(7),P.morphColors&&a.enable(8),P.premultipliedAlpha&&a.enable(9),P.shadowMapEnabled&&a.enable(10),P.doubleSided&&a.enable(11),P.flipSided&&a.enable(12),P.useDepthPacking&&a.enable(13),P.dithering&&a.enable(14),P.transmission&&a.enable(15),P.sheen&&a.enable(16),P.opaque&&a.enable(17),P.pointsUvs&&a.enable(18),P.decodeVideoTexture&&a.enable(19),P.decodeVideoTextureEmissive&&a.enable(20),P.alphaToCoverage&&a.enable(21),P.numLightProbeGrids>0&&a.enable(22),P.hasPositionAttribute&&a.enable(23),y.push(a.mask)}function S(y){const P=p[y.type];let L;if(P){const D=yi[P];L=bP.clone(D.uniforms)}else L=y.uniforms;return L}function _(y,P){let L=d.get(P);return L!==void 0?++L.usedTimes:(L=new rD(t,P,y,r),c.push(L),d.set(P,L)),L}function T(y){if(--y.usedTimes===0){const P=c.indexOf(y);c[P]=c[c.length-1],c.pop(),d.delete(y.cacheKey),y.destroy()}}function w(y){o.remove(y)}function R(){o.dispose()}return{getParameters:M,getProgramCacheKey:v,getUniforms:S,acquireProgram:_,releaseProgram:T,releaseShaderCache:w,programs:c,dispose:R}}function uD(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function i(a){t.delete(a)}function r(a,o,l){t.get(a)[o]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function dD(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function Mx(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Ex(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(u){let p=0;return u.isInstancedMesh&&(p+=2),u.isSkinnedMesh&&(p+=1),p}function o(u,p,x,M,v,h){let g=t[e];return g===void 0?(g={id:u.id,object:u,geometry:p,material:x,materialVariant:a(u),groupOrder:M,renderOrder:u.renderOrder,z:v,group:h},t[e]=g):(g.id=u.id,g.object=u,g.geometry=p,g.material=x,g.materialVariant=a(u),g.groupOrder=M,g.renderOrder=u.renderOrder,g.z=v,g.group=h),e++,g}function l(u,p,x,M,v,h,g){g.reversedDepth===!0&&(v=-v);const S=o(u,p,x,M,v,h);x.transmission>0?i.push(S):x.transparent===!0?r.push(S):n.push(S)}function c(u,p,x,M,v,h){const g=o(u,p,x,M,v,h);x.transmission>0?i.unshift(g):x.transparent===!0?r.unshift(g):n.unshift(g)}function d(u,p){n.length>1&&n.sort(u||dD),i.length>1&&i.sort(p||Mx),r.length>1&&r.sort(p||Mx)}function f(){for(let u=e,p=t.length;u<p;u++){const x=t[u];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:f,sort:d}}function fD(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new Ex,t.set(i,[a])):r>=s.length?(a=new Ex,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function hD(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={direction:new j,color:new Ze};break;case"SpotLight":n={position:new j,direction:new j,color:new Ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new j,color:new Ze,distance:0,decay:0};break;case"HemisphereLight":n={direction:new j,skyColor:new Ze,groundColor:new Ze};break;case"RectAreaLight":n={color:new Ze,position:new j,halfWidth:new j,halfHeight:new j};break}return t[e.id]=n,n}}}function pD(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let mD=0;function gD(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function vD(t){const e=new hD,n=pD(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new j);const r=new j,s=new At,a=new At;function o(c){let d=0,f=0,u=0;for(let B=0;B<9;B++)i.probe[B].set(0,0,0);let p=0,x=0,M=0,v=0,h=0,g=0,S=0,_=0,T=0,w=0,R=0,y=0,P=0,L=0;c.sort(gD);for(let B=0,Y=c.length;B<Y;B++){const k=c[B],X=k.color,ee=k.intensity,W=k.distance;let z=null;if(k.shadow&&k.shadow.map&&(k.shadow.map.texture.format===ds?z=k.shadow.map.texture:z=k.shadow.map.depthTexture||k.shadow.map.texture),k.isAmbientLight)d+=X.r*ee,f+=X.g*ee,u+=X.b*ee;else if(k.isLightProbe){for(let V=0;V<9;V++)i.probe[V].addScaledVector(k.sh.coefficients[V],ee);L++}else if(k.isSunLight){const V=e.get(k);if(V.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const b=k.shadow,C=n.get(k);C.shadowIntensity=b.intensity,C.shadowBias=b.bias,C.shadowNormalBias=b.normalBias,C.shadowRadius=b.radius,C.shadowMapSize.copy(b.mapSize).multiply(b.getFrameExtents()),i.sunShadow[x]=C,i.sunShadowMap[x]=z;const J=b.getViewportCount();for(let ne=0;ne<J;ne++)i.sunShadowMatrix[M+ne]=b.getMatrix(ne),i.sunShadowCascade[M+ne]=b._cascadeData[ne];M+=J,x++}i.sun[p]=V,p++}else if(k.isDirectionalLight){const V=e.get(k);if(V.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const b=k.shadow,C=n.get(k);C.shadowIntensity=b.intensity,C.shadowBias=b.bias,C.shadowNormalBias=b.normalBias,C.shadowRadius=b.radius,C.shadowMapSize=b.mapSize,i.directionalShadow[v]=C,i.directionalShadowMap[v]=z,i.directionalShadowMatrix[v]=k.shadow.matrix,T++}i.directional[v]=V,v++}else if(k.isSpotLight){const V=e.get(k);V.position.setFromMatrixPosition(k.matrixWorld),V.color.copy(X).multiplyScalar(ee),V.distance=W,V.coneCos=Math.cos(k.angle),V.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),V.decay=k.decay,i.spot[g]=V;const b=k.shadow;if(k.map&&(i.spotLightMap[y]=k.map,y++,b.updateMatrices(k),k.castShadow&&P++),i.spotLightMatrix[g]=b.matrix,k.castShadow){const C=n.get(k);C.shadowIntensity=b.intensity,C.shadowBias=b.bias,C.shadowNormalBias=b.normalBias,C.shadowRadius=b.radius,C.shadowMapSize=b.mapSize,i.spotShadow[g]=C,i.spotShadowMap[g]=z,R++}g++}else if(k.isRectAreaLight){const V=e.get(k);V.color.copy(X).multiplyScalar(ee),V.halfWidth.set(k.width*.5,0,0),V.halfHeight.set(0,k.height*.5,0),i.rectArea[S]=V,S++}else if(k.isPointLight){const V=e.get(k);if(V.color.copy(k.color).multiplyScalar(k.intensity),V.distance=k.distance,V.decay=k.decay,k.castShadow){const b=k.shadow,C=n.get(k);C.shadowIntensity=b.intensity,C.shadowBias=b.bias,C.shadowNormalBias=b.normalBias,C.shadowRadius=b.radius,C.shadowMapSize=b.mapSize,C.shadowCameraNear=b.camera.near,C.shadowCameraFar=b.camera.far,i.pointShadow[h]=C,i.pointShadowMap[h]=z,i.pointShadowMatrix[h]=k.shadow.matrix,w++}i.point[h]=V,h++}else if(k.isHemisphereLight){const V=e.get(k);V.skyColor.copy(k.color).multiplyScalar(ee),V.groundColor.copy(k.groundColor).multiplyScalar(ee),i.hemi[_]=V,_++}}S>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Me.LTC_FLOAT_1,i.rectAreaLTC2=Me.LTC_FLOAT_2):(i.rectAreaLTC1=Me.LTC_HALF_1,i.rectAreaLTC2=Me.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=f,i.ambient[2]=u;const D=i.hash;(D.sunLength!==p||D.directionalLength!==v||D.pointLength!==h||D.spotLength!==g||D.rectAreaLength!==S||D.hemiLength!==_||D.numSunShadows!==x||D.numDirectionalShadows!==T||D.numPointShadows!==w||D.numSpotShadows!==R||D.numSpotMaps!==y||D.numLightProbes!==L)&&(i.sun.length=p,i.directional.length=v,i.spot.length=g,i.rectArea.length=S,i.point.length=h,i.hemi.length=_,i.sunShadow.length=x,i.sunShadowMap.length=x,i.sunShadowMatrix.length=M,i.sunShadowCascade.length=M,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.directionalShadowMatrix.length=T,i.pointShadow.length=w,i.pointShadowMap.length=w,i.pointShadowMatrix.length=w,i.spotShadow.length=R,i.spotShadowMap.length=R,i.spotLightMatrix.length=R+y-P,i.spotLightMap.length=y,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=L,D.sunLength=p,D.directionalLength=v,D.pointLength=h,D.spotLength=g,D.rectAreaLength=S,D.hemiLength=_,D.numSunShadows=x,D.numDirectionalShadows=T,D.numPointShadows=w,D.numSpotShadows=R,D.numSpotMaps=y,D.numLightProbes=L,i.version=mD++)}function l(c,d){let f=0,u=0,p=0,x=0,M=0,v=0;const h=d.matrixWorldInverse;for(let g=0,S=c.length;g<S;g++){const _=c[g];if(_.isSunLight){const T=i.sun[f];T.direction.setFromMatrixPosition(_.matrixWorld),T.direction.transformDirection(h),f++}else if(_.isDirectionalLight){const T=i.directional[u];T.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(h),u++}else if(_.isSpotLight){const T=i.spot[x];T.position.setFromMatrixPosition(_.matrixWorld),T.position.applyMatrix4(h),T.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(h),x++}else if(_.isRectAreaLight){const T=i.rectArea[M];T.position.setFromMatrixPosition(_.matrixWorld),T.position.applyMatrix4(h),a.identity(),s.copy(_.matrixWorld),s.premultiply(h),a.extractRotation(s),T.halfWidth.set(_.width*.5,0,0),T.halfHeight.set(0,_.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),M++}else if(_.isPointLight){const T=i.point[p];T.position.setFromMatrixPosition(_.matrixWorld),T.position.applyMatrix4(h),p++}else if(_.isHemisphereLight){const T=i.hemi[v];T.direction.setFromMatrixPosition(_.matrixWorld),T.direction.transformDirection(h),v++}}}return{setup:o,setupView:l,state:i}}function Tx(t){const e=new vD(t),n=[],i=[],r=[];function s(u){f.camera=u,n.length=0,i.length=0,r.length=0}function a(u){n.push(u)}function o(u){i.push(u)}function l(u){r.push(u)}function c(){e.setup(n)}function d(u){e.setupView(n,u)}const f={lightsArray:n,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:f,setupLights:c,setupLightsView:d,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function xD(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Tx(t),e.set(r,[o])):s>=a.length?(o=new Tx(t),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:n,dispose:i}}const yD=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,_D=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,SD=[new j(1,0,0),new j(-1,0,0),new j(0,1,0),new j(0,-1,0),new j(0,0,1),new j(0,0,-1)],MD=[new j(0,-1,0),new j(0,-1,0),new j(0,0,1),new j(0,0,-1),new j(0,-1,0),new j(0,-1,0)],wx=new At,za=new j,$d=new j;function ED(t,e,n){let i=new Om;const r=new qe,s=new qe,a=new Tt,o=new NP,l=new LP,c={},d=n.maxTextureSize,f={[cs]:En,[En]:cs,[Bi]:Bi},u=new Ni({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new qe},radius:{value:4}},vertexShader:yD,fragmentShader:_D}),p=u.clone();p.defines.HORIZONTAL_PASS=1;const x=new Tn;x.setAttribute("position",new di(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new Nn(x,u),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=lc;let h=this.type;this.render=function(w,R,y){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||w.length===0)return;this.type===xR&&(ze("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=lc);const P=t.getRenderTarget(),L=t.getActiveCubeFace(),D=t.getActiveMipmapLevel(),B=t.state;B.setBlending(Xi),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const Y=h!==this.type;Y&&R.traverse(function(k){k.material&&(Array.isArray(k.material)?k.material.forEach(X=>X.needsUpdate=!0):k.material.needsUpdate=!0)});for(let k=0,X=w.length;k<X;k++){const ee=w[k],W=ee.shadow;if(W===void 0){ze("WebGLShadowMap:",ee,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;r.copy(W.mapSize);const z=W.getFrameExtents();r.multiply(z),s.copy(W.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/z.x),r.x=s.x*z.x,W.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/z.y),r.y=s.y*z.y,W.mapSize.y=s.y));const V=t.state.buffers.depth.getReversed();if(W.camera._reversedDepth=V,W.map===null||Y===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===qa){if(ee.isPointLight){ze("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new ui(r.x,r.y,{format:ds,type:Pi,minFilter:on,magFilter:on,generateMipmaps:!1}),W.map.texture.name=ee.name+".shadowMap",W.map.depthTexture=new ko(r.x,r.y,Mi),W.map.depthTexture.name=ee.name+".shadowMapDepth",W.map.depthTexture.format=Qi,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=qt,W.map.depthTexture.magFilter=qt}else ee.isPointLight?(W.map=new ZM(r.x),W.map.depthTexture=new wP(r.x,Ri)):(W.map=new ui(r.x,r.y),W.map.depthTexture=new ko(r.x,r.y,Ri)),W.map.depthTexture.name=ee.name+".shadowMap",W.map.depthTexture.format=Qi,this.type===lc?(W.map.depthTexture.compareFunction=V?Im:Dm,W.map.depthTexture.minFilter=on,W.map.depthTexture.magFilter=on):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=qt,W.map.depthTexture.magFilter=qt);W.camera.updateProjectionMatrix()}W.map.isWebGLCubeRenderTarget!==!0&&(W.map.width!==r.x||W.map.height!==r.y)&&W.map.setSize(r.x,r.y);const b=W.map.isWebGLCubeRenderTarget?6:W.getViewportCount();ee.isPointLight!==!0&&W.updateMatrices(ee,y);for(let C=0;C<b;C++){const J=W.getCamera(C);if(ee.isPointLight){const ne=W.camera,de=W.matrix,pe=ee.distance||ne.far;pe!==ne.far&&(ne.far=pe,ne.updateProjectionMatrix()),za.setFromMatrixPosition(ee.matrixWorld),ne.position.copy(za),$d.copy(ne.position),$d.add(SD[C]),ne.up.copy(MD[C]),ne.lookAt($d),ne.updateMatrixWorld(),de.makeTranslation(-za.x,-za.y,-za.z),wx.multiplyMatrices(ne.projectionMatrix,ne.matrixWorldInverse),W._frustum.setFromProjectionMatrix(wx,ne.coordinateSystem,ne.reversedDepth)}if(W.map.isWebGLCubeRenderTarget)t.setRenderTarget(W.map,C),t.clear();else{C===0&&(t.setRenderTarget(W.map),t.clear());const ne=W.getViewport(C);a.set(s.x*ne.x,s.y*ne.y,s.x*ne.z,s.y*ne.w),B.viewport(a)}i=W.getFrustum(C),_(R,y,J,ee,this.type)}W.isPointLightShadow!==!0&&this.type===qa&&g(W,y),W.needsUpdate=!1}h=this.type,v.needsUpdate=!1,t.setRenderTarget(P,L,D)};function g(w,R){const y=e.update(M);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null?w.mapPass=new ui(r.x,r.y,{format:ds,type:Pi}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),u.uniforms.shadow_pass.value=w.map.depthTexture,u.uniforms.resolution.value.set(w.map.width,w.map.height),u.uniforms.radius.value=w.radius,t.setRenderTarget(w.mapPass),t.clear(),t.renderBufferDirect(R,null,y,u,M,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value.set(w.map.width,w.map.height),p.uniforms.radius.value=w.radius,t.setRenderTarget(w.map),t.clear(),t.renderBufferDirect(R,null,y,p,M,null)}function S(w,R,y,P){let L=null;const D=y.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(D!==void 0)L=D;else if(L=y.isPointLight===!0?l:o,t.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const B=L.uuid,Y=R.uuid;let k=c[B];k===void 0&&(k={},c[B]=k);let X=k[Y];X===void 0&&(X=L.clone(),k[Y]=X,R.addEventListener("dispose",T)),L=X}if(L.visible=R.visible,L.wireframe=R.wireframe,P===qa?L.side=R.shadowSide!==null?R.shadowSide:R.side:L.side=R.shadowSide!==null?R.shadowSide:f[R.side],L.alphaMap=R.alphaMap,L.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,L.map=R.map,L.clipShadows=R.clipShadows,L.clippingPlanes=R.clippingPlanes,L.clipIntersection=R.clipIntersection,L.displacementMap=R.displacementMap,L.displacementScale=R.displacementScale,L.displacementBias=R.displacementBias,L.wireframeLinewidth=R.wireframeLinewidth,L.linewidth=R.linewidth,y.isPointLight===!0&&L.isMeshDistanceMaterial===!0){const B=t.properties.get(L);B.light=y}return L}function _(w,R,y,P,L){if(w.visible===!1)return;if(w.layers.test(R.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&L===qa)&&(!w.frustumCulled||w.intersectsFrustum(i))){w.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,w.matrixWorld);const Y=e.update(w),k=w.material;if(Array.isArray(k)){const X=Y.groups;for(let ee=0,W=X.length;ee<W;ee++){const z=X[ee],V=k[z.materialIndex];if(V&&V.visible){const b=S(w,V,P,L);w.onBeforeShadow(t,w,R,y,Y,b,z),t.renderBufferDirect(y,null,Y,b,w,z),w.onAfterShadow(t,w,R,y,Y,b,z)}}}else if(k.visible){const X=S(w,k,P,L);w.onBeforeShadow(t,w,R,y,Y,X,null),t.renderBufferDirect(y,null,Y,X,w,null),w.onAfterShadow(t,w,R,y,Y,X,null)}}const B=w.children;for(let Y=0,k=B.length;Y<k;Y++)_(B[Y],R,y,P,L)}function T(w){w.target.removeEventListener("dispose",T);for(const y in c){const P=c[y],L=w.target.uuid;L in P&&(P[L].dispose(),delete P[L])}}}function TD(t,e){function n(){let F=!1;const xe=new Tt;let ie=null;const ye=new Tt(0,0,0,0);return{setMask:function(we){ie!==we&&!F&&(t.colorMask(we,we,we,we),ie=we)},setLocked:function(we){F=we},setClear:function(we,ae,Fe,Le,ft){ft===!0&&(we*=Le,ae*=Le,Fe*=Le),xe.set(we,ae,Fe,Le),ye.equals(xe)===!1&&(t.clearColor(we,ae,Fe,Le),ye.copy(xe))},reset:function(){F=!1,ie=null,ye.set(-1,0,0,0)}}}function i(){let F=!1,xe=!1,ie=null,ye=null,we=null;return{setReversed:function(ae){if(xe!==ae){const Fe=e.get("EXT_clip_control");ae?Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.ZERO_TO_ONE_EXT):Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.NEGATIVE_ONE_TO_ONE_EXT),xe=ae;const Le=we;we=null,this.setClear(Le)}},getReversed:function(){return xe},setTest:function(ae){ae?H(t.DEPTH_TEST):le(t.DEPTH_TEST)},setMask:function(ae){ie!==ae&&!F&&(t.depthMask(ae),ie=ae)},setFunc:function(ae){if(xe&&(ae=QR[ae]),ye!==ae){switch(ae){case oh:t.depthFunc(t.NEVER);break;case lh:t.depthFunc(t.ALWAYS);break;case ch:t.depthFunc(t.LESS);break;case Io:t.depthFunc(t.LEQUAL);break;case uh:t.depthFunc(t.EQUAL);break;case dh:t.depthFunc(t.GEQUAL);break;case fh:t.depthFunc(t.GREATER);break;case hh:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ye=ae}},setLocked:function(ae){F=ae},setClear:function(ae){we!==ae&&(we=ae,xe&&(ae=1-ae),t.clearDepth(ae))},reset:function(){F=!1,ie=null,ye=null,we=null,xe=!1}}}function r(){let F=!1,xe=null,ie=null,ye=null,we=null,ae=null,Fe=null,Le=null,ft=null;return{setTest:function(st){F||(st?H(t.STENCIL_TEST):le(t.STENCIL_TEST))},setMask:function(st){xe!==st&&!F&&(t.stencilMask(st),xe=st)},setFunc:function(st,Kn,hi){(ie!==st||ye!==Kn||we!==hi)&&(t.stencilFunc(st,Kn,hi),ie=st,ye=Kn,we=hi)},setOp:function(st,Kn,hi){(ae!==st||Fe!==Kn||Le!==hi)&&(t.stencilOp(st,Kn,hi),ae=st,Fe=Kn,Le=hi)},setLocked:function(st){F=st},setClear:function(st){ft!==st&&(t.clearStencil(st),ft=st)},reset:function(){F=!1,xe=null,ie=null,ye=null,we=null,ae=null,Fe=null,Le=null,ft=null}}}const s=new n,a=new i,o=new r,l=new WeakMap,c=new WeakMap;let d={},f={},u={},p=new WeakMap,x=[],M=null,v=!1,h=null,g=null,S=null,_=null,T=null,w=null,R=null,y=new Ze(0,0,0),P=0,L=!1,D=null,B=null,Y=null,k=null,X=null;const ee=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,z=0;const V=t.getParameter(t.VERSION);V.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(V)[1]),W=z>=1):V.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),W=z>=2);let b=null,C={};const J=t.getParameter(t.SCISSOR_BOX),ne=t.getParameter(t.VIEWPORT),de=new Tt().fromArray(J),pe=new Tt().fromArray(ne);function me(F,xe,ie,ye){const we=new Uint8Array(4),ae=t.createTexture();t.bindTexture(F,ae),t.texParameteri(F,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(F,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Fe=0;Fe<ie;Fe++)F===t.TEXTURE_3D||F===t.TEXTURE_2D_ARRAY?t.texImage3D(xe,0,t.RGBA,1,1,ye,0,t.RGBA,t.UNSIGNED_BYTE,we):t.texImage2D(xe+Fe,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,we);return ae}const I={};I[t.TEXTURE_2D]=me(t.TEXTURE_2D,t.TEXTURE_2D,1),I[t.TEXTURE_CUBE_MAP]=me(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),I[t.TEXTURE_2D_ARRAY]=me(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),I[t.TEXTURE_3D]=me(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),H(t.DEPTH_TEST),a.setFunc(Io),Be(!1),et(Rv),H(t.CULL_FACE),Ve(Xi);function H(F){d[F]!==!0&&(t.enable(F),d[F]=!0)}function le(F){d[F]!==!1&&(t.disable(F),d[F]=!1)}function fe(F,xe){return u[F]!==xe?(t.bindFramebuffer(F,xe),u[F]=xe,F===t.DRAW_FRAMEBUFFER&&(u[t.FRAMEBUFFER]=xe),F===t.FRAMEBUFFER&&(u[t.DRAW_FRAMEBUFFER]=xe),!0):!1}function oe(F,xe){let ie=x,ye=!1;if(F){ie=p.get(xe),ie===void 0&&(ie=[],p.set(xe,ie));const we=F.textures;if(ie.length!==we.length||ie[0]!==t.COLOR_ATTACHMENT0){for(let ae=0,Fe=we.length;ae<Fe;ae++)ie[ae]=t.COLOR_ATTACHMENT0+ae;ie.length=we.length,ye=!0}}else ie[0]!==t.BACK&&(ie[0]=t.BACK,ye=!0);ye&&t.drawBuffers(ie)}function Ae(F){return M!==F?(t.useProgram(F),M=F,!0):!1}const Xe={[Ls]:t.FUNC_ADD,[_R]:t.FUNC_SUBTRACT,[SR]:t.FUNC_REVERSE_SUBTRACT};Xe[MR]=t.MIN,Xe[ER]=t.MAX;const _e={[TR]:t.ZERO,[wR]:t.ONE,[AR]:t.SRC_COLOR,[vM]:t.SRC_ALPHA,[LR]:t.SRC_ALPHA_SATURATE,[PR]:t.DST_COLOR,[CR]:t.DST_ALPHA,[bR]:t.ONE_MINUS_SRC_COLOR,[xM]:t.ONE_MINUS_SRC_ALPHA,[NR]:t.ONE_MINUS_DST_COLOR,[RR]:t.ONE_MINUS_DST_ALPHA,[DR]:t.CONSTANT_COLOR,[IR]:t.ONE_MINUS_CONSTANT_COLOR,[UR]:t.CONSTANT_ALPHA,[FR]:t.ONE_MINUS_CONSTANT_ALPHA};function Ve(F,xe,ie,ye,we,ae,Fe,Le,ft,st){if(F===Xi){v===!0&&(le(t.BLEND),v=!1);return}if(v===!1&&(H(t.BLEND),v=!0),F!==yR){if(F!==h||st!==L){if((g!==Ls||T!==Ls)&&(t.blendEquation(t.FUNC_ADD),g=Ls,T=Ls),st)switch(F){case uo:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case ah:t.blendFunc(t.ONE,t.ONE);break;case Pv:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Nv:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:it("WebGLState: Invalid blending: ",F);break}else switch(F){case uo:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case ah:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case Pv:it("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Nv:it("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:it("WebGLState: Invalid blending: ",F);break}S=null,_=null,w=null,R=null,y.set(0,0,0),P=0,h=F,L=st}return}we=we||xe,ae=ae||ie,Fe=Fe||ye,(xe!==g||we!==T)&&(t.blendEquationSeparate(Xe[xe],Xe[we]),g=xe,T=we),(ie!==S||ye!==_||ae!==w||Fe!==R)&&(t.blendFuncSeparate(_e[ie],_e[ye],_e[ae],_e[Fe]),S=ie,_=ye,w=ae,R=Fe),(Le.equals(y)===!1||ft!==P)&&(t.blendColor(Le.r,Le.g,Le.b,ft),y.copy(Le),P=ft),h=F,L=!1}function Ye(F,xe){F.side===Bi?le(t.CULL_FACE):H(t.CULL_FACE);let ie=F.side===En;xe&&(ie=!ie),Be(ie),F.blending===uo&&F.transparent===!1?Ve(Xi):Ve(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),a.setFunc(F.depthFunc),a.setTest(F.depthTest),a.setMask(F.depthWrite),s.setMask(F.colorWrite);const ye=F.stencilWrite;o.setTest(ye),ye&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),mt(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?H(t.SAMPLE_ALPHA_TO_COVERAGE):le(t.SAMPLE_ALPHA_TO_COVERAGE)}function Be(F){D!==F&&(F?t.frontFace(t.CW):t.frontFace(t.CCW),D=F)}function et(F){F!==gR?(H(t.CULL_FACE),F!==B&&(F===Rv?t.cullFace(t.BACK):F===vR?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):le(t.CULL_FACE),B=F}function dt(F){F!==Y&&(W&&t.lineWidth(F),Y=F)}function mt(F,xe,ie){F?(H(t.POLYGON_OFFSET_FILL),(k!==xe||X!==ie)&&(k=xe,X=ie,a.getReversed()&&(xe=-xe),t.polygonOffset(xe,ie))):le(t.POLYGON_OFFSET_FILL)}function gt(F){F?H(t.SCISSOR_TEST):le(t.SCISSOR_TEST)}function Ct(F){F===void 0&&(F=t.TEXTURE0+ee-1),b!==F&&(t.activeTexture(F),b=F)}function O(F,xe,ie){ie===void 0&&(b===null?ie=t.TEXTURE0+ee-1:ie=b);let ye=C[ie];ye===void 0&&(ye={type:void 0,texture:void 0},C[ie]=ye),(ye.type!==F||ye.texture!==xe)&&(b!==ie&&(t.activeTexture(ie),b=ie),t.bindTexture(F,xe||I[F]),ye.type=F,ye.texture=xe)}function kt(){const F=C[b];F!==void 0&&F.type!==void 0&&(t.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function rt(){try{t.compressedTexImage2D(...arguments)}catch(F){it("WebGLState:",F)}}function N(){try{t.compressedTexImage3D(...arguments)}catch(F){it("WebGLState:",F)}}function E(){try{t.texSubImage2D(...arguments)}catch(F){it("WebGLState:",F)}}function G(){try{t.texSubImage3D(...arguments)}catch(F){it("WebGLState:",F)}}function K(){try{t.compressedTexSubImage2D(...arguments)}catch(F){it("WebGLState:",F)}}function Q(){try{t.compressedTexSubImage3D(...arguments)}catch(F){it("WebGLState:",F)}}function ue(){try{t.texStorage2D(...arguments)}catch(F){it("WebGLState:",F)}}function he(){try{t.texStorage3D(...arguments)}catch(F){it("WebGLState:",F)}}function te(){try{t.texImage2D(...arguments)}catch(F){it("WebGLState:",F)}}function re(){try{t.texImage3D(...arguments)}catch(F){it("WebGLState:",F)}}function ge(F){return f[F]!==void 0?f[F]:t.getParameter(F)}function Ie(F,xe){f[F]!==xe&&(t.pixelStorei(F,xe),f[F]=xe)}function Se(F){de.equals(F)===!1&&(t.scissor(F.x,F.y,F.z,F.w),de.copy(F))}function ve(F){pe.equals(F)===!1&&(t.viewport(F.x,F.y,F.z,F.w),pe.copy(F))}function Ue(F,xe){let ie=c.get(xe);ie===void 0&&(ie=new WeakMap,c.set(xe,ie));let ye=ie.get(F);ye===void 0&&(ye=t.getUniformBlockIndex(xe,F.name),ie.set(F,ye))}function Oe(F,xe){const ye=c.get(xe).get(F);l.get(xe)!==ye&&(t.uniformBlockBinding(xe,ye,F.__bindingPointIndex),l.set(xe,ye))}function Ge(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),d={},f={},b=null,C={},u={},p=new WeakMap,x=[],M=null,v=!1,h=null,g=null,S=null,_=null,T=null,w=null,R=null,y=new Ze(0,0,0),P=0,L=!1,D=null,B=null,Y=null,k=null,X=null,de.set(0,0,t.canvas.width,t.canvas.height),pe.set(0,0,t.canvas.width,t.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:H,disable:le,bindFramebuffer:fe,drawBuffers:oe,useProgram:Ae,setBlending:Ve,setMaterial:Ye,setFlipSided:Be,setCullFace:et,setLineWidth:dt,setPolygonOffset:mt,setScissorTest:gt,activeTexture:Ct,bindTexture:O,unbindTexture:kt,compressedTexImage2D:rt,compressedTexImage3D:N,texImage2D:te,texImage3D:re,pixelStorei:Ie,getParameter:ge,updateUBOMapping:Ue,uniformBlockBinding:Oe,texStorage2D:ue,texStorage3D:he,texSubImage2D:E,texSubImage3D:G,compressedTexSubImage2D:K,compressedTexSubImage3D:Q,scissor:Se,viewport:ve,reset:Ge}}function wD(t,e,n,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new qe,d=new WeakMap,f=new Set;let u;const p=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(N,E){return x?new OffscreenCanvas(N,E):qc("canvas")}function v(N,E,G){let K=1;const Q=rt(N);if((Q.width>G||Q.height>G)&&(K=G/Math.max(Q.width,Q.height)),K<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const ue=Math.floor(K*Q.width),he=Math.floor(K*Q.height);u===void 0&&(u=M(ue,he));const te=E?M(ue,he):u;return te.width=ue,te.height=he,te.getContext("2d").drawImage(N,0,0,ue,he),ze("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+ue+"x"+he+")."),te}else return"data"in N&&ze("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),N;return N}function h(N){return N.generateMipmaps}function g(N){t.generateMipmap(N)}function S(N){return N.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?t.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function _(N,E,G,K,Q,ue=!1){if(N!==null){if(t[N]!==void 0)return t[N];ze("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let he;K&&(he=e.get("EXT_texture_norm16"),he||ze("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let te=E;if(E===t.RED&&(G===t.FLOAT&&(te=t.R32F),G===t.HALF_FLOAT&&(te=t.R16F),G===t.UNSIGNED_BYTE&&(te=t.R8),G===t.UNSIGNED_SHORT&&he&&(te=he.R16_EXT),G===t.SHORT&&he&&(te=he.R16_SNORM_EXT)),E===t.RED_INTEGER&&(G===t.UNSIGNED_BYTE&&(te=t.R8UI),G===t.UNSIGNED_SHORT&&(te=t.R16UI),G===t.UNSIGNED_INT&&(te=t.R32UI),G===t.BYTE&&(te=t.R8I),G===t.SHORT&&(te=t.R16I),G===t.INT&&(te=t.R32I)),E===t.RG&&(G===t.FLOAT&&(te=t.RG32F),G===t.HALF_FLOAT&&(te=t.RG16F),G===t.UNSIGNED_BYTE&&(te=t.RG8),G===t.UNSIGNED_SHORT&&he&&(te=he.RG16_EXT),G===t.SHORT&&he&&(te=he.RG16_SNORM_EXT)),E===t.RG_INTEGER&&(G===t.UNSIGNED_BYTE&&(te=t.RG8UI),G===t.UNSIGNED_SHORT&&(te=t.RG16UI),G===t.UNSIGNED_INT&&(te=t.RG32UI),G===t.BYTE&&(te=t.RG8I),G===t.SHORT&&(te=t.RG16I),G===t.INT&&(te=t.RG32I)),E===t.RGB_INTEGER&&(G===t.UNSIGNED_BYTE&&(te=t.RGB8UI),G===t.UNSIGNED_SHORT&&(te=t.RGB16UI),G===t.UNSIGNED_INT&&(te=t.RGB32UI),G===t.BYTE&&(te=t.RGB8I),G===t.SHORT&&(te=t.RGB16I),G===t.INT&&(te=t.RGB32I)),E===t.RGBA_INTEGER&&(G===t.UNSIGNED_BYTE&&(te=t.RGBA8UI),G===t.UNSIGNED_SHORT&&(te=t.RGBA16UI),G===t.UNSIGNED_INT&&(te=t.RGBA32UI),G===t.BYTE&&(te=t.RGBA8I),G===t.SHORT&&(te=t.RGBA16I),G===t.INT&&(te=t.RGBA32I)),E===t.RGB&&(G===t.UNSIGNED_SHORT&&he&&(te=he.RGB16_EXT),G===t.SHORT&&he&&(te=he.RGB16_SNORM_EXT),G===t.UNSIGNED_INT_5_9_9_9_REV&&(te=t.RGB9_E5),G===t.UNSIGNED_INT_10F_11F_11F_REV&&(te=t.R11F_G11F_B10F)),E===t.RGBA){const re=ue?$c:Je.getTransfer(Q);G===t.FLOAT&&(te=t.RGBA32F),G===t.HALF_FLOAT&&(te=t.RGBA16F),G===t.UNSIGNED_BYTE&&(te=re===ot?t.SRGB8_ALPHA8:t.RGBA8),G===t.UNSIGNED_SHORT&&he&&(te=he.RGBA16_EXT),G===t.SHORT&&he&&(te=he.RGBA16_SNORM_EXT),G===t.UNSIGNED_SHORT_4_4_4_4&&(te=t.RGBA4),G===t.UNSIGNED_SHORT_5_5_5_1&&(te=t.RGB5_A1)}return(te===t.R16F||te===t.R32F||te===t.RG16F||te===t.RG32F||te===t.RGBA16F||te===t.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function T(N,E){let G;return N?E===null||E===Ri||E===Fo?G=t.DEPTH24_STENCIL8:E===Mi?G=t.DEPTH32F_STENCIL8:E===Uo&&(G=t.DEPTH24_STENCIL8,ze("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Ri||E===Fo?G=t.DEPTH_COMPONENT24:E===Mi?G=t.DEPTH_COMPONENT32F:E===Uo&&(G=t.DEPTH_COMPONENT16),G}function w(N,E){return h(N)===!0||N.isFramebufferTexture&&N.minFilter!==qt&&N.minFilter!==on?Math.log2(Math.max(E.width,E.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?E.mipmaps.length:1}function R(N){const E=N.target;E.removeEventListener("dispose",R),P(E),E.isVideoTexture&&d.delete(E),E.isHTMLTexture&&f.delete(E)}function y(N){const E=N.target;E.removeEventListener("dispose",y),D(E)}function P(N){const E=i.get(N);if(E.__webglInit===void 0)return;const G=N.source,K=p.get(G);if(K){const Q=K[E.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&L(N),Object.keys(K).length===0&&p.delete(G)}i.remove(N)}function L(N){const E=i.get(N);t.deleteTexture(E.__webglTexture);const G=N.source,K=p.get(G);delete K[E.__cacheKey],a.memory.textures--}function D(N){const E=i.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),i.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(E.__webglFramebuffer[K]))for(let Q=0;Q<E.__webglFramebuffer[K].length;Q++)t.deleteFramebuffer(E.__webglFramebuffer[K][Q]);else t.deleteFramebuffer(E.__webglFramebuffer[K]);E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer[K])}else{if(Array.isArray(E.__webglFramebuffer))for(let K=0;K<E.__webglFramebuffer.length;K++)t.deleteFramebuffer(E.__webglFramebuffer[K]);else t.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&t.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let K=0;K<E.__webglColorRenderbuffer.length;K++)E.__webglColorRenderbuffer[K]&&t.deleteRenderbuffer(E.__webglColorRenderbuffer[K]);E.__webglDepthRenderbuffer&&t.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const G=N.textures;for(let K=0,Q=G.length;K<Q;K++){const ue=i.get(G[K]);ue.__webglTexture&&(t.deleteTexture(ue.__webglTexture),a.memory.textures--),i.remove(G[K])}i.remove(N)}let B=0;function Y(){B=0}function k(){return B}function X(N){B=N}function ee(){const N=B;return N>=r.maxTextures&&ze("WebGLTextures: Trying to use "+(N+1)+" texture units while this GPU supports only "+r.maxTextures),B+=1,N}function W(N){const E=[];return E.push(N.wrapS),E.push(N.wrapT),E.push(N.wrapR||0),E.push(N.magFilter),E.push(N.minFilter),E.push(N.anisotropy),E.push(N.internalFormat),E.push(N.format),E.push(N.type),E.push(N.generateMipmaps),E.push(N.premultiplyAlpha),E.push(N.flipY),E.push(N.unpackAlignment),E.push(N.colorSpace),E.join()}function z(N,E){const G=i.get(N);if(N.isVideoTexture&&O(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&G.__version!==N.version){const K=N.image;if(K===null)ze("WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)ze("WebGLRenderer: Texture marked for update but image is incomplete");else{le(G,N,E);return}}else N.isExternalTexture&&(G.__webglTexture=N.sourceTexture?N.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,G.__webglTexture,t.TEXTURE0+E)}function V(N,E){const G=i.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&G.__version!==N.version){le(G,N,E);return}else N.isExternalTexture&&(G.__webglTexture=N.sourceTexture?N.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,G.__webglTexture,t.TEXTURE0+E)}function b(N,E){const G=i.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&G.__version!==N.version){le(G,N,E);return}n.bindTexture(t.TEXTURE_3D,G.__webglTexture,t.TEXTURE0+E)}function C(N,E){const G=i.get(N);if(N.isCubeDepthTexture!==!0&&N.version>0&&G.__version!==N.version){fe(G,N,E);return}n.bindTexture(t.TEXTURE_CUBE_MAP,G.__webglTexture,t.TEXTURE0+E)}const J={[ph]:t.REPEAT,[Hi]:t.CLAMP_TO_EDGE,[mh]:t.MIRRORED_REPEAT},ne={[qt]:t.NEAREST,[BR]:t.NEAREST_MIPMAP_NEAREST,[Sl]:t.NEAREST_MIPMAP_LINEAR,[on]:t.LINEAR,[gd]:t.LINEAR_MIPMAP_NEAREST,[Jr]:t.LINEAR_MIPMAP_LINEAR},de={[GR]:t.NEVER,[$R]:t.ALWAYS,[WR]:t.LESS,[Dm]:t.LEQUAL,[jR]:t.EQUAL,[Im]:t.GEQUAL,[XR]:t.GREATER,[YR]:t.NOTEQUAL};function pe(N,E){if(E.type===Mi&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===on||E.magFilter===gd||E.magFilter===Sl||E.magFilter===Jr||E.minFilter===on||E.minFilter===gd||E.minFilter===Sl||E.minFilter===Jr)&&ze("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(N,t.TEXTURE_WRAP_S,J[E.wrapS]),t.texParameteri(N,t.TEXTURE_WRAP_T,J[E.wrapT]),(N===t.TEXTURE_3D||N===t.TEXTURE_2D_ARRAY)&&t.texParameteri(N,t.TEXTURE_WRAP_R,J[E.wrapR]),t.texParameteri(N,t.TEXTURE_MAG_FILTER,ne[E.magFilter]),t.texParameteri(N,t.TEXTURE_MIN_FILTER,ne[E.minFilter]),E.compareFunction&&(t.texParameteri(N,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(N,t.TEXTURE_COMPARE_FUNC,de[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===qt||E.minFilter!==Sl&&E.minFilter!==Jr||E.type===Mi&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");t.texParameterf(N,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function me(N,E){let G=!1;N.__webglInit===void 0&&(N.__webglInit=!0,E.addEventListener("dispose",R));const K=E.source;let Q=p.get(K);Q===void 0&&(Q={},p.set(K,Q));const ue=W(E);if(ue!==N.__cacheKey){Q[ue]===void 0&&(Q[ue]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,G=!0),Q[ue].usedTimes++;const he=Q[N.__cacheKey];he!==void 0&&(Q[N.__cacheKey].usedTimes--,he.usedTimes===0&&L(E)),N.__cacheKey=ue,N.__webglTexture=Q[ue].texture}return G}function I(N,E,G){return Math.floor(Math.floor(N/G)/E)}function H(N,E,G,K){const ue=N.updateRanges;if(ue.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,E.width,E.height,G,K,E.data);else{ue.sort((Ie,Se)=>Ie.start-Se.start);let he=0;for(let Ie=1;Ie<ue.length;Ie++){const Se=ue[he],ve=ue[Ie],Ue=Se.start+Se.count,Oe=I(ve.start,E.width,4),Ge=I(Se.start,E.width,4);ve.start<=Ue+1&&Oe===Ge&&I(ve.start+ve.count-1,E.width,4)===Oe?Se.count=Math.max(Se.count,ve.start+ve.count-Se.start):(++he,ue[he]=ve)}ue.length=he+1;const te=n.getParameter(t.UNPACK_ROW_LENGTH),re=n.getParameter(t.UNPACK_SKIP_PIXELS),ge=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,E.width);for(let Ie=0,Se=ue.length;Ie<Se;Ie++){const ve=ue[Ie],Ue=Math.floor(ve.start/4),Oe=Math.ceil(ve.count/4),Ge=Ue%E.width,F=Math.floor(Ue/E.width),xe=Oe,ie=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,Ge),n.pixelStorei(t.UNPACK_SKIP_ROWS,F),n.texSubImage2D(t.TEXTURE_2D,0,Ge,F,xe,ie,G,K,E.data)}N.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,te),n.pixelStorei(t.UNPACK_SKIP_PIXELS,re),n.pixelStorei(t.UNPACK_SKIP_ROWS,ge)}}function le(N,E,G){let K=t.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(K=t.TEXTURE_2D_ARRAY),E.isData3DTexture&&(K=t.TEXTURE_3D);const Q=me(N,E),ue=E.source;n.bindTexture(K,N.__webglTexture,t.TEXTURE0+G);const he=i.get(ue);if(ue.version!==he.__version||Q===!0){if(n.activeTexture(t.TEXTURE0+G),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){const ie=Je.getPrimaries(Je.workingColorSpace),ye=E.colorSpace===gr?null:Je.getPrimaries(E.colorSpace),we=E.colorSpace===gr||ie===ye?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,we)}n.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment);let re=v(E.image,!1,r.maxTextureSize);re=kt(E,re);const ge=s.convert(E.format,E.colorSpace),Ie=s.convert(E.type);let Se=_(E.internalFormat,ge,Ie,E.normalized,E.colorSpace,E.isVideoTexture);pe(K,E);let ve;const Ue=E.mipmaps,Oe=E.isVideoTexture!==!0,Ge=he.__version===void 0||Q===!0,F=ue.dataReady,xe=w(E,re);if(E.isDepthTexture)Se=T(E.format===Qr,E.type),Ge&&(Oe?n.texStorage2D(t.TEXTURE_2D,1,Se,re.width,re.height):n.texImage2D(t.TEXTURE_2D,0,Se,re.width,re.height,0,ge,Ie,null));else if(E.isDataTexture)if(Ue.length>0){Oe&&Ge&&n.texStorage2D(t.TEXTURE_2D,xe,Se,Ue[0].width,Ue[0].height);for(let ie=0,ye=Ue.length;ie<ye;ie++)ve=Ue[ie],Oe?F&&n.texSubImage2D(t.TEXTURE_2D,ie,0,0,ve.width,ve.height,ge,Ie,ve.data):n.texImage2D(t.TEXTURE_2D,ie,Se,ve.width,ve.height,0,ge,Ie,ve.data);E.generateMipmaps=!1}else Oe?(Ge&&n.texStorage2D(t.TEXTURE_2D,xe,Se,re.width,re.height),F&&H(E,re,ge,Ie)):n.texImage2D(t.TEXTURE_2D,0,Se,re.width,re.height,0,ge,Ie,re.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Oe&&Ge&&n.texStorage3D(t.TEXTURE_2D_ARRAY,xe,Se,Ue[0].width,Ue[0].height,re.depth);for(let ie=0,ye=Ue.length;ie<ye;ie++)if(ve=Ue[ie],E.format!==oi)if(ge!==null)if(Oe){if(F)if(E.layerUpdates.size>0){const we=ix(ve.width,ve.height,E.format,E.type);for(const ae of E.layerUpdates){const Fe=ve.data.subarray(ae*we/ve.data.BYTES_PER_ELEMENT,(ae+1)*we/ve.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ie,0,0,ae,ve.width,ve.height,1,ge,Fe)}}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ie,0,0,0,ve.width,ve.height,re.depth,ge,ve.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ie,Se,ve.width,ve.height,re.depth,0,ve.data,0,0);else ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Oe?F&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,ie,0,0,0,ve.width,ve.height,re.depth,ge,Ie,ve.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ie,Se,ve.width,ve.height,re.depth,0,ge,Ie,ve.data);E.layerUpdates.size>0&&E.clearLayerUpdates()}else{Oe&&Ge&&n.texStorage2D(t.TEXTURE_2D,xe,Se,Ue[0].width,Ue[0].height);for(let ie=0,ye=Ue.length;ie<ye;ie++)ve=Ue[ie],E.format!==oi?ge!==null?Oe?F&&n.compressedTexSubImage2D(t.TEXTURE_2D,ie,0,0,ve.width,ve.height,ge,ve.data):n.compressedTexImage2D(t.TEXTURE_2D,ie,Se,ve.width,ve.height,0,ve.data):ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Oe?F&&n.texSubImage2D(t.TEXTURE_2D,ie,0,0,ve.width,ve.height,ge,Ie,ve.data):n.texImage2D(t.TEXTURE_2D,ie,Se,ve.width,ve.height,0,ge,Ie,ve.data)}else if(E.isDataArrayTexture)if(Oe){if(Ge&&n.texStorage3D(t.TEXTURE_2D_ARRAY,xe,Se,re.width,re.height,re.depth),F)if(E.layerUpdates.size>0){const ie=ix(re.width,re.height,E.format,E.type);for(const ye of E.layerUpdates){const we=re.data.subarray(ye*ie/re.data.BYTES_PER_ELEMENT,(ye+1)*ie/re.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,ye,re.width,re.height,1,ge,Ie,we)}E.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,ge,Ie,re.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Se,re.width,re.height,re.depth,0,ge,Ie,re.data);else if(E.isData3DTexture)Oe?(Ge&&n.texStorage3D(t.TEXTURE_3D,xe,Se,re.width,re.height,re.depth),F&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,ge,Ie,re.data)):n.texImage3D(t.TEXTURE_3D,0,Se,re.width,re.height,re.depth,0,ge,Ie,re.data);else if(E.isFramebufferTexture){if(Ge)if(Oe)n.texStorage2D(t.TEXTURE_2D,xe,Se,re.width,re.height);else{let ie=re.width,ye=re.height;for(let we=0;we<xe;we++)n.texImage2D(t.TEXTURE_2D,we,Se,ie,ye,0,ge,Ie,null),ie>>=1,ye>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in t){const ie=t.canvas;if(ie.hasAttribute("layoutsubtree")||ie.setAttribute("layoutsubtree","true"),re.parentNode!==ie){ie.appendChild(re),f.add(E),ie.onpaint=ye=>{const we=ye.changedElements;for(const ae of f)we.includes(ae.image)&&(ae.needsUpdate=!0)},ie.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,re);else{const we=t.RGBA,ae=t.RGBA,Fe=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,0,we,ae,Fe,re)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(Ue.length>0){if(Oe&&Ge){const ie=rt(Ue[0]);n.texStorage2D(t.TEXTURE_2D,xe,Se,ie.width,ie.height)}for(let ie=0,ye=Ue.length;ie<ye;ie++)ve=Ue[ie],Oe?F&&n.texSubImage2D(t.TEXTURE_2D,ie,0,0,ge,Ie,ve):n.texImage2D(t.TEXTURE_2D,ie,Se,ge,Ie,ve);E.generateMipmaps=!1}else if(Oe){if(Ge){const ie=rt(re);n.texStorage2D(t.TEXTURE_2D,xe,Se,ie.width,ie.height)}F&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ge,Ie,re)}else n.texImage2D(t.TEXTURE_2D,0,Se,ge,Ie,re);h(E)&&g(K),he.__version=ue.version,E.onUpdate&&E.onUpdate(E)}N.__version=E.version}function fe(N,E,G){if(E.image.length!==6)return;const K=me(N,E),Q=E.source;n.bindTexture(t.TEXTURE_CUBE_MAP,N.__webglTexture,t.TEXTURE0+G);const ue=i.get(Q);if(Q.version!==ue.__version||K===!0){n.activeTexture(t.TEXTURE0+G);const he=Je.getPrimaries(Je.workingColorSpace),te=E.colorSpace===gr?null:Je.getPrimaries(E.colorSpace),re=E.colorSpace===gr||he===te?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,re);const ge=E.isCompressedTexture||E.image[0].isCompressedTexture,Ie=E.image[0]&&E.image[0].isDataTexture,Se=[];for(let ae=0;ae<6;ae++)!ge&&!Ie?Se[ae]=v(E.image[ae],!0,r.maxCubemapSize):Se[ae]=Ie?E.image[ae].image:E.image[ae],Se[ae]=kt(E,Se[ae]);const ve=Se[0],Ue=s.convert(E.format,E.colorSpace),Oe=s.convert(E.type),Ge=_(E.internalFormat,Ue,Oe,E.normalized,E.colorSpace),F=E.isVideoTexture!==!0,xe=ue.__version===void 0||K===!0,ie=Q.dataReady;let ye=w(E,ve);pe(t.TEXTURE_CUBE_MAP,E);let we;if(ge){F&&xe&&n.texStorage2D(t.TEXTURE_CUBE_MAP,ye,Ge,ve.width,ve.height);for(let ae=0;ae<6;ae++){we=Se[ae].mipmaps;for(let Fe=0;Fe<we.length;Fe++){const Le=we[Fe];E.format!==oi?Ue!==null?F?ie&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Fe,0,0,Le.width,Le.height,Ue,Le.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Fe,Ge,Le.width,Le.height,0,Le.data):ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?ie&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Fe,0,0,Le.width,Le.height,Ue,Oe,Le.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Fe,Ge,Le.width,Le.height,0,Ue,Oe,Le.data)}}}else{if(we=E.mipmaps,F&&xe){we.length>0&&ye++;const ae=rt(Se[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,ye,Ge,ae.width,ae.height)}for(let ae=0;ae<6;ae++)if(Ie){F?ie&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,Se[ae].width,Se[ae].height,Ue,Oe,Se[ae].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,Ge,Se[ae].width,Se[ae].height,0,Ue,Oe,Se[ae].data);for(let Fe=0;Fe<we.length;Fe++){const ft=we[Fe].image[ae].image;F?ie&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Fe+1,0,0,ft.width,ft.height,Ue,Oe,ft.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Fe+1,Ge,ft.width,ft.height,0,Ue,Oe,ft.data)}}else{F?ie&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,Ue,Oe,Se[ae]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,Ge,Ue,Oe,Se[ae]);for(let Fe=0;Fe<we.length;Fe++){const Le=we[Fe];F?ie&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Fe+1,0,0,Ue,Oe,Le.image[ae]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Fe+1,Ge,Ue,Oe,Le.image[ae])}}}h(E)&&g(t.TEXTURE_CUBE_MAP),ue.__version=Q.version,E.onUpdate&&E.onUpdate(E)}N.__version=E.version}function oe(N,E,G,K,Q,ue){const he=s.convert(G.format,G.colorSpace),te=s.convert(G.type),re=_(G.internalFormat,he,te,G.normalized,G.colorSpace),ge=i.get(E),Ie=i.get(G);if(Ie.__renderTarget=E,!ge.__hasExternalTextures){const Se=Math.max(1,E.width>>ue),ve=Math.max(1,E.height>>ue);Q===t.TEXTURE_3D||Q===t.TEXTURE_2D_ARRAY?n.texImage3D(Q,ue,re,Se,ve,E.depth,0,he,te,null):n.texImage2D(Q,ue,re,Se,ve,0,he,te,null)}n.bindFramebuffer(t.FRAMEBUFFER,N),Ct(E)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,K,Q,Ie.__webglTexture,0,gt(E)):(Q===t.TEXTURE_2D||Q>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,K,Q,Ie.__webglTexture,ue),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ae(N,E,G){if(t.bindRenderbuffer(t.RENDERBUFFER,N),E.depthBuffer){const K=E.depthTexture,Q=K&&K.isDepthTexture?K.type:null,ue=T(E.stencilBuffer,Q),he=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;Ct(E)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,gt(E),ue,E.width,E.height):G?t.renderbufferStorageMultisample(t.RENDERBUFFER,gt(E),ue,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,ue,E.width,E.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,he,t.RENDERBUFFER,N)}else{const K=E.textures;for(let Q=0;Q<K.length;Q++){const ue=K[Q],he=s.convert(ue.format,ue.colorSpace),te=s.convert(ue.type),re=_(ue.internalFormat,he,te,ue.normalized,ue.colorSpace);Ct(E)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,gt(E),re,E.width,E.height):G?t.renderbufferStorageMultisample(t.RENDERBUFFER,gt(E),re,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,re,E.width,E.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Xe(N,E,G){const K=E.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,N),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const Q=i.get(E.depthTexture);if(Q.__renderTarget=E,(!Q.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),K){if(Q.__webglInit===void 0&&(Q.__webglInit=!0,E.depthTexture.addEventListener("dispose",R)),Q.__webglTexture===void 0){Q.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,Q.__webglTexture),pe(t.TEXTURE_CUBE_MAP,E.depthTexture);const ge=s.convert(E.depthTexture.format),Ie=s.convert(E.depthTexture.type);let Se;E.depthTexture.format===Qi?Se=t.DEPTH_COMPONENT24:E.depthTexture.format===Qr&&(Se=t.DEPTH24_STENCIL8);for(let ve=0;ve<6;ve++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,Se,E.width,E.height,0,ge,Ie,null)}}else z(E.depthTexture,0);const ue=Q.__webglTexture,he=gt(E),te=K?t.TEXTURE_CUBE_MAP_POSITIVE_X+G:t.TEXTURE_2D,re=E.depthTexture.format===Qr?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(E.depthTexture.format===Qi)Ct(E)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,re,te,ue,0,he):t.framebufferTexture2D(t.FRAMEBUFFER,re,te,ue,0);else if(E.depthTexture.format===Qr)Ct(E)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,re,te,ue,0,he):t.framebufferTexture2D(t.FRAMEBUFFER,re,te,ue,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function _e(N){const E=i.get(N),G=N.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==N.depthTexture){const K=N.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),K){const Q=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,K.removeEventListener("dispose",Q)};K.addEventListener("dispose",Q),E.__depthDisposeCallback=Q}E.__boundDepthTexture=K}if(N.depthTexture&&!E.__autoAllocateDepthBuffer)if(G)for(let K=0;K<6;K++)Xe(E.__webglFramebuffer[K],N,K);else{const K=N.texture.mipmaps;K&&K.length>0?Xe(E.__webglFramebuffer[0],N,0):Xe(E.__webglFramebuffer,N,0)}else if(G){E.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer[K]),E.__webglDepthbuffer[K]===void 0)E.__webglDepthbuffer[K]=t.createRenderbuffer(),Ae(E.__webglDepthbuffer[K],N,!1);else{const Q=N.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ue=E.__webglDepthbuffer[K];t.bindRenderbuffer(t.RENDERBUFFER,ue),t.framebufferRenderbuffer(t.FRAMEBUFFER,Q,t.RENDERBUFFER,ue)}}else{const K=N.texture.mipmaps;if(K&&K.length>0?n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=t.createRenderbuffer(),Ae(E.__webglDepthbuffer,N,!1);else{const Q=N.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ue=E.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,ue),t.framebufferRenderbuffer(t.FRAMEBUFFER,Q,t.RENDERBUFFER,ue)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ve(N,E,G){const K=i.get(N);E!==void 0&&oe(K.__webglFramebuffer,N,N.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),G!==void 0&&_e(N)}function Ye(N){const E=N.texture,G=i.get(N),K=i.get(E);N.addEventListener("dispose",y);const Q=N.textures,ue=N.isWebGLCubeRenderTarget===!0,he=Q.length>1;if(he||(K.__webglTexture===void 0&&(K.__webglTexture=t.createTexture()),K.__version=E.version,a.memory.textures++),ue){G.__webglFramebuffer=[];for(let te=0;te<6;te++)if(E.mipmaps&&E.mipmaps.length>0){G.__webglFramebuffer[te]=[];for(let re=0;re<E.mipmaps.length;re++)G.__webglFramebuffer[te][re]=t.createFramebuffer()}else G.__webglFramebuffer[te]=t.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){G.__webglFramebuffer=[];for(let te=0;te<E.mipmaps.length;te++)G.__webglFramebuffer[te]=t.createFramebuffer()}else G.__webglFramebuffer=t.createFramebuffer();if(he)for(let te=0,re=Q.length;te<re;te++){const ge=i.get(Q[te]);ge.__webglTexture===void 0&&(ge.__webglTexture=t.createTexture(),a.memory.textures++)}if(N.samples>0&&Ct(N)===!1){G.__webglMultisampledFramebuffer=t.createFramebuffer(),G.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let te=0;te<Q.length;te++){const re=Q[te];G.__webglColorRenderbuffer[te]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,G.__webglColorRenderbuffer[te]);const ge=s.convert(re.format,re.colorSpace),Ie=s.convert(re.type),Se=_(re.internalFormat,ge,Ie,re.normalized,re.colorSpace,N.isXRRenderTarget===!0),ve=gt(N);t.renderbufferStorageMultisample(t.RENDERBUFFER,ve,Se,N.width,N.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+te,t.RENDERBUFFER,G.__webglColorRenderbuffer[te])}t.bindRenderbuffer(t.RENDERBUFFER,null),N.depthBuffer&&(G.__webglDepthRenderbuffer=t.createRenderbuffer(),Ae(G.__webglDepthRenderbuffer,N,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ue){n.bindTexture(t.TEXTURE_CUBE_MAP,K.__webglTexture),pe(t.TEXTURE_CUBE_MAP,E);for(let te=0;te<6;te++)if(E.mipmaps&&E.mipmaps.length>0)for(let re=0;re<E.mipmaps.length;re++)oe(G.__webglFramebuffer[te][re],N,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+te,re);else oe(G.__webglFramebuffer[te],N,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0);h(E)&&g(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(he){for(let te=0,re=Q.length;te<re;te++){const ge=Q[te],Ie=i.get(ge);let Se=t.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Se=N.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(Se,Ie.__webglTexture),pe(Se,ge),oe(G.__webglFramebuffer,N,ge,t.COLOR_ATTACHMENT0+te,Se,0),h(ge)&&g(Se)}n.unbindTexture()}else{let te=t.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(te=N.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(te,K.__webglTexture),pe(te,E),E.mipmaps&&E.mipmaps.length>0)for(let re=0;re<E.mipmaps.length;re++)oe(G.__webglFramebuffer[re],N,E,t.COLOR_ATTACHMENT0,te,re);else oe(G.__webglFramebuffer,N,E,t.COLOR_ATTACHMENT0,te,0);h(E)&&g(te),n.unbindTexture()}N.depthBuffer&&_e(N)}function Be(N){const E=N.textures;for(let G=0,K=E.length;G<K;G++){const Q=E[G];if(h(Q)){const ue=S(N),he=i.get(Q).__webglTexture;n.bindTexture(ue,he),g(ue),n.unbindTexture()}}}const et=[],dt=[];function mt(N){if(N.samples>0){if(Ct(N)===!1){const E=N.textures,G=N.width,K=N.height;let Q=t.COLOR_BUFFER_BIT;const ue=N.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,he=i.get(N),te=E.length>1;if(te)for(let ge=0;ge<E.length;ge++)n.bindFramebuffer(t.FRAMEBUFFER,he.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,he.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,he.__webglMultisampledFramebuffer);const re=N.texture.mipmaps;re&&re.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,he.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,he.__webglFramebuffer);for(let ge=0;ge<E.length;ge++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(Q|=t.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(Q|=t.STENCIL_BUFFER_BIT)),te){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,he.__webglColorRenderbuffer[ge]);const Ie=i.get(E[ge]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Ie,0)}t.blitFramebuffer(0,0,G,K,0,0,G,K,Q,t.NEAREST),l===!0&&(et.length=0,dt.length=0,et.push(t.COLOR_ATTACHMENT0+ge),N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&(et.push(ue),dt.push(ue),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,dt)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,et))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),te)for(let ge=0;ge<E.length;ge++){n.bindFramebuffer(t.FRAMEBUFFER,he.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.RENDERBUFFER,he.__webglColorRenderbuffer[ge]);const Ie=i.get(E[ge]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,he.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.TEXTURE_2D,Ie,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,he.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&l){const E=N.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[E])}}}function gt(N){return Math.min(r.maxSamples,N.samples)}function Ct(N){const E=i.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function O(N){const E=a.render.frame;d.get(N)!==E&&(d.set(N,E),N.update())}function kt(N,E){const G=N.colorSpace,K=N.format,Q=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||G!==Yc&&G!==gr&&(Je.getTransfer(G)===ot?(K!==oi||Q!==Rn)&&ze("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):it("WebGLTextures: Unsupported texture color space:",G)),E}function rt(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(c.width=N.naturalWidth||N.width,c.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(c.width=N.displayWidth,c.height=N.displayHeight):(c.width=N.width,c.height=N.height),c}this.allocateTextureUnit=ee,this.resetTextureUnits=Y,this.getTextureUnits=k,this.setTextureUnits=X,this.setTexture2D=z,this.setTexture2DArray=V,this.setTexture3D=b,this.setTextureCube=C,this.rebindTextures=Ve,this.setupRenderTarget=Ye,this.updateRenderTargetMipmap=Be,this.updateMultisampleRenderTarget=mt,this.setupDepthRenderbuffer=_e,this.setupFrameBufferTexture=oe,this.useMultisampledRTT=Ct,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function AD(t,e){function n(i,r=gr){let s;const a=Je.getTransfer(r);if(i===Rn)return t.UNSIGNED_BYTE;if(i===Cm)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Rm)return t.UNSIGNED_SHORT_5_5_5_1;if(i===PM)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===NM)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===CM)return t.BYTE;if(i===RM)return t.SHORT;if(i===Uo)return t.UNSIGNED_SHORT;if(i===bm)return t.INT;if(i===Ri)return t.UNSIGNED_INT;if(i===Mi)return t.FLOAT;if(i===Pi)return t.HALF_FLOAT;if(i===LM)return t.ALPHA;if(i===DM)return t.RGB;if(i===oi)return t.RGBA;if(i===Qi)return t.DEPTH_COMPONENT;if(i===Qr)return t.DEPTH_STENCIL;if(i===IM)return t.RED;if(i===Pm)return t.RED_INTEGER;if(i===ds)return t.RG;if(i===Nm)return t.RG_INTEGER;if(i===Lm)return t.RGBA_INTEGER;if(i===cc||i===uc||i===dc||i===fc)if(a===ot)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===cc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===uc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===dc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===fc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===cc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===uc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===dc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===fc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===gh||i===vh||i===xh||i===yh)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===gh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===vh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===xh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===yh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===_h||i===Sh||i===Mh||i===Eh||i===Th||i===jc||i===wh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===_h||i===Sh)return a===ot?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Mh)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Eh)return s.COMPRESSED_R11_EAC;if(i===Th)return s.COMPRESSED_SIGNED_R11_EAC;if(i===jc)return s.COMPRESSED_RG11_EAC;if(i===wh)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Ah||i===bh||i===Ch||i===Rh||i===Ph||i===Nh||i===Lh||i===Dh||i===Ih||i===Uh||i===Fh||i===Oh||i===kh||i===Bh)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Ah)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===bh)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ch)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Rh)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ph)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Nh)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Lh)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Dh)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ih)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Uh)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Fh)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Oh)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===kh)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Bh)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Vh||i===zh||i===Hh)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Vh)return a===ot?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===zh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Hh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Gh||i===Wh||i===Xc||i===jh)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Gh)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Wh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Xc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===jh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Fo?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const bD=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,CD=`
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

}`;class RD{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new WM(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Ni({vertexShader:bD,fragmentShader:CD,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Nn(new Tu(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class PD extends ms{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,d=null,f=null,u=null,p=null,x=null;const M=typeof XRWebGLBinding<"u",v=new RD,h={},g=n.getContextAttributes();let S=null,_=null;const T=[],w=[],R=new qe;let y=null,P=null;const L=new Cn;L.viewport=new Tt;const D=new Cn;D.viewport=new Tt;const B=[L,D],Y=new OP;let k=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(I){let H=T[I];return H===void 0&&(H=new wd,T[I]=H),H.getTargetRaySpace()},this.getControllerGrip=function(I){let H=T[I];return H===void 0&&(H=new wd,T[I]=H),H.getGripSpace()},this.getHand=function(I){let H=T[I];return H===void 0&&(H=new wd,T[I]=H),H.getHandSpace()};function ee(I){const H=w.indexOf(I.inputSource);if(H===-1)return;const le=T[H];le!==void 0&&(le.update(I.inputSource,I.frame,c||a),le.dispatchEvent({type:I.type,data:I.inputSource}))}function W(){r.removeEventListener("select",ee),r.removeEventListener("selectstart",ee),r.removeEventListener("selectend",ee),r.removeEventListener("squeeze",ee),r.removeEventListener("squeezestart",ee),r.removeEventListener("squeezeend",ee),r.removeEventListener("end",W),r.removeEventListener("inputsourceschange",z);for(let I=0;I<T.length;I++){const H=w[I];H!==null&&(w[I]=null,T[I].disconnect(H))}k=null,X=null,v.reset();for(const I in h)delete h[I];if(e.setRenderTarget(S),p=null,u=null,f=null,r=null,_=null,me.stop(),i.isPresenting=!1,e.setPixelRatio(y),e.setSize(R.width,R.height,!1),P!==null){const I=P.camera;I.fov=P.fov,I.zoom=P.zoom,I.updateProjectionMatrix(),P=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(I){s=I,i.isPresenting===!0&&ze("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(I){o=I,i.isPresenting===!0&&ze("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(I){c=I},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return f===null&&M&&(f=new XRWebGLBinding(r,n)),f},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(I){if(r=I,r!==null){if(S=e.getRenderTarget(),r.addEventListener("select",ee),r.addEventListener("selectstart",ee),r.addEventListener("selectend",ee),r.addEventListener("squeeze",ee),r.addEventListener("squeezestart",ee),r.addEventListener("squeezeend",ee),r.addEventListener("end",W),r.addEventListener("inputsourceschange",z),g.xrCompatible!==!0&&await n.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(R),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let le=null,fe=null,oe=null;g.depth&&(oe=g.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,le=g.stencil?Qr:Qi,fe=g.stencil?Fo:Ri);const Ae={colorFormat:n.RGBA8,depthFormat:oe,scaleFactor:s};f=this.getBinding(),u=f.createProjectionLayer(Ae),r.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),_=new ui(u.textureWidth,u.textureHeight,{format:oi,type:Rn,depthTexture:new ko(u.textureWidth,u.textureHeight,fe,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{const le={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,le),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),_=new ui(p.framebufferWidth,p.framebufferHeight,{format:oi,type:Rn,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),me.setContext(r),me.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function z(I){for(let H=0;H<I.removed.length;H++){const le=I.removed[H],fe=w.indexOf(le);fe>=0&&(w[fe]=null,T[fe].disconnect(le))}for(let H=0;H<I.added.length;H++){const le=I.added[H];let fe=w.indexOf(le);if(fe===-1){for(let Ae=0;Ae<T.length;Ae++)if(Ae>=w.length){w.push(le),fe=Ae;break}else if(w[Ae]===null){w[Ae]=le,fe=Ae;break}if(fe===-1)break}const oe=T[fe];oe&&oe.connect(le)}}const V=new j,b=new j;function C(I,H,le){V.setFromMatrixPosition(H.matrixWorld),b.setFromMatrixPosition(le.matrixWorld);const fe=V.distanceTo(b),oe=H.projectionMatrix.elements,Ae=le.projectionMatrix.elements,Xe=oe[14]/(oe[10]-1),_e=oe[14]/(oe[10]+1),Ve=(oe[9]+1)/oe[5],Ye=(oe[9]-1)/oe[5],Be=(oe[8]-1)/oe[0],et=(Ae[8]+1)/Ae[0],dt=Xe*Be,mt=Xe*et,gt=fe/(-Be+et),Ct=gt*-Be;if(H.matrixWorld.decompose(I.position,I.quaternion,I.scale),I.translateX(Ct),I.translateZ(gt),I.matrixWorld.compose(I.position,I.quaternion,I.scale),I.matrixWorldInverse.copy(I.matrixWorld).invert(),oe[10]===-1)I.projectionMatrix.copy(H.projectionMatrix),I.projectionMatrixInverse.copy(H.projectionMatrixInverse);else{const O=Xe+gt,kt=_e+gt,rt=dt-Ct,N=mt+(fe-Ct),E=Ve*_e/kt*O,G=Ye*_e/kt*O;I.projectionMatrix.makePerspective(rt,N,E,G,O,kt),I.projectionMatrixInverse.copy(I.projectionMatrix).invert()}}function J(I,H){H===null?I.matrixWorld.copy(I.matrix):I.matrixWorld.multiplyMatrices(H.matrixWorld,I.matrix),I.matrixWorldInverse.copy(I.matrixWorld).invert()}this.updateCamera=function(I){if(r===null)return;let H=I.near,le=I.far;v.texture!==null&&(v.depthNear>0&&(H=v.depthNear),v.depthFar>0&&(le=v.depthFar)),Y.near=D.near=L.near=H,Y.far=D.far=L.far=le,(k!==Y.near||X!==Y.far)&&(r.updateRenderState({depthNear:Y.near,depthFar:Y.far}),k=Y.near,X=Y.far),Y.layers.mask=I.layers.mask|6,L.layers.mask=Y.layers.mask&-5,D.layers.mask=Y.layers.mask&-3;const fe=I.parent,oe=Y.cameras;J(Y,fe);for(let Ae=0;Ae<oe.length;Ae++)J(oe[Ae],fe);oe.length===2?C(Y,L,D):Y.projectionMatrix.copy(L.projectionMatrix),P===null&&I.isPerspectiveCamera&&(P={camera:I,fov:I.fov,zoom:I.zoom}),ne(I,Y,fe)};function ne(I,H,le){le===null?I.matrix.copy(H.matrixWorld):(I.matrix.copy(le.matrixWorld),I.matrix.invert(),I.matrix.multiply(H.matrixWorld)),I.matrix.decompose(I.position,I.quaternion,I.scale),I.updateMatrixWorld(!0),I.projectionMatrix.copy(H.projectionMatrix),I.projectionMatrixInverse.copy(H.projectionMatrixInverse),I.isPerspectiveCamera&&(I.fov=Yh*2*Math.atan(1/I.projectionMatrix.elements[5]),I.zoom=1)}this.getCamera=function(){return Y},this.getFoveation=function(){if(!(u===null&&p===null))return l},this.setFoveation=function(I){l=I,u!==null&&(u.fixedFoveation=I),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=I)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(Y)},this.getCameraTexture=function(I){return h[I]};let de=null;function pe(I,H){if(d=H.getViewerPose(c||a),x=H,d!==null){const le=d.views;p!==null&&(e.setRenderTargetFramebuffer(_,p.framebuffer),e.setRenderTarget(_));let fe=!1;le.length!==Y.cameras.length&&(Y.cameras.length=0,fe=!0);for(let _e=0;_e<le.length;_e++){const Ve=le[_e];let Ye=null;if(p!==null)Ye=p.getViewport(Ve);else{const et=f.getViewSubImage(u,Ve);Ye=et.viewport,_e===0&&(e.setRenderTargetTextures(_,et.colorTexture,et.depthStencilTexture),e.setRenderTarget(_))}let Be=B[_e];Be===void 0&&(Be=new Cn,Be.layers.enable(_e),Be.viewport=new Tt,B[_e]=Be),Be.matrix.fromArray(Ve.transform.matrix),Be.matrix.decompose(Be.position,Be.quaternion,Be.scale),Be.projectionMatrix.fromArray(Ve.projectionMatrix),Be.projectionMatrixInverse.copy(Be.projectionMatrix).invert(),Be.viewport.set(Ye.x,Ye.y,Ye.width,Ye.height),_e===0&&(Y.matrix.copy(Be.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale)),fe===!0&&Y.cameras.push(Be)}const oe=r.enabledFeatures;if(oe&&oe.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&M){f=i.getBinding();const _e=f.getDepthInformation(le[0]);_e&&_e.isValid&&_e.texture&&v.init(_e,r.renderState)}if(oe&&oe.includes("camera-access")&&M){e.state.unbindTexture(),f=i.getBinding();for(let _e=0;_e<le.length;_e++){const Ve=le[_e].camera;if(Ve){let Ye=h[Ve];Ye||(Ye=new WM,h[Ve]=Ye);const Be=f.getCameraImage(Ve);Ye.sourceTexture=Be}}}}for(let le=0;le<T.length;le++){const fe=w[le],oe=T[le];fe!==null&&oe!==void 0&&oe.update(fe,H,c||a)}de&&de(I,H),H.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:H}),x=null}const me=new qM;me.setAnimationLoop(pe),this.setAnimationLoop=function(I){de=I},this.dispose=function(){}}}const ND=new At,nE=new He;nE.set(-1,0,0,0,1,0,0,0,1);function LD(t,e){function n(v,h){v.matrixAutoUpdate===!0&&v.updateMatrix(),h.value.copy(v.matrix)}function i(v,h){h.color.getRGB(v.fogColor.value,jM(t)),h.isFog?(v.fogNear.value=h.near,v.fogFar.value=h.far):h.isFogExp2&&(v.fogDensity.value=h.density)}function r(v,h,g,S,_){h.isNodeMaterial?h.uniformsNeedUpdate=!1:h.isMeshBasicMaterial?s(v,h):h.isMeshLambertMaterial?(s(v,h),h.envMap&&(v.envMapIntensity.value=h.envMapIntensity)):h.isMeshToonMaterial?(s(v,h),f(v,h)):h.isMeshPhongMaterial?(s(v,h),d(v,h),h.envMap&&(v.envMapIntensity.value=h.envMapIntensity)):h.isMeshStandardMaterial?(s(v,h),u(v,h),h.isMeshPhysicalMaterial&&p(v,h,_)):h.isMeshMatcapMaterial?(s(v,h),x(v,h)):h.isMeshDepthMaterial?s(v,h):h.isMeshDistanceMaterial?(s(v,h),M(v,h)):h.isMeshNormalMaterial?s(v,h):h.isLineBasicMaterial?(a(v,h),h.isLineDashedMaterial&&o(v,h)):h.isPointsMaterial?l(v,h,g,S):h.isSpriteMaterial?c(v,h):h.isShadowMaterial?(v.color.value.copy(h.color),v.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(v,h){v.opacity.value=h.opacity,h.color&&v.diffuse.value.copy(h.color),h.emissive&&v.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(v.map.value=h.map,n(h.map,v.mapTransform)),h.alphaMap&&(v.alphaMap.value=h.alphaMap,n(h.alphaMap,v.alphaMapTransform)),h.bumpMap&&(v.bumpMap.value=h.bumpMap,n(h.bumpMap,v.bumpMapTransform),v.bumpScale.value=h.bumpScale,h.side===En&&(v.bumpScale.value*=-1)),h.normalMap&&(v.normalMap.value=h.normalMap,n(h.normalMap,v.normalMapTransform),v.normalScale.value.copy(h.normalScale),h.side===En&&v.normalScale.value.negate()),h.displacementMap&&(v.displacementMap.value=h.displacementMap,n(h.displacementMap,v.displacementMapTransform),v.displacementScale.value=h.displacementScale,v.displacementBias.value=h.displacementBias),h.emissiveMap&&(v.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,v.emissiveMapTransform)),h.specularMap&&(v.specularMap.value=h.specularMap,n(h.specularMap,v.specularMapTransform)),h.alphaTest>0&&(v.alphaTest.value=h.alphaTest);const g=e.get(h),S=g.envMap,_=g.envMapRotation;S&&(v.envMap.value=S,v.envMapRotation.value.setFromMatrix4(ND.makeRotationFromEuler(_)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&v.envMapRotation.value.premultiply(nE),v.reflectivity.value=h.reflectivity,v.ior.value=h.ior,v.refractionRatio.value=h.refractionRatio),h.lightMap&&(v.lightMap.value=h.lightMap,v.lightMapIntensity.value=h.lightMapIntensity,n(h.lightMap,v.lightMapTransform)),h.aoMap&&(v.aoMap.value=h.aoMap,v.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,v.aoMapTransform))}function a(v,h){v.diffuse.value.copy(h.color),v.opacity.value=h.opacity,h.map&&(v.map.value=h.map,n(h.map,v.mapTransform))}function o(v,h){v.dashSize.value=h.dashSize,v.totalSize.value=h.dashSize+h.gapSize,v.scale.value=h.scale}function l(v,h,g,S){v.diffuse.value.copy(h.color),v.opacity.value=h.opacity,v.size.value=h.size*g,v.scale.value=S*.5,h.map&&(v.map.value=h.map,n(h.map,v.uvTransform)),h.alphaMap&&(v.alphaMap.value=h.alphaMap,n(h.alphaMap,v.alphaMapTransform)),h.alphaTest>0&&(v.alphaTest.value=h.alphaTest)}function c(v,h){v.diffuse.value.copy(h.color),v.opacity.value=h.opacity,v.rotation.value=h.rotation,h.map&&(v.map.value=h.map,n(h.map,v.mapTransform)),h.alphaMap&&(v.alphaMap.value=h.alphaMap,n(h.alphaMap,v.alphaMapTransform)),h.alphaTest>0&&(v.alphaTest.value=h.alphaTest)}function d(v,h){v.specular.value.copy(h.specular),v.shininess.value=Math.max(h.shininess,1e-4)}function f(v,h){h.gradientMap&&(v.gradientMap.value=h.gradientMap)}function u(v,h){v.metalness.value=h.metalness,h.metalnessMap&&(v.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,v.metalnessMapTransform)),v.roughness.value=h.roughness,h.roughnessMap&&(v.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,v.roughnessMapTransform)),h.envMap&&(v.envMapIntensity.value=h.envMapIntensity)}function p(v,h,g){v.ior.value=h.ior,h.sheen>0&&(v.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),v.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(v.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,v.sheenColorMapTransform)),h.sheenRoughnessMap&&(v.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,v.sheenRoughnessMapTransform))),h.clearcoat>0&&(v.clearcoat.value=h.clearcoat,v.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(v.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,v.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(v.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===En&&v.clearcoatNormalScale.value.negate())),h.dispersion>0&&(v.dispersion.value=h.dispersion),h.retroreflectivity>0&&(v.retroreflectivity.value=h.retroreflectivity),h.iridescence>0&&(v.iridescence.value=h.iridescence,v.iridescenceIOR.value=h.iridescenceIOR,v.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(v.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,v.iridescenceMapTransform)),h.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),h.transmission>0&&(v.transmission.value=h.transmission,v.transmissionSamplerMap.value=g.texture,v.transmissionSamplerSize.value.set(g.width,g.height),h.transmissionMap&&(v.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,v.transmissionMapTransform)),v.thickness.value=h.thickness,h.thicknessMap&&(v.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=h.attenuationDistance,v.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(v.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(v.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=h.specularIntensity,v.specularColor.value.copy(h.specularColor),h.specularColorMap&&(v.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,v.specularColorMapTransform)),h.specularIntensityMap&&(v.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,v.specularIntensityMapTransform))}function x(v,h){h.matcap&&(v.matcap.value=h.matcap)}function M(v,h){const g=e.get(h).light;v.referencePosition.value.setFromMatrixPosition(g.matrixWorld),v.nearDistance.value=g.shadow.camera.near,v.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function DD(t,e,n,i){let r={},s={},a=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,T){const w=T.program;i.uniformBlockBinding(_,w)}function c(_,T){let w=r[_.id];w===void 0&&(v(_),w=d(_),r[_.id]=w,_.addEventListener("dispose",g));const R=T.program;i.updateUBOMapping(_,R);const y=e.render.frame;s[_.id]!==y&&(u(_),s[_.id]=y)}function d(_){const T=f();_.__bindingPointIndex=T;const w=t.createBuffer(),R=_.__size,y=_.usage;return t.bindBuffer(t.UNIFORM_BUFFER,w),t.bufferData(t.UNIFORM_BUFFER,R,y),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,T,w),w}function f(){for(let _=0;_<o;_++)if(a.indexOf(_)===-1)return a.push(_),_;return it("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(_){const T=r[_.id],w=_.uniforms,R=_.__cache;t.bindBuffer(t.UNIFORM_BUFFER,T);for(let y=0,P=w.length;y<P;y++){const L=w[y];if(Array.isArray(L))for(let D=0,B=L.length;D<B;D++)p(L[D],y,D,R);else p(L,y,0,R)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(_,T,w,R){if(M(_,T,w,R)===!0){const y=_.__offset,P=_.value;if(Array.isArray(P)){let L=0;for(let D=0;D<P.length;D++){const B=P[D],Y=h(B);x(B,_.__data,L),typeof B!="number"&&typeof B!="boolean"&&!B.isMatrix3&&!ArrayBuffer.isView(B)&&(L+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}}else x(P,_.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,y,_.__data)}}function x(_,T,w){typeof _=="number"||typeof _=="boolean"?T[0]=_:_.isMatrix3?(T[0]=_.elements[0],T[1]=_.elements[1],T[2]=_.elements[2],T[3]=0,T[4]=_.elements[3],T[5]=_.elements[4],T[6]=_.elements[5],T[7]=0,T[8]=_.elements[6],T[9]=_.elements[7],T[10]=_.elements[8],T[11]=0):ArrayBuffer.isView(_)?T.set(new _.constructor(_.buffer,_.byteOffset,T.length)):_.toArray(T,w)}function M(_,T,w,R){const y=_.value,P=T+"_"+w;if(R[P]===void 0)return typeof y=="number"||typeof y=="boolean"?R[P]=y:ArrayBuffer.isView(y)?R[P]=y.slice():R[P]=y.clone(),!0;{const L=R[P];if(typeof y=="number"||typeof y=="boolean"){if(L!==y)return R[P]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(L.equals(y)===!1)return L.copy(y),!0}}return!1}function v(_){const T=_.uniforms;let w=0;const R=16;for(let P=0,L=T.length;P<L;P++){const D=Array.isArray(T[P])?T[P]:[T[P]];for(let B=0,Y=D.length;B<Y;B++){const k=D[B],X=Array.isArray(k.value)?k.value:[k.value];for(let ee=0,W=X.length;ee<W;ee++){const z=X[ee],V=h(z),b=w%R,C=b%V.boundary,J=b+C;w+=C,J!==0&&R-J<V.storage&&(w+=R-J),k.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=w,w+=V.storage}}}const y=w%R;return y>0&&(w+=R-y),_.__size=w,_.__cache={},this}function h(_){const T={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(T.boundary=4,T.storage=4):_.isVector2?(T.boundary=8,T.storage=8):_.isVector3||_.isColor?(T.boundary=16,T.storage=12):_.isVector4?(T.boundary=16,T.storage=16):_.isMatrix3?(T.boundary=48,T.storage=48):_.isMatrix4?(T.boundary=64,T.storage=64):_.isTexture?ze("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(T.boundary=16,T.storage=_.byteLength):ze("WebGLRenderer: Unsupported uniform value type.",_),T}function g(_){const T=_.target;T.removeEventListener("dispose",g);const w=a.indexOf(T.__bindingPointIndex);a.splice(w,1),t.deleteBuffer(r[T.id]),delete r[T.id],delete s[T.id]}function S(){for(const _ in r)t.deleteBuffer(r[_]);a=[],r={},s={}}return{bind:l,update:c,dispose:S}}const ID=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let vi=null;function UD(){return vi===null&&(vi=new MP(ID,16,16,ds,Pi),vi.name="DFG_LUT",vi.minFilter=on,vi.magFilter=on,vi.wrapS=Hi,vi.wrapT=Hi,vi.generateMipmaps=!1,vi.needsUpdate=!0),vi}class FD{constructor(e={}){const{canvas:n=ZR(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:p=Rn}=e;this.isWebGLRenderer=!0;let x;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=i.getContextAttributes().alpha}else x=a;const M=p,v=new Set([Lm,Nm,Pm]),h=new Set([Rn,Ri,Uo,Fo,Cm,Rm]),g=new Uint32Array(4),S=new Int32Array(4),_=new j;let T=null,w=null;const R=[],y=[];let P=null;this.domElement=n,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ci,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const L=this;let D=!1,B=null,Y=null,k=null,X=null;this._outputColorSpace=Gn;let ee=0,W=0,z=null,V=-1,b=null;const C=new Tt,J=new Tt;let ne=null;const de=new Ze(0);let pe=0,me=n.width,I=n.height,H=1,le=null,fe=null;const oe=new Tt(0,0,me,I),Ae=new Tt(0,0,me,I);let Xe=!1;const _e=new Om;let Ve=!1,Ye=!1;const Be=new At,et=new j,dt=new Tt,mt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let gt=!1;function Ct(){return z===null?H:1}let O=i;function kt(A,U){return n.getContext(A,U)}let rt,N,E,G,K,Q,ue,he,te,re,ge,Ie,Se,ve,Ue,Oe,Ge,F,xe,ie,ye,we,ae;try{const A={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Am}`),n.addEventListener("webglcontextlost",ft,!1),n.addEventListener("webglcontextrestored",st,!1),n.addEventListener("webglcontextcreationerror",Kn,!1),O===null){const U="webgl2";if(O=kt(U,A),O===null)throw kt(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Fe()}catch(A){throw n.removeEventListener("webglcontextlost",ft,!1),n.removeEventListener("webglcontextrestored",st,!1),n.removeEventListener("webglcontextcreationerror",Kn,!1),it("WebGLRenderer: "+A.message),A}function Fe(){rt=new UN(O),rt.init(),ye=new AD(O,rt),N=new wN(O,rt,e,ye),E=new TD(O,rt),N.reversedDepthBuffer&&u&&E.buffers.depth.setReversed(!0),Y=O.createFramebuffer(),k=O.createFramebuffer(),X=O.createFramebuffer(),G=new kN(O),K=new uD,Q=new wD(O,rt,E,K,N,ye,G),ue=new IN(L),he=new VP(O),we=new EN(O,he),te=new FN(O,he,G,we),re=new VN(O,te,he,we,G),F=new BN(O,N,Q),Ue=new AN(K),ge=new cD(L,ue,rt,N,we,Ue),Ie=new LD(L,K),Se=new fD,ve=new xD(rt),Ge=new MN(L,ue,E,re,x,l),Oe=new ED(L,re,N),ae=new DD(O,G,N,E),xe=new TN(O,rt,G),ie=new ON(O,rt,G),G.programs=ge.programs,L.capabilities=N,L.extensions=rt,L.properties=K,L.renderLists=Se,L.shadowMap=Oe,L.state=E,L.info=G}M!==Rn&&(P=new HN(M,n.width,n.height,o,r,s));const Le=new PD(L,O);this.xr=Le,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const A=rt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=rt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(A){A!==void 0&&(H=A,this.setSize(me,I,!1))},this.getSize=function(A){return A.set(me,I)},this.setSize=function(A,U,Z=!0){if(Le.isPresenting){ze("WebGLRenderer: Can't change size while VR device is presenting.");return}me=A,I=U,n.width=Math.floor(A*H),n.height=Math.floor(U*H),Z===!0&&(n.style.width=A+"px",n.style.height=U+"px"),P!==null&&P.setSize(n.width,n.height),this.setViewport(0,0,A,U)},this.getDrawingBufferSize=function(A){return A.set(me*H,I*H).floor()},this.setDrawingBufferSize=function(A,U,Z){me=A,I=U,H=Z,n.width=Math.floor(A*Z),n.height=Math.floor(U*Z),this.setViewport(0,0,A,U)},this.setEffects=function(A){if(M===Rn){it("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let U=0;U<A.length;U++)if(A[U].isOutputPass===!0){ze("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}P.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(C)},this.getViewport=function(A){return A.copy(oe)},this.setViewport=function(A,U,Z,$){A.isVector4?oe.set(A.x,A.y,A.z,A.w):oe.set(A,U,Z,$),E.viewport(C.copy(oe).multiplyScalar(H).round())},this.getScissor=function(A){return A.copy(Ae)},this.setScissor=function(A,U,Z,$){A.isVector4?Ae.set(A.x,A.y,A.z,A.w):Ae.set(A,U,Z,$),E.scissor(J.copy(Ae).multiplyScalar(H).round())},this.getScissorTest=function(){return Xe},this.setScissorTest=function(A){E.setScissorTest(Xe=A)},this.setOpaqueSort=function(A){le=A},this.setTransparentSort=function(A){fe=A},this.getClearColor=function(A){return A.copy(Ge.getClearColor())},this.setClearColor=function(){Ge.setClearColor(...arguments)},this.getClearAlpha=function(){return Ge.getClearAlpha()},this.setClearAlpha=function(){Ge.setClearAlpha(...arguments)},this.clear=function(A=!0,U=!0,Z=!0){let $=0;if(A){let q=!1;if(z!==null){const Te=z.texture.format;q=v.has(Te)}if(q){const Te=z.texture.type,Ce=h.has(Te),Ee=Ge.getClearColor(),Pe=Ge.getClearAlpha(),De=Ee.r,We=Ee.g,$e=Ee.b;Ce?(g[0]=De,g[1]=We,g[2]=$e,g[3]=Pe,O.clearBufferuiv(O.COLOR,0,g)):(S[0]=De,S[1]=We,S[2]=$e,S[3]=Pe,O.clearBufferiv(O.COLOR,0,S))}else $|=O.COLOR_BUFFER_BIT}U&&($|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Z&&($|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),$!==0&&O.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),B=A},this.dispose=function(){n.removeEventListener("webglcontextlost",ft,!1),n.removeEventListener("webglcontextrestored",st,!1),n.removeEventListener("webglcontextcreationerror",Kn,!1),Ge.dispose(),Se.dispose(),ve.dispose(),K.dispose(),ue.dispose(),re.dispose(),we.dispose(),ae.dispose(),ge.dispose(),Le.dispose(),Le.removeEventListener("sessionstart",$m),Le.removeEventListener("sessionend",qm),Or.stop()};function ft(A){A.preventDefault(),Iv("WebGLRenderer: Context Lost."),D=!0}function st(){Iv("WebGLRenderer: Context Restored."),D=!1;const A=G.autoReset,U=Oe.enabled,Z=Oe.autoUpdate,$=Oe.needsUpdate,q=Oe.type;Fe(),G.autoReset=A,Oe.enabled=U,Oe.autoUpdate=Z,Oe.needsUpdate=$,Oe.type=q}function Kn(A){it("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function hi(A){const U=A.target;U.removeEventListener("dispose",hi),iE(U)}function iE(A){rE(A),K.remove(A)}function rE(A){const U=K.get(A).programs;U!==void 0&&(U.forEach(function(Z){ge.releaseProgram(Z)}),A.isShaderMaterial&&ge.releaseShaderCache(A))}this.renderBufferDirect=function(A,U,Z,$,q,Te){U===null&&(U=mt);const Ce=q.isMesh&&q.matrixWorld.determinantAffine()<0,Ee=oE(A,U,Z,$,q);E.setMaterial($,Ce);let Pe=Z.index,De=1;if($.wireframe===!0){if(Pe=te.getWireframeAttribute(Z),Pe===void 0)return;De=2}const We=Z.drawRange,$e=Z.attributes.position;let Ne=We.start*De,at=(We.start+We.count)*De;Te!==null&&(Ne=Math.max(Ne,Te.start*De),at=Math.min(at,(Te.start+Te.count)*De)),Pe!==null?(Ne=Math.max(Ne,0),at=Math.min(at,Pe.count)):$e!=null&&(Ne=Math.max(Ne,0),at=Math.min(at,$e.count));const Ut=at-Ne;if(Ut<0||Ut===1/0)return;we.setup(q,$,Ee,Z,Pe);let vt,ut=xe;if(Pe!==null&&(vt=he.get(Pe),ut=ie,ut.setIndex(vt)),q.isMesh)$.wireframe===!0?(E.setLineWidth($.wireframeLinewidth*Ct()),ut.setMode(O.LINES)):ut.setMode(O.TRIANGLES);else if(q.isLine){let Jt=$.linewidth;Jt===void 0&&(Jt=1),E.setLineWidth(Jt*Ct()),q.isLineSegments?ut.setMode(O.LINES):q.isLineLoop?ut.setMode(O.LINE_LOOP):ut.setMode(O.LINE_STRIP)}else q.isPoints?ut.setMode(O.POINTS):q.isSprite&&ut.setMode(O.TRIANGLES);if(q.isBatchedMesh)if(rt.get("WEBGL_multi_draw"))ut.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{const Jt=q._multiDrawStarts,be=q._multiDrawCounts,cn=q._multiDrawCount,tt=Pe?he.get(Pe).bytesPerElement:1,Bn=K.get($).currentProgram.getUniforms();for(let pi=0;pi<cn;pi++)Bn.setValue(O,"_gl_DrawID",pi),ut.render(Jt[pi]/tt,be[pi])}else if(q.isInstancedMesh)ut.renderInstances(Ne,Ut,q.count);else if(Z.isInstancedBufferGeometry){const Jt=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,be=Math.min(Z.instanceCount,Jt);ut.renderInstances(Ne,Ut,be)}else ut.render(Ne,Ut)};function Ym(A,U,Z,$){B!==null&&A.isNodeMaterial&&B.setObject($,A),Ve===!0&&Ue.setState(A,Z,!1),A.transparent===!0&&A.side===Bi&&A.forceSinglePass===!1?(A.side=En,A.needsUpdate=!0,Jo(A,U,$),A.side=cs,A.needsUpdate=!0,Jo(A,U,$),A.side=Bi):Jo(A,U,$)}this.compile=function(A,U,Z=null){Z===null&&(Z=A),B!==null&&B.renderStart(A,U,Z),w=ve.get(Z),w.init(U),y.push(w),Z.traverseVisible(function(q){q.isLight&&q.layers.test(U.layers)&&(w.pushLight(q),q.castShadow&&w.pushShadow(q))}),A!==Z&&A.traverseVisible(function(q){q.isLight&&q.layers.test(U.layers)&&(w.pushLight(q),q.castShadow&&w.pushShadow(q))}),w.setupLights(),B!==null&&B.updateLights(w.state.lightsArray),Ye=this.localClippingEnabled,Ve=Ue.init(this.clippingPlanes,Ye),Ve===!0&&Ue.setGlobalState(this.clippingPlanes,U),B!==null&&Oe.render(w.state.shadowsArray,Z,U);const $=new Set;return A.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;const Te=q.material;if(Te)if(Array.isArray(Te))for(let Ce=0;Ce<Te.length;Ce++){const Ee=Te[Ce];Ym(Ee,Z,U,q),$.add(Ee)}else Ym(Te,Z,U,q),$.add(Te)}),w=y.pop(),B!==null&&B.renderEnd(),$},this.compileAsync=function(A,U,Z=null){const $=this.compile(A,U,Z);return new Promise(q=>{function Te(){if($.forEach(function(Ce){const Pe=K.get(Ce).currentProgram;(Pe===void 0||Pe.isReady())&&$.delete(Ce)}),$.size===0){q(A);return}setTimeout(Te,10)}rt.get("KHR_parallel_shader_compile")!==null?Te():setTimeout(Te,10)})};let bu=null;function sE(A){bu&&bu(A)}function $m(){Or.stop()}function qm(){Or.start()}const Or=new qM;Or.setAnimationLoop(sE),typeof self<"u"&&Or.setContext(self),this.setAnimationLoop=function(A){bu=A,Le.setAnimationLoop(A),A===null?Or.stop():Or.start()},Le.addEventListener("sessionstart",$m),Le.addEventListener("sessionend",qm),this.render=function(A,U){if(U!==void 0&&U.isCamera!==!0){it("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;B!==null&&B.renderStart(A,U);const Z=Le.enabled===!0&&Le.isPresenting===!0,$=P!==null&&(z===null||Z)&&P.begin(L,z);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Le.enabled===!0&&Le.isPresenting===!0&&(P===null||P.isCompositing()===!1)&&(Le.cameraAutoUpdate===!0&&Le.updateCamera(U),U=Le.getCamera()),A.isScene===!0&&A.onBeforeRender(L,A,U,z),w=ve.get(A,y.length),w.init(U),w.state.textureUnits=Q.getTextureUnits(),y.push(w),Be.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),_e.setFromProjectionMatrix(Be,Ei,U.reversedDepth),Ye=this.localClippingEnabled,Ve=Ue.init(this.clippingPlanes,Ye),T=Se.get(A,R.length),T.init(),R.push(T),Le.enabled===!0&&Le.isPresenting===!0){const Ce=L.xr.getDepthSensingMesh();Ce!==null&&Cu(Ce,U,-1/0,L.sortObjects)}Cu(A,U,0,L.sortObjects),T.finish(),B!==null&&B.updateLights(w.state.lightsArray),L.sortObjects===!0&&T.sort(le,fe),gt=Le.enabled===!1||Le.isPresenting===!1||Le.hasDepthSensing()===!1,gt&&Ge.addToRenderList(T,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ve===!0&&Ue.beginShadows();const q=w.state.shadowsArray;if(Oe.render(q,A,U),Ve===!0&&Ue.endShadows(),($&&P.hasRenderPass())===!1){const Ce=T.opaque,Ee=T.transmissive;if(w.setupLights(),U.isArrayCamera){const Pe=U.cameras;if(Ee.length>0)for(let De=0,We=Pe.length;De<We;De++){const $e=Pe[De];Zm(Ce,Ee,A,$e)}gt&&Ge.render(A);for(let De=0,We=Pe.length;De<We;De++){const $e=Pe[De];Km(T,A,$e,$e.viewport)}}else Ee.length>0&&Zm(Ce,Ee,A,U),gt&&Ge.render(A),Km(T,A,U)}z!==null&&W===0&&(Q.updateMultisampleRenderTarget(z),Q.updateRenderTargetMipmap(z)),$&&P.end(L),A.isScene===!0&&A.onAfterRender(L,A,U),we.resetDefaultState(),V=-1,b=null,y.pop(),y.length>0?(w=y[y.length-1],Q.setTextureUnits(w.state.textureUnits),Ve===!0&&Ue.setGlobalState(L.clippingPlanes,w.state.camera)):w=null,R.pop(),R.length>0?T=R[R.length-1]:T=null,B!==null&&B.renderEnd()};function Cu(A,U,Z,$){if(A.visible===!1)return;if(A.layers.test(U.layers)){if(A.isGroup)Z=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(U);else if(A.isLightProbeGrid)w.pushLightProbeGrid(A);else if(A.isLight)w.pushLight(A),A.castShadow&&w.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||A.intersectsFrustum(_e)){$&&dt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Be);const Ce=re.update(A),Ee=A.material;Ee.visible&&T.push(A,Ce,Ee,Z,dt.z,null,U)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||A.intersectsFrustum(_e))){const Ce=re.update(A),Ee=A.material;if($&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),dt.copy(A.boundingSphere.center)):(Ce.boundingSphere===null&&Ce.computeBoundingSphere(),dt.copy(Ce.boundingSphere.center)),dt.applyMatrix4(A.matrixWorld).applyMatrix4(Be)),Array.isArray(Ee)){const Pe=Ce.groups;for(let De=0,We=Pe.length;De<We;De++){const $e=Pe[De],Ne=Ee[$e.materialIndex];Ne&&Ne.visible&&T.push(A,Ce,Ne,Z,dt.z,$e,U)}}else Ee.visible&&T.push(A,Ce,Ee,Z,dt.z,null,U)}}const Te=A.children;for(let Ce=0,Ee=Te.length;Ce<Ee;Ce++)Cu(Te[Ce],U,Z,$)}function Km(A,U,Z,$){const{opaque:q,transmissive:Te,transparent:Ce}=A;w.setupLightsView(Z),Ve===!0&&Ue.setGlobalState(L.clippingPlanes,Z),$&&E.viewport(C.copy($)),q.length>0&&Zo(q,U,Z),Te.length>0&&Zo(Te,U,Z),Ce.length>0&&Zo(Ce,U,Z),E.buffers.depth.setTest(!0),E.buffers.depth.setMask(!0),E.buffers.color.setMask(!0),E.setPolygonOffset(!1)}function Zm(A,U,Z,$){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[$.id]===void 0){const Ne=rt.has("EXT_color_buffer_half_float")||rt.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[$.id]=new ui(1,1,{generateMipmaps:!0,type:Ne?Pi:Rn,minFilter:Jr,samples:Math.max(4,N.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Je.workingColorSpace})}const Te=w.state.transmissionRenderTarget[$.id],Ce=$.viewport||C;Te.setSize(Ce.z*L.transmissionResolutionScale,Ce.w*L.transmissionResolutionScale);const Ee=L.getRenderTarget(),Pe=L.getActiveCubeFace(),De=L.getActiveMipmapLevel();L.setRenderTarget(Te),L.getClearColor(de),pe=L.getClearAlpha(),pe<1&&L.setClearColor(16777215,.5),L.clear(),gt&&Ge.render(Z);const We=L.toneMapping;L.toneMapping=Ci;const $e=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),w.setupLightsView($),Ve===!0&&Ue.setGlobalState(L.clippingPlanes,$),Zo(A,Z,$),Q.updateMultisampleRenderTarget(Te),Q.updateRenderTargetMipmap(Te),rt.has("WEBGL_multisampled_render_to_texture")===!1){let Ne=!1;for(let at=0,Ut=U.length;at<Ut;at++){const vt=U[at],{object:ut,geometry:Jt,material:be,group:cn}=vt;if(be.side===Bi&&ut.layers.test($.layers)){const tt=be.side;be.side=En,be.needsUpdate=!0,Jm(ut,Z,$,Jt,be,cn),be.side=tt,be.needsUpdate=!0,Ne=!0}}Ne===!0&&(Q.updateMultisampleRenderTarget(Te),Q.updateRenderTargetMipmap(Te))}L.setRenderTarget(Ee,Pe,De),L.setClearColor(de,pe),$e!==void 0&&($.viewport=$e),L.toneMapping=We}function Zo(A,U,Z){const $=U.isScene===!0?U.overrideMaterial:null;for(let q=0,Te=A.length;q<Te;q++){const Ce=A[q],{object:Ee,geometry:Pe,group:De}=Ce;let We=Ce.material;We.allowOverride===!0&&$!==null&&(We=$),Ee.layers.test(Z.layers)&&Jm(Ee,U,Z,Pe,We,De)}}function Jm(A,U,Z,$,q,Te){B!==null&&q.isNodeMaterial&&B.setObject(A,q),A.onBeforeRender(L,U,Z,$,q,Te),A.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),q.onBeforeRender(L,U,Z,$,A,Te),q.transparent===!0&&q.side===Bi&&q.forceSinglePass===!1?(q.side=En,q.needsUpdate=!0,L.renderBufferDirect(Z,U,$,q,A,Te),q.side=cs,q.needsUpdate=!0,L.renderBufferDirect(Z,U,$,q,A,Te),q.side=Bi):L.renderBufferDirect(Z,U,$,q,A,Te),A.onAfterRender(L,U,Z,$,q,Te)}function Jo(A,U,Z){U.isScene!==!0&&(U=mt);const $=K.get(A),q=w.state.lights,Te=w.state.shadowsArray,Ce=q.state.version,Ee=ge.getParameters(A,q.state,Te,U,Z,w.state.lightProbeGridArray),Pe=ge.getProgramCacheKey(Ee);let De=$.programs;$.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?U.environment:null,$.fog=U.fog;const We=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;$.envMap=ue.get(A.envMap||$.environment,We),$.envMapRotation=$.environment!==null&&A.envMap===null?U.environmentRotation:A.envMapRotation,De===void 0&&(A.addEventListener("dispose",hi),De=new Map,$.programs=De);let $e=De.get(Pe);if($e!==void 0){if($.currentProgram===$e&&$.lightsStateVersion===Ce)return eg(A,Ee),$e}else Ee.uniforms=ge.getUniforms(A),B!==null&&A.isNodeMaterial&&B.build(A,Z,Ee),A.onBeforeCompile(Ee,L),$e=ge.acquireProgram(Ee,Pe),De.set(Pe,$e),$.uniforms=Ee.uniforms;const Ne=$.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ne.clippingPlanes=Ue.uniform),eg(A,Ee),$.needsLights=cE(A),$.lightsStateVersion=Ce,$.needsLights&&(Ne.ambientLightColor.value=q.state.ambient,Ne.lightProbe.value=q.state.probe,Ne.sunLights.value=q.state.sun,Ne.sunLightShadows.value=q.state.sunShadow,Ne.directionalLights.value=q.state.directional,Ne.directionalLightShadows.value=q.state.directionalShadow,Ne.spotLights.value=q.state.spot,Ne.spotLightShadows.value=q.state.spotShadow,Ne.rectAreaLights.value=q.state.rectArea,Ne.ltc_1.value=q.state.rectAreaLTC1,Ne.ltc_2.value=q.state.rectAreaLTC2,Ne.pointLights.value=q.state.point,Ne.pointLightShadows.value=q.state.pointShadow,Ne.hemisphereLights.value=q.state.hemi,Ne.sunShadowMatrix.value=q.state.sunShadowMatrix,Ne.sunShadowCascade.value=q.state.sunShadowCascade,Ne.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Ne.spotLightMatrix.value=q.state.spotLightMatrix,Ne.spotLightMap.value=q.state.spotLightMap,Ne.pointShadowMatrix.value=q.state.pointShadowMatrix),$.lightProbeGrid=w.state.lightProbeGridArray.length>0,$.currentProgram=$e,$.uniformsList=null,$e}function Qm(A){if(A.uniformsList===null){const U=A.currentProgram.getUniforms();A.uniformsList=hc.seqWithValue(U.seq,A.uniforms)}return A.uniformsList}function eg(A,U){const Z=K.get(A);Z.outputColorSpace=U.outputColorSpace,Z.batching=U.batching,Z.batchingColor=U.batchingColor,Z.instancing=U.instancing,Z.instancingColor=U.instancingColor,Z.instancingMorph=U.instancingMorph,Z.skinning=U.skinning,Z.morphTargets=U.morphTargets,Z.morphNormals=U.morphNormals,Z.morphColors=U.morphColors,Z.morphTargetsCount=U.morphTargetsCount,Z.numClippingPlanes=U.numClippingPlanes,Z.numIntersection=U.numClipIntersection,Z.vertexAlphas=U.vertexAlphas,Z.vertexTangents=U.vertexTangents,Z.toneMapping=U.toneMapping}function aE(A,U){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;_.setFromMatrixPosition(U.matrixWorld);for(let Z=0,$=A.length;Z<$;Z++){const q=A[Z];if(q.texture!==null&&q.boundingBox.containsPoint(_))return q}return null}function oE(A,U,Z,$,q){U.isScene!==!0&&(U=mt),Q.resetTextureUnits();const Te=U.fog,Ce=$.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial?U.environment:null,Ee=z===null?L.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:Je.workingColorSpace,Pe=$.isMeshStandardMaterial||$.isMeshLambertMaterial&&!$.envMap||$.isMeshPhongMaterial&&!$.envMap,De=ue.get($.envMap||Ce,Pe),We=$.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,$e=!!Z.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Ne=!!Z.morphAttributes.position,at=!!Z.morphAttributes.normal,Ut=!!Z.morphAttributes.color;let vt=Ci;$.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(vt=L.toneMapping);const ut=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Jt=ut!==void 0?ut.length:0,be=K.get($),cn=w.state.lights;if(Ve===!0&&(Ye===!0||A!==b)){const ht=A===b&&$.id===V;Ue.setState($,A,ht)}let tt=!1;$.version===be.__version?(be.needsLights&&be.lightsStateVersion!==cn.state.version||be.outputColorSpace!==Ee||q.isBatchedMesh&&be.batching===!1||!q.isBatchedMesh&&be.batching===!0||q.isBatchedMesh&&be.batchingColor===!0&&q._colorsTexture===null||q.isBatchedMesh&&be.batchingColor===!1&&q._colorsTexture!==null||q.isInstancedMesh&&be.instancing===!1||!q.isInstancedMesh&&be.instancing===!0||q.isSkinnedMesh&&be.skinning===!1||!q.isSkinnedMesh&&be.skinning===!0||q.isInstancedMesh&&be.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&be.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&be.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&be.instancingMorph===!1&&q.morphTexture!==null||be.envMap!==De||$.fog===!0&&be.fog!==Te||be.numClippingPlanes!==void 0&&(be.numClippingPlanes!==Ue.numPlanes||be.numIntersection!==Ue.numIntersection)||be.vertexAlphas!==We||be.vertexTangents!==$e||be.morphTargets!==Ne||be.morphNormals!==at||be.morphColors!==Ut||be.toneMapping!==vt||be.morphTargetsCount!==Jt||!!be.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(tt=!0):(tt=!0,be.__version=$.version);let Bn=be.currentProgram;tt===!0&&(Bn=Jo($,U,q),B&&$.isNodeMaterial&&B.onUpdateProgram($,Bn,be));let pi=!1,tr=!1,gs=!1;const ct=Bn.getUniforms(),Lt=be.uniforms;if(E.useProgram(Bn.program)&&(pi=!0,tr=!0,gs=!0),$.id!==V&&(V=$.id,tr=!0),be.needsLights){const ht=aE(w.state.lightProbeGridArray,q);be.lightProbeGrid!==ht&&(be.lightProbeGrid=ht,tr=!0)}if(pi||b!==A){E.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),ct.setValue(O,"projectionMatrix",A.projectionMatrix),ct.setValue(O,"viewMatrix",A.matrixWorldInverse);const ir=ct.map.cameraPosition;ir!==void 0&&ir.setValue(O,et.setFromMatrixPosition(A.matrixWorld)),N.logarithmicDepthBuffer&&ct.setValue(O,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&ct.setValue(O,"isOrthographic",A.isOrthographicCamera===!0),b!==A&&(b=A,tr=!0,gs=!0)}if(be.needsLights&&(cn.state.sunShadowMap.length>0&&ct.setValue(O,"sunShadowMap",cn.state.sunShadowMap,Q),cn.state.directionalShadowMap.length>0&&ct.setValue(O,"directionalShadowMap",cn.state.directionalShadowMap,Q),cn.state.spotShadowMap.length>0&&ct.setValue(O,"spotShadowMap",cn.state.spotShadowMap,Q),cn.state.pointShadowMap.length>0&&ct.setValue(O,"pointShadowMap",cn.state.pointShadowMap,Q)),q.isSkinnedMesh){ct.setOptional(O,q,"bindMatrix"),ct.setOptional(O,q,"bindMatrixInverse");const ht=q.skeleton;ht&&(ht.boneTexture===null&&ht.computeBoneTexture(),ct.setValue(O,"boneTexture",ht.boneTexture,Q))}q.isBatchedMesh&&(ct.setOptional(O,q,"batchingTexture"),ct.setValue(O,"batchingTexture",q._matricesTexture,Q),ct.setOptional(O,q,"batchingIdTexture"),ct.setValue(O,"batchingIdTexture",q._indirectTexture,Q),ct.setOptional(O,q,"batchingColorTexture"),q._colorsTexture!==null&&ct.setValue(O,"batchingColorTexture",q._colorsTexture,Q));const nr=Z.morphAttributes;if((nr.position!==void 0||nr.normal!==void 0||nr.color!==void 0)&&F.update(q,Z,Bn),(tr||be.receiveShadow!==q.receiveShadow)&&(be.receiveShadow=q.receiveShadow,ct.setValue(O,"receiveShadow",q.receiveShadow)),($.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial)&&$.envMap===null&&U.environment!==null&&(Lt.envMapIntensity.value=U.environmentIntensity),Lt.dfgLUT!==void 0&&(Lt.dfgLUT.value=UD()),tr){if(ct.setValue(O,"toneMappingExposure",L.toneMappingExposure),be.needsLights&&lE(Lt,gs),Te&&$.fog===!0&&Ie.refreshFogUniforms(Lt,Te),Ie.refreshMaterialUniforms(Lt,$,H,I,w.state.transmissionRenderTarget[A.id]),be.needsLights&&be.lightProbeGrid){const ht=be.lightProbeGrid;Lt.probesSH.value=ht.texture,Lt.probesMin.value.copy(ht.boundingBox.min),Lt.probesMax.value.copy(ht.boundingBox.max),Lt.probesResolution.value.copy(ht.resolution)}hc.upload(O,Qm(be),Lt,Q)}if($.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(hc.upload(O,Qm(be),Lt,Q),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&ct.setValue(O,"center",q.center),ct.setValue(O,"modelViewMatrix",q.modelViewMatrix),ct.setValue(O,"normalMatrix",q.normalMatrix),ct.setValue(O,"modelMatrix",q.matrixWorld),$.uniformsGroups!==void 0){const ht=$.uniformsGroups;for(let ir=0,vs=ht.length;ir<vs;ir++){const ng=ht[ir];ae.update(ng,Bn),ae.bind(ng,Bn)}}return Bn}function lE(A,U){A.ambientLightColor.needsUpdate=U,A.lightProbe.needsUpdate=U,A.sunLights.needsUpdate=U,A.sunLightShadows.needsUpdate=U,A.directionalLights.needsUpdate=U,A.directionalLightShadows.needsUpdate=U,A.pointLights.needsUpdate=U,A.pointLightShadows.needsUpdate=U,A.spotLights.needsUpdate=U,A.spotLightShadows.needsUpdate=U,A.rectAreaLights.needsUpdate=U,A.hemisphereLights.needsUpdate=U}function cE(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return ee},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(A,U,Z){const $=K.get(A);$.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),K.get(A.texture).__webglTexture=U,K.get(A.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:Z,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,U){const Z=K.get(A);Z.__webglFramebuffer=U,Z.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(A,U=0,Z=0){z=A,ee=U,W=Z;let $=null,q=!1,Te=!1;if(A){const Ee=K.get(A);if(Ee.__useDefaultFramebuffer!==void 0){E.bindFramebuffer(O.FRAMEBUFFER,Ee.__webglFramebuffer),C.copy(A.viewport),J.copy(A.scissor),ne=A.scissorTest,E.viewport(C),E.scissor(J),E.setScissorTest(ne),V=-1;return}else if(Ee.__webglFramebuffer===void 0)Q.setupRenderTarget(A);else if(Ee.__hasExternalTextures)Q.rebindTextures(A,K.get(A.texture).__webglTexture,K.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const We=A.depthTexture;if(Ee.__boundDepthTexture!==We){if(We!==null&&K.has(We)&&(A.width!==We.image.width||A.height!==We.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Q.setupDepthRenderbuffer(A)}}const Pe=A.texture;(Pe.isData3DTexture||Pe.isDataArrayTexture||Pe.isCompressedArrayTexture)&&(Te=!0);const De=K.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(De[U])?$=De[U][Z]:$=De[U],q=!0):A.samples>0&&Q.useMultisampledRTT(A)===!1?$=K.get(A).__webglMultisampledFramebuffer:Array.isArray(De)?$=De[Z]:$=De,C.copy(A.viewport),J.copy(A.scissor),ne=A.scissorTest}else C.copy(oe).multiplyScalar(H).floor(),J.copy(Ae).multiplyScalar(H).floor(),ne=Xe;if(Z!==0&&($=Y),E.bindFramebuffer(O.FRAMEBUFFER,$)&&E.drawBuffers(A,$),E.viewport(C),E.scissor(J),E.setScissorTest(ne),q){const Ee=K.get(A.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+U,Ee.__webglTexture,Z)}else if(Te){const Ee=U;for(let Pe=0;Pe<A.textures.length;Pe++){const De=K.get(A.textures[Pe]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+Pe,De.__webglTexture,Z,Ee)}}else if(A!==null&&Z!==0){const Ee=K.get(A.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Ee.__webglTexture,Z)}V=-1};function tg(A){const U=K.get(A);return(U.__readFormat!==A.format||U.__readType!==A.type)&&(U.__readFormat=A.format,U.__readType=A.type,U.__formatReadable=N.textureFormatReadable(A.format),U.__typeReadable=N.textureTypeReadable(A.type)),U}this.readRenderTargetPixels=function(A,U,Z,$,q,Te,Ce,Ee=0){if(!(A&&A.isWebGLRenderTarget)){it("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=K.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ce!==void 0&&(Pe=Pe[Ce]),Pe){E.bindFramebuffer(O.FRAMEBUFFER,Pe);try{const De=A.textures[Ee],We=De.format,$e=De.type;A.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+Ee);const Ne=tg(De);if(Ne.__formatReadable===!1){it("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ne.__typeReadable===!1){it("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=A.width-$&&Z>=0&&Z<=A.height-q&&O.readPixels(U,Z,$,q,ye.convert(We),ye.convert($e),Te)}finally{const De=z!==null?K.get(z).__webglFramebuffer:null;E.bindFramebuffer(O.FRAMEBUFFER,De)}}},this.readRenderTargetPixelsAsync=async function(A,U,Z,$,q,Te,Ce,Ee=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pe=K.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ce!==void 0&&(Pe=Pe[Ce]),Pe)if(U>=0&&U<=A.width-$&&Z>=0&&Z<=A.height-q){E.bindFramebuffer(O.FRAMEBUFFER,Pe);const De=A.textures[Ee],We=De.format,$e=De.type;A.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+Ee);const Ne=tg(De);if(Ne.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ne.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const at=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,at),O.bufferData(O.PIXEL_PACK_BUFFER,Te.byteLength,O.STREAM_READ),O.readPixels(U,Z,$,q,ye.convert(We),ye.convert($e),0),O.bindBuffer(O.PIXEL_PACK_BUFFER,null);const Ut=z!==null?K.get(z).__webglFramebuffer:null;E.bindFramebuffer(O.FRAMEBUFFER,Ut);const vt=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await JR(O,vt,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,at),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,Te),O.bindBuffer(O.PIXEL_PACK_BUFFER,null),O.deleteBuffer(at),O.deleteSync(vt),Te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,U=null,Z=0){const $=Math.pow(2,-Z),q=Math.floor(A.image.width*$),Te=Math.floor(A.image.height*$),Ce=U!==null?U.x:0,Ee=U!==null?U.y:0;Q.setTexture2D(A,0),O.copyTexSubImage2D(O.TEXTURE_2D,Z,0,0,Ce,Ee,q,Te),E.unbindTexture()},this.copyTextureToTexture=function(A,U,Z=null,$=null,q=0,Te=0){let Ce,Ee,Pe,De,We,$e,Ne,at,Ut;const vt=A.isCompressedTexture?A.mipmaps[Te]:A.image;if(Z!==null)Ce=Z.max.x-Z.min.x,Ee=Z.max.y-Z.min.y,Pe=Z.isBox3?Z.max.z-Z.min.z:1,De=Z.min.x,We=Z.min.y,$e=Z.isBox3?Z.min.z:0;else{const Lt=Math.pow(2,-q);Ce=Math.floor(vt.width*Lt),Ee=Math.floor(vt.height*Lt),A.isDataArrayTexture?Pe=vt.depth:A.isData3DTexture?Pe=Math.floor(vt.depth*Lt):Pe=1,De=0,We=0,$e=0}$!==null?(Ne=$.x,at=$.y,Ut=$.z):(Ne=0,at=0,Ut=0);const ut=ye.convert(U.format),Jt=ye.convert(U.type);let be;U.isData3DTexture?(Q.setTexture3D(U,0),be=O.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(Q.setTexture2DArray(U,0),be=O.TEXTURE_2D_ARRAY):(Q.setTexture2D(U,0),be=O.TEXTURE_2D),E.activeTexture(O.TEXTURE0),E.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,U.flipY),E.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),E.pixelStorei(O.UNPACK_ALIGNMENT,U.unpackAlignment);const cn=E.getParameter(O.UNPACK_ROW_LENGTH),tt=E.getParameter(O.UNPACK_IMAGE_HEIGHT),Bn=E.getParameter(O.UNPACK_SKIP_PIXELS),pi=E.getParameter(O.UNPACK_SKIP_ROWS),tr=E.getParameter(O.UNPACK_SKIP_IMAGES);E.pixelStorei(O.UNPACK_ROW_LENGTH,vt.width),E.pixelStorei(O.UNPACK_IMAGE_HEIGHT,vt.height),E.pixelStorei(O.UNPACK_SKIP_PIXELS,De),E.pixelStorei(O.UNPACK_SKIP_ROWS,We),E.pixelStorei(O.UNPACK_SKIP_IMAGES,$e);const gs=A.isDataArrayTexture||A.isData3DTexture,ct=U.isDataArrayTexture||U.isData3DTexture;if(A.isDepthTexture){const Lt=K.get(A),nr=K.get(U),ht=K.get(Lt.__renderTarget),ir=K.get(nr.__renderTarget);E.bindFramebuffer(O.READ_FRAMEBUFFER,ht.__webglFramebuffer),E.bindFramebuffer(O.DRAW_FRAMEBUFFER,ir.__webglFramebuffer);for(let vs=0;vs<Pe;vs++)gs&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,K.get(A).__webglTexture,q,$e+vs),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,K.get(U).__webglTexture,Te,Ut+vs)),O.blitFramebuffer(De,We,Ce,Ee,Ne,at,Ce,Ee,O.DEPTH_BUFFER_BIT,O.NEAREST);E.bindFramebuffer(O.READ_FRAMEBUFFER,null),E.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(q!==0||A.isRenderTargetTexture||K.has(A)){const Lt=K.get(A),nr=K.get(U);E.bindFramebuffer(O.READ_FRAMEBUFFER,k),E.bindFramebuffer(O.DRAW_FRAMEBUFFER,X);for(let ht=0;ht<Pe;ht++)gs?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Lt.__webglTexture,q,$e+ht):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Lt.__webglTexture,q),ct?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,nr.__webglTexture,Te,Ut+ht):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,nr.__webglTexture,Te),q!==0?O.blitFramebuffer(De,We,Ce,Ee,Ne,at,Ce,Ee,O.COLOR_BUFFER_BIT,O.NEAREST):ct?O.copyTexSubImage3D(be,Te,Ne,at,Ut+ht,De,We,Ce,Ee):O.copyTexSubImage2D(be,Te,Ne,at,De,We,Ce,Ee);E.bindFramebuffer(O.READ_FRAMEBUFFER,null),E.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else ct?A.isDataTexture||A.isData3DTexture?O.texSubImage3D(be,Te,Ne,at,Ut,Ce,Ee,Pe,ut,Jt,vt.data):U.isCompressedArrayTexture?O.compressedTexSubImage3D(be,Te,Ne,at,Ut,Ce,Ee,Pe,ut,vt.data):O.texSubImage3D(be,Te,Ne,at,Ut,Ce,Ee,Pe,ut,Jt,vt):A.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,Te,Ne,at,Ce,Ee,ut,Jt,vt.data):A.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,Te,Ne,at,vt.width,vt.height,ut,vt.data):O.texSubImage2D(O.TEXTURE_2D,Te,Ne,at,Ce,Ee,ut,Jt,vt);E.pixelStorei(O.UNPACK_ROW_LENGTH,cn),E.pixelStorei(O.UNPACK_IMAGE_HEIGHT,tt),E.pixelStorei(O.UNPACK_SKIP_PIXELS,Bn),E.pixelStorei(O.UNPACK_SKIP_ROWS,pi),E.pixelStorei(O.UNPACK_SKIP_IMAGES,tr),Te===0&&U.generateMipmaps&&O.generateMipmap(be),E.unbindTexture()},this.initRenderTarget=function(A){K.get(A).__webglFramebuffer===void 0&&Q.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?Q.setTextureCube(A,0):A.isData3DTexture?Q.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?Q.setTexture2DArray(A,0):Q.setTexture2D(A,0),E.unbindTexture()},this.resetState=function(){ee=0,W=0,z=null,E.reset(),we.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ei}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Je._getDrawingBufferColorSpace(e),n.unpackColorSpace=Je._getUnpackColorSpace()}}function OD(){const t=se.useRef(null);return se.useEffect(()=>{const e=t.current;if(!e)return;const n=new pP,i=e.clientWidth||480,r=e.clientHeight||480,s=new Cn(45,i/r,.1,1e3);s.position.z=5.5;const a=new FD({alpha:!0,antialias:!0,powerPreference:"high-performance"});a.setSize(i,r),a.setPixelRatio(Math.min(window.devicePixelRatio,2)),e.appendChild(a.domElement);const o=new UP(16777215,.8);n.add(o);const l=new Hd(62975,4,50);l.position.set(5,5,5),n.add(l);const c=new Hd(9133302,4,50);c.position.set(-5,-5,3),n.add(c);const d=new Hd(15485081,3,50);d.position.set(0,4,-3),n.add(d);const f=new es;n.add(f);const u=new Kc(1.2,1),p=new Vd({color:661807,emissive:62975,emissiveIntensity:.25,roughness:.2,metalness:.9,wireframe:!1,flatShading:!0}),x=new Nn(u,p);f.add(x);const M=new Kc(1.5,1),v=new Fm({color:62975,wireframe:!0,transparent:!0,opacity:.45}),h=new Nn(M,v);f.add(h);const g=new es;f.add(g);const S=(I,H,le,fe,oe)=>{const Ae=new Vm(I,H,16,100),Xe=new Vd({color:le,emissive:le,emissiveIntensity:.6,roughness:.3,metalness:.8}),_e=new Nn(Ae,Xe);return _e.rotation.x=fe,_e.rotation.y=oe,_e},_=S(2.1,.02,62975,Math.PI/3,0),T=S(2.35,.015,9133302,-Math.PI/4,Math.PI/6),w=S(1.85,.018,15485081,Math.PI/2,-Math.PI/5);g.add(_),g.add(T),g.add(w);const R=new es;f.add(R);const y=[62975,9133302,15485081,1096065],P=[];for(let I=0;I<8;I++){const H=new Bm(.06,16,16),le=new Vd({color:y[I%y.length],emissive:y[I%y.length],emissiveIntensity:1}),fe=new Nn(H,le),oe=I/8*Math.PI*2,Ae=2.1+I%3*.2;fe.position.set(Math.cos(oe)*Ae,Math.sin(oe)*.6,Math.sin(oe)*Ae),fe.userData={angle:oe,radius:Ae,speed:.01+I%3*.005},R.add(fe),P.push(fe)}const L=200,D=new Tn,B=new Float32Array(L*3),Y=new Float32Array(L*3),k=new Ze(62975),X=new Ze(9133302);for(let I=0;I<L;I++){const H=3+Math.random()*3,le=Math.random()*Math.PI*2,fe=Math.acos(2*Math.random()-1);B[I*3]=H*Math.sin(fe)*Math.cos(le),B[I*3+1]=H*Math.sin(fe)*Math.sin(le),B[I*3+2]=H*Math.cos(fe);const oe=k.clone().lerp(X,Math.random());Y[I*3]=oe.r,Y[I*3+1]=oe.g,Y[I*3+2]=oe.b}D.setAttribute("position",new di(B,3)),D.setAttribute("color",new di(Y,3));const ee=new HM({size:.04,vertexColors:!0,transparent:!0,opacity:.75,blending:ah}),W=new TP(D,ee);n.add(W);let z=0,V=0,b=0,C=0;const J=I=>{const H=e.getBoundingClientRect(),le=I.clientX-H.left-H.width/2,fe=I.clientY-H.top-H.height/2;b=le/H.width*2,C=-(fe/H.height)*2};window.addEventListener("mousemove",J);const ne=()=>{if(!e)return;const I=e.clientWidth,H=e.clientHeight;s.aspect=I/H,s.updateProjectionMatrix(),a.setSize(I,H)};window.addEventListener("resize",ne);let de,pe=new kP;const me=()=>{de=requestAnimationFrame(me);const I=pe.getElapsedTime();V=b*.6,z=C*.6,f.rotation.y+=(V-f.rotation.y)*.05,f.rotation.x+=(z-f.rotation.x)*.05,x.rotation.y+=.008,x.rotation.x+=.004,h.rotation.y-=.006,h.rotation.z+=.004,_.rotation.z+=.01,T.rotation.z-=.008,w.rotation.z+=.006,P.forEach(H=>{H.userData.angle+=H.userData.speed,H.position.x=Math.cos(H.userData.angle)*H.userData.radius,H.position.z=Math.sin(H.userData.angle)*H.userData.radius,H.position.y=Math.sin(H.userData.angle*2)*.4}),W.rotation.y=I*.03,W.rotation.x=Math.sin(I*.02)*.1,a.render(n,s)};return me(),()=>{cancelAnimationFrame(de),window.removeEventListener("mousemove",J),window.removeEventListener("resize",ne),e&&a.domElement&&e.removeChild(a.domElement),u.dispose(),p.dispose(),M.dispose(),v.dispose(),D.dispose(),ee.dispose(),a.dispose()}},[]),m.jsx("div",{ref:t,className:"hero-3d-canvas-container",style:{width:"100%",height:"100%",position:"relative",display:"flex",alignItems:"center",justifyContent:"center",touchAction:"pan-y",pointerEvents:"none"}})}function Ln({children:t,className:e="",maxTilt:n=12,scale:i=1.02,glare:r=!0,onClick:s,style:a={}}){const o=se.useRef(null),[l,c]=se.useState(""),[d,f]=se.useState({x:50,y:50,opacity:0}),u=x=>{if(!o.current||window.matchMedia&&window.matchMedia("(hover: none)").matches)return;const M=o.current.getBoundingClientRect(),v=x.clientX-M.left,h=x.clientY-M.top,g=M.width/2,S=M.height/2,_=(h-S)/S*-n,T=(v-g)/g*n,w=v/M.width*100,R=h/M.height*100;c(`perspective(1000px) rotateX(${_.toFixed(2)}deg) rotateY(${T.toFixed(2)}deg) scale3d(${i}, ${i}, ${i})`),r&&f({x:w,y:R,opacity:1})},p=()=>{c("perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)"),r&&f(x=>({...x,opacity:0}))};return m.jsxs("div",{ref:o,className:`tilt-card-wrapper ${e}`,onMouseMove:u,onMouseLeave:p,onClick:s,style:{transform:l,transition:"transform 0.18s ease-out, box-shadow 0.25s ease",transformStyle:"preserve-3d",position:"relative",...a},children:[t,r&&m.jsx("div",{style:{position:"absolute",inset:0,pointerEvents:"none",borderRadius:"inherit",background:`radial-gradient(circle at ${d.x}% ${d.y}%, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 65%)`,opacity:d.opacity,transition:"opacity 0.3s ease",zIndex:10}})]})}const kD=[{value:"2",label:"Tech Internships",icon:"fas fa-briefcase"},{value:"8.94",label:"MCA CGPA (Graduated)",icon:"fas fa-graduation-cap"},{value:"Java & Spring",label:"& React Full Stack",icon:"fas fa-layer-group"},{value:"IBM",label:"SkillsBuild Certified",icon:"fas fa-certificate"}];function BD(){return m.jsxs("section",{id:"home",className:"hero-section",children:[m.jsxs("div",{className:"hero-container",children:[m.jsxs("div",{className:"hero-text-col",children:[m.jsx(Nt.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},className:"hero-badge-wrapper",children:m.jsxs("div",{className:"status-pill",children:[m.jsx("span",{className:"status-dot"}),m.jsx("span",{children:"Available for Full Stack Software Opportunities"})]})}),m.jsxs(Nt.h1,{className:"hero-title",initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.6,delay:.15},children:["Engineering Scalable"," ",m.jsx("span",{className:"gradient-text",children:"Full Stack Systems"})]}),m.jsxs(Nt.div,{className:"hero-typewriter-box",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.3},children:[m.jsx("span",{className:"typewriter-prefix",children:"Sourabh Sajane — "}),m.jsx(mR,{sequence:["Full Stack Developer",2200,"Java & Spring Boot Engineer",2200,"React.js Specialist",2200,"MCA Graduate • CGPA 8.94",2200,"GenAI & Prompt Engineering",2200],wrapper:"span",speed:45,repeat:1/0,className:"typewriter-dynamic"})]}),m.jsxs(Nt.p,{className:"hero-desc",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.45},children:["Full Stack Developer experienced in Java, Spring Boot, React.js, JavaScript, Angular, and REST APIs. Hands-on experience building production web apps through internships at ",m.jsx("strong",{children:"Tap Academy"})," and"," ",m.jsx("strong",{children:"Edutainer"}),", with database engineering in MySQL and Supabase."]}),m.jsxs(Nt.div,{className:"hero-actions",initial:{opacity:0,y:25},animate:{opacity:1,y:0},transition:{duration:.5,delay:.6},children:[m.jsxs("a",{href:"#experience",className:"btn btn-primary",children:[m.jsx("span",{children:"View Experience"}),m.jsx("i",{className:"fas fa-arrow-right"})]}),m.jsxs("a",{href:"/portfolio/Sourabh_Resume.pdf",download:"Sourabh_Sajane_Resume.pdf",className:"btn btn-secondary",children:[m.jsx("i",{className:"fas fa-file-arrow-down"}),m.jsx("span",{children:"Download Resume"})]}),m.jsxs("a",{href:"#contact",className:"btn btn-secondary",children:[m.jsx("i",{className:"fas fa-paper-plane"}),m.jsx("span",{children:"Contact"})]})]}),m.jsx(Nt.div,{className:"hero-stats-grid",initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.6,delay:.75},children:kD.map(t=>m.jsx(Ln,{maxTilt:10,className:"stat-card",children:m.jsxs("div",{className:"stat-card-inner",children:[m.jsx("div",{className:"stat-icon",children:m.jsx("i",{className:t.icon})}),m.jsxs("div",{className:"stat-info",children:[m.jsx("span",{className:"stat-val gradient-cyan-purple",children:t.value}),m.jsx("span",{className:"stat-name",children:t.label})]})]})},t.label))})]}),m.jsx(Nt.div,{className:"hero-3d-col",initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:.8,delay:.4},children:m.jsxs("div",{className:"hero-3d-wrapper",children:[m.jsx(OD,{}),m.jsxs("div",{className:"floating-chip chip-react",children:[m.jsx("i",{className:"fab fa-react"}),m.jsx("span",{children:"React.js"})]}),m.jsxs("div",{className:"floating-chip chip-node",children:[m.jsx("i",{className:"fas fa-leaf"}),m.jsx("span",{children:"Java & Spring Boot"})]}),m.jsxs("div",{className:"floating-chip chip-db",children:[m.jsx("i",{className:"fas fa-database"}),m.jsx("span",{children:"MySQL & Supabase"})]}),m.jsxs("div",{className:"floating-chip chip-cert",children:[m.jsx("i",{className:"fas fa-robot"}),m.jsx("span",{children:"GenAI & Prompt Eng."})]}),m.jsxs("div",{className:"canvas-badge",children:[m.jsx("i",{className:"fas fa-cube"}),m.jsx("span",{children:"Interactive 3D Core • Move Cursor"})]})]})})]}),m.jsxs("a",{href:"#about",className:"hero-scroll-cue","aria-label":"Scroll to About section",children:[m.jsx("span",{className:"cue-mouse",children:m.jsx("span",{className:"cue-wheel"})}),m.jsx("span",{className:"cue-text",children:"Scroll Down"})]})]})}var Zh=new Map,jl=new WeakMap,Ax=0,VD=void 0;function zD(t){return t?(jl.has(t)||(Ax+=1,jl.set(t,Ax.toString())),jl.get(t)):"0"}function HD(t){return Object.keys(t).sort().filter(e=>t[e]!==void 0).map(e=>`${e}_${e==="root"?zD(t.root):t[e]}`).toString()}function GD(t){const e=HD(t);let n=Zh.get(e);if(!n){const i=new Map;let r;const s=new IntersectionObserver(a=>{a.forEach(o=>{var l;const c=o.isIntersecting&&r.some(d=>o.intersectionRatio>=d);t.trackVisibility&&typeof o.isVisible>"u"&&(o.isVisible=c),(l=i.get(o.target))==null||l.forEach(d=>{d(c,o)})})},t);r=s.thresholds||(Array.isArray(t.threshold)?t.threshold:[t.threshold||0]),n={id:e,observer:s,elements:i},Zh.set(e,n)}return n}function WD(t,e,n={},i=VD){if(typeof window.IntersectionObserver>"u"&&i!==void 0){const l=t.getBoundingClientRect();return e(i,{isIntersecting:i,target:t,intersectionRatio:typeof n.threshold=="number"?n.threshold:0,time:0,boundingClientRect:l,intersectionRect:l,rootBounds:l}),()=>{}}const{id:r,observer:s,elements:a}=GD(n),o=a.get(t)||[];return a.has(t)||a.set(t,o),o.push(e),s.observe(t),function(){o.splice(o.indexOf(e),1),o.length===0&&(a.delete(t),s.unobserve(t)),a.size===0&&(s.disconnect(),Zh.delete(r))}}function wa({threshold:t,delay:e,trackVisibility:n,rootMargin:i,root:r,triggerOnce:s,skip:a,initialInView:o,fallbackInView:l,onChange:c}={}){var d;const[f,u]=se.useState(null),p=se.useRef(c),[x,M]=se.useState({inView:!!o,entry:void 0});p.current=c,se.useEffect(()=>{if(a||!f)return;let S;return S=WD(f,(_,T)=>{M({inView:_,entry:T}),p.current&&p.current(_,T),T.isIntersecting&&s&&S&&(S(),S=void 0)},{root:r,rootMargin:i,threshold:t,trackVisibility:n,delay:e},l),()=>{S&&S()}},[Array.isArray(t)?t.toString():t,f,r,i,s,a,n,l,e]);const v=(d=x.entry)==null?void 0:d.target,h=se.useRef(void 0);!f&&v&&!s&&!a&&h.current!==v&&(h.current=v,M({inView:!!o,entry:void 0}));const g=[u,x.inView,x.entry];return g.ref=g[0],g.inView=g[1],g.entry=g[2],g}const qd={"Developer.ts":`// developer.ts
export const developer: FullStackDeveloper = {
  name: "Sourabh Sajane",
  role: "Full Stack Developer",
  status: "🟢 Open to Software Engineering Opportunities",
  contact: {
    phone: "8618421208",
    email: "sourabhsajane121@gmail.com",
    github: "github.com/sourabhsajane",
    linkedin: "linkedin.com/in/sourabh-sajane",
    website: "sourabhsajane.github.io"
  },
  internships: [
    {
      company: "Tap Academy",
      role: "Full Stack Java Developer Intern",
      period: "Feb 2026 – Aug 2026",
      tech: ["Java", "Spring Boot", "REST APIs", "MySQL", "React"]
    },
    {
      company: "Edutainer",
      role: "Software Development Intern",
      period: "Feb 2026 – May 2026",
      tech: ["React.js", "JavaScript", "HTML5", "CSS3"]
    }
  ],
  education: {
    mca: {
      degree: "Master of Computer Applications (MCA)",
      institution: "Jain College of Engineering, Belagavi",
      cgpa: 8.94,
      period: "2024 – 2026",
      status: "Graduated"
    },
    bsc: {
      degree: "Bachelor of Science",
      institution: "KLE GI Bagewadi College, Nippani",
      cgpa: 7.79,
      period: "2020 – 2023"
    }
  },
  achievements: [
    "SudurCodeX TechFusion 2026 Hackathon Participant",
    "IBM SkillsBuild: Artificial Intelligence Fundamentals Certified",
    "IBM SkillsBuild: Customer Engagement Certified"
  ]
};`,"TechStack.json":`{
  "programmingLanguages": [
    "Java",
    "JavaScript",
    "C"
  ],
  "frontendDevelopment": [
    "React.js",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "Bootstrap",
    "Angular",
    "Responsive Web Design"
  ],
  "backendDevelopment": [
    "Spring Boot",
    "Node.js",
    "Express.js",
    "REST APIs"
  ],
  "databases": [
    "MySQL",
    "Supabase"
  ],
  "toolsAndPlatforms": [
    "Git",
    "GitHub",
    "VS Code",
    "Kiro",
    "Cursor",
    "Claude"
  ],
  "additionalTechnologies": [
    "Generative AI & Prompt Engineering"
  ]
}`,"CareerObjective.md":`# Career Objective

Full Stack Developer with experience in **Java, Spring Boot, Angular, React.js, JavaScript, and REST APIs**.

- **Hands-on Experience**: Building web applications through internships and project work, including backend services with Spring Boot and MySQL, frontend interfaces with React.js, and database integration with Supabase.
- **Cross-Layer Comfort**: Comfortable working across frontend, backend, and database layers.
- **AI-Augmented Engineering**: Additional experience using Generative AI-assisted tools (Cursor, Claude, Kiro) for rapid development and debugging workflows.`};function jD(){const[t,e]=wa({threshold:.15,triggerOnce:!0}),[n,i]=se.useState("Developer.ts"),[r,s]=se.useState(!1),a=()=>{navigator.clipboard.writeText(qd[n]),s(!0),setTimeout(()=>s(!1),2e3)},o=l=>l.split(`
`).map((d,f)=>m.jsxs("div",{className:"code-line",children:[m.jsx("span",{className:"line-no",children:f+1}),m.jsx("span",{className:"line-content",children:d})]},f));return m.jsx("section",{id:"about",className:"about-section",ref:t,children:m.jsxs("div",{className:"section",children:[m.jsxs("div",{className:"section-header",children:[m.jsxs("span",{className:"section-eyebrow",children:[m.jsx("i",{className:"fas fa-terminal"})," Developer Profile / Career"]}),m.jsxs("h2",{className:"section-title",children:["About ",m.jsx("span",{className:"gradient-text",children:"Me"})]}),m.jsx("p",{className:"section-subtitle",children:"Full Stack Developer specializing in Java, Spring Boot, React.js, and Generative AI-assisted engineering."})]}),m.jsxs("div",{className:"about-grid",children:[m.jsx(Nt.div,{className:"ide-container",initial:{opacity:0,y:30},animate:e?{opacity:1,y:0}:{},transition:{duration:.6},children:m.jsxs("div",{className:"ide-window glass-card",children:[m.jsxs("div",{className:"ide-header",children:[m.jsxs("div",{className:"window-dots",children:[m.jsx("span",{className:"dot red"}),m.jsx("span",{className:"dot yellow"}),m.jsx("span",{className:"dot green"})]}),m.jsx("div",{className:"ide-tabs",children:Object.keys(qd).map(l=>m.jsxs("button",{className:`ide-tab ${n===l?"active":""}`,onClick:()=>i(l),children:[m.jsx("i",{className:l.endsWith(".ts")?"fas fa-code code-ts":l.endsWith(".json")?"fas fa-brackets-curly code-json":"fas fa-file-alt code-md"}),m.jsx("span",{children:l})]},l))}),m.jsxs("button",{className:"ide-copy-btn",onClick:a,title:"Copy code to clipboard","aria-label":"Copy file content",children:[m.jsx("i",{className:r?"fas fa-check text-green":"fas fa-copy"}),m.jsx("span",{children:r?"Copied!":"Copy"})]})]}),m.jsx("div",{className:"ide-body",children:m.jsx("div",{className:"code-viewer",children:o(qd[n])})})]})}),m.jsx(Nt.div,{className:"about-bio-col",initial:{opacity:0,y:30},animate:e?{opacity:1,y:0}:{},transition:{duration:.6,delay:.15},children:m.jsxs("div",{className:"bio-card glass-card",children:[m.jsx("h3",{className:"bio-heading",children:"Building Production Software Across the Full Stack"}),m.jsxs("p",{className:"bio-text",children:["I am a Full Stack Developer with an MCA degree from"," ",m.jsx("strong",{style:{color:"var(--cyan)"},children:"Jain College of Engineering, Belagavi"})," (CGPA: 8.94). With hands-on experience through internships at"," ",m.jsx("strong",{style:{color:"var(--purple)"},children:"Tap Academy"})," and"," ",m.jsx("strong",{style:{color:"var(--pink)"},children:"Edutainer"}),", I engineer robust backend services with Spring Boot and MySQL, and intuitive frontend interfaces with React.js."]}),m.jsx("p",{className:"bio-text",children:"Comfortable working across frontend, backend, and database layers, I also leverage modern Generative AI-assisted development tools (Cursor, Claude, Kiro) to accelerate debugging, testing, and delivery."}),m.jsxs("div",{className:"about-highlights-grid",children:[m.jsxs(Ln,{maxTilt:8,className:"highlight-item",children:[m.jsx("div",{className:"highlight-icon icon-cyan",children:m.jsx("i",{className:"fas fa-leaf"})}),m.jsxs("div",{children:[m.jsx("h4",{children:"Java & Spring Boot"}),m.jsx("p",{children:"REST APIs & MySQL Backend Services"})]})]}),m.jsxs(Ln,{maxTilt:8,className:"highlight-item",children:[m.jsx("div",{className:"highlight-icon icon-purple",children:m.jsx("i",{className:"fab fa-react"})}),m.jsxs("div",{children:[m.jsx("h4",{children:"React.js & Angular"}),m.jsx("p",{children:"Reusable Components & Responsive UI"})]})]}),m.jsxs(Ln,{maxTilt:8,className:"highlight-item",children:[m.jsx("div",{className:"highlight-icon icon-green",children:m.jsx("i",{className:"fas fa-graduation-cap"})}),m.jsxs("div",{children:[m.jsx("h4",{children:"MCA • CGPA 8.94"}),m.jsx("p",{children:"Jain College of Engineering, Belagavi"})]})]}),m.jsxs(Ln,{maxTilt:8,className:"highlight-item",children:[m.jsx("div",{className:"highlight-icon icon-pink",children:m.jsx("i",{className:"fas fa-trophy"})}),m.jsxs("div",{children:[m.jsx("h4",{children:"Hackathon Participant"}),m.jsx("p",{children:"SudurCodeX TechFusion 2026"})]})]})]}),m.jsxs("div",{className:"about-cta-row",children:[m.jsxs("a",{href:"#experience",className:"btn btn-primary btn-sm",children:[m.jsx("span",{children:"Work Experience"}),m.jsx("i",{className:"fas fa-arrow-right"})]}),m.jsxs("a",{href:"#contact",className:"btn btn-secondary btn-sm",children:[m.jsx("span",{children:"Get In Touch"}),m.jsx("i",{className:"fas fa-envelope"})]})]})]})})]})]})})}const XD=[{role:"Full Stack Java Developer Intern",company:"Tap Academy",period:"Feb 2026 – Aug 2026",status:"Active Internship",color:"#00f5ff",icon:"fab fa-java",tech:["Java","Spring Boot","REST APIs","MySQL","React.js","Generative AI"],bullets:["Developing full-stack web applications using Java, Spring Boot, REST APIs, MySQL, and React.","Building backend services and database-driven application features using Spring Boot and MySQL.","Developing and integrating REST API endpoints with React-based frontend components.","Testing and debugging backend functionality to ensure reliable integration across application components.","Using Generative AI-assisted development tools to support coding and debugging workflows."]},{role:"Software Development Intern",company:"Edutainer",period:"Feb 2026 – May 2026",status:"Completed",color:"#8b5cf6",icon:"fab fa-react",tech:["React.js","JavaScript","HTML5","CSS3","Responsive UI"],bullets:["Built and implemented reusable frontend components using React.js and JavaScript to develop responsive web interfaces.","Translated UI designs into functional, responsive layouts using React.js, HTML5, and CSS3.","Debugged and tested frontend code to identify and resolve UI and functionality issues.","Collaborated with the development team to integrate frontend components into the broader application."]}];function YD(){const[t,e]=wa({threshold:.1,triggerOnce:!0});return m.jsx("section",{id:"experience",className:"experience-section",ref:t,children:m.jsxs("div",{className:"section",children:[m.jsxs("div",{className:"section-header",children:[m.jsxs("span",{className:"section-eyebrow",children:[m.jsx("i",{className:"fas fa-briefcase"})," Work History / Industry"]}),m.jsxs("h2",{className:"section-title",children:["Professional ",m.jsx("span",{className:"gradient-text",children:"Experience"})]}),m.jsx("p",{className:"section-subtitle",children:"Hands-on software development internships building enterprise Java services, React interfaces, and AI workflows."})]}),m.jsx("div",{className:"experience-timeline",children:XD.map((n,i)=>m.jsx(Nt.div,{initial:{opacity:0,y:35},animate:e?{opacity:1,y:0}:{},transition:{duration:.6,delay:i*.2},children:m.jsx(Ln,{maxTilt:6,className:"exp-tilt-card",style:{"--exp-color":n.color},children:m.jsxs("div",{className:"exp-card glass-card",children:[m.jsxs("div",{className:"exp-header",children:[m.jsxs("div",{className:"exp-role-wrap",children:[m.jsx("div",{className:"exp-company-icon",style:{backgroundColor:`${n.color}15`,color:n.color,borderColor:`${n.color}35`},children:m.jsx("i",{className:n.icon})}),m.jsxs("div",{children:[m.jsx("h3",{className:"exp-role",children:n.role}),m.jsxs("div",{className:"exp-company-sub",children:[m.jsx("span",{className:"exp-company",style:{color:n.color},children:n.company}),m.jsx("span",{className:"exp-dot",children:"•"}),m.jsx("span",{className:"exp-period font-mono",children:n.period})]})]})]}),m.jsxs("span",{className:"exp-status-badge",style:{borderColor:`${n.color}40`,color:n.color,backgroundColor:`${n.color}10`},children:[m.jsx("span",{className:"status-dot",style:{backgroundColor:n.color}}),n.status]})]}),m.jsx("ul",{className:"exp-bullets",children:n.bullets.map((r,s)=>m.jsxs("li",{children:[m.jsx("i",{className:"fas fa-angle-right",style:{color:n.color}}),m.jsx("span",{children:r})]},s))}),m.jsx("div",{className:"exp-tech-row",children:n.tech.map(r=>m.jsx("span",{className:"exp-tech-chip",children:r},r))})]})})},n.company+n.role))})]})})}const $D=["All","Programming Languages","Frontend Development","Backend Development","Databases","Tools & AI"],bx=[{name:"Java",category:"Programming Languages",type:"Core Language",icon:"fab fa-java",color:"#ea2d2e",desc:"Object-oriented application development, backend logic, and scalable enterprise services."},{name:"JavaScript",category:"Programming Languages",type:"Core Language",icon:"fab fa-js-square",color:"#f7df1e",desc:"Dynamic frontend reactivity, asynchronous scripting, and full-stack web architectures."},{name:"C",category:"Programming Languages",type:"Systems Language",icon:"fas fa-terminal",color:"#659ad2",desc:"Fundamental computing principles, structured programming, and memory concepts."},{name:"React.js",category:"Frontend Development",type:"Frontend Library",icon:"fab fa-react",color:"#00f5ff",desc:"Reusable component architecture, declarative state management, and modern SPA interfaces."},{name:"HTML5",category:"Frontend Development",type:"Web Markup",icon:"fab fa-html5",color:"#f97316",desc:"Clean semantic structure, accessibility standards, and SEO-optimized web documents."},{name:"CSS3",category:"Frontend Development",type:"Styling & Motion",icon:"fab fa-css3-alt",color:"#38bdf8",desc:"Modern styling systems, keyframe animations, glassmorphism, and visual fidelity."},{name:"Tailwind CSS",category:"Frontend Development",type:"CSS Framework",icon:"fas fa-wind",color:"#06b6d4",desc:"Utility-first styling methodology for rapid, clean, and consistent UI design."},{name:"Bootstrap",category:"Frontend Development",type:"UI Toolkit",icon:"fab fa-bootstrap",color:"#a855f7",desc:"Mobile-first responsive grid layouts, predefined UI components, and rapid prototyping."},{name:"Angular",category:"Frontend Development",type:"Frontend Framework",icon:"fab fa-angular",color:"#ef4444",desc:"Structured single-page applications with TypeScript components and modular routing."},{name:"Responsive Web Design",category:"Frontend Development",type:"Design Standard",icon:"fas fa-mobile-screen-button",color:"#10b981",desc:"Cross-device fluid responsiveness ensuring optimal viewing on mobile, tablet, and desktop."},{name:"Spring Boot",category:"Backend Development",type:"Enterprise Framework",icon:"fas fa-leaf",color:"#4ade80",desc:"Enterprise-grade Java backend microservices, dependency injection, and data persistence."},{name:"Node.js",category:"Backend Development",type:"Runtime Environment",icon:"fab fa-node-js",color:"#22c55e",desc:"High-performance asynchronous event-driven JavaScript server environments."},{name:"Express.js",category:"Backend Development",type:"Backend Framework",icon:"fas fa-server",color:"#e2e8f0",desc:"Lightweight web application framework for building secure and scalable RESTful APIs."},{name:"REST APIs",category:"Backend Development",type:"API Architecture",icon:"fas fa-network-wired",color:"#818cf8",desc:"Standardized HTTP endpoint design, request routing, JSON payloads, and integration."},{name:"MySQL",category:"Databases",type:"Relational Database",icon:"fas fa-database",color:"#38bdf8",desc:"Relational database schema modeling, data integrity, transactions, and optimized queries."},{name:"Supabase",category:"Databases",type:"Cloud Database",icon:"fas fa-bolt",color:"#34d399",desc:"Cloud PostgreSQL with real-time data synchronization, secure auth, and storage."},{name:"Git & GitHub",category:"Tools & AI",type:"Version Control",icon:"fab fa-github",color:"#fb923c",desc:"Distributed source control, branch management, collaborative code reviews, and releases."},{name:"VS Code",category:"Tools & AI",type:"Development Environment",icon:"fas fa-laptop-code",color:"#38bdf8",desc:"Code authoring, linting, extensions, debugging environments, and terminal workflows."},{name:"Cursor & Kiro",category:"Tools & AI",type:"AI Coding Tools",icon:"fas fa-code-merge",color:"#a78bfa",desc:"AI-assisted code generation, rapid refactoring, and modern developer tooling."},{name:"Claude & Generative AI",category:"Tools & AI",type:"AI Engineering",icon:"fas fa-robot",color:"#ec4899",desc:"Prompt engineering and generative AI workflows to accelerate development and debugging."}];function qD(){const[t,e]=se.useState("All"),[n]=wa({threshold:.1,triggerOnce:!0}),i=t==="All"?bx:bx.filter(r=>r.category===t);return m.jsx("section",{id:"skills",className:"skills-section",ref:n,children:m.jsxs("div",{className:"section",children:[m.jsxs("div",{className:"section-header",children:[m.jsxs("span",{className:"section-eyebrow",children:[m.jsx("i",{className:"fas fa-microchip"})," Resume Skillset"]}),m.jsxs("h2",{className:"section-title",children:["Technical ",m.jsx("span",{className:"gradient-text",children:"Skills"})]}),m.jsx("p",{className:"section-subtitle",children:"Core technologies and platforms verified through internships, academic coursework, and production projects."})]}),m.jsxs("div",{className:"skills-recruiter-banner glass-card",children:[m.jsxs("div",{className:"recruiter-stat-item",children:[m.jsx("i",{className:"fas fa-code text-cyan"}),m.jsxs("div",{children:[m.jsx("strong",{children:"Java & JavaScript"}),m.jsx("span",{children:"Core Programming"})]})]}),m.jsx("div",{className:"recruiter-stat-sep"}),m.jsxs("div",{className:"recruiter-stat-item",children:[m.jsx("i",{className:"fas fa-layer-group text-purple"}),m.jsxs("div",{children:[m.jsx("strong",{children:"Spring Boot & React"}),m.jsx("span",{children:"Full-Stack Development"})]})]}),m.jsx("div",{className:"recruiter-stat-sep"}),m.jsxs("div",{className:"recruiter-stat-item",children:[m.jsx("i",{className:"fas fa-robot text-green"}),m.jsxs("div",{children:[m.jsx("strong",{children:"Generative AI & Tools"}),m.jsx("span",{children:"Cursor, Claude & Prompt Eng."})]})]})]}),m.jsx("div",{className:"skills-filter-row",children:$D.map(r=>m.jsx("button",{className:`filter-btn ${t===r?"active":""}`,onClick:()=>e(r),children:r},r))}),m.jsx(Nt.div,{layout:!0,className:"skills-grid",children:m.jsx(mu,{children:i.map(r=>m.jsx(Nt.div,{layout:!0,initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.9},transition:{duration:.25},children:m.jsx(Ln,{maxTilt:10,className:"skill-tilt-card",style:{"--skill-accent":r.color},children:m.jsxs("div",{className:"skill-card-body",children:[m.jsxs("div",{className:"skill-top-bar",children:[m.jsx("div",{className:"skill-icon-wrap",style:{backgroundColor:`${r.color}15`,color:r.color},children:m.jsx("i",{className:r.icon})}),m.jsx("span",{className:"skill-type-pill",style:{borderColor:`${r.color}35`,color:r.color,backgroundColor:`${r.color}10`},children:r.type})]}),m.jsx("h3",{className:"skill-title",children:r.name}),m.jsx("p",{className:"skill-desc",children:r.desc})]})})},r.name))})})]})})}const KD=[{id:"hirefy",num:"01",title:"Hirefy – Recruitment Platform",subtitle:"Full-Stack Role-Based Job Portal with Real-Time Database",desc:"Full-stack recruitment platform built with React.js, Node.js, Express.js, and Supabase providing role-based functionality for candidates, recruiters, and administrators.",longDesc:"Developed a comprehensive full-stack recruitment platform featuring dedicated workflows for candidates, recruiters, and platform administrators. Implemented robust authentication and role-based access control to securely partition permissions, created backend services using Node.js and Express.js for job postings, resume submissions, and applicant tracking, and integrated Supabase for scalable database storage and user management.",tech:["JavaScript","React.js","HTML5","CSS3","Bootstrap","Node.js","Express.js","Supabase"],features:["Role-based access control (RBAC) securely segregating candidate, recruiter, and administrator roles.","Backend endpoints built with Node.js and Express.js supporting job postings, resume creation, and real-time application tracking.","Supabase cloud database integration with relational tables and automated user management.","Responsive, mobile-friendly interface designed with React.js and Bootstrap."],github:"https://github.com/sourabhsajane",live:"https://github.com/sourabhsajane",color:"#8b5cf6",icon:"fas fa-briefcase",badge:"Resume Featured Project"},{id:"java-spring-service",num:"02",title:"Full Stack Java & Spring Boot Application",subtitle:"Enterprise Backend Services & RESTful API Endpoints",desc:"End-to-end full-stack web application featuring Spring Boot backend services, relational MySQL data persistence, and React frontend integration.",longDesc:"Engineered enterprise web services using Java and Spring Boot, establishing secure REST API endpoints and transactional database operations with MySQL. Designed with separation of concerns between controller, service, and repository layers, and integrated seamlessly with React frontend components.",tech:["Java","Spring Boot","REST APIs","MySQL","React.js","Maven"],features:["Structured Spring Boot backend services with robust dependency injection and modular controllers.","Relational database architecture utilizing MySQL with optimized queries and data integrity.","REST API endpoints tested and integrated with React frontend components.","Applied Generative AI development tools for accelerated debugging and test-driven workflows."],github:"https://github.com/sourabhsajane",live:"https://github.com/sourabhsajane",color:"#00f5ff",icon:"fas fa-leaf",badge:"Enterprise Full Stack"},{id:"portfolio-3d",num:"03",title:"Interactive 3D WebGL Portfolio",subtitle:"Modern Motion Architecture & Three.js Graphics",desc:"High-performance interactive web application built with React.js and Three.js featuring real-time WebGL graphics, 3D physics cards, and responsive design.",longDesc:"Engineered an interactive 3D web application utilizing React.js, Three.js, and Framer Motion. Features a dynamic holographic Cyber-Core responding to cursor physics, 3D perspective tilt calculations, and a complete dark glassmorphism design system.",tech:["React.js","Three.js","JavaScript","HTML5","CSS3","Vite"],features:["Three.js WebGL canvas with interactive orbital particles and real-time mouse tracking.","Custom physics-based 3D card tilt component with specular glare calculations.","Clean semantic HTML5 structure, responsive layout, and zero third-party UI framework bloat.","Optimized Vite build pipeline with fast hot module replacement."],github:"https://github.com/sourabhsajane/portfolio",live:"https://sourabhsajane.github.io/portfolio/",color:"#ec4899",icon:"fas fa-cube",badge:"3D WebGL & React"}];function ZD(){const[t,e]=wa({threshold:.1,triggerOnce:!0}),[n,i]=se.useState(null);return m.jsxs("section",{id:"projects",className:"projects-section",ref:t,children:[m.jsxs("div",{className:"section",children:[m.jsxs("div",{className:"section-header",children:[m.jsxs("span",{className:"section-eyebrow",children:[m.jsx("i",{className:"fas fa-folder-open"})," Portfolio / Works"]}),m.jsxs("h2",{className:"section-title",children:["Featured ",m.jsx("span",{className:"gradient-text",children:"Projects"})]}),m.jsx("p",{className:"section-subtitle",children:"Web applications and systems built with Java, Spring Boot, React.js, Node.js, and Supabase."})]}),m.jsx("div",{className:"projects-cards-grid",children:KD.map((r,s)=>m.jsx(Nt.div,{initial:{opacity:0,y:40},animate:e?{opacity:1,y:0}:{},transition:{duration:.6,delay:s*.18},children:m.jsx(Ln,{maxTilt:8,className:"project-tilt-container",style:{"--proj-color":r.color},children:m.jsxs("div",{className:"project-card-surface",children:[m.jsxs("div",{className:"proj-top-bar",children:[m.jsx("span",{className:"proj-num font-mono",children:r.num}),m.jsx("span",{className:"proj-badge",style:{borderColor:`${r.color}55`,color:r.color},children:r.badge})]}),m.jsxs("div",{className:"proj-heading-area",children:[m.jsx("div",{className:"proj-icon-box",style:{backgroundColor:`${r.color}15`,color:r.color},children:m.jsx("i",{className:r.icon})}),m.jsxs("div",{children:[m.jsx("h3",{className:"proj-title",children:r.title}),m.jsx("p",{className:"proj-subtitle",children:r.subtitle})]})]}),m.jsx("p",{className:"proj-desc",children:r.desc}),m.jsx("div",{className:"proj-tech-tags",children:r.tech.map(a=>m.jsx("span",{className:"tech-tag",children:a},a))}),m.jsxs("div",{className:"proj-action-bar",children:[m.jsxs("button",{className:"proj-details-btn",onClick:()=>i(r),children:[m.jsx("i",{className:"fas fa-circle-info"}),m.jsx("span",{children:"Details & Architecture"})]}),m.jsxs("div",{className:"proj-links",children:[m.jsx("a",{href:r.github,target:"_blank",rel:"noreferrer",className:"proj-link-icon",title:"View Code on GitHub","aria-label":"View Code on GitHub",children:m.jsx("i",{className:"fab fa-github"})}),r.live&&m.jsx("a",{href:r.live,target:"_blank",rel:"noreferrer",className:"proj-link-icon",title:"Open Live Preview","aria-label":"Open Live Preview",children:m.jsx("i",{className:"fas fa-arrow-up-right-from-square"})})]})]})]})})},r.id))})]}),m.jsx(mu,{children:n&&m.jsx("div",{className:"modal-backdrop",onClick:()=>i(null),children:m.jsxs(Nt.div,{className:"modal-content glass-card",initial:{opacity:0,scale:.9,y:20},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.9,y:20},transition:{duration:.25},onClick:r=>r.stopPropagation(),children:[m.jsxs("div",{className:"modal-header",children:[m.jsxs("div",{className:"modal-title-group",children:[m.jsx("div",{className:"modal-icon",style:{backgroundColor:`${n.color}20`,color:n.color},children:m.jsx("i",{className:n.icon})}),m.jsxs("div",{children:[m.jsx("h3",{children:n.title}),m.jsx("span",{className:"modal-badge",style:{color:n.color},children:n.badge})]})]}),m.jsx("button",{className:"modal-close-btn",onClick:()=>i(null),"aria-label":"Close modal",children:m.jsx("i",{className:"fas fa-xmark"})})]}),m.jsxs("div",{className:"modal-body",children:[m.jsx("p",{className:"modal-long-desc",children:n.longDesc}),m.jsx("h4",{className:"modal-section-title",children:"Key Architectural Features"}),m.jsx("ul",{className:"modal-features-list",children:n.features.map((r,s)=>m.jsxs("li",{children:[m.jsx("i",{className:"fas fa-check-circle",style:{color:n.color}}),m.jsx("span",{children:r})]},s))}),m.jsx("h4",{className:"modal-section-title",children:"Technologies Used"}),m.jsx("div",{className:"modal-tech-pills",children:n.tech.map(r=>m.jsx("span",{className:"modal-tech-pill",children:r},r))})]}),m.jsxs("div",{className:"modal-footer",children:[m.jsxs("a",{href:n.github,target:"_blank",rel:"noreferrer",className:"btn btn-secondary btn-sm",children:[m.jsx("i",{className:"fab fa-github"}),m.jsx("span",{children:"View Repository"})]}),n.live&&m.jsxs("a",{href:n.live,target:"_blank",rel:"noreferrer",className:"btn btn-primary btn-sm",children:[m.jsx("span",{children:"Visit Live Site"}),m.jsx("i",{className:"fas fa-external-link-alt"})]})]})]})})})]})}const JD=[{degree:"Master of Computer Applications (MCA)",shortDegree:"MCA",institution:"Jain College of Engineering, Belagavi",period:"2024 – 2026",score:"CGPA: 8.94",status:"Graduated",highlights:["Graduated with a high academic standing of 8.94 CGPA, focusing on Advanced Software Engineering, Distributed Systems, and Full-Stack Architectures.","Active participant in competitive events including the SudurCodeX TechFusion 2026 Hackathon."],icon:"fas fa-graduation-cap",color:"#00f5ff"},{degree:"Bachelor of Science (B.Sc)",shortDegree:"B.Sc",institution:"KLE GI Bagewadi College, Nippani",period:"2020 – 2023",score:"CGPA: 7.79",status:"Graduated",highlights:["Graduated with a CGPA of 7.79, building rigorous analytical and computational foundations.","Completed core studies in computing theory, mathematical logic, and software programming fundamentals."],icon:"fas fa-user-graduate",color:"#8b5cf6"}],QD=[{title:"Artificial Intelligence Fundamentals",issuer:"IBM SkillsBuild",type:"Professional AI Credential",desc:"Certified in core artificial intelligence principles, machine learning concepts, natural language processing, and responsible AI ethics.",badgeIcon:"fas fa-brain",color:"#00f5ff",verified:!0},{title:"Customer Engagement: Communication & Personality Dynamics",issuer:"IBM SkillsBuild",type:"Professional Credential",desc:"Validated mastery in professional stakeholder communication, emotional intelligence, collaborative teamwork, and interpersonal dynamics.",badgeIcon:"fas fa-comments",color:"#8b5cf6",verified:!0},{title:"SudurCodeX TechFusion 2026 Hackathon",issuer:"Hackathon Achievement",type:"Competitive Technical Event",desc:"Participated in the intensive SudurCodeX TechFusion 2026 Hackathon, demonstrating teamwork, problem-solving, and collaborative software development under strict time constraints.",badgeIcon:"fas fa-trophy",color:"#f59e0b",verified:!0}];function eI(){const[t,e]=wa({threshold:.1,triggerOnce:!0});return m.jsx("section",{id:"education",className:"education-section",ref:t,children:m.jsxs("div",{className:"section",children:[m.jsxs("div",{className:"section-header",children:[m.jsxs("span",{className:"section-eyebrow",children:[m.jsx("i",{className:"fas fa-award"})," Academic & Credentials"]}),m.jsxs("h2",{className:"section-title",children:["Education & ",m.jsx("span",{className:"gradient-text",children:"Certifications"})]}),m.jsx("p",{className:"section-subtitle",children:"Formal degrees, official IBM SkillsBuild credentials, and hackathon accomplishments."})]}),m.jsxs("div",{className:"edu-cert-grid",children:[m.jsxs("div",{className:"edu-col",children:[m.jsxs("h3",{className:"col-heading",children:[m.jsx("i",{className:"fas fa-graduation-cap"})," Academic Education"]}),m.jsxs("div",{className:"timeline-wrapper",children:[m.jsx("div",{className:"timeline-line"}),JD.map((n,i)=>m.jsxs(Nt.div,{className:"timeline-item",initial:{opacity:0,y:30},animate:e?{opacity:1,y:0}:{},transition:{duration:.6,delay:i*.2},children:[m.jsx("div",{className:"timeline-node",style:{borderColor:n.color,boxShadow:`0 0 16px ${n.color}66`},children:m.jsx("i",{className:n.icon,style:{color:n.color}})}),m.jsxs("div",{className:"timeline-content glass-card",children:[m.jsxs("div",{className:"timeline-top",children:[m.jsx("span",{className:"edu-period font-mono",children:n.period}),m.jsxs("div",{style:{display:"flex",gap:"8px"},children:[m.jsx("span",{className:"edu-status-pill",style:{backgroundColor:`${n.color}15`,borderColor:`${n.color}40`,color:n.color},children:n.score}),m.jsx("span",{className:"edu-status-pill",style:{backgroundColor:"rgba(255, 255, 255, 0.05)",borderColor:"var(--border-glass)",color:"var(--text-secondary)"},children:n.status})]})]}),m.jsx("h4",{className:"edu-degree",children:n.degree}),m.jsx("p",{className:"edu-inst",children:n.institution}),m.jsx("ul",{className:"edu-highlights",children:n.highlights.map((r,s)=>m.jsxs("li",{children:[m.jsx("i",{className:"fas fa-angle-right",style:{color:n.color}}),m.jsx("span",{children:r})]},s))})]})]},n.degree))]})]}),m.jsxs("div",{className:"cert-col",children:[m.jsxs("h3",{className:"col-heading",children:[m.jsx("i",{className:"fas fa-certificate"})," Certifications & Hackathons"]}),m.jsx("div",{className:"certs-list",children:QD.map((n,i)=>m.jsx(Nt.div,{initial:{opacity:0,y:30},animate:e?{opacity:1,y:0}:{},transition:{duration:.6,delay:i*.18},children:m.jsx(Ln,{maxTilt:8,className:"cert-tilt-card",children:m.jsxs("div",{className:"cert-card-inner glass-card",children:[m.jsx("div",{className:"cert-icon-wrap",style:{backgroundColor:`${n.color}18`,color:n.color,borderColor:`${n.color}40`},children:m.jsx("i",{className:n.badgeIcon})}),m.jsxs("div",{className:"cert-info",children:[m.jsxs("div",{className:"cert-header",children:[m.jsx("span",{className:"cert-issuer",children:n.issuer}),n.verified&&m.jsxs("span",{className:"cert-verified-pill",children:[m.jsx("i",{className:"fas fa-shield-check"})," Verified"]})]}),m.jsx("h4",{className:"cert-title",children:n.title}),m.jsx("span",{className:"cert-type",children:n.type}),m.jsx("p",{className:"cert-desc",children:n.desc})]})]})})},n.title))})]})]})]})})}var zm={};(function t(e,n,i,r){var s=!!(e.Worker&&e.Blob&&e.Promise&&e.OffscreenCanvas&&e.OffscreenCanvasRenderingContext2D&&e.HTMLCanvasElement&&e.HTMLCanvasElement.prototype.transferControlToOffscreen&&e.URL&&e.URL.createObjectURL),a=typeof Path2D=="function"&&typeof DOMMatrix=="function",o=function(){if(!e.OffscreenCanvas)return!1;try{var b=new OffscreenCanvas(1,1),C=b.getContext("2d");C.fillRect(0,0,1,1);var J=b.transferToImageBitmap();C.createPattern(J,"no-repeat")}catch{return!1}return!0}();function l(){}function c(b){var C=n.exports.Promise,J=C!==void 0?C:e.Promise;return typeof J=="function"?new J(b):(b(l,l),null)}var d=function(b,C){return{transform:function(J){if(b)return J;if(C.has(J))return C.get(J);var ne=new OffscreenCanvas(J.width,J.height),de=ne.getContext("2d");return de.drawImage(J,0,0),C.set(J,ne),ne},clear:function(){C.clear()}}}(o,new Map),f=function(){var b=Math.floor(16.666666666666668),C,J,ne={},de=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(C=function(pe){var me=Math.random();return ne[me]=requestAnimationFrame(function I(H){de===H||de+b-1<H?(de=H,delete ne[me],pe()):ne[me]=requestAnimationFrame(I)}),me},J=function(pe){ne[pe]&&cancelAnimationFrame(ne[pe])}):(C=function(pe){return setTimeout(pe,b)},J=function(pe){return clearTimeout(pe)}),{frame:C,cancel:J}}(),u=function(){var b,C,J={};function ne(de){function pe(me,I){de.postMessage({options:me||{},callback:I})}de.init=function(I){var H=I.transferControlToOffscreen();de.postMessage({canvas:H},[H])},de.fire=function(I,H,le){if(C)return pe(I,null),C;var fe=Math.random().toString(36).slice(2);return C=c(function(oe){function Ae(Xe){Xe.data.callback===fe&&(delete J[fe],de.removeEventListener("message",Ae),C=null,d.clear(),le(),oe())}de.addEventListener("message",Ae),pe(I,fe),J[fe]=Ae.bind(null,{data:{callback:fe}})}),C},de.reset=function(){de.postMessage({reset:!0});for(var I in J)J[I](),delete J[I]}}return function(){if(b)return b;if(!i&&s){var de=["var CONFETTI, SIZE = {}, module = {};","("+t.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{b=new Worker(URL.createObjectURL(new Blob([de])))}catch(pe){return typeof console<"u"&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",pe),null}ne(b)}return b}}(),p={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function x(b,C){return C?C(b):b}function M(b){return b!=null}function v(b,C,J){return x(b&&M(b[C])?b[C]:p[C],J)}function h(b){return b<0?0:Math.floor(b)}function g(b,C){return Math.floor(Math.random()*(C-b))+b}function S(b){return parseInt(b,16)}function _(b){return b.map(T)}function T(b){var C=String(b).replace(/[^0-9a-f]/gi,"");return C.length<6&&(C=C[0]+C[0]+C[1]+C[1]+C[2]+C[2]),{r:S(C.substring(0,2)),g:S(C.substring(2,4)),b:S(C.substring(4,6))}}function w(b){var C=v(b,"origin",Object);return C.x=v(C,"x",Number),C.y=v(C,"y",Number),C}function R(b){b.width=document.documentElement.clientWidth,b.height=document.documentElement.clientHeight}function y(b){var C=b.getBoundingClientRect();b.width=C.width,b.height=C.height}function P(b){var C=document.createElement("canvas");return C.style.position="fixed",C.style.top="0px",C.style.left="0px",C.style.pointerEvents="none",C.style.zIndex=b,C}function L(b,C,J,ne,de,pe,me,I,H){b.save(),b.translate(C,J),b.rotate(pe),b.scale(ne,de),b.arc(0,0,1,me,I,H),b.restore()}function D(b){var C=b.angle*(Math.PI/180),J=b.spread*(Math.PI/180);return{x:b.x,y:b.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:b.startVelocity*.5+Math.random()*b.startVelocity,angle2D:-C+(.5*J-Math.random()*J),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:b.color,shape:b.shape,tick:0,totalTicks:b.ticks,decay:b.decay,drift:b.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:b.gravity*3,ovalScalar:.6,scalar:b.scalar,flat:b.flat}}function B(b,C){C.x+=Math.cos(C.angle2D)*C.velocity+C.drift,C.y+=Math.sin(C.angle2D)*C.velocity+C.gravity,C.velocity*=C.decay,C.flat?(C.wobble=0,C.wobbleX=C.x+10*C.scalar,C.wobbleY=C.y+10*C.scalar,C.tiltSin=0,C.tiltCos=0,C.random=1):(C.wobble+=C.wobbleSpeed,C.wobbleX=C.x+10*C.scalar*Math.cos(C.wobble),C.wobbleY=C.y+10*C.scalar*Math.sin(C.wobble),C.tiltAngle+=.1,C.tiltSin=Math.sin(C.tiltAngle),C.tiltCos=Math.cos(C.tiltAngle),C.random=Math.random()+2);var J=C.tick++/C.totalTicks,ne=C.x+C.random*C.tiltCos,de=C.y+C.random*C.tiltSin,pe=C.wobbleX+C.random*C.tiltCos,me=C.wobbleY+C.random*C.tiltSin;if(b.fillStyle="rgba("+C.color.r+", "+C.color.g+", "+C.color.b+", "+(1-J)+")",b.beginPath(),a&&C.shape.type==="path"&&typeof C.shape.path=="string"&&Array.isArray(C.shape.matrix))b.fill(W(C.shape.path,C.shape.matrix,C.x,C.y,Math.abs(pe-ne)*.1,Math.abs(me-de)*.1,Math.PI/10*C.wobble));else if(C.shape.type==="bitmap"){var I=Math.PI/10*C.wobble,H=Math.abs(pe-ne)*.1,le=Math.abs(me-de)*.1,fe=C.shape.bitmap.width*C.scalar,oe=C.shape.bitmap.height*C.scalar,Ae=new DOMMatrix([Math.cos(I)*H,Math.sin(I)*H,-Math.sin(I)*le,Math.cos(I)*le,C.x,C.y]);Ae.multiplySelf(new DOMMatrix(C.shape.matrix));var Xe=b.createPattern(d.transform(C.shape.bitmap),"no-repeat");Xe.setTransform(Ae),b.globalAlpha=1-J,b.fillStyle=Xe,b.fillRect(C.x-fe/2,C.y-oe/2,fe,oe),b.globalAlpha=1}else if(C.shape==="circle")b.ellipse?b.ellipse(C.x,C.y,Math.abs(pe-ne)*C.ovalScalar,Math.abs(me-de)*C.ovalScalar,Math.PI/10*C.wobble,0,2*Math.PI):L(b,C.x,C.y,Math.abs(pe-ne)*C.ovalScalar,Math.abs(me-de)*C.ovalScalar,Math.PI/10*C.wobble,0,2*Math.PI);else if(C.shape==="star")for(var _e=Math.PI/2*3,Ve=4*C.scalar,Ye=8*C.scalar,Be=C.x,et=C.y,dt=5,mt=Math.PI/dt;dt--;)Be=C.x+Math.cos(_e)*Ye,et=C.y+Math.sin(_e)*Ye,b.lineTo(Be,et),_e+=mt,Be=C.x+Math.cos(_e)*Ve,et=C.y+Math.sin(_e)*Ve,b.lineTo(Be,et),_e+=mt;else b.moveTo(Math.floor(C.x),Math.floor(C.y)),b.lineTo(Math.floor(C.wobbleX),Math.floor(de)),b.lineTo(Math.floor(pe),Math.floor(me)),b.lineTo(Math.floor(ne),Math.floor(C.wobbleY));return b.closePath(),b.fill(),C.tick<C.totalTicks}function Y(b,C,J,ne,de){var pe=C.slice(),me=b.getContext("2d"),I,H,le=c(function(fe){function oe(){I=H=null,me.clearRect(0,0,ne.width,ne.height),d.clear(),de(),fe()}function Ae(){i&&!(ne.width===r.width&&ne.height===r.height)&&(ne.width=b.width=r.width,ne.height=b.height=r.height),!ne.width&&!ne.height&&(J(b),ne.width=b.width,ne.height=b.height),me.clearRect(0,0,ne.width,ne.height),pe=pe.filter(function(Xe){return B(me,Xe)}),pe.length?I=f.frame(Ae):oe()}I=f.frame(Ae),H=oe});return{addFettis:function(fe){return pe=pe.concat(fe),le},canvas:b,promise:le,reset:function(){I&&f.cancel(I),H&&H()}}}function k(b,C){var J=!b,ne=!!v(C||{},"resize"),de=!1,pe=v(C,"disableForReducedMotion",Boolean),me=s&&!!v(C||{},"useWorker"),I=me?u():null,H=J?R:y,le=b&&I?!!b.__confetti_initialized:!1,fe=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,oe;function Ae(_e,Ve,Ye){for(var Be=v(_e,"particleCount",h),et=v(_e,"angle",Number),dt=v(_e,"spread",Number),mt=v(_e,"startVelocity",Number),gt=v(_e,"decay",Number),Ct=v(_e,"gravity",Number),O=v(_e,"drift",Number),kt=v(_e,"colors",_),rt=v(_e,"ticks",Number),N=v(_e,"shapes"),E=v(_e,"scalar"),G=!!v(_e,"flat"),K=w(_e),Q=Be,ue=[],he=b.width*K.x,te=b.height*K.y;Q--;)ue.push(D({x:he,y:te,angle:et,spread:dt,startVelocity:mt,color:kt[Q%kt.length],shape:N[g(0,N.length)],ticks:rt,decay:gt,gravity:Ct,drift:O,scalar:E,flat:G}));return oe?oe.addFettis(ue):(oe=Y(b,ue,H,Ve,Ye),oe.promise)}function Xe(_e){var Ve=pe||v(_e,"disableForReducedMotion",Boolean),Ye=v(_e,"zIndex",Number);if(Ve&&fe)return c(function(mt){mt()});J&&oe?b=oe.canvas:J&&!b&&(b=P(Ye),document.body.appendChild(b)),ne&&!le&&H(b);var Be={width:b.width,height:b.height};I&&!le&&I.init(b),le=!0,I&&(b.__confetti_initialized=!0);function et(){if(I){var mt={getBoundingClientRect:function(){if(!J)return b.getBoundingClientRect()}};H(mt),I.postMessage({resize:{width:mt.width,height:mt.height}});return}Be.width=Be.height=null}function dt(){oe=null,ne&&(de=!1,e.removeEventListener("resize",et)),J&&b&&(document.body.contains(b)&&document.body.removeChild(b),b=null,le=!1)}return ne&&!de&&(de=!0,e.addEventListener("resize",et,!1)),I?I.fire(_e,Be,dt):Ae(_e,Be,dt)}return Xe.reset=function(){I&&I.reset(),oe&&oe.reset()},Xe}var X;function ee(){return X||(X=k(null,{useWorker:!0,resize:!0})),X}function W(b,C,J,ne,de,pe,me){var I=new Path2D(b),H=new Path2D;H.addPath(I,new DOMMatrix(C));var le=new Path2D;return le.addPath(H,new DOMMatrix([Math.cos(me)*de,Math.sin(me)*de,-Math.sin(me)*pe,Math.cos(me)*pe,J,ne])),le}function z(b){if(!a)throw new Error("path confetti are not supported in this browser");var C,J;typeof b=="string"?C=b:(C=b.path,J=b.matrix);var ne=new Path2D(C),de=document.createElement("canvas"),pe=de.getContext("2d");if(!J){for(var me=1e3,I=me,H=me,le=0,fe=0,oe,Ae,Xe=0;Xe<me;Xe+=2)for(var _e=0;_e<me;_e+=2)pe.isPointInPath(ne,Xe,_e,"nonzero")&&(I=Math.min(I,Xe),H=Math.min(H,_e),le=Math.max(le,Xe),fe=Math.max(fe,_e));oe=le-I,Ae=fe-H;var Ve=10,Ye=Math.min(Ve/oe,Ve/Ae);J=[Ye,0,0,Ye,-Math.round(oe/2+I)*Ye,-Math.round(Ae/2+H)*Ye]}return{type:"path",path:C,matrix:J}}function V(b){var C,J=1,ne="#000000",de='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof b=="string"?C=b:(C=b.text,J="scalar"in b?b.scalar:J,de="fontFamily"in b?b.fontFamily:de,ne="color"in b?b.color:ne);var pe=10*J,me=""+pe+"px "+de,I=new OffscreenCanvas(pe,pe),H=I.getContext("2d");H.font=me;var le=H.measureText(C),fe=Math.ceil(le.actualBoundingBoxRight+le.actualBoundingBoxLeft),oe=Math.ceil(le.actualBoundingBoxAscent+le.actualBoundingBoxDescent),Ae=2,Xe=le.actualBoundingBoxLeft+Ae,_e=le.actualBoundingBoxAscent+Ae;fe+=Ae+Ae,oe+=Ae+Ae,I=new OffscreenCanvas(fe,oe),H=I.getContext("2d"),H.font=me,H.fillStyle=ne,H.fillText(C,Xe,_e);var Ve=1/J;return{type:"bitmap",bitmap:I.transferToImageBitmap(),matrix:[Ve,0,0,Ve,-fe*Ve/2,-oe*Ve/2]}}n.exports=function(){return ee().apply(this,arguments)},n.exports.reset=function(){ee().reset()},n.exports.create=k,n.exports.shapeFromPath=z,n.exports.shapeFromText=V})(function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}}(),zm,!1);const tI=zm.exports;zm.exports.create;function nI(){const[t,e]=wa({threshold:.1,triggerOnce:!0}),[n,i]=se.useState(!1),[r,s]=se.useState({name:"",email:"",subject:"",message:""}),[a,o]=se.useState(!1),[l,c]=se.useState(!1),d=()=>{navigator.clipboard.writeText("sourabhsajane121@gmail.com"),i(!0),setTimeout(()=>i(!1),2500)},f=x=>{s({...r,[x.target.name]:x.target.value})},u=x=>{x.preventDefault(),!(!r.name||!r.email||!r.message)&&(c(!0),setTimeout(()=>{c(!1),o(!0);try{tI({particleCount:100,spread:70,origin:{y:.6},colors:["#00f5ff","#8b5cf6","#ec4899","#10b981"]})}catch{}},800))},p=()=>{s({name:"",email:"",subject:"",message:""}),o(!1)};return m.jsxs("section",{id:"contact",className:"contact-section",ref:t,children:[m.jsxs("div",{className:"section",children:[m.jsxs("div",{className:"section-header",children:[m.jsxs("span",{className:"section-eyebrow",children:[m.jsx("i",{className:"fas fa-paper-plane"})," Get In Touch / Connect"]}),m.jsxs("h2",{className:"section-title",children:["Let's Build Something ",m.jsx("span",{className:"gradient-text",children:"Exceptional"})]}),m.jsx("p",{className:"section-subtitle",children:"Whether you have a full-time opportunity, project collaboration, or just want to say hi, my inbox is always open!"})]}),m.jsxs("div",{className:"contact-layout",children:[m.jsxs(Nt.div,{className:"contact-info-col",initial:{opacity:0,y:30},animate:e?{opacity:1,y:0}:{},transition:{duration:.6},children:[m.jsx(Ln,{maxTilt:8,className:"email-action-card",children:m.jsxs("div",{className:"email-card-inner glass-card",children:[m.jsx("div",{className:"email-icon-box",children:m.jsx("i",{className:"fas fa-envelope-open-text"})}),m.jsxs("div",{className:"email-text-group",children:[m.jsx("span",{className:"email-label",children:"DIRECT EMAIL"}),m.jsx("span",{className:"email-address",children:"sourabhsajane121@gmail.com"})]}),m.jsxs("button",{className:"copy-pill-btn",onClick:d,title:"Copy email to clipboard","aria-label":"Copy email address",children:[m.jsx("i",{className:n?"fas fa-check text-green":"fas fa-copy"}),m.jsx("span",{children:n?"Copied!":"Copy"})]})]})}),m.jsx(Ln,{maxTilt:8,className:"email-action-card",children:m.jsxs("div",{className:"email-card-inner glass-card",children:[m.jsx("div",{className:"email-icon-box",style:{backgroundColor:"rgba(16, 185, 129, 0.12)",color:"var(--emerald)",borderColor:"rgba(16, 185, 129, 0.3)"},children:m.jsx("i",{className:"fas fa-phone"})}),m.jsxs("div",{className:"email-text-group",children:[m.jsx("span",{className:"email-label",children:"PHONE NUMBER"}),m.jsx("a",{href:"tel:+918618421208",className:"email-address",style:{textDecoration:"none"},children:"+91 8618421208"})]}),m.jsxs("a",{href:"tel:+918618421208",className:"copy-pill-btn",style:{textDecoration:"none"},title:"Call Sourabh Sajane",children:[m.jsx("i",{className:"fas fa-phone-volume"}),m.jsx("span",{children:"Call"})]})]})}),m.jsxs("div",{className:"social-links-grid",children:[m.jsx(Ln,{maxTilt:10,className:"social-tilt",children:m.jsxs("a",{href:"https://linkedin.com/in/sourabh-sajane",target:"_blank",rel:"noreferrer",className:"social-card-inner glass-card",children:[m.jsx("div",{className:"social-icon icon-linkedin",children:m.jsx("i",{className:"fab fa-linkedin-in"})}),m.jsxs("div",{children:[m.jsx("span",{className:"social-name",children:"LinkedIn"}),m.jsx("span",{className:"social-sub",children:"Professional Network"})]}),m.jsx("i",{className:"fas fa-arrow-up-right-from-square social-arrow"})]})}),m.jsx(Ln,{maxTilt:10,className:"social-tilt",children:m.jsxs("a",{href:"https://github.com/sourabhsajane",target:"_blank",rel:"noreferrer",className:"social-card-inner glass-card",children:[m.jsx("div",{className:"social-icon icon-github",children:m.jsx("i",{className:"fab fa-github"})}),m.jsxs("div",{children:[m.jsx("span",{className:"social-name",children:"GitHub"}),m.jsx("span",{className:"social-sub",children:"Repositories & Code"})]}),m.jsx("i",{className:"fas fa-arrow-up-right-from-square social-arrow"})]})})]}),m.jsxs("div",{className:"response-guarantee-card glass-card",children:[m.jsx("div",{className:"guarantee-icon",children:m.jsx("i",{className:"fas fa-bolt"})}),m.jsxs("p",{children:[m.jsx("strong",{children:"Fast Response Time:"})," I typically reply to messages and project inquiries within 24 hours."]})]})]}),m.jsx(Nt.div,{className:"contact-form-col",initial:{opacity:0,y:30},animate:e?{opacity:1,y:0}:{},transition:{duration:.6,delay:.2},children:m.jsx("div",{className:"form-card glass-card",children:m.jsx(mu,{mode:"wait",children:a?m.jsxs(Nt.div,{className:"form-success-box",initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},exit:{opacity:0},children:[m.jsx("div",{className:"success-icon-wrap",children:m.jsx("i",{className:"fas fa-check"})}),m.jsx("h3",{children:"Message Sent Successfully!"}),m.jsxs("p",{children:["Thank you for reaching out, ",m.jsx("strong",{children:r.name}),"! I have received your inquiry and will get back to you at ",m.jsx("strong",{children:r.email})," shortly."]}),m.jsx("button",{className:"btn btn-secondary btn-sm",onClick:p,children:"Send Another Message"})]},"success-message"):m.jsxs(Nt.form,{className:"interactive-form",onSubmit:u,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0,y:-20},children:[m.jsx("h3",{className:"form-heading",children:"Send a Direct Message"}),m.jsxs("div",{className:"form-row",children:[m.jsxs("div",{className:"form-group",children:[m.jsx("label",{htmlFor:"name",children:"Your Name"}),m.jsx("input",{id:"name",type:"text",name:"name",placeholder:"e.g. Alex Smith",required:!0,value:r.name,onChange:f})]}),m.jsxs("div",{className:"form-group",children:[m.jsx("label",{htmlFor:"email",children:"Your Email"}),m.jsx("input",{id:"email",type:"email",name:"email",placeholder:"e.g. alex@example.com",required:!0,value:r.email,onChange:f})]})]}),m.jsxs("div",{className:"form-group",children:[m.jsx("label",{htmlFor:"subject",children:"Subject"}),m.jsx("input",{id:"subject",type:"text",name:"subject",placeholder:"Project Inquiry / Job Opportunity / Question",value:r.subject,onChange:f})]}),m.jsxs("div",{className:"form-group",children:[m.jsx("label",{htmlFor:"message",children:"Your Message"}),m.jsx("textarea",{id:"message",name:"message",rows:"4",placeholder:"Tell me about your project, idea, or role...",required:!0,value:r.message,onChange:f})]}),m.jsx("button",{type:"submit",className:"btn btn-primary form-submit-btn",disabled:l,children:l?m.jsxs(m.Fragment,{children:[m.jsx("i",{className:"fas fa-spinner fa-spin"}),m.jsx("span",{children:"Sending Message..."})]}):m.jsxs(m.Fragment,{children:[m.jsx("span",{children:"Send Message"}),m.jsx("i",{className:"fas fa-paper-plane"})]})})]},"contact-form")})})})]})]}),m.jsx("footer",{className:"footer-bar",children:m.jsxs("div",{className:"footer-inner",children:[m.jsxs("div",{className:"footer-left",children:[m.jsx("span",{className:"footer-logo",children:"<Sourabh />"}),m.jsxs("span",{className:"footer-copy",children:["Designed & Engineered by ",m.jsx("strong",{children:"Sourabh Sajane"})," © ",new Date().getFullYear()]})]}),m.jsxs("div",{className:"footer-tech-stack",children:[m.jsx("span",{children:"React 18"}),m.jsx("span",{className:"dot-sep",children:"•"}),m.jsx("span",{children:"Three.js 3D"}),m.jsx("span",{className:"dot-sep",children:"•"}),m.jsx("span",{children:"Framer Motion"}),m.jsx("span",{className:"dot-sep",children:"•"}),m.jsx("span",{children:"Vanilla CSS"})]})]})})]})}const Xl=["const ai = new Neural()","model.train(data)",'await fetch("/api")',"npm run build","git push origin main","SELECT * FROM users","useState(null)","useEffect(() => {})",'import React from "react"',"export default App","function predict(x)","loss.backward()","optimizer.step()","torch.tensor([1,0])","df.head()","accuracy: 98.7%","model.fit(X, y)",'<div className="ai">',"const [data, setData]","res.json({ ok: true })"];function iI(){const t=se.useRef(null);return se.useEffect(()=>{const e=t.current,n=e.getContext("2d");let i;const r=()=>{e.width=window.innerWidth,e.height=window.innerHeight};r(),window.addEventListener("resize",r);const s=Array.from({length:18},(u,p)=>({x:Math.random()*window.innerWidth,y:Math.random()*window.innerHeight,text:Xl[p%Xl.length],speed:.2+Math.random()*.4,opacity:.08+Math.random()*.18,size:11+Math.random()*5,color:["#00ffff","#7b2fff","#00ff88","#ff2d78"][Math.floor(Math.random()*4)],drift:(Math.random()-.5)*.3})),a=Array.from({length:22},()=>({x:Math.random()*window.innerWidth,y:Math.random()*window.innerHeight,r:2+Math.random()*3,vx:(Math.random()-.5)*.5,vy:(Math.random()-.5)*.5,pulse:Math.random()*Math.PI*2}));function o(){a.forEach((u,p)=>{a.slice(p+1).forEach(x=>{const M=Math.hypot(u.x-x.x,u.y-x.y);M<200&&(n.beginPath(),n.moveTo(u.x,u.y),n.lineTo(x.x,x.y),n.strokeStyle=`rgba(0,255,255,${.06*(1-M/200)})`,n.lineWidth=.8,n.stroke())})}),a.forEach(u=>{u.pulse+=.03;const p=Math.sin(u.pulse)*.5+.5,x=n.createRadialGradient(u.x,u.y,0,u.x,u.y,u.r*4);x.addColorStop(0,`rgba(0,255,255,${.6*p})`),x.addColorStop(1,"transparent"),n.beginPath(),n.arc(u.x,u.y,u.r*4,0,Math.PI*2),n.fillStyle=x,n.fill(),n.beginPath(),n.arc(u.x,u.y,u.r,0,Math.PI*2),n.fillStyle=`rgba(0,255,255,${.7+.3*p})`,n.fill(),u.x+=u.vx,u.y+=u.vy,(u.x<0||u.x>e.width)&&(u.vx*=-1),(u.y<0||u.y>e.height)&&(u.vy*=-1)})}function l(){s.forEach(u=>{n.globalAlpha=u.opacity,n.font=`${u.size}px Fira Code`,n.fillStyle=u.color,n.fillText(u.text,u.x,u.y),n.globalAlpha=1,u.y-=u.speed,u.x+=u.drift,u.y<-30&&(u.y=e.height+30,u.x=Math.random()*e.width,u.text=Xl[Math.floor(Math.random()*Xl.length)]),(u.x<-200||u.x>e.width+200)&&(u.x=Math.random()*e.width)})}let c=0;function d(){const u=n.createLinearGradient(0,c-40,0,c+40);u.addColorStop(0,"transparent"),u.addColorStop(.5,"rgba(0,255,255,0.03)"),u.addColorStop(1,"transparent"),n.fillStyle=u,n.fillRect(0,c-40,e.width,80),c=(c+1.5)%e.height}function f(){n.clearRect(0,0,e.width,e.height),d(),o(),l(),i=requestAnimationFrame(f)}return f(),()=>{cancelAnimationFrame(i),window.removeEventListener("resize",r)}},[]),m.jsxs(m.Fragment,{children:[m.jsx("canvas",{ref:t,className:"bg-canvas"}),m.jsx("div",{className:"dev-scene",children:m.jsx(rI,{})})]})}function rI(){return m.jsxs("svg",{className:"dev-svg",viewBox:"0 0 520 480",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[m.jsx("rect",{x:"60",y:"340",width:"400",height:"14",rx:"4",fill:"#1a1a3e",stroke:"#00ffff",strokeWidth:"1",opacity:"0.8"}),m.jsx("rect",{x:"100",y:"354",width:"12",height:"80",rx:"3",fill:"#1a1a3e",stroke:"#00ffff",strokeWidth:"0.5",opacity:"0.6"}),m.jsx("rect",{x:"408",y:"354",width:"12",height:"80",rx:"3",fill:"#1a1a3e",stroke:"#00ffff",strokeWidth:"0.5",opacity:"0.6"}),m.jsx("rect",{x:"238",y:"300",width:"44",height:"42",rx:"3",fill:"#0f0f2a",stroke:"#00ffff",strokeWidth:"0.8",opacity:"0.9"}),m.jsx("rect",{x:"210",y:"338",width:"100",height:"8",rx:"3",fill:"#1a1a3e",stroke:"#00ffff",strokeWidth:"0.8",opacity:"0.9"}),m.jsx("rect",{x:"120",y:"140",width:"280",height:"165",rx:"10",fill:"#050510",stroke:"#00ffff",strokeWidth:"1.5",opacity:"0.95"}),m.jsx("rect",{x:"128",y:"148",width:"264",height:"149",rx:"6",fill:"#080818"}),m.jsx("rect",{x:"128",y:"148",width:"264",height:"149",rx:"6",fill:"url(#screenGlow)",opacity:"0.4"}),m.jsx("text",{x:"140",y:"172",fontFamily:"Fira Code",fontSize:"9",fill:"#c586c0",children:"import"}),m.jsx("text",{x:"183",y:"172",fontFamily:"Fira Code",fontSize:"9",fill:"#9cdcfe",children:" React "}),m.jsx("text",{x:"218",y:"172",fontFamily:"Fira Code",fontSize:"9",fill:"#c586c0",children:"from"}),m.jsx("text",{x:"244",y:"172",fontFamily:"Fira Code",fontSize:"9",fill:"#ce9178",children:" 'react'"}),m.jsx("text",{x:"140",y:"186",fontFamily:"Fira Code",fontSize:"9",fill:"#c586c0",children:"import"}),m.jsx("text",{x:"183",y:"186",fontFamily:"Fira Code",fontSize:"9",fill:"#9cdcfe",children:" AI "}),m.jsx("text",{x:"200",y:"186",fontFamily:"Fira Code",fontSize:"9",fill:"#c586c0",children:"from"}),m.jsx("text",{x:"226",y:"186",fontFamily:"Fira Code",fontSize:"9",fill:"#ce9178",children:" './ai-model'"}),m.jsx("text",{x:"140",y:"204",fontFamily:"Fira Code",fontSize:"9",fill:"#6a9955",children:"// Neural Network"}),m.jsx("text",{x:"140",y:"218",fontFamily:"Fira Code",fontSize:"9",fill:"#c586c0",children:"const"}),m.jsx("text",{x:"168",y:"218",fontFamily:"Fira Code",fontSize:"9",fill:"#9cdcfe",children:" model"}),m.jsx("text",{x:"200",y:"218",fontFamily:"Fira Code",fontSize:"9",fill:"#d4d4d4",children:" = "}),m.jsx("text",{x:"214",y:"218",fontFamily:"Fira Code",fontSize:"9",fill:"#dcdcaa",children:"new Neural"}),m.jsx("text",{x:"270",y:"218",fontFamily:"Fira Code",fontSize:"9",fill:"#d4d4d4",children:"()"}),m.jsx("text",{x:"140",y:"232",fontFamily:"Fira Code",fontSize:"9",fill:"#c586c0",children:"const"}),m.jsx("text",{x:"168",y:"232",fontFamily:"Fira Code",fontSize:"9",fill:"#9cdcfe",children:" train"}),m.jsx("text",{x:"196",y:"232",fontFamily:"Fira Code",fontSize:"9",fill:"#d4d4d4",children:" = "}),m.jsx("text",{x:"210",y:"232",fontFamily:"Fira Code",fontSize:"9",fill:"#c586c0",children:"async"}),m.jsxs("text",{x:"238",y:"232",fontFamily:"Fira Code",fontSize:"9",fill:"#d4d4d4",children:[" () => ","{"]}),m.jsx("text",{x:"152",y:"246",fontFamily:"Fira Code",fontSize:"9",fill:"#c586c0",children:"await"}),m.jsx("text",{x:"182",y:"246",fontFamily:"Fira Code",fontSize:"9",fill:"#dcdcaa",children:" model.fit"}),m.jsx("text",{x:"232",y:"246",fontFamily:"Fira Code",fontSize:"9",fill:"#d4d4d4",children:"(X, y)"}),m.jsx("text",{x:"152",y:"260",fontFamily:"Fira Code",fontSize:"9",fill:"#9cdcfe",children:"accuracy"}),m.jsx("text",{x:"200",y:"260",fontFamily:"Fira Code",fontSize:"9",fill:"#d4d4d4",children:" = "}),m.jsx("text",{x:"214",y:"260",fontFamily:"Fira Code",fontSize:"9",fill:"#00ff88",children:"98.7%"}),m.jsx("text",{x:"140",y:"274",fontFamily:"Fira Code",fontSize:"9",fill:"#d4d4d4",children:"}"}),m.jsx("rect",{x:"140",y:"280",width:"6",height:"10",rx:"1",fill:"#00ffff",opacity:"0.9",children:m.jsx("animate",{attributeName:"opacity",values:"0.9;0;0.9",dur:"1s",repeatCount:"indefinite"})}),m.jsx("rect",{x:"155",y:"345",width:"210",height:"18",rx:"4",fill:"#0f0f2a",stroke:"#00ffff",strokeWidth:"0.8",opacity:"0.8"}),[0,1,2,3,4,5,6,7,8,9].map(t=>m.jsx("rect",{x:162+t*19,y:"349",width:"14",height:"8",rx:"2",fill:"#1a1a3e",stroke:"#00ffff",strokeWidth:"0.3",opacity:"0.7"},t)),m.jsx("rect",{x:"375",y:"344",width:"22",height:"30",rx:"8",fill:"#0f0f2a",stroke:"#00ffff",strokeWidth:"0.8",opacity:"0.8"}),m.jsx("line",{x1:"386",y1:"344",x2:"386",y2:"360",stroke:"#00ffff",strokeWidth:"0.5",opacity:"0.5"}),m.jsx("rect",{x:"218",y:"390",width:"84",height:"8",rx:"4",fill:"#1a1a3e",stroke:"#7b2fff",strokeWidth:"0.8",opacity:"0.7"}),m.jsx("rect",{x:"248",y:"398",width:"24",height:"35",rx:"3",fill:"#1a1a3e",stroke:"#7b2fff",strokeWidth:"0.5",opacity:"0.6"}),m.jsx("rect",{x:"228",y:"310",width:"64",height:"82",rx:"12",fill:"#1a1a3e",stroke:"#7b2fff",strokeWidth:"1",opacity:"0.9"}),m.jsx("path",{d:"M228 330 Q260 320 292 330",stroke:"#7b2fff",strokeWidth:"1",fill:"none",opacity:"0.5"}),m.jsx("text",{x:"244",y:"360",fontFamily:"Fira Code",fontSize:"8",fill:"#00ffff",opacity:"0.7",children:"</dev>"}),m.jsx("path",{d:"M228 325 Q200 340 185 355",stroke:"#1a1a3e",strokeWidth:"18",strokeLinecap:"round",fill:"none"}),m.jsx("path",{d:"M228 325 Q200 340 185 355",stroke:"#7b2fff",strokeWidth:"1",strokeLinecap:"round",fill:"none",opacity:"0.6"}),m.jsx("path",{d:"M292 325 Q320 340 335 355",stroke:"#1a1a3e",strokeWidth:"18",strokeLinecap:"round",fill:"none"}),m.jsx("path",{d:"M292 325 Q320 340 335 355",stroke:"#7b2fff",strokeWidth:"1",strokeLinecap:"round",fill:"none",opacity:"0.6"}),m.jsx("ellipse",{cx:"183",cy:"358",rx:"10",ry:"7",fill:"#2a1a4e",stroke:"#7b2fff",strokeWidth:"0.8"}),m.jsx("ellipse",{cx:"337",cy:"358",rx:"10",ry:"7",fill:"#2a1a4e",stroke:"#7b2fff",strokeWidth:"0.8"}),m.jsx("rect",{x:"250",y:"295",width:"20",height:"18",rx:"5",fill:"#2a1a4e",stroke:"#7b2fff",strokeWidth:"0.8"}),m.jsx("ellipse",{cx:"260",cy:"278",rx:"32",ry:"30",fill:"#1a1a3e",stroke:"#7b2fff",strokeWidth:"1.2"}),m.jsx("path",{d:"M228 268 Q230 248 260 246 Q290 248 292 268",fill:"#0a0a1a",stroke:"#7b2fff",strokeWidth:"0.8"}),m.jsx("ellipse",{cx:"249",cy:"276",rx:"5",ry:"5.5",fill:"#050510"}),m.jsx("ellipse",{cx:"271",cy:"276",rx:"5",ry:"5.5",fill:"#050510"}),m.jsx("ellipse",{cx:"250",cy:"276",rx:"3",ry:"3.5",fill:"#00ffff",opacity:"0.8",children:m.jsx("animate",{attributeName:"opacity",values:"0.8;0.4;0.8",dur:"3s",repeatCount:"indefinite"})}),m.jsx("ellipse",{cx:"272",cy:"276",rx:"3",ry:"3.5",fill:"#00ffff",opacity:"0.8",children:m.jsx("animate",{attributeName:"opacity",values:"0.8;0.4;0.8",dur:"3s",repeatCount:"indefinite"})}),m.jsx("rect",{x:"241",y:"271",width:"14",height:"11",rx:"4",fill:"none",stroke:"#00ffff",strokeWidth:"1.2",opacity:"0.9"}),m.jsx("rect",{x:"263",y:"271",width:"14",height:"11",rx:"4",fill:"none",stroke:"#00ffff",strokeWidth:"1.2",opacity:"0.9"}),m.jsx("line",{x1:"255",y1:"276",x2:"263",y2:"276",stroke:"#00ffff",strokeWidth:"1",opacity:"0.7"}),m.jsx("line",{x1:"228",y1:"276",x2:"241",y2:"276",stroke:"#00ffff",strokeWidth:"1",opacity:"0.5"}),m.jsx("line",{x1:"277",y1:"276",x2:"292",y2:"276",stroke:"#00ffff",strokeWidth:"1",opacity:"0.5"}),m.jsx("path",{d:"M228 268 Q228 248 260 246 Q292 248 292 268",fill:"none",stroke:"#7b2fff",strokeWidth:"4",strokeLinecap:"round"}),m.jsx("rect",{x:"222",y:"265",width:"10",height:"14",rx:"4",fill:"#7b2fff",opacity:"0.9"}),m.jsx("rect",{x:"288",y:"265",width:"10",height:"14",rx:"4",fill:"#7b2fff",opacity:"0.9"}),m.jsxs("g",{transform:"translate(30, 60)",children:[m.jsx("rect",{width:"60",height:"50",rx:"8",fill:"#0f0f2a",stroke:"#00ffff",strokeWidth:"1",opacity:"0.8"}),m.jsx("text",{x:"8",y:"20",fontFamily:"Fira Code",fontSize:"8",fill:"#00ffff",children:"AI"}),m.jsx("text",{x:"4",y:"32",fontFamily:"Fira Code",fontSize:"7",fill:"#7b2fff",children:"MODEL"}),m.jsx("text",{x:"6",y:"44",fontFamily:"Fira Code",fontSize:"7",fill:"#00ff88",children:"98.7%"}),m.jsx("animate",{attributeName:"opacity",values:"0.8;0.5;0.8",dur:"2s",repeatCount:"indefinite"})]}),m.jsxs("g",{transform:"translate(430, 50)",children:[m.jsx("circle",{cx:"30",cy:"30",r:"28",fill:"#0f0f2a",stroke:"#00ffff",strokeWidth:"1",opacity:"0.7"}),m.jsx("ellipse",{cx:"30",cy:"30",rx:"22",ry:"9",fill:"none",stroke:"#00ffff",strokeWidth:"1.5",opacity:"0.8"}),m.jsx("ellipse",{cx:"30",cy:"30",rx:"22",ry:"9",fill:"none",stroke:"#00ffff",strokeWidth:"1.5",opacity:"0.8",transform:"rotate(60 30 30)"}),m.jsx("ellipse",{cx:"30",cy:"30",rx:"22",ry:"9",fill:"none",stroke:"#00ffff",strokeWidth:"1.5",opacity:"0.8",transform:"rotate(120 30 30)"}),m.jsx("circle",{cx:"30",cy:"30",r:"4",fill:"#00ffff"}),m.jsx("animateTransform",{attributeName:"transform",type:"rotate",from:"0 460 80",to:"360 460 80",dur:"10s",repeatCount:"indefinite",additive:"sum"})]}),m.jsxs("g",{transform:"translate(440, 200)",children:[m.jsx("ellipse",{cx:"25",cy:"12",rx:"22",ry:"8",fill:"#0f0f2a",stroke:"#7b2fff",strokeWidth:"1",opacity:"0.8"}),m.jsx("rect",{x:"3",y:"12",width:"44",height:"20",fill:"#0f0f2a",stroke:"#7b2fff",strokeWidth:"1",opacity:"0.8"}),m.jsx("ellipse",{cx:"25",cy:"32",rx:"22",ry:"8",fill:"#0f0f2a",stroke:"#7b2fff",strokeWidth:"1",opacity:"0.8"}),m.jsx("text",{x:"10",y:"26",fontFamily:"Fira Code",fontSize:"7",fill:"#7b2fff",children:"MySQL"}),m.jsx("animate",{attributeName:"opacity",values:"0.8;0.4;0.8",dur:"3s",repeatCount:"indefinite"})]}),m.jsxs("g",{transform:"translate(20, 200)",children:[m.jsx("circle",{cx:"15",cy:"10",r:"6",fill:"#0f0f2a",stroke:"#00ff88",strokeWidth:"1.2"}),m.jsx("circle",{cx:"15",cy:"45",r:"6",fill:"#0f0f2a",stroke:"#00ff88",strokeWidth:"1.2"}),m.jsx("circle",{cx:"38",cy:"27",r:"6",fill:"#0f0f2a",stroke:"#00ff88",strokeWidth:"1.2"}),m.jsx("line",{x1:"15",y1:"16",x2:"15",y2:"39",stroke:"#00ff88",strokeWidth:"1.2"}),m.jsx("path",{d:"M15 16 Q15 27 32 27",fill:"none",stroke:"#00ff88",strokeWidth:"1.2"}),m.jsx("text",{x:"0",y:"65",fontFamily:"Fira Code",fontSize:"7",fill:"#00ff88",children:"git push"}),m.jsx("animate",{attributeName:"opacity",values:"0.9;0.5;0.9",dur:"2.5s",repeatCount:"indefinite"})]}),m.jsxs("g",{transform:"translate(20, 130)",children:[m.jsx("rect",{width:"58",height:"22",rx:"5",fill:"#0f0f2a",stroke:"#00ff88",strokeWidth:"1",opacity:"0.8"}),m.jsx("text",{x:"6",y:"15",fontFamily:"Fira Code",fontSize:"9",fill:"#00ff88",children:"Node.js"}),m.jsx("animate",{attributeName:"opacity",values:"0.8;0.4;0.8",dur:"4s",repeatCount:"indefinite"})]}),m.jsx("defs",{children:m.jsxs("radialGradient",{id:"screenGlow",cx:"50%",cy:"50%",r:"50%",children:[m.jsx("stop",{offset:"0%",stopColor:"#00ffff",stopOpacity:"0.15"}),m.jsx("stop",{offset:"100%",stopColor:"#7b2fff",stopOpacity:"0.05"})]})})]})}function sI(){const[t,e]=se.useState({x:-100,y:-100}),[n,i]=se.useState({x:-100,y:-100}),[r,s]=se.useState(!1),[a,o]=se.useState(!1),[l,c]=se.useState(!1);return se.useEffect(()=>{if(window.matchMedia("(pointer: coarse)").matches){c(!0);return}let d,f=-100,u=-100,p=-100,x=-100;const M=_=>{f=_.clientX,u=_.clientY,e({x:_.clientX,y:_.clientY}),a||o(!0)},v=()=>o(!1),h=()=>o(!0),g=_=>{const T=_.target;T.closest("a")||T.closest("button")||T.closest("input")||T.closest("textarea")||T.closest(".tilt-card-wrapper")||T.closest('[role="button"]')?s(!0):s(!1)};window.addEventListener("mousemove",M),window.addEventListener("mouseover",g),document.addEventListener("mouseleave",v),document.addEventListener("mouseenter",h);const S=()=>{p+=(f-p)*.18,x+=(u-x)*.18,i({x:p,y:x}),d=requestAnimationFrame(S)};return S(),()=>{cancelAnimationFrame(d),window.removeEventListener("mousemove",M),window.removeEventListener("mouseover",g),document.removeEventListener("mouseleave",v),document.removeEventListener("mouseenter",h)}},[a]),l||!a?null:m.jsxs(m.Fragment,{children:[m.jsx("div",{style:{position:"fixed",top:0,left:0,width:r?"10px":"6px",height:r?"10px":"6px",backgroundColor:"#00f5ff",borderRadius:"50%",pointerEvents:"none",transform:`translate3d(${t.x-(r?5:3)}px, ${t.y-(r?5:3)}px, 0)`,zIndex:99999,transition:"width 0.2s, height 0.2s, background-color 0.2s",boxShadow:"0 0 10px #00f5ff"}}),m.jsx("div",{style:{position:"fixed",top:0,left:0,width:r?"48px":"32px",height:r?"48px":"32px",border:r?"1.5px solid #00f5ff":"1px solid rgba(139, 92, 246, 0.45)",backgroundColor:r?"rgba(0, 245, 255, 0.08)":"transparent",borderRadius:"50%",pointerEvents:"none",transform:`translate3d(${n.x-(r?24:16)}px, ${n.y-(r?24:16)}px, 0)`,zIndex:99998,transition:"width 0.25s, height 0.25s, border-color 0.25s, background-color 0.25s",boxShadow:r?"0 0 20px rgba(0, 245, 255, 0.3)":"none"}})]})}function aI(){const[t,e]=se.useState(0),[n,i]=se.useState(!1);se.useEffect(()=>{const s=()=>{const a=document.documentElement.scrollHeight-window.innerHeight;if(a>0){const o=Math.min(100,Math.max(0,window.scrollY/a*100));e(o)}i(window.scrollY>350)};return window.addEventListener("scroll",s,{passive:!0}),()=>window.removeEventListener("scroll",s)},[]);const r=()=>{window.scrollTo({top:0,behavior:"smooth"})};return m.jsxs("div",{className:"app-root",children:[m.jsx(sI,{}),m.jsx("div",{className:"ambient-glow ambient-glow-1"}),m.jsx("div",{className:"ambient-glow ambient-glow-2"}),m.jsx("div",{className:"ambient-glow ambient-glow-3"}),m.jsx(iI,{}),m.jsx(cR,{}),m.jsxs("main",{children:[m.jsx(BD,{}),m.jsx(jD,{}),m.jsx(YD,{}),m.jsx(qD,{}),m.jsx(ZD,{}),m.jsx(eI,{}),m.jsx(nI,{})]}),n&&m.jsxs("button",{className:"scroll-top-btn",onClick:r,"aria-label":"Scroll back to top",children:[m.jsxs("svg",{className:"progress-ring",width:"48",height:"48",viewBox:"0 0 48 48",children:[m.jsx("circle",{className:"progress-ring-bg",stroke:"rgba(255, 255, 255, 0.1)",strokeWidth:"3",fill:"transparent",r:"20",cx:"24",cy:"24"}),m.jsx("circle",{className:"progress-ring-circle",stroke:"url(#progress-gradient)",strokeWidth:"3",strokeDasharray:2*Math.PI*20,strokeDashoffset:2*Math.PI*20*(1-t/100),strokeLinecap:"round",fill:"transparent",r:"20",cx:"24",cy:"24"}),m.jsx("defs",{children:m.jsxs("linearGradient",{id:"progress-gradient",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[m.jsx("stop",{offset:"0%",stopColor:"#00f5ff"}),m.jsx("stop",{offset:"100%",stopColor:"#8b5cf6"})]})})]}),m.jsx("i",{className:"fas fa-arrow-up scroll-top-arrow"})]})]})}V_(document.getElementById("root")).render(m.jsx(se.StrictMode,{children:m.jsx(aI,{})}));
