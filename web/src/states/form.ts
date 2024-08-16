import { defineStore } from "pinia";
import { ref } from "vue";

export default defineStore("form", ()=>{
  let running=ref(false);
  let data=ref({
    "type": "mikan",
    "exclusions": [],
    "bangumi": [],
    "freq": 15,
    "ariaLink": "",
    "ariaSecret": ""
  });


  return { running, data };
})