let { deepCopy } = require('../utils/Utils')

let Obj = {
  a:'123',
  b:[1,2,[3,4]],
  c:{
    name:'c',
    favo:['football','basketball'],
    family:[
      {
        name:'iron'
      },
      {
        name:'alical'
      }
    ]
  }
}
let deepCopyResult = deepCopy(Obj)

module.exports = {
  a: (a, b) => {
    return a + b;
  },
  b: (a, b) => {
    return a - b;
  },
  c:(a,b)=>{
    return a*b
  },
  d:(a,b)=>{
    return a/b
  },
  deepCopyResult:deepCopyResult
};
