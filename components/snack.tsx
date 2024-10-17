import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Snackbar } from "@mui/joy";

export function Snacker({open, message, setOpen}: any){
  return <Snackbar
    open={open}
    autoHideDuration={1500}
    color={'danger'}
    anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
    style={{display: 'flex'}}
    onClose={(_, __) => {setOpen(false); }} 
  >
    <FontAwesomeIcon icon={ faXmark } />
    <div>{message}</div>
  </Snackbar>
}