import { IDashboardDescription } from './IDashboardDescription';

export const dashboardDescription: IDashboardDescription = {
  name: 'Example Dashboard',
  id: 'default',
  cols: [
    {
      width: 3,
      widgets: []
    },
    {
      width: 3,
      widgets: [
        {
          id: 'todo'
        }
      ]
    },
    {
      width: 4,
      widgets: [
        {
          id: 'clock'
        }
      ]
    }
  ]
};
