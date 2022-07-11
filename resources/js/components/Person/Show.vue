<template>
<!--    <tr :class="this.$parent.showComponentVision(person.id)">-->
<!--        <th>{{ person.id }}</th>-->
<!--        <td>{{ person.name }}</td>-->
<!--        <td>{{ person.age }}</td>-->
<!--        <td>{{ person.job }}</td>-->
<!--        <td>-->
<!--            <a href="#" @click.prevent="changeEditPersonId(person.id, person.name, person.age, person.job)" class="btn btn-primary">Edit</a>-->
<!--        </td>-->
<!--        <td>-->
<!--            <a href="#" @click.prevent="deletePerson(person.id)" class="btn btn-danger">Delete</a>-->
<!--        </td>-->
<!--    </tr>-->
    <div>
        Show
    </div>
</template>

<script>
    export default {
        name: 'ShowComponent',

        // data() {
        //     return {
        //
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
        //     changeEditPersonId(
        //         id,
        //         name,
        //         age,
        //         job
        //     ) {
        //         this.$parent.editPersonId = id;
        //         let editName = this.getEditName(id);
        //         editName.name = name;
        //         editName.age = age;
        //         editName.job = job;
        //     },
        //
        //     getEditName(id) {
        //         let editName = `edit_${id}`;
        //         return this.$parent.$refs[editName][0];
        //     },
        // }
    }
</script>

<style scoped>

</style>
