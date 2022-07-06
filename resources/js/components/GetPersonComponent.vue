<template>
    <div>
        <table class="table table table-striped">
            <thead>
            <tr>
                <th scope="col">#</th>
                <td scope="col">Name</td>
                <td scope="col">Age</td>
                <td scope="col">Job</td>
            </tr>
            </thead>
            <tbody>
            <tr v-for="person in people">
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
    export default {
        name: 'GetPersonComponent',

        data() {
            return {
                people: null
            }
        },

        mounted() {
            this.getPersons();
        },

        methods: {
            getPersons() {
                axios.get('/api/people/')
                    .then(result => {
                        this.people = result.data;
                    })
            }
        }
    }
</script>

<style scoped>

</style>
