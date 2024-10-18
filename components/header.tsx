import { faBars, faCalendar, faDownload, faList, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Divider, Drawer, List, ListItem, ListItemButton } from "@mui/joy";
import Cookies from 'js-cookie';
import { useEffect, useState } from "react";

interface HeaderProps {
  login?: boolean;
  page?: string;
}

export default function Header({login=false, page='list'}: HeaderProps){

  const [width, setWidth]=useState(100);
  const [openDrawer, setOpenDrawer]=useState(false);

  useEffect(()=>{
    setWidth(window.innerWidth);
    window.onresize=()=>{
      setWidth(window.innerWidth);
    }
  }, [])

  const logout=()=>{
    Cookies.remove('token');
    window.location.href='/login';
  }

  const toPage=(pageName: string)=>{
    if(pageName===page){
      return;
    }else{
      window.location.href=`/${pageName}`;
    }
  }

  return <div className="head_container">
    <div className="head_lead">
      <img src="/icon.svg" alt="" width="40px" className="head_icon"></img>
      <div className="head_title">AnimeHelper</div>
    </div>
    {(login && width>800) && (<div className="head_menu">
      <div className={ page=='list' ? "head_menu_item_selected" : 'head_menu_item'} onClick={()=>toPage('list')}>
        <FontAwesomeIcon icon={faList} style={{'width': 15}}/>
        <div className="head_menu_label">列表</div>
      </div>
      <div className={ page=='calendar' ? "head_menu_item_selected" : 'head_menu_item'} style={{marginLeft: 30}} onClick={()=>toPage('calendar')}>
        <FontAwesomeIcon icon={faCalendar} style={{'width': 15}}/>
        <div className="head_menu_label">每日更新</div>
      </div>
      <div className={ page=='downloader' ? "head_menu_item_selected" : 'head_menu_item'} style={{marginLeft: 30}} onClick={()=>toPage('downloader')}>
        <FontAwesomeIcon icon={faDownload} style={{'width': 15}}/>
        <div className="head_menu_label">下载器</div>
      </div>
    </div>)}
    <div>
      {(login && width>=800) && (<div className="logout_area" onClick={()=>logout()}>
        <FontAwesomeIcon icon={faRightFromBracket} style={{'width': 15}}/>
        <div className="logout_label">注销</div>
      </div>)}
      {(login && width<800) && <div className="head_mobile">
        <FontAwesomeIcon icon={faBars} style={{'width': 15}} onClick={()=>setOpenDrawer(true)}/>
      </div>}
    </div>

    <Drawer open={openDrawer} onClose={()=>setOpenDrawer(false)} anchor={'bottom'}>
      <Box
        role="presentation"
        onClick={()=>setOpenDrawer(false)}
      >
        <List size="lg">
          <ListItem>
            <ListItemButton onClick={()=>toPage('list')}>列表</ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton onClick={()=>toPage('calendar')}>每日更新</ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton onClick={()=>toPage('downloader')}>下载器</ListItemButton>
          </ListItem>
        </List>
        <Divider />
        <List size="lg">
          <ListItem>
            <ListItemButton onClick={()=>logout()}>注销</ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Drawer>
  </div>
}