!function(a,b){function c(b,c){var e,f,g,h=b.nodeName.toLowerCase();return"area"===h?(e=b.parentNode,f=e.name,!(!b.href||!f||"map"!==e.nodeName.toLowerCase())&&(g=a("img[usemap=#"+f+"]")[0],!!g&&d(g))):(/input|select|textarea|button|object/.test(h)?!b.disabled:"a"===h?b.href||c:c)&&d(b)}function d(b){return a.expr.filters.visible(b)&&!a(b).parents().addBack().filter(function(){return"hidden"===a.css(this,"visibility")}).length}var e=0,f=/^ui-id-\d+$/;a.ui=a.ui||{},a.extend(a.ui,{version:"1.10.4",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),a.fn.extend({focus:function(b){return function(c,d){return"number"==typeof c?this.each(function(){var b=this;setTimeout(function(){a(b).focus(),d&&d.call(b)},c)}):b.apply(this,arguments)}}(a.fn.focus),scrollParent:function(){var b;return b=a.ui.ie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?this.parents().filter(function(){return/(relative|absolute|fixed)/.test(a.css(this,"position"))&&/(auto|scroll)/.test(a.css(this,"overflow")+a.css(this,"overflow-y")+a.css(this,"overflow-x"))}).eq(0):this.parents().filter(function(){return/(auto|scroll)/.test(a.css(this,"overflow")+a.css(this,"overflow-y")+a.css(this,"overflow-x"))}).eq(0),/fixed/.test(this.css("position"))||!b.length?a(document):b},zIndex:function(c){if(c!==b)return this.css("zIndex",c);if(this.length)for(var d,e,f=a(this[0]);f.length&&f[0]!==document;){if(d=f.css("position"),("absolute"===d||"relative"===d||"fixed"===d)&&(e=parseInt(f.css("zIndex"),10),!isNaN(e)&&0!==e))return e;f=f.parent()}return 0},uniqueId:function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++e)})},removeUniqueId:function(){return this.each(function(){f.test(this.id)&&a(this).removeAttr("id")})}}),a.extend(a.expr[":"],{data:a.expr.createPseudo?a.expr.createPseudo(function(b){return function(c){return!!a.data(c,b)}}):function(b,c,d){return!!a.data(b,d[3])},focusable:function(b){return c(b,!isNaN(a.attr(b,"tabindex")))},tabbable:function(b){var d=a.attr(b,"tabindex"),e=isNaN(d);return(e||d>=0)&&c(b,!e)}}),a("<a>").outerWidth(1).jquery||a.each(["Width","Height"],function(c,d){function e(b,c,d,e){return a.each(f,function(){c-=parseFloat(a.css(b,"padding"+this))||0,d&&(c-=parseFloat(a.css(b,"border"+this+"Width"))||0),e&&(c-=parseFloat(a.css(b,"margin"+this))||0)}),c}var f="Width"===d?["Left","Right"]:["Top","Bottom"],g=d.toLowerCase(),h={innerWidth:a.fn.innerWidth,innerHeight:a.fn.innerHeight,outerWidth:a.fn.outerWidth,outerHeight:a.fn.outerHeight};a.fn["inner"+d]=function(c){return c===b?h["inner"+d].call(this):this.each(function(){a(this).css(g,e(this,c)+"px")})},a.fn["outer"+d]=function(b,c){return"number"!=typeof b?h["outer"+d].call(this,b):this.each(function(){a(this).css(g,e(this,b,!0,c)+"px")})}}),a.fn.addBack||(a.fn.addBack=function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}),a("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(a.fn.removeData=function(b){return function(c){return arguments.length?b.call(this,a.camelCase(c)):b.call(this)}}(a.fn.removeData)),a.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),a.support.selectstart="onselectstart"in document.createElement("div"),a.fn.extend({disableSelection:function(){return this.bind((a.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(a){a.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}}),a.extend(a.ui,{plugin:{add:function(b,c,d){var e,f=a.ui[b].prototype;for(e in d)f.plugins[e]=f.plugins[e]||[],f.plugins[e].push([c,d[e]])},call:function(a,b,c){var d,e=a.plugins[b];if(e&&a.element[0].parentNode&&11!==a.element[0].parentNode.nodeType)for(d=0;e.length>d;d++)a.options[e[d][0]]&&e[d][1].apply(a.element,c)}},hasScroll:function(b,c){if("hidden"===a(b).css("overflow"))return!1;var d=c&&"left"===c?"scrollLeft":"scrollTop",e=!1;return b[d]>0||(b[d]=1,e=b[d]>0,b[d]=0,e)}})}(jQuery),function(a,b){var c=0,d=Array.prototype.slice,e=a.cleanData;a.cleanData=function(b){for(var c,d=0;null!=(c=b[d]);d++)try{a(c).triggerHandler("remove")}catch(a){}e(b)},a.widget=function(c,d,e){var f,g,h,i,j={},k=c.split(".")[0];c=c.split(".")[1],f=k+"-"+c,e||(e=d,d=a.Widget),a.expr[":"][f.toLowerCase()]=function(b){return!!a.data(b,f)},a[k]=a[k]||{},g=a[k][c],h=a[k][c]=function(a,c){return this._createWidget?(arguments.length&&this._createWidget(a,c),b):new h(a,c)},a.extend(h,g,{version:e.version,_proto:a.extend({},e),_childConstructors:[]}),i=new d,i.options=a.widget.extend({},i.options),a.each(e,function(c,e){return a.isFunction(e)?(j[c]=function(){var a=function(){return d.prototype[c].apply(this,arguments)},b=function(a){return d.prototype[c].apply(this,a)};return function(){var c,d=this._super,f=this._superApply;return this._super=a,this._superApply=b,c=e.apply(this,arguments),this._super=d,this._superApply=f,c}}(),b):(j[c]=e,b)}),h.prototype=a.widget.extend(i,{widgetEventPrefix:g?i.widgetEventPrefix||c:c},j,{constructor:h,namespace:k,widgetName:c,widgetFullName:f}),g?(a.each(g._childConstructors,function(b,c){var d=c.prototype;a.widget(d.namespace+"."+d.widgetName,h,c._proto)}),delete g._childConstructors):d._childConstructors.push(h),a.widget.bridge(c,h)},a.widget.extend=function(c){for(var e,f,g=d.call(arguments,1),h=0,i=g.length;i>h;h++)for(e in g[h])f=g[h][e],g[h].hasOwnProperty(e)&&f!==b&&(c[e]=a.isPlainObject(f)?a.isPlainObject(c[e])?a.widget.extend({},c[e],f):a.widget.extend({},f):f);return c},a.widget.bridge=function(c,e){var f=e.prototype.widgetFullName||c;a.fn[c]=function(g){var h="string"==typeof g,i=d.call(arguments,1),j=this;return g=!h&&i.length?a.widget.extend.apply(null,[g].concat(i)):g,h?this.each(function(){var d,e=a.data(this,f);return e?a.isFunction(e[g])&&"_"!==g.charAt(0)?(d=e[g].apply(e,i),d!==e&&d!==b?(j=d&&d.jquery?j.pushStack(d.get()):d,!1):b):a.error("no such method '"+g+"' for "+c+" widget instance"):a.error("cannot call methods on "+c+" prior to initialization; attempted to call method '"+g+"'")}):this.each(function(){var b=a.data(this,f);b?b.option(g||{})._init():a.data(this,f,new e(g,this))}),j}},a.Widget=function(){},a.Widget._childConstructors=[],a.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(b,d){d=a(d||this.defaultElement||this)[0],this.element=a(d),this.uuid=c++,this.eventNamespace="."+this.widgetName+this.uuid,this.options=a.widget.extend({},this.options,this._getCreateOptions(),b),this.bindings=a(),this.hoverable=a(),this.focusable=a(),d!==this&&(a.data(d,this.widgetFullName,this),this._on(!0,this.element,{remove:function(a){a.target===d&&this.destroy()}}),this.document=a(d.style?d.ownerDocument:d.document||d),this.window=a(this.document[0].defaultView||this.document[0].parentWindow)),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:a.noop,_getCreateEventData:a.noop,_create:a.noop,_init:a.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(a.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:a.noop,widget:function(){return this.element},option:function(c,d){var e,f,g,h=c;if(0===arguments.length)return a.widget.extend({},this.options);if("string"==typeof c)if(h={},e=c.split("."),c=e.shift(),e.length){for(f=h[c]=a.widget.extend({},this.options[c]),g=0;e.length-1>g;g++)f[e[g]]=f[e[g]]||{},f=f[e[g]];if(c=e.pop(),1===arguments.length)return f[c]===b?null:f[c];f[c]=d}else{if(1===arguments.length)return this.options[c]===b?null:this.options[c];h[c]=d}return this._setOptions(h),this},_setOptions:function(a){var b;for(b in a)this._setOption(b,a[b]);return this},_setOption:function(a,b){return this.options[a]=b,"disabled"===a&&(this.widget().toggleClass(this.widgetFullName+"-disabled ui-state-disabled",!!b).attr("aria-disabled",b),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")),this},enable:function(){return this._setOption("disabled",!1)},disable:function(){return this._setOption("disabled",!0)},_on:function(c,d,e){var f,g=this;"boolean"!=typeof c&&(e=d,d=c,c=!1),e?(d=f=a(d),this.bindings=this.bindings.add(d)):(e=d,d=this.element,f=this.widget()),a.each(e,function(e,h){function i(){return c||g.options.disabled!==!0&&!a(this).hasClass("ui-state-disabled")?("string"==typeof h?g[h]:h).apply(g,arguments):b}"string"!=typeof h&&(i.guid=h.guid=h.guid||i.guid||a.guid++);var j=e.match(/^(\w+)\s*(.*)$/),k=j[1]+g.eventNamespace,l=j[2];l?f.delegate(l,k,i):d.bind(k,i)})},_off:function(a,b){b=(b||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,a.unbind(b).undelegate(b)},_delay:function(a,b){function c(){return("string"==typeof a?d[a]:a).apply(d,arguments)}var d=this;return setTimeout(c,b||0)},_hoverable:function(b){this.hoverable=this.hoverable.add(b),this._on(b,{mouseenter:function(b){a(b.currentTarget).addClass("ui-state-hover")},mouseleave:function(b){a(b.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(b){this.focusable=this.focusable.add(b),this._on(b,{focusin:function(b){a(b.currentTarget).addClass("ui-state-focus")},focusout:function(b){a(b.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(b,c,d){var e,f,g=this.options[b];if(d=d||{},c=a.Event(c),c.type=(b===this.widgetEventPrefix?b:this.widgetEventPrefix+b).toLowerCase(),c.target=this.element[0],f=c.originalEvent)for(e in f)e in c||(c[e]=f[e]);return this.element.trigger(c,d),!(a.isFunction(g)&&g.apply(this.element[0],[c].concat(d))===!1||c.isDefaultPrevented())}},a.each({show:"fadeIn",hide:"fadeOut"},function(b,c){a.Widget.prototype["_"+b]=function(d,e,f){"string"==typeof e&&(e={effect:e});var g,h=e?e===!0||"number"==typeof e?c:e.effect||c:b;e=e||{},"number"==typeof e&&(e={duration:e}),g=!a.isEmptyObject(e),e.complete=f,e.delay&&d.delay(e.delay),g&&a.effects&&a.effects.effect[h]?d[b](e):h!==b&&d[h]?d[h](e.duration,e.easing,f):d.queue(function(c){a(this)[b](),f&&f.call(d[0]),c()})}})}(jQuery),function(a){var b=!1;a(document).mouseup(function(){b=!1}),a.widget("ui.mouse",{version:"1.10.4",options:{cancel:"input,textarea,button,select,option",distance:1,delay:0},_mouseInit:function(){var b=this;this.element.bind("mousedown."+this.widgetName,function(a){return b._mouseDown(a)}).bind("click."+this.widgetName,function(c){return!0===a.data(c.target,b.widgetName+".preventClickEvent")?(a.removeData(c.target,b.widgetName+".preventClickEvent"),c.stopImmediatePropagation(),!1):void 0}),this.started=!1},_mouseDestroy:function(){this.element.unbind("."+this.widgetName),this._mouseMoveDelegate&&a(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(c){if(!b){this._mouseStarted&&this._mouseUp(c),this._mouseDownEvent=c;var d=this,e=1===c.which,f=!("string"!=typeof this.options.cancel||!c.target.nodeName)&&a(c.target).closest(this.options.cancel).length;return!(e&&!f&&this._mouseCapture(c))||(this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){d.mouseDelayMet=!0},this.options.delay)),this._mouseDistanceMet(c)&&this._mouseDelayMet(c)&&(this._mouseStarted=this._mouseStart(c)!==!1,!this._mouseStarted)?(c.preventDefault(),!0):(!0===a.data(c.target,this.widgetName+".preventClickEvent")&&a.removeData(c.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(a){return d._mouseMove(a)},this._mouseUpDelegate=function(a){return d._mouseUp(a)},a(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate),c.preventDefault(),b=!0,!0))}},_mouseMove:function(b){return a.ui.ie&&(!document.documentMode||9>document.documentMode)&&!b.button?this._mouseUp(b):this._mouseStarted?(this._mouseDrag(b),b.preventDefault()):(this._mouseDistanceMet(b)&&this._mouseDelayMet(b)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,b)!==!1,this._mouseStarted?this._mouseDrag(b):this._mouseUp(b)),!this._mouseStarted)},_mouseUp:function(b){return a(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,b.target===this._mouseDownEvent.target&&a.data(b.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(b)),!1},_mouseDistanceMet:function(a){return Math.max(Math.abs(this._mouseDownEvent.pageX-a.pageX),Math.abs(this._mouseDownEvent.pageY-a.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return!0}})}(jQuery),function(a){var b=5;a.widget("ui.slider",a.ui.mouse,{version:"1.10.4",widgetEventPrefix:"slide",options:{animate:!1,distance:0,max:100,min:0,orientation:"horizontal",range:!1,step:1,value:0,values:null,change:null,slide:null,start:null,stop:null},_create:function(){this._keySliding=!1,this._mouseSliding=!1,this._animateOff=!0,this._handleIndex=null,this._detectOrientation(),this._mouseInit(),this.element.addClass("ui-slider ui-slider-"+this.orientation+" ui-widget ui-widget-content ui-corner-all"),this._refresh(),this._setOption("disabled",this.options.disabled),this._animateOff=!1},_refresh:function(){this._createRange(),this._createHandles(),this._setupEvents(),this._refreshValue()},_createHandles:function(){var b,c,d=this.options,e=this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),f="<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>",g=[];for(c=d.values&&d.values.length||1,e.length>c&&(e.slice(c).remove(),e=e.slice(0,c)),b=e.length;c>b;b++)g.push(f);this.handles=e.add(a(g.join("")).appendTo(this.element)),this.handle=this.handles.eq(0),this.handles.each(function(b){a(this).data("ui-slider-handle-index",b)})},_createRange:function(){var b=this.options,c="";b.range?(b.range===!0&&(b.values?b.values.length&&2!==b.values.length?b.values=[b.values[0],b.values[0]]:a.isArray(b.values)&&(b.values=b.values.slice(0)):b.values=[this._valueMin(),this._valueMin()]),this.range&&this.range.length?this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({left:"",bottom:""}):(this.range=a("<div></div>").appendTo(this.element),c="ui-slider-range ui-widget-header ui-corner-all"),this.range.addClass(c+("min"===b.range||"max"===b.range?" ui-slider-range-"+b.range:""))):(this.range&&this.range.remove(),this.range=null)},_setupEvents:function(){var a=this.handles.add(this.range).filter("a");this._off(a),this._on(a,this._handleEvents),this._hoverable(a),this._focusable(a)},_destroy:function(){this.handles.remove(),this.range&&this.range.remove(),this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"),this._mouseDestroy()},_mouseCapture:function(b){var c,d,e,f,g,h,i,j,k=this,l=this.options;return!l.disabled&&(this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()},this.elementOffset=this.element.offset(),c={x:b.pageX,y:b.pageY},d=this._normValueFromMouse(c),e=this._valueMax()-this._valueMin()+1,this.handles.each(function(b){var c=Math.abs(d-k.values(b));(e>c||e===c&&(b===k._lastChangedValue||k.values(b)===l.min))&&(e=c,f=a(this),g=b)}),h=this._start(b,g),h!==!1&&(this._mouseSliding=!0,this._handleIndex=g,f.addClass("ui-state-active").focus(),i=f.offset(),j=!a(b.target).parents().addBack().is(".ui-slider-handle"),this._clickOffset=j?{left:0,top:0}:{left:b.pageX-i.left-f.width()/2,top:b.pageY-i.top-f.height()/2-(parseInt(f.css("borderTopWidth"),10)||0)-(parseInt(f.css("borderBottomWidth"),10)||0)+(parseInt(f.css("marginTop"),10)||0)},this.handles.hasClass("ui-state-hover")||this._slide(b,g,d),this._animateOff=!0,!0))},_mouseStart:function(){return!0},_mouseDrag:function(a){var b={x:a.pageX,y:a.pageY},c=this._normValueFromMouse(b);return this._slide(a,this._handleIndex,c),!1},_mouseStop:function(a){return this.handles.removeClass("ui-state-active"),this._mouseSliding=!1,this._stop(a,this._handleIndex),this._change(a,this._handleIndex),this._handleIndex=null,this._clickOffset=null,this._animateOff=!1,!1},_detectOrientation:function(){this.orientation="vertical"===this.options.orientation?"vertical":"horizontal"},_normValueFromMouse:function(a){var b,c,d,e,f;return"horizontal"===this.orientation?(b=this.elementSize.width,c=a.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)):(b=this.elementSize.height,c=a.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)),d=c/b,d>1&&(d=1),0>d&&(d=0),"vertical"===this.orientation&&(d=1-d),e=this._valueMax()-this._valueMin(),f=this._valueMin()+d*e,this._trimAlignValue(f)},_start:function(a,b){var c={handle:this.handles[b],value:this.value()};return this.options.values&&this.options.values.length&&(c.value=this.values(b),c.values=this.values()),this._trigger("start",a,c)},_slide:function(a,b,c){var d,e,f;this.options.values&&this.options.values.length?(d=this.values(b?0:1),2===this.options.values.length&&this.options.range===!0&&(0===b&&c>d||1===b&&d>c)&&(c=d),c!==this.values(b)&&(e=this.values(),e[b]=c,f=this._trigger("slide",a,{handle:this.handles[b],value:c,values:e}),d=this.values(b?0:1),f!==!1&&this.values(b,c))):c!==this.value()&&(f=this._trigger("slide",a,{handle:this.handles[b],value:c}),f!==!1&&this.value(c))},_stop:function(a,b){var c={handle:this.handles[b],value:this.value()};this.options.values&&this.options.values.length&&(c.value=this.values(b),c.values=this.values()),this._trigger("stop",a,c)},_change:function(a,b){if(!this._keySliding&&!this._mouseSliding){var c={handle:this.handles[b],value:this.value()};this.options.values&&this.options.values.length&&(c.value=this.values(b),c.values=this.values()),this._lastChangedValue=b,this._trigger("change",a,c)}},value:function(a){return arguments.length?(this.options.value=this._trimAlignValue(a),this._refreshValue(),void this._change(null,0)):this._value()},values:function(b,c){var d,e,f;if(arguments.length>1)return this.options.values[b]=this._trimAlignValue(c),this._refreshValue(),void this._change(null,b);if(!arguments.length)return this._values();if(!a.isArray(arguments[0]))return this.options.values&&this.options.values.length?this._values(b):this.value();for(d=this.options.values,e=arguments[0],f=0;d.length>f;f+=1)d[f]=this._trimAlignValue(e[f]),this._change(null,f);this._refreshValue()},_setOption:function(b,c){var d,e=0;switch("range"===b&&this.options.range===!0&&("min"===c?(this.options.value=this._values(0),this.options.values=null):"max"===c&&(this.options.value=this._values(this.options.values.length-1),this.options.values=null)),a.isArray(this.options.values)&&(e=this.options.values.length),a.Widget.prototype._setOption.apply(this,arguments),b){case"orientation":this._detectOrientation(),this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-"+this.orientation),this._refreshValue();break;case"value":this._animateOff=!0,this._refreshValue(),this._change(null,0),this._animateOff=!1;break;case"values":for(this._animateOff=!0,this._refreshValue(),d=0;e>d;d+=1)this._change(null,d);this._animateOff=!1;break;case"min":case"max":this._animateOff=!0,this._refreshValue(),this._animateOff=!1;break;case"range":this._animateOff=!0,this._refresh(),this._animateOff=!1}},_value:function(){var a=this.options.value;return a=this._trimAlignValue(a)},_values:function(a){var b,c,d;if(arguments.length)return b=this.options.values[a],b=this._trimAlignValue(b);if(this.options.values&&this.options.values.length){for(c=this.options.values.slice(),d=0;c.length>d;d+=1)c[d]=this._trimAlignValue(c[d]);return c}return[]},_trimAlignValue:function(a){if(this._valueMin()>=a)return this._valueMin();if(a>=this._valueMax())return this._valueMax();var b=this.options.step>0?this.options.step:1,c=(a-this._valueMin())%b,d=a-c;return 2*Math.abs(c)>=b&&(d+=c>0?b:-b),parseFloat(d.toFixed(5))},_valueMin:function(){return this.options.min},_valueMax:function(){return this.options.max},_refreshValue:function(){var b,c,d,e,f,g=this.options.range,h=this.options,i=this,j=!this._animateOff&&h.animate,k={};this.options.values&&this.options.values.length?this.handles.each(function(d){c=100*((i.values(d)-i._valueMin())/(i._valueMax()-i._valueMin())),k["horizontal"===i.orientation?"left":"bottom"]=c+"%",a(this).stop(1,1)[j?"animate":"css"](k,h.animate),i.options.range===!0&&("horizontal"===i.orientation?(0===d&&i.range.stop(1,1)[j?"animate":"css"]({left:c+"%"},h.animate),1===d&&i.range[j?"animate":"css"]({width:c-b+"%"},{queue:!1,duration:h.animate})):(0===d&&i.range.stop(1,1)[j?"animate":"css"]({bottom:c+"%"},h.animate),1===d&&i.range[j?"animate":"css"]({height:c-b+"%"},{queue:!1,duration:h.animate}))),b=c}):(d=this.value(),e=this._valueMin(),f=this._valueMax(),c=f!==e?100*((d-e)/(f-e)):0,k["horizontal"===this.orientation?"left":"bottom"]=c+"%",this.handle.stop(1,1)[j?"animate":"css"](k,h.animate),"min"===g&&"horizontal"===this.orientation&&this.range.stop(1,1)[j?"animate":"css"]({width:c+"%"},h.animate),"max"===g&&"horizontal"===this.orientation&&this.range[j?"animate":"css"]({width:100-c+"%"},{queue:!1,duration:h.animate}),"min"===g&&"vertical"===this.orientation&&this.range.stop(1,1)[j?"animate":"css"]({height:c+"%"},h.animate),"max"===g&&"vertical"===this.orientation&&this.range[j?"animate":"css"]({height:100-c+"%"},{queue:!1,duration:h.animate}))},_handleEvents:{keydown:function(c){var d,e,f,g,h=a(c.target).data("ui-slider-handle-index");switch(c.keyCode){case a.ui.keyCode.HOME:case a.ui.keyCode.END:case a.ui.keyCode.PAGE_UP:case a.ui.keyCode.PAGE_DOWN:case a.ui.keyCode.UP:case a.ui.keyCode.RIGHT:case a.ui.keyCode.DOWN:case a.ui.keyCode.LEFT:if(c.preventDefault(),!this._keySliding&&(this._keySliding=!0,a(c.target).addClass("ui-state-active"),d=this._start(c,h),d===!1))return}switch(g=this.options.step,e=f=this.options.values&&this.options.values.length?this.values(h):this.value(),c.keyCode){case a.ui.keyCode.HOME:f=this._valueMin();break;case a.ui.keyCode.END:f=this._valueMax();break;case a.ui.keyCode.PAGE_UP:f=this._trimAlignValue(e+(this._valueMax()-this._valueMin())/b);break;case a.ui.keyCode.PAGE_DOWN:f=this._trimAlignValue(e-(this._valueMax()-this._valueMin())/b);break;case a.ui.keyCode.UP:case a.ui.keyCode.RIGHT:if(e===this._valueMax())return;f=this._trimAlignValue(e+g);break;case a.ui.keyCode.DOWN:case a.ui.keyCode.LEFT:if(e===this._valueMin())return;f=this._trimAlignValue(e-g)}this._slide(c,h,f)},click:function(a){a.preventDefault()},keyup:function(b){var c=a(b.target).data("ui-slider-handle-index");this._keySliding&&(this._keySliding=!1,this._stop(b,c),this._change(b,c),a(b.target).removeClass("ui-state-active"))}}})}(jQuery);var transparentDemo=!0,fixedTop=!1;$(window).scroll(function(a){oVal=$(window).scrollTop()/170,$(".blur").css("opacity",oVal)}),searchVisible=0,transparent=!0,$(document).ready(function(){$(".switch").bootstrapSwitch(),$("[data-toggle='switch']").wrap('<div class="switch" />').parent().bootstrapSwitch(),$('[data-toggle="search"]').click(function(){0==searchVisible?(searchVisible=1,$(this).parent().addClass("active"),$(".navbar-search-form").fadeIn(function(){$(".navbar-search-form input").focus()})):(searchVisible=0,$(this).parent().removeClass("active"),$(this).blur(),$(".navbar-search-form").fadeOut(function(){$(".navbar-search-form input").blur()}))}),$('[data-toggle="gsdk-collapse"]').hover(function(){console.log("on hover");var a=$(this).attr("data-target");$(this).hasClass("state-open")||($(this).addClass("state-hover"),$(a).css({height:"30px"}))},function(){var a=$(this).attr("data-target");$(this).removeClass("state-hover"),$(this).hasClass("state-open")||$(a).css({height:"0px"})}),$('[data-toggle="gsdk-collapse"]').click(function(a){a.preventDefault();var b=$(this).attr("data-target"),c=$(b).children(".panel-body").height();$(this).hasClass("state-open")?($(b).css({height:"0px"}),$(this).removeClass("state-open")):($(b).css({height:c}),$(this).addClass("state-open"))})}),$(function(){$('[data-toggle="gsdk-collapse"]').each(function(){var a=$(this).attr("data-target");$(a).addClass("gsdk-collapse")})}),$(document).scroll(function(){$(this).scrollTop()>260?transparent&&(transparent=!1,$('nav[role="navigation"]').removeClass("navbar-transparent")):transparent||(transparent=!0,$('nav[role="navigation"]').addClass("navbar-transparent"))}),!function(a){"use strict";a.fn.bootstrapSwitch=function(b){var c={init:function(){return this.each(function(){var c,d,e,f,i,j,b=a(this),g="",h=b.attr("class"),k="ON",l="OFF",m=!1;a.each(["switch-mini","switch-small","switch-large"],function(a,b){h.indexOf(b)>=0&&(g=b)}),b.addClass("has-switch"),void 0!==b.data("on")&&(i="switch-"+b.data("on")),void 0!==b.data("on-label")&&(k=b.data("on-label")),void 0!==b.data("off-label")&&(l=b.data("off-label")),void 0!==b.data("icon")&&(m=b.data("icon")),d=a("<span>").addClass("switch-left").addClass(g).addClass(i).html(k),i="",void 0!==b.data("off")&&(i="switch-"+b.data("off")),e=a("<span>").addClass("switch-right").addClass(g).addClass(i).html(l),f=a("<label>").html("&nbsp;").addClass(g).attr("for",b.find("input").attr("id")),m&&f.html('<i class="'+m+'"></i>'),c=b.find(":checkbox").wrap(a("<div>")).parent().data("animated",!1),b.data("animated")!==!1&&c.addClass("switch-animate").data("animated",!0),c.append(d).append(f).append(e),b.find(">div").addClass(b.find("input").is(":checked")?"switch-on":"switch-off"),b.find("input").is(":disabled")&&a(this).addClass("deactivate");var n=function(a){a.siblings("label").trigger("mousedown").trigger("mouseup").trigger("click")};b.on("keydown",function(b){32===b.keyCode&&(b.stopImmediatePropagation(),b.preventDefault(),n(a(b.target).find("span:first")))}),d.on("click",function(b){n(a(this))}),e.on("click",function(b){n(a(this))}),b.find("input").on("change",function(b){var c=a(this),d=c.parent(),e=c.is(":checked"),f=d.is(".switch-off");b.preventDefault(),d.css("left",""),f===e&&(e?d.removeClass("switch-off").addClass("switch-on"):d.removeClass("switch-on").addClass("switch-off"),d.data("animated")!==!1&&d.addClass("switch-animate"),d.parent().trigger("switch-change",{el:c,value:e}))}),b.find("label").on("mousedown touchstart",function(b){var c=a(this);j=!1,b.preventDefault(),b.stopImmediatePropagation(),c.closest("div").removeClass("switch-animate"),c.closest(".has-switch").is(".deactivate")?c.unbind("click"):(c.on("mousemove touchmove",function(b){var c=a(this).closest(".switch"),d=(b.pageX||b.originalEvent.targetTouches[0].pageX)-c.offset().left,e=d/c.width()*100,f=25,g=75;j=!0,e<f?e=f:e>g&&(e=g),c.find(">div").css("left",e-g+"%")}),c.on("click touchend",function(b){var c=a(this),d=a(b.target),e=d.siblings("input");b.stopImmediatePropagation(),b.preventDefault(),c.unbind("mouseleave"),j?e.prop("checked",!(parseInt(c.parent().css("left"))<-25)):e.prop("checked",!e.is(":checked")),j=!1,e.trigger("change")}),c.on("mouseleave",function(b){var c=a(this),d=c.siblings("input");b.preventDefault(),b.stopImmediatePropagation(),c.unbind("mouseleave"),c.trigger("mouseup"),d.prop("checked",!(parseInt(c.parent().css("left"))<-25)).trigger("change")}),c.on("mouseup",function(b){b.stopImmediatePropagation(),b.preventDefault(),a(this).unbind("mousemove")}))})})},toggleActivation:function(){a(this).toggleClass("deactivate")},isActive:function(){return!a(this).hasClass("deactivate")},setActive:function(b){b?a(this).removeClass("deactivate"):a(this).addClass("deactivate")},toggleState:function(b){var c=a(this).find("input:checkbox");c.prop("checked",!c.is(":checked")).trigger("change",b)},setState:function(b,c){a(this).find("input:checkbox").prop("checked",b).trigger("change",c)},status:function(){return a(this).find("input:checkbox").is(":checked")},destroy:function(){var c,b=a(this).find("div");return b.find(":not(input:checkbox)").remove(),c=b.children(),c.unwrap().unwrap(),c.unbind("change"),c}};return c[b]?c[b].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof b&&b?void a.error("Method "+b+" does not exist!"):c.init.apply(this,arguments)}}(jQuery),!function(a){var b=function(a,b){this.init(a,b)};b.prototype={constructor:b,init:function(b,c){var d=this.$element=a(b);this.options=a.extend({},a.fn.checkbox.defaults,c),d.before(this.options.template),this.setState()},setState:function(){var a=this.$element,b=a.closest(".checkbox");a.prop("disabled")&&b.addClass("disabled"),a.prop("checked")&&b.addClass("checked")},toggle:function(){var b="checked",c=this.$element,d=c.closest(".checkbox"),e=c.prop(b),f=a.Event("toggle");0==c.prop("disabled")&&(d.toggleClass(b)&&e?c.removeAttr(b):c.prop(b,b),c.trigger(f).trigger("change"))},setCheck:function(b){var d="checked",e=this.$element,f=e.closest(".checkbox"),g="check"==b,h=a.Event(b);f[g?"addClass":"removeClass"](d)&&g?e.prop(d,d):e.removeAttr(d),e.trigger(h).trigger("change")}};var c=a.fn.checkbox;a.fn.checkbox=function(c){return this.each(function(){var d=a(this),e=d.data("checkbox"),f=a.extend({},a.fn.checkbox.defaults,d.data(),"object"==typeof c&&c);e||d.data("checkbox",e=new b(this,f)),"toggle"==c&&e.toggle(),"check"==c||"uncheck"==c?e.setCheck(c):c&&e.setState()})},a.fn.checkbox.defaults={template:'<span class="icons"><span class="first-icon fa fa-square-o"></span><span class="second-icon fa fa-check-square-o"></span></span>'},a.fn.checkbox.noConflict=function(){return a.fn.checkbox=c,this},a(document).on("click.checkbox.data-api","[data-toggle^=checkbox], .checkbox",function(b){var c=a(b.target);"A"!=b.target.tagName&&(b&&b.preventDefault()&&b.stopPropagation(),c.hasClass("checkbox")||(c=c.closest(".checkbox")),c.find(":checkbox").checkbox("toggle"))}),a(function(){a('[data-toggle="checkbox"]').each(function(){var b=a(this);b.checkbox()})})}(window.jQuery),!function(a){var b=function(a,b){this.init(a,b)};b.prototype={constructor:b,init:function(b,c){var d=this.$element=a(b);this.options=a.extend({},a.fn.radio.defaults,c),d.before(this.options.template),this.setState()},setState:function(){var a=this.$element,b=a.closest(".radio");a.prop("disabled")&&b.addClass("disabled"),a.prop("checked")&&b.addClass("checked")},toggle:function(){var b="disabled",c="checked",d=this.$element,e=d.prop(c),f=d.closest(".radio"),g=d.closest("form").length?d.closest("form"):d.closest("body"),h=g.find(':radio[name="'+d.attr("name")+'"]'),i=a.Event("toggle");0==d.prop(b)&&(h.not(d).each(function(){var d=a(this),e=a(this).closest(".radio");0==d.prop(b)&&e.removeClass(c)&&d.removeAttr(c).trigger("change")}),0==e&&f.addClass(c)&&d.prop(c,!0),d.trigger(i),e!==d.prop(c)&&d.trigger("change"))},setCheck:function(b){var c="checked",d=this.$element,e=d.closest(".radio"),f="check"==b,g=d.prop(c),h=d.closest("form").length?d.closest("form"):d.closest("body"),i=h.find(':radio[name="'+d.attr("name")+'"]'),j=a.Event(b);i.not(d).each(function(){var b=a(this),d=a(this).closest(".radio");d.removeClass(c)&&b.removeAttr(c)}),e[f?"addClass":"removeClass"](c)&&f?d.prop(c,c):d.removeAttr(c),d.trigger(j),g!==d.prop(c)&&d.trigger("change")}};var c=a.fn.radio;a.fn.radio=function(c){return this.each(function(){var d=a(this),e=d.data("radio"),f=a.extend({},a.fn.radio.defaults,d.data(),"object"==typeof c&&c);e||d.data("radio",e=new b(this,f)),"toggle"==c&&e.toggle(),"check"==c||"uncheck"==c?e.setCheck(c):c&&e.setState()})},a.fn.radio.defaults={template:'<span class="icons"><span class="first-icon fa fa-circle-o"></span><span class="second-icon fa fa-dot-circle-o"></span></span>'
},a.fn.radio.noConflict=function(){return a.fn.radio=c,this},a(document).on("click.radio.data-api","[data-toggle^=radio], .radio",function(b){var c=a(b.target);b&&b.preventDefault()&&b.stopPropagation(),c.hasClass("radio")||(c=c.closest(".radio")),c.find(":radio").radio("toggle")}),a(function(){a('[data-toggle="radio"]').each(function(){var b=a(this);b.radio()})})}(window.jQuery);