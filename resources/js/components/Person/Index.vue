<template>
    <table class="table">
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
            <tr v-for="person in people">
                <td scope="row">{{ person.id }}</td>
                <td>
                    <router-link :to="{name: 'person.show', params: { id: person.id }}">{{ person.name }}</router-link>
                </td>
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
                    <button @click.prevent="$store.dispatch('deletePerson', person.id)" class="btn btn-outline-danger">Delete</button>
                </td>
            </tr>
        </tbody>
    </table>
</template>
<script>
    export default {
        name: "Index.vue",

        mounted() {
            this.$store.dispatch('getPeople');
        },

        computed: {
            people() {
                return this.$store.getters.people;
            }
        }
    }
</script>

<style scoped>

</style>
