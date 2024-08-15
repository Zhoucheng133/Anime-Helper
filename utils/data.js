let data={
  'type': '',
  'exclusions': [],
  'bangumi': [],
  'freq': 15,
}
export default {
  set: (val)=>{
    data=val;
  },
  get: ()=>{
    return data;
  }
};