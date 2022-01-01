
import React from 'react';

// Material UI Imports
import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeItem from '@mui/lab/TreeItem';


// Styles Import 
import './File_Manager_Aside.styles.css';


const data1 = {
    id: 'root',
    name: 'Document',
    children:[
        {
            id: 1,
            name: 'shared',
            children: [
                {
                    id: 2,
                    name: 'users'
                }
            ]
        },
    ]
}


function FileManagerAside(){
    const renderTree = (nodes) => (
        <TreeItem key={nodes.id} nodeId={nodes.id} label={nodes.name}>
          {Array.isArray(nodes.children)
            ? nodes.children.map((node) => renderTree(node))
            : null}
        </TreeItem>
      );
  
  
        return ( 
        <aside>
        <section>
        <TreeView
        style={{height: '100%'}}
      aria-label="rich object"
      disabledItemsFocusable
      disableSelection
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpanded={['root']}
      defaultExpandIcon={<ChevronRightIcon />}
      sx={{ height: 110, flexGrow: 1, maxWidth: "100%", overflow: 'hidden' }}
    >
      {renderTree(data1)}
    
    </TreeView>
        </section>  
        </aside> 
        );
    }

 
export default FileManagerAside;