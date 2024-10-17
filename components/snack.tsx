import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Snackbar } from "@mui/joy";
import { atom, useRecoilState, useRecoilValue } from "recoil";

export const openStore = atom({
  key: 'open',
  default: false,
});

export const msgStore = atom({
  key: 'msg',
  default: '',
});

export const successStore = atom({
  key: 'success',
  default: false,
});

export const useSnack=()=>{
  const [_, setOpen] = useRecoilState(openStore);
  const [__, setSuccess] = useRecoilState(successStore);
  const [___, setMsg] = useRecoilState(msgStore);

  const showSnack=(success: boolean, msg: string)=>{
    setOpen(true);
    setSuccess(success);
    setMsg(msg);
  }
  return showSnack
}

export function Snacker(){
  const [open, setOpen] = useRecoilState(openStore);
  const success = useRecoilValue(successStore);
  const message = useRecoilValue(msgStore);

  return <Snackbar
    open={open}
    autoHideDuration={1500}
    color={ success ? 'success' : 'danger'}
    anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
    style={{display: 'flex'}}
    onClose={(_, __) => {setOpen(false); }} 
  >
    <FontAwesomeIcon icon={ success ? faCheck : faXmark } />
    <div>{message}</div>
  </Snackbar>
}