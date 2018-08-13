import * as React from 'react';
import * as model from '../model/PortfolioModel';
import { List, Typography, ListItem, Chip, Avatar } from '@material-ui/core';

interface IChipListProps{
    chipList: Map<string, model.TechSkill[]>;
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
        var result:JSX.Element[] = [];
        this.props.chipList.forEach((value, key) => {
            result.push(
                (
                    <ListItem key={'list_'+key}>
                    <Typography variant="caption">
                    {key}
                    </Typography>
                    {value.map((tech)=>{
                        <Chip
                            avatar={<Avatar src={tech.iconPath} /> }
                            label={tech.name}
                        />
                    })}
                    </ListItem>
                )
            );
        });
        return result;
    }
}