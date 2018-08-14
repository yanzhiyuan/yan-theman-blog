import * as React from 'react';
import './App.css';
import AppBackground from './component/AppBackground';
import 'typeface-cabin-sketch';
import Typography from '@material-ui/core/Typography';
import DropdownTab from './component/DropdownTab';
import {Button, Paper, Collapse } from '../node_modules/@material-ui/core';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import * as model from './model/PortfolioModel';
import ChipList from './component/ChipList';

// const theme = createMuiTheme({
//   palette: {
//     type: 'dark',
//   }
// });

interface IAppState {
  selectedTab: string;
}

class App extends React.Component<any,IAppState> {
  private techSkill:Map<string, model.TechSkill[]>;

  public constructor(props:any){
    super(props);
    this.state = {
      selectedTab: '',
    }

    this.techSkill = new Map<string, model.TechSkill[]>();
    this.techSkill.set('Database', [
      {name:'MongoDB', iconName:'mongoPng'}
    ]);
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
      <Collapse in={this.state.selectedTab.length > 0} style={{display:'flex', justifyContent:'center'}}>
        <Paper style={{background:'rgba(0,0,0,0.5)', width:'70vw', marginBottom:'20px', height:'70vh'}}>
          {this.state.selectedTab === 'Tech' && 
            <ChipList
              chipList={this.techSkill}
            />
          }
        </Paper>
      </Collapse>
      </div>
    );
  }
}

export default App;
