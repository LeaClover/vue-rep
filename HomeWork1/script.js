var app = new Vue({
    el: '#app',
    data: {
        tag: '',
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
        ],
        articles: [
            {
                id: 1,
                heading1: 'Let’s Get Solution for Building Construction Work', 
                heading2: 'Design sprints are great',
                img1: 'img/article1.jpg', 
                img2: 'img/article1-2.jpg',
                tag: 'kitchen',
                date: '26 December,2022',
                path: 'Interior / Home / Decore',
                callout: 'The details are not the details. They make the design.', 
                li: ["Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.", 
                "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.", 
                "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered."]
            },
            {
                id: 2,
                heading1: 'Let’s Get Solution for Building Construction Work', 
                heading2: 'Design sprints are great',
                img1: 'img/article1.jpg', 
                img2: 'img/article1-2.jpg',
                tag: 'Bedroom',
                date: '26 December,2022',
                path: 'Interior / Home / Decore',
                callout: 'The details are not the details. They make the design.', 
                li: ["Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.", 
                "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.", 
                "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered."]
            },
            {
                id: 3,
                heading1: 'Let’s Get Solution for Building Construction Work', 
                heading2: 'Design sprints are great',
                img1: 'img/article1.jpg', 
                img2: 'img/article1-2.jpg',
                tag: 'kitchen Planning',
                date: '26 December,2022',
                path: 'Interior / Home / Decore',
                li: ["Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.", 
                "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.", 
                "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered."]
            },
            {
                id: 4,
                heading1: 'Let’s Get Solution for Building Construction Work', 
                heading2: 'Design sprints are great',
                img1: 'img/article1.jpg', 
                img2: 'img/article1-2.jpg',
                tag: 'Building',
                date: '26 December,2022',
                path: 'Interior / Home / Decore',
                callout: 'The details are not the details. They make the design.', 
                li: ["Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.", 
                "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.", 
                "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered."]
            },
            {
                id: 5,
                heading1: 'Let’s Get Solution for Building Construction Work', 
                heading2: 'Design sprints are great',
                img1: 'img/article1.jpg', 
                img2: 'img/article1-2.jpg',
                tag: 'Architecture',
                date: '26 December,2022',
                path: 'Interior / Home / Decore',
                callout: 'The details are not the details. They make the design.', 
                li: ["Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.", 
                "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.", 
                "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered."]
            },
            {
                id: 6,
                heading1: 'Let’s Get Solution for Building Construction Work', 
                heading2: 'Design sprints are great',
                img1: 'img/article1.jpg', 
                img2: 'img/article1-2.jpg',
                tag: 'Bathroom',
                date: '26 December,2022',
                path: 'Interior / Home / Decore',
                li: ["Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.", 
                "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.", 
                "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered."]
            },
            {
                id: 7,
                heading1: 'Let’s Get Solution for Building Construction Work', 
                heading2: 'Design sprints are great',
                img1: 'img/article1.jpg', 
                img2: 'img/article1-2.jpg',
                tag: 'kitchen Planning',
                date: '26 December,2022',
                path: 'Interior / Home / Decore',
                callout: 'The details are not the details. They make the design.', 
                li: ["Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.", 
                "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.", 
                "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered."]
            },
            {
                id: 8,
                heading1: 'Let’s Get Solution for Building Construction Work',
                heading2: 'Design sprints are great',
                img1: 'img/article1.jpg', 
                img2: 'img/article1-2.jpg',
                tag: 'Bedroom',
                date: '26 December,2022',
                path: 'Interior / Home / Decore',
                callout: 'The details are not the details. They make the design.', 
                li: ["Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.", 
                "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.", 
                "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered."]
            }
        ]
    },
    methods: {
        sortByTags(tag) {
            this.tag = tag;
            console.log(tag);
            return tag ? this.articles.filter((el) => el.tag.includes(tag)) : this.articles;
        }
    },
    computed: {
        shortListProjects() {
            return this.projects.slice(0, 3);
        }
    }
})