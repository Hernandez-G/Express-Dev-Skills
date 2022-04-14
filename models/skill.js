const skills = [
    {id: 1, skill: 'snacking', done: true},
    {id: 2, skill: 'screaming', done: true},
    {id: 3, skill: 'crying', done: true},
    {id: 4, skill: 'coding', done: false}
];

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    update
};

function update(id, skill) {
    id = parseInt(id);
    const updatedSkill = skills.find((skill) => skill.id === id);
    Object.assign(updatedSkill, skill);
  }

  function deleteOne(id) {
    id = parseInt(id);
    const idx = skills.findIndex((skill) => skill.id === id);
    skills.splice(idx, 1);
  }

function create(skill) {
    skill.id = Date.now() % 1000000;
    skill.done = false;
    skills.push(skill);
}

function getOne(id) {
    id = parseInt(id);
    return skills.find((skill) => skill.id === id);
}

function getAll() {
    return skills;
}