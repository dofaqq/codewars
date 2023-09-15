/*
Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).
*/

// The first solution
function solution(str, ending){
  return str.endsWith(ending);
}

// The second solution
function solution(str, ending){
  return (str.slice(str.length - ending.length) === ending) ? true : false;
}
