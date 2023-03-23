export interface GlobalState {
    title: string;
    counter: number;
}

export const reducer = (state: any, action: any) => {
    switch(action.type){
        case 'change': {
            return { ...state, title: ' Click ', counter: state.counter + 1}
        }
        case 'invert': {
            return { ...state, title: state.title.split('').reverse().join('')}
        }
    }
}