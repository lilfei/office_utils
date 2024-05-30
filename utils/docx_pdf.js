var converter = require('docx-pdf');


// converter('test.docx', 'output.pdf', function (err, result) {
//     if (err) {
//         console.log("Converting Doc to PDF  failed", err);
//     }
//     console.log("Converting Doc to PDF succesfull", result);
// });

async function ConvertDocToPdf(inputfile, outputfile) {
    return new Promise(async (resolve, reject) => {
        const inputPath = path.join(__dirname, "test.docx");
        const outputPath = path.join(__dirname, `/test.pdf`);
        let docData = await fs.readFile(inputPath)
        docxConverter(inputfile, outputfile, (err, result) => {
            return err ?
                reject(err) :
                resolve(result)
        })
    })
}

module.exports = ConvertDocToPdf;