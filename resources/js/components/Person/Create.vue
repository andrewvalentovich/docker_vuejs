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
                <button type="submit" @click.prevent="create" class="btn btn-primary mb-3">Add person</button>
                <button type="submit" @click.prevent="close" class="btn btn-danger mb-3">Close</button>
            </div>
        </form>
    </div>
</template>
<script>
    export default {
        name: "Create",

        data() {
            return {
                name: null,
                age: null,
                job: null,
            }
        },

        methods: {
            create() {
                axios.post('/api/people/', {name: this.name, age: this.age, job: this.job})
                .then(result => {
                    this.$router.push({ name: 'person.index' });  // нестрелочная функция создаёт собственный контекст
                                                            // за счёт чего мы не можем обратиться к data()
                                                            // (this.name, this.age и т.д.)
                });
            },
            close() {
                this.$router.push({ name: 'person.index' });
            }
        }
    }
</script>

<style scoped>

</style>
