
function calcy(value){
    let a= +prompt("Enter Number: ")
    let b= +prompt("Enter secound Number: ")
    let operator=prompt("Operator")
    let result;

    switch(value){
        case '+':
            result= a+b
            console.log('result',result);
          //  break;
            case '-':
                result= a-b
                console.log('result',result);
               // break;
                case'*':
                result=a*b
                console.log('result',result);
              //  break;
                case'/':
                result=a/b
                console.log('result',result);
                default:
                    console.log('valur is not found');
    }

}