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
                <button type="submit" @click.prevent="$store.dispatch('create', {name, age, job})" class="btn btn-primary mb-3">Add person</button>
                <button type="submit" @click.prevent="$store.dispatch('back')" class="btn btn-danger mb-3">Close</button>
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

        computed: {
            isDisabled() {
                return !this.person.name && !this.person.age && !this.person.job;
            }
        }
    }
</script>

<style scoped>

</style>
