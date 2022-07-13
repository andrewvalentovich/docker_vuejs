<template>
    <div class="w-25 mt-4">
        <form class="form" v-if="person">
            <div class="form-floating mb-3">
                <input type="text" class="form-control" id="nameInput" v-model="person.name" placeholder="Ivan">
                <label for="nameInput">First name</label>
            </div>
            <div class="form-floating mb-3">
                <input type="number" class="form-control" id="ageInput" v-model="person.age" placeholder="22">
                <label for="ageInput">Age</label>
            </div>
            <div class="form-floating mb-3">
                <input type="text" class="form-control" id="jobInput" v-model="person.job" placeholder="PHP programmer">
                <label for="jobInput">Job</label>
            </div>
            <div class="mb-3">
                <input type="button" :disabled="isDisabled" @click.prevent="$store.dispatch('update',{id: person.id,name: person.name,age: person.age,job: person.job,})" class="btn btn-primary mb-3" value="Update information">
                <input type="button" @click.prevent="$store.dispatch('back')" class="btn btn-danger mb-3" value="Close">
            </div>
        </form>
    </div>
</template>
<script>
    export default {
        name: 'Edit',

        mounted() {
            this.$store.dispatch('getPerson', this.$route.params.id);
        },

        computed: {
            person() {
                return this.$store.getters.person
            },

            isDisabled() {
                return !this.person.name && !this.person.age && !this.person.job;
            }
        },
    }
</script>

<style scoped>

</style>
