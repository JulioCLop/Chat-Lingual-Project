import React , {Component} from 'react';

// Material UI Imports
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import HomeIcon from '@mui/icons-material/Home';

// Styles Import 
import './BreadCrumb.styles.css';


class BreadCrumb extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    handleClick = (event) => {
        event.preventDefault();
        console.info('You clicked a breadcrumb.');
      }

    render() { 
        return (
            <div className='Breadcrumb-Section' role="presentation" onClick={this.handleClick}>
            <Breadcrumbs style={{ width: '100%',height: "85%",display: 'flex', aligItems:'baseline'}} aria-label="breadcrumb">
              <Link  underline="hover" color="inherit" href="/">
           <ul style={{listStyle: "none",padding: 0, margin: 0,height: '100%', display: 'flex'}}>
            <li>
            <HomeIcon className='Home-Icon'/>
            </li>
            <li>
                 Home
            </li>
           </ul>
         
              </Link>
              <Link
                underline="hover"
                color="inherit"
                href="/getting-started/installation/"
              >
                Documents
              </Link>
            </Breadcrumbs>
          </div>
        );
    }
}
 
export default BreadCrumb;