(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{230:function(e,t,n){},231:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),s=n(15),i=n.n(s),c=n(16),o=n(17),l=n(19),u=n(18),p=n(20),h=(n(91),n(37)),d=n(38),f=n.n(d),v=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"center-text"},r.a.createElement(f.a,{id:this.props.id,label:"Edges",multiline:!0,rowsMax:this.props.rows,rows:this.props.rows,value:this.props.value,onChange:this.props.onChange,className:this.props.className,margin:"normal"}))}}]),t}(a.Component),m=n(30),b=n(85),g=n.n(b),j=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"center-text button"},r.a.createElement(g.a,{variant:"contained",color:this.props.color,onClick:this.props.onClick},this.props.value))}}]),t}(a.Component),O=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).redraw=function(){var e=n.canvasReference.current.getContext("2d");e.clearRect(0,0,n.props.width,n.props.height);var t=new Image;t.onload=function(){e.drawImage(t,0,0);var a=n.getCoordinates();n.drawCircles(e,a),0!==n.state.lines.length&&n.drawLines(e,a)},t.src="./image.jpg"},n.getCoordinates=function(){for(var e=[],t=n.props,a=t.width,r=t.size,s=a/(r+1),i=20/r,c=s;c<a-i;c+=s)for(var o=s;o<a-i;o+=s)e.push([c,o]);return e},n.drawLines=function(e,t){function a(e,t){return e[0]*t+e[1]}n.state.lines.forEach(function(r){var s=Object(m.a)(r,3),i=s[0],c=s[1],o=s[2],l=a(i,n.props.size),u=a(c,n.props.size),p=t[l],h=t[u];e.strokeStyle=o,e.beginPath(),e.moveTo(p[0],p[1]),e.lineTo(h[0],h[1]),e.stroke()})},n.drawCircles=function(e,t){t.forEach(function(t){e.beginPath(),e.arc(t[0],t[1],20/n.props.size,0,2*Math.PI),e.fill()})},n.parseInput=function(){var e=n.props.edges,t=n.props.size;return e.split("\n").map(function(e){var n=e.split(" "),a=Object(m.a)(n,3),r=a[0],s=a[1],i=a[2],c=r.split(",").map(function(e){return+e}),o=Object(m.a)(c,2),l=o[0],u=o[1],p=s.split(",").map(function(e){return+e}),h=Object(m.a)(p,2),d=h[0],f=h[1];if(l<0||l>=t||u<0||u>=t||d<0||d>=t||f<0||f>=t)throw new Error("Not valid Input "+e);return[[l,u],[d,f],i]})},n.handleDrawButton=function(){try{var e=n.parseInput();n.setState(function(t,n){return{lines:e}})}catch(t){alert("Cannot draw line cause edges input is not valid. Please fix!\n"+t)}},n.canvasReference=r.a.createRef(),n.state={lines:[]},n}return Object(p.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.redraw()}},{key:"componentDidUpdate",value:function(e){this.props.size===e.size&&this.props.edges===e.edges||this.setState(function(e,t){return{lines:[]}}),this.redraw()}},{key:"render",value:function(){return r.a.createElement("div",{id:"canvas-div"},r.a.createElement("canvas",{ref:this.canvasReference,width:this.props.width,height:this.props.height}),r.a.createElement("div",{className:"center-text"},"Current Grid Size: ",this.props.size),r.a.createElement(j,{color:"primary",onClick:this.handleDrawButton,value:"Draw"}),r.a.createElement(j,{color:"secondary",onClick:this.props.action,value:"Clear"}))}}]),t}(a.Component),w=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"center-text"},r.a.createElement("p",null,"Pick the Grid Size:"),r.a.createElement(f.a,{id:this.props.id,label:this.props.label,value:this.props.value,onChange:this.props.onChange,type:"number",className:this.props.className,InputLabelProps:{shrink:!0},autoFocus:!0}))}}]),t}(a.Component),C=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).changeSize=function(e){var t=e.target.valueAsNumber,a=t>=0&&t<=200?t:3;n.setState(function(e,t){return{edges:"",size:a}})},n.changeEdges=function(e){var t=e.target.value;n.setState(function(e,n){return{edges:t,size:e.size}})},n.clearCanvasHandler=function(){console.log("clear"),n.setState({edges:"",size:3})},n.state={edges:"",size:3},n.clearCanvasHandler=n.clearCanvasHandler.bind(Object(h.a)(n)),n}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(w,{onChange:this.changeSize,value:this.state.size}),r.a.createElement(O,{action:this.clearCanvasHandler,edges:this.state.edges,height:400,size:this.state.size,width:400}),r.a.createElement(v,{onChange:this.changeEdges,rows:5,value:this.state.edges}))}}]),t}(a.Component),E=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(C,null))}}]),t}(a.Component);n(230);i.a.render(r.a.createElement(E,null),document.getElementById("root"))},86:function(e,t,n){e.exports=n(231)},91:function(e,t,n){}},[[86,1,2]]]);
//# sourceMappingURL=main.17d9aa0b.chunk.js.map