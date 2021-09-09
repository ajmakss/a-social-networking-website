let initialState = {
    dialogsData: [
        { id: 1, name: 'Ivan' },
        { id: 2, name: 'Olesia' },
        { id: 3, name: 'Diana' },
        { id: 4, name: 'Maryan' },
        { id: 5, name: 'Valentyn' },
        { id: 6, name: 'Ivan' },
        { id: 7, name: 'Olesia' },
        { id: 8, name: 'Diana' },
        { id: 9, name: 'Maryan' },
        { id: 10, name: 'Valentyn' },
    ],
    messagesData: [
        { id: 1, message: 'Hi, how are you?' },
        { id: 2, message: 'What are you doing?' },
        { id: 3, message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
        { id: 4, message: 'Hi, how are you?' },
        { id: 5, message: 'What are you doing?' },
        { id: 6, message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
        { id: 7, message: 'Hi, how are you?' },
        { id: 8, message: 'What are you doing?' },
        { id: 9, message: 'Have you seen this film?' },
        { id: 10, message: 'Hi, how are you?' },
    ],
    messageText: 'Hello its me',
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD-NEW-MESSAGE':

            let newMessage = {
                id: 11,
                message: state.messageText,
            };
            return {
                ...state,
                messageText: '',
                messagesData: [...state.messagesData, newMessage]
            };
        case 'UPDATE-MESSAGE-TEXT':
            return {
                ...state,
                messageText: action.text
            };
        default:
            return state;
    }
}

export const sendNewMessageActionCreactor = () => ({ type: 'ADD-NEW-MESSAGE' });
export const updateMessageTextActionCreactor = (message) => {
    return {
        type: 'UPDATE-MESSAGE-TEXT',
        text: message
    }
};

export default dialogsReducer;