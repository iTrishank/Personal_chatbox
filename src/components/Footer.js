import React, {PureComponent} from 'react';   
import {Container} from 'react-bootstrap';   

class Footer extends PureComponent {
    render() {  
        return (  
            <div className="mt-4 bg-dark">
                <Container className="p-4"> 
                    <span className="text-light">
                        Created by Trishank Singh
                    </span>
                </Container>
            </div>
        )
    }
}

export default Footer;
 