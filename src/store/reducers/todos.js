const initialState = [
  { id: 0, text: 'fazer café' },
  { id: 1, text: 'Preparar palestra' },
];

export default function todos(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { id: Math.random(), text: action.payload.text }];
    default:
      return state;
  }
}
