import React, {useState, useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom';


import api from '../../services/Api';

export default function CertificateProfile(){
    
  

    const CertificateId = localStorage.getItem('certId');
    const StudentName = localStorage.getItem('student_name');
    const CourseName = localStorage.getItem('course_name');
    const ConclusionDate = localStorage.getItem('conclusion_date');
    
    //variables for pagination
    
    var today = new Date();

    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

    var today = new Date();

    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    
    return(
        <div className="container-fluid d-flex align-items-center justify-content-center" id="root">
                
        <div>
            <h2 className="mt-5">A Pró-reitoria de Extensão do Instituto Federal de Minas Gerais informa que</h2>
            
            <h4 className="mt-3">O certificado de Nº {CertificateId} é um certificado válido obtido na plataforma +IFMG.</h4>      
            <h4 className="mt-3">Obtido pelo estudante {StudentName} em {ConclusionDate.replace(/-/g, '\/').replace(/T.+/, '')}.</h4>           
            <h4 className="mt-3">Pela conclusão do curso de {CourseName}.</h4>

            <p className="mt-5">Consulta válida realizada no dia {new Intl.DateTimeFormat("pt-BR").format(new Date(date))} às {time}.</p>
        </div>
    </div> 
    );

}

    
