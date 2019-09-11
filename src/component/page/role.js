import React,{Component} from 'react';

class Role extends Component{
    skipToHome(){
        this.props.history.push('/role');
    }
    render(){
        return <div>
            <span>this is About</span>
            
        </div>
    }
}

export default Role;