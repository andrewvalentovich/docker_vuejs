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
                    <EditComponent :person="person" :ref="`edit_${person.id}`"></EditComponent>
                </template>
            </tbody>
        </table>
    </div>
</template>

<script>
    import EditComponent from "./GetPerson/EditComponent";
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
            console.log(this.$parent.$refs.get.name);
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
                let editName = `edit_${id}`;
                let fullEditName = this.$refs[editName][0];
                fullEditName.name = name;
                fullEditName.age = age;
                fullEditName.job = job;
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

        },

        components: {
            EditComponent
        }
    }
</script>

<style scoped>
    .form-control-plaintext{
        outline: none!important;
    }
</style>
