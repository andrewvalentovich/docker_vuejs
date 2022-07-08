<template>
    <div>
        <CreatePersonComponent></CreatePersonComponent>
        <GetPersonComponent ref="get"></GetPersonComponent>
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

        mounted() {
            console.log(this.$refs.get.name);
        },

        methods: {
            sayHello() {
                alert('Hello, bro) How are you, dear friend?');
            },
            parentLog() {
                console.log('ArticleComponent');
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
