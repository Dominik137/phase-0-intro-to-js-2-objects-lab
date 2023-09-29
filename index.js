const employee = {
    name: "Sam",
    streetAddress: "123 north street",
}

function updateEmployeeWithKeyAndValue(obj, key, value) {
    const newObj = { ...obj };
  
    newObj[key] = value;
  
    return newObj;
}

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value){
    obj[key] = value
   return obj
   }

   function deleteFromEmployeeByKey(obj, key){
    var newObj =  Object.assign({},obj)
    delete newObj[key]
    return newObj
   }


function destructivelyDeleteFromEmployeeByKey(obj, key) {
    delete obj[key]
    return obj
  }


