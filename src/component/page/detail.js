import React,{Component} from 'react';

class Detail extends Component{
    skipToHome(){
        this.props.history.push('/role');
    }
    render(){
        return <div>
            <span>this is About</span>
            <button onClick={this.skipToHome.bind(this)}>
                跳转的home
            </button>
        </div>
    }
}

export default Detail;