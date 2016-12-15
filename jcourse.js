const Student = function (first, last) {
  this.first = first;
  this.last = last;
  this.course = [];

};

Student.prototype.name = function() { return this.first + " " + this.last; };
Student.prototype.enroll = function(course) {
  if (!this.course.includes(course)) {
    this.course.push(course);
    course.students.push(this);
  }
};
Student.prototype.courseLoad = function() {
  let load = {};
  this.course.forEach( cours => {
    if (cours.department in load) {
        load[cours.department] += cours.credits;
    }
    else {
      load[cours.department] = cours.credits;
    }
  });
  return load;
};

const Victor = new Student ("Victor", "Guillen");
const Raymond = new Student("Raymond", "Lee");Course.prototype.addStudent = function (student) { student.enroll(this); };


function Course(name, department, credits) {
  this.name = name;
  this.department = department;
  this.credits = credits;
  this.students = [];
}

Course.prototype.students = function () { this.students; };

const ModArt = new Course("Modern Art", "Art", 3);
const Matlab = new Course("Matlab", "Computer Scifi", 10);
const Ruby = new Course("Ruby", "Computer Scifi", 50);
const Java = new Course("Javascript", "Computer Scifi", 100);

Victor.enroll(ModArt);
Victor.enroll(Ruby);
Victor.enroll(Matlab);

Raymond.enroll(Ruby);
Raymond.enroll(Java);
