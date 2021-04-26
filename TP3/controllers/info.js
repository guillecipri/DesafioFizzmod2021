import fs from 'fs';

const getInfo = async () => {
    
    let info = {
    contenidoStr: '',
    contenidoObj: {},
    size: 0
    }
    try {
        info.contenidoStr = await fs.promises.readFile('package.json', 'utf-8')
        info.contenidoObj = JSON.parse(info.contenidoStr)
        info.size = info.contenidoStr.length
        
        console.log(`\ninfo = `, info);

        await fs.promises.writeFile('./info.txt', JSON.stringify(info, null, 4))
    }
    catch (error) {
        console.log(`error: ${error}`);
    }
    return info;
}

export default getInfo;
