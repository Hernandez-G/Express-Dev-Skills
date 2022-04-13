const skills = [
    {id: 1, skill: 'snacking'},
    {id: 2, skill: 'screaming'},
    {id: 3, skill: 'crying'},
    {id: 4, skill: 'coding'}
];

module.exports = {
    getAll
};

function getAll() {
    return skills;
}