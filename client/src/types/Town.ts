interface Accomodation {
  average_price: number;
  description: string;
  currency: string;
  tips?: string;
}
interface AccomodationGlobal {
  hostel: Accomodation;
  budget_hotel: Accomodation;
  midrange_hotel: Accomodation;
  luxury_hotel: Accomodation;
  local_food: Accomodation;
}
interface Transport {
  types?: string[];
  average_ticket?: number | string;
  average_fare?: number;
  average_price_per_day?: number;
  currency: string;
  description: string;
  tips: string;
}
interface TransportGlobal {
  public: Transport;
  taxi: Transport;
  bike_rental: Transport;
}
interface Food {
  specialties: string[];
  description: string;
  tips: string;
}
interface Budget {
  is_expensive: boolean;
  daily_average: number;
  currency: string;
  notes: string;
  tips: string;
}
interface Culture {
  must_see: string[];
  description: string;
  tips: string;
}
interface Info {
  accommodation: AccomodationGlobal;
  local_food: Food;
  transport: TransportGlobal;
  culture: Culture;
  budget: Budget;
}
interface Global {
  info: Info;
  name: string;
  short_name: string;
  realimage: string;
  population?: number;
  slug: string;
}
interface Data {
  attributes: Global;
  id: string;
}
export interface City {
  data: Data;
}
