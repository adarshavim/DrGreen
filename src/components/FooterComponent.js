import React from 'react';


function pageButton(noofpage){
    let x=[];
    for(let i=1;i<=noofpage;i++){
        x.push(i);
    }
    return x;
}


function Footer(props) {
   
    return(
    <div className="footer">
        <div className="container">
            <div className="row justify-content-center" style={{marginBottom:"20px"}} id="pagebar">
               {pageButton(Object.keys(props.diseases.diseases).length).map(count=>{
                   return (<><button>{count}</button></>)
               })}
            </div>
            <div className="row justify-content-center">             
                <div className="col-auto">
                    <p>© Copyright 2020 Doctor Green</p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Footer;