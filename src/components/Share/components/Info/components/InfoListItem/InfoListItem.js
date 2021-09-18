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
import { Card } from 'react-bootstrap';
import LayersIcon from '@mui/icons-material/Layers';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import BrushIcon from '@mui/icons-material/Brush';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

// Style
import './InfoListItem.scss';

function InfoListItem(props) {

  /**
   *
   */
  function renderIcon() {
    switch(props.icon) {
      case 'layers':
        return (
          <LayersIcon />
        );
        break;
      case 'fire':
        return (
          <LocalFireDepartmentIcon />
        );
        break;
      case 'brush':
        return (
          <BrushIcon />
        );
        break;
      case 'cart':
        return (
          <AddShoppingCartIcon />
        );
        break;
      default:
        return(null);
    }
  }

  /**
   *
   */
  return (
    <List>
      <ListItem disablePadding>
        <ListItemIcon>
          <div className="card share-info--card">
            {renderIcon()}
          </div>
        </ListItemIcon>
        <ListItemText secondary={props.text} />
      </ListItem>
    </List>
  );
}

export default InfoListItem;
