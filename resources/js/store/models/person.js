import router from "../../router";

const state = {
    person: null,
    people: null,
}

const getters = {
    person: () => state.person,
    people: () => state.people,
}

const actions = {
    getPerson({state, commit, dispatch}, id) {
        axios.get(`/api/people/${id}`)
        .then(result => {
            commit('setPerson', result.data.data);
        })
    },

    getPeople({commit}, id) {
        axios.get('/api/people/')
        .then(result => {
            commit('setPeople', result.data.data)
        })
    },

    deletePerson({dispatch}, id) {
        axios.delete(`/api/people/${id}`)
        .then(result => {
            dispatch('getPeople');
        })
    },

    deletePersonWithRedirect({dispatch}, id) {
        axios.delete(`/api/people/${id}`)
        .then(result => {
            router.push({ name: 'person.index'});
        })
    },

    update({}, data) {
        axios.patch(
            `/api/people/${data.id}`,
            {
                name: data.name,
                age: data.age,
                job: data.job
            }
        )
        .then(result => {
            router.push({ name: 'person.show', params: { id: data.id }});
        })
    },

    create({}, data) {
        axios.post('/api/people/', {name: data.name, age: data.age, job: data.job})
            .then(result => {
                router.push({ name: 'person.index' });  // нестрелочная функция создаёт собственный контекст
                // за счёт чего мы не можем обратиться к data()
                // (this.name, this.age и т.д.)
            });
    },

    close() {
        router.push({ name: 'person.index' });
    },

    back() {
        router.go(-1);
    }
}

const mutations = {
    setPerson(state, person) {
        state.person = person;
    },
    setPeople(state, people) {
        state.people = people;
    }
}

export default {
    state, mutations, getters, actions
}
