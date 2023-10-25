var app = new Vue({
    el: '#app',
    data: {
        projects: [
            {
                id: 1,
                image: 'img/item1.jpg',
                room: 'Kitchen Design',
                heading: 'Let’s Get Solution For Building Construction Work',
                date: '26 December,2022'
            },
            {
                id: 2,
                image: 'img/item2.jpg',
                room: 'Living Design',
                heading: 'Low Cost Latest Invented Interior Designing Ideas',
                date: '22 December,2022'
            },
            {
                id: 3,
                image: 'img/item3.jpg',
                room: 'Interior Design',
                heading: 'Best For Any Office & Business Interior Solution',
                date: '25 December,2022'
            },
            {
                id: 4,
                image: 'img/item1.jpg',
                room: 'Kitchen Design',
                heading: 'Let’s Get Solution For Building Construction Work',
                date: '26 December,2022'
            },
            {
                id: 5,
                image: 'img/item2.jpg',
                room: 'Living Design',
                heading: 'Low Cost Latest Invented Interior Designing Ideas',
                date: '22 December,2022'
            },
            {
                id: 6,
                image: 'img/item3.jpg',
                room: 'Interior Design',
                heading: 'Best For Any Office & Business Interior Solution',
                date: '25 December,2022'
            }
        ]
    },
    computed: {
        shortListProjects() {
            return this.projects.slice(0, 3);
        }
    }
})