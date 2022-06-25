<template>
    <div>
        <SingleArticleComponent></SingleArticleComponent>
        <h2>Name: {{ name }}</h2>
        <button @click="sayHello">Press button</button>
    </div>
</template>

<script>
    import SingleArticleComponent from "./SingleArticleComponent";
    export default {
        name: "ArticleComponent",

        data() {
            return {
                name: 'Andrew',
                age: 20,
                arr: [
                    'Nik',
                    'Ill',
                ]
            }
        },

        methods: {
            sayHello() {
                alert('Hello, bro) How are you, dear friend?');
            }
        },

        components: {
            SingleArticleComponent
        }
    }
</script>

<style scoped>

</style>
