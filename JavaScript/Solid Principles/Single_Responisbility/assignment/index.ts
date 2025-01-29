import { CustomerProfile } from "./Customer";
import { Room, Rooms } from "./Room";
import { RoomPayment } from "./Payment";

const customer1 = new CustomerProfile(1, "Savi", +911234567890, "Gujrat");
const room1 = new Room(1, 758, 1000);
const room2 = new Room(2, 7058, 9000);

const rooms = new Rooms();
rooms.createRoom(room1);
rooms.createRoom(room2);
const getRooms = rooms.getRooms();
const payment = new RoomPayment()
rooms.bookRoom(room1.id, customer1, payment);
console.log(getRooms);
rooms.leaveRoom(room1.id)
console.log(getRooms);

