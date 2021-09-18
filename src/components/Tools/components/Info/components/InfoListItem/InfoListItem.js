// Libraries
import React from 'react';
import LineIcon from 'react-lineicons';

// Components
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
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
