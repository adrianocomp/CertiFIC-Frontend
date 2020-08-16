import React, {useState, useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom';



import api from '../../services/Api';

export default function Profiles(){
    
    const history = useHistory();

    function handleLogout(){
        localStorage.clear();
        history.push('/');
    }
       
    return(
        <div>
        <div>  
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
                <a class="navbar-brand" href="#">Certific +IFMG</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item active">
                                <Link class="nav-link" to="/certificate/add">CADASTRAR CERTIFICADO<span class="sr-only">(current)</span></Link>
                            </li>
                            <li class="nav-item active">
                                <Link type="button" class="nav-link" onClick={()=> {handleLogout()}}>LOGOUT</Link>
                            </li>
                        </ul>
                    </div>
        </nav>
                
            </div>
        </div>
           
    );

}

    
/*<div className="pagination">
          <span>&laquo;</span>
          <span className="active">1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
          </div>*/