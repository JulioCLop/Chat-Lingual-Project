import React, {Component} from 'react';
import FileManagerMain from '../../components/File_Magager_Main/File_Manager_Main.component';
import FileManagerAside from '../../components/File_Manager_Aside/File_Manager_Aside.component';
import FileManagerHeader from '../../components/File_Manager_page_Components/File_Manger_Header.component';
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb.component';

// Styles Imports

import './File_Manager_Page.Styles.css';


class FileManagerPage extends Component {
    constructor(props) {
        super(props);
        this.state = { 

         }
    }
    render() { 
     return(
        <div className="File-Manager-Page">
        <FileManagerHeader/>
        <section className='Main-Section'>
        <section className='Section-One'>
        <FileManagerAside/>
        </section>
           <section className='Section-Two'>
            <BreadCrumb/>
            <FileManagerMain/>
         </section>
        </section>
        </div>
     )
        }
}
 
export default FileManagerPage;