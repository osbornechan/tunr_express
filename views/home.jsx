var React = require("react");

class Home extends React.Component {
  render() {
    return (
      <html>
        <head>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossOrigin="anonymous"/>
        </head>
        <body>
            <br/>
            <div className='container'>
                <h1 className='text-center'>Tunr</h1>
                <h5 className='text-center'>The world's #1 music catalog/ player</h5>
                <br/>
                <div className='row justify-content-center'>
                    <div className='col 2 d-flex justify-content-end'>
                        <button className='btn btn-primary'><a href='/artists/new' className='text-white text-decoration-none'>New Artist</a></button>
                    </div>
                    <div className='col 2'>
                        <button className='btn btn-primary'><a href='/artists/songs/new' className='text-white text-decoration-none'>New Song</a></button>
                    </div>
                </div>
                <br/>
                <div className='row justify-content-center'>
                    <div className='col 2 d-flex justify-content-end'>
                        <button className='btn btn-warning'><a href='/artists/list' className='text-dark text-decoration-none'>List of Artists</a></button>
                    </div>
                    <div className='col 2'>
                        <button className='btn btn-warning'><a href='/artists/songs/' className='text-dark text-decoration-none'>List of Songs</a></button>
                    </div>
                </div>
            </div>
        </body>
      </html>
    );
  }
}

module.exports = Home;