!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=20)}([function(e,t){!function(){e.exports=this.wp.element}()},function(e,t,n){e.exports=n(18)()},function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}},function(e,t,n){var r=n(16);e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},function(e,t,n){var r=n(17),o=n(7);e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?o(e):t}},function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},function(e,t){!function(){e.exports=this.wp.i18n}()},function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},n.apply(this,arguments)}e.exports=n},function(e,t){!function(){e.exports=this.wp.hooks}()},function(e,t){!function(){e.exports=this.wp.data}()},function(e,t){!function(){e.exports=this.wp.compose}()},function(e,t){!function(){e.exports=this.wp.apiFetch}()},function(e,t){!function(){e.exports=this.wp.url}()},function(e,t){!function(){e.exports=this.lodash}()},function(e,t){function n(t,r){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,r)}e.exports=n},function(e,t){function n(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},function(e,t,n){"use strict";var r=n(19);function o(){}function i(){}i.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,i,c){if(c!==r){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:o};return n.PropTypes=n,n}},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){"use strict";n.r(t);var r=n(9),o=n.n(r),i=n(3),c=n.n(i),s=n(4),a=n.n(s),u=n(5),f=n.n(u),l=n(6),p=n.n(l),d=n(2),m=n.n(d),y=n(0),h=n(10),v=n(1),b=n.n(v),g=n(7),T=n.n(g),O=n(11),x=n(12),j=n(8),_=n(13),S=n.n(_),R=n(14),I=n(15),C=function(e){var t=e.value,n=e.id,r=e.terms,o=e.onChange;return Object(y.createElement)("div",null,Object(y.createElement)("select",{className:"components-select-control__input",id:n,value:t,onChange:function(e){o(parseInt(e.target.value,10))}},r.map((function(e){return Object(y.createElement)("option",{key:e.id,value:e.id},(t=e.name,(n=document.createElement("textarea")).innerHTML=t,n.value));var t,n}))))};C.propTypes={terms:b.a.arrayOf(b.a.shape({id:b.a.string.isRequired,name:b.a.string.isRequired})),onChange:b.a.func.isRequired,id:b.a.string,value:b.a.string};var P=C;function E(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=m()(e);if(t){var o=m()(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return p()(this,n)}}var w=function(e){f()(n,e);var t=E(n);function n(e){var r;c()(this,n),(r=t.call(this,e)).onChange=r.onChange.bind(T()(r));var o=e.taxonomy.fieldId;return r.input=document.getElementById(o),r.state={selectedTerms:[],selectedTermId:-1,terms:[]},r}return a()(n,[{key:"componentDidMount",value:function(){this.fetchTerms()}},{key:"componentDidUpdate",value:function(e,t){if(e.selectedTermIds.length<this.props.selectedTermIds.length){var n=Object(I.difference)(this.props.selectedTermIds,e.selectedTermIds)[0];if(!this.termIsAvailable(n))return void this.fetchTerms()}e.selectedTermIds!==this.props.selectedTermIds&&this.updateSelectedTerms(this.state.terms,this.props.selectedTermIds),t.selectedTerms!==this.state.selectedTerms&&this.handleSelectedTermsChange()}},{key:"handleSelectedTermsChange",value:function(){var e=this.state,t=e.selectedTermId,n=e.selectedTerms;n.find((function(e){return e.id===t}))||this.onChange(n.length?n[0].id:-1)}},{key:"termIsAvailable",value:function(e){return!!this.state.terms.find((function(t){return t.id===e}))}},{key:"fetchTerms",value:function(){var e=this,t=this.props.taxonomy;t&&(this.fetchRequest=S()({path:Object(R.addQueryArgs)("/wp/v2/".concat(t.restBase),{per_page:-1,orderby:"count",order:"desc",_fields:"id,name"})}),this.fetchRequest.then((function(t){e.setState({terms:t,selectedTerms:e.getSelectedTerms(t,e.props.selectedTermIds),selectedTermId:parseInt(e.input.value,10)})})))}},{key:"getSelectedTerms",value:function(e,t){return e.filter((function(e){return t.includes(e.id)}))}},{key:"updateSelectedTerms",value:function(e,t){var n=this.getSelectedTerms(e,t);this.setState({selectedTerms:n})}},{key:"onChange",value:function(e){this.input.value=-1===e?"":e,this.setState({selectedTermId:e})}},{key:"render",value:function(){var e=this.props.taxonomy,t=this.state,n=t.selectedTermId,r=t.selectedTerms;if(r.length<2)return null;var o="pragmatic-primary-".concat(e.name,"-picker");return Object(y.createElement)("div",{className:"components-base-control__field"},Object(y.createElement)("label",{htmlFor:o,className:"components-base-control__label"},Object(j.sprintf)(
/* translators: %s expands to the taxonomy name. */
Object(j.__)("Select the primary %s","primary-taxonomy"),e.singularLabel.toLowerCase())),Object(y.createElement)(P,{value:n,onChange:this.onChange,id:o,terms:r}))}}]),n}(y.Component);w.propTypes={selectedTermIds:b.a.arrayOf(b.a.number),receiveEntityRecords:b.a.func,taxonomy:b.a.shape({name:b.a.string,fieldId:b.a.string,restBase:b.a.string,singularLabel:b.a.string})};var k=Object(x.compose)([Object(O.withSelect)((function(e,t){var n=e("core/editor"),r=t.taxonomy;return{selectedTermIds:n.getEditedPostAttribute(r.restBase)||[]}}))])(w);function D(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=m()(e);if(t){var o=m()(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return p()(this,n)}}var q=function(e){f()(n,e);var t=D(n);function n(){return c()(this,n),t.apply(this,arguments)}return a()(n,[{key:"taxonomyHasPrimaryTermSupport",value:function(){return!0}},{key:"render",value:function(){var e=this.props.OriginalComponent;if(!this.taxonomyHasPrimaryTermSupport())return Object(y.createElement)(e,this.props);return Object(y.createElement)(y.Fragment,null,Object(y.createElement)(e,this.props),Object(y.createElement)(k,{taxonomy:{fieldId:"acf-field_primary_category",name:"category",restBase:"categories",singularLabel:"Video Category"}}))}}]),n}(y.Component);q.propTypes={OriginalComponent:b.a.func.isRequired,slug:b.a.string.isRequired};var L=q;function B(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=m()(e);if(t){var o=m()(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return p()(this,n)}}Object(h.addFilter)("editor.PostTaxonomyType","pragmatic-primary-category",(function(e){return function(t){f()(r,t);var n=B(r);function r(){return c()(this,r),n.apply(this,arguments)}return a()(r,[{key:"render",value:function(){return Object(y.createElement)(L,o()({OriginalComponent:e},this.props))}}]),r}(y.Component)}))}]);