
// class Config {
//     static dbUser = 'usename';
//     static dbPassword = 'secret';
//     static apiToken = 'abcd';
// }

// console.log(Config.apiToken);

class User {

    static id = 1

    constructor(name, age, income, phone) {
        // this.id = this.id++  To access static property we can't use this keyword
        this.id = User.id++
        this.name = name;
        this.age = age;
        this.income = income
        this.phone = phone
    }

    static {
        // This Keyword can be used for static property but it must be inside the static block
        console.log(this.id, ".....")
        console.log("This Static block will initialise first and  only once for the very first time whenver the class is initialised or call a static method or property")
    }

    static sortByIncome(users) {

        // This Keyword can be used for static property but it must be inside the static method
        console.log(this.id, ".....")
        console.log(User.id)
        return users.sort((user1, user2) => {
            return user1.income - user2.income
        })
    }

    static sortByAge(users) {
        return users.sort((user1, user2) => {
            return user1.age - user2.age
        })
    }

}

const user1 = new User("Jatin", 31, 75_000, `+1-800-${Date.now()}`);
const user2 = new User("Savi", 25, 50_000, `+1-800-${Date.now()}`);
const user3 = new User("Ananya", 28, 90_000, `+1-800-${Date.now()}`);
const user4 = new User("Ravi", 35, 120_000, `+1-800-${Date.now()}`);
const user5 = new User("Priya", 22, 45_000, `+1-800-${Date.now()}`);

/*
 Write a function to sort the users based on income. Since the sorting function is related to users so makes sense 
   to add it on the class and not on objects created by class. So we will use static keyword. 

*/

//Note :- sortByIncome and sortByAge is not available on objects created user1, user2 etc.

const users = [user1, user2, user3, user4, user5]

User.sortByIncome(users)
console.log(users)
User.sortByAge(users)
console.log(users)
console.log(User.id)