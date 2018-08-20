import * as React from 'react';
import './App.css';
import AppBackground from './component/AppBackground';
import 'typeface-cabin-sketch';
import Typography from '@material-ui/core/Typography';
import DropdownTab from './component/DropdownTab';
import {Button, Paper, Collapse, createMuiTheme, MuiThemeProvider } from '../node_modules/@material-ui/core';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import * as model from './model/PortfolioModel';
import ChipList from './component/ChipList';
import grey from '@material-ui/core/colors/grey';
import blueGrey from '@material-ui/core/colors/blueGrey';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: grey,
    secondary: blueGrey,
  }
});

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
    this.techSkill.set('What I am working with now', [
      {name:'C#', iconName:'cSharp'},
      {name:'TypeScript', iconName:'typescript'},
      {name:'C++', iconName:'cpp'},
      {name:'Dot Net Core', iconName:'dotNetCore'},
      {name:'.Net Framework', iconName:'dotNet'},
      {name:'React', iconName:'react'},
      {name:'MongoDB', iconName:'mongoPng'},
      {name:'ZeroMQ', iconName:'zeromq'}

    ]);
    this.techSkill.set('What I have been used before', [
      {name:'iOS / Cocoa Touch', iconName:'ios'},
      {name:'Objective-C', iconName:'objectiveC'},
      {name:'Swift', iconName:'swift'},
      {name:'Go lang', iconName:'goLang'},
      {name:'Sql Server', iconName:'sqlServer'},
      {name:'Oracle DB', iconName:'oracle'},
      {name:'R', iconName:'R'}
    ]);
  }

  public render() {
    return (
      <MuiThemeProvider theme={theme}>
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
          <Typography style={{fontFamily:'Cabin Sketch'}} variant="button">
            Contact
          </Typography>
           <MailOutlineIcon />
         </Button>
         <Button>
          <Typography style={{fontFamily:'Cabin Sketch'}} variant="button">
            CV
          </Typography>
           <FormatListBulletedIcon/>
         </Button>
       </div>   
        <Typography style={{fontFamily:'Cabin Sketch'}} variant="display4">
          Yan, Zhi Yuan
        </Typography>
        <Typography style={{textAlign:'center'}} variant="body1">
          Hi, my name is Yan. blah blah blah blah
        </Typography>
      </div>
      <div>
        <DropdownTab
          tabs={['Technical Skill', 'Expertise', 'etc']}
          toggleTab={(tab:string)=>{
            this.setState({
              selectedTab: this.state.selectedTab === tab? '':tab,
            });
          }}
        />
      </div>
      <Collapse in={this.state.selectedTab.length > 0} style={{display:'flex', justifyContent:'center'}}>
        <Paper style={{background:'rgba(0,0,0,0.5)', width:'70vw', marginBottom:'20px', height:'70vh'}}>
          {this.state.selectedTab === 'Technical Skill' && 
            <ChipList
              chipList={this.techSkill}
            />
          }
          {
            this.state.selectedTab === 'Expertise' &&
            <div style={{paddingTop:'24px'}}>
              <ul>
                <li>
                  Chartered Financial Analyst (CFA)
                </li>
                <li>
                  Cash Equity Algorithm Trading, APAC Markets
                </li>
                <li>
                  Buy Side Portfolio Management Tools 
                </li>
                <li>
                  Investmnet Risk Management Tools
                </li>
                <li>
                  Equity Valuation Models and Micro Market Structure
                </li>
                <li>
                  Anti Money Laundry (AML) and Anti Fraud system for Financial Insititue
                </li>
                <li>
                  Developmnet Methodologies: DevOps, Agile, Test-Driven  
                </li>
              </ul>
            </div>
          }
        </Paper>
      </Collapse>
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
