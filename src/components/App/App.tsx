import './App.scss';
import * as React from 'react';
import { Component } from 'react';
import * as configureTap from 'react-tap-event-plugin';
import { blueGrey800 } from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import FontIcon from 'material-ui/FontIcon';
import Paper from 'material-ui/Paper';
import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation';

const homeIcon = <FontIcon className='material-icons'>home</FontIcon>;
const favoritesIcon = <FontIcon className='material-icons'>favorite</FontIcon>;

configureTap();

const theme = getMuiTheme({
  fontFamily: 'Roboto Mono',
  palette: {
    primary1Color: blueGrey800,
    primary2Color: blueGrey800,
    primary3Color: blueGrey800
  }
});

class App extends Component<any, any> {
  render() {
    return <MuiThemeProvider muiTheme={theme}>
      <div style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexFlow: 'column'
      }}>
        <AppBar
          titleStyle={{
            fontWeight: 300
          }}
          showMenuIconButton={false}
          title='Github dashboard' />

        <div style={{
          flex: 1
        }} />

        <Paper zDepth={1}>
          <BottomNavigation>
            <BottomNavigationItem icon={homeIcon} label='home' />
            <BottomNavigationItem icon={homeIcon} label='home' />
            <BottomNavigationItem icon={homeIcon} label='home' />
          </BottomNavigation>
        </Paper>
      </div>
    </MuiThemeProvider>;
  }
}

export default App;
