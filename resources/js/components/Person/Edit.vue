<template>
    <div class="w-25 mt-4">
        <form class="form">
            <div class="form-floating mb-3">
                <input type="text" class="form-control" id="nameInput" v-model="name" placeholder="Ivan">
                <label for="nameInput">First name</label>
            </div>
            <div class="form-floating mb-3">
                <input type="number" class="form-control" id="ageInput" v-model="age" placeholder="22">
                <label for="ageInput">Age</label>
            </div>
            <div class="form-floating mb-3">
                <input type="text" class="form-control" id="jobInput" v-model="job" placeholder="PHP programmer">
                <label for="jobInput">Job</label>
            </div>
            <div class="mb-3">
                <button type="submit" @click.prevent="update" class="btn btn-primary mb-3">Update information</button>
                <button type="submit" @click.prevent="close" class="btn btn-danger mb-3">Close</button>
            </div>
        </form>
    </div>
</template>
<script>
    import router from "../../router";

    export default {
        name: 'Edit',

        data() {
            return {
                name: null,
                age: null,
                job: null
            }
        },

        mounted() {
            this.getPerson();
        },

        methods: {
            getPerson() {
                axios.get('/api/people/' + this.$route.params.id)
                .then(result => {
                    this.name = result.data.name;
                    this.age = result.data.age;
                    this.job = result.data.job;
                })
            },

            update() {
                axios.patch(
                    '/api/people/' + this.$route.params.id,
                    {
                        name: this.name,
                        age: this.age,
                        job: this.job
                    }
                )
                .then(result => {
                    router.push({ name: 'person.show', params: { id: this.$route.params.id }});
                })
            },
            close() {
                router.push({ name: 'person.index' });
            }
        }
    }
</script>

<style scoped>

</style>
