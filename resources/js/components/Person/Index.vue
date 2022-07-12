<template>
    <table class="table">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
                <th scope="col">Edit</th>
            </tr>
        </thead>
        <tbody>
            <template>
                <tr v-for="person in people">
                    <td scope="row">{{ person.id }}</td>
                    <td>{{ person.name }}</td>
                    <td>{{ person.age }}</td>
                    <td>{{ person.job }}</td>
                    <td>
                        <router-link class="text-reset text-decoration-none text-light" :to="{name: 'person.edit', params: { id: person.id }}">
                            <div class="btn btn-primary">
                                Edit
                            </div>
                        </router-link>
                    </td>
                </tr>
            </template>
        </tbody>
    </table>
</template>
<script>
    export default {
        name: "Index.vue",

        data() {
            return{
                people: null,
            }
        },

        mounted() {
            this.indexPeople();
        },

        methods: {
            indexPeople() {
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
