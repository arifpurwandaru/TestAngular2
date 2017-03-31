import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let employees = [
      {id: 1, name: 'Xavier Stonehoff', job: 'Software Engineer', salary: '$3000', bonus: '$1000', supervisor: 'Geralt'},
      {id: 2, name: 'Walter Spinx', job: 'Software Engineer', salary: '$3120', bonus:'$500', supervisor:'Kareem Benzema'}
    ];
    return {employees};
  }
}
