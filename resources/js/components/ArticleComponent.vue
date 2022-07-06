<template>
    <div>
        <CreatePersonComponent></CreatePersonComponent>
        <SingleArticleComponent></SingleArticleComponent>
        <button @click="sayHello">Press button</button>
        <table class="table table table-striped">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <td scope="col">First</td>
                    <td scope="col">Age</td>
                    <td scope="col">Job</td>
                </tr>
            </thead>
            <tbody>
                <tr v-for="person in persons">
                    <th scope="row">{{ person.id }}</th>
                    <td>{{ person.name }}</td>
                    <td>{{ person.age }}</td>
                    <td>{{ person.job }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import SingleArticleComponent from "./SingleArticleComponent";
    import CreatePersonComponent from "./CreatePersonComponent";
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
            CreatePersonComponent
        }
    }
</script>

<style scoped>

</style>
