(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-47c0db6e"],{"200f":function(e,t,i){(function(t,r){const s=i("e372");class n extends s.Readable{constructor(e={}){if(super(e),e.iterator)throw new Error("readable stream iterator shortcut not yet implemented")}until(e,t){return new Promise((i,r)=>{this.on("error",e=>{r(e)}),t?this.once(e,(...e)=>{i(this,...e)}):this.once(e,i)})}bucket(e="utf8"){let i=this._readableState;return i.objectMode?new Promise((e,t)=>{let i=[];this.pipe(new s.Writable({write(e,t,r){i.push(e),r()},writev(e,t){i.push(...e),t()}})).on("error",e=>{t(e)}).on("finish",()=>{e(i)})}):"utf8"===e||"utf-8"===e?new Promise((t,i)=>{let r="";this.setEncoding(e),this.pipe(new s.Writable({decodeStrings:!1,write(e,t,i){r+=e,i()},writev(e,t){r+=e.join(""),t()}})).on("error",e=>{i(e)}).on("finish",()=>{t(r)})}):"buffer"===e?new Promise((e,i)=>{let r=t.from([]);this.pipe(new s.Writable({decodeStrings:!0,write(e,i,s){r=t.concat([r,e],r.length+e.length),s()}})).on("error",e=>{i(e)}).on("finish",()=>{e(r)})}):void 0}}class o extends s.Writable{until(e,t){return new Promise((i,r)=>{this.on("error",e=>{r(e)}),t?this.once(e,(...e)=>{i(this,...e)}):this.once(e,i)})}import(e){return e.on("data",e=>this.write(e)).on("end",()=>this.end()).on("error",e=>this.emit("error",e)),this}}class a extends s.Duplex{until(e,t){return new Promise((i,r)=>{this.on("error",e=>{r(e)}),t?this.once(e,(...e)=>{i(this,...e)}):this.once(e,i)})}bucket(e="utf8"){let i=this._readableState;return i.objectMode?new Promise((e,t)=>{let i=[];this.pipe(new s.Writable({write(e,t,r){i.push(e),r()},writev(e,t){i.push(...e),t()}})).on("error",e=>{t(e)}).on("finish",()=>{e(i)})}):"utf8"===e||"utf-8"===e?new Promise((t,i)=>{let r="";this.setEncoding(e),this.pipe(new s.Writable({decodeStrings:!1,write(e,t,i){r+=e,i()},writev(e,t){r+=e.join(""),t()}})).on("error",e=>{i(e)}).on("finish",()=>{t(r)})}):"buffer"===e?new Promise((e,i)=>{let r=t.from([]);this.pipe(new s.Writable({decodeStrings:!0,write(e,i,s){r=t.concat([r,e],r.length+e.length),s()}})).on("error",e=>{i(e)}).on("finish",()=>{e(r)})}):void 0}}class l extends s.Transform{until(e,t){return new Promise((i,r)=>{this.on("error",e=>{r(e)}),t?this.once(e,(...e)=>{i(this,...e)}):this.once(e,i)})}bucket(e="utf8"){let i=this._readableState;return i.objectMode?new Promise((e,t)=>{let i=[];this.pipe(new s.Writable({write(e,t,r){i.push(e),r()},writev(e,t){i.push(...e),t()}})).on("error",e=>{t(e)}).on("finish",()=>{e(i)})}):"utf8"===e||"utf-8"===e?new Promise((t,i)=>{let r="";this.setEncoding(e),this.pipe(new s.Writable({decodeStrings:!1,write(e,t,i){r+=e,i()},writev(e,t){r+=e.join(""),t()}})).on("error",e=>{i(e)}).on("finish",()=>{t(r)})}):"buffer"===e?new Promise((e,i)=>{let r=t.from([]);this.pipe(new s.Writable({decodeStrings:!0,write(e,i,s){r=t.concat([r,e],r.length+e.length),s()}})).on("error",e=>{i(e)}).on("finish",()=>{e(r)})}):void 0}import(e){return e.on("data",e=>this.write(e)).on("end",()=>this.end()).on("error",e=>this.emit("error",e)),this}demolish(e){if(this.push=e=>{if(null!==e)throw new Error("[ERR_STREAM_DESTROYED]: Cannot push after stream was destroyed")},this.emit=function(e,...t){"end"!==e&&Object.getPrototypeOf(this).emit.apply(this,[e,...t])},e)return s.Transform.prototype.destroy.call(this,e)}}const u=new Function("try {return this===global;}catch(e){return false;}")(),[c,_]=(()=>"undefined"===typeof r?[!0,!1]:r.browser?[!0,!0]:"undefined"===r.versions||"undefined"===r.versions.node?[!0,!1]:[!1,!1])();(_||u&&+/^v(\d+)/.exec(r.version)[1]<10)&&(l.prototype.destroy=a.prototype.destroy=function(e,t){this._readableState.destroyed=!0,this._writableState.destroyed=!0;let i=()=>{this._writableState.emitClose&&this._readableState.emitClose&&this.emit("close")};return this._destroy(e||null,e=>{!t&&e?(r.nextTick(()=>{this.emit("error",e),i()}),this._writableState.errorEmitted=!0):(r.nextTick(i),t&&t(e))}),this},l.prototype._destroy=a.prototype._destroy=(e,t)=>t(e));class h extends l{constructor(e={}){super({...e,writableObjectMode:!0,readableObjectMode:!0}),this._as_inputs=new Set,this.on("pipe",e=>{this._as_inputs.add(e),e.on("prefix",(...e)=>{this.emit("prefix",...e)}).on("comment",(...e)=>{this.emit("comment",...e)})}),this.on("unpipe",e=>{this._as_inputs.delete(e)})}_destroy(){for(let e of this._as_inputs)e.destroy()}}class f extends h{_transform(e,t,i){i(null,JSON.stringify(e.isolate())+"\n")}}class d extends h{_transform(e,t,i){i(null,{type:"quad",value:e})}}l.QuadsToOther=h,e.exports={...s,Readable:n,Writable:o,Duplex:a,Transform:l,QuadsToOther:h,quads_to_json(){return new f},quads_to_writable(){return new d},source(e,i=null){return i||"string"!==typeof e||(i="utf8"),new n({objectMode:!i&&"string"!==typeof e&&!t.isBuffer(e),read(){this.push(e,i),this.push(null)}})}}}).call(this,i("b639").Buffer,i("4362"))},"63f0":function(e,t,i){if("function"!==typeof queueMicrotask){let e=Promise.resolve();try{queueMicrotask=t=>e.then(t).catch(e=>setTimeout(()=>{throw e},0))}catch(a){}}const r=i("09f5"),s=i("200f"),n=32768;class o extends s.Transform{static _flush_buffer(e){e._s_push&&(e.push(e._s_push),e._s_push="")}constructor(e={}){super({writableObjectMode:!0,readableObjectMode:!1});let{prefixes:t={}}=e;this._s_push="",this._n_max_buffer=e.max_buffer||e.maxBuffer||n,this._h_prefixes=r.cache_prefixes(t||{}),this.on("pipe",e=>{e.on("prefix",(e,t)=>{this.write({type:"prefixes",value:{[e]:t}})}),e.on("comment",e=>{this.write({type:"comment",value:e})})}),e.close&&this.once("close",e.close),e.drain&&this.on("drain",e.drain),e.error&&this.on("error",e.error),e.finish&&this.once("finish",e.finish),e.data&&this.on("data",e.data),e.end&&this.once("end",e.end),e.warning&&this.on("warning",e.warning)}_serialize_hash_comment(e){return"# "+e.replace(/\n/g,"\n# ")+"\n"}_serialize_newlines(e=1){return"\n".repeat(e)}_serialize_c4r(e){let t=this._h_prefixes,i=[],s="";for(let r in e)"*"!==r&&i.push(r),s+=this._serialize_c3r(e[r]);if(i.length){let e="Destination format does not support quads; an implicit union into the default graph was performed on the quads contained in graphs: "+i.map(e=>r.c1(e,t).verbose()).join(", ");this.emit("warning",e)||console.warn(e)}return s}_serialize_c3(){throw new Error("Write event type 'c3' not supported by "+this.constructor.name)}_serialize_c4(){throw new Error("Write event type 'c4' not supported by "+this.constructor.name)}_serialize_c3r(){throw new Error("Write event type 'c3r' should have been implemented by subclass "+this.constructor.name)}_serialize_quad(){throw new Error("Write event type 'quad' should have been implemented by subclass "+this.constructor.name)}_serialize_comment(){}_update_prefixes(e,t=!1){let i={...this._h_prefixes,...e};this._h_prefixes=r.cachePrefixes(i||{},t)}_transform(e,t,i){let r;try{r=this.serialize(e)}catch(s){return i(s),s}if(r)o._flush_buffer(this),this.push(r);else{let e=this._s_push.length;e>this._n_max_buffer?o._flush_buffer(this):e&&queueMicrotask(()=>o._flush_buffer(this))}i()}_queue(e){this._s_push+=e,this._s_push.length>this._n_max_buffer?o._flush_buffer(this):queueMicrotask(()=>o._flush_buffer(this))}serialize(e){switch(e.type){case void 0:return this._serialize_quad(e);case"c3r":return this._serialize_c3r(e.value);case"c4r":return this._serialize_c4r(e.value);case"array":{let t="";for(let i of e.value){let e=this.serialize(i);e?t+=e:this._s_push&&(t+=this._s_push,this._s_push="")}return t}case"quad":return this._serialize_quad(e.value);case"c3":return this._serialize_c3(e.value);case"c4":return this._serialize_c4(e.value);case"prefixes":return this._serialize_prefixes(e.value);case"comment":return this._serialize_comment(e.value);case"newline":case"newlines":return this._serialize_newlines(e.value);default:throw new Error(`no such writable data event type for RDF stream: '${e.type}'`)}}rinse(){this._reset(),o._flush_buffer(this)}_flush(){o._flush_buffer(this),this.push(null)}}Object.assign(o.prototype,{isGraphyWritable:!0,_serialize_prefixes:o.prototype._update_prefixes}),e.exports=o},a3c0:function(e,t,i){const r=i("09f5"),s=i("63f0"),n=/^`\[[^\]]+\](.*)$/,o=new Map([[Date,e=>r.dateTime(e)],[Number,e=>r.number(e)]]);class a extends s{constructor(e={}){super(e);let{lists:t=null}=e,i=o;if(e.coercions){i=new Map(i);for(let[t,r]of e.coercions)i.set(t,r)}let r={first:">http://www.w3.org/1999/02/22-rdf-syntax-ns#first",rest:">http://www.w3.org/1999/02/22-rdf-syntax-ns#rest",nil:">http://www.w3.org/1999/02/22-rdf-syntax-ns#nil"};if(t){let{first:e=null,rest:i=null,nil:s=null}=t;e&&(r.first=e),i&&(r.rest=i),s&&(r.nil=s)}Object.assign(this,{_xc_state:0,_hm_coercions:i,_g_lists:r})}_serialize_comment(e,t){let i="";if(2!==this._xc_state&&(i+="\n",this._xc_state=2),t&&t.width){let i=t.width,r=[];while(e.length>i){let t=e.slice(0,i+1),s=/^(.*[^\s])\s+/.exec(t);if(s){let t=s[1];r.push(t),e=e.slice(t.length).replace(/^\s+/,"")}else r.push(e.slice(0,i)),e=e.slice(i)}e=r.join("\n")}return i+(super._serialize_comment(e)||"")}_transcode_list(e,t=this._g_lists){if(e.length){let i=e[0],r=i;return Array.isArray(i)&&(r=this._transcode_list(i,t)),{[t.first]:r,[t.rest]:1===e.length?t.nil:this._transcode_list(e.slice(1),t)}}return t.nil}_apply_directive(e,t){let i,r=n.exec(e);if(!r)throw new Error(`Invalid writable data event directive string: "${e}"`);try{i=JSON.parse(r[1])}catch(o){throw new Error(`Unable to parse JSON in writable data event directive: "${r[1]}"`)}let s=i.type;switch(s){case"comment":if(this._serialize_comment)return{write:this._serialize_comment(t+"",i)};break;case"newlines":if(this._serialize_newlines)return{write:this._serialize_newlines(t)};break;case"config":switch(i.value){case"lists":{let e=this._a_list_serializers;e.push(this._serialize_list_object);let i=this._g_lists,r={first:t.first||i.first,rest:t.rest||i.rest,nil:t.nil||i.nil};return this._serialize_list_object=function(e,t){let i=this._transcode_list(e,r);return this._encode_objects(i,t)},{exit:()=>{this._serialize_list_object=e.pop()}}}default:throw new Error(`No such config key '${i.value}'`)}default:throw new Error(`Invalid writable data event directive type: '${s}'`)}return{}}_serialize_c4(e){let t=this._h_prefixes,i=[],s="";for(let r in e)"*"!==r&&i.push(r),s+=this._serialize_c3(e[r]);if(i.length){let e="Destination format does not support quads; an implicit union into the default graph was performed on the quads contained in graphs: "+i.map(e=>r.c1(e,t).verbose()).join(", ");this.emit("warning",e)||console.warn(e)}return s}}e.exports=a},ec75:function(e,t,i){if("function"!==typeof queueMicrotask){let e=Promise.resolve();try{queueMicrotask=t=>e.then(t).catch(e=>setTimeout(()=>{throw e},0))}catch(c){}}const r=i("09f5"),s=i("a3c0"),n=/^([A-Za-z\xc0-\xd6\xd8-\xf6\xf8-\u{02ff}\u{0370}-\u{037d}\u{037f}-\u{1fff}\u{200c}-\u{200d}\u{2070}-\u{218f}\u{2c00}-\u{2fef}\u{3001}-\u{d7ff}\u{f900}-\u{fdcf}\u{fdf0}-\u{fffd}\u{10000}-\u{effff}]([A-Za-z\xc0-\xd6\xd8-\xf6\xf8-\u{02ff}\u{0370}-\u{037d}\u{037f}-\u{1fff}\u{200c}-\u{200d}\u{2070}-\u{218f}\u{2c00}-\u{2fef}\u{3001}-\u{d7ff}\u{f900}-\u{fdcf}\u{fdf0}-\u{fffd}\u{10000}-\u{effff}_\-0-9\xb7\u{0300}-\u{036f}\u{203f}-\u{2040}.]*[A-Za-z\xc0-\xd6\xd8-\xf6\xf8-\u{02ff}\u{0370}-\u{037d}\u{037f}-\u{1fff}\u{200c}-\u{200d}\u{2070}-\u{218f}\u{2c00}-\u{2fef}\u{3001}-\u{d7ff}\u{f900}-\u{fdcf}\u{fdf0}-\u{fffd}\u{10000}-\u{effff}_\-0-9\xb7\u{0300}-\u{036f}\u{203f}-\u{2040}])?)?$/u,o=1,a=2,l=4;class u extends s{constructor(e={}){super(e);let{prefixes:t={},lists:i=null,debug:s=!1,style:u=null}=e;if(Object.assign(this,{_b_debug:s,_s_indent:"\t",_b_simplify_default_graph:!1,_xc_directives:0,_s_token_prefix:"@prefix"}),u){u.indent&&(this._s_indent=u.indent.replace(/[^\s]/g,""));let e=u.directives||u.directives;if(e)switch(e){case"sparql":this._xc_directives=o,this._s_token_prefix="prefix";break;case"Sparql":this._xc_directives=o|a,this._s_token_prefix="Prefix";break;case"SPARQL":this._xc_directives=o|l,this._s_token_prefix="PREFIX";break;case"turtle":break;case"Turtle":this._xc_directives=a,this._s_token_prefix="@Prefix";break;case"TURTLE":this._xc_directives=l,this._s_token_prefix="@PREFIX";break;default:throw new Error("Value not understood for 'directives' option: "+e)}}i&&(this._serialize_list_object=function(e,t){let i=this._transcode_list(e);return this._encode_objects(i,t)});let c=this._s_token_prefix,_=this._xc_directives&o?"\n":" .\n",h="";try{for(let e in t){if(!n.test(e))throw new Error(`Invlalid prefix id for text/turtle RDF serialization format: '${e}'`);h+=`${c} ${e}: ${r.namedNode(t[e]).verbose()}${_}`}}catch(f){queueMicrotask(()=>{this.emit("error",f)})}h&&this.push(h)}_serialize_prefixes(e){let t=2===this._xc_state?"\n\n":"";this._xc_state=0,this._h_prefixes={...this._h_prefixes};let i=this._s_token_prefix,s=this._xc_directives&o?"\n":" .\n";for(let o in e){if(!n.test(o))throw new Error(`Invlalid prefix id for text/turtle RDF serialization format: '${o}'`);t+=`${i} ${o}: ${r.namedNode(e[o]).verbose()}${s}`,this._h_prefixes[o]=e[o]}return r.cache_prefixes(this._h_prefixes),t}_serialize_c3(e){let{_h_prefixes:t,_s_indent:i}=this,s=2!==this._xc_state?"\n":"";this._xc_state=2;let n="",o=null;for(let a in e){if("`"===a[0]){let t=this._apply_directive(a,e[a]);t.write&&(s+=n+t.write,n=""),t.exit&&(o=t.exit);continue}let l=s.length;s+=n+r.c1_node(a,t).terse(t)+" ";let u="",c="",_=e[a],h=s.length,f=!0,d=null;for(let e in _){if("`"===e[0]){let t=this._apply_directive(e,_[e]);t.write&&(s+=(u?c:"\n")+i+t.write,c="",u=i),t.exit&&(d=t.exit);continue}let n=_[e],o=this._encode_objects(n);if(!o)continue;if(f=!1,"_"===e[0]&&":"===e[1])throw new Error(`Cannot use blank node in predicate position of c3 hash; subject:'${a}', predicate:'${e}'`);let l=r.c1_named_node(e,t),h=l.isRdfTypeAlias?"a":l.terse(t);s+=c+u+h+" "+o,this._xc_state=2,c=" ;\n",u=i,d&&d()}f?s=s.slice(0,l)+s.slice(h):(n="\n",s+=(c?" ":u)+".\n",o&&o())}return s+="\n",s}_encode_objects(e,t=1){let{_h_prefixes:i,_s_indent:s,_hm_coercions:n}=this;switch(typeof e){case"string":return r.c1(e,i).terse(i);case"number":return r.number(e).terse(i);case"boolean":return r.boolean(e).terse(i);case"object":if(null===e)throw new Error("Refusing to serialize null value given as an object of quad");if(Array.isArray(e)||e instanceof Set){let i="",r="";for(let s of e)Array.isArray(s)?i+=r+this._serialize_list_object(s,t):i+=r+this._encode_objects(s,t),r=", ";return i}if(Object===e.constructor){let n="[",o=!0,a=null;for(let l in e)if(o=!1,n+="\n"+s.repeat(1+t),"`"!==l[0])n+=r.c1(l,i).terse(i)+" "+this._encode_objects(e[l],t+1)+" ;";else{let t=this._apply_directive(l,e[l]);t.write&&(n+=t.write),t.exit&&(a=t.exit)}return n+=(o?"":"\n"+s.repeat(t))+"]",a&&a(),n}if(n.has(e.constructor)){let r=n.get(e.constructor).apply(this,[e,t]);return r.terse(i)}if(e.isGraphyTerm)return e.terse(i);if(e.termType)return r.from.term(e).terse(i);default:throw new Error(`Bad type for RDF object: [${typeof e}] ${e?e.constructor:e}`)}}_serialize_collection_object(e,t){let i=this._s_indent,r="(";for(let s of e){let e="";e=Array.isArray(s)?this._serialize_collection_object(s,t+1):this._encode_objects(s,t+1),r+="\n"+i.repeat(1+t)+e}return e.length&&(r+="\n"+i.repeat(t)),r+=")",r}_serialize_quad(e){let t=this._h_prefixes,i=r.from.quad(e);this._s_push+=(2!==this._xc_state?"\n":"")+i.subject.terse(t)+" "+i.predicate.terse(t)+" "+i.object.terse(t)+" .\n\n",this._xc_state=2}}Object.assign(u.prototype,{anonymous_blank_nodes:!0,_serialize_c3r:u.prototype._serialize_c3,_serialize_c4r:u.prototype._serialize_c4,_serialize_comment:s.prototype._serialize_hash_comment,_serialize_list_object:u.prototype._serialize_collection_object}),e.exports=function(e){return new u(e)}}}]);
//# sourceMappingURL=chunk-47c0db6e.867e7d69.js.map