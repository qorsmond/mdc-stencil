System.register([],function(t){"use strict";return{execute:function(){t({_:n,c:o});var e=function(t,n){e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)if(e.hasOwnProperty(n))t[n]=e[n]};return e(t,n)};function n(t,n){e(t,n);function r(){this.constructor=t}t.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}var r=t("a",function(){r=t("a",Object.assign||function t(e){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var i in n)if(Object.prototype.hasOwnProperty.call(n,i))e[i]=n[i]}return e});return r.apply(this,arguments)});function o(t,e){var n=typeof Symbol==="function"&&t[Symbol.iterator];if(!n)return t;var r=n.call(t),o,i=[],u;try{while((e===void 0||e-- >0)&&!(o=r.next()).done)i.push(o.value)}catch(t){u={error:t}}finally{try{if(o&&!o.done&&(n=r["return"]))n.call(r)}finally{if(u)throw u.error}}return i}function i(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(o(arguments[e]));return t}var u=t("M",function(){function t(t){if(t===void 0){t={}}this.adapter_=t}Object.defineProperty(t,"cssClasses",{get:function(){return{}},enumerable:true,configurable:true});Object.defineProperty(t,"strings",{get:function(){return{}},enumerable:true,configurable:true});Object.defineProperty(t,"numbers",{get:function(){return{}},enumerable:true,configurable:true});Object.defineProperty(t,"defaultAdapter",{get:function(){return{}},enumerable:true,configurable:true});t.prototype.init=function(){};t.prototype.destroy=function(){};return t}());var a=t("b",function(){function t(t,e){var n=[];for(var r=2;r<arguments.length;r++){n[r-2]=arguments[r]}this.root_=t;this.initialize.apply(this,i(n));this.foundation_=e===undefined?this.getDefaultFoundation():e;this.foundation_.init();this.initialSyncWithDOM()}t.attachTo=function(e){return new t(e,new u({}))};t.prototype.initialize=function(){var t=[];for(var e=0;e<arguments.length;e++){t[e]=arguments[e]}};t.prototype.getDefaultFoundation=function(){throw new Error("Subclasses must override getDefaultFoundation to return a properly configured "+"foundation class")};t.prototype.initialSyncWithDOM=function(){};t.prototype.destroy=function(){this.foundation_.destroy()};t.prototype.listen=function(t,e){this.root_.addEventListener(t,e)};t.prototype.unlisten=function(t,e){this.root_.removeEventListener(t,e)};t.prototype.emit=function(t,e,n){if(n===void 0){n=false}var r;if(typeof CustomEvent==="function"){r=new CustomEvent(t,{bubbles:n,detail:e})}else{r=document.createEvent("CustomEvent");r.initCustomEvent(t,n,false,e)}this.root_.dispatchEvent(r)};return t}())}}});