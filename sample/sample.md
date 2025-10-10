 function edit(id) {
   try {
     const task = tasks.find(task => task.id === id);
     if (!task) throw new Error("Task not found!");
     const newName = prompt("Edit your task:", task.name);
     if (newName === null) throw new Error("Name cant be empty"); // user pressed cancel
     if (!newName.trim()) throw new Error("Task name cannot be empty!");
     if (tasks.some(t => t.name.toLowerCase() === newName.toLowerCase() && t.id !== id)) {
       throw new Error("Task name already exists!");
     }
     task.name = newName.trim();
     task.createdAt = new Date().toLocaleString();
     viewTasks();
   } catch (error) {
     alert(error.message);
   }
 }


css
 .edit{
   background-color: yellow;
   color: white;
 }

no duplicate
else if (tasks.some(task => task.name.toLowerCase() === taskName.toLowerCase())) {//NEGLECT THE DUPLICATES
      reject("Task already exists!");}



------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

CODE USING FOR FOR : TASK 3 SIMPLE MARKS REPORT 

    let total = 0;
    let numSubjects = 5;

    for (let i = 1; i <= numSubjects; i++) {
        let mark = +prompt(`Enter your ${i} subject mark : `);

        if (isNaN(mark)) {
            throw("Subject mark must be a number..");
        }
        if (mark < 0 || mark > 100) {
            throw("Subject mark can't be negative or more than 100..");
        }

        total += mark; // Add each mark to total
    }

    