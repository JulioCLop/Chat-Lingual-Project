import React, {Component} from 'react';
import Modal from '../File_Manager_Modal/File_Manager_Modal.component';

// Styles Imports
import './File_Manager_Header.styles.css';


class FileManagerHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <header>
             <section className='Section-One-Header'>
             <ul className='Header-Btn-Container'>
             <li>
             <button type='button' id='new-btn'>New Folder</button>
             </li>
             <li>
             <Modal id='upload-btn'/>
             </li>
             <li>
             <select name='sort' id='sort'>
                 <option value=''>Sort By</option>
                 <option value='name'>Name</option>
                 <option value='file-size'>File Size</option>
                 <option value='date-created'>Date Created</option>
                 </select>
             </li> 
             </ul>
             </section>
             <section className='Section-Two-Header'>
                 <div>
                     <form action='/' method='GET'>
                     <input
                     type='text'
                     id="header-search"
                     placeholder='search'
                     name="search"
                     />
                        </form>
                 </div>
             </section>

            </header>
             );
    }
}
 
export default FileManagerHeader;