﻿/*
 Copyright (c) 2003-2014, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.md or http://ckeditor.com/license
*/
(function(){function w(a){var h="left"==a?"pageXOffset":"pageYOffset";return h in i.$?i.$[h]:CKEDITOR.document.$.documentElement["left"==a?"scrollLeft":"scrollTop"]}function k(a){var h=a.config,g=h.floatSpace||{on:{}},t=!1,p=a.fire("uiSpace",{space:"top",html:""}).html,o=function(){function f(a,c,e){b.setStyle(c,v(e));b.setStyle("position",a)}function e(a){var u=l.getDocumentPosition();switch(a){case "top":f("absolute","top",u.y-q-r);break;case "pin":f("fixed","top",x);break;case "bottom":f("absolute",
"top",u.y+(c.height||c.bottom-c.top)+r)}g.on&&"function"===typeof g.on.changeMode&&g.on.changeMode.call(b.$,m,a);m=a}var m,l,n,c,j,q,k,p=h.floatSpaceDockedOffsetX||0,r=h.floatSpaceDockedOffsetY||0,s=h.floatSpacePinnedOffsetX||0,x=h.floatSpacePinnedOffsetY||0;return function(d){if(!l)if(g.centerElement){var f;f="function"===typeof g.centerElement?g.centerElement.call(null):g.centerElement;l=new CKEDITOR.dom.element(f);l.on("mousedown",function(a){a.data.preventDefault()})}else if(!(l=a.editable()))return;
t||(d&&"focus"===d.name&&b.show(),b.removeStyle("left"),b.removeStyle("right"),n=b.getClientRect(),c=l.getClientRect(),j=i.getViewPaneSize(),q=n.height,k=w("left"),m?(q+r<=c.top?e("top"):q+r>j.height-c.bottom?e("pin"):e("bottom"),d=j.width/2,d=0<c.left&&c.right<j.width&&c.width>n.width?"rtl"==a.config.contentsLangDirection?"right":"left":d-c.left>c.right-d?"left":"right",n.width>j.width?(d="left",f=0):(f="left"==d?0<c.left?c.left:0:c.right<j.width?j.width-c.right:0,f+n.width>j.width&&(d="left"==d?
"right":"left",f=0)),b.setStyle(d,v(("pin"==m?s:p)+f+("pin"==m?0:"left"==d?k:-k)))):(m="pin",e("pin"),o(d)))}}();if(p){var k=new CKEDITOR.template('<div id="cke_{name}" class="cke {id} cke_reset_all cke_chrome cke_editor_{name} cke_float cke_{langDir} '+CKEDITOR.env.cssClass+'" dir="{langDir}" title="'+(CKEDITOR.env.gecko?" ":"")+'" lang="{langCode}" role="application" style="{style}" aria-labelledby="cke_{name}_arialbl"><span id="cke_{name}_arialbl" class="cke_voice_label">{voiceLabel}</span><div class="cke_inner"><div id="{topId}" class="cke_top" role="presentation">{content}</div></div><span class="cke_nose"><span></div>'),
b=CKEDITOR.document.getBody().append(CKEDITOR.dom.element.createFromHtml(k.output({content:p,id:a.id,langDir:a.lang.dir,langCode:a.langCode,name:a.name,style:"display:none;z-index:"+(h.baseFloatZIndex-1),topId:a.ui.spaceId("top"),voiceLabel:a.lang.editorPanel+", "+a.name}))),s=CKEDITOR.tools.eventsBuffer(500,o),e=CKEDITOR.tools.eventsBuffer(100,o);b.unselectable();b.on("mousedown",function(a){a=a.data;a.getTarget().hasAscendant("a",1)||a.preventDefault()});a.on("focus",function(b){o(b);a.on("change",
s.input);i.on("scroll",e.input);i.on("resize",e.input)});a.on("blur",function(){b.hide();a.removeListener("change",s.input);i.removeListener("scroll",e.input);i.removeListener("resize",e.input)});a.on("destroy",function(){i.removeListener("scroll",e.input);i.removeListener("resize",e.input);b.clearCustomData();b.remove()});a.focusManager.hasFocus&&b.show();a.focusManager.add(b,1);g.on&&"function"===typeof g.on.ready&&g.on.ready.call(b.$,{show:function(){t=!1;b.show();o()},hide:function(){b.hide();
t=!0}})}}var i=CKEDITOR.document.getWindow(),v=CKEDITOR.tools.cssLength;CKEDITOR.plugins.add("floatingspace",{init:function(a){a.on("loaded",function(){k(this)},null,null,20)}})})();