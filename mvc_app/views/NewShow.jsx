const React = require("react");

class NewShow extends React.Component {
  render() {
    return (
      <div>
        <h1>Create New Show</h1>

        <form action="/tvshows" method="POST">
          Name: <input type="text" name="name" />
          <br />
          Year: <input type="text" name="year" />
          <br />
          Is favorite? <input type="checkbox" name="isFavorite" />
          <br />
          <input type="submit" value="Create new show" />
        </form>
      </div>
    );
  }
}

module.exports = NewShow;
