const React = require("react");

class Index extends React.Component {
  render() {
    const { tvshows } = this.props; // we access our props;

    return (
      <div>
        <h1>TV Show Page</h1>

        <ul>
          {tvshows.map((tvshow, idx) => {
            return (
              <li key={tvshow.title}>
                The <a href={`/tvshows/${idx}`}>{tvshow.title}</a>
                came out on {tvshow.year} <br/>
                {tvshow.isFavorite ? `${tvshow.title} is one of my favorite tv shows.`: null}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
};
module.exports = Index;
