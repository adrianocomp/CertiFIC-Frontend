import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';


import api from '../../services/Api';

 

export default function CreateDairy(){
    
    const [certId, setcertId] = useState('');
    const [student_name, setStudent_name] = useState('');
    const [course_name , setCourse_name] = useState('');
    const [conclusion_date, setConclusion_date] = useState('');
    

    const history = useHistory();
    const UserId = localStorage.getItem('userId');

    async function handleRegister(e){
        e.preventDefault();
        
        const data = {
            certId,
            student_name,
            course_name,
            conclusion_date,
            
        };
        
        try{
            await api.post('/certificate/create', data, {
                headers: {
                    Authorization: UserId,
                }});

            alert('Certificado Cadastrado com sucesso!');
            history.push('/Profiles');
            
        } catch(err){
            alert('Erro no cadastro, ou você está inserindo um certificado já cadastrado ou existe algum erro no sistema. tente novamente');
        }
    }

    function handleLogout(){
        localStorage.clear();
        history.push('/');
    }
    
    return (
        <div>
            <div>  
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <a className="navbar-brand" href="#">Certific +IFMG</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/certificate/add">CADASTRAR CERTIFICADO<span class="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item active">
                                <Link type="button" class="nav-link" onClick={()=> {handleLogout()}}>LOGOUT</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                </div>
        <div className="container-fluid d-flex flex-column align-items-center justify-content-center">   
            <div className="d-flex flex-column align-items-center justify-content-center">   
                
                <h3 className="mt-5">Cadastro do Certificado</h3>
                <form className="border rounded shadow pl-3 pr-3 pb-3 pt-3 mt-4"onSubmit={handleRegister}>
                    <div className="row">
                    <div className="col-sm form-group mb-3">
                    <input
                        required
                        className = "form-control"
                        placeholder="Id do certificado"
                        value={certId}
                        onChange={e=> setcertId(e.target.value)}
                    />
                    </div>
                    <div className="col-sm form-group mb-3">
                    <input
                        required
                        class = "form-control"
                        placeholder="Nome do Estudante"
                        value={student_name}
                        onChange={e=> setStudent_name(e.target.value)}
                    />
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-sm form-group mb-3">
                    <input
                        required
                        className= "form-control"
                        placeholder="Nome do Curso"
                        value={course_name}
                        onChange={e=> setCourse_name(e.target.value)}
                    />
                    </div>
                    <div className="col-sm form-group mb-3">
                    <input
                        required
                        className= "form-control"
                        placeholder="Data de Conclusão do curso"
                        value={conclusion_date}
                        onChange={e=> setConclusion_date(e.target.value)}
                    />
                    </div>
                    </div>
                    <div className="d-flex justify-content-center">
                    <button className="btn btn-primary" type="submit">Cadastrar</button>
                    </div>
                </form>
                    <div className="d-flex flex-column justify-content-center">
                        <Link className="btn btn-link" to="/Profiles">Voltar para o menu inicial</Link>
                    </div>
            </div>
        </div>
        </div>
    );
}