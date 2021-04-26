const random = () => {

    const obj = {};
    for (let i = 0; i <10000; i++) {
        let num = Math.floor(Math.random() * 20);
        (obj[num]>0) ? obj[num]++ : obj[num]=1;
    }
    return (obj);
}

export default random;
