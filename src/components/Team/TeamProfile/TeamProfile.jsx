import React from 'react';

export default props =>(
    <div class="container">
        <div class="row">
            <div class="col-sm">
                <img scr={props.altImg} className="img-profile"/>
                <figcaption className = "figImg-profile"/>
            </div>
         </div>
    </div>
)