export class VillaModel {
  villa_name: string;
  city_name: string;
  price: number;
  temperature?: string;

  constructor(obj: any = null) {
    if (obj != null) {
      Object.assign(this, obj);
    }
  }
}
