const React = require('react');

class NewShow extends React.Component {
    render() {
        return (
            <div>
                <h1>Create New Show</h1>

                <form>
                    Name: <input type="text" name="name"/>
                    <br/>
                    Year: <input type="text" name="year"/>
                    <br/>
                    Is favorite? <input type="checkbox" name="isFavorite"/>
                    <br/>
                    <inpur type="submit" value="Create new show"/>
                </form>
            </div>

        )
    }
}

module.exports = NewShow;