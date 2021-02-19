function Checkers() {

}

Checkers.isPhone = function (str) {
	let phone_reg = /^1[3456789]\d{9}$/;
	return phone_reg.test(str);
};

Checkers.isSmsCode = function (str) {
	let sms_code_reg = /^\d{6}$/;
	return sms_code_reg.test(str);
};

Checkers.isValidPassword = function (str) {
	let password_reg = /^[a-zA-Z]\w{5,17}$/;
	return password_reg.test(str);
};

Checkers.isUserName = function (str) {
  let name_reg = /^[\u4E00-\u9FA5]{2,4}$/;
  return name_reg.test(str);
};

//身份证
Checkers.isIdNumber =  function(idcode){
  let weight_factor = [7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2];
  let check_code = ['1', '0', 'X' , '9', '8', '7', '6', '5', '4', '3', '2'];
  let code = idcode + "";
  let last = idcode[17];//最后一位
  let seventeen = code.substring(0,17);
  let arr = seventeen.split("");
  let len = arr.length;
  let num = 0;
  for(let i = 0; i < len; i++){
    num = num + arr[i] * weight_factor[i];
  }
  // 获取余数
  var resisue = num%11;
  var last_no = check_code[resisue];
  var idcard_patter = /^[1-9][0-9]{5}([1][9][0-9]{2}|[2][0][0|1][0-9])([0][1-9]|[1][0|1|2])([0][1-9]|[1|2][0-9]|[3][0|1])[0-9]{3}([0-9]|[X])$/;

  // 判断格式是否正确
  var format = idcard_patter.test(idcode);

  console.log(1111)
  // 返回验证结果，校验码和格式同时正确才算是合法的身份证号码
  return last === last_no && format ? true : false;
};

Checkers.getUrlAllParam = function(newUrl, ...args) {
  if (args.length === 0) return undefined;
  const url = decodeURIComponent(newUrl);
  const reg =
    args.length === 1
      ? new RegExp(`[&?]${args[0]}=([^&%#]+)`)
      : new RegExp(`[&?](?:${args.join("|")})=([^&%#]+)`);
  const matchArray = url.match(reg);
  return matchArray === null ? undefined : matchArray[1];
},

export default Checkers;
