import { v4 as uuidv4 } from 'uuid';

export const mockData = [
  {
    id: uuidv4(),
    title: '📋 Por hacer',
    tasks: [
      {
        id: uuidv4(),
        title: '📝 Tarea 1',
      },
      {
        id: uuidv4(),
        title: '📝 Tarea 2',
      },
      {
        id: uuidv4(),
        title: '📝 Tarea 3',
      },
    ],
  },
  {
    id: uuidv4(),
    title: '✔️ Completado',
    tasks: [
      {
        id: uuidv4(),
        title: '📝 Tarea 1',
      },
    ],
  },
  {
    id: uuidv4(),
    title: '⚒️ En progreso',
    tasks: [
      {
        id: uuidv4(),
        title: '📝 Tarea 1',
      },
      {
        id: uuidv4(),
        title: '📝 Tarea 2',
      },
      {
        id: uuidv4(),
        title: '📝 Tarea 3',
      },
    ],
  },
];

() => {
  return <div>Kanban</div>;
};
