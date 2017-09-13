//var SayHello = React.createClass({
//    render: function(){
//        return(
//            <p style={sayHelloStyle}>Hello, {this.props.greetingTarget}!</p>
//        );
//    }
//});
var SayHello = React.createClass({
    render: function() {
        var sayHelloStyle = {
            padding: 10,
            margin: 10,
            backgroundColor: this.props.bgcolor,
            color: "#333",
            display: "inline-block",
            fontFamily: "monospace",
            fontSize: 32,
            textAlign: "center"
        };
 
        return (
            <p style={sayHelloStyle}>Hello, {this.props.greetingTarget}!</p>
        );
    }
});

var Buttonify = React.createClass({
    render: function(){
        return(
            <button type={this.props.behavior}>{this.props.children}</button>
        );
    }
});

React.render(
    <div>
        <SayHello greetingTarget="John" bgcolor="#58B3FF"></SayHello>
        <SayHello greetingTarget="Peter" bgcolor="#FF605F"></SayHello>
        <SayHello greetingTarget="Sally" bgcolor="#FFD52E"></SayHello>
        <SayHello greetingTarget="Andrew" bgcolor="#49DD8E"></SayHello>
        <SayHello greetingTarget="Leon" bgcolor="#AE99FF"></SayHello>
        <SayHello greetingTarget="Katie" bgcolor="#BFAA00"></SayHello>
        <SayHello greetingTarget="James" bgcolor="#C0BB11"></SayHello>
        <Buttonify behavior="Submit">SEND DATA</Buttonify>
    </div>,
    document.getElementById('content')
);