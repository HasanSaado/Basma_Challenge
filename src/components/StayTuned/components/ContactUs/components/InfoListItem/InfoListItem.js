// Libraries
import React from 'react';

// Components
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

// Style
import './InfoListItem.scss';

function InfoListItem(props) {

  /**
   *
   */
  function renderIcon() {
    switch(props.icon) {
      case 'home':
        return (
          <HomeIcon />
        );
        break;
      case 'phone':
        return (
          <PhoneIcon />
        );
        break;
      case 'email':
        return (
          <EmailIcon />
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
          <div className="card staytuned-info--card">
            {renderIcon()}
          </div>
        </ListItemIcon>
        <ListItemText secondary={props.text} />
      </ListItem>
    </List>
  );
}

export default InfoListItem;
