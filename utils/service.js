import mikan from "./mikan.js";
import acgrip from "./acgrip.js";
import state, {prels, ls} from "./data.js";

export default function service(){
  if(state.get().type=='mikan'){
    mikan();
  }else if(state.get().type=='acgrip'){
    acgrip();
  }
}