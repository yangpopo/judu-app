// 数字格式
function  numberFormat(val) {
  let num = Number.parseInt(val);
  if (num < 1000) {
    return num
  } else if (num >= 1000 && num < 10000) {
    return `${ (num / 1000).toFixed(2) }k`
  } else {
    return `${ (num / 10000).toFixed(2) }w`
  }
}

// 获取浏览器参数
function  GetQueryString(name)
{
  var  reg =  new  RegExp( "(^|&)" + name + "=([^&]*)(&|$)" );
  var  r = window.location.search.substr(1).match(reg);
  if (r!= null ) return   unescape(r[2]);  return  null ;
}
export { 
  numberFormat,
  GetQueryString,
 }