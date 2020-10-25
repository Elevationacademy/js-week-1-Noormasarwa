const genes = ["ACADM", "GLMN", "RLF", "AZIN2", "CRYZ"]
const strand=[]
stand=genes
stand[2]=genes[genes.length-1]
stand[genes.length-1]=genes[2]
stand.splice(2,1)
stand.push("RLF","RLF")
stand.unshift("FXT")
console.log(stand)
