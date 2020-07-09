import React from "react";

function Search({ handleOnChange, users }) {
    return ( 
        <div>
            <form> 
                <input
                   
                    type="Search"
                    placeholder="Search Here"
                    onChange={(event) => handleOnChange(event)} 
                    >
                </input>
            </form>
        </div>
    );
}

export default Search;