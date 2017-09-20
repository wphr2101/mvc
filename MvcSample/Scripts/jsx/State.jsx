var LightningCounter = React.createClass({
    getInitialState: function () {
        return {
            strikes: 0
        };
    },
    timerTick: function () {
        this.setState({
            strikes: this.state.strikes + 100
        });
    },
    componentDidMount: function () {
        setInterval(this.timerTick, 1000);
    },
    render: function () {
        var counterStyle = {
            color: "#66FFFF",
            fontSize: 50
        };
        var count = this.state.strikes.toLocaleString();
        return (
            <h1 style={counterStyle}>{count}</h1>
        );            
    }
});

var LightningCounterDisplay = React.createClass({
    render: function () {
        //var commonStyle = {
        //    margin: 0,
        //    padding: 0
        //}
        var divStyle = {
            width: 250,
            textAlign: "center",
            backgroundColor: "#020202",
            padding: 40,
            fontFamily: "sans-serif",
            color: "#999999",
            borderRadius: 10
        };
        var textStyles = {
            emphasis: {
                fontSize: 38,
                margin: 0,
                padding: 0
            },
            smallEmphasis: {
                margin: 0,
                padding: 0
            },
            small: {
                fontSize: 17,
                opacity: 0.5,
                margin: 0,
                padding: 0
            }
        }
        return(
            <div style={divStyle}>
                <LightningCounter />
                <h2 style={textStyles.smallEmphasis}>LIGHTNING STRIKES</h2>
                <h2 style={textStyles.emphasis}>WORLDWIDE</h2>
                <h2 style={textStyles.small}>(since you loaded this example)</h2>
            </div>
        );            
    }
});

React.render(
    <LightningCounterDisplay />,
    document.querySelector("#content")
);