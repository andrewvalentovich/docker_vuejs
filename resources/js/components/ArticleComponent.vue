<template>
    <div>
        <CreatePersonComponent></CreatePersonComponent>
        <GetPersonComponent></GetPersonComponent>
        <button @click="sayHello">Press button</button>
    </div>
</template>

<script>
    import SingleArticleComponent from "./SingleArticleComponent";
    import CreatePersonComponent from "./CreatePersonComponent";
    import GetPersonComponent from "./GetPersonComponent";
    export default {
        name: "ArticleComponent",

        data() {
            return{
                persons: null
            }
        },

        methods: {
            sayHello() {
                alert('Hello, bro) How are you, dear friend?');
            }
        },

        computed: {

        },

        components: {
            SingleArticleComponent,
            CreatePersonComponent,
            GetPersonComponent
        }
    }
</script>

<style scoped>

</style>
