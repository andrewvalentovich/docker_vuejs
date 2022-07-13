<template>
    <div class="mt-3" v-if="person !== null">
        <div>
            Name: {{ person.name }}
        </div>
        <div>
            Age: {{ person.age }}
        </div>
        <div>
            Job: {{ person.job }}
        </div>
        <div>
            <router-link class="text-decoration-none" :to="{name: 'person.edit', params: { id: person.id }}">
                Edit
            </router-link>
            <a @click.prevent="$store.dispatch('deletePersonWithRedirect', person.id)" class="text-danger text-decoration-none" href="#">Delete</a>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Show',

        mounted() {
            this.$store.dispatch('getPerson', this.$route.params.id)
        },

        computed: {
            person() {
                return this.$store.getters.person;
            }
        },
    }
</script>

<style scoped>

</style>
