import axios from "axios"
import form from "../states/form"

const BaseURL="http://127.0.0.1:8811"

export const init=async ()=>{
  form().running=(await axios.get(BaseURL+"/api/status")).data;
  form().data=(await axios.get(BaseURL+"/api/data")).data;
}