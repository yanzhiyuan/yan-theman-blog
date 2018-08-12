import * as React from 'react';
import './App.css';
import AppBackground from './component/AppBackground';
import 'typeface-cabin-sketch';
import Typography from '@material-ui/core/Typography';
import DropdownTab from './component/DropdownTab';
import {Button } from '../node_modules/@material-ui/core';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';


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
       <div style={{textAlign:'center'}}>
       <div style={{display:'flex', justifyContent:'flex-end'}}>
         <Button>
          <Typography style={{fontFamily:'Cabin Sketch', color:'white'}} variant="button">
            Contact
          </Typography>
           <MailOutlineIcon style={{color:'white'}}/>
         </Button>
         <Button>
          <Typography style={{fontFamily:'Cabin Sketch', color:'white'}} variant="button">
            CV
          </Typography>
           <FormatListBulletedIcon style={{color:'white'}}/>
         </Button>
       </div>   
        <Typography style={{fontFamily:'Cabin Sketch', color:'white'}} variant="display4">
          Yan, Zhi Yuan
        </Typography>
        <Typography style={{color:'white', textAlign:'center'}} variant="body1">
          Hi, my name is Yan. blah blah blah blah
        </Typography>
      </div>
      <div>
        <DropdownTab
          tabs={['Tech', 'Experience', 'etc']}
          toggleTab={(tab:string)=>{if(tab){return;}}}
        />
      </div>
      </div>
    );
  }
}

export default App;
