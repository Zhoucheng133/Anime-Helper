import { defineStore } from "pinia";
import { ref } from "vue";

interface bangumi {
  title: string,
  ass: string,
}

export default defineStore("form", ()=>{
  let running=ref(false);
  let data=ref({
    "type": "mikan",
    "exclusions": [] as string[],
    "bangumi": [] as bangumi[],
    "freq": 15,
    "ariaLink": "",
    "ariaSecret": ""
  });


  return { running, data };
})