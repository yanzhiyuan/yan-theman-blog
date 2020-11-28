import * as React from 'react';
import Particles from 'react-particles-js';

export default class AppBackground extends React.Component{
    
    public shouldComponentUpdate(){
        return false;
    }

    public render(){
        return(
            <Particles
                style={{width:'100%', height:'100%', left:'0', top:'0', position:'absolute'}}
                params={{particles: {number:{value:80}}}}
            />
        );
    }

}