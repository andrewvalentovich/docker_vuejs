<template>
<!--    <tr :class="this.$parent.editComponentVision(person.id)">-->
<!--        <th><input class="form-control" :value="person.id" type="text"></th>-->
<!--        <td><input class="form-control"  v-model="name" type="text"></td>-->
<!--        <td><input class="form-control" v-model="age" type="text"></td>-->
<!--        <td><input class="form-control" v-model="job" type="text"></td>-->
<!--        <td>-->
<!--            <a href="#" @click.prevent="updatePerson(person.id)" class="btn btn-success">Update</a>-->
<!--            <a href="#" @click.prevent="closeBlock" class="btn btn-warning">Close</a>-->
<!--        </td>-->
<!--        <td>-->
<!--            <a href="#" @click.prevent="deletePerson(person.id)" class="btn btn-danger">Delete</a>-->
<!--        </td>-->
<!--    </tr>-->
    <div>
        Edit
    </div>
</template>

<script>
    export default {
        name: 'EditComponent',

        // data() {
        //     return {
        //         name: null,
        //         age: null,
        //         job: null
        //     }
        // },
        //
        // props: [
        //     'person'
        // ],
        //
        // mounted() {
        //
        // },
        //
        // methods: {
        //     deletePerson(id) {
        //         axios.delete(`/api/people/${id}`)
        //             .then(result => {
        //                 this.$parent.getPersons()
        //             })
        //     },
        //
        //     updatePerson(id) {
        //         this.$parent.editPersonId = null;
        //         axios.patch(`/api/people/${id}`,
        //             {
        //                 name: this.name,
        //                 age: this.age,
        //                 job: this.job
        //             })
        //             .then(result => {
        //                 this.$parent.getPersons()
        //             })
        //     },
        //
        //     closeBlock() {
        //         this.$parent.closeBlock();
        //     },
        //
        //     getLog() {
        //         console.log('this is getPersonComponent');
        //     }
        //
        // }
    }
</script>

<style scoped>

</style>
