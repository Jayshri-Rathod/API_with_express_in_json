// var fs = require("fs");
// const readline = require("readline-sync");
// var axios = require("axios");
// var url1 = ("https://api.merakilearn.org/courses")
// axios.get(url1)
//     .then(resp => {
//         let DATA = (resp.data)
//         let m = JSON.stringify(DATA, null, 4)
//         fs.writeFileSync("Meraki_course.json", m)
//         serial_no = 1
//         for (i of (DATA)) {
//             console.log(serial_no++, ".", i["name"], "id:", i["id"])
//         }
//         var courses_no = readline.question("enter the course number which you want to learn ")
//         console.log(courses_no-1,["name"])
//         URL2 = ("https://api.merakilearn.org/courses/" + String(DATA[courses_no - 1]["id"]) + '/exercises')
//         DATA_2 = axios.get(URL2)
//             .then(resp => {
//                 let data = resp.data
//                 let n = JSON.stringify(data, null, 4)
//                 fs.writeFileSync("child.json", n)
//                 var j = 0,k=0
//                 var arry1 = [],arry2=[]
//                 for (i of data["course"]["exercises"]) {
//                     if (i["parent_exercise_id"] == null) {
//                         arry2.push(i)
//                         arry1.push(i)
//                         console.log(j + 1, ".", i["name"])
//                         j = 1
//                     } else if (i["parent_exercise_id"] == i["id"]) {
//                         console.log(j + 1, ".", i["name"])
//                         arry2.push(i)
//                         j = j + 1
//                         k = 0
//                     } else if (i["parent_exercise_id"] != i["id"]) {
//                         console.log(" ", k + 1, ".", i["name"])
//                         arry1.push(i)
//                         k = k + 1
//                     }
//                 }
//                 let o = JSON.stringify(arry2, null, 4)
//                 fs.writeFileSync("c.json", o)
//                 const topic_no = readline.question("enter the topic which you want")
//                 for (var i = 0; i < arry2.length; i++) {
//                     if (topic_no == i + 1) {
//                         console.log(topic_no, arry2[i]["name"])
//                         var a = arry2[i]["parent_exercise_id"]
//                         var s = 1
//                          var arry3 = [],arry4=[]
//                         for (var i = 0; i < arry1.length; i++) {
//                             if (arry1[i]["parent_exercise_id"] == a) {
//                                 console.log(" ", s, arry1[i]["name"])
//                                 arry3.push(arry1[i]["name"])
//                                 arry4.push(arry1[i]["content"])
//                                 s = s + 1
//                             }
//                         }
//                         var child_number = readline.question("which child you want to print")
//                         console.log(arry4[child_number-1])
//                         }
//                 }

//             })
//     })

