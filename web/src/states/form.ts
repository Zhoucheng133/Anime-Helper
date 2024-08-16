import { defineStore } from "pinia";
import { ref } from "vue";

export default defineStore("form", ()=>{
  let running=ref(false);


  return { running };
})