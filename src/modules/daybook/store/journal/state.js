
export default () => ({
    isLoading: true,
    entries: [
        {
            id: new Date().getTime(),
            date: new Date().toDateString(),
            text: 'Ipsum eu et non ad duis commodo pariatur anim anim cupidatat cillum nostrud.',
            picture: null
        },
        {
            id: new Date().getTime() +1000,
            date: new Date().toDateString(),
            text: 'Consectetur cillum adipisicing deserunt incididunt duis pariatur reprehenderit quis nulla cillum. Minim minim ea consequat consequat labore dolore deserunt. Ut proident aliqua ad ea qui consequat aute. Non laborum commodo elit pariatur id consectetur sit dolore deserunt. Cupidatat elit consequat officia adipisicing tempor est Lorem culpa aliqua minim exercitation pariatur occaecat dolor. Quis aliquip proident sit cupidatat.',
            picture: null
        },
        {
            id: new Date().getTime() +2000,
            date: new Date().toDateString(),
            text: 'Ad quis quis labore incididunt culpa tempor duis pariatur minim eu consequat enim. Veniam eiusmod fugiat labore commodo aliqua ea laboris qui quis nulla fugiat exercitation. Commodo aute laborum id magna nisi excepteur veniam occaecat tempor laborum voluptate officia.',
            picture: null
        },
    ]
})