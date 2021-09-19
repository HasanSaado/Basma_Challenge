// Libraries
import React from 'react';

// Components
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
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
      case 'brush':
        return (
          <BrushIcon />
        );
        break;
      case 'fire':
        return (
          <LocalFireDepartmentIcon />
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
