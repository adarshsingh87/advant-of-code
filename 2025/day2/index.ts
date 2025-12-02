const input =
  "8123221734-8123333968,2665-4538,189952-274622,4975-9031,24163352-24202932,1233-1772,9898889349-9899037441,2-15,2147801-2281579,296141-327417,8989846734-8989940664,31172-42921,593312-632035,862987-983007,613600462-613621897,81807088-81833878,13258610-13489867,643517-782886,986483-1022745,113493-167913,10677-16867,372-518,3489007333-3489264175,1858-2534,18547-26982,16-29,247-366,55547-103861,57-74,30-56,1670594-1765773,76-129,134085905-134182567,441436-566415,7539123416-7539252430,668-1146,581563513-581619699";
const inputRanges = input.split(",");

let answer = 0;

inputRanges.forEach((e) => {
  const [start, end] = e.split("-");

  for (let i = parseInt(start); i <= parseInt(end); i++) {
    if (i.toString().length === 1) {
      continue;
    }
    const numberSet = new Set(i.toString().split(""));
    if (numberSet.size === 1) {
      console.log(i);
      answer += i;
      continue;
    }
    for (
      let setSize = 2;
      setSize <= parseInt(i.toString().length / 2);
      setSize++
    ) {
      if (i.toString().length % setSize !== 0) {
        continue;
      }
      const subString = splitStringIntoChunks(i.toString(), setSize);
      const subStringSet = new Set(subString);
      if (subStringSet.size === 1) {
        console.log(i);
        answer += i;
        break;
      }
    }
  }
});
function splitStringIntoChunks(str: string, chunkSize: number) {
  const result: string[] = [];
  for (let i = 0; i < str.length; i += chunkSize) {
    result.push(str.slice(i, i + chunkSize));
  }
  return result;
}
console.log(answer);
