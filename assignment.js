var Studentsinfo= [
    {
        name:"Asalu Temitope Peter", 
        age:21, 
        address :"Bauchi Ring Road jos", 
        tribe:"yagba",
        gender:"male",
        height: 1.7,
        department:"Computer Science",
        level:300,
        grade:[30,60,70,80,90]
},
{
    name:"Sunday Josephine", 
    age:18, 
    address :"Odus", 
    tribe:"Eggon",
    gender:"female",
    height:21.5,
    department:"Computer Science",
    level:300,
    grade:[0,12,19,32,18]
},
{
    name:"Oyekale Alice Tosin", 
    age:16, 
    address :"Faringada", 
    tribe:"Yoruba",
    gender:"female",
    height: 0.6,
    department:"Computer Science",
    level:300,
    grade:[10,30,50,20,100]
},
{
    name:"Kaslong Kelvin", 
    age:22, 
    address :"Tudun wada", 
    tribe:"Gamai",
    gender:"male",
    height: 1.6,
    department:"Computer Science",
    level:300,
    grade:[50,20,40,20,100]
},
{
    name:"Adams Mark", 
    age:21, 
    address :"Abbatoir", 
    tribe:"Idoma",
    gender:"male",
    height: 1.74,
    department:"Computer Science",
    level:300,
    grade:[45,30,50,20,100]
},
{
    name:"Elizabeth John", 
    age:13, 
    address :"Salama Hostel", 
    tribe:"Ibibo",
    gender:"female",
    height:1.65,
    department:"Computer Science",
    level:300,
    grade:[60,30,50,20,100]
},
{
    name:"Susan Owoicho", 
    age:25, 
    address :"Salam Hostel", 
    tribe:"Idoma",
    gender:"female",
    height:1.72,
    department:"Computer Science",
    level:300,
    grade:[90,30,50,20,100]
},
{
    name:"Yada Martins", 
    age:28, 
    address :"Village Hostel",
    tribe:"Kagoro",
    gender:"male",
    height:1.76,
    department:"Computer Science",
    level:300,
    grade:[10,30,50,20,100]
},
{
    name:"Ifeoma Ibedu", 
    age:25, 
    address :"Angwan Rukuba", 
    tribe:"Igbo",
    gender:"female",
    height:1.68,
    department:"Computer Science",
    level:300,
    grade:[10,30,50,20,100]
},
{
    name:"Awari Yohanna Dauda", 
    age:23, 
    address :"Angwan Rukuba", 
    tribe:"Afizare",
    gender:"male",
    height:1.64,
    department:"Computer Science",
    level:300,
    grade:[60,230,80,90,10,30,50,20,100]
},
{
    name:"Nanbal Moses Kundam",
    age:23, 
    address :"Federal Locust", 
    tribe:"Mupun",
    gender:"male",
    height:1.61,
    department:"Computer Science",
    level:300,
    grade:[10,30,50,20,100]
},
{
    name:"Victoria Bok",
    age:22, 
    address :"Odus", 
    tribe:"Berom",
    gender:"female",
    height:1.61,
    department:"Computer Science",
    level:300,
    grade:[60,30,50,20,100]
},
{
    name:"Yusuf Paul Osanga", 
    age:30, 
    address :"Rayfield", 
    tribe:"Berom",
    gender:"male",
    height:1.74,
    department:"Computer Science",
    level:300,
    grade:[60,23,50,20,100]
},
{
    name:"Bamigboye Christiana Temitope", 
    age:25, 
    address :"Village Hostel", 
    tribe:"Yoruba",
    gender:"female",
    height:1.69,
    department:"Computer Science",
    level:300,
    grade:[10,30,50,20,100]
},
{
    name:"Job Gift Elejo", 
    age:22, 
    address :"Village Hostel", 
    tribe:"Igala",
    gender:"female",
    height:1.72,
    department:"Computer Science",
    level:300,
    grade:[10,30,50,20,100]
},
{
     name:"Moses Deborah Kibba", 
     age:24, 
     address :"Odus", 
     tribe:"Amo",
     gender:"female",
     height:1.65,
     department:"Computer Science",
     level:300,
     grade:[80,90,10,30,50]
},
{
    name:"Joy Ohue Osedebamen", 
    age:24, 
    address :"Odus", 
    tribe:"Esan",
    gender:"female",
    height:1.69,
    department:"Computer Science",
    level:300,
    grade:[60,70,80,90,10]
},
{
    name:"Ponfa Michael", 
    age:24, 
    address :"Odus", 
    tribe:"Berom",
    gender:"male",
    height:1.65,
    department:"Computer Science",
    level:300,
    grade:[60,10,30,50,100]
},
{
    name:"Mabas Maryam", 
    age:20, 
    address :"PTS, Jos", 
    tribe:"challa",
    gender:"female",
    height: 1.68,
    department:"Computer Science",
    level:300,
    grade:[60,10,30,50,20]
},
{
    name:"Uzaifat Ibrahim", 
    age:23, 
    address :"Dod Strret Jos", 
    tribe:"Magwavul",
    gender:"male",
    height: 1.69,
    department:"Computer Science",
    level:300,
    grade:[60,30,50,20,100]
}
];
console.log(Studentsinfo);
console.log("\n\n");


 //get the miximum Height of the person
a = 0;
var mates = Studentsinfo.filter(function(values) {
    if (a < values.Height) {
        a = values.Height;
    }
});

//get the full details of the person with max height
var result = Studentsinfo.filter(function(data) {
    if (data.Height == a) {

        return data;
        
    }

});

console.log(result)
function avg(arr) {
    var num = 0;
    for (var index = 0; index < arr.length; index++) {
        num = num + arr[index];
    }
    return num / arr.length;
}

var b = 0;
var v;
Studentsinfo.forEach(function(item, index, data) {

    if (b < avg(item.grade)){
        b = avg(item.grade);
        v = index;
       // console.log(data[index]);

    }


});
console.log(Studentsinfo[v]);