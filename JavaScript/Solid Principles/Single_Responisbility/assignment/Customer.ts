export class CustomerProfile {
  id: number;
  name: string;
  mobile: number;
  address: string;

  constructor(id: number, name: string, mobile: number, address: string) {
    this.id = id;
    this.name = name;
    this.mobile = mobile;
    this.address = address;
  }

}
