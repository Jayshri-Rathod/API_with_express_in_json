let data = require('../Meraki_course.json')
const fs = require("fs")
exports.getallCourse=(req,res)=>{
    res.send(data)
}
exports.getCourseById = (req,res)=>{
    const {id} = req.params;
    const foundCourse = data.find((course)=>course.id === id);
    if(foundCourse)res.send(foundCourse);
    else{res.status(404).send(`The course with givin id ${req.params.id} is not found in database.`)}
}
exports.createCourse = (req,res)=>{
    const newcourse = req.body;
    data.push(newcourse)
    res.send(`new course ${newcourse.name} has been added to your database succesfully.`)
    fs.writeFileSync("Meraki_course.json",JSON.stringify(data,null,4))
}
exports.deleteCourse = (req,res)=>{
    const {id} = req.params;
    data = data.filter((course)=>course.id !== id)
    if (data){
        fs.writeFileSync("Meraki_course.json",JSON.stringify(data,null,4));
        res.send(`Course with id ${id} deleted from the database.`);   
    }
    else{
        res.status(404).send(`The course with given id ${req.params.id} is not found in database.`)
    }
}
exports.updateCourse = (req,res)=>{
    const id = req.params.id
    const course = data.find((course)=> course.id === id)
    if(course){
        course.name=req.body.name
        course.logo=req.body.logo
        course.notes=req.body.notes
        course.days_to_complete=req.body.days_to_complete
        course.short_description=req.body.short_description
        course.type=req.body.type
        course.lang_available=req.body.lang_available
        fs.writeFileSync("Meraki_course.json",JSON.stringify(data,null,4));
        res.send(`The course with ${id} has been updated`)
    }else{
        res.status(404).send(`The course with given id ${req.params.id} is not found in database.`)
    }  
}
exports.updateCourseParti =(req,res)=>{
    const { id } = req.params;
    const { name, logo} = req.body;
    const course = data.find((course)=> course.id === id)
    if (course){
        if(name)course.name = name;
        if(logo)course.logo = logo;
        fs.writeFileSync("Meraki_course.json",JSON.stringify(data,null,4));
        res.send(`course with the id ${id} has been updated`)
    }else{
        res.status(404).send(`The course with given id ${req.params.id} is not found in database.`)
    }   
}