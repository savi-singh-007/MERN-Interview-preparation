interface Repository {
  save(): void;
}

interface Service {
  save(): void;
}

class UserControllerNew {
  constructor(private service: Service) {}
  save() {
    this.service.save();
  }
}

class ModernUser implements Service {
  constructor(private repository: Repository) {}

  save(): void {
    this.repository.save();
  }
}

class UserServiceNew implements Service {
  constructor(private repository: Repository) {}
  save() {
    this.repository.save();
  }
}

class PostgresRepositoryNew implements Repository {
  constructor() {}
  save() {
    console.log("saving user in postgres db");
  }
}

class MongoDbRepository implements Repository {
  save(): void {
    console.log("saving user in mongodb");
  }
}

const postgresRepositoryNew = new PostgresRepositoryNew();
const userServicenew = new UserServiceNew(postgresRepositoryNew);
const userControllerNew = new UserControllerNew(userServicenew);
userControllerNew.save();

const mongoRepositoryNew = new MongoDbRepository();
const modernUser = new ModernUser(mongoRepositoryNew);
const userControllerNew2 = new UserControllerNew(modernUser);
userControllerNew2.save();