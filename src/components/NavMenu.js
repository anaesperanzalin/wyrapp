import React from "react";


class NavMenu extends React.Component{
    render(){
        return(
            <div class="ui secondary pointing menu">

                <a className="item">Home   </a>
                <a className="item">Leaderboard   </a>
                <a className="item">Create new poll   </a>
                <div className="right menu"> 
                     <a className="item" >Hi //username>    </a>
                    <a className="item" >Logout    </a>
                
                </div>
                  

            </div>

        )
    }
}

export default NavMenu;