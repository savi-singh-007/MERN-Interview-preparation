class BaseUser {
  getRole() {
    console.log(`Role : BaseUser`);
  }
}

class Users extends BaseUser {
    getUserAcccess() {
      console.log(`User Access Done`);
    }
  
    getRole() {
      console.log(`Role : User`);
    }
  }
  
  class Admins extends Users {
    getUserAcccess() {
      console.log(`Admin Access Done`);
    }
  
    getRole() {
      console.log(`Role : Admin`);
    }
  }
  
  class Managers extends Users {
      getUserAcccess() {
        console.log(`Manager Access Done`);
      }
    
      getRole() {
        console.log(`Role : Manager`);
      }
    }
  
  class Customers extends BaseUser {
 
        getRole() {
          console.log(`Role : Manager`);
        }
  }
  
  function createUsers (users : Users) {
      users.getUserAcccess()
  }
  
  createUsers(new Admin())

  // Can't pass customer here since it is being inherit from BaseUser
  // createUsers(new Customer())