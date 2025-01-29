class UserController {
  constructor(private userService: UserService) {}
  save() {
    this.userService.save();
  }
}

class UserService {
  constructor(private postgresRepository: PostgresRepository) {}
  save() {
    this.postgresRepository.save();
  }
}

class PostgresRepository {
  constructor() {}
  save() {
    console.log("saving user in postgres db");
  }
}

// Adding a mongodb repository is not possible we need to change code so High level modules are depending on descret details 
// not abstraction

const postgresRepository = new PostgresRepository();
const userService = new UserService(postgresRepository)
const userController = new UserController(userService)
userController.save()