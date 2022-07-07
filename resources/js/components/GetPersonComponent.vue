<template>
    <div>
        <table class="table">
            <thead>
            <tr>
                <th scope="col">#</th>
                <td scope="col">Name</td>
                <td scope="col">Age</td>
                <td scope="col">Job</td>
                <td scope="col">Edit</td>
                <td scope="col">Delete</td>
            </tr>
            </thead>
            <tbody>
                <template v-for="person in people">
                    <tr :class="editBlockVision(person.id)">
                        <th>{{ person.id }}</th>
                        <td>{{ person.name }}</td>
                        <td>{{ person.age }}</td>
                        <td>{{ person.job }}</td>
                        <td>
                            <a href="#" @click.prevent="changeEditPersonId(person.id, person.name, person.age, person.job)" class="btn btn-primary">Edit</a>
                        </td>
                        <td>
                            <a href="#" @click.prevent="deletePerson(person.id)" class="btn btn-danger">Delete</a>
                        </td>
                    </tr>
                    <tr :class="updateBlockVision(person.id)">
                        <th><input class="form-control" :value="person.id" type="text"></th>
                        <td><input class="form-control"  v-model="name" type="text"></td>
                        <td><input class="form-control" v-model="age" type="text"></td>
                        <td><input class="form-control" v-model="job" type="text"></td>
                        <td>
                            <a href="#" @click.prevent="updatePerson(person.id)" class="btn btn-success">Update</a>
                            <a href="#" @click.prevent="closeBlock" class="btn btn-warning">Close</a>
                        </td>
                        <td>
                            <a href="#" @click.prevent="deletePerson(person.id)" class="btn btn-danger">Delete</a>
                        </td>
                    </tr>
                </template>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name: 'GetPersonComponent',

        data() {
            return {
                people: null,
                editPersonId: null,
                name: 'Andrew',
                age: null,
                job: null
            }
        },

        mounted() {
            this.getPersons();
            this.$parent.parentLog();
            console.log(this.$parent.$refs.getPersonComponent.name);
        },

        methods: {
            getPersons() {
                axios.get('/api/people/')
                .then(result => {
                    this.people = result.data;
                })
            },

            deletePerson(id) {
                axios.delete(`/api/people/${id}`)
                    .then(result => {
                        this.getPersons()
                    })
            },

            updatePerson(id) {
                this.editPersonId = null;
                axios.patch(`/api/people/${id}`,
                {
                    name: this.name,
                    age: this.age,
                    job: this.job
                })
                .then(result => {
                    this.getPersons()
                })
            },

            changeEditPersonId(
                id,
                name,
                age,
                job
            ) {
                this.editPersonId = id;
                this.name = name;
                this.age = age;
                this.job = job;
            },

            isEdit(id) {
                return this.editPersonId === id;
            },

            updateBlockVision(id) {
                if(this.isEdit(id)) {
                    return '';
                } else {
                    return 'd-none';
                }
            },

            editBlockVision(id) {
                if(!this.isEdit(id)) {
                    return '';
                } else {
                    return 'd-none';
                }
            },

            closeBlock() {
                this.editPersonId = null;
            },

            getLog() {
                console.log('this is getPersonComponent');
            }

        }
    }
</script>

<style scoped>
    .form-control-plaintext{
        outline: none!important;
    }
</style>
