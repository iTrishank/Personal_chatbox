import React, { Fragment, useContext } from 'react';
import { ListGroup } from 'react-bootstrap';
import ScrollAnimation from 'react-animate-on-scroll';
import { ChooseContext } from './Dashboard';
 
export default function ChatList() { 
    const chooseContext = useContext(ChooseContext); 

    const userList = [
        {
            id: 1,
            name:'Trishank',
            online: true 
        },
        {
            id: 2,
            name:'Dima',
            online: false 
        },
        {
            id: 3,
            name:'Shubhi',
            online: true 
        },
        {
            id: 4,
            name:'Sanya',
            online: true 
        },
        {
            id: 5,
            name:'Maria',
            online: false 
        },
        {
            id: 6,
            name:'Alex',
            online: true, 
        }
    ];

    const handleCheck = (chosenUser) => {
        chooseContext.chooseDispatch({type:'chosen', value: chosenUser})
    }

    return (
        <Fragment> 
            <div className="bg-dark border rounded m-2 pt-2"> 
                <ScrollAnimation animateIn='zoomIn' animateOut='zoomOut'>
                    <h5 className="text-light">So who do you wanne chat with? )) </h5> 
                </ScrollAnimation> 
                <ListGroup> 
                {   
                    userList.map( (user, index) => ( 
                        <ListGroup.Item 
                            key={index} 
                            dataid={user.id}  
                            action
                            onClick={() => handleCheck(user)}
                            disabled={user.online ? false : true}  
                            variant="success" 
                        > 
                        
                            {user.name}
                            {user.online ? " is online." : " is offline."}
                        </ListGroup.Item>
                    ))
                } 
                </ListGroup>  
            </div> 
        </Fragment> 
    )
} 
