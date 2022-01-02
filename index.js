const reverse=(str) =>{
    //convert string to an array
    let arr  = str.split('');
    //reverse the array
    let re_arr = arr.reverse();
    //join the elements in the array back to a string
    let re_str = re_arr.join('');

    return re_str;
}


const palindrome = (str)=>{
    //Eliminate all non-alphanumeric characters from the string. 
    const regex = /[^A-Za-z0-9]/g;
    const non_alphanum = str.replace(regex, '');
    //Eliminate all spaces from the string
    const no_space = non_alphanum.replace(/ /g, ''); 
    //convert the string to lower case for easy of comparison. 
    const low_case = no_space.toLowerCase();
    //As a reverse order of the string
    const str_rev = reverse(low_case); 
    // If it is identical to its reverse, then return true. otherwise, return false
    if(low_case===str_rev){
        return true
    }else{
        return false
    }
}

const d = palindrome("Pillip")

console.log(d);

 