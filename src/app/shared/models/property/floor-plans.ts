export interface IFloorPlan {
  floorPlanID: number;
  bed: number;
  bath: number;
  sqft: number;
  deposit: number;
  photoUrl: string;
  washerDry: string;
  price: number;
  priceMax: number;
  den: boolean;
  isAvailable: boolean;
  available: Date;
  comments: string;
}