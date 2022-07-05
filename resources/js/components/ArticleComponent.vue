<template>
    <div>
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
                <tr v-for="person in personsAgeAreMoreThrityOne">
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
    export default {
        name: "ArticleComponent",

        data() {
            return {
                persons: [
                    {
                        id: 1,
                        name: 'Andrew',
                        age: 43,
                        job: 'Traveler'
                    },
                    {
                        id: 2,
                        name: 'Nick',
                        age: 21,
                        job: 'Java junior'
                    },
                    {
                        id: 3,
                        name: 'Vladimir',
                        age: 61,
                        job: 'Driver'
                    },
                    {
                        id: 4,
                        name: 'Alexandro',
                        age: 12,
                        job: 'Military'
                    },
                    {
                        id: 5,
                        name: 'Peter',
                        age: 33,
                        job: 'Engineer'
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
            },
            personsAgeAreMoreThrityOne() {
                return this.persons.filter(function(person) {
                    return person.age > 31;
                })
            }

        },

        components: {
            SingleArticleComponent
        }
    }
</script>

<style scoped>

</style>
