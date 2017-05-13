var mygrade  = require("./lib/grades").grade;
var express =  require("express");
var app = express();
app.get("/",function(req,res){
	res.send("Hello Neeru");	
});

app.get("/grade",function(req,res){
	var grades = req.query.grades.split(",");
	mygrade.reset();
	for(var i =0; i < grades.length; i++)
	{
		mygrade.canAddGrades(parseInt(grades[i]));
	}	
	res.send("Hello Neeru, your letter grade is " + mygrade.getLetterGrade());	
});

app.listen(3000);
console.log("Server ready...");