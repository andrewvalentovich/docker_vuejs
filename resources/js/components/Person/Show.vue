<template>
    <div class="mt-3" v-if="this.person !== null">
        <div>
            Name: {{ this.person.name }}
        </div>
        <div>
            Age: {{ this.person.age }}
        </div>
        <div>
            Job: {{ this.person.job }}
        </div>
        <div>
            <router-link class="text-decoration-none" :to="{name: 'person.edit', params: { id: this.person.id }}">
                Edit
            </router-link>
            <a @click.prevent="deletePerson" class="text-danger text-decoration-none" href="#">Delete</a>
        </div>
    </div>
</template>

<script>
    import router from "../../router";

    export default {
        name: 'Show',

        data() {
            return {
                person: null
            }
        },

        mounted() {
            this.getPerson();
        },

        methods: {
            getPerson() {
                axios.get('/api/people/' + this.$route.params.id)
                .then(result => {
                    this.person = result.data;
                })
            },
            deletePerson() {
                axios.delete('/api/people/' + this.$route.params.id)
                .then(result => {
                    router.push({ name: 'person.index' });
                })
            }
        }
    }
</script>

<style scoped>

</style>
