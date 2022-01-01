import React, {Component} from 'react';
import Table from '../File_Manager_Table/File_Manager_Table.component';

// Components Import

// Styles Import 
import './File_Manager_Main.styles.css';


class FileManagerMain extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
          
             <main>
                <Table/>
           
            </main>
              
          
           
         );
    }
}
 
export default FileManagerMain;