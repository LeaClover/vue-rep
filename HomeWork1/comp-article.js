Vue.component('comp-article', {
    data() {
        return {
            props: ['article'],
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
                    tag: 'kitchen',
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
                    tag: 'kitchen',
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
                    tag: 'kitchen',
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
                    tag: 'kitchen',
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
                    tag: 'kitchen',
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
                    tag: 'kitchen',
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
                    tag: 'kitchen',
                    date: '26 December,2022',
                    path: 'Interior / Home / Decore',
                    callout: 'The details are not the details. They make the design.', 
                    li: ["Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.", 
                    "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.", 
                    "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered."]
                }
            ]
        }
    },
    template: `
        <div class="articles-by-tags__articles-block">
            <div class="articles-by-tags__article" v-for="{id, heading1, heading2, img1, img2, tag, date, path, callout, li} in articles" :key="id">
                <h2 class="articles-by-tags__main-heading">{{ heading1 }}</h2>
                <img :src="img1" alt="article-img">
                <div class="articles-by-tags__dp-block">
                    <p class="articles-by-tags__date-path">{{ date }}</p>
                    <p class="articles-by-tags__date-path">{{ path }}</p>
                </div>
                <p class="articles-by-tags__text">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.</p>
                <p class="articles-by-tags__text">Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.</p>
                <div class="articles-by-tags__callout-block">
                    <h1 class="articles-by-tags__callout-one">“</h1>
                    <h4 class="articles-by-tags__callout">{{ callout }}</h4>
                </div>
                <h2 class="articles-by-tags__main-heading">{{ heading2 }}</h2>
                <p class="articles-by-tags__text">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
                <ol class="articles-by-tags__list" v-for="(el, index) in li" :key="index">
                    <li :value="index+1" class="articles-by-tags__list-item">{{ el }}</li>
                </ol>
                <img :src="img2" alt="article-img2">
                <p class="articles-by-tags__text">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
            </div>
        </div>`
    ,
    methods: {

    }
})