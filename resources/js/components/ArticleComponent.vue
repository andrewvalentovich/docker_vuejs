<template>
    <div>
        <SingleArticleComponent></SingleArticleComponent>
        <button @click="sayHello">Press button</button>
        <table class="table">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Age</th>
                <th scope="col">Job</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="person in persons">
                <th scope="row">{{ person.id }}</th>
                <th>{{ person.name }}</th>
                <th>{{ person.age }}</th>
                <th>{{ person.job }}</th>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import SingleArticleComponent from "./SingleArticleComponent";
    export default {
        name: "ArticleComponent",

        data() {
            return {
                persons: [
                    {
                        name: 'Andrew',
                        age: 20,
                        job: 'сын депутата'
                    },
                    {
                        name: 'Nick',
                        age: 20,
                        job: 'Java junior'
                    },
                    {
                        name: 'Vladimir',
                        age: 20,
                        job: 'Monomach'
                    }
                ]
            }
        },

        methods: {
            sayHello() {
                alert('Hello, bro) How are you, dear friend?');
            }
        },

        computed: {
            smbJob() {
                return 'Работает родственником чиновника';
            }
        },

        components: {
            SingleArticleComponent
        }
    }
</script>

<style scoped>

</style>
