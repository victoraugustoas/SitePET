import React from 'react'
import './Footer.css'


export default props => (
    <footer>
        <div className="container">
             <div class="row">
                <div class="col">
                    <h3>Onde ficamos?</h3>
                    <p>No 2° andar do bloco CPD, após o ICOMP (Instituto de Computação) Se quiser fazer uma visita, nos encontre na última sala do bloco do CPD.</p>
                </div>
                <div class="col">
                </div>
            </div>
    </div>
        <div class="container">
            <div class="row">
                <div class="col-9 ">
                    <h3>Fale com a gente!</h3>
                    <p>Nossas redes sociais</p>
                </div>
        
                    <div class="col">
                        <i className="fab fa-facebook"></i>
                        <h4><a href="https://www.facebook.com/petcomputacaoufam/"> 
                        @petcomputacaoufam
                        </a></h4>
                    </div>

                     <div class="col">
                        <i class="fab fa-whatsapp"></i>
                        <h4><a href="https://www.facebook.com/petcomputacaoufam/"> 
                        @petcomputacaoufam
                        </a></h4>
                    </div>

                    <div class="col">
                        <i class="fab fa-instagram"></i>
                        <h4><a href="https://www.facebook.com/petcomputacaoufam/"> 
                        @petcomputacaoufam
                        </a></h4>
                    </div>
                </div>
            </div>

        <div className="RodapeDoPe">
                <h5>Copyright &copy; 2019</h5>  
                </div>
    </footer>
)