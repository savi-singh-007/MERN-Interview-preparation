import { Room } from "./Room";

export class RoomPayment {
    pay (room : Room) {
        console.log("Payment started for room", room.id)
        console.log("Payment Finished for room", room.id)

    }
}