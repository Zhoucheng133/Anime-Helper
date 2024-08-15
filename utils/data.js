let data={
  'type': '',
  'exclusions': [],
  'bangumi': [],
  'freq': 15,
  'ariaLink': '',
  'ariaSecret': ''
}
export default {
  set: (val)=>{
    data=val;
  },
  get: ()=>{
    return data;
  }
};