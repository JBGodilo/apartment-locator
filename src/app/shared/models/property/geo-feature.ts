export interface IGeoJSON {
  type: string;
  features: IFeature[]
}

interface IFeature {
  type: string;
  geometry: IGeometry;
  properties: IProperty
}

interface IGeometry {
  type: number;
  coordinates: [number, number]
}

interface IProperty {
  title: string;
  description: string;
  isFavorite: boolean;
}