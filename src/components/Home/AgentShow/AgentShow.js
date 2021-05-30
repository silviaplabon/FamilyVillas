import React from 'react';

const AgentShow = (props) => {
    const {user,image,email,mobile}=props.agent;
    return (
        <div className="col-md-12 p-1 mt-2 card shadow-lg" style={{borderRadius:'0.85rem'}}>
            <div className="row">
                <div className="col-md-3 col-sm-3">
                    <img src={image} className="img-fluid p-2" style={{height:'70px',width:'70px',borderRadius:'50%'}} />
                </div>
                <div className="col-md-9 col-sm-9">
                    <h6 className="mt-1">{user}</h6>
                    <div className="">
                        <p className="me-1 my-0">{mobile}</p>
                        <p className="ms-1 my-0">{email}</p>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default AgentShow;