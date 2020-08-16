import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';

import api from '../../services/Api';

//import DairyImg from '../../assets/dairy_farm.jpg';
import LogoImg from '../../assets/logo_ifmg.png';

export default function CertificateSearch(){

    localStorage.clear();

    const [certId, setcertId] = useState('');

    const history = useHistory();
    
    function handleSearch(e){
        
        async function validateSearch() {
            e.preventDefault();
            
            try {
                const response = await api.get('/certificate/search', {
                    headers: { certId }
                });
                if(response.data === null){
                    alert('Certificado não encontrado, digite o certificado corretamente ou este certificado não é válido.');
                }
                if (response) {
                    
                    localStorage.setItem('certId', response.data.certId);
                    localStorage.setItem('student_name', response.data.student_name);
                    localStorage.setItem('course_name', response.data.course_name);
                    localStorage.setItem('conclusion_date', response.data.conclusion_date);
                    
                    history.push('/certificate/profile');
                   
                }else if(response.data === null){
                    alert('Certificado não encontrado, digite o certificado corretamente ou este certificado não é válido.'); 
                }
            } catch (err) { 

            }
            
        }
    
        validateSearch();
    }
    
    return(
        <div className="container-fluid d-flex align-items-center justify-content-center h-100 bg-light">
            <div className="d-flex flex-column justify-content-center">
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <div className="card shadow p-2 animated" style={{ minWidth: '350px' }}>
					<div className="card-body">
						<div className="logo text-center mb-5">
                            <img src={LogoImg} alt="IFMG" height="100px" width="px" />
                            <p></p>
                            <link href='http://fonts.googleapis.com/css?family=Arvo' rel='stylesheet'  type='text/css'></link>
                            <h1 className="h1 handwrite">CertiFIC</h1>
                            <span className="h1 handwrite text-success">+</span><span h4 className="h4 handwrite text-success">IFMG</span>
                            <p></p>
                            <p>Validação de Certificado</p>
                        </div>
                        <form onSubmit={handleSearch}>
                            <div className="form-group mb-3">
                                <input
                                    
                                    required
                                    className="form-control"
                                    placeholder="Número do certificado"
                                    value={certId}
                                    onChange={e=> setcertId(e.target.value)}
                                />
                            </div>
                            
                            <div className="d-flex flex-column justify-content-center">
                                <button className="btn btn-primary" type="submit">Validar</button>    
                            </div>
                        </form>
                    </div>           
                </div>            
            </div>
        </div>
    )
}