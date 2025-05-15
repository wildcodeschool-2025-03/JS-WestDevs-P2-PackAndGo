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
export interface HotelBudgetProps {
  midRangeHotel: Accomodation;
  luxuryHotel: Accomodation;
  classicHotel: Accomodation;
  budgetEcoHotel: Accomodation;
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
export interface TransportBudget {
  public: Transport;
  taxi: Transport;
  bike_rental: Transport;
}
export interface TransportBudgetProps {
  publicTransport: Transport;
  taxi: Transport;
  bikeRental: Transport;
}
interface Food {
  specialties: string[];
  description: string;
  tips: string;
}
export interface LocalFoodProps {
  food: Food;
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
export interface CultureDetailProps {
  culture: Culture;
}
interface Info {
  accommodation: AccomodationGlobal;
  local_food: Food;
  transport: TransportBudget;
  culture: Culture;
  budget: Budget;
}
export interface GlobalBudgetProps {
  budget: Budget;
}
interface Global {
  info: Info;
  name: string;
  short_name: string;
  realimage: string;
  population?: number;
  slug: string;
  latitude: number;
  longitude: number;
}
interface Data {
  attributes: Global;
  id: string;
}
export interface City {
  data: Data;
}
export interface ObjectDetail {
  city: City;
}
