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
                    <ShowComponent :person="person" :ref="`show_${person.id}`"></ShowComponent>
                    <EditComponent :person="person" :ref="`edit_${person.id}`"></EditComponent>
                </template>
            </tbody>
        </table>
    </div>
</template>

<script>
    import ShowComponent from "./GetPerson/ShowComponent";
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
                let editName = this.getEditName(id);
                console.log('='+editName);
                editName.name = name;
                editName.age = age;
                editName.job = job;
            },

            getEditName(id) {
                let editName = `edit_${id}`;
                return this.$refs[editName][0];
            },

            isEdit(id) {
                return this.editPersonId === id;
            },

            editComponentVision(id) {
                if(this.isEdit(id)) {
                    return '';
                } else {
                    return 'd-none';
                }
            },

            showComponentVision(id) {
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
            ShowComponent,
            EditComponent
        }
    }
</script>

<style scoped>
    .form-control-plaintext{
        outline: none!important;
    }
</style>
