import React from "react";

class Detail extends React.Component {
//콘렌디 셋렌디
/*props.location.state에 
Movie에서 가져온 year, title, summary, poster, genres정보 있음*/
    render() {
        const { location } = this.props;
        if (location.state) {
        return (
      <div className="movie">
          <img className="movie__image" src={location.state.poster} alt={location.state.title} title={location.state.title} />
          <div className="movie__data">
            <h3 className="movie__title">{location.statetitle}</h3>
            <h5 className="movie__year">{location.stateyear}</h5>
            <h3 className="genres__genre">{location.state.genres}</h3>
            <p className="movie__summary">{location.state.summary}</p>
          </div>
      </div> ) 
        } else {
          return null;  
        }
    }

    componentDidMount() {
        const { location, history } = this.props;
        if(location.state === undefined) {
          history.push("/");
        }
}
}
export default Detail;