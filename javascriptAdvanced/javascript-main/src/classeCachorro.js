
const Animal = require('./classes')

class Cachorro extends Animal{
    falar(){
        console.log(this.especie + ' fala au au au')
    }

    comer(){
        console.log(this.especie + ' come ração ')
    }
}

const cachorro = new Cachorro('cachorro')

cachorro.comer()