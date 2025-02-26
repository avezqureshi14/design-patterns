class College {
    getCourse(name) {
        throw new Error("This method should be overridden!");
    }
}

class Course {
    getDetails() {
        throw new Error("This method should be overridden!");
    }
}

// Concrete Courses for University A
class EngineeringCourseA extends Course {
    getDetails() {
        return { name: "Engineering", fee: 5000 };
    }
}

class MedicalCourseA extends Course {
    getDetails() {
        return { name: "Medical", fee: 7000 };
    }
}

// Concrete Courses for University B
class EngineeringCourseB extends Course {
    getDetails() {
        return { name: "Engineering", fee: 5500 };
    }
}

class MedicalCourseB extends Course {
    getDetails() {
        return { name: "Medical", fee: 7500 };
    }
}

// Concrete College for University A
class CollegeA extends College {
    getCourse(name) {
        if (name === "Engineering") {
            return new EngineeringCourseA();
        } else if (name === "Medical") {
            return new MedicalCourseA();
        } else {
            throw new Error("Course not found in CollegeA!");
        }
    }
}

// Concrete College for University B
class CollegeB extends College {
    getCourse(name) {
        if (name === "Engineering") {
            return new EngineeringCourseB();
        } else if (name === "Medical") {
            return new MedicalCourseB();
        } else {
            throw new Error("Course not found in CollegeB!");
        }
    }
}

// Abstract Factory Interface
class UniversityFactory {
    getCollege(name) {
        throw new Error("This method should be overridden!");
    }
}

// Concrete Factories (Universities)
class UniversityAFactory extends UniversityFactory {
    getCollege(name) {
        if (name === "CollegeA") {
            return new CollegeA();
        } else {
            throw new Error("College not found in University A!");
        }
    }
}

class UniversityBFactory extends UniversityFactory {
    getCollege(name) {
        if (name === "CollegeB") {
            return new CollegeB();
        } else {
            throw new Error("College not found in University B!");
        }
    }
}

// Client Code
function generateAdmitCard(universityFactory, collegeName, courseName) {
    const college = universityFactory.getCollege(collegeName);
    const course = college.getCourse(courseName);
    const details = course.getDetails();
    console.log(`Admit Card: ${details.name} - Fee: $${details.fee}`);
}

// Usage
const universityA = new UniversityAFactory();
generateAdmitCard(universityA, "CollegeA", "Engineering");
// Output: Admit Card: Engineering - Fee: $5000

const universityB = new UniversityBFactory();
generateAdmitCard(universityB, "CollegeB", "Medical");
// Output: Admit Card: Medical - Fee: $7500
