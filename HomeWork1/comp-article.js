Vue.component('comp-article', {
    data() {
        return {
            props: {
                articles: {
                  type: Array,
                  required: true
                }
            }
        }
    },
    template: `
        <div>
            <div class="articles-by-tags__article" v-for="article in articles" :key="article.id">
                <h2 class="articles-by-tags__main-heading">{{ article.heading1 }}</h2>
                <img :src="article.img1" alt="article-img">
                <div class="articles-by-tags__dp-block">
                    <p class="articles-by-tags__date-path">{{ article.date }}</p>
                    <p class="articles-by-tags__date-path">{{ article.path }}</p>
                </div>
                <p class="articles-by-tags__text">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.</p>
                <p class="articles-by-tags__text">Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.</p>
                <div class="articles-by-tags__callout-block">
                    <h1 class="articles-by-tags__callout-one">“</h1>
                    <h4 class="articles-by-tags__callout">{{ article.callout }}</h4>
                </div>
                <h2 class="articles-by-tags__main-heading">{{ article.heading2 }}</h2>
                <p class="articles-by-tags__text">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
                <ol class="articles-by-tags__list">
                    <li class="articles-by-tags__list-item" v-for="(el, index) in article.li" :key="index">{{ el }}</li>
                </ol>
                <img :src="article.img2" alt="article-img2">
                <p class="articles-by-tags__text">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
            
        </div>`
})