// Libraries
import React from 'react';

// Components
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CheckIcon from '@mui/icons-material/Check';

// Style
import './InfoListItem.scss';

function InfoListItem(props) {

  /**
   *
   */
  return (
    <List>
      <ListItem disablePadding>
        <ListItemIcon>
          <CheckIcon />
        </ListItemIcon>
        <ListItemText secondary={props.text} />
      </ListItem>
    </List>
  );
}

export default InfoListItem;
