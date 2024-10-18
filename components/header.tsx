import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Cookies from 'js-cookie';

interface HeaderProps {
  login?: boolean;
}

export default function Header({login=false}: HeaderProps){

  const logout=()=>{
    Cookies.remove('token');
    window.location.href='/login';
  }

  return <div className="head_container">
    <div className="head_lead">
      <img src="/icon.svg" alt="" width="40px" className="head_icon"></img>
      <div className="head_title">AnimeHelper</div>
    </div>
    <div>
      {login && (<div className="logoutArea" onClick={()=>logout()}>
        <FontAwesomeIcon icon={faRightFromBracket} style={{'width': 15}}/>
        <div className="logouLabel">注销</div>
      </div>)}
    </div>
  </div>
}