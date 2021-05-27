(this["webpackJsonpts-ast-viewer"]=this["webpackJsonpts-ast-viewer"]||[]).push([[0],{197:function(t,e,n){"use strict";var i=n(706),r=n(709),s=n(710);Object.defineProperty(e,"__esModule",{value:!0});var a=n(711),o=n(712),h={BACK_SLASH:"\\".charCodeAt(0),FORWARD_SLASH:"/".charCodeAt(0),NEW_LINE:"\n".charCodeAt(0),CARRIAGE_RETURN:"\r".charCodeAt(0),ASTERISK:"*".charCodeAt(0),DOUBLE_QUOTE:'"'.charCodeAt(0),SINGLE_QUOTE:"'".charCodeAt(0),BACK_TICK:"`".charCodeAt(0),OPEN_BRACE:"{".charCodeAt(0),CLOSE_BRACE:"}".charCodeAt(0),DOLLAR_SIGN:"$".charCodeAt(0)},u=new Set([h.BACK_SLASH,h.FORWARD_SLASH,h.NEW_LINE,h.CARRIAGE_RETURN,h.ASTERISK,h.DOUBLE_QUOTE,h.SINGLE_QUOTE,h.BACK_TICK,h.OPEN_BRACE,h.CLOSE_BRACE]),l=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};r(this,t),this._currentIndentation=0,this._length=0,this._newLineOnNextWrite=!1,this._currentCommentChar=void 0,this._stringCharStack=[],this._isInRegEx=!1,this._isOnFirstLineOfBlock=!0,this._texts=[],this._newLine=e.newLine||"\n",this._useTabs=e.useTabs||!1,this._indentNumberOfSpaces=e.indentNumberOfSpaces||4,this._indentationText=f(this._useTabs,this._indentNumberOfSpaces),this._quoteChar=e.useSingleQuote?"'":'"'}return s(t,[{key:"getOptions",value:function(){return{indentNumberOfSpaces:this._indentNumberOfSpaces,newLine:this._newLine,useTabs:this._useTabs,useSingleQuote:"'"===this._quoteChar}}},{key:"queueIndentationLevel",value:function(t){return this._queuedIndentation=this._getIndentationLevelFromArg(t),this._queuedOnlyIfNotBlock=void 0,this}},{key:"hangingIndent",value:function(t){var e=this;return this._withResetIndentation((function(){return e.queueIndentationLevel(e.getIndentationLevel()+1)}),t)}},{key:"hangingIndentUnlessBlock",value:function(t){var e=this;return this._withResetIndentation((function(){e.queueIndentationLevel(e.getIndentationLevel()+1),e._queuedOnlyIfNotBlock=!0}),t)}},{key:"setIndentationLevel",value:function(t){return this._currentIndentation=this._getIndentationLevelFromArg(t),this}},{key:"withIndentationLevel",value:function(t,e){var n=this;return this._withResetIndentation((function(){return n.setIndentationLevel(t)}),e)}},{key:"_withResetIndentation",value:function(t,e){var n=this._getIndentationState();t();try{e()}finally{this._setIndentationState(n)}return this}},{key:"getIndentationLevel",value:function(){return this._currentIndentation}},{key:"block",value:function(t){return this._newLineIfNewLineOnNextWrite(),this.getLength()>0&&!this.isLastNewLine()&&this.spaceIfLastNot(),this.inlineBlock(t),this._newLineOnNextWrite=!0,this}},{key:"inlineBlock",value:function(t){return this._newLineIfNewLineOnNextWrite(),this.write("{"),this._indentBlockInternal(t),this.newLineIfLastNot().write("}"),this}},{key:"indent",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return"number"===typeof t?(this._newLineIfNewLineOnNextWrite(),this.write(this._indentationText.repeat(t))):(this._indentBlockInternal(t),this.isLastNewLine()||(this._newLineOnNextWrite=!0),this)}},{key:"_indentBlockInternal",value:function(t){null!=this.getLastChar()&&this.newLineIfLastNot(),this._currentIndentation++,this._isOnFirstLineOfBlock=!0,null!=t&&t(),this._isOnFirstLineOfBlock=!1,this._currentIndentation=Math.max(0,this._currentIndentation-1)}},{key:"conditionalWriteLine",value:function(t,e){return t&&this.writeLine(a.getStringFromStrOrFunc(e)),this}},{key:"writeLine",value:function(t){return this._newLineIfNewLineOnNextWrite(),null!=this.getLastChar()&&this.newLineIfLastNot(),this._writeIndentingNewLines(t),this.newLine(),this}},{key:"newLineIfLastNot",value:function(){return this._newLineIfNewLineOnNextWrite(),this.isLastNewLine()||this.newLine(),this}},{key:"blankLineIfLastNot",value:function(){return this.isLastBlankLine()||this.blankLine(),this}},{key:"conditionalBlankLine",value:function(t){return t&&this.blankLine(),this}},{key:"blankLine",value:function(){return this.newLineIfLastNot().newLine()}},{key:"conditionalNewLine",value:function(t){return t&&this.newLine(),this}},{key:"newLine",value:function(){return this._newLineOnNextWrite=!1,this._baseWriteNewline(),this}},{key:"quote",value:function(t){return this._newLineIfNewLineOnNextWrite(),this._writeIndentingNewLines(null==t?this._quoteChar:this._quoteChar+a.escapeForWithinString(t,this._quoteChar)+this._quoteChar),this}},{key:"spaceIfLastNot",value:function(){return this._newLineIfNewLineOnNextWrite(),this.isLastSpace()||this._writeIndentingNewLines(" "),this}},{key:"space",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return this._newLineIfNewLineOnNextWrite(),this._writeIndentingNewLines(" ".repeat(t)),this}},{key:"tabIfLastNot",value:function(){return this._newLineIfNewLineOnNextWrite(),this.isLastTab()||this._writeIndentingNewLines("\t"),this}},{key:"tab",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return this._newLineIfNewLineOnNextWrite(),this._writeIndentingNewLines("\t".repeat(t)),this}},{key:"conditionalWrite",value:function(t,e){return t&&this.write(a.getStringFromStrOrFunc(e)),this}},{key:"write",value:function(t){return this._newLineIfNewLineOnNextWrite(),this._writeIndentingNewLines(t),this}},{key:"closeComment",value:function(){var t=this._currentCommentChar;switch(t){case o.CommentChar.Line:this.newLine();break;case o.CommentChar.Star:this.isLastNewLine()||this.spaceIfLastNot(),this.write("*/");break;default:}return this}},{key:"unsafeInsert",value:function(t,e){var n=this._length,i=this._texts;return function(){if(t<0)throw new Error("Provided position of '".concat(t,"' was less than zero."));if(t>n)throw new Error("Provided position of '".concat(t,"' was greater than the text length of '").concat(n,"'."))}(),t===n?this.write(e):(function(){var r=function(){if(t<n/2)for(var e=0,r=0;r<i.length;r++){var s=e;if((e+=i[r].length)>=t)return{index:r,localIndex:t-s}}else for(var a=n,o=i.length-1;o>=0;o--){if((a-=i[o].length)<=t)return{index:o,localIndex:t-a}}throw new Error("Unhandled situation inserting. This should never happen.")}(),s=r.index,a=r.localIndex;if(0===a)i.splice(s,0,e);else if(a===i[s].length)i.splice(s+1,0,e);else{var o=i[s],h=o.substring(0,a),u=o.substring(a);i.splice(s,1,h,e,u)}}(),this._length+=e.length,this)}},{key:"getLength",value:function(){return this._length}},{key:"isInComment",value:function(){return void 0!==this._currentCommentChar}},{key:"isAtStartOfFirstLineOfBlock",value:function(){return this.isOnFirstLineOfBlock()&&(this.isLastNewLine()||null==this.getLastChar())}},{key:"isOnFirstLineOfBlock",value:function(){return this._isOnFirstLineOfBlock}},{key:"isInString",value:function(){return this._stringCharStack.length>0&&this._stringCharStack[this._stringCharStack.length-1]!==h.OPEN_BRACE}},{key:"isLastNewLine",value:function(){var t=this.getLastChar();return"\n"===t||"\r"===t}},{key:"isLastBlankLine",value:function(){for(var t=0,e=this._texts.length-1;e>=0;e--)for(var n=this._texts[e],i=n.length-1;i>=0;i--){var r=n.charCodeAt(i);if(r===h.NEW_LINE){if(2===++t)return!0}else if(r!==h.CARRIAGE_RETURN)return!1}return!1}},{key:"isLastSpace",value:function(){return" "===this.getLastChar()}},{key:"isLastTab",value:function(){return"\t"===this.getLastChar()}},{key:"getLastChar",value:function(){var t=this._getLastCharCodeWithOffset(0);return null==t?void 0:String.fromCharCode(t)}},{key:"endsWith",value:function(t){var e=this._length;return this.iterateLastCharCodes((function(n,i){var r=e-i,s=t.length-r;return t.charCodeAt(s)===n&&(0===s||void 0)}))||!1}},{key:"iterateLastChars",value:function(t){return this.iterateLastCharCodes((function(e,n){return t(String.fromCharCode(e),n)}))}},{key:"iterateLastCharCodes",value:function(t){for(var e=this._length,n=this._texts.length-1;n>=0;n--)for(var i=this._texts[n],r=i.length-1;r>=0;r--){e--;var s=t(i.charCodeAt(r),e);if(null!=s)return s}}},{key:"toString",value:function(){if(this._texts.length>1){var t=this._texts.join("");this._texts.length=0,this._texts.push(t)}return this._texts[0]||""}},{key:"_writeIndentingNewLines",value:function(e){var n=this;0!==(e=e||"").length?e.split(t._newLineRegEx).forEach((function(t,e){e>0&&n._baseWriteNewline(),0!==t.length&&i(n,t)})):i(this,"");function i(t,e){t.isInString()||(t.isLastNewLine()||null==t.getLastChar())&&t._writeIndentation();t._updateInternalState(e),t._internalWrite(e)}}},{key:"_baseWriteNewline",value:function(){this._currentCommentChar===o.CommentChar.Line&&(this._currentCommentChar=void 0);var t=this._stringCharStack[this._stringCharStack.length-1];t!==h.DOUBLE_QUOTE&&t!==h.SINGLE_QUOTE||this._getLastCharCodeWithOffset(0)===h.BACK_SLASH||this._stringCharStack.pop(),this._internalWrite(this._newLine),this._isOnFirstLineOfBlock=!1,this._dequeueQueuedIndentation()}},{key:"_dequeueQueuedIndentation",value:function(){null!=this._queuedIndentation&&(this._queuedOnlyIfNotBlock&&function(t){var e=!1;return t.iterateLastCharCodes((function(t){switch(t){case h.NEW_LINE:if(e)return!1;e=!0;break;case h.CARRIAGE_RETURN:return;case h.OPEN_BRACE:return!0;default:return!1}}))}(this)?(this._queuedIndentation=void 0,this._queuedOnlyIfNotBlock=void 0):(this._currentIndentation=this._queuedIndentation,this._queuedIndentation=void 0))}},{key:"_updateInternalState",value:function(t){for(var e=0;e<t.length;e++){var n=t.charCodeAt(e);if(u.has(n)){var i=0===e?this._getLastCharCodeWithOffset(0):t.charCodeAt(e-1),r=0===e?this._getLastCharCodeWithOffset(1):1===e?this._getLastCharCodeWithOffset(0):t.charCodeAt(e-2);if(this._isInRegEx){if((i!==h.FORWARD_SLASH||r===h.BACK_SLASH)&&i!==h.NEW_LINE)continue;this._isInRegEx=!1}else if(!this.isInString()&&!this.isInComment()&&c(n,i,r)){this._isInRegEx=!0;continue}if(null==this._currentCommentChar&&i===h.FORWARD_SLASH&&n===h.FORWARD_SLASH?this._currentCommentChar=o.CommentChar.Line:null==this._currentCommentChar&&i===h.FORWARD_SLASH&&n===h.ASTERISK?this._currentCommentChar=o.CommentChar.Star:this._currentCommentChar===o.CommentChar.Star&&i===h.ASTERISK&&n===h.FORWARD_SLASH&&(this._currentCommentChar=void 0),!this.isInComment()){var s=0===this._stringCharStack.length?void 0:this._stringCharStack[this._stringCharStack.length-1];i===h.BACK_SLASH||n!==h.DOUBLE_QUOTE&&n!==h.SINGLE_QUOTE&&n!==h.BACK_TICK?r!==h.BACK_SLASH&&i===h.DOLLAR_SIGN&&n===h.OPEN_BRACE&&s===h.BACK_TICK?this._stringCharStack.push(n):n===h.CLOSE_BRACE&&s===h.OPEN_BRACE&&this._stringCharStack.pop():s===n?this._stringCharStack.pop():s!==h.OPEN_BRACE&&void 0!==s||this._stringCharStack.push(n)}}}}},{key:"_getLastCharCodeWithOffset",value:function(t){if(!(t>=this._length||t<0))for(var e=this._texts.length-1;e>=0;e--){var n=this._texts[e];if(!(t>=n.length))return n.charCodeAt(n.length-1-t);t-=n.length}}},{key:"_writeIndentation",value:function(){var t=Math.floor(this._currentIndentation);this._internalWrite(this._indentationText.repeat(t));var e=this._currentIndentation-t;if(this._useTabs)e>.5&&this._internalWrite(this._indentationText);else{for(var n=Math.round(this._indentationText.length*e),i="",r=0;r<n;r++)i+=this._indentationText[r];this._internalWrite(i)}}},{key:"_newLineIfNewLineOnNextWrite",value:function(){this._newLineOnNextWrite&&(this._newLineOnNextWrite=!1,this.newLine())}},{key:"_internalWrite",value:function(t){0!==t.length&&(this._texts.push(t),this._length+=t.length)}},{key:"_getIndentationLevelFromArg",value:function(e){if("number"===typeof e){if(e<0)throw new Error("Passed in indentation level should be greater than or equal to 0.");return e}if("string"===typeof e){if(!t._spacesOrTabsRegEx.test(e))throw new Error("Provided string must be empty or only contain spaces or tabs.");var n=function(t){var e,n=0,r=0,s=i(t);try{for(s.s();!(e=s.n()).done;){var a=e.value;" "===a?n++:"\t"===a&&r++}}catch(o){s.e(o)}finally{s.f()}return{spacesCount:n,tabsCount:r}}(e),r=n.spacesCount;return n.tabsCount+r/this._indentNumberOfSpaces}throw new Error("Argument provided must be a string or number.")}},{key:"_setIndentationState",value:function(t){this._currentIndentation=t.current,this._queuedIndentation=t.queued,this._queuedOnlyIfNotBlock=t.queuedOnlyIfNotBlock}},{key:"_getIndentationState",value:function(){return{current:this._currentIndentation,queued:this._queuedIndentation,queuedOnlyIfNotBlock:this._queuedOnlyIfNotBlock}}}]),t}();function c(t,e,n){return e===h.FORWARD_SLASH&&t!==h.FORWARD_SLASH&&t!==h.ASTERISK&&n!==h.ASTERISK&&n!==h.FORWARD_SLASH}function f(t,e){return t?"\t":Array(e+1).join(" ")}e.default=l,l._newLineRegEx=/\r?\n/,l._spacesOrTabsRegEx=/^[ \t]*$/},706:function(t,e,n){var i=n(707);t.exports=function(t,e){var n;if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=i(t))||e&&t&&"number"===typeof t.length){n&&(t=n);var r=0,s=function(){};return{s:s,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:s}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,o=!0,h=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return o=t.done,t},e:function(t){h=!0,a=t},f:function(){try{o||null==n.return||n.return()}finally{if(h)throw a}}}}},707:function(t,e,n){var i=n(708);t.exports=function(t,e){if(t){if("string"===typeof t)return i(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(t,e):void 0}}},708:function(t,e){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}},709:function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},710:function(t,e){function n(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}t.exports=function(t,e,i){return e&&n(t.prototype,e),i&&n(t,i),t}},711:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getStringFromStrOrFunc=e.escapeChar=e.escapeForWithinString=void 0;var i=/(\r?\n)/g;function r(t,e){if(1!==e.length)throw new Error("Specified char must be one character long.");for(var n="",i=0;i<t.length;i++)t[i]===e&&(n+="\\"),n+=t[i];return n}e.escapeForWithinString=function(t,e){return r(t,e).replace(i,"\\$1")},e.escapeChar=r,e.getStringFromStrOrFunc=function(t){return t instanceof Function?t():t}},712:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.CommentChar=void 0,function(t){t[t.Line=0]="Line",t[t.Star=1]="Star"}(e.CommentChar||(e.CommentChar={}))}}]);