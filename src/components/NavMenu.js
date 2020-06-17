import React from "react";


class NavMenu extends React.Component{
    render(){
        return(
            <div class="ui secondary pointing menu">

                <a className="item">Home   </a>
                <a className="item">Leaderboard   </a>
                <div className="right menu"> 
                    <a className="item" >Logout    </a>
                
                </div>
                  

            </div>

        )
    }
}

export default NavMenu;