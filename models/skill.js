const skills = [
    {id: 1, skill: 'snacking', done: true},
    {id: 2, skill: 'screaming', done: true},
    {id: 3, skill: 'crying', done: true},
    {id: 4, skill: 'coding', done: false}
];

module.exports = {
    getAll,
    getOne
};

function getOne(id) {
    id = parseInt(id);
    return skills.find((skill) => skill.id === id);
}

function getAll() {
    return skills;
}