const React = require("react");

class Show extends React.Component {
  render() {
    const { tvshow } = this.props; // we access our props
    const { url } = this.props;
    console.log(url);
    return (
      <div>
        <h1>Show Page</h1>
        {
            url === '/tvshows' ? <div>
            <h2>
              The ${tvshow.title} came out in {tvshow.year}.
            </h2>
            <p>
              {tvshow.isFavorite
                ? `${tvshow.title} is one of my favorite tv shows.`
                : null}
            </p>
          </div> : null
        }
      </div>
    );
  }
}

module.exports = Show;
