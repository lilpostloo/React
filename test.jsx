

var ButtonForm = React.createClass({
    render: function(){
        return (
            <div>
                <h3>Click the button</h3>
                <input type="submit" />
            </div>
        );
    }
});

var App = React.createClass({
    render: function(){
        return (
            <div>
                <h1> Welcome to my button app!</h1>
                <ButtonForm />
            </div>
        );
    }
});

React.render(<App />,  document.getElementById("content"));