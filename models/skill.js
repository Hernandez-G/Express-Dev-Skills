const skills = [
    {id: 1, skill: 'snacking'},
    {id: 2, skill: 'screaming'},
    {id: 3, skill: 'crying'},
    {id: 4, skill: 'coding'}
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