alert("I am linkedin")

//Arrays

//let name1 = "Ali"
//let name2 = "Kashan"
//let name3 3 = "Misbah"

//collection of data

let studentsNames =["Ali", "Kashan", "Misbah"]

console.log(studentsNames)

console.log(studentsNames[0])
console.log(studentsNames[1])
console.log(studentsNames[2])
console.log(studentsNames[3])

//Add
studentsNames.push("Mobile")
studentsNames.push("Bag")
studentsNames.push("Nexskill")

//Remove from last
studentsNames.pop()
studentsNames.shift()

console.log(studentsNames)
console.log(studentsNames.length)

console.log(studentsNames.indexOf("Bag"))
console.log(studentsNames.includes("Zeeshan"))
console.log(studentsNames.includes("Kashan"))

//Call Back Functions
function greet(){

}

()=>{

}

const calculateAge=()=>{
    console.log("Hi i am Arrow Function")
}
calculateAge()

const ages=[4, 5, 6, 23, 44, 55]
ages.map((ag) =>{
    console.log(ag)
})

const extraAges=ages.map((vg)=>{
    return vg*2
})
console.log(extraAges)

const RelaxAges=ages.map((eg)=>{
    return eg+5
})
console.log(RelaxAges)

//Filters

const eligibleAges= ages.filter((value)
=>{
    if(value>=18){
        return value
    }
})

console.log(eligibleAges)

const emloye=studentsNames.filter((name)=>{
    if (name.includes("a")|| name.includes("A")){
        return name
    }
}

)
console.log(employe)

//Way of storing data, Data structure
//Objects: key, value

const student ={
    name:"kashan",
    age:40,
    doesLikeCricket:false
}
console.log(student)
console.log(student["name"])
console.log(student["age"])

student['age'] =30
student['hobbies']= ["Playing",
    "Working"]
    console.log(student)

//Make an object on yourself
const myself={
    name:"fatima",
    age:19,
    doesLikeCricket:true
}
console.log(student)
console.log(student["name"])
console.log(student["age"])
