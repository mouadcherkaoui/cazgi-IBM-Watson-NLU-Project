(this.webpackJsonpsentimentanalyzer=this.webpackJsonpsentimentanalyzer||[]).push([[0],{24:function(t,e,n){},25:function(t,e,n){},43:function(t,e,n){"use strict";n.r(e);var s=n(0),i=n(2),a=n.n(i),o=n(18),r=n.n(o),c=(n(24),n(3)),l=n(4),u=n(6),d=n(5),m=(n(9),n(25),function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(){return Object(c.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(s.jsxs)("div",{children:[JSON.stringify(this.props.emotions),Object(s.jsx)("table",{className:"table table-bordered",children:Object(s.jsx)("tbody",{children:Object.values(this.props.emotions).map((function(t){return Object(s.jsxs)("tr",{children:[Object(s.jsxs)("td",{style:{color:"black",border:"1px solid black"},children:[" ",t[0]]}),Object(s.jsxs)("td",{style:{color:"black",border:"1px solid black"},children:[" ",t[1]]})]})}))})})]})}}]),n}(a.a.Component)),b=n(8),j=n.n(b),x=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(c.a)(this,n);for(var i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return(t=e.call.apply(e,[this].concat(a))).state={innercomp:Object(s.jsx)("textarea",{rows:"4",cols:"50",id:"textinput"}),mode:"text",sentimentOutput:[],sentiment:!0},t.renderTextArea=function(){document.getElementById("textinput").value="","url"===t.state.mode&&t.setState({innercomp:Object(s.jsx)("textarea",{rows:"4",cols:"50",id:"textinput"}),mode:"text",sentimentOutput:[],sentiment:!0})},t.renderTextBox=function(){document.getElementById("textinput").value="","text"===t.state.mode&&t.setState({innercomp:Object(s.jsx)("textarea",{rows:"1",cols:"50",id:"textinput"}),mode:"url",sentimentOutput:[],sentiment:!0})},t.sendForSentimentAnalysis=function(){t.setState({sentiment:!0});var e=".";e="url"===t.state.mode?e+"/url/sentiment?url="+document.getElementById("textinput").value:e+"/text/sentiment?text="+document.getElementById("textinput").value,j.a.get(e).then((function(e){t.setState({sentimentOutput:e.data});var n=e.data;n="positive"===e.data?Object(s.jsx)("div",{style:{color:"green",fontSize:20},children:e.data}):"negative"===e.data?Object(s.jsx)("div",{style:{color:"red",fontSize:20},children:e.data}):Object(s.jsx)("div",{style:{color:"orange",fontSize:20},children:e.data}),t.setState({sentimentOutput:n})}))},t.sendForEmotionAnalysis=function(){t.setState({sentiment:!1});var e=".";e="url"===t.state.mode?e+"/url/emotion?url="+document.getElementById("textinput").value:e+"/text/emotion/?text="+document.getElementById("textinput").value,j.a.get(e).then((function(e){console.log(e),t.setState({sentimentOutput:Object(s.jsx)(m,{emotions:e.data})})}))},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)("button",{className:"btn btn-info",onClick:this.renderTextArea,children:"Text"}),Object(s.jsx)("button",{className:"btn btn-dark",onClick:this.renderTextBox,children:"URL"}),Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),this.state.innercomp,Object(s.jsx)("br",{}),Object(s.jsx)("button",{className:"btn-primary",onClick:this.sendForSentimentAnalysis,children:"Analyze Sentiment"}),Object(s.jsx)("button",{className:"btn-primary",onClick:this.sendForEmotionAnalysis,children:"Analyze Emotion"}),Object(s.jsx)("br",{}),this.state.sentimentOutput]})}}]),n}(a.a.Component),p=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,44)).then((function(e){var n=e.getCLS,s=e.getFID,i=e.getFCP,a=e.getLCP,o=e.getTTFB;n(t),s(t),i(t),a(t),o(t)}))};r.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(x,{})}),document.getElementById("root")),p()},9:function(t,e,n){}},[[43,1,2]]]);
//# sourceMappingURL=main.8f1f34a3.chunk.js.map