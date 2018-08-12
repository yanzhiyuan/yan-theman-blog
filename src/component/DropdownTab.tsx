import * as React from 'react';
import Button from '@material-ui/core/Button';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import { Typography } from '../../node_modules/@material-ui/core';


interface IDropDownTabProps{
    tabs: string[];
    toggleTab: (tab:string)=>void;
}

interface IDropdownTabState{
    selectedTab: string;
}

export default class DropdownTab extends React.Component<IDropDownTabProps, IDropdownTabState>{
    public constructor(props:IDropDownTabProps){
        super(props);
        this.state = {
            selectedTab: "",
        }
    }

    public render(){
        return(
            <div style={{display:'flex', justifyContent:'center'}}>
                {this.props.tabs.map(tab=>{return (
                    <Button
                        color="primary"
                        key={'dropdownTab_' + tab}
                    >
                        <Typography style={{ fontFamily: 'Cabin Sketch', color: 'white' }} variant="title">
                            {tab}
                        </Typography>
                        {tab === this.state.selectedTab &&
                            <ExpandLessIcon style={{color:'white'}}/>
                        }
                        {tab !== this.state.selectedTab &&
                            <ExpandMoreIcon style={{color:'white'}}/>
                        }
                    </Button>
                )})
            }
            </div>
        );
    }
}
