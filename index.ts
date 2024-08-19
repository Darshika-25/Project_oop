#! /usr/bin/env node
//shebang

import inquirer from "inquirer";

// Adding class constructor for student
class Student {
  name;
  constructor(n: string) {
    this.name = n;
  }
}

// Assigning person with class
class Person {
  students: string[] = [];
  addStudent(obj: string) {
    this.students.push(obj);
  }
}

// Initializing program
const persons = new Person();
console.log(persons);
const programmStart = async (persons: Person) => {
  do {
    console.log("Welcome Guest!");
    const ans = await inquirer.prompt({
      type: "list",
      message: "Do you want to chat with someone?",
      name: "select",
      choices: [
        { name: "self ", value: "self" },
        { name: "student", value: "student" },
      ],
    });
    if (ans.select == "self") {
      console.log("Hey! I would prefer talking with myself");
      console.log("I am well");
    }
    if (ans.select == "student") {
      const ans = await inquirer.prompt<{ student: string }>({
        type: "input",
        message: "With whom would you like to talk?",
        name: "student",
      });
      
      const student = persons.students.find((val) => val === ans.student);
      console.log("================> ", student);
      if (!student) {
        const student = new Student(ans.student);
        persons.addStudent(student.name);
        console.log(`Hello I am ${student.name}, please mention me`);
        console.log(persons.students);
      }
      if (student) {
        console.log(`Hello I am ${student}, tell me more about yourself! `);
        console.log(persons.students);
      }
    }
  } while (true);
};
programmStart(persons);
