(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function t(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerpolicy&&(i.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?i.credentials="include":n.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(n){if(n.ep)return;n.ep=!0;const i=t(n);fetch(n.href,i)}})();window.Vaadin=window.Vaadin||{};window.Vaadin.featureFlags=window.Vaadin.featureFlags||{};window.Vaadin.featureFlags.exampleFeatureFlag=!1;window.Vaadin.featureFlags.hillaPush=!1;window.Vaadin.featureFlags.hillaEngine=!1;window.Vaadin.featureFlags.collaborationEngineBackend=!1;window.Vaadin.featureFlags.enforceFieldValidation=!1;window.Vaadin.featureFlags.expressBuild=!0;const Po="modulepreload",Mo=function(o,e){return new URL(o,e).href},yt={},ot=function(e,t,r){if(!t||t.length===0)return e();const n=document.getElementsByTagName("link");return Promise.all(t.map(i=>{if(i=Mo(i,r),i in yt)return;yt[i]=!0;const s=i.endsWith(".css"),c=s?'[rel="stylesheet"]':"";if(!!r)for(let u=n.length-1;u>=0;u--){const h=n[u];if(h.href===i&&(!s||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${c}`))return;const l=document.createElement("link");if(l.rel=s?"stylesheet":Po,s||(l.as="script",l.crossOrigin=""),l.href=i,document.head.appendChild(l),s)return new Promise((u,h)=>{l.addEventListener("load",u),l.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e())};function Ne(o){return o=o||[],Array.isArray(o)?o:[o]}function P(o){return`[Vaadin.Router] ${o}`}function Do(o){if(typeof o!="object")return String(o);const e=Object.prototype.toString.call(o).match(/ (.*)\]$/)[1];return e==="Object"||e==="Array"?`${e} ${JSON.stringify(o)}`:e}const ze="module",Pe="nomodule",rt=[ze,Pe];function wt(o){if(!o.match(/.+\.[m]?js$/))throw new Error(P(`Unsupported type for bundle "${o}": .js or .mjs expected.`))}function eo(o){if(!o||!z(o.path))throw new Error(P('Expected route config to be an object with a "path" string property, or an array of such objects'));const e=o.bundle,t=["component","redirect","bundle"];if(!G(o.action)&&!Array.isArray(o.children)&&!G(o.children)&&!Me(e)&&!t.some(r=>z(o[r])))throw new Error(P(`Expected route config "${o.path}" to include either "${t.join('", "')}" or "action" function but none found.`));if(e)if(z(e))wt(e);else if(rt.some(r=>r in e))rt.forEach(r=>r in e&&wt(e[r]));else throw new Error(P('Expected route bundle to include either "'+Pe+'" or "'+ze+'" keys, or both'));o.redirect&&["bundle","component"].forEach(r=>{r in o&&console.warn(P(`Route config "${o.path}" has both "redirect" and "${r}" properties, and "redirect" will always override the latter. Did you mean to only use "${r}"?`))})}function _t(o){Ne(o).forEach(e=>eo(e))}function St(o,e){let t=document.head.querySelector('script[src="'+o+'"][async]');return t||(t=document.createElement("script"),t.setAttribute("src",o),e===ze?t.setAttribute("type",ze):e===Pe&&t.setAttribute(Pe,""),t.async=!0),new Promise((r,n)=>{t.onreadystatechange=t.onload=i=>{t.__dynamicImportLoaded=!0,r(i)},t.onerror=i=>{t.parentNode&&t.parentNode.removeChild(t),n(i)},t.parentNode===null?document.head.appendChild(t):t.__dynamicImportLoaded&&r()})}function Fo(o){return z(o)?St(o):Promise.race(rt.filter(e=>e in o).map(e=>St(o[e],e)))}function ue(o,e){return!window.dispatchEvent(new CustomEvent(`vaadin-router-${o}`,{cancelable:o==="go",detail:e}))}function Me(o){return typeof o=="object"&&!!o}function G(o){return typeof o=="function"}function z(o){return typeof o=="string"}function to(o){const e=new Error(P(`Page not found (${o.pathname})`));return e.context=o,e.code=404,e}const ee=new class{};function Vo(o){const e=o.port,t=o.protocol,i=t==="http:"&&e==="80"||t==="https:"&&e==="443"?o.hostname:o.host;return`${t}//${i}`}function Et(o){if(o.defaultPrevented||o.button!==0||o.shiftKey||o.ctrlKey||o.altKey||o.metaKey)return;let e=o.target;const t=o.composedPath?o.composedPath():o.path||[];for(let c=0;c<t.length;c++){const a=t[c];if(a.nodeName&&a.nodeName.toLowerCase()==="a"){e=a;break}}for(;e&&e.nodeName.toLowerCase()!=="a";)e=e.parentNode;if(!e||e.nodeName.toLowerCase()!=="a"||e.target&&e.target.toLowerCase()!=="_self"||e.hasAttribute("download")||e.hasAttribute("router-ignore")||e.pathname===window.location.pathname&&e.hash!==""||(e.origin||Vo(e))!==window.location.origin)return;const{pathname:n,search:i,hash:s}=e;ue("go",{pathname:n,search:i,hash:s})&&(o.preventDefault(),o&&o.type==="click"&&window.scrollTo(0,0))}const Uo={activate(){window.document.addEventListener("click",Et)},inactivate(){window.document.removeEventListener("click",Et)}},Ho=/Trident/.test(navigator.userAgent);Ho&&!G(window.PopStateEvent)&&(window.PopStateEvent=function(o,e){e=e||{};var t=document.createEvent("Event");return t.initEvent(o,Boolean(e.bubbles),Boolean(e.cancelable)),t.state=e.state||null,t},window.PopStateEvent.prototype=window.Event.prototype);function $t(o){if(o.state==="vaadin-router-ignore")return;const{pathname:e,search:t,hash:r}=window.location;ue("go",{pathname:e,search:t,hash:r})}const Bo={activate(){window.addEventListener("popstate",$t)},inactivate(){window.removeEventListener("popstate",$t)}};var ae=ao,jo=at,Go=Yo,Wo=no,qo=so,oo="/",ro="./",Ko=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g");function at(o,e){for(var t=[],r=0,n=0,i="",s=e&&e.delimiter||oo,c=e&&e.delimiters||ro,a=!1,l;(l=Ko.exec(o))!==null;){var u=l[0],h=l[1],m=l.index;if(i+=o.slice(n,m),n=m+u.length,h){i+=h[1],a=!0;continue}var f="",F=o[n],L=l[2],we=l[3],He=l[4],I=l[5];if(!a&&i.length){var M=i.length-1;c.indexOf(i[M])>-1&&(f=i[M],i=i.slice(0,M))}i&&(t.push(i),i="",a=!1);var q=f!==""&&F!==void 0&&F!==f,K=I==="+"||I==="*",Be=I==="?"||I==="*",V=f||s,_e=we||He;t.push({name:L||r++,prefix:f,delimiter:V,optional:Be,repeat:K,partial:q,pattern:_e?Jo(_e):"[^"+U(V)+"]+?"})}return(i||n<o.length)&&t.push(i+o.substr(n)),t}function Yo(o,e){return no(at(o,e))}function no(o){for(var e=new Array(o.length),t=0;t<o.length;t++)typeof o[t]=="object"&&(e[t]=new RegExp("^(?:"+o[t].pattern+")$"));return function(r,n){for(var i="",s=n&&n.encode||encodeURIComponent,c=0;c<o.length;c++){var a=o[c];if(typeof a=="string"){i+=a;continue}var l=r?r[a.name]:void 0,u;if(Array.isArray(l)){if(!a.repeat)throw new TypeError('Expected "'+a.name+'" to not repeat, but got array');if(l.length===0){if(a.optional)continue;throw new TypeError('Expected "'+a.name+'" to not be empty')}for(var h=0;h<l.length;h++){if(u=s(l[h],a),!e[c].test(u))throw new TypeError('Expected all "'+a.name+'" to match "'+a.pattern+'"');i+=(h===0?a.prefix:a.delimiter)+u}continue}if(typeof l=="string"||typeof l=="number"||typeof l=="boolean"){if(u=s(String(l),a),!e[c].test(u))throw new TypeError('Expected "'+a.name+'" to match "'+a.pattern+'", but got "'+u+'"');i+=a.prefix+u;continue}if(a.optional){a.partial&&(i+=a.prefix);continue}throw new TypeError('Expected "'+a.name+'" to be '+(a.repeat?"an array":"a string"))}return i}}function U(o){return o.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function Jo(o){return o.replace(/([=!:$/()])/g,"\\$1")}function io(o){return o&&o.sensitive?"":"i"}function Xo(o,e){if(!e)return o;var t=o.source.match(/\((?!\?)/g);if(t)for(var r=0;r<t.length;r++)e.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,pattern:null});return o}function Qo(o,e,t){for(var r=[],n=0;n<o.length;n++)r.push(ao(o[n],e,t).source);return new RegExp("(?:"+r.join("|")+")",io(t))}function Zo(o,e,t){return so(at(o,t),e,t)}function so(o,e,t){t=t||{};for(var r=t.strict,n=t.start!==!1,i=t.end!==!1,s=U(t.delimiter||oo),c=t.delimiters||ro,a=[].concat(t.endsWith||[]).map(U).concat("$").join("|"),l=n?"^":"",u=o.length===0,h=0;h<o.length;h++){var m=o[h];if(typeof m=="string")l+=U(m),u=h===o.length-1&&c.indexOf(m[m.length-1])>-1;else{var f=m.repeat?"(?:"+m.pattern+")(?:"+U(m.delimiter)+"(?:"+m.pattern+"))*":m.pattern;e&&e.push(m),m.optional?m.partial?l+=U(m.prefix)+"("+f+")?":l+="(?:"+U(m.prefix)+"("+f+"))?":l+=U(m.prefix)+"("+f+")"}}return i?(r||(l+="(?:"+s+")?"),l+=a==="$"?"$":"(?="+a+")"):(r||(l+="(?:"+s+"(?="+a+"))?"),u||(l+="(?="+s+"|"+a+")")),new RegExp(l,io(t))}function ao(o,e,t){return o instanceof RegExp?Xo(o,e):Array.isArray(o)?Qo(o,e,t):Zo(o,e,t)}ae.parse=jo;ae.compile=Go;ae.tokensToFunction=Wo;ae.tokensToRegExp=qo;const{hasOwnProperty:er}=Object.prototype,nt=new Map;nt.set("|false",{keys:[],pattern:/(?:)/});function Ct(o){try{return decodeURIComponent(o)}catch{return o}}function tr(o,e,t,r,n){t=!!t;const i=`${o}|${t}`;let s=nt.get(i);if(!s){const l=[];s={keys:l,pattern:ae(o,l,{end:t,strict:o===""})},nt.set(i,s)}const c=s.pattern.exec(e);if(!c)return null;const a=Object.assign({},n);for(let l=1;l<c.length;l++){const u=s.keys[l-1],h=u.name,m=c[l];(m!==void 0||!er.call(a,h))&&(u.repeat?a[h]=m?m.split(u.delimiter).map(Ct):[]:a[h]=m&&Ct(m))}return{path:c[0],keys:(r||[]).concat(s.keys),params:a}}function lo(o,e,t,r,n){let i,s,c=0,a=o.path||"";return a.charAt(0)==="/"&&(t&&(a=a.substr(1)),t=!0),{next(l){if(o===l)return{done:!0};const u=o.__children=o.__children||o.children;if(!i&&(i=tr(a,e,!u,r,n),i))return{done:!1,value:{route:o,keys:i.keys,params:i.params,path:i.path}};if(i&&u)for(;c<u.length;){if(!s){const m=u[c];m.parent=o;let f=i.path.length;f>0&&e.charAt(f)==="/"&&(f+=1),s=lo(m,e.substr(f),t,i.keys,i.params)}const h=s.next(l);if(!h.done)return{done:!1,value:h.value};s=null,c++}return{done:!0}}}}function or(o){if(G(o.route.action))return o.route.action(o)}function rr(o,e){let t=e;for(;t;)if(t=t.parent,t===o)return!0;return!1}function nr(o){let e=`Path '${o.pathname}' is not properly resolved due to an error.`;const t=(o.route||{}).path;return t&&(e+=` Resolution had failed on route: '${t}'`),e}function ir(o,e){const{route:t,path:r}=e;if(t&&!t.__synthetic){const n={path:r,route:t};if(!o.chain)o.chain=[];else if(t.parent){let i=o.chain.length;for(;i--&&o.chain[i].route&&o.chain[i].route!==t.parent;)o.chain.pop()}o.chain.push(n)}}class he{constructor(e,t={}){if(Object(e)!==e)throw new TypeError("Invalid routes");this.baseUrl=t.baseUrl||"",this.errorHandler=t.errorHandler,this.resolveRoute=t.resolveRoute||or,this.context=Object.assign({resolver:this},t.context),this.root=Array.isArray(e)?{path:"",__children:e,parent:null,__synthetic:!0}:e,this.root.parent=null}getRoutes(){return[...this.root.__children]}setRoutes(e){_t(e);const t=[...Ne(e)];this.root.__children=t}addRoutes(e){return _t(e),this.root.__children.push(...Ne(e)),this.getRoutes()}removeRoutes(){this.setRoutes([])}resolve(e){const t=Object.assign({},this.context,z(e)?{pathname:e}:e),r=lo(this.root,this.__normalizePathname(t.pathname),this.baseUrl),n=this.resolveRoute;let i=null,s=null,c=t;function a(l,u=i.value.route,h){const m=h===null&&i.value.route;return i=s||r.next(m),s=null,!l&&(i.done||!rr(u,i.value.route))?(s=i,Promise.resolve(ee)):i.done?Promise.reject(to(t)):(c=Object.assign(c?{chain:c.chain?c.chain.slice(0):[]}:{},t,i.value),ir(c,i.value),Promise.resolve(n(c)).then(f=>f!=null&&f!==ee?(c.result=f.result||f,c):a(l,u,f)))}return t.next=a,Promise.resolve().then(()=>a(!0,this.root)).catch(l=>{const u=nr(c);if(l?console.warn(u):l=new Error(u),l.context=l.context||c,l instanceof DOMException||(l.code=l.code||500),this.errorHandler)return c.result=this.errorHandler(l),c;throw l})}static __createUrl(e,t){return new URL(e,t)}get __effectiveBaseUrl(){return this.baseUrl?this.constructor.__createUrl(this.baseUrl,document.baseURI||document.URL).href.replace(/[^\/]*$/,""):""}__normalizePathname(e){if(!this.baseUrl)return e;const t=this.__effectiveBaseUrl,r=this.constructor.__createUrl(e,t).href;if(r.slice(0,t.length)===t)return r.slice(t.length)}}he.pathToRegexp=ae;const{pathToRegexp:At}=he,Tt=new Map;function co(o,e,t){const r=e.name||e.component;if(r&&(o.has(r)?o.get(r).push(e):o.set(r,[e])),Array.isArray(t))for(let n=0;n<t.length;n++){const i=t[n];i.parent=e,co(o,i,i.__children||i.children)}}function kt(o,e){const t=o.get(e);if(t&&t.length>1)throw new Error(`Duplicate route with name "${e}". Try seting unique 'name' route properties.`);return t&&t[0]}function Rt(o){let e=o.path;return e=Array.isArray(e)?e[0]:e,e!==void 0?e:""}function sr(o,e={}){if(!(o instanceof he))throw new TypeError("An instance of Resolver is expected");const t=new Map;return(r,n)=>{let i=kt(t,r);if(!i&&(t.clear(),co(t,o.root,o.root.__children),i=kt(t,r),!i))throw new Error(`Route "${r}" not found`);let s=Tt.get(i.fullPath);if(!s){let a=Rt(i),l=i.parent;for(;l;){const f=Rt(l);f&&(a=f.replace(/\/$/,"")+"/"+a.replace(/^\//,"")),l=l.parent}const u=At.parse(a),h=At.tokensToFunction(u),m=Object.create(null);for(let f=0;f<u.length;f++)z(u[f])||(m[u[f].name]=!0);s={toPath:h,keys:m},Tt.set(a,s),i.fullPath=a}let c=s.toPath(n,e)||"/";if(e.stringifyQueryParams&&n){const a={},l=Object.keys(n);for(let h=0;h<l.length;h++){const m=l[h];s.keys[m]||(a[m]=n[m])}const u=e.stringifyQueryParams(a);u&&(c+=u.charAt(0)==="?"?u:`?${u}`)}return c}}let It=[];function ar(o){It.forEach(e=>e.inactivate()),o.forEach(e=>e.activate()),It=o}const lr=o=>{const e=getComputedStyle(o).getPropertyValue("animation-name");return e&&e!=="none"},cr=(o,e)=>{const t=()=>{o.removeEventListener("animationend",t),e()};o.addEventListener("animationend",t)};function Lt(o,e){return o.classList.add(e),new Promise(t=>{if(lr(o)){const r=o.getBoundingClientRect(),n=`height: ${r.bottom-r.top}px; width: ${r.right-r.left}px`;o.setAttribute("style",`position: absolute; ${n}`),cr(o,()=>{o.classList.remove(e),o.removeAttribute("style"),t()})}else o.classList.remove(e),t()})}const dr=256;function qe(o){return o!=null}function ur(o){const e=Object.assign({},o);return delete e.next,e}function O({pathname:o="",search:e="",hash:t="",chain:r=[],params:n={},redirectFrom:i,resolver:s},c){const a=r.map(l=>l.route);return{baseUrl:s&&s.baseUrl||"",pathname:o,search:e,hash:t,routes:a,route:c||a.length&&a[a.length-1]||null,params:n,redirectFrom:i,getUrl:(l={})=>Re(B.pathToRegexp.compile(uo(a))(Object.assign({},n,l)),s)}}function Ot(o,e){const t=Object.assign({},o.params);return{redirect:{pathname:e,from:o.pathname,params:t}}}function mr(o,e){e.location=O(o);const t=o.chain.map(r=>r.route).indexOf(o.route);return o.chain[t].element=e,e}function ke(o,e,t){if(G(o))return o.apply(t,e)}function Nt(o,e,t){return r=>{if(r&&(r.cancel||r.redirect))return r;if(t)return ke(t[o],e,t)}}function hr(o,e){if(!Array.isArray(o)&&!Me(o))throw new Error(P(`Incorrect "children" value for the route ${e.path}: expected array or object, but got ${o}`));e.__children=[];const t=Ne(o);for(let r=0;r<t.length;r++)eo(t[r]),e.__children.push(t[r])}function Ae(o){if(o&&o.length){const e=o[0].parentNode;for(let t=0;t<o.length;t++)e.removeChild(o[t])}}function Re(o,e){const t=e.__effectiveBaseUrl;return t?e.constructor.__createUrl(o.replace(/^\//,""),t).pathname:o}function uo(o){return o.map(e=>e.path).reduce((e,t)=>t.length?e.replace(/\/$/,"")+"/"+t.replace(/^\//,""):e,"")}class B extends he{constructor(e,t){const r=document.head.querySelector("base"),n=r&&r.getAttribute("href");super([],Object.assign({baseUrl:n&&he.__createUrl(n,document.URL).pathname.replace(/[^\/]*$/,"")},t)),this.resolveRoute=s=>this.__resolveRoute(s);const i=B.NavigationTrigger;B.setTriggers.apply(B,Object.keys(i).map(s=>i[s])),this.baseUrl,this.ready,this.ready=Promise.resolve(e),this.location,this.location=O({resolver:this}),this.__lastStartedRenderId=0,this.__navigationEventHandler=this.__onNavigationEvent.bind(this),this.setOutlet(e),this.subscribe(),this.__createdByRouter=new WeakMap,this.__addedByRouter=new WeakMap}__resolveRoute(e){const t=e.route;let r=Promise.resolve();G(t.children)&&(r=r.then(()=>t.children(ur(e))).then(i=>{!qe(i)&&!G(t.children)&&(i=t.children),hr(i,t)}));const n={redirect:i=>Ot(e,i),component:i=>{const s=document.createElement(i);return this.__createdByRouter.set(s,!0),s}};return r.then(()=>{if(this.__isLatestRender(e))return ke(t.action,[e,n],t)}).then(i=>{if(qe(i)&&(i instanceof HTMLElement||i.redirect||i===ee))return i;if(z(t.redirect))return n.redirect(t.redirect);if(t.bundle)return Fo(t.bundle).then(()=>{},()=>{throw new Error(P(`Bundle not found: ${t.bundle}. Check if the file name is correct`))})}).then(i=>{if(qe(i))return i;if(z(t.component))return n.component(t.component)})}setOutlet(e){e&&this.__ensureOutlet(e),this.__outlet=e}getOutlet(){return this.__outlet}setRoutes(e,t=!1){return this.__previousContext=void 0,this.__urlForName=void 0,super.setRoutes(e),t||this.__onNavigationEvent(),this.ready}render(e,t){const r=++this.__lastStartedRenderId,n=Object.assign({search:"",hash:""},z(e)?{pathname:e}:e,{__renderId:r});return this.ready=this.resolve(n).then(i=>this.__fullyResolveChain(i)).then(i=>{if(this.__isLatestRender(i)){const s=this.__previousContext;if(i===s)return this.__updateBrowserHistory(s,!0),this.location;if(this.location=O(i),t&&this.__updateBrowserHistory(i,r===1),ue("location-changed",{router:this,location:this.location}),i.__skipAttach)return this.__copyUnchangedElements(i,s),this.__previousContext=i,this.location;this.__addAppearingContent(i,s);const c=this.__animateIfNeeded(i);return this.__runOnAfterEnterCallbacks(i),this.__runOnAfterLeaveCallbacks(i,s),c.then(()=>{if(this.__isLatestRender(i))return this.__removeDisappearingContent(),this.__previousContext=i,this.location})}}).catch(i=>{if(r===this.__lastStartedRenderId)throw t&&this.__updateBrowserHistory(n),Ae(this.__outlet&&this.__outlet.children),this.location=O(Object.assign(n,{resolver:this})),ue("error",Object.assign({router:this,error:i},n)),i}),this.ready}__fullyResolveChain(e,t=e){return this.__findComponentContextAfterAllRedirects(t).then(r=>{const i=r!==t?r:e,c=Re(uo(r.chain),r.resolver)===r.pathname,a=(l,u=l.route,h)=>l.next(void 0,u,h).then(m=>m===null||m===ee?c?l:u.parent!==null?a(l,u.parent,m):m:m);return a(r).then(l=>{if(l===null||l===ee)throw to(i);return l&&l!==ee&&l!==r?this.__fullyResolveChain(i,l):this.__amendWithOnBeforeCallbacks(r)})})}__findComponentContextAfterAllRedirects(e){const t=e.result;return t instanceof HTMLElement?(mr(e,t),Promise.resolve(e)):t.redirect?this.__redirect(t.redirect,e.__redirectCount,e.__renderId).then(r=>this.__findComponentContextAfterAllRedirects(r)):t instanceof Error?Promise.reject(t):Promise.reject(new Error(P(`Invalid route resolution result for path "${e.pathname}". Expected redirect object or HTML element, but got: "${Do(t)}". Double check the action return value for the route.`)))}__amendWithOnBeforeCallbacks(e){return this.__runOnBeforeCallbacks(e).then(t=>t===this.__previousContext||t===e?t:this.__fullyResolveChain(t))}__runOnBeforeCallbacks(e){const t=this.__previousContext||{},r=t.chain||[],n=e.chain;let i=Promise.resolve();const s=()=>({cancel:!0}),c=a=>Ot(e,a);if(e.__divergedChainIndex=0,e.__skipAttach=!1,r.length){for(let a=0;a<Math.min(r.length,n.length)&&!(r[a].route!==n[a].route||r[a].path!==n[a].path&&r[a].element!==n[a].element||!this.__isReusableElement(r[a].element,n[a].element));a=++e.__divergedChainIndex);if(e.__skipAttach=n.length===r.length&&e.__divergedChainIndex==n.length&&this.__isReusableElement(e.result,t.result),e.__skipAttach){for(let a=n.length-1;a>=0;a--)i=this.__runOnBeforeLeaveCallbacks(i,e,{prevent:s},r[a]);for(let a=0;a<n.length;a++)i=this.__runOnBeforeEnterCallbacks(i,e,{prevent:s,redirect:c},n[a]),r[a].element.location=O(e,r[a].route)}else for(let a=r.length-1;a>=e.__divergedChainIndex;a--)i=this.__runOnBeforeLeaveCallbacks(i,e,{prevent:s},r[a])}if(!e.__skipAttach)for(let a=0;a<n.length;a++)a<e.__divergedChainIndex?a<r.length&&r[a].element&&(r[a].element.location=O(e,r[a].route)):(i=this.__runOnBeforeEnterCallbacks(i,e,{prevent:s,redirect:c},n[a]),n[a].element&&(n[a].element.location=O(e,n[a].route)));return i.then(a=>{if(a){if(a.cancel)return this.__previousContext.__renderId=e.__renderId,this.__previousContext;if(a.redirect)return this.__redirect(a.redirect,e.__redirectCount,e.__renderId)}return e})}__runOnBeforeLeaveCallbacks(e,t,r,n){const i=O(t);return e.then(s=>{if(this.__isLatestRender(t))return Nt("onBeforeLeave",[i,r,this],n.element)(s)}).then(s=>{if(!(s||{}).redirect)return s})}__runOnBeforeEnterCallbacks(e,t,r,n){const i=O(t,n.route);return e.then(s=>{if(this.__isLatestRender(t))return Nt("onBeforeEnter",[i,r,this],n.element)(s)})}__isReusableElement(e,t){return e&&t?this.__createdByRouter.get(e)&&this.__createdByRouter.get(t)?e.localName===t.localName:e===t:!1}__isLatestRender(e){return e.__renderId===this.__lastStartedRenderId}__redirect(e,t,r){if(t>dr)throw new Error(P(`Too many redirects when rendering ${e.from}`));return this.resolve({pathname:this.urlForPath(e.pathname,e.params),redirectFrom:e.from,__redirectCount:(t||0)+1,__renderId:r})}__ensureOutlet(e=this.__outlet){if(!(e instanceof Node))throw new TypeError(P(`Expected router outlet to be a valid DOM Node (but got ${e})`))}__updateBrowserHistory({pathname:e,search:t="",hash:r=""},n){if(window.location.pathname!==e||window.location.search!==t||window.location.hash!==r){const i=n?"replaceState":"pushState";window.history[i](null,document.title,e+t+r),window.dispatchEvent(new PopStateEvent("popstate",{state:"vaadin-router-ignore"}))}}__copyUnchangedElements(e,t){let r=this.__outlet;for(let n=0;n<e.__divergedChainIndex;n++){const i=t&&t.chain[n].element;if(i)if(i.parentNode===r)e.chain[n].element=i,r=i;else break}return r}__addAppearingContent(e,t){this.__ensureOutlet(),this.__removeAppearingContent();const r=this.__copyUnchangedElements(e,t);this.__appearingContent=[],this.__disappearingContent=Array.from(r.children).filter(i=>this.__addedByRouter.get(i)&&i!==e.result);let n=r;for(let i=e.__divergedChainIndex;i<e.chain.length;i++){const s=e.chain[i].element;s&&(n.appendChild(s),this.__addedByRouter.set(s,!0),n===r&&this.__appearingContent.push(s),n=s)}}__removeDisappearingContent(){this.__disappearingContent&&Ae(this.__disappearingContent),this.__disappearingContent=null,this.__appearingContent=null}__removeAppearingContent(){this.__disappearingContent&&this.__appearingContent&&(Ae(this.__appearingContent),this.__disappearingContent=null,this.__appearingContent=null)}__runOnAfterLeaveCallbacks(e,t){if(t)for(let r=t.chain.length-1;r>=e.__divergedChainIndex&&this.__isLatestRender(e);r--){const n=t.chain[r].element;if(n)try{const i=O(e);ke(n.onAfterLeave,[i,{},t.resolver],n)}finally{this.__disappearingContent.indexOf(n)>-1&&Ae(n.children)}}}__runOnAfterEnterCallbacks(e){for(let t=e.__divergedChainIndex;t<e.chain.length&&this.__isLatestRender(e);t++){const r=e.chain[t].element||{},n=O(e,e.chain[t].route);ke(r.onAfterEnter,[n,{},e.resolver],r)}}__animateIfNeeded(e){const t=(this.__disappearingContent||[])[0],r=(this.__appearingContent||[])[0],n=[],i=e.chain;let s;for(let c=i.length;c>0;c--)if(i[c-1].route.animate){s=i[c-1].route.animate;break}if(t&&r&&s){const c=Me(s)&&s.leave||"leaving",a=Me(s)&&s.enter||"entering";n.push(Lt(t,c)),n.push(Lt(r,a))}return Promise.all(n).then(()=>e)}subscribe(){window.addEventListener("vaadin-router-go",this.__navigationEventHandler)}unsubscribe(){window.removeEventListener("vaadin-router-go",this.__navigationEventHandler)}__onNavigationEvent(e){const{pathname:t,search:r,hash:n}=e?e.detail:window.location;z(this.__normalizePathname(t))&&(e&&e.preventDefault&&e.preventDefault(),this.render({pathname:t,search:r,hash:n},!0))}static setTriggers(...e){ar(e)}urlForName(e,t){return this.__urlForName||(this.__urlForName=sr(this)),Re(this.__urlForName(e,t),this)}urlForPath(e,t){return Re(B.pathToRegexp.compile(e)(t),this)}static go(e){const{pathname:t,search:r,hash:n}=z(e)?this.__createUrl(e,"http://a"):e;return ue("go",{pathname:t,search:r,hash:n})}}const pr=/\/\*\*\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,Ie=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function fr(){function o(){return!0}return mo(o)}function gr(){try{return vr()?!0:xr()?Ie?!br():!fr():!1}catch{return!1}}function vr(){return localStorage.getItem("vaadin.developmentmode.force")}function xr(){return["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0}function br(){return!!(Ie&&Object.keys(Ie).map(e=>Ie[e]).filter(e=>e.productionMode).length>0)}function mo(o,e){if(typeof o!="function")return;const t=pr.exec(o.toString());if(t)try{o=new Function(t[1])}catch(r){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",r)}return o(e)}window.Vaadin=window.Vaadin||{};const zt=function(o,e){if(window.Vaadin.developmentMode)return mo(o,e)};window.Vaadin.developmentMode===void 0&&(window.Vaadin.developmentMode=gr());function yr(){}const wr=function(){if(typeof zt=="function")return zt(yr)};window.Vaadin=window.Vaadin||{};window.Vaadin.registrations=window.Vaadin.registrations||[];window.Vaadin.registrations.push({is:"@vaadin/router",version:"1.7.4"});wr();B.NavigationTrigger={POPSTATE:Bo,CLICK:Uo};var Ke,S;(function(o){o.CONNECTED="connected",o.LOADING="loading",o.RECONNECTING="reconnecting",o.CONNECTION_LOST="connection-lost"})(S||(S={}));class _r{constructor(e){this.stateChangeListeners=new Set,this.loadingCount=0,this.connectionState=e,this.serviceWorkerMessageListener=this.serviceWorkerMessageListener.bind(this),navigator.serviceWorker&&(navigator.serviceWorker.addEventListener("message",this.serviceWorkerMessageListener),navigator.serviceWorker.ready.then(t=>{var r;(r=t==null?void 0:t.active)===null||r===void 0||r.postMessage({method:"Vaadin.ServiceWorker.isConnectionLost",id:"Vaadin.ServiceWorker.isConnectionLost"})}))}addStateChangeListener(e){this.stateChangeListeners.add(e)}removeStateChangeListener(e){this.stateChangeListeners.delete(e)}loadingStarted(){this.state=S.LOADING,this.loadingCount+=1}loadingFinished(){this.decreaseLoadingCount(S.CONNECTED)}loadingFailed(){this.decreaseLoadingCount(S.CONNECTION_LOST)}decreaseLoadingCount(e){this.loadingCount>0&&(this.loadingCount-=1,this.loadingCount===0&&(this.state=e))}get state(){return this.connectionState}set state(e){if(e!==this.connectionState){const t=this.connectionState;this.connectionState=e,this.loadingCount=0;for(const r of this.stateChangeListeners)r(t,this.connectionState)}}get online(){return this.connectionState===S.CONNECTED||this.connectionState===S.LOADING}get offline(){return!this.online}serviceWorkerMessageListener(e){typeof e.data=="object"&&e.data.id==="Vaadin.ServiceWorker.isConnectionLost"&&(e.data.result===!0&&(this.state=S.CONNECTION_LOST),navigator.serviceWorker.removeEventListener("message",this.serviceWorkerMessageListener))}}const Te=window;!((Ke=Te.Vaadin)===null||Ke===void 0)&&Ke.connectionState||(Te.Vaadin=Te.Vaadin||{},Te.Vaadin.connectionState=new _r(navigator.onLine?S.CONNECTED:S.CONNECTION_LOST));function R(o,e,t,r){var n=arguments.length,i=n<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(o,e,t,r);else for(var c=o.length-1;c>=0;c--)(s=o[c])&&(i=(n<3?s(i):n>3?s(e,t,i):s(e,t))||i);return n>3&&i&&Object.defineProperty(e,t,i),i}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Le=window,lt=Le.ShadowRoot&&(Le.ShadyCSS===void 0||Le.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ct=Symbol(),Pt=new WeakMap;let dt=class{constructor(e,t,r){if(this._$cssResult$=!0,r!==ct)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(lt&&e===void 0){const r=t!==void 0&&t.length===1;r&&(e=Pt.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&Pt.set(t,e))}return e}toString(){return this.cssText}};const Sr=o=>new dt(typeof o=="string"?o:o+"",void 0,ct),x=(o,...e)=>{const t=o.length===1?o[0]:e.reduce((r,n,i)=>r+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+o[i+1],o[0]);return new dt(t,o,ct)},Er=(o,e)=>{lt?o.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(t=>{const r=document.createElement("style"),n=Le.litNonce;n!==void 0&&r.setAttribute("nonce",n),r.textContent=t.cssText,o.appendChild(r)})},Mt=lt?o=>o:o=>o instanceof CSSStyleSheet?(e=>{let t="";for(const r of e.cssRules)t+=r.cssText;return Sr(t)})(o):o;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ye;const De=window,Dt=De.trustedTypes,$r=Dt?Dt.emptyScript:"",Ft=De.reactiveElementPolyfillSupport,it={toAttribute(o,e){switch(e){case Boolean:o=o?$r:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,e){let t=o;switch(e){case Boolean:t=o!==null;break;case Number:t=o===null?null:Number(o);break;case Object:case Array:try{t=JSON.parse(o)}catch{t=null}}return t}},ho=(o,e)=>e!==o&&(e==e||o==o),Je={attribute:!0,type:String,converter:it,reflect:!1,hasChanged:ho};let Z=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(e){var t;this.finalize(),((t=this.h)!==null&&t!==void 0?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((t,r)=>{const n=this._$Ep(r,t);n!==void 0&&(this._$Ev.set(n,r),e.push(n))}),e}static createProperty(e,t=Je){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const r=typeof e=="symbol"?Symbol():"__"+e,n=this.getPropertyDescriptor(e,r,t);n!==void 0&&Object.defineProperty(this.prototype,e,n)}}static getPropertyDescriptor(e,t,r){return{get(){return this[t]},set(n){const i=this[e];this[t]=n,this.requestUpdate(e,i,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||Je}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,r=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const n of r)this.createProperty(n,t[n])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const n of r)t.unshift(Mt(n))}else e!==void 0&&t.push(Mt(e));return t}static _$Ep(e,t){const r=t.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}u(){var e;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,r;((t=this._$ES)!==null&&t!==void 0?t:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((r=e.hostConnected)===null||r===void 0||r.call(e))}removeController(e){var t;(t=this._$ES)===null||t===void 0||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;const t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return Er(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(t=>{var r;return(r=t.hostConnected)===null||r===void 0?void 0:r.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(t=>{var r;return(r=t.hostDisconnected)===null||r===void 0?void 0:r.call(t)})}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$EO(e,t,r=Je){var n;const i=this.constructor._$Ep(e,r);if(i!==void 0&&r.reflect===!0){const s=(((n=r.converter)===null||n===void 0?void 0:n.toAttribute)!==void 0?r.converter:it).toAttribute(t,r.type);this._$El=e,s==null?this.removeAttribute(i):this.setAttribute(i,s),this._$El=null}}_$AK(e,t){var r;const n=this.constructor,i=n._$Ev.get(e);if(i!==void 0&&this._$El!==i){const s=n.getPropertyOptions(i),c=typeof s.converter=="function"?{fromAttribute:s.converter}:((r=s.converter)===null||r===void 0?void 0:r.fromAttribute)!==void 0?s.converter:it;this._$El=i,this[i]=c.fromAttribute(t,s.type),this._$El=null}}requestUpdate(e,t,r){let n=!0;e!==void 0&&(((r=r||this.constructor.getPropertyOptions(e)).hasChanged||ho)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),r.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,r))):n=!1),!this.isUpdatePending&&n&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((n,i)=>this[i]=n),this._$Ei=void 0);let t=!1;const r=this._$AL;try{t=this.shouldUpdate(r),t?(this.willUpdate(r),(e=this._$ES)===null||e===void 0||e.forEach(n=>{var i;return(i=n.hostUpdate)===null||i===void 0?void 0:i.call(n)}),this.update(r)):this._$Ek()}catch(n){throw t=!1,this._$Ek(),n}t&&this._$AE(r)}willUpdate(e){}_$AE(e){var t;(t=this._$ES)===null||t===void 0||t.forEach(r=>{var n;return(n=r.hostUpdated)===null||n===void 0?void 0:n.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,r)=>this._$EO(r,this[r],t)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};Z.finalized=!0,Z.elementProperties=new Map,Z.elementStyles=[],Z.shadowRootOptions={mode:"open"},Ft==null||Ft({ReactiveElement:Z}),((Ye=De.reactiveElementVersions)!==null&&Ye!==void 0?Ye:De.reactiveElementVersions=[]).push("1.6.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Xe;const Fe=window,re=Fe.trustedTypes,Vt=re?re.createPolicy("lit-html",{createHTML:o=>o}):void 0,H=`lit$${(Math.random()+"").slice(9)}$`,po="?"+H,Cr=`<${po}>`,ne=document,pe=(o="")=>ne.createComment(o),fe=o=>o===null||typeof o!="object"&&typeof o!="function",fo=Array.isArray,Ar=o=>fo(o)||typeof(o==null?void 0:o[Symbol.iterator])=="function",le=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ut=/-->/g,Ht=/>/g,j=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Bt=/'/g,jt=/"/g,go=/^(?:script|style|textarea|title)$/i,vo=o=>(e,...t)=>({_$litType$:o,strings:e,values:t}),k=vo(1),Ln=vo(2),W=Symbol.for("lit-noChange"),_=Symbol.for("lit-nothing"),Gt=new WeakMap,te=ne.createTreeWalker(ne,129,null,!1),Tr=(o,e)=>{const t=o.length-1,r=[];let n,i=e===2?"<svg>":"",s=le;for(let a=0;a<t;a++){const l=o[a];let u,h,m=-1,f=0;for(;f<l.length&&(s.lastIndex=f,h=s.exec(l),h!==null);)f=s.lastIndex,s===le?h[1]==="!--"?s=Ut:h[1]!==void 0?s=Ht:h[2]!==void 0?(go.test(h[2])&&(n=RegExp("</"+h[2],"g")),s=j):h[3]!==void 0&&(s=j):s===j?h[0]===">"?(s=n??le,m=-1):h[1]===void 0?m=-2:(m=s.lastIndex-h[2].length,u=h[1],s=h[3]===void 0?j:h[3]==='"'?jt:Bt):s===jt||s===Bt?s=j:s===Ut||s===Ht?s=le:(s=j,n=void 0);const F=s===j&&o[a+1].startsWith("/>")?" ":"";i+=s===le?l+Cr:m>=0?(r.push(u),l.slice(0,m)+"$lit$"+l.slice(m)+H+F):l+H+(m===-2?(r.push(void 0),a):F)}const c=i+(o[t]||"<?>")+(e===2?"</svg>":"");if(!Array.isArray(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return[Vt!==void 0?Vt.createHTML(c):c,r]};class ge{constructor({strings:e,_$litType$:t},r){let n;this.parts=[];let i=0,s=0;const c=e.length-1,a=this.parts,[l,u]=Tr(e,t);if(this.el=ge.createElement(l,r),te.currentNode=this.el.content,t===2){const h=this.el.content,m=h.firstChild;m.remove(),h.append(...m.childNodes)}for(;(n=te.nextNode())!==null&&a.length<c;){if(n.nodeType===1){if(n.hasAttributes()){const h=[];for(const m of n.getAttributeNames())if(m.endsWith("$lit$")||m.startsWith(H)){const f=u[s++];if(h.push(m),f!==void 0){const F=n.getAttribute(f.toLowerCase()+"$lit$").split(H),L=/([.?@])?(.*)/.exec(f);a.push({type:1,index:i,name:L[2],strings:F,ctor:L[1]==="."?Rr:L[1]==="?"?Lr:L[1]==="@"?Or:Ve})}else a.push({type:6,index:i})}for(const m of h)n.removeAttribute(m)}if(go.test(n.tagName)){const h=n.textContent.split(H),m=h.length-1;if(m>0){n.textContent=re?re.emptyScript:"";for(let f=0;f<m;f++)n.append(h[f],pe()),te.nextNode(),a.push({type:2,index:++i});n.append(h[m],pe())}}}else if(n.nodeType===8)if(n.data===po)a.push({type:2,index:i});else{let h=-1;for(;(h=n.data.indexOf(H,h+1))!==-1;)a.push({type:7,index:i}),h+=H.length-1}i++}}static createElement(e,t){const r=ne.createElement("template");return r.innerHTML=e,r}}function ie(o,e,t=o,r){var n,i,s,c;if(e===W)return e;let a=r!==void 0?(n=t._$Co)===null||n===void 0?void 0:n[r]:t._$Cl;const l=fe(e)?void 0:e._$litDirective$;return(a==null?void 0:a.constructor)!==l&&((i=a==null?void 0:a._$AO)===null||i===void 0||i.call(a,!1),l===void 0?a=void 0:(a=new l(o),a._$AT(o,t,r)),r!==void 0?((s=(c=t)._$Co)!==null&&s!==void 0?s:c._$Co=[])[r]=a:t._$Cl=a),a!==void 0&&(e=ie(o,a._$AS(o,e.values),a,r)),e}class kr{constructor(e,t){this.u=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(e){var t;const{el:{content:r},parts:n}=this._$AD,i=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:ne).importNode(r,!0);te.currentNode=i;let s=te.nextNode(),c=0,a=0,l=n[0];for(;l!==void 0;){if(c===l.index){let u;l.type===2?u=new be(s,s.nextSibling,this,e):l.type===1?u=new l.ctor(s,l.name,l.strings,this,e):l.type===6&&(u=new Nr(s,this,e)),this.u.push(u),l=n[++a]}c!==(l==null?void 0:l.index)&&(s=te.nextNode(),c++)}return i}p(e){let t=0;for(const r of this.u)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}}class be{constructor(e,t,r,n){var i;this.type=2,this._$AH=_,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=n,this._$Cm=(i=n==null?void 0:n.isConnected)===null||i===void 0||i}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cm}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&e.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=ie(this,e,t),fe(e)?e===_||e==null||e===""?(this._$AH!==_&&this._$AR(),this._$AH=_):e!==this._$AH&&e!==W&&this.g(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Ar(e)?this.k(e):this.g(e)}O(e,t=this._$AB){return this._$AA.parentNode.insertBefore(e,t)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}g(e){this._$AH!==_&&fe(this._$AH)?this._$AA.nextSibling.data=e:this.T(ne.createTextNode(e)),this._$AH=e}$(e){var t;const{values:r,_$litType$:n}=e,i=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=ge.createElement(n.h,this.options)),n);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===i)this._$AH.p(r);else{const s=new kr(i,this),c=s.v(this.options);s.p(r),this.T(c),this._$AH=s}}_$AC(e){let t=Gt.get(e.strings);return t===void 0&&Gt.set(e.strings,t=new ge(e)),t}k(e){fo(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let r,n=0;for(const i of e)n===t.length?t.push(r=new be(this.O(pe()),this.O(pe()),this,this.options)):r=t[n],r._$AI(i),n++;n<t.length&&(this._$AR(r&&r._$AB.nextSibling,n),t.length=n)}_$AR(e=this._$AA.nextSibling,t){var r;for((r=this._$AP)===null||r===void 0||r.call(this,!1,!0,t);e&&e!==this._$AB;){const n=e.nextSibling;e.remove(),e=n}}setConnected(e){var t;this._$AM===void 0&&(this._$Cm=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}}class Ve{constructor(e,t,r,n,i){this.type=1,this._$AH=_,this._$AN=void 0,this.element=e,this.name=t,this._$AM=n,this.options=i,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=_}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,r,n){const i=this.strings;let s=!1;if(i===void 0)e=ie(this,e,t,0),s=!fe(e)||e!==this._$AH&&e!==W,s&&(this._$AH=e);else{const c=e;let a,l;for(e=i[0],a=0;a<i.length-1;a++)l=ie(this,c[r+a],t,a),l===W&&(l=this._$AH[a]),s||(s=!fe(l)||l!==this._$AH[a]),l===_?e=_:e!==_&&(e+=(l??"")+i[a+1]),this._$AH[a]=l}s&&!n&&this.j(e)}j(e){e===_?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Rr extends Ve{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===_?void 0:e}}const Ir=re?re.emptyScript:"";class Lr extends Ve{constructor(){super(...arguments),this.type=4}j(e){e&&e!==_?this.element.setAttribute(this.name,Ir):this.element.removeAttribute(this.name)}}class Or extends Ve{constructor(e,t,r,n,i){super(e,t,r,n,i),this.type=5}_$AI(e,t=this){var r;if((e=(r=ie(this,e,t,0))!==null&&r!==void 0?r:_)===W)return;const n=this._$AH,i=e===_&&n!==_||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,s=e!==_&&(n===_||i);i&&this.element.removeEventListener(this.name,this,n),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,r;typeof this._$AH=="function"?this._$AH.call((r=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&r!==void 0?r:this.element,e):this._$AH.handleEvent(e)}}class Nr{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){ie(this,e)}}const Wt=Fe.litHtmlPolyfillSupport;Wt==null||Wt(ge,be),((Xe=Fe.litHtmlVersions)!==null&&Xe!==void 0?Xe:Fe.litHtmlVersions=[]).push("2.6.1");const zr=(o,e,t)=>{var r,n;const i=(r=t==null?void 0:t.renderBefore)!==null&&r!==void 0?r:e;let s=i._$litPart$;if(s===void 0){const c=(n=t==null?void 0:t.renderBefore)!==null&&n!==void 0?n:null;i._$litPart$=s=new be(e.insertBefore(pe(),c),c,void 0,t??{})}return s._$AI(o),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Qe,Ze;class oe extends Z{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const r=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=r.firstChild),r}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=zr(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return W}}oe.finalized=!0,oe._$litElement$=!0,(Qe=globalThis.litElementHydrateSupport)===null||Qe===void 0||Qe.call(globalThis,{LitElement:oe});const qt=globalThis.litElementPolyfillSupport;qt==null||qt({LitElement:oe});((Ze=globalThis.litElementVersions)!==null&&Ze!==void 0?Ze:globalThis.litElementVersions=[]).push("3.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Pr=(o,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(t){t.createProperty(e.key,o)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(t){t.createProperty(e.key,o)}};function w(o){return(e,t)=>t!==void 0?((r,n,i)=>{n.constructor.createProperty(i,r)})(o,e,t):Pr(o,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ye(o){return w({...o,state:!0})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Mr=({finisher:o,descriptor:e})=>(t,r)=>{var n;if(r===void 0){const i=(n=t.originalKey)!==null&&n!==void 0?n:t.key,s=e!=null?{kind:"method",placement:"prototype",key:i,descriptor:e(t.key)}:{...t,key:i};return o!=null&&(s.finisher=function(c){o(c,i)}),s}{const i=t.constructor;e!==void 0&&Object.defineProperty(t,r,e(r)),o==null||o(i,r)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Dr(o,e){return Mr({descriptor:t=>{const r={get(){var n,i;return(i=(n=this.renderRoot)===null||n===void 0?void 0:n.querySelector(o))!==null&&i!==void 0?i:null},enumerable:!0,configurable:!0};if(e){const n=typeof t=="symbol"?Symbol():"__"+t;r.get=function(){var i,s;return this[n]===void 0&&(this[n]=(s=(i=this.renderRoot)===null||i===void 0?void 0:i.querySelector(o))!==null&&s!==void 0?s:null),this[n]}}return r}})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var et;((et=window.HTMLSlotElement)===null||et===void 0?void 0:et.prototype.assignedElements)!=null;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Fr={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Vr=o=>(...e)=>({_$litDirective$:o,values:e});class Ur{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,r){this._$Ct=e,this._$AM=t,this._$Ci=r}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const xo=Vr(class extends Ur{constructor(o){var e;if(super(o),o.type!==Fr.ATTRIBUTE||o.name!=="class"||((e=o.strings)===null||e===void 0?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(o){return" "+Object.keys(o).filter(e=>o[e]).join(" ")+" "}update(o,[e]){var t,r;if(this.nt===void 0){this.nt=new Set,o.strings!==void 0&&(this.st=new Set(o.strings.join(" ").split(/\s/).filter(i=>i!=="")));for(const i in e)e[i]&&!(!((t=this.st)===null||t===void 0)&&t.has(i))&&this.nt.add(i);return this.render(e)}const n=o.element.classList;this.nt.forEach(i=>{i in e||(n.remove(i),this.nt.delete(i))});for(const i in e){const s=!!e[i];s===this.nt.has(i)||!((r=this.st)===null||r===void 0)&&r.has(i)||(s?(n.add(i),this.nt.add(i)):(n.remove(i),this.nt.delete(i)))}return W}}),tt="css-loading-indicator";var N;(function(o){o.IDLE="",o.FIRST="first",o.SECOND="second",o.THIRD="third"})(N||(N={}));class E extends oe{constructor(){super(),this.firstDelay=300,this.secondDelay=1500,this.thirdDelay=5e3,this.expandedDuration=2e3,this.onlineText="Online",this.offlineText="Connection lost",this.reconnectingText="Connection lost, trying to reconnect...",this.offline=!1,this.reconnecting=!1,this.expanded=!1,this.loading=!1,this.loadingBarState=N.IDLE,this.applyDefaultThemeState=!0,this.firstTimeout=0,this.secondTimeout=0,this.thirdTimeout=0,this.expandedTimeout=0,this.lastMessageState=S.CONNECTED,this.connectionStateListener=()=>{this.expanded=this.updateConnectionState(),this.expandedTimeout=this.timeoutFor(this.expandedTimeout,this.expanded,()=>{this.expanded=!1},this.expandedDuration)}}static create(){var e,t;const r=window;return!((e=r.Vaadin)===null||e===void 0)&&e.connectionIndicator||(r.Vaadin=r.Vaadin||{},r.Vaadin.connectionIndicator=document.createElement("vaadin-connection-indicator"),document.body.appendChild(r.Vaadin.connectionIndicator)),(t=r.Vaadin)===null||t===void 0?void 0:t.connectionIndicator}render(){return k`
      <div class="v-loading-indicator ${this.loadingBarState}" style=${this.getLoadingBarStyle()}></div>

      <div
        class="v-status-message ${xo({active:this.reconnecting})}"
      >
        <span class="text"> ${this.renderMessage()} </span>
      </div>
    `}connectedCallback(){var e;super.connectedCallback();const t=window;!((e=t.Vaadin)===null||e===void 0)&&e.connectionState&&(this.connectionStateStore=t.Vaadin.connectionState,this.connectionStateStore.addStateChangeListener(this.connectionStateListener),this.updateConnectionState()),this.updateTheme()}disconnectedCallback(){super.disconnectedCallback(),this.connectionStateStore&&this.connectionStateStore.removeStateChangeListener(this.connectionStateListener),this.updateTheme()}get applyDefaultTheme(){return this.applyDefaultThemeState}set applyDefaultTheme(e){e!==this.applyDefaultThemeState&&(this.applyDefaultThemeState=e,this.updateTheme())}createRenderRoot(){return this}updateConnectionState(){var e;const t=(e=this.connectionStateStore)===null||e===void 0?void 0:e.state;return this.offline=t===S.CONNECTION_LOST,this.reconnecting=t===S.RECONNECTING,this.updateLoading(t===S.LOADING),this.loading?!1:t!==this.lastMessageState?(this.lastMessageState=t,!0):!1}updateLoading(e){this.loading=e,this.loadingBarState=N.IDLE,this.firstTimeout=this.timeoutFor(this.firstTimeout,e,()=>{this.loadingBarState=N.FIRST},this.firstDelay),this.secondTimeout=this.timeoutFor(this.secondTimeout,e,()=>{this.loadingBarState=N.SECOND},this.secondDelay),this.thirdTimeout=this.timeoutFor(this.thirdTimeout,e,()=>{this.loadingBarState=N.THIRD},this.thirdDelay)}renderMessage(){return this.reconnecting?this.reconnectingText:this.offline?this.offlineText:this.onlineText}updateTheme(){if(this.applyDefaultThemeState&&this.isConnected){if(!document.getElementById(tt)){const e=document.createElement("style");e.id=tt,e.textContent=this.getDefaultStyle(),document.head.appendChild(e)}}else{const e=document.getElementById(tt);e&&document.head.removeChild(e)}}getDefaultStyle(){return`
      @keyframes v-progress-start {
        0% {
          width: 0%;
        }
        100% {
          width: 50%;
        }
      }
      @keyframes v-progress-delay {
        0% {
          width: 50%;
        }
        100% {
          width: 90%;
        }
      }
      @keyframes v-progress-wait {
        0% {
          width: 90%;
          height: 4px;
        }
        3% {
          width: 91%;
          height: 7px;
        }
        100% {
          width: 96%;
          height: 7px;
        }
      }
      @keyframes v-progress-wait-pulse {
        0% {
          opacity: 1;
        }
        50% {
          opacity: 0.1;
        }
        100% {
          opacity: 1;
        }
      }
      .v-loading-indicator,
      .v-status-message {
        position: fixed;
        z-index: 251;
        left: 0;
        right: auto;
        top: 0;
        background-color: var(--lumo-primary-color, var(--material-primary-color, blue));
        transition: none;
      }
      .v-loading-indicator {
        width: 50%;
        height: 4px;
        opacity: 1;
        pointer-events: none;
        animation: v-progress-start 1000ms 200ms both;
      }
      .v-loading-indicator[style*='none'] {
        display: block !important;
        width: 100%;
        opacity: 0;
        animation: none;
        transition: opacity 500ms 300ms, width 300ms;
      }
      .v-loading-indicator.second {
        width: 90%;
        animation: v-progress-delay 3.8s forwards;
      }
      .v-loading-indicator.third {
        width: 96%;
        animation: v-progress-wait 5s forwards, v-progress-wait-pulse 1s 4s infinite backwards;
      }

      vaadin-connection-indicator[offline] .v-loading-indicator,
      vaadin-connection-indicator[reconnecting] .v-loading-indicator {
        display: none;
      }

      .v-status-message {
        opacity: 0;
        width: 100%;
        max-height: var(--status-height-collapsed, 8px);
        overflow: hidden;
        background-color: var(--status-bg-color-online, var(--lumo-primary-color, var(--material-primary-color, blue)));
        color: var(
          --status-text-color-online,
          var(--lumo-primary-contrast-color, var(--material-primary-contrast-color, #fff))
        );
        font-size: 0.75rem;
        font-weight: 600;
        line-height: 1;
        transition: all 0.5s;
        padding: 0 0.5em;
      }

      vaadin-connection-indicator[offline] .v-status-message,
      vaadin-connection-indicator[reconnecting] .v-status-message {
        opacity: 1;
        background-color: var(--status-bg-color-offline, var(--lumo-shade, #333));
        color: var(
          --status-text-color-offline,
          var(--lumo-primary-contrast-color, var(--material-primary-contrast-color, #fff))
        );
        background-image: repeating-linear-gradient(
          45deg,
          rgba(255, 255, 255, 0),
          rgba(255, 255, 255, 0) 10px,
          rgba(255, 255, 255, 0.1) 10px,
          rgba(255, 255, 255, 0.1) 20px
        );
      }

      vaadin-connection-indicator[reconnecting] .v-status-message {
        animation: show-reconnecting-status 2s;
      }

      vaadin-connection-indicator[offline] .v-status-message:hover,
      vaadin-connection-indicator[reconnecting] .v-status-message:hover,
      vaadin-connection-indicator[expanded] .v-status-message {
        max-height: var(--status-height, 1.75rem);
      }

      vaadin-connection-indicator[expanded] .v-status-message {
        opacity: 1;
      }

      .v-status-message span {
        display: flex;
        align-items: center;
        justify-content: center;
        height: var(--status-height, 1.75rem);
      }

      vaadin-connection-indicator[reconnecting] .v-status-message span::before {
        content: '';
        width: 1em;
        height: 1em;
        border-top: 2px solid
          var(--status-spinner-color, var(--lumo-primary-color, var(--material-primary-color, blue)));
        border-left: 2px solid
          var(--status-spinner-color, var(--lumo-primary-color, var(--material-primary-color, blue)));
        border-right: 2px solid transparent;
        border-bottom: 2px solid transparent;
        border-radius: 50%;
        box-sizing: border-box;
        animation: v-spin 0.4s linear infinite;
        margin: 0 0.5em;
      }

      @keyframes v-spin {
        100% {
          transform: rotate(360deg);
        }
      }
    `}getLoadingBarStyle(){switch(this.loadingBarState){case N.IDLE:return"display: none";case N.FIRST:case N.SECOND:case N.THIRD:return"display: block";default:return""}}timeoutFor(e,t,r,n){return e!==0&&window.clearTimeout(e),t?window.setTimeout(r,n):0}static get instance(){return E.create()}}R([w({type:Number})],E.prototype,"firstDelay",void 0);R([w({type:Number})],E.prototype,"secondDelay",void 0);R([w({type:Number})],E.prototype,"thirdDelay",void 0);R([w({type:Number})],E.prototype,"expandedDuration",void 0);R([w({type:String})],E.prototype,"onlineText",void 0);R([w({type:String})],E.prototype,"offlineText",void 0);R([w({type:String})],E.prototype,"reconnectingText",void 0);R([w({type:Boolean,reflect:!0})],E.prototype,"offline",void 0);R([w({type:Boolean,reflect:!0})],E.prototype,"reconnecting",void 0);R([w({type:Boolean,reflect:!0})],E.prototype,"expanded",void 0);R([w({type:Boolean,reflect:!0})],E.prototype,"loading",void 0);R([w({type:String})],E.prototype,"loadingBarState",void 0);R([w({type:Boolean})],E.prototype,"applyDefaultTheme",null);customElements.get("vaadin-connection-indicator")===void 0&&customElements.define("vaadin-connection-indicator",E);E.instance;const ve=window;ve.Vaadin=ve.Vaadin||{};ve.Vaadin.registrations=ve.Vaadin.registrations||[];ve.Vaadin.registrations.push({is:"@vaadin/common-frontend",version:"0.0.17"});class Kt extends Error{}const ce=window.document.body,y=window;class Hr{constructor(e){this.response=void 0,this.pathname="",this.isActive=!1,this.baseRegex=/^\//,ce.$=ce.$||[],this.config=e||{},y.Vaadin=y.Vaadin||{},y.Vaadin.Flow=y.Vaadin.Flow||{},y.Vaadin.Flow.clients={TypeScript:{isActive:()=>this.isActive}};const t=document.head.querySelector("base");this.baseRegex=new RegExp(`^${(document.baseURI||t&&t.href||"/").replace(/^https?:\/\/[^/]+/i,"")}`),this.appShellTitle=document.title,this.addConnectionIndicator()}get serverSideRoutes(){return[{path:"(.*)",action:this.action}]}loadingStarted(){this.isActive=!0,y.Vaadin.connectionState.loadingStarted()}loadingFinished(){this.isActive=!1,y.Vaadin.connectionState.loadingFinished()}get action(){return async e=>{if(this.pathname=e.pathname,y.Vaadin.connectionState.online)try{await this.flowInit()}catch(t){if(t instanceof Kt)return y.Vaadin.connectionState.state=S.CONNECTION_LOST,this.offlineStubAction();throw t}else return this.offlineStubAction();return this.container.onBeforeEnter=(t,r)=>this.flowNavigate(t,r),this.container.onBeforeLeave=(t,r)=>this.flowLeave(t,r),this.container}}async flowLeave(e,t){const{connectionState:r}=y.Vaadin;return this.pathname===e.pathname||!this.isFlowClientLoaded()||r.offline?Promise.resolve({}):new Promise(n=>{this.loadingStarted(),this.container.serverConnected=i=>{n(t&&i?t.prevent():{}),this.loadingFinished()},ce.$server.leaveNavigation(this.getFlowRoutePath(e),this.getFlowRouteQuery(e))})}async flowNavigate(e,t){return this.response?new Promise(r=>{this.loadingStarted(),this.container.serverConnected=(n,i)=>{t&&n?r(t.prevent()):t&&t.redirect&&i?r(t.redirect(i.pathname)):(this.container.style.display="",r(this.container)),this.loadingFinished()},ce.$server.connectClient(this.container.localName,this.container.id,this.getFlowRoutePath(e),this.getFlowRouteQuery(e),this.appShellTitle,history.state)}):Promise.resolve(this.container)}getFlowRoutePath(e){return decodeURIComponent(e.pathname).replace(this.baseRegex,"")}getFlowRouteQuery(e){return e.search&&e.search.substring(1)||""}async flowInit(e=!1){if(!this.isFlowClientLoaded()){this.loadingStarted(),this.response=await this.flowInitUi(e),this.response.appConfig.clientRouting=!e;const{pushScript:t,appConfig:r}=this.response;typeof t=="string"&&await this.loadScript(t);const{appId:n}=r;await(await ot(()=>import("./FlowBootstrap-feff2646.js"),[],import.meta.url)).init(this.response),typeof this.config.imports=="function"&&(this.injectAppIdScript(n),await this.config.imports());const s=await ot(()=>import("./FlowClient-88f319b0.js"),[],import.meta.url);if(await this.flowInitClient(s),!e){const c=`flow-container-${n.toLowerCase()}`;this.container=document.createElement(c),ce.$[n]=this.container,this.container.id=n}this.loadingFinished()}return this.container&&!this.container.isConnected&&(this.container.style.display="none",document.body.appendChild(this.container)),this.response}async loadScript(e){return new Promise((t,r)=>{const n=document.createElement("script");n.onload=()=>t(),n.onerror=r,n.src=e,document.body.appendChild(n)})}injectAppIdScript(e){const t=e.substring(0,e.lastIndexOf("-")),r=document.createElement("script");r.type="module",r.setAttribute("data-app-id",t),document.body.append(r)}async flowInitClient(e){return e.init(),new Promise(t=>{const r=setInterval(()=>{Object.keys(y.Vaadin.Flow.clients).filter(i=>i!=="TypeScript").reduce((i,s)=>i||y.Vaadin.Flow.clients[s].isActive(),!1)||(clearInterval(r),t())},5)})}async flowInitUi(e){const t=y.Vaadin&&y.Vaadin.TypeScript&&y.Vaadin.TypeScript.initial;return t?(y.Vaadin.TypeScript.initial=void 0,Promise.resolve(t)):new Promise((r,n)=>{const s=new XMLHttpRequest,c=e?"&serverSideRouting":"",a=`?v-r=init&location=${encodeURIComponent(this.getFlowRoutePath(location))}&query=${encodeURIComponent(this.getFlowRouteQuery(location))}${c}`;s.open("GET",a),s.onerror=()=>n(new Kt(`Invalid server response when initializing Flow UI.
        ${s.status}
        ${s.responseText}`)),s.onload=()=>{const l=s.getResponseHeader("content-type");l&&l.indexOf("application/json")!==-1?r(JSON.parse(s.responseText)):s.onerror()},s.send()})}addConnectionIndicator(){E.create(),y.addEventListener("online",()=>{if(!this.isFlowClientLoaded()){y.Vaadin.connectionState.state=S.RECONNECTING;const e=new XMLHttpRequest;e.open("HEAD","sw.js"),e.onload=()=>{y.Vaadin.connectionState.state=S.CONNECTED},e.onerror=()=>{y.Vaadin.connectionState.state=S.CONNECTION_LOST},setTimeout(()=>e.send(),50)}}),y.addEventListener("offline",()=>{this.isFlowClientLoaded()||(y.Vaadin.connectionState.state=S.CONNECTION_LOST)})}async offlineStubAction(){const e=document.createElement("iframe"),t="./offline-stub.html";e.setAttribute("src",t),e.setAttribute("style","width: 100%; height: 100%; border: 0"),this.response=void 0;let r;const n=()=>{r!==void 0&&(y.Vaadin.connectionState.removeStateChangeListener(r),r=void 0)};return e.onBeforeEnter=(i,s,c)=>{r=()=>{y.Vaadin.connectionState.online&&(n(),c.render(i,!1))},y.Vaadin.connectionState.addStateChangeListener(r)},e.onBeforeLeave=(i,s,c)=>{n()},e}isFlowClientLoaded(){return this.response!==void 0}}const{serverSideRoutes:Br}=new Hr({imports:()=>ot(()=>import("./generated-flow-imports-f2685e31.js"),[],import.meta.url)}),jr=[...Br],Gr=new B(document.querySelector("#outlet"));Gr.setRoutes(jr);var Wr=function(){var o=document.getSelection();if(!o.rangeCount)return function(){};for(var e=document.activeElement,t=[],r=0;r<o.rangeCount;r++)t.push(o.getRangeAt(r));switch(e.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":e.blur();break;default:e=null;break}return o.removeAllRanges(),function(){o.type==="Caret"&&o.removeAllRanges(),o.rangeCount||t.forEach(function(n){o.addRange(n)}),e&&e.focus()}},Yt={"text/plain":"Text","text/html":"Url",default:"Text"},qr="Copy to clipboard: #{key}, Enter";function Kr(o){var e=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C";return o.replace(/#{\s*key\s*}/g,e)}function Yr(o,e){var t,r,n,i,s,c,a=!1;e||(e={}),t=e.debug||!1;try{n=Wr(),i=document.createRange(),s=document.getSelection(),c=document.createElement("span"),c.textContent=o,c.style.all="unset",c.style.position="fixed",c.style.top=0,c.style.clip="rect(0, 0, 0, 0)",c.style.whiteSpace="pre",c.style.webkitUserSelect="text",c.style.MozUserSelect="text",c.style.msUserSelect="text",c.style.userSelect="text",c.addEventListener("copy",function(u){if(u.stopPropagation(),e.format)if(u.preventDefault(),typeof u.clipboardData>"u"){t&&console.warn("unable to use e.clipboardData"),t&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var h=Yt[e.format]||Yt.default;window.clipboardData.setData(h,o)}else u.clipboardData.clearData(),u.clipboardData.setData(e.format,o);e.onCopy&&(u.preventDefault(),e.onCopy(u.clipboardData))}),document.body.appendChild(c),i.selectNodeContents(c),s.addRange(i);var l=document.execCommand("copy");if(!l)throw new Error("copy command was unsuccessful");a=!0}catch(u){t&&console.error("unable to copy using execCommand: ",u),t&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(e.format||"text",o),e.onCopy&&e.onCopy(window.clipboardData),a=!0}catch(h){t&&console.error("unable to copy using clipboardData: ",h),t&&console.error("falling back to prompt"),r=Kr("message"in e?e.message:qr),window.prompt(r,o)}}finally{s&&(typeof s.removeRange=="function"?s.removeRange(i):s.removeAllRanges()),c&&document.body.removeChild(c),n()}return a}const ut=1e3,mt=(o,e)=>{const t=Array.from(o.querySelectorAll(e.join(", "))),r=Array.from(o.querySelectorAll("*")).filter(n=>n.shadowRoot).flatMap(n=>mt(n.shadowRoot,e));return[...t,...r]};let Jt=!1;const xe=(o,e)=>{Jt||(window.addEventListener("message",n=>{n.data==="validate-license"&&window.location.reload()},!1),Jt=!0);const t=o._overlayElement;if(t){if(t.shadowRoot){const n=t.shadowRoot.querySelector("slot:not([name])");if(n&&n.assignedElements().length>0){xe(n.assignedElements()[0],e);return}}xe(t,e);return}const r=e.messageHtml?e.messageHtml:`${e.message} <p>Component: ${e.product.name} ${e.product.version}</p>`.replace(/https:([^ ]*)/g,"<a href='https:$1'>https:$1</a>");o.isConnected&&(o.outerHTML=`<no-license style="display:flex;align-items:center;text-align:center;justify-content:center;"><div>${r}</div></no-license>`)},me={},Xt={},se={},bo={},D=o=>`${o.name}_${o.version}`,Qt=o=>{const{cvdlName:e,version:t}=o.constructor,r={name:e,version:t},n=o.tagName.toLowerCase();me[e]=me[e]??[],me[e].push(n);const i=se[D(r)];i&&setTimeout(()=>xe(o,i),ut),se[D(r)]||bo[D(r)]||Xt[D(r)]||(Xt[D(r)]=!0,window.Vaadin.devTools.checkLicense(r))},Jr=o=>{bo[D(o)]=!0,console.debug("License check ok for",o)},yo=o=>{const e=o.product.name;se[D(o.product)]=o,console.error("License check failed for",e);const t=me[e];(t==null?void 0:t.length)>0&&mt(document,t).forEach(r=>{setTimeout(()=>xe(r,se[D(o.product)]),ut)})},Xr=o=>{const e=o.message,t=o.product.name;o.messageHtml=`No license found. <a target=_blank onclick="javascript:window.open(this.href);return false;" href="${e}">Go here to start a trial or retrieve your license.</a>`,se[D(o.product)]=o,console.error("No license found when checking",t);const r=me[t];(r==null?void 0:r.length)>0&&mt(document,r).forEach(n=>{setTimeout(()=>xe(n,se[D(o.product)]),ut)})},Qr=()=>{window.Vaadin.devTools.createdCvdlElements.forEach(o=>{Qt(o)}),window.Vaadin.devTools.createdCvdlElements={push:o=>{Qt(o)}}};var Zr=Object.defineProperty,en=Object.getOwnPropertyDescriptor,C=(o,e,t,r)=>{for(var n=r>1?void 0:r?en(e,t):e,i=o.length-1,s;i>=0;i--)(s=o[i])&&(n=(r?s(e,t,n):s(n))||n);return r&&n&&Zr(e,t,n),n};const wo=class extends Object{constructor(o){super(),this.status="unavailable",o&&(this.webSocket=new WebSocket(o),this.webSocket.onmessage=e=>this.handleMessage(e),this.webSocket.onerror=e=>this.handleError(e),this.webSocket.onclose=e=>{this.status!=="error"&&this.setStatus("unavailable"),this.webSocket=void 0}),setInterval(()=>{this.webSocket&&self.status!=="error"&&this.status!=="unavailable"&&this.webSocket.send("")},wo.HEARTBEAT_INTERVAL)}onHandshake(){}onReload(){}onConnectionError(o){}onStatusChange(o){}onMessage(o){console.error("Unknown message received from the live reload server:",o)}handleMessage(o){let e;try{e=JSON.parse(o.data)}catch(t){this.handleError(`[${t.name}: ${t.message}`);return}e.command==="hello"?(this.setStatus("active"),this.onHandshake()):e.command==="reload"?this.status==="active"&&this.onReload():e.command==="license-check-ok"?Jr(e.data):e.command==="license-check-failed"?yo(e.data):e.command==="license-check-nokey"?Xr(e.data):this.onMessage(e)}handleError(o){console.error(o),this.setStatus("error"),o instanceof Event&&this.webSocket?this.onConnectionError(`Error in WebSocket connection to ${this.webSocket.url}`):this.onConnectionError(o)}setActive(o){!o&&this.status==="active"?this.setStatus("inactive"):o&&this.status==="inactive"&&this.setStatus("active")}setStatus(o){this.status!==o&&(this.status=o,this.onStatusChange(o))}send(o,e){const t=JSON.stringify({command:o,data:e});this.webSocket?this.webSocket.readyState!==WebSocket.OPEN?this.webSocket.addEventListener("open",()=>this.webSocket.send(t)):this.webSocket.send(t):console.error(`Unable to send message ${o}. No websocket is available`)}setFeature(o,e){this.send("setFeature",{featureId:o,enabled:e})}sendTelemetry(o){this.send("reportTelemetry",{browserData:o})}sendLicenseCheck(o){this.send("checkLicense",o)}};let Oe=wo;Oe.HEARTBEAT_INTERVAL=18e4;const b=class extends oe{constructor(){super(...arguments),this.expanded=!1,this.messages=[],this.notifications=[],this.frontendStatus="unavailable",this.javaStatus="unavailable",this.tabs=[{id:"log",title:"Log",render:this.renderLog,activate:this.activateLog},{id:"info",title:"Info",render:this.renderInfo},{id:"features",title:"Feature Flags",render:this.renderFeatures}],this.activeTab="log",this.serverInfo={flowVersion:"",vaadinVersion:"",javaVersion:"",osVersion:"",productName:""},this.features=[],this.unreadErrors=!1,this.nextMessageId=1,this.transitionDuration=0}static get styles(){return x`
      :host {
        --dev-tools-font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell,
          'Helvetica Neue', sans-serif;
        --dev-tools-font-family-monospace: SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New',
          monospace;

        --dev-tools-font-size: 0.8125rem;
        --dev-tools-font-size-small: 0.75rem;

        --dev-tools-text-color: rgba(255, 255, 255, 0.8);
        --dev-tools-text-color-secondary: rgba(255, 255, 255, 0.65);
        --dev-tools-text-color-emphasis: rgba(255, 255, 255, 0.95);
        --dev-tools-text-color-active: rgba(255, 255, 255, 1);

        --dev-tools-background-color-inactive: rgba(45, 45, 45, 0.25);
        --dev-tools-background-color-active: rgba(45, 45, 45, 0.98);
        --dev-tools-background-color-active-blurred: rgba(45, 45, 45, 0.85);

        --dev-tools-border-radius: 0.5rem;
        --dev-tools-box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05), 0 4px 12px -2px rgba(0, 0, 0, 0.4);

        --dev-tools-blue-hsl: ${this.BLUE_HSL};
        --dev-tools-blue-color: hsl(var(--dev-tools-blue-hsl));
        --dev-tools-green-hsl: ${this.GREEN_HSL};
        --dev-tools-green-color: hsl(var(--dev-tools-green-hsl));
        --dev-tools-grey-hsl: ${this.GREY_HSL};
        --dev-tools-grey-color: hsl(var(--dev-tools-grey-hsl));
        --dev-tools-yellow-hsl: ${this.YELLOW_HSL};
        --dev-tools-yellow-color: hsl(var(--dev-tools-yellow-hsl));
        --dev-tools-red-hsl: ${this.RED_HSL};
        --dev-tools-red-color: hsl(var(--dev-tools-red-hsl));

        /* Needs to be in ms, used in JavaScript as well */
        --dev-tools-transition-duration: 180ms;

        all: initial;

        direction: ltr;
        cursor: default;
        font: normal 400 var(--dev-tools-font-size) / 1.125rem var(--dev-tools-font-family);
        color: var(--dev-tools-text-color);
        -webkit-user-select: none;
        -moz-user-select: none;
        user-select: none;

        position: fixed;
        z-index: 20000;
        pointer-events: none;
        bottom: 0;
        right: 0;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column-reverse;
        align-items: flex-end;
      }

      .dev-tools {
        pointer-events: auto;
        display: flex;
        align-items: center;
        position: fixed;
        z-index: inherit;
        right: 0.5rem;
        bottom: 0.5rem;
        min-width: 1.75rem;
        height: 1.75rem;
        max-width: 1.75rem;
        border-radius: 0.5rem;
        padding: 0.375rem;
        box-sizing: border-box;
        background-color: var(--dev-tools-background-color-inactive);
        box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05);
        color: var(--dev-tools-text-color);
        transition: var(--dev-tools-transition-duration);
        white-space: nowrap;
        line-height: 1rem;
      }

      .dev-tools:hover,
      .dev-tools.active {
        background-color: var(--dev-tools-background-color-active);
        box-shadow: var(--dev-tools-box-shadow);
      }

      .dev-tools.active {
        max-width: calc(100% - 1rem);
      }

      .dev-tools .dev-tools-icon {
        flex: none;
        pointer-events: none;
        display: inline-block;
        width: 1rem;
        height: 1rem;
        fill: #fff;
        transition: var(--dev-tools-transition-duration);
        margin: 0;
      }

      .dev-tools.active .dev-tools-icon {
        opacity: 0;
        position: absolute;
        transform: scale(0.5);
      }

      .dev-tools .status-blip {
        flex: none;
        display: block;
        width: 6px;
        height: 6px;
        border-radius: 50%;
        z-index: 20001;
        background: var(--dev-tools-grey-color);
        position: absolute;
        top: -1px;
        right: -1px;
      }

      .dev-tools .status-description {
        overflow: hidden;
        text-overflow: ellipsis;
        padding: 0 0.25rem;
      }

      .dev-tools.error {
        background-color: hsla(var(--dev-tools-red-hsl), 0.15);
        animation: bounce 0.5s;
        animation-iteration-count: 2;
      }

      .switch {
        display: inline-flex;
        align-items: center;
      }

      .switch input {
        opacity: 0;
        width: 0;
        height: 0;
        position: absolute;
      }

      .switch .slider {
        display: block;
        flex: none;
        width: 28px;
        height: 18px;
        border-radius: 9px;
        background-color: rgba(255, 255, 255, 0.3);
        transition: var(--dev-tools-transition-duration);
        margin-right: 0.5rem;
      }

      .switch:focus-within .slider,
      .switch .slider:hover {
        background-color: rgba(255, 255, 255, 0.35);
        transition: none;
      }

      .switch input:focus-visible ~ .slider {
        box-shadow: 0 0 0 2px var(--dev-tools-background-color-active), 0 0 0 4px var(--dev-tools-blue-color);
      }

      .switch .slider::before {
        content: '';
        display: block;
        margin: 2px;
        width: 14px;
        height: 14px;
        background-color: #fff;
        transition: var(--dev-tools-transition-duration);
        border-radius: 50%;
      }

      .switch input:checked + .slider {
        background-color: var(--dev-tools-green-color);
      }

      .switch input:checked + .slider::before {
        transform: translateX(10px);
      }

      .switch input:disabled + .slider::before {
        background-color: var(--dev-tools-grey-color);
      }

      .window.hidden {
        opacity: 0;
        transform: scale(0);
        position: absolute;
      }

      .window.visible {
        transform: none;
        opacity: 1;
        pointer-events: auto;
      }

      .window.visible ~ .dev-tools {
        opacity: 0;
        pointer-events: none;
      }

      .window.visible ~ .dev-tools .dev-tools-icon,
      .window.visible ~ .dev-tools .status-blip {
        transition: none;
        opacity: 0;
      }

      .window {
        border-radius: var(--dev-tools-border-radius);
        overflow: hidden;
        margin: 0.5rem;
        width: 30rem;
        max-width: calc(100% - 1rem);
        max-height: calc(100vh - 1rem);
        flex-shrink: 1;
        background-color: var(--dev-tools-background-color-active);
        color: var(--dev-tools-text-color);
        transition: var(--dev-tools-transition-duration);
        transform-origin: bottom right;
        display: flex;
        flex-direction: column;
        box-shadow: var(--dev-tools-box-shadow);
        outline: none;
      }

      .window-toolbar {
        display: flex;
        flex: none;
        align-items: center;
        padding: 0.375rem;
        white-space: nowrap;
        order: 1;
        background-color: rgba(0, 0, 0, 0.2);
        gap: 0.5rem;
      }

      .tab {
        color: var(--dev-tools-text-color-secondary);
        font: inherit;
        font-size: var(--dev-tools-font-size-small);
        font-weight: 500;
        line-height: 1;
        padding: 0.25rem 0.375rem;
        background: none;
        border: none;
        margin: 0;
        border-radius: 0.25rem;
        transition: var(--dev-tools-transition-duration);
      }

      .tab:hover,
      .tab.active {
        color: var(--dev-tools-text-color-active);
      }

      .tab.active {
        background-color: rgba(255, 255, 255, 0.12);
      }

      .tab.unreadErrors::after {
        content: '•';
        color: hsl(var(--dev-tools-red-hsl));
        font-size: 1.5rem;
        position: absolute;
        transform: translate(0, -50%);
      }

      .ahreflike {
        font-weight: 500;
        color: var(--dev-tools-text-color-secondary);
        text-decoration: underline;
        cursor: pointer;
      }

      .ahreflike:hover {
        color: var(--dev-tools-text-color-emphasis);
      }

      .button {
        all: initial;
        font-family: inherit;
        font-size: var(--dev-tools-font-size-small);
        line-height: 1;
        white-space: nowrap;
        background-color: rgba(0, 0, 0, 0.2);
        color: inherit;
        font-weight: 600;
        padding: 0.25rem 0.375rem;
        border-radius: 0.25rem;
      }

      .button:focus,
      .button:hover {
        color: var(--dev-tools-text-color-emphasis);
      }

      .minimize-button {
        flex: none;
        width: 1rem;
        height: 1rem;
        color: inherit;
        background-color: transparent;
        border: 0;
        padding: 0;
        margin: 0 0 0 auto;
        opacity: 0.8;
      }

      .minimize-button:hover {
        opacity: 1;
      }

      .minimize-button svg {
        max-width: 100%;
      }

      .message.information {
        --dev-tools-notification-color: var(--dev-tools-blue-color);
      }

      .message.warning {
        --dev-tools-notification-color: var(--dev-tools-yellow-color);
      }

      .message.error {
        --dev-tools-notification-color: var(--dev-tools-red-color);
      }

      .message {
        display: flex;
        padding: 0.1875rem 0.75rem 0.1875rem 2rem;
        background-clip: padding-box;
      }

      .message.log {
        padding-left: 0.75rem;
      }

      .message-content {
        margin-right: 0.5rem;
        -webkit-user-select: text;
        -moz-user-select: text;
        user-select: text;
      }

      .message-heading {
        position: relative;
        display: flex;
        align-items: center;
        margin: 0.125rem 0;
      }

      .message.log {
        color: var(--dev-tools-text-color-secondary);
      }

      .message:not(.log) .message-heading {
        font-weight: 500;
      }

      .message.has-details .message-heading {
        color: var(--dev-tools-text-color-emphasis);
        font-weight: 600;
      }

      .message-heading::before {
        position: absolute;
        margin-left: -1.5rem;
        display: inline-block;
        text-align: center;
        font-size: 0.875em;
        font-weight: 600;
        line-height: calc(1.25em - 2px);
        width: 14px;
        height: 14px;
        box-sizing: border-box;
        border: 1px solid transparent;
        border-radius: 50%;
      }

      .message.information .message-heading::before {
        content: 'i';
        border-color: currentColor;
        color: var(--dev-tools-notification-color);
      }

      .message.warning .message-heading::before,
      .message.error .message-heading::before {
        content: '!';
        color: var(--dev-tools-background-color-active);
        background-color: var(--dev-tools-notification-color);
      }

      .features-tray {
        padding: 0.75rem;
        flex: auto;
        overflow: auto;
        animation: fade-in var(--dev-tools-transition-duration) ease-in;
        user-select: text;
      }

      .features-tray p {
        margin-top: 0;
        color: var(--dev-tools-text-color-secondary);
      }

      .features-tray .feature {
        display: flex;
        align-items: center;
        gap: 1rem;
        padding-bottom: 0.5em;
      }

      .message .message-details {
        font-weight: 400;
        color: var(--dev-tools-text-color-secondary);
        margin: 0.25rem 0;
      }

      .message .message-details[hidden] {
        display: none;
      }

      .message .message-details p {
        display: inline;
        margin: 0;
        margin-right: 0.375em;
        word-break: break-word;
      }

      .message .persist {
        color: var(--dev-tools-text-color-secondary);
        white-space: nowrap;
        margin: 0.375rem 0;
        display: flex;
        align-items: center;
        position: relative;
        -webkit-user-select: none;
        -moz-user-select: none;
        user-select: none;
      }

      .message .persist::before {
        content: '';
        width: 1em;
        height: 1em;
        border-radius: 0.2em;
        margin-right: 0.375em;
        background-color: rgba(255, 255, 255, 0.3);
      }

      .message .persist:hover::before {
        background-color: rgba(255, 255, 255, 0.4);
      }

      .message .persist.on::before {
        background-color: rgba(255, 255, 255, 0.9);
      }

      .message .persist.on::after {
        content: '';
        order: -1;
        position: absolute;
        width: 0.75em;
        height: 0.25em;
        border: 2px solid var(--dev-tools-background-color-active);
        border-width: 0 0 2px 2px;
        transform: translate(0.05em, -0.05em) rotate(-45deg) scale(0.8, 0.9);
      }

      .message .dismiss-message {
        font-weight: 600;
        align-self: stretch;
        display: flex;
        align-items: center;
        padding: 0 0.25rem;
        margin-left: 0.5rem;
        color: var(--dev-tools-text-color-secondary);
      }

      .message .dismiss-message:hover {
        color: var(--dev-tools-text-color);
      }

      .notification-tray {
        display: flex;
        flex-direction: column-reverse;
        align-items: flex-end;
        margin: 0.5rem;
        flex: none;
      }

      .window.hidden + .notification-tray {
        margin-bottom: 3rem;
      }

      .notification-tray .message {
        pointer-events: auto;
        background-color: var(--dev-tools-background-color-active);
        color: var(--dev-tools-text-color);
        max-width: 30rem;
        box-sizing: border-box;
        border-radius: var(--dev-tools-border-radius);
        margin-top: 0.5rem;
        transition: var(--dev-tools-transition-duration);
        transform-origin: bottom right;
        animation: slideIn var(--dev-tools-transition-duration);
        box-shadow: var(--dev-tools-box-shadow);
        padding-top: 0.25rem;
        padding-bottom: 0.25rem;
      }

      .notification-tray .message.animate-out {
        animation: slideOut forwards var(--dev-tools-transition-duration);
      }

      .notification-tray .message .message-details {
        max-height: 10em;
        overflow: hidden;
      }

      .message-tray {
        flex: auto;
        overflow: auto;
        max-height: 20rem;
        user-select: text;
      }

      .message-tray .message {
        animation: fade-in var(--dev-tools-transition-duration) ease-in;
        padding-left: 2.25rem;
      }

      .message-tray .message.warning {
        background-color: hsla(var(--dev-tools-yellow-hsl), 0.09);
      }

      .message-tray .message.error {
        background-color: hsla(var(--dev-tools-red-hsl), 0.09);
      }

      .message-tray .message.error .message-heading {
        color: hsl(var(--dev-tools-red-hsl));
      }

      .message-tray .message.warning .message-heading {
        color: hsl(var(--dev-tools-yellow-hsl));
      }

      .message-tray .message + .message {
        border-top: 1px solid rgba(255, 255, 255, 0.07);
      }

      .message-tray .dismiss-message,
      .message-tray .persist {
        display: none;
      }

      .info-tray {
        padding: 0.75rem;
        position: relative;
        flex: auto;
        overflow: auto;
        animation: fade-in var(--dev-tools-transition-duration) ease-in;
        user-select: text;
      }

      .info-tray dl {
        margin: 0;
        display: grid;
        grid-template-columns: max-content 1fr;
        column-gap: 0.75rem;
        position: relative;
      }

      .info-tray dt {
        grid-column: 1;
        color: var(--dev-tools-text-color-emphasis);
      }

      .info-tray dt:not(:first-child)::before {
        content: '';
        width: 100%;
        position: absolute;
        height: 1px;
        background-color: rgba(255, 255, 255, 0.1);
        margin-top: -0.375rem;
      }

      .info-tray dd {
        grid-column: 2;
        margin: 0;
      }

      .info-tray :is(dt, dd):not(:last-child) {
        margin-bottom: 0.75rem;
      }

      .info-tray dd + dd {
        margin-top: -0.5rem;
      }

      .info-tray .live-reload-status::before {
        content: '•';
        color: var(--status-color);
        width: 0.75rem;
        display: inline-block;
        font-size: 1rem;
        line-height: 0.5rem;
      }

      .info-tray .copy {
        position: fixed;
        z-index: 1;
        top: 0.5rem;
        right: 0.5rem;
      }

      .info-tray .switch {
        vertical-align: -4px;
      }

      @keyframes slideIn {
        from {
          transform: translateX(100%);
          opacity: 0;
        }
        to {
          transform: translateX(0%);
          opacity: 1;
        }
      }

      @keyframes slideOut {
        from {
          transform: translateX(0%);
          opacity: 1;
        }
        to {
          transform: translateX(100%);
          opacity: 0;
        }
      }

      @keyframes fade-in {
        0% {
          opacity: 0;
        }
      }

      @keyframes bounce {
        0% {
          transform: scale(0.8);
        }
        50% {
          transform: scale(1.5);
          background-color: hsla(var(--dev-tools-red-hsl), 1);
        }
        100% {
          transform: scale(1);
        }
      }

      @supports (backdrop-filter: blur(1px)) {
        .dev-tools,
        .window,
        .notification-tray .message {
          backdrop-filter: blur(8px);
        }
        .dev-tools:hover,
        .dev-tools.active,
        .window,
        .notification-tray .message {
          background-color: var(--dev-tools-background-color-active-blurred);
        }
      }
    `}static get isActive(){const o=window.sessionStorage.getItem(b.ACTIVE_KEY_IN_SESSION_STORAGE);return o===null||o!=="false"}static notificationDismissed(o){const e=window.localStorage.getItem(b.DISMISSED_NOTIFICATIONS_IN_LOCAL_STORAGE);return e!==null&&e.includes(o)}elementTelemetry(){let o={};try{const e=localStorage.getItem("vaadin.statistics.basket");if(!e)return;o=JSON.parse(e)}catch{return}this.frontendConnection&&this.frontendConnection.sendTelemetry(o)}openWebSocketConnection(){this.frontendStatus="unavailable",this.javaStatus="unavailable";const o=s=>this.log("error",s),e=()=>{if(this.liveReloadDisabled)return;this.showSplashMessage("Reloading…");const s=window.sessionStorage.getItem(b.TRIGGERED_COUNT_KEY_IN_SESSION_STORAGE),c=s?parseInt(s,10)+1:1;window.sessionStorage.setItem(b.TRIGGERED_COUNT_KEY_IN_SESSION_STORAGE,c.toString()),window.sessionStorage.setItem(b.TRIGGERED_KEY_IN_SESSION_STORAGE,"true"),window.location.reload()},t=new Oe(this.getDedicatedWebSocketUrl());t.onHandshake=()=>{this.log("log","Vaadin development mode initialized"),b.isActive||t.setActive(!1),this.elementTelemetry()},t.onConnectionError=o,t.onReload=e,t.onStatusChange=s=>{this.frontendStatus=s},t.onMessage=s=>{(s==null?void 0:s.command)==="serverInfo"?this.serverInfo=s.data:(s==null?void 0:s.command)==="featureFlags"?this.features=s.data.features:console.error("Unknown message from front-end connection:",JSON.stringify(s))},this.frontendConnection=t;let r;this.backend===b.SPRING_BOOT_DEVTOOLS&&this.springBootLiveReloadPort?(r=new Oe(this.getSpringBootWebSocketUrl(window.location)),r.onHandshake=()=>{b.isActive||r.setActive(!1)},r.onReload=e,r.onConnectionError=o):this.backend===b.JREBEL||this.backend===b.HOTSWAP_AGENT?r=t:r=new Oe(void 0);const n=r.onStatusChange;r.onStatusChange=s=>{n(s),this.javaStatus=s};const i=r.onHandshake;r.onHandshake=()=>{i(),this.backend&&this.log("information",`Java live reload available: ${b.BACKEND_DISPLAY_NAME[this.backend]}`)},this.javaConnection=r,this.backend||this.showNotification("warning","Java live reload unavailable","Live reload for Java changes is currently not set up. Find out how to make use of this functionality to boost your workflow.","https://vaadin.com/docs/latest/flow/configuration/live-reload","liveReloadUnavailable")}getDedicatedWebSocketUrl(){function o(t){const r=document.createElement("div");return r.innerHTML=`<a href="${t}"/>`,r.firstChild.href}if(this.url===void 0)return;const e=o(this.url);if(!e.startsWith("http://")&&!e.startsWith("https://")){console.error("The protocol of the url should be http or https for live reload to work.");return}return`${e.replace(/^http/,"ws")}?v-r=push&debug_window`}getSpringBootWebSocketUrl(o){const{hostname:e}=o,t=o.protocol==="https:"?"wss":"ws";if(e.endsWith("gitpod.io")){const r=e.replace(/.*?-/,"");return`${t}://${this.springBootLiveReloadPort}-${r}`}else return`${t}://${e}:${this.springBootLiveReloadPort}`}connectedCallback(){if(super.connectedCallback(),this.catchErrors(),this.disableEventListener=t=>this.demoteSplashMessage(),document.body.addEventListener("focus",this.disableEventListener),document.body.addEventListener("click",this.disableEventListener),this.openWebSocketConnection(),window.sessionStorage.getItem(b.TRIGGERED_KEY_IN_SESSION_STORAGE)){const t=new Date,r=`${`0${t.getHours()}`.slice(-2)}:${`0${t.getMinutes()}`.slice(-2)}:${`0${t.getSeconds()}`.slice(-2)}`;this.showSplashMessage(`Page reloaded at ${r}`),window.sessionStorage.removeItem(b.TRIGGERED_KEY_IN_SESSION_STORAGE)}this.transitionDuration=parseInt(window.getComputedStyle(this).getPropertyValue("--dev-tools-transition-duration"),10);const e=window;e.Vaadin=e.Vaadin||{},e.Vaadin.devTools=Object.assign(this,e.Vaadin.devTools),Qr()}format(o){return o.toString()}catchErrors(){const o=window.Vaadin.ConsoleErrors;o&&o.forEach(e=>{this.log("error",e.map(t=>this.format(t)).join(" "))}),window.Vaadin.ConsoleErrors={push:e=>{this.log("error",e.map(t=>this.format(t)).join(" "))}}}disconnectedCallback(){this.disableEventListener&&(document.body.removeEventListener("focus",this.disableEventListener),document.body.removeEventListener("click",this.disableEventListener)),super.disconnectedCallback()}toggleExpanded(){this.notifications.slice().forEach(o=>this.dismissNotification(o.id)),this.expanded=!this.expanded,this.expanded&&this.root.focus()}showSplashMessage(o){this.splashMessage=o,this.splashMessage&&(this.expanded?this.demoteSplashMessage():setTimeout(()=>{this.demoteSplashMessage()},b.AUTO_DEMOTE_NOTIFICATION_DELAY))}demoteSplashMessage(){this.splashMessage&&this.log("log",this.splashMessage),this.showSplashMessage(void 0)}checkLicense(o){this.frontendConnection?this.frontendConnection.sendLicenseCheck(o):yo({message:"Internal error: no connection",product:o})}log(o,e,t,r){const n=this.nextMessageId;for(this.nextMessageId+=1,this.messages.push({id:n,type:o,message:e,details:t,link:r,dontShowAgain:!1,deleted:!1});this.messages.length>b.MAX_LOG_ROWS;)this.messages.shift();this.requestUpdate(),this.updateComplete.then(()=>{const i=this.renderRoot.querySelector(".message-tray .message:last-child");this.expanded&&i?(setTimeout(()=>i.scrollIntoView({behavior:"smooth"}),this.transitionDuration),this.unreadErrors=!1):o==="error"&&(this.unreadErrors=!0)})}showNotification(o,e,t,r,n){if(n===void 0||!b.notificationDismissed(n)){if(this.notifications.filter(c=>c.persistentId===n).filter(c=>!c.deleted).length>0)return;const s=this.nextMessageId;this.nextMessageId+=1,this.notifications.push({id:s,type:o,message:e,details:t,link:r,persistentId:n,dontShowAgain:!1,deleted:!1}),r===void 0&&setTimeout(()=>{this.dismissNotification(s)},b.AUTO_DEMOTE_NOTIFICATION_DELAY),this.requestUpdate()}else this.log(o,e,t,r)}dismissNotification(o){const e=this.findNotificationIndex(o);if(e!==-1&&!this.notifications[e].deleted){const t=this.notifications[e];if(t.dontShowAgain&&t.persistentId&&!b.notificationDismissed(t.persistentId)){let r=window.localStorage.getItem(b.DISMISSED_NOTIFICATIONS_IN_LOCAL_STORAGE);r=r===null?t.persistentId:`${r},${t.persistentId}`,window.localStorage.setItem(b.DISMISSED_NOTIFICATIONS_IN_LOCAL_STORAGE,r)}t.deleted=!0,this.log(t.type,t.message,t.details,t.link),setTimeout(()=>{const r=this.findNotificationIndex(o);r!==-1&&(this.notifications.splice(r,1),this.requestUpdate())},this.transitionDuration)}}findNotificationIndex(o){let e=-1;return this.notifications.some((t,r)=>t.id===o?(e=r,!0):!1),e}toggleDontShowAgain(o){const e=this.findNotificationIndex(o);if(e!==-1&&!this.notifications[e].deleted){const t=this.notifications[e];t.dontShowAgain=!t.dontShowAgain,this.requestUpdate()}}setActive(o){var e,t;(e=this.frontendConnection)==null||e.setActive(o),(t=this.javaConnection)==null||t.setActive(o),window.sessionStorage.setItem(b.ACTIVE_KEY_IN_SESSION_STORAGE,o?"true":"false")}getStatusColor(o){return o==="active"?x`hsl(${b.GREEN_HSL})`:o==="inactive"?x`hsl(${b.GREY_HSL})`:o==="unavailable"?x`hsl(${b.YELLOW_HSL})`:o==="error"?x`hsl(${b.RED_HSL})`:x`none`}renderMessage(o){return k`
      <div
        class="message ${o.type} ${o.deleted?"animate-out":""} ${o.details||o.link?"has-details":""}"
      >
        <div class="message-content">
          <div class="message-heading">${o.message}</div>
          <div class="message-details" ?hidden="${!o.details&&!o.link}">
            ${o.details?k`<p>${o.details}</p>`:""}
            ${o.link?k`<a class="ahreflike" href="${o.link}" target="_blank">Learn more</a>`:""}
          </div>
          ${o.persistentId?k`<div
                class="persist ${o.dontShowAgain?"on":"off"}"
                @click=${()=>this.toggleDontShowAgain(o.id)}
              >
                Don’t show again
              </div>`:""}
        </div>
        <div class="dismiss-message" @click=${()=>this.dismissNotification(o.id)}>Dismiss</div>
      </div>
    `}render(){return k` <div
        class="window ${this.expanded?"visible":"hidden"}"
        tabindex="0"
        @keydown=${o=>o.key==="Escape"&&this.expanded&&this.toggleExpanded()}
      >
        <div class="window-toolbar">
          ${this.tabs.map(o=>k`<button
                class=${xo({tab:!0,active:this.activeTab===o.id,unreadErrors:o.id==="log"&&this.unreadErrors})}
                id="${o.id}"
                @click=${()=>{this.activeTab=o.id,o.activate&&o.activate.call(this)}}
              >
                ${o.title}
              </button> `)}
          <button class="minimize-button" title="Minimize" @click=${()=>this.toggleExpanded()}>
            <svg fill="none" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
              <g fill="#fff" opacity=".8">
                <path
                  d="m7.25 1.75c0-.41421.33579-.75.75-.75h3.25c2.0711 0 3.75 1.67893 3.75 3.75v6.5c0 2.0711-1.6789 3.75-3.75 3.75h-6.5c-2.07107 0-3.75-1.6789-3.75-3.75v-3.25c0-.41421.33579-.75.75-.75s.75.33579.75.75v3.25c0 1.2426 1.00736 2.25 2.25 2.25h6.5c1.2426 0 2.25-1.0074 2.25-2.25v-6.5c0-1.24264-1.0074-2.25-2.25-2.25h-3.25c-.41421 0-.75-.33579-.75-.75z"
                />
                <path
                  d="m2.96967 2.96967c.29289-.29289.76777-.29289 1.06066 0l5.46967 5.46967v-2.68934c0-.41421.33579-.75.75-.75.4142 0 .75.33579.75.75v4.5c0 .4142-.3358.75-.75.75h-4.5c-.41421 0-.75-.3358-.75-.75 0-.41421.33579-.75.75-.75h2.68934l-5.46967-5.46967c-.29289-.29289-.29289-.76777 0-1.06066z"
                />
              </g>
            </svg>
          </button>
        </div>
        ${this.tabs.map(o=>this.activeTab===o.id?o.render.call(this):_)}
      </div>

      <div class="notification-tray">${this.notifications.map(o=>this.renderMessage(o))}</div>
      <div
        class="dev-tools ${this.splashMessage?"active":""}${this.unreadErrors?" error":""}"
        @click=${()=>this.toggleExpanded()}
      >
        ${this.unreadErrors?k`<svg
              fill="none"
              height="16"
              viewBox="0 0 16 16"
              width="16"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              class="dev-tools-icon error"
            >
              <clipPath id="a"><path d="m0 0h16v16h-16z" /></clipPath>
              <g clip-path="url(#a)">
                <path
                  d="m6.25685 2.09894c.76461-1.359306 2.72169-1.359308 3.4863 0l5.58035 9.92056c.7499 1.3332-.2135 2.9805-1.7432 2.9805h-11.1606c-1.529658 0-2.4930857-1.6473-1.743156-2.9805z"
                  fill="#ff5c69"
                />
                <path
                  d="m7.99699 4c-.45693 0-.82368.37726-.81077.834l.09533 3.37352c.01094.38726.32803.69551.71544.69551.38741 0 .70449-.30825.71544-.69551l.09533-3.37352c.0129-.45674-.35384-.834-.81077-.834zm.00301 8c.60843 0 1-.3879 1-.979 0-.5972-.39157-.9851-1-.9851s-1 .3879-1 .9851c0 .5911.39157.979 1 .979z"
                  fill="#fff"
                />
              </g>
            </svg>`:k`<svg
              fill="none"
              height="17"
              viewBox="0 0 16 17"
              width="16"
              xmlns="http://www.w3.org/2000/svg"
              class="dev-tools-icon logo"
            >
              <g fill="#fff">
                <path
                  d="m8.88273 5.97926c0 .04401-.0032.08898-.00801.12913-.02467.42848-.37813.76767-.8117.76767-.43358 0-.78704-.34112-.81171-.76928-.00481-.04015-.00801-.08351-.00801-.12752 0-.42784-.10255-.87656-1.14434-.87656h-3.48364c-1.57118 0-2.315271-.72849-2.315271-2.21758v-1.26683c0-.42431.324618-.768314.748261-.768314.42331 0 .74441.344004.74441.768314v.42784c0 .47924.39576.81265 1.11293.81265h3.41538c1.5542 0 1.67373 1.156 1.725 1.7679h.03429c.05095-.6119.17048-1.7679 1.72468-1.7679h3.4154c.7172 0 1.0145-.32924 1.0145-.80847l-.0067-.43202c0-.42431.3227-.768314.7463-.768314.4234 0 .7255.344004.7255.768314v1.26683c0 1.48909-.6181 2.21758-2.1893 2.21758h-3.4836c-1.04182 0-1.14437.44872-1.14437.87656z"
                />
                <path
                  d="m8.82577 15.1648c-.14311.3144-.4588.5335-.82635.5335-.37268 0-.69252-.2249-.83244-.5466-.00206-.0037-.00412-.0073-.00617-.0108-.00275-.0047-.00549-.0094-.00824-.0145l-3.16998-5.87318c-.08773-.15366-.13383-.32816-.13383-.50395 0-.56168.45592-1.01879 1.01621-1.01879.45048 0 .75656.22069.96595.6993l2.16882 4.05042 2.17166-4.05524c.2069-.47379.513-.69448.9634-.69448.5603 0 1.0166.45711 1.0166 1.01879 0 .17579-.0465.35029-.1348.50523l-3.1697 5.8725c-.00503.0096-.01006.0184-.01509.0272-.00201.0036-.00402.0071-.00604.0106z"
                />
              </g>
            </svg>`}

        <span
          class="status-blip"
          style="background: linear-gradient(to right, ${this.getStatusColor(this.frontendStatus)} 50%, ${this.getStatusColor(this.javaStatus)} 50%)"
        ></span>
        ${this.splashMessage?k`<span class="status-description">${this.splashMessage}</span></div>`:_}
      </div>`}renderLog(){return k`<div class="message-tray">${this.messages.map(o=>this.renderMessage(o))}</div>`}activateLog(){this.unreadErrors=!1,this.updateComplete.then(()=>{const o=this.renderRoot.querySelector(".message-tray .message:last-child");o&&o.scrollIntoView()})}renderInfo(){return k`<div class="info-tray">
      <button class="button copy" @click=${this.copyInfoToClipboard}>Copy</button>
      <dl>
        <dt>${this.serverInfo.productName}</dt>
        <dd>${this.serverInfo.vaadinVersion}</dd>
        <dt>Flow</dt>
        <dd>${this.serverInfo.flowVersion}</dd>
        <dt>Java</dt>
        <dd>${this.serverInfo.javaVersion}</dd>
        <dt>OS</dt>
        <dd>${this.serverInfo.osVersion}</dd>
        <dt>Browser</dt>
        <dd>${navigator.userAgent}</dd>
        <dt>
          Live reload
          <label class="switch">
            <input
              id="toggle"
              type="checkbox"
              ?disabled=${this.liveReloadDisabled||(this.frontendStatus==="unavailable"||this.frontendStatus==="error")&&(this.javaStatus==="unavailable"||this.javaStatus==="error")}
              ?checked="${this.frontendStatus==="active"||this.javaStatus==="active"}"
              @change=${o=>this.setActive(o.target.checked)}
            />
            <span class="slider"></span>
          </label>
        </dt>
        <dd class="live-reload-status" style="--status-color: ${this.getStatusColor(this.javaStatus)}">
          Java ${this.javaStatus} ${this.backend?`(${b.BACKEND_DISPLAY_NAME[this.backend]})`:""}
        </dd>
        <dd class="live-reload-status" style="--status-color: ${this.getStatusColor(this.frontendStatus)}">
          Front end ${this.frontendStatus}
        </dd>
      </dl>
    </div>`}renderFeatures(){return k`<div class="features-tray">
      ${this.features.map(o=>k`<div class="feature">
          <label class="switch">
            <input
              class="feature-toggle"
              id="feature-toggle-${o.id}"
              type="checkbox"
              ?checked=${o.enabled}
              @change=${e=>this.toggleFeatureFlag(e,o)}
            />
            <span class="slider"></span>
            ${o.title}
          </label>
          <a class="ahreflike" href="${o.moreInfoLink}" target="_blank">Learn more</a>
        </div>`)}
    </div>`}copyInfoToClipboard(){const o=this.renderRoot.querySelectorAll(".info-tray dt, .info-tray dd"),e=Array.from(o).map(t=>(t.localName==="dd"?": ":`
`)+t.textContent.trim()).join("").replace(/^\n/,"");Yr(e),this.showNotification("information","Environment information copied to clipboard",void 0,void 0,"versionInfoCopied")}toggleFeatureFlag(o,e){const t=o.target.checked;this.frontendConnection?(this.frontendConnection.setFeature(e.id,t),this.showNotification("information",`“${e.title}” ${t?"enabled":"disabled"}`,e.requiresServerRestart?"This feature requires a server restart":void 0,void 0,`feature${e.id}${t?"Enabled":"Disabled"}`)):this.log("error",`Unable to toggle feature ${e.title}: No server connection available`)}};let v=b;v.BLUE_HSL=x`206, 100%, 70%`;v.GREEN_HSL=x`145, 80%, 42%`;v.GREY_HSL=x`0, 0%, 50%`;v.YELLOW_HSL=x`38, 98%, 64%`;v.RED_HSL=x`355, 100%, 68%`;v.MAX_LOG_ROWS=1e3;v.DISMISSED_NOTIFICATIONS_IN_LOCAL_STORAGE="vaadin.live-reload.dismissedNotifications";v.ACTIVE_KEY_IN_SESSION_STORAGE="vaadin.live-reload.active";v.TRIGGERED_KEY_IN_SESSION_STORAGE="vaadin.live-reload.triggered";v.TRIGGERED_COUNT_KEY_IN_SESSION_STORAGE="vaadin.live-reload.triggeredCount";v.AUTO_DEMOTE_NOTIFICATION_DELAY=5e3;v.HOTSWAP_AGENT="HOTSWAP_AGENT";v.JREBEL="JREBEL";v.SPRING_BOOT_DEVTOOLS="SPRING_BOOT_DEVTOOLS";v.BACKEND_DISPLAY_NAME={HOTSWAP_AGENT:"HotswapAgent",JREBEL:"JRebel",SPRING_BOOT_DEVTOOLS:"Spring Boot Devtools"};C([w({type:String})],v.prototype,"url",2);C([w({type:Boolean,attribute:!0})],v.prototype,"liveReloadDisabled",2);C([w({type:String})],v.prototype,"backend",2);C([w({type:Number})],v.prototype,"springBootLiveReloadPort",2);C([w({type:Boolean,attribute:!1})],v.prototype,"expanded",2);C([w({type:Array,attribute:!1})],v.prototype,"messages",2);C([w({type:String,attribute:!1})],v.prototype,"splashMessage",2);C([w({type:Array,attribute:!1})],v.prototype,"notifications",2);C([w({type:String,attribute:!1})],v.prototype,"frontendStatus",2);C([w({type:String,attribute:!1})],v.prototype,"javaStatus",2);C([ye()],v.prototype,"tabs",2);C([ye()],v.prototype,"activeTab",2);C([ye()],v.prototype,"serverInfo",2);C([ye()],v.prototype,"features",2);C([ye()],v.prototype,"unreadErrors",2);C([Dr(".window")],v.prototype,"root",2);customElements.get("vaadin-dev-tools")===void 0&&customElements.define("vaadin-dev-tools",v);(function(){if(typeof document>"u"||"adoptedStyleSheets"in document)return;var o="ShadyCSS"in window&&!ShadyCSS.nativeShadow,e=document.implementation.createHTMLDocument(""),t=new WeakMap,r=typeof DOMException=="object"?Error:DOMException,n=Object.defineProperty,i=Array.prototype.forEach,s=/@import.+?;?$/gm;function c(d){var p=d.replace(s,"");return p!==d&&console.warn("@import rules are not allowed here. See https://github.com/WICG/construct-stylesheets/issues/119#issuecomment-588352418"),p.trim()}function a(d){return"isConnected"in d?d.isConnected:document.contains(d)}function l(d){return d.filter(function(p,g){return d.indexOf(p)===g})}function u(d,p){return d.filter(function(g){return p.indexOf(g)===-1})}function h(d){d.parentNode.removeChild(d)}function m(d){return d.shadowRoot||t.get(d)}var f=["addRule","deleteRule","insertRule","removeRule"],F=CSSStyleSheet,L=F.prototype;L.replace=function(){return Promise.reject(new r("Can't call replace on non-constructed CSSStyleSheets."))},L.replaceSync=function(){throw new r("Failed to execute 'replaceSync' on 'CSSStyleSheet': Can't call replaceSync on non-constructed CSSStyleSheets.")};function we(d){return typeof d=="object"?Y.isPrototypeOf(d)||L.isPrototypeOf(d):!1}function He(d){return typeof d=="object"?L.isPrototypeOf(d):!1}var I=new WeakMap,M=new WeakMap,q=new WeakMap,K=new WeakMap;function Be(d,p){var g=document.createElement("style");return q.get(d).set(p,g),M.get(d).push(p),g}function V(d,p){return q.get(d).get(p)}function _e(d,p){q.get(d).delete(p),M.set(d,M.get(d).filter(function(g){return g!==p}))}function ht(d,p){requestAnimationFrame(function(){p.textContent=I.get(d).textContent,K.get(d).forEach(function(g){return p.sheet[g.method].apply(p.sheet,g.args)})})}function Se(d){if(!I.has(d))throw new TypeError("Illegal invocation")}function je(){var d=this,p=document.createElement("style");e.body.appendChild(p),I.set(d,p),M.set(d,[]),q.set(d,new WeakMap),K.set(d,[])}var Y=je.prototype;Y.replace=function(p){try{return this.replaceSync(p),Promise.resolve(this)}catch(g){return Promise.reject(g)}},Y.replaceSync=function(p){if(Se(this),typeof p=="string"){var g=this;I.get(g).textContent=c(p),K.set(g,[]),M.get(g).forEach(function(A){A.isConnected()&&ht(g,V(g,A))})}},n(Y,"cssRules",{configurable:!0,enumerable:!0,get:function(){return Se(this),I.get(this).sheet.cssRules}}),n(Y,"media",{configurable:!0,enumerable:!0,get:function(){return Se(this),I.get(this).sheet.media}}),f.forEach(function(d){Y[d]=function(){var p=this;Se(p);var g=arguments;K.get(p).push({method:d,args:g}),M.get(p).forEach(function(T){if(T.isConnected()){var $=V(p,T).sheet;$[d].apply($,g)}});var A=I.get(p).sheet;return A[d].apply(A,g)}}),n(je,Symbol.hasInstance,{configurable:!0,value:we});var pt={childList:!0,subtree:!0},ft=new WeakMap;function J(d){var p=ft.get(d);return p||(p=new xt(d),ft.set(d,p)),p}function gt(d){n(d.prototype,"adoptedStyleSheets",{configurable:!0,enumerable:!0,get:function(){return J(this).sheets},set:function(p){J(this).update(p)}})}function Ge(d,p){for(var g=document.createNodeIterator(d,NodeFilter.SHOW_ELEMENT,function(T){return m(T)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT},null,!1),A=void 0;A=g.nextNode();)p(m(A))}var Ee=new WeakMap,X=new WeakMap,$e=new WeakMap;function No(d,p){return p instanceof HTMLStyleElement&&X.get(d).some(function(g){return V(g,d)})}function vt(d){var p=Ee.get(d);return p instanceof Document?p.body:p}function We(d){var p=document.createDocumentFragment(),g=X.get(d),A=$e.get(d),T=vt(d);A.disconnect(),g.forEach(function($){p.appendChild(V($,d)||Be($,d))}),T.insertBefore(p,null),A.observe(T,pt),g.forEach(function($){ht($,V($,d))})}function xt(d){var p=this;p.sheets=[],Ee.set(p,d),X.set(p,[]),$e.set(p,new MutationObserver(function(g,A){if(!document){A.disconnect();return}g.forEach(function(T){o||i.call(T.addedNodes,function($){$ instanceof Element&&Ge($,function(Q){J(Q).connect()})}),i.call(T.removedNodes,function($){$ instanceof Element&&(No(p,$)&&We(p),o||Ge($,function(Q){J(Q).disconnect()}))})})}))}if(xt.prototype={isConnected:function(){var d=Ee.get(this);return d instanceof Document?d.readyState!=="loading":a(d.host)},connect:function(){var d=vt(this);$e.get(this).observe(d,pt),X.get(this).length>0&&We(this),Ge(d,function(p){J(p).connect()})},disconnect:function(){$e.get(this).disconnect()},update:function(d){var p=this,g=Ee.get(p)===document?"Document":"ShadowRoot";if(!Array.isArray(d))throw new TypeError("Failed to set the 'adoptedStyleSheets' property on "+g+": Iterator getter is not callable.");if(!d.every(we))throw new TypeError("Failed to set the 'adoptedStyleSheets' property on "+g+": Failed to convert value to 'CSSStyleSheet'");if(d.some(He))throw new TypeError("Failed to set the 'adoptedStyleSheets' property on "+g+": Can't adopt non-constructed stylesheets");p.sheets=d;var A=X.get(p),T=l(d),$=u(A,T);$.forEach(function(Q){h(V(Q,p)),_e(Q,p)}),X.set(p,T),p.isConnected()&&T.length>0&&We(p)}},window.CSSStyleSheet=je,gt(Document),"ShadowRoot"in window){gt(ShadowRoot);var bt=Element.prototype,zo=bt.attachShadow;bt.attachShadow=function(p){var g=zo.call(this,p);return p.mode==="closed"&&t.set(this,g),g}}var Ce=J(document);Ce.isConnected()?Ce.connect():document.addEventListener("DOMContentLoaded",Ce.connect.bind(Ce))})();const{toString:tn}=Object.prototype;function on(o){return tn.call(o)==="[object RegExp]"}function rn(o,{preserve:e=!0,whitespace:t=!0,all:r}={}){if(r)throw new Error("The `all` option is no longer supported. Use the `preserve` option instead.");let n=e,i;typeof e=="function"?(n=!1,i=e):on(e)&&(n=!1,i=u=>e.test(u));let s=!1,c="",a="",l="";for(let u=0;u<o.length;u++){if(c=o[u],o[u-1]!=="\\"&&(c==='"'||c==="'")&&(s===c?s=!1:s||(s=c)),!s&&c==="/"&&o[u+1]==="*"){const h=o[u+2]==="!";let m=u+2;for(;m<o.length;m++){if(o[m]==="*"&&o[m+1]==="/"){n&&h||i&&i(a)?l+=`/*${a}*/`:t||(o[m+2]===`
`?m++:o[m+2]+o[m+3]===`\r
`&&(m+=2)),a="";break}a+=o[m]}u=m+1;continue}l+=c}return l}/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class nn extends HTMLElement{static get version(){return"24.0.0-alpha11"}}customElements.define("vaadin-lumo-styles",nn);/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const sn=o=>class extends o{static get properties(){return{_theme:{type:String,readOnly:!0}}}static get observedAttributes(){return[...super.observedAttributes,"theme"]}attributeChangedCallback(t,r,n){super.attributeChangedCallback(t,r,n),t==="theme"&&this._set_theme(n)}};/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const _o=[];function Ue(o,e,t={}){o&&mn(o)&&console.warn(`The custom element definition for "${o}"
      was finalized before a style module was registered.
      Make sure to add component specific style modules before
      importing the corresponding custom element.`),e=cn(e),window.Vaadin&&window.Vaadin.styleModules?window.Vaadin.styleModules.registerStyles(o,e,t):_o.push({themeFor:o,styles:e,include:t.include,moduleId:t.moduleId})}function st(){return window.Vaadin&&window.Vaadin.styleModules?window.Vaadin.styleModules.getAllThemes():_o}function an(o,e){return(o||"").split(" ").some(t=>new RegExp(`^${t.split("*").join(".*")}$`,"u").test(e))}function ln(o=""){let e=0;return o.startsWith("lumo-")||o.startsWith("material-")?e=1:o.startsWith("vaadin-")&&(e=2),e}function cn(o=[]){return[o].flat(1/0).filter(e=>e instanceof dt?!0:(console.warn("An item in styles is not of type CSSResult. Use `unsafeCSS` or `css`."),!1))}function So(o){const e=[];return o.include&&[].concat(o.include).forEach(t=>{const r=st().find(n=>n.moduleId===t);r?e.push(...So(r),...r.styles):console.warn(`Included moduleId ${t} not found in style registry`)},o.styles),e}function dn(o,e){const t=document.createElement("style");t.innerHTML=o.map(r=>r.cssText).join(`
`),e.content.appendChild(t)}function un(o){const e=`${o}-default-theme`,t=st().filter(r=>r.moduleId!==e&&an(r.themeFor,o)).map(r=>({...r,styles:[...So(r),...r.styles],includePriority:ln(r.moduleId)})).sort((r,n)=>n.includePriority-r.includePriority);return t.length>0?t:st().filter(r=>r.moduleId===e)}function mn(o){return Eo(customElements.get(o))}function Eo(o){return o&&Object.prototype.hasOwnProperty.call(o,"__themes")}const Nn=o=>class extends sn(o){static finalize(){if(super.finalize(),this.elementStyles)return;const t=this.prototype._template;!t||Eo(this)||dn(this.getStylesForThis(),t)}static finalizeStyles(t){const r=this.getStylesForThis();return t?[...super.finalizeStyles(t),...r]:r}static getStylesForThis(){const t=Object.getPrototypeOf(this.prototype),r=(t?t.constructor.__themes:[])||[];this.__themes=[...r,...un(this.is)];const n=this.__themes.flatMap(i=>i.styles);return n.filter((i,s)=>s===n.lastIndexOf(i))}};/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const hn=x`
  :host {
    /* prettier-ignore */
    --lumo-font-family: -apple-system, BlinkMacSystemFont, 'Roboto', 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';

    /* Font sizes */
    --lumo-font-size-xxs: 0.75rem;
    --lumo-font-size-xs: 0.8125rem;
    --lumo-font-size-s: 0.875rem;
    --lumo-font-size-m: 1rem;
    --lumo-font-size-l: 1.125rem;
    --lumo-font-size-xl: 1.375rem;
    --lumo-font-size-xxl: 1.75rem;
    --lumo-font-size-xxxl: 2.5rem;

    /* Line heights */
    --lumo-line-height-xs: 1.25;
    --lumo-line-height-s: 1.375;
    --lumo-line-height-m: 1.625;
  }
`,$o=x`
  body,
  :host {
    font-family: var(--lumo-font-family);
    font-size: var(--lumo-font-size-m);
    line-height: var(--lumo-line-height-m);
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  small,
  [theme~='font-size-s'] {
    font-size: var(--lumo-font-size-s);
    line-height: var(--lumo-line-height-s);
  }

  [theme~='font-size-xs'] {
    font-size: var(--lumo-font-size-xs);
    line-height: var(--lumo-line-height-xs);
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 600;
    line-height: var(--lumo-line-height-xs);
    margin-top: 1.25em;
  }

  h1 {
    font-size: var(--lumo-font-size-xxxl);
    margin-bottom: 0.75em;
  }

  h2 {
    font-size: var(--lumo-font-size-xxl);
    margin-bottom: 0.5em;
  }

  h3 {
    font-size: var(--lumo-font-size-xl);
    margin-bottom: 0.5em;
  }

  h4 {
    font-size: var(--lumo-font-size-l);
    margin-bottom: 0.5em;
  }

  h5 {
    font-size: var(--lumo-font-size-m);
    margin-bottom: 0.25em;
  }

  h6 {
    font-size: var(--lumo-font-size-xs);
    margin-bottom: 0;
    text-transform: uppercase;
    letter-spacing: 0.03em;
  }

  p,
  blockquote {
    margin-top: 0.5em;
    margin-bottom: 0.75em;
  }

  a {
    text-decoration: none;
  }

  a:where(:any-link):hover {
    text-decoration: underline;
  }

  hr {
    display: block;
    align-self: stretch;
    height: 1px;
    border: 0;
    padding: 0;
    margin: var(--lumo-space-s) calc(var(--lumo-border-radius-m) / 2);
    background-color: var(--lumo-contrast-10pct);
  }

  blockquote {
    border-left: 2px solid var(--lumo-contrast-30pct);
  }

  b,
  strong {
    font-weight: 600;
  }

  /* RTL specific styles */
  blockquote[dir='rtl'] {
    border-left: none;
    border-right: 2px solid var(--lumo-contrast-30pct);
  }
`;Ue("",$o,{moduleId:"lumo-typography"});const Co=document.createElement("template");Co.innerHTML=`<style>${hn.toString().replace(":host","html")}</style>`;document.head.appendChild(Co.content);/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const pn=x`
  :host {
    /* Base (background) */
    --lumo-base-color: #fff;

    /* Tint */
    --lumo-tint-5pct: hsla(0, 0%, 100%, 0.3);
    --lumo-tint-10pct: hsla(0, 0%, 100%, 0.37);
    --lumo-tint-20pct: hsla(0, 0%, 100%, 0.44);
    --lumo-tint-30pct: hsla(0, 0%, 100%, 0.5);
    --lumo-tint-40pct: hsla(0, 0%, 100%, 0.57);
    --lumo-tint-50pct: hsla(0, 0%, 100%, 0.64);
    --lumo-tint-60pct: hsla(0, 0%, 100%, 0.7);
    --lumo-tint-70pct: hsla(0, 0%, 100%, 0.77);
    --lumo-tint-80pct: hsla(0, 0%, 100%, 0.84);
    --lumo-tint-90pct: hsla(0, 0%, 100%, 0.9);
    --lumo-tint: #fff;

    /* Shade */
    --lumo-shade-5pct: hsla(214, 61%, 25%, 0.05);
    --lumo-shade-10pct: hsla(214, 57%, 24%, 0.1);
    --lumo-shade-20pct: hsla(214, 53%, 23%, 0.16);
    --lumo-shade-30pct: hsla(214, 50%, 22%, 0.26);
    --lumo-shade-40pct: hsla(214, 47%, 21%, 0.38);
    --lumo-shade-50pct: hsla(214, 45%, 20%, 0.52);
    --lumo-shade-60pct: hsla(214, 43%, 19%, 0.6);
    --lumo-shade-70pct: hsla(214, 42%, 18%, 0.69);
    --lumo-shade-80pct: hsla(214, 41%, 17%, 0.83);
    --lumo-shade-90pct: hsla(214, 40%, 16%, 0.94);
    --lumo-shade: hsl(214, 35%, 15%);

    /* Contrast */
    --lumo-contrast-5pct: var(--lumo-shade-5pct);
    --lumo-contrast-10pct: var(--lumo-shade-10pct);
    --lumo-contrast-20pct: var(--lumo-shade-20pct);
    --lumo-contrast-30pct: var(--lumo-shade-30pct);
    --lumo-contrast-40pct: var(--lumo-shade-40pct);
    --lumo-contrast-50pct: var(--lumo-shade-50pct);
    --lumo-contrast-60pct: var(--lumo-shade-60pct);
    --lumo-contrast-70pct: var(--lumo-shade-70pct);
    --lumo-contrast-80pct: var(--lumo-shade-80pct);
    --lumo-contrast-90pct: var(--lumo-shade-90pct);
    --lumo-contrast: var(--lumo-shade);

    /* Text */
    --lumo-header-text-color: var(--lumo-contrast);
    --lumo-body-text-color: var(--lumo-contrast-90pct);
    --lumo-secondary-text-color: var(--lumo-contrast-70pct);
    --lumo-tertiary-text-color: var(--lumo-contrast-50pct);
    --lumo-disabled-text-color: var(--lumo-contrast-30pct);

    /* Primary */
    --lumo-primary-color: hsl(214, 100%, 48%);
    --lumo-primary-color-50pct: hsla(214, 100%, 49%, 0.76);
    --lumo-primary-color-10pct: hsla(214, 100%, 60%, 0.13);
    --lumo-primary-text-color: hsl(214, 100%, 43%);
    --lumo-primary-contrast-color: #fff;

    /* Error */
    --lumo-error-color: hsl(3, 85%, 48%);
    --lumo-error-color-50pct: hsla(3, 85%, 49%, 0.5);
    --lumo-error-color-10pct: hsla(3, 85%, 49%, 0.1);
    --lumo-error-text-color: hsl(3, 89%, 42%);
    --lumo-error-contrast-color: #fff;

    /* Success */
    --lumo-success-color: hsl(145, 72%, 30%);
    --lumo-success-color-50pct: hsla(145, 72%, 31%, 0.5);
    --lumo-success-color-10pct: hsla(145, 72%, 31%, 0.1);
    --lumo-success-text-color: hsl(145, 85%, 25%);
    --lumo-success-contrast-color: #fff;
  }
`,Ao=document.createElement("template");Ao.innerHTML=`<style>${pn.toString().replace(":host","html")}</style>`;document.head.appendChild(Ao.content);const To=x`
  [theme~='dark'] {
    /* Base (background) */
    --lumo-base-color: hsl(214, 35%, 21%);

    /* Tint */
    --lumo-tint-5pct: hsla(214, 65%, 85%, 0.06);
    --lumo-tint-10pct: hsla(214, 60%, 80%, 0.14);
    --lumo-tint-20pct: hsla(214, 64%, 82%, 0.23);
    --lumo-tint-30pct: hsla(214, 69%, 84%, 0.32);
    --lumo-tint-40pct: hsla(214, 73%, 86%, 0.41);
    --lumo-tint-50pct: hsla(214, 78%, 88%, 0.5);
    --lumo-tint-60pct: hsla(214, 82%, 90%, 0.58);
    --lumo-tint-70pct: hsla(214, 87%, 92%, 0.69);
    --lumo-tint-80pct: hsla(214, 91%, 94%, 0.8);
    --lumo-tint-90pct: hsla(214, 96%, 96%, 0.9);
    --lumo-tint: hsl(214, 100%, 98%);

    /* Shade */
    --lumo-shade-5pct: hsla(214, 0%, 0%, 0.07);
    --lumo-shade-10pct: hsla(214, 4%, 2%, 0.15);
    --lumo-shade-20pct: hsla(214, 8%, 4%, 0.23);
    --lumo-shade-30pct: hsla(214, 12%, 6%, 0.32);
    --lumo-shade-40pct: hsla(214, 16%, 8%, 0.41);
    --lumo-shade-50pct: hsla(214, 20%, 10%, 0.5);
    --lumo-shade-60pct: hsla(214, 24%, 12%, 0.6);
    --lumo-shade-70pct: hsla(214, 28%, 13%, 0.7);
    --lumo-shade-80pct: hsla(214, 32%, 13%, 0.8);
    --lumo-shade-90pct: hsla(214, 33%, 13%, 0.9);
    --lumo-shade: hsl(214, 33%, 13%);

    /* Contrast */
    --lumo-contrast-5pct: var(--lumo-tint-5pct);
    --lumo-contrast-10pct: var(--lumo-tint-10pct);
    --lumo-contrast-20pct: var(--lumo-tint-20pct);
    --lumo-contrast-30pct: var(--lumo-tint-30pct);
    --lumo-contrast-40pct: var(--lumo-tint-40pct);
    --lumo-contrast-50pct: var(--lumo-tint-50pct);
    --lumo-contrast-60pct: var(--lumo-tint-60pct);
    --lumo-contrast-70pct: var(--lumo-tint-70pct);
    --lumo-contrast-80pct: var(--lumo-tint-80pct);
    --lumo-contrast-90pct: var(--lumo-tint-90pct);
    --lumo-contrast: var(--lumo-tint);

    /* Text */
    --lumo-header-text-color: var(--lumo-contrast);
    --lumo-body-text-color: var(--lumo-contrast-90pct);
    --lumo-secondary-text-color: var(--lumo-contrast-70pct);
    --lumo-tertiary-text-color: var(--lumo-contrast-50pct);
    --lumo-disabled-text-color: var(--lumo-contrast-30pct);

    /* Primary */
    --lumo-primary-color: hsl(214, 90%, 48%);
    --lumo-primary-color-50pct: hsla(214, 90%, 70%, 0.69);
    --lumo-primary-color-10pct: hsla(214, 90%, 55%, 0.13);
    --lumo-primary-text-color: hsl(214, 90%, 77%);
    --lumo-primary-contrast-color: #fff;

    /* Error */
    --lumo-error-color: hsl(3, 79%, 49%);
    --lumo-error-color-50pct: hsla(3, 75%, 62%, 0.5);
    --lumo-error-color-10pct: hsla(3, 75%, 62%, 0.14);
    --lumo-error-text-color: hsl(3, 100%, 80%);

    /* Success */
    --lumo-success-color: hsl(145, 72%, 30%);
    --lumo-success-color-50pct: hsla(145, 92%, 51%, 0.5);
    --lumo-success-color-10pct: hsla(145, 92%, 51%, 0.1);
    --lumo-success-text-color: hsl(145, 85%, 46%);
  }

  html {
    color: var(--lumo-body-text-color);
    background-color: var(--lumo-base-color);
    color-scheme: light;
  }

  [theme~='dark'] {
    color: var(--lumo-body-text-color);
    background-color: var(--lumo-base-color);
    color-scheme: dark;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: var(--lumo-header-text-color);
  }

  a:where(:any-link) {
    color: var(--lumo-primary-text-color);
  }

  a:not(:any-link) {
    color: var(--lumo-disabled-text-color);
  }

  blockquote {
    color: var(--lumo-secondary-text-color);
  }

  code,
  pre {
    background-color: var(--lumo-contrast-10pct);
    border-radius: var(--lumo-border-radius-m);
  }
`;Ue("",To,{moduleId:"lumo-color"});/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ko=x`
  :host {
    /* Square */
    --lumo-space-xs: 0.25rem;
    --lumo-space-s: 0.5rem;
    --lumo-space-m: 1rem;
    --lumo-space-l: 1.5rem;
    --lumo-space-xl: 2.5rem;

    /* Wide */
    --lumo-space-wide-xs: calc(var(--lumo-space-xs) / 2) var(--lumo-space-xs);
    --lumo-space-wide-s: calc(var(--lumo-space-s) / 2) var(--lumo-space-s);
    --lumo-space-wide-m: calc(var(--lumo-space-m) / 2) var(--lumo-space-m);
    --lumo-space-wide-l: calc(var(--lumo-space-l) / 2) var(--lumo-space-l);
    --lumo-space-wide-xl: calc(var(--lumo-space-xl) / 2) var(--lumo-space-xl);

    /* Tall */
    --lumo-space-tall-xs: var(--lumo-space-xs) calc(var(--lumo-space-xs) / 2);
    --lumo-space-tall-s: var(--lumo-space-s) calc(var(--lumo-space-s) / 2);
    --lumo-space-tall-m: var(--lumo-space-m) calc(var(--lumo-space-m) / 2);
    --lumo-space-tall-l: var(--lumo-space-l) calc(var(--lumo-space-l) / 2);
    --lumo-space-tall-xl: var(--lumo-space-xl) calc(var(--lumo-space-xl) / 2);
  }
`,Ro=document.createElement("template");Ro.innerHTML=`<style>${ko.toString().replace(":host","html")}</style>`;document.head.appendChild(Ro.content);/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const fn=x`
  :host {
    /* Border radius */
    --lumo-border-radius-s: 0.25em; /* Checkbox, badge, date-picker year indicator, etc */
    --lumo-border-radius-m: var(--lumo-border-radius, 0.25em); /* Button, text field, menu overlay, etc */
    --lumo-border-radius-l: 0.5em; /* Dialog, notification, etc */

    /* Shadow */
    --lumo-box-shadow-xs: 0 1px 4px -1px var(--lumo-shade-50pct);
    --lumo-box-shadow-s: 0 2px 4px -1px var(--lumo-shade-20pct), 0 3px 12px -1px var(--lumo-shade-30pct);
    --lumo-box-shadow-m: 0 2px 6px -1px var(--lumo-shade-20pct), 0 8px 24px -4px var(--lumo-shade-40pct);
    --lumo-box-shadow-l: 0 3px 18px -2px var(--lumo-shade-20pct), 0 12px 48px -6px var(--lumo-shade-40pct);
    --lumo-box-shadow-xl: 0 4px 24px -3px var(--lumo-shade-20pct), 0 18px 64px -8px var(--lumo-shade-40pct);

    /* Clickable element cursor */
    --lumo-clickable-cursor: default;
  }
`;x`
  html {
    --vaadin-checkbox-size: calc(var(--lumo-size-m) / 2);
    --vaadin-radio-button-size: calc(var(--lumo-size-m) / 2);
  }
`;const Io=document.createElement("template");Io.innerHTML=`<style>${fn.toString().replace(":host","html")}$</style>`;document.head.appendChild(Io.content);/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Lo=x`
  [theme~='badge'] {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    padding: 0.4em calc(0.5em + var(--lumo-border-radius-s) / 4);
    color: var(--lumo-primary-text-color);
    background-color: var(--lumo-primary-color-10pct);
    border-radius: var(--lumo-border-radius-s);
    font-family: var(--lumo-font-family);
    font-size: var(--lumo-font-size-s);
    line-height: 1;
    font-weight: 500;
    text-transform: initial;
    letter-spacing: initial;
    min-width: calc(var(--lumo-line-height-xs) * 1em + 0.45em);
    flex-shrink: 0;
  }

  /* Ensure proper vertical alignment */
  [theme~='badge']::before {
    display: inline-block;
    content: '\\2003';
    width: 0;
  }

  [theme~='badge'][theme~='small'] {
    font-size: var(--lumo-font-size-xxs);
    line-height: 1;
  }

  /* Colors */

  [theme~='badge'][theme~='success'] {
    color: var(--lumo-success-text-color);
    background-color: var(--lumo-success-color-10pct);
  }

  [theme~='badge'][theme~='error'] {
    color: var(--lumo-error-text-color);
    background-color: var(--lumo-error-color-10pct);
  }

  [theme~='badge'][theme~='contrast'] {
    color: var(--lumo-contrast-80pct);
    background-color: var(--lumo-contrast-5pct);
  }

  /* Primary */

  [theme~='badge'][theme~='primary'] {
    color: var(--lumo-primary-contrast-color);
    background-color: var(--lumo-primary-color);
  }

  [theme~='badge'][theme~='success'][theme~='primary'] {
    color: var(--lumo-success-contrast-color);
    background-color: var(--lumo-success-color);
  }

  [theme~='badge'][theme~='error'][theme~='primary'] {
    color: var(--lumo-error-contrast-color);
    background-color: var(--lumo-error-color);
  }

  [theme~='badge'][theme~='contrast'][theme~='primary'] {
    color: var(--lumo-base-color);
    background-color: var(--lumo-contrast);
  }

  /* Links */

  [theme~='badge'][href]:hover {
    text-decoration: none;
  }

  /* Icon */

  [theme~='badge'] vaadin-icon {
    margin: -0.25em 0;
  }

  [theme~='badge'] vaadin-icon:first-child {
    margin-left: -0.375em;
  }

  [theme~='badge'] vaadin-icon:last-child {
    margin-right: -0.375em;
  }

  vaadin-icon[theme~='badge'][icon] {
    min-width: 0;
    padding: 0;
    font-size: 1rem;
    width: var(--lumo-icon-size-m);
    height: var(--lumo-icon-size-m);
  }

  vaadin-icon[theme~='badge'][icon][theme~='small'] {
    width: var(--lumo-icon-size-s);
    height: var(--lumo-icon-size-s);
  }

  /* Empty */

  [theme~='badge']:not([icon]):empty {
    min-width: 0;
    width: 1em;
    height: 1em;
    padding: 0;
    border-radius: 50%;
    background-color: var(--lumo-primary-color);
  }

  [theme~='badge'][theme~='small']:not([icon]):empty {
    width: 0.75em;
    height: 0.75em;
  }

  [theme~='badge'][theme~='contrast']:not([icon]):empty {
    background-color: var(--lumo-contrast);
  }

  [theme~='badge'][theme~='success']:not([icon]):empty {
    background-color: var(--lumo-success-color);
  }

  [theme~='badge'][theme~='error']:not([icon]):empty {
    background-color: var(--lumo-error-color);
  }

  /* Pill */

  [theme~='badge'][theme~='pill'] {
    --lumo-border-radius-s: 1em;
  }

  /* RTL specific styles */

  [dir='rtl'][theme~='badge'] vaadin-icon:first-child {
    margin-right: -0.375em;
    margin-left: 0;
  }

  [dir='rtl'][theme~='badge'] vaadin-icon:last-child {
    margin-left: -0.375em;
    margin-right: 0;
  }
`;Ue("",Lo,{moduleId:"lumo-badge"});/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const gn=x`
  /* === Screen readers === */
  .sr-only {
    border-width: 0;
    clip: rect(0, 0, 0, 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const vn=x`
  /* === Background color === */
  .bg-base {
    background-color: var(--lumo-base-color);
  }

  .bg-transparent {
    background-color: transparent;
  }

  .bg-contrast-5 {
    background-color: var(--lumo-contrast-5pct);
  }
  .bg-contrast-10 {
    background-color: var(--lumo-contrast-10pct);
  }
  .bg-contrast-20 {
    background-color: var(--lumo-contrast-20pct);
  }
  .bg-contrast-30 {
    background-color: var(--lumo-contrast-30pct);
  }
  .bg-contrast-40 {
    background-color: var(--lumo-contrast-40pct);
  }
  .bg-contrast-50 {
    background-color: var(--lumo-contrast-50pct);
  }
  .bg-contrast-60 {
    background-color: var(--lumo-contrast-60pct);
  }
  .bg-contrast-70 {
    background-color: var(--lumo-contrast-70pct);
  }
  .bg-contrast-80 {
    background-color: var(--lumo-contrast-80pct);
  }
  .bg-contrast-90 {
    background-color: var(--lumo-contrast-90pct);
  }
  .bg-contrast {
    background-color: var(--lumo-contrast);
  }

  .bg-primary {
    background-color: var(--lumo-primary-color);
  }
  .bg-primary-50 {
    background-color: var(--lumo-primary-color-50pct);
  }
  .bg-primary-10 {
    background-color: var(--lumo-primary-color-10pct);
  }

  .bg-error {
    background-color: var(--lumo-error-color);
  }
  .bg-error-50 {
    background-color: var(--lumo-error-color-50pct);
  }
  .bg-error-10 {
    background-color: var(--lumo-error-color-10pct);
  }

  .bg-success {
    background-color: var(--lumo-success-color);
  }
  .bg-success-50 {
    background-color: var(--lumo-success-color-50pct);
  }
  .bg-success-10 {
    background-color: var(--lumo-success-color-10pct);
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const xn=x`
  /* === Border === */
  .border-0 {
    border: none;
  }
  .border {
    border: 1px solid;
  }
  .border-b {
    border-bottom: 1px solid;
  }
  .border-l {
    border-left: 1px solid;
  }
  .border-r {
    border-right: 1px solid;
  }
  .border-t {
    border-top: 1px solid;
  }

  /* === Border color === */
  .border-contrast-5 {
    border-color: var(--lumo-contrast-5pct);
  }
  .border-contrast-10 {
    border-color: var(--lumo-contrast-10pct);
  }
  .border-contrast-20 {
    border-color: var(--lumo-contrast-20pct);
  }
  .border-contrast-30 {
    border-color: var(--lumo-contrast-30pct);
  }
  .border-contrast-40 {
    border-color: var(--lumo-contrast-40pct);
  }
  .border-contrast-50 {
    border-color: var(--lumo-contrast-50pct);
  }
  .border-contrast-60 {
    border-color: var(--lumo-contrast-60pct);
  }
  .border-contrast-70 {
    border-color: var(--lumo-contrast-70pct);
  }
  .border-contrast-80 {
    border-color: var(--lumo-contrast-80pct);
  }
  .border-contrast-90 {
    border-color: var(--lumo-contrast-90pct);
  }
  .border-contrast {
    border-color: var(--lumo-contrast);
  }

  .border-primary {
    border-color: var(--lumo-primary-color);
  }
  .border-primary-50 {
    border-color: var(--lumo-primary-color-50pct);
  }
  .border-primary-10 {
    border-color: var(--lumo-primary-color-10pct);
  }

  .border-error {
    border-color: var(--lumo-error-color);
  }
  .border-error-50 {
    border-color: var(--lumo-error-color-50pct);
  }
  .border-error-10 {
    border-color: var(--lumo-error-color-10pct);
  }

  .border-success {
    border-color: var(--lumo-success-color);
  }
  .border-success-50 {
    border-color: var(--lumo-success-color-50pct);
  }
  .border-success-10 {
    border-color: var(--lumo-success-color-10pct);
  }

  /* === Border radius === */
  .rounded-none {
    border-radius: 0;
  }
  .rounded-s {
    border-radius: var(--lumo-border-radius-s);
  }
  .rounded-m {
    border-radius: var(--lumo-border-radius-m);
  }
  .rounded-l {
    border-radius: var(--lumo-border-radius-l);
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const bn=x`
  /* === Align content === */
  .content-center {
    align-content: center;
  }
  .content-end {
    align-content: flex-end;
  }
  .content-start {
    align-content: flex-start;
  }
  .content-around {
    align-content: space-around;
  }
  .content-between {
    align-content: space-between;
  }
  .content-evenly {
    align-content: space-evenly;
  }
  .content-stretch {
    align-content: stretch;
  }

  /* === Align items === */
  .items-baseline {
    align-items: baseline;
  }
  .items-center {
    align-items: center;
  }
  .items-end {
    align-items: flex-end;
  }
  .items-start {
    align-items: flex-start;
  }
  .items-stretch {
    align-items: stretch;
  }

  /* === Align self === */
  .self-auto {
    align-self: auto;
  }
  .self-baseline {
    align-self: baseline;
  }
  .self-center {
    align-self: center;
  }
  .self-end {
    align-self: flex-end;
  }
  .self-start {
    align-self: flex-start;
  }
  .self-stretch {
    align-self: stretch;
  }

  /* === Flex === */
  .flex-auto {
    flex: auto;
  }
  .flex-none {
    flex: none;
  }

  /* === Flex direction === */
  .flex-col {
    flex-direction: column;
  }
  .flex-col-reverse {
    flex-direction: column-reverse;
  }
  .flex-row {
    flex-direction: row;
  }
  .flex-row-reverse {
    flex-direction: row-reverse;
  }

  /* === Flex grow === */
  .flex-grow-0 {
    flex-grow: 0;
  }
  .flex-grow {
    flex-grow: 1;
  }

  /* === Flex shrink === */
  .flex-shrink-0 {
    flex-shrink: 0;
  }
  .flex-shrink {
    flex-shrink: 1;
  }

  /* === Flex wrap === */
  .flex-nowrap {
    flex-wrap: nowrap;
  }
  .flex-wrap {
    flex-wrap: wrap;
  }
  .flex-wrap-reverse {
    flex-wrap: wrap-reverse;
  }

  /* === Gap === */
  .gap-xs {
    gap: var(--lumo-space-xs);
  }
  .gap-s {
    gap: var(--lumo-space-s);
  }
  .gap-m {
    gap: var(--lumo-space-m);
  }
  .gap-l {
    gap: var(--lumo-space-l);
  }
  .gap-xl {
    gap: var(--lumo-space-xl);
  }

  /* === Gap (column) === */
  .gap-x-xs {
    column-gap: var(--lumo-space-xs);
  }
  .gap-x-s {
    column-gap: var(--lumo-space-s);
  }
  .gap-x-m {
    column-gap: var(--lumo-space-m);
  }
  .gap-x-l {
    column-gap: var(--lumo-space-l);
  }
  .gap-x-xl {
    column-gap: var(--lumo-space-xl);
  }

  /* === Gap (row) === */
  .gap-y-xs {
    row-gap: var(--lumo-space-xs);
  }
  .gap-y-s {
    row-gap: var(--lumo-space-s);
  }
  .gap-y-m {
    row-gap: var(--lumo-space-m);
  }
  .gap-y-l {
    row-gap: var(--lumo-space-l);
  }
  .gap-y-xl {
    row-gap: var(--lumo-space-xl);
  }

  /* === Grid auto flow === */
  .grid-flow-col {
    grid-auto-flow: column;
  }
  .grid-flow-row {
    grid-auto-flow: row;
  }

  /* === Grid columns === */
  .grid-cols-1 {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
  .grid-cols-2 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  .grid-cols-3 {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  .grid-cols-4 {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
  .grid-cols-5 {
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }
  .grid-cols-6 {
    grid-template-columns: repeat(6, minmax(0, 1fr));
  }
  .grid-cols-7 {
    grid-template-columns: repeat(7, minmax(0, 1fr));
  }
  .grid-cols-8 {
    grid-template-columns: repeat(8, minmax(0, 1fr));
  }
  .grid-cols-9 {
    grid-template-columns: repeat(9, minmax(0, 1fr));
  }
  .grid-cols-10 {
    grid-template-columns: repeat(10, minmax(0, 1fr));
  }
  .grid-cols-11 {
    grid-template-columns: repeat(11, minmax(0, 1fr));
  }
  .grid-cols-12 {
    grid-template-columns: repeat(12, minmax(0, 1fr));
  }

  /* === Grid rows === */
  .grid-rows-1 {
    grid-template-rows: repeat(1, minmax(0, 1fr));
  }
  .grid-rows-2 {
    grid-template-rows: repeat(2, minmax(0, 1fr));
  }
  .grid-rows-3 {
    grid-template-rows: repeat(3, minmax(0, 1fr));
  }
  .grid-rows-4 {
    grid-template-rows: repeat(4, minmax(0, 1fr));
  }
  .grid-rows-5 {
    grid-template-rows: repeat(5, minmax(0, 1fr));
  }
  .grid-rows-6 {
    grid-template-rows: repeat(6, minmax(0, 1fr));
  }

  /* === Justify content === */
  .justify-center {
    justify-content: center;
  }
  .justify-end {
    justify-content: flex-end;
  }
  .justify-start {
    justify-content: flex-start;
  }
  .justify-around {
    justify-content: space-around;
  }
  .justify-between {
    justify-content: space-between;
  }
  .justify-evenly {
    justify-content: space-evenly;
  }

  /* === Span (column) === */
  .col-span-1 {
    grid-column: span 1 / span 1;
  }
  .col-span-2 {
    grid-column: span 2 / span 2;
  }
  .col-span-3 {
    grid-column: span 3 / span 3;
  }
  .col-span-4 {
    grid-column: span 4 / span 4;
  }
  .col-span-5 {
    grid-column: span 5 / span 5;
  }
  .col-span-6 {
    grid-column: span 6 / span 6;
  }
  .col-span-7 {
    grid-column: span 7 / span 7;
  }
  .col-span-8 {
    grid-column: span 8 / span 8;
  }
  .col-span-9 {
    grid-column: span 9 / span 9;
  }
  .col-span-10 {
    grid-column: span 10 / span 10;
  }
  .col-span-11 {
    grid-column: span 11 / span 11;
  }
  .col-span-12 {
    grid-column: span 12 / span 12;
  }

  /* === Span (row) === */
  .row-span-1 {
    grid-row: span 1 / span 1;
  }
  .row-span-2 {
    grid-row: span 2 / span 2;
  }
  .row-span-3 {
    grid-row: span 3 / span 3;
  }
  .row-span-4 {
    grid-row: span 4 / span 4;
  }
  .row-span-5 {
    grid-row: span 5 / span 5;
  }
  .row-span-6 {
    grid-row: span 6 / span 6;
  }

  /* === Responsive design === */
  @media (min-width: 640px) {
    .sm\\:flex-col {
      flex-direction: column;
    }
    .sm\\:flex-row {
      flex-direction: row;
    }
    .sm\\:grid-cols-1 {
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }
    .sm\\:grid-cols-2 {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    .sm\\:grid-cols-3 {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
    .sm\\:grid-cols-4 {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
    .sm\\:grid-cols-5 {
      grid-template-columns: repeat(5, minmax(0, 1fr));
    }
    .sm\\:grid-cols-6 {
      grid-template-columns: repeat(6, minmax(0, 1fr));
    }
    .sm\\:grid-cols-7 {
      grid-template-columns: repeat(7, minmax(0, 1fr));
    }
    .sm\\:grid-cols-8 {
      grid-template-columns: repeat(8, minmax(0, 1fr));
    }
    .sm\\:grid-cols-9 {
      grid-template-columns: repeat(9, minmax(0, 1fr));
    }
    .sm\\:grid-cols-10 {
      grid-template-columns: repeat(10, minmax(0, 1fr));
    }
    .sm\\:grid-cols-11 {
      grid-template-columns: repeat(11, minmax(0, 1fr));
    }
    .sm\\:grid-cols-12 {
      grid-template-columns: repeat(12, minmax(0, 1fr));
    }
  }

  @media (min-width: 768px) {
    .md\\:flex-col {
      flex-direction: column;
    }
    .md\\:flex-row {
      flex-direction: row;
    }
    .md\\:grid-cols-1 {
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }
    .md\\:grid-cols-2 {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    .md\\:grid-cols-3 {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
    .md\\:grid-cols-4 {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
    .md\\:grid-cols-5 {
      grid-template-columns: repeat(5, minmax(0, 1fr));
    }
    .md\\:grid-cols-6 {
      grid-template-columns: repeat(6, minmax(0, 1fr));
    }
    .md\\:grid-cols-7 {
      grid-template-columns: repeat(7, minmax(0, 1fr));
    }
    .md\\:grid-cols-8 {
      grid-template-columns: repeat(8, minmax(0, 1fr));
    }
    .md\\:grid-cols-9 {
      grid-template-columns: repeat(9, minmax(0, 1fr));
    }
    .md\\:grid-cols-10 {
      grid-template-columns: repeat(10, minmax(0, 1fr));
    }
    .md\\:grid-cols-11 {
      grid-template-columns: repeat(11, minmax(0, 1fr));
    }
    .md\\:grid-cols-12 {
      grid-template-columns: repeat(12, minmax(0, 1fr));
    }
  }
  @media (min-width: 1024px) {
    .lg\\:flex-col {
      flex-direction: column;
    }
    .lg\\:flex-row {
      flex-direction: row;
    }
    .lg\\:grid-cols-1 {
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }
    .lg\\:grid-cols-2 {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    .lg\\:grid-cols-3 {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
    .lg\\:grid-cols-4 {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
    .lg\\:grid-cols-5 {
      grid-template-columns: repeat(5, minmax(0, 1fr));
    }
    .lg\\:grid-cols-6 {
      grid-template-columns: repeat(6, minmax(0, 1fr));
    }
    .lg\\:grid-cols-7 {
      grid-template-columns: repeat(7, minmax(0, 1fr));
    }
    .lg\\:grid-cols-8 {
      grid-template-columns: repeat(8, minmax(0, 1fr));
    }
    .lg\\:grid-cols-9 {
      grid-template-columns: repeat(9, minmax(0, 1fr));
    }
    .lg\\:grid-cols-10 {
      grid-template-columns: repeat(10, minmax(0, 1fr));
    }
    .lg\\:grid-cols-11 {
      grid-template-columns: repeat(11, minmax(0, 1fr));
    }
    .lg\\:grid-cols-12 {
      grid-template-columns: repeat(12, minmax(0, 1fr));
    }
  }
  @media (min-width: 1280px) {
    .xl\\:flex-col {
      flex-direction: column;
    }
    .xl\\:flex-row {
      flex-direction: row;
    }
    .xl\\:grid-cols-1 {
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }
    .xl\\:grid-cols-2 {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    .xl\\:grid-cols-3 {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
    .xl\\:grid-cols-4 {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
    .xl\\:grid-cols-5 {
      grid-template-columns: repeat(5, minmax(0, 1fr));
    }
    .xl\\:grid-cols-6 {
      grid-template-columns: repeat(6, minmax(0, 1fr));
    }
    .xl\\:grid-cols-7 {
      grid-template-columns: repeat(7, minmax(0, 1fr));
    }
    .xl\\:grid-cols-8 {
      grid-template-columns: repeat(8, minmax(0, 1fr));
    }
    .xl\\:grid-cols-9 {
      grid-template-columns: repeat(9, minmax(0, 1fr));
    }
    .xl\\:grid-cols-10 {
      grid-template-columns: repeat(10, minmax(0, 1fr));
    }
    .xl\\:grid-cols-11 {
      grid-template-columns: repeat(11, minmax(0, 1fr));
    }
    .xl\\:grid-cols-12 {
      grid-template-columns: repeat(12, minmax(0, 1fr));
    }
  }
  @media (min-width: 1536px) {
    .\\32xl\\:flex-col {
      flex-direction: column;
    }
    .\\32xl\\:flex-row {
      flex-direction: row;
    }
    .\\32xl\\:grid-cols-1 {
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-2 {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-3 {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-4 {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-5 {
      grid-template-columns: repeat(5, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-6 {
      grid-template-columns: repeat(6, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-7 {
      grid-template-columns: repeat(7, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-8 {
      grid-template-columns: repeat(8, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-9 {
      grid-template-columns: repeat(9, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-10 {
      grid-template-columns: repeat(10, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-11 {
      grid-template-columns: repeat(11, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-12 {
      grid-template-columns: repeat(12, minmax(0, 1fr));
    }
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const yn=x`
  /* === Box sizing === */
  .box-border {
    box-sizing: border-box;
  }
  .box-content {
    box-sizing: content-box;
  }

  /* === Display === */
  .block {
    display: block;
  }
  .flex {
    display: flex;
  }
  .hidden {
    display: none;
  }
  .inline {
    display: inline;
  }
  .inline-block {
    display: inline-block;
  }
  .inline-flex {
    display: inline-flex;
  }
  .inline-grid {
    display: inline-grid;
  }
  .grid {
    display: grid;
  }

  /* === Overflow === */
  .overflow-auto {
    overflow: auto;
  }
  .overflow-hidden {
    overflow: hidden;
  }
  .overflow-scroll {
    overflow: scroll;
  }

  /* === Position === */
  .absolute {
    position: absolute;
  }
  .fixed {
    position: fixed;
  }
  .static {
    position: static;
  }
  .sticky {
    position: sticky;
  }
  .relative {
    position: relative;
  }

  /* === Responsive design === */
  @media (min-width: 640px) {
    .sm\\:flex {
      display: flex;
    }
    .sm\\:hidden {
      display: none;
    }
  }
  @media (min-width: 768px) {
    .md\\:flex {
      display: flex;
    }
    .md\\:hidden {
      display: none;
    }
  }
  @media (min-width: 1024px) {
    .lg\\:flex {
      display: flex;
    }
    .lg\\:hidden {
      display: none;
    }
  }
  @media (min-width: 1280px) {
    .xl\\:flex {
      display: flex;
    }
    .xl\\:hidden {
      display: none;
    }
  }
  @media (min-width: 1536px) {
    .\\32xl\\:flex {
      display: flex;
    }
    .\\32xl\\:hidden {
      display: none;
    }
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const wn=x`
  /* === Box shadows === */
  .shadow-xs {
    box-shadow: var(--lumo-box-shadow-xs);
  }
  .shadow-s {
    box-shadow: var(--lumo-box-shadow-s);
  }
  .shadow-m {
    box-shadow: var(--lumo-box-shadow-m);
  }
  .shadow-l {
    box-shadow: var(--lumo-box-shadow-l);
  }
  .shadow-xl {
    box-shadow: var(--lumo-box-shadow-xl);
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const _n=x`
  /* === Height === */
  .h-0 {
    height: 0;
  }
  .h-xs {
    height: var(--lumo-size-xs);
  }
  .h-s {
    height: var(--lumo-size-s);
  }
  .h-m {
    height: var(--lumo-size-m);
  }
  .h-l {
    height: var(--lumo-size-l);
  }
  .h-xl {
    height: var(--lumo-size-xl);
  }
  .h-auto {
    height: auto;
  }
  .h-full {
    height: 100%;
  }
  .h-screen {
    height: 100vh;
  }

  /* === Height (max) === */
  .max-h-full {
    max-height: 100%;
  }
  .max-h-screen {
    max-height: 100vh;
  }

  /* === Height (min) === */
  .min-h-0 {
    min-height: 0;
  }
  .min-h-full {
    min-height: 100%;
  }
  .min-h-screen {
    min-height: 100vh;
  }

  /* === Icon sizing === */
  .icon-s {
    height: var(--lumo-icon-size-s);
    width: var(--lumo-icon-size-s);
  }
  .icon-m {
    height: var(--lumo-icon-size-m);
    width: var(--lumo-icon-size-m);
  }
  .icon-l {
    height: var(--lumo-icon-size-l);
    width: var(--lumo-icon-size-l);
  }

  /* === Width === */
  .w-xs {
    width: var(--lumo-size-xs);
  }
  .w-s {
    width: var(--lumo-size-s);
  }
  .w-m {
    width: var(--lumo-size-m);
  }
  .w-l {
    width: var(--lumo-size-l);
  }
  .w-xl {
    width: var(--lumo-size-xl);
  }
  .w-auto {
    width: auto;
  }
  .w-full {
    width: 100%;
  }

  /* === Width (max) === */
  .max-w-full {
    max-width: 100%;
  }
  .max-w-screen-sm {
    max-width: 640px;
  }
  .max-w-screen-md {
    max-width: 768px;
  }
  .max-w-screen-lg {
    max-width: 1024px;
  }
  .max-w-screen-xl {
    max-width: 1280px;
  }
  .max-w-screen-2xl {
    max-width: 1536px;
  }

  /* === Width (min) === */
  .min-w-0 {
    min-width: 0;
  }
  .min-w-full {
    min-width: 100%;
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Sn=x`
  /* === Margin === */
  .m-auto {
    margin: auto;
  }
  .m-0 {
    margin: 0;
  }
  .m-xs {
    margin: var(--lumo-space-xs);
  }
  .m-s {
    margin: var(--lumo-space-s);
  }
  .m-m {
    margin: var(--lumo-space-m);
  }
  .m-l {
    margin: var(--lumo-space-l);
  }
  .m-xl {
    margin: var(--lumo-space-xl);
  }

  /* === Margin (bottom) === */
  .mb-auto {
    margin-bottom: auto;
  }
  .mb-0 {
    margin-bottom: 0;
  }
  .mb-xs {
    margin-bottom: var(--lumo-space-xs);
  }
  .mb-s {
    margin-bottom: var(--lumo-space-s);
  }
  .mb-m {
    margin-bottom: var(--lumo-space-m);
  }
  .mb-l {
    margin-bottom: var(--lumo-space-l);
  }
  .mb-xl {
    margin-bottom: var(--lumo-space-xl);
  }

  /* === Margin (end) === */
  .me-auto {
    margin-inline-end: auto;
  }
  .me-0 {
    margin-inline-end: 0;
  }
  .me-xs {
    margin-inline-end: var(--lumo-space-xs);
  }
  .me-s {
    margin-inline-end: var(--lumo-space-s);
  }
  .me-m {
    margin-inline-end: var(--lumo-space-m);
  }
  .me-l {
    margin-inline-end: var(--lumo-space-l);
  }
  .me-xl {
    margin-inline-end: var(--lumo-space-xl);
  }

  /* === Margin (horizontal) === */
  .mx-auto {
    margin-left: auto;
    margin-right: auto;
  }
  .mx-0 {
    margin-left: 0;
    margin-right: 0;
  }
  .mx-xs {
    margin-left: var(--lumo-space-xs);
    margin-right: var(--lumo-space-xs);
  }
  .mx-s {
    margin-left: var(--lumo-space-s);
    margin-right: var(--lumo-space-s);
  }
  .mx-m {
    margin-left: var(--lumo-space-m);
    margin-right: var(--lumo-space-m);
  }
  .mx-l {
    margin-left: var(--lumo-space-l);
    margin-right: var(--lumo-space-l);
  }
  .mx-xl {
    margin-left: var(--lumo-space-xl);
    margin-right: var(--lumo-space-xl);
  }

  /* === Margin (left) === */
  .ml-auto {
    margin-left: auto;
  }
  .ml-0 {
    margin-left: 0;
  }
  .ml-xs {
    margin-left: var(--lumo-space-xs);
  }
  .ml-s {
    margin-left: var(--lumo-space-s);
  }
  .ml-m {
    margin-left: var(--lumo-space-m);
  }
  .ml-l {
    margin-left: var(--lumo-space-l);
  }
  .ml-xl {
    margin-left: var(--lumo-space-xl);
  }

  /* === Margin (right) === */
  .mr-auto {
    margin-right: auto;
  }
  .mr-0 {
    margin-right: 0;
  }
  .mr-xs {
    margin-right: var(--lumo-space-xs);
  }
  .mr-s {
    margin-right: var(--lumo-space-s);
  }
  .mr-m {
    margin-right: var(--lumo-space-m);
  }
  .mr-l {
    margin-right: var(--lumo-space-l);
  }
  .mr-xl {
    margin-right: var(--lumo-space-xl);
  }

  /* === Margin (start) === */
  .ms-auto {
    margin-inline-start: auto;
  }
  .ms-0 {
    margin-inline-start: 0;
  }
  .ms-xs {
    margin-inline-start: var(--lumo-space-xs);
  }
  .ms-s {
    margin-inline-start: var(--lumo-space-s);
  }
  .ms-m {
    margin-inline-start: var(--lumo-space-m);
  }
  .ms-l {
    margin-inline-start: var(--lumo-space-l);
  }
  .ms-xl {
    margin-inline-start: var(--lumo-space-xl);
  }

  /* === Margin (top) === */
  .mt-auto {
    margin-top: auto;
  }
  .mt-0 {
    margin-top: 0;
  }
  .mt-xs {
    margin-top: var(--lumo-space-xs);
  }
  .mt-s {
    margin-top: var(--lumo-space-s);
  }
  .mt-m {
    margin-top: var(--lumo-space-m);
  }
  .mt-l {
    margin-top: var(--lumo-space-l);
  }
  .mt-xl {
    margin-top: var(--lumo-space-xl);
  }

  /* === Margin (vertical) === */
  .my-auto {
    margin-bottom: auto;
    margin-top: auto;
  }
  .my-0 {
    margin-bottom: 0;
    margin-top: 0;
  }
  .my-xs {
    margin-bottom: var(--lumo-space-xs);
    margin-top: var(--lumo-space-xs);
  }
  .my-s {
    margin-bottom: var(--lumo-space-s);
    margin-top: var(--lumo-space-s);
  }
  .my-m {
    margin-bottom: var(--lumo-space-m);
    margin-top: var(--lumo-space-m);
  }
  .my-l {
    margin-bottom: var(--lumo-space-l);
    margin-top: var(--lumo-space-l);
  }
  .my-xl {
    margin-bottom: var(--lumo-space-xl);
    margin-top: var(--lumo-space-xl);
  }

  /* === Padding === */
  .p-0 {
    padding: 0;
  }
  .p-xs {
    padding: var(--lumo-space-xs);
  }
  .p-s {
    padding: var(--lumo-space-s);
  }
  .p-m {
    padding: var(--lumo-space-m);
  }
  .p-l {
    padding: var(--lumo-space-l);
  }
  .p-xl {
    padding: var(--lumo-space-xl);
  }

  /* === Padding (bottom) === */
  .pb-0 {
    padding-bottom: 0;
  }
  .pb-xs {
    padding-bottom: var(--lumo-space-xs);
  }
  .pb-s {
    padding-bottom: var(--lumo-space-s);
  }
  .pb-m {
    padding-bottom: var(--lumo-space-m);
  }
  .pb-l {
    padding-bottom: var(--lumo-space-l);
  }
  .pb-xl {
    padding-bottom: var(--lumo-space-xl);
  }

  /* === Padding (end) === */
  .pe-0 {
    padding-inline-end: 0;
  }
  .pe-xs {
    padding-inline-end: var(--lumo-space-xs);
  }
  .pe-s {
    padding-inline-end: var(--lumo-space-s);
  }
  .pe-m {
    padding-inline-end: var(--lumo-space-m);
  }
  .pe-l {
    padding-inline-end: var(--lumo-space-l);
  }
  .pe-xl {
    padding-inline-end: var(--lumo-space-xl);
  }

  /* === Padding (horizontal) === */
  .px-0 {
    padding-left: 0;
    padding-right: 0;
  }
  .px-xs {
    padding-left: var(--lumo-space-xs);
    padding-right: var(--lumo-space-xs);
  }
  .px-s {
    padding-left: var(--lumo-space-s);
    padding-right: var(--lumo-space-s);
  }
  .px-m {
    padding-left: var(--lumo-space-m);
    padding-right: var(--lumo-space-m);
  }
  .px-l {
    padding-left: var(--lumo-space-l);
    padding-right: var(--lumo-space-l);
  }
  .px-xl {
    padding-left: var(--lumo-space-xl);
    padding-right: var(--lumo-space-xl);
  }

  /* === Padding (left) === */
  .pl-0 {
    padding-left: 0;
  }
  .pl-xs {
    padding-left: var(--lumo-space-xs);
  }
  .pl-s {
    padding-left: var(--lumo-space-s);
  }
  .pl-m {
    padding-left: var(--lumo-space-m);
  }
  .pl-l {
    padding-left: var(--lumo-space-l);
  }
  .pl-xl {
    padding-left: var(--lumo-space-xl);
  }

  /* === Padding (right) === */
  .pr-0 {
    padding-right: 0;
  }
  .pr-xs {
    padding-right: var(--lumo-space-xs);
  }
  .pr-s {
    padding-right: var(--lumo-space-s);
  }
  .pr-m {
    padding-right: var(--lumo-space-m);
  }
  .pr-l {
    padding-right: var(--lumo-space-l);
  }
  .pr-xl {
    padding-right: var(--lumo-space-xl);
  }

  /* === Padding (start) === */
  .ps-0 {
    padding-inline-start: 0;
  }
  .ps-xs {
    padding-inline-start: var(--lumo-space-xs);
  }
  .ps-s {
    padding-inline-start: var(--lumo-space-s);
  }
  .ps-m {
    padding-inline-start: var(--lumo-space-m);
  }
  .ps-l {
    padding-inline-start: var(--lumo-space-l);
  }
  .ps-xl {
    padding-inline-start: var(--lumo-space-xl);
  }

  /* === Padding (top) === */
  .pt-0 {
    padding-top: 0;
  }
  .pt-xs {
    padding-top: var(--lumo-space-xs);
  }
  .pt-s {
    padding-top: var(--lumo-space-s);
  }
  .pt-m {
    padding-top: var(--lumo-space-m);
  }
  .pt-l {
    padding-top: var(--lumo-space-l);
  }
  .pt-xl {
    padding-top: var(--lumo-space-xl);
  }

  /* === Padding (vertical) === */
  .py-0 {
    padding-bottom: 0;
    padding-top: 0;
  }
  .py-xs {
    padding-bottom: var(--lumo-space-xs);
    padding-top: var(--lumo-space-xs);
  }
  .py-s {
    padding-bottom: var(--lumo-space-s);
    padding-top: var(--lumo-space-s);
  }
  .py-m {
    padding-bottom: var(--lumo-space-m);
    padding-top: var(--lumo-space-m);
  }
  .py-l {
    padding-bottom: var(--lumo-space-l);
    padding-top: var(--lumo-space-l);
  }
  .py-xl {
    padding-bottom: var(--lumo-space-xl);
    padding-top: var(--lumo-space-xl);
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const En=x`
  /* === Font size === */
  .text-2xs {
    font-size: var(--lumo-font-size-xxs);
  }
  .text-xs {
    font-size: var(--lumo-font-size-xs);
  }
  .text-s {
    font-size: var(--lumo-font-size-s);
  }
  .text-m {
    font-size: var(--lumo-font-size-m);
  }
  .text-l {
    font-size: var(--lumo-font-size-l);
  }
  .text-xl {
    font-size: var(--lumo-font-size-xl);
  }
  .text-2xl {
    font-size: var(--lumo-font-size-xxl);
  }
  .text-3xl {
    font-size: var(--lumo-font-size-xxxl);
  }

  /* === Font weight === */
  .font-thin {
    font-weight: 100;
  }
  .font-extralight {
    font-weight: 200;
  }
  .font-light {
    font-weight: 300;
  }
  .font-normal {
    font-weight: 400;
  }
  .font-medium {
    font-weight: 500;
  }
  .font-semibold {
    font-weight: 600;
  }
  .font-bold {
    font-weight: 700;
  }
  .font-extrabold {
    font-weight: 800;
  }
  .font-black {
    font-weight: 900;
  }

  /* === Line height === */
  .leading-none {
    line-height: 1;
  }
  .leading-xs {
    line-height: var(--lumo-line-height-xs);
  }
  .leading-s {
    line-height: var(--lumo-line-height-s);
  }
  .leading-m {
    line-height: var(--lumo-line-height-m);
  }

  /* === List style type === */
  .list-none {
    list-style-type: none;
  }

  /* === Text alignment === */
  .text-left {
    text-align: left;
  }
  .text-center {
    text-align: center;
  }
  .text-right {
    text-align: right;
  }
  .text-justify {
    text-align: justify;
  }

  /* === Text color === */
  .text-header {
    color: var(--lumo-header-text-color);
  }
  .text-body {
    color: var(--lumo-body-text-color);
  }
  .text-secondary {
    color: var(--lumo-secondary-text-color);
  }
  .text-tertiary {
    color: var(--lumo-tertiary-text-color);
  }
  .text-disabled {
    color: var(--lumo-disabled-text-color);
  }
  .text-primary {
    color: var(--lumo-primary-text-color);
  }
  .text-primary-contrast {
    color: var(--lumo-primary-contrast-color);
  }
  .text-error {
    color: var(--lumo-error-text-color);
  }
  .text-error-contrast {
    color: var(--lumo-error-contrast-color);
  }
  .text-success {
    color: var(--lumo-success-text-color);
  }
  .text-success-contrast {
    color: var(--lumo-success-contrast-color);
  }

  /* === Text overflow === */
  .overflow-clip {
    text-overflow: clip;
  }
  .overflow-ellipsis {
    text-overflow: ellipsis;
  }

  /* === Text transform === */
  .capitalize {
    text-transform: capitalize;
  }
  .lowercase {
    text-transform: lowercase;
  }
  .uppercase {
    text-transform: uppercase;
  }

  /* === Whitespace === */
  .whitespace-normal {
    white-space: normal;
  }
  .whitespace-nowrap {
    white-space: nowrap;
  }
  .whitespace-pre {
    white-space: pre;
  }
  .whitespace-pre-line {
    white-space: pre-line;
  }
  .whitespace-pre-wrap {
    white-space: pre-wrap;
  }

  /* === Responsive design === */
  @media (min-width: 640px) {
    .sm\\:text-2xs {
      font-size: var(--lumo-font-size-xxs);
    }
    .sm\\:text-xs {
      font-size: var(--lumo-font-size-xs);
    }
    .sm\\:text-s {
      font-size: var(--lumo-font-size-s);
    }
    .sm\\:text-m {
      font-size: var(--lumo-font-size-m);
    }
    .sm\\:text-l {
      font-size: var(--lumo-font-size-l);
    }
    .sm\\:text-xl {
      font-size: var(--lumo-font-size-xl);
    }
    .sm\\:text-2xl {
      font-size: var(--lumo-font-size-xxl);
    }
    .sm\\:text-3xl {
      font-size: var(--lumo-font-size-xxxl);
    }
  }
  @media (min-width: 768px) {
    .md\\:text-2xs {
      font-size: var(--lumo-font-size-xxs);
    }
    .md\\:text-xs {
      font-size: var(--lumo-font-size-xs);
    }
    .md\\:text-s {
      font-size: var(--lumo-font-size-s);
    }
    .md\\:text-m {
      font-size: var(--lumo-font-size-m);
    }
    .md\\:text-l {
      font-size: var(--lumo-font-size-l);
    }
    .md\\:text-xl {
      font-size: var(--lumo-font-size-xl);
    }
    .md\\:text-2xl {
      font-size: var(--lumo-font-size-xxl);
    }
    .md\\:text-3xl {
      font-size: var(--lumo-font-size-xxxl);
    }
  }
  @media (min-width: 1024px) {
    .lg\\:text-2xs {
      font-size: var(--lumo-font-size-xxs);
    }
    .lg\\:text-xs {
      font-size: var(--lumo-font-size-xs);
    }
    .lg\\:text-s {
      font-size: var(--lumo-font-size-s);
    }
    .lg\\:text-m {
      font-size: var(--lumo-font-size-m);
    }
    .lg\\:text-l {
      font-size: var(--lumo-font-size-l);
    }
    .lg\\:text-xl {
      font-size: var(--lumo-font-size-xl);
    }
    .lg\\:text-2xl {
      font-size: var(--lumo-font-size-xxl);
    }
    .lg\\:text-3xl {
      font-size: var(--lumo-font-size-xxxl);
    }
  }
  @media (min-width: 1280px) {
    .xl\\:text-2xs {
      font-size: var(--lumo-font-size-xxs);
    }
    .xl\\:text-xs {
      font-size: var(--lumo-font-size-xs);
    }
    .xl\\:text-s {
      font-size: var(--lumo-font-size-s);
    }
    .xl\\:text-m {
      font-size: var(--lumo-font-size-m);
    }
    .xl\\:text-l {
      font-size: var(--lumo-font-size-l);
    }
    .xl\\:text-xl {
      font-size: var(--lumo-font-size-xl);
    }
    .xl\\:text-2xl {
      font-size: var(--lumo-font-size-xxl);
    }
    .xl\\:text-3xl {
      font-size: var(--lumo-font-size-xxxl);
    }
  }
  @media (min-width: 1536px) {
    .\\32xl\\:text-2xs {
      font-size: var(--lumo-font-size-xxs);
    }
    .\\32xl\\:text-xs {
      font-size: var(--lumo-font-size-xs);
    }
    .\\32xl\\:text-s {
      font-size: var(--lumo-font-size-s);
    }
    .\\32xl\\:text-m {
      font-size: var(--lumo-font-size-m);
    }
    .\\32xl\\:text-l {
      font-size: var(--lumo-font-size-l);
    }
    .\\32xl\\:text-xl {
      font-size: var(--lumo-font-size-xl);
    }
    .\\32xl\\:text-2xl {
      font-size: var(--lumo-font-size-xxl);
    }
    .\\32xl\\:text-3xl {
      font-size: var(--lumo-font-size-xxxl);
    }
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Oo=x`
${gn}
${vn}
${xn}
${wn}
${bn}
${yn}
${_n}
${Sn}
${En}
`;Ue("",Oo,{moduleId:"lumo-utility"});const $n=(o,e)=>{const t=/(?:@media\s(.+?))?(?:\s{)?\@import\s*(?:url\(\s*['"]?(.+?)['"]?\s*\)|(["'])((?:\\.|[^\\])*?)\3)([^;]*);(?:})?/g;/\/\*(.|[\r\n])*?\*\//gm.exec(o)!=null&&(o=rn(o));for(var r,n=o;(r=t.exec(o))!==null;){n=n.replace(r[0],"");const i=document.createElement("link");i.rel="stylesheet",i.href=r[2]||r[4];const s=r[1]||r[5];s&&(i.media=s),e===document?document.head.appendChild(i):e.appendChild(i)}return n},de=(o,e,t)=>{if(e===document){const n=Cn(o);if(window.Vaadin.theme.injectedGlobalCss.indexOf(n)!==-1)return;window.Vaadin.theme.injectedGlobalCss.push(n)}const r=new CSSStyleSheet;r.replaceSync($n(o,e)),t?e.adoptedStyleSheets=[r,...e.adoptedStyleSheets]:e.adoptedStyleSheets=[...e.adoptedStyleSheets,r]};window.Vaadin=window.Vaadin||{};window.Vaadin.theme=window.Vaadin.theme||{};window.Vaadin.theme.injectedGlobalCss=[];function Zt(o){let e,t,r=2166136261;for(e=0,t=o.length;e<t;e++)r^=o.charCodeAt(e),r+=(r<<1)+(r<<4)+(r<<7)+(r<<8)+(r<<24);return("0000000"+(r>>>0).toString(16)).substr(-8)}function Cn(o){let e=Zt(o);return e+Zt(e+o)}const An=o=>{document._vaadintheme_datastock_componentCss||(document._vaadintheme_datastock_componentCss=!0),de($o.cssText,o,!0),de(To.cssText,o,!0),de(ko.cssText,o,!0),de(Lo.cssText,o,!0),de(Oo.cssText,o,!0)},Tn=An;Tn(document);export{Nn as T,zr as Z,sn as a,Ur as b,_ as c,To as d,Vr as e,$o as f,_o as g,Sr as h,x as i,Ue as r,Fr as t,Ln as w,W as x,k as y};
