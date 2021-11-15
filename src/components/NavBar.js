import React from 'react'

const NavBar = ({totalCounters}) => {
    return (
        <div>
            <nav className="navbar navbar-light bg-light">
                <div className="navbar-brand">
                    <i className="fa fa-shopping-cart fa-lg m-2" />
                    <span className="badge badge-pill badge-info m-2" style={{ width: 50}}> {totalCounters} </span>
                    Items
                </div>
            </nav> 
        </div>
    )
}

export default NavBar

