import * as React from 'react';
import * as model from '../model/PortfolioModel';
import { List, Typography, ListItem, Chip, Avatar, Divider } from '@material-ui/core';
import mongoPng from '../asset/mongoDB.jpg';

interface IChipListProps{
    chipList: Map<string, model.TechSkill[]>;
}

const imgs = {
    mongoPng,
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
                    <Typography variant="title" style={{color:'white'}}>
                    {key}
                    </Typography>
                    </div>
                    <div style={{flex:1}}>
                    {value.map(tech=>
                        <Chip
                            avatar={<Avatar src={imgs[tech.iconName]} /> }
                            label={tech.name}
                            key={'tech_chip' + tech.name}
                        />
                    )}
                    </div>
                    <Divider light={true}/>
                    </ListItem>
                )
            );
        });
        return result;
    }
}