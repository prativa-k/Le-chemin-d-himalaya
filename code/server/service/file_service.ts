// import { fileTypeFromFile } from 'file-type/node';
// import fs from 'node:fs/promises'
// import { file } from 'zod';


// class FileService{

//     //renommer le fichier transféré en ajoutant l'extension
//     // doit retourner le nom complet du fichier

//     // {

//     //     // fieldname: 'image',
//     //     // originalname:'menu-test-01.jpg',
//             //  encoding: '7bit',
                // mimetype: 'image/jpeg',
                // destination: ''public/img/menu',
                // filename: '5e44a50f1d8af6d085b096cf113281b6',
                // path: 'public/img/menu/e44a50f1d8af6d085b096cf113281b6',
                // size: 107552
//     // }
//     public rename = async(file:Express.Multer.File) => {

//         // ajouter l'extension au fichier

//         const fullname = `${file.filename}.${(await fileTypeFromFile(file.path))?.ext}`;

//         // when you have images in your file and console.log the above fieldname and everything is the result of the terminal and copy pasted here for the references
//         // console.log(file);
//         console.log(fullname);

            // renommer le fichier avec le nom complet
            // await fs.rename(file.path, `${file.destination}/${fullname}`);

            // retourner le nom complet
            // return fullname;
        

        
//     };

    
// }


// export default FileService;