function generateWords(){
    let string = '';
    for (let i = 0; i<100; i++){
        string += i + '\n';
    }
    return string;
}

export {generateWords};