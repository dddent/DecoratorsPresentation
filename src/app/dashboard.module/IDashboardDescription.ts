import { IDashboardColDescription } from './IDashboardColDescription';

export interface IDashboardDescription {
  name: string;
  id: string;
  cols: IDashboardColDescription[];
}