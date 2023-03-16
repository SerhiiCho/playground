<script setup>
import Posts from './components/Posts.vue'
import LazyLoading from './components/LazyLoading.vue';
</script>

<template>
    <main>
        <h1>Lazy loading with Vue</h1>

        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt quam distinctio perspiciatis maiores, fugit consequatur odio veritatis! Aliquid vitae inventore sint, voluptatum doloremque accusantium debitis provident voluptate esse a atque quod! Temporibus, blanditiis nesciunt minima obcaecati facere eos ad sequi doloremque iusto eum magni, culpa tenetur veniam non voluptatum impedit ea quas. Laudantium sapiente tempora voluptates illum repellat. Temporibus necessitatibus dicta recusandae impedit, repellat qui sequi maxime illum, dignissimos ratione eius delectus labore vel odit ipsam officia corporis voluptas cumque. Nobis deserunt necessitatibus sunt earum inventore provident sapiente ipsum repellat obcaecati accusamus autem numquam, debitis voluptatem velit quo nihil sit facere sequi consectetur, adipisci, dolorum cumque! Consequatur qui sint enim dignissimos voluptates neque nam dolorum obcaecati veniam placeat ea, recusandae amet dolor ipsa eos labore velit molestias eius rerum minus. Mollitia quisquam magni facere ratione illum deleniti vitae, sed distinctio error reiciendis delectus ab ipsum officia eligendi, assumenda blanditiis? Placeat quibusdam nam qui sit molestias beatae exercitationem sed labore ullam eaque suscipit libero a iusto eum nobis dolor, ex minus quis sint ducimus odio nihil repellendus. Repellendus, amet? Officiis ratione saepe ad odio quam suscipit aperiam illum itaque doloribus ab nisi quisquam, fugiat perspiciatis quas tempore harum quidem beatae quibusdam.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad rerum quia id veniam obcaecati nostrum odit voluptatem, assumenda labore est nobis explicabo tempore exercitationem ipsam corrupti nisi, perspiciatis iure magnam architecto eum cupiditate numquam vero, voluptatibus odio! Provident, nam at odio neque adipisci nesciunt. Illum rerum asperiores voluptas magni vero sunt sequi obcaecati architecto labore facilis quisquam repudiandae eum hic, quia ullam blanditiis quo accusantium eligendi id amet! Amet asperiores natus optio voluptatem quam sint suscipit? Neque iusto debitis inventore quod ut labore veritatis modi nesciunt et minus, corporis accusamus saepe quas quidem nihil quasi commodi facere aliquid molestiae ratione.</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam ducimus quaerat velit vitae illo laboriosam! Assumenda, id laborum quis expedita iste at, doloribus omnis reiciendis sequi sit quibusdam consectetur veniam. Animi officiis ducimus dolorum provident deleniti aspernatur natus magnam esse eum, voluptate obcaecati! Modi nisi magnam corrupti tempora eligendi neque perspiciatis, ducimus perferendis delectus, ipsam quisquam dolores fugiat illum ab. Odio reiciendis laudantium ullam sint dolor nihil, quos qui voluptate omnis ipsa sapiente nisi error. Distinctio ipsum, explicabo deserunt dolor nesciunt quo accusantium perferendis sapiente consequuntur aperiam error quia, maiores optio harum corporis fugit dolorum blanditiis eos excepturi provident reprehenderit alias quasi! Sunt blanditiis ducimus, iste excepturi labore iure aliquid voluptatum accusantium a eius consequuntur optio consequatur totam sequi voluptatem praesentium error. Quas odio consequatur maiores cupiditate temporibus totam optio maxime dignissimos natus facere et sint placeat animi commodi, tempora pariatur quibusdam minima! Quasi nostrum accusamus voluptate reprehenderit alias dolorem.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi harum quibusdam soluta maxime mollitia, repellat accusantium vero corporis facilis atque iure deleniti dignissimos molestias, blanditiis eaque perspiciatis itaque. Consequatur nobis earum repudiandae assumenda illum? Inventore iure blanditiis culpa provident vel.</p>

        <LazyLoading>
            <Posts />
        </LazyLoading>
    </main>
</template>

<style scoped>
main {
    max-width: 800px;
    margin: 0 auto;
    padding: 1rem;
}

p {
    font-size: 1.2rem;
}
</style>