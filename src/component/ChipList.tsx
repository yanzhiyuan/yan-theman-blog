import * as React from 'react';
import * as model from '../model/PortfolioModel';
import { List, Typography, ListItem, Chip, Avatar, Divider } from '@material-ui/core';
import mongoPng from '../asset/mongoDB.jpg';
import cSharp from '../asset/cSharp.png';
import dotNet from '../asset/dotNet.png';
import dotNetCore from '../asset/dotnetCore.png';
import goLang from '../asset/goLang.png';
import objectiveC from '../asset/objective-c.png';
import oracle from '../asset/oracle.png';
import R from '../asset/R.png';
import react from '../asset/react.png';
import sqlServer from '../asset/sql-server.png';
import swift from '../asset/swift.png';
import typescript from '../asset/typescript.png';
import cpp from '../asset/cpp.png';
import ios from '../asset/ios.png';
import zeromq from '../asset/zeromq.png';

interface IChipListProps{
    chipList: Map<string, model.TechSkill[]>;
}

const imgs = {
    mongoPng,
    cSharp,
    dotNet, 
    dotNetCore, 
    goLang,
    objectiveC,
    oracle,
    R,
    react,
    sqlServer,
    swift,
    typescript,
    cpp,
    ios,
    zeromq,
}

export default class ChipList extends React.Component<IChipListProps>{

    public render(){
        return(
            <div>
                <List>
                    {this.renderListItem()}
                </List>
            </div>
        );
    }

    private renderListItem(){
        const result:JSX.Element[] = [];
        this.props.chipList.forEach((value, key) => {
            result.push(
                (
                    <ListItem key={'list_'+key} style={{display:'flex', flexDirection:'column', alignItems:'flex-start'}}>
                    <div>
                    <Typography style={{fontFamily:'Cabin Sketch'}} variant="title" >
                    {key}
                    </Typography>
                    </div>
                    <div style={{flex:1}}>
                    {value.map(tech=>
                        <Chip
                            avatar={<Avatar src={imgs[tech.iconName]} /> }
                            label={tech.name}
                            key={'tech_chip' + tech.name}
                            style={{margin:'5px'}}
                        />
                    )}
                    </div>
                    <Divider/>
                    </ListItem>
                )
            );
        });
        return result;
    }
}