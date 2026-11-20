(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const l of r)if(l.type==="childList")for(const m of l.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&o(m)}).observe(document,{childList:!0,subtree:!0});function s(r){const l={};return r.integrity&&(l.integrity=r.integrity),r.referrerPolicy&&(l.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?l.credentials="include":r.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function o(r){if(r.ep)return;r.ep=!0;const l=s(r);fetch(r.href,l)}})();const nt="modulepreload",at=function(t,e){return new URL(t,e).href},De={},st=function(e,s,o){let r=Promise.resolve();if(s&&s.length>0){let w=function(n){return Promise.all(n.map(v=>Promise.resolve(v).then(a=>({status:"fulfilled",value:a}),a=>({status:"rejected",reason:a}))))};const m=document.getElementsByTagName("link"),h=document.querySelector("meta[property=csp-nonce]"),f=h?.nonce||h?.getAttribute("nonce");r=w(s.map(n=>{if(n=at(n,o),n in De)return;De[n]=!0;const v=n.endsWith(".css"),a=v?'[rel="stylesheet"]':"";if(o)for(let g=m.length-1;g>=0;g--){const C=m[g];if(C.href===n&&(!v||C.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${n}"]${a}`))return;const u=document.createElement("link");if(u.rel=v?"stylesheet":nt,v||(u.as="script"),u.crossOrigin="",u.href=n,f&&u.setAttribute("nonce",f),document.head.appendChild(u),v)return new Promise((g,C)=>{u.addEventListener("load",g),u.addEventListener("error",()=>C(new Error(`Unable to preload CSS for ${n}`)))})}))}function l(m){const h=new Event("vite:preloadError",{cancelable:!0});if(h.payload=m,window.dispatchEvent(h),!h.defaultPrevented)throw m}return r.then(m=>{for(const h of m||[])h.status==="rejected"&&l(h.reason);return e().catch(l)})},W=[{id:"india",name:"India",iso:"356",lat:28.61,lon:77.21},{id:"usa",name:"United States",iso:"840",lat:38.9,lon:-77.04,reach:.1},{id:"canada",name:"Canada",iso:"124",lat:45.42,lon:-75.7,reach:.15},{id:"mexico",name:"Mexico",iso:"484",lat:19.43,lon:-99.13},{id:"brazil",name:"Brazil",iso:"076",lat:-15.79,lon:-47.88},{id:"argentina",name:"Argentina",iso:"032",lat:-34.6,lon:-58.38},{id:"chile",name:"Chile",iso:"152",lat:-33.45,lon:-70.67},{id:"uk",name:"United Kingdom",iso:"826",lat:51.51,lon:-.13},{id:"france",name:"France",iso:"250",lat:48.86,lon:2.35,reach:.25},{id:"germany",name:"Germany",iso:"276",lat:52.52,lon:13.4},{id:"spain",name:"Spain",iso:"724",lat:40.42,lon:-3.7,reach:.25},{id:"italy",name:"Italy",iso:"380",lat:41.9,lon:12.5},{id:"norway",name:"Norway",iso:"578",lat:59.91,lon:10.75,reach:.15},{id:"sweden",name:"Sweden",iso:"752",lat:59.33,lon:18.07},{id:"iceland",name:"Iceland",iso:"352",lat:64.15,lon:-21.94},{id:"russia",name:"Russia",iso:"643",lat:55.76,lon:37.62,reach:.1},{id:"turkey",name:"Turkey",iso:"792",lat:39.93,lon:32.86},{id:"egypt",name:"Egypt",iso:"818",lat:30.04,lon:31.24},{id:"nigeria",name:"Nigeria",iso:"566",lat:9.08,lon:7.4},{id:"kenya",name:"Kenya",iso:"404",lat:-1.29,lon:36.82},{id:"southafrica",name:"South Africa",iso:"710",lat:-25.75,lon:28.19},{id:"saudiarabia",name:"Saudi Arabia",iso:"682",lat:24.71,lon:46.68},{id:"uae",name:"United Arab Emirates",iso:"784",lat:24.45,lon:54.38},{id:"china",name:"China",iso:"156",lat:39.9,lon:116.41,reach:.2},{id:"japan",name:"Japan",iso:"392",lat:35.68,lon:139.65,reach:1.2},{id:"southkorea",name:"South Korea",iso:"410",lat:37.57,lon:126.98},{id:"thailand",name:"Thailand",iso:"764",lat:13.76,lon:100.5},{id:"indonesia",name:"Indonesia",iso:"360",lat:-6.21,lon:106.85,reach:1.6},{id:"australia",name:"Australia",iso:"036",lat:-35.28,lon:149.13},{id:"newzealand",name:"New Zealand",iso:"554",lat:-41.29,lon:174.78,reach:1.2}],H=new Map(W.map(t=>[t.id,t])),it=.35;async function rt(t){const{loadCountryFeatures:e}=await st(async()=>{const{loadCountryFeatures:a}=await import("./worldCountries-CsugLhmJ.js");return{loadCountryFeatures:a}},[],import.meta.url),s=(await e()).find(a=>a.id===t.iso);if(!s)return null;const o=s.geometry,r=o.type==="Polygon"?[o.coordinates]:o.coordinates,l=a=>{let u=1/0,g=1/0,C=-1/0,b=-1/0;for(const[D,P]of a)u=Math.min(u,D),g=Math.min(g,P),C=Math.max(C,D),b=Math.max(b,P);return[u,g,C,b]},m=a=>Math.abs(a.reduce((u,[g,C],b)=>{const[D,P]=a[(b+1)%a.length];return u+(g*P-D*C)},0))/2,h=r.map(a=>({poly:a,box:l(a[0]),area:m(a[0])})).sort((a,u)=>u.area-a.area),f=h[0],w=t.reach??it,n=w*(f.box[2]-f.box[0]),v=w*(f.box[3]-f.box[1]);return h.filter(a=>{if(a===f)return!0;if(a.area<.008*f.area)return!1;const u=(a.box[0]+a.box[2])/2,g=(a.box[1]+a.box[3])/2;return u>=f.box[0]-n&&u<=f.box[2]+n&&g>=f.box[1]-v&&g<=f.box[3]+v}).map(a=>a.poly)}function lt(t,e,s){for(const o of t){let r=!1;for(const l of o)for(let m=0,h=l.length-1;m<l.length;h=m++){const[f,w]=l[m],[n,v]=l[h];w>s!=v>s&&e<(n-f)*(s-w)/(v-w)+f&&(r=!r)}if(r)return!0}return!1}function Be(t){let e=1/0,s=1/0,o=-1/0,r=-1/0;for(const l of t)for(const[m,h]of l[0])e=Math.min(e,m),s=Math.min(s,h),o=Math.max(o,m),r=Math.max(r,h);return[e,s,o,r]}const ct="https://api.open-meteo.com/v1/forecast",_e=24,ut=600*1e3,Fe=new Map;function ft(t,e){const[s,o,r,l]=Be(e),m=[[t.lat,t.lon]];for(let h=5;h<=40;h+=1){const f=[],w=(r-s)/h,n=(l-o)/h;for(let v=0;v<h;v++)for(let a=0;a<h;a++){const u=s+(a+.5)*w,g=o+(v+.5)*n;lt(e,u,g)&&f.push([+g.toFixed(2),+u.toFixed(2)])}if(f.length>=_e||h===40){const v=Math.max(1,Math.round(f.length/_e));for(let a=0;a<f.length;a+=v)m.push(f[a]);break}}return m}async function dt(t,e,s={}){try{return await ht(t,e,s)}catch(o){const r=globalThis.WEATHER_SNAPSHOT?.[t.id];if(r)return r;throw o}}async function ht(t,e,{fresh:s=!1}={}){const o=Fe.get(t.id);if(!s&&o&&Date.now()-o.at<ut)return o.reading;const r=new URL(ct);r.searchParams.set("latitude",e.map(u=>u[0]).join(",")),r.searchParams.set("longitude",e.map(u=>u[1]).join(",")),r.searchParams.set("current","temperature_2m,wind_speed_10m,wind_direction_10m"),r.searchParams.set("wind_speed_unit","kmh");const l=await fetch(r);if(!l.ok)throw new Error(`Open-Meteo → HTTP ${l.status}`);const m=await l.json(),f=(Array.isArray(m)?m:[m]).map((u,g)=>({lat:e[g][0],lon:e[g][1],tempC:u.current.temperature_2m,kph:u.current.wind_speed_10m,from:u.current.wind_direction_10m})).filter(u=>Number.isFinite(u.tempC));if(!f.length)throw new Error("Open-Meteo returned no readings");let w=0,n=0,v=0;for(const u of f){const g=(u.from+180)*Math.PI/180;w+=Math.sin(g)*u.kph,n+=Math.cos(g)*u.kph,v+=u.tempC}w/=f.length,n/=f.length;const a={samples:f,tempC:v/f.length,kph:Math.hypot(w,n)||f[0].kph,from:(Math.atan2(w,n)*180/Math.PI+180+360)%360,u:w,v:n};return Fe.set(t.id,{at:Date.now(),reading:a}),a}const O=[[-25,.78],[-12,.68],[2,.5556],[7,.5556],[12,.4475],[17,.3333],[22,.1339],[27,.0833],[32,.0556],[37,0],[42,-.1111]];function Xe(t){if(t<=O[0][0])return O[0][1];for(let e=1;e<O.length;e++){const[s,o]=O[e-1],[r,l]=O[e];if(t<=r)return o+(l-o)*((t-s)/(r-s))}return O[O.length-1][1]}function mt(t,e,s){t=(t%1+1)%1;const o=r=>{const l=(r+t*6)%6;return s-s*e*Math.max(Math.min(l,4-l,1),0)};return[o(5),o(3),o(1)]}const re=t=>mt(Xe(t),.72,1),J=[-25,45],pt=["ripple","swirl","breathe","wind"],Ie=11,Oe=3.5,pe=3.6,vt=2.4,gt=["Forming","Formed","Shifting"],$={dots:200,size:.56,depth:0,wave:.95,swirl:.8,flow:1.5,sea:.48,seaNoise:.43,noiseScale:1.35,noiseSpeed:.35,noiseDrift:4.25,roughness:0,complexity:1.45,contrast:2.4,falloff:.32,rim:.16,landSize:1.36,landGrid:1,cloth:0,hold:1,dissolve:2.2,reform:3.3,rest:1.4,turbulence:.25,cycle:!0,square:!1,glow:!1,parallax:!1,motion:"all",colorMode:"average"},wt=`#version 300 es
precision highp float;
uniform ivec2 uDims;
uniform float uS;          // spacing between dots
uniform vec2 uFlow;        // how far the wind has carried the lattice
uniform float uTime;       // wave clock (runs at the wind's pace)
uniform float uClock;      // real clock
uniform vec4 uMode;        // weights: ripple, swirl, breathe, wind
uniform vec2 uWindDir;
uniform float uWave, uSwirl, uDepth, uDot, uSea, uPass, uFade;
uniform float uForm;       // 0..1: how far the country has grown out from its centre
uniform float uLoop;       // 0 still .. 1 fully shifting (patches coming apart and back)
uniform float uSquare;     // 1: the sea's dots are squares
uniform float uTurb, uNoise, uCloth;
uniform float uNScale, uNSpeed, uNRough, uNComplex, uNContrast; // the sea noise (uNSpeed: its clock)
uniform vec2 uNDrift; // how far the noise's blotches have travelled with the wind
uniform float uFalloff, uRim;            // the coast
uniform float uLandSize, uLandGrid;      // the country's dots
uniform float uDis, uRef, uRest;         // a patch's life, in seconds
uniform float uAspect;
uniform vec2 uPan;
uniform float uPxPerUnit;
uniform sampler2D uMask, uField, uSoft; // uSoft: the outline blurred, for the coast's falloff
uniform vec2 uMaskCenter, uMaskSize;
uniform vec3 uSeaCol;
out vec3 vCol;
out float vAlpha;
out float vPx;
out float vShape;

float hash(vec2 p) { p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
float hash3(vec3 p) { p = fract(p * vec3(0.1031, 0.1030, 0.0973)); p += dot(p, p.yxz + 33.33); return fract((p.x + p.y) * p.z); }
vec2 rot(vec2 v, float a) { float c = cos(a), s = sin(a); return vec2(c * v.x - s * v.y, s * v.x + c * v.y); }

// Smooth value noise in space and time, so everything evolves without a jolt.
float vnoise(vec3 p) {
  vec3 i = floor(p), f = fract(p);
  vec3 u = f * f * f * (f * (f * 6.0 - 15.0) + 10.0);
  float a = mix(mix(hash3(i), hash3(i + vec3(1, 0, 0)), u.x), mix(hash3(i + vec3(0, 1, 0)), hash3(i + vec3(1, 1, 0)), u.x), u.y);
  float b = mix(mix(hash3(i + vec3(0, 0, 1)), hash3(i + vec3(1, 0, 1)), u.x), mix(hash3(i + vec3(0, 1, 1)), hash3(i + vec3(1, 1, 1)), u.x), u.y);
  return mix(a, b, u.z);
}
float psi(vec2 p, float t) {
  return vnoise(vec3(p * 1.15, t)) + 0.4 * vnoise(vec3(p * 2.5 + 11.0, t * 1.4));
}
// The curl of psi: a turbulent flow with no sources or sinks, so dots swirl rather than clump.
vec2 curl(vec2 p, float t) {
  const float e = 0.015;
  float a = psi(p + vec2(0.0, e), t), b = psi(p - vec2(0.0, e), t);
  float c = psi(p + vec2(e, 0.0), t), d = psi(p - vec2(e, 0.0), t);
  return vec2(a - b, d - c) / (2.0 * e);
}
float ease5(float x) { x = clamp(x, 0.0, 1.0); return x * x * x * (x * (x * 6.0 - 15.0) + 10.0); }
float maskAt(vec2 uv) {
  return (uv.x > 0.0 && uv.y > 0.0 && uv.x < 1.0 && uv.y < 1.0) ? texture(uMask, uv).a : 0.0;
}
float softAt(vec2 uv) {
  return (uv.x > 0.0 && uv.y > 0.0 && uv.x < 1.0 && uv.y < 1.0) ? texture(uSoft, uv).a : 0.0;
}

void main() {
  int i = gl_VertexID % uDims.x;
  int j = gl_VertexID / uDims.x;
  vec2 shift = floor(uFlow / uS);
  vec2 base = (vec2(i, j) - vec2(uDims) * 0.5) * uS + (uFlow - shift * uS);
  vec2 key = vec2(i, j) - shift; // the dot's identity as it travels
  float h = hash(key);
  // Every n-th dot each way: the country is drawn on this coarser lattice, in bigger dots.
  bool coarse = mod(key.x, uLandGrid) < 0.5 && mod(key.y, uLandGrid) < 0.5;

  // ---- The country: where it is, how far it has grown, how far it has been swept away ----
  vec2 muv = (base - uMaskCenter) / uMaskSize + 0.5;
  float m = smoothstep(0.3, 0.7, maskAt(muv));
  // How much land this is: the sharp outline, or with a falloff its blurred twin, which
  // fades from land to sea across a band either side of the coast.
  float L = uFalloff > 0.001 ? smoothstep(0.0, 1.0, softAt(muv)) : m;
  vec2 rel = base - uMaskCenter;
  float dn = length(rel) / (0.5 * length(uMaskSize)); // 0 at the centre, ~1 at the box's corners
  float R = uForm * 1.15;
  // Grown: everything inside the front that spreads out from the centre.
  float F = 1.0 - smoothstep(R - 0.09, R + 0.01, dn);
  // Once formed it never vanishes whole: big, soft-edged regions of it melt away into the
  // sea and then grow back, again and again. Only broad, slow noise picks them (no fine
  // layer), and its wide threshold gives each region a long feathered edge, so a region
  // fades out from its middle towards its edges rather than breaking into random bits.
  float pt = uClock * 0.02;
  float P = vnoise(vec3(base * 0.85 + vec2(pt * 0.6, -pt * 0.4), pt));
  float part = smoothstep(0.38, 0.68, P);
  // Each region runs its own clock, which shifts only gently across the land, so a whole
  // region dissolves and reforms together, the fade sweeping softly across it.
  float life = uDis + 0.4 + uRef + uRest;
  float sl = fract(uClock / life + vnoise(vec3(base * 0.35, 3.0)) * 1.4) * life;
  // Eased in and out with a quintic curve, so a patch starts and stops moving without a kick.
  float env = sl < uDis ? ease5(sl / uDis)
            : sl < uDis + 0.4 ? 1.0
            : sl < uDis + 0.4 + uRef ? 1.0 - ease5((sl - uDis - 0.4) / uRef)
            : 0.0;
  // The same for every dot of a patch (no per-dot randomness), so it moves as one sheet.
  float dd = clamp(uLoop * part * env, 0.0, 1.0);
  // Near a patch coming apart the land is unsettled too: it trembles and cracks into plates.
  float unrest = uLoop * (0.3 + 0.7 * part * (0.4 + 0.6 * env));
  float c = L * F * (1.0 - dd); // how much of a country dot this is

  // Near the coast, just outside it: the lattice there is pulled thin (a dark gap) ...
  vec2 e = 3.5 * uS / uMaskSize;
  float near = max(max(maskAt(muv + vec2(e.x, 0.0)), maskAt(muv - vec2(e.x, 0.0))),
                   max(maskAt(muv + vec2(0.0, e.y)), maskAt(muv - vec2(0.0, e.y))));
  near = max(near, max(max(maskAt(muv + e * 0.7), maskAt(muv - e * 0.7)), max(maskAt(muv + vec2(e.x, -e.y) * 0.7), maskAt(muv + vec2(-e.x, e.y) * 0.7))));
  float formed = F * (1.0 - dd);
  float gap = smoothstep(0.1, 0.9, near) * (1.0 - m) * formed * uRim;
  // ... and the coast itself, where it is pushed outwards into a bright, packed rim.
  vec2 g = vec2(maskAt(muv + vec2(e.x, 0.0)) - maskAt(muv - vec2(e.x, 0.0)), maskAt(muv + vec2(0.0, e.y)) - maskAt(muv - vec2(0.0, e.y)));
  float coast = smoothstep(0.05, 0.4, length(g)) * formed * uRim;

  float t = uTime;
  vec2 d = base - uMaskCenter; // every ripple starts from the middle of the country
  float r = length(d);
  vec2 off = vec2(0.0);
  float z = 0.0;
  float ls = 0.0; // log of the size factor

  // Ripple: rings travelling out from the country's centre (the dots swell on the crests).
  {
    float ph = r * 11.0 - t * 2.4;
    float w = sin(ph) * exp(-r * 0.35);
    z += uMode.x * w * 0.5;
    ls += uMode.x * w * 0.75 * uWave;
    off += uMode.x * normalize(d + 1e-5) * cos(ph) * 0.012 * uWave;
  }
  // Swirl: rings of the lattice twisting one way and back, each a beat behind.
  {
    float ang = sin(r * 5.0 - t * 1.1) * 0.42 * exp(-r * 0.55) * uSwirl;
    off += uMode.y * (rot(d, ang) - d);
    float w = cos(r * 5.0 - t * 1.1);
    z += uMode.y * w * 0.35;
    ls += uMode.y * (w * 0.45 + ang * 0.6) * uWave;
  }
  // Breathe: the middle swells, the edges shrink, then back.
  {
    float b = sin(t * 0.9);
    float core = exp(-r * r * 1.4);
    z += uMode.z * b * (core * 1.1 - 0.25);
    ls += uMode.z * b * (core * 1.25 - 0.45) * uWave;
    off += uMode.z * d * b * core * -0.06;
  }
  // Wind: long swells rolling across the land the way the wind blows.
  {
    float al = dot(base, uWindDir);
    float across = dot(base, vec2(-uWindDir.y, uWindDir.x));
    float ph = al * 7.5 - t * 2.8 + sin(across * 3.0 + t * 0.4) * 0.9;
    float w = sin(ph);
    z += uMode.w * w * 0.45;
    ls += uMode.w * w * 0.7 * uWave;
    off += uMode.w * uWindDir * cos(ph) * 0.018 * uWave;
  }

  // Cloth: the whole lattice folds and slides in big, slow waves, like fabric.
  {
    float ct = uClock * 0.06;
    vec2 fold = vec2(vnoise(vec3(base * 0.9, ct)) - 0.5, vnoise(vec3(base * 0.9 + 17.0, ct)) - 0.5);
    off += fold * 0.06 * uCloth;
    float crease = vnoise(vec3(base * vec2(0.6, 2.2) + 5.0, ct * 1.3)) - 0.5;
    off.y += crease * 0.03 * uCloth;
    ls += crease * 0.5 * uCloth;
  }

  // The growing front pushes the lattice outward as it passes: a travelling ring.
  float front = exp(-pow((dn - R) / 0.05, 2.0)) * (1.0 - smoothstep(0.85, 1.0, uForm)) * step(0.001, uForm);
  off += normalize(rel + 1e-5) * front * 2.2 * uS;
  // The coast's rim is pushed out, packing its dots tight.
  off -= normalize(g + 1e-6) * coast * 0.9 * uS * (1.0 - m * 0.5);

  vec2 p = base + off;

  // The country's dots: the land swells apart in places and closes again, and where a
  // patch comes apart its dots follow the turbulent flow and the wind. Everything here is
  // a smooth function of position and time (no hard cell edges, no on/off thresholds), so
  // a dot drifting with the wind never jumps, however strong the turbulence.
  if (coarse) {
    float land = smoothstep(0.0, 0.25, L); // eases the motion in across the coast
    // Separation: a slow, smooth field pushing the land outwards in some places and
    // gathering it in others, so seams open and close without tearing.
    float st = uClock * 0.05;
    vec2 sep = vec2(vnoise(vec3(base * 2.2, st)) - 0.5, vnoise(vec3(base * 2.2 + 31.0, st)) - 0.5);
    vec2 away = normalize(rel + 1e-4);
    p += (sep * 1.4 + away * 0.35) * unrest * 0.04 * uTurb * F * land;
    float tremble = (0.025 + 0.05 * unrest) * F;
    // Dissolving no longer flings the dots off: they stay put and blend into the sea, so
    // only the gentle tremble moves them here.
    float reach = min(tremble * uTurb, 1.6) * land;
    // Advect along the flow in many short steps: long steps make neighbouring dots fly
    // apart unpredictably from frame to frame, which is what reads as a glitch.
    float ft = uClock * 0.09;
    vec2 q = p;
    for (int k = 0; k < 24; k++) q += curl(q, ft) * reach * 0.009;
    p = q;
  }

  // Seen from straight above: x scaled to the screen's shape, no perspective.
  gl_Position = vec4((p.x + uPan.x) / uAspect, p.y + uPan.y, 0.0, 1.0);

  // ---- The sea: a halftone of slowly evolving noise. Big dark blotches drifting with the
  // wind, clusters a few dots wide, and a grain from dot to dot; each dot as big as it is bright.
  float nt = uNSpeed; // the noise's own clock, run on the CPU at the evolution speed
  // The blotches: fractal noise with as many layers as the complexity asks (fractional
  // amounts fade the last layer in, so the slider moves smoothly). Each layer is finer
  // and evolves a little faster; roughness keeps more of the finer layers' strength.
  float g1 = 0.0, norm = 0.0, amp = 1.0, freq = 1.4 / uNScale;
  for (int o = 0; o < 6; o++) {
    float wgt = clamp(uNComplex - float(o), 0.0, 1.0);
    if (wgt <= 0.0) break;
    g1 += wgt * amp * vnoise(vec3((base - uNDrift) * freq + float(o) * 13.7, nt * (0.8 + 0.35 * float(o))));
    norm += wgt * amp;
    amp *= mix(0.35, 0.75, uNRough);
    freq *= 2.1;
  }
  g1 /= max(norm, 1e-4);
  float g2 = vnoise(vec3(base / (uS * 9.0 * uNScale) + 21.0, nt * 1.6));
  float g3 = vnoise(vec3(base / (uS * 2.6 * uNScale) - 7.0, nt * 2.6));
  // Roughness hands the weight from the big blotches to the grain.
  float w1 = 0.6 - 0.3 * uNRough, w2 = 0.25 + 0.1 * uNRough, w3 = 0.05 + 0.5 * uNRough;
  float n = (g1 * w1 + g2 * w2 + g3 * w3) / (w1 + w2 + w3);
  // Contrast: how sharply the noise splits into big bright dots and tiny dark ones.
  float sea = mix(1.0, smoothstep(0.0, 1.0, clamp((n - 0.47) * uNContrast + 0.5, 0.0, 1.0)), uNoise);
  sea *= 1.0 - 0.85 * gap;

  float lift = clamp(z * 0.6 + 0.55, 0.0, 1.2);
  float wave = exp(ls + z * uDepth * 1.6);
  float seaSize = 0.9 * wave * mix(0.08, 1.0, sea) * (1.0 + 0.5 * coast);
  // Inside the country the fine dots give way to the coarse lattice's big ones.
  float bigSize = 0.93 * uLandGrid * uLandSize * wave * (0.94 + 0.12 * h);
  // Across the coast's falloff, sizes blend: the land's dots shrink towards the sea's, and
  // the fine dots between them fade in, so neither ends at a hard line.
  float size = coarse ? mix(seaSize, bigSize, c) : seaSize * (1.0 - smoothstep(0.15, 0.85, c));
  float px = uDot * uS * size * uPxPerUnit;

  vec3 land = texture(uField, clamp(muv, 0.0, 1.0)).rgb;
  // The sea takes a faint tint of the land near it, as in the rim's glow.
  vec3 seaC = uSeaCol * (0.55 + 0.45 * sea) + land * 0.35 * (coast + front * 0.6);
  // Colours blend across the falloff too: the sea's dots near the coast take on the land's colour.
  float cc = coarse ? c : c * 0.8;
  vCol = mix(seaC, land * (0.7 + 0.4 * lift), cc);
  vAlpha = min(mix(uSea * mix(0.45, 1.0, sea) * (1.0 + 0.6 * coast + 0.8 * front), 1.0, cc), 1.0) * uFade;
  vShape = uSquare * (1.0 - smoothstep(0.0, 0.5, cc)); // squares in the sea, round on the land
  if (uPass > 0.5) { px *= 2.4; vAlpha = cc * 0.16 * lift * uFade; } // the glow pass: soft halos on the land
  vPx = clamp(px, 0.0, 96.0);
  gl_PointSize = vAlpha < 0.004 ? 0.0 : vPx;
}
`,xt=`#version 300 es
precision highp float;
uniform float uPass;
in vec3 vCol;
in float vAlpha;
in float vPx;
in float vShape;
out vec4 o;
void main() {
  vec2 q = gl_PointCoord * 2.0 - 1.0;
  float r = mix(length(q), max(abs(q.x), abs(q.y)), uPass > 0.5 ? 0.0 : vShape);
  float a;
  if (uPass > 0.5) a = exp(-r * r * 3.5);
  else {
    float aa = 2.0 / max(vPx, 1.0);
    a = 1.0 - smoothstep(1.0 - aa, 1.0, r);
  }
  a *= vAlpha;
  if (a < 0.002) discard;
  vec3 c = vCol * (uPass > 0.5 ? 1.0 : (1.08 - 0.18 * r * r));
  o = vec4(c * a, a);
}
`,yt=.78,bt=.74,St=640,z=12,Ue=96,Mt=t=>t*t*t*(t*(t*6-15)+10);function Tt(t){const e=t.getContext("webgl2",{antialias:!1,alpha:!1,premultipliedAlpha:!1});if(!e)return null;const s=e.createProgram();for(const[i,d]of[[e.VERTEX_SHADER,wt],[e.FRAGMENT_SHADER,xt]]){const p=e.createShader(i);if(e.shaderSource(p,d),e.compileShader(p),!e.getShaderParameter(p,e.COMPILE_STATUS))return console.error("[CountryWind]",e.getShaderInfoLog(p)),null;e.attachShader(s,p)}if(e.linkProgram(s),!e.getProgramParameter(s,e.LINK_STATUS))return console.error("[CountryWind]",e.getProgramInfoLog(s)),null;const o={};for(const i of["uDims","uS","uFlow","uTime","uClock","uMode","uWindDir","uWave","uSwirl","uDepth","uDot","uSea","uPass","uFade","uForm","uLoop","uSquare","uNScale","uNSpeed","uNDrift","uNRough","uNComplex","uNContrast","uFalloff","uRim","uLandSize","uLandGrid","uDis","uRef","uRest","uSoft","uTurb","uNoise","uCloth","uAspect","uPan","uPxPerUnit","uMask","uField","uMaskCenter","uMaskSize","uSeaCol"])o[i]=e.getUniformLocation(s,i);const r=e.createVertexArray(),l=()=>{const i=e.createTexture();return e.bindTexture(e.TEXTURE_2D,i),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,new Uint8Array([255,255,255,0])),i},m=l(),h=l(),f=l();let w=-1;const n={...$};let v=null,a=null,u=[],g=20,C={kph:0},b=[1,0],D=[1,0],P=[0,0],xe=0,ye=0,le=1,ce=[.5,.5,.4,.5],oe=0,be=[0,0],ne=[0,0],ue={left:0,top:0},R={left:0,top:0},ae=0,Se=0,B=[0,0],X=0,fe=0,j=0,Me=0,Te=[.6,.6,.6];function Ze(){const[i,d,p,x]=Be(v),N=(d+x)/2,E=Math.cos(N*Math.PI/180),L=(p-i)*E,A=x-d,k=(St-2*z)/Math.max(L,A),y=Math.ceil(L*k+2*z),M=Math.ceil(A*k+2*z);a={minLon:i,minLat:d,maxLon:p,maxLat:x,cosLat:E,w:y/k,h:M/k,ppu:k,bw:L,bh:A,cw:y,ch:M},Ee(m,1.2),w=-1,ke()}function Ee(i,d){const p=document.createElement("canvas");p.width=a.cw,p.height=a.ch;const x=p.getContext("2d");x.filter=`blur(${d}px)`,x.fillStyle="#fff",x.beginPath();for(const N of v)for(const E of N)E.forEach(([L,A],k)=>{const y=z+(L-a.minLon)*a.cosLat*a.ppu,M=z+(A-a.minLat)*a.ppu;k?x.lineTo(y,M):x.moveTo(y,M)}),x.closePath();x.fill("evenodd"),e.bindTexture(e.TEXTURE_2D,i),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,p)}function ke(){!a||n.falloff===w||(w=n.falloff,n.falloff>.001&&Ee(f,n.falloff*.05*Math.max(a.cw,a.ch)))}function de(){if(!a)return;const i=Ue,d=Math.max(8,Math.round(Ue*a.h/a.w)),p=new Uint8Array(i*d*4),x=z/a.ppu;for(let E=0;E<d;E++)for(let L=0;L<i;L++){const A=a.minLon+((L+.5)/i*a.w-x)/a.cosLat,k=a.minLat+(E+.5)/d*a.h-x;let y=g;if(n.colorMode==="map"&&u.length>1){let K=0,Ae=0;for(const me of u){const Ne=(me.lon-A)*a.cosLat,Pe=me.lat-k,Re=1/Math.pow(Ne*Ne+Pe*Pe+.05,1.6);K+=Re,Ae+=Re*me.tempC}y=Ae/K}const M=n.colorMode==="mono"?[1,1,1]:re(y),_=(E*i+L)*4;p[_]=M[0]*255,p[_+1]=M[1]*255,p[_+2]=M[2]*255,p[_+3]=255}e.bindTexture(e.TEXTURE_2D,h),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,i,d,0,e.RGBA,e.UNSIGNED_BYTE,p),Te=(n.colorMode==="mono"?[1,1,1]:re(g)).map(E=>E*.18+.78)}function Qe(){const i=Math.min(window.devicePixelRatio||1,2),d=Math.round(t.clientWidth*i),p=Math.round(t.clientHeight*i);(t.width!==d||t.height!==p)&&(t.width=d,t.height=p)}function et(i){X+=i,fe=Mt(Math.min(X/pe,1));const d=n.cycle&&X>pe+Math.max(0,n.hold);j+=((d?1:0)-j)*(1-Math.exp(-i/vt)),Me=X<pe?0:j>.05?2:1}function tt(i){ye+=i;const d=1-Math.exp(-i/1.5);b=[b[0]+(D[0]-b[0])*d,b[1]+(D[1]-b[1])*d];const p=Math.hypot(...b)||1;b=[b[0]/p,b[1]/p];const x=(.025+Math.min(C.kph,90)*.0055)*n.flow;P[0]+=b[0]*x*i,P[1]+=b[1]*x*i,xe+=i*le,et(i);let N=[0,0,0,0];if(n.motion==="auto"){oe+=i;const y=Ie+Oe,M=Math.floor(oe/y)%4,_=Math.max(0,oe%y-Ie)/Oe,K=_*_*(3-2*_);N[M]=1-K,N[(M+1)%4]=K}else n.motion==="all"?N=[.5,.5,.4,.5]:n.motion!=="none"&&(N[Math.max(0,pt.indexOf(n.motion))]=1);const E=1-Math.exp(-i/.9);ce=ce.map((y,M)=>y+(N[M]-y)*E);const L=1-Math.exp(-i/.5);ne=ne.map((y,M)=>y+((n.parallax?be[M]:0)-y)*L);const A=1-Math.exp(-i/.5);R={left:R.left+(ue.left-R.left)*A,top:R.top+(ue.top-R.top)*A},ae=Math.min(1,ae+i/1.2),Se+=i*.05*n.noiseSpeed;const k=i*.075*n.noiseDrift;B=[B[0]+b[0]*k,B[1]+b[1]*k]}function ot(){Qe();const i=t.width,d=t.height,p=i/d;if(e.viewport(0,0,i,d),e.clearColor(0,0,0,1),e.clear(e.COLOR_BUFFER_BIT),!a)return;const x=2*p*(1-R.left),N=2*(1-R.top),E=Math.min(bt*x/a.bw,yt*N/a.bh),L=[a.w*E,a.h*E],A=[p*R.left,-R.top],k=2*p/n.dots,y=[Math.ceil(2*p*1.12/k)+2,Math.ceil(2.24/k)+2];e.useProgram(s),e.bindVertexArray(r),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,m),e.uniform1i(o.uMask,0),e.activeTexture(e.TEXTURE1),e.bindTexture(e.TEXTURE_2D,h),e.uniform1i(o.uField,1),e.activeTexture(e.TEXTURE2),e.bindTexture(e.TEXTURE_2D,f),e.uniform1i(o.uSoft,2),e.uniform2i(o.uDims,y[0],y[1]),e.uniform1f(o.uS,k),e.uniform2f(o.uFlow,P[0],P[1]),e.uniform1f(o.uTime,xe),e.uniform1f(o.uClock,ye),e.uniform4fv(o.uMode,ce),e.uniform2f(o.uWindDir,b[0],b[1]),e.uniform1f(o.uWave,n.wave),e.uniform1f(o.uSwirl,n.swirl),e.uniform1f(o.uDepth,n.depth),e.uniform1f(o.uDot,n.size),e.uniform1f(o.uSea,n.sea),e.uniform1f(o.uFade,ae),e.uniform1f(o.uForm,fe),e.uniform1f(o.uLoop,j),e.uniform1f(o.uSquare,n.square?1:0),e.uniform1f(o.uNScale,Math.max(.05,n.noiseScale)),e.uniform1f(o.uNSpeed,Se),e.uniform2f(o.uNDrift,B[0],B[1]),e.uniform1f(o.uNRough,n.roughness),e.uniform1f(o.uNComplex,Math.min(Math.max(n.complexity,1),6)),e.uniform1f(o.uNContrast,Math.max(.1,n.contrast)),e.uniform1f(o.uFalloff,n.falloff),e.uniform1f(o.uRim,n.rim),e.uniform1f(o.uLandSize,n.landSize),e.uniform1f(o.uLandGrid,Math.max(1,Math.round(n.landGrid))),e.uniform1f(o.uDis,Math.max(.1,n.dissolve)),e.uniform1f(o.uRef,Math.max(.1,n.reform)),e.uniform1f(o.uRest,Math.max(0,n.rest)),e.uniform1f(o.uTurb,n.turbulence),e.uniform1f(o.uNoise,n.seaNoise),e.uniform1f(o.uCloth,n.cloth),e.uniform1f(o.uAspect,p),e.uniform2f(o.uPan,-ne[0]*.025,ne[1]*.025),e.uniform1f(o.uPxPerUnit,d/2),e.uniform2f(o.uMaskCenter,A[0],A[1]),e.uniform2f(o.uMaskSize,L[0],L[1]),e.uniform3fv(o.uSeaCol,Te),e.enable(e.BLEND);const M=y[0]*y[1];n.glow&&(e.blendFunc(e.ONE,e.ONE),e.uniform1f(o.uPass,1),e.drawArrays(e.POINTS,0,M)),e.blendFunc(e.ONE,e.ONE_MINUS_SRC_ALPHA),e.uniform1f(o.uPass,0),e.drawArrays(e.POINTS,0,M),e.disable(e.BLEND),e.bindVertexArray(null)}let Le=performance.now(),he=0;function Ce(i){const d=Math.min(Math.max((i-Le)/1e3,0),.1);Le=i,tt(d),ot(),he=requestAnimationFrame(Ce)}return he=requestAnimationFrame(Ce),{setOutline(i){v=i,Ze(),de(),ae=0,X=0,fe=0,j=0},setTemperatures(i,d){u=i||[],g=Number.isFinite(d)?d:20,de()},setWind(i,d,p){C={u:i,v:d,kph:Number.isFinite(p)?p:Math.hypot(i,d)};const x=Math.hypot(i,d);x>.01&&(D=[i/x,d/x]),le=.7+1.5*Math.min(C.kph/40,1)},get pace(){return le},get phase(){return gt[Me]},setOptions(i){const d=i.colorMode&&i.colorMode!==n.colorMode;i.motion&&i.motion!==n.motion&&(oe=0),Object.assign(n,i),d&&de(),ke()},get options(){return{...n}},setPointer(i,d){be=[i,d]},setInsets(i,d){ue={left:Math.min(Math.max(i,0),.6),top:Math.min(Math.max(d,0),.6)}},dispose(){cancelAnimationFrame(he)}}}const c=t=>document.getElementById(t),Et=600*1e3,je="country-wind:settings:v2",ze=[{upTo:-10,label:"Arctic"},{upTo:4,label:"Freezing"},{upTo:9,label:"Chilly"},{upTo:14,label:"Cool"},{upTo:19,label:"Mild"},{upTo:24,label:"Warm"},{upTo:29,label:"Summer"},{upTo:34,label:"Hot"},{upTo:39,label:"Very Hot"},{upTo:1/0,label:"Extreme Heat"}],kt=["N","NE","E","SE","S","SW","W","NW"],We=t=>kt[Math.round((t%360+360)%360/45)%8],Y=t=>`${Math.round(t*100)}%`,U=t=>t.toFixed(2),se=t=>`${t.toFixed(1)}s`,Lt=["Field",["dots","Dots across",30,240,1,t=>t],["size","Dot size",.2,1,.01,U],["depth","Depth",0,3,.05,U],["wave","Wave",0,2,.05,U],["swirl","Swirl",0,2.5,.05,U],["flow","Wind flow",0,4,.05,t=>`${t.toFixed(2)}×`],["cloth","Cloth fold",0,3,.05,U],"Sea",["sea","Sea dots",0,1,.01,Y],["seaNoise","Noise amount",0,1,.01,Y],["noiseScale","Noise scale",.2,4,.05,t=>`${t.toFixed(2)}×`],["noiseSpeed","Noise evolution",0,5,.05,t=>`${t.toFixed(2)}×`],["noiseDrift","Noise drift",0,8,.05,t=>`${t.toFixed(2)}×`],["roughness","Roughness",0,1,.01,Y],["complexity","Complexity",1,6,.05,t=>t.toFixed(2)],["contrast","Contrast",.3,6,.05,U],"Land",["landSize","Land dot size",.3,2,.01,t=>`${t.toFixed(2)}×`],["landGrid","Land spacing",1,3,1,t=>`every ${t}`],["falloff","Coast falloff",0,1,.01,Y],["rim","Coast rim",0,1,.01,Y],"Shifting",["hold","Hold formed",0,10,.5,se],["dissolve","Dissolve time",.3,8,.1,se],["reform","Reform time",.1,4,.05,se],["rest","Rest time",0,10,.1,se],["turbulence","Turbulence",0,2.5,.05,U]],Ct=new Set(["Sea","Land","Shifting"]),At=new Set(["glow","parallax","cycle","square"]);function Nt(){let t;try{t={...$,...JSON.parse(localStorage.getItem(je)||"{}")}}catch{t={...$}}return t={...$,country:t.country},t}function te(t){try{localStorage.setItem(je,JSON.stringify(t))}catch{}}const S=Nt(),T=Tt(c("stage"));if(!T)throw c("noGl").hidden=!1,new Error("WebGL 2 unavailable");T.setOptions(S);const Q=c("country");for(const t of W)Q.add(new Option(t.name,t.id));const $e=new URLSearchParams(location.search).get("country");let I=H.has($e)?$e:H.has(S.country)?S.country:"india";Q.value=I;const qe=c("sliders"),Ke={};let Ge="";for(const t of Lt){if(typeof t=="string"&&(Ge=t),Ct.has(Ge))continue;if(typeof t=="string"){const v=document.createElement("div");v.className="wx-group",v.textContent=t,qe.append(v);continue}const[e,s,o,r,l,m]=t,h=document.createElement("label");h.className="wx-slider",h.innerHTML=`<span class="wx-slider-row"><span>${s}</span><output></output></span>
    <input type="range" min="${o}" max="${r}" step="${l}" aria-label="${s}">`;const f=h.querySelector("input"),w=h.querySelector("output"),n=()=>{w.textContent=m(Number(f.value))};f.value=S[e],n(),f.addEventListener("input",()=>{S[e]=Number(f.value),n(),T.setOptions({[e]:S[e]}),te(S)}),Ke[e]={input:f,show:n},qe.append(h)}for(const t of["motion","colorMode"])c(t).value=S[t],c(t).addEventListener("change",e=>{T.setOptions({[t]:e.target.value}),!(t==="colorMode"&&H.get(I)?.colorMode)&&(S[t]=e.target.value,te(S))});function Ye(){const t=H.get(I)?.colorMode??S.colorMode;c("colorMode").value=t,T.setOptions({colorMode:t})}for(const t of At)c(t).closest("label").hidden=!0;document.querySelector(".wx-back-btn")?.remove();for(const t of["glow","parallax","cycle","square"])c(t).checked=S[t],c(t).addEventListener("change",e=>{S[t]=e.target.checked,T.setOptions({[t]:S[t]}),te(S)});c("reset").addEventListener("click",()=>{Object.assign(S,$),T.setOptions($);for(const[t,e]of Object.entries(Ke))e.input.value=S[t],e.show();c("motion").value=S.motion,Ye();for(const t of["glow","parallax","cycle","square"])c(t).checked=S[t];te({...S,country:I})});const V=t=>`${(Math.min(Math.max((t-J[0])/(J[1]-J[0]),0),1)*100).toFixed(1)}%`;{const t=[];for(let e=J[0];e<=J[1];e+=5){const[s,o,r]=re(e).map(l=>Math.round(l*255));t.push(`rgb(${s},${o},${r}) ${V(e)}`)}c("scale").style.background=`linear-gradient(90deg, ${t.join(", ")})`}let q=null,F=null,ie=null,Ve=[],He=0,Z=0;function G(t,e){const s=c("status");s.textContent=t,s.className=`weather-source-status ${e||""}`}function ee(t,{samples:e}={}){const{tempC:s,kph:o,from:r}=t,l=(r+180)%360,m=Math.sin(l*Math.PI/180)*o,h=Math.cos(l*Math.PI/180)*o;T.setWind(m,h,o),T.setTemperatures(e||[{lat:0,lon:0,tempC:s}],s),c("temp").textContent=s.toFixed(1),c("wind").textContent=o.toFixed(1),c("windArrow").hidden=!1,c("windArrow").style.transform=`rotate(${l}deg)`,c("windFrom").hidden=!1,c("windFrom").textContent=`${We(r)} → ${We(l)}`;const[f,w,n]=re(s).map(g=>Math.round(g*255));c("swatch").style.background=`rgb(${f},${w},${n})`,c("temp").style.color=`rgb(${f},${w},${n})`,c("band").textContent=(ze.find(g=>s<=g.upTo)||ze.at(-1)).label,c("pace").textContent=T.pace.toFixed(2),c("marker").style.left=V(s);const v=e?e.map(g=>g.tempC):[s],a=Math.min(...v),u=Math.max(...v);c("scaleSpan").style.left=`calc(${V(a)} - 4px)`,c("scaleSpan").style.width=`calc(${V(u)} - ${V(a)} + 8px)`,c("range").textContent=e&&e.length>1?`Across ${e.length} points: ${a.toFixed(1)}° to ${u.toFixed(1)}°`:"One reading, typed in by hand"}async function ve({fresh:t=!1}={}){const e=H.get(I),s=++Z;F||G("Fetching","");try{const o=await dt(e,Ve,{fresh:t});if(s!==Z)return;q=o,F||(ee(o,{samples:o.samples}),G(o.savedAt?"Snapshot":"Live",o.savedAt?"":"live"));const r=new Date(o.savedAt||Date.now());c("sub").textContent=`Open-Meteo · ${o.samples.length} points · ${o.savedAt?r.toLocaleDateString([],{day:"numeric",month:"short"})+" ":""}${r.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}`}catch(o){if(s!==Z)return;console.error("[CountryWind]",o),F||(G("Offline","error"),q||ee({tempC:20,kph:12,from:270}))}}async function ge(t){I=t,Q.value=t,Ye(),te({...S,country:t});const e=new URL(location.href);e.searchParams.set("country",t),history.replaceState(null,"",e);const s=H.get(t),o=++Z;q=null,G("Loading",""),ie=await rt(s),!(o!==Z||!ie)&&(Ve=ft(s,ie),T.setOutline(ie),Rt(s.name),F&&ee(F),clearInterval(He),He=setInterval(()=>ve({fresh:!0}),Et),await ve())}Q.addEventListener("change",()=>ge(Q.value));function Pt(){const t=(e,s)=>{const o=parseFloat(c(e).value);return Number.isFinite(o)?o:s};F={tempC:t("manualTemp",24),kph:Math.max(0,t("manualWind",18)),from:(t("manualDir",270)%360+360)%360},ee(F),G("Manual","manual"),c("realtime").disabled=!1}for(const t of["manualTemp","manualWind","manualDir"])c(t).addEventListener("input",Pt);c("realtime").addEventListener("click",()=>{F=null,c("realtime").disabled=!0,q?(ee(q,{samples:q.samples}),G("Live","live")):ve()});function we(t){c("hud").classList.toggle("hud-active",t),c("hudToggle").classList.toggle("hud-active-btn",t),c("hudToggleText").textContent=t?"Hide UI":"Show UI",Je()}function Je(){const t=document.querySelector(".wx-panel");if(!c("hud").classList.contains("hud-active")){T.setInsets(0,0);return}window.innerWidth>720?T.setInsets((t.offsetLeft+t.offsetWidth)/window.innerWidth,0):T.setInsets(0,(t.offsetTop+t.offsetHeight)/window.innerHeight)}c("hudToggle").addEventListener("click",()=>we(!c("hud").classList.contains("hud-active")));function Rt(t){const e=c("titlecard");c("tcKicker").textContent=t,e.classList.remove("playing"),e.offsetWidth,e.classList.add("playing")}window.addEventListener("keydown",t=>{if(!t.target.closest("input, select, textarea")&&((t.key==="h"||t.key==="H")&&we(!c("hud").classList.contains("hud-active")),t.key==="ArrowRight"||t.key==="ArrowLeft")){const e=W.findIndex(o=>o.id===I),s=W[(e+(t.key==="ArrowRight"?1:W.length-1))%W.length];ge(s.id)}});window.addEventListener("pointermove",t=>{T.setPointer(t.clientX/window.innerWidth*2-1,t.clientY/window.innerHeight*2-1)});window.addEventListener("resize",Je);setInterval(()=>{c("phase").textContent=T.phase},200);we(!0);requestAnimationFrame(()=>document.body.classList.add("revealed"));ge(I);window.countryWind={art:T,hueForTemp:Xe};export{st as _};
