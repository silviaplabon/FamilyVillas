import React from 'react';
import { Row } from 'react-bootstrap';
import AgentsCard from '../AgentsCard/AgentsCard';
export const agentsData = [
    {
        id:'011',
        img:'https://i.ibb.co/t86VWBX/inhom022.jpg',
        name:'Nina Paulla',
        position:'Service Support'
    },
    {
        id:'022',
        img:'https://i.ibb.co/6gkDB7v/inhom021.jpg',
        name:'Andreas',
        position:'Marketing'
    },
    {
        id:'033',
        img:'https://i.ibb.co/gM2fcpg/inhom020.jpg',
        name:'Tom Wilson',
        position:'Agency'
    },
    {
        id:'044',
        img:'https://i.ibb.co/jZnydgt/foto-sushi-6anudmp-ILw4-unsplash.jpg',
        name:'Rennata',
        position:'Sales'
    }
]

const Agents = () => {
    return (
        <div className='pt-5 pb-5'>
            <div className='container-lg pb-5'>
                <div className='text-center fw-bold'>
                    <h5 style={{color:'#41adb7'}}>EXPERT PEOPLE</h5>
                    <h2 style={{color:'#000473'}}>Meet Our Agents</h2>
                </div>
                <Row>
                    {
                        agentsData.map(data => <AgentsCard key={data.id} agentData={data}/>)
                    }
                </Row>
            </div>
        </div>
    );
};

export default Agents;