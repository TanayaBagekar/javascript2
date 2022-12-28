function para(value){
    let a=30;
    let b=40;
    let result;
    switch(value){
    case '+':
        result = a + b
        console.log('result',result);
        //break;
        case'-':
        result = a - b
        console.log('result',result);
        //break;
        case '*':
            result= a * b
            console.log('result',result);
          //  break;
            case'/':
            result = a / b;
            console.log('result',result);
            //break;
            default:
                console.log('no match found');
    }


}