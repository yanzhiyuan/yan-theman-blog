import * as React from 'react';
import './App.css';
import AppBackground from './component/AppBackground';
import 'typeface-cabin-sketch';
import Typography from '@material-ui/core/Typography';
import DropdownTab from './component/DropdownTab';
import {Button, Paper, Collapse, createMuiTheme, MuiThemeProvider } from '../node_modules/@material-ui/core';
// import MailOutlineIcon from '@material-ui/icons/MailOutline';
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
      {name:'ZeroMQ', iconName:'zeromq'},
      {name:'Jenkins', iconName:'jenkins'}
    ]);
    this.techSkill.set('What I have been used before', [
      {name:'iOS / Cocoa Touch', iconName:'ios'},
      {name:'Objective-C', iconName:'objectiveC'},
      {name:'Swift', iconName:'swift'},
      {name:'Angular', iconName:'angular'},
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
        height:'100%', 
        width:'100vw', 
        color:'white', 
        display:'flex',
        flexDirection:'column',  
        backgroundColor:'#222',
        overflowX:'auto',
        textAlign:'center'
      }}>
       <AppBackground/>   
       <div style={{display:'flex', justifyContent:'flex-end'}}>
         {/* <Button>
          <Typography style={{fontFamily:'Cabin Sketch'}} variant="button">
            Contact
          </Typography>
           <MailOutlineIcon />
         </Button> */}
         <Button
          onClick={()=>{
            let link = document.createElement('a');
            link.href = '/resume_Yan.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          }}
         >
          <Typography style={{fontFamily:'Cabin Sketch'}} variant="button">
            CV
          </Typography>
           <FormatListBulletedIcon/>
         </Button>
       </div>   
       <div style={{display:'flex', flexDirection:'column'}}>
        <Typography style={{fontFamily:'Cabin Sketch', flex:'1'}} variant="display4">
          Yan, Zhi Yuan
        </Typography>
        </div>
        <div style={{display:'flex', justifyContent:'center', padding:'24px'}}>
        <Typography style={{textAlign:'center', width:'70%', flex:'1'}} variant="subheading">
          Enthusiastic full stack software engineer, 12 years hand on experience in software development 
          and 7 years experince in Financial Sector. I am currently working and living in Hong Kong. 
        </Typography>
        </div>
      <div style={{display:'flex'}}>
        <DropdownTab
          tabs={['Technical Skill', 'Expertise', 'What Else']}
          toggleTab={(tab:string)=>{
            this.setState({
              selectedTab: this.state.selectedTab === tab? '':tab,
            });
          }}
        />
      </div>
      <div style={{display:'flex'}}>
      <Collapse in={this.state.selectedTab.length > 0} style={{display:'flex', flex:'1', justifyContent:'center'}}>
        <Paper style={{background:'rgba(0,0,0,0.5)', width:'70vw', marginBottom:'20px', flex:'1', display:'flex'}}>
          {this.state.selectedTab === 'Technical Skill' && 
            <ChipList
              chipList={this.techSkill}
            />
          }
          {
            this.state.selectedTab === 'Expertise' &&
            <div style={{paddingTop:'24px', paddingBottom:'24px', textAlign:'left', flex:'1'}}>
              <ul>
                <li style={{paddingTop:'16px'}}>
                  Chartered Financial Analyst (CFA)
                </li>
                <li style={{paddingTop:'16px'}}>
                  Cash Equity Algorithm Trading, APAC Markets
                </li>
                <li style={{paddingTop:'16px'}}>
                  Buy Side Portfolio Management Tools 
                </li>
                <li style={{paddingTop:'16px'}}>
                  Investmnet Risk Management Tools
                </li>
                <li style={{paddingTop:'16px'}}>
                  Equity Valuation Models and Micro Market Structure
                </li>
                <li style={{paddingTop:'16px'}}>
                  Anti Money Laundry (AML) and Anti Fraud system for Financial Insititue
                </li>
                <li style={{paddingTop:'16px'}}> 
                  Developmnet Methodologies: DevOps, Agile, Test-Driven  
                </li>
              </ul>
            </div>
          }
          {
            
              this.state.selectedTab === 'What Else' &&
              <div style={{paddingTop:'24px', paddingBottom:'24px', textAlign:'left', flex:'1'}}>
                <ul>
                  <li style={{paddingTop:'16px'}}>
                    I am a dragon boat paddlers
                  </li>
                  <li style={{paddingTop:'16px'}}>
                    I also like Jogging. Last year my best Half Marathon record was 1:49:05 and best 10km was 49:44 
                  </li>
                  <li style={{paddingTop:'16px'}}>
                    I play video games, Civilization, X-COM, FIFA and Clash Royale.  
                  </li>
                  <li style={{paddingTop:'16px'}}>
                    I like classical music, my faviourite composer are Mozart and Brahms. 
                  </li>            
                </ul>
              </div>
            
          }
        </Paper>
      </Collapse>
      </div>
      </div>
          
      </MuiThemeProvider>
    );
  }
}

export default App;
