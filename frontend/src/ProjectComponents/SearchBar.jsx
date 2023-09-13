import React from 'react'
import '../ProjectCSS/styles.css'

const SearchBar = () => {
  return (
    <div className="container">
	<div className="row">
	    <div className="col-12"><h2>Search your Regex</h2></div>
	    <div className="col-12">
    	    <div id="custom-search-input">
                <div className="input-group">
                    <input type="text" className="search-query form-control" placeholder="Search" />
                    <span className="input-group-btn">
                        <button type="button" disabled>
                            <span className="fa fa-search"></span>
                        </button>
                    </span>
                </div>
            </div>
        </div>
	</div>
</div>
  )
}

export default SearchBar