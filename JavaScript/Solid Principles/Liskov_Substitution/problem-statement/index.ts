class User {
  getUserAcccess() {
    console.log(`User Access Done`);
  }

  getRole() {
    console.log(`Role : User`);
  }
}

class Admin extends User {
  getUserAcccess() {
    console.log(`Admin Access Done`);
  }

  getRole() {
    console.log(`Role : Admin`);
  }
}

class Manager extends User {
    getUserAcccess() {
      console.log(`Manager Access Done`);
    }
  
    getRole() {
      console.log(`Role : Manager`);
    }
  }

class Customer extends User {
    getUserAcccess() {
        throw new Error ("Customer has no access")
      }
    
      getRole() {
        console.log(`Role : Manager`);
      }
}

function createUser (user : User) {
    user.getUserAcccess()
}

createUser(new Admin())
createUser(new Customer())