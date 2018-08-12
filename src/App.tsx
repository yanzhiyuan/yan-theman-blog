import * as React from 'react';
import './App.css';
import AppBackground from './component/AppBackground';
import 'typeface-cabin-sketch';
import Typography from '@material-ui/core/Typography';
import DropdownTab from './component/DropdownTab';
import {Button, createMuiTheme, Paper } from '../node_modules/@material-ui/core';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
  }
});

interface IAppState {
  selectedTab: string;
}

class App extends React.Component<any,IAppState> {
  public constructor(props:any){
    super(props);
    this.state = {
      selectedTab: '',
    }
  }

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
          toggleTab={(tab:string)=>{
            this.setState({
              selectedTab: this.state.selectedTab === tab? '':tab,
            });
          }}
        />
      </div>
      <div
        style={{
          transition: theme.transitions.create(['flex-grow'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
          display: 'flex',
          justifyContent: 'center',
          flexGrow: this.state.selectedTab.length > 0 ? 0.8 : 0.001,
          flexBasis:'0',
        }}
      >
        <Paper style={{background:'rgba(0,0,0,0.5)', width:'70vw'}}>
          detail panel
        </Paper>
      </div>

      </div>
    );
  }
}

export default App;
