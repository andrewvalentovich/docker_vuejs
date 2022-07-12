<template>
    <table class="table table-hover">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
                <th scope="col">Edit</th>
                <th scope="col">Delete</th>
            </tr>
        </thead>
        <tbody>
            <template>
                <tr v-for="person in people" @click="linkToShow(person.id)">
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
                    <td>
                        <div @click.prevent="deletePerson(person.id)" class="btn btn-outline-danger">Delete</div>
                    </td>
                </tr>
            </template>
        </tbody>
    </table>
</template>
<script>
    import router from "../../router";

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
            },
            deletePerson(id) {
                axios.delete('/api/people/' + id)
                .then(result => {
                    this.indexPeople();
                })
            },
            linkToShow(id) {
                router.push({ name: 'person.show', params: { id: id }})
            }
        }
    }
</script>

<style scoped>

</style>
