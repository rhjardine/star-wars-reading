import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom"



export const Card =({item,resource}) => {
    return (

  <div className="tab-pane p-3" role="tabpanel" aria-labelledby="profile-tab" tabIndex="0">

         <div className="card" style={{width: "18rem"}}>
            <img src={`https://starwars-visualguide.com/assets/img/${resource == "people" ? "characters" : resource }/${item.uid}.jpg`} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">{item.films}</p>
                <Link to={`/single/people/${item.uid}`} className="btn btn-primary">Learn more!</Link>
            </div>
         </div>
</div>
    );
};









Card.propTypes = {

    item: PropTypes.object

};