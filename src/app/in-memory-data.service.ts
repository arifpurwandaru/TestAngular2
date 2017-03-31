import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let employees = [
      {id: 1, name: 'Xavier Stonehoff', job: 'Software Engineer', salary: '$3000', bonus: '$500', supervisor: 'Geralt'},
      {id: 2, name: 'Walter Spinx', job: 'Software Engineer', salary: '$3120', bonus:'$500', supervisor:'Kareem Benzema'},
      {id: 3, name: 'Talion Mordor', job: 'Software Engineer', salary: '$4500', bonus:'$700', supervisor:'Kareem Benzema'},
      {id: 4, name: 'Claudia White', job: 'Software Quality', salary: '$1700', bonus:'$100', supervisor:'Trish Merigold'},
      {id: 5, name: 'Astrid Walker', job: 'Software Quality', salary: '$1250', bonus:'$100', supervisor:'Trish Merigold'}
    ];
    return {employees};
  }
}
