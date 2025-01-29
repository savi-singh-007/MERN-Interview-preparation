import { CustomerProfile } from "./Customer";
import { RoomPayment } from "./Payment";

export class Room {
  id: number;
  roomNo: number;
  price: number;
  customer: string;
  isOccupied: boolean;

  constructor(id: number, roomNo: number, price: number) {
    this.id = id;
    this.customer = "N/A";
    this.isOccupied = false;
    this.price = price;
    this.roomNo = roomNo;
  }
}

export class Rooms {
  rooms: Room[] = [];
  createRoom(room: Room) {
    return this.rooms.push(room);
  }

  getRooms() {
    return this.rooms;
  }

  deleteRoom(id: number) {
    const roomIndex = this.rooms.findIndex((room) => room.id === id);
    if (roomIndex === -1) {
      console.log("room not forund");
      return;
    }
    this.rooms.splice(roomIndex, 1);
    return this.rooms;
  }

  bookRoom(id: number, customer: CustomerProfile, payment: RoomPayment) {
    const room = this.rooms.find((room) => room.id === id && !room.isOccupied);
    if (!room) {
      console.log("Can't book this room");
      return;
    }
    room.customer = customer.name;
    room.isOccupied = true;
    payment.pay(room);
  }
  leaveRoom(roomId: number) {
    const room = this.rooms.find((room) => room.id === roomId && room.isOccupied);
    if (!room) {
      console.log("Room not found or not booked");
      return;
    }
    room.customer = "N/A";
    room.isOccupied = false;
  }
}
