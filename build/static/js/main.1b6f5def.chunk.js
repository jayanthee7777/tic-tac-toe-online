(this["webpackJsonptic-tac-toe"]=this["webpackJsonptic-tac-toe"]||[]).push([[0],{46:function(e,t,a){e.exports=a(89)},51:function(e,t,a){},56:function(e,t,a){},85:function(e,t){},88:function(e,t,a){},89:function(e,t,a){"use strict";a.r(t);var n=a(3),r=a(4),o=a(5),l=a(6),i=a(0),s=a.n(i),c=a(41),m=a.n(c),u=a(7),h=a(10),d=a(1);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var p=a(9),b=(a(51),function(e){Object(l.a)(a,e);var t=Object(o.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).state={gameID:null,joinGameInput:!1,gameIDtoJoin:null,gameExists:!0,submitted:!1,bothJoined:!1},r.changeValue=r.changeValue.bind(Object(p.a)(r)),r.searchGame=r.searchGame.bind(Object(p.a)(r)),r.startGame=r.startGame.bind(Object(p.a)(r)),r}return Object(r.a)(a,[{key:"createGame",value:function(){var e=this;console.log("Creating Game"),this.setState({joinGameInput:!1}),fetch("/api/create/game").then((function(e){return e.json()})).then((function(t){"success"===t.result&&e.setState({gameID:t.game_id})}))}},{key:"joinGame",value:function(){this.setState({joinGameInput:!this.state.joinGameInput})}},{key:"changeValue",value:function(e){this.setState({gameIDtoJoin:e.target.value})}},{key:"startGame",value:function(){this.props.history.push({pathname:"/Game",state:{gameID:this.state.gameID,mode:"create"}})}},{key:"searchGame",value:function(){var e=this;this.setState({submitted:!0}),fetch("/api/search/game",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({game_id:this.state.gameIDtoJoin})}).then((function(e){return e.json()})).then((function(t){console.log(t),"fail"===t.result?(console.log("Game doesnt exist"),e.setState({gameExists:!1,bothJoined:!1})):"success"===t.result&&(e.setState({gameExists:!0}),2!==t.online?e.props.history.push({pathname:"/Game",state:{gameID:e.state.gameIDtoJoin,mode:"join"}}):e.setState({bothJoined:!0}))}))}},{key:"render",value:function(){var e=this;return s.a.createElement("div",null,s.a.createElement("div",{className:"parent"},s.a.createElement("div",{className:"Home"},s.a.createElement("h1",null,"Tic-Tac-Toe",s.a.createElement("sup",null,"Online")),s.a.createElement("h2",null,"Because why not ?"),s.a.createElement("h3",null,"Get Started"),s.a.createElement("div",{className:"buttons"},s.a.createElement("button",{className:"createGameButton",onClick:function(){return e.createGame()}},"Create a new game"),s.a.createElement("button",{onClick:function(){return e.joinGame()}},"Join a game")),null===this.state.gameID?null:s.a.createElement("div",{className:"createGame"},s.a.createElement("h4",null,"Game Created. Game ID :  ",this.state.gameID),s.a.createElement("p",null,"Ask the other player to enter this ID while Joining the game."),s.a.createElement("button",{onClick:this.startGame},"Start Game")),!1===this.state.joinGameInput?null:s.a.createElement("div",{className:"joinGame"},s.a.createElement("input",{type:"text",name:"gameID",id:"gameID",placeholder:"Game ID",onChange:this.changeValue}),s.a.createElement("button",{onClick:this.searchGame},"Join"),s.a.createElement("br",null),s.a.createElement("div",null,s.a.createElement("br",null),s.a.createElement("br",null),this.state.bothJoined?s.a.createElement("h3",null,"Both players have already joined."):null,this.state.gameExists?null:s.a.createElement("h3",null,"Game doesn't exist. Create one to start playing."))),s.a.createElement("br",null))),s.a.createElement("div",{className:"footer"},s.a.createElement(u.b,{to:"/Info"},"Learn More"),s.a.createElement("p",null,"Designed and Developed by ",s.a.createElement("a",{href:"http://bit.ly/nikketan"},"Niketan Gulekar")," \xa92020")))}}]),a}(i.Component)),E=a(45),v=(a(56),a(44)),g=a.n(v),f=window.location.protocol+"//"+document.domain;""!==window.location.port&&(f+=":"+window.location.port+"/Game");var y=g.a.connect(f);function j(e){return s.a.createElement("button",{className:"square",onClick:e.onClick},e.value)}var k=function(e){Object(l.a)(a,e);var t=Object(o.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).state={squares:[],xIsNext:!0},r.getBoard=r.getBoard.bind(Object(p.a)(r)),r}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.getBoard(),y.on("moved",(function(t){return e.updateBoard(t)}))}},{key:"updateBoard",value:function(e){var t=e.position,a=this.state.squares;a[t]=e.player,this.setState({squares:a,xIsNext:"X"===e.next})}},{key:"getBoard",value:function(){var e=this;fetch("/api/fetch/game/"+this.props.game_id).then((function(e){return e.json()})).then((function(t){"success"===t.result?e.setState({squares:t.board,xIsNext:"X"===t.next}):"fail"===t.result&&(window.location.href="/")}))}},{key:"handleClick",value:function(e){var t=this.state.squares.slice();I(t)||t[e]||("create"===this.props.mode&&!0===this.state.xIsNext?(t[e]="X",this.setState({squares:t,xIsNext:!1}),y.emit("move",{player:t[e],position:e,game_id:this.props.game_id})):"join"===this.props.mode&&!1===this.state.xIsNext&&(t[e]="O",this.setState({squares:t,xIsNext:!0}),y.emit("move",{player:t[e],position:e,game_id:this.props.game_id})))}},{key:"renderSquare",value:function(e){var t=this;return s.a.createElement(j,{value:this.state.squares[e],onClick:function(){return t.handleClick(e)}})}},{key:"render",value:function(){var e,t=I(this.state.squares);return e=t||"Next player: "+(this.state.xIsNext?"create"===this.props.mode?"You":"X":"join"===this.props.mode?"You":"O"),s.a.createElement("div",{className:"game-board"},s.a.createElement("div",{className:"status"},s.a.createElement("h2",null,e)),s.a.createElement("div",{className:"board-area"},s.a.createElement("div",{className:"board-row"},this.renderSquare(0),this.renderSquare(1),this.renderSquare(2)),s.a.createElement("div",{className:"board-row"},this.renderSquare(3),this.renderSquare(4),this.renderSquare(5)),s.a.createElement("div",{className:"board-row"},this.renderSquare(6),this.renderSquare(7),this.renderSquare(8))),s.a.createElement("p",null,"Playing as : ",s.a.createElement("b",null,"create"===this.props.mode?"X":"O")))}}]),a}(s.a.Component),G=function(e){Object(l.a)(a,e);var t=Object(o.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"game"},s.a.createElement(k,{game_id:this.props.game_id,mode:this.props.mode}))}}]),a}(s.a.Component);function I(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],a=0;a<t.length;a++){var n=Object(E.a)(t[a],3),r=n[0],o=n[1],l=n[2];if(e[r]&&e[r]===e[o]&&e[r]===e[l])return"Winner :"+e[r]}return!1===e.includes(null)?"Game Tied":null}var O=function(e){Object(l.a)(a,e);var t=Object(o.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).state={online:0},r}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this;void 0!==this.props.location.state&&y.emit("join",{game_id:this.props.location.state.gameID,player:"create"===this.props.location.state.mode?"X":"O"}),y.on("connected",(function(t){return e.connected(t)})),y.on("disconnected",(function(t){return e.connected(t)}))}},{key:"connected",value:function(e){this.setState({online:e.online.length})}},{key:"componentWillUnmount",value:function(){void 0!==this.props.location.state&&y.emit("leave",{game_id:this.props.location.state.gameID,player:"create"===this.props.location.state.mode?"X":"O"})}},{key:"render",value:function(){return void 0===this.props.location.state?s.a.createElement(h.a,{to:"/"}):s.a.createElement("div",{className:"window"},s.a.createElement(u.b,{to:"/",className:"goHome"},"Go Home"),s.a.createElement("p",{className:"online"},"Joined : ",this.state.online," "),s.a.createElement("div",{className:"parent"},s.a.createElement(G,{game_id:this.props.location.state.gameID,mode:this.props.location.state.mode})),s.a.createElement("p",{className:"gameID_Info"},"Game : ",this.props.location.state.gameID))}}]),a}(s.a.Component),N=(a(88),function(e){Object(l.a)(a,e);var t=Object(o.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(u.b,{to:"/"},"Go Home"),s.a.createElement("div",{className:"parent"},s.a.createElement("div",{className:"Info"},s.a.createElement(u.b,{to:"/",className:"title"},s.a.createElement("h1",null,"Tic-Tac-Toe",s.a.createElement("sup",null,"Online"))),s.a.createElement("div",{className:"content"},s.a.createElement("p",null,s.a.createElement("b",null,"How was this built ?"),s.a.createElement("br",null),"Using ",s.a.createElement("b",null,"Python")," along with ",s.a.createElement("b",null,"Flask")," MicroFramework for the Server Side Handling. And ",s.a.createElement("b",null,"React")," ofcourse.",s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("b",null,"Why ?"),s.a.createElement("br",null),"Because why not ?",s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("b",null,"Wanna contribute ?"),s.a.createElement("br",null),s.a.createElement("a",{href:"https://github.com/NiketanG/tic-tac-toe-online"},"Github Repo"),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("a",{href:"mailto:nikegulekar@gmail.com"},"Contact Me"))))),s.a.createElement("div",{className:"footer"},s.a.createElement("p",null,"Designed and Developed by ",s.a.createElement("a",{href:"http://bit.ly/nikketan"},"Niketan Gulekar"),"  \xa92020")))}}]),a}(i.Component)),w=Object(d.a)(),S=function(e){Object(l.a)(a,e);var t=Object(o.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return s.a.createElement(u.a,null,s.a.createElement(h.d,null,s.a.createElement(h.b,{path:"/Game",component:O}),s.a.createElement(h.b,{path:"/Info",component:N}),s.a.createElement(h.b,{path:"/",component:b})))}}]),a}(i.Component);m.a.render(s.a.createElement(h.c,{history:w},s.a.createElement(S,{history:w})),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[46,1,2]]]);
//# sourceMappingURL=main.1b6f5def.chunk.js.map