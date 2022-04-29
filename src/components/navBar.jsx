import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import AddCardIcon from '@mui/icons-material/AddCard';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import ContentPasteGoIcon from '@mui/icons-material/ContentPasteGo';
import ContentPasteOffIcon from '@mui/icons-material/ContentPasteOff';
import WebhookIcon from '@mui/icons-material/Webhook';
import { NavLink } from 'react-router-dom'

const drawerWidth = 250;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div style={{color:'white'}} className='drawer'>
      <Toolbar sx={{mb:4, display: 'flex', alignItem: 'center', flexDirection: 'column', gap: '20px'}}>
          <IconButton sx={{mt: 2}}>
              <WebhookIcon fontSize='large'/>
          </IconButton>
          <Typography variant='h4'>
              Prime
          </Typography>
      </Toolbar>
      <Divider sx={{mb: 2}}/>
      <List>
          <ListItem >
            <ListItemIcon>
              <DashboardCustomizeIcon />
            </ListItemIcon>
            <ListItemText primary={<NavLink to='/dashboard'>Dashboard</NavLink>} />
          </ListItem>
      
      <Divider sx={{ml: 2, mb: 2}}/>
      
          <ListItem >
            <ListItemIcon>
              <CreditScoreIcon/>
            </ListItemIcon>
            <ListItemText primary={<NavLink to='/expenses'>Expenses</NavLink>} />
          </ListItem>
      
      <Divider sx={{ml: 2, mb: 2}} />
      
          <ListItem >
            <ListItemIcon>
              <AddCardIcon />
            </ListItemIcon>
            <ListItemText primary={<NavLink to='/income'>Income</NavLink>} />
          </ListItem>
      
      <Divider sx={{ml: 2, mb: 2}} />
      
          <ListItem >
            <ListItemIcon>
              <MonetizationOnIcon/>
            </ListItemIcon>
            <ListItemText primary={<NavLink to='/sales'>Sales</NavLink>} />
          </ListItem>
        <Divider sx={{ml: 2, mb: 2}} />
          <ListItem >
            <ListItemIcon>
              <ContentPasteOffIcon/>
            </ListItemIcon>
            <ListItemText primary={<NavLink to='/overdue'>OverDue Invoices</NavLink>} />
          </ListItem>
          <Divider sx={{ml: 2, mb: 2}} />
          <ListItem >
            <ListItemIcon>
              <ContentPasteGoIcon/>
            </ListItemIcon>
            <ListItemText primary={<NavLink to='/due'>Due Invoices</NavLink>} />
          </ListItem>
        <Divider sx={{ml: 2, mb: 2}} />
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px`}, backgroundColor: "white", 
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' }, backgroundColor: "#303840" }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" color='text.secondary'>
            Responsive drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, 
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, backgroundColor: "#303840" },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, backgroundColor: "#303840" },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      
    </Box>
  );
}

ResponsiveDrawer.propTypes = {

  window: PropTypes.func,
};

export default ResponsiveDrawer;