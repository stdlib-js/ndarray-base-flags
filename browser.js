// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e=/./,r="function"==typeof Object.defineProperty?Object.defineProperty:null,t=Object.defineProperty;function n(e){return"number"==typeof e}function i(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function o(e,r,t){var n=!1,o=r-e.length;return o<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=t?e+i(o):i(o)+e,n&&(e="-"+e)),e}var a=String.prototype.toLowerCase,c=String.prototype.toUpperCase;function u(e){var r,t,i;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,i=parseInt(t,10),!isFinite(i)){if(!n(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===e.specifier||10!==r)&&(i=4294967295+i+1),i<0?(t=(-i).toString(r),e.precision&&(t=o(t,e.precision,e.padRight)),t="-"+t):(t=i.toString(r),i||e.precision?e.precision&&(t=o(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===c.call(e.specifier)?c.call(t):a.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function s(e){return"string"==typeof e}var l=Math.abs,f=String.prototype.toLowerCase,p=String.prototype.toUpperCase,g=String.prototype.replace,d=/e\+(\d)$/,h=/e-(\d)$/,b=/^(\d+)$/,y=/^(\d+)e/,v=/\.0$/,w=/\.0*e/,m=/(\..*[^0])0*e/;function _(e){var r,t,i=parseFloat(e.arg);if(!isFinite(i)){if(!n(e.arg))throw new Error("invalid floating-point number. Value: "+t);i=e.arg}switch(e.specifier){case"e":case"E":t=i.toExponential(e.precision);break;case"f":case"F":t=i.toFixed(e.precision);break;case"g":case"G":l(i)<1e-4?((r=e.precision)>0&&(r-=1),t=i.toExponential(r)):t=i.toPrecision(e.precision),e.alternate||(t=g.call(t,m,"$1e"),t=g.call(t,w,"e"),t=g.call(t,v,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=g.call(t,d,"e+0$1"),t=g.call(t,h,"e-0$1"),e.alternate&&(t=g.call(t,b,"$1."),t=g.call(t,y,"$1.e")),i>=0&&e.sign&&(t=e.sign+t),t=e.specifier===p.call(e.specifier)?p.call(t):f.call(t)}function j(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function S(e,r,t){var n=r-e.length;return n<0?e:e=t?e+j(n):j(n)+e}var E=String.fromCharCode,k=isNaN,x=Array.isArray;function T(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function O(e){var r,t,n,i,a,c,l,f,p;if(!x(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(c="",l=1,f=0;f<e.length;f++)if(s(n=e[f]))c+=n;else{if(r=void 0!==n.precision,!(n=T(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+n+"`.");for(n.mapping&&(l=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(i=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[l],10),l+=1,k(n.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[l],10),l+=1,k(n.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[l],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!k(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=k(a)?String(n.arg):E(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=_(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=o(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=S(n.arg,n.width,n.padRight)),c+=n.arg||"",l+=1}return c}var I=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function V(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function A(e){var r,t,n,i;for(t=[],i=0,n=I.exec(e);n;)(r=e.slice(i,I.lastIndex-n[0].length)).length&&t.push(r),t.push(V(n)),i=I.lastIndex,n=I.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function F(e){return"string"==typeof e}function $(e){var r,t;if(!F(e))throw new TypeError($("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[A(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return O.apply(null,r)}var P,C=Object.prototype,N=C.toString,R=C.__defineGetter__,G=C.__defineSetter__,L=C.__lookupGetter__,Z=C.__lookupSetter__;P=function(){try{return r({},"x",{}),!0}catch(e){return!1}}()?t:function(e,r,t){var n,i,o,a;if("object"!=typeof e||null===e||"[object Array]"===N.call(e))throw new TypeError($("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===N.call(t))throw new TypeError($("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(L.call(e,r)||Z.call(e,r)?(n=e.__proto__,e.__proto__=C,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&R&&R.call(e,r,t.get),a&&G&&G.call(e,r,t.set),e};var W=P;function B(e,r,t){W(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function X(e){return"boolean"==typeof e}function M(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}var U=M();function Y(){return U&&"symbol"==typeof Symbol.toStringTag}var z=Object.prototype.toString,H=Object.prototype.hasOwnProperty;function D(e,r){return null!=e&&H.call(e,r)}var q="function"==typeof Symbol?Symbol:void 0,J="function"==typeof q?q.toStringTag:"",K=Y()?function(e){var r,t,n;if(null==e)return z.call(e);t=e[J],r=D(e,J);try{e[J]=void 0}catch(r){return z.call(e)}return n=z.call(e),r?e[J]=t:delete e[J],n}:function(e){return z.call(e)},Q=Boolean,ee=Boolean.prototype.toString,re=Y();function te(e){return"object"==typeof e&&(e instanceof Q||(re?function(e){try{return ee.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===K(e)))}function ne(e){return X(e)||te(e)}function ie(){return new Function("return this;")()}B(ne,"isPrimitive",X),B(ne,"isObject",te);var oe="object"==typeof self?self:null,ae="object"==typeof window?window:null,ce="object"==typeof globalThis?globalThis:null,ue=function(e){if(arguments.length){if(!X(e))throw new TypeError($("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return ie()}if(ce)return ce;if(oe)return oe;if(ae)return ae;throw new Error("unexpected error. Unable to resolve global object.")}(),se=ue.document&&ue.document.childNodes,le=Int8Array;function fe(){return/^\s*function\s*([^(]*)/i}var pe,ge=/^\s*function\s*([^(]*)/i;B(fe,"REGEXP",ge),pe=Array.isArray?Array.isArray:function(e){return"[object Array]"===K(e)};var de=pe;function he(e){return null!==e&&"object"==typeof e}var be=function(e){if("function"!=typeof e)throw new TypeError($("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,n;if(!de(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(he);function ye(e){var r,t,n,i;if(("Object"===(t=K(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=ge.exec(n.toString()))return r[1]}return he(i=e)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}B(he,"isObjectLikeArray",be);var ve,we="function"==typeof e||"object"==typeof le||"function"==typeof se?function(e){return ye(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"==(r=typeof e)?ye(e).toLowerCase():r},me=(ve=Object.assign,"function"===we(ve)),_e=Object.assign;function je(e){return Object.keys(Object(e))}var Se=void 0!==Object.keys,Ee=M();function ke(){return Ee&&"symbol"==typeof Symbol.toStringTag}var xe,Te=Object.prototype.toString,Oe="function"==typeof Symbol?Symbol:void 0,Ie="function"==typeof Oe?Oe.toStringTag:"",Ve=ke()?function(e){var r,t,n;if(null==e)return Te.call(e);t=e[Ie],r=D(e,Ie);try{e[Ie]=void 0}catch(r){return Te.call(e)}return n=Te.call(e),r?e[Ie]=t:delete e[Ie],n}:function(e){return Te.call(e)};function Ae(e){return"[object Arguments]"===Ve(e)}xe=function(){return Ae(arguments)}();var Fe=xe,$e="function"==typeof Object.defineProperty?Object.defineProperty:null,Pe=Object.defineProperty;function Ce(e){return"number"==typeof e}function Ne(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function Re(e,r,t){var n=!1,i=r-e.length;return i<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=t?e+Ne(i):Ne(i)+e,n&&(e="-"+e)),e}var Ge=String.prototype.toLowerCase,Le=String.prototype.toUpperCase;function Ze(e){var r,t,n;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,n=parseInt(t,10),!isFinite(n)){if(!Ce(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===e.specifier||10!==r)&&(n=4294967295+n+1),n<0?(t=(-n).toString(r),e.precision&&(t=Re(t,e.precision,e.padRight)),t="-"+t):(t=n.toString(r),n||e.precision?e.precision&&(t=Re(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===Le.call(e.specifier)?Le.call(t):Ge.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function We(e){return"string"==typeof e}var Be=Math.abs,Xe=String.prototype.toLowerCase,Me=String.prototype.toUpperCase,Ue=String.prototype.replace,Ye=/e\+(\d)$/,ze=/e-(\d)$/,He=/^(\d+)$/,De=/^(\d+)e/,qe=/\.0$/,Je=/\.0*e/,Ke=/(\..*[^0])0*e/;function Qe(e){var r,t,n=parseFloat(e.arg);if(!isFinite(n)){if(!Ce(e.arg))throw new Error("invalid floating-point number. Value: "+t);n=e.arg}switch(e.specifier){case"e":case"E":t=n.toExponential(e.precision);break;case"f":case"F":t=n.toFixed(e.precision);break;case"g":case"G":Be(n)<1e-4?((r=e.precision)>0&&(r-=1),t=n.toExponential(r)):t=n.toPrecision(e.precision),e.alternate||(t=Ue.call(t,Ke,"$1e"),t=Ue.call(t,Je,"e"),t=Ue.call(t,qe,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=Ue.call(t,Ye,"e+0$1"),t=Ue.call(t,ze,"e-0$1"),e.alternate&&(t=Ue.call(t,He,"$1."),t=Ue.call(t,De,"$1.e")),n>=0&&e.sign&&(t=e.sign+t),t=e.specifier===Me.call(e.specifier)?Me.call(t):Xe.call(t)}function er(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function rr(e,r,t){var n=r-e.length;return n<0?e:e=t?e+er(n):er(n)+e}var tr=String.fromCharCode,nr=isNaN,ir=Array.isArray;function or(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function ar(e){var r,t,n,i,o,a,c,u,s;if(!ir(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(a="",c=1,u=0;u<e.length;u++)if(We(n=e[u]))a+=n;else{if(r=void 0!==n.precision,!(n=or(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,s=0;s<t.length;s++)switch(i=t.charAt(s)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,nr(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,nr(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=Ze(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!nr(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=nr(o)?String(n.arg):tr(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=Qe(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=Re(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=rr(n.arg,n.width,n.padRight)),a+=n.arg||"",c+=1}return a}var cr=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function ur(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function sr(e){var r,t,n,i;for(t=[],i=0,n=cr.exec(e);n;)(r=e.slice(i,cr.lastIndex-n[0].length)).length&&t.push(r),t.push(ur(n)),i=cr.lastIndex,n=cr.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function lr(e){return"string"==typeof e}function fr(e){var r,t;if(!lr(e))throw new TypeError(fr("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[sr(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return ar.apply(null,r)}var pr,gr=Object.prototype,dr=gr.toString,hr=gr.__defineGetter__,br=gr.__defineSetter__,yr=gr.__lookupGetter__,vr=gr.__lookupSetter__;pr=function(){try{return $e({},"x",{}),!0}catch(e){return!1}}()?Pe:function(e,r,t){var n,i,o,a;if("object"!=typeof e||null===e||"[object Array]"===dr.call(e))throw new TypeError(fr("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===dr.call(t))throw new TypeError(fr("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(yr.call(e,r)||vr.call(e,r)?(n=e.__proto__,e.__proto__=gr,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&hr&&hr.call(e,r,t.get),a&&br&&br.call(e,r,t.set),e};var wr=pr;function mr(e,r,t){wr(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function _r(e){return"string"==typeof e}var jr=M();function Sr(){return jr&&"symbol"==typeof Symbol.toStringTag}var Er=Object.prototype.toString,kr="function"==typeof Symbol?Symbol:void 0,xr="function"==typeof kr?kr.toStringTag:"",Tr=Sr()?function(e){var r,t,n;if(null==e)return Er.call(e);t=e[xr],r=D(e,xr);try{e[xr]=void 0}catch(r){return Er.call(e)}return n=Er.call(e),r?e[xr]=t:delete e[xr],n}:function(e){return Er.call(e)},Or=String.prototype.valueOf,Ir=Sr();function Vr(e){return"object"==typeof e&&(e instanceof String||(Ir?function(e){try{return Or.call(e),!0}catch(e){return!1}}(e):"[object String]"===Tr(e)))}function Ar(e){return _r(e)||Vr(e)}mr(Ar,"isPrimitive",_r),mr(Ar,"isObject",Vr);var Fr="function"==typeof Object.defineProperty?Object.defineProperty:null,$r=Object.defineProperty;function Pr(e){return"number"==typeof e}function Cr(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function Nr(e,r,t){var n=!1,i=r-e.length;return i<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=t?e+Cr(i):Cr(i)+e,n&&(e="-"+e)),e}var Rr=String.prototype.toLowerCase,Gr=String.prototype.toUpperCase;function Lr(e){var r,t,n;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,n=parseInt(t,10),!isFinite(n)){if(!Pr(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===e.specifier||10!==r)&&(n=4294967295+n+1),n<0?(t=(-n).toString(r),e.precision&&(t=Nr(t,e.precision,e.padRight)),t="-"+t):(t=n.toString(r),n||e.precision?e.precision&&(t=Nr(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===Gr.call(e.specifier)?Gr.call(t):Rr.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function Zr(e){return"string"==typeof e}var Wr=Math.abs,Br=String.prototype.toLowerCase,Xr=String.prototype.toUpperCase,Mr=String.prototype.replace,Ur=/e\+(\d)$/,Yr=/e-(\d)$/,zr=/^(\d+)$/,Hr=/^(\d+)e/,Dr=/\.0$/,qr=/\.0*e/,Jr=/(\..*[^0])0*e/;function Kr(e){var r,t,n=parseFloat(e.arg);if(!isFinite(n)){if(!Pr(e.arg))throw new Error("invalid floating-point number. Value: "+t);n=e.arg}switch(e.specifier){case"e":case"E":t=n.toExponential(e.precision);break;case"f":case"F":t=n.toFixed(e.precision);break;case"g":case"G":Wr(n)<1e-4?((r=e.precision)>0&&(r-=1),t=n.toExponential(r)):t=n.toPrecision(e.precision),e.alternate||(t=Mr.call(t,Jr,"$1e"),t=Mr.call(t,qr,"e"),t=Mr.call(t,Dr,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=Mr.call(t,Ur,"e+0$1"),t=Mr.call(t,Yr,"e-0$1"),e.alternate&&(t=Mr.call(t,zr,"$1."),t=Mr.call(t,Hr,"$1.e")),n>=0&&e.sign&&(t=e.sign+t),t=e.specifier===Xr.call(e.specifier)?Xr.call(t):Br.call(t)}function Qr(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function et(e,r,t){var n=r-e.length;return n<0?e:e=t?e+Qr(n):Qr(n)+e}var rt=String.fromCharCode,tt=isNaN,nt=Array.isArray;function it(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function ot(e){var r,t,n,i,o,a,c,u,s;if(!nt(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(a="",c=1,u=0;u<e.length;u++)if(Zr(n=e[u]))a+=n;else{if(r=void 0!==n.precision,!(n=it(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,s=0;s<t.length;s++)switch(i=t.charAt(s)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,tt(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,tt(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=Lr(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!tt(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=tt(o)?String(n.arg):rt(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=Kr(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=Nr(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=et(n.arg,n.width,n.padRight)),a+=n.arg||"",c+=1}return a}var at=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function ct(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function ut(e){var r,t,n,i;for(t=[],i=0,n=at.exec(e);n;)(r=e.slice(i,at.lastIndex-n[0].length)).length&&t.push(r),t.push(ct(n)),i=at.lastIndex,n=at.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function st(e){return"string"==typeof e}function lt(e){var r,t;if(!st(e))throw new TypeError(lt("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[ut(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return ot.apply(null,r)}var ft,pt=Object.prototype,gt=pt.toString,dt=pt.__defineGetter__,ht=pt.__defineSetter__,bt=pt.__lookupGetter__,yt=pt.__lookupSetter__;ft=function(){try{return Fr({},"x",{}),!0}catch(e){return!1}}()?$r:function(e,r,t){var n,i,o,a;if("object"!=typeof e||null===e||"[object Array]"===gt.call(e))throw new TypeError(lt("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===gt.call(t))throw new TypeError(lt("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(bt.call(e,r)||yt.call(e,r)?(n=e.__proto__,e.__proto__=pt,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&dt&&dt.call(e,r,t.get),a&&ht&&ht.call(e,r,t.set),e};var vt=ft;function wt(e,r,t){vt(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function mt(e){return"number"==typeof e}var _t=M();function jt(){return _t&&"symbol"==typeof Symbol.toStringTag}var St=Object.prototype.toString,Et="function"==typeof Symbol?Symbol:void 0,kt="function"==typeof Et?Et.toStringTag:"",xt=jt()?function(e){var r,t,n;if(null==e)return St.call(e);t=e[kt],r=D(e,kt);try{e[kt]=void 0}catch(r){return St.call(e)}return n=St.call(e),r?e[kt]=t:delete e[kt],n}:function(e){return St.call(e)},Tt=Number,Ot=Tt.prototype.toString,It=jt();function Vt(e){return"object"==typeof e&&(e instanceof Tt||(It?function(e){try{return Ot.call(e),!0}catch(e){return!1}}(e):"[object Number]"===xt(e)))}function At(e){return mt(e)||Vt(e)}function Ft(e){return e!=e}function $t(e){return mt(e)&&Ft(e)}function Pt(e){return Vt(e)&&Ft(e.valueOf())}function Ct(e){return $t(e)||Pt(e)}function Nt(e){return"number"==typeof e}wt(At,"isPrimitive",mt),wt(At,"isObject",Vt),wt(Ct,"isPrimitive",$t),wt(Ct,"isObject",Pt);var Rt=Number,Gt=Rt.prototype.toString,Lt=Sr();function Zt(e){return"object"==typeof e&&(e instanceof Rt||(Lt?function(e){try{return Gt.call(e),!0}catch(e){return!1}}(e):"[object Number]"===Tr(e)))}function Wt(e){return Nt(e)||Zt(e)}mr(Wt,"isPrimitive",Nt),mr(Wt,"isObject",Zt);var Bt=Number.POSITIVE_INFINITY,Xt=Rt.NEGATIVE_INFINITY,Mt=Math.floor;function Ut(e){return e<Bt&&e>Xt&&Mt(r=e)===r;var r}function Yt(e){return Nt(e)&&Ut(e)}function zt(e){return Zt(e)&&Ut(e.valueOf())}function Ht(e){return Yt(e)||zt(e)}mr(Ht,"isPrimitive",Yt),mr(Ht,"isObject",zt);var Dt,qt=Object.prototype.propertyIsEnumerable,Jt=!qt.call("beep","0");function Kt(e,r){var t;return null!=e&&(!(t=qt.call(e,r))&&Jt&&Ar(e)?!$t(r=+r)&&Yt(r)&&r>=0&&r<e.length:t)}Dt=Array.isArray?Array.isArray:function(e){return"[object Array]"===Ve(e)};var Qt,en=Dt,rn=Math.floor;function tn(e){return rn(e)===e}Qt=Fe?Ae:function(e){return null!==e&&"object"==typeof e&&!en(e)&&"number"==typeof e.length&&tn(e.length)&&e.length>=0&&e.length<=4294967295&&D(e,"callee")&&!Kt(e,"callee")};var nn=Qt,on=Array.prototype.slice,an="function"==typeof Object.defineProperty?Object.defineProperty:null,cn=Object.defineProperty;function un(e){return"number"==typeof e}function sn(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function ln(e,r,t){var n=!1,i=r-e.length;return i<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=t?e+sn(i):sn(i)+e,n&&(e="-"+e)),e}var fn=String.prototype.toLowerCase,pn=String.prototype.toUpperCase;function gn(e){var r,t,n;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,n=parseInt(t,10),!isFinite(n)){if(!un(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===e.specifier||10!==r)&&(n=4294967295+n+1),n<0?(t=(-n).toString(r),e.precision&&(t=ln(t,e.precision,e.padRight)),t="-"+t):(t=n.toString(r),n||e.precision?e.precision&&(t=ln(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===pn.call(e.specifier)?pn.call(t):fn.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function dn(e){return"string"==typeof e}var hn=Math.abs,bn=String.prototype.toLowerCase,yn=String.prototype.toUpperCase,vn=String.prototype.replace,wn=/e\+(\d)$/,mn=/e-(\d)$/,_n=/^(\d+)$/,jn=/^(\d+)e/,Sn=/\.0$/,En=/\.0*e/,kn=/(\..*[^0])0*e/;function xn(e){var r,t,n=parseFloat(e.arg);if(!isFinite(n)){if(!un(e.arg))throw new Error("invalid floating-point number. Value: "+t);n=e.arg}switch(e.specifier){case"e":case"E":t=n.toExponential(e.precision);break;case"f":case"F":t=n.toFixed(e.precision);break;case"g":case"G":hn(n)<1e-4?((r=e.precision)>0&&(r-=1),t=n.toExponential(r)):t=n.toPrecision(e.precision),e.alternate||(t=vn.call(t,kn,"$1e"),t=vn.call(t,En,"e"),t=vn.call(t,Sn,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=vn.call(t,wn,"e+0$1"),t=vn.call(t,mn,"e-0$1"),e.alternate&&(t=vn.call(t,_n,"$1."),t=vn.call(t,jn,"$1.e")),n>=0&&e.sign&&(t=e.sign+t),t=e.specifier===yn.call(e.specifier)?yn.call(t):bn.call(t)}function Tn(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function On(e,r,t){var n=r-e.length;return n<0?e:e=t?e+Tn(n):Tn(n)+e}var In=String.fromCharCode,Vn=isNaN,An=Array.isArray;function Fn(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function $n(e){var r,t,n,i,o,a,c,u,s;if(!An(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(a="",c=1,u=0;u<e.length;u++)if(dn(n=e[u]))a+=n;else{if(r=void 0!==n.precision,!(n=Fn(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,s=0;s<t.length;s++)switch(i=t.charAt(s)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,Vn(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,Vn(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=gn(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!Vn(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=Vn(o)?String(n.arg):In(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=xn(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=ln(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=On(n.arg,n.width,n.padRight)),a+=n.arg||"",c+=1}return a}var Pn=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Cn(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function Nn(e){var r,t,n,i;for(t=[],i=0,n=Pn.exec(e);n;)(r=e.slice(i,Pn.lastIndex-n[0].length)).length&&t.push(r),t.push(Cn(n)),i=Pn.lastIndex,n=Pn.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function Rn(e){return"string"==typeof e}function Gn(e){var r,t;if(!Rn(e))throw new TypeError(Gn("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[Nn(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return $n.apply(null,r)}var Ln,Zn=Object.prototype,Wn=Zn.toString,Bn=Zn.__defineGetter__,Xn=Zn.__defineSetter__,Mn=Zn.__lookupGetter__,Un=Zn.__lookupSetter__;Ln=function(){try{return an({},"x",{}),!0}catch(e){return!1}}()?cn:function(e,r,t){var n,i,o,a;if("object"!=typeof e||null===e||"[object Array]"===Wn.call(e))throw new TypeError(Gn("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===Wn.call(t))throw new TypeError(Gn("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(Mn.call(e,r)||Un.call(e,r)?(n=e.__proto__,e.__proto__=Zn,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&Bn&&Bn.call(e,r,t.get),a&&Xn&&Xn.call(e,r,t.set),e};var Yn=Ln;function zn(e,r,t){Yn(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function Hn(e){return null!==e&&"object"==typeof e}var Dn=function(e){if("function"!=typeof e)throw new TypeError(Gn("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,n;if(!en(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(Hn);zn(Hn,"isObjectLikeArray",Dn);var qn=Kt((function(){}),"prototype"),Jn=!Kt({toString:null},"toString");function Kn(e){return"object"==typeof e&&null!==e&&"number"==typeof e.length&&tn(e.length)&&e.length>=0&&e.length<=9007199254740991}function Qn(e){return"string"==typeof e}var ei=String.prototype.valueOf,ri=ke();function ti(e){return"object"==typeof e&&(e instanceof String||(ri?function(e){try{return ei.call(e),!0}catch(e){return!1}}(e):"[object String]"===Ve(e)))}function ni(e){return Qn(e)||ti(e)}function ii(e){return"number"==typeof e}zn(ni,"isPrimitive",Qn),zn(ni,"isObject",ti);var oi=Number,ai=oi.prototype.toString,ci=ke();function ui(e){return"object"==typeof e&&(e instanceof oi||(ci?function(e){try{return ai.call(e),!0}catch(e){return!1}}(e):"[object Number]"===Ve(e)))}function si(e){return ii(e)||ui(e)}zn(si,"isPrimitive",ii),zn(si,"isObject",ui);var li=Number.POSITIVE_INFINITY,fi=oi.NEGATIVE_INFINITY;function pi(e){return e<li&&e>fi&&tn(e)}function gi(e){return ii(e)&&pi(e)}function di(e){return ui(e)&&pi(e.valueOf())}function hi(e){return gi(e)||di(e)}function bi(e,r,t){var n,i;if(!Kn(e)&&!Qn(e))throw new TypeError(Gn("invalid argument. First argument must be an array-like object. Value: `%s`.",e));if(0===(n=e.length))return-1;if(3===arguments.length){if(!gi(t))throw new TypeError(Gn("invalid argument. Third argument must be an integer. Value: `%s`.",t));if(t>=0){if(t>=n)return-1;i=t}else(i=n+t)<0&&(i=0)}else i=0;if(Ct(r)){for(;i<n;i++)if(Ct(e[i]))return i}else for(;i<n;i++)if(e[i]===r)return i;return-1}zn(hi,"isPrimitive",gi),zn(hi,"isObject",di);var yi=/./;function vi(e){return"boolean"==typeof e}var wi=Boolean,mi=Boolean.prototype.toString,_i=ke();function ji(e){return"object"==typeof e&&(e instanceof wi||(_i?function(e){try{return mi.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===Ve(e)))}function Si(e){return vi(e)||ji(e)}function Ei(){return new Function("return this;")()}zn(Si,"isPrimitive",vi),zn(Si,"isObject",ji);var ki="object"==typeof self?self:null,xi="object"==typeof window?window:null,Ti="object"==typeof globalThis?globalThis:null,Oi=function(e){if(arguments.length){if(!vi(e))throw new TypeError(Gn("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return Ei()}if(Ti)return Ti;if(ki)return ki;if(xi)return xi;throw new Error("unexpected error. Unable to resolve global object.")}(),Ii=Oi.document&&Oi.document.childNodes,Vi=Int8Array;function Ai(){return/^\s*function\s*([^(]*)/i}var Fi=/^\s*function\s*([^(]*)/i;function $i(e){var r,t,n;if(("Object"===(t=Ve(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=Fi.exec(n.toString()))return r[1]}return function(e){return Hn(e)&&(e._isBuffer||e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e))}(e)?"Buffer":t}zn(Ai,"REGEXP",Fi);var Pi="function"==typeof yi||"object"==typeof Vi||"function"==typeof Ii?function(e){return $i(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"==(r=typeof e)?$i(e).toLowerCase():r};function Ci(e){return e.constructor&&e.constructor.prototype===e}var Ni,Ri=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],Gi="undefined"==typeof window?void 0:window,Li=function(){var e;if("undefined"===Pi(Gi))return!1;for(e in Gi)try{-1===bi(Ri,e)&&D(Gi,e)&&null!==Gi[e]&&"object"===Pi(Gi[e])&&Ci(Gi[e])}catch(e){return!0}return!1}(),Zi="undefined"!=typeof window,Wi=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];Ni=Se?function(){return 2!==(je(arguments)||"").length}(1,2)?function(e){return nn(e)?je(on.call(e)):je(e)}:je:function(e){var r,t,n,i,o,a,c;if(i=[],nn(e)){for(c=0;c<e.length;c++)i.push(c.toString());return i}if("string"==typeof e){if(e.length>0&&!D(e,"0"))for(c=0;c<e.length;c++)i.push(c.toString())}else{if(0==(n="function"==typeof e)&&!Hn(e))return i;t=qn&&n}for(o in e)t&&"prototype"===o||!D(e,o)||i.push(String(o));if(Jn)for(r=function(e){if(!1===Zi&&!Li)return Ci(e);try{return Ci(e)}catch(e){return!1}}(e),c=0;c<Wi.length;c++)a=Wi[c],r&&"constructor"===a||!D(e,a)||i.push(String(a));return i};var Bi,Xi=Ni,Mi=void 0!==Object.getOwnPropertySymbols,Ui=Object,Yi=Ui.getOwnPropertySymbols;Bi=Mi?function(e){return Yi(Ui(e))}:function(){return[]};var zi,Hi=Bi;function Di(e){var r,t,n;for(r=Xi(e),t=Hi(e),n=0;n<t.length;n++)Kt(e,t[n])&&r.push(t[n]);return r}zi=me?_e:function(e){var r,t,n,i,o,a,c;if(null==e)throw new TypeError($("invalid argument. First argument must be a non-null object. Value: `%s`.",e));for(o=Ui(e),a=1;a<arguments.length;a++)if(null!=(r=arguments[a]))for(i=(t=Di(Ui(r))).length,c=0;c<i;c++)o[n=t[c]]=r[n];return o};var qi=zi;return function(e,r){var t=e.flags;return"object"!=typeof t||null===t?{}:r?qi({},t):t}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).flags=r();
//# sourceMappingURL=browser.js.map