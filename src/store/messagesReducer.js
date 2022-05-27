let id = 2;

const initialState = [
  {
    id: 1,
    content: 'Intégrer les animations serait pas très important avant le mise en ligne du MVP',
    author: "Nacho"
  },
  {
    id: 2,
    content: "Faites donc voir votre glu à l'ancienne: cette vielle colle s'enflamme au contact des feux",
    author: "Nacho"
  }
]

export const ADD_MESSAGE_ACTION = 'ADD_MESSAGE_ACTION'

export function messagesReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_MESSAGE_ACTION:
      return [...state, { id: ++id , author:"Nacho", ...action.payload}]
    default:
      return state
  }
}