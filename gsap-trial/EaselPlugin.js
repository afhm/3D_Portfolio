/*!
 * EaselPlugin 3.12.4
 * https://gsap.com
 * 
 * @license Copyright 2023, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */

let e,t,r,l,i,s,o="redMultiplier,greenMultiplier,blueMultiplier,alphaMultiplier,redOffset,greenOffset,blueOffset,alphaOffset".split(","),n=()=>"undefined"!=typeof window,a=()=>e||n()&&(e=window.gsap)&&e.registerPlugin&&e,u=()=>l||r&&r.createjs||r||{},f=e=>console.warn(e),h=e=>{let t=e.getBounds&&e.getBounds();t||(t=e.nominalBounds||{x:0,y:0,width:100,height:100},e.setBounds&&e.setBounds(t.x,t.y,t.width,t.height)),e.cache&&e.cache(t.x,t.y,t.width,t.height),f("EaselPlugin: for filters to display in EaselJS, you must call the object's cache() method first. GSAP attempted to use the target's getBounds() for the cache but that may not be completely accurate. "+e)},c=(t,r,l)=>{i||(i=u().ColorFilter,i||f("EaselPlugin error: The EaselJS ColorFilter JavaScript file wasn't loaded."));let s,n,a,c,p,d,g=t.filters||[],b=g.length;for(;b--;)if(g[b]instanceof i){n=g[b];break}if(n||(n=new i,g.push(n),t.filters=g),a=n.clone(),null!=r.tint)s=e.utils.splitColor(r.tint),c=null!=r.tintAmount?+r.tintAmount:1,a.redOffset=+s[0]*c,a.greenOffset=+s[1]*c,a.blueOffset=+s[2]*c,a.redMultiplier=a.greenMultiplier=a.blueMultiplier=1-c;else for(p in r)"exposure"!==p&&"brightness"!==p&&(a[p]=+r[p]);for(null!=r.exposure?(a.redOffset=a.greenOffset=a.blueOffset=255*(+r.exposure-1),a.redMultiplier=a.greenMultiplier=a.blueMultiplier=1):null!=r.brightness&&(c=+r.brightness-1,a.redOffset=a.greenOffset=a.blueOffset=c>0?255*c:0,a.redMultiplier=a.greenMultiplier=a.blueMultiplier=1-Math.abs(c)),b=8;b--;)p=o[b],n[p]!==a[p]&&(d=l.add(n,p,n[p],a[p],0,0,0,0,0,1),d&&(d.op="easel_colorFilter"));l._props.push("easel_colorFilter"),t.cacheID||h(t)},p=[1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0],d=.212671,g=.71516,b=.072169,M=(e,t)=>{if(!(e instanceof Array&&t instanceof Array))return t;let r,l,i=[],s=0,o=0;for(r=0;r<4;r++){for(l=0;l<5;l++)o=4===l?e[s+4]:0,i[s+l]=e[s]*t[l]+e[s+1]*t[l+5]+e[s+2]*t[l+10]+e[s+3]*t[l+15]+o;s+=5}return i},m=(t,r,l)=>{s||(s=u().ColorMatrixFilter,s||f("EaselPlugin: The EaselJS ColorMatrixFilter JavaScript file wasn't loaded."));let i,o,n,a,c=t.filters||[],m=c.length;for(;--m>-1;)if(c[m]instanceof s){n=c[m];break}var x,w;for(n||(n=new s(p.slice()),c.push(n),t.filters=c),o=n.matrix,i=p.slice(),null!=r.colorize&&(i=((t,r,l)=>{isNaN(l)&&(l=1);let i=e.utils.splitColor(r),s=i[0]/255,o=i[1]/255,n=i[2]/255,a=1-l;return M([a+l*s*d,l*s*g,l*s*b,0,0,l*o*d,a+l*o*g,l*o*b,0,0,l*n*d,l*n*g,a+l*n*b,0,0,0,0,0,1,0],t)})(i,r.colorize,Number(r.colorizeAmount))),null!=r.contrast&&(x=i,w=Number(r.contrast),i=isNaN(w)?x:M([w+=.01,0,0,0,128*(1-w),0,w,0,0,128*(1-w),0,0,w,0,128*(1-w),0,0,0,1,0],x)),null!=r.hue&&(i=((e,t)=>{if(isNaN(t))return e;t*=Math.PI/180;let r=Math.cos(t),l=Math.sin(t);return M([d+r*(1-d)+l*-d,g+r*-g+l*-g,b+r*-b+l*(1-b),0,0,d+r*-d+.143*l,g+.28484*r+.14*l,b+r*-b+-.283*l,0,0,d+r*-d+-.787329*l,g+r*-g+l*g,b+r*(1-b)+l*b,0,0,0,0,0,1,0,0,0,0,0,1],e)})(i,Number(r.hue))),null!=r.saturation&&(i=((e,t)=>{if(isNaN(t))return e;let r=1-t,l=r*d,i=r*g,s=r*b;return M([l+t,i,s,0,0,l,i+t,s,0,0,l,i,s+t,0,0,0,0,0,1,0],e)})(i,Number(r.saturation))),m=i.length;--m>-1;)i[m]!==o[m]&&(a=l.add(o,m,o[m],i[m],0,0,0,0,0,1),a&&(a.op="easel_colorMatrixFilter"));l._props.push("easel_colorMatrixFilter"),t.cacheID||h(),l._matrix=o},x=l=>{e=l||a(),n()&&(r=window),e&&(t=1)};const w={version:"3.12.4",name:"easel",init(r,l,i,s,o){let n,a,u,h,p,d,g;for(n in t||(x(),e||f("Please gsap.registerPlugin(EaselPlugin)")),this.target=r,l)if(p=l[n],"colorFilter"===n||"tint"===n||"tintAmount"===n||"exposure"===n||"brightness"===n)u||(c(r,l.colorFilter||l,this),u=!0);else if("saturation"===n||"contrast"===n||"hue"===n||"colorize"===n||"colorizeAmount"===n)h||(m(r,l.colorMatrixFilter||l,this),h=!0);else if("frame"===n){if("string"==typeof p&&"="!==p.charAt(1)&&(d=r.labels))for(g=0;g<d.length;g++)d[g].label===p&&(p=d[g].position);a=this.add(r,"gotoAndStop",r.currentFrame,p,s,o,Math.round,0,0,1),a&&(a.op=n)}else null!=r[n]&&this.add(r,n,"get",p)},render(e,t){let r=t._pt;for(;r;)r.r(e,r.d),r=r._next;t.target.cacheID&&t.target.updateCache()},register:x,registerCreateJS:e=>{l=e}};a()&&e.registerPlugin(w);export default w;export{w as EaselPlugin};
