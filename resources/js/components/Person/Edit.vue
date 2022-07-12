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
                <input type="button" :disabled="isDisabled" @click.prevent="update" class="btn btn-primary mb-3" value="Update information">
                <input type="button" @click.prevent="close" class="btn btn-danger mb-3" value="Close">
            </div>
        </form>
    </div>
</template>
<script>
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

        computed: {
            isDisabled() {
                return !this.name && !this.age && !this.job;
            }
        },

        methods: {
            getPerson() {
                axios.get(`/api/people/${this.$route.params.id}`)
                .then(result => {
                    this.name = result.data.data.name;
                    this.age = result.data.data.age;
                    this.job = result.data.data.job;
                })
            },

            update() {
                axios.patch(
                    `/api/people/${this.$route.params.id}`,
                    {
                        name: this.name,
                        age: this.age,
                        job: this.job
                    }
                )
                .then(result => {
                    this.$router.push({ name: 'person.show', params: { id: this.$route.params.id }});
                })
            },
            close() {
                this.$router.go(-1);
            }
        }
    }
</script>

<style scoped>

</style>
