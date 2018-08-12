import * as React from 'react';
import './App.css';
import AppBackground from './component/appBackground';
import 'typeface-cabin-sketch';
import Typography from '@material-ui/core/Typography';

class App extends React.Component {
  public render() {
    return (
      <div style={{
        height:'100vh', 
        width:'100vw', 
        color:'white', 
        backgroundColor:'#222', 
        display:'flex',
        flexDirection:'column'  
      }}>
       <AppBackground/>      
       <div style={{flex:1, textAlign:'center'}}>
        <Typography style={{fontFamily:'Cabin Sketch', color:'white'}} variant="display4">
          Yan, Zhi Yuan
        </Typography>
       </div>
      </div>
    );
  }
}

export default App;
