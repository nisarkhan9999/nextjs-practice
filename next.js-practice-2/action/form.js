import fs from "fs"
export  const submitAction= async(e)=>{
    "use server"
let name =e.get("name")
let address =e.get("address")
fs.writeFileSync("data.txt",`aName is ${name} and Adress is ${address}`)
}