<template>
    <div class="mb-5">
        <div class="container">
            <div class="row col-6">
                <form>
                    <div class="mb-3">
                        <label for="exampleInputName" class="form-label">Name</label>
                        <input type="text" class="form-control" v-model="name" id="exampleInputName" aria-describedby="nameHelp">
                        <div id="nameHelp" class="form-text">We'll never share your name with anyone else...</div>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputAge" class="form-label">Age</label>
                        <input type="text" class="form-control" v-model="age" id="exampleInputAge">
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputJob" class="form-label">Job</label>
                        <input type="text" class="form-control" v-model="job" id="exampleInputJob">
                    </div>
                    <div class="mb-3 form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1">
                        <label class="form-check-label" for="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" @click.prevent="appPerson" class="btn btn-primary">Add person</button>
                </form>
            </div>
        </div>


    </div>
</template>

<script>
    export default {
        name: 'CreatePersonComponent',

        data() {
            return {
                name: null,
                age: null,
                job: null
            }
        },

        methods: {
            appPerson() {
                axios.post('/api/people/', {
                    name: this.name,
                    age: this.age,
                    job: this.job,
                })
                .then(result => {
                    this.name = null
                    this.age = null
                    this.job = null
                    this.$parent.$refs.get.getPersons()
                })
            }
        }
    }
</script>

<style scoped>

</style>
