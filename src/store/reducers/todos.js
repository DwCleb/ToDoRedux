const initialState = [
  { id: 0, text: 'fazer café' },
  { id: 1, text: 'Preparar palestra' },
];

export default function todos(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { id: Math.random(), text: action.payload.text }];
    case 'REMOVE_TODO':
      return state.filter(todo => todo.id !== action.payload.id);
    default:
      return state;
  }
}
